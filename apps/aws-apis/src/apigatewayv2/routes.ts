import { createRoute, z } from '@hono/zod-openapi'

const StringSchema = z.string().openapi('String')

const BooleanSchema = z.boolean().openapi('Boolean')

const IdSchema = z.string().openapi({ description: 'The identifier.' }).openapi('Id')

const SelectionExpressionSchema = z
  .string()
  .openapi({
    description:
      'An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information.',
  })
  .openapi('SelectionExpression')

const CorsHeaderListSchema = z
  .array(StringSchema)
  .openapi({
    description: 'Represents a collection of allowed headers. Supported only for HTTP APIs.',
  })
  .openapi('CorsHeaderList')

const StringWithLengthBetween1And64Schema = z
  .string()
  .openapi({ description: 'A string with a length between [1-64].' })
  .openapi('StringWithLengthBetween1And64')

const CorsMethodListSchema = z
  .array(StringWithLengthBetween1And64Schema)
  .openapi({ description: 'Represents a collection of methods. Supported only for HTTP APIs.' })
  .openapi('CorsMethodList')

const CorsOriginListSchema = z
  .array(StringSchema)
  .openapi({ description: 'Represents a collection of origins. Supported only for HTTP APIs.' })
  .openapi('CorsOriginList')

const IntegerWithLengthBetweenMinus1And86400Schema = z
  .int()
  .min(-1)
  .max(86400)
  .openapi({
    description: 'An integer with a value between -1 and 86400. Supported only for HTTP APIs.',
  })
  .openapi('IntegerWithLengthBetweenMinus1And86400')

const CorsSchema = z
  .object({
    AllowCredentials: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'allowCredentials' },
          description:
            'Specifies whether credentials are included in the CORS request. Supported only for HTTP APIs.',
        }),
    ).exactOptional(),
    AllowHeaders: CorsHeaderListSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'allowHeaders' },
          description: 'Represents a collection of allowed headers. Supported only for HTTP APIs.',
        }),
    ).exactOptional(),
    AllowMethods: CorsMethodListSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'allowMethods' },
          description:
            'Represents a collection of allowed HTTP methods. Supported only for HTTP APIs.',
        }),
    ).exactOptional(),
    AllowOrigins: CorsOriginListSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'allowOrigins' },
          description: 'Represents a collection of allowed origins. Supported only for HTTP APIs.',
        }),
    ).exactOptional(),
    ExposeHeaders: CorsHeaderListSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'exposeHeaders' },
          description: 'Represents a collection of exposed headers. Supported only for HTTP APIs.',
        }),
    ).exactOptional(),
    MaxAge: IntegerWithLengthBetweenMinus1And86400Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'maxAge' },
          description:
            'The number of seconds that the browser should cache preflight request results. Supported only for HTTP APIs.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information.',
    required: [],
  })
  .openapi('Cors')

const TimestampIso8601Schema = z.iso.datetime({ offset: true }).openapi('TimestampIso8601')

const StringWithLengthBetween0And1024Schema = z
  .string()
  .openapi({ description: 'A string with a length between [0-1024].' })
  .openapi('StringWithLengthBetween0And1024')

const ListOfStringSchema = z.array(StringSchema).openapi('ListOfString')

const StringWithLengthBetween1And128Schema = z
  .string()
  .openapi({ description: 'A string with a length between [1-128].' })
  .openapi('StringWithLengthBetween1And128')

const ProtocolTypeSchema = z
  .enum(['WEBSOCKET', 'HTTP'])
  .openapi({ description: 'Represents a protocol type.' })
  .openapi('ProtocolType')

const StringWithLengthBetween1And1600Schema = z
  .string()
  .openapi({ description: 'A string with a length between [0-1600].' })
  .openapi('StringWithLengthBetween1And1600')

const TagsSchema = z
  .record(z.string(), StringWithLengthBetween1And1600Schema)
  .openapi({ description: 'Represents a collection of tags associated with the resource.' })
  .openapi('Tags')

const CreateApiResponseSchema = z
  .object({
    ApiEndpoint: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'apiEndpoint' },
          description:
            'The URI of the API, of the form {api-id}.execute-api.{region}.amazonaws.com. The stage name is typically appended to this URI to form a complete path to a deployed API stage.',
        }),
    ).exactOptional(),
    ApiGatewayManaged: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'apiGatewayManaged' },
          description:
            "Specifies whether an API is managed by API Gateway. You can't update or delete a managed API by using API Gateway. A managed API can be deleted only through the tooling or service that created it.",
        }),
    ).exactOptional(),
    ApiId: IdSchema.and(
      z.any().openapi({ xml: { name: 'apiId' }, description: 'The API ID.' }),
    ).exactOptional(),
    ApiKeySelectionExpression: SelectionExpressionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'apiKeySelectionExpression' },
          description:
            'An API key selection expression. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">API Key Selection Expressions</a>.',
        }),
    ).exactOptional(),
    CorsConfiguration: CorsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'corsConfiguration' },
          description: 'A CORS configuration. Supported only for HTTP APIs.',
        }),
    ).exactOptional(),
    CreatedDate: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'createdDate' },
          description: 'The timestamp when the API was created.',
        }),
    ).exactOptional(),
    Description: StringWithLengthBetween0And1024Schema.and(
      z.any().openapi({ xml: { name: 'description' }, description: 'The description of the API.' }),
    ).exactOptional(),
    DisableSchemaValidation: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'disableSchemaValidation' },
          description:
            'Avoid validating models when creating a deployment. Supported only for WebSocket APIs.',
        }),
    ).exactOptional(),
    DisableExecuteApiEndpoint: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'disableExecuteApiEndpoint' },
          description:
            'Specifies whether clients can invoke your API by using the default execute-api endpoint. By default, clients can invoke your API with the default https://{api_id}.execute-api.{region}.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint.',
        }),
    ).exactOptional(),
    ImportInfo: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'importInfo' },
          description:
            'The validation information during API import. This may include particular properties of your OpenAPI definition which are ignored during import. Supported only for HTTP APIs.',
        }),
    ).exactOptional(),
    Name: StringWithLengthBetween1And128Schema.and(
      z.any().openapi({ xml: { name: 'name' }, description: 'The name of the API.' }),
    ).exactOptional(),
    ProtocolType: ProtocolTypeSchema.and(
      z.any().openapi({ xml: { name: 'protocolType' }, description: 'The API protocol.' }),
    ).exactOptional(),
    RouteSelectionExpression: SelectionExpressionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'routeSelectionExpression' },
          description:
            'The route selection expression for the API. For HTTP APIs, the routeSelectionExpression must be ${request.method} ${request.path}. If not provided, this will be the default for HTTP APIs. This property is required for WebSocket APIs.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description: 'A collection of tags associated with the API.',
        }),
    ).exactOptional(),
    Version: StringWithLengthBetween1And64Schema.and(
      z
        .any()
        .openapi({ xml: { name: 'version' }, description: 'A version identifier for the API.' }),
    ).exactOptional(),
    Warnings: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'warnings' },
          description:
            'The warning messages reported when failonwarnings is turned on during API import.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateApiResponse')

const NotFoundExceptionSchema = z.any().openapi('NotFoundException')

const TooManyRequestsExceptionSchema = z.any().openapi('TooManyRequestsException')

const BadRequestExceptionSchema = z.any().openapi('BadRequestException')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const SelectionKeySchema = z
  .string()
  .openapi({
    description:
      'After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression\'s associated selection key type.',
  })
  .openapi('SelectionKey')

const CreateApiMappingResponseSchema = z
  .object({
    ApiId: IdSchema.and(
      z.any().openapi({ xml: { name: 'apiId' }, description: 'The API identifier.' }),
    ).exactOptional(),
    ApiMappingId: IdSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'apiMappingId' }, description: 'The API mapping identifier.' }),
    ).exactOptional(),
    ApiMappingKey: SelectionKeySchema.and(
      z.any().openapi({ xml: { name: 'apiMappingKey' }, description: 'The API mapping key.' }),
    ).exactOptional(),
    Stage: StringWithLengthBetween1And128Schema.and(
      z.any().openapi({ xml: { name: 'stage' }, description: 'The API stage.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateApiMappingResponse')

const ArnSchema = z
  .string()
  .openapi({ description: 'Represents an Amazon Resource Name (ARN).' })
  .openapi('Arn')

const IntegerWithLengthBetween0And3600Schema = z
  .int()
  .min(0)
  .max(3600)
  .openapi({ description: 'An integer with a value between [0-3600].' })
  .openapi('IntegerWithLengthBetween0And3600')

const AuthorizerTypeSchema = z
  .enum(['REQUEST', 'JWT'])
  .openapi({
    description:
      'The authorizer type. Specify REQUEST for a Lambda function using incoming request parameters. Specify JWT to use JSON Web Tokens (supported only for HTTP APIs).',
  })
  .openapi('AuthorizerType')

const UriWithLengthBetween1And2048Schema = z
  .string()
  .openapi({ description: 'A string representation of a URI with a length between [1-2048].' })
  .openapi('UriWithLengthBetween1And2048')

const IdentitySourceListSchema = z
  .array(StringSchema)
  .openapi({
    description:
      'The identity source for which authorization is requested. For the REQUEST authorizer, this is required when authorization caching is enabled. The value is a comma-separated string of one or more mapping expressions of the specified request parameters. For example, if an Auth header, a Name query string parameter are defined as identity sources, this value is $method.request.header.Auth, $method.request.querystring.Name. These parameters will be used to derive the authorization caching key and to perform runtime validation of the REQUEST authorizer by verifying all of the identity-related request parameters are present, not null and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function, otherwise, it returns a 401 Unauthorized response without calling the Lambda function. The valid value is a string of comma-separated mapping expressions of the specified request parameters. When the authorization caching is not enabled, this property is optional.',
  })
  .openapi('IdentitySourceList')

const JWTConfigurationSchema = z
  .object({
    Audience: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'audience' },
          description:
            'A list of the intended recipients of the JWT. A valid JWT must provide an aud that matches at least one entry in this list. See <a href="https://tools.ietf.org/html/rfc7519#section-4.1.3">RFC 7519</a>. Supported only for HTTP APIs.',
        }),
    ).exactOptional(),
    Issuer: UriWithLengthBetween1And2048Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'issuer' },
          description:
            'The base domain of the identity provider that issues JSON Web Tokens. For example, an Amazon Cognito user pool has the following format: https://cognito-idp.<replaceable>{region}</replaceable>.amazonaws.com/<replaceable>{userPoolId}</replaceable>\n               . Required for the JWT authorizer type. Supported only for HTTP APIs.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.',
    required: [],
  })
  .openapi('JWTConfiguration')

const CreateAuthorizerResponseSchema = z
  .object({
    AuthorizerCredentialsArn: ArnSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'authorizerCredentialsArn' },
          description:
            "Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, don't specify this parameter. Supported only for REQUEST authorizers.",
        }),
    ).exactOptional(),
    AuthorizerId: IdSchema.and(
      z.any().openapi({ xml: { name: 'authorizerId' }, description: 'The authorizer identifier.' }),
    ).exactOptional(),
    AuthorizerPayloadFormatVersion: StringWithLengthBetween1And64Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'authorizerPayloadFormatVersion' },
          description:
            'Specifies the format of the payload sent to an HTTP API Lambda authorizer. Required for HTTP API Lambda authorizers. Supported values are 1.0 and 2.0. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a>.',
        }),
    ).exactOptional(),
    AuthorizerResultTtlInSeconds: IntegerWithLengthBetween0And3600Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'authorizerResultTtlInSeconds' },
          description:
            'The time to live (TTL) for cached authorizer results, in seconds. If it equals 0, authorization caching is disabled. If it is greater than 0, API Gateway caches authorizer responses. The maximum value is 3600, or 1 hour. Supported only for HTTP API Lambda authorizers.',
        }),
    ).exactOptional(),
    AuthorizerType: AuthorizerTypeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'authorizerType' },
          description:
            'The authorizer type. Specify REQUEST for a Lambda function using incoming request parameters. Specify JWT to use JSON Web Tokens (supported only for HTTP APIs).',
        }),
    ).exactOptional(),
    AuthorizerUri: UriWithLengthBetween1And2048Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'authorizerUri' },
          description:
            "The authorizer's Uniform Resource Identifier (URI). For REQUEST authorizers, this must be a well-formed Lambda function URI, for example, arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:<replaceable>{account_id}</replaceable>:function:<replaceable>{lambda_function_name}</replaceable>/invocations. In general, the URI has this form: arn:aws:apigateway:<replaceable>{region}</replaceable>:lambda:path/<replaceable>{service_api}</replaceable>\n               , where <replaceable></replaceable>{region} is the same as the region hosting the Lambda function, path indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial /. For Lambda functions, this is usually of the form /2015-03-31/functions/[FunctionARN]/invocations. Supported only for REQUEST authorizers.",
        }),
    ).exactOptional(),
    EnableSimpleResponses: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'enableSimpleResponses' },
          description:
            'Specifies whether a Lambda authorizer returns a response in a simple format. If enabled, the Lambda authorizer can return a boolean value instead of an IAM policy. Supported only for HTTP APIs. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a>',
        }),
    ).exactOptional(),
    IdentitySource: IdentitySourceListSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'identitySource' },
          description:
            '<p>The identity source for which authorization is requested.</p> <p>For a REQUEST authorizer, this is optional. The value is a set of one or more mapping expressions of the specified request parameters. The identity source can be headers, query string parameters, stage variables, and context parameters. For example, if an Auth header and a Name query string parameter are defined as identity sources, this value is route.request.header.Auth, route.request.querystring.Name for WebSocket APIs. For HTTP APIs, use selection expressions prefixed with $, for example, $request.header.Auth, $request.querystring.Name. These parameters are used to perform runtime validation for Lambda-based authorizers by verifying all of the identity-related request parameters are present in the request, not null, and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function. Otherwise, it returns a 401 Unauthorized response without calling the Lambda function. For HTTP APIs, identity sources are also used as the cache key when caching is enabled. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a>.</p> <p>For JWT, a single entry that specifies where to extract the JSON Web Token (JWT) from inbound requests. Currently only header-based and query parameter-based selections are supported, for example $request.header.Authorization.</p>',
        }),
    ).exactOptional(),
    IdentityValidationExpression: StringWithLengthBetween0And1024Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'identityValidationExpression' },
          description: 'The validation expression does not apply to the REQUEST authorizer.',
        }),
    ).exactOptional(),
    JwtConfiguration: JWTConfigurationSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'jwtConfiguration' },
          description:
            'Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.',
        }),
    ).exactOptional(),
    Name: StringWithLengthBetween1And128Schema.and(
      z.any().openapi({ xml: { name: 'name' }, description: 'The name of the authorizer.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateAuthorizerResponse')

const DeploymentStatusSchema = z
  .enum(['PENDING', 'FAILED', 'DEPLOYED'])
  .openapi({ description: 'Represents a deployment status.' })
  .openapi('DeploymentStatus')

const CreateDeploymentResponseSchema = z
  .object({
    AutoDeployed: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'autoDeployed' },
          description: 'Specifies whether a deployment was automatically released.',
        }),
    ).exactOptional(),
    CreatedDate: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'createdDate' },
          description: 'The date and time when the Deployment resource was created.',
        }),
    ).exactOptional(),
    DeploymentId: IdSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'deploymentId' },
          description: 'The identifier for the deployment.',
        }),
    ).exactOptional(),
    DeploymentStatus: DeploymentStatusSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'deploymentStatus' },
          description: 'The status of the deployment: PENDING, FAILED, or SUCCEEDED.',
        }),
    ).exactOptional(),
    DeploymentStatusMessage: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'deploymentStatusMessage' },
          description: 'May contain additional feedback on the status of an API deployment.',
        }),
    ).exactOptional(),
    Description: StringWithLengthBetween0And1024Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'description' },
          description: 'The description for the deployment.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateDeploymentResponse')

const StringWithLengthBetween1And512Schema = z
  .string()
  .openapi({ description: 'A string with a length between [1-512].' })
  .openapi('StringWithLengthBetween1And512')

const DomainNameStatusSchema = z
  .enum(['AVAILABLE', 'UPDATING', 'PENDING_CERTIFICATE_REIMPORT', 'PENDING_OWNERSHIP_VERIFICATION'])
  .openapi({
    description:
      'The status of the domain name migration. The valid values are AVAILABLE, UPDATING, PENDING_CERTIFICATE_REIMPORT, and PENDING_OWNERSHIP_VERIFICATION. If the status is UPDATING, the domain cannot be modified further until the existing operation is complete. If it is AVAILABLE, the domain can be updated.',
  })
  .openapi('DomainNameStatus')

const EndpointTypeSchema = z
  .enum(['REGIONAL', 'EDGE'])
  .openapi({ description: 'Represents an endpoint type.' })
  .openapi('EndpointType')

const SecurityPolicySchema = z
  .enum(['TLS_1_0', 'TLS_1_2'])
  .openapi({
    description:
      'The Transport Layer Security (TLS) version of the security policy for this domain name. The valid values are TLS_1_0 and TLS_1_2.',
  })
  .openapi('SecurityPolicy')

const DomainNameConfigurationSchema = z
  .object({
    ApiGatewayDomainName: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'apiGatewayDomainName' },
          description: 'A domain name for the API.',
        }),
    ).exactOptional(),
    CertificateArn: ArnSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'certificateArn' },
          description:
            'An AWS-managed certificate that will be used by the edge-optimized endpoint for this domain name. AWS Certificate Manager is the only supported source.',
        }),
    ).exactOptional(),
    CertificateName: StringWithLengthBetween1And128Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'certificateName' },
          description:
            'The user-friendly name of the certificate that will be used by the edge-optimized endpoint for this domain name.',
        }),
    ).exactOptional(),
    CertificateUploadDate: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'certificateUploadDate' },
          description:
            'The timestamp when the certificate that was used by edge-optimized endpoint for this domain name was uploaded.',
        }),
    ).exactOptional(),
    DomainNameStatus: DomainNameStatusSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'domainNameStatus' },
          description:
            'The status of the domain name migration. The valid values are AVAILABLE, UPDATING, PENDING_CERTIFICATE_REIMPORT, and PENDING_OWNERSHIP_VERIFICATION. If the status is UPDATING, the domain cannot be modified further until the existing operation is complete. If it is AVAILABLE, the domain can be updated.',
        }),
    ).exactOptional(),
    DomainNameStatusMessage: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'domainNameStatusMessage' },
          description:
            'An optional text message containing detailed information about status of the domain name migration.',
        }),
    ).exactOptional(),
    EndpointType: EndpointTypeSchema.and(
      z.any().openapi({ xml: { name: 'endpointType' }, description: 'The endpoint type.' }),
    ).exactOptional(),
    HostedZoneId: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'hostedZoneId' },
          description: 'The Amazon Route 53 Hosted Zone ID of the endpoint.',
        }),
    ).exactOptional(),
    SecurityPolicy: SecurityPolicySchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'securityPolicy' },
          description:
            'The Transport Layer Security (TLS) version of the security policy for this domain name. The valid values are TLS_1_0 and TLS_1_2.',
        }),
    ).exactOptional(),
    OwnershipVerificationCertificateArn: ArnSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'ownershipVerificationCertificateArn' },
          description:
            'The ARN of the public certificate issued by ACM to validate ownership of your custom domain. Only required when configuring mutual TLS and using an ACM imported or private CA certificate ARN as the regionalCertificateArn',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The domain name configuration.', required: [] })
  .openapi('DomainNameConfiguration')

const DomainNameConfigurationsSchema = z
  .array(DomainNameConfigurationSchema)
  .openapi({ description: 'The domain name configurations.' })
  .openapi('DomainNameConfigurations')

const MutualTlsAuthenticationSchema = z
  .object({
    TruststoreUri: UriWithLengthBetween1And2048Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'truststoreUri' },
          description:
            'An Amazon S3 URL that specifies the truststore for mutual TLS authentication, for example, s3://<replaceable>bucket-name</replaceable>/<replaceable>key-name</replaceable>. The truststore can contain certificates from public or private certificate authorities. To update the truststore, upload a new version to S3, and then update your custom domain name to use the new version. To update the truststore, you must have permissions to access the S3 object.',
        }),
    ).exactOptional(),
    TruststoreVersion: StringWithLengthBetween1And64Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'truststoreVersion' },
          description:
            'The version of the S3 object that contains your truststore. To specify a version, you must have versioning enabled for the S3 bucket.',
        }),
    ).exactOptional(),
    TruststoreWarnings: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'truststoreWarnings' },
          description:
            'A list of warnings that API Gateway returns while processing your truststore. Invalid certificates produce warnings. Mutual TLS is still enabled, but some clients might not be able to access your API. To resolve warnings, upload a new truststore to S3, and then update you domain name to use the new version.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MutualTlsAuthentication')

const CreateDomainNameResponseSchema = z
  .object({
    ApiMappingSelectionExpression: SelectionExpressionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'apiMappingSelectionExpression' },
          description: 'The API mapping selection expression.',
        }),
    ).exactOptional(),
    DomainName: StringWithLengthBetween1And512Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'domainName' },
          description: 'The name of the DomainName resource.',
        }),
    ).exactOptional(),
    DomainNameConfigurations: DomainNameConfigurationsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'domainNameConfigurations' },
          description: 'The domain name configurations.',
        }),
    ).exactOptional(),
    MutualTlsAuthentication: MutualTlsAuthenticationSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'mutualTlsAuthentication' },
          description: 'The mutual TLS authentication configuration for a custom domain name.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description: 'The collection of tags associated with a domain name.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateDomainNameResponse')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const StringWithLengthBetween1And1024Schema = z
  .string()
  .openapi({ description: 'A string with a length between [1-1024].' })
  .openapi('StringWithLengthBetween1And1024')

const ConnectionTypeSchema = z
  .enum(['INTERNET', 'VPC_LINK'])
  .openapi({ description: 'Represents a connection type.' })
  .openapi('ConnectionType')

const ContentHandlingStrategySchema = z
  .enum(['CONVERT_TO_BINARY', 'CONVERT_TO_TEXT'])
  .openapi({
    description:
      'Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs.',
  })
  .openapi('ContentHandlingStrategy')

const IntegrationTypeSchema = z
  .enum(['AWS', 'HTTP', 'MOCK', 'HTTP_PROXY', 'AWS_PROXY'])
  .openapi({ description: 'Represents an API method integration type.' })
  .openapi('IntegrationType')

const PassthroughBehaviorSchema = z
  .enum(['WHEN_NO_MATCH', 'NEVER', 'WHEN_NO_TEMPLATES'])
  .openapi({
    description:
      'Represents passthrough behavior for an integration response. Supported only for WebSocket APIs.',
  })
  .openapi('PassthroughBehavior')

const IntegrationParametersSchema = z
  .record(z.string(), StringWithLengthBetween1And512Schema)
  .openapi({
    description:
      '<p>For WebSocket APIs, a key-value map specifying request parameters that are passed from the method request to the backend. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of method.request.<replaceable>{location}</replaceable>.<replaceable>{name}</replaceable>\n          , where \n            <replaceable>{location}</replaceable>\n           is querystring, path, or header; and \n            <replaceable>{name}</replaceable>\n           must be a valid and unique method request parameter name.</p> <p>For HTTP API integrations with a specified integrationSubtype, request parameters are a key-value map specifying parameters that are passed to AWS_PROXY integrations. You can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services.html">Working with AWS service integrations for HTTP APIs</a>.</p> <p>For HTTP API integrations without a specified integrationSubtype request parameters are a key-value map specifying how to transform HTTP requests before sending them to the backend. The key should follow the pattern &lt;action&gt;:&lt;header|querystring|path&gt;.&lt;location&gt; where action can be append, overwrite or remove. For values, you can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.</p>',
  })
  .openapi('IntegrationParameters')

const StringWithLengthBetween0And32KSchema = z
  .string()
  .openapi({ description: 'A string with a length between [0-32768].' })
  .openapi('StringWithLengthBetween0And32K')

const TemplateMapSchema = z
  .record(z.string(), StringWithLengthBetween0And32KSchema)
  .openapi({
    description:
      'A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression.',
  })
  .openapi('TemplateMap')

const ResponseParametersSchema = z
  .record(z.string(), IntegrationParametersSchema)
  .openapi({
    description:
      'Supported only for HTTP APIs. You use response parameters to transform the HTTP response from a backend integration before returning the response to clients.',
  })
  .openapi('ResponseParameters')

const IntegerWithLengthBetween50And30000Schema = z
  .int()
  .min(50)
  .max(30000)
  .openapi({ description: 'An integer with a value between [50-30000].' })
  .openapi('IntegerWithLengthBetween50And30000')

const TlsConfigSchema = z
  .object({
    ServerNameToVerify: StringWithLengthBetween1And512Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'serverNameToVerify' },
          description:
            "If you specify a server name, API Gateway uses it to verify the hostname on the integration's certificate. The server name is also included in the TLS handshake to support Server Name Indication (SNI) or virtual hosting.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.',
    required: [],
  })
  .openapi('TlsConfig')

const CreateIntegrationResultSchema = z
  .object({
    ApiGatewayManaged: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'apiGatewayManaged' },
          description:
            "Specifies whether an integration is managed by API Gateway. If you created an API using using quick create, the resulting integration is managed by API Gateway. You can update a managed integration, but you can't delete it.",
        }),
    ).exactOptional(),
    ConnectionId: StringWithLengthBetween1And1024Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'connectionId' },
          description:
            'The ID of the VPC link for a private integration. Supported only for HTTP APIs.',
        }),
    ).exactOptional(),
    ConnectionType: ConnectionTypeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'connectionType' },
          description:
            'The type of the network connection to the integration endpoint. Specify INTERNET for connections through the public routable internet or VPC_LINK for private connections between API Gateway and resources in a VPC. The default value is INTERNET.',
        }),
    ).exactOptional(),
    ContentHandlingStrategy: ContentHandlingStrategySchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'contentHandlingStrategy' },
          description:
            '<p>Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:</p> <p>CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p> <p>CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.</p>',
        }),
    ).exactOptional(),
    CredentialsArn: ArnSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'credentialsArn' },
          description:
            "Specifies the credentials required for the integration, if any. For AWS integrations, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify the string arn:aws:iam::*:user/*. To use resource-based permissions on supported AWS services, specify null.",
        }),
    ).exactOptional(),
    Description: StringWithLengthBetween0And1024Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'description' },
          description: 'Represents the description of an integration.',
        }),
    ).exactOptional(),
    IntegrationId: IdSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'integrationId' },
          description: 'Represents the identifier of an integration.',
        }),
    ).exactOptional(),
    IntegrationMethod: StringWithLengthBetween1And64Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'integrationMethod' },
          description: "Specifies the integration's HTTP method type.",
        }),
    ).exactOptional(),
    IntegrationResponseSelectionExpression: SelectionExpressionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'integrationResponseSelectionExpression' },
          description:
            'The integration response selection expression for the integration. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-integration-response-selection-expressions">Integration Response Selection Expressions</a>.',
        }),
    ).exactOptional(),
    IntegrationSubtype: StringWithLengthBetween1And128Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'integrationSubtype' },
          description:
            'Supported only for HTTP API AWS_PROXY integrations. Specifies the AWS service action to invoke. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services-reference.html">Integration subtype reference</a>.',
        }),
    ).exactOptional(),
    IntegrationType: IntegrationTypeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'integrationType' },
          description:
            '<p>The integration type of an integration. One of the following:</p> <p>AWS: for integrating the route or method request with an AWS service action, including the Lambda function-invoking action. With the Lambda function-invoking action, this is referred to as the Lambda custom integration. With any other AWS service action, this is known as AWS integration. Supported only for WebSocket APIs.</p> <p>AWS_PROXY: for integrating the route or method request with a Lambda function or other AWS service action. This integration is also referred to as a Lambda proxy integration.</p> <p>HTTP: for integrating the route or method request with an HTTP endpoint. This integration is also referred to as the HTTP custom integration. Supported only for WebSocket APIs.</p> <p>HTTP_PROXY: for integrating the route or method request with an HTTP endpoint, with the client request passed through as-is. This is also referred to as HTTP proxy integration.</p> <p>MOCK: for integrating the route or method request with API Gateway as a "loopback" endpoint without invoking any backend. Supported only for WebSocket APIs.</p>',
        }),
    ).exactOptional(),
    IntegrationUri: UriWithLengthBetween1And2048Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'integrationUri' },
          description:
            '<p>For a Lambda integration, specify the URI of a Lambda function.</p> <p>For an HTTP integration, specify a fully-qualified URL.</p> <p>For an HTTP API private integration, specify the ARN of an Application Load Balancer listener, Network Load Balancer listener, or AWS Cloud Map service. If you specify the ARN of an AWS Cloud Map service, API Gateway uses DiscoverInstances to identify resources. You can use query parameters to target specific resources. To learn more, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_DiscoverInstances.html">DiscoverInstances</a>. For private integrations, all resources must be owned by the same AWS account.</p>',
        }),
    ).exactOptional(),
    PassthroughBehavior: PassthroughBehaviorSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'passthroughBehavior' },
          description:
            '<p>Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the requestTemplates property on the Integration resource. There are three valid values: WHEN_NO_MATCH, WHEN_NO_TEMPLATES, and NEVER. Supported only for WebSocket APIs.</p> <p>WHEN_NO_MATCH passes the request body for unmapped content types through to the integration backend without transformation.</p> <p>NEVER rejects unmapped content types with an HTTP 415 Unsupported Media Type response.</p> <p>WHEN_NO_TEMPLATES allows pass-through when the integration has no content types mapped to templates. However, if there is at least one content type defined, unmapped content types will be rejected with the same HTTP 415 Unsupported Media Type response.</p>',
        }),
    ).exactOptional(),
    PayloadFormatVersion: StringWithLengthBetween1And64Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'payloadFormatVersion' },
          description:
            'Specifies the format of the payload sent to an integration. Required for HTTP APIs.',
        }),
    ).exactOptional(),
    RequestParameters: IntegrationParametersSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'requestParameters' },
          description:
            '<p>For WebSocket APIs, a key-value map specifying request parameters that are passed from the method request to the backend. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of method.request.<replaceable>{location}</replaceable>.<replaceable>{name}</replaceable>\n          , where \n            <replaceable>{location}</replaceable>\n           is querystring, path, or header; and \n            <replaceable>{name}</replaceable>\n           must be a valid and unique method request parameter name.</p> <p>For HTTP API integrations with a specified integrationSubtype, request parameters are a key-value map specifying parameters that are passed to AWS_PROXY integrations. You can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services.html">Working with AWS service integrations for HTTP APIs</a>.</p> <p>For HTTP API itegrations, without a specified integrationSubtype request parameters are a key-value map specifying how to transform HTTP requests before sending them to backend integrations. The key should follow the pattern &lt;action&gt;:&lt;header|querystring|path&gt;.&lt;location&gt;. The action can be append, overwrite or remove. For values, you can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.</p>',
        }),
    ).exactOptional(),
    RequestTemplates: TemplateMapSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'requestTemplates' },
          description:
            'Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value. Supported only for WebSocket APIs.',
        }),
    ).exactOptional(),
    ResponseParameters: ResponseParametersSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'responseParameters' },
          description:
            'Supported only for HTTP APIs. You use response parameters to transform the HTTP response from a backend integration before returning the response to clients. Specify a key-value map from a selection key to response parameters. The selection key must be a valid HTTP status code within the range of 200-599. Response parameters are a key-value map. The key must match pattern &lt;action&gt;:&lt;header&gt;.&lt;location&gt; or overwrite.statuscode. The action can be append, overwrite or remove. The value can be a static value, or map to response data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.',
        }),
    ).exactOptional(),
    TemplateSelectionExpression: SelectionExpressionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'templateSelectionExpression' },
          description:
            'The template selection expression for the integration. Supported only for WebSocket APIs.',
        }),
    ).exactOptional(),
    TimeoutInMillis: IntegerWithLengthBetween50And30000Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'timeoutInMillis' },
          description:
            'Custom timeout between 50 and 29,000 milliseconds for WebSocket APIs and between 50 and 30,000 milliseconds for HTTP APIs. The default timeout is 29 seconds for WebSocket APIs and 30 seconds for HTTP APIs.',
        }),
    ).exactOptional(),
    TlsConfig: TlsConfigSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tlsConfig' },
          description:
            'The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateIntegrationResult')

const CreateIntegrationResponseResponseSchema = z
  .object({
    ContentHandlingStrategy: ContentHandlingStrategySchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'contentHandlingStrategy' },
          description:
            '<p>Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:</p> <p>CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p> <p>CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.</p>',
        }),
    ).exactOptional(),
    IntegrationResponseId: IdSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'integrationResponseId' },
          description: 'The integration response ID.',
        }),
    ).exactOptional(),
    IntegrationResponseKey: SelectionKeySchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'integrationResponseKey' },
          description: 'The integration response key.',
        }),
    ).exactOptional(),
    ResponseParameters: IntegrationParametersSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'responseParameters' },
          description:
            'A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix.',
        }),
    ).exactOptional(),
    ResponseTemplates: TemplateMapSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'responseTemplates' },
          description:
            'The collection of response templates for the integration response as a string-to-string map of key-value pairs. Response templates are represented as a key/value map, with a content-type as the key and a template as the value.',
        }),
    ).exactOptional(),
    TemplateSelectionExpression: SelectionExpressionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'templateSelectionExpression' },
          description: 'The template selection expressions for the integration response.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateIntegrationResponseResponse')

const StringWithLengthBetween1And256Schema = z
  .string()
  .openapi({ description: 'A string with a length between [1-256].' })
  .openapi('StringWithLengthBetween1And256')

