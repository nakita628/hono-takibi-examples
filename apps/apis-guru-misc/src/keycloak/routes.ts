import { createRoute, z } from '@hono/zod-openapi'

type GroupRepresentationType = {
  access?: { [key: string]: unknown }
  attributes?: { [key: string]: unknown }
  clientRoles?: { [key: string]: unknown }
  id?: string
  name?: string
  path?: string
  realmRoles?: string[]
  subGroups?: GroupRepresentationType[]
}

const ResourceRepresentationSchema: z.ZodType<ResourceRepresentationType> = z
  .lazy(() =>
    z
      .object({
        attributes: z.looseObject({}).exactOptional(),
        displayName: z.string().exactOptional(),
        icon_uri: z.string().exactOptional(),
        id: z.string().exactOptional(),
        name: z.string().exactOptional(),
        ownerManagedAccess: z.boolean().exactOptional(),
        scopes: z.array(ScopeRepresentationSchema).exactOptional(),
        type: z.string().exactOptional(),
        uris: z.array(z.string()).exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('ResourceRepresentation')

const ScopeRepresentationSchema: z.ZodType<ScopeRepresentationType> = z
  .lazy(() =>
    z
      .object({
        displayName: z.string().exactOptional(),
        iconUri: z.string().exactOptional(),
        id: z.string().exactOptional(),
        name: z.string().exactOptional(),
        policies: z.array(PolicyRepresentationSchema).exactOptional(),
        resources: z.array(ResourceRepresentationSchema).exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('ScopeRepresentation')

type PolicyRepresentationType = {
  config?: { [key: string]: unknown }
  decisionStrategy?: 'AFFIRMATIVE' | 'UNANIMOUS' | 'CONSENSUS'
  description?: string
  id?: string
  logic?: 'POSITIVE' | 'NEGATIVE'
  name?: string
  owner?: string
  policies?: string[]
  resources?: string[]
  resourcesData?: z.infer<typeof ResourceRepresentationSchema>[]
  scopes?: string[]
  scopesData?: z.infer<typeof ScopeRepresentationSchema>[]
  type?: string
}

type ResourceRepresentationType = {
  attributes?: { [key: string]: unknown }
  displayName?: string
  icon_uri?: string
  id?: string
  name?: string
  ownerManagedAccess?: boolean
  scopes?: z.infer<typeof ScopeRepresentationSchema>[]
  type?: string
  uris?: string[]
}

const PolicyRepresentationSchema: z.ZodType<PolicyRepresentationType> = z
  .lazy(() =>
    z
      .object({
        config: z.looseObject({}).exactOptional(),
        decisionStrategy: z.enum(['AFFIRMATIVE', 'UNANIMOUS', 'CONSENSUS']).exactOptional(),
        description: z.string().exactOptional(),
        id: z.string().exactOptional(),
        logic: z.enum(['POSITIVE', 'NEGATIVE']).exactOptional(),
        name: z.string().exactOptional(),
        owner: z.string().exactOptional(),
        policies: z.array(z.string()).exactOptional(),
        resources: z.array(z.string()).exactOptional(),
        resourcesData: z.array(ResourceRepresentationSchema).exactOptional(),
        scopes: z.array(z.string()).exactOptional(),
        scopesData: z.array(ScopeRepresentationSchema).exactOptional(),
        type: z.string().exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('PolicyRepresentation')

type ScopeRepresentationType = {
  displayName?: string
  iconUri?: string
  id?: string
  name?: string
  policies?: z.infer<typeof PolicyRepresentationSchema>[]
  resources?: z.infer<typeof ResourceRepresentationSchema>[]
}

const AddressClaimSetSchema = z
  .object({
    country: z.string().exactOptional(),
    formatted: z.string().exactOptional(),
    locality: z.string().exactOptional(),
    postal_code: z.string().exactOptional(),
    region: z.string().exactOptional(),
    street_address: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AddressClaimSet')

const PermissionSchema = z
  .object({
    claims: z.looseObject({}).exactOptional(),
    rsid: z.string().exactOptional(),
    rsname: z.string().exactOptional(),
    scopes: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Permission')

const AccessTokenAuthorizationSchema = z
  .object({ permissions: z.array(PermissionSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('AccessTokenAuthorization')

const AccessTokenCertConfSchema = z
  .object({ 'x5t#S256': z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('AccessTokenCertConf')

const AccessTokenAccessSchema = z
  .object({
    roles: z.array(z.string()).exactOptional(),
    verify_caller: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AccessTokenAccess')

const AccessTokenSchema = z
  .object({
    acr: z.string().exactOptional(),
    address: AddressClaimSetSchema.exactOptional(),
    'allowed-origins': z.array(z.string()).exactOptional(),
    at_hash: z.string().exactOptional(),
    auth_time: z
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
    authorization: AccessTokenAuthorizationSchema.exactOptional(),
    azp: z.string().exactOptional(),
    birthdate: z.string().exactOptional(),
    c_hash: z.string().exactOptional(),
    category: z.enum(['INTERNAL', 'ACCESS', 'ID', 'ADMIN', 'USERINFO']).exactOptional(),
    claims_locales: z.string().exactOptional(),
    cnf: AccessTokenCertConfSchema.exactOptional(),
    email: z.string().exactOptional(),
    email_verified: z.boolean().exactOptional(),
    exp: z
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
    family_name: z.string().exactOptional(),
    gender: z.string().exactOptional(),
    given_name: z.string().exactOptional(),
    iat: z
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
    iss: z.string().exactOptional(),
    jti: z.string().exactOptional(),
    locale: z.string().exactOptional(),
    middle_name: z.string().exactOptional(),
    name: z.string().exactOptional(),
    nbf: z
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
    nickname: z.string().exactOptional(),
    nonce: z.string().exactOptional(),
    otherClaims: z.looseObject({}).exactOptional(),
    phone_number: z.string().exactOptional(),
    phone_number_verified: z.boolean().exactOptional(),
    picture: z.string().exactOptional(),
    preferred_username: z.string().exactOptional(),
    profile: z.string().exactOptional(),
    realm_access: AccessTokenAccessSchema.exactOptional(),
    s_hash: z.string().exactOptional(),
    scope: z.string().exactOptional(),
    session_state: z.string().exactOptional(),
    sub: z.string().exactOptional(),
    'trusted-certs': z.array(z.string()).exactOptional(),
    typ: z.string().exactOptional(),
    updated_at: z
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
    website: z.string().exactOptional(),
    zoneinfo: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AccessToken')

const AuthDetailsRepresentationSchema = z
  .object({
    clientId: z.string().exactOptional(),
    ipAddress: z.string().exactOptional(),
    realmId: z.string().exactOptional(),
    userId: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AuthDetailsRepresentation')

const AdminEventRepresentationSchema = z
  .object({
    authDetails: AuthDetailsRepresentationSchema.exactOptional(),
    error: z.string().exactOptional(),
    operationType: z.string().exactOptional(),
    realmId: z.string().exactOptional(),
    representation: z.string().exactOptional(),
    resourcePath: z.string().exactOptional(),
    resourceType: z.string().exactOptional(),
    time: z
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
  .openapi('AdminEventRepresentation')

const AuthenticationExecutionExportRepresentationSchema = z
  .object({
    authenticator: z.string().exactOptional(),
    authenticatorConfig: z.string().exactOptional(),
    authenticatorFlow: z.boolean().exactOptional(),
    autheticatorFlow: z.boolean().exactOptional(),
    flowAlias: z.string().exactOptional(),
    priority: z.int32().exactOptional(),
    requirement: z.string().exactOptional(),
    userSetupAllowed: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AuthenticationExecutionExportRepresentation')

const AuthenticationExecutionInfoRepresentationSchema = z
  .object({
    alias: z.string().exactOptional(),
    authenticationConfig: z.string().exactOptional(),
    authenticationFlow: z.boolean().exactOptional(),
    configurable: z.boolean().exactOptional(),
    displayName: z.string().exactOptional(),
    flowId: z.string().exactOptional(),
    id: z.string().exactOptional(),
    index: z.int32().exactOptional(),
    level: z.int32().exactOptional(),
    providerId: z.string().exactOptional(),
    requirement: z.string().exactOptional(),
    requirementChoices: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AuthenticationExecutionInfoRepresentation')

const AuthenticationExecutionRepresentationSchema = z
  .object({
    authenticator: z.string().exactOptional(),
    authenticatorConfig: z.string().exactOptional(),
    authenticatorFlow: z.boolean().exactOptional(),
    autheticatorFlow: z.boolean().exactOptional(),
    flowId: z.string().exactOptional(),
    id: z.string().exactOptional(),
    parentFlow: z.string().exactOptional(),
    priority: z.int32().exactOptional(),
    requirement: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AuthenticationExecutionRepresentation')

const AuthenticationFlowRepresentationSchema = z
  .object({
    alias: z.string().exactOptional(),
    authenticationExecutions: z
      .array(AuthenticationExecutionExportRepresentationSchema)
      .exactOptional(),
    builtIn: z.boolean().exactOptional(),
    description: z.string().exactOptional(),
    id: z.string().exactOptional(),
    providerId: z.string().exactOptional(),
    topLevel: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AuthenticationFlowRepresentation')

const ConfigPropertyRepresentationSchema = z
  .object({
    defaultValue: z.object({}).exactOptional(),
    helpText: z.string().exactOptional(),
    label: z.string().exactOptional(),
    name: z.string().exactOptional(),
    options: z.array(z.string()).exactOptional(),
    secret: z.boolean().exactOptional(),
    type: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ConfigPropertyRepresentation')

const AuthenticatorConfigInfoRepresentationSchema = z
  .object({
    helpText: z.string().exactOptional(),
    name: z.string().exactOptional(),
    properties: z.array(ConfigPropertyRepresentationSchema).exactOptional(),
    providerId: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AuthenticatorConfigInfoRepresentation')

const AuthenticatorConfigRepresentationSchema = z
  .object({
    alias: z.string().exactOptional(),
    config: z.looseObject({}).exactOptional(),
    id: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AuthenticatorConfigRepresentation')

const CertificateRepresentationSchema = z
  .object({
    certificate: z.string().exactOptional(),
    kid: z.string().exactOptional(),
    privateKey: z.string().exactOptional(),
    publicKey: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CertificateRepresentation')

const ClientInitialAccessCreatePresentationSchema = z
  .object({ count: z.int32().exactOptional(), expiration: z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('ClientInitialAccessCreatePresentation')

const ClientInitialAccessPresentationSchema = z
  .object({
    count: z.int32().exactOptional(),
    expiration: z.int32().exactOptional(),
    id: z.string().exactOptional(),
    remainingCount: z.int32().exactOptional(),
    timestamp: z.int32().exactOptional(),
    token: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ClientInitialAccessPresentation')

const RoleRepresentationCompositesSchema = z
  .object({ client: z.looseObject({}).exactOptional(), realm: z.array(z.string()).exactOptional() })
  .openapi({ required: [] })
  .openapi('RoleRepresentationComposites')

const RoleRepresentationSchema = z
  .object({
    attributes: z.looseObject({}).exactOptional(),
    clientRole: z.boolean().exactOptional(),
    composite: z.boolean().exactOptional(),
    composites: RoleRepresentationCompositesSchema.exactOptional(),
    containerId: z.string().exactOptional(),
    description: z.string().exactOptional(),
    id: z.string().exactOptional(),
    name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RoleRepresentation')

const ClientMappingsRepresentationSchema = z
  .object({
    client: z.string().exactOptional(),
    id: z.string().exactOptional(),
    mappings: z.array(RoleRepresentationSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ClientMappingsRepresentation')

const ResourceServerRepresentationSchema = z
  .object({
    allowRemoteResourceManagement: z.boolean().exactOptional(),
    clientId: z.string().exactOptional(),
    decisionStrategy: z.enum(['AFFIRMATIVE', 'UNANIMOUS', 'CONSENSUS']).exactOptional(),
    id: z.string().exactOptional(),
    name: z.string().exactOptional(),
    policies: z.array(PolicyRepresentationSchema).exactOptional(),
    policyEnforcementMode: z.enum(['ENFORCING', 'PERMISSIVE', 'DISABLED']).exactOptional(),
    resources: z.array(ResourceRepresentationSchema).exactOptional(),
    scopes: z.array(ScopeRepresentationSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResourceServerRepresentation')

const ProtocolMapperRepresentationSchema = z
  .object({
    config: z.looseObject({}).exactOptional(),
    id: z.string().exactOptional(),
    name: z.string().exactOptional(),
    protocol: z.string().exactOptional(),
    protocolMapper: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProtocolMapperRepresentation')

const ClientRepresentationSchema = z
  .object({
    access: z.looseObject({}).exactOptional(),
    adminUrl: z.string().exactOptional(),
    alwaysDisplayInConsole: z.boolean().exactOptional(),
    attributes: z.looseObject({}).exactOptional(),
    authenticationFlowBindingOverrides: z.looseObject({}).exactOptional(),
    authorizationServicesEnabled: z.boolean().exactOptional(),
    authorizationSettings: ResourceServerRepresentationSchema.exactOptional(),
    baseUrl: z.string().exactOptional(),
    bearerOnly: z.boolean().exactOptional(),
    clientAuthenticatorType: z.string().exactOptional(),
    clientId: z.string().exactOptional(),
    consentRequired: z.boolean().exactOptional(),
    defaultClientScopes: z.array(z.string()).exactOptional(),
    defaultRoles: z.array(z.string()).exactOptional(),
    description: z.string().exactOptional(),
    directAccessGrantsEnabled: z.boolean().exactOptional(),
    enabled: z.boolean().exactOptional(),
    frontchannelLogout: z.boolean().exactOptional(),
    fullScopeAllowed: z.boolean().exactOptional(),
    id: z.string().exactOptional(),
    implicitFlowEnabled: z.boolean().exactOptional(),
    name: z.string().exactOptional(),
    nodeReRegistrationTimeout: z.int32().exactOptional(),
    notBefore: z.int32().exactOptional(),
    optionalClientScopes: z.array(z.string()).exactOptional(),
    origin: z.string().exactOptional(),
    protocol: z.string().exactOptional(),
    protocolMappers: z.array(ProtocolMapperRepresentationSchema).exactOptional(),
    publicClient: z.boolean().exactOptional(),
    redirectUris: z.array(z.string()).exactOptional(),
    registeredNodes: z.looseObject({}).exactOptional(),
    registrationAccessToken: z.string().exactOptional(),
    rootUrl: z.string().exactOptional(),
    secret: z.string().exactOptional(),
    serviceAccountsEnabled: z.boolean().exactOptional(),
    standardFlowEnabled: z.boolean().exactOptional(),
    surrogateAuthRequired: z.boolean().exactOptional(),
    webOrigins: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ClientRepresentation')

const ClientScopeEvaluateResourceProtocolMapperEvaluationRepresentationSchema = z
  .object({
    containerId: z.string().exactOptional(),
    containerName: z.string().exactOptional(),
    containerType: z.string().exactOptional(),
    mapperId: z.string().exactOptional(),
    mapperName: z.string().exactOptional(),
    protocolMapper: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ClientScopeEvaluateResourceProtocolMapperEvaluationRepresentation')

const ClientScopeRepresentationSchema = z
  .object({
    attributes: z.looseObject({}).exactOptional(),
    description: z.string().exactOptional(),
    id: z.string().exactOptional(),
    name: z.string().exactOptional(),
    protocol: z.string().exactOptional(),
    protocolMappers: z.array(ProtocolMapperRepresentationSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ClientScopeRepresentation')

const MultivaluedHashMapSchema = z
  .object({
    empty: z.boolean().exactOptional(),
    loadFactor: z.float32().exactOptional(),
    threshold: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MultivaluedHashMap')

const ComponentExportRepresentationSchema = z
  .object({
    config: MultivaluedHashMapSchema.exactOptional(),
    id: z.string().exactOptional(),
    name: z.string().exactOptional(),
    providerId: z.string().exactOptional(),
    subComponents: MultivaluedHashMapSchema.exactOptional(),
    subType: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ComponentExportRepresentation')

const ComponentRepresentationSchema = z
  .object({
    config: MultivaluedHashMapSchema.exactOptional(),
    id: z.string().exactOptional(),
    name: z.string().exactOptional(),
    parentId: z.string().exactOptional(),
    providerId: z.string().exactOptional(),
    providerType: z.string().exactOptional(),
    subType: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ComponentRepresentation')

const ComponentTypeRepresentationSchema = z
  .object({
    helpText: z.string().exactOptional(),
    id: z.string().exactOptional(),
    metadata: z.looseObject({}).exactOptional(),
    properties: z.array(ConfigPropertyRepresentationSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ComponentTypeRepresentation')

const CredentialRepresentationSchema = z
  .object({
    createdDate: z
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
    credentialData: z.string().exactOptional(),
    id: z.string().exactOptional(),
    priority: z.int32().exactOptional(),
    secretData: z.string().exactOptional(),
    temporary: z.boolean().exactOptional(),
    type: z.string().exactOptional(),
    userLabel: z.string().exactOptional(),
    value: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CredentialRepresentation')

const EventRepresentationSchema = z
  .object({
    clientId: z.string().exactOptional(),
    details: z.looseObject({}).exactOptional(),
    error: z.string().exactOptional(),
    ipAddress: z.string().exactOptional(),
    realmId: z.string().exactOptional(),
    sessionId: z.string().exactOptional(),
    time: z
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
    type: z.string().exactOptional(),
    userId: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EventRepresentation')

const FederatedIdentityRepresentationSchema = z
  .object({
    identityProvider: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    userName: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FederatedIdentityRepresentation')

const GlobalRequestResultSchema = z
  .object({
    failedRequests: z.array(z.string()).exactOptional(),
    successRequests: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GlobalRequestResult')

const GroupRepresentationSchema: z.ZodType<GroupRepresentationType> = z
  .lazy(() =>
    z
      .object({
        access: z.looseObject({}).exactOptional(),
        attributes: z.looseObject({}).exactOptional(),
        clientRoles: z.looseObject({}).exactOptional(),
        id: z.string().exactOptional(),
        name: z.string().exactOptional(),
        path: z.string().exactOptional(),
        realmRoles: z.array(z.string()).exactOptional(),
        subGroups: z.array(GroupRepresentationSchema).exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('GroupRepresentation')

const IdentityProviderMapperRepresentationSchema = z
  .object({
    config: z.looseObject({}).exactOptional(),
    id: z.string().exactOptional(),
    identityProviderAlias: z.string().exactOptional(),
    identityProviderMapper: z.string().exactOptional(),
    name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('IdentityProviderMapperRepresentation')

const IdentityProviderRepresentationSchema = z
  .object({
    addReadTokenRoleOnCreate: z.boolean().exactOptional(),
    alias: z.string().exactOptional(),
    config: z.looseObject({}).exactOptional(),
    displayName: z.string().exactOptional(),
    enabled: z.boolean().exactOptional(),
    firstBrokerLoginFlowAlias: z.string().exactOptional(),
    internalId: z.string().exactOptional(),
    linkOnly: z.boolean().exactOptional(),
    postBrokerLoginFlowAlias: z.string().exactOptional(),
    providerId: z.string().exactOptional(),
    storeToken: z.boolean().exactOptional(),
    trustEmail: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('IdentityProviderRepresentation')

const KeyStoreConfigSchema = z
  .object({
    format: z.string().exactOptional(),
    keyAlias: z.string().exactOptional(),
    keyPassword: z.string().exactOptional(),
    realmAlias: z.string().exactOptional(),
    realmCertificate: z.boolean().exactOptional(),
    storePassword: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('KeyStoreConfig')

const KeysMetadataRepresentationKeyMetadataRepresentationSchema = z
  .object({
    algorithm: z.string().exactOptional(),
    certificate: z.string().exactOptional(),
    kid: z.string().exactOptional(),
    providerId: z.string().exactOptional(),
    providerPriority: z
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
    publicKey: z.string().exactOptional(),
    status: z.string().exactOptional(),
    type: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('KeysMetadataRepresentationKeyMetadataRepresentation')

const KeysMetadataRepresentationSchema = z
  .object({
    active: z.looseObject({}).exactOptional(),
    keys: z.array(KeysMetadataRepresentationKeyMetadataRepresentationSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('KeysMetadataRepresentation')

const ManagementPermissionReferenceSchema = z
  .object({
    enabled: z.boolean().exactOptional(),
    resource: z.string().exactOptional(),
    scopePermissions: z.looseObject({}).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ManagementPermissionReference')

const MappingsRepresentationSchema = z
  .object({
    clientMappings: z.looseObject({}).exactOptional(),
    realmMappings: z.array(RoleRepresentationSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MappingsRepresentation')

const MemoryInfoRepresentationSchema = z
  .object({
    free: z
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
    freeFormated: z.string().exactOptional(),
    freePercentage: z
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
    totalFormated: z.string().exactOptional(),
    used: z
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
    usedFormated: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MemoryInfoRepresentation')

const RolesRepresentationSchema = z
  .object({
    client: z.looseObject({}).exactOptional(),
    realm: z.array(RoleRepresentationSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RolesRepresentation')

const UserConsentRepresentationSchema = z
  .object({
    clientId: z.string().exactOptional(),
    createdDate: z
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
    grantedClientScopes: z.array(z.string()).exactOptional(),
    lastUpdatedDate: z
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
  .openapi('UserConsentRepresentation')

const UserRepresentationSchema = z
  .object({
    access: z.looseObject({}).exactOptional(),
    attributes: z.looseObject({}).exactOptional(),
    clientConsents: z.array(UserConsentRepresentationSchema).exactOptional(),
    clientRoles: z.looseObject({}).exactOptional(),
    createdTimestamp: z
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
    credentials: z.array(CredentialRepresentationSchema).exactOptional(),
    disableableCredentialTypes: z.array(z.string()).exactOptional(),
    email: z.string().exactOptional(),
    emailVerified: z.boolean().exactOptional(),
    enabled: z.boolean().exactOptional(),
    federatedIdentities: z.array(FederatedIdentityRepresentationSchema).exactOptional(),
    federationLink: z.string().exactOptional(),
    firstName: z.string().exactOptional(),
    groups: z.array(z.string()).exactOptional(),
    id: z.string().exactOptional(),
    lastName: z.string().exactOptional(),
    notBefore: z.int32().exactOptional(),
    origin: z.string().exactOptional(),
    realmRoles: z.array(z.string()).exactOptional(),
    requiredActions: z.array(z.string()).exactOptional(),
    self: z.string().exactOptional(),
    serviceAccountClientId: z.string().exactOptional(),
    username: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserRepresentation')

const PartialImportRepresentationSchema = z
  .object({
    clients: z.array(ClientRepresentationSchema).exactOptional(),
    groups: z.array(GroupRepresentationSchema).exactOptional(),
    identityProviders: z.array(IdentityProviderRepresentationSchema).exactOptional(),
    ifResourceExists: z.string().exactOptional(),
    policy: z.enum(['SKIP', 'OVERWRITE', 'FAIL']).exactOptional(),
    roles: RolesRepresentationSchema.exactOptional(),
    users: z.array(UserRepresentationSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PartialImportRepresentation')

const PasswordPolicyTypeRepresentationSchema = z
  .object({
    configType: z.string().exactOptional(),
    defaultValue: z.string().exactOptional(),
    displayName: z.string().exactOptional(),
    id: z.string().exactOptional(),
    multipleSupported: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PasswordPolicyTypeRepresentation')

const ProfileInfoRepresentationSchema = z
  .object({
    disabledFeatures: z.array(z.string()).exactOptional(),
    experimentalFeatures: z.array(z.string()).exactOptional(),
    name: z.string().exactOptional(),
    previewFeatures: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProfileInfoRepresentation')

const ProviderRepresentationSchema = z
  .object({ operationalInfo: z.looseObject({}).exactOptional(), order: z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('ProviderRepresentation')

const RealmEventsConfigRepresentationSchema = z
  .object({
    adminEventsDetailsEnabled: z.boolean().exactOptional(),
    adminEventsEnabled: z.boolean().exactOptional(),
    enabledEventTypes: z.array(z.string()).exactOptional(),
    eventsEnabled: z.boolean().exactOptional(),
    eventsExpiration: z
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
    eventsListeners: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RealmEventsConfigRepresentation')

const RequiredActionProviderRepresentationSchema = z
  .object({
    alias: z.string().exactOptional(),
    config: z.looseObject({}).exactOptional(),
    defaultAction: z.boolean().exactOptional(),
    enabled: z.boolean().exactOptional(),
    name: z.string().exactOptional(),
    priority: z.int32().exactOptional(),
    providerId: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RequiredActionProviderRepresentation')

const ScopeMappingRepresentationSchema = z
  .object({
    client: z.string().exactOptional(),
    clientScope: z.string().exactOptional(),
    roles: z.array(z.string()).exactOptional(),
    self: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ScopeMappingRepresentation')

const UserFederationMapperRepresentationSchema = z
  .object({
    config: z.looseObject({}).exactOptional(),
    federationMapperType: z.string().exactOptional(),
    federationProviderDisplayName: z.string().exactOptional(),
    id: z.string().exactOptional(),
    name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserFederationMapperRepresentation')

const UserFederationProviderRepresentationSchema = z
  .object({
    changedSyncPeriod: z.int32().exactOptional(),
    config: z.looseObject({}).exactOptional(),
    displayName: z.string().exactOptional(),
    fullSyncPeriod: z.int32().exactOptional(),
    id: z.string().exactOptional(),
    lastSync: z.int32().exactOptional(),
    priority: z.int32().exactOptional(),
    providerName: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserFederationProviderRepresentation')

const RealmRepresentationSchema = z
  .object({
    accessCodeLifespan: z.int32().exactOptional(),
    accessCodeLifespanLogin: z.int32().exactOptional(),
    accessCodeLifespanUserAction: z.int32().exactOptional(),
    accessTokenLifespan: z.int32().exactOptional(),
    accessTokenLifespanForImplicitFlow: z.int32().exactOptional(),
    accountTheme: z.string().exactOptional(),
    actionTokenGeneratedByAdminLifespan: z.int32().exactOptional(),
    actionTokenGeneratedByUserLifespan: z.int32().exactOptional(),
    adminEventsDetailsEnabled: z.boolean().exactOptional(),
    adminEventsEnabled: z.boolean().exactOptional(),
    adminTheme: z.string().exactOptional(),
    attributes: z.looseObject({}).exactOptional(),
    authenticationFlows: z.array(AuthenticationFlowRepresentationSchema).exactOptional(),
    authenticatorConfig: z.array(AuthenticatorConfigRepresentationSchema).exactOptional(),
    browserFlow: z.string().exactOptional(),
    browserSecurityHeaders: z.looseObject({}).exactOptional(),
    bruteForceProtected: z.boolean().exactOptional(),
    clientAuthenticationFlow: z.string().exactOptional(),
    clientScopeMappings: z.looseObject({}).exactOptional(),
    clientScopes: z.array(ClientScopeRepresentationSchema).exactOptional(),
    clientSessionIdleTimeout: z.int32().exactOptional(),
    clientSessionMaxLifespan: z.int32().exactOptional(),
    clients: z.array(ClientRepresentationSchema).exactOptional(),
    components: MultivaluedHashMapSchema.exactOptional(),
    defaultDefaultClientScopes: z.array(z.string()).exactOptional(),
    defaultGroups: z.array(z.string()).exactOptional(),
    defaultLocale: z.string().exactOptional(),
    defaultOptionalClientScopes: z.array(z.string()).exactOptional(),
    defaultRoles: z.array(z.string()).exactOptional(),
    defaultSignatureAlgorithm: z.string().exactOptional(),
    directGrantFlow: z.string().exactOptional(),
    displayName: z.string().exactOptional(),
    displayNameHtml: z.string().exactOptional(),
    dockerAuthenticationFlow: z.string().exactOptional(),
    duplicateEmailsAllowed: z.boolean().exactOptional(),
    editUsernameAllowed: z.boolean().exactOptional(),
    emailTheme: z.string().exactOptional(),
    enabled: z.boolean().exactOptional(),
    enabledEventTypes: z.array(z.string()).exactOptional(),
    eventsEnabled: z.boolean().exactOptional(),
    eventsExpiration: z
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
    eventsListeners: z.array(z.string()).exactOptional(),
    failureFactor: z.int32().exactOptional(),
    federatedUsers: z.array(UserRepresentationSchema).exactOptional(),
    groups: z.array(GroupRepresentationSchema).exactOptional(),
    id: z.string().exactOptional(),
    identityProviderMappers: z.array(IdentityProviderMapperRepresentationSchema).exactOptional(),
    identityProviders: z.array(IdentityProviderRepresentationSchema).exactOptional(),
    internationalizationEnabled: z.boolean().exactOptional(),
    keycloakVersion: z.string().exactOptional(),
    loginTheme: z.string().exactOptional(),
    loginWithEmailAllowed: z.boolean().exactOptional(),
    maxDeltaTimeSeconds: z.int32().exactOptional(),
    maxFailureWaitSeconds: z.int32().exactOptional(),
    minimumQuickLoginWaitSeconds: z.int32().exactOptional(),
    notBefore: z.int32().exactOptional(),
    offlineSessionIdleTimeout: z.int32().exactOptional(),
    offlineSessionMaxLifespan: z.int32().exactOptional(),
    offlineSessionMaxLifespanEnabled: z.boolean().exactOptional(),
    otpPolicyAlgorithm: z.string().exactOptional(),
    otpPolicyDigits: z.int32().exactOptional(),
    otpPolicyInitialCounter: z.int32().exactOptional(),
    otpPolicyLookAheadWindow: z.int32().exactOptional(),
    otpPolicyPeriod: z.int32().exactOptional(),
    otpPolicyType: z.string().exactOptional(),
    otpSupportedApplications: z.array(z.string()).exactOptional(),
    passwordPolicy: z.string().exactOptional(),
    permanentLockout: z.boolean().exactOptional(),
    protocolMappers: z.array(ProtocolMapperRepresentationSchema).exactOptional(),
    quickLoginCheckMilliSeconds: z
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
    realm: z.string().exactOptional(),
    refreshTokenMaxReuse: z.int32().exactOptional(),
    registrationAllowed: z.boolean().exactOptional(),
    registrationEmailAsUsername: z.boolean().exactOptional(),
    registrationFlow: z.string().exactOptional(),
    rememberMe: z.boolean().exactOptional(),
    requiredActions: z.array(RequiredActionProviderRepresentationSchema).exactOptional(),
    resetCredentialsFlow: z.string().exactOptional(),
    resetPasswordAllowed: z.boolean().exactOptional(),
    revokeRefreshToken: z.boolean().exactOptional(),
    roles: RolesRepresentationSchema.exactOptional(),
    scopeMappings: z.array(ScopeMappingRepresentationSchema).exactOptional(),
    smtpServer: z.looseObject({}).exactOptional(),
    sslRequired: z.string().exactOptional(),
    ssoSessionIdleTimeout: z.int32().exactOptional(),
    ssoSessionIdleTimeoutRememberMe: z.int32().exactOptional(),
    ssoSessionMaxLifespan: z.int32().exactOptional(),
    ssoSessionMaxLifespanRememberMe: z.int32().exactOptional(),
    supportedLocales: z.array(z.string()).exactOptional(),
    userFederationMappers: z.array(UserFederationMapperRepresentationSchema).exactOptional(),
    userFederationProviders: z.array(UserFederationProviderRepresentationSchema).exactOptional(),
    userManagedAccessAllowed: z.boolean().exactOptional(),
    users: z.array(UserRepresentationSchema).exactOptional(),
    verifyEmail: z.boolean().exactOptional(),
    waitIncrementSeconds: z.int32().exactOptional(),
    webAuthnPolicyAcceptableAaguids: z.array(z.string()).exactOptional(),
    webAuthnPolicyAttestationConveyancePreference: z.string().exactOptional(),
    webAuthnPolicyAuthenticatorAttachment: z.string().exactOptional(),
    webAuthnPolicyAvoidSameAuthenticatorRegister: z.boolean().exactOptional(),
    webAuthnPolicyCreateTimeout: z.int32().exactOptional(),
    webAuthnPolicyPasswordlessAcceptableAaguids: z.array(z.string()).exactOptional(),
    webAuthnPolicyPasswordlessAttestationConveyancePreference: z.string().exactOptional(),
    webAuthnPolicyPasswordlessAuthenticatorAttachment: z.string().exactOptional(),
    webAuthnPolicyPasswordlessAvoidSameAuthenticatorRegister: z.boolean().exactOptional(),
    webAuthnPolicyPasswordlessCreateTimeout: z.int32().exactOptional(),
    webAuthnPolicyPasswordlessRequireResidentKey: z.string().exactOptional(),
    webAuthnPolicyPasswordlessRpEntityName: z.string().exactOptional(),
    webAuthnPolicyPasswordlessRpId: z.string().exactOptional(),
    webAuthnPolicyPasswordlessSignatureAlgorithms: z.array(z.string()).exactOptional(),
    webAuthnPolicyPasswordlessUserVerificationRequirement: z.string().exactOptional(),
    webAuthnPolicyRequireResidentKey: z.string().exactOptional(),
    webAuthnPolicyRpEntityName: z.string().exactOptional(),
    webAuthnPolicyRpId: z.string().exactOptional(),
    webAuthnPolicySignatureAlgorithms: z.array(z.string()).exactOptional(),
    webAuthnPolicyUserVerificationRequirement: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RealmRepresentation')

const SystemInfoRepresentationSchema = z
  .object({
    fileEncoding: z.string().exactOptional(),
    javaHome: z.string().exactOptional(),
    javaRuntime: z.string().exactOptional(),
    javaVendor: z.string().exactOptional(),
    javaVersion: z.string().exactOptional(),
    javaVm: z.string().exactOptional(),
    javaVmVersion: z.string().exactOptional(),
    osArchitecture: z.string().exactOptional(),
    osName: z.string().exactOptional(),
    osVersion: z.string().exactOptional(),
    serverTime: z.string().exactOptional(),
    uptime: z.string().exactOptional(),
    uptimeMillis: z
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
    userDir: z.string().exactOptional(),
    userLocale: z.string().exactOptional(),
    userName: z.string().exactOptional(),
    userTimezone: z.string().exactOptional(),
    version: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SystemInfoRepresentation')

const ServerInfoRepresentationSchema = z
  .object({
    builtinProtocolMappers: z.looseObject({}).exactOptional(),
    clientImporters: z.array(z.looseObject({})).exactOptional(),
    clientInstallations: z.looseObject({}).exactOptional(),
    componentTypes: z.looseObject({}).exactOptional(),
    enums: z.looseObject({}).exactOptional(),
    identityProviders: z.array(z.looseObject({})).exactOptional(),
    memoryInfo: MemoryInfoRepresentationSchema.exactOptional(),
    passwordPolicies: z.array(PasswordPolicyTypeRepresentationSchema).exactOptional(),
    profileInfo: ProfileInfoRepresentationSchema.exactOptional(),
    protocolMapperTypes: z.looseObject({}).exactOptional(),
    providers: z.looseObject({}).exactOptional(),
    socialProviders: z.array(z.looseObject({})).exactOptional(),
    systemInfo: SystemInfoRepresentationSchema.exactOptional(),
    themes: z.looseObject({}).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ServerInfoRepresentation')

const SpiInfoRepresentationSchema = z
  .object({ internal: z.boolean().exactOptional(), providers: z.looseObject({}).exactOptional() })
  .openapi({ required: [] })
  .openapi('SpiInfoRepresentation')

const SynchronizationResultSchema = z
  .object({
    added: z.int32().exactOptional(),
    failed: z.int32().exactOptional(),
    ignored: z.boolean().exactOptional(),
    removed: z.int32().exactOptional(),
    status: z.string().exactOptional(),
    updated: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SynchronizationResult')

const TestLdapConnectionRepresentationSchema = z
  .object({
    action: z.string().exactOptional(),
    bindCredential: z.string().exactOptional(),
    bindDn: z.string().exactOptional(),
    componentId: z.string().exactOptional(),
    connectionTimeout: z.string().exactOptional(),
    connectionUrl: z.string().exactOptional(),
    startTls: z.string().exactOptional(),
    useTruststoreSpi: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TestLdapConnectionRepresentation')

const UserSessionRepresentationSchema = z
  .object({
    clients: z.looseObject({}).exactOptional(),
    id: z.string().exactOptional(),
    ipAddress: z.string().exactOptional(),
    lastAccess: z
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
    start: z
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
    userId: z.string().exactOptional(),
    username: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserSessionRepresentation')

const AccessTokenSecurityScheme = { scheme: 'bearer', type: 'http' }

export const getRoute = createRoute({
  method: 'get',
  path: '/',
  tags: ['Root'],
  summary:
    'Get themes, social providers, auth providers, and event listeners available on this server',
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: ServerInfoRepresentationSchema } },
    },
  },
})

export const postRoute = createRoute({
  method: 'post',
  path: '/',
  tags: ['Realms Admin'],
  summary: 'Import a realm   Imports a realm from a full representation of that realm.',
  request: {
    body: {
      description: 'JSON representation of the realm',
      content: { 'application/json': { schema: RealmRepresentationSchema } },
      required: true,
    },
  },
  responses: { '2XX': { description: 'success' } },
})

export const getIdNameRoute = createRoute({
  method: 'get',
  path: '/{id}/name',
  tags: ['User Storage Provider'],
  summary:
    'Need this for admin console to display simple name of provider when displaying client detail   KEYCLOAK-4328',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
  },
})

export const getRealmRoute = createRoute({
  method: 'get',
  path: '/{realm}',
  tags: ['Realms Admin'],
  summary:
    'Get the top-level representation of the realm   It will not include nested information like User and Client representations.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: RealmRepresentationSchema } },
    },
  },
})

export const putRealmRoute = createRoute({
  method: 'put',
  path: '/{realm}',
  tags: ['Realms Admin'],
  summary:
    'Update the top-level information of the realm   Any user, roles or client information in the representation  will be ignored.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RealmRepresentationSchema } },
      required: true,
    },
  },
  responses: { '2XX': { description: 'success' } },
})

export const deleteRealmRoute = createRoute({
  method: 'delete',
  path: '/{realm}',
  tags: ['Realms Admin'],
  summary: 'Delete the realm',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmAdminEventsRoute = createRoute({
  method: 'get',
  path: '/{realm}/admin-events',
  tags: ['Realms Admin'],
  summary:
    'Get admin events   Returns all admin events, or filters events based on URL query parameters listed here',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      authClient: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'authClient',
            schema: { type: 'string' },
            style: 'form',
            required: false,
          },
        }),
      authIpAddress: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'authIpAddress',
            schema: { type: 'string' },
            style: 'form',
            required: false,
          },
        }),
      authRealm: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'authRealm',
            schema: { type: 'string' },
            style: 'form',
            required: false,
          },
        }),
      authUser: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'user id',
            in: 'query',
            name: 'authUser',
            schema: { type: 'string' },
            style: 'form',
            required: false,
          },
        }),
      dateFrom: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'dateFrom',
            schema: { type: 'string' },
            style: 'form',
            required: false,
          },
        }),
      dateTo: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'dateTo',
            schema: { type: 'string' },
            style: 'form',
            required: false,
          },
        }),
      first: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'first',
            schema: { format: 'int32', type: 'integer' },
            style: 'form',
            required: false,
          },
        }),
      max: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum results size (defaults to 100)',
            in: 'query',
            name: 'max',
            schema: { format: 'int32', type: 'integer' },
            style: 'form',
            required: false,
          },
        }),
      operationTypes: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'operationTypes',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      resourcePath: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'resourcePath',
            schema: { type: 'string' },
            style: 'form',
            required: false,
          },
        }),
      resourceTypes: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'resourceTypes',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(AdminEventRepresentationSchema) } },
    },
  },
})

export const deleteRealmAdminEventsRoute = createRoute({
  method: 'delete',
  path: '/{realm}/admin-events',
  tags: ['Realms Admin'],
  summary: 'Delete all admin events',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { '2XX': { description: 'success' } },
})

export const deleteRealmAttackDetectionBruteForceUsersRoute = createRoute({
  method: 'delete',
  path: '/{realm}/attack-detection/brute-force/users',
  tags: ['Attack Detection'],
  summary:
    'Clear any user login failures for all users   This can release temporary disabled users',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmAttackDetectionBruteForceUsersUserIdRoute = createRoute({
  method: 'get',
  path: '/{realm}/attack-detection/brute-force/users/{userId}',
  tags: ['Attack Detection'],
  summary: 'Get status of a username in brute force detection',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      userId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
  },
})

export const deleteRealmAttackDetectionBruteForceUsersUserIdRoute = createRoute({
  method: 'delete',
  path: '/{realm}/attack-detection/brute-force/users/{userId}',
  tags: ['Attack Detection'],
  summary: 'Clear any user login failures for the user   This can release temporary disabled user',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      userId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmAuthenticationAuthenticatorProvidersRoute = createRoute({
  method: 'get',
  path: '/{realm}/authentication/authenticator-providers',
  tags: ['Authentication Management'],
  summary: 'Get authenticator providers   Returns a list of authenticator providers.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(z.looseObject({})) } },
    },
  },
})

export const getRealmAuthenticationClientAuthenticatorProvidersRoute = createRoute({
  method: 'get',
  path: '/{realm}/authentication/client-authenticator-providers',
  tags: ['Authentication Management'],
  summary: 'Get client authenticator providers   Returns a list of client authenticator providers.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(z.looseObject({})) } },
    },
  },
})

export const getRealmAuthenticationConfigDescriptionProviderIdRoute = createRoute({
  method: 'get',
  path: '/{realm}/authentication/config-description/{providerId}',
  tags: ['Authentication Management'],
  summary: 'Get authenticator provider’s configuration description',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      providerId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'providerId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: AuthenticatorConfigInfoRepresentationSchema } },
    },
  },
})

export const getRealmAuthenticationConfigIdRoute = createRoute({
  method: 'get',
  path: '/{realm}/authentication/config/{id}',
  tags: ['Authentication Management'],
  summary: 'Get authenticator configuration',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Configuration id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: AuthenticatorConfigRepresentationSchema } },
    },
  },
})

export const putRealmAuthenticationConfigIdRoute = createRoute({
  method: 'put',
  path: '/{realm}/authentication/config/{id}',
  tags: ['Authentication Management'],
  summary: 'Update authenticator configuration',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Configuration id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: 'JSON describing new state of authenticator configuration',
      content: { 'application/json': { schema: AuthenticatorConfigRepresentationSchema } },
      required: true,
    },
  },
  responses: { '2XX': { description: 'success' } },
})

export const deleteRealmAuthenticationConfigIdRoute = createRoute({
  method: 'delete',
  path: '/{realm}/authentication/config/{id}',
  tags: ['Authentication Management'],
  summary: 'Delete authenticator configuration',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Configuration id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { '2XX': { description: 'success' } },
})

export const postRealmAuthenticationExecutionsRoute = createRoute({
  method: 'post',
  path: '/{realm}/authentication/executions',
  tags: ['Authentication Management'],
  summary: 'Add new authentication execution',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: 'JSON model describing authentication execution',
      content: { 'application/json': { schema: AuthenticationExecutionRepresentationSchema } },
      required: true,
    },
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmAuthenticationExecutionsExecutionIdRoute = createRoute({
  method: 'get',
  path: '/{realm}/authentication/executions/{executionId}',
  tags: ['Authentication Management'],
  summary: 'Get Single Execution',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      executionId: z
        .string()
        .openapi({
          param: {
            description: 'Execution id',
            in: 'path',
            name: 'executionId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { '2XX': { description: 'success' } },
})

export const deleteRealmAuthenticationExecutionsExecutionIdRoute = createRoute({
  method: 'delete',
  path: '/{realm}/authentication/executions/{executionId}',
  tags: ['Authentication Management'],
  summary: 'Delete execution',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      executionId: z
        .string()
        .openapi({
          param: {
            description: 'Execution id',
            in: 'path',
            name: 'executionId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { '2XX': { description: 'success' } },
})

export const postRealmAuthenticationExecutionsExecutionIdConfigRoute = createRoute({
  method: 'post',
  path: '/{realm}/authentication/executions/{executionId}/config',
  tags: ['Authentication Management'],
  summary: 'Update execution with new configuration',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      executionId: z
        .string()
        .openapi({
          param: {
            description: 'Execution id',
            in: 'path',
            name: 'executionId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: 'JSON with new configuration',
      content: { 'application/json': { schema: AuthenticatorConfigRepresentationSchema } },
      required: true,
    },
  },
  responses: { '2XX': { description: 'success' } },
})

export const postRealmAuthenticationExecutionsExecutionIdLowerPriorityRoute = createRoute({
  method: 'post',
  path: '/{realm}/authentication/executions/{executionId}/lower-priority',
  tags: ['Authentication Management'],
  summary: 'Lower execution’s priority',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      executionId: z
        .string()
        .openapi({
          param: {
            description: 'Execution id',
            in: 'path',
            name: 'executionId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { '2XX': { description: 'success' } },
})

export const postRealmAuthenticationExecutionsExecutionIdRaisePriorityRoute = createRoute({
  method: 'post',
  path: '/{realm}/authentication/executions/{executionId}/raise-priority',
  tags: ['Authentication Management'],
  summary: 'Raise execution’s priority',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      executionId: z
        .string()
        .openapi({
          param: {
            description: 'Execution id',
            in: 'path',
            name: 'executionId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmAuthenticationFlowsRoute = createRoute({
  method: 'get',
  path: '/{realm}/authentication/flows',
  tags: ['Authentication Management'],
  summary: 'Get authentication flows   Returns a list of authentication flows.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(AuthenticationFlowRepresentationSchema) } },
    },
  },
})

export const postRealmAuthenticationFlowsRoute = createRoute({
  method: 'post',
  path: '/{realm}/authentication/flows',
  tags: ['Authentication Management'],
  summary: 'Create a new authentication flow',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: 'Authentication flow representation',
      content: { 'application/json': { schema: AuthenticationFlowRepresentationSchema } },
      required: true,
    },
  },
  responses: { '2XX': { description: 'success' } },
})

export const postRealmAuthenticationFlowsFlowAliasCopyRoute = createRoute({
  method: 'post',
  path: '/{realm}/authentication/flows/{flowAlias}/copy',
  tags: ['Authentication Management'],
  summary:
    "Copy existing authentication flow under a new name   The new name is given as 'newName' attribute of the passed JSON object",
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      flowAlias: z
        .string()
        .openapi({
          param: {
            description: 'Name of the existing authentication flow',
            in: 'path',
            name: 'flowAlias',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: "JSON containing 'newName' attribute",
      content: { 'application/json': { schema: z.looseObject({}) } },
      required: true,
    },
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmAuthenticationFlowsFlowAliasExecutionsRoute = createRoute({
  method: 'get',
  path: '/{realm}/authentication/flows/{flowAlias}/executions',
  tags: ['Authentication Management'],
  summary: 'Get authentication executions for a flow',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      flowAlias: z
        .string()
        .openapi({
          param: {
            description: 'Flow alias',
            in: 'path',
            name: 'flowAlias',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { '2XX': { description: 'success' } },
})

export const putRealmAuthenticationFlowsFlowAliasExecutionsRoute = createRoute({
  method: 'put',
  path: '/{realm}/authentication/flows/{flowAlias}/executions',
  tags: ['Authentication Management'],
  summary: 'Update authentication executions of a flow',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      flowAlias: z
        .string()
        .openapi({
          param: {
            description: 'Flow alias',
            in: 'path',
            name: 'flowAlias',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AuthenticationExecutionInfoRepresentationSchema } },
      required: true,
    },
  },
  responses: { '2XX': { description: 'success' } },
})

export const postRealmAuthenticationFlowsFlowAliasExecutionsExecutionRoute = createRoute({
  method: 'post',
  path: '/{realm}/authentication/flows/{flowAlias}/executions/execution',
  tags: ['Authentication Management'],
  summary: 'Add new authentication execution to a flow',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      flowAlias: z
        .string()
        .openapi({
          param: {
            description: 'Alias of parent flow',
            in: 'path',
            name: 'flowAlias',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: "New execution JSON data containing 'provider' attribute",
      content: { 'application/json': { schema: z.looseObject({}) } },
      required: true,
    },
  },
  responses: { '2XX': { description: 'success' } },
})

export const postRealmAuthenticationFlowsFlowAliasExecutionsFlowRoute = createRoute({
  method: 'post',
  path: '/{realm}/authentication/flows/{flowAlias}/executions/flow',
  tags: ['Authentication Management'],
  summary: 'Add new flow with new execution to existing flow',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      flowAlias: z
        .string()
        .openapi({
          param: {
            description: 'Alias of parent authentication flow',
            in: 'path',
            name: 'flowAlias',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description:
        "New authentication flow / execution JSON data containing 'alias', 'type', 'provider', and 'description' attributes",
      content: { 'application/json': { schema: z.looseObject({}) } },
      required: true,
    },
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmAuthenticationFlowsIdRoute = createRoute({
  method: 'get',
  path: '/{realm}/authentication/flows/{id}',
  tags: ['Authentication Management'],
  summary: 'Get authentication flow for id',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Flow id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: AuthenticationFlowRepresentationSchema } },
    },
  },
})

export const putRealmAuthenticationFlowsIdRoute = createRoute({
  method: 'put',
  path: '/{realm}/authentication/flows/{id}',
  tags: ['Authentication Management'],
  summary: 'Update an authentication flow',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Flow id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: 'Authentication flow representation',
      content: { 'application/json': { schema: AuthenticationFlowRepresentationSchema } },
      required: true,
    },
  },
  responses: { '2XX': { description: 'success' } },
})

export const deleteRealmAuthenticationFlowsIdRoute = createRoute({
  method: 'delete',
  path: '/{realm}/authentication/flows/{id}',
  tags: ['Authentication Management'],
  summary: 'Delete an authentication flow',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Flow id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmAuthenticationFormActionProvidersRoute = createRoute({
  method: 'get',
  path: '/{realm}/authentication/form-action-providers',
  tags: ['Authentication Management'],
  summary: 'Get form action providers   Returns a list of form action providers.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(z.looseObject({})) } },
    },
  },
})

export const getRealmAuthenticationFormProvidersRoute = createRoute({
  method: 'get',
  path: '/{realm}/authentication/form-providers',
  tags: ['Authentication Management'],
  summary: 'Get form providers   Returns a list of form providers.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(z.looseObject({})) } },
    },
  },
})

export const getRealmAuthenticationPerClientConfigDescriptionRoute = createRoute({
  method: 'get',
  path: '/{realm}/authentication/per-client-config-description',
  tags: ['Authentication Management'],
  summary: 'Get configuration descriptions for all clients',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
  },
})

export const postRealmAuthenticationRegisterRequiredActionRoute = createRoute({
  method: 'post',
  path: '/{realm}/authentication/register-required-action',
  tags: ['Authentication Management'],
  summary: 'Register a new required actions',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: "JSON containing 'providerId', and 'name' attributes.",
      content: { 'application/json': { schema: z.looseObject({}) } },
      required: true,
    },
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmAuthenticationRequiredActionsRoute = createRoute({
  method: 'get',
  path: '/{realm}/authentication/required-actions',
  tags: ['Authentication Management'],
  summary: 'Get required actions   Returns a list of required actions.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: {
        'application/json': { schema: z.array(RequiredActionProviderRepresentationSchema) },
      },
    },
  },
})

export const getRealmAuthenticationRequiredActionsAliasRoute = createRoute({
  method: 'get',
  path: '/{realm}/authentication/required-actions/{alias}',
  tags: ['Authentication Management'],
  summary: 'Get required action for alias',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      alias: z
        .string()
        .openapi({
          param: {
            description: 'Alias of required action',
            in: 'path',
            name: 'alias',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: RequiredActionProviderRepresentationSchema } },
    },
  },
})

export const putRealmAuthenticationRequiredActionsAliasRoute = createRoute({
  method: 'put',
  path: '/{realm}/authentication/required-actions/{alias}',
  tags: ['Authentication Management'],
  summary: 'Update required action',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      alias: z
        .string()
        .openapi({
          param: {
            description: 'Alias of required action',
            in: 'path',
            name: 'alias',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: 'JSON describing new state of required action',
      content: { 'application/json': { schema: RequiredActionProviderRepresentationSchema } },
      required: true,
    },
  },
  responses: { '2XX': { description: 'success' } },
})

export const deleteRealmAuthenticationRequiredActionsAliasRoute = createRoute({
  method: 'delete',
  path: '/{realm}/authentication/required-actions/{alias}',
  tags: ['Authentication Management'],
  summary: 'Delete required action',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      alias: z
        .string()
        .openapi({
          param: {
            description: 'Alias of required action',
            in: 'path',
            name: 'alias',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { '2XX': { description: 'success' } },
})

export const postRealmAuthenticationRequiredActionsAliasLowerPriorityRoute = createRoute({
  method: 'post',
  path: '/{realm}/authentication/required-actions/{alias}/lower-priority',
  tags: ['Authentication Management'],
  summary: 'Lower required action’s priority',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      alias: z
        .string()
        .openapi({
          param: {
            description: 'Alias of required action',
            in: 'path',
            name: 'alias',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { '2XX': { description: 'success' } },
})

export const postRealmAuthenticationRequiredActionsAliasRaisePriorityRoute = createRoute({
  method: 'post',
  path: '/{realm}/authentication/required-actions/{alias}/raise-priority',
  tags: ['Authentication Management'],
  summary: 'Raise required action’s priority',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      alias: z
        .string()
        .openapi({
          param: {
            description: 'Alias of required action',
            in: 'path',
            name: 'alias',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmAuthenticationUnregisteredRequiredActionsRoute = createRoute({
  method: 'get',
  path: '/{realm}/authentication/unregistered-required-actions',
  tags: ['Authentication Management'],
  summary: 'Get unregistered required actions   Returns a list of unregistered required actions.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(z.looseObject({})) } },
    },
  },
})

export const postRealmClearKeysCacheRoute = createRoute({
  method: 'post',
  path: '/{realm}/clear-keys-cache',
  tags: ['Realms Admin'],
  summary: 'Clear cache of external public keys (Public keys of clients or Identity providers)',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { '2XX': { description: 'success' } },
})

export const postRealmClearRealmCacheRoute = createRoute({
  method: 'post',
  path: '/{realm}/clear-realm-cache',
  tags: ['Realms Admin'],
  summary: 'Clear realm cache',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { '2XX': { description: 'success' } },
})

export const postRealmClearUserCacheRoute = createRoute({
  method: 'post',
  path: '/{realm}/clear-user-cache',
  tags: ['Realms Admin'],
  summary: 'Clear user cache',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { '2XX': { description: 'success' } },
})

export const postRealmClientDescriptionConverterRoute = createRoute({
  method: 'post',
  path: '/{realm}/client-description-converter',
  tags: ['Realms Admin'],
  summary: 'Base path for importing clients under this realm.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: { content: { 'text/plain': { schema: z.string() } }, required: true },
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: ClientRepresentationSchema } },
    },
  },
})

export const getRealmClientRegistrationPolicyProvidersRoute = createRoute({
  method: 'get',
  path: '/{realm}/client-registration-policy/providers',
  tags: ['Client Registration Policy'],
  summary: 'Base path for retrieve providers with the configProperties properly filled',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(ComponentTypeRepresentationSchema) } },
    },
  },
})

export const getRealmClientScopesRoute = createRoute({
  method: 'get',
  path: '/{realm}/client-scopes',
  tags: ['Client Scopes'],
  summary:
    'Get client scopes belonging to the realm   Returns a list of client scopes belonging to the realm',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(ClientScopeRepresentationSchema) } },
    },
  },
})

export const postRealmClientScopesRoute = createRoute({
  method: 'post',
  path: '/{realm}/client-scopes',
  tags: ['Client Scopes'],
  summary: 'Create a new client scope   Client Scope’s name must be unique!',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ClientScopeRepresentationSchema } },
      required: true,
    },
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmClientScopesId1ProtocolMappersModelsId2Route = createRoute({
  method: 'get',
  path: '/{realm}/client-scopes/{id1}/protocol-mappers/models/{id2}',
  tags: ['Protocol Mappers'],
  summary: 'Get mapper by id',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id1: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id1',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id2: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id2',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: ProtocolMapperRepresentationSchema } },
    },
  },
})

export const putRealmClientScopesId1ProtocolMappersModelsId2Route = createRoute({
  method: 'put',
  path: '/{realm}/client-scopes/{id1}/protocol-mappers/models/{id2}',
  tags: ['Protocol Mappers'],
  summary: 'Update the mapper',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id1: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id1',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id2: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id2',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ProtocolMapperRepresentationSchema } },
      required: true,
    },
  },
  responses: { '2XX': { description: 'success' } },
})

export const deleteRealmClientScopesId1ProtocolMappersModelsId2Route = createRoute({
  method: 'delete',
  path: '/{realm}/client-scopes/{id1}/protocol-mappers/models/{id2}',
  tags: ['Protocol Mappers'],
  summary: 'Delete the mapper',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id1: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id1',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id2: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id2',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmClientScopesIdRoute = createRoute({
  method: 'get',
  path: '/{realm}/client-scopes/{id}',
  tags: ['Client Scopes'],
  summary: 'Get representation of the client scope',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client scope (not name)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: ClientScopeRepresentationSchema } },
    },
  },
})

export const putRealmClientScopesIdRoute = createRoute({
  method: 'put',
  path: '/{realm}/client-scopes/{id}',
  tags: ['Client Scopes'],
  summary: 'Update the client scope',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client scope (not name)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ClientScopeRepresentationSchema } },
      required: true,
    },
  },
  responses: { '2XX': { description: 'success' } },
})

export const deleteRealmClientScopesIdRoute = createRoute({
  method: 'delete',
  path: '/{realm}/client-scopes/{id}',
  tags: ['Client Scopes'],
  summary: 'Delete the client scope',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client scope (not name)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { '2XX': { description: 'success' } },
})

export const postRealmClientScopesIdProtocolMappersAddModelsRoute = createRoute({
  method: 'post',
  path: '/{realm}/client-scopes/{id}/protocol-mappers/add-models',
  tags: ['Protocol Mappers'],
  summary: 'Create multiple mappers',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client scope (not name)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: z.array(ProtocolMapperRepresentationSchema) } },
      required: true,
    },
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmClientScopesIdProtocolMappersModelsRoute = createRoute({
  method: 'get',
  path: '/{realm}/client-scopes/{id}/protocol-mappers/models',
  tags: ['Protocol Mappers'],
  summary: 'Get mappers',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client scope (not name)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(ProtocolMapperRepresentationSchema) } },
    },
  },
})

export const postRealmClientScopesIdProtocolMappersModelsRoute = createRoute({
  method: 'post',
  path: '/{realm}/client-scopes/{id}/protocol-mappers/models',
  tags: ['Protocol Mappers'],
  summary: 'Create a mapper',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client scope (not name)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ProtocolMapperRepresentationSchema } },
      required: true,
    },
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmClientScopesIdProtocolMappersProtocolProtocolRoute = createRoute({
  method: 'get',
  path: '/{realm}/client-scopes/{id}/protocol-mappers/protocol/{protocol}',
  tags: ['Protocol Mappers'],
  summary: 'Get mappers by name for a specific protocol',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client scope (not name)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      protocol: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'protocol',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(ProtocolMapperRepresentationSchema) } },
    },
  },
})

export const getRealmClientScopesIdScopeMappingsRoute = createRoute({
  method: 'get',
  path: '/{realm}/client-scopes/{id}/scope-mappings',
  tags: ['Scope Mappings'],
  summary: 'Get all scope mappings for the client',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client scope (not name)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: MappingsRepresentationSchema } },
    },
  },
})

export const getRealmClientScopesIdScopeMappingsClientsClientRoute = createRoute({
  method: 'get',
  path: '/{realm}/client-scopes/{id}/scope-mappings/clients/{client}',
  tags: ['Scope Mappings'],
  summary: 'Get the roles associated with a client’s scope   Returns roles for the client.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client scope (not name)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      client: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'client',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
    },
  },
})

export const postRealmClientScopesIdScopeMappingsClientsClientRoute = createRoute({
  method: 'post',
  path: '/{realm}/client-scopes/{id}/scope-mappings/clients/{client}',
  tags: ['Scope Mappings'],
  summary: 'Add client-level roles to the client’s scope',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client scope (not name)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      client: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'client',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
      required: true,
    },
  },
  responses: { '2XX': { description: 'success' } },
})

export const deleteRealmClientScopesIdScopeMappingsClientsClientRoute = createRoute({
  method: 'delete',
  path: '/{realm}/client-scopes/{id}/scope-mappings/clients/{client}',
  tags: ['Scope Mappings'],
  summary: 'Remove client-level roles from the client’s scope.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client scope (not name)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      client: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'client',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
      required: true,
    },
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmClientScopesIdScopeMappingsClientsClientAvailableRoute = createRoute({
  method: 'get',
  path: '/{realm}/client-scopes/{id}/scope-mappings/clients/{client}/available',
  tags: ['Scope Mappings'],
  summary:
    'The available client-level roles   Returns the roles for the client that can be associated with the client’s scope',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client scope (not name)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      client: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'client',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
    },
  },
})

export const getRealmClientScopesIdScopeMappingsClientsClientCompositeRoute = createRoute({
  method: 'get',
  path: '/{realm}/client-scopes/{id}/scope-mappings/clients/{client}/composite',
  tags: ['Scope Mappings'],
  summary:
    'Get effective client roles   Returns the roles for the client that are associated with the client’s scope.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client scope (not name)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      client: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'client',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
    },
  },
})

export const getRealmClientScopesIdScopeMappingsRealmRoute = createRoute({
  method: 'get',
  path: '/{realm}/client-scopes/{id}/scope-mappings/realm',
  tags: ['Scope Mappings'],
  summary: 'Get realm-level roles associated with the client’s scope',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client scope (not name)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
    },
  },
})

export const postRealmClientScopesIdScopeMappingsRealmRoute = createRoute({
  method: 'post',
  path: '/{realm}/client-scopes/{id}/scope-mappings/realm',
  tags: ['Scope Mappings'],
  summary: 'Add a set of realm-level roles to the client’s scope',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client scope (not name)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
      required: true,
    },
  },
  responses: { '2XX': { description: 'success' } },
})

export const deleteRealmClientScopesIdScopeMappingsRealmRoute = createRoute({
  method: 'delete',
  path: '/{realm}/client-scopes/{id}/scope-mappings/realm',
  tags: ['Scope Mappings'],
  summary: 'Remove a set of realm-level roles from the client’s scope',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client scope (not name)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
      required: true,
    },
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmClientScopesIdScopeMappingsRealmAvailableRoute = createRoute({
  method: 'get',
  path: '/{realm}/client-scopes/{id}/scope-mappings/realm/available',
  tags: ['Scope Mappings'],
  summary: 'Get realm-level roles that are available to attach to this client’s scope',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client scope (not name)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
    },
  },
})

export const getRealmClientScopesIdScopeMappingsRealmCompositeRoute = createRoute({
  method: 'get',
  path: '/{realm}/client-scopes/{id}/scope-mappings/realm/composite',
  tags: ['Scope Mappings'],
  summary:
    'Get effective realm-level roles associated with the client’s scope   What this does is recurse  any composite roles associated with the client’s scope and adds the roles to this lists.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client scope (not name)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
    },
  },
})

export const getRealmClientSessionStatsRoute = createRoute({
  method: 'get',
  path: '/{realm}/client-session-stats',
  tags: ['Realms Admin'],
  summary: 'Get client session stats   Returns a JSON map.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(z.looseObject({})) } },
    },
  },
})

export const getRealmClientsRoute = createRoute({
  method: 'get',
  path: '/{realm}/clients',
  tags: ['Clients'],
  summary: 'Get clients belonging to the realm   Returns a list of clients belonging to the realm',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      clientId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'filter by clientId',
            in: 'query',
            name: 'clientId',
            schema: { type: 'string' },
            style: 'form',
            required: false,
          },
        }),
      first: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'the first result',
            in: 'query',
            name: 'first',
            schema: { format: 'int32', type: 'integer' },
            style: 'form',
            required: false,
          },
        }),
      max: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'the max results to return',
            in: 'query',
            name: 'max',
            schema: { format: 'int32', type: 'integer' },
            style: 'form',
            required: false,
          },
        }),
      search: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'whether this is a search query or a getClientById query',
            in: 'query',
            name: 'search',
            schema: { type: 'boolean' },
            style: 'form',
            required: false,
          },
        }),
      viewableOnly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'filter clients that cannot be viewed in full by admin',
            in: 'query',
            name: 'viewableOnly',
            schema: { type: 'boolean' },
            style: 'form',
            required: false,
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(ClientRepresentationSchema) } },
    },
  },
})

export const postRealmClientsRoute = createRoute({
  method: 'post',
  path: '/{realm}/clients',
  tags: ['Clients'],
  summary: 'Create a new client   Client’s client_id must be unique!',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ClientRepresentationSchema } },
      required: true,
    },
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmClientsInitialAccessRoute = createRoute({
  method: 'get',
  path: '/{realm}/clients-initial-access',
  tags: ['Client Initial Access'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(ClientInitialAccessPresentationSchema) } },
    },
  },
})

export const postRealmClientsInitialAccessRoute = createRoute({
  method: 'post',
  path: '/{realm}/clients-initial-access',
  tags: ['Client Initial Access'],
  summary: 'Create a new initial access token.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ClientInitialAccessCreatePresentationSchema } },
      required: true,
    },
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: ClientInitialAccessPresentationSchema } },
    },
  },
})

export const deleteRealmClientsInitialAccessIdRoute = createRoute({
  method: 'delete',
  path: '/{realm}/clients-initial-access/{id}',
  tags: ['Client Initial Access'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmClientsId1ProtocolMappersModelsId2Route = createRoute({
  method: 'get',
  path: '/{realm}/clients/{id1}/protocol-mappers/models/{id2}',
  tags: ['Protocol Mappers'],
  summary: 'Get mapper by id',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id1: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id1',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id2: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id2',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: ProtocolMapperRepresentationSchema } },
    },
  },
})

export const putRealmClientsId1ProtocolMappersModelsId2Route = createRoute({
  method: 'put',
  path: '/{realm}/clients/{id1}/protocol-mappers/models/{id2}',
  tags: ['Protocol Mappers'],
  summary: 'Update the mapper',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id1: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id1',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id2: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id2',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ProtocolMapperRepresentationSchema } },
      required: true,
    },
  },
  responses: { '2XX': { description: 'success' } },
})

export const deleteRealmClientsId1ProtocolMappersModelsId2Route = createRoute({
  method: 'delete',
  path: '/{realm}/clients/{id1}/protocol-mappers/models/{id2}',
  tags: ['Protocol Mappers'],
  summary: 'Delete the mapper',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id1: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id1',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id2: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id2',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmClientsIdRoute = createRoute({
  method: 'get',
  path: '/{realm}/clients/{id}',
  tags: ['Clients'],
  summary: 'Get representation of the client',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client (not client-id)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: ClientRepresentationSchema } },
    },
  },
})

export const putRealmClientsIdRoute = createRoute({
  method: 'put',
  path: '/{realm}/clients/{id}',
  tags: ['Clients'],
  summary: 'Update the client',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client (not client-id)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ClientRepresentationSchema } },
      required: true,
    },
  },
  responses: { '2XX': { description: 'success' } },
})

export const deleteRealmClientsIdRoute = createRoute({
  method: 'delete',
  path: '/{realm}/clients/{id}',
  tags: ['Clients'],
  summary: 'Delete the client',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client (not client-id)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmClientsIdCertificatesAttrRoute = createRoute({
  method: 'get',
  path: '/{realm}/clients/{id}/certificates/{attr}',
  tags: ['Client Attribute Certificate'],
  summary: 'Get key info',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client (not client-id)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      attr: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'attr',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: CertificateRepresentationSchema } },
    },
  },
})

export const postRealmClientsIdCertificatesAttrDownloadRoute = createRoute({
  method: 'post',
  path: '/{realm}/clients/{id}/certificates/{attr}/download',
  tags: ['Client Attribute Certificate'],
  summary: 'Get a keystore file for the client, containing private key and public certificate',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client (not client-id)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      attr: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'attr',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: 'Keystore configuration as JSON',
      content: { 'application/json': { schema: KeyStoreConfigSchema } },
      required: true,
    },
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/octet-stream': { schema: z.string() } },
    },
  },
})

export const postRealmClientsIdCertificatesAttrGenerateRoute = createRoute({
  method: 'post',
  path: '/{realm}/clients/{id}/certificates/{attr}/generate',
  tags: ['Client Attribute Certificate'],
  summary: 'Generate a new certificate with new key pair',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client (not client-id)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      attr: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'attr',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: CertificateRepresentationSchema } },
    },
  },
})

export const postRealmClientsIdCertificatesAttrGenerateAndDownloadRoute = createRoute({
  method: 'post',
  path: '/{realm}/clients/{id}/certificates/{attr}/generate-and-download',
  tags: ['Client Attribute Certificate'],
  summary:
    'Generate a new keypair and certificate, and get the private key file   Generates a keypair and certificate and serves the private key in a specified keystore format.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client (not client-id)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      attr: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'attr',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: 'Keystore configuration as JSON',
      content: { 'application/json': { schema: KeyStoreConfigSchema } },
      required: true,
    },
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/octet-stream': { schema: z.string() } },
    },
  },
})

export const postRealmClientsIdCertificatesAttrUploadRoute = createRoute({
  method: 'post',
  path: '/{realm}/clients/{id}/certificates/{attr}/upload',
  tags: ['Client Attribute Certificate'],
  summary: 'Upload certificate and eventually private key',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client (not client-id)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      attr: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'attr',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: CertificateRepresentationSchema } },
    },
  },
})

export const postRealmClientsIdCertificatesAttrUploadCertificateRoute = createRoute({
  method: 'post',
  path: '/{realm}/clients/{id}/certificates/{attr}/upload-certificate',
  tags: ['Client Attribute Certificate'],
  summary: 'Upload only certificate, not private key',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client (not client-id)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      attr: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'attr',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: CertificateRepresentationSchema } },
    },
  },
})

