type HealthCheckItem = {
  componentId?: string | undefined
  componentType?: string | undefined
  output?: string | undefined
  status?: 'pass' | 'fail' | 'warn' | undefined
  time?: string | undefined
}
type HealthCheckResponse = {
  description?: string | undefined
  details?: { [x: string]: HealthCheckItem } | undefined
  output?: string | undefined
  status?: 'pass' | 'fail' | 'warn' | undefined
  version?: string | undefined
}
type ApiStatusMessage = { message?: string | undefined; status?: string | undefined }
type CORSConfig = {
  allow_credentials?: boolean | undefined
  allowed_headers?: (string[] | null) | undefined
  allowed_methods?: (string[] | null) | undefined
  allowed_origins?: (string[] | null) | undefined
  debug?: boolean | undefined
  enable?: boolean | undefined
  exposed_headers?: (string[] | null) | undefined
  max_age?: number | undefined
  options_passthrough?: boolean | undefined
}
type AnalyticsPluginConfig = {
  enable?: boolean | undefined
  func_name?: string | undefined
  plugin_path?: string | undefined
}
type SignatureConfig = {
  algorithm?: string | undefined
  allowed_clock_skew?: number | undefined
  error_code?: number | undefined
  error_message?: string | undefined
  header?: string | undefined
  param_name?: string | undefined
  secret?: string | undefined
  use_param?: boolean | undefined
}
type AuthConfig = {
  auth_header_name?: string | undefined
  cookie_name?: string | undefined
  disable_header?: boolean | undefined
  name?: string | undefined
  param_name?: string | undefined
  signature?: SignatureConfig | undefined
  use_certificate?: boolean | undefined
  use_cookie?: boolean | undefined
  use_param?: boolean | undefined
  validate_signature?: boolean | undefined
}
type AuthProviderMeta = {
  meta?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
  name?: string | undefined
  storage_engine?: string | undefined
}
type CacheOptions = {
  cache_all_safe_requests?: boolean | undefined
  cache_by_headers?: (string[] | null) | undefined
  cache_control_ttl_header?: string | undefined
  cache_response_codes?: (number[] | null) | undefined
  cache_timeout?: bigint | undefined
  enable_cache?: boolean | undefined
  enable_upstream_cache_control?: boolean | undefined
}
type MiddlewareDefinition = {
  disabled?: boolean | undefined
  name?: string | undefined
  path?: string | undefined
  raw_body_only?: boolean | undefined
  require_session?: boolean | undefined
}
type MiddlewareIdExtractor = {
  disabled?: boolean | undefined
  extract_from?: string | undefined
  extract_with?: string | undefined
  extractor_config?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
}
type MiddlewareSection = {
  auth_check?: MiddlewareDefinition | undefined
  driver?: string | undefined
  id_extractor?: MiddlewareIdExtractor | undefined
  post?: (MiddlewareDefinition[] | null) | undefined
  post_key_auth?: (MiddlewareDefinition[] | null) | undefined
  pre?: (MiddlewareDefinition[] | null) | undefined
  response?: (MiddlewareDefinition[] | null) | undefined
}
type VersionDefinition = {
  default?: string | undefined
  enabled?: boolean | undefined
  fallback_to_default?: boolean | undefined
  key?: string | undefined
  location?: string | undefined
  name?: string | undefined
  strip_path?: boolean | undefined
  strip_versioning_data?: boolean | undefined
  url_versioning_pattern?: string | undefined
  versions?: ({ [x: string]: string } | null) | undefined
}
type EventHandlerTriggerConfig = {
  handler_meta?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
  handler_name?: string | undefined
}
type EventHandlerMetaConfig = {
  events?: ({ [x: string]: EventHandlerTriggerConfig[] } | null) | undefined
}
type IntrospectionCache = { enabled?: boolean | undefined; timeout?: bigint | undefined }
type Introspection = {
  cache?: IntrospectionCache | undefined
  client_id?: string | undefined
  client_secret?: string | undefined
  enabled?: boolean | undefined
  identity_base_field?: string | undefined
  url?: string | undefined
}
type JWTValidation = {
  enabled?: boolean | undefined
  expires_at_validation_skew?: number | undefined
  identity_base_field?: string | undefined
  issued_at_validation_skew?: number | undefined
  not_before_validation_skew?: number | undefined
  signing_method?: string | undefined
  source?: string | undefined
}
type Provider = { introspection?: Introspection | undefined; jwt?: JWTValidation | undefined }
type ExternalOAuth = { enabled?: boolean | undefined; providers?: (Provider[] | null) | undefined }
type GlobalRateLimit = {
  disabled?: boolean | undefined
  per?: number | undefined
  rate?: number | undefined
}
type GraphQLTypeFields = { fields?: (string[] | null) | undefined; type?: string | undefined }
type GraphQLEngineDataSource = {
  config?: { [x: string]: unknown } | undefined
  internal?: boolean | undefined
  kind?: string | undefined
  name?: string | undefined
  root_fields?: (GraphQLTypeFields[] | null) | undefined
}
type GraphQLFieldConfig = {
  disable_default_mapping?: boolean | undefined
  field_name?: string | undefined
  path?: (string[] | null) | undefined
  type_name?: string | undefined
}
type UDGGlobalHeader = { key?: string | undefined; value?: string | undefined }
type GraphQLEngineConfig = {
  data_sources?: (GraphQLEngineDataSource[] | null) | undefined
  field_configs?: (GraphQLFieldConfig[] | null) | undefined
  global_headers?: (UDGGlobalHeader[] | null) | undefined
}
type GraphQLIntrospectionConfig = { disabled?: boolean | undefined }
type GraphQLPlayground = { enabled?: boolean | undefined; path?: string | undefined }
type GraphQLProxyFeaturesConfig = { use_immutable_headers?: boolean | undefined }
type RequestHeadersRewriteConfig = { remove?: boolean | undefined; value?: string | undefined }
type GraphQLResponseExtensions = { on_error_forwarding?: boolean | undefined }
type GraphQLProxyConfig = {
  auth_headers?: ({ [x: string]: string } | null) | undefined
  features?: GraphQLProxyFeaturesConfig | undefined
  request_headers?: ({ [x: string]: string } | null) | undefined
  request_headers_rewrite?: ({ [x: string]: RequestHeadersRewriteConfig } | null) | undefined
  subscription_type?: string | undefined
  use_response_extensions?: GraphQLResponseExtensions | undefined
}
type GraphQLSubgraphConfig = { sdl?: string | undefined }
type GraphQLSubgraphEntity = {
  api_id?: string | undefined
  headers?: ({ [x: string]: string } | null) | undefined
  name?: string | undefined
  sdl?: string | undefined
  subscription_type?: string | undefined
  url?: string | undefined
}
type GraphQLSupergraphConfig = {
  disable_query_batching?: boolean | undefined
  global_headers?: ({ [x: string]: string } | null) | undefined
  merged_sdl?: string | undefined
  subgraphs?: (GraphQLSubgraphEntity[] | null) | undefined
  updated_at?: (string | null) | undefined
}
type DatasourceSourceConfig = {
  data_source_config?: { [x: string]: unknown } | undefined
  kind?: string | undefined
}
type DatasourceMappingConfiguration = { disabled?: boolean | undefined; path?: string | undefined }
type DatasourceTypeFieldConfiguration = {
  data_source?: DatasourceSourceConfig | undefined
  field_name?: string | undefined
  mapping?: DatasourceMappingConfiguration | undefined
  type_name?: string | undefined
}
type GraphQLConfig = {
  enabled?: boolean | undefined
  engine?: GraphQLEngineConfig | undefined
  execution_mode?: 'proxyOnly' | 'executionEngine' | 'subgraph' | 'supergraph' | '' | undefined
  introspection?: GraphQLIntrospectionConfig | undefined
  last_schema_update?: (string | null) | undefined
  playground?: GraphQLPlayground | undefined
  proxy?: GraphQLProxyConfig | undefined
  schema?: string | undefined
  subgraph?: GraphQLSubgraphConfig | undefined
  supergraph?: GraphQLSupergraphConfig | undefined
  type_field_configurations?: (DatasourceTypeFieldConfiguration[] | null) | undefined
  version?: '1' | '2' | '' | undefined
}
type NotificationsManager = {
  oauth_on_keychange_url?: string | undefined
  shared_secret?: string | undefined
}
type OIDProviderConfig = {
  client_ids?: ({ [x: string]: string } | null) | undefined
  issuer?: string | undefined
}
type OpenIDOptions = {
  providers?: (OIDProviderConfig[] | null) | undefined
  segregate_by_client?: boolean | undefined
}
type ServiceDiscoveryConfiguration = {
  cache_disabled?: boolean | undefined
  cache_timeout?: number | undefined
  data_path?: string | undefined
  endpoint_returns_list?: boolean | undefined
  parent_data_path?: string | undefined
  port_data_path?: string | undefined
  query_endpoint?: string | undefined
  target_path?: string | undefined
  use_discovery_service?: boolean | undefined
  use_nested_query?: boolean | undefined
  use_target_list?: boolean | undefined
}
type ProxyConfig = {
  check_host_against_uptime_tests?: boolean | undefined
  disable_strip_slash?: boolean | undefined
  enable_load_balancing?: boolean | undefined
  listen_path?: string | undefined
  preserve_host_header?: boolean | undefined
  service_discovery?: ServiceDiscoveryConfiguration | undefined
  strip_listen_path?: boolean | undefined
  target_list?: (string[] | null) | undefined
  target_url?: string | undefined
  transport?:
    | {
        proxy_url?: string | undefined
        ssl_ciphers?: (string[] | null) | undefined
        ssl_force_common_name_check?: boolean | undefined
        ssl_insecure_skip_verify?: boolean | undefined
        ssl_max_version?: number | undefined
        ssl_min_version?: number | undefined
      }
    | undefined
}
type RequestSigningMeta = {
  algorithm?: string | undefined
  certificate_id?: string | undefined
  header_list?: (string[] | null) | undefined
  is_enabled?: boolean | undefined
  key_id?: string | undefined
  secret?: string | undefined
  signature_header?: string | undefined
}
type ResponseProcessor = {
  name?: string | undefined
  options?: { [x: string]: unknown } | undefined
}
type ScopeClaim = {
  scope_claim_name?: string | undefined
  scope_to_policy?: { [x: string]: string } | undefined
}
type Scopes = { jwt?: ScopeClaim | undefined; oidc?: ScopeClaim | undefined }
type SessionProviderMeta = {
  meta?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
  name?: string | undefined
  storage_engine?: string | undefined
}
type CheckCommand = { message?: string | undefined; name?: string | undefined }
type HostCheckObject = {
  body?: string | undefined
  commands?: (CheckCommand[] | null) | undefined
  enable_proxy_protocol?: boolean | undefined
  headers?: ({ [x: string]: string } | null) | undefined
  method?: string | undefined
  protocol?: string | undefined
  timeout?: number | undefined
  url?: string | undefined
}
type UptimeTestsConfig = {
  expire_utime_after?: number | undefined
  recheck_wait?: number | undefined
  service_discovery?: ServiceDiscoveryConfiguration | undefined
}
type UptimeTests = {
  check_list?: (HostCheckObject[] | null) | undefined
  config?: UptimeTestsConfig | undefined
}
type CacheMeta = {
  cache_key_regex?: string | undefined
  cache_response_codes?: (number[] | null) | undefined
  disabled?: boolean | undefined
  method?: string | undefined
  path?: string | undefined
  timeout?: bigint | undefined
}
type EndpointMethodMeta = {
  action?: 'no_action' | 'reply' | undefined
  code?: number | undefined
  data?: string | undefined
  headers?: ({ [x: string]: string } | null) | undefined
}
type EndPointMeta = {
  disabled?: boolean | undefined
  ignore_case?: boolean | undefined
  method?: string | undefined
  method_actions?: { [x: string]: EndpointMethodMeta } | undefined
  path?: string | undefined
}
type CircuitBreakerMeta = {
  disable_half_open_state?: boolean | undefined
  disabled?: boolean | undefined
  method?: string | undefined
  path?: string | undefined
  return_to_service_after?: number | undefined
  samples?: bigint | undefined
  threshold_percent?: number | undefined
}
type TrackEndpointMeta = {
  disabled?: boolean | undefined
  method?: string | undefined
  path?: string | undefined
}
type GoPluginMeta = {
  disabled?: boolean | undefined
  func_name?: string | undefined
  method?: string | undefined
  path?: string | undefined
  plugin_path?: string | undefined
}
type HardTimeoutMeta = {
  disabled?: boolean | undefined
  method?: string | undefined
  path?: string | undefined
  timeout?: number | undefined
}
type InternalMeta = {
  disabled?: boolean | undefined
  method?: string | undefined
  path?: string | undefined
}
type MethodTransformMeta = {
  disabled?: boolean | undefined
  method?: string | undefined
  path?: string | undefined
  to_method?: string | undefined
}
type MockResponseMeta = {
  body?: string | undefined
  code?: number | undefined
  disabled?: boolean | undefined
  headers?: ({ [x: string]: string } | null) | undefined
  ignore_case?: boolean | undefined
  method?: string | undefined
  path?: string | undefined
}
type PersistGraphQLMeta = {
  method?: string | undefined
  operation?: string | undefined
  path?: string | undefined
  variables?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
}
type RateLimitMeta = {
  disabled?: boolean | undefined
  method?: string | undefined
  path?: string | undefined
  per?: number | undefined
  rate?: number | undefined
}
type RequestSizeMeta = {
  disabled?: boolean | undefined
  method?: string | undefined
  path?: string | undefined
  size_limit?: bigint | undefined
}
type TemplateData = {
  enable_session?: boolean | undefined
  input_type?: 'json' | 'xml' | undefined
  template_mode?: 'blob' | 'file' | undefined
  template_source?: string | undefined
}
type TemplateMeta = {
  disabled?: boolean | undefined
  method?: string | undefined
  path?: string | undefined
  template_data?: TemplateData | undefined
}
type HeaderInjectionMeta = {
  act_on?: boolean | undefined
  add_headers?: ({ [x: string]: string } | null) | undefined
  delete_headers?: (string[] | null) | undefined
  disabled?: boolean | undefined
  method?: string | undefined
  path?: string | undefined
}
type TransformJQMeta = {
  filter?: string | undefined
  method?: string | undefined
  path?: string | undefined
}
type StringRegexMap = { match_rx?: string | undefined; reverse?: boolean | undefined }
type RoutingTriggerOptions = {
  header_matches?: ({ [x: string]: StringRegexMap } | null) | undefined
  path_part_matches?: ({ [x: string]: StringRegexMap } | null) | undefined
  payload_matches?: StringRegexMap | undefined
  query_val_matches?: ({ [x: string]: StringRegexMap } | null) | undefined
  request_context_matches?: ({ [x: string]: StringRegexMap } | null) | undefined
  session_meta_matches?: ({ [x: string]: StringRegexMap } | null) | undefined
}
type RoutingTrigger = {
  on?: 'all' | 'any' | undefined
  options?: RoutingTriggerOptions | undefined
  rewrite_to?: string | undefined
}
type URLRewriteMeta = {
  disabled?: boolean | undefined
  match_pattern?: string | undefined
  method?: string | undefined
  path?: string | undefined
  rewrite_to?: string | undefined
  triggers?: (RoutingTrigger[] | null) | undefined
}
type ValidatePathMeta = {
  disabled?: boolean | undefined
  error_response_code?: number | undefined
  method?: string | undefined
  path?: string | undefined
  schema?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
  schema_b64?: string | undefined
}
type ValidateRequestMeta = {
  enabled?: boolean | undefined
  error_response_code?: number | undefined
  method?: string | undefined
  path?: string | undefined
}
type VirtualMeta = {
  disabled?: boolean | undefined
  function_source_type?: 'blob' | 'file' | undefined
  function_source_uri?: string | undefined
  method?: string | undefined
  path?: string | undefined
  proxy_on_error?: boolean | undefined
  response_function_name?: string | undefined
  use_session?: boolean | undefined
}
type ExtendedPathsSet = {
  advance_cache_config?: CacheMeta[] | undefined
  black_list?: EndPointMeta[] | undefined
  cache?: string[] | undefined
  circuit_breakers?: CircuitBreakerMeta[] | undefined
  do_not_track_endpoints?: TrackEndpointMeta[] | undefined
  go_plugin?: GoPluginMeta[] | undefined
  hard_timeouts?: HardTimeoutMeta[] | undefined
  ignored?: EndPointMeta[] | undefined
  internal?: InternalMeta[] | undefined
  method_transforms?: MethodTransformMeta[] | undefined
  mock_response?: MockResponseMeta[] | undefined
  persist_graphql?: (PersistGraphQLMeta[] | null) | undefined
  rate_limit?: (RateLimitMeta[] | null) | undefined
  size_limits?: RequestSizeMeta[] | undefined
  track_endpoints?: TrackEndpointMeta[] | undefined
  transform?: TemplateMeta[] | undefined
  transform_headers?: HeaderInjectionMeta[] | undefined
  transform_jq?: TransformJQMeta[] | undefined
  transform_jq_response?: TransformJQMeta[] | undefined
  transform_response?: TemplateMeta[] | undefined
  transform_response_headers?: HeaderInjectionMeta[] | undefined
  url_rewrites?: URLRewriteMeta[] | undefined
  validate_json?: ValidatePathMeta[] | undefined
  validate_request?: ValidateRequestMeta[] | undefined
  virtual?: VirtualMeta[] | undefined
  white_list?: EndPointMeta[] | undefined
}
type VersionInfo = {
  expires?: string | undefined
  extended_paths?: ExtendedPathsSet | undefined
  global_headers?: ({ [x: string]: string } | null) | undefined
  global_headers_disabled?: boolean | undefined
  global_headers_remove?: (string[] | null) | undefined
  global_response_headers?: ({ [x: string]: string } | null) | undefined
  global_response_headers_disabled?: boolean | undefined
  global_response_headers_remove?: (string[] | null) | undefined
  global_size_limit?: bigint | undefined
  ignore_endpoint_case?: boolean | undefined
  name?: string | undefined
  override_target?: string | undefined
  paths?:
    | {
        black_list?: (string[] | null) | undefined
        ignored?: (string[] | null) | undefined
        white_list?: (string[] | null) | undefined
      }
    | undefined
  use_extended_paths?: boolean | undefined
}
type VersionData = {
  default_version?: string | undefined
  not_versioned?: boolean | undefined
  versions?: ({ [x: string]: VersionInfo } | null) | undefined
}
type ErrorMatcher = {
  body_field?: string | undefined
  body_value?: string | undefined
  flag?: string | undefined
  message_pattern?: string | undefined
}
type ErrorResponse = {
  body?: string | undefined
  headers?: ({ [x: string]: string } | null) | undefined
  message?: string | undefined
  status_code?: number | undefined
  template?: string | undefined
}
type ErrorOverride = { match?: ErrorMatcher | undefined; response?: ErrorResponse | undefined }
type APIDefinition = {
  CORS?: CORSConfig | undefined
  active?: boolean | undefined
  allowed_ips?: (string[] | null) | undefined
  analytics_plugin?: AnalyticsPluginConfig | undefined
  api_id?: string | undefined
  auth?: AuthConfig | undefined
  auth_configs?: ({ [x: string]: AuthConfig } | null) | undefined
  auth_provider?: AuthProviderMeta | undefined
  base_identity_provided_by?: string | undefined
  basic_auth?:
    | {
        body_password_regexp?: string | undefined
        body_user_regexp?: string | undefined
        cache_ttl?: number | undefined
        disable_caching?: boolean | undefined
        extract_from_body?: boolean | undefined
      }
    | undefined
  blacklisted_ips?: (string[] | null) | undefined
  cache_options?: CacheOptions | undefined
  certificate_pinning_disabled?: boolean | undefined
  certificates?: (string[] | null) | undefined
  client_certificates?: (string[] | null) | undefined
  config_data?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
  config_data_disabled?: boolean | undefined
  custom_middleware?: MiddlewareSection | undefined
  custom_middleware_bundle?: string | undefined
  custom_middleware_bundle_disabled?: boolean | undefined
  custom_plugin_auth_enabled?: boolean | undefined
  definition?: VersionDefinition | undefined
  detailed_tracing?: boolean | undefined
  disable_quota?: boolean | undefined
  disable_rate_limit?: boolean | undefined
  do_not_track?: boolean | undefined
  domain?: string | undefined
  domain_disabled?: boolean | undefined
  dont_set_quota_on_create?: boolean | undefined
  enable_batch_request_support?: boolean | undefined
  enable_context_vars?: boolean | undefined
  enable_coprocess_auth?: boolean | undefined
  enable_detailed_recording?: boolean | undefined
  enable_ip_blacklisting?: boolean | undefined
  enable_ip_whitelisting?: boolean | undefined
  enable_jwt?: boolean | undefined
  enable_proxy_protocol?: boolean | undefined
  enable_signature_checking?: boolean | undefined
  event_handlers?: EventHandlerMetaConfig | undefined
  expiration?: string | undefined
  expire_analytics_after?: number | undefined
  external_oauth?: ExternalOAuth | undefined
  global_rate_limit?: GlobalRateLimit | undefined
  graphql?: GraphQLConfig | undefined
  hmac_allowed_algorithms?: (string[] | null) | undefined
  hmac_allowed_clock_skew?: number | undefined
  id?: string | undefined
  idp_client_id_mapping_disabled?: boolean | undefined
  internal?: boolean | undefined
  is_oas?: boolean | undefined
  jwt_client_base_field?: string | undefined
  jwt_default_policies?: (string[] | null) | undefined
  jwt_expires_at_validation_skew?: number | undefined
  jwt_identity_base_field?: string | undefined
  jwt_issued_at_validation_skew?: number | undefined
  jwt_not_before_validation_skew?: number | undefined
  jwt_policy_field_name?: string | undefined
  jwt_scope_claim_name?: string | undefined
  jwt_scope_to_policy_mapping?: ({ [x: string]: string } | null) | undefined
  jwt_signing_method?: string | undefined
  jwt_skip_kid?: boolean | undefined
  jwt_source?: string | undefined
  listen_port?: number | undefined
  name?: string | undefined
  notifications?: NotificationsManager | undefined
  oauth_meta?:
    | {
        allowed_access_types?: (string[] | null) | undefined
        allowed_authorize_types?: (string[] | null) | undefined
        auth_login_redirect?: string | undefined
      }
    | undefined
  openid_options?: OpenIDOptions | undefined
  org_id?: string | undefined
  pinned_public_keys?: ({ [x: string]: string } | null) | undefined
  protocol?: string | undefined
  proxy?: ProxyConfig | undefined
  request_signing?: RequestSigningMeta | undefined
  response_processors?: (ResponseProcessor[] | null) | undefined
  scopes?: Scopes | undefined
  session_lifetime?: number | undefined
  session_lifetime_respects_key_expiration?: boolean | undefined
  session_provider?: SessionProviderMeta | undefined
  slug?: string | undefined
  strip_auth_data?: boolean | undefined
  tag_headers?: (string[] | null) | undefined
  tags?: (string[] | null) | undefined
  tags_disabled?: boolean | undefined
  upstream_certificates?: ({ [x: string]: string } | null) | undefined
  upstream_certificates_disabled?: boolean | undefined
  uptime_tests?: UptimeTests | undefined
  use_basic_auth?: boolean | undefined
  use_go_plugin_auth?: boolean | undefined
  use_keyless?: boolean | undefined
  use_mutual_tls_auth?: boolean | undefined
  use_oauth2?: boolean | undefined
  use_openid?: boolean | undefined
  use_standard_auth?: boolean | undefined
  version_data?: VersionData | undefined
  error_overrides?: ({ [x: string]: ErrorOverride[] } | null) | undefined
  error_overrides_disabled?: boolean | undefined
}
type ApiModifyKeySuccess = {
  action?: string | undefined
  key?: string | undefined
  key_hash?: string | undefined
  status?: string | undefined
}
type VersionMeta = {
  expirationDate?: string | undefined
  id?: string | undefined
  internal?: boolean | undefined
  isDefaultVersion?: boolean | undefined
  name?: string | undefined
  versionName?: string | undefined
}
type VersionMetas = { apis?: (VersionMeta[] | null) | undefined; status?: string | undefined }
type State = { active?: boolean | undefined; internal?: boolean | undefined }
type VersionToID = { id?: string | undefined; name?: string | undefined }
type Versioning = {
  default?: string | undefined
  enabled?: boolean | undefined
  fallbackToDefault?: boolean | undefined
  key?: string | undefined
  location?: string | undefined
  name?: string | undefined
  stripVersioningData?: boolean | undefined
  urlVersioningPattern?: string | undefined
  versions?: (VersionToID[] | null) | undefined
}
type Info = {
  dbId?: string | undefined
  expiration?: string | undefined
  id?: string | undefined
  name?: string | undefined
  orgId?: string | undefined
  state?: State | undefined
  versioning?: Versioning | undefined
}
type Cache = {
  cacheAllSafeRequests?: boolean | undefined
  cacheByHeaders?: string[] | undefined
  cacheResponseCodes?: number[] | undefined
  controlTTLHeaderName?: string | undefined
  enableUpstreamCacheControl?: boolean | undefined
  enabled?: boolean | undefined
  timeout?: number | undefined
}
type ContextVariables = { enabled?: boolean | undefined }
type CORS = {
  allowCredentials?: boolean | undefined
  allowedHeaders?: string[] | undefined
  allowedMethods?: string[] | undefined
  allowedOrigins?: string[] | undefined
  debug?: boolean | undefined
  enabled?: boolean | undefined
  exposedHeaders?: string[] | undefined
  maxAge?: number | undefined
  optionsPassthrough?: boolean | undefined
}
type PluginBundle = { enabled?: boolean | undefined; path?: string | undefined }
type PluginConfigData = {
  enabled?: boolean | undefined
  value?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
}
type PluginConfig = {
  bundle?: PluginBundle | undefined
  data?: PluginConfigData | undefined
  driver?: string | undefined
}
type CustomPlugin = {
  enabled?: boolean | undefined
  functionName?: string | undefined
  path?: string | undefined
  rawBodyOnly?: boolean | undefined
  requireSession?: boolean | undefined
}
type CustomPlugins = CustomPlugin[]
type PostAuthenticationPlugin = { plugins?: CustomPlugins | undefined }
type PostPlugin = { plugins?: CustomPlugins | undefined }
type PrePlugin = { plugins?: CustomPlugins | undefined }
type ResponsePlugin = { plugins?: CustomPlugins | undefined }
type TrafficLogs = { enabled?: boolean | undefined }
type Header = { name?: string | undefined; value?: string | undefined }
type Headers = Header[]
type TransformHeaders = {
  add?: Headers | undefined
  enabled?: boolean | undefined
  remove?: string[] | undefined
}
type Global = {
  cache?: Cache | undefined
  contextVariables?: ContextVariables | undefined
  cors?: CORS | undefined
  pluginConfig?: PluginConfig | undefined
  postAuthenticationPlugin?: PostAuthenticationPlugin | undefined
  postAuthenticationPlugins?: CustomPlugins | undefined
  postPlugin?: PostPlugin | undefined
  postPlugins?: CustomPlugins | undefined
  prePlugin?: PrePlugin | undefined
  prePlugins?: CustomPlugins | undefined
  responsePlugin?: ResponsePlugin | undefined
  responsePlugins?: CustomPlugins | undefined
  trafficLogs?: TrafficLogs | undefined
  transformRequestHeaders?: TransformHeaders | undefined
  transformResponseHeaders?: TransformHeaders | undefined
}
type Allowance = { enabled?: boolean | undefined; ignoreCase?: boolean | undefined }
type CachePlugin = {
  cacheByRegex?: string | undefined
  cacheResponseCodes?: number[] | undefined
  enabled?: boolean | undefined
  timeout?: number | undefined
}
type CircuitBreaker = {
  coolDownPeriod?: number | undefined
  enabled?: boolean | undefined
  halfOpenStateEnabled?: boolean | undefined
  sampleSize?: number | undefined
  threshold?: number | undefined
}
type TrackEndpoint = { enabled?: boolean | undefined }
type EnforceTimeout = { enabled?: boolean | undefined; value?: number | undefined }
type Internal = { enabled?: boolean | undefined }
type FromOASExamples = {
  code?: number | undefined
  contentType?: string | undefined
  enabled?: boolean | undefined
  exampleName?: string | undefined
}
type MockResponse = {
  body?: string | undefined
  code?: number | undefined
  enabled?: boolean | undefined
  fromOASExamples?: FromOASExamples | undefined
  headers?: Headers | undefined
}
type EndpointPostPlugin = {
  enabled?: boolean | undefined
  functionName?: string | undefined
  name?: string | undefined
  path?: string | undefined
}
type EndpointPostPlugins = EndpointPostPlugin[]
type RateLimitEndpoint = {
  enabled?: boolean | undefined
  per?: number | undefined
  rate?: number | undefined
}
type RequestSizeLimit = { enabled?: boolean | undefined; value?: number | undefined }
type TransformBody = {
  body?: string | undefined
  enabled?: boolean | undefined
  format?: string | undefined
  path?: string | undefined
}
type TransformRequestMethod = { enabled?: boolean | undefined; toMethod?: string | undefined }
type URLRewriteRule = {
  in?: string | undefined
  name?: string | undefined
  negate?: boolean | undefined
  pattern?: string | undefined
}
type URLRewriteTrigger = {
  condition?: string | undefined
  rewriteTo?: string | undefined
  rules?: URLRewriteRule[] | undefined
}
type URLRewrite = {
  enabled?: boolean | undefined
  pattern?: string | undefined
  rewriteTo?: string | undefined
  triggers?: URLRewriteTrigger[] | undefined
}
type ValidateRequest = { enabled?: boolean | undefined; errorResponseCode?: number | undefined }
type VirtualEndpoint = {
  body?: string | undefined
  enabled?: boolean | undefined
  functionName?: string | undefined
  name?: string | undefined
  path?: string | undefined
  proxyOnError?: boolean | undefined
  requireSession?: boolean | undefined
}
type Operation = {
  allow?: Allowance | undefined
  block?: Allowance | undefined
  cache?: CachePlugin | undefined
  circuitBreaker?: CircuitBreaker | undefined
  doNotTrackEndpoint?: TrackEndpoint | undefined
  enforceTimeout?: EnforceTimeout | undefined
  ignoreAuthentication?: Allowance | undefined
  internal?: Internal | undefined
  mockResponse?: MockResponse | undefined
  postPlugins?: EndpointPostPlugins | undefined
  rateLimit?: RateLimitEndpoint | undefined
  requestSizeLimit?: RequestSizeLimit | undefined
  trackEndpoint?: TrackEndpoint | undefined
  transformRequestBody?: TransformBody | undefined
  transformRequestHeaders?: TransformHeaders | undefined
  transformRequestMethod?: TransformRequestMethod | undefined
  transformResponseBody?: TransformBody | undefined
  transformResponseHeaders?: TransformHeaders | undefined
  urlRewrite?: URLRewrite | undefined
  validateRequest?: ValidateRequest | undefined
  virtualEndpoint?: VirtualEndpoint | undefined
}
type Operations = { [x: string]: Operation }
type Middleware = { global?: Global | undefined; operations?: Operations | undefined }
type AuthSource = { enabled?: boolean | undefined; name?: string | undefined }
type AuthSources = {
  cookie?: AuthSource | undefined
  header?: AuthSource | undefined
  query?: AuthSource | undefined
}
type IDExtractorConfig = {
  formParamName?: string | undefined
  headerName?: string | undefined
  regexp?: string | undefined
  regexpMatchIndex?: number | undefined
  xPathExp?: string | undefined
}
type IDExtractor = {
  config?: IDExtractorConfig | undefined
  enabled?: boolean | undefined
  source?: string | undefined
  with?: string | undefined
}
type AuthenticationPlugin = {
  enabled?: boolean | undefined
  functionName?: string | undefined
  idExtractor?: IDExtractor | undefined
  path?: string | undefined
  rawBodyOnly?: boolean | undefined
}
type CustomPluginAuthentication = {
  AuthSources?: AuthSources | undefined
  config?: AuthenticationPlugin | undefined
  enabled?: boolean | undefined
}
type HMAC = {
  AuthSources?: AuthSources | undefined
  allowedAlgorithms?: string[] | undefined
  allowedClockSkew?: number | undefined
  enabled?: boolean | undefined
}
type ClientToPolicy = { clientId?: string | undefined; policyId?: string | undefined }
type ProviderType2 = {
  clientToPolicyMapping?: ClientToPolicy[] | undefined
  issuer?: string | undefined
}
type ScopeToPolicy = { policyId?: string | undefined; scope?: string | undefined }
type ScopesType2 = {
  claimName?: string | undefined
  scopeToPolicyMapping?: ScopeToPolicy[] | undefined
}
type OIDC = {
  AuthSources?: AuthSources | undefined
  enabled?: boolean | undefined
  providers?: ProviderType2[] | undefined
  scopes?: ScopesType2 | undefined
  segregateByClientId?: boolean | undefined
}
type SecuritySchemes = { [x: string]: { [x: string]: unknown } }
type Authentication = {
  baseIdentityProvider?: string | undefined
  custom?: CustomPluginAuthentication | undefined
  enabled?: boolean | undefined
  hmac?: HMAC | undefined
  oidc?: OIDC | undefined
  securitySchemes?: SecuritySchemes | undefined
  stripAuthorizationData?: boolean | undefined
}
type ClientCertificates = {
  allowlist?: (string[] | null) | undefined
  enabled?: boolean | undefined
}
type Domain = {
  certificates?: string[] | undefined
  enabled?: boolean | undefined
  name?: string | undefined
}
type DetailedActivityLogs = { enabled?: boolean | undefined }
type DetailedTracing = { enabled?: boolean | undefined }
type EventHandler = {
  enabled?: boolean | undefined
  id?: string | undefined
  name?: string | undefined
  trigger?: string | undefined
  type?: string | undefined
}
type EventHandlers = EventHandler[]
type GatewayTags = { enabled?: boolean | undefined; tags?: (string[] | null) | undefined }
type ListenPath = { strip?: boolean | undefined; value?: string | undefined }
type Server = {
  authentication?: Authentication | undefined
  clientCertificates?: ClientCertificates | undefined
  customDomain?: Domain | undefined
  detailedActivityLogs?: DetailedActivityLogs | undefined
  detailedTracing?: DetailedTracing | undefined
  eventHandlers?: EventHandlers | undefined
  gatewayTags?: GatewayTags | undefined
  listenPath?: ListenPath | undefined
}
type PinnedPublicKey = { domain?: string | undefined; publicKeys?: (string[] | null) | undefined }
type PinnedPublicKeys = PinnedPublicKey[] | null
type CertificatePinning = {
  domainToPublicKeysMapping?: PinnedPublicKeys | undefined
  enabled?: boolean | undefined
}
type DomainToCertificate = { certificate?: string | undefined; domain?: string | undefined }
type MutualTLS = {
  domainToCertificateMapping?: (DomainToCertificate[] | null) | undefined
  enabled?: boolean | undefined
}
type RateLimit = {
  enabled?: boolean | undefined
  per?: number | undefined
  rate?: number | undefined
}
type ServiceDiscoveryCache = { enabled?: boolean | undefined; timeout?: number | undefined }
type ServiceDiscovery = {
  cache?: ServiceDiscoveryCache | undefined
  cacheTimeout?: number | undefined
  dataPath?: string | undefined
  enabled?: boolean | undefined
  endpointReturnsList?: boolean | undefined
  parentDataPath?: string | undefined
  portDataPath?: string | undefined
  queryEndpoint?: string | undefined
  targetPath?: string | undefined
  useNestedQuery?: boolean | undefined
  useTargetList?: boolean | undefined
}
type Test = { serviceDiscovery?: ServiceDiscovery | undefined }
type Upstream = {
  certificatePinning?: CertificatePinning | undefined
  mutualTLS?: MutualTLS | undefined
  rateLimit?: RateLimit | undefined
  serviceDiscovery?: ServiceDiscovery | undefined
  test?: Test | undefined
  url?: string | undefined
}
type XTykAPIGateway = {
  info?: Info | undefined
  middleware?: Middleware | undefined
  server?: Server | undefined
  upstream?: Upstream | undefined
}
type BooleanQueryParam = boolean
type CertsCertificateBasics = {
  dns_names?: (string[] | null) | undefined
  has_private?: boolean | undefined
  id?: string | undefined
  is_ca?: boolean | undefined
  issuer_cn?: string | undefined
  not_after?: string | undefined
  not_before?: string | undefined
  subject_cn?: string | undefined
}
type APIAllCertificateBasics = { certs?: (CertsCertificateBasics[] | null) | undefined }
type APIAllCertificates = { certs?: (string[] | null) | undefined }
type APICertificateStatusMessage = {
  id?: string | undefined
  message?: string | undefined
  status?: string | undefined
}
type PkixName = { [x: string]: unknown }
type CertsCertificateMeta = {
  dns_names?: string[] | undefined
  fingerprint?: string | undefined
  has_private?: boolean | undefined
  id?: string | undefined
  is_ca?: boolean | undefined
  issuer?: PkixName | undefined
  not_after?: string | undefined
  not_before?: string | undefined
  subject?: PkixName | undefined
}
type TraceRequest = { [x: string]: unknown } | { [x: string]: unknown }
type TraceResponse = {
  logs?: string | undefined
  message?: string | undefined
  response?: string | undefined
}
type ApiAllKeys = { keys?: (string[] | null) | undefined }
type GraphqlType = { fields?: (string[] | null) | undefined; name?: string | undefined }
type BodyFieldMatch = {
  match_rx?: string | undefined
  path?: string | undefined
  reverse?: boolean | undefined
}
type AccessConditionOptions = {
  body_field_matches?: (BodyFieldMatch[] | null) | undefined
  header_matches?: ({ [x: string]: StringRegexMap } | null) | undefined
  path_part_matches?: ({ [x: string]: StringRegexMap } | null) | undefined
  payload_matches?: StringRegexMap | undefined
  query_val_matches?: ({ [x: string]: StringRegexMap } | null) | undefined
  request_context_matches?: ({ [x: string]: StringRegexMap } | null) | undefined
  session_meta_matches?: ({ [x: string]: StringRegexMap } | null) | undefined
}
type AccessCondition = {
  on?: 'all' | 'any' | '' | undefined
  options?: AccessConditionOptions | undefined
}
type AccessSpec = {
  conditions?: (AccessCondition[] | null) | undefined
  methods?: (string[] | null) | undefined
  url?: string | undefined
}
type RateLimitSmoothing = {
  delay?: number | undefined
  enabled?: boolean | undefined
  step?: number | undefined
  threshold?: number | undefined
  trigger?: number | undefined
} | null
type RateLimitType2 = {
  per?: number | undefined
  rate?: number | undefined
  smoothing?: RateLimitSmoothing | undefined
}
type EndpointMethod = { limit?: RateLimitType2 | undefined; name?: string | undefined }
type EndpointMethods = EndpointMethod[]
type Endpoint = { methods?: EndpointMethods | undefined; path?: string | undefined }
type Endpoints = Endpoint[]
type FieldLimits = { max_query_depth?: number | undefined }
type FieldAccessDefinition = {
  field_name?: string | undefined
  limits?: FieldLimits | undefined
  type_name?: string | undefined
}
type APILimit = {
  max_query_depth?: number | undefined
  per?: number | undefined
  quota_max?: number | undefined
  quota_remaining?: number | undefined
  quota_renewal_rate?: number | undefined
  quota_renews?: number | undefined
  rate?: number | undefined
  smoothing?: RateLimitSmoothing | undefined
  throttle_interval?: number | undefined
  throttle_retry_limit?: number | undefined
}
type AccessDefinition = {
  allowance_scope?: string | undefined
  allowed_types?: (GraphqlType[] | null) | undefined
  allowed_urls?: (AccessSpec[] | null) | undefined
  api_id?: string | undefined
  api_name?: string | undefined
  disable_introspection?: boolean | undefined
  endpoints?: Endpoints | undefined
  field_access_rights?: (FieldAccessDefinition[] | null) | undefined
  limit?: APILimit | undefined
  restricted_types?: (GraphqlType[] | null) | undefined
  versions?: (string[] | null) | undefined
}
type BasicAuthData = { hash_type?: string | undefined; password?: string | undefined }
type JWTData = { secret?: string | undefined }
type Monitor = { trigger_limits?: (number[] | null) | undefined }
type SessionState = {
  access_rights?: ({ [x: string]: AccessDefinition } | null) | undefined
  alias?: string | undefined
  allowance?: number | undefined
  apply_policies?: (string[] | null) | undefined
  apply_policy_id?: string | undefined
  basic_auth_data?: BasicAuthData | undefined
  certificate?: string | undefined
  data_expires?: bigint | undefined
  date_created?: string | undefined
  enable_detail_recording?: boolean | undefined
  enable_detailed_recording?: boolean | undefined
  enable_http_signature_validation?: boolean | undefined
  expires?: bigint | undefined
  hmac_enabled?: boolean | undefined
  hmac_string?: string | undefined
  id_extractor_deadline?: bigint | undefined
  is_inactive?: boolean | undefined
  jwt_data?: JWTData | undefined
  last_check?: bigint | undefined
  last_updated?: string | undefined
  max_query_depth?: number | undefined
  meta_data?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
  monitor?: Monitor | undefined
  oauth_client_id?: string | undefined
  oauth_keys?: ({ [x: string]: string } | null) | undefined
  org_id?: string | undefined
  per?: number | undefined
  post_expiry_action?: 'retain' | 'delete' | undefined
  post_expiry_grace_period?: bigint | undefined
  quota_max?: bigint | undefined
  quota_remaining?: bigint | undefined
  quota_renewal_rate?: bigint | undefined
  quota_renews?: bigint | undefined
  rate?: number | undefined
  rsa_certificate_id?: string | undefined
  session_lifetime?: bigint | undefined
  smoothing?: RateLimitSmoothing | undefined
  tags?: (string[] | null) | undefined
  throttle_interval?: number | undefined
  throttle_retry_limit?: number | undefined
}
type PolicyUpdateObj = {
  apply_policies?: (string[] | null) | undefined
  policy?: string | undefined
}
type NewClientRequest = {
  api_id?: string | undefined
  client_id?: string | undefined
  description?: string | undefined
  meta_data?: ({ [x: string]: string } | null) | undefined
  policy_id?: string | undefined
  redirect_uri?: string | undefined
  secret?: string | undefined
}
type PaginationStatus = {
  page_num?: number | undefined
  page_size?: number | undefined
  page_total?: number | undefined
}
type OAuthClientToken = { code?: string | undefined; expires?: number | undefined }
type PaginatedOAuthClientTokens = {
  Pagination?: PaginationStatus | undefined
  Tokens?: (OAuthClientToken[] | null) | undefined
}
type GraphAccessDefinition = { [x: string]: unknown }
type PolicyPartitions = {
  acl?: boolean | undefined
  complexity?: boolean | undefined
  per_api?: boolean | undefined
  quota?: boolean | undefined
  rate_limit?: boolean | undefined
}
type Policy = {
  _id?: string | undefined
  access_rights?: ({ [x: string]: AccessDefinition } | null) | undefined
  active?: boolean | undefined
  enable_http_signature_validation?: boolean | undefined
  graphql_access_rights?: ({ [x: string]: GraphAccessDefinition } | null) | undefined
  hmac_enabled?: boolean | undefined
  id?: string | undefined
  is_inactive?: boolean | undefined
  key_expires_in?: bigint | undefined
  last_updated?: string | undefined
  max_query_depth?: number | undefined
  meta_data?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
  name?: string | undefined
  org_id?: string | undefined
  partitions?: PolicyPartitions | undefined
  per?: number | undefined
  post_expiry_action?: 'retain' | 'delete' | undefined
  post_expiry_grace_period?: bigint | undefined
  quota_max?: bigint | undefined
  quota_renewal_rate?: bigint | undefined
  rate?: number | undefined
  smoothing?: RateLimitSmoothing | undefined
  tags?: (string[] | null) | undefined
  throttle_interval?: number | undefined
  throttle_retry_limit?: number | undefined
}
type RequestDefinition = {
  body?: string | undefined
  headers?: ({ [x: string]: string } | null) | undefined
  method?: string | undefined
  relative_url?: string | undefined
}
type BatchRequestStructure = {
  requests?: (RequestDefinition[] | null) | undefined
  suppress_parallel_execution?: boolean | undefined
}
type HttpHeader = { [x: string]: string[] }
type BatchReplyUnit = {
  body?: string | undefined
  code?: number | undefined
  headers?: HttpHeader | undefined
  relative_url?: string | undefined
}
type OASSchemaResponse = {
  message?: string | undefined
  schema?: { [x: string]: unknown } | undefined
  status?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/hello': {
      $get:
        | { input: {}; output: HealthCheckResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ApiStatusMessage; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ApiStatusMessage; outputFormat: 'json'; status: 405 }
    }
  } & {
    '/ready': {
      $get:
        | { input: {}; output: HealthCheckResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ApiStatusMessage; outputFormat: 'json'; status: 405 }
        | { input: {}; output: ApiStatusMessage; outputFormat: 'json'; status: 503 }
    }
  } & {
    '/tyk/apis': {
      $get:
        | { input: {}; output: APIDefinition[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ApiStatusMessage; outputFormat: 'json'; status: 403 }
      $post:
        | {
            input: {
              query: {
                base_api_id?: string | undefined
                base_api_version_name?: string | undefined
                new_version_name?: string | undefined
                set_default?: boolean | undefined
              }
            } & { json: APIDefinition }
            output: ApiModifyKeySuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                base_api_id?: string | undefined
                base_api_version_name?: string | undefined
                new_version_name?: string | undefined
                set_default?: boolean | undefined
              }
            } & { json: APIDefinition }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                base_api_id?: string | undefined
                base_api_version_name?: string | undefined
                new_version_name?: string | undefined
                set_default?: boolean | undefined
              }
            } & { json: APIDefinition }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                base_api_id?: string | undefined
                base_api_version_name?: string | undefined
                new_version_name?: string | undefined
                set_default?: boolean | undefined
              }
            } & { json: APIDefinition }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tyk/apis/:apiID': {
      $delete:
        | {
            input: { param: { apiID: string } }
            output: ApiModifyKeySuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiID: string } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { apiID: string } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { apiID: string } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { apiID: string } }
            output: APIDefinition
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiID: string } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { apiID: string } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { apiID: string } } & { json: APIDefinition }
            output: ApiModifyKeySuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiID: string } } & { json: APIDefinition }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiID: string } } & { json: APIDefinition }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { apiID: string } } & { json: APIDefinition }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { apiID: string } } & { json: APIDefinition }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tyk/apis/:apiID/versions': {
      $get:
        | {
            input: { param: { apiID: string } } & {
              query: {
                searchText?: string | undefined
                accessType?: 'internal' | 'external' | undefined
              }
            }
            output: VersionMetas
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiID: string } } & {
              query: {
                searchText?: string | undefined
                accessType?: 'internal' | 'external' | undefined
              }
            }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { apiID: string } } & {
              query: {
                searchText?: string | undefined
                accessType?: 'internal' | 'external' | undefined
              }
            }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/tyk/apis/oas': {
      $get:
        | {
            input: { query: { mode?: 'public' | undefined } }
            output: {
              openapi: string
              info: {
                title: string
                description?: string | undefined
                termsOfService?: string | undefined
                contact?:
                  | {
                      name?: string | undefined
                      url?: string | undefined
                      email?: string | undefined
                    }
                  | undefined
                license?: { name: string; url?: string | undefined } | undefined
                version: string
              }
              externalDocs?: { description?: string | undefined; url: string } | undefined
              servers?:
                | {
                    url: string
                    description?: string | undefined
                    variables?:
                      | {
                          [x: string]: {
                            enum?: string[] | undefined
                            default: string
                            description?: string | undefined
                          }
                        }
                      | undefined
                  }[]
                | undefined
              security?: { [x: string]: string[] }[] | undefined
              tags?:
                | {
                    name: string
                    description?: string | undefined
                    externalDocs?: { description?: string | undefined; url: string } | undefined
                  }[]
                | undefined
              paths: {}
              components?:
                | {
                    schemas?: { [x: string]: unknown } | undefined
                    responses?: { [x: string]: unknown } | undefined
                    parameters?: { [x: string]: unknown } | undefined
                    examples?: { [x: string]: unknown } | undefined
                    requestBodies?: { [x: string]: unknown } | undefined
                    headers?: { [x: string]: unknown } | undefined
                    securitySchemes?: { [x: string]: unknown } | undefined
                    links?: { [x: string]: unknown } | undefined
                    callbacks?: { [x: string]: unknown } | undefined
                  }
                | undefined
              'x-tyk-api-gateway'?: XTykAPIGateway | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { mode?: 'public' | undefined } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: {
              query: {
                base_api_id?: string | undefined
                base_api_version_name?: string | undefined
                new_version_name?: string | undefined
                set_default?: boolean | undefined
              }
            } & {
              json: {
                openapi: string
                info: {
                  title: string
                  description?: string | undefined
                  termsOfService?: string | undefined
                  contact?:
                    | {
                        name?: string | undefined
                        url?: string | undefined
                        email?: string | undefined
                      }
                    | undefined
                  license?: { name: string; url?: string | undefined } | undefined
                  version: string
                }
                externalDocs?: { description?: string | undefined; url: string } | undefined
                servers?:
                  | {
                      url: string
                      description?: string | undefined
                      variables?:
                        | {
                            [x: string]: {
                              enum?: string[] | undefined
                              default: string
                              description?: string | undefined
                            }
                          }
                        | undefined
                    }[]
                  | undefined
                security?: { [x: string]: string[] }[] | undefined
                tags?:
                  | {
                      name: string
                      description?: string | undefined
                      externalDocs?: { description?: string | undefined; url: string } | undefined
                    }[]
                  | undefined
                paths: {}
                components?:
                  | {
                      schemas?: { [x: string]: unknown } | undefined
                      responses?: { [x: string]: unknown } | undefined
                      parameters?: { [x: string]: unknown } | undefined
                      examples?: { [x: string]: unknown } | undefined
                      requestBodies?: { [x: string]: unknown } | undefined
                      headers?: { [x: string]: unknown } | undefined
                      securitySchemes?: { [x: string]: unknown } | undefined
                      links?: { [x: string]: unknown } | undefined
                      callbacks?: { [x: string]: unknown } | undefined
                    }
                  | undefined
                'x-tyk-api-gateway'?: XTykAPIGateway | undefined
              }
            }
            output: ApiModifyKeySuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                base_api_id?: string | undefined
                base_api_version_name?: string | undefined
                new_version_name?: string | undefined
                set_default?: boolean | undefined
              }
            } & {
              json: {
                openapi: string
                info: {
                  title: string
                  description?: string | undefined
                  termsOfService?: string | undefined
                  contact?:
                    | {
                        name?: string | undefined
                        url?: string | undefined
                        email?: string | undefined
                      }
                    | undefined
                  license?: { name: string; url?: string | undefined } | undefined
                  version: string
                }
                externalDocs?: { description?: string | undefined; url: string } | undefined
                servers?:
                  | {
                      url: string
                      description?: string | undefined
                      variables?:
                        | {
                            [x: string]: {
                              enum?: string[] | undefined
                              default: string
                              description?: string | undefined
                            }
                          }
                        | undefined
                    }[]
                  | undefined
                security?: { [x: string]: string[] }[] | undefined
                tags?:
                  | {
                      name: string
                      description?: string | undefined
                      externalDocs?: { description?: string | undefined; url: string } | undefined
                    }[]
                  | undefined
                paths: {}
                components?:
                  | {
                      schemas?: { [x: string]: unknown } | undefined
                      responses?: { [x: string]: unknown } | undefined
                      parameters?: { [x: string]: unknown } | undefined
                      examples?: { [x: string]: unknown } | undefined
                      requestBodies?: { [x: string]: unknown } | undefined
                      headers?: { [x: string]: unknown } | undefined
                      securitySchemes?: { [x: string]: unknown } | undefined
                      links?: { [x: string]: unknown } | undefined
                      callbacks?: { [x: string]: unknown } | undefined
                    }
                  | undefined
                'x-tyk-api-gateway'?: XTykAPIGateway | undefined
              }
            }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                base_api_id?: string | undefined
                base_api_version_name?: string | undefined
                new_version_name?: string | undefined
                set_default?: boolean | undefined
              }
            } & {
              json: {
                openapi: string
                info: {
                  title: string
                  description?: string | undefined
                  termsOfService?: string | undefined
                  contact?:
                    | {
                        name?: string | undefined
                        url?: string | undefined
                        email?: string | undefined
                      }
                    | undefined
                  license?: { name: string; url?: string | undefined } | undefined
                  version: string
                }
                externalDocs?: { description?: string | undefined; url: string } | undefined
                servers?:
                  | {
                      url: string
                      description?: string | undefined
                      variables?:
                        | {
                            [x: string]: {
                              enum?: string[] | undefined
                              default: string
                              description?: string | undefined
                            }
                          }
                        | undefined
                    }[]
                  | undefined
                security?: { [x: string]: string[] }[] | undefined
                tags?:
                  | {
                      name: string
                      description?: string | undefined
                      externalDocs?: { description?: string | undefined; url: string } | undefined
                    }[]
                  | undefined
                paths: {}
                components?:
                  | {
                      schemas?: { [x: string]: unknown } | undefined
                      responses?: { [x: string]: unknown } | undefined
                      parameters?: { [x: string]: unknown } | undefined
                      examples?: { [x: string]: unknown } | undefined
                      requestBodies?: { [x: string]: unknown } | undefined
                      headers?: { [x: string]: unknown } | undefined
                      securitySchemes?: { [x: string]: unknown } | undefined
                      links?: { [x: string]: unknown } | undefined
                      callbacks?: { [x: string]: unknown } | undefined
                    }
                  | undefined
                'x-tyk-api-gateway'?: XTykAPIGateway | undefined
              }
            }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                base_api_id?: string | undefined
                base_api_version_name?: string | undefined
                new_version_name?: string | undefined
                set_default?: boolean | undefined
              }
            } & {
              json: {
                openapi: string
                info: {
                  title: string
                  description?: string | undefined
                  termsOfService?: string | undefined
                  contact?:
                    | {
                        name?: string | undefined
                        url?: string | undefined
                        email?: string | undefined
                      }
                    | undefined
                  license?: { name: string; url?: string | undefined } | undefined
                  version: string
                }
                externalDocs?: { description?: string | undefined; url: string } | undefined
                servers?:
                  | {
                      url: string
                      description?: string | undefined
                      variables?:
                        | {
                            [x: string]: {
                              enum?: string[] | undefined
                              default: string
                              description?: string | undefined
                            }
                          }
                        | undefined
                    }[]
                  | undefined
                security?: { [x: string]: string[] }[] | undefined
                tags?:
                  | {
                      name: string
                      description?: string | undefined
                      externalDocs?: { description?: string | undefined; url: string } | undefined
                    }[]
                  | undefined
                paths: {}
                components?:
                  | {
                      schemas?: { [x: string]: unknown } | undefined
                      responses?: { [x: string]: unknown } | undefined
                      parameters?: { [x: string]: unknown } | undefined
                      examples?: { [x: string]: unknown } | undefined
                      requestBodies?: { [x: string]: unknown } | undefined
                      headers?: { [x: string]: unknown } | undefined
                      securitySchemes?: { [x: string]: unknown } | undefined
                      links?: { [x: string]: unknown } | undefined
                      callbacks?: { [x: string]: unknown } | undefined
                    }
                  | undefined
                'x-tyk-api-gateway'?: XTykAPIGateway | undefined
              }
            }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tyk/apis/oas/:apiID': {
      $delete:
        | {
            input: { param: { apiID: string } }
            output: ApiModifyKeySuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiID: string } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiID: string } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { apiID: string } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { apiID: string } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { apiID: string } } & { query: { mode?: 'public' | undefined } }
            output: {
              openapi: string
              info: {
                title: string
                description?: string | undefined
                termsOfService?: string | undefined
                contact?:
                  | {
                      name?: string | undefined
                      url?: string | undefined
                      email?: string | undefined
                    }
                  | undefined
                license?: { name: string; url?: string | undefined } | undefined
                version: string
              }
              externalDocs?: { description?: string | undefined; url: string } | undefined
              servers?:
                | {
                    url: string
                    description?: string | undefined
                    variables?:
                      | {
                          [x: string]: {
                            enum?: string[] | undefined
                            default: string
                            description?: string | undefined
                          }
                        }
                      | undefined
                  }[]
                | undefined
              security?: { [x: string]: string[] }[] | undefined
              tags?:
                | {
                    name: string
                    description?: string | undefined
                    externalDocs?: { description?: string | undefined; url: string } | undefined
                  }[]
                | undefined
              paths: {}
              components?:
                | {
                    schemas?: { [x: string]: unknown } | undefined
                    responses?: { [x: string]: unknown } | undefined
                    parameters?: { [x: string]: unknown } | undefined
                    examples?: { [x: string]: unknown } | undefined
                    requestBodies?: { [x: string]: unknown } | undefined
                    headers?: { [x: string]: unknown } | undefined
                    securitySchemes?: { [x: string]: unknown } | undefined
                    links?: { [x: string]: unknown } | undefined
                    callbacks?: { [x: string]: unknown } | undefined
                  }
                | undefined
              'x-tyk-api-gateway'?: XTykAPIGateway | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiID: string } } & { query: { mode?: 'public' | undefined } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiID: string } } & { query: { mode?: 'public' | undefined } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { apiID: string } } & { query: { mode?: 'public' | undefined } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { apiID: string } } & {
              query: {
                upstreamURL?: string | undefined
                listenPath?: string | undefined
                customDomain?: string | undefined
                allowList?: BooleanQueryParam | undefined
                validateRequest?: BooleanQueryParam | undefined
                mockResponse?: BooleanQueryParam | undefined
                authentication?: BooleanQueryParam | undefined
              }
            } & {
              json: {
                openapi: string
                info: {
                  title: string
                  description?: string | undefined
                  termsOfService?: string | undefined
                  contact?:
                    | {
                        name?: string | undefined
                        url?: string | undefined
                        email?: string | undefined
                      }
                    | undefined
                  license?: { name: string; url?: string | undefined } | undefined
                  version: string
                }
                externalDocs?: { description?: string | undefined; url: string } | undefined
                servers?:
                  | {
                      url: string
                      description?: string | undefined
                      variables?:
                        | {
                            [x: string]: {
                              enum?: string[] | undefined
                              default: string
                              description?: string | undefined
                            }
                          }
                        | undefined
                    }[]
                  | undefined
                security?: { [x: string]: string[] }[] | undefined
                tags?:
                  | {
                      name: string
                      description?: string | undefined
                      externalDocs?: { description?: string | undefined; url: string } | undefined
                    }[]
                  | undefined
                paths: {}
                components?:
                  | {
                      schemas?: { [x: string]: unknown } | undefined
                      responses?: { [x: string]: unknown } | undefined
                      parameters?: { [x: string]: unknown } | undefined
                      examples?: { [x: string]: unknown } | undefined
                      requestBodies?: { [x: string]: unknown } | undefined
                      headers?: { [x: string]: unknown } | undefined
                      securitySchemes?: { [x: string]: unknown } | undefined
                      links?: { [x: string]: unknown } | undefined
                      callbacks?: { [x: string]: unknown } | undefined
                    }
                  | undefined
              }
            }
            output: ApiModifyKeySuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiID: string } } & {
              query: {
                upstreamURL?: string | undefined
                listenPath?: string | undefined
                customDomain?: string | undefined
                allowList?: BooleanQueryParam | undefined
                validateRequest?: BooleanQueryParam | undefined
                mockResponse?: BooleanQueryParam | undefined
                authentication?: BooleanQueryParam | undefined
              }
            } & {
              json: {
                openapi: string
                info: {
                  title: string
                  description?: string | undefined
                  termsOfService?: string | undefined
                  contact?:
                    | {
                        name?: string | undefined
                        url?: string | undefined
                        email?: string | undefined
                      }
                    | undefined
                  license?: { name: string; url?: string | undefined } | undefined
                  version: string
                }
                externalDocs?: { description?: string | undefined; url: string } | undefined
                servers?:
                  | {
                      url: string
                      description?: string | undefined
                      variables?:
                        | {
                            [x: string]: {
                              enum?: string[] | undefined
                              default: string
                              description?: string | undefined
                            }
                          }
                        | undefined
                    }[]
                  | undefined
                security?: { [x: string]: string[] }[] | undefined
                tags?:
                  | {
                      name: string
                      description?: string | undefined
                      externalDocs?: { description?: string | undefined; url: string } | undefined
                    }[]
                  | undefined
                paths: {}
                components?:
                  | {
                      schemas?: { [x: string]: unknown } | undefined
                      responses?: { [x: string]: unknown } | undefined
                      parameters?: { [x: string]: unknown } | undefined
                      examples?: { [x: string]: unknown } | undefined
                      requestBodies?: { [x: string]: unknown } | undefined
                      headers?: { [x: string]: unknown } | undefined
                      securitySchemes?: { [x: string]: unknown } | undefined
                      links?: { [x: string]: unknown } | undefined
                      callbacks?: { [x: string]: unknown } | undefined
                    }
                  | undefined
              }
            }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiID: string } } & {
              query: {
                upstreamURL?: string | undefined
                listenPath?: string | undefined
                customDomain?: string | undefined
                allowList?: BooleanQueryParam | undefined
                validateRequest?: BooleanQueryParam | undefined
                mockResponse?: BooleanQueryParam | undefined
                authentication?: BooleanQueryParam | undefined
              }
            } & {
              json: {
                openapi: string
                info: {
                  title: string
                  description?: string | undefined
                  termsOfService?: string | undefined
                  contact?:
                    | {
                        name?: string | undefined
                        url?: string | undefined
                        email?: string | undefined
                      }
                    | undefined
                  license?: { name: string; url?: string | undefined } | undefined
                  version: string
                }
                externalDocs?: { description?: string | undefined; url: string } | undefined
                servers?:
                  | {
                      url: string
                      description?: string | undefined
                      variables?:
                        | {
                            [x: string]: {
                              enum?: string[] | undefined
                              default: string
                              description?: string | undefined
                            }
                          }
                        | undefined
                    }[]
                  | undefined
                security?: { [x: string]: string[] }[] | undefined
                tags?:
                  | {
                      name: string
                      description?: string | undefined
                      externalDocs?: { description?: string | undefined; url: string } | undefined
                    }[]
                  | undefined
                paths: {}
                components?:
                  | {
                      schemas?: { [x: string]: unknown } | undefined
                      responses?: { [x: string]: unknown } | undefined
                      parameters?: { [x: string]: unknown } | undefined
                      examples?: { [x: string]: unknown } | undefined
                      requestBodies?: { [x: string]: unknown } | undefined
                      headers?: { [x: string]: unknown } | undefined
                      securitySchemes?: { [x: string]: unknown } | undefined
                      links?: { [x: string]: unknown } | undefined
                      callbacks?: { [x: string]: unknown } | undefined
                    }
                  | undefined
              }
            }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { apiID: string } } & {
              query: {
                upstreamURL?: string | undefined
                listenPath?: string | undefined
                customDomain?: string | undefined
                allowList?: BooleanQueryParam | undefined
                validateRequest?: BooleanQueryParam | undefined
                mockResponse?: BooleanQueryParam | undefined
                authentication?: BooleanQueryParam | undefined
              }
            } & {
              json: {
                openapi: string
                info: {
                  title: string
                  description?: string | undefined
                  termsOfService?: string | undefined
                  contact?:
                    | {
                        name?: string | undefined
                        url?: string | undefined
                        email?: string | undefined
                      }
                    | undefined
                  license?: { name: string; url?: string | undefined } | undefined
                  version: string
                }
                externalDocs?: { description?: string | undefined; url: string } | undefined
                servers?:
                  | {
                      url: string
                      description?: string | undefined
                      variables?:
                        | {
                            [x: string]: {
                              enum?: string[] | undefined
                              default: string
                              description?: string | undefined
                            }
                          }
                        | undefined
                    }[]
                  | undefined
                security?: { [x: string]: string[] }[] | undefined
                tags?:
                  | {
                      name: string
                      description?: string | undefined
                      externalDocs?: { description?: string | undefined; url: string } | undefined
                    }[]
                  | undefined
                paths: {}
                components?:
                  | {
                      schemas?: { [x: string]: unknown } | undefined
                      responses?: { [x: string]: unknown } | undefined
                      parameters?: { [x: string]: unknown } | undefined
                      examples?: { [x: string]: unknown } | undefined
                      requestBodies?: { [x: string]: unknown } | undefined
                      headers?: { [x: string]: unknown } | undefined
                      securitySchemes?: { [x: string]: unknown } | undefined
                      links?: { [x: string]: unknown } | undefined
                      callbacks?: { [x: string]: unknown } | undefined
                    }
                  | undefined
              }
            }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { apiID: string } } & {
              query: {
                upstreamURL?: string | undefined
                listenPath?: string | undefined
                customDomain?: string | undefined
                allowList?: BooleanQueryParam | undefined
                validateRequest?: BooleanQueryParam | undefined
                mockResponse?: BooleanQueryParam | undefined
                authentication?: BooleanQueryParam | undefined
              }
            } & {
              json: {
                openapi: string
                info: {
                  title: string
                  description?: string | undefined
                  termsOfService?: string | undefined
                  contact?:
                    | {
                        name?: string | undefined
                        url?: string | undefined
                        email?: string | undefined
                      }
                    | undefined
                  license?: { name: string; url?: string | undefined } | undefined
                  version: string
                }
                externalDocs?: { description?: string | undefined; url: string } | undefined
                servers?:
                  | {
                      url: string
                      description?: string | undefined
                      variables?:
                        | {
                            [x: string]: {
                              enum?: string[] | undefined
                              default: string
                              description?: string | undefined
                            }
                          }
                        | undefined
                    }[]
                  | undefined
                security?: { [x: string]: string[] }[] | undefined
                tags?:
                  | {
                      name: string
                      description?: string | undefined
                      externalDocs?: { description?: string | undefined; url: string } | undefined
                    }[]
                  | undefined
                paths: {}
                components?:
                  | {
                      schemas?: { [x: string]: unknown } | undefined
                      responses?: { [x: string]: unknown } | undefined
                      parameters?: { [x: string]: unknown } | undefined
                      examples?: { [x: string]: unknown } | undefined
                      requestBodies?: { [x: string]: unknown } | undefined
                      headers?: { [x: string]: unknown } | undefined
                      securitySchemes?: { [x: string]: unknown } | undefined
                      links?: { [x: string]: unknown } | undefined
                      callbacks?: { [x: string]: unknown } | undefined
                    }
                  | undefined
              }
            }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { apiID: string } } & {
              json: {
                openapi: string
                info: {
                  title: string
                  description?: string | undefined
                  termsOfService?: string | undefined
                  contact?:
                    | {
                        name?: string | undefined
                        url?: string | undefined
                        email?: string | undefined
                      }
                    | undefined
                  license?: { name: string; url?: string | undefined } | undefined
                  version: string
                }
                externalDocs?: { description?: string | undefined; url: string } | undefined
                servers?:
                  | {
                      url: string
                      description?: string | undefined
                      variables?:
                        | {
                            [x: string]: {
                              enum?: string[] | undefined
                              default: string
                              description?: string | undefined
                            }
                          }
                        | undefined
                    }[]
                  | undefined
                security?: { [x: string]: string[] }[] | undefined
                tags?:
                  | {
                      name: string
                      description?: string | undefined
                      externalDocs?: { description?: string | undefined; url: string } | undefined
                    }[]
                  | undefined
                paths: {}
                components?:
                  | {
                      schemas?: { [x: string]: unknown } | undefined
                      responses?: { [x: string]: unknown } | undefined
                      parameters?: { [x: string]: unknown } | undefined
                      examples?: { [x: string]: unknown } | undefined
                      requestBodies?: { [x: string]: unknown } | undefined
                      headers?: { [x: string]: unknown } | undefined
                      securitySchemes?: { [x: string]: unknown } | undefined
                      links?: { [x: string]: unknown } | undefined
                      callbacks?: { [x: string]: unknown } | undefined
                    }
                  | undefined
                'x-tyk-api-gateway'?: XTykAPIGateway | undefined
              }
            }
            output: ApiModifyKeySuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiID: string } } & {
              json: {
                openapi: string
                info: {
                  title: string
                  description?: string | undefined
                  termsOfService?: string | undefined
                  contact?:
                    | {
                        name?: string | undefined
                        url?: string | undefined
                        email?: string | undefined
                      }
                    | undefined
                  license?: { name: string; url?: string | undefined } | undefined
                  version: string
                }
                externalDocs?: { description?: string | undefined; url: string } | undefined
                servers?:
                  | {
                      url: string
                      description?: string | undefined
                      variables?:
                        | {
                            [x: string]: {
                              enum?: string[] | undefined
                              default: string
                              description?: string | undefined
                            }
                          }
                        | undefined
                    }[]
                  | undefined
                security?: { [x: string]: string[] }[] | undefined
                tags?:
                  | {
                      name: string
                      description?: string | undefined
                      externalDocs?: { description?: string | undefined; url: string } | undefined
                    }[]
                  | undefined
                paths: {}
                components?:
                  | {
                      schemas?: { [x: string]: unknown } | undefined
                      responses?: { [x: string]: unknown } | undefined
                      parameters?: { [x: string]: unknown } | undefined
                      examples?: { [x: string]: unknown } | undefined
                      requestBodies?: { [x: string]: unknown } | undefined
                      headers?: { [x: string]: unknown } | undefined
                      securitySchemes?: { [x: string]: unknown } | undefined
                      links?: { [x: string]: unknown } | undefined
                      callbacks?: { [x: string]: unknown } | undefined
                    }
                  | undefined
                'x-tyk-api-gateway'?: XTykAPIGateway | undefined
              }
            }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiID: string } } & {
              json: {
                openapi: string
                info: {
                  title: string
                  description?: string | undefined
                  termsOfService?: string | undefined
                  contact?:
                    | {
                        name?: string | undefined
                        url?: string | undefined
                        email?: string | undefined
                      }
                    | undefined
                  license?: { name: string; url?: string | undefined } | undefined
                  version: string
                }
                externalDocs?: { description?: string | undefined; url: string } | undefined
                servers?:
                  | {
                      url: string
                      description?: string | undefined
                      variables?:
                        | {
                            [x: string]: {
                              enum?: string[] | undefined
                              default: string
                              description?: string | undefined
                            }
                          }
                        | undefined
                    }[]
                  | undefined
                security?: { [x: string]: string[] }[] | undefined
                tags?:
                  | {
                      name: string
                      description?: string | undefined
                      externalDocs?: { description?: string | undefined; url: string } | undefined
                    }[]
                  | undefined
                paths: {}
                components?:
                  | {
                      schemas?: { [x: string]: unknown } | undefined
                      responses?: { [x: string]: unknown } | undefined
                      parameters?: { [x: string]: unknown } | undefined
                      examples?: { [x: string]: unknown } | undefined
                      requestBodies?: { [x: string]: unknown } | undefined
                      headers?: { [x: string]: unknown } | undefined
                      securitySchemes?: { [x: string]: unknown } | undefined
                      links?: { [x: string]: unknown } | undefined
                      callbacks?: { [x: string]: unknown } | undefined
                    }
                  | undefined
                'x-tyk-api-gateway'?: XTykAPIGateway | undefined
              }
            }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { apiID: string } } & {
              json: {
                openapi: string
                info: {
                  title: string
                  description?: string | undefined
                  termsOfService?: string | undefined
                  contact?:
                    | {
                        name?: string | undefined
                        url?: string | undefined
                        email?: string | undefined
                      }
                    | undefined
                  license?: { name: string; url?: string | undefined } | undefined
                  version: string
                }
                externalDocs?: { description?: string | undefined; url: string } | undefined
                servers?:
                  | {
                      url: string
                      description?: string | undefined
                      variables?:
                        | {
                            [x: string]: {
                              enum?: string[] | undefined
                              default: string
                              description?: string | undefined
                            }
                          }
                        | undefined
                    }[]
                  | undefined
                security?: { [x: string]: string[] }[] | undefined
                tags?:
                  | {
                      name: string
                      description?: string | undefined
                      externalDocs?: { description?: string | undefined; url: string } | undefined
                    }[]
                  | undefined
                paths: {}
                components?:
                  | {
                      schemas?: { [x: string]: unknown } | undefined
                      responses?: { [x: string]: unknown } | undefined
                      parameters?: { [x: string]: unknown } | undefined
                      examples?: { [x: string]: unknown } | undefined
                      requestBodies?: { [x: string]: unknown } | undefined
                      headers?: { [x: string]: unknown } | undefined
                      securitySchemes?: { [x: string]: unknown } | undefined
                      links?: { [x: string]: unknown } | undefined
                      callbacks?: { [x: string]: unknown } | undefined
                    }
                  | undefined
                'x-tyk-api-gateway'?: XTykAPIGateway | undefined
              }
            }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { apiID: string } } & {
              json: {
                openapi: string
                info: {
                  title: string
                  description?: string | undefined
                  termsOfService?: string | undefined
                  contact?:
                    | {
                        name?: string | undefined
                        url?: string | undefined
                        email?: string | undefined
                      }
                    | undefined
                  license?: { name: string; url?: string | undefined } | undefined
                  version: string
                }
                externalDocs?: { description?: string | undefined; url: string } | undefined
                servers?:
                  | {
                      url: string
                      description?: string | undefined
                      variables?:
                        | {
                            [x: string]: {
                              enum?: string[] | undefined
                              default: string
                              description?: string | undefined
                            }
                          }
                        | undefined
                    }[]
                  | undefined
                security?: { [x: string]: string[] }[] | undefined
                tags?:
                  | {
                      name: string
                      description?: string | undefined
                      externalDocs?: { description?: string | undefined; url: string } | undefined
                    }[]
                  | undefined
                paths: {}
                components?:
                  | {
                      schemas?: { [x: string]: unknown } | undefined
                      responses?: { [x: string]: unknown } | undefined
                      parameters?: { [x: string]: unknown } | undefined
                      examples?: { [x: string]: unknown } | undefined
                      requestBodies?: { [x: string]: unknown } | undefined
                      headers?: { [x: string]: unknown } | undefined
                      securitySchemes?: { [x: string]: unknown } | undefined
                      links?: { [x: string]: unknown } | undefined
                      callbacks?: { [x: string]: unknown } | undefined
                    }
                  | undefined
                'x-tyk-api-gateway'?: XTykAPIGateway | undefined
              }
            }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tyk/apis/oas/:apiID/export': {
      $get:
        | {
            input: { param: { apiID: string } } & { query: { mode?: 'public' | undefined } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { apiID: string } } & { query: { mode?: 'public' | undefined } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiID: string } } & { query: { mode?: 'public' | undefined } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { apiID: string } } & { query: { mode?: 'public' | undefined } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { apiID: string } } & { query: { mode?: 'public' | undefined } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tyk/apis/oas/:apiID/versions': {
      $get:
        | {
            input: { param: { apiID: string } } & {
              query: {
                searchText?: string | undefined
                accessType?: 'internal' | 'external' | undefined
              }
            }
            output: VersionMetas
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiID: string } } & {
              query: {
                searchText?: string | undefined
                accessType?: 'internal' | 'external' | undefined
              }
            }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { apiID: string } } & {
              query: {
                searchText?: string | undefined
                accessType?: 'internal' | 'external' | undefined
              }
            }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/tyk/apis/oas/export': {
      $get:
        | {
            input: { query: { mode?: 'public' | undefined } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { mode?: 'public' | undefined } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { mode?: 'public' | undefined } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tyk/apis/oas/import': {
      $post:
        | {
            input: {
              query: {
                upstreamURL?: string | undefined
                listenPath?: string | undefined
                customDomain?: string | undefined
                allowList?: BooleanQueryParam | undefined
                validateRequest?: BooleanQueryParam | undefined
                mockResponse?: BooleanQueryParam | undefined
                authentication?: BooleanQueryParam | undefined
                base_api_id?: string | undefined
                base_api_version_name?: string | undefined
                new_version_name?: string | undefined
                set_default?: boolean | undefined
              }
            } & {
              json: {
                openapi: string
                info: {
                  title: string
                  description?: string | undefined
                  termsOfService?: string | undefined
                  contact?:
                    | {
                        name?: string | undefined
                        url?: string | undefined
                        email?: string | undefined
                      }
                    | undefined
                  license?: { name: string; url?: string | undefined } | undefined
                  version: string
                }
                externalDocs?: { description?: string | undefined; url: string } | undefined
                servers?:
                  | {
                      url: string
                      description?: string | undefined
                      variables?:
                        | {
                            [x: string]: {
                              enum?: string[] | undefined
                              default: string
                              description?: string | undefined
                            }
                          }
                        | undefined
                    }[]
                  | undefined
                security?: { [x: string]: string[] }[] | undefined
                tags?:
                  | {
                      name: string
                      description?: string | undefined
                      externalDocs?: { description?: string | undefined; url: string } | undefined
                    }[]
                  | undefined
                paths: {}
                components?:
                  | {
                      schemas?: { [x: string]: unknown } | undefined
                      responses?: { [x: string]: unknown } | undefined
                      parameters?: { [x: string]: unknown } | undefined
                      examples?: { [x: string]: unknown } | undefined
                      requestBodies?: { [x: string]: unknown } | undefined
                      headers?: { [x: string]: unknown } | undefined
                      securitySchemes?: { [x: string]: unknown } | undefined
                      links?: { [x: string]: unknown } | undefined
                      callbacks?: { [x: string]: unknown } | undefined
                    }
                  | undefined
              }
            }
            output: ApiModifyKeySuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                upstreamURL?: string | undefined
                listenPath?: string | undefined
                customDomain?: string | undefined
                allowList?: BooleanQueryParam | undefined
                validateRequest?: BooleanQueryParam | undefined
                mockResponse?: BooleanQueryParam | undefined
                authentication?: BooleanQueryParam | undefined
                base_api_id?: string | undefined
                base_api_version_name?: string | undefined
                new_version_name?: string | undefined
                set_default?: boolean | undefined
              }
            } & {
              json: {
                openapi: string
                info: {
                  title: string
                  description?: string | undefined
                  termsOfService?: string | undefined
                  contact?:
                    | {
                        name?: string | undefined
                        url?: string | undefined
                        email?: string | undefined
                      }
                    | undefined
                  license?: { name: string; url?: string | undefined } | undefined
                  version: string
                }
                externalDocs?: { description?: string | undefined; url: string } | undefined
                servers?:
                  | {
                      url: string
                      description?: string | undefined
                      variables?:
                        | {
                            [x: string]: {
                              enum?: string[] | undefined
                              default: string
                              description?: string | undefined
                            }
                          }
                        | undefined
                    }[]
                  | undefined
                security?: { [x: string]: string[] }[] | undefined
                tags?:
                  | {
                      name: string
                      description?: string | undefined
                      externalDocs?: { description?: string | undefined; url: string } | undefined
                    }[]
                  | undefined
                paths: {}
                components?:
                  | {
                      schemas?: { [x: string]: unknown } | undefined
                      responses?: { [x: string]: unknown } | undefined
                      parameters?: { [x: string]: unknown } | undefined
                      examples?: { [x: string]: unknown } | undefined
                      requestBodies?: { [x: string]: unknown } | undefined
                      headers?: { [x: string]: unknown } | undefined
                      securitySchemes?: { [x: string]: unknown } | undefined
                      links?: { [x: string]: unknown } | undefined
                      callbacks?: { [x: string]: unknown } | undefined
                    }
                  | undefined
              }
            }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                upstreamURL?: string | undefined
                listenPath?: string | undefined
                customDomain?: string | undefined
                allowList?: BooleanQueryParam | undefined
                validateRequest?: BooleanQueryParam | undefined
                mockResponse?: BooleanQueryParam | undefined
                authentication?: BooleanQueryParam | undefined
                base_api_id?: string | undefined
                base_api_version_name?: string | undefined
                new_version_name?: string | undefined
                set_default?: boolean | undefined
              }
            } & {
              json: {
                openapi: string
                info: {
                  title: string
                  description?: string | undefined
                  termsOfService?: string | undefined
                  contact?:
                    | {
                        name?: string | undefined
                        url?: string | undefined
                        email?: string | undefined
                      }
                    | undefined
                  license?: { name: string; url?: string | undefined } | undefined
                  version: string
                }
                externalDocs?: { description?: string | undefined; url: string } | undefined
                servers?:
                  | {
                      url: string
                      description?: string | undefined
                      variables?:
                        | {
                            [x: string]: {
                              enum?: string[] | undefined
                              default: string
                              description?: string | undefined
                            }
                          }
                        | undefined
                    }[]
                  | undefined
                security?: { [x: string]: string[] }[] | undefined
                tags?:
                  | {
                      name: string
                      description?: string | undefined
                      externalDocs?: { description?: string | undefined; url: string } | undefined
                    }[]
                  | undefined
                paths: {}
                components?:
                  | {
                      schemas?: { [x: string]: unknown } | undefined
                      responses?: { [x: string]: unknown } | undefined
                      parameters?: { [x: string]: unknown } | undefined
                      examples?: { [x: string]: unknown } | undefined
                      requestBodies?: { [x: string]: unknown } | undefined
                      headers?: { [x: string]: unknown } | undefined
                      securitySchemes?: { [x: string]: unknown } | undefined
                      links?: { [x: string]: unknown } | undefined
                      callbacks?: { [x: string]: unknown } | undefined
                    }
                  | undefined
              }
            }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                upstreamURL?: string | undefined
                listenPath?: string | undefined
                customDomain?: string | undefined
                allowList?: BooleanQueryParam | undefined
                validateRequest?: BooleanQueryParam | undefined
                mockResponse?: BooleanQueryParam | undefined
                authentication?: BooleanQueryParam | undefined
                base_api_id?: string | undefined
                base_api_version_name?: string | undefined
                new_version_name?: string | undefined
                set_default?: boolean | undefined
              }
            } & {
              json: {
                openapi: string
                info: {
                  title: string
                  description?: string | undefined
                  termsOfService?: string | undefined
                  contact?:
                    | {
                        name?: string | undefined
                        url?: string | undefined
                        email?: string | undefined
                      }
                    | undefined
                  license?: { name: string; url?: string | undefined } | undefined
                  version: string
                }
                externalDocs?: { description?: string | undefined; url: string } | undefined
                servers?:
                  | {
                      url: string
                      description?: string | undefined
                      variables?:
                        | {
                            [x: string]: {
                              enum?: string[] | undefined
                              default: string
                              description?: string | undefined
                            }
                          }
                        | undefined
                    }[]
                  | undefined
                security?: { [x: string]: string[] }[] | undefined
                tags?:
                  | {
                      name: string
                      description?: string | undefined
                      externalDocs?: { description?: string | undefined; url: string } | undefined
                    }[]
                  | undefined
                paths: {}
                components?:
                  | {
                      schemas?: { [x: string]: unknown } | undefined
                      responses?: { [x: string]: unknown } | undefined
                      parameters?: { [x: string]: unknown } | undefined
                      examples?: { [x: string]: unknown } | undefined
                      requestBodies?: { [x: string]: unknown } | undefined
                      headers?: { [x: string]: unknown } | undefined
                      securitySchemes?: { [x: string]: unknown } | undefined
                      links?: { [x: string]: unknown } | undefined
                      callbacks?: { [x: string]: unknown } | undefined
                    }
                  | undefined
              }
            }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tyk/mcps': {
      $get:
        | {
            input: {}
            output: {
              openapi: string
              info: {
                title: string
                description?: string | undefined
                termsOfService?: string | undefined
                contact?:
                  | {
                      name?: string | undefined
                      url?: string | undefined
                      email?: string | undefined
                    }
                  | undefined
                license?: { name: string; url?: string | undefined } | undefined
                version: string
              }
              externalDocs?: { description?: string | undefined; url: string } | undefined
              servers?:
                | {
                    url: string
                    description?: string | undefined
                    variables?:
                      | {
                          [x: string]: {
                            enum?: string[] | undefined
                            default: string
                            description?: string | undefined
                          }
                        }
                      | undefined
                  }[]
                | undefined
              security?: { [x: string]: string[] }[] | undefined
              tags?:
                | {
                    name: string
                    description?: string | undefined
                    externalDocs?: { description?: string | undefined; url: string } | undefined
                  }[]
                | undefined
              paths: {}
              components?:
                | {
                    schemas?: { [x: string]: unknown } | undefined
                    responses?: { [x: string]: unknown } | undefined
                    parameters?: { [x: string]: unknown } | undefined
                    examples?: { [x: string]: unknown } | undefined
                    requestBodies?: { [x: string]: unknown } | undefined
                    headers?: { [x: string]: unknown } | undefined
                    securitySchemes?: { [x: string]: unknown } | undefined
                    links?: { [x: string]: unknown } | undefined
                    callbacks?: { [x: string]: unknown } | undefined
                  }
                | undefined
              'x-tyk-api-gateway'?: XTykAPIGateway | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: ApiStatusMessage; outputFormat: 'json'; status: 403 }
      $post:
        | {
            input: { query: { dryRun?: boolean | undefined; expand?: boolean | undefined } } & {
              json: {
                openapi: string
                info: {
                  title: string
                  description?: string | undefined
                  termsOfService?: string | undefined
                  contact?:
                    | {
                        name?: string | undefined
                        url?: string | undefined
                        email?: string | undefined
                      }
                    | undefined
                  license?: { name: string; url?: string | undefined } | undefined
                  version: string
                }
                externalDocs?: { description?: string | undefined; url: string } | undefined
                servers?:
                  | {
                      url: string
                      description?: string | undefined
                      variables?:
                        | {
                            [x: string]: {
                              enum?: string[] | undefined
                              default: string
                              description?: string | undefined
                            }
                          }
                        | undefined
                    }[]
                  | undefined
                security?: { [x: string]: string[] }[] | undefined
                tags?:
                  | {
                      name: string
                      description?: string | undefined
                      externalDocs?: { description?: string | undefined; url: string } | undefined
                    }[]
                  | undefined
                paths: {}
                components?:
                  | {
                      schemas?: { [x: string]: unknown } | undefined
                      responses?: { [x: string]: unknown } | undefined
                      parameters?: { [x: string]: unknown } | undefined
                      examples?: { [x: string]: unknown } | undefined
                      requestBodies?: { [x: string]: unknown } | undefined
                      headers?: { [x: string]: unknown } | undefined
                      securitySchemes?: { [x: string]: unknown } | undefined
                      links?: { [x: string]: unknown } | undefined
                      callbacks?: { [x: string]: unknown } | undefined
                    }
                  | undefined
                'x-tyk-api-gateway'?: XTykAPIGateway | undefined
              }
            }
            output:
              | ApiModifyKeySuccess
              | {
                  openapi: string
                  info: {
                    title: string
                    description?: string | undefined
                    termsOfService?: string | undefined
                    contact?:
                      | {
                          name?: string | undefined
                          url?: string | undefined
                          email?: string | undefined
                        }
                      | undefined
                    license?: { name: string; url?: string | undefined } | undefined
                    version: string
                  }
                  externalDocs?: { description?: string | undefined; url: string } | undefined
                  servers?:
                    | {
                        url: string
                        description?: string | undefined
                        variables?:
                          | {
                              [x: string]: {
                                enum?: string[] | undefined
                                default: string
                                description?: string | undefined
                              }
                            }
                          | undefined
                      }[]
                    | undefined
                  security?: { [x: string]: string[] }[] | undefined
                  tags?:
                    | {
                        name: string
                        description?: string | undefined
                        externalDocs?: { description?: string | undefined; url: string } | undefined
                      }[]
                    | undefined
                  paths: {}
                  components?:
                    | {
                        schemas?: { [x: string]: unknown } | undefined
                        responses?: { [x: string]: unknown } | undefined
                        parameters?: { [x: string]: unknown } | undefined
                        examples?: { [x: string]: unknown } | undefined
                        requestBodies?: { [x: string]: unknown } | undefined
                        headers?: { [x: string]: unknown } | undefined
                        securitySchemes?: { [x: string]: unknown } | undefined
                        links?: { [x: string]: unknown } | undefined
                        callbacks?: { [x: string]: unknown } | undefined
                      }
                    | undefined
                  'x-tyk-api-gateway'?: XTykAPIGateway | undefined
                }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { dryRun?: boolean | undefined; expand?: boolean | undefined } } & {
              json: {
                openapi: string
                info: {
                  title: string
                  description?: string | undefined
                  termsOfService?: string | undefined
                  contact?:
                    | {
                        name?: string | undefined
                        url?: string | undefined
                        email?: string | undefined
                      }
                    | undefined
                  license?: { name: string; url?: string | undefined } | undefined
                  version: string
                }
                externalDocs?: { description?: string | undefined; url: string } | undefined
                servers?:
                  | {
                      url: string
                      description?: string | undefined
                      variables?:
                        | {
                            [x: string]: {
                              enum?: string[] | undefined
                              default: string
                              description?: string | undefined
                            }
                          }
                        | undefined
                    }[]
                  | undefined
                security?: { [x: string]: string[] }[] | undefined
                tags?:
                  | {
                      name: string
                      description?: string | undefined
                      externalDocs?: { description?: string | undefined; url: string } | undefined
                    }[]
                  | undefined
                paths: {}
                components?:
                  | {
                      schemas?: { [x: string]: unknown } | undefined
                      responses?: { [x: string]: unknown } | undefined
                      parameters?: { [x: string]: unknown } | undefined
                      examples?: { [x: string]: unknown } | undefined
                      requestBodies?: { [x: string]: unknown } | undefined
                      headers?: { [x: string]: unknown } | undefined
                      securitySchemes?: { [x: string]: unknown } | undefined
                      links?: { [x: string]: unknown } | undefined
                      callbacks?: { [x: string]: unknown } | undefined
                    }
                  | undefined
                'x-tyk-api-gateway'?: XTykAPIGateway | undefined
              }
            }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { dryRun?: boolean | undefined; expand?: boolean | undefined } } & {
              json: {
                openapi: string
                info: {
                  title: string
                  description?: string | undefined
                  termsOfService?: string | undefined
                  contact?:
                    | {
                        name?: string | undefined
                        url?: string | undefined
                        email?: string | undefined
                      }
                    | undefined
                  license?: { name: string; url?: string | undefined } | undefined
                  version: string
                }
                externalDocs?: { description?: string | undefined; url: string } | undefined
                servers?:
                  | {
                      url: string
                      description?: string | undefined
                      variables?:
                        | {
                            [x: string]: {
                              enum?: string[] | undefined
                              default: string
                              description?: string | undefined
                            }
                          }
                        | undefined
                    }[]
                  | undefined
                security?: { [x: string]: string[] }[] | undefined
                tags?:
                  | {
                      name: string
                      description?: string | undefined
                      externalDocs?: { description?: string | undefined; url: string } | undefined
                    }[]
                  | undefined
                paths: {}
                components?:
                  | {
                      schemas?: { [x: string]: unknown } | undefined
                      responses?: { [x: string]: unknown } | undefined
                      parameters?: { [x: string]: unknown } | undefined
                      examples?: { [x: string]: unknown } | undefined
                      requestBodies?: { [x: string]: unknown } | undefined
                      headers?: { [x: string]: unknown } | undefined
                      securitySchemes?: { [x: string]: unknown } | undefined
                      links?: { [x: string]: unknown } | undefined
                      callbacks?: { [x: string]: unknown } | undefined
                    }
                  | undefined
                'x-tyk-api-gateway'?: XTykAPIGateway | undefined
              }
            }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/tyk/mcps/:apiID': {
      $get:
        | {
            input: { param: { apiID: string } } & { query: { expand?: boolean | undefined } }
            output: {
              openapi: string
              info: {
                title: string
                description?: string | undefined
                termsOfService?: string | undefined
                contact?:
                  | {
                      name?: string | undefined
                      url?: string | undefined
                      email?: string | undefined
                    }
                  | undefined
                license?: { name: string; url?: string | undefined } | undefined
                version: string
              }
              externalDocs?: { description?: string | undefined; url: string } | undefined
              servers?:
                | {
                    url: string
                    description?: string | undefined
                    variables?:
                      | {
                          [x: string]: {
                            enum?: string[] | undefined
                            default: string
                            description?: string | undefined
                          }
                        }
                      | undefined
                  }[]
                | undefined
              security?: { [x: string]: string[] }[] | undefined
              tags?:
                | {
                    name: string
                    description?: string | undefined
                    externalDocs?: { description?: string | undefined; url: string } | undefined
                  }[]
                | undefined
              paths: {}
              components?:
                | {
                    schemas?: { [x: string]: unknown } | undefined
                    responses?: { [x: string]: unknown } | undefined
                    parameters?: { [x: string]: unknown } | undefined
                    examples?: { [x: string]: unknown } | undefined
                    requestBodies?: { [x: string]: unknown } | undefined
                    headers?: { [x: string]: unknown } | undefined
                    securitySchemes?: { [x: string]: unknown } | undefined
                    links?: { [x: string]: unknown } | undefined
                    callbacks?: { [x: string]: unknown } | undefined
                  }
                | undefined
              'x-tyk-api-gateway'?: XTykAPIGateway | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiID: string } } & { query: { expand?: boolean | undefined } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { apiID: string } } & {
              json: {
                openapi: string
                info: {
                  title: string
                  description?: string | undefined
                  termsOfService?: string | undefined
                  contact?:
                    | {
                        name?: string | undefined
                        url?: string | undefined
                        email?: string | undefined
                      }
                    | undefined
                  license?: { name: string; url?: string | undefined } | undefined
                  version: string
                }
                externalDocs?: { description?: string | undefined; url: string } | undefined
                servers?:
                  | {
                      url: string
                      description?: string | undefined
                      variables?:
                        | {
                            [x: string]: {
                              enum?: string[] | undefined
                              default: string
                              description?: string | undefined
                            }
                          }
                        | undefined
                    }[]
                  | undefined
                security?: { [x: string]: string[] }[] | undefined
                tags?:
                  | {
                      name: string
                      description?: string | undefined
                      externalDocs?: { description?: string | undefined; url: string } | undefined
                    }[]
                  | undefined
                paths: {}
                components?:
                  | {
                      schemas?: { [x: string]: unknown } | undefined
                      responses?: { [x: string]: unknown } | undefined
                      parameters?: { [x: string]: unknown } | undefined
                      examples?: { [x: string]: unknown } | undefined
                      requestBodies?: { [x: string]: unknown } | undefined
                      headers?: { [x: string]: unknown } | undefined
                      securitySchemes?: { [x: string]: unknown } | undefined
                      links?: { [x: string]: unknown } | undefined
                      callbacks?: { [x: string]: unknown } | undefined
                    }
                  | undefined
                'x-tyk-api-gateway'?: XTykAPIGateway | undefined
              }
            }
            output: ApiModifyKeySuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiID: string } } & {
              json: {
                openapi: string
                info: {
                  title: string
                  description?: string | undefined
                  termsOfService?: string | undefined
                  contact?:
                    | {
                        name?: string | undefined
                        url?: string | undefined
                        email?: string | undefined
                      }
                    | undefined
                  license?: { name: string; url?: string | undefined } | undefined
                  version: string
                }
                externalDocs?: { description?: string | undefined; url: string } | undefined
                servers?:
                  | {
                      url: string
                      description?: string | undefined
                      variables?:
                        | {
                            [x: string]: {
                              enum?: string[] | undefined
                              default: string
                              description?: string | undefined
                            }
                          }
                        | undefined
                    }[]
                  | undefined
                security?: { [x: string]: string[] }[] | undefined
                tags?:
                  | {
                      name: string
                      description?: string | undefined
                      externalDocs?: { description?: string | undefined; url: string } | undefined
                    }[]
                  | undefined
                paths: {}
                components?:
                  | {
                      schemas?: { [x: string]: unknown } | undefined
                      responses?: { [x: string]: unknown } | undefined
                      parameters?: { [x: string]: unknown } | undefined
                      examples?: { [x: string]: unknown } | undefined
                      requestBodies?: { [x: string]: unknown } | undefined
                      headers?: { [x: string]: unknown } | undefined
                      securitySchemes?: { [x: string]: unknown } | undefined
                      links?: { [x: string]: unknown } | undefined
                      callbacks?: { [x: string]: unknown } | undefined
                    }
                  | undefined
                'x-tyk-api-gateway'?: XTykAPIGateway | undefined
              }
            }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiID: string } } & {
              json: {
                openapi: string
                info: {
                  title: string
                  description?: string | undefined
                  termsOfService?: string | undefined
                  contact?:
                    | {
                        name?: string | undefined
                        url?: string | undefined
                        email?: string | undefined
                      }
                    | undefined
                  license?: { name: string; url?: string | undefined } | undefined
                  version: string
                }
                externalDocs?: { description?: string | undefined; url: string } | undefined
                servers?:
                  | {
                      url: string
                      description?: string | undefined
                      variables?:
                        | {
                            [x: string]: {
                              enum?: string[] | undefined
                              default: string
                              description?: string | undefined
                            }
                          }
                        | undefined
                    }[]
                  | undefined
                security?: { [x: string]: string[] }[] | undefined
                tags?:
                  | {
                      name: string
                      description?: string | undefined
                      externalDocs?: { description?: string | undefined; url: string } | undefined
                    }[]
                  | undefined
                paths: {}
                components?:
                  | {
                      schemas?: { [x: string]: unknown } | undefined
                      responses?: { [x: string]: unknown } | undefined
                      parameters?: { [x: string]: unknown } | undefined
                      examples?: { [x: string]: unknown } | undefined
                      requestBodies?: { [x: string]: unknown } | undefined
                      headers?: { [x: string]: unknown } | undefined
                      securitySchemes?: { [x: string]: unknown } | undefined
                      links?: { [x: string]: unknown } | undefined
                      callbacks?: { [x: string]: unknown } | undefined
                    }
                  | undefined
                'x-tyk-api-gateway'?: XTykAPIGateway | undefined
              }
            }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { apiID: string } }
            output: ApiModifyKeySuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiID: string } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { apiID: string } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tyk/cache/:apiID': {
      $delete:
        | {
            input: { param: { apiID: string } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiID: string } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { apiID: string } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tyk/cache/jwks/:apiID': {
      $delete:
        | {
            input: { param: { apiID: string } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiID: string } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/tyk/cache/jwks': {
      $delete:
        | { input: {}; output: ApiStatusMessage; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ApiStatusMessage; outputFormat: 'json'; status: 403 }
    }
  } & {
    '/tyk/certs': {
      $get:
        | {
            input: { query: { org_id?: string | undefined; mode?: 'detailed' | undefined } }
            output: APIAllCertificateBasics | APIAllCertificates
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { org_id?: string | undefined; mode?: 'detailed' | undefined } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { query: { org_id?: string | undefined } } & { json: string }
            output: APICertificateStatusMessage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { org_id?: string | undefined } } & { json: string }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { org_id?: string | undefined } } & { json: string }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/tyk/certs/:certID': {
      $delete:
        | {
            input: { param: { certID: string } } & { query: { org_id?: string | undefined } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { certID: string } } & { query: { org_id?: string | undefined } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
      $get:
        | {
            input: { param: { certID: string } }
            output: CertsCertificateMeta | (CertsCertificateMeta[] | null)
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { certID: string } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { certID: string } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/tyk/debug': {
      $post:
        | {
            input: { json: TraceRequest }
            output: TraceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TraceRequest }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: TraceRequest }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: TraceRequest }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tyk/keys': {
      $get:
        | { input: {}; output: ApiAllKeys; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ApiStatusMessage; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ApiStatusMessage; outputFormat: 'json'; status: 404 }
      $post:
        | {
            input: { query: { hashed?: boolean | undefined } } & { json: SessionState }
            output: ApiModifyKeySuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { hashed?: boolean | undefined } } & { json: SessionState }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { hashed?: boolean | undefined } } & { json: SessionState }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { hashed?: boolean | undefined } } & { json: SessionState }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tyk/keys/:keyID': {
      $delete:
        | {
            input: { param: { keyID: string } } & { query: { hashed?: boolean | undefined } }
            output: ApiModifyKeySuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { keyID: string } } & { query: { hashed?: boolean | undefined } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { keyID: string } } & { query: { hashed?: boolean | undefined } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { keyID: string } } & { query: { hashed?: boolean | undefined } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { keyID: string } } & { query: { hashed?: boolean | undefined } }
            output: SessionState
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { keyID: string } } & { query: { hashed?: boolean | undefined } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { keyID: string } } & { query: { hashed?: boolean | undefined } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { keyID: string } } & { query: { hashed?: boolean | undefined } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { keyID: string } } & {
              query: { suppress_reset?: '1' | undefined; hashed?: boolean | undefined }
            } & { json: SessionState }
            output: ApiModifyKeySuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { keyID: string } } & {
              query: { suppress_reset?: '1' | undefined; hashed?: boolean | undefined }
            } & { json: SessionState }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { keyID: string } } & {
              query: { suppress_reset?: '1' | undefined; hashed?: boolean | undefined }
            } & { json: SessionState }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { keyID: string } } & {
              query: { suppress_reset?: '1' | undefined; hashed?: boolean | undefined }
            } & { json: SessionState }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { keyID: string } } & {
              query: { suppress_reset?: '1' | undefined; hashed?: boolean | undefined }
            } & { json: SessionState }
            output: ApiModifyKeySuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { keyID: string } } & {
              query: { suppress_reset?: '1' | undefined; hashed?: boolean | undefined }
            } & { json: SessionState }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { keyID: string } } & {
              query: { suppress_reset?: '1' | undefined; hashed?: boolean | undefined }
            } & { json: SessionState }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { keyID: string } } & {
              query: { suppress_reset?: '1' | undefined; hashed?: boolean | undefined }
            } & { json: SessionState }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { keyID: string } } & {
              query: { suppress_reset?: '1' | undefined; hashed?: boolean | undefined }
            } & { json: SessionState }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tyk/keys/create': {
      $post:
        | {
            input: { json: SessionState }
            output: ApiModifyKeySuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SessionState }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: SessionState }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: SessionState }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tyk/keys/policy/:keyID': {
      $post:
        | {
            input: { param: { keyID: string } } & { json: PolicyUpdateObj }
            output: ApiModifyKeySuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { keyID: string } } & { json: PolicyUpdateObj }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { keyID: string } } & { json: PolicyUpdateObj }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { keyID: string } } & { json: PolicyUpdateObj }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { keyID: string } } & { json: PolicyUpdateObj }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tyk/keys/preview': {
      $post:
        | { input: { json: SessionState }; output: SessionState; outputFormat: 'json'; status: 200 }
        | {
            input: { json: SessionState }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: SessionState }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tyk/oauth/clients/:apiID': {
      $get:
        | {
            input: { param: { apiID: string } }
            output: NewClientRequest[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiID: string } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | { input: { param: { apiID: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/tyk/oauth/clients/:apiID/:keyName': {
      $delete:
        | {
            input: { param: { apiID: string; keyName: string } }
            output: ApiModifyKeySuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiID: string; keyName: string } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { apiID: string; keyName: string } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { apiID: string; keyName: string } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { apiID: string; keyName: string } }
            output: NewClientRequest
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiID: string; keyName: string } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { apiID: string; keyName: string } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { apiID: string; keyName: string } } & { json: NewClientRequest }
            output: NewClientRequest
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiID: string; keyName: string } } & { json: NewClientRequest }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiID: string; keyName: string } } & { json: NewClientRequest }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { apiID: string; keyName: string } } & { json: NewClientRequest }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { apiID: string; keyName: string } } & { json: NewClientRequest }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tyk/oauth/clients/:apiID/:keyName/rotate': {
      $put:
        | {
            input: { param: { apiID: string; keyName: string } }
            output: NewClientRequest
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiID: string; keyName: string } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { apiID: string; keyName: string } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { apiID: string; keyName: string } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tyk/oauth/clients/:apiID/:keyName/tokens': {
      $get:
        | {
            input: { param: { apiID: string; keyName: string } } & {
              query: { page?: number | undefined }
            }
            output: PaginatedOAuthClientTokens | (OAuthClientToken[] | null)
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiID: string; keyName: string } } & {
              query: { page?: number | undefined }
            }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { apiID: string; keyName: string } } & {
              query: { page?: number | undefined }
            }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { apiID: string; keyName: string } } & {
              query: { page?: number | undefined }
            }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tyk/oauth/clients/apis/:appID': {
      $get:
        | {
            input: { param: { appID: string } } & { query: { orgID?: string | undefined } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appID: string } } & { query: { orgID?: string | undefined } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/tyk/oauth/clients/create': {
      $post:
        | {
            input: { json: NewClientRequest }
            output: NewClientRequest
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: NewClientRequest }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: NewClientRequest }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: NewClientRequest }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tyk/oauth/refresh/:keyName': {
      $delete:
        | {
            input: { param: { keyName: string } } & { query: { api_id: string } }
            output: ApiModifyKeySuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { keyName: string } } & { query: { api_id: string } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { keyName: string } } & { query: { api_id: string } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { keyName: string } } & { query: { api_id: string } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { keyName: string } } & { query: { api_id: string } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tyk/oauth/revoke': {
      $post:
        | {
            input: {
              json: {
                client_id: string
                org_id?: string | undefined
                token: string
                token_type_hint?: string | undefined
              }
            } & {
              form: {
                client_id: string
                org_id?: string | undefined
                token: string
                token_type_hint?: string | undefined
              }
            }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                client_id: string
                org_id?: string | undefined
                token: string
                token_type_hint?: string | undefined
              }
            } & {
              form: {
                client_id: string
                org_id?: string | undefined
                token: string
                token_type_hint?: string | undefined
              }
            }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                client_id: string
                org_id?: string | undefined
                token: string
                token_type_hint?: string | undefined
              }
            } & {
              form: {
                client_id: string
                org_id?: string | undefined
                token: string
                token_type_hint?: string | undefined
              }
            }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/tyk/oauth/revoke_all': {
      $post:
        | {
            input: {
              json: { client_id: string; client_secret: string; org_id?: string | undefined }
            } & { form: { client_id: string; client_secret: string; org_id?: string | undefined } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: { client_id: string; client_secret: string; org_id?: string | undefined }
            } & { form: { client_id: string; client_secret: string; org_id?: string | undefined } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: { client_id: string; client_secret: string; org_id?: string | undefined }
            } & { form: { client_id: string; client_secret: string; org_id?: string | undefined } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: { client_id: string; client_secret: string; org_id?: string | undefined }
            } & { form: { client_id: string; client_secret: string; org_id?: string | undefined } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: { client_id: string; client_secret: string; org_id?: string | undefined }
            } & { form: { client_id: string; client_secret: string; org_id?: string | undefined } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/tyk/oauth/tokens': {
      $delete:
        | {
            input: { query: { scope: 'lapsed' } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { scope: 'lapsed' } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { scope: 'lapsed' } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { scope: 'lapsed' } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { scope: 'lapsed' } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tyk/org/keys': {
      $get:
        | {
            input: { query: { filter?: string | undefined } }
            output: ApiAllKeys
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { filter?: string | undefined } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { filter?: string | undefined } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/tyk/org/keys/:keyID': {
      $delete:
        | {
            input: { param: { keyID: string } }
            output: ApiModifyKeySuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { keyID: string } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { keyID: string } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { keyID: string } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { keyID: string } } & { query: { orgID?: string | undefined } }
            output: {
              access_rights?:
                | ({
                    [x: string]: {
                      allowed_urls?:
                        | (
                            | {
                                methods?: (string[] | null) | undefined
                                url?: string | undefined
                              }[]
                            | null
                          )
                        | undefined
                      api_id?: string | undefined
                      api_name?: string | undefined
                      limit?:
                        | {
                            per?: number | undefined
                            quota_max?: number | undefined
                            quota_remaining?: number | undefined
                            quota_renewal_rate?: number | undefined
                            rate?: number | undefined
                            throttle_interval?: number | undefined
                            throttle_retry_limit?: number | undefined
                          }
                        | undefined
                      versions?: (string[] | null) | undefined
                    }
                  } | null)
                | undefined
              alias?: string | undefined
              allowance?: number | undefined
              apply_policies?: (string[] | null) | undefined
              date_created?: string | undefined
              enable_detailed_recording?: boolean | undefined
              last_updated?: string | undefined
              meta_data?: ({ [x: string]: string } | null) | undefined
              org_id?: string | undefined
              per?: number | undefined
              quota_max?: number | undefined
              quota_renewal_rate?: number | undefined
              quota_renews?: number | undefined
              rate?: number | undefined
              tags?: (string[] | null) | undefined
              throttle_interval?: number | undefined
              throttle_retry_limit?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { keyID: string } } & { query: { orgID?: string | undefined } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { keyID: string } } & { query: { orgID?: string | undefined } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { keyID: string } } & { query: { reset_quota?: '1' | undefined } } & {
              json: SessionState
            }
            output: ApiModifyKeySuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { keyID: string } } & { query: { reset_quota?: '1' | undefined } } & {
              json: SessionState
            }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { keyID: string } } & { query: { reset_quota?: '1' | undefined } } & {
              json: SessionState
            }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { keyID: string } } & { query: { reset_quota?: '1' | undefined } } & {
              json: SessionState
            }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { keyID: string } } & { query: { reset_quota?: '1' | undefined } } & {
              json: SessionState
            }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { keyID: string } } & { query: { reset_quota?: '1' | undefined } } & {
              json: SessionState
            }
            output: ApiModifyKeySuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { keyID: string } } & { query: { reset_quota?: '1' | undefined } } & {
              json: SessionState
            }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { keyID: string } } & { query: { reset_quota?: '1' | undefined } } & {
              json: SessionState
            }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { keyID: string } } & { query: { reset_quota?: '1' | undefined } } & {
              json: SessionState
            }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { keyID: string } } & { query: { reset_quota?: '1' | undefined } } & {
              json: SessionState
            }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tyk/policies': {
      $get:
        | { input: {}; output: Policy[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ApiStatusMessage; outputFormat: 'json'; status: 403 }
      $post:
        | {
            input: { json: Policy }
            output: ApiModifyKeySuccess
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: Policy }; output: ApiStatusMessage; outputFormat: 'json'; status: 400 }
        | { input: { json: Policy }; output: ApiStatusMessage; outputFormat: 'json'; status: 403 }
        | { input: { json: Policy }; output: ApiStatusMessage; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/tyk/policies/:polID': {
      $delete:
        | {
            input: { param: { polID: string } }
            output: ApiModifyKeySuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { polID: string } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { polID: string } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { polID: string } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 500
          }
      $get:
        | { input: { param: { polID: string } }; output: Policy; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { polID: string } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { polID: string } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { polID: string } } & { json: Policy }
            output: ApiModifyKeySuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { polID: string } } & { json: Policy }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { polID: string } } & { json: Policy }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { polID: string } } & { json: Policy }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tyk/reload': {
      $get:
        | {
            input: { query: { block?: boolean | undefined } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { block?: boolean | undefined } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/tyk/reload/group': {
      $get:
        | { input: {}; output: ApiStatusMessage; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ApiStatusMessage; outputFormat: 'json'; status: 403 }
    }
  } & {
    '/:listen_path/tyk/batch': {
      $post:
        | {
            input: { param: { listen_path: string } } & { json: BatchRequestStructure }
            output: BatchReplyUnit[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { listen_path: string } } & { json: BatchRequestStructure }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { listen_path: string } } & { json: BatchRequestStructure }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/tyk/schema': {
      $get:
        | {
            input: { query: { oasVersion?: string | undefined } }
            output: OASSchemaResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { oasVersion?: string | undefined } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { oasVersion?: string | undefined } }
            output: OASSchemaResponse
            outputFormat: 'json'
            status: 404
          }
    }
  },
  '/'
>
export default routes