const CreateModelResponseSchema = z
  .object({
    ContentType: StringWithLengthBetween1And256Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'contentType' },
          description: 'The content-type for the model, for example, "application/json".',
        }),
    ).exactOptional(),
    Description: StringWithLengthBetween0And1024Schema.and(
      z
        .any()
        .openapi({ xml: { name: 'description' }, description: 'The description of the model.' }),
    ).exactOptional(),
    ModelId: IdSchema.and(
      z.any().openapi({ xml: { name: 'modelId' }, description: 'The model identifier.' }),
    ).exactOptional(),
    Name: StringWithLengthBetween1And128Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'name' },
          description: 'The name of the model. Must be alphanumeric.',
        }),
    ).exactOptional(),
    Schema: StringWithLengthBetween0And32KSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'schema' },
          description:
            'The schema for the model. For application/json models, this should be JSON schema draft 4 model.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateModelResponse')

const AuthorizationScopesSchema = z
  .array(StringWithLengthBetween1And64Schema)
  .openapi({
    description:
      'A list of authorization scopes configured on a route. The scopes are used with a JWT authorizer to authorize the method invocation. The authorization works by matching the route scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any route scope matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the route scope is configured, the client must provide an access token instead of an identity token for authorization purposes.',
  })
  .openapi('AuthorizationScopes')

const AuthorizationTypeSchema = z
  .enum(['NONE', 'AWS_IAM', 'CUSTOM', 'JWT'])
  .openapi({
    description:
      'The authorization type. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer. For HTTP APIs, valid values are NONE for open access, JWT for using JSON Web Tokens, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer.',
  })
  .openapi('AuthorizationType')

const RouteModelsSchema = z
  .record(z.string(), StringWithLengthBetween1And128Schema)
  .openapi({ description: 'The route models.' })
  .openapi('RouteModels')

const ParameterConstraintsSchema = z
  .object({
    Required: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'required' },
          description: 'Whether or not the parameter is required.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Validation constraints imposed on parameters of a request (path, query string, headers).',
    required: [],
  })
  .openapi('ParameterConstraints')

const RouteParametersSchema = z
  .record(z.string(), ParameterConstraintsSchema)
  .openapi({ description: 'The route parameters.' })
  .openapi('RouteParameters')

const CreateRouteResultSchema = z
  .object({
    ApiGatewayManaged: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'apiGatewayManaged' },
          description:
            "Specifies whether a route is managed by API Gateway. If you created an API using quick create, the $default route is managed by API Gateway. You can't modify the $default route key.",
        }),
    ).exactOptional(),
    ApiKeyRequired: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'apiKeyRequired' },
          description:
            'Specifies whether an API key is required for this route. Supported only for WebSocket APIs.',
        }),
    ).exactOptional(),
    AuthorizationScopes: AuthorizationScopesSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'authorizationScopes' },
          description:
            'A list of authorization scopes configured on a route. The scopes are used with a JWT authorizer to authorize the method invocation. The authorization works by matching the route scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any route scope matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the route scope is configured, the client must provide an access token instead of an identity token for authorization purposes.',
        }),
    ).exactOptional(),
    AuthorizationType: AuthorizationTypeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'authorizationType' },
          description:
            'The authorization type for the route. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer For HTTP APIs, valid values are NONE for open access, JWT for using JSON Web Tokens, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer.',
        }),
    ).exactOptional(),
    AuthorizerId: IdSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'authorizerId' },
          description:
            'The identifier of the Authorizer resource to be associated with this route. The authorizer identifier is generated by API Gateway when you created the authorizer.',
        }),
    ).exactOptional(),
    ModelSelectionExpression: SelectionExpressionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'modelSelectionExpression' },
          description:
            'The model selection expression for the route. Supported only for WebSocket APIs.',
        }),
    ).exactOptional(),
    OperationName: StringWithLengthBetween1And64Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'operationName' },
          description: 'The operation name for the route.',
        }),
    ).exactOptional(),
    RequestModels: RouteModelsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'requestModels' },
          description: 'The request models for the route. Supported only for WebSocket APIs.',
        }),
    ).exactOptional(),
    RequestParameters: RouteParametersSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'requestParameters' },
          description: 'The request parameters for the route. Supported only for WebSocket APIs.',
        }),
    ).exactOptional(),
    RouteId: IdSchema.and(
      z.any().openapi({ xml: { name: 'routeId' }, description: 'The route ID.' }),
    ).exactOptional(),
    RouteKey: SelectionKeySchema.and(
      z.any().openapi({ xml: { name: 'routeKey' }, description: 'The route key for the route.' }),
    ).exactOptional(),
    RouteResponseSelectionExpression: SelectionExpressionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'routeResponseSelectionExpression' },
          description:
            'The route response selection expression for the route. Supported only for WebSocket APIs.',
        }),
    ).exactOptional(),
    Target: StringWithLengthBetween1And128Schema.and(
      z.any().openapi({ xml: { name: 'target' }, description: 'The target for the route.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateRouteResult')

const CreateRouteResponseResponseSchema = z
  .object({
    ModelSelectionExpression: SelectionExpressionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'modelSelectionExpression' },
          description:
            'Represents the model selection expression of a route response. Supported only for WebSocket APIs.',
        }),
    ).exactOptional(),
    ResponseModels: RouteModelsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'responseModels' },
          description: 'Represents the response models of a route response.',
        }),
    ).exactOptional(),
    ResponseParameters: RouteParametersSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'responseParameters' },
          description: 'Represents the response parameters of a route response.',
        }),
    ).exactOptional(),
    RouteResponseId: IdSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'routeResponseId' },
          description: 'Represents the identifier of a route response.',
        }),
    ).exactOptional(),
    RouteResponseKey: SelectionKeySchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'routeResponseKey' },
          description: 'Represents the route response key of a route response.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateRouteResponseResponse')

const AccessLogSettingsSchema = z
  .object({
    DestinationArn: ArnSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'destinationArn' },
          description: 'The ARN of the CloudWatch Logs log group to receive access logs.',
        }),
    ).exactOptional(),
    Format: StringWithLengthBetween1And1024Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'format' },
          description:
            'A single line format of the access logs of data, as specified by selected $context variables. The format must include at least $context.requestId.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Settings for logging access in a stage.', required: [] })
  .openapi('AccessLogSettings')

const LoggingLevelSchema = z
  .enum(['ERROR', 'INFO', 'OFF'])
  .openapi({ description: 'The logging level.' })
  .openapi('LoggingLevel')

const IntegerSchema = z.int().openapi('Integer')

const DoubleSchema = z.float64().openapi('Double')

const RouteSettingsSchema = z
  .object({
    DataTraceEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'dataTraceEnabled' },
          description:
            'Specifies whether (true) or not (false) data trace logging is enabled for this route. This property affects the log entries pushed to Amazon CloudWatch Logs. Supported only for WebSocket APIs.',
        }),
    ).exactOptional(),
    DetailedMetricsEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'detailedMetricsEnabled' },
          description: 'Specifies whether detailed metrics are enabled.',
        }),
    ).exactOptional(),
    LoggingLevel: LoggingLevelSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'loggingLevel' },
          description:
            'Specifies the logging level for this route: INFO, ERROR, or OFF. This property affects the log entries pushed to Amazon CloudWatch Logs. Supported only for WebSocket APIs.',
        }),
    ).exactOptional(),
    ThrottlingBurstLimit: IntegerSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'throttlingBurstLimit' },
          description: 'Specifies the throttling burst limit.',
        }),
    ).exactOptional(),
    ThrottlingRateLimit: DoubleSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'throttlingRateLimit' },
          description: 'Specifies the throttling rate limit.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents a collection of route settings.', required: [] })
  .openapi('RouteSettings')

const RouteSettingsMapSchema = z
  .record(z.string(), RouteSettingsSchema)
  .openapi({ description: 'The route settings map.' })
  .openapi('RouteSettingsMap')

const StringWithLengthBetween0And2048Schema = z
  .string()
  .openapi({ description: 'A string with a length between [0-2048].' })
  .openapi('StringWithLengthBetween0And2048')

const StageVariablesMapSchema = z
  .record(z.string(), StringWithLengthBetween0And2048Schema)
  .openapi({ description: 'The stage variable map.' })
  .openapi('StageVariablesMap')

const CreateStageResponseSchema = z
  .object({
    AccessLogSettings: AccessLogSettingsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'accessLogSettings' },
          description: 'Settings for logging access in this stage.',
        }),
    ).exactOptional(),
    ApiGatewayManaged: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'apiGatewayManaged' },
          description:
            "Specifies whether a stage is managed by API Gateway. If you created an API using quick create, the $default stage is managed by API Gateway. You can't modify the $default stage.",
        }),
    ).exactOptional(),
    AutoDeploy: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'autoDeploy' },
          description:
            'Specifies whether updates to an API automatically trigger a new deployment. The default value is false.',
        }),
    ).exactOptional(),
    ClientCertificateId: IdSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clientCertificateId' },
          description:
            'The identifier of a client certificate for a Stage. Supported only for WebSocket APIs.',
        }),
    ).exactOptional(),
    CreatedDate: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'createdDate' },
          description: 'The timestamp when the stage was created.',
        }),
    ).exactOptional(),
    DefaultRouteSettings: RouteSettingsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'defaultRouteSettings' },
          description: 'Default route settings for the stage.',
        }),
    ).exactOptional(),
    DeploymentId: IdSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'deploymentId' },
          description:
            "The identifier of the Deployment that the Stage is associated with. Can't be updated if autoDeploy is enabled.",
        }),
    ).exactOptional(),
    Description: StringWithLengthBetween0And1024Schema.and(
      z
        .any()
        .openapi({ xml: { name: 'description' }, description: 'The description of the stage.' }),
    ).exactOptional(),
    LastDeploymentStatusMessage: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'lastDeploymentStatusMessage' },
          description:
            'Describes the status of the last deployment of a stage. Supported only for stages with autoDeploy enabled.',
        }),
    ).exactOptional(),
    LastUpdatedDate: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'lastUpdatedDate' },
          description: 'The timestamp when the stage was last updated.',
        }),
    ).exactOptional(),
    RouteSettings: RouteSettingsMapSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'routeSettings' },
          description: 'Route settings for the stage, by routeKey.',
        }),
    ).exactOptional(),
    StageName: StringWithLengthBetween1And128Schema.and(
      z.any().openapi({ xml: { name: 'stageName' }, description: 'The name of the stage.' }),
    ).exactOptional(),
    StageVariables: StageVariablesMapSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'stageVariables' },
          description:
            'A map that defines the stage variables for a stage resource. Variable names can have alphanumeric and underscore characters, and the values must match [A-Za-z0-9-._~:/?#&amp;=,]+.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description:
            'The collection of tags. Each tag element is associated with a given resource.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateStageResponse')

const SecurityGroupIdListSchema = z
  .array(StringSchema)
  .openapi({ description: 'A list of security group IDs for the VPC link.' })
  .openapi('SecurityGroupIdList')

const SubnetIdListSchema = z
  .array(StringSchema)
  .openapi({ description: 'A list of subnet IDs to include in the VPC link.' })
  .openapi('SubnetIdList')

const VpcLinkStatusSchema = z
  .enum(['PENDING', 'AVAILABLE', 'DELETING', 'FAILED', 'INACTIVE'])
  .openapi({ description: 'The status of the VPC link.' })
  .openapi('VpcLinkStatus')

const VpcLinkVersionSchema = z
  .literal('V2')
  .openapi({ description: 'The version of the VPC link.' })
  .openapi('VpcLinkVersion')

const CreateVpcLinkResponseSchema = z
  .object({
    CreatedDate: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'createdDate' },
          description: 'The timestamp when the VPC link was created.',
        }),
    ).exactOptional(),
    Name: StringWithLengthBetween1And128Schema.and(
      z.any().openapi({ xml: { name: 'name' }, description: 'The name of the VPC link.' }),
    ).exactOptional(),
    SecurityGroupIds: SecurityGroupIdListSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'securityGroupIds' },
          description: 'A list of security group IDs for the VPC link.',
        }),
    ).exactOptional(),
    SubnetIds: SubnetIdListSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'subnetIds' },
          description: 'A list of subnet IDs to include in the VPC link.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z.any().openapi({ xml: { name: 'tags' }, description: 'Tags for the VPC link.' }),
    ).exactOptional(),
    VpcLinkId: IdSchema.and(
      z.any().openapi({ xml: { name: 'vpcLinkId' }, description: 'The ID of the VPC link.' }),
    ).exactOptional(),
    VpcLinkStatus: VpcLinkStatusSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'vpcLinkStatus' }, description: 'The status of the VPC link.' }),
    ).exactOptional(),
    VpcLinkStatusMessage: StringWithLengthBetween0And1024Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'vpcLinkStatusMessage' },
          description: 'A message summarizing the cause of the status of the VPC link.',
        }),
    ).exactOptional(),
    VpcLinkVersion: VpcLinkVersionSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'vpcLinkVersion' }, description: 'The version of the VPC link.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateVpcLinkResponse')

const DeleteVpcLinkResponseSchema = z.object({}).openapi('DeleteVpcLinkResponse')

const ExportedApiSchema = z
  .string()
  .openapi({
    description:
      'Represents an exported definition of an API in a particular output format, for example, YAML. The API is serialized to the requested specification, for example, OpenAPI 3.0.',
  })
  .openapi('ExportedApi')

const ExportApiResponseSchema = z
  .object({ body: ExportedApiSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('ExportApiResponse')

const GetApiResponseSchema = z
  .object({
    ApiEndpoint: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'apiEndpoint' },
          description:
            'The URI of the API, of the form {api-id}.execute-api.{region}.amazonaws.com. The stage name is typically appended to this URI to form a complete path to a deployed API stage.',
        }),
    ).exactOptional(),
    ApiGatewayManaged: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'apiGatewayManaged' },
          description:
            "Specifies whether an API is managed by API Gateway. You can't update or delete a managed API by using API Gateway. A managed API can be deleted only through the tooling or service that created it.",
        }),
    ).exactOptional(),
    ApiId: IdSchema.and(
      z.any().openapi({ xml: { name: 'apiId' }, description: 'The API ID.' }),
    ).exactOptional(),
    ApiKeySelectionExpression: SelectionExpressionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'apiKeySelectionExpression' },
          description:
            'An API key selection expression. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">API Key Selection Expressions</a>.',
        }),
    ).exactOptional(),
    CorsConfiguration: CorsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'corsConfiguration' },
          description: 'A CORS configuration. Supported only for HTTP APIs.',
        }),
    ).exactOptional(),
    CreatedDate: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'createdDate' },
          description: 'The timestamp when the API was created.',
        }),
    ).exactOptional(),
    Description: StringWithLengthBetween0And1024Schema.and(
      z.any().openapi({ xml: { name: 'description' }, description: 'The description of the API.' }),
    ).exactOptional(),
    DisableSchemaValidation: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'disableSchemaValidation' },
          description:
            'Avoid validating models when creating a deployment. Supported only for WebSocket APIs.',
        }),
    ).exactOptional(),
    DisableExecuteApiEndpoint: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'disableExecuteApiEndpoint' },
          description:
            'Specifies whether clients can invoke your API by using the default execute-api endpoint. By default, clients can invoke your API with the default https://{api_id}.execute-api.{region}.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint.',
        }),
    ).exactOptional(),
    ImportInfo: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'importInfo' },
          description:
            'The validation information during API import. This may include particular properties of your OpenAPI definition which are ignored during import. Supported only for HTTP APIs.',
        }),
    ).exactOptional(),
    Name: StringWithLengthBetween1And128Schema.and(
      z.any().openapi({ xml: { name: 'name' }, description: 'The name of the API.' }),
    ).exactOptional(),
    ProtocolType: ProtocolTypeSchema.and(
      z.any().openapi({ xml: { name: 'protocolType' }, description: 'The API protocol.' }),
    ).exactOptional(),
    RouteSelectionExpression: SelectionExpressionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'routeSelectionExpression' },
          description:
            'The route selection expression for the API. For HTTP APIs, the routeSelectionExpression must be ${request.method} ${request.path}. If not provided, this will be the default for HTTP APIs. This property is required for WebSocket APIs.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description: 'A collection of tags associated with the API.',
        }),
    ).exactOptional(),
    Version: StringWithLengthBetween1And64Schema.and(
      z
        .any()
        .openapi({ xml: { name: 'version' }, description: 'A version identifier for the API.' }),
    ).exactOptional(),
    Warnings: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'warnings' },
          description:
            'The warning messages reported when failonwarnings is turned on during API import.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetApiResponse')

const GetApiMappingResponseSchema = z
  .object({
    ApiId: IdSchema.and(
      z.any().openapi({ xml: { name: 'apiId' }, description: 'The API identifier.' }),
    ).exactOptional(),
    ApiMappingId: IdSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'apiMappingId' }, description: 'The API mapping identifier.' }),
    ).exactOptional(),
    ApiMappingKey: SelectionKeySchema.and(
      z.any().openapi({ xml: { name: 'apiMappingKey' }, description: 'The API mapping key.' }),
    ).exactOptional(),
    Stage: StringWithLengthBetween1And128Schema.and(
      z.any().openapi({ xml: { name: 'stage' }, description: 'The API stage.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetApiMappingResponse')

const ApiMappingSchema = z
  .object({
    ApiId: IdSchema.and(
      z.any().openapi({ xml: { name: 'apiId' }, description: 'The API identifier.' }),
    ),
    ApiMappingId: IdSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'apiMappingId' }, description: 'The API mapping identifier.' }),
    ).exactOptional(),
    ApiMappingKey: SelectionKeySchema.and(
      z.any().openapi({ xml: { name: 'apiMappingKey' }, description: 'The API mapping key.' }),
    ).exactOptional(),
    Stage: StringWithLengthBetween1And128Schema.and(
      z.any().openapi({ xml: { name: 'stage' }, description: 'The API stage.' }),
    ),
  })
  .openapi({ required: ['Stage', 'ApiId'], description: 'Represents an API mapping.' })
  .openapi('ApiMapping')

const ListOfApiMappingSchema = z.array(ApiMappingSchema).openapi('ListOfApiMapping')

const NextTokenSchema = z
  .string()
  .openapi({
    description:
      'The next page of elements from this collection. Not valid for the last element of the collection.',
  })
  .openapi('NextToken')

const GetApiMappingsResponseSchema = z
  .object({
    Items: ListOfApiMappingSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'items' }, description: 'The elements from this collection.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'nextToken' },
          description:
            'The next page of elements from this collection. Not valid for the last element of the collection.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetApiMappingsResponse')

const ApiSchema = z
  .object({
    ApiEndpoint: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'apiEndpoint' },
          description:
            'The URI of the API, of the form {api-id}.execute-api.{region}.amazonaws.com. The stage name is typically appended to this URI to form a complete path to a deployed API stage.',
        }),
    ).exactOptional(),
    ApiGatewayManaged: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'apiGatewayManaged' },
          description:
            "Specifies whether an API is managed by API Gateway. You can't update or delete a managed API by using API Gateway. A managed API can be deleted only through the tooling or service that created it.",
        }),
    ).exactOptional(),
    ApiId: IdSchema.and(
      z.any().openapi({ xml: { name: 'apiId' }, description: 'The API ID.' }),
    ).exactOptional(),
    ApiKeySelectionExpression: SelectionExpressionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'apiKeySelectionExpression' },
          description:
            'An API key selection expression. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">API Key Selection Expressions</a>.',
        }),
    ).exactOptional(),
    CorsConfiguration: CorsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'corsConfiguration' },
          description: 'A CORS configuration. Supported only for HTTP APIs.',
        }),
    ).exactOptional(),
    CreatedDate: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'createdDate' },
          description: 'The timestamp when the API was created.',
        }),
    ).exactOptional(),
    Description: StringWithLengthBetween0And1024Schema.and(
      z.any().openapi({ xml: { name: 'description' }, description: 'The description of the API.' }),
    ).exactOptional(),
    DisableSchemaValidation: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'disableSchemaValidation' },
          description:
            'Avoid validating models when creating a deployment. Supported only for WebSocket APIs.',
        }),
    ).exactOptional(),
    DisableExecuteApiEndpoint: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'disableExecuteApiEndpoint' },
          description:
            'Specifies whether clients can invoke your API by using the default execute-api endpoint. By default, clients can invoke your API with the default https://{api_id}.execute-api.{region}.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint.',
        }),
    ).exactOptional(),
    ImportInfo: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'importInfo' },
          description:
            'The validation information during API import. This may include particular properties of your OpenAPI definition which are ignored during import. Supported only for HTTP APIs.',
        }),
    ).exactOptional(),
    Name: StringWithLengthBetween1And128Schema.and(
      z.any().openapi({ xml: { name: 'name' }, description: 'The name of the API.' }),
    ),
    ProtocolType: ProtocolTypeSchema.and(
      z.any().openapi({ xml: { name: 'protocolType' }, description: 'The API protocol.' }),
    ),
    RouteSelectionExpression: SelectionExpressionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'routeSelectionExpression' },
          description:
            'The route selection expression for the API. For HTTP APIs, the routeSelectionExpression must be ${request.method} ${request.path}. If not provided, this will be the default for HTTP APIs. This property is required for WebSocket APIs.',
        }),
    ),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description: 'A collection of tags associated with the API.',
        }),
    ).exactOptional(),
    Version: StringWithLengthBetween1And64Schema.and(
      z
        .any()
        .openapi({ xml: { name: 'version' }, description: 'A version identifier for the API.' }),
    ).exactOptional(),
    Warnings: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'warnings' },
          description:
            'The warning messages reported when failonwarnings is turned on during API import.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['RouteSelectionExpression', 'Name', 'ProtocolType'],
    description: 'Represents an API.',
  })
  .openapi('Api')

const ListOfApiSchema = z.array(ApiSchema).openapi('ListOfApi')

const GetApisResponseSchema = z
  .object({
    Items: ListOfApiSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'items' }, description: 'The elements from this collection.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'nextToken' },
          description:
            'The next page of elements from this collection. Not valid for the last element of the collection.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetApisResponse')

const GetAuthorizerResponseSchema = z
  .object({
    AuthorizerCredentialsArn: ArnSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'authorizerCredentialsArn' },
          description:
            "Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, don't specify this parameter. Supported only for REQUEST authorizers.",
        }),
    ).exactOptional(),
    AuthorizerId: IdSchema.and(
      z.any().openapi({ xml: { name: 'authorizerId' }, description: 'The authorizer identifier.' }),
    ).exactOptional(),
    AuthorizerPayloadFormatVersion: StringWithLengthBetween1And64Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'authorizerPayloadFormatVersion' },
          description:
            'Specifies the format of the payload sent to an HTTP API Lambda authorizer. Required for HTTP API Lambda authorizers. Supported values are 1.0 and 2.0. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a>.',
        }),
    ).exactOptional(),
    AuthorizerResultTtlInSeconds: IntegerWithLengthBetween0And3600Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'authorizerResultTtlInSeconds' },
          description:
            'The time to live (TTL) for cached authorizer results, in seconds. If it equals 0, authorization caching is disabled. If it is greater than 0, API Gateway caches authorizer responses. The maximum value is 3600, or 1 hour. Supported only for HTTP API Lambda authorizers.',
        }),
    ).exactOptional(),
    AuthorizerType: AuthorizerTypeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'authorizerType' },
          description:
            'The authorizer type. Specify REQUEST for a Lambda function using incoming request parameters. Specify JWT to use JSON Web Tokens (supported only for HTTP APIs).',
        }),
    ).exactOptional(),
    AuthorizerUri: UriWithLengthBetween1And2048Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'authorizerUri' },
          description:
            "The authorizer's Uniform Resource Identifier (URI). For REQUEST authorizers, this must be a well-formed Lambda function URI, for example, arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:<replaceable>{account_id}</replaceable>:function:<replaceable>{lambda_function_name}</replaceable>/invocations. In general, the URI has this form: arn:aws:apigateway:<replaceable>{region}</replaceable>:lambda:path/<replaceable>{service_api}</replaceable>\n               , where <replaceable></replaceable>{region} is the same as the region hosting the Lambda function, path indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial /. For Lambda functions, this is usually of the form /2015-03-31/functions/[FunctionARN]/invocations. Supported only for REQUEST authorizers.",
        }),
    ).exactOptional(),
    EnableSimpleResponses: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'enableSimpleResponses' },
          description:
            'Specifies whether a Lambda authorizer returns a response in a simple format. If enabled, the Lambda authorizer can return a boolean value instead of an IAM policy. Supported only for HTTP APIs. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a>',
        }),
    ).exactOptional(),
    IdentitySource: IdentitySourceListSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'identitySource' },
          description:
            '<p>The identity source for which authorization is requested.</p> <p>For a REQUEST authorizer, this is optional. The value is a set of one or more mapping expressions of the specified request parameters. The identity source can be headers, query string parameters, stage variables, and context parameters. For example, if an Auth header and a Name query string parameter are defined as identity sources, this value is route.request.header.Auth, route.request.querystring.Name for WebSocket APIs. For HTTP APIs, use selection expressions prefixed with $, for example, $request.header.Auth, $request.querystring.Name. These parameters are used to perform runtime validation for Lambda-based authorizers by verifying all of the identity-related request parameters are present in the request, not null, and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function. Otherwise, it returns a 401 Unauthorized response without calling the Lambda function. For HTTP APIs, identity sources are also used as the cache key when caching is enabled. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a>.</p> <p>For JWT, a single entry that specifies where to extract the JSON Web Token (JWT) from inbound requests. Currently only header-based and query parameter-based selections are supported, for example $request.header.Authorization.</p>',
        }),
    ).exactOptional(),
    IdentityValidationExpression: StringWithLengthBetween0And1024Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'identityValidationExpression' },
          description: 'The validation expression does not apply to the REQUEST authorizer.',
        }),
    ).exactOptional(),
    JwtConfiguration: JWTConfigurationSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'jwtConfiguration' },
          description:
            'Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.',
        }),
    ).exactOptional(),
    Name: StringWithLengthBetween1And128Schema.and(
      z.any().openapi({ xml: { name: 'name' }, description: 'The name of the authorizer.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetAuthorizerResponse')

const AuthorizerSchema = z
  .object({
    AuthorizerCredentialsArn: ArnSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'authorizerCredentialsArn' },
          description:
            "Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, don't specify this parameter. Supported only for REQUEST authorizers.",
        }),
    ).exactOptional(),
    AuthorizerId: IdSchema.and(
      z.any().openapi({ xml: { name: 'authorizerId' }, description: 'The authorizer identifier.' }),
    ).exactOptional(),
    AuthorizerPayloadFormatVersion: StringWithLengthBetween1And64Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'authorizerPayloadFormatVersion' },
          description:
            'Specifies the format of the payload sent to an HTTP API Lambda authorizer. Required for HTTP API Lambda authorizers. Supported values are 1.0 and 2.0. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a>.',
        }),
    ).exactOptional(),
    AuthorizerResultTtlInSeconds: IntegerWithLengthBetween0And3600Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'authorizerResultTtlInSeconds' },
          description:
            'The time to live (TTL) for cached authorizer results, in seconds. If it equals 0, authorization caching is disabled. If it is greater than 0, API Gateway caches authorizer responses. The maximum value is 3600, or 1 hour. Supported only for HTTP API Lambda authorizers.',
        }),
    ).exactOptional(),
    AuthorizerType: AuthorizerTypeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'authorizerType' },
          description:
            'The authorizer type. Specify REQUEST for a Lambda function using incoming request parameters. Specify JWT to use JSON Web Tokens (supported only for HTTP APIs).',
        }),
    ).exactOptional(),
    AuthorizerUri: UriWithLengthBetween1And2048Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'authorizerUri' },
          description:
            "The authorizer's Uniform Resource Identifier (URI). For REQUEST authorizers, this must be a well-formed Lambda function URI, for example, arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:<replaceable>{account_id}</replaceable>:function:<replaceable>{lambda_function_name}</replaceable>/invocations. In general, the URI has this form: arn:aws:apigateway:<replaceable>{region}</replaceable>:lambda:path/<replaceable>{service_api}</replaceable>\n               , where <replaceable></replaceable>{region} is the same as the region hosting the Lambda function, path indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial /. For Lambda functions, this is usually of the form /2015-03-31/functions/[FunctionARN]/invocations. Supported only for REQUEST authorizers.",
        }),
    ).exactOptional(),
    EnableSimpleResponses: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'enableSimpleResponses' },
          description:
            'Specifies whether a Lambda authorizer returns a response in a simple format. If enabled, the Lambda authorizer can return a boolean value instead of an IAM policy. Supported only for HTTP APIs. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a>',
        }),
    ).exactOptional(),
    IdentitySource: IdentitySourceListSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'identitySource' },
          description:
            '<p>The identity source for which authorization is requested.</p> <p>For a REQUEST authorizer, this is optional. The value is a set of one or more mapping expressions of the specified request parameters. The identity source can be headers, query string parameters, stage variables, and context parameters. For example, if an Auth header and a Name query string parameter are defined as identity sources, this value is route.request.header.Auth, route.request.querystring.Name for WebSocket APIs. For HTTP APIs, use selection expressions prefixed with $, for example, $request.header.Auth, $request.querystring.Name. These parameters are used to perform runtime validation for Lambda-based authorizers by verifying all of the identity-related request parameters are present in the request, not null, and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function. Otherwise, it returns a 401 Unauthorized response without calling the Lambda function. For HTTP APIs, identity sources are also used as the cache key when caching is enabled. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a>.</p> <p>For JWT, a single entry that specifies where to extract the JSON Web Token (JWT) from inbound requests. Currently only header-based and query parameter-based selections are supported, for example $request.header.Authorization.</p>',
        }),
    ).exactOptional(),
    IdentityValidationExpression: StringWithLengthBetween0And1024Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'identityValidationExpression' },
          description: 'The validation expression does not apply to the REQUEST authorizer.',
        }),
    ).exactOptional(),
    JwtConfiguration: JWTConfigurationSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'jwtConfiguration' },
          description:
            'Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.',
        }),
    ).exactOptional(),
    Name: StringWithLengthBetween1And128Schema.and(
      z.any().openapi({ xml: { name: 'name' }, description: 'The name of the authorizer.' }),
    ),
  })
  .openapi({ required: ['Name'], description: 'Represents an authorizer.' })
  .openapi('Authorizer')

const ListOfAuthorizerSchema = z.array(AuthorizerSchema).openapi('ListOfAuthorizer')

const GetAuthorizersResponseSchema = z
  .object({
    Items: ListOfAuthorizerSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'items' }, description: 'The elements from this collection.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'nextToken' },
          description:
            'The next page of elements from this collection. Not valid for the last element of the collection.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetAuthorizersResponse')

const GetDeploymentResponseSchema = z
  .object({
    AutoDeployed: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'autoDeployed' },
          description: 'Specifies whether a deployment was automatically released.',
        }),
    ).exactOptional(),
    CreatedDate: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'createdDate' },
          description: 'The date and time when the Deployment resource was created.',
        }),
    ).exactOptional(),
    DeploymentId: IdSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'deploymentId' },
          description: 'The identifier for the deployment.',
        }),
    ).exactOptional(),
    DeploymentStatus: DeploymentStatusSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'deploymentStatus' },
          description: 'The status of the deployment: PENDING, FAILED, or SUCCEEDED.',
        }),
    ).exactOptional(),
    DeploymentStatusMessage: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'deploymentStatusMessage' },
          description: 'May contain additional feedback on the status of an API deployment.',
        }),
    ).exactOptional(),
    Description: StringWithLengthBetween0And1024Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'description' },
          description: 'The description for the deployment.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetDeploymentResponse')

const DeploymentSchema = z
  .object({
    AutoDeployed: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'autoDeployed' },
          description: 'Specifies whether a deployment was automatically released.',
        }),
    ).exactOptional(),
    CreatedDate: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'createdDate' },
          description: 'The date and time when the Deployment resource was created.',
        }),
    ).exactOptional(),
    DeploymentId: IdSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'deploymentId' },
          description: 'The identifier for the deployment.',
        }),
    ).exactOptional(),
    DeploymentStatus: DeploymentStatusSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'deploymentStatus' },
          description: 'The status of the deployment: PENDING, FAILED, or SUCCEEDED.',
        }),
    ).exactOptional(),
    DeploymentStatusMessage: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'deploymentStatusMessage' },
          description: 'May contain additional feedback on the status of an API deployment.',
        }),
    ).exactOptional(),
    Description: StringWithLengthBetween0And1024Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'description' },
          description: 'The description for the deployment.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An immutable representation of an API that can be called by users. A Deployment must be associated with a Stage for it to be callable over the internet.',
    required: [],
  })
  .openapi('Deployment')

const ListOfDeploymentSchema = z.array(DeploymentSchema).openapi('ListOfDeployment')

const GetDeploymentsResponseSchema = z
  .object({
    Items: ListOfDeploymentSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'items' }, description: 'The elements from this collection.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'nextToken' },
          description:
            'The next page of elements from this collection. Not valid for the last element of the collection.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetDeploymentsResponse')

const GetDomainNameResponseSchema = z
  .object({
    ApiMappingSelectionExpression: SelectionExpressionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'apiMappingSelectionExpression' },
          description: 'The API mapping selection expression.',
        }),
    ).exactOptional(),
    DomainName: StringWithLengthBetween1And512Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'domainName' },
          description: 'The name of the DomainName resource.',
        }),
    ).exactOptional(),
    DomainNameConfigurations: DomainNameConfigurationsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'domainNameConfigurations' },
          description: 'The domain name configurations.',
        }),
    ).exactOptional(),
    MutualTlsAuthentication: MutualTlsAuthenticationSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'mutualTlsAuthentication' },
          description: 'The mutual TLS authentication configuration for a custom domain name.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description: 'The collection of tags associated with a domain name.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetDomainNameResponse')

