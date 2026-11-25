type HealthCheckItem = {
  componentId?: string | undefined
  componentType?: string | undefined
  output?: string | undefined
  status?: 'pass' | 'fail' | 'warn' | undefined
  time?: string | undefined
}
type HealthCheckResponse = {
  description?: string | undefined
  details?: { [key: string]: HealthCheckItem } | undefined
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
  meta?: ({ [key: string]: any } | null) | undefined
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
  extractor_config?: ({ [key: string]: any } | null) | undefined
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
  versions?: ({ [key: string]: string } | null) | undefined
}
type EventHandlerTriggerConfig = {
  handler_meta?: ({ [key: string]: any } | null) | undefined
  handler_name?: string | undefined
}
type EventHandlerMetaConfig = {
  events?: ({ [key: string]: EventHandlerTriggerConfig[] } | null) | undefined
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
  config?: any | undefined
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
  auth_headers?: ({ [key: string]: string } | null) | undefined
  features?: GraphQLProxyFeaturesConfig | undefined
  request_headers?: ({ [key: string]: string } | null) | undefined
  request_headers_rewrite?: ({ [key: string]: RequestHeadersRewriteConfig } | null) | undefined
  subscription_type?: string | undefined
  use_response_extensions?: GraphQLResponseExtensions | undefined
}
type GraphQLSubgraphConfig = { sdl?: string | undefined }
type GraphQLSubgraphEntity = {
  api_id?: string | undefined
  headers?: ({ [key: string]: string } | null) | undefined
  name?: string | undefined
  sdl?: string | undefined
  subscription_type?: string | undefined
  url?: string | undefined
}
type GraphQLSupergraphConfig = {
  disable_query_batching?: boolean | undefined
  global_headers?: ({ [key: string]: string } | null) | undefined
  merged_sdl?: string | undefined
  subgraphs?: (GraphQLSubgraphEntity[] | null) | undefined
  updated_at?: (string | null) | undefined
}
type DatasourceSourceConfig = { data_source_config?: any | undefined; kind?: string | undefined }
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
  client_ids?: ({ [key: string]: string } | null) | undefined
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
type ResponseProcessor = { name?: string | undefined; options?: any | undefined }
type ScopeClaim = {
  scope_claim_name?: string | undefined
  scope_to_policy?: { [key: string]: string } | undefined
}
type Scopes = { jwt?: ScopeClaim | undefined; oidc?: ScopeClaim | undefined }
type SessionProviderMeta = {
  meta?: ({ [key: string]: any } | null) | undefined
  name?: string | undefined
  storage_engine?: string | undefined
}
type CheckCommand = { message?: string | undefined; name?: string | undefined }
type HostCheckObject = {
  body?: string | undefined
  commands?: (CheckCommand[] | null) | undefined
  enable_proxy_protocol?: boolean | undefined
  headers?: ({ [key: string]: string } | null) | undefined
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
  headers?: ({ [key: string]: string } | null) | undefined
}
type EndPointMeta = {
  disabled?: boolean | undefined
  ignore_case?: boolean | undefined
  method?: string | undefined
  method_actions?: { [key: string]: EndpointMethodMeta } | undefined
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
  headers?: ({ [key: string]: string } | null) | undefined
  ignore_case?: boolean | undefined
  method?: string | undefined
  path?: string | undefined
}
type PersistGraphQLMeta = {
  method?: string | undefined
  operation?: string | undefined
  path?: string | undefined
  variables?: ({ [key: string]: any } | null) | undefined
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
  add_headers?: ({ [key: string]: string } | null) | undefined
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
  header_matches?: ({ [key: string]: StringRegexMap } | null) | undefined
  path_part_matches?: ({ [key: string]: StringRegexMap } | null) | undefined
  payload_matches?: StringRegexMap | undefined
  query_val_matches?: ({ [key: string]: StringRegexMap } | null) | undefined
  request_context_matches?: ({ [key: string]: StringRegexMap } | null) | undefined
  session_meta_matches?: ({ [key: string]: StringRegexMap } | null) | undefined
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
  schema?: ({ [key: string]: any } | null) | undefined
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
  global_headers?: ({ [key: string]: string } | null) | undefined
  global_headers_disabled?: boolean | undefined
  global_headers_remove?: (string[] | null) | undefined
  global_response_headers?: ({ [key: string]: string } | null) | undefined
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
  versions?: ({ [key: string]: VersionInfo } | null) | undefined
}
type ErrorMatcher = {
  body_field?: string | undefined
  body_value?: string | undefined
  flag?: string | undefined
  message_pattern?: string | undefined
}
type ErrorResponse = {
  body?: string | undefined
  headers?: ({ [key: string]: string } | null) | undefined
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
  auth_configs?: ({ [key: string]: AuthConfig } | null) | undefined
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
  config_data?: ({ [key: string]: any } | null) | undefined
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
  jwt_scope_to_policy_mapping?: ({ [key: string]: string } | null) | undefined
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
  pinned_public_keys?: ({ [key: string]: string } | null) | undefined
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
  upstream_certificates?: ({ [key: string]: string } | null) | undefined
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
  error_overrides?: ({ [key: string]: ErrorOverride[] } | null) | undefined
  error_overrides_disabled?: boolean | undefined
}
type CORSConfigInput = {
  allow_credentials?: boolean
  allowed_headers?: string[] | null
  allowed_methods?: string[] | null
  allowed_origins?: string[] | null
  debug?: boolean
  enable?: boolean
  exposed_headers?: string[] | null
  max_age?: number
  options_passthrough?: boolean
}
type AnalyticsPluginConfigInput = { enable?: boolean; func_name?: string; plugin_path?: string }
type SignatureConfigInput = {
  algorithm?: string
  allowed_clock_skew?: number
  error_code?: number
  error_message?: string
  header?: string
  param_name?: string
  secret?: string
  use_param?: boolean
}
type AuthConfigInput = {
  auth_header_name?: string
  cookie_name?: string
  disable_header?: boolean
  name?: string
  param_name?: string
  signature?: SignatureConfigInput
  use_certificate?: boolean
  use_cookie?: boolean
  use_param?: boolean
  validate_signature?: boolean
}
type AuthProviderMetaInput = {
  meta?: { [key: string]: any } | null
  name?: string
  storage_engine?: string
}
type CacheOptionsInput = {
  cache_all_safe_requests?: boolean
  cache_by_headers?: string[] | null
  cache_control_ttl_header?: string
  cache_response_codes?: number[] | null
  cache_timeout?: bigint
  enable_cache?: boolean
  enable_upstream_cache_control?: boolean
}
type MiddlewareDefinitionInput = {
  disabled?: boolean
  name?: string
  path?: string
  raw_body_only?: boolean
  require_session?: boolean
}
type MiddlewareIdExtractorInput = {
  disabled?: boolean
  extract_from?: string
  extract_with?: string
  extractor_config?: { [key: string]: any } | null
}
type MiddlewareSectionInput = {
  auth_check?: MiddlewareDefinitionInput
  driver?: string
  id_extractor?: MiddlewareIdExtractorInput
  post?: MiddlewareDefinitionInput[] | null
  post_key_auth?: MiddlewareDefinitionInput[] | null
  pre?: MiddlewareDefinitionInput[] | null
  response?: MiddlewareDefinitionInput[] | null
}
type VersionDefinitionInput = {
  default?: string
  enabled?: boolean
  fallback_to_default?: boolean
  key?: string
  location?: string
  name?: string
  strip_path?: boolean
  strip_versioning_data?: boolean
  url_versioning_pattern?: string
  versions?: { [key: string]: string } | null
}
type EventHandlerTriggerConfigInput = {
  handler_meta?: { [key: string]: any } | null
  handler_name?: string
}
type EventHandlerMetaConfigInput = {
  events?: { [key: string]: EventHandlerTriggerConfigInput[] } | null
}
type IntrospectionCacheInput = { enabled?: boolean; timeout?: bigint }
type IntrospectionInput = {
  cache?: IntrospectionCacheInput
  client_id?: string
  client_secret?: string
  enabled?: boolean
  identity_base_field?: string
  url?: string
}
type JWTValidationInput = {
  enabled?: boolean
  expires_at_validation_skew?: number
  identity_base_field?: string
  issued_at_validation_skew?: number
  not_before_validation_skew?: number
  signing_method?: string
  source?: string
}
type ProviderInput = { introspection?: IntrospectionInput; jwt?: JWTValidationInput }
type ExternalOAuthInput = { enabled?: boolean; providers?: ProviderInput[] | null }
type GlobalRateLimitInput = { disabled?: boolean; per?: number; rate?: number }
type GraphQLTypeFieldsInput = { fields?: string[] | null; type?: string }
type GraphQLEngineDataSourceInput = {
  config?: any
  internal?: boolean
  kind?: string
  name?: string
  root_fields?: GraphQLTypeFieldsInput[] | null
}
type GraphQLFieldConfigInput = {
  disable_default_mapping?: boolean
  field_name?: string
  path?: string[] | null
  type_name?: string
}
type UDGGlobalHeaderInput = { key?: string; value?: string }
type GraphQLEngineConfigInput = {
  data_sources?: GraphQLEngineDataSourceInput[] | null
  field_configs?: GraphQLFieldConfigInput[] | null
  global_headers?: UDGGlobalHeaderInput[] | null
}
type GraphQLIntrospectionConfigInput = { disabled?: boolean }
type GraphQLPlaygroundInput = { enabled?: boolean; path?: string }
type GraphQLProxyFeaturesConfigInput = { use_immutable_headers?: boolean }
type RequestHeadersRewriteConfigInput = { remove?: boolean; value?: string }
type GraphQLResponseExtensionsInput = { on_error_forwarding?: boolean }
type GraphQLProxyConfigInput = {
  auth_headers?: { [key: string]: string } | null
  features?: GraphQLProxyFeaturesConfigInput
  request_headers?: { [key: string]: string } | null
  request_headers_rewrite?: { [key: string]: RequestHeadersRewriteConfigInput } | null
  subscription_type?: string
  use_response_extensions?: GraphQLResponseExtensionsInput
}
type GraphQLSubgraphConfigInput = { sdl?: string }
type GraphQLSubgraphEntityInput = {
  api_id?: string
  headers?: { [key: string]: string } | null
  name?: string
  sdl?: string
  subscription_type?: string
  url?: string
}
type GraphQLSupergraphConfigInput = {
  disable_query_batching?: boolean
  global_headers?: { [key: string]: string } | null
  merged_sdl?: string
  subgraphs?: GraphQLSubgraphEntityInput[] | null
  updated_at?: string | null
}
type DatasourceSourceConfigInput = { data_source_config?: any; kind?: string }
type DatasourceMappingConfigurationInput = { disabled?: boolean; path?: string }
type DatasourceTypeFieldConfigurationInput = {
  data_source?: DatasourceSourceConfigInput
  field_name?: string
  mapping?: DatasourceMappingConfigurationInput
  type_name?: string
}
type GraphQLConfigInput = {
  enabled?: boolean
  engine?: GraphQLEngineConfigInput
  execution_mode?: 'proxyOnly' | 'executionEngine' | 'subgraph' | 'supergraph' | ''
  introspection?: GraphQLIntrospectionConfigInput
  last_schema_update?: string | null
  playground?: GraphQLPlaygroundInput
  proxy?: GraphQLProxyConfigInput
  schema?: string
  subgraph?: GraphQLSubgraphConfigInput
  supergraph?: GraphQLSupergraphConfigInput
  type_field_configurations?: DatasourceTypeFieldConfigurationInput[] | null
  version?: '1' | '2' | ''
}
type NotificationsManagerInput = { oauth_on_keychange_url?: string; shared_secret?: string }
type OIDProviderConfigInput = { client_ids?: { [key: string]: string } | null; issuer?: string }
type OpenIDOptionsInput = {
  providers?: OIDProviderConfigInput[] | null
  segregate_by_client?: boolean
}
type ServiceDiscoveryConfigurationInput = {
  cache_disabled?: boolean
  cache_timeout?: number
  data_path?: string
  endpoint_returns_list?: boolean
  parent_data_path?: string
  port_data_path?: string
  query_endpoint?: string
  target_path?: string
  use_discovery_service?: boolean
  use_nested_query?: boolean
  use_target_list?: boolean
}
type ProxyConfigInput = {
  check_host_against_uptime_tests?: boolean
  disable_strip_slash?: boolean
  enable_load_balancing?: boolean
  listen_path?: string
  preserve_host_header?: boolean
  service_discovery?: ServiceDiscoveryConfigurationInput
  strip_listen_path?: boolean
  target_list?: string[] | null
  target_url?: string
  transport?: {
    proxy_url?: string
    ssl_ciphers?: string[] | null
    ssl_force_common_name_check?: boolean
    ssl_insecure_skip_verify?: boolean
    ssl_max_version?: number
    ssl_min_version?: number
  }
}
type RequestSigningMetaInput = {
  algorithm?: string
  certificate_id?: string
  header_list?: string[] | null
  is_enabled?: boolean
  key_id?: string
  secret?: string
  signature_header?: string
}
type ResponseProcessorInput = { name?: string; options?: any }
type ScopeClaimInput = { scope_claim_name?: string; scope_to_policy?: { [key: string]: string } }
type ScopesInput = { jwt?: ScopeClaimInput; oidc?: ScopeClaimInput }
type SessionProviderMetaInput = {
  meta?: { [key: string]: any } | null
  name?: string
  storage_engine?: string
}
type CheckCommandInput = { message?: string; name?: string }
type HostCheckObjectInput = {
  body?: string
  commands?: CheckCommandInput[] | null
  enable_proxy_protocol?: boolean
  headers?: { [key: string]: string } | null
  method?: string
  protocol?: string
  timeout?: number
  url?: string
}
type UptimeTestsConfigInput = {
  expire_utime_after?: number
  recheck_wait?: number
  service_discovery?: ServiceDiscoveryConfigurationInput
}
type UptimeTestsInput = {
  check_list?: HostCheckObjectInput[] | null
  config?: UptimeTestsConfigInput
}
type CacheMetaInput = {
  cache_key_regex?: string
  cache_response_codes?: number[] | null
  disabled?: boolean
  method?: string
  path?: string
  timeout?: bigint
}
type EndpointMethodMetaInput = {
  action?: 'no_action' | 'reply'
  code?: number
  data?: string
  headers?: { [key: string]: string } | null
}
type EndPointMetaInput = {
  disabled?: boolean
  ignore_case?: boolean
  method?: string
  method_actions?: { [key: string]: EndpointMethodMetaInput }
  path?: string
}
type CircuitBreakerMetaInput = {
  disable_half_open_state?: boolean
  disabled?: boolean
  method?: string
  path?: string
  return_to_service_after?: number
  samples?: bigint
  threshold_percent?: number
}
type TrackEndpointMetaInput = { disabled?: boolean; method?: string; path?: string }
type GoPluginMetaInput = {
  disabled?: boolean
  func_name?: string
  method?: string
  path?: string
  plugin_path?: string
}
type HardTimeoutMetaInput = { disabled?: boolean; method?: string; path?: string; timeout?: number }
type InternalMetaInput = { disabled?: boolean; method?: string; path?: string }
type MethodTransformMetaInput = {
  disabled?: boolean
  method?: string
  path?: string
  to_method?: string
}
type MockResponseMetaInput = {
  body?: string
  code?: number
  disabled?: boolean
  headers?: { [key: string]: string } | null
  ignore_case?: boolean
  method?: string
  path?: string
}
type PersistGraphQLMetaInput = {
  method?: string
  operation?: string
  path?: string
  variables?: { [key: string]: any } | null
}
type RateLimitMetaInput = {
  disabled?: boolean
  method?: string
  path?: string
  per?: number
  rate?: number
}
type RequestSizeMetaInput = {
  disabled?: boolean
  method?: string
  path?: string
  size_limit?: bigint
}
type TemplateDataInput = {
  enable_session?: boolean
  input_type?: 'json' | 'xml'
  template_mode?: 'blob' | 'file'
  template_source?: string
}
type TemplateMetaInput = {
  disabled?: boolean
  method?: string
  path?: string
  template_data?: TemplateDataInput
}
type HeaderInjectionMetaInput = {
  act_on?: boolean
  add_headers?: { [key: string]: string } | null
  delete_headers?: string[] | null
  disabled?: boolean
  method?: string
  path?: string
}
type TransformJQMetaInput = { filter?: string; method?: string; path?: string }
type StringRegexMapInput = { match_rx?: string; reverse?: boolean }
type RoutingTriggerOptionsInput = {
  header_matches?: { [key: string]: StringRegexMapInput } | null
  path_part_matches?: { [key: string]: StringRegexMapInput } | null
  payload_matches?: StringRegexMapInput
  query_val_matches?: { [key: string]: StringRegexMapInput } | null
  request_context_matches?: { [key: string]: StringRegexMapInput } | null
  session_meta_matches?: { [key: string]: StringRegexMapInput } | null
}
type RoutingTriggerInput = {
  on?: 'all' | 'any'
  options?: RoutingTriggerOptionsInput
  rewrite_to?: string
}
type URLRewriteMetaInput = {
  disabled?: boolean
  match_pattern?: string
  method?: string
  path?: string
  rewrite_to?: string
  triggers?: RoutingTriggerInput[] | null
}
type ValidatePathMetaInput = {
  disabled?: boolean
  error_response_code?: number
  method?: string
  path?: string
  schema?: { [key: string]: any } | null
  schema_b64?: string
}
type ValidateRequestMetaInput = {
  enabled?: boolean
  error_response_code?: number
  method?: string
  path?: string
}
type VirtualMetaInput = {
  disabled?: boolean
  function_source_type?: 'blob' | 'file'
  function_source_uri?: string
  method?: string
  path?: string
  proxy_on_error?: boolean
  response_function_name?: string
  use_session?: boolean
}
type ExtendedPathsSetInput = {
  advance_cache_config?: CacheMetaInput[]
  black_list?: EndPointMetaInput[]
  cache?: string[]
  circuit_breakers?: CircuitBreakerMetaInput[]
  do_not_track_endpoints?: TrackEndpointMetaInput[]
  go_plugin?: GoPluginMetaInput[]
  hard_timeouts?: HardTimeoutMetaInput[]
  ignored?: EndPointMetaInput[]
  internal?: InternalMetaInput[]
  method_transforms?: MethodTransformMetaInput[]
  mock_response?: MockResponseMetaInput[]
  persist_graphql?: PersistGraphQLMetaInput[] | null
  rate_limit?: RateLimitMetaInput[] | null
  size_limits?: RequestSizeMetaInput[]
  track_endpoints?: TrackEndpointMetaInput[]
  transform?: TemplateMetaInput[]
  transform_headers?: HeaderInjectionMetaInput[]
  transform_jq?: TransformJQMetaInput[]
  transform_jq_response?: TransformJQMetaInput[]
  transform_response?: TemplateMetaInput[]
  transform_response_headers?: HeaderInjectionMetaInput[]
  url_rewrites?: URLRewriteMetaInput[]
  validate_json?: ValidatePathMetaInput[]
  validate_request?: ValidateRequestMetaInput[]
  virtual?: VirtualMetaInput[]
  white_list?: EndPointMetaInput[]
}
type VersionInfoInput = {
  expires?: string
  extended_paths?: ExtendedPathsSetInput
  global_headers?: { [key: string]: string } | null
  global_headers_disabled?: boolean
  global_headers_remove?: string[] | null
  global_response_headers?: { [key: string]: string } | null
  global_response_headers_disabled?: boolean
  global_response_headers_remove?: string[] | null
  global_size_limit?: bigint
  ignore_endpoint_case?: boolean
  name?: string
  override_target?: string
  paths?: { black_list?: string[] | null; ignored?: string[] | null; white_list?: string[] | null }
  use_extended_paths?: boolean
}
type VersionDataInput = {
  default_version?: string
  not_versioned?: boolean
  versions?: { [key: string]: VersionInfoInput } | null
}
type ErrorMatcherInput = {
  body_field?: string
  body_value?: string
  flag?: string
  message_pattern?: string
}
type ErrorResponseInput = {
  body?: string
  headers?: { [key: string]: string } | null
  message?: string
  status_code?: number
  template?: string
}
type ErrorOverrideInput = { match?: ErrorMatcherInput; response?: ErrorResponseInput }
type APIDefinitionInput = {
  CORS?: CORSConfigInput
  active?: boolean
  allowed_ips?: string[] | null
  analytics_plugin?: AnalyticsPluginConfigInput
  api_id?: string
  auth?: AuthConfigInput
  auth_configs?: { [key: string]: AuthConfigInput } | null
  auth_provider?: AuthProviderMetaInput
  base_identity_provided_by?: string
  basic_auth?: {
    body_password_regexp?: string
    body_user_regexp?: string
    cache_ttl?: number
    disable_caching?: boolean
    extract_from_body?: boolean
  }
  blacklisted_ips?: string[] | null
  cache_options?: CacheOptionsInput
  certificate_pinning_disabled?: boolean
  certificates?: string[] | null
  client_certificates?: string[] | null
  config_data?: { [key: string]: any } | null
  config_data_disabled?: boolean
  custom_middleware?: MiddlewareSectionInput
  custom_middleware_bundle?: string
  custom_middleware_bundle_disabled?: boolean
  custom_plugin_auth_enabled?: boolean
  definition?: VersionDefinitionInput
  detailed_tracing?: boolean
  disable_quota?: boolean
  disable_rate_limit?: boolean
  do_not_track?: boolean
  domain?: string
  domain_disabled?: boolean
  dont_set_quota_on_create?: boolean
  enable_batch_request_support?: boolean
  enable_context_vars?: boolean
  enable_coprocess_auth?: boolean
  enable_detailed_recording?: boolean
  enable_ip_blacklisting?: boolean
  enable_ip_whitelisting?: boolean
  enable_jwt?: boolean
  enable_proxy_protocol?: boolean
  enable_signature_checking?: boolean
  event_handlers?: EventHandlerMetaConfigInput
  expiration?: string
  expire_analytics_after?: number
  external_oauth?: ExternalOAuthInput
  global_rate_limit?: GlobalRateLimitInput
  graphql?: GraphQLConfigInput
  hmac_allowed_algorithms?: string[] | null
  hmac_allowed_clock_skew?: number
  id?: string
  idp_client_id_mapping_disabled?: boolean
  internal?: boolean
  is_oas?: boolean
  jwt_client_base_field?: string
  jwt_default_policies?: string[] | null
  jwt_expires_at_validation_skew?: number
  jwt_identity_base_field?: string
  jwt_issued_at_validation_skew?: number
  jwt_not_before_validation_skew?: number
  jwt_policy_field_name?: string
  jwt_scope_claim_name?: string
  jwt_scope_to_policy_mapping?: { [key: string]: string } | null
  jwt_signing_method?: string
  jwt_skip_kid?: boolean
  jwt_source?: string
  listen_port?: number
  name?: string
  notifications?: NotificationsManagerInput
  oauth_meta?: {
    allowed_access_types?: string[] | null
    allowed_authorize_types?: string[] | null
    auth_login_redirect?: string
  }
  openid_options?: OpenIDOptionsInput
  org_id?: string
  pinned_public_keys?: { [key: string]: string } | null
  protocol?: string
  proxy?: ProxyConfigInput
  request_signing?: RequestSigningMetaInput
  response_processors?: ResponseProcessorInput[] | null
  scopes?: ScopesInput
  session_lifetime?: number
  session_lifetime_respects_key_expiration?: boolean
  session_provider?: SessionProviderMetaInput
  slug?: string
  strip_auth_data?: boolean
  tag_headers?: string[] | null
  tags?: string[] | null
  tags_disabled?: boolean
  upstream_certificates?: { [key: string]: string } | null
  upstream_certificates_disabled?: boolean
  uptime_tests?: UptimeTestsInput
  use_basic_auth?: boolean
  use_go_plugin_auth?: boolean
  use_keyless?: boolean
  use_mutual_tls_auth?: boolean
  use_oauth2?: boolean
  use_openid?: boolean
  use_standard_auth?: boolean
  version_data?: VersionDataInput
  error_overrides?: { [key: string]: ErrorOverrideInput[] } | null
  error_overrides_disabled?: boolean
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
  value?: ({ [key: string]: any } | null) | undefined
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
type Operations = { [key: string]: Operation }
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
type SecuritySchemes = { [key: string]: any }
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
type TykVendorExtension = { 'x-tyk-api-gateway'?: XTykAPIGateway | undefined }
type StateInput = { active?: boolean; internal?: boolean }
type VersionToIDInput = { id?: string; name?: string }
type VersioningInput = {
  default?: string
  enabled?: boolean
  fallbackToDefault?: boolean
  key?: string
  location?: string
  name?: string
  stripVersioningData?: boolean
  urlVersioningPattern?: string
  versions?: VersionToIDInput[] | null
}
type InfoInput = {
  dbId?: string
  expiration?: string
  id?: string
  name?: string
  orgId?: string
  state?: StateInput
  versioning?: VersioningInput
}
type CacheInput = {
  cacheAllSafeRequests?: boolean
  cacheByHeaders?: string[]
  cacheResponseCodes?: number[]
  controlTTLHeaderName?: string
  enableUpstreamCacheControl?: boolean
  enabled?: boolean
  timeout?: number
}
type ContextVariablesInput = { enabled?: boolean }
type CORSInput = {
  allowCredentials?: boolean
  allowedHeaders?: string[]
  allowedMethods?: string[]
  allowedOrigins?: string[]
  debug?: boolean
  enabled?: boolean
  exposedHeaders?: string[]
  maxAge?: number
  optionsPassthrough?: boolean
}
type PluginBundleInput = { enabled?: boolean; path?: string }
type PluginConfigDataInput = { enabled?: boolean; value?: { [key: string]: any } | null }
type PluginConfigInput = {
  bundle?: PluginBundleInput
  data?: PluginConfigDataInput
  driver?: string
}
type CustomPluginInput = {
  enabled?: boolean
  functionName?: string
  path?: string
  rawBodyOnly?: boolean
  requireSession?: boolean
}
type CustomPluginsInput = CustomPluginInput[]
type PostAuthenticationPluginInput = { plugins?: CustomPluginsInput }
type PostPluginInput = { plugins?: CustomPluginsInput }
type PrePluginInput = { plugins?: CustomPluginsInput }
type ResponsePluginInput = { plugins?: CustomPluginsInput }
type TrafficLogsInput = { enabled?: boolean }
type HeaderInput = { name?: string; value?: string }
type HeadersInput = HeaderInput[]
type TransformHeadersInput = { add?: HeadersInput; enabled?: boolean; remove?: string[] }
type GlobalInput = {
  cache?: CacheInput
  contextVariables?: ContextVariablesInput
  cors?: CORSInput
  pluginConfig?: PluginConfigInput
  postAuthenticationPlugin?: PostAuthenticationPluginInput
  postAuthenticationPlugins?: CustomPluginsInput
  postPlugin?: PostPluginInput
  postPlugins?: CustomPluginsInput
  prePlugin?: PrePluginInput
  prePlugins?: CustomPluginsInput
  responsePlugin?: ResponsePluginInput
  responsePlugins?: CustomPluginsInput
  trafficLogs?: TrafficLogsInput
  transformRequestHeaders?: TransformHeadersInput
  transformResponseHeaders?: TransformHeadersInput
}
type AllowanceInput = { enabled?: boolean; ignoreCase?: boolean }
type CachePluginInput = {
  cacheByRegex?: string
  cacheResponseCodes?: number[]
  enabled?: boolean
  timeout?: number
}
type CircuitBreakerInput = {
  coolDownPeriod?: number
  enabled?: boolean
  halfOpenStateEnabled?: boolean
  sampleSize?: number
  threshold?: number
}
type TrackEndpointInput = { enabled?: boolean }
type EnforceTimeoutInput = { enabled?: boolean; value?: number }
type InternalInput = { enabled?: boolean }
type FromOASExamplesInput = {
  code?: number
  contentType?: string
  enabled?: boolean
  exampleName?: string
}
type MockResponseInput = {
  body?: string
  code?: number
  enabled?: boolean
  fromOASExamples?: FromOASExamplesInput
  headers?: HeadersInput
}
type EndpointPostPluginInput = {
  enabled?: boolean
  functionName?: string
  name?: string
  path?: string
}
type EndpointPostPluginsInput = EndpointPostPluginInput[]
type RateLimitEndpointInput = { enabled?: boolean; per?: number; rate?: number }
type RequestSizeLimitInput = { enabled?: boolean; value?: number }
type TransformBodyInput = { body?: string; enabled?: boolean; format?: string; path?: string }
type TransformRequestMethodInput = { enabled?: boolean; toMethod?: string }
type URLRewriteRuleInput = { in?: string; name?: string; negate?: boolean; pattern?: string }
type URLRewriteTriggerInput = {
  condition?: string
  rewriteTo?: string
  rules?: URLRewriteRuleInput[]
}
type URLRewriteInput = {
  enabled?: boolean
  pattern?: string
  rewriteTo?: string
  triggers?: URLRewriteTriggerInput[]
}
type ValidateRequestInput = { enabled?: boolean; errorResponseCode?: number }
type VirtualEndpointInput = {
  body?: string
  enabled?: boolean
  functionName?: string
  name?: string
  path?: string
  proxyOnError?: boolean
  requireSession?: boolean
}
type OperationInput = {
  allow?: AllowanceInput
  block?: AllowanceInput
  cache?: CachePluginInput
  circuitBreaker?: CircuitBreakerInput
  doNotTrackEndpoint?: TrackEndpointInput
  enforceTimeout?: EnforceTimeoutInput
  ignoreAuthentication?: AllowanceInput
  internal?: InternalInput
  mockResponse?: MockResponseInput
  postPlugins?: EndpointPostPluginsInput
  rateLimit?: RateLimitEndpointInput
  requestSizeLimit?: RequestSizeLimitInput
  trackEndpoint?: TrackEndpointInput
  transformRequestBody?: TransformBodyInput
  transformRequestHeaders?: TransformHeadersInput
  transformRequestMethod?: TransformRequestMethodInput
  transformResponseBody?: TransformBodyInput
  transformResponseHeaders?: TransformHeadersInput
  urlRewrite?: URLRewriteInput
  validateRequest?: ValidateRequestInput
  virtualEndpoint?: VirtualEndpointInput
}
type OperationsInput = { [key: string]: OperationInput }
type MiddlewareInput = { global?: GlobalInput; operations?: OperationsInput }
type AuthSourceInput = { enabled?: boolean; name?: string }
type AuthSourcesInput = {
  cookie?: AuthSourceInput
  header?: AuthSourceInput
  query?: AuthSourceInput
}
type IDExtractorConfigInput = {
  formParamName?: string
  headerName?: string
  regexp?: string
  regexpMatchIndex?: number
  xPathExp?: string
}
type IDExtractorInput = {
  config?: IDExtractorConfigInput
  enabled?: boolean
  source?: string
  with?: string
}
type AuthenticationPluginInput = {
  enabled?: boolean
  functionName?: string
  idExtractor?: IDExtractorInput
  path?: string
  rawBodyOnly?: boolean
}
type CustomPluginAuthenticationInput = {
  AuthSources?: AuthSourcesInput
  config?: AuthenticationPluginInput
  enabled?: boolean
}
type HMACInput = {
  AuthSources?: AuthSourcesInput
  allowedAlgorithms?: string[]
  allowedClockSkew?: number
  enabled?: boolean
}
type ClientToPolicyInput = { clientId?: string; policyId?: string }
type ProviderType2Input = { clientToPolicyMapping?: ClientToPolicyInput[]; issuer?: string }
type ScopeToPolicyInput = { policyId?: string; scope?: string }
type ScopesType2Input = { claimName?: string; scopeToPolicyMapping?: ScopeToPolicyInput[] }
type OIDCInput = {
  AuthSources?: AuthSourcesInput
  enabled?: boolean
  providers?: ProviderType2Input[]
  scopes?: ScopesType2Input
  segregateByClientId?: boolean
}
type SecuritySchemesInput = { [key: string]: any }
type AuthenticationInput = {
  baseIdentityProvider?: string
  custom?: CustomPluginAuthenticationInput
  enabled?: boolean
  hmac?: HMACInput
  oidc?: OIDCInput
  securitySchemes?: SecuritySchemesInput
  stripAuthorizationData?: boolean
}
type ClientCertificatesInput = { allowlist?: string[] | null; enabled?: boolean }
type DomainInput = { certificates?: string[]; enabled?: boolean; name?: string }
type DetailedActivityLogsInput = { enabled?: boolean }
type DetailedTracingInput = { enabled?: boolean }
type EventHandlerInput = {
  enabled?: boolean
  id?: string
  name?: string
  trigger?: string
  type?: string
}
type EventHandlersInput = EventHandlerInput[]
type GatewayTagsInput = { enabled?: boolean; tags?: string[] | null }
type ListenPathInput = { strip?: boolean; value?: string }
type ServerInput = {
  authentication?: AuthenticationInput
  clientCertificates?: ClientCertificatesInput
  customDomain?: DomainInput
  detailedActivityLogs?: DetailedActivityLogsInput
  detailedTracing?: DetailedTracingInput
  eventHandlers?: EventHandlersInput
  gatewayTags?: GatewayTagsInput
  listenPath?: ListenPathInput
}
type PinnedPublicKeyInput = { domain?: string; publicKeys?: string[] | null }
type PinnedPublicKeysInput = PinnedPublicKeyInput[] | null
type CertificatePinningInput = {
  domainToPublicKeysMapping?: PinnedPublicKeysInput
  enabled?: boolean
}
type DomainToCertificateInput = { certificate?: string; domain?: string }
type MutualTLSInput = {
  domainToCertificateMapping?: DomainToCertificateInput[] | null
  enabled?: boolean
}
type RateLimitInput = { enabled?: boolean; per?: number; rate?: number }
type ServiceDiscoveryCacheInput = { enabled?: boolean; timeout?: number }
type ServiceDiscoveryInput = {
  cache?: ServiceDiscoveryCacheInput
  cacheTimeout?: number
  dataPath?: string
  enabled?: boolean
  endpointReturnsList?: boolean
  parentDataPath?: string
  portDataPath?: string
  queryEndpoint?: string
  targetPath?: string
  useNestedQuery?: boolean
  useTargetList?: boolean
}
type TestInput = { serviceDiscovery?: ServiceDiscoveryInput }
type UpstreamInput = {
  certificatePinning?: CertificatePinningInput
  mutualTLS?: MutualTLSInput
  rateLimit?: RateLimitInput
  serviceDiscovery?: ServiceDiscoveryInput
  test?: TestInput
  url?: string
}
type XTykAPIGatewayInput = {
  info?: InfoInput
  middleware?: MiddlewareInput
  server?: ServerInput
  upstream?: UpstreamInput
}
type TykVendorExtensionInput = { 'x-tyk-api-gateway'?: XTykAPIGatewayInput }
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
type PkixName = { [key: string]: unknown }
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
type TraceRequestInput = unknown | unknown
type TraceResponse = {
  logs?: string | undefined
  message?: string | undefined
  response?: string | undefined
}
type ApiAllKeys = { keys?: (string[] | null) | undefined }
type GraphqlTypeInput = { fields?: string[] | null; name?: string }
type BodyFieldMatchInput = { match_rx?: string; path?: string; reverse?: boolean }
type AccessConditionOptionsInput = {
  body_field_matches?: BodyFieldMatchInput[] | null
  header_matches?: { [key: string]: StringRegexMapInput } | null
  path_part_matches?: { [key: string]: StringRegexMapInput } | null
  payload_matches?: StringRegexMapInput
  query_val_matches?: { [key: string]: StringRegexMapInput } | null
  request_context_matches?: { [key: string]: StringRegexMapInput } | null
  session_meta_matches?: { [key: string]: StringRegexMapInput } | null
}
type AccessConditionInput = { on?: 'all' | 'any' | ''; options?: AccessConditionOptionsInput }
type AccessSpecInput = {
  conditions?: AccessConditionInput[] | null
  methods?: string[] | null
  url?: string
}
type RateLimitSmoothingInput = {
  delay?: number
  enabled?: boolean
  step?: number
  threshold?: number
  trigger?: number
} | null
type RateLimitType2Input = { per?: number; rate?: number; smoothing?: RateLimitSmoothingInput }
type EndpointMethodInput = { limit?: RateLimitType2Input; name?: string }
type EndpointMethodsInput = EndpointMethodInput[]
type EndpointInput = { methods?: EndpointMethodsInput; path?: string }
type EndpointsInput = EndpointInput[]
type FieldLimitsInput = { max_query_depth?: number }
type FieldAccessDefinitionInput = {
  field_name?: string
  limits?: FieldLimitsInput
  type_name?: string
}
type APILimitInput = {
  max_query_depth?: number
  per?: number
  quota_max?: number
  quota_remaining?: number
  quota_renewal_rate?: number
  quota_renews?: number
  rate?: number
  smoothing?: RateLimitSmoothingInput
  throttle_interval?: number
  throttle_retry_limit?: number
}
type AccessDefinitionInput = {
  allowance_scope?: string
  allowed_types?: GraphqlTypeInput[] | null
  allowed_urls?: AccessSpecInput[] | null
  api_id?: string
  api_name?: string
  disable_introspection?: boolean
  endpoints?: EndpointsInput
  field_access_rights?: FieldAccessDefinitionInput[] | null
  limit?: APILimitInput
  restricted_types?: GraphqlTypeInput[] | null
  versions?: string[] | null
}
type BasicAuthDataInput = { hash_type?: string; password?: string }
type JWTDataInput = { secret?: string }
type MonitorInput = { trigger_limits?: number[] | null }
type SessionStateInput = {
  access_rights?: { [key: string]: AccessDefinitionInput } | null
  alias?: string
  allowance?: number
  apply_policies?: string[] | null
  apply_policy_id?: string
  basic_auth_data?: BasicAuthDataInput
  certificate?: string
  data_expires?: bigint
  date_created?: string
  enable_detail_recording?: boolean
  enable_detailed_recording?: boolean
  enable_http_signature_validation?: boolean
  expires?: bigint
  hmac_enabled?: boolean
  hmac_string?: string
  id_extractor_deadline?: bigint
  is_inactive?: boolean
  jwt_data?: JWTDataInput
  last_check?: bigint
  last_updated?: string
  max_query_depth?: number
  meta_data?: { [key: string]: any } | null
  monitor?: MonitorInput
  oauth_client_id?: string
  oauth_keys?: { [key: string]: string } | null
  org_id?: string
  per?: number
  post_expiry_action?: 'retain' | 'delete'
  post_expiry_grace_period?: bigint
  quota_max?: bigint
  quota_remaining?: bigint
  quota_renewal_rate?: bigint
  quota_renews?: bigint
  rate?: number
  rsa_certificate_id?: string
  session_lifetime?: bigint
  smoothing?: RateLimitSmoothingInput
  tags?: string[] | null
  throttle_interval?: number
  throttle_retry_limit?: number
}
type GraphqlType = { fields?: (string[] | null) | undefined; name?: string | undefined }
type BodyFieldMatch = {
  match_rx?: string | undefined
  path?: string | undefined
  reverse?: boolean | undefined
}
type AccessConditionOptions = {
  body_field_matches?: (BodyFieldMatch[] | null) | undefined
  header_matches?: ({ [key: string]: StringRegexMap } | null) | undefined
  path_part_matches?: ({ [key: string]: StringRegexMap } | null) | undefined
  payload_matches?: StringRegexMap | undefined
  query_val_matches?: ({ [key: string]: StringRegexMap } | null) | undefined
  request_context_matches?: ({ [key: string]: StringRegexMap } | null) | undefined
  session_meta_matches?: ({ [key: string]: StringRegexMap } | null) | undefined
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
  access_rights?: ({ [key: string]: AccessDefinition } | null) | undefined
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
  meta_data?: ({ [key: string]: any } | null) | undefined
  monitor?: Monitor | undefined
  oauth_client_id?: string | undefined
  oauth_keys?: ({ [key: string]: string } | null) | undefined
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
type PolicyUpdateObjInput = { apply_policies?: string[] | null; policy?: string }
type NewClientRequest = {
  api_id?: string | undefined
  client_id?: string | undefined
  description?: string | undefined
  meta_data?: ({ [key: string]: string } | null) | undefined
  policy_id?: string | undefined
  redirect_uri?: string | undefined
  secret?: string | undefined
}
type NewClientRequestInput = {
  api_id?: string
  client_id?: string
  description?: string
  meta_data?: { [key: string]: string } | null
  policy_id?: string
  redirect_uri?: string
  secret?: string
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
type GraphAccessDefinition = { [key: string]: unknown }
type PolicyPartitions = {
  acl?: boolean | undefined
  complexity?: boolean | undefined
  per_api?: boolean | undefined
  quota?: boolean | undefined
  rate_limit?: boolean | undefined
}
type Policy = {
  _id?: string | undefined
  access_rights?: ({ [key: string]: AccessDefinition } | null) | undefined
  active?: boolean | undefined
  enable_http_signature_validation?: boolean | undefined
  graphql_access_rights?: ({ [key: string]: GraphAccessDefinition } | null) | undefined
  hmac_enabled?: boolean | undefined
  id?: string | undefined
  is_inactive?: boolean | undefined
  key_expires_in?: bigint | undefined
  last_updated?: string | undefined
  max_query_depth?: number | undefined
  meta_data?: ({ [key: string]: any } | null) | undefined
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
type GraphAccessDefinitionInput = { [key: string]: unknown }
type PolicyPartitionsInput = {
  acl?: boolean
  complexity?: boolean
  per_api?: boolean
  quota?: boolean
  rate_limit?: boolean
}
type PolicyInput = {
  _id?: string
  access_rights?: { [key: string]: AccessDefinitionInput } | null
  active?: boolean
  enable_http_signature_validation?: boolean
  graphql_access_rights?: { [key: string]: GraphAccessDefinitionInput } | null
  hmac_enabled?: boolean
  id?: string
  is_inactive?: boolean
  key_expires_in?: bigint
  last_updated?: string
  max_query_depth?: number
  meta_data?: { [key: string]: any } | null
  name?: string
  org_id?: string
  partitions?: PolicyPartitionsInput
  per?: number
  post_expiry_action?: 'retain' | 'delete'
  post_expiry_grace_period?: bigint
  quota_max?: bigint
  quota_renewal_rate?: bigint
  rate?: number
  smoothing?: RateLimitSmoothingInput
  tags?: string[] | null
  throttle_interval?: number
  throttle_retry_limit?: number
}
type RequestDefinitionInput = {
  body?: string
  headers?: { [key: string]: string } | null
  method?: string
  relative_url?: string
}
type BatchRequestStructureInput = {
  requests?: RequestDefinitionInput[] | null
  suppress_parallel_execution?: boolean
}
type HttpHeader = { [key: string]: string[] }
type BatchReplyUnit = {
  body?: string | undefined
  code?: number | undefined
  headers?: HttpHeader | undefined
  relative_url?: string | undefined
}
type OASSchemaResponse = {
  message?: string | undefined
  schema?: any | undefined
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
                base_api_id?: string
                base_api_version_name?: string
                new_version_name?: string
                set_default?: string
              }
            } & { json: APIDefinitionInput }
            output: ApiModifyKeySuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                base_api_id?: string
                base_api_version_name?: string
                new_version_name?: string
                set_default?: string
              }
            } & { json: APIDefinitionInput }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                base_api_id?: string
                base_api_version_name?: string
                new_version_name?: string
                set_default?: string
              }
            } & { json: APIDefinitionInput }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                base_api_id?: string
                base_api_version_name?: string
                new_version_name?: string
                set_default?: string
              }
            } & { json: APIDefinitionInput }
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
            input: { param: { apiID: string } } & { json: APIDefinitionInput }
            output: ApiModifyKeySuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiID: string } } & { json: APIDefinitionInput }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiID: string } } & { json: APIDefinitionInput }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { apiID: string } } & { json: APIDefinitionInput }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { apiID: string } } & { json: APIDefinitionInput }
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
              query: { searchText?: string; accessType?: 'internal' | 'external' }
            }
            output: VersionMetas
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiID: string } } & {
              query: { searchText?: string; accessType?: 'internal' | 'external' }
            }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { apiID: string } } & {
              query: { searchText?: string; accessType?: 'internal' | 'external' }
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
            input: { query: { mode?: 'public' } }
            output: ({
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
                          [key: string]: {
                            enum?: string[] | undefined
                            default: string
                            description?: string | undefined
                          }
                        }
                      | undefined
                  }[]
                | undefined
              security?: { [key: string]: string[] }[] | undefined
              tags?:
                | {
                    name: string
                    description?: string | undefined
                    externalDocs?: { description?: string | undefined; url: string } | undefined
                  }[]
                | undefined
              paths: { [key: string]: unknown }
              components?:
                | {
                    schemas?: { [key: string]: unknown } | undefined
                    responses?: { [key: string]: unknown } | undefined
                    parameters?: { [key: string]: unknown } | undefined
                    examples?: { [key: string]: unknown } | undefined
                    requestBodies?: { [key: string]: unknown } | undefined
                    headers?: { [key: string]: unknown } | undefined
                    securitySchemes?: { [key: string]: unknown } | undefined
                    links?: { [key: string]: unknown } | undefined
                    callbacks?: { [key: string]: unknown } | undefined
                  }
                | undefined
            } & TykVendorExtension)[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { mode?: 'public' } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: {
              query: {
                base_api_id?: string
                base_api_version_name?: string
                new_version_name?: string
                set_default?: string
              }
            } & {
              json: {
                openapi: string
                info: {
                  title: string
                  description?: string
                  termsOfService?: string
                  contact?: { name?: string; url?: string; email?: string }
                  license?: { name: string; url?: string }
                  version: string
                }
                externalDocs?: { description?: string; url: string }
                servers?: {
                  url: string
                  description?: string
                  variables?: {
                    [key: string]: { enum?: string[]; default: string; description?: string }
                  }
                }[]
                security?: { [key: string]: string[] }[]
                tags?: {
                  name: string
                  description?: string
                  externalDocs?: { description?: string; url: string }
                }[]
                paths: { [key: string]: unknown }
                components?: {
                  schemas?: { [key: string]: unknown }
                  responses?: { [key: string]: unknown }
                  parameters?: { [key: string]: unknown }
                  examples?: { [key: string]: unknown }
                  requestBodies?: { [key: string]: unknown }
                  headers?: { [key: string]: unknown }
                  securitySchemes?: { [key: string]: unknown }
                  links?: { [key: string]: unknown }
                  callbacks?: { [key: string]: unknown }
                }
              } & TykVendorExtensionInput
            }
            output: ApiModifyKeySuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                base_api_id?: string
                base_api_version_name?: string
                new_version_name?: string
                set_default?: string
              }
            } & {
              json: {
                openapi: string
                info: {
                  title: string
                  description?: string
                  termsOfService?: string
                  contact?: { name?: string; url?: string; email?: string }
                  license?: { name: string; url?: string }
                  version: string
                }
                externalDocs?: { description?: string; url: string }
                servers?: {
                  url: string
                  description?: string
                  variables?: {
                    [key: string]: { enum?: string[]; default: string; description?: string }
                  }
                }[]
                security?: { [key: string]: string[] }[]
                tags?: {
                  name: string
                  description?: string
                  externalDocs?: { description?: string; url: string }
                }[]
                paths: { [key: string]: unknown }
                components?: {
                  schemas?: { [key: string]: unknown }
                  responses?: { [key: string]: unknown }
                  parameters?: { [key: string]: unknown }
                  examples?: { [key: string]: unknown }
                  requestBodies?: { [key: string]: unknown }
                  headers?: { [key: string]: unknown }
                  securitySchemes?: { [key: string]: unknown }
                  links?: { [key: string]: unknown }
                  callbacks?: { [key: string]: unknown }
                }
              } & TykVendorExtensionInput
            }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                base_api_id?: string
                base_api_version_name?: string
                new_version_name?: string
                set_default?: string
              }
            } & {
              json: {
                openapi: string
                info: {
                  title: string
                  description?: string
                  termsOfService?: string
                  contact?: { name?: string; url?: string; email?: string }
                  license?: { name: string; url?: string }
                  version: string
                }
                externalDocs?: { description?: string; url: string }
                servers?: {
                  url: string
                  description?: string
                  variables?: {
                    [key: string]: { enum?: string[]; default: string; description?: string }
                  }
                }[]
                security?: { [key: string]: string[] }[]
                tags?: {
                  name: string
                  description?: string
                  externalDocs?: { description?: string; url: string }
                }[]
                paths: { [key: string]: unknown }
                components?: {
                  schemas?: { [key: string]: unknown }
                  responses?: { [key: string]: unknown }
                  parameters?: { [key: string]: unknown }
                  examples?: { [key: string]: unknown }
                  requestBodies?: { [key: string]: unknown }
                  headers?: { [key: string]: unknown }
                  securitySchemes?: { [key: string]: unknown }
                  links?: { [key: string]: unknown }
                  callbacks?: { [key: string]: unknown }
                }
              } & TykVendorExtensionInput
            }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                base_api_id?: string
                base_api_version_name?: string
                new_version_name?: string
                set_default?: string
              }
            } & {
              json: {
                openapi: string
                info: {
                  title: string
                  description?: string
                  termsOfService?: string
                  contact?: { name?: string; url?: string; email?: string }
                  license?: { name: string; url?: string }
                  version: string
                }
                externalDocs?: { description?: string; url: string }
                servers?: {
                  url: string
                  description?: string
                  variables?: {
                    [key: string]: { enum?: string[]; default: string; description?: string }
                  }
                }[]
                security?: { [key: string]: string[] }[]
                tags?: {
                  name: string
                  description?: string
                  externalDocs?: { description?: string; url: string }
                }[]
                paths: { [key: string]: unknown }
                components?: {
                  schemas?: { [key: string]: unknown }
                  responses?: { [key: string]: unknown }
                  parameters?: { [key: string]: unknown }
                  examples?: { [key: string]: unknown }
                  requestBodies?: { [key: string]: unknown }
                  headers?: { [key: string]: unknown }
                  securitySchemes?: { [key: string]: unknown }
                  links?: { [key: string]: unknown }
                  callbacks?: { [key: string]: unknown }
                }
              } & TykVendorExtensionInput
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
            input: { param: { apiID: string } } & { query: { mode?: 'public' } }
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
                          [key: string]: {
                            enum?: string[] | undefined
                            default: string
                            description?: string | undefined
                          }
                        }
                      | undefined
                  }[]
                | undefined
              security?: { [key: string]: string[] }[] | undefined
              tags?:
                | {
                    name: string
                    description?: string | undefined
                    externalDocs?: { description?: string | undefined; url: string } | undefined
                  }[]
                | undefined
              paths: { [key: string]: unknown }
              components?:
                | {
                    schemas?: { [key: string]: unknown } | undefined
                    responses?: { [key: string]: unknown } | undefined
                    parameters?: { [key: string]: unknown } | undefined
                    examples?: { [key: string]: unknown } | undefined
                    requestBodies?: { [key: string]: unknown } | undefined
                    headers?: { [key: string]: unknown } | undefined
                    securitySchemes?: { [key: string]: unknown } | undefined
                    links?: { [key: string]: unknown } | undefined
                    callbacks?: { [key: string]: unknown } | undefined
                  }
                | undefined
            } & TykVendorExtension
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiID: string } } & { query: { mode?: 'public' } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiID: string } } & { query: { mode?: 'public' } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { apiID: string } } & { query: { mode?: 'public' } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { apiID: string } } & {
              query: {
                upstreamURL?: string
                listenPath?: string
                customDomain?: string
                allowList?: unknown
                validateRequest?: unknown
                mockResponse?: unknown
                authentication?: unknown
              }
            } & {
              json: {
                openapi: string
                info: {
                  title: string
                  description?: string
                  termsOfService?: string
                  contact?: { name?: string; url?: string; email?: string }
                  license?: { name: string; url?: string }
                  version: string
                }
                externalDocs?: { description?: string; url: string }
                servers?: {
                  url: string
                  description?: string
                  variables?: {
                    [key: string]: { enum?: string[]; default: string; description?: string }
                  }
                }[]
                security?: { [key: string]: string[] }[]
                tags?: {
                  name: string
                  description?: string
                  externalDocs?: { description?: string; url: string }
                }[]
                paths: { [key: string]: unknown }
                components?: {
                  schemas?: { [key: string]: unknown }
                  responses?: { [key: string]: unknown }
                  parameters?: { [key: string]: unknown }
                  examples?: { [key: string]: unknown }
                  requestBodies?: { [key: string]: unknown }
                  headers?: { [key: string]: unknown }
                  securitySchemes?: { [key: string]: unknown }
                  links?: { [key: string]: unknown }
                  callbacks?: { [key: string]: unknown }
                }
              }
            }
            output: ApiModifyKeySuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiID: string } } & {
              query: {
                upstreamURL?: string
                listenPath?: string
                customDomain?: string
                allowList?: unknown
                validateRequest?: unknown
                mockResponse?: unknown
                authentication?: unknown
              }
            } & {
              json: {
                openapi: string
                info: {
                  title: string
                  description?: string
                  termsOfService?: string
                  contact?: { name?: string; url?: string; email?: string }
                  license?: { name: string; url?: string }
                  version: string
                }
                externalDocs?: { description?: string; url: string }
                servers?: {
                  url: string
                  description?: string
                  variables?: {
                    [key: string]: { enum?: string[]; default: string; description?: string }
                  }
                }[]
                security?: { [key: string]: string[] }[]
                tags?: {
                  name: string
                  description?: string
                  externalDocs?: { description?: string; url: string }
                }[]
                paths: { [key: string]: unknown }
                components?: {
                  schemas?: { [key: string]: unknown }
                  responses?: { [key: string]: unknown }
                  parameters?: { [key: string]: unknown }
                  examples?: { [key: string]: unknown }
                  requestBodies?: { [key: string]: unknown }
                  headers?: { [key: string]: unknown }
                  securitySchemes?: { [key: string]: unknown }
                  links?: { [key: string]: unknown }
                  callbacks?: { [key: string]: unknown }
                }
              }
            }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiID: string } } & {
              query: {
                upstreamURL?: string
                listenPath?: string
                customDomain?: string
                allowList?: unknown
                validateRequest?: unknown
                mockResponse?: unknown
                authentication?: unknown
              }
            } & {
              json: {
                openapi: string
                info: {
                  title: string
                  description?: string
                  termsOfService?: string
                  contact?: { name?: string; url?: string; email?: string }
                  license?: { name: string; url?: string }
                  version: string
                }
                externalDocs?: { description?: string; url: string }
                servers?: {
                  url: string
                  description?: string
                  variables?: {
                    [key: string]: { enum?: string[]; default: string; description?: string }
                  }
                }[]
                security?: { [key: string]: string[] }[]
                tags?: {
                  name: string
                  description?: string
                  externalDocs?: { description?: string; url: string }
                }[]
                paths: { [key: string]: unknown }
                components?: {
                  schemas?: { [key: string]: unknown }
                  responses?: { [key: string]: unknown }
                  parameters?: { [key: string]: unknown }
                  examples?: { [key: string]: unknown }
                  requestBodies?: { [key: string]: unknown }
                  headers?: { [key: string]: unknown }
                  securitySchemes?: { [key: string]: unknown }
                  links?: { [key: string]: unknown }
                  callbacks?: { [key: string]: unknown }
                }
              }
            }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { apiID: string } } & {
              query: {
                upstreamURL?: string
                listenPath?: string
                customDomain?: string
                allowList?: unknown
                validateRequest?: unknown
                mockResponse?: unknown
                authentication?: unknown
              }
            } & {
              json: {
                openapi: string
                info: {
                  title: string
                  description?: string
                  termsOfService?: string
                  contact?: { name?: string; url?: string; email?: string }
                  license?: { name: string; url?: string }
                  version: string
                }
                externalDocs?: { description?: string; url: string }
                servers?: {
                  url: string
                  description?: string
                  variables?: {
                    [key: string]: { enum?: string[]; default: string; description?: string }
                  }
                }[]
                security?: { [key: string]: string[] }[]
                tags?: {
                  name: string
                  description?: string
                  externalDocs?: { description?: string; url: string }
                }[]
                paths: { [key: string]: unknown }
                components?: {
                  schemas?: { [key: string]: unknown }
                  responses?: { [key: string]: unknown }
                  parameters?: { [key: string]: unknown }
                  examples?: { [key: string]: unknown }
                  requestBodies?: { [key: string]: unknown }
                  headers?: { [key: string]: unknown }
                  securitySchemes?: { [key: string]: unknown }
                  links?: { [key: string]: unknown }
                  callbacks?: { [key: string]: unknown }
                }
              }
            }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { apiID: string } } & {
              query: {
                upstreamURL?: string
                listenPath?: string
                customDomain?: string
                allowList?: unknown
                validateRequest?: unknown
                mockResponse?: unknown
                authentication?: unknown
              }
            } & {
              json: {
                openapi: string
                info: {
                  title: string
                  description?: string
                  termsOfService?: string
                  contact?: { name?: string; url?: string; email?: string }
                  license?: { name: string; url?: string }
                  version: string
                }
                externalDocs?: { description?: string; url: string }
                servers?: {
                  url: string
                  description?: string
                  variables?: {
                    [key: string]: { enum?: string[]; default: string; description?: string }
                  }
                }[]
                security?: { [key: string]: string[] }[]
                tags?: {
                  name: string
                  description?: string
                  externalDocs?: { description?: string; url: string }
                }[]
                paths: { [key: string]: unknown }
                components?: {
                  schemas?: { [key: string]: unknown }
                  responses?: { [key: string]: unknown }
                  parameters?: { [key: string]: unknown }
                  examples?: { [key: string]: unknown }
                  requestBodies?: { [key: string]: unknown }
                  headers?: { [key: string]: unknown }
                  securitySchemes?: { [key: string]: unknown }
                  links?: { [key: string]: unknown }
                  callbacks?: { [key: string]: unknown }
                }
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
                  description?: string
                  termsOfService?: string
                  contact?: { name?: string; url?: string; email?: string }
                  license?: { name: string; url?: string }
                  version: string
                }
                externalDocs?: { description?: string; url: string }
                servers?: {
                  url: string
                  description?: string
                  variables?: {
                    [key: string]: { enum?: string[]; default: string; description?: string }
                  }
                }[]
                security?: { [key: string]: string[] }[]
                tags?: {
                  name: string
                  description?: string
                  externalDocs?: { description?: string; url: string }
                }[]
                paths: { [key: string]: unknown }
                components?: {
                  schemas?: { [key: string]: unknown }
                  responses?: { [key: string]: unknown }
                  parameters?: { [key: string]: unknown }
                  examples?: { [key: string]: unknown }
                  requestBodies?: { [key: string]: unknown }
                  headers?: { [key: string]: unknown }
                  securitySchemes?: { [key: string]: unknown }
                  links?: { [key: string]: unknown }
                  callbacks?: { [key: string]: unknown }
                }
              } & TykVendorExtensionInput
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
                  description?: string
                  termsOfService?: string
                  contact?: { name?: string; url?: string; email?: string }
                  license?: { name: string; url?: string }
                  version: string
                }
                externalDocs?: { description?: string; url: string }
                servers?: {
                  url: string
                  description?: string
                  variables?: {
                    [key: string]: { enum?: string[]; default: string; description?: string }
                  }
                }[]
                security?: { [key: string]: string[] }[]
                tags?: {
                  name: string
                  description?: string
                  externalDocs?: { description?: string; url: string }
                }[]
                paths: { [key: string]: unknown }
                components?: {
                  schemas?: { [key: string]: unknown }
                  responses?: { [key: string]: unknown }
                  parameters?: { [key: string]: unknown }
                  examples?: { [key: string]: unknown }
                  requestBodies?: { [key: string]: unknown }
                  headers?: { [key: string]: unknown }
                  securitySchemes?: { [key: string]: unknown }
                  links?: { [key: string]: unknown }
                  callbacks?: { [key: string]: unknown }
                }
              } & TykVendorExtensionInput
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
                  description?: string
                  termsOfService?: string
                  contact?: { name?: string; url?: string; email?: string }
                  license?: { name: string; url?: string }
                  version: string
                }
                externalDocs?: { description?: string; url: string }
                servers?: {
                  url: string
                  description?: string
                  variables?: {
                    [key: string]: { enum?: string[]; default: string; description?: string }
                  }
                }[]
                security?: { [key: string]: string[] }[]
                tags?: {
                  name: string
                  description?: string
                  externalDocs?: { description?: string; url: string }
                }[]
                paths: { [key: string]: unknown }
                components?: {
                  schemas?: { [key: string]: unknown }
                  responses?: { [key: string]: unknown }
                  parameters?: { [key: string]: unknown }
                  examples?: { [key: string]: unknown }
                  requestBodies?: { [key: string]: unknown }
                  headers?: { [key: string]: unknown }
                  securitySchemes?: { [key: string]: unknown }
                  links?: { [key: string]: unknown }
                  callbacks?: { [key: string]: unknown }
                }
              } & TykVendorExtensionInput
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
                  description?: string
                  termsOfService?: string
                  contact?: { name?: string; url?: string; email?: string }
                  license?: { name: string; url?: string }
                  version: string
                }
                externalDocs?: { description?: string; url: string }
                servers?: {
                  url: string
                  description?: string
                  variables?: {
                    [key: string]: { enum?: string[]; default: string; description?: string }
                  }
                }[]
                security?: { [key: string]: string[] }[]
                tags?: {
                  name: string
                  description?: string
                  externalDocs?: { description?: string; url: string }
                }[]
                paths: { [key: string]: unknown }
                components?: {
                  schemas?: { [key: string]: unknown }
                  responses?: { [key: string]: unknown }
                  parameters?: { [key: string]: unknown }
                  examples?: { [key: string]: unknown }
                  requestBodies?: { [key: string]: unknown }
                  headers?: { [key: string]: unknown }
                  securitySchemes?: { [key: string]: unknown }
                  links?: { [key: string]: unknown }
                  callbacks?: { [key: string]: unknown }
                }
              } & TykVendorExtensionInput
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
                  description?: string
                  termsOfService?: string
                  contact?: { name?: string; url?: string; email?: string }
                  license?: { name: string; url?: string }
                  version: string
                }
                externalDocs?: { description?: string; url: string }
                servers?: {
                  url: string
                  description?: string
                  variables?: {
                    [key: string]: { enum?: string[]; default: string; description?: string }
                  }
                }[]
                security?: { [key: string]: string[] }[]
                tags?: {
                  name: string
                  description?: string
                  externalDocs?: { description?: string; url: string }
                }[]
                paths: { [key: string]: unknown }
                components?: {
                  schemas?: { [key: string]: unknown }
                  responses?: { [key: string]: unknown }
                  parameters?: { [key: string]: unknown }
                  examples?: { [key: string]: unknown }
                  requestBodies?: { [key: string]: unknown }
                  headers?: { [key: string]: unknown }
                  securitySchemes?: { [key: string]: unknown }
                  links?: { [key: string]: unknown }
                  callbacks?: { [key: string]: unknown }
                }
              } & TykVendorExtensionInput
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
            input: { param: { apiID: string } } & { query: { mode?: 'public' } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { apiID: string } } & { query: { mode?: 'public' } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiID: string } } & { query: { mode?: 'public' } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { apiID: string } } & { query: { mode?: 'public' } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { apiID: string } } & { query: { mode?: 'public' } }
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
              query: { searchText?: string; accessType?: 'internal' | 'external' }
            }
            output: VersionMetas
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiID: string } } & {
              query: { searchText?: string; accessType?: 'internal' | 'external' }
            }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { apiID: string } } & {
              query: { searchText?: string; accessType?: 'internal' | 'external' }
            }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/tyk/apis/oas/export': {
      $get:
        | { input: { query: { mode?: 'public' } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { query: { mode?: 'public' } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { mode?: 'public' } }
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
                upstreamURL?: string
                listenPath?: string
                customDomain?: string
                allowList?: unknown
                validateRequest?: unknown
                mockResponse?: unknown
                authentication?: unknown
                base_api_id?: string
                base_api_version_name?: string
                new_version_name?: string
                set_default?: string
              }
            } & {
              json: {
                openapi: string
                info: {
                  title: string
                  description?: string
                  termsOfService?: string
                  contact?: { name?: string; url?: string; email?: string }
                  license?: { name: string; url?: string }
                  version: string
                }
                externalDocs?: { description?: string; url: string }
                servers?: {
                  url: string
                  description?: string
                  variables?: {
                    [key: string]: { enum?: string[]; default: string; description?: string }
                  }
                }[]
                security?: { [key: string]: string[] }[]
                tags?: {
                  name: string
                  description?: string
                  externalDocs?: { description?: string; url: string }
                }[]
                paths: { [key: string]: unknown }
                components?: {
                  schemas?: { [key: string]: unknown }
                  responses?: { [key: string]: unknown }
                  parameters?: { [key: string]: unknown }
                  examples?: { [key: string]: unknown }
                  requestBodies?: { [key: string]: unknown }
                  headers?: { [key: string]: unknown }
                  securitySchemes?: { [key: string]: unknown }
                  links?: { [key: string]: unknown }
                  callbacks?: { [key: string]: unknown }
                }
              }
            }
            output: ApiModifyKeySuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                upstreamURL?: string
                listenPath?: string
                customDomain?: string
                allowList?: unknown
                validateRequest?: unknown
                mockResponse?: unknown
                authentication?: unknown
                base_api_id?: string
                base_api_version_name?: string
                new_version_name?: string
                set_default?: string
              }
            } & {
              json: {
                openapi: string
                info: {
                  title: string
                  description?: string
                  termsOfService?: string
                  contact?: { name?: string; url?: string; email?: string }
                  license?: { name: string; url?: string }
                  version: string
                }
                externalDocs?: { description?: string; url: string }
                servers?: {
                  url: string
                  description?: string
                  variables?: {
                    [key: string]: { enum?: string[]; default: string; description?: string }
                  }
                }[]
                security?: { [key: string]: string[] }[]
                tags?: {
                  name: string
                  description?: string
                  externalDocs?: { description?: string; url: string }
                }[]
                paths: { [key: string]: unknown }
                components?: {
                  schemas?: { [key: string]: unknown }
                  responses?: { [key: string]: unknown }
                  parameters?: { [key: string]: unknown }
                  examples?: { [key: string]: unknown }
                  requestBodies?: { [key: string]: unknown }
                  headers?: { [key: string]: unknown }
                  securitySchemes?: { [key: string]: unknown }
                  links?: { [key: string]: unknown }
                  callbacks?: { [key: string]: unknown }
                }
              }
            }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                upstreamURL?: string
                listenPath?: string
                customDomain?: string
                allowList?: unknown
                validateRequest?: unknown
                mockResponse?: unknown
                authentication?: unknown
                base_api_id?: string
                base_api_version_name?: string
                new_version_name?: string
                set_default?: string
              }
            } & {
              json: {
                openapi: string
                info: {
                  title: string
                  description?: string
                  termsOfService?: string
                  contact?: { name?: string; url?: string; email?: string }
                  license?: { name: string; url?: string }
                  version: string
                }
                externalDocs?: { description?: string; url: string }
                servers?: {
                  url: string
                  description?: string
                  variables?: {
                    [key: string]: { enum?: string[]; default: string; description?: string }
                  }
                }[]
                security?: { [key: string]: string[] }[]
                tags?: {
                  name: string
                  description?: string
                  externalDocs?: { description?: string; url: string }
                }[]
                paths: { [key: string]: unknown }
                components?: {
                  schemas?: { [key: string]: unknown }
                  responses?: { [key: string]: unknown }
                  parameters?: { [key: string]: unknown }
                  examples?: { [key: string]: unknown }
                  requestBodies?: { [key: string]: unknown }
                  headers?: { [key: string]: unknown }
                  securitySchemes?: { [key: string]: unknown }
                  links?: { [key: string]: unknown }
                  callbacks?: { [key: string]: unknown }
                }
              }
            }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                upstreamURL?: string
                listenPath?: string
                customDomain?: string
                allowList?: unknown
                validateRequest?: unknown
                mockResponse?: unknown
                authentication?: unknown
                base_api_id?: string
                base_api_version_name?: string
                new_version_name?: string
                set_default?: string
              }
            } & {
              json: {
                openapi: string
                info: {
                  title: string
                  description?: string
                  termsOfService?: string
                  contact?: { name?: string; url?: string; email?: string }
                  license?: { name: string; url?: string }
                  version: string
                }
                externalDocs?: { description?: string; url: string }
                servers?: {
                  url: string
                  description?: string
                  variables?: {
                    [key: string]: { enum?: string[]; default: string; description?: string }
                  }
                }[]
                security?: { [key: string]: string[] }[]
                tags?: {
                  name: string
                  description?: string
                  externalDocs?: { description?: string; url: string }
                }[]
                paths: { [key: string]: unknown }
                components?: {
                  schemas?: { [key: string]: unknown }
                  responses?: { [key: string]: unknown }
                  parameters?: { [key: string]: unknown }
                  examples?: { [key: string]: unknown }
                  requestBodies?: { [key: string]: unknown }
                  headers?: { [key: string]: unknown }
                  securitySchemes?: { [key: string]: unknown }
                  links?: { [key: string]: unknown }
                  callbacks?: { [key: string]: unknown }
                }
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
            output: ({
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
                          [key: string]: {
                            enum?: string[] | undefined
                            default: string
                            description?: string | undefined
                          }
                        }
                      | undefined
                  }[]
                | undefined
              security?: { [key: string]: string[] }[] | undefined
              tags?:
                | {
                    name: string
                    description?: string | undefined
                    externalDocs?: { description?: string | undefined; url: string } | undefined
                  }[]
                | undefined
              paths: { [key: string]: unknown }
              components?:
                | {
                    schemas?: { [key: string]: unknown } | undefined
                    responses?: { [key: string]: unknown } | undefined
                    parameters?: { [key: string]: unknown } | undefined
                    examples?: { [key: string]: unknown } | undefined
                    requestBodies?: { [key: string]: unknown } | undefined
                    headers?: { [key: string]: unknown } | undefined
                    securitySchemes?: { [key: string]: unknown } | undefined
                    links?: { [key: string]: unknown } | undefined
                    callbacks?: { [key: string]: unknown } | undefined
                  }
                | undefined
            } & TykVendorExtension)[]
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: ApiStatusMessage; outputFormat: 'json'; status: 403 }
      $post:
        | {
            input: { query: { dryRun?: string; expand?: string } } & {
              json: {
                openapi: string
                info: {
                  title: string
                  description?: string
                  termsOfService?: string
                  contact?: { name?: string; url?: string; email?: string }
                  license?: { name: string; url?: string }
                  version: string
                }
                externalDocs?: { description?: string; url: string }
                servers?: {
                  url: string
                  description?: string
                  variables?: {
                    [key: string]: { enum?: string[]; default: string; description?: string }
                  }
                }[]
                security?: { [key: string]: string[] }[]
                tags?: {
                  name: string
                  description?: string
                  externalDocs?: { description?: string; url: string }
                }[]
                paths: { [key: string]: unknown }
                components?: {
                  schemas?: { [key: string]: unknown }
                  responses?: { [key: string]: unknown }
                  parameters?: { [key: string]: unknown }
                  examples?: { [key: string]: unknown }
                  requestBodies?: { [key: string]: unknown }
                  headers?: { [key: string]: unknown }
                  securitySchemes?: { [key: string]: unknown }
                  links?: { [key: string]: unknown }
                  callbacks?: { [key: string]: unknown }
                }
              } & TykVendorExtensionInput
            }
            output:
              | ApiModifyKeySuccess
              | ({
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
                              [key: string]: {
                                enum?: string[] | undefined
                                default: string
                                description?: string | undefined
                              }
                            }
                          | undefined
                      }[]
                    | undefined
                  security?: { [key: string]: string[] }[] | undefined
                  tags?:
                    | {
                        name: string
                        description?: string | undefined
                        externalDocs?: { description?: string | undefined; url: string } | undefined
                      }[]
                    | undefined
                  paths: { [key: string]: unknown }
                  components?:
                    | {
                        schemas?: { [key: string]: unknown } | undefined
                        responses?: { [key: string]: unknown } | undefined
                        parameters?: { [key: string]: unknown } | undefined
                        examples?: { [key: string]: unknown } | undefined
                        requestBodies?: { [key: string]: unknown } | undefined
                        headers?: { [key: string]: unknown } | undefined
                        securitySchemes?: { [key: string]: unknown } | undefined
                        links?: { [key: string]: unknown } | undefined
                        callbacks?: { [key: string]: unknown } | undefined
                      }
                    | undefined
                } & TykVendorExtension)
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { dryRun?: string; expand?: string } } & {
              json: {
                openapi: string
                info: {
                  title: string
                  description?: string
                  termsOfService?: string
                  contact?: { name?: string; url?: string; email?: string }
                  license?: { name: string; url?: string }
                  version: string
                }
                externalDocs?: { description?: string; url: string }
                servers?: {
                  url: string
                  description?: string
                  variables?: {
                    [key: string]: { enum?: string[]; default: string; description?: string }
                  }
                }[]
                security?: { [key: string]: string[] }[]
                tags?: {
                  name: string
                  description?: string
                  externalDocs?: { description?: string; url: string }
                }[]
                paths: { [key: string]: unknown }
                components?: {
                  schemas?: { [key: string]: unknown }
                  responses?: { [key: string]: unknown }
                  parameters?: { [key: string]: unknown }
                  examples?: { [key: string]: unknown }
                  requestBodies?: { [key: string]: unknown }
                  headers?: { [key: string]: unknown }
                  securitySchemes?: { [key: string]: unknown }
                  links?: { [key: string]: unknown }
                  callbacks?: { [key: string]: unknown }
                }
              } & TykVendorExtensionInput
            }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { dryRun?: string; expand?: string } } & {
              json: {
                openapi: string
                info: {
                  title: string
                  description?: string
                  termsOfService?: string
                  contact?: { name?: string; url?: string; email?: string }
                  license?: { name: string; url?: string }
                  version: string
                }
                externalDocs?: { description?: string; url: string }
                servers?: {
                  url: string
                  description?: string
                  variables?: {
                    [key: string]: { enum?: string[]; default: string; description?: string }
                  }
                }[]
                security?: { [key: string]: string[] }[]
                tags?: {
                  name: string
                  description?: string
                  externalDocs?: { description?: string; url: string }
                }[]
                paths: { [key: string]: unknown }
                components?: {
                  schemas?: { [key: string]: unknown }
                  responses?: { [key: string]: unknown }
                  parameters?: { [key: string]: unknown }
                  examples?: { [key: string]: unknown }
                  requestBodies?: { [key: string]: unknown }
                  headers?: { [key: string]: unknown }
                  securitySchemes?: { [key: string]: unknown }
                  links?: { [key: string]: unknown }
                  callbacks?: { [key: string]: unknown }
                }
              } & TykVendorExtensionInput
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
            input: { param: { apiID: string } } & { query: { expand?: string } }
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
                          [key: string]: {
                            enum?: string[] | undefined
                            default: string
                            description?: string | undefined
                          }
                        }
                      | undefined
                  }[]
                | undefined
              security?: { [key: string]: string[] }[] | undefined
              tags?:
                | {
                    name: string
                    description?: string | undefined
                    externalDocs?: { description?: string | undefined; url: string } | undefined
                  }[]
                | undefined
              paths: { [key: string]: unknown }
              components?:
                | {
                    schemas?: { [key: string]: unknown } | undefined
                    responses?: { [key: string]: unknown } | undefined
                    parameters?: { [key: string]: unknown } | undefined
                    examples?: { [key: string]: unknown } | undefined
                    requestBodies?: { [key: string]: unknown } | undefined
                    headers?: { [key: string]: unknown } | undefined
                    securitySchemes?: { [key: string]: unknown } | undefined
                    links?: { [key: string]: unknown } | undefined
                    callbacks?: { [key: string]: unknown } | undefined
                  }
                | undefined
            } & TykVendorExtension
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiID: string } } & { query: { expand?: string } }
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
                  description?: string
                  termsOfService?: string
                  contact?: { name?: string; url?: string; email?: string }
                  license?: { name: string; url?: string }
                  version: string
                }
                externalDocs?: { description?: string; url: string }
                servers?: {
                  url: string
                  description?: string
                  variables?: {
                    [key: string]: { enum?: string[]; default: string; description?: string }
                  }
                }[]
                security?: { [key: string]: string[] }[]
                tags?: {
                  name: string
                  description?: string
                  externalDocs?: { description?: string; url: string }
                }[]
                paths: { [key: string]: unknown }
                components?: {
                  schemas?: { [key: string]: unknown }
                  responses?: { [key: string]: unknown }
                  parameters?: { [key: string]: unknown }
                  examples?: { [key: string]: unknown }
                  requestBodies?: { [key: string]: unknown }
                  headers?: { [key: string]: unknown }
                  securitySchemes?: { [key: string]: unknown }
                  links?: { [key: string]: unknown }
                  callbacks?: { [key: string]: unknown }
                }
              } & TykVendorExtensionInput
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
                  description?: string
                  termsOfService?: string
                  contact?: { name?: string; url?: string; email?: string }
                  license?: { name: string; url?: string }
                  version: string
                }
                externalDocs?: { description?: string; url: string }
                servers?: {
                  url: string
                  description?: string
                  variables?: {
                    [key: string]: { enum?: string[]; default: string; description?: string }
                  }
                }[]
                security?: { [key: string]: string[] }[]
                tags?: {
                  name: string
                  description?: string
                  externalDocs?: { description?: string; url: string }
                }[]
                paths: { [key: string]: unknown }
                components?: {
                  schemas?: { [key: string]: unknown }
                  responses?: { [key: string]: unknown }
                  parameters?: { [key: string]: unknown }
                  examples?: { [key: string]: unknown }
                  requestBodies?: { [key: string]: unknown }
                  headers?: { [key: string]: unknown }
                  securitySchemes?: { [key: string]: unknown }
                  links?: { [key: string]: unknown }
                  callbacks?: { [key: string]: unknown }
                }
              } & TykVendorExtensionInput
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
                  description?: string
                  termsOfService?: string
                  contact?: { name?: string; url?: string; email?: string }
                  license?: { name: string; url?: string }
                  version: string
                }
                externalDocs?: { description?: string; url: string }
                servers?: {
                  url: string
                  description?: string
                  variables?: {
                    [key: string]: { enum?: string[]; default: string; description?: string }
                  }
                }[]
                security?: { [key: string]: string[] }[]
                tags?: {
                  name: string
                  description?: string
                  externalDocs?: { description?: string; url: string }
                }[]
                paths: { [key: string]: unknown }
                components?: {
                  schemas?: { [key: string]: unknown }
                  responses?: { [key: string]: unknown }
                  parameters?: { [key: string]: unknown }
                  examples?: { [key: string]: unknown }
                  requestBodies?: { [key: string]: unknown }
                  headers?: { [key: string]: unknown }
                  securitySchemes?: { [key: string]: unknown }
                  links?: { [key: string]: unknown }
                  callbacks?: { [key: string]: unknown }
                }
              } & TykVendorExtensionInput
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
            input: { query: { org_id?: string; mode?: 'detailed' } }
            output: APIAllCertificateBasics | APIAllCertificates
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { org_id?: string; mode?: 'detailed' } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { query: { org_id?: string } }
            output: APICertificateStatusMessage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { org_id?: string } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { org_id?: string } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/tyk/certs/:certID': {
      $delete:
        | {
            input: { param: { certID: string } } & { query: { org_id?: string } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { certID: string } } & { query: { org_id?: string } }
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
            input: { json: TraceRequestInput }
            output: TraceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TraceRequestInput }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: TraceRequestInput }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: TraceRequestInput }
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
            input: { query: { hashed?: string } } & { json: SessionStateInput }
            output: ApiModifyKeySuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { hashed?: string } } & { json: SessionStateInput }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { hashed?: string } } & { json: SessionStateInput }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { hashed?: string } } & { json: SessionStateInput }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tyk/keys/:keyID': {
      $delete:
        | {
            input: { param: { keyID: string } } & { query: { hashed?: string } }
            output: ApiModifyKeySuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { keyID: string } } & { query: { hashed?: string } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { keyID: string } } & { query: { hashed?: string } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { keyID: string } } & { query: { hashed?: string } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { keyID: string } } & { query: { hashed?: string } }
            output: SessionState
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { keyID: string } } & { query: { hashed?: string } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { keyID: string } } & { query: { hashed?: string } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { keyID: string } } & { query: { hashed?: string } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { keyID: string } } & {
              query: { suppress_reset?: '1'; hashed?: string }
            } & { json: SessionStateInput }
            output: ApiModifyKeySuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { keyID: string } } & {
              query: { suppress_reset?: '1'; hashed?: string }
            } & { json: SessionStateInput }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { keyID: string } } & {
              query: { suppress_reset?: '1'; hashed?: string }
            } & { json: SessionStateInput }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { keyID: string } } & {
              query: { suppress_reset?: '1'; hashed?: string }
            } & { json: SessionStateInput }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { keyID: string } } & {
              query: { suppress_reset?: '1'; hashed?: string }
            } & { json: SessionStateInput }
            output: ApiModifyKeySuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { keyID: string } } & {
              query: { suppress_reset?: '1'; hashed?: string }
            } & { json: SessionStateInput }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { keyID: string } } & {
              query: { suppress_reset?: '1'; hashed?: string }
            } & { json: SessionStateInput }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { keyID: string } } & {
              query: { suppress_reset?: '1'; hashed?: string }
            } & { json: SessionStateInput }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { keyID: string } } & {
              query: { suppress_reset?: '1'; hashed?: string }
            } & { json: SessionStateInput }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tyk/keys/create': {
      $post:
        | {
            input: { json: SessionStateInput }
            output: ApiModifyKeySuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SessionStateInput }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: SessionStateInput }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: SessionStateInput }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tyk/keys/policy/:keyID': {
      $post:
        | {
            input: { param: { keyID: string } } & { json: PolicyUpdateObjInput }
            output: ApiModifyKeySuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { keyID: string } } & { json: PolicyUpdateObjInput }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { keyID: string } } & { json: PolicyUpdateObjInput }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { keyID: string } } & { json: PolicyUpdateObjInput }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { keyID: string } } & { json: PolicyUpdateObjInput }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tyk/keys/preview': {
      $post:
        | {
            input: { json: SessionStateInput }
            output: SessionState
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SessionStateInput }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: SessionStateInput }
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
            input: { param: { apiID: string; keyName: string } } & { json: NewClientRequestInput }
            output: NewClientRequest
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiID: string; keyName: string } } & { json: NewClientRequestInput }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { apiID: string; keyName: string } } & { json: NewClientRequestInput }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { apiID: string; keyName: string } } & { json: NewClientRequestInput }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { apiID: string; keyName: string } } & { json: NewClientRequestInput }
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
            input: { param: { apiID: string; keyName: string } } & { query: { page?: unknown } }
            output: PaginatedOAuthClientTokens | (OAuthClientToken[] | null)
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { apiID: string; keyName: string } } & { query: { page?: unknown } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { apiID: string; keyName: string } } & { query: { page?: unknown } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { apiID: string; keyName: string } } & { query: { page?: unknown } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tyk/oauth/clients/apis/:appID': {
      $get:
        | {
            input: { param: { appID: string } } & { query: { orgID?: string } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appID: string } } & { query: { orgID?: string } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/tyk/oauth/clients/create': {
      $post:
        | {
            input: { json: NewClientRequestInput }
            output: NewClientRequest
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: NewClientRequestInput }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: NewClientRequestInput }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: NewClientRequestInput }
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
              form: { client_id: string; org_id?: string; token: string; token_type_hint?: string }
            }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              form: { client_id: string; org_id?: string; token: string; token_type_hint?: string }
            }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              form: { client_id: string; org_id?: string; token: string; token_type_hint?: string }
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
            input: { form: { client_id: string; client_secret: string; org_id?: string } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { form: { client_id: string; client_secret: string; org_id?: string } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { form: { client_id: string; client_secret: string; org_id?: string } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { form: { client_id: string; client_secret: string; org_id?: string } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { form: { client_id: string; client_secret: string; org_id?: string } }
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
            input: { query: { filter?: string } }
            output: ApiAllKeys
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { filter?: string } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { filter?: string } }
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
            input: { param: { keyID: string } } & { query: { orgID?: string } }
            output: {
              access_rights?:
                | ({
                    [key: string]: {
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
              meta_data?: ({ [key: string]: string } | null) | undefined
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
            input: { param: { keyID: string } } & { query: { orgID?: string } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { keyID: string } } & { query: { orgID?: string } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { keyID: string } } & { query: { reset_quota?: '1' } } & {
              json: SessionStateInput
            }
            output: ApiModifyKeySuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { keyID: string } } & { query: { reset_quota?: '1' } } & {
              json: SessionStateInput
            }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { keyID: string } } & { query: { reset_quota?: '1' } } & {
              json: SessionStateInput
            }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { keyID: string } } & { query: { reset_quota?: '1' } } & {
              json: SessionStateInput
            }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { keyID: string } } & { query: { reset_quota?: '1' } } & {
              json: SessionStateInput
            }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { keyID: string } } & { query: { reset_quota?: '1' } } & {
              json: SessionStateInput
            }
            output: ApiModifyKeySuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { keyID: string } } & { query: { reset_quota?: '1' } } & {
              json: SessionStateInput
            }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { keyID: string } } & { query: { reset_quota?: '1' } } & {
              json: SessionStateInput
            }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { keyID: string } } & { query: { reset_quota?: '1' } } & {
              json: SessionStateInput
            }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { keyID: string } } & { query: { reset_quota?: '1' } } & {
              json: SessionStateInput
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
            input: { json: PolicyInput }
            output: ApiModifyKeySuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PolicyInput }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: PolicyInput }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: PolicyInput }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 500
          }
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
            input: { param: { polID: string } } & { json: PolicyInput }
            output: ApiModifyKeySuccess
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { polID: string } } & { json: PolicyInput }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { polID: string } } & { json: PolicyInput }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { polID: string } } & { json: PolicyInput }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tyk/reload': {
      $get:
        | {
            input: { query: { block?: string } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { block?: string } }
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
            input: { param: { listen_path: string } } & { json: BatchRequestStructureInput }
            output: BatchReplyUnit[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { listen_path: string } } & { json: BatchRequestStructureInput }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { listen_path: string } } & { json: BatchRequestStructureInput }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/tyk/schema': {
      $get:
        | {
            input: { query: { oasVersion?: string } }
            output: OASSchemaResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { oasVersion?: string } }
            output: ApiStatusMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { oasVersion?: string } }
            output: OASSchemaResponse
            outputFormat: 'json'
            status: 404
          }
    }
  },
  '/'
>
export default routes
