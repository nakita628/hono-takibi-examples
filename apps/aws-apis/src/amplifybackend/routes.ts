import { createRoute, z } from '@hono/zod-openapi'

const StringSchema = z.string().openapi('String')

const CloneBackendResponseSchema = z
  .object({
    AppId: StringSchema.exactOptional().openapi({
      xml: { name: 'appId' },
      description: 'The app ID.',
    }),
    BackendEnvironmentName: StringSchema.exactOptional().openapi({
      xml: { name: 'backendEnvironmentName' },
      description: 'The name of the backend environment.',
    }),
    Error: StringSchema.exactOptional().openapi({
      xml: { name: 'error' },
      description: 'If the request fails, this error is returned.',
    }),
    JobId: StringSchema.exactOptional().openapi({
      xml: { name: 'jobId' },
      description: 'The ID for the job.',
    }),
    Operation: StringSchema.exactOptional().openapi({
      xml: { name: 'operation' },
      description: 'The name of the operation.',
    }),
    Status: StringSchema.exactOptional().openapi({
      xml: { name: 'status' },
      description: 'The current status of the request.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CloneBackendResponse')

const NotFoundExceptionSchema = z.any().openapi('NotFoundException')

const GatewayTimeoutExceptionSchema = z.any().openapi('GatewayTimeoutException')

const TooManyRequestsExceptionSchema = z.any().openapi('TooManyRequestsException')

const BadRequestExceptionSchema = z.any().openapi('BadRequestException')

const CreateBackendResponseSchema = z
  .object({
    AppId: StringSchema.exactOptional().openapi({
      xml: { name: 'appId' },
      description: 'The app ID.',
    }),
    BackendEnvironmentName: StringSchema.exactOptional().openapi({
      xml: { name: 'backendEnvironmentName' },
      description: 'The name of the backend environment.',
    }),
    Error: StringSchema.exactOptional().openapi({
      xml: { name: 'error' },
      description: 'If the request fails, this error is returned.',
    }),
    JobId: StringSchema.exactOptional().openapi({
      xml: { name: 'jobId' },
      description: 'The ID for the job.',
    }),
    Operation: StringSchema.exactOptional().openapi({
      xml: { name: 'operation' },
      description: 'The name of the operation.',
    }),
    Status: StringSchema.exactOptional().openapi({
      xml: { name: 'status' },
      description: 'The current status of the request.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateBackendResponse')

const CreateBackendAPIResponseSchema = z
  .object({
    AppId: StringSchema.exactOptional().openapi({
      xml: { name: 'appId' },
      description: 'The app ID.',
    }),
    BackendEnvironmentName: StringSchema.exactOptional().openapi({
      xml: { name: 'backendEnvironmentName' },
      description: 'The name of the backend environment.',
    }),
    Error: StringSchema.exactOptional().openapi({
      xml: { name: 'error' },
      description: 'If the request fails, this error is returned.',
    }),
    JobId: StringSchema.exactOptional().openapi({
      xml: { name: 'jobId' },
      description: 'The ID for the job.',
    }),
    Operation: StringSchema.exactOptional().openapi({
      xml: { name: 'operation' },
      description: 'The name of the operation.',
    }),
    Status: StringSchema.exactOptional().openapi({
      xml: { name: 'status' },
      description: 'The current status of the request.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateBackendAPIResponse')

const ModeSchema = z
  .enum(['API_KEY', 'AWS_IAM', 'AMAZON_COGNITO_USER_POOLS', 'OPENID_CONNECT'])
  .openapi('Mode')

const DoubleSchema = z.float64().openapi('Double')

const BackendAPIAppSyncAuthSettingsSchema = z
  .object({
    CognitoUserPoolId: StringSchema.exactOptional().openapi({
      xml: { name: 'cognitoUserPoolId' },
      description:
        'The Amazon Cognito user pool ID, if Amazon Cognito was used as an authentication setting to access your data models.',
    }),
    Description: StringSchema.exactOptional().openapi({
      xml: { name: 'description' },
      description:
        'The API key description for API_KEY, if it was used as an authentication mechanism to access your data models.',
    }),
    ExpirationTime: DoubleSchema.exactOptional().openapi({
      xml: { name: 'expirationTime' },
      description:
        'The API key expiration time for API_KEY, if it was used as an authentication mechanism to access your data models.',
    }),
    OpenIDAuthTTL: StringSchema.exactOptional().openapi({
      xml: { name: 'openIDAuthTTL' },
      description: 'The expiry time for the OpenID authentication mechanism.',
    }),
    OpenIDClientId: StringSchema.exactOptional().openapi({
      xml: { name: 'openIDClientId' },
      description:
        'The clientID for openID, if openID was used as an authentication setting to access your data models.',
    }),
    OpenIDIatTTL: StringSchema.exactOptional().openapi({
      xml: { name: 'openIDIatTTL' },
      description: 'The expiry time for the OpenID authentication mechanism.',
    }),
    OpenIDIssueURL: StringSchema.exactOptional().openapi({
      xml: { name: 'openIDIssueURL' },
      description:
        'The openID issuer URL, if openID was used as an authentication setting to access your data models.',
    }),
    OpenIDProviderName: StringSchema.exactOptional().openapi({
      xml: { name: 'openIDProviderName' },
      description:
        'The OpenID provider name, if OpenID was used as an authentication mechanism to access your data models.',
    }),
  })
  .openapi({
    description:
      'The authentication settings for accessing provisioned data models in your Amplify project.',
    required: [],
  })
  .openapi('BackendAPIAppSyncAuthSettings')

const BackendAPIAuthTypeSchema = z
  .object({
    Mode: ModeSchema.exactOptional().openapi({
      xml: { name: 'mode' },
      description: 'Describes the authentication mode.',
    }),
    Settings: BackendAPIAppSyncAuthSettingsSchema.exactOptional().openapi({
      xml: { name: 'settings' },
      description: 'Describes settings for the authentication mode.',
    }),
  })
  .openapi({
    description: 'Describes the auth types for your configured data models.',
    required: [],
  })
  .openapi('BackendAPIAuthType')

const ListOfBackendAPIAuthTypeSchema = z
  .array(BackendAPIAuthTypeSchema)
  .openapi('ListOfBackendAPIAuthType')

const ResolutionStrategySchema = z
  .enum(['OPTIMISTIC_CONCURRENCY', 'LAMBDA', 'AUTOMERGE', 'NONE'])
  .openapi('ResolutionStrategy')

const BackendAPIConflictResolutionSchema = z
  .object({
    ResolutionStrategy: ResolutionStrategySchema.exactOptional().openapi({
      xml: { name: 'resolutionStrategy' },
      description: 'The strategy for conflict resolution.',
    }),
  })
  .openapi({
    description:
      'Describes the conflict resolution configuration for your data model configured in your Amplify project.',
    required: [],
  })
  .openapi('BackendAPIConflictResolution')

const CreateBackendAuthResponseSchema = z
  .object({
    AppId: StringSchema.exactOptional().openapi({
      xml: { name: 'appId' },
      description: 'The app ID.',
    }),
    BackendEnvironmentName: StringSchema.exactOptional().openapi({
      xml: { name: 'backendEnvironmentName' },
      description: 'The name of the backend environment.',
    }),
    Error: StringSchema.exactOptional().openapi({
      xml: { name: 'error' },
      description: 'If the request fails, this error is returned.',
    }),
    JobId: StringSchema.exactOptional().openapi({
      xml: { name: 'jobId' },
      description: 'The ID for the job.',
    }),
    Operation: StringSchema.exactOptional().openapi({
      xml: { name: 'operation' },
      description: 'The name of the operation.',
    }),
    Status: StringSchema.exactOptional().openapi({
      xml: { name: 'status' },
      description: 'The current status of the request.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateBackendAuthResponse')

const AuthResourcesSchema = z
  .enum(['USER_POOL_ONLY', 'IDENTITY_POOL_AND_USER_POOL'])
  .openapi('AuthResources')

const BooleanSchema = z.boolean().openapi('Boolean')

const CreateBackendAuthIdentityPoolConfigSchema = z
  .object({
    IdentityPoolName: StringSchema.openapi({
      xml: { name: 'identityPoolName' },
      description: 'Name of the Amazon Cognito identity pool used for authorization.',
    }),
    UnauthenticatedLogin: BooleanSchema.openapi({
      xml: { name: 'unauthenticatedLogin' },
      description:
        'Set to true or false based on whether you want to enable guest authorization to your Amplify app.',
    }),
  })
  .openapi({
    required: ['UnauthenticatedLogin', 'IdentityPoolName'],
    description:
      'Describes authorization configurations for the auth resources, configured as a part of your Amplify project.',
  })
  .openapi('CreateBackendAuthIdentityPoolConfig')

const ServiceSchema = z.literal('COGNITO').openapi('Service')

const DeliveryMethodSchema = z
  .enum(['EMAIL', 'SMS'])
  .openapi({ description: 'The type of verification message to send.' })
  .openapi('DeliveryMethod')

const EmailSettingsSchema = z
  .object({
    EmailMessage: StringSchema.exactOptional().openapi({
      xml: { name: 'emailMessage' },
      description: 'The contents of the email message.',
    }),
    EmailSubject: StringSchema.exactOptional().openapi({
      xml: { name: 'emailSubject' },
      description: 'The contents of the subject line of the email message.',
    }),
  })
  .openapi({
    description: 'The configuration for the email sent when an app user forgets their password.',
    required: [],
  })
  .openapi('EmailSettings')

const SmsSettingsSchema = z
  .object({
    SmsMessage: StringSchema.exactOptional().openapi({
      xml: { name: 'smsMessage' },
      description: 'The contents of the SMS message.',
    }),
  })
  .openapi({ description: 'SMS settings for authentication.', required: [] })
  .openapi('SmsSettings')

const CreateBackendAuthForgotPasswordConfigSchema = z
  .object({
    DeliveryMethod: DeliveryMethodSchema.openapi({
      xml: { name: 'deliveryMethod' },
      description:
        '<b>(DEPRECATED)</b> Describes which mode to use (either SMS or email) to deliver messages to app users who want to recover their password.',
    }),
    EmailSettings: EmailSettingsSchema.exactOptional().openapi({
      xml: { name: 'emailSettings' },
      description:
        '<b>(DEPRECATED)</b> The configuration for the email sent when an app user forgets their password.',
    }),
    SmsSettings: SmsSettingsSchema.exactOptional().openapi({
      xml: { name: 'smsSettings' },
      description:
        '<b>(DEPRECATED)</b> The configuration for the SMS message sent when an app user forgets their password.',
    }),
  })
  .openapi({
    required: ['DeliveryMethod'],
    description:
      '<b>(DEPRECATED)</b> Describes the forgot password policy for authenticating into the Amplify app.',
  })
  .openapi('CreateBackendAuthForgotPasswordConfig')

const MFAModeSchema = z.enum(['ON', 'OFF', 'OPTIONAL']).openapi('MFAMode')

const MfaTypesElementSchema = z.enum(['SMS', 'TOTP']).openapi('MfaTypesElement')

const ListOfMfaTypesElementSchema = z.array(MfaTypesElementSchema).openapi('ListOfMfaTypesElement')

const SettingsSchema = z
  .object({
    MfaTypes: ListOfMfaTypesElementSchema.exactOptional().openapi({
      xml: { name: 'mfaTypes' },
      description: 'The supported MFA types.',
    }),
    SmsMessage: StringSchema.exactOptional().openapi({
      xml: { name: 'smsMessage' },
      description: 'The body of the SMS message.',
    }),
  })
  .openapi({
    description: 'The settings of your MFA configuration for the backend of your Amplify project.',
    required: [],
  })
  .openapi('Settings')

const CreateBackendAuthMFAConfigSchema = z
  .object({
    MFAMode: MFAModeSchema.openapi({
      description:
        'Describes whether MFA should be [ON, OFF, or OPTIONAL] for authentication in your Amplify project.',
    }),
    Settings: SettingsSchema.exactOptional().openapi({
      xml: { name: 'settings' },
      description:
        'Describes the configuration settings and methods for your Amplify app users to use MFA.',
    }),
  })
  .openapi({
    required: ['MFAMode'],
    description:
      'Describes whether to apply multi-factor authentication policies for your Amazon Cognito user pool configured as a part of your Amplify project.',
  })
  .openapi('CreateBackendAuthMFAConfig')

const OAuthGrantTypeSchema = z.enum(['CODE', 'IMPLICIT']).openapi('OAuthGrantType')

const OAuthScopesElementSchema = z
  .enum(['PHONE', 'EMAIL', 'OPENID', 'PROFILE', 'AWS_COGNITO_SIGNIN_USER_ADMIN'])
  .openapi('OAuthScopesElement')

const ListOfOAuthScopesElementSchema = z
  .array(OAuthScopesElementSchema)
  .openapi('ListOfOAuthScopesElement')

const ListOfStringSchema = z.array(StringSchema).openapi('ListOfString')

const BackendAuthSocialProviderConfigSchema = z
  .object({
    ClientId: StringSchema.exactOptional().openapi({
      xml: { name: 'client_id' },
      description:
        'Describes the client_id, which can be obtained from the third-party social federation provider.',
    }),
    ClientSecret: StringSchema.exactOptional().openapi({
      xml: { name: 'client_secret' },
      description:
        'Describes the client_secret, which can be obtained from third-party social federation providers.',
    }),
  })
  .openapi({
    description:
      'Describes third-party social federation configurations for allowing your app users to sign in using OAuth.',
    required: [],
  })
  .openapi('BackendAuthSocialProviderConfig')

const BackendAuthAppleProviderConfigSchema = z
  .object({
    ClientId: StringSchema.exactOptional().openapi({
      xml: { name: 'client_id' },
      description: 'Describes the client_id (also called Services ID) that comes from Apple.',
    }),
    KeyId: StringSchema.exactOptional().openapi({
      xml: { name: 'key_id' },
      description: 'Describes the key_id that comes from Apple.',
    }),
    PrivateKey: StringSchema.exactOptional().openapi({
      xml: { name: 'private_key' },
      description: 'Describes the private_key that comes from Apple.',
    }),
    TeamId: StringSchema.exactOptional().openapi({
      xml: { name: 'team_id' },
      description: 'Describes the team_id that comes from Apple.',
    }),
  })
  .openapi({
    description:
      'Describes Apple social federation configurations for allowing your app users to sign in using OAuth.',
    required: [],
  })
  .openapi('BackendAuthAppleProviderConfig')

const SocialProviderSettingsSchema = z
  .object({
    Facebook: BackendAuthSocialProviderConfigSchema.exactOptional(),
    Google: BackendAuthSocialProviderConfigSchema.exactOptional(),
    LoginWithAmazon: BackendAuthSocialProviderConfigSchema.exactOptional(),
    SignInWithApple: BackendAuthAppleProviderConfigSchema.exactOptional(),
  })
  .openapi({
    description:
      'The settings for using the social identity providers for access to your Amplify app.',
    required: [],
  })
  .openapi('SocialProviderSettings')

const CreateBackendAuthOAuthConfigSchema = z
  .object({
    DomainPrefix: StringSchema.exactOptional().openapi({
      xml: { name: 'domainPrefix' },
      description: 'The domain prefix for your Amplify app.',
    }),
    OAuthGrantType: OAuthGrantTypeSchema.openapi({
      xml: { name: 'oAuthGrantType' },
      description:
        'The OAuth grant type that you use to allow app users to authenticate from your Amplify app.',
    }),
    OAuthScopes: ListOfOAuthScopesElementSchema.openapi({
      xml: { name: 'oAuthScopes' },
      description:
        'List of OAuth-related flows used to allow your app users to authenticate from your Amplify app.',
    }),
    RedirectSignInURIs: ListOfStringSchema.openapi({
      xml: { name: 'redirectSignInURIs' },
      description: 'The redirected URI for signing in to your Amplify app.',
    }),
    RedirectSignOutURIs: ListOfStringSchema.openapi({
      xml: { name: 'redirectSignOutURIs' },
      description: 'Redirect URLs that OAuth uses when a user signs out of an Amplify app.',
    }),
    SocialProviderSettings: SocialProviderSettingsSchema.exactOptional().openapi({
      xml: { name: 'socialProviderSettings' },
      description: 'The settings for using social providers to access your Amplify app.',
    }),
  })
  .openapi({
    required: ['RedirectSignOutURIs', 'RedirectSignInURIs', 'OAuthGrantType', 'OAuthScopes'],
    description: 'Creates the OAuth configuration for your Amplify project.',
  })
  .openapi('CreateBackendAuthOAuthConfig')

const AdditionalConstraintsElementSchema = z
  .enum(['REQUIRE_DIGIT', 'REQUIRE_LOWERCASE', 'REQUIRE_SYMBOL', 'REQUIRE_UPPERCASE'])
  .openapi('AdditionalConstraintsElement')

const ListOfAdditionalConstraintsElementSchema = z
  .array(AdditionalConstraintsElementSchema)
  .openapi('ListOfAdditionalConstraintsElement')

const CreateBackendAuthPasswordPolicyConfigSchema = z
  .object({
    AdditionalConstraints: ListOfAdditionalConstraintsElementSchema.exactOptional().openapi({
      xml: { name: 'additionalConstraints' },
      description:
        'Additional constraints for the password used to access the backend of your Amplify project.',
    }),
    MinimumLength: DoubleSchema.openapi({
      xml: { name: 'minimumLength' },
      description:
        'The minimum length of the password used to access the backend of your Amplify project.',
    }),
  })
  .openapi({
    required: ['MinimumLength'],
    description: 'The password policy configuration for the backend to your Amplify project.',
  })
  .openapi('CreateBackendAuthPasswordPolicyConfig')

const RequiredSignUpAttributesElementSchema = z
  .enum([
    'ADDRESS',
    'BIRTHDATE',
    'EMAIL',
    'FAMILY_NAME',
    'GENDER',
    'GIVEN_NAME',
    'LOCALE',
    'MIDDLE_NAME',
    'NAME',
    'NICKNAME',
    'PHONE_NUMBER',
    'PICTURE',
    'PREFERRED_USERNAME',
    'PROFILE',
    'UPDATED_AT',
    'WEBSITE',
    'ZONE_INFO',
  ])
  .openapi('RequiredSignUpAttributesElement')

const ListOfRequiredSignUpAttributesElementSchema = z
  .array(RequiredSignUpAttributesElementSchema)
  .openapi('ListOfRequiredSignUpAttributesElement')

const SignInMethodSchema = z
  .enum(['EMAIL', 'EMAIL_AND_PHONE_NUMBER', 'PHONE_NUMBER', 'USERNAME'])
  .openapi('SignInMethod')

const CreateBackendAuthVerificationMessageConfigSchema = z
  .object({
    DeliveryMethod: DeliveryMethodSchema.openapi({
      xml: { name: 'deliveryMethod' },
      description: 'The type of verification message to send.',
    }),
    EmailSettings: EmailSettingsSchema.exactOptional().openapi({
      xml: { name: 'emailSettings' },
      description: 'The settings for the email message.',
    }),
    SmsSettings: SmsSettingsSchema.exactOptional().openapi({
      xml: { name: 'smsSettings' },
      description: 'The settings for the SMS message.',
    }),
  })
  .openapi({
    required: ['DeliveryMethod'],
    description:
      'Creates an email or SMS verification message for the auth resource configured for your Amplify project.',
  })
  .openapi('CreateBackendAuthVerificationMessageConfig')

const CreateBackendAuthUserPoolConfigSchema = z
  .object({
    ForgotPassword: CreateBackendAuthForgotPasswordConfigSchema.exactOptional().openapi({
      xml: { name: 'forgotPassword' },
      description:
        '<b>(DEPRECATED)</b> Describes the forgotten password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.',
    }),
    Mfa: CreateBackendAuthMFAConfigSchema.exactOptional().openapi({
      xml: { name: 'mfa' },
      description:
        'Describes whether to apply multi-factor authentication policies for your Amazon Cognito user pool configured as a part of your Amplify project.',
    }),
    OAuth: CreateBackendAuthOAuthConfigSchema.exactOptional().openapi({
      xml: { name: 'oAuth' },
      description:
        'Describes the OAuth policy and rules for your Amazon Cognito user pool, configured as a part of your Amplify project.',
    }),
    PasswordPolicy: CreateBackendAuthPasswordPolicyConfigSchema.exactOptional().openapi({
      xml: { name: 'passwordPolicy' },
      description:
        'Describes the password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.',
    }),
    RequiredSignUpAttributes: ListOfRequiredSignUpAttributesElementSchema.openapi({
      xml: { name: 'requiredSignUpAttributes' },
      description: 'The required attributes to sign up new users in the user pool.',
    }),
    SignInMethod: SignInMethodSchema.openapi({
      xml: { name: 'signInMethod' },
      description:
        'Describes the sign-in methods that your Amplify app users use to log in using the Amazon Cognito user pool, configured as a part of your Amplify project.',
    }),
    UserPoolName: StringSchema.openapi({
      xml: { name: 'userPoolName' },
      description: 'The Amazon Cognito user pool name.',
    }),
    VerificationMessage: CreateBackendAuthVerificationMessageConfigSchema.exactOptional().openapi({
      xml: { name: 'verificationMessage' },
      description:
        'Describes the email or SMS verification message for your Amazon Cognito user pool, configured as a part of your Amplify project.',
    }),
  })
  .openapi({
    required: ['RequiredSignUpAttributes', 'SignInMethod', 'UserPoolName'],
    description:
      'Describes the Amazon Cognito user pool configuration for the auth resource to be configured for your Amplify project.',
  })
  .openapi('CreateBackendAuthUserPoolConfig')

const CreateBackendConfigResponseSchema = z
  .object({
    AppId: StringSchema.exactOptional().openapi({
      xml: { name: 'appId' },
      description: 'The app ID.',
    }),
    BackendEnvironmentName: StringSchema.exactOptional().openapi({
      xml: { name: 'backendEnvironmentName' },
      description: 'The name of the backend environment.',
    }),
    JobId: StringSchema.exactOptional().openapi({
      xml: { name: 'jobId' },
      description: 'The ID for the job.',
    }),
    Status: StringSchema.exactOptional().openapi({
      xml: { name: 'status' },
      description: 'The current status of the request.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateBackendConfigResponse')

const CreateBackendStorageResponseSchema = z
  .object({
    AppId: StringSchema.exactOptional().openapi({
      xml: { name: 'appId' },
      description: 'The app ID.',
    }),
    BackendEnvironmentName: StringSchema.exactOptional().openapi({
      xml: { name: 'backendEnvironmentName' },
      description: 'The name of the backend environment.',
    }),
    JobId: StringSchema.exactOptional().openapi({
      xml: { name: 'jobId' },
      description: 'The ID for the job.',
    }),
    Status: StringSchema.exactOptional().openapi({
      xml: { name: 'status' },
      description: 'The current status of the request.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateBackendStorageResponse')

const AuthenticatedElementSchema = z
  .enum(['READ', 'CREATE_AND_UPDATE', 'DELETE'])
  .openapi('AuthenticatedElement')

const ListOfAuthenticatedElementSchema = z
  .array(AuthenticatedElementSchema)
  .openapi('ListOfAuthenticatedElement')

const UnAuthenticatedElementSchema = z
  .enum(['READ', 'CREATE_AND_UPDATE', 'DELETE'])
  .openapi('UnAuthenticatedElement')

const ListOfUnAuthenticatedElementSchema = z
  .array(UnAuthenticatedElementSchema)
  .openapi('ListOfUnAuthenticatedElement')

const BackendStoragePermissionsSchema = z
  .object({
    Authenticated: ListOfAuthenticatedElementSchema.openapi({
      xml: { name: 'authenticated' },
      description:
        'Lists all authenticated user read, write, and delete permissions for your S3 bucket.',
    }),
    UnAuthenticated: ListOfUnAuthenticatedElementSchema.exactOptional().openapi({
      xml: { name: 'unAuthenticated' },
      description:
        'Lists all unauthenticated user read, write, and delete permissions for your S3 bucket.',
    }),
  })
  .openapi({
    required: ['Authenticated'],
    description:
      'Describes the read, write, and delete permissions users have against your storage S3 bucket.',
  })
  .openapi('BackendStoragePermissions')

const ServiceNameSchema = z.literal('S3').openapi('ServiceName')

const CreateTokenResponseSchema = z
  .object({
    AppId: StringSchema.exactOptional().openapi({
      xml: { name: 'appId' },
      description: 'The app ID.',
    }),
    ChallengeCode: StringSchema.exactOptional().openapi({
      xml: { name: 'challengeCode' },
      description: 'One-time challenge code for authenticating into the Amplify Admin UI.',
    }),
    SessionId: StringSchema.exactOptional().openapi({
      xml: { name: 'sessionId' },
      description: 'A unique ID provided when creating a new challenge token.',
    }),
    Ttl: StringSchema.exactOptional().openapi({
      xml: { name: 'ttl' },
      description: 'The expiry time for the one-time generated token code.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateTokenResponse')

const DeleteBackendResponseSchema = z
  .object({
    AppId: StringSchema.exactOptional().openapi({
      xml: { name: 'appId' },
      description: 'The app ID.',
    }),
    BackendEnvironmentName: StringSchema.exactOptional().openapi({
      xml: { name: 'backendEnvironmentName' },
      description: 'The name of the backend environment.',
    }),
    Error: StringSchema.exactOptional().openapi({
      xml: { name: 'error' },
      description: 'If the request fails, this error is returned.',
    }),
    JobId: StringSchema.exactOptional().openapi({
      xml: { name: 'jobId' },
      description: 'The ID for the job.',
    }),
    Operation: StringSchema.exactOptional().openapi({
      xml: { name: 'operation' },
      description: 'The name of the operation.',
    }),
    Status: StringSchema.exactOptional().openapi({
      xml: { name: 'status' },
      description: 'The current status of the request.',
    }),
  })
  .openapi({ required: [] })
  .openapi('DeleteBackendResponse')

const DeleteBackendAPIResponseSchema = z
  .object({
    AppId: StringSchema.exactOptional().openapi({
      xml: { name: 'appId' },
      description: 'The app ID.',
    }),
    BackendEnvironmentName: StringSchema.exactOptional().openapi({
      xml: { name: 'backendEnvironmentName' },
      description: 'The name of the backend environment.',
    }),
    Error: StringSchema.exactOptional().openapi({
      xml: { name: 'error' },
      description: 'If the request fails, this error is returned.',
    }),
    JobId: StringSchema.exactOptional().openapi({
      xml: { name: 'jobId' },
      description: 'The ID for the job.',
    }),
    Operation: StringSchema.exactOptional().openapi({
      xml: { name: 'operation' },
      description: 'The name of the operation.',
    }),
    Status: StringSchema.exactOptional().openapi({
      xml: { name: 'status' },
      description: 'The current status of the request.',
    }),
  })
  .openapi({ required: [] })
  .openapi('DeleteBackendAPIResponse')

const DeleteBackendAuthResponseSchema = z
  .object({
    AppId: StringSchema.exactOptional().openapi({
      xml: { name: 'appId' },
      description: 'The app ID.',
    }),
    BackendEnvironmentName: StringSchema.exactOptional().openapi({
      xml: { name: 'backendEnvironmentName' },
      description: 'The name of the backend environment.',
    }),
    Error: StringSchema.exactOptional().openapi({
      xml: { name: 'error' },
      description: 'If the request fails, this error is returned.',
    }),
    JobId: StringSchema.exactOptional().openapi({
      xml: { name: 'jobId' },
      description: 'The ID for the job.',
    }),
    Operation: StringSchema.exactOptional().openapi({
      xml: { name: 'operation' },
      description: 'The name of the operation.',
    }),
    Status: StringSchema.exactOptional().openapi({
      xml: { name: 'status' },
      description: 'The current status of the request.',
    }),
  })
  .openapi({ required: [] })
  .openapi('DeleteBackendAuthResponse')

const DeleteBackendStorageResponseSchema = z
  .object({
    AppId: StringSchema.exactOptional().openapi({
      xml: { name: 'appId' },
      description: 'The app ID.',
    }),
    BackendEnvironmentName: StringSchema.exactOptional().openapi({
      xml: { name: 'backendEnvironmentName' },
      description: 'The name of the backend environment.',
    }),
    JobId: StringSchema.exactOptional().openapi({
      xml: { name: 'jobId' },
      description: 'The ID for the job.',
    }),
    Status: StringSchema.exactOptional().openapi({
      xml: { name: 'status' },
      description: 'The current status of the request.',
    }),
  })
  .openapi({ required: [] })
  .openapi('DeleteBackendStorageResponse')

const DeleteTokenResponseSchema = z
  .object({
    IsSuccess: BooleanSchema.exactOptional().openapi({
      xml: { name: 'isSuccess' },
      description: 'Indicates whether the request succeeded or failed.',
    }),
  })
  .openapi({ required: [] })
  .openapi('DeleteTokenResponse')

const GenerateBackendAPIModelsResponseSchema = z
  .object({
    AppId: StringSchema.exactOptional().openapi({
      xml: { name: 'appId' },
      description: 'The app ID.',
    }),
    BackendEnvironmentName: StringSchema.exactOptional().openapi({
      xml: { name: 'backendEnvironmentName' },
      description: 'The name of the backend environment.',
    }),
    Error: StringSchema.exactOptional().openapi({
      xml: { name: 'error' },
      description: 'If the request fails, this error is returned.',
    }),
    JobId: StringSchema.exactOptional().openapi({
      xml: { name: 'jobId' },
      description: 'The ID for the job.',
    }),
    Operation: StringSchema.exactOptional().openapi({
      xml: { name: 'operation' },
      description: 'The name of the operation.',
    }),
    Status: StringSchema.exactOptional().openapi({
      xml: { name: 'status' },
      description: 'The current status of the request.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GenerateBackendAPIModelsResponse')

const GetBackendResponseSchema = z
  .object({
    AmplifyFeatureFlags: StringSchema.exactOptional().openapi({
      xml: { name: 'amplifyFeatureFlags' },
      description: 'A stringified version of the cli.json file for your Amplify project.',
    }),
    AmplifyMetaConfig: StringSchema.exactOptional().openapi({
      xml: { name: 'amplifyMetaConfig' },
      description: 'A stringified version of the current configs for your Amplify project.',
    }),
    AppId: StringSchema.exactOptional().openapi({
      xml: { name: 'appId' },
      description: 'The app ID.',
    }),
    AppName: StringSchema.exactOptional().openapi({
      xml: { name: 'appName' },
      description: 'The name of the app.',
    }),
    BackendEnvironmentList: ListOfStringSchema.exactOptional().openapi({
      xml: { name: 'backendEnvironmentList' },
      description: 'A list of backend environments in an array.',
    }),
    BackendEnvironmentName: StringSchema.exactOptional().openapi({
      xml: { name: 'backendEnvironmentName' },
      description: 'The name of the backend environment.',
    }),
    Error: StringSchema.exactOptional().openapi({
      xml: { name: 'error' },
      description: 'If the request failed, this is the returned error.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetBackendResponse')

const BackendAPIResourceConfigSchema = z
  .object({
    AdditionalAuthTypes: ListOfBackendAPIAuthTypeSchema.exactOptional().openapi({
      xml: { name: 'additionalAuthTypes' },
      description: 'Additional authentication methods used to interact with your data models.',
    }),
    ApiName: StringSchema.exactOptional().openapi({
      xml: { name: 'apiName' },
      description:
        'The API name used to interact with the data model, configured as a part of your Amplify project.',
    }),
    ConflictResolution: BackendAPIConflictResolutionSchema.exactOptional().openapi({
      xml: { name: 'conflictResolution' },
      description: 'The conflict resolution strategy for your data stored in the data models.',
    }),
    DefaultAuthType: BackendAPIAuthTypeSchema.exactOptional().openapi({
      xml: { name: 'defaultAuthType' },
      description:
        'The default authentication type for interacting with the configured data models in your Amplify project.',
    }),
    Service: StringSchema.exactOptional().openapi({
      xml: { name: 'service' },
      description: 'The service used to provision and interact with the data model.',
    }),
    TransformSchema: StringSchema.exactOptional().openapi({
      xml: { name: 'transformSchema' },
      description:
        'The definition of the data model in the annotated transform of the GraphQL schema.',
    }),
  })
  .openapi({
    description:
      'The resource config for the data model, configured as a part of the Amplify project.',
    required: [],
  })
  .openapi('BackendAPIResourceConfig')

const GetBackendAPIResponseSchema = z
  .object({
    AppId: StringSchema.exactOptional().openapi({
      xml: { name: 'appId' },
      description: 'The app ID.',
    }),
    BackendEnvironmentName: StringSchema.exactOptional().openapi({
      xml: { name: 'backendEnvironmentName' },
      description: 'The name of the backend environment.',
    }),
    Error: StringSchema.exactOptional().openapi({
      xml: { name: 'error' },
      description: 'If the request fails, this error is returned.',
    }),
    ResourceConfig: BackendAPIResourceConfigSchema.exactOptional().openapi({
      xml: { name: 'resourceConfig' },
      description: 'The resource configuration for this response object.',
    }),
    ResourceName: StringSchema.exactOptional().openapi({
      xml: { name: 'resourceName' },
      description: 'The name of this resource.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetBackendAPIResponse')

const StatusSchema = z.enum(['LATEST', 'STALE']).openapi('Status')

const GetBackendAPIModelsResponseSchema = z
  .object({
    Models: StringSchema.exactOptional().openapi({
      xml: { name: 'models' },
      description: 'Stringified JSON of the datastore model.',
    }),
    Status: StatusSchema.exactOptional().openapi({
      xml: { name: 'status' },
      description: 'The current status of the request.',
    }),
    ModelIntrospectionSchema: StringSchema.exactOptional().openapi({
      xml: { name: 'modelIntrospectionSchema' },
      description:
        'Stringified JSON of the model introspection schema for an existing backend API resource.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetBackendAPIModelsResponse')

const CreateBackendAuthResourceConfigSchema = z
  .object({
    AuthResources: AuthResourcesSchema.openapi({
      xml: { name: 'authResources' },
      description:
        'Defines whether you want to configure only authentication or both authentication and authorization settings.',
    }),
    IdentityPoolConfigs: CreateBackendAuthIdentityPoolConfigSchema.exactOptional().openapi({
      xml: { name: 'identityPoolConfigs' },
      description:
        'Describes the authorization configuration for the Amazon Cognito identity pool, provisioned as a part of your auth resource in the Amplify project.',
    }),
    Service: ServiceSchema.openapi({
      xml: { name: 'service' },
      description:
        'Defines the service name to use when configuring an authentication resource in your Amplify project.',
    }),
    UserPoolConfigs: CreateBackendAuthUserPoolConfigSchema.openapi({
      xml: { name: 'userPoolConfigs' },
      description:
        'Describes authentication configuration for the Amazon Cognito user pool, provisioned as a part of your auth resource in the Amplify project.',
    }),
  })
  .openapi({
    required: ['AuthResources', 'UserPoolConfigs', 'Service'],
    description:
      'Defines the resource configuration when creating an auth resource in your Amplify project.',
  })
  .openapi('CreateBackendAuthResourceConfig')

const GetBackendAuthResponseSchema = z
  .object({
    AppId: StringSchema.exactOptional().openapi({
      xml: { name: 'appId' },
      description: 'The app ID.',
    }),
    BackendEnvironmentName: StringSchema.exactOptional().openapi({
      xml: { name: 'backendEnvironmentName' },
      description: 'The name of the backend environment.',
    }),
    Error: StringSchema.exactOptional().openapi({
      xml: { name: 'error' },
      description: 'If the request fails, this error is returned.',
    }),
    ResourceConfig: CreateBackendAuthResourceConfigSchema.exactOptional().openapi({
      xml: { name: 'resourceConfig' },
      description:
        'The resource configuration for authorization requests to the backend of your Amplify project.',
    }),
    ResourceName: StringSchema.exactOptional().openapi({
      xml: { name: 'resourceName' },
      description: 'The name of this resource.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetBackendAuthResponse')

const GetBackendJobResponseSchema = z
  .object({
    AppId: StringSchema.exactOptional().openapi({
      xml: { name: 'appId' },
      description: 'The app ID.',
    }),
    BackendEnvironmentName: StringSchema.exactOptional().openapi({
      xml: { name: 'backendEnvironmentName' },
      description: 'The name of the backend environment.',
    }),
    CreateTime: StringSchema.exactOptional().openapi({
      xml: { name: 'createTime' },
      description: 'The time when the job was created.',
    }),
    Error: StringSchema.exactOptional().openapi({
      xml: { name: 'error' },
      description: 'If the request fails, this error is returned.',
    }),
    JobId: StringSchema.exactOptional().openapi({
      xml: { name: 'jobId' },
      description: 'The ID for the job.',
    }),
    Operation: StringSchema.exactOptional().openapi({
      xml: { name: 'operation' },
      description: 'The name of the operation.',
    }),
    Status: StringSchema.exactOptional().openapi({
      xml: { name: 'status' },
      description: 'The current status of the request.',
    }),
    UpdateTime: StringSchema.exactOptional().openapi({
      xml: { name: 'updateTime' },
      description: 'The time when the job was last updated.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetBackendJobResponse')

const GetBackendStorageResourceConfigSchema = z
  .object({
    BucketName: StringSchema.exactOptional().openapi({
      xml: { name: 'bucketName' },
      description: 'The name of the S3 bucket.',
    }),
    Imported: BooleanSchema.openapi({
      xml: { name: 'imported' },
      description: 'Returns True if the storage resource has been imported.',
    }),
    Permissions: BackendStoragePermissionsSchema.exactOptional().openapi({
      xml: { name: 'permissions' },
      description: 'The authorization configuration for the storage S3 bucket.',
    }),
    ServiceName: ServiceNameSchema.openapi({
      xml: { name: 'serviceName' },
      description: 'The name of the storage service.',
    }),
  })
  .openapi({
    required: ['ServiceName', 'Imported'],
    description: 'The details for a backend storage resource.',
  })
  .openapi('GetBackendStorageResourceConfig')

const GetBackendStorageResponseSchema = z
  .object({
    AppId: StringSchema.exactOptional().openapi({
      xml: { name: 'appId' },
      description: 'The app ID.',
    }),
    BackendEnvironmentName: StringSchema.exactOptional().openapi({
      xml: { name: 'backendEnvironmentName' },
      description: 'The name of the backend environment.',
    }),
    ResourceConfig: GetBackendStorageResourceConfigSchema.exactOptional().openapi({
      xml: { name: 'resourceConfig' },
      description: 'The resource configuration for the backend storage resource.',
    }),
    ResourceName: StringSchema.exactOptional().openapi({
      xml: { name: 'resourceName' },
      description: 'The name of the storage resource.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetBackendStorageResponse')

const GetTokenResponseSchema = z
  .object({
    AppId: StringSchema.exactOptional().openapi({
      xml: { name: 'appId' },
      description: 'The app ID.',
    }),
    ChallengeCode: StringSchema.exactOptional().openapi({
      xml: { name: 'challengeCode' },
      description: 'The one-time challenge code for authenticating into the Amplify Admin UI.',
    }),
    SessionId: StringSchema.exactOptional().openapi({
      xml: { name: 'sessionId' },
      description: 'A unique ID provided when creating a new challenge token.',
    }),
    Ttl: StringSchema.exactOptional().openapi({
      xml: { name: 'ttl' },
      description: 'The expiry time for the one-time generated token code.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetTokenResponse')

const ImportBackendAuthResponseSchema = z
  .object({
    AppId: StringSchema.exactOptional().openapi({
      xml: { name: 'appId' },
      description: 'The app ID.',
    }),
    BackendEnvironmentName: StringSchema.exactOptional().openapi({
      xml: { name: 'backendEnvironmentName' },
      description: 'The name of the backend environment.',
    }),
    Error: StringSchema.exactOptional().openapi({
      xml: { name: 'error' },
      description: 'If the request fails, this error is returned.',
    }),
    JobId: StringSchema.exactOptional().openapi({
      xml: { name: 'jobId' },
      description: 'The ID for the job.',
    }),
    Operation: StringSchema.exactOptional().openapi({
      xml: { name: 'operation' },
      description: 'The name of the operation.',
    }),
    Status: StringSchema.exactOptional().openapi({
      xml: { name: 'status' },
      description: 'The current status of the request.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ImportBackendAuthResponse')

const ImportBackendStorageResponseSchema = z
  .object({
    AppId: StringSchema.exactOptional().openapi({
      xml: { name: 'appId' },
      description: 'The app ID.',
    }),
    BackendEnvironmentName: StringSchema.exactOptional().openapi({
      xml: { name: 'backendEnvironmentName' },
      description: 'The name of the backend environment.',
    }),
    JobId: StringSchema.exactOptional().openapi({
      xml: { name: 'jobId' },
      description: 'The ID for the job.',
    }),
    Status: StringSchema.exactOptional().openapi({
      xml: { name: 'status' },
      description: 'The current status of the request.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ImportBackendStorageResponse')

const BackendJobRespObjSchema = z
  .object({
    AppId: StringSchema.openapi({ xml: { name: 'appId' }, description: 'The app ID.' }),
    BackendEnvironmentName: StringSchema.openapi({
      xml: { name: 'backendEnvironmentName' },
      description: 'The name of the backend environment.',
    }),
    CreateTime: StringSchema.exactOptional().openapi({
      xml: { name: 'createTime' },
      description: 'The time when the job was created.',
    }),
    Error: StringSchema.exactOptional().openapi({
      xml: { name: 'error' },
      description: 'If the request fails, this error is returned.',
    }),
    JobId: StringSchema.exactOptional().openapi({
      xml: { name: 'jobId' },
      description: 'The ID for the job.',
    }),
    Operation: StringSchema.exactOptional().openapi({
      xml: { name: 'operation' },
      description: 'The name of the operation.',
    }),
    Status: StringSchema.exactOptional().openapi({
      xml: { name: 'status' },
      description: 'The current status of the request.',
    }),
    UpdateTime: StringSchema.exactOptional().openapi({
      xml: { name: 'updateTime' },
      description: 'The time when the job was last updated.',
    }),
  })
  .openapi({
    required: ['AppId', 'BackendEnvironmentName'],
    description: 'The response object for this operation.',
  })
  .openapi('BackendJobRespObj')

const ListOfBackendJobRespObjSchema = z
  .array(BackendJobRespObjSchema)
  .openapi('ListOfBackendJobRespObj')

const ListBackendJobsResponseSchema = z
  .object({
    Jobs: ListOfBackendJobRespObjSchema.exactOptional().openapi({
      xml: { name: 'jobs' },
      description: 'An array of jobs and their properties.',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      xml: { name: 'nextToken' },
      description: 'The token for the next set of results.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListBackendJobsResponse')

const S3BucketInfoSchema = z
  .object({
    CreationDate: StringSchema.exactOptional().openapi({
      xml: { name: 'creationDate' },
      description: 'The creation date of the S3 bucket.',
    }),
    Name: StringSchema.exactOptional().openapi({
      xml: { name: 'name' },
      description: 'The name of the S3 bucket.',
    }),
  })
  .openapi({ description: 'Describes the metadata of the S3 bucket.', required: [] })
  .openapi('S3BucketInfo')

const ListOfS3BucketInfoSchema = z.array(S3BucketInfoSchema).openapi('ListOfS3BucketInfo')

const ListS3BucketsResponseSchema = z
  .object({
    Buckets: ListOfS3BucketInfoSchema.exactOptional().openapi({
      xml: { name: 'buckets' },
      description: 'The list of S3 buckets.',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      xml: { name: 'nextToken' },
      description: 'Reserved for future use.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListS3BucketsResponse')

const RemoveAllBackendsResponseSchema = z
  .object({
    AppId: StringSchema.exactOptional().openapi({
      xml: { name: 'appId' },
      description: 'The app ID.',
    }),
    Error: StringSchema.exactOptional().openapi({
      xml: { name: 'error' },
      description: 'If the request fails, this error is returned.',
    }),
    JobId: StringSchema.exactOptional().openapi({
      xml: { name: 'jobId' },
      description: 'The ID for the job.',
    }),
    Operation: StringSchema.exactOptional().openapi({
      xml: { name: 'operation' },
      description: 'The name of the operation.',
    }),
    Status: StringSchema.exactOptional().openapi({
      xml: { name: 'status' },
      description: 'The current status of the request.',
    }),
  })
  .openapi({ required: [] })
  .openapi('RemoveAllBackendsResponse')

const RemoveBackendConfigResponseSchema = z
  .object({
    Error: StringSchema.exactOptional().openapi({
      xml: { name: 'error' },
      description: 'If the request fails, this error is returned.',
    }),
  })
  .openapi({ required: [] })
  .openapi('RemoveBackendConfigResponse')

const UpdateBackendAPIResponseSchema = z
  .object({
    AppId: StringSchema.exactOptional().openapi({
      xml: { name: 'appId' },
      description: 'The app ID.',
    }),
    BackendEnvironmentName: StringSchema.exactOptional().openapi({
      xml: { name: 'backendEnvironmentName' },
      description: 'The name of the backend environment.',
    }),
    Error: StringSchema.exactOptional().openapi({
      xml: { name: 'error' },
      description: 'If the request fails, this error is returned.',
    }),
    JobId: StringSchema.exactOptional().openapi({
      xml: { name: 'jobId' },
      description: 'The ID for the job.',
    }),
    Operation: StringSchema.exactOptional().openapi({
      xml: { name: 'operation' },
      description: 'The name of the operation.',
    }),
    Status: StringSchema.exactOptional().openapi({
      xml: { name: 'status' },
      description: 'The current status of the request.',
    }),
  })
  .openapi({ required: [] })
  .openapi('UpdateBackendAPIResponse')

const UpdateBackendAuthResponseSchema = z
  .object({
    AppId: StringSchema.exactOptional().openapi({
      xml: { name: 'appId' },
      description: 'The app ID.',
    }),
    BackendEnvironmentName: StringSchema.exactOptional().openapi({
      xml: { name: 'backendEnvironmentName' },
      description: 'The name of the backend environment.',
    }),
    Error: StringSchema.exactOptional().openapi({
      xml: { name: 'error' },
      description: 'If the request fails, this error is returned.',
    }),
    JobId: StringSchema.exactOptional().openapi({
      xml: { name: 'jobId' },
      description: 'The ID for the job.',
    }),
    Operation: StringSchema.exactOptional().openapi({
      xml: { name: 'operation' },
      description: 'The name of the operation.',
    }),
    Status: StringSchema.exactOptional().openapi({
      xml: { name: 'status' },
      description: 'The current status of the request.',
    }),
  })
  .openapi({ required: [] })
  .openapi('UpdateBackendAuthResponse')

const UpdateBackendAuthIdentityPoolConfigSchema = z
  .object({
    UnauthenticatedLogin: BooleanSchema.exactOptional().openapi({
      xml: { name: 'unauthenticatedLogin' },
      description:
        'A boolean value that can be set to allow or disallow guest-level authorization into your Amplify app.',
    }),
  })
  .openapi({
    description:
      'Describes the authorization configuration for the Amazon Cognito identity pool, provisioned as a part of your auth resource in the Amplify project.',
    required: [],
  })
  .openapi('UpdateBackendAuthIdentityPoolConfig')

const UpdateBackendAuthForgotPasswordConfigSchema = z
  .object({
    DeliveryMethod: DeliveryMethodSchema.exactOptional().openapi({
      xml: { name: 'deliveryMethod' },
      description:
        '<b>(DEPRECATED)</b> Describes which mode to use (either SMS or email) to deliver messages to app users that want to recover their password.',
    }),
    EmailSettings: EmailSettingsSchema.exactOptional().openapi({
      xml: { name: 'emailSettings' },
      description:
        '<b>(DEPRECATED)</b> The configuration for the email sent when an app user forgets their password.',
    }),
    SmsSettings: SmsSettingsSchema.exactOptional().openapi({
      xml: { name: 'smsSettings' },
      description:
        '<b>(DEPRECATED)</b> The configuration for the SMS message sent when an Amplify app user forgets their password.',
    }),
  })
  .openapi({
    description:
      '<b>(DEPRECATED)</b> Describes the forgot password policy for authenticating into the Amplify app.',
    required: [],
  })
  .openapi('UpdateBackendAuthForgotPasswordConfig')

const UpdateBackendAuthMFAConfigSchema = z
  .object({
    MFAMode: MFAModeSchema.exactOptional().openapi({
      description: 'The MFA mode for the backend of your Amplify project.',
    }),
    Settings: SettingsSchema.exactOptional().openapi({
      xml: { name: 'settings' },
      description:
        'The settings of your MFA configuration for the backend of your Amplify project.',
    }),
  })
  .openapi({
    description:
      'Updates the multi-factor authentication (MFA) configuration for the backend of your Amplify project.',
    required: [],
  })
  .openapi('UpdateBackendAuthMFAConfig')

const UpdateBackendAuthOAuthConfigSchema = z
  .object({
    DomainPrefix: StringSchema.exactOptional().openapi({
      xml: { name: 'domainPrefix' },
      description:
        'The Amazon Cognito domain prefix used to create a hosted UI for authentication.',
    }),
    OAuthGrantType: OAuthGrantTypeSchema.exactOptional().openapi({
      xml: { name: 'oAuthGrantType' },
      description: 'The OAuth grant type to allow app users to authenticate from your Amplify app.',
    }),
    OAuthScopes: ListOfOAuthScopesElementSchema.exactOptional().openapi({
      xml: { name: 'oAuthScopes' },
      description:
        'The list of OAuth-related flows that can allow users to authenticate from your Amplify app.',
    }),
    RedirectSignInURIs: ListOfStringSchema.exactOptional().openapi({
      xml: { name: 'redirectSignInURIs' },
      description: 'Redirect URLs that OAuth uses when a user signs in to an Amplify app.',
    }),
    RedirectSignOutURIs: ListOfStringSchema.exactOptional().openapi({
      xml: { name: 'redirectSignOutURIs' },
      description: 'Redirect URLs that OAuth uses when a user signs out of an Amplify app.',
    }),
    SocialProviderSettings: SocialProviderSettingsSchema.exactOptional().openapi({
      xml: { name: 'socialProviderSettings' },
      description:
        'Describes third-party social federation configurations for allowing your users to sign in with OAuth.',
    }),
  })
  .openapi({
    description: 'The OAuth configurations for authenticating users into your Amplify app.',
    required: [],
  })
  .openapi('UpdateBackendAuthOAuthConfig')

const UpdateBackendAuthPasswordPolicyConfigSchema = z
  .object({
    AdditionalConstraints: ListOfAdditionalConstraintsElementSchema.exactOptional().openapi({
      xml: { name: 'additionalConstraints' },
      description:
        'Describes additional constraints on password requirements to sign in to the auth resource, configured as a part of your Amplify project.',
    }),
    MinimumLength: DoubleSchema.exactOptional().openapi({
      xml: { name: 'minimumLength' },
      description:
        'Describes the minimum length of the password required to sign in to the auth resource, configured as a part of your Amplify project.',
    }),
  })
  .openapi({
    description:
      'Describes the password policy for your Amazon Cognito user pool configured as a part of your Amplify project.',
    required: [],
  })
  .openapi('UpdateBackendAuthPasswordPolicyConfig')

const UpdateBackendAuthVerificationMessageConfigSchema = z
  .object({
    DeliveryMethod: DeliveryMethodSchema.openapi({
      xml: { name: 'deliveryMethod' },
      description: 'The type of verification message to send.',
    }),
    EmailSettings: EmailSettingsSchema.exactOptional().openapi({
      xml: { name: 'emailSettings' },
      description: 'The settings for the email message.',
    }),
    SmsSettings: SmsSettingsSchema.exactOptional().openapi({
      xml: { name: 'smsSettings' },
      description: 'The settings for the SMS message.',
    }),
  })
  .openapi({
    required: ['DeliveryMethod'],
    description:
      'Updates the configuration of the email or SMS message for the auth resource configured for your Amplify project.',
  })
  .openapi('UpdateBackendAuthVerificationMessageConfig')

const UpdateBackendAuthUserPoolConfigSchema = z
  .object({
    ForgotPassword: UpdateBackendAuthForgotPasswordConfigSchema.exactOptional().openapi({
      xml: { name: 'forgotPassword' },
      description:
        '<b>(DEPRECATED)</b> Describes the forgot password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.',
    }),
    Mfa: UpdateBackendAuthMFAConfigSchema.exactOptional().openapi({
      xml: { name: 'mfa' },
      description:
        'Describes whether to apply multi-factor authentication policies for your Amazon Cognito user pool configured as a part of your Amplify project.',
    }),
    OAuth: UpdateBackendAuthOAuthConfigSchema.exactOptional().openapi({
      xml: { name: 'oAuth' },
      description:
        'Describes the OAuth policy and rules for your Amazon Cognito user pool, configured as a part of your Amplify project.',
    }),
    PasswordPolicy: UpdateBackendAuthPasswordPolicyConfigSchema.exactOptional().openapi({
      xml: { name: 'passwordPolicy' },
      description:
        'Describes the password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.',
    }),
    VerificationMessage: UpdateBackendAuthVerificationMessageConfigSchema.exactOptional().openapi({
      xml: { name: 'verificationMessage' },
      description:
        'Describes the email or SMS verification message for your Amazon Cognito user pool, configured as a part of your Amplify project.',
    }),
  })
  .openapi({
    description:
      'Describes the Amazon Cognito user pool configuration for the authorization resource to be configured for your Amplify project on an update.',
    required: [],
  })
  .openapi('UpdateBackendAuthUserPoolConfig')

const LoginAuthConfigReqObjSchema = z
  .object({
    AwsCognitoIdentityPoolId: StringSchema.exactOptional().openapi({
      xml: { name: 'aws_cognito_identity_pool_id' },
      description:
        'The Amazon Cognito identity pool ID used for the Amplify Admin UI login authorization.',
    }),
    AwsCognitoRegion: StringSchema.exactOptional().openapi({
      xml: { name: 'aws_cognito_region' },
      description: 'The AWS Region for the Amplify Admin UI login.',
    }),
    AwsUserPoolsId: StringSchema.exactOptional().openapi({
      xml: { name: 'aws_user_pools_id' },
      description:
        'The Amazon Cognito user pool ID used for Amplify Admin UI login authentication.',
    }),
    AwsUserPoolsWebClientId: StringSchema.exactOptional().openapi({
      xml: { name: 'aws_user_pools_web_client_id' },
      description: 'The web client ID for the Amazon Cognito user pools.',
    }),
  })
  .openapi({ description: 'The request object for this operation.', required: [] })
  .openapi('LoginAuthConfigReqObj')

const UpdateBackendConfigResponseSchema = z
  .object({
    AppId: StringSchema.exactOptional().openapi({
      xml: { name: 'appId' },
      description: 'The app ID.',
    }),
    BackendManagerAppId: StringSchema.exactOptional().openapi({
      xml: { name: 'backendManagerAppId' },
      description: 'The app ID for the backend manager.',
    }),
    Error: StringSchema.exactOptional().openapi({
      xml: { name: 'error' },
      description: 'If the request fails, this error is returned.',
    }),
    LoginAuthConfig: LoginAuthConfigReqObjSchema.exactOptional().openapi({
      xml: { name: 'loginAuthConfig' },
      description:
        'Describes the Amazon Cognito configurations for the Admin UI auth resource to log in with.',
    }),
  })
  .openapi({ required: [] })
  .openapi('UpdateBackendConfigResponse')

const UpdateBackendJobResponseSchema = z
  .object({
    AppId: StringSchema.exactOptional().openapi({
      xml: { name: 'appId' },
      description: 'The app ID.',
    }),
    BackendEnvironmentName: StringSchema.exactOptional().openapi({
      xml: { name: 'backendEnvironmentName' },
      description: 'The name of the backend environment.',
    }),
    CreateTime: StringSchema.exactOptional().openapi({
      xml: { name: 'createTime' },
      description: 'The time when the job was created.',
    }),
    Error: StringSchema.exactOptional().openapi({
      xml: { name: 'error' },
      description: 'If the request fails, this error is returned.',
    }),
    JobId: StringSchema.exactOptional().openapi({
      xml: { name: 'jobId' },
      description: 'The ID for the job.',
    }),
    Operation: StringSchema.exactOptional().openapi({
      xml: { name: 'operation' },
      description: 'The name of the operation.',
    }),
    Status: StringSchema.exactOptional().openapi({
      xml: { name: 'status' },
      description: 'The current status of the request.',
    }),
    UpdateTime: StringSchema.exactOptional().openapi({
      xml: { name: 'updateTime' },
      description: 'The time when the job was last updated.',
    }),
  })
  .openapi({ required: [] })
  .openapi('UpdateBackendJobResponse')

const UpdateBackendStorageResponseSchema = z
  .object({
    AppId: StringSchema.exactOptional().openapi({
      xml: { name: 'appId' },
      description: 'The app ID.',
    }),
    BackendEnvironmentName: StringSchema.exactOptional().openapi({
      xml: { name: 'backendEnvironmentName' },
      description: 'The name of the backend environment.',
    }),
    JobId: StringSchema.exactOptional().openapi({
      xml: { name: 'jobId' },
      description: 'The ID for the job.',
    }),
    Status: StringSchema.exactOptional().openapi({
      xml: { name: 'status' },
      description: 'The current status of the request.',
    }),
  })
  .openapi({ required: [] })
  .openapi('UpdateBackendStorageResponse')

const CloneBackendRequestSchema = z
  .object({
    TargetEnvironmentName: StringSchema.openapi({
      xml: { name: 'targetEnvironmentName' },
      description: 'The name of the destination backend environment to be created.',
    }),
  })
  .openapi({
    required: ['TargetEnvironmentName'],
    title: 'CloneBackendRequest',
    description: 'The request body for CloneBackend.',
  })
  .openapi('CloneBackendRequest')

const CreateBackendAPIRequestSchema = z
  .object({
    BackendEnvironmentName: StringSchema.openapi({
      xml: { name: 'backendEnvironmentName' },
      description: 'The name of the backend environment.',
    }),
    ResourceConfig: BackendAPIResourceConfigSchema.openapi({
      xml: { name: 'resourceConfig' },
      description: 'The resource configuration for this request.',
    }),
    ResourceName: StringSchema.openapi({
      xml: { name: 'resourceName' },
      description: 'The name of this resource.',
    }),
  })
  .openapi({
    required: ['ResourceName', 'BackendEnvironmentName', 'ResourceConfig'],
    title: 'CreateBackendAPIRequest',
    description: 'The request body for CreateBackendAPI.',
  })
  .openapi('CreateBackendAPIRequest')

const CreateBackendAuthRequestSchema = z
  .object({
    BackendEnvironmentName: StringSchema.openapi({
      xml: { name: 'backendEnvironmentName' },
      description: 'The name of the backend environment.',
    }),
    ResourceConfig: CreateBackendAuthResourceConfigSchema.openapi({
      xml: { name: 'resourceConfig' },
      description: 'The resource configuration for this request object.',
    }),
    ResourceName: StringSchema.openapi({
      xml: { name: 'resourceName' },
      description: 'The name of this resource.',
    }),
  })
  .openapi({
    required: ['ResourceName', 'BackendEnvironmentName', 'ResourceConfig'],
    title: 'CreateBackendAuthRequest',
    description: 'The request body for CreateBackendAuth.',
  })
  .openapi('CreateBackendAuthRequest')

const CreateBackendConfigRequestSchema = z
  .object({
    BackendManagerAppId: StringSchema.exactOptional().openapi({
      xml: { name: 'backendManagerAppId' },
      description: 'The app ID for the backend manager.',
    }),
  })
  .openapi({
    title: 'CreateBackendConfigRequest',
    description: 'The request body for CreateBackendConfig.',
    required: [],
  })
  .openapi('CreateBackendConfigRequest')

const ResourceConfigSchema = z
  .looseObject({})
  .openapi({
    description: 'Defines the resource configuration for the data model in your Amplify project.',
  })
  .openapi('ResourceConfig')

const CreateBackendRequestSchema = z
  .object({
    AppId: StringSchema.openapi({ xml: { name: 'appId' }, description: 'The app ID.' }),
    AppName: StringSchema.openapi({
      xml: { name: 'appName' },
      description: 'The name of the app.',
    }),
    BackendEnvironmentName: StringSchema.openapi({
      xml: { name: 'backendEnvironmentName' },
      description: 'The name of the backend environment.',
    }),
    ResourceConfig: ResourceConfigSchema.exactOptional().openapi({
      xml: { name: 'resourceConfig' },
      description: 'The resource configuration for creating a backend.',
    }),
    ResourceName: StringSchema.exactOptional().openapi({
      xml: { name: 'resourceName' },
      description: 'The name of the resource.',
    }),
  })
  .openapi({
    required: ['AppId', 'BackendEnvironmentName', 'AppName'],
    title: 'CreateBackendRequest',
    description: 'The request body for CreateBackend.',
  })
  .openapi('CreateBackendRequest')

const CreateBackendStorageResourceConfigSchema = z
  .object({
    BucketName: StringSchema.exactOptional().openapi({
      xml: { name: 'bucketName' },
      description: 'The name of the S3 bucket.',
    }),
    Permissions: BackendStoragePermissionsSchema.openapi({
      xml: { name: 'permissions' },
      description: 'The authorization configuration for the storage S3 bucket.',
    }),
    ServiceName: ServiceNameSchema.openapi({
      xml: { name: 'serviceName' },
      description: 'The name of the storage service.',
    }),
  })
  .openapi({
    required: ['ServiceName', 'Permissions'],
    description: 'The resource configuration for creating backend storage.',
  })
  .openapi('CreateBackendStorageResourceConfig')

const CreateBackendStorageRequestSchema = z
  .object({
    BackendEnvironmentName: StringSchema.openapi({
      xml: { name: 'backendEnvironmentName' },
      description: 'The name of the backend environment.',
    }),
    ResourceConfig: CreateBackendStorageResourceConfigSchema.openapi({
      xml: { name: 'resourceConfig' },
      description: 'The resource configuration for creating backend storage.',
    }),
    ResourceName: StringSchema.openapi({
      xml: { name: 'resourceName' },
      description: 'The name of the storage resource.',
    }),
  })
  .openapi({
    required: ['ResourceName', 'BackendEnvironmentName', 'ResourceConfig'],
    title: 'CreateBackendStorageRequest',
    description: 'The request body for CreateBackendStorage.',
  })
  .openapi('CreateBackendStorageRequest')

const CreateTokenRequestSchema = z
  .looseObject({})
  .openapi({ title: 'CreateTokenRequest' })
  .openapi('CreateTokenRequest')

const DeleteBackendAPIRequestSchema = z
  .object({
    ResourceConfig: BackendAPIResourceConfigSchema.exactOptional().openapi({
      xml: { name: 'resourceConfig' },
      description: 'Defines the resource configuration for the data model in your Amplify project.',
    }),
    ResourceName: StringSchema.openapi({
      xml: { name: 'resourceName' },
      description: 'The name of this resource.',
    }),
  })
  .openapi({
    required: ['ResourceName'],
    title: 'DeleteBackendAPIRequest',
    description: 'The request body for DeleteBackendAPI.',
  })
  .openapi('DeleteBackendAPIRequest')

const DeleteBackendAuthRequestSchema = z
  .object({
    ResourceName: StringSchema.openapi({
      xml: { name: 'resourceName' },
      description: 'The name of this resource.',
    }),
  })
  .openapi({
    required: ['ResourceName'],
    title: 'DeleteBackendAuthRequest',
    description: 'The request body for DeleteBackendAuth.',
  })
  .openapi('DeleteBackendAuthRequest')

const DeleteBackendRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DeleteBackendRequest' })
  .openapi('DeleteBackendRequest')

const DeleteBackendStorageRequestSchema = z
  .object({
    ResourceName: StringSchema.openapi({
      xml: { name: 'resourceName' },
      description: 'The name of the storage resource.',
    }),
    ServiceName: ServiceNameSchema.openapi({
      xml: { name: 'serviceName' },
      description: 'The name of the storage service.',
    }),
  })
  .openapi({
    required: ['ServiceName', 'ResourceName'],
    title: 'DeleteBackendStorageRequest',
    description: 'The request body for DeleteBackendStorage.',
  })
  .openapi('DeleteBackendStorageRequest')

const DeleteTokenRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DeleteTokenRequest' })
  .openapi('DeleteTokenRequest')

const GenerateBackendAPIModelsRequestSchema = z
  .object({
    ResourceName: StringSchema.openapi({
      xml: { name: 'resourceName' },
      description: 'The name of this resource.',
    }),
  })
  .openapi({
    required: ['ResourceName'],
    title: 'GenerateBackendAPIModelsRequest',
    description: 'The request body for GenerateBackendAPIModels.',
  })
  .openapi('GenerateBackendAPIModelsRequest')

const GetBackendAPIModelsRequestSchema = z
  .object({
    ResourceName: StringSchema.openapi({
      xml: { name: 'resourceName' },
      description: 'The name of this resource.',
    }),
  })
  .openapi({
    required: ['ResourceName'],
    title: 'GetBackendAPIModelsRequest',
    description: 'The request body for GetBackendAPIModels.',
  })
  .openapi('GetBackendAPIModelsRequest')

const GetBackendAPIRequestSchema = z
  .object({
    ResourceConfig: BackendAPIResourceConfigSchema.exactOptional().openapi({
      xml: { name: 'resourceConfig' },
      description: 'Defines the resource configuration for the data model in your Amplify project.',
    }),
    ResourceName: StringSchema.openapi({
      xml: { name: 'resourceName' },
      description: 'The name of this resource.',
    }),
  })
  .openapi({
    required: ['ResourceName'],
    title: 'GetBackendAPIRequest',
    description: 'The request body for GetBackendAPI.',
  })
  .openapi('GetBackendAPIRequest')

const GetBackendAuthRequestSchema = z
  .object({
    ResourceName: StringSchema.openapi({
      xml: { name: 'resourceName' },
      description: 'The name of this resource.',
    }),
  })
  .openapi({
    required: ['ResourceName'],
    title: 'GetBackendAuthRequest',
    description: 'The request body for GetBackendAuth.',
  })
  .openapi('GetBackendAuthRequest')

const GetBackendJobRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetBackendJobRequest' })
  .openapi('GetBackendJobRequest')

const GetBackendRequestSchema = z
  .object({
    BackendEnvironmentName: StringSchema.exactOptional().openapi({
      xml: { name: 'backendEnvironmentName' },
      description: 'The name of the backend environment.',
    }),
  })
  .openapi({
    title: 'GetBackendRequest',
    description: 'The request body for GetBackend.',
    required: [],
  })
  .openapi('GetBackendRequest')

const GetBackendStorageRequestSchema = z
  .object({
    ResourceName: StringSchema.openapi({
      xml: { name: 'resourceName' },
      description: 'The name of the storage resource.',
    }),
  })
  .openapi({
    required: ['ResourceName'],
    title: 'GetBackendStorageRequest',
    description: 'The request body for GetBackendStorage.',
  })
  .openapi('GetBackendStorageRequest')

const GetTokenRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetTokenRequest' })
  .openapi('GetTokenRequest')

const ImportBackendAuthRequestSchema = z
  .object({
    IdentityPoolId: StringSchema.exactOptional().openapi({
      xml: { name: 'identityPoolId' },
      description: 'The ID of the Amazon Cognito identity pool.',
    }),
    NativeClientId: StringSchema.openapi({
      xml: { name: 'nativeClientId' },
      description: 'The ID of the Amazon Cognito native client.',
    }),
    UserPoolId: StringSchema.openapi({
      xml: { name: 'userPoolId' },
      description: 'The ID of the Amazon Cognito user pool.',
    }),
    WebClientId: StringSchema.openapi({
      xml: { name: 'webClientId' },
      description: 'The ID of the Amazon Cognito web client.',
    }),
  })
  .openapi({
    required: ['UserPoolId', 'NativeClientId', 'WebClientId'],
    title: 'ImportBackendAuthRequest',
    description: 'The request body for ImportBackendAuth.',
  })
  .openapi('ImportBackendAuthRequest')

const ImportBackendStorageRequestSchema = z
  .object({
    BucketName: StringSchema.exactOptional().openapi({
      xml: { name: 'bucketName' },
      description: 'The name of the S3 bucket.',
    }),
    ServiceName: ServiceNameSchema.openapi({
      xml: { name: 'serviceName' },
      description: 'The name of the storage service.',
    }),
  })
  .openapi({
    required: ['ServiceName'],
    title: 'ImportBackendStorageRequest',
    description: 'The request body for ImportBackendStorage.',
  })
  .openapi('ImportBackendStorageRequest')

const IntegerMin1Max25Schema = z.int().min(1).max(25).openapi('IntegerMin1Max25')

const ListBackendJobsRequestSchema = z
  .object({
    JobId: StringSchema.exactOptional().openapi({
      xml: { name: 'jobId' },
      description: 'The ID for the job.',
    }),
    MaxResults: IntegerMin1Max25Schema.exactOptional().openapi({
      xml: { name: 'maxResults' },
      description: 'The maximum number of results that you want in the response.',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      xml: { name: 'nextToken' },
      description: 'The token for the next set of results.',
    }),
    Operation: StringSchema.exactOptional().openapi({
      xml: { name: 'operation' },
      description:
        'Filters the list of response objects to include only those with the specified operation name.',
    }),
    Status: StringSchema.exactOptional().openapi({
      xml: { name: 'status' },
      description:
        'Filters the list of response objects to include only those with the specified status.',
    }),
  })
  .openapi({
    title: 'ListBackendJobsRequest',
    description: 'The request body for ListBackendJobs.',
    required: [],
  })
  .openapi('ListBackendJobsRequest')

const ListS3BucketsRequestSchema = z
  .object({
    NextToken: StringSchema.exactOptional().openapi({
      xml: { name: 'nextToken' },
      description: 'Reserved for future use.',
    }),
  })
  .openapi({
    title: 'ListS3BucketsRequest',
    description: 'The request body for S3Buckets.',
    required: [],
  })
  .openapi('ListS3BucketsRequest')

const RemoveAllBackendsRequestSchema = z
  .object({
    CleanAmplifyApp: BooleanSchema.exactOptional().openapi({
      xml: { name: 'cleanAmplifyApp' },
      description: 'Cleans up the Amplify Console app if this value is set to true.',
    }),
  })
  .openapi({
    title: 'RemoveAllBackendsRequest',
    description: 'The request body for RemoveAllBackends.',
    required: [],
  })
  .openapi('RemoveAllBackendsRequest')

const RemoveBackendConfigRequestSchema = z
  .looseObject({})
  .openapi({ title: 'RemoveBackendConfigRequest' })
  .openapi('RemoveBackendConfigRequest')

const UpdateBackendAPIRequestSchema = z
  .object({
    ResourceConfig: BackendAPIResourceConfigSchema.exactOptional().openapi({
      xml: { name: 'resourceConfig' },
      description: 'Defines the resource configuration for the data model in your Amplify project.',
    }),
    ResourceName: StringSchema.openapi({
      xml: { name: 'resourceName' },
      description: 'The name of this resource.',
    }),
  })
  .openapi({
    required: ['ResourceName'],
    title: 'UpdateBackendAPIRequest',
    description: 'The request body for UpdateBackendAPI.',
  })
  .openapi('UpdateBackendAPIRequest')

const UpdateBackendAuthResourceConfigSchema = z
  .object({
    AuthResources: AuthResourcesSchema.openapi({
      xml: { name: 'authResources' },
      description:
        'Defines the service name to use when configuring an authentication resource in your Amplify project.',
    }),
    IdentityPoolConfigs: UpdateBackendAuthIdentityPoolConfigSchema.exactOptional().openapi({
      xml: { name: 'identityPoolConfigs' },
      description:
        'Describes the authorization configuration for the Amazon Cognito identity pool, provisioned as a part of your auth resource in the Amplify project.',
    }),
    Service: ServiceSchema.openapi({
      xml: { name: 'service' },
      description:
        'Defines the service name to use when configuring an authentication resource in your Amplify project.',
    }),
    UserPoolConfigs: UpdateBackendAuthUserPoolConfigSchema.openapi({
      xml: { name: 'userPoolConfigs' },
      description:
        'Describes the authentication configuration for the Amazon Cognito user pool, provisioned as a part of your auth resource in the Amplify project.',
    }),
  })
  .openapi({
    required: ['AuthResources', 'UserPoolConfigs', 'Service'],
    description:
      'Defines the resource configuration when updating an authentication resource in your Amplify project.',
  })
  .openapi('UpdateBackendAuthResourceConfig')

const UpdateBackendAuthRequestSchema = z
  .object({
    ResourceConfig: UpdateBackendAuthResourceConfigSchema.openapi({
      xml: { name: 'resourceConfig' },
      description: 'The resource configuration for this request object.',
    }),
    ResourceName: StringSchema.openapi({
      xml: { name: 'resourceName' },
      description: 'The name of this resource.',
    }),
  })
  .openapi({
    required: ['ResourceName', 'ResourceConfig'],
    title: 'UpdateBackendAuthRequest',
    description: 'The request body for UpdateBackendAuth.',
  })
  .openapi('UpdateBackendAuthRequest')

const UpdateBackendConfigRequestSchema = z
  .object({
    LoginAuthConfig: LoginAuthConfigReqObjSchema.exactOptional().openapi({
      xml: { name: 'loginAuthConfig' },
      description: 'Describes the Amazon Cognito configuration for Admin UI access.',
    }),
  })
  .openapi({
    title: 'UpdateBackendConfigRequest',
    description: 'The request body for UpdateBackendConfig.',
    required: [],
  })
  .openapi('UpdateBackendConfigRequest')

const UpdateBackendJobRequestSchema = z
  .object({
    Operation: StringSchema.exactOptional().openapi({
      xml: { name: 'operation' },
      description:
        'Filters the list of response objects to include only those with the specified operation name.',
    }),
    Status: StringSchema.exactOptional().openapi({
      xml: { name: 'status' },
      description:
        'Filters the list of response objects to include only those with the specified status.',
    }),
  })
  .openapi({
    title: 'UpdateBackendJobRequest',
    description: 'The request body for GetBackendJob.',
    required: [],
  })
  .openapi('UpdateBackendJobRequest')

const UpdateBackendStorageResourceConfigSchema = z
  .object({
    Permissions: BackendStoragePermissionsSchema.openapi({
      xml: { name: 'permissions' },
      description: 'The authorization configuration for the storage S3 bucket.',
    }),
    ServiceName: ServiceNameSchema.openapi({
      xml: { name: 'serviceName' },
      description: 'The name of the storage service.',
    }),
  })
  .openapi({
    required: ['ServiceName', 'Permissions'],
    description: 'The resource configuration for updating backend storage.',
  })
  .openapi('UpdateBackendStorageResourceConfig')

const UpdateBackendStorageRequestSchema = z
  .object({
    ResourceConfig: UpdateBackendStorageResourceConfigSchema.openapi({
      xml: { name: 'resourceConfig' },
      description: 'The resource configuration for updating backend storage.',
    }),
    ResourceName: StringSchema.openapi({
      xml: { name: 'resourceName' },
      description: 'The name of the storage resource.',
    }),
  })
  .openapi({
    required: ['ResourceName', 'ResourceConfig'],
    title: 'UpdateBackendStorageRequest',
    description: 'The request body for UpdateBackendStorage.',
  })
  .openapi('UpdateBackendStorageRequest')

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

export const postBackendAppIdEnvironmentsBackendEnvironmentNameCloneRoute = createRoute({
  method: 'post',
  path: '/backend/{appId}/environments/{backendEnvironmentName}/clone',
  description: 'This operation clones an existing backend.',
  operationId: 'CloneBackend',
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
      appId: z
        .string()
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            required: true,
            description: 'The app ID.',
            schema: { type: 'string' },
          },
        }),
      backendEnvironmentName: z
        .string()
        .openapi({
          param: {
            name: 'backendEnvironmentName',
            in: 'path',
            required: true,
            description: 'The name of the backend environment.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              targetEnvironmentName: z
                .string()
                .openapi({
                  description: 'The name of the destination backend environment to be created.',
                }),
            })
            .openapi({ required: ['targetEnvironmentName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CloneBackendResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postBackendRoute = createRoute({
  method: 'post',
  path: '/backend',
  description:
    'This operation creates a backend for an Amplify app. Backends are automatically created at the time of app creation.',
  operationId: 'CreateBackend',
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
              appId: z.string().openapi({ description: 'The app ID.' }),
              appName: z.string().openapi({ description: 'The name of the app.' }),
              backendEnvironmentName: z
                .string()
                .openapi({ description: 'The name of the backend environment.' }),
              resourceConfig: z
                .looseObject({})
                .exactOptional()
                .openapi({
                  description:
                    'Defines the resource configuration for the data model in your Amplify project.',
                }),
              resourceName: z
                .string()
                .exactOptional()
                .openapi({ description: 'The name of the resource.' }),
            })
            .openapi({ required: ['appId', 'appName', 'backendEnvironmentName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateBackendResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postBackendAppIdApiRoute = createRoute({
  method: 'post',
  path: '/backend/{appId}/api',
  description: 'Creates a new backend API resource.',
  operationId: 'CreateBackendAPI',
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
      appId: z
        .string()
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            required: true,
            description: 'The app ID.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              backendEnvironmentName: z
                .string()
                .openapi({ description: 'The name of the backend environment.' }),
              resourceConfig: z
                .object({
                  AdditionalAuthTypes: ListOfBackendAPIAuthTypeSchema.exactOptional().openapi({
                    xml: { name: 'additionalAuthTypes' },
                    description:
                      'Additional authentication methods used to interact with your data models.',
                  }),
                  ApiName: StringSchema.exactOptional().openapi({
                    xml: { name: 'apiName' },
                    description:
                      'The API name used to interact with the data model, configured as a part of your Amplify project.',
                  }),
                  ConflictResolution: BackendAPIConflictResolutionSchema.exactOptional().openapi({
                    xml: { name: 'conflictResolution' },
                    description:
                      'The conflict resolution strategy for your data stored in the data models.',
                  }),
                  DefaultAuthType: BackendAPIAuthTypeSchema.exactOptional().openapi({
                    xml: { name: 'defaultAuthType' },
                    description:
                      'The default authentication type for interacting with the configured data models in your Amplify project.',
                  }),
                  Service: StringSchema.exactOptional().openapi({
                    xml: { name: 'service' },
                    description: 'The service used to provision and interact with the data model.',
                  }),
                  TransformSchema: StringSchema.exactOptional().openapi({
                    xml: { name: 'transformSchema' },
                    description:
                      'The definition of the data model in the annotated transform of the GraphQL schema.',
                  }),
                })
                .openapi({
                  description:
                    'The resource config for the data model, configured as a part of the Amplify project.',
                  required: [],
                }),
              resourceName: z.string().openapi({ description: 'The name of this resource.' }),
            })
            .openapi({ required: ['backendEnvironmentName', 'resourceConfig', 'resourceName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateBackendAPIResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postBackendAppIdAuthRoute = createRoute({
  method: 'post',
  path: '/backend/{appId}/auth',
  description: 'Creates a new backend authentication resource.',
  operationId: 'CreateBackendAuth',
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
      appId: z
        .string()
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            required: true,
            description: 'The app ID.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              backendEnvironmentName: z
                .string()
                .openapi({ description: 'The name of the backend environment.' }),
              resourceConfig: z
                .object({
                  AuthResources: AuthResourcesSchema.exactOptional().openapi({
                    xml: { name: 'authResources' },
                    description:
                      'Defines whether you want to configure only authentication or both authentication and authorization settings.',
                  }),
                  IdentityPoolConfigs:
                    CreateBackendAuthIdentityPoolConfigSchema.exactOptional().openapi({
                      xml: { name: 'identityPoolConfigs' },
                      description:
                        'Describes the authorization configuration for the Amazon Cognito identity pool, provisioned as a part of your auth resource in the Amplify project.',
                    }),
                  Service: ServiceSchema.exactOptional().openapi({
                    xml: { name: 'service' },
                    description:
                      'Defines the service name to use when configuring an authentication resource in your Amplify project.',
                  }),
                  UserPoolConfigs: CreateBackendAuthUserPoolConfigSchema.exactOptional().openapi({
                    xml: { name: 'userPoolConfigs' },
                    description:
                      'Describes authentication configuration for the Amazon Cognito user pool, provisioned as a part of your auth resource in the Amplify project.',
                  }),
                })
                .openapi({
                  description:
                    'Defines the resource configuration when creating an auth resource in your Amplify project.',
                  required: [],
                }),
              resourceName: z.string().openapi({ description: 'The name of this resource.' }),
            })
            .openapi({ required: ['backendEnvironmentName', 'resourceConfig', 'resourceName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateBackendAuthResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postBackendAppIdConfigRoute = createRoute({
  method: 'post',
  path: '/backend/{appId}/config',
  description: 'Creates a config object for a backend.',
  operationId: 'CreateBackendConfig',
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
      appId: z
        .string()
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            required: true,
            description: 'The app ID.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              backendManagerAppId: z
                .string()
                .exactOptional()
                .openapi({ description: 'The app ID for the backend manager.' }),
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
      content: { 'application/json': { schema: CreateBackendConfigResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postBackendAppIdStorageRoute = createRoute({
  method: 'post',
  path: '/backend/{appId}/storage',
  description: 'Creates a backend storage resource.',
  operationId: 'CreateBackendStorage',
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
      appId: z
        .string()
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            required: true,
            description: 'The app ID.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              backendEnvironmentName: z
                .string()
                .openapi({ description: 'The name of the backend environment.' }),
              resourceConfig: z
                .object({
                  BucketName: StringSchema.exactOptional().openapi({
                    xml: { name: 'bucketName' },
                    description: 'The name of the S3 bucket.',
                  }),
                  Permissions: BackendStoragePermissionsSchema.exactOptional().openapi({
                    xml: { name: 'permissions' },
                    description: 'The authorization configuration for the storage S3 bucket.',
                  }),
                  ServiceName: ServiceNameSchema.exactOptional().openapi({
                    xml: { name: 'serviceName' },
                    description: 'The name of the storage service.',
                  }),
                })
                .openapi({
                  description: 'The resource configuration for creating backend storage.',
                  required: [],
                }),
              resourceName: z
                .string()
                .openapi({ description: 'The name of the storage resource.' }),
            })
            .openapi({ required: ['backendEnvironmentName', 'resourceConfig', 'resourceName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateBackendStorageResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postBackendAppIdChallengeRoute = createRoute({
  method: 'post',
  path: '/backend/{appId}/challenge',
  description:
    'Generates a one-time challenge code to authenticate a user into your Amplify Admin UI.',
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
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            required: true,
            description: 'The app ID.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateTokenResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postBackendAppIdEnvironmentsBackendEnvironmentNameRemoveRoute = createRoute({
  method: 'post',
  path: '/backend/{appId}/environments/{backendEnvironmentName}/remove',
  description: 'Removes an existing environment from your Amplify project.',
  operationId: 'DeleteBackend',
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
      appId: z
        .string()
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            required: true,
            description: 'The app ID.',
            schema: { type: 'string' },
          },
        }),
      backendEnvironmentName: z
        .string()
        .openapi({
          param: {
            name: 'backendEnvironmentName',
            in: 'path',
            required: true,
            description: 'The name of the backend environment.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteBackendResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postBackendAppIdApiBackendEnvironmentNameRemoveRoute = createRoute({
  method: 'post',
  path: '/backend/{appId}/api/{backendEnvironmentName}/remove',
  description: 'Deletes an existing backend API resource.',
  operationId: 'DeleteBackendAPI',
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
      appId: z
        .string()
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            required: true,
            description: 'The app ID.',
            schema: { type: 'string' },
          },
        }),
      backendEnvironmentName: z
        .string()
        .openapi({
          param: {
            name: 'backendEnvironmentName',
            in: 'path',
            required: true,
            description: 'The name of the backend environment.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              resourceConfig: z
                .object({
                  AdditionalAuthTypes: ListOfBackendAPIAuthTypeSchema.exactOptional().openapi({
                    xml: { name: 'additionalAuthTypes' },
                    description:
                      'Additional authentication methods used to interact with your data models.',
                  }),
                  ApiName: StringSchema.exactOptional().openapi({
                    xml: { name: 'apiName' },
                    description:
                      'The API name used to interact with the data model, configured as a part of your Amplify project.',
                  }),
                  ConflictResolution: BackendAPIConflictResolutionSchema.exactOptional().openapi({
                    xml: { name: 'conflictResolution' },
                    description:
                      'The conflict resolution strategy for your data stored in the data models.',
                  }),
                  DefaultAuthType: BackendAPIAuthTypeSchema.exactOptional().openapi({
                    xml: { name: 'defaultAuthType' },
                    description:
                      'The default authentication type for interacting with the configured data models in your Amplify project.',
                  }),
                  Service: StringSchema.exactOptional().openapi({
                    xml: { name: 'service' },
                    description: 'The service used to provision and interact with the data model.',
                  }),
                  TransformSchema: StringSchema.exactOptional().openapi({
                    xml: { name: 'transformSchema' },
                    description:
                      'The definition of the data model in the annotated transform of the GraphQL schema.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The resource config for the data model, configured as a part of the Amplify project.',
                  required: [],
                }),
              resourceName: z.string().openapi({ description: 'The name of this resource.' }),
            })
            .openapi({ required: ['resourceName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteBackendAPIResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postBackendAppIdAuthBackendEnvironmentNameRemoveRoute = createRoute({
  method: 'post',
  path: '/backend/{appId}/auth/{backendEnvironmentName}/remove',
  description: 'Deletes an existing backend authentication resource.',
  operationId: 'DeleteBackendAuth',
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
      appId: z
        .string()
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            required: true,
            description: 'The app ID.',
            schema: { type: 'string' },
          },
        }),
      backendEnvironmentName: z
        .string()
        .openapi({
          param: {
            name: 'backendEnvironmentName',
            in: 'path',
            required: true,
            description: 'The name of the backend environment.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              resourceName: z.string().openapi({ description: 'The name of this resource.' }),
            })
            .openapi({ required: ['resourceName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteBackendAuthResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postBackendAppIdStorageBackendEnvironmentNameRemoveRoute = createRoute({
  method: 'post',
  path: '/backend/{appId}/storage/{backendEnvironmentName}/remove',
  description: 'Removes the specified backend storage resource.',
  operationId: 'DeleteBackendStorage',
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
      appId: z
        .string()
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            required: true,
            description: 'The app ID.',
            schema: { type: 'string' },
          },
        }),
      backendEnvironmentName: z
        .string()
        .openapi({
          param: {
            name: 'backendEnvironmentName',
            in: 'path',
            required: true,
            description: 'The name of the backend environment.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              resourceName: z
                .string()
                .openapi({ description: 'The name of the storage resource.' }),
              serviceName: z
                .literal('S3')
                .openapi({ description: 'The name of the storage service.' }),
            })
            .openapi({ required: ['resourceName', 'serviceName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteBackendStorageResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postBackendAppIdChallengeSessionIdRemoveRoute = createRoute({
  method: 'post',
  path: '/backend/{appId}/challenge/{sessionId}/remove',
  description: 'Deletes the challenge token based on the given appId and sessionId.',
  operationId: 'DeleteToken',
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
      appId: z
        .string()
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            required: true,
            description: 'The app ID.',
            schema: { type: 'string' },
          },
        }),
      sessionId: z
        .string()
        .openapi({
          param: {
            name: 'sessionId',
            in: 'path',
            required: true,
            description: 'The session ID.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteTokenResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postBackendAppIdApiBackendEnvironmentNameGenerateModelsRoute = createRoute({
  method: 'post',
  path: '/backend/{appId}/api/{backendEnvironmentName}/generateModels',
  description: 'Generates a model schema for an existing backend API resource.',
  operationId: 'GenerateBackendAPIModels',
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
      appId: z
        .string()
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            required: true,
            description: 'The app ID.',
            schema: { type: 'string' },
          },
        }),
      backendEnvironmentName: z
        .string()
        .openapi({
          param: {
            name: 'backendEnvironmentName',
            in: 'path',
            required: true,
            description: 'The name of the backend environment.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              resourceName: z.string().openapi({ description: 'The name of this resource.' }),
            })
            .openapi({ required: ['resourceName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GenerateBackendAPIModelsResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postBackendAppIdDetailsRoute = createRoute({
  method: 'post',
  path: '/backend/{appId}/details',
  description: 'Provides project-level details for your Amplify UI project.',
  operationId: 'GetBackend',
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
      appId: z
        .string()
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            required: true,
            description: 'The app ID.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              backendEnvironmentName: z
                .string()
                .exactOptional()
                .openapi({ description: 'The name of the backend environment.' }),
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
      content: { 'application/json': { schema: GetBackendResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postBackendAppIdApiBackendEnvironmentNameDetailsRoute = createRoute({
  method: 'post',
  path: '/backend/{appId}/api/{backendEnvironmentName}/details',
  description: 'Gets the details for a backend API.',
  operationId: 'GetBackendAPI',
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
      appId: z
        .string()
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            required: true,
            description: 'The app ID.',
            schema: { type: 'string' },
          },
        }),
      backendEnvironmentName: z
        .string()
        .openapi({
          param: {
            name: 'backendEnvironmentName',
            in: 'path',
            required: true,
            description: 'The name of the backend environment.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              resourceConfig: z
                .object({
                  AdditionalAuthTypes: ListOfBackendAPIAuthTypeSchema.exactOptional().openapi({
                    xml: { name: 'additionalAuthTypes' },
                    description:
                      'Additional authentication methods used to interact with your data models.',
                  }),
                  ApiName: StringSchema.exactOptional().openapi({
                    xml: { name: 'apiName' },
                    description:
                      'The API name used to interact with the data model, configured as a part of your Amplify project.',
                  }),
                  ConflictResolution: BackendAPIConflictResolutionSchema.exactOptional().openapi({
                    xml: { name: 'conflictResolution' },
                    description:
                      'The conflict resolution strategy for your data stored in the data models.',
                  }),
                  DefaultAuthType: BackendAPIAuthTypeSchema.exactOptional().openapi({
                    xml: { name: 'defaultAuthType' },
                    description:
                      'The default authentication type for interacting with the configured data models in your Amplify project.',
                  }),
                  Service: StringSchema.exactOptional().openapi({
                    xml: { name: 'service' },
                    description: 'The service used to provision and interact with the data model.',
                  }),
                  TransformSchema: StringSchema.exactOptional().openapi({
                    xml: { name: 'transformSchema' },
                    description:
                      'The definition of the data model in the annotated transform of the GraphQL schema.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The resource config for the data model, configured as a part of the Amplify project.',
                  required: [],
                }),
              resourceName: z.string().openapi({ description: 'The name of this resource.' }),
            })
            .openapi({ required: ['resourceName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetBackendAPIResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postBackendAppIdApiBackendEnvironmentNameGetModelsRoute = createRoute({
  method: 'post',
  path: '/backend/{appId}/api/{backendEnvironmentName}/getModels',
  description: 'Gets a model introspection schema for an existing backend API resource.',
  operationId: 'GetBackendAPIModels',
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
      appId: z
        .string()
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            required: true,
            description: 'The app ID.',
            schema: { type: 'string' },
          },
        }),
      backendEnvironmentName: z
        .string()
        .openapi({
          param: {
            name: 'backendEnvironmentName',
            in: 'path',
            required: true,
            description: 'The name of the backend environment.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              resourceName: z.string().openapi({ description: 'The name of this resource.' }),
            })
            .openapi({ required: ['resourceName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetBackendAPIModelsResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postBackendAppIdAuthBackendEnvironmentNameDetailsRoute = createRoute({
  method: 'post',
  path: '/backend/{appId}/auth/{backendEnvironmentName}/details',
  description: 'Gets a backend auth details.',
  operationId: 'GetBackendAuth',
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
      appId: z
        .string()
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            required: true,
            description: 'The app ID.',
            schema: { type: 'string' },
          },
        }),
      backendEnvironmentName: z
        .string()
        .openapi({
          param: {
            name: 'backendEnvironmentName',
            in: 'path',
            required: true,
            description: 'The name of the backend environment.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              resourceName: z.string().openapi({ description: 'The name of this resource.' }),
            })
            .openapi({ required: ['resourceName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetBackendAuthResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const getBackendAppIdJobBackendEnvironmentNameJobIdRoute = createRoute({
  method: 'get',
  path: '/backend/{appId}/job/{backendEnvironmentName}/{jobId}',
  description: 'Returns information about a specific job.',
  operationId: 'GetBackendJob',
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
      appId: z
        .string()
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            required: true,
            description: 'The app ID.',
            schema: { type: 'string' },
          },
        }),
      backendEnvironmentName: z
        .string()
        .openapi({
          param: {
            name: 'backendEnvironmentName',
            in: 'path',
            required: true,
            description: 'The name of the backend environment.',
            schema: { type: 'string' },
          },
        }),
      jobId: z
        .string()
        .openapi({
          param: {
            name: 'jobId',
            in: 'path',
            required: true,
            description: 'The ID for the job.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetBackendJobResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postBackendAppIdJobBackendEnvironmentNameJobIdRoute = createRoute({
  method: 'post',
  path: '/backend/{appId}/job/{backendEnvironmentName}/{jobId}',
  description: 'Updates a specific job.',
  operationId: 'UpdateBackendJob',
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
      appId: z
        .string()
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            required: true,
            description: 'The app ID.',
            schema: { type: 'string' },
          },
        }),
      backendEnvironmentName: z
        .string()
        .openapi({
          param: {
            name: 'backendEnvironmentName',
            in: 'path',
            required: true,
            description: 'The name of the backend environment.',
            schema: { type: 'string' },
          },
        }),
      jobId: z
        .string()
        .openapi({
          param: {
            name: 'jobId',
            in: 'path',
            required: true,
            description: 'The ID for the job.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              operation: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Filters the list of response objects to include only those with the specified operation name.',
                }),
              status: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Filters the list of response objects to include only those with the specified status.',
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
      content: { 'application/json': { schema: UpdateBackendJobResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postBackendAppIdStorageBackendEnvironmentNameDetailsRoute = createRoute({
  method: 'post',
  path: '/backend/{appId}/storage/{backendEnvironmentName}/details',
  description: 'Gets details for a backend storage resource.',
  operationId: 'GetBackendStorage',
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
      appId: z
        .string()
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            required: true,
            description: 'The app ID.',
            schema: { type: 'string' },
          },
        }),
      backendEnvironmentName: z
        .string()
        .openapi({
          param: {
            name: 'backendEnvironmentName',
            in: 'path',
            required: true,
            description: 'The name of the backend environment.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              resourceName: z
                .string()
                .openapi({ description: 'The name of the storage resource.' }),
            })
            .openapi({ required: ['resourceName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetBackendStorageResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const getBackendAppIdChallengeSessionIdRoute = createRoute({
  method: 'get',
  path: '/backend/{appId}/challenge/{sessionId}',
  description: 'Gets the challenge token based on the given appId and sessionId.',
  operationId: 'GetToken',
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
      appId: z
        .string()
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            required: true,
            description: 'The app ID.',
            schema: { type: 'string' },
          },
        }),
      sessionId: z
        .string()
        .openapi({
          param: {
            name: 'sessionId',
            in: 'path',
            required: true,
            description: 'The session ID.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetTokenResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postBackendAppIdAuthBackendEnvironmentNameImportRoute = createRoute({
  method: 'post',
  path: '/backend/{appId}/auth/{backendEnvironmentName}/import',
  description: 'Imports an existing backend authentication resource.',
  operationId: 'ImportBackendAuth',
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
      appId: z
        .string()
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            required: true,
            description: 'The app ID.',
            schema: { type: 'string' },
          },
        }),
      backendEnvironmentName: z
        .string()
        .openapi({
          param: {
            name: 'backendEnvironmentName',
            in: 'path',
            required: true,
            description: 'The name of the backend environment.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              identityPoolId: z
                .string()
                .exactOptional()
                .openapi({ description: 'The ID of the Amazon Cognito identity pool.' }),
              nativeClientId: z
                .string()
                .openapi({ description: 'The ID of the Amazon Cognito native client.' }),
              userPoolId: z
                .string()
                .openapi({ description: 'The ID of the Amazon Cognito user pool.' }),
              webClientId: z
                .string()
                .openapi({ description: 'The ID of the Amazon Cognito web client.' }),
            })
            .openapi({ required: ['nativeClientId', 'userPoolId', 'webClientId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ImportBackendAuthResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postBackendAppIdStorageBackendEnvironmentNameImportRoute = createRoute({
  method: 'post',
  path: '/backend/{appId}/storage/{backendEnvironmentName}/import',
  description: 'Imports an existing backend storage resource.',
  operationId: 'ImportBackendStorage',
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
      appId: z
        .string()
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            required: true,
            description: 'The app ID.',
            schema: { type: 'string' },
          },
        }),
      backendEnvironmentName: z
        .string()
        .openapi({
          param: {
            name: 'backendEnvironmentName',
            in: 'path',
            required: true,
            description: 'The name of the backend environment.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              bucketName: z
                .string()
                .exactOptional()
                .openapi({ description: 'The name of the S3 bucket.' }),
              serviceName: z
                .literal('S3')
                .openapi({ description: 'The name of the storage service.' }),
            })
            .openapi({ required: ['serviceName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ImportBackendStorageResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postBackendAppIdJobBackendEnvironmentNameRoute = createRoute({
  method: 'post',
  path: '/backend/{appId}/job/{backendEnvironmentName}',
  description: 'Lists the jobs for the backend of an Amplify app.',
  operationId: 'ListBackendJobs',
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
      appId: z
        .string()
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            required: true,
            description: 'The app ID.',
            schema: { type: 'string' },
          },
        }),
      backendEnvironmentName: z
        .string()
        .openapi({
          param: {
            name: 'backendEnvironmentName',
            in: 'path',
            required: true,
            description: 'The name of the backend environment.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              jobId: z.string().exactOptional().openapi({ description: 'The ID for the job.' }),
              maxResults: z
                .int()
                .min(1)
                .max(25)
                .exactOptional()
                .openapi({
                  description: 'The maximum number of results that you want in the response.',
                }),
              nextToken: z
                .string()
                .exactOptional()
                .openapi({ description: 'The token for the next set of results.' }),
              operation: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Filters the list of response objects to include only those with the specified operation name.',
                }),
              status: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Filters the list of response objects to include only those with the specified status.',
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
      content: { 'application/json': { schema: ListBackendJobsResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postS3BucketsRoute = createRoute({
  method: 'post',
  path: '/s3Buckets',
  description: 'The list of S3 buckets in your account.',
  operationId: 'ListS3Buckets',
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
              nextToken: z
                .string()
                .exactOptional()
                .openapi({ description: 'Reserved for future use.' }),
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
      content: { 'application/json': { schema: ListS3BucketsResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postBackendAppIdRemoveRoute = createRoute({
  method: 'post',
  path: '/backend/{appId}/remove',
  description: 'Removes all backend environments from your Amplify project.',
  operationId: 'RemoveAllBackends',
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
      appId: z
        .string()
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            required: true,
            description: 'The app ID.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              cleanAmplifyApp: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Cleans up the Amplify Console app if this value is set to true.',
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
      content: { 'application/json': { schema: RemoveAllBackendsResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postBackendAppIdConfigRemoveRoute = createRoute({
  method: 'post',
  path: '/backend/{appId}/config/remove',
  description: 'Removes the AWS resources required to access the Amplify Admin UI.',
  operationId: 'RemoveBackendConfig',
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
      appId: z
        .string()
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            required: true,
            description: 'The app ID.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RemoveBackendConfigResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postBackendAppIdApiBackendEnvironmentNameRoute = createRoute({
  method: 'post',
  path: '/backend/{appId}/api/{backendEnvironmentName}',
  description: 'Updates an existing backend API resource.',
  operationId: 'UpdateBackendAPI',
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
      appId: z
        .string()
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            required: true,
            description: 'The app ID.',
            schema: { type: 'string' },
          },
        }),
      backendEnvironmentName: z
        .string()
        .openapi({
          param: {
            name: 'backendEnvironmentName',
            in: 'path',
            required: true,
            description: 'The name of the backend environment.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              resourceConfig: z
                .object({
                  AdditionalAuthTypes: ListOfBackendAPIAuthTypeSchema.exactOptional().openapi({
                    xml: { name: 'additionalAuthTypes' },
                    description:
                      'Additional authentication methods used to interact with your data models.',
                  }),
                  ApiName: StringSchema.exactOptional().openapi({
                    xml: { name: 'apiName' },
                    description:
                      'The API name used to interact with the data model, configured as a part of your Amplify project.',
                  }),
                  ConflictResolution: BackendAPIConflictResolutionSchema.exactOptional().openapi({
                    xml: { name: 'conflictResolution' },
                    description:
                      'The conflict resolution strategy for your data stored in the data models.',
                  }),
                  DefaultAuthType: BackendAPIAuthTypeSchema.exactOptional().openapi({
                    xml: { name: 'defaultAuthType' },
                    description:
                      'The default authentication type for interacting with the configured data models in your Amplify project.',
                  }),
                  Service: StringSchema.exactOptional().openapi({
                    xml: { name: 'service' },
                    description: 'The service used to provision and interact with the data model.',
                  }),
                  TransformSchema: StringSchema.exactOptional().openapi({
                    xml: { name: 'transformSchema' },
                    description:
                      'The definition of the data model in the annotated transform of the GraphQL schema.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The resource config for the data model, configured as a part of the Amplify project.',
                  required: [],
                }),
              resourceName: z.string().openapi({ description: 'The name of this resource.' }),
            })
            .openapi({ required: ['resourceName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateBackendAPIResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postBackendAppIdAuthBackendEnvironmentNameRoute = createRoute({
  method: 'post',
  path: '/backend/{appId}/auth/{backendEnvironmentName}',
  description: 'Updates an existing backend authentication resource.',
  operationId: 'UpdateBackendAuth',
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
      appId: z
        .string()
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            required: true,
            description: 'The app ID.',
            schema: { type: 'string' },
          },
        }),
      backendEnvironmentName: z
        .string()
        .openapi({
          param: {
            name: 'backendEnvironmentName',
            in: 'path',
            required: true,
            description: 'The name of the backend environment.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              resourceConfig: z
                .object({
                  AuthResources: AuthResourcesSchema.exactOptional().openapi({
                    xml: { name: 'authResources' },
                    description:
                      'Defines the service name to use when configuring an authentication resource in your Amplify project.',
                  }),
                  IdentityPoolConfigs:
                    UpdateBackendAuthIdentityPoolConfigSchema.exactOptional().openapi({
                      xml: { name: 'identityPoolConfigs' },
                      description:
                        'Describes the authorization configuration for the Amazon Cognito identity pool, provisioned as a part of your auth resource in the Amplify project.',
                    }),
                  Service: ServiceSchema.exactOptional().openapi({
                    xml: { name: 'service' },
                    description:
                      'Defines the service name to use when configuring an authentication resource in your Amplify project.',
                  }),
                  UserPoolConfigs: UpdateBackendAuthUserPoolConfigSchema.exactOptional().openapi({
                    xml: { name: 'userPoolConfigs' },
                    description:
                      'Describes the authentication configuration for the Amazon Cognito user pool, provisioned as a part of your auth resource in the Amplify project.',
                  }),
                })
                .openapi({
                  description:
                    'Defines the resource configuration when updating an authentication resource in your Amplify project.',
                  required: [],
                }),
              resourceName: z.string().openapi({ description: 'The name of this resource.' }),
            })
            .openapi({ required: ['resourceConfig', 'resourceName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateBackendAuthResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postBackendAppIdConfigUpdateRoute = createRoute({
  method: 'post',
  path: '/backend/{appId}/config/update',
  description: 'Updates the AWS resources required to access the Amplify Admin UI.',
  operationId: 'UpdateBackendConfig',
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
      appId: z
        .string()
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            required: true,
            description: 'The app ID.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              loginAuthConfig: z
                .object({
                  AwsCognitoIdentityPoolId: StringSchema.exactOptional().openapi({
                    xml: { name: 'aws_cognito_identity_pool_id' },
                    description:
                      'The Amazon Cognito identity pool ID used for the Amplify Admin UI login authorization.',
                  }),
                  AwsCognitoRegion: StringSchema.exactOptional().openapi({
                    xml: { name: 'aws_cognito_region' },
                    description: 'The AWS Region for the Amplify Admin UI login.',
                  }),
                  AwsUserPoolsId: StringSchema.exactOptional().openapi({
                    xml: { name: 'aws_user_pools_id' },
                    description:
                      'The Amazon Cognito user pool ID used for Amplify Admin UI login authentication.',
                  }),
                  AwsUserPoolsWebClientId: StringSchema.exactOptional().openapi({
                    xml: { name: 'aws_user_pools_web_client_id' },
                    description: 'The web client ID for the Amazon Cognito user pools.',
                  }),
                })
                .exactOptional()
                .openapi({ description: 'The request object for this operation.', required: [] }),
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
      content: { 'application/json': { schema: UpdateBackendConfigResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})

export const postBackendAppIdStorageBackendEnvironmentNameRoute = createRoute({
  method: 'post',
  path: '/backend/{appId}/storage/{backendEnvironmentName}',
  description: 'Updates an existing backend storage resource.',
  operationId: 'UpdateBackendStorage',
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
      appId: z
        .string()
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            required: true,
            description: 'The app ID.',
            schema: { type: 'string' },
          },
        }),
      backendEnvironmentName: z
        .string()
        .openapi({
          param: {
            name: 'backendEnvironmentName',
            in: 'path',
            required: true,
            description: 'The name of the backend environment.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              resourceConfig: z
                .object({
                  Permissions: BackendStoragePermissionsSchema.exactOptional().openapi({
                    xml: { name: 'permissions' },
                    description: 'The authorization configuration for the storage S3 bucket.',
                  }),
                  ServiceName: ServiceNameSchema.exactOptional().openapi({
                    xml: { name: 'serviceName' },
                    description: 'The name of the storage service.',
                  }),
                })
                .openapi({
                  description: 'The resource configuration for updating backend storage.',
                  required: [],
                }),
              resourceName: z
                .string()
                .openapi({ description: 'The name of the storage resource.' }),
            })
            .openapi({ required: ['resourceConfig', 'resourceName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateBackendStorageResponseSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
  },
})