const DomainNameSchema = z
  .object({
    ApiMappingSelectionExpression: SelectionExpressionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'apiMappingSelectionExpression' },
          description: 'The API mapping selection expression.',
        }),
    ).exactOptional(),
    DomainName: StringWithLengthBetween1And512Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'domainName' },
          description: 'The name of the DomainName resource.',
        }),
    ),
    DomainNameConfigurations: DomainNameConfigurationsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'domainNameConfigurations' },
          description: 'The domain name configurations.',
        }),
    ).exactOptional(),
    MutualTlsAuthentication: MutualTlsAuthenticationSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'mutualTlsAuthentication' },
          description: 'The mutual TLS authentication configuration for a custom domain name.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description: 'The collection of tags associated with a domain name.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['DomainName'], description: 'Represents a domain name.' })
  .openapi('DomainName')

const ListOfDomainNameSchema = z.array(DomainNameSchema).openapi('ListOfDomainName')

const GetDomainNamesResponseSchema = z
  .object({
    Items: ListOfDomainNameSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'items' }, description: 'The elements from this collection.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'nextToken' },
          description:
            'The next page of elements from this collection. Not valid for the last element of the collection.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetDomainNamesResponse')

const GetIntegrationResultSchema = z
  .object({
    ApiGatewayManaged: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'apiGatewayManaged' },
          description:
            "Specifies whether an integration is managed by API Gateway. If you created an API using using quick create, the resulting integration is managed by API Gateway. You can update a managed integration, but you can't delete it.",
        }),
    ).exactOptional(),
    ConnectionId: StringWithLengthBetween1And1024Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'connectionId' },
          description:
            'The ID of the VPC link for a private integration. Supported only for HTTP APIs.',
        }),
    ).exactOptional(),
    ConnectionType: ConnectionTypeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'connectionType' },
          description:
            'The type of the network connection to the integration endpoint. Specify INTERNET for connections through the public routable internet or VPC_LINK for private connections between API Gateway and resources in a VPC. The default value is INTERNET.',
        }),
    ).exactOptional(),
    ContentHandlingStrategy: ContentHandlingStrategySchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'contentHandlingStrategy' },
          description:
            '<p>Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:</p> <p>CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p> <p>CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.</p>',
        }),
    ).exactOptional(),
    CredentialsArn: ArnSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'credentialsArn' },
          description:
            "Specifies the credentials required for the integration, if any. For AWS integrations, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify the string arn:aws:iam::*:user/*. To use resource-based permissions on supported AWS services, specify null.",
        }),
    ).exactOptional(),
    Description: StringWithLengthBetween0And1024Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'description' },
          description: 'Represents the description of an integration.',
        }),
    ).exactOptional(),
    IntegrationId: IdSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'integrationId' },
          description: 'Represents the identifier of an integration.',
        }),
    ).exactOptional(),
    IntegrationMethod: StringWithLengthBetween1And64Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'integrationMethod' },
          description: "Specifies the integration's HTTP method type.",
        }),
    ).exactOptional(),
    IntegrationResponseSelectionExpression: SelectionExpressionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'integrationResponseSelectionExpression' },
          description:
            'The integration response selection expression for the integration. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-integration-response-selection-expressions">Integration Response Selection Expressions</a>.',
        }),
    ).exactOptional(),
    IntegrationSubtype: StringWithLengthBetween1And128Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'integrationSubtype' },
          description:
            'Supported only for HTTP API AWS_PROXY integrations. Specifies the AWS service action to invoke. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services-reference.html">Integration subtype reference</a>.',
        }),
    ).exactOptional(),
    IntegrationType: IntegrationTypeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'integrationType' },
          description:
            '<p>The integration type of an integration. One of the following:</p> <p>AWS: for integrating the route or method request with an AWS service action, including the Lambda function-invoking action. With the Lambda function-invoking action, this is referred to as the Lambda custom integration. With any other AWS service action, this is known as AWS integration. Supported only for WebSocket APIs.</p> <p>AWS_PROXY: for integrating the route or method request with a Lambda function or other AWS service action. This integration is also referred to as a Lambda proxy integration.</p> <p>HTTP: for integrating the route or method request with an HTTP endpoint. This integration is also referred to as the HTTP custom integration. Supported only for WebSocket APIs.</p> <p>HTTP_PROXY: for integrating the route or method request with an HTTP endpoint, with the client request passed through as-is. This is also referred to as HTTP proxy integration.</p> <p>MOCK: for integrating the route or method request with API Gateway as a "loopback" endpoint without invoking any backend. Supported only for WebSocket APIs.</p>',
        }),
    ).exactOptional(),
    IntegrationUri: UriWithLengthBetween1And2048Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'integrationUri' },
          description:
            '<p>For a Lambda integration, specify the URI of a Lambda function.</p> <p>For an HTTP integration, specify a fully-qualified URL.</p> <p>For an HTTP API private integration, specify the ARN of an Application Load Balancer listener, Network Load Balancer listener, or AWS Cloud Map service. If you specify the ARN of an AWS Cloud Map service, API Gateway uses DiscoverInstances to identify resources. You can use query parameters to target specific resources. To learn more, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_DiscoverInstances.html">DiscoverInstances</a>. For private integrations, all resources must be owned by the same AWS account.</p>',
        }),
    ).exactOptional(),
    PassthroughBehavior: PassthroughBehaviorSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'passthroughBehavior' },
          description:
            '<p>Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the requestTemplates property on the Integration resource. There are three valid values: WHEN_NO_MATCH, WHEN_NO_TEMPLATES, and NEVER. Supported only for WebSocket APIs.</p> <p>WHEN_NO_MATCH passes the request body for unmapped content types through to the integration backend without transformation.</p> <p>NEVER rejects unmapped content types with an HTTP 415 Unsupported Media Type response.</p> <p>WHEN_NO_TEMPLATES allows pass-through when the integration has no content types mapped to templates. However, if there is at least one content type defined, unmapped content types will be rejected with the same HTTP 415 Unsupported Media Type response.</p>',
        }),
    ).exactOptional(),
    PayloadFormatVersion: StringWithLengthBetween1And64Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'payloadFormatVersion' },
          description:
            'Specifies the format of the payload sent to an integration. Required for HTTP APIs.',
        }),
    ).exactOptional(),
    RequestParameters: IntegrationParametersSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'requestParameters' },
          description:
            '<p>For WebSocket APIs, a key-value map specifying request parameters that are passed from the method request to the backend. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of method.request.<replaceable>{location}</replaceable>.<replaceable>{name}</replaceable>\n          , where \n            <replaceable>{location}</replaceable>\n           is querystring, path, or header; and \n            <replaceable>{name}</replaceable>\n           must be a valid and unique method request parameter name.</p> <p>For HTTP API integrations with a specified integrationSubtype, request parameters are a key-value map specifying parameters that are passed to AWS_PROXY integrations. You can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services.html">Working with AWS service integrations for HTTP APIs</a>.</p> <p>For HTTP API itegrations, without a specified integrationSubtype request parameters are a key-value map specifying how to transform HTTP requests before sending them to backend integrations. The key should follow the pattern &lt;action&gt;:&lt;header|querystring|path&gt;.&lt;location&gt;. The action can be append, overwrite or remove. For values, you can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.</p>',
        }),
    ).exactOptional(),
    RequestTemplates: TemplateMapSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'requestTemplates' },
          description:
            'Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value. Supported only for WebSocket APIs.',
        }),
    ).exactOptional(),
    ResponseParameters: ResponseParametersSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'responseParameters' },
          description:
            'Supported only for HTTP APIs. You use response parameters to transform the HTTP response from a backend integration before returning the response to clients. Specify a key-value map from a selection key to response parameters. The selection key must be a valid HTTP status code within the range of 200-599. Response parameters are a key-value map. The key must match pattern &lt;action&gt;:&lt;header&gt;.&lt;location&gt; or overwrite.statuscode. The action can be append, overwrite or remove. The value can be a static value, or map to response data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.',
        }),
    ).exactOptional(),
    TemplateSelectionExpression: SelectionExpressionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'templateSelectionExpression' },
          description:
            'The template selection expression for the integration. Supported only for WebSocket APIs.',
        }),
    ).exactOptional(),
    TimeoutInMillis: IntegerWithLengthBetween50And30000Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'timeoutInMillis' },
          description:
            'Custom timeout between 50 and 29,000 milliseconds for WebSocket APIs and between 50 and 30,000 milliseconds for HTTP APIs. The default timeout is 29 seconds for WebSocket APIs and 30 seconds for HTTP APIs.',
        }),
    ).exactOptional(),
    TlsConfig: TlsConfigSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tlsConfig' },
          description:
            'The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetIntegrationResult')

const GetIntegrationResponseResponseSchema = z
  .object({
    ContentHandlingStrategy: ContentHandlingStrategySchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'contentHandlingStrategy' },
          description:
            '<p>Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:</p> <p>CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p> <p>CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.</p>',
        }),
    ).exactOptional(),
    IntegrationResponseId: IdSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'integrationResponseId' },
          description: 'The integration response ID.',
        }),
    ).exactOptional(),
    IntegrationResponseKey: SelectionKeySchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'integrationResponseKey' },
          description: 'The integration response key.',
        }),
    ).exactOptional(),
    ResponseParameters: IntegrationParametersSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'responseParameters' },
          description:
            'A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix.',
        }),
    ).exactOptional(),
    ResponseTemplates: TemplateMapSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'responseTemplates' },
          description:
            'The collection of response templates for the integration response as a string-to-string map of key-value pairs. Response templates are represented as a key/value map, with a content-type as the key and a template as the value.',
        }),
    ).exactOptional(),
    TemplateSelectionExpression: SelectionExpressionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'templateSelectionExpression' },
          description: 'The template selection expressions for the integration response.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetIntegrationResponseResponse')

const IntegrationResponseSchema = z
  .object({
    ContentHandlingStrategy: ContentHandlingStrategySchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'contentHandlingStrategy' },
          description:
            '<p>Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:</p> <p>CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p> <p>CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.</p>',
        }),
    ).exactOptional(),
    IntegrationResponseId: IdSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'integrationResponseId' },
          description: 'The integration response ID.',
        }),
    ).exactOptional(),
    IntegrationResponseKey: SelectionKeySchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'integrationResponseKey' },
          description: 'The integration response key.',
        }),
    ),
    ResponseParameters: IntegrationParametersSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'responseParameters' },
          description:
            'A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix.',
        }),
    ).exactOptional(),
    ResponseTemplates: TemplateMapSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'responseTemplates' },
          description:
            'The collection of response templates for the integration response as a string-to-string map of key-value pairs. Response templates are represented as a key/value map, with a content-type as the key and a template as the value.',
        }),
    ).exactOptional(),
    TemplateSelectionExpression: SelectionExpressionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'templateSelectionExpression' },
          description: 'The template selection expressions for the integration response.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['IntegrationResponseKey'],
    description: 'Represents an integration response.',
  })
  .openapi('IntegrationResponse')

const ListOfIntegrationResponseSchema = z
  .array(IntegrationResponseSchema)
  .openapi('ListOfIntegrationResponse')

const GetIntegrationResponsesResponseSchema = z
  .object({
    Items: ListOfIntegrationResponseSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'items' }, description: 'The elements from this collection.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'nextToken' },
          description:
            'The next page of elements from this collection. Not valid for the last element of the collection.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetIntegrationResponsesResponse')

const IntegrationSchema = z
  .object({
    ApiGatewayManaged: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'apiGatewayManaged' },
          description:
            "Specifies whether an integration is managed by API Gateway. If you created an API using using quick create, the resulting integration is managed by API Gateway. You can update a managed integration, but you can't delete it.",
        }),
    ).exactOptional(),
    ConnectionId: StringWithLengthBetween1And1024Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'connectionId' },
          description:
            'The ID of the VPC link for a private integration. Supported only for HTTP APIs.',
        }),
    ).exactOptional(),
    ConnectionType: ConnectionTypeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'connectionType' },
          description:
            'The type of the network connection to the integration endpoint. Specify INTERNET for connections through the public routable internet or VPC_LINK for private connections between API Gateway and resources in a VPC. The default value is INTERNET.',
        }),
    ).exactOptional(),
    ContentHandlingStrategy: ContentHandlingStrategySchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'contentHandlingStrategy' },
          description:
            '<p>Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:</p> <p>CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p> <p>CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.</p>',
        }),
    ).exactOptional(),
    CredentialsArn: ArnSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'credentialsArn' },
          description:
            "Specifies the credentials required for the integration, if any. For AWS integrations, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify the string arn:aws:iam::*:user/*. To use resource-based permissions on supported AWS services, specify null.",
        }),
    ).exactOptional(),
    Description: StringWithLengthBetween0And1024Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'description' },
          description: 'Represents the description of an integration.',
        }),
    ).exactOptional(),
    IntegrationId: IdSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'integrationId' },
          description: 'Represents the identifier of an integration.',
        }),
    ).exactOptional(),
    IntegrationMethod: StringWithLengthBetween1And64Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'integrationMethod' },
          description: "Specifies the integration's HTTP method type.",
        }),
    ).exactOptional(),
    IntegrationResponseSelectionExpression: SelectionExpressionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'integrationResponseSelectionExpression' },
          description:
            'The integration response selection expression for the integration. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-integration-response-selection-expressions">Integration Response Selection Expressions</a>.',
        }),
    ).exactOptional(),
    IntegrationSubtype: StringWithLengthBetween1And128Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'integrationSubtype' },
          description:
            'Supported only for HTTP API AWS_PROXY integrations. Specifies the AWS service action to invoke. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services-reference.html">Integration subtype reference</a>.',
        }),
    ).exactOptional(),
    IntegrationType: IntegrationTypeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'integrationType' },
          description:
            '<p>The integration type of an integration. One of the following:</p> <p>AWS: for integrating the route or method request with an AWS service action, including the Lambda function-invoking action. With the Lambda function-invoking action, this is referred to as the Lambda custom integration. With any other AWS service action, this is known as AWS integration. Supported only for WebSocket APIs.</p> <p>AWS_PROXY: for integrating the route or method request with a Lambda function or other AWS service action. This integration is also referred to as a Lambda proxy integration.</p> <p>HTTP: for integrating the route or method request with an HTTP endpoint. This integration is also referred to as the HTTP custom integration. Supported only for WebSocket APIs.</p> <p>HTTP_PROXY: for integrating the route or method request with an HTTP endpoint, with the client request passed through as-is. This is also referred to as HTTP proxy integration.</p> <p>MOCK: for integrating the route or method request with API Gateway as a "loopback" endpoint without invoking any backend. Supported only for WebSocket APIs.</p>',
        }),
    ).exactOptional(),
    IntegrationUri: UriWithLengthBetween1And2048Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'integrationUri' },
          description:
            '<p>For a Lambda integration, specify the URI of a Lambda function.</p> <p>For an HTTP integration, specify a fully-qualified URL.</p> <p>For an HTTP API private integration, specify the ARN of an Application Load Balancer listener, Network Load Balancer listener, or AWS Cloud Map service. If you specify the ARN of an AWS Cloud Map service, API Gateway uses DiscoverInstances to identify resources. You can use query parameters to target specific resources. To learn more, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_DiscoverInstances.html">DiscoverInstances</a>. For private integrations, all resources must be owned by the same AWS account.</p>',
        }),
    ).exactOptional(),
    PassthroughBehavior: PassthroughBehaviorSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'passthroughBehavior' },
          description:
            '<p>Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the requestTemplates property on the Integration resource. There are three valid values: WHEN_NO_MATCH, WHEN_NO_TEMPLATES, and NEVER. Supported only for WebSocket APIs.</p> <p>WHEN_NO_MATCH passes the request body for unmapped content types through to the integration backend without transformation.</p> <p>NEVER rejects unmapped content types with an HTTP 415 Unsupported Media Type response.</p> <p>WHEN_NO_TEMPLATES allows pass-through when the integration has no content types mapped to templates. However, if there is at least one content type defined, unmapped content types will be rejected with the same HTTP 415 Unsupported Media Type response.</p>',
        }),
    ).exactOptional(),
    PayloadFormatVersion: StringWithLengthBetween1And64Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'payloadFormatVersion' },
          description:
            'Specifies the format of the payload sent to an integration. Required for HTTP APIs.',
        }),
    ).exactOptional(),
    RequestParameters: IntegrationParametersSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'requestParameters' },
          description:
            '<p>For WebSocket APIs, a key-value map specifying request parameters that are passed from the method request to the backend. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of method.request.<replaceable>{location}</replaceable>.<replaceable>{name}</replaceable>\n          , where \n            <replaceable>{location}</replaceable>\n           is querystring, path, or header; and \n            <replaceable>{name}</replaceable>\n           must be a valid and unique method request parameter name.</p> <p>For HTTP API integrations with a specified integrationSubtype, request parameters are a key-value map specifying parameters that are passed to AWS_PROXY integrations. You can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services.html">Working with AWS service integrations for HTTP APIs</a>.</p> <p>For HTTP API itegrations, without a specified integrationSubtype request parameters are a key-value map specifying how to transform HTTP requests before sending them to backend integrations. The key should follow the pattern &lt;action&gt;:&lt;header|querystring|path&gt;.&lt;location&gt;. The action can be append, overwrite or remove. For values, you can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.</p>',
        }),
    ).exactOptional(),
    RequestTemplates: TemplateMapSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'requestTemplates' },
          description:
            'Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value. Supported only for WebSocket APIs.',
        }),
    ).exactOptional(),
    ResponseParameters: ResponseParametersSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'responseParameters' },
          description:
            'Supported only for HTTP APIs. You use response parameters to transform the HTTP response from a backend integration before returning the response to clients. Specify a key-value map from a selection key to response parameters. The selection key must be a valid HTTP status code within the range of 200-599. Response parameters are a key-value map. The key must match pattern &lt;action&gt;:&lt;header&gt;.&lt;location&gt; or overwrite.statuscode. The action can be append, overwrite or remove. The value can be a static value, or map to response data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.',
        }),
    ).exactOptional(),
    TemplateSelectionExpression: SelectionExpressionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'templateSelectionExpression' },
          description:
            'The template selection expression for the integration. Supported only for WebSocket APIs.',
        }),
    ).exactOptional(),
    TimeoutInMillis: IntegerWithLengthBetween50And30000Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'timeoutInMillis' },
          description:
            'Custom timeout between 50 and 29,000 milliseconds for WebSocket APIs and between 50 and 30,000 milliseconds for HTTP APIs. The default timeout is 29 seconds for WebSocket APIs and 30 seconds for HTTP APIs.',
        }),
    ).exactOptional(),
    TlsConfig: TlsConfigSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tlsConfig' },
          description:
            'The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents an integration.', required: [] })
  .openapi('Integration')

const ListOfIntegrationSchema = z.array(IntegrationSchema).openapi('ListOfIntegration')

const GetIntegrationsResponseSchema = z
  .object({
    Items: ListOfIntegrationSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'items' }, description: 'The elements from this collection.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'nextToken' },
          description:
            'The next page of elements from this collection. Not valid for the last element of the collection.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetIntegrationsResponse')

const GetModelResponseSchema = z
  .object({
    ContentType: StringWithLengthBetween1And256Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'contentType' },
          description: 'The content-type for the model, for example, "application/json".',
        }),
    ).exactOptional(),
    Description: StringWithLengthBetween0And1024Schema.and(
      z
        .any()
        .openapi({ xml: { name: 'description' }, description: 'The description of the model.' }),
    ).exactOptional(),
    ModelId: IdSchema.and(
      z.any().openapi({ xml: { name: 'modelId' }, description: 'The model identifier.' }),
    ).exactOptional(),
    Name: StringWithLengthBetween1And128Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'name' },
          description: 'The name of the model. Must be alphanumeric.',
        }),
    ).exactOptional(),
    Schema: StringWithLengthBetween0And32KSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'schema' },
          description:
            'The schema for the model. For application/json models, this should be JSON schema draft 4 model.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetModelResponse')

const GetModelTemplateResponseSchema = z
  .object({
    Value: StringSchema.and(
      z.any().openapi({ xml: { name: 'value' }, description: 'The template value.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetModelTemplateResponse')

const ModelSchema = z
  .object({
    ContentType: StringWithLengthBetween1And256Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'contentType' },
          description: 'The content-type for the model, for example, "application/json".',
        }),
    ).exactOptional(),
    Description: StringWithLengthBetween0And1024Schema.and(
      z
        .any()
        .openapi({ xml: { name: 'description' }, description: 'The description of the model.' }),
    ).exactOptional(),
    ModelId: IdSchema.and(
      z.any().openapi({ xml: { name: 'modelId' }, description: 'The model identifier.' }),
    ).exactOptional(),
    Name: StringWithLengthBetween1And128Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'name' },
          description: 'The name of the model. Must be alphanumeric.',
        }),
    ),
    Schema: StringWithLengthBetween0And32KSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'schema' },
          description:
            'The schema for the model. For application/json models, this should be JSON schema draft 4 model.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name'],
    description:
      'Represents a data model for an API. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/models-mappings.html">Create Models and Mapping Templates for Request and Response Mappings</a>.',
  })
  .openapi('Model')

const ListOfModelSchema = z.array(ModelSchema).openapi('ListOfModel')

const GetModelsResponseSchema = z
  .object({
    Items: ListOfModelSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'items' }, description: 'The elements from this collection.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'nextToken' },
          description:
            'The next page of elements from this collection. Not valid for the last element of the collection.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetModelsResponse')

const GetRouteResultSchema = z
  .object({
    ApiGatewayManaged: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'apiGatewayManaged' },
          description:
            "Specifies whether a route is managed by API Gateway. If you created an API using quick create, the $default route is managed by API Gateway. You can't modify the $default route key.",
        }),
    ).exactOptional(),
    ApiKeyRequired: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'apiKeyRequired' },
          description:
            'Specifies whether an API key is required for this route. Supported only for WebSocket APIs.',
        }),
    ).exactOptional(),
    AuthorizationScopes: AuthorizationScopesSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'authorizationScopes' },
          description:
            'A list of authorization scopes configured on a route. The scopes are used with a JWT authorizer to authorize the method invocation. The authorization works by matching the route scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any route scope matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the route scope is configured, the client must provide an access token instead of an identity token for authorization purposes.',
        }),
    ).exactOptional(),
    AuthorizationType: AuthorizationTypeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'authorizationType' },
          description:
            'The authorization type for the route. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer For HTTP APIs, valid values are NONE for open access, JWT for using JSON Web Tokens, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer.',
        }),
    ).exactOptional(),
    AuthorizerId: IdSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'authorizerId' },
          description:
            'The identifier of the Authorizer resource to be associated with this route. The authorizer identifier is generated by API Gateway when you created the authorizer.',
        }),
    ).exactOptional(),
    ModelSelectionExpression: SelectionExpressionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'modelSelectionExpression' },
          description:
            'The model selection expression for the route. Supported only for WebSocket APIs.',
        }),
    ).exactOptional(),
    OperationName: StringWithLengthBetween1And64Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'operationName' },
          description: 'The operation name for the route.',
        }),
    ).exactOptional(),
    RequestModels: RouteModelsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'requestModels' },
          description: 'The request models for the route. Supported only for WebSocket APIs.',
        }),
    ).exactOptional(),
    RequestParameters: RouteParametersSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'requestParameters' },
          description: 'The request parameters for the route. Supported only for WebSocket APIs.',
        }),
    ).exactOptional(),
    RouteId: IdSchema.and(
      z.any().openapi({ xml: { name: 'routeId' }, description: 'The route ID.' }),
    ).exactOptional(),
    RouteKey: SelectionKeySchema.and(
      z.any().openapi({ xml: { name: 'routeKey' }, description: 'The route key for the route.' }),
    ).exactOptional(),
    RouteResponseSelectionExpression: SelectionExpressionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'routeResponseSelectionExpression' },
          description:
            'The route response selection expression for the route. Supported only for WebSocket APIs.',
        }),
    ).exactOptional(),
    Target: StringWithLengthBetween1And128Schema.and(
      z.any().openapi({ xml: { name: 'target' }, description: 'The target for the route.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetRouteResult')

const GetRouteResponseResponseSchema = z
  .object({
    ModelSelectionExpression: SelectionExpressionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'modelSelectionExpression' },
          description:
            'Represents the model selection expression of a route response. Supported only for WebSocket APIs.',
        }),
    ).exactOptional(),
    ResponseModels: RouteModelsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'responseModels' },
          description: 'Represents the response models of a route response.',
        }),
    ).exactOptional(),
    ResponseParameters: RouteParametersSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'responseParameters' },
          description: 'Represents the response parameters of a route response.',
        }),
    ).exactOptional(),
    RouteResponseId: IdSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'routeResponseId' },
          description: 'Represents the identifier of a route response.',
        }),
    ).exactOptional(),
    RouteResponseKey: SelectionKeySchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'routeResponseKey' },
          description: 'Represents the route response key of a route response.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetRouteResponseResponse')

const RouteResponseSchema = z
  .object({
    ModelSelectionExpression: SelectionExpressionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'modelSelectionExpression' },
          description:
            'Represents the model selection expression of a route response. Supported only for WebSocket APIs.',
        }),
    ).exactOptional(),
    ResponseModels: RouteModelsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'responseModels' },
          description: 'Represents the response models of a route response.',
        }),
    ).exactOptional(),
    ResponseParameters: RouteParametersSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'responseParameters' },
          description: 'Represents the response parameters of a route response.',
        }),
    ).exactOptional(),
    RouteResponseId: IdSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'routeResponseId' },
          description: 'Represents the identifier of a route response.',
        }),
    ).exactOptional(),
    RouteResponseKey: SelectionKeySchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'routeResponseKey' },
          description: 'Represents the route response key of a route response.',
        }),
    ),
  })
  .openapi({ required: ['RouteResponseKey'], description: 'Represents a route response.' })
  .openapi('RouteResponse')

const ListOfRouteResponseSchema = z.array(RouteResponseSchema).openapi('ListOfRouteResponse')

const GetRouteResponsesResponseSchema = z
  .object({
    Items: ListOfRouteResponseSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'items' }, description: 'The elements from this collection.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'nextToken' },
          description:
            'The next page of elements from this collection. Not valid for the last element of the collection.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetRouteResponsesResponse')

const RouteSchema = z
  .object({
    ApiGatewayManaged: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'apiGatewayManaged' },
          description:
            "Specifies whether a route is managed by API Gateway. If you created an API using quick create, the $default route is managed by API Gateway. You can't modify the $default route key.",
        }),
    ).exactOptional(),
    ApiKeyRequired: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'apiKeyRequired' },
          description:
            'Specifies whether an API key is required for this route. Supported only for WebSocket APIs.',
        }),
    ).exactOptional(),
    AuthorizationScopes: AuthorizationScopesSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'authorizationScopes' },
          description:
            'A list of authorization scopes configured on a route. The scopes are used with a JWT authorizer to authorize the method invocation. The authorization works by matching the route scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any route scope matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the route scope is configured, the client must provide an access token instead of an identity token for authorization purposes.',
        }),
    ).exactOptional(),
    AuthorizationType: AuthorizationTypeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'authorizationType' },
          description:
            'The authorization type for the route. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer For HTTP APIs, valid values are NONE for open access, JWT for using JSON Web Tokens, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer.',
        }),
    ).exactOptional(),
    AuthorizerId: IdSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'authorizerId' },
          description:
            'The identifier of the Authorizer resource to be associated with this route. The authorizer identifier is generated by API Gateway when you created the authorizer.',
        }),
    ).exactOptional(),
    ModelSelectionExpression: SelectionExpressionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'modelSelectionExpression' },
          description:
            'The model selection expression for the route. Supported only for WebSocket APIs.',
        }),
    ).exactOptional(),
    OperationName: StringWithLengthBetween1And64Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'operationName' },
          description: 'The operation name for the route.',
        }),
    ).exactOptional(),
    RequestModels: RouteModelsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'requestModels' },
          description: 'The request models for the route. Supported only for WebSocket APIs.',
        }),
    ).exactOptional(),
    RequestParameters: RouteParametersSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'requestParameters' },
          description: 'The request parameters for the route. Supported only for WebSocket APIs.',
        }),
    ).exactOptional(),
    RouteId: IdSchema.and(
      z.any().openapi({ xml: { name: 'routeId' }, description: 'The route ID.' }),
    ).exactOptional(),
    RouteKey: SelectionKeySchema.and(
      z.any().openapi({ xml: { name: 'routeKey' }, description: 'The route key for the route.' }),
    ),
    RouteResponseSelectionExpression: SelectionExpressionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'routeResponseSelectionExpression' },
          description:
            'The route response selection expression for the route. Supported only for WebSocket APIs.',
        }),
    ).exactOptional(),
    Target: StringWithLengthBetween1And128Schema.and(
      z.any().openapi({ xml: { name: 'target' }, description: 'The target for the route.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['RouteKey'], description: 'Represents a route.' })
  .openapi('Route')

const ListOfRouteSchema = z.array(RouteSchema).openapi('ListOfRoute')

const GetRoutesResponseSchema = z
  .object({
    Items: ListOfRouteSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'items' }, description: 'The elements from this collection.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'nextToken' },
          description:
            'The next page of elements from this collection. Not valid for the last element of the collection.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetRoutesResponse')

const GetStageResponseSchema = z
  .object({
    AccessLogSettings: AccessLogSettingsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'accessLogSettings' },
          description: 'Settings for logging access in this stage.',
        }),
    ).exactOptional(),
    ApiGatewayManaged: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'apiGatewayManaged' },
          description:
            "Specifies whether a stage is managed by API Gateway. If you created an API using quick create, the $default stage is managed by API Gateway. You can't modify the $default stage.",
        }),
    ).exactOptional(),
    AutoDeploy: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'autoDeploy' },
          description:
            'Specifies whether updates to an API automatically trigger a new deployment. The default value is false.',
        }),
    ).exactOptional(),
    ClientCertificateId: IdSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clientCertificateId' },
          description:
            'The identifier of a client certificate for a Stage. Supported only for WebSocket APIs.',
        }),
    ).exactOptional(),
    CreatedDate: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'createdDate' },
          description: 'The timestamp when the stage was created.',
        }),
    ).exactOptional(),
    DefaultRouteSettings: RouteSettingsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'defaultRouteSettings' },
          description: 'Default route settings for the stage.',
        }),
    ).exactOptional(),
    DeploymentId: IdSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'deploymentId' },
          description:
            "The identifier of the Deployment that the Stage is associated with. Can't be updated if autoDeploy is enabled.",
        }),
    ).exactOptional(),
    Description: StringWithLengthBetween0And1024Schema.and(
      z
        .any()
        .openapi({ xml: { name: 'description' }, description: 'The description of the stage.' }),
    ).exactOptional(),
    LastDeploymentStatusMessage: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'lastDeploymentStatusMessage' },
          description:
            'Describes the status of the last deployment of a stage. Supported only for stages with autoDeploy enabled.',
        }),
    ).exactOptional(),
    LastUpdatedDate: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'lastUpdatedDate' },
          description: 'The timestamp when the stage was last updated.',
        }),
    ).exactOptional(),
    RouteSettings: RouteSettingsMapSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'routeSettings' },
          description: 'Route settings for the stage, by routeKey.',
        }),
    ).exactOptional(),
    StageName: StringWithLengthBetween1And128Schema.and(
      z.any().openapi({ xml: { name: 'stageName' }, description: 'The name of the stage.' }),
    ).exactOptional(),
    StageVariables: StageVariablesMapSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'stageVariables' },
          description:
            'A map that defines the stage variables for a stage resource. Variable names can have alphanumeric and underscore characters, and the values must match [A-Za-z0-9-._~:/?#&amp;=,]+.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description:
            'The collection of tags. Each tag element is associated with a given resource.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetStageResponse')

const StageSchema = z
  .object({
    AccessLogSettings: AccessLogSettingsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'accessLogSettings' },
          description: 'Settings for logging access in this stage.',
        }),
    ).exactOptional(),
    ApiGatewayManaged: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'apiGatewayManaged' },
          description:
            "Specifies whether a stage is managed by API Gateway. If you created an API using quick create, the $default stage is managed by API Gateway. You can't modify the $default stage.",
        }),
    ).exactOptional(),
    AutoDeploy: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'autoDeploy' },
          description:
            'Specifies whether updates to an API automatically trigger a new deployment. The default value is false.',
        }),
    ).exactOptional(),
    ClientCertificateId: IdSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clientCertificateId' },
          description:
            'The identifier of a client certificate for a Stage. Supported only for WebSocket APIs.',
        }),
    ).exactOptional(),
    CreatedDate: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'createdDate' },
          description: 'The timestamp when the stage was created.',
        }),
    ).exactOptional(),
    DefaultRouteSettings: RouteSettingsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'defaultRouteSettings' },
          description: 'Default route settings for the stage.',
        }),
    ).exactOptional(),
    DeploymentId: IdSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'deploymentId' },
          description:
            "The identifier of the Deployment that the Stage is associated with. Can't be updated if autoDeploy is enabled.",
        }),
    ).exactOptional(),
    Description: StringWithLengthBetween0And1024Schema.and(
      z
        .any()
        .openapi({ xml: { name: 'description' }, description: 'The description of the stage.' }),
    ).exactOptional(),
    LastDeploymentStatusMessage: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'lastDeploymentStatusMessage' },
          description:
            'Describes the status of the last deployment of a stage. Supported only for stages with autoDeploy enabled.',
        }),
    ).exactOptional(),
    LastUpdatedDate: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'lastUpdatedDate' },
          description: 'The timestamp when the stage was last updated.',
        }),
    ).exactOptional(),
    RouteSettings: RouteSettingsMapSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'routeSettings' },
          description: 'Route settings for the stage, by routeKey.',
        }),
    ).exactOptional(),
    StageName: StringWithLengthBetween1And128Schema.and(
      z.any().openapi({ xml: { name: 'stageName' }, description: 'The name of the stage.' }),
    ),
    StageVariables: StageVariablesMapSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'stageVariables' },
          description:
            'A map that defines the stage variables for a stage resource. Variable names can have alphanumeric and underscore characters, and the values must match [A-Za-z0-9-._~:/?#&amp;=,]+.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description:
            'The collection of tags. Each tag element is associated with a given resource.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['StageName'], description: 'Represents an API stage.' })
  .openapi('Stage')

