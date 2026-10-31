import { createRoute, z } from '@hono/zod-openapi'

const IdentityPoolIdSchema = z
  .string()
  .regex(/[\w-]+:[0-9a-f-]+/)
  .min(1)
  .max(55)
  .openapi('IdentityPoolId')

const IdentityPoolNameSchema = z
  .string()
  .regex(/[\w\s+=,.@-]+/)
  .min(1)
  .max(128)
  .openapi('IdentityPoolName')

const IdentityPoolUnauthenticatedSchema = z.boolean().openapi('IdentityPoolUnauthenticated')

const ClassicFlowSchema = z.boolean().openapi('ClassicFlow')

const IdentityProviderIdSchema = z
  .string()
  .regex(/[\w.;_\/-]+/)
  .min(1)
  .max(128)
  .openapi('IdentityProviderId')

const IdentityProvidersSchema = z
  .record(z.string(), IdentityProviderIdSchema)
  .refine((val) => Object.keys(val).length <= 10)
  .openapi('IdentityProviders')

const DeveloperProviderNameSchema = z
  .string()
  .regex(/[\w._-]+/)
  .min(1)
  .max(128)
  .openapi('DeveloperProviderName')

const ARNStringSchema = z.string().min(20).max(2048).openapi('ARNString')

const OIDCProviderListSchema = z.array(ARNStringSchema).openapi('OIDCProviderList')

const CognitoIdentityProviderNameSchema = z
  .string()
  .regex(/[\w._:\/-]+/)
  .min(1)
  .max(128)
  .openapi('CognitoIdentityProviderName')

const CognitoIdentityProviderClientIdSchema = z
  .string()
  .regex(/[\w_]+/)
  .min(1)
  .max(128)
  .openapi('CognitoIdentityProviderClientId')

const CognitoIdentityProviderTokenCheckSchema = z
  .boolean()
  .openapi('CognitoIdentityProviderTokenCheck')

const CognitoIdentityProviderSchema = z
  .object({
    ProviderName: CognitoIdentityProviderNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The provider name for an Amazon Cognito user pool. For example, <code>cognito-idp.us-east-1.amazonaws.com/us-east-1_123456789</code>.',
        }),
    ).exactOptional(),
    ClientId: CognitoIdentityProviderClientIdSchema.and(
      z.any().openapi({ description: 'The client ID for the Amazon Cognito user pool.' }),
    ).exactOptional(),
    ServerSideTokenCheck: CognitoIdentityProviderTokenCheckSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>TRUE if server-side token validation is enabled for the identity provider’s token.</p> <p>Once you set <code>ServerSideTokenCheck</code> to TRUE for an identity pool, that identity pool will check with the integrated user pools to make sure that the user has not been globally signed out or deleted before the identity pool provides an OIDC token or AWS credentials for the user.</p> <p>If the user is signed out or deleted, the identity pool will return a 400 Not Authorized error.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A provider representing an Amazon Cognito user pool and its client ID.',
    required: [],
  })
  .openapi('CognitoIdentityProvider')

const CognitoIdentityProviderListSchema = z
  .array(CognitoIdentityProviderSchema)
  .openapi('CognitoIdentityProviderList')

const SAMLProviderListSchema = z.array(ARNStringSchema).openapi('SAMLProviderList')

const TagValueTypeSchema = z.string().min(0).max(256).openapi('TagValueType')

const IdentityPoolTagsTypeSchema = z
  .record(z.string(), TagValueTypeSchema)
  .openapi('IdentityPoolTagsType')

const IdentityPoolSchema = z
  .object({
    IdentityPoolId: IdentityPoolIdSchema.and(
      z.any().openapi({ description: 'An identity pool ID in the format REGION:GUID.' }),
    ),
    IdentityPoolName: IdentityPoolNameSchema.and(
      z.any().openapi({ description: 'A string that you provide.' }),
    ),
    AllowUnauthenticatedIdentities: IdentityPoolUnauthenticatedSchema.and(
      z
        .any()
        .openapi({ description: 'TRUE if the identity pool supports unauthenticated logins.' }),
    ),
    AllowClassicFlow: ClassicFlowSchema.and(
      z
        .any()
        .openapi({
          description:
            'Enables or disables the Basic (Classic) authentication flow. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/authentication-flow.html">Identity Pools (Federated Identities) Authentication Flow</a> in the <i>Amazon Cognito Developer Guide</i>.',
        }),
    ).exactOptional(),
    SupportedLoginProviders: IdentityProvidersSchema.and(
      z
        .any()
        .openapi({
          description: 'Optional key:value pairs mapping provider names to provider app IDs.',
        }),
    ).exactOptional(),
    DeveloperProviderName: DeveloperProviderNameSchema.and(
      z.any().openapi({ description: 'The "domain" by which Cognito will refer to your users.' }),
    ).exactOptional(),
    OpenIdConnectProviderARNs: OIDCProviderListSchema.and(
      z.any().openapi({ description: 'The ARNs of the OpenID Connect providers.' }),
    ).exactOptional(),
    CognitoIdentityProviders: CognitoIdentityProviderListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list representing an Amazon Cognito user pool and its client ID.',
        }),
    ).exactOptional(),
    SamlProviderARNs: SAMLProviderListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of Amazon Resource Names (ARNs) of the SAML provider for your identity pool.',
        }),
    ).exactOptional(),
    IdentityPoolTags: IdentityPoolTagsTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tags that are assigned to the identity pool. A tag is a label that you can apply to identity pools to categorize and manage them in different ways, such as by purpose, owner, environment, or other criteria.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['IdentityPoolId', 'IdentityPoolName', 'AllowUnauthenticatedIdentities'],
    title: 'IdentityPool',
    description: 'An object representing an Amazon Cognito identity pool.',
  })
  .openapi('IdentityPool')

const CreateIdentityPoolInputSchema = z
  .object({
    IdentityPoolName: IdentityPoolNameSchema.and(
      z.any().openapi({ description: 'A string that you provide.' }),
    ),
    AllowUnauthenticatedIdentities: IdentityPoolUnauthenticatedSchema.and(
      z
        .any()
        .openapi({ description: 'TRUE if the identity pool supports unauthenticated logins.' }),
    ),
    AllowClassicFlow: ClassicFlowSchema.and(
      z
        .any()
        .openapi({
          description:
            'Enables or disables the Basic (Classic) authentication flow. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/authentication-flow.html">Identity Pools (Federated Identities) Authentication Flow</a> in the <i>Amazon Cognito Developer Guide</i>.',
        }),
    ).exactOptional(),
    SupportedLoginProviders: IdentityProvidersSchema.and(
      z
        .any()
        .openapi({
          description: 'Optional key:value pairs mapping provider names to provider app IDs.',
        }),
    ).exactOptional(),
    DeveloperProviderName: DeveloperProviderNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The "domain" by which Cognito will refer to your users. This name acts as a placeholder that allows your backend and the Cognito service to communicate about the developer provider. For the <code>DeveloperProviderName</code>, you can use letters as well as period (<code>.</code>), underscore (<code>_</code>), and dash (<code>-</code>).</p> <p>Once you have set a developer provider name, you cannot change it. Please take care in setting this parameter.</p>',
        }),
    ).exactOptional(),
    OpenIdConnectProviderARNs: OIDCProviderListSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Names (ARN) of the OpenID Connect providers.',
        }),
    ).exactOptional(),
    CognitoIdentityProviders: CognitoIdentityProviderListSchema.and(
      z
        .any()
        .openapi({ description: 'An array of Amazon Cognito user pools and their client IDs.' }),
    ).exactOptional(),
    SamlProviderARNs: SAMLProviderListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of Amazon Resource Names (ARNs) of the SAML provider for your identity pool.',
        }),
    ).exactOptional(),
    IdentityPoolTags: IdentityPoolTagsTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Tags to assign to the identity pool. A tag is a label that you can apply to identity pools to categorize and manage them in different ways, such as by purpose, owner, environment, or other criteria.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['IdentityPoolName', 'AllowUnauthenticatedIdentities'],
    title: 'CreateIdentityPoolInput',
    description: 'Input to the CreateIdentityPool action.',
  })
  .openapi('CreateIdentityPoolInput')

