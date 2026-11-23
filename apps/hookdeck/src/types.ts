type IssueType = 'delivery' | 'transformation' | 'backpressure'
type Operators = {
  gt?: (string | null) | undefined
  gte?: (string | null) | undefined
  le?: (string | null) | undefined
  lte?: (string | null) | undefined
  any?: boolean | undefined
}
type OrderByDirection = 'asc' | 'desc' | 'ASC' | 'DESC'
type SeekPagination = {
  order_by?: string | string[] | undefined
  dir?: OrderByDirection | OrderByDirection[] | undefined
  limit?: number | undefined
  prev?: string | undefined
  next?: string | undefined
}
type IssueTriggerStrategy = 'first_attempt' | 'final_attempt'
type IssueTriggerDeliveryConfigs = {
  strategy: IssueTriggerStrategy
  connections: string | string[]
}
type TransformationExecutionLogLevel = 'debug' | 'info' | 'warn' | 'error' | 'fatal'
type IssueTriggerTransformationConfigs = {
  log_level: TransformationExecutionLogLevel
  transformations: string | string[]
}
type IssueTriggerBackpressureDelay = number
type IssueTriggerBackpressureConfigs = {
  delay: IssueTriggerBackpressureDelay
  destinations: string | string[]
}
type IssueTriggerReference =
  | IssueTriggerDeliveryConfigs
  | IssueTriggerTransformationConfigs
  | IssueTriggerBackpressureConfigs
type IssueTriggerSlackChannel = { channel_name: string }
type IssueTriggerIntegrationChannel = {}
type IssueTriggerEmailChannel = {}
type IssueTriggerChannels = {
  slack?: IssueTriggerSlackChannel | undefined
  opsgenie?: IssueTriggerIntegrationChannel | undefined
  email?: IssueTriggerEmailChannel | undefined
} | null
type IssueTrigger = {
  id: string
  team_id?: (string | null) | undefined
  name?: (string | null) | undefined
  type: IssueType
  configs: IssueTriggerReference
  channels?: IssueTriggerChannels | undefined
  disabled_at?: (string | null) | undefined
  updated_at: string
  created_at: string
  deleted_at?: (string | null) | undefined
}
type IssueTriggerPaginatedResult = {
  pagination?: SeekPagination | undefined
  count?: number | undefined
  models?: IssueTrigger[] | undefined
}
type APIErrorResponse = {
  code: string
  status: number
  message: string
  data?: ({ [x: string]: unknown } | null) | undefined
}
type DeletedIssueTriggerResponse = { id: string }
type AttemptTrigger = 'INITIAL' | 'MANUAL' | 'BULK_RETRY' | 'UNPAUSE' | 'AUTOMATIC'
type AttemptErrorCodes =
  | 'CANCELLED'
  | 'TIMEOUT'
  | 'NOT_FOUND'
  | 'CONNECTION_REFUSED'
  | 'CONNECTION_RESET'
  | 'MISSING_URL'
  | 'CLI'
  | 'CLI_UNAVAILABLE'
  | 'SELF_SIGNED_CERT'
  | 'ERR_TLS_CERT_ALTNAME_INVALID'
  | 'ERR_SSL_WRONG_VERSION_NUMBER'
  | 'SSL_ERROR_CA_UNKNOWN'
  | 'TTL_EXPIRED'
  | 'DATA_ARCHIVED'
  | 'SSL_CERT_EXPIRED'
  | 'BULK_RETRY_CANCELLED'
  | 'DNS_LOOKUP_FAILED'
  | 'HOST_UNREACHABLE'
  | 'PROTOCOL_ERROR'
  | 'SOCKET_CLOSED'
  | 'OAUTH2_HANDSHAKE_FAILED'
  | 'UNKNOWN'
type AttemptStatus = 'FAILED' | 'SUCCESSFUL'
type EventAttempt = {
  id: string
  team_id: string
  event_id: string
  destination_id: string
  response_status?: (number | null) | undefined
  attempt_number?: (number | null) | undefined
  trigger?: AttemptTrigger | undefined
  error_code?: AttemptErrorCodes | undefined
  body?: ({ [x: string]: unknown } | null) | (string | null) | undefined
  requested_url?: (string | null) | undefined
  http_method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | undefined
  bulk_retry_id?: (string | null) | undefined
  status: AttemptStatus
  successful_at?: (string | null) | undefined
  delivered_at?: (string | null) | undefined
  responded_at?: (string | null) | undefined
  delivery_latency?: (number | null) | undefined
  response_latency?: (number | null) | undefined
  updated_at: string
  created_at: string
} | null
type EventAttemptPaginatedResult = {
  pagination?: SeekPagination | undefined
  count?: number | undefined
  models?: EventAttempt[] | undefined
}
type ShortEventData = {
  path: string
  query: string | null
  parsed_query: (string | null) | { [x: string]: unknown }
  headers: string | { [x: string]: string | null }
  body: string | { [x: string]: unknown } | { [x: string]: unknown }[]
  is_large_payload?: (boolean | null) | undefined
} | null
type Bookmark = {
  id: string
  team_id: string
  webhook_id: string
  event_data_id: string
  label: string
  alias?: (string | null) | undefined
  data?: ShortEventData | undefined
  last_used_at?: (string | null) | undefined
  updated_at: string
  created_at: string
}
type BookmarkPaginatedResult = {
  pagination?: SeekPagination | undefined
  count?: number | undefined
  models?: Bookmark[] | undefined
}
type DeletedBookmarkResponse = { id: string }
type RawBody = { body: string }
type EventStatus = 'SCHEDULED' | 'QUEUED' | 'HOLD' | 'SUCCESSFUL' | 'FAILED'
type Event = {
  id: string
  team_id: string
  webhook_id: string
  source_id: string
  destination_id: string
  event_data_id: string
  request_id: string
  attempts: number
  last_attempt_at: string | null
  next_attempt_at: string | null
  response_status?: (number | null) | undefined
  error_code?: AttemptErrorCodes | undefined
  status: EventStatus
  successful_at: string | null
  cli_id: string | null
  updated_at: string
  created_at: string
  data?: ShortEventData | undefined
}
type EventArray = Event[]
type DestinationRateLimitPeriod = 'second' | 'minute' | 'hour' | 'concurrent'
type DestinationHTTPMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
type DestinationAuthMethodSignatureConfig = {}
type AuthHookdeckSignature = {
  type: 'HOOKDECK_SIGNATURE'
  config?: DestinationAuthMethodSignatureConfig | undefined
}
type DestinationAuthMethodBasicAuthConfig = { username: string; password: string }
type AuthBasicAuth = {
  type: 'BASIC_AUTH'
  config?: DestinationAuthMethodBasicAuthConfig | undefined
}
type DestinationAuthMethodApiKeyConfig = {
  key: string
  api_key: string
  to?: 'header' | 'query' | undefined
}
type AuthAPIKey = { type: 'API_KEY'; config?: DestinationAuthMethodApiKeyConfig | undefined }
type DestinationAuthMethodBearerTokenConfig = { token: string }
type AuthBearerToken = {
  type: 'BEARER_TOKEN'
  config?: DestinationAuthMethodBearerTokenConfig | undefined
}
type DestinationAuthMethodOAuth2ClientCredentialsConfig = {
  client_id: string
  client_secret: string
  scope?: (string | null) | undefined
  auth_server: string
  authentication_type?: 'basic' | 'bearer' | 'x-www-form-urlencoded' | undefined
}
type AuthOAuth2ClientCredentials = {
  type: 'OAUTH2_CLIENT_CREDENTIALS'
  config?: DestinationAuthMethodOAuth2ClientCredentialsConfig | undefined
}
type DestinationAuthMethodOAuth2AuthorizationCodeConfig = {
  client_id: string
  client_secret: string
  refresh_token: string
  scope?: (string | null) | undefined
  auth_server: string
}
type AuthOAuth2AuthorizationCode = {
  type: 'OAUTH2_AUTHORIZATION_CODE'
  config?: DestinationAuthMethodOAuth2AuthorizationCodeConfig | undefined
}
type DestinationAuthMethodCustomSignatureConfig = {
  key: string
  signing_secret?: string | undefined
}
type AuthCustomSignature = {
  type: 'CUSTOM_SIGNATURE'
  config: DestinationAuthMethodCustomSignatureConfig
}
type DestinationAuthMethodAwsSignatureConfig = {
  access_key_id: string
  secret_access_key: string
  region?: (string | null) | undefined
  service?: (string | null) | undefined
}
type AuthAwsSignature = {
  type: 'AWS_SIGNATURE'
  config?: DestinationAuthMethodAwsSignatureConfig | undefined
}
type DestinationAuthMethodConfig =
  | AuthHookdeckSignature
  | AuthBasicAuth
  | AuthAPIKey
  | AuthBearerToken
  | AuthOAuth2ClientCredentials
  | AuthOAuth2AuthorizationCode
  | AuthCustomSignature
  | AuthAwsSignature
type Destination = {
  id: string
  name: string
  description?: (string | null) | undefined
  team_id: string
  path_forwarding_disabled?: (boolean | null) | undefined
  url?: (string | null) | undefined
  cli_path?: (string | null) | undefined
  rate_limit?: (number | null) | undefined
  rate_limit_period?: DestinationRateLimitPeriod | undefined
  http_method?: DestinationHTTPMethod | undefined
  auth_method?: DestinationAuthMethodConfig | undefined
  disabled_at: string | null
  updated_at: string
  created_at: string
}
type DestinationPaginatedResult = {
  pagination?: SeekPagination | undefined
  count?: number | undefined
  models?: Destination[] | undefined
}
type BatchOperation = {
  id: string
  team_id: string
  query?: { [x: string]: { [x: string]: unknown } | null } | (string | null) | undefined
  created_at: string
  updated_at: string
  cancelled_at?: (string | null) | undefined
  completed_at?: (string | null) | undefined
  estimated_batch?: (number | null) | undefined
  estimated_count?: (number | null) | undefined
  processed_batch?: (number | null) | undefined
  completed_count?: (number | null) | undefined
  in_progress: boolean
  progress?: (number | null) | undefined
  failed_count?: (number | null) | undefined
  number?: (number | null) | undefined
}
type BatchOperationPaginatedResult = {
  pagination?: SeekPagination | undefined
  count?: number | undefined
  models?: BatchOperation[] | undefined
}
type EventPaginatedResult = {
  pagination?: SeekPagination | undefined
  count?: number | undefined
  models?: Event[] | undefined
}
type RetriedEvent = {
  id: string
  team_id: string
  webhook_id: string
  source_id: string
  destination_id: string
  event_data_id: string
  request_id: string
  attempts: number
  last_attempt_at: string | null
  next_attempt_at: string | null
  response_status?: (number | null) | undefined
  error_code?: AttemptErrorCodes | undefined
  status: EventStatus
  successful_at: string | null
  cli_id: string | null
  updated_at: string
  created_at: string
  data?: ShortEventData | undefined
}
type IntegrationProvider =
  | 'HMAC'
  | 'BASIC_AUTH'
  | 'API_KEY'
  | 'BRIDGE'
  | 'CLOUDSIGNAL'
  | 'COURIER'
  | 'FRONTAPP'
  | 'TWITTER'
  | 'STRIPE'
  | 'RECHARGE'
  | 'TWILIO'
  | 'GITHUB'
  | 'SHOPIFY'
  | 'POSTMARK'
  | 'TYPEFORM'
  | 'XERO'
  | 'SVIX'
  | 'ZOOM'
  | 'AKENEO'
  | 'ADYEN'
  | 'GITLAB'
  | 'PROPERTY-FINDER'
  | 'WOOCOMMERCE'
  | 'OURA'
  | 'COMMERCELAYER'
  | 'HUBSPOT'
  | 'MAILGUN'
  | 'PERSONA'
  | 'PIPEDRIVE'
  | 'SENDGRID'
  | 'WORKOS'
  | 'SYNCTERA'
  | 'AWS_SNS'
  | 'THREE_D_EYE'
  | 'TWITCH'
  | 'ENODE'
  | 'FAVRO'
  | 'LINEAR'
  | 'SHOPLINE'
  | 'WIX'
  | 'NMI'
  | 'ORB'
  | 'PYLON'
  | 'REPAY'
  | 'SQUARE'
  | 'SOLIDGATE'
  | 'TRELLO'
  | 'SANITY'
  | 'EBAY'
  | 'TELNYX'
  | 'DISCORD'
  | 'TOKENIO'
  | 'FISERV'
  | 'BONDSMITH'
  | 'VERCEL_LOG_DRAINS'
  | 'VERCEL'
  | 'TEBEX'
  | 'SLACK'
  | 'RAZORPAY'
  | 'MAILCHIMP'
  | 'PADDLE'
  | 'PAYPAL'
  | 'TREEZOR'
  | 'PRAXIS'