const ListOfStageSchema = z.array(StageSchema).openapi('ListOfStage')

const GetStagesResponseSchema = z
  .object({
    Items: ListOfStageSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'items' }, description: 'The elements from this collection.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'nextToken' },
          description:
            'The next page of elements from this collection. Not valid for the last element of the collection.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetStagesResponse')

const GetTagsResponseSchema = z
  .object({ Tags: TagsSchema.and(z.any().openapi({ xml: { name: 'tags' } })).exactOptional() })
  .openapi({ required: [] })
  .openapi('GetTagsResponse')

const GetVpcLinkResponseSchema = z
  .object({
    CreatedDate: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'createdDate' },
          description: 'The timestamp when the VPC link was created.',
        }),
    ).exactOptional(),
    Name: StringWithLengthBetween1And128Schema.and(
      z.any().openapi({ xml: { name: 'name' }, description: 'The name of the VPC link.' }),
    ).exactOptional(),
    SecurityGroupIds: SecurityGroupIdListSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'securityGroupIds' },
          description: 'A list of security group IDs for the VPC link.',
        }),
    ).exactOptional(),
    SubnetIds: SubnetIdListSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'subnetIds' },
          description: 'A list of subnet IDs to include in the VPC link.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z.any().openapi({ xml: { name: 'tags' }, description: 'Tags for the VPC link.' }),
    ).exactOptional(),
    VpcLinkId: IdSchema.and(
      z.any().openapi({ xml: { name: 'vpcLinkId' }, description: 'The ID of the VPC link.' }),
    ).exactOptional(),
    VpcLinkStatus: VpcLinkStatusSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'vpcLinkStatus' }, description: 'The status of the VPC link.' }),
    ).exactOptional(),
    VpcLinkStatusMessage: StringWithLengthBetween0And1024Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'vpcLinkStatusMessage' },
          description: 'A message summarizing the cause of the status of the VPC link.',
        }),
    ).exactOptional(),
    VpcLinkVersion: VpcLinkVersionSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'vpcLinkVersion' }, description: 'The version of the VPC link.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetVpcLinkResponse')

const VpcLinkSchema = z
  .object({
    CreatedDate: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'createdDate' },
          description: 'The timestamp when the VPC link was created.',
        }),
    ).exactOptional(),
    Name: StringWithLengthBetween1And128Schema.and(
      z.any().openapi({ xml: { name: 'name' }, description: 'The name of the VPC link.' }),
    ),
    SecurityGroupIds: SecurityGroupIdListSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'securityGroupIds' },
          description: 'A list of security group IDs for the VPC link.',
        }),
    ),
    SubnetIds: SubnetIdListSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'subnetIds' },
          description: 'A list of subnet IDs to include in the VPC link.',
        }),
    ),
    Tags: TagsSchema.and(
      z.any().openapi({ xml: { name: 'tags' }, description: 'Tags for the VPC link.' }),
    ).exactOptional(),
    VpcLinkId: IdSchema.and(
      z.any().openapi({ xml: { name: 'vpcLinkId' }, description: 'The ID of the VPC link.' }),
    ),
    VpcLinkStatus: VpcLinkStatusSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'vpcLinkStatus' }, description: 'The status of the VPC link.' }),
    ).exactOptional(),
    VpcLinkStatusMessage: StringWithLengthBetween0And1024Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'vpcLinkStatusMessage' },
          description: 'A message summarizing the cause of the status of the VPC link.',
        }),
    ).exactOptional(),
    VpcLinkVersion: VpcLinkVersionSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'vpcLinkVersion' }, description: 'The version of the VPC link.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['VpcLinkId', 'SecurityGroupIds', 'SubnetIds', 'Name'],
    description: 'Represents a VPC link.',
  })
  .openapi('VpcLink')

const ListOfVpcLinkSchema = z.array(VpcLinkSchema).openapi('ListOfVpcLink')

const GetVpcLinksResponseSchema = z
  .object({
    Items: ListOfVpcLinkSchema.and(
      z.any().openapi({ xml: { name: 'items' }, description: 'A collection of VPC links.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'nextToken' },
          description:
            'The next page of elements from this collection. Not valid for the last element of the collection.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetVpcLinksResponse')

const ImportApiResponseSchema = z
  .object({
    ApiEndpoint: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'apiEndpoint' },
          description:
            'The URI of the API, of the form {api-id}.execute-api.{region}.amazonaws.com. The stage name is typically appended to this URI to form a complete path to a deployed API stage.',
        }),
    ).exactOptional(),
    ApiGatewayManaged: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'apiGatewayManaged' },
          description:
            "Specifies whether an API is managed by API Gateway. You can't update or delete a managed API by using API Gateway. A managed API can be deleted only through the tooling or service that created it.",
        }),
    ).exactOptional(),
    ApiId: IdSchema.and(
      z.any().openapi({ xml: { name: 'apiId' }, description: 'The API ID.' }),
    ).exactOptional(),
    ApiKeySelectionExpression: SelectionExpressionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'apiKeySelectionExpression' },
          description:
            'An API key selection expression. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">API Key Selection Expressions</a>.',
        }),
    ).exactOptional(),
    CorsConfiguration: CorsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'corsConfiguration' },
          description: 'A CORS configuration. Supported only for HTTP APIs.',
        }),
    ).exactOptional(),
    CreatedDate: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'createdDate' },
          description: 'The timestamp when the API was created.',
        }),
    ).exactOptional(),
    Description: StringWithLengthBetween0And1024Schema.and(
      z.any().openapi({ xml: { name: 'description' }, description: 'The description of the API.' }),
    ).exactOptional(),
    DisableSchemaValidation: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'disableSchemaValidation' },
          description:
            'Avoid validating models when creating a deployment. Supported only for WebSocket APIs.',
        }),
    ).exactOptional(),
    DisableExecuteApiEndpoint: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'disableExecuteApiEndpoint' },
          description:
            'Specifies whether clients can invoke your API by using the default execute-api endpoint. By default, clients can invoke your API with the default https://{api_id}.execute-api.{region}.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint.',
        }),
    ).exactOptional(),
    ImportInfo: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'importInfo' },
          description:
            'The validation information during API import. This may include particular properties of your OpenAPI definition which are ignored during import. Supported only for HTTP APIs.',
        }),
    ).exactOptional(),
    Name: StringWithLengthBetween1And128Schema.and(
      z.any().openapi({ xml: { name: 'name' }, description: 'The name of the API.' }),
    ).exactOptional(),
    ProtocolType: ProtocolTypeSchema.and(
      z.any().openapi({ xml: { name: 'protocolType' }, description: 'The API protocol.' }),
    ).exactOptional(),
    RouteSelectionExpression: SelectionExpressionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'routeSelectionExpression' },
          description:
            'The route selection expression for the API. For HTTP APIs, the routeSelectionExpression must be ${request.method} ${request.path}. If not provided, this will be the default for HTTP APIs. This property is required for WebSocket APIs.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description: 'A collection of tags associated with the API.',
        }),
    ).exactOptional(),
    Version: StringWithLengthBetween1And64Schema.and(
      z
        .any()
        .openapi({ xml: { name: 'version' }, description: 'A version identifier for the API.' }),
    ).exactOptional(),
    Warnings: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'warnings' },
          description:
            'The warning messages reported when failonwarnings is turned on during API import.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ImportApiResponse')

const ReimportApiResponseSchema = z
  .object({
    ApiEndpoint: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'apiEndpoint' },
          description:
            'The URI of the API, of the form {api-id}.execute-api.{region}.amazonaws.com. The stage name is typically appended to this URI to form a complete path to a deployed API stage.',
        }),
    ).exactOptional(),
    ApiGatewayManaged: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'apiGatewayManaged' },
          description:
            "Specifies whether an API is managed by API Gateway. You can't update or delete a managed API by using API Gateway. A managed API can be deleted only through the tooling or service that created it.",
        }),
    ).exactOptional(),
    ApiId: IdSchema.and(
      z.any().openapi({ xml: { name: 'apiId' }, description: 'The API ID.' }),
    ).exactOptional(),
    ApiKeySelectionExpression: SelectionExpressionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'apiKeySelectionExpression' },
          description:
            'An API key selection expression. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">API Key Selection Expressions</a>.',
        }),
    ).exactOptional(),
    CorsConfiguration: CorsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'corsConfiguration' },
          description: 'A CORS configuration. Supported only for HTTP APIs.',
        }),
    ).exactOptional(),
    CreatedDate: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'createdDate' },
          description: 'The timestamp when the API was created.',
        }),
    ).exactOptional(),
    Description: StringWithLengthBetween0And1024Schema.and(
      z.any().openapi({ xml: { name: 'description' }, description: 'The description of the API.' }),
    ).exactOptional(),
    DisableSchemaValidation: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'disableSchemaValidation' },
          description:
            'Avoid validating models when creating a deployment. Supported only for WebSocket APIs.',
        }),
    ).exactOptional(),
    DisableExecuteApiEndpoint: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'disableExecuteApiEndpoint' },
          description:
            'Specifies whether clients can invoke your API by using the default execute-api endpoint. By default, clients can invoke your API with the default https://{api_id}.execute-api.{region}.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint.',
        }),
    ).exactOptional(),
    ImportInfo: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'importInfo' },
          description:
            'The validation information during API import. This may include particular properties of your OpenAPI definition which are ignored during import. Supported only for HTTP APIs.',
        }),
    ).exactOptional(),
    Name: StringWithLengthBetween1And128Schema.and(
      z.any().openapi({ xml: { name: 'name' }, description: 'The name of the API.' }),
    ).exactOptional(),
    ProtocolType: ProtocolTypeSchema.and(
      z.any().openapi({ xml: { name: 'protocolType' }, description: 'The API protocol.' }),
    ).exactOptional(),
    RouteSelectionExpression: SelectionExpressionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'routeSelectionExpression' },
          description:
            'The route selection expression for the API. For HTTP APIs, the routeSelectionExpression must be ${request.method} ${request.path}. If not provided, this will be the default for HTTP APIs. This property is required for WebSocket APIs.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description: 'A collection of tags associated with the API.',
        }),
    ).exactOptional(),
    Version: StringWithLengthBetween1And64Schema.and(
      z
        .any()
        .openapi({ xml: { name: 'version' }, description: 'A version identifier for the API.' }),
    ).exactOptional(),
    Warnings: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'warnings' },
          description:
            'The warning messages reported when failonwarnings is turned on during API import.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReimportApiResponse')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const UpdateApiResponseSchema = z
  .object({
    ApiEndpoint: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'apiEndpoint' },
          description:
            'The URI of the API, of the form {api-id}.execute-api.{region}.amazonaws.com. The stage name is typically appended to this URI to form a complete path to a deployed API stage.',
        }),
    ).exactOptional(),
    ApiGatewayManaged: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'apiGatewayManaged' },
          description:
            "Specifies whether an API is managed by API Gateway. You can't update or delete a managed API by using API Gateway. A managed API can be deleted only through the tooling or service that created it.",
        }),
    ).exactOptional(),
    ApiId: IdSchema.and(
      z.any().openapi({ xml: { name: 'apiId' }, description: 'The API ID.' }),
    ).exactOptional(),
    ApiKeySelectionExpression: SelectionExpressionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'apiKeySelectionExpression' },
          description:
            'An API key selection expression. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">API Key Selection Expressions</a>.',
        }),
    ).exactOptional(),
    CorsConfiguration: CorsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'corsConfiguration' },
          description: 'A CORS configuration. Supported only for HTTP APIs.',
        }),
    ).exactOptional(),
    CreatedDate: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'createdDate' },
          description: 'The timestamp when the API was created.',
        }),
    ).exactOptional(),
    Description: StringWithLengthBetween0And1024Schema.and(
      z.any().openapi({ xml: { name: 'description' }, description: 'The description of the API.' }),
    ).exactOptional(),
    DisableSchemaValidation: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'disableSchemaValidation' },
          description:
            'Avoid validating models when creating a deployment. Supported only for WebSocket APIs.',
        }),
    ).exactOptional(),
    DisableExecuteApiEndpoint: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'disableExecuteApiEndpoint' },
          description:
            'Specifies whether clients can invoke your API by using the default execute-api endpoint. By default, clients can invoke your API with the default https://{api_id}.execute-api.{region}.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint.',
        }),
    ).exactOptional(),
    ImportInfo: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'importInfo' },
          description:
            'The validation information during API import. This may include particular properties of your OpenAPI definition which are ignored during import. Supported only for HTTP APIs.',
        }),
    ).exactOptional(),
    Name: StringWithLengthBetween1And128Schema.and(
      z.any().openapi({ xml: { name: 'name' }, description: 'The name of the API.' }),
    ).exactOptional(),
    ProtocolType: ProtocolTypeSchema.and(
      z.any().openapi({ xml: { name: 'protocolType' }, description: 'The API protocol.' }),
    ).exactOptional(),
    RouteSelectionExpression: SelectionExpressionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'routeSelectionExpression' },
          description:
            'The route selection expression for the API. For HTTP APIs, the routeSelectionExpression must be ${request.method} ${request.path}. If not provided, this will be the default for HTTP APIs. This property is required for WebSocket APIs.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description: 'A collection of tags associated with the API.',
        }),
    ).exactOptional(),
    Version: StringWithLengthBetween1And64Schema.and(
      z
        .any()
        .openapi({ xml: { name: 'version' }, description: 'A version identifier for the API.' }),
    ).exactOptional(),
    Warnings: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'warnings' },
          description:
            'The warning messages reported when failonwarnings is turned on during API import.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateApiResponse')

const UpdateApiMappingResponseSchema = z
  .object({
    ApiId: IdSchema.and(
      z.any().openapi({ xml: { name: 'apiId' }, description: 'The API identifier.' }),
    ).exactOptional(),
    ApiMappingId: IdSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'apiMappingId' }, description: 'The API mapping identifier.' }),
    ).exactOptional(),
    ApiMappingKey: SelectionKeySchema.and(
      z.any().openapi({ xml: { name: 'apiMappingKey' }, description: 'The API mapping key.' }),
    ).exactOptional(),
    Stage: StringWithLengthBetween1And128Schema.and(
      z.any().openapi({ xml: { name: 'stage' }, description: 'The API stage.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateApiMappingResponse')

const UpdateAuthorizerResponseSchema = z
  .object({
    AuthorizerCredentialsArn: ArnSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'authorizerCredentialsArn' },
          description:
            "Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, don't specify this parameter. Supported only for REQUEST authorizers.",
        }),
    ).exactOptional(),
    AuthorizerId: IdSchema.and(
      z.any().openapi({ xml: { name: 'authorizerId' }, description: 'The authorizer identifier.' }),
    ).exactOptional(),
    AuthorizerPayloadFormatVersion: StringWithLengthBetween1And64Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'authorizerPayloadFormatVersion' },
          description:
            'Specifies the format of the payload sent to an HTTP API Lambda authorizer. Required for HTTP API Lambda authorizers. Supported values are 1.0 and 2.0. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a>.',
        }),
    ).exactOptional(),
    AuthorizerResultTtlInSeconds: IntegerWithLengthBetween0And3600Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'authorizerResultTtlInSeconds' },
          description:
            'The time to live (TTL) for cached authorizer results, in seconds. If it equals 0, authorization caching is disabled. If it is greater than 0, API Gateway caches authorizer responses. The maximum value is 3600, or 1 hour. Supported only for HTTP API Lambda authorizers.',
        }),
    ).exactOptional(),
    AuthorizerType: AuthorizerTypeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'authorizerType' },
          description:
            'The authorizer type. Specify REQUEST for a Lambda function using incoming request parameters. Specify JWT to use JSON Web Tokens (supported only for HTTP APIs).',
        }),
    ).exactOptional(),
    AuthorizerUri: UriWithLengthBetween1And2048Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'authorizerUri' },
          description:
            "The authorizer's Uniform Resource Identifier (URI). For REQUEST authorizers, this must be a well-formed Lambda function URI, for example, arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:<replaceable>{account_id}</replaceable>:function:<replaceable>{lambda_function_name}</replaceable>/invocations. In general, the URI has this form: arn:aws:apigateway:<replaceable>{region}</replaceable>:lambda:path/<replaceable>{service_api}</replaceable>\n               , where <replaceable></replaceable>{region} is the same as the region hosting the Lambda function, path indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial /. For Lambda functions, this is usually of the form /2015-03-31/functions/[FunctionARN]/invocations. Supported only for REQUEST authorizers.",
        }),
    ).exactOptional(),
    EnableSimpleResponses: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'enableSimpleResponses' },
          description:
            'Specifies whether a Lambda authorizer returns a response in a simple format. If enabled, the Lambda authorizer can return a boolean value instead of an IAM policy. Supported only for HTTP APIs. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a>',
        }),
    ).exactOptional(),
    IdentitySource: IdentitySourceListSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'identitySource' },
          description:
            '<p>The identity source for which authorization is requested.</p> <p>For a REQUEST authorizer, this is optional. The value is a set of one or more mapping expressions of the specified request parameters. The identity source can be headers, query string parameters, stage variables, and context parameters. For example, if an Auth header and a Name query string parameter are defined as identity sources, this value is route.request.header.Auth, route.request.querystring.Name for WebSocket APIs. For HTTP APIs, use selection expressions prefixed with $, for example, $request.header.Auth, $request.querystring.Name. These parameters are used to perform runtime validation for Lambda-based authorizers by verifying all of the identity-related request parameters are present in the request, not null, and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function. Otherwise, it returns a 401 Unauthorized response without calling the Lambda function. For HTTP APIs, identity sources are also used as the cache key when caching is enabled. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a>.</p> <p>For JWT, a single entry that specifies where to extract the JSON Web Token (JWT) from inbound requests. Currently only header-based and query parameter-based selections are supported, for example $request.header.Authorization.</p>',
        }),
    ).exactOptional(),
    IdentityValidationExpression: StringWithLengthBetween0And1024Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'identityValidationExpression' },
          description: 'The validation expression does not apply to the REQUEST authorizer.',
        }),
    ).exactOptional(),
    JwtConfiguration: JWTConfigurationSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'jwtConfiguration' },
          description:
            'Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.',
        }),
    ).exactOptional(),
    Name: StringWithLengthBetween1And128Schema.and(
      z.any().openapi({ xml: { name: 'name' }, description: 'The name of the authorizer.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateAuthorizerResponse')

const UpdateDeploymentResponseSchema = z
  .object({
    AutoDeployed: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'autoDeployed' },
          description: 'Specifies whether a deployment was automatically released.',
        }),
    ).exactOptional(),
    CreatedDate: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'createdDate' },
          description: 'The date and time when the Deployment resource was created.',
        }),
    ).exactOptional(),
    DeploymentId: IdSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'deploymentId' },
          description: 'The identifier for the deployment.',
        }),
    ).exactOptional(),
    DeploymentStatus: DeploymentStatusSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'deploymentStatus' },
          description: 'The status of the deployment: PENDING, FAILED, or SUCCEEDED.',
        }),
    ).exactOptional(),
    DeploymentStatusMessage: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'deploymentStatusMessage' },
          description: 'May contain additional feedback on the status of an API deployment.',
        }),
    ).exactOptional(),
    Description: StringWithLengthBetween0And1024Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'description' },
          description: 'The description for the deployment.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateDeploymentResponse')

const UpdateDomainNameResponseSchema = z
  .object({
    ApiMappingSelectionExpression: SelectionExpressionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'apiMappingSelectionExpression' },
          description: 'The API mapping selection expression.',
        }),
    ).exactOptional(),
    DomainName: StringWithLengthBetween1And512Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'domainName' },
          description: 'The name of the DomainName resource.',
        }),
    ).exactOptional(),
    DomainNameConfigurations: DomainNameConfigurationsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'domainNameConfigurations' },
          description: 'The domain name configurations.',
        }),
    ).exactOptional(),
    MutualTlsAuthentication: MutualTlsAuthenticationSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'mutualTlsAuthentication' },
          description: 'The mutual TLS authentication configuration for a custom domain name.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description: 'The collection of tags associated with a domain name.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateDomainNameResponse')

const UpdateIntegrationResultSchema = z
  .object({
    ApiGatewayManaged: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'apiGatewayManaged' },
          description:
            "Specifies whether an integration is managed by API Gateway. If you created an API using using quick create, the resulting integration is managed by API Gateway. You can update a managed integration, but you can't delete it.",
        }),
    ).exactOptional(),
    ConnectionId: StringWithLengthBetween1And1024Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'connectionId' },
          description:
            'The ID of the VPC link for a private integration. Supported only for HTTP APIs.',
        }),
    ).exactOptional(),
    ConnectionType: ConnectionTypeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'connectionType' },
          description:
            'The type of the network connection to the integration endpoint. Specify INTERNET for connections through the public routable internet or VPC_LINK for private connections between API Gateway and resources in a VPC. The default value is INTERNET.',
        }),
    ).exactOptional(),
    ContentHandlingStrategy: ContentHandlingStrategySchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'contentHandlingStrategy' },
          description:
            '<p>Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:</p> <p>CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p> <p>CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.</p>',
        }),
    ).exactOptional(),
    CredentialsArn: ArnSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'credentialsArn' },
          description:
            "Specifies the credentials required for the integration, if any. For AWS integrations, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify the string arn:aws:iam::*:user/*. To use resource-based permissions on supported AWS services, specify null.",
        }),
    ).exactOptional(),
    Description: StringWithLengthBetween0And1024Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'description' },
          description: 'Represents the description of an integration.',
        }),
    ).exactOptional(),
    IntegrationId: IdSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'integrationId' },
          description: 'Represents the identifier of an integration.',
        }),
    ).exactOptional(),
    IntegrationMethod: StringWithLengthBetween1And64Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'integrationMethod' },
          description: "Specifies the integration's HTTP method type.",
        }),
    ).exactOptional(),
    IntegrationResponseSelectionExpression: SelectionExpressionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'integrationResponseSelectionExpression' },
          description:
            'The integration response selection expression for the integration. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-integration-response-selection-expressions">Integration Response Selection Expressions</a>.',
        }),
    ).exactOptional(),
    IntegrationSubtype: StringWithLengthBetween1And128Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'integrationSubtype' },
          description:
            'Supported only for HTTP API AWS_PROXY integrations. Specifies the AWS service action to invoke. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services-reference.html">Integration subtype reference</a>.',
        }),
    ).exactOptional(),
    IntegrationType: IntegrationTypeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'integrationType' },
          description:
            '<p>The integration type of an integration. One of the following:</p> <p>AWS: for integrating the route or method request with an AWS service action, including the Lambda function-invoking action. With the Lambda function-invoking action, this is referred to as the Lambda custom integration. With any other AWS service action, this is known as AWS integration. Supported only for WebSocket APIs.</p> <p>AWS_PROXY: for integrating the route or method request with a Lambda function or other AWS service action. This integration is also referred to as a Lambda proxy integration.</p> <p>HTTP: for integrating the route or method request with an HTTP endpoint. This integration is also referred to as the HTTP custom integration. Supported only for WebSocket APIs.</p> <p>HTTP_PROXY: for integrating the route or method request with an HTTP endpoint, with the client request passed through as-is. This is also referred to as HTTP proxy integration.</p> <p>MOCK: for integrating the route or method request with API Gateway as a "loopback" endpoint without invoking any backend. Supported only for WebSocket APIs.</p>',
        }),
    ).exactOptional(),
    IntegrationUri: UriWithLengthBetween1And2048Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'integrationUri' },
          description:
            '<p>For a Lambda integration, specify the URI of a Lambda function.</p> <p>For an HTTP integration, specify a fully-qualified URL.</p> <p>For an HTTP API private integration, specify the ARN of an Application Load Balancer listener, Network Load Balancer listener, or AWS Cloud Map service. If you specify the ARN of an AWS Cloud Map service, API Gateway uses DiscoverInstances to identify resources. You can use query parameters to target specific resources. To learn more, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_DiscoverInstances.html">DiscoverInstances</a>. For private integrations, all resources must be owned by the same AWS account.</p>',
        }),
    ).exactOptional(),
    PassthroughBehavior: PassthroughBehaviorSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'passthroughBehavior' },
          description:
            '<p>Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the requestTemplates property on the Integration resource. There are three valid values: WHEN_NO_MATCH, WHEN_NO_TEMPLATES, and NEVER. Supported only for WebSocket APIs.</p> <p>WHEN_NO_MATCH passes the request body for unmapped content types through to the integration backend without transformation.</p> <p>NEVER rejects unmapped content types with an HTTP 415 Unsupported Media Type response.</p> <p>WHEN_NO_TEMPLATES allows pass-through when the integration has no content types mapped to templates. However, if there is at least one content type defined, unmapped content types will be rejected with the same HTTP 415 Unsupported Media Type response.</p>',
        }),
    ).exactOptional(),
    PayloadFormatVersion: StringWithLengthBetween1And64Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'payloadFormatVersion' },
          description:
            'Specifies the format of the payload sent to an integration. Required for HTTP APIs.',
        }),
    ).exactOptional(),
    RequestParameters: IntegrationParametersSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'requestParameters' },
          description:
            '<p>For WebSocket APIs, a key-value map specifying request parameters that are passed from the method request to the backend. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of method.request.<replaceable>{location}</replaceable>.<replaceable>{name}</replaceable>\n          , where \n            <replaceable>{location}</replaceable>\n           is querystring, path, or header; and \n            <replaceable>{name}</replaceable>\n           must be a valid and unique method request parameter name.</p> <p>For HTTP API integrations with a specified integrationSubtype, request parameters are a key-value map specifying parameters that are passed to AWS_PROXY integrations. You can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services.html">Working with AWS service integrations for HTTP APIs</a>.</p> <p>For HTTP API itegrations, without a specified integrationSubtype request parameters are a key-value map specifying how to transform HTTP requests before sending them to backend integrations. The key should follow the pattern &lt;action&gt;:&lt;header|querystring|path&gt;.&lt;location&gt;. The action can be append, overwrite or remove. For values, you can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.</p>',
        }),
    ).exactOptional(),
    RequestTemplates: TemplateMapSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'requestTemplates' },
          description:
            'Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value. Supported only for WebSocket APIs.',
        }),
    ).exactOptional(),
    ResponseParameters: ResponseParametersSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'responseParameters' },
          description:
            'Supported only for HTTP APIs. You use response parameters to transform the HTTP response from a backend integration before returning the response to clients. Specify a key-value map from a selection key to response parameters. The selection key must be a valid HTTP status code within the range of 200-599. Response parameters are a key-value map. The key must match pattern &lt;action&gt;:&lt;header&gt;.&lt;location&gt; or overwrite.statuscode. The action can be append, overwrite or remove. The value can be a static value, or map to response data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.',
        }),
    ).exactOptional(),
    TemplateSelectionExpression: SelectionExpressionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'templateSelectionExpression' },
          description:
            'The template selection expression for the integration. Supported only for WebSocket APIs.',
        }),
    ).exactOptional(),
    TimeoutInMillis: IntegerWithLengthBetween50And30000Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'timeoutInMillis' },
          description:
            'Custom timeout between 50 and 29,000 milliseconds for WebSocket APIs and between 50 and 30,000 milliseconds for HTTP APIs. The default timeout is 29 seconds for WebSocket APIs and 30 seconds for HTTP APIs.',
        }),
    ).exactOptional(),
    TlsConfig: TlsConfigSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tlsConfig' },
          description:
            'The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateIntegrationResult')

const UpdateIntegrationResponseResponseSchema = z
  .object({
    ContentHandlingStrategy: ContentHandlingStrategySchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'contentHandlingStrategy' },
          description:
            '<p>Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:</p> <p>CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p> <p>CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.</p>',
        }),
    ).exactOptional(),
    IntegrationResponseId: IdSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'integrationResponseId' },
          description: 'The integration response ID.',
        }),
    ).exactOptional(),
    IntegrationResponseKey: SelectionKeySchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'integrationResponseKey' },
          description: 'The integration response key.',
        }),
    ).exactOptional(),
    ResponseParameters: IntegrationParametersSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'responseParameters' },
          description:
            'A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix.',
        }),
    ).exactOptional(),
    ResponseTemplates: TemplateMapSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'responseTemplates' },
          description:
            'The collection of response templates for the integration response as a string-to-string map of key-value pairs. Response templates are represented as a key/value map, with a content-type as the key and a template as the value.',
        }),
    ).exactOptional(),
    TemplateSelectionExpression: SelectionExpressionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'templateSelectionExpression' },
          description: 'The template selection expressions for the integration response.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateIntegrationResponseResponse')

const UpdateModelResponseSchema = z
  .object({
    ContentType: StringWithLengthBetween1And256Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'contentType' },
          description: 'The content-type for the model, for example, "application/json".',
        }),
    ).exactOptional(),
    Description: StringWithLengthBetween0And1024Schema.and(
      z
        .any()
        .openapi({ xml: { name: 'description' }, description: 'The description of the model.' }),
    ).exactOptional(),
    ModelId: IdSchema.and(
      z.any().openapi({ xml: { name: 'modelId' }, description: 'The model identifier.' }),
    ).exactOptional(),
    Name: StringWithLengthBetween1And128Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'name' },
          description: 'The name of the model. Must be alphanumeric.',
        }),
    ).exactOptional(),
    Schema: StringWithLengthBetween0And32KSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'schema' },
          description:
            'The schema for the model. For application/json models, this should be JSON schema draft 4 model.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateModelResponse')

const UpdateRouteResultSchema = z
  .object({
    ApiGatewayManaged: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'apiGatewayManaged' },
          description:
            "Specifies whether a route is managed by API Gateway. If you created an API using quick create, the $default route is managed by API Gateway. You can't modify the $default route key.",
        }),
    ).exactOptional(),
    ApiKeyRequired: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'apiKeyRequired' },
          description:
            'Specifies whether an API key is required for this route. Supported only for WebSocket APIs.',
        }),
    ).exactOptional(),
    AuthorizationScopes: AuthorizationScopesSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'authorizationScopes' },
          description:
            'A list of authorization scopes configured on a route. The scopes are used with a JWT authorizer to authorize the method invocation. The authorization works by matching the route scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any route scope matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the route scope is configured, the client must provide an access token instead of an identity token for authorization purposes.',
        }),
    ).exactOptional(),
    AuthorizationType: AuthorizationTypeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'authorizationType' },
          description:
            'The authorization type for the route. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer For HTTP APIs, valid values are NONE for open access, JWT for using JSON Web Tokens, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer.',
        }),
    ).exactOptional(),
    AuthorizerId: IdSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'authorizerId' },
          description:
            'The identifier of the Authorizer resource to be associated with this route. The authorizer identifier is generated by API Gateway when you created the authorizer.',
        }),
    ).exactOptional(),
    ModelSelectionExpression: SelectionExpressionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'modelSelectionExpression' },
          description:
            'The model selection expression for the route. Supported only for WebSocket APIs.',
        }),
    ).exactOptional(),
    OperationName: StringWithLengthBetween1And64Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'operationName' },
          description: 'The operation name for the route.',
        }),
    ).exactOptional(),
    RequestModels: RouteModelsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'requestModels' },
          description: 'The request models for the route. Supported only for WebSocket APIs.',
        }),
    ).exactOptional(),
    RequestParameters: RouteParametersSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'requestParameters' },
          description: 'The request parameters for the route. Supported only for WebSocket APIs.',
        }),
    ).exactOptional(),
    RouteId: IdSchema.and(
      z.any().openapi({ xml: { name: 'routeId' }, description: 'The route ID.' }),
    ).exactOptional(),
    RouteKey: SelectionKeySchema.and(
      z.any().openapi({ xml: { name: 'routeKey' }, description: 'The route key for the route.' }),
    ).exactOptional(),
    RouteResponseSelectionExpression: SelectionExpressionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'routeResponseSelectionExpression' },
          description:
            'The route response selection expression for the route. Supported only for WebSocket APIs.',
        }),
    ).exactOptional(),
    Target: StringWithLengthBetween1And128Schema.and(
      z.any().openapi({ xml: { name: 'target' }, description: 'The target for the route.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateRouteResult')

const UpdateRouteResponseResponseSchema = z
  .object({
    ModelSelectionExpression: SelectionExpressionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'modelSelectionExpression' },
          description:
            'Represents the model selection expression of a route response. Supported only for WebSocket APIs.',
        }),
    ).exactOptional(),
    ResponseModels: RouteModelsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'responseModels' },
          description: 'Represents the response models of a route response.',
        }),
    ).exactOptional(),
    ResponseParameters: RouteParametersSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'responseParameters' },
          description: 'Represents the response parameters of a route response.',
        }),
    ).exactOptional(),
    RouteResponseId: IdSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'routeResponseId' },
          description: 'Represents the identifier of a route response.',
        }),
    ).exactOptional(),
    RouteResponseKey: SelectionKeySchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'routeResponseKey' },
          description: 'Represents the route response key of a route response.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateRouteResponseResponse')