const InvalidParameterExceptionSchema = z.any().openapi('InvalidParameterException')

const NotAuthorizedExceptionSchema = z.any().openapi('NotAuthorizedException')

const ResourceConflictExceptionSchema = z.any().openapi('ResourceConflictException')

const TooManyRequestsExceptionSchema = z.any().openapi('TooManyRequestsException')

const InternalErrorExceptionSchema = z.any().openapi('InternalErrorException')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const IdentityIdSchema = z
  .string()
  .regex(/[\w-]+:[0-9a-f-]+/)
  .min(1)
  .max(55)
  .openapi('IdentityId')

const ErrorCodeSchema = z.enum(['AccessDenied', 'InternalServerError']).openapi('ErrorCode')

const UnprocessedIdentityIdSchema = z
  .object({
    IdentityId: IdentityIdSchema.and(
      z.any().openapi({ description: 'A unique identifier in the format REGION:GUID.' }),
    ).exactOptional(),
    ErrorCode: ErrorCodeSchema.and(
      z
        .any()
        .openapi({ description: 'The error code indicating the type of error that occurred.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An array of UnprocessedIdentityId objects, each of which contains an ErrorCode and IdentityId.',
    required: [],
  })
  .openapi('UnprocessedIdentityId')

const UnprocessedIdentityIdListSchema = z
  .array(UnprocessedIdentityIdSchema)
  .max(60)
  .openapi('UnprocessedIdentityIdList')

const DeleteIdentitiesResponseSchema = z
  .object({
    UnprocessedIdentityIds: UnprocessedIdentityIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An array of UnprocessedIdentityId objects, each of which contains an ErrorCode and IdentityId.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Returned in response to a successful <code>DeleteIdentities</code> operation.',
    required: [],
  })
  .openapi('DeleteIdentitiesResponse')

const IdentityIdListSchema = z.array(IdentityIdSchema).min(1).max(60).openapi('IdentityIdList')

const DeleteIdentitiesInputSchema = z
  .object({
    IdentityIdsToDelete: IdentityIdListSchema.and(
      z.any().openapi({ description: 'A list of 1-60 identities that you want to delete.' }),
    ),
  })
  .openapi({
    required: ['IdentityIdsToDelete'],
    title: 'DeleteIdentitiesInput',
    description: 'Input to the <code>DeleteIdentities</code> action.',
  })
  .openapi('DeleteIdentitiesInput')

const DeleteIdentityPoolInputSchema = z
  .object({
    IdentityPoolId: IdentityPoolIdSchema.and(
      z.any().openapi({ description: 'An identity pool ID in the format REGION:GUID.' }),
    ),
  })
  .openapi({
    required: ['IdentityPoolId'],
    title: 'DeleteIdentityPoolInput',
    description: 'Input to the DeleteIdentityPool action.',
  })
  .openapi('DeleteIdentityPoolInput')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const IdentityProviderNameSchema = z.string().min(1).max(128).openapi('IdentityProviderName')

const LoginsListSchema = z.array(IdentityProviderNameSchema).openapi('LoginsList')

const DateTypeSchema = z.iso.datetime({ offset: true }).openapi('DateType')

const IdentityDescriptionSchema = z
  .object({
    IdentityId: IdentityIdSchema.and(
      z.any().openapi({ description: 'A unique identifier in the format REGION:GUID.' }),
    ).exactOptional(),
    Logins: LoginsListSchema.and(
      z.any().openapi({ description: 'The provider names.' }),
    ).exactOptional(),
    CreationDate: DateTypeSchema.and(
      z.any().openapi({ description: 'Date on which the identity was created.' }),
    ).exactOptional(),
    LastModifiedDate: DateTypeSchema.and(
      z.any().openapi({ description: 'Date on which the identity was last modified.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A description of the identity.', required: [] })
  .openapi('IdentityDescription')

const DescribeIdentityInputSchema = z
  .object({
    IdentityId: IdentityIdSchema.and(
      z.any().openapi({ description: 'A unique identifier in the format REGION:GUID.' }),
    ),
  })
  .openapi({
    required: ['IdentityId'],
    title: 'DescribeIdentityInput',
    description: 'Input to the <code>DescribeIdentity</code> action.',
  })
  .openapi('DescribeIdentityInput')

const DescribeIdentityPoolInputSchema = z
  .object({
    IdentityPoolId: IdentityPoolIdSchema.and(
      z.any().openapi({ description: 'An identity pool ID in the format REGION:GUID.' }),
    ),
  })
  .openapi({
    required: ['IdentityPoolId'],
    title: 'DescribeIdentityPoolInput',
    description: 'Input to the DescribeIdentityPool action.',
  })
  .openapi('DescribeIdentityPoolInput')

const AccessKeyStringSchema = z.string().openapi('AccessKeyString')

const SecretKeyStringSchema = z.string().openapi('SecretKeyString')

const SessionTokenStringSchema = z.string().openapi('SessionTokenString')

const CredentialsSchema = z
  .object({
    AccessKeyId: AccessKeyStringSchema.and(
      z.any().openapi({ description: 'The Access Key portion of the credentials.' }),
    ).exactOptional(),
    SecretKey: SecretKeyStringSchema.and(
      z.any().openapi({ description: 'The Secret Access Key portion of the credentials' }),
    ).exactOptional(),
    SessionToken: SessionTokenStringSchema.and(
      z.any().openapi({ description: 'The Session Token portion of the credentials' }),
    ).exactOptional(),
    Expiration: DateTypeSchema.and(
      z.any().openapi({ description: 'The date at which these credentials will expire.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Credentials for the provided identity ID.', required: [] })
  .openapi('Credentials')

const GetCredentialsForIdentityResponseSchema = z
  .object({
    IdentityId: IdentityIdSchema.and(
      z.any().openapi({ description: 'A unique identifier in the format REGION:GUID.' }),
    ).exactOptional(),
    Credentials: CredentialsSchema.and(
      z.any().openapi({ description: 'Credentials for the provided identity ID.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Returned in response to a successful <code>GetCredentialsForIdentity</code> operation.',
    required: [],
  })
  .openapi('GetCredentialsForIdentityResponse')

const IdentityProviderTokenSchema = z.string().min(1).max(50000).openapi('IdentityProviderToken')

const LoginsMapSchema = z
  .record(z.string(), IdentityProviderTokenSchema)
  .refine((val) => Object.keys(val).length <= 10)
  .openapi('LoginsMap')

const GetCredentialsForIdentityInputSchema = z
  .object({
    IdentityId: IdentityIdSchema.and(
      z.any().openapi({ description: 'A unique identifier in the format REGION:GUID.' }),
    ),
    Logins: LoginsMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A set of optional name-value pairs that map provider names to provider tokens. The name-value pair will follow the syntax "provider_name": "provider_user_identifier".</p> <p>Logins should not be specified when trying to get credentials for an unauthenticated identity.</p> <p>The Logins parameter is required when using identities associated with external identity providers such as Facebook. For examples of <code>Logins</code> maps, see the code examples in the <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/external-identity-providers.html">External Identity Providers</a> section of the Amazon Cognito Developer Guide.</p>',
        }),
    ).exactOptional(),
    CustomRoleArn: ARNStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the role to be assumed when multiple roles were received in the token from the identity provider. For example, a SAML-based identity provider. This parameter is optional for identity providers that do not support role customization.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['IdentityId'],
    title: 'GetCredentialsForIdentityInput',
    description: 'Input to the <code>GetCredentialsForIdentity</code> action.',
  })
  .openapi('GetCredentialsForIdentityInput')

const InvalidIdentityPoolConfigurationExceptionSchema = z
  .any()
  .openapi('InvalidIdentityPoolConfigurationException')

const ExternalServiceExceptionSchema = z.any().openapi('ExternalServiceException')

const GetIdResponseSchema = z
  .object({
    IdentityId: IdentityIdSchema.and(
      z.any().openapi({ description: 'A unique identifier in the format REGION:GUID.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Returned in response to a GetId request.', required: [] })
  .openapi('GetIdResponse')

const AccountIdSchema = z.string().regex(/\d+/).min(1).max(15).openapi('AccountId')

const GetIdInputSchema = z
  .object({
    AccountId: AccountIdSchema.and(
      z.any().openapi({ description: 'A standard AWS account ID (9+ digits).' }),
    ).exactOptional(),
    IdentityPoolId: IdentityPoolIdSchema.and(
      z.any().openapi({ description: 'An identity pool ID in the format REGION:GUID.' }),
    ),
    Logins: LoginsMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A set of optional name-value pairs that map provider names to provider tokens. The available provider names for <code>Logins</code> are as follows:</p> <ul> <li> <p>Facebook: <code>graph.facebook.com</code> </p> </li> <li> <p>Amazon Cognito user pool: <code>cognito-idp.&lt;region&gt;.amazonaws.com/&lt;YOUR_USER_POOL_ID&gt;</code>, for example, <code>cognito-idp.us-east-1.amazonaws.com/us-east-1_123456789</code>. </p> </li> <li> <p>Google: <code>accounts.google.com</code> </p> </li> <li> <p>Amazon: <code>www.amazon.com</code> </p> </li> <li> <p>Twitter: <code>api.twitter.com</code> </p> </li> <li> <p>Digits: <code>www.digits.com</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['IdentityPoolId'],
    title: 'GetIdInput',
    description: 'Input to the GetId action.',
  })
  .openapi('GetIdInput')

const RolesMapSchema = z
  .record(z.string(), ARNStringSchema)
  .refine((val) => Object.keys(val).length <= 2)
  .openapi('RolesMap')

const RoleMappingTypeSchema = z.enum(['Token', 'Rules']).openapi('RoleMappingType')

const AmbiguousRoleResolutionTypeSchema = z
  .enum(['AuthenticatedRole', 'Deny'])
  .openapi('AmbiguousRoleResolutionType')

const ClaimNameSchema = z
  .string()
  .regex(/[\p{L}\p{M}\p{S}\p{N}\p{P}]+/u)
  .min(1)
  .max(64)
  .openapi('ClaimName')

const MappingRuleMatchTypeSchema = z
  .enum(['Equals', 'Contains', 'StartsWith', 'NotEqual'])
  .openapi('MappingRuleMatchType')

const ClaimValueSchema = z.string().min(1).max(128).openapi('ClaimValue')

const MappingRuleSchema = z
  .object({
    Claim: ClaimNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The claim name that must be present in the token, for example, "isAdmin" or "paid".',
        }),
    ),
    MatchType: MappingRuleMatchTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The match condition that specifies how closely the claim value in the IdP token must match <code>Value</code>.',
        }),
    ),
    Value: ClaimValueSchema.and(
      z
        .any()
        .openapi({
          description: 'A brief string that the claim must match, for example, "paid" or "yes".',
        }),
    ),
    RoleARN: ARNStringSchema.and(z.any().openapi({ description: 'The role ARN.' })),
  })
  .openapi({
    required: ['Claim', 'MatchType', 'Value', 'RoleARN'],
    description: 'A rule that maps a claim name, a claim value, and a match type to a role ARN.',
  })
  .openapi('MappingRule')

const MappingRulesListSchema = z
  .array(MappingRuleSchema)
  .min(1)
  .max(400)
  .openapi('MappingRulesList')

const RulesConfigurationTypeSchema = z
  .object({
    Rules: MappingRulesListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>An array of rules. You can specify up to 25 rules per identity provider.</p> <p>Rules are evaluated in order. The first one to match specifies the role.</p>',
        }),
    ),
  })
  .openapi({ required: ['Rules'], description: 'A container for rules.' })
  .openapi('RulesConfigurationType')

const RoleMappingSchema = z
  .object({
    Type: RoleMappingTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The role mapping type. Token will use <code>cognito:roles</code> and <code>cognito:preferred_role</code> claims from the Cognito identity provider token to map groups to roles. Rules will attempt to match claims from the token to map to a role.',
        }),
    ),
    AmbiguousRoleResolution: AmbiguousRoleResolutionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If you specify Token or Rules as the <code>Type</code>, <code>AmbiguousRoleResolution</code> is required.</p> <p>Specifies the action to be taken if either no rules match the claim value for the <code>Rules</code> type, or there is no <code>cognito:preferred_role</code> claim and there are multiple <code>cognito:roles</code> matches for the <code>Token</code> type.</p>',
        }),
    ).exactOptional(),
    RulesConfiguration: RulesConfigurationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The rules to be used for mapping users to roles.</p> <p>If you specify Rules as the role mapping type, <code>RulesConfiguration</code> is required.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Type'], description: 'A role mapping.' })
  .openapi('RoleMapping')

