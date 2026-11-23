type CreateEnvironmentRequestDto = { name: string; parentId?: string | undefined; color: string }
type ApiKeyDto = { key: string; _userId: string; hash?: string | undefined }
type EnvironmentResponseDto = {
  _id: string
  name: string
  _organizationId: string
  identifier: string
  type?: 'dev' | 'prod' | undefined
  apiKeys?: ApiKeyDto[] | undefined
  _parentId?: string | undefined
  slug?: string | undefined
}
type ErrorDto = {
  statusCode: number
  timestamp: string
  path: string
  message?:
    | (string | null)
    | number
    | boolean
    | ({ [x: string]: unknown } | null)
    | ((string | null) | number | boolean | { [x: string]: unknown })[]
    | undefined
  ctx?: { [x: string]: unknown } | undefined
  errorId?: string | undefined
}
type ConstraintValidation = {
  messages: string[]
  value?:
    | (string | null)
    | number
    | boolean
    | { [x: string]: unknown }
    | ((string | null) | number | boolean | { [x: string]: unknown })[]
    | undefined
}
type ValidationErrorDto = {
  statusCode: number
  timestamp: string
  path: string
  message?:
    | (string | null)
    | number
    | boolean
    | ({ [x: string]: unknown } | null)
    | ((string | null) | number | boolean | { [x: string]: unknown })[]
    | undefined
  ctx?: { [x: string]: unknown } | undefined
  errorId?: string | undefined
  errors: { [x: string]: ConstraintValidation }
}
type InBoundParseDomainDto = { inboundParseDomain?: string | undefined }
type BridgeConfigurationDto = { url?: string | undefined }
type UpdateEnvironmentRequestDto = {
  name?: string | undefined
  identifier?: string | undefined
  parentId?: string | undefined
  color?: string | undefined
  dns?: InBoundParseDomainDto | undefined
  bridge?: BridgeConfigurationDto | undefined
}
type StepsOverrides = {
  providers?: { [x: string]: { [x: string]: unknown } } | undefined
  layoutId?: (string | null) | undefined
}
type SubscriberChannelDto = {
  providerId:
    | 'slack'
    | 'discord'
    | 'google-chat'
    | 'msteams'
    | 'webex-messaging'
    | 'mattermost'
    | 'ryver'
    | 'zulip'
    | 'grafana-on-call'
    | 'getstream'
    | 'rocket-chat'
    | 'whatsapp-business'
    | 'line'
    | 'chat-webhook'
    | 'novu-slack'
    | 'telegram'
    | 'sendblue'
    | 'photon-imessage'
    | 'novu-web-chat'
    | 'fcm'
    | 'apns'
    | 'expo'
    | 'one-signal'
    | 'pushpad'
    | 'push-webhook'
    | 'pusher-beams'
    | 'appio'
  integrationIdentifier?: string | undefined
  credentials: { webhookUrl?: string | undefined; deviceTokens?: string[] | undefined }
}
type SubscriberPayloadDto = {
  firstName?: (string | null) | undefined
  lastName?: (string | null) | undefined
  email?: (string | null) | undefined
  phone?: (string | null) | undefined
  avatar?: (string | null) | undefined
  locale?: (string | null) | undefined
  timezone?: (string | null) | undefined
  data?: ({ [x: string]: unknown } | null) | undefined
  subscriberId: string
  channels?: SubscriberChannelDto[] | undefined
}
type TopicPayloadDto = { topicKey: string; type: {}; exclude?: string[] | undefined }
type TenantPayloadDto = {
  identifier?: string | undefined
  name?: string | undefined
  data?: { [x: string]: unknown } | undefined
}
type TriggerEventRequestDto = {
  name: string
  payload?: { [x: string]: unknown } | undefined
  bridgeUrl?: string | undefined
  overrides?:
    | {
        steps?: { [x: string]: StepsOverrides } | undefined
        channels?: { email?: { layoutId?: (string | null) | undefined } | undefined } | undefined
        providers?: { [x: string]: { [x: string]: unknown } } | undefined
        email?: { [x: string]: unknown } | undefined
        push?: { [x: string]: unknown } | undefined
        sms?: { [x: string]: unknown } | undefined
        chat?: { [x: string]: unknown } | undefined
        layoutIdentifier?: string | undefined
        severity?: {} | undefined
      }
    | undefined
  agentId?: (string | null) | undefined
  to:
    | (SubscriberPayloadDto | TopicPayloadDto | string)[]
    | string
    | SubscriberPayloadDto
    | TopicPayloadDto
  transactionId?: string | undefined
  actor?: string | SubscriberPayloadDto | undefined
  tenant?: string | TenantPayloadDto | undefined
  context?:
    | { [x: string]: string | { id: string; data?: { [x: string]: unknown } | undefined } }
    | undefined
}
type TriggerEventResponseDto = {
  acknowledged: boolean
  status:
    | 'error'
    | 'trigger_not_active'
    | 'no_workflow_active_steps_defined'
    | 'no_workflow_steps_defined'
    | 'processed'
    | 'no_tenant_found'
    | 'invalid_recipients'
  error?: string[] | undefined
  transactionId?: string | undefined
  activityFeedLink?: string | undefined
  jobData?: { [x: string]: unknown } | undefined
}
type PayloadValidationErrorDto = {
  field: string
  message: string
  value?:
    | (string | null)
    | number
    | boolean
    | ({ [x: string]: unknown } | null)
    | ((string | null) | number | boolean | { [x: string]: unknown })[]
    | undefined
  schemaPath?: string | undefined
}
type PayloadValidationExceptionDto = {
  statusCode: number
  timestamp: string
  path: string
  message?:
    | (string | null)
    | number
    | boolean
    | ({ [x: string]: unknown } | null)
    | ((string | null) | number | boolean | { [x: string]: unknown })[]
    | undefined
  ctx?: { [x: string]: unknown } | undefined
  errorId?: string | undefined
  type: string
  errors: PayloadValidationErrorDto[]
  schema?: { [x: string]: unknown } | undefined
}
type BulkTriggerEventDto = { events: TriggerEventRequestDto[] }
type TriggerEventToAllRequestDto = {
  name: string
  payload: { [x: string]: unknown }
  overrides?:
    | {
        steps?: { [x: string]: StepsOverrides } | undefined
        channels?: { email?: { layoutId?: (string | null) | undefined } | undefined } | undefined
        providers?: { [x: string]: { [x: string]: unknown } } | undefined
        email?: { [x: string]: unknown } | undefined
        push?: { [x: string]: unknown } | undefined
        sms?: { [x: string]: unknown } | undefined
        chat?: { [x: string]: unknown } | undefined
        layoutIdentifier?: string | undefined
        severity?: {} | undefined
      }
    | undefined
  agentId?: (string | null) | undefined
  transactionId?: string | undefined
  actor?: string | SubscriberPayloadDto | undefined
  tenant?: string | TenantPayloadDto | undefined
  context?:
    | { [x: string]: string | { id: string; data?: { [x: string]: unknown } | undefined } }
    | undefined
}
type ChannelTypeEnum = 'in_app' | 'email' | 'sms' | 'chat' | 'push' | 'tool'
type StepTypeEnum =
  | 'in_app'
  | 'email'
  | 'sms'
  | 'chat'
  | 'push'
  | 'tool'
  | 'digest'
  | 'trigger'
  | 'delay'
  | 'throttle'
  | 'custom'
  | 'http_request'
