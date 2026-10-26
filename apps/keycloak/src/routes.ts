import { createRoute, z } from '@hono/zod-openapi'

const MultivaluedHashMapStringComponentExportRepresentationSchema: z.ZodType<MultivaluedHashMapStringComponentExportRepresentationType> =
  z
    .lazy(() => z.record(z.string(), z.array(ComponentExportRepresentationSchema)))
    .openapi('MultivaluedHashMapStringComponentExportRepresentation')

type MultivaluedHashMapStringStringType = { [key: string]: string[] }

const MultivaluedHashMapStringStringSchema: z.ZodType<MultivaluedHashMapStringStringType> = z
  .record(z.string(), z.array(z.string()))
  .openapi('MultivaluedHashMapStringString')

type ComponentExportRepresentationType = {
  id?: string
  name?: string
  providerId?: string
  subType?: string
  subComponents?: z.infer<typeof MultivaluedHashMapStringComponentExportRepresentationSchema>
  config?: z.infer<typeof MultivaluedHashMapStringStringSchema>
}

type DecisionStrategyType = 'AFFIRMATIVE' | 'UNANIMOUS' | 'CONSENSUS'

type ErrorRepresentationType = {
  field?: string
  errorMessage?: string
  params?: unknown[]
  errors?: ErrorRepresentationType[]
}

type GroupRepresentationType = {
  id?: string
  name?: string
  description?: string
  path?: string
  parentId?: string
  subGroupCount?: bigint
  subGroups?: GroupRepresentationType[]
  attributes?: { [key: string]: string[] }
  realmRoles?: string[]
  clientRoles?: { [key: string]: string[] }
  access?: { [key: string]: boolean }
}

type LogicType = 'POSITIVE' | 'NEGATIVE'

const CompositesSchema = z
  .object({
    realm: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    client: z.record(z.string(), z.array(z.string())).exactOptional(),
    application: z
      .record(z.string(), z.array(z.string()))
      .exactOptional()
      .openapi({ deprecated: true }),
  })
  .openapi({ required: [] })
  .openapi('Composites')

