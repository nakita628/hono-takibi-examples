import { createRoute, z } from '@hono/zod-openapi'

const UserIdSchema = z
  .string()
  .openapi({ example: 'fa7a0841-b533-4478-95533-0fde890c3483' })
  .openapi('UserId')

const TenantIdSchema = z.string().openapi({ example: 'customer1' }).openapi('TenantId')

const TimeJoinedSchema = z.number().openapi({ example: 1623918032231 }).openapi('TimeJoined')

const EmailSchema = z.string().openapi({ example: 'johndoe@gmail.com' }).openapi('Email')

const PhoneNumberSchema = z.string().openapi({ example: '+14155552671' }).openapi('PhoneNumber')

const ThirdPartyIdSchema = z.string().openapi({ example: 'google' }).openapi('ThirdPartyId')

const ThirdPartyUserIdSchema = z
  .string()
  .openapi({ example: 106347997792363870000 })
  .openapi('ThirdPartyUserId')

const RecipeIdSchema = z.enum(['emailpassword', 'passwordless', 'thirdparty']).openapi('RecipeId')

const AuthRecipeUserSchema = z
  .object({
    id: UserIdSchema.exactOptional(),
    isPrimaryUser: z.boolean().exactOptional().openapi({ example: true }),
    tenantIds: z.array(TenantIdSchema).exactOptional(),
    timeJoined: TimeJoinedSchema.exactOptional(),
    emails: z.array(EmailSchema).exactOptional(),
    phoneNumbers: z.array(PhoneNumberSchema).exactOptional(),
    thirdParty: z
      .array(
        z
          .object({
            id: ThirdPartyIdSchema.exactOptional(),
            userId: ThirdPartyUserIdSchema.exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    loginMethods: z
      .array(
        z
          .object({
            tenantIds: z.array(TenantIdSchema).exactOptional(),
            recipeUserId: UserIdSchema.exactOptional(),
            verified: z.boolean().exactOptional().openapi({ example: true }),
            timeJoined: TimeJoinedSchema.exactOptional(),
            recipeId: RecipeIdSchema.exactOptional(),
            email: EmailSchema.exactOptional(),
            phoneNumber: PhoneNumberSchema.exactOptional(),
            thirdParty: z
              .object({
                id: ThirdPartyIdSchema.exactOptional(),
                userId: ThirdPartyUserIdSchema.exactOptional(),
              })
              .exactOptional()
              .openapi({ required: [] }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AuthRecipeUser')

const TokenSchema = z.string().openapi({ example: 'ZTRiOTBjNz...jI5MTZlODkxw' }).openapi('Token')

const EmailVerificationVerifyTokenRequestSchema = z
  .object({ userId: UserIdSchema.exactOptional(), email: EmailSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('EmailVerificationVerifyTokenRequest')

const IsVerifiedSchema = z.boolean().openapi({ example: true }).openapi('IsVerified')

const ThirdPartyEmailSchema = z
  .object({ id: EmailSchema.exactOptional(), isVerified: IsVerifiedSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('ThirdPartyEmail')

const PasswordSchema = z.string().openapi({ example: 'password123' }).openapi('Password')

const RoleSchema = z.string().openapi({ example: 'admin' }).openapi('Role')

const PaginationTokenSchema = z
  .string()
  .openapi({ example: 'ZmE3YTA4ND...OzE2MjM5MTgwMzIyMzE=' })
  .openapi('PaginationToken')

const CodeIdSchema = z
  .string()
  .openapi({
    description: 'Uniquely identifies a code',
    example: 'QZ0Mx9zG9cfqNXmPI0I/67r9bpKghUBDQZeMMbayi+I=',
  })
  .openapi('CodeId')

const DeviceIdSchema = z
  .string()
  .openapi({
    description:
      'A random identifier that should be stored on the device that started the sign in process.',
    example: 'TU/52WOcktSv99zqaAZuWJG9BSoS0aRLfCbep8rFEwk=',
  })
  .openapi('DeviceId')

const PreAuthSessionIdSchema = z
  .string()
  .openapi({
    description: 'A random identifier that can be used to identify the login attempt/device.',
    example: 'kFmkPQEAJtACiT2w/K8fndEuNm+XozJXSZSlWEr+iGs=',
  })
  .openapi('PreAuthSessionId')

const UserInputCodeSchema = z
  .string()
  .openapi({
    description: 'This can be used to authenticate the user when paired with the deviceId',
    example: 456123,
  })
  .openapi('UserInputCode')

const LinkCodeSchema = z
  .string()
  .openapi({
    description: 'URL-safe string that can be used to authenticate the user, without the deviceId',
    example: 'b10lbT_SnDC4flA6Fn7pE5TtG5k5NfigLef4QMBeGA8',
  })
  .openapi('LinkCode')

const CodeLifetimeSchema = z
  .number()
  .openapi({ description: 'The maximum lifetime of the code in milliseconds', example: 900000 })
  .openapi('CodeLifetime')

const StatusOKSchema = z.literal('OK').openapi('StatusOK')

const OauthClientSchema = z
  .object({
    clientId: z
      .string()
      .exactOptional()
      .openapi({ example: 'stcl_c6dd9189-33b8-4ec0-8aea-a0ffdaf75fcb' }),
    clientName: z.string().exactOptional().openapi({ example: 'Hello' }),
    clientSecret: z.string().exactOptional().openapi({ example: 'T98n1YIMWqr4wOM.~bV4HOPFmO' }),
    redirectUris: z
      .array(z.string())
      .exactOptional()
      .openapi({ example: ['http://localhost:3000/auth/callback/ory'] }),
    grantTypes: z
      .array(z.string())
      .exactOptional()
      .openapi({ example: ['authorization_code', 'refresh_token'] }),
    responseTypes: z
      .array(z.string())
      .exactOptional()
      .openapi({ example: ['code', 'id_token'] }),
    scope: z.string().exactOptional().openapi({ example: 'offline_access openid email' }),
    audience: z.array(z.string()).exactOptional().openapi({ example: [] }),
    policyUri: z.string().exactOptional().openapi({ example: '' }),
    allowedCorsOrigins: z.array(z.string()).exactOptional().openapi({ example: [] }),
    tosUri: z.string().exactOptional().openapi({ example: '' }),
    clientUri: z.string().exactOptional().openapi({ example: '' }),
    logoUri: z.string().exactOptional().openapi({ example: '' }),
    tokenEndpointAuthMethod: z.string().exactOptional().openapi({ example: 'client_secret_post' }),
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2025-02-24T08:14:40Z' }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2025-02-24T08:14:40.362463Z' }),
    postLogoutRedirectUris: z
      .array(z.string())
      .exactOptional()
      .openapi({ example: ['http://localhost:3000'] }),
    metadata: z.looseObject({}).exactOptional().openapi({ example: {} }),
    authorizationCodeGrantAccessTokenLifespan: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: '1h0m0s' }),
    authorizationCodeGrantIdTokenLifespan: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: '1h0m0s' }),
    authorizationCodeGrantRefreshTokenLifespan: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: '1h0m0s' }),
    clientCredentialsGrantAccessTokenLifespan: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: '1h0m0s' }),
    implicitGrantAccessTokenLifespan: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: '1h0m0s' }),
    implicitGrantIdTokenLifespan: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: '1h0m0s' }),
    refreshTokenGrantIdTokenLifespan: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: '1h0m0s' }),
    refreshTokenGrantAccessTokenLifespan: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: '1h0m0s' }),
    refreshTokenGrantRefreshTokenLifespan: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: '1h0m0s' }),
    enableRefreshTokenRotation: z.boolean().exactOptional().openapi({ example: false }),
  })
  .openapi({ required: [] })
  .openapi('OauthClient')

const UserMetadataSchema = z
  .looseObject({})
  .openapi({
    description: 'should be a JSON object (not a JSON literal nor an array)',
    example: { preferences: { theme: 'dark' }, notifications: { email: true }, todos: ['example'] },
  })
  .openapi('UserMetadata')

const UserMetadataUpdateSchema = z
  .looseObject({})
  .openapi({
    description: 'should be a JSON object (not a JSON literal nor an array)',
    example: { notifications: { sms: true }, todos: null },
  })
  .openapi('UserMetadataUpdate')

const UserDataInJWTSchema = z
  .looseObject({})
  .openapi({
    description: 'should be a JSON object (not a JSON literal nor an array)',
    example: { test: 123 },
  })
  .openapi('UserDataInJWT')

const UserDataInDatabaseSchema = z
  .looseObject({})
  .openapi({
    description: 'should be a JSON object (not a JSON literal nor an array)',
    example: { test: 123 },
  })
  .openapi('UserDataInDatabase')

const EnableAntiCsrfSchema = z.boolean().openapi({ example: false }).openapi('EnableAntiCsrf')

const HandleSchema = z
  .string()
  .openapi({ example: '68en6gd6-865b-4af6-ba00-96e5c153257d' })
  .openapi('Handle')

const MessageSchema = z.string().openapi({ example: 'Error Message' }).openapi('Message')

const SessionSchema = z
  .object({
    handle: HandleSchema.exactOptional(),
    userId: UserIdSchema.exactOptional(),
    userDataInJWT: UserDataInJWTSchema.exactOptional(),
    tenantId: TenantIdSchema.exactOptional(),
    recipeUserId: UserIdSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Session')

const ExpirySchema = z.number().openapi({ example: 1637262633029 }).openapi('Expiry')

const TimeCreatedSchema = z.number().openapi({ example: 1637262633029 }).openapi('TimeCreated')

const CookieInfoSchema = z
  .object({
    token: TokenSchema.exactOptional(),
    expiry: ExpirySchema.exactOptional(),
    createdTime: TimeCreatedSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CookieInfo')

const SessionHandlesSchema = z.array(HandleSchema).openapi('SessionHandles')

const CreateJWTPayloadSchema = z
  .looseObject({})
  .openapi({
    description: 'The payload of the JWT, should be a JSON object.',
    example: { 'custom-claim': '' },
  })
  .openapi('CreateJWTPayload')

const CreateJWTAlgorithmSchema = z
  .literal('RS256')
  .openapi({ description: 'The algorithm to use when creating the JWT.' })
  .openapi('CreateJWTAlgorithm')

const JwksDomainSchema = z
  .string()
  .openapi({
    description: 'This is used as the value for the issuer claim in the JWT payload.',
    example: 'https://api.test.com/',
  })
  .openapi('JwksDomain')

const JwtValiditySchema = z
  .number()
  .openapi({ description: 'Duration in seconds, used to calculate JWT expiry', example: 86400 })
  .openapi('JwtValidity')

const JwkSchema = z
  .object({
    alg: CreateJWTAlgorithmSchema.exactOptional(),
    kty: z.string().exactOptional().openapi({ example: 'RSA' }),
    use: z.string().exactOptional().openapi({ example: 'sig' }),
    kid: z.string().exactOptional().openapi({ description: 'Unique identifier for the JWK' }),
    x5c: z.array(z.string()).exactOptional().openapi({ description: 'X.509 Certificate Chain' }),
  })
  .openapi({ description: 'A JWK that can be used to verify a JWT', required: [] })
  .openapi('Jwk')

const UnauthorisedResponseSchema = z.literal('UNAUTHORISED').openapi('UnauthorisedResponse')

const UnauthorisedMessageResponseSchema = z
  .object({
    status: UnauthorisedResponseSchema.exactOptional(),
    message: MessageSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UnauthorisedMessageResponse')

const HelloResponseSchema = z.literal('Hello').openapi('HelloResponse')

const StatusOKResponseSchema = z
  .object({ status: z.literal('OK').exactOptional() })
  .openapi({ required: [] })
  .openapi('StatusOKResponse')

const WrongCredentialsResponseSchema = z
  .object({ status: z.literal('WRONG_CREDENTIALS_ERROR').exactOptional() })
  .openapi({ required: [] })
  .openapi('WrongCredentialsResponse')

const UnknownUserIdResponseSchema = z
  .object({ status: z.literal('UNKNOWN_USER_ID_ERROR').exactOptional() })
  .openapi({ required: [] })
  .openapi('UnknownUserIdResponse')

const UnknownRoleResponseSchema = z
  .object({ status: z.literal('UNKNOWN_ROLE_ERROR').exactOptional() })
  .openapi({ required: [] })
  .openapi('UnknownRoleResponse')

const TokenTheftResponseSchema = z.literal('TOKEN_THEFT_DETECTED').openapi('TokenTheftResponse')

const TryRefreshTokenResponseSchema = z
  .literal('TRY_REFRESH_TOKEN')
  .openapi('TryRefreshTokenResponse')

const InternalErrorSchema = z.literal('Internal Error').openapi('InternalError')

const NotFoundSchema = z.literal('Not Found').openapi('NotFound')

const MethodNotSupportedSchema = z.literal('Method not supported').openapi('MethodNotSupported')

const InvalidJSONSchema = z.string().openapi('InvalidJSON')

const RequestUnauthorisedSchema = z.literal('Invalid API key').openapi('RequestUnauthorised')

const LicenseErrorSchema = z.literal('License Error').openapi('LicenseError')

const ThirdPartyProviderConfigSchema = z
  .object({
    thirdPartyId: z.string(),
    name: z.string().exactOptional(),
    clients: z
      .array(
        z
          .object({
            clientType: z.string().exactOptional(),
            clientId: z.string().exactOptional(),
            clientSecret: z.string().exactOptional(),
            scope: z.array(z.string()).exactOptional(),
            forcePKCE: z.boolean().exactOptional(),
            additionalConfig: z.looseObject({}).exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    authorizationEndpoint: z.string().exactOptional(),
    authorizationEndpointQueryParams: z.looseObject({}).exactOptional(),
    tokenEndpoint: z.string().exactOptional(),
    tokenEndpointBodyParams: z.looseObject({}).exactOptional(),
    userInfoEndpoint: z.string().exactOptional(),
    userInfoEndpointQueryParams: z.looseObject({}).exactOptional(),
    userInfoEndpointHeaders: z.looseObject({}).exactOptional(),
    jwksURI: z.string().exactOptional(),
    oidcDiscoveryEndpoint: z.string().exactOptional(),
    requireEmail: z.boolean().default(true).exactOptional(),
    userInfoMap: z
      .object({
        fromIdTokenPayload: z
          .object({
            userId: z.string().exactOptional(),
            email: z.string().exactOptional(),
            emailVerified: z.string().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        fromUserInfoAPI: z
          .object({
            userId: z.string().exactOptional(),
            email: z.string().exactOptional(),
            emailVerified: z.string().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: ['thirdPartyId'] })
  .openapi('ThirdPartyProviderConfig')

const FirstFactorsSchema = z
  .array(z.string().openapi({ example: 'emailpassword' }))
  .openapi('FirstFactors')

const RequiredSecondaryFactorsSchema = z
  .array(z.string().openapi({ example: 'otp-phone' }))
  .openapi('RequiredSecondaryFactors')

const TenantInputSchema = z
  .object({
    emailPasswordEnabled: z.boolean().exactOptional(),
    thirdPartyEnabled: z.boolean().exactOptional(),
    passwordlessEnabled: z.boolean().exactOptional(),
    firstFactors: FirstFactorsSchema.exactOptional(),
    requiredSecondaryFactors: RequiredSecondaryFactorsSchema.exactOptional(),
    coreConfig: z.looseObject({}).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TenantInput')

const TenantInputV2Schema = z
  .object({
    firstFactors: FirstFactorsSchema.exactOptional(),
    requiredSecondaryFactors: RequiredSecondaryFactorsSchema.exactOptional(),
    coreConfig: z.looseObject({}).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TenantInputV2')

const TenantConfigSchema = z
  .object({
    tenantId: TenantIdSchema,
    emailPassword: z.object({ enabled: z.boolean() }).openapi({ required: ['enabled'] }),
    thirdParty: z
      .object({
        enabled: z.boolean(),
        providers: z.array(ThirdPartyProviderConfigSchema).exactOptional(),
      })
      .openapi({ required: ['enabled'] }),
    passwordless: z.object({ enabled: z.boolean() }).openapi({ required: ['enabled'] }),
    firstFactors: FirstFactorsSchema.exactOptional(),
    requiredSecondaryFactors: RequiredSecondaryFactorsSchema.exactOptional(),
    coreConfig: z.looseObject({}),
  })
  .openapi({ required: ['emailPassword', 'thirdParty', 'passwordless', 'coreConfig', 'tenantId'] })
  .openapi('TenantConfig')

const TenantConfigV2Schema = z
  .object({
    tenantId: TenantIdSchema,
    thirdParty: z
      .object({ providers: z.array(ThirdPartyProviderConfigSchema).exactOptional() })
      .openapi({ required: [] }),
    firstFactors: FirstFactorsSchema.exactOptional(),
    requiredSecondaryFactors: RequiredSecondaryFactorsSchema.exactOptional(),
    coreConfig: z.looseObject({}),
  })
  .openapi({ required: ['thirdParty', 'coreConfig', 'tenantId'] })
  .openapi('TenantConfigV2')

const OauthErrorSchema = z
  .object({
    status: z.literal('OAUTH_ERROR'),
    error: z.string(),
    errorDescription: z.string(),
    statusCode: z.int(),
  })
  .openapi({ required: ['status', 'error', 'errorDescription', 'statusCode'] })
  .openapi('OauthError')

const _400Response = {
  description: 'error code 400',
  content: { 'text/plain': { schema: InvalidJSONSchema } },
}

const _401Response = {
  description: 'error code 401',
  content: { 'text/plain': { schema: RequestUnauthorisedSchema } },
}

const _402Response = {
  description: 'error code 402',
  content: { 'text/plain': { schema: LicenseErrorSchema } },
}

const _404Response = {
  description: 'error code 404',
  content: { 'text/plain': { schema: NotFoundSchema } },
}

const _405Response = {
  description: 'error code 405',
  content: { 'text/plain': { schema: MethodNotSupportedSchema } },
}

const _500Response = {
  description: 'error code 500',
  content: { 'text/plain': { schema: InternalErrorSchema } },
}

const HelloResponse = {
  description: 'return a simple hello message',
  content: { 'application/json': { schema: HelloResponseSchema } },
}

const RidParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'rid',
      in: 'header',
      example: 'emailpassword',
      required: false,
      schema: { type: 'string' },
    },
  })

const ApiKeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'Authorization',
      in: 'header',
      example: 'ajs30Nlbs0DjvsdFIne934n8NVee5n',
      required: false,
      schema: { type: 'string' },
    },
  })

const ThirdPartyRidParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'rid',
      in: 'header',
      example: 'thirdparty',
      required: false,
      schema: { type: 'string' },
    },
  })

const PasswordlessRidParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'rid',
      in: 'header',
      example: 'passwordless',
      required: false,
      schema: { type: 'string' },
    },
  })

const EmailVerificationRidParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'rid',
      in: 'header',
      example: 'emailverification',
      required: false,
      schema: { type: 'string' },
    },
  })

const MultitenancyRidParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'rid',
      in: 'header',
      example: 'multitenancy',
      required: false,
      schema: { type: 'string' },
    },
  })

const OauthRidParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'rid',
      in: 'header',
      example: 'oauth',
      required: false,
      schema: { type: 'string' },
    },
  })

const UserMetadataRidParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'rid',
      in: 'header',
      example: 'usermetadata',
      required: false,
      schema: { type: 'string' },
    },
  })

const UserRolesRidParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'rid',
      in: 'header',
      example: 'userroles',
      required: false,
      schema: { type: 'string' },
    },
  })

const SessionRidParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'rid',
      in: 'header',
      example: 'session',
      required: false,
      schema: { type: 'string' },
    },
  })

const JwtRIDParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'rid',
      in: 'header',
      example: 'jwt',
      required: false,
      schema: { type: 'string' },
    },
  })

const UserIdMappingRidParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'rid',
      in: 'header',
      example: 'useridmapping',
      required: false,
      schema: { type: 'string' },
    },
  })

const DashboardRidParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'rid',
      in: 'header',
      example: 'dashboard',
      required: false,
      schema: { type: 'string' },
    },
  })

const TotpRidParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'rid',
      in: 'header',
      example: 'totp',
      required: false,
      schema: { type: 'string' },
    },
  })

const AccountLinkingRidParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'rid',
      in: 'header',
      example: 'accountlinking',
      required: false,
      schema: { type: 'string' },
    },
  })

const CdiVersionParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'cdi-version',
      in: 'header',
      description: 'X.Y of the X.Y.Z CDI version.',
      example: '5.2',
      schema: { type: 'string' },
      required: false,
    },
  })

const PaginationTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'paginationToken',
      in: 'query',
      example: 'ZmE3YTA4NDEtY...MjM5MTgwMzIyMzE=',
      schema: { type: 'string' },
      required: false,
    },
  })

const LimitParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.number(),
  )
  .exactOptional()
  .openapi({
    param: { name: 'limit', in: 'query', example: 1, schema: { type: 'number' }, required: false },
  })

const TimeJoinedOrderParamsSchema = z
  .enum(['ASC', 'DESC'])
  .exactOptional()
  .openapi({
    param: {
      name: 'timeJoinedOrder',
      in: 'query',
      schema: { type: 'string', enum: ['ASC', 'DESC'] },
      required: false,
    },
  })

const EmailParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'email',
      in: 'query',
      required: false,
      schema: { type: 'string', example: 'johndoe@gmail.com' },
    },
    example: 'johndoe@gmail.com',
  })

const UserIdParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'userId',
      in: 'query',
      required: false,
      schema: { type: 'string', example: 'fa7a0841-b533-4478-9253-0fde890c576' },
    },
    example: 'fa7a0841-b533-4478-9253-0fde890c576',
  })

const UserIdRequiredParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'userId',
      in: 'query',
      required: true,
      schema: { type: 'string', example: 'fa7a0841-b533-4478-9253-0fde890c576' },
    },
    example: 'fa7a0841-b533-4478-9253-0fde890c576',
  })

const RoleRequiredParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'role',
      in: 'query',
      required: true,
      schema: { type: 'string', example: 'admin' },
    },
    example: 'admin',
  })

const PermissionRequiredParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'permission',
      in: 'query',
      required: true,
      schema: { type: 'string', example: 'permission' },
    },
    example: 'permission',
  })

const IncludeRecipeIdsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'includeRecipeIds',
      in: 'query',
      required: false,
      description: 'The param should take an array of comma seperated strings',
      schema: { type: 'string', example: 'val1,val2,val3..' },
    },
    example: 'val1,val2,val3..',
  })

