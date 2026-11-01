import { createRoute, z } from '@hono/zod-openapi'

const ZonedDateTimeSchema = z
  .preprocess(
    (val) =>
      typeof val === 'number' && Number.isSafeInteger(val)
        ? BigInt(val)
        : typeof val === 'string' && /^-?\d+$/.test(val)
          ? BigInt(val)
          : val,
    z.int64(),
  )
  .openapi({
    type: 'integer',
    format: 'int64',
    description:
      'The number of milliseconds since the unix epoch: January 1, 1970 00:00:00 UTC. This value is always in UTC.',
    example: '1659380719000',
  })
  .openapi('ZonedDateTime')

const RequirableSchema = z
  .object({ required: z.boolean().exactOptional(), enabled: z.boolean().exactOptional() })
  .openapi({
    description:
      'Something that can be required and thus also optional. This currently extends Enableable because anything that is  requiredoptional is almost always enableable as well.',
    required: [],
  })
  .openapi('Requirable')

const ProvidedScopePolicySchema = z
  .object({
    address: RequirableSchema.exactOptional(),
    email: RequirableSchema.exactOptional(),
    phone: RequirableSchema.exactOptional(),
    profile: RequirableSchema.exactOptional(),
  })
  .openapi({ description: 'The handling policy for scopes provided by FusionAuth', required: [] })
  .openapi('ProvidedScopePolicy')

const ApplicationOAuthScopeSchema = z
  .object({
    applicationId: z.uuid().exactOptional(),
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    defaultConsentDetail: z.string().exactOptional(),
    defaultConsentMessage: z.string().exactOptional(),
    description: z.string().exactOptional(),
    id: z.uuid().exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    lastUpdateInstant: ZonedDateTimeSchema.exactOptional(),
    name: z.string().exactOptional(),
    required: z.boolean().exactOptional(),
  })
  .openapi({ description: 'A custom OAuth scope for a specific application.', required: [] })
  .openapi('ApplicationOAuthScope')

const CimdClientRegistrationResourceOverrideSchema = z
  .object({
    providedScopePolicy: ProvidedScopePolicySchema.exactOptional(),
    scopes: z.array(ApplicationOAuthScopeSchema).exactOptional(),
  })
  .openapi({
    description:
      'Application configuration overrides for one OAuth resource requested by a CIMD client registration.',
    required: [],
  })
  .openapi('CimdClientRegistrationResourceOverride')

const CimdClientRegistrationStateSchema = z
  .enum(['Active', 'Grace', 'Expired'])
  .openapi({
    description:
      'The computed lifecycle state of a {@link CimdClientRegistration}. Never persisted; derived at read time from  {@code cacheExpirationInstant} and {@code graceExpirationInstant}.',
  })
  .openapi('CimdClientRegistrationState')

const CimdClientRegistrationSchema = z
  .object({
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    cacheExpirationInstant: ZonedDateTimeSchema.exactOptional(),
    cimdDomainId: z.uuid().exactOptional(),
    clientIdUrl: z.string().exactOptional(),
    clientName: z.string().exactOptional(),
    clientUri: z.string().exactOptional(),
    graceExpirationInstant: ZonedDateTimeSchema.exactOptional(),
    id: z.uuid().exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    jwtPopulateLambdaId: z.uuid().exactOptional(),
    lastUpdateInstant: ZonedDateTimeSchema.exactOptional(),
    overridesByResource: z
      .record(z.string(), CimdClientRegistrationResourceOverrideSchema)
      .exactOptional(),
    redirectUris: z.array(z.string()).exactOptional(),
    tenantId: z.uuid().exactOptional(),
    state: CimdClientRegistrationStateSchema.exactOptional(),
  })
  .openapi({
    description:
      'A CIMD (Client ID Metadata Document) client registration. Represents one concrete, fetched {@code client_id} URL registered against  a {@link CimdDomain}.',
    required: [],
  })
  .openapi('CimdClientRegistration')

type CimdClientRegistrationSearchResponseType = {
  registrations?: z.infer<typeof CimdClientRegistrationSchema>[]
  total?: bigint
}

const EntityJWTConfigurationSchema = z
  .object({
    accessTokenKeyId: z.uuid().exactOptional(),
    accessTokenVerificationKeyIds: z.array(z.uuid()).exactOptional(),
    timeToLiveInSeconds: z.int().exactOptional(),
    enabled: z.boolean().exactOptional(),
  })
  .openapi({ description: 'JWT Configuration for entities.', required: [] })
  .openapi('EntityJWTConfiguration')

const EntityTypePermissionSchema = z
  .object({
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    description: z.string().exactOptional(),
    id: z.uuid().exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    isDefault: z.boolean().exactOptional(),
    lastUpdateInstant: ZonedDateTimeSchema.exactOptional(),
    name: z.string().exactOptional(),
  })
  .openapi({
    description:
      'Models a specific entity type permission. This permission can be granted to users or other entities.',
    required: [],
  })
  .openapi('EntityTypePermission')

const EntityTypeSchema = z
  .object({
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    id: z.uuid().exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    jwtConfiguration: EntityJWTConfigurationSchema.exactOptional(),
    lastUpdateInstant: ZonedDateTimeSchema.exactOptional(),
    name: z.string().exactOptional(),
    permissions: z.array(EntityTypePermissionSchema).exactOptional(),
  })
  .openapi({
    description:
      'Models an entity type that has a specific set of permissions. These are global objects and can be used across tenants.',
    required: [],
  })
  .openapi('EntityType')

const EntitySchema = z
  .object({
    actAsTokenExchangeClient: z.boolean().exactOptional(),
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    clientId: z.string().exactOptional(),
    clientSecret: z.string().exactOptional(),
    id: z.uuid().exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    lastUpdateInstant: ZonedDateTimeSchema.exactOptional(),
    name: z.string().exactOptional(),
    parentId: z.uuid().exactOptional(),
    tenantId: z.uuid().exactOptional(),
    type: EntityTypeSchema.exactOptional(),
  })
  .openapi({
    description:
      'Models an entity that a user can be granted permissions to. Or an entity that can be granted permissions to another entity.',
    required: [],
  })
  .openapi('Entity')

const EntityGrantSchema = z
  .object({
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    entity: EntitySchema.exactOptional(),
    id: z.uuid().exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    lastUpdateInstant: ZonedDateTimeSchema.exactOptional(),
    permissions: z
      .array(z.any())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    recipientEntityId: z.uuid().exactOptional(),
    userId: z.uuid().exactOptional(),
  })
  .openapi({ description: 'A grant for an entity to a user or another entity.', required: [] })
  .openapi('EntityGrant')

type EntityGrantResponseType = {
  grants?: z.infer<typeof EntityGrantSchema>[]
  grant?: z.infer<typeof EntityGrantSchema>
}

type EntityGrantSearchResponseType = {
  grants?: z.infer<typeof EntityGrantSchema>[]
  total?: bigint
}

const APIKeyMetaDataSchema = z
  .object({ attributes: z.record(z.string(), z.string()).exactOptional() })
  .openapi({ required: [] })
  .openapi('APIKeyMetaData')

const APIKeyPermissionsSchema = z
  .object({
    endpoints: z
      .record(
        z.string(),
        z.array(z.any()).superRefine((items, ctx) => {
          const seen = new Map()
          for (const [i, val] of items.entries()) {
            const key = JSON.stringify(val)
            if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
            else seen.set(key, i)
          }
        }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('APIKeyPermissions')

const APIKeySchema = z
  .object({
    expirationInstant: ZonedDateTimeSchema.exactOptional(),
    id: z.uuid().exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    ipAccessControlListId: z.uuid().exactOptional(),
    key: z.string().exactOptional(),
    keyManager: z.boolean().exactOptional(),
    lastUpdateInstant: ZonedDateTimeSchema.exactOptional(),
    metaData: APIKeyMetaDataSchema.exactOptional(),
    name: z.string().exactOptional(),
    permissions: APIKeyPermissionsSchema.exactOptional(),
    retrievable: z.boolean().exactOptional(),
    tenantId: z.uuid().exactOptional(),
  })
  .openapi({ description: 'domain POJO to represent AuthenticationKey', required: [] })
  .openapi('APIKey')

const APIKeyRequestSchema = z
  .object({ apiKey: APIKeySchema.exactOptional(), sourceKeyId: z.uuid().exactOptional() })
  .openapi({ description: 'Authentication key request object.', required: [] })
  .openapi('APIKeyRequest')

const APIKeyResponseSchema = z
  .object({ apiKey: APIKeySchema.exactOptional() })
  .openapi({ description: 'Authentication key response object.', required: [] })
  .openapi('APIKeyResponse')

const TokenTypeSchema = z
  .enum(['Bearer', 'MAC', 'DPoP'])
  .openapi({
    description:
      '<ul>  <li>Bearer Token type as defined by <a href="https:tools.ietf.orghtmlrfc6750">RFC 6750<a>.<li>  <li>MAC Token type as referenced by <a href="https:tools.ietf.orghtmlrfc6749">RFC 6749<a> and  <a href="https:tools.ietf.orghtmldraft-ietf-oauth-v2-http-mac-05">  Draft RFC on OAuth 2.0 Message Authentication Code (MAC) Tokens<a>  <li>  <li>DPoP Token type as defined by <a href="https:datatracker.ietf.orgdochtmlrfc9449">RFC 9449<a><li>  <ul>',
  })
  .openapi('TokenType')

const AccessTokenSchema = z
  .object({
    expires_in: z.int().exactOptional(),
    id_token: z.string().exactOptional(),
    issued_token_type: z.string().exactOptional(),
    refresh_token: z.string().exactOptional(),
    refresh_token_id: z.uuid().exactOptional(),
    scope: z.string().exactOptional(),
    access_token: z.string().exactOptional(),
    token_type: TokenTypeSchema.exactOptional(),
    userId: z.uuid().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('AccessToken')

const AccessTokenIntrospectRequestSchema = z
  .object({
    client_id: z.string().exactOptional(),
    tenantId: z.string().exactOptional(),
    token: z.string().exactOptional(),
    token_type_hint: z.string().exactOptional(),
  })
  .openapi({ description: 'The request object for introspecting an access token.', required: [] })
  .openapi('AccessTokenIntrospectRequest')

const ActionDataSchema = z
  .object({
    actioneeUserId: z.uuid().exactOptional(),
    actionerUserId: z.uuid().exactOptional(),
    applicationIds: z.array(z.uuid()).exactOptional(),
    comment: z.string().exactOptional(),
    emailUser: z.boolean().exactOptional(),
    expiry: ZonedDateTimeSchema.exactOptional(),
    notifyUser: z.boolean().exactOptional(),
    option: z.string().exactOptional(),
    reasonId: z.uuid().exactOptional(),
    userActionId: z.uuid().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ActionData')

const LocationSchema = z
  .object({
    city: z.string().exactOptional(),
    country: z.string().exactOptional(),
    latitude: z.float64().exactOptional(),
    longitude: z.float64().exactOptional(),
    region: z.string().exactOptional(),
    zipcode: z.string().exactOptional(),
    displayString: z.string().exactOptional(),
  })
  .openapi({
    description:
      'Location information. Useful for IP addresses and other displayable data objects.',
    required: [],
  })
  .openapi('Location')

const EventInfoSchema = z
  .object({
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    deviceDescription: z.string().exactOptional(),
    deviceName: z.string().exactOptional(),
    deviceType: z.string().exactOptional(),
    ipAddress: z.string().exactOptional(),
    location: LocationSchema.exactOptional(),
    os: z.string().exactOptional(),
    userAgent: z.string().exactOptional(),
  })
  .openapi({
    description:
      'Information about a user event (login, register, etc) that helps identify the source of the event (location, device type, OS, etc).',
    required: [],
  })
  .openapi('EventInfo')

const ActionRequestSchema = z
  .object({
    action: ActionDataSchema.exactOptional(),
    broadcast: z.boolean().exactOptional(),
    eventInfo: EventInfoSchema.exactOptional(),
  })
  .openapi({ description: 'The user action request object.', required: [] })
  .openapi('ActionRequest')

const HistoryItemSchema = z
  .object({
    actionerUserId: z.uuid().exactOptional(),
    comment: z.string().exactOptional(),
    createInstant: ZonedDateTimeSchema.exactOptional(),
    expiry: ZonedDateTimeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('HistoryItem')

const LogHistorySchema = z
  .object({ historyItems: z.array(HistoryItemSchema).exactOptional() })
  .openapi({
    description:
      'A historical state of a user log event. Since events can be modified, this stores the historical state.',
    required: [],
  })
  .openapi('LogHistory')

const UserActionLogSchema = z
  .object({
    actioneeUserId: z.uuid().exactOptional(),
    actionerUserId: z.uuid().exactOptional(),
    applicationIds: z.array(z.uuid()).exactOptional(),
    comment: z.string().exactOptional(),
    emailUserOnEnd: z.boolean().exactOptional(),
    endEventSent: z.boolean().exactOptional(),
    expiry: ZonedDateTimeSchema.exactOptional(),
    history: LogHistorySchema.exactOptional(),
    id: z.uuid().exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    localizedName: z.string().exactOptional(),
    localizedOption: z.string().exactOptional(),
    localizedReason: z.string().exactOptional(),
    name: z.string().exactOptional(),
    notifyUserOnEnd: z.boolean().exactOptional(),
    option: z.string().exactOptional(),
    reason: z.string().exactOptional(),
    reasonCode: z.string().exactOptional(),
    userActionId: z.uuid().exactOptional(),
  })
  .openapi({ description: 'A log for an action that was taken on a User.', required: [] })
  .openapi('UserActionLog')

const ActionResponseSchema = z
  .object({
    action: UserActionLogSchema.exactOptional(),
    actions: z.array(UserActionLogSchema).exactOptional(),
  })
  .openapi({ description: 'The user action response object.', required: [] })
  .openapi('ActionResponse')

const AlgorithmSchema = z
  .enum([
    'ES256',
    'ES384',
    'ES512',
    'HS256',
    'HS384',
    'HS512',
    'PS256',
    'PS384',
    'PS512',
    'RS256',
    'RS384',
    'RS512',
    'none',
  ])
  .openapi({
    description:
      'Available JSON Web Algorithms (JWA) as described in RFC 7518 available for this JWT implementation.',
  })
  .openapi('Algorithm')

const AppleApplicationConfigurationSchema = z
  .object({
    bundleId: z.string().exactOptional(),
    buttonText: z.string().exactOptional(),
    keyId: z.uuid().exactOptional(),
    scope: z.string().exactOptional(),
    servicesId: z.string().exactOptional(),
    teamId: z.string().exactOptional(),
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    createRegistration: z.boolean().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('AppleApplicationConfiguration')

const ProviderLambdaConfigurationSchema = z
  .object({ reconcileId: z.uuid().exactOptional() })
  .openapi({ required: [] })
  .openapi('ProviderLambdaConfiguration')

const IdentityProviderLinkingStrategySchema = z
  .enum([
    'CreatePendingLink',
    'Disabled',
    'LinkAnonymously',
    'LinkByEmail',
    'LinkByEmailForExistingUser',
    'LinkByUsername',
    'LinkByUsernameForExistingUser',
    'Unsupported',
  ])
  .openapi({ description: 'The IdP behavior when no user link has been made yet.' })
  .openapi('IdentityProviderLinkingStrategy')

const IdentityProviderLimitUserLinkingPolicySchema = z
  .object({ maximumLinks: z.int().exactOptional(), enabled: z.boolean().exactOptional() })
  .openapi({ description: '', required: [] })
  .openapi('IdentityProviderLimitUserLinkingPolicy')

const IdentityProviderTenantConfigurationSchema = z
  .object({
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    limitUserLinkCount: IdentityProviderLimitUserLinkingPolicySchema.exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('IdentityProviderTenantConfiguration')

const IdentityProviderTypeSchema = z
  .enum([
    'Apple',
    'EpicGames',
    'ExternalJWT',
    'Facebook',
    'Google',
    'HYPR',
    'LinkedIn',
    'Nintendo',
    'OpenIDConnect',
    'SAMLv2',
    'SAMLv2IdPInitiated',
    'SonyPSN',
    'Steam',
    'Twitch',
    'Twitter',
    'Xbox',
  ])
  .openapi({ description: '' })
  .openapi('IdentityProviderType')

const AppleIdentityProviderSchema = z
  .object({
    bundleId: z.string().exactOptional(),
    buttonText: z.string().exactOptional(),
    keyId: z.uuid().exactOptional(),
    scope: z.string().exactOptional(),
    servicesId: z.string().exactOptional(),
    teamId: z.string().exactOptional(),
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    applicationConfiguration: z
      .record(z.string(), AppleApplicationConfigurationSchema)
      .exactOptional(),
    attributeMappings: z.record(z.string(), z.string()).exactOptional(),
    debug: z.boolean().exactOptional(),
    id: z.uuid().exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    lambdaConfiguration: ProviderLambdaConfigurationSchema.exactOptional(),
    lastUpdateInstant: ZonedDateTimeSchema.exactOptional(),
    linkingStrategy: IdentityProviderLinkingStrategySchema.exactOptional(),
    name: z.string().exactOptional(),
    source: z.string().exactOptional(),
    tenantConfiguration: z
      .record(z.string(), IdentityProviderTenantConfigurationSchema)
      .exactOptional(),
    tenantId: z.uuid().exactOptional(),
    type: IdentityProviderTypeSchema.exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('AppleIdentityProvider')

const ApplicationAccessControlConfigurationSchema = z
  .object({ uiIPAccessControlListId: z.uuid().exactOptional() })
  .openapi({ description: '', required: [] })
  .openapi('ApplicationAccessControlConfiguration')

const AuthenticationTokenConfigurationSchema = z
  .object({ enabled: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('AuthenticationTokenConfiguration')

const UsernameModerationSchema = z
  .object({ applicationId: z.uuid().exactOptional(), enabled: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('UsernameModeration')

const CleanSpeakConfigurationSchema = z
  .object({
    apiKey: z.string().exactOptional(),
    applicationIds: z.array(z.uuid()).exactOptional(),
    url: z.string().exactOptional(),
    usernameModeration: UsernameModerationSchema.exactOptional(),
    enabled: z.boolean().exactOptional(),
  })
  .openapi({
    description: 'CleanSpeak configuration at the system and application level.',
    required: [],
  })
  .openapi('CleanSpeakConfiguration')

const ApplicationEmailConfigurationSchema = z
  .object({
    emailUpdateEmailTemplateId: z.uuid().exactOptional(),
    emailVerificationEmailTemplateId: z.uuid().exactOptional(),
    emailVerifiedEmailTemplateId: z.uuid().exactOptional(),
    forgotPasswordEmailTemplateId: z.uuid().exactOptional(),
    loginIdInUseOnCreateEmailTemplateId: z.uuid().exactOptional(),
    loginIdInUseOnUpdateEmailTemplateId: z.uuid().exactOptional(),
    loginNewDeviceEmailTemplateId: z.uuid().exactOptional(),
    loginSuspiciousEmailTemplateId: z.uuid().exactOptional(),
    passwordResetSuccessEmailTemplateId: z.uuid().exactOptional(),
    passwordUpdateEmailTemplateId: z.uuid().exactOptional(),
    passwordlessEmailTemplateId: z.uuid().exactOptional(),
    setPasswordEmailTemplateId: z.uuid().exactOptional(),
    twoFactorMethodAddEmailTemplateId: z.uuid().exactOptional(),
    twoFactorMethodRemoveEmailTemplateId: z.uuid().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ApplicationEmailConfiguration')

const ApplicationExternalIdentifierConfigurationSchema = z
  .object({ twoFactorTrustIdTimeToLiveInSeconds: z.int().exactOptional() })
  .openapi({ description: '', required: [] })
  .openapi('ApplicationExternalIdentifierConfiguration')

const SelfServiceFormConfigurationSchema = z
  .object({ requireCurrentPasswordOnPasswordChange: z.boolean().exactOptional() })
  .openapi({ description: '', required: [] })
  .openapi('SelfServiceFormConfiguration')

const ApplicationFormConfigurationSchema = z
  .object({
    adminRegistrationFormId: z.uuid().exactOptional(),
    selfServiceFormConfiguration: SelfServiceFormConfigurationSchema.exactOptional(),
    selfServiceFormId: z.uuid().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('ApplicationFormConfiguration')

const RefreshTokenExpirationPolicySchema = z
  .enum(['Fixed', 'SlidingWindow', 'SlidingWindowWithMaximumLifetime'])
  .openapi({ description: '' })
  .openapi('RefreshTokenExpirationPolicy')

const RefreshTokenOneTimeUseConfigurationSchema = z
  .object({ gracePeriodInSeconds: z.int().exactOptional() })
  .openapi({
    description:
      'Refresh token one-time use configuration. This configuration is utilized when the usage policy is  configured for one-time use.',
    required: [],
  })
  .openapi('RefreshTokenOneTimeUseConfiguration')

const RefreshTokenRevocationPolicySchema = z
  .object({
    onLoginPrevented: z.boolean().exactOptional(),
    onMultiFactorEnable: z.boolean().exactOptional(),
    onOneTimeTokenReuse: z.boolean().exactOptional(),
    onPasswordChanged: z.boolean().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('RefreshTokenRevocationPolicy')

const RefreshTokenSlidingWindowConfigurationSchema = z
  .object({ maximumTimeToLiveInMinutes: z.int().exactOptional() })
  .openapi({ description: '', required: [] })
  .openapi('RefreshTokenSlidingWindowConfiguration')

const RefreshTokenUsagePolicySchema = z
  .enum(['Reusable', 'OneTimeUse'])
  .openapi({ description: '' })
  .openapi('RefreshTokenUsagePolicy')

const JWTConfigurationSchema = z
  .object({
    accessTokenKeyId: z.uuid().exactOptional(),
    accessTokenVerificationKeyIds: z.array(z.uuid()).exactOptional(),
    idTokenKeyId: z.uuid().exactOptional(),
    idTokenVerificationKeyIds: z.array(z.uuid()).exactOptional(),
    refreshTokenExpirationPolicy: RefreshTokenExpirationPolicySchema.exactOptional(),
    refreshTokenOneTimeUseConfiguration: RefreshTokenOneTimeUseConfigurationSchema.exactOptional(),
    refreshTokenRevocationPolicy: RefreshTokenRevocationPolicySchema.exactOptional(),
    refreshTokenSlidingWindowConfiguration:
      RefreshTokenSlidingWindowConfigurationSchema.exactOptional(),
    refreshTokenTimeToLiveInMinutes: z.int().exactOptional(),
    refreshTokenUsagePolicy: RefreshTokenUsagePolicySchema.exactOptional(),
    timeToLiveInSeconds: z.int().exactOptional(),
    enabled: z.boolean().exactOptional(),
  })
  .openapi({
    description:
      'JWT Configuration. A JWT Configuration for an Application may not be active if it is using the global configuration, the configuration  may be <code>enabled = false<code>.',
    required: [],
  })
  .openapi('JWTConfiguration')

const LambdaConfigurationSchema = z
  .object({
    accessTokenPopulateId: z.uuid().exactOptional(),
    idTokenPopulateId: z.uuid().exactOptional(),
    multiFactorRequirementId: z.uuid().exactOptional(),
    samlv2PopulateId: z.uuid().exactOptional(),
    selfServiceRegistrationValidationId: z.uuid().exactOptional(),
    userinfoPopulateId: z.uuid().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LambdaConfiguration')

const LoginConfigurationSchema = z
  .object({
    allowTokenRefresh: z.boolean().exactOptional(),
    generateRefreshTokens: z.boolean().exactOptional(),
    requireAuthentication: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LoginConfiguration')

const MultiFactorEmailTemplateSchema = z
  .object({ templateId: z.uuid().exactOptional() })
  .openapi({ required: [] })
  .openapi('MultiFactorEmailTemplate')

const MultiFactorLoginPolicySchema = z
  .enum(['ChallengeOnHighRisk', 'ChallengeOnMediumRisk', 'Disabled', 'Enabled', 'Required'])
  .openapi({ description: '' })
  .openapi('MultiFactorLoginPolicy')

const MultiFactorSMSTemplateSchema = z
  .object({ templateId: z.uuid().exactOptional() })
  .openapi({ required: [] })
  .openapi('MultiFactorSMSTemplate')

const ApplicationMultiFactorTrustPolicySchema = z
  .enum(['Any', 'This', 'None'])
  .openapi({ description: '' })
  .openapi('ApplicationMultiFactorTrustPolicy')

const MultiFactorVoiceTemplateSchema = z
  .object({ templateId: z.uuid().exactOptional() })
  .openapi({ required: [] })
  .openapi('MultiFactorVoiceTemplate')

const ApplicationMultiFactorConfigurationSchema = z
  .object({
    email: MultiFactorEmailTemplateSchema.exactOptional(),
    loginPolicy: MultiFactorLoginPolicySchema.exactOptional(),
    sms: MultiFactorSMSTemplateSchema.exactOptional(),
    trustPolicy: ApplicationMultiFactorTrustPolicySchema.exactOptional(),
    voice: MultiFactorVoiceTemplateSchema.exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('ApplicationMultiFactorConfiguration')

const Oauth2AuthorizedURLValidationPolicySchema = z
  .enum(['AllowWildcards', 'ExactMatch'])
  .openapi({ description: '' })
  .openapi('Oauth2AuthorizedURLValidationPolicy')

const ClientAuthenticationPolicySchema = z
  .enum(['Required', 'NotRequired', 'NotRequiredWhenUsingPKCE'])
  .openapi({ description: '' })
  .openapi('ClientAuthenticationPolicy')

const OAuthScopeConsentModeSchema = z
  .enum(['AlwaysPrompt', 'RememberDecision', 'NeverPrompt'])
  .openapi({
    description:
      'Controls the policy for requesting user permission to grant access to requested scopes during an OAuth workflow  for a third-party application.',
  })
  .openapi('OAuthScopeConsentMode')

const LogoutBehaviorSchema = z
  .enum(['RedirectOnly', 'AllApplications'])
  .openapi({ description: '' })
  .openapi('LogoutBehavior')

const ProofKeyForCodeExchangePolicySchema = z
  .enum(['Required', 'NotRequired', 'NotRequiredWhenUsingClientAuthentication'])
  .openapi({ description: '' })
  .openapi('ProofKeyForCodeExchangePolicy')

const OAuthApplicationRelationshipSchema = z
  .enum(['FirstParty', 'ThirdParty'])
  .openapi({
    description:
      "The application's relationship to the authorization server. First-party applications will be granted implicit permission for requested scopes.  Third-party applications will use the {@link OAuthScopeConsentMode} policy.",
  })
  .openapi('OAuthApplicationRelationship')

const OAuthScopeHandlingPolicySchema = z
  .enum(['Compatibility', 'Strict'])
  .openapi({
    description:
      'Controls the policy for whether OAuth workflows will more strictly adhere to the OAuth and OIDC specification  or run in backwards compatibility mode.',
  })
  .openapi('OAuthScopeHandlingPolicy')

const UnknownScopePolicySchema = z
  .enum(['Allow', 'Remove', 'Reject'])
  .openapi({ description: 'Policy for handling unknown OAuth scopes in the request' })
  .openapi('UnknownScopePolicy')

const OAuth2ConfigurationSchema = z
  .object({
    authorizedOriginURLs: z.array(z.string()).exactOptional(),
    authorizedRedirectURLs: z.array(z.string()).exactOptional(),
    authorizedResourceUris: z.array(z.string()).exactOptional(),
    authorizedURLValidationPolicy: Oauth2AuthorizedURLValidationPolicySchema.exactOptional(),
    clientAuthenticationPolicy: ClientAuthenticationPolicySchema.exactOptional(),
    clientId: z.string().exactOptional(),
    clientSecret: z.string().exactOptional(),
    consentMode: OAuthScopeConsentModeSchema.exactOptional(),
    debug: z.boolean().exactOptional(),
    deviceVerificationURL: z.string().exactOptional(),
    enabledGrants: z
      .array(z.any())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    generateRefreshTokens: z.boolean().exactOptional(),
    logoutBehavior: LogoutBehaviorSchema.exactOptional(),
    logoutURL: z.string().exactOptional(),
    proofKeyForCodeExchangePolicy: ProofKeyForCodeExchangePolicySchema.exactOptional(),
    providedScopePolicy: ProvidedScopePolicySchema.exactOptional(),
    relationship: OAuthApplicationRelationshipSchema.exactOptional(),
    requireClientAuthentication: z.boolean().exactOptional(),
    requireRegistration: z.boolean().exactOptional(),
    scopeHandlingPolicy: OAuthScopeHandlingPolicySchema.exactOptional(),
    unknownScopePolicy: UnknownScopePolicySchema.exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('OAuth2Configuration')

const PasswordlessStrategySchema = z
  .enum(['ClickableLink', 'FormField'])
  .openapi({ description: '' })
  .openapi('PasswordlessStrategy')

const PasswordlessConfigurationSchema = z
  .object({
    emailLoginStrategy: PasswordlessStrategySchema.exactOptional(),
    phoneLoginStrategy: PasswordlessStrategySchema.exactOptional(),
    enabled: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PasswordlessConfiguration')

const ApplicationPhoneConfigurationSchema = z
  .object({
    forgotPasswordTemplateId: z.uuid().exactOptional(),
    identityUpdateTemplateId: z.uuid().exactOptional(),
    loginIdInUseOnCreateTemplateId: z.uuid().exactOptional(),
    loginIdInUseOnUpdateTemplateId: z.uuid().exactOptional(),
    loginNewDeviceTemplateId: z.uuid().exactOptional(),
    loginSuspiciousTemplateId: z.uuid().exactOptional(),
    passwordResetSuccessTemplateId: z.uuid().exactOptional(),
    passwordUpdateTemplateId: z.uuid().exactOptional(),
    passwordlessTemplateId: z.uuid().exactOptional(),
    setPasswordTemplateId: z.uuid().exactOptional(),
    twoFactorMethodAddTemplateId: z.uuid().exactOptional(),
    twoFactorMethodRemoveTemplateId: z.uuid().exactOptional(),
    verificationCompleteTemplateId: z.uuid().exactOptional(),
    verificationTemplateId: z.uuid().exactOptional(),
  })
  .openapi({
    description: 'Hold application phone configuration for template overrides.',
    required: [],
  })
  .openapi('ApplicationPhoneConfiguration')

const LoginIdTypeSchema = z
  .enum(['email', 'phoneNumber', 'username'])
  .openapi({ description: 'This is separate from IdentityType.' })
  .openapi('LoginIdType')

const RegistrationTypeSchema = z.enum(['basic', 'advanced']).openapi('RegistrationType')

const RegistrationConfigurationSchema = z
  .object({
    birthDate: RequirableSchema.exactOptional(),
    completeRegistration: z.boolean().exactOptional(),
    confirmPassword: z.boolean().exactOptional(),
    firstName: RequirableSchema.exactOptional(),
    formId: z.uuid().exactOptional(),
    fullName: RequirableSchema.exactOptional(),
    lastName: RequirableSchema.exactOptional(),
    loginIdType: LoginIdTypeSchema.exactOptional(),
    middleName: RequirableSchema.exactOptional(),
    mobilePhone: RequirableSchema.exactOptional(),
    preferredLanguages: RequirableSchema.exactOptional(),
    type: RegistrationTypeSchema.exactOptional(),
    enabled: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RegistrationConfiguration')

const TimeBasedDeletePolicySchema = z
  .object({
    enabledInstant: ZonedDateTimeSchema.exactOptional(),
    numberOfDaysToRetain: z.int().exactOptional(),
    enabled: z.boolean().exactOptional(),
  })
  .openapi({
    description: 'A policy for deleting Users based upon some external criteria.',
    required: [],
  })
  .openapi('TimeBasedDeletePolicy')

const ApplicationRegistrationDeletePolicySchema = z
  .object({ unverified: TimeBasedDeletePolicySchema.exactOptional() })
  .openapi({ description: 'A Application-level policy for deleting Users.', required: [] })
  .openapi('ApplicationRegistrationDeletePolicy')

const ApplicationRoleSchema = z
  .object({
    description: z.string().exactOptional(),
    id: z.uuid().exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    isDefault: z.boolean().exactOptional(),
    isSuperRole: z.boolean().exactOptional(),
    lastUpdateInstant: ZonedDateTimeSchema.exactOptional(),
    name: z.string().exactOptional(),
  })
  .openapi({ description: 'A role given to a user for a specific application.', required: [] })
  .openapi('ApplicationRole')

const SAMLv2AssertionEncryptionConfigurationSchema = z
  .object({
    digestAlgorithm: z.string().exactOptional(),
    encryptionAlgorithm: z.string().exactOptional(),
    keyLocation: z.string().exactOptional(),
    keyTransportAlgorithm: z.string().exactOptional(),
    keyTransportEncryptionKeyId: z.uuid().exactOptional(),
    maskGenerationFunction: z.string().exactOptional(),
    enabled: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SAMLv2AssertionEncryptionConfiguration')

const SAMLv2IdPInitiatedLoginConfigurationSchema = z
  .object({ nameIdFormat: z.string().exactOptional(), enabled: z.boolean().exactOptional() })
  .openapi({ description: 'IdP Initiated login configuration', required: [] })
  .openapi('SAMLv2IdPInitiatedLoginConfiguration')

const LoginHintConfigurationSchema = z
  .object({ parameterName: z.string().exactOptional(), enabled: z.boolean().exactOptional() })
  .openapi({ description: '', required: [] })
  .openapi('LoginHintConfiguration')

const SAMLLogoutBehaviorSchema = z
  .enum(['AllParticipants', 'OnlyOriginator'])
  .openapi('SAMLLogoutBehavior')

const CanonicalizationMethodSchema = z
  .enum(['exclusive', 'exclusive_with_comments', 'inclusive', 'inclusive_with_comments'])
  .openapi({
    description:
      'XML canonicalization method enumeration. This is used for the IdP and SP side of FusionAuth SAML.',
  })
  .openapi('CanonicalizationMethod')

const SAMLv2SingleLogoutSchema = z
  .object({
    keyId: z.uuid().exactOptional(),
    url: z.string().exactOptional(),
    xmlSignatureC14nMethod: CanonicalizationMethodSchema.exactOptional(),
    enabled: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SAMLv2SingleLogout')

const SAMLv2LogoutSchema = z
  .object({
    behavior: SAMLLogoutBehaviorSchema.exactOptional(),
    defaultVerificationKeyId: z.uuid().exactOptional(),
    keyId: z.uuid().exactOptional(),
    requireSignedRequests: z.boolean().exactOptional(),
    singleLogout: SAMLv2SingleLogoutSchema.exactOptional(),
    verificationKeyIds: z.array(z.uuid()).exactOptional(),
    xmlSignatureC14nMethod: CanonicalizationMethodSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SAMLv2Logout')

const XMLSignatureLocationSchema = z.enum(['Assertion', 'Response']).openapi('XMLSignatureLocation')

const SAMLv2ConfigurationSchema = z
  .object({
    assertionEncryptionConfiguration: SAMLv2AssertionEncryptionConfigurationSchema.exactOptional(),
    audience: z.string().exactOptional(),
    authorizedRedirectURLs: z.array(z.string()).exactOptional(),
    debug: z.boolean().exactOptional(),
    defaultVerificationKeyId: z.uuid().exactOptional(),
    initiatedLogin: SAMLv2IdPInitiatedLoginConfigurationSchema.exactOptional(),
    issuer: z.string().exactOptional(),
    keyId: z.uuid().exactOptional(),
    loginHintConfiguration: LoginHintConfigurationSchema.exactOptional(),
    logout: SAMLv2LogoutSchema.exactOptional(),
    logoutURL: z.string().exactOptional(),
    requireSignedRequests: z.boolean().exactOptional(),
    verificationKeyIds: z.array(z.uuid()).exactOptional(),
    xmlSignatureC14nMethod: CanonicalizationMethodSchema.exactOptional(),
    xmlSignatureLocation: XMLSignatureLocationSchema.exactOptional(),
    callbackURL: z.string().exactOptional(),
    enabled: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SAMLv2Configuration')

const ObjectStateSchema = z
  .enum(['Active', 'Inactive', 'PendingDelete'])
  .openapi({ description: '' })
  .openapi('ObjectState')

const UniversalApplicationConfigurationSchema = z
  .object({ universal: z.boolean().exactOptional() })
  .openapi({ description: '', required: [] })
  .openapi('UniversalApplicationConfiguration')

const UnverifiedBehaviorSchema = z
  .enum(['Allow', 'Gated'])
  .openapi({ description: '' })
  .openapi('UnverifiedBehavior')

const RegistrationUnverifiedOptionsSchema = z
  .object({ behavior: UnverifiedBehaviorSchema.exactOptional() })
  .openapi({ description: '', required: [] })
  .openapi('RegistrationUnverifiedOptions')

const VerificationStrategySchema = z
  .enum(['ClickableLink', 'FormField'])
  .openapi({ description: '' })
  .openapi('VerificationStrategy')

const ApplicationWebAuthnWorkflowConfigurationSchema = z
  .object({ enabled: z.boolean().exactOptional() })
  .openapi({ description: '', required: [] })
  .openapi('ApplicationWebAuthnWorkflowConfiguration')

const ApplicationWebAuthnConfigurationSchema = z
  .object({
    bootstrapWorkflow: ApplicationWebAuthnWorkflowConfigurationSchema.exactOptional(),
    reauthenticationWorkflow: ApplicationWebAuthnWorkflowConfigurationSchema.exactOptional(),
    enabled: z.boolean().exactOptional(),
  })
  .openapi({ description: 'Application-level configuration for WebAuthn', required: [] })
  .openapi('ApplicationWebAuthnConfiguration')

const ApplicationSchema = z
  .object({
    accessControlConfiguration: ApplicationAccessControlConfigurationSchema.exactOptional(),
    active: z.boolean().exactOptional(),
    authenticationTokenConfiguration: AuthenticationTokenConfigurationSchema.exactOptional(),
    baseURL: z.string().exactOptional(),
    cleanSpeakConfiguration: CleanSpeakConfigurationSchema.exactOptional(),
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    emailConfiguration: ApplicationEmailConfigurationSchema.exactOptional(),
    externalIdentifierConfiguration:
      ApplicationExternalIdentifierConfigurationSchema.exactOptional(),
    formConfiguration: ApplicationFormConfigurationSchema.exactOptional(),
    id: z.uuid().exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    jwtConfiguration: JWTConfigurationSchema.exactOptional(),
    lambdaConfiguration: LambdaConfigurationSchema.exactOptional(),
    lastUpdateInstant: ZonedDateTimeSchema.exactOptional(),
    loginConfiguration: LoginConfigurationSchema.exactOptional(),
    multiFactorConfiguration: ApplicationMultiFactorConfigurationSchema.exactOptional(),
    name: z.string().exactOptional(),
    oauthConfiguration: OAuth2ConfigurationSchema.exactOptional(),
    passwordlessConfiguration: PasswordlessConfigurationSchema.exactOptional(),
    phoneConfiguration: ApplicationPhoneConfigurationSchema.exactOptional(),
    registrationConfiguration: RegistrationConfigurationSchema.exactOptional(),
    registrationDeletePolicy: ApplicationRegistrationDeletePolicySchema.exactOptional(),
    roles: z.array(ApplicationRoleSchema).exactOptional(),
    samlv2Configuration: SAMLv2ConfigurationSchema.exactOptional(),
    scopes: z.array(ApplicationOAuthScopeSchema).exactOptional(),
    state: ObjectStateSchema.exactOptional(),
    tenantId: z.uuid().exactOptional(),
    themeId: z.uuid().exactOptional(),
    universalConfiguration: UniversalApplicationConfigurationSchema.exactOptional(),
    unverified: RegistrationUnverifiedOptionsSchema.exactOptional(),
    verificationEmailTemplateId: z.uuid().exactOptional(),
    verificationStrategy: VerificationStrategySchema.exactOptional(),
    verifyRegistration: z.boolean().exactOptional(),
    webAuthnConfiguration: ApplicationWebAuthnConfigurationSchema.exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('Application')

const ApplicationEventSchema = z
  .looseObject({})
  .openapi({ description: 'Events that are bound to applications.' })
  .openapi('ApplicationEvent')

const ApplicationOAuthScopeRequestSchema = z
  .object({ scope: ApplicationOAuthScopeSchema.exactOptional() })
  .openapi({ description: 'The Application Scope API request object.', required: [] })
  .openapi('ApplicationOAuthScopeRequest')

const ApplicationOAuthScopeResponseSchema = z
  .object({ scope: ApplicationOAuthScopeSchema.exactOptional() })
  .openapi({ description: 'The Application Scope API response.', required: [] })
  .openapi('ApplicationOAuthScopeResponse')

const ApplicationRequestSchema = z
  .object({
    application: ApplicationSchema.exactOptional(),
    role: ApplicationRoleSchema.exactOptional(),
    sourceApplicationId: z.uuid().exactOptional(),
    eventInfo: EventInfoSchema.exactOptional(),
  })
  .openapi({ description: 'The Application API request object.', required: [] })
  .openapi('ApplicationRequest')

const ApplicationResponseSchema = z
  .object({
    application: ApplicationSchema.exactOptional(),
    applications: z.array(ApplicationSchema).exactOptional(),
    role: ApplicationRoleSchema.exactOptional(),
  })
  .openapi({ description: 'The Application API response.', required: [] })
  .openapi('ApplicationResponse')

const ApplicationSearchCriteriaSchema = z
  .object({
    name: z.string().exactOptional(),
    state: ObjectStateSchema.exactOptional(),
    tenantId: z.uuid().exactOptional(),
    universal: z.boolean().exactOptional(),
    numberOfResults: z.int().exactOptional(),
    orderBy: z.string().exactOptional(),
    startRow: z.int().exactOptional(),
  })
  .openapi({ description: 'Search criteria for Applications', required: [] })
  .openapi('ApplicationSearchCriteria')

const ApplicationSearchRequestSchema = z
  .object({
    search: ApplicationSearchCriteriaSchema.exactOptional(),
    expand: z.array(z.string()).exactOptional(),
  })
  .openapi({ description: 'Search request for Applications', required: [] })
  .openapi('ApplicationSearchRequest')

const ApplicationSearchResponseSchema = z
  .object({
    applications: z.array(ApplicationSchema).exactOptional(),
    total: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    expandable: z.array(z.string()).exactOptional(),
  })
  .openapi({ description: 'Application search response', required: [] })
  .openapi('ApplicationSearchResponse')

const AttachmentSchema = z
  .object({
    attachment: z.file().exactOptional().openapi({ type: 'string', format: 'binary' }),
    mime: z.string().exactOptional(),
    name: z.string().exactOptional(),
  })
  .openapi({
    description: 'This class is a simple attachment with a byte array, name and MIME type.',
    required: [],
  })
  .openapi('Attachment')

const AttestationConveyancePreferenceSchema = z
  .enum(['none', 'indirect', 'direct', 'enterprise'])
  .openapi({
    description:
      'Used to communicate whether and how authenticator attestation should be delivered to the Relying Party',
  })
  .openapi('AttestationConveyancePreference')

const AttestationTypeSchema = z
  .enum(['basic', 'self', 'attestationCa', 'anonymizationCa', 'none'])
  .openapi({
    description:
      'Used to indicate what type of attestation was included in the authenticator response for a given WebAuthn credential at the time it was created',
  })
  .openapi('AttestationType')

const AuditLogSchema = z
  .object({
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    insertUser: z.string().exactOptional(),
    message: z.string().exactOptional(),
    newValue: z.looseObject({}).exactOptional(),
    oldValue: z.looseObject({}).exactOptional(),
    reason: z.string().exactOptional(),
    tenantId: z.uuid().exactOptional(),
  })
  .openapi({ description: 'An audit log.', required: [] })
  .openapi('AuditLog')

const DeleteConfigurationSchema = z
  .object({ numberOfDaysToRetain: z.int().exactOptional(), enabled: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('DeleteConfiguration')

const AuditLogConfigurationSchema = z
  .object({ delete: DeleteConfigurationSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('AuditLogConfiguration')

const EventTypeSchema = z
  .enum([
    'JWTPublicKeyUpdate',
    'JWTRefreshTokenRevoke',
    'JWTRefresh',
    'AuditLogCreate',
    'EventLogCreate',
    'KickstartSuccess',
    'GroupCreate',
    'GroupCreateComplete',
    'GroupDelete',
    'GroupDeleteComplete',
    'GroupMemberAdd',
    'GroupMemberAddComplete',
    'GroupMemberRemove',
    'GroupMemberRemoveComplete',
    'GroupMemberUpdate',
    'GroupMemberUpdateComplete',
    'GroupUpdate',
    'GroupUpdateComplete',
    'UserAction',
    'UserBulkCreate',
    'UserCreate',
    'UserCreateComplete',
    'UserDeactivate',
    'UserDelete',
    'UserDeleteComplete',
    'UserEmailUpdate',
    'UserEmailVerified',
    'UserIdentityProviderLink',
    'UserIdentityProviderUnlink',
    'UserLoginIdDuplicateOnCreate',
    'UserLoginIdDuplicateOnUpdate',
    'UserLoginFailed',
    'UserLoginNewDevice',
    'UserLoginSuccess',
    'UserLoginSuspicious',
    'UserTwoFactorChallenge',
    'UserPasswordBreach',
    'UserPasswordResetSend',
    'UserPasswordResetStart',
    'UserPasswordResetSuccess',
    'UserPasswordUpdate',
    'UserReactivate',
    'UserRegistrationCreate',
    'UserRegistrationCreateComplete',
    'UserRegistrationDelete',
    'UserRegistrationDeleteComplete',
    'UserRegistrationUpdate',
    'UserRegistrationUpdateComplete',
    'UserRegistrationVerified',
    'UserTwoFactorMethodAdd',
    'UserTwoFactorMethodRemove',
    'UserUpdate',
    'UserUpdateComplete',
    'Test',
    'UserIdentityVerified',
    'UserIdentityUpdate',
    'UserTwoFactorFailedAttempt',
    'UserTwoFactorSuccess',
    'EntityCreate',
    'EntityCreateComplete',
    'EntityDelete',
    'EntityDeleteComplete',
    'EntityUpdate',
    'EntityUpdateComplete',
    'TokenExchange',
    'TokenExchangeComplete',
    'CimdRegistrationSuccess',
    'CimdRegistrationFailed',
  ])
  .openapi({ description: 'Models the event types that FusionAuth produces.' })
  .openapi('EventType')

const AuditLogCreateEventSchema = z
  .object({
    auditLog: AuditLogSchema.exactOptional(),
    createInstant: ZonedDateTimeSchema.exactOptional(),
    id: z.uuid().exactOptional(),
    info: EventInfoSchema.exactOptional(),
    tenantId: z.uuid().exactOptional(),
    type: EventTypeSchema.exactOptional(),
  })
  .openapi({ description: 'Event to indicate an audit log was created.', required: [] })
  .openapi('AuditLogCreateEvent')

const AuditLogSearchCriteriaSchema = z
  .object({
    end: ZonedDateTimeSchema.exactOptional(),
    message: z.string().exactOptional(),
    newValue: z.string().exactOptional(),
    oldValue: z.string().exactOptional(),
    reason: z.string().exactOptional(),
    start: ZonedDateTimeSchema.exactOptional(),
    tenantId: z.uuid().exactOptional(),
    user: z.string().exactOptional(),
    numberOfResults: z.int().exactOptional(),
    orderBy: z.string().exactOptional(),
    startRow: z.int().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('AuditLogSearchCriteria')

const ZoneIdSchema = z
  .string()
  .regex(/^w+\/w+$/)
  .openapi({ description: 'Timezone Identifier', example: 'America/Denver' })
  .openapi('ZoneId')

const AuditLogExportRequestSchema = z
  .object({
    criteria: AuditLogSearchCriteriaSchema.exactOptional(),
    dateTimeSecondsFormat: z.string().exactOptional(),
    zoneId: ZoneIdSchema.exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('AuditLogExportRequest')

const AuditLogRequestSchema = z
  .object({ auditLog: AuditLogSchema.exactOptional(), eventInfo: EventInfoSchema.exactOptional() })
  .openapi({ description: '', required: [] })
  .openapi('AuditLogRequest')

const AuditLogResponseSchema = z
  .object({ auditLog: AuditLogSchema.exactOptional() })
  .openapi({ description: 'Audit log response.', required: [] })
  .openapi('AuditLogResponse')

const AuditLogSearchRequestSchema = z
  .object({ search: AuditLogSearchCriteriaSchema.exactOptional() })
  .openapi({ description: '', required: [] })
  .openapi('AuditLogSearchRequest')

const AuditLogSearchResponseSchema = z
  .object({
    auditLogs: z.array(AuditLogSchema).exactOptional(),
    total: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ description: 'Audit log response.', required: [] })
  .openapi('AuditLogSearchResponse')

const AuthenticationThreatsSchema = z
  .enum([
    'BotDetected',
    'BlocklistedIp',
    'DormantAccount',
    'DormantPassword',
    'ImpossibleTravel',
    'RecentIdentityChange',
    'RecentPasswordChange',
    'SuspiciousUserAgent',
    'UnrecognizedDevice',
    'UntrustedDevice',
  ])
  .openapi({ description: '' })
  .openapi('AuthenticationThreats')

const AuthenticatorAttachmentSchema = z
  .enum(['platform', 'crossPlatform'])
  .openapi({
    description:
      'Describes the <a href="https:www.w3.orgTRwebauthn-2#authenticator-attachment-modality">authenticator attachment modality<a>.',
  })
  .openapi('AuthenticatorAttachment')

const AuthenticatorAttachmentPreferenceSchema = z
  .enum(['any', 'platform', 'crossPlatform'])
  .openapi({
    description:
      'Describes the authenticator attachment modality preference for a WebAuthn workflow. See {@link AuthenticatorAttachment}',
  })
  .openapi('AuthenticatorAttachmentPreference')

const TOTPAlgorithmSchema = z
  .enum(['HmacSHA1', 'HmacSHA256', 'HmacSHA512'])
  .openapi('TOTPAlgorithm')

const AuthenticatorConfigurationSchema = z
  .object({
    algorithm: TOTPAlgorithmSchema.exactOptional(),
    codeLength: z.int().exactOptional(),
    timeStep: z.int().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('AuthenticatorConfiguration')

const ResidentKeyRequirementSchema = z
  .enum(['discouraged', 'preferred', 'required'])
  .openapi({
    description:
      'Describes the Relying Party\'s requirements for <a href="https:www.w3.orgTRwebauthn-2#client-side-discoverable-credential">client-side  discoverable credentials<a> (formerly known as "resident keys")',
  })
  .openapi('ResidentKeyRequirement')

const UserVerificationRequirementSchema = z
  .enum(['required', 'preferred', 'discouraged'])
  .openapi({
    description:
      'Used to express whether the Relying Party requires <a href="https:www.w3.orgTRwebauthn-2#user-verification">user verification<a> for the  current operation.',
  })
  .openapi('UserVerificationRequirement')

const AuthenticatorSelectionCriteriaSchema = z
  .object({
    authenticatorAttachment: AuthenticatorAttachmentSchema.exactOptional(),
    requireResidentKey: z.boolean().exactOptional(),
    residentKey: ResidentKeyRequirementSchema.exactOptional(),
    userVerification: UserVerificationRequirementSchema.exactOptional(),
  })
  .openapi({
    description:
      'Used by the Relying Party to specify their requirements for authenticator attributes. Fields use the deprecated "resident key" terminology to refer  to client-side discoverable credentials to maintain backwards compatibility with WebAuthn Level 1.',
    required: [],
  })
  .openapi('AuthenticatorSelectionCriteria')

const ConnectorTypeSchema = z
  .enum(['FusionAuth', 'Generic', 'LDAP'])
  .openapi({
    description:
      'The types of connectors. This enum is stored as an ordinal on the <code>identities<code> table, order must be maintained.',
  })
  .openapi('ConnectorType')

const BaseConnectorConfigurationSchema = z
  .object({
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    debug: z.boolean().exactOptional(),
    id: z.uuid().exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    lastUpdateInstant: ZonedDateTimeSchema.exactOptional(),
    name: z.string().exactOptional(),
    type: ConnectorTypeSchema.exactOptional(),
  })
  .openapi({
    description:
      "Do not require a setter for 'type', it is defined by the concrete class and is not mutable",
    required: [],
  })
  .openapi('BaseConnectorConfiguration')

const SortSchema = z.enum(['asc', 'desc']).openapi({ description: '' }).openapi('Sort')

const SortFieldSchema = z
  .object({
    missing: z.string().exactOptional(),
    name: z.string().exactOptional(),
    order: SortSchema.exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('SortField')

const BaseElasticSearchCriteriaSchema = z
  .object({
    accurateTotal: z.boolean().exactOptional(),
    ids: z.array(z.uuid()).exactOptional(),
    nextResults: z.string().exactOptional(),
    query: z.string().exactOptional(),
    queryString: z.string().exactOptional(),
    sortFields: z.array(SortFieldSchema).exactOptional(),
    numberOfResults: z.int().exactOptional(),
    orderBy: z.string().exactOptional(),
    startRow: z.int().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('BaseElasticSearchCriteria')

const BaseEntityEventSchema = z
  .object({
    entity: EntitySchema.exactOptional(),
    createInstant: ZonedDateTimeSchema.exactOptional(),
    id: z.uuid().exactOptional(),
    info: EventInfoSchema.exactOptional(),
    tenantId: z.uuid().exactOptional(),
    type: EventTypeSchema.exactOptional(),
  })
  .openapi({ description: 'Base class for all {@link Entity}-related events.', required: [] })
  .openapi('BaseEntityEvent')

const BaseEventSchema = z
  .object({
    createInstant: ZonedDateTimeSchema.exactOptional(),
    id: z.uuid().exactOptional(),
    info: EventInfoSchema.exactOptional(),
    tenantId: z.uuid().exactOptional(),
    type: EventTypeSchema.exactOptional(),
  })
  .openapi({ description: 'Base class for all FusionAuth events.', required: [] })
  .openapi('BaseEvent')

const BaseEventRequestSchema = z
  .object({ eventInfo: EventInfoSchema.exactOptional() })
  .openapi({
    description:
      'Base class for requests that can contain event information. This event information is used when sending Webhooks or emails  during the transaction. The caller is responsible for ensuring that the event information is correct.',
    required: [],
  })
  .openapi('BaseEventRequest')

const BaseExportRequestSchema = z
  .object({
    dateTimeSecondsFormat: z.string().exactOptional(),
    zoneId: ZoneIdSchema.exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('BaseExportRequest')

const GroupSchema = z
  .object({
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    id: z.uuid().exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    lastUpdateInstant: ZonedDateTimeSchema.exactOptional(),
    name: z.string().exactOptional(),
    roles: z.record(z.string(), z.array(ApplicationRoleSchema)).exactOptional(),
    tenantId: z.uuid().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('Group')

const BaseGroupEventSchema = z
  .object({
    group: GroupSchema.exactOptional(),
    createInstant: ZonedDateTimeSchema.exactOptional(),
    id: z.uuid().exactOptional(),
    info: EventInfoSchema.exactOptional(),
    tenantId: z.uuid().exactOptional(),
    type: EventTypeSchema.exactOptional(),
  })
  .openapi({
    description: 'Base class for all {@link Group} and {@link GroupMember} events.',
    required: [],
  })
  .openapi('BaseGroupEvent')

const BaseIdentityProviderApplicationConfigurationSchema = z
  .object({
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    createRegistration: z.boolean().exactOptional(),
    enabled: z.boolean().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('BaseIdentityProviderApplicationConfiguration')

const DeviceInfoSchema = z
  .object({
    description: z.string().exactOptional(),
    lastAccessedAddress: z.string().exactOptional(),
    lastAccessedInstant: ZonedDateTimeSchema.exactOptional(),
    name: z.string().exactOptional(),
    type: z.string().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('DeviceInfo')

const MetaDataSchema = z
  .object({
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    device: DeviceInfoSchema.exactOptional(),
    resources: z.array(z.string()).exactOptional(),
    scopes: z
      .array(z.any())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MetaData')

const BaseLoginRequestSchema = z
  .object({
    applicationId: z.uuid().exactOptional(),
    botDetectionScore: z.float64().exactOptional(),
    ipAddress: z.string().exactOptional(),
    metaData: MetaDataSchema.exactOptional(),
    newDevice: z.boolean().exactOptional(),
    noJWT: z.boolean().exactOptional(),
    eventInfo: EventInfoSchema.exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('BaseLoginRequest')

const MessengerTypeSchema = z
  .enum(['Generic', 'Kafka', 'Twilio'])
  .openapi({ description: '' })
  .openapi('MessengerType')

const BaseMessengerConfigurationSchema = z
  .object({
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    debug: z.boolean().exactOptional(),
    id: z.uuid().exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    lastUpdateInstant: ZonedDateTimeSchema.exactOptional(),
    messageTypes: z
      .array(z.any())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    name: z.string().exactOptional(),
    transport: z.string().exactOptional(),
    type: MessengerTypeSchema.exactOptional(),
  })
  .openapi({
    description:
      "Do not require a setter for 'type', it is defined by the concrete class and is not mutable",
    required: [],
  })
  .openapi('BaseMessengerConfiguration')

const BaseSearchCriteriaSchema = z
  .object({
    numberOfResults: z.int().exactOptional(),
    orderBy: z.string().exactOptional(),
    startRow: z.int().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('BaseSearchCriteria')

const LocaleSchema = z
  .string()
  .openapi({
    description:
      'A Locale object represents a specific geographical, political, or cultural region.',
    example: 'en_US',
  })
  .openapi('Locale')

const LocalDateSchema = z
  .string()
  .regex(/^[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]$/)
  .openapi({
    description: 'A date without a time-zone in the ISO-8601 calendar system, such as 2007-12-03.',
    example: '2007-12-03',
  })
  .openapi('LocalDate')

const TwoFactorMethodSchema = z
  .object({
    authenticator: AuthenticatorConfigurationSchema.exactOptional(),
    email: z.string().exactOptional(),
    id: z.string().exactOptional(),
    lastUsed: z.boolean().exactOptional(),
    method: z.string().exactOptional(),
    mobilePhone: z.string().exactOptional(),
    name: z.string().exactOptional(),
    secret: z.string().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('TwoFactorMethod')

const UserTwoFactorConfigurationSchema = z
  .object({
    methods: z.array(TwoFactorMethodSchema).exactOptional(),
    recoveryCodes: z.array(z.string()).exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('UserTwoFactorConfiguration')

const GroupMemberSchema = z
  .object({
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    groupId: z.uuid().exactOptional(),
    id: z.uuid().exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    userId: z.uuid().exactOptional(),
  })
  .openapi({ description: "A User's membership into a Group", required: [] })
  .openapi('GroupMember')

const ContentStatusSchema = z
  .enum(['ACTIVE', 'PENDING', 'REJECTED'])
  .openapi({ description: 'Status for content like usernames, profile attributes, etc.' })
  .openapi('ContentStatus')

const UserRegistrationSchema = z
  .object({
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    preferredLanguages: z.array(LocaleSchema).exactOptional(),
    tokens: z.record(z.string(), z.string()).exactOptional(),
    applicationId: z.uuid().exactOptional(),
    authenticationToken: z.string().exactOptional(),
    cleanSpeakId: z.uuid().exactOptional(),
    id: z.uuid().exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    lastLoginInstant: ZonedDateTimeSchema.exactOptional(),
    lastUpdateInstant: ZonedDateTimeSchema.exactOptional(),
    roles: z
      .array(z.any())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    timezone: ZoneIdSchema.exactOptional(),
    username: z.string().exactOptional(),
    usernameStatus: ContentStatusSchema.exactOptional(),
    verified: z.boolean().exactOptional(),
    verifiedInstant: ZonedDateTimeSchema.exactOptional(),
  })
  .openapi({ description: 'User registration information for a single application.', required: [] })
  .openapi('UserRegistration')

const IdentityTypeSchema = z
  .object({ name: z.string().exactOptional() })
  .openapi({ description: 'Model identity types provided by FusionAuth.', required: [] })
  .openapi('IdentityType')

const IdentityVerifiedReasonSchema = z
  .enum([
    'Skipped',
    'Trusted',
    'Unverifiable',
    'Implicit',
    'Pending',
    'Completed',
    'Disabled',
    'Administrative',
    'Import',
  ])
  .openapi({
    description: 'Models the reason that {@link UserIdentity#verified} was set to true or false.',
  })
  .openapi('IdentityVerifiedReason')

const UserIdentitySchema = z
  .object({
    displayValue: z.string().exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    lastLoginInstant: ZonedDateTimeSchema.exactOptional(),
    lastUpdateInstant: ZonedDateTimeSchema.exactOptional(),
    moderationStatus: ContentStatusSchema.exactOptional(),
    primary: z.boolean().exactOptional(),
    type: IdentityTypeSchema.exactOptional(),
    value: z.string().exactOptional(),
    verified: z.boolean().exactOptional(),
    verifiedInstant: ZonedDateTimeSchema.exactOptional(),
    verifiedReason: IdentityVerifiedReasonSchema.exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('UserIdentity')

const BreachedPasswordStatusSchema = z
  .enum(['None', 'ExactMatch', 'SubAddressMatch', 'PasswordOnly', 'CommonPassword'])
  .openapi({ description: '' })
  .openapi('BreachedPasswordStatus')

const ChangePasswordReasonSchema = z
  .enum(['Administrative', 'Breached', 'Expired', 'Validation'])
  .openapi({ description: '' })
  .openapi('ChangePasswordReason')

const UserSchema = z
  .object({
    preferredLanguages: z.array(LocaleSchema).exactOptional(),
    active: z.boolean().exactOptional(),
    birthDate: LocalDateSchema.exactOptional(),
    cleanSpeakId: z.uuid().exactOptional(),
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    email: z.string().exactOptional(),
    expiry: ZonedDateTimeSchema.exactOptional(),
    firstName: z.string().exactOptional(),
    fullName: z.string().exactOptional(),
    imageUrl: z.string().exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    lastName: z.string().exactOptional(),
    legacyIdentifier: z.string().exactOptional(),
    lastUpdateInstant: ZonedDateTimeSchema.exactOptional(),
    middleName: z.string().exactOptional(),
    mobilePhone: z.string().exactOptional(),
    parentEmail: z.string().exactOptional(),
    phoneNumber: z.string().exactOptional(),
    tenantId: z.uuid().exactOptional(),
    timezone: ZoneIdSchema.exactOptional(),
    twoFactor: UserTwoFactorConfigurationSchema.exactOptional(),
    memberships: z.array(GroupMemberSchema).exactOptional(),
    registrations: z.array(UserRegistrationSchema).exactOptional(),
    identities: z.array(UserIdentitySchema).exactOptional(),
    breachedPasswordLastCheckedInstant: ZonedDateTimeSchema.exactOptional(),
    breachedPasswordStatus: BreachedPasswordStatusSchema.exactOptional(),
    connectorId: z.uuid().exactOptional(),
    encryptionScheme: z.string().exactOptional(),
    factor: z.int().exactOptional(),
    id: z.uuid().exactOptional(),
    lastLoginInstant: ZonedDateTimeSchema.exactOptional(),
    password: z.string().exactOptional(),
    passwordChangeReason: ChangePasswordReasonSchema.exactOptional(),
    passwordChangeRequired: z.boolean().exactOptional(),
    passwordLastUpdateInstant: ZonedDateTimeSchema.exactOptional(),
    salt: z.string().exactOptional(),
    uniqueUsername: z.string().exactOptional(),
    username: z.string().exactOptional(),
    usernameStatus: ContentStatusSchema.exactOptional(),
    verified: z.boolean().exactOptional(),
    verifiedInstant: ZonedDateTimeSchema.exactOptional(),
  })
  .openapi({
    description:
      'The public, global view of a User. This object contains all global information about the user including birthdate, registration information  preferred languages, global attributes, etc.',
    required: [],
  })
  .openapi('User')

const BaseUserEventSchema = z
  .object({
    user: UserSchema.exactOptional(),
    createInstant: ZonedDateTimeSchema.exactOptional(),
    id: z.uuid().exactOptional(),
    info: EventInfoSchema.exactOptional(),
    tenantId: z.uuid().exactOptional(),
    type: EventTypeSchema.exactOptional(),
  })
  .openapi({ description: 'Base class for all {@link User}-related events.', required: [] })
  .openapi('BaseUserEvent')

const BreachActionSchema = z
  .enum(['Off', 'RecordOnly', 'NotifyUser', 'RequireChange'])
  .openapi('BreachAction')

const BreachMatchModeSchema = z.enum(['Low', 'Medium', 'High']).openapi('BreachMatchMode')

const BreachedPasswordTenantMetricSchema = z
  .object({
    actionRequired: z.int().exactOptional(),
    matchedCommonPasswordCount: z.int().exactOptional(),
    matchedExactCount: z.int().exactOptional(),
    matchedPasswordCount: z.int().exactOptional(),
    matchedSubAddressCount: z.int().exactOptional(),
    passwordsCheckedCount: z.int().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('BreachedPasswordTenantMetric')

const HTTPMethodSchema = z
  .enum(['GET', 'POST', 'PUT', 'DELETE', 'HEAD', 'OPTIONS', 'PATCH'])
  .openapi({ description: '' })
  .openapi('HTTPMethod')

const CORSConfigurationSchema = z
  .object({
    allowCredentials: z.boolean().exactOptional(),
    allowedHeaders: z.array(z.string()).exactOptional(),
    allowedMethods: z.array(HTTPMethodSchema).exactOptional(),
    allowedOrigins: z.array(z.string()).exactOptional(),
    debug: z.boolean().exactOptional(),
    exposedHeaders: z.array(z.string()).exactOptional(),
    preflightMaxAgeInSeconds: z.int().exactOptional(),
    enabled: z.boolean().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('CORSConfiguration')

const CaptchaMethodSchema = z
  .enum(['GoogleRecaptchaV2', 'GoogleRecaptchaV3', 'HCaptcha', 'HCaptchaEnterprise'])
  .openapi({ description: '' })
  .openapi('CaptchaMethod')

const CertificateInformationSchema = z
  .object({
    issuer: z.string().exactOptional(),
    md5Fingerprint: z.string().exactOptional(),
    serialNumber: z.string().exactOptional(),
    sha1Fingerprint: z.string().exactOptional(),
    sha1Thumbprint: z.string().exactOptional(),
    sha256Fingerprint: z.string().exactOptional(),
    sha256Thumbprint: z.string().exactOptional(),
    subject: z.string().exactOptional(),
    validFrom: ZonedDateTimeSchema.exactOptional(),
    validTo: ZonedDateTimeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CertificateInformation')

const ChangePasswordRequestSchema = z
  .object({
    applicationId: z.uuid().exactOptional(),
    changePasswordId: z.string().exactOptional(),
    currentPassword: z.string().exactOptional(),
    loginId: z.string().exactOptional(),
    loginIdTypes: z.array(z.string()).exactOptional(),
    password: z.string().exactOptional(),
    refreshToken: z.string().exactOptional(),
    trustChallenge: z.string().exactOptional(),
    trustToken: z.string().exactOptional(),
    eventInfo: EventInfoSchema.exactOptional(),
  })
  .openapi({ description: 'Change password request object.', required: [] })
  .openapi('ChangePasswordRequest')

const ChangePasswordResponseSchema = z
  .object({
    oneTimePassword: z.string().exactOptional(),
    state: z.record(z.string(), z.looseObject({})).exactOptional(),
  })
  .openapi({ description: 'Change password response object.', required: [] })
  .openapi('ChangePasswordResponse')

const CimdClientRegistrationDecisionSchema = z
  .enum(['ALLOW', 'DENY', 'REVOKE'])
  .openapi({ description: 'The decision returned by a CIMD Client Registration lambda.' })
  .openapi('CimdClientRegistrationDecision')

const CimdClientRegistrationResponseSchema = z
  .object({ registration: CimdClientRegistrationSchema.exactOptional() })
  .openapi({ description: 'CIMD client registration API response object.', required: [] })
  .openapi('CimdClientRegistrationResponse')

const CimdClientRegistrationSearchCriteriaSchema = z
  .object({
    cimdDomainId: z.uuid().exactOptional(),
    clientId: z.string().exactOptional(),
    tenantId: z.uuid().exactOptional(),
    numberOfResults: z.int().exactOptional(),
    orderBy: z.string().exactOptional(),
    startRow: z.int().exactOptional(),
  })
  .openapi({ description: 'Search criteria for CIMD client registrations.', required: [] })
  .openapi('CimdClientRegistrationSearchCriteria')

const CimdClientRegistrationSearchRequestSchema = z
  .object({ search: CimdClientRegistrationSearchCriteriaSchema.exactOptional() })
  .openapi({ description: 'Search request for CIMD client registrations.', required: [] })
  .openapi('CimdClientRegistrationSearchRequest')

const CimdClientRegistrationSearchResponseSchema: z.ZodType<CimdClientRegistrationSearchResponseType> =
  z
    .object({
      registrations: z.array(CimdClientRegistrationSchema).exactOptional(),
      total: z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64(),
        )
        .exactOptional()
        .openapi({ type: 'integer', format: 'int64' }),
    })
    .openapi({ description: 'CIMD client registration search response.', required: [] })
    .openapi('CimdClientRegistrationSearchResponse')

const CimdDomainOAuthScopeSchema = z
  .object({
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    defaultConsentDetail: z.string().exactOptional(),
    defaultConsentMessage: z.string().exactOptional(),
    description: z.string().exactOptional(),
    domainId: z.uuid().exactOptional(),
    id: z.uuid().exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    lastUpdateInstant: ZonedDateTimeSchema.exactOptional(),
    name: z.string().exactOptional(),
    required: z.boolean().exactOptional(),
  })
  .openapi({ description: 'A custom OAuth scope for a CIMD domain.', required: [] })
  .openapi('CimdDomainOAuthScope')

const CimdDomainSchema = z
  .object({
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    allowLocalhostRedirectUris: z.boolean().exactOptional(),
    authorizedResourceUris: z.array(z.string()).exactOptional(),
    consentMode: OAuthScopeConsentModeSchema.exactOptional(),
    debug: z.boolean().exactOptional(),
    domain: z.string().exactOptional(),
    gracePeriodInSeconds: z.int().exactOptional(),
    id: z.uuid().exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    jwtPopulateLambdaId: z.uuid().exactOptional(),
    lastUpdateInstant: ZonedDateTimeSchema.exactOptional(),
    maxCacheTtlInSeconds: z.int().exactOptional(),
    name: z.string().exactOptional(),
    providedScopePolicy: ProvidedScopePolicySchema.exactOptional(),
    registrationLambdaId: z.uuid().exactOptional(),
    scopes: z.array(CimdDomainOAuthScopeSchema).exactOptional(),
    tenantId: z.uuid().exactOptional(),
  })
  .openapi({
    description:
      'A CIMD (Client ID Metadata Document) domain. Represents one trusted {@code client_id} domain (or the wildcard {@code } for open mode)  within a tenant.',
    required: [],
  })
  .openapi('CimdDomain')

const CimdDomainOAuthScopeRequestSchema = z
  .object({ scope: CimdDomainOAuthScopeSchema.exactOptional() })
  .openapi({ description: 'The CIMD domain OAuth scope API request object.', required: [] })
  .openapi('CimdDomainOAuthScopeRequest')

const CimdDomainOAuthScopeResponseSchema = z
  .object({ scope: CimdDomainOAuthScopeSchema.exactOptional() })
  .openapi({ description: 'The CIMD domain OAuth scope API response object.', required: [] })
  .openapi('CimdDomainOAuthScopeResponse')

const CimdDomainRequestSchema = z
  .object({ domain: CimdDomainSchema.exactOptional() })
  .openapi({ description: 'CIMD domain API request object.', required: [] })
  .openapi('CimdDomainRequest')

const CimdDomainResponseSchema = z
  .object({
    domain: CimdDomainSchema.exactOptional(),
    domains: z.array(CimdDomainSchema).exactOptional(),
  })
  .openapi({ description: 'CIMD domain API response object.', required: [] })
  .openapi('CimdDomainResponse')

const CimdDomainSearchCriteriaSchema = z
  .object({
    domain: z.string().exactOptional(),
    name: z.string().exactOptional(),
    tenantId: z.uuid().exactOptional(),
    numberOfResults: z.int().exactOptional(),
    orderBy: z.string().exactOptional(),
    startRow: z.int().exactOptional(),
  })
  .openapi({ description: 'Search criteria for CIMD domains.', required: [] })
  .openapi('CimdDomainSearchCriteria')

const CimdDomainSearchRequestSchema = z
  .object({ search: CimdDomainSearchCriteriaSchema.exactOptional() })
  .openapi({ description: 'Search request for CIMD domains.', required: [] })
  .openapi('CimdDomainSearchRequest')

const CimdDomainSearchResponseSchema = z
  .object({
    domains: z.array(CimdDomainSchema).exactOptional(),
    total: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ description: 'CIMD domain search response.', required: [] })
  .openapi('CimdDomainSearchResponse')

const CimdRegistrationFailedReasonSchema = z
  .object({ code: z.string().exactOptional() })
  .openapi({
    description: 'Information about why a CIMD client registration failed.',
    required: [],
  })
  .openapi('CimdRegistrationFailedReason')

const CimdRegistrationFailedEventSchema = z
  .object({
    cimdDomainId: z.uuid().exactOptional(),
    clientId: z.string().exactOptional(),
    reason: CimdRegistrationFailedReasonSchema.exactOptional(),
    resource: z.string().exactOptional(),
    createInstant: ZonedDateTimeSchema.exactOptional(),
    id: z.uuid().exactOptional(),
    info: EventInfoSchema.exactOptional(),
    tenantId: z.uuid().exactOptional(),
    type: EventTypeSchema.exactOptional(),
  })
  .openapi({
    description:
      'Models the CIMD Registration Failed Event.  <p>  This event is fired when a CIMD client registration fails. This event cannot be made transactional.',
    required: [],
  })
  .openapi('CimdRegistrationFailedEvent')

const CimdRegistrationFailedReasonCodeSchema = z
  .looseObject({})
  .openapi({ description: 'Reasons why a CIMD client registration failed.' })
  .openapi('CimdRegistrationFailedReasonCode')

const CimdRegistrationSuccessEventSchema = z
  .object({
    cimdClientRegistrationId: z.uuid().exactOptional(),
    cimdDomainId: z.uuid().exactOptional(),
    clientId: z.string().exactOptional(),
    clientName: z.string().exactOptional(),
    resource: z.string().exactOptional(),
    createInstant: ZonedDateTimeSchema.exactOptional(),
    id: z.uuid().exactOptional(),
    info: EventInfoSchema.exactOptional(),
    tenantId: z.uuid().exactOptional(),
    type: EventTypeSchema.exactOptional(),
  })
  .openapi({
    description:
      'Models the CIMD Registration Success Event.  <p>  This event is fired when a CIMD client registration succeeds. This event cannot be made transactional.',
    required: [],
  })
  .openapi('CimdRegistrationSuccessEvent')

const ClientAuthenticationMethodSchema = z
  .enum(['none', 'client_secret_basic', 'client_secret_post'])
  .openapi('ClientAuthenticationMethod')

const ClientCredentialsAccessTokenIntrospectRequestSchema = z
  .object({ tenantId: z.string().exactOptional(), token: z.string().exactOptional() })
  .openapi({
    description:
      'Contains the parameters used to introspect an access token that was obtained via the client credentials grant.',
    required: [],
  })
  .openapi('ClientCredentialsAccessTokenIntrospectRequest')

const ClientCredentialsGrantRequestSchema = z
  .object({
    client_id: z.string().exactOptional(),
    client_secret: z.string().exactOptional(),
    grant_type: z.string().exactOptional(),
    scope: z.string().exactOptional(),
    tenantId: z.string().exactOptional(),
  })
  .openapi({
    description:
      'The request object to make a Client Credentials grant request to obtain an access token.',
    required: [],
  })
  .openapi('ClientCredentialsGrantRequest')

const ClientMetadataSchema = z
  .object({
    clientId: z.string().exactOptional(),
    clientIdHost: z.string().exactOptional(),
    clientIdPath: z.string().exactOptional(),
    clientName: z.string().exactOptional(),
    clientUri: z.string().exactOptional(),
    clientUriHost: z.string().exactOptional(),
    clientUriPath: z.string().exactOptional(),
    redirectUris: z.array(z.string()).exactOptional(),
  })
  .openapi({
    description:
      "Represents the inbound lambda parameter 'clientMetadata' for CIMD Client Registration lambdas.",
    required: [],
  })
  .openapi('ClientMetadata')

const ClientRegistrationContextSchema = z
  .object({
    authenticationThreats: z
      .array(z.any())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    eventInfo: EventInfoSchema.exactOptional(),
    resource: z.string().exactOptional(),
  })
  .openapi({
    description:
      "Represents the inbound lambda parameter 'context' for CIMD Client Registration lambdas.",
    required: [],
  })
  .openapi('ClientRegistrationContext')

const ClientRegistrationLambdaResultSchema = z
  .object({
    decision: CimdClientRegistrationDecisionSchema.exactOptional(),
    jwtPopulateLambdaId: z.uuid().exactOptional(),
    providedScopePolicy: ProvidedScopePolicySchema.exactOptional(),
    scopes: z.array(CimdDomainOAuthScopeSchema).exactOptional(),
    ttlInSeconds: z.int().exactOptional(),
  })
  .openapi({
    description:
      "Represents the outbound parameter 'result' for CIMD Client Registration lambdas. The parameter is pre-populated with defaults from the CIMD Domain  configuration",
    required: [],
  })
  .openapi('ClientRegistrationLambdaResult')

const ClientRiskSchema = z
  .object({ status: z.string().exactOptional() })
  .openapi({
    description:
      "Represents the inbound lambda parameter 'clientRisk' inside the 'context' parameter for MFA Required lambdas.",
    required: [],
  })
  .openapi('ClientRisk')

const ClientRiskConfigurationSchema = z
  .object({
    blocklistedIp: z.boolean().exactOptional(),
    botDetected: z.boolean().exactOptional(),
    dormantAccount: z.boolean().exactOptional(),
    dormantPassword: z.boolean().exactOptional(),
    impossibleTravel: z.boolean().exactOptional(),
    recentIdentityChange: z.boolean().exactOptional(),
    recentPasswordChange: z.boolean().exactOptional(),
    suspiciousUserAgent: z.boolean().exactOptional(),
    unrecognizedDevice: z.boolean().exactOptional(),
    untrustedDevice: z.boolean().exactOptional(),
    enabled: z.boolean().exactOptional(),
  })
  .openapi({
    description:
      'Flags to enable or disable specific risk signals that contribute to the composite client risk calculation.',
    required: [],
  })
  .openapi('ClientRiskConfiguration')

const ConnectorLambdaConfigurationSchema = z
  .object({ reconcileId: z.uuid().exactOptional() })
  .openapi({ required: [] })
  .openapi('ConnectorLambdaConfiguration')

const ConnectorPolicySchema = z
  .object({
    connectorId: z.uuid().exactOptional(),
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    domains: z
      .array(z.any())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    migrate: z.boolean().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('ConnectorPolicy')

const ConnectorRequestSchema = z
  .object({ connector: BaseConnectorConfigurationSchema.exactOptional() })
  .openapi({ description: '', required: [] })
  .openapi('ConnectorRequest')

const ConnectorResponseSchema = z
  .object({
    connector: BaseConnectorConfigurationSchema.exactOptional(),
    connectors: z.array(BaseConnectorConfigurationSchema).exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('ConnectorResponse')

const LocalizedIntegersSchema = z
  .looseObject({})
  .openapi({ description: 'Models a set of localized Integers that can be stored as JSON.' })
  .openapi('LocalizedIntegers')

const EmailPlusSchema = z
  .object({
    emailTemplateId: z.uuid().exactOptional(),
    maximumTimeToSendEmailInHours: z.int().exactOptional(),
    minimumTimeToSendEmailInHours: z.int().exactOptional(),
    enabled: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EmailPlus')

const ConsentSchema = z
  .object({
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    consentEmailTemplateId: z.uuid().exactOptional(),
    countryMinimumAgeForSelfConsent: LocalizedIntegersSchema.exactOptional(),
    defaultMinimumAgeForSelfConsent: z.int().exactOptional(),
    emailPlus: EmailPlusSchema.exactOptional(),
    id: z.uuid().exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    lastUpdateInstant: ZonedDateTimeSchema.exactOptional(),
    multipleValuesAllowed: z.boolean().exactOptional(),
    name: z.string().exactOptional(),
    values: z.array(z.string()).exactOptional(),
  })
  .openapi({ description: 'Models a consent.', required: [] })
  .openapi('Consent')

const ConsentRequestSchema = z
  .object({ consent: ConsentSchema.exactOptional() })
  .openapi({ description: 'API request for User consent types.', required: [] })
  .openapi('ConsentRequest')

const ConsentResponseSchema = z
  .object({
    consent: ConsentSchema.exactOptional(),
    consents: z.array(ConsentSchema).exactOptional(),
  })
  .openapi({ description: 'API response for consent.', required: [] })
  .openapi('ConsentResponse')

const ConsentSearchCriteriaSchema = z
  .object({
    name: z.string().exactOptional(),
    numberOfResults: z.int().exactOptional(),
    orderBy: z.string().exactOptional(),
    startRow: z.int().exactOptional(),
  })
  .openapi({ description: 'Search criteria for Consents', required: [] })
  .openapi('ConsentSearchCriteria')

const ConsentSearchRequestSchema = z
  .object({ search: ConsentSearchCriteriaSchema.exactOptional() })
  .openapi({ description: 'Search request for Consents', required: [] })
  .openapi('ConsentSearchRequest')

const ConsentSearchResponseSchema = z
  .object({
    consents: z.array(ConsentSchema).exactOptional(),
    total: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ description: 'Consent search response', required: [] })
  .openapi('ConsentSearchResponse')

const ConsentStatusSchema = z
  .enum(['Active', 'Revoked'])
  .openapi({ description: 'Models a consent.' })
  .openapi('ConsentStatus')

const MultiFactorActionSchema = z
  .enum(['changePassword', 'login', 'stepUp'])
  .openapi({
    description:
      'Communicate various actionscontexts in which multi-factor authentication can be used.',
  })
  .openapi('MultiFactorAction')

const StartInstantSchema = z
  .object({
    applications: z.record(z.string(), ZonedDateTimeSchema).exactOptional(),
    tenant: ZonedDateTimeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartInstant')

const TrustSchema = z
  .object({
    applicationId: z.uuid().exactOptional(),
    attributes: z.record(z.string(), z.string()).exactOptional(),
    expirationInstant: ZonedDateTimeSchema.exactOptional(),
    id: z.string().exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    startInstants: StartInstantSchema.exactOptional(),
    state: z.record(z.string(), z.looseObject({})).exactOptional(),
    tenantId: z.uuid().exactOptional(),
    userId: z.uuid().exactOptional(),
  })
  .openapi({
    description:
      "Represents the inbound lambda parameter 'mfaTrust' inside the 'context' parameter for MFA Required lambdas.",
    required: [],
  })
  .openapi('Trust')

const PoliciesSchema = z
  .object({
    applicationLoginPolicy: MultiFactorLoginPolicySchema.exactOptional(),
    applicationMultiFactorTrustPolicy: ApplicationMultiFactorTrustPolicySchema.exactOptional(),
    tenantLoginPolicy: MultiFactorLoginPolicySchema.exactOptional(),
  })
  .openapi({
    description: "Represents the inbound lambda parameter 'policies' for MFA Required lambdas.",
    required: [],
  })
  .openapi('Policies')

const ContextSchema = z
  .object({
    accessToken: z.string().exactOptional(),
    action: MultiFactorActionSchema.exactOptional(),
    application: ApplicationSchema.exactOptional(),
    authenticationThreats: z
      .array(z.any())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    authenticationType: z.string().exactOptional(),
    clientRisk: ClientRiskSchema.exactOptional(),
    eventInfo: EventInfoSchema.exactOptional(),
    mfaTrust: TrustSchema.exactOptional(),
    policies: PoliciesSchema.exactOptional(),
  })
  .openapi({
    description: "Represents the inbound lambda parameter 'context' for MFA Required lambdas.",
    required: [],
  })
  .openapi('Context')

const CoseAlgorithmIdentifierSchema = z
  .enum(['ES256', 'ES384', 'ES512', 'RS256', 'RS384', 'RS512', 'PS256', 'PS384', 'PS512'])
  .openapi({
    description:
      'A number identifying a cryptographic algorithm. Values should be registered with the <a  href="https:www.iana.orgassignmentscosecose.xhtml#algorithms">IANA COSE Algorithms registry<a>',
  })
  .openapi('CoseAlgorithmIdentifier')

const CoseEllipticCurveSchema = z
  .enum(['Reserved', 'P256', 'P384', 'P521', 'X25519', 'X448', 'Ed25519', 'Ed448', 'Secp256k1'])
  .openapi({
    description:
      'COSE Elliptic Curve identifier to determine which elliptic curve to use with a given key',
  })
  .openapi('CoseEllipticCurve')

const CoseKeyTypeSchema = z
  .enum(['Reserved', 'OKP', 'EC2', 'RSA', 'Symmetric'])
  .openapi({ description: 'COSE key type' })
  .openapi('CoseKeyType')

const CountSchema = z
  .object({ count: z.int().exactOptional(), interval: z.int().exactOptional() })
  .openapi({ description: '', required: [] })
  .openapi('Count')

const CredentialPropertiesOutputSchema = z
  .object({ rk: z.boolean().exactOptional() })
  .openapi({ description: 'Contains the output for the {@code credProps} extension', required: [] })
  .openapi('CredentialPropertiesOutput')

const DailyActiveUserReportResponseSchema = z
  .object({
    dailyActiveUsers: z.array(CountSchema).exactOptional(),
    total: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ description: 'Response for the daily active user report.', required: [] })
  .openapi('DailyActiveUserReportResponse')

const DenialSchema = z
  .object({ error_code: z.string().exactOptional(), error_description: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('Denial')

const DeviceApprovalRequestSchema = z
  .object({
    client_id: z.string().exactOptional(),
    client_secret: z.string().exactOptional(),
    tenantId: z.uuid().exactOptional(),
    token: z.string().exactOptional(),
    user_code: z.string().exactOptional(),
  })
  .openapi({ description: 'The request object to approve a device grant.', required: [] })
  .openapi('DeviceApprovalRequest')

const IdentityProviderLinkSchema = z
  .object({
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    displayName: z.string().exactOptional(),
    identityProviderId: z.uuid().exactOptional(),
    identityProviderName: z.string().exactOptional(),
    identityProviderType: IdentityProviderTypeSchema.exactOptional(),
    identityProviderUserId: z.string().exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    lastLoginInstant: ZonedDateTimeSchema.exactOptional(),
    tenantId: z.uuid().exactOptional(),
    token: z.string().exactOptional(),
    userId: z.uuid().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('IdentityProviderLink')

const DeviceApprovalResponseSchema = z
  .object({
    deviceGrantStatus: z.string().exactOptional(),
    deviceInfo: DeviceInfoSchema.exactOptional(),
    identityProviderLink: IdentityProviderLinkSchema.exactOptional(),
    tenantId: z.uuid().exactOptional(),
    userId: z.uuid().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('DeviceApprovalResponse')

const DeviceAuthorizationRequestSchema = z
  .object({
    client_id: z.string().exactOptional(),
    client_secret: z.string().exactOptional(),
    scope: z.string().exactOptional(),
    tenantId: z.uuid().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('DeviceAuthorizationRequest')

const DeviceResponseSchema = z
  .object({
    device_code: z.string().exactOptional(),
    expires_in: z.int().exactOptional(),
    interval: z.int().exactOptional(),
    user_code: z.string().exactOptional(),
    verification_uri: z.string().exactOptional(),
    verification_uri_complete: z.string().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('DeviceResponse')

const DeviceTypeSchema = z
  .enum(['BROWSER', 'DESKTOP', 'LAPTOP', 'MOBILE', 'OTHER', 'SERVER', 'TABLET', 'TV', 'UNKNOWN'])
  .openapi('DeviceType')

const PendingIdPLinkSchema = z
  .object({
    displayName: z.string().exactOptional(),
    email: z.string().exactOptional(),
    identityProviderId: z.uuid().exactOptional(),
    identityProviderLinks: z.array(IdentityProviderLinkSchema).exactOptional(),
    identityProviderName: z.string().exactOptional(),
    identityProviderTenantConfiguration: IdentityProviderTenantConfigurationSchema.exactOptional(),
    identityProviderType: IdentityProviderTypeSchema.exactOptional(),
    identityProviderUserId: z.string().exactOptional(),
    user: UserSchema.exactOptional(),
    username: z.string().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('PendingIdPLink')

const DeviceUserCodeResponseSchema = z
  .object({
    client_id: z.string().exactOptional(),
    deviceInfo: DeviceInfoSchema.exactOptional(),
    expires_in: z.int().exactOptional(),
    pendingIdPLink: PendingIdPLinkSchema.exactOptional(),
    scope: z.string().exactOptional(),
    tenantId: z.uuid().exactOptional(),
    user_code: z.string().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('DeviceUserCodeResponse')

const DisplayableRawLoginSchema = z
  .object({
    applicationName: z.string().exactOptional(),
    location: LocationSchema.exactOptional(),
    loginId: z.string().exactOptional(),
    loginIdType: IdentityTypeSchema.exactOptional(),
    applicationId: z.uuid().exactOptional(),
    instant: ZonedDateTimeSchema.exactOptional(),
    ipAddress: z.string().exactOptional(),
    userId: z.uuid().exactOptional(),
  })
  .openapi({
    description: 'A displayable raw login that includes application name and user loginId.',
    required: [],
  })
  .openapi('DisplayableRawLogin')

const DomainBasedIdentityProviderSchema = z
  .looseObject({})
  .openapi({ description: 'Interface for all identity providers that can be domain based.' })
  .openapi('DomainBasedIdentityProvider')

const EmailAddressSchema = z
  .object({ address: z.string().exactOptional(), display: z.string().exactOptional() })
  .openapi({ description: 'An email address.', required: [] })
  .openapi('EmailAddress')

const EmailSchema = z
  .object({
    attachments: z.array(AttachmentSchema).exactOptional(),
    bcc: z.array(EmailAddressSchema).exactOptional(),
    cc: z.array(EmailAddressSchema).exactOptional(),
    from: EmailAddressSchema.exactOptional(),
    html: z.string().exactOptional(),
    replyTo: EmailAddressSchema.exactOptional(),
    subject: z.string().exactOptional(),
    text: z.string().exactOptional(),
    to: z.array(EmailAddressSchema).exactOptional(),
  })
  .openapi({ description: 'This class is an abstraction of a simple email message.', required: [] })
  .openapi('Email')

const EmailHeaderSchema = z
  .object({ name: z.string().exactOptional(), value: z.string().exactOptional() })
  .openapi({ description: '', required: [] })
  .openapi('EmailHeader')

const EmailSecurityTypeSchema = z.enum(['NONE', 'SSL', 'TLS']).openapi('EmailSecurityType')

const EmailUnverifiedOptionsSchema = z
  .object({
    allowEmailChangeWhenGated: z.boolean().exactOptional(),
    behavior: UnverifiedBehaviorSchema.exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('EmailUnverifiedOptions')

const EmailConfigurationSchema = z
  .object({
    additionalHeaders: z.array(EmailHeaderSchema).exactOptional(),
    adminTwoFactorMethodRemoveEmailTemplateId: z.uuid().exactOptional(),
    debug: z.boolean().exactOptional(),
    defaultFromEmail: z.string().exactOptional(),
    defaultFromName: z.string().exactOptional(),
    emailUpdateEmailTemplateId: z.uuid().exactOptional(),
    emailVerifiedEmailTemplateId: z.uuid().exactOptional(),
    forgotPasswordEmailTemplateId: z.uuid().exactOptional(),
    host: z.string().exactOptional(),
    implicitEmailVerificationAllowed: z.boolean().exactOptional(),
    loginIdInUseOnCreateEmailTemplateId: z.uuid().exactOptional(),
    loginIdInUseOnUpdateEmailTemplateId: z.uuid().exactOptional(),
    loginNewDeviceEmailTemplateId: z.uuid().exactOptional(),
    loginSuspiciousEmailTemplateId: z.uuid().exactOptional(),
    password: z.string().exactOptional(),
    passwordResetSuccessEmailTemplateId: z.uuid().exactOptional(),
    passwordUpdateEmailTemplateId: z.uuid().exactOptional(),
    passwordlessEmailTemplateId: z.uuid().exactOptional(),
    port: z.int().exactOptional(),
    properties: z.string().exactOptional(),
    security: EmailSecurityTypeSchema.exactOptional(),
    setPasswordEmailTemplateId: z.uuid().exactOptional(),
    twoFactorMethodAddEmailTemplateId: z.uuid().exactOptional(),
    twoFactorMethodRemoveEmailTemplateId: z.uuid().exactOptional(),
    unverified: EmailUnverifiedOptionsSchema.exactOptional(),
    username: z.string().exactOptional(),
    verificationEmailTemplateId: z.uuid().exactOptional(),
    verificationStrategy: VerificationStrategySchema.exactOptional(),
    verifyEmail: z.boolean().exactOptional(),
    verifyEmailWhenChanged: z.boolean().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('EmailConfiguration')

const LocalizedStringsSchema = z
  .looseObject({})
  .openapi({ description: 'Models a set of localized Strings that can be stored as JSON.' })
  .openapi('LocalizedStrings')

const EmailTemplateSchema = z
  .object({
    defaultFromName: z.string().exactOptional(),
    defaultHtmlTemplate: z.string().exactOptional(),
    defaultSubject: z.string().exactOptional(),
    defaultTextTemplate: z.string().exactOptional(),
    fromEmail: z.string().exactOptional(),
    id: z.uuid().exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    lastUpdateInstant: ZonedDateTimeSchema.exactOptional(),
    localizedFromNames: LocalizedStringsSchema.exactOptional(),
    localizedHtmlTemplates: LocalizedStringsSchema.exactOptional(),
    localizedSubjects: LocalizedStringsSchema.exactOptional(),
    localizedTextTemplates: LocalizedStringsSchema.exactOptional(),
    name: z.string().exactOptional(),
  })
  .openapi({ description: 'Stores an email template used to send emails to users.', required: [] })
  .openapi('EmailTemplate')

const EmailTemplateErrorsSchema = z
  .object({
    parseErrors: z.record(z.string(), z.string()).exactOptional(),
    renderErrors: z.record(z.string(), z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EmailTemplateErrors')

const EmailTemplateRequestSchema = z
  .object({ emailTemplate: EmailTemplateSchema.exactOptional() })
  .openapi({ description: 'Email template request.', required: [] })
  .openapi('EmailTemplateRequest')

const EmailTemplateResponseSchema = z
  .object({
    emailTemplate: EmailTemplateSchema.exactOptional(),
    emailTemplates: z.array(EmailTemplateSchema).exactOptional(),
  })
  .openapi({ description: 'Email template response.', required: [] })
  .openapi('EmailTemplateResponse')

const EmailTemplateSearchCriteriaSchema = z
  .object({
    name: z.string().exactOptional(),
    numberOfResults: z.int().exactOptional(),
    orderBy: z.string().exactOptional(),
    startRow: z.int().exactOptional(),
  })
  .openapi({ description: 'Search criteria for Email templates', required: [] })
  .openapi('EmailTemplateSearchCriteria')

const EmailTemplateSearchRequestSchema = z
  .object({ search: EmailTemplateSearchCriteriaSchema.exactOptional() })
  .openapi({ description: 'Search request for email templates', required: [] })
  .openapi('EmailTemplateSearchRequest')

const EmailTemplateSearchResponseSchema = z
  .object({
    emailTemplates: z.array(EmailTemplateSchema).exactOptional(),
    total: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ description: 'Email template search response', required: [] })
  .openapi('EmailTemplateSearchResponse')

const EnableableSchema = z
  .object({ enabled: z.boolean().exactOptional() })
  .openapi({ description: 'Something that can be enabled and thus also disabled.', required: [] })
  .openapi('Enableable')

const EntityCreateCompleteEventSchema = z
  .object({ entity: EntitySchema.exactOptional() })
  .openapi({
    description:
      'Models the Entity Create Complete Event.  <p>  This is different than the entity.create event in that it will be sent after the entity has been created. This event cannot be made  transactional.',
    required: [],
  })
  .openapi('EntityCreateCompleteEvent')

const EntityCreateEventSchema = z
  .object({ entity: EntitySchema.exactOptional() })
  .openapi({ description: 'Models the Entity Create Event.', required: [] })
  .openapi('EntityCreateEvent')

const EntityDeleteCompleteEventSchema = z
  .object({ entity: EntitySchema.exactOptional() })
  .openapi({
    description:
      'Models the Entity Delete Complete Event.  <p>  This is different than the entity.delete event in that it will be sent after the entity has been deleted. This event cannot be made  transactional.',
    required: [],
  })
  .openapi('EntityDeleteCompleteEvent')

const EntityDeleteEventSchema = z
  .object({ entity: EntitySchema.exactOptional() })
  .openapi({ description: 'Models the Entity Delete Event.', required: [] })
  .openapi('EntityDeleteEvent')

const EntityGrantRequestSchema = z
  .object({ grant: EntityGrantSchema.exactOptional() })
  .openapi({ description: 'Entity grant API request object.', required: [] })
  .openapi('EntityGrantRequest')

const EntityGrantResponseSchema: z.ZodType<EntityGrantResponseType> = z
  .object({
    grants: z.array(EntityGrantSchema).exactOptional(),
    grant: EntityGrantSchema.exactOptional(),
  })
  .openapi({ description: 'Entity grant API response object.', required: [] })
  .openapi('EntityGrantResponse')

const EntityGrantSearchCriteriaSchema = z
  .object({
    entityId: z.uuid().exactOptional(),
    name: z.string().exactOptional(),
    userId: z.uuid().exactOptional(),
    numberOfResults: z.int().exactOptional(),
    orderBy: z.string().exactOptional(),
    startRow: z.int().exactOptional(),
  })
  .openapi({ description: 'Search criteria for entity grants.', required: [] })
  .openapi('EntityGrantSearchCriteria')

const EntityGrantSearchRequestSchema = z
  .object({ search: EntityGrantSearchCriteriaSchema.exactOptional() })
  .openapi({ description: 'Search request for entity grants.', required: [] })
  .openapi('EntityGrantSearchRequest')

const EntityGrantSearchResponseSchema: z.ZodType<EntityGrantSearchResponseType> = z
  .object({
    grants: z.array(EntityGrantSchema).exactOptional(),
    total: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ description: 'Search request for entity grants.', required: [] })
  .openapi('EntityGrantSearchResponse')

const EntityRequestSchema = z
  .object({ entity: EntitySchema.exactOptional() })
  .openapi({ description: 'Entity API request object.', required: [] })
  .openapi('EntityRequest')

const EntityResponseSchema = z
  .object({ entity: EntitySchema.exactOptional() })
  .openapi({ description: 'Entity API response object.', required: [] })
  .openapi('EntityResponse')

const EntitySearchCriteriaSchema = z
  .object({
    accurateTotal: z.boolean().exactOptional(),
    ids: z.array(z.uuid()).exactOptional(),
    nextResults: z.string().exactOptional(),
    query: z.string().exactOptional(),
    queryString: z.string().exactOptional(),
    sortFields: z.array(SortFieldSchema).exactOptional(),
  })
  .openapi({
    description:
      'This class is the entity query. It provides a build pattern as well as public fields for use on forms and in actions.',
    required: [],
  })
  .openapi('EntitySearchCriteria')

const EntitySearchRequestSchema = z
  .object({ search: EntitySearchCriteriaSchema.exactOptional() })
  .openapi({ description: 'Search request for entities', required: [] })
  .openapi('EntitySearchRequest')

const EntitySearchResponseSchema = z
  .object({
    entities: z.array(EntitySchema).exactOptional(),
    nextResults: z.string().exactOptional(),
    total: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ description: 'Search request for entities', required: [] })
  .openapi('EntitySearchResponse')

const EntityTypeRequestSchema = z
  .object({
    entityType: EntityTypeSchema.exactOptional(),
    permission: EntityTypePermissionSchema.exactOptional(),
  })
  .openapi({ description: 'Entity Type API request object.', required: [] })
  .openapi('EntityTypeRequest')

const EntityTypeResponseSchema = z
  .object({
    entityType: EntityTypeSchema.exactOptional(),
    entityTypes: z.array(EntityTypeSchema).exactOptional(),
    permission: EntityTypePermissionSchema.exactOptional(),
  })
  .openapi({ description: 'Entity Type API response object.', required: [] })
  .openapi('EntityTypeResponse')

const EntityTypeSearchCriteriaSchema = z
  .object({
    name: z.string().exactOptional(),
    numberOfResults: z.int().exactOptional(),
    orderBy: z.string().exactOptional(),
    startRow: z.int().exactOptional(),
  })
  .openapi({ description: 'Search criteria for entity types.', required: [] })
  .openapi('EntityTypeSearchCriteria')

const EntityTypeSearchRequestSchema = z
  .object({ search: EntityTypeSearchCriteriaSchema.exactOptional() })
  .openapi({ description: 'Search request for entity types.', required: [] })
  .openapi('EntityTypeSearchRequest')

const EntityTypeSearchResponseSchema = z
  .object({
    entityTypes: z.array(EntityTypeSchema).exactOptional(),
    total: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ description: 'Search response for entity types.', required: [] })
  .openapi('EntityTypeSearchResponse')

const EntityUpdateCompleteEventSchema = z
  .object({ original: EntitySchema.exactOptional(), entity: EntitySchema.exactOptional() })
  .openapi({
    description:
      'Models the Entity Update Complete Event.  <p>  This is different than the entity.update event in that it will be sent after the entity has been updated. This event cannot be made  transactional.',
    required: [],
  })
  .openapi('EntityUpdateCompleteEvent')

const EntityUpdateEventSchema = z
  .object({ original: EntitySchema.exactOptional(), entity: EntitySchema.exactOptional() })
  .openapi({ description: 'Models the Entity Update Event.', required: [] })
  .openapi('EntityUpdateEvent')

const EpicGamesApplicationConfigurationSchema = z
  .object({
    buttonText: z.string().exactOptional(),
    client_id: z.string().exactOptional(),
    client_secret: z.string().exactOptional(),
    scope: z.string().exactOptional(),
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    createRegistration: z.boolean().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('EpicGamesApplicationConfiguration')

const EpicGamesIdentityProviderSchema = z
  .object({
    buttonText: z.string().exactOptional(),
    client_id: z.string().exactOptional(),
    client_secret: z.string().exactOptional(),
    scope: z.string().exactOptional(),
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    applicationConfiguration: z
      .record(z.string(), EpicGamesApplicationConfigurationSchema)
      .exactOptional(),
    attributeMappings: z.record(z.string(), z.string()).exactOptional(),
    debug: z.boolean().exactOptional(),
    id: z.uuid().exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    lambdaConfiguration: ProviderLambdaConfigurationSchema.exactOptional(),
    lastUpdateInstant: ZonedDateTimeSchema.exactOptional(),
    linkingStrategy: IdentityProviderLinkingStrategySchema.exactOptional(),
    name: z.string().exactOptional(),
    source: z.string().exactOptional(),
    tenantConfiguration: z
      .record(z.string(), IdentityProviderTenantConfigurationSchema)
      .exactOptional(),
    tenantId: z.uuid().exactOptional(),
    type: IdentityProviderTypeSchema.exactOptional(),
  })
  .openapi({ description: 'Epic gaming login provider.', required: [] })
  .openapi('EpicGamesIdentityProvider')

const ErrorSchema = z
  .object({
    code: z.string().exactOptional(),
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    message: z.string().exactOptional(),
  })
  .openapi({ description: 'Defines an error.', required: [] })
  .openapi('Error')

const ErrorsSchema = z
  .object({
    fieldErrors: z.record(z.string(), z.array(ErrorSchema)).exactOptional(),
    generalErrors: z.array(ErrorSchema).exactOptional(),
  })
  .openapi({
    description:
      'Standard error domain object that can also be used as the response from an API call.',
    required: [],
  })
  .openapi('Errors')

const TransactionTypeSchema = z
  .enum(['None', 'Any', 'SimpleMajority', 'SuperMajority', 'AbsoluteMajority'])
  .openapi({
    description: 'The transaction types for Webhooks and other event systems within FusionAuth.',
  })
  .openapi('TransactionType')

const EventConfigurationDataSchema = z
  .object({
    transactionType: TransactionTypeSchema.exactOptional(),
    enabled: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EventConfigurationData')

const EventConfigurationSchema = z
  .object({ events: z.record(z.string(), EventConfigurationDataSchema).exactOptional() })
  .openapi({ description: '', required: [] })
  .openapi('EventConfiguration')

const EventLogTypeSchema = z
  .enum(['Information', 'Debug', 'Error'])
  .openapi({ description: 'Event Log Type' })
  .openapi('EventLogType')

const EventLogSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    message: z.string().exactOptional(),
    type: EventLogTypeSchema.exactOptional(),
  })
  .openapi({
    description:
      'Event log used internally by FusionAuth to help developers debug hooks, Webhooks, email templates, etc.',
    required: [],
  })
  .openapi('EventLog')

const EventLogConfigurationSchema = z
  .object({ numberToRetain: z.int().exactOptional() })
  .openapi({ required: [] })
  .openapi('EventLogConfiguration')

const EventLogCreateEventSchema = z
  .object({
    eventLog: EventLogSchema.exactOptional(),
    createInstant: ZonedDateTimeSchema.exactOptional(),
    id: z.uuid().exactOptional(),
    info: EventInfoSchema.exactOptional(),
    tenantId: z.uuid().exactOptional(),
    type: EventTypeSchema.exactOptional(),
  })
  .openapi({ description: 'An Event "event" to indicate an event log was created.', required: [] })
  .openapi('EventLogCreateEvent')

const EventLogResponseSchema = z
  .object({ eventLog: EventLogSchema.exactOptional() })
  .openapi({ description: 'Event log response.', required: [] })
  .openapi('EventLogResponse')

const EventLogSearchCriteriaSchema = z
  .object({
    end: ZonedDateTimeSchema.exactOptional(),
    message: z.string().exactOptional(),
    start: ZonedDateTimeSchema.exactOptional(),
    type: EventLogTypeSchema.exactOptional(),
    numberOfResults: z.int().exactOptional(),
    orderBy: z.string().exactOptional(),
    startRow: z.int().exactOptional(),
  })
  .openapi({ description: 'Search criteria for the event log.', required: [] })
  .openapi('EventLogSearchCriteria')

const EventLogSearchRequestSchema = z
  .object({ search: EventLogSearchCriteriaSchema.exactOptional() })
  .openapi({ description: '', required: [] })
  .openapi('EventLogSearchRequest')

const EventLogSearchResponseSchema = z
  .object({
    eventLogs: z.array(EventLogSchema).exactOptional(),
    total: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ description: 'Event log response.', required: [] })
  .openapi('EventLogSearchResponse')

const EventRequestSchema = z
  .object({ event: BaseEventSchema.exactOptional() })
  .openapi({
    description:
      'Container for the event information. This is the JSON that is sent from FusionAuth to webhooks.',
    required: [],
  })
  .openapi('EventRequest')

const ExistingUserStrategySchema = z
  .enum(['mustExist', 'mustNotExist'])
  .openapi({
    description:
      'Represent the various statesexpectations of a user in the context of starting verification',
  })
  .openapi('ExistingUserStrategy')

const ExpandableRequestSchema = z
  .object({ expand: z.array(z.string()).exactOptional() })
  .openapi({ description: 'An expandable API request.', required: [] })
  .openapi('ExpandableRequest')

const ExpandableResponseSchema = z
  .object({ expandable: z.array(z.string()).exactOptional() })
  .openapi({ description: 'An expandable API response.', required: [] })
  .openapi('ExpandableResponse')

const ExpiryUnitSchema = z
  .enum(['MINUTES', 'HOURS', 'DAYS', 'WEEKS', 'MONTHS', 'YEARS'])
  .openapi({ description: '' })
  .openapi('ExpiryUnit')

const SecureGeneratorTypeSchema = z
  .enum(['randomDigits', 'randomBytes', 'randomAlpha', 'randomAlphaNumeric'])
  .openapi({ description: '' })
  .openapi('SecureGeneratorType')

const SecureGeneratorConfigurationSchema = z
  .object({ length: z.int().exactOptional(), type: SecureGeneratorTypeSchema.exactOptional() })
  .openapi({ description: '', required: [] })
  .openapi('SecureGeneratorConfiguration')

const ExternalIdentifierConfigurationSchema = z
  .object({
    authorizationGrantIdTimeToLiveInSeconds: z.int().exactOptional(),
    changePasswordIdGenerator: SecureGeneratorConfigurationSchema.exactOptional(),
    changePasswordIdTimeToLiveInSeconds: z.int().exactOptional(),
    deviceCodeTimeToLiveInSeconds: z.int().exactOptional(),
    deviceUserCodeIdGenerator: SecureGeneratorConfigurationSchema.exactOptional(),
    emailVerificationIdGenerator: SecureGeneratorConfigurationSchema.exactOptional(),
    emailVerificationIdTimeToLiveInSeconds: z.int().exactOptional(),
    emailVerificationOneTimeCodeGenerator: SecureGeneratorConfigurationSchema.exactOptional(),
    externalAuthenticationIdTimeToLiveInSeconds: z.int().exactOptional(),
    identityProviderConnectionTestTimeToLiveInSeconds: z.int().exactOptional(),
    loginIntentTimeToLiveInSeconds: z.int().exactOptional(),
    oneTimePasswordTimeToLiveInSeconds: z.int().exactOptional(),
    passwordlessLoginGenerator: SecureGeneratorConfigurationSchema.exactOptional(),
    passwordlessLoginOneTimeCodeGenerator: SecureGeneratorConfigurationSchema.exactOptional(),
    passwordlessLoginTimeToLiveInSeconds: z.int().exactOptional(),
    pendingAccountLinkTimeToLiveInSeconds: z.int().exactOptional(),
    phoneVerificationIdGenerator: SecureGeneratorConfigurationSchema.exactOptional(),
    phoneVerificationIdTimeToLiveInSeconds: z.int().exactOptional(),
    phoneVerificationOneTimeCodeGenerator: SecureGeneratorConfigurationSchema.exactOptional(),
    registrationVerificationIdGenerator: SecureGeneratorConfigurationSchema.exactOptional(),
    registrationVerificationIdTimeToLiveInSeconds: z.int().exactOptional(),
    registrationVerificationOneTimeCodeGenerator:
      SecureGeneratorConfigurationSchema.exactOptional(),
    rememberOAuthScopeConsentChoiceTimeToLiveInSeconds: z.int().exactOptional(),
    samlv2AuthNRequestIdTimeToLiveInSeconds: z.int().exactOptional(),
    setupPasswordIdGenerator: SecureGeneratorConfigurationSchema.exactOptional(),
    setupPasswordIdTimeToLiveInSeconds: z.int().exactOptional(),
    trustTokenTimeToLiveInSeconds: z.int().exactOptional(),
    twoFactorIdTimeToLiveInSeconds: z.int().exactOptional(),
    twoFactorOneTimeCodeIdGenerator: SecureGeneratorConfigurationSchema.exactOptional(),
    twoFactorOneTimeCodeIdTimeToLiveInSeconds: z.int().exactOptional(),
    twoFactorTrustIdTimeToLiveInSeconds: z.int().exactOptional(),
    webAuthnAuthenticationChallengeTimeToLiveInSeconds: z.int().exactOptional(),
    webAuthnRegistrationChallengeTimeToLiveInSeconds: z.int().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('ExternalIdentifierConfiguration')

const ExternalJWTApplicationConfigurationSchema = z
  .object({
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    createRegistration: z.boolean().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('ExternalJWTApplicationConfiguration')

const IdentityProviderOauth2ConfigurationSchema = z
  .object({
    authorization_endpoint: z.string().exactOptional(),
    clientAuthenticationMethod: ClientAuthenticationMethodSchema.exactOptional(),
    client_id: z.string().exactOptional(),
    client_secret: z.string().exactOptional(),
    emailClaim: z.string().exactOptional(),
    emailVerifiedClaim: z.string().exactOptional(),
    issuer: z.string().exactOptional(),
    scope: z.string().exactOptional(),
    token_endpoint: z.string().exactOptional(),
    uniqueIdClaim: z.string().exactOptional(),
    userinfo_endpoint: z.string().exactOptional(),
    usernameClaim: z.string().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('IdentityProviderOauth2Configuration')

const ExternalJWTIdentityProviderSchema = z
  .object({
    claimMap: z.record(z.string(), z.string()).exactOptional(),
    domains: z
      .array(z.any())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    defaultKeyId: z.uuid().exactOptional(),
    verificationKeyIds: z.array(z.uuid()).exactOptional(),
    headerKeyParameter: z.string().exactOptional(),
    oauth2: IdentityProviderOauth2ConfigurationSchema.exactOptional(),
    uniqueIdentityClaim: z.string().exactOptional(),
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    applicationConfiguration: z
      .record(z.string(), ExternalJWTApplicationConfigurationSchema)
      .exactOptional(),
    attributeMappings: z.record(z.string(), z.string()).exactOptional(),
    debug: z.boolean().exactOptional(),
    id: z.uuid().exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    lambdaConfiguration: ProviderLambdaConfigurationSchema.exactOptional(),
    lastUpdateInstant: ZonedDateTimeSchema.exactOptional(),
    linkingStrategy: IdentityProviderLinkingStrategySchema.exactOptional(),
    name: z.string().exactOptional(),
    source: z.string().exactOptional(),
    tenantConfiguration: z
      .record(z.string(), IdentityProviderTenantConfigurationSchema)
      .exactOptional(),
    tenantId: z.uuid().exactOptional(),
    type: IdentityProviderTypeSchema.exactOptional(),
  })
  .openapi({ description: 'External JWT-only identity provider.', required: [] })
  .openapi('ExternalJWTIdentityProvider')

const FIPSSchema = z
  .looseObject({})
  .openapi({
    description:
      'Determines if FusionAuth is in FIPS mode based on the system property <code>fusionauth.fips.enabled<code>. This can only be enabled once and  should be enabled when the VM starts or as close to that point as possible.  <p>  Once this has been enabled, it cannot be disabled.  <p>  This also provides some helpers for FIPS things such as password length requirements.',
  })
  .openapi('FIPS')

const IdentityProviderLoginMethodSchema = z
  .enum(['UsePopup', 'UseRedirect', 'UseVendorJavaScript'])
  .openapi({ description: '' })
  .openapi('IdentityProviderLoginMethod')

const FacebookApplicationConfigurationSchema = z
  .object({
    appId: z.string().exactOptional(),
    buttonText: z.string().exactOptional(),
    client_secret: z.string().exactOptional(),
    fields: z.string().exactOptional(),
    loginMethod: IdentityProviderLoginMethodSchema.exactOptional(),
    permissions: z.string().exactOptional(),
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    createRegistration: z.boolean().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('FacebookApplicationConfiguration')

const FacebookIdentityProviderSchema = z
  .object({
    appId: z.string().exactOptional(),
    buttonText: z.string().exactOptional(),
    client_secret: z.string().exactOptional(),
    fields: z.string().exactOptional(),
    loginMethod: IdentityProviderLoginMethodSchema.exactOptional(),
    permissions: z.string().exactOptional(),
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    applicationConfiguration: z
      .record(z.string(), FacebookApplicationConfigurationSchema)
      .exactOptional(),
    attributeMappings: z.record(z.string(), z.string()).exactOptional(),
    debug: z.boolean().exactOptional(),
    id: z.uuid().exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    lambdaConfiguration: ProviderLambdaConfigurationSchema.exactOptional(),
    lastUpdateInstant: ZonedDateTimeSchema.exactOptional(),
    linkingStrategy: IdentityProviderLinkingStrategySchema.exactOptional(),
    name: z.string().exactOptional(),
    source: z.string().exactOptional(),
    tenantConfiguration: z
      .record(z.string(), IdentityProviderTenantConfigurationSchema)
      .exactOptional(),
    tenantId: z.uuid().exactOptional(),
    type: IdentityProviderTypeSchema.exactOptional(),
  })
  .openapi({ description: 'Facebook social login provider.', required: [] })
  .openapi('FacebookIdentityProvider')

const FailedAuthenticationActionCancelPolicySchema = z
  .object({ onPasswordReset: z.boolean().exactOptional() })
  .openapi({
    description:
      'A policy to configure if and when the user-action is canceled prior to the expiration of the action.',
    required: [],
  })
  .openapi('FailedAuthenticationActionCancelPolicy')

const FailedAuthenticationConfigurationSchema = z
  .object({
    actionCancelPolicy: FailedAuthenticationActionCancelPolicySchema.exactOptional(),
    actionDuration: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    actionDurationUnit: ExpiryUnitSchema.exactOptional(),
    emailUser: z.boolean().exactOptional(),
    resetCountInSeconds: z.int().exactOptional(),
    tooManyAttempts: z.int().exactOptional(),
    userActionId: z.uuid().exactOptional(),
  })
  .openapi({
    description:
      'Configuration for the behavior of failed login attempts. This helps us protect against brute force password attacks.',
    required: [],
  })
  .openapi('FailedAuthenticationConfiguration')

const FamilyRoleSchema = z.enum(['Child', 'Teen', 'Adult']).openapi('FamilyRole')

const FamilyMemberSchema = z
  .object({
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    lastUpdateInstant: ZonedDateTimeSchema.exactOptional(),
    owner: z.boolean().exactOptional(),
    role: FamilyRoleSchema.exactOptional(),
    userId: z.uuid().exactOptional(),
  })
  .openapi({ description: 'Models a single family member.', required: [] })
  .openapi('FamilyMember')

const FamilySchema = z
  .object({
    members: z.array(FamilyMemberSchema).exactOptional(),
    id: z.uuid().exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    lastUpdateInstant: ZonedDateTimeSchema.exactOptional(),
  })
  .openapi({ description: 'Models a family grouping of users.', required: [] })
  .openapi('Family')

const FamilyConfigurationSchema = z
  .object({
    allowChildRegistrations: z.boolean().exactOptional(),
    confirmChildEmailTemplateId: z.uuid().exactOptional(),
    deleteOrphanedAccounts: z.boolean().exactOptional(),
    deleteOrphanedAccountsDays: z.int().exactOptional(),
    familyRequestEmailTemplateId: z.uuid().exactOptional(),
    maximumChildAge: z.int().exactOptional(),
    minimumOwnerAge: z.int().exactOptional(),
    parentEmailRequired: z.boolean().exactOptional(),
    parentRegistrationEmailTemplateId: z.uuid().exactOptional(),
    enabled: z.boolean().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('FamilyConfiguration')

const FamilyEmailRequestSchema = z
  .object({ parentEmail: z.string().exactOptional() })
  .openapi({
    description: "API request for sending out family requests to parent's.",
    required: [],
  })
  .openapi('FamilyEmailRequest')

const FamilyRequestSchema = z
  .object({ familyMember: FamilyMemberSchema.exactOptional() })
  .openapi({ description: 'API request for managing families and members.', required: [] })
  .openapi('FamilyRequest')

const FamilyResponseSchema = z
  .object({ families: z.array(FamilySchema).exactOptional(), family: FamilySchema.exactOptional() })
  .openapi({ description: 'API response for managing families and members.', required: [] })
  .openapi('FamilyResponse')

const FaviconSchema = z
  .object({
    href: z.string().exactOptional(),
    rel: z.string().exactOptional(),
    sizes: z.string().exactOptional(),
    type: z.string().exactOptional(),
  })
  .openapi({
    description: 'Components of a Favicon in an HTML {@code <head>} element.',
    required: [],
  })
  .openapi('Favicon')

const ForgotPasswordRequestSchema = z
  .object({
    applicationId: z.uuid().exactOptional(),
    changePasswordId: z.string().exactOptional(),
    loginId: z.string().exactOptional(),
    loginIdTypes: z.array(z.string()).exactOptional(),
    sendForgotPasswordEmail: z.boolean().exactOptional(),
    sendForgotPasswordMessage: z.boolean().exactOptional(),
    state: z.record(z.string(), z.looseObject({})).exactOptional(),
    email: z.string().exactOptional(),
    username: z.string().exactOptional(),
    eventInfo: EventInfoSchema.exactOptional(),
  })
  .openapi({ description: 'Forgot password request object.', required: [] })
  .openapi('ForgotPasswordRequest')

const ForgotPasswordResponseSchema = z
  .object({ changePasswordId: z.string().exactOptional() })
  .openapi({ description: 'Forgot password response object.', required: [] })
  .openapi('ForgotPasswordResponse')

const FormStepTypeSchema = z
  .enum(['collectData', 'verifyEmail', 'verifyPhoneNumber'])
  .openapi({
    description:
      'Denotes the type of form step. This is used to configure different behavior on form steps in the registration flow.',
  })
  .openapi('FormStepType')

const FormStepSchema = z
  .object({ fields: z.array(z.uuid()).exactOptional(), type: FormStepTypeSchema.exactOptional() })
  .openapi({ description: '', required: [] })
  .openapi('FormStep')

const FormTypeSchema = z
  .enum(['registration', 'adminRegistration', 'adminUser', 'selfServiceUser'])
  .openapi({ description: '' })
  .openapi('FormType')

const FormSchema = z
  .object({
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    id: z.uuid().exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    lastUpdateInstant: ZonedDateTimeSchema.exactOptional(),
    name: z.string().exactOptional(),
    steps: z.array(FormStepSchema).exactOptional(),
    type: FormTypeSchema.exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('Form')

const FormControlSchema = z
  .enum(['checkbox', 'number', 'password', 'radio', 'select', 'textarea', 'text'])
  .openapi({ description: '' })
  .openapi('FormControl')

const FormDataTypeSchema = z
  .enum(['bool', 'consent', 'date', 'email', 'number', 'phoneNumber', 'string'])
  .openapi({ description: '' })
  .openapi('FormDataType')

const FormFieldValidatorSchema = z
  .object({ expression: z.string().exactOptional(), enabled: z.boolean().exactOptional() })
  .openapi({ description: '', required: [] })
  .openapi('FormFieldValidator')

const FormFieldSchema = z
  .object({
    confirm: z.boolean().exactOptional(),
    consentId: z.uuid().exactOptional(),
    control: FormControlSchema.exactOptional(),
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    description: z.string().exactOptional(),
    id: z.uuid().exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    key: z.string().exactOptional(),
    lastUpdateInstant: ZonedDateTimeSchema.exactOptional(),
    name: z.string().exactOptional(),
    options: z.array(z.string()).exactOptional(),
    required: z.boolean().exactOptional(),
    type: FormDataTypeSchema.exactOptional(),
    validator: FormFieldValidatorSchema.exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('FormField')

const FormFieldAdminPolicySchema = z
  .enum(['Edit', 'View'])
  .openapi({ description: '' })
  .openapi('FormFieldAdminPolicy')

const FormFieldRequestSchema = z
  .object({
    field: FormFieldSchema.exactOptional(),
    fields: z.array(FormFieldSchema).exactOptional(),
  })
  .openapi({ description: 'The FormField API request object.', required: [] })
  .openapi('FormFieldRequest')

const FormFieldResponseSchema = z
  .object({
    field: FormFieldSchema.exactOptional(),
    fields: z.array(FormFieldSchema).exactOptional(),
  })
  .openapi({ description: 'Form field response.', required: [] })
  .openapi('FormFieldResponse')

const FormRequestSchema = z
  .object({ form: FormSchema.exactOptional() })
  .openapi({ description: 'Form response.', required: [] })
  .openapi('FormRequest')

const FormResponseSchema = z
  .object({ form: FormSchema.exactOptional(), forms: z.array(FormSchema).exactOptional() })
  .openapi({ description: 'Form response.', required: [] })
  .openapi('FormResponse')

const FusionAuthConnectorConfigurationSchema = z
  .object({
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    debug: z.boolean().exactOptional(),
    id: z.uuid().exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    lastUpdateInstant: ZonedDateTimeSchema.exactOptional(),
    name: z.string().exactOptional(),
    type: ConnectorTypeSchema.exactOptional(),
  })
  .openapi({ description: 'Models the FusionAuth connector.', required: [] })
  .openapi('FusionAuthConnectorConfiguration')

const HTTPHeadersSchema = z
  .looseObject({})
  .openapi({ description: 'Type for webhook headers.' })
  .openapi('HTTPHeaders')

const GenericConnectorConfigurationSchema = z
  .object({
    authenticationURL: z.string().exactOptional(),
    connectTimeout: z.int().exactOptional(),
    headers: HTTPHeadersSchema.exactOptional(),
    httpAuthenticationPassword: z.string().exactOptional(),
    httpAuthenticationUsername: z.string().exactOptional(),
    readTimeout: z.int().exactOptional(),
    sslCertificateKeyId: z.uuid().exactOptional(),
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    debug: z.boolean().exactOptional(),
    id: z.uuid().exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    lastUpdateInstant: ZonedDateTimeSchema.exactOptional(),
    name: z.string().exactOptional(),
    type: ConnectorTypeSchema.exactOptional(),
  })
  .openapi({ description: 'Models a generic connector.', required: [] })
  .openapi('GenericConnectorConfiguration')

const GenericMessengerConfigurationSchema = z
  .object({
    connectTimeout: z.int().exactOptional(),
    headers: HTTPHeadersSchema.exactOptional(),
    httpAuthenticationPassword: z.string().exactOptional(),
    httpAuthenticationUsername: z.string().exactOptional(),
    readTimeout: z.int().exactOptional(),
    sslCertificate: z.string().exactOptional(),
    url: z.string().exactOptional(),
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    debug: z.boolean().exactOptional(),
    id: z.uuid().exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    lastUpdateInstant: ZonedDateTimeSchema.exactOptional(),
    messageTypes: z
      .array(z.any())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    name: z.string().exactOptional(),
    transport: z.string().exactOptional(),
    type: MessengerTypeSchema.exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('GenericMessengerConfiguration')

const GoogleIdentityProviderPropertiesSchema = z
  .object({ api: z.string().exactOptional(), button: z.string().exactOptional() })
  .openapi({ description: 'Google social login provider parameters.', required: [] })
  .openapi('GoogleIdentityProviderProperties')

const GoogleApplicationConfigurationSchema = z
  .object({
    buttonText: z.string().exactOptional(),
    client_id: z.string().exactOptional(),
    client_secret: z.string().exactOptional(),
    loginMethod: IdentityProviderLoginMethodSchema.exactOptional(),
    properties: GoogleIdentityProviderPropertiesSchema.exactOptional(),
    scope: z.string().exactOptional(),
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    createRegistration: z.boolean().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('GoogleApplicationConfiguration')

const GoogleIdentityProviderSchema = z
  .object({
    buttonText: z.string().exactOptional(),
    client_id: z.string().exactOptional(),
    client_secret: z.string().exactOptional(),
    loginMethod: IdentityProviderLoginMethodSchema.exactOptional(),
    properties: GoogleIdentityProviderPropertiesSchema.exactOptional(),
    scope: z.string().exactOptional(),
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    applicationConfiguration: z
      .record(z.string(), GoogleApplicationConfigurationSchema)
      .exactOptional(),
    attributeMappings: z.record(z.string(), z.string()).exactOptional(),
    debug: z.boolean().exactOptional(),
    id: z.uuid().exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    lambdaConfiguration: ProviderLambdaConfigurationSchema.exactOptional(),
    lastUpdateInstant: ZonedDateTimeSchema.exactOptional(),
    linkingStrategy: IdentityProviderLinkingStrategySchema.exactOptional(),
    name: z.string().exactOptional(),
    source: z.string().exactOptional(),
    tenantConfiguration: z
      .record(z.string(), IdentityProviderTenantConfigurationSchema)
      .exactOptional(),
    tenantId: z.uuid().exactOptional(),
    type: IdentityProviderTypeSchema.exactOptional(),
  })
  .openapi({ description: 'Google social login provider.', required: [] })
  .openapi('GoogleIdentityProvider')

const GrantTypeSchema = z
  .enum([
    'authorization_code',
    'implicit',
    'password',
    'client_credentials',
    'token_exchange',
    'refresh_token',
    'unknown',
    'device_code',
  ])
  .openapi({
    description:
      'Authorization Grant types as defined by the <a href="https:tools.ietf.orghtmlrfc6749">OAuth 2.0 Authorization  Framework - RFC 6749<a>.  <p>  Specific names as defined by <a href="https:tools.ietf.orghtmlrfc7591#section-4.1">  OAuth 2.0 Dynamic Client Registration Protocol - RFC 7591 Section 4.1<a>',
  })
  .openapi('GrantType')

const GrantedSchema = z
  .object({
    aud: z.array(z.string()).exactOptional(),
    expires_in: z.int().exactOptional(),
    scope: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Granted')

const GroupCreateCompleteEventSchema = z
  .object({ group: GroupSchema.exactOptional() })
  .openapi({ description: 'Models the Group Created Event.', required: [] })
  .openapi('GroupCreateCompleteEvent')

const GroupCreateEventSchema = z
  .object({ group: GroupSchema.exactOptional() })
  .openapi({ description: 'Models the Group Create Event.', required: [] })
  .openapi('GroupCreateEvent')

const GroupDeleteCompleteEventSchema = z
  .object({ group: GroupSchema.exactOptional() })
  .openapi({ description: 'Models the Group Create Complete Event.', required: [] })
  .openapi('GroupDeleteCompleteEvent')

const GroupDeleteEventSchema = z
  .object({ group: GroupSchema.exactOptional() })
  .openapi({ description: 'Models the Group Delete Event.', required: [] })
  .openapi('GroupDeleteEvent')

const GroupMemberAddCompleteEventSchema = z
  .object({
    members: z.array(GroupMemberSchema).exactOptional(),
    group: GroupSchema.exactOptional(),
  })
  .openapi({ description: 'Models the Group Member Add Complete Event.', required: [] })
  .openapi('GroupMemberAddCompleteEvent')

const GroupMemberAddEventSchema = z
  .object({
    members: z.array(GroupMemberSchema).exactOptional(),
    group: GroupSchema.exactOptional(),
  })
  .openapi({ description: 'Models the Group Member Add Event.', required: [] })
  .openapi('GroupMemberAddEvent')

const GroupMemberRemoveCompleteEventSchema = z
  .object({
    members: z.array(GroupMemberSchema).exactOptional(),
    group: GroupSchema.exactOptional(),
  })
  .openapi({ description: 'Models the Group Member Remove Complete Event.', required: [] })
  .openapi('GroupMemberRemoveCompleteEvent')

const GroupMemberRemoveEventSchema = z
  .object({
    members: z.array(GroupMemberSchema).exactOptional(),
    group: GroupSchema.exactOptional(),
  })
  .openapi({ description: 'Models the Group Member Remove Event.', required: [] })
  .openapi('GroupMemberRemoveEvent')

const GroupMemberSearchCriteriaSchema = z
  .object({
    groupId: z.uuid().exactOptional(),
    tenantId: z.uuid().exactOptional(),
    userId: z.uuid().exactOptional(),
    numberOfResults: z.int().exactOptional(),
    orderBy: z.string().exactOptional(),
    startRow: z.int().exactOptional(),
  })
  .openapi({ description: 'Search criteria for Group Members', required: [] })
  .openapi('GroupMemberSearchCriteria')

const GroupMemberSearchRequestSchema = z
  .object({ search: GroupMemberSearchCriteriaSchema.exactOptional() })
  .openapi({ description: 'Search request for Group Members.', required: [] })
  .openapi('GroupMemberSearchRequest')

const GroupMemberSearchResponseSchema = z
  .object({
    members: z.array(GroupMemberSchema).exactOptional(),
    total: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ description: 'Search response for Group Members', required: [] })
  .openapi('GroupMemberSearchResponse')

const GroupMemberUpdateCompleteEventSchema = z
  .object({
    members: z.array(GroupMemberSchema).exactOptional(),
    group: GroupSchema.exactOptional(),
  })
  .openapi({ description: 'Models the Group Member Update Complete Event.', required: [] })
  .openapi('GroupMemberUpdateCompleteEvent')

const GroupMemberUpdateEventSchema = z
  .object({
    members: z.array(GroupMemberSchema).exactOptional(),
    group: GroupSchema.exactOptional(),
  })
  .openapi({ description: 'Models the Group Member Update Event.', required: [] })
  .openapi('GroupMemberUpdateEvent')

const GroupRequestSchema = z
  .object({ group: GroupSchema.exactOptional(), roleIds: z.array(z.uuid()).exactOptional() })
  .openapi({ description: 'Group API request object.', required: [] })
  .openapi('GroupRequest')

const GroupResponseSchema = z
  .object({ group: GroupSchema.exactOptional(), groups: z.array(GroupSchema).exactOptional() })
  .openapi({ description: 'Group API response object.', required: [] })
  .openapi('GroupResponse')

const GroupSearchCriteriaSchema = z
  .object({
    name: z.string().exactOptional(),
    tenantId: z.uuid().exactOptional(),
    numberOfResults: z.int().exactOptional(),
    orderBy: z.string().exactOptional(),
    startRow: z.int().exactOptional(),
  })
  .openapi({ description: 'Search criteria for Groups', required: [] })
  .openapi('GroupSearchCriteria')

const GroupSearchRequestSchema = z
  .object({ search: GroupSearchCriteriaSchema.exactOptional() })
  .openapi({ description: 'Search request for Groups.', required: [] })
  .openapi('GroupSearchRequest')

const GroupSearchResponseSchema = z
  .object({
    groups: z.array(GroupSchema).exactOptional(),
    total: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ description: 'Search response for Groups', required: [] })
  .openapi('GroupSearchResponse')

const GroupUpdateCompleteEventSchema = z
  .object({ original: GroupSchema.exactOptional(), group: GroupSchema.exactOptional() })
  .openapi({ description: 'Models the Group Update Complete Event.', required: [] })
  .openapi('GroupUpdateCompleteEvent')

const GroupUpdateEventSchema = z
  .object({ original: GroupSchema.exactOptional(), group: GroupSchema.exactOptional() })
  .openapi({ description: 'Models the Group Update Event.', required: [] })
  .openapi('GroupUpdateEvent')

const HYPRApplicationConfigurationSchema = z
  .object({
    relyingPartyApplicationId: z.string().exactOptional(),
    relyingPartyURL: z.string().exactOptional(),
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    createRegistration: z.boolean().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('HYPRApplicationConfiguration')

const HYPRIdentityProviderSchema = z
  .object({
    relyingPartyApplicationId: z.string().exactOptional(),
    relyingPartyURL: z.string().exactOptional(),
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    applicationConfiguration: z
      .record(z.string(), HYPRApplicationConfigurationSchema)
      .exactOptional(),
    attributeMappings: z.record(z.string(), z.string()).exactOptional(),
    debug: z.boolean().exactOptional(),
    id: z.uuid().exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    lambdaConfiguration: ProviderLambdaConfigurationSchema.exactOptional(),
    lastUpdateInstant: ZonedDateTimeSchema.exactOptional(),
    linkingStrategy: IdentityProviderLinkingStrategySchema.exactOptional(),
    name: z.string().exactOptional(),
    source: z.string().exactOptional(),
    tenantConfiguration: z
      .record(z.string(), IdentityProviderTenantConfigurationSchema)
      .exactOptional(),
    tenantId: z.uuid().exactOptional(),
    type: IdentityProviderTypeSchema.exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('HYPRIdentityProvider')

const IPAccessControlEntryActionSchema = z
  .enum(['Allow', 'Block'])
  .openapi({ description: '' })
  .openapi('IPAccessControlEntryAction')

const IPAccessControlEntrySchema = z
  .object({
    action: IPAccessControlEntryActionSchema.exactOptional(),
    endIPAddress: z.string().exactOptional(),
    startIPAddress: z.string().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('IPAccessControlEntry')

const IPAccessControlListSchema = z
  .object({
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    entries: z.array(IPAccessControlEntrySchema).exactOptional(),
    id: z.uuid().exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    lastUpdateInstant: ZonedDateTimeSchema.exactOptional(),
    name: z.string().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('IPAccessControlList')

const IPAccessControlListRequestSchema = z
  .object({ ipAccessControlList: IPAccessControlListSchema.exactOptional() })
  .openapi({ description: '', required: [] })
  .openapi('IPAccessControlListRequest')

const IPAccessControlListResponseSchema = z
  .object({
    ipAccessControlList: IPAccessControlListSchema.exactOptional(),
    ipAccessControlLists: z.array(IPAccessControlListSchema).exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('IPAccessControlListResponse')

const IPAccessControlListSearchCriteriaSchema = z
  .object({
    name: z.string().exactOptional(),
    numberOfResults: z.int().exactOptional(),
    orderBy: z.string().exactOptional(),
    startRow: z.int().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('IPAccessControlListSearchCriteria')

const IPAccessControlListSearchRequestSchema = z
  .object({ search: IPAccessControlListSearchCriteriaSchema.exactOptional() })
  .openapi({ description: 'Search request for IP ACLs .', required: [] })
  .openapi('IPAccessControlListSearchRequest')

const IPAccessControlListSearchResponseSchema = z
  .object({
    ipAccessControlLists: z.array(IPAccessControlListSchema).exactOptional(),
    total: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ description: '', required: [] })
  .openapi('IPAccessControlListSearchResponse')

const IdentityInfoSchema = z
  .object({ type: z.string().exactOptional(), value: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('IdentityInfo')

const IdentityProviderConnectionTestRequestSchema = z
  .object({ identityProviderId: z.uuid().exactOptional(), tenantId: z.uuid().exactOptional() })
  .openapi({
    description: 'A request for interacting with the identity provider connection test API',
    required: [],
  })
  .openapi('IdentityProviderConnectionTestRequest')

const IdentityProviderLoginStepSchema = z
  .object({
    detail: z.string().exactOptional(),
    success: z.boolean().exactOptional(),
    title: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('IdentityProviderLoginStep')

const IdentityProviderConnectionTestResultSchema = z
  .object({
    email: z.string().exactOptional(),
    identityProviderId: z.uuid().exactOptional(),
    identityProviderUserId: z.string().exactOptional(),
    startInstant: ZonedDateTimeSchema.exactOptional(),
    steps: z.array(IdentityProviderLoginStepSchema).exactOptional(),
    success: z.boolean().exactOptional(),
    username: z.string().exactOptional(),
  })
  .openapi({ description: 'The results of an identity provider connection test.', required: [] })
  .openapi('IdentityProviderConnectionTestResult')

const IdentityProviderConnectionTestResponseSchema = z
  .object({
    connectionTestId: z.string().exactOptional(),
    result: IdentityProviderConnectionTestResultSchema.exactOptional(),
  })
  .openapi({
    description: 'A response for the identity provider connection test API',
    required: [],
  })
  .openapi('IdentityProviderConnectionTestResponse')

const IdentityProviderDetailsSchema = z
  .object({
    applicationIds: z.array(z.uuid()).exactOptional(),
    id: z.uuid().exactOptional(),
    idpEndpoint: z.string().exactOptional(),
    name: z.string().exactOptional(),
    oauth2: IdentityProviderOauth2ConfigurationSchema.exactOptional(),
    tenantId: z.uuid().exactOptional(),
    type: IdentityProviderTypeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('IdentityProviderDetails')

const LinkedInApplicationConfigurationSchema = z
  .object({
    buttonText: z.string().exactOptional(),
    client_id: z.string().exactOptional(),
    client_secret: z.string().exactOptional(),
    scope: z.string().exactOptional(),
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    createRegistration: z.boolean().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('LinkedInApplicationConfiguration')

const LinkedInIdentityProviderSchema = z
  .object({
    buttonText: z.string().exactOptional(),
    client_id: z.string().exactOptional(),
    client_secret: z.string().exactOptional(),
    scope: z.string().exactOptional(),
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    applicationConfiguration: z
      .record(z.string(), LinkedInApplicationConfigurationSchema)
      .exactOptional(),
    attributeMappings: z.record(z.string(), z.string()).exactOptional(),
    debug: z.boolean().exactOptional(),
    id: z.uuid().exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    lambdaConfiguration: ProviderLambdaConfigurationSchema.exactOptional(),
    lastUpdateInstant: ZonedDateTimeSchema.exactOptional(),
    linkingStrategy: IdentityProviderLinkingStrategySchema.exactOptional(),
    name: z.string().exactOptional(),
    source: z.string().exactOptional(),
    tenantConfiguration: z
      .record(z.string(), IdentityProviderTenantConfigurationSchema)
      .exactOptional(),
    tenantId: z.uuid().exactOptional(),
    type: IdentityProviderTypeSchema.exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('LinkedInIdentityProvider')

const NintendoApplicationConfigurationSchema = z
  .object({
    buttonText: z.string().exactOptional(),
    client_id: z.string().exactOptional(),
    client_secret: z.string().exactOptional(),
    emailClaim: z.string().exactOptional(),
    scope: z.string().exactOptional(),
    uniqueIdClaim: z.string().exactOptional(),
    usernameClaim: z.string().exactOptional(),
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    createRegistration: z.boolean().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('NintendoApplicationConfiguration')

const NintendoIdentityProviderSchema = z
  .object({
    buttonText: z.string().exactOptional(),
    client_id: z.string().exactOptional(),
    client_secret: z.string().exactOptional(),
    emailClaim: z.string().exactOptional(),
    scope: z.string().exactOptional(),
    uniqueIdClaim: z.string().exactOptional(),
    usernameClaim: z.string().exactOptional(),
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    applicationConfiguration: z
      .record(z.string(), NintendoApplicationConfigurationSchema)
      .exactOptional(),
    attributeMappings: z.record(z.string(), z.string()).exactOptional(),
    debug: z.boolean().exactOptional(),
    id: z.uuid().exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    lambdaConfiguration: ProviderLambdaConfigurationSchema.exactOptional(),
    lastUpdateInstant: ZonedDateTimeSchema.exactOptional(),
    linkingStrategy: IdentityProviderLinkingStrategySchema.exactOptional(),
    name: z.string().exactOptional(),
    source: z.string().exactOptional(),
    tenantConfiguration: z
      .record(z.string(), IdentityProviderTenantConfigurationSchema)
      .exactOptional(),
    tenantId: z.uuid().exactOptional(),
    type: IdentityProviderTypeSchema.exactOptional(),
  })
  .openapi({ description: 'Nintendo gaming login provider.', required: [] })
  .openapi('NintendoIdentityProvider')

const OpenIdConnectApplicationConfigurationSchema = z
  .object({
    buttonImageURL: z.string().exactOptional(),
    buttonText: z.string().exactOptional(),
    oauth2: IdentityProviderOauth2ConfigurationSchema.exactOptional(),
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    createRegistration: z.boolean().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('OpenIdConnectApplicationConfiguration')

const OpenIdConnectIdentityProviderSchema = z
  .object({
    domains: z
      .array(z.any())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    buttonImageURL: z.string().exactOptional(),
    buttonText: z.string().exactOptional(),
    oauth2: IdentityProviderOauth2ConfigurationSchema.exactOptional(),
    postRequest: z.boolean().exactOptional(),
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    applicationConfiguration: z
      .record(z.string(), OpenIdConnectApplicationConfigurationSchema)
      .exactOptional(),
    attributeMappings: z.record(z.string(), z.string()).exactOptional(),
    debug: z.boolean().exactOptional(),
    id: z.uuid().exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    lambdaConfiguration: ProviderLambdaConfigurationSchema.exactOptional(),
    lastUpdateInstant: ZonedDateTimeSchema.exactOptional(),
    linkingStrategy: IdentityProviderLinkingStrategySchema.exactOptional(),
    name: z.string().exactOptional(),
    source: z.string().exactOptional(),
    tenantConfiguration: z
      .record(z.string(), IdentityProviderTenantConfigurationSchema)
      .exactOptional(),
    tenantId: z.uuid().exactOptional(),
    type: IdentityProviderTypeSchema.exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('OpenIdConnectIdentityProvider')

const SAMLv2AssertionDecryptionConfigurationSchema = z
  .object({
    keyTransportDecryptionKeyId: z.uuid().exactOptional(),
    enabled: z.boolean().exactOptional(),
  })
  .openapi({
    description: 'Configuration for encrypted assertions when acting as SAML Service Provider',
    required: [],
  })
  .openapi('SAMLv2AssertionDecryptionConfiguration')

const SAMLv2IdPInitiatedIdentityProviderSchema = z
  .object({
    issuer: z.string().exactOptional(),
    assertionDecryptionConfiguration: SAMLv2AssertionDecryptionConfigurationSchema.exactOptional(),
    emailClaim: z.string().exactOptional(),
    keyId: z.uuid().exactOptional(),
    verificationKeyIds: z.array(z.uuid()).exactOptional(),
    uniqueIdClaim: z.string().exactOptional(),
    useNameIdForEmail: z.boolean().exactOptional(),
    usernameClaim: z.string().exactOptional(),
  })
  .openapi({ description: 'SAML v2 IdP Initiated identity provider configuration.', required: [] })
  .openapi('SAMLv2IdPInitiatedIdentityProvider')

const SAMLv2DestinationAssertionPolicySchema = z
  .enum(['Enabled', 'Disabled', 'AllowAlternates'])
  .openapi({ description: '' })
  .openapi('SAMLv2DestinationAssertionPolicy')

const SAMLv2DestinationAssertionConfigurationSchema = z
  .object({
    alternates: z.array(z.string()).exactOptional(),
    policy: SAMLv2DestinationAssertionPolicySchema.exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('SAMLv2DestinationAssertionConfiguration')

const SAMLv2AssertionConfigurationSchema = z
  .object({ destination: SAMLv2DestinationAssertionConfigurationSchema.exactOptional() })
  .openapi({ description: '', required: [] })
  .openapi('SAMLv2AssertionConfiguration')

const SAMLv2IdpInitiatedConfigurationSchema = z
  .object({ issuer: z.string().exactOptional(), enabled: z.boolean().exactOptional() })
  .openapi({
    description: 'Config for regular SAML IDP configurations that support IdP initiated requests',
    required: [],
  })
  .openapi('SAMLv2IdpInitiatedConfiguration')

const SAMLv2IdentityProviderSchema = z
  .object({
    domains: z
      .array(z.any())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    assertionConfiguration: SAMLv2AssertionConfigurationSchema.exactOptional(),
    buttonImageURL: z.string().exactOptional(),
    buttonText: z.string().exactOptional(),
    idpEndpoint: z.string().exactOptional(),
    idpInitiatedConfiguration: SAMLv2IdpInitiatedConfigurationSchema.exactOptional(),
    issuer: z.string().exactOptional(),
    loginHintConfiguration: LoginHintConfigurationSchema.exactOptional(),
    nameIdFormat: z.string().exactOptional(),
    postRequest: z.boolean().exactOptional(),
    requestSigningKeyId: z.uuid().exactOptional(),
    signRequest: z.boolean().exactOptional(),
    xmlSignatureC14nMethod: CanonicalizationMethodSchema.exactOptional(),
    assertionDecryptionConfiguration: SAMLv2AssertionDecryptionConfigurationSchema.exactOptional(),
    emailClaim: z.string().exactOptional(),
    keyId: z.uuid().exactOptional(),
    verificationKeyIds: z.array(z.uuid()).exactOptional(),
    uniqueIdClaim: z.string().exactOptional(),
    useNameIdForEmail: z.boolean().exactOptional(),
    usernameClaim: z.string().exactOptional(),
  })
  .openapi({ description: 'SAML v2 identity provider configuration.', required: [] })
  .openapi('SAMLv2IdentityProvider')

const SonyPSNApplicationConfigurationSchema = z
  .object({
    buttonText: z.string().exactOptional(),
    client_id: z.string().exactOptional(),
    client_secret: z.string().exactOptional(),
    scope: z.string().exactOptional(),
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    createRegistration: z.boolean().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('SonyPSNApplicationConfiguration')

const SonyPSNIdentityProviderSchema = z
  .object({
    buttonText: z.string().exactOptional(),
    client_id: z.string().exactOptional(),
    client_secret: z.string().exactOptional(),
    scope: z.string().exactOptional(),
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    applicationConfiguration: z
      .record(z.string(), SonyPSNApplicationConfigurationSchema)
      .exactOptional(),
    attributeMappings: z.record(z.string(), z.string()).exactOptional(),
    debug: z.boolean().exactOptional(),
    id: z.uuid().exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    lambdaConfiguration: ProviderLambdaConfigurationSchema.exactOptional(),
    lastUpdateInstant: ZonedDateTimeSchema.exactOptional(),
    linkingStrategy: IdentityProviderLinkingStrategySchema.exactOptional(),
    name: z.string().exactOptional(),
    source: z.string().exactOptional(),
    tenantConfiguration: z
      .record(z.string(), IdentityProviderTenantConfigurationSchema)
      .exactOptional(),
    tenantId: z.uuid().exactOptional(),
    type: IdentityProviderTypeSchema.exactOptional(),
  })
  .openapi({ description: 'SonyPSN gaming login provider.', required: [] })
  .openapi('SonyPSNIdentityProvider')

const SteamAPIModeSchema = z
  .enum(['Public', 'Partner'])
  .openapi({ description: 'Steam API modes.' })
  .openapi('SteamAPIMode')

const SteamApplicationConfigurationSchema = z
  .object({
    apiMode: SteamAPIModeSchema.exactOptional(),
    buttonText: z.string().exactOptional(),
    client_id: z.string().exactOptional(),
    scope: z.string().exactOptional(),
    webAPIKey: z.string().exactOptional(),
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    createRegistration: z.boolean().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('SteamApplicationConfiguration')

const SteamIdentityProviderSchema = z
  .object({
    apiMode: SteamAPIModeSchema.exactOptional(),
    buttonText: z.string().exactOptional(),
    client_id: z.string().exactOptional(),
    scope: z.string().exactOptional(),
    webAPIKey: z.string().exactOptional(),
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    applicationConfiguration: z
      .record(z.string(), SteamApplicationConfigurationSchema)
      .exactOptional(),
    attributeMappings: z.record(z.string(), z.string()).exactOptional(),
    debug: z.boolean().exactOptional(),
    id: z.uuid().exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    lambdaConfiguration: ProviderLambdaConfigurationSchema.exactOptional(),
    lastUpdateInstant: ZonedDateTimeSchema.exactOptional(),
    linkingStrategy: IdentityProviderLinkingStrategySchema.exactOptional(),
    name: z.string().exactOptional(),
    source: z.string().exactOptional(),
    tenantConfiguration: z
      .record(z.string(), IdentityProviderTenantConfigurationSchema)
      .exactOptional(),
    tenantId: z.uuid().exactOptional(),
    type: IdentityProviderTypeSchema.exactOptional(),
  })
  .openapi({ description: 'Steam gaming login provider.', required: [] })
  .openapi('SteamIdentityProvider')

const TwitchApplicationConfigurationSchema = z
  .object({
    buttonText: z.string().exactOptional(),
    client_id: z.string().exactOptional(),
    client_secret: z.string().exactOptional(),
    scope: z.string().exactOptional(),
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    createRegistration: z.boolean().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('TwitchApplicationConfiguration')

const TwitchIdentityProviderSchema = z
  .object({
    buttonText: z.string().exactOptional(),
    client_id: z.string().exactOptional(),
    client_secret: z.string().exactOptional(),
    scope: z.string().exactOptional(),
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    applicationConfiguration: z
      .record(z.string(), TwitchApplicationConfigurationSchema)
      .exactOptional(),
    attributeMappings: z.record(z.string(), z.string()).exactOptional(),
    debug: z.boolean().exactOptional(),
    id: z.uuid().exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    lambdaConfiguration: ProviderLambdaConfigurationSchema.exactOptional(),
    lastUpdateInstant: ZonedDateTimeSchema.exactOptional(),
    linkingStrategy: IdentityProviderLinkingStrategySchema.exactOptional(),
    name: z.string().exactOptional(),
    source: z.string().exactOptional(),
    tenantConfiguration: z
      .record(z.string(), IdentityProviderTenantConfigurationSchema)
      .exactOptional(),
    tenantId: z.uuid().exactOptional(),
    type: IdentityProviderTypeSchema.exactOptional(),
  })
  .openapi({ description: 'Twitch gaming login provider.', required: [] })
  .openapi('TwitchIdentityProvider')

const TwitterApplicationConfigurationSchema = z
  .object({
    buttonText: z.string().exactOptional(),
    consumerKey: z.string().exactOptional(),
    consumerSecret: z.string().exactOptional(),
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    createRegistration: z.boolean().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('TwitterApplicationConfiguration')

const TwitterIdentityProviderSchema = z
  .object({
    buttonText: z.string().exactOptional(),
    consumerKey: z.string().exactOptional(),
    consumerSecret: z.string().exactOptional(),
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    applicationConfiguration: z
      .record(z.string(), TwitterApplicationConfigurationSchema)
      .exactOptional(),
    attributeMappings: z.record(z.string(), z.string()).exactOptional(),
    debug: z.boolean().exactOptional(),
    id: z.uuid().exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    lambdaConfiguration: ProviderLambdaConfigurationSchema.exactOptional(),
    lastUpdateInstant: ZonedDateTimeSchema.exactOptional(),
    linkingStrategy: IdentityProviderLinkingStrategySchema.exactOptional(),
    name: z.string().exactOptional(),
    source: z.string().exactOptional(),
    tenantConfiguration: z
      .record(z.string(), IdentityProviderTenantConfigurationSchema)
      .exactOptional(),
    tenantId: z.uuid().exactOptional(),
    type: IdentityProviderTypeSchema.exactOptional(),
  })
  .openapi({ description: 'Twitter social login provider.', required: [] })
  .openapi('TwitterIdentityProvider')

const XboxApplicationConfigurationSchema = z
  .object({
    buttonText: z.string().exactOptional(),
    client_id: z.string().exactOptional(),
    client_secret: z.string().exactOptional(),
    scope: z.string().exactOptional(),
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    createRegistration: z.boolean().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('XboxApplicationConfiguration')

const XboxIdentityProviderSchema = z
  .object({
    buttonText: z.string().exactOptional(),
    client_id: z.string().exactOptional(),
    client_secret: z.string().exactOptional(),
    scope: z.string().exactOptional(),
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    applicationConfiguration: z
      .record(z.string(), XboxApplicationConfigurationSchema)
      .exactOptional(),
    attributeMappings: z.record(z.string(), z.string()).exactOptional(),
    debug: z.boolean().exactOptional(),
    id: z.uuid().exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    lambdaConfiguration: ProviderLambdaConfigurationSchema.exactOptional(),
    lastUpdateInstant: ZonedDateTimeSchema.exactOptional(),
    linkingStrategy: IdentityProviderLinkingStrategySchema.exactOptional(),
    name: z.string().exactOptional(),
    source: z.string().exactOptional(),
    tenantConfiguration: z
      .record(z.string(), IdentityProviderTenantConfigurationSchema)
      .exactOptional(),
    tenantId: z.uuid().exactOptional(),
    type: IdentityProviderTypeSchema.exactOptional(),
  })
  .openapi({ description: 'Xbox gaming login provider.', required: [] })
  .openapi('XboxIdentityProvider')

const IdentityProviderFieldSchema = z
  .xor([
    AppleIdentityProviderSchema,
    EpicGamesIdentityProviderSchema,
    ExternalJWTIdentityProviderSchema,
    FacebookIdentityProviderSchema,
    GoogleIdentityProviderSchema,
    HYPRIdentityProviderSchema,
    LinkedInIdentityProviderSchema,
    NintendoIdentityProviderSchema,
    OpenIdConnectIdentityProviderSchema,
    SAMLv2IdPInitiatedIdentityProviderSchema,
    SAMLv2IdentityProviderSchema,
    SonyPSNIdentityProviderSchema,
    SteamIdentityProviderSchema,
    TwitchIdentityProviderSchema,
    TwitterIdentityProviderSchema,
    XboxIdentityProviderSchema,
  ])
  .openapi({
    discriminator: {
      propertyName: 'type',
      mapping: {
        Apple: '#/components/schemas/AppleIdentityProvider',
        EpicGames: '#/components/schemas/EpicGamesIdentityProvider',
        ExternalJWT: '#/components/schemas/ExternalJWTIdentityProvider',
        Facebook: '#/components/schemas/FacebookIdentityProvider',
        Google: '#/components/schemas/GoogleIdentityProvider',
        HYPR: '#/components/schemas/HYPRIdentityProvider',
        LinkedIn: '#/components/schemas/LinkedInIdentityProvider',
        Nintendo: '#/components/schemas/NintendoIdentityProvider',
        OpenIdConnect: '#/components/schemas/OpenIdConnectIdentityProvider',
        SAMLv2IdPInitiated: '#/components/schemas/SAMLv2IdPInitiatedIdentityProvider',
        SAMLv2: '#/components/schemas/SAMLv2IdentityProvider',
        SonyPSN: '#/components/schemas/SonyPSNIdentityProvider',
        Steam: '#/components/schemas/SteamIdentityProvider',
        Twitch: '#/components/schemas/TwitchIdentityProvider',
        Twitter: '#/components/schemas/TwitterIdentityProvider',
        Xbox: '#/components/schemas/XboxIdentityProvider',
      },
    },
  })
  .openapi('IdentityProviderField')

const IdentityProviderLinkRequestSchema = z
  .object({
    identityProviderLink: IdentityProviderLinkSchema.exactOptional(),
    pendingIdPLinkId: z.string().exactOptional(),
    eventInfo: EventInfoSchema.exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('IdentityProviderLinkRequest')

const IdentityProviderLinkResponseSchema = z
  .object({
    identityProviderLink: IdentityProviderLinkSchema.exactOptional(),
    identityProviderLinks: z.array(IdentityProviderLinkSchema).exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('IdentityProviderLinkResponse')

const IdentityProviderLoginRequestSchema = z
  .object({
    connectionTestId: z.string().exactOptional(),
    data: z.record(z.string(), z.string()).exactOptional(),
    identityProviderId: z.uuid().exactOptional(),
    noLink: z.boolean().exactOptional(),
    encodedJWT: z.string().exactOptional(),
    applicationId: z.uuid().exactOptional(),
    botDetectionScore: z.float64().exactOptional(),
    ipAddress: z.string().exactOptional(),
    metaData: MetaDataSchema.exactOptional(),
    newDevice: z.boolean().exactOptional(),
    noJWT: z.boolean().exactOptional(),
  })
  .openapi({
    description:
      'Login API request object used for login to third-party systems (i.e. Login with Facebook).',
    required: [],
  })
  .openapi('IdentityProviderLoginRequest')

const IdentityProviderPendingLinkResponseSchema = z
  .object({
    identityProviderTenantConfiguration: IdentityProviderTenantConfigurationSchema.exactOptional(),
    linkCount: z.int().exactOptional(),
    pendingIdPLink: PendingIdPLinkSchema.exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('IdentityProviderPendingLinkResponse')

const IdentityProviderRequestSchema = z
  .object({ identityProvider: IdentityProviderFieldSchema.exactOptional() })
  .openapi({ description: '', required: [] })
  .openapi('IdentityProviderRequest')

const IdentityProviderResponseSchema = z
  .object({
    identityProvider: IdentityProviderFieldSchema.exactOptional(),
    identityProviders: z.array(IdentityProviderFieldSchema).exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('IdentityProviderResponse')

const IdentityProviderSearchCriteriaSchema = z
  .object({
    applicationId: z.uuid().exactOptional(),
    name: z.string().exactOptional(),
    source: z.string().exactOptional(),
    tenantId: z.uuid().exactOptional(),
    type: IdentityProviderTypeSchema.exactOptional(),
    numberOfResults: z.int().exactOptional(),
    orderBy: z.string().exactOptional(),
    startRow: z.int().exactOptional(),
  })
  .openapi({ description: 'Search criteria for Identity Providers.', required: [] })
  .openapi('IdentityProviderSearchCriteria')

const IdentityProviderSearchRequestSchema = z
  .object({ search: IdentityProviderSearchCriteriaSchema.exactOptional() })
  .openapi({ description: 'Search request for Identity Providers', required: [] })
  .openapi('IdentityProviderSearchRequest')

const IdentityProviderSearchResponseSchema = z
  .object({
    identityProviders: z.array(IdentityProviderFieldSchema).exactOptional(),
    total: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ description: 'Identity Provider response.', required: [] })
  .openapi('IdentityProviderSearchResponse')

const IdentityProviderStartLoginRequestSchema = z
  .object({
    connectionTestId: z.string().exactOptional(),
    data: z.record(z.string(), z.string()).exactOptional(),
    identityProviderId: z.uuid().exactOptional(),
    loginId: z.string().exactOptional(),
    loginIdTypes: z.array(z.string()).exactOptional(),
    state: z.record(z.string(), z.looseObject({})).exactOptional(),
    applicationId: z.uuid().exactOptional(),
    botDetectionScore: z.float64().exactOptional(),
    ipAddress: z.string().exactOptional(),
    metaData: MetaDataSchema.exactOptional(),
    newDevice: z.boolean().exactOptional(),
    noJWT: z.boolean().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('IdentityProviderStartLoginRequest')

const IdentityProviderStartLoginResponseSchema = z
  .object({ code: z.string().exactOptional() })
  .openapi({ description: '', required: [] })
  .openapi('IdentityProviderStartLoginResponse')

const ImportRequestSchema = z
  .object({
    encryptionScheme: z.string().exactOptional(),
    factor: z.int().exactOptional(),
    users: z.array(UserSchema).exactOptional(),
    validateDbConstraints: z.boolean().exactOptional(),
    eventInfo: EventInfoSchema.exactOptional(),
  })
  .openapi({ description: 'Import request.', required: [] })
  .openapi('ImportRequest')

const InstanceEventSchema = z
  .looseObject({})
  .openapi({
    description:
      'A marker interface indicating this event is not scoped to a tenant and will be sent to all webhooks.',
  })
  .openapi('InstanceEvent')

const KafkaConfigurationSchema = z
  .object({
    defaultTopic: z.string().exactOptional(),
    producer: z.record(z.string(), z.string()).exactOptional(),
    enabled: z.boolean().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('KafkaConfiguration')

const IntegrationsSchema = z
  .object({
    cleanspeak: CleanSpeakConfigurationSchema.exactOptional(),
    kafka: KafkaConfigurationSchema.exactOptional(),
  })
  .openapi({ description: 'Available Integrations', required: [] })
  .openapi('Integrations')

const IntegrationRequestSchema = z
  .object({ integrations: IntegrationsSchema.exactOptional() })
  .openapi({ description: 'The Integration Request', required: [] })
  .openapi('IntegrationRequest')

const IntegrationResponseSchema = z
  .object({ integrations: IntegrationsSchema.exactOptional() })
  .openapi({ description: 'The Integration Response', required: [] })
  .openapi('IntegrationResponse')

const IntrospectResponseSchema = z
  .looseObject({})
  .openapi({ description: '' })
  .openapi('IntrospectResponse')

const IssueResponseSchema = z
  .object({ refreshToken: z.string().exactOptional(), token: z.string().exactOptional() })
  .openapi({ description: '', required: [] })
  .openapi('IssueResponse')

const TokenExchangeDelegationSemanticsSchema = z
  .enum(['DELEGATION', 'IMPERSONATION'])
  .openapi({
    description:
      'The delegation semantics applied to the issued token. These are RFC 8693 terms.  FusionAuth does not support token exchange impersonation.',
  })
  .openapi('TokenExchangeDelegationSemantics')

const IssuedTokenInfoSchema = z
  .object({
    delegationSemantics: TokenExchangeDelegationSemanticsSchema.exactOptional(),
    grantedAudience: z.array(z.string()).exactOptional(),
    grantedScope: z.string().exactOptional(),
    jti: z.string().exactOptional(),
  })
  .openapi({
    description: 'Nested structure for issued token information in the webhook payload.',
    required: [],
  })
  .openapi('IssuedTokenInfo')

const KeyTypeSchema = z.enum(['EC', 'RSA', 'HMAC', 'OKP', 'Secret']).openapi('KeyType')

const JSONWebKeySchema = z
  .object({
    alg: AlgorithmSchema.exactOptional(),
    crv: z.string().exactOptional(),
    d: z.string().exactOptional(),
    dp: z.string().exactOptional(),
    dq: z.string().exactOptional(),
    e: z.string().exactOptional(),
    kid: z.string().exactOptional(),
    kty: KeyTypeSchema.exactOptional(),
    n: z.string().exactOptional(),
    other: z.record(z.string(), z.looseObject({})).exactOptional(),
    p: z.string().exactOptional(),
    q: z.string().exactOptional(),
    qi: z.string().exactOptional(),
    use: z.string().exactOptional(),
    x: z.string().exactOptional(),
    x5c: z.array(z.string()).exactOptional(),
    x5t: z.string().exactOptional(),
    'x5t#S256': z.string().exactOptional(),
    y: z.string().exactOptional(),
  })
  .openapi({
    description:
      'A JSON Web Key as defined by <a href="https:tools.ietf.orghtmlrfc7517#section-4">RFC 7517 JSON Web Key (JWK)  Section 4<a> and <a href="https:tools.ietf.orghtmlrfc7518">RFC 7518 JSON Web Algorithms (JWA)<a>.',
    required: [],
  })
  .openapi('JSONWebKey')

const JSONWebKeyInfoProviderSchema = z
  .looseObject({})
  .openapi({ description: 'Interface for any object that can provide JSON Web key Information.' })
  .openapi('JSONWebKeyInfoProvider')

const JWKSResponseSchema = z
  .object({ keys: z.array(JSONWebKeySchema).exactOptional() })
  .openapi({ description: '', required: [] })
  .openapi('JWKSResponse')

const JWTSchema = z
  .object({
    aud: z.looseObject({}).exactOptional(),
    exp: ZonedDateTimeSchema.exactOptional(),
    iat: ZonedDateTimeSchema.exactOptional(),
    iss: z.string().exactOptional(),
    nbf: ZonedDateTimeSchema.exactOptional(),
    otherClaims: z.record(z.string(), z.looseObject({})).exactOptional(),
    sub: z.string().exactOptional(),
    jti: z.string().exactOptional(),
  })
  .openapi({
    description:
      'JSON Web Token (JWT) as defined by RFC 7519.  <pre>  From RFC 7519 Section 1. Introduction:     The suggested pronunciation of JWT is the same as the English word "jot".  <pre>  The JWT is not Thread-Safe and should not be re-used.',
    required: [],
  })
  .openapi('JWT')

const JWTPublicKeyUpdateEventSchema = z
  .object({
    applicationIds: z
      .array(z.any())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    createInstant: ZonedDateTimeSchema.exactOptional(),
    id: z.uuid().exactOptional(),
    info: EventInfoSchema.exactOptional(),
    tenantId: z.uuid().exactOptional(),
    type: EventTypeSchema.exactOptional(),
  })
  .openapi({
    description:
      'Models the JWT public key Refresh Token Revoke Event. This event might be for a single  token, a user or an entire application.',
    required: [],
  })
  .openapi('JWTPublicKeyUpdateEvent')

const JWTRefreshEventSchema = z
  .object({
    applicationId: z.uuid().exactOptional(),
    cimdDomainId: z.uuid().exactOptional(),
    original: z.string().exactOptional(),
    refreshToken: z.string().exactOptional(),
    resources: z.array(z.string()).exactOptional(),
    token: z.string().exactOptional(),
    userId: z.uuid().exactOptional(),
    createInstant: ZonedDateTimeSchema.exactOptional(),
    id: z.uuid().exactOptional(),
    info: EventInfoSchema.exactOptional(),
    tenantId: z.uuid().exactOptional(),
    type: EventTypeSchema.exactOptional(),
  })
  .openapi({
    description:
      'Models the JWT Refresh Event. This event will be fired when a JWT is "refreshed" (generated) using a Refresh Token.',
    required: [],
  })
  .openapi('JWTRefreshEvent')

const JWTRefreshResponseSchema = z
  .object({
    refreshToken: z.string().exactOptional(),
    refreshTokenId: z.uuid().exactOptional(),
    token: z.string().exactOptional(),
  })
  .openapi({
    description:
      'API response for refreshing a JWT with a Refresh Token.  <p>  Using a different response object from RefreshTokenResponse because the retrieve response will return an object for refreshToken, and this is a  string.',
    required: [],
  })
  .openapi('JWTRefreshResponse')

const RefreshTokenSchema = z
  .object({
    applicationId: z.uuid().exactOptional(),
    cimdClientRegistrationId: z.uuid().exactOptional(),
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    id: z.uuid().exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    metaData: MetaDataSchema.exactOptional(),
    startInstant: ZonedDateTimeSchema.exactOptional(),
    tenantId: z.uuid().exactOptional(),
    token: z.string().exactOptional(),
    userId: z.uuid().exactOptional(),
  })
  .openapi({ description: 'Models a JWT Refresh Token.', required: [] })
  .openapi('RefreshToken')

const JWTRefreshTokenRevokeEventSchema = z
  .object({
    user: UserSchema.exactOptional(),
    applicationId: z.uuid().exactOptional(),
    applicationTimeToLiveInSeconds: z.record(z.string(), z.int()).exactOptional(),
    cimdDomainId: z.uuid().exactOptional(),
    refreshToken: RefreshTokenSchema.exactOptional(),
    resources: z.array(z.string()).exactOptional(),
    userId: z.uuid().exactOptional(),
    createInstant: ZonedDateTimeSchema.exactOptional(),
    id: z.uuid().exactOptional(),
    info: EventInfoSchema.exactOptional(),
    tenantId: z.uuid().exactOptional(),
    type: EventTypeSchema.exactOptional(),
  })
  .openapi({
    description:
      'Models the Refresh Token Revoke Event. This event might be for a single token, a user  or an entire application.',
    required: [],
  })
  .openapi('JWTRefreshTokenRevokeEvent')

const JWTVendRequestSchema = z
  .object({
    claims: z.record(z.string(), z.looseObject({})).exactOptional(),
    keyId: z.uuid().exactOptional(),
    timeToLiveInSeconds: z.int().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('JWTVendRequest')

const JWTVendResponseSchema = z
  .object({ token: z.string().exactOptional() })
  .openapi({ description: '', required: [] })
  .openapi('JWTVendResponse')

const KafkaMessengerConfigurationSchema = z
  .object({
    defaultTopic: z.string().exactOptional(),
    producer: z.record(z.string(), z.string()).exactOptional(),
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    debug: z.boolean().exactOptional(),
    id: z.uuid().exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    lastUpdateInstant: ZonedDateTimeSchema.exactOptional(),
    messageTypes: z
      .array(z.any())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    name: z.string().exactOptional(),
    transport: z.string().exactOptional(),
    type: MessengerTypeSchema.exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('KafkaMessengerConfiguration')

const KeyAlgorithmSchema = z
  .enum([
    'ES256',
    'ES384',
    'ES512',
    'HS256',
    'HS384',
    'HS512',
    'RS256',
    'RS384',
    'RS512',
    'Ed25519',
    'None',
  ])
  .openapi('KeyAlgorithm')

const KeySchema = z
  .object({
    algorithm: KeyAlgorithmSchema.exactOptional(),
    certificate: z.string().exactOptional(),
    certificateInformation: CertificateInformationSchema.exactOptional(),
    expirationInstant: ZonedDateTimeSchema.exactOptional(),
    hasPrivateKey: z.boolean().exactOptional(),
    id: z.uuid().exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    issuer: z.string().exactOptional(),
    kid: z.string().exactOptional(),
    lastUpdateInstant: ZonedDateTimeSchema.exactOptional(),
    length: z.int().exactOptional(),
    name: z.string().exactOptional(),
    privateKey: z.string().exactOptional(),
    publicKey: z.string().exactOptional(),
    secret: z.string().exactOptional(),
    type: KeyTypeSchema.exactOptional(),
  })
  .openapi({
    description:
      'Domain for a public key, key pair or an HMAC secret. This is used by KeyMaster to manage keys for JWTs, SAML, etc.',
    required: [],
  })
  .openapi('Key')

const KeyRequestSchema = z
  .object({ key: KeySchema.exactOptional() })
  .openapi({ description: 'Key API request object.', required: [] })
  .openapi('KeyRequest')

const KeyResponseSchema = z
  .object({ key: KeySchema.exactOptional(), keys: z.array(KeySchema).exactOptional() })
  .openapi({ description: 'Key API response object.', required: [] })
  .openapi('KeyResponse')

const KeySearchCriteriaSchema = z
  .object({
    algorithm: KeyAlgorithmSchema.exactOptional(),
    name: z.string().exactOptional(),
    type: KeyTypeSchema.exactOptional(),
    numberOfResults: z.int().exactOptional(),
    orderBy: z.string().exactOptional(),
    startRow: z.int().exactOptional(),
  })
  .openapi({ description: 'Search criteria for Keys', required: [] })
  .openapi('KeySearchCriteria')

const KeySearchRequestSchema = z
  .object({ search: KeySearchCriteriaSchema.exactOptional() })
  .openapi({ description: 'Search request for Keys', required: [] })
  .openapi('KeySearchRequest')

const KeySearchResponseSchema = z
  .object({
    keys: z.array(KeySchema).exactOptional(),
    total: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ description: 'Key search response', required: [] })
  .openapi('KeySearchResponse')

const KeyUseSchema = z
  .enum(['SignOnly', 'SignAndVerify', 'VerifyOnly', 'None'])
  .openapi({ description: 'The use type of a key.' })
  .openapi('KeyUse')

const KickstartSuccessEventSchema = z
  .object({
    instanceId: z.uuid().exactOptional(),
    createInstant: ZonedDateTimeSchema.exactOptional(),
    id: z.uuid().exactOptional(),
    info: EventInfoSchema.exactOptional(),
    tenantId: z.uuid().exactOptional(),
    type: EventTypeSchema.exactOptional(),
  })
  .openapi({
    description: 'Event to indicate kickstart has been successfully completed.',
    required: [],
  })
  .openapi('KickstartSuccessEvent')

const LDAPSecurityMethodSchema = z.enum(['None', 'LDAPS', 'StartTLS']).openapi('LDAPSecurityMethod')

const LDAPConnectorConfigurationSchema = z
  .object({
    authenticationURL: z.string().exactOptional(),
    baseStructure: z.string().exactOptional(),
    connectTimeout: z.int().exactOptional(),
    identifyingAttribute: z.string().exactOptional(),
    lambdaConfiguration: ConnectorLambdaConfigurationSchema.exactOptional(),
    loginIdAttribute: z.string().exactOptional(),
    readTimeout: z.int().exactOptional(),
    requestedAttributes: z.array(z.string()).exactOptional(),
    securityMethod: LDAPSecurityMethodSchema.exactOptional(),
    systemAccountDN: z.string().exactOptional(),
    systemAccountPassword: z.string().exactOptional(),
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    debug: z.boolean().exactOptional(),
    id: z.uuid().exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    lastUpdateInstant: ZonedDateTimeSchema.exactOptional(),
    name: z.string().exactOptional(),
    type: ConnectorTypeSchema.exactOptional(),
  })
  .openapi({ description: 'Models an LDAP connector.', required: [] })
  .openapi('LDAPConnectorConfiguration')

const LambdaEngineTypeSchema = z
  .enum(['GraalJS', 'Nashorn'])
  .openapi({ description: '' })
  .openapi('LambdaEngineType')

const LambdaTypeSchema = z
  .enum([
    'JWTPopulate',
    'OpenIDReconcile',
    'SAMLv2Reconcile',
    'SAMLv2Populate',
    'AppleReconcile',
    'ExternalJWTReconcile',
    'FacebookReconcile',
    'GoogleReconcile',
    'HYPRReconcile',
    'TwitterReconcile',
    'LDAPConnectorReconcile',
    'LinkedInReconcile',
    'EpicGamesReconcile',
    'NintendoReconcile',
    'SonyPSNReconcile',
    'SteamReconcile',
    'TwitchReconcile',
    'XboxReconcile',
    'ClientCredentialsJWTPopulate',
    'SCIMServerGroupRequestConverter',
    'SCIMServerGroupResponseConverter',
    'SCIMServerUserRequestConverter',
    'SCIMServerUserResponseConverter',
    'SelfServiceRegistrationValidation',
    'UserInfoPopulate',
    'LoginValidation',
    'MFARequirement',
    'TokenExchangePolicy',
    'TokenExchangePopulate',
    'CimdClientRegistration',
  ])
  .openapi({
    description: 'The types of lambdas that indicate how they are invoked by FusionAuth.',
  })
  .openapi('LambdaType')

const LambdaSchema = z
  .object({
    body: z.string().exactOptional(),
    debug: z.boolean().exactOptional(),
    engineType: LambdaEngineTypeSchema.exactOptional(),
    id: z.uuid().exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    lastUpdateInstant: ZonedDateTimeSchema.exactOptional(),
    name: z.string().exactOptional(),
    type: LambdaTypeSchema.exactOptional(),
  })
  .openapi({
    description:
      'A JavaScript lambda function that is executed during certain events inside FusionAuth.',
    required: [],
  })
  .openapi('Lambda')

const LambdaRequestSchema = z
  .object({ lambda: LambdaSchema.exactOptional() })
  .openapi({ description: 'Lambda API request object.', required: [] })
  .openapi('LambdaRequest')

const LambdaResponseSchema = z
  .object({ lambda: LambdaSchema.exactOptional(), lambdas: z.array(LambdaSchema).exactOptional() })
  .openapi({ description: 'Lambda API response object.', required: [] })
  .openapi('LambdaResponse')

const LambdaSearchCriteriaSchema = z
  .object({
    body: z.string().exactOptional(),
    name: z.string().exactOptional(),
    type: LambdaTypeSchema.exactOptional(),
    numberOfResults: z.int().exactOptional(),
    orderBy: z.string().exactOptional(),
    startRow: z.int().exactOptional(),
  })
  .openapi({ description: 'Search criteria for Lambdas', required: [] })
  .openapi('LambdaSearchCriteria')

const LambdaSearchRequestSchema = z
  .object({ search: LambdaSearchCriteriaSchema.exactOptional() })
  .openapi({ description: 'Search request for Lambdas', required: [] })
  .openapi('LambdaSearchRequest')

const LambdaSearchResponseSchema = z
  .object({
    lambdas: z.array(LambdaSchema).exactOptional(),
    total: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ description: 'Lambda search response', required: [] })
  .openapi('LambdaSearchResponse')

const LoginPingRequestSchema = z
  .object({
    userId: z.uuid().exactOptional(),
    applicationId: z.uuid().exactOptional(),
    botDetectionScore: z.float64().exactOptional(),
    ipAddress: z.string().exactOptional(),
    metaData: MetaDataSchema.exactOptional(),
    newDevice: z.boolean().exactOptional(),
    noJWT: z.boolean().exactOptional(),
  })
  .openapi({ description: 'Login Ping API request object.', required: [] })
  .openapi('LoginPingRequest')

const LoginPreventedResponseSchema = z
  .object({
    actionId: z.uuid().exactOptional(),
    actionerUserId: z.uuid().exactOptional(),
    expiry: ZonedDateTimeSchema.exactOptional(),
    localizedName: z.string().exactOptional(),
    localizedOption: z.string().exactOptional(),
    localizedReason: z.string().exactOptional(),
    name: z.string().exactOptional(),
    option: z.string().exactOptional(),
    reason: z.string().exactOptional(),
    reasonCode: z.string().exactOptional(),
  })
  .openapi({
    description:
      'The summary of the action that is preventing login to be returned on the login response.',
    required: [],
  })
  .openapi('LoginPreventedResponse')

const LoginRecordConfigurationSchema = z
  .object({ delete: DeleteConfigurationSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('LoginRecordConfiguration')

const LoginRecordSearchCriteriaSchema = z
  .object({
    applicationId: z.uuid().exactOptional(),
    end: ZonedDateTimeSchema.exactOptional(),
    start: ZonedDateTimeSchema.exactOptional(),
    userId: z.uuid().exactOptional(),
    numberOfResults: z.int().exactOptional(),
    orderBy: z.string().exactOptional(),
    startRow: z.int().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('LoginRecordSearchCriteria')

const LoginRecordExportRequestSchema = z
  .object({
    criteria: LoginRecordSearchCriteriaSchema.exactOptional(),
    dateTimeSecondsFormat: z.string().exactOptional(),
    zoneId: ZoneIdSchema.exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('LoginRecordExportRequest')

const LoginRecordSearchRequestSchema = z
  .object({
    retrieveTotal: z.boolean().exactOptional(),
    search: LoginRecordSearchCriteriaSchema.exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('LoginRecordSearchRequest')

const LoginRecordSearchResponseSchema = z
  .object({
    logins: z.array(DisplayableRawLoginSchema).exactOptional(),
    total: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ description: 'A raw login record response', required: [] })
  .openapi('LoginRecordSearchResponse')

const LoginReportResponseSchema = z
  .object({
    hourlyCounts: z.array(CountSchema).exactOptional(),
    total: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ description: 'Response for the login report.', required: [] })
  .openapi('LoginReportResponse')

const LoginRequestSchema = z
  .object({
    loginId: z.string().exactOptional(),
    loginIdTypes: z.array(z.string()).exactOptional(),
    oneTimePassword: z.string().exactOptional(),
    password: z.string().exactOptional(),
    twoFactorTrustId: z.string().exactOptional(),
    applicationId: z.uuid().exactOptional(),
    botDetectionScore: z.float64().exactOptional(),
    ipAddress: z.string().exactOptional(),
    metaData: MetaDataSchema.exactOptional(),
    newDevice: z.boolean().exactOptional(),
    noJWT: z.boolean().exactOptional(),
  })
  .openapi({ description: 'Login API request object.', required: [] })
  .openapi('LoginRequest')

const LoginResponseSchema = z
  .object({
    actions: z.array(LoginPreventedResponseSchema).exactOptional(),
    changePasswordId: z.string().exactOptional(),
    changePasswordReason: ChangePasswordReasonSchema.exactOptional(),
    configurableMethods: z.array(z.string()).exactOptional(),
    emailVerificationId: z.string().exactOptional(),
    identityVerificationId: z.string().exactOptional(),
    methods: z.array(TwoFactorMethodSchema).exactOptional(),
    pendingIdPLinkId: z.string().exactOptional(),
    refreshToken: z.string().exactOptional(),
    refreshTokenId: z.uuid().exactOptional(),
    registrationVerificationId: z.string().exactOptional(),
    state: z.record(z.string(), z.looseObject({})).exactOptional(),
    threatsDetected: z
      .array(z.any())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    token: z.string().exactOptional(),
    tokenExpirationInstant: ZonedDateTimeSchema.exactOptional(),
    trustToken: z.string().exactOptional(),
    twoFactorId: z.string().exactOptional(),
    twoFactorTrustId: z.string().exactOptional(),
    user: UserSchema.exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('LoginResponse')

const LogoutRequestSchema = z
  .object({
    global: z.boolean().exactOptional(),
    refreshToken: z.string().exactOptional(),
    eventInfo: EventInfoSchema.exactOptional(),
  })
  .openapi({
    description: 'Request for the Logout API that can be used as an alternative to URL parameters.',
    required: [],
  })
  .openapi('LogoutRequest')

const LookupResponseSchema = z
  .object({ identityProvider: IdentityProviderDetailsSchema.exactOptional() })
  .openapi({ description: '', required: [] })
  .openapi('LookupResponse')

const MFATenantMetricSchema = z
  .object({
    challengeCount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    failedAttemptCount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    successCount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({
    description:
      'Reactor metric with counts of MFA challenges, successes, and failures for a tenant.',
    required: [],
  })
  .openapi('MFATenantMetric')

const ManagedFieldsSchema = z
  .looseObject({})
  .openapi({
    description:
      'Contains the "managed"{@link FormField} keys. For these keys, FusionAuth controls the  field\'s control and data type.  <p>  The data type is always enforced, on both create and update.  The control is only defaulted  when omitted on create, and is otherwise left as submitted - it is not validated against  the managed definition. Once created, a mismatched control can only be fixed by deleting  and recreating the field, since updates always keep the field\'s existing control.  <p>  Internal Note: These fields are also declared in SQL in order to bootstrap the system. These need to stay in sync.  Any changes to these fields needs to also be reflected in mysql.sql and postgresql.sql',
  })
  .openapi('ManagedFields')

const MaximumPasswordAgeSchema = z
  .object({ days: z.int().exactOptional(), enabled: z.boolean().exactOptional() })
  .openapi({ description: '', required: [] })
  .openapi('MaximumPasswordAge')

const MemberDeleteRequestSchema = z
  .object({
    memberIds: z.array(z.uuid()).exactOptional(),
    members: z.record(z.string(), z.array(z.uuid())).exactOptional(),
  })
  .openapi({ description: 'Group Member Delete Request', required: [] })
  .openapi('MemberDeleteRequest')

const MemberRequestSchema = z
  .object({ members: z.record(z.string(), z.array(GroupMemberSchema)).exactOptional() })
  .openapi({ description: 'Group Member Request', required: [] })
  .openapi('MemberRequest')

const MemberResponseSchema = z
  .object({ members: z.record(z.string(), z.array(GroupMemberSchema)).exactOptional() })
  .openapi({ description: 'Group Member Response', required: [] })
  .openapi('MemberResponse')

const MessageSchema = z.looseObject({}).openapi({ description: '' }).openapi('Message')

const MessageTypeSchema = z
  .enum(['SMS', 'Voice'])
  .openapi({ description: '' })
  .openapi('MessageType')

const MessageTemplateSchema = z
  .object({
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    id: z.uuid().exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    lastUpdateInstant: ZonedDateTimeSchema.exactOptional(),
    name: z.string().exactOptional(),
    type: MessageTypeSchema.exactOptional(),
  })
  .openapi({ description: 'Stores an message template used to distribute messages;', required: [] })
  .openapi('MessageTemplate')

const MessageTemplateRequestSchema = z
  .object({ messageTemplate: MessageTemplateSchema.exactOptional() })
  .openapi({ description: 'A Message Template Request to the API', required: [] })
  .openapi('MessageTemplateRequest')

const MessageTemplateResponseSchema = z
  .object({
    messageTemplate: MessageTemplateSchema.exactOptional(),
    messageTemplates: z.array(MessageTemplateSchema).exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('MessageTemplateResponse')

const MessengerRequestSchema = z
  .object({ messenger: BaseMessengerConfigurationSchema.exactOptional() })
  .openapi({ description: '', required: [] })
  .openapi('MessengerRequest')

const MessengerResponseSchema = z
  .object({
    messenger: BaseMessengerConfigurationSchema.exactOptional(),
    messengers: z.array(BaseMessengerConfigurationSchema).exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('MessengerResponse')

const MessengerTransportSchema = z
  .looseObject({})
  .openapi({ description: '@deprecated since 1.65.0,  use {@code MessageType} instead' })
  .openapi('MessengerTransport')

const MinimumPasswordAgeSchema = z
  .object({ seconds: z.int().exactOptional(), enabled: z.boolean().exactOptional() })
  .openapi({ description: '', required: [] })
  .openapi('MinimumPasswordAge')

const MonthlyActiveUserReportResponseSchema = z
  .object({
    monthlyActiveUsers: z.array(CountSchema).exactOptional(),
    total: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ description: 'Response for the daily active user report.', required: [] })
  .openapi('MonthlyActiveUserReportResponse')

const MultiFactorAuthenticatorMethodSchema = z
  .object({
    algorithm: TOTPAlgorithmSchema.exactOptional(),
    codeLength: z.int().exactOptional(),
    timeStep: z.int().exactOptional(),
    enabled: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MultiFactorAuthenticatorMethod')

const MultiFactorEmailMethodSchema = z
  .object({ templateId: z.uuid().exactOptional(), enabled: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('MultiFactorEmailMethod')

const MultiFactorSMSMethodSchema = z
  .object({
    messengerId: z.uuid().exactOptional(),
    templateId: z.uuid().exactOptional(),
    enabled: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MultiFactorSMSMethod')

const MultiFactorVoiceMethodSchema = z
  .object({
    messengerId: z.uuid().exactOptional(),
    templateId: z.uuid().exactOptional(),
    enabled: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MultiFactorVoiceMethod')

const NonTransactionalEventSchema = z
  .looseObject({})
  .openapi({
    description: 'A marker interface indicating this event cannot be made transactional.',
  })
  .openapi('NonTransactionalEvent')

const OAuthCodeAccessTokenRequestSchema = z
  .object({
    client_id: z.string().exactOptional(),
    client_secret: z.string().exactOptional(),
    code: z.string().exactOptional(),
    grant_type: z.string().exactOptional(),
    redirect_uri: z.string().exactOptional(),
    tenantId: z.string().exactOptional(),
  })
  .openapi({
    description:
      'The request object for exchanging an OAuth authorization code for an access token.',
    required: [],
  })
  .openapi('OAuthCodeAccessTokenRequest')

const OAuthCodePKCEAccessTokenRequestSchema = z
  .object({
    client_id: z.string().exactOptional(),
    client_secret: z.string().exactOptional(),
    code: z.string().exactOptional(),
    code_verifier: z.string().exactOptional(),
    grant_type: z.string().exactOptional(),
    redirect_uri: z.string().exactOptional(),
    tenantId: z.uuid().exactOptional(),
  })
  .openapi({
    description:
      'The request object to make a request to the Token endpoint to exchange the authorization code returned from the Authorize endpoint and a  code_verifier for an access token.',
    required: [],
  })
  .openapi('OAuthCodePKCEAccessTokenRequest')

const OAuthConfigurationResponseSchema = z
  .object({
    httpSessionMaxInactiveInterval: z.int().exactOptional(),
    logoutURL: z.string().exactOptional(),
    oauthConfiguration: OAuth2ConfigurationSchema.exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('OAuthConfigurationResponse')

const OAuthErrorTypeSchema = z
  .enum([
    'invalid_request',
    'invalid_client',
    'invalid_grant',
    'invalid_token',
    'consent_required',
    'interaction_required',
    'login_required',
    'unauthorized_client',
    'invalid_scope',
    'server_error',
    'unsupported_grant_type',
    'unsupported_response_type',
    'access_denied',
    'change_password_required',
    'not_licensed',
    'two_factor_required',
    'authorization_pending',
    'expired_token',
    'unsupported_token_type',
    'invalid_dpop_proof',
    'invalid_target',
  ])
  .openapi('OAuthErrorType')

const OAuthErrorReasonSchema = z
  .enum([
    'auth_code_not_found',
    'access_token_malformed',
    'access_token_expired',
    'access_token_unavailable_for_processing',
    'access_token_failed_processing',
    'access_token_invalid',
    'access_token_required',
    'refresh_token_not_found',
    'refresh_token_type_not_supported',
    'id_token_invalid',
    'unsupported_token_type',
    'token_type_hint_mismatch',
    'invalid_client_id',
    'invalid_expires_in',
    'invalid_user_credentials',
    'invalid_grant_type',
    'invalid_origin',
    'invalid_origin_opaque',
    'invalid_pkce_code_verifier',
    'invalid_pkce_code_challenge',
    'invalid_pkce_code_challenge_method',
    'invalid_prompt',
    'invalid_redirect_uri',
    'invalid_resource_cardinality',
    'invalid_response_mode',
    'invalid_response_type',
    'invalid_id_token_hint',
    'invalid_post_logout_redirect_uri',
    'invalid_device_code',
    'invalid_user_code',
    'invalid_additional_client_id',
    'invalid_target_entity_scope',
    'invalid_entity_permission_scope',
    'invalid_user_id',
    'invalid_tenant_id',
    'resource_parameter_not_supported',
    'grant_type_disabled',
    'missing_client_id',
    'missing_client_secret',
    'missing_code',
    'missing_code_challenge',
    'missing_code_verifier',
    'missing_device_code',
    'missing_grant_type',
    'missing_redirect_uri',
    'missing_refresh_token',
    'missing_response_type',
    'missing_token',
    'missing_user_code',
    'missing_user_id',
    'missing_verification_uri',
    'missing_tenant_id',
    'login_prevented',
    'not_licensed',
    'user_code_expired',
    'user_expired',
    'user_locked',
    'user_not_found',
    'client_authentication_missing',
    'invalid_client_authentication_scheme',
    'invalid_client_authentication',
    'client_id_mismatch',
    'change_password_administrative',
    'change_password_breached',
    'change_password_expired',
    'change_password_validation',
    'unknown',
    'missing_required_scope',
    'unknown_scope',
    'consent_canceled',
    'authentication_required',
    'email_verification_required',
    'multi_factor_challenge_required',
    'phone_verification_required',
    'registration_missing_requirement',
    'registration_required',
    'registration_verification_required',
    'consent_required',
    'audience_required',
    'invalid_audience',
    'invalid_intent',
    'invalid_jwt',
    'invalid_scope',
    'invalid_state',
    'invalid_resource',
    'lambda_denied',
  ])
  .openapi('OAuthErrorReason')

const OAuthErrorSchema = z
  .object({
    change_password_id: z.string().exactOptional(),
    error_description: z.string().exactOptional(),
    error: OAuthErrorTypeSchema.exactOptional(),
    error_uri: z.string().exactOptional(),
    two_factor_methods: z.array(TwoFactorMethodSchema).exactOptional(),
    error_reason: OAuthErrorReasonSchema.exactOptional(),
    two_factor_id: z.string().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('OAuthError')

const OAuthResponseSchema = z.looseObject({}).openapi({ description: '' }).openapi('OAuthResponse')

const ObjectIdentifiableSchema = z
  .looseObject({})
  .openapi({
    description:
      'A marker interface indicating this event is an event that can supply a linked object Id.',
  })
  .openapi('ObjectIdentifiable')

const OpenIdConfigurationSchema = z
  .object({
    authorization_endpoint: z.string().exactOptional(),
    authorization_response_iss_parameter_supported: z.boolean().exactOptional(),
    backchannel_logout_supported: z.boolean().exactOptional(),
    claims_supported: z.array(z.string()).exactOptional(),
    client_id_metadata_document_supported: z.boolean().exactOptional(),
    code_challenge_methods_supported: z.array(z.string()).exactOptional(),
    device_authorization_endpoint: z.string().exactOptional(),
    dpop_signing_alg_values_supported: z.array(z.string()).exactOptional(),
    end_session_endpoint: z.string().exactOptional(),
    frontchannel_logout_supported: z.boolean().exactOptional(),
    grant_types_supported: z.array(z.string()).exactOptional(),
    id_token_signing_alg_values_supported: z.array(z.string()).exactOptional(),
    issuer: z.string().exactOptional(),
    jwks_uri: z.string().exactOptional(),
    response_modes_supported: z.array(z.string()).exactOptional(),
    response_types_supported: z.array(z.string()).exactOptional(),
    scopes_supported: z.array(z.string()).exactOptional(),
    subject_types_supported: z.array(z.string()).exactOptional(),
    token_endpoint: z.string().exactOptional(),
    token_endpoint_auth_methods_supported: z.array(z.string()).exactOptional(),
    userinfo_endpoint: z.string().exactOptional(),
    userinfo_signing_alg_values_supported: z.array(z.string()).exactOptional(),
  })
  .openapi({
    description:
      'OpenID Connect Configuration as described by the <a href="https:openid.netspecsopenid-connect-discovery-1_0.html#ProviderMetadata">OpenID  Provider Metadata<a>.',
    required: [],
  })
  .openapi('OpenIdConfiguration')

const PasswordBreachDetectionSchema = z
  .object({
    matchMode: BreachMatchModeSchema.exactOptional(),
    notifyUserEmailTemplateId: z.uuid().exactOptional(),
    onLogin: BreachActionSchema.exactOptional(),
    enabled: z.boolean().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('PasswordBreachDetection')

const PasswordEncryptionConfigurationSchema = z
  .object({
    encryptionScheme: z.string().exactOptional(),
    encryptionSchemeFactor: z.int().exactOptional(),
    modifyEncryptionSchemeOnLogin: z.boolean().exactOptional(),
  })
  .openapi({ description: 'Password Encryption Scheme Configuration', required: [] })
  .openapi('PasswordEncryptionConfiguration')

const PasswordTypeSchema = z
  .enum(['PLAINTEXT', 'HASHED'])
  .openapi({ description: 'Indicates whether a password is plaintext or hashed' })
  .openapi('PasswordType')

const RememberPreviousPasswordsSchema = z
  .object({ count: z.int().exactOptional(), enabled: z.boolean().exactOptional() })
  .openapi({ description: '', required: [] })
  .openapi('RememberPreviousPasswords')

const PasswordValidationRulesSchema = z
  .object({
    breachDetection: PasswordBreachDetectionSchema.exactOptional(),
    disallowUserLoginId: z.boolean().exactOptional(),
    maxLength: z.int().exactOptional(),
    minLength: z.int().exactOptional(),
    rememberPreviousPasswords: RememberPreviousPasswordsSchema.exactOptional(),
    requireMixedCase: z.boolean().exactOptional(),
    requireNonAlpha: z.boolean().exactOptional(),
    requireNumber: z.boolean().exactOptional(),
    validateOnLogin: z.boolean().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('PasswordValidationRules')

const PasswordValidationRulesResponseSchema = z
  .object({ passwordValidationRules: PasswordValidationRulesSchema.exactOptional() })
  .openapi({ description: '', required: [] })
  .openapi('PasswordValidationRulesResponse')

const PasswordlessIdentityProviderSchema = z
  .looseObject({})
  .openapi({
    description:
      'Interface for all identity providers that are passwordless and do not accept a password.',
  })
  .openapi('PasswordlessIdentityProvider')

const PasswordlessLoginRequestSchema = z
  .object({
    code: z.string().exactOptional(),
    oneTimeCode: z.string().exactOptional(),
    twoFactorTrustId: z.string().exactOptional(),
    applicationId: z.uuid().exactOptional(),
    botDetectionScore: z.float64().exactOptional(),
    ipAddress: z.string().exactOptional(),
    metaData: MetaDataSchema.exactOptional(),
    newDevice: z.boolean().exactOptional(),
    noJWT: z.boolean().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('PasswordlessLoginRequest')

const PasswordlessSendRequestSchema = z
  .object({
    applicationId: z.uuid().exactOptional(),
    code: z.string().exactOptional(),
    loginId: z.string().exactOptional(),
    state: z.record(z.string(), z.looseObject({})).exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('PasswordlessSendRequest')

const PasswordlessStartRequestSchema = z
  .object({
    applicationId: z.uuid().exactOptional(),
    loginId: z.string().exactOptional(),
    loginIdTypes: z.array(z.string()).exactOptional(),
    loginStrategy: PasswordlessStrategySchema.exactOptional(),
    state: z.record(z.string(), z.looseObject({})).exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('PasswordlessStartRequest')

const PasswordlessStartResponseSchema = z
  .object({ code: z.string().exactOptional(), oneTimeCode: z.string().exactOptional() })
  .openapi({ description: '', required: [] })
  .openapi('PasswordlessStartResponse')

const PendingResponseSchema = z
  .object({ users: z.array(UserSchema).exactOptional() })
  .openapi({ description: '', required: [] })
  .openapi('PendingResponse')

const PhoneUnverifiedOptionsSchema = z
  .object({
    allowPhoneNumberChangeWhenGated: z.boolean().exactOptional(),
    behavior: UnverifiedBehaviorSchema.exactOptional(),
  })
  .openapi({ description: 'Configuration for unverified phone number identities.', required: [] })
  .openapi('PhoneUnverifiedOptions')

const TokenExchangePolicyDecisionSchema = z
  .enum(['ALLOW', 'DENY', 'ERROR'])
  .openapi({ description: 'The decision returned by the policy engine.' })
  .openapi('TokenExchangePolicyDecision')

const TokenExchangePolicyEngineSchema = z
  .enum(['ENTITY', 'LAMBDA'])
  .openapi({
    description: 'The policy engine used to authorize an RFC 8693 token exchange request.',
  })
  .openapi('TokenExchangePolicyEngine')

const PolicyInfoSchema = z
  .object({
    decision: TokenExchangePolicyDecisionSchema.exactOptional(),
    decisionDurationMs: z.int().exactOptional(),
    engine: TokenExchangePolicyEngineSchema.exactOptional(),
  })
  .openapi({
    description: 'Nested structure for policy evaluation information in the webhook payload.',
    required: [],
  })
  .openapi('PolicyInfo')

const PolicyLambdaContextSchema = z
  .object({ tenantId: z.uuid().exactOptional() })
  .openapi({
    description: 'Immutable context provided to a Token Exchange Policy Lambda.',
    required: [],
  })
  .openapi('PolicyLambdaContext')

const SubjectTokenValidationStatusSchema = z
  .enum(['AUTHORITATIVE', 'BEST_EFFORT', 'FAILED'])
  .openapi({
    description:
      'How much confidence we have in the validation of the subject token that was presented. These values are specified by the ARC and are  stored by name, so they may not be renamed without a migration.',
  })
  .openapi('SubjectTokenValidationStatus')

const PolicyLambdaExchangeSchema = z
  .object({
    clientId: z.string().exactOptional(),
    requestedAudiencesAndResources: z.array(z.string()).exactOptional(),
    requestedScopes: z.array(z.string()).exactOptional(),
    subjectTokenClaims: z.record(z.string(), z.looseObject({})).exactOptional(),
    subjectTokenValidationStatus: SubjectTokenValidationStatusSchema.exactOptional(),
  })
  .openapi({
    description: 'Immutable request data provided to a Token Exchange Policy Lambda.',
    required: [],
  })
  .openapi('PolicyLambdaExchange')

const PolicyLambdaResultSchema = z
  .object({
    decision: TokenExchangePolicyDecisionSchema.exactOptional(),
    denial: DenialSchema.exactOptional(),
    granted: GrantedSchema.exactOptional(),
  })
  .openapi({
    description: 'Mutable decision written by a Token Exchange Policy Lambda.',
    required: [],
  })
  .openapi('PolicyLambdaResult')

const PreviewMessageTemplateRequestSchema = z
  .object({
    locale: LocaleSchema.exactOptional(),
    messageTemplate: MessageTemplateSchema.exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('PreviewMessageTemplateRequest')

const SMSMessageSchema = z
  .object({
    code: z.string().exactOptional(),
    phoneNumber: z.string().exactOptional(),
    textMessage: z.string().exactOptional(),
    userId: z.uuid().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('SMSMessage')

const PreviewMessageTemplateResponseSchema = z
  .object({
    errors: ErrorsSchema.exactOptional(),
    message: SMSMessageSchema.exactOptional(),
    previewMessage: z.string().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('PreviewMessageTemplateResponse')

const PreviewRequestSchema = z
  .object({
    emailTemplate: EmailTemplateSchema.exactOptional(),
    locale: LocaleSchema.exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('PreviewRequest')

const PreviewResponseSchema = z
  .object({ email: EmailSchema.exactOptional(), errors: ErrorsSchema.exactOptional() })
  .openapi({ description: '', required: [] })
  .openapi('PreviewResponse')

const PublicKeyCredentialTypeSchema = z
  .literal('publicKey')
  .openapi({
    description:
      'Defines valid credential types. This is an extension point in the WebAuthn spec. The only defined value at this time is "public-key"',
  })
  .openapi('PublicKeyCredentialType')

const PublicKeyCredentialDescriptorSchema = z
  .object({
    id: z.string().exactOptional(),
    transports: z.array(z.string()).exactOptional(),
    type: PublicKeyCredentialTypeSchema.exactOptional(),
  })
  .openapi({
    description:
      'Contains attributes for the Relying Party to refer to an existing public key credential as an input parameter.',
    required: [],
  })
  .openapi('PublicKeyCredentialDescriptor')

const WebAuthnRegistrationExtensionOptionsSchema = z
  .object({ credProps: z.boolean().exactOptional() })
  .openapi({
    description: 'Options to request extensions during credential registration',
    required: [],
  })
  .openapi('WebAuthnRegistrationExtensionOptions')

const PublicKeyCredentialParametersSchema = z
  .object({
    alg: CoseAlgorithmIdentifierSchema.exactOptional(),
    type: PublicKeyCredentialTypeSchema.exactOptional(),
  })
  .openapi({
    description: 'Supply information on credential type and algorithm to the <i>authenticator<i>.',
    required: [],
  })
  .openapi('PublicKeyCredentialParameters')

const PublicKeyCredentialRelyingPartyEntitySchema = z
  .object({ id: z.string().exactOptional(), name: z.string().exactOptional() })
  .openapi({
    description:
      'Supply additional information about the Relying Party when creating a new credential',
    required: [],
  })
  .openapi('PublicKeyCredentialRelyingPartyEntity')

const PublicKeyCredentialUserEntitySchema = z
  .object({
    displayName: z.string().exactOptional(),
    id: z.string().exactOptional(),
    name: z.string().exactOptional(),
  })
  .openapi({
    description:
      'Supply additional information about the user account when creating a new credential',
    required: [],
  })
  .openapi('PublicKeyCredentialUserEntity')

const PublicKeyCredentialCreationOptionsSchema = z
  .object({
    attestation: AttestationConveyancePreferenceSchema.exactOptional(),
    authenticatorSelection: AuthenticatorSelectionCriteriaSchema.exactOptional(),
    challenge: z.string().exactOptional(),
    excludeCredentials: z.array(PublicKeyCredentialDescriptorSchema).exactOptional(),
    extensions: WebAuthnRegistrationExtensionOptionsSchema.exactOptional(),
    pubKeyCredParams: z.array(PublicKeyCredentialParametersSchema).exactOptional(),
    rp: PublicKeyCredentialRelyingPartyEntitySchema.exactOptional(),
    timeout: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    user: PublicKeyCredentialUserEntitySchema.exactOptional(),
  })
  .openapi({
    description: 'Allows the Relying Party to specify desired attributes of a new credential.',
    required: [],
  })
  .openapi('PublicKeyCredentialCreationOptions')

const PublicKeyCredentialEntitySchema = z
  .object({ name: z.string().exactOptional() })
  .openapi({
    description:
      'Describes a user account or WebAuthn Relying Party associated with a public key credential',
    required: [],
  })
  .openapi('PublicKeyCredentialEntity')

const PublicKeyCredentialRequestOptionsSchema = z
  .object({
    allowCredentials: z.array(PublicKeyCredentialDescriptorSchema).exactOptional(),
    challenge: z.string().exactOptional(),
    rpId: z.string().exactOptional(),
    timeout: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    userVerification: UserVerificationRequirementSchema.exactOptional(),
  })
  .openapi({
    description:
      'Provides the <i>authenticator<i> with the data it needs to generate an assertion.',
    required: [],
  })
  .openapi('PublicKeyCredentialRequestOptions')

const PublicKeyResponseSchema = z
  .object({
    publicKey: z.string().exactOptional(),
    publicKeys: z.record(z.string(), z.string()).exactOptional(),
  })
  .openapi({ description: 'JWT Public Key Response Object', required: [] })
  .openapi('PublicKeyResponse')

const RateLimitedRequestConfigurationSchema = z
  .object({
    limit: z.int().exactOptional(),
    timePeriodInSeconds: z.int().exactOptional(),
    enabled: z.boolean().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('RateLimitedRequestConfiguration')

const RawLoginSchema = z
  .object({
    applicationId: z.uuid().exactOptional(),
    instant: ZonedDateTimeSchema.exactOptional(),
    ipAddress: z.string().exactOptional(),
    userId: z.uuid().exactOptional(),
  })
  .openapi({
    description: 'Raw login information for each time a user logs into an application.',
    required: [],
  })
  .openapi('RawLogin')

const ReactorFeatureStatusSchema = z
  .enum(['ACTIVE', 'DISCONNECTED', 'PENDING', 'DISABLED', 'UNKNOWN'])
  .openapi({ description: '' })
  .openapi('ReactorFeatureStatus')

const ReactorMetricsSchema = z
  .object({
    breachedPasswordMetrics: z
      .record(z.string(), BreachedPasswordTenantMetricSchema)
      .exactOptional(),
    mfaMetrics: z.record(z.string(), MFATenantMetricSchema).exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('ReactorMetrics')

const ReactorMetricsResponseSchema = z
  .object({ metrics: ReactorMetricsSchema.exactOptional() })
  .openapi({ description: '', required: [] })
  .openapi('ReactorMetricsResponse')

const ReactorRequestSchema = z
  .object({ license: z.string().exactOptional(), licenseId: z.string().exactOptional() })
  .openapi({ description: 'Request for managing FusionAuth Reactor and licenses.', required: [] })
  .openapi('ReactorRequest')

const ReactorStatusSchema = z
  .object({
    advancedIdentityProviders: ReactorFeatureStatusSchema.exactOptional(),
    advancedLambdas: ReactorFeatureStatusSchema.exactOptional(),
    advancedMultiFactorAuthentication: ReactorFeatureStatusSchema.exactOptional(),
    advancedOAuthScopes: ReactorFeatureStatusSchema.exactOptional(),
    advancedOAuthScopesCustomScopes: ReactorFeatureStatusSchema.exactOptional(),
    advancedOAuthScopesThirdPartyApplications: ReactorFeatureStatusSchema.exactOptional(),
    advancedRegistration: ReactorFeatureStatusSchema.exactOptional(),
    applicationMultiFactorAuthentication: ReactorFeatureStatusSchema.exactOptional(),
    applicationThemes: ReactorFeatureStatusSchema.exactOptional(),
    breachedPasswordDetection: ReactorFeatureStatusSchema.exactOptional(),
    cimd: ReactorFeatureStatusSchema.exactOptional(),
    clientRiskConfiguration: ReactorFeatureStatusSchema.exactOptional(),
    connectors: ReactorFeatureStatusSchema.exactOptional(),
    dPoP: ReactorFeatureStatusSchema.exactOptional(),
    entityManagement: ReactorFeatureStatusSchema.exactOptional(),
    expiration: LocalDateSchema.exactOptional(),
    imfaWebhooks: ReactorFeatureStatusSchema.exactOptional(),
    intelligentMFA: ReactorFeatureStatusSchema.exactOptional(),
    ipGeoLocation: ReactorFeatureStatusSchema.exactOptional(),
    ipReputation: ReactorFeatureStatusSchema.exactOptional(),
    legacyAdapter: ReactorFeatureStatusSchema.exactOptional(),
    licenseAttributes: z.record(z.string(), z.string()).exactOptional(),
    licensed: z.boolean().exactOptional(),
    multiFactorLambdas: ReactorFeatureStatusSchema.exactOptional(),
    scimServer: ReactorFeatureStatusSchema.exactOptional(),
    tenantManagerApplication: ReactorFeatureStatusSchema.exactOptional(),
    threatDetection: ReactorFeatureStatusSchema.exactOptional(),
    tokenExchange: ReactorFeatureStatusSchema.exactOptional(),
    universalApplication: ReactorFeatureStatusSchema.exactOptional(),
    userAgentReputation: ReactorFeatureStatusSchema.exactOptional(),
    webAuthn: ReactorFeatureStatusSchema.exactOptional(),
    webAuthnPlatformAuthenticators: ReactorFeatureStatusSchema.exactOptional(),
    webAuthnRoamingAuthenticators: ReactorFeatureStatusSchema.exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('ReactorStatus')

const ReactorResponseSchema = z
  .object({ status: ReactorStatusSchema.exactOptional() })
  .openapi({ description: '', required: [] })
  .openapi('ReactorResponse')

const RecentLoginResponseSchema = z
  .object({ logins: z.array(DisplayableRawLoginSchema).exactOptional() })
  .openapi({ description: 'Response for the user login report.', required: [] })
  .openapi('RecentLoginResponse')

const RefreshRequestSchema = z
  .object({
    refreshToken: z.string().exactOptional(),
    timeToLiveInSeconds: z.int().exactOptional(),
    token: z.string().exactOptional(),
    eventInfo: EventInfoSchema.exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('RefreshRequest')

const RefreshResponseSchema = z
  .looseObject({})
  .openapi({ description: '' })
  .openapi('RefreshResponse')

const RefreshTokenAccessTokenRequestSchema = z
  .object({
    client_id: z.string().exactOptional(),
    client_secret: z.string().exactOptional(),
    grant_type: z.string().exactOptional(),
    refresh_token: z.string().exactOptional(),
    scope: z.string().exactOptional(),
    tenantId: z.uuid().exactOptional(),
    user_code: z.string().exactOptional(),
  })
  .openapi({
    description: 'The request object to exchange a Refresh Token for an Access Token.',
    required: [],
  })
  .openapi('RefreshTokenAccessTokenRequest')

const RefreshTokenImportRequestSchema = z
  .object({
    refreshTokens: z.array(RefreshTokenSchema).exactOptional(),
    validateDbConstraints: z.boolean().exactOptional(),
  })
  .openapi({ description: 'Refresh Token Import request.', required: [] })
  .openapi('RefreshTokenImportRequest')

const RefreshTokenResponseSchema = z
  .object({
    refreshToken: RefreshTokenSchema.exactOptional(),
    refreshTokens: z.array(RefreshTokenSchema).exactOptional(),
  })
  .openapi({ description: 'API response for retrieving Refresh Tokens', required: [] })
  .openapi('RefreshTokenResponse')

const RefreshTokenRevokeRequestSchema = z
  .object({
    applicationId: z.uuid().exactOptional(),
    token: z.string().exactOptional(),
    userId: z.uuid().exactOptional(),
    eventInfo: EventInfoSchema.exactOptional(),
  })
  .openapi({
    description:
      'Request for the Refresh Token API to revoke a refresh token rather than using the URL parameters.',
    required: [],
  })
  .openapi('RefreshTokenRevokeRequest')

const RegistrationDeleteRequestSchema = z
  .object({ eventInfo: EventInfoSchema.exactOptional() })
  .openapi({ description: 'Registration delete API request object.', required: [] })
  .openapi('RegistrationDeleteRequest')

const RegistrationReportResponseSchema = z
  .object({
    hourlyCounts: z.array(CountSchema).exactOptional(),
    total: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ description: 'Response for the registration report.', required: [] })
  .openapi('RegistrationReportResponse')

const SendSetPasswordIdentityTypeSchema = z
  .enum(['email', 'phone', 'doNotSend'])
  .openapi({
    description:
      'Used to indicate which identity type a password "request" might go to. It could be  used for send set passwords or send password resets.',
  })
  .openapi('SendSetPasswordIdentityType')

const RegistrationRequestSchema = z
  .object({
    disableDomainBlock: z.boolean().exactOptional(),
    generateAuthenticationToken: z.boolean().exactOptional(),
    registration: UserRegistrationSchema.exactOptional(),
    sendSetPasswordEmail: z.boolean().exactOptional(),
    sendSetPasswordIdentityType: SendSetPasswordIdentityTypeSchema.exactOptional(),
    skipRegistrationVerification: z.boolean().exactOptional(),
    skipVerification: z.boolean().exactOptional(),
    user: UserSchema.exactOptional(),
    verificationIds: z.array(z.string()).exactOptional(),
    eventInfo: EventInfoSchema.exactOptional(),
  })
  .openapi({ description: 'Registration API request object.', required: [] })
  .openapi('RegistrationRequest')

const VerificationIdSchema = z
  .object({
    id: z.string().exactOptional(),
    oneTimeCode: z.string().exactOptional(),
    type: IdentityTypeSchema.exactOptional(),
    value: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('VerificationId')

const RegistrationResponseSchema = z
  .object({
    refreshToken: z.string().exactOptional(),
    refreshTokenId: z.uuid().exactOptional(),
    registration: UserRegistrationSchema.exactOptional(),
    registrationVerificationId: z.string().exactOptional(),
    registrationVerificationOneTimeCode: z.string().exactOptional(),
    token: z.string().exactOptional(),
    tokenExpirationInstant: ZonedDateTimeSchema.exactOptional(),
    user: UserSchema.exactOptional(),
    verificationIds: z.array(VerificationIdSchema).exactOptional(),
  })
  .openapi({ description: 'Registration API request object.', required: [] })
  .openapi('RegistrationResponse')

const ReindexRequestSchema = z
  .object({ index: z.string().exactOptional() })
  .openapi({ description: 'Reindex API request', required: [] })
  .openapi('ReindexRequest')

const ReloadRequestSchema = z
  .object({ names: z.array(z.string()).exactOptional() })
  .openapi({ description: '', required: [] })
  .openapi('ReloadRequest')

const RequiredLambdaResultSchema = z
  .object({
    required: z.boolean().exactOptional(),
    sendSuspiciousLoginEvent: z.boolean().exactOptional(),
  })
  .openapi({
    description: "Represents the inbound lambda parameter 'result' for MFA Required lambdas.",
    required: [],
  })
  .openapi('RequiredLambdaResult')

const RequiresCORSConfigurationSchema = z
  .looseObject({})
  .openapi({ description: 'Interface describing the need for CORS configuration.' })
  .openapi('RequiresCORSConfiguration')

const RetrieveUserCodeRequestSchema = z
  .object({
    client_id: z.string().exactOptional(),
    client_secret: z.string().exactOptional(),
    tenantId: z.uuid().exactOptional(),
    user_code: z.string().exactOptional(),
  })
  .openapi({
    description:
      'The request object for retrieving a user code that is part of an in-progress Device Authorization Grant.',
    required: [],
  })
  .openapi('RetrieveUserCodeRequest')

const RetrieveUserCodeUsingAPIKeyRequestSchema = z
  .object({ tenantId: z.uuid().exactOptional(), user_code: z.string().exactOptional() })
  .openapi({
    description:
      'The request object for retrieving a user code that is part of an in-progress Device Authorization Grant using an API key',
    required: [],
  })
  .openapi('RetrieveUserCodeUsingAPIKeyRequest')

const SAMLv2ApplicationConfigurationSchema = z
  .object({
    buttonImageURL: z.string().exactOptional(),
    buttonText: z.string().exactOptional(),
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    createRegistration: z.boolean().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('SAMLv2ApplicationConfiguration')

const SAMLv2IdPInitiatedApplicationConfigurationSchema = z
  .object({
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    createRegistration: z.boolean().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('SAMLv2IdPInitiatedApplicationConfiguration')

const SMSMessageTemplateSchema = z
  .object({
    defaultTemplate: z.string().exactOptional(),
    localizedTemplates: LocalizedStringsSchema.exactOptional(),
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    id: z.uuid().exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    lastUpdateInstant: ZonedDateTimeSchema.exactOptional(),
    name: z.string().exactOptional(),
    type: MessageTypeSchema.exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('SMSMessageTemplate')

const UserSearchCriteriaSchema = z
  .object({
    accurateTotal: z.boolean().exactOptional(),
    ids: z.array(z.uuid()).exactOptional(),
    nextResults: z.string().exactOptional(),
    query: z.string().exactOptional(),
    queryString: z.string().exactOptional(),
    sortFields: z.array(SortFieldSchema).exactOptional(),
  })
  .openapi({
    description:
      'This class is the user query. It provides a build pattern as well as public fields for use on forms and in actions.',
    required: [],
  })
  .openapi('UserSearchCriteria')

const SearchRequestSchema = z
  .object({
    search: UserSearchCriteriaSchema.exactOptional(),
    expand: z.array(z.string()).exactOptional(),
  })
  .openapi({ description: 'Search API request.', required: [] })
  .openapi('SearchRequest')

const SearchResponseSchema = z
  .object({
    total: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    nextResults: z.string().exactOptional(),
    users: z.array(UserSchema).exactOptional(),
    expandable: z.array(z.string()).exactOptional(),
  })
  .openapi({ description: 'Search API response.', required: [] })
  .openapi('SearchResponse')

const SearchResultsSchema = z
  .object({
    nextResults: z.string().exactOptional(),
    results: z.array(z.looseObject({})).exactOptional(),
    total: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    totalEqualToActual: z.boolean().exactOptional(),
  })
  .openapi({ description: 'Search results.', required: [] })
  .openapi('SearchResults')

const SecretResponseSchema = z
  .object({ secret: z.string().exactOptional(), secretBase32Encoded: z.string().exactOptional() })
  .openapi({ description: '', required: [] })
  .openapi('SecretResponse')

const SecureIdentitySchema = z
  .object({
    identities: z.array(UserIdentitySchema).exactOptional(),
    breachedPasswordLastCheckedInstant: ZonedDateTimeSchema.exactOptional(),
    breachedPasswordStatus: BreachedPasswordStatusSchema.exactOptional(),
    connectorId: z.uuid().exactOptional(),
    encryptionScheme: z.string().exactOptional(),
    factor: z.int().exactOptional(),
    id: z.uuid().exactOptional(),
    lastLoginInstant: ZonedDateTimeSchema.exactOptional(),
    password: z.string().exactOptional(),
    passwordChangeReason: ChangePasswordReasonSchema.exactOptional(),
    passwordChangeRequired: z.boolean().exactOptional(),
    passwordLastUpdateInstant: ZonedDateTimeSchema.exactOptional(),
    salt: z.string().exactOptional(),
    uniqueUsername: z.string().exactOptional(),
    username: z.string().exactOptional(),
    usernameStatus: ContentStatusSchema.exactOptional(),
    verified: z.boolean().exactOptional(),
    verifiedInstant: ZonedDateTimeSchema.exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('SecureIdentity')

const SendRequestSchema = z
  .object({
    applicationId: z.uuid().exactOptional(),
    bccAddresses: z.array(z.string()).exactOptional(),
    ccAddresses: z.array(z.string()).exactOptional(),
    preferredLanguages: z.array(LocaleSchema).exactOptional(),
    requestData: z.record(z.string(), z.looseObject({})).exactOptional(),
    toAddresses: z.array(EmailAddressSchema).exactOptional(),
    userIds: z.array(z.uuid()).exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('SendRequest')

const SendResponseSchema = z
  .object({
    anonymousResults: z.record(z.string(), EmailTemplateErrorsSchema).exactOptional(),
    results: z.record(z.string(), EmailTemplateErrorsSchema).exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('SendResponse')

const SimpleThemeVariablesSchema = z
  .object({
    alertBackgroundColor: z.string().exactOptional(),
    alertFontColor: z.string().exactOptional(),
    backgroundImageURL: z.string().exactOptional(),
    backgroundSize: z.string().exactOptional(),
    borderRadius: z.string().exactOptional(),
    deleteButtonColor: z.string().exactOptional(),
    deleteButtonFocusColor: z.string().exactOptional(),
    deleteButtonTextColor: z.string().exactOptional(),
    deleteButtonTextFocusColor: z.string().exactOptional(),
    errorFontColor: z.string().exactOptional(),
    errorIconColor: z.string().exactOptional(),
    favicons: z.array(FaviconSchema).exactOptional(),
    fontColor: z.string().exactOptional(),
    fontFamily: z.string().exactOptional(),
    footerDisplay: z.boolean().exactOptional(),
    iconBackgroundColor: z.string().exactOptional(),
    iconColor: z.string().exactOptional(),
    infoIconColor: z.string().exactOptional(),
    inputBackgroundColor: z.string().exactOptional(),
    inputIconColor: z.string().exactOptional(),
    inputTextColor: z.string().exactOptional(),
    linkTextColor: z.string().exactOptional(),
    linkTextFocusColor: z.string().exactOptional(),
    logoImageSize: z.string().exactOptional(),
    logoImageURL: z.string().exactOptional(),
    monoFontColor: z.string().exactOptional(),
    monoFontFamily: z.string().exactOptional(),
    pageBackgroundColor: z.string().exactOptional(),
    panelBackgroundColor: z.string().exactOptional(),
    primaryButtonColor: z.string().exactOptional(),
    primaryButtonFocusColor: z.string().exactOptional(),
    primaryButtonTextColor: z.string().exactOptional(),
    primaryButtonTextFocusColor: z.string().exactOptional(),
  })
  .openapi({
    description: 'Theme object for values used in the css variables for simple themes.',
    required: [],
  })
  .openapi('SimpleThemeVariables')

const StatusResponseSchema = z
  .looseObject({})
  .openapi({ description: 'The public Status API response' })
  .openapi('StatusResponse')

const SubjectTokenInfoSchema = z
  .object({
    iss: z.string().exactOptional(),
    jti: z.string().exactOptional(),
    sub: z.string().exactOptional(),
    type: z.string().exactOptional(),
    validationStatus: SubjectTokenValidationStatusSchema.exactOptional(),
  })
  .openapi({
    description: 'Nested structure for subject token information in the webhook payload.',
    required: [],
  })
  .openapi('SubjectTokenInfo')

const SupportsPostBindingsSchema = z
  .looseObject({})
  .openapi({
    description:
      'Helper interface that indicates an identity provider can be federated to using the HTTP POST method.',
  })
  .openapi('SupportsPostBindings')

const TokenExchangeAuditLogConfigurationSchema = z
  .object({ numberOfDaysToRetain: z.int().exactOptional() })
  .openapi({
    description:
      'The system configuration for token exchange audit log data.  <p>  Deleting these entries is mandatory, so this configuration intentionally has no enabled flag. Token exchange volume can be high enough  that retaining entries indefinitely would grow the database without bound. Longer retention is served by ingesting the token exchange  webhooks into external storage.',
    required: [],
  })
  .openapi('TokenExchangeAuditLogConfiguration')

const SystemTrustedProxyConfigurationPolicySchema = z
  .enum(['All', 'OnlyConfigured'])
  .openapi({ description: '' })
  .openapi('SystemTrustedProxyConfigurationPolicy')

const SystemTrustedProxyConfigurationSchema = z
  .object({
    trustPolicy: SystemTrustedProxyConfigurationPolicySchema.exactOptional(),
    trusted: z.array(z.string()).exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('SystemTrustedProxyConfiguration')

const UIConfigurationSchema = z
  .object({
    headerColor: z.string().exactOptional(),
    logoURL: z.string().exactOptional(),
    menuFontColor: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UIConfiguration')

const UsageDataConfigurationSchema = z
  .object({ numberOfDaysToRetain: z.int().exactOptional(), enabled: z.boolean().exactOptional() })
  .openapi({ description: 'Config for Usage Data  Stats', required: [] })
  .openapi('UsageDataConfiguration')

const WebhookEventLogConfigurationSchema = z
  .object({
    delete: DeleteConfigurationSchema.exactOptional(),
    enabled: z.boolean().exactOptional(),
  })
  .openapi({ description: 'The system configuration for Webhook Event Log data.', required: [] })
  .openapi('WebhookEventLogConfiguration')

const SystemConfigurationSchema = z
  .object({
    auditLogConfiguration: AuditLogConfigurationSchema.exactOptional(),
    corsConfiguration: CORSConfigurationSchema.exactOptional(),
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    eventLogConfiguration: EventLogConfigurationSchema.exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    lastUpdateInstant: ZonedDateTimeSchema.exactOptional(),
    loginRecordConfiguration: LoginRecordConfigurationSchema.exactOptional(),
    reportTimezone: ZoneIdSchema.exactOptional(),
    tokenExchangeAuditLogConfiguration: TokenExchangeAuditLogConfigurationSchema.exactOptional(),
    trustedProxyConfiguration: SystemTrustedProxyConfigurationSchema.exactOptional(),
    uiConfiguration: UIConfigurationSchema.exactOptional(),
    usageDataConfiguration: UsageDataConfigurationSchema.exactOptional(),
    webhookEventLogConfiguration: WebhookEventLogConfigurationSchema.exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('SystemConfiguration')

const SystemConfigurationRequestSchema = z
  .object({ systemConfiguration: SystemConfigurationSchema.exactOptional() })
  .openapi({ description: 'Request for the system configuration API.', required: [] })
  .openapi('SystemConfigurationRequest')

const SystemConfigurationResponseSchema = z
  .object({ systemConfiguration: SystemConfigurationSchema.exactOptional() })
  .openapi({ description: 'Response for the system configuration API.', required: [] })
  .openapi('SystemConfigurationResponse')

const SystemLogsExportRequestSchema = z
  .object({
    includeArchived: z.boolean().exactOptional(),
    lastNBytes: z.int().exactOptional(),
    dateTimeSecondsFormat: z.string().exactOptional(),
    zoneId: ZoneIdSchema.exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('SystemLogsExportRequest')

const TemplatesSchema = z
  .object({
    accountEdit: z.string().exactOptional(),
    accountIndex: z.string().exactOptional(),
    accountTwoFactorDisable: z.string().exactOptional(),
    accountTwoFactorEdit: z.string().exactOptional(),
    accountTwoFactorEnable: z.string().exactOptional(),
    accountTwoFactorIndex: z.string().exactOptional(),
    accountWebAuthnAdd: z.string().exactOptional(),
    accountWebAuthnDelete: z.string().exactOptional(),
    accountWebAuthnIndex: z.string().exactOptional(),
    confirmationRequired: z.string().exactOptional(),
    emailComplete: z.string().exactOptional(),
    emailSent: z.string().exactOptional(),
    emailVerificationRequired: z.string().exactOptional(),
    emailVerify: z.string().exactOptional(),
    helpers: z.string().exactOptional(),
    index: z.string().exactOptional(),
    oauth2Authorize: z.string().exactOptional(),
    oauth2AuthorizedNotRegistered: z.string().exactOptional(),
    oauth2ChildRegistrationNotAllowed: z.string().exactOptional(),
    oauth2ChildRegistrationNotAllowedComplete: z.string().exactOptional(),
    oauth2CompleteRegistration: z.string().exactOptional(),
    oauth2Consent: z.string().exactOptional(),
    oauth2Device: z.string().exactOptional(),
    oauth2DeviceComplete: z.string().exactOptional(),
    oauth2Error: z.string().exactOptional(),
    oauth2Logout: z.string().exactOptional(),
    oauth2Passwordless: z.string().exactOptional(),
    oauth2Register: z.string().exactOptional(),
    oauth2StartIdPLink: z.string().exactOptional(),
    oauth2TwoFactor: z.string().exactOptional(),
    oauth2TwoFactorEnable: z.string().exactOptional(),
    oauth2TwoFactorEnableComplete: z.string().exactOptional(),
    oauth2TwoFactorMethods: z.string().exactOptional(),
    oauth2Wait: z.string().exactOptional(),
    oauth2WebAuthn: z.string().exactOptional(),
    oauth2WebAuthnReauth: z.string().exactOptional(),
    oauth2WebAuthnReauthEnable: z.string().exactOptional(),
    passwordChange: z.string().exactOptional(),
    passwordComplete: z.string().exactOptional(),
    passwordForgot: z.string().exactOptional(),
    passwordSent: z.string().exactOptional(),
    phoneComplete: z.string().exactOptional(),
    phoneSent: z.string().exactOptional(),
    phoneVerificationRequired: z.string().exactOptional(),
    phoneVerify: z.string().exactOptional(),
    registrationComplete: z.string().exactOptional(),
    registrationSent: z.string().exactOptional(),
    registrationVerificationRequired: z.string().exactOptional(),
    registrationVerify: z.string().exactOptional(),
    samlv2Logout: z.string().exactOptional(),
    unauthorized: z.string().exactOptional(),
    emailSend: z.string().exactOptional(),
    registrationSend: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Templates')

const TenantAccessControlConfigurationSchema = z
  .object({ uiIPAccessControlListId: z.uuid().exactOptional() })
  .openapi({ description: '', required: [] })
  .openapi('TenantAccessControlConfiguration')

const TenantCaptchaConfigurationSchema = z
  .object({
    captchaMethod: CaptchaMethodSchema.exactOptional(),
    secretKey: z.string().exactOptional(),
    siteKey: z.string().exactOptional(),
    threshold: z.float64().exactOptional(),
    enabled: z.boolean().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('TenantCaptchaConfiguration')

const TenantFormConfigurationSchema = z
  .object({ adminUserFormId: z.uuid().exactOptional() })
  .openapi({ description: '', required: [] })
  .openapi('TenantFormConfiguration')

const TenantLambdaConfigurationSchema = z
  .object({
    loginValidationId: z.uuid().exactOptional(),
    multiFactorRequirementId: z.uuid().exactOptional(),
    scimEnterpriseUserRequestConverterId: z.uuid().exactOptional(),
    scimEnterpriseUserResponseConverterId: z.uuid().exactOptional(),
    scimGroupRequestConverterId: z.uuid().exactOptional(),
    scimGroupResponseConverterId: z.uuid().exactOptional(),
    scimUserRequestConverterId: z.uuid().exactOptional(),
    scimUserResponseConverterId: z.uuid().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('TenantLambdaConfiguration')

const TenantLoginConfigurationSchema = z
  .object({ requireAuthentication: z.boolean().exactOptional() })
  .openapi({ description: '', required: [] })
  .openapi('TenantLoginConfiguration')

const TenantMultiFactorConfigurationSchema = z
  .object({
    authenticator: MultiFactorAuthenticatorMethodSchema.exactOptional(),
    debug: z.boolean().exactOptional(),
    email: MultiFactorEmailMethodSchema.exactOptional(),
    loginPolicy: MultiFactorLoginPolicySchema.exactOptional(),
    sms: MultiFactorSMSMethodSchema.exactOptional(),
    voice: MultiFactorVoiceMethodSchema.exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('TenantMultiFactorConfiguration')

const TenantOAuth2ConfigurationSchema = z
  .object({ clientCredentialsAccessTokenPopulateLambdaId: z.uuid().exactOptional() })
  .openapi({ required: [] })
  .openapi('TenantOAuth2Configuration')

const TenantPhoneConfigurationSchema = z
  .object({
    adminTwoFactorMethodRemoveTemplateId: z.uuid().exactOptional(),
    forgotPasswordTemplateId: z.uuid().exactOptional(),
    identityUpdateTemplateId: z.uuid().exactOptional(),
    implicitPhoneVerificationAllowed: z.boolean().exactOptional(),
    loginIdInUseOnCreateTemplateId: z.uuid().exactOptional(),
    loginIdInUseOnUpdateTemplateId: z.uuid().exactOptional(),
    loginNewDeviceTemplateId: z.uuid().exactOptional(),
    loginSuspiciousTemplateId: z.uuid().exactOptional(),
    messengerId: z.uuid().exactOptional(),
    passwordResetSuccessTemplateId: z.uuid().exactOptional(),
    passwordUpdateTemplateId: z.uuid().exactOptional(),
    passwordlessTemplateId: z.uuid().exactOptional(),
    setPasswordTemplateId: z.uuid().exactOptional(),
    twoFactorMethodAddTemplateId: z.uuid().exactOptional(),
    twoFactorMethodRemoveTemplateId: z.uuid().exactOptional(),
    unverified: PhoneUnverifiedOptionsSchema.exactOptional(),
    verificationCompleteTemplateId: z.uuid().exactOptional(),
    verificationStrategy: VerificationStrategySchema.exactOptional(),
    verificationTemplateId: z.uuid().exactOptional(),
    verifyPhoneNumber: z.boolean().exactOptional(),
  })
  .openapi({
    description: 'Hold tenant phone configuration for passwordless and verification cases.',
    required: [],
  })
  .openapi('TenantPhoneConfiguration')

const TenantRateLimitConfigurationSchema = z
  .object({
    cimdClientRegistration: RateLimitedRequestConfigurationSchema.exactOptional(),
    failedLogin: RateLimitedRequestConfigurationSchema.exactOptional(),
    forgotPassword: RateLimitedRequestConfigurationSchema.exactOptional(),
    sendEmailVerification: RateLimitedRequestConfigurationSchema.exactOptional(),
    sendPasswordless: RateLimitedRequestConfigurationSchema.exactOptional(),
    sendPasswordlessPhone: RateLimitedRequestConfigurationSchema.exactOptional(),
    sendPhoneVerification: RateLimitedRequestConfigurationSchema.exactOptional(),
    sendRegistrationVerification: RateLimitedRequestConfigurationSchema.exactOptional(),
    sendTwoFactor: RateLimitedRequestConfigurationSchema.exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('TenantRateLimitConfiguration')

const TenantRegistrationConfigurationSchema = z
  .object({
    blockedDomains: z
      .array(z.any())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('TenantRegistrationConfiguration')

const TenantSCIMServerConfigurationSchema = z
  .object({
    clientEntityTypeId: z.uuid().exactOptional(),
    schemas: z.record(z.string(), z.looseObject({})).exactOptional(),
    serverEntityTypeId: z.uuid().exactOptional(),
    enabled: z.boolean().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('TenantSCIMServerConfiguration')

const TenantSSOConfigurationSchema = z
  .object({
    allowAccessTokenBootstrap: z.boolean().exactOptional(),
    deviceTrustTimeToLiveInSeconds: z.int().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('TenantSSOConfiguration')

const TenantTokenExchangeConfigurationSchema = z
  .object({
    allowedIssuers: z.array(z.string()).exactOptional(),
    debug: z.boolean().exactOptional(),
    maxClaimDepth: z.int().exactOptional(),
    policyEngine: TokenExchangePolicyEngineSchema.exactOptional(),
    policyEngineLambdaId: z.uuid().exactOptional(),
    populateLambdaId: z.uuid().exactOptional(),
    enabled: z.boolean().exactOptional(),
  })
  .openapi({ description: 'Tenant level configuration for RFC 8693 token exchange.', required: [] })
  .openapi('TenantTokenExchangeConfiguration')

const TenantUserDeletePolicySchema = z
  .object({ unverified: TimeBasedDeletePolicySchema.exactOptional() })
  .openapi({ description: 'A Tenant-level policy for deleting Users.', required: [] })
  .openapi('TenantUserDeletePolicy')

const UniqueUsernameStrategySchema = z
  .enum(['Always', 'OnCollision'])
  .openapi('UniqueUsernameStrategy')

const UniqueUsernameConfigurationSchema = z
  .object({
    numberOfDigits: z.int().exactOptional(),
    separator: z.string().exactOptional(),
    strategy: UniqueUsernameStrategySchema.exactOptional(),
    enabled: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UniqueUsernameConfiguration')

const TenantUsernameConfigurationSchema = z
  .object({ unique: UniqueUsernameConfigurationSchema.exactOptional() })
  .openapi({ description: '', required: [] })
  .openapi('TenantUsernameConfiguration')

const TenantWebAuthnWorkflowConfigurationSchema = z
  .object({
    authenticatorAttachmentPreference: AuthenticatorAttachmentPreferenceSchema.exactOptional(),
    userVerificationRequirement: UserVerificationRequirementSchema.exactOptional(),
    enabled: z.boolean().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('TenantWebAuthnWorkflowConfiguration')

const TenantWebAuthnConfigurationSchema = z
  .object({
    bootstrapWorkflow: TenantWebAuthnWorkflowConfigurationSchema.exactOptional(),
    debug: z.boolean().exactOptional(),
    reauthenticationWorkflow: TenantWebAuthnWorkflowConfigurationSchema.exactOptional(),
    relyingPartyId: z.string().exactOptional(),
    relyingPartyName: z.string().exactOptional(),
    enabled: z.boolean().exactOptional(),
  })
  .openapi({ description: 'Tenant-level configuration for WebAuthn', required: [] })
  .openapi('TenantWebAuthnConfiguration')

const TenantSchema = z
  .object({
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    accessControlConfiguration: TenantAccessControlConfigurationSchema.exactOptional(),
    baseURL: z.string().exactOptional(),
    captchaConfiguration: TenantCaptchaConfigurationSchema.exactOptional(),
    clientRiskConfiguration: ClientRiskConfigurationSchema.exactOptional(),
    configured: z.boolean().exactOptional(),
    connectorPolicies: z.array(ConnectorPolicySchema).exactOptional(),
    emailConfiguration: EmailConfigurationSchema.exactOptional(),
    eventConfiguration: EventConfigurationSchema.exactOptional(),
    externalIdentifierConfiguration: ExternalIdentifierConfigurationSchema.exactOptional(),
    failedAuthenticationConfiguration: FailedAuthenticationConfigurationSchema.exactOptional(),
    familyConfiguration: FamilyConfigurationSchema.exactOptional(),
    formConfiguration: TenantFormConfigurationSchema.exactOptional(),
    httpSessionMaxInactiveInterval: z.int().exactOptional(),
    id: z.uuid().exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    issuer: z.string().exactOptional(),
    jwtConfiguration: JWTConfigurationSchema.exactOptional(),
    lambdaConfiguration: TenantLambdaConfigurationSchema.exactOptional(),
    lastUpdateInstant: ZonedDateTimeSchema.exactOptional(),
    loginConfiguration: TenantLoginConfigurationSchema.exactOptional(),
    logoutURL: z.string().exactOptional(),
    maximumPasswordAge: MaximumPasswordAgeSchema.exactOptional(),
    minimumPasswordAge: MinimumPasswordAgeSchema.exactOptional(),
    multiFactorConfiguration: TenantMultiFactorConfigurationSchema.exactOptional(),
    name: z.string().exactOptional(),
    oauthConfiguration: TenantOAuth2ConfigurationSchema.exactOptional(),
    passwordEncryptionConfiguration: PasswordEncryptionConfigurationSchema.exactOptional(),
    passwordValidationRules: PasswordValidationRulesSchema.exactOptional(),
    phoneConfiguration: TenantPhoneConfigurationSchema.exactOptional(),
    rateLimitConfiguration: TenantRateLimitConfigurationSchema.exactOptional(),
    registrationConfiguration: TenantRegistrationConfigurationSchema.exactOptional(),
    scimServerConfiguration: TenantSCIMServerConfigurationSchema.exactOptional(),
    ssoConfiguration: TenantSSOConfigurationSchema.exactOptional(),
    state: ObjectStateSchema.exactOptional(),
    themeId: z.uuid().exactOptional(),
    tokenExchangeConfiguration: TenantTokenExchangeConfigurationSchema.exactOptional(),
    userDeletePolicy: TenantUserDeletePolicySchema.exactOptional(),
    usernameConfiguration: TenantUsernameConfigurationSchema.exactOptional(),
    webAuthnConfiguration: TenantWebAuthnConfigurationSchema.exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('Tenant')

const TenantDeleteRequestSchema = z
  .object({ async: z.boolean().exactOptional(), eventInfo: EventInfoSchema.exactOptional() })
  .openapi({
    description:
      'Request for the Tenant API to delete a tenant rather than using the URL parameters.',
    required: [],
  })
  .openapi('TenantDeleteRequest')

const TenantManagerApplicationConfigurationSchema = z
  .object({ applicationId: z.uuid().exactOptional() })
  .openapi({ description: 'Tenant Manager application configuration.', required: [] })
  .openapi('TenantManagerApplicationConfiguration')

const TenantManagerIdentityProviderTypeConfigurationSchema = z
  .object({
    defaultAttributeMappings: z.record(z.string(), z.string()).exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    lastUpdateInstant: ZonedDateTimeSchema.exactOptional(),
    linkingStrategy: IdentityProviderLinkingStrategySchema.exactOptional(),
    type: IdentityProviderTypeSchema.exactOptional(),
    enabled: z.boolean().exactOptional(),
  })
  .openapi({
    description: 'Configuration object for identity provider types allowed in Tenant Manager',
    required: [],
  })
  .openapi('TenantManagerIdentityProviderTypeConfiguration')

const TenantManagerConfigurationSchema = z
  .object({
    applicationConfigurations: z.array(TenantManagerApplicationConfigurationSchema).exactOptional(),
    attributeFormId: z.uuid().exactOptional(),
    brandName: z.string().exactOptional(),
    identityProviderTypeConfigurations: z
      .record(z.string(), TenantManagerIdentityProviderTypeConfigurationSchema)
      .exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    lastUpdateInstant: ZonedDateTimeSchema.exactOptional(),
  })
  .openapi({ description: 'Configuration object for the Tenant Manager.', required: [] })
  .openapi('TenantManagerConfiguration')

const TenantManagerConfigurationRequestSchema = z
  .object({ tenantManagerConfiguration: TenantManagerConfigurationSchema.exactOptional() })
  .openapi({ description: 'The Tenant Manager configuration request object', required: [] })
  .openapi('TenantManagerConfigurationRequest')

const TenantManagerConfigurationResponseSchema = z
  .object({ tenantManagerConfiguration: TenantManagerConfigurationSchema.exactOptional() })
  .openapi({ description: 'The Tenant Manager configuration response object', required: [] })
  .openapi('TenantManagerConfigurationResponse')

const TenantManagerIdentityProviderTypeConfigurationRequestSchema = z
  .object({
    typeConfiguration: TenantManagerIdentityProviderTypeConfigurationSchema.exactOptional(),
  })
  .openapi({
    description: 'The Tenant Manager IdP type configuration request object',
    required: [],
  })
  .openapi('TenantManagerIdentityProviderTypeConfigurationRequest')

const TenantManagerIdentityProviderTypeConfigurationResponseSchema = z
  .object({
    typeConfiguration: TenantManagerIdentityProviderTypeConfigurationSchema.exactOptional(),
  })
  .openapi({
    description: 'The Tenant Manager IdP type configuration response object',
    required: [],
  })
  .openapi('TenantManagerIdentityProviderTypeConfigurationResponse')

const TenantRequestSchema = z
  .object({
    sourceTenantId: z.uuid().exactOptional(),
    tenant: TenantSchema.exactOptional(),
    webhookIds: z.array(z.uuid()).exactOptional(),
    eventInfo: EventInfoSchema.exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('TenantRequest')

const TenantResponseSchema = z
  .object({ tenant: TenantSchema.exactOptional(), tenants: z.array(TenantSchema).exactOptional() })
  .openapi({ description: '', required: [] })
  .openapi('TenantResponse')

const TenantSearchCriteriaSchema = z
  .object({
    name: z.string().exactOptional(),
    numberOfResults: z.int().exactOptional(),
    orderBy: z.string().exactOptional(),
    startRow: z.int().exactOptional(),
  })
  .openapi({ description: 'Search criteria for Tenants', required: [] })
  .openapi('TenantSearchCriteria')

const TenantSearchRequestSchema = z
  .object({ search: TenantSearchCriteriaSchema.exactOptional() })
  .openapi({ description: 'Search request for Tenants', required: [] })
  .openapi('TenantSearchRequest')

const TenantSearchResponseSchema = z
  .object({
    tenants: z.array(TenantSchema).exactOptional(),
    total: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ description: 'Tenant search response', required: [] })
  .openapi('TenantSearchResponse')

const TenantUnverifiedConfigurationSchema = z
  .object({
    email: UnverifiedBehaviorSchema.exactOptional(),
    whenGated: RegistrationUnverifiedOptionsSchema.exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('TenantUnverifiedConfiguration')

const TenantableSchema = z.looseObject({}).openapi({ description: '' }).openapi('Tenantable')

const TestEventSchema = z
  .object({
    message: z.string().exactOptional(),
    createInstant: ZonedDateTimeSchema.exactOptional(),
    id: z.uuid().exactOptional(),
    info: EventInfoSchema.exactOptional(),
    tenantId: z.uuid().exactOptional(),
    type: EventTypeSchema.exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('TestEvent')

const ThemeTypeSchema = z.enum(['advanced', 'simple']).openapi('ThemeType')

const ThemeSchema = z
  .object({
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    defaultMessages: z.string().exactOptional(),
    id: z.uuid().exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    lastUpdateInstant: ZonedDateTimeSchema.exactOptional(),
    localizedMessages: LocalizedStringsSchema.exactOptional(),
    name: z.string().exactOptional(),
    stylesheet: z.string().exactOptional(),
    templates: TemplatesSchema.exactOptional(),
    type: ThemeTypeSchema.exactOptional(),
    variables: SimpleThemeVariablesSchema.exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('Theme')

const ThemeRequestSchema = z
  .object({ sourceThemeId: z.uuid().exactOptional(), theme: ThemeSchema.exactOptional() })
  .openapi({ description: 'Theme API request object.', required: [] })
  .openapi('ThemeRequest')

const ThemeResponseSchema = z
  .object({ theme: ThemeSchema.exactOptional(), themes: z.array(ThemeSchema).exactOptional() })
  .openapi({ description: 'Theme API response object.', required: [] })
  .openapi('ThemeResponse')

const ThemeSearchCriteriaSchema = z
  .object({
    name: z.string().exactOptional(),
    type: ThemeTypeSchema.exactOptional(),
    numberOfResults: z.int().exactOptional(),
    orderBy: z.string().exactOptional(),
    startRow: z.int().exactOptional(),
  })
  .openapi({ description: 'Search criteria for themes', required: [] })
  .openapi('ThemeSearchCriteria')

const ThemeSearchRequestSchema = z
  .object({ search: ThemeSearchCriteriaSchema.exactOptional() })
  .openapi({ description: 'Search request for Themes.', required: [] })
  .openapi('ThemeSearchRequest')

const ThemeSearchResponseSchema = z
  .object({
    themes: z.array(ThemeSchema).exactOptional(),
    total: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ description: 'Search response for Themes', required: [] })
  .openapi('ThemeSearchResponse')

const TokenExchangeOutcomeSchema = z
  .enum([
    'CLIENT_AUTHENTICATION_FAILED',
    'CLIENT_DISALLOWED',
    'CLIENT_REQUEST_FAILURE',
    'DEPTH_EXCEEDED',
    'POLICY_DENIED',
    'POLICY_LAMBDA_ERROR',
    'POPULATE_LAMBDA_ERROR',
    'SUBJECT_TOKEN_INVALID',
    'SUCCESS',
    'TENANT_DISALLOWED',
    'WEBHOOK_FAILURE',
  ])
  .openapi({
    description:
      'The terminal outcome of a token exchange attempt. Every failure stage gets a distinct value so a denial can be attributed to the stage  that rejected it.',
  })
  .openapi('TokenExchangeOutcome')

const TokenExchangeAuditLogSchema = z
  .object({
    actChain: z.string().exactOptional(),
    delegationSemantics: TokenExchangeDelegationSemanticsSchema.exactOptional(),
    eventId: z.uuid().exactOptional(),
    exchangerClientId: z.uuid().exactOptional(),
    grantedAudience: z.string().exactOptional(),
    grantedScope: z.string().exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    intent: z.string().exactOptional(),
    issuedTokenJti: z.string().exactOptional(),
    outcome: TokenExchangeOutcomeSchema.exactOptional(),
    policyDecision: TokenExchangePolicyDecisionSchema.exactOptional(),
    policyDecisionDurationMs: z.int().exactOptional(),
    policyEngine: TokenExchangePolicyEngineSchema.exactOptional(),
    requestedAudience: z.string().exactOptional(),
    subjectTokenIss: z.string().exactOptional(),
    subjectTokenJti: z.string().exactOptional(),
    subjectTokenSub: z.string().exactOptional(),
    subjectTokenType: z.string().exactOptional(),
    subjectTokenValidationStatus: SubjectTokenValidationStatusSchema.exactOptional(),
    tenantId: z.uuid().exactOptional(),
  })
  .openapi({
    description:
      'An audit record for a single token exchange attempt. Exactly one of these is written for every attempt, whether it succeeded or failed,  so this is the authoritative record of who exchanged what for what.',
    required: [],
  })
  .openapi('TokenExchangeAuditLog')

const TokenExchangeAuditLogChainResponseSchema = z
  .object({ tokenExchangeAuditLogs: z.array(TokenExchangeAuditLogSchema).exactOptional() })
  .openapi({ description: 'Token exchange audit log chain response.', required: [] })
  .openapi('TokenExchangeAuditLogChainResponse')

const TokenExchangeAuditLogSearchCriteriaSchema = z
  .object({
    end: ZonedDateTimeSchema.exactOptional(),
    exchangerClientId: z.uuid().exactOptional(),
    outcome: TokenExchangeOutcomeSchema.exactOptional(),
    start: ZonedDateTimeSchema.exactOptional(),
    tenantId: z.uuid().exactOptional(),
    numberOfResults: z.int().exactOptional(),
    orderBy: z.string().exactOptional(),
    startRow: z.int().exactOptional(),
  })
  .openapi({
    description:
      'Search criteria for the token exchange audit log. Filterable on exactly {@code tenantId}, {@code exchangerClientId}, {@code outcome},  and an exchange instant range — no other fields, per the ARC decision to limit the index count on this table.',
    required: [],
  })
  .openapi('TokenExchangeAuditLogSearchCriteria')

const TokenExchangeAuditLogSearchRequestSchema = z
  .object({ search: TokenExchangeAuditLogSearchCriteriaSchema.exactOptional() })
  .openapi({ description: 'Token exchange audit log search request.', required: [] })
  .openapi('TokenExchangeAuditLogSearchRequest')

const TokenExchangeAuditLogSearchResponseSchema = z
  .object({
    tokenExchangeAuditLogs: z.array(TokenExchangeAuditLogSchema).exactOptional(),
    total: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ description: 'Token exchange audit log search response.', required: [] })
  .openapi('TokenExchangeAuditLogSearchResponse')

const TokenExchangeCompleteEventSchema = z
  .object({
    actChain: z.looseObject({}).exactOptional(),
    exchangerClientId: z.uuid().exactOptional(),
    intent: z.string().exactOptional(),
    issuedToken: IssuedTokenInfoSchema.exactOptional(),
    outcome: TokenExchangeOutcomeSchema.exactOptional(),
    policy: PolicyInfoSchema.exactOptional(),
    requestedAudience: z.array(z.string()).exactOptional(),
    subjectToken: SubjectTokenInfoSchema.exactOptional(),
  })
  .openapi({
    description:
      'Models the Token Exchange Complete event. This is a non-transactional variant of the token.exchange event.  Delivery failure does not block or fail the token exchange request.',
    required: [],
  })
  .openapi('TokenExchangeCompleteEvent')

const TokenExchangeEventSchema = z
  .object({
    actChain: z.looseObject({}).exactOptional(),
    exchangerClientId: z.uuid().exactOptional(),
    intent: z.string().exactOptional(),
    issuedToken: IssuedTokenInfoSchema.exactOptional(),
    outcome: TokenExchangeOutcomeSchema.exactOptional(),
    policy: PolicyInfoSchema.exactOptional(),
    requestedAudience: z.array(z.string()).exactOptional(),
    subjectToken: SubjectTokenInfoSchema.exactOptional(),
    createInstant: ZonedDateTimeSchema.exactOptional(),
    id: z.uuid().exactOptional(),
    info: EventInfoSchema.exactOptional(),
    tenantId: z.uuid().exactOptional(),
    type: EventTypeSchema.exactOptional(),
  })
  .openapi({
    description:
      'Models the Token Exchange event. This event fires for every token exchange attempt (success and failure).',
    required: [],
  })
  .openapi('TokenExchangeEvent')

const TotalsSchema = z
  .object({
    logins: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    registrations: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    totalRegistrations: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('Totals')

const TotalsReportResponseSchema = z
  .object({
    applicationTotals: z.record(z.string(), TotalsSchema).exactOptional(),
    globalRegistrations: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    totalGlobalRegistrations: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({
    description:
      'The response from the total report. This report stores the total numbers for each application.',
    required: [],
  })
  .openapi('TotalsReportResponse')

const TwilioMessengerConfigurationSchema = z
  .object({
    accountSID: z.string().exactOptional(),
    authToken: z.string().exactOptional(),
    fromPhoneNumber: z.string().exactOptional(),
    messagingServiceSid: z.string().exactOptional(),
    url: z.string().exactOptional(),
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    debug: z.boolean().exactOptional(),
    id: z.uuid().exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    lastUpdateInstant: ZonedDateTimeSchema.exactOptional(),
    messageTypes: z
      .array(z.any())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    name: z.string().exactOptional(),
    transport: z.string().exactOptional(),
    type: MessengerTypeSchema.exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('TwilioMessengerConfiguration')

const TwoFactorDisableRequestSchema = z
  .object({
    applicationId: z.uuid().exactOptional(),
    code: z.string().exactOptional(),
    methodId: z.string().exactOptional(),
    eventInfo: EventInfoSchema.exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('TwoFactorDisableRequest')

const TwoFactorEnableDisableSendRequestSchema = z
  .object({
    email: z.string().exactOptional(),
    method: z.string().exactOptional(),
    methodId: z.string().exactOptional(),
    mobilePhone: z.string().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('TwoFactorEnableDisableSendRequest')

const TwoFactorLoginRequestSchema = z
  .object({
    code: z.string().exactOptional(),
    trustComputer: z.boolean().exactOptional(),
    twoFactorId: z.string().exactOptional(),
    userId: z.uuid().exactOptional(),
    applicationId: z.uuid().exactOptional(),
    botDetectionScore: z.float64().exactOptional(),
    ipAddress: z.string().exactOptional(),
    metaData: MetaDataSchema.exactOptional(),
    newDevice: z.boolean().exactOptional(),
    noJWT: z.boolean().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('TwoFactorLoginRequest')

const TwoFactorRecoveryCodeResponseSchema = z
  .object({ recoveryCodes: z.array(z.string()).exactOptional() })
  .openapi({ description: '', required: [] })
  .openapi('TwoFactorRecoveryCodeResponse')

const TwoFactorRequestSchema = z
  .object({
    applicationId: z.uuid().exactOptional(),
    authenticatorId: z.string().exactOptional(),
    code: z.string().exactOptional(),
    email: z.string().exactOptional(),
    method: z.string().exactOptional(),
    mobilePhone: z.string().exactOptional(),
    name: z.string().exactOptional(),
    secret: z.string().exactOptional(),
    secretBase32Encoded: z.string().exactOptional(),
    twoFactorId: z.string().exactOptional(),
    eventInfo: EventInfoSchema.exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('TwoFactorRequest')

const TwoFactorResponseSchema = z
  .object({ code: z.string().exactOptional(), recoveryCodes: z.array(z.string()).exactOptional() })
  .openapi({ description: '', required: [] })
  .openapi('TwoFactorResponse')

const TwoFactorSendRequestSchema = z
  .object({
    applicationId: z.uuid().exactOptional(),
    email: z.string().exactOptional(),
    messageType: MessageTypeSchema.exactOptional(),
    method: z.string().exactOptional(),
    methodId: z.string().exactOptional(),
    mobilePhone: z.string().exactOptional(),
    userId: z.uuid().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('TwoFactorSendRequest')

const TwoFactorStartRequestSchema = z
  .object({
    applicationId: z.uuid().exactOptional(),
    code: z.string().exactOptional(),
    loginId: z.string().exactOptional(),
    loginIdTypes: z.array(z.string()).exactOptional(),
    state: z.record(z.string(), z.looseObject({})).exactOptional(),
    trustChallenge: z.string().exactOptional(),
    userId: z.uuid().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('TwoFactorStartRequest')

const TwoFactorStartResponseSchema = z
  .object({
    code: z.string().exactOptional(),
    methods: z.array(TwoFactorMethodSchema).exactOptional(),
    twoFactorId: z.string().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('TwoFactorStartResponse')

const TwoFactorStatusRequestSchema = z
  .object({
    userId: z.uuid().exactOptional(),
    accessToken: z.string().exactOptional(),
    action: MultiFactorActionSchema.exactOptional(),
    applicationId: z.uuid().exactOptional(),
    twoFactorTrustId: z.string().exactOptional(),
    eventInfo: EventInfoSchema.exactOptional(),
  })
  .openapi({
    description:
      'Check the status of two-factor authentication for a user, with more options than on a GET request.',
    required: [],
  })
  .openapi('TwoFactorStatusRequest')

const TwoFactorTrustSchema = z
  .object({
    applicationId: z.uuid().exactOptional(),
    expiration: ZonedDateTimeSchema.exactOptional(),
    startInstant: ZonedDateTimeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TwoFactorTrust')

const TwoFactorStatusResponseSchema = z
  .object({
    trusts: z.array(TwoFactorTrustSchema).exactOptional(),
    twoFactorTrustId: z.string().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('TwoFactorStatusResponse')

const TwoFactorUpdateRequestSchema = z
  .object({
    methodId: z.string().exactOptional(),
    name: z.string().exactOptional(),
    eventInfo: EventInfoSchema.exactOptional(),
  })
  .openapi({
    description: 'Request to update an existing two-factor method for a user.',
    required: [],
  })
  .openapi('TwoFactorUpdateRequest')

const UserActionOptionSchema = z
  .object({
    localizedNames: LocalizedStringsSchema.exactOptional(),
    name: z.string().exactOptional(),
  })
  .openapi({ description: 'Models content user action options.', required: [] })
  .openapi('UserActionOption')

const UserActionSchema = z
  .object({
    active: z.boolean().exactOptional(),
    cancelEmailTemplateId: z.uuid().exactOptional(),
    endEmailTemplateId: z.uuid().exactOptional(),
    id: z.uuid().exactOptional(),
    includeEmailInEventJSON: z.boolean().exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    lastUpdateInstant: ZonedDateTimeSchema.exactOptional(),
    localizedNames: LocalizedStringsSchema.exactOptional(),
    modifyEmailTemplateId: z.uuid().exactOptional(),
    name: z.string().exactOptional(),
    options: z.array(UserActionOptionSchema).exactOptional(),
    preventLogin: z.boolean().exactOptional(),
    sendEndEvent: z.boolean().exactOptional(),
    startEmailTemplateId: z.uuid().exactOptional(),
    temporal: z.boolean().exactOptional(),
    transactionType: TransactionTypeSchema.exactOptional(),
    userEmailingEnabled: z.boolean().exactOptional(),
    userNotificationsEnabled: z.boolean().exactOptional(),
  })
  .openapi({
    description: 'An action that can be executed on a user (discipline or reward potentially).',
    required: [],
  })
  .openapi('UserAction')

const UserActionPhaseSchema = z
  .enum(['start', 'modify', 'cancel', 'end'])
  .openapi({ description: 'The phases of a time-based user action.' })
  .openapi('UserActionPhase')

const UserActionEventSchema = z
  .object({
    applicationIds: z.array(z.uuid()).exactOptional(),
    action: z.string().exactOptional(),
    actionId: z.uuid().exactOptional(),
    actioneeUserId: z.uuid().exactOptional(),
    actionerUserId: z.uuid().exactOptional(),
    comment: z.string().exactOptional(),
    email: EmailSchema.exactOptional(),
    emailedUser: z.boolean().exactOptional(),
    expiry: ZonedDateTimeSchema.exactOptional(),
    localizedAction: z.string().exactOptional(),
    localizedDuration: z.string().exactOptional(),
    localizedOption: z.string().exactOptional(),
    localizedReason: z.string().exactOptional(),
    notifyUser: z.boolean().exactOptional(),
    option: z.string().exactOptional(),
    phase: UserActionPhaseSchema.exactOptional(),
    reason: z.string().exactOptional(),
    reasonCode: z.string().exactOptional(),
    createInstant: ZonedDateTimeSchema.exactOptional(),
    id: z.uuid().exactOptional(),
    info: EventInfoSchema.exactOptional(),
    tenantId: z.uuid().exactOptional(),
    type: EventTypeSchema.exactOptional(),
  })
  .openapi({ description: 'Models the user action Event.', required: [] })
  .openapi('UserActionEvent')

const UserActionReasonSchema = z
  .object({
    code: z.string().exactOptional(),
    id: z.uuid().exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    lastUpdateInstant: ZonedDateTimeSchema.exactOptional(),
    localizedTexts: LocalizedStringsSchema.exactOptional(),
    text: z.string().exactOptional(),
  })
  .openapi({ description: 'Models action reasons.', required: [] })
  .openapi('UserActionReason')

const UserActionReasonRequestSchema = z
  .object({ userActionReason: UserActionReasonSchema.exactOptional() })
  .openapi({ description: 'User Action Reason API request object.', required: [] })
  .openapi('UserActionReasonRequest')

const UserActionReasonResponseSchema = z
  .object({
    userActionReason: UserActionReasonSchema.exactOptional(),
    userActionReasons: z.array(UserActionReasonSchema).exactOptional(),
  })
  .openapi({ description: 'User Action Reason API response object.', required: [] })
  .openapi('UserActionReasonResponse')

const UserActionRequestSchema = z
  .object({ userAction: UserActionSchema.exactOptional() })
  .openapi({ description: 'User Action API request object.', required: [] })
  .openapi('UserActionRequest')

const UserActionResponseSchema = z
  .object({
    userAction: UserActionSchema.exactOptional(),
    userActions: z.array(UserActionSchema).exactOptional(),
  })
  .openapi({ description: 'User Action API response object.', required: [] })
  .openapi('UserActionResponse')

const UserBulkCreateEventSchema = z
  .object({
    users: z.array(UserSchema).exactOptional(),
    createInstant: ZonedDateTimeSchema.exactOptional(),
    id: z.uuid().exactOptional(),
    info: EventInfoSchema.exactOptional(),
    tenantId: z.uuid().exactOptional(),
    type: EventTypeSchema.exactOptional(),
  })
  .openapi({ description: 'Models the User Bulk Create Event.', required: [] })
  .openapi('UserBulkCreateEvent')

const UserCommentSchema = z
  .object({
    comment: z.string().exactOptional(),
    commenterId: z.uuid().exactOptional(),
    id: z.uuid().exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    userId: z.uuid().exactOptional(),
  })
  .openapi({ description: 'A log for an event that happened to a User.', required: [] })
  .openapi('UserComment')

const UserCommentRequestSchema = z
  .object({ userComment: UserCommentSchema.exactOptional() })
  .openapi({ description: '', required: [] })
  .openapi('UserCommentRequest')

const UserCommentResponseSchema = z
  .object({
    userComment: UserCommentSchema.exactOptional(),
    userComments: z.array(UserCommentSchema).exactOptional(),
  })
  .openapi({ description: 'User Comment Response', required: [] })
  .openapi('UserCommentResponse')

const UserCommentSearchCriteriaSchema = z
  .object({
    comment: z.string().exactOptional(),
    commenterId: z.uuid().exactOptional(),
    tenantId: z.uuid().exactOptional(),
    userId: z.uuid().exactOptional(),
    numberOfResults: z.int().exactOptional(),
    orderBy: z.string().exactOptional(),
    startRow: z.int().exactOptional(),
  })
  .openapi({ description: 'Search criteria for user comments.', required: [] })
  .openapi('UserCommentSearchCriteria')

const UserCommentSearchRequestSchema = z
  .object({ search: UserCommentSearchCriteriaSchema.exactOptional() })
  .openapi({ description: 'Search request for user comments', required: [] })
  .openapi('UserCommentSearchRequest')

const UserCommentSearchResponseSchema = z
  .object({
    total: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    userComments: z.array(UserCommentSchema).exactOptional(),
  })
  .openapi({ description: 'User comment search response', required: [] })
  .openapi('UserCommentSearchResponse')

const UserConsentSchema = z
  .object({
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    consent: ConsentSchema.exactOptional(),
    consentId: z.uuid().exactOptional(),
    giverUserId: z.uuid().exactOptional(),
    id: z.uuid().exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    lastUpdateInstant: ZonedDateTimeSchema.exactOptional(),
    status: ConsentStatusSchema.exactOptional(),
    userId: z.uuid().exactOptional(),
    values: z.array(z.string()).exactOptional(),
  })
  .openapi({ description: 'Models a User consent.', required: [] })
  .openapi('UserConsent')

const UserConsentRequestSchema = z
  .object({ userConsent: UserConsentSchema.exactOptional() })
  .openapi({ description: 'API response for User consent.', required: [] })
  .openapi('UserConsentRequest')

const UserConsentResponseSchema = z
  .object({
    userConsent: UserConsentSchema.exactOptional(),
    userConsents: z.array(UserConsentSchema).exactOptional(),
  })
  .openapi({ description: 'API response for User consent.', required: [] })
  .openapi('UserConsentResponse')

const UserCreateCompleteEventSchema = z
  .object({ user: UserSchema.exactOptional() })
  .openapi({
    description:
      'Models the User Created Event.  <p>  This is different than the user.create event in that it will be sent after the user has been created. This event cannot be made transactional.',
    required: [],
  })
  .openapi('UserCreateCompleteEvent')

const UserCreateEventSchema = z
  .object({ user: UserSchema.exactOptional() })
  .openapi({ description: 'Models the User Create Event.', required: [] })
  .openapi('UserCreateEvent')

const UserCredentialsAccessTokenRequestSchema = z
  .object({
    client_id: z.string().exactOptional(),
    client_secret: z.string().exactOptional(),
    grant_type: z.string().exactOptional(),
    password: z.string().exactOptional(),
    scope: z.string().exactOptional(),
    tenantId: z.string().exactOptional(),
    user_code: z.string().exactOptional(),
    username: z.string().exactOptional(),
  })
  .openapi({
    description:
      'The request object for exchanging user credentials (username and password) for an access token.',
    required: [],
  })
  .openapi('UserCredentialsAccessTokenRequest')

const UserDeactivateEventSchema = z
  .object({ user: UserSchema.exactOptional() })
  .openapi({ description: 'Models the User Deactivate Event.', required: [] })
  .openapi('UserDeactivateEvent')

const UserDeleteCompleteEventSchema = z
  .object({ user: UserSchema.exactOptional() })
  .openapi({
    description:
      'Models the User Event (and can be converted to JSON) that is used for all user modifications (create, update,  delete).  <p>  This is different than user.delete because it is sent after the tx is committed, this cannot be transactional.',
    required: [],
  })
  .openapi('UserDeleteCompleteEvent')

const UserDeleteEventSchema = z
  .object({ user: UserSchema.exactOptional() })
  .openapi({
    description:
      'Models the User Event (and can be converted to JSON) that is used for all user modifications (create, update,  delete).',
    required: [],
  })
  .openapi('UserDeleteEvent')

const UserDeleteRequestSchema = z
  .object({
    dryRun: z.boolean().exactOptional(),
    hardDelete: z.boolean().exactOptional(),
    limit: z.int().exactOptional(),
    query: z.string().exactOptional(),
    queryString: z.string().exactOptional(),
    userIds: z.array(z.uuid()).exactOptional(),
    eventInfo: EventInfoSchema.exactOptional(),
  })
  .openapi({ description: 'User API delete request object.', required: [] })
  .openapi('UserDeleteRequest')

const UserDeleteResponseSchema = z
  .object({
    dryRun: z.boolean().exactOptional(),
    hardDelete: z.boolean().exactOptional(),
    total: z.int().exactOptional(),
    userIds: z.array(z.uuid()).exactOptional(),
  })
  .openapi({ description: 'User API bulk response object.', required: [] })
  .openapi('UserDeleteResponse')

const UserDeleteSingleRequestSchema = z
  .object({ hardDelete: z.boolean().exactOptional(), eventInfo: EventInfoSchema.exactOptional() })
  .openapi({ description: 'User API delete request object for a single user.', required: [] })
  .openapi('UserDeleteSingleRequest')

const UserEmailUpdateEventSchema = z
  .object({ previousEmail: z.string().exactOptional(), user: UserSchema.exactOptional() })
  .openapi({
    description:
      "Models an event where a user's email is updated outside of a forgot  change password workflow.",
    required: [],
  })
  .openapi('UserEmailUpdateEvent')

const UserEmailVerifiedEventSchema = z
  .object({ user: UserSchema.exactOptional() })
  .openapi({ description: 'Models the User Email Verify Event.', required: [] })
  .openapi('UserEmailVerifiedEvent')

const UserIdentityProviderLinkEventSchema = z
  .object({
    identityProviderLink: IdentityProviderLinkSchema.exactOptional(),
    user: UserSchema.exactOptional(),
  })
  .openapi({ description: 'Models the User Identity Provider Link Event.', required: [] })
  .openapi('UserIdentityProviderLinkEvent')

const UserIdentityProviderUnlinkEventSchema = z
  .object({
    identityProviderLink: IdentityProviderLinkSchema.exactOptional(),
    user: UserSchema.exactOptional(),
  })
  .openapi({ description: 'Models the User Identity Provider Unlink Event.', required: [] })
  .openapi('UserIdentityProviderUnlinkEvent')

const UserIdentityUpdateEventSchema = z
  .object({
    loginIdType: z.string().exactOptional(),
    newLoginId: z.string().exactOptional(),
    previousLoginId: z.string().exactOptional(),
    user: UserSchema.exactOptional(),
  })
  .openapi({ description: 'Models the user identity update event', required: [] })
  .openapi('UserIdentityUpdateEvent')

const UserIdentityVerifiedEventSchema = z
  .object({
    loginId: z.string().exactOptional(),
    loginIdType: z.string().exactOptional(),
    user: UserSchema.exactOptional(),
  })
  .openapi({ description: 'Models the user identity verified event', required: [] })
  .openapi('UserIdentityVerifiedEvent')

const UserLoginFailedReasonSchema = z
  .object({
    code: z.string().exactOptional(),
    lambdaId: z.uuid().exactOptional(),
    lambdaResult: ErrorsSchema.exactOptional(),
  })
  .openapi({ description: 'The reason for the login failure.', required: [] })
  .openapi('UserLoginFailedReason')

const UserLoginFailedEventSchema = z
  .object({
    applicationId: z.uuid().exactOptional(),
    authenticationType: z.string().exactOptional(),
    cimdDomainId: z.uuid().exactOptional(),
    ipAddress: z.string().exactOptional(),
    reason: UserLoginFailedReasonSchema.exactOptional(),
    user: UserSchema.exactOptional(),
  })
  .openapi({ description: 'Models the User Login Failed Event.', required: [] })
  .openapi('UserLoginFailedEvent')

const UserLoginFailedReasonCodeSchema = z
  .looseObject({})
  .openapi({ description: 'User login failed reason codes.' })
  .openapi('UserLoginFailedReasonCode')

const UserLoginIdDuplicateOnCreateEventSchema = z
  .object({
    existing: UserSchema.exactOptional(),
    duplicateEmail: z.string().exactOptional(),
    duplicateIdentities: z.array(IdentityInfoSchema).exactOptional(),
    duplicatePhoneNumber: z.string().exactOptional(),
    duplicateUsername: z.string().exactOptional(),
    user: UserSchema.exactOptional(),
  })
  .openapi({
    description:
      'Models an event where a user is being created with an "in-use" login Id (email, username, or other identities).',
    required: [],
  })
  .openapi('UserLoginIdDuplicateOnCreateEvent')

const UserLoginIdDuplicateOnUpdateEventSchema = z
  .object({
    existing: UserSchema.exactOptional(),
    duplicateEmail: z.string().exactOptional(),
    duplicateIdentities: z.array(IdentityInfoSchema).exactOptional(),
    duplicatePhoneNumber: z.string().exactOptional(),
    duplicateUsername: z.string().exactOptional(),
  })
  .openapi({
    description:
      'Models an event where a user is being updated and tries to use an "in-use" login Id (email or username).',
    required: [],
  })
  .openapi('UserLoginIdDuplicateOnUpdateEvent')

const UserLoginNewDeviceEventSchema = z
  .object({
    applicationId: z.uuid().exactOptional(),
    authenticationType: z.string().exactOptional(),
    cimdDomainId: z.uuid().exactOptional(),
    connectorId: z.uuid().exactOptional(),
    identityProviderId: z.uuid().exactOptional(),
    identityProviderName: z.string().exactOptional(),
    ipAddress: z.string().exactOptional(),
  })
  .openapi({
    description: 'Models the User Login event for a new device (un-recognized)',
    required: [],
  })
  .openapi('UserLoginNewDeviceEvent')

const UserLoginSuccessEventSchema = z
  .object({
    applicationId: z.uuid().exactOptional(),
    authenticationType: z.string().exactOptional(),
    cimdDomainId: z.uuid().exactOptional(),
    connectorId: z.uuid().exactOptional(),
    identityProviderId: z.uuid().exactOptional(),
    identityProviderName: z.string().exactOptional(),
    ipAddress: z.string().exactOptional(),
    user: UserSchema.exactOptional(),
  })
  .openapi({ description: 'Models the User Login Success Event.', required: [] })
  .openapi('UserLoginSuccessEvent')

const UserLoginSuspiciousEventSchema = z
  .object({
    threatsDetected: z
      .array(z.any())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    applicationId: z.uuid().exactOptional(),
    authenticationType: z.string().exactOptional(),
    cimdDomainId: z.uuid().exactOptional(),
    connectorId: z.uuid().exactOptional(),
    identityProviderId: z.uuid().exactOptional(),
    identityProviderName: z.string().exactOptional(),
    ipAddress: z.string().exactOptional(),
  })
  .openapi({ description: 'Models the User Login event that is suspicious.', required: [] })
  .openapi('UserLoginSuspiciousEvent')

const UserPasswordBreachEventSchema = z
  .object({ user: UserSchema.exactOptional() })
  .openapi({ description: 'Models the User Password Breach Event.', required: [] })
  .openapi('UserPasswordBreachEvent')

const UserPasswordResetSendEventSchema = z
  .object({ user: UserSchema.exactOptional() })
  .openapi({ description: 'Models the User Password Reset Send Event.', required: [] })
  .openapi('UserPasswordResetSendEvent')

const UserPasswordResetStartEventSchema = z
  .object({ user: UserSchema.exactOptional() })
  .openapi({ description: 'Models the User Password Reset Start Event.', required: [] })
  .openapi('UserPasswordResetStartEvent')

const UserPasswordResetSuccessEventSchema = z
  .object({ user: UserSchema.exactOptional() })
  .openapi({ description: 'Models the User Password Reset Success Event.', required: [] })
  .openapi('UserPasswordResetSuccessEvent')

const UserPasswordUpdateEventSchema = z
  .object({ user: UserSchema.exactOptional() })
  .openapi({ description: 'Models the User Password Update Event.', required: [] })
  .openapi('UserPasswordUpdateEvent')

const UserReactivateEventSchema = z
  .object({ user: UserSchema.exactOptional() })
  .openapi({ description: 'Models the User Reactivate Event.', required: [] })
  .openapi('UserReactivateEvent')

const UserRegistrationCreateCompleteEventSchema = z
  .object({
    applicationId: z.uuid().exactOptional(),
    registration: UserRegistrationSchema.exactOptional(),
    user: UserSchema.exactOptional(),
  })
  .openapi({
    description:
      'Models the User Created Registration Event.  <p>  This is different than the user.registration.create event in that it will be sent after the user has been created. This event cannot be made  transactional.',
    required: [],
  })
  .openapi('UserRegistrationCreateCompleteEvent')

const UserRegistrationCreateEventSchema = z
  .object({
    applicationId: z.uuid().exactOptional(),
    registration: UserRegistrationSchema.exactOptional(),
    user: UserSchema.exactOptional(),
  })
  .openapi({ description: 'Models the User Create Registration Event.', required: [] })
  .openapi('UserRegistrationCreateEvent')

const UserRegistrationDeleteCompleteEventSchema = z
  .object({
    applicationId: z.uuid().exactOptional(),
    registration: UserRegistrationSchema.exactOptional(),
    user: UserSchema.exactOptional(),
  })
  .openapi({
    description:
      'Models the User Deleted Registration Event.  <p>  This is different than user.registration.delete in that it is sent after the TX has been committed. This event cannot be transactional.',
    required: [],
  })
  .openapi('UserRegistrationDeleteCompleteEvent')

const UserRegistrationDeleteEventSchema = z
  .object({
    applicationId: z.uuid().exactOptional(),
    registration: UserRegistrationSchema.exactOptional(),
    user: UserSchema.exactOptional(),
  })
  .openapi({ description: 'Models the User Delete Registration Event.', required: [] })
  .openapi('UserRegistrationDeleteEvent')

const UserRegistrationUpdateCompleteEventSchema = z
  .object({
    applicationId: z.uuid().exactOptional(),
    original: UserRegistrationSchema.exactOptional(),
    registration: UserRegistrationSchema.exactOptional(),
    user: UserSchema.exactOptional(),
  })
  .openapi({
    description:
      'Models the User Update Registration Event.  <p>  This is different than user.registration.update in that it is sent after this event completes, this cannot be transactional.',
    required: [],
  })
  .openapi('UserRegistrationUpdateCompleteEvent')

const UserRegistrationUpdateEventSchema = z
  .object({
    applicationId: z.uuid().exactOptional(),
    original: UserRegistrationSchema.exactOptional(),
    registration: UserRegistrationSchema.exactOptional(),
    user: UserSchema.exactOptional(),
  })
  .openapi({ description: 'Models the User Update Registration Event.', required: [] })
  .openapi('UserRegistrationUpdateEvent')

const UserRegistrationVerifiedEventSchema = z
  .object({
    applicationId: z.uuid().exactOptional(),
    registration: UserRegistrationSchema.exactOptional(),
    user: UserSchema.exactOptional(),
  })
  .openapi({ description: 'Models the User Registration Verified Event.', required: [] })
  .openapi('UserRegistrationVerifiedEvent')

const UserRequestSchema = z
  .object({
    applicationId: z.uuid().exactOptional(),
    currentPassword: z.string().exactOptional(),
    disableDomainBlock: z.boolean().exactOptional(),
    passwordFieldType: PasswordTypeSchema.exactOptional(),
    sendSetPasswordEmail: z.boolean().exactOptional(),
    sendSetPasswordIdentityType: SendSetPasswordIdentityTypeSchema.exactOptional(),
    skipVerification: z.boolean().exactOptional(),
    user: UserSchema.exactOptional(),
    verificationIds: z.array(z.string()).exactOptional(),
    eventInfo: EventInfoSchema.exactOptional(),
  })
  .openapi({ description: 'User API request object.', required: [] })
  .openapi('UserRequest')

const UserResponseSchema = z
  .object({
    emailVerificationId: z.string().exactOptional(),
    emailVerificationOneTimeCode: z.string().exactOptional(),
    registrationVerificationIds: z.record(z.string(), z.string()).exactOptional(),
    registrationVerificationOneTimeCodes: z.record(z.string(), z.string()).exactOptional(),
    token: z.string().exactOptional(),
    tokenExpirationInstant: ZonedDateTimeSchema.exactOptional(),
    user: UserSchema.exactOptional(),
    verificationIds: z.array(VerificationIdSchema).exactOptional(),
  })
  .openapi({ description: 'User API response object.', required: [] })
  .openapi('UserResponse')

const UserStateSchema = z
  .enum([
    'Authenticated',
    'AuthenticatedNotRegistered',
    'AuthenticatedNotVerified',
    'AuthenticatedRegistrationNotVerified',
  ])
  .openapi({ description: '' })
  .openapi('UserState')

const UserTwoFactorChallengeEventSchema = z
  .object({
    applicationId: z.uuid().exactOptional(),
    clientRisk: z.string().exactOptional(),
    user: UserSchema.exactOptional(),
  })
  .openapi({
    description:
      'Models the User Two Factor Challenge Event. Fired when a two-factor challenge is started (before the user submits a code).',
    required: [],
  })
  .openapi('UserTwoFactorChallengeEvent')

const UserTwoFactorFailedAttemptEventSchema = z
  .object({
    applicationId: z.uuid().exactOptional(),
    clientRisk: z.string().exactOptional(),
    messageType: z.string().exactOptional(),
    method: z.string().exactOptional(),
    user: UserSchema.exactOptional(),
  })
  .openapi({
    description:
      'Models the User Two Factor Failed Attempt Event. Fired when a user fails a two-factor challenge.',
    required: [],
  })
  .openapi('UserTwoFactorFailedAttemptEvent')

const UserTwoFactorMethodAddEventSchema = z
  .object({ method: TwoFactorMethodSchema.exactOptional(), user: UserSchema.exactOptional() })
  .openapi({
    description: 'Model a user event when a two-factor method has been removed.',
    required: [],
  })
  .openapi('UserTwoFactorMethodAddEvent')

const UserTwoFactorMethodRemoveEventSchema = z
  .object({ method: TwoFactorMethodSchema.exactOptional(), user: UserSchema.exactOptional() })
  .openapi({
    description: 'Model a user event when a two-factor method has been added.',
    required: [],
  })
  .openapi('UserTwoFactorMethodRemoveEvent')

const UserTwoFactorSuccessEventSchema = z
  .object({
    applicationId: z.uuid().exactOptional(),
    clientRisk: z.string().exactOptional(),
    messageType: z.string().exactOptional(),
    method: z.string().exactOptional(),
    user: UserSchema.exactOptional(),
  })
  .openapi({
    description:
      'Models the User Two Factor Success Event. Fired when a user successfully completes a two-factor challenge.',
    required: [],
  })
  .openapi('UserTwoFactorSuccessEvent')

const UserUpdateCompleteEventSchema = z
  .object({ original: UserSchema.exactOptional(), user: UserSchema.exactOptional() })
  .openapi({
    description: 'Models the User Update Event once it is completed. This cannot be transactional.',
    required: [],
  })
  .openapi('UserUpdateCompleteEvent')

const UserUpdateEventSchema = z
  .object({ original: UserSchema.exactOptional(), user: UserSchema.exactOptional() })
  .openapi({ description: 'Models the User Update Event.', required: [] })
  .openapi('UserUpdateEvent')

const UserinfoResponseSchema = z
  .looseObject({})
  .openapi({ description: '' })
  .openapi('UserinfoResponse')

const ValidateDeviceRequestSchema = z
  .object({
    client_id: z.string().exactOptional(),
    tenantId: z.uuid().exactOptional(),
    user_code: z.string().exactOptional(),
  })
  .openapi({
    description:
      'The request object for validating an end-user provided user_code from the user-interaction of the Device Authorization Grant',
    required: [],
  })
  .openapi('ValidateDeviceRequest')

const ValidateResponseSchema = z
  .object({ jwt: JWTSchema.exactOptional() })
  .openapi({ description: '', required: [] })
  .openapi('ValidateResponse')

const VerifyCompleteRequestSchema = z
  .object({
    oneTimeCode: z.string().exactOptional(),
    verificationId: z.string().exactOptional(),
    eventInfo: EventInfoSchema.exactOptional(),
  })
  .openapi({ description: 'Verify Complete API request object.', required: [] })
  .openapi('VerifyCompleteRequest')

const VerifyCompleteResponseSchema = z
  .object({ state: z.record(z.string(), z.looseObject({})).exactOptional() })
  .openapi({ description: 'Verify Complete API response object.', required: [] })
  .openapi('VerifyCompleteResponse')

const VerifyEmailRequestSchema = z
  .object({
    oneTimeCode: z.string().exactOptional(),
    userId: z.uuid().exactOptional(),
    verificationId: z.string().exactOptional(),
    eventInfo: EventInfoSchema.exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('VerifyEmailRequest')

const VerifyEmailResponseSchema = z
  .object({ oneTimeCode: z.string().exactOptional(), verificationId: z.string().exactOptional() })
  .openapi({ description: '', required: [] })
  .openapi('VerifyEmailResponse')

const VerifyRegistrationRequestSchema = z
  .object({
    oneTimeCode: z.string().exactOptional(),
    verificationId: z.string().exactOptional(),
    eventInfo: EventInfoSchema.exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('VerifyRegistrationRequest')

const VerifyRegistrationResponseSchema = z
  .object({ oneTimeCode: z.string().exactOptional(), verificationId: z.string().exactOptional() })
  .openapi({ description: '', required: [] })
  .openapi('VerifyRegistrationResponse')

const VerifyRequestSchema = z
  .object({
    loginId: z.string().exactOptional(),
    loginIdType: z.string().exactOptional(),
    eventInfo: EventInfoSchema.exactOptional(),
  })
  .openapi({
    description: 'Identity verify request. Used to administratively verify an identity.',
    required: [],
  })
  .openapi('VerifyRequest')

const VerifySendRequestSchema = z
  .object({ verificationId: z.string().exactOptional() })
  .openapi({ description: 'Verify Send API request object.', required: [] })
  .openapi('VerifySendRequest')

const VerifyStartRequestSchema = z
  .object({
    applicationId: z.uuid().exactOptional(),
    existingUserStrategy: ExistingUserStrategySchema.exactOptional(),
    loginId: z.string().exactOptional(),
    loginIdType: z.string().exactOptional(),
    state: z.record(z.string(), z.looseObject({})).exactOptional(),
    verificationStrategy: VerificationStrategySchema.exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('VerifyStartRequest')

const VerifyStartResponseSchema = z
  .object({ oneTimeCode: z.string().exactOptional(), verificationId: z.string().exactOptional() })
  .openapi({ description: '', required: [] })
  .openapi('VerifyStartResponse')

const VersionResponseSchema = z
  .object({ version: z.string().exactOptional() })
  .openapi({ description: '', required: [] })
  .openapi('VersionResponse')

const VoiceMessageSchema = z
  .object({
    code: z.string().exactOptional(),
    locale: LocaleSchema.exactOptional(),
    message: z.string().exactOptional(),
    phoneNumber: z.string().exactOptional(),
    userId: z.uuid().exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('VoiceMessage')

const VoiceMessageTemplateSchema = z
  .object({
    defaultTemplate: z.string().exactOptional(),
    localizedTemplates: LocalizedStringsSchema.exactOptional(),
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    id: z.uuid().exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    lastUpdateInstant: ZonedDateTimeSchema.exactOptional(),
    name: z.string().exactOptional(),
    type: MessageTypeSchema.exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('VoiceMessageTemplate')

const WebAuthnCredentialSchema = z
  .object({
    algorithm: CoseAlgorithmIdentifierSchema.exactOptional(),
    attestationType: AttestationTypeSchema.exactOptional(),
    authenticatorSupportsUserVerification: z.boolean().exactOptional(),
    credentialId: z.string().exactOptional(),
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    discoverable: z.boolean().exactOptional(),
    displayName: z.string().exactOptional(),
    id: z.uuid().exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    lastUseInstant: ZonedDateTimeSchema.exactOptional(),
    name: z.string().exactOptional(),
    publicKey: z.string().exactOptional(),
    relyingPartyId: z.string().exactOptional(),
    signCount: z.int().exactOptional(),
    tenantId: z.uuid().exactOptional(),
    transports: z.array(z.string()).exactOptional(),
    userAgent: z.string().exactOptional(),
    userId: z.uuid().exactOptional(),
  })
  .openapi({
    description:
      "A User's WebAuthnCredential. Contains all data required to complete WebAuthn authentication ceremonies.",
    required: [],
  })
  .openapi('WebAuthnCredential')

const WebAuthnAssertResponseSchema = z
  .object({ credential: WebAuthnCredentialSchema.exactOptional() })
  .openapi({ description: 'API response for completing WebAuthn assertion', required: [] })
  .openapi('WebAuthnAssertResponse')

const WebAuthnAuthenticatorAuthenticationResponseSchema = z
  .object({
    authenticatorData: z.string().exactOptional(),
    clientDataJSON: z.string().exactOptional(),
    signature: z.string().exactOptional(),
    userHandle: z.string().exactOptional(),
  })
  .openapi({
    description:
      "The <i>authenticator's<i> response for the authentication ceremony in its encoded format",
    required: [],
  })
  .openapi('WebAuthnAuthenticatorAuthenticationResponse')

const WebAuthnAuthenticatorRegistrationResponseSchema = z
  .object({
    attestationObject: z.string().exactOptional(),
    clientDataJSON: z.string().exactOptional(),
  })
  .openapi({
    description:
      "The <i>authenticator's<i> response for the registration ceremony in its encoded format",
    required: [],
  })
  .openapi('WebAuthnAuthenticatorRegistrationResponse')

const WebAuthnCredentialImportRequestSchema = z
  .object({
    credentials: z.array(WebAuthnCredentialSchema).exactOptional(),
    validateDbConstraints: z.boolean().exactOptional(),
  })
  .openapi({
    description: 'API request to import an existing WebAuthn credential(s)',
    required: [],
  })
  .openapi('WebAuthnCredentialImportRequest')

const WebAuthnCredentialResponseSchema = z
  .object({
    credential: WebAuthnCredentialSchema.exactOptional(),
    credentials: z.array(WebAuthnCredentialSchema).exactOptional(),
  })
  .openapi({ description: 'WebAuthn Credential API response', required: [] })
  .openapi('WebAuthnCredentialResponse')

const WebAuthnExtensionsClientOutputsSchema = z
  .object({ credProps: CredentialPropertiesOutputSchema.exactOptional() })
  .openapi({
    description: 'Contains extension output for requested extensions during a WebAuthn ceremony',
    required: [],
  })
  .openapi('WebAuthnExtensionsClientOutputs')

const WebAuthnPublicKeyAuthenticationRequestSchema = z
  .object({
    clientExtensionResults: WebAuthnExtensionsClientOutputsSchema.exactOptional(),
    id: z.string().exactOptional(),
    rpId: z.string().exactOptional(),
    response: WebAuthnAuthenticatorAuthenticationResponseSchema.exactOptional(),
    type: z.string().exactOptional(),
  })
  .openapi({ description: 'Request to authenticate with WebAuthn', required: [] })
  .openapi('WebAuthnPublicKeyAuthenticationRequest')

const WebAuthnLoginRequestSchema = z
  .object({
    credential: WebAuthnPublicKeyAuthenticationRequestSchema.exactOptional(),
    origin: z.string().exactOptional(),
    rpId: z.string().exactOptional(),
    twoFactorTrustId: z.string().exactOptional(),
    applicationId: z.uuid().exactOptional(),
    botDetectionScore: z.float64().exactOptional(),
    ipAddress: z.string().exactOptional(),
    metaData: MetaDataSchema.exactOptional(),
    newDevice: z.boolean().exactOptional(),
    noJWT: z.boolean().exactOptional(),
  })
  .openapi({ description: 'Request to complete the WebAuthn registration ceremony', required: [] })
  .openapi('WebAuthnLoginRequest')

const WebAuthnPublicKeyRegistrationRequestSchema = z
  .object({
    clientExtensionResults: WebAuthnExtensionsClientOutputsSchema.exactOptional(),
    id: z.string().exactOptional(),
    rpId: z.string().exactOptional(),
    response: WebAuthnAuthenticatorRegistrationResponseSchema.exactOptional(),
    transports: z.array(z.string()).exactOptional(),
    type: z.string().exactOptional(),
  })
  .openapi({ description: 'Request to register a new public key with WebAuthn', required: [] })
  .openapi('WebAuthnPublicKeyRegistrationRequest')

const WebAuthnRegisterCompleteRequestSchema = z
  .object({
    credential: WebAuthnPublicKeyRegistrationRequestSchema.exactOptional(),
    origin: z.string().exactOptional(),
    rpId: z.string().exactOptional(),
    userId: z.uuid().exactOptional(),
  })
  .openapi({
    description: 'Request to complete the WebAuthn registration ceremony for a new credential,.',
    required: [],
  })
  .openapi('WebAuthnRegisterCompleteRequest')

const WebAuthnRegisterCompleteResponseSchema = z
  .object({ credential: WebAuthnCredentialSchema.exactOptional() })
  .openapi({
    description: 'API response for completing WebAuthn credential registration or assertion',
    required: [],
  })
  .openapi('WebAuthnRegisterCompleteResponse')

const WebAuthnWorkflowSchema = z
  .enum(['bootstrap', 'general', 'reauthentication'])
  .openapi({
    description:
      'Identifies the WebAuthn workflow. This will affect the parameters used for credential creation  and request based on the Tenant configuration.',
  })
  .openapi('WebAuthnWorkflow')

const WebAuthnRegisterStartRequestSchema = z
  .object({
    displayName: z.string().exactOptional(),
    name: z.string().exactOptional(),
    userAgent: z.string().exactOptional(),
    userId: z.uuid().exactOptional(),
    workflow: WebAuthnWorkflowSchema.exactOptional(),
  })
  .openapi({ description: 'API request to start a WebAuthn registration ceremony', required: [] })
  .openapi('WebAuthnRegisterStartRequest')

const WebAuthnRegisterStartResponseSchema = z
  .object({ options: PublicKeyCredentialCreationOptionsSchema.exactOptional() })
  .openapi({
    description: 'API response for starting a WebAuthn registration ceremony',
    required: [],
  })
  .openapi('WebAuthnRegisterStartResponse')

const WebAuthnStartRequestSchema = z
  .object({
    applicationId: z.uuid().exactOptional(),
    credentialId: z.uuid().exactOptional(),
    loginId: z.string().exactOptional(),
    loginIdTypes: z.array(z.string()).exactOptional(),
    state: z.record(z.string(), z.looseObject({})).exactOptional(),
    userId: z.uuid().exactOptional(),
    workflow: WebAuthnWorkflowSchema.exactOptional(),
  })
  .openapi({ description: 'API request to start a WebAuthn authentication ceremony', required: [] })
  .openapi('WebAuthnStartRequest')

const WebAuthnStartResponseSchema = z
  .object({ options: PublicKeyCredentialRequestOptionsSchema.exactOptional() })
  .openapi({
    description: 'API response for starting a WebAuthn authentication ceremony',
    required: [],
  })
  .openapi('WebAuthnStartResponse')

const WebhookSignatureConfigurationSchema = z
  .object({ signingKeyId: z.uuid().exactOptional(), enabled: z.boolean().exactOptional() })
  .openapi({ description: 'Configuration for signing webhooks.', required: [] })
  .openapi('WebhookSignatureConfiguration')

const WebhookSchema = z
  .object({
    connectTimeout: z.int().exactOptional(),
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    description: z.string().exactOptional(),
    eventsEnabled: z.record(z.string(), z.boolean()).exactOptional(),
    global: z.boolean().exactOptional(),
    headers: HTTPHeadersSchema.exactOptional(),
    httpAuthenticationPassword: z.string().exactOptional(),
    httpAuthenticationUsername: z.string().exactOptional(),
    id: z.uuid().exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    lastUpdateInstant: ZonedDateTimeSchema.exactOptional(),
    readTimeout: z.int().exactOptional(),
    signatureConfiguration: WebhookSignatureConfigurationSchema.exactOptional(),
    sslCertificate: z.string().exactOptional(),
    sslCertificateKeyId: z.uuid().exactOptional(),
    tenantIds: z.array(z.uuid()).exactOptional(),
    url: z.string().exactOptional(),
  })
  .openapi({
    description:
      'A server where events are sent. This includes user action events and any other events sent by FusionAuth.',
    required: [],
  })
  .openapi('Webhook')

const WebhookCallResponseSchema = z
  .object({
    exception: z.string().exactOptional(),
    statusCode: z.int().exactOptional(),
    url: z.string().exactOptional(),
  })
  .openapi({ description: 'A webhook call response.', required: [] })
  .openapi('WebhookCallResponse')

const WebhookAttemptResultSchema = z
  .enum(['Success', 'Failure', 'Unknown'])
  .openapi({
    description: 'The possible states of an individual webhook attempt to a single endpoint.',
  })
  .openapi('WebhookAttemptResult')

const WebhookAttemptLogSchema = z
  .object({
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    endInstant: ZonedDateTimeSchema.exactOptional(),
    id: z.uuid().exactOptional(),
    startInstant: ZonedDateTimeSchema.exactOptional(),
    webhookCallResponse: WebhookCallResponseSchema.exactOptional(),
    webhookEventLogId: z.uuid().exactOptional(),
    webhookId: z.uuid().exactOptional(),
    attemptResult: WebhookAttemptResultSchema.exactOptional(),
  })
  .openapi({ description: 'A webhook call attempt log.', required: [] })
  .openapi('WebhookAttemptLog')

const WebhookAttemptLogResponseSchema = z
  .object({ webhookAttemptLog: WebhookAttemptLogSchema.exactOptional() })
  .openapi({ description: 'Webhook attempt log response.', required: [] })
  .openapi('WebhookAttemptLogResponse')

const WebhookEventResultSchema = z
  .enum(['Failed', 'Running', 'Succeeded'])
  .openapi({
    description:
      'The possible result states of a webhook event. This tracks the success of the overall webhook transaction according to the {@link TransactionType}  and configured webhooks.',
  })
  .openapi('WebhookEventResult')

const WebhookEventLogSchema = z
  .object({
    attempts: z.array(WebhookAttemptLogSchema).exactOptional(),
    data: z.record(z.string(), z.looseObject({})).exactOptional(),
    event: EventRequestSchema.exactOptional(),
    eventResult: WebhookEventResultSchema.exactOptional(),
    eventType: EventTypeSchema.exactOptional(),
    id: z.uuid().exactOptional(),
    insertInstant: ZonedDateTimeSchema.exactOptional(),
    lastAttemptInstant: ZonedDateTimeSchema.exactOptional(),
    lastUpdateInstant: ZonedDateTimeSchema.exactOptional(),
    linkedObjectId: z.uuid().exactOptional(),
    sequence: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    failedAttempts: z.int().exactOptional(),
    successfulAttempts: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('WebhookEventLog')

const WebhookEventLogResponseSchema = z
  .object({ webhookEventLog: WebhookEventLogSchema.exactOptional() })
  .openapi({ description: 'Webhook event log response.', required: [] })
  .openapi('WebhookEventLogResponse')

const WebhookEventLogSearchCriteriaSchema = z
  .object({
    end: ZonedDateTimeSchema.exactOptional(),
    event: z.string().exactOptional(),
    eventResult: WebhookEventResultSchema.exactOptional(),
    eventType: EventTypeSchema.exactOptional(),
    start: ZonedDateTimeSchema.exactOptional(),
    numberOfResults: z.int().exactOptional(),
    orderBy: z.string().exactOptional(),
    startRow: z.int().exactOptional(),
  })
  .openapi({ description: 'Search criteria for the webhook event log.', required: [] })
  .openapi('WebhookEventLogSearchCriteria')

const WebhookEventLogSearchRequestSchema = z
  .object({ search: WebhookEventLogSearchCriteriaSchema.exactOptional() })
  .openapi({ description: 'Webhook event log search request.', required: [] })
  .openapi('WebhookEventLogSearchRequest')

const WebhookEventLogSearchResponseSchema = z
  .object({
    total: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    webhookEventLogs: z.array(WebhookEventLogSchema).exactOptional(),
  })
  .openapi({ description: 'Webhook event log search response.', required: [] })
  .openapi('WebhookEventLogSearchResponse')

const WebhookRequestSchema = z
  .object({ webhook: WebhookSchema.exactOptional() })
  .openapi({ description: 'Webhook API request object.', required: [] })
  .openapi('WebhookRequest')

const WebhookResponseSchema = z
  .object({
    webhook: WebhookSchema.exactOptional(),
    webhooks: z.array(WebhookSchema).exactOptional(),
  })
  .openapi({ description: 'Webhook API response object.', required: [] })
  .openapi('WebhookResponse')

const WebhookSearchCriteriaSchema = z
  .object({
    description: z.string().exactOptional(),
    tenantId: z.uuid().exactOptional(),
    url: z.string().exactOptional(),
    numberOfResults: z.int().exactOptional(),
    orderBy: z.string().exactOptional(),
    startRow: z.int().exactOptional(),
  })
  .openapi({ description: 'Search criteria for webhooks.', required: [] })
  .openapi('WebhookSearchCriteria')

const WebhookSearchRequestSchema = z
  .object({ search: WebhookSearchCriteriaSchema.exactOptional() })
  .openapi({ description: 'Search request for webhooks', required: [] })
  .openapi('WebhookSearchRequest')

const WebhookSearchResponseSchema = z
  .object({
    total: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    webhooks: z.array(WebhookSchema).exactOptional(),
  })
  .openapi({ description: 'Webhook search response', required: [] })
  .openapi('WebhookSearchResponse')

const ApiKeyAuthSecurityScheme = { type: 'apiKey', name: 'Authorization', in: 'header' }

const BearerAuthSecurityScheme = { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }

export const getWellKnownJwksJsonRoute = createRoute({
  method: 'get',
  path: '/.well-known/jwks.json',
  description:
    'Returns public keys used by FusionAuth to cryptographically verify JWTs using the JSON Web Key format.',
  operationId: 'retrieveJsonWebKeySetWithId',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: JWKSResponseSchema } },
    },
    default: { description: 'Error' },
  },
})

export const getWellKnownOpenidConfigurationRoute = createRoute({
  method: 'get',
  path: '/.well-known/openid-configuration',
  description: 'Returns the well known OpenID Configuration JSON document',
  operationId: 'retrieveOpenIdConfigurationWithId',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: OpenIdConfigurationSchema } },
    },
    default: { description: 'Error' },
  },
})

export const postApiApiKeyRoute = createRoute({
  method: 'post',
  path: '/api/api-key',
  description:
    'Creates an API key. You can optionally specify a unique Id for the key, if not provided one will be generated. an API key can only be created with equal or lesser authority. An API key cannot create another API key unless it is granted  to that API key.  If an API key is locked to a tenant, it can only create API Keys for that same tenant.',
  operationId: 'createAPIKey',
  request: { body: { content: { 'application/json': { schema: APIKeyRequestSchema } } } },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: APIKeyResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiApiKeyKeyIdRoute = createRoute({
  method: 'get',
  path: '/api/api-key/{keyId}',
  description: 'Retrieves an authentication API key for the given Id.',
  operationId: 'retrieveAPIKeyWithId',
  request: {
    params: z.object({
      keyId: z
        .string()
        .openapi({
          param: {
            name: 'keyId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the API key to retrieve.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: APIKeyResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const putApiApiKeyKeyIdRoute = createRoute({
  method: 'put',
  path: '/api/api-key/{keyId}',
  description: 'Updates an API key with the given Id.',
  operationId: 'updateAPIKeyWithId',
  request: {
    params: z.object({
      keyId: z
        .string()
        .openapi({
          param: {
            name: 'keyId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the API key to update.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: APIKeyRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: APIKeyResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiApiKeyKeyIdRoute = createRoute({
  method: 'post',
  path: '/api/api-key/{keyId}',
  description:
    'Creates an API key. You can optionally specify a unique Id for the key, if not provided one will be generated. an API key can only be created with equal or lesser authority. An API key cannot create another API key unless it is granted  to that API key.  If an API key is locked to a tenant, it can only create API Keys for that same tenant.',
  operationId: 'createAPIKeyWithId',
  request: {
    params: z.object({
      keyId: z
        .string()
        .openapi({
          param: {
            name: 'keyId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description:
              'The unique Id of the API key. If not provided a secure random Id will be generated.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: APIKeyRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: APIKeyResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const deleteApiApiKeyKeyIdRoute = createRoute({
  method: 'delete',
  path: '/api/api-key/{keyId}',
  description: 'Deletes the API key for the given Id.',
  operationId: 'deleteAPIKeyWithId',
  request: {
    params: z.object({
      keyId: z
        .string()
        .openapi({
          param: {
            name: 'keyId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the authentication API key to delete.',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const patchApiApiKeyKeyIdRoute = createRoute({
  method: 'patch',
  path: '/api/api-key/{keyId}',
  description: 'Updates an API key with the given Id.',
  operationId: 'patchAPIKeyWithId',
  request: {
    params: z.object({
      keyId: z
        .string()
        .openapi({
          param: {
            name: 'keyId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description:
              'The Id of the API key. If not provided a secure random api key will be generated.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: APIKeyRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: APIKeyResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiApplicationRoute = createRoute({
  method: 'get',
  path: '/api/application',
  description:
    'Retrieves all the applications that are currently inactive. OR Retrieves the application for the given Id or all the applications if the Id is null.',
  operationId: 'retrieveApplication',
  request: {
    query: z.object({
      inactive: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'inactive', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ApplicationResponseSchema } },
    },
    default: { description: 'Error' },
  },
})

export const postApiApplicationRoute = createRoute({
  method: 'post',
  path: '/api/application',
  description:
    'Creates an application. You can optionally specify an Id for the application, if not provided one will be generated.',
  operationId: 'createApplication',
  request: {
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ApplicationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ApplicationResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiApplicationSearchRoute = createRoute({
  method: 'post',
  path: '/api/application/search',
  description: 'Searches applications with the specified criteria and pagination.',
  operationId: 'searchApplicationsWithId',
  request: {
    body: { content: { 'application/json': { schema: ApplicationSearchRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ApplicationSearchResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiApplicationApplicationIdRoute = createRoute({
  method: 'get',
  path: '/api/application/{applicationId}',
  description:
    'Retrieves the application for the given Id or all the applications if the Id is null.',
  operationId: 'retrieveApplicationWithId',
  request: {
    params: z.object({
      applicationId: z
        .string()
        .openapi({
          param: {
            name: 'applicationId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The application Id.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ApplicationResponseSchema } },
    },
    default: { description: 'Error' },
  },
})

export const putApiApplicationApplicationIdRoute = createRoute({
  method: 'put',
  path: '/api/application/{applicationId}',
  description:
    'Updates the application with the given Id. OR Reactivates the application with the given Id.',
  operationId: 'updateApplicationWithId',
  request: {
    params: z.object({
      applicationId: z
        .string()
        .openapi({
          param: {
            name: 'applicationId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the application to update.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
    query: z.object({
      reactivate: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'reactivate', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
    body: { content: { 'application/json': { schema: ApplicationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ApplicationResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiApplicationApplicationIdRoute = createRoute({
  method: 'post',
  path: '/api/application/{applicationId}',
  description:
    'Creates an application. You can optionally specify an Id for the application, if not provided one will be generated.',
  operationId: 'createApplicationWithId',
  request: {
    params: z.object({
      applicationId: z
        .string()
        .openapi({
          param: {
            name: 'applicationId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description:
              'The Id to use for the application. If not provided a secure random UUID will be generated.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ApplicationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ApplicationResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const deleteApiApplicationApplicationIdRoute = createRoute({
  method: 'delete',
  path: '/api/application/{applicationId}',
  description:
    'Hard deletes an application. This is a dangerous operation and should not be used in most circumstances. This will delete the application, any registrations for that application, metrics and reports for the application, all the roles for the application, and any other data associated with the application. This operation could take a very long time, depending on the amount of data in your database. OR Deactivates the application with the given Id.',
  operationId: 'deleteApplicationWithId',
  request: {
    query: z.object({
      hardDelete: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'hardDelete', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
    params: z.object({
      applicationId: z
        .string()
        .openapi({
          param: {
            name: 'applicationId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the application to delete.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const patchApiApplicationApplicationIdRoute = createRoute({
  method: 'patch',
  path: '/api/application/{applicationId}',
  description: 'Updates, via PATCH, the application with the given Id.',
  operationId: 'patchApplicationWithId',
  request: {
    params: z.object({
      applicationId: z
        .string()
        .openapi({
          param: {
            name: 'applicationId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the application to update.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ApplicationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ApplicationResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiApplicationApplicationIdOauthConfigurationRoute = createRoute({
  method: 'get',
  path: '/api/application/{applicationId}/oauth-configuration',
  description:
    'Retrieves the Oauth2 configuration for the application for the given Application Id.',
  operationId: 'retrieveOauthConfigurationWithId',
  request: {
    params: z.object({
      applicationId: z
        .string()
        .openapi({
          param: {
            name: 'applicationId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the Application to retrieve OAuth configuration.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: OAuthConfigurationResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiApplicationApplicationIdRoleRoute = createRoute({
  method: 'post',
  path: '/api/application/{applicationId}/role',
  description:
    'Creates a new role for an application. You must specify the Id of the application you are creating the role for. You can optionally specify an Id for the role inside the ApplicationRole object itself, if not provided one will be generated.',
  operationId: 'createApplicationRole',
  request: {
    params: z.object({
      applicationId: z
        .string()
        .openapi({
          param: {
            name: 'applicationId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the application to create the role on.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ApplicationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ApplicationResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const putApiApplicationApplicationIdRoleRoleIdRoute = createRoute({
  method: 'put',
  path: '/api/application/{applicationId}/role/{roleId}',
  description: 'Updates the application role with the given Id for the application.',
  operationId: 'updateApplicationRoleWithId',
  request: {
    params: z.object({
      applicationId: z
        .string()
        .openapi({
          param: {
            name: 'applicationId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the application that the role belongs to.',
          },
        }),
      roleId: z
        .string()
        .openapi({
          param: {
            name: 'roleId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the role to update.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ApplicationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ApplicationResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiApplicationApplicationIdRoleRoleIdRoute = createRoute({
  method: 'post',
  path: '/api/application/{applicationId}/role/{roleId}',
  description:
    'Creates a new role for an application. You must specify the Id of the application you are creating the role for. You can optionally specify an Id for the role inside the ApplicationRole object itself, if not provided one will be generated.',
  operationId: 'createApplicationRoleWithId',
  request: {
    params: z.object({
      applicationId: z
        .string()
        .openapi({
          param: {
            name: 'applicationId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the application to create the role on.',
          },
        }),
      roleId: z
        .string()
        .openapi({
          param: {
            name: 'roleId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description:
              'The Id of the role. If not provided a secure random UUID will be generated.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ApplicationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ApplicationResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const deleteApiApplicationApplicationIdRoleRoleIdRoute = createRoute({
  method: 'delete',
  path: '/api/application/{applicationId}/role/{roleId}',
  description:
    'Hard deletes an application role. This is a dangerous operation and should not be used in most circumstances. This permanently removes the given role from all users that had it.',
  operationId: 'deleteApplicationRoleWithId',
  request: {
    params: z.object({
      applicationId: z
        .string()
        .openapi({
          param: {
            name: 'applicationId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the application that the role belongs to.',
          },
        }),
      roleId: z
        .string()
        .openapi({
          param: {
            name: 'roleId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the role to delete.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const patchApiApplicationApplicationIdRoleRoleIdRoute = createRoute({
  method: 'patch',
  path: '/api/application/{applicationId}/role/{roleId}',
  description: 'Updates, via PATCH, the application role with the given Id for the application.',
  operationId: 'patchApplicationRoleWithId',
  request: {
    params: z.object({
      applicationId: z
        .string()
        .openapi({
          param: {
            name: 'applicationId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the application that the role belongs to.',
          },
        }),
      roleId: z
        .string()
        .openapi({
          param: {
            name: 'roleId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the role to update.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ApplicationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ApplicationResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiApplicationApplicationIdScopeRoute = createRoute({
  method: 'post',
  path: '/api/application/{applicationId}/scope',
  description:
    'Creates a new custom OAuth scope for an application. You must specify the Id of the application you are creating the scope for. You can optionally specify an Id for the OAuth scope on the URL, if not provided one will be generated.',
  operationId: 'createOAuthScope',
  request: {
    params: z.object({
      applicationId: z
        .string()
        .openapi({
          param: {
            name: 'applicationId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the application to create the OAuth scope on.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ApplicationOAuthScopeRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ApplicationOAuthScopeResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiApplicationApplicationIdScopeScopeIdRoute = createRoute({
  method: 'get',
  path: '/api/application/{applicationId}/scope/{scopeId}',
  description: 'Retrieves a custom OAuth scope.',
  operationId: 'retrieveOAuthScopeWithId',
  request: {
    params: z.object({
      applicationId: z
        .string()
        .openapi({
          param: {
            name: 'applicationId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the application that the OAuth scope belongs to.',
          },
        }),
      scopeId: z
        .string()
        .openapi({
          param: {
            name: 'scopeId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the OAuth scope to retrieve.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ApplicationOAuthScopeResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const putApiApplicationApplicationIdScopeScopeIdRoute = createRoute({
  method: 'put',
  path: '/api/application/{applicationId}/scope/{scopeId}',
  description: 'Updates the OAuth scope with the given Id for the application.',
  operationId: 'updateOAuthScopeWithId',
  request: {
    params: z.object({
      applicationId: z
        .string()
        .openapi({
          param: {
            name: 'applicationId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the application that the OAuth scope belongs to.',
          },
        }),
      scopeId: z
        .string()
        .openapi({
          param: {
            name: 'scopeId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the OAuth scope to update.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ApplicationOAuthScopeRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ApplicationOAuthScopeResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiApplicationApplicationIdScopeScopeIdRoute = createRoute({
  method: 'post',
  path: '/api/application/{applicationId}/scope/{scopeId}',
  description:
    'Creates a new custom OAuth scope for an application. You must specify the Id of the application you are creating the scope for. You can optionally specify an Id for the OAuth scope on the URL, if not provided one will be generated.',
  operationId: 'createOAuthScopeWithId',
  request: {
    params: z.object({
      applicationId: z
        .string()
        .openapi({
          param: {
            name: 'applicationId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the application to create the OAuth scope on.',
          },
        }),
      scopeId: z
        .string()
        .openapi({
          param: {
            name: 'scopeId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description:
              'The Id of the OAuth scope. If not provided a secure random UUID will be generated.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ApplicationOAuthScopeRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ApplicationOAuthScopeResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const deleteApiApplicationApplicationIdScopeScopeIdRoute = createRoute({
  method: 'delete',
  path: '/api/application/{applicationId}/scope/{scopeId}',
  description:
    "Hard deletes a custom OAuth scope. OAuth workflows that are still requesting the deleted OAuth scope may fail depending on the application's unknown scope policy.",
  operationId: 'deleteOAuthScopeWithId',
  request: {
    params: z.object({
      applicationId: z
        .string()
        .openapi({
          param: {
            name: 'applicationId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the application that the OAuth scope belongs to.',
          },
        }),
      scopeId: z
        .string()
        .openapi({
          param: {
            name: 'scopeId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the OAuth scope to delete.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const patchApiApplicationApplicationIdScopeScopeIdRoute = createRoute({
  method: 'patch',
  path: '/api/application/{applicationId}/scope/{scopeId}',
  description: 'Updates, via PATCH, the custom OAuth scope with the given Id for the application.',
  operationId: 'patchOAuthScopeWithId',
  request: {
    params: z.object({
      applicationId: z
        .string()
        .openapi({
          param: {
            name: 'applicationId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the application that the OAuth scope belongs to.',
          },
        }),
      scopeId: z
        .string()
        .openapi({
          param: {
            name: 'scopeId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the OAuth scope to update.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ApplicationOAuthScopeRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ApplicationOAuthScopeResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiCimdDomainRoute = createRoute({
  method: 'get',
  path: '/api/cimd/domain',
  description: 'Retrieves all the CIMD domains for the tenant in context.',
  operationId: 'retrieveCimdDomainsWithId',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CimdDomainResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiCimdDomainRoute = createRoute({
  method: 'post',
  path: '/api/cimd/domain',
  description:
    'Creates a CIMD domain. You can optionally provide an Id for the CIMD domain, if not provided one will be generated.',
  operationId: 'createCimdDomain',
  request: { body: { content: { 'application/json': { schema: CimdDomainRequestSchema } } } },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CimdDomainResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiCimdDomainSearchRoute = createRoute({
  method: 'post',
  path: '/api/cimd/domain/search',
  description: 'Searches the CIMD domains with the specified criteria and pagination.',
  operationId: 'searchCimdDomainsWithId',
  request: { body: { content: { 'application/json': { schema: CimdDomainSearchRequestSchema } } } },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CimdDomainSearchResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiCimdDomainDomainIdRoute = createRoute({
  method: 'get',
  path: '/api/cimd/domain/{domainId}',
  description: 'Retrieves the CIMD domain for the given Id.',
  operationId: 'retrieveCimdDomainWithId',
  request: {
    params: z.object({
      domainId: z
        .string()
        .openapi({
          param: {
            name: 'domainId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the CIMD domain.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CimdDomainResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const putApiCimdDomainDomainIdRoute = createRoute({
  method: 'put',
  path: '/api/cimd/domain/{domainId}',
  description: 'Updates the CIMD domain with the given Id.',
  operationId: 'updateCimdDomainWithId',
  request: {
    params: z.object({
      domainId: z
        .string()
        .openapi({
          param: {
            name: 'domainId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the CIMD domain to update.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CimdDomainRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CimdDomainResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiCimdDomainDomainIdRoute = createRoute({
  method: 'post',
  path: '/api/cimd/domain/{domainId}',
  description:
    'Creates a CIMD domain. You can optionally provide an Id for the CIMD domain, if not provided one will be generated.',
  operationId: 'createCimdDomainWithId',
  request: {
    params: z.object({
      domainId: z
        .string()
        .openapi({
          param: {
            name: 'domainId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description:
              'The Id to use for the CIMD domain. If not provided a secure random UUID will be generated.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CimdDomainRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CimdDomainResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const deleteApiCimdDomainDomainIdRoute = createRoute({
  method: 'delete',
  path: '/api/cimd/domain/{domainId}',
  description: 'Deletes the CIMD domain for the given Id.',
  operationId: 'deleteCimdDomainWithId',
  request: {
    params: z.object({
      domainId: z
        .string()
        .openapi({
          param: {
            name: 'domainId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the CIMD domain to delete.',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const patchApiCimdDomainDomainIdRoute = createRoute({
  method: 'patch',
  path: '/api/cimd/domain/{domainId}',
  description: 'Updates, via PATCH, the CIMD domain with the given Id.',
  operationId: 'patchCimdDomainWithId',
  request: {
    params: z.object({
      domainId: z
        .string()
        .openapi({
          param: {
            name: 'domainId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the CIMD domain to update.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CimdDomainRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CimdDomainResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiCimdDomainDomainIdScopeRoute = createRoute({
  method: 'post',
  path: '/api/cimd/domain/{domainId}/scope',
  description:
    'Creates a new custom OAuth scope for a CIMD Domain. You must specify the Id of the CIMD domain you are creating the scope for. You can optionally specify an Id for the OAuth scope on the URL, if not provided one will be generated.',
  operationId: 'createCimdDomainOAuthScope',
  request: {
    params: z.object({
      domainId: z
        .string()
        .openapi({
          param: {
            name: 'domainId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the CIMD domain to create the OAuth scope on.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CimdDomainOAuthScopeRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CimdDomainOAuthScopeResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiCimdDomainDomainIdScopeScopeIdRoute = createRoute({
  method: 'get',
  path: '/api/cimd/domain/{domainId}/scope/{scopeId}',
  description: 'Retrieves a custom OAuth scope for a CIMD Domain.',
  operationId: 'retrieveCimdDomainOAuthScopeWithId',
  request: {
    params: z.object({
      domainId: z
        .string()
        .openapi({
          param: {
            name: 'domainId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the CIMD domain that the OAuth scope belongs to.',
          },
        }),
      scopeId: z
        .string()
        .openapi({
          param: {
            name: 'scopeId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the OAuth scope to retrieve.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CimdDomainOAuthScopeResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const putApiCimdDomainDomainIdScopeScopeIdRoute = createRoute({
  method: 'put',
  path: '/api/cimd/domain/{domainId}/scope/{scopeId}',
  description: 'Updates the OAuth scope with the given Id for the CIMD domain.',
  operationId: 'updateCimdDomainOAuthScopeWithId',
  request: {
    params: z.object({
      domainId: z
        .string()
        .openapi({
          param: {
            name: 'domainId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the CIMD domain that the OAuth scope belongs to.',
          },
        }),
      scopeId: z
        .string()
        .openapi({
          param: {
            name: 'scopeId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the OAuth scope to update.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CimdDomainOAuthScopeRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CimdDomainOAuthScopeResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiCimdDomainDomainIdScopeScopeIdRoute = createRoute({
  method: 'post',
  path: '/api/cimd/domain/{domainId}/scope/{scopeId}',
  description:
    'Creates a new custom OAuth scope for a CIMD Domain. You must specify the Id of the CIMD domain you are creating the scope for. You can optionally specify an Id for the OAuth scope on the URL, if not provided one will be generated.',
  operationId: 'createCimdDomainOAuthScopeWithId',
  request: {
    params: z.object({
      domainId: z
        .string()
        .openapi({
          param: {
            name: 'domainId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the CIMD domain to create the OAuth scope on.',
          },
        }),
      scopeId: z
        .string()
        .openapi({
          param: {
            name: 'scopeId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description:
              'The Id of the OAuth scope. If not provided a secure random UUID will be generated.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CimdDomainOAuthScopeRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CimdDomainOAuthScopeResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const deleteApiCimdDomainDomainIdScopeScopeIdRoute = createRoute({
  method: 'delete',
  path: '/api/cimd/domain/{domainId}/scope/{scopeId}',
  description:
    "Hard deletes a custom OAuth scope for a CIMD Domain. OAuth workflows that are still requesting the deleted OAuth scope may fail depending on the CIMD domain's unknown scope policy.",
  operationId: 'deleteCimdDomainOAuthScopeWithId',
  request: {
    params: z.object({
      domainId: z
        .string()
        .openapi({
          param: {
            name: 'domainId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the CIMD domain that the OAuth scope belongs to.',
          },
        }),
      scopeId: z
        .string()
        .openapi({
          param: {
            name: 'scopeId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the OAuth scope to delete.',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const patchApiCimdDomainDomainIdScopeScopeIdRoute = createRoute({
  method: 'patch',
  path: '/api/cimd/domain/{domainId}/scope/{scopeId}',
  description: 'Updates, via PATCH, the custom OAuth scope with the given Id for the CIMD domain.',
  operationId: 'patchCimdDomainOAuthScopeWithId',
  request: {
    params: z.object({
      domainId: z
        .string()
        .openapi({
          param: {
            name: 'domainId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the CIMD domain that the OAuth scope belongs to.',
          },
        }),
      scopeId: z
        .string()
        .openapi({
          param: {
            name: 'scopeId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the OAuth scope to update.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CimdDomainOAuthScopeRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CimdDomainOAuthScopeResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiCimdRegistrationSearchRoute = createRoute({
  method: 'post',
  path: '/api/cimd/registration/search',
  description: 'Searches the CIMD client registrations with the specified criteria and pagination.',
  operationId: 'searchCimdClientRegistrationsWithId',
  request: {
    body: {
      content: { 'application/json': { schema: CimdClientRegistrationSearchRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CimdClientRegistrationSearchResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiCimdRegistrationRegistrationIdRoute = createRoute({
  method: 'get',
  path: '/api/cimd/registration/{registrationId}',
  description: 'Retrieves the CIMD client registration for the given Id.',
  operationId: 'retrieveCimdClientRegistrationWithId',
  request: {
    params: z.object({
      registrationId: z
        .string()
        .openapi({
          param: {
            name: 'registrationId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the CIMD client registration.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CimdClientRegistrationResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const deleteApiCimdRegistrationRegistrationIdRoute = createRoute({
  method: 'delete',
  path: '/api/cimd/registration/{registrationId}',
  description:
    'Deletes the CIMD client registration for the given Id, along with its refresh tokens.',
  operationId: 'deleteCimdClientRegistrationWithId',
  request: {
    params: z.object({
      registrationId: z
        .string()
        .openapi({
          param: {
            name: 'registrationId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the CIMD client registration to delete.',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiConnectorRoute = createRoute({
  method: 'get',
  path: '/api/connector',
  description: 'Retrieves all the connectors.',
  operationId: 'retrieveConnectorsWithId',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ConnectorResponseSchema } },
    },
    default: { description: 'Error' },
  },
})

export const postApiConnectorRoute = createRoute({
  method: 'post',
  path: '/api/connector',
  description:
    'Creates a connector.  You can optionally specify an Id for the connector, if not provided one will be generated.',
  operationId: 'createConnector',
  request: { body: { content: { 'application/json': { schema: ConnectorRequestSchema } } } },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ConnectorResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiConnectorConnectorIdRoute = createRoute({
  method: 'get',
  path: '/api/connector/{connectorId}',
  description: 'Retrieves the connector with the given Id.',
  operationId: 'retrieveConnectorWithId',
  request: {
    params: z.object({
      connectorId: z
        .string()
        .openapi({
          param: {
            name: 'connectorId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the connector.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ConnectorResponseSchema } },
    },
    default: { description: 'Error' },
  },
})

export const putApiConnectorConnectorIdRoute = createRoute({
  method: 'put',
  path: '/api/connector/{connectorId}',
  description: 'Updates the connector with the given Id.',
  operationId: 'updateConnectorWithId',
  request: {
    params: z.object({
      connectorId: z
        .string()
        .openapi({
          param: {
            name: 'connectorId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the connector to update.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ConnectorRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ConnectorResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiConnectorConnectorIdRoute = createRoute({
  method: 'post',
  path: '/api/connector/{connectorId}',
  description:
    'Creates a connector.  You can optionally specify an Id for the connector, if not provided one will be generated.',
  operationId: 'createConnectorWithId',
  request: {
    params: z.object({
      connectorId: z
        .string()
        .openapi({
          param: {
            name: 'connectorId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description:
              'The Id for the connector. If not provided a secure random UUID will be generated.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ConnectorRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ConnectorResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const deleteApiConnectorConnectorIdRoute = createRoute({
  method: 'delete',
  path: '/api/connector/{connectorId}',
  description: 'Deletes the connector for the given Id.',
  operationId: 'deleteConnectorWithId',
  request: {
    params: z.object({
      connectorId: z
        .string()
        .openapi({
          param: {
            name: 'connectorId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the connector to delete.',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const patchApiConnectorConnectorIdRoute = createRoute({
  method: 'patch',
  path: '/api/connector/{connectorId}',
  description: 'Updates, via PATCH, the connector with the given Id.',
  operationId: 'patchConnectorWithId',
  request: {
    params: z.object({
      connectorId: z
        .string()
        .openapi({
          param: {
            name: 'connectorId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the connector to update.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ConnectorRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ConnectorResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiConsentRoute = createRoute({
  method: 'get',
  path: '/api/consent',
  description: 'Retrieves all the consent.',
  operationId: 'retrieveConsentsWithId',
  request: {
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ConsentResponseSchema } },
    },
    default: { description: 'Error' },
  },
})

export const postApiConsentRoute = createRoute({
  method: 'post',
  path: '/api/consent',
  description:
    'Creates a user consent type. You can optionally specify an Id for the consent type, if not provided one will be generated.',
  operationId: 'createConsent',
  request: {
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ConsentRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ConsentResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiConsentSearchRoute = createRoute({
  method: 'get',
  path: '/api/consent/search',
  description: 'Searches consents with the specified criteria and pagination.',
  operationId: 'searchConsentsByParametersWithId',
  request: {
    query: z.object({
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            schema: { type: 'string' },
            description: 'The name of the consent to search for. Supports wildcard search using *.',
            required: false,
          },
        }),
      numberOfResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'numberOfResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'The number of results to return. Defaults to 25.',
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'orderBy',
            in: 'query',
            schema: { type: 'string' },
            description:
              'The field to order the results by. Supported values: id, insertInstant, name.',
            required: false,
          },
        }),
      startRow: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'startRow',
            in: 'query',
            schema: { type: 'string' },
            description: 'The offset into the total results. Defaults to 0.',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ConsentSearchResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiConsentSearchRoute = createRoute({
  method: 'post',
  path: '/api/consent/search',
  description: 'Searches consents with the specified criteria and pagination.',
  operationId: 'searchConsentsWithId',
  request: { body: { content: { 'application/json': { schema: ConsentSearchRequestSchema } } } },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ConsentSearchResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiConsentConsentIdRoute = createRoute({
  method: 'get',
  path: '/api/consent/{consentId}',
  description: 'Retrieves the Consent for the given Id.',
  operationId: 'retrieveConsentWithId',
  request: {
    params: z.object({
      consentId: z
        .string()
        .openapi({
          param: {
            name: 'consentId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the consent.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ConsentResponseSchema } },
    },
    default: { description: 'Error' },
  },
})

export const putApiConsentConsentIdRoute = createRoute({
  method: 'put',
  path: '/api/consent/{consentId}',
  description: 'Updates the consent with the given Id.',
  operationId: 'updateConsentWithId',
  request: {
    params: z.object({
      consentId: z
        .string()
        .openapi({
          param: {
            name: 'consentId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the consent to update.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ConsentRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ConsentResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiConsentConsentIdRoute = createRoute({
  method: 'post',
  path: '/api/consent/{consentId}',
  description:
    'Creates a user consent type. You can optionally specify an Id for the consent type, if not provided one will be generated.',
  operationId: 'createConsentWithId',
  request: {
    params: z.object({
      consentId: z
        .string()
        .openapi({
          param: {
            name: 'consentId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description:
              'The Id for the consent. If not provided a secure random UUID will be generated.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ConsentRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ConsentResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const deleteApiConsentConsentIdRoute = createRoute({
  method: 'delete',
  path: '/api/consent/{consentId}',
  description: 'Deletes the consent for the given Id.',
  operationId: 'deleteConsentWithId',
  request: {
    params: z.object({
      consentId: z
        .string()
        .openapi({
          param: {
            name: 'consentId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the consent to delete.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const patchApiConsentConsentIdRoute = createRoute({
  method: 'patch',
  path: '/api/consent/{consentId}',
  description: 'Updates, via PATCH, the consent with the given Id.',
  operationId: 'patchConsentWithId',
  request: {
    params: z.object({
      consentId: z
        .string()
        .openapi({
          param: {
            name: 'consentId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the consent to update.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ConsentRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ConsentResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiEmailSendEmailTemplateIdRoute = createRoute({
  method: 'post',
  path: '/api/email/send/{emailTemplateId}',
  description:
    'Send an email using an email template Id. You can optionally provide <code>requestData</code> to access key value pairs in the email template.',
  operationId: 'sendEmailWithId',
  request: {
    params: z.object({
      emailTemplateId: z
        .string()
        .openapi({
          param: {
            name: 'emailTemplateId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id for the template.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SendRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SendResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiEmailTemplateRoute = createRoute({
  method: 'get',
  path: '/api/email/template',
  description:
    "Retrieves the email template for the given Id. If you don't specify the Id, this will return all the email templates.",
  operationId: 'retrieveEmailTemplate',
  request: {
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: EmailTemplateResponseSchema } },
    },
    default: { description: 'Error' },
  },
})

export const postApiEmailTemplateRoute = createRoute({
  method: 'post',
  path: '/api/email/template',
  description:
    'Creates an email template. You can optionally specify an Id for the template, if not provided one will be generated.',
  operationId: 'createEmailTemplate',
  request: {
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EmailTemplateRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: EmailTemplateResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiEmailTemplatePreviewRoute = createRoute({
  method: 'post',
  path: '/api/email/template/preview',
  description:
    "Creates a preview of the email template provided in the request. This allows you to preview an email template that hasn't been saved to the database yet. The entire email template does not need to be provided on the request. This will create the preview based on whatever is given.",
  operationId: 'retrieveEmailTemplatePreviewWithId',
  request: { body: { content: { 'application/json': { schema: PreviewRequestSchema } } } },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PreviewResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiEmailTemplateSearchRoute = createRoute({
  method: 'post',
  path: '/api/email/template/search',
  description: 'Searches email templates with the specified criteria and pagination.',
  operationId: 'searchEmailTemplatesWithId',
  request: {
    body: { content: { 'application/json': { schema: EmailTemplateSearchRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: EmailTemplateSearchResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiEmailTemplateEmailTemplateIdRoute = createRoute({
  method: 'get',
  path: '/api/email/template/{emailTemplateId}',
  description:
    "Retrieves the email template for the given Id. If you don't specify the Id, this will return all the email templates.",
  operationId: 'retrieveEmailTemplateWithId',
  request: {
    params: z.object({
      emailTemplateId: z
        .string()
        .openapi({
          param: {
            name: 'emailTemplateId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the email template.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: EmailTemplateResponseSchema } },
    },
    default: { description: 'Error' },
  },
})

export const putApiEmailTemplateEmailTemplateIdRoute = createRoute({
  method: 'put',
  path: '/api/email/template/{emailTemplateId}',
  description: 'Updates the email template with the given Id.',
  operationId: 'updateEmailTemplateWithId',
  request: {
    params: z.object({
      emailTemplateId: z
        .string()
        .openapi({
          param: {
            name: 'emailTemplateId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the email template to update.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EmailTemplateRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: EmailTemplateResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiEmailTemplateEmailTemplateIdRoute = createRoute({
  method: 'post',
  path: '/api/email/template/{emailTemplateId}',
  description:
    'Creates an email template. You can optionally specify an Id for the template, if not provided one will be generated.',
  operationId: 'createEmailTemplateWithId',
  request: {
    params: z.object({
      emailTemplateId: z
        .string()
        .openapi({
          param: {
            name: 'emailTemplateId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description:
              'The Id for the template. If not provided a secure random UUID will be generated.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EmailTemplateRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: EmailTemplateResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const deleteApiEmailTemplateEmailTemplateIdRoute = createRoute({
  method: 'delete',
  path: '/api/email/template/{emailTemplateId}',
  description: 'Deletes the email template for the given Id.',
  operationId: 'deleteEmailTemplateWithId',
  request: {
    params: z.object({
      emailTemplateId: z
        .string()
        .openapi({
          param: {
            name: 'emailTemplateId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the email template to delete.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const patchApiEmailTemplateEmailTemplateIdRoute = createRoute({
  method: 'patch',
  path: '/api/email/template/{emailTemplateId}',
  description: 'Updates, via PATCH, the email template with the given Id.',
  operationId: 'patchEmailTemplateWithId',
  request: {
    params: z.object({
      emailTemplateId: z
        .string()
        .openapi({
          param: {
            name: 'emailTemplateId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the email template to update.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EmailTemplateRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: EmailTemplateResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiEntityRoute = createRoute({
  method: 'post',
  path: '/api/entity',
  description:
    'Creates an Entity. You can optionally specify an Id for the Entity. If not provided one will be generated.',
  operationId: 'createEntity',
  request: {
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EntityRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: EntityResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiEntityGrantSearchRoute = createRoute({
  method: 'get',
  path: '/api/entity/grant/search',
  description: 'Searches entity grants with the specified criteria and pagination.',
  operationId: 'searchEntityGrantsByParametersWithId',
  request: {
    query: z.object({
      entityId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'entityId',
            in: 'query',
            schema: { type: 'string' },
            description: 'The entity Id to search for grants on.',
            required: false,
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            schema: { type: 'string' },
            description:
              'The name of the entity grant to search for. Supports wildcard search using *.',
            required: false,
          },
        }),
      userId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'userId',
            in: 'query',
            schema: { type: 'string' },
            description: 'The user Id to search for grants on.',
            required: false,
          },
        }),
      numberOfResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'numberOfResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'The number of results to return. Defaults to 25.',
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'orderBy',
            in: 'query',
            schema: { type: 'string' },
            description: 'The field to order the results by.',
            required: false,
          },
        }),
      startRow: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'startRow',
            in: 'query',
            schema: { type: 'string' },
            description: 'The offset into the total results. Defaults to 0.',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: EntityGrantSearchResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiEntityGrantSearchRoute = createRoute({
  method: 'post',
  path: '/api/entity/grant/search',
  description: 'Searches Entity Grants with the specified criteria and pagination.',
  operationId: 'searchEntityGrantsWithId',
  request: {
    body: { content: { 'application/json': { schema: EntityGrantSearchRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: EntityGrantSearchResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiEntitySearchRoute = createRoute({
  method: 'get',
  path: '/api/entity/search',
  description: 'Retrieves the entities for the given Ids. If any Id is invalid, it is ignored.',
  operationId: 'searchEntitiesByIdsWithId',
  request: {
    query: z.object({
      ids: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'ids',
            in: 'query',
            schema: { type: 'string' },
            description: 'The entity ids to search for.',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: EntitySearchResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const putApiEntitySearchRoute = createRoute({
  method: 'put',
  path: '/api/entity/search',
  description:
    'Request a refresh of the Entity search index. This API is not generally necessary and the search index will become consistent in a reasonable amount of time. There may be scenarios where you may wish to manually request an index refresh. One example may be  if you are using the Search API or Delete Tenant API immediately following a Entity Create etc, you may wish to request a refresh to  ensure the index immediately current before making a query request to the search index.',
  operationId: 'refreshEntitySearchIndexWithId',
  responses: { 200: { description: 'Success' }, default: { description: 'Error' } },
})

export const postApiEntitySearchRoute = createRoute({
  method: 'post',
  path: '/api/entity/search',
  description: 'Searches entities with the specified criteria and pagination.',
  operationId: 'searchEntitiesWithId',
  request: { body: { content: { 'application/json': { schema: EntitySearchRequestSchema } } } },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: EntitySearchResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiEntityTypeRoute = createRoute({
  method: 'get',
  path: '/api/entity/type',
  description: 'Retrieves all the Entity Types.',
  operationId: 'retrieveEntityTypesWithId',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: EntityTypeResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiEntityTypeRoute = createRoute({
  method: 'post',
  path: '/api/entity/type',
  description:
    'Creates a Entity Type. You can optionally specify an Id for the Entity Type, if not provided one will be generated.',
  operationId: 'createEntityType',
  request: { body: { content: { 'application/json': { schema: EntityTypeRequestSchema } } } },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: EntityTypeResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiEntityTypeSearchRoute = createRoute({
  method: 'get',
  path: '/api/entity/type/search',
  description: 'Searches entity types with the specified criteria and pagination.',
  operationId: 'searchEntityTypesByParametersWithId',
  request: {
    query: z.object({
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            schema: { type: 'string' },
            description:
              'The name of the entity type to search for. Use * to return all entity types.',
            required: false,
          },
        }),
      numberOfResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'numberOfResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'The number of results to return. Defaults to 25.',
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'orderBy',
            in: 'query',
            schema: { type: 'string' },
            description:
              'The field to order the results by. Supported values: insertInstant, lastUpdateInstant, name.',
            required: false,
          },
        }),
      startRow: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'startRow',
            in: 'query',
            schema: { type: 'string' },
            description: 'The offset into the total results. Defaults to 0.',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: EntityTypeSearchResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiEntityTypeSearchRoute = createRoute({
  method: 'post',
  path: '/api/entity/type/search',
  description: 'Searches the entity types with the specified criteria and pagination.',
  operationId: 'searchEntityTypesWithId',
  request: { body: { content: { 'application/json': { schema: EntityTypeSearchRequestSchema } } } },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: EntityTypeSearchResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiEntityTypeEntityTypeIdRoute = createRoute({
  method: 'get',
  path: '/api/entity/type/{entityTypeId}',
  description: 'Retrieves the Entity Type for the given Id.',
  operationId: 'retrieveEntityTypeWithId',
  request: {
    params: z.object({
      entityTypeId: z
        .string()
        .openapi({
          param: {
            name: 'entityTypeId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the Entity Type.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: EntityTypeResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const putApiEntityTypeEntityTypeIdRoute = createRoute({
  method: 'put',
  path: '/api/entity/type/{entityTypeId}',
  description: 'Updates the Entity Type with the given Id.',
  operationId: 'updateEntityTypeWithId',
  request: {
    params: z.object({
      entityTypeId: z
        .string()
        .openapi({
          param: {
            name: 'entityTypeId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the Entity Type to update.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EntityTypeRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: EntityTypeResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiEntityTypeEntityTypeIdRoute = createRoute({
  method: 'post',
  path: '/api/entity/type/{entityTypeId}',
  description:
    'Creates a Entity Type. You can optionally specify an Id for the Entity Type, if not provided one will be generated.',
  operationId: 'createEntityTypeWithId',
  request: {
    params: z.object({
      entityTypeId: z
        .string()
        .openapi({
          param: {
            name: 'entityTypeId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description:
              'The Id for the Entity Type. If not provided a secure random UUID will be generated.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EntityTypeRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: EntityTypeResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const deleteApiEntityTypeEntityTypeIdRoute = createRoute({
  method: 'delete',
  path: '/api/entity/type/{entityTypeId}',
  description: 'Deletes the Entity Type for the given Id.',
  operationId: 'deleteEntityTypeWithId',
  request: {
    params: z.object({
      entityTypeId: z
        .string()
        .openapi({
          param: {
            name: 'entityTypeId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the Entity Type to delete.',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const patchApiEntityTypeEntityTypeIdRoute = createRoute({
  method: 'patch',
  path: '/api/entity/type/{entityTypeId}',
  description: 'Updates, via PATCH, the Entity Type with the given Id.',
  operationId: 'patchEntityTypeWithId',
  request: {
    params: z.object({
      entityTypeId: z
        .string()
        .openapi({
          param: {
            name: 'entityTypeId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the Entity Type to update.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EntityTypeRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: EntityTypeResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiEntityTypeEntityTypeIdPermissionRoute = createRoute({
  method: 'post',
  path: '/api/entity/type/{entityTypeId}/permission',
  description:
    'Creates a new permission for an entity type. You must specify the Id of the entity type you are creating the permission for. You can optionally specify an Id for the permission inside the EntityTypePermission object itself, if not provided one will be generated.',
  operationId: 'createEntityTypePermission',
  request: {
    params: z.object({
      entityTypeId: z
        .string()
        .openapi({
          param: {
            name: 'entityTypeId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the entity type to create the permission on.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EntityTypeRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: EntityTypeResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const putApiEntityTypeEntityTypeIdPermissionPermissionIdRoute = createRoute({
  method: 'put',
  path: '/api/entity/type/{entityTypeId}/permission/{permissionId}',
  description: 'Updates the permission with the given Id for the entity type.',
  operationId: 'updateEntityTypePermissionWithId',
  request: {
    params: z.object({
      entityTypeId: z
        .string()
        .openapi({
          param: {
            name: 'entityTypeId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the entityType that the permission belongs to.',
          },
        }),
      permissionId: z
        .string()
        .openapi({
          param: {
            name: 'permissionId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the permission to update.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EntityTypeRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: EntityTypeResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiEntityTypeEntityTypeIdPermissionPermissionIdRoute = createRoute({
  method: 'post',
  path: '/api/entity/type/{entityTypeId}/permission/{permissionId}',
  description:
    'Creates a new permission for an entity type. You must specify the Id of the entity type you are creating the permission for. You can optionally specify an Id for the permission inside the EntityTypePermission object itself, if not provided one will be generated.',
  operationId: 'createEntityTypePermissionWithId',
  request: {
    params: z.object({
      entityTypeId: z
        .string()
        .openapi({
          param: {
            name: 'entityTypeId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the entity type to create the permission on.',
          },
        }),
      permissionId: z
        .string()
        .openapi({
          param: {
            name: 'permissionId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description:
              'The Id of the permission. If not provided a secure random UUID will be generated.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EntityTypeRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: EntityTypeResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const deleteApiEntityTypeEntityTypeIdPermissionPermissionIdRoute = createRoute({
  method: 'delete',
  path: '/api/entity/type/{entityTypeId}/permission/{permissionId}',
  description:
    'Hard deletes a permission. This is a dangerous operation and should not be used in most circumstances. This permanently removes the given permission from all grants that had it.',
  operationId: 'deleteEntityTypePermissionWithId',
  request: {
    params: z.object({
      entityTypeId: z
        .string()
        .openapi({
          param: {
            name: 'entityTypeId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the entityType the the permission belongs to.',
          },
        }),
      permissionId: z
        .string()
        .openapi({
          param: {
            name: 'permissionId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the permission to delete.',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const patchApiEntityTypeEntityTypeIdPermissionPermissionIdRoute = createRoute({
  method: 'patch',
  path: '/api/entity/type/{entityTypeId}/permission/{permissionId}',
  description: 'Patches the permission with the given Id for the entity type.',
  operationId: 'patchEntityTypePermissionWithId',
  request: {
    params: z.object({
      entityTypeId: z
        .string()
        .openapi({
          param: {
            name: 'entityTypeId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the entityType that the permission belongs to.',
          },
        }),
      permissionId: z
        .string()
        .openapi({
          param: {
            name: 'permissionId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the permission to patch.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EntityTypeRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: EntityTypeResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiEntityEntityIdRoute = createRoute({
  method: 'get',
  path: '/api/entity/{entityId}',
  description: 'Retrieves the Entity for the given Id.',
  operationId: 'retrieveEntityWithId',
  request: {
    params: z.object({
      entityId: z
        .string()
        .openapi({
          param: {
            name: 'entityId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the Entity.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: EntityResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const putApiEntityEntityIdRoute = createRoute({
  method: 'put',
  path: '/api/entity/{entityId}',
  description: 'Updates the Entity with the given Id.',
  operationId: 'updateEntityWithId',
  request: {
    params: z.object({
      entityId: z
        .string()
        .openapi({
          param: {
            name: 'entityId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the Entity to update.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EntityRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: EntityResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiEntityEntityIdRoute = createRoute({
  method: 'post',
  path: '/api/entity/{entityId}',
  description:
    'Creates an Entity. You can optionally specify an Id for the Entity. If not provided one will be generated.',
  operationId: 'createEntityWithId',
  request: {
    params: z.object({
      entityId: z
        .string()
        .openapi({
          param: {
            name: 'entityId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description:
              'The Id for the Entity. If not provided a secure random UUID will be generated.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EntityRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: EntityResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const deleteApiEntityEntityIdRoute = createRoute({
  method: 'delete',
  path: '/api/entity/{entityId}',
  description: 'Deletes the Entity for the given Id.',
  operationId: 'deleteEntityWithId',
  request: {
    params: z.object({
      entityId: z
        .string()
        .openapi({
          param: {
            name: 'entityId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the Entity to delete.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const patchApiEntityEntityIdRoute = createRoute({
  method: 'patch',
  path: '/api/entity/{entityId}',
  description: 'Updates, via PATCH, the Entity with the given Id.',
  operationId: 'patchEntityWithId',
  request: {
    params: z.object({
      entityId: z
        .string()
        .openapi({
          param: {
            name: 'entityId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the Entity Type to update.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EntityRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: EntityResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiEntityEntityIdGrantRoute = createRoute({
  method: 'get',
  path: '/api/entity/{entityId}/grant',
  description: 'Retrieves an Entity Grant for the given Entity and User/Entity.',
  operationId: 'retrieveEntityGrantWithId',
  request: {
    query: z.object({
      recipientEntityId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'recipientEntityId',
            in: 'query',
            schema: { type: 'string' },
            description: 'The Id of the Entity that the Entity Grant is for.',
            required: false,
          },
        }),
      userId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'userId',
            in: 'query',
            schema: { type: 'string' },
            description: 'The Id of the User that the Entity Grant is for.',
            required: false,
          },
        }),
    }),
    params: z.object({
      entityId: z
        .string()
        .openapi({
          param: {
            name: 'entityId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the Entity.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: EntityGrantResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiEntityEntityIdGrantRoute = createRoute({
  method: 'post',
  path: '/api/entity/{entityId}/grant',
  description:
    'Creates or updates an Entity Grant. This is when a User/Entity is granted permissions to an Entity.',
  operationId: 'upsertEntityGrantWithId',
  request: {
    params: z.object({
      entityId: z
        .string()
        .openapi({
          param: {
            name: 'entityId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the Entity that the User/Entity is being granted access to.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EntityGrantRequestSchema } } },
  },
  responses: {
    200: { description: 'Success' },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const deleteApiEntityEntityIdGrantRoute = createRoute({
  method: 'delete',
  path: '/api/entity/{entityId}/grant',
  description: 'Deletes an Entity Grant for the given User or Entity.',
  operationId: 'deleteEntityGrantWithId',
  request: {
    query: z.object({
      recipientEntityId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'recipientEntityId',
            in: 'query',
            schema: { type: 'string' },
            description: 'The Id of the Entity that the Entity Grant is for.',
            required: false,
          },
        }),
      userId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'userId',
            in: 'query',
            schema: { type: 'string' },
            description: 'The Id of the User that the Entity Grant is for.',
            required: false,
          },
        }),
    }),
    params: z.object({
      entityId: z
        .string()
        .openapi({
          param: {
            name: 'entityId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the Entity that the Entity Grant is being deleted for.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiFormRoute = createRoute({
  method: 'get',
  path: '/api/form',
  description: 'Retrieves all the forms.',
  operationId: 'retrieveFormsWithId',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: FormResponseSchema } },
    },
    default: { description: 'Error' },
  },
})

export const postApiFormRoute = createRoute({
  method: 'post',
  path: '/api/form',
  description:
    'Creates a form.  You can optionally specify an Id for the form, if not provided one will be generated.',
  operationId: 'createForm',
  request: { body: { content: { 'application/json': { schema: FormRequestSchema } } } },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: FormResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiFormFieldRoute = createRoute({
  method: 'get',
  path: '/api/form/field',
  description: 'Retrieves all the forms fields',
  operationId: 'retrieveFormFieldsWithId',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: FormFieldResponseSchema } },
    },
    default: { description: 'Error' },
  },
})

export const postApiFormFieldRoute = createRoute({
  method: 'post',
  path: '/api/form/field',
  description:
    'Creates a form field.  You can optionally specify an Id for the form, if not provided one will be generated.',
  operationId: 'createFormField',
  request: { body: { content: { 'application/json': { schema: FormFieldRequestSchema } } } },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: FormFieldResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiFormFieldFieldIdRoute = createRoute({
  method: 'get',
  path: '/api/form/field/{fieldId}',
  description: 'Retrieves the form field with the given Id.',
  operationId: 'retrieveFormFieldWithId',
  request: {
    params: z.object({
      fieldId: z
        .string()
        .openapi({
          param: {
            name: 'fieldId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the form field.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: FormFieldResponseSchema } },
    },
    default: { description: 'Error' },
  },
})

export const putApiFormFieldFieldIdRoute = createRoute({
  method: 'put',
  path: '/api/form/field/{fieldId}',
  description: 'Updates the form field with the given Id.',
  operationId: 'updateFormFieldWithId',
  request: {
    params: z.object({
      fieldId: z
        .string()
        .openapi({
          param: {
            name: 'fieldId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the form field to update.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: FormFieldRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: FormFieldResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiFormFieldFieldIdRoute = createRoute({
  method: 'post',
  path: '/api/form/field/{fieldId}',
  description:
    'Creates a form field.  You can optionally specify an Id for the form, if not provided one will be generated.',
  operationId: 'createFormFieldWithId',
  request: {
    params: z.object({
      fieldId: z
        .string()
        .openapi({
          param: {
            name: 'fieldId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description:
              'The Id for the form field. If not provided a secure random UUID will be generated.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: FormFieldRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: FormFieldResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const deleteApiFormFieldFieldIdRoute = createRoute({
  method: 'delete',
  path: '/api/form/field/{fieldId}',
  description: 'Deletes the form field for the given Id.',
  operationId: 'deleteFormFieldWithId',
  request: {
    params: z.object({
      fieldId: z
        .string()
        .openapi({
          param: {
            name: 'fieldId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the form field to delete.',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const patchApiFormFieldFieldIdRoute = createRoute({
  method: 'patch',
  path: '/api/form/field/{fieldId}',
  description: 'Patches the form field with the given Id.',
  operationId: 'patchFormFieldWithId',
  request: {
    params: z.object({
      fieldId: z
        .string()
        .openapi({
          param: {
            name: 'fieldId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the form field to patch.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: FormFieldRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: FormFieldResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiFormFormIdRoute = createRoute({
  method: 'get',
  path: '/api/form/{formId}',
  description: 'Retrieves the form with the given Id.',
  operationId: 'retrieveFormWithId',
  request: {
    params: z.object({
      formId: z
        .string()
        .openapi({
          param: {
            name: 'formId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the form.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: FormResponseSchema } },
    },
    default: { description: 'Error' },
  },
})

export const putApiFormFormIdRoute = createRoute({
  method: 'put',
  path: '/api/form/{formId}',
  description: 'Updates the form with the given Id.',
  operationId: 'updateFormWithId',
  request: {
    params: z.object({
      formId: z
        .string()
        .openapi({
          param: {
            name: 'formId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the form to update.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: FormRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: FormResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiFormFormIdRoute = createRoute({
  method: 'post',
  path: '/api/form/{formId}',
  description:
    'Creates a form.  You can optionally specify an Id for the form, if not provided one will be generated.',
  operationId: 'createFormWithId',
  request: {
    params: z.object({
      formId: z
        .string()
        .openapi({
          param: {
            name: 'formId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description:
              'The Id for the form. If not provided a secure random UUID will be generated.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: FormRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: FormResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const deleteApiFormFormIdRoute = createRoute({
  method: 'delete',
  path: '/api/form/{formId}',
  description: 'Deletes the form for the given Id.',
  operationId: 'deleteFormWithId',
  request: {
    params: z.object({
      formId: z
        .string()
        .openapi({
          param: {
            name: 'formId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the form to delete.',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const patchApiFormFormIdRoute = createRoute({
  method: 'patch',
  path: '/api/form/{formId}',
  description: 'Patches the form with the given Id.',
  operationId: 'patchFormWithId',
  request: {
    params: z.object({
      formId: z
        .string()
        .openapi({
          param: {
            name: 'formId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the form to patch.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: FormRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: FormResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiGroupRoute = createRoute({
  method: 'get',
  path: '/api/group',
  description: 'Retrieves all the groups.',
  operationId: 'retrieveGroupsWithId',
  request: {
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GroupResponseSchema } },
    },
    default: { description: 'Error' },
  },
})

export const postApiGroupRoute = createRoute({
  method: 'post',
  path: '/api/group',
  description:
    'Creates a group. You can optionally specify an Id for the group, if not provided one will be generated.',
  operationId: 'createGroup',
  request: {
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GroupRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GroupResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const putApiGroupMemberRoute = createRoute({
  method: 'put',
  path: '/api/group/member',
  description: 'Creates a member in a group.',
  operationId: 'updateGroupMembersWithId',
  request: { body: { content: { 'application/json': { schema: MemberRequestSchema } } } },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: MemberResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiGroupMemberRoute = createRoute({
  method: 'post',
  path: '/api/group/member',
  description: 'Creates a member in a group.',
  operationId: 'createGroupMembersWithId',
  request: { body: { content: { 'application/json': { schema: MemberRequestSchema } } } },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: MemberResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const deleteApiGroupMemberRoute = createRoute({
  method: 'delete',
  path: '/api/group/member',
  description: 'Removes users as members of a group.',
  operationId: 'deleteGroupMembersWithId',
  request: { body: { content: { 'application/json': { schema: MemberDeleteRequestSchema } } } },
  responses: {
    200: { description: 'Success' },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiGroupMemberSearchRoute = createRoute({
  method: 'post',
  path: '/api/group/member/search',
  description: 'Searches group members with the specified criteria and pagination.',
  operationId: 'searchGroupMembersWithId',
  request: {
    body: { content: { 'application/json': { schema: GroupMemberSearchRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GroupMemberSearchResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiGroupSearchRoute = createRoute({
  method: 'post',
  path: '/api/group/search',
  description: 'Searches groups with the specified criteria and pagination.',
  operationId: 'searchGroupsWithId',
  request: { body: { content: { 'application/json': { schema: GroupSearchRequestSchema } } } },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GroupSearchResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiGroupGroupIdRoute = createRoute({
  method: 'get',
  path: '/api/group/{groupId}',
  description: 'Retrieves the group for the given Id.',
  operationId: 'retrieveGroupWithId',
  request: {
    params: z.object({
      groupId: z
        .string()
        .openapi({
          param: {
            name: 'groupId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the group.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GroupResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const putApiGroupGroupIdRoute = createRoute({
  method: 'put',
  path: '/api/group/{groupId}',
  description: 'Updates the group with the given Id.',
  operationId: 'updateGroupWithId',
  request: {
    params: z.object({
      groupId: z
        .string()
        .openapi({
          param: {
            name: 'groupId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the group to update.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GroupRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GroupResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiGroupGroupIdRoute = createRoute({
  method: 'post',
  path: '/api/group/{groupId}',
  description:
    'Creates a group. You can optionally specify an Id for the group, if not provided one will be generated.',
  operationId: 'createGroupWithId',
  request: {
    params: z.object({
      groupId: z
        .string()
        .openapi({
          param: {
            name: 'groupId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description:
              'The Id for the group. If not provided a secure random UUID will be generated.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GroupRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GroupResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const deleteApiGroupGroupIdRoute = createRoute({
  method: 'delete',
  path: '/api/group/{groupId}',
  description: 'Deletes the group for the given Id.',
  operationId: 'deleteGroupWithId',
  request: {
    params: z.object({
      groupId: z
        .string()
        .openapi({
          param: {
            name: 'groupId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the group to delete.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const patchApiGroupGroupIdRoute = createRoute({
  method: 'patch',
  path: '/api/group/{groupId}',
  description: 'Updates, via PATCH, the group with the given Id.',
  operationId: 'patchGroupWithId',
  request: {
    params: z.object({
      groupId: z
        .string()
        .openapi({
          param: {
            name: 'groupId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the group to update.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GroupRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GroupResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiHealthRoute = createRoute({
  method: 'get',
  path: '/api/health',
  description:
    'Retrieves the FusionAuth system health. This API will return 200 if the system is healthy, and 500 if the system is un-healthy.',
  operationId: 'retrieveSystemHealthWithId',
  responses: { 200: { description: 'Success' }, default: { description: 'Error' } },
})

export const getApiIdentityProviderRoute = createRoute({
  method: 'get',
  path: '/api/identity-provider',
  description:
    'Retrieves one or more identity provider for the given type. For types such as Google, Facebook, Twitter and LinkedIn, only a single  identity provider can exist. For types such as OpenID Connect and SAMLv2 more than one identity provider can be configured so this request  may return multiple identity providers.',
  operationId: 'retrieveIdentityProviderByTypeWithId',
  request: {
    query: z.object({
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            schema: { type: 'string' },
            description: 'The type of the identity provider.',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: IdentityProviderResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiIdentityProviderRoute = createRoute({
  method: 'post',
  path: '/api/identity-provider',
  description:
    'Creates an identity provider. You can optionally specify an Id for the identity provider, if not provided one will be generated.',
  operationId: 'createIdentityProvider',
  request: { body: { content: { 'application/json': { schema: IdentityProviderRequestSchema } } } },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: IdentityProviderResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiIdentityProviderLinkRoute = createRoute({
  method: 'get',
  path: '/api/identity-provider/link',
  description:
    'Retrieve all Identity Provider users (links) for the user. Specify the optional identityProviderId to retrieve links for a particular IdP. OR Retrieve a single Identity Provider user (link).',
  operationId: 'retrieveIdentityProviderLink',
  request: {
    query: z.object({
      identityProviderId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'identityProviderId',
            in: 'query',
            schema: { type: 'string' },
            description:
              'The unique Id of the identity provider. Specify this value to reduce the links returned to those for a particular IdP.',
            required: false,
          },
        }),
      userId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'userId',
            in: 'query',
            schema: { type: 'string' },
            description: 'The unique Id of the user.',
            required: false,
          },
        }),
      identityProviderUserId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'identityProviderUserId',
            in: 'query',
            schema: { type: 'string' },
            description: 'The unique Id of the user in the 3rd party identity provider.',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: IdentityProviderLinkResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiIdentityProviderLinkRoute = createRoute({
  method: 'post',
  path: '/api/identity-provider/link',
  description: 'Link an external user from a 3rd party identity provider to a FusionAuth user.',
  operationId: 'createUserLinkWithId',
  request: {
    body: { content: { 'application/json': { schema: IdentityProviderLinkRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: IdentityProviderLinkResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const deleteApiIdentityProviderLinkRoute = createRoute({
  method: 'delete',
  path: '/api/identity-provider/link',
  description:
    'Remove an existing link that has been made from a 3rd party identity provider to a FusionAuth user.',
  operationId: 'deleteUserLinkWithId',
  request: {
    query: z.object({
      identityProviderId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'identityProviderId',
            in: 'query',
            schema: { type: 'string' },
            description: 'The unique Id of the identity provider.',
            required: false,
          },
        }),
      identityProviderUserId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'identityProviderUserId',
            in: 'query',
            schema: { type: 'string' },
            description: 'The unique Id of the user in the 3rd party identity provider to unlink.',
            required: false,
          },
        }),
      userId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'userId',
            in: 'query',
            schema: { type: 'string' },
            description: 'The unique Id of the FusionAuth user to unlink.',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: IdentityProviderLinkResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiIdentityProviderLinkPendingPendingLinkIdRoute = createRoute({
  method: 'get',
  path: '/api/identity-provider/link/pending/{pendingLinkId}',
  description:
    'Retrieve a pending identity provider link. This is useful to validate a pending link and retrieve meta-data about the identity provider link.',
  operationId: 'retrievePendingLinkWithId',
  request: {
    query: z.object({
      userId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'userId',
            in: 'query',
            schema: { type: 'string' },
            description:
              'The optional userId. When provided additional meta-data will be provided to identify how many links if any the user already has.',
            required: false,
          },
        }),
    }),
    params: z.object({
      pendingLinkId: z
        .string()
        .openapi({
          param: {
            name: 'pendingLinkId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The pending link Id.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: IdentityProviderPendingLinkResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiIdentityProviderLoginRoute = createRoute({
  method: 'post',
  path: '/api/identity-provider/login',
  description:
    'Handles login via third-parties including Social login, external OAuth and OpenID Connect, and other login systems.',
  operationId: 'identityProviderLoginWithId',
  request: {
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: IdentityProviderLoginRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: LoginResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiIdentityProviderLookupRoute = createRoute({
  method: 'get',
  path: '/api/identity-provider/lookup',
  description:
    'Retrieves the identity provider for the given domain and tenantId. A 200 response code indicates the domain is managed by a registered identity provider. A 404 indicates the domain is not managed. OR Retrieves any global identity providers for the given domain. A 200 response code indicates the domain is managed by a registered identity provider. A 404 indicates the domain is not managed.',
  operationId: 'retrieveIdentityProviderLookup',
  request: {
    query: z.object({
      domain: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'domain',
            in: 'query',
            schema: { type: 'string' },
            description: 'The domain or email address to lookup.',
            required: false,
          },
        }),
      tenantId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'tenantId',
            in: 'query',
            schema: { type: 'string' },
            description:
              'If provided, the API searches for an identity provider scoped to the corresponding tenant that manages the requested domain. If no result is found, the API then searches for global identity providers.',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: LookupResponseSchema } },
    },
    default: { description: 'Error' },
  },
})

export const getApiIdentityProviderSearchRoute = createRoute({
  method: 'get',
  path: '/api/identity-provider/search',
  description: 'Searches identity providers with the specified criteria and pagination.',
  operationId: 'searchIdentityProvidersByParametersWithId',
  request: {
    query: z.object({
      applicationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'applicationId',
            in: 'query',
            schema: { type: 'string' },
            description: 'The application Id to search for identity providers.',
            required: false,
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            schema: { type: 'string' },
            description:
              'The name of the identity provider to search for. Supports wildcard search using *.',
            required: false,
          },
        }),
      numberOfResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'numberOfResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'The number of results to return. Defaults to 25.',
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'orderBy',
            in: 'query',
            schema: { type: 'string' },
            description:
              'The field to order the results by. Supported values: enabled, id, insertInstant, name, type.',
            required: false,
          },
        }),
      startRow: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'startRow',
            in: 'query',
            schema: { type: 'string' },
            description: 'The offset into the total results. Defaults to 0.',
            required: false,
          },
        }),
      tenantId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'tenantId',
            in: 'query',
            schema: { type: 'string' },
            description: 'The tenant Id to restrict the results to.',
            required: false,
          },
        }),
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            schema: { type: 'string' },
            description: 'The type of identity provider to search for.',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: IdentityProviderSearchResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiIdentityProviderSearchRoute = createRoute({
  method: 'post',
  path: '/api/identity-provider/search',
  description: 'Searches identity providers with the specified criteria and pagination.',
  operationId: 'searchIdentityProvidersWithId',
  request: {
    body: { content: { 'application/json': { schema: IdentityProviderSearchRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: IdentityProviderSearchResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiIdentityProviderStartRoute = createRoute({
  method: 'post',
  path: '/api/identity-provider/start',
  description:
    'Begins a login request for a 3rd party login that requires user interaction such as HYPR.',
  operationId: 'startIdentityProviderLoginWithId',
  request: {
    body: { content: { 'application/json': { schema: IdentityProviderStartLoginRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: IdentityProviderStartLoginResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiIdentityProviderTestRoute = createRoute({
  method: 'get',
  path: '/api/identity-provider/test',
  description: 'Retrieves the results for an identity provider connection test.',
  operationId: 'retrieveIdentityProviderConnectionTestResultsWithId',
  request: {
    query: z.object({
      connectionTestId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'connectionTestId',
            in: 'query',
            schema: { type: 'string' },
            description: 'The connection test id to retrieve results for.',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: IdentityProviderConnectionTestResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiIdentityProviderTestRoute = createRoute({
  method: 'post',
  path: '/api/identity-provider/test',
  description: 'Begins an identity provider connection test.',
  operationId: 'startIdentityProviderConnectionTestWithId',
  request: {
    body: {
      content: { 'application/json': { schema: IdentityProviderConnectionTestRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: IdentityProviderConnectionTestResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiIdentityProviderIdentityProviderIdRoute = createRoute({
  method: 'get',
  path: '/api/identity-provider/{identityProviderId}',
  description:
    'Retrieves the identity provider for the given Id or all the identity providers if the Id is null.',
  operationId: 'retrieveIdentityProviderWithId',
  request: {
    params: z.object({
      identityProviderId: z
        .string()
        .openapi({
          param: {
            name: 'identityProviderId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The identity provider Id.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: IdentityProviderResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const putApiIdentityProviderIdentityProviderIdRoute = createRoute({
  method: 'put',
  path: '/api/identity-provider/{identityProviderId}',
  description: 'Updates the identity provider with the given Id.',
  operationId: 'updateIdentityProviderWithId',
  request: {
    params: z.object({
      identityProviderId: z
        .string()
        .openapi({
          param: {
            name: 'identityProviderId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the identity provider to update.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: IdentityProviderRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: IdentityProviderResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiIdentityProviderIdentityProviderIdRoute = createRoute({
  method: 'post',
  path: '/api/identity-provider/{identityProviderId}',
  description:
    'Creates an identity provider. You can optionally specify an Id for the identity provider, if not provided one will be generated.',
  operationId: 'createIdentityProviderWithId',
  request: {
    params: z.object({
      identityProviderId: z
        .string()
        .openapi({
          param: {
            name: 'identityProviderId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description:
              'The Id of the identity provider. If not provided a secure random UUID will be generated.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: IdentityProviderRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: IdentityProviderResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const deleteApiIdentityProviderIdentityProviderIdRoute = createRoute({
  method: 'delete',
  path: '/api/identity-provider/{identityProviderId}',
  description: 'Deletes the identity provider for the given Id.',
  operationId: 'deleteIdentityProviderWithId',
  request: {
    params: z.object({
      identityProviderId: z
        .string()
        .openapi({
          param: {
            name: 'identityProviderId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the identity provider to delete.',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const patchApiIdentityProviderIdentityProviderIdRoute = createRoute({
  method: 'patch',
  path: '/api/identity-provider/{identityProviderId}',
  description: 'Updates, via PATCH, the identity provider with the given Id.',
  operationId: 'patchIdentityProviderWithId',
  request: {
    params: z.object({
      identityProviderId: z
        .string()
        .openapi({
          param: {
            name: 'identityProviderId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the identity provider to update.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: IdentityProviderRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: IdentityProviderResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiIdentityVerifyRoute = createRoute({
  method: 'post',
  path: '/api/identity/verify',
  description: 'Administratively verify a user identity.',
  operationId: 'verifyIdentityWithId',
  request: { body: { content: { 'application/json': { schema: VerifyRequestSchema } } } },
  responses: {
    200: { description: 'Success' },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiIdentityVerifyCompleteRoute = createRoute({
  method: 'post',
  path: '/api/identity/verify/complete',
  description:
    'Completes verification of an identity using verification codes from the Verify Start API.',
  operationId: 'completeVerifyIdentityWithId',
  request: { body: { content: { 'application/json': { schema: VerifyCompleteRequestSchema } } } },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: VerifyCompleteResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiIdentityVerifySendRoute = createRoute({
  method: 'post',
  path: '/api/identity/verify/send',
  description:
    'Send a verification code using the appropriate transport for the identity type being verified.',
  operationId: 'sendVerifyIdentityWithId',
  request: { body: { content: { 'application/json': { schema: VerifySendRequestSchema } } } },
  responses: {
    200: { description: 'Success' },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiIdentityVerifyStartRoute = createRoute({
  method: 'post',
  path: '/api/identity/verify/start',
  description:
    'Start a verification of an identity by generating a code. This code can be sent to the User using the Verify Send API Verification Code API or using a mechanism outside of FusionAuth. The verification is completed by using the Verify Complete API with this code.',
  operationId: 'startVerifyIdentityWithId',
  request: { body: { content: { 'application/json': { schema: VerifyStartRequestSchema } } } },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: VerifyStartResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiIntegrationRoute = createRoute({
  method: 'get',
  path: '/api/integration',
  description: 'Retrieves the available integrations.',
  operationId: 'retrieveIntegrationWithId',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: IntegrationResponseSchema } },
    },
    default: { description: 'Error' },
  },
})

export const putApiIntegrationRoute = createRoute({
  method: 'put',
  path: '/api/integration',
  description: 'Updates the available integrations.',
  operationId: 'updateIntegrationsWithId',
  request: { body: { content: { 'application/json': { schema: IntegrationRequestSchema } } } },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: IntegrationResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const patchApiIntegrationRoute = createRoute({
  method: 'patch',
  path: '/api/integration',
  description: 'Updates, via PATCH, the available integrations.',
  operationId: 'patchIntegrationsWithId',
  request: { body: { content: { 'application/json': { schema: IntegrationRequestSchema } } } },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: IntegrationResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiIpAclRoute = createRoute({
  method: 'post',
  path: '/api/ip-acl',
  description:
    'Creates an IP Access Control List. You can optionally specify an Id on this create request, if one is not provided one will be generated.',
  operationId: 'createIPAccessControlList',
  request: {
    body: { content: { 'application/json': { schema: IPAccessControlListRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: IPAccessControlListResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiIpAclSearchRoute = createRoute({
  method: 'get',
  path: '/api/ip-acl/search',
  description: 'Searches IP access control lists with the specified criteria and pagination.',
  operationId: 'searchIPAccessControlListsByParametersWithId',
  request: {
    query: z.object({
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            schema: { type: 'string' },
            description:
              'The name of the IP access control list to search for. Supports wildcard search using *.',
            required: false,
          },
        }),
      numberOfResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'numberOfResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'The number of results to return. Defaults to 25.',
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'orderBy',
            in: 'query',
            schema: { type: 'string' },
            description:
              'The field to order the results by. Supported values: id, insertInstant, lastUpdateInstant, name.',
            required: false,
          },
        }),
      startRow: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'startRow',
            in: 'query',
            schema: { type: 'string' },
            description: 'The offset into the total results. Defaults to 0.',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: IPAccessControlListSearchResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiIpAclSearchRoute = createRoute({
  method: 'post',
  path: '/api/ip-acl/search',
  description: 'Searches the IP Access Control Lists with the specified criteria and pagination.',
  operationId: 'searchIPAccessControlListsWithId',
  request: {
    body: { content: { 'application/json': { schema: IPAccessControlListSearchRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: IPAccessControlListSearchResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const putApiIpAclAccessControlListIdRoute = createRoute({
  method: 'put',
  path: '/api/ip-acl/{accessControlListId}',
  description: 'Updates the IP Access Control List with the given Id.',
  operationId: 'updateIPAccessControlListWithId',
  request: {
    params: z.object({
      accessControlListId: z
        .string()
        .openapi({
          param: {
            name: 'accessControlListId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the IP Access Control List to update.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: IPAccessControlListRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: IPAccessControlListResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiIpAclAccessControlListIdRoute = createRoute({
  method: 'post',
  path: '/api/ip-acl/{accessControlListId}',
  description:
    'Creates an IP Access Control List. You can optionally specify an Id on this create request, if one is not provided one will be generated.',
  operationId: 'createIPAccessControlListWithId',
  request: {
    params: z.object({
      accessControlListId: z
        .string()
        .openapi({
          param: {
            name: 'accessControlListId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description:
              'The Id for the IP Access Control List. If not provided a secure random UUID will be generated.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: IPAccessControlListRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: IPAccessControlListResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const patchApiIpAclAccessControlListIdRoute = createRoute({
  method: 'patch',
  path: '/api/ip-acl/{accessControlListId}',
  description: 'Update the IP Access Control List with the given Id.',
  operationId: 'patchIPAccessControlListWithId',
  request: {
    params: z.object({
      accessControlListId: z
        .string()
        .openapi({
          param: {
            name: 'accessControlListId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the IP Access Control List to patch.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: IPAccessControlListRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: IPAccessControlListResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiIpAclIpAccessControlListIdRoute = createRoute({
  method: 'get',
  path: '/api/ip-acl/{ipAccessControlListId}',
  description: 'Retrieves the IP Access Control List with the given Id.',
  operationId: 'retrieveIPAccessControlListWithId',
  request: {
    params: z.object({
      ipAccessControlListId: z
        .string()
        .openapi({
          param: {
            name: 'ipAccessControlListId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the IP Access Control List.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: IPAccessControlListResponseSchema } },
    },
    default: { description: 'Error' },
  },
})

export const deleteApiIpAclIpAccessControlListIdRoute = createRoute({
  method: 'delete',
  path: '/api/ip-acl/{ipAccessControlListId}',
  description: 'Deletes the IP Access Control List for the given Id.',
  operationId: 'deleteIPAccessControlListWithId',
  request: {
    params: z.object({
      ipAccessControlListId: z
        .string()
        .openapi({
          param: {
            name: 'ipAccessControlListId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the IP Access Control List to delete.',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiJwtIssueRoute = createRoute({
  method: 'get',
  path: '/api/jwt/issue',
  description:
    'Issue a new access token (JWT) for the requested Application after ensuring the provided JWT is valid. A valid access token is properly signed and not expired. <p> This API may be used in an SSO configuration to issue new tokens for another application after the user has obtained a valid token from authentication.',
  operationId: 'issueJWTWithId',
  request: {
    query: z.object({
      applicationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'applicationId',
            in: 'query',
            schema: { type: 'string' },
            description:
              'The Application Id for which you are requesting a new access token be issued.',
            required: false,
          },
        }),
      refreshToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'refreshToken',
            in: 'query',
            schema: { type: 'string' },
            description:
              'An existing refresh token used to request a refresh token in addition to a JWT in the response. <p>The target application represented by the applicationId request parameter must have refresh tokens enabled in order to receive a refresh token in the response.</p>',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: IssueResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
  security: [{ BearerAuth: [] }],
})

export const getApiJwtPublicKeyRoute = createRoute({
  method: 'get',
  path: '/api/jwt/public-key',
  description:
    'Retrieves the Public Key configured for verifying the JSON Web Tokens (JWT) issued by the Login API by the Application Id. OR Retrieves the Public Key configured for verifying JSON Web Tokens (JWT) by the key Id (kid).',
  operationId: 'retrieveJwtPublicKey',
  request: {
    query: z.object({
      applicationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'applicationId',
            in: 'query',
            schema: { type: 'string' },
            description: 'The Id of the Application for which this key is used.',
            required: false,
          },
        }),
      kid: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'kid',
            in: 'query',
            schema: { type: 'string' },
            description: 'The Id of the public key (kid).',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PublicKeyResponseSchema } },
    },
    default: { description: 'Error' },
  },
})

export const postApiJwtReconcileRoute = createRoute({
  method: 'post',
  path: '/api/jwt/reconcile',
  description: 'Reconcile a User to FusionAuth using JWT issued from another Identity Provider.',
  operationId: 'reconcileJWTWithId',
  request: {
    body: { content: { 'application/json': { schema: IdentityProviderLoginRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: LoginResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiJwtRefreshRoute = createRoute({
  method: 'get',
  path: '/api/jwt/refresh',
  description: 'Retrieves the refresh tokens that belong to the user with the given Id.',
  operationId: 'retrieveRefreshTokensWithId',
  request: {
    query: z.object({
      userId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'userId',
            in: 'query',
            schema: { type: 'string' },
            description: 'The Id of the user.',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RefreshTokenResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiJwtRefreshRoute = createRoute({
  method: 'post',
  path: '/api/jwt/refresh',
  description: 'Exchange a refresh token for a new JWT.',
  operationId: 'exchangeRefreshTokenForJWTWithId',
  request: { body: { content: { 'application/json': { schema: RefreshRequestSchema } } } },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: JWTRefreshResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const deleteApiJwtRefreshRoute = createRoute({
  method: 'delete',
  path: '/api/jwt/refresh',
  description:
    "Revokes refresh tokens using the information in the JSON body. The handling for this method is the same as the revokeRefreshToken method and is based on the information you provide in the RefreshDeleteRequest object. See that method for additional information. OR Revoke all refresh tokens that belong to a user by user Id for a specific application by applicationId. OR Revoke all refresh tokens that belong to a user by user Id. OR Revoke all refresh tokens that belong to an application by applicationId. OR Revokes a single refresh token by using the actual refresh token value. This refresh token value is sensitive, so  be careful with this API request. OR Revokes refresh tokens.  Usage examples:   - Delete a single refresh token, pass in only the token.       revokeRefreshToken(token)    - Delete all refresh tokens for a user, pass in only the userId.       revokeRefreshToken(null, userId)    - Delete all refresh tokens for a user for a specific application, pass in both the userId and the applicationId.       revokeRefreshToken(null, userId, applicationId)    - Delete all refresh tokens for an application       revokeRefreshToken(null, null, applicationId)  Note: <code>null</code> may be handled differently depending upon the programming language.  See also: (method names may vary by language... but you'll figure it out)   - revokeRefreshTokenById  - revokeRefreshTokenByToken  - revokeRefreshTokensByUserId  - revokeRefreshTokensByApplicationId  - revokeRefreshTokensByUserIdForApplication",
  operationId: 'deleteJwtRefresh',
  request: {
    query: z.object({
      userId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'userId',
            in: 'query',
            schema: { type: 'string' },
            description:
              'The unique Id of the user that you want to delete all refresh tokens for.',
            required: false,
          },
        }),
      applicationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'applicationId',
            in: 'query',
            schema: { type: 'string' },
            description:
              'The unique Id of the application that you want to delete refresh tokens for.',
            required: false,
          },
        }),
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'token',
            in: 'query',
            schema: { type: 'string' },
            description: 'The refresh token to delete.',
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RefreshTokenRevokeRequestSchema } } },
  },
  responses: {
    200: { description: 'Success' },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiJwtRefreshTokenIdRoute = createRoute({
  method: 'get',
  path: '/api/jwt/refresh/{tokenId}',
  description:
    'Retrieves a single refresh token by unique Id. This is not the same thing as the string value of the refresh token. If you have that, you already have what you need.',
  operationId: 'retrieveRefreshTokenByIdWithId',
  request: {
    params: z.object({
      tokenId: z
        .string()
        .openapi({
          param: {
            name: 'tokenId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the token.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RefreshTokenResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const deleteApiJwtRefreshTokenIdRoute = createRoute({
  method: 'delete',
  path: '/api/jwt/refresh/{tokenId}',
  description:
    'Revokes a single refresh token by the unique Id. The unique Id is not sensitive as it cannot be used to obtain another JWT.',
  operationId: 'revokeRefreshTokenByIdWithId',
  request: {
    params: z.object({
      tokenId: z
        .string()
        .openapi({
          param: {
            name: 'tokenId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The unique Id of the token to delete.',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiJwtValidateRoute = createRoute({
  method: 'get',
  path: '/api/jwt/validate',
  description:
    'Validates the provided JWT (encoded JWT string) to ensure the token is valid. A valid access token is properly signed and not expired. <p> This API may be used to verify the JWT as well as decode the encoded JWT into human readable identity claims.',
  operationId: 'validateJWTWithId',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ValidateResponseSchema } },
    },
    default: { description: 'Error' },
  },
  security: [{ BearerAuth: [] }],
})

export const postApiJwtVendRoute = createRoute({
  method: 'post',
  path: '/api/jwt/vend',
  description:
    "It's a JWT vending machine!  Issue a new access token (JWT) with the provided claims in the request. This JWT is not scoped to a tenant or user, it is a free form  token that will contain what claims you provide. <p> The iat, exp and jti claims will be added by FusionAuth, all other claims must be provided by the caller.  If a TTL is not provided in the request, the TTL will be retrieved from the default Tenant or the Tenant specified on the request either  by way of the X-FusionAuth-TenantId request header, or a tenant scoped API key.",
  operationId: 'vendJWTWithId',
  request: { body: { content: { 'application/json': { schema: JWTVendRequestSchema } } } },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: JWTVendResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiKeyRoute = createRoute({
  method: 'get',
  path: '/api/key',
  description: 'Retrieves all the keys.',
  operationId: 'retrieveKeysWithId',
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: KeyResponseSchema } } },
    default: { description: 'Error' },
  },
})

export const postApiKeyGenerateRoute = createRoute({
  method: 'post',
  path: '/api/key/generate',
  description: 'Generate a new RSA or EC key pair or an HMAC secret.',
  operationId: 'generateKey',
  request: { body: { content: { 'application/json': { schema: KeyRequestSchema } } } },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: KeyResponseSchema } } },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiKeyGenerateKeyIdRoute = createRoute({
  method: 'post',
  path: '/api/key/generate/{keyId}',
  description: 'Generate a new RSA or EC key pair or an HMAC secret.',
  operationId: 'generateKeyWithId',
  request: {
    params: z.object({
      keyId: z
        .string()
        .openapi({
          param: {
            name: 'keyId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description:
              'The Id for the key. If not provided a secure random UUID will be generated.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: KeyRequestSchema } } },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: KeyResponseSchema } } },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiKeyImportRoute = createRoute({
  method: 'post',
  path: '/api/key/import',
  description: 'Import an existing RSA or EC key pair or an HMAC secret.',
  operationId: 'importKey',
  request: { body: { content: { 'application/json': { schema: KeyRequestSchema } } } },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: KeyResponseSchema } } },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiKeyImportKeyIdRoute = createRoute({
  method: 'post',
  path: '/api/key/import/{keyId}',
  description: 'Import an existing RSA or EC key pair or an HMAC secret.',
  operationId: 'importKeyWithId',
  request: {
    params: z.object({
      keyId: z
        .string()
        .openapi({
          param: {
            name: 'keyId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description:
              'The Id for the key. If not provided a secure random UUID will be generated.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: KeyRequestSchema } } },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: KeyResponseSchema } } },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiKeySearchRoute = createRoute({
  method: 'get',
  path: '/api/key/search',
  description: 'Searches keys with the specified criteria and pagination.',
  operationId: 'searchKeysByParametersWithId',
  request: {
    query: z.object({
      algorithm: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'algorithm',
            in: 'query',
            schema: { type: 'string' },
            description: 'The algorithm of the key to search for.',
            required: false,
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            schema: { type: 'string' },
            description: 'The name of the key to search for. Supports wildcard search using *.',
            required: false,
          },
        }),
      numberOfResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'numberOfResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'The number of results to return. Defaults to 25.',
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'orderBy',
            in: 'query',
            schema: { type: 'string' },
            description:
              'The field to order the results by. Supported values: algorithm, expiration, id, insertInstant, name, type.',
            required: false,
          },
        }),
      startRow: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'startRow',
            in: 'query',
            schema: { type: 'string' },
            description: 'The offset into the total results. Defaults to 0.',
            required: false,
          },
        }),
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            schema: { type: 'string' },
            description: 'The type of key to search for. Supported values: EC, HMAC, OKP, RSA.',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: KeySearchResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiKeySearchRoute = createRoute({
  method: 'post',
  path: '/api/key/search',
  description: 'Searches keys with the specified criteria and pagination.',
  operationId: 'searchKeysWithId',
  request: { body: { content: { 'application/json': { schema: KeySearchRequestSchema } } } },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: KeySearchResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiKeyKeyIdRoute = createRoute({
  method: 'get',
  path: '/api/key/{keyId}',
  description: 'Retrieves the key for the given Id.',
  operationId: 'retrieveKeyWithId',
  request: {
    params: z.object({
      keyId: z
        .string()
        .openapi({
          param: {
            name: 'keyId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the key.',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: KeyResponseSchema } } },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const putApiKeyKeyIdRoute = createRoute({
  method: 'put',
  path: '/api/key/{keyId}',
  description: 'Updates the key with the given Id.',
  operationId: 'updateKeyWithId',
  request: {
    params: z.object({
      keyId: z
        .string()
        .openapi({
          param: {
            name: 'keyId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the key to update.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: KeyRequestSchema } } },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: KeyResponseSchema } } },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const deleteApiKeyKeyIdRoute = createRoute({
  method: 'delete',
  path: '/api/key/{keyId}',
  description: 'Deletes the key for the given Id.',
  operationId: 'deleteKeyWithId',
  request: {
    params: z.object({
      keyId: z
        .string()
        .openapi({
          param: {
            name: 'keyId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the key to delete.',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiLambdaRoute = createRoute({
  method: 'get',
  path: '/api/lambda',
  description: 'Retrieves all the lambdas for the provided type.',
  operationId: 'retrieveLambdasByTypeWithId',
  request: {
    query: z.object({
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            schema: { type: 'string' },
            description: 'The type of the lambda to return.',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: LambdaResponseSchema } },
    },
    default: { description: 'Error' },
  },
})

export const postApiLambdaRoute = createRoute({
  method: 'post',
  path: '/api/lambda',
  description:
    'Creates a Lambda. You can optionally specify an Id for the lambda, if not provided one will be generated.',
  operationId: 'createLambda',
  request: { body: { content: { 'application/json': { schema: LambdaRequestSchema } } } },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: LambdaResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiLambdaSearchRoute = createRoute({
  method: 'post',
  path: '/api/lambda/search',
  description: 'Searches lambdas with the specified criteria and pagination.',
  operationId: 'searchLambdasWithId',
  request: { body: { content: { 'application/json': { schema: LambdaSearchRequestSchema } } } },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: LambdaSearchResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiLambdaLambdaIdRoute = createRoute({
  method: 'get',
  path: '/api/lambda/{lambdaId}',
  description: 'Retrieves the lambda for the given Id.',
  operationId: 'retrieveLambdaWithId',
  request: {
    params: z.object({
      lambdaId: z
        .string()
        .openapi({
          param: {
            name: 'lambdaId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the lambda.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: LambdaResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const putApiLambdaLambdaIdRoute = createRoute({
  method: 'put',
  path: '/api/lambda/{lambdaId}',
  description: 'Updates the lambda with the given Id.',
  operationId: 'updateLambdaWithId',
  request: {
    params: z.object({
      lambdaId: z
        .string()
        .openapi({
          param: {
            name: 'lambdaId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the lambda to update.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: LambdaRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: LambdaResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiLambdaLambdaIdRoute = createRoute({
  method: 'post',
  path: '/api/lambda/{lambdaId}',
  description:
    'Creates a Lambda. You can optionally specify an Id for the lambda, if not provided one will be generated.',
  operationId: 'createLambdaWithId',
  request: {
    params: z.object({
      lambdaId: z
        .string()
        .openapi({
          param: {
            name: 'lambdaId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description:
              'The Id for the lambda. If not provided a secure random UUID will be generated.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: LambdaRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: LambdaResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const deleteApiLambdaLambdaIdRoute = createRoute({
  method: 'delete',
  path: '/api/lambda/{lambdaId}',
  description: 'Deletes the lambda for the given Id.',
  operationId: 'deleteLambdaWithId',
  request: {
    params: z.object({
      lambdaId: z
        .string()
        .openapi({
          param: {
            name: 'lambdaId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the lambda to delete.',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const patchApiLambdaLambdaIdRoute = createRoute({
  method: 'patch',
  path: '/api/lambda/{lambdaId}',
  description: 'Updates, via PATCH, the lambda with the given Id.',
  operationId: 'patchLambdaWithId',
  request: {
    params: z.object({
      lambdaId: z
        .string()
        .openapi({
          param: {
            name: 'lambdaId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the lambda to update.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: LambdaRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: LambdaResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const putApiLoginRoute = createRoute({
  method: 'put',
  path: '/api/login',
  description:
    "Sends a ping to FusionAuth indicating that the user was automatically logged into an application. When using FusionAuth's SSO or your own, you should call this if the user is already logged in centrally, but accesses an application where they no longer have a session. This helps correctly track login counts, times and helps with reporting.",
  operationId: 'loginPingWithRequestWithId',
  request: {
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: LoginPingRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: LoginResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiLoginRoute = createRoute({
  method: 'post',
  path: '/api/login',
  description:
    'Authenticates a user to FusionAuth.   This API optionally requires an API key. See <code>Application.loginConfiguration.requireAuthentication</code>.',
  operationId: 'loginWithId',
  request: {
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: LoginRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: LoginResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const putApiLoginUserIdApplicationIdRoute = createRoute({
  method: 'put',
  path: '/api/login/{userId}/{applicationId}',
  description:
    "Sends a ping to FusionAuth indicating that the user was automatically logged into an application. When using FusionAuth's SSO or your own, you should call this if the user is already logged in centrally, but accesses an application where they no longer have a session. This helps correctly track login counts, times and helps with reporting.",
  operationId: 'loginPingWithId',
  request: {
    query: z.object({
      ipAddress: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'ipAddress',
            in: 'query',
            schema: { type: 'string' },
            description:
              'The IP address of the end-user that is logging in. If a null value is provided the IP address will be that of the client or last proxy that sent the request.',
            required: false,
          },
        }),
    }),
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the user that was logged in.',
          },
        }),
      applicationId: z
        .string()
        .openapi({
          param: {
            name: 'applicationId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the application that they logged into.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: LoginResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiLogoutRoute = createRoute({
  method: 'post',
  path: '/api/logout',
  description:
    'The Logout API is intended to be used to remove the refresh token and access token cookies if they exist on the client and revoke the refresh token stored. This API takes the refresh token in the JSON body. OR The Logout API is intended to be used to remove the refresh token and access token cookies if they exist on the client and revoke the refresh token stored. This API does nothing if the request does not contain an access token or refresh token cookies.',
  operationId: 'createLogout',
  request: {
    query: z.object({
      global: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'global',
            in: 'query',
            schema: { type: 'string' },
            description:
              'When this value is set to true all the refresh tokens issued to the owner of the provided token will be revoked.',
            required: false,
          },
        }),
      refreshToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'refreshToken',
            in: 'query',
            schema: { type: 'string' },
            description:
              'The refresh_token as a request parameter instead of coming in via a cookie. If provided this takes precedence over the cookie.',
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: LogoutRequestSchema } } },
  },
  responses: { 200: { description: 'Success' }, default: { description: 'Error' } },
})

export const getApiMessageTemplateRoute = createRoute({
  method: 'get',
  path: '/api/message/template',
  description:
    "Retrieves the message template for the given Id. If you don't specify the Id, this will return all the message templates.",
  operationId: 'retrieveMessageTemplate',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: MessageTemplateResponseSchema } },
    },
    default: { description: 'Error' },
  },
})

export const postApiMessageTemplateRoute = createRoute({
  method: 'post',
  path: '/api/message/template',
  description:
    'Creates an message template. You can optionally specify an Id for the template, if not provided one will be generated.',
  operationId: 'createMessageTemplate',
  request: { body: { content: { 'application/json': { schema: MessageTemplateRequestSchema } } } },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: MessageTemplateResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiMessageTemplatePreviewRoute = createRoute({
  method: 'post',
  path: '/api/message/template/preview',
  description:
    'Creates a preview of the message template provided in the request, normalized to a given locale.',
  operationId: 'retrieveMessageTemplatePreviewWithId',
  request: {
    body: { content: { 'application/json': { schema: PreviewMessageTemplateRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PreviewMessageTemplateResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiMessageTemplateMessageTemplateIdRoute = createRoute({
  method: 'get',
  path: '/api/message/template/{messageTemplateId}',
  description:
    "Retrieves the message template for the given Id. If you don't specify the Id, this will return all the message templates.",
  operationId: 'retrieveMessageTemplateWithId',
  request: {
    params: z.object({
      messageTemplateId: z
        .string()
        .openapi({
          param: {
            name: 'messageTemplateId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the message template.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: MessageTemplateResponseSchema } },
    },
    default: { description: 'Error' },
  },
})

export const putApiMessageTemplateMessageTemplateIdRoute = createRoute({
  method: 'put',
  path: '/api/message/template/{messageTemplateId}',
  description: 'Updates the message template with the given Id.',
  operationId: 'updateMessageTemplateWithId',
  request: {
    params: z.object({
      messageTemplateId: z
        .string()
        .openapi({
          param: {
            name: 'messageTemplateId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the message template to update.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: MessageTemplateRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: MessageTemplateResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiMessageTemplateMessageTemplateIdRoute = createRoute({
  method: 'post',
  path: '/api/message/template/{messageTemplateId}',
  description:
    'Creates an message template. You can optionally specify an Id for the template, if not provided one will be generated.',
  operationId: 'createMessageTemplateWithId',
  request: {
    params: z.object({
      messageTemplateId: z
        .string()
        .openapi({
          param: {
            name: 'messageTemplateId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description:
              'The Id for the template. If not provided a secure random UUID will be generated.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: MessageTemplateRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: MessageTemplateResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const deleteApiMessageTemplateMessageTemplateIdRoute = createRoute({
  method: 'delete',
  path: '/api/message/template/{messageTemplateId}',
  description: 'Deletes the message template for the given Id.',
  operationId: 'deleteMessageTemplateWithId',
  request: {
    params: z.object({
      messageTemplateId: z
        .string()
        .openapi({
          param: {
            name: 'messageTemplateId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the message template to delete.',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const patchApiMessageTemplateMessageTemplateIdRoute = createRoute({
  method: 'patch',
  path: '/api/message/template/{messageTemplateId}',
  description: 'Updates, via PATCH, the message template with the given Id.',
  operationId: 'patchMessageTemplateWithId',
  request: {
    params: z.object({
      messageTemplateId: z
        .string()
        .openapi({
          param: {
            name: 'messageTemplateId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the message template to update.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: MessageTemplateRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: MessageTemplateResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiMessengerRoute = createRoute({
  method: 'get',
  path: '/api/messenger',
  description: 'Retrieves all the messengers.',
  operationId: 'retrieveMessengersWithId',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: MessengerResponseSchema } },
    },
    default: { description: 'Error' },
  },
})

export const postApiMessengerRoute = createRoute({
  method: 'post',
  path: '/api/messenger',
  description:
    'Creates a messenger.  You can optionally specify an Id for the messenger, if not provided one will be generated.',
  operationId: 'createMessenger',
  request: { body: { content: { 'application/json': { schema: MessengerRequestSchema } } } },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: MessengerResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiMessengerMessengerIdRoute = createRoute({
  method: 'get',
  path: '/api/messenger/{messengerId}',
  description: 'Retrieves the messenger with the given Id.',
  operationId: 'retrieveMessengerWithId',
  request: {
    params: z.object({
      messengerId: z
        .string()
        .openapi({
          param: {
            name: 'messengerId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the messenger.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: MessengerResponseSchema } },
    },
    default: { description: 'Error' },
  },
})

export const putApiMessengerMessengerIdRoute = createRoute({
  method: 'put',
  path: '/api/messenger/{messengerId}',
  description: 'Updates the messenger with the given Id.',
  operationId: 'updateMessengerWithId',
  request: {
    params: z.object({
      messengerId: z
        .string()
        .openapi({
          param: {
            name: 'messengerId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the messenger to update.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: MessengerRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: MessengerResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiMessengerMessengerIdRoute = createRoute({
  method: 'post',
  path: '/api/messenger/{messengerId}',
  description:
    'Creates a messenger.  You can optionally specify an Id for the messenger, if not provided one will be generated.',
  operationId: 'createMessengerWithId',
  request: {
    params: z.object({
      messengerId: z
        .string()
        .openapi({
          param: {
            name: 'messengerId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description:
              'The Id for the messenger. If not provided a secure random UUID will be generated.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: MessengerRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: MessengerResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const deleteApiMessengerMessengerIdRoute = createRoute({
  method: 'delete',
  path: '/api/messenger/{messengerId}',
  description: 'Deletes the messenger for the given Id.',
  operationId: 'deleteMessengerWithId',
  request: {
    params: z.object({
      messengerId: z
        .string()
        .openapi({
          param: {
            name: 'messengerId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the messenger to delete.',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const patchApiMessengerMessengerIdRoute = createRoute({
  method: 'patch',
  path: '/api/messenger/{messengerId}',
  description: 'Updates, via PATCH, the messenger with the given Id.',
  operationId: 'patchMessengerWithId',
  request: {
    params: z.object({
      messengerId: z
        .string()
        .openapi({
          param: {
            name: 'messengerId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the messenger to update.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: MessengerRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: MessengerResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiPasswordlessLoginRoute = createRoute({
  method: 'post',
  path: '/api/passwordless/login',
  description: 'Complete a login request using a passwordless code',
  operationId: 'passwordlessLoginWithId',
  request: {
    body: { content: { 'application/json': { schema: PasswordlessLoginRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: LoginResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiPasswordlessSendRoute = createRoute({
  method: 'post',
  path: '/api/passwordless/send',
  description: 'Send a passwordless authentication code in an email to complete login.',
  operationId: 'sendPasswordlessCodeWithId',
  request: { body: { content: { 'application/json': { schema: PasswordlessSendRequestSchema } } } },
  responses: {
    200: { description: 'Success' },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiPasswordlessStartRoute = createRoute({
  method: 'post',
  path: '/api/passwordless/start',
  description:
    'Start a passwordless login request by generating a passwordless code. This code can be sent to the User using the Send Passwordless Code API or using a mechanism outside of FusionAuth. The passwordless login is completed by using the Passwordless Login API with this code.',
  operationId: 'startPasswordlessLoginWithId',
  request: {
    body: { content: { 'application/json': { schema: PasswordlessStartRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PasswordlessStartResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiReactorRoute = createRoute({
  method: 'get',
  path: '/api/reactor',
  description: 'Retrieves the FusionAuth Reactor status.',
  operationId: 'retrieveReactorStatusWithId',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ReactorResponseSchema } },
    },
    default: { description: 'Error' },
  },
})

export const putApiReactorRoute = createRoute({
  method: 'put',
  path: '/api/reactor',
  description: 'Regenerates any keys that are used by the FusionAuth Reactor.',
  operationId: 'regenerateReactorKeysWithId',
  responses: { 200: { description: 'Success' }, default: { description: 'Error' } },
})

export const postApiReactorRoute = createRoute({
  method: 'post',
  path: '/api/reactor',
  description:
    'Activates the FusionAuth Reactor using a license Id and optionally a license text (for air-gapped deployments)',
  operationId: 'activateReactorWithId',
  request: { body: { content: { 'application/json': { schema: ReactorRequestSchema } } } },
  responses: {
    200: { description: 'Success' },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const deleteApiReactorRoute = createRoute({
  method: 'delete',
  path: '/api/reactor',
  description: 'Deactivates the FusionAuth Reactor.',
  operationId: 'deactivateReactorWithId',
  responses: { 200: { description: 'Success' }, default: { description: 'Error' } },
})

export const getApiReactorMetricsRoute = createRoute({
  method: 'get',
  path: '/api/reactor/metrics',
  description: 'Retrieves the FusionAuth Reactor metrics.',
  operationId: 'retrieveReactorMetricsWithId',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ReactorMetricsResponseSchema } },
    },
    default: { description: 'Error' },
  },
})

export const getApiReportDailyActiveUserRoute = createRoute({
  method: 'get',
  path: '/api/report/daily-active-user',
  description:
    'Retrieves the daily active user report between the two instants. If you specify an application Id, it will only return the daily active counts for that application.',
  operationId: 'retrieveDailyActiveReportWithId',
  request: {
    query: z.object({
      applicationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'applicationId',
            in: 'query',
            schema: { type: 'string' },
            description: 'The application Id.',
            required: false,
          },
        }),
      start: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'start',
            in: 'query',
            schema: { type: 'string' },
            description: 'The start instant as UTC milliseconds since Epoch.',
            required: false,
          },
        }),
      end: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'end',
            in: 'query',
            schema: { type: 'string' },
            description: 'The end instant as UTC milliseconds since Epoch.',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DailyActiveUserReportResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiReportLoginRoute = createRoute({
  method: 'get',
  path: '/api/report/login',
  description:
    'Retrieves the login report between the two instants for a particular user by login Id, using specific loginIdTypes. If you specify an application id, it will only return the login counts for that application. OR Retrieves the login report between the two instants for a particular user by login Id. If you specify an application Id, it will only return the login counts for that application. OR Retrieves the login report between the two instants for a particular user by Id. If you specify an application Id, it will only return the login counts for that application. OR Retrieves the login report between the two instants. If you specify an application Id, it will only return the login counts for that application.',
  operationId: 'retrieveReportLogin',
  request: {
    query: z.object({
      applicationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'applicationId',
            in: 'query',
            schema: { type: 'string' },
            description: 'The application id.',
            required: false,
          },
        }),
      loginId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'loginId',
            in: 'query',
            schema: { type: 'string' },
            description: 'The userId id.',
            required: false,
          },
        }),
      start: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'start',
            in: 'query',
            schema: { type: 'string' },
            description: 'The start instant as UTC milliseconds since Epoch.',
            required: false,
          },
        }),
      end: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'end',
            in: 'query',
            schema: { type: 'string' },
            description: 'The end instant as UTC milliseconds since Epoch.',
            required: false,
          },
        }),
      loginIdTypes: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'loginIdTypes',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            description: 'The identity types that FusionAuth will compare the loginId to.',
            required: false,
          },
        }),
      userId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'userId',
            in: 'query',
            schema: { type: 'string' },
            description: 'The userId Id.',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: LoginReportResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiReportMonthlyActiveUserRoute = createRoute({
  method: 'get',
  path: '/api/report/monthly-active-user',
  description:
    'Retrieves the monthly active user report between the two instants. If you specify an application Id, it will only return the monthly active counts for that application.',
  operationId: 'retrieveMonthlyActiveReportWithId',
  request: {
    query: z.object({
      applicationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'applicationId',
            in: 'query',
            schema: { type: 'string' },
            description: 'The application Id.',
            required: false,
          },
        }),
      start: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'start',
            in: 'query',
            schema: { type: 'string' },
            description: 'The start instant as UTC milliseconds since Epoch.',
            required: false,
          },
        }),
      end: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'end',
            in: 'query',
            schema: { type: 'string' },
            description: 'The end instant as UTC milliseconds since Epoch.',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: MonthlyActiveUserReportResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiReportRegistrationRoute = createRoute({
  method: 'get',
  path: '/api/report/registration',
  description:
    'Retrieves the registration report between the two instants. If you specify an application Id, it will only return the registration counts for that application.',
  operationId: 'retrieveRegistrationReportWithId',
  request: {
    query: z.object({
      applicationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'applicationId',
            in: 'query',
            schema: { type: 'string' },
            description: 'The application Id.',
            required: false,
          },
        }),
      start: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'start',
            in: 'query',
            schema: { type: 'string' },
            description: 'The start instant as UTC milliseconds since Epoch.',
            required: false,
          },
        }),
      end: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'end',
            in: 'query',
            schema: { type: 'string' },
            description: 'The end instant as UTC milliseconds since Epoch.',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RegistrationReportResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiReportTotalsRoute = createRoute({
  method: 'get',
  path: '/api/report/totals',
  description:
    'Retrieves the totals report. This allows excluding applicationTotals from the report. An empty list will include the applicationTotals.',
  operationId: 'retrieveTotalReportWithExcludesWithId',
  request: {
    query: z.object({
      excludes: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'excludes',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            description:
              'List of fields to exclude in the response. Currently only allows applicationTotals.',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TotalsReportResponseSchema } },
    },
    default: { description: 'Error' },
  },
})

export const getApiStatusRoute = createRoute({
  method: 'get',
  path: '/api/status',
  description:
    'Retrieves the FusionAuth system status. This request is anonymous and does not require an API key. When an API key is not provided the response will contain a single value in the JSON response indicating the current health check.',
  operationId: 'retrieveSystemStatusWithId',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StatusResponseSchema } },
    },
    default: { description: 'Error' },
  },
})

export const getApiSystemConfigurationRoute = createRoute({
  method: 'get',
  path: '/api/system-configuration',
  description: 'Retrieves the system configuration.',
  operationId: 'retrieveSystemConfigurationWithId',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SystemConfigurationResponseSchema } },
    },
    default: { description: 'Error' },
  },
})

export const putApiSystemConfigurationRoute = createRoute({
  method: 'put',
  path: '/api/system-configuration',
  description: 'Updates the system configuration.',
  operationId: 'updateSystemConfigurationWithId',
  request: {
    body: { content: { 'application/json': { schema: SystemConfigurationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SystemConfigurationResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const patchApiSystemConfigurationRoute = createRoute({
  method: 'patch',
  path: '/api/system-configuration',
  description: 'Updates, via PATCH, the system configuration.',
  operationId: 'patchSystemConfigurationWithId',
  request: {
    body: { content: { 'application/json': { schema: SystemConfigurationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SystemConfigurationResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiSystemAuditLogRoute = createRoute({
  method: 'post',
  path: '/api/system/audit-log',
  description:
    'Creates an audit log with the message and user name (usually an email). Audit logs should be written anytime you make changes to the FusionAuth database. When using the FusionAuth App web interface, any changes are automatically written to the audit log. However, if you are accessing the API, you must write the audit logs yourself.',
  operationId: 'createAuditLogWithId',
  request: { body: { content: { 'application/json': { schema: AuditLogRequestSchema } } } },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AuditLogResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiSystemAuditLogSearchRoute = createRoute({
  method: 'post',
  path: '/api/system/audit-log/search',
  description: 'Searches the audit logs with the specified criteria and pagination.',
  operationId: 'searchAuditLogsWithId',
  request: { body: { content: { 'application/json': { schema: AuditLogSearchRequestSchema } } } },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AuditLogSearchResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiSystemAuditLogAuditLogIdRoute = createRoute({
  method: 'get',
  path: '/api/system/audit-log/{auditLogId}',
  description: 'Retrieves a single audit log for the given Id.',
  operationId: 'retrieveAuditLogWithId',
  request: {
    params: z.object({
      auditLogId: z
        .string()
        .openapi({
          param: {
            name: 'auditLogId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the audit log to retrieve.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AuditLogResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiSystemEventLogSearchRoute = createRoute({
  method: 'post',
  path: '/api/system/event-log/search',
  description: 'Searches the event logs with the specified criteria and pagination.',
  operationId: 'searchEventLogsWithId',
  request: { body: { content: { 'application/json': { schema: EventLogSearchRequestSchema } } } },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: EventLogSearchResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiSystemEventLogEventLogIdRoute = createRoute({
  method: 'get',
  path: '/api/system/event-log/{eventLogId}',
  description: 'Retrieves a single event log for the given Id.',
  operationId: 'retrieveEventLogWithId',
  request: {
    params: z.object({
      eventLogId: z
        .string()
        .openapi({
          param: {
            name: 'eventLogId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the event log to retrieve.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: EventLogResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiSystemLoginRecordSearchRoute = createRoute({
  method: 'post',
  path: '/api/system/login-record/search',
  description: 'Searches the login records with the specified criteria and pagination.',
  operationId: 'searchLoginRecordsWithId',
  request: {
    body: { content: { 'application/json': { schema: LoginRecordSearchRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: LoginRecordSearchResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiSystemReindexRoute = createRoute({
  method: 'get',
  path: '/api/system/reindex',
  description:
    'Retrieve the status of a re-index process. A status code of 200 indicates the re-index is in progress, a status code of   404 indicates no re-index is in progress.',
  operationId: 'retrieveReindexStatusWithId',
  responses: {
    200: { description: 'Success' },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiSystemReindexRoute = createRoute({
  method: 'post',
  path: '/api/system/reindex',
  description:
    'Requests Elasticsearch to delete and rebuild the index for FusionAuth users or entities. Be very careful when running this request as it will  increase the CPU and I/O load on your database until the operation completes. Generally speaking you do not ever need to run this operation unless  instructed by FusionAuth support, or if you are migrating a database another system and you are not brining along the Elasticsearch index.   You have been warned.',
  operationId: 'reindexWithId',
  request: { body: { content: { 'application/json': { schema: ReindexRequestSchema } } } },
  responses: {
    200: { description: 'Success' },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiSystemVersionRoute = createRoute({
  method: 'get',
  path: '/api/system/version',
  description: 'Retrieves the FusionAuth version string.',
  operationId: 'retrieveVersionWithId',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: VersionResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiSystemWebhookAttemptLogWebhookAttemptLogIdRoute = createRoute({
  method: 'get',
  path: '/api/system/webhook-attempt-log/{webhookAttemptLogId}',
  description: 'Retrieves a single webhook attempt log for the given Id.',
  operationId: 'retrieveWebhookAttemptLogWithId',
  request: {
    params: z.object({
      webhookAttemptLogId: z
        .string()
        .openapi({
          param: {
            name: 'webhookAttemptLogId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the webhook attempt log to retrieve.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: WebhookAttemptLogResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiSystemWebhookEventLogSearchRoute = createRoute({
  method: 'post',
  path: '/api/system/webhook-event-log/search',
  description: 'Searches the webhook event logs with the specified criteria and pagination.',
  operationId: 'searchWebhookEventLogsWithId',
  request: {
    body: { content: { 'application/json': { schema: WebhookEventLogSearchRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: WebhookEventLogSearchResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiSystemWebhookEventLogWebhookEventLogIdRoute = createRoute({
  method: 'get',
  path: '/api/system/webhook-event-log/{webhookEventLogId}',
  description: 'Retrieves a single webhook event log for the given Id.',
  operationId: 'retrieveWebhookEventLogWithId',
  request: {
    params: z.object({
      webhookEventLogId: z
        .string()
        .openapi({
          param: {
            name: 'webhookEventLogId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the webhook event log to retrieve.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: WebhookEventLogResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiTenantRoute = createRoute({
  method: 'get',
  path: '/api/tenant',
  description: 'Retrieves all the tenants.',
  operationId: 'retrieveTenantsWithId',
  request: {
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TenantResponseSchema } },
    },
    default: { description: 'Error' },
  },
})

export const postApiTenantRoute = createRoute({
  method: 'post',
  path: '/api/tenant',
  description:
    'Creates a tenant. You can optionally specify an Id for the tenant, if not provided one will be generated.',
  operationId: 'createTenant',
  request: {
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TenantRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TenantResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiTenantManagerRoute = createRoute({
  method: 'get',
  path: '/api/tenant-manager',
  description: 'Retrieves the Tenant Manager configuration.',
  operationId: 'retrieveTenantManagerConfigurationWithId',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TenantManagerConfigurationResponseSchema } },
    },
    default: { description: 'Error' },
  },
})

export const putApiTenantManagerRoute = createRoute({
  method: 'put',
  path: '/api/tenant-manager',
  description: 'Updates the Tenant Manager configuration.',
  operationId: 'updateTenantManagerConfigurationWithId',
  request: {
    body: { content: { 'application/json': { schema: TenantManagerConfigurationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TenantManagerConfigurationResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const patchApiTenantManagerRoute = createRoute({
  method: 'patch',
  path: '/api/tenant-manager',
  description: 'Updates, via PATCH, the Tenant Manager configuration.',
  operationId: 'patchTenantManagerConfigurationWithId',
  request: {
    body: { content: { 'application/json': { schema: TenantManagerConfigurationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TenantManagerConfigurationResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const putApiTenantManagerIdentityProviderTypeRoute = createRoute({
  method: 'put',
  path: '/api/tenant-manager/identity-provider/{type}',
  description:
    'Updates the tenant manager identity provider type configuration for the given identity provider type.',
  operationId: 'updateTenantManagerIdentityProviderTypeConfigurationWithId',
  request: {
    params: z.object({
      type: z
        .string()
        .openapi({
          param: {
            name: 'type',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The type of the identity provider.',
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: TenantManagerIdentityProviderTypeConfigurationRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: TenantManagerIdentityProviderTypeConfigurationResponseSchema,
        },
      },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiTenantManagerIdentityProviderTypeRoute = createRoute({
  method: 'post',
  path: '/api/tenant-manager/identity-provider/{type}',
  description:
    'Creates a tenant manager identity provider type configuration for the given identity provider type.',
  operationId: 'createTenantManagerIdentityProviderTypeConfigurationWithId',
  request: {
    params: z.object({
      type: z
        .string()
        .openapi({
          param: {
            name: 'type',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The type of the identity provider.',
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: TenantManagerIdentityProviderTypeConfigurationRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: TenantManagerIdentityProviderTypeConfigurationResponseSchema,
        },
      },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const deleteApiTenantManagerIdentityProviderTypeRoute = createRoute({
  method: 'delete',
  path: '/api/tenant-manager/identity-provider/{type}',
  description:
    'Deletes the tenant manager identity provider type configuration for the given identity provider type.',
  operationId: 'deleteTenantManagerIdentityProviderTypeConfigurationWithId',
  request: {
    params: z.object({
      type: z
        .string()
        .openapi({
          param: {
            name: 'type',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The type of the identity provider.',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const patchApiTenantManagerIdentityProviderTypeRoute = createRoute({
  method: 'patch',
  path: '/api/tenant-manager/identity-provider/{type}',
  description:
    'Patches the tenant manager identity provider type configuration for the given identity provider type.',
  operationId: 'patchTenantManagerIdentityProviderTypeConfigurationWithId',
  request: {
    params: z.object({
      type: z
        .string()
        .openapi({
          param: {
            name: 'type',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The type of the identity provider.',
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: TenantManagerIdentityProviderTypeConfigurationRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: TenantManagerIdentityProviderTypeConfigurationResponseSchema,
        },
      },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiTenantPasswordValidationRulesRoute = createRoute({
  method: 'get',
  path: '/api/tenant/password-validation-rules',
  description:
    'Retrieves the password validation rules for a specific tenant. This method requires a tenantId to be provided  through the use of a Tenant scoped API key or an HTTP header X-FusionAuth-TenantId to specify the Tenant Id.  This API does not require an API key.',
  operationId: 'retrievePasswordValidationRulesWithId',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PasswordValidationRulesResponseSchema } },
    },
    default: { description: 'Error' },
  },
})

export const getApiTenantPasswordValidationRulesTenantIdRoute = createRoute({
  method: 'get',
  path: '/api/tenant/password-validation-rules/{tenantId}',
  description:
    'Retrieves the password validation rules for a specific tenant.  This API does not require an API key.',
  operationId: 'retrievePasswordValidationRulesWithTenantIdWithId',
  request: {
    params: z.object({
      tenantId: z
        .string()
        .openapi({
          param: {
            name: 'tenantId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the tenant.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PasswordValidationRulesResponseSchema } },
    },
    default: { description: 'Error' },
  },
})

export const postApiTenantSearchRoute = createRoute({
  method: 'post',
  path: '/api/tenant/search',
  description: 'Searches tenants with the specified criteria and pagination.',
  operationId: 'searchTenantsWithId',
  request: { body: { content: { 'application/json': { schema: TenantSearchRequestSchema } } } },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TenantSearchResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiTenantTenantIdRoute = createRoute({
  method: 'get',
  path: '/api/tenant/{tenantId}',
  description: 'Retrieves the tenant for the given Id.',
  operationId: 'retrieveTenantWithId',
  request: {
    params: z.object({
      tenantId: z
        .string()
        .openapi({
          param: {
            name: 'tenantId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the tenant.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TenantResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const putApiTenantTenantIdRoute = createRoute({
  method: 'put',
  path: '/api/tenant/{tenantId}',
  description: 'Updates the tenant with the given Id.',
  operationId: 'updateTenantWithId',
  request: {
    params: z.object({
      tenantId: z
        .string()
        .openapi({
          param: {
            name: 'tenantId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the tenant to update.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TenantRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TenantResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiTenantTenantIdRoute = createRoute({
  method: 'post',
  path: '/api/tenant/{tenantId}',
  description:
    'Creates a tenant. You can optionally specify an Id for the tenant, if not provided one will be generated.',
  operationId: 'createTenantWithId',
  request: {
    params: z.object({
      tenantId: z
        .string()
        .openapi({
          param: {
            name: 'tenantId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description:
              'The Id for the tenant. If not provided a secure random UUID will be generated.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TenantRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TenantResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const deleteApiTenantTenantIdRoute = createRoute({
  method: 'delete',
  path: '/api/tenant/{tenantId}',
  description:
    'Deletes the tenant based on the given request (sent to the API as JSON). This permanently deletes all information, metrics, reports and data associated with the tenant and everything under the tenant (applications, users, etc). OR Deletes the tenant for the given Id asynchronously. This method is helpful if you do not want to wait for the delete operation to complete. OR Deletes the tenant based on the given Id on the URL. This permanently deletes all information, metrics, reports and data associated with the tenant and everything under the tenant (applications, users, etc).',
  operationId: 'deleteTenantWithId',
  request: {
    params: z.object({
      tenantId: z
        .string()
        .openapi({
          param: {
            name: 'tenantId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the tenant to delete.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
    query: z.object({
      async: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'async', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
    body: { content: { 'application/json': { schema: TenantDeleteRequestSchema } } },
  },
  responses: {
    200: { description: 'Success' },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const patchApiTenantTenantIdRoute = createRoute({
  method: 'patch',
  path: '/api/tenant/{tenantId}',
  description: 'Updates, via PATCH, the tenant with the given Id.',
  operationId: 'patchTenantWithId',
  request: {
    params: z.object({
      tenantId: z
        .string()
        .openapi({
          param: {
            name: 'tenantId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the tenant to update.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TenantRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TenantResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiThemeRoute = createRoute({
  method: 'get',
  path: '/api/theme',
  description: 'Retrieves all the themes.',
  operationId: 'retrieveThemesWithId',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ThemeResponseSchema } },
    },
    default: { description: 'Error' },
  },
})

export const postApiThemeRoute = createRoute({
  method: 'post',
  path: '/api/theme',
  description:
    'Creates a Theme. You can optionally specify an Id for the theme, if not provided one will be generated.',
  operationId: 'createTheme',
  request: { body: { content: { 'application/json': { schema: ThemeRequestSchema } } } },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ThemeResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiThemeSearchRoute = createRoute({
  method: 'post',
  path: '/api/theme/search',
  description: 'Searches themes with the specified criteria and pagination.',
  operationId: 'searchThemesWithId',
  request: { body: { content: { 'application/json': { schema: ThemeSearchRequestSchema } } } },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ThemeSearchResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiThemeThemeIdRoute = createRoute({
  method: 'get',
  path: '/api/theme/{themeId}',
  description: 'Retrieves the theme for the given Id.',
  operationId: 'retrieveThemeWithId',
  request: {
    params: z.object({
      themeId: z
        .string()
        .openapi({
          param: {
            name: 'themeId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the theme.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ThemeResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const putApiThemeThemeIdRoute = createRoute({
  method: 'put',
  path: '/api/theme/{themeId}',
  description: 'Updates the theme with the given Id.',
  operationId: 'updateThemeWithId',
  request: {
    params: z.object({
      themeId: z
        .string()
        .openapi({
          param: {
            name: 'themeId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the theme to update.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ThemeRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ThemeResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiThemeThemeIdRoute = createRoute({
  method: 'post',
  path: '/api/theme/{themeId}',
  description:
    'Creates a Theme. You can optionally specify an Id for the theme, if not provided one will be generated.',
  operationId: 'createThemeWithId',
  request: {
    params: z.object({
      themeId: z
        .string()
        .openapi({
          param: {
            name: 'themeId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description:
              'The Id for the theme. If not provided a secure random UUID will be generated.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ThemeRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ThemeResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const deleteApiThemeThemeIdRoute = createRoute({
  method: 'delete',
  path: '/api/theme/{themeId}',
  description: 'Deletes the theme for the given Id.',
  operationId: 'deleteThemeWithId',
  request: {
    params: z.object({
      themeId: z
        .string()
        .openapi({
          param: {
            name: 'themeId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the theme to delete.',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const patchApiThemeThemeIdRoute = createRoute({
  method: 'patch',
  path: '/api/theme/{themeId}',
  description: 'Updates, via PATCH, the theme with the given Id.',
  operationId: 'patchThemeWithId',
  request: {
    params: z.object({
      themeId: z
        .string()
        .openapi({
          param: {
            name: 'themeId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the theme to update.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ThemeRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ThemeResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiTwoFactorLoginRoute = createRoute({
  method: 'post',
  path: '/api/two-factor/login',
  description: 'Complete login using a 2FA challenge',
  operationId: 'twoFactorLoginWithId',
  request: { body: { content: { 'application/json': { schema: TwoFactorLoginRequestSchema } } } },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: LoginResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiTwoFactorSecretRoute = createRoute({
  method: 'get',
  path: '/api/two-factor/secret',
  description:
    'Generate a Two Factor secret that can be used to enable Two Factor authentication for a User. The response will contain both the secret and a Base32 encoded form of the secret which can be shown to a User when using a 2 Step Authentication application such as Google Authenticator.',
  operationId: 'generateTwoFactorSecretUsingJWTWithId',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SecretResponseSchema } },
    },
    default: { description: 'Error' },
  },
  security: [{ BearerAuth: [] }],
})

export const postApiTwoFactorSendRoute = createRoute({
  method: 'post',
  path: '/api/two-factor/send',
  description:
    'Send a Two Factor authentication code to assist in setting up Two Factor authentication or disabling.',
  operationId: 'sendTwoFactorCodeForEnableDisableWithId',
  request: { body: { content: { 'application/json': { schema: TwoFactorSendRequestSchema } } } },
  responses: {
    200: { description: 'Success' },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiTwoFactorSendTwoFactorIdRoute = createRoute({
  method: 'post',
  path: '/api/two-factor/send/{twoFactorId}',
  description:
    'Send a Two Factor authentication code to allow the completion of Two Factor authentication.',
  operationId: 'sendTwoFactorCodeForLoginUsingMethodWithId',
  request: {
    params: z.object({
      twoFactorId: z
        .string()
        .openapi({
          param: {
            name: 'twoFactorId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description:
              'The Id returned by the Login API necessary to complete Two Factor authentication.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TwoFactorSendRequestSchema } } },
  },
  responses: {
    200: { description: 'Success' },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiTwoFactorStartRoute = createRoute({
  method: 'post',
  path: '/api/two-factor/start',
  description:
    'Start a Two-Factor login request by generating a two-factor identifier. This code can then be sent to the Two Factor Send  API (/api/two-factor/send)in order to send a one-time use code to a user. You can also use one-time use code returned  to send the code out-of-band. The Two-Factor login is completed by making a request to the Two-Factor Login  API (/api/two-factor/login). with the two-factor identifier and the one-time use code.  This API is intended to allow you to begin a Two-Factor login outside a normal login that originated from the Login API (/api/login).',
  operationId: 'startTwoFactorLoginWithId',
  request: { body: { content: { 'application/json': { schema: TwoFactorStartRequestSchema } } } },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TwoFactorStartResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiTwoFactorStatusRoute = createRoute({
  method: 'post',
  path: '/api/two-factor/status',
  description:
    "Retrieve a user's two-factor status.  This can be used to see if a user will need to complete a two-factor challenge to complete a login, and optionally identify the state of the two-factor trust across various applications. This operation provides more payload options than retrieveTwoFactorStatus.",
  operationId: 'retrieveTwoFactorStatusWithRequestWithId',
  request: { body: { content: { 'application/json': { schema: TwoFactorStatusRequestSchema } } } },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TwoFactorStatusResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiTwoFactorStatusTwoFactorTrustIdRoute = createRoute({
  method: 'get',
  path: '/api/two-factor/status/{twoFactorTrustId}',
  description:
    "Retrieve a user's two-factor status.  This can be used to see if a user will need to complete a two-factor challenge to complete a login, and optionally identify the state of the two-factor trust across various applications.",
  operationId: 'retrieveTwoFactorStatusWithId',
  request: {
    query: z.object({
      userId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'userId',
            in: 'query',
            schema: { type: 'string' },
            description: 'The user Id to retrieve the Two-Factor status.',
            required: false,
          },
        }),
      applicationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'applicationId',
            in: 'query',
            schema: { type: 'string' },
            description: 'The optional applicationId to verify.',
            required: false,
          },
        }),
    }),
    params: z.object({
      twoFactorTrustId: z
        .string()
        .openapi({
          param: {
            name: 'twoFactorTrustId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The optional two-factor trust Id to verify.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TwoFactorStatusResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiUserRoute = createRoute({
  method: 'get',
  path: '/api/user',
  description:
    "Retrieves the user by a verificationId. The intended use of this API is to retrieve a user after the forgot password workflow has been initiated and you may not know the user's email or username. OR Retrieves the user for the given username. OR Retrieves the user for the loginId, using specific loginIdTypes. OR Retrieves the user for the loginId. The loginId can be either the username or the email. OR Retrieves the user for the given email. OR Retrieves the user by a change password Id. The intended use of this API is to retrieve a user after the forgot password workflow has been initiated and you may not know the user's email or username.",
  operationId: 'retrieveUser',
  request: {
    query: z.object({
      verificationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'verificationId',
            in: 'query',
            schema: { type: 'string' },
            description: 'The unique verification Id that has been set on the user object.',
            required: false,
          },
        }),
      username: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'username',
            in: 'query',
            schema: { type: 'string' },
            description: 'The username of the user.',
            required: false,
          },
        }),
      loginId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'loginId',
            in: 'query',
            schema: { type: 'string' },
            description: 'The email or username of the user.',
            required: false,
          },
        }),
      loginIdTypes: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'loginIdTypes',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            description: 'The identity types that FusionAuth will compare the loginId to.',
            required: false,
          },
        }),
      email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'email',
            in: 'query',
            schema: { type: 'string' },
            description: 'The email of the user.',
            required: false,
          },
        }),
      changePasswordId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'changePasswordId',
            in: 'query',
            schema: { type: 'string' },
            description:
              'The unique change password Id that was sent via email or returned by the Forgot Password API.',
            required: false,
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UserResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiUserRoute = createRoute({
  method: 'post',
  path: '/api/user',
  description:
    'Creates a user. You can optionally specify an Id for the user, if not provided one will be generated.',
  operationId: 'createUser',
  request: {
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UserRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UserResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiUserActionRoute = createRoute({
  method: 'get',
  path: '/api/user-action',
  description:
    'Retrieves the user action for the given Id. If you pass in null for the Id, this will return all the user actions. OR Retrieves all the user actions that are currently inactive.',
  operationId: 'retrieveUserAction',
  request: {
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
    query: z.object({
      inactive: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'inactive', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UserActionResponseSchema } },
    },
    default: { description: 'Error' },
  },
})

export const postApiUserActionRoute = createRoute({
  method: 'post',
  path: '/api/user-action',
  description:
    'Creates a user action. This action cannot be taken on a user until this call successfully returns. Anytime after that the user action can be applied to any user.',
  operationId: 'createUserAction',
  request: {
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UserActionRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UserActionResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiUserActionReasonRoute = createRoute({
  method: 'get',
  path: '/api/user-action-reason',
  description:
    'Retrieves the user action reason for the given Id. If you pass in null for the Id, this will return all the user action reasons.',
  operationId: 'retrieveUserActionReason',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UserActionReasonResponseSchema } },
    },
    default: { description: 'Error' },
  },
})

export const postApiUserActionReasonRoute = createRoute({
  method: 'post',
  path: '/api/user-action-reason',
  description:
    'Creates a user reason. This user action reason cannot be used when actioning a user until this call completes successfully. Anytime after that the user action reason can be used.',
  operationId: 'createUserActionReason',
  request: { body: { content: { 'application/json': { schema: UserActionReasonRequestSchema } } } },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UserActionReasonResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiUserActionReasonUserActionReasonIdRoute = createRoute({
  method: 'get',
  path: '/api/user-action-reason/{userActionReasonId}',
  description:
    'Retrieves the user action reason for the given Id. If you pass in null for the Id, this will return all the user action reasons.',
  operationId: 'retrieveUserActionReasonWithId',
  request: {
    params: z.object({
      userActionReasonId: z
        .string()
        .openapi({
          param: {
            name: 'userActionReasonId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the user action reason.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UserActionReasonResponseSchema } },
    },
    default: { description: 'Error' },
  },
})

export const putApiUserActionReasonUserActionReasonIdRoute = createRoute({
  method: 'put',
  path: '/api/user-action-reason/{userActionReasonId}',
  description: 'Updates the user action reason with the given Id.',
  operationId: 'updateUserActionReasonWithId',
  request: {
    params: z.object({
      userActionReasonId: z
        .string()
        .openapi({
          param: {
            name: 'userActionReasonId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the user action reason to update.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UserActionReasonRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UserActionReasonResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiUserActionReasonUserActionReasonIdRoute = createRoute({
  method: 'post',
  path: '/api/user-action-reason/{userActionReasonId}',
  description:
    'Creates a user reason. This user action reason cannot be used when actioning a user until this call completes successfully. Anytime after that the user action reason can be used.',
  operationId: 'createUserActionReasonWithId',
  request: {
    params: z.object({
      userActionReasonId: z
        .string()
        .openapi({
          param: {
            name: 'userActionReasonId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description:
              'The Id for the user action reason. If not provided a secure random UUID will be generated.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UserActionReasonRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UserActionReasonResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const deleteApiUserActionReasonUserActionReasonIdRoute = createRoute({
  method: 'delete',
  path: '/api/user-action-reason/{userActionReasonId}',
  description: 'Deletes the user action reason for the given Id.',
  operationId: 'deleteUserActionReasonWithId',
  request: {
    params: z.object({
      userActionReasonId: z
        .string()
        .openapi({
          param: {
            name: 'userActionReasonId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the user action reason to delete.',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const patchApiUserActionReasonUserActionReasonIdRoute = createRoute({
  method: 'patch',
  path: '/api/user-action-reason/{userActionReasonId}',
  description: 'Updates, via PATCH, the user action reason with the given Id.',
  operationId: 'patchUserActionReasonWithId',
  request: {
    params: z.object({
      userActionReasonId: z
        .string()
        .openapi({
          param: {
            name: 'userActionReasonId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the user action reason to update.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UserActionReasonRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UserActionReasonResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiUserActionUserActionIdRoute = createRoute({
  method: 'get',
  path: '/api/user-action/{userActionId}',
  description:
    'Retrieves the user action for the given Id. If you pass in null for the Id, this will return all the user actions.',
  operationId: 'retrieveUserActionWithId',
  request: {
    params: z.object({
      userActionId: z
        .string()
        .openapi({
          param: {
            name: 'userActionId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the user action.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UserActionResponseSchema } },
    },
    default: { description: 'Error' },
  },
})

export const putApiUserActionUserActionIdRoute = createRoute({
  method: 'put',
  path: '/api/user-action/{userActionId}',
  description:
    'Updates the user action with the given Id. OR Reactivates the user action with the given Id.',
  operationId: 'updateUserActionWithId',
  request: {
    params: z.object({
      userActionId: z
        .string()
        .openapi({
          param: {
            name: 'userActionId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the user action to update.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
    query: z.object({
      reactivate: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'reactivate', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
    body: { content: { 'application/json': { schema: UserActionRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UserActionResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiUserActionUserActionIdRoute = createRoute({
  method: 'post',
  path: '/api/user-action/{userActionId}',
  description:
    'Creates a user action. This action cannot be taken on a user until this call successfully returns. Anytime after that the user action can be applied to any user.',
  operationId: 'createUserActionWithId',
  request: {
    params: z.object({
      userActionId: z
        .string()
        .openapi({
          param: {
            name: 'userActionId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description:
              'The Id for the user action. If not provided a secure random UUID will be generated.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UserActionRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UserActionResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const deleteApiUserActionUserActionIdRoute = createRoute({
  method: 'delete',
  path: '/api/user-action/{userActionId}',
  description:
    'Deletes the user action for the given Id. This permanently deletes the user action and also any history and logs of the action being applied to any users. OR Deactivates the user action with the given Id.',
  operationId: 'deleteUserActionWithId',
  request: {
    query: z.object({
      hardDelete: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'hardDelete', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
    params: z.object({
      userActionId: z
        .string()
        .openapi({
          param: {
            name: 'userActionId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the user action to delete.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const patchApiUserActionUserActionIdRoute = createRoute({
  method: 'patch',
  path: '/api/user-action/{userActionId}',
  description: 'Updates, via PATCH, the user action with the given Id.',
  operationId: 'patchUserActionWithId',
  request: {
    params: z.object({
      userActionId: z
        .string()
        .openapi({
          param: {
            name: 'userActionId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the user action to update.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UserActionRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UserActionResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiUserAction2Route = createRoute({
  method: 'get',
  path: '/api/user/action',
  description:
    'Retrieves all the actions for the user with the given Id that are currently inactive. An inactive action means one that is time based and has been canceled or has expired, or is not time based. OR Retrieves all the actions for the user with the given Id that are currently active. An active action means one that is time based and has not been canceled, and has not ended. OR Retrieves all the actions for the user with the given Id that are currently preventing the User from logging in. OR Retrieves all the actions for the user with the given Id. This will return all time based actions that are active, and inactive as well as non-time based actions.',
  operationId: 'retrieveUserActioning',
  request: {
    query: z.object({
      userId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'userId',
            in: 'query',
            schema: { type: 'string' },
            description: 'The Id of the user to fetch the actions for.',
            required: false,
          },
        }),
      active: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'active', in: 'query', schema: { type: 'string' }, required: false },
        }),
      preventingLogin: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'preventingLogin',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ActionResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiUserAction2Route = createRoute({
  method: 'post',
  path: '/api/user/action',
  description:
    'Takes an action on a user. The user being actioned is called the "actionee" and the user taking the action is called the "actioner". Both user ids are required in the request object.',
  operationId: 'actionUserWithId',
  request: { body: { content: { 'application/json': { schema: ActionRequestSchema } } } },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ActionResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiUserActionActionIdRoute = createRoute({
  method: 'get',
  path: '/api/user/action/{actionId}',
  description:
    'Retrieves a single action log (the log of a user action that was taken on a user previously) for the given Id.',
  operationId: 'retrieveActionWithId',
  request: {
    params: z.object({
      actionId: z
        .string()
        .openapi({
          param: {
            name: 'actionId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the action to retrieve.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ActionResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const putApiUserActionActionIdRoute = createRoute({
  method: 'put',
  path: '/api/user/action/{actionId}',
  description:
    'Modifies a temporal user action by changing the expiration of the action and optionally adding a comment to the action.',
  operationId: 'modifyActionWithId',
  request: {
    params: z.object({
      actionId: z
        .string()
        .openapi({
          param: {
            name: 'actionId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description:
              'The Id of the action to modify. This is technically the user action log Id.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ActionRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ActionResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const deleteApiUserActionActionIdRoute = createRoute({
  method: 'delete',
  path: '/api/user/action/{actionId}',
  description: 'Cancels the user action.',
  operationId: 'cancelActionWithId',
  request: {
    params: z.object({
      actionId: z
        .string()
        .openapi({
          param: {
            name: 'actionId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The action Id of the action to cancel.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ActionRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ActionResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const deleteApiUserBulkRoute = createRoute({
  method: 'delete',
  path: '/api/user/bulk',
  description:
    'Deletes the users with the given Ids, or users matching the provided JSON query or queryString. The order of preference is Ids, query and then queryString, it is recommended to only provide one of the three for the request.  This method can be used to deactivate or permanently delete (hard-delete) users based upon the hardDelete boolean in the request body. Using the dryRun parameter you may also request the result of the action without actually deleting or deactivating any users. OR Deactivates the users with the given Ids.',
  operationId: 'deleteUserBulk',
  request: {
    query: z.object({
      userId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'userId',
            in: 'query',
            schema: { type: 'string' },
            description: 'The ids of the users to deactivate.',
            required: false,
          },
        }),
      dryRun: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'dryRun', in: 'query', schema: { type: 'string' }, required: false },
        }),
      hardDelete: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'hardDelete', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
    body: { content: { 'application/json': { schema: UserDeleteRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UserDeleteResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiUserChangePasswordRoute = createRoute({
  method: 'get',
  path: '/api/user/change-password',
  description:
    'Check to see if the user must obtain a Trust Request Id in order to complete a change password request. When a user has enabled Two-Factor authentication, before you are allowed to use the Change Password API to change your password, you must obtain a Trust Request Id by completing a Two-Factor Step-Up authentication.  An HTTP status code of 400 with a general error code of [TrustTokenRequired] indicates that a Trust Token is required to make a POST request to this API. OR Check to see if the user must obtain a Trust Request Id in order to complete a change password request. When a user has enabled Two-Factor authentication, before you are allowed to use the Change Password API to change your password, you must obtain a Trust Request Id by completing a Two-Factor Step-Up authentication.  An HTTP status code of 400 with a general error code of [TrustTokenRequired] indicates that a Trust Token is required to make a POST request to this API. OR Check to see if the user must obtain a Trust Request Id in order to complete a change password request. When a user has enabled Two-Factor authentication, before you are allowed to use the Change Password API to change your password, you must obtain a Trust Request Id by completing a Two-Factor Step-Up authentication.  An HTTP status code of 400 with a general error code of [TrustTokenRequired] indicates that a Trust Token is required to make a POST request to this API. OR Check to see if the user must obtain a Trust Request Id in order to complete a change password request. When a user has enabled Two-Factor authentication, before you are allowed to use the Change Password API to change your password, you must obtain a Trust Request Id by completing a Two-Factor Step-Up authentication.  An HTTP status code of 400 with a general error code of [TrustTokenRequired] indicates that a Trust Token is required to make a POST request to this API. OR Check to see if the user must obtain a Trust Token Id in order to complete a change password request. When a user has enabled Two-Factor authentication, before you are allowed to use the Change Password API to change your password, you must obtain a Trust Token by completing a Two-Factor Step-Up authentication.  An HTTP status code of 400 with a general error code of [TrustTokenRequired] indicates that a Trust Token is required to make a POST request to this API. OR Check to see if the user must obtain a Trust Token Id in order to complete a change password request. When a user has enabled Two-Factor authentication, before you are allowed to use the Change Password API to change your password, you must obtain a Trust Token by completing a Two-Factor Step-Up authentication.  An HTTP status code of 400 with a general error code of [TrustTokenRequired] indicates that a Trust Token is required to make a POST request to this API.',
  operationId: 'retrieveUserChangePassword',
  request: {
    query: z.object({
      loginId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'loginId',
            in: 'query',
            schema: { type: 'string' },
            description: 'The loginId of the User that you intend to change the password for.',
            required: false,
          },
        }),
      loginIdTypes: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'loginIdTypes',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            description: 'The identity types that FusionAuth will compare the loginId to.',
            required: false,
          },
        }),
      ipAddress: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'ipAddress',
            in: 'query',
            schema: { type: 'string' },
            description:
              'IP address of the user changing their password. This is used for MFA risk assessment.',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiUserChangePasswordRoute = createRoute({
  method: 'post',
  path: '/api/user/change-password',
  description:
    "Changes a user's password using their access token (JWT) instead of the changePasswordId A common use case for this method will be if you want to allow the user to change their own password.  Remember to send refreshToken in the request body if you want to get a new refresh token when login using the returned oneTimePassword. OR Changes a user's password using their identity (loginId and password). Using a loginId instead of the changePasswordId bypasses the email verification and allows a password to be changed directly without first calling the #forgotPassword method.",
  operationId: 'createUserChangePassword',
  request: { body: { content: { 'application/json': { schema: ChangePasswordRequestSchema } } } },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ChangePasswordResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
  security: [{ BearerAuth: [] }],
})

export const getApiUserChangePasswordChangePasswordIdRoute = createRoute({
  method: 'get',
  path: '/api/user/change-password/{changePasswordId}',
  description:
    'Check to see if the user must obtain a Trust Token Id in order to complete a change password request. When a user has enabled Two-Factor authentication, before you are allowed to use the Change Password API to change your password, you must obtain a Trust Token by completing a Two-Factor Step-Up authentication.  An HTTP status code of 400 with a general error code of [TrustTokenRequired] indicates that a Trust Token is required to make a POST request to this API. OR Check to see if the user must obtain a Trust Token Id in order to complete a change password request. When a user has enabled Two-Factor authentication, before you are allowed to use the Change Password API to change your password, you must obtain a Trust Token by completing a Two-Factor Step-Up authentication.  An HTTP status code of 400 with a general error code of [TrustTokenRequired] indicates that a Trust Token is required to make a POST request to this API.',
  operationId: 'retrieveUserChangePasswordWithId',
  request: {
    query: z.object({
      ipAddress: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'ipAddress',
            in: 'query',
            schema: { type: 'string' },
            description:
              'IP address of the user changing their password. This is used for MFA risk assessment.',
            required: false,
          },
        }),
    }),
    params: z.object({
      changePasswordId: z
        .string()
        .openapi({
          param: {
            name: 'changePasswordId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description:
              'The change password Id used to find the user. This value is generated by FusionAuth once the change password workflow has been initiated.',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiUserChangePasswordChangePasswordIdRoute = createRoute({
  method: 'post',
  path: '/api/user/change-password/{changePasswordId}',
  description:
    "Changes a user's password using the change password Id. This usually occurs after an email has been sent to the user and they clicked on a link to reset their password.  As of version 1.32.2, prefer sending the changePasswordId in the request body. To do this, omit the first parameter, and set the value in the request body.",
  operationId: 'changePasswordWithId',
  request: {
    params: z.object({
      changePasswordId: z
        .string()
        .openapi({
          param: {
            name: 'changePasswordId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description:
              'The change password Id used to find the user. This value is generated by FusionAuth once the change password workflow has been initiated.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ChangePasswordRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ChangePasswordResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiUserCommentRoute = createRoute({
  method: 'post',
  path: '/api/user/comment',
  description: "Adds a comment to the user's account.",
  operationId: 'commentOnUserWithId',
  request: {
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UserCommentRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UserCommentResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiUserCommentSearchRoute = createRoute({
  method: 'post',
  path: '/api/user/comment/search',
  description: 'Searches user comments with the specified criteria and pagination.',
  operationId: 'searchUserCommentsWithId',
  request: {
    body: { content: { 'application/json': { schema: UserCommentSearchRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UserCommentSearchResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiUserCommentUserIdRoute = createRoute({
  method: 'get',
  path: '/api/user/comment/{userId}',
  description: 'Retrieves all the comments for the user with the given Id.',
  operationId: 'retrieveUserCommentsWithId',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the user.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UserCommentResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiUserConsentRoute = createRoute({
  method: 'get',
  path: '/api/user/consent',
  description: 'Retrieves all the consents for a User.',
  operationId: 'retrieveUserConsentsWithId',
  request: {
    query: z.object({
      userId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'userId',
            in: 'query',
            schema: { type: 'string' },
            description: "The User's Id",
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UserConsentResponseSchema } },
    },
    default: { description: 'Error' },
  },
})

export const postApiUserConsentRoute = createRoute({
  method: 'post',
  path: '/api/user/consent',
  description: 'Creates a single User consent.',
  operationId: 'createUserConsent',
  request: { body: { content: { 'application/json': { schema: UserConsentRequestSchema } } } },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UserConsentResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiUserConsentUserConsentIdRoute = createRoute({
  method: 'get',
  path: '/api/user/consent/{userConsentId}',
  description: 'Retrieve a single User consent by Id.',
  operationId: 'retrieveUserConsentWithId',
  request: {
    params: z.object({
      userConsentId: z
        .string()
        .openapi({
          param: {
            name: 'userConsentId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The User consent Id',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UserConsentResponseSchema } },
    },
    default: { description: 'Error' },
  },
})

export const putApiUserConsentUserConsentIdRoute = createRoute({
  method: 'put',
  path: '/api/user/consent/{userConsentId}',
  description: 'Updates a single User consent by Id.',
  operationId: 'updateUserConsentWithId',
  request: {
    params: z.object({
      userConsentId: z
        .string()
        .openapi({
          param: {
            name: 'userConsentId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The User Consent Id',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UserConsentRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UserConsentResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiUserConsentUserConsentIdRoute = createRoute({
  method: 'post',
  path: '/api/user/consent/{userConsentId}',
  description: 'Creates a single User consent.',
  operationId: 'createUserConsentWithId',
  request: {
    params: z.object({
      userConsentId: z
        .string()
        .openapi({
          param: {
            name: 'userConsentId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description:
              'The Id for the User consent. If not provided a secure random UUID will be generated.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UserConsentRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UserConsentResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const deleteApiUserConsentUserConsentIdRoute = createRoute({
  method: 'delete',
  path: '/api/user/consent/{userConsentId}',
  description: 'Revokes a single User consent by Id.',
  operationId: 'revokeUserConsentWithId',
  request: {
    params: z.object({
      userConsentId: z
        .string()
        .openapi({
          param: {
            name: 'userConsentId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The User Consent Id',
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, default: { description: 'Error' } },
})

export const patchApiUserConsentUserConsentIdRoute = createRoute({
  method: 'patch',
  path: '/api/user/consent/{userConsentId}',
  description: 'Updates, via PATCH, a single User consent by Id.',
  operationId: 'patchUserConsentWithId',
  request: {
    params: z.object({
      userConsentId: z
        .string()
        .openapi({
          param: {
            name: 'userConsentId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The User Consent Id',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UserConsentRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UserConsentResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiUserFamilyRoute = createRoute({
  method: 'get',
  path: '/api/user/family',
  description: 'Retrieves all the families that a user belongs to.',
  operationId: 'retrieveFamiliesWithId',
  request: {
    query: z.object({
      userId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'userId',
            in: 'query',
            schema: { type: 'string' },
            description: "The User's id",
            required: false,
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: FamilyResponseSchema } },
    },
    default: { description: 'Error' },
  },
})

export const postApiUserFamilyRoute = createRoute({
  method: 'post',
  path: '/api/user/family',
  description:
    'Creates a family with the user Id in the request as the owner and sole member of the family. You can optionally specify an Id for the family, if not provided one will be generated.',
  operationId: 'createFamily',
  request: {
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: FamilyRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: FamilyResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiUserFamilyPendingRoute = createRoute({
  method: 'get',
  path: '/api/user/family/pending',
  description: 'Retrieves all the children for the given parent email address.',
  operationId: 'retrievePendingChildrenWithId',
  request: {
    query: z.object({
      parentEmail: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'parentEmail',
            in: 'query',
            schema: { type: 'string' },
            description: 'The email of the parent.',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PendingResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiUserFamilyRequestRoute = createRoute({
  method: 'post',
  path: '/api/user/family/request',
  description:
    'Sends out an email to a parent that they need to register and create a family or need to log in and add a child to their existing family.',
  operationId: 'sendFamilyRequestEmailWithId',
  request: { body: { content: { 'application/json': { schema: FamilyEmailRequestSchema } } } },
  responses: {
    200: { description: 'Success' },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiUserFamilyFamilyIdRoute = createRoute({
  method: 'get',
  path: '/api/user/family/{familyId}',
  description: 'Retrieves all the members of a family by the unique Family Id.',
  operationId: 'retrieveFamilyMembersByFamilyIdWithId',
  request: {
    params: z.object({
      familyId: z
        .string()
        .openapi({
          param: {
            name: 'familyId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The unique Id of the Family.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: FamilyResponseSchema } },
    },
    default: { description: 'Error' },
  },
})

export const putApiUserFamilyFamilyIdRoute = createRoute({
  method: 'put',
  path: '/api/user/family/{familyId}',
  description:
    'Updates a family with a given Id. OR Adds a user to an existing family. The family Id must be specified.',
  operationId: 'updateUserFamilyWithId',
  request: {
    params: z.object({
      familyId: z
        .string()
        .openapi({
          param: {
            name: 'familyId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the family to update.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: FamilyRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: FamilyResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiUserFamilyFamilyIdRoute = createRoute({
  method: 'post',
  path: '/api/user/family/{familyId}',
  description:
    'Creates a family with the user Id in the request as the owner and sole member of the family. You can optionally specify an Id for the family, if not provided one will be generated.',
  operationId: 'createFamilyWithId',
  request: {
    params: z.object({
      familyId: z
        .string()
        .openapi({
          param: {
            name: 'familyId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description:
              'The Id for the family. If not provided a secure random UUID will be generated.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: FamilyRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: FamilyResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const deleteApiUserFamilyFamilyIdUserIdRoute = createRoute({
  method: 'delete',
  path: '/api/user/family/{familyId}/{userId}',
  description: 'Removes a user from the family with the given Id.',
  operationId: 'removeUserFromFamilyWithId',
  request: {
    params: z.object({
      familyId: z
        .string()
        .openapi({
          param: {
            name: 'familyId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the family to remove the user from.',
          },
        }),
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the user to remove from the family.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiUserForgotPasswordRoute = createRoute({
  method: 'post',
  path: '/api/user/forgot-password',
  description:
    'Begins the forgot password sequence, which kicks off an email to the user so that they can reset their password.',
  operationId: 'forgotPasswordWithId',
  request: { body: { content: { 'application/json': { schema: ForgotPasswordRequestSchema } } } },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ForgotPasswordResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiUserImportRoute = createRoute({
  method: 'post',
  path: '/api/user/import',
  description:
    'Bulk imports users. This request performs minimal validation and runs batch inserts of users with the expectation that each user does not yet exist and each registration corresponds to an existing FusionAuth Application. This is done to increases the insert performance.  Therefore, if you encounter an error due to a database key violation, the response will likely offer a generic explanation. If you encounter an error, you may optionally enable additional validation to receive a JSON response body with specific validation errors. This will slow the request down but will allow you to identify the cause of the failure. See the validateDbConstraints request parameter.',
  operationId: 'importUsersWithId',
  request: { body: { content: { 'application/json': { schema: ImportRequestSchema } } } },
  responses: {
    200: { description: 'Success' },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiUserRecentLoginRoute = createRoute({
  method: 'get',
  path: '/api/user/recent-login',
  description:
    'Retrieves the last number of login records for a user. OR Retrieves the last number of login records.',
  operationId: 'retrieveUserRecentLogin',
  request: {
    query: z.object({
      userId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'userId',
            in: 'query',
            schema: { type: 'string' },
            description: 'The Id of the user.',
            required: false,
          },
        }),
      offset: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            in: 'query',
            schema: { type: 'string' },
            description:
              'The initial record. e.g. 0 is the last login, 100 will be the 100th most recent login.',
            required: false,
          },
        }),
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            schema: { type: 'string' },
            description: '(Optional, defaults to 10) The number of records to retrieve.',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RecentLoginResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiUserRefreshTokenImportRoute = createRoute({
  method: 'post',
  path: '/api/user/refresh-token/import',
  description:
    'Bulk imports refresh tokens. This request performs minimal validation and runs batch inserts of refresh tokens with the expectation that each token represents a user that already exists and is registered for the corresponding FusionAuth Application. This is done to increases the insert performance.  Therefore, if you encounter an error due to a database key violation, the response will likely offer a generic explanation. If you encounter an error, you may optionally enable additional validation to receive a JSON response body with specific validation errors. This will slow the request down but will allow you to identify the cause of the failure. See the validateDbConstraints request parameter.',
  operationId: 'importRefreshTokensWithId',
  request: {
    body: { content: { 'application/json': { schema: RefreshTokenImportRequestSchema } } },
  },
  responses: {
    200: { description: 'Success' },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiUserRegistrationRoute = createRoute({
  method: 'post',
  path: '/api/user/registration',
  description:
    'Registers a user for an application. If you provide the User and the UserRegistration object on this request, it will create the user as well as register them for the application. This is called a Full Registration. However, if you only provide the UserRegistration object, then the user must already exist and they will be registered for the application. The user Id can also be provided and it will either be used to look up an existing user or it will be used for the newly created User.',
  operationId: 'register',
  request: {
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RegistrationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RegistrationResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const putApiUserRegistrationUserIdRoute = createRoute({
  method: 'put',
  path: '/api/user/registration/{userId}',
  description:
    'Updates the registration for the user with the given Id and the application defined in the request.',
  operationId: 'updateRegistrationWithId',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the user whose registration is going to be updated.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RegistrationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RegistrationResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiUserRegistrationUserIdRoute = createRoute({
  method: 'post',
  path: '/api/user/registration/{userId}',
  description:
    'Registers a user for an application. If you provide the User and the UserRegistration object on this request, it will create the user as well as register them for the application. This is called a Full Registration. However, if you only provide the UserRegistration object, then the user must already exist and they will be registered for the application. The user Id can also be provided and it will either be used to look up an existing user or it will be used for the newly created User.',
  operationId: 'registerWithId',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description:
              'The Id of the user being registered for the application and optionally created.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RegistrationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RegistrationResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const patchApiUserRegistrationUserIdRoute = createRoute({
  method: 'patch',
  path: '/api/user/registration/{userId}',
  description:
    'Updates, via PATCH, the registration for the user with the given Id and the application defined in the request.',
  operationId: 'patchRegistrationWithId',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the user whose registration is going to be updated.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RegistrationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RegistrationResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiUserRegistrationUserIdApplicationIdRoute = createRoute({
  method: 'get',
  path: '/api/user/registration/{userId}/{applicationId}',
  description:
    'Retrieves the user registration for the user with the given Id and the given application Id.',
  operationId: 'retrieveRegistrationWithId',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the user.',
          },
        }),
      applicationId: z
        .string()
        .openapi({
          param: {
            name: 'applicationId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the application.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RegistrationResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const deleteApiUserRegistrationUserIdApplicationIdRoute = createRoute({
  method: 'delete',
  path: '/api/user/registration/{userId}/{applicationId}',
  description:
    'Deletes the user registration for the given user and application along with the given JSON body that contains the event information. OR Deletes the user registration for the given user and application.',
  operationId: 'deleteUserRegistrationWithId',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the user whose registration is being deleted.',
          },
        }),
      applicationId: z
        .string()
        .openapi({
          param: {
            name: 'applicationId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the application to remove the registration for.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RegistrationDeleteRequestSchema } } },
  },
  responses: {
    200: { description: 'Success' },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiUserSearchRoute = createRoute({
  method: 'get',
  path: '/api/user/search',
  description: 'Retrieves the users for the given Ids. If any Id is invalid, it is ignored.',
  operationId: 'searchUsersByIdsWithId',
  request: {
    query: z.object({
      ids: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'ids',
            in: 'query',
            schema: { type: 'string' },
            description: 'The user Ids to search for.',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SearchResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const putApiUserSearchRoute = createRoute({
  method: 'put',
  path: '/api/user/search',
  description:
    'Request a refresh of the User search index. This API is not generally necessary and the search index will become consistent in a reasonable amount of time. There may be scenarios where you may wish to manually request an index refresh. One example may be  if you are using the Search API or Delete Tenant API immediately following a User Create etc, you may wish to request a refresh to  ensure the index immediately current before making a query request to the search index.',
  operationId: 'refreshUserSearchIndexWithId',
  responses: { 200: { description: 'Success' }, default: { description: 'Error' } },
})

export const postApiUserSearchRoute = createRoute({
  method: 'post',
  path: '/api/user/search',
  description: 'Retrieves the users for the given search criteria and pagination.',
  operationId: 'searchUsersByQueryWithId',
  request: { body: { content: { 'application/json': { schema: SearchRequestSchema } } } },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SearchResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiUserTwoFactorRecoveryCodeUserIdRoute = createRoute({
  method: 'get',
  path: '/api/user/two-factor/recovery-code/{userId}',
  description: 'Retrieve two-factor recovery codes for a user.',
  operationId: 'retrieveTwoFactorRecoveryCodesWithId',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the user to retrieve Two Factor recovery codes.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TwoFactorRecoveryCodeResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiUserTwoFactorRecoveryCodeUserIdRoute = createRoute({
  method: 'post',
  path: '/api/user/two-factor/recovery-code/{userId}',
  description:
    'Generate two-factor recovery codes for a user. Generating two-factor recovery codes will invalidate any existing recovery codes.',
  operationId: 'generateTwoFactorRecoveryCodesWithId',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the user to generate new Two Factor recovery codes.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TwoFactorRecoveryCodeResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const putApiUserTwoFactorUserIdRoute = createRoute({
  method: 'put',
  path: '/api/user/two-factor/{userId}',
  description: 'Updates the two-factor method for the given user using a JSON body.',
  operationId: 'updateTwoFactorWithId',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the user to update.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TwoFactorUpdateRequestSchema } } },
  },
  responses: {
    200: { description: 'Success' },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiUserTwoFactorUserIdRoute = createRoute({
  method: 'post',
  path: '/api/user/two-factor/{userId}',
  description: 'Enable two-factor authentication for a user.',
  operationId: 'enableTwoFactorWithId',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the user to enable two-factor authentication.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TwoFactorRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TwoFactorResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const deleteApiUserTwoFactorUserIdRoute = createRoute({
  method: 'delete',
  path: '/api/user/two-factor/{userId}',
  description:
    'Disable two-factor authentication for a user using a JSON body rather than URL parameters. OR Disable two-factor authentication for a user.',
  operationId: 'deleteUserTwoFactorWithId',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: "The Id of the User for which you're disabling two-factor authentication.",
          },
        }),
    }),
    query: z.object({
      methodId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'methodId',
            in: 'query',
            schema: { type: 'string' },
            description: 'The two-factor method identifier you wish to disable',
            required: false,
          },
        }),
      code: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'code',
            in: 'query',
            schema: { type: 'string' },
            description:
              'The two-factor code used verify the the caller knows the two-factor secret.',
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TwoFactorDisableRequestSchema } } },
  },
  responses: {
    200: { description: 'Success' },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const putApiUserVerifyEmailRoute = createRoute({
  method: 'put',
  path: '/api/user/verify-email',
  description:
    'Re-sends the verification email to the user. If the Application has configured a specific email template this will be used instead of the tenant configuration. OR Re-sends the verification email to the user. OR Generate a new Email Verification Id to be used with the Verify Email API. This API will not attempt to send an email to the User. This API may be used to collect the verificationId for use with a third party system.',
  operationId: 'updateUserVerifyEmail',
  request: {
    query: z.object({
      applicationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'applicationId',
            in: 'query',
            schema: { type: 'string' },
            description:
              'The unique Application Id to used to resolve an application specific email template.',
            required: false,
          },
        }),
      email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'email',
            in: 'query',
            schema: { type: 'string' },
            description: 'The email address of the user that needs a new verification email.',
            required: false,
          },
        }),
      sendVerifyEmail: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sendVerifyEmail',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: VerifyEmailResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiUserVerifyEmailRoute = createRoute({
  method: 'post',
  path: '/api/user/verify-email',
  description:
    "Administratively verify a user's email address. Use this method to bypass email verification for the user.  The request body will contain the userId to be verified. An API key is required when sending the userId in the request body. OR Confirms a user's email address.   The request body will contain the verificationId. You may also be required to send a one-time use code based upon your configuration. When  the tenant is configured to gate a user until their email address is verified, this procedures requires two values instead of one.  The verificationId is a high entropy value and the one-time use code is a low entropy value that is easily entered in a user interactive form. The  two values together are able to confirm a user's email address and mark the user's email address as verified.",
  operationId: 'createUserVerifyEmail',
  request: { body: { content: { 'application/json': { schema: VerifyEmailRequestSchema } } } },
  responses: {
    200: { description: 'Success' },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const putApiUserVerifyRegistrationRoute = createRoute({
  method: 'put',
  path: '/api/user/verify-registration',
  description:
    'Re-sends the application registration verification email to the user. OR Generate a new Application Registration Verification Id to be used with the Verify Registration API. This API will not attempt to send an email to the User. This API may be used to collect the verificationId for use with a third party system.',
  operationId: 'updateUserVerifyRegistration',
  request: {
    query: z.object({
      email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'email',
            in: 'query',
            schema: { type: 'string' },
            description: 'The email address of the user that needs a new verification email.',
            required: false,
          },
        }),
      applicationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'applicationId',
            in: 'query',
            schema: { type: 'string' },
            description: 'The Id of the application to be verified.',
            required: false,
          },
        }),
      sendVerifyPasswordEmail: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sendVerifyPasswordEmail',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: VerifyRegistrationResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiUserVerifyRegistrationRoute = createRoute({
  method: 'post',
  path: '/api/user/verify-registration',
  description:
    "Confirms a user's registration.   The request body will contain the verificationId. You may also be required to send a one-time use code based upon your configuration. When  the application is configured to gate a user until their registration is verified, this procedures requires two values instead of one.  The verificationId is a high entropy value and the one-time use code is a low entropy value that is easily entered in a user interactive form. The  two values together are able to confirm a user's registration and mark the user's registration as verified.",
  operationId: 'verifyUserRegistrationWithId',
  request: {
    body: { content: { 'application/json': { schema: VerifyRegistrationRequestSchema } } },
  },
  responses: {
    200: { description: 'Success' },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiUserUserIdRoute = createRoute({
  method: 'get',
  path: '/api/user/{userId}',
  description: 'Retrieves the user for the given Id.',
  operationId: 'retrieveUserWithId',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the user.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UserResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const putApiUserUserIdRoute = createRoute({
  method: 'put',
  path: '/api/user/{userId}',
  description: 'Updates the user with the given Id. OR Reactivates the user with the given Id.',
  operationId: 'updateUserWithId',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the user to update.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
    query: z.object({
      reactivate: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'reactivate', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
    body: { content: { 'application/json': { schema: UserRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UserResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiUserUserIdRoute = createRoute({
  method: 'post',
  path: '/api/user/{userId}',
  description:
    'Creates a user. You can optionally specify an Id for the user, if not provided one will be generated.',
  operationId: 'createUserWithId',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description:
              'The Id for the user. If not provided a secure random UUID will be generated.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UserRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UserResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const deleteApiUserUserIdRoute = createRoute({
  method: 'delete',
  path: '/api/user/{userId}',
  description:
    'Deletes the user based on the given request (sent to the API as JSON). This permanently deletes all information, metrics, reports and data associated with the user. OR Deletes the user for the given Id. This permanently deletes all information, metrics, reports and data associated with the user. OR Deactivates the user with the given Id.',
  operationId: 'deleteUserWithId',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the user to delete (required).',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
    query: z.object({
      hardDelete: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'hardDelete', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
    body: { content: { 'application/json': { schema: UserDeleteSingleRequestSchema } } },
  },
  responses: {
    200: { description: 'Success' },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const patchApiUserUserIdRoute = createRoute({
  method: 'patch',
  path: '/api/user/{userId}',
  description: 'Updates, via PATCH, the user with the given Id.',
  operationId: 'patchUserWithId',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the user to update.',
          },
        }),
    }),
    headers: z.object({
      'X-FusionAuth-TenantId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'X-FusionAuth-TenantId',
            description:
              'The unique Id of the tenant used to scope this API request. Only required when there is more than one tenant and the API key is not tenant-scoped.',
            required: false,
            schema: { type: 'string', format: 'UUID' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UserRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UserResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiWebauthnRoute = createRoute({
  method: 'get',
  path: '/api/webauthn',
  description: 'Retrieves all WebAuthn credentials for the given user.',
  operationId: 'retrieveWebAuthnCredentialsForUserWithId',
  request: {
    query: z.object({
      userId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'userId',
            in: 'query',
            schema: { type: 'string' },
            description: "The user's ID.",
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: WebAuthnCredentialResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const deleteApiWebauthnRoute = createRoute({
  method: 'delete',
  path: '/api/webauthn',
  description: 'Deletes all of the WebAuthn credentials for the given User Id.',
  operationId: 'deleteWebAuthnCredentialsForUserWithId',
  request: {
    query: z.object({
      userId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'userId',
            in: 'query',
            schema: { type: 'string' },
            description: 'The unique Id of the User to delete WebAuthn passkeys for.',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiWebauthnAssertRoute = createRoute({
  method: 'post',
  path: '/api/webauthn/assert',
  description:
    'Complete a WebAuthn authentication ceremony by validating the signature against the previously generated challenge without logging the user in',
  operationId: 'completeWebAuthnAssertionWithId',
  request: { body: { content: { 'application/json': { schema: WebAuthnLoginRequestSchema } } } },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: WebAuthnAssertResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiWebauthnImportRoute = createRoute({
  method: 'post',
  path: '/api/webauthn/import',
  description: 'Import a WebAuthn credential',
  operationId: 'importWebAuthnCredentialWithId',
  request: {
    body: { content: { 'application/json': { schema: WebAuthnCredentialImportRequestSchema } } },
  },
  responses: {
    200: { description: 'Success' },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiWebauthnLoginRoute = createRoute({
  method: 'post',
  path: '/api/webauthn/login',
  description:
    'Complete a WebAuthn authentication ceremony by validating the signature against the previously generated challenge and then login the user in',
  operationId: 'completeWebAuthnLoginWithId',
  request: { body: { content: { 'application/json': { schema: WebAuthnLoginRequestSchema } } } },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: LoginResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiWebauthnRegisterCompleteRoute = createRoute({
  method: 'post',
  path: '/api/webauthn/register/complete',
  description:
    'Complete a WebAuthn registration ceremony by validating the client request and saving the new credential',
  operationId: 'completeWebAuthnRegistrationWithId',
  request: {
    body: { content: { 'application/json': { schema: WebAuthnRegisterCompleteRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: WebAuthnRegisterCompleteResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiWebauthnRegisterStartRoute = createRoute({
  method: 'post',
  path: '/api/webauthn/register/start',
  description: 'Start a WebAuthn registration ceremony by generating a new challenge for the user',
  operationId: 'startWebAuthnRegistrationWithId',
  request: {
    body: { content: { 'application/json': { schema: WebAuthnRegisterStartRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: WebAuthnRegisterStartResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiWebauthnStartRoute = createRoute({
  method: 'post',
  path: '/api/webauthn/start',
  description:
    'Start a WebAuthn authentication ceremony by generating a new challenge for the user',
  operationId: 'startWebAuthnLoginWithId',
  request: { body: { content: { 'application/json': { schema: WebAuthnStartRequestSchema } } } },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: WebAuthnStartResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiWebauthnIdRoute = createRoute({
  method: 'get',
  path: '/api/webauthn/{id}',
  description: 'Retrieves the WebAuthn credential for the given Id.',
  operationId: 'retrieveWebAuthnCredentialWithId',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the WebAuthn credential.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: WebAuthnCredentialResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const deleteApiWebauthnIdRoute = createRoute({
  method: 'delete',
  path: '/api/webauthn/{id}',
  description: 'Deletes the WebAuthn credential for the given Id.',
  operationId: 'deleteWebAuthnCredentialWithId',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the WebAuthn credential to delete.',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiWebhookRoute = createRoute({
  method: 'get',
  path: '/api/webhook',
  description:
    'Retrieves the webhook for the given Id. If you pass in null for the Id, this will return all the webhooks.',
  operationId: 'retrieveWebhook',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: WebhookResponseSchema } },
    },
    default: { description: 'Error' },
  },
})

export const postApiWebhookRoute = createRoute({
  method: 'post',
  path: '/api/webhook',
  description:
    'Creates a webhook. You can optionally specify an Id for the webhook, if not provided one will be generated.',
  operationId: 'createWebhook',
  request: { body: { content: { 'application/json': { schema: WebhookRequestSchema } } } },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: WebhookResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiWebhookSearchRoute = createRoute({
  method: 'get',
  path: '/api/webhook/search',
  description: 'Searches webhooks with the specified criteria and pagination.',
  operationId: 'searchWebhooksByParametersWithId',
  request: {
    query: z.object({
      description: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'description',
            in: 'query',
            schema: { type: 'string' },
            description:
              'The description of the webhook to search for. Supports wildcard search using *.',
            required: false,
          },
        }),
      numberOfResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'numberOfResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'The number of results to return. Defaults to 25.',
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'orderBy',
            in: 'query',
            schema: { type: 'string' },
            description:
              'The field to order the results by. Supported values: description, id, insertInstant, url.',
            required: false,
          },
        }),
      startRow: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'startRow',
            in: 'query',
            schema: { type: 'string' },
            description: 'The offset into the total results. Defaults to 0.',
            required: false,
          },
        }),
      tenantId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'tenantId',
            in: 'query',
            schema: { type: 'string' },
            description: 'The tenant Id to restrict the results to.',
            required: false,
          },
        }),
      url: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'url',
            in: 'query',
            schema: { type: 'string' },
            description: 'The URL of the webhook to search for. Supports wildcard search using *.',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: WebhookSearchResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiWebhookSearchRoute = createRoute({
  method: 'post',
  path: '/api/webhook/search',
  description: 'Searches webhooks with the specified criteria and pagination.',
  operationId: 'searchWebhooksWithId',
  request: { body: { content: { 'application/json': { schema: WebhookSearchRequestSchema } } } },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: WebhookSearchResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const getApiWebhookWebhookIdRoute = createRoute({
  method: 'get',
  path: '/api/webhook/{webhookId}',
  description:
    'Retrieves the webhook for the given Id. If you pass in null for the Id, this will return all the webhooks.',
  operationId: 'retrieveWebhookWithId',
  request: {
    params: z.object({
      webhookId: z
        .string()
        .openapi({
          param: {
            name: 'webhookId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the webhook.',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: WebhookResponseSchema } },
    },
    default: { description: 'Error' },
  },
})

export const putApiWebhookWebhookIdRoute = createRoute({
  method: 'put',
  path: '/api/webhook/{webhookId}',
  description: 'Updates the webhook with the given Id.',
  operationId: 'updateWebhookWithId',
  request: {
    params: z.object({
      webhookId: z
        .string()
        .openapi({
          param: {
            name: 'webhookId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the webhook to update.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: WebhookRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: WebhookResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postApiWebhookWebhookIdRoute = createRoute({
  method: 'post',
  path: '/api/webhook/{webhookId}',
  description:
    'Creates a webhook. You can optionally specify an Id for the webhook, if not provided one will be generated.',
  operationId: 'createWebhookWithId',
  request: {
    params: z.object({
      webhookId: z
        .string()
        .openapi({
          param: {
            name: 'webhookId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description:
              'The Id for the webhook. If not provided a secure random UUID will be generated.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: WebhookRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: WebhookResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const deleteApiWebhookWebhookIdRoute = createRoute({
  method: 'delete',
  path: '/api/webhook/{webhookId}',
  description: 'Deletes the webhook for the given Id.',
  operationId: 'deleteWebhookWithId',
  request: {
    params: z.object({
      webhookId: z
        .string()
        .openapi({
          param: {
            name: 'webhookId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the webhook to delete.',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const patchApiWebhookWebhookIdRoute = createRoute({
  method: 'patch',
  path: '/api/webhook/{webhookId}',
  description: 'Patches the webhook with the given Id.',
  operationId: 'patchWebhookWithId',
  request: {
    params: z.object({
      webhookId: z
        .string()
        .openapi({
          param: {
            name: 'webhookId',
            in: 'path',
            schema: { type: 'string' },
            required: true,
            description: 'The Id of the webhook to update.',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: WebhookRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: WebhookResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postOauth2DeviceApproveRoute = createRoute({
  method: 'post',
  path: '/oauth2/device/approve',
  description: 'Approve a device grant. OR Approve a device grant.',
  operationId: 'createDeviceApprove',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              client_id: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The unique client identifier. The client Id is the Id of the FusionAuth Application in which you are attempting to authenticate.',
                }),
              client_secret: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The client secret. This value will be required if client authentication is enabled.',
                }),
              user_code: z
                .string()
                .exactOptional()
                .openapi({ description: 'The end-user verification code.' }),
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
      content: { 'application/json': { schema: DeviceApprovalResponseSchema } },
    },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorsSchema } } },
  },
})

export const postOauth2DeviceUserCodeRoute = createRoute({
  method: 'post',
  path: '/oauth2/device/user-code',
  description:
    'Retrieve a user_code that is part of an in-progress Device Authorization Grant.  This API is useful if you want to build your own login workflow to complete a device grant. OR Retrieve a user_code that is part of an in-progress Device Authorization Grant.  This API is useful if you want to build your own login workflow to complete a device grant.  This request will require an API key.',
  operationId: 'createDeviceUserCode',
  responses: { 200: { description: 'Success' }, default: { description: 'Error' } },
})

export const getOauth2DeviceValidateRoute = createRoute({
  method: 'get',
  path: '/oauth2/device/validate',
  description:
    'Validates the end-user provided user_code from the user-interaction of the Device Authorization Grant. If you build your own activation form you should validate the user provided code prior to beginning the Authorization grant. OR Validates the end-user provided user_code from the user-interaction of the Device Authorization Grant. If you build your own activation form you should validate the user provided code prior to beginning the Authorization grant.',
  operationId: 'retrieveDeviceValidate',
  request: {
    query: z.object({
      user_code: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'user_code',
            in: 'query',
            schema: { type: 'string' },
            description: 'The end-user verification code.',
            required: false,
          },
        }),
      client_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'client_id',
            in: 'query',
            schema: { type: 'string' },
            description: 'The client Id.',
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' }, default: { description: 'Error' } },
})

export const postOauth2DeviceAuthorizeRoute = createRoute({
  method: 'post',
  path: '/oauth2/device_authorize',
  description:
    'Start the Device Authorization flow using a request body OR Start the Device Authorization flow using form-encoded parameters',
  operationId: 'createDevice_authorize',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              client_id: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The unique client identifier. The client Id is the Id of the FusionAuth Application in which you are attempting to authenticate.',
                }),
              client_secret: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The client secret. This value may optionally be provided in the request body instead of the Authorization header.',
                }),
              scope: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "A space-delimited string of the requested scopes. Defaults to all scopes configured in the Application's OAuth configuration.",
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
      content: { 'application/json': { schema: DeviceResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: OAuthErrorSchema } },
    },
  },
})

export const postOauth2IntrospectRoute = createRoute({
  method: 'post',
  path: '/oauth2/introspect',
  description:
    'Inspect an access token issued as the result of the Client Credentials Grant. OR Inspect an access token issued as the result of the Client Credentials Grant. OR Inspect an access token issued as the result of the User based grant such as the Authorization Code Grant, Implicit Grant, the User Credentials Grant or the Refresh Grant. OR Inspect an access token issued as the result of the User based grant such as the Authorization Code Grant, Implicit Grant, the User Credentials Grant or the Refresh Grant.',
  operationId: 'createIntrospect',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              token: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The access token returned by this OAuth provider as the result of a successful client credentials grant.',
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
      content: { 'application/json': { schema: IntrospectResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: OAuthErrorSchema } },
    },
  },
})

export const postOauth2TokenRoute = createRoute({
  method: 'post',
  path: '/oauth2/token',
  description:
    'Exchange User Credentials for a Token. If you will be using the Resource Owner Password Credential Grant, you will make a request to the Token endpoint to exchange the user’s email and password for an access token. OR Exchange User Credentials for a Token. If you will be using the Resource Owner Password Credential Grant, you will make a request to the Token endpoint to exchange the user’s email and password for an access token. OR Exchange a Refresh Token for an Access Token. If you will be using the Refresh Token Grant, you will make a request to the Token endpoint to exchange the user’s refresh token for an access token. OR Exchange a Refresh Token for an Access Token. If you will be using the Refresh Token Grant, you will make a request to the Token endpoint to exchange the user’s refresh token for an access token. OR Exchanges an OAuth authorization code for an access token. Makes a request to the Token endpoint to exchange the authorization code returned from the Authorize endpoint for an access token. OR Exchanges an OAuth authorization code and code_verifier for an access token. Makes a request to the Token endpoint to exchange the authorization code returned from the Authorize endpoint and a code_verifier for an access token. OR Exchanges an OAuth authorization code and code_verifier for an access token. Makes a request to the Token endpoint to exchange the authorization code returned from the Authorize endpoint and a code_verifier for an access token. OR Exchanges an OAuth authorization code for an access token. Makes a request to the Token endpoint to exchange the authorization code returned from the Authorize endpoint for an access token. OR Make a Client Credentials grant request to obtain an access token. OR Make a Client Credentials grant request to obtain an access token.',
  operationId: 'createToken',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              username: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The login identifier of the user. The login identifier can be either the email or the username.',
                }),
              password: z.string().exactOptional().openapi({ description: 'The user’s password.' }),
              client_id: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The unique client identifier. The client Id is the Id of the FusionAuth Application in which you are attempting to authenticate. This parameter is optional when the Authorization header is provided. This parameter is optional when Basic Authorization is used to authenticate this request.',
                }),
              client_secret: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The client secret. This value may optionally be provided in the request body instead of the Authorization header.',
                }),
              grant_type: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The grant type to be used. This value must be set to password',
                }),
              scope: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'This parameter is optional and if omitted, the same scope requested during the authorization request will be used. If provided the scopes must match those requested during the initial authorization request.',
                }),
              user_code: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The end-user verification code. This code is required if using this endpoint to approve the Device Authorization.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: AccessTokenSchema } } },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: OAuthErrorSchema } },
    },
  },
})

export const getOauth2UserinfoRoute = createRoute({
  method: 'get',
  path: '/oauth2/userinfo',
  description:
    'Call the UserInfo endpoint to retrieve User Claims from the access token issued by FusionAuth.',
  operationId: 'retrieveUserInfoFromAccessTokenWithId',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UserinfoResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: OAuthErrorSchema } },
    },
  },
  security: [{ BearerAuth: [] }],
})