type IntegrationFeature = 'VERIFICATION' | 'HANDSHAKE'
type HMACAlgorithms = 'md5' | 'sha1' | 'sha256' | 'sha512'
type HMACIntegrationConfigs = {
  webhook_secret_key: string
  algorithm: HMACAlgorithms
  header_key: string
  encoding: 'base64' | 'hex'
}
type APIKeyIntegrationConfigs = { header_key: string; api_key: string }
type HandledAPIKeyIntegrationConfigs = { api_key: string }
type HandledHMACConfigs = { webhook_secret_key: string }
type BasicAuthIntegrationConfigs = { username: string; password: string }
type ShopifyIntegrationConfigs = { webhook_secret_key: string }
type VercelLogDrainsIntegrationConfigs = {
  webhook_secret_key?: (string | null) | undefined
  vercel_log_drains_secret: string
}
type Integration = {
  id: string
  team_id: string
  label: string
  provider: IntegrationProvider
  features: IntegrationFeature[]
  configs:
    | HMACIntegrationConfigs
    | APIKeyIntegrationConfigs
    | HandledAPIKeyIntegrationConfigs
    | HandledHMACConfigs
    | BasicAuthIntegrationConfigs
    | ShopifyIntegrationConfigs
    | VercelLogDrainsIntegrationConfigs
    | {}
  sources: string[]
  updated_at: string
  created_at: string
}
type IntegrationPaginatedResult = {
  pagination?: SeekPagination | undefined
  count?: number | undefined
  models?: Integration[] | undefined
}
type DeletedIntegration = { id: string }
type AttachedIntegrationToSource = { success: boolean }
type DetachedIntegrationFromSource = {}
type IssueStatus = 'OPENED' | 'IGNORED' | 'ACKNOWLEDGED' | 'RESOLVED'
type DeliveryIssueAggregationKeys = {
  webhook_id: string[]
  response_status: number[]
  error_code: AttemptErrorCodes[]
}
type DeliveryIssueReference = { event_id: string; attempt_id: string }
type DeliveryIssueData = {
  trigger_event?: Event | undefined
  trigger_attempt?: EventAttempt | undefined
} | null
type DeliveryIssueWithData = {
  id: string
  team_id: string
  status: IssueStatus
  opened_at: string
  first_seen_at: string
  last_seen_at: string
  last_updated_by?: (string | null) | undefined
  dismissed_at?: (string | null) | undefined
  auto_resolved_at?: (string | null) | undefined
  merged_with?: (string | null) | undefined
  updated_at: string
  created_at: string
  type: 'delivery'
  aggregation_keys: DeliveryIssueAggregationKeys
  reference: DeliveryIssueReference
  data?: DeliveryIssueData | undefined
}
type TransformationIssueAggregationKeys = {
  transformation_id: string[]
  log_level: TransformationExecutionLogLevel
}
type TransformationIssueReference = {
  transformation_execution_id: string
  trigger_event_request_transformation_id?: (string | null) | undefined
}
type ConsoleLine = { type: 'error' | 'log' | 'warn' | 'info' | 'debug'; message: string }
type TransformationExecution = {
  id: string
  transformed_event_data_id: string
  original_event_data_id: string
  transformation_id: string
  team_id: string
  webhook_id: string
  log_level: TransformationExecutionLogLevel
  logs: ConsoleLine[]
  updated_at: string
  created_at: string
  original_event_data?: ShortEventData | undefined
  transformed_event_data?: ShortEventData | undefined
  issue_id?: (string | null) | undefined
}
type TransformationIssueData = {
  transformation_execution: TransformationExecution
  trigger_attempt?: EventAttempt | undefined
} | null
type TransformationIssueWithData = {
  id: string
  team_id: string
  status: IssueStatus
  opened_at: string
  first_seen_at: string
  last_seen_at: string
  last_updated_by?: (string | null) | undefined
  dismissed_at?: (string | null) | undefined
  auto_resolved_at?: (string | null) | undefined
  merged_with?: (string | null) | undefined
  updated_at: string
  created_at: string
  type: 'transformation'
  aggregation_keys: TransformationIssueAggregationKeys
  reference: TransformationIssueReference
  data?: TransformationIssueData | undefined
}
type IssueWithData = DeliveryIssueWithData | TransformationIssueWithData
type IssueWithDataPaginatedResult = {
  pagination?: SeekPagination | undefined
  count?: number | undefined
  models?: IssueWithData[] | undefined
}
type IssueCount = { count: number }
type DeliveryIssue = {
  id: string
  team_id: string
  status: IssueStatus
  opened_at: string
  first_seen_at: string
  last_seen_at: string
  last_updated_by?: (string | null) | undefined
  dismissed_at?: (string | null) | undefined
  auto_resolved_at?: (string | null) | undefined
  merged_with?: (string | null) | undefined
  updated_at: string
  created_at: string
  type: 'delivery'
  aggregation_keys: DeliveryIssueAggregationKeys
  reference: DeliveryIssueReference
}
type TransformationIssue = {
  id: string
  team_id: string
  status: IssueStatus
  opened_at: string
  first_seen_at: string
  last_seen_at: string
  last_updated_by?: (string | null) | undefined
  dismissed_at?: (string | null) | undefined
  auto_resolved_at?: (string | null) | undefined
  merged_with?: (string | null) | undefined
  updated_at: string
  created_at: string
  type: 'transformation'
  aggregation_keys: TransformationIssueAggregationKeys
  reference: TransformationIssueReference
}
type Issue = DeliveryIssue | TransformationIssue
type RequestRejectionCause =
  | 'SOURCE_DISABLED'
  | 'NO_CONNECTION'
  | 'VERIFICATION_FAILED'
  | 'UNSUPPORTED_HTTP_METHOD'
  | 'UNSUPPORTED_CONTENT_TYPE'
  | 'UNPARSABLE_JSON'
  | 'PAYLOAD_TOO_LARGE'
  | 'INGESTION_FATAL'
  | 'UNKNOWN'
type Request = {
  id: string
  team_id: string
  verified: boolean | null
  original_event_data_id: string | null
  rejection_cause: RequestRejectionCause
  ingest_priority: 'NORMAL' | 'LOW'
  ingested_at: string | null
  source_id: string
  events_count: number | null
  cli_events_count: number | null
  ignored_count: number | null
  updated_at: string
  created_at: string
  data?: ShortEventData | undefined
}
type RequestPaginatedResult = {
  pagination?: SeekPagination | undefined
  count?: number | undefined
  models?: Request[] | undefined
}
type RetryRequest = { request: Request; events?: (Event[] | null) | undefined }
type IgnoredEventCause = 'DISABLED' | 'FILTERED' | 'TRANSFORMATION_FAILED' | 'CLI_DISCONNECTED'
type FilteredMeta = ('body' | 'headers' | 'path' | 'query')[]
type TransformationFailedMeta = { transformation_id: string }
type IgnoredEvent = {
  id: string
  team_id: string
  webhook_id: string
  cause: IgnoredEventCause
  request_id: string
  meta?: FilteredMeta | TransformationFailedMeta | undefined
  created_at: string
}
type IgnoredEventPaginatedResult = {
  pagination?: SeekPagination | undefined
  count?: number | undefined
  models?: IgnoredEvent[] | undefined
}
type VerificationHMACConfigs = {
  webhook_secret_key: string
  algorithm: HMACAlgorithms
  header_key: string
  encoding: 'base64' | 'base64url' | 'hex'
}
type VerificationHMAC = { type: 'hmac' | 'HMAC'; configs?: VerificationHMACConfigs | undefined }
type VerificationBasicAuthConfigs = { username: string; password: string }
type VerificationBasicAuth = {
  type: 'basic_auth' | 'BASIC_AUTH'
  configs?: VerificationBasicAuthConfigs | undefined
}
type VerificationAPIKeyConfigs = { header_key: string; api_key: string }
type VerificationAPIKey = {
  type: 'api_key' | 'API_KEY'
  configs?: VerificationAPIKeyConfigs | undefined
}
type VerificationBridgeConfigs = { public_key: string }
type VerificationBridge = {
  type: 'bridge' | 'BRIDGE'
  configs?: VerificationBridgeConfigs | undefined
}
type VerificationCloudSignalConfigs = { api_key: string }
type VerificationCloudSignal = {
  type: 'cloudsignal' | 'CLOUDSIGNAL'
  configs?: VerificationCloudSignalConfigs | undefined
}
type VerificationCourierConfigs = { webhook_secret_key: string }
type VerificationCourier = {
  type: 'courier' | 'COURIER'
  configs?: VerificationCourierConfigs | undefined
}
type VerificationFrontAppConfigs = { webhook_secret_key: string }
type VerificationFrontApp = {
  type: 'frontapp' | 'FRONTAPP'
  configs?: VerificationFrontAppConfigs | undefined
}
type VerificationTwitterConfigs = { api_key: string }
type VerificationTwitter = {
  type: 'twitter' | 'TWITTER'
  configs?: VerificationTwitterConfigs | undefined
}
type VerificationStripeConfigs = { webhook_secret_key: string }
type VerificationStripe = {
  type: 'stripe' | 'STRIPE'
  configs?: VerificationStripeConfigs | undefined
}
type VerificationRechargeConfigs = { webhook_secret_key: string }
type VerificationRecharge = {
  type: 'recharge' | 'RECHARGE'
  configs?: VerificationRechargeConfigs | undefined
}
type VerificationTwilioConfigs = { webhook_secret_key: string }
type VerificationTwilio = {
  type: 'twilio' | 'TWILIO'
  configs?: VerificationTwilioConfigs | undefined
}
type VerificationGitHubConfigs = { webhook_secret_key: string }
type VerificationGitHub = {
  type: 'github' | 'GITHUB'
  configs?: VerificationGitHubConfigs | undefined
}
type VerificationShopifyConfigs = { webhook_secret_key: string }
type VerificationShopify = {
  type: 'shopify' | 'SHOPIFY'
  configs?: VerificationShopifyConfigs | undefined
}
type VerificationPostmarkConfigs = { username: string; password: string }
type VerificationPostmark = {
  type: 'postmark' | 'POSTMARK'
  configs?: VerificationPostmarkConfigs | undefined
}
type VerificationTypeformConfigs = { webhook_secret_key: string }
type VerificationTypeform = {
  type: 'typeform' | 'TYPEFORM'
  configs?: VerificationTypeformConfigs | undefined
}
type VerificationXeroConfigs = { webhook_secret_key: string }
type VerificationXero = { type: 'xero' | 'XERO'; configs?: VerificationXeroConfigs | undefined }
type VerificationSvixConfigs = { webhook_secret_key: string }
type VerificationSvix = { type: 'svix' | 'SVIX'; configs?: VerificationSvixConfigs | undefined }
type VerificationZoomConfigs = { webhook_secret_key: string }
type VerificationZoom = { type: 'zoom' | 'ZOOM'; configs?: VerificationZoomConfigs | undefined }
type VerificationAkeneoConfigs = { webhook_secret_key: string }
type VerificationAkeneo = {
  type: 'akeneo' | 'AKENEO'
  configs?: VerificationAkeneoConfigs | undefined
}
type VerificationAdyenConfigs = { webhook_secret_key: string }
type VerificationAdyen = { type: 'adyen' | 'ADYEN'; configs?: VerificationAdyenConfigs | undefined }
type VerificationGitLabConfigs = { api_key: string }
type VerificationGitLab = {
  type: 'gitlab' | 'GITLAB'
  configs?: VerificationGitLabConfigs | undefined
}
type VerificationPropertyFinderConfigs = { webhook_secret_key: string }
type VerificationPropertyFinder = {
  type: 'property-finder' | 'PROPERTY-FINDER'
  configs?: VerificationPropertyFinderConfigs | undefined
}
type VerificationWooCommerceConfigs = { webhook_secret_key: string }
type VerificationWooCommerce = {
  type: 'woocommerce' | 'WOOCOMMERCE'
  configs?: VerificationWooCommerceConfigs | undefined
}
type VerificationOuraConfigs = { webhook_secret_key: string }
type VerificationOura = { type: 'oura' | 'OURA'; configs?: VerificationOuraConfigs | undefined }
type VerificationCommercelayerConfigs = { webhook_secret_key: string }
type VerificationCommercelayer = {
  type: 'commercelayer' | 'COMMERCELAYER'
  configs?: VerificationCommercelayerConfigs | undefined
}
type VerificationHubspotConfigs = { webhook_secret_key: string }
type VerificationHubspot = {
  type: 'hubspot' | 'HUBSPOT'
  configs?: VerificationHubspotConfigs | undefined
}
type VerificationMailgunConfigs = { webhook_secret_key: string }
type VerificationMailgun = {
  type: 'mailgun' | 'MAILGUN'
  configs?: VerificationMailgunConfigs | undefined
}
type VerificationPersonaConfigs = { webhook_secret_key: string }
type VerificationPersona = {
  type: 'persona' | 'PERSONA'
  configs?: VerificationPersonaConfigs | undefined
}
type VerificationPipedriveConfigs = { username: string; password: string }
type VerificationPipedrive = {
  type: 'pipedrive' | 'PIPEDRIVE'
  configs?: VerificationPipedriveConfigs | undefined
}
type VerificationSendGridConfigs = { webhook_secret_key: string }
type VerificationSendGrid = {
  type: 'sendgrid' | 'SENDGRID'
  configs?: VerificationSendGridConfigs | undefined
}
type VerificationWorkOSConfigs = { webhook_secret_key: string }
type VerificationWorkOS = {
  type: 'workos' | 'WORKOS'
  configs?: VerificationWorkOSConfigs | undefined
}
type VerificationSyncteraConfigs = { webhook_secret_key: string }
type VerificationSynctera = {
  type: 'synctera' | 'SYNCTERA'
  configs?: VerificationSyncteraConfigs | undefined
}
type VerificationAWSSNSConfigs = {}
type VerificationAWSSNS = {
  type: 'aws_sns' | 'AWS_SNS'
  configs?: VerificationAWSSNSConfigs | undefined
}
type Verification3dEyeConfigs = { webhook_secret_key: string }
type Verification3dEye = {
  type: 'three_d_eye' | 'THREE_D_EYE'
  configs?: Verification3dEyeConfigs | undefined
}
type VerificationTwitchConfigs = { webhook_secret_key: string }
type VerificationTwitch = {
  type: 'twitch' | 'TWITCH'
  configs?: VerificationTwitchConfigs | undefined
}
type VerificationEnodeConfigs = { webhook_secret_key: string }
type VerificationEnode = { type: 'enode' | 'ENODE'; configs?: VerificationEnodeConfigs | undefined }
type VerificationFavroConfigs = { webhook_secret_key: string }
type VerificationFavro = { type: 'favro' | 'FAVRO'; configs?: VerificationFavroConfigs | undefined }
type VerificationLinearConfigs = { webhook_secret_key: string }
type VerificationLinear = {
  type: 'linear' | 'LINEAR'
  configs?: VerificationLinearConfigs | undefined
}
type VerificationShoplineConfigs = { webhook_secret_key: string }
type VerificationShopline = {
  type: 'shopline' | 'SHOPLINE'
  configs?: VerificationShoplineConfigs | undefined
}
type VerificationWixConfigs = { webhook_secret_key: string }
type VerificationWix = { type: 'wix' | 'WIX'; configs?: VerificationWixConfigs | undefined }
type VerificationNMIPaymentGatewayConfigs = { webhook_secret_key: string }
type VerificationNMIPaymentGateway = {
  type: 'nmi' | 'NMI'
  configs?: VerificationNMIPaymentGatewayConfigs | undefined
}
type VerificationOrbConfigs = { webhook_secret_key: string }
type VerificationOrb = { type: 'orb' | 'ORB'; configs?: VerificationOrbConfigs | undefined }
type VerificationPylonConfigs = { webhook_secret_key: string }
type VerificationPylon = { type: 'pylon' | 'PYLON'; configs?: VerificationPylonConfigs | undefined }
type VerificationRepayConfigs = { webhook_secret_key: string }
type VerificationRepay = { type: 'repay' | 'REPAY'; configs?: VerificationRepayConfigs | undefined }
type VerificationSquareConfigs = { webhook_secret_key: string }
type VerificationSquare = {
  type: 'square' | 'SQUARE'
  configs?: VerificationSquareConfigs | undefined
}
type VerificationSolidGateConfigs = { webhook_secret_key: string }
type VerificationSolidGate = {
  type: 'solidgate' | 'SOLIDGATE'
  configs?: VerificationSolidGateConfigs | undefined
}
type VerificationTrelloConfigs = { webhook_secret_key: string }
type VerificationTrello = {
  type: 'trello' | 'TRELLO'
  configs?: VerificationTrelloConfigs | undefined
}
type VerificationSanityConfigs = { webhook_secret_key: string }
type VerificationSanity = {
  type: 'sanity' | 'SANITY'
  configs?: VerificationSanityConfigs | undefined
}
type VerificationEbayConfigs = {
  environment: string
  client_id: string
  client_secret: string
  dev_id: string
  verification_token: string
}
type VerificationEbay = { type: 'ebay' | 'EBAY'; configs?: VerificationEbayConfigs | undefined }
type VerificationTelnyxConfigs = { public_key: string }
type VerificationTelnyx = {
  type: 'telnyx' | 'TELNYX'
  configs?: VerificationTelnyxConfigs | undefined
}
type VerificationDiscordConfigs = { public_key: string }
type VerificationDiscord = {
  type: 'discord' | 'DISCORD'
  configs?: VerificationDiscordConfigs | undefined
}
type VerificationTokenIOConfigs = { public_key: string }
type VerificationTokenIO = {
  type: 'tokenio' | 'TOKENIO'
  configs?: VerificationTokenIOConfigs | undefined
}
type VerificationFiservConfigs = { webhook_secret_key: string }
type VerificationFiserv = {
  type: 'fiserv' | 'FISERV'
  configs?: VerificationFiservConfigs | undefined
}
type VerificationBondsmithConfigs = { webhook_secret_key: string }
type VerificationBondsmith = {
  type: 'bondsmith' | 'BONDSMITH'
  configs?: VerificationBondsmithConfigs | undefined
}
type VerificationVercelLogDrainsConfigs = {
  webhook_secret_key?: (string | null) | undefined
  vercel_log_drains_secret: string
}
type VerificationVercelLogDrains = {
  type: 'vercel_log_drains' | 'VERCEL_LOG_DRAINS'
  configs?: VerificationVercelLogDrainsConfigs | undefined
}
type VerificationVercelConfigs = { webhook_secret_key: string }
type VerificationVercel = {
  type: 'vercel' | 'VERCEL'
  configs?: VerificationVercelConfigs | undefined
}
type VerificationTebexConfigs = { webhook_secret_key: string }
type VerificationTebex = { type: 'tebex' | 'TEBEX'; configs?: VerificationTebexConfigs | undefined }
type VerificationSlackConfigs = { webhook_secret_key: string }
type VerificationSlack = { type: 'slack' | 'SLACK'; configs?: VerificationSlackConfigs | undefined }
type VerificationRazorpayConfigs = { webhook_secret_key: string }
type VerificationRazorpay = {
  type: 'razorpay' | 'RAZORPAY'
  configs?: VerificationRazorpayConfigs | undefined
}
type VerificationMailchimpConfigs = { webhook_secret_key: string }
type VerificationMailchimp = {
  type: 'mailchimp' | 'MAILCHIMP'
  configs?: VerificationMailchimpConfigs | undefined
}
type VerificationPaddleConfigs = { webhook_secret_key: string }
type VerificationPaddle = {
  type: 'paddle' | 'PADDLE'
  configs?: VerificationPaddleConfigs | undefined
}
type VerificationPaypalConfigs = { webhook_id: string }
type VerificationPaypal = {
  type: 'paypal' | 'PAYPAL'
  configs?: VerificationPaypalConfigs | undefined
}
type VerificationTreezorConfigs = { webhook_secret_key: string }
type VerificationTreezor = {
  type: 'treezor' | 'TREEZOR'
  configs?: VerificationTreezorConfigs | undefined
}
type VerificationPraxisConfigs = { webhook_secret_key: string }
type VerificationPraxis = {
  type: 'praxis' | 'PRAXIS'
  configs?: VerificationPraxisConfigs | undefined
}
type VerificationConfig =
  | VerificationHMAC
  | VerificationBasicAuth
  | VerificationAPIKey
  | VerificationBridge
  | VerificationCloudSignal
  | VerificationCourier
  | VerificationFrontApp
  | VerificationTwitter
  | VerificationStripe
  | VerificationRecharge
  | VerificationTwilio
  | VerificationGitHub
  | VerificationShopify
  | VerificationPostmark
  | VerificationTypeform
  | VerificationXero
  | VerificationSvix
  | VerificationZoom
  | VerificationAkeneo
  | VerificationAdyen
  | VerificationGitLab
  | VerificationPropertyFinder
  | VerificationWooCommerce
  | VerificationOura
  | VerificationCommercelayer
  | VerificationHubspot
  | VerificationMailgun
  | VerificationPersona
  | VerificationPipedrive
  | VerificationSendGrid
  | VerificationWorkOS
  | VerificationSynctera
  | VerificationAWSSNS
  | Verification3dEye
  | VerificationTwitch
  | VerificationEnode
  | VerificationFavro
  | VerificationLinear
  | VerificationShopline
  | VerificationWix
  | VerificationNMIPaymentGateway
  | VerificationOrb
  | VerificationPylon
  | VerificationRepay
  | VerificationSquare
  | VerificationSolidGate
  | VerificationTrello
  | VerificationSanity
  | VerificationEbay
  | VerificationTelnyx
  | VerificationDiscord
  | VerificationTokenIO
  | VerificationFiserv
  | VerificationBondsmith
  | VerificationVercelLogDrains
  | VerificationVercel
  | VerificationTebex
  | VerificationSlack
  | VerificationRazorpay
  | VerificationMailchimp
  | VerificationPaddle
  | VerificationPaypal
  | VerificationTreezor
  | VerificationPraxis