const UpdateStageResponseSchema = z
  .object({
    AccessLogSettings: AccessLogSettingsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'accessLogSettings' },
          description: 'Settings for logging access in this stage.',
        }),
    ).exactOptional(),
    ApiGatewayManaged: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'apiGatewayManaged' },
          description:
            "Specifies whether a stage is managed by API Gateway. If you created an API using quick create, the $default stage is managed by API Gateway. You can't modify the $default stage.",
        }),
    ).exactOptional(),
    AutoDeploy: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'autoDeploy' },
          description:
            'Specifies whether updates to an API automatically trigger a new deployment. The default value is false.',
        }),
    ).exactOptional(),
    ClientCertificateId: IdSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clientCertificateId' },
          description:
            'The identifier of a client certificate for a Stage. Supported only for WebSocket APIs.',
        }),
    ).exactOptional(),
    CreatedDate: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'createdDate' },
          description: 'The timestamp when the stage was created.',
        }),
    ).exactOptional(),
    DefaultRouteSettings: RouteSettingsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'defaultRouteSettings' },
          description: 'Default route settings for the stage.',
        }),
    ).exactOptional(),
    DeploymentId: IdSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'deploymentId' },
          description:
            "The identifier of the Deployment that the Stage is associated with. Can't be updated if autoDeploy is enabled.",
        }),
    ).exactOptional(),
    Description: StringWithLengthBetween0And1024Schema.and(
      z
        .any()
        .openapi({ xml: { name: 'description' }, description: 'The description of the stage.' }),
    ).exactOptional(),
    LastDeploymentStatusMessage: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'lastDeploymentStatusMessage' },
          description:
            'Describes the status of the last deployment of a stage. Supported only for stages with autoDeploy enabled.',
        }),
    ).exactOptional(),
    LastUpdatedDate: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'lastUpdatedDate' },
          description: 'The timestamp when the stage was last updated.',
        }),
    ).exactOptional(),
    RouteSettings: RouteSettingsMapSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'routeSettings' },
          description: 'Route settings for the stage, by routeKey.',
        }),
    ).exactOptional(),
    StageName: StringWithLengthBetween1And128Schema.and(
      z.any().openapi({ xml: { name: 'stageName' }, description: 'The name of the stage.' }),
    ).exactOptional(),
    StageVariables: StageVariablesMapSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'stageVariables' },
          description:
            'A map that defines the stage variables for a stage resource. Variable names can have alphanumeric and underscore characters, and the values must match [A-Za-z0-9-._~:/?#&amp;=,]+.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description:
            'The collection of tags. Each tag element is associated with a given resource.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateStageResponse')

const UpdateVpcLinkResponseSchema = z
  .object({
    CreatedDate: TimestampIso8601Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'createdDate' },
          description: 'The timestamp when the VPC link was created.',
        }),
    ).exactOptional(),
    Name: StringWithLengthBetween1And128Schema.and(
      z.any().openapi({ xml: { name: 'name' }, description: 'The name of the VPC link.' }),
    ).exactOptional(),
    SecurityGroupIds: SecurityGroupIdListSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'securityGroupIds' },
          description: 'A list of security group IDs for the VPC link.',
        }),
    ).exactOptional(),
    SubnetIds: SubnetIdListSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'subnetIds' },
          description: 'A list of subnet IDs to include in the VPC link.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z.any().openapi({ xml: { name: 'tags' }, description: 'Tags for the VPC link.' }),
    ).exactOptional(),
    VpcLinkId: IdSchema.and(
      z.any().openapi({ xml: { name: 'vpcLinkId' }, description: 'The ID of the VPC link.' }),
    ).exactOptional(),
    VpcLinkStatus: VpcLinkStatusSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'vpcLinkStatus' }, description: 'The status of the VPC link.' }),
    ).exactOptional(),
    VpcLinkStatusMessage: StringWithLengthBetween0And1024Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'vpcLinkStatusMessage' },
          description: 'A message summarizing the cause of the status of the VPC link.',
        }),
    ).exactOptional(),
    VpcLinkVersion: VpcLinkVersionSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'vpcLinkVersion' }, description: 'The version of the VPC link.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateVpcLinkResponse')

const CreateApiMappingRequestSchema = z
  .object({
    ApiId: IdSchema.and(
      z.any().openapi({ xml: { name: 'apiId' }, description: 'The API identifier.' }),
    ),
    ApiMappingKey: SelectionKeySchema.and(
      z.any().openapi({ xml: { name: 'apiMappingKey' }, description: 'The API mapping key.' }),
    ).exactOptional(),
    Stage: StringWithLengthBetween1And128Schema.and(
      z.any().openapi({ xml: { name: 'stage' }, description: 'The API stage.' }),
    ),
  })
  .openapi({
    required: ['Stage', 'ApiId'],
    title: 'CreateApiMappingRequest',
    description: 'Creates a new ApiMapping resource to represent an API mapping.',
  })
  .openapi('CreateApiMappingRequest')

const CreateApiRequestSchema = z
  .object({
    ApiKeySelectionExpression: SelectionExpressionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'apiKeySelectionExpression' },
          description:
            'An API key selection expression. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">API Key Selection Expressions</a>.',
        }),
    ).exactOptional(),
    CorsConfiguration: CorsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'corsConfiguration' },
          description:
            'A CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information.',
        }),
    ).exactOptional(),
    CredentialsArn: ArnSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'credentialsArn' },
          description:
            "This property is part of quick create. It specifies the credentials required for the integration, if any. For a Lambda integration, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify arn:aws:iam::*:user/*. To use resource-based permissions on supported AWS services, specify null. Currently, this property is not used for HTTP integrations. Supported only for HTTP APIs.",
        }),
    ).exactOptional(),
    Description: StringWithLengthBetween0And1024Schema.and(
      z.any().openapi({ xml: { name: 'description' }, description: 'The description of the API.' }),
    ).exactOptional(),
    DisableSchemaValidation: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'disableSchemaValidation' },
          description:
            'Avoid validating models when creating a deployment. Supported only for WebSocket APIs.',
        }),
    ).exactOptional(),
    DisableExecuteApiEndpoint: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'disableExecuteApiEndpoint' },
          description:
            'Specifies whether clients can invoke your API by using the default execute-api endpoint. By default, clients can invoke your API with the default https://{api_id}.execute-api.{region}.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint.',
        }),
    ).exactOptional(),
    Name: StringWithLengthBetween1And128Schema.and(
      z.any().openapi({ xml: { name: 'name' }, description: 'The name of the API.' }),
    ),
    ProtocolType: ProtocolTypeSchema.and(
      z.any().openapi({ xml: { name: 'protocolType' }, description: 'The API protocol.' }),
    ),
    RouteKey: SelectionKeySchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'routeKey' },
          description:
            "This property is part of quick create. If you don't specify a routeKey, a default route of $default is created. The $default route acts as a catch-all for any request made to your API, for a particular stage. The $default route key can't be modified. You can add routes after creating the API, and you can update the route keys of additional routes. Supported only for HTTP APIs.",
        }),
    ).exactOptional(),
    RouteSelectionExpression: SelectionExpressionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'routeSelectionExpression' },
          description:
            'The route selection expression for the API. For HTTP APIs, the routeSelectionExpression must be ${request.method} ${request.path}. If not provided, this will be the default for HTTP APIs. This property is required for WebSocket APIs.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description:
            'The collection of tags. Each tag element is associated with a given resource.',
        }),
    ).exactOptional(),
    Target: UriWithLengthBetween1And2048Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'target' },
          description:
            'This property is part of quick create. Quick create produces an API with an integration, a default catch-all route, and a default stage which is configured to automatically deploy changes. For HTTP integrations, specify a fully qualified URL. For Lambda integrations, specify a function ARN. The type of the integration will be HTTP_PROXY or AWS_PROXY, respectively. Supported only for HTTP APIs.',
        }),
    ).exactOptional(),
    Version: StringWithLengthBetween1And64Schema.and(
      z
        .any()
        .openapi({ xml: { name: 'version' }, description: 'A version identifier for the API.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ProtocolType', 'Name'],
    title: 'CreateApiRequest',
    description: 'Creates a new Api resource to represent an API.',
  })
  .openapi('CreateApiRequest')

const CreateAuthorizerRequestSchema = z
  .object({
    AuthorizerCredentialsArn: ArnSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'authorizerCredentialsArn' },
          description:
            "Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, don't specify this parameter. Supported only for REQUEST authorizers.",
        }),
    ).exactOptional(),
    AuthorizerPayloadFormatVersion: StringWithLengthBetween1And64Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'authorizerPayloadFormatVersion' },
          description:
            'Specifies the format of the payload sent to an HTTP API Lambda authorizer. Required for HTTP API Lambda authorizers. Supported values are 1.0 and 2.0. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a>.',
        }),
    ).exactOptional(),
    AuthorizerResultTtlInSeconds: IntegerWithLengthBetween0And3600Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'authorizerResultTtlInSeconds' },
          description:
            'The time to live (TTL) for cached authorizer results, in seconds. If it equals 0, authorization caching is disabled. If it is greater than 0, API Gateway caches authorizer responses. The maximum value is 3600, or 1 hour. Supported only for HTTP API Lambda authorizers.',
        }),
    ).exactOptional(),
    AuthorizerType: AuthorizerTypeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'authorizerType' },
          description:
            'The authorizer type. Specify REQUEST for a Lambda function using incoming request parameters. Specify JWT to use JSON Web Tokens (supported only for HTTP APIs).',
        }),
    ),
    AuthorizerUri: UriWithLengthBetween1And2048Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'authorizerUri' },
          description:
            "The authorizer's Uniform Resource Identifier (URI). For REQUEST authorizers, this must be a well-formed Lambda function URI, for example, arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:<replaceable>{account_id}</replaceable>:function:<replaceable>{lambda_function_name}</replaceable>/invocations. In general, the URI has this form: arn:aws:apigateway:<replaceable>{region}</replaceable>:lambda:path/<replaceable>{service_api}</replaceable>\n               , where <replaceable></replaceable>{region} is the same as the region hosting the Lambda function, path indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial /. For Lambda functions, this is usually of the form /2015-03-31/functions/[FunctionARN]/invocations. Supported only for REQUEST authorizers.",
        }),
    ).exactOptional(),
    EnableSimpleResponses: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'enableSimpleResponses' },
          description:
            'Specifies whether a Lambda authorizer returns a response in a simple format. By default, a Lambda authorizer must return an IAM policy. If enabled, the Lambda authorizer can return a boolean value instead of an IAM policy. Supported only for HTTP APIs. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a>',
        }),
    ).exactOptional(),
    IdentitySource: IdentitySourceListSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'identitySource' },
          description:
            '<p>The identity source for which authorization is requested.</p> <p>For a REQUEST authorizer, this is optional. The value is a set of one or more mapping expressions of the specified request parameters. The identity source can be headers, query string parameters, stage variables, and context parameters. For example, if an Auth header and a Name query string parameter are defined as identity sources, this value is route.request.header.Auth, route.request.querystring.Name for WebSocket APIs. For HTTP APIs, use selection expressions prefixed with $, for example, $request.header.Auth, $request.querystring.Name. These parameters are used to perform runtime validation for Lambda-based authorizers by verifying all of the identity-related request parameters are present in the request, not null, and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function. Otherwise, it returns a 401 Unauthorized response without calling the Lambda function. For HTTP APIs, identity sources are also used as the cache key when caching is enabled. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a>.</p> <p>For JWT, a single entry that specifies where to extract the JSON Web Token (JWT) from inbound requests. Currently only header-based and query parameter-based selections are supported, for example $request.header.Authorization.</p>',
        }),
    ),
    IdentityValidationExpression: StringWithLengthBetween0And1024Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'identityValidationExpression' },
          description: 'This parameter is not used.',
        }),
    ).exactOptional(),
    JwtConfiguration: JWTConfigurationSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'jwtConfiguration' },
          description:
            'Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.',
        }),
    ).exactOptional(),
    Name: StringWithLengthBetween1And128Schema.and(
      z.any().openapi({ xml: { name: 'name' }, description: 'The name of the authorizer.' }),
    ),
  })
  .openapi({
    required: ['AuthorizerType', 'IdentitySource', 'Name'],
    title: 'CreateAuthorizerRequest',
    description: 'Creates a new Authorizer resource to represent an authorizer.',
  })
  .openapi('CreateAuthorizerRequest')

const CreateDeploymentRequestSchema = z
  .object({
    Description: StringWithLengthBetween0And1024Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'description' },
          description: 'The description for the deployment resource.',
        }),
    ).exactOptional(),
    StageName: StringWithLengthBetween1And128Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'stageName' },
          description: 'The name of the Stage resource for the Deployment resource to create.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'CreateDeploymentRequest',
    description: 'Creates a new Deployment resource to represent a deployment.',
    required: [],
  })
  .openapi('CreateDeploymentRequest')

const MutualTlsAuthenticationInputSchema = z
  .object({
    TruststoreUri: UriWithLengthBetween1And2048Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'truststoreUri' },
          description:
            'An Amazon S3 URL that specifies the truststore for mutual TLS authentication, for example, s3://<replaceable>bucket-name</replaceable>/<replaceable>key-name</replaceable>. The truststore can contain certificates from public or private certificate authorities. To update the truststore, upload a new version to S3, and then update your custom domain name to use the new version. To update the truststore, you must have permissions to access the S3 object.',
        }),
    ).exactOptional(),
    TruststoreVersion: StringWithLengthBetween1And64Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'truststoreVersion' },
          description:
            'The version of the S3 object that contains your truststore. To specify a version, you must have versioning enabled for the S3 bucket.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MutualTlsAuthenticationInput')

const CreateDomainNameRequestSchema = z
  .object({
    DomainName: StringWithLengthBetween1And512Schema.and(
      z.any().openapi({ xml: { name: 'domainName' }, description: 'The domain name.' }),
    ),
    DomainNameConfigurations: DomainNameConfigurationsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'domainNameConfigurations' },
          description: 'The domain name configurations.',
        }),
    ).exactOptional(),
    MutualTlsAuthentication: MutualTlsAuthenticationInputSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'mutualTlsAuthentication' },
          description: 'The mutual TLS authentication configuration for a custom domain name.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description: 'The collection of tags associated with a domain name.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DomainName'],
    title: 'CreateDomainNameRequest',
    description: 'Creates a new DomainName resource to represent a domain name.',
  })
  .openapi('CreateDomainNameRequest')

const TlsConfigInputSchema = z
  .object({
    ServerNameToVerify: StringWithLengthBetween1And512Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'serverNameToVerify' },
          description:
            "If you specify a server name, API Gateway uses it to verify the hostname on the integration's certificate. The server name is also included in the TLS handshake to support Server Name Indication (SNI) or virtual hosting.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.',
    required: [],
  })
  .openapi('TlsConfigInput')

const CreateIntegrationRequestSchema = z
  .object({
    ConnectionId: StringWithLengthBetween1And1024Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'connectionId' },
          description:
            'The ID of the VPC link for a private integration. Supported only for HTTP APIs.',
        }),
    ).exactOptional(),
    ConnectionType: ConnectionTypeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'connectionType' },
          description:
            'The type of the network connection to the integration endpoint. Specify INTERNET for connections through the public routable internet or VPC_LINK for private connections between API Gateway and resources in a VPC. The default value is INTERNET.',
        }),
    ).exactOptional(),
    ContentHandlingStrategy: ContentHandlingStrategySchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'contentHandlingStrategy' },
          description:
            '<p>Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:</p> <p>CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p> <p>CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.</p>',
        }),
    ).exactOptional(),
    CredentialsArn: ArnSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'credentialsArn' },
          description:
            "Specifies the credentials required for the integration, if any. For AWS integrations, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify the string arn:aws:iam::*:user/*. To use resource-based permissions on supported AWS services, specify null.",
        }),
    ).exactOptional(),
    Description: StringWithLengthBetween0And1024Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'description' },
          description: 'The description of the integration.',
        }),
    ).exactOptional(),
    IntegrationMethod: StringWithLengthBetween1And64Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'integrationMethod' },
          description: "Specifies the integration's HTTP method type.",
        }),
    ).exactOptional(),
    IntegrationSubtype: StringWithLengthBetween1And128Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'integrationSubtype' },
          description:
            'Supported only for HTTP API AWS_PROXY integrations. Specifies the AWS service action to invoke. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services-reference.html">Integration subtype reference</a>.',
        }),
    ).exactOptional(),
    IntegrationType: IntegrationTypeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'integrationType' },
          description:
            '<p>The integration type of an integration. One of the following:</p> <p>AWS: for integrating the route or method request with an AWS service action, including the Lambda function-invoking action. With the Lambda function-invoking action, this is referred to as the Lambda custom integration. With any other AWS service action, this is known as AWS integration. Supported only for WebSocket APIs.</p> <p>AWS_PROXY: for integrating the route or method request with a Lambda function or other AWS service action. This integration is also referred to as a Lambda proxy integration.</p> <p>HTTP: for integrating the route or method request with an HTTP endpoint. This integration is also referred to as the HTTP custom integration. Supported only for WebSocket APIs.</p> <p>HTTP_PROXY: for integrating the route or method request with an HTTP endpoint, with the client request passed through as-is. This is also referred to as HTTP proxy integration. For HTTP API private integrations, use an HTTP_PROXY integration.</p> <p>MOCK: for integrating the route or method request with API Gateway as a "loopback" endpoint without invoking any backend. Supported only for WebSocket APIs.</p>',
        }),
    ),
    IntegrationUri: UriWithLengthBetween1And2048Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'integrationUri' },
          description:
            '<p>For a Lambda integration, specify the URI of a Lambda function.</p> <p>For an HTTP integration, specify a fully-qualified URL.</p> <p>For an HTTP API private integration, specify the ARN of an Application Load Balancer listener, Network Load Balancer listener, or AWS Cloud Map service. If you specify the ARN of an AWS Cloud Map service, API Gateway uses DiscoverInstances to identify resources. You can use query parameters to target specific resources. To learn more, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_DiscoverInstances.html">DiscoverInstances</a>. For private integrations, all resources must be owned by the same AWS account.</p>',
        }),
    ).exactOptional(),
    PassthroughBehavior: PassthroughBehaviorSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'passthroughBehavior' },
          description:
            '<p>Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the requestTemplates property on the Integration resource. There are three valid values: WHEN_NO_MATCH, WHEN_NO_TEMPLATES, and NEVER. Supported only for WebSocket APIs.</p> <p>WHEN_NO_MATCH passes the request body for unmapped content types through to the integration backend without transformation.</p> <p>NEVER rejects unmapped content types with an HTTP 415 Unsupported Media Type response.</p> <p>WHEN_NO_TEMPLATES allows pass-through when the integration has no content types mapped to templates. However, if there is at least one content type defined, unmapped content types will be rejected with the same HTTP 415 Unsupported Media Type response.</p>',
        }),
    ).exactOptional(),
    PayloadFormatVersion: StringWithLengthBetween1And64Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'payloadFormatVersion' },
          description:
            'Specifies the format of the payload sent to an integration. Required for HTTP APIs.',
        }),
    ).exactOptional(),
    RequestParameters: IntegrationParametersSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'requestParameters' },
          description:
            '<p>For WebSocket APIs, a key-value map specifying request parameters that are passed from the method request to the backend. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of method.request.<replaceable>{location}</replaceable>.<replaceable>{name}</replaceable>\n               , where \n                  <replaceable>{location}</replaceable>\n                is querystring, path, or header; and \n                  <replaceable>{name}</replaceable>\n                must be a valid and unique method request parameter name.</p> <p>For HTTP API integrations with a specified integrationSubtype, request parameters are a key-value map specifying parameters that are passed to AWS_PROXY integrations. You can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services.html">Working with AWS service integrations for HTTP APIs</a>.</p> <p>For HTTP API integrations without a specified integrationSubtype request parameters are a key-value map specifying how to transform HTTP requests before sending them to the backend. The key should follow the pattern &lt;action&gt;:&lt;header|querystring|path&gt;.&lt;location&gt; where action can be append, overwrite or remove. For values, you can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.</p>',
        }),
    ).exactOptional(),
    RequestTemplates: TemplateMapSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'requestTemplates' },
          description:
            'Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value. Supported only for WebSocket APIs.',
        }),
    ).exactOptional(),
    ResponseParameters: ResponseParametersSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'responseParameters' },
          description:
            'Supported only for HTTP APIs. You use response parameters to transform the HTTP response from a backend integration before returning the response to clients. Specify a key-value map from a selection key to response parameters. The selection key must be a valid HTTP status code within the range of 200-599. Response parameters are a key-value map. The key must match pattern &lt;action&gt;:&lt;header&gt;.&lt;location&gt; or overwrite.statuscode. The action can be append, overwrite or remove. The value can be a static value, or map to response data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.',
        }),
    ).exactOptional(),
    TemplateSelectionExpression: SelectionExpressionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'templateSelectionExpression' },
          description: 'The template selection expression for the integration.',
        }),
    ).exactOptional(),
    TimeoutInMillis: IntegerWithLengthBetween50And30000Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'timeoutInMillis' },
          description:
            'Custom timeout between 50 and 29,000 milliseconds for WebSocket APIs and between 50 and 30,000 milliseconds for HTTP APIs. The default timeout is 29 seconds for WebSocket APIs and 30 seconds for HTTP APIs.',
        }),
    ).exactOptional(),
    TlsConfig: TlsConfigInputSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tlsConfig' },
          description:
            'The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['IntegrationType'],
    title: 'CreateIntegrationRequest',
    description: 'Creates a new Integration resource to represent an integration.',
  })
  .openapi('CreateIntegrationRequest')

const CreateIntegrationResponseRequestSchema = z
  .object({
    ContentHandlingStrategy: ContentHandlingStrategySchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'contentHandlingStrategy' },
          description:
            '<p>Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:</p> <p>CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p> <p>CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.</p>',
        }),
    ).exactOptional(),
    IntegrationResponseKey: SelectionKeySchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'integrationResponseKey' },
          description: 'The integration response key.',
        }),
    ),
    ResponseParameters: IntegrationParametersSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'responseParameters' },
          description:
            'A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where {name} is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where {name} is a valid and unique response header name and {JSON-expression} is a valid JSON expression without the $ prefix.',
        }),
    ).exactOptional(),
    ResponseTemplates: TemplateMapSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'responseTemplates' },
          description:
            'The collection of response templates for the integration response as a string-to-string map of key-value pairs. Response templates are represented as a key/value map, with a content-type as the key and a template as the value.',
        }),
    ).exactOptional(),
    TemplateSelectionExpression: SelectionExpressionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'templateSelectionExpression' },
          description:
            'The template selection expression for the integration response. Supported only for WebSocket APIs.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['IntegrationResponseKey'],
    title: 'CreateIntegrationResponseRequest',
    description: 'Creates a new IntegrationResponse resource to represent an integration response.',
  })
  .openapi('CreateIntegrationResponseRequest')

const CreateModelRequestSchema = z
  .object({
    ContentType: StringWithLengthBetween1And256Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'contentType' },
          description: 'The content-type for the model, for example, "application/json".',
        }),
    ).exactOptional(),
    Description: StringWithLengthBetween0And1024Schema.and(
      z
        .any()
        .openapi({ xml: { name: 'description' }, description: 'The description of the model.' }),
    ).exactOptional(),
    Name: StringWithLengthBetween1And128Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'name' },
          description: 'The name of the model. Must be alphanumeric.',
        }),
    ),
    Schema: StringWithLengthBetween0And32KSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'schema' },
          description:
            'The schema for the model. For application/json models, this should be JSON schema draft 4 model.',
        }),
    ),
  })
  .openapi({
    required: ['Schema', 'Name'],
    title: 'CreateModelRequest',
    description: 'Creates a new Model.',
  })
  .openapi('CreateModelRequest')

const CreateRouteRequestSchema = z
  .object({
    ApiKeyRequired: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'apiKeyRequired' },
          description:
            'Specifies whether an API key is required for the route. Supported only for WebSocket APIs.',
        }),
    ).exactOptional(),
    AuthorizationScopes: AuthorizationScopesSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'authorizationScopes' },
          description: 'The authorization scopes supported by this route.',
        }),
    ).exactOptional(),
    AuthorizationType: AuthorizationTypeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'authorizationType' },
          description:
            'The authorization type for the route. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer For HTTP APIs, valid values are NONE for open access, JWT for using JSON Web Tokens, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer.',
        }),
    ).exactOptional(),
    AuthorizerId: IdSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'authorizerId' },
          description:
            'The identifier of the Authorizer resource to be associated with this route. The authorizer identifier is generated by API Gateway when you created the authorizer.',
        }),
    ).exactOptional(),
    ModelSelectionExpression: SelectionExpressionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'modelSelectionExpression' },
          description:
            'The model selection expression for the route. Supported only for WebSocket APIs.',
        }),
    ).exactOptional(),
    OperationName: StringWithLengthBetween1And64Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'operationName' },
          description: 'The operation name for the route.',
        }),
    ).exactOptional(),
    RequestModels: RouteModelsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'requestModels' },
          description: 'The request models for the route. Supported only for WebSocket APIs.',
        }),
    ).exactOptional(),
    RequestParameters: RouteParametersSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'requestParameters' },
          description: 'The request parameters for the route. Supported only for WebSocket APIs.',
        }),
    ).exactOptional(),
    RouteKey: SelectionKeySchema.and(
      z.any().openapi({ xml: { name: 'routeKey' }, description: 'The route key for the route.' }),
    ),
    RouteResponseSelectionExpression: SelectionExpressionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'routeResponseSelectionExpression' },
          description:
            'The route response selection expression for the route. Supported only for WebSocket APIs.',
        }),
    ).exactOptional(),
    Target: StringWithLengthBetween1And128Schema.and(
      z.any().openapi({ xml: { name: 'target' }, description: 'The target for the route.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['RouteKey'],
    title: 'CreateRouteRequest',
    description: 'Creates a new Route resource to represent a route.',
  })
  .openapi('CreateRouteRequest')

const CreateRouteResponseRequestSchema = z
  .object({
    ModelSelectionExpression: SelectionExpressionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'modelSelectionExpression' },
          description:
            'The model selection expression for the route response. Supported only for WebSocket APIs.',
        }),
    ).exactOptional(),
    ResponseModels: RouteModelsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'responseModels' },
          description: 'The response models for the route response.',
        }),
    ).exactOptional(),
    ResponseParameters: RouteParametersSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'responseParameters' },
          description: 'The route response parameters.',
        }),
    ).exactOptional(),
    RouteResponseKey: SelectionKeySchema.and(
      z
        .any()
        .openapi({ xml: { name: 'routeResponseKey' }, description: 'The route response key.' }),
    ),
  })
  .openapi({
    required: ['RouteResponseKey'],
    title: 'CreateRouteResponseRequest',
    description: 'Creates a new RouteResponse resource to represent a route response.',
  })
  .openapi('CreateRouteResponseRequest')

const CreateStageRequestSchema = z
  .object({
    AccessLogSettings: AccessLogSettingsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'accessLogSettings' },
          description: 'Settings for logging access in this stage.',
        }),
    ).exactOptional(),
    AutoDeploy: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'autoDeploy' },
          description:
            'Specifies whether updates to an API automatically trigger a new deployment. The default value is false.',
        }),
    ).exactOptional(),
    ClientCertificateId: IdSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clientCertificateId' },
          description:
            'The identifier of a client certificate for a Stage. Supported only for WebSocket APIs.',
        }),
    ).exactOptional(),
    DefaultRouteSettings: RouteSettingsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'defaultRouteSettings' },
          description: 'The default route settings for the stage.',
        }),
    ).exactOptional(),
    DeploymentId: IdSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'deploymentId' },
          description: 'The deployment identifier of the API stage.',
        }),
    ).exactOptional(),
    Description: StringWithLengthBetween0And1024Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'description' },
          description: 'The description for the API stage.',
        }),
    ).exactOptional(),
    RouteSettings: RouteSettingsMapSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'routeSettings' },
          description: 'Route settings for the stage, by routeKey.',
        }),
    ).exactOptional(),
    StageName: StringWithLengthBetween1And128Schema.and(
      z.any().openapi({ xml: { name: 'stageName' }, description: 'The name of the stage.' }),
    ),
    StageVariables: StageVariablesMapSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'stageVariables' },
          description:
            'A map that defines the stage variables for a Stage. Variable names can have alphanumeric and underscore characters, and the values must match [A-Za-z0-9-._~:/?#&amp;=,]+.',
        }),
    ).exactOptional(),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description:
            'The collection of tags. Each tag element is associated with a given resource.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['StageName'],
    title: 'CreateStageRequest',
    description: 'Creates a new Stage resource to represent a stage.',
  })
  .openapi('CreateStageRequest')

const CreateVpcLinkRequestSchema = z
  .object({
    Name: StringWithLengthBetween1And128Schema.and(
      z.any().openapi({ xml: { name: 'name' }, description: 'The name of the VPC link.' }),
    ),
    SecurityGroupIds: SecurityGroupIdListSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'securityGroupIds' },
          description: 'A list of security group IDs for the VPC link.',
        }),
    ).exactOptional(),
    SubnetIds: SubnetIdListSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'subnetIds' },
          description: 'A list of subnet IDs to include in the VPC link.',
        }),
    ),
    Tags: TagsSchema.and(
      z.any().openapi({ xml: { name: 'tags' }, description: 'A list of tags.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['SubnetIds', 'Name'],
    title: 'CreateVpcLinkRequest',
    description: 'Creates a VPC link',
  })
  .openapi('CreateVpcLinkRequest')

const DeleteAccessLogSettingsRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteAccessLogSettingsRequest' })
  .openapi('DeleteAccessLogSettingsRequest')

const DeleteApiMappingRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteApiMappingRequest' })
  .openapi('DeleteApiMappingRequest')

const DeleteApiRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteApiRequest' })
  .openapi('DeleteApiRequest')

const DeleteAuthorizerRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteAuthorizerRequest' })
  .openapi('DeleteAuthorizerRequest')

const DeleteCorsConfigurationRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteCorsConfigurationRequest' })
  .openapi('DeleteCorsConfigurationRequest')

const DeleteDeploymentRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteDeploymentRequest' })
  .openapi('DeleteDeploymentRequest')

const DeleteDomainNameRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteDomainNameRequest' })
  .openapi('DeleteDomainNameRequest')

const DeleteIntegrationRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteIntegrationRequest' })
  .openapi('DeleteIntegrationRequest')

const DeleteIntegrationResponseRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteIntegrationResponseRequest' })
  .openapi('DeleteIntegrationResponseRequest')

const DeleteModelRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteModelRequest' })
  .openapi('DeleteModelRequest')

const DeleteRouteRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteRouteRequest' })
  .openapi('DeleteRouteRequest')

const DeleteRouteRequestParameterRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteRouteRequestParameterRequest' })
  .openapi('DeleteRouteRequestParameterRequest')

const DeleteRouteResponseRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteRouteResponseRequest' })
  .openapi('DeleteRouteResponseRequest')

const DeleteRouteSettingsRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteRouteSettingsRequest' })
  .openapi('DeleteRouteSettingsRequest')

const DeleteStageRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteStageRequest' })
  .openapi('DeleteStageRequest')

const DeleteVpcLinkRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteVpcLinkRequest' })
  .openapi('DeleteVpcLinkRequest')

const ExportApiRequestSchema = z
  .object({})
  .openapi({ title: 'ExportApiRequest' })
  .openapi('ExportApiRequest')

const ResetAuthorizersCacheRequestSchema = z
  .object({})
  .openapi({ title: 'ResetAuthorizersCacheRequest' })
  .openapi('ResetAuthorizersCacheRequest')

const GetApiMappingRequestSchema = z
  .object({})
  .openapi({ title: 'GetApiMappingRequest' })
  .openapi('GetApiMappingRequest')

const GetApiMappingsRequestSchema = z
  .object({})
  .openapi({ title: 'GetApiMappingsRequest' })
  .openapi('GetApiMappingsRequest')

const GetApiRequestSchema = z
  .object({})
  .openapi({ title: 'GetApiRequest' })
  .openapi('GetApiRequest')

const GetApisRequestSchema = z
  .object({})
  .openapi({ title: 'GetApisRequest' })
  .openapi('GetApisRequest')

const GetAuthorizerRequestSchema = z
  .object({})
  .openapi({ title: 'GetAuthorizerRequest' })
  .openapi('GetAuthorizerRequest')

const GetAuthorizersRequestSchema = z
  .object({})
  .openapi({ title: 'GetAuthorizersRequest' })
  .openapi('GetAuthorizersRequest')

const GetDeploymentRequestSchema = z
  .object({})
  .openapi({ title: 'GetDeploymentRequest' })
  .openapi('GetDeploymentRequest')

const GetDeploymentsRequestSchema = z
  .object({})
  .openapi({ title: 'GetDeploymentsRequest' })
  .openapi('GetDeploymentsRequest')

const GetDomainNameRequestSchema = z
  .object({})
  .openapi({ title: 'GetDomainNameRequest' })
  .openapi('GetDomainNameRequest')

const GetDomainNamesRequestSchema = z
  .object({})
  .openapi({ title: 'GetDomainNamesRequest' })
  .openapi('GetDomainNamesRequest')

const GetIntegrationRequestSchema = z
  .object({})
  .openapi({ title: 'GetIntegrationRequest' })
  .openapi('GetIntegrationRequest')

const GetIntegrationResponseRequestSchema = z
  .object({})
  .openapi({ title: 'GetIntegrationResponseRequest' })
  .openapi('GetIntegrationResponseRequest')

const GetIntegrationResponsesRequestSchema = z
  .object({})
  .openapi({ title: 'GetIntegrationResponsesRequest' })
  .openapi('GetIntegrationResponsesRequest')

const GetIntegrationsRequestSchema = z
  .object({})
  .openapi({ title: 'GetIntegrationsRequest' })
  .openapi('GetIntegrationsRequest')

const GetModelRequestSchema = z
  .object({})
  .openapi({ title: 'GetModelRequest' })
  .openapi('GetModelRequest')

const GetModelTemplateRequestSchema = z
  .object({})
  .openapi({ title: 'GetModelTemplateRequest' })
  .openapi('GetModelTemplateRequest')

const GetModelsRequestSchema = z
  .object({})
  .openapi({ title: 'GetModelsRequest' })
  .openapi('GetModelsRequest')

const GetRouteRequestSchema = z
  .object({})
  .openapi({ title: 'GetRouteRequest' })
  .openapi('GetRouteRequest')

const GetRouteResponseRequestSchema = z
  .object({})
  .openapi({ title: 'GetRouteResponseRequest' })
  .openapi('GetRouteResponseRequest')

const GetRouteResponsesRequestSchema = z
  .object({})
  .openapi({ title: 'GetRouteResponsesRequest' })
  .openapi('GetRouteResponsesRequest')

const GetRoutesRequestSchema = z
  .object({})
  .openapi({ title: 'GetRoutesRequest' })
  .openapi('GetRoutesRequest')

const GetStageRequestSchema = z
  .object({})
  .openapi({ title: 'GetStageRequest' })
  .openapi('GetStageRequest')

const GetStagesRequestSchema = z
  .object({})
  .openapi({ title: 'GetStagesRequest' })
  .openapi('GetStagesRequest')

const GetTagsRequestSchema = z
  .object({})
  .openapi({ title: 'GetTagsRequest' })
  .openapi('GetTagsRequest')

const GetVpcLinkRequestSchema = z
  .object({})
  .openapi({ title: 'GetVpcLinkRequest' })
  .openapi('GetVpcLinkRequest')

const GetVpcLinksRequestSchema = z
  .object({})
  .openapi({ title: 'GetVpcLinksRequest' })
  .openapi('GetVpcLinksRequest')

const ImportApiRequestSchema = z
  .object({
    Body: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'body' },
          description: 'The OpenAPI definition. Supported only for HTTP APIs.',
        }),
    ),
  })
  .openapi({ required: ['Body'], title: 'ImportApiRequest', description: '' })
  .openapi('ImportApiRequest')