const RoleMappingMapSchema = z
  .record(z.string(), RoleMappingSchema)
  .refine((val) => Object.keys(val).length <= 10)
  .openapi('RoleMappingMap')

const GetIdentityPoolRolesResponseSchema = z
  .object({
    IdentityPoolId: IdentityPoolIdSchema.and(
      z.any().openapi({ description: 'An identity pool ID in the format REGION:GUID.' }),
    ).exactOptional(),
    Roles: RolesMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The map of roles associated with this pool. Currently only authenticated and unauthenticated roles are supported.',
        }),
    ).exactOptional(),
    RoleMappings: RoleMappingMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'How users for a specific identity provider are to mapped to roles. This is a String-to-<a>RoleMapping</a> object map. The string identifies the identity provider, for example, "graph.facebook.com" or "cognito-idp.us-east-1.amazonaws.com/us-east-1_abcdefghi:app_client_id".',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Returned in response to a successful <code>GetIdentityPoolRoles</code> operation.',
    required: [],
  })
  .openapi('GetIdentityPoolRolesResponse')

const GetIdentityPoolRolesInputSchema = z
  .object({
    IdentityPoolId: IdentityPoolIdSchema.and(
      z.any().openapi({ description: 'An identity pool ID in the format REGION:GUID.' }),
    ),
  })
  .openapi({
    required: ['IdentityPoolId'],
    title: 'GetIdentityPoolRolesInput',
    description: 'Input to the <code>GetIdentityPoolRoles</code> action.',
  })
  .openapi('GetIdentityPoolRolesInput')

const OIDCTokenSchema = z.string().openapi('OIDCToken')

