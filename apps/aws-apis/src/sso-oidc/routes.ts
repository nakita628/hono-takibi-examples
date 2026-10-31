import { createRoute, z } from '@hono/zod-openapi'

const AccessTokenSchema = z.string().openapi('AccessToken')

const TokenTypeSchema = z.string().openapi('TokenType')

const ExpirationInSecondsSchema = z.int().openapi('ExpirationInSeconds')

const RefreshTokenSchema = z.string().openapi('RefreshToken')

const IdTokenSchema = z.string().openapi('IdToken')

const CreateTokenResponseSchema = z
  .object({
    accessToken: AccessTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'An opaque token to access IAM Identity Center resources assigned to a user.',
        }),
    ).exactOptional(),
    tokenType: TokenTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Used to notify the client that the returned token is an access token. The supported type is <code>BearerToken</code>.',
        }),
    ).exactOptional(),
    expiresIn: ExpirationInSecondsSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates the time in seconds when an access token will expire.',
        }),
    ).exactOptional(),
    refreshToken: RefreshTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Currently, <code>refreshToken</code> is not yet implemented and is not supported. For more information about the features and limitations of the current IAM Identity Center OIDC implementation, see <i>Considerations for Using this Guide</i> in the <a href="https://docs.aws.amazon.com/singlesignon/latest/OIDCAPIReference/Welcome.html">IAM Identity Center OIDC API Reference</a>.</p> <p>A token that, if present, can be used to refresh a previously issued access token that might have expired.</p>',
        }),
    ).exactOptional(),
    idToken: IdTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Currently, <code>idToken</code> is not yet implemented and is not supported. For more information about the features and limitations of the current IAM Identity Center OIDC implementation, see <i>Considerations for Using this Guide</i> in the <a href="https://docs.aws.amazon.com/singlesignon/latest/OIDCAPIReference/Welcome.html">IAM Identity Center OIDC API Reference</a>.</p> <p>The identifier of the user that associated with the access token, if present.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateTokenResponse')

const ScopeSchema = z.string().openapi('Scope')

const InvalidRequestExceptionSchema = z.any().openapi('InvalidRequestException')

const InvalidClientExceptionSchema = z.any().openapi('InvalidClientException')

const InvalidGrantExceptionSchema = z.any().openapi('InvalidGrantException')

const UnauthorizedClientExceptionSchema = z.any().openapi('UnauthorizedClientException')

const UnsupportedGrantTypeExceptionSchema = z.any().openapi('UnsupportedGrantTypeException')

const InvalidScopeExceptionSchema = z.any().openapi('InvalidScopeException')

const AuthorizationPendingExceptionSchema = z.any().openapi('AuthorizationPendingException')

const SlowDownExceptionSchema = z.any().openapi('SlowDownException')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const ExpiredTokenExceptionSchema = z.any().openapi('ExpiredTokenException')

const InternalServerExceptionSchema = z.any().openapi('InternalServerException')

const ClientIdSchema = z.string().openapi('ClientId')

const ClientSecretSchema = z.string().openapi('ClientSecret')

const LongTimeStampTypeSchema = z.int().openapi('LongTimeStampType')

const URISchema = z.string().openapi('URI')

const RegisterClientResponseSchema = z
  .object({
    clientId: ClientIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier string for each client. This client uses this identifier to get authenticated by the service in subsequent calls.',
        }),
    ).exactOptional(),
    clientSecret: ClientSecretSchema.and(
      z
        .any()
        .openapi({
          description:
            'A secret string generated for the client. The client will use this string to get authenticated by the service in subsequent calls.',
        }),
    ).exactOptional(),
    clientIdIssuedAt: LongTimeStampTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates the time at which the <code>clientId</code> and <code>clientSecret</code> were issued.',
        }),
    ).exactOptional(),
    clientSecretExpiresAt: LongTimeStampTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates the time at which the <code>clientId</code> and <code>clientSecret</code> will become invalid.',
        }),
    ).exactOptional(),
    authorizationEndpoint: URISchema.and(
      z.any().openapi({ description: 'The endpoint where the client can request authorization.' }),
    ).exactOptional(),
    tokenEndpoint: URISchema.and(
      z.any().openapi({ description: 'The endpoint where the client can get an access token.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RegisterClientResponse')

const InvalidClientMetadataExceptionSchema = z.any().openapi('InvalidClientMetadataException')

const DeviceCodeSchema = z.string().openapi('DeviceCode')

const UserCodeSchema = z.string().openapi('UserCode')

const IntervalInSecondsSchema = z.int().openapi('IntervalInSeconds')

const StartDeviceAuthorizationResponseSchema = z
  .object({
    deviceCode: DeviceCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The short-lived code that is used by the device when polling for a session token.',
        }),
    ).exactOptional(),
    userCode: UserCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A one-time user verification code. This is needed to authorize an in-use device.',
        }),
    ).exactOptional(),
    verificationUri: URISchema.and(
      z
        .any()
        .openapi({
          description:
            'The URI of the verification page that takes the <code>userCode</code> to authorize the device.',
        }),
    ).exactOptional(),
    verificationUriComplete: URISchema.and(
      z
        .any()
        .openapi({
          description:
            'An alternate URL that the client can use to automatically launch a browser. This process skips the manual step in which the user visits the verification page and enters their code.',
        }),
    ).exactOptional(),
    expiresIn: ExpirationInSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates the number of seconds in which the verification code will become invalid.',
        }),
    ).exactOptional(),
    interval: IntervalInSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates the number of seconds the client must wait between attempts when polling for a session.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartDeviceAuthorizationResponse')

const AuthCodeSchema = z.string().openapi('AuthCode')

const ClientNameSchema = z.string().openapi('ClientName')

const ClientTypeSchema = z.string().openapi('ClientType')

const GrantTypeSchema = z.string().openapi('GrantType')

const ScopesSchema = z.array(ScopeSchema).openapi('Scopes')

const CreateTokenRequestSchema = z
  .object({
    clientId: ClientIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier string for each client. This value should come from the persisted result of the <a>RegisterClient</a> API.',
        }),
    ),
    clientSecret: ClientSecretSchema.and(
      z
        .any()
        .openapi({
          description:
            'A secret string generated for the client. This value should come from the persisted result of the <a>RegisterClient</a> API.',
        }),
    ),
    grantType: GrantTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Supports grant types for the authorization code, refresh token, and device code request. For device code requests, specify the following value:</p> <p> <code>urn:ietf:params:oauth:grant-type:<i>device_code</i> </code> </p> <p>For information about how to obtain the device code, see the <a>StartDeviceAuthorization</a> topic.</p>',
        }),
    ),
    deviceCode: DeviceCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Used only when calling this API for the device code grant type. This short-term code is used to identify this authentication attempt. This should come from an in-memory reference to the result of the <a>StartDeviceAuthorization</a> API.',
        }),
    ).exactOptional(),
    code: AuthCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The authorization code received from the authorization service. This parameter is required to perform an authorization grant request to get access to a token.',
        }),
    ).exactOptional(),
    refreshToken: RefreshTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Currently, <code>refreshToken</code> is not yet implemented and is not supported. For more information about the features and limitations of the current IAM Identity Center OIDC implementation, see <i>Considerations for Using this Guide</i> in the <a href="https://docs.aws.amazon.com/singlesignon/latest/OIDCAPIReference/Welcome.html">IAM Identity Center OIDC API Reference</a>.</p> <p>The token used to obtain an access token in the event that the access token is invalid or expired.</p>',
        }),
    ).exactOptional(),
    scope: ScopesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of scopes that is defined by the client. Upon authorization, this list is used to restrict permissions when granting an access token.',
        }),
    ).exactOptional(),
    redirectUri: URISchema.and(
      z
        .any()
        .openapi({
          description:
            'The location of the application that will receive the authorization code. Users authorize the service to send the request to this location.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['clientId', 'clientSecret', 'grantType'], title: 'CreateTokenRequest' })
  .openapi('CreateTokenRequest')

const RegisterClientRequestSchema = z
  .object({
    clientName: ClientNameSchema.and(
      z.any().openapi({ description: 'The friendly name of the client.' }),
    ),
    clientType: ClientTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of client. The service supports only <code>public</code> as a client type. Anything other than public will be rejected by the service.',
        }),
    ),
    scopes: ScopesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of scopes that are defined by the client. Upon authorization, this list is used to restrict permissions when granting an access token.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['clientName', 'clientType'], title: 'RegisterClientRequest' })
  .openapi('RegisterClientRequest')

const StartDeviceAuthorizationRequestSchema = z
  .object({
    clientId: ClientIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier string for the client that is registered with IAM Identity Center. This value should come from the persisted result of the <a>RegisterClient</a> API operation.',
        }),
    ),
    clientSecret: ClientSecretSchema.and(
      z
        .any()
        .openapi({
          description:
            'A secret string that is generated for the client. This value should come from the persisted result of the <a>RegisterClient</a> API operation.',
        }),
    ),
    startUrl: URISchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL for the AWS access portal. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/using-the-portal.html">Using the AWS access portal</a> in the <i>IAM Identity Center User Guide</i>.',
        }),
    ),
  })
  .openapi({
    required: ['clientId', 'clientSecret', 'startUrl'],
    title: 'StartDeviceAuthorizationRequest',
  })
  .openapi('StartDeviceAuthorizationRequest')

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