export const getRealmClientsIdClientSecretRoute = createRoute({
  method: 'get',
  path: '/{realm}/clients/{id}/client-secret',
  tags: ['Clients'],
  summary: 'Get the client secret',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client (not client-id)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: CredentialRepresentationSchema } },
    },
  },
})

export const postRealmClientsIdClientSecretRoute = createRoute({
  method: 'post',
  path: '/{realm}/clients/{id}/client-secret',
  tags: ['Clients'],
  summary: 'Generate a new secret for the client',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client (not client-id)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: CredentialRepresentationSchema } },
    },
  },
})

export const getRealmClientsIdDefaultClientScopesRoute = createRoute({
  method: 'get',
  path: '/{realm}/clients/{id}/default-client-scopes',
  tags: ['Clients'],
  summary: 'Get default client scopes.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client (not client-id)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(ClientScopeRepresentationSchema) } },
    },
  },
})

export const putRealmClientsIdDefaultClientScopesClientScopeIdRoute = createRoute({
  method: 'put',
  path: '/{realm}/clients/{id}/default-client-scopes/{clientScopeId}',
  tags: ['Clients'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client (not client-id)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      clientScopeId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'clientScopeId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { '2XX': { description: 'success' } },
})

export const deleteRealmClientsIdDefaultClientScopesClientScopeIdRoute = createRoute({
  method: 'delete',
  path: '/{realm}/clients/{id}/default-client-scopes/{clientScopeId}',
  tags: ['Clients'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client (not client-id)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      clientScopeId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'clientScopeId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmClientsIdEvaluateScopesGenerateExampleAccessTokenRoute = createRoute({
  method: 'get',
  path: '/{realm}/clients/{id}/evaluate-scopes/generate-example-access-token',
  tags: ['Clients'],
  summary: 'Create JSON with payload of example access token',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client (not client-id)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      scope: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'scope',
            schema: { type: 'string' },
            style: 'form',
            required: false,
          },
        }),
      userId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'userId',
            schema: { type: 'string' },
            style: 'form',
            required: false,
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: AccessTokenSchema } },
    },
  },
})