const GetOpenIdTokenResponseSchema = z
  .object({
    IdentityId: IdentityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier in the format REGION:GUID. Note that the IdentityId returned may not match the one passed on input.',
        }),
    ).exactOptional(),
    Token: OIDCTokenSchema.and(
      z.any().openapi({ description: 'An OpenID token, valid for 10 minutes.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Returned in response to a successful GetOpenIdToken request.',
    required: [],
  })
  .openapi('GetOpenIdTokenResponse')

const GetOpenIdTokenInputSchema = z
  .object({
    IdentityId: IdentityIdSchema.and(
      z.any().openapi({ description: 'A unique identifier in the format REGION:GUID.' }),
    ),
    Logins: LoginsMapSchema.and(
      z
        .any()
        .openapi({
          description:
            "A set of optional name-value pairs that map provider names to provider tokens. When using graph.facebook.com and www.amazon.com, supply the access_token returned from the provider's authflow. For accounts.google.com, an Amazon Cognito user pool provider, or any other OpenID Connect provider, always include the <code>id_token</code>.",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['IdentityId'],
    title: 'GetOpenIdTokenInput',
    description: 'Input to the GetOpenIdToken action.',
  })
  .openapi('GetOpenIdTokenInput')

const GetOpenIdTokenForDeveloperIdentityResponseSchema = z
  .object({
    IdentityId: IdentityIdSchema.and(
      z.any().openapi({ description: 'A unique identifier in the format REGION:GUID.' }),
    ).exactOptional(),
    Token: OIDCTokenSchema.and(
      z.any().openapi({ description: 'An OpenID token.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Returned in response to a successful <code>GetOpenIdTokenForDeveloperIdentity</code> request.',
    required: [],
  })
  .openapi('GetOpenIdTokenForDeveloperIdentityResponse')

const PrincipalTagValueSchema = z.string().min(1).max(256).openapi('PrincipalTagValue')

const PrincipalTagsSchema = z
  .record(z.string(), PrincipalTagValueSchema)
  .refine((val) => Object.keys(val).length <= 50)
  .openapi('PrincipalTags')

const TokenDurationSchema = z.int().min(1).max(86400).openapi('TokenDuration')

const GetOpenIdTokenForDeveloperIdentityInputSchema = z
  .object({
    IdentityPoolId: IdentityPoolIdSchema.and(
      z.any().openapi({ description: 'An identity pool ID in the format REGION:GUID.' }),
    ),
    IdentityId: IdentityIdSchema.and(
      z.any().openapi({ description: 'A unique identifier in the format REGION:GUID.' }),
    ).exactOptional(),
    Logins: LoginsMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'A set of optional name-value pairs that map provider names to provider tokens. Each name-value pair represents a user from a public provider or developer provider. If the user is from a developer provider, the name-value pair will follow the syntax <code>"developer_provider_name": "developer_user_identifier"</code>. The developer provider is the "domain" by which Cognito will refer to your users; you provided this domain while creating/updating the identity pool. The developer user identifier is an identifier from your backend that uniquely identifies a user. When you create an identity pool, you can specify the supported logins.',
        }),
    ),
    PrincipalTags: PrincipalTagsSchema.and(
      z
        .any()
        .openapi({
          description: 'Use this operation to configure attribute mappings for custom providers. ',
        }),
    ).exactOptional(),
    TokenDuration: TokenDurationSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The expiration time of the token, in seconds. You can specify a custom expiration time for the token so that you can cache it. If you don't provide an expiration time, the token is valid for 15 minutes. You can exchange the token with Amazon STS for temporary AWS credentials, which are valid for a maximum of one hour. The maximum token duration you can set is 24 hours. You should take care in setting the expiration time for a token, as there are significant security implications: an attacker could use a leaked token to access your AWS resources for the token's duration.</p> <note> <p>Please provide for a small grace period, usually no more than 5 minutes, to account for clock skew.</p> </note>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['IdentityPoolId', 'Logins'],
    title: 'GetOpenIdTokenForDeveloperIdentityInput',
    description: 'Input to the <code>GetOpenIdTokenForDeveloperIdentity</code> action.',
  })
  .openapi('GetOpenIdTokenForDeveloperIdentityInput')

const DeveloperUserAlreadyRegisteredExceptionSchema = z
  .any()
  .openapi('DeveloperUserAlreadyRegisteredException')

const UseDefaultsSchema = z.boolean().openapi('UseDefaults')

const GetPrincipalTagAttributeMapResponseSchema = z
  .object({
    IdentityPoolId: IdentityPoolIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'You can use this operation to get the ID of the Identity Pool you setup attribute mappings for.',
        }),
    ).exactOptional(),
    IdentityProviderName: IdentityProviderNameSchema.and(
      z.any().openapi({ description: 'You can use this operation to get the provider name.' }),
    ).exactOptional(),
    UseDefaults: UseDefaultsSchema.and(
      z.any().openapi({ description: 'You can use this operation to list ' }),
    ).exactOptional(),
    PrincipalTags: PrincipalTagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'You can use this operation to add principal tags. The <code>PrincipalTags</code>operation enables you to reference user attributes in your IAM permissions policy.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetPrincipalTagAttributeMapResponse')

const GetPrincipalTagAttributeMapInputSchema = z
  .object({
    IdentityPoolId: IdentityPoolIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'You can use this operation to get the ID of the Identity Pool you setup attribute mappings for.',
        }),
    ),
    IdentityProviderName: IdentityProviderNameSchema.and(
      z.any().openapi({ description: 'You can use this operation to get the provider name.' }),
    ),
  })
  .openapi({
    required: ['IdentityPoolId', 'IdentityProviderName'],
    title: 'GetPrincipalTagAttributeMapInput',
  })
  .openapi('GetPrincipalTagAttributeMapInput')

const IdentitiesListSchema = z.array(IdentityDescriptionSchema).openapi('IdentitiesList')

const PaginationKeySchema = z.string().regex(/[\S]+/).min(1).max(65535).openapi('PaginationKey')