const RoleRepresentationSchema = z
  .object({
    id: z.string().exactOptional(),
    name: z.string().exactOptional(),
    description: z.string().exactOptional(),
    scopeParamRequired: z.boolean().exactOptional().openapi({ deprecated: true }),
    composite: z.boolean().exactOptional(),
    composites: CompositesSchema.exactOptional(),
    clientRole: z.boolean().exactOptional(),
    containerId: z.string().exactOptional(),
    attributes: z.record(z.string(), z.array(z.string())).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RoleRepresentation')

const ClientMappingsRepresentationSchema = z
  .object({
    id: z.string().exactOptional(),
    client: z.string().exactOptional(),
    mappings: z.array(RoleRepresentationSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ClientMappingsRepresentation')

type MappingsRepresentationType = {
  realmMappings?: z.infer<typeof RoleRepresentationSchema>[]
  clientMappings?: { [key: string]: z.infer<typeof ClientMappingsRepresentationSchema> }
}

const ComponentExportRepresentationSchema: z.ZodType<ComponentExportRepresentationType> = z
  .lazy(() =>
    z
      .object({
        id: z.string().exactOptional(),
        name: z.string().exactOptional(),
        providerId: z.string().exactOptional(),
        subType: z.string().exactOptional(),
        subComponents: MultivaluedHashMapStringComponentExportRepresentationSchema.exactOptional(),
        config: MultivaluedHashMapStringStringSchema.exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('ComponentExportRepresentation')

type MultivaluedHashMapStringComponentExportRepresentationType = {
  [key: string]: z.infer<typeof ComponentExportRepresentationSchema>[]
}

const LogicSchema: z.ZodType<LogicType> = z.enum(['POSITIVE', 'NEGATIVE']).openapi('Logic')

const DecisionStrategySchema: z.ZodType<DecisionStrategyType> = z
  .enum(['AFFIRMATIVE', 'UNANIMOUS', 'CONSENSUS'])
  .openapi('DecisionStrategy')

const ResourceRepresentationSchema: z.ZodType<ResourceRepresentationType> = z
  .lazy(() =>
    z
      .object({
        _id: z.string().exactOptional(),
        name: z.string().exactOptional(),
        uris: z
          .array(z.string())
          .superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          })
          .exactOptional(),
        type: z.string().exactOptional(),
        scopes: z
          .array(ScopeRepresentationSchema)
          .superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          })
          .exactOptional(),
        icon_uri: z.string().exactOptional(),
        owner: ResourceOwnerRepresentationSchema.exactOptional().openapi({ readOnly: true }),
        ownerManagedAccess: z.boolean().exactOptional(),
        displayName: z.string().exactOptional(),
        attributes: z.record(z.string(), z.array(z.string())).exactOptional(),
        uri: z.string().exactOptional().openapi({ writeOnly: true, deprecated: true }),
        scopesUma: z
          .array(ScopeRepresentationSchema)
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
      .openapi({ required: [] }),
  )
  .openapi('ResourceRepresentation')

const ScopeRepresentationSchema: z.ZodType<ScopeRepresentationType> = z
  .lazy(() =>
    z
      .object({
        id: z.string().exactOptional(),
        name: z.string().exactOptional(),
        iconUri: z.string().exactOptional(),
        policies: z.array(PolicyRepresentationSchema).exactOptional(),
        resources: z.array(ResourceRepresentationSchema).exactOptional(),
        displayName: z.string().exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('ScopeRepresentation')

type PolicyRepresentationType = {
  id?: string
  name?: string
  description?: string
  type?: string
  policies?: string[]
  resources?: string[]
  scopes?: string[]
  logic?: z.infer<typeof LogicSchema>
  decisionStrategy?: z.infer<typeof DecisionStrategySchema>
  owner?: string
  resourceType?: string
  resourcesData?: z.infer<typeof ResourceRepresentationSchema>[]
  scopesData?: z.infer<typeof ScopeRepresentationSchema>[]
  config?: { [key: string]: string }
}

const PolicyRepresentationSchema: z.ZodType<PolicyRepresentationType> = z
  .lazy(() =>
    z
      .object({
        id: z.string().exactOptional(),
        name: z.string().exactOptional(),
        description: z.string().exactOptional(),
        type: z.string().exactOptional(),
        policies: z
          .array(z.string())
          .superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          })
          .exactOptional(),
        resources: z
          .array(z.string())
          .superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          })
          .exactOptional(),
        scopes: z
          .array(z.string())
          .superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          })
          .exactOptional(),
        logic: LogicSchema.exactOptional(),
        decisionStrategy: DecisionStrategySchema.exactOptional(),
        owner: z.string().exactOptional(),
        resourceType: z.string().exactOptional(),
        resourcesData: z
          .array(ResourceRepresentationSchema)
          .superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          })
          .exactOptional(),
        scopesData: z
          .array(ScopeRepresentationSchema)
          .superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          })
          .exactOptional(),
        config: z.record(z.string(), z.string()).exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('PolicyRepresentation')

const DecisionEffectSchema = z.enum(['PERMIT', 'DENY']).openapi('DecisionEffect')

type PolicyResultRepresentationType = {
  policy?: z.infer<typeof PolicyRepresentationSchema>
  status?: z.infer<typeof DecisionEffectSchema>
  associatedPolicies?: PolicyResultRepresentationType[]
  scopes?: string[]
  resourceType?: string
}

type ResourceOwnerRepresentationType = { id?: string; name?: string }

const ResourceOwnerRepresentationSchema: z.ZodType<ResourceOwnerRepresentationType> = z
  .object({ id: z.string().exactOptional(), name: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('ResourceOwnerRepresentation')

type ResourceRepresentationType = {
  _id?: string
  name?: string
  uris?: string[]
  type?: string
  scopes?: z.infer<typeof ScopeRepresentationSchema>[]
  icon_uri?: string
  owner?: z.infer<typeof ResourceOwnerRepresentationSchema>
  ownerManagedAccess?: boolean
  displayName?: string
  attributes?: { [key: string]: string[] }
  uri?: string
  scopesUma?: z.infer<typeof ScopeRepresentationSchema>[]
}

type ScopeRepresentationType = {
  id?: string
  name?: string
  iconUri?: string
  policies?: z.infer<typeof PolicyRepresentationSchema>[]
  resources?: z.infer<typeof ResourceRepresentationSchema>[]
  displayName?: string
}

const AbstractPolicyRepresentationSchema = z
  .object({
    id: z.string().exactOptional(),
    name: z.string().exactOptional(),
    description: z.string().exactOptional(),
    type: z.string().exactOptional(),
    policies: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    resources: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    scopes: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    logic: LogicSchema.exactOptional(),
    decisionStrategy: DecisionStrategySchema.exactOptional(),
    owner: z.string().exactOptional(),
    resourceType: z.string().exactOptional(),
    resourcesData: z
      .array(ResourceRepresentationSchema)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    scopesData: z
      .array(ScopeRepresentationSchema)
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
  .openapi('AbstractPolicyRepresentation')

const AccessSchema = z
  .object({
    roles: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    verify_caller: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Access')

const PermissionSchema = z
  .object({
    rsid: z.string().exactOptional(),
    rsname: z.string().exactOptional(),
    scopes: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    claims: z
      .record(
        z.string(),
        z.array(z.string()).superRefine((items, ctx) => {
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
  .openapi('Permission')

const AuthorizationSchema = z
  .object({ permissions: z.array(PermissionSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('Authorization')

const ConfirmationSchema = z
  .object({
    'x5t#S256': z.string().exactOptional(),
    jkt: z.string().exactOptional(),
    'kc-jkt-type': z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Confirmation')

const AuthorizationDetailsJSONRepresentationSchema = z
  .object({
    type: z.string().exactOptional(),
    locations: z.array(z.string()).exactOptional(),
    actions: z.array(z.string()).exactOptional(),
    datatypes: z.array(z.string()).exactOptional(),
    identifier: z.string().exactOptional(),
    privileges: z.array(z.string()).exactOptional(),
    customData: z.record(z.string(), z.any()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AuthorizationDetailsJSONRepresentation')

const AccessTokenSchema = z
  .object({
    jti: z.string().exactOptional(),
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
    sub: z.string().exactOptional(),
    typ: z.string().exactOptional(),
    azp: z.string().exactOptional(),
    otherClaims: z.record(z.string(), z.any()).exactOptional(),
    nonce: z.string().exactOptional(),
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
    sid: z.string().exactOptional(),
    at_hash: z.string().exactOptional(),
    c_hash: z.string().exactOptional(),
    name: z.string().exactOptional(),
    given_name: z.string().exactOptional(),
    family_name: z.string().exactOptional(),
    middle_name: z.string().exactOptional(),
    nickname: z.string().exactOptional(),
    preferred_username: z.string().exactOptional(),
    profile: z.string().exactOptional(),
    picture: z.string().exactOptional(),
    website: z.string().exactOptional(),
    email: z.string().exactOptional(),
    email_verified: z.boolean().exactOptional(),
    gender: z.string().exactOptional(),
    birthdate: z.string().exactOptional(),
    zoneinfo: z.string().exactOptional(),
    locale: z.string().exactOptional(),
    phone_number: z.string().exactOptional(),
    phone_number_verified: z.boolean().exactOptional(),
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
    claims_locales: z.string().exactOptional(),
    acr: z.string().exactOptional(),
    s_hash: z.string().exactOptional(),
    'trusted-certs': z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    'allowed-origins': z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    realm_access: AccessSchema.exactOptional(),
    resource_access: z
      .record(z.string(), AccessSchema)
      .exactOptional()
      .openapi({ writeOnly: true }),
    authorization: AuthorizationSchema.exactOptional(),
    cnf: ConfirmationSchema.exactOptional(),
    scope: z.string().exactOptional(),
    authorization_details: z.array(AuthorizationDetailsJSONRepresentationSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AccessToken')

const AuthDetailsRepresentationSchema = z
  .object({
    realmId: z.string().exactOptional(),
    clientId: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    ipAddress: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AuthDetailsRepresentation')

const AdminEventRepresentationSchema = z
  .object({
    id: z.string().exactOptional(),
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
    realmId: z.string().exactOptional(),
    authDetails: AuthDetailsRepresentationSchema.exactOptional(),
    operationType: z.string().exactOptional(),
    resourceType: z.string().exactOptional(),
    resourcePath: z.string().exactOptional(),
    representation: z.string().exactOptional(),
    error: z.string().exactOptional(),
    details: z.record(z.string(), z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AdminEventRepresentation')

const ProtocolMapperRepresentationSchema = z
  .object({
    id: z.string().exactOptional(),
    name: z.string().exactOptional(),
    protocol: z.string().exactOptional(),
    protocolMapper: z.string().exactOptional(),
    consentRequired: z.boolean().exactOptional().openapi({ deprecated: true }),
    consentText: z.string().exactOptional().openapi({ deprecated: true }),
    config: z.record(z.string(), z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProtocolMapperRepresentation')

const PolicyEnforcementModeSchema = z
  .enum(['ENFORCING', 'PERMISSIVE', 'DISABLED'])
  .openapi('PolicyEnforcementMode')

const ResourceTypeSchema = z
  .object({
    type: z.string().exactOptional(),
    scopes: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    scopeAliases: z
      .record(
        z.string(),
        z.array(z.string()).superRefine((items, ctx) => {
          const seen = new Map()
          for (const [i, val] of items.entries()) {
            const key = JSON.stringify(val)
            if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
            else seen.set(key, i)
          }
        }),
      )
      .exactOptional(),
    groupType: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResourceType')

const AuthorizationSchemaSchema = z
  .object({ resourceTypes: z.record(z.string(), ResourceTypeSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('AuthorizationSchema')

const ResourceServerRepresentationSchema = z
  .object({
    id: z.string().exactOptional(),
    clientId: z.string().exactOptional(),
    name: z.string().exactOptional(),
    allowRemoteResourceManagement: z.boolean().exactOptional(),
    policyEnforcementMode: PolicyEnforcementModeSchema.exactOptional(),
    resources: z.array(ResourceRepresentationSchema).exactOptional(),
    policies: z.array(PolicyRepresentationSchema).exactOptional(),
    scopes: z.array(ScopeRepresentationSchema).exactOptional(),
    decisionStrategy: DecisionStrategySchema.exactOptional(),
    authorizationSchema: AuthorizationSchemaSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResourceServerRepresentation')

const ClaimRepresentationSchema = z
  .object({
    name: z.boolean().exactOptional(),
    username: z.boolean().exactOptional(),
    profile: z.boolean().exactOptional(),
    picture: z.boolean().exactOptional(),
    website: z.boolean().exactOptional(),
    email: z.boolean().exactOptional(),
    gender: z.boolean().exactOptional(),
    locale: z.boolean().exactOptional(),
    address: z.boolean().exactOptional(),
    phone: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ClaimRepresentation')

const ApplicationRepresentationSchema = z
  .object({
    id: z.string().exactOptional(),
    clientId: z.string().exactOptional(),
    description: z.string().exactOptional(),
    type: z.string().exactOptional(),
    rootUrl: z.string().exactOptional(),
    adminUrl: z.string().exactOptional(),
    baseUrl: z.string().exactOptional(),
    surrogateAuthRequired: z.boolean().exactOptional(),
    enabled: z.boolean().exactOptional(),
    alwaysDisplayInConsole: z.boolean().exactOptional(),
    clientAuthenticatorType: z.string().exactOptional(),
    secret: z.string().exactOptional(),
    registrationAccessToken: z.string().exactOptional(),
    defaultRoles: z.array(z.string()).exactOptional().openapi({ deprecated: true }),
    redirectUris: z.array(z.string()).exactOptional(),
    webOrigins: z.array(z.string()).exactOptional(),
    notBefore: z.int32().exactOptional(),
    bearerOnly: z.boolean().exactOptional(),
    consentRequired: z.boolean().exactOptional(),
    standardFlowEnabled: z.boolean().exactOptional(),
    implicitFlowEnabled: z.boolean().exactOptional(),
    directAccessGrantsEnabled: z.boolean().exactOptional(),
    serviceAccountsEnabled: z.boolean().exactOptional(),
    authorizationServicesEnabled: z.boolean().exactOptional(),
    directGrantsOnly: z.boolean().exactOptional().openapi({ deprecated: true }),
    publicClient: z.boolean().exactOptional(),
    frontchannelLogout: z.boolean().exactOptional(),
    protocol: z.string().exactOptional(),
    attributes: z.record(z.string(), z.string()).exactOptional(),
    authenticationFlowBindingOverrides: z.record(z.string(), z.string()).exactOptional(),
    fullScopeAllowed: z.boolean().exactOptional(),
    nodeReRegistrationTimeout: z.int32().exactOptional(),
    registeredNodes: z.record(z.string(), z.int32()).exactOptional(),
    protocolMappers: z.array(ProtocolMapperRepresentationSchema).exactOptional(),
    clientTemplate: z.string().exactOptional().openapi({ deprecated: true }),
    useTemplateConfig: z.boolean().exactOptional().openapi({ deprecated: true }),
    useTemplateScope: z.boolean().exactOptional().openapi({ deprecated: true }),
    useTemplateMappers: z.boolean().exactOptional().openapi({ deprecated: true }),
    defaultClientScopes: z.array(z.string()).exactOptional(),
    optionalClientScopes: z.array(z.string()).exactOptional(),
    authorizationSettings: ResourceServerRepresentationSchema.exactOptional(),
    access: z.record(z.string(), z.boolean()).exactOptional(),
    origin: z.string().exactOptional(),
    name: z.string().exactOptional(),
    claims: ClaimRepresentationSchema.exactOptional().openapi({ deprecated: true }),
  })
  .openapi({ deprecated: true, required: [] })
  .openapi('ApplicationRepresentation')

const AuthenticationExecutionExportRepresentationSchema = z
  .object({
    authenticatorConfig: z.string().exactOptional(),
    authenticator: z.string().exactOptional(),
    authenticatorFlow: z.boolean().exactOptional(),
    requirement: z.string().exactOptional(),
    priority: z.int32().exactOptional(),
    autheticatorFlow: z.boolean().exactOptional().openapi({ deprecated: true }),
    flowAlias: z.string().exactOptional(),
    userSetupAllowed: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AuthenticationExecutionExportRepresentation')

const AuthenticationExecutionInfoRepresentationSchema = z
  .object({
    id: z.string().exactOptional(),
    requirement: z.string().exactOptional(),
    displayName: z.string().exactOptional(),
    alias: z.string().exactOptional(),
    description: z.string().exactOptional(),
    requirementChoices: z.array(z.string()).exactOptional(),
    configurable: z.boolean().exactOptional(),
    authenticationFlow: z.boolean().exactOptional(),
    providerId: z.string().exactOptional(),
    authenticationConfig: z.string().exactOptional(),
    flowId: z.string().exactOptional(),
    level: z.int32().exactOptional(),
    index: z.int32().exactOptional(),
    priority: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AuthenticationExecutionInfoRepresentation')

const AuthenticationExecutionRepresentationSchema = z
  .object({
    authenticatorConfig: z.string().exactOptional(),
    authenticator: z.string().exactOptional(),
    authenticatorFlow: z.boolean().exactOptional(),
    requirement: z.string().exactOptional(),
    priority: z.int32().exactOptional(),
    autheticatorFlow: z.boolean().exactOptional().openapi({ deprecated: true }),
    id: z.string().exactOptional(),
    flowId: z.string().exactOptional(),
    parentFlow: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AuthenticationExecutionRepresentation')

const AuthenticationFlowRepresentationSchema = z
  .object({
    id: z.string().exactOptional(),
    alias: z.string().exactOptional(),
    description: z.string().exactOptional(),
    providerId: z.string().exactOptional(),
    topLevel: z.boolean().exactOptional(),
    builtIn: z.boolean().exactOptional(),
    authenticationExecutions: z
      .array(AuthenticationExecutionExportRepresentationSchema)
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AuthenticationFlowRepresentation')

const ConfigPropertyRepresentationSchema = z
  .object({
    name: z.string().exactOptional(),
    label: z.string().exactOptional(),
    helpText: z.string().exactOptional(),
    type: z.string().exactOptional(),
    defaultValue: z.any().exactOptional(),
    options: z.array(z.string()).exactOptional(),
    secret: z.boolean().exactOptional(),
    required: z.boolean().exactOptional(),
    readOnly: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ConfigPropertyRepresentation')

const AuthenticatorConfigInfoRepresentationSchema = z
  .object({
    name: z.string().exactOptional(),
    providerId: z.string().exactOptional(),
    helpText: z.string().exactOptional(),
    properties: z.array(ConfigPropertyRepresentationSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AuthenticatorConfigInfoRepresentation')

const AuthenticatorConfigRepresentationSchema = z
  .object({
    id: z.string().exactOptional(),
    alias: z.string().exactOptional(),
    config: z.record(z.string(), z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AuthenticatorConfigRepresentation')

const BruteForceStrategySchema = z.enum(['LINEAR', 'MULTIPLE']).openapi('BruteForceStrategy')

const CertificateRepresentationSchema = z
  .object({
    privateKey: z.string().exactOptional(),
    publicKey: z.string().exactOptional(),
    certificate: z.string().exactOptional(),
    kid: z.string().exactOptional(),
    jwks: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CertificateRepresentation')

const ClientInitialAccessCreatePresentationSchema = z
  .object({
    expiration: z.int32().exactOptional(),
    count: z.int32().exactOptional(),
    webOrigins: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ClientInitialAccessCreatePresentation')

const ClientInitialAccessPresentationSchema = z
  .object({
    id: z.string().exactOptional(),
    token: z.string().exactOptional(),
    timestamp: z.int32().exactOptional(),
    expiration: z.int32().exactOptional(),
    count: z.int32().exactOptional(),
    remainingCount: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ClientInitialAccessPresentation')

const RawJsonValueSchema = z
  .object({ value: z.any().exactOptional(), empty: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('RawJsonValue')

const ClientPolicyConditionRepresentationSchema = z
  .object({
    condition: z.string().exactOptional(),
    configuration: RawJsonValueSchema.exactOptional().openapi({
      description: 'Configuration settings as a JSON object',
    }),
  })
  .openapi({ required: [] })
  .openapi('ClientPolicyConditionRepresentation')

const ClientPolicyRepresentationSchema = z
  .object({
    name: z.string().exactOptional(),
    description: z.string().exactOptional(),
    enabled: z.boolean().exactOptional(),
    mode: z.string().exactOptional(),
    conditions: z.array(ClientPolicyConditionRepresentationSchema).exactOptional(),
    profiles: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ClientPolicyRepresentation')

const ClientPoliciesRepresentationSchema = z
  .object({
    policies: z.array(ClientPolicyRepresentationSchema).exactOptional(),
    globalPolicies: z.array(ClientPolicyRepresentationSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ClientPoliciesRepresentation')

const ClientPolicyExecutorRepresentationSchema = z
  .object({
    executor: z.string().exactOptional(),
    configuration: RawJsonValueSchema.exactOptional().openapi({
      description: 'Configuration settings as a JSON object',
    }),
  })
  .openapi({ required: [] })
  .openapi('ClientPolicyExecutorRepresentation')

const ClientProfileRepresentationSchema = z
  .object({
    name: z.string().exactOptional(),
    description: z.string().exactOptional(),
    executors: z.array(ClientPolicyExecutorRepresentationSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ClientProfileRepresentation')

const ClientProfilesRepresentationSchema = z
  .object({
    profiles: z.array(ClientProfileRepresentationSchema).exactOptional(),
    globalProfiles: z.array(ClientProfileRepresentationSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ClientProfilesRepresentation')

const ClientRepresentationSchema = z
  .object({
    id: z.string().exactOptional(),
    clientId: z.string().exactOptional(),
    name: z.string().exactOptional(),
    description: z.string().exactOptional(),
    type: z.string().exactOptional(),
    rootUrl: z.string().exactOptional(),
    adminUrl: z.string().exactOptional(),
    baseUrl: z.string().exactOptional(),
    surrogateAuthRequired: z.boolean().exactOptional(),
    enabled: z.boolean().exactOptional(),
    alwaysDisplayInConsole: z.boolean().exactOptional(),
    clientAuthenticatorType: z.string().exactOptional(),
    secret: z.string().exactOptional(),
    registrationAccessToken: z.string().exactOptional(),
    defaultRoles: z.array(z.string()).exactOptional().openapi({ deprecated: true }),
    redirectUris: z.array(z.string()).exactOptional(),
    webOrigins: z.array(z.string()).exactOptional(),
    notBefore: z.int32().exactOptional(),
    bearerOnly: z.boolean().exactOptional(),
    consentRequired: z.boolean().exactOptional(),
    standardFlowEnabled: z.boolean().exactOptional(),
    implicitFlowEnabled: z.boolean().exactOptional(),
    directAccessGrantsEnabled: z.boolean().exactOptional(),
    serviceAccountsEnabled: z.boolean().exactOptional(),
    authorizationServicesEnabled: z.boolean().exactOptional(),
    directGrantsOnly: z.boolean().exactOptional().openapi({ deprecated: true }),
    publicClient: z.boolean().exactOptional(),
    frontchannelLogout: z.boolean().exactOptional(),
    protocol: z.string().exactOptional(),
    attributes: z.record(z.string(), z.string()).exactOptional(),
    authenticationFlowBindingOverrides: z.record(z.string(), z.string()).exactOptional(),
    fullScopeAllowed: z.boolean().exactOptional(),
    nodeReRegistrationTimeout: z.int32().exactOptional(),
    registeredNodes: z.record(z.string(), z.int32()).exactOptional(),
    protocolMappers: z.array(ProtocolMapperRepresentationSchema).exactOptional(),
    clientTemplate: z.string().exactOptional().openapi({ deprecated: true }),
    useTemplateConfig: z.boolean().exactOptional().openapi({ deprecated: true }),
    useTemplateScope: z.boolean().exactOptional().openapi({ deprecated: true }),
    useTemplateMappers: z.boolean().exactOptional().openapi({ deprecated: true }),
    defaultClientScopes: z.array(z.string()).exactOptional(),
    optionalClientScopes: z.array(z.string()).exactOptional(),
    authorizationSettings: ResourceServerRepresentationSchema.exactOptional(),
    access: z.record(z.string(), z.boolean()).exactOptional(),
    origin: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ClientRepresentation')

const ClientScopeRepresentationSchema = z
  .object({
    id: z.string().exactOptional(),
    name: z.string().exactOptional(),
    description: z.string().exactOptional(),
    protocol: z.string().exactOptional(),
    attributes: z.record(z.string(), z.string()).exactOptional(),
    protocolMappers: z.array(ProtocolMapperRepresentationSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ClientScopeRepresentation')

const ClientTemplateRepresentationSchema = z
  .object({
    id: z.string().exactOptional(),
    name: z.string().exactOptional(),
    description: z.string().exactOptional(),
    protocol: z.string().exactOptional(),
    fullScopeAllowed: z.boolean().exactOptional(),
    bearerOnly: z.boolean().exactOptional(),
    consentRequired: z.boolean().exactOptional(),
    standardFlowEnabled: z.boolean().exactOptional(),
    implicitFlowEnabled: z.boolean().exactOptional(),
    directAccessGrantsEnabled: z.boolean().exactOptional(),
    serviceAccountsEnabled: z.boolean().exactOptional(),
    publicClient: z.boolean().exactOptional(),
    frontchannelLogout: z.boolean().exactOptional(),
    attributes: z.record(z.string(), z.string()).exactOptional(),
    protocolMappers: z.array(ProtocolMapperRepresentationSchema).exactOptional(),
  })
  .openapi({ deprecated: true, required: [] })
  .openapi('ClientTemplateRepresentation')

const PropertyConfigSchema = z
  .object({ applicable: z.boolean().exactOptional(), value: z.any().exactOptional() })
  .openapi({ required: [] })
  .openapi('PropertyConfig')

const ClientTypeRepresentationSchema = z
  .object({
    name: z.string().exactOptional(),
    provider: z.string().exactOptional(),
    parent: z.string().exactOptional(),
    config: z.record(z.string(), PropertyConfigSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ClientTypeRepresentation')

const ClientTypesRepresentationSchema = z
  .object({
    'client-types': z.array(ClientTypeRepresentationSchema).exactOptional(),
    'global-client-types': z.array(ClientTypeRepresentationSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ClientTypesRepresentation')

const ComponentRepresentationSchema = z
  .object({
    id: z.string().exactOptional(),
    name: z.string().exactOptional(),
    providerId: z.string().exactOptional(),
    providerType: z.string().exactOptional(),
    parentId: z.string().exactOptional(),
    subType: z.string().exactOptional(),
    config: MultivaluedHashMapStringStringSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ComponentRepresentation')

const ComponentTypeRepresentationSchema = z
  .object({
    id: z.string().exactOptional(),
    helpText: z.string().exactOptional(),
    properties: z.array(ConfigPropertyRepresentationSchema).exactOptional(),
    clientProperties: z.array(ConfigPropertyRepresentationSchema).exactOptional(),
    metadata: z.record(z.string(), z.any()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ComponentTypeRepresentation')

const CredentialRepresentationSchema = z
  .object({
    id: z.string().exactOptional(),
    type: z.string().exactOptional(),
    userLabel: z.string().exactOptional(),
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
    secretData: z.string().exactOptional(),
    credentialData: z.string().exactOptional(),
    priority: z.int32().exactOptional(),
    value: z.string().exactOptional(),
    temporary: z.boolean().exactOptional(),
    device: z.string().exactOptional().openapi({ deprecated: true }),
    hashedSaltedValue: z.string().exactOptional().openapi({ deprecated: true }),
    salt: z.string().exactOptional().openapi({ deprecated: true }),
    hashIterations: z.int32().exactOptional().openapi({ deprecated: true }),
    counter: z.int32().exactOptional().openapi({ deprecated: true }),
    algorithm: z.string().exactOptional().openapi({ deprecated: true }),
    digits: z.int32().exactOptional().openapi({ deprecated: true }),
    period: z.int32().exactOptional().openapi({ deprecated: true }),
    config: MultivaluedHashMapStringStringSchema.exactOptional().openapi({ deprecated: true }),
    federationLink: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CredentialRepresentation')

const ErrorRepresentationSchema: z.ZodType<ErrorRepresentationType> = z
  .lazy(() =>
    z
      .object({
        field: z.string().exactOptional(),
        errorMessage: z.string().exactOptional(),
        params: z.array(z.any()).exactOptional(),
        errors: z.array(ErrorRepresentationSchema).exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('ErrorRepresentation')

const PolicyResultRepresentationSchema: z.ZodType<PolicyResultRepresentationType> = z
  .lazy(() =>
    z
      .object({
        policy: PolicyRepresentationSchema.exactOptional(),
        status: DecisionEffectSchema.exactOptional(),
        associatedPolicies: z.array(PolicyResultRepresentationSchema).exactOptional(),
        scopes: z
          .array(z.string())
          .superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          })
          .exactOptional(),
        resourceType: z.string().exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('PolicyResultRepresentation')

const EvaluationResultRepresentationSchema = z
  .object({
    resource: ResourceRepresentationSchema.exactOptional(),
    scopes: z.array(ScopeRepresentationSchema).exactOptional(),
    policies: z
      .array(PolicyResultRepresentationSchema)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    status: DecisionEffectSchema.exactOptional(),
    allowedScopes: z
      .array(ScopeRepresentationSchema)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    deniedScopes: z
      .array(ScopeRepresentationSchema)
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
  .openapi('EvaluationResultRepresentation')

const EventRepresentationSchema = z
  .object({
    id: z.string().exactOptional(),
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
    realmId: z.string().exactOptional(),
    clientId: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    sessionId: z.string().exactOptional(),
    ipAddress: z.string().exactOptional(),
    error: z.string().exactOptional(),
    details: z.record(z.string(), z.string()).exactOptional(),
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
    successRequests: z.array(z.string()).exactOptional(),
    failedRequests: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GlobalRequestResult')

const GroupRepresentationSchema: z.ZodType<GroupRepresentationType> = z
  .lazy(() =>
    z
      .object({
        id: z.string().exactOptional(),
        name: z.string().exactOptional(),
        description: z.string().exactOptional(),
        path: z.string().exactOptional(),
        parentId: z.string().exactOptional(),
        subGroupCount: z
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
        subGroups: z.array(GroupRepresentationSchema).exactOptional(),
        attributes: z.record(z.string(), z.array(z.string())).exactOptional(),
        realmRoles: z.array(z.string()).exactOptional(),
        clientRoles: z.record(z.string(), z.array(z.string())).exactOptional(),
        access: z.record(z.string(), z.boolean()).exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('GroupRepresentation')

const IDTokenSchema = z
  .object({
    jti: z.string().exactOptional(),
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
    sub: z.string().exactOptional(),
    typ: z.string().exactOptional(),
    azp: z.string().exactOptional(),
    otherClaims: z.record(z.string(), z.any()).exactOptional(),
    nonce: z.string().exactOptional(),
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
    sid: z.string().exactOptional(),
    at_hash: z.string().exactOptional(),
    c_hash: z.string().exactOptional(),
    name: z.string().exactOptional(),
    given_name: z.string().exactOptional(),
    family_name: z.string().exactOptional(),
    middle_name: z.string().exactOptional(),
    nickname: z.string().exactOptional(),
    preferred_username: z.string().exactOptional(),
    profile: z.string().exactOptional(),
    picture: z.string().exactOptional(),
    website: z.string().exactOptional(),
    email: z.string().exactOptional(),
    email_verified: z.boolean().exactOptional(),
    gender: z.string().exactOptional(),
    birthdate: z.string().exactOptional(),
    zoneinfo: z.string().exactOptional(),
    locale: z.string().exactOptional(),
    phone_number: z.string().exactOptional(),
    phone_number_verified: z.boolean().exactOptional(),
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
    claims_locales: z.string().exactOptional(),
    acr: z.string().exactOptional(),
    s_hash: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('IDToken')

const IdentityProviderMapperRepresentationSchema = z
  .object({
    id: z.string().exactOptional(),
    name: z.string().exactOptional(),
    identityProviderAlias: z.string().exactOptional(),
    identityProviderMapper: z.string().exactOptional(),
    config: z.record(z.string(), z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('IdentityProviderMapperRepresentation')

const IdentityProviderMapperTypeRepresentationSchema = z
  .object({
    id: z.string().exactOptional(),
    name: z.string().exactOptional(),
    category: z.string().exactOptional(),
    helpText: z.string().exactOptional(),
    properties: z.array(ConfigPropertyRepresentationSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('IdentityProviderMapperTypeRepresentation')

const OrganizationIdentityProviderLinkRepresentationSchema = z
  .object({
    organizationId: z.string().exactOptional(),
    autoMembership: z.boolean().exactOptional(),
    membershipType: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OrganizationIdentityProviderLinkRepresentation')

const IdentityProviderRepresentationSchema = z
  .object({
    alias: z.string().exactOptional(),
    displayName: z.string().exactOptional(),
    internalId: z.string().exactOptional(),
    providerId: z.string().exactOptional(),
    enabled: z.boolean().exactOptional(),
    updateProfileFirstLoginMode: z.string().exactOptional().openapi({ deprecated: true }),
    trustEmail: z.boolean().exactOptional(),
    storeToken: z.boolean().exactOptional(),
    addReadTokenRoleOnCreate: z.boolean().exactOptional(),
    authenticateByDefault: z.boolean().exactOptional(),
    linkOnly: z.boolean().exactOptional(),
    hideOnLogin: z.boolean().exactOptional(),
    firstBrokerLoginFlowAlias: z.string().exactOptional(),
    postBrokerLoginFlowAlias: z.string().exactOptional(),
    organizationLinks: z
      .array(OrganizationIdentityProviderLinkRepresentationSchema)
      .exactOptional(),
    config: z.record(z.string(), z.string()).exactOptional(),
    types: z.array(z.string()).exactOptional(),
    updateProfileFirstLogin: z.boolean().exactOptional().openapi({ deprecated: true }),
    organizationId: z.string().exactOptional().openapi({ writeOnly: true, deprecated: true }),
  })
  .openapi({ required: [] })
  .openapi('IdentityProviderRepresentation')

const IssuedVerifiableCredentialRepresentationSchema = z
  .object({
    id: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    credentialType: z.string().exactOptional(),
    issuedAt: z
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
    expiresAt: z
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
    clientId: z.string().exactOptional(),
    clientName: z.string().exactOptional(),
    clientBaseUrl: z.string().exactOptional(),
    revision: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('IssuedVerifiableCredentialRepresentation')

const KeyUseSchema = z.enum(['SIG', 'ENC', 'JWT_SVID']).openapi('KeyUse')

const KeyMetadataRepresentationSchema = z
  .object({
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
    kid: z.string().exactOptional(),
    status: z.string().exactOptional(),
    type: z.string().exactOptional(),
    algorithm: z.string().exactOptional(),
    publicKey: z.string().exactOptional(),
    certificate: z.string().exactOptional(),
    use: KeyUseSchema.exactOptional(),
    validTo: z
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
  .openapi('KeyMetadataRepresentation')

const KeyStoreConfigSchema = z
  .object({
    realmCertificate: z.boolean().exactOptional(),
    storePassword: z.string().exactOptional(),
    keyPassword: z.string().exactOptional(),
    keyAlias: z.string().exactOptional(),
    realmAlias: z.string().exactOptional(),
    format: z.string().exactOptional(),
    keySize: z.int32().exactOptional(),
    validity: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('KeyStoreConfig')

const KeysMetadataRepresentationSchema = z
  .object({
    active: z.record(z.string(), z.string()).exactOptional(),
    keys: z.array(KeyMetadataRepresentationSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('KeysMetadataRepresentation')

const ManagementPermissionReferenceSchema = z
  .object({
    enabled: z.boolean().exactOptional(),
    resource: z.string().exactOptional(),
    scopePermissions: z.record(z.string(), z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ManagementPermissionReference')

const MappingsRepresentationSchema: z.ZodType<MappingsRepresentationType> = z
  .lazy(() =>
    z
      .object({
        realmMappings: z.array(RoleRepresentationSchema).exactOptional(),
        clientMappings: z.record(z.string(), ClientMappingsRepresentationSchema).exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('MappingsRepresentation')

const UserProfileAttributeMetadataSchema = z
  .object({
    name: z.string().exactOptional(),
    displayName: z.string().exactOptional(),
    required: z.boolean().exactOptional(),
    readOnly: z.boolean().exactOptional(),
    annotations: z.record(z.string(), z.any()).exactOptional(),
    validators: z.record(z.string(), z.record(z.string(), z.any())).exactOptional(),
    group: z.string().exactOptional(),
    multivalued: z.boolean().exactOptional(),
    defaultValue: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserProfileAttributeMetadata')

const UserProfileAttributeGroupMetadataSchema = z
  .object({
    name: z.string().exactOptional(),
    displayHeader: z.string().exactOptional(),
    displayDescription: z.string().exactOptional(),
    annotations: z.record(z.string(), z.any()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserProfileAttributeGroupMetadata')

const UserProfileMetadataSchema = z
  .object({
    attributes: z.array(UserProfileAttributeMetadataSchema).exactOptional(),
    groups: z.array(UserProfileAttributeGroupMetadataSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserProfileMetadata')

const UserConsentRepresentationSchema = z
  .object({
    clientId: z.string().exactOptional(),
    grantedClientScopes: z.array(z.string()).exactOptional(),
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
    grantedRealmRoles: z.array(z.string()).exactOptional().openapi({ deprecated: true }),
  })
  .openapi({ required: [] })
  .openapi('UserConsentRepresentation')

const UserVerifiableCredentialRepresentationSchema = z
  .object({
    credentialScopeName: z.string().exactOptional(),
    credentialConfigurationId: z.string().exactOptional(),
    revision: z.string().exactOptional(),
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
    updatedDate: z
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
    userAttributes: z.record(z.string(), z.array(z.string())).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserVerifiableCredentialRepresentation')

const SocialLinkRepresentationSchema = z
  .object({
    socialProvider: z.string().exactOptional(),
    socialUserId: z.string().exactOptional(),
    socialUsername: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SocialLinkRepresentation')

const MembershipTypeSchema = z.enum(['UNMANAGED', 'MANAGED']).openapi('MembershipType')

const MemberRepresentationSchema = z
  .object({
    id: z.string().exactOptional(),
    username: z.string().exactOptional(),
    firstName: z.string().exactOptional(),
    lastName: z.string().exactOptional(),
    email: z.string().exactOptional(),
    emailVerified: z.boolean().exactOptional(),
    attributes: z.record(z.string(), z.array(z.string())).exactOptional(),
    userProfileMetadata: UserProfileMetadataSchema.exactOptional(),
    enabled: z.boolean().exactOptional(),
    self: z.string().exactOptional(),
    origin: z.string().exactOptional(),
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
    totp: z.boolean().exactOptional(),
    federationLink: z.string().exactOptional(),
    serviceAccountClientId: z.string().exactOptional(),
    credentials: z.array(CredentialRepresentationSchema).exactOptional(),
    disableableCredentialTypes: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    requiredActions: z.array(z.string()).exactOptional(),
    federatedIdentities: z.array(FederatedIdentityRepresentationSchema).exactOptional(),
    realmRoles: z.array(z.string()).exactOptional(),
    clientRoles: z.record(z.string(), z.array(z.string())).exactOptional(),
    clientConsents: z.array(UserConsentRepresentationSchema).exactOptional(),
    notBefore: z.int32().exactOptional(),
    verifiableCredentials: z.array(UserVerifiableCredentialRepresentationSchema).exactOptional(),
    issuedVerifiableCredentials: z
      .array(IssuedVerifiableCredentialRepresentationSchema)
      .exactOptional(),
    applicationRoles: z
      .record(z.string(), z.array(z.string()))
      .exactOptional()
      .openapi({ deprecated: true }),
    socialLinks: z
      .array(SocialLinkRepresentationSchema)
      .exactOptional()
      .openapi({ deprecated: true }),
    groups: z.array(z.string()).exactOptional(),
    access: z.record(z.string(), z.boolean()).exactOptional(),
    membershipType: MembershipTypeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MemberRepresentation')

const OAuthClientRepresentationSchema = z
  .object({
    id: z.string().exactOptional(),
    clientId: z.string().exactOptional(),
    description: z.string().exactOptional(),
    type: z.string().exactOptional(),
    rootUrl: z.string().exactOptional(),
    adminUrl: z.string().exactOptional(),
    baseUrl: z.string().exactOptional(),
    surrogateAuthRequired: z.boolean().exactOptional(),
    enabled: z.boolean().exactOptional(),
    alwaysDisplayInConsole: z.boolean().exactOptional(),
    clientAuthenticatorType: z.string().exactOptional(),
    secret: z.string().exactOptional(),
    registrationAccessToken: z.string().exactOptional(),
    defaultRoles: z.array(z.string()).exactOptional().openapi({ deprecated: true }),
    redirectUris: z.array(z.string()).exactOptional(),
    webOrigins: z.array(z.string()).exactOptional(),
    notBefore: z.int32().exactOptional(),
    bearerOnly: z.boolean().exactOptional(),
    consentRequired: z.boolean().exactOptional(),
    standardFlowEnabled: z.boolean().exactOptional(),
    implicitFlowEnabled: z.boolean().exactOptional(),
    directAccessGrantsEnabled: z.boolean().exactOptional(),
    serviceAccountsEnabled: z.boolean().exactOptional(),
    authorizationServicesEnabled: z.boolean().exactOptional(),
    directGrantsOnly: z.boolean().exactOptional().openapi({ deprecated: true }),
    publicClient: z.boolean().exactOptional(),
    frontchannelLogout: z.boolean().exactOptional(),
    protocol: z.string().exactOptional(),
    attributes: z.record(z.string(), z.string()).exactOptional(),
    authenticationFlowBindingOverrides: z.record(z.string(), z.string()).exactOptional(),
    fullScopeAllowed: z.boolean().exactOptional(),
    nodeReRegistrationTimeout: z.int32().exactOptional(),
    registeredNodes: z.record(z.string(), z.int32()).exactOptional(),
    protocolMappers: z.array(ProtocolMapperRepresentationSchema).exactOptional(),
    clientTemplate: z.string().exactOptional().openapi({ deprecated: true }),
    useTemplateConfig: z.boolean().exactOptional().openapi({ deprecated: true }),
    useTemplateScope: z.boolean().exactOptional().openapi({ deprecated: true }),
    useTemplateMappers: z.boolean().exactOptional().openapi({ deprecated: true }),
    defaultClientScopes: z.array(z.string()).exactOptional(),
    optionalClientScopes: z.array(z.string()).exactOptional(),
    authorizationSettings: ResourceServerRepresentationSchema.exactOptional(),
    access: z.record(z.string(), z.boolean()).exactOptional(),
    origin: z.string().exactOptional(),
    name: z.string().exactOptional(),
    claims: ClaimRepresentationSchema.exactOptional().openapi({ deprecated: true }),
  })
  .openapi({ deprecated: true, required: [] })
  .openapi('OAuthClientRepresentation')

const OrganizationDomainRepresentationSchema = z
  .object({
    name: z.string().exactOptional(),
    verified: z.boolean().exactOptional(),
    identityProviderAlias: z.string().exactOptional(),
    autoRedirect: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OrganizationDomainRepresentation')

const StatusSchema = z.enum(['PENDING', 'EXPIRED']).openapi('Status')

const OrganizationInvitationRepresentationSchema = z
  .object({
    id: z.string().exactOptional(),
    organizationId: z.string().exactOptional(),
    email: z.string().exactOptional(),
    firstName: z.string().exactOptional(),
    lastName: z.string().exactOptional(),
    sentDate: z.int32().exactOptional(),
    expiresAt: z.int32().exactOptional(),
    status: StatusSchema.exactOptional(),
    inviteLink: z.string().exactOptional().openapi({ deprecated: true }),
  })
  .openapi({ required: [] })
  .openapi('OrganizationInvitationRepresentation')

const OrganizationRepresentationSchema = z
  .object({
    id: z.string().exactOptional(),
    name: z.string().exactOptional(),
    alias: z.string().exactOptional(),
    enabled: z.boolean().exactOptional(),
    description: z.string().exactOptional(),
    redirectUrl: z.string().exactOptional(),
    attributes: z.record(z.string(), z.array(z.string())).exactOptional(),
    domains: z
      .array(OrganizationDomainRepresentationSchema)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    members: z.array(MemberRepresentationSchema).exactOptional(),
    identityProviders: z.array(IdentityProviderRepresentationSchema).exactOptional(),
    groups: z.array(GroupRepresentationSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OrganizationRepresentation')

const PolicyEvaluationRequestSchema = z
  .object({
    context: z.record(z.string(), z.record(z.string(), z.string())).exactOptional(),
    resources: z.array(ResourceRepresentationSchema).exactOptional(),
    resourceType: z.string().exactOptional(),
    clientId: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    roleIds: z.array(z.string()).exactOptional(),
    entitlements: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PolicyEvaluationRequest')

const PolicyEvaluationResponseSchema = z
  .object({
    results: z.array(EvaluationResultRepresentationSchema).exactOptional(),
    entitlements: z.boolean().exactOptional(),
    status: DecisionEffectSchema.exactOptional(),
    rpt: AccessTokenSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PolicyEvaluationResponse')

const PolicyProviderRepresentationSchema = z
  .object({
    type: z.string().exactOptional(),
    name: z.string().exactOptional(),
    group: z.string().exactOptional(),
    description: z.string().exactOptional(),
    code: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PolicyProviderRepresentation')

const ProtocolMapperEvaluationRepresentationSchema = z
  .object({
    mapperId: z.string().exactOptional(),
    mapperName: z.string().exactOptional(),
    containerId: z.string().exactOptional(),
    containerName: z.string().exactOptional(),
    containerType: z.string().exactOptional(),
    protocolMapper: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProtocolMapperEvaluationRepresentation')

const PublishedRealmRepresentationSchema = z
  .object({
    realm: z.string().exactOptional(),
    public_key: z.string().exactOptional(),
    'token-service': z.string().exactOptional(),
    'account-service': z.string().exactOptional(),
    'tokens-not-before': z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PublishedRealmRepresentation')

const RealmEventsConfigRepresentationSchema = z
  .object({
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
    enabledEventTypes: z.array(z.string()).exactOptional(),
    adminEventsEnabled: z.boolean().exactOptional(),
    adminEventsDetailsEnabled: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RealmEventsConfigRepresentation')

const RolesRepresentationSchema = z
  .object({
    realm: z.array(RoleRepresentationSchema).exactOptional(),
    client: z.record(z.string(), z.array(RoleRepresentationSchema)).exactOptional(),
    application: z
      .record(z.string(), z.array(RoleRepresentationSchema))
      .exactOptional()
      .openapi({ deprecated: true }),
  })
  .openapi({ required: [] })
  .openapi('RolesRepresentation')

const UserRepresentationSchema = z
  .object({
    id: z.string().exactOptional(),
    username: z.string().exactOptional(),
    firstName: z.string().exactOptional(),
    lastName: z.string().exactOptional(),
    email: z.string().exactOptional(),
    emailVerified: z.boolean().exactOptional(),
    attributes: z.record(z.string(), z.array(z.string())).exactOptional(),
    userProfileMetadata: UserProfileMetadataSchema.exactOptional(),
    enabled: z.boolean().exactOptional(),
    self: z.string().exactOptional(),
    origin: z.string().exactOptional(),
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
    totp: z.boolean().exactOptional(),
    federationLink: z.string().exactOptional(),
    serviceAccountClientId: z.string().exactOptional(),
    credentials: z.array(CredentialRepresentationSchema).exactOptional(),
    disableableCredentialTypes: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    requiredActions: z.array(z.string()).exactOptional(),
    federatedIdentities: z.array(FederatedIdentityRepresentationSchema).exactOptional(),
    realmRoles: z.array(z.string()).exactOptional(),
    clientRoles: z.record(z.string(), z.array(z.string())).exactOptional(),
    clientConsents: z.array(UserConsentRepresentationSchema).exactOptional(),
    notBefore: z.int32().exactOptional(),
    verifiableCredentials: z.array(UserVerifiableCredentialRepresentationSchema).exactOptional(),
    issuedVerifiableCredentials: z
      .array(IssuedVerifiableCredentialRepresentationSchema)
      .exactOptional(),
    applicationRoles: z
      .record(z.string(), z.array(z.string()))
      .exactOptional()
      .openapi({ deprecated: true }),
    socialLinks: z
      .array(SocialLinkRepresentationSchema)
      .exactOptional()
      .openapi({ deprecated: true }),
    groups: z.array(z.string()).exactOptional(),
    access: z.record(z.string(), z.boolean()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserRepresentation')

const ScopeMappingRepresentationSchema = z
  .object({
    self: z.string().exactOptional(),
    client: z.string().exactOptional(),
    clientTemplate: z.string().exactOptional().openapi({ deprecated: true }),
    clientScope: z.string().exactOptional(),
    roles: z
      .array(z.string())
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
  .openapi('ScopeMappingRepresentation')

const UserFederationProviderRepresentationSchema = z
  .object({
    id: z.string().exactOptional(),
    displayName: z.string().exactOptional(),
    providerName: z.string().exactOptional(),
    config: z.record(z.string(), z.string()).exactOptional(),
    priority: z.int32().exactOptional(),
    fullSyncPeriod: z.int32().exactOptional(),
    changedSyncPeriod: z.int32().exactOptional(),
    lastSync: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserFederationProviderRepresentation')

const UserFederationMapperRepresentationSchema = z
  .object({
    id: z.string().exactOptional(),
    name: z.string().exactOptional(),
    federationProviderDisplayName: z.string().exactOptional(),
    federationMapperType: z.string().exactOptional(),
    config: z.record(z.string(), z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserFederationMapperRepresentation')

const RequiredActionProviderRepresentationSchema = z
  .object({
    alias: z.string().exactOptional(),
    name: z.string().exactOptional(),
    providerId: z.string().exactOptional(),
    enabled: z.boolean().exactOptional(),
    defaultAction: z.boolean().exactOptional(),
    priority: z.int32().exactOptional(),
    config: z.record(z.string(), z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RequiredActionProviderRepresentation')

const RealmRepresentationSchema = z
  .object({
    id: z.string().exactOptional(),
    realm: z.string().exactOptional(),
    displayName: z.string().exactOptional(),
    displayNameHtml: z.string().exactOptional(),
    notBefore: z.int32().exactOptional(),
    defaultSignatureAlgorithm: z.string().exactOptional(),
    revokeRefreshToken: z.boolean().exactOptional(),
    refreshTokenMaxReuse: z.int32().exactOptional(),
    accessTokenLifespan: z.int32().exactOptional(),
    accessTokenLifespanForImplicitFlow: z.int32().exactOptional(),
    ssoSessionIdleTimeout: z.int32().exactOptional(),
    ssoSessionMaxLifespan: z.int32().exactOptional(),
    ssoSessionIdleTimeoutRememberMe: z.int32().exactOptional(),
    ssoSessionMaxLifespanRememberMe: z.int32().exactOptional(),
    offlineSessionIdleTimeout: z.int32().exactOptional(),
    offlineSessionMaxLifespanEnabled: z.boolean().exactOptional(),
    offlineSessionMaxLifespan: z.int32().exactOptional(),
    clientSessionIdleTimeout: z.int32().exactOptional(),
    clientSessionMaxLifespan: z.int32().exactOptional(),
    clientOfflineSessionIdleTimeout: z.int32().exactOptional(),
    clientOfflineSessionMaxLifespan: z.int32().exactOptional(),
    accessCodeLifespan: z.int32().exactOptional(),
    accessCodeLifespanUserAction: z.int32().exactOptional(),
    accessCodeLifespanLogin: z.int32().exactOptional(),
    actionTokenGeneratedByAdminLifespan: z.int32().exactOptional(),
    actionTokenGeneratedByUserLifespan: z.int32().exactOptional(),
    oauth2DeviceCodeLifespan: z.int32().exactOptional(),
    oauth2DevicePollingInterval: z.int32().exactOptional(),
    enabled: z.boolean().exactOptional(),
    sslRequired: z.string().exactOptional(),
    passwordCredentialGrantAllowed: z.boolean().exactOptional().openapi({ deprecated: true }),
    registrationAllowed: z.boolean().exactOptional(),
    registrationEmailAsUsername: z.boolean().exactOptional(),
    rememberMe: z.boolean().exactOptional(),
    verifyEmail: z.boolean().exactOptional(),
    loginWithEmailAllowed: z.boolean().exactOptional(),
    duplicateEmailsAllowed: z.boolean().exactOptional(),
    resetPasswordAllowed: z.boolean().exactOptional(),
    editUsernameAllowed: z.boolean().exactOptional(),
    userCacheEnabled: z.boolean().exactOptional().openapi({ deprecated: true }),
    realmCacheEnabled: z.boolean().exactOptional().openapi({ deprecated: true }),
    bruteForceProtected: z.boolean().exactOptional(),
    permanentLockout: z.boolean().exactOptional(),
    maxTemporaryLockouts: z.int32().exactOptional(),
    bruteForceStrategy: BruteForceStrategySchema.exactOptional(),
    maxFailureWaitSeconds: z.int32().exactOptional(),
    minimumQuickLoginWaitSeconds: z.int32().exactOptional(),
    waitIncrementSeconds: z.int32().exactOptional(),
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
    maxDeltaTimeSeconds: z.int32().exactOptional(),
    failureFactor: z.int32().exactOptional(),
    maxSecondaryAuthFailures: z.int32().exactOptional(),
    privateKey: z.string().exactOptional().openapi({ deprecated: true }),
    publicKey: z.string().exactOptional().openapi({ deprecated: true }),
    certificate: z.string().exactOptional().openapi({ deprecated: true }),
    codeSecret: z.string().exactOptional().openapi({ deprecated: true }),
    roles: RolesRepresentationSchema.exactOptional(),
    groups: z.array(GroupRepresentationSchema).exactOptional(),
    defaultRoles: z.array(z.string()).exactOptional().openapi({ deprecated: true }),
    defaultRole: RoleRepresentationSchema.exactOptional(),
    adminPermissionsClient: ClientRepresentationSchema.exactOptional(),
    defaultGroups: z.array(z.string()).exactOptional(),
    requiredCredentials: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({ deprecated: true }),
    passwordPolicy: z.string().exactOptional(),
    otpPolicyType: z.string().exactOptional(),
    otpPolicyAlgorithm: z.string().exactOptional(),
    otpPolicyInitialCounter: z.int32().exactOptional(),
    otpPolicyDigits: z.int32().exactOptional(),
    otpPolicyLookAheadWindow: z.int32().exactOptional(),
    otpPolicyPeriod: z.int32().exactOptional(),
    otpPolicyCodeReusable: z.boolean().exactOptional(),
    otpSupportedApplications: z.array(z.string()).exactOptional(),
    localizationTexts: z.record(z.string(), z.record(z.string(), z.string())).exactOptional(),
    webAuthnPolicyRpEntityName: z.string().exactOptional(),
    webAuthnPolicySignatureAlgorithms: z.array(z.string()).exactOptional(),
    webAuthnPolicyRpId: z.string().exactOptional(),
    webAuthnPolicyAttestationConveyancePreference: z.string().exactOptional(),
    webAuthnPolicyAuthenticatorAttachment: z.string().exactOptional(),
    webAuthnPolicyRequireResidentKey: z.string().exactOptional(),
    webAuthnPolicyResidentKey: z.string().exactOptional(),
    webAuthnPolicyUserVerificationRequirement: z.string().exactOptional(),
    webAuthnPolicyCreateTimeout: z.int32().exactOptional(),
    webAuthnPolicyAvoidSameAuthenticatorRegister: z.boolean().exactOptional(),
    webAuthnPolicyAcceptableAaguids: z.array(z.string()).exactOptional(),
    webAuthnPolicyExtraOrigins: z.array(z.string()).exactOptional(),
    webAuthnPolicyPasswordlessRpEntityName: z.string().exactOptional(),
    webAuthnPolicyPasswordlessSignatureAlgorithms: z.array(z.string()).exactOptional(),
    webAuthnPolicyPasswordlessRpId: z.string().exactOptional(),
    webAuthnPolicyPasswordlessAttestationConveyancePreference: z.string().exactOptional(),
    webAuthnPolicyPasswordlessAuthenticatorAttachment: z.string().exactOptional(),
    webAuthnPolicyPasswordlessRequireResidentKey: z.string().exactOptional(),
    webAuthnPolicyPasswordlessResidentKey: z.string().exactOptional(),
    webAuthnPolicyPasswordlessUserVerificationRequirement: z.string().exactOptional(),
    webAuthnPolicyPasswordlessCreateTimeout: z.int32().exactOptional(),
    webAuthnPolicyPasswordlessAvoidSameAuthenticatorRegister: z.boolean().exactOptional(),
    webAuthnPolicyPasswordlessAcceptableAaguids: z.array(z.string()).exactOptional(),
    webAuthnPolicyPasswordlessExtraOrigins: z.array(z.string()).exactOptional(),
    webAuthnPolicyPasswordlessPasskeysEnabled: z.boolean().exactOptional(),
    webAuthnPolicyPasswordlessMediation: z.string().exactOptional(),
    clientProfiles: ClientProfilesRepresentationSchema.exactOptional(),
    clientPolicies: ClientPoliciesRepresentationSchema.exactOptional(),
    users: z.array(UserRepresentationSchema).exactOptional(),
    federatedUsers: z.array(UserRepresentationSchema).exactOptional(),
    scopeMappings: z.array(ScopeMappingRepresentationSchema).exactOptional(),
    clientScopeMappings: z
      .record(z.string(), z.array(ScopeMappingRepresentationSchema))
      .exactOptional(),
    clients: z.array(ClientRepresentationSchema).exactOptional(),
    clientScopes: z.array(ClientScopeRepresentationSchema).exactOptional(),
    defaultDefaultClientScopes: z.array(z.string()).exactOptional(),
    defaultOptionalClientScopes: z.array(z.string()).exactOptional(),
    browserSecurityHeaders: z.record(z.string(), z.string()).exactOptional(),
    smtpServer: z.record(z.string(), z.string()).exactOptional(),
    userFederationProviders: z.array(UserFederationProviderRepresentationSchema).exactOptional(),
    userFederationMappers: z.array(UserFederationMapperRepresentationSchema).exactOptional(),
    loginTheme: z.string().exactOptional(),
    accountTheme: z.string().exactOptional(),
    adminTheme: z.string().exactOptional(),
    emailTheme: z.string().exactOptional(),
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
    enabledEventTypes: z.array(z.string()).exactOptional(),
    adminEventsEnabled: z.boolean().exactOptional(),
    adminEventsDetailsEnabled: z.boolean().exactOptional(),
    identityProviders: z.array(IdentityProviderRepresentationSchema).exactOptional(),
    identityProviderMappers: z.array(IdentityProviderMapperRepresentationSchema).exactOptional(),
    protocolMappers: z.array(ProtocolMapperRepresentationSchema).exactOptional(),
    components: MultivaluedHashMapStringComponentExportRepresentationSchema.exactOptional(),
    internationalizationEnabled: z.boolean().exactOptional(),
    supportedLocales: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    defaultLocale: z.string().exactOptional(),
    authenticationFlows: z.array(AuthenticationFlowRepresentationSchema).exactOptional(),
    authenticatorConfig: z.array(AuthenticatorConfigRepresentationSchema).exactOptional(),
    requiredActions: z.array(RequiredActionProviderRepresentationSchema).exactOptional(),
    browserFlow: z.string().exactOptional(),
    registrationFlow: z.string().exactOptional(),
    directGrantFlow: z.string().exactOptional(),
    resetCredentialsFlow: z.string().exactOptional(),
    clientAuthenticationFlow: z.string().exactOptional(),
    dockerAuthenticationFlow: z.string().exactOptional(),
    firstBrokerLoginFlow: z.string().exactOptional(),
    attributes: z.record(z.string(), z.string()).exactOptional(),
    keycloakVersion: z.string().exactOptional(),
    userManagedAccessAllowed: z.boolean().exactOptional(),
    organizationsEnabled: z.boolean().exactOptional(),
    organizations: z.array(OrganizationRepresentationSchema).exactOptional(),
    verifiableCredentialsEnabled: z.boolean().exactOptional(),
    adminPermissionsEnabled: z.boolean().exactOptional(),
    social: z.boolean().exactOptional().openapi({ deprecated: true }),
    updateProfileOnInitialSocialLogin: z.boolean().exactOptional().openapi({ deprecated: true }),
    socialProviders: z.record(z.string(), z.string()).exactOptional().openapi({ deprecated: true }),
    applicationScopeMappings: z
      .record(z.string(), z.array(ScopeMappingRepresentationSchema))
      .exactOptional()
      .openapi({ deprecated: true }),
    applications: z
      .array(ApplicationRepresentationSchema)
      .exactOptional()
      .openapi({ deprecated: true }),
    oauthClients: z
      .array(OAuthClientRepresentationSchema)
      .exactOptional()
      .openapi({ deprecated: true }),
    clientTemplates: z
      .array(ClientTemplateRepresentationSchema)
      .exactOptional()
      .openapi({ deprecated: true }),
    scimApiEnabled: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RealmRepresentation')

const RequiredActionConfigInfoRepresentationSchema = z
  .object({ properties: z.array(ConfigPropertyRepresentationSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('RequiredActionConfigInfoRepresentation')

const RequiredActionConfigRepresentationSchema = z
  .object({ config: z.record(z.string(), z.string()).exactOptional() })
  .openapi({ required: [] })
  .openapi('RequiredActionConfigRepresentation')

const SamlExampleResponseSchema = z
  .object({ samlResponse: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('SamlExampleResponse')

const StepExecutionStatusSchema = z.enum(['COMPLETED', 'PENDING']).openapi('StepExecutionStatus')

const UPAttributeRequiredSchema = z
  .object({
    roles: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    scopes: z
      .array(z.string())
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
  .openapi('UPAttributeRequired')

const UPAttributePermissionsSchema = z
  .object({
    view: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    edit: z
      .array(z.string())
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
  .openapi('UPAttributePermissions')

const UPAttributeSelectorSchema = z
  .object({
    scopes: z
      .array(z.string())
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
  .openapi('UPAttributeSelector')

const UPAttributeSchema = z
  .object({
    name: z.string().exactOptional(),
    displayName: z.string().exactOptional(),
    validations: z.record(z.string(), z.record(z.string(), z.any())).exactOptional(),
    annotations: z.record(z.string(), z.any()).exactOptional(),
    required: UPAttributeRequiredSchema.exactOptional(),
    permissions: UPAttributePermissionsSchema.exactOptional(),
    selector: UPAttributeSelectorSchema.exactOptional(),
    group: z.string().exactOptional(),
    multivalued: z.boolean().exactOptional(),
    defaultValue: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UPAttribute')

const UPGroupSchema = z
  .object({
    name: z.string().exactOptional(),
    displayHeader: z.string().exactOptional(),
    displayDescription: z.string().exactOptional(),
    annotations: z.record(z.string(), z.any()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UPGroup')

const UnmanagedAttributePolicySchema = z
  .enum(['ENABLED', 'ADMIN_VIEW', 'ADMIN_EDIT'])
  .openapi('UnmanagedAttributePolicy')

const UPConfigSchema = z
  .object({
    attributes: z.array(UPAttributeSchema).exactOptional(),
    groups: z.array(UPGroupSchema).exactOptional(),
    unmanagedAttributePolicy: UnmanagedAttributePolicySchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UPConfig')

const UserSessionRepresentationSchema = z
  .object({
    id: z.string().exactOptional(),
    username: z.string().exactOptional(),
    userId: z.string().exactOptional(),
    ipAddress: z.string().exactOptional(),
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
    rememberMe: z.boolean().exactOptional(),
    clients: z.record(z.string(), z.string()).exactOptional(),
    transientUser: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserSessionRepresentation')

const VerifiableCredentialOfferActionConfigSchema = z
  .object({
    credentialConfigurationId: z.string().exactOptional(),
    clientId: z.string().exactOptional(),
    preAuthorized: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('VerifiableCredentialOfferActionConfig')

const WorkflowConcurrencyRepresentationSchema = z
  .object({
    'cancel-in-progress': z.string().exactOptional(),
    'restart-in-progress': z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('WorkflowConcurrencyRepresentation')

const WorkflowScheduleRepresentationSchema = z
  .object({ after: z.string().exactOptional(), 'batch-size': z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('WorkflowScheduleRepresentation')

const WorkflowStepRepresentationSchema = z
  .object({
    uses: z.string().exactOptional(),
    after: z.string().exactOptional(),
    'scheduled-at': z
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
    status: StepExecutionStatusSchema.exactOptional(),
    id: z.string().exactOptional(),
    config: MultivaluedHashMapStringStringSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('WorkflowStepRepresentation')

const WorkflowStateRepresentationSchema = z
  .object({ errors: z.array(z.string()).exactOptional() })
  .openapi({ required: [] })
  .openapi('WorkflowStateRepresentation')

const WorkflowRepresentationSchema = z
  .object({
    id: z.string().exactOptional(),
    name: z.string().exactOptional(),
    enabled: z.boolean().exactOptional(),
    on: z.string().exactOptional(),
    schedule: WorkflowScheduleRepresentationSchema.exactOptional(),
    concurrency: WorkflowConcurrencyRepresentationSchema.exactOptional(),
    if: z.string().exactOptional(),
    steps: z.array(WorkflowStepRepresentationSchema).exactOptional(),
    state: WorkflowStateRepresentationSchema.exactOptional(),
    with: MultivaluedHashMapStringStringSchema.exactOptional(),
    cancelInProgress: z.string().exactOptional(),
    restartInProgress: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('WorkflowRepresentation')

export const getAdminRealmsRoute = createRoute({
  method: 'get',
  path: '/admin/realms',
  tags: ['Realms Admin'],
  summary:
    'Get accessible realms Returns a list of accessible realms. The list is filtered based on what realms the caller is allowed to view.',
  request: {
    query: z.object({
      briefRepresentation: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'briefRepresentation',
            in: 'query',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(RealmRepresentationSchema) } },
    },
    403: { description: 'Forbidden' },
  },
})

export const postAdminRealmsRoute = createRoute({
  method: 'post',
  path: '/admin/realms',
  tags: ['Realms Admin'],
  summary: 'Import a realm. Imports a realm from a full representation of that realm.',
  description: 'Realm name must be unique.',
  request: {
    body: {
      content: {
        'application/json': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
  },
  responses: {
    201: { description: 'Created' },
    400: { description: 'Bad Request' },
    403: { description: 'Forbidden' },
    409: { description: 'Conflict' },
    500: { description: 'Internal Server Error' },
  },
})

export const getAdminRealmsRealmRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}',
  tags: ['Realms Admin'],
  summary:
    'Get the top-level representation of the realm It will not include nested information like User and Client representations.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: RealmRepresentationSchema } },
    },
    403: { description: 'Forbidden' },
  },
})

export const putAdminRealmsRealmRoute = createRoute({
  method: 'put',
  path: '/admin/realms/{realm}',
  tags: ['Realms Admin'],
  summary:
    'Update the top-level information of the realm Any user, roles or client information in the representation will be ignored.',
  description: 'This will only update top-level attributes of the realm.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RealmRepresentationSchema } } },
  },
  responses: {
    204: { description: 'No Content' },
    400: { description: 'Bad Request' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    409: { description: 'Conflict' },
    500: { description: 'Internal Server Error' },
  },
})

export const deleteAdminRealmsRealmRoute = createRoute({
  method: 'delete',
  path: '/admin/realms/{realm}',
  tags: ['Realms Admin'],
  summary: 'Delete the realm',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    400: { description: 'Bad Request' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getAdminRealmsRealmAdminEventsRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/admin-events',
  tags: ['Realms Admin'],
  summary:
    'Get admin events Returns all admin events, or filters events based on URL query parameters listed here',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      authClient: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'authClient', in: 'query', schema: { type: 'string' }, required: false },
        }),
      authIpAddress: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'authIpAddress',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      authRealm: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'authRealm', in: 'query', schema: { type: 'string' }, required: false },
        }),
      authUser: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'authUser',
            in: 'query',
            description: 'user id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      dateFrom: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'dateFrom',
            in: 'query',
            description:
              'From (inclusive) date (yyyy-MM-dd) or time in Epoch timestamp millis (number of milliseconds since January 1, 1970, 00:00:00 GMT)',
            schema: { type: 'string' },
            required: false,
          },
        }),
      dateTo: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'dateTo',
            in: 'query',
            description:
              'To (inclusive) date (yyyy-MM-dd) or time in Epoch timestamp millis (number of milliseconds since January 1, 1970, 00:00:00 GMT)',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direction: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'direction',
            in: 'query',
            description: 'The direction to sort events by (asc or desc)',
            schema: { type: 'string' },
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
            name: 'first',
            in: 'query',
            schema: { format: 'int32', type: 'integer' },
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
            name: 'max',
            in: 'query',
            description: 'Maximum results size (defaults to 100)',
            schema: { format: 'int32', type: 'integer' },
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
            name: 'operationTypes',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
      resourcePath: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'resourcePath', in: 'query', schema: { type: 'string' }, required: false },
        }),
      resourceTypes: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'resourceTypes',
            in: 'query',
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(AdminEventRepresentationSchema) } },
    },
    400: { description: 'Bad Request' },
    403: { description: 'Forbidden' },
  },
})

export const deleteAdminRealmsRealmAdminEventsRoute = createRoute({
  method: 'delete',
  path: '/admin/realms/{realm}/admin-events',
  tags: ['Realms Admin'],
  summary: 'Delete all admin events',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'No Content' }, 403: { description: 'Forbidden' } },
})

export const deleteAdminRealmsRealmAttackDetectionBruteForceUsersRoute = createRoute({
  method: 'delete',
  path: '/admin/realms/{realm}/attack-detection/brute-force/users',
  tags: ['Attack Detection'],
  summary: 'Clear any user login failures for all users This can release temporary disabled users',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'No Content' } },
})

export const getAdminRealmsRealmAttackDetectionBruteForceUsersUserIdRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/attack-detection/brute-force/users/{userId}',
  tags: ['Attack Detection'],
  summary: 'Get status of a username in brute force detection',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      userId: z
        .string()
        .openapi({
          param: { name: 'userId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.record(z.string(), z.any()) } },
    },
  },
})

export const deleteAdminRealmsRealmAttackDetectionBruteForceUsersUserIdRoute = createRoute({
  method: 'delete',
  path: '/admin/realms/{realm}/attack-detection/brute-force/users/{userId}',
  tags: ['Attack Detection'],
  summary: 'Clear any user login failures for the user This can release temporary disabled user',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      userId: z
        .string()
        .openapi({
          param: { name: 'userId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 204: { description: 'No Content' } },
})

export const getAdminRealmsRealmAuthenticationAuthenticatorProvidersRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/authentication/authenticator-providers',
  tags: ['Authentication Management'],
  summary: 'Get authenticator providers Returns a stream of authenticator providers.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(z.record(z.string(), z.any())) } },
    },
  },
})

export const getAdminRealmsRealmAuthenticationClientAuthenticatorProvidersRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/authentication/client-authenticator-providers',
  tags: ['Authentication Management'],
  summary: 'Get client authenticator providers Returns a stream of client authenticator providers.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(z.record(z.string(), z.any())) } },
    },
  },
})

export const postAdminRealmsRealmAuthenticationConfigRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/authentication/config',
  tags: ['Authentication Management'],
  summary: 'Create new authenticator configuration',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AuthenticatorConfigRepresentationSchema } } },
  },
  responses: { 201: { description: 'Created' }, 409: { description: 'Conflict' } },
  deprecated: true,
})

export const getAdminRealmsRealmAuthenticationConfigDescriptionProviderIdRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/authentication/config-description/{providerId}',
  tags: ['Authentication Management'],
  summary: "Get authenticator provider's configuration description",
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      providerId: z
        .string()
        .openapi({
          param: { name: 'providerId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: AuthenticatorConfigInfoRepresentationSchema } },
    },
  },
})

export const getAdminRealmsRealmAuthenticationConfigIdRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/authentication/config/{id}',
  tags: ['Authentication Management'],
  summary: 'Get authenticator configuration',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'Configuration id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: AuthenticatorConfigRepresentationSchema } },
    },
  },
})

export const putAdminRealmsRealmAuthenticationConfigIdRoute = createRoute({
  method: 'put',
  path: '/admin/realms/{realm}/authentication/config/{id}',
  tags: ['Authentication Management'],
  summary: 'Update authenticator configuration',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'Configuration id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AuthenticatorConfigRepresentationSchema } } },
  },
  responses: { 204: { description: 'No Content' } },
})

export const deleteAdminRealmsRealmAuthenticationConfigIdRoute = createRoute({
  method: 'delete',
  path: '/admin/realms/{realm}/authentication/config/{id}',
  tags: ['Authentication Management'],
  summary: 'Delete authenticator configuration',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'Configuration id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'No Content' } },
})

export const postAdminRealmsRealmAuthenticationExecutionsRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/authentication/executions',
  tags: ['Authentication Management'],
  summary: 'Add new authentication execution',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AuthenticationExecutionRepresentationSchema } },
    },
  },
  responses: { 201: { description: 'Created' } },
})

export const getAdminRealmsRealmAuthenticationExecutionsExecutionIdRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/authentication/executions/{executionId}',
  tags: ['Authentication Management'],
  summary: 'Get Single Execution',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      executionId: z
        .string()
        .openapi({
          param: { name: 'executionId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: AuthenticationExecutionRepresentationSchema } },
    },
  },
})

export const deleteAdminRealmsRealmAuthenticationExecutionsExecutionIdRoute = createRoute({
  method: 'delete',
  path: '/admin/realms/{realm}/authentication/executions/{executionId}',
  tags: ['Authentication Management'],
  summary: 'Delete execution',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      executionId: z
        .string()
        .openapi({
          param: {
            name: 'executionId',
            in: 'path',
            description: 'Execution id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'No Content' } },
})

export const postAdminRealmsRealmAuthenticationExecutionsExecutionIdConfigRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/authentication/executions/{executionId}/config',
  tags: ['Authentication Management'],
  summary: 'Update execution with new configuration',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      executionId: z
        .string()
        .openapi({
          param: {
            name: 'executionId',
            in: 'path',
            description: 'Execution id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AuthenticatorConfigRepresentationSchema } } },
  },
  responses: { 201: { description: 'Created' }, 409: { description: 'Conflict' } },
})

export const getAdminRealmsRealmAuthenticationExecutionsExecutionIdConfigIdRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/authentication/executions/{executionId}/config/{id}',
  tags: ['Authentication Management'],
  summary: "Get execution's configuration",
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      executionId: z
        .string()
        .openapi({
          param: {
            name: 'executionId',
            in: 'path',
            description: 'Execution id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'Configuration id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: AuthenticatorConfigRepresentationSchema } },
    },
  },
  deprecated: true,
})

export const postAdminRealmsRealmAuthenticationExecutionsExecutionIdLowerPriorityRoute =
  createRoute({
    method: 'post',
    path: '/admin/realms/{realm}/authentication/executions/{executionId}/lower-priority',
    tags: ['Authentication Management'],
    summary: "Lower execution's priority",
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        executionId: z
          .string()
          .openapi({
            param: {
              name: 'executionId',
              in: 'path',
              description: 'Execution id',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: { 204: { description: 'No Content' } },
  })

export const postAdminRealmsRealmAuthenticationExecutionsExecutionIdRaisePriorityRoute =
  createRoute({
    method: 'post',
    path: '/admin/realms/{realm}/authentication/executions/{executionId}/raise-priority',
    tags: ['Authentication Management'],
    summary: "Raise execution's priority",
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        executionId: z
          .string()
          .openapi({
            param: {
              name: 'executionId',
              in: 'path',
              description: 'Execution id',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: { 204: { description: 'No Content' } },
  })

export const getAdminRealmsRealmAuthenticationFlowsRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/authentication/flows',
  tags: ['Authentication Management'],
  summary: 'Get authentication flows Returns a stream of authentication flows.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(AuthenticationFlowRepresentationSchema) } },
    },
  },
})

export const postAdminRealmsRealmAuthenticationFlowsRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/authentication/flows',
  tags: ['Authentication Management'],
  summary: 'Create a new authentication flow',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AuthenticationFlowRepresentationSchema } } },
  },
  responses: { 201: { description: 'Created' }, 409: { description: 'Conflict' } },
})

export const postAdminRealmsRealmAuthenticationFlowsFlowAliasCopyRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/authentication/flows/{flowAlias}/copy',
  tags: ['Authentication Management'],
  summary:
    "Copy existing authentication flow under a new name The new name is given as 'newName' attribute of the passed JSON object",
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      flowAlias: z
        .string()
        .openapi({
          param: {
            name: 'flowAlias',
            in: 'path',
            description: 'name of the existing authentication flow',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: z.record(z.string(), z.string()) } } },
  },
  responses: { 201: { description: 'Created' }, 409: { description: 'Conflict' } },
})

export const getAdminRealmsRealmAuthenticationFlowsFlowAliasExecutionsRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/authentication/flows/{flowAlias}/executions',
  tags: ['Authentication Management'],
  summary: 'Get authentication executions for a flow',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      flowAlias: z
        .string()
        .openapi({
          param: {
            name: 'flowAlias',
            in: 'path',
            description: 'Flow alias',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(AuthenticationExecutionInfoRepresentationSchema) },
      },
    },
  },
})

export const putAdminRealmsRealmAuthenticationFlowsFlowAliasExecutionsRoute = createRoute({
  method: 'put',
  path: '/admin/realms/{realm}/authentication/flows/{flowAlias}/executions',
  tags: ['Authentication Management'],
  summary: 'Update authentication executions of a Flow',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      flowAlias: z
        .string()
        .openapi({
          param: {
            name: 'flowAlias',
            in: 'path',
            description: 'Flow alias',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AuthenticationExecutionInfoRepresentationSchema } },
    },
  },
  responses: { 204: { description: 'No Content' }, 409: { description: 'Conflict' } },
})

export const postAdminRealmsRealmAuthenticationFlowsFlowAliasExecutionsExecutionRoute = createRoute(
  {
    method: 'post',
    path: '/admin/realms/{realm}/authentication/flows/{flowAlias}/executions/execution',
    tags: ['Authentication Management'],
    summary: 'Add new authentication execution to a flow',
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        flowAlias: z
          .string()
          .openapi({
            param: {
              name: 'flowAlias',
              in: 'path',
              description: 'Alias of parent flow',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: z.record(z.string(), z.any()) } } },
    },
    responses: { 201: { description: 'Created' } },
  },
)

export const postAdminRealmsRealmAuthenticationFlowsFlowAliasExecutionsFlowRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/authentication/flows/{flowAlias}/executions/flow',
  tags: ['Authentication Management'],
  summary: 'Add new flow with new execution to existing flow',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      flowAlias: z
        .string()
        .openapi({
          param: {
            name: 'flowAlias',
            in: 'path',
            description: 'Alias of parent authentication flow',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: z.record(z.string(), z.any()) } } },
  },
  responses: { 201: { description: 'Created' }, 409: { description: 'Conflict' } },
})

export const getAdminRealmsRealmAuthenticationFlowsIdRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/authentication/flows/{id}',
  tags: ['Authentication Management'],
  summary: 'Get authentication flow for id',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'Flow id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: AuthenticationFlowRepresentationSchema } },
    },
  },
})

export const putAdminRealmsRealmAuthenticationFlowsIdRoute = createRoute({
  method: 'put',
  path: '/admin/realms/{realm}/authentication/flows/{id}',
  tags: ['Authentication Management'],
  summary: 'Update an authentication flow',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
    body: { content: { 'application/json': { schema: AuthenticationFlowRepresentationSchema } } },
  },
  responses: { 204: { description: 'No Content' }, 409: { description: 'Conflict' } },
})

export const deleteAdminRealmsRealmAuthenticationFlowsIdRoute = createRoute({
  method: 'delete',
  path: '/admin/realms/{realm}/authentication/flows/{id}',
  tags: ['Authentication Management'],
  summary: 'Delete an authentication flow',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'Flow id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'No Content' } },
})

export const getAdminRealmsRealmAuthenticationFormActionProvidersRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/authentication/form-action-providers',
  tags: ['Authentication Management'],
  summary: 'Get form action providers Returns a stream of form action providers.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(z.record(z.string(), z.any())) } },
    },
  },
})

export const getAdminRealmsRealmAuthenticationFormProvidersRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/authentication/form-providers',
  tags: ['Authentication Management'],
  summary: 'Get form providers Returns a stream of form providers.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(z.record(z.string(), z.any())) } },
    },
  },
})

export const getAdminRealmsRealmAuthenticationPerClientConfigDescriptionRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/authentication/per-client-config-description',
  tags: ['Authentication Management'],
  summary: 'Get configuration descriptions for all clients',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.record(z.string(), z.array(ConfigPropertyRepresentationSchema)),
        },
      },
    },
  },
})

export const postAdminRealmsRealmAuthenticationRegisterRequiredActionRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/authentication/register-required-action',
  tags: ['Authentication Management'],
  summary: 'Register a new required actions',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: z.record(z.string(), z.string()) } } },
  },
  responses: { 204: { description: 'No Content' } },
})

export const getAdminRealmsRealmAuthenticationRequiredActionsRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/authentication/required-actions',
  tags: ['Authentication Management'],
  summary: 'Get required actions Returns a stream of required actions.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(RequiredActionProviderRepresentationSchema) },
      },
    },
  },
})

export const getAdminRealmsRealmAuthenticationRequiredActionsAliasRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/authentication/required-actions/{alias}',
  tags: ['Authentication Management'],
  summary: 'Get required action for alias',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      alias: z
        .string()
        .openapi({
          param: {
            name: 'alias',
            in: 'path',
            description: 'Alias of required action',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: RequiredActionProviderRepresentationSchema } },
    },
  },
})

export const putAdminRealmsRealmAuthenticationRequiredActionsAliasRoute = createRoute({
  method: 'put',
  path: '/admin/realms/{realm}/authentication/required-actions/{alias}',
  tags: ['Authentication Management'],
  summary: 'Update required action',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      alias: z
        .string()
        .openapi({
          param: {
            name: 'alias',
            in: 'path',
            description: 'Alias of required action',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RequiredActionProviderRepresentationSchema } },
    },
  },
  responses: { 204: { description: 'No Content' } },
})

export const deleteAdminRealmsRealmAuthenticationRequiredActionsAliasRoute = createRoute({
  method: 'delete',
  path: '/admin/realms/{realm}/authentication/required-actions/{alias}',
  tags: ['Authentication Management'],
  summary: 'Delete required action',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      alias: z
        .string()
        .openapi({
          param: {
            name: 'alias',
            in: 'path',
            description: 'Alias of required action',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'No Content' } },
})

export const getAdminRealmsRealmAuthenticationRequiredActionsAliasConfigRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/authentication/required-actions/{alias}/config',
  tags: ['Authentication Management'],
  summary: 'Get RequiredAction configuration',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      alias: z
        .string()
        .openapi({
          param: {
            name: 'alias',
            in: 'path',
            description: 'Alias of required action',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: RequiredActionConfigRepresentationSchema } },
    },
  },
})

export const putAdminRealmsRealmAuthenticationRequiredActionsAliasConfigRoute = createRoute({
  method: 'put',
  path: '/admin/realms/{realm}/authentication/required-actions/{alias}/config',
  tags: ['Authentication Management'],
  summary: 'Update RequiredAction configuration',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      alias: z
        .string()
        .openapi({
          param: {
            name: 'alias',
            in: 'path',
            description: 'Alias of required action',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RequiredActionConfigRepresentationSchema } } },
  },
  responses: { 204: { description: 'No Content' } },
})

export const deleteAdminRealmsRealmAuthenticationRequiredActionsAliasConfigRoute = createRoute({
  method: 'delete',
  path: '/admin/realms/{realm}/authentication/required-actions/{alias}/config',
  tags: ['Authentication Management'],
  summary: 'Delete RequiredAction configuration',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      alias: z
        .string()
        .openapi({
          param: {
            name: 'alias',
            in: 'path',
            description: 'Alias of required action',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'No Content' } },
})

export const getAdminRealmsRealmAuthenticationRequiredActionsAliasConfigDescriptionRoute =
  createRoute({
    method: 'get',
    path: '/admin/realms/{realm}/authentication/required-actions/{alias}/config-description',
    tags: ['Authentication Management'],
    summary: 'Get RequiredAction provider configuration description',
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        alias: z
          .string()
          .openapi({
            param: {
              name: 'alias',
              in: 'path',
              description: 'Alias of required action',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: RequiredActionConfigInfoRepresentationSchema } },
      },
    },
  })

export const postAdminRealmsRealmAuthenticationRequiredActionsAliasLowerPriorityRoute = createRoute(
  {
    method: 'post',
    path: '/admin/realms/{realm}/authentication/required-actions/{alias}/lower-priority',
    tags: ['Authentication Management'],
    summary: "Lower required action's priority",
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        alias: z
          .string()
          .openapi({
            param: {
              name: 'alias',
              in: 'path',
              description: 'Alias of required action',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: { 204: { description: 'No Content' } },
  },
)

export const postAdminRealmsRealmAuthenticationRequiredActionsAliasRaisePriorityRoute = createRoute(
  {
    method: 'post',
    path: '/admin/realms/{realm}/authentication/required-actions/{alias}/raise-priority',
    tags: ['Authentication Management'],
    summary: "Raise required action's priority",
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        alias: z
          .string()
          .openapi({
            param: {
              name: 'alias',
              in: 'path',
              description: 'Alias of required action',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: { 204: { description: 'No Content' } },
  },
)

export const getAdminRealmsRealmAuthenticationUnregisteredRequiredActionsRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/authentication/unregistered-required-actions',
  tags: ['Authentication Management'],
  summary: 'Get unregistered required actions Returns a stream of unregistered required actions.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(z.record(z.string(), z.string())) } },
    },
  },
})

export const postAdminRealmsRealmClientDescriptionConverterRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/client-description-converter',
  tags: ['Realms Admin'],
  summary: 'Base path for importing clients under this realm.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: z.string() },
        'application/xml': { schema: z.string() },
        'text/plain': { schema: z.string() },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ClientRepresentationSchema } },
    },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getAdminRealmsRealmClientPoliciesPoliciesRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/client-policies/policies',
  tags: ['Realms Admin'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      'include-global-policies': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'include-global-policies',
            in: 'query',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ClientPoliciesRepresentationSchema } },
    },
  },
})

export const putAdminRealmsRealmClientPoliciesPoliciesRoute = createRoute({
  method: 'put',
  path: '/admin/realms/{realm}/client-policies/policies',
  tags: ['Realms Admin'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ClientPoliciesRepresentationSchema } } },
  },
  responses: { 200: { description: 'OK' } },
})

export const getAdminRealmsRealmClientPoliciesProfilesRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/client-policies/profiles',
  tags: ['Realms Admin'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      'include-global-profiles': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'include-global-profiles',
            in: 'query',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ClientProfilesRepresentationSchema } },
    },
  },
})

export const putAdminRealmsRealmClientPoliciesProfilesRoute = createRoute({
  method: 'put',
  path: '/admin/realms/{realm}/client-policies/profiles',
  tags: ['Realms Admin'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ClientProfilesRepresentationSchema } } },
  },
  responses: { 200: { description: 'OK' } },
})

export const getAdminRealmsRealmClientRegistrationPolicyProvidersRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/client-registration-policy/providers',
  tags: ['Client Registration Policy'],
  summary: 'Base path for retrieve providers with the configProperties properly filled',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(ComponentTypeRepresentationSchema) } },
    },
  },
})

export const getAdminRealmsRealmClientScopesRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/client-scopes',
  tags: ['Client Scopes'],
  summary:
    'Get client scopes belonging to the realm Returns a list of client scopes belonging to the realm',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(ClientScopeRepresentationSchema) } },
    },
    403: { description: 'Forbidden' },
  },
})

export const postAdminRealmsRealmClientScopesRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/client-scopes',
  tags: ['Client Scopes'],
  summary: 'Create a new client scope Client Scope’s name must be unique!',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ClientScopeRepresentationSchema } } },
  },
  responses: {
    201: { description: 'Created' },
    403: { description: 'Forbidden' },
    409: { description: 'Conflict' },
  },
})

export const getAdminRealmsRealmClientScopesClientScopeIdRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/client-scopes/{client-scope-id}',
  tags: ['Client Scopes'],
  summary: 'Get representation of the client scope',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-scope-id': z
        .string()
        .openapi({
          param: {
            name: 'client-scope-id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: ClientScopeRepresentationSchema } },
    },
    403: { description: 'Forbidden' },
  },
})

export const putAdminRealmsRealmClientScopesClientScopeIdRoute = createRoute({
  method: 'put',
  path: '/admin/realms/{realm}/client-scopes/{client-scope-id}',
  tags: ['Client Scopes'],
  summary: 'Update the client scope',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-scope-id': z
        .string()
        .openapi({
          param: {
            name: 'client-scope-id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ClientScopeRepresentationSchema } } },
  },
  responses: {
    204: { description: 'No Content' },
    400: { description: 'Bad Request' },
    403: { description: 'Forbidden' },
    409: { description: 'Conflict' },
  },
})

export const deleteAdminRealmsRealmClientScopesClientScopeIdRoute = createRoute({
  method: 'delete',
  path: '/admin/realms/{realm}/client-scopes/{client-scope-id}',
  tags: ['Client Scopes'],
  summary: 'Delete the client scope',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-scope-id': z
        .string()
        .openapi({
          param: {
            name: 'client-scope-id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    400: { description: 'Bad Request' },
    403: { description: 'Forbidden' },
    500: { description: 'Internal Server Error' },
  },
})

export const postAdminRealmsRealmClientScopesClientScopeIdProtocolMappersAddModelsRoute =
  createRoute({
    method: 'post',
    path: '/admin/realms/{realm}/client-scopes/{client-scope-id}/protocol-mappers/add-models',
    tags: ['Protocol Mappers'],
    summary: 'Create multiple mappers',
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'client-scope-id': z
          .string()
          .openapi({
            param: {
              name: 'client-scope-id',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: z.array(ProtocolMapperRepresentationSchema) } },
      },
    },
    responses: { 204: { description: 'No Content' } },
  })

export const getAdminRealmsRealmClientScopesClientScopeIdProtocolMappersModelsRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/client-scopes/{client-scope-id}/protocol-mappers/models',
  tags: ['Protocol Mappers'],
  summary: 'Get mappers',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-scope-id': z
        .string()
        .openapi({
          param: {
            name: 'client-scope-id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(ProtocolMapperRepresentationSchema) } },
    },
  },
})

export const postAdminRealmsRealmClientScopesClientScopeIdProtocolMappersModelsRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/client-scopes/{client-scope-id}/protocol-mappers/models',
  tags: ['Protocol Mappers'],
  summary: 'Create a mapper',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-scope-id': z
        .string()
        .openapi({
          param: {
            name: 'client-scope-id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ProtocolMapperRepresentationSchema } } },
  },
  responses: { 201: { description: 'Created' }, 409: { description: 'Conflict' } },
})

export const getAdminRealmsRealmClientScopesClientScopeIdProtocolMappersModelsIdRoute = createRoute(
  {
    method: 'get',
    path: '/admin/realms/{realm}/client-scopes/{client-scope-id}/protocol-mappers/models/{id}',
    tags: ['Protocol Mappers'],
    summary: 'Get mapper by id',
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'client-scope-id': z
          .string()
          .openapi({
            param: {
              name: 'client-scope-id',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
        id: z
          .string()
          .openapi({
            param: {
              name: 'id',
              in: 'path',
              description: 'Mapper id',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: ProtocolMapperRepresentationSchema } },
      },
    },
  },
)

export const putAdminRealmsRealmClientScopesClientScopeIdProtocolMappersModelsIdRoute = createRoute(
  {
    method: 'put',
    path: '/admin/realms/{realm}/client-scopes/{client-scope-id}/protocol-mappers/models/{id}',
    tags: ['Protocol Mappers'],
    summary: 'Update the mapper',
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'client-scope-id': z
          .string()
          .openapi({
            param: {
              name: 'client-scope-id',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
        id: z
          .string()
          .openapi({
            param: {
              name: 'id',
              in: 'path',
              description: 'Mapper id',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: ProtocolMapperRepresentationSchema } } },
    },
    responses: { 204: { description: 'No Content' } },
  },
)

export const deleteAdminRealmsRealmClientScopesClientScopeIdProtocolMappersModelsIdRoute =
  createRoute({
    method: 'delete',
    path: '/admin/realms/{realm}/client-scopes/{client-scope-id}/protocol-mappers/models/{id}',
    tags: ['Protocol Mappers'],
    summary: 'Delete the mapper',
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'client-scope-id': z
          .string()
          .openapi({
            param: {
              name: 'client-scope-id',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
        id: z
          .string()
          .openapi({
            param: {
              name: 'id',
              in: 'path',
              description: 'Mapper id',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: { 204: { description: 'No Content' } },
  })

export const getAdminRealmsRealmClientScopesClientScopeIdProtocolMappersProtocolProtocolRoute =
  createRoute({
    method: 'get',
    path: '/admin/realms/{realm}/client-scopes/{client-scope-id}/protocol-mappers/protocol/{protocol}',
    tags: ['Protocol Mappers'],
    summary: 'Get mappers by name for a specific protocol',
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'client-scope-id': z
          .string()
          .openapi({
            param: {
              name: 'client-scope-id',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
        protocol: z
          .string()
          .openapi({
            param: { name: 'protocol', in: 'path', required: true, schema: { type: 'string' } },
          }),
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: z.array(ProtocolMapperRepresentationSchema) } },
      },
    },
  })

export const getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/client-scopes/{client-scope-id}/scope-mappings',
  tags: ['Scope Mappings'],
  summary: 'Get all scope mappings for the client',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-scope-id': z
        .string()
        .openapi({
          param: {
            name: 'client-scope-id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: MappingsRepresentationSchema } },
    },
  },
  deprecated: true,
})

export const getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsClientsClientRoute =
  createRoute({
    method: 'get',
    path: '/admin/realms/{realm}/client-scopes/{client-scope-id}/scope-mappings/clients/{client}',
    tags: ['Scope Mappings'],
    summary: "Get the roles associated with a client's scope Returns roles for the client.",
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'client-scope-id': z
          .string()
          .openapi({
            param: {
              name: 'client-scope-id',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
        client: z
          .string()
          .openapi({
            param: { name: 'client', in: 'path', required: true, schema: { type: 'string' } },
          }),
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
      },
    },
  })

export const postAdminRealmsRealmClientScopesClientScopeIdScopeMappingsClientsClientRoute =
  createRoute({
    method: 'post',
    path: '/admin/realms/{realm}/client-scopes/{client-scope-id}/scope-mappings/clients/{client}',
    tags: ['Scope Mappings'],
    summary: "Add client-level roles to the client's scope",
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'client-scope-id': z
          .string()
          .openapi({
            param: {
              name: 'client-scope-id',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
        client: z
          .string()
          .openapi({
            param: { name: 'client', in: 'path', required: true, schema: { type: 'string' } },
          }),
      }),
      body: { content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } } },
    },
    responses: { 204: { description: 'No Content' } },
  })

export const deleteAdminRealmsRealmClientScopesClientScopeIdScopeMappingsClientsClientRoute =
  createRoute({
    method: 'delete',
    path: '/admin/realms/{realm}/client-scopes/{client-scope-id}/scope-mappings/clients/{client}',
    tags: ['Scope Mappings'],
    summary: "Remove client-level roles from the client's scope.",
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'client-scope-id': z
          .string()
          .openapi({
            param: {
              name: 'client-scope-id',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
        client: z
          .string()
          .openapi({
            param: { name: 'client', in: 'path', required: true, schema: { type: 'string' } },
          }),
      }),
      body: { content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } } },
    },
    responses: { 204: { description: 'No Content' } },
  })

export const getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsClientsClientAvailableRoute =
  createRoute({
    method: 'get',
    path: '/admin/realms/{realm}/client-scopes/{client-scope-id}/scope-mappings/clients/{client}/available',
    tags: ['Scope Mappings'],
    summary:
      "The available client-level roles Returns the roles for the client that can be associated with the client's scope",
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'client-scope-id': z
          .string()
          .openapi({
            param: {
              name: 'client-scope-id',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
        client: z
          .string()
          .openapi({
            param: { name: 'client', in: 'path', required: true, schema: { type: 'string' } },
          }),
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
      },
    },
  })

export const getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsClientsClientCompositeRoute =
  createRoute({
    method: 'get',
    path: '/admin/realms/{realm}/client-scopes/{client-scope-id}/scope-mappings/clients/{client}/composite',
    tags: ['Scope Mappings'],
    summary:
      "Get effective client roles Returns the roles for the client that are associated with the client's scope.",
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'client-scope-id': z
          .string()
          .openapi({
            param: {
              name: 'client-scope-id',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
        client: z
          .string()
          .openapi({
            param: { name: 'client', in: 'path', required: true, schema: { type: 'string' } },
          }),
      }),
      query: z.object({
        briefRepresentation: z
          .stringbool()
          .default(true)
          .exactOptional()
          .openapi({
            param: {
              name: 'briefRepresentation',
              in: 'query',
              description: 'if false, return roles with their attributes',
              schema: { default: true, type: 'boolean' },
              required: false,
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
      },
    },
  })

export const getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsRealmRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/client-scopes/{client-scope-id}/scope-mappings/realm',
  tags: ['Scope Mappings'],
  summary: "Get realm-level roles associated with the client's scope",
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-scope-id': z
        .string()
        .openapi({
          param: {
            name: 'client-scope-id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
    },
  },
})

export const postAdminRealmsRealmClientScopesClientScopeIdScopeMappingsRealmRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/client-scopes/{client-scope-id}/scope-mappings/realm',
  tags: ['Scope Mappings'],
  summary: "Add a set of realm-level roles to the client's scope",
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-scope-id': z
        .string()
        .openapi({
          param: {
            name: 'client-scope-id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } } },
  },
  responses: { 204: { description: 'No Content' } },
})

export const deleteAdminRealmsRealmClientScopesClientScopeIdScopeMappingsRealmRoute = createRoute({
  method: 'delete',
  path: '/admin/realms/{realm}/client-scopes/{client-scope-id}/scope-mappings/realm',
  tags: ['Scope Mappings'],
  summary: "Remove a set of realm-level roles from the client's scope",
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-scope-id': z
        .string()
        .openapi({
          param: {
            name: 'client-scope-id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } } },
  },
  responses: { 204: { description: 'No Content' } },
})

export const getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsRealmAvailableRoute =
  createRoute({
    method: 'get',
    path: '/admin/realms/{realm}/client-scopes/{client-scope-id}/scope-mappings/realm/available',
    tags: ['Scope Mappings'],
    summary: "Get realm-level roles that are available to attach to this client's scope",
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'client-scope-id': z
          .string()
          .openapi({
            param: {
              name: 'client-scope-id',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
      },
    },
  })

export const getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsRealmCompositeRoute =
  createRoute({
    method: 'get',
    path: '/admin/realms/{realm}/client-scopes/{client-scope-id}/scope-mappings/realm/composite',
    tags: ['Scope Mappings'],
    summary:
      'Get effective realm-level roles associated with the client’s scope What this does is recurse any composite roles associated with the client’s scope and adds the roles to this lists.',
    description:
      'The method is really to show a comprehensive total view of realm-level roles associated with the client.',
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'client-scope-id': z
          .string()
          .openapi({
            param: {
              name: 'client-scope-id',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      query: z.object({
        briefRepresentation: z
          .stringbool()
          .default(true)
          .exactOptional()
          .openapi({
            param: {
              name: 'briefRepresentation',
              in: 'query',
              description: 'if false, return roles with their attributes',
              schema: { default: true, type: 'boolean' },
              required: false,
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
      },
    },
  })

export const getAdminRealmsRealmClientSessionStatsRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/client-session-stats',
  tags: ['Realms Admin'],
  summary: 'Get client session stats Returns a JSON map.',
  description:
    'The key is the client id, the value is the number of sessions that currently are active with that client. Only clients that actually have a session associated with them will be in this map.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(z.record(z.string(), z.string())) } },
    },
    403: { description: 'Forbidden' },
  },
})

export const getAdminRealmsRealmClientTemplatesRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/client-templates',
  tags: ['Client Scopes'],
  summary:
    'Get client scopes belonging to the realm Returns a list of client scopes belonging to the realm',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(ClientScopeRepresentationSchema) } },
    },
    403: { description: 'Forbidden' },
  },
})

export const postAdminRealmsRealmClientTemplatesRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/client-templates',
  tags: ['Client Scopes'],
  summary: 'Create a new client scope Client Scope’s name must be unique!',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ClientScopeRepresentationSchema } } },
  },
  responses: {
    201: { description: 'Created' },
    403: { description: 'Forbidden' },
    409: { description: 'Conflict' },
  },
})

export const getAdminRealmsRealmClientTemplatesClientScopeIdRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/client-templates/{client-scope-id}',
  tags: ['Client Scopes'],
  summary: 'Get representation of the client scope',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-scope-id': z
        .string()
        .openapi({
          param: {
            name: 'client-scope-id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: ClientScopeRepresentationSchema } },
    },
    403: { description: 'Forbidden' },
  },
})

export const putAdminRealmsRealmClientTemplatesClientScopeIdRoute = createRoute({
  method: 'put',
  path: '/admin/realms/{realm}/client-templates/{client-scope-id}',
  tags: ['Client Scopes'],
  summary: 'Update the client scope',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-scope-id': z
        .string()
        .openapi({
          param: {
            name: 'client-scope-id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ClientScopeRepresentationSchema } } },
  },
  responses: {
    204: { description: 'No Content' },
    400: { description: 'Bad Request' },
    403: { description: 'Forbidden' },
    409: { description: 'Conflict' },
  },
})

export const deleteAdminRealmsRealmClientTemplatesClientScopeIdRoute = createRoute({
  method: 'delete',
  path: '/admin/realms/{realm}/client-templates/{client-scope-id}',
  tags: ['Client Scopes'],
  summary: 'Delete the client scope',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-scope-id': z
        .string()
        .openapi({
          param: {
            name: 'client-scope-id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    400: { description: 'Bad Request' },
    403: { description: 'Forbidden' },
    500: { description: 'Internal Server Error' },
  },
})

export const postAdminRealmsRealmClientTemplatesClientScopeIdProtocolMappersAddModelsRoute =
  createRoute({
    method: 'post',
    path: '/admin/realms/{realm}/client-templates/{client-scope-id}/protocol-mappers/add-models',
    tags: ['Protocol Mappers'],
    summary: 'Create multiple mappers',
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'client-scope-id': z
          .string()
          .openapi({
            param: {
              name: 'client-scope-id',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: z.array(ProtocolMapperRepresentationSchema) } },
      },
    },
    responses: { 204: { description: 'No Content' } },
  })

export const getAdminRealmsRealmClientTemplatesClientScopeIdProtocolMappersModelsRoute =
  createRoute({
    method: 'get',
    path: '/admin/realms/{realm}/client-templates/{client-scope-id}/protocol-mappers/models',
    tags: ['Protocol Mappers'],
    summary: 'Get mappers',
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'client-scope-id': z
          .string()
          .openapi({
            param: {
              name: 'client-scope-id',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: z.array(ProtocolMapperRepresentationSchema) } },
      },
    },
  })

export const postAdminRealmsRealmClientTemplatesClientScopeIdProtocolMappersModelsRoute =
  createRoute({
    method: 'post',
    path: '/admin/realms/{realm}/client-templates/{client-scope-id}/protocol-mappers/models',
    tags: ['Protocol Mappers'],
    summary: 'Create a mapper',
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'client-scope-id': z
          .string()
          .openapi({
            param: {
              name: 'client-scope-id',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: ProtocolMapperRepresentationSchema } } },
    },
    responses: { 201: { description: 'Created' }, 409: { description: 'Conflict' } },
  })

export const getAdminRealmsRealmClientTemplatesClientScopeIdProtocolMappersModelsIdRoute =
  createRoute({
    method: 'get',
    path: '/admin/realms/{realm}/client-templates/{client-scope-id}/protocol-mappers/models/{id}',
    tags: ['Protocol Mappers'],
    summary: 'Get mapper by id',
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'client-scope-id': z
          .string()
          .openapi({
            param: {
              name: 'client-scope-id',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
        id: z
          .string()
          .openapi({
            param: {
              name: 'id',
              in: 'path',
              description: 'Mapper id',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: ProtocolMapperRepresentationSchema } },
      },
    },
  })

export const putAdminRealmsRealmClientTemplatesClientScopeIdProtocolMappersModelsIdRoute =
  createRoute({
    method: 'put',
    path: '/admin/realms/{realm}/client-templates/{client-scope-id}/protocol-mappers/models/{id}',
    tags: ['Protocol Mappers'],
    summary: 'Update the mapper',
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'client-scope-id': z
          .string()
          .openapi({
            param: {
              name: 'client-scope-id',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
        id: z
          .string()
          .openapi({
            param: {
              name: 'id',
              in: 'path',
              description: 'Mapper id',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: ProtocolMapperRepresentationSchema } } },
    },
    responses: { 204: { description: 'No Content' } },
  })

export const deleteAdminRealmsRealmClientTemplatesClientScopeIdProtocolMappersModelsIdRoute =
  createRoute({
    method: 'delete',
    path: '/admin/realms/{realm}/client-templates/{client-scope-id}/protocol-mappers/models/{id}',
    tags: ['Protocol Mappers'],
    summary: 'Delete the mapper',
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'client-scope-id': z
          .string()
          .openapi({
            param: {
              name: 'client-scope-id',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
        id: z
          .string()
          .openapi({
            param: {
              name: 'id',
              in: 'path',
              description: 'Mapper id',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: { 204: { description: 'No Content' } },
  })

export const getAdminRealmsRealmClientTemplatesClientScopeIdProtocolMappersProtocolProtocolRoute =
  createRoute({
    method: 'get',
    path: '/admin/realms/{realm}/client-templates/{client-scope-id}/protocol-mappers/protocol/{protocol}',
    tags: ['Protocol Mappers'],
    summary: 'Get mappers by name for a specific protocol',
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'client-scope-id': z
          .string()
          .openapi({
            param: {
              name: 'client-scope-id',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
        protocol: z
          .string()
          .openapi({
            param: { name: 'protocol', in: 'path', required: true, schema: { type: 'string' } },
          }),
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: z.array(ProtocolMapperRepresentationSchema) } },
      },
    },
  })

export const getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/client-templates/{client-scope-id}/scope-mappings',
  tags: ['Scope Mappings'],
  summary: 'Get all scope mappings for the client',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-scope-id': z
        .string()
        .openapi({
          param: {
            name: 'client-scope-id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: MappingsRepresentationSchema } },
    },
  },
  deprecated: true,
})

export const getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsClientsClientRoute =
  createRoute({
    method: 'get',
    path: '/admin/realms/{realm}/client-templates/{client-scope-id}/scope-mappings/clients/{client}',
    tags: ['Scope Mappings'],
    summary: "Get the roles associated with a client's scope Returns roles for the client.",
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'client-scope-id': z
          .string()
          .openapi({
            param: {
              name: 'client-scope-id',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
        client: z
          .string()
          .openapi({
            param: { name: 'client', in: 'path', required: true, schema: { type: 'string' } },
          }),
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
      },
    },
  })

export const postAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsClientsClientRoute =
  createRoute({
    method: 'post',
    path: '/admin/realms/{realm}/client-templates/{client-scope-id}/scope-mappings/clients/{client}',
    tags: ['Scope Mappings'],
    summary: "Add client-level roles to the client's scope",
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'client-scope-id': z
          .string()
          .openapi({
            param: {
              name: 'client-scope-id',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
        client: z
          .string()
          .openapi({
            param: { name: 'client', in: 'path', required: true, schema: { type: 'string' } },
          }),
      }),
      body: { content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } } },
    },
    responses: { 204: { description: 'No Content' } },
  })

export const deleteAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsClientsClientRoute =
  createRoute({
    method: 'delete',
    path: '/admin/realms/{realm}/client-templates/{client-scope-id}/scope-mappings/clients/{client}',
    tags: ['Scope Mappings'],
    summary: "Remove client-level roles from the client's scope.",
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'client-scope-id': z
          .string()
          .openapi({
            param: {
              name: 'client-scope-id',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
        client: z
          .string()
          .openapi({
            param: { name: 'client', in: 'path', required: true, schema: { type: 'string' } },
          }),
      }),
      body: { content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } } },
    },
    responses: { 204: { description: 'No Content' } },
  })

export const getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsClientsClientAvailableRoute =
  createRoute({
    method: 'get',
    path: '/admin/realms/{realm}/client-templates/{client-scope-id}/scope-mappings/clients/{client}/available',
    tags: ['Scope Mappings'],
    summary:
      "The available client-level roles Returns the roles for the client that can be associated with the client's scope",
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'client-scope-id': z
          .string()
          .openapi({
            param: {
              name: 'client-scope-id',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
        client: z
          .string()
          .openapi({
            param: { name: 'client', in: 'path', required: true, schema: { type: 'string' } },
          }),
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
      },
    },
  })

export const getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsClientsClientCompositeRoute =
  createRoute({
    method: 'get',
    path: '/admin/realms/{realm}/client-templates/{client-scope-id}/scope-mappings/clients/{client}/composite',
    tags: ['Scope Mappings'],
    summary:
      "Get effective client roles Returns the roles for the client that are associated with the client's scope.",
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'client-scope-id': z
          .string()
          .openapi({
            param: {
              name: 'client-scope-id',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
        client: z
          .string()
          .openapi({
            param: { name: 'client', in: 'path', required: true, schema: { type: 'string' } },
          }),
      }),
      query: z.object({
        briefRepresentation: z
          .stringbool()
          .default(true)
          .exactOptional()
          .openapi({
            param: {
              name: 'briefRepresentation',
              in: 'query',
              description: 'if false, return roles with their attributes',
              schema: { default: true, type: 'boolean' },
              required: false,
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
      },
    },
  })

export const getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsRealmRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/client-templates/{client-scope-id}/scope-mappings/realm',
  tags: ['Scope Mappings'],
  summary: "Get realm-level roles associated with the client's scope",
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-scope-id': z
        .string()
        .openapi({
          param: {
            name: 'client-scope-id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
    },
  },
})

export const postAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsRealmRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/client-templates/{client-scope-id}/scope-mappings/realm',
  tags: ['Scope Mappings'],
  summary: "Add a set of realm-level roles to the client's scope",
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-scope-id': z
        .string()
        .openapi({
          param: {
            name: 'client-scope-id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } } },
  },
  responses: { 204: { description: 'No Content' } },
})

export const deleteAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsRealmRoute =
  createRoute({
    method: 'delete',
    path: '/admin/realms/{realm}/client-templates/{client-scope-id}/scope-mappings/realm',
    tags: ['Scope Mappings'],
    summary: "Remove a set of realm-level roles from the client's scope",
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'client-scope-id': z
          .string()
          .openapi({
            param: {
              name: 'client-scope-id',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } } },
    },
    responses: { 204: { description: 'No Content' } },
  })

export const getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsRealmAvailableRoute =
  createRoute({
    method: 'get',
    path: '/admin/realms/{realm}/client-templates/{client-scope-id}/scope-mappings/realm/available',
    tags: ['Scope Mappings'],
    summary: "Get realm-level roles that are available to attach to this client's scope",
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'client-scope-id': z
          .string()
          .openapi({
            param: {
              name: 'client-scope-id',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
      },
    },
  })

export const getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsRealmCompositeRoute =
  createRoute({
    method: 'get',
    path: '/admin/realms/{realm}/client-templates/{client-scope-id}/scope-mappings/realm/composite',
    tags: ['Scope Mappings'],
    summary:
      'Get effective realm-level roles associated with the client’s scope What this does is recurse any composite roles associated with the client’s scope and adds the roles to this lists.',
    description:
      'The method is really to show a comprehensive total view of realm-level roles associated with the client.',
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'client-scope-id': z
          .string()
          .openapi({
            param: {
              name: 'client-scope-id',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      query: z.object({
        briefRepresentation: z
          .stringbool()
          .default(true)
          .exactOptional()
          .openapi({
            param: {
              name: 'briefRepresentation',
              in: 'query',
              description: 'if false, return roles with their attributes',
              schema: { default: true, type: 'boolean' },
              required: false,
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
      },
    },
  })

export const getAdminRealmsRealmClientTypesRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/client-types',
  tags: ['Realms Admin'],
  summary: 'List all client types available in the current realm',
  description:
    'This endpoint returns a list of both global and realm level client types and the attributes they set',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ClientTypesRepresentationSchema } },
    },
  },
})

export const putAdminRealmsRealmClientTypesRoute = createRoute({
  method: 'put',
  path: '/admin/realms/{realm}/client-types',
  tags: ['Realms Admin'],
  summary: 'Update a client type',
  description: 'This endpoint allows you to update a realm level client type',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ClientTypesRepresentationSchema } } },
  },
  responses: { 204: { description: 'No Content' } },
})

export const getAdminRealmsRealmClientsRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/clients',
  tags: ['Clients'],
  summary: 'Get clients belonging to the realm.',
  description:
    'If a client can’t be retrieved from the storage due to a problem with the underlying storage, it is silently removed from the returned list. This ensures that concurrent modifications to the list don’t prevent callers from retrieving this list.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      clientId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'clientId',
            in: 'query',
            description: 'filter by clientId',
            schema: { type: 'string' },
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
            name: 'first',
            in: 'query',
            description: 'the first result',
            schema: { format: 'int32', type: 'integer' },
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
            name: 'max',
            in: 'query',
            description: 'the max results to return',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'q', in: 'query', schema: { type: 'string' }, required: false },
        }),
      search: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            in: 'query',
            description: 'whether this is a search query or a getClientById query',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      viewableOnly: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'viewableOnly',
            in: 'query',
            description: 'filter clients that cannot be viewed in full by admin',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(ClientRepresentationSchema) } },
    },
  },
})

export const postAdminRealmsRealmClientsRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/clients',
  tags: ['Clients'],
  summary: 'Create a new client Client’s client_id must be unique!',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ClientRepresentationSchema } } },
  },
  responses: { 201: { description: 'Created' }, 409: { description: 'Conflict' } },
})

export const getAdminRealmsRealmClientsInitialAccessRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/clients-initial-access',
  tags: ['Client Initial Access'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(ClientInitialAccessPresentationSchema) } },
    },
  },
})

export const postAdminRealmsRealmClientsInitialAccessRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/clients-initial-access',
  tags: ['Client Initial Access'],
  summary: 'Create a new initial access token.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ClientInitialAccessCreatePresentationSchema } },
    },
  },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: ClientInitialAccessCreatePresentationSchema } },
    },
  },
})

export const deleteAdminRealmsRealmClientsInitialAccessIdRoute = createRoute({
  method: 'delete',
  path: '/admin/realms/{realm}/clients-initial-access/{id}',
  tags: ['Client Initial Access'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: { 204: { description: 'No Content' } },
})

export const getAdminRealmsRealmClientsClientUuidRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/clients/{client-uuid}',
  tags: ['Clients'],
  summary: 'Get representation of the client',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ClientRepresentationSchema } },
    },
  },
})

export const putAdminRealmsRealmClientsClientUuidRoute = createRoute({
  method: 'put',
  path: '/admin/realms/{realm}/clients/{client-uuid}',
  tags: ['Clients'],
  summary: 'Update the client',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ClientRepresentationSchema } } },
  },
  responses: {
    204: { description: 'No Content' },
    400: { description: 'Bad Request' },
    409: { description: 'Conflict' },
  },
})

export const deleteAdminRealmsRealmClientsClientUuidRoute = createRoute({
  method: 'delete',
  path: '/admin/realms/{realm}/clients/{client-uuid}',
  tags: ['Clients'],
  summary: 'Delete the client',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'No Content' } },
})

export const getAdminRealmsRealmClientsClientUuidAuthzResourceServerRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/clients/{client-uuid}/authz/resource-server',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ResourceServerRepresentationSchema } },
    },
  },
})

export const putAdminRealmsRealmClientsClientUuidAuthzResourceServerRoute = createRoute({
  method: 'put',
  path: '/admin/realms/{realm}/clients/{client-uuid}/authz/resource-server',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ResourceServerRepresentationSchema } } },
  },
  responses: { 204: { description: 'No Content' } },
})

export const postAdminRealmsRealmClientsClientUuidAuthzResourceServerImportRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/clients/{client-uuid}/authz/resource-server/import',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ResourceServerRepresentationSchema } } },
  },
  responses: { 204: { description: 'No Content' } },
})

export const getAdminRealmsRealmClientsClientUuidAuthzResourceServerPermissionRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/clients/{client-uuid}/authz/resource-server/permission',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      fields: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'fields', in: 'query', schema: { type: 'string' }, required: false },
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
            name: 'first',
            in: 'query',
            schema: { format: 'int32', type: 'integer' },
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
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'max',
            in: 'query',
            schema: { format: 'int32', default: '100', type: 'integer' },
            required: false,
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'name', in: 'query', schema: { type: 'string' }, required: false },
        }),
      owner: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'owner', in: 'query', schema: { type: 'string' }, required: false },
        }),
      permission: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { name: 'permission', in: 'query', schema: { type: 'boolean' }, required: false },
        }),
      policyId: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'policyId', in: 'query', schema: { type: 'string' }, required: false },
        }),
      resource: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'resource', in: 'query', schema: { type: 'string' }, required: false },
        }),
      resourceType: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'resourceType', in: 'query', schema: { type: 'string' }, required: false },
        }),
      scope: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'scope', in: 'query', schema: { type: 'string' }, required: false },
        }),
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'type', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(AbstractPolicyRepresentationSchema) } },
    },
    204: { description: 'No Content' },
  },
})

export const postAdminRealmsRealmClientsClientUuidAuthzResourceServerPermissionRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/clients/{client-uuid}/authz/resource-server/permission',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: z.string() } } },
  },
  responses: { 201: { description: 'Created' } },
})