export const getRealmClientsIdEvaluateScopesProtocolMappersRoute = createRoute({
  method: 'get',
  path: '/{realm}/clients/{id}/evaluate-scopes/protocol-mappers',
  tags: ['Clients'],
  summary:
    'Return list of all protocol mappers, which will be used when generating tokens issued for particular client.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client (not client-id)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      scope: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'scope',
            schema: { type: 'string' },
            style: 'form',
            required: false,
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: {
        'application/json': {
          schema: z.array(ClientScopeEvaluateResourceProtocolMapperEvaluationRepresentationSchema),
        },
      },
    },
  },
})

export const getRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedRoute = createRoute({
  method: 'get',
  path: '/{realm}/clients/{id}/evaluate-scopes/scope-mappings/{roleContainerId}/granted',
  tags: ['Clients'],
  summary:
    'Get effective scope mapping of all roles of particular role container, which this client is defacto allowed to have in the accessToken issued for him.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client (not client-id)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      roleContainerId: z
        .string()
        .openapi({
          param: {
            description: 'either realm name OR client UUID',
            in: 'path',
            name: 'roleContainerId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      scope: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'scope',
            schema: { type: 'string' },
            style: 'form',
            required: false,
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
    },
  },
})

export const getRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGrantedRoute =
  createRoute({
    method: 'get',
    path: '/{realm}/clients/{id}/evaluate-scopes/scope-mappings/{roleContainerId}/not-granted',
    tags: ['Clients'],
    summary:
      'Get roles, which this client doesn’t have scope for and can’t have them in the accessToken issued for him.',
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              description: 'realm name (not id!)',
              in: 'path',
              name: 'realm',
              required: true,
              schema: { type: 'string' },
              style: 'simple',
            },
          }),
        id: z
          .string()
          .openapi({
            param: {
              description: 'id of client (not client-id)',
              in: 'path',
              name: 'id',
              required: true,
              schema: { type: 'string' },
              style: 'simple',
            },
          }),
        roleContainerId: z
          .string()
          .openapi({
            param: {
              description: 'either realm name OR client UUID',
              in: 'path',
              name: 'roleContainerId',
              required: true,
              schema: { type: 'string' },
              style: 'simple',
            },
          }),
      }),
      query: z.object({
        scope: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'scope',
              schema: { type: 'string' },
              style: 'form',
              required: false,
            },
          }),
      }),
    },
    responses: {
      '2XX': {
        description: 'success',
        content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
      },
    },
  })