const ReimportApiRequestSchema = z
  .object({
    Body: StringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'body' },
          description: 'The OpenAPI definition. Supported only for HTTP APIs.',
        }),
    ),
  })
  .openapi({ required: ['Body'], title: 'ReimportApiRequest', description: '' })
  .openapi('ReimportApiRequest')

const TagResourceRequestSchema = z
  .object({
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description:
            'The collection of tags. Each tag element is associated with a given resource.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'TagResourceRequest',
    description: 'Creates a new Tag resource to represent a tag.',
    required: [],
  })
  .openapi('TagResourceRequest')

const UntagResourceRequestSchema = z
  .object({})
  .openapi({ title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateApiMappingRequestSchema = z
  .object({
    ApiId: IdSchema.and(
      z.any().openapi({ xml: { name: 'apiId' }, description: 'The API identifier.' }),
    ),
    ApiMappingKey: SelectionKeySchema.and(
      z.any().openapi({ xml: { name: 'apiMappingKey' }, description: 'The API mapping key.' }),
    ).exactOptional(),
    Stage: StringWithLengthBetween1And128Schema.and(
      z.any().openapi({ xml: { name: 'stage' }, description: 'The API stage.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ApiId'],
    title: 'UpdateApiMappingRequest',
    description: 'Updates an ApiMapping.',
  })
  .openapi('UpdateApiMappingRequest')

const UpdateApiRequestSchema = z
  .object({
    ApiKeySelectionExpression: SelectionExpressionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'apiKeySelectionExpression' },
          description:
            'An API key selection expression. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">API Key Selection Expressions</a>.',
        }),
    ).exactOptional(),
    CorsConfiguration: CorsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'corsConfiguration' },
          description: 'A CORS configuration. Supported only for HTTP APIs.',
        }),
    ).exactOptional(),
    CredentialsArn: ArnSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'credentialsArn' },
          description:
            "This property is part of quick create. It specifies the credentials required for the integration, if any. For a Lambda integration, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify arn:aws:iam::*:user/*. To use resource-based permissions on supported AWS services, don't specify this parameter. Currently, this property is not used for HTTP integrations. If provided, this value replaces the credentials associated with the quick create integration. Supported only for HTTP APIs.",
        }),
    ).exactOptional(),
    Description: StringWithLengthBetween0And1024Schema.and(
      z.any().openapi({ xml: { name: 'description' }, description: 'The description of the API.' }),
    ).exactOptional(),
    DisableSchemaValidation: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'disableSchemaValidation' },
          description:
            'Avoid validating models when creating a deployment. Supported only for WebSocket APIs.',
        }),
    ).exactOptional(),
    DisableExecuteApiEndpoint: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'disableExecuteApiEndpoint' },
          description:
            'Specifies whether clients can invoke your API by using the default execute-api endpoint. By default, clients can invoke your API with the default https://{api_id}.execute-api.{region}.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint.',
        }),
    ).exactOptional(),
    Name: StringWithLengthBetween1And128Schema.and(
      z.any().openapi({ xml: { name: 'name' }, description: 'The name of the API.' }),
    ).exactOptional(),
    RouteKey: SelectionKeySchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'routeKey' },
          description:
            'This property is part of quick create. If not specified, the route created using quick create is kept. Otherwise, this value replaces the route key of the quick create route. Additional routes may still be added after the API is updated. Supported only for HTTP APIs.',
        }),
    ).exactOptional(),
    RouteSelectionExpression: SelectionExpressionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'routeSelectionExpression' },
          description:
            'The route selection expression for the API. For HTTP APIs, the routeSelectionExpression must be ${request.method} ${request.path}. If not provided, this will be the default for HTTP APIs. This property is required for WebSocket APIs.',
        }),
    ).exactOptional(),
    Target: UriWithLengthBetween1And2048Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'target' },
          description:
            "This property is part of quick create. For HTTP integrations, specify a fully qualified URL. For Lambda integrations, specify a function ARN. The type of the integration will be HTTP_PROXY or AWS_PROXY, respectively. The value provided updates the integration URI and integration type. You can update a quick-created target, but you can't remove it from an API. Supported only for HTTP APIs.",
        }),
    ).exactOptional(),
    Version: StringWithLengthBetween1And64Schema.and(
      z
        .any()
        .openapi({ xml: { name: 'version' }, description: 'A version identifier for the API.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateApiRequest', description: 'Updates an Api.', required: [] })
  .openapi('UpdateApiRequest')

const UpdateAuthorizerRequestSchema = z
  .object({
    AuthorizerCredentialsArn: ArnSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'authorizerCredentialsArn' },
          description:
            "Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, don't specify this parameter.",
        }),
    ).exactOptional(),
    AuthorizerPayloadFormatVersion: StringWithLengthBetween1And64Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'authorizerPayloadFormatVersion' },
          description:
            'Specifies the format of the payload sent to an HTTP API Lambda authorizer. Required for HTTP API Lambda authorizers. Supported values are 1.0 and 2.0. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a>.',
        }),
    ).exactOptional(),
    AuthorizerResultTtlInSeconds: IntegerWithLengthBetween0And3600Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'authorizerResultTtlInSeconds' },
          description:
            'The time to live (TTL) for cached authorizer results, in seconds. If it equals 0, authorization caching is disabled. If it is greater than 0, API Gateway caches authorizer responses. The maximum value is 3600, or 1 hour. Supported only for HTTP API Lambda authorizers.',
        }),
    ).exactOptional(),
    AuthorizerType: AuthorizerTypeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'authorizerType' },
          description:
            'The authorizer type. Specify REQUEST for a Lambda function using incoming request parameters. Specify JWT to use JSON Web Tokens (supported only for HTTP APIs).',
        }),
    ).exactOptional(),
    AuthorizerUri: UriWithLengthBetween1And2048Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'authorizerUri' },
          description:
            "The authorizer's Uniform Resource Identifier (URI). For REQUEST authorizers, this must be a well-formed Lambda function URI, for example, arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:<replaceable>{account_id}</replaceable>:function:<replaceable>{lambda_function_name}</replaceable>/invocations. In general, the URI has this form: arn:aws:apigateway:<replaceable>{region}</replaceable>:lambda:path/<replaceable>{service_api}</replaceable>\n               , where <replaceable></replaceable>{region} is the same as the region hosting the Lambda function, path indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial /. For Lambda functions, this is usually of the form /2015-03-31/functions/[FunctionARN]/invocations. Supported only for REQUEST authorizers.",
        }),
    ).exactOptional(),
    EnableSimpleResponses: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'enableSimpleResponses' },
          description:
            'Specifies whether a Lambda authorizer returns a response in a simple format. By default, a Lambda authorizer must return an IAM policy. If enabled, the Lambda authorizer can return a boolean value instead of an IAM policy. Supported only for HTTP APIs. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a>',
        }),
    ).exactOptional(),
    IdentitySource: IdentitySourceListSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'identitySource' },
          description:
            '<p>The identity source for which authorization is requested.</p> <p>For a REQUEST authorizer, this is optional. The value is a set of one or more mapping expressions of the specified request parameters. The identity source can be headers, query string parameters, stage variables, and context parameters. For example, if an Auth header and a Name query string parameter are defined as identity sources, this value is route.request.header.Auth, route.request.querystring.Name for WebSocket APIs. For HTTP APIs, use selection expressions prefixed with $, for example, $request.header.Auth, $request.querystring.Name. These parameters are used to perform runtime validation for Lambda-based authorizers by verifying all of the identity-related request parameters are present in the request, not null, and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function. Otherwise, it returns a 401 Unauthorized response without calling the Lambda function. For HTTP APIs, identity sources are also used as the cache key when caching is enabled. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a>.</p> <p>For JWT, a single entry that specifies where to extract the JSON Web Token (JWT) from inbound requests. Currently only header-based and query parameter-based selections are supported, for example $request.header.Authorization.</p>',
        }),
    ).exactOptional(),
    IdentityValidationExpression: StringWithLengthBetween0And1024Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'identityValidationExpression' },
          description: 'This parameter is not used.',
        }),
    ).exactOptional(),
    JwtConfiguration: JWTConfigurationSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'jwtConfiguration' },
          description:
            'Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.',
        }),
    ).exactOptional(),
    Name: StringWithLengthBetween1And128Schema.and(
      z.any().openapi({ xml: { name: 'name' }, description: 'The name of the authorizer.' }),
    ).exactOptional(),
  })
  .openapi({
    title: 'UpdateAuthorizerRequest',
    description: 'Updates an Authorizer.',
    required: [],
  })
  .openapi('UpdateAuthorizerRequest')

const UpdateDeploymentRequestSchema = z
  .object({
    Description: StringWithLengthBetween0And1024Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'description' },
          description: 'The description for the deployment resource.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateDeploymentRequest', description: 'Updates a Deployment.', required: [] })
  .openapi('UpdateDeploymentRequest')

const UpdateDomainNameRequestSchema = z
  .object({
    DomainNameConfigurations: DomainNameConfigurationsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'domainNameConfigurations' },
          description: 'The domain name configurations.',
        }),
    ).exactOptional(),
    MutualTlsAuthentication: MutualTlsAuthenticationInputSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'mutualTlsAuthentication' },
          description: 'The mutual TLS authentication configuration for a custom domain name.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateDomainNameRequest', description: 'Updates a DomainName.', required: [] })
  .openapi('UpdateDomainNameRequest')

const UpdateIntegrationRequestSchema = z
  .object({
    ConnectionId: StringWithLengthBetween1And1024Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'connectionId' },
          description:
            'The ID of the VPC link for a private integration. Supported only for HTTP APIs.',
        }),
    ).exactOptional(),
    ConnectionType: ConnectionTypeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'connectionType' },
          description:
            'The type of the network connection to the integration endpoint. Specify INTERNET for connections through the public routable internet or VPC_LINK for private connections between API Gateway and resources in a VPC. The default value is INTERNET.',
        }),
    ).exactOptional(),
    ContentHandlingStrategy: ContentHandlingStrategySchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'contentHandlingStrategy' },
          description:
            '<p>Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:</p> <p>CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p> <p>CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.</p>',
        }),
    ).exactOptional(),
    CredentialsArn: ArnSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'credentialsArn' },
          description:
            "Specifies the credentials required for the integration, if any. For AWS integrations, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify the string arn:aws:iam::*:user/*. To use resource-based permissions on supported AWS services, specify null.",
        }),
    ).exactOptional(),
    Description: StringWithLengthBetween0And1024Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'description' },
          description: 'The description of the integration',
        }),
    ).exactOptional(),
    IntegrationMethod: StringWithLengthBetween1And64Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'integrationMethod' },
          description: "Specifies the integration's HTTP method type.",
        }),
    ).exactOptional(),
    IntegrationSubtype: StringWithLengthBetween1And128Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'integrationSubtype' },
          description:
            'Supported only for HTTP API AWS_PROXY integrations. Specifies the AWS service action to invoke. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services-reference.html">Integration subtype reference</a>.',
        }),
    ).exactOptional(),
    IntegrationType: IntegrationTypeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'integrationType' },
          description:
            '<p>The integration type of an integration. One of the following:</p> <p>AWS: for integrating the route or method request with an AWS service action, including the Lambda function-invoking action. With the Lambda function-invoking action, this is referred to as the Lambda custom integration. With any other AWS service action, this is known as AWS integration. Supported only for WebSocket APIs.</p> <p>AWS_PROXY: for integrating the route or method request with a Lambda function or other AWS service action. This integration is also referred to as a Lambda proxy integration.</p> <p>HTTP: for integrating the route or method request with an HTTP endpoint. This integration is also referred to as the HTTP custom integration. Supported only for WebSocket APIs.</p> <p>HTTP_PROXY: for integrating the route or method request with an HTTP endpoint, with the client request passed through as-is. This is also referred to as HTTP proxy integration. For HTTP API private integrations, use an HTTP_PROXY integration.</p> <p>MOCK: for integrating the route or method request with API Gateway as a "loopback" endpoint without invoking any backend. Supported only for WebSocket APIs.</p>',
        }),
    ).exactOptional(),
    IntegrationUri: UriWithLengthBetween1And2048Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'integrationUri' },
          description:
            '<p>For a Lambda integration, specify the URI of a Lambda function.</p> <p>For an HTTP integration, specify a fully-qualified URL.</p> <p>For an HTTP API private integration, specify the ARN of an Application Load Balancer listener, Network Load Balancer listener, or AWS Cloud Map service. If you specify the ARN of an AWS Cloud Map service, API Gateway uses DiscoverInstances to identify resources. You can use query parameters to target specific resources. To learn more, see <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_DiscoverInstances.html">DiscoverInstances</a>. For private integrations, all resources must be owned by the same AWS account.</p>',
        }),
    ).exactOptional(),
    PassthroughBehavior: PassthroughBehaviorSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'passthroughBehavior' },
          description:
            '<p>Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the requestTemplates property on the Integration resource. There are three valid values: WHEN_NO_MATCH, WHEN_NO_TEMPLATES, and NEVER. Supported only for WebSocket APIs.</p> <p>WHEN_NO_MATCH passes the request body for unmapped content types through to the integration backend without transformation.</p> <p>NEVER rejects unmapped content types with an HTTP 415 Unsupported Media Type response.</p> <p>WHEN_NO_TEMPLATES allows pass-through when the integration has no content types mapped to templates. However, if there is at least one content type defined, unmapped content types will be rejected with the same HTTP 415 Unsupported Media Type response.</p>',
        }),
    ).exactOptional(),
    PayloadFormatVersion: StringWithLengthBetween1And64Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'payloadFormatVersion' },
          description:
            'Specifies the format of the payload sent to an integration. Required for HTTP APIs.',
        }),
    ).exactOptional(),
    RequestParameters: IntegrationParametersSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'requestParameters' },
          description:
            '<p>For WebSocket APIs, a key-value map specifying request parameters that are passed from the method request to the backend. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of method.request.<replaceable>{location}</replaceable>.<replaceable>{name}</replaceable>\n          , where \n            <replaceable>{location}</replaceable>\n           is querystring, path, or header; and \n            <replaceable>{name}</replaceable>\n           must be a valid and unique method request parameter name.</p> <p>For HTTP API integrations with a specified integrationSubtype, request parameters are a key-value map specifying parameters that are passed to AWS_PROXY integrations. You can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services.html">Working with AWS service integrations for HTTP APIs</a>.</p> <p>For HTTP API integrations, without a specified integrationSubtype request parameters are a key-value map specifying how to transform HTTP requests before sending them to the backend. The key should follow the pattern &lt;action&gt;:&lt;header|querystring|path&gt;.&lt;location&gt; where action can be append, overwrite or remove. For values, you can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.">Transforming API requests and responses</a>.</p>',
        }),
    ).exactOptional(),
    RequestTemplates: TemplateMapSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'requestTemplates' },
          description:
            'Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value. Supported only for WebSocket APIs.',
        }),
    ).exactOptional(),
    ResponseParameters: ResponseParametersSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'responseParameters' },
          description:
            'Supported only for HTTP APIs. You use response parameters to transform the HTTP response from a backend integration before returning the response to clients. Specify a key-value map from a selection key to response parameters. The selection key must be a valid HTTP status code within the range of 200-599. Response parameters are a key-value map. The key must match pattern &lt;action&gt;:&lt;header&gt;.&lt;location&gt; or overwrite.statuscode. The action can be append, overwrite or remove. The value can be a static value, or map to response data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.',
        }),
    ).exactOptional(),
    TemplateSelectionExpression: SelectionExpressionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'templateSelectionExpression' },
          description: 'The template selection expression for the integration.',
        }),
    ).exactOptional(),
    TimeoutInMillis: IntegerWithLengthBetween50And30000Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'timeoutInMillis' },
          description:
            'Custom timeout between 50 and 29,000 milliseconds for WebSocket APIs and between 50 and 30,000 milliseconds for HTTP APIs. The default timeout is 29 seconds for WebSocket APIs and 30 seconds for HTTP APIs.',
        }),
    ).exactOptional(),
    TlsConfig: TlsConfigInputSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tlsConfig' },
          description:
            'The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'UpdateIntegrationRequest',
    description: 'Updates an Integration.',
    required: [],
  })
  .openapi('UpdateIntegrationRequest')

const UpdateIntegrationResponseRequestSchema = z
  .object({
    ContentHandlingStrategy: ContentHandlingStrategySchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'contentHandlingStrategy' },
          description:
            '<p>Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:</p> <p>CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p> <p>CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.</p>',
        }),
    ).exactOptional(),
    IntegrationResponseKey: SelectionKeySchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'integrationResponseKey' },
          description: 'The integration response key.',
        }),
    ).exactOptional(),
    ResponseParameters: IntegrationParametersSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'responseParameters' },
          description:
            'A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.<replaceable>{name}</replaceable>\n               , where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.<replaceable>{name}</replaceable>\n                or integration.response.body.<replaceable>{JSON-expression}</replaceable>\n               , where \n                  <replaceable>{name}</replaceable>\n                is a valid and unique response header name and \n                  <replaceable>{JSON-expression}</replaceable>\n                is a valid JSON expression without the $ prefix.',
        }),
    ).exactOptional(),
    ResponseTemplates: TemplateMapSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'responseTemplates' },
          description:
            'The collection of response templates for the integration response as a string-to-string map of key-value pairs. Response templates are represented as a key/value map, with a content-type as the key and a template as the value.',
        }),
    ).exactOptional(),
    TemplateSelectionExpression: SelectionExpressionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'templateSelectionExpression' },
          description:
            'The template selection expression for the integration response. Supported only for WebSocket APIs.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'UpdateIntegrationResponseRequest',
    description: 'Updates an IntegrationResponses.',
    required: [],
  })
  .openapi('UpdateIntegrationResponseRequest')

const UpdateModelRequestSchema = z
  .object({
    ContentType: StringWithLengthBetween1And256Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'contentType' },
          description: 'The content-type for the model, for example, "application/json".',
        }),
    ).exactOptional(),
    Description: StringWithLengthBetween0And1024Schema.and(
      z
        .any()
        .openapi({ xml: { name: 'description' }, description: 'The description of the model.' }),
    ).exactOptional(),
    Name: StringWithLengthBetween1And128Schema.and(
      z.any().openapi({ xml: { name: 'name' }, description: 'The name of the model.' }),
    ).exactOptional(),
    Schema: StringWithLengthBetween0And32KSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'schema' },
          description:
            'The schema for the model. For application/json models, this should be JSON schema draft 4 model.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateModelRequest', description: 'Updates a Model.', required: [] })
  .openapi('UpdateModelRequest')

const UpdateRouteRequestSchema = z
  .object({
    ApiKeyRequired: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'apiKeyRequired' },
          description:
            'Specifies whether an API key is required for the route. Supported only for WebSocket APIs.',
        }),
    ).exactOptional(),
    AuthorizationScopes: AuthorizationScopesSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'authorizationScopes' },
          description: 'The authorization scopes supported by this route.',
        }),
    ).exactOptional(),
    AuthorizationType: AuthorizationTypeSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'authorizationType' },
          description:
            'The authorization type for the route. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer For HTTP APIs, valid values are NONE for open access, JWT for using JSON Web Tokens, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer.',
        }),
    ).exactOptional(),
    AuthorizerId: IdSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'authorizerId' },
          description:
            'The identifier of the Authorizer resource to be associated with this route. The authorizer identifier is generated by API Gateway when you created the authorizer.',
        }),
    ).exactOptional(),
    ModelSelectionExpression: SelectionExpressionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'modelSelectionExpression' },
          description:
            'The model selection expression for the route. Supported only for WebSocket APIs.',
        }),
    ).exactOptional(),
    OperationName: StringWithLengthBetween1And64Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'operationName' },
          description: 'The operation name for the route.',
        }),
    ).exactOptional(),
    RequestModels: RouteModelsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'requestModels' },
          description: 'The request models for the route. Supported only for WebSocket APIs.',
        }),
    ).exactOptional(),
    RequestParameters: RouteParametersSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'requestParameters' },
          description: 'The request parameters for the route. Supported only for WebSocket APIs.',
        }),
    ).exactOptional(),
    RouteKey: SelectionKeySchema.and(
      z.any().openapi({ xml: { name: 'routeKey' }, description: 'The route key for the route.' }),
    ).exactOptional(),
    RouteResponseSelectionExpression: SelectionExpressionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'routeResponseSelectionExpression' },
          description:
            'The route response selection expression for the route. Supported only for WebSocket APIs.',
        }),
    ).exactOptional(),
    Target: StringWithLengthBetween1And128Schema.and(
      z.any().openapi({ xml: { name: 'target' }, description: 'The target for the route.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateRouteRequest', description: 'Updates a Route.', required: [] })
  .openapi('UpdateRouteRequest')

const UpdateRouteResponseRequestSchema = z
  .object({
    ModelSelectionExpression: SelectionExpressionSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'modelSelectionExpression' },
          description:
            'The model selection expression for the route response. Supported only for WebSocket APIs.',
        }),
    ).exactOptional(),
    ResponseModels: RouteModelsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'responseModels' },
          description: 'The response models for the route response.',
        }),
    ).exactOptional(),
    ResponseParameters: RouteParametersSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'responseParameters' },
          description: 'The route response parameters.',
        }),
    ).exactOptional(),
    RouteResponseKey: SelectionKeySchema.and(
      z
        .any()
        .openapi({ xml: { name: 'routeResponseKey' }, description: 'The route response key.' }),
    ).exactOptional(),
  })
  .openapi({
    title: 'UpdateRouteResponseRequest',
    description: 'Updates a RouteResponse.',
    required: [],
  })
  .openapi('UpdateRouteResponseRequest')

const UpdateStageRequestSchema = z
  .object({
    AccessLogSettings: AccessLogSettingsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'accessLogSettings' },
          description: 'Settings for logging access in this stage.',
        }),
    ).exactOptional(),
    AutoDeploy: BooleanSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'autoDeploy' },
          description:
            'Specifies whether updates to an API automatically trigger a new deployment. The default value is false.',
        }),
    ).exactOptional(),
    ClientCertificateId: IdSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'clientCertificateId' },
          description: 'The identifier of a client certificate for a Stage.',
        }),
    ).exactOptional(),
    DefaultRouteSettings: RouteSettingsSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'defaultRouteSettings' },
          description: 'The default route settings for the stage.',
        }),
    ).exactOptional(),
    DeploymentId: IdSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'deploymentId' },
          description:
            "The deployment identifier for the API stage. Can't be updated if autoDeploy is enabled.",
        }),
    ).exactOptional(),
    Description: StringWithLengthBetween0And1024Schema.and(
      z
        .any()
        .openapi({
          xml: { name: 'description' },
          description: 'The description for the API stage.',
        }),
    ).exactOptional(),
    RouteSettings: RouteSettingsMapSchema.and(
      z
        .any()
        .openapi({ xml: { name: 'routeSettings' }, description: 'Route settings for the stage.' }),
    ).exactOptional(),
    StageVariables: StageVariablesMapSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'stageVariables' },
          description:
            'A map that defines the stage variables for a Stage. Variable names can have alphanumeric and underscore characters, and the values must match [A-Za-z0-9-._~:/?#&amp;=,]+.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateStageRequest', description: 'Updates a Stage.', required: [] })
  .openapi('UpdateStageRequest')