type NotificationTriggerVariable = { name: string }
type NotificationTriggerDto = {
  type: 'event'
  identifier: string
  variables: NotificationTriggerVariable[]
  subscriberVariables?: NotificationTriggerVariable[] | undefined
}
type ActivityNotificationExecutionDetailResponseDto = {
  _id: string
  createdAt?: string | undefined
  status: {}
  detail: string
  isRetry: boolean
  isTest: boolean
  providerId?: {} | undefined
  raw?: (string | null) | undefined
  source: {}
}
type FieldFilterPartDto = {
  field: string
  value: string
  operator:
    | 'LARGER'
    | 'SMALLER'
    | 'LARGER_EQUAL'
    | 'SMALLER_EQUAL'
    | 'EQUAL'
    | 'NOT_EQUAL'
    | 'ALL_IN'
    | 'ANY_IN'
    | 'NOT_IN'
    | 'BETWEEN'
    | 'NOT_BETWEEN'
    | 'LIKE'
    | 'NOT_LIKE'
    | 'IN'
  on: 'subscriber' | 'payload'
}
type StepFilterDto = {
  isNegated: boolean
  type: {}
  value: 'AND' | 'OR'
  children: FieldFilterPartDto[]
}
type ActivityNotificationStepResponseDto = {
  _id: string
  active: boolean
  replyCallback?: { [x: string]: unknown } | undefined
  controlVariables?: { [x: string]: unknown } | undefined
  metadata?: { [x: string]: unknown } | undefined
  issues?: { [x: string]: unknown } | undefined
  filters: StepFilterDto[]
  template?: {} | undefined
  variants?: ActivityNotificationStepResponseDto[] | undefined
  _templateId: string
  name?: string | undefined
  _parentId?: (string | null) | undefined
}
type ActivityNotificationJobResponseDto = {
  _id: string
  type:
    | 'in_app'
    | 'email'
    | 'sms'
    | 'chat'
    | 'push'
    | 'tool'
    | 'digest'
    | 'trigger'
    | 'delay'
    | 'throttle'
    | 'custom'
    | 'http_request'
  digest?:
    | {
        digestKey?: string | undefined
        amount?: number | undefined
        unit?: 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | undefined
        type: {}
        events?: { [x: string]: unknown }[] | undefined
        backoff?: boolean | undefined
        backoffAmount?: number | undefined
        backoffUnit?: {} | undefined
        updateMode?: boolean | undefined
        timed?:
          | {
              atTime?: string | undefined
              weekDays?:
                | (
                    | 'monday'
                    | 'tuesday'
                    | 'wednesday'
                    | 'thursday'
                    | 'friday'
                    | 'saturday'
                    | 'sunday'
                  )[]
                | undefined
              monthDays?: number[] | undefined
              ordinal?: {} | undefined
              ordinalValue?: {} | undefined
              monthlyType?: {} | undefined
              cronExpression?: string | undefined
              untilDate?: string | undefined
            }
          | undefined
      }
    | undefined
  executionDetails: ActivityNotificationExecutionDetailResponseDto[]
  step: {
    _id: string
    active: boolean
    replyCallback?: { [x: string]: unknown } | undefined
    controlVariables?: { [x: string]: unknown } | undefined
    metadata?: { [x: string]: unknown } | undefined
    issues?: { [x: string]: unknown } | undefined
    filters: StepFilterDto[]
    template?: {} | undefined
    variants?: ActivityNotificationStepResponseDto[] | undefined
    _templateId: string
    name?: string | undefined
    _parentId?: (string | null) | undefined
  }
  overrides?: { [x: string]: unknown } | undefined
  payload?: { [x: string]: unknown } | undefined
  providerId: {}
  status: string
  updatedAt?: string | undefined
  scheduleExtensionsCount?: number | undefined
}
type ActivityTopicDto = { _topicId: string; topicKey: string }
type ActivityNotificationResponseDto = {
  _id?: string | undefined
  _environmentId: string
  _organizationId: string
  _subscriberId: string
  transactionId: string
  _templateId?: string | undefined
  _digestedNotificationId?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  channels?: StepTypeEnum[] | undefined
  subscriber?:
    | {
        firstName?: (string | null) | undefined
        subscriberId: string
        _id: string
        lastName?: (string | null) | undefined
        email?: (string | null) | undefined
        phone?: (string | null) | undefined
      }
    | undefined
  template?:
    | {
        _id?: string | undefined
        name: string
        origin?: {} | undefined
        triggers: NotificationTriggerDto[]
      }
    | undefined
  jobs?: ActivityNotificationJobResponseDto[] | undefined
  payload?: { [x: string]: unknown } | undefined
  overrides?: { [x: string]: unknown } | undefined
  tags?: string[] | undefined
  controls?: { [x: string]: unknown } | undefined
  to?: { [x: string]: unknown } | undefined
  topics?: ActivityTopicDto[] | undefined
  severity?: {} | undefined
  critical?: boolean | undefined
  contextKeys?: string[] | undefined
}
type ActivitiesResponseDto = {
  hasMore: boolean
  data: ActivityNotificationResponseDto[]
  pageSize: number
  page: number
}
type AgentSkillInputDto = {
  type: 'anthropic' | 'custom'
  skillId: string
  version?: ({ [x: string]: unknown } | null) | undefined
}
type ManagedRuntimeDto = {
  providerId: 'anthropic' | 'novu-anthropic' | 'anthropic-aws'
  integrationId: string
  externalAgentId?: string | undefined
  externalEnvironmentId?: string | undefined
  model?: string | undefined
  systemPrompt?: string | undefined
  tools?: string[] | undefined
  mcpServers?: string[] | undefined
  skills?: AgentSkillInputDto[] | undefined
}
type CreateAgentRequestDto = {
  name: string
  identifier: string
  description?: string | undefined
  active?: boolean | undefined
  runtime?: 'self-hosted' | 'managed' | undefined
  managedRuntime?: ManagedRuntimeDto | undefined
}
type AgentBehaviorDto = {
  acknowledgeOnReceived?: boolean | undefined
  reactionOnResolved?: (string | null) | undefined
  subscriberAccess?: 'open' | 'restricted' | 'rule' | undefined
  accessRule?: { [x: string]: unknown } | undefined
  replyPolicy?: 'mention_only' | 'auto_reply' | 'smart' | undefined
}
type AgentToolDto = {
  externalId: string
  name: string
  type: 'builtin' | 'custom'
  description?: string | undefined
}
type AgentMcpServerDto = { externalId: string; name: string; url: string }
type AgentIntegrationSummaryDto = {
  integrationId: string
  providerId: string
  name: string
  identifier: string
  channel?: {} | undefined
  active: boolean
}
type AgentResponseDto = {
  _id: string
  name: string
  identifier: string
  description?: string | undefined
  behavior: AgentBehaviorDto
  active: boolean
  bridgeUrl?: string | undefined
  devBridgeUrl?: string | undefined
  devBridgeActive?: boolean | undefined
  runtime?: 'self-hosted' | 'managed' | undefined
  visibility?: 'public' | 'private' | undefined
  managedRuntime?:
    | {
        providerId: string
        integrationId: string
        externalAgentId: string
        externalEnvironmentId?: string | undefined
        externalWorkspaceId?: string | undefined
        consoleUrl?: string | undefined
        tools?: AgentToolDto[] | undefined
        mcpServers?: AgentMcpServerDto[] | undefined
        systemPrompt?: string | undefined
      }
    | undefined
  _environmentId: string
  _organizationId: string
  createdBy?: string | undefined
  createdAt: string
  updatedAt: string
  integrations?: AgentIntegrationSummaryDto[] | undefined
  exceedsPlanLimit?: boolean | undefined
}
type ListAgentsResponseDto = {
  data: AgentResponseDto[]
  next: string | null
  previous: string | null
  totalCount: number
  totalCountCapped: boolean
  planUsage?:
    | {
        used: number
        limit: number
        totalCreated: number
        creationLimit: number
        limitSource: 'plan' | 'system'
      }
    | undefined
}
type UpdateAgentBridgeRequestDto = {
  bridgeUrl?: string | undefined
  devBridgeUrl?: string | undefined
  devBridgeActive?: boolean | undefined
}
type UpdateAgentRequestDto = {
  name?: string | undefined
  description?: string | undefined
  active?: boolean | undefined
  behavior?: AgentBehaviorDto | undefined
  bridgeUrl?: string | undefined
  devBridgeUrl?: string | undefined
  devBridgeActive?: boolean | undefined
}
type AddAgentIntegrationRequestDto = {
  integrationIdentifier?: string | undefined
  providerId?: string | undefined
}
type AgentIntegrationResponseIntegrationDto = {
  _id: string
  identifier: string
  name: string
  providerId: string
  channel?: {} | undefined
  active: boolean
  sharedInboundAddress?: string | undefined
  defaultSenderName?: string | undefined
  sharedInboxDisabled?: boolean | undefined
}
type AgentIntegrationResponseDto = {
  _id: string
  _agentId: string
  integration: AgentIntegrationResponseIntegrationDto
  _environmentId: string
  _organizationId: string
  connectedAt?: ({ [x: string]: unknown } | null) | undefined
  createdAt: string
  updatedAt: string
  exceedsPlanLimit?: boolean | undefined
  hasChannelEndpoints?: boolean | undefined
}
type ListAgentIntegrationsResponseDto = {
  data: AgentIntegrationResponseDto[]
  next: string | null
  previous: string | null
  totalCount: number
  totalCountCapped: boolean
  planUsage?: { used: number; limit: number } | undefined
}
type UpdateAgentIntegrationRequestDto = { integrationIdentifier: string }
type FileRefDto = {
  filename: string
  mimeType?: string | undefined
  data?: string | undefined
  url?: string | undefined
}
type MarkdownReplyContentDto = { markdown: string; files?: FileRefDto[] | undefined }
type CardReplyContentDto = { card: { [x: string]: unknown }; files?: FileRefDto[] | undefined }
type ToolApprovalCardReplyContentDto = {
  toolApprovalCard: { [x: string]: unknown }
  files?: FileRefDto[] | undefined
}
type MetadataSetSignalDto = {
  type: 'metadata'
  action?: 'set' | undefined
  key: string
  value: string | number | boolean | { [x: string]: unknown } | { [x: string]: unknown }[]
}
type MetadataDeleteSignalDto = { type: 'metadata'; action: 'delete'; key: string }
type MetadataClearSignalDto = { type: 'metadata'; action: 'clear' }
type TriggerSignalDto = {
  type: 'trigger'
  workflowId: string
  to?: string | { [x: string]: unknown } | (string | { [x: string]: unknown })[] | undefined
  payload?: { [x: string]: unknown } | undefined
}
type HumanSignalDto = {
  type: 'human'
  kind: 'ask' | 'approve' | 'choose' | 'tell'
  card: { [x: string]: unknown } | { [x: string]: unknown } | { [x: string]: unknown }
  requestId: string
  actionIdentifier?: string | undefined
  from?: string | undefined
  ttlSeconds?: number | undefined
  to?: string | string[] | undefined
}
type ToolResultDto = {
  toolCallId: string
  toolName?: string | undefined
  output?: { [x: string]: unknown } | undefined
  preview?: string | undefined
}
type AddReactionPayloadDto = { messageId: string; emojiName: string }
type DeleteMessagePayloadDto = { messageId: string }
type TypingStatusDto = { status?: string | undefined }
type AgentReplyPayloadDto = {
  conversationId: string
  integrationIdentifier: string
  reply?:
    | MarkdownReplyContentDto
    | CardReplyContentDto
    | ToolApprovalCardReplyContentDto
    | undefined
  toolApprovalRequest?:
    | {
        approvalId: string
        toolCallId: string
        name: string
        input?: { [x: string]: unknown } | undefined
        approveActionId?: string | undefined
        denyActionId?: string | undefined
        mcpServerName?: string | undefined
        to?: { [x: string]: unknown } | undefined
        from?: string | undefined
        ttlSeconds?: number | undefined
      }
    | undefined
  edit?:
    | {
        messageId: string
        content: MarkdownReplyContentDto | CardReplyContentDto | ToolApprovalCardReplyContentDto
      }
    | undefined
  resolve?: { summary?: string | undefined } | undefined
  signals?:
    | (
        | MetadataSetSignalDto
        | MetadataDeleteSignalDto
        | MetadataClearSignalDto
        | TriggerSignalDto
        | HumanSignalDto
      )[]
    | undefined
  toolResults?: ToolResultDto[] | undefined
  addReactions?: AddReactionPayloadDto[] | undefined
  deleteMessages?: DeleteMessagePayloadDto[] | undefined
  typing?: 'stop' | TypingStatusDto | undefined
  error?: boolean | undefined
}
type ExpectedDnsRecordDto = {
  type: string
  name: string
  content: string
  ttl: string
  priority?: number | undefined
}
type DomainResponseDto = {
  _id: string
  name: string
  status: 'pending' | 'verified'
  mxRecordConfigured: boolean
  dnsProvider?: string | undefined
  _environmentId: string
  _organizationId: string
  createdAt: string
  updatedAt: string
  expectedDnsRecords?: ExpectedDnsRecordDto[] | undefined
  data?: { [x: string]: string } | undefined
}
type ListDomainsResponseDto = {
  data: DomainResponseDto[]
  next: string | null
  previous: string | null
  totalCount: number
  totalCountCapped: boolean
}
type CreateDomainDto = { name: string; data?: { [x: string]: string } | undefined }
type UpdateDomainDto = { data?: { [x: string]: string } | undefined }
type DomainDiagnosticCheckDto = {
  code:
    | 'mx_missing'
    | 'mx_wrong_target'
    | 'mx_low_priority'
    | 'apex_cname_collision'
    | 'dnsbl_listed'
  status: 'pass' | 'fail' | 'skipped'
  latencyMs: number
}
type DomainDiagnosticIssueDto = {
  code:
    | 'mx_missing'
    | 'mx_wrong_target'
    | 'mx_low_priority'
    | 'apex_cname_collision'
    | 'dnsbl_listed'
  severity: 'warn' | 'error'
  message: string
  fix: string
}
type DiagnoseDomainResponseDto = {
  ok: boolean
  runAt: string
  checks: DomainDiagnosticCheckDto[]
  issues: DomainDiagnosticIssueDto[]
}
type DomainRouteResponseDto = {
  _id: string
  _domainId: string
  address: string
  agentId?: string | undefined
  type: 'agent' | 'webhook'
  _environmentId: string
  _organizationId: string
  createdAt: string
  updatedAt: string
  data?: { [x: string]: string } | undefined
}
type ListDomainRoutesResponseDto = {
  data: DomainRouteResponseDto[]
  next: string | null
  previous: string | null
  totalCount: number
  totalCountCapped: boolean
}
type DomainRouteDto = {
  address: string
  agentId?: string | undefined
  type: 'agent' | 'webhook'
  data?: { [x: string]: string } | undefined
}
type UpdateDomainRouteDto = {
  agentId?: string | undefined
  type?: 'agent' | 'webhook' | undefined
  data?: { [x: string]: string } | undefined
}
type TestDomainRouteFromDto = { address: string; name?: string | undefined }
type TestDomainRouteDto = {
  from: TestDomainRouteFromDto
  subject: string
  text?: string | undefined
  html?: string | undefined
  dryRun?: boolean | undefined
}
type TestDomainRouteWebhookResultDto = { skipped?: boolean | undefined; latencyMs: number }
type TestDomainRouteAgentResultDto = {
  agentId: string
  httpStatus: number
  agentReply?: { [x: string]: unknown } | undefined
  latencyMs: number
}
type TestDomainRouteResponseDto = {
  matched: boolean
  dryRun: boolean
  domainStatus?: 'pending' | 'verified' | undefined
  mxRecordConfigured?: boolean | undefined
  type?: 'agent' | 'webhook' | undefined
  wouldDeliverTo?: string | undefined
  payload?: { [x: string]: unknown } | undefined
  webhook?: TestDomainRouteWebhookResultDto | undefined
  agent?: TestDomainRouteAgentResultDto | undefined
}
type DomainConnectStatusResponseDto = {
  available: boolean
  providerName?: string | undefined
  providerId?: string | undefined
  reason?: string | undefined
  reasonCode?:
    | 'disabled'
    | 'discovery_not_configured'
    | 'unsupported_provider'
    | 'incomplete_configuration'
    | 'provider_settings_unavailable'
    | 'untrusted_provider_flow'
    | 'template_not_onboarded'
    | undefined
  manualRecords: ExpectedDnsRecordDto[]
}
type CreateDomainConnectApplyUrlDto = { redirectUri?: string | undefined }
type DomainConnectApplyUrlResponseDto = {
  applyUrl: string
  providerName: string
  redirectUri: string
}
type IntegrationResponseDto = {
  _id?: string | undefined
  _environmentId: string
  _organizationId: string
  name: string
  identifier: string
  providerId: string
  channel?: 'in_app' | 'email' | 'sms' | 'chat' | 'push' | 'tool' | undefined
  kind?: 'delivery' | 'agent' | undefined
  credentials?:
    | {
        apiKey?: string | undefined
        user?: string | undefined
        secretKey?: string | undefined
        hmacSecretKeyEncoding?: 'text' | 'base64' | 'hex' | undefined
        authMethod?: 'apiKey' | undefined
        domain?: string | undefined
        password?: string | undefined
        host?: string | undefined
        port?: string | undefined
        secure?: boolean | undefined
        region?: string | undefined
        accountSid?: string | undefined
        messageProfileId?: string | undefined
        token?: string | undefined
        from?: string | undefined
        senderName?: string | undefined
        projectName?: string | undefined
        applicationId?: string | undefined
        clientId?: string | undefined
        requireTls?: boolean | undefined
        ignoreTls?: boolean | undefined
        tlsOptions?: { [x: string]: unknown } | undefined
        baseUrl?: string | undefined
        webhookUrl?: string | undefined
        redirectUrl?: string | undefined
        hmac?: boolean | undefined
        serviceAccount?: string | undefined
        ipPoolName?: string | undefined
        configurationSetName?: string | undefined
        apiKeyRequestHeader?: string | undefined
        secretKeyRequestHeader?: string | undefined
        idPath?: string | undefined
        datePath?: string | undefined
        apiToken?: string | undefined
        authenticateByToken?: boolean | undefined
        authenticationTokenKey?: string | undefined
        instanceId?: string | undefined
        alertUid?: string | undefined
        title?: string | undefined
        imageUrl?: string | undefined
        state?: string | undefined
        externalLink?: string | undefined
        channelId?: string | undefined
        phoneNumberIdentification?: string | undefined
        accessKey?: string | undefined
        appSid?: string | undefined
        senderId?: string | undefined
        tenantId?: string | undefined
        AppIOBaseUrl?: string | undefined
        signingSecret?: string | undefined
        outboundIntegrationId?: string | undefined
        outboundConnectedAt?: string | undefined
        whatsNextCompletedAt?: string | undefined
        useFromAddressOverride?: boolean | undefined
        fromAddressOverride?: string | undefined
        emailSlugPrefix?: string | undefined
        externalEnvironmentId?: string | undefined
        externalVaultId?: string | undefined
        externalWorkspaceId?: string | undefined
      }
    | undefined
  configurations?:
    | {
        inboundWebhookEnabled?: boolean | undefined
        inboundWebhookSigningKey?: string | undefined
        payloadSchema?: string | undefined
      }
    | undefined
  active: boolean
  deleted: boolean
  deletedAt?: string | undefined
  deletedBy?: string | undefined
  primary: boolean
  conditions?: StepFilterDto[] | undefined
  rules?: ({ [x: string]: unknown } | null) | undefined
}
type CreateIntegrationRequestDto = {
  name?: string | undefined
  identifier?: string | undefined
  _environmentId?: string | undefined
  providerId?: string | undefined
  channel?: 'in_app' | 'email' | 'sms' | 'chat' | 'push' | 'tool' | undefined
  kind?: 'delivery' | 'agent' | undefined
  credentials?:
    | {
        apiKey?: string | undefined
        user?: string | undefined
        secretKey?: string | undefined
        hmacSecretKeyEncoding?: 'text' | 'base64' | 'hex' | undefined
        authMethod?: 'apiKey' | undefined
        domain?: string | undefined
        password?: string | undefined
        host?: string | undefined
        port?: string | undefined
        secure?: boolean | undefined
        region?: string | undefined
        accountSid?: string | undefined
        messageProfileId?: string | undefined
        token?: string | undefined
        from?: string | undefined
        senderName?: string | undefined
        projectName?: string | undefined
        applicationId?: string | undefined
        clientId?: string | undefined
        requireTls?: boolean | undefined
        ignoreTls?: boolean | undefined
        tlsOptions?: { [x: string]: unknown } | undefined
        baseUrl?: string | undefined
        webhookUrl?: string | undefined
        redirectUrl?: string | undefined
        hmac?: boolean | undefined
        serviceAccount?: string | undefined
        ipPoolName?: string | undefined
        configurationSetName?: string | undefined
        apiKeyRequestHeader?: string | undefined
        secretKeyRequestHeader?: string | undefined
        idPath?: string | undefined
        datePath?: string | undefined
        apiToken?: string | undefined
        authenticateByToken?: boolean | undefined
        authenticationTokenKey?: string | undefined
        instanceId?: string | undefined
        alertUid?: string | undefined
        title?: string | undefined
        imageUrl?: string | undefined
        state?: string | undefined
        externalLink?: string | undefined
        channelId?: string | undefined
        phoneNumberIdentification?: string | undefined
        accessKey?: string | undefined
        appSid?: string | undefined
        senderId?: string | undefined
        tenantId?: string | undefined
        AppIOBaseUrl?: string | undefined
        signingSecret?: string | undefined
        outboundIntegrationId?: string | undefined
        outboundConnectedAt?: string | undefined
        whatsNextCompletedAt?: string | undefined
        useFromAddressOverride?: boolean | undefined
        fromAddressOverride?: string | undefined
        emailSlugPrefix?: string | undefined
        externalEnvironmentId?: string | undefined
        externalVaultId?: string | undefined
        externalWorkspaceId?: string | undefined
      }
    | undefined
  active?: boolean | undefined
  check?: boolean | undefined
  conditions?: StepFilterDto[] | undefined
  rules?: ({ [x: string]: unknown } | null) | undefined
  configurations?: { [x: string]: string } | undefined
}
type CredentialsDto = {
  apiKey?: string | undefined
  user?: string | undefined
  secretKey?: string | undefined
  hmacSecretKeyEncoding?: 'text' | 'base64' | 'hex' | undefined
  authMethod?: 'apiKey' | undefined
  domain?: string | undefined
  password?: string | undefined
  host?: string | undefined
  port?: string | undefined
  secure?: boolean | undefined
  region?: string | undefined
  accountSid?: string | undefined
  messageProfileId?: string | undefined
  token?: string | undefined
  from?: string | undefined
  senderName?: string | undefined
  projectName?: string | undefined
  applicationId?: string | undefined
  clientId?: string | undefined
  requireTls?: boolean | undefined
  ignoreTls?: boolean | undefined
  tlsOptions?: { [x: string]: unknown } | undefined
  baseUrl?: string | undefined
  webhookUrl?: string | undefined
  redirectUrl?: string | undefined
  hmac?: boolean | undefined
  serviceAccount?: string | undefined
  ipPoolName?: string | undefined
  configurationSetName?: string | undefined
  apiKeyRequestHeader?: string | undefined
  secretKeyRequestHeader?: string | undefined
  idPath?: string | undefined
  datePath?: string | undefined
  apiToken?: string | undefined
  authenticateByToken?: boolean | undefined
  authenticationTokenKey?: string | undefined
  instanceId?: string | undefined
  alertUid?: string | undefined
  title?: string | undefined
  imageUrl?: string | undefined
  state?: string | undefined
  externalLink?: string | undefined
  channelId?: string | undefined
  phoneNumberIdentification?: string | undefined
  accessKey?: string | undefined
  appSid?: string | undefined
  senderId?: string | undefined
  tenantId?: string | undefined
  AppIOBaseUrl?: string | undefined
  signingSecret?: string | undefined
  outboundIntegrationId?: string | undefined
  outboundConnectedAt?: string | undefined
  whatsNextCompletedAt?: string | undefined
  useFromAddressOverride?: boolean | undefined
  fromAddressOverride?: string | undefined
  emailSlugPrefix?: string | undefined
  externalEnvironmentId?: string | undefined
  externalVaultId?: string | undefined
  externalWorkspaceId?: string | undefined
}
type UpdateIntegrationRequestDto = {
  name?: string | undefined
  identifier?: string | undefined
  _environmentId?: string | undefined
  active?: boolean | undefined
  credentials?: CredentialsDto | undefined
  check?: boolean | undefined
  conditions?: StepFilterDto[] | undefined
  rules?: ({ [x: string]: unknown } | null) | undefined
  configurations?: { [x: string]: string } | undefined
}
type AutoConfigureIntegrationResponseDto = {
  success: boolean
  message?: string | undefined
  integration?: { [x: string]: unknown } | undefined
}
type GenerateChatOauthUrlRequestDto = {
  subscriberId?: string | undefined
  integrationIdentifier: string
  connectionIdentifier?: string | undefined
  context?:
    | { [x: string]: string | { id: string; data?: { [x: string]: unknown } | undefined } }
    | undefined
  scope?: string[] | undefined
  userScope?: string[] | undefined
  mode?: 'connect' | 'link_user' | undefined
  connectionMode?: 'subscriber' | 'shared' | undefined
  autoLinkUser?: boolean | undefined
}
type GenerateChatOAuthUrlResponseDto = { url: string }
type GenerateConnectOauthUrlRequestDto = {
  subscriberId?: string | undefined
  integrationIdentifier: string
  connectionIdentifier?: string | undefined
  context?:
    | { [x: string]: string | { id: string; data?: { [x: string]: unknown } | undefined } }
    | undefined
  contextHash?: string | undefined
  scope?: string[] | undefined
  connectionMode?: 'subscriber' | 'shared' | undefined
  autoLinkUser?: boolean | undefined
}
type GenerateLinkUserOauthUrlRequestDto = {
  subscriberId: string
  integrationIdentifier: string
  connectionIdentifier?: string | undefined
  context?:
    | { [x: string]: string | { id: string; data?: { [x: string]: unknown } | undefined } }
    | undefined
  contextHash?: string | undefined
  userScope?: string[] | undefined
}
type LinkChannelEndpointRequestDto = {
  integrationIdentifier: string
  subscriberId: string
  context?:
    | { [x: string]: string | { id: string; data?: { [x: string]: unknown } | undefined } }
    | undefined
  contextHash?: string | undefined
}
type LinkChannelEndpointResponseDto = {
  url: string
  providerMetadata?: { [x: string]: unknown } | undefined
}
type ConfigureTelegramWebhookResponseDto = {
  webhookUrl: string
  configuredAt: string
  botUsername: string
}
type IssueIntegrationMobileLinkRequestDto = { subscriberId?: string | undefined }
type IssueTelegramMobileLinkResponseDto = { token: string; url: string; expiresAt: string }
type CreateContextRequestDto = {
  type: string
  id: string
  data?: { [x: string]: unknown } | undefined
  bridgeUrl?: string | undefined
}
type GetContextResponseDto = {
  type: string
  id: string
  data: { [x: string]: unknown }
  bridgeUrl?: string | undefined
  createdAt: string
  updatedAt: string
}
type ListContextsResponseDto = {
  data: GetContextResponseDto[]
  next: string | null
  previous: string | null
  totalCount: number
  totalCountCapped: boolean
}
type UpdateContextRequestDto = {
  data: { [x: string]: unknown }
  bridgeUrl?: (string | null) | undefined
}
type CreateSubscriberRequestDto = {
  firstName?: (string | null) | undefined
  lastName?: (string | null) | undefined
  email?: (string | null) | undefined
  phone?: (string | null) | undefined
  avatar?: (string | null) | undefined
  locale?: (string | null) | undefined
  timezone?: (string | null) | undefined
  data?: ({ [x: string]: unknown } | null) | undefined
  subscriberId: string
}
type BulkSubscriberCreateDto = { subscribers: CreateSubscriberRequestDto[] }
type UpdatedSubscriberDto = { subscriberId: string }
type CreatedSubscriberDto = { subscriberId: string }
type FailedOperationDto = { message?: string | undefined; subscriberId?: string | undefined }
type BulkCreateSubscriberResponseDto = {
  updated: UpdatedSubscriberDto[]
  created: CreatedSubscriberDto[]
  failed: FailedOperationDto[]
}
type UpdateSubscriberChannelRequestDto = {
  providerId: {}
  integrationIdentifier?: string | undefined
  credentials: {
    webhookUrl?: string | undefined
    channel?: string | undefined
    deviceTokens?: string[] | undefined
    alertUid?: string | undefined
    title?: string | undefined
    imageUrl?: string | undefined
    state?: string | undefined
    externalUrl?: string | undefined
  }
}
type ChannelSettingsDto = {
  providerId: {}
  integrationIdentifier?: string | undefined
  credentials: {
    webhookUrl?: string | undefined
    channel?: string | undefined
    deviceTokens?: string[] | undefined
    alertUid?: string | undefined
    title?: string | undefined
    imageUrl?: string | undefined
    state?: string | undefined
    externalUrl?: string | undefined
  }
  _integrationId: string
}
type SubscriberResponseDto = {
  _id?: string | undefined
  firstName?: (string | null) | undefined
  lastName?: (string | null) | undefined
  email?: (string | null) | undefined
  phone?: (string | null) | undefined
  avatar?: (string | null) | undefined
  locale?: (string | null) | undefined
  channels?: ChannelSettingsDto[] | undefined
  topics?: string[] | undefined
  isOnline?: (boolean | null) | undefined
  lastOnlineAt?: (string | null) | undefined
  __v?: number | undefined
  data?: ({ [x: string]: unknown } | null) | undefined
  timezone?: (string | null) | undefined
  subscriberId: string
  _organizationId: string
  _environmentId: string
  deleted: boolean
  createdAt: string
  updatedAt: string
}
type UpdateSubscriberOnlineFlagRequestDto = { isOnline: boolean }
type MessageButton = { type: {}; content: string; resultContent?: string | undefined }
type NotificationFeedItemDto = {
  _id: string
  _templateId: string
  _environmentId: string
  _messageTemplateId?: string | undefined
  _organizationId: string
  _notificationId: string
  _subscriberId: string
  _feedId?: (string | null) | undefined
  _jobId: string
  createdAt?: (string | null) | undefined
  updatedAt?: (string | null) | undefined
  actor?: { data: string | null; type: {} } | undefined
  subscriber?:
    | {
        _id?: string | undefined
        firstName?: string | undefined
        lastName?: string | undefined
        avatar?: string | undefined
        subscriberId: string
      }
    | undefined
  transactionId: string
  templateIdentifier?: (string | null) | undefined
  providerId?: (string | null) | undefined
  content: string
  subject?: (string | null) | undefined
  channel: {}
  read: boolean
  seen: boolean
  archived: boolean
  deviceTokens?: (string[] | null) | undefined
  cta: {
    type?: {} | undefined
    data?: { url?: string | undefined } | undefined
    action?:
      | {
          status?: {} | undefined
          buttons?: MessageButton[] | undefined
          result?:
            | { payload?: { [x: string]: unknown } | undefined; type?: {} | undefined }
            | undefined
        }
      | undefined
  }
  status: 'sent' | 'error' | 'warning'
  payload?: { [x: string]: unknown } | undefined
  data?: ({ [x: string]: unknown } | null) | undefined
  overrides?: { [x: string]: unknown } | undefined
  tags?: (string[] | null) | undefined
}
type FeedResponseDto = {
  totalCount?: number | undefined
  hasMore: boolean
  data: NotificationFeedItemDto[]
  pageSize: number
  page: number
}
type UnseenCountResponse = { count: number }
type MessageMarkAsRequestDto = {
  messageId: string | string[]
  markAs: 'read' | 'seen' | 'unread' | 'unseen'
}
type SubscriberPreferenceChannels = {
  email?: boolean | undefined
  sms?: boolean | undefined
  in_app?: boolean | undefined
  chat?: boolean | undefined
  push?: boolean | undefined
  tool?: boolean | undefined
}
type DigestRegularMetadata = {
  amount?: number | undefined
  unit?: 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | undefined
  digestKey?: string | undefined
  type: 'regular' | 'backoff'
  backoff?: boolean | undefined
  backoffAmount?: number | undefined
  backoffUnit?: 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | undefined
  updateMode?: boolean | undefined
}
type TimedConfig = {
  atTime?: string | undefined
  weekDays?:
    | ('monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday')[]
    | undefined
  monthDays?: string[] | undefined
  ordinal?: '1' | '2' | '3' | '4' | '5' | 'last' | undefined
  ordinalValue?:
    | 'day'
    | 'weekday'
    | 'weekend'
    | 'sunday'
    | 'monday'
    | 'tuesday'
    | 'wednesday'
    | 'thursday'
    | 'friday'
    | 'saturday'
    | undefined
  monthlyType?: 'each' | 'on' | undefined
}
type DigestTimedMetadata = {
  amount?: number | undefined
  unit?: 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | undefined
  digestKey?: string | undefined
  type: 'timed'
  timed?: TimedConfig | undefined
}
type DelayRegularMetadata = {
  amount?: number | undefined
  unit?: 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | undefined
  type: 'regular'
}
type DelayScheduledMetadata = { type: 'scheduled'; delayPath: string }
type NotificationStepData = {
  _id?: string | undefined
  uuid?: string | undefined
  name?: string | undefined
  _templateId?: string | undefined
  active?: boolean | undefined
  shouldStopOnFail?: boolean | undefined
  template?: {} | undefined
  filters?: StepFilterDto[] | undefined
  _parentId?: string | undefined
  metadata?:
    | DigestRegularMetadata
    | DigestTimedMetadata
    | DelayRegularMetadata
    | DelayScheduledMetadata
    | undefined
  replyCallback?: { active?: boolean | undefined; url?: string | undefined } | undefined
}
type NotificationStepDto = {
  _id?: string | undefined
  uuid?: string | undefined
  name?: string | undefined
  _templateId?: string | undefined
  active?: boolean | undefined
  shouldStopOnFail?: boolean | undefined
  template?: {} | undefined
  filters?: StepFilterDto[] | undefined
  _parentId?: string | undefined
  metadata?:
    | DigestRegularMetadata
    | DigestTimedMetadata
    | DelayRegularMetadata
    | DelayScheduledMetadata
    | undefined
  replyCallback?: { active?: boolean | undefined; url?: string | undefined } | undefined
  variants?: NotificationStepData[] | undefined
}
type NotificationTrigger = {
  type: 'event'
  identifier: string
  variables: NotificationTriggerVariable[]
  subscriberVariables?: NotificationTriggerVariable[] | undefined
}
type NotificationGroup = {
  _id?: string | undefined
  name: string
  _environmentId: string
  _organizationId: string
  _parentId?: string | undefined
}
type EmailBlock = {
  type: {}
  content: string
  url?: string | undefined
  styles?: { textAlign: {} } | undefined
}
type MessageResponseDto = {
  _id?: string | undefined
  _templateId?: (string | null) | undefined
  _environmentId: string
  _messageTemplateId?: (string | null) | undefined
  _organizationId: string
  _notificationId: string
  _subscriberId: string
  subscriber?:
    | {
        _id?: string | undefined
        firstName?: (string | null) | undefined
        lastName?: (string | null) | undefined
        email?: (string | null) | undefined
        phone?: (string | null) | undefined
        avatar?: (string | null) | undefined
        locale?: (string | null) | undefined
        channels?: ChannelSettingsDto[] | undefined
        topics?: string[] | undefined
        isOnline?: (boolean | null) | undefined
        lastOnlineAt?: (string | null) | undefined
        __v?: number | undefined
        data?: ({ [x: string]: unknown } | null) | undefined
        timezone?: (string | null) | undefined
        subscriberId: string
        _organizationId: string
        _environmentId: string
        deleted: boolean
        createdAt: string
        updatedAt: string
      }
    | undefined
  template?:
    | {
        _id?: string | undefined
        name: string
        description: string
        active: boolean
        draft: boolean
        preferenceSettings: SubscriberPreferenceChannels
        critical: boolean
        tags: string[]
        steps: NotificationStepDto[]
        _organizationId: string
        _creatorId: string
        _environmentId: string
        triggers: NotificationTrigger[]
        _notificationGroupId: string
        _parentId?: string | undefined
        deleted: boolean
        deletedAt: string
        deletedBy: string
        notificationGroup?: NotificationGroup | undefined
        data?: { [x: string]: unknown } | undefined
        workflowIntegrationStatus?: { [x: string]: unknown } | undefined
      }
    | undefined
  templateIdentifier?: string | undefined
  createdAt: string
  deliveredAt?: string[] | undefined
  lastSeenDate?: string | undefined
  lastReadDate?: string | undefined
  content?: EmailBlock[] | string | undefined
  transactionId: string
  subject?: string | undefined
  channel: {}
  read: boolean
  seen: boolean
  snoozedUntil?: string | undefined
  email?: string | undefined
  phone?: string | undefined
  directWebhookUrl?: string | undefined
  providerId?: string | undefined
  deviceTokens?: string[] | undefined
  title?: string | undefined
  cta: {
    type?: {} | undefined
    data?: { url?: string | undefined } | undefined
    action?:
      | {
          status?: {} | undefined
          buttons?: MessageButton[] | undefined
          result?:
            | { payload?: { [x: string]: unknown } | undefined; type?: {} | undefined }
            | undefined
        }
      | undefined
  }
  _feedId?: (string | null) | undefined
  status: {}
  errorId?: string | undefined
  errorText?: string | undefined
  payload?: { [x: string]: unknown } | undefined
  overrides?: { [x: string]: unknown } | undefined
  contextKeys?: string[] | undefined
}
type MarkAllMessageAsRequestDto = {
  feedIdentifier?: string | string[] | undefined
  markAs: 'read' | 'seen' | 'unread' | 'unseen'
}
type MarkMessageActionAsSeenDto = {
  status: 'pending' | 'done'
  payload?: { [x: string]: unknown } | undefined
}
type ListSubscribersResponseDto = {
  data: SubscriberResponseDto[]
  next: string | null
  previous: string | null
  totalCount: number
  totalCountCapped: boolean
}
type PatchSubscriberRequestDto = {
  firstName?: (string | null) | undefined
  lastName?: (string | null) | undefined
  email?: (string | null) | undefined
  phone?: (string | null) | undefined
  avatar?: (string | null) | undefined
  locale?: (string | null) | undefined
  timezone?: (string | null) | undefined
  data?: ({ [x: string]: unknown } | null) | undefined
}
type RemoveSubscriberResponseDto = { acknowledged: boolean; status: string }
type TimeRangeDto = { start: string; end: string }
type SubscriberPreferenceOverrideDto = { channel: {}; source: {} }
type SubscriberWorkflowPreferenceDto = {
  enabled: boolean
  channels: {
    email?: boolean | undefined
    sms?: boolean | undefined
    in_app?: boolean | undefined
    chat?: boolean | undefined
    push?: boolean | undefined
    tool?: boolean | undefined
  }
  overrides: SubscriberPreferenceOverrideDto[]
  workflow: { slug: string; identifier: string; name: string; updatedAt?: string | undefined }
  updatedAt?: string | undefined
}
type GetSubscriberPreferencesDto = {
  global: {
    enabled: boolean
    channels: {
      email?: boolean | undefined
      sms?: boolean | undefined
      in_app?: boolean | undefined
      chat?: boolean | undefined
      push?: boolean | undefined
      tool?: boolean | undefined
    }
    schedule?:
      | {
          isEnabled: boolean
          weeklySchedule?:
            | {
                monday?: { isEnabled: boolean; hours?: TimeRangeDto[] | undefined } | undefined
                tuesday?: { isEnabled: boolean; hours?: TimeRangeDto[] | undefined } | undefined
                wednesday?: { isEnabled: boolean; hours?: TimeRangeDto[] | undefined } | undefined
                thursday?: { isEnabled: boolean; hours?: TimeRangeDto[] | undefined } | undefined
                friday?: { isEnabled: boolean; hours?: TimeRangeDto[] | undefined } | undefined
                saturday?: { isEnabled: boolean; hours?: TimeRangeDto[] | undefined } | undefined
                sunday?: { isEnabled: boolean; hours?: TimeRangeDto[] | undefined } | undefined
              }
            | undefined
        }
      | undefined
  }
  workflows: SubscriberWorkflowPreferenceDto[]
}
type PatchSubscriberPreferencesDto = {
  channels?:
    | {
        email?: boolean | undefined
        sms?: boolean | undefined
        in_app?: boolean | undefined
        push?: boolean | undefined
        chat?: boolean | undefined
        tool?: boolean | undefined
      }
    | undefined
  workflowId?: string | undefined
  schedule?:
    | {
        isEnabled: boolean
        weeklySchedule?:
          | {
              monday?: { isEnabled: boolean; hours?: TimeRangeDto[] | undefined } | undefined
              tuesday?: { isEnabled: boolean; hours?: TimeRangeDto[] | undefined } | undefined
              wednesday?: { isEnabled: boolean; hours?: TimeRangeDto[] | undefined } | undefined
              thursday?: { isEnabled: boolean; hours?: TimeRangeDto[] | undefined } | undefined
              friday?: { isEnabled: boolean; hours?: TimeRangeDto[] | undefined } | undefined
              saturday?: { isEnabled: boolean; hours?: TimeRangeDto[] | undefined } | undefined
              sunday?: { isEnabled: boolean; hours?: TimeRangeDto[] | undefined } | undefined
            }
          | undefined
      }
    | undefined
  context?:
    | { [x: string]: string | { id: string; data?: { [x: string]: unknown } | undefined } }
    | undefined
}
type BulkUpdateSubscriberPreferenceItemDto = {
  channels: {
    email?: boolean | undefined
    sms?: boolean | undefined
    in_app?: boolean | undefined
    push?: boolean | undefined
    chat?: boolean | undefined
    tool?: boolean | undefined
  }
  workflowId: string
}
type BulkUpdateSubscriberPreferencesDto = {
  preferences: BulkUpdateSubscriberPreferenceItemDto[]
  context?:
    | { [x: string]: string | { id: string; data?: { [x: string]: unknown } | undefined } }
    | undefined
}
type GetPreferencesResponseDto = {
  level: {}
  workflow?:
    | {
        id: string
        identifier: string
        name: string
        critical: boolean
        tags?: string[] | undefined
        data?: { [x: string]: unknown } | undefined
        severity: {}
      }
    | undefined
  enabled: boolean
  channels: {
    email?: boolean | undefined
    sms?: boolean | undefined
    in_app?: boolean | undefined
    chat?: boolean | undefined
    push?: boolean | undefined
    tool?: boolean | undefined
  }
  condition?: ({ [x: string]: unknown } | null) | undefined
}
type SubscriptionPreferenceDto = {
  subscriptionId: string
  workflow?:
    | {
        id: string
        identifier: string
        name: string
        critical: boolean
        tags?: string[] | undefined
        data?: { [x: string]: unknown } | undefined
        severity: {}
      }
    | undefined
  enabled: boolean
  condition?: { [x: string]: unknown } | undefined
}
type TopicSubscriptionResponseDto = {
  _id: string
  identifier: string
  createdAt: string
  topic: {
    _id: string
    key: string
    name?: string | undefined
    data?: { [x: string]: unknown } | undefined
    createdAt?: string | undefined
    updatedAt?: string | undefined
  }
  subscriber: {
    _id: string
    subscriberId: string
    avatar?: (string | null) | undefined
    firstName?: (string | null) | undefined
    lastName?: (string | null) | undefined
    email?: (string | null) | undefined
  }
  contextKeys?: string[] | undefined
  preferences?: SubscriptionPreferenceDto[] | undefined
}
type ListTopicSubscriptionsResponseDto = {
  data: TopicSubscriptionResponseDto[]
  next: string | null
  previous: string | null
  totalCount: number
  totalCountCapped: boolean
}
type SubscriberTokenScopeEnum = 'channels:shared'
type CreateSubscriberTokenRequestDto = {
  context?:
    | { [x: string]: string | { id: string; data?: { [x: string]: unknown } | undefined } }
    | undefined
  subscriber?:
    | {
        firstName?: (string | null) | undefined
        lastName?: (string | null) | undefined
        email?: (string | null) | undefined
        phone?: (string | null) | undefined
        avatar?: (string | null) | undefined
        locale?: (string | null) | undefined
        timezone?: (string | null) | undefined
        data?: ({ [x: string]: unknown } | null) | undefined
      }
    | undefined
  scope?: SubscriberTokenScopeEnum[] | undefined
  expiresIn?: number | undefined
}
type CreateSubscriberTokenResponseDto = { token: string; expiresAt: string }
type InboxNotificationDto = {
  id: string
  transactionId: string
  subject?: string | undefined
  body: string
  to: {
    id: string
    firstName?: string | undefined
    lastName?: string | undefined
    avatar?: string | undefined
    subscriberId: string
  }
  isRead: boolean
  isSeen: boolean
  isArchived: boolean
  isSnoozed: boolean
  snoozedUntil?: (string | null) | undefined
  deliveredAt?: string[] | undefined
  createdAt: string
  readAt?: (string | null) | undefined
  firstSeenAt?: (string | null) | undefined
  archivedAt?: (string | null) | undefined
  avatar?: string | undefined
  primaryAction?:
    | {
        label: string
        isCompleted: boolean
        redirect?:
          | {
              url: string
              target?: '_self' | '_blank' | '_parent' | '_top' | '_unfencedTop' | undefined
            }
          | undefined
      }
    | undefined
  secondaryAction?:
    | {
        label: string
        isCompleted: boolean
        redirect?:
          | {
              url: string
              target?: '_self' | '_blank' | '_parent' | '_top' | '_unfencedTop' | undefined
            }
          | undefined
      }
    | undefined
  channelType: {}
  tags?: string[] | undefined
  data?: { [x: string]: unknown } | undefined
  redirect?:
    | { url: string; target?: '_self' | '_blank' | '_parent' | '_top' | '_unfencedTop' | undefined }
    | undefined
  workflow?:
    | {
        id: string
        identifier: string
        name: string
        critical: boolean
        tags?: string[] | undefined
        data?: { [x: string]: unknown } | undefined
        severity: {}
      }
    | undefined
  severity: {}
}
type GetSubscriberNotificationsResponseDto = {
  data: InboxNotificationDto[]
  hasMore: boolean
  filter: { [x: string]: unknown }
}
type GetSubscriberNotificationsCountResponseDto = {
  count: number
  filter: { [x: string]: unknown }
}
type SnoozeSubscriberNotificationDto = { snoozeUntil: string }
type MarkSubscriberNotificationsAsSeenDto = {
  notificationIds?: string[] | undefined
  tags?: { [x: string]: unknown } | undefined
  data?: string | undefined
  contextKeys?: string[] | undefined
}
type UpdateAllSubscriberNotificationsDto = {
  tags?: { [x: string]: unknown } | undefined
  data?: string | undefined
  contextKeys?: string[] | undefined
}
type CreateLayoutDto = {
  layoutId: string
  name: string
  isTranslationEnabled?: boolean | undefined
  __source?: {} | undefined
}
type UiSchemaProperty = {
  placeholder?:
    | string
    | number
    | boolean
    | { [x: string]: unknown }
    | (string | number | boolean | { [x: string]: unknown })[]
    | undefined
  component: {}
  properties?: { [x: string]: UiSchemaProperty } | undefined
}
type LayoutResponseDto = {
  _id: string
  layoutId: string
  slug: string
  name: string
  isDefault: boolean
  isTranslationEnabled: boolean
  updatedAt: string
  updatedBy?:
    | {
        _id: string
        firstName?: (string | null) | undefined
        lastName?: (string | null) | undefined
        externalId?: (string | null) | undefined
      }
    | undefined
  createdAt: string
  origin: {}
  type: {}
  variables?: ({ [x: string]: unknown } | null) | undefined
  controls: {
    dataSchema?: { [x: string]: unknown } | undefined
    uiSchema?:
      | { group?: {} | undefined; properties?: { [x: string]: UiSchemaProperty } | undefined }
      | undefined
    values?: { [x: string]: unknown } | undefined
  }
}
type DirectionEnum = 'ASC' | 'DESC'
type LayoutResponseDtoSortField = 'createdAt' | 'updatedAt' | 'name'
type ListLayoutResponseDto = { layouts: LayoutResponseDto[]; totalCount: number }
type UpdateLayoutDto = {
  name: string
  isTranslationEnabled?: boolean | undefined
  controlValues?: { email?: { body: string; editorType: 'html' | 'block' } | undefined } | undefined
}
type DuplicateLayoutDto = {
  name: string
  layoutId?: string | undefined
  isTranslationEnabled?: boolean | undefined
}
type LayoutPreviewRequestDto = {
  controlValues?: { [x: string]: unknown } | undefined
  previewPayload?:
    | {
        subscriber?:
          | {
              _id?: string | undefined
              firstName?: (string | null) | undefined
              lastName?: (string | null) | undefined
              email?: (string | null) | undefined
              phone?: (string | null) | undefined
              avatar?: (string | null) | undefined
              locale?: (string | null) | undefined
              channels?: ChannelSettingsDto[] | undefined
              topics?: string[] | undefined
              isOnline?: (boolean | null) | undefined
              lastOnlineAt?: (string | null) | undefined
              __v?: number | undefined
              data?: ({ [x: string]: unknown } | null) | undefined
              timezone?: (string | null) | undefined
            }
          | undefined
      }
    | undefined
}
type EmailLayoutRenderOutput = { body: string }
type GenerateLayoutPreviewResponseDto = {
  previewPayloadExample: {
    subscriber?:
      | {
          _id?: string | undefined
          firstName?: (string | null) | undefined
          lastName?: (string | null) | undefined
          email?: (string | null) | undefined
          phone?: (string | null) | undefined
          avatar?: (string | null) | undefined
          locale?: (string | null) | undefined
          channels?: ChannelSettingsDto[] | undefined
          topics?: string[] | undefined
          isOnline?: (boolean | null) | undefined
          lastOnlineAt?: (string | null) | undefined
          __v?: number | undefined
          data?: ({ [x: string]: unknown } | null) | undefined
          timezone?: (string | null) | undefined
        }
      | undefined
  }
  schema?: ({ [x: string]: unknown } | null) | undefined
  result: { type?: 'email' | undefined; preview?: EmailLayoutRenderOutput | undefined }
}
type WorkflowInfoDto = { name: string; workflowId: string }
type GetLayoutUsageResponseDto = { workflows: WorkflowInfoDto[] }
type MessagesResponseDto = {
  totalCount?: number | undefined
  hasMore: boolean
  data: MessageResponseDto[]
  pageSize: number
  page: number
}
type DeleteMessageResponseDto = { acknowledged: boolean; status: 'deleted' }
type TopicSubscriberDto = {
  _organizationId: string
  _environmentId: string
  _subscriberId: string
  _topicId: string
  topicKey: string
  externalSubscriberId: string
}
type TopicResponseDto = {
  _id: string
  key: string
  name?: string | undefined
  data?: { [x: string]: unknown } | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
}
type ListTopicsResponseDto = {
  data: TopicResponseDto[]
  next: string | null
  previous: string | null
  totalCount: number
  totalCountCapped: boolean
}
type CreateUpdateTopicRequestDto = {
  key: string
  name?: string | undefined
  data?: ({ [x: string]: unknown } | null) | undefined
}
type UpdateTopicRequestDto = {
  name?: string | undefined
  data?: ({ [x: string]: unknown } | null) | undefined
}
type DeleteTopicResponseDto = { acknowledged: boolean }
type TopicSubscriberIdentifierDto = {
  identifier: string
  subscriberId: string
  name?: string | undefined
}
type WorkflowPreferenceRequestDto = {
  enabled?: boolean | undefined
  condition?: { [x: string]: unknown } | undefined
  workflowId: string
}
type GroupPreferenceFilterDto = {
  enabled?: boolean | undefined
  condition?: { [x: string]: unknown } | undefined
  filter: { workflowIds?: string[] | undefined; tags?: string[] | undefined }
}
type CreateTopicSubscriptionsRequestDto = {
  subscriberIds?: string[] | undefined
  subscriptions?: (string | TopicSubscriberIdentifierDto)[] | undefined
  name?: string | undefined
  context?:
    | { [x: string]: string | { id: string; data?: { [x: string]: unknown } | undefined } }
    | undefined
  preferences?: (string | WorkflowPreferenceRequestDto | GroupPreferenceFilterDto)[] | undefined
}
type SubscriptionResponseDto = {
  _id: string
  identifier?: string | undefined
  name?: string | undefined
  topic: {
    _id: string
    key: string
    name?: string | undefined
    data?: { [x: string]: unknown } | undefined
  }
  subscriber: {
    _id: string
    subscriberId: string
    avatar?: (string | null) | undefined
    firstName?: (string | null) | undefined
    lastName?: (string | null) | undefined
    email?: (string | null) | undefined
  }
  preferences?: SubscriptionPreferenceDto[] | undefined
  contextKeys?: string[] | undefined
  createdAt: string
  updatedAt: string
}
type SubscriptionErrorDto = { subscriberId: string; code: string; message: string }
type CreateSubscriptionsResponseDto = {
  data: SubscriptionResponseDto[]
  meta: { totalCount: number; successful: number; failed: number }
  errors?: SubscriptionErrorDto[] | undefined
}
type DeleteTopicSubscriberIdentifierDto = {
  identifier?: string | undefined
  subscriberId?: string | undefined
}
type DeleteTopicSubscriptionsRequestDto = {
  subscriberIds?: string[] | undefined
  subscriptions?: (string | DeleteTopicSubscriberIdentifierDto)[] | undefined
}
type SubscriptionDto = {
  _id: string
  identifier?: string | undefined
  topic: {
    _id: string
    key: string
    name?: string | undefined
    data?: { [x: string]: unknown } | undefined
  }
  subscriber: {
    _id: string
    subscriberId: string
    avatar?: (string | null) | undefined
    firstName?: (string | null) | undefined
    lastName?: (string | null) | undefined
    email?: (string | null) | undefined
  }
  contextKeys?: string[] | undefined
  createdAt: string
  updatedAt: string
}
type SubscriptionsDeleteErrorDto = { subscriberId: string; code: string; message: string }
type DeleteTopicSubscriptionsResponseDto = {
  data: SubscriptionDto[]
  meta: { totalCount: number; successful: number; failed: number }
  errors?: SubscriptionsDeleteErrorDto[] | undefined
}
type SubscriptionDetailsResponseDto = {
  id: string
  identifier?: string | undefined
  name?: string | undefined
  preferences?: SubscriptionPreferenceDto[] | undefined
  contextKeys?: string[] | undefined
}
type UpdateTopicSubscriptionRequestDto = {
  name?: string | undefined
  preferences?: (string | WorkflowPreferenceRequestDto | GroupPreferenceFilterDto)[] | undefined
}
type EnvironmentVariableValueResponseDto = { _environmentId: string; value: string }
type EnvironmentVariableResponseDto = {
  _id: string
  _organizationId: string
  key: string
  type: 'string'
  isSecret: boolean
  values: EnvironmentVariableValueResponseDto[]
  createdAt: string
  updatedAt: string
}
type EnvironmentVariableValueDto = { _environmentId: string; value: string }
type CreateEnvironmentVariableRequestDto = {
  key: string
  type?: 'string' | undefined
  isSecret?: boolean | undefined
  values?: EnvironmentVariableValueDto[] | undefined
}
type EnvironmentVariableWorkflowInfoDto = { name: string; workflowId: string }
type GetEnvironmentVariableUsageResponseDto = { workflows: EnvironmentVariableWorkflowInfoDto[] }
type UpdateEnvironmentVariableRequestDto = {
  key?: string | undefined
  type?: 'string' | undefined
  isSecret?: boolean | undefined
  values?: EnvironmentVariableValueDto[] | undefined
}
type InAppControlDto = {
  skip?: { [x: string]: unknown } | undefined
  body?: string | undefined
  subject?: string | undefined
  avatar?: string | undefined
  primaryAction?:
    | {
        label?: string | undefined
        redirect?:
          | {
              url: string
              target?: '_self' | '_blank' | '_parent' | '_top' | '_unfencedTop' | undefined
            }
          | undefined
      }
    | undefined
  secondaryAction?:
    | {
        label?: string | undefined
        redirect?:
          | {
              url: string
              target?: '_self' | '_blank' | '_parent' | '_top' | '_unfencedTop' | undefined
            }
          | undefined
      }
    | undefined
  redirect?:
    | { url: string; target?: '_self' | '_blank' | '_parent' | '_top' | '_unfencedTop' | undefined }
    | undefined
  disableOutputSanitization?: boolean | undefined
  data?: { [x: string]: unknown } | undefined
}
type InAppStepUpsertDto = {
  _id?: string | undefined
  stepId?: string | undefined
  name: string
  type: {}
  controlValues?: InAppControlDto | { [x: string]: unknown } | undefined
}
type EmailControlDto = {
  skip?: { [x: string]: unknown } | undefined
  subject: string
  body: string
  editorType?: 'block' | 'html' | undefined
  disableOutputSanitization?: boolean | undefined
  layoutId?: (string | null) | undefined
  from?: { email?: string | undefined; name?: string | undefined } | undefined
  useProviderDefaults?: boolean | undefined
  replyTo?: string | undefined
  preheader?: string | undefined
}
type EmailStepUpsertDto = {
  _id?: string | undefined
  stepId?: string | undefined
  name: string
  type: {}
  controlValues?: EmailControlDto | { [x: string]: unknown } | undefined
}
type SmsControlDto = { skip?: { [x: string]: unknown } | undefined; body?: string | undefined }
type SmsStepUpsertDto = {
  _id?: string | undefined
  stepId?: string | undefined
  name: string
  type: {}
  controlValues?: SmsControlDto | { [x: string]: unknown } | undefined
}
type PushControlDto = {
  skip?: { [x: string]: unknown } | undefined
  subject?: string | undefined
  body?: string | undefined
}
type PushStepUpsertDto = {
  _id?: string | undefined
  stepId?: string | undefined
  name: string
  type: {}
  controlValues?: PushControlDto | { [x: string]: unknown } | undefined
}
type ChatControlDto = {
  skip?: { [x: string]: unknown } | undefined
  body?: string | undefined
  editorType?: 'block' | 'text' | undefined
}
type ChatStepUpsertDto = {
  _id?: string | undefined
  stepId?: string | undefined
  name: string
  type: {}
  controlValues?: ChatControlDto | { [x: string]: unknown } | undefined
  providerOverrides?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
  integrationOverrides?:
    | ({ [x: string]: { [x: string]: { [x: string]: unknown } } } | null)
    | undefined
}
type DelayControlDto = {
  skip?: { [x: string]: unknown } | undefined
  type: 'regular' | 'timed'
  amount?: number | undefined
  unit?: 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | undefined
  cron?: string | undefined
}
type DelayStepUpsertDto = {
  _id?: string | undefined
  stepId?: string | undefined
  name: string
  type: {}
  controlValues?: DelayControlDto | { [x: string]: unknown } | undefined
}
type DigestControlDto = {
  skip?: { [x: string]: unknown } | undefined
  type?: 'regular' | 'timed' | undefined
  amount?: number | undefined
  unit?: 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | undefined
  lookBackWindow?:
    | { amount: number; unit: 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' }
    | undefined
  cron?: string | undefined
  digestKey?: string | undefined
}
type DigestStepUpsertDto = {
  _id?: string | undefined
  stepId?: string | undefined
  name: string
  type: {}
  controlValues?: DigestControlDto | { [x: string]: unknown } | undefined
}
type ThrottleControlDto = {
  skip?: { [x: string]: unknown } | undefined
  type: 'fixed' | 'dynamic'
  amount?: number | undefined
  unit?: 'minutes' | 'hours' | 'days' | undefined
  dynamicKey?: string | undefined
  threshold?: number | undefined
  throttleKey?: string | undefined
}
type ThrottleStepUpsertDto = {
  _id?: string | undefined
  stepId?: string | undefined
  name: string
  type: {}
  controlValues?: ThrottleControlDto | { [x: string]: unknown } | undefined
}
type ToolControlDto = { skip?: { [x: string]: unknown } | undefined; body?: string | undefined }
type ToolStepUpsertDto = {
  _id?: string | undefined
  stepId?: string | undefined
  name: string
  type: {}
  controlValues?: ToolControlDto | { [x: string]: unknown } | undefined
  providerOverrides?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
  integrationOverrides?:
    | ({ [x: string]: { [x: string]: { [x: string]: unknown } } } | null)
    | undefined
}
type CustomControlDto = { custom?: { [x: string]: unknown } | undefined }
type CustomStepUpsertDto = {
  _id?: string | undefined
  stepId?: string | undefined
  name: string
  type: {}
  controlValues?: CustomControlDto | { [x: string]: unknown } | undefined
}
type HttpRequestKeyValuePairDto = { key: string; value: string }
type HttpRequestControlDto = {
  method: {}
  url: string
  headers?: HttpRequestKeyValuePairDto[] | undefined
  body?: string | HttpRequestKeyValuePairDto[] | undefined
  responseBodySchema?: { [x: string]: unknown } | undefined
  enforceSchemaValidation?: boolean | undefined
  continueOnFailure?: boolean | undefined
}
type HttpRequestStepUpsertDto = {
  _id?: string | undefined
  stepId?: string | undefined
  name: string
  type: {}
  controlValues?: HttpRequestControlDto | { [x: string]: unknown } | undefined
}
type WorkflowPreferenceDto = {
  enabled: boolean
  readOnly: boolean
  condition?: { [x: string]: unknown } | undefined
}
type ChannelPreferenceDto = { enabled: boolean }
type WorkflowPreferencesDto = {
  all: WorkflowPreferenceDto
  channels: { [x: string]: ChannelPreferenceDto }
}
type CreateWorkflowDto = {
  name: string
  description?: string | undefined
  tags?: string[] | undefined
  active?: boolean | undefined
  validatePayload?: boolean | undefined
  payloadSchema?: ({ [x: string]: unknown } | null) | undefined
  isTranslationEnabled?: boolean | undefined
  agent?:
    | {
        identifier: string
        providers?: { [x: string]: { replyTo?: string | undefined } } | undefined
      }
    | undefined
  workflowId: string
  steps: (
    | InAppStepUpsertDto
    | EmailStepUpsertDto
    | SmsStepUpsertDto
    | PushStepUpsertDto
    | ChatStepUpsertDto
    | DelayStepUpsertDto
    | DigestStepUpsertDto
    | ThrottleStepUpsertDto
    | ToolStepUpsertDto
    | CustomStepUpsertDto
    | HttpRequestStepUpsertDto
  )[]
  __source?: {} | undefined
  preferences?:
    | {
        user?: WorkflowPreferencesDto | undefined
        workflow?:
          | { all: WorkflowPreferenceDto; channels: { [x: string]: ChannelPreferenceDto } }
          | undefined
      }
    | undefined
  severity?: {} | undefined
}
type StepContentIssueDto = {
  issueType: {}
  variableName?: string | undefined
  message: string
  severity?: {} | undefined
}
type StepIntegrationIssue = {
  issueType: {}
  variableName?: string | undefined
  message: string
  severity?: {} | undefined
}
type InAppStepResponseDto = {
  controls: {
    dataSchema?: { [x: string]: unknown } | undefined
    uiSchema?:
      | { group?: {} | undefined; properties?: { [x: string]: UiSchemaProperty } | undefined }
      | undefined
    values?:
      | {
          skip?: { [x: string]: unknown } | undefined
          body?: string | undefined
          subject?: string | undefined
          avatar?: string | undefined
          primaryAction?:
            | {
                label?: string | undefined
                redirect?:
                  | {
                      url: string
                      target?: '_self' | '_blank' | '_parent' | '_top' | '_unfencedTop' | undefined
                    }
                  | undefined
              }
            | undefined
          secondaryAction?:
            | {
                label?: string | undefined
                redirect?:
                  | {
                      url: string
                      target?: '_self' | '_blank' | '_parent' | '_top' | '_unfencedTop' | undefined
                    }
                  | undefined
              }
            | undefined
          redirect?:
            | {
                url: string
                target?: '_self' | '_blank' | '_parent' | '_top' | '_unfencedTop' | undefined
              }
            | undefined
          disableOutputSanitization?: boolean | undefined
          data?: { [x: string]: unknown } | undefined
        }
      | undefined
  }
  controlValues?:
    | {
        skip?: { [x: string]: unknown } | undefined
        body?: string | undefined
        subject?: string | undefined
        avatar?: string | undefined
        primaryAction?:
          | {
              label?: string | undefined
              redirect?:
                | {
                    url: string
                    target?: '_self' | '_blank' | '_parent' | '_top' | '_unfencedTop' | undefined
                  }
                | undefined
            }
          | undefined
        secondaryAction?:
          | {
              label?: string | undefined
              redirect?:
                | {
                    url: string
                    target?: '_self' | '_blank' | '_parent' | '_top' | '_unfencedTop' | undefined
                  }
                | undefined
            }
          | undefined
        redirect?:
          | {
              url: string
              target?: '_self' | '_blank' | '_parent' | '_top' | '_unfencedTop' | undefined
            }
          | undefined
        disableOutputSanitization?: boolean | undefined
        data?: { [x: string]: unknown } | undefined
      }
    | undefined
  providerOverrides?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
  integrationOverrides?:
    | ({ [x: string]: { [x: string]: { [x: string]: unknown } } } | null)
    | undefined
  variables: { [x: string]: unknown }
  stepId: string
  _id: string
  name: string
  slug: string
  type: {}
  origin: {}
  workflowId: string
  workflowDatabaseId: string
  issues?:
    | {
        controls?: { [x: string]: StepContentIssueDto[] } | undefined
        integration?: { [x: string]: StepIntegrationIssue[] } | undefined
      }
    | undefined
  stepResolverHash?: string | undefined
}
type EmailStepResponseDto = {
  controls: {
    dataSchema?: { [x: string]: unknown } | undefined
    uiSchema?:
      | { group?: {} | undefined; properties?: { [x: string]: UiSchemaProperty } | undefined }
      | undefined
    values?:
      | {
          skip?: { [x: string]: unknown } | undefined
          subject: string
          body: string
          editorType?: 'block' | 'html' | undefined
          disableOutputSanitization?: boolean | undefined
          layoutId?: (string | null) | undefined
          from?: { email?: string | undefined; name?: string | undefined } | undefined
          useProviderDefaults?: boolean | undefined
          replyTo?: string | undefined
          preheader?: string | undefined
        }
      | undefined
  }
  controlValues?:
    | {
        skip?: { [x: string]: unknown } | undefined
        subject: string
        body: string
        editorType?: 'block' | 'html' | undefined
        disableOutputSanitization?: boolean | undefined
        layoutId?: (string | null) | undefined
        from?: { email?: string | undefined; name?: string | undefined } | undefined
        useProviderDefaults?: boolean | undefined
        replyTo?: string | undefined
        preheader?: string | undefined
      }
    | undefined
  providerOverrides?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
  integrationOverrides?:
    | ({ [x: string]: { [x: string]: { [x: string]: unknown } } } | null)
    | undefined
  variables: { [x: string]: unknown }
  stepId: string
  _id: string
  name: string
  slug: string
  type: {}
  origin: {}
  workflowId: string
  workflowDatabaseId: string
  issues?:
    | {
        controls?: { [x: string]: StepContentIssueDto[] } | undefined
        integration?: { [x: string]: StepIntegrationIssue[] } | undefined
      }
    | undefined
  stepResolverHash?: string | undefined
}
type SmsStepResponseDto = {
  controls: {
    dataSchema?: { [x: string]: unknown } | undefined
    uiSchema?:
      | { group?: {} | undefined; properties?: { [x: string]: UiSchemaProperty } | undefined }
      | undefined
    values?: { skip?: { [x: string]: unknown } | undefined; body?: string | undefined } | undefined
  }
  controlValues?:
    | { skip?: { [x: string]: unknown } | undefined; body?: string | undefined }
    | undefined
  providerOverrides?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
  integrationOverrides?:
    | ({ [x: string]: { [x: string]: { [x: string]: unknown } } } | null)
    | undefined
  variables: { [x: string]: unknown }
  stepId: string
  _id: string
  name: string
  slug: string
  type: {}
  origin: {}
  workflowId: string
  workflowDatabaseId: string
  issues?:
    | {
        controls?: { [x: string]: StepContentIssueDto[] } | undefined
        integration?: { [x: string]: StepIntegrationIssue[] } | undefined
      }
    | undefined
  stepResolverHash?: string | undefined
}
type PushStepResponseDto = {
  controls: {
    dataSchema?: { [x: string]: unknown } | undefined
    uiSchema?:
      | { group?: {} | undefined; properties?: { [x: string]: UiSchemaProperty } | undefined }
      | undefined
    values?:
      | {
          skip?: { [x: string]: unknown } | undefined
          subject?: string | undefined
          body?: string | undefined
        }
      | undefined
  }
  controlValues?:
    | {
        skip?: { [x: string]: unknown } | undefined
        subject?: string | undefined
        body?: string | undefined
      }
    | undefined
  providerOverrides?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
  integrationOverrides?:
    | ({ [x: string]: { [x: string]: { [x: string]: unknown } } } | null)
    | undefined
  variables: { [x: string]: unknown }
  stepId: string
  _id: string
  name: string
  slug: string
  type: {}
  origin: {}
  workflowId: string
  workflowDatabaseId: string
  issues?:
    | {
        controls?: { [x: string]: StepContentIssueDto[] } | undefined
        integration?: { [x: string]: StepIntegrationIssue[] } | undefined
      }
    | undefined
  stepResolverHash?: string | undefined
}
type ChatStepResponseDto = {
  controls: {
    dataSchema?: { [x: string]: unknown } | undefined
    uiSchema?:
      | { group?: {} | undefined; properties?: { [x: string]: UiSchemaProperty } | undefined }
      | undefined
    values?:
      | {
          skip?: { [x: string]: unknown } | undefined
          body?: string | undefined
          editorType?: 'block' | 'text' | undefined
        }
      | undefined
  }
  controlValues?:
    | {
        skip?: { [x: string]: unknown } | undefined
        body?: string | undefined
        editorType?: 'block' | 'text' | undefined
      }
    | undefined
  providerOverrides?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
  integrationOverrides?:
    | ({ [x: string]: { [x: string]: { [x: string]: unknown } } } | null)
    | undefined
  variables: { [x: string]: unknown }
  stepId: string
  _id: string
  name: string
  slug: string
  type: {}
  origin: {}
  workflowId: string
  workflowDatabaseId: string
  issues?:
    | {
        controls?: { [x: string]: StepContentIssueDto[] } | undefined
        integration?: { [x: string]: StepIntegrationIssue[] } | undefined
      }
    | undefined
  stepResolverHash?: string | undefined
}
type DelayStepResponseDto = {
  controls: {
    dataSchema?: { [x: string]: unknown } | undefined
    uiSchema?:
      | { group?: {} | undefined; properties?: { [x: string]: UiSchemaProperty } | undefined }
      | undefined
    values?:
      | {
          skip?: { [x: string]: unknown } | undefined
          type: 'regular' | 'timed'
          amount?: number | undefined
          unit?: 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | undefined
          cron?: string | undefined
        }
      | undefined
  }
  controlValues?:
    | {
        skip?: { [x: string]: unknown } | undefined
        type: 'regular' | 'timed'
        amount?: number | undefined
        unit?: 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | undefined
        cron?: string | undefined
      }
    | undefined
  providerOverrides?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
  integrationOverrides?:
    | ({ [x: string]: { [x: string]: { [x: string]: unknown } } } | null)
    | undefined
  variables: { [x: string]: unknown }
  stepId: string
  _id: string
  name: string
  slug: string
  type: {}
  origin: {}
  workflowId: string
  workflowDatabaseId: string
  issues?:
    | {
        controls?: { [x: string]: StepContentIssueDto[] } | undefined
        integration?: { [x: string]: StepIntegrationIssue[] } | undefined
      }
    | undefined
  stepResolverHash?: string | undefined
}
type DigestStepResponseDto = {
  controls: {
    dataSchema?: { [x: string]: unknown } | undefined
    uiSchema?:
      | { group?: {} | undefined; properties?: { [x: string]: UiSchemaProperty } | undefined }
      | undefined
    values?:
      | {
          skip?: { [x: string]: unknown } | undefined
          type?: 'regular' | 'timed' | undefined
          amount?: number | undefined
          unit?: 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | undefined
          lookBackWindow?:
            | {
                amount: number
                unit: 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months'
              }
            | undefined
          cron?: string | undefined
          digestKey?: string | undefined
        }
      | undefined
  }
  controlValues?:
    | {
        skip?: { [x: string]: unknown } | undefined
        type?: 'regular' | 'timed' | undefined
        amount?: number | undefined
        unit?: 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | undefined
        lookBackWindow?:
          | { amount: number; unit: 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' }
          | undefined
        cron?: string | undefined
        digestKey?: string | undefined
      }
    | undefined
  providerOverrides?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
  integrationOverrides?:
    | ({ [x: string]: { [x: string]: { [x: string]: unknown } } } | null)
    | undefined
  variables: { [x: string]: unknown }
  stepId: string
  _id: string
  name: string
  slug: string
  type: {}
  origin: {}
  workflowId: string
  workflowDatabaseId: string
  issues?:
    | {
        controls?: { [x: string]: StepContentIssueDto[] } | undefined
        integration?: { [x: string]: StepIntegrationIssue[] } | undefined
      }
    | undefined
  stepResolverHash?: string | undefined
}
type CustomStepResponseDto = {
  controls: {
    dataSchema?: { [x: string]: unknown } | undefined
    uiSchema?:
      | { group?: {} | undefined; properties?: { [x: string]: UiSchemaProperty } | undefined }
      | undefined
    values?: { custom?: { [x: string]: unknown } | undefined } | undefined
  }
  controlValues?: { custom?: { [x: string]: unknown } | undefined } | undefined
  providerOverrides?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
  integrationOverrides?:
    | ({ [x: string]: { [x: string]: { [x: string]: unknown } } } | null)
    | undefined
  variables: { [x: string]: unknown }
  stepId: string
  _id: string
  name: string
  slug: string
  type: {}
  origin: {}
  workflowId: string
  workflowDatabaseId: string
  issues?:
    | {
        controls?: { [x: string]: StepContentIssueDto[] } | undefined
        integration?: { [x: string]: StepIntegrationIssue[] } | undefined
      }
    | undefined
  stepResolverHash?: string | undefined
}
type ThrottleStepResponseDto = {
  controls: {
    dataSchema?: { [x: string]: unknown } | undefined
    uiSchema?:
      | { group?: {} | undefined; properties?: { [x: string]: UiSchemaProperty } | undefined }
      | undefined
    values?:
      | {
          skip?: { [x: string]: unknown } | undefined
          type: 'fixed' | 'dynamic'
          amount?: number | undefined
          unit?: 'minutes' | 'hours' | 'days' | undefined
          dynamicKey?: string | undefined
          threshold?: number | undefined
          throttleKey?: string | undefined
        }
      | undefined
  }
  controlValues?:
    | {
        skip?: { [x: string]: unknown } | undefined
        type: 'fixed' | 'dynamic'
        amount?: number | undefined
        unit?: 'minutes' | 'hours' | 'days' | undefined
        dynamicKey?: string | undefined
        threshold?: number | undefined
        throttleKey?: string | undefined
      }
    | undefined
  providerOverrides?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
  integrationOverrides?:
    | ({ [x: string]: { [x: string]: { [x: string]: unknown } } } | null)
    | undefined
  variables: { [x: string]: unknown }
  stepId: string
  _id: string
  name: string
  slug: string
  type: {}
  origin: {}
  workflowId: string
  workflowDatabaseId: string
  issues?:
    | {
        controls?: { [x: string]: StepContentIssueDto[] } | undefined
        integration?: { [x: string]: StepIntegrationIssue[] } | undefined
      }
    | undefined
  stepResolverHash?: string | undefined
}
type HttpRequestStepResponseDto = {
  controls: {
    dataSchema?: { [x: string]: unknown } | undefined
    uiSchema?:
      | { group?: {} | undefined; properties?: { [x: string]: UiSchemaProperty } | undefined }
      | undefined
    values?:
      | {
          method: {}
          url: string
          headers?: HttpRequestKeyValuePairDto[] | undefined
          body?: string | HttpRequestKeyValuePairDto[] | undefined
          responseBodySchema?: { [x: string]: unknown } | undefined
          enforceSchemaValidation?: boolean | undefined
          continueOnFailure?: boolean | undefined
        }
      | undefined
  }
  controlValues?:
    | {
        method: {}
        url: string
        headers?: HttpRequestKeyValuePairDto[] | undefined
        body?: string | HttpRequestKeyValuePairDto[] | undefined
        responseBodySchema?: { [x: string]: unknown } | undefined
        enforceSchemaValidation?: boolean | undefined
        continueOnFailure?: boolean | undefined
      }
    | undefined
  providerOverrides?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
  integrationOverrides?:
    | ({ [x: string]: { [x: string]: { [x: string]: unknown } } } | null)
    | undefined
  variables: { [x: string]: unknown }
  stepId: string
  _id: string
  name: string
  slug: string
  type: {}
  origin: {}
  workflowId: string
  workflowDatabaseId: string
  issues?:
    | {
        controls?: { [x: string]: StepContentIssueDto[] } | undefined
        integration?: { [x: string]: StepIntegrationIssue[] } | undefined
      }
    | undefined
  stepResolverHash?: string | undefined
}
type ToolStepResponseDto = {
  controls: {
    dataSchema?: { [x: string]: unknown } | undefined
    uiSchema?:
      | { group?: {} | undefined; properties?: { [x: string]: UiSchemaProperty } | undefined }
      | undefined
    values?: { skip?: { [x: string]: unknown } | undefined; body?: string | undefined } | undefined
  }
  controlValues?:
    | { skip?: { [x: string]: unknown } | undefined; body?: string | undefined }
    | undefined
  providerOverrides?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
  integrationOverrides?:
    | ({ [x: string]: { [x: string]: { [x: string]: unknown } } } | null)
    | undefined
  variables: { [x: string]: unknown }
  stepId: string
  _id: string
  name: string
  slug: string
  type: {}
  origin: {}
  workflowId: string
  workflowDatabaseId: string
  issues?:
    | {
        controls?: { [x: string]: StepContentIssueDto[] } | undefined
        integration?: { [x: string]: StepIntegrationIssue[] } | undefined
      }
    | undefined
  stepResolverHash?: string | undefined
}
type RuntimeIssueDto = { issueType: {}; variableName?: string | undefined; message: string }
type WorkflowResponseDto = {
  name: string
  description?: string | undefined
  tags?: string[] | undefined
  active?: boolean | undefined
  validatePayload?: boolean | undefined
  payloadSchema?: ({ [x: string]: unknown } | null) | undefined
  isTranslationEnabled?: boolean | undefined
  agent?:
    | {
        identifier: string
        providers?: { [x: string]: { replyTo?: string | undefined } } | undefined
      }
    | undefined
  _id: string
  workflowId: string
  slug: string
  updatedAt: string
  createdAt: string
  updatedBy?:
    | {
        _id: string
        firstName?: (string | null) | undefined
        lastName?: (string | null) | undefined
        externalId?: (string | null) | undefined
      }
    | undefined
  lastPublishedAt?: (string | null) | undefined
  lastPublishedBy?:
    | {
        _id: string
        firstName?: (string | null) | undefined
        lastName?: (string | null) | undefined
        externalId?: (string | null) | undefined
      }
    | undefined
  steps: (
    | InAppStepResponseDto
    | EmailStepResponseDto
    | SmsStepResponseDto
    | PushStepResponseDto
    | ChatStepResponseDto
    | DelayStepResponseDto
    | DigestStepResponseDto
    | CustomStepResponseDto
    | ThrottleStepResponseDto
    | HttpRequestStepResponseDto
    | ToolStepResponseDto
  )[]
  origin: {}
  preferences: {
    user?:
      | { all: WorkflowPreferenceDto; channels: { [x: string]: ChannelPreferenceDto } }
      | undefined
    default: { all: WorkflowPreferenceDto; channels: { [x: string]: ChannelPreferenceDto } }
  }
  status: {}
  issues?: { [x: string]: RuntimeIssueDto[] } | undefined
  lastTriggeredAt?: (string | null) | undefined
  payloadExample?: ({ [x: string]: unknown } | null) | undefined
  severity: {}
}
type WorkflowResponseDtoSortField = 'createdAt' | 'updatedAt' | 'name' | 'lastTriggeredAt'
type WorkflowStatusEnum = 'ACTIVE' | 'INACTIVE' | 'ERROR'
type StepListResponseDto = {
  slug: string
  type: {}
  issues?:
    | {
        controls?: { [x: string]: StepContentIssueDto[] } | undefined
        integration?: { [x: string]: StepIntegrationIssue[] } | undefined
      }
    | undefined
}
type WorkflowListResponseDto = {
  name: string
  tags?: string[] | undefined
  updatedAt: string
  createdAt: string
  updatedBy?:
    | {
        _id: string
        firstName?: (string | null) | undefined
        lastName?: (string | null) | undefined
        externalId?: (string | null) | undefined
      }
    | undefined
  lastPublishedAt?: (string | null) | undefined
  lastPublishedBy?:
    | {
        _id: string
        firstName?: (string | null) | undefined
        lastName?: (string | null) | undefined
        externalId?: (string | null) | undefined
      }
    | undefined
  _id: string
  workflowId: string
  slug: string
  status: {}
  origin: {}
  lastTriggeredAt?: (string | null) | undefined
  stepTypeOverviews: StepTypeEnum[]
  isTranslationEnabled?: boolean | undefined
  steps: StepListResponseDto[]
}
type ListWorkflowResponse = { workflows: WorkflowListResponseDto[]; totalCount: number }
type SyncWorkflowDto = { targetEnvironmentId: string }
type UpdateWorkflowDto = {
  name: string
  description?: string | undefined
  tags?: string[] | undefined
  active?: boolean | undefined
  validatePayload?: boolean | undefined
  payloadSchema?: ({ [x: string]: unknown } | null) | undefined
  isTranslationEnabled?: boolean | undefined
  agent?:
    | {
        identifier: string
        providers?: { [x: string]: { replyTo?: string | undefined } } | undefined
      }
    | undefined
  workflowId?: string | undefined
  steps: (
    | InAppStepUpsertDto
    | EmailStepUpsertDto
    | SmsStepUpsertDto
    | PushStepUpsertDto
    | ChatStepUpsertDto
    | DelayStepUpsertDto
    | DigestStepUpsertDto
    | ThrottleStepUpsertDto
    | ToolStepUpsertDto
    | CustomStepUpsertDto
    | HttpRequestStepUpsertDto
  )[]
  preferences: {
    user?: WorkflowPreferencesDto | undefined
    workflow?:
      | { all: WorkflowPreferenceDto; channels: { [x: string]: ChannelPreferenceDto } }
      | undefined
  }
  origin?: {} | undefined
  severity?: {} | undefined
}
type PatchWorkflowDto = {
  active?: boolean | undefined
  name?: string | undefined
  description?: string | undefined
  tags?: string[] | undefined
  payloadSchema?: ({ [x: string]: unknown } | null) | undefined
  validatePayload?: boolean | undefined
  isTranslationEnabled?: boolean | undefined
}
type GeneratePreviewRequestDto = {
  controlValues?: { [x: string]: unknown } | undefined
  previewPayload?:
    | {
        subscriber?:
          | {
              _id?: string | undefined
              firstName?: (string | null) | undefined
              lastName?: (string | null) | undefined
              email?: (string | null) | undefined
              phone?: (string | null) | undefined
              avatar?: (string | null) | undefined
              locale?: (string | null) | undefined
              channels?: ChannelSettingsDto[] | undefined
              topics?: string[] | undefined
              isOnline?: (boolean | null) | undefined
              lastOnlineAt?: (string | null) | undefined
              __v?: number | undefined
              data?: ({ [x: string]: unknown } | null) | undefined
              timezone?: (string | null) | undefined
            }
          | undefined
        actor?:
          | {
              _id?: string | undefined
              firstName?: (string | null) | undefined
              lastName?: (string | null) | undefined
              email?: (string | null) | undefined
              phone?: (string | null) | undefined
              avatar?: (string | null) | undefined
              locale?: (string | null) | undefined
              channels?: ChannelSettingsDto[] | undefined
              topics?: string[] | undefined
              isOnline?: (boolean | null) | undefined
              lastOnlineAt?: (string | null) | undefined
              __v?: number | undefined
              data?: ({ [x: string]: unknown } | null) | undefined
              timezone?: (string | null) | undefined
            }
          | undefined
        payload?: { [x: string]: unknown } | undefined
        steps?: { [x: string]: unknown } | undefined
        context?:
          | { [x: string]: string | { id: string; data?: { [x: string]: unknown } | undefined } }
          | undefined
        env?: { [x: string]: unknown } | undefined
      }
    | undefined
}
type EmailRenderOutput = { subject: string; body: string }
type PreviewErrorDto = { title: string; message: string; hint: string }
type InAppRenderOutput = {
  subject?: string | undefined
  body: string
  avatar?: string | undefined
  primaryAction?:
    | {
        label?: string | undefined
        redirect?:
          | {
              url: string
              target?: '_self' | '_blank' | '_parent' | '_top' | '_unfencedTop' | undefined
            }
          | undefined
      }
    | undefined
  secondaryAction?:
    | {
        label?: string | undefined
        redirect?:
          | {
              url: string
              target?: '_self' | '_blank' | '_parent' | '_top' | '_unfencedTop' | undefined
            }
          | undefined
      }
    | undefined
  data?: { [x: string]: unknown } | undefined
  redirect?:
    | { url: string; target?: '_self' | '_blank' | '_parent' | '_top' | '_unfencedTop' | undefined }
    | undefined
}
type SmsRenderOutput = { body: string }
type PushRenderOutput = { subject: string; body: string }
type ChatRenderOutput = { body?: string | undefined; card?: { [x: string]: unknown } | undefined }
type DigestRegularOutput = {
  amount: number
  unit: {}
  digestKey?: string | undefined
  lookBackWindow?: { [x: string]: unknown } | undefined
}
type GeneratePreviewResponseDto = {
  previewPayloadExample: {
    subscriber?:
      | {
          _id?: string | undefined
          firstName?: (string | null) | undefined
          lastName?: (string | null) | undefined
          email?: (string | null) | undefined
          phone?: (string | null) | undefined
          avatar?: (string | null) | undefined
          locale?: (string | null) | undefined
          channels?: ChannelSettingsDto[] | undefined
          topics?: string[] | undefined
          isOnline?: (boolean | null) | undefined
          lastOnlineAt?: (string | null) | undefined
          __v?: number | undefined
          data?: ({ [x: string]: unknown } | null) | undefined
          timezone?: (string | null) | undefined
        }
      | undefined
    actor?:
      | {
          _id?: string | undefined
          firstName?: (string | null) | undefined
          lastName?: (string | null) | undefined
          email?: (string | null) | undefined
          phone?: (string | null) | undefined
          avatar?: (string | null) | undefined
          locale?: (string | null) | undefined
          channels?: ChannelSettingsDto[] | undefined
          topics?: string[] | undefined
          isOnline?: (boolean | null) | undefined
          lastOnlineAt?: (string | null) | undefined
          __v?: number | undefined
          data?: ({ [x: string]: unknown } | null) | undefined
          timezone?: (string | null) | undefined
        }
      | undefined
    payload?: { [x: string]: unknown } | undefined
    steps?: { [x: string]: unknown } | undefined
    context?:
      | { [x: string]: string | { id: string; data?: { [x: string]: unknown } | undefined } }
      | undefined
    env?: { [x: string]: unknown } | undefined
  }
  schema?: ({ [x: string]: unknown } | null) | undefined
  novuSignature?: string | undefined
  result:
    | { [x: string]: unknown }
    | {
        type?: 'email' | undefined
        preview?: EmailRenderOutput | undefined
        error?: PreviewErrorDto | undefined
      }
    | {
        type?: 'email' | undefined
        preview?: EmailRenderOutput | undefined
        error?: PreviewErrorDto | undefined
      }
    | {
        type?: 'in_app' | undefined
        preview?: InAppRenderOutput | undefined
        error?: PreviewErrorDto | undefined
      }
    | {
        type?: 'sms' | undefined
        preview?: SmsRenderOutput | undefined
        error?: PreviewErrorDto | undefined
      }
    | {
        type?: 'push' | undefined
        preview?: PushRenderOutput | undefined
        error?: PreviewErrorDto | undefined
      }
    | {
        type?: 'chat' | undefined
        preview?: ChatRenderOutput | undefined
        error?: PreviewErrorDto | undefined
      }
    | {
        type?: 'tool' | undefined
        preview?: { [x: string]: unknown } | undefined
        error?: PreviewErrorDto | undefined
      }
    | { type?: 'delay' | undefined; preview?: DigestRegularOutput | undefined }
    | { type?: 'digest' | undefined; preview?: DigestRegularOutput | undefined }
}
type StepResponseDto = {
  controls: {
    dataSchema?: { [x: string]: unknown } | undefined
    uiSchema?:
      | { group?: {} | undefined; properties?: { [x: string]: UiSchemaProperty } | undefined }
      | undefined
    values?: { [x: string]: unknown } | undefined
  }
  controlValues?: { [x: string]: unknown } | undefined
  providerOverrides?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
  integrationOverrides?:
    | ({ [x: string]: { [x: string]: { [x: string]: unknown } } } | null)
    | undefined
  variables: { [x: string]: unknown }
  stepId: string
  _id: string
  name: string
  slug: string
  type: {}
  origin: {}
  workflowId: string
  workflowDatabaseId: string
  issues?:
    | {
        controls?: { [x: string]: StepContentIssueDto[] } | undefined
        integration?: { [x: string]: StepIntegrationIssue[] } | undefined
      }
    | undefined
  stepResolverHash?: string | undefined
}
type GetEnvironmentTagsDto = { name: string }
type ResourceToPublishDto = { resourceType: {}; resourceId: string }
type PublishEnvironmentRequestDto = {
  sourceEnvironmentId?: string | undefined
  dryRun?: boolean | undefined
  resources?: ResourceToPublishDto[] | undefined
}
type SyncedWorkflowDto = { resourceType: {}; resourceId: string; resourceName: string; action: {} }
type FailedWorkflowDto = {
  resourceType: {}
  resourceId: string
  resourceName: string
  error: string
  stack?: string | undefined
}
type SkippedWorkflowDto = {
  resourceType: {}
  resourceId: string
  resourceName: string
  reason: string
}
type SyncResultDto = {
  resourceType: {}
  successful: SyncedWorkflowDto[]
  failed: FailedWorkflowDto[]
  skipped: SkippedWorkflowDto[]
  totalProcessed: number
}
type PublishEnvironmentResponseDto = {
  results: SyncResultDto[]
  summary: { resources: number; successful: number; failed: number; skipped: number }
}
type DiffEnvironmentRequestDto = { sourceEnvironmentId?: string | undefined }
type ResourceDiffDto = {
  sourceResource?:
    | {
        id?: (string | null) | undefined
        name?: (string | null) | undefined
        updatedBy?:
          | {
              _id: string
              firstName: string
              lastName?: (string | null) | undefined
              externalId?: string | undefined
              email?: (string | null) | undefined
            }
          | undefined
        updatedAt?: (string | null) | undefined
      }
    | undefined
  targetResource?:
    | {
        id?: (string | null) | undefined
        name?: (string | null) | undefined
        updatedBy?:
          | {
              _id: string
              firstName: string
              lastName?: (string | null) | undefined
              externalId?: string | undefined
              email?: (string | null) | undefined
            }
          | undefined
        updatedAt?: (string | null) | undefined
      }
    | undefined
  resourceType: {}
  action: {}
  diffs?:
    | {
        previous?: ({ [x: string]: unknown } | null) | undefined
        new?: ({ [x: string]: unknown } | null) | undefined
      }
    | undefined
  stepType?: string | undefined
  previousIndex?: number | undefined
  newIndex?: number | undefined
}
type ResourceDependencyDto = {
  resourceType: {}
  resourceId: string
  resourceName: string
  isBlocking: boolean
  reason: {}
}
type ResourceDiffResultDto = {
  resourceType: {}
  sourceResource?:
    | {
        id?: (string | null) | undefined
        name?: (string | null) | undefined
        updatedBy?:
          | {
              _id: string
              firstName: string
              lastName?: (string | null) | undefined
              externalId?: string | undefined
              email?: (string | null) | undefined
            }
          | undefined
        updatedAt?: (string | null) | undefined
      }
    | undefined
  targetResource?:
    | {
        id?: (string | null) | undefined
        name?: (string | null) | undefined
        updatedBy?:
          | {
              _id: string
              firstName: string
              lastName?: (string | null) | undefined
              externalId?: string | undefined
              email?: (string | null) | undefined
            }
          | undefined
        updatedAt?: (string | null) | undefined
      }
    | undefined
  changes: ResourceDiffDto[]
  summary: { added: number; modified: number; deleted: number; unchanged: number }
  dependencies?: ResourceDependencyDto[] | undefined
}
type DiffEnvironmentResponseDto = {
  sourceEnvironmentId: string
  targetEnvironmentId: string
  resources: ResourceDiffResultDto[]
  summary: { totalEntities: number; totalChanges: number; hasChanges: boolean }
}
type ProvidersIdEnum =
  | 'anypost'
  | 'emailjs'
  | 'mailgun'
  | 'mailjet'
  | 'mandrill'
  | 'nodemailer'
  | 'postmark'
  | 'sendgrid'
  | 'sendinblue'
  | 'ses'
  | 'netcore'
  | 'infobip-email'
  | 'resend'
  | 'plunk'
  | 'mailersend'
  | 'mailtrap'
  | 'clickatell'
  | 'outlook365'
  | 'novu-email'
  | 'sparkpost'
  | 'email-webhook'
  | 'braze'
  | 'novu-email-agent'
  | 'agent-email-inbox'
  | 'nexmo'
  | 'plivo'
  | 'sms77'
  | 'sms-central'
  | 'sns'
  | 'telnyx'
  | 'twilio'
  | 'gupshup'
  | 'firetext'
  | 'infobip-sms'
  | 'burst-sms'
  | 'bulk-sms'
  | 'isend-sms'
  | 'forty-six-elks'
  | 'kannel'
  | 'maqsam'
  | 'termii'
  | 'africas-talking'
  | 'novu-sms'
  | 'sendchamp'
  | 'generic-sms'
  | 'clicksend'
  | 'bandwidth'
  | 'messagebird'
  | 'simpletexting'
  | 'azure-sms'
  | 'ring-central'
  | 'brevo-sms'
  | 'eazy-sms'
  | 'mobishastra'
  | 'afro-message'
  | 'unifonic'
  | 'smsmode'
  | 'imedia'
  | 'sinch'
  | 'isendpro-sms'
  | 'cm-telecom'
  | 'ruach-sms'
  | 'fcm'
  | 'apns'
  | 'expo'
  | 'one-signal'
  | 'pushpad'
  | 'push-webhook'
  | 'pusher-beams'
  | 'appio'
  | 'novu'
  | 'slack'
  | 'discord'
  | 'google-chat'
  | 'msteams'
  | 'webex-messaging'
  | 'mattermost'
  | 'ryver'
  | 'zulip'
  | 'grafana-on-call'
  | 'getstream'
  | 'rocket-chat'
  | 'whatsapp-business'
  | 'line'
  | 'chat-webhook'
  | 'novu-slack'
  | 'telegram'
  | 'sendblue'
  | 'photon-imessage'
  | 'novu-web-chat'
  | 'anthropic'
  | 'novu-anthropic'
  | 'anthropic-aws'
  | 'pagerduty'
  | 'opsgenie'
  | 'grafana'
  | 'tool-webhook'
type WorkspaceDto = { id: string; name?: string | undefined; botUserId?: string | undefined }
type AuthDto = {
  accessToken: string
  refreshToken?: string | undefined
  expiresAt?: string | undefined
  refreshTokenExpiresAt?: string | undefined
}
type GetChannelConnectionResponseDto = {
  identifier: string
  channel: 'in_app' | 'email' | 'sms' | 'chat' | 'push' | 'tool'
  providerId:
    | 'anypost'
    | 'emailjs'
    | 'mailgun'
    | 'mailjet'
    | 'mandrill'
    | 'nodemailer'
    | 'postmark'
    | 'sendgrid'
    | 'sendinblue'
    | 'ses'
    | 'netcore'
    | 'infobip-email'
    | 'resend'
    | 'plunk'
    | 'mailersend'
    | 'mailtrap'
    | 'clickatell'
    | 'outlook365'
    | 'novu-email'
    | 'sparkpost'
    | 'email-webhook'
    | 'braze'
    | 'novu-email-agent'
    | 'agent-email-inbox'
    | 'nexmo'
    | 'plivo'
    | 'sms77'
    | 'sms-central'
    | 'sns'
    | 'telnyx'
    | 'twilio'
    | 'gupshup'
    | 'firetext'
    | 'infobip-sms'
    | 'burst-sms'
    | 'bulk-sms'
    | 'isend-sms'
    | 'forty-six-elks'
    | 'kannel'
    | 'maqsam'
    | 'termii'
    | 'africas-talking'
    | 'novu-sms'
    | 'sendchamp'
    | 'generic-sms'
    | 'clicksend'
    | 'bandwidth'
    | 'messagebird'
    | 'simpletexting'
    | 'azure-sms'
    | 'ring-central'
    | 'brevo-sms'
    | 'eazy-sms'
    | 'mobishastra'
    | 'afro-message'
    | 'unifonic'
    | 'smsmode'
    | 'imedia'
    | 'sinch'
    | 'isendpro-sms'
    | 'cm-telecom'
    | 'ruach-sms'
    | 'fcm'
    | 'apns'
    | 'expo'
    | 'one-signal'
    | 'pushpad'
    | 'push-webhook'
    | 'pusher-beams'
    | 'appio'
    | 'novu'
    | 'slack'
    | 'discord'
    | 'google-chat'
    | 'msteams'
    | 'webex-messaging'
    | 'mattermost'
    | 'ryver'
    | 'zulip'
    | 'grafana-on-call'
    | 'getstream'
    | 'rocket-chat'
    | 'whatsapp-business'
    | 'line'
    | 'chat-webhook'
    | 'novu-slack'
    | 'telegram'
    | 'sendblue'
    | 'photon-imessage'
    | 'novu-web-chat'
    | 'anthropic'
    | 'novu-anthropic'
    | 'anthropic-aws'
    | 'pagerduty'
    | 'opsgenie'
    | 'grafana'
    | 'tool-webhook'
  integrationIdentifier: string | null
  subscriberId: string | null
  contextKeys: string[]
  workspace: WorkspaceDto
  auth: AuthDto
  createdAt: string
  updatedAt: string
}
type ListChannelConnectionsResponseDto = {
  data: GetChannelConnectionResponseDto[]
  next: string | null
  previous: string | null
  totalCount: number
  totalCountCapped: boolean
}
type CreateChannelConnectionRequestDto = {
  identifier?: string | undefined
  subscriberId?: string | undefined
  context?:
    | { [x: string]: string | { id: string; data?: { [x: string]: unknown } | undefined } }
    | undefined
  connectionMode?: 'subscriber' | 'shared' | undefined
  integrationIdentifier: string
  workspace: WorkspaceDto
  auth: AuthDto
}
type UpdateChannelConnectionRequestDto = { workspace: WorkspaceDto; auth: AuthDto }
type SlackChannelEndpointDto = { channelId: string }
type SlackUserEndpointDto = { userId: string }
type WebhookEndpointDto = { url: string; channel?: string | undefined }
type PhoneEndpointDto = { phoneNumber: string }
type MsTeamsChannelEndpointDto = { teamId: string; channelId: string }
type MsTeamsUserEndpointDto = { userId: string }
type TelegramChatEndpointDto = { chatId: string }
type WebexRoomEndpointDto = { roomId: string; parentId?: string | undefined }
type WebexPersonEndpointDto = { personId?: string | undefined; personEmail?: string | undefined }
type LineUserEndpointDto = { userId: string }
type PagerDutyServiceEndpointDto = { routingKey: string; region: 'us' | 'eu' }
type OpsgenieIntegrationEndpointDto = { apiKey: string; region: 'us' | 'eu' }
type GrafanaOnCallIntegrationEndpointDto = { url: string; authToken?: string | undefined }
type ToolWebhookEndpointDto = {
  url: string
  headers?: { [x: string]: string } | undefined
  method?: 'POST' | 'PUT' | 'PATCH' | undefined
}
type GetChannelEndpointResponseDto = {
  identifier: string
  channel: 'in_app' | 'email' | 'sms' | 'chat' | 'push' | 'tool'
  providerId:
    | 'anypost'
    | 'emailjs'
    | 'mailgun'
    | 'mailjet'
    | 'mandrill'
    | 'nodemailer'
    | 'postmark'
    | 'sendgrid'
    | 'sendinblue'
    | 'ses'
    | 'netcore'
    | 'infobip-email'
    | 'resend'
    | 'plunk'
    | 'mailersend'
    | 'mailtrap'
    | 'clickatell'
    | 'outlook365'
    | 'novu-email'
    | 'sparkpost'
    | 'email-webhook'
    | 'braze'
    | 'novu-email-agent'
    | 'agent-email-inbox'
    | 'nexmo'
    | 'plivo'
    | 'sms77'
    | 'sms-central'
    | 'sns'
    | 'telnyx'
    | 'twilio'
    | 'gupshup'
    | 'firetext'
    | 'infobip-sms'
    | 'burst-sms'
    | 'bulk-sms'
    | 'isend-sms'
    | 'forty-six-elks'
    | 'kannel'
    | 'maqsam'
    | 'termii'
    | 'africas-talking'
    | 'novu-sms'
    | 'sendchamp'
    | 'generic-sms'
    | 'clicksend'
    | 'bandwidth'
    | 'messagebird'
    | 'simpletexting'
    | 'azure-sms'
    | 'ring-central'
    | 'brevo-sms'
    | 'eazy-sms'
    | 'mobishastra'
    | 'afro-message'
    | 'unifonic'
    | 'smsmode'
    | 'imedia'
    | 'sinch'
    | 'isendpro-sms'
    | 'cm-telecom'
    | 'ruach-sms'
    | 'fcm'
    | 'apns'
    | 'expo'
    | 'one-signal'
    | 'pushpad'
    | 'push-webhook'
    | 'pusher-beams'
    | 'appio'
    | 'novu'
    | 'slack'
    | 'discord'
    | 'google-chat'
    | 'msteams'
    | 'webex-messaging'
    | 'mattermost'
    | 'ryver'
    | 'zulip'
    | 'grafana-on-call'
    | 'getstream'
    | 'rocket-chat'
    | 'whatsapp-business'
    | 'line'
    | 'chat-webhook'
    | 'novu-slack'
    | 'telegram'
    | 'sendblue'
    | 'photon-imessage'
    | 'novu-web-chat'
    | 'anthropic'
    | 'novu-anthropic'
    | 'anthropic-aws'
    | 'pagerduty'
    | 'opsgenie'
    | 'grafana'
    | 'tool-webhook'
  integrationIdentifier: string | null
  connectionIdentifier: string | null
  subscriberId: string | null
  contextKeys: string[]
  type:
    | 'slack_channel'
    | 'slack_user'
    | 'webhook'
    | 'phone'
    | 'ms_teams_channel'
    | 'ms_teams_user'
    | 'telegram_chat'
    | 'webex_room'
    | 'webex_person'
    | 'line_user'
    | 'pagerduty_service'
    | 'opsgenie_integration'
    | 'grafana_oncall_integration'
    | 'tool_webhook'
  endpoint:
    | SlackChannelEndpointDto
    | SlackUserEndpointDto
    | WebhookEndpointDto
    | PhoneEndpointDto
    | MsTeamsChannelEndpointDto
    | MsTeamsUserEndpointDto
    | TelegramChatEndpointDto
    | WebexRoomEndpointDto
    | WebexPersonEndpointDto
    | LineUserEndpointDto
    | PagerDutyServiceEndpointDto
    | OpsgenieIntegrationEndpointDto
    | GrafanaOnCallIntegrationEndpointDto
    | ToolWebhookEndpointDto
  createdAt: string
  updatedAt: string
}
type ListChannelEndpointsResponseDto = {
  data: GetChannelEndpointResponseDto[]
  next: string | null
  previous: string | null
  totalCount: number
  totalCountCapped: boolean
}
type CreateSlackChannelEndpointDto = {
  identifier?: string | undefined
  subscriberId: string
  createSubscriberIfMissing?: boolean | undefined
  context?:
    | { [x: string]: string | { id: string; data?: { [x: string]: unknown } | undefined } }
    | undefined
  integrationIdentifier: string
  connectionIdentifier?: string | undefined
  type: 'slack_channel'
  endpoint: { channelId: string }
}
type CreateSlackUserEndpointDto = {
  identifier?: string | undefined
  subscriberId: string
  createSubscriberIfMissing?: boolean | undefined
  context?:
    | { [x: string]: string | { id: string; data?: { [x: string]: unknown } | undefined } }
    | undefined
  integrationIdentifier: string
  connectionIdentifier?: string | undefined
  type: 'slack_user'
  endpoint: { userId: string }
}
type CreateWebhookEndpointDto = {
  identifier?: string | undefined
  subscriberId: string
  createSubscriberIfMissing?: boolean | undefined
  context?:
    | { [x: string]: string | { id: string; data?: { [x: string]: unknown } | undefined } }
    | undefined
  integrationIdentifier: string
  connectionIdentifier?: string | undefined
  type: 'webhook'
  endpoint: { url: string; channel?: string | undefined }
}
type CreatePhoneEndpointDto = {
  identifier?: string | undefined
  subscriberId: string
  createSubscriberIfMissing?: boolean | undefined
  context?:
    | { [x: string]: string | { id: string; data?: { [x: string]: unknown } | undefined } }
    | undefined
  integrationIdentifier: string
  connectionIdentifier?: string | undefined
  type: 'phone'
  endpoint: { phoneNumber: string }
}
type CreateMsTeamsChannelEndpointDto = {
  identifier?: string | undefined
  subscriberId: string
  createSubscriberIfMissing?: boolean | undefined
  context?:
    | { [x: string]: string | { id: string; data?: { [x: string]: unknown } | undefined } }
    | undefined
  integrationIdentifier: string
  connectionIdentifier?: string | undefined
  type: 'ms_teams_channel'
  endpoint: { teamId: string; channelId: string }
}
type CreateMsTeamsUserEndpointDto = {
  identifier?: string | undefined
  subscriberId: string
  createSubscriberIfMissing?: boolean | undefined
  context?:
    | { [x: string]: string | { id: string; data?: { [x: string]: unknown } | undefined } }
    | undefined
  integrationIdentifier: string
  connectionIdentifier?: string | undefined
  type: 'ms_teams_user'
  endpoint: { userId: string }
}
type CreateTelegramChatEndpointDto = {
  identifier?: string | undefined
  subscriberId: string
  createSubscriberIfMissing?: boolean | undefined
  context?:
    | { [x: string]: string | { id: string; data?: { [x: string]: unknown } | undefined } }
    | undefined
  integrationIdentifier: string
  connectionIdentifier?: string | undefined
  type: 'telegram_chat'
  endpoint: { chatId: string }
}
type CreateWebexRoomEndpointDto = {
  identifier?: string | undefined
  subscriberId: string
  createSubscriberIfMissing?: boolean | undefined
  context?:
    | { [x: string]: string | { id: string; data?: { [x: string]: unknown } | undefined } }
    | undefined
  integrationIdentifier: string
  connectionIdentifier?: string | undefined
  type: 'webex_room'
  endpoint: { roomId: string; parentId?: string | undefined }
}
type CreateWebexPersonEndpointDto = {
  identifier?: string | undefined
  subscriberId: string
  createSubscriberIfMissing?: boolean | undefined
  context?:
    | { [x: string]: string | { id: string; data?: { [x: string]: unknown } | undefined } }
    | undefined
  integrationIdentifier: string
  connectionIdentifier?: string | undefined
  type: 'webex_person'
  endpoint: { personId?: string | undefined; personEmail?: string | undefined }
}
type CreateLineUserEndpointDto = {
  identifier?: string | undefined
  subscriberId: string
  createSubscriberIfMissing?: boolean | undefined
  context?:
    | { [x: string]: string | { id: string; data?: { [x: string]: unknown } | undefined } }
    | undefined
  integrationIdentifier: string
  connectionIdentifier?: string | undefined
  type: 'line_user'
  endpoint: { userId: string }
}
type CreatePagerDutyServiceEndpointDto = {
  identifier?: string | undefined
  subscriberId: string
  createSubscriberIfMissing?: boolean | undefined
  context?:
    | { [x: string]: string | { id: string; data?: { [x: string]: unknown } | undefined } }
    | undefined
  integrationIdentifier: string
  connectionIdentifier?: string | undefined
  type: 'pagerduty_service'
  endpoint: { routingKey: string; region: 'us' | 'eu' }
}
type CreateOpsgenieIntegrationEndpointDto = {
  identifier?: string | undefined
  subscriberId: string
  createSubscriberIfMissing?: boolean | undefined
  context?:
    | { [x: string]: string | { id: string; data?: { [x: string]: unknown } | undefined } }
    | undefined
  integrationIdentifier: string
  connectionIdentifier?: string | undefined
  type: 'opsgenie_integration'
  endpoint: { apiKey: string; region: 'us' | 'eu' }
}
type CreateGrafanaOnCallIntegrationEndpointDto = {
  identifier?: string | undefined
  subscriberId: string
  createSubscriberIfMissing?: boolean | undefined
  context?:
    | { [x: string]: string | { id: string; data?: { [x: string]: unknown } | undefined } }
    | undefined
  integrationIdentifier: string
  connectionIdentifier?: string | undefined
  type: 'grafana_oncall_integration'
  endpoint: { url: string; authToken?: string | undefined }
}
type CreateToolWebhookEndpointDto = {
  identifier?: string | undefined
  subscriberId: string
  createSubscriberIfMissing?: boolean | undefined
  context?:
    | { [x: string]: string | { id: string; data?: { [x: string]: unknown } | undefined } }
    | undefined
  integrationIdentifier: string
  connectionIdentifier?: string | undefined
  type: 'tool_webhook'
  endpoint: {
    url: string
    headers?: { [x: string]: string } | undefined
    method?: 'POST' | 'PUT' | 'PATCH' | undefined
  }
}
type UpdateChannelEndpointRequestDto = {
  endpoint:
    | SlackChannelEndpointDto
    | SlackUserEndpointDto
    | WebhookEndpointDto
    | PhoneEndpointDto
    | WebexRoomEndpointDto
    | WebexPersonEndpointDto
    | ToolWebhookEndpointDto
}
type UploadTranslationsResponseDto = {
  totalFiles: number
  successfulUploads: number
  failedUploads: number
  errors: string[]
}
type CreateTranslationRequestDto = {
  resourceId: string
  resourceType: 'workflow' | 'layout'
  locale: string
  content: { [x: string]: unknown }
}
type TranslationResponseDto = {
  resourceId: string
  resourceType: 'workflow' | 'layout'
  locale: string
  content: { [x: string]: unknown }
  createdAt: string
  updatedAt: string
}
type GetMasterJsonResponseDto = {
  workflows: { [x: string]: unknown }
  layouts: { [x: string]: unknown }
}
type ImportMasterJsonRequestDto = { locale: string; masterJson: { [x: string]: unknown } }
type ImportMasterJsonResponseDto = {
  success: boolean
  message: string
  successful?: string[] | undefined
  failed?: string[] | undefined
}
type TranslationGroupDto = {
  resourceId: string
  resourceType: 'workflow' | 'layout'
  resourceName: string
  locales: string[]
  outdatedLocales?: string[] | undefined
  createdAt: string
  updatedAt: string
}
type WebhookResultDto = {
  id: string
  event: {
    status:
      | 'opened'
      | 'rejected'
      | 'sent'
      | 'deferred'
      | 'delivered'
      | 'bounced'
      | 'dropped'
      | 'clicked'
      | 'blocked'
      | 'spam'
      | 'unsubscribed'
      | 'delayed'
      | 'complaint'
      | 'created'
      | 'delivered'
      | 'accepted'
      | 'queued'
      | 'sending'
      | 'sent'
      | 'failed'
      | 'undelivered'
      | 'rejected'
      | 'delivered'
      | 'opened'
      | 'dismissed'
      | 'clicked'
      | 'failed'
    date: string
    externalId?: string | undefined
    attempts?: number | undefined
    response?: string | undefined
    row?: string | undefined
  }
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/environments': {
      $post:
        | {
            input: { json: CreateEnvironmentRequestDto }
            output: { data?: EnvironmentResponseDto | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateEnvironmentRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateEnvironmentRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateEnvironmentRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { json: CreateEnvironmentRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateEnvironmentRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateEnvironmentRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { json: CreateEnvironmentRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: CreateEnvironmentRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { json: CreateEnvironmentRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { json: CreateEnvironmentRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { json: CreateEnvironmentRequestDto }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: CreateEnvironmentRequestDto }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: CreateEnvironmentRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: CreateEnvironmentRequestDto }
            output: string
            outputFormat: 'json'
            status: 503
          }
      $get:
        | {
            input: {}
            output: { data?: EnvironmentResponseDto[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: ErrorDto; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ErrorDto; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorDto; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorDto; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ErrorDto; outputFormat: 'json'; status: 405 }
        | { input: {}; output: ErrorDto; outputFormat: 'json'; status: 409 }
        | { input: {}; output: ErrorDto; outputFormat: 'json'; status: 413 }
        | { input: {}; output: ErrorDto; outputFormat: 'json'; status: 414 }
        | { input: {}; output: ErrorDto; outputFormat: 'json'; status: 415 }
        | { input: {}; output: ValidationErrorDto; outputFormat: 'json'; status: 422 }
        | { input: {}; output: string; outputFormat: 'json'; status: 429 }
        | { input: {}; output: ErrorDto; outputFormat: 'json'; status: 500 }
        | { input: {}; output: string; outputFormat: 'json'; status: 503 }
    }
  } & {
    '/v1/environments/:environmentId': {
      $put:
        | {
            input: { param: { environmentId: string } } & { json: UpdateEnvironmentRequestDto }
            output: { data?: EnvironmentResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { environmentId: string } } & { json: UpdateEnvironmentRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { environmentId: string } } & { json: UpdateEnvironmentRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { environmentId: string } } & { json: UpdateEnvironmentRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { environmentId: string } } & { json: UpdateEnvironmentRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { environmentId: string } } & { json: UpdateEnvironmentRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { environmentId: string } } & { json: UpdateEnvironmentRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { environmentId: string } } & { json: UpdateEnvironmentRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { environmentId: string } } & { json: UpdateEnvironmentRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { environmentId: string } } & { json: UpdateEnvironmentRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { environmentId: string } } & { json: UpdateEnvironmentRequestDto }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { environmentId: string } } & { json: UpdateEnvironmentRequestDto }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { environmentId: string } } & { json: UpdateEnvironmentRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { environmentId: string } } & { json: UpdateEnvironmentRequestDto }
            output: string
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | {
            input: { param: { environmentId: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { environmentId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { environmentId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { environmentId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { environmentId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { environmentId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { environmentId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { environmentId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { environmentId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { environmentId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { environmentId: string } }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { environmentId: string } }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { environmentId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { environmentId: string } }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/events/trigger': {
      $post:
        | {
            input: { json: TriggerEventRequestDto }
            output: { data?: TriggerEventResponseDto | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TriggerEventRequestDto }
            output: PayloadValidationExceptionDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: TriggerEventRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: TriggerEventRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: TriggerEventRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: TriggerEventRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { json: TriggerEventRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: TriggerEventRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { json: TriggerEventRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { json: TriggerEventRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { json: TriggerEventRequestDto }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: TriggerEventRequestDto }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: TriggerEventRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: TriggerEventRequestDto }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/events/trigger/bulk': {
      $post:
        | {
            input: { json: BulkTriggerEventDto }
            output: { data?: TriggerEventResponseDto[] | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: BulkTriggerEventDto }
            output: PayloadValidationExceptionDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: BulkTriggerEventDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: BulkTriggerEventDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: BulkTriggerEventDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: BulkTriggerEventDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { json: BulkTriggerEventDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: BulkTriggerEventDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { json: BulkTriggerEventDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { json: BulkTriggerEventDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { json: BulkTriggerEventDto }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: BulkTriggerEventDto }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: BulkTriggerEventDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: BulkTriggerEventDto }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/events/trigger/broadcast': {
      $post:
        | {
            input: { json: TriggerEventToAllRequestDto }
            output: { data?: TriggerEventResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TriggerEventToAllRequestDto }
            output: TriggerEventResponseDto
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TriggerEventToAllRequestDto }
            output: PayloadValidationExceptionDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: TriggerEventToAllRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: TriggerEventToAllRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: TriggerEventToAllRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: TriggerEventToAllRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { json: TriggerEventToAllRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: TriggerEventToAllRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { json: TriggerEventToAllRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { json: TriggerEventToAllRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { json: TriggerEventToAllRequestDto }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: TriggerEventToAllRequestDto }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: TriggerEventToAllRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: TriggerEventToAllRequestDto }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/events/trigger/:transactionId': {
      $delete:
        | {
            input: { param: { transactionId: string } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { transactionId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { transactionId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { transactionId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { transactionId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { transactionId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { transactionId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { transactionId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { transactionId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { transactionId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { transactionId: string } }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { transactionId: string } }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { transactionId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { transactionId: string } }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/notifications': {
      $get:
        | {
            input: {
              query: {
                channels?: ChannelTypeEnum[] | undefined
                templates?: string[] | undefined
                emails?: string[] | undefined
                search?: string | undefined
                subscriberIds?: string[] | undefined
                severity?: string[] | undefined
                page?: number | undefined
                limit?: number | undefined
                transactionId?: string | undefined
                topicKey?: string | undefined
                subscriptionId?: string | undefined
                contextKeys?: string[] | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: ActivitiesResponseDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                channels?: ChannelTypeEnum[] | undefined
                templates?: string[] | undefined
                emails?: string[] | undefined
                search?: string | undefined
                subscriberIds?: string[] | undefined
                severity?: string[] | undefined
                page?: number | undefined
                limit?: number | undefined
                transactionId?: string | undefined
                topicKey?: string | undefined
                subscriptionId?: string | undefined
                contextKeys?: string[] | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                channels?: ChannelTypeEnum[] | undefined
                templates?: string[] | undefined
                emails?: string[] | undefined
                search?: string | undefined
                subscriberIds?: string[] | undefined
                severity?: string[] | undefined
                page?: number | undefined
                limit?: number | undefined
                transactionId?: string | undefined
                topicKey?: string | undefined
                subscriptionId?: string | undefined
                contextKeys?: string[] | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                channels?: ChannelTypeEnum[] | undefined
                templates?: string[] | undefined
                emails?: string[] | undefined
                search?: string | undefined
                subscriberIds?: string[] | undefined
                severity?: string[] | undefined
                page?: number | undefined
                limit?: number | undefined
                transactionId?: string | undefined
                topicKey?: string | undefined
                subscriptionId?: string | undefined
                contextKeys?: string[] | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                channels?: ChannelTypeEnum[] | undefined
                templates?: string[] | undefined
                emails?: string[] | undefined
                search?: string | undefined
                subscriberIds?: string[] | undefined
                severity?: string[] | undefined
                page?: number | undefined
                limit?: number | undefined
                transactionId?: string | undefined
                topicKey?: string | undefined
                subscriptionId?: string | undefined
                contextKeys?: string[] | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                channels?: ChannelTypeEnum[] | undefined
                templates?: string[] | undefined
                emails?: string[] | undefined
                search?: string | undefined
                subscriberIds?: string[] | undefined
                severity?: string[] | undefined
                page?: number | undefined
                limit?: number | undefined
                transactionId?: string | undefined
                topicKey?: string | undefined
                subscriptionId?: string | undefined
                contextKeys?: string[] | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: {
              query: {
                channels?: ChannelTypeEnum[] | undefined
                templates?: string[] | undefined
                emails?: string[] | undefined
                search?: string | undefined
                subscriberIds?: string[] | undefined
                severity?: string[] | undefined
                page?: number | undefined
                limit?: number | undefined
                transactionId?: string | undefined
                topicKey?: string | undefined
                subscriptionId?: string | undefined
                contextKeys?: string[] | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                channels?: ChannelTypeEnum[] | undefined
                templates?: string[] | undefined
                emails?: string[] | undefined
                search?: string | undefined
                subscriberIds?: string[] | undefined
                severity?: string[] | undefined
                page?: number | undefined
                limit?: number | undefined
                transactionId?: string | undefined
                topicKey?: string | undefined
                subscriptionId?: string | undefined
                contextKeys?: string[] | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: {
              query: {
                channels?: ChannelTypeEnum[] | undefined
                templates?: string[] | undefined
                emails?: string[] | undefined
                search?: string | undefined
                subscriberIds?: string[] | undefined
                severity?: string[] | undefined
                page?: number | undefined
                limit?: number | undefined
                transactionId?: string | undefined
                topicKey?: string | undefined
                subscriptionId?: string | undefined
                contextKeys?: string[] | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: {
              query: {
                channels?: ChannelTypeEnum[] | undefined
                templates?: string[] | undefined
                emails?: string[] | undefined
                search?: string | undefined
                subscriberIds?: string[] | undefined
                severity?: string[] | undefined
                page?: number | undefined
                limit?: number | undefined
                transactionId?: string | undefined
                topicKey?: string | undefined
                subscriptionId?: string | undefined
                contextKeys?: string[] | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                channels?: ChannelTypeEnum[] | undefined
                templates?: string[] | undefined
                emails?: string[] | undefined
                search?: string | undefined
                subscriberIds?: string[] | undefined
                severity?: string[] | undefined
                page?: number | undefined
                limit?: number | undefined
                transactionId?: string | undefined
                topicKey?: string | undefined
                subscriptionId?: string | undefined
                contextKeys?: string[] | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                channels?: ChannelTypeEnum[] | undefined
                templates?: string[] | undefined
                emails?: string[] | undefined
                search?: string | undefined
                subscriberIds?: string[] | undefined
                severity?: string[] | undefined
                page?: number | undefined
                limit?: number | undefined
                transactionId?: string | undefined
                topicKey?: string | undefined
                subscriptionId?: string | undefined
                contextKeys?: string[] | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                channels?: ChannelTypeEnum[] | undefined
                templates?: string[] | undefined
                emails?: string[] | undefined
                search?: string | undefined
                subscriberIds?: string[] | undefined
                severity?: string[] | undefined
                page?: number | undefined
                limit?: number | undefined
                transactionId?: string | undefined
                topicKey?: string | undefined
                subscriptionId?: string | undefined
                contextKeys?: string[] | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                channels?: ChannelTypeEnum[] | undefined
                templates?: string[] | undefined
                emails?: string[] | undefined
                search?: string | undefined
                subscriberIds?: string[] | undefined
                severity?: string[] | undefined
                page?: number | undefined
                limit?: number | undefined
                transactionId?: string | undefined
                topicKey?: string | undefined
                subscriptionId?: string | undefined
                contextKeys?: string[] | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/notifications/:notificationId': {
      $get:
        | {
            input: { param: { notificationId: string } }
            output: { data?: ActivityNotificationResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { notificationId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { notificationId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { notificationId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { notificationId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { notificationId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { notificationId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { notificationId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { notificationId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { notificationId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { notificationId: string } }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { notificationId: string } }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { notificationId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { notificationId: string } }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/agents': {
      $post:
        | {
            input: { header: { 'Novu-Analytics-Source': string } } & { json: CreateAgentRequestDto }
            output: { data?: AgentResponseDto | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Novu-Analytics-Source': string } } & { json: CreateAgentRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Novu-Analytics-Source': string } } & { json: CreateAgentRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Novu-Analytics-Source': string } } & { json: CreateAgentRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Novu-Analytics-Source': string } } & { json: CreateAgentRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'Novu-Analytics-Source': string } } & { json: CreateAgentRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { header: { 'Novu-Analytics-Source': string } } & { json: CreateAgentRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { header: { 'Novu-Analytics-Source': string } } & { json: CreateAgentRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { header: { 'Novu-Analytics-Source': string } } & { json: CreateAgentRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { header: { 'Novu-Analytics-Source': string } } & { json: CreateAgentRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { header: { 'Novu-Analytics-Source': string } } & { json: CreateAgentRequestDto }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'Novu-Analytics-Source': string } } & { json: CreateAgentRequestDto }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { header: { 'Novu-Analytics-Source': string } } & { json: CreateAgentRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { 'Novu-Analytics-Source': string } } & { json: CreateAgentRequestDto }
            output: string
            outputFormat: 'json'
            status: 503
          }
      $get:
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                identifier?: string | undefined
              }
            }
            output: { data?: ListAgentsResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                identifier?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                identifier?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                identifier?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                identifier?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                identifier?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                identifier?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                identifier?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                identifier?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                identifier?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                identifier?: string | undefined
              }
            }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                identifier?: string | undefined
              }
            }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                identifier?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                identifier?: string | undefined
              }
            }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/agents/:identifier/bridge': {
      $put:
        | {
            input: { param: { identifier: string } } & { json: UpdateAgentBridgeRequestDto }
            output: { data?: AgentResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { identifier: string } } & { json: UpdateAgentBridgeRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { identifier: string } } & { json: UpdateAgentBridgeRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { identifier: string } } & { json: UpdateAgentBridgeRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { identifier: string } } & { json: UpdateAgentBridgeRequestDto }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { identifier: string } } & { json: UpdateAgentBridgeRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { identifier: string } } & { json: UpdateAgentBridgeRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { identifier: string } } & { json: UpdateAgentBridgeRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { identifier: string } } & { json: UpdateAgentBridgeRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { identifier: string } } & { json: UpdateAgentBridgeRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { identifier: string } } & { json: UpdateAgentBridgeRequestDto }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { identifier: string } } & { json: UpdateAgentBridgeRequestDto }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { identifier: string } } & { json: UpdateAgentBridgeRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { identifier: string } } & { json: UpdateAgentBridgeRequestDto }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/agents/:identifier': {
      $get:
        | {
            input: { param: { identifier: string } }
            output: { data?: AgentResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { identifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { identifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { identifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { identifier: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { identifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { identifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { identifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { identifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { identifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { identifier: string } }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { identifier: string } }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { identifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { identifier: string } }
            output: string
            outputFormat: 'json'
            status: 503
          }
      $patch:
        | {
            input: { param: { identifier: string } } & { json: UpdateAgentRequestDto }
            output: { data?: AgentResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { identifier: string } } & { json: UpdateAgentRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { identifier: string } } & { json: UpdateAgentRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { identifier: string } } & { json: UpdateAgentRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { identifier: string } } & { json: UpdateAgentRequestDto }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { identifier: string } } & { json: UpdateAgentRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { identifier: string } } & { json: UpdateAgentRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { identifier: string } } & { json: UpdateAgentRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { identifier: string } } & { json: UpdateAgentRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { identifier: string } } & { json: UpdateAgentRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { identifier: string } } & { json: UpdateAgentRequestDto }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { identifier: string } } & { json: UpdateAgentRequestDto }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { identifier: string } } & { json: UpdateAgentRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { identifier: string } } & { json: UpdateAgentRequestDto }
            output: string
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | {
            input: { param: { identifier: string } } & { query: { deleteFromProvider: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { identifier: string } } & { query: { deleteFromProvider: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { identifier: string } } & { query: { deleteFromProvider: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { identifier: string } } & { query: { deleteFromProvider: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { identifier: string } } & { query: { deleteFromProvider: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { identifier: string } } & { query: { deleteFromProvider: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { identifier: string } } & { query: { deleteFromProvider: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { identifier: string } } & { query: { deleteFromProvider: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { identifier: string } } & { query: { deleteFromProvider: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { identifier: string } } & { query: { deleteFromProvider: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { identifier: string } } & { query: { deleteFromProvider: string } }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { identifier: string } } & { query: { deleteFromProvider: string } }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { identifier: string } } & { query: { deleteFromProvider: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { identifier: string } } & { query: { deleteFromProvider: string } }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/agents/:identifier/integrations': {
      $post:
        | {
            input: { param: { identifier: string } } & {
              header: { 'Novu-Analytics-Source': string }
            } & { json: AddAgentIntegrationRequestDto }
            output: { data?: AgentIntegrationResponseDto | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { identifier: string } } & {
              header: { 'Novu-Analytics-Source': string }
            } & { json: AddAgentIntegrationRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { identifier: string } } & {
              header: { 'Novu-Analytics-Source': string }
            } & { json: AddAgentIntegrationRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { identifier: string } } & {
              header: { 'Novu-Analytics-Source': string }
            } & { json: AddAgentIntegrationRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { identifier: string } } & {
              header: { 'Novu-Analytics-Source': string }
            } & { json: AddAgentIntegrationRequestDto }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { identifier: string } } & {
              header: { 'Novu-Analytics-Source': string }
            } & { json: AddAgentIntegrationRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { identifier: string } } & {
              header: { 'Novu-Analytics-Source': string }
            } & { json: AddAgentIntegrationRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { identifier: string } } & {
              header: { 'Novu-Analytics-Source': string }
            } & { json: AddAgentIntegrationRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { identifier: string } } & {
              header: { 'Novu-Analytics-Source': string }
            } & { json: AddAgentIntegrationRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { identifier: string } } & {
              header: { 'Novu-Analytics-Source': string }
            } & { json: AddAgentIntegrationRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { identifier: string } } & {
              header: { 'Novu-Analytics-Source': string }
            } & { json: AddAgentIntegrationRequestDto }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { identifier: string } } & {
              header: { 'Novu-Analytics-Source': string }
            } & { json: AddAgentIntegrationRequestDto }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { identifier: string } } & {
              header: { 'Novu-Analytics-Source': string }
            } & { json: AddAgentIntegrationRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { identifier: string } } & {
              header: { 'Novu-Analytics-Source': string }
            } & { json: AddAgentIntegrationRequestDto }
            output: string
            outputFormat: 'json'
            status: 503
          }
      $get:
        | {
            input: { param: { identifier: string } } & {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                integrationIdentifier?: string | undefined
              }
            }
            output: { data?: ListAgentIntegrationsResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { identifier: string } } & {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                integrationIdentifier?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { identifier: string } } & {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                integrationIdentifier?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { identifier: string } } & {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                integrationIdentifier?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { identifier: string } } & {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                integrationIdentifier?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { identifier: string } } & {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                integrationIdentifier?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { identifier: string } } & {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                integrationIdentifier?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { identifier: string } } & {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                integrationIdentifier?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { identifier: string } } & {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                integrationIdentifier?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { identifier: string } } & {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                integrationIdentifier?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { identifier: string } } & {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                integrationIdentifier?: string | undefined
              }
            }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { identifier: string } } & {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                integrationIdentifier?: string | undefined
              }
            }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { identifier: string } } & {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                integrationIdentifier?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { identifier: string } } & {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                integrationIdentifier?: string | undefined
              }
            }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/agents/:identifier/integrations/:agentIntegrationId': {
      $patch:
        | {
            input: { param: { identifier: string; agentIntegrationId: string } } & {
              json: UpdateAgentIntegrationRequestDto
            }
            output: { data?: AgentIntegrationResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { identifier: string; agentIntegrationId: string } } & {
              json: UpdateAgentIntegrationRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { identifier: string; agentIntegrationId: string } } & {
              json: UpdateAgentIntegrationRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { identifier: string; agentIntegrationId: string } } & {
              json: UpdateAgentIntegrationRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { identifier: string; agentIntegrationId: string } } & {
              json: UpdateAgentIntegrationRequestDto
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { identifier: string; agentIntegrationId: string } } & {
              json: UpdateAgentIntegrationRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { identifier: string; agentIntegrationId: string } } & {
              json: UpdateAgentIntegrationRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { identifier: string; agentIntegrationId: string } } & {
              json: UpdateAgentIntegrationRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { identifier: string; agentIntegrationId: string } } & {
              json: UpdateAgentIntegrationRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { identifier: string; agentIntegrationId: string } } & {
              json: UpdateAgentIntegrationRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { identifier: string; agentIntegrationId: string } } & {
              json: UpdateAgentIntegrationRequestDto
            }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { identifier: string; agentIntegrationId: string } } & {
              json: UpdateAgentIntegrationRequestDto
            }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { identifier: string; agentIntegrationId: string } } & {
              json: UpdateAgentIntegrationRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { identifier: string; agentIntegrationId: string } } & {
              json: UpdateAgentIntegrationRequestDto
            }
            output: string
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | {
            input: { param: { identifier: string; agentIntegrationId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { identifier: string; agentIntegrationId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { identifier: string; agentIntegrationId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { identifier: string; agentIntegrationId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { identifier: string; agentIntegrationId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { identifier: string; agentIntegrationId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { identifier: string; agentIntegrationId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { identifier: string; agentIntegrationId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { identifier: string; agentIntegrationId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { identifier: string; agentIntegrationId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { identifier: string; agentIntegrationId: string } }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { identifier: string; agentIntegrationId: string } }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { identifier: string; agentIntegrationId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { identifier: string; agentIntegrationId: string } }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/agents/:agentId/reply': {
      $post:
        | {
            input: { param: { agentId: string } } & { json: AgentReplyPayloadDto }
            output: { data?: { messageId: string; platformThreadId: string } | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agentId: string } } & { json: AgentReplyPayloadDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { agentId: string } } & { json: AgentReplyPayloadDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { agentId: string } } & { json: AgentReplyPayloadDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { agentId: string } } & { json: AgentReplyPayloadDto }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { agentId: string } } & { json: AgentReplyPayloadDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { agentId: string } } & { json: AgentReplyPayloadDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { agentId: string } } & { json: AgentReplyPayloadDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { agentId: string } } & { json: AgentReplyPayloadDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { agentId: string } } & { json: AgentReplyPayloadDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { agentId: string } } & { json: AgentReplyPayloadDto }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { agentId: string } } & { json: AgentReplyPayloadDto }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { agentId: string } } & { json: AgentReplyPayloadDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { agentId: string } } & { json: AgentReplyPayloadDto }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/domains': {
      $get:
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                name?: string | undefined
              }
            }
            output: { data?: ListDomainsResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                name?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                name?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                name?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                name?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                name?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                name?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                name?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                name?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                name?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                name?: string | undefined
              }
            }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                name?: string | undefined
              }
            }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                name?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                name?: string | undefined
              }
            }
            output: string
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: { json: CreateDomainDto }
            output: { data?: DomainResponseDto | undefined }
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: CreateDomainDto }; output: ErrorDto; outputFormat: 'json'; status: 400 }
        | { input: { json: CreateDomainDto }; output: ErrorDto; outputFormat: 'json'; status: 401 }
        | { input: { json: CreateDomainDto }; output: ErrorDto; outputFormat: 'json'; status: 403 }
        | { input: { json: CreateDomainDto }; output: ErrorDto; outputFormat: 'json'; status: 404 }
        | { input: { json: CreateDomainDto }; output: ErrorDto; outputFormat: 'json'; status: 405 }
        | { input: { json: CreateDomainDto }; output: ErrorDto; outputFormat: 'json'; status: 409 }
        | { input: { json: CreateDomainDto }; output: ErrorDto; outputFormat: 'json'; status: 413 }
        | { input: { json: CreateDomainDto }; output: ErrorDto; outputFormat: 'json'; status: 414 }
        | { input: { json: CreateDomainDto }; output: ErrorDto; outputFormat: 'json'; status: 415 }
        | {
            input: { json: CreateDomainDto }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | { input: { json: CreateDomainDto }; output: string; outputFormat: 'json'; status: 429 }
        | { input: { json: CreateDomainDto }; output: ErrorDto; outputFormat: 'json'; status: 500 }
        | { input: { json: CreateDomainDto }; output: string; outputFormat: 'json'; status: 503 }
    }
  } & {
    '/v1/domains/:domain': {
      $get:
        | {
            input: { param: { domain: string } }
            output: { data?: DomainResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { domain: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { domain: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { domain: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { domain: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { domain: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { domain: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { domain: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { domain: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { domain: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { domain: string } }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { domain: string } }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { domain: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { domain: string } }
            output: string
            outputFormat: 'json'
            status: 503
          }
      $patch:
        | {
            input: { param: { domain: string } } & { json: UpdateDomainDto }
            output: { data?: DomainResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { domain: string } } & { json: UpdateDomainDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { domain: string } } & { json: UpdateDomainDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { domain: string } } & { json: UpdateDomainDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { domain: string } } & { json: UpdateDomainDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { domain: string } } & { json: UpdateDomainDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { domain: string } } & { json: UpdateDomainDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { domain: string } } & { json: UpdateDomainDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { domain: string } } & { json: UpdateDomainDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { domain: string } } & { json: UpdateDomainDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { domain: string } } & { json: UpdateDomainDto }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { domain: string } } & { json: UpdateDomainDto }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { domain: string } } & { json: UpdateDomainDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { domain: string } } & { json: UpdateDomainDto }
            output: string
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | { input: { param: { domain: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { domain: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { domain: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { domain: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { domain: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { domain: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { domain: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { domain: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { domain: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { domain: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { domain: string } }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { domain: string } }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { domain: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { domain: string } }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/domains/:domain/verify': {
      $post:
        | {
            input: { param: { domain: string } }
            output: { data?: DomainResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { domain: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { domain: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { domain: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { domain: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { domain: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { domain: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { domain: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { domain: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { domain: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { domain: string } }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { domain: string } }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { domain: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { domain: string } }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/domains/:domain/diagnose': {
      $post:
        | {
            input: { param: { domain: string } }
            output: { data?: DiagnoseDomainResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { domain: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { domain: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { domain: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { domain: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { domain: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { domain: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { domain: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { domain: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { domain: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { domain: string } }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { domain: string } }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { domain: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { domain: string } }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/domains/:domain/routes': {
      $get:
        | {
            input: { param: { domain: string } } & {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                agentId?: string | undefined
              }
            }
            output: { data?: ListDomainRoutesResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { domain: string } } & {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                agentId?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { domain: string } } & {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                agentId?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { domain: string } } & {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                agentId?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { domain: string } } & {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                agentId?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { domain: string } } & {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                agentId?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { domain: string } } & {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                agentId?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { domain: string } } & {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                agentId?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { domain: string } } & {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                agentId?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { domain: string } } & {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                agentId?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { domain: string } } & {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                agentId?: string | undefined
              }
            }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { domain: string } } & {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                agentId?: string | undefined
              }
            }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { domain: string } } & {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                agentId?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { domain: string } } & {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                agentId?: string | undefined
              }
            }
            output: string
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: { param: { domain: string } } & { json: DomainRouteDto }
            output: { data?: DomainRouteResponseDto | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { domain: string } } & { json: DomainRouteDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { domain: string } } & { json: DomainRouteDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { domain: string } } & { json: DomainRouteDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { domain: string } } & { json: DomainRouteDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { domain: string } } & { json: DomainRouteDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { domain: string } } & { json: DomainRouteDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { domain: string } } & { json: DomainRouteDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { domain: string } } & { json: DomainRouteDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { domain: string } } & { json: DomainRouteDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { domain: string } } & { json: DomainRouteDto }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { domain: string } } & { json: DomainRouteDto }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { domain: string } } & { json: DomainRouteDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { domain: string } } & { json: DomainRouteDto }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/domains/:domain/routes/:address': {
      $get:
        | {
            input: { param: { domain: string; address: string } }
            output: { data?: DomainRouteResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { domain: string; address: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { domain: string; address: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { domain: string; address: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { domain: string; address: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { domain: string; address: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { domain: string; address: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { domain: string; address: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { domain: string; address: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { domain: string; address: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { domain: string; address: string } }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { domain: string; address: string } }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { domain: string; address: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { domain: string; address: string } }
            output: string
            outputFormat: 'json'
            status: 503
          }
      $patch:
        | {
            input: { param: { domain: string; address: string } } & { json: UpdateDomainRouteDto }
            output: { data?: DomainRouteResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { domain: string; address: string } } & { json: UpdateDomainRouteDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { domain: string; address: string } } & { json: UpdateDomainRouteDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { domain: string; address: string } } & { json: UpdateDomainRouteDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { domain: string; address: string } } & { json: UpdateDomainRouteDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { domain: string; address: string } } & { json: UpdateDomainRouteDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { domain: string; address: string } } & { json: UpdateDomainRouteDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { domain: string; address: string } } & { json: UpdateDomainRouteDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { domain: string; address: string } } & { json: UpdateDomainRouteDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { domain: string; address: string } } & { json: UpdateDomainRouteDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { domain: string; address: string } } & { json: UpdateDomainRouteDto }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { domain: string; address: string } } & { json: UpdateDomainRouteDto }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { domain: string; address: string } } & { json: UpdateDomainRouteDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { domain: string; address: string } } & { json: UpdateDomainRouteDto }
            output: string
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | {
            input: { param: { domain: string; address: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { domain: string; address: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { domain: string; address: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { domain: string; address: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { domain: string; address: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { domain: string; address: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { domain: string; address: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { domain: string; address: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { domain: string; address: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { domain: string; address: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { domain: string; address: string } }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { domain: string; address: string } }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { domain: string; address: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { domain: string; address: string } }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/domains/:domain/routes/:address/test': {
      $post:
        | {
            input: { param: { domain: string; address: string } } & { json: TestDomainRouteDto }
            output: { data?: TestDomainRouteResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { domain: string; address: string } } & { json: TestDomainRouteDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { domain: string; address: string } } & { json: TestDomainRouteDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { domain: string; address: string } } & { json: TestDomainRouteDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { domain: string; address: string } } & { json: TestDomainRouteDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { domain: string; address: string } } & { json: TestDomainRouteDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { domain: string; address: string } } & { json: TestDomainRouteDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { domain: string; address: string } } & { json: TestDomainRouteDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { domain: string; address: string } } & { json: TestDomainRouteDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { domain: string; address: string } } & { json: TestDomainRouteDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { domain: string; address: string } } & { json: TestDomainRouteDto }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { domain: string; address: string } } & { json: TestDomainRouteDto }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { domain: string; address: string } } & { json: TestDomainRouteDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { domain: string; address: string } } & { json: TestDomainRouteDto }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/domains/:domain/auto-configure': {
      $get:
        | {
            input: { param: { domain: string } }
            output: { data?: DomainConnectStatusResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { domain: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { domain: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { domain: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { domain: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { domain: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { domain: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { domain: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { domain: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { domain: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { domain: string } }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { domain: string } }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { domain: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { domain: string } }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/domains/:domain/auto-configure/start': {
      $post:
        | {
            input: { param: { domain: string } } & { json: CreateDomainConnectApplyUrlDto }
            output: { data?: DomainConnectApplyUrlResponseDto | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { domain: string } } & { json: CreateDomainConnectApplyUrlDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { domain: string } } & { json: CreateDomainConnectApplyUrlDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { domain: string } } & { json: CreateDomainConnectApplyUrlDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { domain: string } } & { json: CreateDomainConnectApplyUrlDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { domain: string } } & { json: CreateDomainConnectApplyUrlDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { domain: string } } & { json: CreateDomainConnectApplyUrlDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { domain: string } } & { json: CreateDomainConnectApplyUrlDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { domain: string } } & { json: CreateDomainConnectApplyUrlDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { domain: string } } & { json: CreateDomainConnectApplyUrlDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { domain: string } } & { json: CreateDomainConnectApplyUrlDto }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { domain: string } } & { json: CreateDomainConnectApplyUrlDto }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { domain: string } } & { json: CreateDomainConnectApplyUrlDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { domain: string } } & { json: CreateDomainConnectApplyUrlDto }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/integrations': {
      $get:
        | { input: {}; output: IntegrationResponseDto[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorDto; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ErrorDto; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorDto; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorDto; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ErrorDto; outputFormat: 'json'; status: 405 }
        | { input: {}; output: ErrorDto; outputFormat: 'json'; status: 409 }
        | { input: {}; output: ErrorDto; outputFormat: 'json'; status: 413 }
        | { input: {}; output: ErrorDto; outputFormat: 'json'; status: 414 }
        | { input: {}; output: ErrorDto; outputFormat: 'json'; status: 415 }
        | { input: {}; output: ValidationErrorDto; outputFormat: 'json'; status: 422 }
        | { input: {}; output: string; outputFormat: 'json'; status: 429 }
        | { input: {}; output: ErrorDto; outputFormat: 'json'; status: 500 }
        | { input: {}; output: string; outputFormat: 'json'; status: 503 }
      $post:
        | {
            input: { json: CreateIntegrationRequestDto }
            output: { data?: IntegrationResponseDto | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateIntegrationRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateIntegrationRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateIntegrationRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateIntegrationRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateIntegrationRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { json: CreateIntegrationRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: CreateIntegrationRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { json: CreateIntegrationRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { json: CreateIntegrationRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { json: CreateIntegrationRequestDto }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: CreateIntegrationRequestDto }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: CreateIntegrationRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: CreateIntegrationRequestDto }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/integrations/active': {
      $get:
        | { input: {}; output: IntegrationResponseDto[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorDto; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ErrorDto; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorDto; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorDto; outputFormat: 'json'; status: 404 }
        | { input: {}; output: ErrorDto; outputFormat: 'json'; status: 405 }
        | { input: {}; output: ErrorDto; outputFormat: 'json'; status: 409 }
        | { input: {}; output: ErrorDto; outputFormat: 'json'; status: 413 }
        | { input: {}; output: ErrorDto; outputFormat: 'json'; status: 414 }
        | { input: {}; output: ErrorDto; outputFormat: 'json'; status: 415 }
        | { input: {}; output: ValidationErrorDto; outputFormat: 'json'; status: 422 }
        | { input: {}; output: string; outputFormat: 'json'; status: 429 }
        | { input: {}; output: ErrorDto; outputFormat: 'json'; status: 500 }
        | { input: {}; output: string; outputFormat: 'json'; status: 503 }
    }
  } & {
    '/v1/integrations/:integrationId': {
      $put:
        | {
            input: { param: { integrationId: string } } & { json: UpdateIntegrationRequestDto }
            output: { data?: IntegrationResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { integrationId: string } } & { json: UpdateIntegrationRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { integrationId: string } } & { json: UpdateIntegrationRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { integrationId: string } } & { json: UpdateIntegrationRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { integrationId: string } } & { json: UpdateIntegrationRequestDto }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { integrationId: string } } & { json: UpdateIntegrationRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { integrationId: string } } & { json: UpdateIntegrationRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { integrationId: string } } & { json: UpdateIntegrationRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { integrationId: string } } & { json: UpdateIntegrationRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { integrationId: string } } & { json: UpdateIntegrationRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { integrationId: string } } & { json: UpdateIntegrationRequestDto }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { integrationId: string } } & { json: UpdateIntegrationRequestDto }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { integrationId: string } } & { json: UpdateIntegrationRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { integrationId: string } } & { json: UpdateIntegrationRequestDto }
            output: string
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | {
            input: { param: { integrationId: string } }
            output: { data?: IntegrationResponseDto[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { integrationId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { integrationId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { integrationId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { integrationId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { integrationId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { integrationId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { integrationId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { integrationId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { integrationId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { integrationId: string } }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { integrationId: string } }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { integrationId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { integrationId: string } }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/integrations/:integrationId/auto-configure': {
      $post:
        | {
            input: { param: { integrationId: string } }
            output: { data?: AutoConfigureIntegrationResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { integrationId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { integrationId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { integrationId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { integrationId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { integrationId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { integrationId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { integrationId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { integrationId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { integrationId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { integrationId: string } }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { integrationId: string } }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { integrationId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { integrationId: string } }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/integrations/:integrationId/set-primary': {
      $post:
        | {
            input: { param: { integrationId: string } }
            output: { data?: IntegrationResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { integrationId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { integrationId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { integrationId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { integrationId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { integrationId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { integrationId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { integrationId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { integrationId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { integrationId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { integrationId: string } }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { integrationId: string } }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { integrationId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { integrationId: string } }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/integrations/chat/oauth': {
      $post:
        | {
            input: { json: GenerateChatOauthUrlRequestDto }
            output: { data?: GenerateChatOAuthUrlResponseDto | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: GenerateChatOauthUrlRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: GenerateChatOauthUrlRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: GenerateChatOauthUrlRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: GenerateChatOauthUrlRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: GenerateChatOauthUrlRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { json: GenerateChatOauthUrlRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: GenerateChatOauthUrlRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { json: GenerateChatOauthUrlRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { json: GenerateChatOauthUrlRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { json: GenerateChatOauthUrlRequestDto }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: GenerateChatOauthUrlRequestDto }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: GenerateChatOauthUrlRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: GenerateChatOauthUrlRequestDto }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/integrations/channel-connections/oauth': {
      $post:
        | {
            input: { json: GenerateConnectOauthUrlRequestDto }
            output: { data?: GenerateChatOAuthUrlResponseDto | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: GenerateConnectOauthUrlRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: GenerateConnectOauthUrlRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: GenerateConnectOauthUrlRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: GenerateConnectOauthUrlRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: GenerateConnectOauthUrlRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { json: GenerateConnectOauthUrlRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: GenerateConnectOauthUrlRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { json: GenerateConnectOauthUrlRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { json: GenerateConnectOauthUrlRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { json: GenerateConnectOauthUrlRequestDto }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: GenerateConnectOauthUrlRequestDto }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: GenerateConnectOauthUrlRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: GenerateConnectOauthUrlRequestDto }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/integrations/channel-endpoints/oauth': {
      $post:
        | {
            input: { json: GenerateLinkUserOauthUrlRequestDto }
            output: { data?: GenerateChatOAuthUrlResponseDto | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: GenerateLinkUserOauthUrlRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: GenerateLinkUserOauthUrlRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: GenerateLinkUserOauthUrlRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: GenerateLinkUserOauthUrlRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: GenerateLinkUserOauthUrlRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { json: GenerateLinkUserOauthUrlRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: GenerateLinkUserOauthUrlRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { json: GenerateLinkUserOauthUrlRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { json: GenerateLinkUserOauthUrlRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { json: GenerateLinkUserOauthUrlRequestDto }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: GenerateLinkUserOauthUrlRequestDto }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: GenerateLinkUserOauthUrlRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: GenerateLinkUserOauthUrlRequestDto }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/integrations/channel-endpoints/link': {
      $post:
        | {
            input: { json: LinkChannelEndpointRequestDto }
            output: { data?: LinkChannelEndpointResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: LinkChannelEndpointRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: LinkChannelEndpointRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: LinkChannelEndpointRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: LinkChannelEndpointRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: LinkChannelEndpointRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { json: LinkChannelEndpointRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: LinkChannelEndpointRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { json: LinkChannelEndpointRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { json: LinkChannelEndpointRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { json: LinkChannelEndpointRequestDto }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: LinkChannelEndpointRequestDto }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: LinkChannelEndpointRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: LinkChannelEndpointRequestDto }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/integrations/:integrationIdentifier/webhook/configure': {
      $post:
        | {
            input: { param: { integrationIdentifier: string } }
            output: { data?: ConfigureTelegramWebhookResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { integrationIdentifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { integrationIdentifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { integrationIdentifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { integrationIdentifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { integrationIdentifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { integrationIdentifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { integrationIdentifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { integrationIdentifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { integrationIdentifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { integrationIdentifier: string } }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { integrationIdentifier: string } }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { integrationIdentifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { integrationIdentifier: string } }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/integrations/:integrationIdentifier/mobile-link': {
      $post:
        | {
            input: { param: { integrationIdentifier: string } } & {
              json: IssueIntegrationMobileLinkRequestDto
            }
            output: { data?: IssueTelegramMobileLinkResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { integrationIdentifier: string } } & {
              json: IssueIntegrationMobileLinkRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { integrationIdentifier: string } } & {
              json: IssueIntegrationMobileLinkRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { integrationIdentifier: string } } & {
              json: IssueIntegrationMobileLinkRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { integrationIdentifier: string } } & {
              json: IssueIntegrationMobileLinkRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { integrationIdentifier: string } } & {
              json: IssueIntegrationMobileLinkRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { integrationIdentifier: string } } & {
              json: IssueIntegrationMobileLinkRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { integrationIdentifier: string } } & {
              json: IssueIntegrationMobileLinkRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { integrationIdentifier: string } } & {
              json: IssueIntegrationMobileLinkRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { integrationIdentifier: string } } & {
              json: IssueIntegrationMobileLinkRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { integrationIdentifier: string } } & {
              json: IssueIntegrationMobileLinkRequestDto
            }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { integrationIdentifier: string } } & {
              json: IssueIntegrationMobileLinkRequestDto
            }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { integrationIdentifier: string } } & {
              json: IssueIntegrationMobileLinkRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { integrationIdentifier: string } } & {
              json: IssueIntegrationMobileLinkRequestDto
            }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/contexts': {
      $post:
        | {
            input: { json: CreateContextRequestDto }
            output: { data?: GetContextResponseDto | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateContextRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateContextRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateContextRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateContextRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateContextRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { json: CreateContextRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: CreateContextRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { json: CreateContextRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { json: CreateContextRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { json: CreateContextRequestDto }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: CreateContextRequestDto }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: CreateContextRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: CreateContextRequestDto }
            output: string
            outputFormat: 'json'
            status: 503
          }
      $get:
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                type?: string | undefined
                id?: string | undefined
                search?: string | undefined
              }
            }
            output: { data?: ListContextsResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                type?: string | undefined
                id?: string | undefined
                search?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                type?: string | undefined
                id?: string | undefined
                search?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                type?: string | undefined
                id?: string | undefined
                search?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                type?: string | undefined
                id?: string | undefined
                search?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                type?: string | undefined
                id?: string | undefined
                search?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                type?: string | undefined
                id?: string | undefined
                search?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                type?: string | undefined
                id?: string | undefined
                search?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                type?: string | undefined
                id?: string | undefined
                search?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                type?: string | undefined
                id?: string | undefined
                search?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                type?: string | undefined
                id?: string | undefined
                search?: string | undefined
              }
            }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                type?: string | undefined
                id?: string | undefined
                search?: string | undefined
              }
            }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                type?: string | undefined
                id?: string | undefined
                search?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                type?: string | undefined
                id?: string | undefined
                search?: string | undefined
              }
            }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/contexts/:type/:id': {
      $patch:
        | {
            input: { param: { id: string; type: string } } & { json: UpdateContextRequestDto }
            output: { data?: GetContextResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; type: string } } & { json: UpdateContextRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string; type: string } } & { json: UpdateContextRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string; type: string } } & { json: UpdateContextRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string; type: string } } & { json: UpdateContextRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string; type: string } } & { json: UpdateContextRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { id: string; type: string } } & { json: UpdateContextRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string; type: string } } & { json: UpdateContextRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { id: string; type: string } } & { json: UpdateContextRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { id: string; type: string } } & { json: UpdateContextRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id: string; type: string } } & { json: UpdateContextRequestDto }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string; type: string } } & { json: UpdateContextRequestDto }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string; type: string } } & { json: UpdateContextRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string; type: string } } & { json: UpdateContextRequestDto }
            output: string
            outputFormat: 'json'
            status: 503
          }
      $get:
        | {
            input: { param: { id: string; type: string } }
            output: { data?: GetContextResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; type: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string; type: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string; type: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string; type: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string; type: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { id: string; type: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string; type: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { id: string; type: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { id: string; type: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id: string; type: string } }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string; type: string } }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string; type: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string; type: string } }
            output: string
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | {
            input: { param: { id: string; type: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string; type: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string; type: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string; type: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string; type: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string; type: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { id: string; type: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string; type: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { id: string; type: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { id: string; type: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id: string; type: string } }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string; type: string } }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string; type: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string; type: string } }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/subscribers/bulk': {
      $post:
        | {
            input: { json: BulkSubscriberCreateDto }
            output: { data?: BulkCreateSubscriberResponseDto | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: BulkSubscriberCreateDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: BulkSubscriberCreateDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: BulkSubscriberCreateDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: BulkSubscriberCreateDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: BulkSubscriberCreateDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { json: BulkSubscriberCreateDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: BulkSubscriberCreateDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { json: BulkSubscriberCreateDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { json: BulkSubscriberCreateDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { json: BulkSubscriberCreateDto }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: BulkSubscriberCreateDto }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: BulkSubscriberCreateDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: BulkSubscriberCreateDto }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/subscribers/:subscriberId/credentials': {
      $put:
        | {
            input: { param: { subscriberId: string } } & { json: UpdateSubscriberChannelRequestDto }
            output: { data?: SubscriberResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscriberId: string } } & { json: UpdateSubscriberChannelRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscriberId: string } } & { json: UpdateSubscriberChannelRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscriberId: string } } & { json: UpdateSubscriberChannelRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscriberId: string } } & { json: UpdateSubscriberChannelRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscriberId: string } } & { json: UpdateSubscriberChannelRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { subscriberId: string } } & { json: UpdateSubscriberChannelRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { subscriberId: string } } & { json: UpdateSubscriberChannelRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { subscriberId: string } } & { json: UpdateSubscriberChannelRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { subscriberId: string } } & { json: UpdateSubscriberChannelRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { subscriberId: string } } & { json: UpdateSubscriberChannelRequestDto }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { subscriberId: string } } & { json: UpdateSubscriberChannelRequestDto }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { subscriberId: string } } & { json: UpdateSubscriberChannelRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subscriberId: string } } & { json: UpdateSubscriberChannelRequestDto }
            output: string
            outputFormat: 'json'
            status: 503
          }
      $patch:
        | {
            input: { param: { subscriberId: string } } & { json: UpdateSubscriberChannelRequestDto }
            output: { data?: SubscriberResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscriberId: string } } & { json: UpdateSubscriberChannelRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscriberId: string } } & { json: UpdateSubscriberChannelRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscriberId: string } } & { json: UpdateSubscriberChannelRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscriberId: string } } & { json: UpdateSubscriberChannelRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscriberId: string } } & { json: UpdateSubscriberChannelRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { subscriberId: string } } & { json: UpdateSubscriberChannelRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { subscriberId: string } } & { json: UpdateSubscriberChannelRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { subscriberId: string } } & { json: UpdateSubscriberChannelRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { subscriberId: string } } & { json: UpdateSubscriberChannelRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { subscriberId: string } } & { json: UpdateSubscriberChannelRequestDto }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { subscriberId: string } } & { json: UpdateSubscriberChannelRequestDto }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { subscriberId: string } } & { json: UpdateSubscriberChannelRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subscriberId: string } } & { json: UpdateSubscriberChannelRequestDto }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/subscribers/:subscriberId/credentials/:providerId': {
      $delete:
        | {
            input: { param: { subscriberId: string; providerId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { subscriberId: string; providerId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscriberId: string; providerId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscriberId: string; providerId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscriberId: string; providerId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscriberId: string; providerId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { subscriberId: string; providerId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { subscriberId: string; providerId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { subscriberId: string; providerId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { subscriberId: string; providerId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { subscriberId: string; providerId: string } }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { subscriberId: string; providerId: string } }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { subscriberId: string; providerId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subscriberId: string; providerId: string } }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/subscribers/:subscriberId/online-status': {
      $patch:
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateSubscriberOnlineFlagRequestDto
            }
            output: { data?: SubscriberResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateSubscriberOnlineFlagRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateSubscriberOnlineFlagRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateSubscriberOnlineFlagRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateSubscriberOnlineFlagRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateSubscriberOnlineFlagRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateSubscriberOnlineFlagRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateSubscriberOnlineFlagRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateSubscriberOnlineFlagRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateSubscriberOnlineFlagRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateSubscriberOnlineFlagRequestDto
            }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateSubscriberOnlineFlagRequestDto
            }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateSubscriberOnlineFlagRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateSubscriberOnlineFlagRequestDto
            }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/subscribers/:subscriberId/notifications/feed': {
      $get:
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                page?: number | undefined
                limit?: number | undefined
                feedIdentifier?: string[] | undefined
                read?: boolean | undefined
                seen?: boolean | undefined
                payload?: string | undefined
              }
            }
            output: { data?: FeedResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                page?: number | undefined
                limit?: number | undefined
                feedIdentifier?: string[] | undefined
                read?: boolean | undefined
                seen?: boolean | undefined
                payload?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                page?: number | undefined
                limit?: number | undefined
                feedIdentifier?: string[] | undefined
                read?: boolean | undefined
                seen?: boolean | undefined
                payload?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                page?: number | undefined
                limit?: number | undefined
                feedIdentifier?: string[] | undefined
                read?: boolean | undefined
                seen?: boolean | undefined
                payload?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                page?: number | undefined
                limit?: number | undefined
                feedIdentifier?: string[] | undefined
                read?: boolean | undefined
                seen?: boolean | undefined
                payload?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                page?: number | undefined
                limit?: number | undefined
                feedIdentifier?: string[] | undefined
                read?: boolean | undefined
                seen?: boolean | undefined
                payload?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                page?: number | undefined
                limit?: number | undefined
                feedIdentifier?: string[] | undefined
                read?: boolean | undefined
                seen?: boolean | undefined
                payload?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                page?: number | undefined
                limit?: number | undefined
                feedIdentifier?: string[] | undefined
                read?: boolean | undefined
                seen?: boolean | undefined
                payload?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                page?: number | undefined
                limit?: number | undefined
                feedIdentifier?: string[] | undefined
                read?: boolean | undefined
                seen?: boolean | undefined
                payload?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                page?: number | undefined
                limit?: number | undefined
                feedIdentifier?: string[] | undefined
                read?: boolean | undefined
                seen?: boolean | undefined
                payload?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                page?: number | undefined
                limit?: number | undefined
                feedIdentifier?: string[] | undefined
                read?: boolean | undefined
                seen?: boolean | undefined
                payload?: string | undefined
              }
            }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                page?: number | undefined
                limit?: number | undefined
                feedIdentifier?: string[] | undefined
                read?: boolean | undefined
                seen?: boolean | undefined
                payload?: string | undefined
              }
            }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                page?: number | undefined
                limit?: number | undefined
                feedIdentifier?: string[] | undefined
                read?: boolean | undefined
                seen?: boolean | undefined
                payload?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                page?: number | undefined
                limit?: number | undefined
                feedIdentifier?: string[] | undefined
                read?: boolean | undefined
                seen?: boolean | undefined
                payload?: string | undefined
              }
            }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/subscribers/:subscriberId/notifications/unseen': {
      $get:
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                feedId?: string[] | undefined
                seen?: boolean | undefined
                limit?: number | undefined
              }
            }
            output: { data?: UnseenCountResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                feedId?: string[] | undefined
                seen?: boolean | undefined
                limit?: number | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                feedId?: string[] | undefined
                seen?: boolean | undefined
                limit?: number | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                feedId?: string[] | undefined
                seen?: boolean | undefined
                limit?: number | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                feedId?: string[] | undefined
                seen?: boolean | undefined
                limit?: number | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                feedId?: string[] | undefined
                seen?: boolean | undefined
                limit?: number | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                feedId?: string[] | undefined
                seen?: boolean | undefined
                limit?: number | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                feedId?: string[] | undefined
                seen?: boolean | undefined
                limit?: number | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                feedId?: string[] | undefined
                seen?: boolean | undefined
                limit?: number | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                feedId?: string[] | undefined
                seen?: boolean | undefined
                limit?: number | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                feedId?: string[] | undefined
                seen?: boolean | undefined
                limit?: number | undefined
              }
            }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                feedId?: string[] | undefined
                seen?: boolean | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                feedId?: string[] | undefined
                seen?: boolean | undefined
                limit?: number | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                feedId?: string[] | undefined
                seen?: boolean | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/subscribers/:subscriberId/messages/mark-as': {
      $post:
        | {
            input: { param: { subscriberId: string } } & { json: MessageMarkAsRequestDto }
            output: { data?: MessageResponseDto[] | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { subscriberId: string } } & { json: MessageMarkAsRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscriberId: string } } & { json: MessageMarkAsRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscriberId: string } } & { json: MessageMarkAsRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscriberId: string } } & { json: MessageMarkAsRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscriberId: string } } & { json: MessageMarkAsRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { subscriberId: string } } & { json: MessageMarkAsRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { subscriberId: string } } & { json: MessageMarkAsRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { subscriberId: string } } & { json: MessageMarkAsRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { subscriberId: string } } & { json: MessageMarkAsRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { subscriberId: string } } & { json: MessageMarkAsRequestDto }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { subscriberId: string } } & { json: MessageMarkAsRequestDto }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { subscriberId: string } } & { json: MessageMarkAsRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subscriberId: string } } & { json: MessageMarkAsRequestDto }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/subscribers/:subscriberId/messages/mark-all': {
      $post:
        | {
            input: { param: { subscriberId: string } } & { json: MarkAllMessageAsRequestDto }
            output: number
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { subscriberId: string } } & { json: MarkAllMessageAsRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscriberId: string } } & { json: MarkAllMessageAsRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscriberId: string } } & { json: MarkAllMessageAsRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscriberId: string } } & { json: MarkAllMessageAsRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscriberId: string } } & { json: MarkAllMessageAsRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { subscriberId: string } } & { json: MarkAllMessageAsRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { subscriberId: string } } & { json: MarkAllMessageAsRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { subscriberId: string } } & { json: MarkAllMessageAsRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { subscriberId: string } } & { json: MarkAllMessageAsRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { subscriberId: string } } & { json: MarkAllMessageAsRequestDto }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { subscriberId: string } } & { json: MarkAllMessageAsRequestDto }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { subscriberId: string } } & { json: MarkAllMessageAsRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subscriberId: string } } & { json: MarkAllMessageAsRequestDto }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/subscribers/:subscriberId/messages/:messageId/actions/:type': {
      $post:
        | {
            input: {
              param: { messageId: string; type: 'primary' | 'secondary'; subscriberId: string }
            } & { json: MarkMessageActionAsSeenDto }
            output: { data?: MessageResponseDto | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              param: { messageId: string; type: 'primary' | 'secondary'; subscriberId: string }
            } & { json: MarkMessageActionAsSeenDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { messageId: string; type: 'primary' | 'secondary'; subscriberId: string }
            } & { json: MarkMessageActionAsSeenDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { messageId: string; type: 'primary' | 'secondary'; subscriberId: string }
            } & { json: MarkMessageActionAsSeenDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { messageId: string; type: 'primary' | 'secondary'; subscriberId: string }
            } & { json: MarkMessageActionAsSeenDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { messageId: string; type: 'primary' | 'secondary'; subscriberId: string }
            } & { json: MarkMessageActionAsSeenDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: {
              param: { messageId: string; type: 'primary' | 'secondary'; subscriberId: string }
            } & { json: MarkMessageActionAsSeenDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              param: { messageId: string; type: 'primary' | 'secondary'; subscriberId: string }
            } & { json: MarkMessageActionAsSeenDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: {
              param: { messageId: string; type: 'primary' | 'secondary'; subscriberId: string }
            } & { json: MarkMessageActionAsSeenDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: {
              param: { messageId: string; type: 'primary' | 'secondary'; subscriberId: string }
            } & { json: MarkMessageActionAsSeenDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              param: { messageId: string; type: 'primary' | 'secondary'; subscriberId: string }
            } & { json: MarkMessageActionAsSeenDto }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              param: { messageId: string; type: 'primary' | 'secondary'; subscriberId: string }
            } & { json: MarkMessageActionAsSeenDto }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: { messageId: string; type: 'primary' | 'secondary'; subscriberId: string }
            } & { json: MarkMessageActionAsSeenDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              param: { messageId: string; type: 'primary' | 'secondary'; subscriberId: string }
            } & { json: MarkMessageActionAsSeenDto }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/subscribers': {
      $get:
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                email?: string | undefined
                name?: string | undefined
                phone?: string | undefined
                subscriberId?: string | undefined
              }
            }
            output: { data?: ListSubscribersResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                email?: string | undefined
                name?: string | undefined
                phone?: string | undefined
                subscriberId?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                email?: string | undefined
                name?: string | undefined
                phone?: string | undefined
                subscriberId?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                email?: string | undefined
                name?: string | undefined
                phone?: string | undefined
                subscriberId?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                email?: string | undefined
                name?: string | undefined
                phone?: string | undefined
                subscriberId?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                email?: string | undefined
                name?: string | undefined
                phone?: string | undefined
                subscriberId?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                email?: string | undefined
                name?: string | undefined
                phone?: string | undefined
                subscriberId?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                email?: string | undefined
                name?: string | undefined
                phone?: string | undefined
                subscriberId?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                email?: string | undefined
                name?: string | undefined
                phone?: string | undefined
                subscriberId?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                email?: string | undefined
                name?: string | undefined
                phone?: string | undefined
                subscriberId?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                email?: string | undefined
                name?: string | undefined
                phone?: string | undefined
                subscriberId?: string | undefined
              }
            }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                email?: string | undefined
                name?: string | undefined
                phone?: string | undefined
                subscriberId?: string | undefined
              }
            }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                email?: string | undefined
                name?: string | undefined
                phone?: string | undefined
                subscriberId?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                email?: string | undefined
                name?: string | undefined
                phone?: string | undefined
                subscriberId?: string | undefined
              }
            }
            output: string
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: { query: { failIfExists?: boolean | undefined } } & {
              json: CreateSubscriberRequestDto
            }
            output: { data?: SubscriberResponseDto | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { failIfExists?: boolean | undefined } } & {
              json: CreateSubscriberRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { failIfExists?: boolean | undefined } } & {
              json: CreateSubscriberRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { failIfExists?: boolean | undefined } } & {
              json: CreateSubscriberRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { failIfExists?: boolean | undefined } } & {
              json: CreateSubscriberRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { failIfExists?: boolean | undefined } } & {
              json: CreateSubscriberRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { query: { failIfExists?: boolean | undefined } } & {
              json: CreateSubscriberRequestDto
            }
            output: SubscriberResponseDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { query: { failIfExists?: boolean | undefined } } & {
              json: CreateSubscriberRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { query: { failIfExists?: boolean | undefined } } & {
              json: CreateSubscriberRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { query: { failIfExists?: boolean | undefined } } & {
              json: CreateSubscriberRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { query: { failIfExists?: boolean | undefined } } & {
              json: CreateSubscriberRequestDto
            }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { failIfExists?: boolean | undefined } } & {
              json: CreateSubscriberRequestDto
            }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { failIfExists?: boolean | undefined } } & {
              json: CreateSubscriberRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { failIfExists?: boolean | undefined } } & {
              json: CreateSubscriberRequestDto
            }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/subscribers/:subscriberId': {
      $get:
        | {
            input: { param: { subscriberId: string } }
            output: { data?: SubscriberResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscriberId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscriberId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscriberId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscriberId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscriberId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { subscriberId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { subscriberId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { subscriberId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { subscriberId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { subscriberId: string } }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { subscriberId: string } }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { subscriberId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subscriberId: string } }
            output: string
            outputFormat: 'json'
            status: 503
          }
      $patch:
        | {
            input: { param: { subscriberId: string } } & { json: PatchSubscriberRequestDto }
            output: { data?: SubscriberResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscriberId: string } } & { json: PatchSubscriberRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscriberId: string } } & { json: PatchSubscriberRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscriberId: string } } & { json: PatchSubscriberRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscriberId: string } } & { json: PatchSubscriberRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscriberId: string } } & { json: PatchSubscriberRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { subscriberId: string } } & { json: PatchSubscriberRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { subscriberId: string } } & { json: PatchSubscriberRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { subscriberId: string } } & { json: PatchSubscriberRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { subscriberId: string } } & { json: PatchSubscriberRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { subscriberId: string } } & { json: PatchSubscriberRequestDto }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { subscriberId: string } } & { json: PatchSubscriberRequestDto }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { subscriberId: string } } & { json: PatchSubscriberRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subscriberId: string } } & { json: PatchSubscriberRequestDto }
            output: string
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | {
            input: { param: { subscriberId: string } }
            output: { data?: RemoveSubscriberResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscriberId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscriberId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscriberId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscriberId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscriberId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { subscriberId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { subscriberId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { subscriberId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { subscriberId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { subscriberId: string } }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { subscriberId: string } }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { subscriberId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subscriberId: string } }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/subscribers/:subscriberId/preferences': {
      $get:
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                criticality?: 'critical' | 'nonCritical' | 'all' | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: { data?: GetSubscriberPreferencesDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                criticality?: 'critical' | 'nonCritical' | 'all' | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                criticality?: 'critical' | 'nonCritical' | 'all' | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                criticality?: 'critical' | 'nonCritical' | 'all' | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                criticality?: 'critical' | 'nonCritical' | 'all' | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                criticality?: 'critical' | 'nonCritical' | 'all' | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                criticality?: 'critical' | 'nonCritical' | 'all' | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                criticality?: 'critical' | 'nonCritical' | 'all' | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                criticality?: 'critical' | 'nonCritical' | 'all' | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                criticality?: 'critical' | 'nonCritical' | 'all' | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                criticality?: 'critical' | 'nonCritical' | 'all' | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                criticality?: 'critical' | 'nonCritical' | 'all' | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                criticality?: 'critical' | 'nonCritical' | 'all' | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                criticality?: 'critical' | 'nonCritical' | 'all' | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: string
            outputFormat: 'json'
            status: 503
          }
      $patch:
        | {
            input: { param: { subscriberId: string } } & { json: PatchSubscriberPreferencesDto }
            output: { data?: GetSubscriberPreferencesDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscriberId: string } } & { json: PatchSubscriberPreferencesDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscriberId: string } } & { json: PatchSubscriberPreferencesDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscriberId: string } } & { json: PatchSubscriberPreferencesDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscriberId: string } } & { json: PatchSubscriberPreferencesDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscriberId: string } } & { json: PatchSubscriberPreferencesDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { subscriberId: string } } & { json: PatchSubscriberPreferencesDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { subscriberId: string } } & { json: PatchSubscriberPreferencesDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { subscriberId: string } } & { json: PatchSubscriberPreferencesDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { subscriberId: string } } & { json: PatchSubscriberPreferencesDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { subscriberId: string } } & { json: PatchSubscriberPreferencesDto }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { subscriberId: string } } & { json: PatchSubscriberPreferencesDto }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { subscriberId: string } } & { json: PatchSubscriberPreferencesDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subscriberId: string } } & { json: PatchSubscriberPreferencesDto }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/subscribers/:subscriberId/preferences/bulk': {
      $patch:
        | {
            input: { param: { subscriberId: string } } & {
              json: BulkUpdateSubscriberPreferencesDto
            }
            output: { data?: GetPreferencesResponseDto[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: BulkUpdateSubscriberPreferencesDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: BulkUpdateSubscriberPreferencesDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: BulkUpdateSubscriberPreferencesDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: BulkUpdateSubscriberPreferencesDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: BulkUpdateSubscriberPreferencesDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: BulkUpdateSubscriberPreferencesDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: BulkUpdateSubscriberPreferencesDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: BulkUpdateSubscriberPreferencesDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: BulkUpdateSubscriberPreferencesDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: BulkUpdateSubscriberPreferencesDto
            }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: BulkUpdateSubscriberPreferencesDto
            }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: BulkUpdateSubscriberPreferencesDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: BulkUpdateSubscriberPreferencesDto
            }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/subscribers/:subscriberId/subscriptions': {
      $get:
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                key?: string | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: { data?: ListTopicSubscriptionsResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                key?: string | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                key?: string | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                key?: string | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                key?: string | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                key?: string | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                key?: string | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                key?: string | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                key?: string | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                key?: string | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                key?: string | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                key?: string | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                key?: string | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                key?: string | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/subscribers/:subscriberId/tokens': {
      $post:
        | {
            input: { param: { subscriberId: string } } & { json: CreateSubscriberTokenRequestDto }
            output: { data?: CreateSubscriberTokenResponseDto | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { subscriberId: string } } & { json: CreateSubscriberTokenRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscriberId: string } } & { json: CreateSubscriberTokenRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscriberId: string } } & { json: CreateSubscriberTokenRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscriberId: string } } & { json: CreateSubscriberTokenRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscriberId: string } } & { json: CreateSubscriberTokenRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { subscriberId: string } } & { json: CreateSubscriberTokenRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { subscriberId: string } } & { json: CreateSubscriberTokenRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { subscriberId: string } } & { json: CreateSubscriberTokenRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { subscriberId: string } } & { json: CreateSubscriberTokenRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { subscriberId: string } } & { json: CreateSubscriberTokenRequestDto }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { subscriberId: string } } & { json: CreateSubscriberTokenRequestDto }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { subscriberId: string } } & { json: CreateSubscriberTokenRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subscriberId: string } } & { json: CreateSubscriberTokenRequestDto }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/subscribers/:subscriberId/notifications': {
      $get:
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                limit?: number | undefined
                after?: string | undefined
                offset?: number | undefined
                tags?: string[] | undefined
                read?: boolean | undefined
                archived?: boolean | undefined
                snoozed?: boolean | undefined
                seen?: boolean | undefined
                data?: string | undefined
                severity?: ('high' | 'medium' | 'low' | 'none')[] | undefined
                createdGte?: number | undefined
                createdLte?: number | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: { data?: GetSubscriberNotificationsResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                limit?: number | undefined
                after?: string | undefined
                offset?: number | undefined
                tags?: string[] | undefined
                read?: boolean | undefined
                archived?: boolean | undefined
                snoozed?: boolean | undefined
                seen?: boolean | undefined
                data?: string | undefined
                severity?: ('high' | 'medium' | 'low' | 'none')[] | undefined
                createdGte?: number | undefined
                createdLte?: number | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                limit?: number | undefined
                after?: string | undefined
                offset?: number | undefined
                tags?: string[] | undefined
                read?: boolean | undefined
                archived?: boolean | undefined
                snoozed?: boolean | undefined
                seen?: boolean | undefined
                data?: string | undefined
                severity?: ('high' | 'medium' | 'low' | 'none')[] | undefined
                createdGte?: number | undefined
                createdLte?: number | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                limit?: number | undefined
                after?: string | undefined
                offset?: number | undefined
                tags?: string[] | undefined
                read?: boolean | undefined
                archived?: boolean | undefined
                snoozed?: boolean | undefined
                seen?: boolean | undefined
                data?: string | undefined
                severity?: ('high' | 'medium' | 'low' | 'none')[] | undefined
                createdGte?: number | undefined
                createdLte?: number | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                limit?: number | undefined
                after?: string | undefined
                offset?: number | undefined
                tags?: string[] | undefined
                read?: boolean | undefined
                archived?: boolean | undefined
                snoozed?: boolean | undefined
                seen?: boolean | undefined
                data?: string | undefined
                severity?: ('high' | 'medium' | 'low' | 'none')[] | undefined
                createdGte?: number | undefined
                createdLte?: number | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                limit?: number | undefined
                after?: string | undefined
                offset?: number | undefined
                tags?: string[] | undefined
                read?: boolean | undefined
                archived?: boolean | undefined
                snoozed?: boolean | undefined
                seen?: boolean | undefined
                data?: string | undefined
                severity?: ('high' | 'medium' | 'low' | 'none')[] | undefined
                createdGte?: number | undefined
                createdLte?: number | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                limit?: number | undefined
                after?: string | undefined
                offset?: number | undefined
                tags?: string[] | undefined
                read?: boolean | undefined
                archived?: boolean | undefined
                snoozed?: boolean | undefined
                seen?: boolean | undefined
                data?: string | undefined
                severity?: ('high' | 'medium' | 'low' | 'none')[] | undefined
                createdGte?: number | undefined
                createdLte?: number | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                limit?: number | undefined
                after?: string | undefined
                offset?: number | undefined
                tags?: string[] | undefined
                read?: boolean | undefined
                archived?: boolean | undefined
                snoozed?: boolean | undefined
                seen?: boolean | undefined
                data?: string | undefined
                severity?: ('high' | 'medium' | 'low' | 'none')[] | undefined
                createdGte?: number | undefined
                createdLte?: number | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                limit?: number | undefined
                after?: string | undefined
                offset?: number | undefined
                tags?: string[] | undefined
                read?: boolean | undefined
                archived?: boolean | undefined
                snoozed?: boolean | undefined
                seen?: boolean | undefined
                data?: string | undefined
                severity?: ('high' | 'medium' | 'low' | 'none')[] | undefined
                createdGte?: number | undefined
                createdLte?: number | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                limit?: number | undefined
                after?: string | undefined
                offset?: number | undefined
                tags?: string[] | undefined
                read?: boolean | undefined
                archived?: boolean | undefined
                snoozed?: boolean | undefined
                seen?: boolean | undefined
                data?: string | undefined
                severity?: ('high' | 'medium' | 'low' | 'none')[] | undefined
                createdGte?: number | undefined
                createdLte?: number | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                limit?: number | undefined
                after?: string | undefined
                offset?: number | undefined
                tags?: string[] | undefined
                read?: boolean | undefined
                archived?: boolean | undefined
                snoozed?: boolean | undefined
                seen?: boolean | undefined
                data?: string | undefined
                severity?: ('high' | 'medium' | 'low' | 'none')[] | undefined
                createdGte?: number | undefined
                createdLte?: number | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                limit?: number | undefined
                after?: string | undefined
                offset?: number | undefined
                tags?: string[] | undefined
                read?: boolean | undefined
                archived?: boolean | undefined
                snoozed?: boolean | undefined
                seen?: boolean | undefined
                data?: string | undefined
                severity?: ('high' | 'medium' | 'low' | 'none')[] | undefined
                createdGte?: number | undefined
                createdLte?: number | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                limit?: number | undefined
                after?: string | undefined
                offset?: number | undefined
                tags?: string[] | undefined
                read?: boolean | undefined
                archived?: boolean | undefined
                snoozed?: boolean | undefined
                seen?: boolean | undefined
                data?: string | undefined
                severity?: ('high' | 'medium' | 'low' | 'none')[] | undefined
                createdGte?: number | undefined
                createdLte?: number | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subscriberId: string } } & {
              query: {
                limit?: number | undefined
                after?: string | undefined
                offset?: number | undefined
                tags?: string[] | undefined
                read?: boolean | undefined
                archived?: boolean | undefined
                snoozed?: boolean | undefined
                seen?: boolean | undefined
                data?: string | undefined
                severity?: ('high' | 'medium' | 'low' | 'none')[] | undefined
                createdGte?: number | undefined
                createdLte?: number | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/subscribers/:subscriberId/notifications/count': {
      $get:
        | {
            input: { param: { subscriberId: string } } & { query: { filters: string } }
            output: { data?: GetSubscriberNotificationsCountResponseDto[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscriberId: string } } & { query: { filters: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscriberId: string } } & { query: { filters: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscriberId: string } } & { query: { filters: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscriberId: string } } & { query: { filters: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscriberId: string } } & { query: { filters: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { subscriberId: string } } & { query: { filters: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { subscriberId: string } } & { query: { filters: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { subscriberId: string } } & { query: { filters: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { subscriberId: string } } & { query: { filters: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { subscriberId: string } } & { query: { filters: string } }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { subscriberId: string } } & { query: { filters: string } }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { subscriberId: string } } & { query: { filters: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subscriberId: string } } & { query: { filters: string } }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/subscribers/:subscriberId/notifications/:notificationId/read': {
      $patch:
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: InboxNotificationDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/subscribers/:subscriberId/notifications/:notificationId/unread': {
      $patch:
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: InboxNotificationDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/subscribers/:subscriberId/notifications/:notificationId/archive': {
      $patch:
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: InboxNotificationDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/subscribers/:subscriberId/notifications/:notificationId/unarchive': {
      $patch:
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: InboxNotificationDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/subscribers/:subscriberId/notifications/:notificationId/snooze': {
      $patch:
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            } & { json: SnoozeSubscriberNotificationDto }
            output: InboxNotificationDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            } & { json: SnoozeSubscriberNotificationDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            } & { json: SnoozeSubscriberNotificationDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            } & { json: SnoozeSubscriberNotificationDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            } & { json: SnoozeSubscriberNotificationDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            } & { json: SnoozeSubscriberNotificationDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            } & { json: SnoozeSubscriberNotificationDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            } & { json: SnoozeSubscriberNotificationDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            } & { json: SnoozeSubscriberNotificationDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            } & { json: SnoozeSubscriberNotificationDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            } & { json: SnoozeSubscriberNotificationDto }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            } & { json: SnoozeSubscriberNotificationDto }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            } & { json: SnoozeSubscriberNotificationDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            } & { json: SnoozeSubscriberNotificationDto }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/subscribers/:subscriberId/notifications/:notificationId/unsnooze': {
      $patch:
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: InboxNotificationDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/subscribers/:subscriberId/notifications/:notificationId': {
      $delete:
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subscriberId: string; notificationId: string } } & {
              query: { contextKeys?: string[] | undefined }
            }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/subscribers/:subscriberId/notifications/:notificationId/actions/:actionType/complete': {
      $patch:
        | {
            input: {
              param: {
                subscriberId: string
                notificationId: string
                actionType: 'primary' | 'secondary'
              }
            } & { query: { contextKeys?: string[] | undefined } }
            output: InboxNotificationDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                subscriberId: string
                notificationId: string
                actionType: 'primary' | 'secondary'
              }
            } & { query: { contextKeys?: string[] | undefined } }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                subscriberId: string
                notificationId: string
                actionType: 'primary' | 'secondary'
              }
            } & { query: { contextKeys?: string[] | undefined } }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                subscriberId: string
                notificationId: string
                actionType: 'primary' | 'secondary'
              }
            } & { query: { contextKeys?: string[] | undefined } }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                subscriberId: string
                notificationId: string
                actionType: 'primary' | 'secondary'
              }
            } & { query: { contextKeys?: string[] | undefined } }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                subscriberId: string
                notificationId: string
                actionType: 'primary' | 'secondary'
              }
            } & { query: { contextKeys?: string[] | undefined } }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: {
              param: {
                subscriberId: string
                notificationId: string
                actionType: 'primary' | 'secondary'
              }
            } & { query: { contextKeys?: string[] | undefined } }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              param: {
                subscriberId: string
                notificationId: string
                actionType: 'primary' | 'secondary'
              }
            } & { query: { contextKeys?: string[] | undefined } }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: {
              param: {
                subscriberId: string
                notificationId: string
                actionType: 'primary' | 'secondary'
              }
            } & { query: { contextKeys?: string[] | undefined } }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: {
              param: {
                subscriberId: string
                notificationId: string
                actionType: 'primary' | 'secondary'
              }
            } & { query: { contextKeys?: string[] | undefined } }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              param: {
                subscriberId: string
                notificationId: string
                actionType: 'primary' | 'secondary'
              }
            } & { query: { contextKeys?: string[] | undefined } }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              param: {
                subscriberId: string
                notificationId: string
                actionType: 'primary' | 'secondary'
              }
            } & { query: { contextKeys?: string[] | undefined } }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: {
                subscriberId: string
                notificationId: string
                actionType: 'primary' | 'secondary'
              }
            } & { query: { contextKeys?: string[] | undefined } }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              param: {
                subscriberId: string
                notificationId: string
                actionType: 'primary' | 'secondary'
              }
            } & { query: { contextKeys?: string[] | undefined } }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/subscribers/:subscriberId/notifications/:notificationId/actions/:actionType/revert': {
      $patch:
        | {
            input: {
              param: {
                subscriberId: string
                notificationId: string
                actionType: 'primary' | 'secondary'
              }
            } & { query: { contextKeys?: string[] | undefined } }
            output: InboxNotificationDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                subscriberId: string
                notificationId: string
                actionType: 'primary' | 'secondary'
              }
            } & { query: { contextKeys?: string[] | undefined } }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                subscriberId: string
                notificationId: string
                actionType: 'primary' | 'secondary'
              }
            } & { query: { contextKeys?: string[] | undefined } }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                subscriberId: string
                notificationId: string
                actionType: 'primary' | 'secondary'
              }
            } & { query: { contextKeys?: string[] | undefined } }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                subscriberId: string
                notificationId: string
                actionType: 'primary' | 'secondary'
              }
            } & { query: { contextKeys?: string[] | undefined } }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                subscriberId: string
                notificationId: string
                actionType: 'primary' | 'secondary'
              }
            } & { query: { contextKeys?: string[] | undefined } }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: {
              param: {
                subscriberId: string
                notificationId: string
                actionType: 'primary' | 'secondary'
              }
            } & { query: { contextKeys?: string[] | undefined } }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              param: {
                subscriberId: string
                notificationId: string
                actionType: 'primary' | 'secondary'
              }
            } & { query: { contextKeys?: string[] | undefined } }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: {
              param: {
                subscriberId: string
                notificationId: string
                actionType: 'primary' | 'secondary'
              }
            } & { query: { contextKeys?: string[] | undefined } }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: {
              param: {
                subscriberId: string
                notificationId: string
                actionType: 'primary' | 'secondary'
              }
            } & { query: { contextKeys?: string[] | undefined } }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              param: {
                subscriberId: string
                notificationId: string
                actionType: 'primary' | 'secondary'
              }
            } & { query: { contextKeys?: string[] | undefined } }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              param: {
                subscriberId: string
                notificationId: string
                actionType: 'primary' | 'secondary'
              }
            } & { query: { contextKeys?: string[] | undefined } }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: {
                subscriberId: string
                notificationId: string
                actionType: 'primary' | 'secondary'
              }
            } & { query: { contextKeys?: string[] | undefined } }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              param: {
                subscriberId: string
                notificationId: string
                actionType: 'primary' | 'secondary'
              }
            } & { query: { contextKeys?: string[] | undefined } }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/subscribers/:subscriberId/notifications/seen': {
      $post:
        | {
            input: { param: { subscriberId: string } } & {
              json: MarkSubscriberNotificationsAsSeenDto
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: MarkSubscriberNotificationsAsSeenDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: MarkSubscriberNotificationsAsSeenDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: MarkSubscriberNotificationsAsSeenDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: MarkSubscriberNotificationsAsSeenDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: MarkSubscriberNotificationsAsSeenDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: MarkSubscriberNotificationsAsSeenDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: MarkSubscriberNotificationsAsSeenDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: MarkSubscriberNotificationsAsSeenDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: MarkSubscriberNotificationsAsSeenDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: MarkSubscriberNotificationsAsSeenDto
            }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: MarkSubscriberNotificationsAsSeenDto
            }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: MarkSubscriberNotificationsAsSeenDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: MarkSubscriberNotificationsAsSeenDto
            }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/subscribers/:subscriberId/notifications/read': {
      $post:
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateAllSubscriberNotificationsDto
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateAllSubscriberNotificationsDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateAllSubscriberNotificationsDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateAllSubscriberNotificationsDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateAllSubscriberNotificationsDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateAllSubscriberNotificationsDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateAllSubscriberNotificationsDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateAllSubscriberNotificationsDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateAllSubscriberNotificationsDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateAllSubscriberNotificationsDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateAllSubscriberNotificationsDto
            }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateAllSubscriberNotificationsDto
            }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateAllSubscriberNotificationsDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateAllSubscriberNotificationsDto
            }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/subscribers/:subscriberId/notifications/archive': {
      $post:
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateAllSubscriberNotificationsDto
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateAllSubscriberNotificationsDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateAllSubscriberNotificationsDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateAllSubscriberNotificationsDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateAllSubscriberNotificationsDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateAllSubscriberNotificationsDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateAllSubscriberNotificationsDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateAllSubscriberNotificationsDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateAllSubscriberNotificationsDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateAllSubscriberNotificationsDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateAllSubscriberNotificationsDto
            }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateAllSubscriberNotificationsDto
            }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateAllSubscriberNotificationsDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateAllSubscriberNotificationsDto
            }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/subscribers/:subscriberId/notifications/read-archive': {
      $post:
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateAllSubscriberNotificationsDto
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateAllSubscriberNotificationsDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateAllSubscriberNotificationsDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateAllSubscriberNotificationsDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateAllSubscriberNotificationsDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateAllSubscriberNotificationsDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateAllSubscriberNotificationsDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateAllSubscriberNotificationsDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateAllSubscriberNotificationsDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateAllSubscriberNotificationsDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateAllSubscriberNotificationsDto
            }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateAllSubscriberNotificationsDto
            }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateAllSubscriberNotificationsDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateAllSubscriberNotificationsDto
            }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/subscribers/:subscriberId/notifications/delete': {
      $post:
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateAllSubscriberNotificationsDto
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateAllSubscriberNotificationsDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateAllSubscriberNotificationsDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateAllSubscriberNotificationsDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateAllSubscriberNotificationsDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateAllSubscriberNotificationsDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateAllSubscriberNotificationsDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateAllSubscriberNotificationsDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateAllSubscriberNotificationsDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateAllSubscriberNotificationsDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateAllSubscriberNotificationsDto
            }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateAllSubscriberNotificationsDto
            }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateAllSubscriberNotificationsDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subscriberId: string } } & {
              json: UpdateAllSubscriberNotificationsDto
            }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/layouts': {
      $post:
        | {
            input: { json: CreateLayoutDto }
            output: { data?: LayoutResponseDto | undefined }
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: CreateLayoutDto }; output: ErrorDto; outputFormat: 'json'; status: 400 }
        | { input: { json: CreateLayoutDto }; output: ErrorDto; outputFormat: 'json'; status: 401 }
        | { input: { json: CreateLayoutDto }; output: ErrorDto; outputFormat: 'json'; status: 403 }
        | { input: { json: CreateLayoutDto }; output: ErrorDto; outputFormat: 'json'; status: 404 }
        | { input: { json: CreateLayoutDto }; output: ErrorDto; outputFormat: 'json'; status: 405 }
        | { input: { json: CreateLayoutDto }; output: ErrorDto; outputFormat: 'json'; status: 409 }
        | { input: { json: CreateLayoutDto }; output: ErrorDto; outputFormat: 'json'; status: 413 }
        | { input: { json: CreateLayoutDto }; output: ErrorDto; outputFormat: 'json'; status: 414 }
        | { input: { json: CreateLayoutDto }; output: ErrorDto; outputFormat: 'json'; status: 415 }
        | {
            input: { json: CreateLayoutDto }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | { input: { json: CreateLayoutDto }; output: string; outputFormat: 'json'; status: 429 }
        | { input: { json: CreateLayoutDto }; output: ErrorDto; outputFormat: 'json'; status: 500 }
        | { input: { json: CreateLayoutDto }; output: string; outputFormat: 'json'; status: 503 }
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                orderDirection?: DirectionEnum | undefined
                orderBy?: LayoutResponseDtoSortField | undefined
                query?: string | undefined
              }
            }
            output: { data?: ListLayoutResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                orderDirection?: DirectionEnum | undefined
                orderBy?: LayoutResponseDtoSortField | undefined
                query?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                orderDirection?: DirectionEnum | undefined
                orderBy?: LayoutResponseDtoSortField | undefined
                query?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                orderDirection?: DirectionEnum | undefined
                orderBy?: LayoutResponseDtoSortField | undefined
                query?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                orderDirection?: DirectionEnum | undefined
                orderBy?: LayoutResponseDtoSortField | undefined
                query?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                orderDirection?: DirectionEnum | undefined
                orderBy?: LayoutResponseDtoSortField | undefined
                query?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                orderDirection?: DirectionEnum | undefined
                orderBy?: LayoutResponseDtoSortField | undefined
                query?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                orderDirection?: DirectionEnum | undefined
                orderBy?: LayoutResponseDtoSortField | undefined
                query?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                orderDirection?: DirectionEnum | undefined
                orderBy?: LayoutResponseDtoSortField | undefined
                query?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                orderDirection?: DirectionEnum | undefined
                orderBy?: LayoutResponseDtoSortField | undefined
                query?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                orderDirection?: DirectionEnum | undefined
                orderBy?: LayoutResponseDtoSortField | undefined
                query?: string | undefined
              }
            }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                orderDirection?: DirectionEnum | undefined
                orderBy?: LayoutResponseDtoSortField | undefined
                query?: string | undefined
              }
            }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                orderDirection?: DirectionEnum | undefined
                orderBy?: LayoutResponseDtoSortField | undefined
                query?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                orderDirection?: DirectionEnum | undefined
                orderBy?: LayoutResponseDtoSortField | undefined
                query?: string | undefined
              }
            }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/layouts/:layoutId': {
      $put:
        | {
            input: { param: { layoutId: string } } & { json: UpdateLayoutDto }
            output: { data?: LayoutResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { layoutId: string } } & { json: UpdateLayoutDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { layoutId: string } } & { json: UpdateLayoutDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { layoutId: string } } & { json: UpdateLayoutDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { layoutId: string } } & { json: UpdateLayoutDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { layoutId: string } } & { json: UpdateLayoutDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { layoutId: string } } & { json: UpdateLayoutDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { layoutId: string } } & { json: UpdateLayoutDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { layoutId: string } } & { json: UpdateLayoutDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { layoutId: string } } & { json: UpdateLayoutDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { layoutId: string } } & { json: UpdateLayoutDto }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { layoutId: string } } & { json: UpdateLayoutDto }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { layoutId: string } } & { json: UpdateLayoutDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { layoutId: string } } & { json: UpdateLayoutDto }
            output: string
            outputFormat: 'json'
            status: 503
          }
      $get:
        | {
            input: { param: { layoutId: string } }
            output: { data?: LayoutResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { layoutId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { layoutId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { layoutId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { layoutId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { layoutId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { layoutId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { layoutId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { layoutId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { layoutId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { layoutId: string } }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { layoutId: string } }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { layoutId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { layoutId: string } }
            output: string
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | { input: { param: { layoutId: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { layoutId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { layoutId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { layoutId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { layoutId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { layoutId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { layoutId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { layoutId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { layoutId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { layoutId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { layoutId: string } }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { layoutId: string } }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { layoutId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { layoutId: string } }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/layouts/:layoutId/duplicate': {
      $post:
        | {
            input: { param: { layoutId: string } } & { json: DuplicateLayoutDto }
            output: { data?: LayoutResponseDto | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { layoutId: string } } & { json: DuplicateLayoutDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { layoutId: string } } & { json: DuplicateLayoutDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { layoutId: string } } & { json: DuplicateLayoutDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { layoutId: string } } & { json: DuplicateLayoutDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { layoutId: string } } & { json: DuplicateLayoutDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { layoutId: string } } & { json: DuplicateLayoutDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { layoutId: string } } & { json: DuplicateLayoutDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { layoutId: string } } & { json: DuplicateLayoutDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { layoutId: string } } & { json: DuplicateLayoutDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { layoutId: string } } & { json: DuplicateLayoutDto }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { layoutId: string } } & { json: DuplicateLayoutDto }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { layoutId: string } } & { json: DuplicateLayoutDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { layoutId: string } } & { json: DuplicateLayoutDto }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/layouts/:layoutId/preview': {
      $post:
        | {
            input: { param: { layoutId: string } } & { json: LayoutPreviewRequestDto }
            output: { data?: GenerateLayoutPreviewResponseDto | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { layoutId: string } } & { json: LayoutPreviewRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { layoutId: string } } & { json: LayoutPreviewRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { layoutId: string } } & { json: LayoutPreviewRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { layoutId: string } } & { json: LayoutPreviewRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { layoutId: string } } & { json: LayoutPreviewRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { layoutId: string } } & { json: LayoutPreviewRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { layoutId: string } } & { json: LayoutPreviewRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { layoutId: string } } & { json: LayoutPreviewRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { layoutId: string } } & { json: LayoutPreviewRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { layoutId: string } } & { json: LayoutPreviewRequestDto }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { layoutId: string } } & { json: LayoutPreviewRequestDto }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { layoutId: string } } & { json: LayoutPreviewRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { layoutId: string } } & { json: LayoutPreviewRequestDto }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/layouts/:layoutId/usage': {
      $get:
        | {
            input: { param: { layoutId: string } }
            output: { data?: GetLayoutUsageResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { layoutId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { layoutId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { layoutId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { layoutId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { layoutId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { layoutId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { layoutId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { layoutId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { layoutId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { layoutId: string } }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { layoutId: string } }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { layoutId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { layoutId: string } }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/messages': {
      $get:
        | {
            input: {
              query: {
                channel?: ChannelTypeEnum | undefined
                subscriberId?: string | undefined
                transactionId?: string[] | undefined
                contextKeys?: string[] | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: MessagesResponseDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                channel?: ChannelTypeEnum | undefined
                subscriberId?: string | undefined
                transactionId?: string[] | undefined
                contextKeys?: string[] | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                channel?: ChannelTypeEnum | undefined
                subscriberId?: string | undefined
                transactionId?: string[] | undefined
                contextKeys?: string[] | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                channel?: ChannelTypeEnum | undefined
                subscriberId?: string | undefined
                transactionId?: string[] | undefined
                contextKeys?: string[] | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                channel?: ChannelTypeEnum | undefined
                subscriberId?: string | undefined
                transactionId?: string[] | undefined
                contextKeys?: string[] | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                channel?: ChannelTypeEnum | undefined
                subscriberId?: string | undefined
                transactionId?: string[] | undefined
                contextKeys?: string[] | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: {
              query: {
                channel?: ChannelTypeEnum | undefined
                subscriberId?: string | undefined
                transactionId?: string[] | undefined
                contextKeys?: string[] | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                channel?: ChannelTypeEnum | undefined
                subscriberId?: string | undefined
                transactionId?: string[] | undefined
                contextKeys?: string[] | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: {
              query: {
                channel?: ChannelTypeEnum | undefined
                subscriberId?: string | undefined
                transactionId?: string[] | undefined
                contextKeys?: string[] | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: {
              query: {
                channel?: ChannelTypeEnum | undefined
                subscriberId?: string | undefined
                transactionId?: string[] | undefined
                contextKeys?: string[] | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                channel?: ChannelTypeEnum | undefined
                subscriberId?: string | undefined
                transactionId?: string[] | undefined
                contextKeys?: string[] | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                channel?: ChannelTypeEnum | undefined
                subscriberId?: string | undefined
                transactionId?: string[] | undefined
                contextKeys?: string[] | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                channel?: ChannelTypeEnum | undefined
                subscriberId?: string | undefined
                transactionId?: string[] | undefined
                contextKeys?: string[] | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                channel?: ChannelTypeEnum | undefined
                subscriberId?: string | undefined
                transactionId?: string[] | undefined
                contextKeys?: string[] | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/messages/:messageId': {
      $delete:
        | {
            input: { param: { messageId: string } }
            output: { data?: DeleteMessageResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { messageId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { messageId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { messageId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { messageId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { messageId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { messageId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { messageId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { messageId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { messageId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { messageId: string } }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { messageId: string } }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { messageId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { messageId: string } }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/messages/transaction/:transactionId': {
      $delete:
        | {
            input: { param: { transactionId: string } } & {
              query: { channel?: 'in_app' | 'email' | 'sms' | 'chat' | 'push' | 'tool' | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { transactionId: string } } & {
              query: { channel?: 'in_app' | 'email' | 'sms' | 'chat' | 'push' | 'tool' | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { transactionId: string } } & {
              query: { channel?: 'in_app' | 'email' | 'sms' | 'chat' | 'push' | 'tool' | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { transactionId: string } } & {
              query: { channel?: 'in_app' | 'email' | 'sms' | 'chat' | 'push' | 'tool' | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { transactionId: string } } & {
              query: { channel?: 'in_app' | 'email' | 'sms' | 'chat' | 'push' | 'tool' | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { transactionId: string } } & {
              query: { channel?: 'in_app' | 'email' | 'sms' | 'chat' | 'push' | 'tool' | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { transactionId: string } } & {
              query: { channel?: 'in_app' | 'email' | 'sms' | 'chat' | 'push' | 'tool' | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { transactionId: string } } & {
              query: { channel?: 'in_app' | 'email' | 'sms' | 'chat' | 'push' | 'tool' | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { transactionId: string } } & {
              query: { channel?: 'in_app' | 'email' | 'sms' | 'chat' | 'push' | 'tool' | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { transactionId: string } } & {
              query: { channel?: 'in_app' | 'email' | 'sms' | 'chat' | 'push' | 'tool' | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { transactionId: string } } & {
              query: { channel?: 'in_app' | 'email' | 'sms' | 'chat' | 'push' | 'tool' | undefined }
            }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { transactionId: string } } & {
              query: { channel?: 'in_app' | 'email' | 'sms' | 'chat' | 'push' | 'tool' | undefined }
            }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { transactionId: string } } & {
              query: { channel?: 'in_app' | 'email' | 'sms' | 'chat' | 'push' | 'tool' | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { transactionId: string } } & {
              query: { channel?: 'in_app' | 'email' | 'sms' | 'chat' | 'push' | 'tool' | undefined }
            }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/topics/:topicKey/subscribers/:externalSubscriberId': {
      $get:
        | {
            input: { param: { externalSubscriberId: string; topicKey: string } }
            output: TopicSubscriberDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { externalSubscriberId: string; topicKey: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { externalSubscriberId: string; topicKey: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { externalSubscriberId: string; topicKey: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { externalSubscriberId: string; topicKey: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { externalSubscriberId: string; topicKey: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { externalSubscriberId: string; topicKey: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { externalSubscriberId: string; topicKey: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { externalSubscriberId: string; topicKey: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { externalSubscriberId: string; topicKey: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { externalSubscriberId: string; topicKey: string } }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { externalSubscriberId: string; topicKey: string } }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { externalSubscriberId: string; topicKey: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { externalSubscriberId: string; topicKey: string } }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/topics': {
      $get:
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                key?: string | undefined
                name?: string | undefined
              }
            }
            output: { data?: ListTopicsResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                key?: string | undefined
                name?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                key?: string | undefined
                name?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                key?: string | undefined
                name?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                key?: string | undefined
                name?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                key?: string | undefined
                name?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                key?: string | undefined
                name?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                key?: string | undefined
                name?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                key?: string | undefined
                name?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                key?: string | undefined
                name?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                key?: string | undefined
                name?: string | undefined
              }
            }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                key?: string | undefined
                name?: string | undefined
              }
            }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                key?: string | undefined
                name?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                key?: string | undefined
                name?: string | undefined
              }
            }
            output: string
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: { query: { failIfExists?: boolean | undefined } } & {
              json: CreateUpdateTopicRequestDto
            }
            output: { data?: TopicResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { failIfExists?: boolean | undefined } } & {
              json: CreateUpdateTopicRequestDto
            }
            output: { data?: TopicResponseDto | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { failIfExists?: boolean | undefined } } & {
              json: CreateUpdateTopicRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { failIfExists?: boolean | undefined } } & {
              json: CreateUpdateTopicRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { failIfExists?: boolean | undefined } } & {
              json: CreateUpdateTopicRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { failIfExists?: boolean | undefined } } & {
              json: CreateUpdateTopicRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { failIfExists?: boolean | undefined } } & {
              json: CreateUpdateTopicRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { query: { failIfExists?: boolean | undefined } } & {
              json: CreateUpdateTopicRequestDto
            }
            output: TopicResponseDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { query: { failIfExists?: boolean | undefined } } & {
              json: CreateUpdateTopicRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { query: { failIfExists?: boolean | undefined } } & {
              json: CreateUpdateTopicRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { query: { failIfExists?: boolean | undefined } } & {
              json: CreateUpdateTopicRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { query: { failIfExists?: boolean | undefined } } & {
              json: CreateUpdateTopicRequestDto
            }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { failIfExists?: boolean | undefined } } & {
              json: CreateUpdateTopicRequestDto
            }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { failIfExists?: boolean | undefined } } & {
              json: CreateUpdateTopicRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { failIfExists?: boolean | undefined } } & {
              json: CreateUpdateTopicRequestDto
            }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/topics/:topicKey': {
      $get:
        | {
            input: { param: { topicKey: string } }
            output: { data?: TopicResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { topicKey: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { topicKey: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { topicKey: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { topicKey: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { topicKey: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { topicKey: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { topicKey: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { topicKey: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { topicKey: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { topicKey: string } }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { topicKey: string } }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { topicKey: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { topicKey: string } }
            output: string
            outputFormat: 'json'
            status: 503
          }
      $patch:
        | {
            input: { param: { topicKey: string } } & { json: UpdateTopicRequestDto }
            output: { data?: TopicResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { topicKey: string } } & { json: UpdateTopicRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { topicKey: string } } & { json: UpdateTopicRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { topicKey: string } } & { json: UpdateTopicRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { topicKey: string } } & { json: UpdateTopicRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { topicKey: string } } & { json: UpdateTopicRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { topicKey: string } } & { json: UpdateTopicRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { topicKey: string } } & { json: UpdateTopicRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { topicKey: string } } & { json: UpdateTopicRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { topicKey: string } } & { json: UpdateTopicRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { topicKey: string } } & { json: UpdateTopicRequestDto }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { topicKey: string } } & { json: UpdateTopicRequestDto }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { topicKey: string } } & { json: UpdateTopicRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { topicKey: string } } & { json: UpdateTopicRequestDto }
            output: string
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | {
            input: { param: { topicKey: string } }
            output: { data?: DeleteTopicResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { topicKey: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { topicKey: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { topicKey: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { topicKey: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { topicKey: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { topicKey: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { topicKey: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { topicKey: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { topicKey: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { topicKey: string } }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { topicKey: string } }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { topicKey: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { topicKey: string } }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/topics/:topicKey/subscriptions': {
      $get:
        | {
            input: { param: { topicKey: string } } & {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                subscriberId?: string | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: { data?: ListTopicSubscriptionsResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { topicKey: string } } & {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                subscriberId?: string | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { topicKey: string } } & {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                subscriberId?: string | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { topicKey: string } } & {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                subscriberId?: string | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { topicKey: string } } & {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                subscriberId?: string | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { topicKey: string } } & {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                subscriberId?: string | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { topicKey: string } } & {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                subscriberId?: string | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { topicKey: string } } & {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                subscriberId?: string | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { topicKey: string } } & {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                subscriberId?: string | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { topicKey: string } } & {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                subscriberId?: string | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { topicKey: string } } & {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                subscriberId?: string | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { topicKey: string } } & {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                subscriberId?: string | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { topicKey: string } } & {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                subscriberId?: string | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { topicKey: string } } & {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                subscriberId?: string | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: string
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: { param: { topicKey: string } } & { json: CreateTopicSubscriptionsRequestDto }
            output: { data?: CreateSubscriptionsResponseDto | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { topicKey: string } } & { json: CreateTopicSubscriptionsRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { topicKey: string } } & { json: CreateTopicSubscriptionsRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { topicKey: string } } & { json: CreateTopicSubscriptionsRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { topicKey: string } } & { json: CreateTopicSubscriptionsRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { topicKey: string } } & { json: CreateTopicSubscriptionsRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { topicKey: string } } & { json: CreateTopicSubscriptionsRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { topicKey: string } } & { json: CreateTopicSubscriptionsRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { topicKey: string } } & { json: CreateTopicSubscriptionsRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { topicKey: string } } & { json: CreateTopicSubscriptionsRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { topicKey: string } } & { json: CreateTopicSubscriptionsRequestDto }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { topicKey: string } } & { json: CreateTopicSubscriptionsRequestDto }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { topicKey: string } } & { json: CreateTopicSubscriptionsRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { topicKey: string } } & { json: CreateTopicSubscriptionsRequestDto }
            output: string
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | {
            input: { param: { topicKey: string } } & { json: DeleteTopicSubscriptionsRequestDto }
            output: DeleteTopicSubscriptionsResponseDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { topicKey: string } } & { json: DeleteTopicSubscriptionsRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { topicKey: string } } & { json: DeleteTopicSubscriptionsRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { topicKey: string } } & { json: DeleteTopicSubscriptionsRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { topicKey: string } } & { json: DeleteTopicSubscriptionsRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { topicKey: string } } & { json: DeleteTopicSubscriptionsRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { topicKey: string } } & { json: DeleteTopicSubscriptionsRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { topicKey: string } } & { json: DeleteTopicSubscriptionsRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { topicKey: string } } & { json: DeleteTopicSubscriptionsRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { topicKey: string } } & { json: DeleteTopicSubscriptionsRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { topicKey: string } } & { json: DeleteTopicSubscriptionsRequestDto }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { topicKey: string } } & { json: DeleteTopicSubscriptionsRequestDto }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { topicKey: string } } & { json: DeleteTopicSubscriptionsRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { topicKey: string } } & { json: DeleteTopicSubscriptionsRequestDto }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/topics/:topicKey/subscriptions/:identifier': {
      $get:
        | {
            input: { param: { topicKey: string; identifier: string } }
            output: { data?: SubscriptionDetailsResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { topicKey: string; identifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { topicKey: string; identifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { topicKey: string; identifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { topicKey: string; identifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { topicKey: string; identifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { topicKey: string; identifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { topicKey: string; identifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { topicKey: string; identifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { topicKey: string; identifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { topicKey: string; identifier: string } }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { topicKey: string; identifier: string } }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { topicKey: string; identifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { topicKey: string; identifier: string } }
            output: string
            outputFormat: 'json'
            status: 503
          }
      $patch:
        | {
            input: { param: { topicKey: string; identifier: string } } & {
              json: UpdateTopicSubscriptionRequestDto
            }
            output: { data?: SubscriptionResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { topicKey: string; identifier: string } } & {
              json: UpdateTopicSubscriptionRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { topicKey: string; identifier: string } } & {
              json: UpdateTopicSubscriptionRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { topicKey: string; identifier: string } } & {
              json: UpdateTopicSubscriptionRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { topicKey: string; identifier: string } } & {
              json: UpdateTopicSubscriptionRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { topicKey: string; identifier: string } } & {
              json: UpdateTopicSubscriptionRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { topicKey: string; identifier: string } } & {
              json: UpdateTopicSubscriptionRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { topicKey: string; identifier: string } } & {
              json: UpdateTopicSubscriptionRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { topicKey: string; identifier: string } } & {
              json: UpdateTopicSubscriptionRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { topicKey: string; identifier: string } } & {
              json: UpdateTopicSubscriptionRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { topicKey: string; identifier: string } } & {
              json: UpdateTopicSubscriptionRequestDto
            }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { topicKey: string; identifier: string } } & {
              json: UpdateTopicSubscriptionRequestDto
            }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { topicKey: string; identifier: string } } & {
              json: UpdateTopicSubscriptionRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { topicKey: string; identifier: string } } & {
              json: UpdateTopicSubscriptionRequestDto
            }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/environment-variables': {
      $get:
        | {
            input: { query: { search?: string | undefined } }
            output: { data?: EnvironmentVariableResponseDto[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { search?: string | undefined } }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { search?: string | undefined } }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { search?: string | undefined } }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { search?: string | undefined } }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { search?: string | undefined } }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { query: { search?: string | undefined } }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { query: { search?: string | undefined } }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { query: { search?: string | undefined } }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { query: { search?: string | undefined } }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { query: { search?: string | undefined } }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { search?: string | undefined } }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { search?: string | undefined } }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { search?: string | undefined } }
            output: string
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: { json: CreateEnvironmentVariableRequestDto }
            output: { data?: EnvironmentVariableResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateEnvironmentVariableRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateEnvironmentVariableRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateEnvironmentVariableRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateEnvironmentVariableRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateEnvironmentVariableRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { json: CreateEnvironmentVariableRequestDto }
            output: string
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: CreateEnvironmentVariableRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { json: CreateEnvironmentVariableRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { json: CreateEnvironmentVariableRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { json: CreateEnvironmentVariableRequestDto }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: CreateEnvironmentVariableRequestDto }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: CreateEnvironmentVariableRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: CreateEnvironmentVariableRequestDto }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/environment-variables/:variableKey/usage': {
      $get:
        | {
            input: { param: { variableKey: string } }
            output: { data?: GetEnvironmentVariableUsageResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { variableKey: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { variableKey: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { variableKey: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { variableKey: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { variableKey: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { variableKey: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { variableKey: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { variableKey: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { variableKey: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { variableKey: string } }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { variableKey: string } }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { variableKey: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { variableKey: string } }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/environment-variables/:variableKey': {
      $get:
        | {
            input: { param: { variableKey: string } }
            output: { data?: EnvironmentVariableResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { variableKey: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { variableKey: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { variableKey: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { variableKey: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { variableKey: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { variableKey: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { variableKey: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { variableKey: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { variableKey: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { variableKey: string } }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { variableKey: string } }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { variableKey: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { variableKey: string } }
            output: string
            outputFormat: 'json'
            status: 503
          }
      $patch:
        | {
            input: { param: { variableKey: string } } & {
              json: UpdateEnvironmentVariableRequestDto
            }
            output: { data?: EnvironmentVariableResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { variableKey: string } } & {
              json: UpdateEnvironmentVariableRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { variableKey: string } } & {
              json: UpdateEnvironmentVariableRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { variableKey: string } } & {
              json: UpdateEnvironmentVariableRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { variableKey: string } } & {
              json: UpdateEnvironmentVariableRequestDto
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { variableKey: string } } & {
              json: UpdateEnvironmentVariableRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { variableKey: string } } & {
              json: UpdateEnvironmentVariableRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { variableKey: string } } & {
              json: UpdateEnvironmentVariableRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { variableKey: string } } & {
              json: UpdateEnvironmentVariableRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { variableKey: string } } & {
              json: UpdateEnvironmentVariableRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { variableKey: string } } & {
              json: UpdateEnvironmentVariableRequestDto
            }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { variableKey: string } } & {
              json: UpdateEnvironmentVariableRequestDto
            }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { variableKey: string } } & {
              json: UpdateEnvironmentVariableRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { variableKey: string } } & {
              json: UpdateEnvironmentVariableRequestDto
            }
            output: string
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | {
            input: { param: { variableKey: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { variableKey: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { variableKey: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { variableKey: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { variableKey: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { variableKey: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { variableKey: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { variableKey: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { variableKey: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { variableKey: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { variableKey: string } }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { variableKey: string } }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { variableKey: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { variableKey: string } }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/workflows': {
      $post:
        | {
            input: { json: CreateWorkflowDto }
            output: { data?: WorkflowResponseDto | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateWorkflowDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateWorkflowDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateWorkflowDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateWorkflowDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateWorkflowDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { json: CreateWorkflowDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: CreateWorkflowDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { json: CreateWorkflowDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { json: CreateWorkflowDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { json: CreateWorkflowDto }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | { input: { json: CreateWorkflowDto }; output: string; outputFormat: 'json'; status: 429 }
        | {
            input: { json: CreateWorkflowDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | { input: { json: CreateWorkflowDto }; output: string; outputFormat: 'json'; status: 503 }
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                orderDirection?: DirectionEnum | undefined
                orderBy?: WorkflowResponseDtoSortField | undefined
                query?: string | undefined
                tags?: string[] | undefined
                status?: WorkflowStatusEnum[] | undefined
              }
            }
            output: { data?: ListWorkflowResponse | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                orderDirection?: DirectionEnum | undefined
                orderBy?: WorkflowResponseDtoSortField | undefined
                query?: string | undefined
                tags?: string[] | undefined
                status?: WorkflowStatusEnum[] | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                orderDirection?: DirectionEnum | undefined
                orderBy?: WorkflowResponseDtoSortField | undefined
                query?: string | undefined
                tags?: string[] | undefined
                status?: WorkflowStatusEnum[] | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                orderDirection?: DirectionEnum | undefined
                orderBy?: WorkflowResponseDtoSortField | undefined
                query?: string | undefined
                tags?: string[] | undefined
                status?: WorkflowStatusEnum[] | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                orderDirection?: DirectionEnum | undefined
                orderBy?: WorkflowResponseDtoSortField | undefined
                query?: string | undefined
                tags?: string[] | undefined
                status?: WorkflowStatusEnum[] | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                orderDirection?: DirectionEnum | undefined
                orderBy?: WorkflowResponseDtoSortField | undefined
                query?: string | undefined
                tags?: string[] | undefined
                status?: WorkflowStatusEnum[] | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                orderDirection?: DirectionEnum | undefined
                orderBy?: WorkflowResponseDtoSortField | undefined
                query?: string | undefined
                tags?: string[] | undefined
                status?: WorkflowStatusEnum[] | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                orderDirection?: DirectionEnum | undefined
                orderBy?: WorkflowResponseDtoSortField | undefined
                query?: string | undefined
                tags?: string[] | undefined
                status?: WorkflowStatusEnum[] | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                orderDirection?: DirectionEnum | undefined
                orderBy?: WorkflowResponseDtoSortField | undefined
                query?: string | undefined
                tags?: string[] | undefined
                status?: WorkflowStatusEnum[] | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                orderDirection?: DirectionEnum | undefined
                orderBy?: WorkflowResponseDtoSortField | undefined
                query?: string | undefined
                tags?: string[] | undefined
                status?: WorkflowStatusEnum[] | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                orderDirection?: DirectionEnum | undefined
                orderBy?: WorkflowResponseDtoSortField | undefined
                query?: string | undefined
                tags?: string[] | undefined
                status?: WorkflowStatusEnum[] | undefined
              }
            }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                orderDirection?: DirectionEnum | undefined
                orderBy?: WorkflowResponseDtoSortField | undefined
                query?: string | undefined
                tags?: string[] | undefined
                status?: WorkflowStatusEnum[] | undefined
              }
            }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                orderDirection?: DirectionEnum | undefined
                orderBy?: WorkflowResponseDtoSortField | undefined
                query?: string | undefined
                tags?: string[] | undefined
                status?: WorkflowStatusEnum[] | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                orderDirection?: DirectionEnum | undefined
                orderBy?: WorkflowResponseDtoSortField | undefined
                query?: string | undefined
                tags?: string[] | undefined
                status?: WorkflowStatusEnum[] | undefined
              }
            }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/workflows/:workflowId/sync': {
      $put:
        | {
            input: { param: { workflowId: string } } & { json: SyncWorkflowDto }
            output: { data?: WorkflowResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workflowId: string } } & { json: SyncWorkflowDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workflowId: string } } & { json: SyncWorkflowDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workflowId: string } } & { json: SyncWorkflowDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workflowId: string } } & { json: SyncWorkflowDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workflowId: string } } & { json: SyncWorkflowDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { workflowId: string } } & { json: SyncWorkflowDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { workflowId: string } } & { json: SyncWorkflowDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { workflowId: string } } & { json: SyncWorkflowDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { workflowId: string } } & { json: SyncWorkflowDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { workflowId: string } } & { json: SyncWorkflowDto }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { workflowId: string } } & { json: SyncWorkflowDto }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { workflowId: string } } & { json: SyncWorkflowDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workflowId: string } } & { json: SyncWorkflowDto }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/workflows/:workflowId': {
      $put:
        | {
            input: { param: { workflowId: string } } & { json: UpdateWorkflowDto }
            output: { data?: WorkflowResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workflowId: string } } & { json: UpdateWorkflowDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workflowId: string } } & { json: UpdateWorkflowDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workflowId: string } } & { json: UpdateWorkflowDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workflowId: string } } & { json: UpdateWorkflowDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workflowId: string } } & { json: UpdateWorkflowDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { workflowId: string } } & { json: UpdateWorkflowDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { workflowId: string } } & { json: UpdateWorkflowDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { workflowId: string } } & { json: UpdateWorkflowDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { workflowId: string } } & { json: UpdateWorkflowDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { workflowId: string } } & { json: UpdateWorkflowDto }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { workflowId: string } } & { json: UpdateWorkflowDto }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { workflowId: string } } & { json: UpdateWorkflowDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workflowId: string } } & { json: UpdateWorkflowDto }
            output: string
            outputFormat: 'json'
            status: 503
          }
      $get:
        | {
            input: { param: { workflowId: string } } & {
              query: { environmentId?: string | undefined }
            }
            output: { data?: WorkflowResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workflowId: string } } & {
              query: { environmentId?: string | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workflowId: string } } & {
              query: { environmentId?: string | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workflowId: string } } & {
              query: { environmentId?: string | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workflowId: string } } & {
              query: { environmentId?: string | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workflowId: string } } & {
              query: { environmentId?: string | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { workflowId: string } } & {
              query: { environmentId?: string | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { workflowId: string } } & {
              query: { environmentId?: string | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { workflowId: string } } & {
              query: { environmentId?: string | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { workflowId: string } } & {
              query: { environmentId?: string | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { workflowId: string } } & {
              query: { environmentId?: string | undefined }
            }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { workflowId: string } } & {
              query: { environmentId?: string | undefined }
            }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { workflowId: string } } & {
              query: { environmentId?: string | undefined }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workflowId: string } } & {
              query: { environmentId?: string | undefined }
            }
            output: string
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | {
            input: { param: { workflowId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { workflowId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workflowId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workflowId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workflowId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workflowId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { workflowId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { workflowId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { workflowId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { workflowId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { workflowId: string } }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { workflowId: string } }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { workflowId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workflowId: string } }
            output: string
            outputFormat: 'json'
            status: 503
          }
      $patch:
        | {
            input: { param: { workflowId: string } } & { json: PatchWorkflowDto }
            output: { data?: WorkflowResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workflowId: string } } & { json: PatchWorkflowDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workflowId: string } } & { json: PatchWorkflowDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workflowId: string } } & { json: PatchWorkflowDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workflowId: string } } & { json: PatchWorkflowDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workflowId: string } } & { json: PatchWorkflowDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { workflowId: string } } & { json: PatchWorkflowDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { workflowId: string } } & { json: PatchWorkflowDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { workflowId: string } } & { json: PatchWorkflowDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { workflowId: string } } & { json: PatchWorkflowDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { workflowId: string } } & { json: PatchWorkflowDto }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { workflowId: string } } & { json: PatchWorkflowDto }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { workflowId: string } } & { json: PatchWorkflowDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workflowId: string } } & { json: PatchWorkflowDto }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/workflows/:workflowId/step/:stepId/preview': {
      $post:
        | {
            input: { param: { workflowId: string; stepId: string } } & {
              json: GeneratePreviewRequestDto
            }
            output: { data?: GeneratePreviewResponseDto | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { workflowId: string; stepId: string } } & {
              json: GeneratePreviewRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workflowId: string; stepId: string } } & {
              json: GeneratePreviewRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workflowId: string; stepId: string } } & {
              json: GeneratePreviewRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workflowId: string; stepId: string } } & {
              json: GeneratePreviewRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workflowId: string; stepId: string } } & {
              json: GeneratePreviewRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { workflowId: string; stepId: string } } & {
              json: GeneratePreviewRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { workflowId: string; stepId: string } } & {
              json: GeneratePreviewRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { workflowId: string; stepId: string } } & {
              json: GeneratePreviewRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { workflowId: string; stepId: string } } & {
              json: GeneratePreviewRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { workflowId: string; stepId: string } } & {
              json: GeneratePreviewRequestDto
            }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { workflowId: string; stepId: string } } & {
              json: GeneratePreviewRequestDto
            }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { workflowId: string; stepId: string } } & {
              json: GeneratePreviewRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workflowId: string; stepId: string } } & {
              json: GeneratePreviewRequestDto
            }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/workflows/:workflowId/steps/:stepId': {
      $get:
        | {
            input: { param: { workflowId: string; stepId: string } }
            output: { data?: StepResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workflowId: string; stepId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { workflowId: string; stepId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workflowId: string; stepId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workflowId: string; stepId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workflowId: string; stepId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { workflowId: string; stepId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { workflowId: string; stepId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { workflowId: string; stepId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { workflowId: string; stepId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { workflowId: string; stepId: string } }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { workflowId: string; stepId: string } }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { workflowId: string; stepId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workflowId: string; stepId: string } }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/environments/:environmentId/tags': {
      $get:
        | {
            input: { param: { environmentId: string } }
            output: { data?: GetEnvironmentTagsDto[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { environmentId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { environmentId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { environmentId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { environmentId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { environmentId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { environmentId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { environmentId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { environmentId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { environmentId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { environmentId: string } }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { environmentId: string } }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { environmentId: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { environmentId: string } }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/environments/:targetEnvironmentId/publish': {
      $post:
        | {
            input: { param: { targetEnvironmentId: string } } & {
              json: PublishEnvironmentRequestDto
            }
            output: { data?: PublishEnvironmentResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { targetEnvironmentId: string } } & {
              json: PublishEnvironmentRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { targetEnvironmentId: string } } & {
              json: PublishEnvironmentRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { targetEnvironmentId: string } } & {
              json: PublishEnvironmentRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { targetEnvironmentId: string } } & {
              json: PublishEnvironmentRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { targetEnvironmentId: string } } & {
              json: PublishEnvironmentRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { targetEnvironmentId: string } } & {
              json: PublishEnvironmentRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { targetEnvironmentId: string } } & {
              json: PublishEnvironmentRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { targetEnvironmentId: string } } & {
              json: PublishEnvironmentRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { targetEnvironmentId: string } } & {
              json: PublishEnvironmentRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { targetEnvironmentId: string } } & {
              json: PublishEnvironmentRequestDto
            }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { targetEnvironmentId: string } } & {
              json: PublishEnvironmentRequestDto
            }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { targetEnvironmentId: string } } & {
              json: PublishEnvironmentRequestDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { targetEnvironmentId: string } } & {
              json: PublishEnvironmentRequestDto
            }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/environments/:targetEnvironmentId/diff': {
      $post:
        | {
            input: { param: { targetEnvironmentId: string } } & { json: DiffEnvironmentRequestDto }
            output: { data?: DiffEnvironmentResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { targetEnvironmentId: string } } & { json: DiffEnvironmentRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { targetEnvironmentId: string } } & { json: DiffEnvironmentRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { targetEnvironmentId: string } } & { json: DiffEnvironmentRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { targetEnvironmentId: string } } & { json: DiffEnvironmentRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { targetEnvironmentId: string } } & { json: DiffEnvironmentRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { targetEnvironmentId: string } } & { json: DiffEnvironmentRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { targetEnvironmentId: string } } & { json: DiffEnvironmentRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { targetEnvironmentId: string } } & { json: DiffEnvironmentRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { targetEnvironmentId: string } } & { json: DiffEnvironmentRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { targetEnvironmentId: string } } & { json: DiffEnvironmentRequestDto }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { targetEnvironmentId: string } } & { json: DiffEnvironmentRequestDto }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { targetEnvironmentId: string } } & { json: DiffEnvironmentRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { targetEnvironmentId: string } } & { json: DiffEnvironmentRequestDto }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/channel-connections': {
      $get:
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                subscriberId?: string | undefined
                connectionMode?: 'subscriber' | 'shared' | undefined
                channel?: 'in_app' | 'email' | 'sms' | 'chat' | 'push' | 'tool' | undefined
                providerId?: ProvidersIdEnum | undefined
                integrationIdentifier?: string | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: { data?: ListChannelConnectionsResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                subscriberId?: string | undefined
                connectionMode?: 'subscriber' | 'shared' | undefined
                channel?: 'in_app' | 'email' | 'sms' | 'chat' | 'push' | 'tool' | undefined
                providerId?: ProvidersIdEnum | undefined
                integrationIdentifier?: string | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                subscriberId?: string | undefined
                connectionMode?: 'subscriber' | 'shared' | undefined
                channel?: 'in_app' | 'email' | 'sms' | 'chat' | 'push' | 'tool' | undefined
                providerId?: ProvidersIdEnum | undefined
                integrationIdentifier?: string | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                subscriberId?: string | undefined
                connectionMode?: 'subscriber' | 'shared' | undefined
                channel?: 'in_app' | 'email' | 'sms' | 'chat' | 'push' | 'tool' | undefined
                providerId?: ProvidersIdEnum | undefined
                integrationIdentifier?: string | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                subscriberId?: string | undefined
                connectionMode?: 'subscriber' | 'shared' | undefined
                channel?: 'in_app' | 'email' | 'sms' | 'chat' | 'push' | 'tool' | undefined
                providerId?: ProvidersIdEnum | undefined
                integrationIdentifier?: string | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                subscriberId?: string | undefined
                connectionMode?: 'subscriber' | 'shared' | undefined
                channel?: 'in_app' | 'email' | 'sms' | 'chat' | 'push' | 'tool' | undefined
                providerId?: ProvidersIdEnum | undefined
                integrationIdentifier?: string | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                subscriberId?: string | undefined
                connectionMode?: 'subscriber' | 'shared' | undefined
                channel?: 'in_app' | 'email' | 'sms' | 'chat' | 'push' | 'tool' | undefined
                providerId?: ProvidersIdEnum | undefined
                integrationIdentifier?: string | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                subscriberId?: string | undefined
                connectionMode?: 'subscriber' | 'shared' | undefined
                channel?: 'in_app' | 'email' | 'sms' | 'chat' | 'push' | 'tool' | undefined
                providerId?: ProvidersIdEnum | undefined
                integrationIdentifier?: string | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                subscriberId?: string | undefined
                connectionMode?: 'subscriber' | 'shared' | undefined
                channel?: 'in_app' | 'email' | 'sms' | 'chat' | 'push' | 'tool' | undefined
                providerId?: ProvidersIdEnum | undefined
                integrationIdentifier?: string | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                subscriberId?: string | undefined
                connectionMode?: 'subscriber' | 'shared' | undefined
                channel?: 'in_app' | 'email' | 'sms' | 'chat' | 'push' | 'tool' | undefined
                providerId?: ProvidersIdEnum | undefined
                integrationIdentifier?: string | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                subscriberId?: string | undefined
                connectionMode?: 'subscriber' | 'shared' | undefined
                channel?: 'in_app' | 'email' | 'sms' | 'chat' | 'push' | 'tool' | undefined
                providerId?: ProvidersIdEnum | undefined
                integrationIdentifier?: string | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                subscriberId?: string | undefined
                connectionMode?: 'subscriber' | 'shared' | undefined
                channel?: 'in_app' | 'email' | 'sms' | 'chat' | 'push' | 'tool' | undefined
                providerId?: ProvidersIdEnum | undefined
                integrationIdentifier?: string | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                subscriberId?: string | undefined
                connectionMode?: 'subscriber' | 'shared' | undefined
                channel?: 'in_app' | 'email' | 'sms' | 'chat' | 'push' | 'tool' | undefined
                providerId?: ProvidersIdEnum | undefined
                integrationIdentifier?: string | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                subscriberId?: string | undefined
                connectionMode?: 'subscriber' | 'shared' | undefined
                channel?: 'in_app' | 'email' | 'sms' | 'chat' | 'push' | 'tool' | undefined
                providerId?: ProvidersIdEnum | undefined
                integrationIdentifier?: string | undefined
                contextKeys?: string[] | undefined
              }
            }
            output: string
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: { json: CreateChannelConnectionRequestDto }
            output: { data?: GetChannelConnectionResponseDto | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateChannelConnectionRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateChannelConnectionRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateChannelConnectionRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateChannelConnectionRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateChannelConnectionRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { json: CreateChannelConnectionRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: CreateChannelConnectionRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { json: CreateChannelConnectionRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { json: CreateChannelConnectionRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { json: CreateChannelConnectionRequestDto }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: CreateChannelConnectionRequestDto }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: CreateChannelConnectionRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: CreateChannelConnectionRequestDto }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/channel-connections/:identifier': {
      $get:
        | {
            input: { param: { identifier: string } }
            output: { data?: GetChannelConnectionResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { identifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { identifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { identifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { identifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { identifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { identifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { identifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { identifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { identifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { identifier: string } }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { identifier: string } }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { identifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { identifier: string } }
            output: string
            outputFormat: 'json'
            status: 503
          }
      $patch:
        | {
            input: { param: { identifier: string } } & { json: UpdateChannelConnectionRequestDto }
            output: { data?: GetChannelConnectionResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { identifier: string } } & { json: UpdateChannelConnectionRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { identifier: string } } & { json: UpdateChannelConnectionRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { identifier: string } } & { json: UpdateChannelConnectionRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { identifier: string } } & { json: UpdateChannelConnectionRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { identifier: string } } & { json: UpdateChannelConnectionRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { identifier: string } } & { json: UpdateChannelConnectionRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { identifier: string } } & { json: UpdateChannelConnectionRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { identifier: string } } & { json: UpdateChannelConnectionRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { identifier: string } } & { json: UpdateChannelConnectionRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { identifier: string } } & { json: UpdateChannelConnectionRequestDto }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { identifier: string } } & { json: UpdateChannelConnectionRequestDto }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { identifier: string } } & { json: UpdateChannelConnectionRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { identifier: string } } & { json: UpdateChannelConnectionRequestDto }
            output: string
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | {
            input: { param: { identifier: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { identifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { identifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { identifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { identifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { identifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { identifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { identifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { identifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { identifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { identifier: string } }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { identifier: string } }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { identifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { identifier: string } }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/channel-endpoints': {
      $get:
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                subscriberId?: string | undefined
                contextKeys?: string[] | undefined
                channel?: 'in_app' | 'email' | 'sms' | 'chat' | 'push' | 'tool' | undefined
                providerId?: ProvidersIdEnum | undefined
                integrationIdentifier?: string | undefined
                connectionIdentifier?: string | undefined
              }
            }
            output: { data?: ListChannelEndpointsResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                subscriberId?: string | undefined
                contextKeys?: string[] | undefined
                channel?: 'in_app' | 'email' | 'sms' | 'chat' | 'push' | 'tool' | undefined
                providerId?: ProvidersIdEnum | undefined
                integrationIdentifier?: string | undefined
                connectionIdentifier?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                subscriberId?: string | undefined
                contextKeys?: string[] | undefined
                channel?: 'in_app' | 'email' | 'sms' | 'chat' | 'push' | 'tool' | undefined
                providerId?: ProvidersIdEnum | undefined
                integrationIdentifier?: string | undefined
                connectionIdentifier?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                subscriberId?: string | undefined
                contextKeys?: string[] | undefined
                channel?: 'in_app' | 'email' | 'sms' | 'chat' | 'push' | 'tool' | undefined
                providerId?: ProvidersIdEnum | undefined
                integrationIdentifier?: string | undefined
                connectionIdentifier?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                subscriberId?: string | undefined
                contextKeys?: string[] | undefined
                channel?: 'in_app' | 'email' | 'sms' | 'chat' | 'push' | 'tool' | undefined
                providerId?: ProvidersIdEnum | undefined
                integrationIdentifier?: string | undefined
                connectionIdentifier?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                subscriberId?: string | undefined
                contextKeys?: string[] | undefined
                channel?: 'in_app' | 'email' | 'sms' | 'chat' | 'push' | 'tool' | undefined
                providerId?: ProvidersIdEnum | undefined
                integrationIdentifier?: string | undefined
                connectionIdentifier?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                subscriberId?: string | undefined
                contextKeys?: string[] | undefined
                channel?: 'in_app' | 'email' | 'sms' | 'chat' | 'push' | 'tool' | undefined
                providerId?: ProvidersIdEnum | undefined
                integrationIdentifier?: string | undefined
                connectionIdentifier?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                subscriberId?: string | undefined
                contextKeys?: string[] | undefined
                channel?: 'in_app' | 'email' | 'sms' | 'chat' | 'push' | 'tool' | undefined
                providerId?: ProvidersIdEnum | undefined
                integrationIdentifier?: string | undefined
                connectionIdentifier?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                subscriberId?: string | undefined
                contextKeys?: string[] | undefined
                channel?: 'in_app' | 'email' | 'sms' | 'chat' | 'push' | 'tool' | undefined
                providerId?: ProvidersIdEnum | undefined
                integrationIdentifier?: string | undefined
                connectionIdentifier?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                subscriberId?: string | undefined
                contextKeys?: string[] | undefined
                channel?: 'in_app' | 'email' | 'sms' | 'chat' | 'push' | 'tool' | undefined
                providerId?: ProvidersIdEnum | undefined
                integrationIdentifier?: string | undefined
                connectionIdentifier?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                subscriberId?: string | undefined
                contextKeys?: string[] | undefined
                channel?: 'in_app' | 'email' | 'sms' | 'chat' | 'push' | 'tool' | undefined
                providerId?: ProvidersIdEnum | undefined
                integrationIdentifier?: string | undefined
                connectionIdentifier?: string | undefined
              }
            }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                subscriberId?: string | undefined
                contextKeys?: string[] | undefined
                channel?: 'in_app' | 'email' | 'sms' | 'chat' | 'push' | 'tool' | undefined
                providerId?: ProvidersIdEnum | undefined
                integrationIdentifier?: string | undefined
                connectionIdentifier?: string | undefined
              }
            }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                subscriberId?: string | undefined
                contextKeys?: string[] | undefined
                channel?: 'in_app' | 'email' | 'sms' | 'chat' | 'push' | 'tool' | undefined
                providerId?: ProvidersIdEnum | undefined
                integrationIdentifier?: string | undefined
                connectionIdentifier?: string | undefined
              }
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                after?: string | undefined
                before?: string | undefined
                limit?: number | undefined
                orderDirection?: 'ASC' | 'DESC' | undefined
                orderBy?: string | undefined
                includeCursor?: boolean | undefined
                subscriberId?: string | undefined
                contextKeys?: string[] | undefined
                channel?: 'in_app' | 'email' | 'sms' | 'chat' | 'push' | 'tool' | undefined
                providerId?: ProvidersIdEnum | undefined
                integrationIdentifier?: string | undefined
                connectionIdentifier?: string | undefined
              }
            }
            output: string
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: {
              json:
                | CreateSlackChannelEndpointDto
                | CreateSlackUserEndpointDto
                | CreateWebhookEndpointDto
                | CreatePhoneEndpointDto
                | CreateMsTeamsChannelEndpointDto
                | CreateMsTeamsUserEndpointDto
                | CreateTelegramChatEndpointDto
                | CreateWebexRoomEndpointDto
                | CreateWebexPersonEndpointDto
                | CreateLineUserEndpointDto
                | CreatePagerDutyServiceEndpointDto
                | CreateOpsgenieIntegrationEndpointDto
                | CreateGrafanaOnCallIntegrationEndpointDto
                | CreateToolWebhookEndpointDto
            }
            output: { data?: GetChannelEndpointResponseDto | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json:
                | CreateSlackChannelEndpointDto
                | CreateSlackUserEndpointDto
                | CreateWebhookEndpointDto
                | CreatePhoneEndpointDto
                | CreateMsTeamsChannelEndpointDto
                | CreateMsTeamsUserEndpointDto
                | CreateTelegramChatEndpointDto
                | CreateWebexRoomEndpointDto
                | CreateWebexPersonEndpointDto
                | CreateLineUserEndpointDto
                | CreatePagerDutyServiceEndpointDto
                | CreateOpsgenieIntegrationEndpointDto
                | CreateGrafanaOnCallIntegrationEndpointDto
                | CreateToolWebhookEndpointDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json:
                | CreateSlackChannelEndpointDto
                | CreateSlackUserEndpointDto
                | CreateWebhookEndpointDto
                | CreatePhoneEndpointDto
                | CreateMsTeamsChannelEndpointDto
                | CreateMsTeamsUserEndpointDto
                | CreateTelegramChatEndpointDto
                | CreateWebexRoomEndpointDto
                | CreateWebexPersonEndpointDto
                | CreateLineUserEndpointDto
                | CreatePagerDutyServiceEndpointDto
                | CreateOpsgenieIntegrationEndpointDto
                | CreateGrafanaOnCallIntegrationEndpointDto
                | CreateToolWebhookEndpointDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json:
                | CreateSlackChannelEndpointDto
                | CreateSlackUserEndpointDto
                | CreateWebhookEndpointDto
                | CreatePhoneEndpointDto
                | CreateMsTeamsChannelEndpointDto
                | CreateMsTeamsUserEndpointDto
                | CreateTelegramChatEndpointDto
                | CreateWebexRoomEndpointDto
                | CreateWebexPersonEndpointDto
                | CreateLineUserEndpointDto
                | CreatePagerDutyServiceEndpointDto
                | CreateOpsgenieIntegrationEndpointDto
                | CreateGrafanaOnCallIntegrationEndpointDto
                | CreateToolWebhookEndpointDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json:
                | CreateSlackChannelEndpointDto
                | CreateSlackUserEndpointDto
                | CreateWebhookEndpointDto
                | CreatePhoneEndpointDto
                | CreateMsTeamsChannelEndpointDto
                | CreateMsTeamsUserEndpointDto
                | CreateTelegramChatEndpointDto
                | CreateWebexRoomEndpointDto
                | CreateWebexPersonEndpointDto
                | CreateLineUserEndpointDto
                | CreatePagerDutyServiceEndpointDto
                | CreateOpsgenieIntegrationEndpointDto
                | CreateGrafanaOnCallIntegrationEndpointDto
                | CreateToolWebhookEndpointDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json:
                | CreateSlackChannelEndpointDto
                | CreateSlackUserEndpointDto
                | CreateWebhookEndpointDto
                | CreatePhoneEndpointDto
                | CreateMsTeamsChannelEndpointDto
                | CreateMsTeamsUserEndpointDto
                | CreateTelegramChatEndpointDto
                | CreateWebexRoomEndpointDto
                | CreateWebexPersonEndpointDto
                | CreateLineUserEndpointDto
                | CreatePagerDutyServiceEndpointDto
                | CreateOpsgenieIntegrationEndpointDto
                | CreateGrafanaOnCallIntegrationEndpointDto
                | CreateToolWebhookEndpointDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: {
              json:
                | CreateSlackChannelEndpointDto
                | CreateSlackUserEndpointDto
                | CreateWebhookEndpointDto
                | CreatePhoneEndpointDto
                | CreateMsTeamsChannelEndpointDto
                | CreateMsTeamsUserEndpointDto
                | CreateTelegramChatEndpointDto
                | CreateWebexRoomEndpointDto
                | CreateWebexPersonEndpointDto
                | CreateLineUserEndpointDto
                | CreatePagerDutyServiceEndpointDto
                | CreateOpsgenieIntegrationEndpointDto
                | CreateGrafanaOnCallIntegrationEndpointDto
                | CreateToolWebhookEndpointDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              json:
                | CreateSlackChannelEndpointDto
                | CreateSlackUserEndpointDto
                | CreateWebhookEndpointDto
                | CreatePhoneEndpointDto
                | CreateMsTeamsChannelEndpointDto
                | CreateMsTeamsUserEndpointDto
                | CreateTelegramChatEndpointDto
                | CreateWebexRoomEndpointDto
                | CreateWebexPersonEndpointDto
                | CreateLineUserEndpointDto
                | CreatePagerDutyServiceEndpointDto
                | CreateOpsgenieIntegrationEndpointDto
                | CreateGrafanaOnCallIntegrationEndpointDto
                | CreateToolWebhookEndpointDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: {
              json:
                | CreateSlackChannelEndpointDto
                | CreateSlackUserEndpointDto
                | CreateWebhookEndpointDto
                | CreatePhoneEndpointDto
                | CreateMsTeamsChannelEndpointDto
                | CreateMsTeamsUserEndpointDto
                | CreateTelegramChatEndpointDto
                | CreateWebexRoomEndpointDto
                | CreateWebexPersonEndpointDto
                | CreateLineUserEndpointDto
                | CreatePagerDutyServiceEndpointDto
                | CreateOpsgenieIntegrationEndpointDto
                | CreateGrafanaOnCallIntegrationEndpointDto
                | CreateToolWebhookEndpointDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: {
              json:
                | CreateSlackChannelEndpointDto
                | CreateSlackUserEndpointDto
                | CreateWebhookEndpointDto
                | CreatePhoneEndpointDto
                | CreateMsTeamsChannelEndpointDto
                | CreateMsTeamsUserEndpointDto
                | CreateTelegramChatEndpointDto
                | CreateWebexRoomEndpointDto
                | CreateWebexPersonEndpointDto
                | CreateLineUserEndpointDto
                | CreatePagerDutyServiceEndpointDto
                | CreateOpsgenieIntegrationEndpointDto
                | CreateGrafanaOnCallIntegrationEndpointDto
                | CreateToolWebhookEndpointDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              json:
                | CreateSlackChannelEndpointDto
                | CreateSlackUserEndpointDto
                | CreateWebhookEndpointDto
                | CreatePhoneEndpointDto
                | CreateMsTeamsChannelEndpointDto
                | CreateMsTeamsUserEndpointDto
                | CreateTelegramChatEndpointDto
                | CreateWebexRoomEndpointDto
                | CreateWebexPersonEndpointDto
                | CreateLineUserEndpointDto
                | CreatePagerDutyServiceEndpointDto
                | CreateOpsgenieIntegrationEndpointDto
                | CreateGrafanaOnCallIntegrationEndpointDto
                | CreateToolWebhookEndpointDto
            }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              json:
                | CreateSlackChannelEndpointDto
                | CreateSlackUserEndpointDto
                | CreateWebhookEndpointDto
                | CreatePhoneEndpointDto
                | CreateMsTeamsChannelEndpointDto
                | CreateMsTeamsUserEndpointDto
                | CreateTelegramChatEndpointDto
                | CreateWebexRoomEndpointDto
                | CreateWebexPersonEndpointDto
                | CreateLineUserEndpointDto
                | CreatePagerDutyServiceEndpointDto
                | CreateOpsgenieIntegrationEndpointDto
                | CreateGrafanaOnCallIntegrationEndpointDto
                | CreateToolWebhookEndpointDto
            }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              json:
                | CreateSlackChannelEndpointDto
                | CreateSlackUserEndpointDto
                | CreateWebhookEndpointDto
                | CreatePhoneEndpointDto
                | CreateMsTeamsChannelEndpointDto
                | CreateMsTeamsUserEndpointDto
                | CreateTelegramChatEndpointDto
                | CreateWebexRoomEndpointDto
                | CreateWebexPersonEndpointDto
                | CreateLineUserEndpointDto
                | CreatePagerDutyServiceEndpointDto
                | CreateOpsgenieIntegrationEndpointDto
                | CreateGrafanaOnCallIntegrationEndpointDto
                | CreateToolWebhookEndpointDto
            }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              json:
                | CreateSlackChannelEndpointDto
                | CreateSlackUserEndpointDto
                | CreateWebhookEndpointDto
                | CreatePhoneEndpointDto
                | CreateMsTeamsChannelEndpointDto
                | CreateMsTeamsUserEndpointDto
                | CreateTelegramChatEndpointDto
                | CreateWebexRoomEndpointDto
                | CreateWebexPersonEndpointDto
                | CreateLineUserEndpointDto
                | CreatePagerDutyServiceEndpointDto
                | CreateOpsgenieIntegrationEndpointDto
                | CreateGrafanaOnCallIntegrationEndpointDto
                | CreateToolWebhookEndpointDto
            }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v1/channel-endpoints/:identifier': {
      $get:
        | {
            input: { param: { identifier: string } }
            output: { data?: GetChannelEndpointResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { identifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { identifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { identifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { identifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { identifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { identifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { identifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { identifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { identifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { identifier: string } }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { identifier: string } }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { identifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { identifier: string } }
            output: string
            outputFormat: 'json'
            status: 503
          }
      $patch:
        | {
            input: { param: { identifier: string } } & { json: UpdateChannelEndpointRequestDto }
            output: { data?: GetChannelEndpointResponseDto | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { identifier: string } } & { json: UpdateChannelEndpointRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { identifier: string } } & { json: UpdateChannelEndpointRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { identifier: string } } & { json: UpdateChannelEndpointRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { identifier: string } } & { json: UpdateChannelEndpointRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { identifier: string } } & { json: UpdateChannelEndpointRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { identifier: string } } & { json: UpdateChannelEndpointRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { identifier: string } } & { json: UpdateChannelEndpointRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { identifier: string } } & { json: UpdateChannelEndpointRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { identifier: string } } & { json: UpdateChannelEndpointRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { identifier: string } } & { json: UpdateChannelEndpointRequestDto }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { identifier: string } } & { json: UpdateChannelEndpointRequestDto }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { identifier: string } } & { json: UpdateChannelEndpointRequestDto }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { identifier: string } } & { json: UpdateChannelEndpointRequestDto }
            output: string
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | {
            input: { param: { identifier: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { identifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { identifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { identifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { identifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { identifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { identifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { identifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { identifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 414
          }
        | {
            input: { param: { identifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { identifier: string } }
            output: ValidationErrorDto
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { identifier: string } }
            output: string
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { identifier: string } }
            output: ErrorDto
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { identifier: string } }
            output: string
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/translations/upload': {
      $post: {
        input: { form: { resourceId: string; resourceType: 'workflow' | 'layout'; files: File[] } }
        output: UploadTranslationsResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/translations': {
      $post: {
        input: { json: CreateTranslationRequestDto }
        output: TranslationResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/translations/master-json': {
      $get: {
        input: { query: { locale?: string | undefined } }
        output: GetMasterJsonResponseDto
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: ImportMasterJsonRequestDto }
        output: ImportMasterJsonResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/translations/master-json/upload': {
      $post: {
        input: { form: { file: File } }
        output: ImportMasterJsonResponseDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/translations/group/:resourceType/:resourceId': {
      $get:
        | {
            input: { param: { resourceType: 'workflow' | 'layout'; resourceId: string } }
            output: TranslationGroupDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { resourceType: 'workflow' | 'layout'; resourceId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v2/translations/:resourceType/:resourceId/:locale': {
      $get:
        | {
            input: {
              param: { resourceType: 'workflow' | 'layout'; resourceId: string; locale: string }
            }
            output: TranslationResponseDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { resourceType: 'workflow' | 'layout'; resourceId: string; locale: string }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $delete:
        | {
            input: {
              param: { resourceType: 'workflow' | 'layout'; resourceId: string; locale: string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: { resourceType: 'workflow' | 'layout'; resourceId: string; locale: string }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v2/translations/:resourceType/:resourceId': {
      $delete:
        | {
            input: { param: { resourceType: 'workflow' | 'layout'; resourceId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { resourceType: 'workflow' | 'layout'; resourceId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v2/inbound-webhooks/delivery-providers/:environmentId/:integrationId': {
      $post: {
        input: { param: { environmentId: string; integrationId: string } } & {
          json: { [x: string]: unknown }
        }
        output: WebhookResultDto[]
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