export const getRealmClientsIdInstallationProvidersProviderIdRoute = createRoute({
  method: 'get',
  path: '/{realm}/clients/{id}/installation/providers/{providerId}',
  tags: ['Clients'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client (not client-id)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      providerId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'providerId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmClientsIdManagementPermissionsRoute = createRoute({
  method: 'get',
  path: '/{realm}/clients/{id}/management/permissions',
  tags: ['Clients'],
  summary:
    'Return object stating whether client Authorization permissions have been initialized or not and a reference',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client (not client-id)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: ManagementPermissionReferenceSchema } },
    },
  },
})

export const putRealmClientsIdManagementPermissionsRoute = createRoute({
  method: 'put',
  path: '/{realm}/clients/{id}/management/permissions',
  tags: ['Clients'],
  summary:
    'Return object stating whether client Authorization permissions have been initialized or not and a reference',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client (not client-id)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ManagementPermissionReferenceSchema } },
      required: true,
    },
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: ManagementPermissionReferenceSchema } },
    },
  },
})

export const postRealmClientsIdNodesRoute = createRoute({
  method: 'post',
  path: '/{realm}/clients/{id}/nodes',
  tags: ['Clients'],
  summary:
    'Register a cluster node with the client   Manually register cluster node to this client - usually it’s not needed to call this directly as adapter should handle  by sending registration request to Keycloak',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client (not client-id)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: z.looseObject({}) } }, required: true },
  },
  responses: { '2XX': { description: 'success' } },
})

