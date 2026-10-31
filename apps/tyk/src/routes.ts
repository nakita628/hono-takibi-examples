import { createRoute, z } from '@hono/zod-openapi'

const GraphqlTypeSchema = z
  .object({
    fields: z.array(z.string()).nullable().exactOptional(),
    name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GraphqlType')

const BodyFieldMatchSchema = z
  .object({
    match_rx: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The regular expression the field's values are matched against. Empty places no constraint on the value.",
      }),
    path: z
      .string()
      .exactOptional()
      .openapi({ description: 'The field\'s path in gjson syntax, e.g. "customer.id".' }),
    reverse: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Inverts the rule. With an empty match_rx, the field must be absent.',
      }),
  })
  .openapi({ description: 'A rule applied to one field of a JSON request body.', required: [] })
  .openapi('BodyFieldMatch')

const StringRegexMapSchema = z
  .object({ match_rx: z.string().exactOptional(), reverse: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('StringRegexMap')

const AccessConditionOptionsSchema = z
  .object({
    body_field_matches: z
      .array(BodyFieldMatchSchema)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Matches on fields of a JSON request body. Each names its field by path in gjson syntax, e.g. "customer.id", and one path can carry several rules. Paths are case sensitive. A body that is not valid JSON, or that repeats a key within an object (in any case), fails the match. Every element of an array field has to match; a path through an array such as "items.#.sku" skips elements that do not have the field.',
        example: [{ match_rx: '^[0-9]+$', path: 'customer.id' }],
      }),
    header_matches: z
      .record(z.string(), StringRegexMapSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Matches on request headers, keyed by header name.' }),
    path_part_matches: z
      .record(z.string(), StringRegexMapSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Matches on segments of the request path, keyed by rule name.' }),
    payload_matches: StringRegexMapSchema.exactOptional(),
    query_val_matches: z
      .record(z.string(), StringRegexMapSchema)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Matches on query string parameters, keyed by parameter name.',
        example: { persnbr: { match_rx: '', reverse: true } },
      }),
    request_context_matches: z
      .record(z.string(), StringRegexMapSchema)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Matches on values set on the request by earlier middleware, keyed by name.',
      }),
    session_meta_matches: z
      .record(z.string(), StringRegexMapSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: "Matches on the session's metadata, keyed by metadata key." }),
  })
  .openapi({
    description:
      'The matches an access condition evaluates. A match with an empty match_rx and reverse set to true requires the name to be absent.',
    required: [],
  })
  .openapi('AccessConditionOptions')

const AccessConditionSchema = z
  .object({
    on: z
      .enum(['all', 'any', ''])
      .exactOptional()
      .openapi({
        description:
          'How the options combine. "all" requires every configured option to match, "any" requires just one. Empty means "all".',
      }),
    options: AccessConditionOptionsSchema.exactOptional(),
  })
  .openapi({
    description:
      'An additional constraint that a request has to satisfy before the enclosing access spec grants access.',
    required: [],
  })
  .openapi('AccessCondition')

const AccessSpecSchema = z
  .object({
    conditions: z
      .array(AccessConditionSchema)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Further restrict the matched URL. Every condition has to be satisfied for access to be granted.',
      }),
    methods: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({ example: ['GET', 'POST', 'DELETE', 'PUT'] }),
    url: z.string().exactOptional().openapi({ example: 'anything/rate-limit-1-per-5' }),
  })
  .openapi({ required: [] })
  .openapi('AccessSpec')

const RateLimitSmoothingSchema = z
  .object({
    delay: z.int().exactOptional(),
    enabled: z.boolean().exactOptional(),
    step: z.int().exactOptional(),
    threshold: z.int().exactOptional(),
    trigger: z.number().exactOptional(),
  })
  .nullable()
  .openapi({ required: [] })
  .openapi('RateLimitSmoothing')