const ListIdentitiesResponseSchema = z
  .object({
    IdentityPoolId: IdentityPoolIdSchema.and(
      z.any().openapi({ description: 'An identity pool ID in the format REGION:GUID.' }),
    ).exactOptional(),
    Identities: IdentitiesListSchema.and(
      z
        .any()
        .openapi({
          description: 'An object containing a set of identities and associated mappings.',
        }),
    ).exactOptional(),
    NextToken: PaginationKeySchema.and(
      z.any().openapi({ description: 'A pagination token.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The response to a ListIdentities request.', required: [] })
  .openapi('ListIdentitiesResponse')

const QueryLimitSchema = z.int().min(1).max(60).openapi('QueryLimit')

const HideDisabledSchema = z.boolean().openapi('HideDisabled')

const ListIdentitiesInputSchema = z
  .object({
    IdentityPoolId: IdentityPoolIdSchema.and(
      z.any().openapi({ description: 'An identity pool ID in the format REGION:GUID.' }),
    ),
    MaxResults: QueryLimitSchema.and(
      z.any().openapi({ description: 'The maximum number of identities to return.' }),
    ),
    NextToken: PaginationKeySchema.and(
      z.any().openapi({ description: 'A pagination token.' }),
    ).exactOptional(),
    HideDisabled: HideDisabledSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional boolean parameter that allows you to hide disabled identities. If omitted, the ListIdentities API will include disabled identities in the response.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['IdentityPoolId', 'MaxResults'],
    title: 'ListIdentitiesInput',
    description: 'Input to the ListIdentities action.',
  })
  .openapi('ListIdentitiesInput')

const IdentityPoolShortDescriptionSchema = z
  .object({
    IdentityPoolId: IdentityPoolIdSchema.and(
      z.any().openapi({ description: 'An identity pool ID in the format REGION:GUID.' }),
    ).exactOptional(),
    IdentityPoolName: IdentityPoolNameSchema.and(
      z.any().openapi({ description: 'A string that you provide.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A description of the identity pool.', required: [] })
  .openapi('IdentityPoolShortDescription')

const IdentityPoolsListSchema = z
  .array(IdentityPoolShortDescriptionSchema)
  .openapi('IdentityPoolsList')

const ListIdentityPoolsResponseSchema = z
  .object({
    IdentityPools: IdentityPoolsListSchema.and(
      z
        .any()
        .openapi({ description: 'The identity pools returned by the ListIdentityPools action.' }),
    ).exactOptional(),
    NextToken: PaginationKeySchema.and(
      z.any().openapi({ description: 'A pagination token.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The result of a successful ListIdentityPools action.', required: [] })
  .openapi('ListIdentityPoolsResponse')

const ListIdentityPoolsInputSchema = z
  .object({
    MaxResults: QueryLimitSchema.and(
      z.any().openapi({ description: 'The maximum number of identities to return.' }),
    ),
    NextToken: PaginationKeySchema.and(
      z.any().openapi({ description: 'A pagination token.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['MaxResults'],
    title: 'ListIdentityPoolsInput',
    description: 'Input to the ListIdentityPools action.',
  })
  .openapi('ListIdentityPoolsInput')

const ListTagsForResourceResponseSchema = z
  .object({
    Tags: IdentityPoolTagsTypeSchema.and(
      z.any().openapi({ description: 'The tags that are assigned to the identity pool.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const ListTagsForResourceInputSchema = z
  .object({
    ResourceArn: ARNStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the identity pool that the tags are assigned to.',
        }),
    ),
  })
  .openapi({ required: ['ResourceArn'], title: 'ListTagsForResourceInput' })
  .openapi('ListTagsForResourceInput')

const DeveloperUserIdentifierSchema = z.string().min(1).max(1024).openapi('DeveloperUserIdentifier')

const DeveloperUserIdentifierListSchema = z
  .array(DeveloperUserIdentifierSchema)
  .openapi('DeveloperUserIdentifierList')

const LookupDeveloperIdentityResponseSchema = z
  .object({
    IdentityId: IdentityIdSchema.and(
      z.any().openapi({ description: 'A unique identifier in the format REGION:GUID.' }),
    ).exactOptional(),
    DeveloperUserIdentifierList: DeveloperUserIdentifierListSchema.and(
      z
        .any()
        .openapi({
          description:
            'This is the list of developer user identifiers associated with an identity ID. Cognito supports the association of multiple developer user identifiers with an identity ID.',
        }),
    ).exactOptional(),
    NextToken: PaginationKeySchema.and(
      z
        .any()
        .openapi({
          description:
            "A pagination token. The first call you make will have <code>NextToken</code> set to null. After that the service will return <code>NextToken</code> values as needed. For example, let's say you make a request with <code>MaxResults</code> set to 10, and there are 20 matches in the database. The service will return a pagination token as a part of the response. This token can be used to call the API again and get results starting from the 11th match.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Returned in response to a successful <code>LookupDeveloperIdentity</code> action.',
    required: [],
  })
  .openapi('LookupDeveloperIdentityResponse')

const LookupDeveloperIdentityInputSchema = z
  .object({
    IdentityPoolId: IdentityPoolIdSchema.and(
      z.any().openapi({ description: 'An identity pool ID in the format REGION:GUID.' }),
    ),
    IdentityId: IdentityIdSchema.and(
      z.any().openapi({ description: 'A unique identifier in the format REGION:GUID.' }),
    ).exactOptional(),
    DeveloperUserIdentifier: DeveloperUserIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique ID used by your backend authentication process to identify a user. Typically, a developer identity provider would issue many developer user identifiers, in keeping with the number of users.',
        }),
    ).exactOptional(),
    MaxResults: QueryLimitSchema.and(
      z.any().openapi({ description: 'The maximum number of identities to return.' }),
    ).exactOptional(),
    NextToken: PaginationKeySchema.and(
      z
        .any()
        .openapi({
          description:
            "A pagination token. The first call you make will have <code>NextToken</code> set to null. After that the service will return <code>NextToken</code> values as needed. For example, let's say you make a request with <code>MaxResults</code> set to 10, and there are 20 matches in the database. The service will return a pagination token as a part of the response. This token can be used to call the API again and get results starting from the 11th match.",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['IdentityPoolId'],
    title: 'LookupDeveloperIdentityInput',
    description: 'Input to the <code>LookupDeveloperIdentityInput</code> action.',
  })
  .openapi('LookupDeveloperIdentityInput')

const MergeDeveloperIdentitiesResponseSchema = z
  .object({
    IdentityId: IdentityIdSchema.and(
      z.any().openapi({ description: 'A unique identifier in the format REGION:GUID.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Returned in response to a successful <code>MergeDeveloperIdentities</code> action.',
    required: [],
  })
  .openapi('MergeDeveloperIdentitiesResponse')

const MergeDeveloperIdentitiesInputSchema = z
  .object({
    SourceUserIdentifier: DeveloperUserIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            'User identifier for the source user. The value should be a <code>DeveloperUserIdentifier</code>.',
        }),
    ),
    DestinationUserIdentifier: DeveloperUserIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            'User identifier for the destination user. The value should be a <code>DeveloperUserIdentifier</code>.',
        }),
    ),
    DeveloperProviderName: DeveloperProviderNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The "domain" by which Cognito will refer to your users. This is a (pseudo) domain name that you provide while creating an identity pool. This name acts as a placeholder that allows your backend and the Cognito service to communicate about the developer provider. For the <code>DeveloperProviderName</code>, you can use letters as well as period (.), underscore (_), and dash (-).',
        }),
    ),
    IdentityPoolId: IdentityPoolIdSchema.and(
      z.any().openapi({ description: 'An identity pool ID in the format REGION:GUID.' }),
    ),
  })
  .openapi({
    required: [
      'SourceUserIdentifier',
      'DestinationUserIdentifier',
      'DeveloperProviderName',
      'IdentityPoolId',
    ],
    title: 'MergeDeveloperIdentitiesInput',
    description: 'Input to the <code>MergeDeveloperIdentities</code> action.',
  })
  .openapi('MergeDeveloperIdentitiesInput')

const SetIdentityPoolRolesInputSchema = z
  .object({
    IdentityPoolId: IdentityPoolIdSchema.and(
      z.any().openapi({ description: 'An identity pool ID in the format REGION:GUID.' }),
    ),
    Roles: RolesMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'The map of roles associated with this pool. For a given role, the key will be either "authenticated" or "unauthenticated" and the value will be the Role ARN.',
        }),
    ),
    RoleMappings: RoleMappingMapSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>How users for a specific identity provider are to mapped to roles. This is a string to <a>RoleMapping</a> object map. The string identifies the identity provider, for example, "graph.facebook.com" or "cognito-idp.us-east-1.amazonaws.com/us-east-1_abcdefghi:app_client_id".</p> <p>Up to 25 rules can be specified per identity provider.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['IdentityPoolId', 'Roles'],
    title: 'SetIdentityPoolRolesInput',
    description: 'Input to the <code>SetIdentityPoolRoles</code> action.',
  })
  .openapi('SetIdentityPoolRolesInput')

const ConcurrentModificationExceptionSchema = z.any().openapi('ConcurrentModificationException')

const SetPrincipalTagAttributeMapResponseSchema = z
  .object({
    IdentityPoolId: IdentityPoolIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the Identity Pool you want to set attribute mappings for.',
        }),
    ).exactOptional(),
    IdentityProviderName: IdentityProviderNameSchema.and(
      z.any().openapi({ description: 'The provider name you want to use for attribute mappings.' }),
    ).exactOptional(),
    UseDefaults: UseDefaultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'You can use this operation to select default (username and clientID) attribute mappings.',
        }),
    ).exactOptional(),
    PrincipalTags: PrincipalTagsSchema.and(
      z
        .any()
        .openapi({
          description:
            'You can use this operation to add principal tags. The <code>PrincipalTags</code>operation enables you to reference user attributes in your IAM permissions policy.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SetPrincipalTagAttributeMapResponse')

const SetPrincipalTagAttributeMapInputSchema = z
  .object({
    IdentityPoolId: IdentityPoolIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the Identity Pool you want to set attribute mappings for.',
        }),
    ),
    IdentityProviderName: IdentityProviderNameSchema.and(
      z.any().openapi({ description: 'The provider name you want to use for attribute mappings.' }),
    ),
    UseDefaults: UseDefaultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'You can use this operation to use default (username and clientID) attribute mappings.',
        }),
    ).exactOptional(),
    PrincipalTags: PrincipalTagsSchema.and(
      z.any().openapi({ description: 'You can use this operation to add principal tags.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['IdentityPoolId', 'IdentityProviderName'],
    title: 'SetPrincipalTagAttributeMapInput',
  })
  .openapi('SetPrincipalTagAttributeMapInput')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const TagResourceInputSchema = z
  .object({
    ResourceArn: ARNStringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the identity pool.' }),
    ),
    Tags: IdentityPoolTagsTypeSchema.and(
      z.any().openapi({ description: 'The tags to assign to the identity pool.' }),
    ),
  })
  .openapi({ required: ['ResourceArn', 'Tags'], title: 'TagResourceInput' })
  .openapi('TagResourceInput')

const UnlinkDeveloperIdentityInputSchema = z
  .object({
    IdentityId: IdentityIdSchema.and(
      z.any().openapi({ description: 'A unique identifier in the format REGION:GUID.' }),
    ),
    IdentityPoolId: IdentityPoolIdSchema.and(
      z.any().openapi({ description: 'An identity pool ID in the format REGION:GUID.' }),
    ),
    DeveloperProviderName: DeveloperProviderNameSchema.and(
      z.any().openapi({ description: 'The "domain" by which Cognito will refer to your users.' }),
    ),
    DeveloperUserIdentifier: DeveloperUserIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique ID used by your backend authentication process to identify a user.',
        }),
    ),
  })
  .openapi({
    required: ['IdentityId', 'IdentityPoolId', 'DeveloperProviderName', 'DeveloperUserIdentifier'],
    title: 'UnlinkDeveloperIdentityInput',
    description: 'Input to the <code>UnlinkDeveloperIdentity</code> action.',
  })
  .openapi('UnlinkDeveloperIdentityInput')