export const postAdminRealmsRealmClientsClientUuidAuthzResourceServerPermissionEvaluateRoute =
  createRoute({
    method: 'post',
    path: '/admin/realms/{realm}/clients/{client-uuid}/authz/resource-server/permission/evaluate',
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'client-uuid': z
          .string()
          .openapi({
            param: {
              name: 'client-uuid',
              in: 'path',
              description: 'id of client (not client-id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: PolicyEvaluationRequestSchema } } },
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: PolicyEvaluationResponseSchema } },
      },
      403: { description: 'Forbidden' },
      500: { description: 'Internal Server Error' },
    },
  })

export const getAdminRealmsRealmClientsClientUuidAuthzResourceServerPermissionProvidersRoute =
  createRoute({
    method: 'get',
    path: '/admin/realms/{realm}/clients/{client-uuid}/authz/resource-server/permission/providers',
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'client-uuid': z
          .string()
          .openapi({
            param: {
              name: 'client-uuid',
              in: 'path',
              description: 'id of client (not client-id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: z.array(PolicyProviderRepresentationSchema) } },
      },
    },
  })

export const getAdminRealmsRealmClientsClientUuidAuthzResourceServerPermissionSearchRoute =
  createRoute({
    method: 'get',
    path: '/admin/realms/{realm}/clients/{client-uuid}/authz/resource-server/permission/search',
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'client-uuid': z
          .string()
          .openapi({
            param: {
              name: 'client-uuid',
              in: 'path',
              description: 'id of client (not client-id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      query: z.object({
        fields: z
          .string()
          .exactOptional()
          .openapi({
            param: { name: 'fields', in: 'query', schema: { type: 'string' }, required: false },
          }),
        name: z
          .string()
          .exactOptional()
          .openapi({
            param: { name: 'name', in: 'query', schema: { type: 'string' }, required: false },
          }),
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: AbstractPolicyRepresentationSchema } },
      },
      204: { description: 'No Content' },
      400: { description: 'Bad Request' },
    },
  })