export const deleteRealmClientsIdNodesNodeRoute = createRoute({
  method: 'delete',
  path: '/{realm}/clients/{id}/nodes/{node}',
  tags: ['Clients'],
  summary: 'Unregister a cluster node from the client',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client (not client-id)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      node: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'node',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmClientsIdOfflineSessionCountRoute = createRoute({
  method: 'get',
  path: '/{realm}/clients/{id}/offline-session-count',
  tags: ['Clients'],
  summary:
    'Get application offline session count   Returns a number of offline user sessions associated with this client   {      "count": number  }',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client (not client-id)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
  },
})

export const getRealmClientsIdOfflineSessionsRoute = createRoute({
  method: 'get',
  path: '/{realm}/clients/{id}/offline-sessions',
  tags: ['Clients'],
  summary:
    'Get offline sessions for client   Returns a list of offline user sessions associated with this client',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client (not client-id)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      first: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Paging offset',
            in: 'query',
            name: 'first',
            schema: { format: 'int32', type: 'integer' },
            style: 'form',
            required: false,
          },
        }),
      max: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum results size (defaults to 100)',
            in: 'query',
            name: 'max',
            schema: { format: 'int32', type: 'integer' },
            style: 'form',
            required: false,
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(UserSessionRepresentationSchema) } },
    },
  },
})

export const getRealmClientsIdOptionalClientScopesRoute = createRoute({
  method: 'get',
  path: '/{realm}/clients/{id}/optional-client-scopes',
  tags: ['Clients'],
  summary: 'Get optional client scopes.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client (not client-id)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(ClientScopeRepresentationSchema) } },
    },
  },
})

export const putRealmClientsIdOptionalClientScopesClientScopeIdRoute = createRoute({
  method: 'put',
  path: '/{realm}/clients/{id}/optional-client-scopes/{clientScopeId}',
  tags: ['Clients'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client (not client-id)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      clientScopeId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'clientScopeId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { '2XX': { description: 'success' } },
})

export const deleteRealmClientsIdOptionalClientScopesClientScopeIdRoute = createRoute({
  method: 'delete',
  path: '/{realm}/clients/{id}/optional-client-scopes/{clientScopeId}',
  tags: ['Clients'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client (not client-id)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      clientScopeId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'clientScopeId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { '2XX': { description: 'success' } },
})

export const postRealmClientsIdProtocolMappersAddModelsRoute = createRoute({
  method: 'post',
  path: '/{realm}/clients/{id}/protocol-mappers/add-models',
  tags: ['Protocol Mappers'],
  summary: 'Create multiple mappers',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client (not client-id)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: z.array(ProtocolMapperRepresentationSchema) } },
      required: true,
    },
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmClientsIdProtocolMappersModelsRoute = createRoute({
  method: 'get',
  path: '/{realm}/clients/{id}/protocol-mappers/models',
  tags: ['Protocol Mappers'],
  summary: 'Get mappers',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client (not client-id)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(ProtocolMapperRepresentationSchema) } },
    },
  },
})

export const postRealmClientsIdProtocolMappersModelsRoute = createRoute({
  method: 'post',
  path: '/{realm}/clients/{id}/protocol-mappers/models',
  tags: ['Protocol Mappers'],
  summary: 'Create a mapper',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client (not client-id)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ProtocolMapperRepresentationSchema } },
      required: true,
    },
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmClientsIdProtocolMappersProtocolProtocolRoute = createRoute({
  method: 'get',
  path: '/{realm}/clients/{id}/protocol-mappers/protocol/{protocol}',
  tags: ['Protocol Mappers'],
  summary: 'Get mappers by name for a specific protocol',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client (not client-id)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      protocol: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'protocol',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(ProtocolMapperRepresentationSchema) } },
    },
  },
})

export const postRealmClientsIdPushRevocationRoute = createRoute({
  method: 'post',
  path: '/{realm}/clients/{id}/push-revocation',
  tags: ['Clients'],
  summary:
    'Push the client’s revocation policy to its admin URL   If the client has an admin URL, push revocation policy to it.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client (not client-id)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: GlobalRequestResultSchema } },
    },
  },
})

export const postRealmClientsIdRegistrationAccessTokenRoute = createRoute({
  method: 'post',
  path: '/{realm}/clients/{id}/registration-access-token',
  tags: ['Clients'],
  summary: 'Generate a new registration access token for the client',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client (not client-id)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: ClientRepresentationSchema } },
    },
  },
})

export const getRealmClientsIdRolesRoute = createRoute({
  method: 'get',
  path: '/{realm}/clients/{id}/roles',
  tags: ['Roles'],
  summary: 'Get all roles for the realm or client',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client (not client-id)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      briefRepresentation: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'briefRepresentation',
            schema: { type: 'boolean' },
            style: 'form',
            required: false,
          },
        }),
      first: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'first',
            schema: { format: 'int32', type: 'integer' },
            style: 'form',
            required: false,
          },
        }),
      max: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'max',
            schema: { format: 'int32', type: 'integer' },
            style: 'form',
            required: false,
          },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'search',
            schema: { type: 'string' },
            style: 'form',
            required: false,
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
    },
  },
})

export const postRealmClientsIdRolesRoute = createRoute({
  method: 'post',
  path: '/{realm}/clients/{id}/roles',
  tags: ['Roles'],
  summary: 'Create a new role for the realm or client',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client (not client-id)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RoleRepresentationSchema } }, required: true },
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmClientsIdRolesRoleNameRoute = createRoute({
  method: 'get',
  path: '/{realm}/clients/{id}/roles/{role-name}',
  tags: ['Roles'],
  summary: 'Get a role by name',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client (not client-id)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      'role-name': z
        .string()
        .openapi({
          param: {
            description: 'role’s name (not id!)',
            in: 'path',
            name: 'role-name',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: RoleRepresentationSchema } },
    },
  },
})

export const putRealmClientsIdRolesRoleNameRoute = createRoute({
  method: 'put',
  path: '/{realm}/clients/{id}/roles/{role-name}',
  tags: ['Roles'],
  summary: 'Update a role by name',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client (not client-id)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      'role-name': z
        .string()
        .openapi({
          param: {
            description: 'role’s name (not id!)',
            in: 'path',
            name: 'role-name',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RoleRepresentationSchema } }, required: true },
  },
  responses: { '2XX': { description: 'success' } },
})

export const deleteRealmClientsIdRolesRoleNameRoute = createRoute({
  method: 'delete',
  path: '/{realm}/clients/{id}/roles/{role-name}',
  tags: ['Roles'],
  summary: 'Delete a role by name',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client (not client-id)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      'role-name': z
        .string()
        .openapi({
          param: {
            description: 'role’s name (not id!)',
            in: 'path',
            name: 'role-name',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmClientsIdRolesRoleNameCompositesRoute = createRoute({
  method: 'get',
  path: '/{realm}/clients/{id}/roles/{role-name}/composites',
  tags: ['Roles'],
  summary: 'Get composites of the role',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client (not client-id)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      'role-name': z
        .string()
        .openapi({
          param: {
            description: 'role’s name (not id!)',
            in: 'path',
            name: 'role-name',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
    },
  },
})

export const postRealmClientsIdRolesRoleNameCompositesRoute = createRoute({
  method: 'post',
  path: '/{realm}/clients/{id}/roles/{role-name}/composites',
  tags: ['Roles'],
  summary: 'Add a composite to the role',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client (not client-id)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      'role-name': z
        .string()
        .openapi({
          param: {
            description: 'role’s name (not id!)',
            in: 'path',
            name: 'role-name',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
      required: true,
    },
  },
  responses: { '2XX': { description: 'success' } },
})

export const deleteRealmClientsIdRolesRoleNameCompositesRoute = createRoute({
  method: 'delete',
  path: '/{realm}/clients/{id}/roles/{role-name}/composites',
  tags: ['Roles'],
  summary: 'Remove roles from the role’s composite',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client (not client-id)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      'role-name': z
        .string()
        .openapi({
          param: {
            description: 'role’s name (not id!)',
            in: 'path',
            name: 'role-name',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: 'roles to remove',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
      required: true,
    },
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmClientsIdRolesRoleNameCompositesClientsClientRoute = createRoute({
  method: 'get',
  path: '/{realm}/clients/{id}/roles/{role-name}/composites/clients/{client}',
  tags: ['Roles'],
  summary: 'An app-level roles for the specified app for the role’s composite',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client (not client-id)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      'role-name': z
        .string()
        .openapi({
          param: {
            description: 'role’s name (not id!)',
            in: 'path',
            name: 'role-name',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      client: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'client',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
    },
  },
})

export const getRealmClientsIdRolesRoleNameCompositesRealmRoute = createRoute({
  method: 'get',
  path: '/{realm}/clients/{id}/roles/{role-name}/composites/realm',
  tags: ['Roles'],
  summary: 'Get realm-level roles of the role’s composite',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client (not client-id)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      'role-name': z
        .string()
        .openapi({
          param: {
            description: 'role’s name (not id!)',
            in: 'path',
            name: 'role-name',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
    },
  },
})

export const getRealmClientsIdRolesRoleNameGroupsRoute = createRoute({
  method: 'get',
  path: '/{realm}/clients/{id}/roles/{role-name}/groups',
  tags: ['Roles'],
  summary: 'Return List of Groups that have the specified role name',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client (not client-id)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      'role-name': z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'role-name',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      briefRepresentation: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'if false, return a full representation of the GroupRepresentation objects',
            in: 'query',
            name: 'briefRepresentation',
            schema: { type: 'boolean' },
            style: 'form',
            required: false,
          },
        }),
      first: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'first',
            schema: { format: 'int32', type: 'integer' },
            style: 'form',
            required: false,
          },
        }),
      max: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'max',
            schema: { format: 'int32', type: 'integer' },
            style: 'form',
            required: false,
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(GroupRepresentationSchema) } },
    },
  },
})

export const getRealmClientsIdRolesRoleNameManagementPermissionsRoute = createRoute({
  method: 'get',
  path: '/{realm}/clients/{id}/roles/{role-name}/management/permissions',
  tags: ['Roles'],
  summary:
    'Return object stating whether role Authoirzation permissions have been initialized or not and a reference',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client (not client-id)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      'role-name': z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'role-name',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: ManagementPermissionReferenceSchema } },
    },
  },
})

export const putRealmClientsIdRolesRoleNameManagementPermissionsRoute = createRoute({
  method: 'put',
  path: '/{realm}/clients/{id}/roles/{role-name}/management/permissions',
  tags: ['Roles'],
  summary:
    'Return object stating whether role Authoirzation permissions have been initialized or not and a reference',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client (not client-id)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      'role-name': z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'role-name',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ManagementPermissionReferenceSchema } },
      required: true,
    },
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: ManagementPermissionReferenceSchema } },
    },
  },
})

export const getRealmClientsIdRolesRoleNameUsersRoute = createRoute({
  method: 'get',
  path: '/{realm}/clients/{id}/roles/{role-name}/users',
  tags: ['Roles'],
  summary: 'Return List of Users that have the specified role name',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client (not client-id)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      'role-name': z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'role-name',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      first: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'first',
            schema: { format: 'int32', type: 'integer' },
            style: 'form',
            required: false,
          },
        }),
      max: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'max',
            schema: { format: 'int32', type: 'integer' },
            style: 'form',
            required: false,
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(UserRepresentationSchema) } },
    },
  },
})

export const getRealmClientsIdScopeMappingsRoute = createRoute({
  method: 'get',
  path: '/{realm}/clients/{id}/scope-mappings',
  tags: ['Scope Mappings'],
  summary: 'Get all scope mappings for the client',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client (not client-id)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: MappingsRepresentationSchema } },
    },
  },
})

export const getRealmClientsIdScopeMappingsClientsClientRoute = createRoute({
  method: 'get',
  path: '/{realm}/clients/{id}/scope-mappings/clients/{client}',
  tags: ['Scope Mappings'],
  summary: 'Get the roles associated with a client’s scope   Returns roles for the client.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client (not client-id)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      client: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'client',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
    },
  },
})

export const postRealmClientsIdScopeMappingsClientsClientRoute = createRoute({
  method: 'post',
  path: '/{realm}/clients/{id}/scope-mappings/clients/{client}',
  tags: ['Scope Mappings'],
  summary: 'Add client-level roles to the client’s scope',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client (not client-id)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      client: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'client',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
      required: true,
    },
  },
  responses: { '2XX': { description: 'success' } },
})

export const deleteRealmClientsIdScopeMappingsClientsClientRoute = createRoute({
  method: 'delete',
  path: '/{realm}/clients/{id}/scope-mappings/clients/{client}',
  tags: ['Scope Mappings'],
  summary: 'Remove client-level roles from the client’s scope.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client (not client-id)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      client: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'client',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
      required: true,
    },
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmClientsIdScopeMappingsClientsClientAvailableRoute = createRoute({
  method: 'get',
  path: '/{realm}/clients/{id}/scope-mappings/clients/{client}/available',
  tags: ['Scope Mappings'],
  summary:
    'The available client-level roles   Returns the roles for the client that can be associated with the client’s scope',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client (not client-id)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      client: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'client',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
    },
  },
})

export const getRealmClientsIdScopeMappingsClientsClientCompositeRoute = createRoute({
  method: 'get',
  path: '/{realm}/clients/{id}/scope-mappings/clients/{client}/composite',
  tags: ['Scope Mappings'],
  summary:
    'Get effective client roles   Returns the roles for the client that are associated with the client’s scope.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client (not client-id)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      client: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'client',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
    },
  },
})

export const getRealmClientsIdScopeMappingsRealmRoute = createRoute({
  method: 'get',
  path: '/{realm}/clients/{id}/scope-mappings/realm',
  tags: ['Scope Mappings'],
  summary: 'Get realm-level roles associated with the client’s scope',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client (not client-id)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
    },
  },
})

export const postRealmClientsIdScopeMappingsRealmRoute = createRoute({
  method: 'post',
  path: '/{realm}/clients/{id}/scope-mappings/realm',
  tags: ['Scope Mappings'],
  summary: 'Add a set of realm-level roles to the client’s scope',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client (not client-id)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
      required: true,
    },
  },
  responses: { '2XX': { description: 'success' } },
})