export const getAppidAppIdRecipeAccountlinkingUserPrimaryCheckRoute = createRoute({
  method: 'get',
  path: '/appid-<appId>/recipe/accountlinking/user/primary/check',
  tags: ['Account Linking Recipe'],
  description: 'Check if primary user can be created for given user id\n',
  operationId: 'canCreatePrimaryUser',
  request: {
    headers: z.object({
      rid: AccountLinkingRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    query: z.object({
      recipeUserId: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'recipeUserId',
            schema: { type: 'string', example: 'fa7a0841-b533-4478-9253-0fde890c576' },
            required: true,
          },
          example: 'fa7a0841-b533-4478-9253-0fde890c576',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Indicates success with the status and canCreatePrimaryUser properties',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                status: StatusOKSchema.exactOptional(),
                wasAlreadyAPrimaryUser: z.boolean().exactOptional().openapi({ example: true }),
              })
              .openapi({ required: [] }),
            z
              .object({
                status: z
                  .literal('ACCOUNT_INFO_ALREADY_ASSOCIATED_WITH_ANOTHER_PRIMARY_USER_ID_ERROR')
                  .exactOptional(),
                primaryUserId: z
                  .string()
                  .exactOptional()
                  .openapi({ example: 'fa7a0841-b533-4478-9253-0fde890c576' }),
                description: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
            z
              .object({
                status: z
                  .literal('RECIPE_USER_ID_ALREADY_LINKED_WITH_PRIMARY_USER_ID_ERROR')
                  .exactOptional(),
                primaryUserId: z
                  .string()
                  .exactOptional()
                  .openapi({ example: 'fa7a0841-b533-4478-9253-0fde890c576' }),
                description: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const getAppidAppIdRecipeAccountlinkingUserLinkCheckRoute = createRoute({
  method: 'get',
  path: '/appid-<appId>/recipe/accountlinking/user/link/check',
  tags: ['Account Linking Recipe'],
  description: 'Check if accounts can be linked for given primary and recipe user id\n',
  operationId: 'canLinkAccounts',
  request: {
    headers: z.object({
      rid: AccountLinkingRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    query: z.object({
      primaryUserId: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'primaryUserId',
            schema: { type: 'string', example: 'fa7a0841-b533-4478-9253-0fde890c576' },
            required: true,
          },
          example: 'fa7a0841-b533-4478-9253-0fde890c576',
        }),
      recipeUserId: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'recipeUserId',
            schema: { type: 'string', example: 'fa7a0841-b533-4478-9253-0fde890c576' },
            required: true,
          },
          example: 'fa7a0841-b533-4478-9253-0fde890c576',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Indicates success with the status prop',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                status: StatusOKSchema.exactOptional(),
                accountsAlreadyLinked: z.boolean().exactOptional().openapi({ example: true }),
              })
              .openapi({ required: [] }),
            z
              .object({
                status: z
                  .literal('ACCOUNT_INFO_ALREADY_ASSOCIATED_WITH_ANOTHER_PRIMARY_USER_ID_ERROR')
                  .exactOptional(),
                primaryUserId: z
                  .string()
                  .exactOptional()
                  .openapi({ example: 'fa7a0841-b533-4478-9253-0fde890c576' }),
                description: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
            z
              .object({
                status: z
                  .literal('RECIPE_USER_ID_ALREADY_LINKED_WITH_ANOTHER_PRIMARY_USER_ID_ERROR')
                  .exactOptional(),
                primaryUserId: z
                  .string()
                  .exactOptional()
                  .openapi({ example: 'fa7a0841-b533-4478-9253-0fde890c576' }),
                description: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
            z
              .object({ status: z.literal('INPUT_USER_IS_NOT_A_PRIMARY_USER').exactOptional() })
              .openapi({ required: [] }),
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const postAppidAppIdRecipeAccountlinkingUserPrimaryRoute = createRoute({
  method: 'post',
  path: '/appid-<appId>/recipe/accountlinking/user/primary',
  tags: ['Account Linking Recipe'],
  description: 'Create a primary user for given user id\n',
  operationId: 'createPrimaryUser',
  request: {
    headers: z.object({
      rid: AccountLinkingRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              recipeUserId: z.string().openapi({ example: 'fa7a0841-b533-4478-9253-0fde890c576' }),
            })
            .openapi({ required: ['recipeUserId'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Indicates success with the status and primaryUserId properties',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                status: StatusOKSchema.exactOptional(),
                wasAlreadyAPrimaryUser: z.boolean().exactOptional().openapi({ example: true }),
                user: AuthRecipeUserSchema.exactOptional(),
              })
              .openapi({ required: [] }),
            z
              .object({
                status: z
                  .literal('ACCOUNT_INFO_ALREADY_ASSOCIATED_WITH_ANOTHER_PRIMARY_USER_ID_ERROR')
                  .exactOptional(),
                primaryUserId: z
                  .string()
                  .exactOptional()
                  .openapi({ example: 'fa7a0841-b533-4478-9253-0fde890c576' }),
                description: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
            z
              .object({
                status: z
                  .literal('RECIPE_USER_ID_ALREADY_LINKED_WITH_PRIMARY_USER_ID_ERROR')
                  .exactOptional(),
                primaryUserId: z
                  .string()
                  .exactOptional()
                  .openapi({ example: 'fa7a0841-b533-4478-9253-0fde890c576' }),
                description: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    402: _402Response,
    404: _404Response,
    500: _500Response,
  },
})

export const postAppidAppIdRecipeAccountlinkingUserLinkRoute = createRoute({
  method: 'post',
  path: '/appid-<appId>/recipe/accountlinking/user/link',
  tags: ['Account Linking Recipe'],
  description: 'Link accounts for given primary and recipe user id\n',
  operationId: 'linkAccounts',
  request: {
    headers: z.object({
      rid: AccountLinkingRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              primaryUserId: z.string().openapi({ example: 'fa7a0841-b533-4478-9253-0fde890c576' }),
              recipeUserId: z.string().openapi({ example: 'fa7a0841-b533-4478-9253-0fde890c576' }),
            })
            .openapi({ required: ['primaryUserId', 'recipeUserId'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Indicates success with the status and accountsAlreadyLinked properties',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                status: StatusOKSchema.exactOptional(),
                accountsAlreadyLinked: z.boolean().exactOptional().openapi({ example: true }),
                user: AuthRecipeUserSchema.exactOptional(),
              })
              .openapi({ required: [] }),
            z
              .object({
                status: z
                  .literal('ACCOUNT_INFO_ALREADY_ASSOCIATED_WITH_ANOTHER_PRIMARY_USER_ID_ERROR')
                  .exactOptional(),
                primaryUserId: z
                  .string()
                  .exactOptional()
                  .openapi({ example: 'fa7a0841-b533-4478-9253-0fde890c576' }),
                description: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
            z
              .object({
                status: z
                  .literal('RECIPE_USER_ID_ALREADY_LINKED_WITH_ANOTHER_PRIMARY_USER_ID_ERROR')
                  .exactOptional(),
                primaryUserId: z
                  .string()
                  .exactOptional()
                  .openapi({ example: 'fa7a0841-b533-4478-9253-0fde890c576' }),
                user: AuthRecipeUserSchema.exactOptional(),
                description: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
            z
              .object({ status: z.literal('INPUT_USER_IS_NOT_A_PRIMARY_USER').exactOptional() })
              .openapi({ required: [] }),
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    402: _402Response,
    404: _404Response,
    500: _500Response,
  },
})

export const postAppidAppIdRecipeAccountlinkingUserUnlinkRoute = createRoute({
  method: 'post',
  path: '/appid-<appId>/recipe/accountlinking/user/unlink',
  tags: ['Account Linking Recipe'],
  description: 'Unlink accounts for given recipe user id\n',
  operationId: 'unlinkAccounts',
  request: {
    headers: z.object({
      rid: AccountLinkingRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              recipeUserId: z.string().openapi({ example: 'fa7a0841-b533-4478-9253-0fde890c576' }),
            })
            .openapi({ required: ['recipeUserId'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Indicates success with the status and accountsUnlinked properties',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                status: StatusOKSchema.exactOptional(),
                wasRecipeUserDeleted: z.boolean().exactOptional().openapi({ example: true }),
                wasLinked: z.boolean().exactOptional().openapi({ example: true }),
              })
              .openapi({ required: [] }),
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const putAppidAppIdRecipeTotpDeviceRoute = createRoute({
  method: 'put',
  path: '/appid-<appId>/recipe/totp/device',
  tags: ['Totp Recipe'],
  description: 'Update the name of a TOTP device for a user.\n',
  operationId: 'updateTotpDeviceName',
  request: {
    headers: z.object({
      rid: TotpRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              userId: UserIdSchema,
              existingDeviceName: z.string().openapi({ example: 'My Authy App' }),
              newDeviceName: z.string().openapi({ example: 'A better name for my TOTP device' }),
            })
            .openapi({ required: ['userId', 'existingDeviceName', 'newDeviceName'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Indicates success with the status property',
      content: {
        'application/json': {
          schema: z.xor([
            z.object({ status: StatusOKSchema.exactOptional() }).openapi({ required: [] }),
            z
              .object({ status: z.literal('UNKNOWN_DEVICE_ERROR').exactOptional() })
              .openapi({ required: [] }),
            z
              .object({ status: z.literal('DEVICE_ALREADY_EXISTS_ERROR').exactOptional() })
              .openapi({ required: [] }),
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const postAppidAppIdRecipeTotpDeviceRoute = createRoute({
  method: 'post',
  path: '/appid-<appId>/recipe/totp/device',
  tags: ['Totp Recipe'],
  description: 'Add a TOTP device for a user and enable TOTP if not already enabled.\n',
  operationId: 'createTotpDevice',
  request: {
    headers: z.object({
      rid: TotpRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              userId: UserIdSchema,
              deviceName: z.string().exactOptional().openapi({ example: 'My Authy App' }),
              skew: z.number().openapi({ example: 0 }),
              period: z.number().openapi({ example: 30 }),
            })
            .openapi({ required: ['userId', 'skew', 'period'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Indicates success with the status and secret properties',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                status: StatusOKSchema.exactOptional(),
                secret: z.string().exactOptional().openapi({ example: 'JBSWY3DPEHPK3PXP' }),
                deviceName: z.string().exactOptional().openapi({ example: 'd1' }),
              })
              .openapi({ required: [] }),
            z
              .object({ status: z.literal('DEVICE_ALREADY_EXISTS_ERROR').exactOptional() })
              .openapi({ required: [] }),
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const getAppidAppIdRecipeTotpDeviceListRoute = createRoute({
  method: 'get',
  path: '/appid-<appId>/recipe/totp/device/list',
  tags: ['Totp Recipe'],
  description: 'Retrieve a list of TOTP devices for a user.\n',
  operationId: 'getTotpDevices',
  request: {
    headers: z.object({
      rid: TotpRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    query: z.object({
      userId: z
        .string()
        .openapi({
          param: { in: 'query', name: 'userId', schema: { type: 'string' }, required: true },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Retrives all TOTP devices',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                status: StatusOKSchema,
                devices: z
                  .array(
                    z
                      .object({
                        name: z.string().exactOptional(),
                        period: z.number().exactOptional(),
                        skew: z.number().exactOptional(),
                        verified: z.boolean().exactOptional(),
                      })
                      .openapi({ required: [] }),
                  )
                  .exactOptional(),
              })
              .openapi({ required: ['status'] }),
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const postRecipeTotpDeviceImportRoute = createRoute({
  method: 'post',
  path: '/recipe/totp/device/import',
  tags: ['Totp Recipe'],
  description: 'Add a TOTP device for a user and enable TOTP if not already enabled.\n',
  operationId: 'importTotpDevice',
  request: {
    headers: z.object({
      rid: TotpRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              userId: UserIdSchema,
              deviceName: z.string().exactOptional().openapi({ example: 'My Authy App' }),
              skew: z.number().openapi({ example: 0 }),
              period: z.number().openapi({ example: 30 }),
              secretKey: z.string().openapi({ example: 'BSWY3DPEMOWNFUWJLDIWNDNDPONBIUFG' }),
            })
            .openapi({ required: ['userId', 'skew', 'period', 'secretKey'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Indicates success with the status and secret properties',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                status: StatusOKSchema.exactOptional(),
                deviceName: z.string().exactOptional().openapi({ example: 'd1' }),
              })
              .openapi({ required: [] }),
            z
              .object({ status: z.literal('DEVICE_ALREADY_EXISTS_ERROR').exactOptional() })
              .openapi({ required: [] }),
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const postAppidAppIdRecipeTotpDeviceRemoveRoute = createRoute({
  method: 'post',
  path: '/appid-<appId>/recipe/totp/device/remove',
  tags: ['Totp Recipe'],
  description:
    'Remove a TOTP device for a user. If all devices are removed, TOTP is disabled for the user.\n',
  operationId: 'removeTotpDevice',
  request: {
    headers: z.object({
      rid: TotpRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              userId: UserIdSchema,
              deviceName: z.string().openapi({ example: 'My Authy App' }),
            })
            .openapi({ required: ['userId', 'deviceName'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Indicates success with the status property',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                status: StatusOKSchema.exactOptional(),
                didDeviceExist: z.boolean().exactOptional().openapi({ example: true }),
              })
              .openapi({ required: [] }),
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const postAppidAppIdTenantIdRecipeTotpVerifyRoute = createRoute({
  method: 'post',
  path: '/appid-<appId>/<tenantId>/recipe/totp/verify',
  tags: ['Totp Recipe'],
  description: 'Check if a TOTP code is valid against any of the TOTP devices for a user.\n',
  operationId: 'verifyTotpCode',
  request: {
    headers: z.object({
      rid: TotpRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              userId: UserIdSchema,
              totp: z.string().openapi({ example: '123456' }),
              allowUnverifiedDevices: z.boolean().openapi({ example: false }),
            })
            .openapi({ required: ['userId', 'totp', 'allowUnverifiedDevices'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Indicates success with the status property',
      content: {
        'application/json': {
          schema: z.xor([
            z.object({ status: StatusOKSchema.exactOptional() }).openapi({ required: [] }),
            z
              .object({
                status: z.literal('INVALID_TOTP_ERROR').exactOptional(),
                currentNumberOfFailedAttempts: z.number().exactOptional().openapi({ example: 2 }),
                maxNumberOfFailedAttempts: z.number().exactOptional().openapi({ example: 5 }),
              })
              .openapi({ required: [] }),
            z
              .object({ status: z.literal('UNKNOWN_USER_ID_ERROR').exactOptional() })
              .openapi({ required: [] }),
            z
              .object({
                status: z.literal('LIMIT_REACHED_ERROR').exactOptional(),
                retryAfterMs: z.number().exactOptional().openapi({ example: 90000 }),
                currentNumberOfFailedAttempts: z.number().exactOptional().openapi({ example: 2 }),
                maxNumberOfFailedAttempts: z.number().exactOptional().openapi({ example: 5 }),
              })
              .openapi({ required: [] }),
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const postAppidAppIdTenantIdRecipeTotpDeviceVerifyRoute = createRoute({
  method: 'post',
  path: '/appid-<appId>/<tenantId>/recipe/totp/device/verify',
  tags: ['Totp Recipe'],
  description: 'Mark a TOTP device as verified if the given TOTP code is valid for that device.\n',
  operationId: 'verifyTotpDevice',
  request: {
    headers: z.object({
      rid: TotpRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              userId: UserIdSchema,
              deviceName: z.string().openapi({ example: 'My Authy App' }),
              totp: z.string().openapi({ example: '123456' }),
            })
            .openapi({ required: ['userId', 'deviceName', 'totp'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Indicates success with the status property',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                status: StatusOKSchema.exactOptional(),
                wasAlreadyVerified: z.boolean().exactOptional().openapi({ example: false }),
              })
              .openapi({ required: [] }),
            z
              .object({ status: z.literal('UNKNOWN_DEVICE_ERROR').exactOptional() })
              .openapi({ required: [] }),
            z
              .object({
                status: z.literal('INVALID_TOTP_ERROR').exactOptional(),
                currentNumberOfFailedAttempts: z.number().exactOptional().openapi({ example: 2 }),
                maxNumberOfFailedAttempts: z.number().exactOptional().openapi({ example: 5 }),
              })
              .openapi({ required: [] }),
            z
              .object({
                status: z.literal('LIMIT_REACHED_ERROR').exactOptional(),
                retryAfterMs: z.number().exactOptional().openapi({ example: 90000 }),
                currentNumberOfFailedAttempts: z.number().exactOptional().openapi({ example: 2 }),
                maxNumberOfFailedAttempts: z.number().exactOptional().openapi({ example: 5 }),
              })
              .openapi({ required: [] }),
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const getAppidAppIdRecipeUseridMapRoute = createRoute({
  method: 'get',
  path: '/appid-<appId>/recipe/userid/map',
  tags: ['UserIdMapping Recipe'],
  description: 'Retrieve a UserIdMapping\n',
  operationId: 'userIdMappingGetMapping',
  request: {
    headers: z.object({
      rid: UserIdMappingRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    query: z.object({
      userId: z
        .string()
        .openapi({
          param: { in: 'query', name: 'userId', schema: { type: 'string' }, required: true },
        }),
      userIdType: z
        .enum(['SUPERTOKENS', 'EXTERNAL', 'ANY'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'userIdType',
            schema: { type: 'string', enum: ['SUPERTOKENS', 'EXTERNAL', 'ANY'] },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Retrives a userId mapping',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                status: StatusOKSchema,
                superTokensUserId: UserIdSchema,
                externalUserId: z.string().openapi({ example: 'externalId' }),
                externalUserIdInfo: z
                  .string()
                  .exactOptional()
                  .openapi({ example: 'Info about external userId' }),
              })
              .openapi({ required: ['status', 'superTokensUserId', 'externalUserId'] }),
            z
              .object({ status: z.literal('UNKNOWN_MAPPING_ERROR').exactOptional() })
              .openapi({ required: [] }),
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const postAppidAppIdRecipeUseridMapRoute = createRoute({
  method: 'post',
  path: '/appid-<appId>/recipe/userid/map',
  tags: ['UserIdMapping Recipe'],
  description: 'Create a mapping between a SuperTokens userId and an external userId.\n',
  operationId: 'userIdMappingCreateMapping',
  request: {
    headers: z.object({
      rid: UserIdMappingRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              superTokensUserId: UserIdSchema,
              externalUserId: z.string().openapi({ example: 'externalId' }),
              externalUserIdInfo: z
                .string()
                .exactOptional()
                .openapi({ example: 'Info about external userId' }),
              force: z.boolean().exactOptional(),
            })
            .openapi({ required: ['superTokensUserId', 'externalUserId'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Indicates success with the status property',
      content: {
        'application/json': {
          schema: z.xor([
            z.object({ status: StatusOKSchema.exactOptional() }).openapi({ required: [] }),
            z
              .object({ status: z.literal('UNKNOWN_SUPERTOKENS_USER_ID_ERROR').exactOptional() })
              .openapi({ required: [] }),
            z
              .object({
                status: z.literal('USER_ID_MAPPING_ALREADY_EXISTS_ERROR').exactOptional(),
                doesSuperTokensUserIdExist: z.boolean().exactOptional(),
                doesExternalUserIdExist: z.boolean().exactOptional(),
              })
              .openapi({ required: [] }),
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const postAppidAppIdRecipeUseridMapRemoveRoute = createRoute({
  method: 'post',
  path: '/appid-<appId>/recipe/userid/map/remove',
  tags: ['UserIdMapping Recipe'],
  description: 'Delete a mapping between a SuperTokens userId and an external userId.\n',
  operationId: 'userIdMappingRemoveMapping',
  request: {
    headers: z.object({
      rid: UserIdMappingRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              userId: UserIdSchema,
              userIdType: z.enum(['SUPERTOKENS', 'EXTERNAL', 'ANY']).exactOptional(),
              force: z.boolean().exactOptional(),
            })
            .openapi({ required: ['userId'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Indicates success with the status property',
      content: {
        'application/json': {
          schema: z
            .object({
              status: StatusOKSchema.exactOptional(),
              didMappingExist: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const putAppidAppIdRecipeUseridExternalUserIdInfoRoute = createRoute({
  method: 'put',
  path: '/appid-<appId>/recipe/userid/external-user-id-info',
  tags: ['UserIdMapping Recipe'],
  description: 'Update or delete externalUserIdInfo\n',
  operationId: 'userIdMappingUpateExternalUserIdInfo',
  request: {
    headers: z.object({
      rid: UserIdMappingRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              userId: UserIdSchema,
              userIdType: z.enum(['SUPERTOKENS', 'EXTERNAL', 'ANY']).exactOptional(),
              externalUserIdInfo: z
                .string()
                .nullable()
                .openapi({ example: 'new external userId info' }),
            })
            .openapi({ required: ['userId', 'externalUserIdInfo'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Indicates success with the status property',
      content: {
        'application/json': {
          schema: z.xor([
            z.object({ status: StatusOKSchema.exactOptional() }).openapi({ required: [] }),
            z
              .object({ status: z.literal('UNKNOWN_MAPPING_ERROR').exactOptional() })
              .openapi({ required: [] }),
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const postAppidAppIdTenantIdRecipeSigninupCodeCheckRoute = createRoute({
  method: 'post',
  path: '/appid-<appId>/<tenantId>/recipe/signinup/code/check',
  tags: ['Passwordless Recipe'],
  description:
    'Tries to check if the passed userInputCode+deviceId combo or the linkCode is valid\n',
  operationId: 'passwordlessCheckCode',
  request: {
    headers: z.object({
      rid: PasswordlessRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({ preAuthSessionId: PreAuthSessionIdSchema, linkCode: LinkCodeSchema })
              .openapi({ required: ['preAuthSessionId', 'linkCode'] }),
            z
              .object({
                preAuthSessionId: PreAuthSessionIdSchema,
                deviceId: DeviceIdSchema,
                userInputCode: UserInputCodeSchema,
              })
              .openapi({ required: ['preAuthSessionId', 'deviceId', 'userInputCode'] }),
          ]),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Indicates success with the status property',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                status: StatusOKSchema.exactOptional(),
                consumedDevice: z
                  .object({
                    preAuthSessionId: PreAuthSessionIdSchema,
                    failedCodeInputAttemptCount: z.number().openapi({ example: 2 }),
                    email: EmailSchema.exactOptional(),
                    phoneNumber: PhoneNumberSchema.exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: ['preAuthSessionId', 'failedCodeInputAttemptCount'] }),
              })
              .openapi({ required: [] }),
            z
              .object({
                status: z
                  .enum(['INCORRECT_USER_INPUT_CODE_ERROR', 'EXPIRED_USER_INPUT_CODE_ERROR'])
                  .exactOptional(),
                failedCodeInputAttemptCount: z.number().exactOptional().openapi({ example: 2 }),
                maximumCodeInputAttempts: z.number().exactOptional().openapi({ example: 5 }),
              })
              .openapi({ required: [] }),
            z
              .object({ status: z.literal('RESTART_FLOW_ERROR').exactOptional() })
              .openapi({ required: [] }),
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const postAppidAppIdTenantIdRecipeSigninupCodeConsumeRoute = createRoute({
  method: 'post',
  path: '/appid-<appId>/<tenantId>/recipe/signinup/code/consume',
  tags: ['Passwordless Recipe'],
  description:
    'Tries to consume the passed userInputCode+deviceId combo or the linkCode to sign the user in\n',
  operationId: 'passwordlessTryUseCode',
  request: {
    headers: z.object({
      rid: PasswordlessRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({ preAuthSessionId: PreAuthSessionIdSchema, linkCode: LinkCodeSchema })
              .openapi({ required: ['preAuthSessionId', 'linkCode'] }),
            z
              .object({
                preAuthSessionId: PreAuthSessionIdSchema,
                deviceId: DeviceIdSchema,
                userInputCode: UserInputCodeSchema,
              })
              .openapi({ required: ['preAuthSessionId', 'deviceId', 'userInputCode'] }),
          ]),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Indicates success with the status property',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                status: StatusOKSchema.exactOptional(),
                createdNewUser: z.boolean().exactOptional().openapi({ example: true }),
                user: AuthRecipeUserSchema.exactOptional(),
                recipeUserId: UserIdSchema.exactOptional(),
                consumedDevice: z
                  .object({
                    preAuthSessionId: PreAuthSessionIdSchema,
                    failedCodeInputAttemptCount: z.number().openapi({ example: 2 }),
                    email: EmailSchema.exactOptional(),
                    phoneNumber: PhoneNumberSchema.exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: ['preAuthSessionId', 'failedCodeInputAttemptCount'] }),
              })
              .openapi({ required: [] }),
            z
              .object({
                status: z
                  .enum(['INCORRECT_USER_INPUT_CODE_ERROR', 'EXPIRED_USER_INPUT_CODE_ERROR'])
                  .exactOptional(),
                failedCodeInputAttemptCount: z.number().exactOptional().openapi({ example: 2 }),
                maximumCodeInputAttempts: z.number().exactOptional().openapi({ example: 5 }),
              })
              .openapi({ required: [] }),
            z
              .object({ status: z.literal('RESTART_FLOW_ERROR').exactOptional() })
              .openapi({ required: [] }),
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const postAppidAppIdTenantIdRecipeSigninupCodeRoute = createRoute({
  method: 'post',
  path: '/appid-<appId>/<tenantId>/recipe/signinup/code',
  tags: ['Passwordless Recipe'],
  description:
    'Starts a sign in process by requesting a linkCode and a deviceId + userInputCode combination the user can use to sign in.\nPassing the optional deviceId signifies a resend code flow.\n',
  operationId: 'passwordlessStartSignIn',
  request: {
    headers: z.object({
      rid: PasswordlessRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({ email: EmailSchema, userInputCode: UserInputCodeSchema.exactOptional() })
              .openapi({ example: { email: 'test@example.com' }, required: ['email'] }),
            z
              .object({
                phoneNumber: PhoneNumberSchema,
                userInputCode: UserInputCodeSchema.exactOptional(),
              })
              .openapi({ required: ['phoneNumber'] }),
            z
              .object({
                deviceId: DeviceIdSchema,
                userInputCode: UserInputCodeSchema.exactOptional(),
              })
              .openapi({ required: ['deviceId'] }),
          ]),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Starts the passwordless login process',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                status: StatusOKSchema.exactOptional(),
                preAuthSessionId: PreAuthSessionIdSchema.exactOptional(),
                codeId: CodeIdSchema.exactOptional(),
                deviceId: DeviceIdSchema.exactOptional(),
                userInputCode: UserInputCodeSchema.exactOptional(),
                linkCode: LinkCodeSchema.exactOptional(),
                timeCreated: TimeCreatedSchema.exactOptional(),
                codeLifetime: CodeLifetimeSchema.exactOptional(),
              })
              .openapi({ required: [] }),
            z
              .object({
                status: z
                  .enum(['RESTART_FLOW_ERROR', 'USER_INPUT_CODE_ALREADY_USED_ERROR'])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const postAppidAppIdTenantIdRecipeSigninupCodeRemoveRoute = createRoute({
  method: 'post',
  path: '/appid-<appId>/<tenantId>/recipe/signinup/code/remove',
  tags: ['Passwordless Recipe'],
  description: 'Revokes a code by id\n',
  operationId: 'passwordlessRevokeCode',
  request: {
    headers: z.object({
      rid: PasswordlessRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z.xor([
            z.object({ codeId: CodeIdSchema }).openapi({ required: ['codeId'] }),
            z
              .object({ preAuthSessionId: PreAuthSessionIdSchema })
              .openapi({ required: ['preAuthSessionId'] }),
          ]),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'The operation was successful',
      content: {
        'application/json': {
          schema: z.object({ status: StatusOKSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const getAppidAppIdTenantIdRecipeSigninupCodesRoute = createRoute({
  method: 'get',
  path: '/appid-<appId>/<tenantId>/recipe/signinup/codes',
  tags: ['Passwordless Recipe'],
  description: 'Lists all active passwordless codes of the user\n',
  operationId: 'passwordlessListCodes',
  request: {
    headers: z.object({
      rid: PasswordlessRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    query: z.object({
      email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'email',
            description:
              'Use this parameter to get information about all devices associated with an email (without the other query params)',
            schema: { type: 'string' },
            required: false,
          },
        }),
      phoneNumber: PhoneNumberSchema.openapi({
        param: {
          in: 'query',
          name: 'phoneNumber',
          description:
            'Use this parameter to get information about all devices associated with a phoneNumber (without the other query params)',
          schema: { $ref: '#/components/schemas/phoneNumber' },
          required: false,
        },
      }).exactOptional(),
      deviceId: DeviceIdSchema.openapi({
        param: {
          in: 'query',
          name: 'deviceId',
          description:
            'Use this parameter to get information about a single device (without the other query params)',
          schema: { $ref: '#/components/schemas/deviceId' },
          required: false,
        },
      }).exactOptional(),
      preAuthSessionId: PreAuthSessionIdSchema.openapi({
        param: {
          in: 'query',
          name: 'preAuthSessionId',
          description:
            'Use this parameter to get information about a single device (without the other query params)',
          schema: { $ref: '#/components/schemas/preAuthSessionId' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'List of all active passwordless codes of the user',
      content: {
        'application/json': {
          schema: z
            .object({
              status: StatusOKSchema.exactOptional(),
              devices: z
                .array(
                  z
                    .object({
                      preAuthSessionId: PreAuthSessionIdSchema.exactOptional(),
                      failedCodeInputAttemptCount: z
                        .number()
                        .exactOptional()
                        .openapi({ example: 2 }),
                      email: EmailSchema.exactOptional(),
                      phoneNumber: PhoneNumberSchema.exactOptional(),
                      codes: z
                        .array(
                          z
                            .object({
                              codeId: CodeIdSchema.exactOptional(),
                              timeCreated: TimeCreatedSchema.exactOptional(),
                              codeLifetime: CodeLifetimeSchema.exactOptional(),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const postAppidAppIdTenantIdRecipeSigninupCodesRemoveRoute = createRoute({
  method: 'post',
  path: '/appid-<appId>/<tenantId>/recipe/signinup/codes/remove',
  tags: ['Passwordless Recipe'],
  description: 'Revokes all codes issued for the user\n',
  operationId: 'passwordlessRevokeAllCodesOfUser',
  request: {
    headers: z.object({
      rid: PasswordlessRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z.xor([
            z.object({ email: EmailSchema }).openapi({ required: ['email'] }),
            z.object({ phoneNumber: PhoneNumberSchema }).openapi({ required: ['phoneNumber'] }),
          ]),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'The operation was successful',
      content: {
        'application/json': {
          schema: z.object({ status: StatusOKSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const getAppidAppIdTenantIdRecipeUserRoute = createRoute({
  method: 'get',
  path: '/appid-<appId>/<tenantId>/recipe/user⠀⠀',
  tags: ['Passwordless Recipe'],
  description:
    "Get a user's information.\n\nAPI is tenant specific if querying by email or phone number.\nIf querying by userId, tenantId will be ignored.\n\nNote that there is an invisible character at the end of the path, this was to avoid a conflict with the OpenAPI spec.\n",
  operationId: 'passwordlessGetUser',
  request: {
    headers: z.object({
      rid: PasswordlessRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    query: z.object({
      userId: UserIdParamsSchema,
      email: EmailSchema.openapi({
        param: {
          in: 'query',
          name: 'email',
          description: 'Use exactly one of phoneNumber, email or userId',
          schema: { $ref: '#/components/schemas/email' },
          required: false,
        },
      }).exactOptional(),
      phoneNumber: PhoneNumberSchema.openapi({
        param: {
          in: 'query',
          name: 'phoneNumber',
          description: 'Use exactly one of phoneNumber, email or userId',
          schema: { $ref: '#/components/schemas/phoneNumber' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: "Get a user's information.",
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                status: StatusOKSchema.exactOptional(),
                user: AuthRecipeUserSchema.exactOptional(),
              })
              .openapi({ required: [] }),
            z
              .object({
                status: z
                  .enum([
                    'UNKNOWN_USER_ID_ERROR',
                    'UNKNOWN_EMAIL_ERROR',
                    'UNKNOWN_PHONE_NUMBER_ERROR',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  deprecated: true,
})

export const putAppidAppIdTenantIdRecipeUserRoute = createRoute({
  method: 'put',
  path: '/appid-<appId>/<tenantId>/recipe/user⠀⠀',
  tags: ['Passwordless Recipe'],
  description:
    "Update a user's information.\nIf the email or phoneNumber is set to null the previous value will be deleted. If they are not set (i.e., undefined/missing from the request), they are left as-is.\n",
  operationId: 'passwordlessPutUser',
  request: {
    headers: z.object({
      rid: PasswordlessRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              recipeUserId: UserIdSchema.exactOptional(),
              email: EmailSchema.nullable().exactOptional(),
              phoneNumber: PhoneNumberSchema.nullable().exactOptional(),
            })
            .openapi({ required: ['userId'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: "update user's information",
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                status: z
                  .enum([
                    'OK',
                    'UNKNOWN_USER_ID_ERROR',
                    'EMAIL_ALREADY_EXISTS_ERROR',
                    'PHONE_NUMBER_ALREADY_EXISTS_ERROR',
                  ])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
            z
              .object({
                status: z
                  .enum(['EMAIL_CHANGE_NOT_ALLOWED_ERROR', 'PHONE_NUMBER_CHANGE_NOT_ALLOWED_ERROR'])
                  .exactOptional(),
                reason: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const postAppidAppIdTenantIdRecipeSigninRoute = createRoute({
  method: 'post',
  path: '/appid-<appId>/<tenantId>/recipe/signin',
  tags: ['EmailPassword Recipe'],
  description: 'Signin a user with email ID and password\n',
  operationId: 'emailPasswordSignin',
  request: {
    headers: z.object({
      rid: RidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              email: EmailSchema.exactOptional(),
              password: PasswordSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'signin response',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                status: StatusOKSchema.exactOptional(),
                user: AuthRecipeUserSchema.exactOptional(),
                recipeUserId: UserIdSchema.exactOptional(),
              })
              .openapi({ required: [] }),
            WrongCredentialsResponseSchema,
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const postAppidAppIdTenantIdRecipeSignupRoute = createRoute({
  method: 'post',
  path: '/appid-<appId>/<tenantId>/recipe/signup',
  tags: ['EmailPassword Recipe'],
  description: 'Signup a user with email ID and password\n',
  operationId: 'emailPasswordSignup',
  request: {
    headers: z.object({
      rid: RidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              email: EmailSchema.exactOptional(),
              password: PasswordSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'signup response',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                status: StatusOKSchema.exactOptional(),
                user: AuthRecipeUserSchema.exactOptional(),
                recipeUserId: UserIdSchema.exactOptional(),
              })
              .openapi({ required: [] }),
            z
              .object({ status: z.literal('EMAIL_ALREADY_EXISTS_ERROR').exactOptional() })
              .openapi({ required: [] }),
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const getAppidAppIdTenantIdRecipeUser2Route = createRoute({
  method: 'get',
  path: '/appid-<appId>/<tenantId>/recipe/user',
  tags: ['EmailPassword Recipe'],
  description:
    "Get a user's information\n\nAPI is tenant specific if querying by email.\nIf querying by userId, tenantId will be ignored.\n",
  operationId: 'emailPasswordGetUser',
  request: {
    headers: z.object({
      rid: RidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    query: z.object({
      email: EmailSchema.openapi({
        param: {
          in: 'query',
          name: 'email',
          description: 'use either email or userId, not both',
          schema: { $ref: '#/components/schemas/email' },
          required: false,
        },
      }).exactOptional(),
      userId: UserIdSchema.openapi({
        param: {
          in: 'query',
          name: 'userId',
          description: 'use either email or userId, not both',
          schema: { $ref: '#/components/schemas/userId' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: "get user's information",
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                status: StatusOKSchema.exactOptional(),
                user: AuthRecipeUserSchema.exactOptional(),
              })
              .openapi({ required: [] }),
            z
              .object({
                status: z.enum(['UNKNOWN_USER_ID_ERROR', 'UNKNOWN_EMAIL_ERROR']).exactOptional(),
              })
              .openapi({ required: [] }),
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  deprecated: true,
})

export const putAppidAppIdTenantIdRecipeUser2Route = createRoute({
  method: 'put',
  path: '/appid-<appId>/<tenantId>/recipe/user',
  tags: ['EmailPassword Recipe'],
  description: "Update a user's information\n",
  operationId: 'emailPasswordPutUser',
  request: {
    headers: z.object({
      rid: RidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              recipeUserId: UserIdSchema.exactOptional(),
              email: EmailSchema.exactOptional(),
              password: PasswordSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: "update user's information",
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                status: z
                  .enum(['OK', 'UNKNOWN_USER_ID_ERROR', 'EMAIL_ALREADY_EXISTS_ERROR'])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
            z
              .object({
                status: z.literal('EMAIL_CHANGE_NOT_ALLOWED_ERROR').exactOptional(),
                reason: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const postAppidAppIdTenantIdRecipeUserPasswordResetTokenRoute = createRoute({
  method: 'post',
  path: '/appid-<appId>/<tenantId>/recipe/user/password/reset/token',
  tags: ['EmailPassword Recipe'],
  description: 'Generate a new reset password token for this user\n',
  operationId: 'emailPasswordGetPasswordResetToken',
  request: {
    headers: z.object({
      rid: RidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ userId: UserIdSchema, email: EmailSchema })
            .openapi({ required: ['userId', 'email'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Generate a new reset password token for this user',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                status: StatusOKSchema.exactOptional(),
                token: TokenSchema.exactOptional(),
              })
              .openapi({ required: [] }),
            UnknownUserIdResponseSchema,
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const postAppidAppIdTenantIdRecipeUserPasswordResetRoute = createRoute({
  method: 'post',
  path: '/appid-<appId>/<tenantId>/recipe/user/password/reset',
  tags: ['EmailPassword Recipe'],
  description: 'Reset a password using password reset token\n',
  operationId: 'emailPasswordGetPasswordReset',
  request: {
    headers: z.object({
      rid: RidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              method: z.literal('token').exactOptional(),
              token: TokenSchema.exactOptional(),
              newPassword: z.string().exactOptional().openapi({ example: 'newpassword123' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Reset a password using password reset token',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                status: StatusOKSchema.exactOptional(),
                userId: UserIdSchema.exactOptional(),
              })
              .openapi({ required: [] }),
            z
              .object({ status: z.literal('RESET_PASSWORD_INVALID_TOKEN_ERROR').exactOptional() })
              .openapi({ required: [] }),
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  deprecated: true,
})

export const postAppidAppIdTenantIdRecipeUserPasswordhashImportRoute = createRoute({
  method: 'post',
  path: '/appid-<appId>/<tenantId>/recipe/user/passwordhash/import',
  tags: ['EmailPassword Recipe'],
  description: 'Import a user with email ID and password hash\n',
  operationId: 'userImport',
  request: {
    headers: z.object({
      rid: RidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              email: EmailSchema.exactOptional(),
              passwordHash: z.string().exactOptional().openapi({ example: 'passwordHash' }),
              hashingAlgorithm: z.enum(['argon2', 'bcrypt', 'firebase_scrypt']).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'import user response',
      content: {
        'application/json': {
          schema: z
            .object({
              status: StatusOKSchema.exactOptional(),
              user: AuthRecipeUserSchema.exactOptional(),
              didUserAlreadyExist: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const postAppidAppIdTenantIdRecipeUserPasswordResetTokenConsumeRoute = createRoute({
  method: 'post',
  path: '/appid-<appId>/<tenantId>/recipe/user/password/reset/token/consume',
  tags: ['EmailPassword Recipe'],
  description: 'Consume a password reset token\n',
  operationId: 'emailPasswordResetPasswordConsumeToken',
  request: {
    headers: z.object({
      rid: RidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z.object({ token: TokenSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Consume a password reset token',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                status: StatusOKSchema.exactOptional(),
                userId: UserIdSchema.exactOptional(),
                email: EmailSchema.exactOptional(),
              })
              .openapi({ required: [] }),
            z
              .object({ status: z.literal('RESET_PASSWORD_INVALID_TOKEN_ERROR').exactOptional() })
              .openapi({ required: [] }),
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const postAppidAppIdTenantIdRecipeSigninupRoute = createRoute({
  method: 'post',
  path: '/appid-<appId>/<tenantId>/recipe/signinup',
  tags: ['ThirdParty Recipe'],
  description: 'Signin/up a user\n',
  operationId: 'thirdPartySigninup',
  request: {
    headers: z.object({
      rid: ThirdPartyRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              thirdPartyId: ThirdPartyIdSchema.exactOptional(),
              thirdPartyUserId: ThirdPartyUserIdSchema.exactOptional(),
              email: ThirdPartyEmailSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Signin/up a user',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                status: StatusOKSchema.exactOptional(),
                createdNewUser: z.boolean().exactOptional().openapi({ example: true }),
                user: AuthRecipeUserSchema.exactOptional(),
                recipeUserId: UserIdSchema.exactOptional(),
              })
              .openapi({ required: [] }),
            z
              .object({
                status: z.literal('EMAIL_CHANGE_NOT_ALLOWED_ERROR').exactOptional(),
                reason: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const getAppidAppIdTenantIdRecipeUser3Route = createRoute({
  method: 'get',
  path: '/appid-<appId>/<tenantId>/recipe/user⠀',
  tags: ['ThirdParty Recipe'],
  description:
    "Get a user's information.\n\nAPI is tenant specific if querying by email.\nIf querying by userId, tenantId will be ignored.\n\nNote that there is an invisible character at the end of the path, this was to avoid a conflict with the OpenAPI spec.\n",
  operationId: 'thirdPartyGetUser',
  request: {
    headers: z.object({
      rid: ThirdPartyRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    query: z.object({
      userId: UserIdParamsSchema,
      thirdPartyId: ThirdPartyIdSchema.openapi({
        param: {
          in: 'query',
          name: 'thirdPartyId',
          description: 'Either use userId or thirdPartyId and thirdPartyUserId',
          schema: { $ref: '#/components/schemas/thirdPartyId' },
          required: false,
        },
      }).exactOptional(),
      thirdPartyUserId: ThirdPartyUserIdSchema.openapi({
        param: {
          in: 'query',
          name: 'thirdPartyUserId',
          description: 'Either use userId or thirdPartyId and thirdPartyUserId',
          schema: { $ref: '#/components/schemas/thirdPartyUserId' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: "Get a user's information.",
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                status: StatusOKSchema.exactOptional(),
                user: AuthRecipeUserSchema.exactOptional(),
              })
              .openapi({ required: [] }),
            z
              .object({
                status: z
                  .enum(['UNKNOWN_USER_ID_ERROR', 'UNKNOWN_THIRD_PARTY_USER_ERROR'])
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  deprecated: true,
})

export const getAppidAppIdTenantIdRecipeUsersByEmailRoute = createRoute({
  method: 'get',
  path: '/appid-<appId>/<tenantId>/recipe/users/by-email',
  tags: ['ThirdParty Recipe'],
  description: 'Get all users accounts associated with given email\n',
  operationId: 'thirdPartyGetUsersByEmail',
  request: {
    headers: z.object({
      rid: ThirdPartyRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    query: z.object({
      email: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'email',
            required: true,
            description: "User's email",
            schema: { type: 'string', example: 'john.doe@example.com' },
          },
          example: 'john.doe@example.com',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get all users associated with given email',
      content: {
        'application/json': {
          schema: z
            .object({
              status: StatusOKSchema.exactOptional(),
              users: z.array(AuthRecipeUserSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    500: _500Response,
  },
  deprecated: true,
})

export const postAppidAppIdTenantIdRecipeUserEmailVerifyTokenRoute = createRoute({
  method: 'post',
  path: '/appid-<appId>/<tenantId>/recipe/user/email/verify/token',
  tags: ['EmailVerification Recipe'],
  description: 'Generate a new email verification token for this user\n',
  operationId: 'emailVerificationVerifyToken',
  request: {
    headers: z.object({
      rid: EmailVerificationRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: { 'application/json': { schema: EmailVerificationVerifyTokenRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Generate a new email verification token for this user',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                status: StatusOKSchema.exactOptional(),
                token: TokenSchema.exactOptional(),
              })
              .openapi({ required: [] }),
            z
              .object({ status: z.literal('EMAIL_ALREADY_VERIFIED_ERROR').exactOptional() })
              .openapi({ required: [] }),
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const postAppidAppIdTenantIdRecipeUserEmailVerifyTokenRemoveRoute = createRoute({
  method: 'post',
  path: '/appid-<appId>/<tenantId>/recipe/user/email/verify/token/remove',
  tags: ['EmailVerification Recipe'],
  description: 'Remove all unused email verification tokens for this user\n',
  operationId: 'emailVerificationVerifyTokenRemove',
  request: {
    headers: z.object({
      rid: EmailVerificationRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: { 'application/json': { schema: EmailVerificationVerifyTokenRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'OK response',
      content: {
        'application/json': {
          schema: z.object({ status: z.literal('OK').exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const postAppidAppIdTenantIdRecipeUserEmailVerifyRoute = createRoute({
  method: 'post',
  path: '/appid-<appId>/<tenantId>/recipe/user/email/verify',
  tags: ['EmailVerification Recipe'],
  description: 'Verify an email\n',
  operationId: 'emailVerificationVerify',
  request: {
    headers: z.object({
      rid: EmailVerificationRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              method: z.literal('token').exactOptional(),
              token: TokenSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Verify an email',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                status: StatusOKSchema.exactOptional(),
                userId: UserIdSchema.exactOptional(),
                email: EmailSchema.exactOptional(),
              })
              .openapi({ required: [] }),
            z
              .object({
                status: z.literal('EMAIL_VERIFICATION_INVALID_TOKEN_ERROR').exactOptional(),
              })
              .openapi({ required: [] }),
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const getAppidAppIdRecipeUserEmailVerifyRoute = createRoute({
  method: 'get',
  path: '/appid-<appId>/recipe/user/email/verify',
  tags: ['EmailVerification Recipe'],
  description: 'Check if an email is verified\n',
  operationId: 'emailVerificationVerifyGet',
  request: {
    headers: z.object({
      rid: EmailVerificationRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    query: z.object({ userId: UserIdParamsSchema, email: EmailParamsSchema }),
  },
  responses: {
    200: {
      description: 'Verify an email',
      content: {
        'application/json': {
          schema: z
            .object({
              status: StatusOKSchema.exactOptional(),
              isVerified: IsVerifiedSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const postAppidAppIdRecipeUserEmailVerifyRemoveRoute = createRoute({
  method: 'post',
  path: '/appid-<appId>/recipe/user/email/verify/remove',
  tags: ['EmailVerification Recipe'],
  description: 'Unverify an email\n',
  operationId: 'emailVerificationVerifyRemove',
  request: {
    headers: z.object({
      rid: EmailVerificationRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: { 'application/json': { schema: EmailVerificationVerifyTokenRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'OK response',
      content: {
        'application/json': {
          schema: z.object({ status: z.literal('OK').exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const getAppidAppIdRecipeUserMetadataRoute = createRoute({
  method: 'get',
  path: '/appid-<appId>/recipe/user/metadata',
  tags: ['User Metadata Recipe'],
  description: 'Gets the stored metadata object of the user\n',
  operationId: 'userMetadataRead',
  request: {
    headers: z.object({
      rid: UserMetadataRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    query: z.object({ userId: UserIdRequiredParamsSchema }),
  },
  responses: {
    200: {
      description: 'The operation was successful',
      content: {
        'application/json': {
          schema: z
            .object({
              status: StatusOKSchema.exactOptional(),
              metadata: UserMetadataSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const putAppidAppIdRecipeUserMetadataRoute = createRoute({
  method: 'put',
  path: '/appid-<appId>/recipe/user/metadata',
  tags: ['User Metadata Recipe'],
  description:
    'Updates the metadata object stored about the user by doing a shallow merge of the stored and the update JSONs\nand removing properties set to null on the root level of the update object. The merged object is then reserialized and stored.\n\ne.g.:\n  - stored: `{ "preferences": { "theme":"dark" }, "notifications": { "email": true }, "todos": ["example"] }`\n\n  - update: `{ "notifications": { "sms": true }, "todos": null }`\n\n  - result: `{ "preferences": { "theme":"dark" }, "notifications": { "sms": true } }`\n',
  operationId: 'userMetadataUpdate',
  request: {
    headers: z.object({
      rid: UserMetadataRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              userId: UserIdSchema.exactOptional(),
              metadataUpdate: UserMetadataUpdateSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'The operation was successful',
      content: {
        'application/json': {
          schema: z
            .object({
              status: StatusOKSchema.exactOptional(),
              metadata: UserMetadataSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const postAppidAppIdRecipeUserMetadataRemoveRoute = createRoute({
  method: 'post',
  path: '/appid-<appId>/recipe/user/metadata/remove',
  tags: ['User Metadata Recipe'],
  description: 'Removes the entire metadata JSON stored about the user.\n',
  operationId: 'userMetadataDelete',
  request: {
    headers: z.object({
      rid: UserMetadataRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z.object({ userId: UserIdSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'The operation was successful',
      content: {
        'application/json': {
          schema: z.object({ status: StatusOKSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const putAppidAppIdTenantIdRecipeUserRoleRoute = createRoute({
  method: 'put',
  path: '/appid-<appId>/<tenantId>/recipe/user/role',
  tags: ['User Roles Recipe'],
  description: 'Creates a User Role mapping\n',
  operationId: 'addUserRole',
  request: {
    headers: z.object({
      rid: UserRolesRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ userId: UserIdSchema, role: RoleSchema })
            .openapi({ required: ['userId', 'role'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'The operation was successful',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                status: StatusOKSchema.exactOptional(),
                didUserAlreadyHaveRole: z.boolean().exactOptional().openapi({ example: true }),
              })
              .openapi({ required: [] }),
            UnknownRoleResponseSchema,
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const postAppidAppIdTenantIdRecipeUserRoleRemoveRoute = createRoute({
  method: 'post',
  path: '/appid-<appId>/<tenantId>/recipe/user/role/remove',
  tags: ['User Roles Recipe'],
  description: 'Removes a User Role mapping\n',
  operationId: 'removeUserRole',
  request: {
    headers: z.object({
      rid: UserRolesRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ userId: UserIdSchema, role: RoleSchema })
            .openapi({ required: ['userId', 'role'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'The operation was successful',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                status: StatusOKSchema.exactOptional(),
                didUserHaveRole: z.boolean().exactOptional().openapi({ example: true }),
              })
              .openapi({ required: [] }),
            UnknownRoleResponseSchema,
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const getAppidAppIdTenantIdRecipeUserRolesRoute = createRoute({
  method: 'get',
  path: '/appid-<appId>/<tenantId>/recipe/user/roles',
  tags: ['User Roles Recipe'],
  description: 'Retrive the roles associated with the user.\n',
  operationId: 'getUserRoles',
  request: {
    headers: z.object({
      rid: UserRolesRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    query: z.object({ userId: UserIdRequiredParamsSchema }),
  },
  responses: {
    200: {
      description: 'The operation was successful',
      content: {
        'application/json': {
          schema: z
            .object({
              status: StatusOKSchema.exactOptional(),
              roles: z.array(RoleSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const getAppidAppIdTenantIdRecipeRoleUsersRoute = createRoute({
  method: 'get',
  path: '/appid-<appId>/<tenantId>/recipe/role/users',
  tags: ['User Roles Recipe'],
  description: 'Retrive the users associated with the role.\n',
  operationId: 'getRoleUsers',
  request: {
    headers: z.object({
      rid: UserRolesRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    query: z.object({ role: RoleRequiredParamsSchema }),
  },
  responses: {
    200: {
      description: 'The operation was successful',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                status: StatusOKSchema.exactOptional(),
                users: z.array(UserIdSchema).exactOptional(),
              })
              .openapi({ required: [] }),
            UnknownRoleResponseSchema,
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const putAppidAppIdRecipeRoleRoute = createRoute({
  method: 'put',
  path: '/appid-<appId>/recipe/role',
  tags: ['User Roles Recipe'],
  description: 'Creates a role with permissions, can also be used to add permissions to a role\n',
  operationId: 'putRole',
  request: {
    headers: z.object({
      rid: UserRolesRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              role: RoleSchema,
              permissions: z.array(z.string().openapi({ example: 'permission' })).exactOptional(),
            })
            .openapi({ required: ['role'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'The operation was successful',
      content: {
        'application/json': {
          schema: z
            .object({
              status: StatusOKSchema.exactOptional(),
              createdNewRole: z.boolean().exactOptional().openapi({ example: true }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const getAppidAppIdRecipeRolePermissionsRoute = createRoute({
  method: 'get',
  path: '/appid-<appId>/recipe/role/permissions',
  tags: ['User Roles Recipe'],
  description: 'Retrive the permissions associated with a role\n',
  operationId: 'getRolePermissions',
  request: {
    headers: z.object({
      rid: UserRolesRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    query: z.object({ role: RoleRequiredParamsSchema }),
  },
  responses: {
    200: {
      description: 'The operation was successful',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                status: StatusOKSchema.exactOptional(),
                permissions: z.array(z.string().openapi({ example: 'permission' })).exactOptional(),
              })
              .openapi({ required: [] }),
            UnknownRoleResponseSchema,
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const postAppidAppIdRecipeRolePermissionsRemoveRoute = createRoute({
  method: 'post',
  path: '/appid-<appId>/recipe/role/permissions/remove',
  tags: ['User Roles Recipe'],
  description:
    'Removes permissions mapped to a role, if no permissions are passed all permissions mapped to the role are removed\n',
  operationId: 'removeRolePermissions',
  request: {
    headers: z.object({
      rid: UserRolesRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              role: RoleSchema,
              permissions: z.array(z.string().openapi({ example: 'permission' })).exactOptional(),
            })
            .openapi({ required: ['role'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'The operation was successful',
      content: {
        'application/json': {
          schema: z.xor([
            z.object({ status: StatusOKSchema.exactOptional() }).openapi({ required: [] }),
            UnknownRoleResponseSchema,
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const getAppidAppIdRecipePermissionRolesRoute = createRoute({
  method: 'get',
  path: '/appid-<appId>/recipe/permission/roles',
  tags: ['User Roles Recipe'],
  description: 'Retrive the roles associated with the permission\n',
  operationId: 'getPermissionRoles',
  request: {
    headers: z.object({
      rid: UserRolesRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    query: z.object({ permission: PermissionRequiredParamsSchema }),
  },
  responses: {
    200: {
      description: 'The operation was successful',
      content: {
        'application/json': {
          schema: z
            .object({
              status: StatusOKSchema.exactOptional(),
              roles: z.array(z.string().openapi({ example: 'admin' })).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const postAppidAppIdRecipeRoleRemoveRoute = createRoute({
  method: 'post',
  path: '/appid-<appId>/recipe/role/remove',
  tags: ['User Roles Recipe'],
  description: 'Deletes a role\n',
  operationId: 'removeRole',
  request: {
    headers: z.object({
      rid: UserRolesRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z.object({ role: RoleSchema }).openapi({ required: ['role'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'The operation was successful',
      content: {
        'application/json': {
          schema: z
            .object({
              status: StatusOKSchema.exactOptional(),
              didRoleExist: z.boolean().exactOptional().openapi({ example: true }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const getAppidAppIdRecipeRolesRoute = createRoute({
  method: 'get',
  path: '/appid-<appId>/recipe/roles',
  tags: ['User Roles Recipe'],
  description: 'Retrive all created roles\n',
  operationId: 'getRoles',
  request: {
    headers: z.object({
      rid: UserRolesRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The operation was successful',
      content: {
        'application/json': {
          schema: z
            .object({
              status: StatusOKSchema.exactOptional(),
              roles: z.array(z.string().openapi({ example: 'admin' })).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const postAppidAppIdTenantIdRecipeSessionRoute = createRoute({
  method: 'post',
  path: '/appid-<appId>/<tenantId>/recipe/session',
  tags: ['Session Recipe'],
  description: 'Create a new Session\n',
  operationId: 'createNewSession',
  request: {
    headers: z.object({
      rid: SessionRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              userId: UserIdSchema.exactOptional(),
              userDataInJWT: UserDataInJWTSchema.exactOptional(),
              userDataInDatabase: UserDataInDatabaseSchema.exactOptional(),
              enableAntiCsrf: EnableAntiCsrfSchema.exactOptional(),
              useDynamicSigningKey: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Decides if the token should be signed with a dynamic or static key, defaults to true',
                  example: false,
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Create a new Session',
      content: {
        'application/json': {
          schema: z
            .object({
              status: StatusOKSchema.exactOptional(),
              session: SessionSchema.exactOptional(),
              accessToken: CookieInfoSchema.exactOptional(),
              refreshToken: CookieInfoSchema.exactOptional(),
              antiCsrfToken: TokenSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const getAppidAppIdRecipeSessionRoute = createRoute({
  method: 'get',
  path: '/appid-<appId>/recipe/session',
  tags: ['Session Recipe'],
  description: 'Get user and session information for a given session handle\n',
  operationId: 'getSessionInfo',
  request: {
    headers: z.object({
      rid: SessionRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    query: z.object({
      sessionHandle: HandleSchema.openapi({
        param: {
          in: 'query',
          name: 'sessionHandle',
          schema: { $ref: '#/components/schemas/handle' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Get user and session information for a given session handle',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                status: StatusOKSchema.exactOptional(),
                userDataInDatabase: UserDataInDatabaseSchema.exactOptional(),
                userDataInJWT: UserDataInJWTSchema.exactOptional(),
                userId: UserIdSchema.exactOptional(),
                expiry: ExpirySchema.exactOptional(),
                timeCreated: TimeCreatedSchema.exactOptional(),
                sessionHandle: HandleSchema.exactOptional(),
                tenantId: TenantIdSchema.exactOptional(),
              })
              .openapi({ required: [] }),
            UnauthorisedMessageResponseSchema,
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const postAppidAppIdTenantIdRecipeSessionRemoveRoute = createRoute({
  method: 'post',
  path: '/appid-<appId>/<tenantId>/recipe/session/remove',
  tags: ['Session Recipe'],
  description:
    'Delete a sesion\n\nIf revoking session by `userId`, the sessions are cleared across all tenants by default.\n\nNote: If `revokeAcrossAllTenants` is set to `true`, this API can only be called from `public` tenant.\n',
  operationId: 'deleteSession',
  request: {
    headers: z.object({
      rid: SessionRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({ sessionHandles: SessionHandlesSchema.exactOptional() })
              .openapi({ required: [] }),
            z
              .object({ userId: UserIdSchema, revokeAcrossAllTenants: z.boolean().exactOptional() })
              .openapi({ required: ['userId'] }),
          ]),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Delete a session',
      content: {
        'application/json': {
          schema: z
            .object({
              status: StatusOKSchema.exactOptional(),
              sessionHandlesRevoked: SessionHandlesSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const postAppidAppIdRecipeSessionVerifyRoute = createRoute({
  method: 'post',
  path: '/appid-<appId>/recipe/session/verify',
  tags: ['Session Recipe'],
  description: 'Verify a Session\n',
  operationId: 'verifySession',
  request: {
    headers: z.object({
      rid: SessionRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              accessToken: TokenSchema.exactOptional(),
              enableAntiCsrf: EnableAntiCsrfSchema.exactOptional(),
              doAntiCsrfCheck: z.boolean().exactOptional().openapi({ example: false }),
              checkDatabase: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Decides if we always check if the session exists in the DB or just do token validation, defaults to false.',
                  example: false,
                }),
              antiCsrfToken: TokenSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Verify a session',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                status: StatusOKSchema.exactOptional(),
                session: SessionSchema.exactOptional(),
                accessToken: CookieInfoSchema.exactOptional(),
              })
              .openapi({ required: [] }),
            UnauthorisedMessageResponseSchema,
            z
              .object({
                status: TryRefreshTokenResponseSchema.exactOptional(),
                message: MessageSchema.exactOptional(),
              })
              .openapi({ required: [] }),
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const postAppidAppIdRecipeSessionRefreshRoute = createRoute({
  method: 'post',
  path: '/appid-<appId>/recipe/session/refresh',
  tags: ['Session Recipe'],
  description: 'Refresh a Session\n',
  operationId: 'refreshSession',
  request: {
    headers: z.object({
      rid: SessionRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              refreshToken: TokenSchema,
              enableAntiCsrf: EnableAntiCsrfSchema,
              antiCsrfToken: TokenSchema.exactOptional(),
              useDynamicSigningKey: z.boolean(),
            })
            .openapi({ required: ['refreshToken', 'enableAntiCsrf', 'useDynamicSigningKey'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Refresh a session',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                status: StatusOKSchema.exactOptional(),
                session: SessionSchema.exactOptional(),
                accessToken: CookieInfoSchema.exactOptional(),
                refreshToken: CookieInfoSchema.exactOptional(),
                antiCsrfToken: TokenSchema.exactOptional(),
              })
              .openapi({ required: [] }),
            z
              .object({
                status: TokenTheftResponseSchema.exactOptional(),
                session: z
                  .object({
                    handle: HandleSchema.exactOptional(),
                    userId: UserIdSchema.exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
              })
              .openapi({ required: [] }),
            UnauthorisedMessageResponseSchema,
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const getAppidAppIdTenantIdRecipeSessionUserRoute = createRoute({
  method: 'get',
  path: '/appid-<appId>/<tenantId>/recipe/session/user',
  tags: ['Session Recipe'],
  description:
    'Get session handles for a user\n\nBy default, the session handles are fetched across all tenants. Set `fetchAcrossAllTenants` to `false` to get sessionHandles for the user for a particular tenant.\n\nNote: If `fetchAcrossAllTenants` is set to `true`, this API can only be called from `public` tenant.\n',
  operationId: 'getUserSessionHandles',
  request: {
    headers: z.object({
      rid: SessionRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    query: z.object({
      userId: UserIdParamsSchema,
      fetchAcrossAllTenants: z
        .enum(['true', 'false'])
        .exactOptional()
        .openapi({
          param: {
            name: 'fetchAcrossAllTenants',
            schema: { type: 'string', enum: ['true', 'false'] },
            required: false,
            in: 'query',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get user Session Handles',
      content: {
        'application/json': {
          schema: z
            .object({
              status: StatusOKSchema.exactOptional(),
              sessionHandles: SessionHandlesSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const postAppidAppIdRecipeSessionRegenerateRoute = createRoute({
  method: 'post',
  path: '/appid-<appId>/recipe/session/regenerate',
  tags: ['Session Recipe'],
  description: 'Regenerate a session\n',
  operationId: 'regenerateSession',
  request: {
    headers: z.object({
      rid: SessionRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              accessToken: TokenSchema.exactOptional(),
              userDataInJWT: UserDataInJWTSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Regenerate user session',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                status: StatusOKSchema.exactOptional(),
                session: SessionSchema.exactOptional(),
                accessToken: CookieInfoSchema.exactOptional(),
              })
              .openapi({ required: [] }),
            UnauthorisedMessageResponseSchema,
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const getAppidAppIdRecipeSessionDataRoute = createRoute({
  method: 'get',
  path: '/appid-<appId>/recipe/session/data',
  tags: ['Session Recipe'],
  description: 'Get session data\n',
  operationId: 'getSessionData',
  request: {
    headers: z.object({
      rid: SessionRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    query: z.object({
      sessionHandle: HandleSchema.openapi({
        param: {
          in: 'query',
          name: 'sessionHandle',
          description: 'Users session handle',
          schema: { $ref: '#/components/schemas/handle' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Get Session Data',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                status: StatusOKSchema.exactOptional(),
                userDataInDatabase: UserDataInDatabaseSchema.exactOptional(),
              })
              .openapi({ required: [] }),
            UnauthorisedMessageResponseSchema,
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  deprecated: true,
})

export const putAppidAppIdRecipeSessionDataRoute = createRoute({
  method: 'put',
  path: '/appid-<appId>/recipe/session/data',
  tags: ['Session Recipe'],
  description: 'Change session data\n',
  operationId: 'putSessionData',
  request: {
    headers: z.object({
      rid: SessionRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              sessionHandle: HandleSchema.exactOptional(),
              userDataInDatabase: UserDataInDatabaseSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Change Session Data',
      content: {
        'application/json': {
          schema: z.xor([StatusOKResponseSchema, UnauthorisedMessageResponseSchema]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const postAppidAppIdRecipeJwtRoute = createRoute({
  method: 'post',
  path: '/appid-<appId>/recipe/jwt',
  tags: ['JWT Recipe'],
  description: 'Create a signed JWT\n',
  operationId: 'createSignedJWT',
  request: {
    headers: z.object({
      rid: JwtRIDParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              payload: CreateJWTPayloadSchema.exactOptional(),
              algorithm: CreateJWTAlgorithmSchema.exactOptional(),
              jwksDomain: JwksDomainSchema.exactOptional(),
              validity: JwtValiditySchema.exactOptional(),
              useStaticSigningKey: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Decides if the token should be signed with a dynamic or static key, defaults to true',
                  example: true,
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Create a signed JWT',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                status: StatusOKSchema.exactOptional(),
                jwt: z
                  .string()
                  .exactOptional()
                  .openapi({
                    example:
                      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
                  }),
              })
              .openapi({ required: [] }),
            z
              .object({ status: z.literal('UNSUPPORTED_ALGORITHM_ERROR').exactOptional() })
              .openapi({ required: [] }),
          ]),
        },
      },
    },
    400: _400Response,
    404: _404Response,
    500: _500Response,
  },
})

export const getAppidAppIdRecipeJwtJwksRoute = createRoute({
  method: 'get',
  path: '/appid-<appId>/recipe/jwt/jwks',
  tags: ['JWT Recipe'],
  description: 'Retrieve JWKs for JWT verification, containing both static and dynamic keys.\n',
  request: {
    headers: z.object({
      rid: JwtRIDParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Retrieve JWKs for JWT verification, containing both static and dynamic keys.',
      content: {
        'application/json': {
          schema: z
            .object({
              status: z.literal('OK').exactOptional(),
              keys: z.array(JwkSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    404: _404Response,
    500: _500Response,
  },
  deprecated: true,
})

export const getAppidAppIdWellKnownJwksJsonRoute = createRoute({
  method: 'get',
  path: '/appid-<appId>/.well-known/jwks.json',
  tags: ['Core'],
  description: 'Retrieve JWKs for JWT verification, containing both static and dynamic keys.\n',
  responses: {
    200: {
      description: 'Retrieve JWKs for JWT verification, containing both static and dynamic keys.',
      content: {
        'application/json': {
          schema: z.object({ keys: z.array(JwkSchema).exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    404: _404Response,
    500: _500Response,
  },
})

export const getAppidAppIdTenantIdRecipeJwtDataRoute = createRoute({
  method: 'get',
  path: '/appid-<appId>/<tenantId>/recipe/jwt/data',
  tags: ['Session Recipe'],
  description: 'Get JWT data for a session\n',
  operationId: 'getJWTData',
  request: {
    headers: z.object({
      rid: SessionRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    query: z.object({
      sessionHandle: HandleSchema.openapi({
        param: {
          in: 'query',
          name: 'sessionHandle',
          description: 'Users session handle',
          schema: { $ref: '#/components/schemas/handle' },
          required: false,
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Get JWT Data',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                status: StatusOKSchema.exactOptional(),
                userDataInJWT: UserDataInJWTSchema.exactOptional(),
              })
              .openapi({ required: [] }),
            UnauthorisedMessageResponseSchema,
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  deprecated: true,
})

export const putAppidAppIdTenantIdRecipeJwtDataRoute = createRoute({
  method: 'put',
  path: '/appid-<appId>/<tenantId>/recipe/jwt/data',
  tags: ['Session Recipe'],
  description: 'Change JWT data for a session\n',
  operationId: 'putJWTData',
  request: {
    headers: z.object({
      rid: SessionRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              sessionHandle: HandleSchema.exactOptional(),
              userDataInJWT: UserDataInJWTSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Change JWT Data for a session',
      content: {
        'application/json': {
          schema: z.xor([StatusOKResponseSchema, UnauthorisedMessageResponseSchema]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const putAppidAppIdRecipeDashboardUserRoute = createRoute({
  method: 'put',
  path: '/appid-<appId>/recipe/dashboard/user',
  tags: ['Dashboard Recipe'],
  description: "Update a user's email or password\n",
  operationId: 'updateDashboardUser',
  request: {
    headers: z.object({
      rid: DashboardRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                email: z.string().exactOptional().openapi({ example: 'test@example.com' }),
                newPassword: z.string().exactOptional().openapi({ example: 'password@123' }),
                newEmail: z.string().exactOptional().openapi({ example: 'test2@example.com' }),
              })
              .openapi({ required: [] }),
            z
              .object({
                userId: z.string().exactOptional().openapi({ example: 'ue21r-fw32r3-d121-d1' }),
                newPassword: z.string().exactOptional().openapi({ example: 'password@123' }),
                newEmail: z.string().exactOptional().openapi({ example: 'test2@example.com' }),
              })
              .openapi({ required: [] }),
          ]),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Indicates success with the status property',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                status: z.literal('OK').exactOptional(),
                user: z
                  .object({
                    userId: z
                      .string()
                      .exactOptional()
                      .openapi({ example: 'r23r-f235th54-g3413gf-r32dr2' }),
                    email: z.string().exactOptional().openapi({ example: 'test@example.com' }),
                    timeCreated: z.number().exactOptional().openapi({ example: 391238234792 }),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
              })
              .openapi({ required: [] }),
            z
              .object({ status: z.literal('EMAIL_ALREADY_EXISTS_ERROR').exactOptional() })
              .openapi({ required: [] }),
            z
              .object({
                status: z.literal('PASSWORD_WEAK_ERROR').exactOptional(),
                message: z
                  .string()
                  .exactOptional()
                  .openapi({ example: 'Your password must have at least 8 characters' }),
              })
              .openapi({ required: [] }),
            z
              .object({ status: z.literal('INVALID_EMAIL_ERROR').exactOptional() })
              .openapi({ required: [] }),
            z
              .object({ status: z.literal('UNKNOWN_USER_ERROR').exactOptional() })
              .openapi({ required: [] }),
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const postAppidAppIdRecipeDashboardUserRoute = createRoute({
  method: 'post',
  path: '/appid-<appId>/recipe/dashboard/user',
  tags: ['Dashboard Recipe'],
  description: 'Create a dashboard user\n',
  operationId: 'createDashboardUser',
  request: {
    headers: z.object({
      rid: DashboardRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              email: z.string().exactOptional().openapi({ example: 'test@example.com' }),
              password: z.string().exactOptional().openapi({ example: 'password@123' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Indicates success with the status property',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                status: z.literal('OK').exactOptional(),
                user: z
                  .object({
                    userId: z.string().exactOptional().openapi({ example: 'example-userid' }),
                    email: z.string().exactOptional().openapi({ example: 'test@example.com' }),
                    timeCreated: z.number().exactOptional().openapi({ example: 1231321231 }),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
              })
              .openapi({ required: [] }),
            z
              .object({ status: z.literal('EMAIL_ALREADY_EXISTS_ERROR').exactOptional() })
              .openapi({ required: [] }),
            z
              .object({
                status: z.literal('PASSWORD_WEAK_ERROR').exactOptional(),
                message: z
                  .string()
                  .exactOptional()
                  .openapi({ example: 'Your password must have at least 8 characters' }),
              })
              .openapi({ required: [] }),
            z
              .object({ status: z.literal('INVALID_EMAIL_ERROR').exactOptional() })
              .openapi({ required: [] }),
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    402: {
      description: 'Indicates ayment required',
      content: {
        'application/json': {
          schema: z
            .object({
              status: z.literal('USER_LIMIT_REACHED_ERROR').exactOptional(),
              message: z
                .string()
                .exactOptional()
                .openapi({
                  example:
                    'You have reached the free limit for creating users, please purchase the dashboard feature to create new users',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    404: _404Response,
    500: _500Response,
  },
})

export const deleteAppidAppIdRecipeDashboardUserRoute = createRoute({
  method: 'delete',
  path: '/appid-<appId>/recipe/dashboard/user',
  tags: ['Dashboard Recipe'],
  description: 'Delete a dashboard user with their userId or email\n',
  operationId: 'deleteDashboardUser',
  request: {
    headers: z.object({
      rid: DashboardRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    query: z.object({
      email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'email',
            schema: { type: 'string', example: 'test@example.com' },
            required: false,
          },
          example: 'test@example.com',
        }),
      userId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'userId',
            schema: { type: 'string', example: 'ue1231-f32f290f2-f23r23f-323f2' },
            required: false,
          },
          example: 'ue1231-f32f290f2-f23r23f-323f2',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Indicates success with the status property',
      content: {
        'application/json': {
          schema: z
            .object({
              status: StatusOKSchema.exactOptional(),
              didUserExist: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const getAppidAppIdRecipeDashboardUsersRoute = createRoute({
  method: 'get',
  path: '/appid-<appId>/recipe/dashboard/users',
  tags: ['Dashboard Recipe'],
  description: 'Get a list of call the dashboard users\n',
  operationId: 'getAllDashboardUsers',
  request: {
    headers: z.object({
      rid: DashboardRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'get a list of dashboard users',
      content: {
        'application/json': {
          schema: z
            .object({
              status: z.literal('OK').exactOptional(),
              users: z
                .array(
                  z
                    .object({
                      email: z.string().exactOptional().openapi({ example: 'test@example.com' }),
                      userId: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'uf2323-f223r233-f23-f23-f2f32' }),
                      timeCreated: z.number().exactOptional().openapi({ example: 16382348324 }),
                      isSuspended: z.boolean().exactOptional().openapi({ example: false }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const postAppidAppIdRecipeDashboardSessionVerifyRoute = createRoute({
  method: 'post',
  path: '/appid-<appId>/recipe/dashboard/session/verify',
  tags: ['Dashboard Recipe'],
  description: "Verify a Dashboard user's sessionId\n",
  operationId: 'verifyDashboardUserSession',
  request: {
    headers: z.object({
      rid: DashboardRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              sessionId: z
                .string()
                .exactOptional()
                .openapi({ example: 'rf32f-f32342f-32f-323r2f3-23' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Indicates success with the status property',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                status: z.literal('OK').exactOptional(),
                email: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
            z
              .object({
                status: z.literal('USER_SUSPENDED_ERROR').exactOptional(),
                message: z
                  .string()
                  .exactOptional()
                  .openapi({
                    example:
                      'You have crossed the free dashboard user limit. Please purchase the dashboard feature or login with a valid user account',
                  }),
              })
              .openapi({ required: [] }),
            z
              .object({ status: z.literal('INVAlID_SESSION_ERROR').exactOptional() })
              .openapi({ required: [] }),
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const deleteAppidAppIdRecipeDashboardSessionRoute = createRoute({
  method: 'delete',
  path: '/appid-<appId>/recipe/dashboard/session',
  tags: ['Dashboard Recipe'],
  description: "Revoke a Dashboard user's session\n",
  operationId: 'RevokeDashboardUsersSession',
  request: {
    headers: z.object({
      rid: DashboardRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    query: z.object({
      sessionId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'sessionId',
            schema: { type: 'string', example: 'ue1231-f32f290f2-f23r23f-323f2' },
            required: false,
          },
          example: 'ue1231-f32f290f2-f23r23f-323f2',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Indicates success with the status property',
      content: {
        'application/json': {
          schema: z.object({ status: StatusOKSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const postAppidAppIdRecipeDashboardSigninRoute = createRoute({
  method: 'post',
  path: '/appid-<appId>/recipe/dashboard/signin',
  tags: ['Dashboard Recipe'],
  description: 'Signin a Dashboard user\n',
  operationId: 'signInDashboardUser',
  request: {
    headers: z.object({
      rid: DashboardRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              email: z.string().exactOptional().openapi({ example: 'test@example.com' }),
              password: z.string().exactOptional().openapi({ example: 'password@123' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Indicates success with the status property',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                status: z.literal('OK').exactOptional(),
                sessionId: z.string().exactOptional().openapi({ example: null }),
              })
              .openapi({ required: [] }),
            z
              .object({
                status: z.literal('USER_SUSPENDED_ERROR').exactOptional(),
                message: z
                  .string()
                  .exactOptional()
                  .openapi({
                    example:
                      'You have crossed the free dashboard user limit. Please purchase the dashboard feature or login with a valid user account',
                  }),
              })
              .openapi({ required: [] }),
            z
              .object({ status: z.literal('INVAlID_CREDENTIALS_ERROR').exactOptional() })
              .openapi({ required: [] }),
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const getAppidAppIdRecipeDashboardUserSessionsRoute = createRoute({
  method: 'get',
  path: '/appid-<appId>/recipe/dashboard/user/sessions',
  tags: ['Dashboard Recipe'],
  description: 'Get a list of the sessions for the dashboard user\n',
  operationId: 'getAllSessionsForDashboardUser',
  request: {
    headers: z.object({
      rid: DashboardRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    query: z.object({
      userId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'userId',
            schema: { type: 'string', example: 'ue1231-f32f290f2-f23r23f-323f2' },
            required: false,
          },
          example: 'ue1231-f32f290f2-f23r23f-323f2',
        }),
    }),
  },
  responses: {
    200: {
      description: 'get a list of sessions for dashboard user',
      content: {
        'application/json': {
          schema: z
            .object({
              sessions: z
                .array(
                  z
                    .object({
                      userId: UserIdSchema.exactOptional(),
                      sessionId: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'fni29f-f23f23-f2fq32qt-h35evf' }),
                      timeCreated: z.number().exactOptional().openapi({ example: 16382348324 }),
                      expiry: z.number().exactOptional().openapi({ example: 16382348324 }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const getAppidAppIdApiversionRoute = createRoute({
  method: 'get',
  path: '/appid-<appId>/apiversion',
  tags: ['Core'],
  description: 'Get a list of compatible CDI versions\n',
  operationId: 'getApiVersion',
  request: {
    headers: z.object({ Authorization: ApiKeyParamsSchema }),
    query: z.object({
      websiteDomain: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'websiteDomain',
            schema: { type: 'string', example: 'https://example.com' },
            required: false,
          },
          example: 'https://example.com',
        }),
      apiDomain: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'apiDomain',
            schema: { type: 'string', example: 'https://api.example.com' },
            required: false,
          },
          example: 'https://api.example.com',
        }),
    }),
  },
  responses: {
    200: {
      description: 'get api version',
      content: {
        'application/json': {
          schema: z
            .object({
              versions: z.array(z.string().openapi({ example: ['2.13'] })).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const getConfigRoute = createRoute({
  method: 'get',
  path: '/config',
  tags: ['Core'],
  description: 'Get path to the loaded config file\n',
  operationId: 'getConfig',
  request: {
    headers: z.object({ Authorization: ApiKeyParamsSchema, 'cdi-version': CdiVersionParamsSchema }),
    query: z.object({
      pid: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'pid',
            schema: { type: 'string', example: 21307 },
            required: false,
          },
          example: 21307,
        }),
    }),
  },
  responses: {
    200: {
      description: 'get api version',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                status: StatusOKSchema.exactOptional(),
                path: z
                  .string()
                  .exactOptional()
                  .openapi({ example: '/usr/lib/supertokens/config.yaml' }),
              })
              .openapi({ required: [] }),
            z
              .object({ status: z.literal('NOT_ALLOWED').exactOptional() })
              .openapi({ required: [] }),
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const getAppidAppIdTenantIdIndexRoute = createRoute({
  method: 'get',
  path: '/appid-<appId>/<tenantId>/',
  tags: ['Core'],
  description: 'Return a simple hello message\n',
  operationId: 'getHelloOnRootPath',
  responses: { 200: HelloResponse, 500: _500Response },
})

export const getAppidAppIdTenantIdHelloRoute = createRoute({
  method: 'get',
  path: '/appid-<appId>/<tenantId>/hello',
  tags: ['Core'],
  description: 'Return a simple hello message\n',
  operationId: 'getHello',
  responses: { 200: HelloResponse, 500: _500Response },
})

export const putAppidAppIdTenantIdHelloRoute = createRoute({
  method: 'put',
  path: '/appid-<appId>/<tenantId>/hello',
  tags: ['Core'],
  description: 'Return a simple hello message\n',
  operationId: 'putHello',
  responses: { 200: HelloResponse, 500: _500Response },
})

export const postAppidAppIdTenantIdHelloRoute = createRoute({
  method: 'post',
  path: '/appid-<appId>/<tenantId>/hello',
  tags: ['Core'],
  description: 'Return a simple hello message\n',
  operationId: 'postHello',
  responses: { 200: HelloResponse, 500: _500Response },
})

export const deleteAppidAppIdTenantIdHelloRoute = createRoute({
  method: 'delete',
  path: '/appid-<appId>/<tenantId>/hello',
  tags: ['Core'],
  description: 'Return a simple hello message\n',
  operationId: 'deleteHello',
  responses: { 200: HelloResponse, 500: _500Response },
})

export const getAppidAppIdTelemetryRoute = createRoute({
  method: 'get',
  path: '/appid-<appId>/telemetry',
  tags: ['Core'],
  description: 'Returns the telemetryID if it exists\n',
  operationId: 'getTelemetry',
  request: {
    headers: z.object({ Authorization: ApiKeyParamsSchema, 'cdi-version': CdiVersionParamsSchema }),
  },
  responses: {
    200: {
      description: 'Returns the telemetryID if it exists',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                exists: z.literal(true).exactOptional(),
                telemetryId: z
                  .string()
                  .exactOptional()
                  .openapi({ example: '99c87c72-1807-22d-9b39-7a88f95re56c' }),
              })
              .openapi({ required: [] }),
            z
              .object({
                exists: z
                  .boolean()
                  .exactOptional()
                  .openapi({ example: [false] }),
              })
              .openapi({ required: [] }),
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const getAppidAppIdTenantIdUsersCountRoute = createRoute({
  method: 'get',
  path: '/appid-<appId>/<tenantId>/users/count',
  tags: ['Core'],
  description:
    'Get number of users.\n\nAPI is tenant specific if `includeAllTenants` is false.\nElse, `tenantId` is ignored.\n',
  operationId: 'getUsersCount',
  request: {
    headers: z.object({ Authorization: ApiKeyParamsSchema, 'cdi-version': CdiVersionParamsSchema }),
    query: z.object({
      includeRecipeIds: IncludeRecipeIdsParamsSchema,
      includeAllTenants: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'includeAllTenants',
            description: 'if set to true, will count users across all tenants in the app',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get number of users',
      content: {
        'application/json': {
          schema: z
            .object({
              status: StatusOKSchema.exactOptional(),
              count: z.number().exactOptional().openapi({ example: 1000000 }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const getAppidAppIdUsersCountActiveRoute = createRoute({
  method: 'get',
  path: '/appid-<appId>/users/count/active',
  tags: ['Core'],
  description: 'Get number of active users.\n',
  operationId: 'getActiveUsersCount',
  request: {
    headers: z.object({ Authorization: ApiKeyParamsSchema, 'cdi-version': CdiVersionParamsSchema }),
    query: z.object({
      since: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            in: 'query',
            name: 'since',
            schema: { type: 'number', example: 1679875200000 },
            required: true,
          },
          example: 1679875200000,
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get number of active users',
      content: {
        'application/json': {
          schema: z
            .object({
              status: StatusOKSchema.exactOptional(),
              count: z.number().exactOptional().openapi({ example: 100000 }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const getAppidAppIdTenantIdUsersRoute = createRoute({
  method: 'get',
  path: '/appid-<appId>/<tenantId>/users',
  tags: ['Core'],
  description: 'User Pagination\n',
  operationId: 'getUsers',
  request: {
    headers: z.object({ Authorization: ApiKeyParamsSchema, 'cdi-version': CdiVersionParamsSchema }),
    query: z.object({
      includeRecipeIds: IncludeRecipeIdsParamsSchema,
      paginationToken: PaginationTokenParamsSchema,
      limit: LimitParamsSchema,
      timeJoinedOrder: TimeJoinedOrderParamsSchema,
      email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'email',
            schema: { type: 'string', example: 'test@example.com' },
            required: false,
          },
          example: 'test@example.com',
        }),
      phone: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'phone',
            schema: { type: 'number', example: 911234567890 },
            required: false,
          },
          example: 911234567890,
        }),
      recipe: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'recipe',
            schema: { type: 'string', example: 'emailpassword' },
            required: false,
          },
          example: 'emailpassword',
        }),
      provider: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'provider',
            schema: { type: 'string', example: 'google' },
            required: false,
          },
          example: 'google',
        }),
    }),
  },
  responses: {
    200: {
      description: 'User Pagination',
      content: {
        'application/json': {
          schema: z
            .object({
              status: StatusOKSchema.exactOptional(),
              users: z
                .array(
                  z
                    .strictObject({ user: AuthRecipeUserSchema.exactOptional() })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              nextPaginationToken: PaginationTokenSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const postAppidAppIdUserRemoveRoute = createRoute({
  method: 'post',
  path: '/appid-<appId>/user/remove',
  tags: ['Core'],
  description: 'Delete user\n',
  operationId: 'deleteUser',
  request: {
    headers: z.object({ Authorization: ApiKeyParamsSchema, 'cdi-version': CdiVersionParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              userId: UserIdSchema,
              removeAllLinkedAccounts: z.boolean().exactOptional().openapi({ example: true }),
            })
            .openapi({ required: ['userId'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description:
        "Returns OK if the operation succeeded (even if the user didn't exist before the call)",
      content: {
        'application/json': {
          schema: z.object({ status: StatusOKSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    500: _500Response,
  },
})

export const getAppidAppIdUserSearchTagsRoute = createRoute({
  method: 'get',
  path: '/appid-<appId>/user/search/tags',
  tags: ['Core'],
  description: 'Retrieve available tags for search\n',
  operationId: 'getSearchTags',
  request: {
    headers: z.object({ Authorization: ApiKeyParamsSchema, 'cdi-version': CdiVersionParamsSchema }),
  },
  responses: {
    200: {
      description: 'Returns available tags for search',
      content: {
        'application/json': {
          schema: z
            .object({
              status: StatusOKSchema.exactOptional(),
              tags: z
                .array(z.string().openapi({ example: ['email', 'phone', 'provider'] }))
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const getAppidAppIdEeFeatureflagRoute = createRoute({
  method: 'get',
  path: '/appid-<appId>/ee/featureflag',
  tags: ['Core'],
  description: 'Get a list of the enabled enterprise features\n',
  operationId: 'getFeatureFlag',
  request: {
    headers: z.object({ Authorization: ApiKeyParamsSchema, 'cdi-version': CdiVersionParamsSchema }),
  },
  responses: {
    200: {
      description: 'The operation was successful',
      content: {
        'application/json': {
          schema: z
            .object({
              status: StatusOKSchema.exactOptional(),
              features: z
                .array(z.string())
                .exactOptional()
                .openapi({ example: ['feature_1', 'feature_2'] }),
              usageStats: z.looseObject({}).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const getAppidAppIdEeLicenseRoute = createRoute({
  method: 'get',
  path: '/appid-<appId>/ee/license',
  tags: ['Core'],
  description: 'Retrieve license key\n',
  operationId: 'getLicense',
  request: {
    headers: z.object({ Authorization: ApiKeyParamsSchema, 'cdi-version': CdiVersionParamsSchema }),
  },
  responses: {
    200: {
      description: 'The operation was successful',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                status: StatusOKSchema.exactOptional(),
                licenseKey: z
                  .string()
                  .exactOptional()
                  .openapi({ example: 'eyJhbGciOiJIUzI1NiIsIn...' }),
              })
              .openapi({ required: [] }),
            z
              .object({ status: z.literal('NO_LICENSE_KEY_FOUND_ERROR').exactOptional() })
              .openapi({ required: [] }),
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    500: _500Response,
  },
})

export const putAppidAppIdEeLicenseRoute = createRoute({
  method: 'put',
  path: '/appid-<appId>/ee/license',
  tags: ['Core'],
  description: 'Set or sync license key\n',
  operationId: 'setLicense',
  request: {
    headers: z.object({ Authorization: ApiKeyParamsSchema, 'cdi-version': CdiVersionParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              licenseKey: z
                .string()
                .exactOptional()
                .openapi({ example: 'eyJhbGciOiJIUzI1NiIsIn...' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'The operation was successful',
      content: {
        'application/json': {
          schema: z.xor([
            z.object({ status: StatusOKSchema.exactOptional() }).openapi({ required: [] }),
            z
              .object({ status: z.literal('MISSING_EE_FOLDER_ERROR').exactOptional() })
              .openapi({ required: [] }),
            z
              .object({ status: z.literal('INVALID_LICENSE_KEY_ERROR').exactOptional() })
              .openapi({ required: [] }),
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    500: _500Response,
  },
})

export const deleteAppidAppIdEeLicenseRoute = createRoute({
  method: 'delete',
  path: '/appid-<appId>/ee/license',
  tags: ['Core'],
  description: 'Delete license key\n',
  operationId: 'deleteLicense',
  request: {
    headers: z.object({ Authorization: ApiKeyParamsSchema, 'cdi-version': CdiVersionParamsSchema }),
  },
  responses: {
    200: {
      description: 'The operation was successful',
      content: {
        'application/json': {
          schema: z.object({ status: StatusOKSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    500: _500Response,
  },
})

export const getAppidAppIdUserIdRoute = createRoute({
  method: 'get',
  path: '/appid-<appId>/user/id',
  tags: ['Core'],
  description: 'Get user id from email or phone number\n',
  operationId: 'getUserId',
  request: {
    headers: z.object({ Authorization: ApiKeyParamsSchema, 'cdi-version': CdiVersionParamsSchema }),
    query: z.object({ userId: UserIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'The operation was successful',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                status: StatusOKSchema.exactOptional(),
                user: AuthRecipeUserSchema.exactOptional(),
              })
              .openapi({ required: [] }),
            z
              .object({ status: z.literal('UNKNOWN_USER_ID_ERROR').exactOptional() })
              .openapi({ required: [] }),
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const getAppidAppIdTenantIdUsersByAccountinfoRoute = createRoute({
  method: 'get',
  path: '/appid-<appId>/<tenantId>/users/by-accountinfo',
  tags: ['Core'],
  description: 'Get users by email, phoneNumber or thirdParty info\n',
  operationId: 'getUsersByAccountInfo',
  request: {
    headers: z.object({ Authorization: ApiKeyParamsSchema, 'cdi-version': CdiVersionParamsSchema }),
    query: z.object({
      email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'email',
            required: false,
            schema: { type: 'string', example: 'test@example.com' },
          },
          example: 'test@example.com',
        }),
      phoneNumber: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'phoneNumber',
            required: false,
            schema: { type: 'string', example: '+911234567890' },
          },
          example: '+911234567890',
        }),
      thirdPartyId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'thirdPartyId',
            required: false,
            schema: { type: 'string', example: 'google' },
          },
          example: 'google',
        }),
      thirdPartyUserId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'thirdPartyUserId',
            required: false,
            schema: { type: 'string', example: '1234567890' },
          },
          example: '1234567890',
        }),
      doUnionOfAccountInfo: z
        .stringbool()
        .openapi({
          param: {
            in: 'query',
            name: 'doUnionOfAccountInfo',
            required: true,
            schema: { type: 'boolean', example: true },
          },
          example: true,
        }),
    }),
  },
  responses: {
    200: {
      description: 'The operation was successful',
      content: {
        'application/json': {
          schema: z
            .object({
              status: StatusOKSchema.exactOptional(),
              users: z.array(AuthRecipeUserSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const getAppidAppIdRequestsStatsRoute = createRoute({
  method: 'get',
  path: '/appid-<appId>/requests/stats',
  tags: ['Core'],
  description:
    'Get requests stats for last 24 hours\n\n`averageRequestsPerSecond` and `peakRequestsPerSecond` would countain `1440` values corresponding to `now - 1440 minutes` until `now - 1 minute`.\n\nA value of `-1` would mean that there is no data for that minute.\n',
  operationId: 'getRequestsStats',
  request: {
    headers: z.object({ Authorization: ApiKeyParamsSchema, 'cdi-version': CdiVersionParamsSchema }),
  },
  responses: {
    200: {
      description: 'The operation was successful',
      content: {
        'application/json': {
          schema: z
            .object({
              status: StatusOKSchema.exactOptional(),
              atMinute: z.number().exactOptional().openapi({ example: 16382348 }),
              averageRequestsPerSecond: z
                .array(z.number().openapi({ example: 10.5 }))
                .exactOptional(),
              peakRequestsPerSecond: z.array(z.number().openapi({ example: 20 })).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const putRecipeMultitenancyConnectionuridomainRoute = createRoute({
  method: 'put',
  path: '/recipe/multitenancy/connectionuridomain',
  tags: ['Multitenancy Recipe'],
  description:
    'This API is deprecated. Please use the v2 version of this API. In the v2 version of the API, the login methods are no longer enabled using the `emailPasswordEnabled`, `thirdPartyEnabled` and `passwordlessEnabled` inputs. Instead, they are enabled using factorIds (such as emailpassword, otp-email, etc) specified in the `firstFactors` and `requiredSecondaryFactors` inputs. Please refer [Multitenancy Docs](https://supertokens.com/docs/multitenancy/new-tenant) to know the list of factorIds available.\n\nNote: This deprecated API still accepts those `emailPasswordEnabled`, `thirdPartyEnabled` and `passwordlessEnabled` inputs for backward compatibility.\n\nCreate or update a connection uri domain.\n\nSuperTokens subscription license key is required, if not using the base connection uri domain.\n\nThis request must originate from public app and public tenant on the base\nconnection uri domain.\n\nIf creating a new connection uri domain, only the login methods set to true will be enabled and rest will be disabled by default.\n\n`firstFactors` and `requiredSecondaryFactors` can be set to null to remove all entries in the core, or a non empty string array to be updated in the core. Setting of empty array is disallowed.\n\nNote: the create/update will fail if a login method is not enabled and a relavant factor is added to either `firstFactors` or `requiredSecondaryFactors`. For example, `emailPasswordEnabled` cannot be set to `false` if `emailpassword` is present in the `firstFactors` array.\n\nIf updating an existing connection uri domain,\n1. core will keep the existing state of login methods and only update the ones that are specified in the request body.\n2. Core config will be merged into existing config. To delete a key in the config, use a null value\n\nNote: The core config must contain a unique connection to the storage layer, because sharing of database between 2 different connection uri domains is not allowed.\n\nNote: Updation of core config is not allowed for the default connectionUriDomain. In order to update config for the default connectionUriDomain, you must edit the config.yaml or the docker env directly.\n',
  operationId: 'createOrUpdateConnectionURIDomainPUT',
  request: {
    headers: z.object({
      rid: MultitenancyRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              connectionUriDomain: z.string().openapi({ example: 'core-1234.supertokens.io:3567' }),
            })
            .openapi({ required: ['connectionUriDomain'] })
            .and(TenantInputSchema),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Create or Update connection uri domain result',
      content: {
        'application/json': {
          schema: z
            .object({ status: StatusOKSchema, createdNew: z.boolean() })
            .openapi({ required: ['status', 'createdNew'] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    402: _402Response,
    404: _404Response,
    500: _500Response,
  },
  deprecated: true,
})

export const putRecipeMultitenancyConnectionuridomainV2Route = createRoute({
  method: 'put',
  path: '/recipe/multitenancy/connectionuridomain/v2',
  tags: ['Multitenancy Recipe'],
  description:
    "Create or update a connection uri domain.\n\nSuperTokens subscription license key is required, if not using the base connection uri domain.\n\nThis request must originate from public app and public tenant on the base\nconnection uri domain.\n\nThe `firstFactors` can be set to following values:\n\n- `null`: When set to `null`, all the login methods will be available for the connection URI domain (public app, public tenant).\n- `[]` (empty array): No login methods will be enabled for the connection URI domain (public app, public tenant).\n- `['factor1', 'factor2', ...]` (non-empty array): The list of login methods to enable for the connection URI domain (public app, public tenant). For eg. if this is set to `['emailpassword', 'thirdparty']`, the users of the tenant will be able to login using emailpassword and third party providers.\n\nList of built-in first factors are as follows:\n\n- Email password auth: `emailpassword`\n- Social login / enterprise SSO auth: `thirdparty`\n- Passwordless:\n  - With email OTP: `otp-email`\n  - With SMS OTP: `otp-phone`\n  - With email magic link: `link-email`\n  - With SMS magic link: `link-phone`\n\nIf first factors are not specified while creating a new connection uri domain, all the login methods will be enabled by default.\n\nThe `requiredSecondaryFactors` can be set to following values:\n- `null`: When set to `null`, no secondary factors will be required for the users of the connection URI domain (public app, public tenant).\n- `['factor1', 'factor2', ...]` (non-empty array): The list of factors that the users of the connection URI domain (public app, public tenant) must complete post the first factor login. For eg. if this is set to `['otp-phone', 'totp']`, the users of the tenant will be required to complete either phone OTP or TOTP post the first factor login.\n\nList of built-in secondary factors are as follows:\n\n- Email password auth: `emailpassword`\n- Social login / enterprise SSO auth: `thirdparty`\n- Passwordless:\n  - With email OTP: `otp-email`\n  - With SMS OTP: `otp-phone`\n  - With email magic link: `link-email`\n  - With SMS magic link: `link-phone`\n- Time based OTP: `totp`\n\nIf updating an existing connection uri domain,\n1. core will keep the existing state of login methods and only update the ones that are specified in the request body.\n2. Core config will be merged into existing config. To delete a key in the config, use a null value\n\nNote: The core config must contain a unique connection to the storage layer, because sharing of database between 2 different connection uri domains is not allowed.\n\nNote: Updation of core config is not allowed for the default connectionUriDomain. In order to update config for the default connectionUriDomain, you must edit the config.yaml or the docker env directly.\n",
  operationId: 'createOrUpdateConnectionURIDomainV2PUT',
  request: {
    headers: z.object({
      rid: MultitenancyRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              connectionUriDomain: z.string().openapi({ example: 'core-1234.supertokens.io:3567' }),
            })
            .openapi({ required: ['connectionUriDomain'] })
            .and(TenantInputV2Schema),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Create or Update connection uri domain result',
      content: {
        'application/json': {
          schema: z
            .object({ status: StatusOKSchema, createdNew: z.boolean() })
            .openapi({ required: ['status', 'createdNew'] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    402: _402Response,
    404: _404Response,
    500: _500Response,
  },
})

export const postRecipeMultitenancyConnectionuridomainRemoveRoute = createRoute({
  method: 'post',
  path: '/recipe/multitenancy/connectionuridomain/remove',
  tags: ['Multitenancy Recipe'],
  description:
    'Delete a connection uri domain.\n\nDeletion of base connection uri domain is not allowed.\n\nThe request must originate from base connection uri domain and public app and tenant.\n\nNote: There should be no apps or tenants (other than the public app and public tenant) belonging to the connection uri domain to be able to delete it.\n',
  operationId: 'deleteConnectionUriDomainPOST',
  request: {
    headers: z.object({
      rid: MultitenancyRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              connectionUriDomain: z.string().openapi({ example: 'core-1234.supertokens.io:3567' }),
            })
            .openapi({ required: ['connectionUriDomain'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Remove connection uri domain result',
      content: {
        'application/json': {
          schema: z
            .object({ status: StatusOKSchema, didExist: z.boolean() })
            .openapi({ required: ['status', 'didExist'] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    402: _402Response,
    404: _404Response,
    500: _500Response,
  },
})

export const getRecipeMultitenancyConnectionuridomainListRoute = createRoute({
  method: 'get',
  path: '/recipe/multitenancy/connectionuridomain/list',
  tags: ['Multitenancy Recipe'],
  description:
    "This API is deprecated. Please use the v2 version of this API. In the v2 version of the API, the login methods are no longer enabled using the `emailPasswordEnabled`, `thirdPartyEnabled` and `passwordlessEnabled` inputs. Instead, they are enabled using factorIds (such as emailpassword, otp-email, etc) specified in the `firstFactors` and `requiredSecondaryFactors` inputs. Please refer [Multitenancy Docs](https://supertokens.com/docs/multitenancy/new-tenant) to know the list of factorIds available.\n\nNote: This deprecated API still returns `emailPasswordEnabled`, `thirdPartyEnabled` and `passwordlessEnabled` values for backward compatibility, and it's values are derived from the `firstFactors` and `requiredSecondaryFactors` configured for the tenant. The detailed computation of the values as per CDI version is described here: https://github.com/supertokens/supertokens-core/issues/979#issuecomment-2099971371\n\nGet a list of all connection uri domains.\n\nRequest must originate from base connection uri domain and public app and tenant.\n",
  operationId: 'connectionUriDomainListGET',
  request: {
    headers: z.object({
      rid: MultitenancyRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'List of connection uri domains',
      content: {
        'application/json': {
          schema: z
            .object({
              status: StatusOKSchema,
              connectionUriDomains: z.array(
                z
                  .object({
                    connectionUriDomain: z
                      .string()
                      .exactOptional()
                      .openapi({ example: 'core-1234.supertokens.io:3567' }),
                    apps: z
                      .array(
                        z
                          .object({
                            appId: z.string().exactOptional().openapi({ example: 'app1' }),
                            tenants: z.array(TenantConfigSchema).exactOptional(),
                          })
                          .openapi({ required: [] }),
                      )
                      .exactOptional(),
                  })
                  .openapi({ required: [] }),
              ),
            })
            .openapi({ required: ['status', 'connectionUriDomains'] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  deprecated: true,
})

export const getRecipeMultitenancyConnectionuridomainListV2Route = createRoute({
  method: 'get',
  path: '/recipe/multitenancy/connectionuridomain/list/v2',
  tags: ['Multitenancy Recipe'],
  description:
    'Get a list of all connection uri domains.\n\nThe value of `firstFactors` can be as follows:\n- `null`: When set to `null`, the SDK will use firstFactors defined in the SDK\n- `[]` (empty array): No first factors would be enabled for the tenant\n- non-empty array: The first factors that are enabled for the tenant\n\nRequest must originate from base connection uri domain and public app and tenant.\n',
  operationId: 'connectionUriDomainListV2GET',
  request: {
    headers: z.object({
      rid: MultitenancyRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'List of connection uri domains',
      content: {
        'application/json': {
          schema: z
            .object({
              status: StatusOKSchema,
              connectionUriDomains: z.array(
                z
                  .object({
                    connectionUriDomain: z
                      .string()
                      .exactOptional()
                      .openapi({ example: 'core-1234.supertokens.io:3567' }),
                    apps: z
                      .array(
                        z
                          .object({
                            appId: z.string().exactOptional().openapi({ example: 'app1' }),
                            tenants: z.array(TenantConfigV2Schema).exactOptional(),
                          })
                          .openapi({ required: [] }),
                      )
                      .exactOptional(),
                  })
                  .openapi({ required: [] }),
              ),
            })
            .openapi({ required: ['status', 'connectionUriDomains'] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const putRecipeMultitenancyAppRoute = createRoute({
  method: 'put',
  path: '/recipe/multitenancy/app',
  tags: ['Multitenancy Recipe'],
  description:
    'This API is deprecated. Please use the v2 version of this API. In the v2 version of the API, the login methods are no longer enabled using the `emailPasswordEnabled`, `thirdPartyEnabled` and `passwordlessEnabled` inputs. Instead, they are enabled using factorIds (such as emailpassword, otp-email, etc) specified in the `firstFactors` and `requiredSecondaryFactors` inputs. Please refer [Multitenancy Docs](https://supertokens.com/docs/multitenancy/new-tenant) to know the list of factorIds available.\n\nNote: This deprecated API still accepts those `emailPasswordEnabled`, `thirdPartyEnabled` and `passwordlessEnabled` inputs for backward compatibility.\n\nCreate or update an app.\n\nSuperTokens subscription license key is required.\n\nIf creating a new app, only the login methods set to true will be enabled and rest will be disabled by default.\n\n`firstFactors` and `requiredSecondaryFactors` can be set to null to remove all entries in the core, or a non empty string array to be updated in the core. Setting of empty array is disallowed.\n\nNote: the create/update will fail if a login method is not enabled and a relavant factor is added to either `firstFactors` or `requiredSecondaryFactors`. For example, `emailPasswordEnabled` cannot be set to `false` if `emailpassword` is present in the `firstFactors` array.\n\nIf updating an existing app,\n1. core will keep the existing state of login methods and only update the ones that are specified in the request body.\n2. Core config will be merged into existing config. To delete a key in the config, use a null value\n\nNote: the newly created app will use the same connection uri domain from which\nthis request originates and the request must originate from public app and public tenant.\n\nNote: Updation of core config is not allowed for the default connectionUriDomain, public app. In order to update config for the default connectionUriDomain and public app, you must edit the config.yaml or the docker env directly.\n',
  operationId: 'createOrUpdateAppPUT',
  request: {
    headers: z.object({
      rid: MultitenancyRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ appId: z.string().openapi({ example: 'app1' }) })
            .openapi({ required: ['appId'] })
            .and(TenantInputSchema),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Create or Update app result',
      content: {
        'application/json': {
          schema: z
            .object({ status: StatusOKSchema, createdNew: z.boolean() })
            .openapi({ required: ['status', 'createdNew'] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    402: _402Response,
    404: _404Response,
    500: _500Response,
  },
  deprecated: true,
})

export const putRecipeMultitenancyAppV2Route = createRoute({
  method: 'put',
  path: '/recipe/multitenancy/app/v2',
  tags: ['Multitenancy Recipe'],
  description:
    "Create or update an app.\n\nSuperTokens subscription license key is required.\n\nThe `firstFactors` can be set to following values:\n\n- `null`: When set to `null`, all the login methods will be available for the app (public tenant).\n- `[]` (empty array): No login methods will be enabled for the app (public tenant).\n- `['factor1', 'factor2', ...]` (non-empty array): The list of login methods to enable for the app (public tenant). For eg. if this is set to `['emailpassword', 'thirdparty']`, the users of the tenant will be able to login using emailpassword and third party providers.\n\nList of built-in first factors are as follows:\n\n- Email password auth: `emailpassword`\n- Social login / enterprise SSO auth: `thirdparty`\n- Passwordless:\n  - With email OTP: `otp-email`\n  - With SMS OTP: `otp-phone`\n  - With email magic link: `link-email`\n  - With SMS magic link: `link-phone`\n\nIf first factors are not specified while creating a new app, all the login methods will be enabled by default.\n\nThe `requiredSecondaryFactors` can be set to following values:\n- `null`: When set to `null`, no secondary factors will be required for the users of the app (public tenant).\n- `['factor1', 'factor2', ...]` (non-empty array): The list of factors that the users of the app (public tenant) must complete post the first factor login. For eg. if this is set to `['otp-phone', 'totp']`, the users of the tenant will be required to complete either phone OTP or TOTP post the first factor login.\n\nList of built-in secondary factors are as follows:\n\n- Email password auth: `emailpassword`\n- Social login / enterprise SSO auth: `thirdparty`\n- Passwordless:\n  - With email OTP: `otp-email`\n  - With SMS OTP: `otp-phone`\n  - With email magic link: `link-email`\n  - With SMS magic link: `link-phone`\n- Time based OTP: `totp`\n\nIf updating an existing app,\n1. core will keep the existing state of login methods and only update the ones that are specified in the request body.\n2. Core config will be merged into existing config. To delete a key in the config, use a null value\n\nNote: the newly created app will use the same connection uri domain from which\nthis request originates and the request must originate from public app and public tenant.\n\nNote: Updation of core config is not allowed for the default connectionUriDomain, public app. In order to update config for the default connectionUriDomain and public app, you must edit the config.yaml or the docker env directly.\n",
  operationId: 'createOrUpdateAppV2PUT',
  request: {
    headers: z.object({
      rid: MultitenancyRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ appId: z.string().openapi({ example: 'app1' }) })
            .openapi({ required: ['appId'] })
            .and(TenantInputV2Schema),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Create or Update app result',
      content: {
        'application/json': {
          schema: z
            .object({ status: StatusOKSchema, createdNew: z.boolean() })
            .openapi({ required: ['status', 'createdNew'] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    402: _402Response,
    404: _404Response,
    500: _500Response,
  },
})

export const postRecipeMultitenancyAppRemoveRoute = createRoute({
  method: 'post',
  path: '/recipe/multitenancy/app/remove',
  tags: ['Multitenancy Recipe'],
  description:
    'Delete an app.\n\nRequest must originate from public app and tenant.\n\nNote: No tenants (other than the public tenant) must belong to the app to be able to delete it.\n',
  operationId: 'deleteAppPOST',
  request: {
    headers: z.object({
      rid: MultitenancyRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ appId: z.string().openapi({ example: 'app1' }) })
            .openapi({ required: ['appId'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Remove app result',
      content: {
        'application/json': {
          schema: z
            .object({ status: StatusOKSchema, didExist: z.boolean() })
            .openapi({ required: ['status', 'didExist'] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    402: _402Response,
    404: _404Response,
    500: _500Response,
  },
})

export const getRecipeMultitenancyAppListRoute = createRoute({
  method: 'get',
  path: '/recipe/multitenancy/app/list',
  tags: ['Multitenancy Recipe'],
  description:
    "This API is deprecated. Please use the v2 version of this API. In the v2 version of the API, the login methods are no longer enabled using the `emailPasswordEnabled`, `thirdPartyEnabled` and `passwordlessEnabled` inputs. Instead, they are enabled using factorIds (such as emailpassword, otp-email, etc) specified in the `firstFactors` and `requiredSecondaryFactors` inputs. Please refer [Multitenancy Docs](https://supertokens.com/docs/multitenancy/new-tenant) to know the list of factorIds available.\n\nNote: This deprecated API still returns `emailPasswordEnabled`, `thirdPartyEnabled` and `passwordlessEnabled` values for backward compatibility, and it's values are derived from the `firstFactors` and `requiredSecondaryFactors` configured for the tenant. The detailed computation of the values as per CDI version is described here: https://github.com/supertokens/supertokens-core/issues/979#issuecomment-2099971371\n\nGet a list of all apps in a connection uri domain.\n\nRequest must originate from public app and tenant.\n",
  operationId: 'appListGET',
  request: {
    headers: z.object({
      rid: MultitenancyRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'List of apps',
      content: {
        'application/json': {
          schema: z
            .object({
              status: StatusOKSchema,
              apps: z.array(
                z
                  .object({
                    appId: z.string().exactOptional().openapi({ example: 'app1' }),
                    tenants: z.array(TenantConfigSchema).exactOptional(),
                  })
                  .openapi({ required: [] }),
              ),
            })
            .openapi({ required: ['status', 'apps'] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  deprecated: true,
})

export const getRecipeMultitenancyAppListV2Route = createRoute({
  method: 'get',
  path: '/recipe/multitenancy/app/list/v2',
  tags: ['Multitenancy Recipe'],
  description:
    'Get a list of all apps in a connection uri domain.\n\nThe value of `firstFactors` can be as follows:\n- `null`: When set to `null`, the SDK will use firstFactors defined in the SDK\n- `[]` (empty array): No first factors would be enabled for the tenant\n- non-empty array: The first factors that are enabled for the tenant\n\nRequest must originate from public app and tenant.\n',
  operationId: 'appListV2GET',
  request: {
    headers: z.object({
      rid: MultitenancyRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'List of apps',
      content: {
        'application/json': {
          schema: z
            .object({
              status: StatusOKSchema,
              apps: z.array(
                z
                  .object({
                    appId: z.string().exactOptional().openapi({ example: 'app1' }),
                    tenants: z.array(TenantConfigV2Schema).exactOptional(),
                  })
                  .openapi({ required: [] }),
              ),
            })
            .openapi({ required: ['status', 'apps'] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const putAppidAppIdRecipeMultitenancyTenantRoute = createRoute({
  method: 'put',
  path: '/appid-<appId>/recipe/multitenancy/tenant',
  tags: ['Multitenancy Recipe'],
  description:
    'This API is deprecated. Please use the v2 version of this API. In the v2 version of the API, the login methods are no longer enabled using the `emailPasswordEnabled`, `thirdPartyEnabled` and `passwordlessEnabled` inputs. Instead, they are enabled using factorIds (such as emailpassword, otp-email, etc) specified in the `firstFactors` and `requiredSecondaryFactors` inputs. Please refer [Multitenancy Docs](https://supertokens.com/docs/multitenancy/new-tenant) to know the list of factorIds available.\n\nNote: This deprecated API still accepts those `emailPasswordEnabled`, `thirdPartyEnabled` and `passwordlessEnabled` inputs for backward compatibility.\n\nCreates or updates a tenant.\n\nSuperTokens subscription license key is required.\n\nIf creating a new tenant, only the login methods set to true will be enabled and rest will be disabled by default.\n\n`firstFactors` and `requiredSecondaryFactors` can be set to null to remove all entries in the core, or a non empty string array to be updated in the core. Setting of empty array is disallowed.\n\nNote: the create/update will fail if a login method is not enabled and a relavant factor is added to either `firstFactors` or `requiredSecondaryFactors`. For example, `emailPasswordEnabled` cannot be set to `false` if `emailpassword` is present in the `firstFactors` array.\n\nIf updating an existing tenant,\n1. core will keep the existing state of login methods and only update the ones that are specified in the request body.\n2. Core config will be merged into existing config. To delete a key in the config, use a null value\n\nThe request must originate from public tenant, and the new tenant will use connectionUriDomain and app from which the request originates.\n\nNote: Updation of core config is not allowed for the default connectionUriDomain, public app and tenant. In order to update config for the default connectionUriDomain, public app and tenant, you must edit the config.yaml or the docker env directly.\n',
  operationId: 'createOrUpdateTenantPUT',
  request: {
    headers: z.object({
      rid: MultitenancyRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ tenantId: TenantIdSchema })
            .openapi({ required: ['tenantId'] })
            .and(TenantInputSchema),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Create or Update tenant result',
      content: {
        'application/json': {
          schema: z
            .object({ status: StatusOKSchema, createdNew: z.boolean() })
            .openapi({ required: ['status', 'createdNew'] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    402: _402Response,
    404: _404Response,
    500: _500Response,
  },
  deprecated: true,
})

export const putAppidAppIdRecipeMultitenancyTenantV2Route = createRoute({
  method: 'put',
  path: '/appid-<appId>/recipe/multitenancy/tenant/v2',
  tags: ['Multitenancy Recipe'],
  description:
    "Creates or updates a tenant.\n\nSuperTokens subscription license key is required.\n\nThe `firstFactors` can be set to following values:\n\n- `null`: When set to `null`, all the login methods will be available for the tenant.\n- `[]` (empty array): No login methods will be enabled for the tenant.\n- `['factor1', 'factor2', ...]` (non-empty array): The list of login methods to enable for the tenant. For eg. if this is set to `['emailpassword', 'thirdparty']`, the users of the tenant will be able to login using emailpassword and third party providers.\n\nList of built-in first factors are as follows:\n\n- Email password auth: `emailpassword`\n- Social login / enterprise SSO auth: `thirdparty`\n- Passwordless:\n  - With email OTP: `otp-email`\n  - With SMS OTP: `otp-phone`\n  - With email magic link: `link-email`\n  - With SMS magic link: `link-phone`\n\nIf first factors are not specified while creating a new tenant, all the login methods will be disabled by default.\n\nThe `requiredSecondaryFactors` can be set to following values:\n- `null`: When set to `null`, no secondary factors will be required for the users of the tenant.\n- `['factor1', 'factor2', ...]` (non-empty array): The list of factors that the users of the tenant must complete post the first factor login. For eg. if this is set to `['otp-phone', 'totp']`, the users of the tenant will be required to complete either phone OTP or TOTP post the first factor login.\n\nList of built-in secondary factors are as follows:\n\n- Email password auth: `emailpassword`\n- Social login / enterprise SSO auth: `thirdparty`\n- Passwordless:\n  - With email OTP: `otp-email`\n  - With SMS OTP: `otp-phone`\n  - With email magic link: `link-email`\n  - With SMS magic link: `link-phone`\n- Time based OTP: `totp`\n\nIf updating an existing tenant,\n1. core will keep the existing state of login methods and only update the ones that are specified in the request body.\n2. Core config will be merged into existing config. To delete a key in the config, use a null value\n\nThe request must originate from public tenant, and the new tenant will use connectionUriDomain and app from which the request originates.\n\nNote: Updation of core config is not allowed for the default connectionUriDomain, public app and tenant. In order to update config for the default connectionUriDomain, public app and tenant, you must edit the config.yaml or the docker env directly.\n",
  operationId: 'createOrUpdateTenantV2PUT',
  request: {
    headers: z.object({
      rid: MultitenancyRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ tenantId: TenantIdSchema })
            .openapi({ required: ['tenantId'] })
            .and(TenantInputV2Schema),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Create or Update tenant result',
      content: {
        'application/json': {
          schema: z
            .object({ status: StatusOKSchema, createdNew: z.boolean() })
            .openapi({ required: ['status', 'createdNew'] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    402: _402Response,
    404: _404Response,
    500: _500Response,
  },
})

export const getAppidAppIdTenantIdRecipeMultitenancyTenantRoute = createRoute({
  method: 'get',
  path: '/appid-<appId>/<tenantId>/recipe/multitenancy/tenant',
  tags: ['Multitenancy Recipe'],
  description:
    "This API is deprecated. Please use the v2 version of this API. In the v2 version of the API, the login methods are no longer enabled using the `emailPasswordEnabled`, `thirdPartyEnabled` and `passwordlessEnabled` inputs. Instead, they are enabled using factorIds (such as emailpassword, otp-email, etc) specified in the `firstFactors` and `requiredSecondaryFactors` inputs. Please refer [Multitenancy Docs](https://supertokens.com/docs/multitenancy/new-tenant) to know the list of factorIds available.\n\nNote: This deprecated API still returns `emailPasswordEnabled`, `thirdPartyEnabled` and `passwordlessEnabled` values for backward compatibility, and it's values are derived from the `firstFactors` and `requiredSecondaryFactors` configured for the tenant. The detailed computation of the values as per CDI version is described here: https://github.com/supertokens/supertokens-core/issues/979#issuecomment-2099971371\n\nGet a tenant config of the tenant specified by the url prefix.\n\nSuperTokens subscription license key is required if querying any tenant other than the base tenant.\n\nReturns recipes with their enabled flag and recipe specific configs saved in core\n",
  operationId: 'tenantConfigGet',
  request: {
    headers: z.object({
      rid: MultitenancyRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Tenant config result',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({ status: StatusOKSchema.exactOptional() })
              .openapi({ required: [] })
              .and(TenantConfigSchema),
            z
              .object({ status: z.literal('TENANT_NOT_FOUND_ERROR').exactOptional() })
              .openapi({ required: [] }),
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    402: _402Response,
    404: _404Response,
    500: _500Response,
  },
  deprecated: true,
})

export const getAppidAppIdTenantIdRecipeMultitenancyTenantV2Route = createRoute({
  method: 'get',
  path: '/appid-<appId>/<tenantId>/recipe/multitenancy/tenant/v2',
  tags: ['Multitenancy Recipe'],
  description:
    'Get a tenant config of the tenant specified by the url prefix.\n\nThe value of `firstFactors` can be as follows:\n- `null`: When set to `null`, the SDK will use firstFactors defined in the SDK\n- `[]` (empty array): No first factors would be enabled for the tenant\n- non-empty array: The first factors that are enabled for the tenant\n\nSuperTokens subscription license key is required if querying any tenant other than the base tenant.\n\nReturns recipes with their enabled flag and recipe specific configs saved in core\n',
  operationId: 'tenantConfigV2Get',
  request: {
    headers: z.object({
      rid: MultitenancyRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Tenant config result',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({ status: StatusOKSchema.exactOptional() })
              .openapi({ required: [] })
              .and(TenantConfigV2Schema),
            z
              .object({ status: z.literal('TENANT_NOT_FOUND_ERROR').exactOptional() })
              .openapi({ required: [] }),
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    402: _402Response,
    404: _404Response,
    500: _500Response,
  },
})

export const getAppidAppIdTenantIdRecipeDashboardTenantCoreConfigRoute = createRoute({
  method: 'get',
  path: '/appid-<appId>/<tenantId>/recipe/dashboard/tenant/core-config',
  tags: ['Dashboard Recipe'],
  description:
    'Get the core config of the tenant specified by the url prefix, along with the metadata of each of the fields.\n',
  operationId: 'tenantCoreConfigForDashboardGET',
  request: {
    headers: z.object({
      rid: MultitenancyRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Tenant core config result',
      content: {
        'application/json': {
          schema: z
            .object({
              status: StatusOKSchema,
              config: z.array(
                z
                  .object({
                    key: z
                      .string()
                      .exactOptional()
                      .openapi({ example: 'password_reset_token_lifetime' }),
                    valueType: z
                      .enum(['string', 'number', 'boolean'])
                      .nullable()
                      .exactOptional()
                      .openapi({ example: 'number' }),
                    value: z
                      .xor([z.string(), z.number(), z.boolean()])
                      .nullable()
                      .exactOptional()
                      .openapi({ example: 3600000 }),
                    description: z
                      .string()
                      .exactOptional()
                      .openapi({
                        example:
                          'Time in milliseconds for how long a password reset token / link is valid for. [Default: 3600000 (1 hour)]',
                      }),
                    isDifferentAcrossTenants: z.boolean().exactOptional(),
                    possibleValues: z.array(z.string()).nullable().exactOptional(),
                    isNullable: z.boolean().exactOptional().openapi({ example: false }),
                    defaultValue: z
                      .xor([z.string(), z.number(), z.boolean()])
                      .nullable()
                      .exactOptional()
                      .openapi({ example: 3600000 }),
                    isPluginProperty: z.boolean().exactOptional().openapi({ example: false }),
                    isPluginPropertyEditable: z
                      .boolean()
                      .exactOptional()
                      .openapi({ example: false }),
                  })
                  .openapi({ required: [] }),
              ),
            })
            .openapi({ required: ['status', 'config'] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    402: _402Response,
    404: _404Response,
    500: _500Response,
  },
})

export const postAppidAppIdRecipeMultitenancyTenantRemoveRoute = createRoute({
  method: 'post',
  path: '/appid-<appId>/recipe/multitenancy/tenant/remove',
  tags: ['Multitenancy Recipe'],
  description: 'Delete a tenant.\n\nRequest must originate from public tenant.\n',
  operationId: 'deleteTenantPOST',
  request: {
    headers: z.object({
      rid: MultitenancyRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z.object({ tenantId: TenantIdSchema }).openapi({ required: ['tenantId'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Remove tenant result',
      content: {
        'application/json': {
          schema: z
            .object({ status: StatusOKSchema, didExist: z.boolean() })
            .openapi({ required: ['status', 'didExist'] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    402: _402Response,
    404: _404Response,
    500: _500Response,
  },
})

export const getAppidAppIdRecipeMultitenancyTenantListRoute = createRoute({
  method: 'get',
  path: '/appid-<appId>/recipe/multitenancy/tenant/list',
  tags: ['Multitenancy Recipe'],
  description:
    "This API is deprecated. Please use the v2 version of this API. In the v2 version of the API, the login methods are no longer enabled using the `emailPasswordEnabled`, `thirdPartyEnabled` and `passwordlessEnabled` inputs. Instead, they are enabled using factorIds (such as emailpassword, otp-email, etc) specified in the `firstFactors` and `requiredSecondaryFactors` inputs. Please refer [Multitenancy Docs](https://supertokens.com/docs/multitenancy/new-tenant) to know the list of factorIds available.\n\nNote: This deprecated API still returns `emailPasswordEnabled`, `thirdPartyEnabled` and `passwordlessEnabled` values for backward compatibility, and it's values are derived from the `firstFactors` and `requiredSecondaryFactors` configured for the tenant. The detailed computation of the values as per CDI version is described here: https://github.com/supertokens/supertokens-core/issues/979#issuecomment-2099971371\n\nGet a list of all tenants in an app.\n\nRequest must originate from public tenant.\n",
  operationId: 'tenantListGET',
  request: {
    headers: z.object({
      rid: MultitenancyRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'List of tenants',
      content: {
        'application/json': {
          schema: z
            .object({ status: StatusOKSchema, tenants: z.array(TenantConfigSchema) })
            .openapi({ required: ['status', 'tenants'] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  deprecated: true,
})

export const getAppidAppIdRecipeMultitenancyTenantListV2Route = createRoute({
  method: 'get',
  path: '/appid-<appId>/recipe/multitenancy/tenant/list/v2',
  tags: ['Multitenancy Recipe'],
  description:
    'Get a list of all tenants in an app.\n\nThe value of `firstFactors` can be as follows:\n- `null`: When set to `null`, the SDK will use firstFactors defined in the SDK\n- `[]` (empty array): No first factors would be enabled for the tenant\n- non-empty array: The first factors that are enabled for the tenant\n\nRequest must originate from public tenant.\n',
  operationId: 'tenantListV2GET',
  request: {
    headers: z.object({
      rid: MultitenancyRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'List of tenants',
      content: {
        'application/json': {
          schema: z
            .object({ status: StatusOKSchema, tenants: z.array(TenantConfigV2Schema) })
            .openapi({ required: ['status', 'tenants'] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
})

export const putAppidAppIdTenantIdRecipeMultitenancyConfigThirdpartyRoute = createRoute({
  method: 'put',
  path: '/appid-<appId>/<tenantId>/recipe/multitenancy/config/thirdparty',
  tags: ['Multitenancy Recipe'],
  description:
    'Creates or updates ThirdParty Provider Config for a tenant.\n\nIf `skipValidation` is set to true, the config will be saved without any validation.\n\nIf the config already exists for the given `tenantId` and `thirdPartyId`, the config in the core will be completely replaced with the config provided in the request body.\n\n**Validations done by the core:**\n\n`thirdPartyId` and `name` are required\n\nCommon to all providers:\n  - `clients` list:\n    - can be undefined or empty\n    - if contains 1 element, clientType can be empty or undefined\n    - if contains more than 1 element, clientType must be defined and unique\n  - for each element in `clients`:\n    - `clientId` must not be empty\n\nBuilt-in provider\'s specific validation is invoked if the `thirdPartyId` starts with the provider\'s id\n\nApple (id: apple):\n  - `clients`\n    - if it contains elements, each of them are validated as follows:\n      - `clientSecret` must be empty or undefined\n      - `additionalConfig` should contain the following keys:\n        - `keyId` must be a non empty string\n        - `teamId` must be a non empty string\n        - `privateKey` must be a non empty string\n\nGoogle Workspaces (id: google-workspaces):\n  - `clients`\n    - if it contains elements, each of them are validated as follows:\n      - `additionalConfig` may contain the key `hd`\n        - `hd` is optional\n        - if specified, it must be either `"*"`, or a valid domain\n\nBoxy SAML (id: boxy-saml):\n  - `clients`\n    - `additionalConfig` in the each element must contain `boxyURL` and must be non-empty string\n',
  operationId: 'createOrUpdateTenantConfigPUT',
  request: {
    headers: z.object({
      rid: MultitenancyRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              config: ThirdPartyProviderConfigSchema,
              skipValidation: z.boolean().exactOptional().openapi({ example: false }),
            })
            .openapi({ required: ['config'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Create or Update result',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({ status: StatusOKSchema, createdNew: z.boolean() })
              .openapi({ required: ['status', 'createdNew'] }),
            z
              .object({ status: z.literal('CONFIG_VALIDATION_ERROR'), reason: z.string() })
              .openapi({ required: ['status', 'reason'] }),
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    402: _402Response,
    404: _404Response,
    500: _500Response,
  },
})

export const postAppidAppIdTenantIdRecipeMultitenancyConfigThirdpartyRemoveRoute = createRoute({
  method: 'post',
  path: '/appid-<appId>/<tenantId>/recipe/multitenancy/config/thirdparty/remove',
  tags: ['Multitenancy Recipe'],
  description: 'Delete ThirdParty Provider config for a tenant.\n',
  operationId: 'deleteTenantConfigPOST',
  request: {
    headers: z.object({
      rid: MultitenancyRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ thirdPartyId: ThirdPartyIdSchema })
            .openapi({ required: ['thirdPartyId'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Remove thirdParty config result',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                status: StatusOKSchema.exactOptional(),
                didConfigExist: z.boolean().exactOptional(),
              })
              .openapi({ required: [] }),
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    402: _402Response,
    404: _404Response,
    500: _500Response,
  },
})

export const postAppidAppIdTenantIdRecipeMultitenancyTenantUserRoute = createRoute({
  method: 'post',
  path: '/appid-<appId>/<tenantId>/recipe/multitenancy/tenant/user',
  tags: ['Multitenancy Recipe'],
  description:
    "Add user's association with the tenant.\n\nUser will be added to the tenant based on the url prefix of the request.\n\nNote: To associate a user to a tenant, the tenant must be in the same database\nand user must already exist in the app\n",
  operationId: 'addUserToTenant',
  request: {
    headers: z.object({
      rid: MultitenancyRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z.object({ recipeUserId: UserIdSchema }).openapi({ required: ['recipeUserId'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Association result',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({ status: StatusOKSchema, wasAlreadyAssociated: z.boolean() })
              .openapi({ required: ['status', 'wasAlreadyAssociated'] }),
            z
              .object({
                status: z.enum([
                  'UNKNOWN_USER_ID_ERROR',
                  'EMAIL_ALREADY_EXISTS_ERROR',
                  'PHONE_NUMBER_ALREADY_EXISTS_ERROR',
                  'THIRD_PARTY_USER_ALREADY_EXISTS_ERROR',
                ]),
              })
              .openapi({ required: ['status'] }),
            z
              .object({
                status: z.literal('ASSOCIATION_NOT_ALLOWED_ERROR').exactOptional(),
                reason: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    402: _402Response,
    404: _404Response,
    500: _500Response,
  },
})

export const postAppidAppIdTenantIdRecipeMultitenancyTenantUserRemoveRoute = createRoute({
  method: 'post',
  path: '/appid-<appId>/<tenantId>/recipe/multitenancy/tenant/user/remove',
  tags: ['Multitenancy Recipe'],
  description:
    "Remove user's association with the tenant\n\nUser will be removed from the tenant based on the url prefix of the request.\n",
  operationId: 'removeUserFromTenant',
  request: {
    headers: z.object({
      rid: MultitenancyRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z.object({ recipeUserId: UserIdSchema }).openapi({ required: ['recipeUserId'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Disassociation result',
      content: {
        'application/json': {
          schema: z
            .object({ status: StatusOKSchema, wasAssociated: z.boolean() })
            .openapi({ required: ['status', 'wasAssociated'] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    402: _402Response,
    404: _404Response,
    500: _500Response,
  },
})

export const getAppidAppIdRecipeOauthClientsRoute = createRoute({
  method: 'get',
  path: '/appid-<appId>/recipe/oauth/clients',
  tags: ['OAuth2Provider Recipe'],
  description: 'Get OAuth2 Client\n',
  operationId: 'getOAuth2Client',
  request: {
    headers: z.object({
      rid: OauthRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    query: z.object({
      clientId: z
        .string()
        .openapi({
          param: {
            name: 'clientId',
            in: 'query',
            required: true,
            schema: { type: 'string' },
            example: 'abcd',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OAuth2 Client Result',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({ status: StatusOKSchema.exactOptional() })
              .openapi({ required: [] })
              .and(OauthClientSchema),
            OauthErrorSchema,
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    402: _402Response,
    404: _404Response,
    500: _500Response,
  },
})

export const putAppidAppIdRecipeOauthClientsRoute = createRoute({
  method: 'put',
  path: '/appid-<appId>/recipe/oauth/clients',
  tags: ['OAuth2Provider Recipe'],
  description: 'Update OAuth2 Client\n',
  operationId: 'updateOAuth2Client',
  request: {
    headers: z.object({
      rid: OauthRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: { content: { 'application/json': { schema: OauthClientSchema } } },
  },
  responses: {
    200: {
      description: 'OAuth2 Client Result',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({ status: StatusOKSchema.exactOptional() })
              .openapi({ required: [] })
              .and(OauthClientSchema),
            OauthErrorSchema,
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    402: _402Response,
    404: _404Response,
    500: _500Response,
  },
})

export const postAppidAppIdRecipeOauthClientsRoute = createRoute({
  method: 'post',
  path: '/appid-<appId>/recipe/oauth/clients',
  tags: ['OAuth2Provider Recipe'],
  description: 'Create OAuth2 Client\n',
  operationId: 'createOAuth2Client',
  request: {
    headers: z.object({
      rid: OauthRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: { content: { 'application/json': { schema: OauthClientSchema } } },
  },
  responses: {
    200: {
      description: 'OAuth2 Client Result',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({ status: StatusOKSchema.exactOptional() })
              .openapi({ required: [] })
              .and(OauthClientSchema),
            OauthErrorSchema,
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    402: _402Response,
    404: _404Response,
    500: _500Response,
  },
})

export const getAppidAppIdRecipeOauthClientsListRoute = createRoute({
  method: 'get',
  path: '/appid-<appId>/recipe/oauth/clients/list',
  tags: ['OAuth2Provider Recipe'],
  description: 'List OAuth2 Clients\n',
  operationId: 'listOAuth2Clients',
  request: {
    headers: z.object({
      rid: OauthRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    query: z.object({
      pageSize: z
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
            name: 'pageSize',
            in: 'query',
            required: false,
            schema: { type: 'integer', example: 250 },
          },
          example: 250,
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'pageToken',
            in: 'query',
            required: false,
            schema: { type: 'string', example: '1234567890' },
          },
          example: '1234567890',
        }),
      clientName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'clientName',
            in: 'query',
            required: false,
            schema: { type: 'string', example: 'My App' },
          },
          example: 'My App',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OAuth2 Client Result',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                status: StatusOKSchema.exactOptional(),
                clients: z.array(OauthClientSchema).exactOptional(),
                nextPaginationToken: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
            OauthErrorSchema,
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    402: _402Response,
    404: _404Response,
    500: _500Response,
  },
})

export const postAppidAppIdRecipeOauthClientsRemoveRoute = createRoute({
  method: 'post',
  path: '/appid-<appId>/recipe/oauth/clients/remove',
  tags: ['OAuth2Provider Recipe'],
  description: 'Remove OAuth2 Client\n',
  operationId: 'removeOAuth2Client',
  request: {
    headers: z.object({
      rid: OauthRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              clientId: z
                .string()
                .exactOptional()
                .openapi({ example: 'stcl_c6dd9189-33b8-4ec0-8aea-a0ffdaf75fcb' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OAuth2 Client Result',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                status: StatusOKSchema.exactOptional(),
                didExist: z.boolean().exactOptional().openapi({ example: true }),
              })
              .openapi({ required: [] }),
            OauthErrorSchema,
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    402: _402Response,
    404: _404Response,
    500: _500Response,
  },
})

export const getAppidAppIdRecipeOauthAuthRequestsConsentRoute = createRoute({
  method: 'get',
  path: '/appid-<appId>/recipe/oauth/auth/requests/consent',
  tags: ['OAuth2Provider Recipe'],
  description: 'Get OAuth2 Consent Request\n',
  operationId: 'getOAuth2ConsentRequest',
  request: {
    headers: z.object({
      rid: OauthRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    query: z.object({
      consentChallenge: z
        .string()
        .openapi({
          param: {
            name: 'consentChallenge',
            in: 'query',
            required: true,
            schema: { type: 'string', example: '1234567890' },
          },
          example: '1234567890',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OAuth2 Consent Request Result',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                status: StatusOKSchema.exactOptional(),
                client: OauthClientSchema.exactOptional(),
                requestedScope: z.array(z.string()).exactOptional(),
                requestedAudience: z.array(z.string()).exactOptional(),
                requestedClaims: z
                  .object({
                    idToken: z
                      .object({
                        property1: z.string().exactOptional(),
                        property2: z.string().exactOptional(),
                      })
                      .exactOptional()
                      .openapi({ required: [] }),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
                loginHint: z.string().exactOptional(),
                uiLocales: z.array(z.string()).exactOptional(),
                acrValues: z.array(z.string()).exactOptional(),
                subject: z.string().exactOptional(),
                requestUrl: z.string().exactOptional(),
                skip: z.boolean().exactOptional(),
                clientId: z.string().exactOptional(),
                redirectUri: z.string().exactOptional(),
                forceSubjectIdentifier: z.string().exactOptional(),
                requestedAccessTokenAudience: z.array(z.string()).exactOptional(),
                context: z.looseObject({}).exactOptional(),
                sessionId: z.string().exactOptional(),
                loginSessionId: z.string().exactOptional(),
                loginChallenge: z.string().exactOptional(),
                loginRequestedAt: z.string().exactOptional(),
                consentRequestedAt: z.string().exactOptional(),
                consentChallenge: z.string().exactOptional(),
                consentSkip: z.boolean().exactOptional(),
                consentRemember: z.boolean().exactOptional(),
                consentRememberFor: z.int().exactOptional(),
                consentError: z
                  .object({
                    name: z.string().exactOptional(),
                    description: z.string().exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
                consentErrorDebug: z.string().exactOptional(),
                consentErrorDescription: z.string().exactOptional(),
                consentErrorHint: z.string().exactOptional(),
                consentErrorCode: z.string().exactOptional(),
                consentStatusCode: z.int().exactOptional(),
                sessionIdToken: z
                  .object({
                    property1: z.string().exactOptional(),
                    property2: z.string().exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
                sessionAccessToken: z
                  .object({
                    property1: z.string().exactOptional(),
                    property2: z.string().exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
                sessionToken: z
                  .object({
                    property1: z.string().exactOptional(),
                    property2: z.string().exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
              })
              .openapi({ required: [] }),
            OauthErrorSchema,
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    402: _402Response,
    404: _404Response,
    500: _500Response,
  },
})

export const putAppidAppIdRecipeOauthAuthRequestsConsentAcceptRoute = createRoute({
  method: 'put',
  path: '/appid-<appId>/recipe/oauth/auth/requests/consent/accept',
  tags: ['OAuth2Provider Recipe'],
  description: 'Accept OAuth2 Consent Request\n',
  operationId: 'acceptOAuth2ConsentRequest',
  request: {
    headers: z.object({
      rid: OauthRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    query: z.object({
      consentChallenge: z
        .string()
        .openapi({
          param: {
            name: 'consentChallenge',
            in: 'query',
            required: true,
            schema: { type: 'string', example: '1234567890' },
          },
          example: '1234567890',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              context: z.looseObject({}).exactOptional(),
              grantAccessTokenAudience: z.array(z.string()).exactOptional(),
              grantScope: z.array(z.string()).exactOptional(),
              handledAt: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ example: '2019-08-24T14:15:22Z' }),
              remember: z.boolean().exactOptional(),
              rememberFor: z.int().exactOptional(),
              session: z
                .object({
                  accessToken: z.looseObject({}).exactOptional(),
                  idToken: z.looseObject({}).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OAuth2 Consent Request Result',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                status: StatusOKSchema.exactOptional(),
                redirectTo: z
                  .string()
                  .exactOptional()
                  .openapi({ example: '{apiDomain}/oauth/consent?...' }),
              })
              .openapi({ required: [] }),
            OauthErrorSchema,
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    402: _402Response,
    404: _404Response,
    500: _500Response,
  },
})

export const putAppidAppIdRecipeOauthAuthRequestsConsentRejectRoute = createRoute({
  method: 'put',
  path: '/appid-<appId>/recipe/oauth/auth/requests/consent/reject',
  tags: ['OAuth2Provider Recipe'],
  description: 'Reject OAuth2 Consent Request\n',
  operationId: 'rejectOAuth2ConsentRequest',
  request: {
    headers: z.object({
      rid: OauthRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    query: z.object({
      consentChallenge: z
        .string()
        .openapi({
          param: {
            name: 'consentChallenge',
            in: 'query',
            required: true,
            schema: { type: 'string', example: '1234567890' },
          },
          example: '1234567890',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().exactOptional(),
              errorDebug: z.string().exactOptional(),
              errorDescription: z.string().exactOptional(),
              errorHint: z.string().exactOptional(),
              statusCode: z.int().exactOptional().openapi({ example: 400 }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OAuth2 Consent Request Result',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                status: StatusOKSchema.exactOptional(),
                redirectTo: z
                  .string()
                  .exactOptional()
                  .openapi({ example: '{apiDomain}/oauth/consent?...' }),
              })
              .openapi({ required: [] }),
            OauthErrorSchema,
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    402: _402Response,
    404: _404Response,
    500: _500Response,
  },
})

export const getAppidAppIdRecipeOauthAuthRequestsLoginRoute = createRoute({
  method: 'get',
  path: '/appid-<appId>/recipe/oauth/auth/requests/login',
  tags: ['OAuth2Provider Recipe'],
  description: 'Get OAuth2 Login Request\n',
  operationId: 'getOAuth2LoginRequest',
  request: {
    headers: z.object({
      rid: OauthRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    query: z.object({
      loginChallenge: z
        .string()
        .openapi({
          param: {
            name: 'loginChallenge',
            in: 'query',
            required: true,
            schema: { type: 'string', example: '1234567890' },
          },
          example: '1234567890',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OAuth2 Login Result',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                status: StatusOKSchema.exactOptional(),
                challenge: z.string().exactOptional(),
                client: OauthClientSchema.exactOptional(),
                oidcContext: z
                  .object({
                    acrValues: z.array(z.string()).exactOptional(),
                    display: z.string().exactOptional(),
                    idTokenHintClaims: z.looseObject({}).exactOptional(),
                    loginHint: z.string().exactOptional(),
                    uiLocales: z.array(z.string()).exactOptional(),
                    requestUrl: z.string().exactOptional(),
                    requestedAccessTokenAudience: z.array(z.string()).exactOptional(),
                    requestedScope: z.array(z.string()).exactOptional(),
                    sessionId: z.string().exactOptional(),
                    skip: z.boolean().exactOptional(),
                    subject: z.string().exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
              })
              .openapi({ required: [] }),
            OauthErrorSchema,
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    402: _402Response,
    404: _404Response,
    500: _500Response,
  },
})

export const putAppidAppIdRecipeOauthAuthRequestsLoginAcceptRoute = createRoute({
  method: 'put',
  path: '/appid-<appId>/recipe/oauth/auth/requests/login/accept',
  tags: ['OAuth2Provider Recipe'],
  description: 'Accept OAuth2 Login Request\n',
  operationId: 'acceptOAuth2LoginRequest',
  request: {
    headers: z.object({
      rid: OauthRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    query: z.object({
      loginChallenge: z
        .string()
        .openapi({
          param: {
            name: 'loginChallenge',
            in: 'query',
            required: true,
            schema: { type: 'string', example: '1234567890' },
          },
          example: '1234567890',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              acr: z.string().exactOptional(),
              amr: z.array(z.string()).exactOptional(),
              context: z.string().nullable().exactOptional(),
              extendSessionLifespan: z.boolean().exactOptional().openapi({ example: true }),
              forceSubjectIdentifier: z.string().exactOptional(),
              identityProviderSessionId: z.string().exactOptional(),
              remember: z.boolean().exactOptional().openapi({ example: true }),
              rememberFor: z.int().exactOptional().openapi({ example: 0 }),
              subject: z.string(),
            })
            .openapi({ required: ['subject'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OAuth2 Login Result',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                status: StatusOKSchema.exactOptional(),
                redirectTo: z
                  .string()
                  .exactOptional()
                  .openapi({ example: '{apiDomain}/oauth/login?...' }),
              })
              .openapi({ required: [] }),
            OauthErrorSchema,
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    402: _402Response,
    404: _404Response,
    500: _500Response,
  },
})

export const putAppidAppIdRecipeOauthAuthRequestsLoginRejectRoute = createRoute({
  method: 'put',
  path: '/appid-<appId>/recipe/oauth/auth/requests/login/reject',
  tags: ['OAuth2Provider Recipe'],
  description: 'Reject OAuth2 Login Request\n',
  operationId: 'rejectOAuth2LoginRequest',
  request: {
    headers: z.object({
      rid: OauthRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    query: z.object({
      loginChallenge: z
        .string()
        .openapi({
          param: {
            name: 'loginChallenge',
            in: 'query',
            required: true,
            schema: { type: 'string', example: '1234567890' },
          },
          example: '1234567890',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().exactOptional(),
              errorDebug: z.string().exactOptional(),
              errorDescription: z.string().exactOptional(),
              errorHint: z.string().exactOptional(),
              statusCode: z.int().exactOptional().openapi({ example: 0 }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OAuth2 Login Result',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                status: StatusOKSchema.exactOptional(),
                redirectTo: z
                  .string()
                  .exactOptional()
                  .openapi({ example: '{apiDomain}/oauth/login?...' }),
              })
              .openapi({ required: [] }),
            OauthErrorSchema,
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    402: _402Response,
    404: _404Response,
    500: _500Response,
  },
})

export const putAppidAppIdRecipeOauthAuthRequestsLogoutAcceptRoute = createRoute({
  method: 'put',
  path: '/appid-<appId>/recipe/oauth/auth/requests/logout/accept',
  tags: ['OAuth2Provider Recipe'],
  description: 'Accept OAuth2 Logout Request\n',
  operationId: 'acceptOAuth2LogoutRequest',
  request: {
    headers: z.object({
      rid: OauthRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z.object({ challenge: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OAuth2 Logout Result',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                status: StatusOKSchema.exactOptional(),
                redirectTo: z
                  .string()
                  .exactOptional()
                  .openapi({ example: '{apiDomain}/oauth/logout?...' }),
              })
              .openapi({ required: [] }),
            OauthErrorSchema,
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    402: _402Response,
    404: _404Response,
    500: _500Response,
  },
})

export const putAppidAppIdRecipeOauthAuthRequestsLogoutRejectRoute = createRoute({
  method: 'put',
  path: '/appid-<appId>/recipe/oauth/auth/requests/logout/reject',
  tags: ['OAuth2Provider Recipe'],
  description: 'Reject OAuth2 Logout Request\n',
  operationId: 'rejectOAuth2LogoutRequest',
  request: {
    headers: z.object({
      rid: OauthRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z.object({ challenge: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OAuth2 Logout Result',
      content: {
        'application/json': {
          schema: z.xor([
            z.object({ status: StatusOKSchema.exactOptional() }).openapi({ required: [] }),
            OauthErrorSchema,
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    402: _402Response,
    404: _404Response,
    500: _500Response,
  },
})

export const postAppidAppIdRecipeOauthSessionRevokeRoute = createRoute({
  method: 'post',
  path: '/appid-<appId>/recipe/oauth/session/revoke',
  tags: ['OAuth2Provider Recipe'],
  description: 'Revoke OAuth2 Session\n',
  operationId: 'revokeOAuth2Session',
  request: {
    headers: z.object({
      rid: OauthRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z.object({ sessionHandle: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OAuth2 Session Revocation Result',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                status: StatusOKSchema.exactOptional(),
                didExist: z.boolean().exactOptional().openapi({ example: true }),
              })
              .openapi({ required: [] }),
            OauthErrorSchema,
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    402: _402Response,
    404: _404Response,
    500: _500Response,
  },
})

export const postAppidAppIdRecipeOauthTokenRevokeRoute = createRoute({
  method: 'post',
  path: '/appid-<appId>/recipe/oauth/token/revoke',
  tags: ['OAuth2Provider Recipe'],
  description: 'Revoke OAuth2 Token\n',
  operationId: 'revokeOAuth2Token',
  request: {
    headers: z.object({
      rid: OauthRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z.object({ token: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OAuth2 Token Revocation Result',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                status: StatusOKSchema.exactOptional(),
                didExist: z.boolean().exactOptional().openapi({ example: true }),
              })
              .openapi({ required: [] }),
            OauthErrorSchema,
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    402: _402Response,
    404: _404Response,
    500: _500Response,
  },
})

export const postAppidAppIdRecipeOauthTokensRevokeRoute = createRoute({
  method: 'post',
  path: '/appid-<appId>/recipe/oauth/tokens/revoke',
  tags: ['OAuth2Provider Recipe'],
  description: 'Revoke OAuth2 Token\n',
  operationId: 'revokeOAuth2Tokens',
  request: {
    headers: z.object({
      rid: OauthRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              client_id: z
                .string()
                .exactOptional()
                .openapi({ example: 'stcl_fed7cff0-cc6e-406e-b7a6-766148675a4a' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OAuth2 Token Revocation Result',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                status: StatusOKSchema.exactOptional(),
                didExist: z.boolean().exactOptional().openapi({ example: true }),
              })
              .openapi({ required: [] }),
            OauthErrorSchema,
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    402: _402Response,
    404: _404Response,
    500: _500Response,
  },
})

export const getAppidAppIdRecipeOauthAuthRoute = createRoute({
  method: 'get',
  path: '/appid-<appId>/recipe/oauth/auth',
  tags: ['OAuth2Provider Recipe'],
  description: 'Get OAuth2 Auth\n',
  operationId: 'getOAuth2Auth',
  request: {
    headers: z.object({
      rid: OauthRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OAuth2 Auth Result',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({ status: StatusOKSchema.exactOptional() })
              .openapi({ required: [] })
              .and(OauthClientSchema),
            OauthErrorSchema,
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    402: _402Response,
    404: _404Response,
    500: _500Response,
  },
})

export const postAppidAppIdRecipeOauthTokenRoute = createRoute({
  method: 'post',
  path: '/appid-<appId>/recipe/oauth/token',
  tags: ['OAuth2Provider Recipe'],
  description: 'Get OAuth2 Token\n',
  operationId: 'getOAuth2Token',
  request: {
    headers: z.object({
      rid: OauthRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              iss: z.string().exactOptional().openapi({ example: 'https://api.auth.com' }),
              inputBody: z.looseObject({}).exactOptional().openapi({ example: {} }),
              useStaticSigningKey: z.boolean().exactOptional().openapi({ example: false }),
              authorizationHeader: z
                .string()
                .exactOptional()
                .openapi({ example: 'Bearer 1234567890' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OAuth2 Token Result',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                status: StatusOKSchema,
                access_token: z
                  .string()
                  .openapi({
                    example:
                      'eyJraWQiOiJzLTBjZmVmMDdkLWQ2NDktNGIwOC04MTVjLWJkYjZlYTczNWQyZCIsInR5cCI6IkpXVCIsImFsZyI6IlJTMjU2In0.eyJpYXQiOjE3NDAzODU5MzcsImV4cCI6MTc0MDM4OTUzOCwiY2xpZW50X2lkIjoic3RjbF82NWUwODc1Mi0yYzU5LTQ5NjQtOTM0Yy02OTIwZDJmMDZlNjIiLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjMwMDEvYXV0aCIsImp0aSI6Ijc1NTc2MmFmLTUwYTUtNDc1ZS04YWRkLTg3MDA1ZmU3YWJlNiIsIm5iZiI6MTc0MDM4NTkzNywic2NwIjpbIm9wZW5pZCIsIm9mZmxpbmVfYWNjZXNzIl0sInN1YiI6InNvbWV1c2VyaWQiLCJzdHQiOjEsImdpZCI6ImRjOGQ0OGUzLTcwOTgtNDhhNi1hYjU0LTgxMWMyODQ4N2I4MiIsInRJZCI6InB1YmxpYyIsInJzdWIiOiJzb21ldXNlcmlkIiwic2Vzc2lvbkhhbmRsZSI6InNlc3Npb24taGFuZGxlIn0.DgVgtD2gXgzHrDsC2lIUBa-wsYm8KO4Pg8L1Ov3aSBVgjwtjiCO40ldjBZ9qKdQBq5Qqk0ElAZNj6Bzc40ESfQumLH3_N2XtOj568s71JPuEOIg5hs9XAdK4vYfXMhVQRWn9iPUKHKrpRVf73IIH0mpkN8i6_MhcDoMMOuG5XPlXajG9VOyoY_5saHA61-uTafZLdAgKqnmYGvS8KmNEcEbBWLGwFB4QQKiDAUvatIi5n3juFBUxyt9t6DrqT1D04shesRppa0XhCZbCFBv1dixSrprdtqKhlPOrMgvOGNZ3cBLbYBOG9zoJRD5YlVMGw-j_pE7IbvpDWKL7tTJS1Q',
                  }),
                expires_in: z.int().exactOptional().openapi({ example: 3599 }),
                id_token: z
                  .string()
                  .exactOptional()
                  .openapi({
                    example:
                      'eyJraWQiOiJzLTBjZmVmMDdkLWQ2NDktNGIwOC04MTVjLWJkYjZlYTczNWQyZCIsInR5cCI6IkpXVCIsImFsZyI6IlJTMjU2In0.eyJpYXQiOjE3NDAzODU5MzgsImV4cCI6MTc0MDM4OTUzOCwiYXRfaGFzaCI6IkNxOGNCSk01Nm5FcG9aaWREcnZvLVEiLCJhdWQiOiJzdGNsXzY1ZTA4NzUyLTJjNTktNDk2NC05MzRjLTY5MjBkMmYwNmU2MiIsImF1dGhfdGltZSI6MTc0MDM4NTkzNywiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDozMDAxL2F1dGgiLCJqdGkiOiIxZDA5OGUxZi04ZGIxLTQyNzUtYmMzYS0zYTA4NjdjOWE2NTAiLCJyYXQiOjE3NDAzODU3MzEsInNpZCI6InNlc3Npb24taGFuZGxlIiwic3ViIjoic29tZXVzZXJpZCIsInN0dCI6MiwiZ2lkIjoiYzk1OTVjYjItMWFjOS00MDI0LWFjNjMtNDJlZDEyODliY2RmIn0.PGsemf1qpLF-cE_616NHvKsRmanFiyba0yqF2j5fy87AWD5McI405A4eqi-wAlKsDxC-MPpuW8bx-08YUhs3x6ku4aFaDyA-M-Xhc65fJJ4SCPVaUL7qlUwl7wJwNs2rMRW3Ayyj4MDSlW5uqm39_K_bBqod2Qj1yqck-N0g78qh86uEcyX6Al3d5KSln1B21nwDsEgegk3xzE8lFMCQUTpZEYb5-1v2D0Bu_PblBfOCjA6mBtT1IIQkmSE27FvkTUS1H50EUyhFP4JH30kP3bUnQ9pOqGMTe405N2ruKtPyWsXHLPlQ4hcJCLO5GT5ZgtUjfz6Y3mCM9l69uDYDHg',
                  }),
                refresh_token: z
                  .string()
                  .exactOptional()
                  .openapi({
                    example:
                      'st_rt_d7LI9mGYHF2TAaVEFJi7fqOWo8ZQ8zEGpuxhHQs0R18.UZ0nbTuuYuDD8G54PCD8AKHdsh9cezu8BTxVlTy7pYw',
                  }),
                scope: z.string().exactOptional().openapi({ example: 'openid offline_access' }),
                token_type: z.string().exactOptional().openapi({ example: 'bearer' }),
              })
              .openapi({ required: ['status', 'access_token'] }),
            OauthErrorSchema,
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    402: _402Response,
    404: _404Response,
    500: _500Response,
  },
})

export const getAppidAppIdRecipeOauthSessionsLogoutRoute = createRoute({
  method: 'get',
  path: '/appid-<appId>/recipe/oauth/sessions/logout',
  tags: ['OAuth2Provider Recipe'],
  description: 'Get OAuth2 Sessions Logout\n',
  operationId: 'getOAuth2SessionsLogout',
  request: {
    headers: z.object({
      rid: OauthRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    query: z.object({
      clientId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'clientId',
            in: 'query',
            required: false,
            schema: { type: 'string', example: 'stcl_fed7cff0-cc6e-406e-b7a6-766148675a4a' },
          },
          example: 'stcl_fed7cff0-cc6e-406e-b7a6-766148675a4a',
        }),
      idTokenHint: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'idTokenHint', in: 'query', required: false, schema: { type: 'string' } },
        }),
      postLogoutRedirectUri: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'postLogoutRedirectUri',
            in: 'query',
            required: false,
            schema: { type: 'string' },
          },
        }),
      state: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'state', in: 'query', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OAuth2 Sessions Logout Result',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                status: StatusOKSchema.exactOptional(),
                redirectTo: z
                  .string()
                  .exactOptional()
                  .openapi({ example: '{apiDomain}/oauth/logout?...' }),
              })
              .openapi({ required: [] }),
            OauthErrorSchema,
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    402: _402Response,
    404: _404Response,
    500: _500Response,
  },
})

export const postAppidAppIdRecipeOauthIntrospectRoute = createRoute({
  method: 'post',
  path: '/appid-<appId>/recipe/oauth/introspect',
  tags: ['OAuth2Provider Recipe'],
  description: 'Introspect OAuth2 Token\n',
  operationId: 'introspectOAuth2Token',
  request: {
    headers: z.object({
      rid: OauthRidParamsSchema,
      Authorization: ApiKeyParamsSchema,
      'cdi-version': CdiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z.object({ token: z.string() }).openapi({ required: ['token'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OAuth2 Token Introspection Result',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                status: StatusOKSchema.exactOptional(),
                active: z.boolean().exactOptional(),
                iat: z.int().exactOptional().openapi({ example: 1740992368 }),
                exp: z.int().exactOptional().openapi({ example: 1740995969 }),
                client_id: z
                  .string()
                  .exactOptional()
                  .openapi({ example: 'stcl_fed7cff0-cc6e-406e-b7a6-766148675a4a' }),
                iss: z.string().exactOptional().openapi({ example: 'http://localhost:3001/auth' }),
                jti: z
                  .string()
                  .exactOptional()
                  .openapi({ example: '1c229efe-c55b-44c1-98cf-9fa3a366502e' }),
                nbf: z.int().exactOptional().openapi({ example: 1740992368 }),
                scp: z
                  .array(z.string())
                  .exactOptional()
                  .openapi({ example: ['openid', 'offline_access'] }),
                sub: z
                  .string()
                  .exactOptional()
                  .openapi({ example: '137d053d-0d69-4dea-8a19-06ddbdfa4f96' }),
                stt: z.int().exactOptional().openapi({ example: 1 }),
                sessionHandle: z
                  .string()
                  .exactOptional()
                  .openapi({ example: '87bcc2d8-f159-4e10-a097-0898179a2d7d' }),
                rsub: z
                  .string()
                  .exactOptional()
                  .openapi({ example: '137d053d-0d69-4dea-8a19-06ddbdfa4f96' }),
                tId: z.string().exactOptional().openapi({ example: 'public' }),
                gid: z
                  .string()
                  .exactOptional()
                  .openapi({ example: '575b7130-d982-4945-be49-3ecde2a49eaa' }),
                token_type: z.string().exactOptional().openapi({ example: 'Bearer' }),
                token_use: z.string().exactOptional().openapi({ example: 'access_token' }),
              })
              .openapi({ required: [] }),
            OauthErrorSchema,
          ]),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    402: _402Response,
    404: _404Response,
    500: _500Response,
  },
})