type SourceAllowedHTTPMethod = ('GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE')[] | null
type SourceCustomResponseContentType = 'json' | 'text' | 'xml'
type SourceCustomResponse = { content_type: SourceCustomResponseContentType; body: string } | null
type Source = {
  id: string
  name: string
  description?: (string | null) | undefined
  team_id: string
  url: string
  verification?: VerificationConfig | undefined
  allowed_http_methods?: SourceAllowedHTTPMethod | undefined
  custom_response?: SourceCustomResponse | undefined
  disabled_at: string | null
  updated_at: string
  created_at: string
}
type SourcePaginatedResult = {
  pagination?: SeekPagination | undefined
  count?: number | undefined
  models?: Source[] | undefined
}
type TopicsValue =
  | 'issue.opened'
  | 'issue.updated'
  | 'deprecated.attempt-failed'
  | 'event.successful'
type ToggleWebhookNotifications = {
  enabled: boolean
  topics?: (TopicsValue[] | null) | undefined
  source_id: string
}
type AddCustomHostname = { hostname: string }
type ListCustomDomainSchema = {
  id?: string | undefined
  hostname?: string | undefined
  status?: string | undefined
  ssl?:
    | {
        id?: string | undefined
        type?: string | undefined
        method?: string | undefined
        status?: string | undefined
        txt_name?: string | undefined
        txt_value?: string | undefined
        validation_records?:
          | {
              status?: string | undefined
              txt_name?: string | undefined
              txt_value?: string | undefined
            }[]
          | undefined
        dcv_delegation_records?:
          | { cname?: string | undefined; cname_target?: string | undefined }[]
          | undefined
        settings?: { min_tls_version?: string | undefined } | undefined
        bundle_method?: string | undefined
        wildcard?: boolean | undefined
        certificate_authority?: string | undefined
      }
    | undefined
  verification_errors?: string[] | undefined
  ownership_verification?:
    | { type?: string | undefined; name?: string | undefined; value?: string | undefined }
    | undefined
  created_at?: string | undefined
}[]
type DeleteCustomDomainSchema = { id: string }
type Transformation = {
  id: string
  team_id: string
  name: string
  code: string
  encrypted_env?: (string | null) | undefined
  iv?: (string | null) | undefined
  env?: ({ [x: string]: string } | null) | undefined
  updated_at: string
  created_at: string
}
type TransformationPaginatedResult = {
  pagination?: SeekPagination | undefined
  count?: number | undefined
  models?: Transformation[] | undefined
}
type TransformationExecutorOutput = {
  request_id?: (string | null) | undefined
  transformation_id?: (string | null) | undefined
  execution_id?: (string | null) | undefined
  log_level: TransformationExecutionLogLevel
  request?:
    | ({
        headers?: string | { [x: string]: { [x: string]: unknown } | null } | undefined
        path: string
        query?: ({} | null) | string | undefined
        parsed_query?: (string | null) | {} | undefined
        body?: (string | null) | {} | undefined
      } | null)
    | undefined
  console?: (ConsoleLine[] | null) | undefined
}
type TransformationExecutionPaginatedResult = {
  pagination?: SeekPagination | undefined
  count?: number | undefined
  models?: TransformationExecution[] | undefined
}
type RetryStrategy = 'linear' | 'exponential'
type RetryRule = {
  type: 'retry'
  strategy: RetryStrategy
  interval?: (number | null) | undefined
  count?: (number | null) | undefined
  response_status_codes?: (string[] | null) | undefined
}
type FilterRuleProperty =
  | (string | null)
  | (number | null)
  | (boolean | null)
  | ({ [x: string]: unknown } | null)