export const deleteRealmClientsIdScopeMappingsRealmRoute = createRoute({
  method: 'delete',
  path: '/{realm}/clients/{id}/scope-mappings/realm',
  tags: ['Scope Mappings'],
  summary: 'Remove a set of realm-level roles from the client’s scope',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client (not client-id)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
      required: true,
    },
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmClientsIdScopeMappingsRealmAvailableRoute = createRoute({
  method: 'get',
  path: '/{realm}/clients/{id}/scope-mappings/realm/available',
  tags: ['Scope Mappings'],
  summary: 'Get realm-level roles that are available to attach to this client’s scope',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client (not client-id)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
    },
  },
})

export const getRealmClientsIdScopeMappingsRealmCompositeRoute = createRoute({
  method: 'get',
  path: '/{realm}/clients/{id}/scope-mappings/realm/composite',
  tags: ['Scope Mappings'],
  summary:
    'Get effective realm-level roles associated with the client’s scope   What this does is recurse  any composite roles associated with the client’s scope and adds the roles to this lists.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client (not client-id)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
    },
  },
})

export const getRealmClientsIdServiceAccountUserRoute = createRoute({
  method: 'get',
  path: '/{realm}/clients/{id}/service-account-user',
  tags: ['Clients'],
  summary: 'Get a user dedicated to the service account',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client (not client-id)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: UserRepresentationSchema } },
    },
  },
})

export const getRealmClientsIdSessionCountRoute = createRoute({
  method: 'get',
  path: '/{realm}/clients/{id}/session-count',
  tags: ['Clients'],
  summary:
    'Get application session count   Returns a number of user sessions associated with this client   {      "count": number  }',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client (not client-id)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
  },
})

export const getRealmClientsIdTestNodesAvailableRoute = createRoute({
  method: 'get',
  path: '/{realm}/clients/{id}/test-nodes-available',
  tags: ['Clients'],
  summary:
    "Test if registered cluster nodes are available   Tests availability by sending 'ping' request to all cluster nodes.",
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client (not client-id)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: GlobalRequestResultSchema } },
    },
  },
})

export const getRealmClientsIdUserSessionsRoute = createRoute({
  method: 'get',
  path: '/{realm}/clients/{id}/user-sessions',
  tags: ['Clients'],
  summary:
    'Get user sessions for client   Returns a list of user sessions associated with this client',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'id of client (not client-id)',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      first: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Paging offset',
            in: 'query',
            name: 'first',
            schema: { format: 'int32', type: 'integer' },
            style: 'form',
            required: false,
          },
        }),
      max: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum results size (defaults to 100)',
            in: 'query',
            name: 'max',
            schema: { format: 'int32', type: 'integer' },
            style: 'form',
            required: false,
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(UserSessionRepresentationSchema) } },
    },
  },
})

export const getRealmComponentsRoute = createRoute({
  method: 'get',
  path: '/{realm}/components',
  tags: ['Component'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'name',
            schema: { type: 'string' },
            style: 'form',
            required: false,
          },
        }),
      parent: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'parent',
            schema: { type: 'string' },
            style: 'form',
            required: false,
          },
        }),
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'type',
            schema: { type: 'string' },
            style: 'form',
            required: false,
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(ComponentRepresentationSchema) } },
    },
  },
})

export const postRealmComponentsRoute = createRoute({
  method: 'post',
  path: '/{realm}/components',
  tags: ['Component'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ComponentRepresentationSchema } },
      required: true,
    },
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmComponentsIdRoute = createRoute({
  method: 'get',
  path: '/{realm}/components/{id}',
  tags: ['Component'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: ComponentRepresentationSchema } },
    },
  },
})

export const putRealmComponentsIdRoute = createRoute({
  method: 'put',
  path: '/{realm}/components/{id}',
  tags: ['Component'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ComponentRepresentationSchema } },
      required: true,
    },
  },
  responses: { '2XX': { description: 'success' } },
})

export const deleteRealmComponentsIdRoute = createRoute({
  method: 'delete',
  path: '/{realm}/components/{id}',
  tags: ['Component'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmComponentsIdSubComponentTypesRoute = createRoute({
  method: 'get',
  path: '/{realm}/components/{id}/sub-component-types',
  tags: ['Component'],
  summary:
    'List of subcomponent types that are available to configure for a particular parent component.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'type',
            schema: { type: 'string' },
            style: 'form',
            required: false,
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(ComponentTypeRepresentationSchema) } },
    },
  },
})

export const getRealmCredentialRegistratorsRoute = createRoute({
  method: 'get',
  path: '/{realm}/credential-registrators',
  tags: ['Realms Admin'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
  },
})

export const getRealmDefaultDefaultClientScopesRoute = createRoute({
  method: 'get',
  path: '/{realm}/default-default-client-scopes',
  tags: ['Realms Admin'],
  summary: 'Get realm default client scopes.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(ClientScopeRepresentationSchema) } },
    },
  },
})

export const putRealmDefaultDefaultClientScopesClientScopeIdRoute = createRoute({
  method: 'put',
  path: '/{realm}/default-default-client-scopes/{clientScopeId}',
  tags: ['Realms Admin'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      clientScopeId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'clientScopeId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { '2XX': { description: 'success' } },
})

export const deleteRealmDefaultDefaultClientScopesClientScopeIdRoute = createRoute({
  method: 'delete',
  path: '/{realm}/default-default-client-scopes/{clientScopeId}',
  tags: ['Realms Admin'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      clientScopeId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'clientScopeId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmDefaultGroupsRoute = createRoute({
  method: 'get',
  path: '/{realm}/default-groups',
  tags: ['Realms Admin'],
  summary: 'Get group hierarchy.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(GroupRepresentationSchema) } },
    },
  },
})

export const putRealmDefaultGroupsGroupIdRoute = createRoute({
  method: 'put',
  path: '/{realm}/default-groups/{groupId}',
  tags: ['Realms Admin'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      groupId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'groupId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { '2XX': { description: 'success' } },
})

export const deleteRealmDefaultGroupsGroupIdRoute = createRoute({
  method: 'delete',
  path: '/{realm}/default-groups/{groupId}',
  tags: ['Realms Admin'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      groupId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'groupId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmDefaultOptionalClientScopesRoute = createRoute({
  method: 'get',
  path: '/{realm}/default-optional-client-scopes',
  tags: ['Realms Admin'],
  summary: 'Get realm optional client scopes.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(ClientScopeRepresentationSchema) } },
    },
  },
})

export const putRealmDefaultOptionalClientScopesClientScopeIdRoute = createRoute({
  method: 'put',
  path: '/{realm}/default-optional-client-scopes/{clientScopeId}',
  tags: ['Realms Admin'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      clientScopeId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'clientScopeId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { '2XX': { description: 'success' } },
})

export const deleteRealmDefaultOptionalClientScopesClientScopeIdRoute = createRoute({
  method: 'delete',
  path: '/{realm}/default-optional-client-scopes/{clientScopeId}',
  tags: ['Realms Admin'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      clientScopeId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'clientScopeId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmEventsRoute = createRoute({
  method: 'get',
  path: '/{realm}/events',
  tags: ['Realms Admin'],
  summary:
    'Get events   Returns all events, or filters them based on URL query parameters listed here',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      client: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'App or oauth client name',
            in: 'query',
            name: 'client',
            schema: { type: 'string' },
            style: 'form',
            required: false,
          },
        }),
      dateFrom: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'From date',
            in: 'query',
            name: 'dateFrom',
            schema: { type: 'string' },
            style: 'form',
            required: false,
          },
        }),
      dateTo: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'To date',
            in: 'query',
            name: 'dateTo',
            schema: { type: 'string' },
            style: 'form',
            required: false,
          },
        }),
      first: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Paging offset',
            in: 'query',
            name: 'first',
            schema: { format: 'int32', type: 'integer' },
            style: 'form',
            required: false,
          },
        }),
      ipAddress: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'IP address',
            in: 'query',
            name: 'ipAddress',
            schema: { type: 'string' },
            style: 'form',
            required: false,
          },
        }),
      max: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum results size (defaults to 100)',
            in: 'query',
            name: 'max',
            schema: { format: 'int32', type: 'integer' },
            style: 'form',
            required: false,
          },
        }),
      type: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The types of events to return',
            in: 'query',
            name: 'type',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      user: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'User id',
            in: 'query',
            name: 'user',
            schema: { type: 'string' },
            style: 'form',
            required: false,
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(EventRepresentationSchema) } },
    },
  },
})

export const deleteRealmEventsRoute = createRoute({
  method: 'delete',
  path: '/{realm}/events',
  tags: ['Realms Admin'],
  summary: 'Delete all events',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmEventsConfigRoute = createRoute({
  method: 'get',
  path: '/{realm}/events/config',
  tags: ['Realms Admin'],
  summary:
    'Get the events provider configuration   Returns JSON object with events provider configuration',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: RealmEventsConfigRepresentationSchema } },
    },
  },
})

export const putRealmEventsConfigRoute = createRoute({
  method: 'put',
  path: '/{realm}/events/config',
  tags: ['Realms Admin'],
  summary: 'Update the events provider   Change the events provider and/or its configuration',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RealmEventsConfigRepresentationSchema } },
      required: true,
    },
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmGroupByPathPathRoute = createRoute({
  method: 'get',
  path: '/{realm}/group-by-path/{path}',
  tags: ['Realms Admin'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      path: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'path',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: GroupRepresentationSchema } },
    },
  },
})

export const getRealmGroupsRoute = createRoute({
  method: 'get',
  path: '/{realm}/groups',
  tags: ['Groups'],
  summary: 'Get group hierarchy.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      briefRepresentation: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'briefRepresentation',
            schema: { type: 'boolean' },
            style: 'form',
            required: false,
          },
        }),
      first: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'first',
            schema: { format: 'int32', type: 'integer' },
            style: 'form',
            required: false,
          },
        }),
      max: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'max',
            schema: { format: 'int32', type: 'integer' },
            style: 'form',
            required: false,
          },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'search',
            schema: { type: 'string' },
            style: 'form',
            required: false,
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(GroupRepresentationSchema) } },
    },
  },
})

export const postRealmGroupsRoute = createRoute({
  method: 'post',
  path: '/{realm}/groups',
  tags: ['Groups'],
  summary: 'create or add a top level realm groupSet or create child.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GroupRepresentationSchema } },
      required: true,
    },
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmGroupsCountRoute = createRoute({
  method: 'get',
  path: '/{realm}/groups/count',
  tags: ['Groups'],
  summary: 'Returns the groups counts.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'search',
            schema: { type: 'string' },
            style: 'form',
            required: false,
          },
        }),
      top: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'top',
            schema: { type: 'boolean' },
            style: 'form',
            required: false,
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
  },
})

export const getRealmGroupsIdRoute = createRoute({
  method: 'get',
  path: '/{realm}/groups/{id}',
  tags: ['Groups'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: GroupRepresentationSchema } },
    },
  },
})

export const putRealmGroupsIdRoute = createRoute({
  method: 'put',
  path: '/{realm}/groups/{id}',
  tags: ['Groups'],
  summary: 'Update group, ignores subgroups.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GroupRepresentationSchema } },
      required: true,
    },
  },
  responses: { '2XX': { description: 'success' } },
})

export const deleteRealmGroupsIdRoute = createRoute({
  method: 'delete',
  path: '/{realm}/groups/{id}',
  tags: ['Groups'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { '2XX': { description: 'success' } },
})

export const postRealmGroupsIdChildrenRoute = createRoute({
  method: 'post',
  path: '/{realm}/groups/{id}/children',
  tags: ['Groups'],
  summary: 'Set or create child.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GroupRepresentationSchema } },
      required: true,
    },
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmGroupsIdManagementPermissionsRoute = createRoute({
  method: 'get',
  path: '/{realm}/groups/{id}/management/permissions',
  tags: ['Groups'],
  summary:
    'Return object stating whether client Authorization permissions have been initialized or not and a reference',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: ManagementPermissionReferenceSchema } },
    },
  },
})

export const putRealmGroupsIdManagementPermissionsRoute = createRoute({
  method: 'put',
  path: '/{realm}/groups/{id}/management/permissions',
  tags: ['Groups'],
  summary:
    'Return object stating whether client Authorization permissions have been initialized or not and a reference',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ManagementPermissionReferenceSchema } },
      required: true,
    },
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: ManagementPermissionReferenceSchema } },
    },
  },
})

export const getRealmGroupsIdMembersRoute = createRoute({
  method: 'get',
  path: '/{realm}/groups/{id}/members',
  tags: ['Groups'],
  summary: 'Get users   Returns a list of users, filtered according to query parameters',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      briefRepresentation: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Only return basic information (only guaranteed to return id, username, created, first and last name,\n email, enabled state, email verification state, federation link, and access.\n Note that it means that namely user attributes, required actions, and not before are not returned.)',
            in: 'query',
            name: 'briefRepresentation',
            schema: { type: 'boolean' },
            style: 'form',
            required: false,
          },
        }),
      first: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Pagination offset',
            in: 'query',
            name: 'first',
            schema: { format: 'int32', type: 'integer' },
            style: 'form',
            required: false,
          },
        }),
      max: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum results size (defaults to 100)',
            in: 'query',
            name: 'max',
            schema: { format: 'int32', type: 'integer' },
            style: 'form',
            required: false,
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(UserRepresentationSchema) } },
    },
  },
})

export const getRealmGroupsIdRoleMappingsRoute = createRoute({
  method: 'get',
  path: '/{realm}/groups/{id}/role-mappings',
  tags: ['Role Mapper'],
  summary: 'Get role mappings',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: MappingsRepresentationSchema } },
    },
  },
})

export const getRealmGroupsIdRoleMappingsClientsClientRoute = createRoute({
  method: 'get',
  path: '/{realm}/groups/{id}/role-mappings/clients/{client}',
  tags: ['Client Role Mappings'],
  summary: 'Get client-level role mappings for the user, and the app',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      client: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'client',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
    },
  },
})

export const postRealmGroupsIdRoleMappingsClientsClientRoute = createRoute({
  method: 'post',
  path: '/{realm}/groups/{id}/role-mappings/clients/{client}',
  tags: ['Client Role Mappings'],
  summary: 'Add client-level roles to the user role mapping',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      client: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'client',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
      required: true,
    },
  },
  responses: { '2XX': { description: 'success' } },
})

export const deleteRealmGroupsIdRoleMappingsClientsClientRoute = createRoute({
  method: 'delete',
  path: '/{realm}/groups/{id}/role-mappings/clients/{client}',
  tags: ['Client Role Mappings'],
  summary: 'Delete client-level roles from user role mapping',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      client: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'client',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
      required: true,
    },
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmGroupsIdRoleMappingsClientsClientAvailableRoute = createRoute({
  method: 'get',
  path: '/{realm}/groups/{id}/role-mappings/clients/{client}/available',
  tags: ['Client Role Mappings'],
  summary: 'Get available client-level roles that can be mapped to the user',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      client: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'client',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
    },
  },
})

export const getRealmGroupsIdRoleMappingsClientsClientCompositeRoute = createRoute({
  method: 'get',
  path: '/{realm}/groups/{id}/role-mappings/clients/{client}/composite',
  tags: ['Client Role Mappings'],
  summary: 'Get effective client-level role mappings   This recurses any composite roles',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      client: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'client',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
    },
  },
})

export const getRealmGroupsIdRoleMappingsRealmRoute = createRoute({
  method: 'get',
  path: '/{realm}/groups/{id}/role-mappings/realm',
  tags: ['Role Mapper'],
  summary: 'Get realm-level role mappings',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
    },
  },
})

export const postRealmGroupsIdRoleMappingsRealmRoute = createRoute({
  method: 'post',
  path: '/{realm}/groups/{id}/role-mappings/realm',
  tags: ['Role Mapper'],
  summary: 'Add realm-level role mappings to the user',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: 'Roles to add',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
      required: true,
    },
  },
  responses: { '2XX': { description: 'success' } },
})

export const deleteRealmGroupsIdRoleMappingsRealmRoute = createRoute({
  method: 'delete',
  path: '/{realm}/groups/{id}/role-mappings/realm',
  tags: ['Role Mapper'],
  summary: 'Delete realm-level role mappings',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
      required: true,
    },
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmGroupsIdRoleMappingsRealmAvailableRoute = createRoute({
  method: 'get',
  path: '/{realm}/groups/{id}/role-mappings/realm/available',
  tags: ['Role Mapper'],
  summary: 'Get realm-level roles that can be mapped',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
    },
  },
})

export const getRealmGroupsIdRoleMappingsRealmCompositeRoute = createRoute({
  method: 'get',
  path: '/{realm}/groups/{id}/role-mappings/realm/composite',
  tags: ['Role Mapper'],
  summary:
    'Get effective realm-level role mappings   This will recurse all composite roles to get the result.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
    },
  },
})

export const postRealmIdentityProviderImportConfigRoute = createRoute({
  method: 'post',
  path: '/{realm}/identity-provider/import-config',
  tags: ['Identity Providers'],
  summary: 'Import identity provider from uploaded JSON file',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
  },
})

export const getRealmIdentityProviderInstancesRoute = createRoute({
  method: 'get',
  path: '/{realm}/identity-provider/instances',
  tags: ['Identity Providers'],
  summary: 'Get identity providers',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(IdentityProviderRepresentationSchema) } },
    },
  },
})

export const postRealmIdentityProviderInstancesRoute = createRoute({
  method: 'post',
  path: '/{realm}/identity-provider/instances',
  tags: ['Identity Providers'],
  summary: 'Create a new identity provider',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: 'JSON body',
      content: { 'application/json': { schema: IdentityProviderRepresentationSchema } },
      required: true,
    },
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmIdentityProviderInstancesAliasRoute = createRoute({
  method: 'get',
  path: '/{realm}/identity-provider/instances/{alias}',
  tags: ['Identity Providers'],
  summary: 'Get the identity provider',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      alias: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'alias',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: IdentityProviderRepresentationSchema } },
    },
  },
})