const RateLimitType2Schema = z
  .object({
    per: z.number().exactOptional(),
    rate: z.number().exactOptional(),
    smoothing: RateLimitSmoothingSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RateLimitType2')

const EndpointMethodSchema = z
  .object({ limit: RateLimitType2Schema.exactOptional(), name: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('EndpointMethod')

const EndpointMethodsSchema = z.array(EndpointMethodSchema).openapi('EndpointMethods')

const EndpointSchema = z
  .object({ methods: EndpointMethodsSchema.exactOptional(), path: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('Endpoint')

const EndpointsSchema = z.array(EndpointSchema).openapi('Endpoints')

const FieldLimitsSchema = z
  .object({ max_query_depth: z.int().exactOptional() })
  .openapi({ required: [] })
  .openapi('FieldLimits')

const FieldAccessDefinitionSchema = z
  .object({
    field_name: z.string().exactOptional(),
    limits: FieldLimitsSchema.exactOptional(),
    type_name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FieldAccessDefinition')

const APILimitSchema = z
  .object({
    max_query_depth: z.int().exactOptional(),
    per: z.number().exactOptional(),
    quota_max: z.int().exactOptional(),
    quota_remaining: z.int().exactOptional(),
    quota_renewal_rate: z.int().exactOptional(),
    quota_renews: z.int().exactOptional(),
    rate: z.number().exactOptional(),
    smoothing: RateLimitSmoothingSchema.exactOptional(),
    throttle_interval: z.number().exactOptional(),
    throttle_retry_limit: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('APILimit')

type AccessDefinitionType = {
  allowance_scope?: string
  allowed_types?: z.infer<typeof GraphqlTypeSchema>[] | null
  allowed_urls?: z.infer<typeof AccessSpecSchema>[] | null
  api_id?: string
  api_name?: string
  disable_introspection?: boolean
  endpoints?: z.infer<typeof EndpointsSchema>
  field_access_rights?: z.infer<typeof FieldAccessDefinitionSchema>[] | null
  limit?: z.infer<typeof APILimitSchema>
  restricted_types?: z.infer<typeof GraphqlTypeSchema>[] | null
  versions?: string[] | null
}

const AuthSourceSchema = z
  .object({ enabled: z.boolean().exactOptional(), name: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('AuthSource')

const AuthSourcesSchema = z
  .object({
    cookie: AuthSourceSchema.exactOptional(),
    header: AuthSourceSchema.exactOptional(),
    query: AuthSourceSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AuthSources')

const IDExtractorConfigSchema = z
  .object({
    formParamName: z.string().exactOptional(),
    headerName: z.string().exactOptional(),
    regexp: z.string().exactOptional(),
    regexpMatchIndex: z.int().exactOptional(),
    xPathExp: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('IDExtractorConfig')

const IDExtractorSchema = z
  .object({
    config: IDExtractorConfigSchema.exactOptional(),
    enabled: z.boolean().exactOptional(),
    source: z.string().exactOptional(),
    with: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('IDExtractor')

const AuthenticationPluginSchema = z
  .object({
    enabled: z.boolean().exactOptional(),
    functionName: z.string().exactOptional(),
    idExtractor: IDExtractorSchema.exactOptional(),
    path: z.string().exactOptional(),
    rawBodyOnly: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AuthenticationPlugin')

const CustomPluginAuthenticationSchema = z
  .object({
    AuthSources: AuthSourcesSchema.exactOptional(),
    config: AuthenticationPluginSchema.exactOptional(),
    enabled: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CustomPluginAuthentication')

const HMACSchema = z
  .object({
    AuthSources: AuthSourcesSchema.exactOptional(),
    allowedAlgorithms: z.array(z.string()).exactOptional(),
    allowedClockSkew: z.number().exactOptional(),
    enabled: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('HMAC')

const ClientToPolicySchema = z
  .object({ clientId: z.string().exactOptional(), policyId: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('ClientToPolicy')

const ProviderType2Schema = z
  .object({
    clientToPolicyMapping: z.array(ClientToPolicySchema).exactOptional(),
    issuer: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProviderType2')

const ScopeToPolicySchema = z
  .object({ policyId: z.string().exactOptional(), scope: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('ScopeToPolicy')

const ScopesType2Schema = z
  .object({
    claimName: z.string().exactOptional(),
    scopeToPolicyMapping: z.array(ScopeToPolicySchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ScopesType2')

const OIDCSchema = z
  .object({
    AuthSources: AuthSourcesSchema.exactOptional(),
    enabled: z.boolean().exactOptional(),
    providers: z.array(ProviderType2Schema).exactOptional(),
    scopes: ScopesType2Schema.exactOptional(),
    segregateByClientId: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OIDC')

const SecuritySchemesSchema = z.record(z.string(), z.any()).openapi('SecuritySchemes')

type AuthenticationType = {
  baseIdentityProvider?: string
  custom?: z.infer<typeof CustomPluginAuthenticationSchema>
  enabled?: boolean
  hmac?: z.infer<typeof HMACSchema>
  oidc?: z.infer<typeof OIDCSchema>
  securitySchemes?: z.infer<typeof SecuritySchemesSchema>
  stripAuthorizationData?: boolean
}

const CertsCertificateBasicsSchema = z
  .object({
    dns_names: z.array(z.string()).nullable().exactOptional(),
    has_private: z.boolean().exactOptional(),
    id: z.string().exactOptional(),
    is_ca: z.boolean().exactOptional(),
    issuer_cn: z.string().exactOptional(),
    not_after: z.iso.datetime({ offset: true }).exactOptional(),
    not_before: z.iso.datetime({ offset: true }).exactOptional(),
    subject_cn: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CertsCertificateBasics')

const APIAllCertificateBasicsSchema = z
  .object({ certs: z.array(CertsCertificateBasicsSchema).nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('APIAllCertificateBasics')

const APIAllCertificatesSchema = z
  .object({ certs: z.array(z.string()).nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('APIAllCertificates')

const APICertificateStatusMessageSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        example:
          '5e9d9544a1dcd60001d0ed207c440d66ebb0a4629d21329808dce9091acf5f2fde328067a6e60e5347271d90',
      }),
    message: z.string().exactOptional().openapi({ example: 'Certificate added' }),
    status: z.string().exactOptional().openapi({ example: 'ok' }),
  })
  .openapi({ required: [] })
  .openapi('APICertificateStatusMessage')

const CORSConfigSchema = z
  .object({
    allow_credentials: z.boolean().exactOptional().openapi({ example: false }),
    allowed_headers: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({ example: ['Origin', 'Accept', 'Content-Type', 'Authorization'] }),
    allowed_methods: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({ example: ['GET', 'HEAD', 'POST'] }),
    allowed_origins: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({ example: ['https://*.foo.com'] }),
    debug: z.boolean().exactOptional().openapi({ example: true }),
    enable: z.boolean().exactOptional().openapi({ example: false }),
    exposed_headers: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({ example: ['Accept', 'Content-Type'] }),
    max_age: z.int().exactOptional().openapi({ example: 24 }),
    options_passthrough: z.boolean().exactOptional().openapi({ example: false }),
  })
  .openapi({ required: [] })
  .openapi('CORSConfig')

const AnalyticsPluginConfigSchema = z
  .object({
    enable: z.boolean().exactOptional(),
    func_name: z.string().exactOptional(),
    plugin_path: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AnalyticsPluginConfig')

const SignatureConfigSchema = z
  .object({
    algorithm: z.string().exactOptional(),
    allowed_clock_skew: z.int().exactOptional(),
    error_code: z.int().exactOptional(),
    error_message: z.string().exactOptional(),
    header: z.string().exactOptional(),
    param_name: z.string().exactOptional(),
    secret: z.string().exactOptional(),
    use_param: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SignatureConfig')

const AuthConfigSchema = z
  .object({
    auth_header_name: z.string().exactOptional().openapi({ example: 'Authorization' }),
    cookie_name: z.string().exactOptional(),
    disable_header: z.boolean().exactOptional(),
    name: z.string().exactOptional(),
    param_name: z.string().exactOptional(),
    signature: SignatureConfigSchema.exactOptional(),
    use_certificate: z.boolean().exactOptional(),
    use_cookie: z.boolean().exactOptional(),
    use_param: z.boolean().exactOptional(),
    validate_signature: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AuthConfig')

const AuthProviderMetaSchema = z
  .object({
    meta: z.record(z.string(), z.any()).nullable().exactOptional(),
    name: z.string().exactOptional(),
    storage_engine: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AuthProviderMeta')

const CacheOptionsSchema = z
  .object({
    cache_all_safe_requests: z.boolean().exactOptional().openapi({ example: false }),
    cache_by_headers: z.array(z.string()).nullable().exactOptional(),
    cache_control_ttl_header: z.string().exactOptional(),
    cache_response_codes: z.array(z.int()).nullable().exactOptional(),
    cache_timeout: z
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
      .openapi({ type: 'integer', format: 'int64', example: 60 }),
    enable_cache: z.boolean().exactOptional().openapi({ example: true }),
    enable_upstream_cache_control: z.boolean().exactOptional().openapi({ example: false }),
  })
  .openapi({ required: [] })
  .openapi('CacheOptions')

const MiddlewareDefinitionSchema = z
  .object({
    disabled: z.boolean().exactOptional(),
    name: z.string().exactOptional().openapi({ example: 'PreMiddlewareFunction' }),
    path: z.string().exactOptional(),
    raw_body_only: z.boolean().exactOptional().openapi({ example: false }),
    require_session: z.boolean().exactOptional().openapi({ example: false }),
  })
  .openapi({ required: [] })
  .openapi('MiddlewareDefinition')

const MiddlewareIdExtractorSchema = z
  .object({
    disabled: z.boolean().exactOptional(),
    extract_from: z.string().exactOptional(),
    extract_with: z.string().exactOptional(),
    extractor_config: z.record(z.string(), z.any()).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MiddlewareIdExtractor')

const MiddlewareSectionSchema = z
  .object({
    auth_check: MiddlewareDefinitionSchema.exactOptional(),
    driver: z.string().exactOptional(),
    id_extractor: MiddlewareIdExtractorSchema.exactOptional(),
    post: z.array(MiddlewareDefinitionSchema).nullable().exactOptional(),
    post_key_auth: z.array(MiddlewareDefinitionSchema).nullable().exactOptional(),
    pre: z.array(MiddlewareDefinitionSchema).nullable().exactOptional(),
    response: z.array(MiddlewareDefinitionSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MiddlewareSection')

const VersionDefinitionSchema = z
  .object({
    default: z.string().exactOptional(),
    enabled: z.boolean().exactOptional(),
    fallback_to_default: z.boolean().exactOptional(),
    key: z.string().exactOptional().openapi({ example: 'x-api-version' }),
    location: z.string().exactOptional().openapi({ example: 'header' }),
    name: z.string().exactOptional(),
    strip_path: z.boolean().exactOptional(),
    strip_versioning_data: z.boolean().exactOptional(),
    url_versioning_pattern: z.string().exactOptional(),
    versions: z.record(z.string(), z.string()).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('VersionDefinition')

const EventHandlerTriggerConfigSchema = z
  .object({
    handler_meta: z.record(z.string(), z.any()).nullable().exactOptional(),
    handler_name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EventHandlerTriggerConfig')

const EventHandlerMetaConfigSchema = z
  .object({
    events: z
      .record(z.string(), z.array(EventHandlerTriggerConfigSchema))
      .nullable()
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EventHandlerMetaConfig')

const IntrospectionCacheSchema = z
  .object({
    enabled: z.boolean().exactOptional(),
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
  })
  .openapi({ required: [] })
  .openapi('IntrospectionCache')

const IntrospectionSchema = z
  .object({
    cache: IntrospectionCacheSchema.exactOptional(),
    client_id: z.string().exactOptional(),
    client_secret: z.string().exactOptional(),
    enabled: z.boolean().exactOptional(),
    identity_base_field: z.string().exactOptional(),
    url: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Introspection')

const JWTValidationSchema = z
  .object({
    enabled: z.boolean().exactOptional(),
    expires_at_validation_skew: z.int().min(0).exactOptional(),
    identity_base_field: z.string().exactOptional(),
    issued_at_validation_skew: z.int().min(0).exactOptional(),
    not_before_validation_skew: z.int().min(0).exactOptional(),
    signing_method: z.string().exactOptional(),
    source: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('JWTValidation')

const ProviderSchema = z
  .object({
    introspection: IntrospectionSchema.exactOptional(),
    jwt: JWTValidationSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Provider')

const ExternalOAuthSchema = z
  .object({
    enabled: z.boolean().exactOptional(),
    providers: z.array(ProviderSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ExternalOAuth')

const GlobalRateLimitSchema = z
  .object({
    disabled: z.boolean().exactOptional(),
    per: z.number().exactOptional(),
    rate: z.number().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GlobalRateLimit')

const GraphQLTypeFieldsSchema = z
  .object({
    fields: z.array(z.string()).nullable().exactOptional(),
    type: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GraphQLTypeFields')

const GraphQLEngineDataSourceSchema = z
  .object({
    config: z.any().exactOptional(),
    internal: z.boolean().exactOptional(),
    kind: z.string().exactOptional(),
    name: z.string().exactOptional(),
    root_fields: z.array(GraphQLTypeFieldsSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GraphQLEngineDataSource')

const GraphQLFieldConfigSchema = z
  .object({
    disable_default_mapping: z.boolean().exactOptional(),
    field_name: z.string().exactOptional(),
    path: z.array(z.string()).nullable().exactOptional(),
    type_name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GraphQLFieldConfig')

const UDGGlobalHeaderSchema = z
  .object({ key: z.string().exactOptional(), value: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('UDGGlobalHeader')

const GraphQLEngineConfigSchema = z
  .object({
    data_sources: z.array(GraphQLEngineDataSourceSchema).nullable().exactOptional(),
    field_configs: z.array(GraphQLFieldConfigSchema).nullable().exactOptional(),
    global_headers: z.array(UDGGlobalHeaderSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GraphQLEngineConfig')

const GraphQLIntrospectionConfigSchema = z
  .object({ disabled: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('GraphQLIntrospectionConfig')

const GraphQLPlaygroundSchema = z
  .object({ enabled: z.boolean().exactOptional(), path: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('GraphQLPlayground')

const GraphQLProxyFeaturesConfigSchema = z
  .object({ use_immutable_headers: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('GraphQLProxyFeaturesConfig')

const RequestHeadersRewriteConfigSchema = z
  .object({ remove: z.boolean().exactOptional(), value: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('RequestHeadersRewriteConfig')

const GraphQLResponseExtensionsSchema = z
  .object({ on_error_forwarding: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('GraphQLResponseExtensions')

const GraphQLProxyConfigSchema = z
  .object({
    auth_headers: z.record(z.string(), z.string()).nullable().exactOptional(),
    features: GraphQLProxyFeaturesConfigSchema.exactOptional(),
    request_headers: z.record(z.string(), z.string()).nullable().exactOptional(),
    request_headers_rewrite: z
      .record(z.string(), RequestHeadersRewriteConfigSchema)
      .nullable()
      .exactOptional(),
    subscription_type: z.string().exactOptional(),
    use_response_extensions: GraphQLResponseExtensionsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GraphQLProxyConfig')

const GraphQLSubgraphConfigSchema = z
  .object({ sdl: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('GraphQLSubgraphConfig')

const GraphQLSubgraphEntitySchema = z
  .object({
    api_id: z.string().exactOptional(),
    headers: z.record(z.string(), z.string()).nullable().exactOptional(),
    name: z.string().exactOptional(),
    sdl: z.string().exactOptional(),
    subscription_type: z.string().exactOptional(),
    url: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GraphQLSubgraphEntity')

const GraphQLSupergraphConfigSchema = z
  .object({
    disable_query_batching: z.boolean().exactOptional(),
    global_headers: z.record(z.string(), z.string()).nullable().exactOptional(),
    merged_sdl: z.string().exactOptional(),
    subgraphs: z.array(GraphQLSubgraphEntitySchema).nullable().exactOptional(),
    updated_at: z.iso.datetime({ offset: true }).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GraphQLSupergraphConfig')

const DatasourceSourceConfigSchema = z
  .object({ data_source_config: z.any().exactOptional(), kind: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('DatasourceSourceConfig')

const DatasourceMappingConfigurationSchema = z
  .object({ disabled: z.boolean().exactOptional(), path: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('DatasourceMappingConfiguration')

const DatasourceTypeFieldConfigurationSchema = z
  .object({
    data_source: DatasourceSourceConfigSchema.exactOptional(),
    field_name: z.string().exactOptional(),
    mapping: DatasourceMappingConfigurationSchema.exactOptional(),
    type_name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DatasourceTypeFieldConfiguration')

const GraphQLConfigSchema = z
  .object({
    enabled: z.boolean().exactOptional(),
    engine: GraphQLEngineConfigSchema.exactOptional(),
    execution_mode: z
      .enum(['proxyOnly', 'executionEngine', 'subgraph', 'supergraph', ''])
      .exactOptional(),
    introspection: GraphQLIntrospectionConfigSchema.exactOptional(),
    last_schema_update: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    playground: GraphQLPlaygroundSchema.exactOptional(),
    proxy: GraphQLProxyConfigSchema.exactOptional(),
    schema: z.string().exactOptional(),
    subgraph: GraphQLSubgraphConfigSchema.exactOptional(),
    supergraph: GraphQLSupergraphConfigSchema.exactOptional(),
    type_field_configurations: z
      .array(DatasourceTypeFieldConfigurationSchema)
      .nullable()
      .exactOptional(),
    version: z.enum(['1', '2', '']).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GraphQLConfig')

const NotificationsManagerSchema = z
  .object({
    oauth_on_keychange_url: z.string().exactOptional(),
    shared_secret: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('NotificationsManager')

const OIDProviderConfigSchema = z
  .object({
    client_ids: z.record(z.string(), z.string()).nullable().exactOptional(),
    issuer: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OIDProviderConfig')

const OpenIDOptionsSchema = z
  .object({
    providers: z.array(OIDProviderConfigSchema).nullable().exactOptional(),
    segregate_by_client: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OpenIDOptions')

const ServiceDiscoveryConfigurationSchema = z
  .object({
    cache_disabled: z.boolean().exactOptional(),
    cache_timeout: z.int().exactOptional(),
    data_path: z.string().exactOptional(),
    endpoint_returns_list: z.boolean().exactOptional(),
    parent_data_path: z.string().exactOptional(),
    port_data_path: z.string().exactOptional(),
    query_endpoint: z.string().exactOptional(),
    target_path: z.string().exactOptional(),
    use_discovery_service: z.boolean().exactOptional(),
    use_nested_query: z.boolean().exactOptional(),
    use_target_list: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ServiceDiscoveryConfiguration')

const ProxyConfigSchema = z
  .object({
    check_host_against_uptime_tests: z.boolean().exactOptional(),
    disable_strip_slash: z.boolean().exactOptional(),
    enable_load_balancing: z.boolean().exactOptional(),
    listen_path: z.string().exactOptional().openapi({ example: '/relative-path-examples/' }),
    preserve_host_header: z.boolean().exactOptional(),
    service_discovery: ServiceDiscoveryConfigurationSchema.exactOptional(),
    strip_listen_path: z.boolean().exactOptional().openapi({ example: true }),
    target_list: z.array(z.string()).nullable().exactOptional(),
    target_url: z.string().exactOptional().openapi({ example: 'https://httpbin.org/' }),
    transport: z
      .object({
        proxy_url: z.string().exactOptional(),
        ssl_ciphers: z.array(z.string()).nullable().exactOptional(),
        ssl_force_common_name_check: z.boolean().exactOptional(),
        ssl_insecure_skip_verify: z.boolean().exactOptional(),
        ssl_max_version: z.int().min(0).exactOptional(),
        ssl_min_version: z.int().min(0).exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('ProxyConfig')

const RequestSigningMetaSchema = z
  .object({
    algorithm: z.string().exactOptional(),
    certificate_id: z.string().exactOptional(),
    header_list: z.array(z.string()).nullable().exactOptional(),
    is_enabled: z.boolean().exactOptional(),
    key_id: z.string().exactOptional(),
    secret: z.string().exactOptional(),
    signature_header: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RequestSigningMeta')

const ResponseProcessorSchema = z
  .object({ name: z.string().exactOptional(), options: z.any().exactOptional() })
  .openapi({ required: [] })
  .openapi('ResponseProcessor')

const ScopeClaimSchema = z
  .object({
    scope_claim_name: z.string().exactOptional(),
    scope_to_policy: z.record(z.string(), z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ScopeClaim')

const ScopesSchema = z
  .object({ jwt: ScopeClaimSchema.exactOptional(), oidc: ScopeClaimSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('Scopes')

const SessionProviderMetaSchema = z
  .object({
    meta: z.record(z.string(), z.any()).nullable().exactOptional(),
    name: z.string().exactOptional(),
    storage_engine: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SessionProviderMeta')

const CheckCommandSchema = z
  .object({ message: z.string().exactOptional(), name: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('CheckCommand')

const HostCheckObjectSchema = z
  .object({
    body: z.string().exactOptional(),
    commands: z.array(CheckCommandSchema).nullable().exactOptional(),
    enable_proxy_protocol: z.boolean().exactOptional(),
    headers: z.record(z.string(), z.string()).nullable().exactOptional(),
    method: z.string().exactOptional(),
    protocol: z.string().exactOptional(),
    timeout: z.int().exactOptional(),
    url: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('HostCheckObject')

const UptimeTestsConfigSchema = z
  .object({
    expire_utime_after: z.int().exactOptional(),
    recheck_wait: z.int().exactOptional(),
    service_discovery: ServiceDiscoveryConfigurationSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UptimeTestsConfig')

const UptimeTestsSchema = z
  .object({
    check_list: z.array(HostCheckObjectSchema).nullable().exactOptional(),
    config: UptimeTestsConfigSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UptimeTests')

const CacheMetaSchema = z
  .object({
    cache_key_regex: z.string().exactOptional(),
    cache_response_codes: z.array(z.int()).nullable().exactOptional(),
    disabled: z.boolean().exactOptional(),
    method: z.string().exactOptional(),
    path: z.string().exactOptional(),
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
  })
  .openapi({ required: [] })
  .openapi('CacheMeta')

const EndpointMethodMetaSchema = z
  .object({
    action: z.enum(['no_action', 'reply']).exactOptional(),
    code: z.int().exactOptional(),
    data: z.string().exactOptional(),
    headers: z.record(z.string(), z.string()).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EndpointMethodMeta')

const EndPointMetaSchema = z
  .object({
    disabled: z.boolean().exactOptional(),
    ignore_case: z.boolean().exactOptional(),
    method: z.string().exactOptional(),
    method_actions: z.record(z.string(), EndpointMethodMetaSchema).exactOptional(),
    path: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EndPointMeta')

const CircuitBreakerMetaSchema = z
  .object({
    disable_half_open_state: z.boolean().exactOptional(),
    disabled: z.boolean().exactOptional(),
    method: z.string().exactOptional(),
    path: z.string().exactOptional(),
    return_to_service_after: z.int().exactOptional(),
    samples: z
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
    threshold_percent: z.number().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CircuitBreakerMeta')

const TrackEndpointMetaSchema = z
  .object({
    disabled: z.boolean().exactOptional(),
    method: z.string().exactOptional(),
    path: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TrackEndpointMeta')

const GoPluginMetaSchema = z
  .object({
    disabled: z.boolean().exactOptional(),
    func_name: z.string().exactOptional(),
    method: z.string().exactOptional(),
    path: z.string().exactOptional(),
    plugin_path: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GoPluginMeta')

const HardTimeoutMetaSchema = z
  .object({
    disabled: z.boolean().exactOptional(),
    method: z.string().exactOptional(),
    path: z.string().exactOptional(),
    timeout: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('HardTimeoutMeta')

const InternalMetaSchema = z
  .object({
    disabled: z.boolean().exactOptional(),
    method: z.string().exactOptional(),
    path: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('InternalMeta')

const MethodTransformMetaSchema = z
  .object({
    disabled: z.boolean().exactOptional(),
    method: z.string().exactOptional(),
    path: z.string().exactOptional(),
    to_method: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MethodTransformMeta')

const MockResponseMetaSchema = z
  .object({
    body: z.string().exactOptional(),
    code: z.int().exactOptional(),
    disabled: z.boolean().exactOptional(),
    headers: z.record(z.string(), z.string()).nullable().exactOptional(),
    ignore_case: z.boolean().exactOptional(),
    method: z.string().exactOptional(),
    path: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MockResponseMeta')

const PersistGraphQLMetaSchema = z
  .object({
    method: z.string().exactOptional(),
    operation: z.string().exactOptional(),
    path: z.string().exactOptional(),
    variables: z.record(z.string(), z.any()).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PersistGraphQLMeta')

const RateLimitMetaSchema = z
  .object({
    disabled: z.boolean().exactOptional(),
    method: z.string().exactOptional(),
    path: z.string().exactOptional(),
    per: z.number().exactOptional(),
    rate: z.number().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RateLimitMeta')

const RequestSizeMetaSchema = z
  .object({
    disabled: z.boolean().exactOptional(),
    method: z.string().exactOptional(),
    path: z.string().exactOptional(),
    size_limit: z
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
  .openapi('RequestSizeMeta')

const TemplateDataSchema = z
  .object({
    enable_session: z.boolean().exactOptional(),
    input_type: z.enum(['json', 'xml']).exactOptional(),
    template_mode: z.enum(['blob', 'file']).exactOptional(),
    template_source: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TemplateData')

const TemplateMetaSchema = z
  .object({
    disabled: z.boolean().exactOptional(),
    method: z.string().exactOptional(),
    path: z.string().exactOptional(),
    template_data: TemplateDataSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TemplateMeta')

const HeaderInjectionMetaSchema = z
  .object({
    act_on: z.boolean().exactOptional(),
    add_headers: z.record(z.string(), z.string()).nullable().exactOptional(),
    delete_headers: z.array(z.string()).nullable().exactOptional(),
    disabled: z.boolean().exactOptional(),
    method: z.string().exactOptional(),
    path: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('HeaderInjectionMeta')

const TransformJQMetaSchema = z
  .object({
    filter: z.string().exactOptional(),
    method: z.string().exactOptional(),
    path: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TransformJQMeta')

const RoutingTriggerOptionsSchema = z
  .object({
    header_matches: z.record(z.string(), StringRegexMapSchema).nullable().exactOptional(),
    path_part_matches: z.record(z.string(), StringRegexMapSchema).nullable().exactOptional(),
    payload_matches: StringRegexMapSchema.exactOptional(),
    query_val_matches: z.record(z.string(), StringRegexMapSchema).nullable().exactOptional(),
    request_context_matches: z.record(z.string(), StringRegexMapSchema).nullable().exactOptional(),
    session_meta_matches: z.record(z.string(), StringRegexMapSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RoutingTriggerOptions')

const RoutingTriggerSchema = z
  .object({
    on: z.enum(['all', 'any']).exactOptional(),
    options: RoutingTriggerOptionsSchema.exactOptional(),
    rewrite_to: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RoutingTrigger')

const URLRewriteMetaSchema = z
  .object({
    disabled: z.boolean().exactOptional(),
    match_pattern: z.string().exactOptional(),
    method: z.string().exactOptional(),
    path: z.string().exactOptional(),
    rewrite_to: z.string().exactOptional(),
    triggers: z.array(RoutingTriggerSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('URLRewriteMeta')

const ValidatePathMetaSchema = z
  .object({
    disabled: z.boolean().exactOptional(),
    error_response_code: z.int().exactOptional(),
    method: z.string().exactOptional(),
    path: z.string().exactOptional(),
    schema: z.record(z.string(), z.any()).nullable().exactOptional(),
    schema_b64: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ValidatePathMeta')

const ValidateRequestMetaSchema = z
  .object({
    enabled: z.boolean().exactOptional(),
    error_response_code: z.int().exactOptional(),
    method: z.string().exactOptional(),
    path: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ValidateRequestMeta')

const VirtualMetaSchema = z
  .object({
    disabled: z.boolean().exactOptional(),
    function_source_type: z.enum(['blob', 'file']).exactOptional(),
    function_source_uri: z.string().exactOptional(),
    method: z.string().exactOptional(),
    path: z.string().exactOptional(),
    proxy_on_error: z.boolean().exactOptional(),
    response_function_name: z.string().exactOptional(),
    use_session: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('VirtualMeta')

const ExtendedPathsSetSchema = z
  .object({
    advance_cache_config: z.array(CacheMetaSchema).exactOptional(),
    black_list: z.array(EndPointMetaSchema).exactOptional(),
    cache: z.array(z.string()).exactOptional(),
    circuit_breakers: z.array(CircuitBreakerMetaSchema).exactOptional(),
    do_not_track_endpoints: z.array(TrackEndpointMetaSchema).exactOptional(),
    go_plugin: z.array(GoPluginMetaSchema).exactOptional(),
    hard_timeouts: z.array(HardTimeoutMetaSchema).exactOptional(),
    ignored: z.array(EndPointMetaSchema).exactOptional(),
    internal: z.array(InternalMetaSchema).exactOptional(),
    method_transforms: z.array(MethodTransformMetaSchema).exactOptional(),
    mock_response: z.array(MockResponseMetaSchema).exactOptional(),
    persist_graphql: z.array(PersistGraphQLMetaSchema).nullable().exactOptional(),
    rate_limit: z.array(RateLimitMetaSchema).nullable().exactOptional(),
    size_limits: z.array(RequestSizeMetaSchema).exactOptional(),
    track_endpoints: z.array(TrackEndpointMetaSchema).exactOptional(),
    transform: z.array(TemplateMetaSchema).exactOptional(),
    transform_headers: z.array(HeaderInjectionMetaSchema).exactOptional(),
    transform_jq: z.array(TransformJQMetaSchema).exactOptional(),
    transform_jq_response: z.array(TransformJQMetaSchema).exactOptional(),
    transform_response: z.array(TemplateMetaSchema).exactOptional(),
    transform_response_headers: z.array(HeaderInjectionMetaSchema).exactOptional(),
    url_rewrites: z.array(URLRewriteMetaSchema).exactOptional(),
    validate_json: z.array(ValidatePathMetaSchema).exactOptional(),
    validate_request: z.array(ValidateRequestMetaSchema).exactOptional(),
    virtual: z.array(VirtualMetaSchema).exactOptional(),
    white_list: z.array(EndPointMetaSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ExtendedPathsSet')

const VersionInfoSchema = z
  .object({
    expires: z.string().exactOptional(),
    extended_paths: ExtendedPathsSetSchema.exactOptional(),
    global_headers: z.record(z.string(), z.string()).nullable().exactOptional(),
    global_headers_disabled: z.boolean().exactOptional(),
    global_headers_remove: z.array(z.string()).nullable().exactOptional(),
    global_response_headers: z.record(z.string(), z.string()).nullable().exactOptional(),
    global_response_headers_disabled: z.boolean().exactOptional(),
    global_response_headers_remove: z.array(z.string()).nullable().exactOptional(),
    global_size_limit: z
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
    ignore_endpoint_case: z.boolean().exactOptional(),
    name: z.string().exactOptional(),
    override_target: z.string().exactOptional(),
    paths: z
      .object({
        black_list: z.array(z.string()).nullable().exactOptional(),
        ignored: z.array(z.string()).nullable().exactOptional(),
        white_list: z.array(z.string()).nullable().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    use_extended_paths: z.boolean().exactOptional().openapi({ example: true }),
  })
  .openapi({ required: [] })
  .openapi('VersionInfo')

const VersionDataSchema = z
  .object({
    default_version: z.string().exactOptional(),
    not_versioned: z.boolean().exactOptional(),
    versions: z.record(z.string(), VersionInfoSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('VersionData')

const ErrorMatcherSchema = z
  .object({
    body_field: z.string().exactOptional(),
    body_value: z.string().exactOptional(),
    flag: z.string().exactOptional(),
    message_pattern: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ErrorMatcher')

const ErrorResponseSchema = z
  .object({
    body: z.string().exactOptional(),
    headers: z.record(z.string(), z.string()).nullable().exactOptional(),
    message: z.string().exactOptional(),
    status_code: z.int().exactOptional(),
    template: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ErrorResponse')

const ErrorOverrideSchema = z
  .object({
    match: ErrorMatcherSchema.exactOptional(),
    response: ErrorResponseSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ErrorOverride')

const APIDefinitionSchema = z
  .object({
    CORS: CORSConfigSchema.exactOptional(),
    active: z.boolean().exactOptional(),
    allowed_ips: z.array(z.string()).nullable().exactOptional(),
    analytics_plugin: AnalyticsPluginConfigSchema.exactOptional(),
    api_id: z.string().exactOptional(),
    auth: AuthConfigSchema.exactOptional(),
    auth_configs: z.record(z.string(), AuthConfigSchema).nullable().exactOptional(),
    auth_provider: AuthProviderMetaSchema.exactOptional(),
    base_identity_provided_by: z.string().exactOptional(),
    basic_auth: z
      .object({
        body_password_regexp: z.string().exactOptional(),
        body_user_regexp: z.string().exactOptional(),
        cache_ttl: z.int().exactOptional(),
        disable_caching: z.boolean().exactOptional(),
        extract_from_body: z.boolean().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    blacklisted_ips: z.array(z.string()).nullable().exactOptional(),
    cache_options: CacheOptionsSchema.exactOptional(),
    certificate_pinning_disabled: z.boolean().exactOptional(),
    certificates: z.array(z.string()).nullable().exactOptional(),
    client_certificates: z.array(z.string()).nullable().exactOptional(),
    config_data: z.record(z.string(), z.any()).nullable().exactOptional(),
    config_data_disabled: z.boolean().exactOptional(),
    custom_middleware: MiddlewareSectionSchema.exactOptional(),
    custom_middleware_bundle: z.string().exactOptional(),
    custom_middleware_bundle_disabled: z.boolean().exactOptional(),
    custom_plugin_auth_enabled: z.boolean().exactOptional(),
    definition: VersionDefinitionSchema.exactOptional(),
    detailed_tracing: z.boolean().exactOptional(),
    disable_quota: z.boolean().exactOptional(),
    disable_rate_limit: z.boolean().exactOptional(),
    do_not_track: z.boolean().exactOptional(),
    domain: z.string().exactOptional(),
    domain_disabled: z.boolean().exactOptional(),
    dont_set_quota_on_create: z.boolean().exactOptional(),
    enable_batch_request_support: z.boolean().exactOptional(),
    enable_context_vars: z.boolean().exactOptional(),
    enable_coprocess_auth: z.boolean().exactOptional(),
    enable_detailed_recording: z.boolean().exactOptional(),
    enable_ip_blacklisting: z.boolean().exactOptional(),
    enable_ip_whitelisting: z.boolean().exactOptional(),
    enable_jwt: z.boolean().exactOptional(),
    enable_proxy_protocol: z.boolean().exactOptional(),
    enable_signature_checking: z.boolean().exactOptional(),
    event_handlers: EventHandlerMetaConfigSchema.exactOptional(),
    expiration: z.string().exactOptional(),
    expire_analytics_after: z.int().exactOptional(),
    external_oauth: ExternalOAuthSchema.exactOptional(),
    global_rate_limit: GlobalRateLimitSchema.exactOptional(),
    graphql: GraphQLConfigSchema.exactOptional(),
    hmac_allowed_algorithms: z.array(z.string()).nullable().exactOptional(),
    hmac_allowed_clock_skew: z.number().exactOptional(),
    id: z.string().exactOptional(),
    idp_client_id_mapping_disabled: z.boolean().exactOptional(),
    internal: z.boolean().exactOptional(),
    is_oas: z.boolean().exactOptional(),
    jwt_client_base_field: z.string().exactOptional(),
    jwt_default_policies: z.array(z.string()).nullable().exactOptional(),
    jwt_expires_at_validation_skew: z.int().min(0).exactOptional(),
    jwt_identity_base_field: z.string().exactOptional(),
    jwt_issued_at_validation_skew: z.int().min(0).exactOptional(),
    jwt_not_before_validation_skew: z.int().min(0).exactOptional(),
    jwt_policy_field_name: z.string().exactOptional(),
    jwt_scope_claim_name: z.string().exactOptional(),
    jwt_scope_to_policy_mapping: z.record(z.string(), z.string()).nullable().exactOptional(),
    jwt_signing_method: z.string().exactOptional(),
    jwt_skip_kid: z.boolean().exactOptional(),
    jwt_source: z.string().exactOptional(),
    listen_port: z.int().exactOptional(),
    name: z.string().exactOptional(),
    notifications: NotificationsManagerSchema.exactOptional(),
    oauth_meta: z
      .object({
        allowed_access_types: z.array(z.string()).nullable().exactOptional(),
        allowed_authorize_types: z.array(z.string()).nullable().exactOptional(),
        auth_login_redirect: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    openid_options: OpenIDOptionsSchema.exactOptional(),
    org_id: z.string().exactOptional(),
    pinned_public_keys: z.record(z.string(), z.string()).nullable().exactOptional(),
    protocol: z.string().exactOptional(),
    proxy: ProxyConfigSchema.exactOptional(),
    request_signing: RequestSigningMetaSchema.exactOptional(),
    response_processors: z.array(ResponseProcessorSchema).nullable().exactOptional(),
    scopes: ScopesSchema.exactOptional(),
    session_lifetime: z.int().exactOptional(),
    session_lifetime_respects_key_expiration: z.boolean().exactOptional(),
    session_provider: SessionProviderMetaSchema.exactOptional(),
    slug: z.string().exactOptional(),
    strip_auth_data: z.boolean().exactOptional(),
    tag_headers: z.array(z.string()).nullable().exactOptional(),
    tags: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({ example: ['Default', 'v1'] }),
    tags_disabled: z.boolean().exactOptional(),
    upstream_certificates: z.record(z.string(), z.string()).nullable().exactOptional(),
    upstream_certificates_disabled: z.boolean().exactOptional(),
    uptime_tests: UptimeTestsSchema.exactOptional(),
    use_basic_auth: z.boolean().exactOptional(),
    use_go_plugin_auth: z.boolean().exactOptional(),
    use_keyless: z.boolean().exactOptional(),
    use_mutual_tls_auth: z.boolean().exactOptional(),
    use_oauth2: z.boolean().exactOptional(),
    use_openid: z.boolean().exactOptional(),
    use_standard_auth: z.boolean().exactOptional(),
    version_data: VersionDataSchema.exactOptional(),
    error_overrides: z.record(z.string(), z.array(ErrorOverrideSchema)).nullable().exactOptional(),
    error_overrides_disabled: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('APIDefinition')

const AccessDefinitionSchema: z.ZodType<AccessDefinitionType> = z
  .lazy(() =>
    z
      .object({
        allowance_scope: z
          .string()
          .exactOptional()
          .openapi({ example: 'd371b83b249845a2497ab9a947fd6210' }),
        allowed_types: z.array(GraphqlTypeSchema).nullable().exactOptional(),
        allowed_urls: z.array(AccessSpecSchema).nullable().exactOptional(),
        api_id: z.string().exactOptional().openapi({ example: 'd1dfc6a927a046c54c0ed470f19757cc' }),
        api_name: z.string().exactOptional().openapi({ example: 'Rate Limit Proxy API' }),
        disable_introspection: z.boolean().exactOptional().openapi({ example: false }),
        endpoints: EndpointsSchema.exactOptional(),
        field_access_rights: z.array(FieldAccessDefinitionSchema).nullable().exactOptional(),
        limit: APILimitSchema.exactOptional(),
        restricted_types: z.array(GraphqlTypeSchema).nullable().exactOptional(),
        versions: z
          .array(z.string())
          .nullable()
          .exactOptional()
          .openapi({ example: ['Default', 'v2'] }),
      })
      .openapi({ required: [] }),
  )
  .openapi('AccessDefinition')

const AllowanceSchema = z
  .object({ enabled: z.boolean().exactOptional(), ignoreCase: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('Allowance')

const ApiAllKeysSchema = z
  .object({ keys: z.array(z.string()).nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('ApiAllKeys')

const ApiModifyKeySuccessSchema = z
  .object({
    action: z.string().exactOptional().openapi({ example: 'modified' }),
    key: z.string().exactOptional().openapi({ example: 'b13d928b9972bd18' }),
    key_hash: z.string().exactOptional(),
    status: z.string().exactOptional().openapi({ example: 'ok' }),
  })
  .openapi({ required: [] })
  .openapi('ApiModifyKeySuccess')

const ApiStatusMessageSchema = z
  .object({ message: z.string().exactOptional(), status: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('ApiStatusMessage')

const AuthenticationSchema: z.ZodType<AuthenticationType> = z
  .lazy(() =>
    z
      .object({
        baseIdentityProvider: z.string().exactOptional(),
        custom: CustomPluginAuthenticationSchema.exactOptional(),
        enabled: z.boolean().exactOptional(),
        hmac: HMACSchema.exactOptional(),
        oidc: OIDCSchema.exactOptional(),
        securitySchemes: SecuritySchemesSchema.exactOptional(),
        stripAuthorizationData: z.boolean().exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('Authentication')

const BasicAuthDataSchema = z
  .object({ hash_type: z.string().exactOptional(), password: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('BasicAuthData')

const HttpHeaderSchema = z.record(z.string(), z.array(z.string())).openapi('HttpHeader')

const BatchReplyUnitSchema = z
  .object({
    body: z.string().exactOptional(),
    code: z.int().exactOptional(),
    headers: HttpHeaderSchema.exactOptional(),
    relative_url: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchReplyUnit')

const RequestDefinitionSchema = z
  .object({
    body: z.string().exactOptional(),
    headers: z.record(z.string(), z.string()).nullable().exactOptional(),
    method: z.string().exactOptional(),
    relative_url: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RequestDefinition')

const BatchRequestStructureSchema = z
  .object({
    requests: z.array(RequestDefinitionSchema).nullable().exactOptional(),
    suppress_parallel_execution: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchRequestStructure')

const BooleanQueryParamSchema = z.boolean().openapi({ example: true }).openapi('BooleanQueryParam')

const CORSSchema = z
  .object({
    allowCredentials: z.boolean().exactOptional(),
    allowedHeaders: z.array(z.string()).exactOptional(),
    allowedMethods: z.array(z.string()).exactOptional(),
    allowedOrigins: z.array(z.string()).exactOptional(),
    debug: z.boolean().exactOptional(),
    enabled: z.boolean().exactOptional(),
    exposedHeaders: z.array(z.string()).exactOptional(),
    maxAge: z.int().exactOptional(),
    optionsPassthrough: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CORS')

const CacheSchema = z
  .object({
    cacheAllSafeRequests: z.boolean().exactOptional(),
    cacheByHeaders: z.array(z.string()).exactOptional(),
    cacheResponseCodes: z.array(z.int()).exactOptional(),
    controlTTLHeaderName: z.string().exactOptional(),
    enableUpstreamCacheControl: z.boolean().exactOptional(),
    enabled: z.boolean().exactOptional(),
    timeout: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Cache')

const CachePluginSchema = z
  .object({
    cacheByRegex: z.string().exactOptional(),
    cacheResponseCodes: z.array(z.int()).exactOptional(),
    enabled: z.boolean().exactOptional(),
    timeout: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CachePlugin')

const PinnedPublicKeySchema = z
  .object({
    domain: z.string().exactOptional(),
    publicKeys: z.array(z.string()).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PinnedPublicKey')

const PinnedPublicKeysSchema = z.array(PinnedPublicKeySchema).nullable().openapi('PinnedPublicKeys')

const CertificatePinningSchema = z
  .object({
    domainToPublicKeysMapping: PinnedPublicKeysSchema.exactOptional(),
    enabled: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CertificatePinning')

const PkixNameSchema = z.object({}).openapi('PkixName')

const CertsCertificateMetaSchema = z
  .object({
    dns_names: z
      .array(z.string())
      .exactOptional()
      .openapi({ example: ['.*tyk.io'] }),
    fingerprint: z
      .string()
      .exactOptional()
      .openapi({ example: '7c440d66ebb0a4629d21329808dce9091acf5f2fde328067a6e60e5347271d90' }),
    has_private: z.boolean().exactOptional().openapi({ example: false }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        example:
          '5e9d9544a1dcd60001d0ed207c440d66ebb0a4629d21329808dce9091acf5f2fde328067a6e60e5347271d90',
      }),
    is_ca: z.boolean().exactOptional(),
    issuer: PkixNameSchema.exactOptional(),
    not_after: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2034-03-26T08:46:37Z' }),
    not_before: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2024-03-25T08:46:37Z' }),
    subject: PkixNameSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CertsCertificateMeta')

const CircuitBreakerSchema = z
  .object({
    coolDownPeriod: z.int().exactOptional(),
    enabled: z.boolean().exactOptional(),
    halfOpenStateEnabled: z.boolean().exactOptional(),
    sampleSize: z.int().exactOptional(),
    threshold: z.number().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CircuitBreaker')

const ClientCertificatesSchema = z
  .object({
    allowlist: z.array(z.string()).nullable().exactOptional(),
    enabled: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ClientCertificates')

const ContextVariablesSchema = z
  .object({ enabled: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('ContextVariables')

const CustomPluginSchema = z
  .object({
    enabled: z.boolean().exactOptional(),
    functionName: z.string().exactOptional(),
    path: z.string().exactOptional(),
    rawBodyOnly: z.boolean().exactOptional(),
    requireSession: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CustomPlugin')

const CustomPluginsSchema = z.array(CustomPluginSchema).openapi('CustomPlugins')

const DetailedActivityLogsSchema = z
  .object({ enabled: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('DetailedActivityLogs')

const DetailedTracingSchema = z
  .object({ enabled: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('DetailedTracing')

const DomainSchema = z
  .object({
    certificates: z.array(z.string()).exactOptional(),
    enabled: z.boolean().exactOptional(),
    name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Domain')

const DomainToCertificateSchema = z
  .object({ certificate: z.string().exactOptional(), domain: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('DomainToCertificate')

const EndpointPostPluginSchema = z
  .object({
    enabled: z.boolean().exactOptional(),
    functionName: z.string().exactOptional(),
    name: z.string().exactOptional(),
    path: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EndpointPostPlugin')

const EndpointPostPluginsSchema = z.array(EndpointPostPluginSchema).openapi('EndpointPostPlugins')

const EnforceTimeoutSchema = z
  .object({ enabled: z.boolean().exactOptional(), value: z.int().exactOptional() })
  .openapi({ required: [] })
  .openapi('EnforceTimeout')

const EventHandlerSchema = z
  .object({
    enabled: z.boolean().exactOptional(),
    id: z.string().exactOptional(),
    name: z.string().exactOptional(),
    trigger: z.string().exactOptional(),
    type: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EventHandler')

const EventHandlersSchema = z.array(EventHandlerSchema).openapi('EventHandlers')

const FromOASExamplesSchema = z
  .object({
    code: z.int().exactOptional(),
    contentType: z.string().exactOptional(),
    enabled: z.boolean().exactOptional(),
    exampleName: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FromOASExamples')

const GatewayTagsSchema = z
  .object({
    enabled: z.boolean().exactOptional(),
    tags: z.array(z.string()).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GatewayTags')

const PluginBundleSchema = z
  .object({ enabled: z.boolean().exactOptional(), path: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('PluginBundle')

const PluginConfigDataSchema = z
  .object({
    enabled: z.boolean().exactOptional(),
    value: z.record(z.string(), z.any()).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PluginConfigData')

const PluginConfigSchema = z
  .object({
    bundle: PluginBundleSchema.exactOptional(),
    data: PluginConfigDataSchema.exactOptional(),
    driver: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PluginConfig')

const PostAuthenticationPluginSchema = z
  .object({ plugins: CustomPluginsSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('PostAuthenticationPlugin')

const PostPluginSchema = z
  .object({ plugins: CustomPluginsSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('PostPlugin')

const PrePluginSchema = z
  .object({ plugins: CustomPluginsSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('PrePlugin')

const ResponsePluginSchema = z
  .object({ plugins: CustomPluginsSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('ResponsePlugin')

const TrafficLogsSchema = z
  .object({ enabled: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('TrafficLogs')

const HeaderSchema = z
  .object({ name: z.string().exactOptional(), value: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('Header')

const HeadersSchema = z.array(HeaderSchema).openapi('Headers')

const TransformHeadersSchema = z
  .object({
    add: HeadersSchema.exactOptional(),
    enabled: z.boolean().exactOptional(),
    remove: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TransformHeaders')

const GlobalSchema = z
  .object({
    cache: CacheSchema.exactOptional(),
    contextVariables: ContextVariablesSchema.exactOptional(),
    cors: CORSSchema.exactOptional(),
    pluginConfig: PluginConfigSchema.exactOptional(),
    postAuthenticationPlugin: PostAuthenticationPluginSchema.exactOptional(),
    postAuthenticationPlugins: CustomPluginsSchema.exactOptional(),
    postPlugin: PostPluginSchema.exactOptional(),
    postPlugins: CustomPluginsSchema.exactOptional(),
    prePlugin: PrePluginSchema.exactOptional(),
    prePlugins: CustomPluginsSchema.exactOptional(),
    responsePlugin: ResponsePluginSchema.exactOptional(),
    responsePlugins: CustomPluginsSchema.exactOptional(),
    trafficLogs: TrafficLogsSchema.exactOptional(),
    transformRequestHeaders: TransformHeadersSchema.exactOptional(),
    transformResponseHeaders: TransformHeadersSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Global')

const GraphAccessDefinitionSchema = z.object({}).openapi('GraphAccessDefinition')

const HealthCheckItemSchema = z
  .object({
    componentId: z.string().exactOptional(),
    componentType: z.string().exactOptional(),
    output: z.string().exactOptional(),
    status: z.enum(['pass', 'fail', 'warn']).exactOptional(),
    time: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('HealthCheckItem')

const HealthCheckResponseSchema = z
  .object({
    description: z.string().exactOptional(),
    details: z.record(z.string(), HealthCheckItemSchema).exactOptional(),
    output: z.string().exactOptional(),
    status: z.enum(['pass', 'fail', 'warn']).exactOptional(),
    version: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('HealthCheckResponse')

const StateSchema = z
  .object({ active: z.boolean().exactOptional(), internal: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('State')

const VersionToIDSchema = z
  .object({ id: z.string().exactOptional(), name: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('VersionToID')

const VersioningSchema = z
  .object({
    default: z.string().exactOptional(),
    enabled: z.boolean().exactOptional(),
    fallbackToDefault: z.boolean().exactOptional(),
    key: z.string().exactOptional(),
    location: z.string().exactOptional(),
    name: z.string().exactOptional(),
    stripVersioningData: z.boolean().exactOptional(),
    urlVersioningPattern: z.string().exactOptional(),
    versions: z.array(VersionToIDSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Versioning')

const InfoSchema = z
  .object({
    dbId: z.string().exactOptional(),
    expiration: z.string().exactOptional(),
    id: z.string().exactOptional(),
    name: z.string().exactOptional(),
    orgId: z.string().exactOptional(),
    state: StateSchema.exactOptional(),
    versioning: VersioningSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Info')

const InternalSchema = z
  .object({ enabled: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('Internal')

const JWTDataSchema = z
  .object({ secret: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('JWTData')

const ListenPathSchema = z
  .object({ strip: z.boolean().exactOptional(), value: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('ListenPath')

const TrackEndpointSchema = z
  .object({ enabled: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('TrackEndpoint')

const MockResponseSchema = z
  .object({
    body: z.string().exactOptional(),
    code: z.int().exactOptional(),
    enabled: z.boolean().exactOptional(),
    fromOASExamples: FromOASExamplesSchema.exactOptional(),
    headers: HeadersSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MockResponse')

const RateLimitEndpointSchema = z
  .object({
    enabled: z.boolean().exactOptional(),
    per: z.int().exactOptional(),
    rate: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RateLimitEndpoint')

const RequestSizeLimitSchema = z
  .object({ enabled: z.boolean().exactOptional(), value: z.int().exactOptional() })
  .openapi({ required: [] })
  .openapi('RequestSizeLimit')

const TransformBodySchema = z
  .object({
    body: z.string().exactOptional(),
    enabled: z.boolean().exactOptional(),
    format: z.string().exactOptional(),
    path: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TransformBody')

const TransformRequestMethodSchema = z
  .object({ enabled: z.boolean().exactOptional(), toMethod: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('TransformRequestMethod')

const URLRewriteRuleSchema = z
  .object({
    in: z.string().exactOptional(),
    name: z.string().exactOptional(),
    negate: z.boolean().exactOptional(),
    pattern: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('URLRewriteRule')

const URLRewriteTriggerSchema = z
  .object({
    condition: z.string().exactOptional(),
    rewriteTo: z.string().exactOptional(),
    rules: z.array(URLRewriteRuleSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('URLRewriteTrigger')

const URLRewriteSchema = z
  .object({
    enabled: z.boolean().exactOptional(),
    pattern: z.string().exactOptional(),
    rewriteTo: z.string().exactOptional(),
    triggers: z.array(URLRewriteTriggerSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('URLRewrite')

const ValidateRequestSchema = z
  .object({ enabled: z.boolean().exactOptional(), errorResponseCode: z.int().exactOptional() })
  .openapi({ required: [] })
  .openapi('ValidateRequest')

const VirtualEndpointSchema = z
  .object({
    body: z.string().exactOptional(),
    enabled: z.boolean().exactOptional(),
    functionName: z.string().exactOptional(),
    name: z.string().exactOptional(),
    path: z.string().exactOptional(),
    proxyOnError: z.boolean().exactOptional(),
    requireSession: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('VirtualEndpoint')

const OperationSchema = z
  .object({
    allow: AllowanceSchema.exactOptional(),
    block: AllowanceSchema.exactOptional(),
    cache: CachePluginSchema.exactOptional(),
    circuitBreaker: CircuitBreakerSchema.exactOptional(),
    doNotTrackEndpoint: TrackEndpointSchema.exactOptional(),
    enforceTimeout: EnforceTimeoutSchema.exactOptional(),
    ignoreAuthentication: AllowanceSchema.exactOptional(),
    internal: InternalSchema.exactOptional(),
    mockResponse: MockResponseSchema.exactOptional(),
    postPlugins: EndpointPostPluginsSchema.exactOptional(),
    rateLimit: RateLimitEndpointSchema.exactOptional(),
    requestSizeLimit: RequestSizeLimitSchema.exactOptional(),
    trackEndpoint: TrackEndpointSchema.exactOptional(),
    transformRequestBody: TransformBodySchema.exactOptional(),
    transformRequestHeaders: TransformHeadersSchema.exactOptional(),
    transformRequestMethod: TransformRequestMethodSchema.exactOptional(),
    transformResponseBody: TransformBodySchema.exactOptional(),
    transformResponseHeaders: TransformHeadersSchema.exactOptional(),
    urlRewrite: URLRewriteSchema.exactOptional(),
    validateRequest: ValidateRequestSchema.exactOptional(),
    virtualEndpoint: VirtualEndpointSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Operation')

const OperationsSchema = z.record(z.string(), OperationSchema).openapi('Operations')

const MiddlewareSchema = z
  .object({ global: GlobalSchema.exactOptional(), operations: OperationsSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('Middleware')

const MonitorSchema = z
  .object({
    trigger_limits: z
      .array(z.number())
      .nullable()
      .exactOptional()
      .openapi({ example: [80, 60, 50] }),
  })
  .openapi({ required: [] })
  .openapi('Monitor')

const MutualTLSSchema = z
  .object({
    domainToCertificateMapping: z.array(DomainToCertificateSchema).nullable().exactOptional(),
    enabled: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MutualTLS')

const NewClientRequestSchema = z
  .object({
    api_id: z.string().exactOptional().openapi({ example: 'keyless' }),
    client_id: z.string().exactOptional().openapi({ example: '2a06b398c17f46908de3dffcb71ef87b' }),
    description: z.string().exactOptional().openapi({ example: 'google client login' }),
    meta_data: z.record(z.string(), z.string()).nullable().exactOptional(),
    policy_id: z.string().exactOptional(),
    redirect_uri: z.string().exactOptional().openapi({ example: 'https://httpbin.org/ip' }),
    secret: z
      .string()
      .exactOptional()
      .openapi({ example: 'MmQwNTI5NGQtYjU0YS00NjMyLWIwZjktNTZjY2M1ZjhjYWY0' }),
  })
  .openapi({ required: [] })
  .openapi('NewClientRequest')

const OASSchemaResponseSchema = z
  .object({
    message: z.string().exactOptional(),
    schema: z.any().exactOptional(),
    status: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OASSchemaResponse')

const OAuthClientTokenSchema = z
  .object({ code: z.string().exactOptional(), expires: z.int().exactOptional() })
  .openapi({ required: [] })
  .openapi('OAuthClientToken')

const PaginationStatusSchema = z
  .object({
    page_num: z.int().exactOptional(),
    page_size: z.int().exactOptional(),
    page_total: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PaginationStatus')

const PaginatedOAuthClientTokensSchema = z
  .object({
    Pagination: PaginationStatusSchema.exactOptional(),
    Tokens: z.array(OAuthClientTokenSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PaginatedOAuthClientTokens')

const PolicyPartitionsSchema = z
  .object({
    acl: z.boolean().exactOptional().openapi({ example: true }),
    complexity: z.boolean().exactOptional().openapi({ example: false }),
    per_api: z.boolean().exactOptional().openapi({ example: false }),
    quota: z.boolean().exactOptional().openapi({ example: true }),
    rate_limit: z.boolean().exactOptional().openapi({ example: true }),
  })
  .openapi({ required: [] })
  .openapi('PolicyPartitions')

const PolicySchema = z
  .object({
    _id: z.string().exactOptional().openapi({ example: '5ead7120575961000181867e' }),
    access_rights: z.record(z.string(), AccessDefinitionSchema).nullable().exactOptional(),
    active: z.boolean().exactOptional().openapi({ example: true }),
    enable_http_signature_validation: z.boolean().exactOptional().openapi({ example: false }),
    graphql_access_rights: z
      .record(z.string(), GraphAccessDefinitionSchema)
      .nullable()
      .exactOptional(),
    hmac_enabled: z.boolean().exactOptional().openapi({ example: false }),
    id: z.string().exactOptional().openapi({ example: '5ead7120575961000181867e' }),
    is_inactive: z.boolean().exactOptional().openapi({ example: false }),
    key_expires_in: z
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
      .openapi({ type: 'integer', format: 'int64', example: 0 }),
    last_updated: z.string().exactOptional().openapi({ example: '1655965189' }),
    max_query_depth: z.int().exactOptional().openapi({ example: -1 }),
    meta_data: z.record(z.string(), z.any()).nullable().exactOptional(),
    name: z.string().exactOptional().openapi({ example: 'Swagger Petstore Policy' }),
    org_id: z.string().exactOptional().openapi({ example: '5e9d9544a1dcd60001d0ed20' }),
    partitions: PolicyPartitionsSchema.exactOptional(),
    per: z.float64().exactOptional().openapi({ example: 60 }),
    post_expiry_action: z
      .enum(['retain', 'delete'])
      .exactOptional()
      .openapi({
        description:
          'Defines the action to take on a Session in Redis after it expires. Valid values are "retain" and "delete".',
        example: 'delete',
      }),
    post_expiry_grace_period: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'Duration in seconds to retain a Session in Redis after it expires. Used with post_expiry_action "retain". Set to -1 to retain indefinitely.',
        example: 0,
      }),
    quota_max: z
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
      .openapi({ type: 'integer', format: 'int64', example: -1 }),
    quota_renewal_rate: z
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
      .openapi({ type: 'integer', format: 'int64', example: 3600 }),
    rate: z.float64().exactOptional().openapi({ example: 1000 }),
    smoothing: RateLimitSmoothingSchema.exactOptional(),
    tags: z.array(z.string()).nullable().exactOptional(),
    throttle_interval: z.float64().exactOptional().openapi({ example: -1 }),
    throttle_retry_limit: z.int().exactOptional().openapi({ example: -1 }),
  })
  .openapi({ required: [] })
  .openapi('Policy')

const PolicyUpdateObjSchema = z
  .object({
    apply_policies: z.array(z.string()).nullable().exactOptional(),
    policy: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PolicyUpdateObj')

const RateLimitSchema = z
  .object({
    enabled: z.boolean().exactOptional(),
    per: z.int().exactOptional(),
    rate: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RateLimit')

const ServerSchema = z
  .object({
    authentication: AuthenticationSchema.exactOptional(),
    clientCertificates: ClientCertificatesSchema.exactOptional(),
    customDomain: DomainSchema.exactOptional(),
    detailedActivityLogs: DetailedActivityLogsSchema.exactOptional(),
    detailedTracing: DetailedTracingSchema.exactOptional(),
    eventHandlers: EventHandlersSchema.exactOptional(),
    gatewayTags: GatewayTagsSchema.exactOptional(),
    listenPath: ListenPathSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Server')

const ServiceDiscoveryCacheSchema = z
  .object({ enabled: z.boolean().exactOptional(), timeout: z.int().exactOptional() })
  .openapi({ required: [] })
  .openapi('ServiceDiscoveryCache')

const ServiceDiscoverySchema = z
  .object({
    cache: ServiceDiscoveryCacheSchema.exactOptional(),
    cacheTimeout: z.int().exactOptional(),
    dataPath: z.string().exactOptional(),
    enabled: z.boolean().exactOptional(),
    endpointReturnsList: z.boolean().exactOptional(),
    parentDataPath: z.string().exactOptional(),
    portDataPath: z.string().exactOptional(),
    queryEndpoint: z.string().exactOptional(),
    targetPath: z.string().exactOptional(),
    useNestedQuery: z.boolean().exactOptional(),
    useTargetList: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ServiceDiscovery')

const SessionStateSchema = z
  .object({
    access_rights: z.record(z.string(), AccessDefinitionSchema).nullable().exactOptional(),
    alias: z.string().exactOptional().openapi({ example: 'portal-developer@example.org' }),
    allowance: z.float64().exactOptional().openapi({ example: 1000 }),
    apply_policies: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({ example: ['641c15dd0fffb800010197bf'] }),
    apply_policy_id: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'deprecated use apply_policies going forward instead to send a list of policies ids',
        example: '641c15dd0fffb800010197bf',
      }),
    basic_auth_data: BasicAuthDataSchema.exactOptional(),
    certificate: z.string().exactOptional(),
    data_expires: z
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
      .openapi({ type: 'integer', format: 'int64', example: 0 }),
    date_created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2024-03-13T03:56:46.568042549Z' }),
    enable_detail_recording: z
      .boolean()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'deprecated use enable_detailed_recording going forward instead',
        example: false,
      }),
    enable_detailed_recording: z.boolean().exactOptional().openapi({ example: true }),
    enable_http_signature_validation: z.boolean().exactOptional().openapi({ example: false }),
    expires: z
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
      .openapi({ type: 'integer', format: 'int64', example: 1712895619 }),
    hmac_enabled: z.boolean().exactOptional().openapi({ example: false }),
    hmac_string: z.string().exactOptional(),
    id_extractor_deadline: z
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
    is_inactive: z.boolean().exactOptional().openapi({ example: false }),
    jwt_data: JWTDataSchema.exactOptional(),
    last_check: z
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
      .openapi({ type: 'integer', format: 'int64', example: 0 }),
    last_updated: z.string().exactOptional().openapi({ example: '1710302206' }),
    max_query_depth: z.int().exactOptional().openapi({ example: -1 }),
    meta_data: z
      .record(z.string(), z.any())
      .nullable()
      .exactOptional()
      .openapi({ example: { tyk_developer_id: '62b3fb9a1d5e4f00017226f5' } }),
    monitor: MonitorSchema.exactOptional(),
    oauth_client_id: z.string().exactOptional(),
    oauth_keys: z.record(z.string(), z.string()).nullable().exactOptional(),
    org_id: z.string().exactOptional().openapi({ example: '5e9d9544a1dcd60001d0ed20' }),
    per: z.float64().exactOptional().openapi({ example: 5 }),
    post_expiry_action: z
      .enum(['retain', 'delete'])
      .exactOptional()
      .openapi({
        description:
          'Defines the action to take on a Session in Redis after it expires. Valid values are "retain" and "delete".',
        example: 'delete',
      }),
    post_expiry_grace_period: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'Duration in seconds to retain a Session in Redis after it expires. Used with post_expiry_action "retain". Set to -1 to retain indefinitely.',
        example: 0,
      }),
    quota_max: z
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
      .openapi({ type: 'integer', format: 'int64', example: 20000 }),
    quota_remaining: z
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
      .openapi({ type: 'integer', format: 'int64', example: 20000 }),
    quota_renewal_rate: z
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
      .openapi({ type: 'integer', format: 'int64', example: 31556952 }),
    quota_renews: z
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
      .openapi({ type: 'integer', format: 'int64', example: 1710302205 }),
    rate: z.float64().exactOptional().openapi({ example: 1 }),
    rsa_certificate_id: z.string().exactOptional(),
    session_lifetime: z
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
      .openapi({ type: 'integer', format: 'int64', example: 0 }),
    smoothing: RateLimitSmoothingSchema.exactOptional(),
    tags: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({ example: ['edge', 'edge-eu'] }),
    throttle_interval: z.float64().exactOptional().openapi({ example: 10 }),
    throttle_retry_limit: z.int().exactOptional().openapi({ example: 1000 }),
  })
  .openapi({ required: [] })
  .openapi('SessionState')

const TestSchema = z
  .object({ serviceDiscovery: ServiceDiscoverySchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('Test')

const TraceHttpRequestSchema = z
  .object({
    body: z.string().exactOptional(),
    headers: HttpHeaderSchema.exactOptional(),
    method: z.string().exactOptional().openapi({ example: 'GET' }),
    path: z.string().exactOptional().openapi({ example: '/keyless-test/' }),
  })
  .openapi({ required: [] })
  .openapi('TraceHttpRequest')

const TraceRequestSchema = z
  .xor([
    z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
          if (!Object.hasOwn(val, 'oas')) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .openapi({ required: ['oas'] }),
    z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
          if (!Object.hasOwn(val, 'spec')) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .openapi({ required: ['spec'] }),
  ])
  .openapi('TraceRequest')

const TraceResponseSchema = z
  .object({
    logs: z
      .string()
      .exactOptional()
      .openapi({
        example: '{"level":"warning","msg":"Legacy path detected! Upgrade to extended....',
      }),
    message: z.string().exactOptional().openapi({ example: 'ok' }),
    response: z
      .string()
      .exactOptional()
      .openapi({
        example:
          '====== Request ======\nGET / HTTP/1.1\r\nHost: httpbin.org\r\n\r\n\n====== Response...',
      }),
  })
  .openapi({ required: [] })
  .openapi('TraceResponse')

const UpstreamSchema = z
  .object({
    certificatePinning: CertificatePinningSchema.exactOptional(),
    mutualTLS: MutualTLSSchema.exactOptional(),
    rateLimit: RateLimitSchema.exactOptional(),
    serviceDiscovery: ServiceDiscoverySchema.exactOptional(),
    test: TestSchema.exactOptional(),
    url: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Upstream')

const VersionMetaSchema = z
  .object({
    expirationDate: z.string().exactOptional().openapi({ example: '2026-03-26 09:00' }),
    id: z.string().exactOptional().openapi({ example: 'keyless' }),
    internal: z.boolean().exactOptional().openapi({ example: false }),
    isDefaultVersion: z.boolean().exactOptional().openapi({ example: true }),
    name: z.string().exactOptional().openapi({ example: 'Tyk Test Keyless API' }),
    versionName: z.string().exactOptional().openapi({ example: 'v2' }),
  })
  .openapi({ required: [] })
  .openapi('VersionMeta')

const VersionMetasSchema = z
  .object({
    apis: z.array(VersionMetaSchema).nullable().exactOptional(),
    status: z.string().exactOptional().openapi({ example: 'success' }),
  })
  .openapi({ required: [] })
  .openapi('VersionMetas')

const XTykAPIGatewaySchema = z
  .object({
    info: InfoSchema.exactOptional(),
    middleware: MiddlewareSchema.exactOptional(),
    server: ServerSchema.exactOptional(),
    upstream: UpstreamSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('XTykAPIGateway')

const TykVendorExtensionSchema = z
  .object({ 'x-tyk-api-gateway': XTykAPIGatewaySchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('TykVendorExtension')

const AccessTypeParamsSchema = z
  .enum(['internal', 'external'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Filter for internal or external API versions',
      example: 'internal',
      in: 'query',
      name: 'accessType',
      required: false,
      schema: { enum: ['internal', 'external'], type: 'string' },
    },
  })

const AllowListParamsSchema = z
  .preprocess(
    ((read) => (val: unknown) => {
      const result = read.safeParse(val)
      return result.success ? result.data : val
    })(z.stringbool()),
    BooleanQueryParamSchema.openapi({
      param: {
        description: 'Enable allowList middleware for all endpoints',
        in: 'query',
        name: 'allowList',
        required: false,
        schema: { $ref: '#/components/schemas/BooleanQueryParam' },
      },
    }),
  )
  .exactOptional()

const AuthenticationParamsSchema = z
  .preprocess(
    ((read) => (val: unknown) => {
      const result = read.safeParse(val)
      return result.success ? result.data : val
    })(z.stringbool()),
    BooleanQueryParamSchema.openapi({
      param: {
        description:
          'Enable/disable the authentication mechanism in your Tyk Gateway for your OAS API',
        in: 'query',
        name: 'authentication',
        schema: { $ref: '#/components/schemas/BooleanQueryParam' },
        required: false,
      },
    }),
  )
  .exactOptional()

const CustomDomainParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Custom domain for the API',
      example: 'tyk.io',
      in: 'query',
      name: 'customDomain',
      required: false,
      schema: { type: 'string' },
    },
  })

const ListenPathParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Listen path for the API',
      example: '/user-test/',
      in: 'query',
      name: 'listenPath',
      required: false,
      schema: { type: 'string' },
    },
  })

const MockResponseParamsSchema = z
  .preprocess(
    ((read) => (val: unknown) => {
      const result = read.safeParse(val)
      return result.success ? result.data : val
    })(z.stringbool()),
    BooleanQueryParamSchema.openapi({
      param: {
        description:
          'Enable mockResponse middleware for all endpoints having responses configured.',
        in: 'query',
        name: 'mockResponse',
        required: false,
        schema: { $ref: '#/components/schemas/BooleanQueryParam' },
      },
    }),
  )
  .exactOptional()

const SearchTextParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Search for API version name',
      example: 'Sample oas',
      in: 'query',
      name: 'searchText',
      required: false,
      schema: { type: 'string' },
    },
  })

const UpstreamURLParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Upstream URL for the API',
      example: 'https://localhost:8080',
      in: 'query',
      name: 'upstreamURL',
      required: false,
      schema: { type: 'string' },
    },
  })

const ValidateRequestParamsSchema = z
  .preprocess(
    ((read) => (val: unknown) => {
      const result = read.safeParse(val)
      return result.success ? result.data : val
    })(z.stringbool()),
    BooleanQueryParamSchema.openapi({
      param: {
        description:
          'Enable validateRequest middleware for all endpoints having a request body with media type application/json',
        in: 'query',
        name: 'validateRequest',
        required: false,
        schema: { $ref: '#/components/schemas/BooleanQueryParam' },
      },
    }),
  )
  .exactOptional()

const CertIdListExample = {
  value: {
    certs: [
      '5e9d9544a1dcd60001d0ed20a6ab77653d5da938f452bb8cc9b55b0630a6743dabd8dc92bfb025abb09ce035',
      '5e9d9544a1dcd60001d0ed207c440d66ebb0a4629d21329808dce9091acf5f2fde328067a6e60e5347271d90',
    ],
  },
}

const CertificateBasicListExample = {
  value: {
    certs: [
      {
        dns_names: ['example.com', 'www.example.com'],
        has_private: true,
        id: '5e9d9544a1dcd60001d0ed20a6ab77653d5da938f452bb8cc9b55b0630a6743dabd8dc92bfb025abb09ce035',
        is_ca: false,
        issuer_cn: 'Issuer 1',
        not_after: '2024-01-01T00:00:00Z',
        not_before: '2023-01-01T00:00:00Z',
        subject_cn: 'Subject 1',
      },
      {
        dns_names: ['example.org', 'www.example.org'],
        has_private: false,
        id: '5e9d9544a1dcd60001d0ed207c440d66ebb0a4629d21329808dce9091acf5f2fde328067a6e60e5347271d90',
        is_ca: true,
        issuer_cn: 'Issuer 2',
        not_after: '2024-02-01T00:00:00Z',
        not_before: '2023-02-01T00:00:00Z',
        subject_cn: 'Subject 2',
      },
    ],
  },
}

const CertificateMetaExampleExample = {
  value: {
    dns_names: ['.*tyk.io'],
    fingerprint: '7c440d66ebb0a4629d21329808dce9091acf5f2fde328067a6e60e5347271d90',
    has_private: false,
    id: '5e9d9544a1dcd60001d0ed207c440d66ebb0a4629d21329808dce9091acf5f2fde328067a6e60e5347271d90',
    is_ca: false,
    issuer: {
      CommonName: 'tyk.io',
      Country: ['Peachtree'],
      ExtraNames: null,
      Locality: null,
      Names: [
        { Type: [2, 5, 4, 6], Value: 'Peachtree' },
        { Type: [2, 5, 4, 10], Value: 'tyk' },
        { Type: [2, 5, 4, 11], Value: 'tyk' },
        { Type: [2, 5, 4, 3], Value: 'tyk.io' },
        { Type: [1, 2, 840, 113549, 1, 9, 1], Value: 'support@tyk.io' },
      ],
      Organization: ['tyk'],
      OrganizationalUnit: ['tyk'],
      PostalCode: null,
      Province: null,
      SerialNumber: '',
      StreetAddress: null,
    },
    not_after: '2034-03-26T08:46:37Z',
    not_before: '2024-03-25T08:46:37Z',
    subject: {
      CommonName: 'tyk.io',
      Country: ['Peachtree'],
      ExtraNames: null,
      Locality: null,
      Names: [
        { Type: [2, 5, 4, 6], Value: 'Peachtree' },
        { Type: [2, 5, 4, 10], Value: 'tyk' },
        { Type: [2, 5, 4, 11], Value: 'tyk' },
        { Type: [2, 5, 4, 3], Value: 'tyk.io' },
        { Type: [1, 2, 840, 113549, 1, 9, 1], Value: 'support@tyk.io' },
      ],
      Organization: ['tyk'],
      OrganizationalUnit: ['tyk'],
      PostalCode: null,
      Province: null,
      SerialNumber: '',
      StreetAddress: null,
    },
  },
}

const CertificateMetaListExampleExample = {
  value: [
    {
      dns_names: ['.*tyk.io'],
      fingerprint: '7c440d66ebb0a4629d21329808dce9091acf5f2fde328067a6e60e5347271d90',
      has_private: false,
      id: '5e9d9544a1dcd60001d0ed207c440d66ebb0a4629d21329808dce9091acf5f2fde328067a6e60e5347271d90',
      is_ca: false,
      issuer: {
        CommonName: 'tyk.io',
        Country: ['Peachtree'],
        ExtraNames: null,
        Locality: null,
        Names: [
          { Type: [2, 5, 4, 6], Value: 'Peachtree' },
          { Type: [2, 5, 4, 10], Value: 'tyk' },
          { Type: [2, 5, 4, 11], Value: 'tyk' },
          { Type: [2, 5, 4, 3], Value: 'tyk.io' },
          { Type: [1, 2, 840, 113549, 1, 9, 1], Value: 'support@tyk.io' },
        ],
        Organization: ['tyk'],
        OrganizationalUnit: ['tyk'],
        PostalCode: null,
        Province: null,
        SerialNumber: '',
        StreetAddress: null,
      },
      not_after: '2034-03-26T08:46:37Z',
      not_before: '2024-03-25T08:46:37Z',
      subject: {
        CommonName: 'tyk.io',
        Country: ['Peachtree'],
        ExtraNames: null,
        Locality: null,
        Names: [
          { Type: [2, 5, 4, 6], Value: 'Peachtree' },
          { Type: [2, 5, 4, 10], Value: 'tyk' },
          { Type: [2, 5, 4, 11], Value: 'tyk' },
          { Type: [2, 5, 4, 3], Value: 'tyk.io' },
          { Type: [1, 2, 840, 113549, 1, 9, 1], Value: 'support@tyk.io' },
        ],
        Organization: ['tyk'],
        OrganizationalUnit: ['tyk'],
        PostalCode: null,
        Province: null,
        SerialNumber: '',
        StreetAddress: null,
      },
    },
  ],
}

const OasExampleExample = {
  value: {
    components: {
      securitySchemes: {
        bearerAuth: { description: 'The API Access Credentials', scheme: 'bearer', type: 'http' },
      },
    },
    info: { description: 'This is a sample OAS.', title: 'OAS Sample', version: '1.0.0' },
    openapi: '3.0.3',
    paths: {
      '/api/sample/users': {
        get: {
          operationId: 'getUsers',
          responses: {
            '200': {
              content: {
                'application/json': {
                  schema: {
                    items: { properties: { name: { type: 'string' } }, type: 'object' },
                    type: 'array',
                  },
                },
              },
              description: 'fetched users',
            },
          },
          summary: 'Get users',
          tags: ['users'],
        },
      },
    },
    security: [{ bearerAuth: [] }],
    servers: [{ url: 'https://localhost:8080' }],
    'x-tyk-api-gateway': {
      info: { name: 'user', state: { active: true } },
      server: { listenPath: { strip: true, value: '/user-test/' } },
      upstream: { url: 'https://localhost:8080' },
    },
  },
}

const OasExampleListExample = {
  value: [
    {
      components: {
        securitySchemes: {
          bearerAuth: { description: 'The API Access Credentials', scheme: 'bearer', type: 'http' },
        },
      },
      info: { description: 'This is a sample OAS.', title: 'OAS Sample', version: '1.0.0' },
      openapi: '3.0.3',
      paths: {
        '/api/sample/users': {
          get: {
            operationId: 'getUsers',
            responses: {
              '200': {
                content: {
                  'application/json': {
                    schema: {
                      items: { properties: { name: { type: 'string' } }, type: 'object' },
                      type: 'array',
                    },
                  },
                },
                description: 'fetched users',
              },
            },
            summary: 'Get users',
            tags: ['users'],
          },
        },
      },
      security: [{ bearerAuth: [] }],
      servers: [{ url: 'https://localhost:8080' }],
      'x-tyk-api-gateway': {
        info: { name: 'user', state: { active: true } },
        server: { listenPath: { strip: true, value: '/user-test/' } },
        upstream: { url: 'https://localhost:8080' },
      },
    },
  ],
}

const PaginatedTokenExampleExample = {
  value: {
    Pagination: { page_num: 1, page_size: 100, page_total: 0 },
    Tokens: [
      { code: '5a7d110be6355b0c071cc339327563cb45174ae387f52f87a80d2496', expires: 1518158407 },
      { code: '5a7d110be6355b0c071cc33988884222b0cf436eba7979c6c51d6dbd', expires: 1518158594 },
      { code: '5a7d110be6355b0c071cc33990bac8b5261041c5a7d585bff291fec4', expires: 1518158638 },
      { code: '5a7d110be6355b0c071cc339a66afe75521f49388065a106ef45af54', expires: 1518159792 },
    ],
  },
}

const PoliciesExampleExample = {
  value: [
    {
      _id: '',
      access_rights: {
        '8ddd91f3cda9453442c477b06c4e2da4': {
          allowance_scope: '',
          allowed_types: [],
          allowed_urls: [{ methods: ['GET'], url: '/users' }],
          api_id: '8ddd91f3cda9453442c477b06c4e2da4',
          api_name: 'Itachi api',
          disable_introspection: false,
          field_access_rights: [],
          limit: {
            max_query_depth: 0,
            per: 0,
            quota_max: 0,
            quota_remaining: 0,
            quota_renewal_rate: 0,
            quota_renews: 0,
            rate: 0,
            smoothing: { delay: 30, enabled: false, step: 100, threshold: 500, trigger: 0.8 },
            throttle_interval: 0,
            throttle_retry_limit: 0,
          },
          restricted_types: [],
          versions: ['Default'],
        },
      },
      active: true,
      enable_http_signature_validation: false,
      graphql_access_rights: null,
      hmac_enabled: false,
      id: '5ead7120575961000181867e',
      is_inactive: false,
      key_expires_in: 2592000,
      last_updated: '1716980105',
      max_query_depth: -1,
      meta_data: { user_type: 'mobile_user' },
      name: 'Sample policy',
      org_id: '664a14650619d40001f1f00f',
      partitions: { acl: true, complexity: false, per_api: false, quota: true, rate_limit: true },
      per: 60,
      quota_max: 10000,
      quota_renewal_rate: 3600,
      rate: 1000,
      smoothing: { delay: 30, enabled: false, step: 100, threshold: 500, trigger: 0.8 },
      tags: ['security'],
      throttle_interval: 10,
      throttle_retry_limit: 10,
    },
  ],
}

const TokenListExampleExample = {
  value: [
    { code: '5a7d110be6355b0c071cc339327563cb45174ae387f52f87a80d2496', expires: 1518158407 },
    { code: '5a7d110be6355b0c071cc33988884222b0cf436eba7979c6c51d6dbd', expires: 1518158594 },
    { code: '5a7d110be6355b0c071cc33990bac8b5261041c5a7d585bff291fec4', expires: 1518158638 },
    { code: '5a7d110be6355b0c071cc339a66afe75521f49388065a106ef45af54', expires: 1518159792 },
  ],
}

const ApiKeySecurityScheme = {
  description: 'Api key',
  in: 'header',
  name: 'X-Tyk-Authorization',
  type: 'apiKey',
}

export const getHelloRoute = createRoute({
  method: 'get',
  path: '/hello',
  tags: ['Health Checking'],
  summary: 'Check the health of the Tyk Gateway.',
  description:
    'From v2.7.5 you can now rename the `/hello`  endpoint by using the `health_check_endpoint_name` option.',
  operationId: 'hello',
  responses: {
    200: {
      description: 'Success.',
      content: {
        'application/json': {
          schema: HealthCheckResponseSchema,
          example: {
            description: 'Tyk GW',
            details: {
              redis: {
                componentType: 'datastore',
                status: 'pass',
                time: '2020-05-19T03:42:55+01:00',
              },
            },
            status: 'pass',
            version: 'v5.5.0-dev',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Attempted administrative access with invalid or missing key!',
            status: 'error',
          },
        },
      },
    },
    405: {
      description: 'Method Not Allowed',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'Method Not Allowed', status: 'error' },
        },
      },
    },
  },
})

export const getReadyRoute = createRoute({
  method: 'get',
  path: '/ready',
  tags: ['Health Checking'],
  summary: 'Check if the Tyk Gateway is ready to serve requests.',
  description:
    'The `/ready` endpoint is used for readiness checks and can be renamed using the `readiness_check_endpoint_name` configuration option.',
  operationId: 'ready',
  responses: {
    200: {
      description: 'Success.',
      content: {
        'application/json': {
          schema: HealthCheckResponseSchema,
          example: {
            description: 'Tyk GW Ready',
            details: {
              redis: {
                componentType: 'datastore',
                status: 'pass',
                time: '2020-05-19T03:42:55+01:00',
              },
            },
            status: 'pass',
            version: 'v5.5.0-dev',
          },
        },
      },
    },
    405: {
      description: 'Method Not Allowed',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'Method Not Allowed', status: 'error' },
        },
      },
    },
    503: {
      description: 'Service Unavailable',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'Redis connection not available', status: 'error' },
        },
      },
    },
  },
})

export const getTykApisRoute = createRoute({
  method: 'get',
  path: '/tyk/apis',
  tags: ['APIs'],
  summary: 'Get list of apis',
  description: 'List APIs from Tyk Gateway',
  operationId: 'listApis',
  responses: {
    200: {
      description: 'List of API definitions.',
      content: {
        'application/json': {
          schema: z.array(APIDefinitionSchema),
          example: [
            {
              api_id: 'b84fe1a04e5648927971c0557971565c',
              auth: { auth_header_name: 'authorization' },
              definition: { key: 'version', location: 'header' },
              name: 'Tyk Test API',
              org_id: '664a14650619d40001f1f00f',
              proxy: {
                listen_path: '/tyk-api-test/',
                strip_listen_path: true,
                target_url: 'https://httpbin.org',
              },
              use_oauth2: true,
              version_data: { not_versioned: true, versions: { Default: { name: 'Default' } } },
            },
          ],
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Attempted administrative access with invalid or missing key!',
            status: 'error',
          },
        },
      },
    },
  },
})

export const postTykApisRoute = createRoute({
  method: 'post',
  path: '/tyk/apis',
  tags: ['APIs'],
  summary: 'Create an API',
  description:
    'Create API. A single Tyk node can have its API Definitions queried, deleted and updated remotely. This functionality enables you to remotely update your Tyk definitions without having to manage the files manually.',
  operationId: 'createApi',
  request: {
    query: z.object({
      base_api_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The base API which the new version will be linked to.',
            example: '663a4ed9b6be920001b191ae',
            in: 'query',
            name: 'base_api_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      base_api_version_name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The version name of the base API while creating the first version. This doesn't have to be sent for the next versions but if it is set, it will override base API version name.",
            example: 'Default',
            in: 'query',
            name: 'base_api_version_name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      new_version_name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The version name of the created version.',
            example: 'v2',
            in: 'query',
            name: 'new_version_name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      set_default: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, the new version is set as default version.',
            example: true,
            in: 'query',
            name: 'set_default',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: APIDefinitionSchema,
          example: {
            api_id: 'b84fe1a04e5648927971c0557971565c',
            auth: { auth_header_name: 'authorization' },
            definition: { key: 'version', location: 'header' },
            name: 'Tyk Test API',
            org_id: '664a14650619d40001f1f00f',
            proxy: {
              listen_path: '/tyk-api-test/',
              strip_listen_path: true,
              target_url: 'https://httpbin.org',
            },
            use_oauth2: true,
            version_data: { not_versioned: true, versions: { Default: { name: 'Default' } } },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'API created.',
      content: {
        'application/json': {
          schema: ApiModifyKeySuccessSchema,
          example: { action: 'added', key: 'b84fe1a04e5648927971c0557971565c', status: 'ok' },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'Request malformed', status: 'error' },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Attempted administrative access with invalid or missing key!',
            status: 'error',
          },
        },
      },
    },
    500: {
      description: 'Internal server error.',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'file object creation failed, write error', status: 'error' },
        },
      },
    },
  },
})

export const getTykApisApiIDRoute = createRoute({
  method: 'get',
  path: '/tyk/apis/{apiID}',
  tags: ['APIs'],
  summary: "Get API definition with it's ID.",
  description: 'Get API definition from Tyk Gateway.',
  operationId: 'getApi',
  request: {
    params: z.object({
      apiID: z
        .string()
        .openapi({
          param: {
            description: 'The API ID.',
            example: 'keyless',
            in: 'path',
            name: 'apiID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'API definition.',
      content: {
        'application/json': {
          schema: APIDefinitionSchema,
          example: {
            api_id: 'b84fe1a04e5648927971c0557971565c',
            auth: { auth_header_name: 'authorization' },
            definition: { key: 'version', location: 'header' },
            name: 'Tyk Test API',
            org_id: '664a14650619d40001f1f00f',
            proxy: {
              listen_path: '/tyk-api-test/',
              strip_listen_path: true,
              target_url: 'https://httpbin.org',
            },
            use_oauth2: true,
            version_data: { not_versioned: true, versions: { Default: { name: 'Default' } } },
          },
        },
      },
      headers: z.object({
        'x-tyk-base-api-id': {
          description: 'ID of the base API if the requested API is a version.',
          style: 'simple',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'ID of the base API if the requested API is a version.',
              param: { required: false },
            }),
        },
      }),
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Attempted administrative access with invalid or missing key!',
            status: 'error',
          },
        },
      },
    },
    404: {
      description: 'API not found.',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'API not found.', status: 'error' },
        },
      },
    },
  },
})

export const putTykApisApiIDRoute = createRoute({
  method: 'put',
  path: '/tyk/apis/{apiID}',
  tags: ['APIs'],
  summary: 'Updating an API definition with its ID.',
  description:
    'Updating an API definition uses the same signature and object as a `POST`, however it will first ensure that the API ID that is being updated is the same as the one in the object being `PUT`.\n\nUpdating will completely replace the file descriptor and will not change an API Definition that has already been loaded, the hot-reload endpoint will need to be called to push the new definition to live.',
  operationId: 'updateApi',
  request: {
    params: z.object({
      apiID: z
        .string()
        .openapi({
          param: {
            description: 'The API ID.',
            example: '1bd5c61b0e694082902cf15ddcc9e6a7',
            in: 'path',
            name: 'apiID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: APIDefinitionSchema,
          example: {
            api_id: 'b84fe1a04e5648927971c0557971565c',
            auth: { auth_header_name: 'authorization' },
            definition: { key: 'version', location: 'header' },
            name: 'Update the API name sample',
            org_id: '664a14650619d40001f1f00f',
            proxy: {
              listen_path: '/update-listen-path',
              strip_listen_path: true,
              target_url: 'https://tyk.io/api',
            },
            use_oauth2: true,
            version_data: { not_versioned: true, versions: { Default: { name: 'Default' } } },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'API updated.',
      content: {
        'application/json': {
          schema: ApiModifyKeySuccessSchema,
          example: { action: 'modified', key: '1bd5c61b0e694082902cf15ddcc9e6a7', status: 'ok' },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'Request malformed', status: 'error' },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Attempted administrative access with invalid or missing key!',
            status: 'error',
          },
        },
      },
    },
    404: {
      description: 'API not found.',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'API not found', status: 'error' },
        },
      },
    },
    500: {
      description: 'Internal server error.',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'File object creation failed, write error.', status: 'error' },
        },
      },
    },
  },
})

export const deleteTykApisApiIDRoute = createRoute({
  method: 'delete',
  path: '/tyk/apis/{apiID}',
  tags: ['APIs'],
  summary: 'Deleting an API definition with ID.',
  description:
    'Deleting an API definition will remove the file from the file store, the API definition will NOT be unloaded, a separate reload request will need to be made to disable the API endpoint.',
  operationId: 'deleteApi',
  request: {
    params: z.object({
      apiID: z
        .string()
        .openapi({
          param: {
            description: 'The API ID.',
            example: '1bd5c61b0e694082902cf15ddcc9e6a7',
            in: 'path',
            name: 'apiID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'API deleted.',
      content: {
        'application/json': {
          schema: ApiModifyKeySuccessSchema,
          example: { action: 'deleted', key: '1bd5c61b0e694082902cf15ddcc9e6a7', status: 'ok' },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Attempted administrative access with invalid or missing key!',
            status: 'error',
          },
        },
      },
    },
    404: {
      description: 'API not found.',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'API not found', status: 'error' },
        },
      },
    },
    500: {
      description: 'Internal server error.',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'Delete failed', status: 'error' },
        },
      },
    },
  },
})

export const getTykApisApiIDVersionsRoute = createRoute({
  method: 'get',
  path: '/tyk/apis/{apiID}/versions',
  tags: ['APIs'],
  summary: 'Listing versions of an API.',
  description: 'Listing versions of an API.',
  operationId: 'listApiVersions',
  request: {
    params: z.object({
      apiID: z
        .string()
        .openapi({
          param: {
            description: 'The API ID.',
            example: 'keyless',
            in: 'path',
            name: 'apiID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({ searchText: SearchTextParamsSchema, accessType: AccessTypeParamsSchema }),
  },
  responses: {
    200: {
      description: 'API version metas.',
      content: {
        'application/json': {
          schema: VersionMetasSchema,
          example: {
            apis: [
              {
                expirationDate: '',
                id: 'keyless',
                internal: false,
                isDefaultVersion: false,
                name: 'Tyk Test Keyless API',
                versionName: '',
              },
              {
                expirationDate: '',
                id: '1f20d5d2731d47ac9c79fddf826eda00',
                internal: false,
                isDefaultVersion: true,
                name: 'Version three Api',
                versionName: 'v2',
              },
            ],
            status: 'success',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Attempted administrative access with invalid or missing key!',
            status: 'error',
          },
        },
      },
    },
    404: {
      description: 'API not found.',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'API not found', status: 'error' },
        },
      },
    },
  },
})

export const getTykApisOasRoute = createRoute({
  method: 'get',
  path: '/tyk/apis/oas',
  tags: ['Tyk OAS APIs'],
  summary: 'List all APIs in Tyk OAS API format.',
  description: 'List all APIs in Tyk OAS API format, from Tyk Gateway.',
  operationId: 'listApisOAS',
  request: {
    query: z.object({
      mode: z
        .literal('public')
        .exactOptional()
        .openapi({
          param: {
            description:
              'By default mode is empty which means it will return the Tyk API OAS spec including the x-tyk-api-gateway part. \n When mode=public, the Tyk OAS API spec will exclude the x-tyk-api-gateway part in the response.',
            example: 'public',
            in: 'query',
            name: 'mode',
            required: false,
            schema: { enum: ['public'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of API definitions in Tyk OAS format.',
      content: {
        'application/json': {
          schema: z.array(
            z
              .strictObject({
                openapi: z.string().regex(/^3\.0\.\d(-.+)?$/),
                info: InfoSchema,
                externalDocs: ExternalDocumentationSchema.exactOptional(),
                servers: z.array(ServerSchema).exactOptional(),
                security: z.array(SecurityRequirementSchema).exactOptional(),
                tags: z
                  .array(TagSchema)
                  .superRefine((items, ctx) => {
                    const seen = new Map()
                    for (const [i, val] of items.entries()) {
                      const key = JSON.stringify(val)
                      if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                      else seen.set(key, i)
                    }
                  })
                  .exactOptional(),
                paths: PathsSchema,
                components: ComponentsSchema.exactOptional(),
              })
              .superRefine((o, ctx) => {
                const regex = new RegExp('^x-')
                const Schema = z.any()
                for (const [k, val] of Object.entries(o)) {
                  if (!regex.test(k)) {
                    continue
                  }
                  const result = Schema.safeParse(val)
                  if (!result.success) {
                    for (const issue of result.error.issues) {
                      ctx.addIssue({ ...issue, path: [k, ...issue.path] })
                    }
                  }
                }
              })
              .openapi({
                id: 'https://spec.openapis.org/oas/3.0/schema/2021-09-28',
                $schema: 'http://json-schema.org/draft-04/schema#',
                description:
                  'The description of OpenAPI v3.0.x documents, as defined by https://spec.openapis.org/oas/v3.0.3',
                required: ['openapi', 'info', 'paths'],
              })
              .and(TykVendorExtensionSchema),
          ),
          examples: { oasExampleList: OasExampleListExample },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Attempted administrative access with invalid or missing key!',
            status: 'error',
          },
        },
      },
    },
  },
})

export const postTykApisOasRoute = createRoute({
  method: 'post',
  path: '/tyk/apis/oas',
  tags: ['Tyk OAS APIs'],
  summary: 'Create an API with Tyk OAS format.',
  description: 'Create an API with Tyk OAS API format on the Tyk Gateway.',
  operationId: 'createApiOAS',
  request: {
    query: z.object({
      base_api_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The base API which the new version will be linked to.',
            example: '663a4ed9b6be920001b191ae',
            in: 'query',
            name: 'base_api_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      base_api_version_name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The version name of the base API while creating the first version. This doesn't have to be sent for the next versions but if it is set, it will override base API version name.",
            example: 'Default',
            in: 'query',
            name: 'base_api_version_name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      new_version_name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The version name of the created version.',
            example: 'v2',
            in: 'query',
            name: 'new_version_name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      set_default: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, the new version is set as default version.',
            example: true,
            in: 'query',
            name: 'set_default',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              openapi: z.string().regex(/^3\.0\.\d(-.+)?$/),
              info: InfoSchema,
              externalDocs: ExternalDocumentationSchema.exactOptional(),
              servers: z.array(ServerSchema).exactOptional(),
              security: z.array(SecurityRequirementSchema).exactOptional(),
              tags: z
                .array(TagSchema)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                })
                .exactOptional(),
              paths: PathsSchema,
              components: ComponentsSchema.exactOptional(),
            })
            .superRefine((o, ctx) => {
              const regex = new RegExp('^x-')
              const Schema = z.any()
              for (const [k, val] of Object.entries(o)) {
                if (!regex.test(k)) {
                  continue
                }
                const result = Schema.safeParse(val)
                if (!result.success) {
                  for (const issue of result.error.issues) {
                    ctx.addIssue({ ...issue, path: [k, ...issue.path] })
                  }
                }
              }
            })
            .openapi({
              id: 'https://spec.openapis.org/oas/3.0/schema/2021-09-28',
              $schema: 'http://json-schema.org/draft-04/schema#',
              description:
                'The description of OpenAPI v3.0.x documents, as defined by https://spec.openapis.org/oas/v3.0.3',
              required: ['openapi', 'info', 'paths'],
            })
            .and(TykVendorExtensionSchema),
          example: {
            components: {
              securitySchemes: {
                bearerAuth: {
                  description: 'The API Access Credentials',
                  scheme: 'bearer',
                  type: 'http',
                },
              },
            },
            info: { description: 'This is a sample OAS.', title: 'OAS Sample', version: '1.0.0' },
            openapi: '3.0.3',
            paths: {
              '/api/sample/users': {
                get: {
                  operationId: 'getUsers',
                  responses: {
                    '200': {
                      content: {
                        'application/json': {
                          schema: {
                            items: { properties: { name: { type: 'string' } }, type: 'object' },
                            type: 'array',
                          },
                        },
                      },
                      description: 'fetched users',
                    },
                  },
                  summary: 'Get users',
                  tags: ['users'],
                },
              },
            },
            security: [{ bearerAuth: [] }],
            servers: [{ url: 'https://localhost:8080' }],
            'x-tyk-api-gateway': {
              info: { name: 'user', state: { active: true } },
              server: { listenPath: { strip: true, value: '/user-test/' } },
              upstream: { url: 'https://localhost:8080' },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'API created.',
      content: {
        'application/json': {
          schema: ApiModifyKeySuccessSchema,
          example: { action: 'added', key: 'e30bee13ad4248c3b529a4c58bb7be4e', status: 'ok' },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'the payload should contain x-tyk-api-gateway', status: 'error' },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Attempted administrative access with invalid or missing key!',
            status: 'error',
          },
        },
      },
    },
    500: {
      description: 'Internal server error.',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'file object creation failed, write error', status: 'error' },
        },
      },
    },
  },
})

export const getTykApisOasApiIDRoute = createRoute({
  method: 'get',
  path: '/tyk/apis/oas/{apiID}',
  tags: ['Tyk OAS APIs'],
  summary: 'Get a Tyk OAS API definition.',
  description: 'Get Tyk OAS API definition using an API ID.',
  operationId: 'getOASApi',
  request: {
    query: z.object({
      mode: z
        .literal('public')
        .exactOptional()
        .openapi({
          param: {
            description:
              'By default mode is empty which means it will return the Tyk API OAS spec including the x-tyk-api-gateway part. \n When mode=public, the Tyk OAS API spec will exclude the x-tyk-api-gateway part in the response.',
            example: 'public',
            in: 'query',
            name: 'mode',
            required: false,
            schema: { enum: ['public'], type: 'string' },
          },
        }),
    }),
    params: z.object({
      apiID: z
        .string()
        .openapi({
          param: {
            description: 'ID of the API you want to fetch',
            example: '4c1c0d8fc885401053ddac4e39ef676b',
            in: 'path',
            name: 'apiID',
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
          schema: z
            .strictObject({
              openapi: z.string().regex(/^3\.0\.\d(-.+)?$/),
              info: InfoSchema,
              externalDocs: ExternalDocumentationSchema.exactOptional(),
              servers: z.array(ServerSchema).exactOptional(),
              security: z.array(SecurityRequirementSchema).exactOptional(),
              tags: z
                .array(TagSchema)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                })
                .exactOptional(),
              paths: PathsSchema,
              components: ComponentsSchema.exactOptional(),
            })
            .superRefine((o, ctx) => {
              const regex = new RegExp('^x-')
              const Schema = z.any()
              for (const [k, val] of Object.entries(o)) {
                if (!regex.test(k)) {
                  continue
                }
                const result = Schema.safeParse(val)
                if (!result.success) {
                  for (const issue of result.error.issues) {
                    ctx.addIssue({ ...issue, path: [k, ...issue.path] })
                  }
                }
              }
            })
            .openapi({
              id: 'https://spec.openapis.org/oas/3.0/schema/2021-09-28',
              $schema: 'http://json-schema.org/draft-04/schema#',
              description:
                'The description of OpenAPI v3.0.x documents, as defined by https://spec.openapis.org/oas/v3.0.3',
              required: ['openapi', 'info', 'paths'],
            })
            .and(TykVendorExtensionSchema),
          examples: { oasExample: OasExampleExample },
        },
      },
      headers: z.object({
        'x-tyk-base-api-id': {
          description: 'ID of the base API if the requested API is a version.',
          style: 'simple',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'ID of the base API if the requested API is a version.',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message:
              'the requested API definition is in Tyk classic format, please use old API endpoint',
            status: 'error',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Attempted administrative access with invalid or missing key!',
            status: 'error',
          },
        },
      },
    },
    404: {
      description: 'API not found.',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'API not found', status: 'error' },
        },
      },
    },
  },
})

export const putTykApisOasApiIDRoute = createRoute({
  method: 'put',
  path: '/tyk/apis/oas/{apiID}',
  tags: ['Tyk OAS APIs'],
  summary: 'Update a Tyk OAS API definition.',
  description:
    'Updating an API definition uses the same signature an object as a `POST`, however it will first ensure that the API ID that is being updated is the same as the one in the object being `PUT`.\n\n\n      Updating will completely replace the file descriptor and will not change an API Definition that has already been loaded, the hot-reload endpoint will need to be called to push the new definition to live.',
  operationId: 'updateApiOAS',
  request: {
    params: z.object({
      apiID: z
        .string()
        .openapi({
          param: {
            description: 'ID of the API you want to fetch',
            example: '4c1c0d8fc885401053ddac4e39ef676b',
            in: 'path',
            name: 'apiID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              openapi: z.string().regex(/^3\.0\.\d(-.+)?$/),
              info: InfoSchema,
              externalDocs: ExternalDocumentationSchema.exactOptional(),
              servers: z.array(ServerSchema).exactOptional(),
              security: z.array(SecurityRequirementSchema).exactOptional(),
              tags: z
                .array(TagSchema)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                })
                .exactOptional(),
              paths: PathsSchema,
              components: ComponentsSchema.exactOptional(),
            })
            .superRefine((o, ctx) => {
              const regex = new RegExp('^x-')
              const Schema = z.any()
              for (const [k, val] of Object.entries(o)) {
                if (!regex.test(k)) {
                  continue
                }
                const result = Schema.safeParse(val)
                if (!result.success) {
                  for (const issue of result.error.issues) {
                    ctx.addIssue({ ...issue, path: [k, ...issue.path] })
                  }
                }
              }
            })
            .openapi({
              id: 'https://spec.openapis.org/oas/3.0/schema/2021-09-28',
              $schema: 'http://json-schema.org/draft-04/schema#',
              description:
                'The description of OpenAPI v3.0.x documents, as defined by https://spec.openapis.org/oas/v3.0.3',
              required: ['openapi', 'info', 'paths'],
            })
            .and(TykVendorExtensionSchema),
          example: {
            components: {
              securitySchemes: {
                bearerAuth: {
                  description: 'The API Access Credentials',
                  scheme: 'bearer',
                  type: 'http',
                },
              },
            },
            info: { description: 'This is a sample OAS.', title: 'OAS Sample', version: '1.0.0' },
            openapi: '3.0.3',
            paths: {
              '/api/sample/users': {
                get: {
                  operationId: 'getUsers',
                  responses: {
                    '200': {
                      content: {
                        'application/json': {
                          schema: {
                            items: { properties: { name: { type: 'string' } }, type: 'object' },
                            type: 'array',
                          },
                        },
                      },
                      description: 'fetched users',
                    },
                  },
                  summary: 'Get users',
                  tags: ['users'],
                },
              },
            },
            security: [{ bearerAuth: [] }],
            servers: [{ url: 'https://localhost:8080' }],
            'x-tyk-api-gateway': {
              info: { name: 'user', state: { active: true } },
              server: { listenPath: { strip: true, value: '/user-test/' } },
              upstream: { url: 'https://localhost:8080' },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'API updated',
      content: {
        'application/json': {
          schema: ApiModifyKeySuccessSchema,
          example: { action: 'modified', key: 'e30bee13ad4248c3b529a4c58bb7be4e', status: 'ok' },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message:
              'Request APIID does not match that in Definition! For Update operations these must match.',
            status: 'error',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Attempted administrative access with invalid or missing key!',
            status: 'error',
          },
        },
      },
    },
    404: {
      description: 'API not found',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'API not found', status: 'error' },
        },
      },
    },
    500: {
      description: 'Internal server error.',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'file object creation failed, write error', status: 'error' },
        },
      },
    },
  },
})

export const deleteTykApisOasApiIDRoute = createRoute({
  method: 'delete',
  path: '/tyk/apis/oas/{apiID}',
  tags: ['Tyk OAS APIs'],
  summary: 'Deleting a Tyk OAS API.',
  description:
    'Deleting an API definition will remove the file from the file store, the API definition will not be unloaded, a separate reload request will need to be made to disable the API endpoint.',
  operationId: 'deleteOASApi',
  request: {
    params: z.object({
      apiID: z
        .string()
        .openapi({
          param: {
            description: 'The API ID.',
            example: '1bd5c61b0e694082902cf15ddcc9e6a7',
            in: 'path',
            name: 'apiID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'API deleted',
      content: {
        'application/json': {
          schema: ApiModifyKeySuccessSchema,
          example: { action: 'deleted', key: '1bd5c61b0e694082902cf15ddcc9e6a7', status: 'ok' },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'Must specify an apiID to delete', status: 'error' },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Attempted administrative access with invalid or missing key!',
            status: 'error',
          },
        },
      },
    },
    404: {
      description: 'API not found.',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'API not found', status: 'error' },
        },
      },
    },
    500: {
      description: 'Internal server error.',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'Delete failed', status: 'error' },
        },
      },
    },
  },
})

export const patchTykApisOasApiIDRoute = createRoute({
  method: 'patch',
  path: '/tyk/apis/oas/{apiID}',
  tags: ['Tyk OAS APIs'],
  summary: 'Patch API in Tyk OAS format.',
  description:
    'You can use this endpoint to update Tyk OAS part of the Tyk API definition.\nThis endpoint allows you to configure Tyk OAS extension based on query params provided(similar to import).',
  operationId: 'patchApiOAS',
  request: {
    params: z.object({
      apiID: z
        .string()
        .openapi({
          param: {
            description: 'ID of the API you want to fetch.',
            example: '4c1c0d8fc885401053ddac4e39ef676b',
            in: 'path',
            name: 'apiID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      upstreamURL: UpstreamURLParamsSchema,
      listenPath: ListenPathParamsSchema,
      customDomain: CustomDomainParamsSchema,
      allowList: AllowListParamsSchema,
      validateRequest: ValidateRequestParamsSchema,
      mockResponse: MockResponseParamsSchema,
      authentication: AuthenticationParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              openapi: z.string().regex(/^3\.0\.\d(-.+)?$/),
              info: InfoSchema,
              externalDocs: ExternalDocumentationSchema.exactOptional(),
              servers: z.array(ServerSchema).exactOptional(),
              security: z.array(SecurityRequirementSchema).exactOptional(),
              tags: z
                .array(TagSchema)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                })
                .exactOptional(),
              paths: PathsSchema,
              components: ComponentsSchema.exactOptional(),
            })
            .superRefine((o, ctx) => {
              const regex = new RegExp('^x-')
              const Schema = z.any()
              for (const [k, val] of Object.entries(o)) {
                if (!regex.test(k)) {
                  continue
                }
                const result = Schema.safeParse(val)
                if (!result.success) {
                  for (const issue of result.error.issues) {
                    ctx.addIssue({ ...issue, path: [k, ...issue.path] })
                  }
                }
              }
            })
            .openapi({
              id: 'https://spec.openapis.org/oas/3.0/schema/2021-09-28',
              $schema: 'http://json-schema.org/draft-04/schema#',
              description:
                'The description of OpenAPI v3.0.x documents, as defined by https://spec.openapis.org/oas/v3.0.3',
              required: ['openapi', 'info', 'paths'],
            }),
          example: {
            components: {
              securitySchemes: {
                bearerAuth: {
                  description: 'The API Access Credentials',
                  scheme: 'bearer',
                  type: 'http',
                },
              },
            },
            info: { description: 'This is a sample OAS.', title: 'OAS Sample', version: '1.0.0' },
            openapi: '3.0.3',
            paths: {
              '/api/sample/users': {
                get: {
                  operationId: 'getUsers',
                  responses: {
                    '200': {
                      content: {
                        'application/json': {
                          schema: {
                            items: { properties: { name: { type: 'string' } }, type: 'object' },
                            type: 'array',
                          },
                        },
                      },
                      description: 'fetched users',
                    },
                  },
                  summary: 'Get users',
                  tags: ['users'],
                },
              },
            },
            security: [{ bearerAuth: [] }],
            servers: [{ url: 'https://localhost:8080' }],
            'x-tyk-api-gateway': {
              info: { name: 'user', state: { active: true } },
              server: { listenPath: { strip: true, value: '/user-test/' } },
              upstream: { url: 'https://localhost:8080' },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'API patched.',
      content: { 'application/json': { schema: ApiModifyKeySuccessSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'Must specify an apiID to patch', status: 'error' },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Attempted administrative access with invalid or missing key!',
            status: 'error',
          },
        },
      },
    },
    404: {
      description: 'API not found.',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'API not found', status: 'error' },
        },
      },
    },
    500: {
      description: 'Internal server error.',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'file object creation failed, write error', status: 'error' },
        },
      },
    },
  },
})

export const getTykApisOasApiIDExportRoute = createRoute({
  method: 'get',
  path: '/tyk/apis/oas/{apiID}/export',
  tags: ['Tyk OAS APIs'],
  summary: 'Download a Tyk OAS format API.',
  description:
    'Use the mode query parameter to specify if you want the x-tyk-api-gateway stripped out.',
  operationId: 'downloadApiOASPublic',
  request: {
    params: z.object({
      apiID: z
        .string()
        .openapi({
          param: {
            description: 'ID of the API you want to fetch.',
            example: '4c1c0d8fc885401053ddac4e39ef676b',
            in: 'path',
            name: 'apiID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      mode: z
        .literal('public')
        .exactOptional()
        .openapi({
          param: {
            description:
              'By default mode is empty which means it will return the Tyk API OAS spec including the x-tyk-api-gateway part. \n When mode=public, the Tyk OAS API spec will exclude the x-tyk-api-gateway part in the response.',
            example: 'public',
            in: 'query',
            name: 'mode',
            required: false,
            schema: { enum: ['public'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Exported API definition file',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'requesting API definition that is in Tyk classic format',
            status: 'error',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Attempted administrative access with invalid or missing key!',
            status: 'error',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'API not found', status: 'error' },
        },
      },
    },
    500: {
      description: 'Internal server error.',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'Unexpected error', status: 'error' },
        },
      },
    },
  },
})

export const getTykApisOasApiIDVersionsRoute = createRoute({
  method: 'get',
  path: '/tyk/apis/oas/{apiID}/versions',
  tags: ['Tyk OAS APIs'],
  summary: 'Listing versions of a Tyk OAS API.',
  description: 'Listing versions of a Tyk OAS API.',
  operationId: 'listOASApiVersions',
  request: {
    params: z.object({
      apiID: z
        .string()
        .openapi({
          param: {
            description: 'ID of the API you want to fetch.',
            example: '4c1c0d8fc885401053ddac4e39ef676b',
            in: 'path',
            name: 'apiID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({ searchText: SearchTextParamsSchema, accessType: AccessTypeParamsSchema }),
  },
  responses: {
    200: {
      description: 'API version metas.',
      content: {
        'application/json': {
          schema: VersionMetasSchema,
          example: {
            apis: [
              {
                expirationDate: '',
                id: 'keyless',
                internal: false,
                isDefaultVersion: false,
                name: 'Tyk Test Keyless API',
                versionName: '',
              },
              {
                expirationDate: '',
                id: '1f20d5d2731d47ac9c79fddf826eda00',
                internal: false,
                isDefaultVersion: true,
                name: 'Version three Api',
                versionName: 'v2',
              },
            ],
            status: 'success',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Attempted administrative access with invalid or missing key!',
            status: 'error',
          },
        },
      },
    },
    404: {
      description: 'API not found',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'API not found.', status: 'error' },
        },
      },
    },
  },
})

export const getTykApisOasExportRoute = createRoute({
  method: 'get',
  path: '/tyk/apis/oas/export',
  tags: ['Tyk OAS APIs'],
  summary: 'Download all Tyk OAS format APIs.',
  description: 'Download all Tyk OAS format APIs, from the Gateway.',
  operationId: 'downloadApisOASPublic',
  request: {
    query: z.object({
      mode: z
        .literal('public')
        .exactOptional()
        .openapi({
          param: {
            description:
              'By default mode is empty which means it will return the Tyk API OAS spec including the x-tyk-api-gateway part. \n When mode=public, the Tyk OAS API spec will exclude the x-tyk-api-gateway part in the response.',
            example: 'public',
            in: 'query',
            name: 'mode',
            required: false,
            schema: { enum: ['public'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get a list of Tyk OAS APIs definitions.',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Attempted administrative access with invalid or missing key!',
            status: 'error',
          },
        },
      },
    },
    500: {
      description: 'Internal server error.',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'Unexpected error', status: 'error' },
        },
      },
    },
  },
})

export const postTykApisOasImportRoute = createRoute({
  method: 'post',
  path: '/tyk/apis/oas/import',
  tags: ['Tyk OAS APIs'],
  summary: 'Import an API in Tyk OAS format.',
  description:
    'Import an Tyk OAS format API without x-tyk-gateway.\n For use with an existing Tyk OAS API that you want to expose via your Tyk Gateway.',
  operationId: 'importOAS',
  request: {
    query: z.object({
      upstreamURL: UpstreamURLParamsSchema,
      listenPath: ListenPathParamsSchema,
      customDomain: CustomDomainParamsSchema,
      allowList: AllowListParamsSchema,
      validateRequest: ValidateRequestParamsSchema,
      mockResponse: MockResponseParamsSchema,
      authentication: AuthenticationParamsSchema,
      base_api_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The base API which the new version will be linked to.',
            example: '663a4ed9b6be920001b191ae',
            in: 'query',
            name: 'base_api_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      base_api_version_name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The version name of the base API while creating the first version. This doesn't have to be sent for the next versions but if it is set, it will override base API version name.",
            example: 'Default',
            in: 'query',
            name: 'base_api_version_name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      new_version_name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The version name of the created version.',
            example: 'v2',
            in: 'query',
            name: 'new_version_name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      set_default: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, the new version is set as default version.',
            example: true,
            in: 'query',
            name: 'set_default',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              openapi: z.string().regex(/^3\.0\.\d(-.+)?$/),
              info: InfoSchema,
              externalDocs: ExternalDocumentationSchema.exactOptional(),
              servers: z.array(ServerSchema).exactOptional(),
              security: z.array(SecurityRequirementSchema).exactOptional(),
              tags: z
                .array(TagSchema)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                })
                .exactOptional(),
              paths: PathsSchema,
              components: ComponentsSchema.exactOptional(),
            })
            .superRefine((o, ctx) => {
              const regex = new RegExp('^x-')
              const Schema = z.any()
              for (const [k, val] of Object.entries(o)) {
                if (!regex.test(k)) {
                  continue
                }
                const result = Schema.safeParse(val)
                if (!result.success) {
                  for (const issue of result.error.issues) {
                    ctx.addIssue({ ...issue, path: [k, ...issue.path] })
                  }
                }
              }
            })
            .openapi({
              id: 'https://spec.openapis.org/oas/3.0/schema/2021-09-28',
              $schema: 'http://json-schema.org/draft-04/schema#',
              description:
                'The description of OpenAPI v3.0.x documents, as defined by https://spec.openapis.org/oas/v3.0.3',
              required: ['openapi', 'info', 'paths'],
            }),
          example: {
            components: {
              securitySchemes: {
                bearerAuth: {
                  description: 'The API Access Credentials',
                  scheme: 'bearer',
                  type: 'http',
                },
              },
            },
            info: { description: 'This is a sample OAS.', title: 'OAS Sample', version: '1.0.0' },
            openapi: '3.0.3',
            paths: {
              '/api/sample/users': {
                get: {
                  operationId: 'getUsers',
                  responses: {
                    '200': {
                      content: {
                        'application/json': {
                          schema: {
                            items: { properties: { name: { type: 'string' } }, type: 'object' },
                            type: 'array',
                          },
                        },
                      },
                      description: 'fetched users',
                    },
                  },
                  summary: 'Get users',
                  tags: ['users'],
                },
              },
            },
            security: [{ bearerAuth: [] }],
            servers: [{ url: 'https://localhost:8080' }],
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'API imported.',
      content: {
        'application/json': {
          schema: ApiModifyKeySuccessSchema,
          example: { action: 'added', key: 'e30bee13ad4248c3b529a4c58bb7be4e', status: 'ok' },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'the import payload should not contain x-tyk-api-gateway',
            status: 'error',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Attempted administrative access with invalid or missing key!',
            status: 'error',
          },
        },
      },
    },
    500: {
      description: 'Internal server error.',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'file object creation failed, write error', status: 'error' },
        },
      },
    },
  },
})

export const getTykMcpsRoute = createRoute({
  method: 'get',
  path: '/tyk/mcps',
  tags: ['MCP Proxies'],
  summary: 'List MCP Proxy definitions.',
  description:
    'List all MCP Proxy definitions on this Tyk Gateway. Each entry is a Tyk OAS document whose Tyk Vendor Extension extension marks it as an MCP Proxy definition.',
  operationId: 'listMCPs',
  responses: {
    200: {
      description: 'List of MCP Proxy definitions.',
      content: {
        'application/json': {
          schema: z.array(
            z
              .strictObject({
                openapi: z.string().regex(/^3\.0\.\d(-.+)?$/),
                info: InfoSchema,
                externalDocs: ExternalDocumentationSchema.exactOptional(),
                servers: z.array(ServerSchema).exactOptional(),
                security: z.array(SecurityRequirementSchema).exactOptional(),
                tags: z
                  .array(TagSchema)
                  .superRefine((items, ctx) => {
                    const seen = new Map()
                    for (const [i, val] of items.entries()) {
                      const key = JSON.stringify(val)
                      if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                      else seen.set(key, i)
                    }
                  })
                  .exactOptional(),
                paths: PathsSchema,
                components: ComponentsSchema.exactOptional(),
              })
              .superRefine((o, ctx) => {
                const regex = new RegExp('^x-')
                const Schema = z.any()
                for (const [k, val] of Object.entries(o)) {
                  if (!regex.test(k)) {
                    continue
                  }
                  const result = Schema.safeParse(val)
                  if (!result.success) {
                    for (const issue of result.error.issues) {
                      ctx.addIssue({ ...issue, path: [k, ...issue.path] })
                    }
                  }
                }
              })
              .openapi({
                id: 'https://spec.openapis.org/oas/3.0/schema/2021-09-28',
                $schema: 'http://json-schema.org/draft-04/schema#',
                description:
                  'The description of OpenAPI v3.0.x documents, as defined by https://spec.openapis.org/oas/v3.0.3',
                required: ['openapi', 'info', 'paths'],
              })
              .and(TykVendorExtensionSchema),
          ),
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ApiStatusMessageSchema } },
    },
  },
})

export const postTykMcpsRoute = createRoute({
  method: 'post',
  path: '/tyk/mcps',
  tags: ['MCP Proxies'],
  summary: 'Create an MCP Proxy definition.',
  description:
    'Create an MCP Proxy definition from a Tyk OAS document. The payload must\ncontain the Tyk Vendor Extension (`x-tyk-api-gateway`) extension with MCP configuration and is\nvalidated against the MCP JSON schema (`/tyk/schema?type=mcp`) before being\nstored. The Gateway must be reloaded (`POST /tyk/reload`) for the new MCP\nProxy definition to take effect.\n\nWhen `dryRun=true`, the definition is validated and returned without being\npersisted, written to disk, versioned, or reloaded. When `expand=true` is\nalso supplied for an internal REST-as-MCP proxy target such as\n`tyk://orders-rest/mcp`, the response includes the full derived\n`x-tyk-mcp-server.primitives` catalogue with selected tools marked\n`allow: true` and unselected tools marked `allow: false`. `expand=true`\nhas no effect for remote MCP proxy upstreams.\n',
  operationId: 'createMCP',
  request: {
    query: z.object({
      dryRun: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description: 'Validate and render the MCP Proxy definition without persisting it.',
            in: 'query',
            name: 'dryRun',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
      expand: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Expand an internal REST-as-MCP proxy response with the full configurable tool catalogue.',
            in: 'query',
            name: 'expand',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              openapi: z.string().regex(/^3\.0\.\d(-.+)?$/),
              info: InfoSchema,
              externalDocs: ExternalDocumentationSchema.exactOptional(),
              servers: z.array(ServerSchema).exactOptional(),
              security: z.array(SecurityRequirementSchema).exactOptional(),
              tags: z
                .array(TagSchema)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                })
                .exactOptional(),
              paths: PathsSchema,
              components: ComponentsSchema.exactOptional(),
            })
            .superRefine((o, ctx) => {
              const regex = new RegExp('^x-')
              const Schema = z.any()
              for (const [k, val] of Object.entries(o)) {
                if (!regex.test(k)) {
                  continue
                }
                const result = Schema.safeParse(val)
                if (!result.success) {
                  for (const issue of result.error.issues) {
                    ctx.addIssue({ ...issue, path: [k, ...issue.path] })
                  }
                }
              }
            })
            .openapi({
              id: 'https://spec.openapis.org/oas/3.0/schema/2021-09-28',
              $schema: 'http://json-schema.org/draft-04/schema#',
              description:
                'The description of OpenAPI v3.0.x documents, as defined by https://spec.openapis.org/oas/v3.0.3',
              required: ['openapi', 'info', 'paths'],
            })
            .and(TykVendorExtensionSchema),
          example: {
            openapi: '3.0.3',
            info: { title: 'MCP Proxy Sample', version: '1.0.0' },
            paths: {},
            components: {},
            servers: [{ url: '/mcp-sample/' }],
            'x-tyk-api-gateway': {
              info: { name: 'mcp-sample', state: { active: true } },
              server: {
                listenPath: { strip: true, value: '/mcp-sample/' },
                authentication: {
                  enabled: true,
                  securitySchemes: { authToken: { enabled: true } },
                },
              },
              upstream: { url: 'http://localhost:7878/mcp' },
              middleware: {
                global: { contextVariables: { enabled: true }, trafficLogs: { enabled: true } },
                mcpTools: {},
                operations: {},
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'MCP Proxy definition created, or validated dry-run OAS returned.',
      content: {
        'application/json': {
          schema: z.xor([
            ApiModifyKeySuccessSchema,
            z
              .strictObject({
                openapi: z.string().regex(/^3\.0\.\d(-.+)?$/),
                info: InfoSchema,
                externalDocs: ExternalDocumentationSchema.exactOptional(),
                servers: z.array(ServerSchema).exactOptional(),
                security: z.array(SecurityRequirementSchema).exactOptional(),
                tags: z
                  .array(TagSchema)
                  .superRefine((items, ctx) => {
                    const seen = new Map()
                    for (const [i, val] of items.entries()) {
                      const key = JSON.stringify(val)
                      if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                      else seen.set(key, i)
                    }
                  })
                  .exactOptional(),
                paths: PathsSchema,
                components: ComponentsSchema.exactOptional(),
              })
              .superRefine((o, ctx) => {
                const regex = new RegExp('^x-')
                const Schema = z.any()
                for (const [k, val] of Object.entries(o)) {
                  if (!regex.test(k)) {
                    continue
                  }
                  const result = Schema.safeParse(val)
                  if (!result.success) {
                    for (const issue of result.error.issues) {
                      ctx.addIssue({ ...issue, path: [k, ...issue.path] })
                    }
                  }
                }
              })
              .openapi({
                id: 'https://spec.openapis.org/oas/3.0/schema/2021-09-28',
                $schema: 'http://json-schema.org/draft-04/schema#',
                description:
                  'The description of OpenAPI v3.0.x documents, as defined by https://spec.openapis.org/oas/v3.0.3',
                required: ['openapi', 'info', 'paths'],
              })
              .and(TykVendorExtensionSchema),
          ]),
          example: { action: 'added', key: 'e30bee13ad4248c3b529a4c58bb7be4e', status: 'ok' },
        },
      },
    },
    400: {
      description:
        'Validation failed (invalid OAS, missing `x-tyk-api-gateway`, or schema violation).',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'the payload should contain x-tyk-api-gateway', status: 'error' },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ApiStatusMessageSchema } },
    },
  },
})

export const getTykMcpsApiIDRoute = createRoute({
  method: 'get',
  path: '/tyk/mcps/{apiID}',
  tags: ['MCP Proxies'],
  summary: 'Get an MCP Proxy definition.',
  description:
    'Retrieve a single MCP Proxy definition by its ID. When `expand=true` is supplied for an internal REST-as-MCP proxy target, the response includes the full derived `x-tyk-mcp-server.primitives` catalogue with selected and unselected tools marked by `allow`. Normal reads return the stored definition exactly. `expand=true` has no effect for remote MCP proxy upstreams.',
  operationId: 'getMCP',
  request: {
    params: z.object({
      apiID: z
        .string()
        .openapi({
          param: {
            description: 'The MCP Proxy definition ID.',
            in: 'path',
            name: 'apiID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      expand: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Expand an internal REST-as-MCP proxy response with the full configurable tool catalogue.',
            in: 'query',
            name: 'expand',
            required: false,
            schema: { default: false, type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The MCP Proxy definition.',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              openapi: z.string().regex(/^3\.0\.\d(-.+)?$/),
              info: InfoSchema,
              externalDocs: ExternalDocumentationSchema.exactOptional(),
              servers: z.array(ServerSchema).exactOptional(),
              security: z.array(SecurityRequirementSchema).exactOptional(),
              tags: z
                .array(TagSchema)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                })
                .exactOptional(),
              paths: PathsSchema,
              components: ComponentsSchema.exactOptional(),
            })
            .superRefine((o, ctx) => {
              const regex = new RegExp('^x-')
              const Schema = z.any()
              for (const [k, val] of Object.entries(o)) {
                if (!regex.test(k)) {
                  continue
                }
                const result = Schema.safeParse(val)
                if (!result.success) {
                  for (const issue of result.error.issues) {
                    ctx.addIssue({ ...issue, path: [k, ...issue.path] })
                  }
                }
              }
            })
            .openapi({
              id: 'https://spec.openapis.org/oas/3.0/schema/2021-09-28',
              $schema: 'http://json-schema.org/draft-04/schema#',
              description:
                'The description of OpenAPI v3.0.x documents, as defined by https://spec.openapis.org/oas/v3.0.3',
              required: ['openapi', 'info', 'paths'],
            })
            .and(TykVendorExtensionSchema),
        },
      },
    },
    404: {
      description: 'MCP Proxy definition not found.',
      content: { 'application/json': { schema: ApiStatusMessageSchema } },
    },
  },
})

export const putTykMcpsApiIDRoute = createRoute({
  method: 'put',
  path: '/tyk/mcps/{apiID}',
  tags: ['MCP Proxies'],
  summary: 'Update an MCP Proxy definition.',
  description:
    'Update an existing MCP Proxy definition. Body is validated against the MCP JSON schema. A Gateway reload is required for changes to take effect.',
  operationId: 'updateMCP',
  request: {
    params: z.object({
      apiID: z
        .string()
        .openapi({
          param: {
            description: 'The MCP Proxy definition ID.',
            in: 'path',
            name: 'apiID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              openapi: z.string().regex(/^3\.0\.\d(-.+)?$/),
              info: InfoSchema,
              externalDocs: ExternalDocumentationSchema.exactOptional(),
              servers: z.array(ServerSchema).exactOptional(),
              security: z.array(SecurityRequirementSchema).exactOptional(),
              tags: z
                .array(TagSchema)
                .superRefine((items, ctx) => {
                  const seen = new Map()
                  for (const [i, val] of items.entries()) {
                    const key = JSON.stringify(val)
                    if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                    else seen.set(key, i)
                  }
                })
                .exactOptional(),
              paths: PathsSchema,
              components: ComponentsSchema.exactOptional(),
            })
            .superRefine((o, ctx) => {
              const regex = new RegExp('^x-')
              const Schema = z.any()
              for (const [k, val] of Object.entries(o)) {
                if (!regex.test(k)) {
                  continue
                }
                const result = Schema.safeParse(val)
                if (!result.success) {
                  for (const issue of result.error.issues) {
                    ctx.addIssue({ ...issue, path: [k, ...issue.path] })
                  }
                }
              }
            })
            .openapi({
              id: 'https://spec.openapis.org/oas/3.0/schema/2021-09-28',
              $schema: 'http://json-schema.org/draft-04/schema#',
              description:
                'The description of OpenAPI v3.0.x documents, as defined by https://spec.openapis.org/oas/v3.0.3',
              required: ['openapi', 'info', 'paths'],
            })
            .and(TykVendorExtensionSchema),
          example: {
            openapi: '3.0.3',
            info: { title: 'MCP Proxy Sample', version: '1.0.0' },
            paths: {},
            components: {},
            servers: [{ url: '/mcp-sample/' }],
            'x-tyk-api-gateway': {
              info: { name: 'mcp-sample', state: { active: true } },
              server: {
                listenPath: { strip: true, value: '/mcp-sample/' },
                authentication: {
                  enabled: true,
                  securitySchemes: { authToken: { enabled: true } },
                },
              },
              upstream: { url: 'http://localhost:7878/mcp' },
              middleware: {
                global: { contextVariables: { enabled: true }, trafficLogs: { enabled: true } },
                mcpTools: {},
                operations: {},
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'MCP Proxy definition updated.',
      content: {
        'application/json': {
          schema: ApiModifyKeySuccessSchema,
          example: { action: 'modified', key: 'e30bee13ad4248c3b529a4c58bb7be4e', status: 'ok' },
        },
      },
    },
    400: {
      description: 'Validation failed.',
      content: { 'application/json': { schema: ApiStatusMessageSchema } },
    },
    404: {
      description: 'MCP Proxy definition not found.',
      content: { 'application/json': { schema: ApiStatusMessageSchema } },
    },
  },
})

export const deleteTykMcpsApiIDRoute = createRoute({
  method: 'delete',
  path: '/tyk/mcps/{apiID}',
  tags: ['MCP Proxies'],
  summary: 'Delete an MCP Proxy definition.',
  description:
    'Delete an MCP Proxy definition. A Gateway reload is required to unload the proxy from the running Gateway.',
  operationId: 'deleteMCP',
  request: {
    params: z.object({
      apiID: z
        .string()
        .openapi({
          param: {
            description: 'The MCP Proxy definition ID.',
            in: 'path',
            name: 'apiID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'MCP Proxy definition deleted.',
      content: {
        'application/json': {
          schema: ApiModifyKeySuccessSchema,
          example: { action: 'deleted', key: 'e30bee13ad4248c3b529a4c58bb7be4e', status: 'ok' },
        },
      },
    },
    404: {
      description: 'MCP Proxy definition not found.',
      content: { 'application/json': { schema: ApiStatusMessageSchema } },
    },
    500: {
      description: 'Delete failed.',
      content: { 'application/json': { schema: ApiStatusMessageSchema } },
    },
  },
})

export const deleteTykCacheApiIDRoute = createRoute({
  method: 'delete',
  path: '/tyk/cache/{apiID}',
  tags: ['Cache Invalidation'],
  summary: 'Invalidate cache.',
  description: 'Invalidate cache for the given API.',
  operationId: 'invalidateCache',
  request: {
    params: z.object({
      apiID: z
        .string()
        .openapi({
          param: {
            description: 'The API ID.',
            example: 'ae67bb862a3241a49117508e0f9ee839',
            in: 'path',
            name: 'apiID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Cache invalidated.',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'cache invalidated', status: 'ok' },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Attempted administrative access with invalid or missing key!',
            status: 'error',
          },
        },
      },
    },
    500: {
      description: 'Internal server error.',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'Cache invalidation failed.', status: 'error' },
        },
      },
    },
  },
})

export const deleteTykCacheJwksApiIDRoute = createRoute({
  method: 'delete',
  path: '/tyk/cache/jwks/{apiID}',
  tags: ['JWK cache invalidation'],
  summary: 'Invalidate cache for given API ID.',
  description: 'Invalidate JWK cache for the given API.',
  operationId: 'invalidateJWKCache',
  request: {
    params: z.object({
      apiID: z
        .string()
        .openapi({
          param: {
            description: 'The API ID.',
            example: 'ae67bb862a3241a49117508e0f9ee839',
            in: 'path',
            name: 'apiID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Cache invalidated.',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'cache invalidated', status: 'ok' },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Attempted administrative access with invalid or missing key!',
            status: 'error',
          },
        },
      },
    },
  },
})

export const deleteTykCacheJwksRoute = createRoute({
  method: 'delete',
  path: '/tyk/cache/jwks',
  tags: ['JWK cache invalidation'],
  summary: 'Invalidate JWK cache for all APIs',
  description: 'Invalidate JWK cache for all APIs.',
  operationId: 'invalidateJWKCacheForAllAPIs',
  responses: {
    200: {
      description: 'Cache invalidated.',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'cache invalidated', status: 'ok' },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Attempted administrative access with invalid or missing key!',
            status: 'error',
          },
        },
      },
    },
  },
})

export const getTykCertsRoute = createRoute({
  method: 'get',
  path: '/tyk/certs',
  tags: ['Certs'],
  summary: 'List certificates.',
  description: 'List all certificates in the Tyk Gateway.',
  operationId: 'listCerts',
  request: {
    query: z.object({
      org_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Organisation ID to list the certificates.',
            example: '5e9d9544a1dcd60001d0ed20',
            in: 'query',
            name: 'org_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      mode: z
        .literal('detailed')
        .exactOptional()
        .openapi({
          param: {
            description: 'Mode to list the certificate details.',
            example: 'detailed',
            in: 'query',
            name: 'mode',
            required: false,
            schema: { enum: ['detailed'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.xor([APIAllCertificateBasicsSchema, APIAllCertificatesSchema]),
          examples: {
            certIdList: CertIdListExample,
            certificateBasicList: CertificateBasicListExample,
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Attempted administrative access with invalid or missing key!',
            status: 'error',
          },
        },
      },
    },
  },
})

export const postTykCertsRoute = createRoute({
  method: 'post',
  path: '/tyk/certs',
  tags: ['Certs'],
  summary: 'Add a certificate.',
  description: 'Add a certificate to the Tyk Gateway.',
  operationId: 'addCert',
  request: {
    query: z.object({
      org_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Organisation ID to add the certificate to.',
            example: '5e9d9544a1dcd60001d0ed20',
            in: 'query',
            name: 'org_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'text/plain': { schema: z.string() } } },
  },
  responses: {
    200: {
      description: 'New certificate added.',
      content: {
        'application/json': {
          schema: APICertificateStatusMessageSchema,
          example: {
            id: '5e9d9544a1dcd60001d0ed207c440d66ebb0a4629d21329808dce9091acf5f2fde328067a6e60e5347271d90',
            message: 'Certificate added',
            status: 'ok',
          },
        },
      },
    },
    403: {
      description: 'When certificates you send already exist in the gateway.',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'Certificate with  ID already exists.', status: 'error' },
        },
      },
    },
    405: {
      description: 'Malformed request body.',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'Malformed request body', status: 'error' },
        },
      },
    },
  },
})

export const getTykCertsCertIDRoute = createRoute({
  method: 'get',
  path: '/tyk/certs/{certID}',
  tags: ['Certs'],
  summary:
    'Return one certificate or list multiple certificates in the Tyk Gateway given a comma separated list of cert IDs.',
  description:
    'Note that the certID path parameter can take a list of certIDs separated with commas (e.g /tyk/certs/certIDOne,certIDTwo).\n If you send a single certID it will return a single CertificateMeta object otherwise if you send more than two certIDs is will return an array of certificateMeta objects.',
  operationId: 'listCertsWithIDs',
  request: {
    params: z.object({
      certID: z
        .string()
        .openapi({
          param: {
            description: 'Comma separated list of certificates to list.',
            example:
              'e6ce2b49-3e31-44de-95a7-12f054724283,5e9d9544a1dcd60001d0ed20a6ab77653d5da938f452bb8cc9b55b0630a6743dabd8dc92bfb025abb09ce035',
            in: 'path',
            name: 'certID',
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
          schema: z.xor([
            CertsCertificateMetaSchema,
            z.array(CertsCertificateMetaSchema).nullable(),
          ]),
          examples: {
            certificateMetaExample: CertificateMetaExampleExample,
            certificateMetaListExample: CertificateMetaListExampleExample,
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Attempted administrative access with invalid or missing key!',
            status: 'error',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Certificate with given SHA256 fingerprint not found.',
            status: 'error',
          },
        },
      },
    },
  },
})

export const deleteTykCertsCertIDRoute = createRoute({
  method: 'delete',
  path: '/tyk/certs/{certID}',
  tags: ['Certs'],
  summary: 'Delete certificate.',
  description: 'Delete certificate by ID.',
  operationId: 'deleteCerts',
  request: {
    params: z.object({
      certID: z
        .string()
        .openapi({
          param: {
            description: 'Certificate ID to be deleted.',
            example:
              '5e9d9544a1dcd60001d0ed20a6ab77653d5da938f452bb8cc9b55b0630a6743dabd8dc92bfb025abb09ce035',
            in: 'path',
            name: 'certID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      org_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Organisation ID to delete the certificates from.',
            example: '5e9d9544a1dcd60001d0ed20',
            in: 'query',
            name: 'org_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Deleted certificate.',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'removed', status: 'ok' },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Attempted administrative access with invalid or missing key!',
            status: 'error',
          },
        },
      },
    },
  },
})

export const postTykDebugRoute = createRoute({
  method: 'post',
  path: '/tyk/debug',
  tags: ['Debug'],
  summary: 'Test a Tyk Classic or Tyk OAS API definition.',
  description:
    'Used to test API definition by sending sample request and analysing output of both response and logs.',
  operationId: 'debugApiDefinition',
  request: {
    body: {
      content: {
        'application/json': {
          schema: TraceRequestSchema,
          examples: {
            apiDefinition: {
              summary: 'Calling debug endpoint with classic API definition.',
              value: {
                request: { method: 'GET', path: '/update-listen-path' },
                spec: {
                  api_id: 'b84fe1a04e5648927971c0557971565c',
                  auth: { auth_header_name: 'authorization' },
                  definition: { key: 'version', location: 'header' },
                  name: 'Tyk Test API',
                  org_id: '664a14650619d40001f1f00f',
                  proxy: {
                    listen_path: '/tyk-api-test/',
                    strip_listen_path: true,
                    target_url: 'https://httpbin.org',
                  },
                  use_oauth2: true,
                  version_data: { not_versioned: true, versions: { Default: { name: 'Default' } } },
                },
              },
            },
            oasApiDefinition: {
              summary: 'Calling debug endpoint with Tyk OAS API definition.',
              value: {
                request: { method: 'GET', path: '/get' },
                oas: {
                  info: { title: 'testdebug', version: '1.0.0' },
                  openapi: '3.0.3',
                  servers: [{ url: 'http://localhost:8181/testdebug/' }],
                  security: [],
                  paths: {},
                  components: { securitySchemes: {} },
                  'x-tyk-api-gateway': {
                    info: {
                      dbId: '67a25ff65b60081c8731464f',
                      id: 'd37ea0e360c245cf406d640f1dbf788d',
                      orgId: '645b3db586341f751f4258aa',
                      name: 'testdebug',
                      state: { active: true, internal: false },
                    },
                    middleware: {
                      global: {
                        contextVariables: { enabled: true },
                        trafficLogs: { enabled: true },
                      },
                    },
                    server: { listenPath: { strip: true, value: '/testdebug/' } },
                    upstream: { url: 'http://httpbin.org/' },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Success tracing request.',
      content: {
        'application/json': {
          schema: TraceResponseSchema,
          example: {
            logs: '{"level":"warning","msg":"Legacy path detected! Upgrade to extended....',
            message: 'ok',
            response:
              '====== Request ======\nGET / HTTP/1.1\r\nHost: httpbin.org\r\n\r\n\n====== Response...',
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'Request malformed', status: 'error' },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Attempted administrative access with invalid or missing key!',
            status: 'error',
          },
        },
      },
    },
    500: {
      description: 'Internal server error.',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'Unexpected failure:', status: 'error' },
        },
      },
    },
  },
})

export const getTykKeysRoute = createRoute({
  method: 'get',
  path: '/tyk/keys',
  tags: ['Keys'],
  summary: 'List keys.',
  description: 'List all the API keys.',
  operationId: 'listKeys',
  responses: {
    200: {
      description: 'List of all API keys.',
      content: { 'application/json': { schema: ApiAllKeysSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ApiStatusMessageSchema } },
    },
    404: {
      description: 'Disabled hashed key listing.',
      content: { 'application/json': { schema: ApiStatusMessageSchema } },
    },
  },
})

export const postTykKeysRoute = createRoute({
  method: 'post',
  path: '/tyk/keys',
  tags: ['Keys'],
  summary: 'Create a key.',
  description:
    'Tyk will generate the access token based on the OrgID specified in the API Definition and a random UUID. This ensures that keys can be owned by different API Owners should segmentation be needed at an organisational level.\n <br/><br/>\n  API keys without access_rights data will be written to all APIs on the system (this also means that they will be created across all SessionHandlers and StorageHandlers, it is recommended to always embed access_rights data in a key to ensure that only targeted APIs and their back-ends are written to.',
  operationId: 'addKey',
  request: {
    query: z.object({
      hashed: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When set to true the key_hash returned will be similar to the un-hashed key name.',
            example: true,
            in: 'query',
            name: 'hashed',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: SessionStateSchema,
          example: {
            access_rights: {
              'itachi-api': {
                allowed_urls: [{ methods: ['GET'], url: '/users' }],
                api_id: '8ddd91f3cda9453442c477b06c4e2da4',
                api_name: 'Itachi api',
                limit: {
                  per: 60,
                  quota_max: 10000,
                  quota_remaining: 10000,
                  quota_renewal_rate: 3600,
                  rate: 1000,
                  throttle_interval: 10,
                  throttle_retry_limit: 10,
                },
                versions: ['Default'],
              },
            },
            alias: 'portal-key',
            allowance: 1000,
            apply_policies: ['5ead7120575961000181867e'],
            date_created: '2024-08-09T14:40:34.87614+03:00',
            enable_detailed_recording: true,
            last_updated: '1723203634',
            meta_data: {
              'new-update-key-sample': 'update-key-sample',
              tyk_developer_id: '62b3fb9a1d5e4f00017226f5',
              update: 'sample policy update',
              user_type: 'mobile_user',
            },
            org_id: '5e9d9544a1dcd60001d0ed20',
            per: 60,
            quota_max: 10000,
            quota_renewal_rate: 3600,
            quota_renews: 1723207234,
            rate: 1000,
            tags: ['security', 'edge', 'edge-eu'],
            throttle_interval: 10,
            throttle_retry_limit: 10,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'New key added.',
      content: {
        'application/json': {
          schema: ApiModifyKeySuccessSchema,
          example: {
            action: 'added',
            key: '5e9d9544a1dcd60001d0ed20a2290376f89846b798b7e5197584ef6d',
            status: 'ok',
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'Request malformed', status: 'error' },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Attempted administrative access with invalid or missing key!',
            status: 'error',
          },
        },
      },
    },
    500: {
      description: 'Internal server error.',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Failed to create key, ensure security settings are correct.',
            status: 'error',
          },
        },
      },
    },
  },
})

export const getTykKeysKeyIDRoute = createRoute({
  method: 'get',
  path: '/tyk/keys/{keyID}',
  tags: ['Keys'],
  summary: 'Get a key with ID.',
  description:
    'Get session info about the specified key. Should return up to date rate limit and quota usage numbers.',
  operationId: 'getKey',
  request: {
    query: z.object({
      hashed: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use the hash of the key as input instead of the full key.',
            example: true,
            in: 'query',
            name: 'hashed',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    params: z.object({
      keyID: z
        .string()
        .openapi({
          param: {
            description: 'The key ID.',
            example: '5e9d9544a1dcd60001d0ed20e7f75f9e03534825b7aef9df749582e5',
            in: 'path',
            name: 'keyID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Key fetched.',
      content: {
        'application/json': {
          schema: SessionStateSchema,
          example: {
            access_rights: {
              'itachi-api': {
                allowed_urls: [{ methods: ['GET'], url: '/users' }],
                api_id: '8ddd91f3cda9453442c477b06c4e2da4',
                api_name: 'Itachi api',
                limit: {
                  per: 60,
                  quota_max: 10000,
                  quota_remaining: 10000,
                  quota_renewal_rate: 3600,
                  rate: 1000,
                  throttle_interval: 10,
                  throttle_retry_limit: 10,
                },
                versions: ['Default'],
              },
            },
            alias: 'portal-key',
            allowance: 1000,
            apply_policies: ['5ead7120575961000181867e'],
            date_created: '2024-08-09T14:40:34.87614+03:00',
            enable_detailed_recording: true,
            last_updated: '1723203634',
            meta_data: {
              'new-update-key-sample': 'update-key-sample',
              tyk_developer_id: '62b3fb9a1d5e4f00017226f5',
              update: 'sample policy update',
              user_type: 'mobile_user',
            },
            org_id: '5e9d9544a1dcd60001d0ed20',
            per: 60,
            quota_max: 10000,
            quota_renewal_rate: 3600,
            quota_renews: 1723207234,
            rate: 1000,
            tags: ['security', 'edge', 'edge-eu'],
            throttle_interval: 10,
            throttle_retry_limit: 10,
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Key requested by hash but key hashing is not enabled.',
            status: 'error',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Attempted administrative access with invalid or missing key!',
            status: 'error',
          },
        },
      },
    },
    404: {
      description: 'Key not found.',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'Key not found', status: 'error' },
        },
      },
    },
  },
})

export const putTykKeysKeyIDRoute = createRoute({
  method: 'put',
  path: '/tyk/keys/{keyID}',
  tags: ['Keys'],
  summary: 'Update key.',
  description:
    ' You can also manually add keys to Tyk using your own key-generation algorithm. It is recommended that when using this approach to ensure that the OrgID being used in the API Definition and the key data is blank so that Tyk does not try to prepend or manage the key in any way.',
  operationId: 'updateKey',
  request: {
    query: z.object({
      suppress_reset: z
        .literal('1')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Adding the suppress_reset parameter and setting it to 1 will cause Tyk not to reset the quota limit that is in the current live quota manager. By default Tyk will reset the quota in the live quota manager (initialising it) when adding a key. Adding the `suppress_reset` flag to the URL parameters will avoid this behaviour.',
            example: '1',
            in: 'query',
            name: 'suppress_reset',
            required: false,
            schema: { enum: ['1'], type: 'string' },
          },
        }),
      hashed: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When set to true the key_hash returned will be similar to the un-hashed key name.',
            example: true,
            in: 'query',
            name: 'hashed',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    params: z.object({
      keyID: z
        .string()
        .openapi({
          param: {
            description: 'ID of the key you want to update.',
            example: '5e9d9544a1dcd60001d0ed20766d9a6ec6b4403b93a554feefef4708',
            in: 'path',
            name: 'keyID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: SessionStateSchema,
          example: {
            access_rights: {
              'itachi-api': {
                allowed_urls: [{ methods: ['GET'], url: '/users' }],
                api_id: '8ddd91f3cda9453442c477b06c4e2da4',
                api_name: 'Itachi api',
                limit: {
                  per: 60,
                  quota_max: 10000,
                  quota_remaining: 10000,
                  quota_renewal_rate: 3600,
                  rate: 1000,
                  throttle_interval: 10,
                  throttle_retry_limit: 10,
                },
                versions: ['Default'],
              },
            },
            alias: 'portal-key',
            allowance: 1000,
            apply_policies: ['5ead7120575961000181867e'],
            date_created: '2024-08-09T14:40:34.87614+03:00',
            enable_detailed_recording: true,
            last_updated: '1723203634',
            meta_data: {
              'new-update-key-sample': 'update-key-sample',
              tyk_developer_id: '62b3fb9a1d5e4f00017226f5',
              update: 'sample policy update',
              user_type: 'mobile_user',
            },
            org_id: '5e9d9544a1dcd60001d0ed20',
            per: 60,
            quota_max: 10000,
            quota_renewal_rate: 3600,
            quota_renews: 1723207234,
            rate: 1000,
            tags: ['security', 'edge', 'edge-eu', 'update-sample-tag'],
            throttle_interval: 10,
            throttle_retry_limit: 10,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Key updated.',
      content: {
        'application/json': {
          schema: ApiModifyKeySuccessSchema,
          example: {
            action: 'modified',
            key: '5e9d9544a1dcd60001d0ed20766d9a6ec6b4403b93a554feefef4708',
            status: 'ok',
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'Request malformed', status: 'error' },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Attempted administrative access with invalid or missing key!',
            status: 'error',
          },
        },
      },
    },
    404: {
      description: 'Key not found.',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'Key is not found', status: 'error' },
        },
      },
    },
    500: {
      description: 'Internal server error.',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Failed to create key, ensure security settings are correct.',
            status: 'error',
          },
        },
      },
    },
  },
})

export const postTykKeysKeyIDRoute = createRoute({
  method: 'post',
  path: '/tyk/keys/{keyID}',
  tags: ['Keys'],
  summary: 'Create custom key / Import key',
  description:
    'You can use this endpoint to import existing keys into Tyk or to create a new custom key.',
  operationId: 'createCustomKey',
  request: {
    query: z.object({
      suppress_reset: z
        .literal('1')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Adding the suppress_reset parameter and setting it to 1, will cause Tyk not to reset the quota limit that is in the current live quota manager. By default Tyk will reset the quota in the live quota manager (initialising it) when adding a key. Adding the `suppress_reset` flag to the URL parameters will avoid this behaviour.',
            example: '1',
            in: 'query',
            name: 'suppress_reset',
            required: false,
            schema: { enum: ['1'], type: 'string' },
          },
        }),
      hashed: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When set to true the key_hash returned will be similar to the un-hashed key name.',
            example: true,
            in: 'query',
            name: 'hashed',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    params: z.object({
      keyID: z
        .string()
        .openapi({
          param: {
            description: 'Name to give the custom key.',
            example: 'customKey',
            in: 'path',
            name: 'keyID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: SessionStateSchema,
          example: {
            access_rights: {
              'itachi-api': {
                allowed_urls: [{ methods: ['GET'], url: '/users' }],
                api_id: '8ddd91f3cda9453442c477b06c4e2da4',
                api_name: 'Itachi api',
                limit: {
                  per: 60,
                  quota_max: 10000,
                  quota_remaining: 10000,
                  quota_renewal_rate: 3600,
                  rate: 1000,
                  throttle_interval: 10,
                  throttle_retry_limit: 10,
                },
                versions: ['Default'],
              },
            },
            alias: 'portal-key',
            allowance: 1000,
            apply_policies: ['5ead7120575961000181867e'],
            date_created: '2024-08-09T14:40:34.87614+03:00',
            enable_detailed_recording: true,
            last_updated: '1723203634',
            meta_data: {
              'new-update-key-sample': 'update-key-sample',
              tyk_developer_id: '62b3fb9a1d5e4f00017226f5',
              update: 'sample policy update',
              user_type: 'mobile_user',
            },
            org_id: '5e9d9544a1dcd60001d0ed20',
            per: 60,
            quota_max: 10000,
            quota_renewal_rate: 3600,
            quota_renews: 1723207234,
            rate: 1000,
            tags: ['security', 'edge', 'edge-eu'],
            throttle_interval: 10,
            throttle_retry_limit: 10,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'New custom key added.',
      content: {
        'application/json': {
          schema: ApiModifyKeySuccessSchema,
          example: { action: 'added', key: '5e9d9544a1dcd60001d0ed20customKey', status: 'ok' },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'Request malformed', status: 'error' },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Attempted administrative access with invalid or missing key!',
            status: 'error',
          },
        },
      },
    },
    500: {
      description: 'Internal server error.',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Failed to create key, ensure security settings are correct.',
            status: 'error',
          },
        },
      },
    },
  },
})

export const deleteTykKeysKeyIDRoute = createRoute({
  method: 'delete',
  path: '/tyk/keys/{keyID}',
  tags: ['Keys'],
  summary: 'Delete a key.',
  description:
    'Deleting a key will remove it permanently from the system, however analytics relating to that key will still be available.',
  operationId: 'deleteKey',
  request: {
    query: z.object({
      hashed: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Use the hash of the key as input instead of the full key.',
            example: false,
            in: 'query',
            name: 'hashed',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    params: z.object({
      keyID: z
        .string()
        .openapi({
          param: {
            description: 'The key ID.',
            example: '5e9d9544a1dcd60001d0ed20e7f75f9e03534825b7aef9df749582e5',
            in: 'path',
            name: 'keyID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Key deleted.',
      content: {
        'application/json': {
          schema: ApiModifyKeySuccessSchema,
          example: {
            action: 'deleted',
            key: '5e9d9544a1dcd60001d0ed20e7f75f9e03534825b7aef9df749582e5',
            status: 'ok',
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'Failed to remove the key', status: 'error' },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Attempted administrative access with invalid or missing key!',
            status: 'error',
          },
        },
      },
    },
    404: {
      description: 'Key not found.',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'There is no such key found', status: 'error' },
        },
      },
    },
  },
})

export const postTykKeysCreateRoute = createRoute({
  method: 'post',
  path: '/tyk/keys/create',
  tags: ['Keys'],
  summary: 'Create a key.',
  description: 'Create a key.',
  operationId: 'createKey',
  request: {
    body: {
      content: {
        'application/json': {
          schema: SessionStateSchema,
          example: {
            access_rights: {
              'itachi-api': {
                allowed_urls: [{ methods: ['GET'], url: '/users' }],
                api_id: '8ddd91f3cda9453442c477b06c4e2da4',
                api_name: 'Itachi api',
                limit: {
                  per: 60,
                  quota_max: 10000,
                  quota_remaining: 10000,
                  quota_renewal_rate: 3600,
                  rate: 1000,
                  throttle_interval: 10,
                  throttle_retry_limit: 10,
                },
                versions: ['Default'],
              },
            },
            alias: 'portal-key',
            allowance: 1000,
            apply_policies: ['5ead7120575961000181867e'],
            date_created: '2024-08-09T14:40:34.87614+03:00',
            enable_detailed_recording: true,
            last_updated: '1723203634',
            meta_data: {
              'new-update-key-sample': 'update-key-sample',
              tyk_developer_id: '62b3fb9a1d5e4f00017226f5',
              update: 'sample policy update',
              user_type: 'mobile_user',
            },
            org_id: '5e9d9544a1dcd60001d0ed20',
            per: 60,
            quota_max: 10000,
            quota_renewal_rate: 3600,
            quota_renews: 1723207234,
            rate: 1000,
            tags: ['security', 'edge', 'edge-eu'],
            throttle_interval: 10,
            throttle_retry_limit: 10,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Key created.',
      content: {
        'application/json': {
          schema: ApiModifyKeySuccessSchema,
          example: {
            action: 'added',
            key: '5e9d9544a1dcd60001d0ed207eb558517c3c48fb826c62cc6f6161eb',
            status: 'ok',
          },
        },
      },
    },
    400: {
      description: 'No access right.',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Failed to create key, keys must have at least one Access Rights record set.',
            status: 'error',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Attempted administrative access with invalid or missing key!',
            status: 'error',
          },
        },
      },
    },
    500: {
      description: 'Malformed body.',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'Unmarshalling failed', status: 'error' },
        },
      },
    },
  },
})

export const postTykKeysPolicyKeyIDRoute = createRoute({
  method: 'post',
  path: '/tyk/keys/policy/{keyID}',
  tags: ['Keys'],
  summary: 'Set policies for a hashed key.',
  description: 'This will set policies to a hashed key.',
  operationId: 'setPoliciesToHashedKey',
  request: {
    params: z.object({
      keyID: z
        .string()
        .openapi({
          param: {
            description: 'Name to give the custom key.',
            example: '5e9d9544a1dcd60001d0ed207eb558517c3c48fb826c62cc6f6161eb',
            in: 'path',
            name: 'keyID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: PolicyUpdateObjSchema,
          example: { apply_policies: ['5ead7120575961000181867e'], policy: '' },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Updated hashed key.',
      content: {
        'application/json': {
          schema: ApiModifyKeySuccessSchema,
          example: {
            action: 'updated',
            key: '5e9d9544a1dcd60001d0ed207eb558517c3c48fb826c62cc6f6161eb',
            status: 'ok',
          },
        },
      },
    },
    400: {
      description: 'Malformed request body.',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: "Couldn't decode instruction", status: 'error' },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Attempted administrative access with invalid or missing key!',
            status: 'error',
          },
        },
      },
    },
    404: {
      description: 'Key not found.',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'Key not found', status: 'error' },
        },
      },
    },
    500: {
      description: 'Internal server error.',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'Could not write key data.', status: 'error' },
        },
      },
    },
  },
})

export const postTykKeysPreviewRoute = createRoute({
  method: 'post',
  path: '/tyk/keys/preview',
  tags: ['Keys'],
  summary: 'This will validate a key definition.',
  description:
    'This will check if the body of a key definition is valid. And return a response with how the key would look like if you were to create it.',
  operationId: 'validateAKeyDefinition',
  request: {
    body: {
      content: {
        'application/json': {
          schema: SessionStateSchema,
          example: {
            access_rights: {
              'itachi-api': {
                allowed_urls: [{ methods: ['GET'], url: '/users' }],
                api_id: '8ddd91f3cda9453442c477b06c4e2da4',
                api_name: 'Itachi api',
                limit: {
                  per: 60,
                  quota_max: 10000,
                  quota_remaining: 10000,
                  quota_renewal_rate: 3600,
                  rate: 1000,
                  throttle_interval: 10,
                  throttle_retry_limit: 10,
                },
                versions: ['Default'],
              },
            },
            alias: 'portal-key',
            allowance: 1000,
            apply_policies: ['5ead7120575961000181867e'],
            date_created: '2024-08-09T14:40:34.87614+03:00',
            enable_detailed_recording: true,
            last_updated: '1723203634',
            meta_data: {
              'new-update-key-sample': 'update-key-sample',
              tyk_developer_id: '62b3fb9a1d5e4f00017226f5',
              update: 'sample policy update',
              user_type: 'mobile_user',
            },
            org_id: '5e9d9544a1dcd60001d0ed20',
            per: 60,
            quota_max: 10000,
            quota_renewal_rate: 3600,
            quota_renews: 1723207234,
            rate: 1000,
            tags: ['security', 'edge', 'edge-eu'],
            throttle_interval: 10,
            throttle_retry_limit: 10,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Key definition is valid.',
      content: {
        'application/json': {
          schema: SessionStateSchema,
          example: {
            access_rights: {
              'itachi-api': {
                allowed_urls: [{ methods: ['GET'], url: '/users' }],
                api_id: '8ddd91f3cda9453442c477b06c4e2da4',
                api_name: 'Itachi api',
                limit: {
                  per: 60,
                  quota_max: 10000,
                  quota_remaining: 10000,
                  quota_renewal_rate: 3600,
                  rate: 1000,
                  throttle_interval: 10,
                  throttle_retry_limit: 10,
                },
                versions: ['Default'],
              },
            },
            alias: 'portal-key',
            allowance: 1000,
            apply_policies: ['5ead7120575961000181867e'],
            date_created: '2024-08-09T14:40:34.87614+03:00',
            enable_detailed_recording: true,
            last_updated: '1723203634',
            meta_data: {
              'new-update-key-sample': 'update-key-sample',
              tyk_developer_id: '62b3fb9a1d5e4f00017226f5',
              update: 'sample policy update',
              user_type: 'mobile_user',
            },
            org_id: '5e9d9544a1dcd60001d0ed20',
            per: 60,
            quota_max: 10000,
            quota_renewal_rate: 3600,
            quota_renews: 1723207234,
            rate: 1000,
            tags: ['security', 'edge', 'edge-eu'],
            throttle_interval: 10,
            throttle_retry_limit: 10,
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Attempted administrative access with invalid or missing key!',
            status: 'error',
          },
        },
      },
    },
    500: {
      description: 'Internal server error.',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'Unmarshalling failed', status: 'error' },
        },
      },
    },
  },
})

export const getTykOauthClientsApiIDRoute = createRoute({
  method: 'get',
  path: '/tyk/oauth/clients/{apiID}',
  tags: ['OAuth'],
  summary: 'List oAuth clients',
  description: 'OAuth Clients are organised by API ID, and therefore are queried as such.',
  operationId: 'listOAuthClients',
  request: {
    params: z.object({
      apiID: z
        .string()
        .openapi({
          param: {
            description: 'The API ID',
            example: '1bd5c61b0e694082902cf15ddcc9e6a7',
            in: 'path',
            name: 'apiID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get OAuth client details or a list of OAuth clients',
      content: {
        'application/json': {
          schema: z.array(NewClientRequestSchema),
          example: [
            {
              api_id: 'b84fe1a04e5648927971c0557971565c',
              client_id: '2a06b398c17f46908de3dffcb71ef87df',
              description: 'google client',
              meta_data: { user_id: '362b3fb9a1d5e4f00017226f5' },
              redirect_uri: 'https://httpbin.org/ip',
              secret: 'MmQwNTI5NGQtYjU0YS00NjMyLWIwZjktNTZjY2M1ZjhjYWY0',
            },
          ],
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Attempted administrative access with invalid or missing key!',
            status: 'error',
          },
        },
      },
    },
    404: { description: 'Api no found' },
  },
})

export const getTykOauthClientsApiIDKeyNameRoute = createRoute({
  method: 'get',
  path: '/tyk/oauth/clients/{apiID}/{keyName}',
  tags: ['OAuth'],
  summary: 'Get OAuth client',
  description: 'Get OAuth client details tied to an api',
  operationId: 'getOAuthClient',
  request: {
    params: z.object({
      apiID: z
        .string()
        .openapi({
          param: {
            description: 'The API id',
            example: 'b84fe1a04e5648927971c0557971565c',
            in: 'path',
            name: 'apiID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      keyName: z
        .string()
        .openapi({
          param: {
            description: 'The Client ID',
            example: '2a06b398c17f46908de3dffcb71ef87df',
            in: 'path',
            name: 'keyName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OAuth client details',
      content: {
        'application/json': {
          schema: NewClientRequestSchema,
          example: {
            client_id: '2a06b398c17f46908de3dffcb71ef87df',
            description: 'changed description sample',
            meta_data: { user_id: '362b3fb9a1d5e4f00017226f5' },
            redirect_uri: 'https://httpbin.org/ip',
            secret: 'MmQwNTI5NGQtYjU0YS00NjMyLWIwZjktNTZjY2M1ZjhjYWY0',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Attempted administrative access with invalid or missing key!',
            status: 'error',
          },
        },
      },
    },
    404: {
      description: 'OAuth Client not found',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'OAuth Client ID not found', status: 'error' },
        },
      },
    },
  },
})

export const putTykOauthClientsApiIDKeyNameRoute = createRoute({
  method: 'put',
  path: '/tyk/oauth/clients/{apiID}/{keyName}',
  tags: ['OAuth'],
  summary: 'Update OAuth metadata,redirecturi,description and Policy ID',
  description:
    'Allows you to update the metadata,redirecturi,description and Policy ID for an OAuth client.',
  operationId: 'updateOAuthClient',
  request: {
    params: z.object({
      apiID: z
        .string()
        .openapi({
          param: {
            description: 'The API id',
            example: 'b84fe1a04e5648927971c0557971565c',
            in: 'path',
            name: 'apiID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      keyName: z
        .string()
        .openapi({
          param: {
            description: 'The Client ID',
            example: '2a06b398c17f46908de3dffcb71ef87df',
            in: 'path',
            name: 'keyName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: NewClientRequestSchema,
          example: {
            api_id: 'b84fe1a04e5648927971c0557971565c',
            client_id: '2a06b398c17f46908de3dffcb71ef87df',
            description: 'changed description sample',
            meta_data: { user_id: '362b3fb9a1d5e4f00017226f5' },
            redirect_uri: 'https://httpbin.org/ip',
            secret: 'MmQwNTI5NGQtYjU0YS00NjMyLWIwZjktNTZjY2M1ZjhjYWY0',
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OAuth client updated',
      content: {
        'application/json': {
          schema: NewClientRequestSchema,
          example: {
            client_id: '2a06b398c17f46908de3dffcb71ef87df',
            description: 'changed description sample',
            meta_data: { user_id: '362b3fb9a1d5e4f00017226f5' },
            redirect_uri: 'https://httpbin.org/ip',
            secret: 'MmQwNTI5NGQtYjU0YS00NjMyLWIwZjktNTZjY2M1ZjhjYWY0',
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: "Policy access rights doesn't contain API this OAuth client belongs to",
            status: 'error',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Attempted administrative access with invalid or missing key!',
            status: 'error',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: "API doesn't exist", status: 'error' },
        },
      },
    },
    500: {
      description: 'malformed request body',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'Unmarshalling failed', status: 'error' },
        },
      },
    },
  },
})

export const deleteTykOauthClientsApiIDKeyNameRoute = createRoute({
  method: 'delete',
  path: '/tyk/oauth/clients/{apiID}/{keyName}',
  tags: ['OAuth'],
  summary: 'Delete OAuth client',
  description:
    'Please note that tokens issued with the client ID will still be valid until they expire.',
  operationId: 'deleteOAuthClient',
  request: {
    params: z.object({
      apiID: z
        .string()
        .openapi({
          param: {
            description: 'The API id',
            example: 'b84fe1a04e5648927971c0557971565c',
            in: 'path',
            name: 'apiID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      keyName: z
        .string()
        .openapi({
          param: {
            description: 'The Client ID',
            example: '2a06b398c17f46908de3dffcb71ef87df',
            in: 'path',
            name: 'keyName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OAuth client deleted',
      content: {
        'application/json': {
          schema: ApiModifyKeySuccessSchema,
          example: { action: 'deleted', key: '2a06b398c17f46908de3dffcb71ef87df', status: 'ok' },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Attempted administrative access with invalid or missing key!',
            status: 'error',
          },
        },
      },
    },
    404: {
      description: 'Not found',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'OAuth Client ID not found', status: 'error' },
        },
      },
    },
    500: {
      description: 'Internal server error.',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'Delete failed', status: 'error' },
        },
      },
    },
  },
})

export const putTykOauthClientsApiIDKeyNameRotateRoute = createRoute({
  method: 'put',
  path: '/tyk/oauth/clients/{apiID}/{keyName}/rotate',
  tags: ['OAuth'],
  summary: 'Rotate the oath client secret',
  description: 'Generate a new secret',
  operationId: 'rotateOauthClient',
  request: {
    params: z.object({
      apiID: z
        .string()
        .openapi({
          param: {
            description: 'The API id',
            example: 'b84fe1a04e5648927971c0557971565c',
            in: 'path',
            name: 'apiID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      keyName: z
        .string()
        .openapi({
          param: {
            description: 'The Client ID',
            example: '2a06b398c17f46908de3dffcb71ef87df',
            in: 'path',
            name: 'keyName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'New secret has been created',
      content: {
        'application/json': {
          schema: NewClientRequestSchema,
          example: {
            client_id: '2a06b398c17f46908de3dffcb71ef87df',
            description: 'google client',
            meta_data: { user_id: '362b3fb9a1d5e4f00017226f5' },
            redirect_uri: 'https://httpbin.org/ip',
            secret: 'MmQwNTI5NGQtYjU0YS00NjMyLWIwZjktNTZjY2M1ZjhjYWY0',
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Attempted administrative access with invalid or missing key!',
            status: 'error',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: "API doesn't exist", status: 'error' },
        },
      },
    },
    500: {
      description: 'Internal server error.',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'Failure in storing client data', status: 'error' },
        },
      },
    },
  },
})

export const getTykOauthClientsApiIDKeyNameTokensRoute = createRoute({
  method: 'get',
  path: '/tyk/oauth/clients/{apiID}/{keyName}/tokens',
  tags: ['OAuth'],
  summary: 'List tokens for a provided API ID and OAuth-client ID',
  description:
    'This endpoint allows you to retrieve a list of all current tokens and their expiry date for a provided API ID and OAuth-client ID .If page query parameter is sent the tokens will be paginated. This endpoint will work only for newly created tokens.\n        <br/>\n        <br/>\n        You can control how long you want to store expired tokens in this list using `oauth_token_expired_retain_period` gateway option, which specifies retain period for expired tokens stored in Redis. By default expired token not get removed. See <a href="https://tyk.io/docs/configure/tyk-gateway-configuration-options/#a-name-oauth-token-expired-retain-period-a-oauth-token-expired-retain-period" target="_blank">here</a> for more details.',
  operationId: 'getOAuthClientTokens',
  request: {
    params: z.object({
      apiID: z
        .string()
        .openapi({
          param: {
            description: 'The API id',
            example: 'b84fe1a04e5648927971c0557971565c',
            in: 'path',
            name: 'apiID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      keyName: z
        .string()
        .openapi({
          param: {
            description: 'The Client ID',
            example: '2a06b398c17f46908de3dffcb71ef87df',
            in: 'path',
            name: 'keyName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Use page query parameter to say which page number you want returned.',
            example: 1,
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Tokens returned successfully.',
      content: {
        'application/json': {
          schema: z.xor([
            PaginatedOAuthClientTokensSchema,
            z.array(OAuthClientTokenSchema).nullable(),
          ]),
          examples: {
            paginatedTokenExample: PaginatedTokenExampleExample,
            tokenListExample: TokenListExampleExample,
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Attempted administrative access with invalid or missing key!',
            status: 'error',
          },
        },
      },
    },
    404: {
      description: 'OAuth Client ID not found',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'OAuth Client ID not found', status: 'error' },
        },
      },
    },
    500: {
      description: 'Internal server error.',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'Get client tokens failed', status: 'error' },
        },
      },
    },
  },
})

export const getTykOauthClientsApisAppIDRoute = createRoute({
  method: 'get',
  path: '/tyk/oauth/clients/apis/{appID}',
  tags: ['OAuth'],
  summary: 'Get API IDs for APIS that use the specified client_id(appID) for OAuth',
  description:
    'Get all API IDs for APIs that have use_oauth2 enabled and use the client_id (appID) specified in the path parameter for OAuth2. You can use the org_id query parameter to specify from which organization you want the API IDs to be returned. To return APIs from all organizations, send org_id as an empty string.',
  operationId: 'getApisForOauthApp',
  request: {
    params: z.object({
      appID: z
        .string()
        .openapi({
          param: {
            description: 'The Client ID',
            example: '2a06b398c17f46908de3dffcb71ef87df',
            in: 'path',
            name: 'appID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      orgID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Org Id',
            in: 'query',
            name: 'orgID',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Return an array of apis ids',
      content: {
        'application/json': {
          schema: z.array(z.string()),
          example: ['b84fe1a04e5648927971c0557971565c'],
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Attempted administrative access with invalid or missing key!',
            status: 'error',
          },
        },
      },
    },
  },
})

export const postTykOauthClientsCreateRoute = createRoute({
  method: 'post',
  path: '/tyk/oauth/clients/create',
  tags: ['OAuth'],
  summary: 'Create new OAuth client',
  description:
    "Any OAuth keys must be generated with the help of a client ID. These need to be pre-registered with Tyk before they can be used (in a similar vein to how you would register your app with Twitter before attempting to ask user permissions using their API).\n        <br/><br/>\n        <h3>Creating OAuth clients with Access to Multiple APIs</h3>\n        New from Tyk Gateway 2.6.0 is the ability to create OAuth clients with access to more than one API. If you provide the api_id it works the same as in previous releases. If you don't provide the api_id the request uses policy access rights and enumerates APIs from their setting in the newly created OAuth-client.\n",
  operationId: 'createOAuthClient',
  request: {
    body: {
      content: {
        'application/json': {
          schema: NewClientRequestSchema,
          example: {
            api_id: 'b84fe1a04e5648927971c0557971565c',
            client_id: '2a06b398c17f46908de3dffcb71ef87df',
            description: 'google client',
            meta_data: { user_id: '362b3fb9a1d5e4f00017226f5' },
            redirect_uri: 'https://httpbin.org/ip',
            secret: 'MmQwNTI5NGQtYjU0YS00NjMyLWIwZjktNTZjY2M1ZjhjYWY0',
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Client created',
      content: {
        'application/json': {
          schema: NewClientRequestSchema,
          example: {
            client_id: '2a06b398c17f46908de3dffcb71ef87df',
            description: 'google client',
            meta_data: { user_id: '362b3fb9a1d5e4f00017226f5' },
            redirect_uri: 'https://httpbin.org/ip',
            secret: 'MmQwNTI5NGQtYjU0YS00NjMyLWIwZjktNTZjY2M1ZjhjYWY0',
          },
        },
      },
    },
    400: {
      description: 'Api Not found',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: "API doesn't exist", status: 'error' },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Attempted administrative access with invalid or missing key!',
            status: 'error',
          },
        },
      },
    },
    500: {
      description: 'Unmarshalling failed',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'Unmarshalling failed', status: 'error' },
        },
      },
    },
  },
})

export const deleteTykOauthRefreshKeyNameRoute = createRoute({
  method: 'delete',
  path: '/tyk/oauth/refresh/{keyName}',
  tags: ['OAuth'],
  summary: 'Invalidate OAuth refresh token',
  description:
    'It is possible to invalidate refresh tokens in order to manage OAuth client access more robustly.',
  operationId: 'invalidateOAuthRefresh',
  request: {
    params: z.object({
      keyName: z
        .string()
        .openapi({
          param: {
            description: 'The Client ID',
            example: '2a06b398c17f46908de3dffcb71ef87df',
            in: 'path',
            name: 'keyName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      api_id: z
        .string()
        .openapi({
          param: {
            description: 'The API id',
            example: 'b84fe1a04e5648927971c0557971565c',
            in: 'query',
            name: 'api_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Deleted',
      content: {
        'application/json': {
          schema: ApiModifyKeySuccessSchema,
          example: { action: 'deleted', key: '2a06b398c17f46908de3dffcb71ef87df', status: 'ok' },
        },
      },
    },
    400: {
      description: 'missing api_Id query parameter',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'Missing parameter api_id', status: 'error' },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Attempted administrative access with invalid or missing key!',
            status: 'error',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'API for this refresh token not found', status: 'error' },
        },
      },
    },
    500: {
      description: 'Internal server error.',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'Failed to invalidate refresh token', status: 'error' },
        },
      },
    },
  },
})

export const postTykOauthRevokeRoute = createRoute({
  method: 'post',
  path: '/tyk/oauth/revoke',
  tags: ['OAuth'],
  summary: 'revoke token',
  description: 'revoke a single token',
  operationId: 'revokeSingleToken',
  request: {
    body: {
      description: 'token revoked successfully',
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              client_id: z
                .string()
                .openapi({
                  description: 'id of oauth client',
                  example: '2a06b398c17f46908de3dffcb71ef87df',
                }),
              org_id: z.string().exactOptional().openapi({ example: '6492f66e6ebbc56c6a6bf022' }),
              token: z
                .string()
                .openapi({
                  description: 'token to be revoked',
                  example:
                    'eyJvcmciOiI1ZTIwOTFjNGQ0YWVmY2U2MGMwNGZiOTIiLCJpZCI6IjIyODQ1NmFjNmJlMjRiMzI5MTIyOTdlODQ5NTc4NjJhIiwiaCI6Im11cm11cjY0In0=',
                }),
              token_type_hint: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'type of token to be revoked, if sent then the accepted values are access_token and refresh_token. String value and optional, of not provided then it will attempt to remove access and refresh tokens that matches',
                  example: 'access_token',
                }),
            })
            .openapi({ required: ['token', 'client_id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'token revoked',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'token revoked successfully', status: 'ok' },
        },
      },
    },
    400: {
      description: 'malformed form data',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'cannot parse form. Form malformed', status: 'error' },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Attempted administrative access with invalid or missing key!',
            status: 'error',
          },
        },
      },
    },
  },
})

export const postTykOauthRevokeAllRoute = createRoute({
  method: 'post',
  path: '/tyk/oauth/revoke_all',
  tags: ['OAuth'],
  summary: "Revoke all client's tokens",
  description: 'Revoke all the tokens for a given oauth client',
  operationId: 'revokeAllTokens',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              client_id: z
                .string()
                .openapi({
                  description: 'id of oauth client',
                  example: '2a06b398c17f46908de3dffcb71ef87df',
                }),
              client_secret: z
                .string()
                .openapi({
                  description: 'OAuth client secret to ensure that its a valid operation',
                  example: 'MmQwNTI5NGQtYjU0YS00NjMyLWIwZjktNTZjY2M1ZjhjYWY0',
                }),
              org_id: z.string().exactOptional().openapi({ example: '6492f66e6ebbc56c6a6bf022' }),
            })
            .openapi({ required: ['client_secret', 'client_id'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'tokens revoked',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'tokens revoked successfully', status: 'ok' },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'cannot parse form. Form malformed', status: 'error' },
        },
      },
    },
    401: {
      description: 'missing client id',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'client_id is required', status: 'error' },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Attempted administrative access with invalid or missing key!',
            status: 'error',
          },
        },
      },
    },
    404: {
      description: 'not found',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: "oauth client doesn't exist", status: 'error' },
        },
      },
    },
  },
})

export const deleteTykOauthTokensRoute = createRoute({
  method: 'delete',
  path: '/tyk/oauth/tokens',
  tags: ['OAuth'],
  summary: 'Purge lapsed OAuth tokens',
  description: 'Purge all lapsed OAuth token',
  operationId: 'purgeLapsedOAuthTokens',
  request: {
    query: z.object({
      scope: z
        .literal('lapsed')
        .openapi({
          param: {
            description: 'purge lapsed tokens',
            example: 'lapsed',
            in: 'query',
            name: 'scope',
            required: true,
            schema: { enum: ['lapsed'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'lapsed tokens purged successfully',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'lapsed tokens purged', status: 'ok' },
        },
      },
    },
    400: {
      description: 'Sending a value other than lapsed in scope query',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'unknown scope', status: 'error' },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Attempted administrative access with invalid or missing key!',
            status: 'error',
          },
        },
      },
    },
    422: {
      description: 'Missing lapsed query parameter',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'scope parameter is required', status: 'error' },
        },
      },
    },
    500: {
      description: 'Internal server error.',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'error purging lapsed tokens', status: 'error' },
        },
      },
    },
  },
})

export const getTykOrgKeysRoute = createRoute({
  method: 'get',
  path: '/tyk/org/keys',
  tags: ['Organisation Quotas'],
  summary: 'List Organisation Keys',
  description:
    "You can now set rate limits at the organisation level by using the following fields - allowance and rate. These are the number of allowed requests for the specified per value, and need to be set to the same value. If you don't want to have organisation level rate limiting, set 'rate' or 'per' to zero, or don't add them to your request.",
  operationId: 'listOrgKeys',
  request: {
    query: z.object({
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Retrieves all keys starting with the specified filter(filter is a prefix - e.g. default* or default will return all keys starting with default  like defaultbd,defaulttwo etc).We don't use filter for hashed keys",
            example: 'default*',
            in: 'query',
            name: 'filter',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of all org keys',
      content: {
        'application/json': {
          schema: ApiAllKeysSchema,
          example: { keys: ['5e9d9544a1dcd60001d0ed2008500e44fa644f939b640a4b8b4ea58c'] },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Attempted administrative access with invalid or missing key!',
            status: 'error',
          },
        },
      },
    },
    404: {
      description: 'ORG not found',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'ORG not found', status: 'error' },
        },
      },
    },
  },
})

export const getTykOrgKeysKeyIDRoute = createRoute({
  method: 'get',
  path: '/tyk/org/keys/{keyID}',
  tags: ['Organisation Quotas'],
  summary: 'Get an Organisation Key',
  description:
    'Get session info about specified organisation key. Should return up to date rate limit and quota usage numbers.',
  operationId: 'getOrgKey',
  request: {
    query: z.object({
      orgID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Org ID',
            example: '664a14650619d40001f1f00f',
            in: 'query',
            name: 'orgID',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      keyID: z
        .string()
        .openapi({
          param: {
            description: 'The Key ID',
            example: 'e389ae00a2b145feaf28d6cc11f0f86d',
            in: 'path',
            name: 'keyID',
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
          schema: z
            .object({
              access_rights: z
                .record(
                  z.string(),
                  z
                    .object({
                      allowed_urls: z
                        .array(
                          z
                            .object({
                              methods: z.array(z.string()).nullable().exactOptional(),
                              url: z.string().exactOptional(),
                            })
                            .openapi({ required: [] }),
                        )
                        .nullable()
                        .exactOptional(),
                      api_id: z.string().exactOptional(),
                      api_name: z.string().exactOptional(),
                      limit: z
                        .object({
                          per: z.int().exactOptional(),
                          quota_max: z.int().exactOptional(),
                          quota_remaining: z.int().exactOptional(),
                          quota_renewal_rate: z.int().exactOptional(),
                          rate: z.int().exactOptional(),
                          throttle_interval: z.int().exactOptional(),
                          throttle_retry_limit: z.int().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      versions: z.array(z.string()).nullable().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .nullable()
                .exactOptional(),
              alias: z.string().exactOptional(),
              allowance: z.int().exactOptional(),
              apply_policies: z.array(z.string()).nullable().exactOptional(),
              date_created: z.iso.datetime({ offset: true }).exactOptional(),
              enable_detailed_recording: z.boolean().exactOptional(),
              last_updated: z.string().exactOptional(),
              meta_data: z.record(z.string(), z.string()).nullable().exactOptional(),
              org_id: z.string().exactOptional(),
              per: z.int().exactOptional(),
              quota_max: z.int().exactOptional(),
              quota_renewal_rate: z.int().exactOptional(),
              quota_renews: z.int().exactOptional(),
              rate: z.int().exactOptional(),
              tags: z.array(z.string()).nullable().exactOptional(),
              throttle_interval: z.int().exactOptional(),
              throttle_retry_limit: z.int().exactOptional(),
            })
            .openapi({ required: [] }),
          example: {
            access_rights: {
              'itachi-api': {
                allowed_urls: [{ methods: ['GET'], url: '/users' }],
                api_id: '8ddd91f3cda9453442c477b06c4e2da4',
                api_name: 'Itachi api',
                limit: {
                  per: 60,
                  quota_max: 10000,
                  quota_remaining: 10000,
                  quota_renewal_rate: 3600,
                  rate: 1000,
                  throttle_interval: 10,
                  throttle_retry_limit: 10,
                },
                versions: ['Default'],
              },
            },
            alias: 'portal-key',
            allowance: 1000,
            apply_policies: ['5ead7120575961000181867e'],
            date_created: '2024-08-09T14:40:34.87614+03:00',
            enable_detailed_recording: true,
            last_updated: '1723203634',
            meta_data: {
              'new-update-key-sample': 'update-key-sample',
              tyk_developer_id: '62b3fb9a1d5e4f00017226f5',
              update: 'sample policy update',
              user_type: 'mobile_user',
            },
            org_id: '5e9d9544a1dcd60001d0ed20',
            per: 60,
            quota_max: 10000,
            quota_renewal_rate: 3600,
            quota_renews: 1723207234,
            rate: 1000,
            tags: ['security', 'edge', 'edge-eu'],
            throttle_interval: 10,
            throttle_retry_limit: 10,
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Attempted administrative access with invalid or missing key!',
            status: 'error',
          },
        },
      },
    },
    404: {
      description: 'Org not found',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'Org not found', status: 'error' },
        },
      },
    },
  },
})

export const putTykOrgKeysKeyIDRoute = createRoute({
  method: 'put',
  path: '/tyk/org/keys/{keyID}',
  tags: ['Organisation Quotas'],
  summary: 'Update Organisation Key',
  description:
    "This work similar to Keys API except that Key ID is always equals Organisation ID\n\nFor Gateway v2.6.0 onwards, you can now set rate limits at the organisation level by using the following fields - allowance and rate. These are the number of allowed requests for the specified per value, and need to be set to the same value. If you don't want to have organisation level rate limiting, set `rate` or `per` to zero, or don't add them to your request.",
  operationId: 'updateOrgKey',
  request: {
    query: z.object({
      reset_quota: z
        .literal('1')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Adding the reset_quota parameter and setting it to 1, will cause Tyk reset the organisations quota in the live quota manager, it is recommended to use this mechanism to reset organisation-level access if a monthly subscription is in place.',
            example: '1',
            in: 'query',
            name: 'reset_quota',
            required: false,
            schema: { enum: ['1'], type: 'string' },
          },
        }),
    }),
    params: z.object({
      keyID: z
        .string()
        .openapi({
          param: {
            description: 'The Key ID',
            example: 'e389ae00a2b145feaf28d6cc11f0f86d',
            in: 'path',
            name: 'keyID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: SessionStateSchema,
          example: {
            access_rights: {
              'itachi-api': {
                allowed_urls: [{ methods: ['GET'], url: '/users' }],
                api_id: '8ddd91f3cda9453442c477b06c4e2da4',
                api_name: 'Itachi api',
                limit: {
                  per: 60,
                  quota_max: 10000,
                  quota_remaining: 10000,
                  quota_renewal_rate: 3600,
                  rate: 1000,
                  throttle_interval: 10,
                  throttle_retry_limit: 10,
                },
                versions: ['Default'],
              },
            },
            alias: 'portal-key',
            allowance: 1000,
            apply_policies: ['5ead7120575961000181867e'],
            date_created: '2024-08-09T14:40:34.87614+03:00',
            enable_detailed_recording: true,
            last_updated: '1723203634',
            meta_data: {
              'new-update-key-sample': 'update-key-sample',
              tyk_developer_id: '62b3fb9a1d5e4f00017226f5',
              update: 'sample policy update',
              user_type: 'mobile_user',
            },
            org_id: '5e9d9544a1dcd60001d0ed20',
            per: 60,
            quota_max: 10000,
            quota_renewal_rate: 3600,
            quota_renews: 1723207234,
            rate: 1000,
            tags: ['security', 'edge', 'edge-eu', 'update-sample-tag'],
            throttle_interval: 10,
            throttle_retry_limit: 10,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ApiModifyKeySuccessSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'Request malformed', status: 'error' },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Attempted administrative access with invalid or missing key!',
            status: 'error',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'No such organisation found in Active API list', status: 'error' },
        },
      },
    },
    500: {
      description: 'Internal server error.',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'Error writing to key store ', status: 'error' },
        },
      },
    },
  },
})

export const postTykOrgKeysKeyIDRoute = createRoute({
  method: 'post',
  path: '/tyk/org/keys/{keyID}',
  tags: ['Organisation Quotas'],
  summary: 'Create an organisation key',
  description: 'This work similar to Keys API except that Key ID is always equals Organisation ID',
  operationId: 'addOrgKey',
  request: {
    params: z.object({
      keyID: z
        .string()
        .openapi({
          param: {
            description: 'The Key ID',
            example: 'e389ae00a2b145feaf28d6cc11f0f86d',
            in: 'path',
            name: 'keyID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      reset_quota: z
        .literal('1')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Adding the reset_quota parameter and setting it to 1, will cause Tyk reset the organisations quota in the live quota manager, it is recommended to use this mechanism to reset organisation-level access if a monthly subscription is in place.',
            example: '1',
            in: 'query',
            name: 'reset_quota',
            required: false,
            schema: { enum: ['1'], type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: SessionStateSchema,
          example: {
            access_rights: {
              'itachi-api': {
                allowed_urls: [{ methods: ['GET'], url: '/users' }],
                api_id: '8ddd91f3cda9453442c477b06c4e2da4',
                api_name: 'Itachi api',
                limit: {
                  per: 60,
                  quota_max: 10000,
                  quota_remaining: 10000,
                  quota_renewal_rate: 3600,
                  rate: 1000,
                  throttle_interval: 10,
                  throttle_retry_limit: 10,
                },
                versions: ['Default'],
              },
            },
            alias: 'portal-key',
            allowance: 1000,
            apply_policies: ['5ead7120575961000181867e'],
            date_created: '2024-08-09T14:40:34.87614+03:00',
            enable_detailed_recording: true,
            last_updated: '1723203634',
            meta_data: {
              'new-update-key-sample': 'update-key-sample',
              tyk_developer_id: '62b3fb9a1d5e4f00017226f5',
              update: 'sample policy update',
              user_type: 'mobile_user',
            },
            org_id: '5e9d9544a1dcd60001d0ed20',
            per: 60,
            quota_max: 10000,
            quota_renewal_rate: 3600,
            quota_renews: 1723207234,
            rate: 1000,
            tags: ['security', 'edge', 'edge-eu'],
            throttle_interval: 10,
            throttle_retry_limit: 10,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: ApiModifyKeySuccessSchema,
          example: { action: 'added', key: 'e389ae00a2b145feaf28d6cc11f0f86d', status: 'ok' },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'Request malformed', status: 'error' },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Attempted administrative access with invalid or missing key!',
            status: 'error',
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'No such organisation found in Active API list', status: 'error' },
        },
      },
    },
    500: {
      description: 'Internal server error.',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'Error writing to key store ', status: 'error' },
        },
      },
    },
  },
})

export const deleteTykOrgKeysKeyIDRoute = createRoute({
  method: 'delete',
  path: '/tyk/org/keys/{keyID}',
  tags: ['Organisation Quotas'],
  summary: 'Delete Key',
  description:
    'Deleting a key will remove all limits from organisation. It does not affects regular keys created within organisation.',
  operationId: 'deleteOrgKey',
  request: {
    params: z.object({
      keyID: z
        .string()
        .openapi({
          param: {
            description: 'The Key ID',
            example: 'e389ae00a2b145feaf28d6cc11f0f86d',
            in: 'path',
            name: 'keyID',
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
          schema: ApiModifyKeySuccessSchema,
          example: { action: 'deleted', key: 'e389ae00a2b145feaf28d6cc11f0f86d', status: 'ok' },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'Failed to remove the key', status: 'error' },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Attempted administrative access with invalid or missing key!',
            status: 'error',
          },
        },
      },
    },
    404: {
      description: 'Org not found',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'Org not found', status: 'error' },
        },
      },
    },
  },
})

export const getTykPoliciesRoute = createRoute({
  method: 'get',
  path: '/tyk/policies',
  tags: ['Policies'],
  summary: 'List policies.',
  description: 'Retrieve all the policies in your Tyk instance. Returns an array policies.',
  operationId: 'listPolicies',
  responses: {
    200: {
      description: 'List of all policies.',
      content: {
        'application/json': {
          schema: z.array(PolicySchema),
          examples: { policiesExample: PoliciesExampleExample },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Attempted administrative access with invalid or missing key!',
            status: 'error',
          },
        },
      },
    },
  },
})

export const postTykPoliciesRoute = createRoute({
  method: 'post',
  path: '/tyk/policies',
  tags: ['Policies'],
  summary: 'Create a policy.',
  description: 'Create a policy in your Tyk Instance.',
  operationId: 'addPolicy',
  request: {
    body: {
      content: {
        'application/json': {
          schema: PolicySchema,
          example: {
            access_rights: {
              '8ddd91f3cda9453442c477b06c4e2da4': {
                allowed_urls: [{ methods: ['GET'], url: '/users' }],
                api_id: '8ddd91f3cda9453442c477b06c4e2da4',
                api_name: 'Itachi api',
                disable_introspection: false,
                versions: ['Default'],
              },
            },
            active: true,
            hmac_enabled: false,
            id: '5ead7120575961000181867e',
            is_inactive: false,
            key_expires_in: 2592000,
            max_query_depth: -1,
            meta_data: { update: 'sample policy update', user_type: 'mobile_user' },
            name: 'Sample policy',
            partitions: {
              acl: true,
              complexity: false,
              per_api: false,
              quota: true,
              rate_limit: true,
            },
            per: 60,
            quota_max: 10000,
            quota_renewal_rate: 3600,
            rate: 1000,
            tags: ['security'],
            throttle_interval: 10,
            throttle_retry_limit: 10,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Policy created.',
      content: {
        'application/json': {
          schema: ApiModifyKeySuccessSchema,
          example: { action: 'added', key: '5ead7120575961000181867e', status: 'ok' },
        },
      },
    },
    400: {
      description: 'Malformed request.',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'Request malformed', status: 'error' },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Attempted administrative access with invalid or missing key!',
            status: 'error',
          },
        },
      },
    },
    500: {
      description: 'Internal server error.',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Due to enabled service policy source, please use the Dashboard API.',
            status: 'error',
          },
        },
      },
    },
  },
})

export const getTykPoliciesPolIDRoute = createRoute({
  method: 'get',
  path: '/tyk/policies/{polID}',
  tags: ['Policies'],
  summary: 'Get a policy.',
  description: 'You can retrieve details of a single policy by ID in your Tyk instance.',
  operationId: 'getPolicy',
  request: {
    params: z.object({
      polID: z
        .string()
        .openapi({
          param: {
            description: 'You can retrieve details of a single policy by ID in your Tyk instance.',
            example: '5ead7120575961000181867e',
            in: 'path',
            name: 'polID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get details of a single policy.',
      content: {
        'application/json': {
          schema: PolicySchema,
          example: {
            access_rights: {
              '8ddd91f3cda9453442c477b06c4e2da4': {
                allowed_urls: [{ methods: ['GET'], url: '/users' }],
                api_id: '8ddd91f3cda9453442c477b06c4e2da4',
                api_name: 'Itachi api',
                disable_introspection: false,
                versions: ['Default'],
              },
            },
            active: true,
            hmac_enabled: false,
            id: '5ead7120575961000181867e',
            is_inactive: false,
            key_expires_in: 2592000,
            max_query_depth: -1,
            meta_data: { update: 'sample policy update', user_type: 'mobile_user' },
            name: 'Sample policy',
            partitions: {
              acl: true,
              complexity: false,
              per_api: false,
              quota: true,
              rate_limit: true,
            },
            per: 60,
            quota_max: 10000,
            quota_renewal_rate: 3600,
            rate: 1000,
            tags: ['security'],
            throttle_interval: 10,
            throttle_retry_limit: 10,
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Attempted administrative access with invalid or missing key!',
            status: 'error',
          },
        },
      },
    },
    404: {
      description: 'Policy not found',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'Policy not found', status: 'error' },
        },
      },
    },
  },
})

export const putTykPoliciesPolIDRoute = createRoute({
  method: 'put',
  path: '/tyk/policies/{polID}',
  tags: ['Policies'],
  summary: 'Update a policy.',
  description: 'You can update a Policy in your Tyk Instance by ID.',
  operationId: 'updatePolicy',
  request: {
    params: z.object({
      polID: z
        .string()
        .openapi({
          param: {
            description: 'You can retrieve details of a single policy by ID in your Tyk instance.',
            example: '5ead7120575961000181867e',
            in: 'path',
            name: 'polID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: PolicySchema,
          example: {
            access_rights: {
              '8ddd91f3cda9453442c477b06c4e2da4': {
                allowed_urls: [{ methods: ['GET'], url: '/users' }],
                api_id: '8ddd91f3cda9453442c477b06c4e2da4',
                api_name: 'Itachi api',
                disable_introspection: false,
                versions: ['Default'],
              },
            },
            active: true,
            hmac_enabled: false,
            id: '5ead7120575961000181867e',
            is_inactive: false,
            key_expires_in: 2592000,
            max_query_depth: -1,
            meta_data: { update: 'sample policy update', user_type: 'mobile_user' },
            name: 'update policy sample',
            partitions: {
              acl: true,
              complexity: false,
              per_api: false,
              quota: true,
              rate_limit: true,
            },
            per: 60,
            quota_max: 10000,
            quota_renewal_rate: 3600,
            rate: 1000,
            tags: ['security'],
            throttle_interval: 10,
            throttle_retry_limit: 10,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Policy updated',
      content: {
        'application/json': {
          schema: ApiModifyKeySuccessSchema,
          example: { action: 'modified', key: '5ead7120575961000181867e', status: 'ok' },
        },
      },
    },
    400: {
      description: 'malformed request',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'Request malformed', status: 'error' },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Attempted administrative access with invalid or missing key!',
            status: 'error',
          },
        },
      },
    },
    500: {
      description: 'Internal server error.',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'Failed to create file!', status: 'error' },
        },
      },
    },
  },
})

export const deleteTykPoliciesPolIDRoute = createRoute({
  method: 'delete',
  path: '/tyk/policies/{polID}',
  tags: ['Policies'],
  summary: 'Delete a policy.',
  description: 'Delete a policy by ID in your Tyk instance.',
  operationId: 'deletePolicy',
  request: {
    params: z.object({
      polID: z
        .string()
        .openapi({
          param: {
            description: 'You can retrieve details of a single policy by ID in your Tyk instance.',
            example: '5ead7120575961000181867e',
            in: 'path',
            name: 'polID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Deleted policy by ID',
      content: {
        'application/json': {
          schema: ApiModifyKeySuccessSchema,
          example: { action: 'deleted', key: '5ead7120575961000181867e', status: 'ok' },
        },
      },
    },
    400: {
      description: 'Policy Id not provided',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'Must specify an apiID to update', status: 'error' },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Attempted administrative access with invalid or missing key!',
            status: 'error',
          },
        },
      },
    },
    500: {
      description: 'Internal server error.',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'Delete failed', status: 'error' },
        },
      },
    },
  },
})

export const getTykReloadRoute = createRoute({
  method: 'get',
  path: '/tyk/reload',
  tags: ['Hot Reload'],
  summary: 'Hot-reload a single node.',
  description:
    'Tyk is capable of reloading configurations without having to stop serving requests. This means that API configurations can be added at runtime, or even modified at runtime and those rules applied immediately without any downtime.',
  operationId: 'hotReload',
  request: {
    query: z.object({
      block: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Block a response until the reload is performed. This can be useful in scripting environments like CI/CD workflows.',
            example: false,
            in: 'query',
            name: 'block',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Reload gateway.',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: '', status: 'ok' },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Attempted administrative access with invalid or missing key!',
            status: 'error',
          },
        },
      },
    },
  },
})

export const getTykReloadGroupRoute = createRoute({
  method: 'get',
  path: '/tyk/reload/group',
  tags: ['Hot Reload'],
  summary: 'Hot-reload a group of Tyk nodes.',
  description:
    'To reload a whole group of Tyk nodes (without using the Dashboard or host manager). You can send an API request to a single node, this node will then send a notification through the pub/sub infrastructure to all other listening nodes (including the host manager if it is being used to manage Nginx) which will then trigger a global reload.',
  operationId: 'hotReloadGroup',
  responses: {
    200: {
      description: 'Reload the Tyk Gateway.',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: '', status: 'ok' },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Attempted administrative access with invalid or missing key!',
            status: 'error',
          },
        },
      },
    },
  },
})

export const postListenPathTykBatchRoute = createRoute({
  method: 'post',
  path: '/{listen_path}/tyk/batch',
  tags: ['Batch requests'],
  summary: 'Run batch request.',
  description: 'Endpoint to run batch request.',
  operationId: 'batch',
  request: {
    params: z.object({
      listen_path: z
        .string()
        .openapi({
          param: {
            description: 'API listen path',
            example: 'get',
            in: 'path',
            name: 'listen_path',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: BatchRequestStructureSchema,
          example: {
            requests: [
              {
                body: '',
                headers: {
                  authorization: '1dbc83b9c431649d7698faa9797e2900f',
                  'x-tyk-test': '1',
                  'x-tyk-version': '1.2',
                },
                method: 'GET',
                relative_url: 'get',
              },
              {
                body: '',
                headers: {
                  authorization: '1dbc83b9c431649d7698faa9797e2900f',
                  'x-tyk-test': '2',
                  'x-tyk-version': '1.2',
                },
                method: 'GET',
                relative_url: 'get',
              },
            ],
            suppress_parallel_execution: false,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Success.',
      content: {
        'application/json': {
          schema: z.array(BatchReplyUnitSchema),
          example: [
            {
              body: '{"message": "success"}',
              code: 200,
              headers: {
                'Access-Control-Allow-Credentials': ['true'],
                'Content-Type': ['application/json'],
              },
              relative_url: 'get',
            },
          ],
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: { message: 'Batch request malformed', status: 'error' },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Attempted administrative access with invalid or missing key!',
            status: 'error',
          },
        },
      },
    },
  },
})

export const getTykSchemaRoute = createRoute({
  method: 'get',
  path: '/tyk/schema',
  tags: ['Schema'],
  summary: 'Get OAS schema.',
  description: 'Get OAS schema definition using a version.',
  operationId: 'getSchema',
  request: {
    query: z.object({
      oasVersion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The OAS version to fetch.',
            example: '3.0.3',
            in: 'query',
            name: 'oasVersion',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OAS schema response.',
      content: {
        'application/json': {
          schema: OASSchemaResponseSchema,
          example: { message: '', status: 'Success' },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ApiStatusMessageSchema,
          example: {
            message: 'Attempted administrative access with invalid or missing key!',
            status: 'error',
          },
        },
      },
    },
    404: {
      description: 'Version not found',
      content: {
        'application/json': {
          schema: OASSchemaResponseSchema,
          example: { message: 'Schema not found for version "4"', status: 'Failed' },
        },
      },
    },
  },
})