const UnlinkIdentityInputSchema = z
  .object({
    IdentityId: IdentityIdSchema.and(
      z.any().openapi({ description: 'A unique identifier in the format REGION:GUID.' }),
    ),
    Logins: LoginsMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'A set of optional name-value pairs that map provider names to provider tokens.',
        }),
    ),
    LoginsToRemove: LoginsListSchema.and(
      z.any().openapi({ description: 'Provider names to unlink from this identity.' }),
    ),
  })
  .openapi({
    required: ['IdentityId', 'Logins', 'LoginsToRemove'],
    title: 'UnlinkIdentityInput',
    description: 'Input to the UnlinkIdentity action.',
  })
  .openapi('UnlinkIdentityInput')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const TagKeysTypeSchema = z.string().min(1).max(128).openapi('TagKeysType')

const IdentityPoolTagsListTypeSchema = z
  .array(TagKeysTypeSchema)
  .openapi('IdentityPoolTagsListType')

const UntagResourceInputSchema = z
  .object({
    ResourceArn: ARNStringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the identity pool.' }),
    ),
    TagKeys: IdentityPoolTagsListTypeSchema.and(
      z.any().openapi({ description: 'The keys of the tags to remove from the user pool.' }),
    ),
  })
  .openapi({ required: ['ResourceArn', 'TagKeys'], title: 'UntagResourceInput' })
  .openapi('UntagResourceInput')

const PrincipalTagIDSchema = z.string().min(1).max(128).openapi('PrincipalTagID')

const RoleTypeSchema = z
  .string()
  .regex(/(un)?authenticated/)
  .min(1)
  .max(128)
  .openapi('RoleType')

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