export const putRealmIdentityProviderInstancesAliasRoute = createRoute({
  method: 'put',
  path: '/{realm}/identity-provider/instances/{alias}',
  tags: ['Identity Providers'],
  summary: 'Update the identity provider',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      alias: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'alias',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: IdentityProviderRepresentationSchema } },
      required: true,
    },
  },
  responses: { '2XX': { description: 'success' } },
})

export const deleteRealmIdentityProviderInstancesAliasRoute = createRoute({
  method: 'delete',
  path: '/{realm}/identity-provider/instances/{alias}',
  tags: ['Identity Providers'],
  summary: 'Delete the identity provider',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      alias: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'alias',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmIdentityProviderInstancesAliasExportRoute = createRoute({
  method: 'get',
  path: '/{realm}/identity-provider/instances/{alias}/export',
  tags: ['Identity Providers'],
  summary: 'Export public broker configuration for identity provider',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      alias: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'alias',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      format: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Format to use',
            in: 'query',
            name: 'format',
            schema: { type: 'string' },
            style: 'form',
            required: false,
          },
        }),
    }),
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmIdentityProviderInstancesAliasManagementPermissionsRoute = createRoute({
  method: 'get',
  path: '/{realm}/identity-provider/instances/{alias}/management/permissions',
  tags: ['Identity Providers'],
  summary:
    'Return object stating whether client Authorization permissions have been initialized or not and a reference',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      alias: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'alias',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: ManagementPermissionReferenceSchema } },
    },
  },
})

export const putRealmIdentityProviderInstancesAliasManagementPermissionsRoute = createRoute({
  method: 'put',
  path: '/{realm}/identity-provider/instances/{alias}/management/permissions',
  tags: ['Identity Providers'],
  summary:
    'Return object stating whether client Authorization permissions have been initialized or not and a reference',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      alias: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'alias',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ManagementPermissionReferenceSchema } },
      required: true,
    },
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: ManagementPermissionReferenceSchema } },
    },
  },
})

export const getRealmIdentityProviderInstancesAliasMapperTypesRoute = createRoute({
  method: 'get',
  path: '/{realm}/identity-provider/instances/{alias}/mapper-types',
  tags: ['Identity Providers'],
  summary: 'Get mapper types for identity provider',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      alias: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'alias',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmIdentityProviderInstancesAliasMappersRoute = createRoute({
  method: 'get',
  path: '/{realm}/identity-provider/instances/{alias}/mappers',
  tags: ['Identity Providers'],
  summary: 'Get mappers for identity provider',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      alias: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'alias',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: {
        'application/json': { schema: z.array(IdentityProviderMapperRepresentationSchema) },
      },
    },
  },
})

export const postRealmIdentityProviderInstancesAliasMappersRoute = createRoute({
  method: 'post',
  path: '/{realm}/identity-provider/instances/{alias}/mappers',
  tags: ['Identity Providers'],
  summary: 'Add a mapper to identity provider',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      alias: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'alias',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: IdentityProviderMapperRepresentationSchema } },
      required: true,
    },
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmIdentityProviderInstancesAliasMappersIdRoute = createRoute({
  method: 'get',
  path: '/{realm}/identity-provider/instances/{alias}/mappers/{id}',
  tags: ['Identity Providers'],
  summary: 'Get mapper by id for the identity provider',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      alias: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'alias',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Mapper id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: IdentityProviderMapperRepresentationSchema } },
    },
  },
})

export const putRealmIdentityProviderInstancesAliasMappersIdRoute = createRoute({
  method: 'put',
  path: '/{realm}/identity-provider/instances/{alias}/mappers/{id}',
  tags: ['Identity Providers'],
  summary: 'Update a mapper for the identity provider',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      alias: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'alias',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Mapper id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: IdentityProviderMapperRepresentationSchema } },
      required: true,
    },
  },
  responses: { '2XX': { description: 'success' } },
})

export const deleteRealmIdentityProviderInstancesAliasMappersIdRoute = createRoute({
  method: 'delete',
  path: '/{realm}/identity-provider/instances/{alias}/mappers/{id}',
  tags: ['Identity Providers'],
  summary: 'Delete a mapper for the identity provider',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      alias: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'alias',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Mapper id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmIdentityProviderProvidersProviderIdRoute = createRoute({
  method: 'get',
  path: '/{realm}/identity-provider/providers/{provider_id}',
  tags: ['Identity Providers'],
  summary: 'Get identity providers',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      provider_id: z
        .string()
        .openapi({
          param: {
            description: 'Provider id',
            in: 'path',
            name: 'provider_id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmKeysRoute = createRoute({
  method: 'get',
  path: '/{realm}/keys',
  tags: ['Key'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: KeysMetadataRepresentationSchema } },
    },
  },
})

export const postRealmLogoutAllRoute = createRoute({
  method: 'post',
  path: '/{realm}/logout-all',
  tags: ['Realms Admin'],
  summary: 'Removes all user sessions.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { '2XX': { description: 'success' } },
})

export const postRealmPartialExportRoute = createRoute({
  method: 'post',
  path: '/{realm}/partial-export',
  tags: ['Realms Admin'],
  summary: 'Partial export of existing realm into a JSON file.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      exportClients: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'exportClients',
            schema: { type: 'boolean' },
            style: 'form',
            required: false,
          },
        }),
      exportGroupsAndRoles: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'exportGroupsAndRoles',
            schema: { type: 'boolean' },
            style: 'form',
            required: false,
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: RealmRepresentationSchema } },
    },
  },
})

export const postRealmPartialImportRoute = createRoute({
  method: 'post',
  path: '/{realm}/partialImport',
  tags: ['Realms Admin'],
  summary: 'Partial import from a JSON file to an existing realm.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PartialImportRepresentationSchema } },
      required: true,
    },
  },
  responses: { '2XX': { description: 'success' } },
})

export const postRealmPushRevocationRoute = createRoute({
  method: 'post',
  path: '/{realm}/push-revocation',
  tags: ['Realms Admin'],
  summary:
    'Push the realm’s revocation policy to any client that has an admin url associated with it.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmRolesRoute = createRoute({
  method: 'get',
  path: '/{realm}/roles',
  tags: ['Roles'],
  summary: 'Get all roles for the realm or client',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      briefRepresentation: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'briefRepresentation',
            schema: { type: 'boolean' },
            style: 'form',
            required: false,
          },
        }),
      first: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'first',
            schema: { format: 'int32', type: 'integer' },
            style: 'form',
            required: false,
          },
        }),
      max: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'max',
            schema: { format: 'int32', type: 'integer' },
            style: 'form',
            required: false,
          },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'search',
            schema: { type: 'string' },
            style: 'form',
            required: false,
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
    },
  },
})

export const postRealmRolesRoute = createRoute({
  method: 'post',
  path: '/{realm}/roles',
  tags: ['Roles'],
  summary: 'Create a new role for the realm or client',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RoleRepresentationSchema } }, required: true },
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmRolesByIdRoleIdRoute = createRoute({
  method: 'get',
  path: '/{realm}/roles-by-id/{role-id}',
  tags: ['Roles (by ID)'],
  summary: 'Get a specific role’s representation',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      'role-id': z
        .string()
        .openapi({
          param: {
            description: 'id of role',
            in: 'path',
            name: 'role-id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: RoleRepresentationSchema } },
    },
  },
})

export const putRealmRolesByIdRoleIdRoute = createRoute({
  method: 'put',
  path: '/{realm}/roles-by-id/{role-id}',
  tags: ['Roles (by ID)'],
  summary: 'Update the role',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      'role-id': z
        .string()
        .openapi({
          param: {
            description: 'id of role',
            in: 'path',
            name: 'role-id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RoleRepresentationSchema } }, required: true },
  },
  responses: { '2XX': { description: 'success' } },
})

export const deleteRealmRolesByIdRoleIdRoute = createRoute({
  method: 'delete',
  path: '/{realm}/roles-by-id/{role-id}',
  tags: ['Roles (by ID)'],
  summary: 'Delete the role',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      'role-id': z
        .string()
        .openapi({
          param: {
            description: 'id of role',
            in: 'path',
            name: 'role-id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmRolesByIdRoleIdCompositesRoute = createRoute({
  method: 'get',
  path: '/{realm}/roles-by-id/{role-id}/composites',
  tags: ['Roles (by ID)'],
  summary:
    'Get role’s children   Returns a set of role’s children provided the role is a composite.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      'role-id': z
        .string()
        .openapi({
          param: {
            description: 'Role id',
            in: 'path',
            name: 'role-id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
    },
  },
})

export const postRealmRolesByIdRoleIdCompositesRoute = createRoute({
  method: 'post',
  path: '/{realm}/roles-by-id/{role-id}/composites',
  tags: ['Roles (by ID)'],
  summary: 'Make the role a composite role by associating some child roles',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      'role-id': z
        .string()
        .openapi({
          param: {
            description: 'Role id',
            in: 'path',
            name: 'role-id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
      required: true,
    },
  },
  responses: { '2XX': { description: 'success' } },
})

export const deleteRealmRolesByIdRoleIdCompositesRoute = createRoute({
  method: 'delete',
  path: '/{realm}/roles-by-id/{role-id}/composites',
  tags: ['Roles (by ID)'],
  summary: 'Remove a set of roles from the role’s composite',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      'role-id': z
        .string()
        .openapi({
          param: {
            description: 'Role id',
            in: 'path',
            name: 'role-id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: 'A set of roles to be removed',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
      required: true,
    },
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmRolesByIdRoleIdCompositesClientsClientRoute = createRoute({
  method: 'get',
  path: '/{realm}/roles-by-id/{role-id}/composites/clients/{client}',
  tags: ['Roles (by ID)'],
  summary: 'Get client-level roles for the client that are in the role’s composite',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      'role-id': z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'role-id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      client: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'client',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
    },
  },
})

export const getRealmRolesByIdRoleIdCompositesRealmRoute = createRoute({
  method: 'get',
  path: '/{realm}/roles-by-id/{role-id}/composites/realm',
  tags: ['Roles (by ID)'],
  summary: 'Get realm-level roles that are in the role’s composite',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      'role-id': z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'role-id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
    },
  },
})

export const getRealmRolesByIdRoleIdManagementPermissionsRoute = createRoute({
  method: 'get',
  path: '/{realm}/roles-by-id/{role-id}/management/permissions',
  tags: ['Roles (by ID)'],
  summary:
    'Return object stating whether role Authoirzation permissions have been initialized or not and a reference',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      'role-id': z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'role-id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: ManagementPermissionReferenceSchema } },
    },
  },
})

export const putRealmRolesByIdRoleIdManagementPermissionsRoute = createRoute({
  method: 'put',
  path: '/{realm}/roles-by-id/{role-id}/management/permissions',
  tags: ['Roles (by ID)'],
  summary:
    'Return object stating whether role Authoirzation permissions have been initialized or not and a reference',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      'role-id': z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'role-id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ManagementPermissionReferenceSchema } },
      required: true,
    },
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: ManagementPermissionReferenceSchema } },
    },
  },
})

export const getRealmRolesRoleNameRoute = createRoute({
  method: 'get',
  path: '/{realm}/roles/{role-name}',
  tags: ['Roles'],
  summary: 'Get a role by name',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      'role-name': z
        .string()
        .openapi({
          param: {
            description: 'role’s name (not id!)',
            in: 'path',
            name: 'role-name',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: RoleRepresentationSchema } },
    },
  },
})

export const putRealmRolesRoleNameRoute = createRoute({
  method: 'put',
  path: '/{realm}/roles/{role-name}',
  tags: ['Roles'],
  summary: 'Update a role by name',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      'role-name': z
        .string()
        .openapi({
          param: {
            description: 'role’s name (not id!)',
            in: 'path',
            name: 'role-name',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RoleRepresentationSchema } }, required: true },
  },
  responses: { '2XX': { description: 'success' } },
})

export const deleteRealmRolesRoleNameRoute = createRoute({
  method: 'delete',
  path: '/{realm}/roles/{role-name}',
  tags: ['Roles'],
  summary: 'Delete a role by name',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      'role-name': z
        .string()
        .openapi({
          param: {
            description: 'role’s name (not id!)',
            in: 'path',
            name: 'role-name',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmRolesRoleNameCompositesRoute = createRoute({
  method: 'get',
  path: '/{realm}/roles/{role-name}/composites',
  tags: ['Roles'],
  summary: 'Get composites of the role',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      'role-name': z
        .string()
        .openapi({
          param: {
            description: 'role’s name (not id!)',
            in: 'path',
            name: 'role-name',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
    },
  },
})

export const postRealmRolesRoleNameCompositesRoute = createRoute({
  method: 'post',
  path: '/{realm}/roles/{role-name}/composites',
  tags: ['Roles'],
  summary: 'Add a composite to the role',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      'role-name': z
        .string()
        .openapi({
          param: {
            description: 'role’s name (not id!)',
            in: 'path',
            name: 'role-name',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
      required: true,
    },
  },
  responses: { '2XX': { description: 'success' } },
})

export const deleteRealmRolesRoleNameCompositesRoute = createRoute({
  method: 'delete',
  path: '/{realm}/roles/{role-name}/composites',
  tags: ['Roles'],
  summary: 'Remove roles from the role’s composite',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      'role-name': z
        .string()
        .openapi({
          param: {
            description: 'role’s name (not id!)',
            in: 'path',
            name: 'role-name',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: 'roles to remove',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
      required: true,
    },
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmRolesRoleNameCompositesClientsClientRoute = createRoute({
  method: 'get',
  path: '/{realm}/roles/{role-name}/composites/clients/{client}',
  tags: ['Roles'],
  summary: 'An app-level roles for the specified app for the role’s composite',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      'role-name': z
        .string()
        .openapi({
          param: {
            description: 'role’s name (not id!)',
            in: 'path',
            name: 'role-name',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      client: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'client',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
    },
  },
})

export const getRealmRolesRoleNameCompositesRealmRoute = createRoute({
  method: 'get',
  path: '/{realm}/roles/{role-name}/composites/realm',
  tags: ['Roles'],
  summary: 'Get realm-level roles of the role’s composite',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      'role-name': z
        .string()
        .openapi({
          param: {
            description: 'role’s name (not id!)',
            in: 'path',
            name: 'role-name',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
    },
  },
})

export const getRealmRolesRoleNameGroupsRoute = createRoute({
  method: 'get',
  path: '/{realm}/roles/{role-name}/groups',
  tags: ['Roles'],
  summary: 'Return List of Groups that have the specified role name',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      'role-name': z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'role-name',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      briefRepresentation: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'if false, return a full representation of the GroupRepresentation objects',
            in: 'query',
            name: 'briefRepresentation',
            schema: { type: 'boolean' },
            style: 'form',
            required: false,
          },
        }),
      first: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'first',
            schema: { format: 'int32', type: 'integer' },
            style: 'form',
            required: false,
          },
        }),
      max: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'max',
            schema: { format: 'int32', type: 'integer' },
            style: 'form',
            required: false,
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(GroupRepresentationSchema) } },
    },
  },
})

export const getRealmRolesRoleNameManagementPermissionsRoute = createRoute({
  method: 'get',
  path: '/{realm}/roles/{role-name}/management/permissions',
  tags: ['Roles'],
  summary:
    'Return object stating whether role Authoirzation permissions have been initialized or not and a reference',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      'role-name': z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'role-name',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: ManagementPermissionReferenceSchema } },
    },
  },
})

export const putRealmRolesRoleNameManagementPermissionsRoute = createRoute({
  method: 'put',
  path: '/{realm}/roles/{role-name}/management/permissions',
  tags: ['Roles'],
  summary:
    'Return object stating whether role Authoirzation permissions have been initialized or not and a reference',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      'role-name': z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'role-name',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ManagementPermissionReferenceSchema } },
      required: true,
    },
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: ManagementPermissionReferenceSchema } },
    },
  },
})

export const getRealmRolesRoleNameUsersRoute = createRoute({
  method: 'get',
  path: '/{realm}/roles/{role-name}/users',
  tags: ['Roles'],
  summary: 'Return List of Users that have the specified role name',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      'role-name': z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'role-name',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      first: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'first',
            schema: { format: 'int32', type: 'integer' },
            style: 'form',
            required: false,
          },
        }),
      max: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'max',
            schema: { format: 'int32', type: 'integer' },
            style: 'form',
            required: false,
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(UserRepresentationSchema) } },
    },
  },
})

export const deleteRealmSessionsSessionRoute = createRoute({
  method: 'delete',
  path: '/{realm}/sessions/{session}',
  tags: ['Realms Admin'],
  summary: 'Remove a specific user session.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      session: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'session',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { '2XX': { description: 'success' } },
})

export const postRealmTestLDAPConnectionRoute = createRoute({
  method: 'post',
  path: '/{realm}/testLDAPConnection',
  tags: ['Realms Admin'],
  summary: 'Test LDAP connection',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: TestLdapConnectionRepresentationSchema } },
      required: true,
    },
  },
  responses: { '2XX': { description: 'success' } },
})

export const postRealmTestSMTPConnectionRoute = createRoute({
  method: 'post',
  path: '/{realm}/testSMTPConnection',
  tags: ['Realms Admin'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: z.looseObject({}) } }, required: true },
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmUserStorageIdNameRoute = createRoute({
  method: 'get',
  path: '/{realm}/user-storage/{id}/name',
  tags: ['User Storage Provider'],
  summary:
    'Need this for admin console to display simple name of provider when displaying user detail   KEYCLOAK-4328',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
  },
})

export const postRealmUserStorageIdRemoveImportedUsersRoute = createRoute({
  method: 'post',
  path: '/{realm}/user-storage/{id}/remove-imported-users',
  tags: ['User Storage Provider'],
  summary: 'Remove imported users',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { '2XX': { description: 'success' } },
})

export const postRealmUserStorageIdSyncRoute = createRoute({
  method: 'post',
  path: '/{realm}/user-storage/{id}/sync',
  tags: ['User Storage Provider'],
  summary: 'Trigger sync of users   Action can be "triggerFullSync" or "triggerChangedUsersSync"',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      action: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'action',
            schema: { type: 'string' },
            style: 'form',
            required: false,
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: SynchronizationResultSchema } },
    },
  },
})