type FilterRule = {
  type: 'filter'
  headers?: FilterRuleProperty | undefined
  body?: FilterRuleProperty | undefined
  query?: FilterRuleProperty | undefined
  path?: FilterRuleProperty | undefined
}
type TransformRule = {
  type: 'transform'
  transformation_id?: (string | null) | undefined
  transformation?:
    | { name: string; code: string; env?: ({ [x: string]: string } | null) | undefined }
    | undefined
}
type DelayRule = { type: 'delay'; delay: number }
type Rule = RetryRule | FilterRule | TransformRule | DelayRule
type Connection = {
  id: string
  name: string | null
  full_name: string | null
  description: string | null
  team_id: string
  destination: Destination
  source: Source
  rules: Rule[] | null
  disabled_at: string | null
  paused_at: string | null
  updated_at: string
  created_at: string
}
type ConnectionPaginatedResult = {
  pagination?: SeekPagination | undefined
  count?: number | undefined
  models?: Connection[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/issue-triggers': {
      $get:
        | {
            input: {
              query: {
                name?: string | undefined
                type?: IssueType | IssueType[] | undefined
                disabled_at?: (string | null) | Operators | undefined
                order_by?: 'created_at' | 'type' | ('created_at' | 'type')[] | undefined
                dir?: 'asc' | 'desc' | ('asc' | 'desc')[] | undefined
                limit?: number | undefined
                next?: string | undefined
                prev?: string | undefined
              }
            }
            output: IssueTriggerPaginatedResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                name?: string | undefined
                type?: IssueType | IssueType[] | undefined
                disabled_at?: (string | null) | Operators | undefined
                order_by?: 'created_at' | 'type' | ('created_at' | 'type')[] | undefined
                dir?: 'asc' | 'desc' | ('asc' | 'desc')[] | undefined
                limit?: number | undefined
                next?: string | undefined
                prev?: string | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                name?: string | undefined
                type?: IssueType | IssueType[] | undefined
                disabled_at?: (string | null) | Operators | undefined
                order_by?: 'created_at' | 'type' | ('created_at' | 'type')[] | undefined
                dir?: 'asc' | 'desc' | ('asc' | 'desc')[] | undefined
                limit?: number | undefined
                next?: string | undefined
                prev?: string | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: {
              json: {
                type: IssueType
                configs?:
                  | IssueTriggerDeliveryConfigs
                  | IssueTriggerTransformationConfigs
                  | IssueTriggerBackpressureConfigs
                  | undefined
                channels: IssueTriggerChannels
                name?: (string | null) | undefined
              }
            }
            output: IssueTrigger
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                type: IssueType
                configs?:
                  | IssueTriggerDeliveryConfigs
                  | IssueTriggerTransformationConfigs
                  | IssueTriggerBackpressureConfigs
                  | undefined
                channels: IssueTriggerChannels
                name?: (string | null) | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                type: IssueType
                configs?:
                  | IssueTriggerDeliveryConfigs
                  | IssueTriggerTransformationConfigs
                  | IssueTriggerBackpressureConfigs
                  | undefined
                channels: IssueTriggerChannels
                name?: (string | null) | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 422
          }
      $put:
        | {
            input: {
              json: {
                type: IssueType
                configs?:
                  | IssueTriggerDeliveryConfigs
                  | IssueTriggerTransformationConfigs
                  | IssueTriggerBackpressureConfigs
                  | undefined
                channels: IssueTriggerChannels
                name: string
              }
            }
            output: IssueTrigger
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                type: IssueType
                configs?:
                  | IssueTriggerDeliveryConfigs
                  | IssueTriggerTransformationConfigs
                  | IssueTriggerBackpressureConfigs
                  | undefined
                channels: IssueTriggerChannels
                name: string
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                type: IssueType
                configs?:
                  | IssueTriggerDeliveryConfigs
                  | IssueTriggerTransformationConfigs
                  | IssueTriggerBackpressureConfigs
                  | undefined
                channels: IssueTriggerChannels
                name: string
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/issue-triggers/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: IssueTrigger
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & {
              json: {
                configs?:
                  | IssueTriggerDeliveryConfigs
                  | IssueTriggerTransformationConfigs
                  | IssueTriggerBackpressureConfigs
                  | undefined
                channels?: IssueTriggerChannels | undefined
                disabled_at?: (string | null) | undefined
                name?: (string | null) | undefined
              }
            }
            output: IssueTrigger
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: {
                configs?:
                  | IssueTriggerDeliveryConfigs
                  | IssueTriggerTransformationConfigs
                  | IssueTriggerBackpressureConfigs
                  | undefined
                channels?: IssueTriggerChannels | undefined
                disabled_at?: (string | null) | undefined
                name?: (string | null) | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: {
                configs?:
                  | IssueTriggerDeliveryConfigs
                  | IssueTriggerTransformationConfigs
                  | IssueTriggerBackpressureConfigs
                  | undefined
                channels?: IssueTriggerChannels | undefined
                disabled_at?: (string | null) | undefined
                name?: (string | null) | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { id: string } }
            output: DeletedIssueTriggerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/issue-triggers/:id/disable': {
      $put:
        | {
            input: { param: { id: string } }
            output: IssueTrigger
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/issue-triggers/:id/enable': {
      $put:
        | {
            input: { param: { id: string } }
            output: IssueTrigger
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/attempts': {
      $get:
        | {
            input: {
              query: {
                event_id?: string | string[] | undefined
                order_by?: 'created_at' | 'created_at'[] | undefined
                dir?: 'asc' | 'desc' | ('asc' | 'desc')[] | undefined
                limit?: number | undefined
                next?: string | undefined
                prev?: string | undefined
              }
            }
            output: EventAttemptPaginatedResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                event_id?: string | string[] | undefined
                order_by?: 'created_at' | 'created_at'[] | undefined
                dir?: 'asc' | 'desc' | ('asc' | 'desc')[] | undefined
                limit?: number | undefined
                next?: string | undefined
                prev?: string | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                event_id?: string | string[] | undefined
                order_by?: 'created_at' | 'created_at'[] | undefined
                dir?: 'asc' | 'desc' | ('asc' | 'desc')[] | undefined
                limit?: number | undefined
                next?: string | undefined
                prev?: string | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/attempts/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: EventAttempt
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/bookmarks': {
      $get:
        | {
            input: {
              query: {
                id?: string | string[] | undefined
                name?: string | string[] | undefined
                webhook_id?: string | string[] | undefined
                event_data_id?: string | string[] | undefined
                label?: string | string[] | undefined
                last_used_at?: (string | null) | Operators | undefined
                order_by?: 'created_at' | 'created_at'[] | undefined
                dir?: 'asc' | 'desc' | ('asc' | 'desc')[] | undefined
                limit?: number | undefined
                next?: string | undefined
                prev?: string | undefined
              }
            }
            output: BookmarkPaginatedResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id?: string | string[] | undefined
                name?: string | string[] | undefined
                webhook_id?: string | string[] | undefined
                event_data_id?: string | string[] | undefined
                label?: string | string[] | undefined
                last_used_at?: (string | null) | Operators | undefined
                order_by?: 'created_at' | 'created_at'[] | undefined
                dir?: 'asc' | 'desc' | ('asc' | 'desc')[] | undefined
                limit?: number | undefined
                next?: string | undefined
                prev?: string | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                id?: string | string[] | undefined
                name?: string | string[] | undefined
                webhook_id?: string | string[] | undefined
                event_data_id?: string | string[] | undefined
                label?: string | string[] | undefined
                last_used_at?: (string | null) | Operators | undefined
                order_by?: 'created_at' | 'created_at'[] | undefined
                dir?: 'asc' | 'desc' | ('asc' | 'desc')[] | undefined
                limit?: number | undefined
                next?: string | undefined
                prev?: string | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: {
              json: {
                event_data_id: string
                webhook_id: string
                label: string
                name?: string | undefined
              }
            }
            output: Bookmark
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                event_data_id: string
                webhook_id: string
                label: string
                name?: string | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                event_data_id: string
                webhook_id: string
                label: string
                name?: string | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/bookmarks/:id': {
      $get:
        | { input: { param: { id: string } }; output: Bookmark; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: string } }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & {
              json: {
                event_data_id?: string | undefined
                webhook_id?: string | undefined
                label?: string | undefined
                name?: string | undefined
              }
            }
            output: Bookmark
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: {
                event_data_id?: string | undefined
                webhook_id?: string | undefined
                label?: string | undefined
                name?: string | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: {
                event_data_id?: string | undefined
                webhook_id?: string | undefined
                label?: string | undefined
                name?: string | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: {
                event_data_id?: string | undefined
                webhook_id?: string | undefined
                label?: string | undefined
                name?: string | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { id: string } }
            output: DeletedBookmarkResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/bookmarks/:id/raw_body': {
      $get:
        | { input: { param: { id: string } }; output: RawBody; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: string } }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/bookmarks/:id/trigger': {
      $post:
        | {
            input: { param: { id: string } } & { json: { target?: 'http' | 'cli' | undefined } }
            output: EventArray
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: { target?: 'http' | 'cli' | undefined } }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: { target?: 'http' | 'cli' | undefined } }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: { target?: 'http' | 'cli' | undefined } }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/destinations': {
      $get:
        | {
            input: {
              query: {
                id?: string | string[] | undefined
                name?: string | Operators | string[] | undefined
                disabled?: boolean | undefined
                disabled_at?: (string | null) | Operators | undefined
                url?: string | string[] | undefined
                cli_path?:
                  | string
                  | { any?: boolean | undefined; all?: boolean | undefined }
                  | string[]
                  | undefined
                order_by?: 'created_at' | 'created_at'[] | undefined
                dir?: 'asc' | 'desc' | ('asc' | 'desc')[] | undefined
                limit?: number | undefined
                next?: string | undefined
                prev?: string | undefined
              }
            }
            output: DestinationPaginatedResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id?: string | string[] | undefined
                name?: string | Operators | string[] | undefined
                disabled?: boolean | undefined
                disabled_at?: (string | null) | Operators | undefined
                url?: string | string[] | undefined
                cli_path?:
                  | string
                  | { any?: boolean | undefined; all?: boolean | undefined }
                  | string[]
                  | undefined
                order_by?: 'created_at' | 'created_at'[] | undefined
                dir?: 'asc' | 'desc' | ('asc' | 'desc')[] | undefined
                limit?: number | undefined
                next?: string | undefined
                prev?: string | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                id?: string | string[] | undefined
                name?: string | Operators | string[] | undefined
                disabled?: boolean | undefined
                disabled_at?: (string | null) | Operators | undefined
                url?: string | string[] | undefined
                cli_path?:
                  | string
                  | { any?: boolean | undefined; all?: boolean | undefined }
                  | string[]
                  | undefined
                order_by?: 'created_at' | 'created_at'[] | undefined
                dir?: 'asc' | 'desc' | ('asc' | 'desc')[] | undefined
                limit?: number | undefined
                next?: string | undefined
                prev?: string | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: {
              json: {
                name: string
                description?: (string | null) | undefined
                url?: (string | null) | undefined
                cli_path?: (string | null) | undefined
                rate_limit?: (number | null) | undefined
                rate_limit_period?: 'second' | 'minute' | 'hour' | 'concurrent' | undefined
                http_method?: DestinationHTTPMethod | undefined
                auth_method?: DestinationAuthMethodConfig | undefined
                path_forwarding_disabled?: boolean | undefined
              }
            }
            output: Destination
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                name: string
                description?: (string | null) | undefined
                url?: (string | null) | undefined
                cli_path?: (string | null) | undefined
                rate_limit?: (number | null) | undefined
                rate_limit_period?: 'second' | 'minute' | 'hour' | 'concurrent' | undefined
                http_method?: DestinationHTTPMethod | undefined
                auth_method?: DestinationAuthMethodConfig | undefined
                path_forwarding_disabled?: boolean | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                name: string
                description?: (string | null) | undefined
                url?: (string | null) | undefined
                cli_path?: (string | null) | undefined
                rate_limit?: (number | null) | undefined
                rate_limit_period?: 'second' | 'minute' | 'hour' | 'concurrent' | undefined
                http_method?: DestinationHTTPMethod | undefined
                auth_method?: DestinationAuthMethodConfig | undefined
                path_forwarding_disabled?: boolean | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 422
          }
      $put:
        | {
            input: {
              json: {
                name: string
                description?: (string | null) | undefined
                url?: (string | null) | undefined
                cli_path?: (string | null) | undefined
                rate_limit?: (number | null) | undefined
                rate_limit_period?: 'second' | 'minute' | 'hour' | 'concurrent' | undefined
                http_method?: DestinationHTTPMethod | undefined
                auth_method?: DestinationAuthMethodConfig | undefined
                path_forwarding_disabled?: boolean | undefined
              }
            }
            output: Destination
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                name: string
                description?: (string | null) | undefined
                url?: (string | null) | undefined
                cli_path?: (string | null) | undefined
                rate_limit?: (number | null) | undefined
                rate_limit_period?: 'second' | 'minute' | 'hour' | 'concurrent' | undefined
                http_method?: DestinationHTTPMethod | undefined
                auth_method?: DestinationAuthMethodConfig | undefined
                path_forwarding_disabled?: boolean | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                name: string
                description?: (string | null) | undefined
                url?: (string | null) | undefined
                cli_path?: (string | null) | undefined
                rate_limit?: (number | null) | undefined
                rate_limit_period?: 'second' | 'minute' | 'hour' | 'concurrent' | undefined
                http_method?: DestinationHTTPMethod | undefined
                auth_method?: DestinationAuthMethodConfig | undefined
                path_forwarding_disabled?: boolean | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/destinations/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: Destination
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 410
          }
      $put:
        | {
            input: { param: { id: string } } & {
              json: {
                name?: string | undefined
                description?: (string | null) | undefined
                url?: (string | null) | undefined
                cli_path?: (string | null) | undefined
                rate_limit?: (number | null) | undefined
                rate_limit_period?: 'second' | 'minute' | 'hour' | 'concurrent' | undefined
                http_method?: DestinationHTTPMethod | undefined
                auth_method?: DestinationAuthMethodConfig | undefined
                path_forwarding_disabled?: boolean | undefined
              }
            }
            output: Destination
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: {
                name?: string | undefined
                description?: (string | null) | undefined
                url?: (string | null) | undefined
                cli_path?: (string | null) | undefined
                rate_limit?: (number | null) | undefined
                rate_limit_period?: 'second' | 'minute' | 'hour' | 'concurrent' | undefined
                http_method?: DestinationHTTPMethod | undefined
                auth_method?: DestinationAuthMethodConfig | undefined
                path_forwarding_disabled?: boolean | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: {
                name?: string | undefined
                description?: (string | null) | undefined
                url?: (string | null) | undefined
                cli_path?: (string | null) | undefined
                rate_limit?: (number | null) | undefined
                rate_limit_period?: 'second' | 'minute' | 'hour' | 'concurrent' | undefined
                http_method?: DestinationHTTPMethod | undefined
                auth_method?: DestinationAuthMethodConfig | undefined
                path_forwarding_disabled?: boolean | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: {
                name?: string | undefined
                description?: (string | null) | undefined
                url?: (string | null) | undefined
                cli_path?: (string | null) | undefined
                rate_limit?: (number | null) | undefined
                rate_limit_period?: 'second' | 'minute' | 'hour' | 'concurrent' | undefined
                http_method?: DestinationHTTPMethod | undefined
                auth_method?: DestinationAuthMethodConfig | undefined
                path_forwarding_disabled?: boolean | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { id: string } }
            output: { id: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/destinations/:id/disable': {
      $put:
        | {
            input: { param: { id: string } }
            output: Destination
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/destinations/:id/archive': {
      $put:
        | {
            input: { param: { id: string } }
            output: Destination
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/destinations/:id/enable': {
      $put:
        | {
            input: { param: { id: string } }
            output: Destination
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/destinations/:id/unarchive': {
      $put:
        | {
            input: { param: { id: string } }
            output: Destination
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/bulk/events/retry': {
      $get:
        | {
            input: {
              query: {
                cancelled_at?: (string | null) | Operators | undefined
                completed_at?: (string | null) | Operators | undefined
                created_at?: (string | null) | Operators | undefined
                id?: string | string[] | undefined
                query?:
                  | {
                      id?: string | string[] | undefined
                      status?: EventStatus | EventStatus[] | undefined
                      webhook_id?: string | string[] | undefined
                      destination_id?: string | string[] | undefined
                      source_id?: string | string[] | undefined
                      attempts?: number | Operators | undefined
                      response_status?: number | Operators | number[] | undefined
                      successful_at?: string | Operators | undefined
                      created_at?: string | Operators | undefined
                      error_code?: AttemptErrorCodes | AttemptErrorCodes[] | undefined
                      cli_id?:
                        | string
                        | { any?: boolean | undefined; all?: boolean | undefined }
                        | string[]
                        | undefined
                      last_attempt_at?: string | Operators | undefined
                      search_term?: string | undefined
                      headers?: string | {} | undefined
                      body?: string | {} | undefined
                      parsed_query?: string | {} | undefined
                      path?: string | undefined
                      cli_user_id?: string | string[] | undefined
                      issue_id?: string | string[] | undefined
                      event_data_id?: string | string[] | undefined
                      bulk_retry_id?: string | string[] | undefined
                    }
                  | undefined
                query_partial_match?: boolean | undefined
                in_progress?: boolean | undefined
                order_by?: 'created_at' | 'created_at'[] | undefined
                dir?: 'asc' | 'desc' | ('asc' | 'desc')[] | undefined
                limit?: number | undefined
                next?: string | undefined
                prev?: string | undefined
              }
            }
            output: BatchOperationPaginatedResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cancelled_at?: (string | null) | Operators | undefined
                completed_at?: (string | null) | Operators | undefined
                created_at?: (string | null) | Operators | undefined
                id?: string | string[] | undefined
                query?:
                  | {
                      id?: string | string[] | undefined
                      status?: EventStatus | EventStatus[] | undefined
                      webhook_id?: string | string[] | undefined
                      destination_id?: string | string[] | undefined
                      source_id?: string | string[] | undefined
                      attempts?: number | Operators | undefined
                      response_status?: number | Operators | number[] | undefined
                      successful_at?: string | Operators | undefined
                      created_at?: string | Operators | undefined
                      error_code?: AttemptErrorCodes | AttemptErrorCodes[] | undefined
                      cli_id?:
                        | string
                        | { any?: boolean | undefined; all?: boolean | undefined }
                        | string[]
                        | undefined
                      last_attempt_at?: string | Operators | undefined
                      search_term?: string | undefined
                      headers?: string | {} | undefined
                      body?: string | {} | undefined
                      parsed_query?: string | {} | undefined
                      path?: string | undefined
                      cli_user_id?: string | string[] | undefined
                      issue_id?: string | string[] | undefined
                      event_data_id?: string | string[] | undefined
                      bulk_retry_id?: string | string[] | undefined
                    }
                  | undefined
                query_partial_match?: boolean | undefined
                in_progress?: boolean | undefined
                order_by?: 'created_at' | 'created_at'[] | undefined
                dir?: 'asc' | 'desc' | ('asc' | 'desc')[] | undefined
                limit?: number | undefined
                next?: string | undefined
                prev?: string | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                cancelled_at?: (string | null) | Operators | undefined
                completed_at?: (string | null) | Operators | undefined
                created_at?: (string | null) | Operators | undefined
                id?: string | string[] | undefined
                query?:
                  | {
                      id?: string | string[] | undefined
                      status?: EventStatus | EventStatus[] | undefined
                      webhook_id?: string | string[] | undefined
                      destination_id?: string | string[] | undefined
                      source_id?: string | string[] | undefined
                      attempts?: number | Operators | undefined
                      response_status?: number | Operators | number[] | undefined
                      successful_at?: string | Operators | undefined
                      created_at?: string | Operators | undefined
                      error_code?: AttemptErrorCodes | AttemptErrorCodes[] | undefined
                      cli_id?:
                        | string
                        | { any?: boolean | undefined; all?: boolean | undefined }
                        | string[]
                        | undefined
                      last_attempt_at?: string | Operators | undefined
                      search_term?: string | undefined
                      headers?: string | {} | undefined
                      body?: string | {} | undefined
                      parsed_query?: string | {} | undefined
                      path?: string | undefined
                      cli_user_id?: string | string[] | undefined
                      issue_id?: string | string[] | undefined
                      event_data_id?: string | string[] | undefined
                      bulk_retry_id?: string | string[] | undefined
                    }
                  | undefined
                query_partial_match?: boolean | undefined
                in_progress?: boolean | undefined
                order_by?: 'created_at' | 'created_at'[] | undefined
                dir?: 'asc' | 'desc' | ('asc' | 'desc')[] | undefined
                limit?: number | undefined
                next?: string | undefined
                prev?: string | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: {
              json: {
                query?:
                  | {
                      id?: string | string[] | undefined
                      status?: EventStatus | EventStatus[] | undefined
                      webhook_id?: string | string[] | undefined
                      destination_id?: string | string[] | undefined
                      source_id?: string | string[] | undefined
                      attempts?: number | Operators | undefined
                      response_status?: number | Operators | number[] | undefined
                      successful_at?: string | Operators | undefined
                      created_at?: string | Operators | undefined
                      error_code?: AttemptErrorCodes | AttemptErrorCodes[] | undefined
                      cli_id?:
                        | string
                        | { any?: boolean | undefined; all?: boolean | undefined }
                        | string[]
                        | undefined
                      last_attempt_at?: string | Operators | undefined
                      search_term?: string | undefined
                      headers?: string | {} | undefined
                      body?: string | {} | undefined
                      parsed_query?: string | {} | undefined
                      path?: string | undefined
                      cli_user_id?: string | string[] | undefined
                      issue_id?: string | string[] | undefined
                      event_data_id?: string | string[] | undefined
                      bulk_retry_id?: string | string[] | undefined
                    }
                  | undefined
              }
            }
            output: BatchOperation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                query?:
                  | {
                      id?: string | string[] | undefined
                      status?: EventStatus | EventStatus[] | undefined
                      webhook_id?: string | string[] | undefined
                      destination_id?: string | string[] | undefined
                      source_id?: string | string[] | undefined
                      attempts?: number | Operators | undefined
                      response_status?: number | Operators | number[] | undefined
                      successful_at?: string | Operators | undefined
                      created_at?: string | Operators | undefined
                      error_code?: AttemptErrorCodes | AttemptErrorCodes[] | undefined
                      cli_id?:
                        | string
                        | { any?: boolean | undefined; all?: boolean | undefined }
                        | string[]
                        | undefined
                      last_attempt_at?: string | Operators | undefined
                      search_term?: string | undefined
                      headers?: string | {} | undefined
                      body?: string | {} | undefined
                      parsed_query?: string | {} | undefined
                      path?: string | undefined
                      cli_user_id?: string | string[] | undefined
                      issue_id?: string | string[] | undefined
                      event_data_id?: string | string[] | undefined
                      bulk_retry_id?: string | string[] | undefined
                    }
                  | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                query?:
                  | {
                      id?: string | string[] | undefined
                      status?: EventStatus | EventStatus[] | undefined
                      webhook_id?: string | string[] | undefined
                      destination_id?: string | string[] | undefined
                      source_id?: string | string[] | undefined
                      attempts?: number | Operators | undefined
                      response_status?: number | Operators | number[] | undefined
                      successful_at?: string | Operators | undefined
                      created_at?: string | Operators | undefined
                      error_code?: AttemptErrorCodes | AttemptErrorCodes[] | undefined
                      cli_id?:
                        | string
                        | { any?: boolean | undefined; all?: boolean | undefined }
                        | string[]
                        | undefined
                      last_attempt_at?: string | Operators | undefined
                      search_term?: string | undefined
                      headers?: string | {} | undefined
                      body?: string | {} | undefined
                      parsed_query?: string | {} | undefined
                      path?: string | undefined
                      cli_user_id?: string | string[] | undefined
                      issue_id?: string | string[] | undefined
                      event_data_id?: string | string[] | undefined
                      bulk_retry_id?: string | string[] | undefined
                    }
                  | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/bulk/events/retry/plan': {
      $get:
        | {
            input: {
              query: {
                query?:
                  | {
                      id?: string | string[] | undefined
                      status?: EventStatus | EventStatus[] | undefined
                      webhook_id?: string | string[] | undefined
                      destination_id?: string | string[] | undefined
                      source_id?: string | string[] | undefined
                      attempts?: number | Operators | undefined
                      response_status?: number | Operators | number[] | undefined
                      successful_at?: string | Operators | undefined
                      created_at?: string | Operators | undefined
                      error_code?: AttemptErrorCodes | AttemptErrorCodes[] | undefined
                      cli_id?:
                        | string
                        | { any?: boolean | undefined; all?: boolean | undefined }
                        | string[]
                        | undefined
                      last_attempt_at?: string | Operators | undefined
                      search_term?: string | undefined
                      headers?: string | {} | undefined
                      body?: string | {} | undefined
                      parsed_query?: string | {} | undefined
                      path?: string | undefined
                      cli_user_id?: string | string[] | undefined
                      issue_id?: string | string[] | undefined
                      event_data_id?: string | string[] | undefined
                      bulk_retry_id?: string | string[] | undefined
                    }
                  | undefined
              }
            }
            output: {
              estimated_batch?: (number | null) | undefined
              estimated_count?: (number | null) | undefined
              progress?: (number | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query?:
                  | {
                      id?: string | string[] | undefined
                      status?: EventStatus | EventStatus[] | undefined
                      webhook_id?: string | string[] | undefined
                      destination_id?: string | string[] | undefined
                      source_id?: string | string[] | undefined
                      attempts?: number | Operators | undefined
                      response_status?: number | Operators | number[] | undefined
                      successful_at?: string | Operators | undefined
                      created_at?: string | Operators | undefined
                      error_code?: AttemptErrorCodes | AttemptErrorCodes[] | undefined
                      cli_id?:
                        | string
                        | { any?: boolean | undefined; all?: boolean | undefined }
                        | string[]
                        | undefined
                      last_attempt_at?: string | Operators | undefined
                      search_term?: string | undefined
                      headers?: string | {} | undefined
                      body?: string | {} | undefined
                      parsed_query?: string | {} | undefined
                      path?: string | undefined
                      cli_user_id?: string | string[] | undefined
                      issue_id?: string | string[] | undefined
                      event_data_id?: string | string[] | undefined
                      bulk_retry_id?: string | string[] | undefined
                    }
                  | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                query?:
                  | {
                      id?: string | string[] | undefined
                      status?: EventStatus | EventStatus[] | undefined
                      webhook_id?: string | string[] | undefined
                      destination_id?: string | string[] | undefined
                      source_id?: string | string[] | undefined
                      attempts?: number | Operators | undefined
                      response_status?: number | Operators | number[] | undefined
                      successful_at?: string | Operators | undefined
                      created_at?: string | Operators | undefined
                      error_code?: AttemptErrorCodes | AttemptErrorCodes[] | undefined
                      cli_id?:
                        | string
                        | { any?: boolean | undefined; all?: boolean | undefined }
                        | string[]
                        | undefined
                      last_attempt_at?: string | Operators | undefined
                      search_term?: string | undefined
                      headers?: string | {} | undefined
                      body?: string | {} | undefined
                      parsed_query?: string | {} | undefined
                      path?: string | undefined
                      cli_user_id?: string | string[] | undefined
                      issue_id?: string | string[] | undefined
                      event_data_id?: string | string[] | undefined
                      bulk_retry_id?: string | string[] | undefined
                    }
                  | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/bulk/events/retry/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: BatchOperation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/bulk/events/retry/:id/cancel': {
      $post:
        | {
            input: { param: { id: string } }
            output: BatchOperation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/events': {
      $get:
        | {
            input: {
              query: {
                id?: string | string[] | undefined
                status?: EventStatus | EventStatus[] | undefined
                webhook_id?: string | string[] | undefined
                destination_id?: string | string[] | undefined
                source_id?: string | string[] | undefined
                attempts?: number | Operators | undefined
                response_status?: number | Operators | number[] | undefined
                successful_at?: string | Operators | undefined
                created_at?: string | Operators | undefined
                error_code?: AttemptErrorCodes | AttemptErrorCodes[] | undefined
                cli_id?:
                  | string
                  | { any?: boolean | undefined; all?: boolean | undefined }
                  | string[]
                  | undefined
                last_attempt_at?: string | Operators | undefined
                search_term?: string | undefined
                headers?: string | {} | undefined
                body?: string | {} | undefined
                parsed_query?: string | {} | undefined
                path?: string | undefined
                cli_user_id?: string | string[] | undefined
                issue_id?: string | string[] | undefined
                event_data_id?: string | string[] | undefined
                bulk_retry_id?: string | string[] | undefined
                include?: 'data' | undefined
                order_by?: 'last_attempt_at' | 'created_at' | undefined
                dir?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                next?: string | undefined
                prev?: string | undefined
              }
            }
            output: EventPaginatedResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id?: string | string[] | undefined
                status?: EventStatus | EventStatus[] | undefined
                webhook_id?: string | string[] | undefined
                destination_id?: string | string[] | undefined
                source_id?: string | string[] | undefined
                attempts?: number | Operators | undefined
                response_status?: number | Operators | number[] | undefined
                successful_at?: string | Operators | undefined
                created_at?: string | Operators | undefined
                error_code?: AttemptErrorCodes | AttemptErrorCodes[] | undefined
                cli_id?:
                  | string
                  | { any?: boolean | undefined; all?: boolean | undefined }
                  | string[]
                  | undefined
                last_attempt_at?: string | Operators | undefined
                search_term?: string | undefined
                headers?: string | {} | undefined
                body?: string | {} | undefined
                parsed_query?: string | {} | undefined
                path?: string | undefined
                cli_user_id?: string | string[] | undefined
                issue_id?: string | string[] | undefined
                event_data_id?: string | string[] | undefined
                bulk_retry_id?: string | string[] | undefined
                include?: 'data' | undefined
                order_by?: 'last_attempt_at' | 'created_at' | undefined
                dir?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                next?: string | undefined
                prev?: string | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                id?: string | string[] | undefined
                status?: EventStatus | EventStatus[] | undefined
                webhook_id?: string | string[] | undefined
                destination_id?: string | string[] | undefined
                source_id?: string | string[] | undefined
                attempts?: number | Operators | undefined
                response_status?: number | Operators | number[] | undefined
                successful_at?: string | Operators | undefined
                created_at?: string | Operators | undefined
                error_code?: AttemptErrorCodes | AttemptErrorCodes[] | undefined
                cli_id?:
                  | string
                  | { any?: boolean | undefined; all?: boolean | undefined }
                  | string[]
                  | undefined
                last_attempt_at?: string | Operators | undefined
                search_term?: string | undefined
                headers?: string | {} | undefined
                body?: string | {} | undefined
                parsed_query?: string | {} | undefined
                path?: string | undefined
                cli_user_id?: string | string[] | undefined
                issue_id?: string | string[] | undefined
                event_data_id?: string | string[] | undefined
                bulk_retry_id?: string | string[] | undefined
                include?: 'data' | undefined
                order_by?: 'last_attempt_at' | 'created_at' | undefined
                dir?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                next?: string | undefined
                prev?: string | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/events/:id': {
      $get:
        | { input: { param: { id: string } }; output: Event; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: string } }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/events/:id/raw_body': {
      $get:
        | { input: { param: { id: string } }; output: RawBody; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: string } }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/events/:id/retry': {
      $post:
        | {
            input: { param: { id: string } }
            output: RetriedEvent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/events/:id/mute': {
      $put:
        | { input: { param: { id: string } }; output: Event; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: string } }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/bulk/ignored-events/retry': {
      $get:
        | {
            input: {
              query: {
                cancelled_at?: (string | null) | Operators | undefined
                completed_at?: (string | null) | Operators | undefined
                created_at?: (string | null) | Operators | undefined
                id?: string | string[] | undefined
                query?:
                  | {
                      cause?: string | string[] | undefined
                      webhook_id?: string | string[] | undefined
                      transformation_id?: string | undefined
                    }
                  | undefined
                query_partial_match?: boolean | undefined
                in_progress?: boolean | undefined
                order_by?: 'created_at' | 'created_at'[] | undefined
                dir?: 'asc' | 'desc' | ('asc' | 'desc')[] | undefined
                limit?: number | undefined
                next?: string | undefined
                prev?: string | undefined
              }
            }
            output: BatchOperationPaginatedResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cancelled_at?: (string | null) | Operators | undefined
                completed_at?: (string | null) | Operators | undefined
                created_at?: (string | null) | Operators | undefined
                id?: string | string[] | undefined
                query?:
                  | {
                      cause?: string | string[] | undefined
                      webhook_id?: string | string[] | undefined
                      transformation_id?: string | undefined
                    }
                  | undefined
                query_partial_match?: boolean | undefined
                in_progress?: boolean | undefined
                order_by?: 'created_at' | 'created_at'[] | undefined
                dir?: 'asc' | 'desc' | ('asc' | 'desc')[] | undefined
                limit?: number | undefined
                next?: string | undefined
                prev?: string | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                cancelled_at?: (string | null) | Operators | undefined
                completed_at?: (string | null) | Operators | undefined
                created_at?: (string | null) | Operators | undefined
                id?: string | string[] | undefined
                query?:
                  | {
                      cause?: string | string[] | undefined
                      webhook_id?: string | string[] | undefined
                      transformation_id?: string | undefined
                    }
                  | undefined
                query_partial_match?: boolean | undefined
                in_progress?: boolean | undefined
                order_by?: 'created_at' | 'created_at'[] | undefined
                dir?: 'asc' | 'desc' | ('asc' | 'desc')[] | undefined
                limit?: number | undefined
                next?: string | undefined
                prev?: string | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: {
              json: {
                query?:
                  | {
                      cause?: string | string[] | undefined
                      webhook_id?: string | string[] | undefined
                      transformation_id?: string | undefined
                    }
                  | undefined
              }
            }
            output: BatchOperation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                query?:
                  | {
                      cause?: string | string[] | undefined
                      webhook_id?: string | string[] | undefined
                      transformation_id?: string | undefined
                    }
                  | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                query?:
                  | {
                      cause?: string | string[] | undefined
                      webhook_id?: string | string[] | undefined
                      transformation_id?: string | undefined
                    }
                  | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/bulk/ignored-events/retry/plan': {
      $get:
        | {
            input: {
              query: {
                query?:
                  | {
                      cause?: string | string[] | undefined
                      webhook_id?: string | string[] | undefined
                      transformation_id?: string | undefined
                    }
                  | undefined
              }
            }
            output: {
              estimated_batch?: (number | null) | undefined
              estimated_count?: (number | null) | undefined
              progress?: (number | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query?:
                  | {
                      cause?: string | string[] | undefined
                      webhook_id?: string | string[] | undefined
                      transformation_id?: string | undefined
                    }
                  | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                query?:
                  | {
                      cause?: string | string[] | undefined
                      webhook_id?: string | string[] | undefined
                      transformation_id?: string | undefined
                    }
                  | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/bulk/ignored-events/retry/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: BatchOperation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/bulk/ignored-events/retry/:id/cancel': {
      $post:
        | {
            input: { param: { id: string } }
            output: BatchOperation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/integrations': {
      $get:
        | {
            input: {
              query: { label?: string | undefined; provider?: IntegrationProvider | undefined }
            }
            output: IntegrationPaginatedResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { label?: string | undefined; provider?: IntegrationProvider | undefined }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { label?: string | undefined; provider?: IntegrationProvider | undefined }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: {
              json: {
                label?: string | undefined
                configs?:
                  | HMACIntegrationConfigs
                  | APIKeyIntegrationConfigs
                  | HandledAPIKeyIntegrationConfigs
                  | HandledHMACConfigs
                  | BasicAuthIntegrationConfigs
                  | ShopifyIntegrationConfigs
                  | VercelLogDrainsIntegrationConfigs
                  | {}
                  | undefined
                provider?: IntegrationProvider | undefined
                features?: IntegrationFeature[] | undefined
              }
            }
            output: Integration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                label?: string | undefined
                configs?:
                  | HMACIntegrationConfigs
                  | APIKeyIntegrationConfigs
                  | HandledAPIKeyIntegrationConfigs
                  | HandledHMACConfigs
                  | BasicAuthIntegrationConfigs
                  | ShopifyIntegrationConfigs
                  | VercelLogDrainsIntegrationConfigs
                  | {}
                  | undefined
                provider?: IntegrationProvider | undefined
                features?: IntegrationFeature[] | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                label?: string | undefined
                configs?:
                  | HMACIntegrationConfigs
                  | APIKeyIntegrationConfigs
                  | HandledAPIKeyIntegrationConfigs
                  | HandledHMACConfigs
                  | BasicAuthIntegrationConfigs
                  | ShopifyIntegrationConfigs
                  | VercelLogDrainsIntegrationConfigs
                  | {}
                  | undefined
                provider?: IntegrationProvider | undefined
                features?: IntegrationFeature[] | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/integrations/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: Integration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & {
              json: {
                label?: string | undefined
                configs?:
                  | HMACIntegrationConfigs
                  | APIKeyIntegrationConfigs
                  | HandledAPIKeyIntegrationConfigs
                  | HandledHMACConfigs
                  | BasicAuthIntegrationConfigs
                  | ShopifyIntegrationConfigs
                  | VercelLogDrainsIntegrationConfigs
                  | {}
                  | undefined
                provider?: IntegrationProvider | undefined
                features?: IntegrationFeature[] | undefined
              }
            }
            output: Integration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: {
                label?: string | undefined
                configs?:
                  | HMACIntegrationConfigs
                  | APIKeyIntegrationConfigs
                  | HandledAPIKeyIntegrationConfigs
                  | HandledHMACConfigs
                  | BasicAuthIntegrationConfigs
                  | ShopifyIntegrationConfigs
                  | VercelLogDrainsIntegrationConfigs
                  | {}
                  | undefined
                provider?: IntegrationProvider | undefined
                features?: IntegrationFeature[] | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: {
                label?: string | undefined
                configs?:
                  | HMACIntegrationConfigs
                  | APIKeyIntegrationConfigs
                  | HandledAPIKeyIntegrationConfigs
                  | HandledHMACConfigs
                  | BasicAuthIntegrationConfigs
                  | ShopifyIntegrationConfigs
                  | VercelLogDrainsIntegrationConfigs
                  | {}
                  | undefined
                provider?: IntegrationProvider | undefined
                features?: IntegrationFeature[] | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: {
                label?: string | undefined
                configs?:
                  | HMACIntegrationConfigs
                  | APIKeyIntegrationConfigs
                  | HandledAPIKeyIntegrationConfigs
                  | HandledHMACConfigs
                  | BasicAuthIntegrationConfigs
                  | ShopifyIntegrationConfigs
                  | VercelLogDrainsIntegrationConfigs
                  | {}
                  | undefined
                provider?: IntegrationProvider | undefined
                features?: IntegrationFeature[] | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { id: string } }
            output: DeletedIntegration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/integrations/:id/attach/:source_id': {
      $put:
        | {
            input: { param: { id: string; source_id: string } }
            output: AttachedIntegrationToSource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; source_id: string } }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string; source_id: string } }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/integrations/:id/detach/:source_id': {
      $put:
        | {
            input: { param: { id: string; source_id: string } }
            output: DetachedIntegrationFromSource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; source_id: string } }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string; source_id: string } }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/issues': {
      $get:
        | {
            input: {
              query: {
                id?: string | string[] | undefined
                issue_trigger_id?: string | string[] | undefined
                type?:
                  | 'delivery'
                  | 'transformation'
                  | 'backpressure'
                  | ('delivery' | 'transformation' | 'backpressure')[]
                  | undefined
                status?:
                  | 'OPENED'
                  | 'IGNORED'
                  | 'ACKNOWLEDGED'
                  | 'RESOLVED'
                  | ('OPENED' | 'IGNORED' | 'ACKNOWLEDGED' | 'RESOLVED')[]
                  | undefined
                merged_with?: string | string[] | undefined
                aggregation_keys?:
                  | {
                      webhook_id?: string | string[] | undefined
                      response_status?: number | number[] | undefined
                      error_code?: AttemptErrorCodes | AttemptErrorCodes[] | undefined
                    }
                  | undefined
                created_at?: (string | null) | Operators | undefined
                first_seen_at?: (string | null) | Operators | undefined
                last_seen_at?: (string | null) | Operators | undefined
                dismissed_at?: (string | null) | Operators | undefined
                order_by?:
                  | 'created_at'
                  | 'first_seen_at'
                  | 'last_seen_at'
                  | 'opened_at'
                  | 'status'
                  | ('created_at' | 'first_seen_at' | 'last_seen_at' | 'opened_at' | 'status')[]
                  | undefined
                dir?: 'asc' | 'desc' | ('asc' | 'desc')[] | undefined
                limit?: number | undefined
                next?: string | undefined
                prev?: string | undefined
              }
            }
            output: IssueWithDataPaginatedResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id?: string | string[] | undefined
                issue_trigger_id?: string | string[] | undefined
                type?:
                  | 'delivery'
                  | 'transformation'
                  | 'backpressure'
                  | ('delivery' | 'transformation' | 'backpressure')[]
                  | undefined
                status?:
                  | 'OPENED'
                  | 'IGNORED'
                  | 'ACKNOWLEDGED'
                  | 'RESOLVED'
                  | ('OPENED' | 'IGNORED' | 'ACKNOWLEDGED' | 'RESOLVED')[]
                  | undefined
                merged_with?: string | string[] | undefined
                aggregation_keys?:
                  | {
                      webhook_id?: string | string[] | undefined
                      response_status?: number | number[] | undefined
                      error_code?: AttemptErrorCodes | AttemptErrorCodes[] | undefined
                    }
                  | undefined
                created_at?: (string | null) | Operators | undefined
                first_seen_at?: (string | null) | Operators | undefined
                last_seen_at?: (string | null) | Operators | undefined
                dismissed_at?: (string | null) | Operators | undefined
                order_by?:
                  | 'created_at'
                  | 'first_seen_at'
                  | 'last_seen_at'
                  | 'opened_at'
                  | 'status'
                  | ('created_at' | 'first_seen_at' | 'last_seen_at' | 'opened_at' | 'status')[]
                  | undefined
                dir?: 'asc' | 'desc' | ('asc' | 'desc')[] | undefined
                limit?: number | undefined
                next?: string | undefined
                prev?: string | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                id?: string | string[] | undefined
                issue_trigger_id?: string | string[] | undefined
                type?:
                  | 'delivery'
                  | 'transformation'
                  | 'backpressure'
                  | ('delivery' | 'transformation' | 'backpressure')[]
                  | undefined
                status?:
                  | 'OPENED'
                  | 'IGNORED'
                  | 'ACKNOWLEDGED'
                  | 'RESOLVED'
                  | ('OPENED' | 'IGNORED' | 'ACKNOWLEDGED' | 'RESOLVED')[]
                  | undefined
                merged_with?: string | string[] | undefined
                aggregation_keys?:
                  | {
                      webhook_id?: string | string[] | undefined
                      response_status?: number | number[] | undefined
                      error_code?: AttemptErrorCodes | AttemptErrorCodes[] | undefined
                    }
                  | undefined
                created_at?: (string | null) | Operators | undefined
                first_seen_at?: (string | null) | Operators | undefined
                last_seen_at?: (string | null) | Operators | undefined
                dismissed_at?: (string | null) | Operators | undefined
                order_by?:
                  | 'created_at'
                  | 'first_seen_at'
                  | 'last_seen_at'
                  | 'opened_at'
                  | 'status'
                  | ('created_at' | 'first_seen_at' | 'last_seen_at' | 'opened_at' | 'status')[]
                  | undefined
                dir?: 'asc' | 'desc' | ('asc' | 'desc')[] | undefined
                limit?: number | undefined
                next?: string | undefined
                prev?: string | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/issues/count': {
      $get:
        | {
            input: {
              query: {
                id?: string | string[] | undefined
                issue_trigger_id?: string | string[] | undefined
                type?:
                  | 'delivery'
                  | 'transformation'
                  | 'backpressure'
                  | ('delivery' | 'transformation' | 'backpressure')[]
                  | undefined
                status?:
                  | 'OPENED'
                  | 'IGNORED'
                  | 'ACKNOWLEDGED'
                  | 'RESOLVED'
                  | ('OPENED' | 'IGNORED' | 'ACKNOWLEDGED' | 'RESOLVED')[]
                  | undefined
                merged_with?: string | string[] | undefined
                aggregation_keys?:
                  | {
                      webhook_id?: string | string[] | undefined
                      response_status?: number | number[] | undefined
                      error_code?: AttemptErrorCodes | AttemptErrorCodes[] | undefined
                    }
                  | undefined
                created_at?: (string | null) | Operators | undefined
                first_seen_at?: (string | null) | Operators | undefined
                last_seen_at?: (string | null) | Operators | undefined
                dismissed_at?: (string | null) | Operators | undefined
                order_by?:
                  | 'created_at'
                  | 'first_seen_at'
                  | 'last_seen_at'
                  | 'opened_at'
                  | 'status'
                  | ('created_at' | 'first_seen_at' | 'last_seen_at' | 'opened_at' | 'status')[]
                  | undefined
                dir?: 'asc' | 'desc' | ('asc' | 'desc')[] | undefined
                limit?: number | undefined
                next?: string | undefined
                prev?: string | undefined
              }
            }
            output: IssueCount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id?: string | string[] | undefined
                issue_trigger_id?: string | string[] | undefined
                type?:
                  | 'delivery'
                  | 'transformation'
                  | 'backpressure'
                  | ('delivery' | 'transformation' | 'backpressure')[]
                  | undefined
                status?:
                  | 'OPENED'
                  | 'IGNORED'
                  | 'ACKNOWLEDGED'
                  | 'RESOLVED'
                  | ('OPENED' | 'IGNORED' | 'ACKNOWLEDGED' | 'RESOLVED')[]
                  | undefined
                merged_with?: string | string[] | undefined
                aggregation_keys?:
                  | {
                      webhook_id?: string | string[] | undefined
                      response_status?: number | number[] | undefined
                      error_code?: AttemptErrorCodes | AttemptErrorCodes[] | undefined
                    }
                  | undefined
                created_at?: (string | null) | Operators | undefined
                first_seen_at?: (string | null) | Operators | undefined
                last_seen_at?: (string | null) | Operators | undefined
                dismissed_at?: (string | null) | Operators | undefined
                order_by?:
                  | 'created_at'
                  | 'first_seen_at'
                  | 'last_seen_at'
                  | 'opened_at'
                  | 'status'
                  | ('created_at' | 'first_seen_at' | 'last_seen_at' | 'opened_at' | 'status')[]
                  | undefined
                dir?: 'asc' | 'desc' | ('asc' | 'desc')[] | undefined
                limit?: number | undefined
                next?: string | undefined
                prev?: string | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/issues/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: IssueWithData
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & {
              json: { status: 'OPENED' | 'IGNORED' | 'ACKNOWLEDGED' | 'RESOLVED' }
            }
            output: Issue
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: { status: 'OPENED' | 'IGNORED' | 'ACKNOWLEDGED' | 'RESOLVED' }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: { status: 'OPENED' | 'IGNORED' | 'ACKNOWLEDGED' | 'RESOLVED' }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | { input: { param: { id: string } }; output: Issue; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: string } }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/requests': {
      $get:
        | {
            input: {
              query: {
                id?: string | string[] | undefined
                status?: 'accepted' | 'rejected' | undefined
                rejection_cause?: RequestRejectionCause | RequestRejectionCause[] | undefined
                source_id?: string | string[] | undefined
                verified?: boolean | undefined
                search_term?: string | undefined
                headers?: string | {} | undefined
                body?: string | {} | undefined
                parsed_query?: string | {} | undefined
                path?: string | undefined
                ignored_count?: number | Operators | number[] | undefined
                events_count?: number | Operators | number[] | undefined
                ingested_at?: string | Operators | undefined
                bulk_retry_id?: string | string[] | undefined
                include?: 'data' | undefined
                order_by?: 'ingested_at' | 'created_at' | undefined
                dir?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                next?: string | undefined
                prev?: string | undefined
              }
            }
            output: RequestPaginatedResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id?: string | string[] | undefined
                status?: 'accepted' | 'rejected' | undefined
                rejection_cause?: RequestRejectionCause | RequestRejectionCause[] | undefined
                source_id?: string | string[] | undefined
                verified?: boolean | undefined
                search_term?: string | undefined
                headers?: string | {} | undefined
                body?: string | {} | undefined
                parsed_query?: string | {} | undefined
                path?: string | undefined
                ignored_count?: number | Operators | number[] | undefined
                events_count?: number | Operators | number[] | undefined
                ingested_at?: string | Operators | undefined
                bulk_retry_id?: string | string[] | undefined
                include?: 'data' | undefined
                order_by?: 'ingested_at' | 'created_at' | undefined
                dir?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                next?: string | undefined
                prev?: string | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                id?: string | string[] | undefined
                status?: 'accepted' | 'rejected' | undefined
                rejection_cause?: RequestRejectionCause | RequestRejectionCause[] | undefined
                source_id?: string | string[] | undefined
                verified?: boolean | undefined
                search_term?: string | undefined
                headers?: string | {} | undefined
                body?: string | {} | undefined
                parsed_query?: string | {} | undefined
                path?: string | undefined
                ignored_count?: number | Operators | number[] | undefined
                events_count?: number | Operators | number[] | undefined
                ingested_at?: string | Operators | undefined
                bulk_retry_id?: string | string[] | undefined
                include?: 'data' | undefined
                order_by?: 'ingested_at' | 'created_at' | undefined
                dir?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                next?: string | undefined
                prev?: string | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/requests/:id': {
      $get:
        | { input: { param: { id: string } }; output: Request; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: string } }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/requests/:id/raw_body': {
      $get:
        | { input: { param: { id: string } }; output: RawBody; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: string } }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/requests/:id/retry': {
      $post:
        | {
            input: { param: { id: string } } & { json: { webhook_ids: string[] } }
            output: RetryRequest
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: { webhook_ids: string[] } }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: { webhook_ids: string[] } }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: { webhook_ids: string[] } }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/requests/:id/events': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                id?: string | string[] | undefined
                status?: EventStatus | EventStatus[] | undefined
                webhook_id?: string | string[] | undefined
                destination_id?: string | string[] | undefined
                source_id?: string | string[] | undefined
                attempts?: number | Operators | undefined
                response_status?: number | Operators | number[] | undefined
                successful_at?: string | Operators | undefined
                created_at?: string | Operators | undefined
                error_code?: AttemptErrorCodes | AttemptErrorCodes[] | undefined
                cli_id?:
                  | string
                  | { any?: boolean | undefined; all?: boolean | undefined }
                  | string[]
                  | undefined
                last_attempt_at?: string | Operators | undefined
                search_term?: string | undefined
                headers?: string | {} | undefined
                body?: string | {} | undefined
                parsed_query?: string | {} | undefined
                path?: string | undefined
                cli_user_id?: string | string[] | undefined
                issue_id?: string | string[] | undefined
                event_data_id?: string | string[] | undefined
                bulk_retry_id?: string | string[] | undefined
                include?: 'data' | undefined
                order_by?: 'last_attempt_at' | 'created_at' | undefined
                dir?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                next?: string | undefined
                prev?: string | undefined
              }
            }
            output: EventPaginatedResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                id?: string | string[] | undefined
                status?: EventStatus | EventStatus[] | undefined
                webhook_id?: string | string[] | undefined
                destination_id?: string | string[] | undefined
                source_id?: string | string[] | undefined
                attempts?: number | Operators | undefined
                response_status?: number | Operators | number[] | undefined
                successful_at?: string | Operators | undefined
                created_at?: string | Operators | undefined
                error_code?: AttemptErrorCodes | AttemptErrorCodes[] | undefined
                cli_id?:
                  | string
                  | { any?: boolean | undefined; all?: boolean | undefined }
                  | string[]
                  | undefined
                last_attempt_at?: string | Operators | undefined
                search_term?: string | undefined
                headers?: string | {} | undefined
                body?: string | {} | undefined
                parsed_query?: string | {} | undefined
                path?: string | undefined
                cli_user_id?: string | string[] | undefined
                issue_id?: string | string[] | undefined
                event_data_id?: string | string[] | undefined
                bulk_retry_id?: string | string[] | undefined
                include?: 'data' | undefined
                order_by?: 'last_attempt_at' | 'created_at' | undefined
                dir?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                next?: string | undefined
                prev?: string | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                id?: string | string[] | undefined
                status?: EventStatus | EventStatus[] | undefined
                webhook_id?: string | string[] | undefined
                destination_id?: string | string[] | undefined
                source_id?: string | string[] | undefined
                attempts?: number | Operators | undefined
                response_status?: number | Operators | number[] | undefined
                successful_at?: string | Operators | undefined
                created_at?: string | Operators | undefined
                error_code?: AttemptErrorCodes | AttemptErrorCodes[] | undefined
                cli_id?:
                  | string
                  | { any?: boolean | undefined; all?: boolean | undefined }
                  | string[]
                  | undefined
                last_attempt_at?: string | Operators | undefined
                search_term?: string | undefined
                headers?: string | {} | undefined
                body?: string | {} | undefined
                parsed_query?: string | {} | undefined
                path?: string | undefined
                cli_user_id?: string | string[] | undefined
                issue_id?: string | string[] | undefined
                event_data_id?: string | string[] | undefined
                bulk_retry_id?: string | string[] | undefined
                include?: 'data' | undefined
                order_by?: 'last_attempt_at' | 'created_at' | undefined
                dir?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                next?: string | undefined
                prev?: string | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: {
                id?: string | string[] | undefined
                status?: EventStatus | EventStatus[] | undefined
                webhook_id?: string | string[] | undefined
                destination_id?: string | string[] | undefined
                source_id?: string | string[] | undefined
                attempts?: number | Operators | undefined
                response_status?: number | Operators | number[] | undefined
                successful_at?: string | Operators | undefined
                created_at?: string | Operators | undefined
                error_code?: AttemptErrorCodes | AttemptErrorCodes[] | undefined
                cli_id?:
                  | string
                  | { any?: boolean | undefined; all?: boolean | undefined }
                  | string[]
                  | undefined
                last_attempt_at?: string | Operators | undefined
                search_term?: string | undefined
                headers?: string | {} | undefined
                body?: string | {} | undefined
                parsed_query?: string | {} | undefined
                path?: string | undefined
                cli_user_id?: string | string[] | undefined
                issue_id?: string | string[] | undefined
                event_data_id?: string | string[] | undefined
                bulk_retry_id?: string | string[] | undefined
                include?: 'data' | undefined
                order_by?: 'last_attempt_at' | 'created_at' | undefined
                dir?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                next?: string | undefined
                prev?: string | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/requests/:id/ignored_events': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                id?: string | string[] | undefined
                order_by?: 'created_at' | 'created_at'[] | undefined
                dir?: 'asc' | 'desc' | ('asc' | 'desc')[] | undefined
                limit?: number | undefined
                next?: string | undefined
                prev?: string | undefined
              }
            }
            output: IgnoredEventPaginatedResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                id?: string | string[] | undefined
                order_by?: 'created_at' | 'created_at'[] | undefined
                dir?: 'asc' | 'desc' | ('asc' | 'desc')[] | undefined
                limit?: number | undefined
                next?: string | undefined
                prev?: string | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                id?: string | string[] | undefined
                order_by?: 'created_at' | 'created_at'[] | undefined
                dir?: 'asc' | 'desc' | ('asc' | 'desc')[] | undefined
                limit?: number | undefined
                next?: string | undefined
                prev?: string | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: {
                id?: string | string[] | undefined
                order_by?: 'created_at' | 'created_at'[] | undefined
                dir?: 'asc' | 'desc' | ('asc' | 'desc')[] | undefined
                limit?: number | undefined
                next?: string | undefined
                prev?: string | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/bulk/requests/retry': {
      $get:
        | {
            input: {
              query: {
                cancelled_at?: (string | null) | Operators | undefined
                completed_at?: (string | null) | Operators | undefined
                created_at?: (string | null) | Operators | undefined
                id?: string | string[] | undefined
                in_progress?: boolean | undefined
                query?:
                  | {
                      id?: string | string[] | undefined
                      status?: 'accepted' | 'rejected' | undefined
                      rejection_cause?: RequestRejectionCause | RequestRejectionCause[] | undefined
                      source_id?: string | string[] | undefined
                      verified?: boolean | undefined
                      search_term?: string | undefined
                      headers?: string | {} | undefined
                      body?: string | {} | undefined
                      parsed_query?: string | {} | undefined
                      path?: string | undefined
                      ignored_count?: number | Operators | number[] | undefined
                      events_count?: number | Operators | number[] | undefined
                      ingested_at?: string | Operators | undefined
                      bulk_retry_id?: string | string[] | undefined
                      include?: 'data' | undefined
                      order_by?: 'ingested_at' | 'created_at' | undefined
                      dir?: 'asc' | 'desc' | undefined
                      limit?: number | undefined
                      next?: string | undefined
                      prev?: string | undefined
                    }
                  | undefined
                query_partial_match?: boolean | undefined
                order_by?: 'created_at' | 'created_at'[] | undefined
                dir?: 'asc' | 'desc' | ('asc' | 'desc')[] | undefined
                limit?: number | undefined
                next?: string | undefined
                prev?: string | undefined
              }
            }
            output: BatchOperationPaginatedResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cancelled_at?: (string | null) | Operators | undefined
                completed_at?: (string | null) | Operators | undefined
                created_at?: (string | null) | Operators | undefined
                id?: string | string[] | undefined
                in_progress?: boolean | undefined
                query?:
                  | {
                      id?: string | string[] | undefined
                      status?: 'accepted' | 'rejected' | undefined
                      rejection_cause?: RequestRejectionCause | RequestRejectionCause[] | undefined
                      source_id?: string | string[] | undefined
                      verified?: boolean | undefined
                      search_term?: string | undefined
                      headers?: string | {} | undefined
                      body?: string | {} | undefined
                      parsed_query?: string | {} | undefined
                      path?: string | undefined
                      ignored_count?: number | Operators | number[] | undefined
                      events_count?: number | Operators | number[] | undefined
                      ingested_at?: string | Operators | undefined
                      bulk_retry_id?: string | string[] | undefined
                      include?: 'data' | undefined
                      order_by?: 'ingested_at' | 'created_at' | undefined
                      dir?: 'asc' | 'desc' | undefined
                      limit?: number | undefined
                      next?: string | undefined
                      prev?: string | undefined
                    }
                  | undefined
                query_partial_match?: boolean | undefined
                order_by?: 'created_at' | 'created_at'[] | undefined
                dir?: 'asc' | 'desc' | ('asc' | 'desc')[] | undefined
                limit?: number | undefined
                next?: string | undefined
                prev?: string | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                cancelled_at?: (string | null) | Operators | undefined
                completed_at?: (string | null) | Operators | undefined
                created_at?: (string | null) | Operators | undefined
                id?: string | string[] | undefined
                in_progress?: boolean | undefined
                query?:
                  | {
                      id?: string | string[] | undefined
                      status?: 'accepted' | 'rejected' | undefined
                      rejection_cause?: RequestRejectionCause | RequestRejectionCause[] | undefined
                      source_id?: string | string[] | undefined
                      verified?: boolean | undefined
                      search_term?: string | undefined
                      headers?: string | {} | undefined
                      body?: string | {} | undefined
                      parsed_query?: string | {} | undefined
                      path?: string | undefined
                      ignored_count?: number | Operators | number[] | undefined
                      events_count?: number | Operators | number[] | undefined
                      ingested_at?: string | Operators | undefined
                      bulk_retry_id?: string | string[] | undefined
                      include?: 'data' | undefined
                      order_by?: 'ingested_at' | 'created_at' | undefined
                      dir?: 'asc' | 'desc' | undefined
                      limit?: number | undefined
                      next?: string | undefined
                      prev?: string | undefined
                    }
                  | undefined
                query_partial_match?: boolean | undefined
                order_by?: 'created_at' | 'created_at'[] | undefined
                dir?: 'asc' | 'desc' | ('asc' | 'desc')[] | undefined
                limit?: number | undefined
                next?: string | undefined
                prev?: string | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: {
              json: {
                query?:
                  | {
                      id?: string | string[] | undefined
                      status?: 'accepted' | 'rejected' | undefined
                      rejection_cause?: RequestRejectionCause | RequestRejectionCause[] | undefined
                      source_id?: string | string[] | undefined
                      verified?: boolean | undefined
                      search_term?: string | undefined
                      headers?: string | {} | undefined
                      body?: string | {} | undefined
                      parsed_query?: string | {} | undefined
                      path?: string | undefined
                      ignored_count?: number | Operators | number[] | undefined
                      events_count?: number | Operators | number[] | undefined
                      ingested_at?: string | Operators | undefined
                      bulk_retry_id?: string | string[] | undefined
                    }
                  | undefined
              }
            }
            output: BatchOperation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                query?:
                  | {
                      id?: string | string[] | undefined
                      status?: 'accepted' | 'rejected' | undefined
                      rejection_cause?: RequestRejectionCause | RequestRejectionCause[] | undefined
                      source_id?: string | string[] | undefined
                      verified?: boolean | undefined
                      search_term?: string | undefined
                      headers?: string | {} | undefined
                      body?: string | {} | undefined
                      parsed_query?: string | {} | undefined
                      path?: string | undefined
                      ignored_count?: number | Operators | number[] | undefined
                      events_count?: number | Operators | number[] | undefined
                      ingested_at?: string | Operators | undefined
                      bulk_retry_id?: string | string[] | undefined
                    }
                  | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                query?:
                  | {
                      id?: string | string[] | undefined
                      status?: 'accepted' | 'rejected' | undefined
                      rejection_cause?: RequestRejectionCause | RequestRejectionCause[] | undefined
                      source_id?: string | string[] | undefined
                      verified?: boolean | undefined
                      search_term?: string | undefined
                      headers?: string | {} | undefined
                      body?: string | {} | undefined
                      parsed_query?: string | {} | undefined
                      path?: string | undefined
                      ignored_count?: number | Operators | number[] | undefined
                      events_count?: number | Operators | number[] | undefined
                      ingested_at?: string | Operators | undefined
                      bulk_retry_id?: string | string[] | undefined
                    }
                  | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/bulk/requests/retry/plan': {
      $get:
        | {
            input: {
              query: {
                query?:
                  | {
                      id?: string | string[] | undefined
                      status?: 'accepted' | 'rejected' | undefined
                      rejection_cause?: RequestRejectionCause | RequestRejectionCause[] | undefined
                      source_id?: string | string[] | undefined
                      verified?: boolean | undefined
                      search_term?: string | undefined
                      headers?: string | {} | undefined
                      body?: string | {} | undefined
                      parsed_query?: string | {} | undefined
                      path?: string | undefined
                      ignored_count?: number | Operators | number[] | undefined
                      events_count?: number | Operators | number[] | undefined
                      ingested_at?: string | Operators | undefined
                      bulk_retry_id?: string | string[] | undefined
                    }
                  | undefined
              }
            }
            output: {
              estimated_batch?: (number | null) | undefined
              estimated_count?: (number | null) | undefined
              progress?: (number | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                query?:
                  | {
                      id?: string | string[] | undefined
                      status?: 'accepted' | 'rejected' | undefined
                      rejection_cause?: RequestRejectionCause | RequestRejectionCause[] | undefined
                      source_id?: string | string[] | undefined
                      verified?: boolean | undefined
                      search_term?: string | undefined
                      headers?: string | {} | undefined
                      body?: string | {} | undefined
                      parsed_query?: string | {} | undefined
                      path?: string | undefined
                      ignored_count?: number | Operators | number[] | undefined
                      events_count?: number | Operators | number[] | undefined
                      ingested_at?: string | Operators | undefined
                      bulk_retry_id?: string | string[] | undefined
                    }
                  | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                query?:
                  | {
                      id?: string | string[] | undefined
                      status?: 'accepted' | 'rejected' | undefined
                      rejection_cause?: RequestRejectionCause | RequestRejectionCause[] | undefined
                      source_id?: string | string[] | undefined
                      verified?: boolean | undefined
                      search_term?: string | undefined
                      headers?: string | {} | undefined
                      body?: string | {} | undefined
                      parsed_query?: string | {} | undefined
                      path?: string | undefined
                      ignored_count?: number | Operators | number[] | undefined
                      events_count?: number | Operators | number[] | undefined
                      ingested_at?: string | Operators | undefined
                      bulk_retry_id?: string | string[] | undefined
                    }
                  | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/bulk/requests/retry/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: BatchOperation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/bulk/requests/retry/:id/cancel': {
      $post:
        | {
            input: { param: { id: string } }
            output: BatchOperation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/sources': {
      $get:
        | {
            input: {
              query: {
                id?: string | string[] | undefined
                name?: string | Operators | string[] | undefined
                disabled?: boolean | undefined
                disabled_at?: (string | null) | Operators | undefined
                order_by?: 'created_at' | 'created_at'[] | undefined
                dir?: 'asc' | 'desc' | ('asc' | 'desc')[] | undefined
                limit?: number | undefined
                next?: string | undefined
                prev?: string | undefined
              }
            }
            output: SourcePaginatedResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id?: string | string[] | undefined
                name?: string | Operators | string[] | undefined
                disabled?: boolean | undefined
                disabled_at?: (string | null) | Operators | undefined
                order_by?: 'created_at' | 'created_at'[] | undefined
                dir?: 'asc' | 'desc' | ('asc' | 'desc')[] | undefined
                limit?: number | undefined
                next?: string | undefined
                prev?: string | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                id?: string | string[] | undefined
                name?: string | Operators | string[] | undefined
                disabled?: boolean | undefined
                disabled_at?: (string | null) | Operators | undefined
                order_by?: 'created_at' | 'created_at'[] | undefined
                dir?: 'asc' | 'desc' | ('asc' | 'desc')[] | undefined
                limit?: number | undefined
                next?: string | undefined
                prev?: string | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: {
              json: {
                name: string
                description?: (string | null) | undefined
                allowed_http_methods?: SourceAllowedHTTPMethod | undefined
                custom_response?: SourceCustomResponse | undefined
                verification?: VerificationConfig | undefined
              }
            }
            output: Source
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                name: string
                description?: (string | null) | undefined
                allowed_http_methods?: SourceAllowedHTTPMethod | undefined
                custom_response?: SourceCustomResponse | undefined
                verification?: VerificationConfig | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                name: string
                description?: (string | null) | undefined
                allowed_http_methods?: SourceAllowedHTTPMethod | undefined
                custom_response?: SourceCustomResponse | undefined
                verification?: VerificationConfig | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 422
          }
      $put:
        | {
            input: {
              json: {
                name: string
                description?: (string | null) | undefined
                allowed_http_methods?: SourceAllowedHTTPMethod | undefined
                custom_response?: SourceCustomResponse | undefined
                verification?: VerificationConfig | undefined
              }
            }
            output: Source
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                name: string
                description?: (string | null) | undefined
                allowed_http_methods?: SourceAllowedHTTPMethod | undefined
                custom_response?: SourceCustomResponse | undefined
                verification?: VerificationConfig | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                name: string
                description?: (string | null) | undefined
                allowed_http_methods?: SourceAllowedHTTPMethod | undefined
                custom_response?: SourceCustomResponse | undefined
                verification?: VerificationConfig | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/sources/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { include?: 'verification.configs' | undefined }
            }
            output: Source
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: 'verification.configs' | undefined }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: 'verification.configs' | undefined }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 410
          }
      $put:
        | {
            input: { param: { id: string } } & {
              json: {
                name?: string | undefined
                description?: (string | null) | undefined
                allowed_http_methods?: SourceAllowedHTTPMethod | undefined
                custom_response?: SourceCustomResponse | undefined
                verification?: VerificationConfig | undefined
              }
            }
            output: Source
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: {
                name?: string | undefined
                description?: (string | null) | undefined
                allowed_http_methods?: SourceAllowedHTTPMethod | undefined
                custom_response?: SourceCustomResponse | undefined
                verification?: VerificationConfig | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: {
                name?: string | undefined
                description?: (string | null) | undefined
                allowed_http_methods?: SourceAllowedHTTPMethod | undefined
                custom_response?: SourceCustomResponse | undefined
                verification?: VerificationConfig | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: {
                name?: string | undefined
                description?: (string | null) | undefined
                allowed_http_methods?: SourceAllowedHTTPMethod | undefined
                custom_response?: SourceCustomResponse | undefined
                verification?: VerificationConfig | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { id: string } }
            output: { id: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/sources/:id/disable': {
      $put:
        | { input: { param: { id: string } }; output: Source; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: string } }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/sources/:id/archive': {
      $put:
        | { input: { param: { id: string } }; output: Source; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: string } }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/sources/:id/enable': {
      $put:
        | { input: { param: { id: string } }; output: Source; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: string } }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/sources/:id/unarchive': {
      $put:
        | { input: { param: { id: string } }; output: Source; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: string } }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/notifications/webhooks': {
      $put: {
        input: {
          json: {
            enabled?: boolean | undefined
            topics?: TopicsValue[] | undefined
            source_id?: string | undefined
          }
        }
        output: ToggleWebhookNotifications
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/teams/current/custom_domains': {
      $post: {
        input: { json: AddCustomHostname }
        output: AddCustomHostname
        outputFormat: 'json'
        status: 200
      }
      $get: { input: {}; output: ListCustomDomainSchema; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/teams/current/custom_domains/:domain_id': {
      $delete: {
        input: { param: { domain_id: string } }
        output: DeleteCustomDomainSchema
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/transformations': {
      $get:
        | {
            input: {
              query: {
                id?: string | string[] | undefined
                name?: (string | null) | Operators | undefined
                order_by?: 'created_at' | 'created_at'[] | undefined
                dir?: 'asc' | 'desc' | ('asc' | 'desc')[] | undefined
                limit?: number | undefined
                next?: string | undefined
                prev?: string | undefined
              }
            }
            output: TransformationPaginatedResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id?: string | string[] | undefined
                name?: (string | null) | Operators | undefined
                order_by?: 'created_at' | 'created_at'[] | undefined
                dir?: 'asc' | 'desc' | ('asc' | 'desc')[] | undefined
                limit?: number | undefined
                next?: string | undefined
                prev?: string | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                id?: string | string[] | undefined
                name?: (string | null) | Operators | undefined
                order_by?: 'created_at' | 'created_at'[] | undefined
                dir?: 'asc' | 'desc' | ('asc' | 'desc')[] | undefined
                limit?: number | undefined
                next?: string | undefined
                prev?: string | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: {
              json: { name: string; code: string; env?: { [x: string]: string } | undefined }
            }
            output: Transformation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: { name: string; code: string; env?: { [x: string]: string } | undefined }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: { name: string; code: string; env?: { [x: string]: string } | undefined }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 422
          }
      $put:
        | {
            input: {
              json: { name: string; code: string; env?: { [x: string]: string } | undefined }
            }
            output: Transformation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: { name: string; code: string; env?: { [x: string]: string } | undefined }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: { name: string; code: string; env?: { [x: string]: string } | undefined }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/transformations/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: Transformation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { id: string } }
            output: { id: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & {
              json: {
                name?: string | undefined
                code?: string | undefined
                env?: { [x: string]: string } | undefined
              }
            }
            output: Transformation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: {
                name?: string | undefined
                code?: string | undefined
                env?: { [x: string]: string } | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: {
                name?: string | undefined
                code?: string | undefined
                env?: { [x: string]: string } | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: {
                name?: string | undefined
                code?: string | undefined
                env?: { [x: string]: string } | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/transformations/run': {
      $put:
        | {
            input: {
              json: {
                env?: { [x: string]: string } | undefined
                webhook_id?: string | undefined
                code?: string | undefined
                transformation_id?: string | undefined
                request?:
                  | {
                      headers: { [x: string]: string }
                      body?: {} | string | undefined
                      path?: (string | null) | undefined
                      query?: (string | null) | undefined
                      parsed_query?: {} | undefined
                    }
                  | undefined
                event_id?: string | undefined
              }
            }
            output: TransformationExecutorOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                env?: { [x: string]: string } | undefined
                webhook_id?: string | undefined
                code?: string | undefined
                transformation_id?: string | undefined
                request?:
                  | {
                      headers: { [x: string]: string }
                      body?: {} | string | undefined
                      path?: (string | null) | undefined
                      query?: (string | null) | undefined
                      parsed_query?: {} | undefined
                    }
                  | undefined
                event_id?: string | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                env?: { [x: string]: string } | undefined
                webhook_id?: string | undefined
                code?: string | undefined
                transformation_id?: string | undefined
                request?:
                  | {
                      headers: { [x: string]: string }
                      body?: {} | string | undefined
                      path?: (string | null) | undefined
                      query?: (string | null) | undefined
                      parsed_query?: {} | undefined
                    }
                  | undefined
                event_id?: string | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/transformations/:id/executions': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                log_level?:
                  | 'debug'
                  | 'info'
                  | 'warn'
                  | 'error'
                  | 'fatal'
                  | ('debug' | 'info' | 'warn' | 'error' | 'fatal')[]
                  | undefined
                webhook_id?: string | string[] | undefined
                issue_id?: string | string[] | undefined
                created_at?: string | Operators | undefined
                order_by?: 'created_at' | 'created_at'[] | undefined
                dir?: 'asc' | 'desc' | ('asc' | 'desc')[] | undefined
                limit?: number | undefined
                next?: string | undefined
                prev?: string | undefined
              }
            }
            output: TransformationExecutionPaginatedResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                log_level?:
                  | 'debug'
                  | 'info'
                  | 'warn'
                  | 'error'
                  | 'fatal'
                  | ('debug' | 'info' | 'warn' | 'error' | 'fatal')[]
                  | undefined
                webhook_id?: string | string[] | undefined
                issue_id?: string | string[] | undefined
                created_at?: string | Operators | undefined
                order_by?: 'created_at' | 'created_at'[] | undefined
                dir?: 'asc' | 'desc' | ('asc' | 'desc')[] | undefined
                limit?: number | undefined
                next?: string | undefined
                prev?: string | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                log_level?:
                  | 'debug'
                  | 'info'
                  | 'warn'
                  | 'error'
                  | 'fatal'
                  | ('debug' | 'info' | 'warn' | 'error' | 'fatal')[]
                  | undefined
                webhook_id?: string | string[] | undefined
                issue_id?: string | string[] | undefined
                created_at?: string | Operators | undefined
                order_by?: 'created_at' | 'created_at'[] | undefined
                dir?: 'asc' | 'desc' | ('asc' | 'desc')[] | undefined
                limit?: number | undefined
                next?: string | undefined
                prev?: string | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/transformations/:id/executions/:execution_id': {
      $get:
        | {
            input: { param: { id: string; execution_id: string } }
            output: TransformationExecution
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; execution_id: string } }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/connections': {
      $get:
        | {
            input: {
              query: {
                id?: string | string[] | undefined
                name?: (string | null) | Operators | (string | null)[] | undefined
                destination_id?: string | string[] | undefined
                source_id?: string | string[] | undefined
                disabled?: boolean | undefined
                disabled_at?: (string | null) | Operators | undefined
                full_name?: string | undefined
                paused_at?: (string | null) | Operators | undefined
                order_by?:
                  | 'created_at'
                  | 'updated_at'
                  | 'sources.updated_at'
                  | 'sources.created_at'
                  | 'destinations.updated_at'
                  | 'destinations.created_at'
                  | (
                      | 'created_at'
                      | 'updated_at'
                      | 'sources.updated_at'
                      | 'sources.created_at'
                      | 'destinations.updated_at'
                      | 'destinations.created_at'
                    )[]
                  | undefined
                dir?: 'asc' | 'desc' | ('asc' | 'desc')[] | undefined
                limit?: number | undefined
                next?: string | undefined
                prev?: string | undefined
              }
            }
            output: ConnectionPaginatedResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id?: string | string[] | undefined
                name?: (string | null) | Operators | (string | null)[] | undefined
                destination_id?: string | string[] | undefined
                source_id?: string | string[] | undefined
                disabled?: boolean | undefined
                disabled_at?: (string | null) | Operators | undefined
                full_name?: string | undefined
                paused_at?: (string | null) | Operators | undefined
                order_by?:
                  | 'created_at'
                  | 'updated_at'
                  | 'sources.updated_at'
                  | 'sources.created_at'
                  | 'destinations.updated_at'
                  | 'destinations.created_at'
                  | (
                      | 'created_at'
                      | 'updated_at'
                      | 'sources.updated_at'
                      | 'sources.created_at'
                      | 'destinations.updated_at'
                      | 'destinations.created_at'
                    )[]
                  | undefined
                dir?: 'asc' | 'desc' | ('asc' | 'desc')[] | undefined
                limit?: number | undefined
                next?: string | undefined
                prev?: string | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                id?: string | string[] | undefined
                name?: (string | null) | Operators | (string | null)[] | undefined
                destination_id?: string | string[] | undefined
                source_id?: string | string[] | undefined
                disabled?: boolean | undefined
                disabled_at?: (string | null) | Operators | undefined
                full_name?: string | undefined
                paused_at?: (string | null) | Operators | undefined
                order_by?:
                  | 'created_at'
                  | 'updated_at'
                  | 'sources.updated_at'
                  | 'sources.created_at'
                  | 'destinations.updated_at'
                  | 'destinations.created_at'
                  | (
                      | 'created_at'
                      | 'updated_at'
                      | 'sources.updated_at'
                      | 'sources.created_at'
                      | 'destinations.updated_at'
                      | 'destinations.created_at'
                    )[]
                  | undefined
                dir?: 'asc' | 'desc' | ('asc' | 'desc')[] | undefined
                limit?: number | undefined
                next?: string | undefined
                prev?: string | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: {
              json: {
                name?: (string | null) | undefined
                description?: (string | null) | undefined
                destination_id?: (string | null) | undefined
                source_id?: (string | null) | undefined
                destination?:
                  | {
                      name: string
                      description?: (string | null) | undefined
                      url?: (string | null) | undefined
                      cli_path?: (string | null) | undefined
                      rate_limit?: (number | null) | undefined
                      rate_limit_period?: 'second' | 'minute' | 'hour' | 'concurrent' | undefined
                      http_method?: DestinationHTTPMethod | undefined
                      auth_method?: DestinationAuthMethodConfig | undefined
                      path_forwarding_disabled?: boolean | undefined
                    }
                  | undefined
                source?:
                  | {
                      name: string
                      description?: (string | null) | undefined
                      allowed_http_methods?: SourceAllowedHTTPMethod | undefined
                      custom_response?: SourceCustomResponse | undefined
                      verification?: VerificationConfig | undefined
                    }
                  | undefined
                rules?: Rule[] | undefined
              }
            }
            output: Connection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                name?: (string | null) | undefined
                description?: (string | null) | undefined
                destination_id?: (string | null) | undefined
                source_id?: (string | null) | undefined
                destination?:
                  | {
                      name: string
                      description?: (string | null) | undefined
                      url?: (string | null) | undefined
                      cli_path?: (string | null) | undefined
                      rate_limit?: (number | null) | undefined
                      rate_limit_period?: 'second' | 'minute' | 'hour' | 'concurrent' | undefined
                      http_method?: DestinationHTTPMethod | undefined
                      auth_method?: DestinationAuthMethodConfig | undefined
                      path_forwarding_disabled?: boolean | undefined
                    }
                  | undefined
                source?:
                  | {
                      name: string
                      description?: (string | null) | undefined
                      allowed_http_methods?: SourceAllowedHTTPMethod | undefined
                      custom_response?: SourceCustomResponse | undefined
                      verification?: VerificationConfig | undefined
                    }
                  | undefined
                rules?: Rule[] | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                name?: (string | null) | undefined
                description?: (string | null) | undefined
                destination_id?: (string | null) | undefined
                source_id?: (string | null) | undefined
                destination?:
                  | {
                      name: string
                      description?: (string | null) | undefined
                      url?: (string | null) | undefined
                      cli_path?: (string | null) | undefined
                      rate_limit?: (number | null) | undefined
                      rate_limit_period?: 'second' | 'minute' | 'hour' | 'concurrent' | undefined
                      http_method?: DestinationHTTPMethod | undefined
                      auth_method?: DestinationAuthMethodConfig | undefined
                      path_forwarding_disabled?: boolean | undefined
                    }
                  | undefined
                source?:
                  | {
                      name: string
                      description?: (string | null) | undefined
                      allowed_http_methods?: SourceAllowedHTTPMethod | undefined
                      custom_response?: SourceCustomResponse | undefined
                      verification?: VerificationConfig | undefined
                    }
                  | undefined
                rules?: Rule[] | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 422
          }
      $put:
        | {
            input: {
              json: {
                name?: (string | null) | undefined
                description?: (string | null) | undefined
                destination_id?: (string | null) | undefined
                source_id?: (string | null) | undefined
                destination?:
                  | {
                      name: string
                      description?: (string | null) | undefined
                      url?: (string | null) | undefined
                      cli_path?: (string | null) | undefined
                      rate_limit?: (number | null) | undefined
                      rate_limit_period?: 'second' | 'minute' | 'hour' | 'concurrent' | undefined
                      http_method?: DestinationHTTPMethod | undefined
                      auth_method?: DestinationAuthMethodConfig | undefined
                      path_forwarding_disabled?: boolean | undefined
                    }
                  | undefined
                source?:
                  | {
                      name: string
                      description?: (string | null) | undefined
                      allowed_http_methods?: SourceAllowedHTTPMethod | undefined
                      custom_response?: SourceCustomResponse | undefined
                      verification?: VerificationConfig | undefined
                    }
                  | undefined
                rules?: Rule[] | undefined
              }
            }
            output: Connection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                name?: (string | null) | undefined
                description?: (string | null) | undefined
                destination_id?: (string | null) | undefined
                source_id?: (string | null) | undefined
                destination?:
                  | {
                      name: string
                      description?: (string | null) | undefined
                      url?: (string | null) | undefined
                      cli_path?: (string | null) | undefined
                      rate_limit?: (number | null) | undefined
                      rate_limit_period?: 'second' | 'minute' | 'hour' | 'concurrent' | undefined
                      http_method?: DestinationHTTPMethod | undefined
                      auth_method?: DestinationAuthMethodConfig | undefined
                      path_forwarding_disabled?: boolean | undefined
                    }
                  | undefined
                source?:
                  | {
                      name: string
                      description?: (string | null) | undefined
                      allowed_http_methods?: SourceAllowedHTTPMethod | undefined
                      custom_response?: SourceCustomResponse | undefined
                      verification?: VerificationConfig | undefined
                    }
                  | undefined
                rules?: Rule[] | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                name?: (string | null) | undefined
                description?: (string | null) | undefined
                destination_id?: (string | null) | undefined
                source_id?: (string | null) | undefined
                destination?:
                  | {
                      name: string
                      description?: (string | null) | undefined
                      url?: (string | null) | undefined
                      cli_path?: (string | null) | undefined
                      rate_limit?: (number | null) | undefined
                      rate_limit_period?: 'second' | 'minute' | 'hour' | 'concurrent' | undefined
                      http_method?: DestinationHTTPMethod | undefined
                      auth_method?: DestinationAuthMethodConfig | undefined
                      path_forwarding_disabled?: boolean | undefined
                    }
                  | undefined
                source?:
                  | {
                      name: string
                      description?: (string | null) | undefined
                      allowed_http_methods?: SourceAllowedHTTPMethod | undefined
                      custom_response?: SourceCustomResponse | undefined
                      verification?: VerificationConfig | undefined
                    }
                  | undefined
                rules?: Rule[] | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/connections/count': {
      $get:
        | {
            input: {
              query: {
                destination_id?: string | string[] | undefined
                source_id?: string | string[] | undefined
                disabled?: boolean | undefined
                disabled_at?: (string | null) | Operators | undefined
                paused_at?: (string | null) | Operators | undefined
              }
            }
            output: { count: number }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                destination_id?: string | string[] | undefined
                source_id?: string | string[] | undefined
                disabled?: boolean | undefined
                disabled_at?: (string | null) | Operators | undefined
                paused_at?: (string | null) | Operators | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                destination_id?: string | string[] | undefined
                source_id?: string | string[] | undefined
                disabled?: boolean | undefined
                disabled_at?: (string | null) | Operators | undefined
                paused_at?: (string | null) | Operators | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/connections/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: Connection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 410
          }
      $put:
        | {
            input: { param: { id: string } } & {
              json: {
                name?: (string | null) | undefined
                description?: (string | null) | undefined
                rules?: Rule[] | undefined
              }
            }
            output: Connection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: {
                name?: (string | null) | undefined
                description?: (string | null) | undefined
                rules?: Rule[] | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: {
                name?: (string | null) | undefined
                description?: (string | null) | undefined
                rules?: Rule[] | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: {
                name?: (string | null) | undefined
                description?: (string | null) | undefined
                rules?: Rule[] | undefined
              }
            }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { id: string } }
            output: { id: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/connections/:id/disable': {
      $put:
        | {
            input: { param: { id: string } }
            output: Connection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/connections/:id/archive': {
      $put:
        | {
            input: { param: { id: string } }
            output: Connection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/connections/:id/enable': {
      $put:
        | {
            input: { param: { id: string } }
            output: Connection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/connections/:id/unarchive': {
      $put:
        | {
            input: { param: { id: string } }
            output: Connection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/connections/:id/pause': {
      $put:
        | {
            input: { param: { id: string } }
            output: Connection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/connections/:id/unpause': {
      $put:
        | {
            input: { param: { id: string } }
            output: Connection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: APIErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  },
  '/'
>
export default routes