export const postTokenRoute = createRoute({
  method: 'post',
  path: '/token',
  description:
    'Creates and returns an access token for the authorized client. The access token issued will be used to fetch short-term credentials for the assigned roles in the AWS account.',
  operationId: 'CreateToken',
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
              clientId: z
                .string()
                .openapi({
                  description:
                    'The unique identifier string for each client. This value should come from the persisted result of the <a>RegisterClient</a> API.',
                }),
              clientSecret: z
                .string()
                .openapi({
                  description:
                    'A secret string generated for the client. This value should come from the persisted result of the <a>RegisterClient</a> API.',
                }),
              grantType: z
                .string()
                .openapi({
                  description:
                    '<p>Supports grant types for the authorization code, refresh token, and device code request. For device code requests, specify the following value:</p> <p> <code>urn:ietf:params:oauth:grant-type:<i>device_code</i> </code> </p> <p>For information about how to obtain the device code, see the <a>StartDeviceAuthorization</a> topic.</p>',
                }),
              deviceCode: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Used only when calling this API for the device code grant type. This short-term code is used to identify this authentication attempt. This should come from an in-memory reference to the result of the <a>StartDeviceAuthorization</a> API.',
                }),
              code: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The authorization code received from the authorization service. This parameter is required to perform an authorization grant request to get access to a token.',
                }),
              refreshToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '<p>Currently, <code>refreshToken</code> is not yet implemented and is not supported. For more information about the features and limitations of the current IAM Identity Center OIDC implementation, see <i>Considerations for Using this Guide</i> in the <a href="https://docs.aws.amazon.com/singlesignon/latest/OIDCAPIReference/Welcome.html">IAM Identity Center OIDC API Reference</a>.</p> <p>The token used to obtain an access token in the event that the access token is invalid or expired.</p>',
                }),
              scope: z
                .array(ScopeSchema)
                .exactOptional()
                .openapi({
                  description:
                    'The list of scopes that is defined by the client. Upon authorization, this list is used to restrict permissions when granting an access token.',
                }),
              redirectUri: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The location of the application that will receive the authorization code. Users authorize the service to send the request to this location.',
                }),
            })
            .openapi({ required: ['clientId', 'clientSecret', 'grantType'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateTokenResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InvalidClientException',
      content: { 'application/json': { schema: InvalidClientExceptionSchema } },
    },
    482: {
      description: 'InvalidGrantException',
      content: { 'application/json': { schema: InvalidGrantExceptionSchema } },
    },
    483: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    484: {
      description: 'UnsupportedGrantTypeException',
      content: { 'application/json': { schema: UnsupportedGrantTypeExceptionSchema } },
    },
    485: {
      description: 'InvalidScopeException',
      content: { 'application/json': { schema: InvalidScopeExceptionSchema } },
    },
    486: {
      description: 'AuthorizationPendingException',
      content: { 'application/json': { schema: AuthorizationPendingExceptionSchema } },
    },
    487: {
      description: 'SlowDownException',
      content: { 'application/json': { schema: SlowDownExceptionSchema } },
    },
    488: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    489: {
      description: 'ExpiredTokenException',
      content: { 'application/json': { schema: ExpiredTokenExceptionSchema } },
    },
    490: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postClientRegisterRoute = createRoute({
  method: 'post',
  path: '/client/register',
  description:
    'Registers a client with IAM Identity Center. This allows clients to initiate device authorization. The output should be persisted for reuse through many authentication requests.',
  operationId: 'RegisterClient',
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
              clientName: z.string().openapi({ description: 'The friendly name of the client.' }),
              clientType: z
                .string()
                .openapi({
                  description:
                    'The type of client. The service supports only <code>public</code> as a client type. Anything other than public will be rejected by the service.',
                }),
              scopes: z
                .array(ScopeSchema)
                .exactOptional()
                .openapi({
                  description:
                    'The list of scopes that are defined by the client. Upon authorization, this list is used to restrict permissions when granting an access token.',
                }),
            })
            .openapi({ required: ['clientName', 'clientType'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RegisterClientResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InvalidScopeException',
      content: { 'application/json': { schema: InvalidScopeExceptionSchema } },
    },
    482: {
      description: 'InvalidClientMetadataException',
      content: { 'application/json': { schema: InvalidClientMetadataExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postDeviceAuthorizationRoute = createRoute({
  method: 'post',
  path: '/device_authorization',
  description:
    'Initiates device authorization by requesting a pair of verification codes from the authorization service.',
  operationId: 'StartDeviceAuthorization',
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
              clientId: z
                .string()
                .openapi({
                  description:
                    'The unique identifier string for the client that is registered with IAM Identity Center. This value should come from the persisted result of the <a>RegisterClient</a> API operation.',
                }),
              clientSecret: z
                .string()
                .openapi({
                  description:
                    'A secret string that is generated for the client. This value should come from the persisted result of the <a>RegisterClient</a> API operation.',
                }),
              startUrl: z
                .string()
                .openapi({
                  description:
                    'The URL for the AWS access portal. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/using-the-portal.html">Using the AWS access portal</a> in the <i>IAM Identity Center User Guide</i>.',
                }),
            })
            .openapi({ required: ['clientId', 'clientSecret', 'startUrl'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartDeviceAuthorizationResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InvalidClientException',
      content: { 'application/json': { schema: InvalidClientExceptionSchema } },
    },
    482: {
      description: 'UnauthorizedClientException',
      content: { 'application/json': { schema: UnauthorizedClientExceptionSchema } },
    },
    483: {
      description: 'SlowDownException',
      content: { 'application/json': { schema: SlowDownExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})