export const postXAmzTargetAWSCognitoIdentityServiceCreateIdentityPoolRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityService.CreateIdentityPool',
  description:
    '<p>Creates a new identity pool. The identity pool is a store of user identity information that is specific to your AWS account. The keys for <code>SupportedLoginProviders</code> are as follows:</p> <ul> <li> <p>Facebook: <code>graph.facebook.com</code> </p> </li> <li> <p>Google: <code>accounts.google.com</code> </p> </li> <li> <p>Amazon: <code>www.amazon.com</code> </p> </li> <li> <p>Twitter: <code>api.twitter.com</code> </p> </li> <li> <p>Digits: <code>www.digits.com</code> </p> </li> </ul> <p>You must use AWS Developer credentials to call this API.</p>',
  operationId: 'CreateIdentityPool',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSCognitoIdentityService.CreateIdentityPool')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSCognitoIdentityService.CreateIdentityPool'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateIdentityPoolInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: IdentityPoolSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    482: {
      description: 'ResourceConflictException',
      content: { 'application/json': { schema: ResourceConflictExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    485: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityServiceDeleteIdentitiesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityService.DeleteIdentities',
  description:
    '<p>Deletes identities from an identity pool. You can specify a list of 1-60 identities that you want to delete.</p> <p>You must use AWS Developer credentials to call this API.</p>',
  operationId: 'DeleteIdentities',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSCognitoIdentityService.DeleteIdentities')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSCognitoIdentityService.DeleteIdentities'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteIdentitiesInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteIdentitiesResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityServiceDeleteIdentityPoolRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityService.DeleteIdentityPool',
  description:
    '<p>Deletes an identity pool. Once a pool is deleted, users will not be able to authenticate with the pool.</p> <p>You must use AWS Developer credentials to call this API.</p>',
  operationId: 'DeleteIdentityPool',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSCognitoIdentityService.DeleteIdentityPool')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSCognitoIdentityService.DeleteIdentityPool'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteIdentityPoolInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityServiceDescribeIdentityRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityService.DescribeIdentity',
  description:
    '<p>Returns metadata related to the given identity, including when the identity was created and any associated linked logins.</p> <p>You must use AWS Developer credentials to call this API.</p>',
  operationId: 'DescribeIdentity',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSCognitoIdentityService.DescribeIdentity')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSCognitoIdentityService.DescribeIdentity'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeIdentityInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: IdentityDescriptionSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityServiceDescribeIdentityPoolRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityService.DescribeIdentityPool',
  description:
    '<p>Gets details about a particular identity pool, including the pool name, ID description, creation date, and current number of users.</p> <p>You must use AWS Developer credentials to call this API.</p>',
  operationId: 'DescribeIdentityPool',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSCognitoIdentityService.DescribeIdentityPool')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSCognitoIdentityService.DescribeIdentityPool'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeIdentityPoolInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: IdentityPoolSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityServiceGetCredentialsForIdentityRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityService.GetCredentialsForIdentity',
  description:
    '<p>Returns credentials for the provided identity ID. Any provided logins will be validated against supported login providers. If the token is for cognito-identity.amazonaws.com, it will be passed through to AWS Security Token Service with the appropriate role for the token.</p> <p>This is a public API. You do not need any credentials to call this API.</p>',
  operationId: 'GetCredentialsForIdentity',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSCognitoIdentityService.GetCredentialsForIdentity')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSCognitoIdentityService.GetCredentialsForIdentity'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetCredentialsForIdentityInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetCredentialsForIdentityResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    483: {
      description: 'ResourceConflictException',
      content: { 'application/json': { schema: ResourceConflictExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'InvalidIdentityPoolConfigurationException',
      content: { 'application/json': { schema: InvalidIdentityPoolConfigurationExceptionSchema } },
    },
    486: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    487: {
      description: 'ExternalServiceException',
      content: { 'application/json': { schema: ExternalServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityServiceGetIdRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityService.GetId',
  description:
    '<p>Generates (or retrieves) a Cognito ID. Supplying multiple logins will create an implicit linked account.</p> <p>This is a public API. You do not need any credentials to call this API.</p>',
  operationId: 'GetId',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSCognitoIdentityService.GetId')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSCognitoIdentityService.GetId'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetIdInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetIdResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    483: {
      description: 'ResourceConflictException',
      content: { 'application/json': { schema: ResourceConflictExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    486: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    487: {
      description: 'ExternalServiceException',
      content: { 'application/json': { schema: ExternalServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityServiceGetIdentityPoolRolesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityService.GetIdentityPoolRoles',
  description:
    '<p>Gets the roles for an identity pool.</p> <p>You must use AWS Developer credentials to call this API.</p>',
  operationId: 'GetIdentityPoolRoles',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSCognitoIdentityService.GetIdentityPoolRoles')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSCognitoIdentityService.GetIdentityPoolRoles'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetIdentityPoolRolesInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetIdentityPoolRolesResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    483: {
      description: 'ResourceConflictException',
      content: { 'application/json': { schema: ResourceConflictExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityServiceGetOpenIdTokenRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityService.GetOpenIdToken',
  description:
    '<p>Gets an OpenID token, using a known Cognito ID. This known Cognito ID is returned by <a>GetId</a>. You can optionally add additional logins for the identity. Supplying multiple logins creates an implicit link.</p> <p>The OpenID token is valid for 10 minutes.</p> <p>This is a public API. You do not need any credentials to call this API.</p>',
  operationId: 'GetOpenIdToken',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSCognitoIdentityService.GetOpenIdToken')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSCognitoIdentityService.GetOpenIdToken'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetOpenIdTokenInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetOpenIdTokenResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    483: {
      description: 'ResourceConflictException',
      content: { 'application/json': { schema: ResourceConflictExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    486: {
      description: 'ExternalServiceException',
      content: { 'application/json': { schema: ExternalServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityServiceGetOpenIdTokenForDeveloperIdentityRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=AWSCognitoIdentityService.GetOpenIdTokenForDeveloperIdentity',
    description:
      '<p>Registers (or retrieves) a Cognito <code>IdentityId</code> and an OpenID Connect token for a user authenticated by your backend authentication process. Supplying multiple logins will create an implicit linked account. You can only specify one developer provider as part of the <code>Logins</code> map, which is linked to the identity pool. The developer provider is the "domain" by which Cognito will refer to your users.</p> <p>You can use <code>GetOpenIdTokenForDeveloperIdentity</code> to create a new identity and to link new logins (that is, user credentials issued by a public provider or developer provider) to an existing identity. When you want to create a new identity, the <code>IdentityId</code> should be null. When you want to associate a new login with an existing authenticated/unauthenticated identity, you can do so by providing the existing <code>IdentityId</code>. This API will create the identity in the specified <code>IdentityPoolId</code>.</p> <p>You must use AWS Developer credentials to call this API.</p>',
    operationId: 'GetOpenIdTokenForDeveloperIdentity',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'X-Amz-Target': z
          .literal('AWSCognitoIdentityService.GetOpenIdTokenForDeveloperIdentity')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['AWSCognitoIdentityService.GetOpenIdTokenForDeveloperIdentity'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: GetOpenIdTokenForDeveloperIdentityInputSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: GetOpenIdTokenForDeveloperIdentityResponseSchema },
        },
      },
      480: {
        description: 'InvalidParameterException',
        content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
      },
      481: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      482: {
        description: 'NotAuthorizedException',
        content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
      },
      483: {
        description: 'ResourceConflictException',
        content: { 'application/json': { schema: ResourceConflictExceptionSchema } },
      },
      484: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      485: {
        description: 'InternalErrorException',
        content: { 'application/json': { schema: InternalErrorExceptionSchema } },
      },
      486: {
        description: 'DeveloperUserAlreadyRegisteredException',
        content: { 'application/json': { schema: DeveloperUserAlreadyRegisteredExceptionSchema } },
      },
    },
  })

export const postXAmzTargetAWSCognitoIdentityServiceGetPrincipalTagAttributeMapRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityService.GetPrincipalTagAttributeMap',
  description:
    'Use <code>GetPrincipalTagAttributeMap</code> to list all mappings between <code>PrincipalTags</code> and user attributes.',
  operationId: 'GetPrincipalTagAttributeMap',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSCognitoIdentityService.GetPrincipalTagAttributeMap')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSCognitoIdentityService.GetPrincipalTagAttributeMap'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetPrincipalTagAttributeMapInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetPrincipalTagAttributeMapResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityServiceListIdentitiesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityService.ListIdentities',
  description:
    '<p>Lists the identities in an identity pool.</p> <p>You must use AWS Developer credentials to call this API.</p>',
  operationId: 'ListIdentities',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSCognitoIdentityService.ListIdentities')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSCognitoIdentityService.ListIdentities'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListIdentitiesInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListIdentitiesResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityServiceListIdentityPoolsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityService.ListIdentityPools',
  description:
    '<p>Lists all of the Cognito identity pools registered for your account.</p> <p>You must use AWS Developer credentials to call this API.</p>',
  operationId: 'ListIdentityPools',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSCognitoIdentityService.ListIdentityPools')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSCognitoIdentityService.ListIdentityPools'] },
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
      content: { 'application/json': { schema: ListIdentityPoolsInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListIdentityPoolsResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityServiceListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityService.ListTagsForResource',
  description:
    '<p>Lists the tags that are assigned to an Amazon Cognito identity pool.</p> <p>A tag is a label that you can apply to identity pools to categorize and manage them in different ways, such as by purpose, owner, environment, or other criteria.</p> <p>You can use this action up to 10 times per second, per account.</p>',
  operationId: 'ListTagsForResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSCognitoIdentityService.ListTagsForResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSCognitoIdentityService.ListTagsForResource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListTagsForResourceInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsForResourceResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityServiceLookupDeveloperIdentityRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityService.LookupDeveloperIdentity',
  description:
    '<p>Retrieves the <code>IdentityID</code> associated with a <code>DeveloperUserIdentifier</code> or the list of <code>DeveloperUserIdentifier</code> values associated with an <code>IdentityId</code> for an existing identity. Either <code>IdentityID</code> or <code>DeveloperUserIdentifier</code> must not be null. If you supply only one of these values, the other value will be searched in the database and returned as a part of the response. If you supply both, <code>DeveloperUserIdentifier</code> will be matched against <code>IdentityID</code>. If the values are verified against the database, the response returns both values and is the same as the request. Otherwise a <code>ResourceConflictException</code> is thrown.</p> <p> <code>LookupDeveloperIdentity</code> is intended for low-throughput control plane operations: for example, to enable customer service to locate an identity ID by username. If you are using it for higher-volume operations such as user authentication, your requests are likely to be throttled. <a>GetOpenIdTokenForDeveloperIdentity</a> is a better option for higher-volume operations for user authentication.</p> <p>You must use AWS Developer credentials to call this API.</p>',
  operationId: 'LookupDeveloperIdentity',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSCognitoIdentityService.LookupDeveloperIdentity')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSCognitoIdentityService.LookupDeveloperIdentity'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: LookupDeveloperIdentityInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: LookupDeveloperIdentityResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    483: {
      description: 'ResourceConflictException',
      content: { 'application/json': { schema: ResourceConflictExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityServiceMergeDeveloperIdentitiesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityService.MergeDeveloperIdentities',
  description:
    '<p>Merges two users having different <code>IdentityId</code>s, existing in the same identity pool, and identified by the same developer provider. You can use this action to request that discrete users be merged and identified as a single user in the Cognito environment. Cognito associates the given source user (<code>SourceUserIdentifier</code>) with the <code>IdentityId</code> of the <code>DestinationUserIdentifier</code>. Only developer-authenticated users can be merged. If the users to be merged are associated with the same public provider, but as two different users, an exception will be thrown.</p> <p>The number of linked logins is limited to 20. So, the number of linked logins for the source user, <code>SourceUserIdentifier</code>, and the destination user, <code>DestinationUserIdentifier</code>, together should not be larger than 20. Otherwise, an exception will be thrown.</p> <p>You must use AWS Developer credentials to call this API.</p>',
  operationId: 'MergeDeveloperIdentities',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSCognitoIdentityService.MergeDeveloperIdentities')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSCognitoIdentityService.MergeDeveloperIdentities'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: MergeDeveloperIdentitiesInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: MergeDeveloperIdentitiesResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    483: {
      description: 'ResourceConflictException',
      content: { 'application/json': { schema: ResourceConflictExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityServiceSetIdentityPoolRolesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityService.SetIdentityPoolRoles',
  description:
    '<p>Sets the roles for an identity pool. These roles are used when making calls to <a>GetCredentialsForIdentity</a> action.</p> <p>You must use AWS Developer credentials to call this API.</p>',
  operationId: 'SetIdentityPoolRoles',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSCognitoIdentityService.SetIdentityPoolRoles')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSCognitoIdentityService.SetIdentityPoolRoles'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SetIdentityPoolRolesInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    483: {
      description: 'ResourceConflictException',
      content: { 'application/json': { schema: ResourceConflictExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    486: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityServiceSetPrincipalTagAttributeMapRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityService.SetPrincipalTagAttributeMap',
  description:
    'You can use this operation to use default (username and clientID) attribute or custom attribute mappings.',
  operationId: 'SetPrincipalTagAttributeMap',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSCognitoIdentityService.SetPrincipalTagAttributeMap')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['AWSCognitoIdentityService.SetPrincipalTagAttributeMap'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SetPrincipalTagAttributeMapInputSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SetPrincipalTagAttributeMapResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityServiceTagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityService.TagResource',
  description:
    '<p>Assigns a set of tags to the specified Amazon Cognito identity pool. A tag is a label that you can use to categorize and manage identity pools in different ways, such as by purpose, owner, environment, or other criteria.</p> <p>Each tag consists of a key and value, both of which you define. A key is a general category for more specific values. For example, if you have two versions of an identity pool, one for testing and another for production, you might assign an <code>Environment</code> tag key to both identity pools. The value of this key might be <code>Test</code> for one identity pool and <code>Production</code> for the other.</p> <p>Tags are useful for cost tracking and access control. You can activate your tags so that they appear on the Billing and Cost Management console, where you can track the costs associated with your identity pools. In an IAM policy, you can constrain permissions for identity pools based on specific tags or tag values.</p> <p>You can use this action up to 5 times per second, per account. An identity pool can have as many as 50 tags.</p>',
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
      'X-Amz-Target': z
        .literal('AWSCognitoIdentityService.TagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSCognitoIdentityService.TagResource'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TagResourceInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TagResourceResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityServiceUnlinkDeveloperIdentityRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityService.UnlinkDeveloperIdentity',
  description:
    '<p>Unlinks a <code>DeveloperUserIdentifier</code> from an existing identity. Unlinked developer users will be considered new identities next time they are seen. If, for a given Cognito identity, you remove all federated identities as well as the developer user identifier, the Cognito identity becomes inaccessible.</p> <p>You must use AWS Developer credentials to call this API.</p>',
  operationId: 'UnlinkDeveloperIdentity',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSCognitoIdentityService.UnlinkDeveloperIdentity')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSCognitoIdentityService.UnlinkDeveloperIdentity'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UnlinkDeveloperIdentityInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    483: {
      description: 'ResourceConflictException',
      content: { 'application/json': { schema: ResourceConflictExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityServiceUnlinkIdentityRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityService.UnlinkIdentity',
  description:
    '<p>Unlinks a federated identity from an existing account. Unlinked logins will be considered new identities next time they are seen. Removing the last linked login will make this identity inaccessible.</p> <p>This is a public API. You do not need any credentials to call this API.</p>',
  operationId: 'UnlinkIdentity',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSCognitoIdentityService.UnlinkIdentity')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSCognitoIdentityService.UnlinkIdentity'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UnlinkIdentityInputSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    483: {
      description: 'ResourceConflictException',
      content: { 'application/json': { schema: ResourceConflictExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    486: {
      description: 'ExternalServiceException',
      content: { 'application/json': { schema: ExternalServiceExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityServiceUntagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityService.UntagResource',
  description:
    'Removes the specified tags from the specified Amazon Cognito identity pool. You can use this action up to 5 times per second, per account',
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
      'X-Amz-Target': z
        .literal('AWSCognitoIdentityService.UntagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSCognitoIdentityService.UntagResource'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UntagResourceInputSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UntagResourceResponseSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSCognitoIdentityServiceUpdateIdentityPoolRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSCognitoIdentityService.UpdateIdentityPool',
  description:
    '<p>Updates an identity pool.</p> <p>You must use AWS Developer credentials to call this API.</p>',
  operationId: 'UpdateIdentityPool',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AWSCognitoIdentityService.UpdateIdentityPool')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSCognitoIdentityService.UpdateIdentityPool'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: IdentityPoolSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: IdentityPoolSchema } },
    },
    480: {
      description: 'InvalidParameterException',
      content: { 'application/json': { schema: InvalidParameterExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    483: {
      description: 'ResourceConflictException',
      content: { 'application/json': { schema: ResourceConflictExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'InternalErrorException',
      content: { 'application/json': { schema: InternalErrorExceptionSchema } },
    },
    486: {
      description: 'ConcurrentModificationException',
      content: { 'application/json': { schema: ConcurrentModificationExceptionSchema } },
    },
    487: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})