export const getAdminRealmsRealmClientsClientUuidAuthzResourceServerPolicyRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/clients/{client-uuid}/authz/resource-server/policy',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      fields: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'fields', in: 'query', schema: { type: 'string' }, required: false },
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
            name: 'first',
            in: 'query',
            schema: { format: 'int32', type: 'integer' },
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
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'max',
            in: 'query',
            schema: { format: 'int32', default: '100', type: 'integer' },
            required: false,
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'name', in: 'query', schema: { type: 'string' }, required: false },
        }),
      owner: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'owner', in: 'query', schema: { type: 'string' }, required: false },
        }),
      permission: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { name: 'permission', in: 'query', schema: { type: 'boolean' }, required: false },
        }),
      policyId: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'policyId', in: 'query', schema: { type: 'string' }, required: false },
        }),
      resource: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'resource', in: 'query', schema: { type: 'string' }, required: false },
        }),
      resourceType: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'resourceType', in: 'query', schema: { type: 'string' }, required: false },
        }),
      scope: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'scope', in: 'query', schema: { type: 'string' }, required: false },
        }),
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'type', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(AbstractPolicyRepresentationSchema) } },
    },
    204: { description: 'No Content' },
  },
})

export const postAdminRealmsRealmClientsClientUuidAuthzResourceServerPolicyRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/clients/{client-uuid}/authz/resource-server/policy',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: z.string() } } },
  },
  responses: { 201: { description: 'Created' } },
})

export const postAdminRealmsRealmClientsClientUuidAuthzResourceServerPolicyEvaluateRoute =
  createRoute({
    method: 'post',
    path: '/admin/realms/{realm}/clients/{client-uuid}/authz/resource-server/policy/evaluate',
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'client-uuid': z
          .string()
          .openapi({
            param: {
              name: 'client-uuid',
              in: 'path',
              description: 'id of client (not client-id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: PolicyEvaluationRequestSchema } } },
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: PolicyEvaluationResponseSchema } },
      },
      403: { description: 'Forbidden' },
      500: { description: 'Internal Server Error' },
    },
  })

export const getAdminRealmsRealmClientsClientUuidAuthzResourceServerPolicyProvidersRoute =
  createRoute({
    method: 'get',
    path: '/admin/realms/{realm}/clients/{client-uuid}/authz/resource-server/policy/providers',
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'client-uuid': z
          .string()
          .openapi({
            param: {
              name: 'client-uuid',
              in: 'path',
              description: 'id of client (not client-id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: z.array(PolicyProviderRepresentationSchema) } },
      },
    },
  })

export const getAdminRealmsRealmClientsClientUuidAuthzResourceServerPolicySearchRoute = createRoute(
  {
    method: 'get',
    path: '/admin/realms/{realm}/clients/{client-uuid}/authz/resource-server/policy/search',
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'client-uuid': z
          .string()
          .openapi({
            param: {
              name: 'client-uuid',
              in: 'path',
              description: 'id of client (not client-id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      query: z.object({
        fields: z
          .string()
          .exactOptional()
          .openapi({
            param: { name: 'fields', in: 'query', schema: { type: 'string' }, required: false },
          }),
        name: z
          .string()
          .exactOptional()
          .openapi({
            param: { name: 'name', in: 'query', schema: { type: 'string' }, required: false },
          }),
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: AbstractPolicyRepresentationSchema } },
      },
      204: { description: 'No Content' },
      400: { description: 'Bad Request' },
    },
  },
)

export const getAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/clients/{client-uuid}/authz/resource-server/resource',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      _id: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: '_id', in: 'query', schema: { type: 'string' }, required: false },
        }),
      deep: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { name: 'deep', in: 'query', schema: { type: 'boolean' }, required: false },
        }),
      exactName: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { name: 'exactName', in: 'query', schema: { type: 'boolean' }, required: false },
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
            name: 'first',
            in: 'query',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      matchingUri: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { name: 'matchingUri', in: 'query', schema: { type: 'boolean' }, required: false },
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
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'max',
            in: 'query',
            schema: { format: 'int32', default: '100', type: 'integer' },
            required: false,
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'name', in: 'query', schema: { type: 'string' }, required: false },
        }),
      owner: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'owner', in: 'query', schema: { type: 'string' }, required: false },
        }),
      scope: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'scope', in: 'query', schema: { type: 'string' }, required: false },
        }),
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'type', in: 'query', schema: { type: 'string' }, required: false },
        }),
      uri: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'uri', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(ResourceRepresentationSchema) } },
    },
  },
})

export const postAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/clients/{client-uuid}/authz/resource-server/resource',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      _id: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: '_id', in: 'query', schema: { type: 'string' }, required: false },
        }),
      deep: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { name: 'deep', in: 'query', schema: { type: 'boolean' }, required: false },
        }),
      exactName: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { name: 'exactName', in: 'query', schema: { type: 'boolean' }, required: false },
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
            name: 'first',
            in: 'query',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      matchingUri: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { name: 'matchingUri', in: 'query', schema: { type: 'boolean' }, required: false },
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
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'max',
            in: 'query',
            schema: { format: 'int32', default: '100', type: 'integer' },
            required: false,
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'name', in: 'query', schema: { type: 'string' }, required: false },
        }),
      owner: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'owner', in: 'query', schema: { type: 'string' }, required: false },
        }),
      scope: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'scope', in: 'query', schema: { type: 'string' }, required: false },
        }),
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'type', in: 'query', schema: { type: 'string' }, required: false },
        }),
      uri: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'uri', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
    body: { content: { 'application/json': { schema: ResourceRepresentationSchema } } },
  },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: ResourceRepresentationSchema } },
    },
    400: { description: 'Bad Request' },
  },
})

export const getAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceSearchRoute =
  createRoute({
    method: 'get',
    path: '/admin/realms/{realm}/clients/{client-uuid}/authz/resource-server/resource/search',
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'client-uuid': z
          .string()
          .openapi({
            param: {
              name: 'client-uuid',
              in: 'path',
              description: 'id of client (not client-id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      query: z.object({
        _id: z
          .string()
          .exactOptional()
          .openapi({
            param: { name: '_id', in: 'query', schema: { type: 'string' }, required: false },
          }),
        deep: z
          .stringbool()
          .exactOptional()
          .openapi({
            param: { name: 'deep', in: 'query', schema: { type: 'boolean' }, required: false },
          }),
        exactName: z
          .stringbool()
          .exactOptional()
          .openapi({
            param: { name: 'exactName', in: 'query', schema: { type: 'boolean' }, required: false },
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
              name: 'first',
              in: 'query',
              schema: { format: 'int32', type: 'integer' },
              required: false,
            },
          }),
        matchingUri: z
          .stringbool()
          .exactOptional()
          .openapi({
            param: {
              name: 'matchingUri',
              in: 'query',
              schema: { type: 'boolean' },
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
          .default(100)
          .exactOptional()
          .openapi({
            param: {
              name: 'max',
              in: 'query',
              schema: { format: 'int32', default: '100', type: 'integer' },
              required: false,
            },
          }),
        name: z
          .string()
          .exactOptional()
          .openapi({
            param: { name: 'name', in: 'query', schema: { type: 'string' }, required: false },
          }),
        owner: z
          .string()
          .exactOptional()
          .openapi({
            param: { name: 'owner', in: 'query', schema: { type: 'string' }, required: false },
          }),
        scope: z
          .string()
          .exactOptional()
          .openapi({
            param: { name: 'scope', in: 'query', schema: { type: 'string' }, required: false },
          }),
        type: z
          .string()
          .exactOptional()
          .openapi({
            param: { name: 'type', in: 'query', schema: { type: 'string' }, required: false },
          }),
        uri: z
          .string()
          .exactOptional()
          .openapi({
            param: { name: 'uri', in: 'query', schema: { type: 'string' }, required: false },
          }),
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: ResourceRepresentationSchema } },
      },
      204: { description: 'No Content' },
      400: { description: 'Bad Request' },
    },
  })

export const getAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceResourceIdRoute =
  createRoute({
    method: 'get',
    path: '/admin/realms/{realm}/clients/{client-uuid}/authz/resource-server/resource/{resource-id}',
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'client-uuid': z
          .string()
          .openapi({
            param: {
              name: 'client-uuid',
              in: 'path',
              description: 'id of client (not client-id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'resource-id': z
          .string()
          .openapi({
            param: { name: 'resource-id', in: 'path', required: true, schema: { type: 'string' } },
          }),
      }),
      query: z.object({
        _id: z
          .string()
          .exactOptional()
          .openapi({
            param: { name: '_id', in: 'query', schema: { type: 'string' }, required: false },
          }),
        deep: z
          .stringbool()
          .exactOptional()
          .openapi({
            param: { name: 'deep', in: 'query', schema: { type: 'boolean' }, required: false },
          }),
        exactName: z
          .stringbool()
          .exactOptional()
          .openapi({
            param: { name: 'exactName', in: 'query', schema: { type: 'boolean' }, required: false },
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
              name: 'first',
              in: 'query',
              schema: { format: 'int32', type: 'integer' },
              required: false,
            },
          }),
        matchingUri: z
          .stringbool()
          .exactOptional()
          .openapi({
            param: {
              name: 'matchingUri',
              in: 'query',
              schema: { type: 'boolean' },
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
          .default(100)
          .exactOptional()
          .openapi({
            param: {
              name: 'max',
              in: 'query',
              schema: { format: 'int32', default: '100', type: 'integer' },
              required: false,
            },
          }),
        name: z
          .string()
          .exactOptional()
          .openapi({
            param: { name: 'name', in: 'query', schema: { type: 'string' }, required: false },
          }),
        owner: z
          .string()
          .exactOptional()
          .openapi({
            param: { name: 'owner', in: 'query', schema: { type: 'string' }, required: false },
          }),
        scope: z
          .string()
          .exactOptional()
          .openapi({
            param: { name: 'scope', in: 'query', schema: { type: 'string' }, required: false },
          }),
        type: z
          .string()
          .exactOptional()
          .openapi({
            param: { name: 'type', in: 'query', schema: { type: 'string' }, required: false },
          }),
        uri: z
          .string()
          .exactOptional()
          .openapi({
            param: { name: 'uri', in: 'query', schema: { type: 'string' }, required: false },
          }),
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: ResourceRepresentationSchema } },
      },
      404: { description: 'Not found' },
    },
  })

export const putAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceResourceIdRoute =
  createRoute({
    method: 'put',
    path: '/admin/realms/{realm}/clients/{client-uuid}/authz/resource-server/resource/{resource-id}',
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'client-uuid': z
          .string()
          .openapi({
            param: {
              name: 'client-uuid',
              in: 'path',
              description: 'id of client (not client-id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'resource-id': z
          .string()
          .openapi({
            param: { name: 'resource-id', in: 'path', required: true, schema: { type: 'string' } },
          }),
      }),
      query: z.object({
        _id: z
          .string()
          .exactOptional()
          .openapi({
            param: { name: '_id', in: 'query', schema: { type: 'string' }, required: false },
          }),
        deep: z
          .stringbool()
          .exactOptional()
          .openapi({
            param: { name: 'deep', in: 'query', schema: { type: 'boolean' }, required: false },
          }),
        exactName: z
          .stringbool()
          .exactOptional()
          .openapi({
            param: { name: 'exactName', in: 'query', schema: { type: 'boolean' }, required: false },
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
              name: 'first',
              in: 'query',
              schema: { format: 'int32', type: 'integer' },
              required: false,
            },
          }),
        matchingUri: z
          .stringbool()
          .exactOptional()
          .openapi({
            param: {
              name: 'matchingUri',
              in: 'query',
              schema: { type: 'boolean' },
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
          .default(100)
          .exactOptional()
          .openapi({
            param: {
              name: 'max',
              in: 'query',
              schema: { format: 'int32', default: '100', type: 'integer' },
              required: false,
            },
          }),
        name: z
          .string()
          .exactOptional()
          .openapi({
            param: { name: 'name', in: 'query', schema: { type: 'string' }, required: false },
          }),
        owner: z
          .string()
          .exactOptional()
          .openapi({
            param: { name: 'owner', in: 'query', schema: { type: 'string' }, required: false },
          }),
        scope: z
          .string()
          .exactOptional()
          .openapi({
            param: { name: 'scope', in: 'query', schema: { type: 'string' }, required: false },
          }),
        type: z
          .string()
          .exactOptional()
          .openapi({
            param: { name: 'type', in: 'query', schema: { type: 'string' }, required: false },
          }),
        uri: z
          .string()
          .exactOptional()
          .openapi({
            param: { name: 'uri', in: 'query', schema: { type: 'string' }, required: false },
          }),
      }),
      body: { content: { 'application/json': { schema: ResourceRepresentationSchema } } },
    },
    responses: { 204: { description: 'No Content' }, 404: { description: 'Not Found' } },
  })

export const deleteAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceResourceIdRoute =
  createRoute({
    method: 'delete',
    path: '/admin/realms/{realm}/clients/{client-uuid}/authz/resource-server/resource/{resource-id}',
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'client-uuid': z
          .string()
          .openapi({
            param: {
              name: 'client-uuid',
              in: 'path',
              description: 'id of client (not client-id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'resource-id': z
          .string()
          .openapi({
            param: { name: 'resource-id', in: 'path', required: true, schema: { type: 'string' } },
          }),
      }),
      query: z.object({
        _id: z
          .string()
          .exactOptional()
          .openapi({
            param: { name: '_id', in: 'query', schema: { type: 'string' }, required: false },
          }),
        deep: z
          .stringbool()
          .exactOptional()
          .openapi({
            param: { name: 'deep', in: 'query', schema: { type: 'boolean' }, required: false },
          }),
        exactName: z
          .stringbool()
          .exactOptional()
          .openapi({
            param: { name: 'exactName', in: 'query', schema: { type: 'boolean' }, required: false },
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
              name: 'first',
              in: 'query',
              schema: { format: 'int32', type: 'integer' },
              required: false,
            },
          }),
        matchingUri: z
          .stringbool()
          .exactOptional()
          .openapi({
            param: {
              name: 'matchingUri',
              in: 'query',
              schema: { type: 'boolean' },
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
          .default(100)
          .exactOptional()
          .openapi({
            param: {
              name: 'max',
              in: 'query',
              schema: { format: 'int32', default: '100', type: 'integer' },
              required: false,
            },
          }),
        name: z
          .string()
          .exactOptional()
          .openapi({
            param: { name: 'name', in: 'query', schema: { type: 'string' }, required: false },
          }),
        owner: z
          .string()
          .exactOptional()
          .openapi({
            param: { name: 'owner', in: 'query', schema: { type: 'string' }, required: false },
          }),
        scope: z
          .string()
          .exactOptional()
          .openapi({
            param: { name: 'scope', in: 'query', schema: { type: 'string' }, required: false },
          }),
        type: z
          .string()
          .exactOptional()
          .openapi({
            param: { name: 'type', in: 'query', schema: { type: 'string' }, required: false },
          }),
        uri: z
          .string()
          .exactOptional()
          .openapi({
            param: { name: 'uri', in: 'query', schema: { type: 'string' }, required: false },
          }),
      }),
    },
    responses: { 204: { description: 'No Content' }, 404: { description: 'Not Found' } },
  })

export const getAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceResourceIdAttributesRoute =
  createRoute({
    method: 'get',
    path: '/admin/realms/{realm}/clients/{client-uuid}/authz/resource-server/resource/{resource-id}/attributes',
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'client-uuid': z
          .string()
          .openapi({
            param: {
              name: 'client-uuid',
              in: 'path',
              description: 'id of client (not client-id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'resource-id': z
          .string()
          .openapi({
            param: { name: 'resource-id', in: 'path', required: true, schema: { type: 'string' } },
          }),
      }),
      query: z.object({
        _id: z
          .string()
          .exactOptional()
          .openapi({
            param: { name: '_id', in: 'query', schema: { type: 'string' }, required: false },
          }),
        deep: z
          .stringbool()
          .exactOptional()
          .openapi({
            param: { name: 'deep', in: 'query', schema: { type: 'boolean' }, required: false },
          }),
        exactName: z
          .stringbool()
          .exactOptional()
          .openapi({
            param: { name: 'exactName', in: 'query', schema: { type: 'boolean' }, required: false },
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
              name: 'first',
              in: 'query',
              schema: { format: 'int32', type: 'integer' },
              required: false,
            },
          }),
        matchingUri: z
          .stringbool()
          .exactOptional()
          .openapi({
            param: {
              name: 'matchingUri',
              in: 'query',
              schema: { type: 'boolean' },
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
          .default(100)
          .exactOptional()
          .openapi({
            param: {
              name: 'max',
              in: 'query',
              schema: { format: 'int32', default: '100', type: 'integer' },
              required: false,
            },
          }),
        name: z
          .string()
          .exactOptional()
          .openapi({
            param: { name: 'name', in: 'query', schema: { type: 'string' }, required: false },
          }),
        owner: z
          .string()
          .exactOptional()
          .openapi({
            param: { name: 'owner', in: 'query', schema: { type: 'string' }, required: false },
          }),
        scope: z
          .string()
          .exactOptional()
          .openapi({
            param: { name: 'scope', in: 'query', schema: { type: 'string' }, required: false },
          }),
        type: z
          .string()
          .exactOptional()
          .openapi({
            param: { name: 'type', in: 'query', schema: { type: 'string' }, required: false },
          }),
        uri: z
          .string()
          .exactOptional()
          .openapi({
            param: { name: 'uri', in: 'query', schema: { type: 'string' }, required: false },
          }),
      }),
    },
    responses: { 200: { description: 'OK' } },
  })

export const getAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceResourceIdPermissionsRoute =
  createRoute({
    method: 'get',
    path: '/admin/realms/{realm}/clients/{client-uuid}/authz/resource-server/resource/{resource-id}/permissions',
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'client-uuid': z
          .string()
          .openapi({
            param: {
              name: 'client-uuid',
              in: 'path',
              description: 'id of client (not client-id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'resource-id': z
          .string()
          .openapi({
            param: { name: 'resource-id', in: 'path', required: true, schema: { type: 'string' } },
          }),
      }),
      query: z.object({
        _id: z
          .string()
          .exactOptional()
          .openapi({
            param: { name: '_id', in: 'query', schema: { type: 'string' }, required: false },
          }),
        deep: z
          .stringbool()
          .exactOptional()
          .openapi({
            param: { name: 'deep', in: 'query', schema: { type: 'boolean' }, required: false },
          }),
        exactName: z
          .stringbool()
          .exactOptional()
          .openapi({
            param: { name: 'exactName', in: 'query', schema: { type: 'boolean' }, required: false },
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
              name: 'first',
              in: 'query',
              schema: { format: 'int32', type: 'integer' },
              required: false,
            },
          }),
        matchingUri: z
          .stringbool()
          .exactOptional()
          .openapi({
            param: {
              name: 'matchingUri',
              in: 'query',
              schema: { type: 'boolean' },
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
          .default(100)
          .exactOptional()
          .openapi({
            param: {
              name: 'max',
              in: 'query',
              schema: { format: 'int32', default: '100', type: 'integer' },
              required: false,
            },
          }),
        name: z
          .string()
          .exactOptional()
          .openapi({
            param: { name: 'name', in: 'query', schema: { type: 'string' }, required: false },
          }),
        owner: z
          .string()
          .exactOptional()
          .openapi({
            param: { name: 'owner', in: 'query', schema: { type: 'string' }, required: false },
          }),
        scope: z
          .string()
          .exactOptional()
          .openapi({
            param: { name: 'scope', in: 'query', schema: { type: 'string' }, required: false },
          }),
        type: z
          .string()
          .exactOptional()
          .openapi({
            param: { name: 'type', in: 'query', schema: { type: 'string' }, required: false },
          }),
        uri: z
          .string()
          .exactOptional()
          .openapi({
            param: { name: 'uri', in: 'query', schema: { type: 'string' }, required: false },
          }),
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: z.array(PolicyRepresentationSchema) } },
      },
      404: { description: 'Not found' },
    },
  })

export const getAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceResourceIdScopesRoute =
  createRoute({
    method: 'get',
    path: '/admin/realms/{realm}/clients/{client-uuid}/authz/resource-server/resource/{resource-id}/scopes',
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'client-uuid': z
          .string()
          .openapi({
            param: {
              name: 'client-uuid',
              in: 'path',
              description: 'id of client (not client-id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'resource-id': z
          .string()
          .openapi({
            param: { name: 'resource-id', in: 'path', required: true, schema: { type: 'string' } },
          }),
      }),
      query: z.object({
        _id: z
          .string()
          .exactOptional()
          .openapi({
            param: { name: '_id', in: 'query', schema: { type: 'string' }, required: false },
          }),
        deep: z
          .stringbool()
          .exactOptional()
          .openapi({
            param: { name: 'deep', in: 'query', schema: { type: 'boolean' }, required: false },
          }),
        exactName: z
          .stringbool()
          .exactOptional()
          .openapi({
            param: { name: 'exactName', in: 'query', schema: { type: 'boolean' }, required: false },
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
              name: 'first',
              in: 'query',
              schema: { format: 'int32', type: 'integer' },
              required: false,
            },
          }),
        matchingUri: z
          .stringbool()
          .exactOptional()
          .openapi({
            param: {
              name: 'matchingUri',
              in: 'query',
              schema: { type: 'boolean' },
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
          .default(100)
          .exactOptional()
          .openapi({
            param: {
              name: 'max',
              in: 'query',
              schema: { format: 'int32', default: '100', type: 'integer' },
              required: false,
            },
          }),
        name: z
          .string()
          .exactOptional()
          .openapi({
            param: { name: 'name', in: 'query', schema: { type: 'string' }, required: false },
          }),
        owner: z
          .string()
          .exactOptional()
          .openapi({
            param: { name: 'owner', in: 'query', schema: { type: 'string' }, required: false },
          }),
        scope: z
          .string()
          .exactOptional()
          .openapi({
            param: { name: 'scope', in: 'query', schema: { type: 'string' }, required: false },
          }),
        type: z
          .string()
          .exactOptional()
          .openapi({
            param: { name: 'type', in: 'query', schema: { type: 'string' }, required: false },
          }),
        uri: z
          .string()
          .exactOptional()
          .openapi({
            param: { name: 'uri', in: 'query', schema: { type: 'string' }, required: false },
          }),
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: z.array(ScopeRepresentationSchema) } },
      },
      404: { description: 'Not found' },
    },
  })

export const getAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/clients/{client-uuid}/authz/resource-server/scope',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
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
            name: 'first',
            in: 'query',
            schema: { format: 'int32', type: 'integer' },
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
            name: 'max',
            in: 'query',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'name', in: 'query', schema: { type: 'string' }, required: false },
        }),
      scopeId: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'scopeId', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(ScopeRepresentationSchema) } },
    },
  },
})

export const postAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/clients/{client-uuid}/authz/resource-server/scope',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ScopeRepresentationSchema } } },
  },
  responses: { 200: { description: 'OK' } },
})

export const getAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeSearchRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/clients/{client-uuid}/authz/resource-server/scope/search',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'name', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(ScopeRepresentationSchema) } },
    },
    204: { description: 'No Content' },
    400: { description: 'Bad Request' },
  },
})

export const getAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeScopeIdRoute = createRoute(
  {
    method: 'get',
    path: '/admin/realms/{realm}/clients/{client-uuid}/authz/resource-server/scope/{scope-id}',
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'client-uuid': z
          .string()
          .openapi({
            param: {
              name: 'client-uuid',
              in: 'path',
              description: 'id of client (not client-id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'scope-id': z
          .string()
          .openapi({
            param: { name: 'scope-id', in: 'path', required: true, schema: { type: 'string' } },
          }),
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: ScopeRepresentationSchema } },
      },
      404: { description: 'Not found' },
    },
  },
)

export const putAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeScopeIdRoute = createRoute(
  {
    method: 'put',
    path: '/admin/realms/{realm}/clients/{client-uuid}/authz/resource-server/scope/{scope-id}',
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'client-uuid': z
          .string()
          .openapi({
            param: {
              name: 'client-uuid',
              in: 'path',
              description: 'id of client (not client-id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'scope-id': z
          .string()
          .openapi({
            param: { name: 'scope-id', in: 'path', required: true, schema: { type: 'string' } },
          }),
      }),
      body: { content: { 'application/json': { schema: ScopeRepresentationSchema } } },
    },
    responses: { 200: { description: 'OK' } },
  },
)

export const deleteAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeScopeIdRoute =
  createRoute({
    method: 'delete',
    path: '/admin/realms/{realm}/clients/{client-uuid}/authz/resource-server/scope/{scope-id}',
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'client-uuid': z
          .string()
          .openapi({
            param: {
              name: 'client-uuid',
              in: 'path',
              description: 'id of client (not client-id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'scope-id': z
          .string()
          .openapi({
            param: { name: 'scope-id', in: 'path', required: true, schema: { type: 'string' } },
          }),
      }),
    },
    responses: { 200: { description: 'OK' } },
  })

export const getAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeScopeIdPermissionsRoute =
  createRoute({
    method: 'get',
    path: '/admin/realms/{realm}/clients/{client-uuid}/authz/resource-server/scope/{scope-id}/permissions',
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'client-uuid': z
          .string()
          .openapi({
            param: {
              name: 'client-uuid',
              in: 'path',
              description: 'id of client (not client-id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'scope-id': z
          .string()
          .openapi({
            param: { name: 'scope-id', in: 'path', required: true, schema: { type: 'string' } },
          }),
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: z.array(PolicyRepresentationSchema) } },
      },
      404: { description: 'Not found' },
    },
  })

export const getAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeScopeIdResourcesRoute =
  createRoute({
    method: 'get',
    path: '/admin/realms/{realm}/clients/{client-uuid}/authz/resource-server/scope/{scope-id}/resources',
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'client-uuid': z
          .string()
          .openapi({
            param: {
              name: 'client-uuid',
              in: 'path',
              description: 'id of client (not client-id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'scope-id': z
          .string()
          .openapi({
            param: { name: 'scope-id', in: 'path', required: true, schema: { type: 'string' } },
          }),
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: z.array(ResourceRepresentationSchema) } },
      },
      404: { description: 'Not found' },
    },
  })

export const getAdminRealmsRealmClientsClientUuidAuthzResourceServerSettingsRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/clients/{client-uuid}/authz/resource-server/settings',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ResourceServerRepresentationSchema } },
    },
  },
})

export const getAdminRealmsRealmClientsClientUuidCertificatesAttrRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/clients/{client-uuid}/certificates/{attr}',
  tags: ['Client Attribute Certificate'],
  summary: 'Get key info',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      attr: z
        .string()
        .openapi({
          param: { name: 'attr', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CertificateRepresentationSchema } },
    },
  },
})

export const postAdminRealmsRealmClientsClientUuidCertificatesAttrDownloadRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/clients/{client-uuid}/certificates/{attr}/download',
  tags: ['Client Attribute Certificate'],
  summary: 'Get a keystore file for the client, containing the public certificate',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      attr: z
        .string()
        .openapi({
          param: { name: 'attr', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: KeyStoreConfigSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
  },
  deprecated: true,
})

export const postAdminRealmsRealmClientsClientUuidCertificatesAttrGenerateRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/clients/{client-uuid}/certificates/{attr}/generate',
  tags: ['Client Attribute Certificate'],
  summary: 'Generate a new certificate with new key pair',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      attr: z
        .string()
        .openapi({
          param: { name: 'attr', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CertificateRepresentationSchema } },
    },
  },
  deprecated: true,
})