const UpdateVpcLinkRequestSchema = z
  .object({
    Name: StringWithLengthBetween1And128Schema.and(
      z.any().openapi({ xml: { name: 'name' }, description: 'The name of the VPC link.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateVpcLinkRequest', description: 'Updates a VPC link.', required: [] })
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

export const getV2ApisRoute = createRoute({
  method: 'get',
  path: '/v2/apis',
  description: 'Gets a collection of Api resources.',
  operationId: 'GetApis',
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
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of elements to be returned for this resource.',
            schema: { type: 'string' },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'The next page of elements from this collection. Not valid for the last element of the collection.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetApisResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const putV2ApisRoute = createRoute({
  method: 'put',
  path: '/v2/apis',
  description: 'Imports an API.',
  operationId: 'ImportApi',
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
      basepath: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'basepath',
            in: 'query',
            required: false,
            description:
              'Specifies how to interpret the base path of the API during import. Valid values are ignore, prepend, and split. The default value is ignore. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-import-api-basePath.html">Set the OpenAPI basePath Property</a>. Supported only for HTTP APIs.',
            schema: { type: 'string' },
          },
        }),
      failOnWarnings: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'failOnWarnings',
            in: 'query',
            required: false,
            description:
              'Specifies whether to rollback the API creation when a warning is encountered. By default, API creation continues if a warning is encountered.',
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
                .openapi({ description: 'The OpenAPI definition. Supported only for HTTP APIs.' }),
            })
            .openapi({ required: ['body'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: ImportApiResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postV2ApisRoute = createRoute({
  method: 'post',
  path: '/v2/apis',
  description: 'Creates an Api resource.',
  operationId: 'CreateApi',
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
              apiKeySelectionExpression: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information.',
                }),
              corsConfiguration: z
                .object({
                  AllowCredentials: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'allowCredentials' },
                        description:
                          'Specifies whether credentials are included in the CORS request. Supported only for HTTP APIs.',
                      }),
                  ).exactOptional(),
                  AllowHeaders: CorsHeaderListSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'allowHeaders' },
                        description:
                          'Represents a collection of allowed headers. Supported only for HTTP APIs.',
                      }),
                  ).exactOptional(),
                  AllowMethods: CorsMethodListSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'allowMethods' },
                        description:
                          'Represents a collection of allowed HTTP methods. Supported only for HTTP APIs.',
                      }),
                  ).exactOptional(),
                  AllowOrigins: CorsOriginListSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'allowOrigins' },
                        description:
                          'Represents a collection of allowed origins. Supported only for HTTP APIs.',
                      }),
                  ).exactOptional(),
                  ExposeHeaders: CorsHeaderListSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'exposeHeaders' },
                        description:
                          'Represents a collection of exposed headers. Supported only for HTTP APIs.',
                      }),
                  ).exactOptional(),
                  MaxAge: IntegerWithLengthBetweenMinus1And86400Schema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'maxAge' },
                        description:
                          'The number of seconds that the browser should cache preflight request results. Supported only for HTTP APIs.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information.',
                  required: [],
                }),
              credentialsArn: z
                .string()
                .exactOptional()
                .openapi({ description: 'Represents an Amazon Resource Name (ARN).' }),
              description: z
                .string()
                .exactOptional()
                .openapi({ description: 'A string with a length between [0-1024].' }),
              disableSchemaValidation: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Avoid validating models when creating a deployment. Supported only for WebSocket APIs.',
                }),
              disableExecuteApiEndpoint: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Specifies whether clients can invoke your API by using the default execute-api endpoint. By default, clients can invoke your API with the default https://{api_id}.execute-api.{region}.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint.',
                }),
              name: z.string().openapi({ description: 'A string with a length between [1-128].' }),
              protocolType: z
                .enum(['WEBSOCKET', 'HTTP'])
                .openapi({ description: 'Represents a protocol type.' }),
              routeKey: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression\'s associated selection key type.',
                }),
              routeSelectionExpression: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information.',
                }),
              tags: z
                .record(z.string(), StringWithLengthBetween1And1600Schema)
                .exactOptional()
                .openapi({
                  description: 'Represents a collection of tags associated with the resource.',
                }),
              target: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A string representation of a URI with a length between [1-2048].',
                }),
              version: z
                .string()
                .exactOptional()
                .openapi({ description: 'A string with a length between [1-64].' }),
            })
            .openapi({ required: ['name', 'protocolType'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateApiResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getV2DomainnamesDomainNameApimappingsRoute = createRoute({
  method: 'get',
  path: '/v2/domainnames/{domainName}/apimappings',
  description: 'Gets API mappings.',
  operationId: 'GetApiMappings',
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
      domainName: z
        .string()
        .openapi({
          param: {
            name: 'domainName',
            in: 'path',
            required: true,
            description: 'The domain name.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of elements to be returned for this resource.',
            schema: { type: 'string' },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'The next page of elements from this collection. Not valid for the last element of the collection.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetApiMappingsResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postV2DomainnamesDomainNameApimappingsRoute = createRoute({
  method: 'post',
  path: '/v2/domainnames/{domainName}/apimappings',
  description: 'Creates an API mapping.',
  operationId: 'CreateApiMapping',
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
      domainName: z
        .string()
        .openapi({
          param: {
            name: 'domainName',
            in: 'path',
            required: true,
            description: 'The domain name.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              apiId: z.string().openapi({ description: 'The identifier.' }),
              apiMappingKey: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression\'s associated selection key type.',
                }),
              stage: z.string().openapi({ description: 'A string with a length between [1-128].' }),
            })
            .openapi({ required: ['apiId', 'stage'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateApiMappingResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getV2ApisApiIdAuthorizersRoute = createRoute({
  method: 'get',
  path: '/v2/apis/{apiId}/authorizers',
  description: 'Gets the Authorizers for an API.',
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
      apiId: z
        .string()
        .openapi({
          param: {
            name: 'apiId',
            in: 'path',
            required: true,
            description: 'The API identifier.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of elements to be returned for this resource.',
            schema: { type: 'string' },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'The next page of elements from this collection. Not valid for the last element of the collection.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetAuthorizersResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postV2ApisApiIdAuthorizersRoute = createRoute({
  method: 'post',
  path: '/v2/apis/{apiId}/authorizers',
  description: 'Creates an Authorizer for an API.',
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
      apiId: z
        .string()
        .openapi({
          param: {
            name: 'apiId',
            in: 'path',
            required: true,
            description: 'The API identifier.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              authorizerCredentialsArn: z
                .string()
                .exactOptional()
                .openapi({ description: 'Represents an Amazon Resource Name (ARN).' }),
              authorizerPayloadFormatVersion: z
                .string()
                .exactOptional()
                .openapi({ description: 'A string with a length between [1-64].' }),
              authorizerResultTtlInSeconds: z
                .int()
                .min(0)
                .max(3600)
                .exactOptional()
                .openapi({ description: 'An integer with a value between [0-3600].' }),
              authorizerType: z
                .enum(['REQUEST', 'JWT'])
                .openapi({
                  description:
                    'The authorizer type. Specify REQUEST for a Lambda function using incoming request parameters. Specify JWT to use JSON Web Tokens (supported only for HTTP APIs).',
                }),
              authorizerUri: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A string representation of a URI with a length between [1-2048].',
                }),
              enableSimpleResponses: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Specifies whether a Lambda authorizer returns a response in a simple format. By default, a Lambda authorizer must return an IAM policy. If enabled, the Lambda authorizer can return a boolean value instead of an IAM policy. Supported only for HTTP APIs. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a>',
                }),
              identitySource: z
                .array(StringSchema)
                .openapi({
                  description:
                    'The identity source for which authorization is requested. For the REQUEST authorizer, this is required when authorization caching is enabled. The value is a comma-separated string of one or more mapping expressions of the specified request parameters. For example, if an Auth header, a Name query string parameter are defined as identity sources, this value is $method.request.header.Auth, $method.request.querystring.Name. These parameters will be used to derive the authorization caching key and to perform runtime validation of the REQUEST authorizer by verifying all of the identity-related request parameters are present, not null and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function, otherwise, it returns a 401 Unauthorized response without calling the Lambda function. The valid value is a string of comma-separated mapping expressions of the specified request parameters. When the authorization caching is not enabled, this property is optional.',
                }),
              identityValidationExpression: z
                .string()
                .exactOptional()
                .openapi({ description: 'A string with a length between [0-1024].' }),
              jwtConfiguration: z
                .object({
                  Audience: ListOfStringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'audience' },
                        description:
                          'A list of the intended recipients of the JWT. A valid JWT must provide an aud that matches at least one entry in this list. See <a href="https://tools.ietf.org/html/rfc7519#section-4.1.3">RFC 7519</a>. Supported only for HTTP APIs.',
                      }),
                  ).exactOptional(),
                  Issuer: UriWithLengthBetween1And2048Schema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'issuer' },
                        description:
                          'The base domain of the identity provider that issues JSON Web Tokens. For example, an Amazon Cognito user pool has the following format: https://cognito-idp.<replaceable>{region}</replaceable>.amazonaws.com/<replaceable>{userPoolId}</replaceable>\n               . Required for the JWT authorizer type. Supported only for HTTP APIs.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.',
                  required: [],
                }),
              name: z.string().openapi({ description: 'A string with a length between [1-128].' }),
            })
            .openapi({ required: ['authorizerType', 'identitySource', 'name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateAuthorizerResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getV2ApisApiIdDeploymentsRoute = createRoute({
  method: 'get',
  path: '/v2/apis/{apiId}/deployments',
  description: 'Gets the Deployments for an API.',
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
      apiId: z
        .string()
        .openapi({
          param: {
            name: 'apiId',
            in: 'path',
            required: true,
            description: 'The API identifier.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of elements to be returned for this resource.',
            schema: { type: 'string' },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'The next page of elements from this collection. Not valid for the last element of the collection.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDeploymentsResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postV2ApisApiIdDeploymentsRoute = createRoute({
  method: 'post',
  path: '/v2/apis/{apiId}/deployments',
  description: 'Creates a Deployment for an API.',
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
      apiId: z
        .string()
        .openapi({
          param: {
            name: 'apiId',
            in: 'path',
            required: true,
            description: 'The API identifier.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              description: z
                .string()
                .exactOptional()
                .openapi({ description: 'A string with a length between [0-1024].' }),
              stageName: z
                .string()
                .exactOptional()
                .openapi({ description: 'A string with a length between [1-128].' }),
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
      content: { 'application/json': { schema: CreateDeploymentResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getV2DomainnamesRoute = createRoute({
  method: 'get',
  path: '/v2/domainnames',
  description: 'Gets the domain names for an AWS account.',
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
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of elements to be returned for this resource.',
            schema: { type: 'string' },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'The next page of elements from this collection. Not valid for the last element of the collection.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDomainNamesResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postV2DomainnamesRoute = createRoute({
  method: 'post',
  path: '/v2/domainnames',
  description: 'Creates a domain name.',
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
                .openapi({ description: 'A string with a length between [1-512].' }),
              domainNameConfigurations: z
                .array(DomainNameConfigurationSchema)
                .exactOptional()
                .openapi({ description: 'The domain name configurations.' }),
              mutualTlsAuthentication: z
                .object({
                  TruststoreUri: UriWithLengthBetween1And2048Schema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'truststoreUri' },
                        description:
                          'An Amazon S3 URL that specifies the truststore for mutual TLS authentication, for example, s3://<replaceable>bucket-name</replaceable>/<replaceable>key-name</replaceable>. The truststore can contain certificates from public or private certificate authorities. To update the truststore, upload a new version to S3, and then update your custom domain name to use the new version. To update the truststore, you must have permissions to access the S3 object.',
                      }),
                  ).exactOptional(),
                  TruststoreVersion: StringWithLengthBetween1And64Schema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'truststoreVersion' },
                        description:
                          'The version of the S3 object that contains your truststore. To specify a version, you must have versioning enabled for the S3 bucket.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The mutual TLS authentication configuration for a custom domain name.',
                  required: [],
                }),
              tags: z
                .record(z.string(), StringWithLengthBetween1And1600Schema)
                .exactOptional()
                .openapi({
                  description: 'Represents a collection of tags associated with the resource.',
                }),
            })
            .openapi({ required: ['domainName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateDomainNameResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const getV2ApisApiIdIntegrationsRoute = createRoute({
  method: 'get',
  path: '/v2/apis/{apiId}/integrations',
  description: 'Gets the Integrations for an API.',
  operationId: 'GetIntegrations',
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
      apiId: z
        .string()
        .openapi({
          param: {
            name: 'apiId',
            in: 'path',
            required: true,
            description: 'The API identifier.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of elements to be returned for this resource.',
            schema: { type: 'string' },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'The next page of elements from this collection. Not valid for the last element of the collection.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetIntegrationsResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postV2ApisApiIdIntegrationsRoute = createRoute({
  method: 'post',
  path: '/v2/apis/{apiId}/integrations',
  description: 'Creates an Integration.',
  operationId: 'CreateIntegration',
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
      apiId: z
        .string()
        .openapi({
          param: {
            name: 'apiId',
            in: 'path',
            required: true,
            description: 'The API identifier.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              connectionId: z
                .string()
                .exactOptional()
                .openapi({ description: 'A string with a length between [1-1024].' }),
              connectionType: z
                .enum(['INTERNET', 'VPC_LINK'])
                .exactOptional()
                .openapi({ description: 'Represents a connection type.' }),
              contentHandlingStrategy: z
                .enum(['CONVERT_TO_BINARY', 'CONVERT_TO_TEXT'])
                .exactOptional()
                .openapi({
                  description:
                    'Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs.',
                }),
              credentialsArn: z
                .string()
                .exactOptional()
                .openapi({ description: 'Represents an Amazon Resource Name (ARN).' }),
              description: z
                .string()
                .exactOptional()
                .openapi({ description: 'A string with a length between [0-1024].' }),
              integrationMethod: z
                .string()
                .exactOptional()
                .openapi({ description: 'A string with a length between [1-64].' }),
              integrationSubtype: z
                .string()
                .exactOptional()
                .openapi({ description: 'A string with a length between [1-128].' }),
              integrationType: z
                .enum(['AWS', 'HTTP', 'MOCK', 'HTTP_PROXY', 'AWS_PROXY'])
                .openapi({ description: 'Represents an API method integration type.' }),
              integrationUri: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A string representation of a URI with a length between [1-2048].',
                }),
              passthroughBehavior: z
                .enum(['WHEN_NO_MATCH', 'NEVER', 'WHEN_NO_TEMPLATES'])
                .exactOptional()
                .openapi({
                  description:
                    'Represents passthrough behavior for an integration response. Supported only for WebSocket APIs.',
                }),
              payloadFormatVersion: z
                .string()
                .exactOptional()
                .openapi({ description: 'A string with a length between [1-64].' }),
              requestParameters: z
                .record(z.string(), StringWithLengthBetween1And512Schema)
                .exactOptional()
                .openapi({
                  description:
                    '<p>For WebSocket APIs, a key-value map specifying request parameters that are passed from the method request to the backend. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of method.request.<replaceable>{location}</replaceable>.<replaceable>{name}</replaceable>\n          , where \n            <replaceable>{location}</replaceable>\n           is querystring, path, or header; and \n            <replaceable>{name}</replaceable>\n           must be a valid and unique method request parameter name.</p> <p>For HTTP API integrations with a specified integrationSubtype, request parameters are a key-value map specifying parameters that are passed to AWS_PROXY integrations. You can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services.html">Working with AWS service integrations for HTTP APIs</a>.</p> <p>For HTTP API integrations without a specified integrationSubtype request parameters are a key-value map specifying how to transform HTTP requests before sending them to the backend. The key should follow the pattern &lt;action&gt;:&lt;header|querystring|path&gt;.&lt;location&gt; where action can be append, overwrite or remove. For values, you can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.</p>',
                }),
              requestTemplates: z
                .record(z.string(), StringWithLengthBetween0And32KSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression.',
                }),
              responseParameters: z
                .record(z.string(), IntegrationParametersSchema)
                .exactOptional()
                .openapi({
                  description:
                    'Supported only for HTTP APIs. You use response parameters to transform the HTTP response from a backend integration before returning the response to clients.',
                }),
              templateSelectionExpression: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information.',
                }),
              timeoutInMillis: z
                .int()
                .min(50)
                .max(30000)
                .exactOptional()
                .openapi({ description: 'An integer with a value between [50-30000].' }),
              tlsConfig: z
                .object({
                  ServerNameToVerify: StringWithLengthBetween1And512Schema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'serverNameToVerify' },
                        description:
                          "If you specify a server name, API Gateway uses it to verify the hostname on the integration's certificate. The server name is also included in the TLS handshake to support Server Name Indication (SNI) or virtual hosting.",
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.',
                  required: [],
                }),
            })
            .openapi({ required: ['integrationType'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateIntegrationResultSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesRoute = createRoute({
  method: 'get',
  path: '/v2/apis/{apiId}/integrations/{integrationId}/integrationresponses',
  description: 'Gets the IntegrationResponses for an Integration.',
  operationId: 'GetIntegrationResponses',
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
      apiId: z
        .string()
        .openapi({
          param: {
            name: 'apiId',
            in: 'path',
            required: true,
            description: 'The API identifier.',
            schema: { type: 'string' },
          },
        }),
      integrationId: z
        .string()
        .openapi({
          param: {
            name: 'integrationId',
            in: 'path',
            required: true,
            description: 'The integration ID.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of elements to be returned for this resource.',
            schema: { type: 'string' },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'The next page of elements from this collection. Not valid for the last element of the collection.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetIntegrationResponsesResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesRoute = createRoute({
  method: 'post',
  path: '/v2/apis/{apiId}/integrations/{integrationId}/integrationresponses',
  description: 'Creates an IntegrationResponses.',
  operationId: 'CreateIntegrationResponse',
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
      apiId: z
        .string()
        .openapi({
          param: {
            name: 'apiId',
            in: 'path',
            required: true,
            description: 'The API identifier.',
            schema: { type: 'string' },
          },
        }),
      integrationId: z
        .string()
        .openapi({
          param: {
            name: 'integrationId',
            in: 'path',
            required: true,
            description: 'The integration ID.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              contentHandlingStrategy: z
                .enum(['CONVERT_TO_BINARY', 'CONVERT_TO_TEXT'])
                .exactOptional()
                .openapi({
                  description:
                    'Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs.',
                }),
              integrationResponseKey: z
                .string()
                .openapi({
                  description:
                    'After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression\'s associated selection key type.',
                }),
              responseParameters: z
                .record(z.string(), StringWithLengthBetween1And512Schema)
                .exactOptional()
                .openapi({
                  description:
                    '<p>For WebSocket APIs, a key-value map specifying request parameters that are passed from the method request to the backend. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of method.request.<replaceable>{location}</replaceable>.<replaceable>{name}</replaceable>\n          , where \n            <replaceable>{location}</replaceable>\n           is querystring, path, or header; and \n            <replaceable>{name}</replaceable>\n           must be a valid and unique method request parameter name.</p> <p>For HTTP API integrations with a specified integrationSubtype, request parameters are a key-value map specifying parameters that are passed to AWS_PROXY integrations. You can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services.html">Working with AWS service integrations for HTTP APIs</a>.</p> <p>For HTTP API integrations without a specified integrationSubtype request parameters are a key-value map specifying how to transform HTTP requests before sending them to the backend. The key should follow the pattern &lt;action&gt;:&lt;header|querystring|path&gt;.&lt;location&gt; where action can be append, overwrite or remove. For values, you can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.</p>',
                }),
              responseTemplates: z
                .record(z.string(), StringWithLengthBetween0And32KSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression.',
                }),
              templateSelectionExpression: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information.',
                }),
            })
            .openapi({ required: ['integrationResponseKey'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateIntegrationResponseResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getV2ApisApiIdModelsRoute = createRoute({
  method: 'get',
  path: '/v2/apis/{apiId}/models',
  description: 'Gets the Models for an API.',
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
      apiId: z
        .string()
        .openapi({
          param: {
            name: 'apiId',
            in: 'path',
            required: true,
            description: 'The API identifier.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of elements to be returned for this resource.',
            schema: { type: 'string' },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'The next page of elements from this collection. Not valid for the last element of the collection.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetModelsResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postV2ApisApiIdModelsRoute = createRoute({
  method: 'post',
  path: '/v2/apis/{apiId}/models',
  description: 'Creates a Model for an API.',
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
      apiId: z
        .string()
        .openapi({
          param: {
            name: 'apiId',
            in: 'path',
            required: true,
            description: 'The API identifier.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              contentType: z
                .string()
                .exactOptional()
                .openapi({ description: 'A string with a length between [1-256].' }),
              description: z
                .string()
                .exactOptional()
                .openapi({ description: 'A string with a length between [0-1024].' }),
              name: z.string().openapi({ description: 'A string with a length between [1-128].' }),
              schema: z
                .string()
                .openapi({ description: 'A string with a length between [0-32768].' }),
            })
            .openapi({ required: ['name', 'schema'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateModelResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getV2ApisApiIdRoutesRoute = createRoute({
  method: 'get',
  path: '/v2/apis/{apiId}/routes',
  description: 'Gets the Routes for an API.',
  operationId: 'GetRoutes',
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
      apiId: z
        .string()
        .openapi({
          param: {
            name: 'apiId',
            in: 'path',
            required: true,
            description: 'The API identifier.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of elements to be returned for this resource.',
            schema: { type: 'string' },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'The next page of elements from this collection. Not valid for the last element of the collection.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetRoutesResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postV2ApisApiIdRoutesRoute = createRoute({
  method: 'post',
  path: '/v2/apis/{apiId}/routes',
  description: 'Creates a Route for an API.',
  operationId: 'CreateRoute',
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
      apiId: z
        .string()
        .openapi({
          param: {
            name: 'apiId',
            in: 'path',
            required: true,
            description: 'The API identifier.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              apiKeyRequired: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Specifies whether an API key is required for the route. Supported only for WebSocket APIs.',
                }),
              authorizationScopes: z
                .array(StringWithLengthBetween1And64Schema)
                .exactOptional()
                .openapi({
                  description:
                    'A list of authorization scopes configured on a route. The scopes are used with a JWT authorizer to authorize the method invocation. The authorization works by matching the route scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any route scope matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the route scope is configured, the client must provide an access token instead of an identity token for authorization purposes.',
                }),
              authorizationType: z
                .enum(['NONE', 'AWS_IAM', 'CUSTOM', 'JWT'])
                .exactOptional()
                .openapi({
                  description:
                    'The authorization type. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer. For HTTP APIs, valid values are NONE for open access, JWT for using JSON Web Tokens, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer.',
                }),
              authorizerId: z.string().exactOptional().openapi({ description: 'The identifier.' }),
              modelSelectionExpression: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information.',
                }),
              operationName: z
                .string()
                .exactOptional()
                .openapi({ description: 'A string with a length between [1-64].' }),
              requestModels: z
                .record(z.string(), StringWithLengthBetween1And128Schema)
                .exactOptional()
                .openapi({ description: 'The route models.' }),
              requestParameters: z
                .record(z.string(), ParameterConstraintsSchema)
                .exactOptional()
                .openapi({ description: 'The route parameters.' }),
              routeKey: z
                .string()
                .openapi({
                  description:
                    'After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression\'s associated selection key type.',
                }),
              routeResponseSelectionExpression: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information.',
                }),
              target: z
                .string()
                .exactOptional()
                .openapi({ description: 'A string with a length between [1-128].' }),
            })
            .openapi({ required: ['routeKey'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateRouteResultSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getV2ApisApiIdRoutesRouteIdRouteresponsesRoute = createRoute({
  method: 'get',
  path: '/v2/apis/{apiId}/routes/{routeId}/routeresponses',
  description: 'Gets the RouteResponses for a Route.',
  operationId: 'GetRouteResponses',
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
      apiId: z
        .string()
        .openapi({
          param: {
            name: 'apiId',
            in: 'path',
            required: true,
            description: 'The API identifier.',
            schema: { type: 'string' },
          },
        }),
      routeId: z
        .string()
        .openapi({
          param: {
            name: 'routeId',
            in: 'path',
            required: true,
            description: 'The route ID.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of elements to be returned for this resource.',
            schema: { type: 'string' },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'The next page of elements from this collection. Not valid for the last element of the collection.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetRouteResponsesResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postV2ApisApiIdRoutesRouteIdRouteresponsesRoute = createRoute({
  method: 'post',
  path: '/v2/apis/{apiId}/routes/{routeId}/routeresponses',
  description: 'Creates a RouteResponse for a Route.',
  operationId: 'CreateRouteResponse',
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
      apiId: z
        .string()
        .openapi({
          param: {
            name: 'apiId',
            in: 'path',
            required: true,
            description: 'The API identifier.',
            schema: { type: 'string' },
          },
        }),
      routeId: z
        .string()
        .openapi({
          param: {
            name: 'routeId',
            in: 'path',
            required: true,
            description: 'The route ID.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              modelSelectionExpression: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information.',
                }),
              responseModels: z
                .record(z.string(), StringWithLengthBetween1And128Schema)
                .exactOptional()
                .openapi({ description: 'The route models.' }),
              responseParameters: z
                .record(z.string(), ParameterConstraintsSchema)
                .exactOptional()
                .openapi({ description: 'The route parameters.' }),
              routeResponseKey: z
                .string()
                .openapi({
                  description:
                    'After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression\'s associated selection key type.',
                }),
            })
            .openapi({ required: ['routeResponseKey'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateRouteResponseResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getV2ApisApiIdStagesRoute = createRoute({
  method: 'get',
  path: '/v2/apis/{apiId}/stages',
  description: 'Gets the Stages for an API.',
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
      apiId: z
        .string()
        .openapi({
          param: {
            name: 'apiId',
            in: 'path',
            required: true,
            description: 'The API identifier.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of elements to be returned for this resource.',
            schema: { type: 'string' },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'The next page of elements from this collection. Not valid for the last element of the collection.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetStagesResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postV2ApisApiIdStagesRoute = createRoute({
  method: 'post',
  path: '/v2/apis/{apiId}/stages',
  description: 'Creates a Stage for an API.',
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
      apiId: z
        .string()
        .openapi({
          param: {
            name: 'apiId',
            in: 'path',
            required: true,
            description: 'The API identifier.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              accessLogSettings: z
                .object({
                  DestinationArn: ArnSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'destinationArn' },
                        description:
                          'The ARN of the CloudWatch Logs log group to receive access logs.',
                      }),
                  ).exactOptional(),
                  Format: StringWithLengthBetween1And1024Schema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'format' },
                        description:
                          'A single line format of the access logs of data, as specified by selected $context variables. The format must include at least $context.requestId.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'Settings for logging access in a stage.', required: [] }),
              autoDeploy: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Specifies whether updates to an API automatically trigger a new deployment. The default value is false.',
                }),
              clientCertificateId: z
                .string()
                .exactOptional()
                .openapi({ description: 'The identifier.' }),
              defaultRouteSettings: z
                .object({
                  DataTraceEnabled: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'dataTraceEnabled' },
                        description:
                          'Specifies whether (true) or not (false) data trace logging is enabled for this route. This property affects the log entries pushed to Amazon CloudWatch Logs. Supported only for WebSocket APIs.',
                      }),
                  ).exactOptional(),
                  DetailedMetricsEnabled: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'detailedMetricsEnabled' },
                        description: 'Specifies whether detailed metrics are enabled.',
                      }),
                  ).exactOptional(),
                  LoggingLevel: LoggingLevelSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'loggingLevel' },
                        description:
                          'Specifies the logging level for this route: INFO, ERROR, or OFF. This property affects the log entries pushed to Amazon CloudWatch Logs. Supported only for WebSocket APIs.',
                      }),
                  ).exactOptional(),
                  ThrottlingBurstLimit: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'throttlingBurstLimit' },
                        description: 'Specifies the throttling burst limit.',
                      }),
                  ).exactOptional(),
                  ThrottlingRateLimit: DoubleSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'throttlingRateLimit' },
                        description: 'Specifies the throttling rate limit.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Represents a collection of route settings.',
                  required: [],
                }),
              deploymentId: z.string().exactOptional().openapi({ description: 'The identifier.' }),
              description: z
                .string()
                .exactOptional()
                .openapi({ description: 'A string with a length between [0-1024].' }),
              routeSettings: z
                .record(z.string(), RouteSettingsSchema)
                .exactOptional()
                .openapi({ description: 'The route settings map.' }),
              stageName: z
                .string()
                .openapi({ description: 'A string with a length between [1-128].' }),
              stageVariables: z
                .record(z.string(), StringWithLengthBetween0And2048Schema)
                .exactOptional()
                .openapi({ description: 'The stage variable map.' }),
              tags: z
                .record(z.string(), StringWithLengthBetween1And1600Schema)
                .exactOptional()
                .openapi({
                  description: 'Represents a collection of tags associated with the resource.',
                }),
            })
            .openapi({ required: ['stageName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateStageResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getV2VpclinksRoute = createRoute({
  method: 'get',
  path: '/v2/vpclinks',
  description: 'Gets a collection of VPC links.',
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
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of elements to be returned for this resource.',
            schema: { type: 'string' },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'The next page of elements from this collection. Not valid for the last element of the collection.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetVpcLinksResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postV2VpclinksRoute = createRoute({
  method: 'post',
  path: '/v2/vpclinks',
  description: 'Creates a VPC link.',
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
              name: z.string().openapi({ description: 'A string with a length between [1-128].' }),
              securityGroupIds: z
                .array(StringSchema)
                .exactOptional()
                .openapi({ description: 'A list of security group IDs for the VPC link.' }),
              subnetIds: z
                .array(StringSchema)
                .openapi({ description: 'A list of subnet IDs to include in the VPC link.' }),
              tags: z
                .record(z.string(), StringWithLengthBetween1And1600Schema)
                .exactOptional()
                .openapi({
                  description: 'Represents a collection of tags associated with the resource.',
                }),
            })
            .openapi({ required: ['name', 'subnetIds'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateVpcLinkResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const deleteV2ApisApiIdStagesStageNameAccesslogsettingsRoute = createRoute({
  method: 'delete',
  path: '/v2/apis/{apiId}/stages/{stageName}/accesslogsettings',
  description:
    'Deletes the AccessLogSettings for a Stage. To disable access logging for a Stage, delete its AccessLogSettings.',
  operationId: 'DeleteAccessLogSettings',
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
      apiId: z
        .string()
        .openapi({
          param: {
            name: 'apiId',
            in: 'path',
            required: true,
            description: 'The API identifier.',
            schema: { type: 'string' },
          },
        }),
      stageName: z
        .string()
        .openapi({
          param: {
            name: 'stageName',
            in: 'path',
            required: true,
            description:
              'The stage name. Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV2ApisApiIdRoute = createRoute({
  method: 'get',
  path: '/v2/apis/{apiId}',
  description: 'Gets an Api resource.',
  operationId: 'GetApi',
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
      apiId: z
        .string()
        .openapi({
          param: {
            name: 'apiId',
            in: 'path',
            required: true,
            description: 'The API identifier.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetApiResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const putV2ApisApiIdRoute = createRoute({
  method: 'put',
  path: '/v2/apis/{apiId}',
  description: 'Puts an Api resource.',
  operationId: 'ReimportApi',
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
      apiId: z
        .string()
        .openapi({
          param: {
            name: 'apiId',
            in: 'path',
            required: true,
            description: 'The API identifier.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      basepath: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'basepath',
            in: 'query',
            required: false,
            description:
              'Specifies how to interpret the base path of the API during import. Valid values are ignore, prepend, and split. The default value is ignore. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-import-api-basePath.html">Set the OpenAPI basePath Property</a>. Supported only for HTTP APIs.',
            schema: { type: 'string' },
          },
        }),
      failOnWarnings: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'failOnWarnings',
            in: 'query',
            required: false,
            description:
              'Specifies whether to rollback the API creation when a warning is encountered. By default, API creation continues if a warning is encountered.',
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
                .openapi({ description: 'The OpenAPI definition. Supported only for HTTP APIs.' }),
            })
            .openapi({ required: ['body'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: ReimportApiResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const deleteV2ApisApiIdRoute = createRoute({
  method: 'delete',
  path: '/v2/apis/{apiId}',
  description: 'Deletes an Api resource.',
  operationId: 'DeleteApi',
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
      apiId: z
        .string()
        .openapi({
          param: {
            name: 'apiId',
            in: 'path',
            required: true,
            description: 'The API identifier.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const patchV2ApisApiIdRoute = createRoute({
  method: 'patch',
  path: '/v2/apis/{apiId}',
  description: 'Updates an Api resource.',
  operationId: 'UpdateApi',
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
      apiId: z
        .string()
        .openapi({
          param: {
            name: 'apiId',
            in: 'path',
            required: true,
            description: 'The API identifier.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              apiKeySelectionExpression: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information.',
                }),
              corsConfiguration: z
                .object({
                  AllowCredentials: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'allowCredentials' },
                        description:
                          'Specifies whether credentials are included in the CORS request. Supported only for HTTP APIs.',
                      }),
                  ).exactOptional(),
                  AllowHeaders: CorsHeaderListSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'allowHeaders' },
                        description:
                          'Represents a collection of allowed headers. Supported only for HTTP APIs.',
                      }),
                  ).exactOptional(),
                  AllowMethods: CorsMethodListSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'allowMethods' },
                        description:
                          'Represents a collection of allowed HTTP methods. Supported only for HTTP APIs.',
                      }),
                  ).exactOptional(),
                  AllowOrigins: CorsOriginListSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'allowOrigins' },
                        description:
                          'Represents a collection of allowed origins. Supported only for HTTP APIs.',
                      }),
                  ).exactOptional(),
                  ExposeHeaders: CorsHeaderListSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'exposeHeaders' },
                        description:
                          'Represents a collection of exposed headers. Supported only for HTTP APIs.',
                      }),
                  ).exactOptional(),
                  MaxAge: IntegerWithLengthBetweenMinus1And86400Schema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'maxAge' },
                        description:
                          'The number of seconds that the browser should cache preflight request results. Supported only for HTTP APIs.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information.',
                  required: [],
                }),
              credentialsArn: z
                .string()
                .exactOptional()
                .openapi({ description: 'Represents an Amazon Resource Name (ARN).' }),
              description: z
                .string()
                .exactOptional()
                .openapi({ description: 'A string with a length between [0-1024].' }),
              disableSchemaValidation: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Avoid validating models when creating a deployment. Supported only for WebSocket APIs.',
                }),
              disableExecuteApiEndpoint: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Specifies whether clients can invoke your API by using the default execute-api endpoint. By default, clients can invoke your API with the default https://{api_id}.execute-api.{region}.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint.',
                }),
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'A string with a length between [1-128].' }),
              routeKey: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression\'s associated selection key type.',
                }),
              routeSelectionExpression: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information.',
                }),
              target: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A string representation of a URI with a length between [1-2048].',
                }),
              version: z
                .string()
                .exactOptional()
                .openapi({ description: 'A string with a length between [1-64].' }),
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
      content: { 'application/json': { schema: UpdateApiResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getV2DomainnamesDomainNameApimappingsApiMappingIdRoute = createRoute({
  method: 'get',
  path: '/v2/domainnames/{domainName}/apimappings/{apiMappingId}',
  description: 'Gets an API mapping.',
  operationId: 'GetApiMapping',
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
      apiMappingId: z
        .string()
        .openapi({
          param: {
            name: 'apiMappingId',
            in: 'path',
            required: true,
            description: 'The API mapping identifier.',
            schema: { type: 'string' },
          },
        }),
      domainName: z
        .string()
        .openapi({
          param: {
            name: 'domainName',
            in: 'path',
            required: true,
            description: 'The domain name.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetApiMappingResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const deleteV2DomainnamesDomainNameApimappingsApiMappingIdRoute = createRoute({
  method: 'delete',
  path: '/v2/domainnames/{domainName}/apimappings/{apiMappingId}',
  description: 'Deletes an API mapping.',
  operationId: 'DeleteApiMapping',
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
      apiMappingId: z
        .string()
        .openapi({
          param: {
            name: 'apiMappingId',
            in: 'path',
            required: true,
            description: 'The API mapping identifier.',
            schema: { type: 'string' },
          },
        }),
      domainName: z
        .string()
        .openapi({
          param: {
            name: 'domainName',
            in: 'path',
            required: true,
            description: 'The domain name.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const patchV2DomainnamesDomainNameApimappingsApiMappingIdRoute = createRoute({
  method: 'patch',
  path: '/v2/domainnames/{domainName}/apimappings/{apiMappingId}',
  description: 'The API mapping.',
  operationId: 'UpdateApiMapping',
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
      apiMappingId: z
        .string()
        .openapi({
          param: {
            name: 'apiMappingId',
            in: 'path',
            required: true,
            description: 'The API mapping identifier.',
            schema: { type: 'string' },
          },
        }),
      domainName: z
        .string()
        .openapi({
          param: {
            name: 'domainName',
            in: 'path',
            required: true,
            description: 'The domain name.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              apiId: z.string().openapi({ description: 'The identifier.' }),
              apiMappingKey: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression\'s associated selection key type.',
                }),
              stage: z
                .string()
                .exactOptional()
                .openapi({ description: 'A string with a length between [1-128].' }),
            })
            .openapi({ required: ['apiId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateApiMappingResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getV2ApisApiIdAuthorizersAuthorizerIdRoute = createRoute({
  method: 'get',
  path: '/v2/apis/{apiId}/authorizers/{authorizerId}',
  description: 'Gets an Authorizer.',
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
      apiId: z
        .string()
        .openapi({
          param: {
            name: 'apiId',
            in: 'path',
            required: true,
            description: 'The API identifier.',
            schema: { type: 'string' },
          },
        }),
      authorizerId: z
        .string()
        .openapi({
          param: {
            name: 'authorizerId',
            in: 'path',
            required: true,
            description: 'The authorizer identifier.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetAuthorizerResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const deleteV2ApisApiIdAuthorizersAuthorizerIdRoute = createRoute({
  method: 'delete',
  path: '/v2/apis/{apiId}/authorizers/{authorizerId}',
  description: 'Deletes an Authorizer.',
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
      apiId: z
        .string()
        .openapi({
          param: {
            name: 'apiId',
            in: 'path',
            required: true,
            description: 'The API identifier.',
            schema: { type: 'string' },
          },
        }),
      authorizerId: z
        .string()
        .openapi({
          param: {
            name: 'authorizerId',
            in: 'path',
            required: true,
            description: 'The authorizer identifier.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const patchV2ApisApiIdAuthorizersAuthorizerIdRoute = createRoute({
  method: 'patch',
  path: '/v2/apis/{apiId}/authorizers/{authorizerId}',
  description: 'Updates an Authorizer.',
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
      apiId: z
        .string()
        .openapi({
          param: {
            name: 'apiId',
            in: 'path',
            required: true,
            description: 'The API identifier.',
            schema: { type: 'string' },
          },
        }),
      authorizerId: z
        .string()
        .openapi({
          param: {
            name: 'authorizerId',
            in: 'path',
            required: true,
            description: 'The authorizer identifier.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              authorizerCredentialsArn: z
                .string()
                .exactOptional()
                .openapi({ description: 'Represents an Amazon Resource Name (ARN).' }),
              authorizerPayloadFormatVersion: z
                .string()
                .exactOptional()
                .openapi({ description: 'A string with a length between [1-64].' }),
              authorizerResultTtlInSeconds: z
                .int()
                .min(0)
                .max(3600)
                .exactOptional()
                .openapi({ description: 'An integer with a value between [0-3600].' }),
              authorizerType: z
                .enum(['REQUEST', 'JWT'])
                .exactOptional()
                .openapi({
                  description:
                    'The authorizer type. Specify REQUEST for a Lambda function using incoming request parameters. Specify JWT to use JSON Web Tokens (supported only for HTTP APIs).',
                }),
              authorizerUri: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A string representation of a URI with a length between [1-2048].',
                }),
              enableSimpleResponses: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Specifies whether a Lambda authorizer returns a response in a simple format. By default, a Lambda authorizer must return an IAM policy. If enabled, the Lambda authorizer can return a boolean value instead of an IAM policy. Supported only for HTTP APIs. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a>',
                }),
              identitySource: z
                .array(StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'The identity source for which authorization is requested. For the REQUEST authorizer, this is required when authorization caching is enabled. The value is a comma-separated string of one or more mapping expressions of the specified request parameters. For example, if an Auth header, a Name query string parameter are defined as identity sources, this value is $method.request.header.Auth, $method.request.querystring.Name. These parameters will be used to derive the authorization caching key and to perform runtime validation of the REQUEST authorizer by verifying all of the identity-related request parameters are present, not null and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function, otherwise, it returns a 401 Unauthorized response without calling the Lambda function. The valid value is a string of comma-separated mapping expressions of the specified request parameters. When the authorization caching is not enabled, this property is optional.',
                }),
              identityValidationExpression: z
                .string()
                .exactOptional()
                .openapi({ description: 'A string with a length between [0-1024].' }),
              jwtConfiguration: z
                .object({
                  Audience: ListOfStringSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'audience' },
                        description:
                          'A list of the intended recipients of the JWT. A valid JWT must provide an aud that matches at least one entry in this list. See <a href="https://tools.ietf.org/html/rfc7519#section-4.1.3">RFC 7519</a>. Supported only for HTTP APIs.',
                      }),
                  ).exactOptional(),
                  Issuer: UriWithLengthBetween1And2048Schema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'issuer' },
                        description:
                          'The base domain of the identity provider that issues JSON Web Tokens. For example, an Amazon Cognito user pool has the following format: https://cognito-idp.<replaceable>{region}</replaceable>.amazonaws.com/<replaceable>{userPoolId}</replaceable>\n               . Required for the JWT authorizer type. Supported only for HTTP APIs.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.',
                  required: [],
                }),
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'A string with a length between [1-128].' }),
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
      content: { 'application/json': { schema: UpdateAuthorizerResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const deleteV2ApisApiIdCorsRoute = createRoute({
  method: 'delete',
  path: '/v2/apis/{apiId}/cors',
  description: 'Deletes a CORS configuration.',
  operationId: 'DeleteCorsConfiguration',
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
      apiId: z
        .string()
        .openapi({
          param: {
            name: 'apiId',
            in: 'path',
            required: true,
            description: 'The API identifier.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV2ApisApiIdDeploymentsDeploymentIdRoute = createRoute({
  method: 'get',
  path: '/v2/apis/{apiId}/deployments/{deploymentId}',
  description: 'Gets a Deployment.',
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
      apiId: z
        .string()
        .openapi({
          param: {
            name: 'apiId',
            in: 'path',
            required: true,
            description: 'The API identifier.',
            schema: { type: 'string' },
          },
        }),
      deploymentId: z
        .string()
        .openapi({
          param: {
            name: 'deploymentId',
            in: 'path',
            required: true,
            description: 'The deployment ID.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDeploymentResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const deleteV2ApisApiIdDeploymentsDeploymentIdRoute = createRoute({
  method: 'delete',
  path: '/v2/apis/{apiId}/deployments/{deploymentId}',
  description: 'Deletes a Deployment.',
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
      apiId: z
        .string()
        .openapi({
          param: {
            name: 'apiId',
            in: 'path',
            required: true,
            description: 'The API identifier.',
            schema: { type: 'string' },
          },
        }),
      deploymentId: z
        .string()
        .openapi({
          param: {
            name: 'deploymentId',
            in: 'path',
            required: true,
            description: 'The deployment ID.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const patchV2ApisApiIdDeploymentsDeploymentIdRoute = createRoute({
  method: 'patch',
  path: '/v2/apis/{apiId}/deployments/{deploymentId}',
  description: 'Updates a Deployment.',
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
      apiId: z
        .string()
        .openapi({
          param: {
            name: 'apiId',
            in: 'path',
            required: true,
            description: 'The API identifier.',
            schema: { type: 'string' },
          },
        }),
      deploymentId: z
        .string()
        .openapi({
          param: {
            name: 'deploymentId',
            in: 'path',
            required: true,
            description: 'The deployment ID.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              description: z
                .string()
                .exactOptional()
                .openapi({ description: 'A string with a length between [0-1024].' }),
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
      content: { 'application/json': { schema: UpdateDeploymentResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getV2DomainnamesDomainNameRoute = createRoute({
  method: 'get',
  path: '/v2/domainnames/{domainName}',
  description: 'Gets a domain name.',
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
      domainName: z
        .string()
        .openapi({
          param: {
            name: 'domainName',
            in: 'path',
            required: true,
            description: 'The domain name.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDomainNameResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const deleteV2DomainnamesDomainNameRoute = createRoute({
  method: 'delete',
  path: '/v2/domainnames/{domainName}',
  description: 'Deletes a domain name.',
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
      domainName: z
        .string()
        .openapi({
          param: {
            name: 'domainName',
            in: 'path',
            required: true,
            description: 'The domain name.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const patchV2DomainnamesDomainNameRoute = createRoute({
  method: 'patch',
  path: '/v2/domainnames/{domainName}',
  description: 'Updates a domain name.',
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
      domainName: z
        .string()
        .openapi({
          param: {
            name: 'domainName',
            in: 'path',
            required: true,
            description: 'The domain name.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              domainNameConfigurations: z
                .array(DomainNameConfigurationSchema)
                .exactOptional()
                .openapi({ description: 'The domain name configurations.' }),
              mutualTlsAuthentication: z
                .object({
                  TruststoreUri: UriWithLengthBetween1And2048Schema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'truststoreUri' },
                        description:
                          'An Amazon S3 URL that specifies the truststore for mutual TLS authentication, for example, s3://<replaceable>bucket-name</replaceable>/<replaceable>key-name</replaceable>. The truststore can contain certificates from public or private certificate authorities. To update the truststore, upload a new version to S3, and then update your custom domain name to use the new version. To update the truststore, you must have permissions to access the S3 object.',
                      }),
                  ).exactOptional(),
                  TruststoreVersion: StringWithLengthBetween1And64Schema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'truststoreVersion' },
                        description:
                          'The version of the S3 object that contains your truststore. To specify a version, you must have versioning enabled for the S3 bucket.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The mutual TLS authentication configuration for a custom domain name.',
                  required: [],
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
      content: { 'application/json': { schema: UpdateDomainNameResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getV2ApisApiIdIntegrationsIntegrationIdRoute = createRoute({
  method: 'get',
  path: '/v2/apis/{apiId}/integrations/{integrationId}',
  description: 'Gets an Integration.',
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
      apiId: z
        .string()
        .openapi({
          param: {
            name: 'apiId',
            in: 'path',
            required: true,
            description: 'The API identifier.',
            schema: { type: 'string' },
          },
        }),
      integrationId: z
        .string()
        .openapi({
          param: {
            name: 'integrationId',
            in: 'path',
            required: true,
            description: 'The integration ID.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetIntegrationResultSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const deleteV2ApisApiIdIntegrationsIntegrationIdRoute = createRoute({
  method: 'delete',
  path: '/v2/apis/{apiId}/integrations/{integrationId}',
  description: 'Deletes an Integration.',
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
      apiId: z
        .string()
        .openapi({
          param: {
            name: 'apiId',
            in: 'path',
            required: true,
            description: 'The API identifier.',
            schema: { type: 'string' },
          },
        }),
      integrationId: z
        .string()
        .openapi({
          param: {
            name: 'integrationId',
            in: 'path',
            required: true,
            description: 'The integration ID.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const patchV2ApisApiIdIntegrationsIntegrationIdRoute = createRoute({
  method: 'patch',
  path: '/v2/apis/{apiId}/integrations/{integrationId}',
  description: 'Updates an Integration.',
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
      apiId: z
        .string()
        .openapi({
          param: {
            name: 'apiId',
            in: 'path',
            required: true,
            description: 'The API identifier.',
            schema: { type: 'string' },
          },
        }),
      integrationId: z
        .string()
        .openapi({
          param: {
            name: 'integrationId',
            in: 'path',
            required: true,
            description: 'The integration ID.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              connectionId: z
                .string()
                .exactOptional()
                .openapi({ description: 'A string with a length between [1-1024].' }),
              connectionType: z
                .enum(['INTERNET', 'VPC_LINK'])
                .exactOptional()
                .openapi({ description: 'Represents a connection type.' }),
              contentHandlingStrategy: z
                .enum(['CONVERT_TO_BINARY', 'CONVERT_TO_TEXT'])
                .exactOptional()
                .openapi({
                  description:
                    'Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs.',
                }),
              credentialsArn: z
                .string()
                .exactOptional()
                .openapi({ description: 'Represents an Amazon Resource Name (ARN).' }),
              description: z
                .string()
                .exactOptional()
                .openapi({ description: 'A string with a length between [0-1024].' }),
              integrationMethod: z
                .string()
                .exactOptional()
                .openapi({ description: 'A string with a length between [1-64].' }),
              integrationSubtype: z
                .string()
                .exactOptional()
                .openapi({ description: 'A string with a length between [1-128].' }),
              integrationType: z
                .enum(['AWS', 'HTTP', 'MOCK', 'HTTP_PROXY', 'AWS_PROXY'])
                .exactOptional()
                .openapi({ description: 'Represents an API method integration type.' }),
              integrationUri: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A string representation of a URI with a length between [1-2048].',
                }),
              passthroughBehavior: z
                .enum(['WHEN_NO_MATCH', 'NEVER', 'WHEN_NO_TEMPLATES'])
                .exactOptional()
                .openapi({
                  description:
                    'Represents passthrough behavior for an integration response. Supported only for WebSocket APIs.',
                }),
              payloadFormatVersion: z
                .string()
                .exactOptional()
                .openapi({ description: 'A string with a length between [1-64].' }),
              requestParameters: z
                .record(z.string(), StringWithLengthBetween1And512Schema)
                .exactOptional()
                .openapi({
                  description:
                    '<p>For WebSocket APIs, a key-value map specifying request parameters that are passed from the method request to the backend. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of method.request.<replaceable>{location}</replaceable>.<replaceable>{name}</replaceable>\n          , where \n            <replaceable>{location}</replaceable>\n           is querystring, path, or header; and \n            <replaceable>{name}</replaceable>\n           must be a valid and unique method request parameter name.</p> <p>For HTTP API integrations with a specified integrationSubtype, request parameters are a key-value map specifying parameters that are passed to AWS_PROXY integrations. You can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services.html">Working with AWS service integrations for HTTP APIs</a>.</p> <p>For HTTP API integrations without a specified integrationSubtype request parameters are a key-value map specifying how to transform HTTP requests before sending them to the backend. The key should follow the pattern &lt;action&gt;:&lt;header|querystring|path&gt;.&lt;location&gt; where action can be append, overwrite or remove. For values, you can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.</p>',
                }),
              requestTemplates: z
                .record(z.string(), StringWithLengthBetween0And32KSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression.',
                }),
              responseParameters: z
                .record(z.string(), IntegrationParametersSchema)
                .exactOptional()
                .openapi({
                  description:
                    'Supported only for HTTP APIs. You use response parameters to transform the HTTP response from a backend integration before returning the response to clients.',
                }),
              templateSelectionExpression: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information.',
                }),
              timeoutInMillis: z
                .int()
                .min(50)
                .max(30000)
                .exactOptional()
                .openapi({ description: 'An integer with a value between [50-30000].' }),
              tlsConfig: z
                .object({
                  ServerNameToVerify: StringWithLengthBetween1And512Schema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'serverNameToVerify' },
                        description:
                          "If you specify a server name, API Gateway uses it to verify the hostname on the integration's certificate. The server name is also included in the TLS handshake to support Server Name Indication (SNI) or virtual hosting.",
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.',
                  required: [],
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
      content: { 'application/json': { schema: UpdateIntegrationResultSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesIntegrationResponseIdRoute =
  createRoute({
    method: 'get',
    path: '/v2/apis/{apiId}/integrations/{integrationId}/integrationresponses/{integrationResponseId}',
    description: 'Gets an IntegrationResponses.',
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
        apiId: z
          .string()
          .openapi({
            param: {
              name: 'apiId',
              in: 'path',
              required: true,
              description: 'The API identifier.',
              schema: { type: 'string' },
            },
          }),
        integrationId: z
          .string()
          .openapi({
            param: {
              name: 'integrationId',
              in: 'path',
              required: true,
              description: 'The integration ID.',
              schema: { type: 'string' },
            },
          }),
        integrationResponseId: z
          .string()
          .openapi({
            param: {
              name: 'integrationResponseId',
              in: 'path',
              required: true,
              description: 'The integration response ID.',
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: GetIntegrationResponseResponseSchema } },
      },
      480: {
        description: 'NotFoundException',
        content: { 'application/json': { schema: NotFoundExceptionSchema } },
      },
      481: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
    },
  })

export const deleteV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesIntegrationResponseIdRoute =
  createRoute({
    method: 'delete',
    path: '/v2/apis/{apiId}/integrations/{integrationId}/integrationresponses/{integrationResponseId}',
    description: 'Deletes an IntegrationResponses.',
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
        apiId: z
          .string()
          .openapi({
            param: {
              name: 'apiId',
              in: 'path',
              required: true,
              description: 'The API identifier.',
              schema: { type: 'string' },
            },
          }),
        integrationId: z
          .string()
          .openapi({
            param: {
              name: 'integrationId',
              in: 'path',
              required: true,
              description: 'The integration ID.',
              schema: { type: 'string' },
            },
          }),
        integrationResponseId: z
          .string()
          .openapi({
            param: {
              name: 'integrationResponseId',
              in: 'path',
              required: true,
              description: 'The integration response ID.',
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      204: { description: 'Success' },
      480: {
        description: 'NotFoundException',
        content: { 'application/json': { schema: NotFoundExceptionSchema } },
      },
      481: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
    },
  })

export const patchV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesIntegrationResponseIdRoute =
  createRoute({
    method: 'patch',
    path: '/v2/apis/{apiId}/integrations/{integrationId}/integrationresponses/{integrationResponseId}',
    description: 'Updates an IntegrationResponses.',
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
        apiId: z
          .string()
          .openapi({
            param: {
              name: 'apiId',
              in: 'path',
              required: true,
              description: 'The API identifier.',
              schema: { type: 'string' },
            },
          }),
        integrationId: z
          .string()
          .openapi({
            param: {
              name: 'integrationId',
              in: 'path',
              required: true,
              description: 'The integration ID.',
              schema: { type: 'string' },
            },
          }),
        integrationResponseId: z
          .string()
          .openapi({
            param: {
              name: 'integrationResponseId',
              in: 'path',
              required: true,
              description: 'The integration response ID.',
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                contentHandlingStrategy: z
                  .enum(['CONVERT_TO_BINARY', 'CONVERT_TO_TEXT'])
                  .exactOptional()
                  .openapi({
                    description:
                      'Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs.',
                  }),
                integrationResponseKey: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression\'s associated selection key type.',
                  }),
                responseParameters: z
                  .record(z.string(), StringWithLengthBetween1And512Schema)
                  .exactOptional()
                  .openapi({
                    description:
                      '<p>For WebSocket APIs, a key-value map specifying request parameters that are passed from the method request to the backend. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of method.request.<replaceable>{location}</replaceable>.<replaceable>{name}</replaceable>\n          , where \n            <replaceable>{location}</replaceable>\n           is querystring, path, or header; and \n            <replaceable>{name}</replaceable>\n           must be a valid and unique method request parameter name.</p> <p>For HTTP API integrations with a specified integrationSubtype, request parameters are a key-value map specifying parameters that are passed to AWS_PROXY integrations. You can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services.html">Working with AWS service integrations for HTTP APIs</a>.</p> <p>For HTTP API integrations without a specified integrationSubtype request parameters are a key-value map specifying how to transform HTTP requests before sending them to the backend. The key should follow the pattern &lt;action&gt;:&lt;header|querystring|path&gt;.&lt;location&gt; where action can be append, overwrite or remove. For values, you can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.</p>',
                  }),
                responseTemplates: z
                  .record(z.string(), StringWithLengthBetween0And32KSchema)
                  .exactOptional()
                  .openapi({
                    description:
                      'A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression.',
                  }),
                templateSelectionExpression: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information.',
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
        content: { 'application/json': { schema: UpdateIntegrationResponseResponseSchema } },
      },
      480: {
        description: 'NotFoundException',
        content: { 'application/json': { schema: NotFoundExceptionSchema } },
      },
      481: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      482: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
      483: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
    },
  })

export const getV2ApisApiIdModelsModelIdRoute = createRoute({
  method: 'get',
  path: '/v2/apis/{apiId}/models/{modelId}',
  description: 'Gets a Model.',
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
      apiId: z
        .string()
        .openapi({
          param: {
            name: 'apiId',
            in: 'path',
            required: true,
            description: 'The API identifier.',
            schema: { type: 'string' },
          },
        }),
      modelId: z
        .string()
        .openapi({
          param: {
            name: 'modelId',
            in: 'path',
            required: true,
            description: 'The model ID.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetModelResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const deleteV2ApisApiIdModelsModelIdRoute = createRoute({
  method: 'delete',
  path: '/v2/apis/{apiId}/models/{modelId}',
  description: 'Deletes a Model.',
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
      apiId: z
        .string()
        .openapi({
          param: {
            name: 'apiId',
            in: 'path',
            required: true,
            description: 'The API identifier.',
            schema: { type: 'string' },
          },
        }),
      modelId: z
        .string()
        .openapi({
          param: {
            name: 'modelId',
            in: 'path',
            required: true,
            description: 'The model ID.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const patchV2ApisApiIdModelsModelIdRoute = createRoute({
  method: 'patch',
  path: '/v2/apis/{apiId}/models/{modelId}',
  description: 'Updates a Model.',
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
      apiId: z
        .string()
        .openapi({
          param: {
            name: 'apiId',
            in: 'path',
            required: true,
            description: 'The API identifier.',
            schema: { type: 'string' },
          },
        }),
      modelId: z
        .string()
        .openapi({
          param: {
            name: 'modelId',
            in: 'path',
            required: true,
            description: 'The model ID.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              contentType: z
                .string()
                .exactOptional()
                .openapi({ description: 'A string with a length between [1-256].' }),
              description: z
                .string()
                .exactOptional()
                .openapi({ description: 'A string with a length between [0-1024].' }),
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'A string with a length between [1-128].' }),
              schema: z
                .string()
                .exactOptional()
                .openapi({ description: 'A string with a length between [0-32768].' }),
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
      content: { 'application/json': { schema: UpdateModelResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getV2ApisApiIdRoutesRouteIdRoute = createRoute({
  method: 'get',
  path: '/v2/apis/{apiId}/routes/{routeId}',
  description: 'Gets a Route.',
  operationId: 'GetRoute',
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
      apiId: z
        .string()
        .openapi({
          param: {
            name: 'apiId',
            in: 'path',
            required: true,
            description: 'The API identifier.',
            schema: { type: 'string' },
          },
        }),
      routeId: z
        .string()
        .openapi({
          param: {
            name: 'routeId',
            in: 'path',
            required: true,
            description: 'The route ID.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetRouteResultSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const deleteV2ApisApiIdRoutesRouteIdRoute = createRoute({
  method: 'delete',
  path: '/v2/apis/{apiId}/routes/{routeId}',
  description: 'Deletes a Route.',
  operationId: 'DeleteRoute',
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
      apiId: z
        .string()
        .openapi({
          param: {
            name: 'apiId',
            in: 'path',
            required: true,
            description: 'The API identifier.',
            schema: { type: 'string' },
          },
        }),
      routeId: z
        .string()
        .openapi({
          param: {
            name: 'routeId',
            in: 'path',
            required: true,
            description: 'The route ID.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const patchV2ApisApiIdRoutesRouteIdRoute = createRoute({
  method: 'patch',
  path: '/v2/apis/{apiId}/routes/{routeId}',
  description: 'Updates a Route.',
  operationId: 'UpdateRoute',
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
      apiId: z
        .string()
        .openapi({
          param: {
            name: 'apiId',
            in: 'path',
            required: true,
            description: 'The API identifier.',
            schema: { type: 'string' },
          },
        }),
      routeId: z
        .string()
        .openapi({
          param: {
            name: 'routeId',
            in: 'path',
            required: true,
            description: 'The route ID.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              apiKeyRequired: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Specifies whether an API key is required for the route. Supported only for WebSocket APIs.',
                }),
              authorizationScopes: z
                .array(StringWithLengthBetween1And64Schema)
                .exactOptional()
                .openapi({
                  description:
                    'A list of authorization scopes configured on a route. The scopes are used with a JWT authorizer to authorize the method invocation. The authorization works by matching the route scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any route scope matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the route scope is configured, the client must provide an access token instead of an identity token for authorization purposes.',
                }),
              authorizationType: z
                .enum(['NONE', 'AWS_IAM', 'CUSTOM', 'JWT'])
                .exactOptional()
                .openapi({
                  description:
                    'The authorization type. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer. For HTTP APIs, valid values are NONE for open access, JWT for using JSON Web Tokens, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer.',
                }),
              authorizerId: z.string().exactOptional().openapi({ description: 'The identifier.' }),
              modelSelectionExpression: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information.',
                }),
              operationName: z
                .string()
                .exactOptional()
                .openapi({ description: 'A string with a length between [1-64].' }),
              requestModels: z
                .record(z.string(), StringWithLengthBetween1And128Schema)
                .exactOptional()
                .openapi({ description: 'The route models.' }),
              requestParameters: z
                .record(z.string(), ParameterConstraintsSchema)
                .exactOptional()
                .openapi({ description: 'The route parameters.' }),
              routeKey: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression\'s associated selection key type.',
                }),
              routeResponseSelectionExpression: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information.',
                }),
              target: z
                .string()
                .exactOptional()
                .openapi({ description: 'A string with a length between [1-128].' }),
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
      content: { 'application/json': { schema: UpdateRouteResultSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const deleteV2ApisApiIdRoutesRouteIdRequestparametersRequestParameterKeyRoute = createRoute({
  method: 'delete',
  path: '/v2/apis/{apiId}/routes/{routeId}/requestparameters/{requestParameterKey}',
  description: 'Deletes a route request parameter.',
  operationId: 'DeleteRouteRequestParameter',
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
      apiId: z
        .string()
        .openapi({
          param: {
            name: 'apiId',
            in: 'path',
            required: true,
            description: 'The API identifier.',
            schema: { type: 'string' },
          },
        }),
      requestParameterKey: z
        .string()
        .openapi({
          param: {
            name: 'requestParameterKey',
            in: 'path',
            required: true,
            description: 'The route request parameter key.',
            schema: { type: 'string' },
          },
        }),
      routeId: z
        .string()
        .openapi({
          param: {
            name: 'routeId',
            in: 'path',
            required: true,
            description: 'The route ID.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV2ApisApiIdRoutesRouteIdRouteresponsesRouteResponseIdRoute = createRoute({
  method: 'get',
  path: '/v2/apis/{apiId}/routes/{routeId}/routeresponses/{routeResponseId}',
  description: 'Gets a RouteResponse.',
  operationId: 'GetRouteResponse',
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
      apiId: z
        .string()
        .openapi({
          param: {
            name: 'apiId',
            in: 'path',
            required: true,
            description: 'The API identifier.',
            schema: { type: 'string' },
          },
        }),
      routeId: z
        .string()
        .openapi({
          param: {
            name: 'routeId',
            in: 'path',
            required: true,
            description: 'The route ID.',
            schema: { type: 'string' },
          },
        }),
      routeResponseId: z
        .string()
        .openapi({
          param: {
            name: 'routeResponseId',
            in: 'path',
            required: true,
            description: 'The route response ID.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetRouteResponseResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const deleteV2ApisApiIdRoutesRouteIdRouteresponsesRouteResponseIdRoute = createRoute({
  method: 'delete',
  path: '/v2/apis/{apiId}/routes/{routeId}/routeresponses/{routeResponseId}',
  description: 'Deletes a RouteResponse.',
  operationId: 'DeleteRouteResponse',
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
      apiId: z
        .string()
        .openapi({
          param: {
            name: 'apiId',
            in: 'path',
            required: true,
            description: 'The API identifier.',
            schema: { type: 'string' },
          },
        }),
      routeId: z
        .string()
        .openapi({
          param: {
            name: 'routeId',
            in: 'path',
            required: true,
            description: 'The route ID.',
            schema: { type: 'string' },
          },
        }),
      routeResponseId: z
        .string()
        .openapi({
          param: {
            name: 'routeResponseId',
            in: 'path',
            required: true,
            description: 'The route response ID.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const patchV2ApisApiIdRoutesRouteIdRouteresponsesRouteResponseIdRoute = createRoute({
  method: 'patch',
  path: '/v2/apis/{apiId}/routes/{routeId}/routeresponses/{routeResponseId}',
  description: 'Updates a RouteResponse.',
  operationId: 'UpdateRouteResponse',
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
      apiId: z
        .string()
        .openapi({
          param: {
            name: 'apiId',
            in: 'path',
            required: true,
            description: 'The API identifier.',
            schema: { type: 'string' },
          },
        }),
      routeId: z
        .string()
        .openapi({
          param: {
            name: 'routeId',
            in: 'path',
            required: true,
            description: 'The route ID.',
            schema: { type: 'string' },
          },
        }),
      routeResponseId: z
        .string()
        .openapi({
          param: {
            name: 'routeResponseId',
            in: 'path',
            required: true,
            description: 'The route response ID.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              modelSelectionExpression: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information.',
                }),
              responseModels: z
                .record(z.string(), StringWithLengthBetween1And128Schema)
                .exactOptional()
                .openapi({ description: 'The route models.' }),
              responseParameters: z
                .record(z.string(), ParameterConstraintsSchema)
                .exactOptional()
                .openapi({ description: 'The route parameters.' }),
              routeResponseKey: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression\'s associated selection key type.',
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
      content: { 'application/json': { schema: UpdateRouteResponseResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const deleteV2ApisApiIdStagesStageNameRoutesettingsRouteKeyRoute = createRoute({
  method: 'delete',
  path: '/v2/apis/{apiId}/stages/{stageName}/routesettings/{routeKey}',
  description: 'Deletes the RouteSettings for a stage.',
  operationId: 'DeleteRouteSettings',
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
      apiId: z
        .string()
        .openapi({
          param: {
            name: 'apiId',
            in: 'path',
            required: true,
            description: 'The API identifier.',
            schema: { type: 'string' },
          },
        }),
      routeKey: z
        .string()
        .openapi({
          param: {
            name: 'routeKey',
            in: 'path',
            required: true,
            description: 'The route key.',
            schema: { type: 'string' },
          },
        }),
      stageName: z
        .string()
        .openapi({
          param: {
            name: 'stageName',
            in: 'path',
            required: true,
            description:
              'The stage name. Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV2ApisApiIdStagesStageNameRoute = createRoute({
  method: 'get',
  path: '/v2/apis/{apiId}/stages/{stageName}',
  description: 'Gets a Stage.',
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
      apiId: z
        .string()
        .openapi({
          param: {
            name: 'apiId',
            in: 'path',
            required: true,
            description: 'The API identifier.',
            schema: { type: 'string' },
          },
        }),
      stageName: z
        .string()
        .openapi({
          param: {
            name: 'stageName',
            in: 'path',
            required: true,
            description:
              'The stage name. Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetStageResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const deleteV2ApisApiIdStagesStageNameRoute = createRoute({
  method: 'delete',
  path: '/v2/apis/{apiId}/stages/{stageName}',
  description: 'Deletes a Stage.',
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
      apiId: z
        .string()
        .openapi({
          param: {
            name: 'apiId',
            in: 'path',
            required: true,
            description: 'The API identifier.',
            schema: { type: 'string' },
          },
        }),
      stageName: z
        .string()
        .openapi({
          param: {
            name: 'stageName',
            in: 'path',
            required: true,
            description:
              'The stage name. Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const patchV2ApisApiIdStagesStageNameRoute = createRoute({
  method: 'patch',
  path: '/v2/apis/{apiId}/stages/{stageName}',
  description: 'Updates a Stage.',
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
      apiId: z
        .string()
        .openapi({
          param: {
            name: 'apiId',
            in: 'path',
            required: true,
            description: 'The API identifier.',
            schema: { type: 'string' },
          },
        }),
      stageName: z
        .string()
        .openapi({
          param: {
            name: 'stageName',
            in: 'path',
            required: true,
            description:
              'The stage name. Stage names can contain only alphanumeric characters, hyphens, and underscores, or be $default. Maximum length is 128 characters.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              accessLogSettings: z
                .object({
                  DestinationArn: ArnSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'destinationArn' },
                        description:
                          'The ARN of the CloudWatch Logs log group to receive access logs.',
                      }),
                  ).exactOptional(),
                  Format: StringWithLengthBetween1And1024Schema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'format' },
                        description:
                          'A single line format of the access logs of data, as specified by selected $context variables. The format must include at least $context.requestId.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'Settings for logging access in a stage.', required: [] }),
              autoDeploy: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Specifies whether updates to an API automatically trigger a new deployment. The default value is false.',
                }),
              clientCertificateId: z
                .string()
                .exactOptional()
                .openapi({ description: 'The identifier.' }),
              defaultRouteSettings: z
                .object({
                  DataTraceEnabled: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'dataTraceEnabled' },
                        description:
                          'Specifies whether (true) or not (false) data trace logging is enabled for this route. This property affects the log entries pushed to Amazon CloudWatch Logs. Supported only for WebSocket APIs.',
                      }),
                  ).exactOptional(),
                  DetailedMetricsEnabled: BooleanSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'detailedMetricsEnabled' },
                        description: 'Specifies whether detailed metrics are enabled.',
                      }),
                  ).exactOptional(),
                  LoggingLevel: LoggingLevelSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'loggingLevel' },
                        description:
                          'Specifies the logging level for this route: INFO, ERROR, or OFF. This property affects the log entries pushed to Amazon CloudWatch Logs. Supported only for WebSocket APIs.',
                      }),
                  ).exactOptional(),
                  ThrottlingBurstLimit: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'throttlingBurstLimit' },
                        description: 'Specifies the throttling burst limit.',
                      }),
                  ).exactOptional(),
                  ThrottlingRateLimit: DoubleSchema.and(
                    z
                      .any()
                      .openapi({
                        xml: { name: 'throttlingRateLimit' },
                        description: 'Specifies the throttling rate limit.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Represents a collection of route settings.',
                  required: [],
                }),
              deploymentId: z.string().exactOptional().openapi({ description: 'The identifier.' }),
              description: z
                .string()
                .exactOptional()
                .openapi({ description: 'A string with a length between [0-1024].' }),
              routeSettings: z
                .record(z.string(), RouteSettingsSchema)
                .exactOptional()
                .openapi({ description: 'The route settings map.' }),
              stageVariables: z
                .record(z.string(), StringWithLengthBetween0And2048Schema)
                .exactOptional()
                .openapi({ description: 'The stage variable map.' }),
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
      content: { 'application/json': { schema: UpdateStageResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getV2VpclinksVpcLinkIdRoute = createRoute({
  method: 'get',
  path: '/v2/vpclinks/{vpcLinkId}',
  description: 'Gets a VPC link.',
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
      vpcLinkId: z
        .string()
        .openapi({
          param: {
            name: 'vpcLinkId',
            in: 'path',
            required: true,
            description: 'The ID of the VPC link.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetVpcLinkResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const deleteV2VpclinksVpcLinkIdRoute = createRoute({
  method: 'delete',
  path: '/v2/vpclinks/{vpcLinkId}',
  description: 'Deletes a VPC link.',
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
      vpcLinkId: z
        .string()
        .openapi({
          param: {
            name: 'vpcLinkId',
            in: 'path',
            required: true,
            description: 'The ID of the VPC link.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteVpcLinkResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const patchV2VpclinksVpcLinkIdRoute = createRoute({
  method: 'patch',
  path: '/v2/vpclinks/{vpcLinkId}',
  description: 'Updates a VPC link.',
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
      vpcLinkId: z
        .string()
        .openapi({
          param: {
            name: 'vpcLinkId',
            in: 'path',
            required: true,
            description: 'The ID of the VPC link.',
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
                .openapi({ description: 'A string with a length between [1-128].' }),
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
      content: { 'application/json': { schema: UpdateVpcLinkResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const getV2ApisApiIdExportsSpecificationOutputTypeRoute = createRoute({
  method: 'get',
  path: '/v2/apis/{apiId}/exports/{specification}#outputType',
  operationId: 'ExportApi',
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
      apiId: z
        .string()
        .openapi({
          param: {
            name: 'apiId',
            in: 'path',
            required: true,
            description: 'The API identifier.',
            schema: { type: 'string' },
          },
        }),
      specification: z
        .string()
        .openapi({
          param: {
            name: 'specification',
            in: 'path',
            required: true,
            description:
              'The version of the API specification to use. OAS30, for OpenAPI 3.0, is the only supported value.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      exportVersion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'exportVersion',
            in: 'query',
            required: false,
            description:
              'The version of the API Gateway export algorithm. API Gateway uses the latest version by default. Currently, the only supported version is 1.0.',
            schema: { type: 'string' },
          },
        }),
      includeExtensions: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'includeExtensions',
            in: 'query',
            required: false,
            description:
              'Specifies whether to include <a href="https://docs.aws.amazon.com//apigateway/latest/developerguide/api-gateway-swagger-extensions.html">API Gateway extensions</a> in the exported API definition. API Gateway extensions are included by default.',
            schema: { type: 'boolean' },
          },
        }),
      outputType: z
        .string()
        .openapi({
          param: {
            name: 'outputType',
            in: 'query',
            required: true,
            description:
              'The output type of the exported definition file. Valid values are JSON and YAML.',
            schema: { type: 'string' },
          },
        }),
      stageName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'stageName',
            in: 'query',
            required: false,
            description:
              "The name of the API stage to export. If you don't specify this property, a representation of the latest API configuration is exported.",
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ExportApiResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const deleteV2ApisApiIdStagesStageNameCacheAuthorizersRoute = createRoute({
  method: 'delete',
  path: '/v2/apis/{apiId}/stages/{stageName}/cache/authorizers',
  description: 'Resets all authorizer cache entries on a stage. Supported only for HTTP APIs.',
  operationId: 'ResetAuthorizersCache',
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
      apiId: z
        .string()
        .openapi({
          param: {
            name: 'apiId',
            in: 'path',
            required: true,
            description: 'The API identifier.',
            schema: { type: 'string' },
          },
        }),
      stageName: z
        .string()
        .openapi({
          param: {
            name: 'stageName',
            in: 'path',
            required: true,
            description:
              'The stage name. Stage names can contain only alphanumeric characters, hyphens, and underscores, or be $default. Maximum length is 128 characters.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV2ApisApiIdModelsModelIdTemplateRoute = createRoute({
  method: 'get',
  path: '/v2/apis/{apiId}/models/{modelId}/template',
  description: 'Gets a model template.',
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
      apiId: z
        .string()
        .openapi({
          param: {
            name: 'apiId',
            in: 'path',
            required: true,
            description: 'The API identifier.',
            schema: { type: 'string' },
          },
        }),
      modelId: z
        .string()
        .openapi({
          param: {
            name: 'modelId',
            in: 'path',
            required: true,
            description: 'The model ID.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetModelTemplateResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getV2TagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/v2/tags/{resource-arn}',
  description: 'Gets a collection of Tag resources.',
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
      'resource-arn': z
        .string()
        .openapi({
          param: {
            name: 'resource-arn',
            in: 'path',
            required: true,
            description: 'The resource ARN for the tag.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetTagsResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postV2TagsResourceArnRoute = createRoute({
  method: 'post',
  path: '/v2/tags/{resource-arn}',
  description: 'Creates a new Tag resource to represent a tag.',
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
      'resource-arn': z
        .string()
        .openapi({
          param: {
            name: 'resource-arn',
            in: 'path',
            required: true,
            description: 'The resource ARN for the tag.',
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
                .record(z.string(), StringWithLengthBetween1And1600Schema)
                .exactOptional()
                .openapi({
                  description: 'Represents a collection of tags associated with the resource.',
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
      content: { 'application/json': { schema: TagResourceResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const deleteV2TagsResourceArnTagKeysRoute = createRoute({
  method: 'delete',
  path: '/v2/tags/{resource-arn}#tagKeys',
  description: 'Deletes a Tag.',
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
      'resource-arn': z
        .string()
        .openapi({
          param: {
            name: 'resource-arn',
            in: 'path',
            required: true,
            description: 'The resource ARN for the tag.',
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
            description: 'The Tag keys to delete',
            schema: { type: 'array', items: { $ref: '#/components/schemas/__string' } },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})