export const postRealmUserStorageIdUnlinkUsersRoute = createRoute({
  method: 'post',
  path: '/{realm}/user-storage/{id}/unlink-users',
  tags: ['User Storage Provider'],
  summary: 'Unlink imported users from a storage provider',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { '2XX': { description: 'success' } },
})

export const postRealmUserStorageParentIdMappersIdSyncRoute = createRoute({
  method: 'post',
  path: '/{realm}/user-storage/{parentId}/mappers/{id}/sync',
  tags: ['User Storage Provider'],
  summary:
    'Trigger sync of mapper data related to ldap mapper (roles, groups, …​)   direction is "fedToKeycloak" or "keycloakToFed"',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      parentId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'parentId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      direction: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'direction',
            schema: { type: 'string' },
            style: 'form',
            required: false,
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: SynchronizationResultSchema } },
    },
  },
})

export const getRealmUsersRoute = createRoute({
  method: 'get',
  path: '/{realm}/users',
  tags: ['Users'],
  summary: 'Get users   Returns a list of users, filtered according to query parameters',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      briefRepresentation: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'briefRepresentation',
            schema: { type: 'boolean' },
            style: 'form',
            required: false,
          },
        }),
      email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'email',
            schema: { type: 'string' },
            style: 'form',
            required: false,
          },
        }),
      first: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'first',
            schema: { format: 'int32', type: 'integer' },
            style: 'form',
            required: false,
          },
        }),
      firstName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'firstName',
            schema: { type: 'string' },
            style: 'form',
            required: false,
          },
        }),
      lastName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'lastName',
            schema: { type: 'string' },
            style: 'form',
            required: false,
          },
        }),
      max: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum results size (defaults to 100)',
            in: 'query',
            name: 'max',
            schema: { format: 'int32', type: 'integer' },
            style: 'form',
            required: false,
          },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A String contained in username, first or last name, or email',
            in: 'query',
            name: 'search',
            schema: { type: 'string' },
            style: 'form',
            required: false,
          },
        }),
      username: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'username',
            schema: { type: 'string' },
            style: 'form',
            required: false,
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(UserRepresentationSchema) } },
    },
  },
})

export const postRealmUsersRoute = createRoute({
  method: 'post',
  path: '/{realm}/users',
  tags: ['Users'],
  summary: 'Create a new user   Username must be unique.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UserRepresentationSchema } }, required: true },
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmUsersManagementPermissionsRoute = createRoute({
  method: 'get',
  path: '/{realm}/users-management-permissions',
  tags: ['Realms Admin'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: ManagementPermissionReferenceSchema } },
    },
  },
})

export const putRealmUsersManagementPermissionsRoute = createRoute({
  method: 'put',
  path: '/{realm}/users-management-permissions',
  tags: ['Realms Admin'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ManagementPermissionReferenceSchema } },
      required: true,
    },
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: ManagementPermissionReferenceSchema } },
    },
  },
})

export const getRealmUsersCountRoute = createRoute({
  method: 'get',
  path: '/{realm}/users/count',
  tags: ['Users'],
  summary: 'Returns the number of users that match the given criteria.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'email filter',
            in: 'query',
            name: 'email',
            schema: { type: 'string' },
            style: 'form',
            required: false,
          },
        }),
      firstName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'first name filter',
            in: 'query',
            name: 'firstName',
            schema: { type: 'string' },
            style: 'form',
            required: false,
          },
        }),
      lastName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'last name filter',
            in: 'query',
            name: 'lastName',
            schema: { type: 'string' },
            style: 'form',
            required: false,
          },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'arbitrary search string for all the fields below',
            in: 'query',
            name: 'search',
            schema: { type: 'string' },
            style: 'form',
            required: false,
          },
        }),
      username: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'username filter',
            in: 'query',
            name: 'username',
            schema: { type: 'string' },
            style: 'form',
            required: false,
          },
        }),
    }),
  },
  responses: {
    '2XX': { description: 'success', content: { 'application/json': { schema: z.int32() } } },
  },
})

export const getRealmUsersIdRoute = createRoute({
  method: 'get',
  path: '/{realm}/users/{id}',
  tags: ['Users'],
  summary: 'Get representation of the user',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'User id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: UserRepresentationSchema } },
    },
  },
})

export const putRealmUsersIdRoute = createRoute({
  method: 'put',
  path: '/{realm}/users/{id}',
  tags: ['Users'],
  summary: 'Update the user',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'User id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UserRepresentationSchema } }, required: true },
  },
  responses: { '2XX': { description: 'success' } },
})

export const deleteRealmUsersIdRoute = createRoute({
  method: 'delete',
  path: '/{realm}/users/{id}',
  tags: ['Users'],
  summary: 'Delete the user',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'User id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmUsersIdConfiguredUserStorageCredentialTypesRoute = createRoute({
  method: 'get',
  path: '/{realm}/users/{id}/configured-user-storage-credential-types',
  tags: ['Users'],
  summary: 'Return credential types, which are provided by the user storage where user is stored.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'User id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
  },
})

export const getRealmUsersIdConsentsRoute = createRoute({
  method: 'get',
  path: '/{realm}/users/{id}/consents',
  tags: ['Users'],
  summary: 'Get consents granted by the user',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'User id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(z.looseObject({})) } },
    },
  },
})

export const deleteRealmUsersIdConsentsClientRoute = createRoute({
  method: 'delete',
  path: '/{realm}/users/{id}/consents/{client}',
  tags: ['Users'],
  summary: 'Revoke consent and offline tokens for particular client from user',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'User id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      client: z
        .string()
        .openapi({
          param: {
            description: 'Client id',
            in: 'path',
            name: 'client',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmUsersIdCredentialsRoute = createRoute({
  method: 'get',
  path: '/{realm}/users/{id}/credentials',
  tags: ['Users'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'User id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(CredentialRepresentationSchema) } },
    },
  },
})

export const deleteRealmUsersIdCredentialsCredentialIdRoute = createRoute({
  method: 'delete',
  path: '/{realm}/users/{id}/credentials/{credentialId}',
  tags: ['Users'],
  summary: 'Remove a credential for a user',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'User id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      credentialId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'credentialId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { '2XX': { description: 'success' } },
})

export const postRealmUsersIdCredentialsCredentialIdMoveAfterNewPreviousCredentialIdRoute =
  createRoute({
    method: 'post',
    path: '/{realm}/users/{id}/credentials/{credentialId}/moveAfter/{newPreviousCredentialId}',
    tags: ['Users'],
    summary: 'Move a credential to a position behind another credential',
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              description: 'realm name (not id!)',
              in: 'path',
              name: 'realm',
              required: true,
              schema: { type: 'string' },
              style: 'simple',
            },
          }),
        id: z
          .string()
          .openapi({
            param: {
              description: 'User id',
              in: 'path',
              name: 'id',
              required: true,
              schema: { type: 'string' },
              style: 'simple',
            },
          }),
        credentialId: z
          .string()
          .openapi({
            param: {
              description: 'The credential to move',
              in: 'path',
              name: 'credentialId',
              required: true,
              schema: { type: 'string' },
              style: 'simple',
            },
          }),
        newPreviousCredentialId: z
          .string()
          .openapi({
            param: {
              description:
                'The credential that will be the previous element in the list. If set to null, the moved credential will be the first element in the list.',
              in: 'path',
              name: 'newPreviousCredentialId',
              required: true,
              schema: { type: 'string' },
              style: 'simple',
            },
          }),
      }),
    },
    responses: { '2XX': { description: 'success' } },
  })

export const postRealmUsersIdCredentialsCredentialIdMoveToFirstRoute = createRoute({
  method: 'post',
  path: '/{realm}/users/{id}/credentials/{credentialId}/moveToFirst',
  tags: ['Users'],
  summary: 'Move a credential to a first position in the credentials list of the user',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'User id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      credentialId: z
        .string()
        .openapi({
          param: {
            description: 'The credential to move',
            in: 'path',
            name: 'credentialId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { '2XX': { description: 'success' } },
})

export const putRealmUsersIdCredentialsCredentialIdUserLabelRoute = createRoute({
  method: 'put',
  path: '/{realm}/users/{id}/credentials/{credentialId}/userLabel',
  tags: ['Users'],
  summary: 'Update a credential label for a user',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'User id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      credentialId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'credentialId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: { content: { 'text/plain': { schema: z.string() } }, required: true },
  },
  responses: { '2XX': { description: 'success' } },
})

export const putRealmUsersIdDisableCredentialTypesRoute = createRoute({
  method: 'put',
  path: '/{realm}/users/{id}/disable-credential-types',
  tags: ['Users'],
  summary: 'Disable all credentials for a user of a specific type',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'User id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: z.array(z.string()) } }, required: true },
  },
  responses: { '2XX': { description: 'success' } },
})

export const putRealmUsersIdExecuteActionsEmailRoute = createRoute({
  method: 'put',
  path: '/{realm}/users/{id}/execute-actions-email',
  tags: ['Users'],
  summary:
    'Send a update account email to the user   An email contains a link the user can click to perform a set of required actions.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'User id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      client_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Client id',
            in: 'query',
            name: 'client_id',
            schema: { type: 'string' },
            style: 'form',
            required: false,
          },
        }),
      lifespan: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of seconds after which the generated token expires',
            in: 'query',
            name: 'lifespan',
            schema: { format: 'int32', type: 'integer' },
            style: 'form',
            required: false,
          },
        }),
      redirect_uri: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Redirect uri',
            in: 'query',
            name: 'redirect_uri',
            schema: { type: 'string' },
            style: 'form',
            required: false,
          },
        }),
    }),
    body: {
      description: 'required actions the user needs to complete',
      content: { 'application/json': { schema: z.array(z.string()) } },
      required: true,
    },
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmUsersIdFederatedIdentityRoute = createRoute({
  method: 'get',
  path: '/{realm}/users/{id}/federated-identity',
  tags: ['Users'],
  summary: 'Get social logins associated with the user',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'User id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(FederatedIdentityRepresentationSchema) } },
    },
  },
})

export const postRealmUsersIdFederatedIdentityProviderRoute = createRoute({
  method: 'post',
  path: '/{realm}/users/{id}/federated-identity/{provider}',
  tags: ['Users'],
  summary: 'Add a social login provider to the user',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'User id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      provider: z
        .string()
        .openapi({
          param: {
            description: 'Social login provider id',
            in: 'path',
            name: 'provider',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: FederatedIdentityRepresentationSchema } },
      required: true,
    },
  },
  responses: { '2XX': { description: 'success' } },
})

export const deleteRealmUsersIdFederatedIdentityProviderRoute = createRoute({
  method: 'delete',
  path: '/{realm}/users/{id}/federated-identity/{provider}',
  tags: ['Users'],
  summary: 'Remove a social login provider from user',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'User id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      provider: z
        .string()
        .openapi({
          param: {
            description: 'Social login provider id',
            in: 'path',
            name: 'provider',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmUsersIdGroupsRoute = createRoute({
  method: 'get',
  path: '/{realm}/users/{id}/groups',
  tags: ['Users'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'User id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      briefRepresentation: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'briefRepresentation',
            schema: { type: 'boolean' },
            style: 'form',
            required: false,
          },
        }),
      first: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'first',
            schema: { format: 'int32', type: 'integer' },
            style: 'form',
            required: false,
          },
        }),
      max: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'max',
            schema: { format: 'int32', type: 'integer' },
            style: 'form',
            required: false,
          },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'search',
            schema: { type: 'string' },
            style: 'form',
            required: false,
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(GroupRepresentationSchema) } },
    },
  },
})

export const getRealmUsersIdGroupsCountRoute = createRoute({
  method: 'get',
  path: '/{realm}/users/{id}/groups/count',
  tags: ['Users'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'User id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'search',
            schema: { type: 'string' },
            style: 'form',
            required: false,
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
  },
})

export const putRealmUsersIdGroupsGroupIdRoute = createRoute({
  method: 'put',
  path: '/{realm}/users/{id}/groups/{groupId}',
  tags: ['Users'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'User id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      groupId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'groupId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { '2XX': { description: 'success' } },
})

export const deleteRealmUsersIdGroupsGroupIdRoute = createRoute({
  method: 'delete',
  path: '/{realm}/users/{id}/groups/{groupId}',
  tags: ['Users'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'User id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      groupId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'groupId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { '2XX': { description: 'success' } },
})

export const postRealmUsersIdImpersonationRoute = createRoute({
  method: 'post',
  path: '/{realm}/users/{id}/impersonation',
  tags: ['Users'],
  summary: 'Impersonate the user',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'User id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.looseObject({}) } },
    },
  },
})

export const postRealmUsersIdLogoutRoute = createRoute({
  method: 'post',
  path: '/{realm}/users/{id}/logout',
  tags: ['Users'],
  summary:
    'Remove all user sessions associated with the user   Also send notification to all clients that have an admin URL to invalidate the sessions for the particular user.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'User id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmUsersIdOfflineSessionsClientIdRoute = createRoute({
  method: 'get',
  path: '/{realm}/users/{id}/offline-sessions/{clientId}',
  tags: ['Users'],
  summary: 'Get offline sessions associated with the user and client',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'User id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      clientId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'clientId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(UserSessionRepresentationSchema) } },
    },
  },
})

export const putRealmUsersIdResetPasswordRoute = createRoute({
  method: 'put',
  path: '/{realm}/users/{id}/reset-password',
  tags: ['Users'],
  summary: 'Set up a new password for the user.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'User id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: 'The representation must contain a rawPassword with the plain-text password',
      content: { 'application/json': { schema: CredentialRepresentationSchema } },
      required: true,
    },
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmUsersIdRoleMappingsRoute = createRoute({
  method: 'get',
  path: '/{realm}/users/{id}/role-mappings',
  tags: ['Role Mapper'],
  summary: 'Get role mappings',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'User id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: MappingsRepresentationSchema } },
    },
  },
})

export const getRealmUsersIdRoleMappingsClientsClientRoute = createRoute({
  method: 'get',
  path: '/{realm}/users/{id}/role-mappings/clients/{client}',
  tags: ['Client Role Mappings'],
  summary: 'Get client-level role mappings for the user, and the app',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'User id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      client: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'client',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
    },
  },
})

export const postRealmUsersIdRoleMappingsClientsClientRoute = createRoute({
  method: 'post',
  path: '/{realm}/users/{id}/role-mappings/clients/{client}',
  tags: ['Client Role Mappings'],
  summary: 'Add client-level roles to the user role mapping',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'User id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      client: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'client',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
      required: true,
    },
  },
  responses: { '2XX': { description: 'success' } },
})

export const deleteRealmUsersIdRoleMappingsClientsClientRoute = createRoute({
  method: 'delete',
  path: '/{realm}/users/{id}/role-mappings/clients/{client}',
  tags: ['Client Role Mappings'],
  summary: 'Delete client-level roles from user role mapping',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'User id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      client: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'client',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
      required: true,
    },
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmUsersIdRoleMappingsClientsClientAvailableRoute = createRoute({
  method: 'get',
  path: '/{realm}/users/{id}/role-mappings/clients/{client}/available',
  tags: ['Client Role Mappings'],
  summary: 'Get available client-level roles that can be mapped to the user',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'User id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      client: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'client',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
    },
  },
})

export const getRealmUsersIdRoleMappingsClientsClientCompositeRoute = createRoute({
  method: 'get',
  path: '/{realm}/users/{id}/role-mappings/clients/{client}/composite',
  tags: ['Client Role Mappings'],
  summary: 'Get effective client-level role mappings   This recurses any composite roles',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'User id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      client: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'client',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
    },
  },
})

export const getRealmUsersIdRoleMappingsRealmRoute = createRoute({
  method: 'get',
  path: '/{realm}/users/{id}/role-mappings/realm',
  tags: ['Role Mapper'],
  summary: 'Get realm-level role mappings',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'User id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
    },
  },
})

export const postRealmUsersIdRoleMappingsRealmRoute = createRoute({
  method: 'post',
  path: '/{realm}/users/{id}/role-mappings/realm',
  tags: ['Role Mapper'],
  summary: 'Add realm-level role mappings to the user',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'User id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: 'Roles to add',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
      required: true,
    },
  },
  responses: { '2XX': { description: 'success' } },
})

export const deleteRealmUsersIdRoleMappingsRealmRoute = createRoute({
  method: 'delete',
  path: '/{realm}/users/{id}/role-mappings/realm',
  tags: ['Role Mapper'],
  summary: 'Delete realm-level role mappings',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'User id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
      required: true,
    },
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmUsersIdRoleMappingsRealmAvailableRoute = createRoute({
  method: 'get',
  path: '/{realm}/users/{id}/role-mappings/realm/available',
  tags: ['Role Mapper'],
  summary: 'Get realm-level roles that can be mapped',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'User id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
    },
  },
})

export const getRealmUsersIdRoleMappingsRealmCompositeRoute = createRoute({
  method: 'get',
  path: '/{realm}/users/{id}/role-mappings/realm/composite',
  tags: ['Role Mapper'],
  summary:
    'Get effective realm-level role mappings   This will recurse all composite roles to get the result.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'User id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
    },
  },
})

export const putRealmUsersIdSendVerifyEmailRoute = createRoute({
  method: 'put',
  path: '/{realm}/users/{id}/send-verify-email',
  tags: ['Users'],
  summary:
    'Send an email-verification email to the user   An email contains a link the user can click to verify their email address.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'User id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      client_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Client id',
            in: 'query',
            name: 'client_id',
            schema: { type: 'string' },
            style: 'form',
            required: false,
          },
        }),
      redirect_uri: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Redirect uri',
            in: 'query',
            name: 'redirect_uri',
            schema: { type: 'string' },
            style: 'form',
            required: false,
          },
        }),
    }),
  },
  responses: { '2XX': { description: 'success' } },
})

export const getRealmUsersIdSessionsRoute = createRoute({
  method: 'get',
  path: '/{realm}/users/{id}/sessions',
  tags: ['Users'],
  summary: 'Get sessions associated with the user',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            description: 'realm name (not id!)',
            in: 'path',
            name: 'realm',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'User id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    '2XX': {
      description: 'success',
      content: { 'application/json': { schema: z.array(UserSessionRepresentationSchema) } },
    },
  },
})