export const postAdminRealmsRealmClientsClientUuidCertificatesAttrGenerateAndDownloadRoute =
  createRoute({
    method: 'post',
    path: '/admin/realms/{realm}/clients/{client-uuid}/certificates/{attr}/generate-and-download',
    tags: ['Client Attribute Certificate'],
    summary:
      'Generate a new keypair and certificate, and get the private key file\n\nGenerates a keypair and certificate and serves the private key in a specified keystore format.\nOnly generated public certificate is saved in Keycloak DB - the private key is not.',
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'client-uuid': z
          .string()
          .openapi({
            param: {
              name: 'client-uuid',
              in: 'path',
              description: 'id of client (not client-id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        attr: z
          .string()
          .openapi({
            param: { name: 'attr', in: 'path', required: true, schema: { type: 'string' } },
          }),
      }),
      body: { content: { 'application/json': { schema: KeyStoreConfigSchema } } },
    },
    responses: {
      200: {
        description: 'OK',
        content: {
          'application/octet-stream': {
            schema: z.file().openapi({ type: 'string', format: 'binary' }),
          },
        },
      },
    },
    deprecated: true,
  })

export const postAdminRealmsRealmClientsClientUuidCertificatesAttrUploadRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/clients/{client-uuid}/certificates/{attr}/upload',
  tags: ['Client Attribute Certificate'],
  summary: 'Upload only certificate, not private key',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      attr: z
        .string()
        .openapi({
          param: { name: 'attr', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CertificateRepresentationSchema } },
    },
  },
  deprecated: true,
})

export const postAdminRealmsRealmClientsClientUuidCertificatesAttrUploadCertificateRoute =
  createRoute({
    method: 'post',
    path: '/admin/realms/{realm}/clients/{client-uuid}/certificates/{attr}/upload-certificate',
    tags: ['Client Attribute Certificate'],
    summary: 'Upload only certificate, not private key',
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'client-uuid': z
          .string()
          .openapi({
            param: {
              name: 'client-uuid',
              in: 'path',
              description: 'id of client (not client-id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        attr: z
          .string()
          .openapi({
            param: { name: 'attr', in: 'path', required: true, schema: { type: 'string' } },
          }),
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: CertificateRepresentationSchema } },
      },
    },
  })

export const getAdminRealmsRealmClientsClientUuidClientSecretRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/clients/{client-uuid}/client-secret',
  tags: ['Clients'],
  summary: 'Get the client secret',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CredentialRepresentationSchema } },
    },
  },
})

export const postAdminRealmsRealmClientsClientUuidClientSecretRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/clients/{client-uuid}/client-secret',
  tags: ['Clients'],
  summary: 'Generate a new secret for the client',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CredentialRepresentationSchema } },
    },
  },
})

export const getAdminRealmsRealmClientsClientUuidClientSecretRotatedRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/clients/{client-uuid}/client-secret/rotated',
  tags: ['Clients'],
  summary: 'Get the rotated client secret',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CredentialRepresentationSchema } },
    },
  },
})

export const deleteAdminRealmsRealmClientsClientUuidClientSecretRotatedRoute = createRoute({
  method: 'delete',
  path: '/admin/realms/{realm}/clients/{client-uuid}/client-secret/rotated',
  tags: ['Clients'],
  summary: 'Invalidate the rotated secret for the client',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getAdminRealmsRealmClientsClientUuidDefaultClientScopesRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/clients/{client-uuid}/default-client-scopes',
  tags: ['Clients'],
  summary: 'Get default client scopes.  Only name and ids are returned.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(ClientScopeRepresentationSchema) } },
    },
  },
})

export const putAdminRealmsRealmClientsClientUuidDefaultClientScopesClientScopeIdRoute =
  createRoute({
    method: 'put',
    path: '/admin/realms/{realm}/clients/{client-uuid}/default-client-scopes/{clientScopeId}',
    tags: ['Clients'],
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'client-uuid': z
          .string()
          .openapi({
            param: {
              name: 'client-uuid',
              in: 'path',
              description: 'id of client (not client-id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        clientScopeId: z
          .string()
          .openapi({
            param: {
              name: 'clientScopeId',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: { 204: { description: 'No Content' } },
  })

export const deleteAdminRealmsRealmClientsClientUuidDefaultClientScopesClientScopeIdRoute =
  createRoute({
    method: 'delete',
    path: '/admin/realms/{realm}/clients/{client-uuid}/default-client-scopes/{clientScopeId}',
    tags: ['Clients'],
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'client-uuid': z
          .string()
          .openapi({
            param: {
              name: 'client-uuid',
              in: 'path',
              description: 'id of client (not client-id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        clientScopeId: z
          .string()
          .openapi({
            param: {
              name: 'clientScopeId',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: { 204: { description: 'No Content' } },
  })

export const getAdminRealmsRealmClientsClientUuidEvaluateScopesGenerateExampleAccessTokenRoute =
  createRoute({
    method: 'get',
    path: '/admin/realms/{realm}/clients/{client-uuid}/evaluate-scopes/generate-example-access-token',
    tags: ['Clients'],
    summary: 'Create JSON with payload of example access token',
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'client-uuid': z
          .string()
          .openapi({
            param: {
              name: 'client-uuid',
              in: 'path',
              description: 'id of client (not client-id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      query: z.object({
        audience: z
          .string()
          .exactOptional()
          .openapi({
            param: { name: 'audience', in: 'query', schema: { type: 'string' }, required: false },
          }),
        scope: z
          .string()
          .exactOptional()
          .openapi({
            param: { name: 'scope', in: 'query', schema: { type: 'string' }, required: false },
          }),
        userId: z
          .string()
          .exactOptional()
          .openapi({
            param: { name: 'userId', in: 'query', schema: { type: 'string' }, required: false },
          }),
      }),
    },
    responses: {
      200: { description: '', content: { 'application/json': { schema: AccessTokenSchema } } },
      403: { description: 'Forbidden' },
      404: { description: 'Not Found' },
    },
  })

export const getAdminRealmsRealmClientsClientUuidEvaluateScopesGenerateExampleIdTokenRoute =
  createRoute({
    method: 'get',
    path: '/admin/realms/{realm}/clients/{client-uuid}/evaluate-scopes/generate-example-id-token',
    tags: ['Clients'],
    summary: 'Create JSON with payload of example id token',
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'client-uuid': z
          .string()
          .openapi({
            param: {
              name: 'client-uuid',
              in: 'path',
              description: 'id of client (not client-id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      query: z.object({
        audience: z
          .string()
          .exactOptional()
          .openapi({
            param: { name: 'audience', in: 'query', schema: { type: 'string' }, required: false },
          }),
        scope: z
          .string()
          .exactOptional()
          .openapi({
            param: { name: 'scope', in: 'query', schema: { type: 'string' }, required: false },
          }),
        userId: z
          .string()
          .exactOptional()
          .openapi({
            param: { name: 'userId', in: 'query', schema: { type: 'string' }, required: false },
          }),
      }),
    },
    responses: {
      200: { description: '', content: { 'application/json': { schema: IDTokenSchema } } },
      403: { description: 'Forbidden' },
      404: { description: 'Not Found' },
    },
  })

export const getAdminRealmsRealmClientsClientUuidEvaluateScopesGenerateExampleSamlResponseRoute =
  createRoute({
    method: 'get',
    path: '/admin/realms/{realm}/clients/{client-uuid}/evaluate-scopes/generate-example-saml-response',
    tags: ['Clients'],
    summary: 'Create JSON with an example SAML response as payload',
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'client-uuid': z
          .string()
          .openapi({
            param: {
              name: 'client-uuid',
              in: 'path',
              description: 'id of client (not client-id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      query: z.object({
        audience: z
          .string()
          .exactOptional()
          .openapi({
            param: { name: 'audience', in: 'query', schema: { type: 'string' }, required: false },
          }),
        scope: z
          .string()
          .exactOptional()
          .openapi({
            param: { name: 'scope', in: 'query', schema: { type: 'string' }, required: false },
          }),
        userId: z
          .string()
          .exactOptional()
          .openapi({
            param: { name: 'userId', in: 'query', schema: { type: 'string' }, required: false },
          }),
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: SamlExampleResponseSchema } },
      },
    },
  })

export const getAdminRealmsRealmClientsClientUuidEvaluateScopesGenerateExampleUserinfoRoute =
  createRoute({
    method: 'get',
    path: '/admin/realms/{realm}/clients/{client-uuid}/evaluate-scopes/generate-example-userinfo',
    tags: ['Clients'],
    summary: 'Create JSON with payload of example user info',
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'client-uuid': z
          .string()
          .openapi({
            param: {
              name: 'client-uuid',
              in: 'path',
              description: 'id of client (not client-id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      query: z.object({
        scope: z
          .string()
          .exactOptional()
          .openapi({
            param: { name: 'scope', in: 'query', schema: { type: 'string' }, required: false },
          }),
        userId: z
          .string()
          .exactOptional()
          .openapi({
            param: { name: 'userId', in: 'query', schema: { type: 'string' }, required: false },
          }),
      }),
    },
    responses: {
      200: { description: '', content: { 'application/json': { schema: z.object({}) } } },
      403: { description: 'Forbidden' },
    },
  })

export const getAdminRealmsRealmClientsClientUuidEvaluateScopesProtocolMappersRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/clients/{client-uuid}/evaluate-scopes/protocol-mappers',
  tags: ['Clients'],
  summary:
    'Return list of all protocol mappers, which will be used when generating tokens issued for particular client.',
  description:
    'This means protocol mappers assigned to this client directly and protocol mappers assigned to all client scopes of this client.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      scope: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'scope', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': { schema: z.array(ProtocolMapperEvaluationRepresentationSchema) },
      },
    },
    403: { description: 'Forbidden' },
  },
})

export const getAdminRealmsRealmClientsClientUuidEvaluateScopesScopeMappingsRoleContainerIdGrantedRoute =
  createRoute({
    method: 'get',
    path: '/admin/realms/{realm}/clients/{client-uuid}/evaluate-scopes/scope-mappings/{roleContainerId}/granted',
    tags: ['Clients'],
    summary:
      'Get effective scope mapping of all roles of particular role container, which this client is defacto allowed to have in the accessToken issued for him.',
    description:
      'This contains scope mappings, which this client has directly, as well as scope mappings, which are granted to all client scopes, which are linked with this client.',
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'client-uuid': z
          .string()
          .openapi({
            param: {
              name: 'client-uuid',
              in: 'path',
              description: 'id of client (not client-id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        roleContainerId: z
          .string()
          .openapi({
            param: {
              name: 'roleContainerId',
              in: 'path',
              description: 'either realm name OR client UUID',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      query: z.object({
        scope: z
          .string()
          .exactOptional()
          .openapi({
            param: { name: 'scope', in: 'query', schema: { type: 'string' }, required: false },
          }),
      }),
    },
    responses: {
      200: {
        description: '',
        content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
      },
      403: { description: 'Forbidden' },
    },
  })

export const getAdminRealmsRealmClientsClientUuidEvaluateScopesScopeMappingsRoleContainerIdNotGrantedRoute =
  createRoute({
    method: 'get',
    path: '/admin/realms/{realm}/clients/{client-uuid}/evaluate-scopes/scope-mappings/{roleContainerId}/not-granted',
    tags: ['Clients'],
    summary:
      "Get roles, which this client doesn't have scope for and can't have them in the accessToken issued for him.",
    description:
      'Defacto all the other roles of particular role container, which are not in {@link #getGrantedScopeMappings()}',
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'client-uuid': z
          .string()
          .openapi({
            param: {
              name: 'client-uuid',
              in: 'path',
              description: 'id of client (not client-id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        roleContainerId: z
          .string()
          .openapi({
            param: {
              name: 'roleContainerId',
              in: 'path',
              description: 'either realm name OR client UUID',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      query: z.object({
        scope: z
          .string()
          .exactOptional()
          .openapi({
            param: { name: 'scope', in: 'query', schema: { type: 'string' }, required: false },
          }),
      }),
    },
    responses: {
      200: {
        description: '',
        content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
      },
      403: { description: 'Forbidden' },
    },
  })

export const getAdminRealmsRealmClientsClientUuidInstallationProvidersProviderIdRoute = createRoute(
  {
    method: 'get',
    path: '/admin/realms/{realm}/clients/{client-uuid}/installation/providers/{providerId}',
    tags: ['Clients'],
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'client-uuid': z
          .string()
          .openapi({
            param: {
              name: 'client-uuid',
              in: 'path',
              description: 'id of client (not client-id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        providerId: z
          .string()
          .openapi({
            param: { name: 'providerId', in: 'path', required: true, schema: { type: 'string' } },
          }),
      }),
    },
    responses: { 200: { description: 'OK' } },
  },
)

export const getAdminRealmsRealmClientsClientUuidManagementPermissionsRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/clients/{client-uuid}/management/permissions',
  tags: ['Clients'],
  summary:
    'Return object stating whether client Authorization permissions have been initialized or not and a reference',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ManagementPermissionReferenceSchema } },
    },
  },
})

export const putAdminRealmsRealmClientsClientUuidManagementPermissionsRoute = createRoute({
  method: 'put',
  path: '/admin/realms/{realm}/clients/{client-uuid}/management/permissions',
  tags: ['Clients'],
  summary:
    'Return object stating whether client Authorization permissions have been initialized or not and a reference',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ManagementPermissionReferenceSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ManagementPermissionReferenceSchema } },
    },
  },
})

export const postAdminRealmsRealmClientsClientUuidNodesRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/clients/{client-uuid}/nodes',
  tags: ['Clients'],
  summary:
    'Register a cluster node with the client Manually register cluster node to this client - usually it’s not needed to call this directly as adapter should handle by sending registration request to Keycloak',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: z.record(z.string(), z.string()) } } },
  },
  responses: {
    204: { description: 'No Content' },
    400: {
      description:
        'Bad Request - node hostname is missing, contains reserved characters, or is rejected by client policy',
    },
  },
})

export const deleteAdminRealmsRealmClientsClientUuidNodesNodeRoute = createRoute({
  method: 'delete',
  path: '/admin/realms/{realm}/clients/{client-uuid}/nodes/{node}',
  tags: ['Clients'],
  summary: 'Unregister a cluster node from the client',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      node: z
        .string()
        .openapi({
          param: { name: 'node', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 204: { description: 'No Content' } },
})

export const getAdminRealmsRealmClientsClientUuidOfflineSessionCountRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/clients/{client-uuid}/offline-session-count',
  tags: ['Clients'],
  summary:
    'Get application offline session count Returns a number of offline user sessions associated with this client { "count": number }',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.record(
            z.string(),
            z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64(),
              )
              .openapi({ type: 'integer', format: 'int64' }),
          ),
        },
      },
    },
  },
})

export const getAdminRealmsRealmClientsClientUuidOfflineSessionsRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/clients/{client-uuid}/offline-sessions',
  tags: ['Clients'],
  summary:
    'Get offline sessions for client. Returns a list of offline user sessions associated with this client',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
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
            name: 'first',
            in: 'query',
            description: 'Paging offset',
            schema: { format: 'int32', type: 'integer' },
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
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'max',
            in: 'query',
            description: 'Maximum results size.',
            schema: { format: 'int32', default: '100', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(UserSessionRepresentationSchema) } },
    },
  },
})

export const getAdminRealmsRealmClientsClientUuidOptionalClientScopesRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/clients/{client-uuid}/optional-client-scopes',
  tags: ['Clients'],
  summary: 'Get optional client scopes.  Only name and ids are returned.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(ClientScopeRepresentationSchema) } },
    },
  },
})

export const putAdminRealmsRealmClientsClientUuidOptionalClientScopesClientScopeIdRoute =
  createRoute({
    method: 'put',
    path: '/admin/realms/{realm}/clients/{client-uuid}/optional-client-scopes/{clientScopeId}',
    tags: ['Clients'],
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'client-uuid': z
          .string()
          .openapi({
            param: {
              name: 'client-uuid',
              in: 'path',
              description: 'id of client (not client-id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        clientScopeId: z
          .string()
          .openapi({
            param: {
              name: 'clientScopeId',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: { 204: { description: 'No Content' } },
  })

export const deleteAdminRealmsRealmClientsClientUuidOptionalClientScopesClientScopeIdRoute =
  createRoute({
    method: 'delete',
    path: '/admin/realms/{realm}/clients/{client-uuid}/optional-client-scopes/{clientScopeId}',
    tags: ['Clients'],
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'client-uuid': z
          .string()
          .openapi({
            param: {
              name: 'client-uuid',
              in: 'path',
              description: 'id of client (not client-id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        clientScopeId: z
          .string()
          .openapi({
            param: {
              name: 'clientScopeId',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: { 204: { description: 'No Content' } },
  })

export const postAdminRealmsRealmClientsClientUuidProtocolMappersAddModelsRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/clients/{client-uuid}/protocol-mappers/add-models',
  tags: ['Protocol Mappers'],
  summary: 'Create multiple mappers',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: z.array(ProtocolMapperRepresentationSchema) } },
    },
  },
  responses: { 204: { description: 'No Content' } },
})

export const getAdminRealmsRealmClientsClientUuidProtocolMappersModelsRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/clients/{client-uuid}/protocol-mappers/models',
  tags: ['Protocol Mappers'],
  summary: 'Get mappers',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(ProtocolMapperRepresentationSchema) } },
    },
  },
})

export const postAdminRealmsRealmClientsClientUuidProtocolMappersModelsRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/clients/{client-uuid}/protocol-mappers/models',
  tags: ['Protocol Mappers'],
  summary: 'Create a mapper',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ProtocolMapperRepresentationSchema } } },
  },
  responses: { 201: { description: 'Created' }, 409: { description: 'Conflict' } },
})

export const getAdminRealmsRealmClientsClientUuidProtocolMappersModelsIdRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/clients/{client-uuid}/protocol-mappers/models/{id}',
  tags: ['Protocol Mappers'],
  summary: 'Get mapper by id',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'Mapper id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ProtocolMapperRepresentationSchema } },
    },
  },
})

export const putAdminRealmsRealmClientsClientUuidProtocolMappersModelsIdRoute = createRoute({
  method: 'put',
  path: '/admin/realms/{realm}/clients/{client-uuid}/protocol-mappers/models/{id}',
  tags: ['Protocol Mappers'],
  summary: 'Update the mapper',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'Mapper id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ProtocolMapperRepresentationSchema } } },
  },
  responses: { 204: { description: 'No Content' } },
})

export const deleteAdminRealmsRealmClientsClientUuidProtocolMappersModelsIdRoute = createRoute({
  method: 'delete',
  path: '/admin/realms/{realm}/clients/{client-uuid}/protocol-mappers/models/{id}',
  tags: ['Protocol Mappers'],
  summary: 'Delete the mapper',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'Mapper id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'No Content' } },
})

export const getAdminRealmsRealmClientsClientUuidProtocolMappersProtocolProtocolRoute = createRoute(
  {
    method: 'get',
    path: '/admin/realms/{realm}/clients/{client-uuid}/protocol-mappers/protocol/{protocol}',
    tags: ['Protocol Mappers'],
    summary: 'Get mappers by name for a specific protocol',
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'client-uuid': z
          .string()
          .openapi({
            param: {
              name: 'client-uuid',
              in: 'path',
              description: 'id of client (not client-id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        protocol: z
          .string()
          .openapi({
            param: { name: 'protocol', in: 'path', required: true, schema: { type: 'string' } },
          }),
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: z.array(ProtocolMapperRepresentationSchema) } },
      },
    },
  },
)

export const postAdminRealmsRealmClientsClientUuidPushRevocationRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/clients/{client-uuid}/push-revocation',
  tags: ['Clients'],
  summary:
    "Push the client's revocation policy to its admin URL If the client has an admin URL, push revocation policy to it.",
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GlobalRequestResultSchema } },
    },
  },
})

export const postAdminRealmsRealmClientsClientUuidRegistrationAccessTokenRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/clients/{client-uuid}/registration-access-token',
  tags: ['Clients'],
  summary: 'Generate a new registration access token for the client',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ClientRepresentationSchema } },
    },
  },
})

export const getAdminRealmsRealmClientsClientUuidRolesRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/clients/{client-uuid}/roles',
  tags: ['Roles'],
  summary: 'Get all roles for the realm or client',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      briefRepresentation: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'briefRepresentation',
            in: 'query',
            schema: { default: true, type: 'boolean' },
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
            name: 'first',
            in: 'query',
            schema: { format: 'int32', type: 'integer' },
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
            name: 'max',
            in: 'query',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      search: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            in: 'query',
            schema: { default: '', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
    },
    403: { description: 'Forbidden' },
  },
})

export const postAdminRealmsRealmClientsClientUuidRolesRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/clients/{client-uuid}/roles',
  tags: ['Roles'],
  summary: 'Create a new role for the realm or client',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RoleRepresentationSchema } } },
  },
  responses: {
    201: { description: 'Created' },
    400: { description: 'Bad Request' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    409: { description: 'Conflict' },
    500: { description: 'Internal Server Error' },
  },
})

export const getAdminRealmsRealmClientsClientUuidRolesRoleNameRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/clients/{client-uuid}/roles/{role-name}',
  tags: ['Roles'],
  summary: 'Get a role by name',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'role-name': z
        .string()
        .openapi({
          param: {
            name: 'role-name',
            in: 'path',
            description: "role's name (not id!)",
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: RoleRepresentationSchema } } },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const putAdminRealmsRealmClientsClientUuidRolesRoleNameRoute = createRoute({
  method: 'put',
  path: '/admin/realms/{realm}/clients/{client-uuid}/roles/{role-name}',
  tags: ['Roles'],
  summary: 'Update a role by name',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'role-name': z
        .string()
        .openapi({
          param: {
            name: 'role-name',
            in: 'path',
            description: "role's name (not id!)",
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RoleRepresentationSchema } } },
  },
  responses: {
    204: { description: 'No Content' },
    400: { description: 'Bad Request' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    409: { description: 'Conflict' },
  },
})

export const deleteAdminRealmsRealmClientsClientUuidRolesRoleNameRoute = createRoute({
  method: 'delete',
  path: '/admin/realms/{realm}/clients/{client-uuid}/roles/{role-name}',
  tags: ['Roles'],
  summary: 'Delete a role by name',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'role-name': z
        .string()
        .openapi({
          param: {
            name: 'role-name',
            in: 'path',
            description: "role's name (not id!)",
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    400: { description: 'Bad Request' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getAdminRealmsRealmClientsClientUuidRolesRoleNameCompositesRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/clients/{client-uuid}/roles/{role-name}/composites',
  tags: ['Roles'],
  summary: 'Get composites of the role',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'role-name': z
        .string()
        .openapi({
          param: {
            name: 'role-name',
            in: 'path',
            description: "role's name (not id!)",
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
    },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const postAdminRealmsRealmClientsClientUuidRolesRoleNameCompositesRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/clients/{client-uuid}/roles/{role-name}/composites',
  tags: ['Roles'],
  summary: 'Add a composite to the role',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'role-name': z
        .string()
        .openapi({
          param: {
            name: 'role-name',
            in: 'path',
            description: "role's name (not id!)",
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } } },
  },
  responses: {
    204: { description: 'No Content' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const deleteAdminRealmsRealmClientsClientUuidRolesRoleNameCompositesRoute = createRoute({
  method: 'delete',
  path: '/admin/realms/{realm}/clients/{client-uuid}/roles/{role-name}/composites',
  tags: ['Roles'],
  summary: "Remove roles from the role's composite",
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'role-name': z
        .string()
        .openapi({
          param: {
            name: 'role-name',
            in: 'path',
            description: "role's name (not id!)",
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } } },
  },
  responses: {
    204: { description: 'No Content' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getAdminRealmsRealmClientsClientUuidRolesRoleNameCompositesClientsTargetClientUuidRoute =
  createRoute({
    method: 'get',
    path: '/admin/realms/{realm}/clients/{client-uuid}/roles/{role-name}/composites/clients/{targetClientUuid}',
    tags: ['Roles'],
    summary: "Get client-level roles for the client that are in the role's composite",
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'client-uuid': z
          .string()
          .openapi({
            param: {
              name: 'client-uuid',
              in: 'path',
              description: 'id of client (not client-id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'role-name': z
          .string()
          .openapi({
            param: {
              name: 'role-name',
              in: 'path',
              description: "role's name (not id!)",
              required: true,
              schema: { type: 'string' },
            },
          }),
        targetClientUuid: z
          .string()
          .openapi({
            param: {
              name: 'targetClientUuid',
              in: 'path',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: '',
        content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
      },
      403: { description: 'Forbidden' },
      404: { description: 'Not Found' },
    },
  })

export const getAdminRealmsRealmClientsClientUuidRolesRoleNameCompositesRealmRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/clients/{client-uuid}/roles/{role-name}/composites/realm',
  tags: ['Roles'],
  summary: "Get realm-level roles of the role's composite",
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'role-name': z
        .string()
        .openapi({
          param: {
            name: 'role-name',
            in: 'path',
            description: "role's name (not id!)",
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
    },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getAdminRealmsRealmClientsClientUuidRolesRoleNameGroupsRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/clients/{client-uuid}/roles/{role-name}/groups',
  tags: ['Roles'],
  summary: 'Returns a stream of groups that have the specified role name',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'role-name': z
        .string()
        .openapi({
          param: {
            name: 'role-name',
            in: 'path',
            description: 'the role name.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      briefRepresentation: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'briefRepresentation',
            in: 'query',
            description:
              'If false, return a full representation of the {@code GroupRepresentation} objects.',
            schema: { default: true, type: 'boolean' },
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
            name: 'first',
            in: 'query',
            description: 'First result to return. Ignored if negative or {@code null}.',
            schema: { format: 'int32', type: 'integer' },
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
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'max',
            in: 'query',
            description: 'Maximum number of results to return. Unbounded if negative.',
            schema: { format: 'int32', default: '100', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(GroupRepresentationSchema) } },
    },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getAdminRealmsRealmClientsClientUuidRolesRoleNameManagementPermissionsRoute =
  createRoute({
    method: 'get',
    path: '/admin/realms/{realm}/clients/{client-uuid}/roles/{role-name}/management/permissions',
    tags: ['Roles'],
    summary:
      'Return object stating whether role Authorization permissions have been initialized or not and a reference',
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'client-uuid': z
          .string()
          .openapi({
            param: {
              name: 'client-uuid',
              in: 'path',
              description: 'id of client (not client-id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'role-name': z
          .string()
          .openapi({
            param: { name: 'role-name', in: 'path', required: true, schema: { type: 'string' } },
          }),
      }),
    },
    responses: {
      200: {
        description: '',
        content: { 'application/json': { schema: ManagementPermissionReferenceSchema } },
      },
      403: { description: 'Forbidden' },
      404: { description: 'Not Found' },
    },
  })

export const putAdminRealmsRealmClientsClientUuidRolesRoleNameManagementPermissionsRoute =
  createRoute({
    method: 'put',
    path: '/admin/realms/{realm}/clients/{client-uuid}/roles/{role-name}/management/permissions',
    tags: ['Roles'],
    summary:
      'Return object stating whether role Authorization permissions have been initialized or not and a reference',
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'client-uuid': z
          .string()
          .openapi({
            param: {
              name: 'client-uuid',
              in: 'path',
              description: 'id of client (not client-id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'role-name': z
          .string()
          .openapi({
            param: { name: 'role-name', in: 'path', required: true, schema: { type: 'string' } },
          }),
      }),
      body: { content: { 'application/json': { schema: ManagementPermissionReferenceSchema } } },
    },
    responses: {
      200: {
        description: '',
        content: { 'application/json': { schema: ManagementPermissionReferenceSchema } },
      },
      403: { description: 'Forbidden' },
      404: { description: 'Not Found' },
    },
  })

export const getAdminRealmsRealmClientsClientUuidRolesRoleNameUsersRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/clients/{client-uuid}/roles/{role-name}/users',
  tags: ['Roles'],
  summary: 'Returns a stream of users that have the specified role name.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'role-name': z
        .string()
        .openapi({
          param: {
            name: 'role-name',
            in: 'path',
            description: 'the role name.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      briefRepresentation: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'briefRepresentation',
            in: 'query',
            description:
              'Boolean which defines whether brief representations are returned (default: false)',
            schema: { type: 'boolean' },
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
            name: 'first',
            in: 'query',
            description: 'first result to return. Ignored if negative or {@code null}.',
            schema: { format: 'int32', type: 'integer' },
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
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'max',
            in: 'query',
            description: 'Maximum number of results to return. Unbounded if negative.',
            schema: { format: 'int32', default: '100', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(UserRepresentationSchema) } },
    },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getAdminRealmsRealmClientsClientUuidScopeMappingsRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/clients/{client-uuid}/scope-mappings',
  tags: ['Scope Mappings'],
  summary: 'Get all scope mappings for the client',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: MappingsRepresentationSchema } },
    },
  },
  deprecated: true,
})

export const getAdminRealmsRealmClientsClientUuidScopeMappingsClientsClientRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/clients/{client-uuid}/scope-mappings/clients/{client}',
  tags: ['Scope Mappings'],
  summary: "Get the roles associated with a client's scope Returns roles for the client.",
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      client: z
        .string()
        .openapi({
          param: { name: 'client', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
    },
  },
})

export const postAdminRealmsRealmClientsClientUuidScopeMappingsClientsClientRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/clients/{client-uuid}/scope-mappings/clients/{client}',
  tags: ['Scope Mappings'],
  summary: "Add client-level roles to the client's scope",
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      client: z
        .string()
        .openapi({
          param: { name: 'client', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } } },
  },
  responses: { 204: { description: 'No Content' } },
})

export const deleteAdminRealmsRealmClientsClientUuidScopeMappingsClientsClientRoute = createRoute({
  method: 'delete',
  path: '/admin/realms/{realm}/clients/{client-uuid}/scope-mappings/clients/{client}',
  tags: ['Scope Mappings'],
  summary: "Remove client-level roles from the client's scope.",
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      client: z
        .string()
        .openapi({
          param: { name: 'client', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } } },
  },
  responses: { 204: { description: 'No Content' } },
})

export const getAdminRealmsRealmClientsClientUuidScopeMappingsClientsClientAvailableRoute =
  createRoute({
    method: 'get',
    path: '/admin/realms/{realm}/clients/{client-uuid}/scope-mappings/clients/{client}/available',
    tags: ['Scope Mappings'],
    summary:
      "The available client-level roles Returns the roles for the client that can be associated with the client's scope",
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'client-uuid': z
          .string()
          .openapi({
            param: {
              name: 'client-uuid',
              in: 'path',
              description: 'id of client (not client-id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        client: z
          .string()
          .openapi({
            param: { name: 'client', in: 'path', required: true, schema: { type: 'string' } },
          }),
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
      },
    },
  })

export const getAdminRealmsRealmClientsClientUuidScopeMappingsClientsClientCompositeRoute =
  createRoute({
    method: 'get',
    path: '/admin/realms/{realm}/clients/{client-uuid}/scope-mappings/clients/{client}/composite',
    tags: ['Scope Mappings'],
    summary:
      "Get effective client roles Returns the roles for the client that are associated with the client's scope.",
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'client-uuid': z
          .string()
          .openapi({
            param: {
              name: 'client-uuid',
              in: 'path',
              description: 'id of client (not client-id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        client: z
          .string()
          .openapi({
            param: { name: 'client', in: 'path', required: true, schema: { type: 'string' } },
          }),
      }),
      query: z.object({
        briefRepresentation: z
          .stringbool()
          .default(true)
          .exactOptional()
          .openapi({
            param: {
              name: 'briefRepresentation',
              in: 'query',
              description: 'if false, return roles with their attributes',
              schema: { default: true, type: 'boolean' },
              required: false,
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
      },
    },
  })

export const getAdminRealmsRealmClientsClientUuidScopeMappingsRealmRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/clients/{client-uuid}/scope-mappings/realm',
  tags: ['Scope Mappings'],
  summary: "Get realm-level roles associated with the client's scope",
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
    },
  },
})

export const postAdminRealmsRealmClientsClientUuidScopeMappingsRealmRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/clients/{client-uuid}/scope-mappings/realm',
  tags: ['Scope Mappings'],
  summary: "Add a set of realm-level roles to the client's scope",
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } } },
  },
  responses: { 204: { description: 'No Content' } },
})

export const deleteAdminRealmsRealmClientsClientUuidScopeMappingsRealmRoute = createRoute({
  method: 'delete',
  path: '/admin/realms/{realm}/clients/{client-uuid}/scope-mappings/realm',
  tags: ['Scope Mappings'],
  summary: "Remove a set of realm-level roles from the client's scope",
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } } },
  },
  responses: { 204: { description: 'No Content' } },
})

export const getAdminRealmsRealmClientsClientUuidScopeMappingsRealmAvailableRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/clients/{client-uuid}/scope-mappings/realm/available',
  tags: ['Scope Mappings'],
  summary: "Get realm-level roles that are available to attach to this client's scope",
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
    },
  },
})

export const getAdminRealmsRealmClientsClientUuidScopeMappingsRealmCompositeRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/clients/{client-uuid}/scope-mappings/realm/composite',
  tags: ['Scope Mappings'],
  summary:
    'Get effective realm-level roles associated with the client’s scope What this does is recurse any composite roles associated with the client’s scope and adds the roles to this lists.',
  description:
    'The method is really to show a comprehensive total view of realm-level roles associated with the client.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      briefRepresentation: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'briefRepresentation',
            in: 'query',
            description: 'if false, return roles with their attributes',
            schema: { default: true, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
    },
  },
})

export const getAdminRealmsRealmClientsClientUuidServiceAccountUserRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/clients/{client-uuid}/service-account-user',
  tags: ['Clients'],
  summary: 'Get a user dedicated to the service account',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: UserRepresentationSchema } },
    },
  },
})

export const getAdminRealmsRealmClientsClientUuidSessionCountRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/clients/{client-uuid}/session-count',
  tags: ['Clients'],
  summary:
    'Get application session count Returns a number of user sessions associated with this client { "count": number }',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.record(
            z.string(),
            z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64(),
              )
              .openapi({ type: 'integer', format: 'int64' }),
          ),
        },
      },
    },
  },
})

export const getAdminRealmsRealmClientsClientUuidTestNodesAvailableRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/clients/{client-uuid}/test-nodes-available',
  tags: ['Clients'],
  summary:
    "Test if registered cluster nodes are available Tests availability by sending 'ping' request to all cluster nodes.",
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GlobalRequestResultSchema } },
    },
  },
})

export const getAdminRealmsRealmClientsClientUuidUserSessionsRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/clients/{client-uuid}/user-sessions',
  tags: ['Clients'],
  summary:
    'Get user sessions for client. Returns a list of user sessions associated with this client.\n',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'client-uuid': z
        .string()
        .openapi({
          param: {
            name: 'client-uuid',
            in: 'path',
            description: 'id of client (not client-id!)',
            required: true,
            schema: { type: 'string' },
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
            name: 'first',
            in: 'query',
            description: 'Paging offset',
            schema: { format: 'int32', type: 'integer' },
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
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'max',
            in: 'query',
            description: 'Maximum results size.',
            schema: { format: 'int32', default: '100', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(UserSessionRepresentationSchema) } },
    },
  },
})

export const getAdminRealmsRealmComponentsRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/components',
  tags: ['Component'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'name', in: 'query', schema: { type: 'string' }, required: false },
        }),
      parent: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'parent', in: 'query', schema: { type: 'string' }, required: false },
        }),
      providerId: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'providerId', in: 'query', schema: { type: 'string' }, required: false },
        }),
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'type', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(ComponentRepresentationSchema) } },
    },
  },
})

export const postAdminRealmsRealmComponentsRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/components',
  tags: ['Component'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ComponentRepresentationSchema } } },
  },
  responses: { 200: { description: 'OK' } },
})

export const getAdminRealmsRealmComponentsIdRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/components/{id}',
  tags: ['Component'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ComponentRepresentationSchema } },
    },
  },
})

export const putAdminRealmsRealmComponentsIdRoute = createRoute({
  method: 'put',
  path: '/admin/realms/{realm}/components/{id}',
  tags: ['Component'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
    body: { content: { 'application/json': { schema: ComponentRepresentationSchema } } },
  },
  responses: { 200: { description: 'OK' } },
})

export const deleteAdminRealmsRealmComponentsIdRoute = createRoute({
  method: 'delete',
  path: '/admin/realms/{realm}/components/{id}',
  tags: ['Component'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: { 204: { description: 'No Content' } },
})

export const getAdminRealmsRealmComponentsIdSubComponentTypesRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/components/{id}/sub-component-types',
  tags: ['Component'],
  summary:
    'List of subcomponent types that are available to configure for a particular parent component.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
    query: z.object({
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'type', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(ComponentTypeRepresentationSchema) } },
    },
  },
})

export const getAdminRealmsRealmCredentialRegistratorsRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/credential-registrators',
  tags: ['Realms Admin'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.array(z.string()) } } },
    403: { description: 'Forbidden' },
  },
})

export const getAdminRealmsRealmDefaultDefaultClientScopesRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/default-default-client-scopes',
  tags: ['Realms Admin'],
  summary: 'Get realm default client scopes. Only name and ids are returned.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(ClientScopeRepresentationSchema) } },
    },
    403: { description: 'Forbidden' },
  },
})

export const putAdminRealmsRealmDefaultDefaultClientScopesClientScopeIdRoute = createRoute({
  method: 'put',
  path: '/admin/realms/{realm}/default-default-client-scopes/{clientScopeId}',
  tags: ['Realms Admin'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      clientScopeId: z
        .string()
        .openapi({
          param: { name: 'clientScopeId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const deleteAdminRealmsRealmDefaultDefaultClientScopesClientScopeIdRoute = createRoute({
  method: 'delete',
  path: '/admin/realms/{realm}/default-default-client-scopes/{clientScopeId}',
  tags: ['Realms Admin'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      clientScopeId: z
        .string()
        .openapi({
          param: { name: 'clientScopeId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getAdminRealmsRealmDefaultGroupsRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/default-groups',
  tags: ['Realms Admin'],
  summary: 'Get group hierarchy.  Only name and ids are returned.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(GroupRepresentationSchema) } },
    },
    403: { description: 'Forbidden' },
  },
})

export const putAdminRealmsRealmDefaultGroupsGroupIdRoute = createRoute({
  method: 'put',
  path: '/admin/realms/{realm}/default-groups/{groupId}',
  tags: ['Realms Admin'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      groupId: z
        .string()
        .openapi({
          param: { name: 'groupId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const deleteAdminRealmsRealmDefaultGroupsGroupIdRoute = createRoute({
  method: 'delete',
  path: '/admin/realms/{realm}/default-groups/{groupId}',
  tags: ['Realms Admin'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      groupId: z
        .string()
        .openapi({
          param: { name: 'groupId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getAdminRealmsRealmDefaultOptionalClientScopesRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/default-optional-client-scopes',
  tags: ['Realms Admin'],
  summary: 'Get realm optional client scopes. Only name and ids are returned.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(ClientScopeRepresentationSchema) } },
    },
    403: { description: 'Forbidden' },
  },
})

export const putAdminRealmsRealmDefaultOptionalClientScopesClientScopeIdRoute = createRoute({
  method: 'put',
  path: '/admin/realms/{realm}/default-optional-client-scopes/{clientScopeId}',
  tags: ['Realms Admin'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      clientScopeId: z
        .string()
        .openapi({
          param: { name: 'clientScopeId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const deleteAdminRealmsRealmDefaultOptionalClientScopesClientScopeIdRoute = createRoute({
  method: 'delete',
  path: '/admin/realms/{realm}/default-optional-client-scopes/{clientScopeId}',
  tags: ['Realms Admin'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      clientScopeId: z
        .string()
        .openapi({
          param: { name: 'clientScopeId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getAdminRealmsRealmEventsRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/events',
  tags: ['Realms Admin'],
  summary:
    'Get events Returns all events, or filters them based on URL query parameters listed here',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      client: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'client',
            in: 'query',
            description: 'App or oauth client name',
            schema: { type: 'string' },
            required: false,
          },
        }),
      dateFrom: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'dateFrom',
            in: 'query',
            description:
              'From (inclusive) date (yyyy-MM-dd) or time in Epoch timestamp millis (number of milliseconds since January 1, 1970, 00:00:00 GMT)',
            schema: { type: 'string' },
            required: false,
          },
        }),
      dateTo: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'dateTo',
            in: 'query',
            description:
              'To (inclusive) date (yyyy-MM-dd) or time in Epoch timestamp millis (number of milliseconds since January 1, 1970, 00:00:00 GMT)',
            schema: { type: 'string' },
            required: false,
          },
        }),
      direction: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'direction',
            in: 'query',
            description: 'The direction to sort events by (asc or desc)',
            schema: { type: 'string' },
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
            name: 'first',
            in: 'query',
            description: 'Paging offset',
            schema: { format: 'int32', type: 'integer' },
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
            description: 'IP Address',
            schema: { type: 'string' },
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
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'max',
            in: 'query',
            description: 'Maximum results size',
            schema: { format: 'int32', default: '100', type: 'integer' },
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
            name: 'type',
            in: 'query',
            description: 'The types of events to return',
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
      user: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'user',
            in: 'query',
            description: 'User id',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(EventRepresentationSchema) } },
    },
    400: { description: 'Bad Request' },
    403: { description: 'Forbidden' },
  },
})

export const deleteAdminRealmsRealmEventsRoute = createRoute({
  method: 'delete',
  path: '/admin/realms/{realm}/events',
  tags: ['Realms Admin'],
  summary: 'Delete all events',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'No Content' }, 403: { description: 'Forbidden' } },
})

export const getAdminRealmsRealmEventsConfigRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/events/config',
  tags: ['Realms Admin'],
  summary:
    'Get the events provider configuration Returns JSON object with events provider configuration',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: RealmEventsConfigRepresentationSchema } },
    },
    403: { description: 'Forbidden' },
  },
})

export const putAdminRealmsRealmEventsConfigRoute = createRoute({
  method: 'put',
  path: '/admin/realms/{realm}/events/config',
  tags: ['Realms Admin'],
  description: 'Update the events provider Change the events provider and/or its configuration',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RealmEventsConfigRepresentationSchema } } },
  },
  responses: { 204: { description: 'No Content' }, 403: { description: 'Forbidden' } },
})

export const getAdminRealmsRealmGroupByPathPathRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/group-by-path/{path}',
  tags: ['Realms Admin'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      path: z
        .string()
        .regex(/.*/)
        .openapi({
          param: {
            name: 'path',
            in: 'path',
            required: true,
            schema: { pattern: '.*', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GroupRepresentationSchema } },
    },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getAdminRealmsRealmGroupsRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/groups',
  tags: ['Groups'],
  summary:
    'Get group hierarchy.  Only `name` and `id` are returned.  `subGroups` are only returned when using the `search` or `q` parameter. If none of these parameters is provided, the top-level groups are returned without `subGroups` being filled.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      briefRepresentation: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'briefRepresentation',
            in: 'query',
            schema: { default: true, type: 'boolean' },
            required: false,
          },
        }),
      exact: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'exact',
            in: 'query',
            schema: { default: 'false', type: 'boolean' },
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
            name: 'first',
            in: 'query',
            schema: { format: 'int32', type: 'integer' },
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
            name: 'max',
            in: 'query',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      populateHierarchy: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'populateHierarchy',
            in: 'query',
            schema: { default: true, type: 'boolean' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'q', in: 'query', schema: { type: 'string' }, required: false },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'search', in: 'query', schema: { type: 'string' }, required: false },
        }),
      subGroupsCount: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'subGroupsCount',
            in: 'query',
            description:
              'Boolean which defines whether to return the count of subgroups for each group (default: true',
            schema: { default: 'true', type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(GroupRepresentationSchema) } },
    },
  },
})

export const postAdminRealmsRealmGroupsRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/groups',
  tags: ['Groups'],
  summary: 'create or add a top level realm groupSet or create child.',
  description:
    'This will update the group and set the parent if it exists. Create it and set the parent if the group doesn’t exist.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GroupRepresentationSchema } } },
  },
  responses: {
    201: { description: 'Created' },
    204: { description: 'No Content' },
    400: { description: 'Bad Request' },
    409: { description: 'Conflict' },
  },
})

export const getAdminRealmsRealmGroupsCountRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/groups/count',
  tags: ['Groups'],
  summary: 'Returns the groups counts.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'search', in: 'query', schema: { type: 'string' }, required: false },
        }),
      top: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'top',
            in: 'query',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.record(
            z.string(),
            z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64(),
              )
              .openapi({ type: 'integer', format: 'int64' }),
          ),
        },
      },
    },
  },
})

export const getAdminRealmsRealmGroupsGroupIdRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/groups/{group-id}',
  tags: ['Groups'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'group-id': z
        .string()
        .openapi({
          param: { name: 'group-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GroupRepresentationSchema } },
    },
  },
})

export const putAdminRealmsRealmGroupsGroupIdRoute = createRoute({
  method: 'put',
  path: '/admin/realms/{realm}/groups/{group-id}',
  tags: ['Groups'],
  summary: 'Update group, ignores subgroups.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'group-id': z
        .string()
        .openapi({
          param: { name: 'group-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: GroupRepresentationSchema } } },
  },
  responses: {
    204: { description: 'No Content' },
    400: { description: 'Bad Request' },
    409: { description: 'Conflict' },
  },
})

export const deleteAdminRealmsRealmGroupsGroupIdRoute = createRoute({
  method: 'delete',
  path: '/admin/realms/{realm}/groups/{group-id}',
  tags: ['Groups'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'group-id': z
        .string()
        .openapi({
          param: { name: 'group-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 204: { description: 'No Content' } },
})

export const getAdminRealmsRealmGroupsGroupIdChildrenRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/groups/{group-id}/children',
  tags: ['Groups'],
  summary:
    'Return a paginated list of subgroups that have a parent group corresponding to the group on the URL',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'group-id': z
        .string()
        .openapi({
          param: { name: 'group-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      briefRepresentation: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'briefRepresentation',
            in: 'query',
            description:
              'Boolean which defines whether brief groups representations are returned or not (default: false)',
            schema: { default: 'false', type: 'boolean' },
            required: false,
          },
        }),
      exact: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'exact',
            in: 'query',
            description:
              'Boolean which defines whether the params "search" must match exactly or not',
            schema: { type: 'boolean' },
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
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'first',
            in: 'query',
            description: 'The position of the first result to be returned (pagination offset).',
            schema: { format: 'int32', default: '0', type: 'integer' },
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
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'max',
            in: 'query',
            description: 'The maximum number of results that are to be returned. Defaults to 10',
            schema: { format: 'int32', default: '10', type: 'integer' },
            required: false,
          },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            in: 'query',
            description:
              'A String representing either an exact group name or a partial name, defaults to prefix search.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      subGroupsCount: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'subGroupsCount',
            in: 'query',
            description:
              'Boolean which defines whether to return the count of subgroups for each subgroup of this group (default: true)',
            schema: { default: 'true', type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(GroupRepresentationSchema) } },
    },
  },
})

export const postAdminRealmsRealmGroupsGroupIdChildrenRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/groups/{group-id}/children',
  tags: ['Groups'],
  summary: 'Set or create child.',
  description:
    'This will just set the parent if it exists. Create it and set the parent if the group doesn’t exist.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'group-id': z
        .string()
        .openapi({
          param: { name: 'group-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: GroupRepresentationSchema } } },
  },
  responses: {
    201: { description: 'Created' },
    204: { description: 'No Content' },
    400: { description: 'Bad Request' },
    409: { description: 'Conflict' },
  },
})

export const getAdminRealmsRealmGroupsGroupIdManagementPermissionsRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/groups/{group-id}/management/permissions',
  tags: ['Groups'],
  summary:
    'Return object stating whether client Authorization permissions have been initialized or not and a reference',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'group-id': z
        .string()
        .openapi({
          param: { name: 'group-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ManagementPermissionReferenceSchema } },
    },
  },
})

export const putAdminRealmsRealmGroupsGroupIdManagementPermissionsRoute = createRoute({
  method: 'put',
  path: '/admin/realms/{realm}/groups/{group-id}/management/permissions',
  tags: ['Groups'],
  summary:
    'Return object stating whether client Authorization permissions have been initialized or not and a reference',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'group-id': z
        .string()
        .openapi({
          param: { name: 'group-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: ManagementPermissionReferenceSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ManagementPermissionReferenceSchema } },
    },
  },
})

export const getAdminRealmsRealmGroupsGroupIdMembersRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/groups/{group-id}/members',
  tags: ['Groups'],
  summary: 'Get users Returns a stream of users, filtered according to query parameters',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'group-id': z
        .string()
        .openapi({
          param: { name: 'group-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      briefRepresentation: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'briefRepresentation',
            in: 'query',
            description:
              'Only return basic information (only guaranteed to return id, username, created, first and last name, email, enabled state, email verification state, federation link, and access. Note that it means that namely user attributes, required actions, and not before are not returned.)',
            schema: { type: 'boolean' },
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
            name: 'first',
            in: 'query',
            description: 'Pagination offset',
            schema: { format: 'int32', type: 'integer' },
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
            name: 'max',
            in: 'query',
            description: 'Maximum results size (defaults to 100)',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(UserRepresentationSchema) } },
    },
  },
})

export const getAdminRealmsRealmGroupsGroupIdRoleMappingsRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/groups/{group-id}/role-mappings',
  tags: ['Role Mapper'],
  summary: 'Get role mappings',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'group-id': z
        .string()
        .openapi({
          param: { name: 'group-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: MappingsRepresentationSchema } },
    },
    403: { description: 'Forbidden' },
  },
})

export const getAdminRealmsRealmGroupsGroupIdRoleMappingsClientsClientIdRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/groups/{group-id}/role-mappings/clients/{client-id}',
  tags: ['Client Role Mappings'],
  summary: 'Get client-level role mappings for the user or group, and the app',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'group-id': z
        .string()
        .openapi({
          param: { name: 'group-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      'client-id': z
        .string()
        .openapi({
          param: {
            name: 'client-id',
            in: 'path',
            description: 'client id (not clientId!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
    },
  },
})

export const postAdminRealmsRealmGroupsGroupIdRoleMappingsClientsClientIdRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/groups/{group-id}/role-mappings/clients/{client-id}',
  tags: ['Client Role Mappings'],
  summary: 'Add client-level roles to the user or group role mapping',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'group-id': z
        .string()
        .openapi({
          param: { name: 'group-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      'client-id': z
        .string()
        .openapi({
          param: {
            name: 'client-id',
            in: 'path',
            description: 'client id (not clientId!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } } },
  },
  responses: { 204: { description: 'No Content' } },
})

export const deleteAdminRealmsRealmGroupsGroupIdRoleMappingsClientsClientIdRoute = createRoute({
  method: 'delete',
  path: '/admin/realms/{realm}/groups/{group-id}/role-mappings/clients/{client-id}',
  tags: ['Client Role Mappings'],
  summary: 'Delete client-level roles from user or group role mapping',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'group-id': z
        .string()
        .openapi({
          param: { name: 'group-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      'client-id': z
        .string()
        .openapi({
          param: {
            name: 'client-id',
            in: 'path',
            description: 'client id (not clientId!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } } },
  },
  responses: { 204: { description: 'No Content' } },
})

export const getAdminRealmsRealmGroupsGroupIdRoleMappingsClientsClientIdAvailableRoute =
  createRoute({
    method: 'get',
    path: '/admin/realms/{realm}/groups/{group-id}/role-mappings/clients/{client-id}/available',
    tags: ['Client Role Mappings'],
    summary: 'Get available client-level roles that can be mapped to the user or group',
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'group-id': z
          .string()
          .openapi({
            param: { name: 'group-id', in: 'path', required: true, schema: { type: 'string' } },
          }),
        'client-id': z
          .string()
          .openapi({
            param: {
              name: 'client-id',
              in: 'path',
              description: 'client id (not clientId!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
      },
    },
  })

export const getAdminRealmsRealmGroupsGroupIdRoleMappingsClientsClientIdCompositeRoute =
  createRoute({
    method: 'get',
    path: '/admin/realms/{realm}/groups/{group-id}/role-mappings/clients/{client-id}/composite',
    tags: ['Client Role Mappings'],
    summary: 'Get effective client-level role mappings This recurses any composite roles',
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'group-id': z
          .string()
          .openapi({
            param: { name: 'group-id', in: 'path', required: true, schema: { type: 'string' } },
          }),
        'client-id': z
          .string()
          .openapi({
            param: {
              name: 'client-id',
              in: 'path',
              description: 'client id (not clientId!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      query: z.object({
        briefRepresentation: z
          .stringbool()
          .default(true)
          .exactOptional()
          .openapi({
            param: {
              name: 'briefRepresentation',
              in: 'query',
              description: 'if false, return roles with their attributes',
              schema: { default: true, type: 'boolean' },
              required: false,
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
      },
    },
  })

export const getAdminRealmsRealmGroupsGroupIdRoleMappingsRealmRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/groups/{group-id}/role-mappings/realm',
  tags: ['Role Mapper'],
  summary: 'Get realm-level role mappings',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'group-id': z
        .string()
        .openapi({
          param: { name: 'group-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
    },
    403: { description: 'Forbidden' },
  },
})

export const postAdminRealmsRealmGroupsGroupIdRoleMappingsRealmRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/groups/{group-id}/role-mappings/realm',
  tags: ['Role Mapper'],
  summary: 'Add realm-level role mappings to the user',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'group-id': z
        .string()
        .openapi({
          param: { name: 'group-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } } },
  },
  responses: {
    204: { description: 'No Content' },
    400: { description: 'Bad Request' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
})

export const deleteAdminRealmsRealmGroupsGroupIdRoleMappingsRealmRoute = createRoute({
  method: 'delete',
  path: '/admin/realms/{realm}/groups/{group-id}/role-mappings/realm',
  tags: ['Role Mapper'],
  summary: 'Delete realm-level role mappings',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'group-id': z
        .string()
        .openapi({
          param: { name: 'group-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } } },
  },
  responses: {
    204: { description: 'No Content' },
    400: { description: 'Bad Request' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
})

export const getAdminRealmsRealmGroupsGroupIdRoleMappingsRealmAvailableRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/groups/{group-id}/role-mappings/realm/available',
  tags: ['Role Mapper'],
  summary: 'Get realm-level roles that can be mapped',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'group-id': z
        .string()
        .openapi({
          param: { name: 'group-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
    },
    403: { description: 'Forbidden' },
  },
})

export const getAdminRealmsRealmGroupsGroupIdRoleMappingsRealmCompositeRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/groups/{group-id}/role-mappings/realm/composite',
  tags: ['Role Mapper'],
  summary:
    'Get effective realm-level role mappings This will recurse all composite roles to get the result.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'group-id': z
        .string()
        .openapi({
          param: { name: 'group-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      briefRepresentation: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'briefRepresentation',
            in: 'query',
            description: 'if false, return roles with their attributes',
            schema: { default: true, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
    },
    403: { description: 'Forbidden' },
  },
})

export const postAdminRealmsRealmIdentityProviderImportConfigRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/identity-provider/import-config',
  tags: ['Identity Providers'],
  summary: 'Import identity provider from JSON body',
  description: 'Import identity provider from uploaded JSON file',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: z.record(z.string(), z.any()) } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.record(z.string(), z.string()) } },
    },
  },
})

export const getAdminRealmsRealmIdentityProviderInstancesRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/identity-provider/instances',
  tags: ['Identity Providers'],
  summary: 'List identity providers',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      briefRepresentation: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'briefRepresentation',
            in: 'query',
            description:
              'Boolean which defines whether brief representations are returned (default: false)',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      capability: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'capability',
            in: 'query',
            description: 'Filter by identity providers capability',
            schema: { type: 'string' },
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
            name: 'first',
            in: 'query',
            description: 'Pagination offset',
            schema: { format: 'int32', type: 'integer' },
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
            name: 'max',
            in: 'query',
            description: 'Maximum results size (defaults to 100)',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      realmOnly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'realmOnly',
            in: 'query',
            description:
              'Boolean which defines if only realm-level IDPs (not associated with orgs) should be returned (default: false)',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            in: 'query',
            description:
              'Filter specific providers by name. Search can be prefix (name*), contains (*name*) or exact ("name"). Default prefixed.',
            schema: { type: 'string' },
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
            description: 'Filter by identity providers type',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(IdentityProviderRepresentationSchema) } },
    },
  },
})

export const postAdminRealmsRealmIdentityProviderInstancesRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/identity-provider/instances',
  tags: ['Identity Providers'],
  summary: 'Create a new identity provider',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: IdentityProviderRepresentationSchema } } },
  },
  responses: {
    201: { description: 'Created' },
    400: { description: 'Bad Request' },
    409: { description: 'Conflict' },
  },
})

export const getAdminRealmsRealmIdentityProviderInstancesAliasRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/identity-provider/instances/{alias}',
  tags: ['Identity Providers'],
  summary: 'Get the identity provider',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      alias: z
        .string()
        .openapi({
          param: { name: 'alias', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: IdentityProviderRepresentationSchema } },
    },
  },
})

export const putAdminRealmsRealmIdentityProviderInstancesAliasRoute = createRoute({
  method: 'put',
  path: '/admin/realms/{realm}/identity-provider/instances/{alias}',
  tags: ['Identity Providers'],
  summary: 'Update the identity provider',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      alias: z
        .string()
        .openapi({
          param: { name: 'alias', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: IdentityProviderRepresentationSchema } } },
  },
  responses: {
    204: { description: 'No Content' },
    400: { description: 'Bad Request' },
    409: { description: 'Conflict' },
  },
})

export const deleteAdminRealmsRealmIdentityProviderInstancesAliasRoute = createRoute({
  method: 'delete',
  path: '/admin/realms/{realm}/identity-provider/instances/{alias}',
  tags: ['Identity Providers'],
  summary: 'Delete the identity provider',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      alias: z
        .string()
        .openapi({
          param: { name: 'alias', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getAdminRealmsRealmIdentityProviderInstancesAliasExportRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/identity-provider/instances/{alias}/export',
  tags: ['Identity Providers'],
  summary: 'Export public broker configuration for identity provider',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      alias: z
        .string()
        .openapi({
          param: { name: 'alias', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      format: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'format',
            in: 'query',
            description: 'Format to use',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getAdminRealmsRealmIdentityProviderInstancesAliasManagementPermissionsRoute =
  createRoute({
    method: 'get',
    path: '/admin/realms/{realm}/identity-provider/instances/{alias}/management/permissions',
    tags: ['Identity Providers'],
    summary:
      'Return object stating whether client Authorization permissions have been initialized or not and a reference',
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        alias: z
          .string()
          .openapi({
            param: { name: 'alias', in: 'path', required: true, schema: { type: 'string' } },
          }),
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: ManagementPermissionReferenceSchema } },
      },
    },
  })

export const putAdminRealmsRealmIdentityProviderInstancesAliasManagementPermissionsRoute =
  createRoute({
    method: 'put',
    path: '/admin/realms/{realm}/identity-provider/instances/{alias}/management/permissions',
    tags: ['Identity Providers'],
    summary:
      'Return object stating whether client Authorization permissions have been initialized or not and a reference',
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        alias: z
          .string()
          .openapi({
            param: { name: 'alias', in: 'path', required: true, schema: { type: 'string' } },
          }),
      }),
      body: { content: { 'application/json': { schema: ManagementPermissionReferenceSchema } } },
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: ManagementPermissionReferenceSchema } },
      },
    },
  })

export const getAdminRealmsRealmIdentityProviderInstancesAliasMapperTypesRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/identity-provider/instances/{alias}/mapper-types',
  tags: ['Identity Providers'],
  summary: 'Get mapper types for identity provider',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      alias: z
        .string()
        .openapi({
          param: { name: 'alias', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        '*/*': { schema: z.record(z.string(), IdentityProviderMapperTypeRepresentationSchema) },
      },
    },
  },
})

export const getAdminRealmsRealmIdentityProviderInstancesAliasMappersRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/identity-provider/instances/{alias}/mappers',
  tags: ['Identity Providers'],
  summary: 'Get mappers for identity provider',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      alias: z
        .string()
        .openapi({
          param: { name: 'alias', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(IdentityProviderMapperRepresentationSchema) },
      },
    },
  },
})

export const postAdminRealmsRealmIdentityProviderInstancesAliasMappersRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/identity-provider/instances/{alias}/mappers',
  tags: ['Identity Providers'],
  summary: 'Add a mapper to identity provider',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      alias: z
        .string()
        .openapi({
          param: { name: 'alias', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: IdentityProviderMapperRepresentationSchema } },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const getAdminRealmsRealmIdentityProviderInstancesAliasMappersIdRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/identity-provider/instances/{alias}/mappers/{id}',
  tags: ['Identity Providers'],
  summary: 'Get mapper by id for the identity provider',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      alias: z
        .string()
        .openapi({
          param: { name: 'alias', in: 'path', required: true, schema: { type: 'string' } },
        }),
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: IdentityProviderMapperRepresentationSchema } },
    },
  },
})

export const putAdminRealmsRealmIdentityProviderInstancesAliasMappersIdRoute = createRoute({
  method: 'put',
  path: '/admin/realms/{realm}/identity-provider/instances/{alias}/mappers/{id}',
  tags: ['Identity Providers'],
  summary: 'Update a mapper for the identity provider',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      alias: z
        .string()
        .openapi({
          param: { name: 'alias', in: 'path', required: true, schema: { type: 'string' } },
        }),
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'Mapper id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: IdentityProviderMapperRepresentationSchema } },
    },
  },
  responses: { 204: { description: 'No Content' } },
})

export const deleteAdminRealmsRealmIdentityProviderInstancesAliasMappersIdRoute = createRoute({
  method: 'delete',
  path: '/admin/realms/{realm}/identity-provider/instances/{alias}/mappers/{id}',
  tags: ['Identity Providers'],
  summary: 'Delete a mapper for the identity provider',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      alias: z
        .string()
        .openapi({
          param: { name: 'alias', in: 'path', required: true, schema: { type: 'string' } },
        }),
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'Mapper id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'No Content' } },
})

export const getAdminRealmsRealmIdentityProviderInstancesAliasReloadKeysRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/identity-provider/instances/{alias}/reload-keys',
  tags: ['Identity Providers'],
  summary:
    'Reaload keys for the identity provider if the provider supports it, "true" is returned if reload was performed, "false" if not.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      alias: z
        .string()
        .openapi({
          param: { name: 'alias', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.boolean() } } },
  },
})

export const getAdminRealmsRealmIdentityProviderProvidersProviderIdRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/identity-provider/providers/{provider_id}',
  tags: ['Identity Providers'],
  summary: 'Get the identity provider factory for that provider id',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      provider_id: z
        .string()
        .openapi({
          param: {
            name: 'provider_id',
            in: 'path',
            description: 'The provider id to get the factory',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const postAdminRealmsRealmIdentityProviderUploadCertificateRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/identity-provider/upload-certificate',
  tags: ['Client Attribute Certificate'],
  summary:
    'Uploads a certificate, prepares the jwks or public key associated, and returns the certificate representation.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CertificateRepresentationSchema } },
    },
  },
})

export const getAdminRealmsRealmKeysRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/keys',
  tags: ['Key'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: KeysMetadataRepresentationSchema } },
    },
  },
})

export const getAdminRealmsRealmLocalizationRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/localization',
  tags: ['Realms Admin'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.array(z.string()) } } },
    403: { description: 'Forbidden' },
  },
})

export const getAdminRealmsRealmLocalizationLocaleRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/localization/{locale}',
  tags: ['Realms Admin'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      locale: z
        .string()
        .openapi({
          param: { name: 'locale', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      useRealmDefaultLocaleFallback: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'useRealmDefaultLocaleFallback',
            in: 'query',
            schema: { type: 'boolean' },
            deprecated: true,
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.record(z.string(), z.string()) } },
    },
    403: { description: 'Forbidden' },
  },
})

export const postAdminRealmsRealmLocalizationLocaleRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/localization/{locale}',
  tags: ['Realms Admin'],
  summary: 'Import localization from uploaded JSON file',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      locale: z
        .string()
        .openapi({
          param: { name: 'locale', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: z.record(z.string(), z.string()) } } },
  },
  responses: {
    204: { description: 'No Content' },
    400: { description: 'Bad Request' },
    403: { description: 'Forbidden' },
  },
})

export const deleteAdminRealmsRealmLocalizationLocaleRoute = createRoute({
  method: 'delete',
  path: '/admin/realms/{realm}/localization/{locale}',
  tags: ['Realms Admin'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      locale: z
        .string()
        .openapi({
          param: { name: 'locale', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getAdminRealmsRealmLocalizationLocaleKeyRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/localization/{locale}/{key}',
  tags: ['Realms Admin'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: { name: 'key', in: 'path', required: true, schema: { type: 'string' } },
        }),
      locale: z
        .string()
        .openapi({
          param: { name: 'locale', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'text/plain': { schema: z.string() } } },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const putAdminRealmsRealmLocalizationLocaleKeyRoute = createRoute({
  method: 'put',
  path: '/admin/realms/{realm}/localization/{locale}/{key}',
  tags: ['Realms Admin'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: { name: 'key', in: 'path', required: true, schema: { type: 'string' } },
        }),
      locale: z
        .string()
        .openapi({
          param: { name: 'locale', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'text/plain': { schema: z.string() } } },
  },
  responses: {
    204: { description: 'No Content' },
    400: { description: 'Bad Request' },
    403: { description: 'Forbidden' },
  },
})

export const deleteAdminRealmsRealmLocalizationLocaleKeyRoute = createRoute({
  method: 'delete',
  path: '/admin/realms/{realm}/localization/{locale}/{key}',
  tags: ['Realms Admin'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: { name: 'key', in: 'path', required: true, schema: { type: 'string' } },
        }),
      locale: z
        .string()
        .openapi({
          param: { name: 'locale', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const postAdminRealmsRealmLogoutAllRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/logout-all',
  tags: ['Realms Admin'],
  summary: 'Removes all user sessions.',
  description:
    'Any client that has an admin url will also be told to invalidate any sessions they have.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GlobalRequestResultSchema } },
    },
    403: { description: 'Forbidden' },
  },
})

export const getAdminRealmsRealmOrganizationsRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/organizations',
  tags: ['Organizations'],
  summary:
    'Returns a paginated list of organizations filtered according to the specified parameters',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      briefRepresentation: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'briefRepresentation',
            in: 'query',
            description:
              'if false, return the full representation. Otherwise, only the basic fields are returned.',
            schema: { default: true, type: 'boolean' },
            required: false,
          },
        }),
      exact: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'exact',
            in: 'query',
            description:
              "Boolean which defines whether the param 'search' must match exactly or not",
            schema: { type: 'boolean' },
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
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'first',
            in: 'query',
            description: 'The position of the first result to be processed (pagination offset)',
            schema: { format: 'int32', default: '0', type: 'integer' },
            required: false,
          },
        }),
      identityProvider: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'identityProvider',
            in: 'query',
            description:
              "The alias of an identity provider, to only return the organizations linked to it. Cannot be combined with 'q'",
            schema: { type: 'string' },
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
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'max',
            in: 'query',
            description: 'The maximum number of results to be returned - defaults to 10',
            schema: { format: 'int32', default: '10', type: 'integer' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'q',
            in: 'query',
            description:
              "A query to search for custom attributes, in the format 'key1:value2 key2:value2'",
            schema: { type: 'string' },
            required: false,
          },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            in: 'query',
            description: 'A String representing either an organization name or domain',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(OrganizationRepresentationSchema) } },
    },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const postAdminRealmsRealmOrganizationsRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/organizations',
  tags: ['Organizations'],
  summary: 'Creates a new organization',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: OrganizationRepresentationSchema } } },
  },
  responses: {
    201: { description: 'Created' },
    400: { description: 'Bad Request' },
    403: { description: 'Forbidden' },
  },
})

export const getAdminRealmsRealmOrganizationsCountRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/organizations/count',
  tags: ['Organizations'],
  summary: 'Returns the organizations counts.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      exact: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'exact',
            in: 'query',
            description:
              "Boolean which defines whether the param 'search' must match exactly or not",
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      identityProvider: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'identityProvider',
            in: 'query',
            description:
              "The alias of an identity provider, to only count the organizations linked to it. Cannot be combined with 'q'",
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'q',
            in: 'query',
            description:
              "A query to search for custom attributes, in the format 'key1:value2 key2:value2'",
            schema: { type: 'string' },
            required: false,
          },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            in: 'query',
            description: 'A String representing either an organization name or domain',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .preprocess(
              (val) =>
                typeof val === 'number' && Number.isSafeInteger(val)
                  ? BigInt(val)
                  : typeof val === 'string' && /^-?\d+$/.test(val)
                    ? BigInt(val)
                    : val,
              z.int64(),
            )
            .openapi({ type: 'integer', format: 'int64' }),
        },
      },
    },
    403: { description: 'Forbidden' },
  },
})

export const getAdminRealmsRealmOrganizationsMembersMemberIdOrganizationsRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/organizations/members/{member-id}/organizations',
  tags: ['Organizations'],
  summary: 'Returns the organizations associated with the user that has the specified id',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'member-id': z
        .string()
        .openapi({
          param: { name: 'member-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      briefRepresentation: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'briefRepresentation',
            in: 'query',
            description:
              'if false, return the full representation. Otherwise, only the basic fields are returned.',
            schema: { default: true, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(OrganizationRepresentationSchema) } },
    },
    400: { description: 'Bad Request' },
    403: { description: 'Forbidden' },
  },
})

export const getAdminRealmsRealmOrganizationsOrgIdRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/organizations/{org-id}',
  tags: ['Organizations'],
  summary: 'Returns the organization representation',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'org-id': z
        .string()
        .openapi({
          param: { name: 'org-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: OrganizationRepresentationSchema } },
    },
    403: { description: 'Forbidden' },
  },
})

export const putAdminRealmsRealmOrganizationsOrgIdRoute = createRoute({
  method: 'put',
  path: '/admin/realms/{realm}/organizations/{org-id}',
  tags: ['Organizations'],
  summary: 'Updates the organization',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'org-id': z
        .string()
        .openapi({
          param: { name: 'org-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: OrganizationRepresentationSchema } } },
  },
  responses: {
    204: { description: 'No Content' },
    400: { description: 'Bad Request' },
    403: { description: 'Forbidden' },
    409: { description: 'Conflict' },
  },
})

export const deleteAdminRealmsRealmOrganizationsOrgIdRoute = createRoute({
  method: 'delete',
  path: '/admin/realms/{realm}/organizations/{org-id}',
  tags: ['Organizations'],
  summary: 'Deletes the organization',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'org-id': z
        .string()
        .openapi({
          param: { name: 'org-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    400: { description: 'Bad Request' },
    403: { description: 'Forbidden' },
  },
})

export const getAdminRealmsRealmOrganizationsOrgIdGroupsRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/organizations/{org-id}/groups',
  tags: ['Organizations'],
  summary: 'Get organization groups',
  description:
    'Returns organization groups. When `search` parameter is provided, groups are searched by name. When `q` parameter is provided, groups are searched by attributes. If neither parameter is provided, top-level groups are returned.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'org-id': z
        .string()
        .openapi({
          param: { name: 'org-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      briefRepresentation: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'briefRepresentation',
            in: 'query',
            schema: { default: true, type: 'boolean' },
            required: false,
          },
        }),
      exact: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'exact',
            in: 'query',
            schema: { default: 'false', type: 'boolean' },
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
            name: 'first',
            in: 'query',
            schema: { format: 'int32', type: 'integer' },
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
            name: 'max',
            in: 'query',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      populateHierarchy: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'populateHierarchy',
            in: 'query',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'q', in: 'query', schema: { type: 'string' }, required: false },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'search', in: 'query', schema: { type: 'string' }, required: false },
        }),
      subGroupsCount: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'subGroupsCount',
            in: 'query',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(GroupRepresentationSchema) } },
    },
    403: { description: 'Forbidden' },
  },
})

export const postAdminRealmsRealmOrganizationsOrgIdGroupsRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/organizations/{org-id}/groups',
  tags: ['Organizations'],
  summary: 'Creates a new top-level group or moves an existing group to top-level',
  description:
    'Creates a new top-level group in the organization. If the group representation includes an ID, moves the existing organization group to be a top-level group. If no ID is provided, creates a new top-level group.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'org-id': z
        .string()
        .openapi({
          param: { name: 'org-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: GroupRepresentationSchema } } },
  },
  responses: {
    201: { description: 'Created' },
    204: { description: 'No Content - Group moved to top-level' },
    400: { description: 'Bad Request' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found - Group does not exist' },
    409: { description: 'Conflict' },
  },
})

export const getAdminRealmsRealmOrganizationsOrgIdGroupsGroupByPathPathRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/organizations/{org-id}/groups/group-by-path/{path}',
  tags: ['Organizations'],
  summary: 'Get organization group by path',
  description: 'Returns the organization group with the specified path',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'org-id': z
        .string()
        .openapi({
          param: { name: 'org-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      path: z
        .string()
        .regex(/.*/)
        .openapi({
          param: {
            name: 'path',
            in: 'path',
            required: true,
            schema: { pattern: '.*', type: 'string' },
          },
        }),
    }),
    query: z.object({
      briefRepresentation: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'briefRepresentation',
            in: 'query',
            description: 'Whether to return a brief representation (default: true)',
            schema: { default: true, type: 'boolean' },
            required: false,
          },
        }),
      subGroupsCount: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'subGroupsCount',
            in: 'query',
            description: 'Whether to return the count of subgroups (default: false)',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GroupRepresentationSchema } },
    },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/organizations/{org-id}/groups/{group-id}',
  tags: ['Organizations'],
  summary: 'Get organization group representation',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'org-id': z
        .string()
        .openapi({
          param: { name: 'org-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      'group-id': z
        .string()
        .openapi({
          param: { name: 'group-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      subGroupsCount: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'subGroupsCount',
            in: 'query',
            description: 'Whether to return the count of subgroups (default: false)',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GroupRepresentationSchema } },
    },
    403: { description: 'Forbidden' },
  },
})

export const putAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoute = createRoute({
  method: 'put',
  path: '/admin/realms/{realm}/organizations/{org-id}/groups/{group-id}',
  tags: ['Organizations'],
  summary: 'Update organization group',
  description:
    "Updates the organization group's name, description, and attributes. Subgroups are not affected.",
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'org-id': z
        .string()
        .openapi({
          param: { name: 'org-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      'group-id': z
        .string()
        .openapi({
          param: { name: 'group-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: GroupRepresentationSchema } } },
  },
  responses: {
    204: { description: 'No Content' },
    400: { description: 'Bad Request' },
    403: { description: 'Forbidden' },
    409: { description: 'Conflict' },
  },
})

export const deleteAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoute = createRoute({
  method: 'delete',
  path: '/admin/realms/{realm}/organizations/{org-id}/groups/{group-id}',
  tags: ['Organizations'],
  summary: 'Delete the organization group',
  description: 'Deletes the organization group and all its subgroups',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'org-id': z
        .string()
        .openapi({
          param: { name: 'org-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      'group-id': z
        .string()
        .openapi({
          param: { name: 'group-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdChildrenRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/organizations/{org-id}/groups/{group-id}/children',
  tags: ['Organizations'],
  summary: 'Get subgroups of this organization group',
  description: 'Returns a paginated stream of subgroups that belong to this organization group',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'org-id': z
        .string()
        .openapi({
          param: { name: 'org-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      'group-id': z
        .string()
        .openapi({
          param: { name: 'group-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      exact: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'exact',
            in: 'query',
            description:
              'Boolean which defines whether the params "search" must match exactly or not',
            schema: { type: 'boolean' },
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
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'first',
            in: 'query',
            description: 'The position of the first result to be returned (pagination offset).',
            schema: { format: 'int32', default: '0', type: 'integer' },
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
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'max',
            in: 'query',
            description: 'The maximum number of results that are to be returned. Defaults to 10',
            schema: { format: 'int32', default: '10', type: 'integer' },
            required: false,
          },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            in: 'query',
            description: 'A String representing either an exact group name or a partial name',
            schema: { type: 'string' },
            required: false,
          },
        }),
      subGroupsCount: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'subGroupsCount',
            in: 'query',
            description: 'Whether to return the count of subgroups (default: false)',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(GroupRepresentationSchema) } },
    },
    403: { description: 'Forbidden' },
  },
})

export const postAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdChildrenRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/organizations/{org-id}/groups/{group-id}/children',
  tags: ['Organizations'],
  summary: 'Create or move a subgroup',
  description:
    'Creates a new subgroup under this organization group. If the group representation includes an ID, moves the existing group to be a child of this group. If no ID is provided, creates a new subgroup.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'org-id': z
        .string()
        .openapi({
          param: { name: 'org-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      'group-id': z
        .string()
        .openapi({
          param: { name: 'group-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: GroupRepresentationSchema } } },
  },
  responses: {
    201: { description: 'Created' },
    204: { description: 'No Content' },
    400: { description: 'Bad Request' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    409: { description: 'Conflict' },
  },
})

export const getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdMembersRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/organizations/{org-id}/groups/{group-id}/members',
  tags: ['Organizations'],
  summary: 'Get members of this organization group',
  description: 'Returns a paginated list of organization members that belong to this group',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'org-id': z
        .string()
        .openapi({
          param: { name: 'org-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      'group-id': z
        .string()
        .openapi({
          param: { name: 'group-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      briefRepresentation: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'briefRepresentation',
            in: 'query',
            description:
              'Only return basic information (only guaranteed to return id, username, created, first and last name, email, enabled state, email verification state, federation link, and access. Note that it means that namely user attributes, required actions, and not before are not returned.)',
            schema: { type: 'boolean' },
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
            name: 'first',
            in: 'query',
            description: 'Pagination offset',
            schema: { format: 'int32', type: 'integer' },
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
            name: 'max',
            in: 'query',
            description: 'Maximum results size (defaults to 100)',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(MemberRepresentationSchema) } },
    },
    403: { description: 'Forbidden' },
  },
})

export const putAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdMembersUserIdRoute = createRoute({
  method: 'put',
  path: '/admin/realms/{realm}/organizations/{org-id}/groups/{group-id}/members/{userId}',
  tags: ['Organizations'],
  summary: 'Add a user to this organization group',
  description:
    'Adds an organization member to this group. The user must be a member of the organization.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'org-id': z
        .string()
        .openapi({
          param: { name: 'org-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      'group-id': z
        .string()
        .openapi({
          param: { name: 'group-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      userId: z
        .string()
        .openapi({
          param: { name: 'userId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    400: { description: 'Bad Request - User is not a member of the organization' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found - User does not exist' },
    409: { description: 'Conflict - User is already a member of the group' },
  },
})

export const deleteAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdMembersUserIdRoute = createRoute({
  method: 'delete',
  path: '/admin/realms/{realm}/organizations/{org-id}/groups/{group-id}/members/{userId}',
  tags: ['Organizations'],
  summary: 'Remove a user from this organization group',
  description:
    'Removes a user from this organization group. The user remains a member of the organization.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'org-id': z
        .string()
        .openapi({
          param: { name: 'org-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      'group-id': z
        .string()
        .openapi({
          param: { name: 'group-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      userId: z
        .string()
        .openapi({
          param: { name: 'userId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    400: { description: 'Bad Request' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found - User does not exist' },
  },
})

export const getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/organizations/{org-id}/groups/{group-id}/role-mappings',
  tags: ['Role Mapper'],
  summary: 'Get role mappings',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'org-id': z
        .string()
        .openapi({
          param: { name: 'org-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      'group-id': z
        .string()
        .openapi({
          param: { name: 'group-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: MappingsRepresentationSchema } },
    },
    403: { description: 'Forbidden' },
  },
})

export const getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsClientsClientIdRoute =
  createRoute({
    method: 'get',
    path: '/admin/realms/{realm}/organizations/{org-id}/groups/{group-id}/role-mappings/clients/{client-id}',
    tags: ['Client Role Mappings'],
    summary: 'Get client-level role mappings for the user or group, and the app',
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'org-id': z
          .string()
          .openapi({
            param: { name: 'org-id', in: 'path', required: true, schema: { type: 'string' } },
          }),
        'group-id': z
          .string()
          .openapi({
            param: { name: 'group-id', in: 'path', required: true, schema: { type: 'string' } },
          }),
        'client-id': z
          .string()
          .openapi({
            param: {
              name: 'client-id',
              in: 'path',
              description: 'client id (not clientId!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
      },
    },
  })

export const postAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsClientsClientIdRoute =
  createRoute({
    method: 'post',
    path: '/admin/realms/{realm}/organizations/{org-id}/groups/{group-id}/role-mappings/clients/{client-id}',
    tags: ['Client Role Mappings'],
    summary: 'Add client-level roles to the user or group role mapping',
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'org-id': z
          .string()
          .openapi({
            param: { name: 'org-id', in: 'path', required: true, schema: { type: 'string' } },
          }),
        'group-id': z
          .string()
          .openapi({
            param: { name: 'group-id', in: 'path', required: true, schema: { type: 'string' } },
          }),
        'client-id': z
          .string()
          .openapi({
            param: {
              name: 'client-id',
              in: 'path',
              description: 'client id (not clientId!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } } },
    },
    responses: { 204: { description: 'No Content' } },
  })

export const deleteAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsClientsClientIdRoute =
  createRoute({
    method: 'delete',
    path: '/admin/realms/{realm}/organizations/{org-id}/groups/{group-id}/role-mappings/clients/{client-id}',
    tags: ['Client Role Mappings'],
    summary: 'Delete client-level roles from user or group role mapping',
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'org-id': z
          .string()
          .openapi({
            param: { name: 'org-id', in: 'path', required: true, schema: { type: 'string' } },
          }),
        'group-id': z
          .string()
          .openapi({
            param: { name: 'group-id', in: 'path', required: true, schema: { type: 'string' } },
          }),
        'client-id': z
          .string()
          .openapi({
            param: {
              name: 'client-id',
              in: 'path',
              description: 'client id (not clientId!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } } },
    },
    responses: { 204: { description: 'No Content' } },
  })

export const getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsClientsClientIdAvailableRoute =
  createRoute({
    method: 'get',
    path: '/admin/realms/{realm}/organizations/{org-id}/groups/{group-id}/role-mappings/clients/{client-id}/available',
    tags: ['Client Role Mappings'],
    summary: 'Get available client-level roles that can be mapped to the user or group',
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'org-id': z
          .string()
          .openapi({
            param: { name: 'org-id', in: 'path', required: true, schema: { type: 'string' } },
          }),
        'group-id': z
          .string()
          .openapi({
            param: { name: 'group-id', in: 'path', required: true, schema: { type: 'string' } },
          }),
        'client-id': z
          .string()
          .openapi({
            param: {
              name: 'client-id',
              in: 'path',
              description: 'client id (not clientId!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
      },
    },
  })

export const getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsClientsClientIdCompositeRoute =
  createRoute({
    method: 'get',
    path: '/admin/realms/{realm}/organizations/{org-id}/groups/{group-id}/role-mappings/clients/{client-id}/composite',
    tags: ['Client Role Mappings'],
    summary: 'Get effective client-level role mappings This recurses any composite roles',
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'org-id': z
          .string()
          .openapi({
            param: { name: 'org-id', in: 'path', required: true, schema: { type: 'string' } },
          }),
        'group-id': z
          .string()
          .openapi({
            param: { name: 'group-id', in: 'path', required: true, schema: { type: 'string' } },
          }),
        'client-id': z
          .string()
          .openapi({
            param: {
              name: 'client-id',
              in: 'path',
              description: 'client id (not clientId!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      query: z.object({
        briefRepresentation: z
          .stringbool()
          .default(true)
          .exactOptional()
          .openapi({
            param: {
              name: 'briefRepresentation',
              in: 'query',
              description: 'if false, return roles with their attributes',
              schema: { default: true, type: 'boolean' },
              required: false,
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
      },
    },
  })

export const getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsRealmRoute = createRoute(
  {
    method: 'get',
    path: '/admin/realms/{realm}/organizations/{org-id}/groups/{group-id}/role-mappings/realm',
    tags: ['Role Mapper'],
    summary: 'Get realm-level role mappings',
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'org-id': z
          .string()
          .openapi({
            param: { name: 'org-id', in: 'path', required: true, schema: { type: 'string' } },
          }),
        'group-id': z
          .string()
          .openapi({
            param: { name: 'group-id', in: 'path', required: true, schema: { type: 'string' } },
          }),
      }),
    },
    responses: {
      200: {
        description: '',
        content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
      },
      403: { description: 'Forbidden' },
    },
  },
)

export const postAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsRealmRoute =
  createRoute({
    method: 'post',
    path: '/admin/realms/{realm}/organizations/{org-id}/groups/{group-id}/role-mappings/realm',
    tags: ['Role Mapper'],
    summary: 'Add realm-level role mappings to the user',
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'org-id': z
          .string()
          .openapi({
            param: { name: 'org-id', in: 'path', required: true, schema: { type: 'string' } },
          }),
        'group-id': z
          .string()
          .openapi({
            param: { name: 'group-id', in: 'path', required: true, schema: { type: 'string' } },
          }),
      }),
      body: { content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } } },
    },
    responses: {
      204: { description: 'No Content' },
      400: { description: 'Bad Request' },
      403: { description: 'Forbidden' },
      404: { description: 'Not Found' },
      500: { description: 'Internal Server Error' },
    },
  })

export const deleteAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsRealmRoute =
  createRoute({
    method: 'delete',
    path: '/admin/realms/{realm}/organizations/{org-id}/groups/{group-id}/role-mappings/realm',
    tags: ['Role Mapper'],
    summary: 'Delete realm-level role mappings',
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'org-id': z
          .string()
          .openapi({
            param: { name: 'org-id', in: 'path', required: true, schema: { type: 'string' } },
          }),
        'group-id': z
          .string()
          .openapi({
            param: { name: 'group-id', in: 'path', required: true, schema: { type: 'string' } },
          }),
      }),
      body: { content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } } },
    },
    responses: {
      204: { description: 'No Content' },
      400: { description: 'Bad Request' },
      403: { description: 'Forbidden' },
      404: { description: 'Not Found' },
      500: { description: 'Internal Server Error' },
    },
  })

export const getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsRealmAvailableRoute =
  createRoute({
    method: 'get',
    path: '/admin/realms/{realm}/organizations/{org-id}/groups/{group-id}/role-mappings/realm/available',
    tags: ['Role Mapper'],
    summary: 'Get realm-level roles that can be mapped',
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'org-id': z
          .string()
          .openapi({
            param: { name: 'org-id', in: 'path', required: true, schema: { type: 'string' } },
          }),
        'group-id': z
          .string()
          .openapi({
            param: { name: 'group-id', in: 'path', required: true, schema: { type: 'string' } },
          }),
      }),
    },
    responses: {
      200: {
        description: '',
        content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
      },
      403: { description: 'Forbidden' },
    },
  })

export const getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsRealmCompositeRoute =
  createRoute({
    method: 'get',
    path: '/admin/realms/{realm}/organizations/{org-id}/groups/{group-id}/role-mappings/realm/composite',
    tags: ['Role Mapper'],
    summary:
      'Get effective realm-level role mappings This will recurse all composite roles to get the result.',
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'org-id': z
          .string()
          .openapi({
            param: { name: 'org-id', in: 'path', required: true, schema: { type: 'string' } },
          }),
        'group-id': z
          .string()
          .openapi({
            param: { name: 'group-id', in: 'path', required: true, schema: { type: 'string' } },
          }),
      }),
      query: z.object({
        briefRepresentation: z
          .stringbool()
          .default(true)
          .exactOptional()
          .openapi({
            param: {
              name: 'briefRepresentation',
              in: 'query',
              description: 'if false, return roles with their attributes',
              schema: { default: true, type: 'boolean' },
              required: false,
            },
          }),
      }),
    },
    responses: {
      200: {
        description: '',
        content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
      },
      403: { description: 'Forbidden' },
    },
  })

export const getAdminRealmsRealmOrganizationsOrgIdIdentityProvidersRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/organizations/{org-id}/identity-providers',
  tags: ['Organizations'],
  summary: 'Returns all identity providers associated with the organization',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'org-id': z
        .string()
        .openapi({
          param: { name: 'org-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(IdentityProviderRepresentationSchema) } },
    },
    403: { description: 'Forbidden' },
  },
})

export const postAdminRealmsRealmOrganizationsOrgIdIdentityProvidersRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/organizations/{org-id}/identity-providers',
  tags: ['Organizations'],
  summary: 'Adds the identity provider with the specified id to the organization',
  description:
    'Adds, or associates, an existing identity provider with the organization. If no identity provider is found, or if it is already associated with the organization, an error response is returned',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'org-id': z
        .string()
        .openapi({
          param: { name: 'org-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      description:
        'Payload should contain only id or alias of the identity provider to be associated with the organization (id or alias with or without quotes). Surrounding whitespace characters will be trimmed.',
      content: { 'application/json': { schema: z.string() } },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content' },
    400: { description: 'Bad Request' },
    403: { description: 'Forbidden' },
    409: { description: 'Conflict' },
  },
})

export const getAdminRealmsRealmOrganizationsOrgIdIdentityProvidersAliasRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/organizations/{org-id}/identity-providers/{alias}',
  tags: ['Organizations'],
  summary:
    'Returns the identity provider associated with the organization that has the specified alias',
  description:
    'Searches for an identity provider with the given alias. If one is found and is associated with the organization, it is returned. Otherwise, an error response with status NOT_FOUND is returned',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'org-id': z
        .string()
        .openapi({
          param: { name: 'org-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      alias: z
        .string()
        .openapi({
          param: { name: 'alias', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: IdentityProviderRepresentationSchema } },
    },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const putAdminRealmsRealmOrganizationsOrgIdIdentityProvidersAliasRoute = createRoute({
  method: 'put',
  path: '/admin/realms/{realm}/organizations/{org-id}/identity-providers/{alias}',
  tags: ['Organizations'],
  summary:
    'Updates the per-association config for the identity provider linked to the organization',
  description:
    'Updates the autoMembership and membershipType settings for the link between the organization and the identity provider with the given alias. If the provider is not linked to the organization, a NOT_FOUND error is returned',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'org-id': z
        .string()
        .openapi({
          param: { name: 'org-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      alias: z
        .string()
        .openapi({
          param: { name: 'alias', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: OrganizationIdentityProviderLinkRepresentationSchema },
      },
    },
  },
  responses: {
    204: { description: 'No Content' },
    400: { description: 'Bad Request' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const deleteAdminRealmsRealmOrganizationsOrgIdIdentityProvidersAliasRoute = createRoute({
  method: 'delete',
  path: '/admin/realms/{realm}/organizations/{org-id}/identity-providers/{alias}',
  tags: ['Organizations'],
  summary: 'Removes the identity provider with the specified alias from the organization',
  description:
    'Breaks the association between the identity provider and the organization. The provider itself is not deleted. If no provider is found, or if it is not currently associated with the org, an error response is returned',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'org-id': z
        .string()
        .openapi({
          param: { name: 'org-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      alias: z
        .string()
        .openapi({
          param: { name: 'alias', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    400: { description: 'Bad Request' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getAdminRealmsRealmOrganizationsOrgIdIdentityProvidersAliasGroupsRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/organizations/{org-id}/identity-providers/{alias}/groups',
  tags: ['Organizations'],
  summary: 'Returns organization groups for the identity provider',
  description:
    'Returns organization groups that can be used in identity provider mappers. Only returns groups if the identity provider is associated with the organization.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'org-id': z
        .string()
        .openapi({
          param: { name: 'org-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      alias: z
        .string()
        .openapi({
          param: {
            name: 'alias',
            in: 'path',
            description: 'The alias of the identity provider',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      briefRepresentation: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'briefRepresentation',
            in: 'query',
            description:
              'If true, return brief representation; otherwise return full representation',
            schema: { default: true, type: 'boolean' },
            required: false,
          },
        }),
      exact: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'exact',
            in: 'query',
            description: 'If true, perform exact match on the search parameter',
            schema: { default: 'false', type: 'boolean' },
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
            name: 'first',
            in: 'query',
            description: 'The position of the first result (pagination offset)',
            schema: { format: 'int32', type: 'integer' },
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
            name: 'max',
            in: 'query',
            description: 'The maximum number of results to return',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'q',
            in: 'query',
            description:
              "A query to search for group attributes, in the format 'key1:value1 key2:value2'",
            schema: { type: 'string' },
            required: false,
          },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            in: 'query',
            description: 'A string to search for in group names',
            schema: { type: 'string' },
            required: false,
          },
        }),
      subGroupsCount: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'subGroupsCount',
            in: 'query',
            description: 'If true, include subgroups count in the response',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(GroupRepresentationSchema) } },
    },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getAdminRealmsRealmOrganizationsOrgIdInvitationsRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/organizations/{org-id}/invitations',
  tags: ['Organizations'],
  summary: 'Get invitations for the organization',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'org-id': z
        .string()
        .openapi({
          param: { name: 'org-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      email: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'email', in: 'query', schema: { type: 'string' }, required: false },
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
            name: 'first',
            in: 'query',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      firstName: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'firstName', in: 'query', schema: { type: 'string' }, required: false },
        }),
      lastName: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'lastName', in: 'query', schema: { type: 'string' }, required: false },
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
            name: 'max',
            in: 'query',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'search', in: 'query', schema: { type: 'string' }, required: false },
        }),
      status: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'status', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(OrganizationInvitationRepresentationSchema) },
      },
    },
    403: { description: 'Forbidden' },
  },
})

export const getAdminRealmsRealmOrganizationsOrgIdInvitationsIdRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/organizations/{org-id}/invitations/{id}',
  tags: ['Organizations'],
  summary: 'Get invitation by ID',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'org-id': z
        .string()
        .openapi({
          param: { name: 'org-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: OrganizationInvitationRepresentationSchema } },
    },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const deleteAdminRealmsRealmOrganizationsOrgIdInvitationsIdRoute = createRoute({
  method: 'delete',
  path: '/admin/realms/{realm}/organizations/{org-id}/invitations/{id}',
  tags: ['Organizations'],
  summary: 'Delete an invitation',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'org-id': z
        .string()
        .openapi({
          param: { name: 'org-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const postAdminRealmsRealmOrganizationsOrgIdInvitationsIdResendRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/organizations/{org-id}/invitations/{id}/resend',
  tags: ['Organizations'],
  summary: 'Resend an invitation',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'org-id': z
        .string()
        .openapi({
          param: { name: 'org-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getAdminRealmsRealmOrganizationsOrgIdMembersRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/organizations/{org-id}/members',
  tags: ['Organizations'],
  summary:
    'Returns a paginated list of organization members filtered according to the specified parameters',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'org-id': z
        .string()
        .openapi({
          param: { name: 'org-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      briefRepresentation: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'briefRepresentation',
            in: 'query',
            description:
              'Boolean to return either a brief or a full user representation. If not specified, the brief representation is returned by default.',
            schema: { default: true, type: 'boolean' },
            required: false,
          },
        }),
      exact: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'exact',
            in: 'query',
            description:
              "Boolean which defines whether the param 'search' must match exactly or not",
            schema: { type: 'boolean' },
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
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'first',
            in: 'query',
            description: 'The position of the first result to be processed (pagination offset)',
            schema: { format: 'int32', default: '0', type: 'integer' },
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
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'max',
            in: 'query',
            description: 'The maximum number of results to be returned. Defaults to 10',
            schema: { format: 'int32', default: '10', type: 'integer' },
            required: false,
          },
        }),
      membershipType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'membershipType',
            in: 'query',
            description: 'The membership type',
            schema: { type: 'string' },
            required: false,
          },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            in: 'query',
            description:
              "A String representing either a member's username, e-mail, first name, or last name.",
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(MemberRepresentationSchema) } },
    },
    403: { description: 'Forbidden' },
  },
})

export const postAdminRealmsRealmOrganizationsOrgIdMembersRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/organizations/{org-id}/members',
  tags: ['Organizations'],
  summary: 'Adds the user with the specified id as a member of the organization',
  description:
    'Adds, or associates, an existing user with the organization. If no user is found, or if it is already associated with the organization, an error response is returned',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'org-id': z
        .string()
        .openapi({
          param: { name: 'org-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      description:
        'Payload should contain only id of the user to be added to the organization (UUID with or without quotes). Surrounding whitespace characters will be trimmed.',
      content: { 'application/json': { schema: z.string() } },
      required: true,
    },
  },
  responses: {
    201: { description: 'Created' },
    400: { description: 'Bad Request' },
    403: { description: 'Forbidden' },
    409: { description: 'Conflict' },
  },
})

export const getAdminRealmsRealmOrganizationsOrgIdMembersCountRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/organizations/{org-id}/members/count',
  tags: ['Organizations'],
  summary: 'Returns number of members in the organization.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'org-id': z
        .string()
        .openapi({
          param: { name: 'org-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .preprocess(
              (val) =>
                typeof val === 'number' && Number.isSafeInteger(val)
                  ? BigInt(val)
                  : typeof val === 'string' && /^-?\d+$/.test(val)
                    ? BigInt(val)
                    : val,
              z.int64(),
            )
            .openapi({ type: 'integer', format: 'int64' }),
        },
      },
    },
    403: { description: 'Forbidden' },
  },
})

export const postAdminRealmsRealmOrganizationsOrgIdMembersInviteExistingUserRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/organizations/{org-id}/members/invite-existing-user',
  tags: ['Organizations'],
  summary: 'Invites an existing user to the organization, using the specified user id',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'org-id': z
        .string()
        .openapi({
          param: { name: 'org-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z.object({ id: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    204: { description: 'No Content' },
    400: { description: 'Bad Request' },
    403: { description: 'Forbidden' },
    500: { description: 'Internal Server Error' },
  },
})

export const postAdminRealmsRealmOrganizationsOrgIdMembersInviteUserRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/organizations/{org-id}/members/invite-user',
  tags: ['Organizations'],
  summary:
    'Invites an existing user or sends a registration link to a new user, based on the provided e-mail address.',
  description:
    "If the user with the given e-mail address exists, it sends an invitation link, otherwise it sends a registration link. The client_id query parameter is optional. If no client_id is provided, the account client is used. After accepting the invitation the user is redirected to the selected client's home URL; for the account client the organization redirect URL is used instead when configured.",
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'org-id': z
        .string()
        .openapi({
          param: { name: 'org-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      client_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'client_id',
            in: 'query',
            description: 'Client id',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              email: z.string().exactOptional(),
              firstName: z.string().exactOptional(),
              lastName: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    204: { description: 'No Content' },
    400: { description: 'Bad Request' },
    403: { description: 'Forbidden' },
    409: { description: 'Conflict' },
    500: { description: 'Internal Server Error' },
  },
})

export const getAdminRealmsRealmOrganizationsOrgIdMembersMemberIdRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/organizations/{org-id}/members/{member-id}',
  tags: ['Organizations'],
  summary: 'Returns the member of the organization with the specified id',
  description:
    'Searches for auser with the given id. If one is found, and is currently a member of the organization, returns it. Otherwise,an error response with status NOT_FOUND is returned',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'org-id': z
        .string()
        .openapi({
          param: { name: 'org-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      'member-id': z
        .string()
        .openapi({
          param: { name: 'member-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: MemberRepresentationSchema } },
    },
    400: { description: 'Bad Request' },
    403: { description: 'Forbidden' },
  },
})

export const deleteAdminRealmsRealmOrganizationsOrgIdMembersMemberIdRoute = createRoute({
  method: 'delete',
  path: '/admin/realms/{realm}/organizations/{org-id}/members/{member-id}',
  tags: ['Organizations'],
  summary: 'Removes the user with the specified id from the organization',
  description:
    'Breaks the association between the user and organization. The user itself is deleted in case the membership is managed, otherwise the user is not deleted. If no user is found, or if they are not a member of the organization, an error response is returned',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'org-id': z
        .string()
        .openapi({
          param: { name: 'org-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      'member-id': z
        .string()
        .openapi({
          param: { name: 'member-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    400: { description: 'Bad Request' },
    403: { description: 'Forbidden' },
  },
})

export const getAdminRealmsRealmOrganizationsOrgIdMembersMemberIdGroupsRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/organizations/{org-id}/members/{member-id}/groups',
  tags: ['Organizations'],
  summary: 'Returns the organization group memberships for a member with the specified id',
  description:
    'Searches for auser with the given id. If one is found, and is currently a member of the organization, returns the groups from the organizationwhere the user is member of. Otherwise, an error response with status NOT_FOUND is returned',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'org-id': z
        .string()
        .openapi({
          param: { name: 'org-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      'member-id': z
        .string()
        .openapi({
          param: { name: 'member-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      briefRepresentation: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'briefRepresentation',
            in: 'query',
            schema: { default: true, type: 'boolean' },
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
            name: 'first',
            in: 'query',
            schema: { format: 'int32', type: 'integer' },
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
            name: 'max',
            in: 'query',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'search', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(GroupRepresentationSchema) } },
    },
    400: { description: 'Bad Request' },
    403: { description: 'Forbidden' },
  },
})

export const putAdminRealmsRealmOrganizationsOrgIdMembersMemberIdMembershipTypeRoute = createRoute({
  method: 'put',
  path: '/admin/realms/{realm}/organizations/{org-id}/members/{member-id}/membership-type',
  tags: ['Organizations'],
  summary: 'Updates the membership type of the member with the specified id',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'org-id': z
        .string()
        .openapi({
          param: { name: 'org-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      'member-id': z
        .string()
        .openapi({
          param: { name: 'member-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: MembershipTypeSchema } } },
  },
  responses: {
    204: { description: 'No Content' },
    400: { description: 'Bad Request' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getAdminRealmsRealmOrganizationsOrgIdMembersMemberIdOrganizationsRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/organizations/{org-id}/members/{member-id}/organizations',
  tags: ['Organizations'],
  summary: 'Returns the organizations associated with the user that has the specified id',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'org-id': z
        .string()
        .openapi({
          param: { name: 'org-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      'member-id': z
        .string()
        .openapi({
          param: { name: 'member-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      briefRepresentation: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'briefRepresentation',
            in: 'query',
            description:
              'if false, return the full representation. Otherwise, only the basic fields are returned.',
            schema: { default: true, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(OrganizationRepresentationSchema) } },
    },
    400: { description: 'Bad Request' },
    403: { description: 'Forbidden' },
  },
})

export const postAdminRealmsRealmPartialExportRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/partial-export',
  tags: ['Realms Admin'],
  summary: 'Partial export of existing realm into a JSON file.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      exportClients: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'exportClients',
            in: 'query',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      exportGroupsAndRoles: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'exportGroupsAndRoles',
            in: 'query',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: RealmRepresentationSchema } },
    },
    403: { description: 'Forbidden' },
  },
})

export const postAdminRealmsRealmPartialImportRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/partialImport',
  tags: ['Realms Admin'],
  summary: 'Partial import from a JSON file to an existing realm.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
    403: { description: 'Forbidden' },
    409: { description: 'Conflict' },
  },
})

export const postAdminRealmsRealmPushRevocationRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/push-revocation',
  tags: ['Realms Admin'],
  summary:
    "Push the realm's revocation policy to any client that has an admin url associated with it.",
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GlobalRequestResultSchema } },
    },
    403: { description: 'Forbidden' },
  },
})

export const getAdminRealmsRealmRolesRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/roles',
  tags: ['Roles'],
  summary: 'Get all roles for the realm or client',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      briefRepresentation: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'briefRepresentation',
            in: 'query',
            schema: { default: true, type: 'boolean' },
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
            name: 'first',
            in: 'query',
            schema: { format: 'int32', type: 'integer' },
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
            name: 'max',
            in: 'query',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      search: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            in: 'query',
            schema: { default: '', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
    },
    403: { description: 'Forbidden' },
  },
})

export const postAdminRealmsRealmRolesRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/roles',
  tags: ['Roles'],
  summary: 'Create a new role for the realm or client',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RoleRepresentationSchema } } },
  },
  responses: {
    201: { description: 'Created' },
    400: { description: 'Bad Request' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    409: { description: 'Conflict' },
    500: { description: 'Internal Server Error' },
  },
})

export const getAdminRealmsRealmRolesByIdRoleIdRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/roles-by-id/{role-id}',
  tags: ['Roles (by ID)'],
  summary: "Get a specific role's representation",
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'role-id': z
        .string()
        .openapi({
          param: {
            name: 'role-id',
            in: 'path',
            description: 'id of role',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: RoleRepresentationSchema } } },
    403: { description: 'Forbidden' },
  },
})

export const putAdminRealmsRealmRolesByIdRoleIdRoute = createRoute({
  method: 'put',
  path: '/admin/realms/{realm}/roles-by-id/{role-id}',
  tags: ['Roles (by ID)'],
  summary: 'Update the role',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'role-id': z
        .string()
        .openapi({
          param: {
            name: 'role-id',
            in: 'path',
            description: 'id of role',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RoleRepresentationSchema } } },
  },
  responses: {
    204: { description: 'No Content' },
    400: { description: 'Bad Request' },
    403: { description: 'Forbidden' },
  },
})

export const deleteAdminRealmsRealmRolesByIdRoleIdRoute = createRoute({
  method: 'delete',
  path: '/admin/realms/{realm}/roles-by-id/{role-id}',
  tags: ['Roles (by ID)'],
  summary: 'Delete the role',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'role-id': z
        .string()
        .openapi({
          param: {
            name: 'role-id',
            in: 'path',
            description: 'id of role',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    400: { description: 'Bad Request' },
    403: { description: 'Forbidden' },
  },
})

export const getAdminRealmsRealmRolesByIdRoleIdCompositesRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/roles-by-id/{role-id}/composites',
  tags: ['Roles (by ID)'],
  summary: "Get role's children Returns a set of role's children provided the role is a composite.",
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'role-id': z
        .string()
        .openapi({
          param: { name: 'role-id', in: 'path', required: true, schema: { type: 'string' } },
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
            name: 'first',
            in: 'query',
            schema: { format: 'int32', type: 'integer' },
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
            name: 'max',
            in: 'query',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'search', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
    },
    403: { description: 'Forbidden' },
  },
})

export const postAdminRealmsRealmRolesByIdRoleIdCompositesRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/roles-by-id/{role-id}/composites',
  tags: ['Roles (by ID)'],
  summary: 'Make the role a composite role by associating some child roles',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'role-id': z
        .string()
        .openapi({
          param: { name: 'role-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } } },
  },
  responses: { 204: { description: 'No Content' }, 403: { description: 'Forbidden' } },
})

export const deleteAdminRealmsRealmRolesByIdRoleIdCompositesRoute = createRoute({
  method: 'delete',
  path: '/admin/realms/{realm}/roles-by-id/{role-id}/composites',
  tags: ['Roles (by ID)'],
  summary: "Remove a set of roles from the role's composite",
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'role-id': z
        .string()
        .openapi({
          param: {
            name: 'role-id',
            in: 'path',
            description: 'Role id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } } },
  },
  responses: { 204: { description: 'No Content' }, 403: { description: 'Forbidden' } },
})

export const getAdminRealmsRealmRolesByIdRoleIdCompositesClientsClientUuidRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/roles-by-id/{role-id}/composites/clients/{clientUuid}',
  tags: ['Roles (by ID)'],
  summary: "Get client-level roles for the client that are in the role's composite",
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      clientUuid: z
        .string()
        .openapi({
          param: { name: 'clientUuid', in: 'path', required: true, schema: { type: 'string' } },
        }),
      'role-id': z
        .string()
        .openapi({
          param: { name: 'role-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
    },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getAdminRealmsRealmRolesByIdRoleIdCompositesRealmRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/roles-by-id/{role-id}/composites/realm',
  tags: ['Roles (by ID)'],
  summary: "Get realm-level roles that are in the role's composite",
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'role-id': z
        .string()
        .openapi({
          param: { name: 'role-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
    },
    403: { description: 'Forbidden' },
  },
})

export const getAdminRealmsRealmRolesByIdRoleIdManagementPermissionsRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/roles-by-id/{role-id}/management/permissions',
  tags: ['Roles (by ID)'],
  summary:
    'Return object stating whether role Authorization permissions have been initialized or not and a reference',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'role-id': z
        .string()
        .openapi({
          param: { name: 'role-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: ManagementPermissionReferenceSchema } },
    },
    403: { description: 'Forbidden' },
  },
})

export const putAdminRealmsRealmRolesByIdRoleIdManagementPermissionsRoute = createRoute({
  method: 'put',
  path: '/admin/realms/{realm}/roles-by-id/{role-id}/management/permissions',
  tags: ['Roles (by ID)'],
  summary:
    'Return object stating whether role Authorization permissions have been initialized or not and a reference',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'role-id': z
        .string()
        .openapi({
          param: { name: 'role-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: ManagementPermissionReferenceSchema } } },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: ManagementPermissionReferenceSchema } },
    },
    403: { description: 'Forbidden' },
  },
})

export const getAdminRealmsRealmRolesRoleNameRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/roles/{role-name}',
  tags: ['Roles'],
  summary: 'Get a role by name',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'role-name': z
        .string()
        .openapi({
          param: {
            name: 'role-name',
            in: 'path',
            description: "role's name (not id!)",
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: RoleRepresentationSchema } } },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const putAdminRealmsRealmRolesRoleNameRoute = createRoute({
  method: 'put',
  path: '/admin/realms/{realm}/roles/{role-name}',
  tags: ['Roles'],
  summary: 'Update a role by name',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'role-name': z
        .string()
        .openapi({
          param: {
            name: 'role-name',
            in: 'path',
            description: "role's name (not id!)",
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RoleRepresentationSchema } } },
  },
  responses: {
    204: { description: 'No Content' },
    400: { description: 'Bad Request' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    409: { description: 'Conflict' },
  },
})

export const deleteAdminRealmsRealmRolesRoleNameRoute = createRoute({
  method: 'delete',
  path: '/admin/realms/{realm}/roles/{role-name}',
  tags: ['Roles'],
  summary: 'Delete a role by name',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'role-name': z
        .string()
        .openapi({
          param: {
            name: 'role-name',
            in: 'path',
            description: "role's name (not id!)",
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    400: { description: 'Bad Request' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getAdminRealmsRealmRolesRoleNameCompositesRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/roles/{role-name}/composites',
  tags: ['Roles'],
  summary: 'Get composites of the role',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'role-name': z
        .string()
        .openapi({
          param: {
            name: 'role-name',
            in: 'path',
            description: "role's name (not id!)",
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
    },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const postAdminRealmsRealmRolesRoleNameCompositesRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/roles/{role-name}/composites',
  tags: ['Roles'],
  summary: 'Add a composite to the role',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'role-name': z
        .string()
        .openapi({
          param: {
            name: 'role-name',
            in: 'path',
            description: "role's name (not id!)",
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } } },
  },
  responses: {
    204: { description: 'No Content' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const deleteAdminRealmsRealmRolesRoleNameCompositesRoute = createRoute({
  method: 'delete',
  path: '/admin/realms/{realm}/roles/{role-name}/composites',
  tags: ['Roles'],
  summary: "Remove roles from the role's composite",
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'role-name': z
        .string()
        .openapi({
          param: {
            name: 'role-name',
            in: 'path',
            description: "role's name (not id!)",
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } } },
  },
  responses: {
    204: { description: 'No Content' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getAdminRealmsRealmRolesRoleNameCompositesClientsTargetClientUuidRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/roles/{role-name}/composites/clients/{targetClientUuid}',
  tags: ['Roles'],
  summary: "Get client-level roles for the client that are in the role's composite",
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'role-name': z
        .string()
        .openapi({
          param: {
            name: 'role-name',
            in: 'path',
            description: "role's name (not id!)",
            required: true,
            schema: { type: 'string' },
          },
        }),
      targetClientUuid: z
        .string()
        .openapi({
          param: {
            name: 'targetClientUuid',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
    },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getAdminRealmsRealmRolesRoleNameCompositesRealmRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/roles/{role-name}/composites/realm',
  tags: ['Roles'],
  summary: "Get realm-level roles of the role's composite",
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'role-name': z
        .string()
        .openapi({
          param: {
            name: 'role-name',
            in: 'path',
            description: "role's name (not id!)",
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
    },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getAdminRealmsRealmRolesRoleNameGroupsRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/roles/{role-name}/groups',
  tags: ['Roles'],
  summary: 'Returns a stream of groups that have the specified role name',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'role-name': z
        .string()
        .openapi({
          param: {
            name: 'role-name',
            in: 'path',
            description: 'the role name.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      briefRepresentation: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'briefRepresentation',
            in: 'query',
            description:
              'If false, return a full representation of the {@code GroupRepresentation} objects.',
            schema: { default: true, type: 'boolean' },
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
            name: 'first',
            in: 'query',
            description: 'First result to return. Ignored if negative or {@code null}.',
            schema: { format: 'int32', type: 'integer' },
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
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'max',
            in: 'query',
            description: 'Maximum number of results to return. Unbounded if negative.',
            schema: { format: 'int32', default: '100', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(GroupRepresentationSchema) } },
    },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getAdminRealmsRealmRolesRoleNameManagementPermissionsRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/roles/{role-name}/management/permissions',
  tags: ['Roles'],
  summary:
    'Return object stating whether role Authorization permissions have been initialized or not and a reference',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'role-name': z
        .string()
        .openapi({
          param: { name: 'role-name', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: ManagementPermissionReferenceSchema } },
    },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const putAdminRealmsRealmRolesRoleNameManagementPermissionsRoute = createRoute({
  method: 'put',
  path: '/admin/realms/{realm}/roles/{role-name}/management/permissions',
  tags: ['Roles'],
  summary:
    'Return object stating whether role Authorization permissions have been initialized or not and a reference',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'role-name': z
        .string()
        .openapi({
          param: { name: 'role-name', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: ManagementPermissionReferenceSchema } } },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: ManagementPermissionReferenceSchema } },
    },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getAdminRealmsRealmRolesRoleNameUsersRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/roles/{role-name}/users',
  tags: ['Roles'],
  summary: 'Returns a stream of users that have the specified role name.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'role-name': z
        .string()
        .openapi({
          param: {
            name: 'role-name',
            in: 'path',
            description: 'the role name.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      briefRepresentation: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'briefRepresentation',
            in: 'query',
            description:
              'Boolean which defines whether brief representations are returned (default: false)',
            schema: { type: 'boolean' },
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
            name: 'first',
            in: 'query',
            description: 'first result to return. Ignored if negative or {@code null}.',
            schema: { format: 'int32', type: 'integer' },
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
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'max',
            in: 'query',
            description: 'Maximum number of results to return. Unbounded if negative.',
            schema: { format: 'int32', default: '100', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(UserRepresentationSchema) } },
    },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const deleteAdminRealmsRealmSessionsSessionRoute = createRoute({
  method: 'delete',
  path: '/admin/realms/{realm}/sessions/{session}',
  tags: ['Realms Admin'],
  summary: 'Remove a specific user session.',
  description:
    'Any client that has an admin url will also be told to invalidate this particular session.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      session: z
        .string()
        .openapi({
          param: { name: 'session', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      isOffline: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'isOffline',
            in: 'query',
            schema: { default: false, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const postAdminRealmsRealmTestSMTPConnectionRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/testSMTPConnection',
  tags: ['Realms Admin'],
  summary: 'Test SMTP connection with current logged in user',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: z.record(z.string(), z.string()) },
        'application/x-www-form-urlencoded': {
          schema: z.object({ config: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 204: { description: 'No Content' }, 500: { description: 'Internal Server Error' } },
  deprecated: true,
})

export const getAdminRealmsRealmUsersRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/users',
  tags: ['Users'],
  summary: 'Get users Returns a stream of users, filtered according to query parameters.',
  description:
    "Returns a stream of users. Note that the 'credentials' field in the returned UserRepresentation objects is typically not populated for performance reasons. If specific credential metadata is required, use the dedicated 'GET /admin/realms/{realm}/users/{user-id}/credentials' endpoint.",
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      briefRepresentation: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'briefRepresentation',
            in: 'query',
            description:
              'Boolean which defines whether brief representations are returned (default: false)',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      createdAfter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'createdAfter',
            in: 'query',
            description:
              'Only return users created after (inclusive) the given date, in ISO-8601 format (yyyy-MM-dd) or epoch milliseconds',
            schema: { type: 'string' },
            required: false,
          },
        }),
      createdBefore: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'createdBefore',
            in: 'query',
            description:
              'Only return users created before (inclusive) the given date, in ISO-8601 format (yyyy-MM-dd) or epoch milliseconds',
            schema: { type: 'string' },
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
            description:
              'A String contained in email, or the complete email, if param "exact" is true',
            schema: { type: 'string' },
            required: false,
          },
        }),
      emailVerified: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'emailVerified',
            in: 'query',
            description: 'whether the email has been verified',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      enabled: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'enabled',
            in: 'query',
            description: 'Boolean representing if user is enabled or not',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      exact: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'exact',
            in: 'query',
            description:
              'Boolean which defines whether the params "last", "first", "email" and "username" must match exactly',
            schema: { type: 'boolean' },
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
            name: 'first',
            in: 'query',
            description: 'Pagination offset',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      firstName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'firstName',
            in: 'query',
            description:
              'A String contained in firstName, or the complete firstName, if param "exact" is true',
            schema: { type: 'string' },
            required: false,
          },
        }),
      idpAlias: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'idpAlias',
            in: 'query',
            description: 'The alias of an Identity Provider linked to the user',
            schema: { type: 'string' },
            required: false,
          },
        }),
      idpUserId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'idpUserId',
            in: 'query',
            description: 'The userId at an Identity Provider linked to the user',
            schema: { type: 'string' },
            required: false,
          },
        }),
      lastName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'lastName',
            in: 'query',
            description:
              'A String contained in lastName, or the complete lastName, if param "exact" is true',
            schema: { type: 'string' },
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
            name: 'max',
            in: 'query',
            description: 'Maximum results size (defaults to 100)',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'q',
            in: 'query',
            description:
              "A query to search for custom attributes, in the format 'key1:value2 key2:value2'",
            schema: { type: 'string' },
            required: false,
          },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            in: 'query',
            description:
              'A String contained in username, first or last name, or email. Default search behavior is prefix-based (e.g., foo or foo*). Use *foo* for infix search and "foo" for exact search.',
            schema: { type: 'string' },
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
            description:
              'A String contained in username, or the complete username, if param "exact" is true',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(UserRepresentationSchema) } },
    },
    403: { description: 'Forbidden' },
  },
})

export const postAdminRealmsRealmUsersRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/users',
  tags: ['Users'],
  summary: 'Create a new user Username must be unique.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UserRepresentationSchema } } },
  },
  responses: {
    201: { description: 'Created' },
    400: { description: 'Bad Request', content: {} },
    403: { description: 'Forbidden' },
    409: { description: 'Conflict', content: {} },
    500: { description: 'Internal Server Error', content: {} },
  },
})

export const getAdminRealmsRealmUsersManagementPermissionsRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/users-management-permissions',
  tags: ['Realms Admin'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ManagementPermissionReferenceSchema } },
    },
    403: { description: 'Forbidden' },
  },
})

export const putAdminRealmsRealmUsersManagementPermissionsRoute = createRoute({
  method: 'put',
  path: '/admin/realms/{realm}/users-management-permissions',
  tags: ['Realms Admin'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ManagementPermissionReferenceSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ManagementPermissionReferenceSchema } },
    },
    403: { description: 'Forbidden' },
  },
})

export const getAdminRealmsRealmUsersCountRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/users/count',
  tags: ['Users'],
  summary: 'Returns the number of users that match the given criteria.',
  description:
    'It can be called in three different ways. 1. Don’t specify any criteria and pass {@code null}. The number of all users within that realm will be returned. <p> 2. If {@code search} is specified other criteria such as {@code last} will be ignored even though you set them. The {@code search} string will be matched against the first and last name, the username and the email of a user. <p> 3. If {@code search} is unspecified but any of {@code last}, {@code first}, {@code email} or {@code username} those criteria are matched against their respective fields on a user entity. Combined with a logical and.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      createdAfter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'createdAfter',
            in: 'query',
            description:
              'Only return users created after (inclusive) the given date, in ISO-8601 format (yyyy-MM-dd) or epoch milliseconds',
            schema: { type: 'string' },
            required: false,
          },
        }),
      createdBefore: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'createdBefore',
            in: 'query',
            description:
              'Only return users created before (inclusive) the given date, in ISO-8601 format (yyyy-MM-dd) or epoch milliseconds',
            schema: { type: 'string' },
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
            description:
              'A String contained in email, or the complete email, if param "exact" is true',
            schema: { type: 'string' },
            required: false,
          },
        }),
      emailVerified: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'emailVerified',
            in: 'query',
            description: 'whether the email has been verified',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      enabled: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'enabled',
            in: 'query',
            description: 'Boolean representing if user is enabled or not',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      exact: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'exact',
            in: 'query',
            description:
              'Boolean which defines whether the params "last", "first", "email" and "username" must match exactly',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      firstName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'firstName',
            in: 'query',
            description:
              'A String contained in firstName, or the complete firstName, if param "exact" is true',
            schema: { type: 'string' },
            required: false,
          },
        }),
      idpAlias: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'idpAlias',
            in: 'query',
            description: 'The alias of an Identity Provider linked to the user',
            schema: { type: 'string' },
            required: false,
          },
        }),
      idpUserId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'idpUserId',
            in: 'query',
            description: 'The userId at an Identity Provider linked to the user',
            schema: { type: 'string' },
            required: false,
          },
        }),
      lastName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'lastName',
            in: 'query',
            description:
              'A String contained in lastName, or the complete lastName, if param "exact" is true',
            schema: { type: 'string' },
            required: false,
          },
        }),
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'q',
            in: 'query',
            description:
              "A query to search for custom attributes, in the format 'key1:value2 key2:value2'",
            schema: { type: 'string' },
            required: false,
          },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            in: 'query',
            description:
              'A String contained in username, first or last name, or email. Default search behavior is prefix-based (e.g., foo or foo*). Use *foo* for infix search and "foo" for exact search.',
            schema: { type: 'string' },
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
            description:
              'A String contained in username, or the complete username, if param "exact" is true',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.int32() } } },
    403: { description: 'Forbidden' },
  },
})

export const getAdminRealmsRealmUsersProfileRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/users/profile',
  tags: ['Users'],
  description: 'Get the configuration for the user profile',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: UPConfigSchema } } },
    403: { description: 'Forbidden' },
  },
})

export const putAdminRealmsRealmUsersProfileRoute = createRoute({
  method: 'put',
  path: '/admin/realms/{realm}/users/profile',
  tags: ['Users'],
  description: 'Set the configuration for the user profile',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UPConfigSchema } } },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: UPConfigSchema } } },
    403: { description: 'Forbidden' },
  },
})

export const getAdminRealmsRealmUsersProfileMetadataRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/users/profile/metadata',
  tags: ['Users'],
  description: 'Get the UserProfileMetadata from the configuration',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: UserProfileMetadataSchema } },
    },
    403: { description: 'Forbidden' },
  },
})

export const getAdminRealmsRealmUsersUserIdRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/users/{user-id}',
  tags: ['Users'],
  summary: 'Get representation of the user',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'user-id': z
        .string()
        .openapi({
          param: { name: 'user-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      userProfileMetadata: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'userProfileMetadata',
            in: 'query',
            description: 'Indicates if the user profile metadata should be added to the response',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: UserRepresentationSchema } },
    },
    403: { description: 'Forbidden' },
  },
})

export const putAdminRealmsRealmUsersUserIdRoute = createRoute({
  method: 'put',
  path: '/admin/realms/{realm}/users/{user-id}',
  tags: ['Users'],
  summary: 'Update the user',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'user-id': z
        .string()
        .openapi({
          param: { name: 'user-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: UserRepresentationSchema } } },
  },
  responses: {
    204: { description: 'No Content' },
    400: { description: 'Bad Request', content: {} },
    403: { description: 'Forbidden' },
    409: { description: 'Conflict', content: {} },
    500: { description: 'Internal Server Error', content: {} },
  },
})

export const deleteAdminRealmsRealmUsersUserIdRoute = createRoute({
  method: 'delete',
  path: '/admin/realms/{realm}/users/{user-id}',
  tags: ['Users'],
  summary: 'Delete the user',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'user-id': z
        .string()
        .openapi({
          param: { name: 'user-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    400: { description: 'Bad Request', content: {} },
    403: { description: 'Forbidden' },
  },
})

export const getAdminRealmsRealmUsersUserIdConfiguredUserStorageCredentialTypesRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/users/{user-id}/configured-user-storage-credential-types',
  tags: ['Users'],
  summary: 'Return credential types, which are provided by the user storage where user is stored.',
  description:
    'Returned values can contain for example "password", "otp" etc. This will always return empty list for "local" users, which are not backed by any user storage',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'user-id': z
        .string()
        .openapi({
          param: { name: 'user-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.array(z.string()) } } },
    403: { description: 'Forbidden' },
  },
})

export const getAdminRealmsRealmUsersUserIdConsentsRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/users/{user-id}/consents',
  tags: ['Users'],
  summary: 'Get consents granted by the user',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'user-id': z
        .string()
        .openapi({
          param: { name: 'user-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(z.record(z.string(), z.any())) } },
    },
    403: { description: 'Forbidden' },
  },
})

export const deleteAdminRealmsRealmUsersUserIdConsentsClientRoute = createRoute({
  method: 'delete',
  path: '/admin/realms/{realm}/users/{user-id}/consents/{client}',
  tags: ['Users'],
  summary: 'Revoke consent and offline tokens for particular client from user',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'user-id': z
        .string()
        .openapi({
          param: { name: 'user-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      client: z
        .string()
        .openapi({
          param: {
            name: 'client',
            in: 'path',
            description: 'Client id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getAdminRealmsRealmUsersUserIdCredentialsRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/users/{user-id}/credentials',
  tags: ['Users'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'user-id': z
        .string()
        .openapi({
          param: { name: 'user-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(CredentialRepresentationSchema) } },
    },
    403: { description: 'Forbidden' },
  },
})

export const deleteAdminRealmsRealmUsersUserIdCredentialsCredentialIdRoute = createRoute({
  method: 'delete',
  path: '/admin/realms/{realm}/users/{user-id}/credentials/{credentialId}',
  tags: ['Users'],
  summary: 'Remove a credential for a user',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'user-id': z
        .string()
        .openapi({
          param: { name: 'user-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      credentialId: z
        .string()
        .openapi({
          param: { name: 'credentialId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const postAdminRealmsRealmUsersUserIdCredentialsCredentialIdMoveAfterNewPreviousCredentialIdRoute =
  createRoute({
    method: 'post',
    path: '/admin/realms/{realm}/users/{user-id}/credentials/{credentialId}/moveAfter/{newPreviousCredentialId}',
    tags: ['Users'],
    summary: 'Move a credential to a position behind another credential',
    request: {
      params: z.object({
        realm: z
          .string()
          .openapi({
            param: {
              name: 'realm',
              in: 'path',
              description: 'realm name (not id!)',
              required: true,
              schema: { type: 'string' },
            },
          }),
        'user-id': z
          .string()
          .openapi({
            param: { name: 'user-id', in: 'path', required: true, schema: { type: 'string' } },
          }),
        credentialId: z
          .string()
          .openapi({
            param: {
              name: 'credentialId',
              in: 'path',
              description: 'The credential to move',
              required: true,
              schema: { type: 'string' },
            },
          }),
        newPreviousCredentialId: z
          .string()
          .openapi({
            param: {
              name: 'newPreviousCredentialId',
              in: 'path',
              description:
                'The credential that will be the previous element in the list. If set to null, the moved credential will be the first element in the list.',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      204: { description: 'No Content' },
      403: { description: 'Forbidden' },
      404: { description: 'Not Found' },
    },
  })

export const postAdminRealmsRealmUsersUserIdCredentialsCredentialIdMoveToFirstRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/users/{user-id}/credentials/{credentialId}/moveToFirst',
  tags: ['Users'],
  summary: 'Move a credential to a first position in the credentials list of the user',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'user-id': z
        .string()
        .openapi({
          param: { name: 'user-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      credentialId: z
        .string()
        .openapi({
          param: {
            name: 'credentialId',
            in: 'path',
            description: 'The credential to move',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const putAdminRealmsRealmUsersUserIdCredentialsCredentialIdUserLabelRoute = createRoute({
  method: 'put',
  path: '/admin/realms/{realm}/users/{user-id}/credentials/{credentialId}/userLabel',
  tags: ['Users'],
  summary: 'Update a credential label for a user',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'user-id': z
        .string()
        .openapi({
          param: { name: 'user-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      credentialId: z
        .string()
        .openapi({
          param: { name: 'credentialId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'text/plain': { schema: z.string() } } },
  },
  responses: {
    204: { description: 'No Content' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const putAdminRealmsRealmUsersUserIdDisableCredentialTypesRoute = createRoute({
  method: 'put',
  path: '/admin/realms/{realm}/users/{user-id}/disable-credential-types',
  tags: ['Users'],
  summary: 'Disable all credentials for a user of a specific type',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'user-id': z
        .string()
        .openapi({
          param: { name: 'user-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: z.array(z.string()) } } },
  },
  responses: { 204: { description: 'No Content' }, 403: { description: 'Forbidden' } },
})

export const putAdminRealmsRealmUsersUserIdExecuteActionsEmailRoute = createRoute({
  method: 'put',
  path: '/admin/realms/{realm}/users/{user-id}/execute-actions-email',
  tags: ['Users'],
  summary: 'Send an email to the user with a link they can click to execute particular actions.',
  description:
    'An email contains a link the user can click to perform a set of required actions. The redirectUri and clientId parameters are optional. If no redirect is given, then there will be no link back to click after actions have completed. Redirect uri must be a valid uri for the particular clientId.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'user-id': z
        .string()
        .openapi({
          param: { name: 'user-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      client_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'client_id',
            in: 'query',
            description: 'Client id',
            schema: { type: 'string' },
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
            name: 'lifespan',
            in: 'query',
            description: 'Number of seconds after which the generated token expires',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      redirect_uri: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'redirect_uri',
            in: 'query',
            description: 'Redirect uri',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: z.array(z.string()) } } },
  },
  responses: {
    204: { description: 'No Content' },
    400: { description: 'Bad Request', content: {} },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error', content: {} },
  },
})

export const getAdminRealmsRealmUsersUserIdFederatedIdentityRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/users/{user-id}/federated-identity',
  tags: ['Users'],
  summary: 'Get social logins associated with the user',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'user-id': z
        .string()
        .openapi({
          param: { name: 'user-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(FederatedIdentityRepresentationSchema) } },
    },
    403: { description: 'Forbidden' },
  },
})

export const postAdminRealmsRealmUsersUserIdFederatedIdentityProviderRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/users/{user-id}/federated-identity/{provider}',
  tags: ['Users'],
  summary: 'Add a social login provider to the user',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'user-id': z
        .string()
        .openapi({
          param: { name: 'user-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      provider: z
        .string()
        .openapi({
          param: {
            name: 'provider',
            in: 'path',
            description: 'Social login provider id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: FederatedIdentityRepresentationSchema } } },
  },
  responses: {
    204: { description: 'No Content' },
    403: { description: 'Forbidden' },
    409: { description: 'Conflict', content: {} },
  },
})

export const deleteAdminRealmsRealmUsersUserIdFederatedIdentityProviderRoute = createRoute({
  method: 'delete',
  path: '/admin/realms/{realm}/users/{user-id}/federated-identity/{provider}',
  tags: ['Users'],
  summary: 'Remove a social login provider from user',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'user-id': z
        .string()
        .openapi({
          param: { name: 'user-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      provider: z
        .string()
        .openapi({
          param: {
            name: 'provider',
            in: 'path',
            description: 'Social login provider id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const getAdminRealmsRealmUsersUserIdGroupsRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/users/{user-id}/groups',
  tags: ['Users'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'user-id': z
        .string()
        .openapi({
          param: { name: 'user-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      briefRepresentation: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'briefRepresentation',
            in: 'query',
            schema: { default: true, type: 'boolean' },
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
            name: 'first',
            in: 'query',
            schema: { format: 'int32', type: 'integer' },
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
            name: 'max',
            in: 'query',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'search', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(GroupRepresentationSchema) } },
    },
    403: { description: 'Forbidden' },
  },
})

export const getAdminRealmsRealmUsersUserIdGroupsCountRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/users/{user-id}/groups/count',
  tags: ['Users'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'user-id': z
        .string()
        .openapi({
          param: { name: 'user-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'search', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.record(
            z.string(),
            z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64(),
              )
              .openapi({ type: 'integer', format: 'int64' }),
          ),
        },
      },
    },
    403: { description: 'Forbidden' },
  },
})

export const putAdminRealmsRealmUsersUserIdGroupsGroupIdRoute = createRoute({
  method: 'put',
  path: '/admin/realms/{realm}/users/{user-id}/groups/{groupId}',
  tags: ['Users'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'user-id': z
        .string()
        .openapi({
          param: { name: 'user-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      groupId: z
        .string()
        .openapi({
          param: { name: 'groupId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const deleteAdminRealmsRealmUsersUserIdGroupsGroupIdRoute = createRoute({
  method: 'delete',
  path: '/admin/realms/{realm}/users/{user-id}/groups/{groupId}',
  tags: ['Users'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'user-id': z
        .string()
        .openapi({
          param: { name: 'user-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      groupId: z
        .string()
        .openapi({
          param: { name: 'groupId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    400: { description: 'Bad Request' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error', content: {} },
  },
})

export const postAdminRealmsRealmUsersUserIdImpersonationRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/users/{user-id}/impersonation',
  tags: ['Users'],
  summary: 'Impersonate the user',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'user-id': z
        .string()
        .openapi({
          param: { name: 'user-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.record(z.string(), z.any()) } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorRepresentationSchema } },
    },
    403: { description: 'Forbidden' },
  },
})

export const postAdminRealmsRealmUsersUserIdLogoutRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/users/{user-id}/logout',
  tags: ['Users'],
  summary:
    'Remove all user sessions associated with the user Also send notification to all clients that have an admin URL to invalidate the sessions for the particular user.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'user-id': z
        .string()
        .openapi({
          param: { name: 'user-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 204: { description: 'No Content' }, 403: { description: 'Forbidden' } },
})

export const getAdminRealmsRealmUsersUserIdOfflineSessionsClientUuidRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/users/{user-id}/offline-sessions/{clientUuid}',
  tags: ['Users'],
  summary: 'Get offline sessions associated with the user and client',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'user-id': z
        .string()
        .openapi({
          param: { name: 'user-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      clientUuid: z
        .string()
        .openapi({
          param: { name: 'clientUuid', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(UserSessionRepresentationSchema) } },
    },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
  },
})

export const putAdminRealmsRealmUsersUserIdResetPasswordRoute = createRoute({
  method: 'put',
  path: '/admin/realms/{realm}/users/{user-id}/reset-password',
  tags: ['Users'],
  summary: 'Set up a new password for the user.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'user-id': z
        .string()
        .openapi({
          param: { name: 'user-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: CredentialRepresentationSchema } } },
  },
  responses: {
    204: { description: 'No Content' },
    400: { description: 'Bad Request' },
    403: { description: 'Forbidden' },
    500: { description: 'Internal Server Error', content: {} },
  },
})

export const putAdminRealmsRealmUsersUserIdResetPasswordEmailRoute = createRoute({
  method: 'put',
  path: '/admin/realms/{realm}/users/{user-id}/reset-password-email',
  tags: ['Users'],
  summary: 'Send an email to the user with a link they can click to reset their password.',
  description:
    'The redirectUri and clientId parameters are optional. The default for the redirect is the account client. This endpoint has been deprecated.  Please use the execute-actions-email passing a list with UPDATE_PASSWORD within it.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'user-id': z
        .string()
        .openapi({
          param: { name: 'user-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      client_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'client_id',
            in: 'query',
            description: 'client id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      redirect_uri: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'redirect_uri',
            in: 'query',
            description: 'redirect uri',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    400: { description: 'Bad Request', content: {} },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error', content: {} },
  },
  deprecated: true,
})

export const getAdminRealmsRealmUsersUserIdRoleMappingsRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/users/{user-id}/role-mappings',
  tags: ['Role Mapper'],
  summary: 'Get role mappings',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'user-id': z
        .string()
        .openapi({
          param: { name: 'user-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: MappingsRepresentationSchema } },
    },
    403: { description: 'Forbidden' },
  },
})

export const getAdminRealmsRealmUsersUserIdRoleMappingsClientsClientIdRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/users/{user-id}/role-mappings/clients/{client-id}',
  tags: ['Client Role Mappings'],
  summary: 'Get client-level role mappings for the user or group, and the app',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'user-id': z
        .string()
        .openapi({
          param: { name: 'user-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      'client-id': z
        .string()
        .openapi({
          param: {
            name: 'client-id',
            in: 'path',
            description: 'client id (not clientId!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
    },
  },
})

export const postAdminRealmsRealmUsersUserIdRoleMappingsClientsClientIdRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/users/{user-id}/role-mappings/clients/{client-id}',
  tags: ['Client Role Mappings'],
  summary: 'Add client-level roles to the user or group role mapping',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'user-id': z
        .string()
        .openapi({
          param: { name: 'user-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      'client-id': z
        .string()
        .openapi({
          param: {
            name: 'client-id',
            in: 'path',
            description: 'client id (not clientId!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } } },
  },
  responses: { 204: { description: 'No Content' } },
})

export const deleteAdminRealmsRealmUsersUserIdRoleMappingsClientsClientIdRoute = createRoute({
  method: 'delete',
  path: '/admin/realms/{realm}/users/{user-id}/role-mappings/clients/{client-id}',
  tags: ['Client Role Mappings'],
  summary: 'Delete client-level roles from user or group role mapping',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'user-id': z
        .string()
        .openapi({
          param: { name: 'user-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      'client-id': z
        .string()
        .openapi({
          param: {
            name: 'client-id',
            in: 'path',
            description: 'client id (not clientId!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } } },
  },
  responses: { 204: { description: 'No Content' } },
})

export const getAdminRealmsRealmUsersUserIdRoleMappingsClientsClientIdAvailableRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/users/{user-id}/role-mappings/clients/{client-id}/available',
  tags: ['Client Role Mappings'],
  summary: 'Get available client-level roles that can be mapped to the user or group',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'user-id': z
        .string()
        .openapi({
          param: { name: 'user-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      'client-id': z
        .string()
        .openapi({
          param: {
            name: 'client-id',
            in: 'path',
            description: 'client id (not clientId!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
    },
  },
})

export const getAdminRealmsRealmUsersUserIdRoleMappingsClientsClientIdCompositeRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/users/{user-id}/role-mappings/clients/{client-id}/composite',
  tags: ['Client Role Mappings'],
  summary: 'Get effective client-level role mappings This recurses any composite roles',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'user-id': z
        .string()
        .openapi({
          param: { name: 'user-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
      'client-id': z
        .string()
        .openapi({
          param: {
            name: 'client-id',
            in: 'path',
            description: 'client id (not clientId!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      briefRepresentation: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'briefRepresentation',
            in: 'query',
            description: 'if false, return roles with their attributes',
            schema: { default: true, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
    },
  },
})

export const getAdminRealmsRealmUsersUserIdRoleMappingsRealmRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/users/{user-id}/role-mappings/realm',
  tags: ['Role Mapper'],
  summary: 'Get realm-level role mappings',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'user-id': z
        .string()
        .openapi({
          param: { name: 'user-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
    },
    403: { description: 'Forbidden' },
  },
})

export const postAdminRealmsRealmUsersUserIdRoleMappingsRealmRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/users/{user-id}/role-mappings/realm',
  tags: ['Role Mapper'],
  summary: 'Add realm-level role mappings to the user',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'user-id': z
        .string()
        .openapi({
          param: { name: 'user-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } } },
  },
  responses: {
    204: { description: 'No Content' },
    400: { description: 'Bad Request' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
})

export const deleteAdminRealmsRealmUsersUserIdRoleMappingsRealmRoute = createRoute({
  method: 'delete',
  path: '/admin/realms/{realm}/users/{user-id}/role-mappings/realm',
  tags: ['Role Mapper'],
  summary: 'Delete realm-level role mappings',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'user-id': z
        .string()
        .openapi({
          param: { name: 'user-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } } },
  },
  responses: {
    204: { description: 'No Content' },
    400: { description: 'Bad Request' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
})

export const getAdminRealmsRealmUsersUserIdRoleMappingsRealmAvailableRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/users/{user-id}/role-mappings/realm/available',
  tags: ['Role Mapper'],
  summary: 'Get realm-level roles that can be mapped',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'user-id': z
        .string()
        .openapi({
          param: { name: 'user-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
    },
    403: { description: 'Forbidden' },
  },
})

export const getAdminRealmsRealmUsersUserIdRoleMappingsRealmCompositeRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/users/{user-id}/role-mappings/realm/composite',
  tags: ['Role Mapper'],
  summary:
    'Get effective realm-level role mappings This will recurse all composite roles to get the result.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'user-id': z
        .string()
        .openapi({
          param: { name: 'user-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      briefRepresentation: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            name: 'briefRepresentation',
            in: 'query',
            description: 'if false, return roles with their attributes',
            schema: { default: true, type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(RoleRepresentationSchema) } },
    },
    403: { description: 'Forbidden' },
  },
})

export const putAdminRealmsRealmUsersUserIdSendVerifyEmailRoute = createRoute({
  method: 'put',
  path: '/admin/realms/{realm}/users/{user-id}/send-verify-email',
  tags: ['Users'],
  summary:
    'Send an email-verification email to the user An email contains a link the user can click to verify their email address.',
  description:
    'The redirectUri, clientId and lifespan parameters are optional. The default for the redirect is the account client. The default for the lifespan is 12 hours',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'user-id': z
        .string()
        .openapi({
          param: { name: 'user-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      client_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'client_id',
            in: 'query',
            description: 'Client id',
            schema: { type: 'string' },
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
            name: 'lifespan',
            in: 'query',
            description: 'Number of seconds after which the generated token expires',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      redirect_uri: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'redirect_uri',
            in: 'query',
            description: 'Redirect uri',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    400: { description: 'Bad Request', content: {} },
    403: { description: 'Forbidden' },
    500: { description: 'Internal Server Error', content: {} },
  },
})

export const getAdminRealmsRealmUsersUserIdSessionsRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/users/{user-id}/sessions',
  tags: ['Users'],
  summary: 'Get sessions associated with the user',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'user-id': z
        .string()
        .openapi({
          param: { name: 'user-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(UserSessionRepresentationSchema) } },
    },
    403: { description: 'Forbidden' },
  },
})

export const getAdminRealmsRealmUsersUserIdUnmanagedAttributesRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/users/{user-id}/unmanagedAttributes',
  tags: ['Users'],
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'user-id': z
        .string()
        .openapi({
          param: { name: 'user-id', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.record(z.string(), z.array(z.string())) } },
    },
    403: { description: 'Forbidden' },
  },
})

export const getAdminRealmsRealmWorkflowsRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/workflows',
  tags: ['Workflows'],
  summary: 'List workflows',
  description: 'List workflows filtered by name and paginated using first and max parameters.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      exact: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'exact',
            in: 'query',
            description:
              "Boolean which defines whether the param 'search' must match exactly or not",
            schema: { type: 'boolean' },
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
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'first',
            in: 'query',
            description: 'The position of the first result to be processed (pagination offset)',
            schema: { format: 'int32', default: '0', type: 'integer' },
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
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'max',
            in: 'query',
            description: 'The maximum number of results to be returned - defaults to 10',
            schema: { format: 'int32', default: '10', type: 'integer' },
            required: false,
          },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            in: 'query',
            description: 'A String representing the workflow name - either partial or exact',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/yaml': { schema: WorkflowRepresentationSchema },
        'application/json': { schema: WorkflowRepresentationSchema },
      },
    },
    400: { description: 'Bad Request' },
  },
})

export const postAdminRealmsRealmWorkflowsRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/workflows',
  tags: ['Workflows'],
  summary: 'Create workflow',
  description: 'Create a new workflow from the provided representation.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/yaml': { schema: WorkflowRepresentationSchema },
        'application/json': { schema: WorkflowRepresentationSchema },
      },
    },
  },
  responses: { 201: { description: 'Created' }, 400: { description: 'Bad Request' } },
})

export const postAdminRealmsRealmWorkflowsMigrateRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/workflows/migrate',
  tags: ['Workflows'],
  summary: 'Migrate scheduled resources from one step to another',
  description:
    'Migrate scheduled resources from one step to another step in the same or in a different workflow.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'from',
            in: 'query',
            description: 'A String representing the id of the step to migrate from',
            schema: { type: 'string' },
            required: false,
          },
        }),
      to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'to',
            in: 'query',
            description: 'A String representing the id of the step to migrate to',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 204: { description: 'No Content' }, 400: { description: 'Bad Request' } },
})

export const getAdminRealmsRealmWorkflowsScheduledResourceIdRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/workflows/scheduled/{resource-id}',
  tags: ['Workflows'],
  summary: 'List scheduled workflows for resource',
  description: 'Return workflows that have scheduled steps for the given resource identifier.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'resource-id': z
        .string()
        .openapi({
          param: {
            name: 'resource-id',
            in: 'path',
            description: 'Identifier of the resource associated with the scheduled workflows',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: WorkflowRepresentationSchema } },
    },
    400: { description: 'Bad Request' },
  },
})

export const getAdminRealmsRealmWorkflowsIdRoute = createRoute({
  method: 'get',
  path: '/admin/realms/{realm}/workflows/{id}',
  tags: ['Workflows'],
  summary: 'Get workflow',
  description:
    'Get the workflow representation. Optionally exclude the workflow id from the response.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'Workflow identifier',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      includeId: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'includeId',
            in: 'query',
            description:
              'Indicates whether the workflow and step ids should be included in the representation or not - defaults to true',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/yaml': { schema: WorkflowRepresentationSchema },
        'application/json': { schema: WorkflowRepresentationSchema },
      },
    },
    400: { description: 'Bad Request' },
  },
})

export const putAdminRealmsRealmWorkflowsIdRoute = createRoute({
  method: 'put',
  path: '/admin/realms/{realm}/workflows/{id}',
  tags: ['Workflows'],
  summary: 'Update workflow',
  description: 'Update the workflow configuration. This method does not update the workflow steps.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'Workflow identifier',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/yaml': { schema: WorkflowRepresentationSchema },
        'application/json': { schema: WorkflowRepresentationSchema },
      },
    },
  },
  responses: { 204: { description: 'No Content' }, 400: { description: 'Bad Request' } },
})

export const deleteAdminRealmsRealmWorkflowsIdRoute = createRoute({
  method: 'delete',
  path: '/admin/realms/{realm}/workflows/{id}',
  tags: ['Workflows'],
  summary: 'Delete workflow',
  description: 'Delete the workflow and its configuration.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'Workflow identifier',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'No Content' }, 400: { description: 'Bad Request' } },
})

export const postAdminRealmsRealmWorkflowsIdActivateTypeResourceIdRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/workflows/{id}/activate/{type}/{resourceId}',
  tags: ['Workflows'],
  summary: 'Activate workflow for resource',
  description:
    'Activate the workflow for the given resource type and identifier. Optionally schedule the first step using the notBefore parameter.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'Workflow identifier',
            required: true,
            schema: { type: 'string' },
          },
        }),
      resourceId: z
        .string()
        .openapi({
          param: {
            name: 'resourceId',
            in: 'path',
            description: 'Resource identifier',
            required: true,
            schema: { type: 'string' },
          },
        }),
      type: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          const parts = val.split(',')
          if (parts.length % 2 !== 0) return val
          return Object.fromEntries(
            parts.flatMap((part, i) => (i % 2 === 0 ? [[part, parts[i + 1]]] : [])),
          )
        }, z.object({}))
        .openapi({
          param: {
            name: 'type',
            in: 'path',
            description: 'Resource type',
            required: true,
            schema: { type: 'object' },
          },
        }),
    }),
    query: z.object({
      notBefore: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'notBefore',
            in: 'query',
            description:
              "Optional value representing the time to schedule the first workflow step. The value is either an integer representing the seconds from now, an integer followed by 'ms' representing milliseconds from now, or an ISO-8601 date string.",
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 204: { description: 'No Content' }, 400: { description: 'Bad Request' } },
})

export const postAdminRealmsRealmWorkflowsIdDeactivateTypeResourceIdRoute = createRoute({
  method: 'post',
  path: '/admin/realms/{realm}/workflows/{id}/deactivate/{type}/{resourceId}',
  tags: ['Workflows'],
  summary: 'Deactivate workflow for resource',
  description: 'Deactivate the workflow for the given resource type and identifier.',
  request: {
    params: z.object({
      realm: z
        .string()
        .openapi({
          param: {
            name: 'realm',
            in: 'path',
            description: 'realm name (not id!)',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'Workflow identifier',
            required: true,
            schema: { type: 'string' },
          },
        }),
      resourceId: z
        .string()
        .openapi({
          param: {
            name: 'resourceId',
            in: 'path',
            description: 'Resource identifier',
            required: true,
            schema: { type: 'string' },
          },
        }),
      type: z
        .preprocess((val) => {
          if (typeof val !== 'string') return val
          const parts = val.split(',')
          if (parts.length % 2 !== 0) return val
          return Object.fromEntries(
            parts.flatMap((part, i) => (i % 2 === 0 ? [[part, parts[i + 1]]] : [])),
          )
        }, z.object({}))
        .openapi({
          param: {
            name: 'type',
            in: 'path',
            description: 'Resource type',
            required: true,
            schema: { type: 'object' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'No Content' }, 400: { description: 'Bad Request' } },
})
