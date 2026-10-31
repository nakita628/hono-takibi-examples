import { createRoute, z } from '@hono/zod-openapi'

const NumberParamSchema = z
  .object({
    accepted: z.boolean().exactOptional(),
    min: z.number().exactOptional(),
    max: z.number().exactOptional(),
    default: z.number().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('NumberParam')

const FlagParamSchema = z
  .object({ accepted: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('FlagParam')

const EffortParamSchema = z
  .object({
    accepted: z.boolean().exactOptional(),
    levels: z.array(z.string()).exactOptional(),
    default: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EffortParam')

const ToolsParamSchema = z
  .object({
    chatCompletions: z.enum(['effortNoneOnly', 'refused']).exactOptional(),
    forcedChoice: FlagParamSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ToolsParam')

type ModelParamsType = {
  temperature?: z.infer<typeof NumberParamSchema>
  topP?: z.infer<typeof NumberParamSchema>
  topK?: z.infer<typeof NumberParamSchema>
  frequencyPenalty?: z.infer<typeof NumberParamSchema>
  presencePenalty?: z.infer<typeof NumberParamSchema>
  maxOutputTokens?: z.infer<typeof NumberParamSchema>
  stop?: z.infer<typeof FlagParamSchema>
  seed?: z.infer<typeof FlagParamSchema>
  effort?: z.infer<typeof EffortParamSchema>
  tools?: z.infer<typeof ToolsParamSchema>
  samplingExclusive?: boolean
  thinksByDefault?: boolean
  routes?: { [key: string]: ModelParamsType }
}

const ConsentResponseSchema = z
  .object({ redirect_to: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('ConsentResponse')

const ConsentRequestSchema = z
  .object({
    client_id: z.string().min(1),
    redirect_uri: z.string().min(1),
    code_challenge: z.string().min(1),
    code_challenge_method: z.string().regex(/S256/).min(1),
    resource: z.string().min(1),
    state: z.string().exactOptional(),
    workspace_id: z.string().exactOptional(),
    workspace_name: z.string().exactOptional(),
    csrf: z.string().exactOptional(),
  })
  .openapi({
    required: ['client_id', 'code_challenge', 'code_challenge_method', 'redirect_uri', 'resource'],
  })
  .openapi('ConsentRequest')

const WorkspaceInfoSchema = z
  .object({
    id: z.string().exactOptional(),
    name: z.string().exactOptional(),
    is_default: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('WorkspaceInfo')

const AuthorizeContextSchema = z
  .object({
    client_name: z.string().exactOptional(),
    client_logo_uri: z.string().exactOptional(),
    workspaces: z.array(WorkspaceInfoSchema).exactOptional(),
    csrf_token: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AuthorizeContext')

const AuthorizationServerMetadataSchema = z
  .object({
    issuer: z.string().exactOptional(),
    authorization_endpoint: z.string().exactOptional(),
    token_endpoint: z.string().exactOptional(),
    revocation_endpoint: z.string().exactOptional(),
    registration_endpoint: z.string().exactOptional(),
    response_types_supported: z.array(z.string()).exactOptional(),
    grant_types_supported: z.array(z.string()).exactOptional(),
    code_challenge_methods_supported: z.array(z.string()).exactOptional(),
    token_endpoint_auth_methods_supported: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AuthorizationServerMetadata')

const ClientRegistrationResponseSchema = z
  .object({
    client_id: z.string().exactOptional(),
    client_id_issued_at: z
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
    client_name: z.string().exactOptional(),
    logo_uri: z.string().exactOptional(),
    software_id: z.string().exactOptional(),
    software_version: z.string().exactOptional(),
    client_uri: z.string().exactOptional(),
    redirect_uris: z
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
    token_endpoint_auth_method: z.string().exactOptional(),
    grant_types: z.array(z.string()).exactOptional(),
    response_types: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ClientRegistrationResponse')

const ClientRegistrationRequestSchema = z
  .object({
    client_name: z.string().min(0).max(255),
    redirect_uris: z
      .array(z.string().min(0).max(2048))
      .min(0)
      .max(10)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      }),
    logo_uri: z.string().exactOptional(),
    software_id: z.string().exactOptional(),
    software_version: z.string().exactOptional(),
    client_uri: z.string().exactOptional(),
  })
  .openapi({ required: ['client_name', 'redirect_uris'] })
  .openapi('ClientRegistrationRequest')

const TokenResponseSchema = z
  .object({
    access_token: z.string().exactOptional(),
    refresh_token: z.string().exactOptional(),
    token_type: z.string().exactOptional(),
    expires_in: z
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
    workspace_id: z.string().exactOptional(),
    workspace_name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TokenResponse')

const OAuthErrorSchema = z
  .object({ error: z.string().exactOptional(), error_description: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('OAuthError')

const ValidatedTokenSchema = z
  .object({
    user_name: z.string().exactOptional(),
    workspace_id: z.string().exactOptional(),
    workspace_name: z.string().exactOptional(),
    resource: z.string().exactOptional(),
    expires_at: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ValidatedToken')

const ResponseSchema = z
  .object({
    enrolled: z.int32().exactOptional(),
    cleared: z.int32().exactOptional(),
    unknown_project_ids: z
      .array(z.uuid().openapi({ description: 'Ids that match no project' }))
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({ description: 'Ids that match no project' }),
    already_run_project_ids: z
      .array(
        z
          .uuid()
          .openapi({
            description: 'Ids whose automatic run already happened, so enrolling has no effect',
          }),
      )
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({
        description: 'Ids whose automatic run already happened, so enrolling has no effect',
      }),
    reset_project_ids: z
      .array(
        z
          .uuid()
          .openapi({
            description:
              'Ids whose automatic run never finished, so clearing forgot it and enrolling them again gives it one more free run',
          }),
      )
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({
        description:
          'Ids whose automatic run never finished, so clearing forgot it and enrolling them again gives it one more free run',
      }),
  })
  .openapi({ required: [] })
  .openapi('Response')

const RequestSchema = z
  .object({
    enrolled: z
      .boolean()
      .openapi({ description: 'True enrols the given projects, false clears their enrolment' }),
    project_ids: z.array(z.uuid()).min(0).max(500),
  })
  .openapi({ required: ['enrolled', 'project_ids'] })
  .openapi('Request')

const JsonNodeSchema = z.object({}).openapi('JsonNode')

const AnalyticsQueryResponseSchema = z
  .object({ results: z.array(JsonNodeSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('AnalyticsQueryResponse')

const ErrorMessageSchema = z
  .object({
    code: z.int32().exactOptional(),
    message: z.string().exactOptional(),
    details: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ErrorMessage')

const AnalyticsQueryRequestSchema = z
  .object({
    query: z
      .string()
      .min(1)
      .openapi({
        description:
          'Read-only ClickHouse SQL. Must return exactly one column named `result` produced via toJSONString(...)',
      }),
  })
  .openapi({ required: ['query'] })
  .openapi('AnalyticsQueryRequest')

const ScopedAnalyticsQueryRequestSchema = z
  .object({
    query: z
      .string()
      .min(1)
      .openapi({
        description:
          'Read-only ClickHouse SQL. Must return exactly one column named `result` produced via toJSONString(...)',
      }),
    project_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Restrict query to this project. Omit to query the whole workspace.',
      }),
  })
  .openapi({ required: ['query'] })
  .openapi('ScopedAnalyticsQueryRequest')

const DashboardSavedQuerySchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ readOnly: true }),
    project_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Project the query is bounded to. Omit for every project in the workspace.',
      }),
    sql: z.string().min(0).max(65536),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    created_by: z.string().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: ['sql'] })
  .openapi('DashboardSavedQuery')

const WorkspaceProjectNameSchema = z
  .object({
    workspace_id: z.string().exactOptional(),
    project_id: z.uuid().exactOptional(),
    name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('WorkspaceProjectName')

const UsageProjectsResponseSchema = z
  .object({ projects: z.array(WorkspaceProjectNameSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('UsageProjectsResponse')

const UsageProjectsRequestSchema = z
  .object({
    workspace_ids: z
      .array(z.string().min(1))
      .min(1)
      .max(1000)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      }),
    project_ids: z
      .array(z.uuid())
      .min(0)
      .max(100)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    name: z.string().min(0).max(150).exactOptional(),
    limit: z.int32().min(1).max(1000).exactOptional(),
  })
  .openapi({ required: ['workspace_ids'] })
  .openapi('UsageProjectsRequest')

const BiInformationSchema = z
  .object({
    workspace_id: z.string().exactOptional(),
    user: z.string().exactOptional(),
    count: z
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
  .openapi('BiInformation')

const BiInformationResponseSchema = z
  .object({ bi_information: z.array(BiInformationSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('BiInformationResponse')

const WorkspaceProjectUserCountSchema = z
  .object({
    workspace_id: z.string().exactOptional(),
    project_id: z.uuid().exactOptional(),
    project_name: z.string().exactOptional(),
    user: z.string().exactOptional(),
    count: z
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
  .openapi('WorkspaceProjectUserCount')

const UsageByWorkspaceProjectUserResponseSchema = z
  .object({ breakdown: z.array(WorkspaceProjectUserCountSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('UsageByWorkspaceProjectUserResponse')

const WorkspaceSpansCountSchema = z
  .object({ workspace: z.string().exactOptional(), span_count: z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('WorkspaceSpansCount')

const SpansCountResponseSchema = z
  .object({ workspaces_spans_count: z.array(WorkspaceSpansCountSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('SpansCountResponse')

const WorkspaceTraceCountSchema = z
  .object({ workspace: z.string().exactOptional(), trace_count: z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('WorkspaceTraceCount')

const TraceCountResponseSchema = z
  .object({ workspaces_traces_count: z.array(WorkspaceTraceCountSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('TraceCountResponse')

const ErrorMessageWriteSchema = z
  .object({ errors: z.array(z.string()).exactOptional() })
  .openapi({ required: [] })
  .openapi('ErrorMessageWrite')

const AgentConfigValueWriteSchema = z
  .object({
    key: z.string().min(0).max(255),
    value: z.string().exactOptional(),
    type: z.enum(['string', 'integer', 'float', 'boolean', 'prompt', 'prompt_commit']),
    description: z.string().exactOptional(),
  })
  .openapi({ required: ['key', 'type'] })
  .openapi('AgentConfigValueWrite')

const AgentBlueprintWriteSchema = z
  .object({
    id: z.uuid().exactOptional(),
    type: z.enum(['blueprint', 'mask']),
    description: z.string().min(0).max(255).exactOptional(),
    values: z.array(AgentConfigValueWriteSchema).min(1).max(250),
  })
  .openapi({ required: ['type', 'values'] })
  .openapi('AgentBlueprintWrite')

const AgentConfigCreateWriteSchema = z
  .object({
    project_id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Project ID. Either project_id or project_name must be provided' }),
    project_name: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .exactOptional()
      .openapi({ description: 'Project name. Either project_id or project_name must be provided' }),
    id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Agent config ID. Generated automatically if not provided' }),
    blueprint: AgentBlueprintWriteSchema,
  })
  .openapi({ required: ['blueprint'] })
  .openapi('AgentConfigCreateWrite')

const AgentConfigEnvSchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ readOnly: true }),
    project_id: z.uuid().exactOptional().openapi({ readOnly: true }),
    env_name: z.string().min(0).max(50),
    blueprint_id: z.uuid(),
    created_by: z.string().exactOptional().openapi({ readOnly: true }),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    ended_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: ['blueprint_id', 'env_name'] })
  .openapi('AgentConfigEnv')

const AgentConfigEnvUpdateSchema = z
  .object({ project_id: z.uuid(), envs: z.array(AgentConfigEnvSchema).min(1).max(100) })
  .openapi({ required: ['envs', 'project_id'] })
  .openapi('AgentConfigEnvUpdate')

const AgentConfigValuePublicSchema = z
  .object({
    key: z.string().min(0).max(255),
    value: z.string().exactOptional(),
    type: z.enum(['string', 'integer', 'float', 'boolean', 'prompt', 'prompt_commit']),
    description: z.string().exactOptional(),
  })
  .openapi({ required: ['key', 'type'] })
  .openapi('AgentConfigValuePublic')

const AgentBlueprintPublicSchema = z
  .object({
    id: z.uuid().exactOptional(),
    name: z.string().exactOptional().openapi({ readOnly: true }),
    type: z.enum(['blueprint', 'mask']),
    description: z.string().min(0).max(255).exactOptional(),
    envs: z
      .array(z.string().openapi({ readOnly: true }))
      .exactOptional()
      .openapi({ readOnly: true }),
    created_by: z.string().exactOptional().openapi({ readOnly: true }),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    last_updated_by: z.string().exactOptional().openapi({ readOnly: true }),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    values: z.array(AgentConfigValuePublicSchema).min(1).max(250),
  })
  .openapi({ required: ['type', 'values'] })
  .openapi('AgentBlueprintPublic')

const ErrorMessagePublicSchema = z
  .object({
    code: z.int32().exactOptional(),
    message: z.string().exactOptional(),
    details: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ErrorMessagePublic')

const AgentConfigValueHistorySchema = z
  .object({
    key: z.string().min(0).max(255),
    value: z.string().exactOptional(),
    type: z.enum(['string', 'integer', 'float', 'boolean', 'prompt', 'prompt_commit']),
    description: z.string().exactOptional(),
  })
  .openapi({ required: ['key', 'type'] })
  .openapi('AgentConfigValueHistory')

const AgentBlueprintHistorySchema = z
  .object({
    id: z.uuid().exactOptional(),
    name: z.string().exactOptional().openapi({ readOnly: true }),
    type: z.enum(['blueprint', 'mask']),
    description: z.string().min(0).max(255).exactOptional(),
    envs: z
      .array(z.string().openapi({ readOnly: true }))
      .exactOptional()
      .openapi({ readOnly: true }),
    created_by: z.string().exactOptional().openapi({ readOnly: true }),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    last_updated_by: z.string().exactOptional().openapi({ readOnly: true }),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    values: z.array(AgentConfigValueHistorySchema).min(1).max(250),
  })
  .openapi({ required: ['type', 'values'] })
  .openapi('AgentBlueprintHistory')

const BlueprintPageHistorySchema = z
  .object({
    page: z.int32().exactOptional(),
    size: z.int32().exactOptional(),
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
    content: z.array(AgentBlueprintHistorySchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BlueprintPageHistory')

const ErrorMessageHistorySchema = z
  .object({ errors: z.array(z.string()).exactOptional() })
  .openapi({ required: [] })
  .openapi('ErrorMessageHistory')

const AgentConfigRemoveValuesSchema = z
  .object({
    project_id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Project ID. Either project_id or project_name must be provided' }),
    project_name: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .exactOptional()
      .openapi({ description: 'Project name. Either project_id or project_name must be provided' }),
    keys: z
      .array(z.string().min(1))
      .min(0)
      .max(250)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      }),
  })
  .openapi({ required: ['keys'] })
  .openapi('AgentConfigRemoveValues')

const AgentConfigEnvSetByNameSchema = z
  .object({ blueprint_name: z.string() })
  .openapi({ required: ['blueprint_name'] })
  .openapi('AgentConfigEnvSetByName')

const AgentInsightsJobSchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ readOnly: true }),
    project_id: z.uuid().openapi({ readOnly: true }),
    status: z.enum(['enabled', 'disabled']).exactOptional().openapi({ readOnly: true }),
    auto_first_run_enrolled: z.boolean().exactOptional().openapi({ readOnly: true }),
    auto_first_run_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    last_scan_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    last_failure_reason: z.string().exactOptional().openapi({ readOnly: true }),
    last_failure_detail: z.string().exactOptional().openapi({ readOnly: true }),
    last_failed_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    guidance: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Project guidance sent to every run; null when none',
        readOnly: true,
      }),
    guidance_updated_by: z
      .string()
      .exactOptional()
      .openapi({ description: 'Who last saved the guidance', readOnly: true }),
    guidance_updated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the guidance was last saved', readOnly: true }),
    guidance_version: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Bumped each time the guidance text changes; 0 = never saved',
        readOnly: true,
      }),
    results_guidance_version: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Guidance version the current results were produced with; null = no run since guidance existed',
        readOnly: true,
      }),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    created_by: z.string().exactOptional().openapi({ readOnly: true }),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    last_updated_by: z.string().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: ['project_id'] })
  .openapi('AgentInsightsJob')

const AgentInsightsJobUpdateSchema = z
  .object({
    status: z.enum(['enabled', 'disabled']).openapi({ description: 'New status for the job' }),
  })
  .openapi({ required: ['status'] })
  .openapi('AgentInsightsJobUpdate')

const AgentInsightsGuidanceUpdateSchema = z
  .object({
    guidance: z
      .string()
      .min(0)
      .max(5000)
      .openapi({
        description: 'Project guidance for Agent Insights runs. Empty or whitespace-only clears it',
      }),
  })
  .openapi({ required: ['guidance'] })
  .openapi('AgentInsightsGuidanceUpdate')

const AgentInsightsIssueSchema = z
  .object({
    id: z.uuid().exactOptional(),
    name: z.string().exactOptional(),
    description: z.string().exactOptional(),
    cause: z.string().exactOptional(),
    suggested_fix: z.string().exactOptional(),
    status: z.enum(['open', 'resolved', 'closed']).exactOptional(),
    severity: z.enum(['critical', 'high', 'medium', 'low']).exactOptional(),
    traces_query: z.string().exactOptional(),
    total_occurrences: z
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
        description: 'SUM(count) over the requested window',
      }),
    latest_count: z
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
          "Occurrences on the latest report day in the window only. The issue's description/cause narrate that most recent run, so this is the count consistent with them; totalOccurrences instead sums every day in the window.",
      }),
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'SUM(total_count) over the requested window',
      }),
    users_impacted: z
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
        description: 'SUM(users_impacted) over the requested window',
      }),
    total_users: z
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
        description: 'SUM(total_users) over the requested window',
      }),
    first_seen: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'MIN(report_day) in the requested window' }),
    last_seen: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'MAX(report_day) in the requested window' }),
    days_reported: z
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
        description: 'COUNT(DISTINCT report_day) in the requested window',
      }),
    close_note: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The team's reason for closing the issue as not useful; set only while status is closed",
      }),
    status_changed_by: z
      .string()
      .exactOptional()
      .openapi({ description: 'Who last changed the status' }),
    status_changed_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the status was last changed' }),
    created_by: z.string().exactOptional(),
    created_at: z.iso.datetime({ offset: true }).exactOptional(),
    last_updated_by: z.string().exactOptional(),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AgentInsightsIssue')

const AgentInsightsIssuePageSchema = z
  .object({
    page: z.int32().exactOptional(),
    size: z.int32().exactOptional(),
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
    content: z.array(AgentInsightsIssueSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AgentInsightsIssuePage')

const AgentInsightsIssueDetailSchema = z
  .object({
    report_day: z.iso.date().exactOptional(),
    count: z
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
    total_count: z
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
    users_impacted: z
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
    total_users: z
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
    metadata: JsonNodeSchema.exactOptional(),
  })
  .openapi({
    description: 'Per-day breakdown within the requested window, ordered by report_day ascending',
    required: [],
  })
  .openapi('AgentInsightsIssueDetail')

const AgentInsightsIssueWithDetailsSchema = z
  .object({
    id: z.uuid().exactOptional(),
    name: z.string().exactOptional(),
    description: z.string().exactOptional(),
    cause: z.string().exactOptional(),
    suggested_fix: z.string().exactOptional(),
    status: z.enum(['open', 'resolved', 'closed']).exactOptional(),
    severity: z.enum(['critical', 'high', 'medium', 'low']).exactOptional(),
    traces_query: z.string().exactOptional(),
    close_note: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The team's reason for closing the issue as not useful; set only while status is closed",
      }),
    status_changed_by: z
      .string()
      .exactOptional()
      .openapi({ description: 'Who last changed the status' }),
    status_changed_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the status was last changed' }),
    created_by: z.string().exactOptional(),
    created_at: z.iso.datetime({ offset: true }).exactOptional(),
    last_updated_by: z.string().exactOptional(),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional(),
    details: z
      .array(AgentInsightsIssueDetailSchema)
      .exactOptional()
      .openapi({
        description:
          'Per-day breakdown within the requested window, ordered by report_day ascending',
      }),
  })
  .openapi({ required: [] })
  .openapi('AgentInsightsIssueWithDetails')

const ReportedIssueSchema = z
  .object({
    id: z.uuid().exactOptional(),
    name: z.string().min(0).max(255),
    description: z.string().exactOptional(),
    cause: z.string().exactOptional(),
    suggested_fix: z.string().exactOptional(),
    traces_query: z.string().exactOptional(),
    severity: z.enum(['critical', 'high', 'medium', 'low']),
    count: z
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
    total_count: z
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
    users_impacted: z
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
    total_users: z
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
    metadata: JsonNodeSchema.exactOptional(),
  })
  .openapi({
    required: ['count', 'name', 'severity', 'total_count', 'total_users', 'users_impacted'],
  })
  .openapi('ReportedIssue')

const AgentInsightsReportSchema = z
  .object({ project_id: z.uuid(), report_day: z.iso.date(), issues: z.array(ReportedIssueSchema) })
  .openapi({ required: ['issues', 'project_id', 'report_day'] })
  .openapi('AgentInsightsReport')

const AgentInsightsIssueUpdateSchema = z
  .object({
    project_id: z.uuid(),
    status: z.enum(['open', 'resolved', 'closed']),
    close_note: z
      .string()
      .min(0)
      .max(500)
      .exactOptional()
      .openapi({
        description:
          'Why the issue is closed as not useful. Stored only with status closed; any other status clears it',
      }),
  })
  .openapi({ required: ['project_id', 'status'] })
  .openapi('AgentInsightsIssueUpdate')

const WebhookSchema = z
  .object({
    id: z.uuid().exactOptional(),
    name: z.string().exactOptional(),
    url: z.string().min(1),
    secret_token: z.string().min(0).max(250).exactOptional(),
    headers: z.record(z.string(), z.string()).exactOptional(),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    created_by: z.string().exactOptional().openapi({ readOnly: true }),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    last_updated_by: z.string().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: ['url'] })
  .openapi('Webhook')

const AlertTriggerConfigSchema = z
  .object({
    id: z.uuid().exactOptional(),
    alert_trigger_id: z.uuid().exactOptional().openapi({ readOnly: true }),
    type: z.enum([
      'scope:project',
      'threshold:feedback_score',
      'threshold:cost',
      'threshold:latency',
      'threshold:errors',
      'filter:guardrail_type',
    ]),
    config_value: z.record(z.string(), z.string()).exactOptional(),
    group_index: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Groups configs within a trigger: same group_index means AND between configs, different group_index means OR between groups. Null means a legacy/singleton group of one config. Always null for scope:project configs.',
      }),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    created_by: z.string().exactOptional().openapi({ readOnly: true }),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    last_updated_by: z.string().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: ['type'] })
  .openapi('AlertTriggerConfig')

const AlertTriggerSchema = z
  .object({
    id: z.uuid().exactOptional(),
    alert_id: z.uuid().exactOptional().openapi({ readOnly: true }),
    event_type: z.enum([
      'trace:errors',
      'trace:feedback_score',
      'trace_thread:feedback_score',
      'prompt:created',
      'prompt:committed',
      'trace:guardrails_triggered',
      'prompt:deleted',
      'experiment:finished',
      'trace:cost',
      'trace:latency',
    ]),
    trigger_configs: z.array(AlertTriggerConfigSchema).exactOptional(),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    created_by: z.string().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: ['event_type'] })
  .openapi('AlertTrigger')

const AlertSchema = z
  .object({
    id: z.uuid().exactOptional(),
    name: z.string().min(0).max(255).exactOptional(),
    enabled: z.boolean().exactOptional(),
    alert_type: z.enum(['general', 'slack', 'pagerduty']).exactOptional(),
    metadata: z.record(z.string(), z.string()).exactOptional(),
    custom_fields: z
      .record(
        z.string(),
        z
          .string()
          .openapi({
            description:
              "Optional user-defined key/value pairs, added as top-level keys of the alert's EventBridge event detail. Keys must not collide with the event's own keys.",
          }),
      )
      .exactOptional()
      .openapi({
        description:
          "Optional user-defined key/value pairs, added as top-level keys of the alert's EventBridge event detail. Keys must not collide with the event's own keys.",
      }),
    webhook: WebhookSchema,
    triggers: z.array(AlertTriggerSchema).exactOptional(),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    created_by: z.string().exactOptional().openapi({ readOnly: true }),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    last_updated_by: z.string().exactOptional().openapi({ readOnly: true }),
    project_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          "Optional project scope for this alert. When set, the alert is scoped to the specified project. Do NOT also provide a 'scope:project' trigger config — the system will create it automatically from this field. Sending both project_id and a scope:project trigger config will result in an error.",
      }),
  })
  .openapi({ required: ['webhook'] })
  .openapi('Alert')

const AlertTriggerConfigWriteSchema = z
  .object({
    id: z.uuid().exactOptional(),
    type: z.enum([
      'scope:project',
      'threshold:feedback_score',
      'threshold:cost',
      'threshold:latency',
      'threshold:errors',
      'filter:guardrail_type',
    ]),
    config_value: z.record(z.string(), z.string()).exactOptional(),
    group_index: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Groups configs within a trigger: same group_index means AND between configs, different group_index means OR between groups. Null means a legacy/singleton group of one config. Always null for scope:project configs.',
      }),
  })
  .openapi({ required: ['type'] })
  .openapi('AlertTriggerConfigWrite')

const AlertTriggerWriteSchema = z
  .object({
    id: z.uuid().exactOptional(),
    event_type: z.enum([
      'trace:errors',
      'trace:feedback_score',
      'trace_thread:feedback_score',
      'prompt:created',
      'prompt:committed',
      'trace:guardrails_triggered',
      'prompt:deleted',
      'experiment:finished',
      'trace:cost',
      'trace:latency',
    ]),
    trigger_configs: z.array(AlertTriggerConfigWriteSchema).exactOptional(),
  })
  .openapi({ required: ['event_type'] })
  .openapi('AlertTriggerWrite')

const WebhookWriteSchema = z
  .object({
    id: z.uuid().exactOptional(),
    name: z.string().exactOptional(),
    url: z.string().min(1),
    secret_token: z.string().min(0).max(250).exactOptional(),
    headers: z.record(z.string(), z.string()).exactOptional(),
  })
  .openapi({ required: ['url'] })
  .openapi('WebhookWrite')

const AlertWriteSchema = z
  .object({
    id: z.uuid().exactOptional(),
    name: z.string().min(0).max(255).exactOptional(),
    enabled: z.boolean().exactOptional(),
    alert_type: z.enum(['general', 'slack', 'pagerduty']).exactOptional(),
    metadata: z.record(z.string(), z.string()).exactOptional(),
    custom_fields: z
      .record(
        z.string(),
        z
          .string()
          .openapi({
            description:
              "Optional user-defined key/value pairs, added as top-level keys of the alert's EventBridge event detail. Keys must not collide with the event's own keys.",
          }),
      )
      .exactOptional()
      .openapi({
        description:
          "Optional user-defined key/value pairs, added as top-level keys of the alert's EventBridge event detail. Keys must not collide with the event's own keys.",
      }),
    webhook: WebhookWriteSchema,
    triggers: z.array(AlertTriggerWriteSchema).exactOptional(),
    project_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          "Optional project scope for this alert. When set, the alert is scoped to the specified project. Do NOT also provide a 'scope:project' trigger config — the system will create it automatically from this field. Sending both project_id and a scope:project trigger config will result in an error.",
      }),
  })
  .openapi({ required: ['webhook'] })
  .openapi('AlertWrite')

const BatchDeleteSchema = z
  .object({
    ids: z
      .array(z.uuid())
      .min(1)
      .max(1000)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      }),
  })
  .openapi({ required: ['ids'] })
  .openapi('BatchDelete')

const WebhookPublicSchema = z
  .object({
    id: z.uuid().exactOptional(),
    name: z.string().exactOptional(),
    url: z.string().min(1),
    secret_token: z.string().min(0).max(250).exactOptional(),
    headers: z.record(z.string(), z.string()).exactOptional(),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    created_by: z.string().exactOptional().openapi({ readOnly: true }),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    last_updated_by: z.string().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: ['url'] })
  .openapi('WebhookPublic')

const AlertTriggerConfigPublicSchema = z
  .object({
    id: z.uuid().exactOptional(),
    alert_trigger_id: z.uuid().exactOptional().openapi({ readOnly: true }),
    type: z.enum([
      'scope:project',
      'threshold:feedback_score',
      'threshold:cost',
      'threshold:latency',
      'threshold:errors',
      'filter:guardrail_type',
    ]),
    config_value: z.record(z.string(), z.string()).exactOptional(),
    group_index: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Groups configs within a trigger: same group_index means AND between configs, different group_index means OR between groups. Null means a legacy/singleton group of one config. Always null for scope:project configs.',
      }),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    created_by: z.string().exactOptional().openapi({ readOnly: true }),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    last_updated_by: z.string().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: ['type'] })
  .openapi('AlertTriggerConfigPublic')

const AlertTriggerPublicSchema = z
  .object({
    id: z.uuid().exactOptional(),
    alert_id: z.uuid().exactOptional().openapi({ readOnly: true }),
    event_type: z.enum([
      'trace:errors',
      'trace:feedback_score',
      'trace_thread:feedback_score',
      'prompt:created',
      'prompt:committed',
      'trace:guardrails_triggered',
      'prompt:deleted',
      'experiment:finished',
      'trace:cost',
      'trace:latency',
    ]),
    trigger_configs: z.array(AlertTriggerConfigPublicSchema).exactOptional(),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    created_by: z.string().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: ['event_type'] })
  .openapi('AlertTriggerPublic')

const AlertPublicSchema = z
  .object({
    id: z.uuid().exactOptional(),
    name: z.string().min(0).max(255).exactOptional(),
    enabled: z.boolean().exactOptional(),
    alert_type: z.enum(['general', 'slack', 'pagerduty']).exactOptional(),
    metadata: z.record(z.string(), z.string()).exactOptional(),
    custom_fields: z
      .record(
        z.string(),
        z
          .string()
          .openapi({
            description:
              "Optional user-defined key/value pairs, added as top-level keys of the alert's EventBridge event detail. Keys must not collide with the event's own keys.",
          }),
      )
      .exactOptional()
      .openapi({
        description:
          "Optional user-defined key/value pairs, added as top-level keys of the alert's EventBridge event detail. Keys must not collide with the event's own keys.",
      }),
    webhook: WebhookPublicSchema,
    triggers: z.array(AlertTriggerPublicSchema).exactOptional(),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    created_by: z.string().exactOptional().openapi({ readOnly: true }),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    last_updated_by: z.string().exactOptional().openapi({ readOnly: true }),
    project_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          "Optional project scope for this alert. When set, the alert is scoped to the specified project. Do NOT also provide a 'scope:project' trigger config — the system will create it automatically from this field. Sending both project_id and a scope:project trigger config will result in an error.",
      }),
  })
  .openapi({ required: ['webhook'] })
  .openapi('AlertPublic')

const AlertPagePublicSchema = z
  .object({
    page: z.int32().exactOptional(),
    size: z.int32().exactOptional(),
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
    content: z.array(AlertPublicSchema).exactOptional(),
    sortable_by: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AlertPagePublic')

const WebhookExamplesSchema = z
  .object({ response_examples: z.record(z.string(), z.object({})).exactOptional() })
  .openapi({ required: [] })
  .openapi('WebhookExamples')

const WebhookTestResultSchema = z
  .object({
    status: z.enum(['success', 'failure']).exactOptional(),
    status_code: z.int32().exactOptional(),
    request_body: z.string().exactOptional(),
    error_message: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('WebhookTestResult')

const AnnotationQueueItemIdsSchema = z
  .object({
    ids: z
      .array(z.uuid())
      .min(1)
      .max(1000)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      }),
  })
  .openapi({ required: ['ids'] })
  .openapi('AnnotationQueueItemIds')

const ScoreConditionSchema = z
  .object({
    score_name: z.string().min(0).max(255),
    operator: z.enum(['>', '<', '=']),
    value: z.float64(),
  })
  .openapi({ required: ['operator', 'score_name', 'value'] })
  .openapi('ScoreCondition')

const ConditionGroupSchema = z
  .object({ conditions: z.array(ScoreConditionSchema).min(0).max(5) })
  .openapi({ required: ['conditions'] })
  .openapi('ConditionGroup')

const ConditionsSchema = z
  .object({ groups: z.array(ConditionGroupSchema).min(0).max(5) })
  .openapi({ required: ['groups'] })
  .openapi('Conditions')

const AnnotationQueueAutomationSchema = z
  .object({
    enabled: z.boolean().exactOptional(),
    conditions: ConditionsSchema.exactOptional(),
    max_items_in_queue: z.int32().exactOptional(),
    clear_max_items_in_queue: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'When true, removes the item ceiling so automation adds without bound',
      }),
  })
  .openapi({ required: [] })
  .openapi('AnnotationQueueAutomation')

const AnnotationQueueAnnotatorViewSchema = z
  .object({
    html: z
      .string()
      .min(0)
      .max(200000)
      .exactOptional()
      .openapi({
        description:
          'A custom HTML view rendered in a sandboxed iframe instead of the default trace blocks or conversation',
      }),
    kit_version: z
      .int32()
      .min(1)
      .max(1)
      .exactOptional()
      .openapi({ description: 'Version of the view kit the html was written for' }),
    summary: z
      .string()
      .min(0)
      .max(1000)
      .exactOptional()
      .openapi({ description: 'What annotators see in the view, in one or two sentences' }),
  })
  .openapi({ required: [] })
  .openapi('AnnotationQueueAnnotatorView')

const AnnotationQueueReviewerSchema = z
  .object({
    username: z.string().exactOptional(),
    status: z
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
  .openapi({ readOnly: true, required: [] })
  .openapi('AnnotationQueueReviewer')

const FeedbackScoreAverageSchema = z
  .object({ name: z.string().min(1), value: z.number() })
  .openapi({ required: ['name', 'value'] })
  .openapi('FeedbackScoreAverage')

const AnnotationQueueSchema = z
  .object({
    id: z.uuid().exactOptional(),
    project_id: z.uuid(),
    project_name: z.string().exactOptional().openapi({ readOnly: true }),
    name: z.string().min(1),
    description: z.string().exactOptional(),
    instructions: z.string().exactOptional(),
    scope: z.enum(['trace', 'thread']),
    comments_enabled: z.boolean().exactOptional(),
    feedback_definition_names: z.array(z.string()).exactOptional(),
    annotators_per_item: z.int32().min(1).max(1000).exactOptional(),
    lock_timeout_seconds: z.int32().min(1).max(3600).exactOptional(),
    automation: AnnotationQueueAutomationSchema.exactOptional(),
    annotator_view: AnnotationQueueAnnotatorViewSchema.exactOptional(),
    reviewers: z.array(AnnotationQueueReviewerSchema).exactOptional().openapi({ readOnly: true }),
    feedback_scores: z
      .array(FeedbackScoreAverageSchema)
      .exactOptional()
      .openapi({ readOnly: true }),
    items_count: z
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
      .openapi({ type: 'integer', format: 'int64', readOnly: true }),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    created_by: z.string().exactOptional().openapi({ readOnly: true }),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    last_updated_by: z.string().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({
    required: ['name', 'project_id', 'scope'],
    description: 'List of annotation queues to create',
  })
  .openapi('AnnotationQueue')

const AnnotationQueueAnnotatorViewWriteSchema = z
  .object({
    html: z
      .string()
      .min(0)
      .max(200000)
      .exactOptional()
      .openapi({
        description:
          'A custom HTML view rendered in a sandboxed iframe instead of the default trace blocks or conversation',
      }),
    kit_version: z
      .int32()
      .min(1)
      .max(1)
      .exactOptional()
      .openapi({ description: 'Version of the view kit the html was written for' }),
    summary: z
      .string()
      .min(0)
      .max(1000)
      .exactOptional()
      .openapi({ description: 'What annotators see in the view, in one or two sentences' }),
  })
  .openapi({ required: [] })
  .openapi('AnnotationQueueAnnotatorViewWrite')

const ScoreConditionWriteSchema = z
  .object({
    score_name: z.string().min(0).max(255),
    operator: z.enum(['>', '<', '=']),
    value: z.float64(),
  })
  .openapi({ required: ['operator', 'score_name', 'value'] })
  .openapi('ScoreConditionWrite')

const ConditionGroupWriteSchema = z
  .object({ conditions: z.array(ScoreConditionWriteSchema).min(0).max(5) })
  .openapi({ required: ['conditions'] })
  .openapi('ConditionGroupWrite')

const ConditionsWriteSchema = z
  .object({ groups: z.array(ConditionGroupWriteSchema).min(0).max(5) })
  .openapi({ required: ['groups'] })
  .openapi('ConditionsWrite')

const AnnotationQueueAutomationWriteSchema = z
  .object({
    enabled: z.boolean().exactOptional(),
    conditions: ConditionsWriteSchema.exactOptional(),
    max_items_in_queue: z.int32().exactOptional(),
    clear_max_items_in_queue: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'When true, removes the item ceiling so automation adds without bound',
      }),
  })
  .openapi({ required: [] })
  .openapi('AnnotationQueueAutomationWrite')

const AnnotationQueueWriteSchema = z
  .object({
    id: z.uuid().exactOptional(),
    project_id: z.uuid(),
    name: z.string().min(1),
    description: z.string().exactOptional(),
    instructions: z.string().exactOptional(),
    scope: z.enum(['trace', 'thread']),
    comments_enabled: z.boolean().exactOptional(),
    feedback_definition_names: z.array(z.string()).exactOptional(),
    annotators_per_item: z.int32().min(1).max(1000).exactOptional(),
    lock_timeout_seconds: z.int32().min(1).max(3600).exactOptional(),
    automation: AnnotationQueueAutomationWriteSchema.exactOptional(),
    annotator_view: AnnotationQueueAnnotatorViewWriteSchema.exactOptional(),
  })
  .openapi({
    required: ['name', 'project_id', 'scope'],
    description: 'List of annotation queues to create',
  })
  .openapi('AnnotationQueueWrite')

const AnnotationQueueBatchSchema = z
  .object({
    annotation_queues: z
      .array(AnnotationQueueSchema)
      .min(1)
      .max(1000)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .openapi({ description: 'List of annotation queues to create' }),
  })
  .openapi({ required: ['annotation_queues'], description: 'Batch of annotation queues to create' })
  .openapi('AnnotationQueueBatch')

const AnnotationQueueBatchWriteSchema = z
  .object({
    annotation_queues: z
      .array(AnnotationQueueWriteSchema)
      .min(1)
      .max(1000)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .openapi({ description: 'List of annotation queues to create' }),
  })
  .openapi({ required: ['annotation_queues'], description: 'Batch of annotation queues to create' })
  .openapi('AnnotationQueueBatchWrite')

const AnnotationQueueAnnotatorViewPublicSchema = z
  .object({
    html: z
      .string()
      .min(0)
      .max(200000)
      .exactOptional()
      .openapi({
        description:
          'A custom HTML view rendered in a sandboxed iframe instead of the default trace blocks or conversation',
      }),
    kit_version: z
      .int32()
      .min(1)
      .max(1)
      .exactOptional()
      .openapi({ description: 'Version of the view kit the html was written for' }),
    summary: z
      .string()
      .min(0)
      .max(1000)
      .exactOptional()
      .openapi({ description: 'What annotators see in the view, in one or two sentences' }),
  })
  .openapi({ required: [] })
  .openapi('AnnotationQueueAnnotatorViewPublic')

const ScoreConditionPublicSchema = z
  .object({
    score_name: z.string().min(0).max(255),
    operator: z.enum(['>', '<', '=']),
    value: z.float64(),
  })
  .openapi({ required: ['operator', 'score_name', 'value'] })
  .openapi('ScoreConditionPublic')

const ConditionGroupPublicSchema = z
  .object({ conditions: z.array(ScoreConditionPublicSchema).min(0).max(5) })
  .openapi({ required: ['conditions'] })
  .openapi('ConditionGroupPublic')

const ConditionsPublicSchema = z
  .object({ groups: z.array(ConditionGroupPublicSchema).min(0).max(5) })
  .openapi({ required: ['groups'] })
  .openapi('ConditionsPublic')

const AnnotationQueueAutomationPublicSchema = z
  .object({
    enabled: z.boolean().exactOptional(),
    conditions: ConditionsPublicSchema.exactOptional(),
    max_items_in_queue: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AnnotationQueueAutomationPublic')

const AnnotationQueueReviewerPublicSchema = z
  .object({
    username: z.string().exactOptional(),
    status: z
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
  .openapi({ readOnly: true, required: [] })
  .openapi('AnnotationQueueReviewerPublic')

const FeedbackScoreAveragePublicSchema = z
  .object({ name: z.string().min(1), value: z.number() })
  .openapi({ required: ['name', 'value'], readOnly: true })
  .openapi('FeedbackScoreAveragePublic')

const AnnotationQueuePublicSchema = z
  .object({
    id: z.uuid().exactOptional(),
    project_id: z.uuid(),
    project_name: z.string().exactOptional().openapi({ readOnly: true }),
    name: z.string().min(1),
    description: z.string().exactOptional(),
    instructions: z.string().exactOptional(),
    scope: z.enum(['trace', 'thread']),
    comments_enabled: z.boolean().exactOptional(),
    feedback_definition_names: z.array(z.string()).exactOptional(),
    annotators_per_item: z.int32().min(1).max(1000).exactOptional(),
    lock_timeout_seconds: z.int32().min(1).max(3600).exactOptional(),
    automation: AnnotationQueueAutomationPublicSchema.exactOptional(),
    annotator_view: AnnotationQueueAnnotatorViewPublicSchema.exactOptional(),
    reviewers: z
      .array(AnnotationQueueReviewerPublicSchema)
      .exactOptional()
      .openapi({ readOnly: true }),
    feedback_scores: z
      .array(FeedbackScoreAveragePublicSchema)
      .exactOptional()
      .openapi({ readOnly: true }),
    items_count: z
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
      .openapi({ type: 'integer', format: 'int64', readOnly: true }),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    created_by: z.string().exactOptional().openapi({ readOnly: true }),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    last_updated_by: z.string().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: ['name', 'project_id', 'scope'] })
  .openapi('AnnotationQueuePublic')

const AnnotationQueuePagePublicSchema = z
  .object({
    page: z.int32().exactOptional(),
    size: z.int32().exactOptional(),
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
    content: z.array(AnnotationQueuePublicSchema).exactOptional(),
    sortableBy: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AnnotationQueuePagePublic')

const ItemLockInfoSchema = z
  .object({
    active_locks: z.int32().exactOptional(),
    locked_by: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ItemLockInfo')

const LocksResponseSchema = z
  .object({ locks: z.record(z.string(), ItemLockInfoSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('LocksResponse')

const LockResponseSchema = z
  .object({
    acquired: z.boolean().exactOptional(),
    item_id: z.uuid().exactOptional(),
    locked_by: z.string().exactOptional(),
    expires_at: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LockResponse')

const AnnotationQueueItemPublicSchema = z
  .object({ id: z.uuid().exactOptional(), source: z.enum(['manual', 'automated']).exactOptional() })
  .openapi({ required: [] })
  .openapi('AnnotationQueueItemPublic')

const AnnotationQueueItemsPublicSchema = z
  .object({ content: z.array(AnnotationQueueItemPublicSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('AnnotationQueueItemsPublic')

const AnnotationQueueItemIdsPublicSchema = z
  .object({
    ids: z
      .array(z.uuid())
      .min(1)
      .max(1000)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      }),
  })
  .openapi({ required: ['ids'] })
  .openapi('AnnotationQueueItemIdsPublic')

const AnnotationQueueUpdateSchema = z
  .object({
    name: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .exactOptional(),
    description: z.string().exactOptional(),
    instructions: z.string().exactOptional(),
    comments_enabled: z.boolean().exactOptional(),
    feedback_definition_names: z.array(z.string().min(1)).exactOptional(),
    annotators_per_item: z.int32().min(1).max(1000).exactOptional(),
    lock_timeout_seconds: z.int32().min(1).max(3600).exactOptional(),
    automation: AnnotationQueueAutomationSchema.exactOptional(),
    annotator_view: AnnotationQueueAnnotatorViewSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AnnotationQueueUpdate')

const AssertionResultBatchItemSchema = z
  .object({
    entity_id: z.uuid(),
    project_name: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .exactOptional()
      .openapi({ description: 'If null, the default project is used' }),
    project_id: z.uuid().exactOptional(),
    name: z.string().min(1),
    status: z.enum(['passed', 'failed']),
    reason: z.string().exactOptional(),
    source: z.enum(['ui', 'sdk', 'online_scoring']),
  })
  .openapi({ required: ['entity_id', 'name', 'source', 'status'] })
  .openapi('AssertionResultBatchItem')

const AssertionResultBatchSchema = z
  .object({
    entity_type: z.enum(['TRACE', 'SPAN', 'THREAD']),
    assertion_results: z.array(AssertionResultBatchItemSchema).min(1).max(1000),
  })
  .openapi({ required: ['assertion_results', 'entity_type'] })
  .openapi('AssertionResultBatch')

const AttachmentSchema = z
  .object({
    link: z.string().exactOptional(),
    file_name: z.string(),
    file_size: z
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
    mime_type: z.string(),
  })
  .openapi({ required: ['file_name', 'file_size', 'mime_type'] })
  .openapi('Attachment')

const AttachmentPageSchema = z
  .object({
    page: z.int32().exactOptional(),
    size: z.int32().exactOptional(),
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
    content: z.array(AttachmentSchema).exactOptional(),
    sortableBy: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AttachmentPage')

const MultipartUploadPartSchema = z
  .object({ e_tag: z.string().min(1), part_number: z.int32() })
  .openapi({ required: ['e_tag', 'part_number'] })
  .openapi('MultipartUploadPart')

const CompleteMultipartUploadRequestSchema = z
  .object({
    file_name: z.string().min(1),
    project_name: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .exactOptional()
      .openapi({ description: 'If null, the default project is used' }),
    entity_type: z.enum(['trace', 'span']),
    entity_id: z.uuid(),
    container_id: z.uuid().exactOptional().openapi({ readOnly: true }),
    file_size: z
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
    mime_type: z.string().exactOptional(),
    upload_id: z.string().min(1),
    uploaded_file_parts: z.array(MultipartUploadPartSchema),
  })
  .openapi({
    required: [
      'entity_id',
      'entity_type',
      'file_name',
      'file_size',
      'upload_id',
      'uploaded_file_parts',
    ],
  })
  .openapi('CompleteMultipartUploadRequest')

const DeleteAttachmentsRequestSchema = z
  .object({
    file_names: z.array(z.string()).superRefine((items, ctx) => {
      const seen = new Map()
      for (const [i, val] of items.entries()) {
        const key = JSON.stringify(val)
        if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
        else seen.set(key, i)
      }
    }),
    entity_type: z.enum(['trace', 'span']),
    entity_id: z.uuid(),
    container_id: z.uuid(),
  })
  .openapi({ required: ['container_id', 'entity_id', 'entity_type', 'file_names'] })
  .openapi('DeleteAttachmentsRequest')

const StartMultipartUploadResponseSchema = z
  .object({ upload_id: z.string().min(1), pre_sign_urls: z.array(z.string()) })
  .openapi({ required: ['pre_sign_urls', 'upload_id'] })
  .openapi('StartMultipartUploadResponse')

const StartMultipartUploadRequestSchema = z
  .object({
    file_name: z.string().min(1),
    num_of_file_parts: z.int32(),
    mime_type: z.string().exactOptional(),
    project_name: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .exactOptional()
      .openapi({ description: 'If null, the default project is used' }),
    entity_type: z.enum(['trace', 'span']),
    entity_id: z.uuid(),
    container_id: z.uuid().exactOptional().openapi({ readOnly: true }),
    path: z.string().min(1),
  })
  .openapi({ required: ['entity_id', 'entity_type', 'file_name', 'num_of_file_parts', 'path'] })
  .openapi('StartMultipartUploadRequest')

const AuthDetailsHolderSchema = z.object({}).openapi('AuthDetailsHolder')

const WorkspaceNameHolderSchema = z
  .object({ workspace_name: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('WorkspaceNameHolder')

const AudioUrlSchema = z
  .object({ url: z.string() })
  .openapi({ required: ['url'] })
  .openapi('AudioUrl')

const ProjectReferenceSchema = z
  .object({
    project_id: z.uuid().openapi({ description: 'Project ID' }),
    project_name: z.string().openapi({ description: 'Project name' }),
  })
  .openapi({
    required: ['project_id', 'project_name'],
    description: 'Project reference with ID and name',
    readOnly: true,
  })
  .openapi('ProjectReference')

const AutomationRuleEvaluatorSchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ readOnly: true }),
    project_id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Primary project ID (legacy field for backwards compatibility)' }),
    project_name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Primary project name (legacy field for backwards compatibility)',
        readOnly: true,
      }),
    projects: z
      .array(ProjectReferenceSchema)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({
        description: 'Projects assigned to this rule (unique, sorted alphabetically by name)',
        readOnly: true,
      }),
    project_ids: z
      .array(
        z
          .uuid()
          .openapi({
            description: 'Project IDs for write operations (used when creating/updating rules)',
          }),
      )
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({
        description: 'Project IDs for write operations (used when creating/updating rules)',
      }),
    name: z.string().min(0).max(150),
    sampling_rate: z
      .float32()
      .nonnegative()
      .max(1)
      .exactOptional()
      .openapi({
        description:
          'Fraction of production (SDK-logged) items this rule scores, from 0 to 1. Trace rules ignore this value for experiment, playground and optimization traces and score them in full; span and thread rules only ever evaluate SDK-logged data.',
      }),
    enabled: z.boolean().exactOptional(),
    trigger_scope: z
      .enum(['production', 'experiment', 'both'])
      .exactOptional()
      .openapi({
        description:
          "Controls whether the rule fires on production traces, experiment traces, or both. Defaults to 'production' if omitted.",
      }),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    created_by: z.string().exactOptional().openapi({ readOnly: true }),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    last_updated_by: z.string().exactOptional().openapi({ readOnly: true }),
    type: z.enum([
      'llm_as_judge',
      'user_defined_metric_python',
      'trace_thread_llm_as_judge',
      'trace_thread_user_defined_metric_python',
      'span_llm_as_judge',
      'span_user_defined_metric_python',
    ]),
    action: z.enum(['evaluator', 'annotation_queue_router']),
  })
  .openapi({
    required: ['action', 'name', 'type'],
    discriminator: {
      propertyName: 'type',
      mapping: {
        llm_as_judge: '#/components/schemas/AutomationRuleEvaluatorLlmAsJudge',
        user_defined_metric_python:
          '#/components/schemas/AutomationRuleEvaluatorUserDefinedMetricPython',
        trace_thread_llm_as_judge:
          '#/components/schemas/AutomationRuleEvaluatorTraceThreadLlmAsJudge',
        trace_thread_user_defined_metric_python:
          '#/components/schemas/AutomationRuleEvaluatorTraceThreadUserDefinedMetricPython',
        span_llm_as_judge: '#/components/schemas/AutomationRuleEvaluatorSpanLlmAsJudge',
        span_user_defined_metric_python:
          '#/components/schemas/AutomationRuleEvaluatorSpanUserDefinedMetricPython',
      },
    },
  })
  .openapi('AutomationRuleEvaluator')

const TraceFilterSchema = z
  .object({
    field: z.string().exactOptional(),
    operator: z
      .enum([
        'contains',
        'not_contains',
        'starts_with',
        'ends_with',
        '=',
        '!=',
        '>',
        '>=',
        '<',
        '<=',
        'is_empty',
        'is_not_empty',
        'in',
        'not_in',
      ])
      .exactOptional(),
    key: z.string().exactOptional(),
    value: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TraceFilter')

const LlmAsJudgeModelParametersSchema = z
  .object({
    name: z.string(),
    temperature: z.float64().exactOptional(),
    seed: z.int32().exactOptional(),
    custom_parameters: JsonNodeSchema.exactOptional(),
  })
  .openapi({ required: ['name'] })
  .openapi('LlmAsJudgeModelParameters')

const ImageUrlSchema = z
  .object({ url: z.string(), detail: z.string().exactOptional() })
  .openapi({ required: ['url'] })
  .openapi('ImageUrl')

const VideoUrlSchema = z
  .object({ url: z.string() })
  .openapi({ required: ['url'] })
  .openapi('VideoUrl')

const LlmAsJudgeMessageContentSchema = z
  .object({
    type: z.string(),
    text: z.string().exactOptional(),
    image_url: ImageUrlSchema.exactOptional(),
    video_url: VideoUrlSchema.exactOptional(),
    audio_url: AudioUrlSchema.exactOptional(),
  })
  .openapi({ required: ['type'] })
  .openapi('LlmAsJudgeMessageContent')

const LlmAsJudgeMessageSchema = z
  .object({
    role: z.enum(['SYSTEM', 'USER', 'AI', 'TOOL_EXECUTION_RESULT', 'CUSTOM']),
    content: z.string().exactOptional(),
    content_array: z.array(LlmAsJudgeMessageContentSchema).exactOptional(),
    string_content: z.boolean().exactOptional(),
    structured_content: z.boolean().exactOptional(),
  })
  .openapi({ required: ['role'] })
  .openapi('LlmAsJudgeMessage')

const LlmAsJudgeOutputSchemaSchema = z
  .object({
    name: z.string(),
    type: z.enum(['BOOLEAN', 'INTEGER', 'DOUBLE']),
    description: z.string(),
  })
  .openapi({ required: ['description', 'name', 'type'] })
  .openapi('LlmAsJudgeOutputSchema')

const LlmAsJudgeCodeSchema = z
  .object({
    model: LlmAsJudgeModelParametersSchema,
    messages: z.array(LlmAsJudgeMessageSchema),
    variables: z.record(z.string(), z.string()),
    schema: z.array(LlmAsJudgeOutputSchemaSchema),
    max_cost_usd: z.number().exactOptional(),
  })
  .openapi({ required: ['messages', 'model', 'schema', 'variables'] })
  .openapi('LlmAsJudgeCode')

const AutomationRuleEvaluatorLlmAsJudgeSchema = AutomationRuleEvaluatorSchema.and(
  z
    .object({
      filters: z.array(TraceFilterSchema).exactOptional(),
      code: LlmAsJudgeCodeSchema.exactOptional(),
    })
    .openapi({ required: [] }),
)
  .openapi({ required: ['action', 'code', 'name', 'type'] })
  .openapi('AutomationRuleEvaluatorLlmAsJudge')

const SpanFilterSchema = z
  .object({
    field: z.string().exactOptional(),
    operator: z
      .enum([
        'contains',
        'not_contains',
        'starts_with',
        'ends_with',
        '=',
        '!=',
        '>',
        '>=',
        '<',
        '<=',
        'is_empty',
        'is_not_empty',
        'in',
        'not_in',
      ])
      .exactOptional(),
    key: z.string().exactOptional(),
    value: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SpanFilter')

const SpanLlmAsJudgeCodeSchema = z
  .object({
    model: LlmAsJudgeModelParametersSchema,
    messages: z.array(LlmAsJudgeMessageSchema),
    variables: z.record(z.string(), z.string()),
    schema: z.array(LlmAsJudgeOutputSchemaSchema),
  })
  .openapi({ required: ['messages', 'model', 'schema', 'variables'] })
  .openapi('SpanLlmAsJudgeCode')

const AutomationRuleEvaluatorSpanLlmAsJudgeSchema = AutomationRuleEvaluatorSchema.and(
  z
    .object({
      filters: z.array(SpanFilterSchema).exactOptional(),
      code: SpanLlmAsJudgeCodeSchema.exactOptional(),
    })
    .openapi({ required: [] }),
)
  .openapi({ required: ['action', 'code', 'name', 'type'] })
  .openapi('AutomationRuleEvaluatorSpanLlmAsJudge')

const SpanUserDefinedMetricPythonCodeSchema = z
  .object({
    metric: z.string(),
    arguments: z.record(z.string(), z.string()).refine((val) => Object.keys(val).length >= 1),
  })
  .openapi({ required: ['arguments', 'metric'] })
  .openapi('SpanUserDefinedMetricPythonCode')

const AutomationRuleEvaluatorSpanUserDefinedMetricPythonSchema = AutomationRuleEvaluatorSchema.and(
  z
    .object({
      filters: z.array(SpanFilterSchema).exactOptional(),
      code: SpanUserDefinedMetricPythonCodeSchema.exactOptional(),
    })
    .openapi({ required: [] }),
)
  .openapi({ required: ['action', 'code', 'name', 'type'] })
  .openapi('AutomationRuleEvaluatorSpanUserDefinedMetricPython')

const TraceThreadFilterSchema = z
  .object({
    field: z.string().exactOptional(),
    operator: z
      .enum([
        'contains',
        'not_contains',
        'starts_with',
        'ends_with',
        '=',
        '!=',
        '>',
        '>=',
        '<',
        '<=',
        'is_empty',
        'is_not_empty',
        'in',
        'not_in',
      ])
      .exactOptional(),
    key: z.string().exactOptional(),
    value: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TraceThreadFilter')

const TraceThreadLlmAsJudgeCodeSchema = z
  .object({
    model: LlmAsJudgeModelParametersSchema,
    messages: z.array(LlmAsJudgeMessageSchema),
    schema: z.array(LlmAsJudgeOutputSchemaSchema),
    max_cost_usd: z.number().exactOptional(),
  })
  .openapi({ required: ['messages', 'model', 'schema'] })
  .openapi('TraceThreadLlmAsJudgeCode')

const AutomationRuleEvaluatorTraceThreadLlmAsJudgeSchema = AutomationRuleEvaluatorSchema.and(
  z
    .object({
      filters: z.array(TraceThreadFilterSchema).exactOptional(),
      code: TraceThreadLlmAsJudgeCodeSchema.exactOptional(),
    })
    .openapi({ required: [] }),
)
  .openapi({ required: ['action', 'code', 'name', 'type'] })
  .openapi('AutomationRuleEvaluatorTraceThreadLlmAsJudge')

const TraceThreadUserDefinedMetricPythonCodeSchema = z
  .object({ metric: z.string() })
  .openapi({ required: ['metric'] })
  .openapi('TraceThreadUserDefinedMetricPythonCode')

const AutomationRuleEvaluatorTraceThreadUserDefinedMetricPythonSchema =
  AutomationRuleEvaluatorSchema.and(
    z
      .object({
        filters: z.array(TraceThreadFilterSchema).exactOptional(),
        code: TraceThreadUserDefinedMetricPythonCodeSchema.exactOptional(),
      })
      .openapi({ required: [] }),
  )
    .openapi({ required: ['action', 'code', 'name', 'type'] })
    .openapi('AutomationRuleEvaluatorTraceThreadUserDefinedMetricPython')

const UserDefinedMetricPythonCodeSchema = z
  .object({
    metric: z.string(),
    arguments: z.record(z.string(), z.string()).refine((val) => Object.keys(val).length >= 1),
  })
  .openapi({ required: ['arguments', 'metric'] })
  .openapi('UserDefinedMetricPythonCode')

const AutomationRuleEvaluatorUserDefinedMetricPythonSchema = AutomationRuleEvaluatorSchema.and(
  z
    .object({
      filters: z.array(TraceFilterSchema).exactOptional(),
      code: UserDefinedMetricPythonCodeSchema.exactOptional(),
    })
    .openapi({ required: [] }),
)
  .openapi({ required: ['action', 'code', 'name', 'type'] })
  .openapi('AutomationRuleEvaluatorUserDefinedMetricPython')

const AudioUrlWriteSchema = z
  .object({ url: z.string() })
  .openapi({ required: ['url'] })
  .openapi('AudioUrlWrite')

const AutomationRuleEvaluatorWriteSchema = z
  .object({
    project_id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Primary project ID (legacy field for backwards compatibility)' }),
    project_ids: z
      .array(
        z
          .uuid()
          .openapi({
            description: 'Project IDs for write operations (used when creating/updating rules)',
          }),
      )
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({
        description: 'Project IDs for write operations (used when creating/updating rules)',
      }),
    name: z.string().min(0).max(150),
    sampling_rate: z
      .float32()
      .nonnegative()
      .max(1)
      .exactOptional()
      .openapi({
        description:
          'Fraction of production (SDK-logged) items this rule scores, from 0 to 1. Trace rules ignore this value for experiment, playground and optimization traces and score them in full; span and thread rules only ever evaluate SDK-logged data.',
      }),
    enabled: z.boolean().exactOptional(),
    trigger_scope: z
      .enum(['production', 'experiment', 'both'])
      .exactOptional()
      .openapi({
        description:
          "Controls whether the rule fires on production traces, experiment traces, or both. Defaults to 'production' if omitted.",
      }),
    type: z.enum([
      'llm_as_judge',
      'user_defined_metric_python',
      'trace_thread_llm_as_judge',
      'trace_thread_user_defined_metric_python',
      'span_llm_as_judge',
      'span_user_defined_metric_python',
    ]),
    action: z.enum(['evaluator', 'annotation_queue_router']),
  })
  .openapi({
    required: ['action', 'name', 'type'],
    discriminator: {
      propertyName: 'type',
      mapping: {
        llm_as_judge: '#/components/schemas/AutomationRuleEvaluatorLlmAsJudge_Write',
        user_defined_metric_python:
          '#/components/schemas/AutomationRuleEvaluatorUserDefinedMetricPython_Write',
        trace_thread_llm_as_judge:
          '#/components/schemas/AutomationRuleEvaluatorTraceThreadLlmAsJudge_Write',
        trace_thread_user_defined_metric_python:
          '#/components/schemas/AutomationRuleEvaluatorTraceThreadUserDefinedMetricPython_Write',
        span_llm_as_judge: '#/components/schemas/AutomationRuleEvaluatorSpanLlmAsJudge_Write',
        span_user_defined_metric_python:
          '#/components/schemas/AutomationRuleEvaluatorSpanUserDefinedMetricPython_Write',
      },
    },
  })
  .openapi('AutomationRuleEvaluatorWrite')

const TraceFilterWriteSchema = z
  .object({
    field: z.string().exactOptional(),
    operator: z
      .enum([
        'contains',
        'not_contains',
        'starts_with',
        'ends_with',
        '=',
        '!=',
        '>',
        '>=',
        '<',
        '<=',
        'is_empty',
        'is_not_empty',
        'in',
        'not_in',
      ])
      .exactOptional(),
    key: z.string().exactOptional(),
    value: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TraceFilterWrite')

const JsonNodeWriteSchema = z.object({}).openapi('JsonNodeWrite')

const LlmAsJudgeModelParametersWriteSchema = z
  .object({
    name: z.string(),
    temperature: z.float64().exactOptional(),
    seed: z.int32().exactOptional(),
    custom_parameters: JsonNodeWriteSchema.exactOptional(),
  })
  .openapi({ required: ['name'] })
  .openapi('LlmAsJudgeModelParametersWrite')

const ImageUrlWriteSchema = z
  .object({ url: z.string(), detail: z.string().exactOptional() })
  .openapi({ required: ['url'] })
  .openapi('ImageUrlWrite')

const VideoUrlWriteSchema = z
  .object({ url: z.string() })
  .openapi({ required: ['url'] })
  .openapi('VideoUrlWrite')

const LlmAsJudgeMessageContentWriteSchema = z
  .object({
    type: z.string(),
    text: z.string().exactOptional(),
    image_url: ImageUrlWriteSchema.exactOptional(),
    video_url: VideoUrlWriteSchema.exactOptional(),
    audio_url: AudioUrlWriteSchema.exactOptional(),
  })
  .openapi({ required: ['type'] })
  .openapi('LlmAsJudgeMessageContentWrite')

const LlmAsJudgeMessageWriteSchema = z
  .object({
    role: z.enum(['SYSTEM', 'USER', 'AI', 'TOOL_EXECUTION_RESULT', 'CUSTOM']),
    content: z.string().exactOptional(),
    content_array: z.array(LlmAsJudgeMessageContentWriteSchema).exactOptional(),
    string_content: z.boolean().exactOptional(),
    structured_content: z.boolean().exactOptional(),
  })
  .openapi({ required: ['role'] })
  .openapi('LlmAsJudgeMessageWrite')

const LlmAsJudgeOutputSchemaWriteSchema = z
  .object({
    name: z.string(),
    type: z.enum(['BOOLEAN', 'INTEGER', 'DOUBLE']),
    description: z.string(),
  })
  .openapi({ required: ['description', 'name', 'type'] })
  .openapi('LlmAsJudgeOutputSchemaWrite')

const LlmAsJudgeCodeWriteSchema = z
  .object({
    model: LlmAsJudgeModelParametersWriteSchema,
    messages: z.array(LlmAsJudgeMessageWriteSchema),
    variables: z.record(z.string(), z.string()),
    schema: z.array(LlmAsJudgeOutputSchemaWriteSchema),
    max_cost_usd: z.number().exactOptional(),
  })
  .openapi({ required: ['messages', 'model', 'schema', 'variables'] })
  .openapi('LlmAsJudgeCodeWrite')

const AutomationRuleEvaluatorLlmAsJudgeWriteSchema = AutomationRuleEvaluatorWriteSchema.and(
  z
    .object({
      filters: z.array(TraceFilterWriteSchema).exactOptional(),
      code: LlmAsJudgeCodeWriteSchema.exactOptional(),
    })
    .openapi({ required: [] }),
)
  .openapi({ required: ['action', 'code', 'name', 'type'] })
  .openapi('AutomationRuleEvaluatorLlmAsJudgeWrite')

const SpanFilterWriteSchema = z
  .object({
    field: z.string().exactOptional(),
    operator: z
      .enum([
        'contains',
        'not_contains',
        'starts_with',
        'ends_with',
        '=',
        '!=',
        '>',
        '>=',
        '<',
        '<=',
        'is_empty',
        'is_not_empty',
        'in',
        'not_in',
      ])
      .exactOptional(),
    key: z.string().exactOptional(),
    value: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SpanFilterWrite')

const SpanLlmAsJudgeCodeWriteSchema = z
  .object({
    model: LlmAsJudgeModelParametersWriteSchema,
    messages: z.array(LlmAsJudgeMessageWriteSchema),
    variables: z.record(z.string(), z.string()),
    schema: z.array(LlmAsJudgeOutputSchemaWriteSchema),
  })
  .openapi({ required: ['messages', 'model', 'schema', 'variables'] })
  .openapi('SpanLlmAsJudgeCodeWrite')

const AutomationRuleEvaluatorSpanLlmAsJudgeWriteSchema = AutomationRuleEvaluatorWriteSchema.and(
  z
    .object({
      filters: z.array(SpanFilterWriteSchema).exactOptional(),
      code: SpanLlmAsJudgeCodeWriteSchema.exactOptional(),
    })
    .openapi({ required: [] }),
)
  .openapi({ required: ['action', 'code', 'name', 'type'] })
  .openapi('AutomationRuleEvaluatorSpanLlmAsJudgeWrite')

const SpanUserDefinedMetricPythonCodeWriteSchema = z
  .object({
    metric: z.string(),
    arguments: z.record(z.string(), z.string()).refine((val) => Object.keys(val).length >= 1),
  })
  .openapi({ required: ['arguments', 'metric'] })
  .openapi('SpanUserDefinedMetricPythonCodeWrite')

const AutomationRuleEvaluatorSpanUserDefinedMetricPythonWriteSchema =
  AutomationRuleEvaluatorWriteSchema.and(
    z
      .object({
        filters: z.array(SpanFilterWriteSchema).exactOptional(),
        code: SpanUserDefinedMetricPythonCodeWriteSchema.exactOptional(),
      })
      .openapi({ required: [] }),
  )
    .openapi({ required: ['action', 'code', 'name', 'type'] })
    .openapi('AutomationRuleEvaluatorSpanUserDefinedMetricPythonWrite')

const TraceThreadFilterWriteSchema = z
  .object({
    field: z.string().exactOptional(),
    operator: z
      .enum([
        'contains',
        'not_contains',
        'starts_with',
        'ends_with',
        '=',
        '!=',
        '>',
        '>=',
        '<',
        '<=',
        'is_empty',
        'is_not_empty',
        'in',
        'not_in',
      ])
      .exactOptional(),
    key: z.string().exactOptional(),
    value: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TraceThreadFilterWrite')

const TraceThreadLlmAsJudgeCodeWriteSchema = z
  .object({
    model: LlmAsJudgeModelParametersWriteSchema,
    messages: z.array(LlmAsJudgeMessageWriteSchema),
    schema: z.array(LlmAsJudgeOutputSchemaWriteSchema),
    max_cost_usd: z.number().exactOptional(),
  })
  .openapi({ required: ['messages', 'model', 'schema'] })
  .openapi('TraceThreadLlmAsJudgeCodeWrite')

const AutomationRuleEvaluatorTraceThreadLlmAsJudgeWriteSchema =
  AutomationRuleEvaluatorWriteSchema.and(
    z
      .object({
        filters: z.array(TraceThreadFilterWriteSchema).exactOptional(),
        code: TraceThreadLlmAsJudgeCodeWriteSchema.exactOptional(),
      })
      .openapi({ required: [] }),
  )
    .openapi({ required: ['action', 'code', 'name', 'type'] })
    .openapi('AutomationRuleEvaluatorTraceThreadLlmAsJudgeWrite')

const TraceThreadUserDefinedMetricPythonCodeWriteSchema = z
  .object({ metric: z.string() })
  .openapi({ required: ['metric'] })
  .openapi('TraceThreadUserDefinedMetricPythonCodeWrite')

const AutomationRuleEvaluatorTraceThreadUserDefinedMetricPythonWriteSchema =
  AutomationRuleEvaluatorWriteSchema.and(
    z
      .object({
        filters: z.array(TraceThreadFilterWriteSchema).exactOptional(),
        code: TraceThreadUserDefinedMetricPythonCodeWriteSchema.exactOptional(),
      })
      .openapi({ required: [] }),
  )
    .openapi({ required: ['action', 'code', 'name', 'type'] })
    .openapi('AutomationRuleEvaluatorTraceThreadUserDefinedMetricPythonWrite')

const UserDefinedMetricPythonCodeWriteSchema = z
  .object({
    metric: z.string(),
    arguments: z.record(z.string(), z.string()).refine((val) => Object.keys(val).length >= 1),
  })
  .openapi({ required: ['arguments', 'metric'] })
  .openapi('UserDefinedMetricPythonCodeWrite')

const AutomationRuleEvaluatorUserDefinedMetricPythonWriteSchema =
  AutomationRuleEvaluatorWriteSchema.and(
    z
      .object({
        filters: z.array(TraceFilterWriteSchema).exactOptional(),
        code: UserDefinedMetricPythonCodeWriteSchema.exactOptional(),
      })
      .openapi({ required: [] }),
  )
    .openapi({ required: ['action', 'code', 'name', 'type'] })
    .openapi('AutomationRuleEvaluatorUserDefinedMetricPythonWrite')

const AudioUrlPublicSchema = z
  .object({ url: z.string() })
  .openapi({ required: ['url'] })
  .openapi('AudioUrlPublic')

const ProjectReferencePublicSchema = z
  .object({
    project_id: z.uuid().openapi({ description: 'Project ID' }),
    project_name: z.string().openapi({ description: 'Project name' }),
  })
  .openapi({
    required: ['project_id', 'project_name'],
    description: 'Project reference with ID and name',
    readOnly: true,
  })
  .openapi('ProjectReferencePublic')

const AutomationRuleEvaluatorPublicSchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ readOnly: true }),
    project_id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Primary project ID (legacy field for backwards compatibility)' }),
    project_name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Primary project name (legacy field for backwards compatibility)',
        readOnly: true,
      }),
    projects: z
      .array(ProjectReferencePublicSchema)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({
        description: 'Projects assigned to this rule (unique, sorted alphabetically by name)',
        readOnly: true,
      }),
    name: z.string().min(0).max(150),
    sampling_rate: z
      .float32()
      .nonnegative()
      .max(1)
      .exactOptional()
      .openapi({
        description:
          'Fraction of production (SDK-logged) items this rule scores, from 0 to 1. Trace rules ignore this value for experiment, playground and optimization traces and score them in full; span and thread rules only ever evaluate SDK-logged data.',
      }),
    enabled: z.boolean().exactOptional(),
    trigger_scope: z
      .enum(['production', 'experiment', 'both'])
      .exactOptional()
      .openapi({
        description:
          "Controls whether the rule fires on production traces, experiment traces, or both. Defaults to 'production' if omitted.",
      }),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    created_by: z.string().exactOptional().openapi({ readOnly: true }),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    last_updated_by: z.string().exactOptional().openapi({ readOnly: true }),
    type: z.enum([
      'llm_as_judge',
      'user_defined_metric_python',
      'trace_thread_llm_as_judge',
      'trace_thread_user_defined_metric_python',
      'span_llm_as_judge',
      'span_user_defined_metric_python',
    ]),
    action: z.enum(['evaluator', 'annotation_queue_router']),
  })
  .openapi({
    required: ['action', 'name', 'type'],
    discriminator: {
      propertyName: 'type',
      mapping: {
        llm_as_judge: '#/components/schemas/AutomationRuleEvaluatorLlmAsJudge_Public',
        user_defined_metric_python:
          '#/components/schemas/AutomationRuleEvaluatorUserDefinedMetricPython_Public',
        trace_thread_llm_as_judge:
          '#/components/schemas/AutomationRuleEvaluatorTraceThreadLlmAsJudge_Public',
        trace_thread_user_defined_metric_python:
          '#/components/schemas/AutomationRuleEvaluatorTraceThreadUserDefinedMetricPython_Public',
        span_llm_as_judge: '#/components/schemas/AutomationRuleEvaluatorSpanLlmAsJudge_Public',
        span_user_defined_metric_python:
          '#/components/schemas/AutomationRuleEvaluatorSpanUserDefinedMetricPython_Public',
      },
    },
  })
  .openapi('AutomationRuleEvaluatorPublic')

const TraceFilterPublicSchema = z
  .object({
    field: z.string().exactOptional(),
    operator: z
      .enum([
        'contains',
        'not_contains',
        'starts_with',
        'ends_with',
        '=',
        '!=',
        '>',
        '>=',
        '<',
        '<=',
        'is_empty',
        'is_not_empty',
        'in',
        'not_in',
      ])
      .exactOptional(),
    key: z.string().exactOptional(),
    value: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TraceFilterPublic')

const JsonNodePublicSchema = z.object({}).openapi('JsonNodePublic')

const LlmAsJudgeModelParametersPublicSchema = z
  .object({
    name: z.string(),
    temperature: z.float64().exactOptional(),
    seed: z.int32().exactOptional(),
    custom_parameters: JsonNodePublicSchema.exactOptional(),
  })
  .openapi({ required: ['name'] })
  .openapi('LlmAsJudgeModelParametersPublic')

const ImageUrlPublicSchema = z
  .object({ url: z.string(), detail: z.string().exactOptional() })
  .openapi({ required: ['url'] })
  .openapi('ImageUrlPublic')

const VideoUrlPublicSchema = z
  .object({ url: z.string() })
  .openapi({ required: ['url'] })
  .openapi('VideoUrlPublic')

const LlmAsJudgeMessageContentPublicSchema = z
  .object({
    type: z.string(),
    text: z.string().exactOptional(),
    image_url: ImageUrlPublicSchema.exactOptional(),
    video_url: VideoUrlPublicSchema.exactOptional(),
    audio_url: AudioUrlPublicSchema.exactOptional(),
  })
  .openapi({ required: ['type'] })
  .openapi('LlmAsJudgeMessageContentPublic')

const LlmAsJudgeMessagePublicSchema = z
  .object({
    role: z.enum(['SYSTEM', 'USER', 'AI', 'TOOL_EXECUTION_RESULT', 'CUSTOM']),
    content: z.string().exactOptional(),
    content_array: z.array(LlmAsJudgeMessageContentPublicSchema).exactOptional(),
    string_content: z.boolean().exactOptional(),
    structured_content: z.boolean().exactOptional(),
  })
  .openapi({ required: ['role'] })
  .openapi('LlmAsJudgeMessagePublic')

const LlmAsJudgeOutputSchemaPublicSchema = z
  .object({
    name: z.string(),
    type: z.enum(['BOOLEAN', 'INTEGER', 'DOUBLE']),
    description: z.string(),
  })
  .openapi({ required: ['description', 'name', 'type'] })
  .openapi('LlmAsJudgeOutputSchemaPublic')

const LlmAsJudgeCodePublicSchema = z
  .object({
    model: LlmAsJudgeModelParametersPublicSchema,
    messages: z.array(LlmAsJudgeMessagePublicSchema),
    variables: z.record(z.string(), z.string()),
    schema: z.array(LlmAsJudgeOutputSchemaPublicSchema),
    max_cost_usd: z.number().exactOptional(),
  })
  .openapi({ required: ['messages', 'model', 'schema', 'variables'] })
  .openapi('LlmAsJudgeCodePublic')

const AutomationRuleEvaluatorLlmAsJudgePublicSchema = AutomationRuleEvaluatorPublicSchema.and(
  z
    .object({
      filters: z.array(TraceFilterPublicSchema).exactOptional(),
      code: LlmAsJudgeCodePublicSchema.exactOptional(),
    })
    .openapi({ required: [] }),
)
  .openapi({ required: ['action', 'code', 'name', 'type'] })
  .openapi('AutomationRuleEvaluatorLlmAsJudgePublic')

const AutomationRuleEvaluatorObjectObjectPublicSchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ readOnly: true }),
    project_id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Primary project ID (legacy field for backwards compatibility)' }),
    project_name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Primary project name (legacy field for backwards compatibility)',
        readOnly: true,
      }),
    projects: z
      .array(ProjectReferencePublicSchema)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({
        description: 'Projects assigned to this rule (unique, sorted alphabetically by name)',
        readOnly: true,
      }),
    name: z.string().min(0).max(150),
    sampling_rate: z
      .float32()
      .nonnegative()
      .max(1)
      .exactOptional()
      .openapi({
        description:
          'Fraction of production (SDK-logged) items this rule scores, from 0 to 1. Trace rules ignore this value for experiment, playground and optimization traces and score them in full; span and thread rules only ever evaluate SDK-logged data.',
      }),
    enabled: z.boolean().exactOptional(),
    trigger_scope: z
      .enum(['production', 'experiment', 'both'])
      .exactOptional()
      .openapi({
        description:
          "Controls whether the rule fires on production traces, experiment traces, or both. Defaults to 'production' if omitted.",
      }),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    created_by: z.string().exactOptional().openapi({ readOnly: true }),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    last_updated_by: z.string().exactOptional().openapi({ readOnly: true }),
    type: z.enum([
      'llm_as_judge',
      'user_defined_metric_python',
      'trace_thread_llm_as_judge',
      'trace_thread_user_defined_metric_python',
      'span_llm_as_judge',
      'span_user_defined_metric_python',
    ]),
    action: z.enum(['evaluator', 'annotation_queue_router']),
  })
  .openapi({
    required: ['action', 'name', 'type'],
    discriminator: {
      propertyName: 'type',
      mapping: {
        llm_as_judge: '#/components/schemas/AutomationRuleEvaluatorLlmAsJudge_Public',
        user_defined_metric_python:
          '#/components/schemas/AutomationRuleEvaluatorUserDefinedMetricPython_Public',
        trace_thread_llm_as_judge:
          '#/components/schemas/AutomationRuleEvaluatorTraceThreadLlmAsJudge_Public',
        trace_thread_user_defined_metric_python:
          '#/components/schemas/AutomationRuleEvaluatorTraceThreadUserDefinedMetricPython_Public',
        span_llm_as_judge: '#/components/schemas/AutomationRuleEvaluatorSpanLlmAsJudge_Public',
        span_user_defined_metric_python:
          '#/components/schemas/AutomationRuleEvaluatorSpanUserDefinedMetricPython_Public',
      },
    },
  })
  .openapi('AutomationRuleEvaluatorObjectObjectPublic')

const AutomationRuleEvaluatorPagePublicSchema = z
  .object({
    page: z.int32().exactOptional(),
    size: z.int32().exactOptional(),
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
    content: z.array(AutomationRuleEvaluatorObjectObjectPublicSchema).exactOptional(),
    sortable_by: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AutomationRuleEvaluatorPagePublic')

const SpanFilterPublicSchema = z
  .object({
    field: z.string().exactOptional(),
    operator: z
      .enum([
        'contains',
        'not_contains',
        'starts_with',
        'ends_with',
        '=',
        '!=',
        '>',
        '>=',
        '<',
        '<=',
        'is_empty',
        'is_not_empty',
        'in',
        'not_in',
      ])
      .exactOptional(),
    key: z.string().exactOptional(),
    value: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SpanFilterPublic')

const SpanLlmAsJudgeCodePublicSchema = z
  .object({
    model: LlmAsJudgeModelParametersPublicSchema,
    messages: z.array(LlmAsJudgeMessagePublicSchema),
    variables: z.record(z.string(), z.string()),
    schema: z.array(LlmAsJudgeOutputSchemaPublicSchema),
  })
  .openapi({ required: ['messages', 'model', 'schema', 'variables'] })
  .openapi('SpanLlmAsJudgeCodePublic')

const AutomationRuleEvaluatorSpanLlmAsJudgePublicSchema = AutomationRuleEvaluatorPublicSchema.and(
  z
    .object({
      filters: z.array(SpanFilterPublicSchema).exactOptional(),
      code: SpanLlmAsJudgeCodePublicSchema.exactOptional(),
    })
    .openapi({ required: [] }),
)
  .openapi({ required: ['action', 'code', 'name', 'type'] })
  .openapi('AutomationRuleEvaluatorSpanLlmAsJudgePublic')

const SpanUserDefinedMetricPythonCodePublicSchema = z
  .object({
    metric: z.string(),
    arguments: z.record(z.string(), z.string()).refine((val) => Object.keys(val).length >= 1),
  })
  .openapi({ required: ['arguments', 'metric'] })
  .openapi('SpanUserDefinedMetricPythonCodePublic')

const AutomationRuleEvaluatorSpanUserDefinedMetricPythonPublicSchema =
  AutomationRuleEvaluatorPublicSchema.and(
    z
      .object({
        filters: z.array(SpanFilterPublicSchema).exactOptional(),
        code: SpanUserDefinedMetricPythonCodePublicSchema.exactOptional(),
      })
      .openapi({ required: [] }),
  )
    .openapi({ required: ['action', 'code', 'name', 'type'] })
    .openapi('AutomationRuleEvaluatorSpanUserDefinedMetricPythonPublic')

const TraceThreadFilterPublicSchema = z
  .object({
    field: z.string().exactOptional(),
    operator: z
      .enum([
        'contains',
        'not_contains',
        'starts_with',
        'ends_with',
        '=',
        '!=',
        '>',
        '>=',
        '<',
        '<=',
        'is_empty',
        'is_not_empty',
        'in',
        'not_in',
      ])
      .exactOptional(),
    key: z.string().exactOptional(),
    value: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TraceThreadFilterPublic')

const TraceThreadLlmAsJudgeCodePublicSchema = z
  .object({
    model: LlmAsJudgeModelParametersPublicSchema,
    messages: z.array(LlmAsJudgeMessagePublicSchema),
    schema: z.array(LlmAsJudgeOutputSchemaPublicSchema),
    max_cost_usd: z.number().exactOptional(),
  })
  .openapi({ required: ['messages', 'model', 'schema'] })
  .openapi('TraceThreadLlmAsJudgeCodePublic')

const AutomationRuleEvaluatorTraceThreadLlmAsJudgePublicSchema =
  AutomationRuleEvaluatorPublicSchema.and(
    z
      .object({
        filters: z.array(TraceThreadFilterPublicSchema).exactOptional(),
        code: TraceThreadLlmAsJudgeCodePublicSchema.exactOptional(),
      })
      .openapi({ required: [] }),
  )
    .openapi({ required: ['action', 'code', 'name', 'type'] })
    .openapi('AutomationRuleEvaluatorTraceThreadLlmAsJudgePublic')

const TraceThreadUserDefinedMetricPythonCodePublicSchema = z
  .object({ metric: z.string() })
  .openapi({ required: ['metric'] })
  .openapi('TraceThreadUserDefinedMetricPythonCodePublic')

const AutomationRuleEvaluatorTraceThreadUserDefinedMetricPythonPublicSchema =
  AutomationRuleEvaluatorPublicSchema.and(
    z
      .object({
        filters: z.array(TraceThreadFilterPublicSchema).exactOptional(),
        code: TraceThreadUserDefinedMetricPythonCodePublicSchema.exactOptional(),
      })
      .openapi({ required: [] }),
  )
    .openapi({ required: ['action', 'code', 'name', 'type'] })
    .openapi('AutomationRuleEvaluatorTraceThreadUserDefinedMetricPythonPublic')

const UserDefinedMetricPythonCodePublicSchema = z
  .object({
    metric: z.string(),
    arguments: z.record(z.string(), z.string()).refine((val) => Object.keys(val).length >= 1),
  })
  .openapi({ required: ['arguments', 'metric'] })
  .openapi('UserDefinedMetricPythonCodePublic')

const AutomationRuleEvaluatorUserDefinedMetricPythonPublicSchema =
  AutomationRuleEvaluatorPublicSchema.and(
    z
      .object({
        filters: z.array(TraceFilterPublicSchema).exactOptional(),
        code: UserDefinedMetricPythonCodePublicSchema.exactOptional(),
      })
      .openapi({ required: [] }),
  )
    .openapi({ required: ['action', 'code', 'name', 'type'] })
    .openapi('AutomationRuleEvaluatorUserDefinedMetricPythonPublic')

const LogItemSchema = z
  .object({
    timestamp: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    rule_id: z.uuid().exactOptional().openapi({ readOnly: true }),
    level: z
      .enum(['INFO', 'WARN', 'ERROR', 'DEBUG', 'TRACE'])
      .exactOptional()
      .openapi({ readOnly: true }),
    message: z.string().exactOptional().openapi({ readOnly: true }),
    markers: z
      .record(z.string(), z.string().openapi({ readOnly: true }))
      .exactOptional()
      .openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('LogItem')

const LogPageSchema = z
  .object({
    content: z.array(LogItemSchema).exactOptional(),
    page: z.int32().exactOptional(),
    size: z.int32().exactOptional(),
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
  .openapi({ required: [] })
  .openapi('LogPage')

const AutomationRuleEvaluatorUpdateSchema = z
  .object({
    name: z.string().min(0).max(150),
    sampling_rate: z
      .float32()
      .nonnegative()
      .max(1)
      .exactOptional()
      .openapi({
        description:
          'Fraction of production (SDK-logged) items this rule scores, from 0 to 1. Trace rules ignore this value for experiment, playground and optimization traces and score them in full; span and thread rules only ever evaluate SDK-logged data.',
      }),
    enabled: z.boolean().exactOptional(),
    trigger_scope: z.enum(['production', 'experiment', 'both']).exactOptional(),
    project_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Primary project ID (legacy field, maintained for backwards compatibility)',
      }),
    project_ids: z
      .array(
        z
          .uuid()
          .openapi({ description: 'Multiple project IDs (new field for multi-project support)' }),
      )
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({ description: 'Multiple project IDs (new field for multi-project support)' }),
    type: z
      .enum([
        'llm_as_judge',
        'user_defined_metric_python',
        'trace_thread_llm_as_judge',
        'trace_thread_user_defined_metric_python',
        'span_llm_as_judge',
        'span_user_defined_metric_python',
      ])
      .exactOptional(),
    action: z.enum(['evaluator', 'annotation_queue_router']),
  })
  .openapi({
    required: ['action', 'name'],
    discriminator: {
      propertyName: 'type',
      mapping: {
        llm_as_judge: '#/components/schemas/AutomationRuleEvaluatorUpdateLlmAsJudge',
        user_defined_metric_python:
          '#/components/schemas/AutomationRuleEvaluatorUpdateUserDefinedMetricPython',
        trace_thread_llm_as_judge:
          '#/components/schemas/AutomationRuleEvaluatorUpdateTraceThreadLlmAsJudge',
        trace_thread_user_defined_metric_python:
          '#/components/schemas/AutomationRuleEvaluatorUpdateTraceThreadUserDefinedMetricPython',
        span_llm_as_judge: '#/components/schemas/AutomationRuleEvaluatorUpdateSpanLlmAsJudge',
        span_user_defined_metric_python:
          '#/components/schemas/AutomationRuleEvaluatorUpdateSpanUserDefinedMetricPython',
      },
    },
  })
  .openapi('AutomationRuleEvaluatorUpdate')

const AutomationRuleEvaluatorUpdateLlmAsJudgeSchema = AutomationRuleEvaluatorUpdateSchema.and(
  z
    .object({
      filters: z.array(TraceFilterSchema).exactOptional(),
      code: LlmAsJudgeCodeSchema.exactOptional(),
    })
    .openapi({ required: [] }),
)
  .openapi({ required: ['action', 'code', 'name'] })
  .openapi('AutomationRuleEvaluatorUpdateLlmAsJudge')

const AutomationRuleEvaluatorUpdateSpanLlmAsJudgeSchema = AutomationRuleEvaluatorUpdateSchema.and(
  z
    .object({
      filters: z.array(SpanFilterSchema).exactOptional(),
      code: SpanLlmAsJudgeCodeSchema.exactOptional(),
    })
    .openapi({ required: [] }),
)
  .openapi({ required: ['action', 'code', 'name'] })
  .openapi('AutomationRuleEvaluatorUpdateSpanLlmAsJudge')

const AutomationRuleEvaluatorUpdateSpanUserDefinedMetricPythonSchema =
  AutomationRuleEvaluatorUpdateSchema.and(
    z
      .object({
        filters: z.array(SpanFilterSchema).exactOptional(),
        code: SpanUserDefinedMetricPythonCodeSchema.exactOptional(),
      })
      .openapi({ required: [] }),
  )
    .openapi({ required: ['action', 'code', 'name'] })
    .openapi('AutomationRuleEvaluatorUpdateSpanUserDefinedMetricPython')

const AutomationRuleEvaluatorUpdateTraceThreadLlmAsJudgeSchema =
  AutomationRuleEvaluatorUpdateSchema.and(
    z
      .object({
        filters: z.array(TraceThreadFilterSchema).exactOptional(),
        code: TraceThreadLlmAsJudgeCodeSchema.exactOptional(),
      })
      .openapi({ required: [] }),
  )
    .openapi({ required: ['action', 'code', 'name'] })
    .openapi('AutomationRuleEvaluatorUpdateTraceThreadLlmAsJudge')

const AutomationRuleEvaluatorUpdateTraceThreadUserDefinedMetricPythonSchema =
  AutomationRuleEvaluatorUpdateSchema.and(
    z
      .object({
        filters: z.array(TraceThreadFilterSchema).exactOptional(),
        code: TraceThreadUserDefinedMetricPythonCodeSchema.exactOptional(),
      })
      .openapi({ required: [] }),
  )
    .openapi({ required: ['action', 'code', 'name'] })
    .openapi('AutomationRuleEvaluatorUpdateTraceThreadUserDefinedMetricPython')

const AutomationRuleEvaluatorUpdateUserDefinedMetricPythonSchema =
  AutomationRuleEvaluatorUpdateSchema.and(
    z
      .object({
        filters: z.array(TraceFilterSchema).exactOptional(),
        code: UserDefinedMetricPythonCodeSchema.exactOptional(),
      })
      .openapi({ required: [] }),
  )
    .openapi({ required: ['action', 'code', 'name'] })
    .openapi('AutomationRuleEvaluatorUpdateUserDefinedMetricPython')

const FunctionCallSchema = z
  .object({ name: z.string().exactOptional(), arguments: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('FunctionCall')

const ToolCallSchema = z
  .object({
    id: z.string().exactOptional(),
    index: z.int32().exactOptional(),
    type: z.literal('function').exactOptional(),
    function: FunctionCallSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ToolCall')

const AssistantMessageSchema = z
  .object({
    role: z.enum(['system', 'user', 'assistant', 'tool', 'function']).exactOptional(),
    content: z.string().exactOptional(),
    reasoningContent: z.string().exactOptional(),
    name: z.string().exactOptional(),
    toolCalls: z.array(ToolCallSchema).exactOptional(),
    refusal: z.string().exactOptional(),
    functionCall: FunctionCallSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AssistantMessage')

const DeltaSchema = z
  .object({
    role: z.string().exactOptional(),
    content: z.string().exactOptional(),
    reasoningContent: z.string().exactOptional(),
    toolCalls: z.array(ToolCallSchema).exactOptional(),
    functionCall: FunctionCallSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Delta')

const LogProbSchema = z
  .object({
    token: z.string().exactOptional(),
    logprob: z.float64().exactOptional(),
    bytes: z.array(z.int32()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LogProb')

const LogProbsSchema = z
  .object({ content: z.array(LogProbSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('LogProbs')

const ChatCompletionChoiceSchema = z
  .object({
    index: z.int32().exactOptional(),
    message: AssistantMessageSchema.exactOptional(),
    delta: DeltaSchema.exactOptional(),
    finishReason: z.string().exactOptional(),
    logprobs: LogProbsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ChatCompletionChoice')

const PromptTokensDetailsSchema = z
  .object({ cachedTokens: z.int32().exactOptional(), cacheWriteTokens: z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('PromptTokensDetails')

const CompletionTokensDetailsSchema = z
  .object({ reasoningTokens: z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('CompletionTokensDetails')

const UsageSchema = z
  .object({
    totalTokens: z.int32().exactOptional(),
    promptTokens: z.int32().exactOptional(),
    promptTokensDetails: PromptTokensDetailsSchema.exactOptional(),
    completionTokens: z.int32().exactOptional(),
    completionTokensDetails: CompletionTokensDetailsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Usage')

const ChatCompletionResponseSchema = z
  .object({
    id: z.string().exactOptional(),
    created: z
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
    model: z.string().exactOptional(),
    choices: z.array(ChatCompletionChoiceSchema).exactOptional(),
    usage: UsageSchema.exactOptional(),
    systemFingerprint: z.string().exactOptional(),
    serviceTier: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ChatCompletionResponse')

const MessageSchema = z
  .object({ role: z.string().min(1), content: JsonNodeSchema })
  .openapi({ required: ['content', 'role'] })
  .openapi('Message')

const StreamOptionsSchema = z
  .object({ includeUsage: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('StreamOptions')

const JsonSchemaSchema = z
  .object({
    name: z.string().exactOptional(),
    strict: z.boolean().exactOptional(),
    schema: z.record(z.string(), z.object({})).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('JsonSchema')

const ResponseFormatSchema = z
  .object({
    type: z.enum(['text', 'json_object', 'json_schema']).exactOptional(),
    jsonSchema: JsonSchemaSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResponseFormat')

const FunctionSchema = z
  .object({
    name: z.string().exactOptional(),
    description: z.string().exactOptional(),
    strict: z.boolean().exactOptional(),
    parameters: z.record(z.string(), z.object({})).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Function')

const ToolSchema = z
  .object({ type: z.literal('function').exactOptional(), function: FunctionSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('Tool')

const PromptCacheOptionsSchema = z
  .object({ mode: z.string().exactOptional(), ttl: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('PromptCacheOptions')

const ChatCompletionRequestSchema = z
  .object({
    model: z.string().exactOptional(),
    messages: z.array(MessageSchema).exactOptional(),
    temperature: z.float64().exactOptional(),
    topP: z.float64().exactOptional(),
    n: z.int32().exactOptional(),
    stream: z.boolean().exactOptional(),
    streamOptions: StreamOptionsSchema.exactOptional(),
    stop: z.array(z.string()).exactOptional(),
    maxTokens: z.int32().exactOptional(),
    maxCompletionTokens: z.int32().exactOptional(),
    presencePenalty: z.float64().exactOptional(),
    frequencyPenalty: z.float64().exactOptional(),
    logitBias: z.record(z.string(), z.int32()).exactOptional(),
    user: z.string().exactOptional(),
    responseFormat: ResponseFormatSchema.exactOptional(),
    seed: z.int32().exactOptional(),
    tools: z.array(ToolSchema).exactOptional(),
    toolChoice: z.object({}).exactOptional(),
    parallelToolCalls: z.boolean().exactOptional(),
    store: z.boolean().exactOptional(),
    metadata: z.record(z.string(), z.string()).exactOptional(),
    reasoningEffort: z.string().exactOptional(),
    serviceTier: z.string().exactOptional(),
    promptCacheKey: z.string().exactOptional(),
    promptCacheOptions: PromptCacheOptionsSchema.exactOptional(),
    logprobs: z.boolean().exactOptional(),
    topLogprobs: z.int32().exactOptional(),
    functions: z.array(FunctionSchema).exactOptional(),
    functionCall: FunctionCallSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ChatCompletionRequest')

const DashboardPublicSchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ readOnly: true }),
    workspace_id: z.string().exactOptional().openapi({ readOnly: true }),
    project_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Project ID. Takes precedence over project_name when both are provided.',
      }),
    name: z.string().min(1).max(120),
    slug: z.string().exactOptional().openapi({ readOnly: true }),
    type: z.enum(['multi_project', 'experiments']).exactOptional(),
    scope: z.enum(['workspace', 'insights']).exactOptional().openapi({ readOnly: true }),
    description: z.string().min(0).max(1000).exactOptional(),
    config: JsonNodePublicSchema,
    created_by: z.string().exactOptional().openapi({ readOnly: true }),
    last_updated_by: z.string().exactOptional().openapi({ readOnly: true }),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: ['config', 'name'] })
  .openapi('DashboardPublic')

const DashboardWriteSchema = z
  .object({
    project_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Project ID. Takes precedence over project_name when both are provided.',
      }),
    project_name: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .exactOptional()
      .openapi({
        description:
          'For project scope, specify either project_id or project_name. If project_name is provided and the project does not exist, it will be created. Ignored when project_id is provided. If neither is provided, the dashboard is created at workspace level.',
      }),
    name: z.string().min(1).max(120),
    type: z.enum(['multi_project', 'experiments']).exactOptional(),
    description: z.string().min(0).max(1000).exactOptional(),
    config: JsonNodeWriteSchema,
  })
  .openapi({ required: ['config', 'name'] })
  .openapi('DashboardWrite')

const DashboardPagePublicSchema = z
  .object({
    content: z.array(DashboardPublicSchema).exactOptional(),
    page: z.int32().exactOptional(),
    size: z.int32().exactOptional(),
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
    sortable_by: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DashboardPagePublic')

const DashboardWidgetQueryRequestSchema = z
  .object({
    interval_start: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Start of the date range, bound to {{window_start}} in the dashboard saved query. Omit for all time.',
      }),
    interval_end: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'End of the date range, bound to {{window_end}} in the dashboard saved query. Omit for now.',
      }),
  })
  .openapi({ required: [] })
  .openapi('DashboardWidgetQueryRequest')

const DashboardUpdatePublicSchema = z
  .object({
    name: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .min(1)
      .max(120)
      .exactOptional(),
    type: z.enum(['multi_project', 'experiments']).exactOptional(),
    description: z.string().min(0).max(1000).exactOptional(),
    config: JsonNodePublicSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DashboardUpdatePublic')

const EvaluatorItemPublicSchema = z
  .object({
    name: z.string().min(1),
    type: z.enum(['llm_judge', 'code_metric']),
    config: JsonNodePublicSchema,
  })
  .openapi({
    required: ['config', 'name', 'type'],
    description: 'Default evaluators for items in this version',
    readOnly: true,
  })
  .openapi('EvaluatorItemPublic')

const ExecutionPolicyPublicSchema = z
  .object({
    runs_per_item: z.int32().min(1).max(100).exactOptional(),
    pass_threshold: z.int32().min(1).max(100).exactOptional(),
  })
  .openapi({
    description: 'Default execution policy for items in this version',
    readOnly: true,
    required: [],
  })
  .openapi('ExecutionPolicyPublic')

const DatasetVersionPublicSchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ readOnly: true }),
    dataset_id: z.uuid().exactOptional().openapi({ readOnly: true }),
    version_hash: z.string().exactOptional().openapi({ readOnly: true }),
    tags: z
      .array(z.string().openapi({ readOnly: true }))
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({ readOnly: true }),
    is_latest: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates whether this is the latest version of the dataset',
        readOnly: true,
      }),
    version_name: z
      .string()
      .exactOptional()
      .openapi({
        description: "Sequential version name formatted as 'v1', 'v2', etc.",
        readOnly: true,
      }),
    items_total: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Total number of items in this version', readOnly: true }),
    items_added: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Number of items added since last version', readOnly: true }),
    items_modified: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Number of items modified since last version', readOnly: true }),
    items_deleted: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Number of items deleted since last version', readOnly: true }),
    change_description: z.string().exactOptional().openapi({ readOnly: true }),
    metadata: z
      .record(z.string(), z.string().openapi({ readOnly: true }))
      .exactOptional()
      .openapi({ readOnly: true }),
    evaluators: z
      .array(EvaluatorItemPublicSchema)
      .exactOptional()
      .openapi({ description: 'Default evaluators for items in this version', readOnly: true }),
    execution_policy: ExecutionPolicyPublicSchema.exactOptional(),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    created_by: z.string().exactOptional().openapi({ readOnly: true }),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    last_updated_by: z.string().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('DatasetVersionPublic')

const DatasetItemChangesPublicSchema = z.object({}).openapi('DatasetItemChangesPublic')

const DatasetItemFilterSchema = z
  .object({
    field: z.string().exactOptional(),
    operator: z
      .enum([
        'contains',
        'not_contains',
        'starts_with',
        'ends_with',
        '=',
        '!=',
        '>',
        '>=',
        '<',
        '<=',
        'is_empty',
        'is_not_empty',
        'in',
        'not_in',
      ])
      .exactOptional(),
    key: z.string().exactOptional(),
    value: z.string().exactOptional(),
  })
  .openapi({
    description:
      "Filters to select dataset items to delete within the specified dataset. Must be used with 'dataset_id'. Mutually exclusive with 'item_ids'. Empty array means 'delete all items in the dataset'.",
    required: [],
  })
  .openapi('DatasetItemFilter')

const EvaluatorItemSchema = z
  .object({
    name: z.string().min(1),
    type: z.enum(['llm_judge', 'code_metric']),
    config: JsonNodeSchema,
  })
  .openapi({ required: ['config', 'name', 'type'] })
  .openapi('EvaluatorItem')

const ExecutionPolicySchema = z
  .object({
    runs_per_item: z.int32().min(1).max(100).exactOptional(),
    pass_threshold: z.int32().min(1).max(100).exactOptional(),
  })
  .openapi({ readOnly: true, required: [] })
  .openapi('ExecutionPolicy')

const DatasetItemUpdateSchema = z
  .object({
    input: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .exactOptional()
      .openapi({ description: 'Dataset item input' }),
    expected_output: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .exactOptional()
      .openapi({ description: 'Dataset item expected output' }),
    metadata: JsonNodeSchema.exactOptional(),
    data: JsonNodeSchema.exactOptional(),
    description: z.string().exactOptional().openapi({ description: 'Dataset item description' }),
    tags: z
      .array(z.string().min(0).max(100).openapi({ description: 'Tags' }))
      .min(0)
      .max(50)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({ description: 'Tags' }),
    tags_to_add: z
      .array(z.string().min(0).max(100).openapi({ description: 'Tags to add' }))
      .min(0)
      .max(50)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({ description: 'Tags to add' }),
    tags_to_remove: z
      .array(z.string().min(0).max(100).openapi({ description: 'Tags to remove' }))
      .min(0)
      .max(50)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({ description: 'Tags to remove' }),
    evaluators: z.array(EvaluatorItemSchema).exactOptional().openapi({ description: 'Evaluators' }),
    execution_policy: ExecutionPolicySchema.exactOptional(),
    clear_execution_policy: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'When true, clears the item-level execution policy (falls back to dataset-level)',
      }),
  })
  .openapi({ description: 'Dataset item update request', required: [] })
  .openapi('DatasetItemUpdate')

const DatasetItemBatchUpdateSchema = z
  .object({
    ids: z
      .array(
        z
          .uuid()
          .openapi({
            description:
              "List of dataset item IDs to update (max 1000). Mutually exclusive with 'filters'.",
          }),
      )
      .min(1)
      .max(1000)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({
        description:
          "List of dataset item IDs to update (max 1000). Mutually exclusive with 'filters'.",
      }),
    filters: z.array(DatasetItemFilterSchema).exactOptional(),
    dataset_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: "Dataset ID. Required when using 'filters', optional when using 'ids'.",
      }),
    update: DatasetItemUpdateSchema,
    merge_tags: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "If true, merge tags with existing tags instead of replacing them. Default: false. When using 'filters', this is automatically set to true.",
      }),
  })
  .openapi({ required: ['update'], description: 'Request to batch update multiple dataset items' })
  .openapi('DatasetItemBatchUpdate')

const DatasetVersionSummarySchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ description: 'Unique identifier of the version' }),
    version_hash: z
      .string()
      .exactOptional()
      .openapi({ description: 'Hash of the version content' }),
    version_name: z
      .string()
      .exactOptional()
      .openapi({ description: "Sequential version name formatted as 'v1', 'v2', etc." }),
    change_description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description of changes in this version' }),
    tags: z
      .array(z.string().openapi({ description: 'Tags associated with this version' }))
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({ description: 'Tags associated with this version' }),
  })
  .openapi({ description: 'Summary of the latest dataset version', readOnly: true, required: [] })
  .openapi('DatasetVersionSummary')

const DatasetSchema = z
  .object({
    id: z.uuid().exactOptional(),
    name: z.string().min(1),
    project_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Project ID. Takes precedence over project_name when both are provided.',
      }),
    project_name: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .exactOptional()
      .openapi({
        description:
          'For project scope, specify either project_id or project_name. If project_name is provided and the project does not exist, it will be created. Ignored when project_id is provided. If neither is provided, the dataset is created at workspace level.',
      }),
    type: z.enum(['dataset', 'evaluation_suite']).exactOptional(),
    visibility: z.enum(['private', 'public']).exactOptional(),
    tags: z
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
    description: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .min(0)
      .max(255)
      .exactOptional(),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    created_by: z.string().exactOptional().openapi({ readOnly: true }),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    last_updated_by: z.string().exactOptional().openapi({ readOnly: true }),
    experiment_count: z
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
      .openapi({ type: 'integer', format: 'int64', readOnly: true }),
    dataset_items_count: z
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
      .openapi({ type: 'integer', format: 'int64', readOnly: true }),
    optimization_count: z
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
      .openapi({ type: 'integer', format: 'int64', readOnly: true }),
    most_recent_experiment_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ readOnly: true }),
    last_created_experiment_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ readOnly: true }),
    most_recent_optimization_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ readOnly: true }),
    last_created_optimization_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ readOnly: true }),
    status: z
      .enum(['unknown', 'processing', 'completed', 'failed'])
      .exactOptional()
      .openapi({ readOnly: true }),
    latest_version: DatasetVersionSummarySchema.exactOptional(),
  })
  .openapi({ required: ['name'] })
  .openapi('Dataset')

const DatasetWriteSchema = z
  .object({
    id: z.uuid().exactOptional(),
    name: z.string().min(1),
    project_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Project ID. Takes precedence over project_name when both are provided.',
      }),
    project_name: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .exactOptional()
      .openapi({
        description:
          'For project scope, specify either project_id or project_name. If project_name is provided and the project does not exist, it will be created. Ignored when project_id is provided. If neither is provided, the dataset is created at workspace level.',
      }),
    type: z.enum(['dataset', 'evaluation_suite']).exactOptional(),
    visibility: z.enum(['private', 'public']).exactOptional(),
    tags: z
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
    description: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .min(0)
      .max(255)
      .exactOptional(),
  })
  .openapi({ required: ['name'] })
  .openapi('DatasetWrite')

const AssertionResultSchema = z
  .object({
    value: z.string().exactOptional(),
    passed: z.boolean().exactOptional(),
    reason: z.string().exactOptional(),
  })
  .openapi({ readOnly: true, required: [] })
  .openapi('AssertionResult')

const CommentSchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ readOnly: true }),
    text: z.string().min(1),
    source_queue_id: z.uuid().exactOptional(),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    created_by: z.string().exactOptional().openapi({ readOnly: true }),
    last_updated_by: z.string().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: ['text'] })
  .openapi('Comment')

const JsonListStringSchema = z
  .union([z.object({}), z.array(z.object({})), z.string()])
  .openapi('JsonListString')

const ValueEntrySchema = z
  .object({
    value: z.number().exactOptional(),
    reason: z.string().exactOptional(),
    category_name: z.string().exactOptional(),
    source: z.enum(['ui', 'sdk', 'online_scoring']).exactOptional(),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional(),
    span_type: z.string().exactOptional(),
    span_id: z.string().exactOptional(),
    source_queue_id: z.string().exactOptional(),
    author: z.string().exactOptional(),
  })
  .openapi({ readOnly: true, required: [] })
  .openapi('ValueEntry')

const FeedbackScoreSchema = z
  .object({
    name: z.string().min(1),
    category_name: z.string().exactOptional(),
    value: z.number().min(-1000000000).max(1000000000),
    reason: z.string().exactOptional(),
    source: z.enum(['ui', 'sdk', 'online_scoring']),
    source_queue_id: z.uuid().exactOptional(),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    created_by: z.string().exactOptional().openapi({ readOnly: true }),
    last_updated_by: z.string().exactOptional().openapi({ readOnly: true }),
    value_by_author: z
      .record(z.string(), ValueEntrySchema)
      .exactOptional()
      .openapi({ readOnly: true }),
  })
  .openapi({ required: ['name', 'source', 'value'] })
  .openapi('FeedbackScore')

const ExperimentItemSchema = z
  .object({
    id: z.uuid().exactOptional(),
    experiment_id: z.uuid(),
    dataset_item_id: z.uuid(),
    trace_id: z.uuid(),
    project_id: z.uuid().exactOptional().openapi({ readOnly: true }),
    project_name: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .exactOptional(),
    input: JsonListStringSchema.exactOptional(),
    output: JsonListStringSchema.exactOptional(),
    trace_metadata: JsonListStringSchema.exactOptional(),
    feedback_scores: z.array(FeedbackScoreSchema).exactOptional().openapi({ readOnly: true }),
    comments: z.array(CommentSchema).exactOptional().openapi({ readOnly: true }),
    total_estimated_cost: z.number().exactOptional().openapi({ readOnly: true }),
    duration: z.float64().exactOptional().openapi({ readOnly: true }),
    usage: z
      .record(
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
          .openapi({ type: 'integer', format: 'int64', readOnly: true }),
      )
      .exactOptional()
      .openapi({ readOnly: true }),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    created_by: z.string().exactOptional().openapi({ readOnly: true }),
    last_updated_by: z.string().exactOptional().openapi({ readOnly: true }),
    trace_visibility_mode: z
      .enum(['default', 'hidden'])
      .exactOptional()
      .openapi({ readOnly: true }),
    description: z.string().exactOptional().openapi({ readOnly: true }),
    execution_policy: ExecutionPolicySchema.exactOptional(),
    assertion_results: z.array(AssertionResultSchema).exactOptional().openapi({ readOnly: true }),
    status: z.enum(['passed', 'failed']).exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: ['dataset_item_id', 'experiment_id', 'trace_id'] })
  .openapi('ExperimentItem')

const ExperimentRunSummarySchema = z
  .object({
    passed_runs: z.int32().exactOptional(),
    total_runs: z.int32().exactOptional(),
    status: z.enum(['passed', 'failed']).exactOptional(),
  })
  .openapi({ readOnly: true, required: [] })
  .openapi('ExperimentRunSummary')

const DatasetItemSchema = z
  .object({
    id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'Stable item identifier.\nOn write, used as the upsert key.\nIf omitted, a new ID is generated.\nRemains the same across dataset versions\n',
      }),
    dataset_item_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          "Deprecated.\nAlways equals 'id'.\nRetained for backward compatibility and will be removed in a future version\n",
        readOnly: true,
      }),
    trace_id: z.uuid().exactOptional(),
    span_id: z.uuid().exactOptional(),
    source: z.enum(['manual', 'trace', 'span', 'sdk']),
    data: JsonNodeSchema,
    description: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .exactOptional(),
    tags: z
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
    evaluators: z.array(EvaluatorItemSchema).exactOptional(),
    execution_policy: ExecutionPolicySchema.exactOptional(),
    experiment_items: z.array(ExperimentItemSchema).exactOptional().openapi({ readOnly: true }),
    run_summaries_by_experiment: z
      .record(z.string(), ExperimentRunSummarySchema)
      .exactOptional()
      .openapi({ readOnly: true }),
    dataset_id: z.uuid().exactOptional().openapi({ readOnly: true }),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    created_by: z.string().exactOptional().openapi({ readOnly: true }),
    last_updated_by: z.string().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: ['data', 'source'] })
  .openapi('DatasetItem')

const DatasetItemBatchSchema = z
  .object({
    dataset_name: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .exactOptional()
      .openapi({ description: 'If null, dataset_id must be provided' }),
    dataset_id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'If null, dataset_name must be provided' }),
    project_name: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .exactOptional()
      .openapi({
        description:
          'Optional. Associates the batch with a project by name. Ignored if project_id is provided.',
      }),
    project_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'Optional. Associates the batch with a project by ID. Takes precedence over project_name.',
      }),
    items: z.array(DatasetItemSchema).min(1).max(1000),
    batch_group_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'Optional batch group ID to group multiple batches into a single dataset version. If null, mutates the latest version instead of creating a new one.',
      }),
    copy_from_dataset_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          "Optional. Dataset to read carry-forward rows from when materializing the new version. Required together with copy_from_version_id. When null, carry-forward rows are read from the destination dataset's prior version.",
      }),
    copy_from_version_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'Optional. Version within copy_from_dataset_id to read carry-forward rows from. Required together with copy_from_dataset_id.',
      }),
  })
  .openapi({ required: ['items'] })
  .openapi('DatasetItemBatch')

const EvaluatorItemWriteSchema = z
  .object({
    name: z.string().min(1),
    type: z.enum(['llm_judge', 'code_metric']),
    config: JsonNodeWriteSchema,
  })
  .openapi({ required: ['config', 'name', 'type'] })
  .openapi('EvaluatorItemWrite')

const ExecutionPolicyWriteSchema = z
  .object({
    runs_per_item: z.int32().min(1).max(100).exactOptional(),
    pass_threshold: z.int32().min(1).max(100).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ExecutionPolicyWrite')

const DatasetItemWriteSchema = z
  .object({
    id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'Stable item identifier.\nOn write, used as the upsert key.\nIf omitted, a new ID is generated.\nRemains the same across dataset versions\n',
      }),
    trace_id: z.uuid().exactOptional(),
    span_id: z.uuid().exactOptional(),
    source: z.enum(['manual', 'trace', 'span', 'sdk']),
    data: JsonNodeSchema,
    description: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .exactOptional(),
    tags: z
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
    evaluators: z.array(EvaluatorItemWriteSchema).exactOptional(),
    execution_policy: ExecutionPolicyWriteSchema.exactOptional(),
  })
  .openapi({ required: ['data', 'source'] })
  .openapi('DatasetItemWrite')

const DatasetItemBatchWriteSchema = z
  .object({
    dataset_name: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .exactOptional()
      .openapi({ description: 'If null, dataset_id must be provided' }),
    dataset_id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'If null, dataset_name must be provided' }),
    project_name: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .exactOptional()
      .openapi({
        description:
          'Optional. Associates the batch with a project by name. Ignored if project_id is provided.',
      }),
    project_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'Optional. Associates the batch with a project by ID. Takes precedence over project_name.',
      }),
    items: z.array(DatasetItemWriteSchema).min(1).max(1000),
    batch_group_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'Optional batch group ID to group multiple batches into a single dataset version. If null, mutates the latest version instead of creating a new one.',
      }),
    copy_from_dataset_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          "Optional. Dataset to read carry-forward rows from when materializing the new version. Required together with copy_from_version_id. When null, carry-forward rows are read from the destination dataset's prior version.",
      }),
    copy_from_version_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'Optional. Version within copy_from_dataset_id to read carry-forward rows from. Required together with copy_from_dataset_id.',
      }),
  })
  .openapi({ required: ['items'] })
  .openapi('DatasetItemBatchWrite')

const SpanEnrichmentOptionsSchema = z
  .object({
    includeTags: z.boolean().exactOptional(),
    includeFeedbackScores: z.boolean().exactOptional(),
    includeComments: z.boolean().exactOptional(),
    includeUsage: z.boolean().exactOptional(),
    includeMetadata: z.boolean().exactOptional(),
  })
  .openapi({ description: 'Options for enriching span data', required: [] })
  .openapi('SpanEnrichmentOptions')

const CreateDatasetItemsFromSpansRequestSchema = z
  .object({
    span_ids: z
      .array(z.uuid().openapi({ description: 'Set of span IDs to add to the dataset' }))
      .min(1)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .openapi({ description: 'Set of span IDs to add to the dataset' }),
    enrichment_options: SpanEnrichmentOptionsSchema,
    evaluators: z
      .array(EvaluatorItemSchema)
      .exactOptional()
      .openapi({ description: 'Optional evaluators to apply to the created items' }),
    execution_policy: ExecutionPolicySchema.exactOptional(),
    field_mappings: z
      .record(
        z.string(),
        z
          .string()
          .openapi({
            description:
              "Optional mapping of dataset item field name to a path into the span, e.g. 'input.input_text'. Takes precedence over the fields produced by enrichment_options. Ignored for test suite datasets.",
          }),
      )
      .exactOptional()
      .openapi({
        description:
          "Optional mapping of dataset item field name to a path into the span, e.g. 'input.input_text'. Takes precedence over the fields produced by enrichment_options. Ignored for test suite datasets.",
      }),
  })
  .openapi({ required: ['enrichment_options', 'span_ids'] })
  .openapi('CreateDatasetItemsFromSpansRequest')

const TraceEnrichmentOptionsSchema = z
  .object({
    includeSpans: z.boolean().exactOptional(),
    includeTags: z.boolean().exactOptional(),
    includeFeedbackScores: z.boolean().exactOptional(),
    includeComments: z.boolean().exactOptional(),
    includeUsage: z.boolean().exactOptional(),
    includeMetadata: z.boolean().exactOptional(),
  })
  .openapi({ description: 'Options for enriching trace data', required: [] })
  .openapi('TraceEnrichmentOptions')

const CreateDatasetItemsFromTracesRequestSchema = z
  .object({
    trace_ids: z
      .array(z.uuid().openapi({ description: 'Set of trace IDs to add to the dataset' }))
      .min(1)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .openapi({ description: 'Set of trace IDs to add to the dataset' }),
    enrichment_options: TraceEnrichmentOptionsSchema,
    evaluators: z
      .array(EvaluatorItemSchema)
      .exactOptional()
      .openapi({ description: 'Optional evaluators to apply to the created items' }),
    execution_policy: ExecutionPolicySchema.exactOptional(),
    field_mappings: z
      .record(
        z.string(),
        z
          .string()
          .openapi({
            description:
              "Optional mapping of dataset item field name to a path into the trace, e.g. 'input.input_text'. Takes precedence over the fields produced by enrichment_options. Ignored for test suite datasets.",
          }),
      )
      .exactOptional()
      .openapi({
        description:
          "Optional mapping of dataset item field name to a path into the trace, e.g. 'input.input_text'. Takes precedence over the fields produced by enrichment_options. Ignored for test suite datasets.",
      }),
  })
  .openapi({ required: ['enrichment_options', 'trace_ids'] })
  .openapi('CreateDatasetItemsFromTracesRequest')

const DatasetIdentifierSchema = z
  .object({ dataset_name: z.string().min(1), project_name: z.string().exactOptional() })
  .openapi({ required: ['dataset_name'] })
  .openapi('DatasetIdentifier')

const DatasetItemsDeleteSchema = z
  .object({
    item_ids: z
      .array(
        z
          .uuid()
          .openapi({
            description:
              "List of dataset item IDs to delete (max 1000). Use this to delete specific items by their IDs. Mutually exclusive with 'dataset_id' and 'filters'.",
          }),
      )
      .min(1)
      .max(1000)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({
        description:
          "List of dataset item IDs to delete (max 1000). Use this to delete specific items by their IDs. Mutually exclusive with 'dataset_id' and 'filters'.",
      }),
    dataset_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          "Dataset ID to scope the deletion. Required when using 'filters'. Mutually exclusive with 'item_ids'.",
      }),
    filters: z
      .array(DatasetItemFilterSchema)
      .exactOptional()
      .openapi({
        description:
          "Filters to select dataset items to delete within the specified dataset. Must be used with 'dataset_id'. Mutually exclusive with 'item_ids'. Empty array means 'delete all items in the dataset'.",
      }),
    batch_group_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'Optional batch group ID to group multiple delete operations into a single dataset version. If null, mutates the latest version instead of creating a new one.',
      }),
  })
  .openapi({ description: 'Request to delete multiple dataset items', required: [] })
  .openapi('DatasetItemsDelete')

const DatasetExpansionResponseSchema = z
  .object({
    generated_samples: z
      .array(DatasetItemSchema)
      .exactOptional()
      .openapi({ description: 'List of generated synthetic dataset items' }),
    model: z
      .string()
      .exactOptional()
      .openapi({ description: 'Model used for generation', example: 'gpt-4' }),
    total_generated: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Total number of samples generated', example: 10 }),
    generation_time: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Generation timestamp', readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('DatasetExpansionResponse')

const DatasetExpansionSchema = z
  .object({
    model: z
      .string()
      .min(1)
      .openapi({ description: 'The model to use for synthetic data generation', example: 'gpt-4' }),
    sample_count: z
      .int32()
      .min(1)
      .max(200)
      .exactOptional()
      .openapi({ description: 'Number of synthetic samples to generate', example: 10 }),
    preserve_fields: z
      .array(
        z
          .string()
          .openapi({
            description: 'Fields to preserve patterns from original data',
            example: '["input","expected_output"]',
          }),
      )
      .exactOptional()
      .openapi({
        description: 'Fields to preserve patterns from original data',
        example: ['input', 'expected_output'],
      }),
    variation_instructions: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Additional instructions for data variation',
        example: 'Create variations that test edge cases',
      }),
    custom_prompt: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Custom prompt to use for generation instead of auto-generated one',
      }),
    max_completion_tokens: z
      .int32()
      .min(100)
      .exactOptional()
      .openapi({
        description:
          'Maximum number of tokens for the LLM response. Required by Anthropic, used as maxOutputTokens for Gemini. If not provided, defaults to 4000 for Anthropic models only.',
      }),
  })
  .openapi({ required: ['model'] })
  .openapi('DatasetExpansion')

const DatasetExpansionWriteSchema = z
  .object({
    model: z
      .string()
      .min(1)
      .openapi({ description: 'The model to use for synthetic data generation', example: 'gpt-4' }),
    sample_count: z
      .int32()
      .min(1)
      .max(200)
      .exactOptional()
      .openapi({ description: 'Number of synthetic samples to generate', example: 10 }),
    preserve_fields: z
      .array(
        z
          .string()
          .openapi({
            description: 'Fields to preserve patterns from original data',
            example: '["input","expected_output"]',
          }),
      )
      .exactOptional()
      .openapi({
        description: 'Fields to preserve patterns from original data',
        example: ['input', 'expected_output'],
      }),
    variation_instructions: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Additional instructions for data variation',
        example: 'Create variations that test edge cases',
      }),
    custom_prompt: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Custom prompt to use for generation instead of auto-generated one',
      }),
    max_completion_tokens: z
      .int32()
      .min(100)
      .exactOptional()
      .openapi({
        description:
          'Maximum number of tokens for the LLM response. Required by Anthropic, used as maxOutputTokens for Gemini. If not provided, defaults to 4000 for Anthropic models only.',
      }),
  })
  .openapi({ required: ['model'] })
  .openapi('DatasetExpansionWrite')

const AssertionResultCompareSchema = z
  .object({
    value: z.string().exactOptional(),
    passed: z.boolean().exactOptional(),
    reason: z.string().exactOptional(),
  })
  .openapi({ readOnly: true, required: [] })
  .openapi('AssertionResultCompare')

const ColumnCompareSchema = z
  .object({
    name: z.string().exactOptional(),
    types: z
      .array(z.enum(['string', 'number', 'object', 'boolean', 'array', 'null']))
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    filter_field_prefix: z.string().exactOptional(),
    filterField: z
      .string()
      .exactOptional()
      .openapi({ description: 'The field to use for filtering', readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('ColumnCompare')

const CommentCompareSchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ readOnly: true }),
    text: z.string().min(1),
    source_queue_id: z.uuid().exactOptional(),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    created_by: z.string().exactOptional().openapi({ readOnly: true }),
    last_updated_by: z.string().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: ['text'], readOnly: true })
  .openapi('CommentCompare')

const JsonNodeCompareSchema = z.object({}).openapi('JsonNodeCompare')

const EvaluatorItemCompareSchema = z
  .object({
    name: z.string().min(1),
    type: z.enum(['llm_judge', 'code_metric']),
    config: JsonNodeCompareSchema,
  })
  .openapi({ required: ['config', 'name', 'type'] })
  .openapi('EvaluatorItemCompare')

const ExecutionPolicyCompareSchema = z
  .object({
    runs_per_item: z.int32().min(1).max(100).exactOptional(),
    pass_threshold: z.int32().min(1).max(100).exactOptional(),
  })
  .openapi({ readOnly: true, required: [] })
  .openapi('ExecutionPolicyCompare')

const JsonListStringCompareSchema = z
  .union([z.object({}), z.array(z.object({})), z.string()])
  .openapi({ readOnly: true })
  .openapi('JsonListStringCompare')

const ValueEntryCompareSchema = z
  .object({
    value: z.number().exactOptional(),
    reason: z.string().exactOptional(),
    category_name: z.string().exactOptional(),
    source: z.enum(['ui', 'sdk', 'online_scoring']).exactOptional(),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional(),
    span_type: z.string().exactOptional(),
    span_id: z.string().exactOptional(),
    source_queue_id: z.string().exactOptional(),
    author: z.string().exactOptional(),
  })
  .openapi({ readOnly: true, required: [] })
  .openapi('ValueEntryCompare')

const FeedbackScoreCompareSchema = z
  .object({
    name: z.string().min(1),
    category_name: z.string().exactOptional(),
    value: z.number().min(-1000000000).max(1000000000),
    reason: z.string().exactOptional(),
    source: z.enum(['ui', 'sdk', 'online_scoring']),
    source_queue_id: z.uuid().exactOptional(),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    created_by: z.string().exactOptional().openapi({ readOnly: true }),
    last_updated_by: z.string().exactOptional().openapi({ readOnly: true }),
    value_by_author: z
      .record(z.string(), ValueEntryCompareSchema)
      .exactOptional()
      .openapi({ readOnly: true }),
  })
  .openapi({ required: ['name', 'source', 'value'], readOnly: true })
  .openapi('FeedbackScoreCompare')

const ExperimentItemCompareSchema = z
  .object({
    id: z.uuid().exactOptional(),
    experiment_id: z.uuid(),
    dataset_item_id: z.uuid(),
    trace_id: z.uuid(),
    project_id: z.uuid().exactOptional().openapi({ readOnly: true }),
    input: JsonListStringCompareSchema.exactOptional(),
    output: JsonListStringCompareSchema.exactOptional(),
    trace_metadata: JsonListStringCompareSchema.exactOptional(),
    feedback_scores: z
      .array(FeedbackScoreCompareSchema)
      .exactOptional()
      .openapi({ readOnly: true }),
    comments: z.array(CommentCompareSchema).exactOptional().openapi({ readOnly: true }),
    total_estimated_cost: z.number().exactOptional().openapi({ readOnly: true }),
    duration: z.float64().exactOptional().openapi({ readOnly: true }),
    usage: z
      .record(
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
          .openapi({ type: 'integer', format: 'int64', readOnly: true }),
      )
      .exactOptional()
      .openapi({ readOnly: true }),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    created_by: z.string().exactOptional().openapi({ readOnly: true }),
    last_updated_by: z.string().exactOptional().openapi({ readOnly: true }),
    trace_visibility_mode: z
      .enum(['default', 'hidden'])
      .exactOptional()
      .openapi({ readOnly: true }),
    description: z.string().exactOptional().openapi({ readOnly: true }),
    execution_policy: ExecutionPolicyCompareSchema.exactOptional(),
    assertion_results: z
      .array(AssertionResultCompareSchema)
      .exactOptional()
      .openapi({ readOnly: true }),
    status: z.enum(['passed', 'failed']).exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: ['dataset_item_id', 'experiment_id', 'trace_id'], readOnly: true })
  .openapi('ExperimentItemCompare')

const ExperimentRunSummaryCompareSchema = z
  .object({
    passed_runs: z.int32().exactOptional(),
    total_runs: z.int32().exactOptional(),
    status: z.enum(['passed', 'failed']).exactOptional(),
  })
  .openapi({ readOnly: true, required: [] })
  .openapi('ExperimentRunSummaryCompare')

const DatasetItemCompareSchema = z
  .object({
    id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'Stable item identifier.\nOn write, used as the upsert key.\nIf omitted, a new ID is generated.\nRemains the same across dataset versions\n',
      }),
    dataset_item_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          "Deprecated.\nAlways equals 'id'.\nRetained for backward compatibility and will be removed in a future version\n",
        readOnly: true,
      }),
    trace_id: z.uuid().exactOptional(),
    span_id: z.uuid().exactOptional(),
    source: z.enum(['manual', 'trace', 'span', 'sdk']),
    data: JsonNodeSchema,
    description: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .exactOptional(),
    tags: z
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
    evaluators: z.array(EvaluatorItemCompareSchema).exactOptional(),
    execution_policy: ExecutionPolicyCompareSchema.exactOptional(),
    experiment_items: z
      .array(ExperimentItemCompareSchema)
      .exactOptional()
      .openapi({ readOnly: true }),
    run_summaries_by_experiment: z
      .record(z.string(), ExperimentRunSummaryCompareSchema)
      .exactOptional()
      .openapi({ readOnly: true }),
    dataset_id: z.uuid().exactOptional().openapi({ readOnly: true }),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    created_by: z.string().exactOptional().openapi({ readOnly: true }),
    last_updated_by: z.string().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: ['data', 'source'] })
  .openapi('DatasetItemCompare')

const DatasetItemPageCompareSchema = z
  .object({
    content: z.array(DatasetItemCompareSchema).exactOptional(),
    page: z.int32().exactOptional(),
    size: z.int32().exactOptional(),
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
    columns: z
      .array(ColumnCompareSchema)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    sortableBy: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DatasetItemPageCompare')

const DatasetVersionSummaryPublicSchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ description: 'Unique identifier of the version' }),
    version_hash: z
      .string()
      .exactOptional()
      .openapi({ description: 'Hash of the version content' }),
    version_name: z
      .string()
      .exactOptional()
      .openapi({ description: "Sequential version name formatted as 'v1', 'v2', etc." }),
    change_description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description of changes in this version' }),
    tags: z
      .array(z.string().openapi({ description: 'Tags associated with this version' }))
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({ description: 'Tags associated with this version' }),
  })
  .openapi({ description: 'Summary of the latest dataset version', readOnly: true, required: [] })
  .openapi('DatasetVersionSummaryPublic')

const DatasetPublicSchema = z
  .object({
    id: z.uuid().exactOptional(),
    name: z.string().min(1),
    project_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Project ID. Takes precedence over project_name when both are provided.',
      }),
    type: z.enum(['dataset', 'evaluation_suite']).exactOptional(),
    visibility: z.enum(['private', 'public']).exactOptional(),
    tags: z
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
    description: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .min(0)
      .max(255)
      .exactOptional(),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    created_by: z.string().exactOptional().openapi({ readOnly: true }),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    last_updated_by: z.string().exactOptional().openapi({ readOnly: true }),
    experiment_count: z
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
      .openapi({ type: 'integer', format: 'int64', readOnly: true }),
    dataset_items_count: z
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
      .openapi({ type: 'integer', format: 'int64', readOnly: true }),
    optimization_count: z
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
      .openapi({ type: 'integer', format: 'int64', readOnly: true }),
    most_recent_experiment_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ readOnly: true }),
    last_created_experiment_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ readOnly: true }),
    most_recent_optimization_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ readOnly: true }),
    last_created_optimization_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ readOnly: true }),
    status: z
      .enum(['unknown', 'processing', 'completed', 'failed'])
      .exactOptional()
      .openapi({ readOnly: true }),
    latest_version: DatasetVersionSummaryPublicSchema.exactOptional(),
  })
  .openapi({ required: ['name'] })
  .openapi('DatasetPublic')

const DatasetPagePublicSchema = z
  .object({
    content: z.array(DatasetPublicSchema).exactOptional(),
    page: z.int32().exactOptional(),
    size: z.int32().exactOptional(),
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
    sortableBy: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DatasetPagePublic')

const DatasetIdentifierPublicSchema = z
  .object({ dataset_name: z.string().min(1), project_name: z.string().exactOptional() })
  .openapi({ required: ['dataset_name'] })
  .openapi('DatasetIdentifierPublic')

const ProjectStatItemObjectPublicSchema = z
  .object({
    name: z.string().exactOptional(),
    type: z.enum(['COUNT', 'PERCENTAGE', 'AVG']).exactOptional(),
  })
  .openapi({
    discriminator: {
      propertyName: 'type',
      mapping: {
        PERCENTAGE: '#/components/schemas/PercentageValueStat_Public',
        COUNT: '#/components/schemas/CountValueStat_Public',
        AVG: '#/components/schemas/AvgValueStat_Public',
      },
    },
    required: [],
  })
  .openapi('ProjectStatItemObjectPublic')

const AvgValueStatPublicSchema = ProjectStatItemObjectPublicSchema.and(
  z.object({ value: z.float64().exactOptional() }).openapi({ required: [] }),
).openapi('AvgValueStatPublic')

const CountValueStatPublicSchema = ProjectStatItemObjectPublicSchema.and(
  z
    .object({
      value: z
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
    .openapi({ required: [] }),
).openapi('CountValueStatPublic')

const PercentageValuesPublicSchema = z
  .object({
    p50: z.number().exactOptional(),
    p90: z.number().exactOptional(),
    p99: z.number().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PercentageValuesPublic')

const PercentageValueStatPublicSchema = ProjectStatItemObjectPublicSchema.and(
  z.object({ value: PercentageValuesPublicSchema.exactOptional() }).openapi({ required: [] }),
).openapi('PercentageValueStatPublic')

const ProjectStatsPublicSchema = z
  .object({ stats: z.array(ProjectStatItemObjectPublicSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('ProjectStatsPublic')

const DatasetExportJobPublicSchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ readOnly: true }),
    dataset_id: z.uuid().exactOptional().openapi({ readOnly: true }),
    dataset_name: z.string().exactOptional().openapi({ readOnly: true }),
    status: z
      .enum(['PENDING', 'PROCESSING', 'COMPLETED', 'FAILED'])
      .exactOptional()
      .openapi({ readOnly: true }),
    file_path: z.string().exactOptional().openapi({ readOnly: true }),
    error_message: z.string().exactOptional().openapi({ readOnly: true }),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    expires_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    viewed_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    created_by: z.string().exactOptional().openapi({ readOnly: true }),
    last_updated_by: z.string().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('DatasetExportJobPublic')

const ExperimentItemPublicSchema = z
  .object({
    id: z.uuid().exactOptional(),
    experiment_id: z.uuid(),
    dataset_item_id: z.uuid(),
    trace_id: z.uuid(),
    project_id: z.uuid().exactOptional().openapi({ readOnly: true }),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    created_by: z.string().exactOptional().openapi({ readOnly: true }),
    last_updated_by: z.string().exactOptional().openapi({ readOnly: true }),
    trace_visibility_mode: z
      .enum(['default', 'hidden'])
      .exactOptional()
      .openapi({ readOnly: true }),
  })
  .openapi({ required: ['dataset_item_id', 'experiment_id', 'trace_id'] })
  .openapi('ExperimentItemPublic')

const ExperimentRunSummaryPublicSchema = z
  .object({
    passed_runs: z.int32().exactOptional(),
    total_runs: z.int32().exactOptional(),
    status: z.enum(['passed', 'failed']).exactOptional(),
  })
  .openapi({ readOnly: true, required: [] })
  .openapi('ExperimentRunSummaryPublic')

const DatasetItemPublicSchema = z
  .object({
    id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'Stable item identifier.\nOn write, used as the upsert key.\nIf omitted, a new ID is generated.\nRemains the same across dataset versions\n',
      }),
    dataset_item_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          "Deprecated.\nAlways equals 'id'.\nRetained for backward compatibility and will be removed in a future version\n",
        readOnly: true,
      }),
    trace_id: z.uuid().exactOptional(),
    span_id: z.uuid().exactOptional(),
    source: z.enum(['manual', 'trace', 'span', 'sdk']),
    data: JsonNodeSchema,
    description: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .exactOptional(),
    tags: z
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
    evaluators: z.array(EvaluatorItemPublicSchema).exactOptional(),
    execution_policy: ExecutionPolicyPublicSchema.exactOptional(),
    experiment_items: z
      .array(ExperimentItemPublicSchema)
      .exactOptional()
      .openapi({ readOnly: true }),
    run_summaries_by_experiment: z
      .record(z.string(), ExperimentRunSummaryPublicSchema)
      .exactOptional()
      .openapi({ readOnly: true }),
    dataset_id: z.uuid().exactOptional().openapi({ readOnly: true }),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    created_by: z.string().exactOptional().openapi({ readOnly: true }),
    last_updated_by: z.string().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: ['data', 'source'] })
  .openapi('DatasetItemPublic')

const ColumnPublicSchema = z
  .object({
    name: z.string().exactOptional(),
    types: z
      .array(z.enum(['string', 'number', 'object', 'boolean', 'array', 'null']))
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    filter_field_prefix: z.string().exactOptional(),
    filterField: z
      .string()
      .exactOptional()
      .openapi({ description: 'The field to use for filtering', readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('ColumnPublic')

const DatasetItemPagePublicSchema = z
  .object({
    content: z.array(DatasetItemPublicSchema).exactOptional(),
    page: z.int32().exactOptional(),
    size: z.int32().exactOptional(),
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
    columns: z
      .array(ColumnPublicSchema)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    sortableBy: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DatasetItemPagePublic')

const ColumnSchema = z
  .object({
    name: z.string().exactOptional(),
    types: z
      .array(z.enum(['string', 'number', 'object', 'boolean', 'array', 'null']))
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    filter_field_prefix: z.string().exactOptional(),
    filterField: z
      .string()
      .exactOptional()
      .openapi({ description: 'The field to use for filtering', readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('Column')

const PageColumnsSchema = z
  .object({ columns: z.array(ColumnSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('PageColumns')

const ChunkedOutputJsonNodeSchema = z
  .object({
    type: z
      .object({ typeName: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    closed: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ChunkedOutputJsonNode')

const DatasetItemStreamRequestSchema = z
  .object({
    dataset_name: z.string().min(1),
    last_retrieved_id: z.uuid().exactOptional(),
    steam_limit: z.int32().min(1).max(2000).exactOptional(),
    dataset_version: z.string().exactOptional(),
    project_name: z.string().exactOptional(),
    filters: z.string().exactOptional(),
  })
  .openapi({ required: ['dataset_name'] })
  .openapi('DatasetItemStreamRequest')

const DatasetUpdateSchema = z
  .object({
    name: z.string().min(1),
    description: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .min(0)
      .max(255)
      .exactOptional(),
    visibility: z.enum(['private', 'public']).exactOptional(),
    tags: z
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
  .openapi({ required: ['name'] })
  .openapi('DatasetUpdate')

const DatasetVersionDiffStatsSchema = z
  .object({
    itemsAdded: z.int32().exactOptional(),
    itemsModified: z.int32().exactOptional(),
    itemsDeleted: z.int32().exactOptional(),
    itemsUnchanged: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DatasetVersionDiffStats')

const DatasetVersionDiffSchema = z
  .object({
    from_version: z.string().exactOptional(),
    to_version: z.string().exactOptional(),
    statistics: DatasetVersionDiffStatsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DatasetVersionDiff')

const DatasetVersionTagSchema = z
  .object({ tag: z.string().min(0).max(100) })
  .openapi({ required: ['tag'] })
  .openapi('DatasetVersionTag')

const DatasetVersionPagePublicSchema = z
  .object({
    content: z.array(DatasetVersionPublicSchema).exactOptional(),
    page: z.int32().exactOptional(),
    size: z.int32().exactOptional(),
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
  .openapi({ required: [] })
  .openapi('DatasetVersionPagePublic')

const DatasetVersionRestorePublicSchema = z
  .object({
    version_ref: z.string().min(1).openapi({ description: 'Version hash or tag to restore from' }),
  })
  .openapi({ required: ['version_ref'] })
  .openapi('DatasetVersionRestorePublic')

const DatasetVersionRetrieveRequestPublicSchema = z
  .object({
    version_name: z
      .string()
      .regex(/^v\d+$/)
      .min(1)
      .openapi({ description: "Version name in format 'vN' (e.g., 'v1', 'v373')", example: 'v1' }),
  })
  .openapi({ required: ['version_name'] })
  .openapi('DatasetVersionRetrieveRequestPublic')

const DatasetVersionUpdatePublicSchema = z
  .object({
    change_description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Optional description of changes in this version',
        example: 'Updated baseline version',
      }),
    tags_to_add: z
      .array(
        z
          .string()
          .min(0)
          .max(100)
          .openapi({
            description: 'Optional list of tags to add to this version',
            example: '["production","reviewed"]',
          }),
      )
      .min(0)
      .max(100)
      .exactOptional()
      .openapi({
        description: 'Optional list of tags to add to this version',
        example: ['production', 'reviewed'],
      }),
  })
  .openapi({ required: [] })
  .openapi('DatasetVersionUpdatePublic')

const EnvironmentSchema = z
  .object({
    id: z.uuid().exactOptional(),
    name: z
      .string()
      .regex(/^[A-Za-z0-9_-]+$/)
      .min(0)
      .max(150),
    description: z.string().min(0).max(500).exactOptional(),
    color: z.string().min(0).max(20).exactOptional(),
    position: z.int32().exactOptional(),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    created_by: z.string().exactOptional().openapi({ readOnly: true }),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    last_updated_by: z.string().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: ['name'] })
  .openapi('Environment')

const EnvironmentWriteSchema = z
  .object({
    id: z.uuid().exactOptional(),
    name: z
      .string()
      .regex(/^[A-Za-z0-9_-]+$/)
      .min(0)
      .max(150),
    description: z.string().min(0).max(500).exactOptional(),
    color: z.string().min(0).max(20).exactOptional(),
    position: z.int32().exactOptional(),
  })
  .openapi({ required: ['name'] })
  .openapi('EnvironmentWrite')

const EnvironmentPublicSchema = z
  .object({
    id: z.uuid().exactOptional(),
    name: z
      .string()
      .regex(/^[A-Za-z0-9_-]+$/)
      .min(0)
      .max(150),
    description: z.string().min(0).max(500).exactOptional(),
    color: z.string().min(0).max(20).exactOptional(),
    position: z.int32().exactOptional(),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    created_by: z.string().exactOptional().openapi({ readOnly: true }),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    last_updated_by: z.string().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: ['name'] })
  .openapi('EnvironmentPublic')

const EnvironmentPagePublicSchema = z
  .object({
    page: z.int32().exactOptional(),
    size: z.int32().exactOptional(),
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
    content: z.array(EnvironmentPublicSchema).exactOptional(),
    sortableBy: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EnvironmentPagePublic')

const EnvironmentUpdateSchema = z
  .object({
    name: z
      .string()
      .regex(/^[A-Za-z0-9_-]+$/)
      .min(0)
      .max(150)
      .exactOptional(),
    description: z.string().min(0).max(500).exactOptional(),
    color: z.string().min(0).max(20).exactOptional(),
    position: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('EnvironmentUpdate')

const ExperimentScoreSchema = z
  .object({ name: z.string().min(1), value: z.number() })
  .openapi({ required: ['name', 'value'] })
  .openapi('ExperimentScore')

const ExperimentUpdateSchema = z
  .object({
    name: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .exactOptional(),
    metadata: JsonNodeSchema.exactOptional(),
    tags: z
      .array(z.string().min(0).max(100).openapi({ description: 'Tags' }))
      .min(0)
      .max(50)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({ description: 'Tags' }),
    tags_to_add: z
      .array(z.string().min(0).max(100).openapi({ description: 'Tags to add' }))
      .min(0)
      .max(50)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({ description: 'Tags to add' }),
    tags_to_remove: z
      .array(z.string().min(0).max(100).openapi({ description: 'Tags to remove' }))
      .min(0)
      .max(50)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({ description: 'Tags to remove' }),
    type: z.enum(['regular', 'trial', 'mini-batch', 'mutation']).exactOptional(),
    status: z
      .enum(['running', 'completed', 'cancelled', 'failed'])
      .exactOptional()
      .openapi({ description: 'The status of the experiment' }),
    experiment_scores: z.array(ExperimentScoreSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ExperimentUpdate')

const ExperimentBatchUpdateSchema = z
  .object({
    ids: z
      .array(z.uuid().openapi({ description: 'List of experiment IDs to update (max 1000)' }))
      .min(1)
      .max(1000)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .openapi({ description: 'List of experiment IDs to update (max 1000)' }),
    update: ExperimentUpdateSchema,
    merge_tags: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, merge tags with existing tags instead of replacing them. Default: false',
      }),
  })
  .openapi({
    required: ['ids', 'update'],
    description: 'Request to batch update multiple experiments',
  })
  .openapi('ExperimentBatchUpdate')

const IdsHolderSchema = z
  .object({
    ids: z
      .array(z.uuid())
      .min(1)
      .max(1000)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      }),
  })
  .openapi({ required: ['ids'] })
  .openapi('IdsHolder')

const AssertionScoreAverageSchema = z
  .object({ name: z.string().min(1), value: z.number() })
  .openapi({
    required: ['name', 'value'],
    description:
      'Per-assertion average pass rates for test suite experiments. Null for regular experiments.',
    readOnly: true,
  })
  .openapi('AssertionScoreAverage')

const PercentageValuesSchema = z
  .object({
    p50: z.number().exactOptional(),
    p90: z.number().exactOptional(),
    p99: z.number().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PercentageValues')

const PromptVersionLinkSchema = z
  .object({
    id: z.uuid(),
    commit: z.string().exactOptional().openapi({ readOnly: true }),
    version_number: z
      .string()
      .exactOptional()
      .openapi({
        description: 'sequential version number in the format v<N>; null for masks',
        readOnly: true,
      }),
    prompt_id: z.uuid().exactOptional().openapi({ readOnly: true }),
    prompt_name: z.string().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: ['id'] })
  .openapi('PromptVersionLink')

const ExperimentSchema = z
  .object({
    id: z.uuid().exactOptional(),
    dataset_name: z.string().min(1).nullable(),
    dataset_id: z.uuid().exactOptional().openapi({ readOnly: true }),
    project_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Project ID. Takes precedence over project_name when both are provided.',
      }),
    project_name: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .exactOptional()
      .openapi({
        description:
          "Project name. Creates project if it doesn't exist. Ignored when project_id is provided.",
      }),
    name: z.string().exactOptional(),
    metadata: JsonListStringSchema.exactOptional(),
    tags: z
      .array(z.string().min(0).max(100))
      .min(0)
      .max(50)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    type: z.enum(['regular', 'trial', 'mini-batch', 'mutation']).exactOptional(),
    evaluation_method: z.enum(['dataset', 'evaluation_suite']).exactOptional(),
    optimization_id: z.uuid().exactOptional(),
    feedback_scores: z
      .array(FeedbackScoreAverageSchema)
      .exactOptional()
      .openapi({ readOnly: true }),
    comments: z.array(CommentSchema).exactOptional().openapi({ readOnly: true }),
    trace_count: z
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
      .openapi({ type: 'integer', format: 'int64', readOnly: true }),
    dataset_item_count: z
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
      .openapi({ type: 'integer', format: 'int64', readOnly: true }),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    duration: PercentageValuesSchema.exactOptional(),
    total_estimated_cost: z.number().exactOptional().openapi({ readOnly: true }),
    total_estimated_cost_avg: z.number().exactOptional().openapi({ readOnly: true }),
    usage: z
      .record(z.string(), z.float64().openapi({ readOnly: true }))
      .exactOptional()
      .openapi({ readOnly: true }),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    created_by: z.string().exactOptional().openapi({ readOnly: true }),
    last_updated_by: z.string().exactOptional().openapi({ readOnly: true }),
    status: z.enum(['running', 'completed', 'cancelled', 'failed']).exactOptional(),
    finished_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'When the run stopped producing items. Unset while it may still produce more, whatever its status',
        readOnly: true,
      }),
    experiment_scores: z.array(ExperimentScoreSchema).exactOptional(),
    prompt_version: PromptVersionLinkSchema.exactOptional(),
    prompt_versions: z.array(PromptVersionLinkSchema).exactOptional(),
    dataset_version_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'ID of the dataset version this experiment is linked to. If not provided at creation, experiment will be automatically linked to the latest version.',
      }),
    dataset_version_summary: DatasetVersionSummarySchema.exactOptional(),
    pass_rate: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Pass rate for test suite experiments (0.0-1.0). Null for regular experiments.',
        readOnly: true,
      }),
    passed_count: z
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
          'Number of items that passed for test suite experiments. Null for regular experiments.',
        readOnly: true,
      }),
    total_count: z
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
          'Total number of items for test suite experiments. Null for regular experiments.',
        readOnly: true,
      }),
    assertion_scores: z
      .array(AssertionScoreAverageSchema)
      .exactOptional()
      .openapi({
        description:
          'Per-assertion average pass rates for test suite experiments. Null for regular experiments.',
        readOnly: true,
      }),
  })
  .openapi({ required: ['dataset_name'] })
  .openapi('Experiment')

const ExperimentScoreWriteSchema = z
  .object({ name: z.string().min(1), value: z.number() })
  .openapi({ required: ['name', 'value'] })
  .openapi('ExperimentScoreWrite')

const JsonListStringWriteSchema = z
  .union([z.object({}), z.array(z.object({})), z.string()])
  .openapi('JsonListStringWrite')

const PromptVersionLinkWriteSchema = z
  .object({ id: z.uuid() })
  .openapi({ required: ['id'] })
  .openapi('PromptVersionLinkWrite')

const ExperimentWriteSchema = z
  .object({
    id: z.uuid().exactOptional(),
    dataset_name: z.string().min(1).nullable(),
    project_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Project ID. Takes precedence over project_name when both are provided.',
      }),
    project_name: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .exactOptional()
      .openapi({
        description:
          "Project name. Creates project if it doesn't exist. Ignored when project_id is provided.",
      }),
    name: z.string().exactOptional(),
    metadata: JsonListStringWriteSchema.exactOptional(),
    tags: z
      .array(z.string().min(0).max(100))
      .min(0)
      .max(50)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    type: z.enum(['regular', 'trial', 'mini-batch', 'mutation']).exactOptional(),
    evaluation_method: z.enum(['dataset', 'evaluation_suite']).exactOptional(),
    optimization_id: z.uuid().exactOptional(),
    status: z.enum(['running', 'completed', 'cancelled', 'failed']).exactOptional(),
    experiment_scores: z.array(ExperimentScoreWriteSchema).exactOptional(),
    prompt_version: PromptVersionLinkWriteSchema.exactOptional(),
    prompt_versions: z.array(PromptVersionLinkWriteSchema).exactOptional(),
    dataset_version_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'ID of the dataset version this experiment is linked to. If not provided at creation, experiment will be automatically linked to the latest version.',
      }),
  })
  .openapi({ required: ['dataset_name'] })
  .openapi('ExperimentWrite')

const ExperimentItemsBatchSchema = z
  .object({
    experiment_items: z
      .array(ExperimentItemSchema)
      .min(1)
      .max(1000)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      }),
  })
  .openapi({ required: ['experiment_items'] })
  .openapi('ExperimentItemsBatch')

const ExperimentItemsDeleteSchema = z
  .object({
    ids: z
      .array(z.uuid())
      .min(1)
      .max(1000)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      }),
  })
  .openapi({ required: ['ids'] })
  .openapi('ExperimentItemsDelete')

const DeleteIdsHolderSchema = z
  .object({
    ids: z
      .array(z.uuid())
      .min(1)
      .max(1000)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      }),
  })
  .openapi({ required: ['ids'] })
  .openapi('DeleteIdsHolder')

const ExperimentInfoSchema = z
  .object({
    experiment_id: z.uuid().exactOptional(),
    prompt_index: z.int32().exactOptional(),
    total_items: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ExperimentInfo')

const ExperimentExecutionResponseSchema = z
  .object({
    experiments: z.array(ExperimentInfoSchema).exactOptional(),
    total_items: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ExperimentExecutionResponse')

const PromptVariantSchema = z
  .object({
    model: z.string().min(1),
    messages: z.array(MessageSchema).min(1),
    configs: z.record(z.string(), JsonNodeSchema).exactOptional(),
    prompt_versions: z.array(PromptVersionLinkSchema).exactOptional(),
    experiment_name: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .exactOptional(),
  })
  .openapi({ required: ['messages', 'model'] })
  .openapi('PromptVariant')

const ExperimentExecutionRequestSchema = z
  .object({
    dataset_name: z.string().min(1),
    dataset_version_id: z.uuid().exactOptional(),
    prompts: z.array(PromptVariantSchema).min(1),
    project_name: z.string().exactOptional(),
    project_id: z.uuid().exactOptional(),
    dataset_id: z.uuid(),
    version_hash: z.string().exactOptional(),
    prompt_versions: z.array(PromptVersionLinkSchema).exactOptional(),
    selected_rule_ids: z.array(z.uuid()).exactOptional(),
    filters: z.string().exactOptional(),
  })
  .openapi({ required: ['dataset_id', 'dataset_name', 'prompts'] })
  .openapi('ExperimentExecutionRequest')

const AnnotationQueueReferenceSchema = z
  .object({
    id: z.uuid().openapi({ description: 'Annotation queue ID' }),
    name: z.string().openapi({ description: 'Annotation queue name' }),
  })
  .openapi({
    required: ['id', 'name'],
    description: 'Annotation queue reference with ID and name',
    readOnly: true,
  })
  .openapi('AnnotationQueueReference')

const CheckSchema = z
  .object({
    name: z
      .enum(['TOPIC', 'PII', 'LLM_JUDGE', 'PROMPT_INJECTION', 'CUSTOM_CLASSIFIER'])
      .exactOptional(),
    result: z.enum(['passed', 'failed']).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Check')

const ErrorInfoSchema = z
  .object({
    exception_type: z.string().min(1),
    message: z.string().exactOptional(),
    traceback: z.string().min(1),
  })
  .openapi({ required: ['exception_type', 'traceback'] })
  .openapi('ErrorInfo')

const GuardrailsValidationSchema = z
  .object({ span_id: z.uuid().exactOptional(), checks: z.array(CheckSchema).exactOptional() })
  .openapi({ readOnly: true, required: [] })
  .openapi('GuardrailsValidation')

const ExperimentItemReferenceSchema = z
  .object({
    id: z.uuid().openapi({ description: 'Experiment ID' }),
    name: z.string().openapi({ description: 'Experiment name' }),
    dataset_id: z.uuid().openapi({ description: 'Dataset ID' }),
    dataset_item_id: z.uuid().openapi({ description: 'Dataset Item ID' }),
  })
  .openapi({
    required: ['dataset_id', 'dataset_item_id', 'id', 'name'],
    description: 'Experiment reference with ID, name, dataset ID, and dataset item ID',
    readOnly: true,
  })
  .openapi('ExperimentItemReference')

const TraceSchema = z
  .object({
    id: z.uuid().exactOptional(),
    project_name: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .exactOptional()
      .openapi({ description: 'If null, the default project is used' }),
    project_id: z.uuid().exactOptional().openapi({ readOnly: true }),
    name: z.string().exactOptional(),
    start_time: z.iso.datetime({ offset: true }),
    end_time: z.iso.datetime({ offset: true }).exactOptional(),
    input: JsonListStringSchema.exactOptional(),
    output: JsonListStringSchema.exactOptional(),
    metadata: JsonListStringSchema.exactOptional(),
    tags: z
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
    error_info: ErrorInfoSchema.exactOptional(),
    usage: z
      .record(
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
          .openapi({ type: 'integer', format: 'int64', readOnly: true }),
      )
      .exactOptional()
      .openapi({ readOnly: true }),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional(),
    created_by: z.string().exactOptional().openapi({ readOnly: true }),
    last_updated_by: z.string().exactOptional().openapi({ readOnly: true }),
    feedback_scores: z.array(FeedbackScoreSchema).exactOptional().openapi({ readOnly: true }),
    span_feedback_scores: z
      .array(FeedbackScoreSchema)
      .exactOptional()
      .openapi({
        description:
          'Aggregated feedback scores from all spans in this trace, averaged by score name',
        readOnly: true,
      }),
    comments: z.array(CommentSchema).exactOptional().openapi({ readOnly: true }),
    guardrails_validations: z
      .array(GuardrailsValidationSchema)
      .exactOptional()
      .openapi({ readOnly: true }),
    total_estimated_cost: z.number().exactOptional().openapi({ readOnly: true }),
    span_count: z.int32().exactOptional().openapi({ readOnly: true }),
    duration: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Duration in milliseconds as a decimal number to support sub-millisecond precision',
        readOnly: true,
      }),
    ttft: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Time to first token in milliseconds' }),
    thread_id: z.string().exactOptional(),
    visibility_mode: z.enum(['default', 'hidden']).exactOptional().openapi({ readOnly: true }),
    llm_span_count: z.int32().exactOptional().openapi({ readOnly: true }),
    has_tool_spans: z.boolean().exactOptional().openapi({ readOnly: true }),
    providers: z
      .array(
        z
          .string()
          .openapi({
            description:
              'List of unique provider names from all spans in this trace, sorted alphabetically',
            readOnly: true,
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'List of unique provider names from all spans in this trace, sorted alphabetically',
        readOnly: true,
      }),
    experiment: ExperimentItemReferenceSchema.exactOptional(),
    annotation_queues: z
      .array(AnnotationQueueReferenceSchema)
      .exactOptional()
      .openapi({
        description: 'Annotation queues this trace is currently an item of',
        readOnly: true,
      }),
    source: z
      .enum(['sdk', 'experiment', 'playground', 'optimization', 'evaluator'])
      .exactOptional(),
    environment: z.string().min(0).max(150).exactOptional(),
  })
  .openapi({ required: ['start_time'] })
  .openapi('Trace')

const SpanSchema = z
  .object({
    id: z.uuid().exactOptional(),
    project_name: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .exactOptional()
      .openapi({ description: 'If null, the default project is used' }),
    project_id: z.uuid().exactOptional().openapi({ readOnly: true }),
    trace_id: z.uuid().exactOptional(),
    parent_span_id: z.uuid().exactOptional(),
    name: z.string().exactOptional(),
    type: z.enum(['general', 'tool', 'llm', 'guardrail']).exactOptional(),
    start_time: z.iso.datetime({ offset: true }),
    end_time: z.iso.datetime({ offset: true }).exactOptional(),
    input: JsonListStringSchema.exactOptional(),
    output: JsonListStringSchema.exactOptional(),
    metadata: JsonListStringSchema.exactOptional(),
    model: z.string().exactOptional(),
    provider: z.string().exactOptional(),
    tags: z
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
    usage: z.record(z.string(), z.int32()).exactOptional(),
    error_info: ErrorInfoSchema.exactOptional(),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional(),
    created_by: z.string().exactOptional().openapi({ readOnly: true }),
    last_updated_by: z.string().exactOptional().openapi({ readOnly: true }),
    feedback_scores: z.array(FeedbackScoreSchema).exactOptional().openapi({ readOnly: true }),
    comments: z.array(CommentSchema).exactOptional().openapi({ readOnly: true }),
    total_estimated_cost: z.number().nonnegative().exactOptional(),
    total_estimated_cost_version: z.string().exactOptional(),
    duration: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Duration in milliseconds as a decimal number to support sub-millisecond precision',
        readOnly: true,
      }),
    ttft: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Time to first token in milliseconds' }),
    source: z
      .enum(['sdk', 'experiment', 'playground', 'optimization', 'evaluator'])
      .exactOptional(),
    environment: z.string().min(0).max(150).exactOptional(),
  })
  .openapi({ required: ['start_time'] })
  .openapi('Span')

const ExperimentItemBulkRecordSchema = z
  .object({
    dataset_item_id: z.uuid(),
    evaluate_task_result: JsonListStringSchema.exactOptional(),
    trace: TraceSchema.exactOptional(),
    spans: z.array(SpanSchema).min(0).max(100).exactOptional(),
    feedback_scores: z.array(FeedbackScoreSchema).min(0).max(100).exactOptional(),
  })
  .openapi({ required: ['dataset_item_id'] })
  .openapi('ExperimentItemBulkRecord')

const ExperimentItemBulkUploadSchema = z
  .object({
    experiment_name: z.string().min(1),
    dataset_name: z.string().min(1),
    experiment_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          "Optional experiment ID. If provided, items will be added to the existing experiment and experimentName will be ignored. If not provided or experiment with that ID doesn't exist, a new experiment will be created with the given experimentName",
      }),
    project_name: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .exactOptional()
      .openapi({
        description:
          'Project for traces auto-created from items that provide evaluate_task_result (i.e. without an explicit trace). If null, the default project is used; relying on this fallback is deprecated, please provide project_name explicitly.',
      }),
    items: z.array(ExperimentItemBulkRecordSchema).min(1).max(1000),
  })
  .openapi({ required: ['dataset_name', 'experiment_name', 'items'] })
  .openapi('ExperimentItemBulkUpload')

const ErrorInfoExperimentItemBulkWriteViewSchema = z
  .object({
    exception_type: z.string().min(1),
    message: z.string().exactOptional(),
    traceback: z.string().min(1),
  })
  .openapi({ required: ['exception_type', 'traceback'] })
  .openapi('ErrorInfoExperimentItemBulkWriteView')

const JsonListStringExperimentItemBulkWriteViewSchema = z
  .union([z.object({}), z.array(z.object({})), z.string()])
  .openapi('JsonListStringExperimentItemBulkWriteView')

const TraceExperimentItemBulkWriteViewSchema = z
  .object({
    id: z.uuid().exactOptional(),
    project_name: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .exactOptional()
      .openapi({ description: 'If null, the default project is used' }),
    name: z.string().exactOptional(),
    start_time: z.iso.datetime({ offset: true }),
    end_time: z.iso.datetime({ offset: true }).exactOptional(),
    input: JsonListStringExperimentItemBulkWriteViewSchema.exactOptional(),
    output: JsonListStringExperimentItemBulkWriteViewSchema.exactOptional(),
    metadata: JsonListStringExperimentItemBulkWriteViewSchema.exactOptional(),
    tags: z
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
    error_info: ErrorInfoExperimentItemBulkWriteViewSchema.exactOptional(),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional(),
    ttft: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Time to first token in milliseconds' }),
    thread_id: z.string().exactOptional(),
    source: z
      .enum(['sdk', 'experiment', 'playground', 'optimization', 'evaluator'])
      .exactOptional(),
    environment: z.string().min(0).max(150).exactOptional(),
  })
  .openapi({
    required: ['start_time'],
    description:
      'Please provide either none, only one of evaluate_task_result or trace, but never both',
  })
  .openapi('TraceExperimentItemBulkWriteView')

const SpanExperimentItemBulkWriteViewSchema = z
  .object({
    id: z.uuid().exactOptional(),
    parent_span_id: z.uuid().exactOptional(),
    name: z.string().exactOptional(),
    type: z.enum(['general', 'tool', 'llm', 'guardrail']).exactOptional(),
    start_time: z.iso.datetime({ offset: true }),
    end_time: z.iso.datetime({ offset: true }).exactOptional(),
    input: JsonListStringExperimentItemBulkWriteViewSchema.exactOptional(),
    output: JsonListStringExperimentItemBulkWriteViewSchema.exactOptional(),
    metadata: JsonListStringExperimentItemBulkWriteViewSchema.exactOptional(),
    model: z.string().exactOptional(),
    provider: z.string().exactOptional(),
    tags: z
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
    usage: z.record(z.string(), z.int32()).exactOptional(),
    error_info: ErrorInfoExperimentItemBulkWriteViewSchema.exactOptional(),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional(),
    total_estimated_cost: z.number().nonnegative().exactOptional(),
    total_estimated_cost_version: z.string().exactOptional(),
    ttft: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Time to first token in milliseconds' }),
    source: z
      .enum(['sdk', 'experiment', 'playground', 'optimization', 'evaluator'])
      .exactOptional(),
    environment: z.string().min(0).max(150).exactOptional(),
  })
  .openapi({ required: ['start_time'] })
  .openapi('SpanExperimentItemBulkWriteView')

const ValueEntryExperimentItemBulkWriteViewSchema = z
  .object({
    value: z.number().exactOptional(),
    reason: z.string().exactOptional(),
    category_name: z.string().exactOptional(),
    source: z.enum(['ui', 'sdk', 'online_scoring']).exactOptional(),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional(),
    span_type: z.string().exactOptional(),
    span_id: z.string().exactOptional(),
    source_queue_id: z.string().exactOptional(),
    author: z.string().exactOptional(),
  })
  .openapi({ readOnly: true, required: [] })
  .openapi('ValueEntryExperimentItemBulkWriteView')

const FeedbackScoreExperimentItemBulkWriteViewSchema = z
  .object({
    name: z.string().min(1),
    category_name: z.string().exactOptional(),
    value: z.number().min(-1000000000).max(1000000000),
    reason: z.string().exactOptional(),
    source: z.enum(['ui', 'sdk', 'online_scoring']),
    source_queue_id: z.uuid().exactOptional(),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    created_by: z.string().exactOptional().openapi({ readOnly: true }),
    last_updated_by: z.string().exactOptional().openapi({ readOnly: true }),
    value_by_author: z
      .record(z.string(), ValueEntryExperimentItemBulkWriteViewSchema)
      .exactOptional()
      .openapi({ readOnly: true }),
  })
  .openapi({ required: ['name', 'source', 'value'] })
  .openapi('FeedbackScoreExperimentItemBulkWriteView')

const ExperimentItemBulkRecordExperimentItemBulkWriteViewSchema = z
  .object({
    dataset_item_id: z.uuid(),
    evaluate_task_result: JsonListStringExperimentItemBulkWriteViewSchema.exactOptional(),
    trace: TraceExperimentItemBulkWriteViewSchema.exactOptional(),
    spans: z.array(SpanExperimentItemBulkWriteViewSchema).min(0).max(100).exactOptional(),
    feedback_scores: z
      .array(FeedbackScoreExperimentItemBulkWriteViewSchema)
      .min(0)
      .max(100)
      .exactOptional(),
  })
  .openapi({ required: ['dataset_item_id'] })
  .openapi('ExperimentItemBulkRecordExperimentItemBulkWriteView')

const ExperimentItemBulkUploadExperimentItemBulkWriteViewSchema = z
  .object({
    experiment_name: z.string().min(1),
    dataset_name: z.string().min(1),
    experiment_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          "Optional experiment ID. If provided, items will be added to the existing experiment and experimentName will be ignored. If not provided or experiment with that ID doesn't exist, a new experiment will be created with the given experimentName",
      }),
    project_name: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .exactOptional()
      .openapi({
        description:
          'Project for traces auto-created from items that provide evaluate_task_result (i.e. without an explicit trace). If null, the default project is used; relying on this fallback is deprecated, please provide project_name explicitly.',
      }),
    items: z.array(ExperimentItemBulkRecordExperimentItemBulkWriteViewSchema).min(1).max(1000),
  })
  .openapi({ required: ['dataset_name', 'experiment_name', 'items'] })
  .openapi('ExperimentItemBulkUploadExperimentItemBulkWriteView')

const AssertionScoreAveragePublicSchema = z
  .object({ name: z.string().min(1), value: z.number() })
  .openapi({
    required: ['name', 'value'],
    description:
      'Per-assertion average pass rates for test suite experiments. Null for regular experiments.',
    readOnly: true,
  })
  .openapi('AssertionScoreAveragePublic')

const CommentPublicSchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ readOnly: true }),
    text: z.string().min(1),
    source_queue_id: z.uuid().exactOptional(),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    created_by: z.string().exactOptional().openapi({ readOnly: true }),
    last_updated_by: z.string().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: ['text'], readOnly: true })
  .openapi('CommentPublic')

const JsonListStringPublicSchema = z
  .union([z.object({}), z.array(z.object({})), z.string()])
  .openapi('JsonListStringPublic')

const ExperimentScorePublicSchema = z
  .object({ name: z.string().min(1), value: z.number() })
  .openapi({ required: ['name', 'value'] })
  .openapi('ExperimentScorePublic')

const PromptVersionLinkPublicSchema = z
  .object({
    prompt_version_id: z.uuid().exactOptional(),
    commit: z.string().exactOptional(),
    prompt_id: z.uuid().exactOptional(),
    prompt_name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PromptVersionLinkPublic')

const ExperimentPublicSchema = z
  .object({
    id: z.uuid().exactOptional(),
    dataset_name: z.string().min(1).nullable(),
    dataset_id: z.uuid().exactOptional().openapi({ readOnly: true }),
    project_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Project ID. Takes precedence over project_name when both are provided.',
      }),
    project_name: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .exactOptional()
      .openapi({
        description:
          "Project name. Creates project if it doesn't exist. Ignored when project_id is provided.",
      }),
    name: z.string().exactOptional(),
    metadata: JsonListStringPublicSchema.exactOptional(),
    tags: z
      .array(z.string().min(0).max(100))
      .min(0)
      .max(50)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    type: z.enum(['regular', 'trial', 'mini-batch', 'mutation']).exactOptional(),
    evaluation_method: z.enum(['dataset', 'evaluation_suite']).exactOptional(),
    optimization_id: z.uuid().exactOptional(),
    feedback_scores: z
      .array(FeedbackScoreAveragePublicSchema)
      .exactOptional()
      .openapi({ readOnly: true }),
    comments: z.array(CommentPublicSchema).exactOptional().openapi({ readOnly: true }),
    trace_count: z
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
      .openapi({ type: 'integer', format: 'int64', readOnly: true }),
    dataset_item_count: z
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
      .openapi({ type: 'integer', format: 'int64', readOnly: true }),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    duration: PercentageValuesPublicSchema.exactOptional(),
    total_estimated_cost: z.number().exactOptional().openapi({ readOnly: true }),
    total_estimated_cost_avg: z.number().exactOptional().openapi({ readOnly: true }),
    usage: z
      .record(z.string(), z.float64().openapi({ readOnly: true }))
      .exactOptional()
      .openapi({ readOnly: true }),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    created_by: z.string().exactOptional().openapi({ readOnly: true }),
    last_updated_by: z.string().exactOptional().openapi({ readOnly: true }),
    status: z.enum(['running', 'completed', 'cancelled', 'failed']).exactOptional(),
    finished_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'When the run stopped producing items. Unset while it may still produce more, whatever its status',
        readOnly: true,
      }),
    experiment_scores: z.array(ExperimentScorePublicSchema).exactOptional(),
    prompt_version: PromptVersionLinkPublicSchema.exactOptional(),
    prompt_versions: z.array(PromptVersionLinkPublicSchema).exactOptional(),
    dataset_version_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'ID of the dataset version this experiment is linked to. If not provided at creation, experiment will be automatically linked to the latest version.',
      }),
    dataset_version_summary: DatasetVersionSummaryPublicSchema.exactOptional(),
    pass_rate: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Pass rate for test suite experiments (0.0-1.0). Null for regular experiments.',
        readOnly: true,
      }),
    passed_count: z
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
          'Number of items that passed for test suite experiments. Null for regular experiments.',
        readOnly: true,
      }),
    total_count: z
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
          'Total number of items for test suite experiments. Null for regular experiments.',
        readOnly: true,
      }),
    assertion_scores: z
      .array(AssertionScoreAveragePublicSchema)
      .exactOptional()
      .openapi({
        description:
          'Per-assertion average pass rates for test suite experiments. Null for regular experiments.',
        readOnly: true,
      }),
  })
  .openapi({ required: ['dataset_name'] })
  .openapi('ExperimentPublic')

const ExperimentPagePublicSchema = z
  .object({
    page: z.int32().exactOptional(),
    size: z.int32().exactOptional(),
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
    content: z.array(ExperimentPublicSchema).exactOptional(),
    sortableBy: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ExperimentPagePublic')

const ScoreNamePublicSchema = z
  .object({ name: z.string().exactOptional(), type: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('ScoreNamePublic')

const FeedbackScoreNamesPublicSchema = z
  .object({ scores: z.array(ScoreNamePublicSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('FeedbackScoreNamesPublic')

const GroupContentSchema = z
  .object({ label: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('GroupContent')

const GroupDetailSchema = z
  .object({ group_sorting: z.array(z.string()).exactOptional() })
  .openapi({ required: [] })
  .openapi('GroupDetail')

const GroupDetailsSchema = z
  .object({ groups_details: z.array(GroupDetailSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('GroupDetails')

const ExperimentGroupResponseSchema = z
  .object({
    content: z.record(z.string(), GroupContentSchema).exactOptional(),
    details: GroupDetailsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ExperimentGroupResponse')

const AggregationDataSchema = z
  .object({
    experiment_count: z
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
    trace_count: z
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
    total_estimated_cost: z.number().exactOptional(),
    total_estimated_cost_avg: z.number().exactOptional(),
    duration: PercentageValuesSchema.exactOptional(),
    feedback_scores: z.array(FeedbackScoreAverageSchema).exactOptional(),
    experiment_scores: z.array(FeedbackScoreAverageSchema).exactOptional(),
    pass_rate_avg: z.number().exactOptional(),
    passed_count_sum: z
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
    total_count_sum: z
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
  .openapi('AggregationData')

const GroupContentWithAggregationsSchema = z
  .object({
    label: z.string().exactOptional(),
    aggregations: AggregationDataSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GroupContentWithAggregations')

const ExperimentGroupAggregationsResponseSchema = z
  .object({ content: z.record(z.string(), GroupContentWithAggregationsSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('ExperimentGroupAggregationsResponse')

const ExperimentItemStreamRequestSchema = z
  .object({
    experiment_name: z.string().min(1),
    limit: z.int32().min(1).max(2000).exactOptional(),
    last_retrieved_id: z.uuid().exactOptional(),
    truncate: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'Truncate image included in either input, output or metadata' }),
    project_name: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .exactOptional(),
  })
  .openapi({ required: ['experiment_name'] })
  .openapi('ExperimentItemStreamRequest')

const ChunkedOutputJsonNodePublicSchema = z
  .object({
    type: z
      .object({ typeName: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    closed: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ChunkedOutputJsonNodePublic')

const ExperimentStreamRequestPublicSchema = z
  .object({
    name: z.string().min(1),
    limit: z.int32().min(1).max(2000).exactOptional(),
    last_retrieved_id: z.uuid().exactOptional(),
    project_name: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .exactOptional(),
  })
  .openapi({ required: ['name'] })
  .openapi('ExperimentStreamRequestPublic')

const FeedbackSchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ readOnly: true }),
    name: z.string().min(1),
    description: z
      .string()
      .min(0)
      .max(255)
      .exactOptional()
      .openapi({
        description: 'Optional description for the feedback definition',
        example: 'This feedback definition is used to rate response quality',
      }),
    createdAt: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    createdBy: z.string().exactOptional().openapi({ readOnly: true }),
    lastUpdatedAt: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    lastUpdatedBy: z.string().exactOptional().openapi({ readOnly: true }),
    type: z.enum(['numerical', 'categorical', 'boolean']),
  })
  .openapi({
    required: ['name', 'type'],
    discriminator: {
      propertyName: 'type',
      mapping: {
        numerical: '#/components/schemas/NumericalFeedbackDefinition',
        categorical: '#/components/schemas/CategoricalFeedbackDefinition',
        boolean: '#/components/schemas/BooleanFeedbackDefinition',
      },
    },
  })
  .openapi('Feedback')

const BooleanFeedbackDetailSchema = z
  .object({
    trueLabel: z
      .string()
      .min(1)
      .openapi({ description: 'Label for true/1 value', example: 'Pass' }),
    falseLabel: z
      .string()
      .min(1)
      .openapi({ description: 'Label for false/0 value', example: 'Fail' }),
  })
  .openapi({ required: ['falseLabel', 'trueLabel'] })
  .openapi('BooleanFeedbackDetail')

const BooleanFeedbackDefinitionSchema = FeedbackSchema.and(
  z
    .object({
      details: BooleanFeedbackDetailSchema.exactOptional(),
      created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
      created_by: z.string().exactOptional().openapi({ readOnly: true }),
      last_updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
      last_updated_by: z.string().exactOptional().openapi({ readOnly: true }),
    })
    .openapi({ required: [] }),
)
  .openapi({ required: ['details', 'name', 'type'] })
  .openapi('BooleanFeedbackDefinition')

const CategoricalFeedbackDetailSchema = z
  .object({ categories: z.record(z.string(), z.float64()) })
  .openapi({ required: ['categories'] })
  .openapi('CategoricalFeedbackDetail')

const CategoricalFeedbackDefinitionSchema = FeedbackSchema.and(
  z
    .object({
      details: CategoricalFeedbackDetailSchema.exactOptional(),
      created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
      created_by: z.string().exactOptional().openapi({ readOnly: true }),
      last_updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
      last_updated_by: z.string().exactOptional().openapi({ readOnly: true }),
    })
    .openapi({ required: [] }),
)
  .openapi({ required: ['details', 'name', 'type'] })
  .openapi('CategoricalFeedbackDefinition')

const NumericalFeedbackDetailSchema = z
  .object({ max: z.number(), min: z.number() })
  .openapi({ required: ['max', 'min'] })
  .openapi('NumericalFeedbackDetail')

const NumericalFeedbackDefinitionSchema = FeedbackSchema.and(
  z
    .object({
      details: NumericalFeedbackDetailSchema.exactOptional(),
      created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
      created_by: z.string().exactOptional().openapi({ readOnly: true }),
      last_updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
      last_updated_by: z.string().exactOptional().openapi({ readOnly: true }),
    })
    .openapi({ required: [] }),
)
  .openapi({ required: ['details', 'name', 'type'] })
  .openapi('NumericalFeedbackDefinition')

const FeedbackCreateSchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ readOnly: true }),
    name: z.string().min(1),
    description: z
      .string()
      .min(0)
      .max(255)
      .exactOptional()
      .openapi({
        description: 'Optional description for the feedback definition',
        example: 'This feedback definition is used to rate response quality',
      }),
    type: z.enum(['numerical', 'categorical', 'boolean']),
  })
  .openapi({
    required: ['name', 'type'],
    discriminator: {
      propertyName: 'type',
      mapping: {
        numerical: '#/components/schemas/NumericalFeedbackDefinition_Create',
        categorical: '#/components/schemas/CategoricalFeedbackDefinition_Create',
        boolean: '#/components/schemas/BooleanFeedbackDefinition_Create',
      },
    },
  })
  .openapi('FeedbackCreate')

const BooleanFeedbackDetailCreateSchema = z
  .object({
    trueLabel: z
      .string()
      .min(1)
      .openapi({ description: 'Label for true/1 value', example: 'Pass' }),
    falseLabel: z
      .string()
      .min(1)
      .openapi({ description: 'Label for false/0 value', example: 'Fail' }),
  })
  .openapi({ required: ['falseLabel', 'trueLabel'] })
  .openapi('BooleanFeedbackDetailCreate')

const BooleanFeedbackDefinitionCreateSchema = FeedbackCreateSchema.and(
  z
    .object({ details: BooleanFeedbackDetailCreateSchema.exactOptional() })
    .openapi({ required: [] }),
)
  .openapi({ required: ['details', 'name', 'type'] })
  .openapi('BooleanFeedbackDefinitionCreate')

const CategoricalFeedbackDetailCreateSchema = z
  .object({ categories: z.record(z.string(), z.float64()) })
  .openapi({ required: ['categories'] })
  .openapi('CategoricalFeedbackDetailCreate')

const CategoricalFeedbackDefinitionCreateSchema = FeedbackCreateSchema.and(
  z
    .object({ details: CategoricalFeedbackDetailCreateSchema.exactOptional() })
    .openapi({ required: [] }),
)
  .openapi({ required: ['details', 'name', 'type'] })
  .openapi('CategoricalFeedbackDefinitionCreate')

const NumericalFeedbackDetailCreateSchema = z
  .object({ max: z.number(), min: z.number() })
  .openapi({ required: ['max', 'min'] })
  .openapi('NumericalFeedbackDetailCreate')

const NumericalFeedbackDefinitionCreateSchema = FeedbackCreateSchema.and(
  z
    .object({ details: NumericalFeedbackDetailCreateSchema.exactOptional() })
    .openapi({ required: [] }),
)
  .openapi({ required: ['details', 'name', 'type'] })
  .openapi('NumericalFeedbackDefinitionCreate')

const FeedbackPublicSchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ readOnly: true }),
    name: z.string().min(1),
    description: z
      .string()
      .min(0)
      .max(255)
      .exactOptional()
      .openapi({
        description: 'Optional description for the feedback definition',
        example: 'This feedback definition is used to rate response quality',
      }),
    createdAt: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    createdBy: z.string().exactOptional().openapi({ readOnly: true }),
    lastUpdatedAt: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    lastUpdatedBy: z.string().exactOptional().openapi({ readOnly: true }),
    type: z.enum(['numerical', 'categorical', 'boolean']),
  })
  .openapi({
    required: ['name', 'type'],
    discriminator: {
      propertyName: 'type',
      mapping: {
        numerical: '#/components/schemas/NumericalFeedbackDefinition_Public',
        categorical: '#/components/schemas/CategoricalFeedbackDefinition_Public',
        boolean: '#/components/schemas/BooleanFeedbackDefinition_Public',
      },
    },
  })
  .openapi('FeedbackPublic')

const BooleanFeedbackDetailPublicSchema = z
  .object({
    trueLabel: z
      .string()
      .min(1)
      .openapi({ description: 'Label for true/1 value', example: 'Pass' }),
    falseLabel: z
      .string()
      .min(1)
      .openapi({ description: 'Label for false/0 value', example: 'Fail' }),
  })
  .openapi({ required: ['falseLabel', 'trueLabel'] })
  .openapi('BooleanFeedbackDetailPublic')

const BooleanFeedbackDefinitionPublicSchema = FeedbackPublicSchema.and(
  z
    .object({
      details: BooleanFeedbackDetailPublicSchema.exactOptional(),
      created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
      created_by: z.string().exactOptional().openapi({ readOnly: true }),
      last_updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
      last_updated_by: z.string().exactOptional().openapi({ readOnly: true }),
    })
    .openapi({ required: [] }),
)
  .openapi({ required: ['details', 'name', 'type'] })
  .openapi('BooleanFeedbackDefinitionPublic')

const CategoricalFeedbackDetailPublicSchema = z
  .object({ categories: z.record(z.string(), z.float64()) })
  .openapi({ required: ['categories'] })
  .openapi('CategoricalFeedbackDetailPublic')

const CategoricalFeedbackDefinitionPublicSchema = FeedbackPublicSchema.and(
  z
    .object({
      details: CategoricalFeedbackDetailPublicSchema.exactOptional(),
      created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
      created_by: z.string().exactOptional().openapi({ readOnly: true }),
      last_updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
      last_updated_by: z.string().exactOptional().openapi({ readOnly: true }),
    })
    .openapi({ required: [] }),
)
  .openapi({ required: ['details', 'name', 'type'] })
  .openapi('CategoricalFeedbackDefinitionPublic')

const FeedbackObjectPublicSchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ readOnly: true }),
    name: z.string().min(1),
    description: z
      .string()
      .min(0)
      .max(255)
      .exactOptional()
      .openapi({
        description: 'Optional description for the feedback definition',
        example: 'This feedback definition is used to rate response quality',
      }),
    createdAt: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    createdBy: z.string().exactOptional().openapi({ readOnly: true }),
    lastUpdatedAt: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    lastUpdatedBy: z.string().exactOptional().openapi({ readOnly: true }),
    type: z.enum(['numerical', 'categorical', 'boolean']),
  })
  .openapi({
    required: ['name', 'type'],
    discriminator: {
      propertyName: 'type',
      mapping: {
        numerical: '#/components/schemas/NumericalFeedbackDefinition_Public',
        categorical: '#/components/schemas/CategoricalFeedbackDefinition_Public',
        boolean: '#/components/schemas/BooleanFeedbackDefinition_Public',
      },
    },
  })
  .openapi('FeedbackObjectPublic')

const FeedbackDefinitionPagePublicSchema = z
  .object({
    page: z.int32().exactOptional(),
    size: z.int32().exactOptional(),
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
    content: z.array(FeedbackObjectPublicSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FeedbackDefinitionPagePublic')

const NumericalFeedbackDetailPublicSchema = z
  .object({ max: z.number(), min: z.number() })
  .openapi({ required: ['max', 'min'] })
  .openapi('NumericalFeedbackDetailPublic')

const NumericalFeedbackDefinitionPublicSchema = FeedbackPublicSchema.and(
  z
    .object({
      details: NumericalFeedbackDetailPublicSchema.exactOptional(),
      created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
      created_by: z.string().exactOptional().openapi({ readOnly: true }),
      last_updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
      last_updated_by: z.string().exactOptional().openapi({ readOnly: true }),
    })
    .openapi({ required: [] }),
)
  .openapi({ required: ['details', 'name', 'type'] })
  .openapi('NumericalFeedbackDefinitionPublic')

const FeedbackUpdateSchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ readOnly: true }),
    name: z.string().min(1),
    description: z
      .string()
      .min(0)
      .max(255)
      .exactOptional()
      .openapi({
        description: 'Optional description for the feedback definition',
        example: 'This feedback definition is used to rate response quality',
      }),
    type: z.enum(['numerical', 'categorical', 'boolean']),
  })
  .openapi({
    required: ['name', 'type'],
    discriminator: {
      propertyName: 'type',
      mapping: {
        numerical: '#/components/schemas/NumericalFeedbackDefinition_Update',
        categorical: '#/components/schemas/CategoricalFeedbackDefinition_Update',
        boolean: '#/components/schemas/BooleanFeedbackDefinition_Update',
      },
    },
  })
  .openapi('FeedbackUpdate')

const BooleanFeedbackDetailUpdateSchema = z
  .object({
    trueLabel: z
      .string()
      .min(1)
      .openapi({ description: 'Label for true/1 value', example: 'Pass' }),
    falseLabel: z
      .string()
      .min(1)
      .openapi({ description: 'Label for false/0 value', example: 'Fail' }),
  })
  .openapi({ required: ['falseLabel', 'trueLabel'] })
  .openapi('BooleanFeedbackDetailUpdate')

const BooleanFeedbackDefinitionUpdateSchema = FeedbackUpdateSchema.and(
  z
    .object({ details: BooleanFeedbackDetailUpdateSchema.exactOptional() })
    .openapi({ required: [] }),
)
  .openapi({ required: ['details', 'name', 'type'] })
  .openapi('BooleanFeedbackDefinitionUpdate')

const CategoricalFeedbackDetailUpdateSchema = z
  .object({ categories: z.record(z.string(), z.float64()) })
  .openapi({ required: ['categories'] })
  .openapi('CategoricalFeedbackDetailUpdate')

const CategoricalFeedbackDefinitionUpdateSchema = FeedbackUpdateSchema.and(
  z
    .object({ details: CategoricalFeedbackDetailUpdateSchema.exactOptional() })
    .openapi({ required: [] }),
)
  .openapi({ required: ['details', 'name', 'type'] })
  .openapi('CategoricalFeedbackDefinitionUpdate')

const NumericalFeedbackDetailUpdateSchema = z
  .object({ max: z.number(), min: z.number() })
  .openapi({ required: ['max', 'min'] })
  .openapi('NumericalFeedbackDetailUpdate')

const NumericalFeedbackDefinitionUpdateSchema = FeedbackUpdateSchema.and(
  z
    .object({ details: NumericalFeedbackDetailUpdateSchema.exactOptional() })
    .openapi({ required: [] }),
)
  .openapi({ required: ['details', 'name', 'type'] })
  .openapi('NumericalFeedbackDefinitionUpdate')

const GuardrailSchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ readOnly: true }),
    entity_id: z.uuid(),
    secondary_id: z.uuid(),
    project_name: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .exactOptional()
      .openapi({ description: 'If null, the default project is used' }),
    project_id: z.uuid().exactOptional(),
    name: z.enum(['TOPIC', 'PII', 'LLM_JUDGE', 'PROMPT_INJECTION', 'CUSTOM_CLASSIFIER']),
    result: z.enum(['passed', 'failed']),
    config: JsonNodeSchema,
    details: JsonNodeSchema,
  })
  .openapi({ required: ['config', 'details', 'entity_id', 'name', 'result', 'secondary_id'] })
  .openapi('Guardrail')

const GuardrailBatchSchema = z
  .object({ guardrails: z.array(GuardrailSchema).min(1).max(1000) })
  .openapi({ required: ['guardrails'] })
  .openapi('GuardrailBatch')

const GuardrailWriteSchema = z
  .object({
    entity_id: z.uuid(),
    secondary_id: z.uuid(),
    project_name: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .exactOptional()
      .openapi({ description: 'If null, the default project is used' }),
    project_id: z.uuid().exactOptional(),
    name: z.enum(['TOPIC', 'PII', 'LLM_JUDGE', 'PROMPT_INJECTION', 'CUSTOM_CLASSIFIER']),
    result: z.enum(['passed', 'failed']),
    config: JsonNodeSchema,
    details: JsonNodeSchema,
  })
  .openapi({ required: ['config', 'details', 'entity_id', 'name', 'result', 'secondary_id'] })
  .openapi('GuardrailWrite')

const GuardrailBatchWriteSchema = z
  .object({ guardrails: z.array(GuardrailWriteSchema).min(1).max(1000) })
  .openapi({ required: ['guardrails'] })
  .openapi('GuardrailBatchWrite')

const ModelParamsSchema: z.ZodType<ModelParamsType> = z
  .lazy(() =>
    z
      .object({
        temperature: NumberParamSchema.exactOptional(),
        topP: NumberParamSchema.exactOptional(),
        topK: NumberParamSchema.exactOptional(),
        frequencyPenalty: NumberParamSchema.exactOptional(),
        presencePenalty: NumberParamSchema.exactOptional(),
        maxOutputTokens: NumberParamSchema.exactOptional(),
        stop: FlagParamSchema.exactOptional(),
        seed: FlagParamSchema.exactOptional(),
        effort: EffortParamSchema.exactOptional(),
        tools: ToolsParamSchema.exactOptional(),
        samplingExclusive: z.boolean().exactOptional(),
        thinksByDefault: z.boolean().exactOptional(),
        routes: z.record(z.string(), ModelParamsSchema).exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('ModelParams')

const CredentialPublicSchema = z
  .object({
    key: z.string().min(0).max(250),
    value: z.string().min(0).max(2000).exactOptional(),
    secret: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Secret values are encrypted at rest and never read back; once true it cannot be unset',
      }),
  })
  .openapi({
    required: ['key'],
    description:
      "Fields sent to the token URL. Values flagged as secret are write-only: they read back as the '__SECRET__' sentinel",
  })
  .openapi('CredentialPublic')

const ProviderAuthConfigPublicSchema = z
  .object({
    token_url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Auth service URL the credentials are sent to',
        example: 'https://developer.api.example.com/authentication/v1/token',
      }),
    send_as: z
      .enum(['form', 'json', 'basic'])
      .exactOptional()
      .openapi({
        description:
          'How credentials are sent: form body (default), JSON body, or basic auth (id/secret in an HTTP Basic header, remaining fields in the form body)',
      }),
    credentials: z
      .array(CredentialPublicSchema)
      .min(0)
      .max(20)
      .exactOptional()
      .openapi({
        description:
          "Fields sent to the token URL. Values flagged as secret are write-only: they read back as the '__SECRET__' sentinel",
      }),
    token_field: z
      .string()
      .min(0)
      .max(250)
      .exactOptional()
      .openapi({
        description: 'Field holding the token in the reply; dot-path for nested replies',
        example: 'access_token',
      }),
    expires_field: z
      .string()
      .min(0)
      .max(250)
      .exactOptional()
      .openapi({
        description:
          'Field holding the token lifetime in seconds in the reply; dot-path for nested replies',
        example: 'expires_in',
      }),
    fallback_ttl_seconds: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n).max(31536000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        maximum: 31536000,
        description:
          "Lifetime in seconds assumed when the reply doesn't state one, capped at one year; 0 disables caching for such replies. A reply-stated lifetime always wins",
      }),
  })
  .openapi({
    description:
      'Dynamic token auth recipe. When set, Opik fetches a short-lived bearer from the configured auth service instead of using a static api_key. Only supported for custom providers. Secret credential values read back masked.',
    required: [],
  })
  .openapi('ProviderAuthConfigPublic')

const ProviderApiKeyPublicSchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ readOnly: true }),
    provider: z.enum([
      'openai',
      'anthropic',
      'gemini',
      'openrouter',
      'vertex-ai',
      'bedrock',
      'ollama',
      'custom-llm',
      'opik-free',
    ]),
    api_key: z.string().exactOptional(),
    name: z.string().min(0).max(150).exactOptional(),
    provider_name: z
      .string()
      .min(0)
      .max(150)
      .exactOptional()
      .openapi({
        description:
          "Provider name - required for custom LLM and Bedrock providers to uniquely identify them (e.g., 'ollama', 'vllm', 'Bedrock us-east-1'). Must not be blank for custom and Bedrock providers. Should not be set for standard providers (OpenAI, Anthropic, etc.). This requirement is conditional and validation is enforced programmatically.",
        example: 'ollama',
      }),
    headers: z.record(z.string(), z.string()).exactOptional(),
    configuration: z.record(z.string(), z.string()).exactOptional(),
    base_url: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .exactOptional(),
    auth_config: ProviderAuthConfigPublicSchema.exactOptional(),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    created_by: z.string().exactOptional().openapi({ readOnly: true }),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    last_updated_by: z.string().exactOptional().openapi({ readOnly: true }),
    read_only: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'If true, this provider is system-managed and cannot be edited or deleted',
        readOnly: true,
      }),
  })
  .openapi({ required: ['provider'] })
  .openapi('ProviderApiKeyPublic')

const ProviderApiKeyPagePublicSchema = z
  .object({
    size: z.int32().exactOptional(),
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
    content: z.array(ProviderApiKeyPublicSchema).exactOptional(),
    sortableBy: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProviderApiKeyPagePublic')

const CredentialSchema = z
  .object({
    key: z.string().min(0).max(250),
    value: z.string().min(0).max(2000).exactOptional(),
    secret: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Secret values are encrypted at rest and never read back; once true it cannot be unset',
      }),
  })
  .openapi({
    required: ['key'],
    description:
      "Fields sent to the token URL. Values flagged as secret are write-only: they read back as the '__SECRET__' sentinel",
  })
  .openapi('Credential')

const ProviderAuthConfigSchema = z
  .object({
    token_url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Auth service URL the credentials are sent to',
        example: 'https://developer.api.example.com/authentication/v1/token',
      }),
    send_as: z
      .enum(['form', 'json', 'basic'])
      .exactOptional()
      .openapi({
        description:
          'How credentials are sent: form body (default), JSON body, or basic auth (id/secret in an HTTP Basic header, remaining fields in the form body)',
      }),
    credentials: z
      .array(CredentialSchema)
      .min(0)
      .max(20)
      .exactOptional()
      .openapi({
        description:
          "Fields sent to the token URL. Values flagged as secret are write-only: they read back as the '__SECRET__' sentinel",
      }),
    token_field: z
      .string()
      .min(0)
      .max(250)
      .exactOptional()
      .openapi({
        description: 'Field holding the token in the reply; dot-path for nested replies',
        example: 'access_token',
      }),
    expires_field: z
      .string()
      .min(0)
      .max(250)
      .exactOptional()
      .openapi({
        description:
          'Field holding the token lifetime in seconds in the reply; dot-path for nested replies',
        example: 'expires_in',
      }),
    fallback_ttl_seconds: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n).max(31536000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        maximum: 31536000,
        description:
          "Lifetime in seconds assumed when the reply doesn't state one, capped at one year; 0 disables caching for such replies. A reply-stated lifetime always wins",
      }),
  })
  .openapi({
    description:
      "Dynamic token auth recipe. Send the '__SECRET__' sentinel as a credential value to keep the stored secret; send an empty object to clear the auth config.",
    required: [],
  })
  .openapi('ProviderAuthConfig')

const ProviderApiKeySchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ readOnly: true }),
    provider: z.enum([
      'openai',
      'anthropic',
      'gemini',
      'openrouter',
      'vertex-ai',
      'bedrock',
      'ollama',
      'custom-llm',
      'opik-free',
    ]),
    api_key: z.string().exactOptional(),
    name: z.string().min(0).max(150).exactOptional(),
    provider_name: z
      .string()
      .min(0)
      .max(150)
      .exactOptional()
      .openapi({
        description:
          "Provider name - required for custom LLM and Bedrock providers to uniquely identify them (e.g., 'ollama', 'vllm', 'Bedrock us-east-1'). Must not be blank for custom and Bedrock providers. Should not be set for standard providers (OpenAI, Anthropic, etc.). This requirement is conditional and validation is enforced programmatically.",
        example: 'ollama',
      }),
    headers: z.record(z.string(), z.string()).exactOptional(),
    configuration: z.record(z.string(), z.string()).exactOptional(),
    base_url: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .exactOptional(),
    auth_config: ProviderAuthConfigSchema.exactOptional(),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    created_by: z.string().exactOptional().openapi({ readOnly: true }),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    last_updated_by: z.string().exactOptional().openapi({ readOnly: true }),
    read_only: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'If true, this provider is system-managed and cannot be edited or deleted',
        readOnly: true,
      }),
  })
  .openapi({ required: ['provider'] })
  .openapi('ProviderApiKey')

const CredentialWriteSchema = z
  .object({
    key: z.string().min(0).max(250),
    value: z.string().min(0).max(2000).exactOptional(),
    secret: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Secret values are encrypted at rest and never read back; once true it cannot be unset',
      }),
  })
  .openapi({
    required: ['key'],
    description:
      "Fields sent to the token URL. Values flagged as secret are write-only: they read back as the '__SECRET__' sentinel",
  })
  .openapi('CredentialWrite')

const ProviderAuthConfigWriteSchema = z
  .object({
    token_url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Auth service URL the credentials are sent to',
        example: 'https://developer.api.example.com/authentication/v1/token',
      }),
    send_as: z
      .enum(['form', 'json', 'basic'])
      .exactOptional()
      .openapi({
        description:
          'How credentials are sent: form body (default), JSON body, or basic auth (id/secret in an HTTP Basic header, remaining fields in the form body)',
      }),
    credentials: z
      .array(CredentialWriteSchema)
      .min(0)
      .max(20)
      .exactOptional()
      .openapi({
        description:
          "Fields sent to the token URL. Values flagged as secret are write-only: they read back as the '__SECRET__' sentinel",
      }),
    token_field: z
      .string()
      .min(0)
      .max(250)
      .exactOptional()
      .openapi({
        description: 'Field holding the token in the reply; dot-path for nested replies',
        example: 'access_token',
      }),
    expires_field: z
      .string()
      .min(0)
      .max(250)
      .exactOptional()
      .openapi({
        description:
          'Field holding the token lifetime in seconds in the reply; dot-path for nested replies',
        example: 'expires_in',
      }),
    fallback_ttl_seconds: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n).max(31536000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        maximum: 31536000,
        description:
          "Lifetime in seconds assumed when the reply doesn't state one, capped at one year; 0 disables caching for such replies. A reply-stated lifetime always wins",
      }),
  })
  .openapi({
    description:
      'Dynamic token auth recipe. When set, Opik fetches a short-lived bearer from the configured auth service instead of using a static api_key. Only supported for custom providers. Secret credential values read back masked.',
    required: [],
  })
  .openapi('ProviderAuthConfigWrite')

const ProviderApiKeyWriteSchema = z
  .object({
    provider: z.enum([
      'openai',
      'anthropic',
      'gemini',
      'openrouter',
      'vertex-ai',
      'bedrock',
      'ollama',
      'custom-llm',
      'opik-free',
    ]),
    api_key: z.string().exactOptional(),
    name: z.string().min(0).max(150).exactOptional(),
    provider_name: z
      .string()
      .min(0)
      .max(150)
      .exactOptional()
      .openapi({
        description:
          "Provider name - required for custom LLM and Bedrock providers to uniquely identify them (e.g., 'ollama', 'vllm', 'Bedrock us-east-1'). Must not be blank for custom and Bedrock providers. Should not be set for standard providers (OpenAI, Anthropic, etc.). This requirement is conditional and validation is enforced programmatically.",
        example: 'ollama',
      }),
    headers: z.record(z.string(), z.string()).exactOptional(),
    configuration: z.record(z.string(), z.string()).exactOptional(),
    base_url: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .exactOptional(),
    auth_config: ProviderAuthConfigWriteSchema.exactOptional(),
  })
  .openapi({ required: ['provider'] })
  .openapi('ProviderApiKeyWrite')

const ResultSchema = z
  .object({
    name: z.string().exactOptional(),
    current: z.float64().exactOptional(),
    previous: z.float64().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Result')

const ProviderAuthCheckSchema = z
  .object({
    provider_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'Test the stored auth config of this provider; also the sentinel-resolution target when auth_config is sent',
      }),
    auth_config: ProviderAuthConfigSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProviderAuthCheck')

const ProviderApiKeyUpdateSchema = z
  .object({
    api_key: z.string().exactOptional(),
    name: z.string().min(0).max(150).exactOptional(),
    provider_name: z
      .string()
      .min(0)
      .max(150)
      .exactOptional()
      .openapi({
        description:
          'Provider name - can be set to migrate legacy custom LLM or Bedrock providers to the new multi-provider format. Once set, it cannot be changed. Should only be set for custom LLM and Bedrock providers.',
        example: 'ollama',
      }),
    headers: z.record(z.string(), z.string()).exactOptional(),
    configuration: z.record(z.string(), z.string()).exactOptional(),
    base_url: z.string().exactOptional(),
    auth_config: ProviderAuthConfigSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProviderApiKeyUpdate')

const LocalRunnerLogEntrySchema = z
  .object({ stream: z.string().min(1), text: z.string().min(1) })
  .openapi({ required: ['stream', 'text'] })
  .openapi('LocalRunnerLogEntry')

const BridgeCommandSubmitResponseSchema = z
  .object({ command_id: z.uuid().exactOptional() })
  .openapi({ required: [] })
  .openapi('BridgeCommandSubmitResponse')

const BridgeCommandSubmitRequestSchema = z
  .object({
    type: z.enum(['ReadFile', 'WriteFile', 'EditFile', 'ListFiles', 'SearchFiles', 'Exec']),
    args: JsonNodeSchema,
    timeout_seconds: z.int32().exactOptional(),
  })
  .openapi({ required: ['args', 'type'] })
  .openapi('BridgeCommandSubmitRequest')

const LocalRunnerJobMetadataSchema = z
  .object({
    dataset_id: z.uuid().exactOptional(),
    dataset_version_id: z.uuid().exactOptional(),
    dataset_item_version_id: z.uuid().exactOptional(),
    dataset_item_id: z.uuid().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LocalRunnerJobMetadata')

const CreateLocalRunnerJobRequestSchema = z
  .object({
    agent_name: z.string().min(1),
    inputs: JsonNodeSchema.exactOptional(),
    project_id: z.uuid(),
    mask_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'Deprecated. Use prompt_masks to pass one or more mask overlays keyed by prompt id.',
        deprecated: true,
      }),
    prompt_masks: z
      .record(
        z.string(),
        z
          .uuid()
          .openapi({
            description: 'Mask overlays to apply during agent execution, keyed by prompt id.',
          }),
      )
      .exactOptional()
      .openapi({
        description: 'Mask overlays to apply during agent execution, keyed by prompt id.',
      }),
    blueprint_name: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .exactOptional(),
    metadata: LocalRunnerJobMetadataSchema.exactOptional(),
  })
  .openapi({ required: ['agent_name', 'project_id'] })
  .openapi('CreateLocalRunnerJobRequest')

const BridgeCommandSchema = z
  .object({
    command_id: z.uuid().exactOptional(),
    runner_id: z.uuid().exactOptional(),
    type: z
      .enum(['ReadFile', 'WriteFile', 'EditFile', 'ListFiles', 'SearchFiles', 'Exec'])
      .exactOptional(),
    status: z.enum(['pending', 'picked_up', 'completed', 'failed', 'timed_out']).exactOptional(),
    args: JsonNodeSchema.exactOptional(),
    result: JsonNodeSchema.exactOptional(),
    error: JsonNodeSchema.exactOptional(),
    timeout_seconds: z.int32().exactOptional(),
    submitted_at: z.iso.datetime({ offset: true }).exactOptional(),
    picked_up_at: z.iso.datetime({ offset: true }).exactOptional(),
    completed_at: z.iso.datetime({ offset: true }).exactOptional(),
    duration_ms: z
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
  .openapi('BridgeCommand')

const LocalRunnerJobSchema = z
  .object({
    id: z.uuid().exactOptional(),
    runner_id: z.uuid().exactOptional(),
    agent_name: z.string().exactOptional(),
    status: z.enum(['pending', 'running', 'completed', 'failed', 'cancelled']).exactOptional(),
    inputs: JsonNodeSchema.exactOptional(),
    result: JsonNodeSchema.exactOptional(),
    error: z.string().exactOptional(),
    project_id: z.uuid().exactOptional(),
    trace_id: z.uuid().exactOptional(),
    mask_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'Deprecated. Use prompt_masks to read one or more mask overlays keyed by prompt id.',
        deprecated: true,
      }),
    prompt_masks: z
      .record(
        z.string(),
        z
          .uuid()
          .openapi({
            description: 'Mask overlays to apply during agent execution, keyed by prompt id.',
          }),
      )
      .exactOptional()
      .openapi({
        description: 'Mask overlays to apply during agent execution, keyed by prompt id.',
      }),
    blueprint_name: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .exactOptional(),
    metadata: LocalRunnerJobMetadataSchema.exactOptional(),
    timeout: z.int32().exactOptional(),
    created_at: z.iso.datetime({ offset: true }).exactOptional(),
    started_at: z.iso.datetime({ offset: true }).exactOptional(),
    completed_at: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LocalRunnerJob')

const ParamSchema = z
  .object({
    name: z.string().min(1),
    type: z.string().min(1),
    presence: z.enum(['required', 'optional']).exactOptional(),
  })
  .openapi({ required: ['name', 'type'] })
  .openapi('Param')

const AgentSchema = z
  .object({
    name: z.string().exactOptional(),
    description: z.string().exactOptional(),
    language: z.string().exactOptional(),
    executable: z.string().exactOptional(),
    source_file: z.string().exactOptional(),
    params: z.array(ParamSchema).exactOptional(),
    timeout: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Agent')

const LocalRunnerSchema = z
  .object({
    id: z.uuid().exactOptional(),
    name: z.string().exactOptional(),
    project_id: z.uuid().exactOptional(),
    status: z.enum(['pairing', 'connected', 'disconnected']).exactOptional(),
    connected_at: z.iso.datetime({ offset: true }).exactOptional(),
    agents: z.array(AgentSchema).exactOptional(),
    capabilities: z.array(z.string()).exactOptional(),
    checklist: JsonNodeSchema.exactOptional(),
    type: z.enum(['connect', 'endpoint']).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LocalRunner')

const LocalRunnerHeartbeatResponseSchema = z
  .object({ cancelled_job_ids: z.array(z.uuid()).exactOptional() })
  .openapi({ required: [] })
  .openapi('LocalRunnerHeartbeatResponse')

const LocalRunnerHeartbeatRequestSchema = z
  .object({ capabilities: z.array(z.string()).exactOptional() })
  .openapi({ required: [] })
  .openapi('LocalRunnerHeartbeatRequest')

const LocalRunnerJobPageSchema = z
  .object({
    page: z.int32().exactOptional(),
    size: z.int32().exactOptional(),
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
    content: z.array(LocalRunnerJobSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LocalRunnerJobPage')

const LocalRunnerPageSchema = z
  .object({
    page: z.int32().exactOptional(),
    size: z.int32().exactOptional(),
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
    content: z.array(LocalRunnerSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LocalRunnerPage')

const BridgeCommandItemSchema = z
  .object({
    command_id: z.uuid().exactOptional(),
    type: z
      .enum(['ReadFile', 'WriteFile', 'EditFile', 'ListFiles', 'SearchFiles', 'Exec'])
      .exactOptional(),
    args: JsonNodeSchema.exactOptional(),
    timeout_seconds: z.int32().exactOptional(),
    submitted_at: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BridgeCommandItem')

const BridgeCommandBatchResponseSchema = z
  .object({ commands: z.array(BridgeCommandItemSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('BridgeCommandBatchResponse')

const BridgeCommandNextRequestSchema = z
  .object({ max_commands: z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('BridgeCommandNextRequest')

const BridgeCommandResultRequestSchema = z
  .object({
    status: z.enum(['pending', 'picked_up', 'completed', 'failed', 'timed_out']),
    result: JsonNodeSchema.exactOptional(),
    error: JsonNodeSchema.exactOptional(),
    duration_ms: z
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
  .openapi({ required: ['status'] })
  .openapi('BridgeCommandResultRequest')

const LocalRunnerJobResultRequestSchema = z
  .object({
    status: z.enum(['pending', 'running', 'completed', 'failed', 'cancelled']),
    result: JsonNodeSchema.exactOptional(),
    error: z.string().exactOptional(),
    trace_id: z.uuid().exactOptional(),
  })
  .openapi({ required: ['status'] })
  .openapi('LocalRunnerJobResultRequest')

const ManualEvaluationResponseSchema = z
  .object({
    entities_queued: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Number of entities queued for evaluation', example: 5 }),
    rules_applied: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Number of rules that will be applied', example: 2 }),
  })
  .openapi({ required: [] })
  .openapi('ManualEvaluationResponse')

const ManualEvaluationRequestSchema = z
  .object({
    project_id: z
      .uuid()
      .openapi({ description: 'Project ID', example: '550e8400-e29b-41d4-a716-446655440000' }),
    entity_ids: z
      .array(
        z
          .uuid()
          .openapi({ description: 'List of entity IDs (trace IDs or thread IDs) to evaluate' }),
      )
      .min(1)
      .openapi({
        description: 'List of entity IDs (trace IDs or thread IDs) to evaluate',
        example: ['550e8400-e29b-41d4-a716-446655440000', '550e8400-e29b-41d4-a716-446655440001'],
      }),
    rule_ids: z
      .array(z.uuid().openapi({ description: 'List of automation rule IDs to apply' }))
      .min(1)
      .openapi({
        description: 'List of automation rule IDs to apply',
        example: ['660e8400-e29b-41d4-a716-446655440000'],
      }),
    entity_type: z
      .enum(['trace', 'thread', 'span'])
      .openapi({ description: 'Type of entity to evaluate (trace or thread)', example: 'trace' }),
  })
  .openapi({ required: ['entity_ids', 'entity_type', 'project_id', 'rule_ids'] })
  .openapi('ManualEvaluationRequest')

const OllamaModelSchema = z
  .object({
    name: z.string().min(1).openapi({ description: 'Model name', example: 'llama2' }),
    size: z
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
      .openapi({ type: 'integer', format: 'int64', description: 'Model size in bytes' }),
    digest: z.string().exactOptional().openapi({ description: 'Model digest/hash' }),
    modified_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Model modification date' }),
  })
  .openapi({ required: ['name'], description: 'Ollama model information' })
  .openapi('OllamaModel')

const OllamaInstanceBaseUrlRequestSchema = z
  .object({
    base_url: z
      .string()
      .min(1)
      .openapi({
        description:
          'Base URL of the Ollama instance. May include /v1 suffix which will be automatically removed for connection testing. For inference, use the URL with /v1 suffix for OpenAI-compatible endpoints.',
        example: 'http://localhost:11434/v1',
      }),
    api_key: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional API key for authenticated Ollama instances. If provided, will be sent as Bearer token in Authorization header.',
      }),
  })
  .openapi({
    required: ['base_url'],
    description: 'Request with Ollama instance base URL for connection testing or model discovery.',
  })
  .openapi('OllamaInstanceBaseUrlRequest')

const OllamaConnectionTestResponseSchema = z
  .object({
    connected: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the connection was successful' }),
    version: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Server version (returned even if connection failed or version is incompatible)',
      }),
    error_message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Error message if connection failed' }),
  })
  .openapi({ description: 'Response from Ollama connection test.', required: [] })
  .openapi('OllamaConnectionTestResponse')

const ExportTraceServiceRequestSchema = JsonNodeSchema.openapi('ExportTraceServiceRequest')

const StudioMessageSchema = z
  .object({ role: z.string().min(1), content: z.string().min(1) })
  .openapi({ required: ['content', 'role'] })
  .openapi('StudioMessage')

const StudioPromptSchema = z
  .object({ messages: z.array(StudioMessageSchema).min(1) })
  .openapi({ required: ['messages'] })
  .openapi('StudioPrompt')

const StudioLlmModelSchema = z
  .object({ model: z.string().min(1), parameters: JsonNodeSchema.exactOptional() })
  .openapi({ required: ['model'] })
  .openapi('StudioLlmModel')

const StudioMetricSchema = z
  .object({ type: z.string().min(1), parameters: JsonNodeSchema.exactOptional() })
  .openapi({ required: ['type'] })
  .openapi('StudioMetric')

const StudioEvaluationSchema = z
  .object({ metrics: z.array(StudioMetricSchema).min(1) })
  .openapi({ required: ['metrics'] })
  .openapi('StudioEvaluation')

const StudioOptimizerSchema = z
  .object({ type: z.string().min(1), parameters: JsonNodeSchema.exactOptional() })
  .openapi({ required: ['type'] })
  .openapi('StudioOptimizer')

const OptimizationStudioConfigSchema = z
  .object({
    dataset_name: z.string().min(1),
    prompt: StudioPromptSchema,
    llm_model: StudioLlmModelSchema,
    evaluation: StudioEvaluationSchema,
    optimizer: StudioOptimizerSchema,
  })
  .openapi({ required: ['dataset_name', 'evaluation', 'llm_model', 'optimizer', 'prompt'] })
  .openapi('OptimizationStudioConfig')

const OptimizationSchema = z
  .object({
    id: z.uuid().exactOptional(),
    name: z.string().exactOptional(),
    dataset_name: z.string().min(1),
    project_name: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .exactOptional()
      .openapi({
        description:
          "Project name. Creates project if it doesn't exist. Ignored when project_id is provided.",
      }),
    project_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Project ID. Takes precedence over project_name when both are provided.',
      }),
    objective_name: z.string().min(1),
    status: z.enum(['running', 'completed', 'cancelled', 'initialized', 'error']),
    metadata: JsonListStringSchema.exactOptional(),
    studio_config: OptimizationStudioConfigSchema.exactOptional(),
    error_info: ErrorInfoSchema.exactOptional(),
    dataset_id: z.uuid().exactOptional().openapi({ readOnly: true }),
    num_trials: z
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
      .openapi({ type: 'integer', format: 'int64', readOnly: true }),
    feedback_scores: z
      .array(FeedbackScoreAverageSchema)
      .exactOptional()
      .openapi({ readOnly: true }),
    experiment_scores: z
      .array(FeedbackScoreAverageSchema)
      .exactOptional()
      .openapi({ readOnly: true }),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    created_by: z.string().exactOptional().openapi({ readOnly: true }),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional(),
    last_updated_by: z.string().exactOptional().openapi({ readOnly: true }),
    baseline_objective_score: z.number().exactOptional().openapi({ readOnly: true }),
    best_objective_score: z.number().exactOptional().openapi({ readOnly: true }),
    baseline_duration: z.number().exactOptional().openapi({ readOnly: true }),
    best_duration: z.number().exactOptional().openapi({ readOnly: true }),
    baseline_cost: z.number().exactOptional().openapi({ readOnly: true }),
    best_cost: z.number().exactOptional().openapi({ readOnly: true }),
    total_optimization_cost: z.number().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: ['dataset_name', 'objective_name', 'status'] })
  .openapi('Optimization')

const ErrorInfoWriteSchema = z
  .object({
    exception_type: z.string().min(1),
    message: z.string().exactOptional(),
    traceback: z.string().min(1),
  })
  .openapi({ required: ['exception_type', 'traceback'] })
  .openapi('ErrorInfoWrite')

const StudioMessageWriteSchema = z
  .object({ role: z.string().min(1), content: z.string().min(1) })
  .openapi({ required: ['content', 'role'] })
  .openapi('StudioMessageWrite')

const StudioPromptWriteSchema = z
  .object({ messages: z.array(StudioMessageWriteSchema).min(1) })
  .openapi({ required: ['messages'] })
  .openapi('StudioPromptWrite')

const StudioLlmModelWriteSchema = z
  .object({ model: z.string().min(1), parameters: JsonNodeWriteSchema.exactOptional() })
  .openapi({ required: ['model'] })
  .openapi('StudioLlmModelWrite')

const StudioMetricWriteSchema = z
  .object({ type: z.string().min(1), parameters: JsonNodeWriteSchema.exactOptional() })
  .openapi({ required: ['type'] })
  .openapi('StudioMetricWrite')

const StudioEvaluationWriteSchema = z
  .object({ metrics: z.array(StudioMetricWriteSchema).min(1) })
  .openapi({ required: ['metrics'] })
  .openapi('StudioEvaluationWrite')

const StudioOptimizerWriteSchema = z
  .object({ type: z.string().min(1), parameters: JsonNodeWriteSchema.exactOptional() })
  .openapi({ required: ['type'] })
  .openapi('StudioOptimizerWrite')

const OptimizationStudioConfigWriteSchema = z
  .object({
    dataset_name: z.string().min(1),
    prompt: StudioPromptWriteSchema,
    llm_model: StudioLlmModelWriteSchema,
    evaluation: StudioEvaluationWriteSchema,
    optimizer: StudioOptimizerWriteSchema,
  })
  .openapi({ required: ['dataset_name', 'evaluation', 'llm_model', 'optimizer', 'prompt'] })
  .openapi('OptimizationStudioConfigWrite')

const OptimizationWriteSchema = z
  .object({
    id: z.uuid().exactOptional(),
    name: z.string().exactOptional(),
    dataset_name: z.string().min(1),
    project_name: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .exactOptional()
      .openapi({
        description:
          "Project name. Creates project if it doesn't exist. Ignored when project_id is provided.",
      }),
    project_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Project ID. Takes precedence over project_name when both are provided.',
      }),
    objective_name: z.string().min(1),
    status: z.enum(['running', 'completed', 'cancelled', 'initialized', 'error']),
    metadata: JsonListStringWriteSchema.exactOptional(),
    studio_config: OptimizationStudioConfigWriteSchema.exactOptional(),
    error_info: ErrorInfoWriteSchema.exactOptional(),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: ['dataset_name', 'objective_name', 'status'] })
  .openapi('OptimizationWrite')

const ErrorInfoPublicSchema = z
  .object({
    exception_type: z.string().min(1),
    message: z.string().exactOptional(),
    traceback: z.string().min(1),
  })
  .openapi({ required: ['exception_type', 'traceback'] })
  .openapi('ErrorInfoPublic')

const StudioMessagePublicSchema = z
  .object({ role: z.string().min(1), content: z.string().min(1) })
  .openapi({ required: ['content', 'role'] })
  .openapi('StudioMessagePublic')

const StudioPromptPublicSchema = z
  .object({ messages: z.array(StudioMessagePublicSchema).min(1) })
  .openapi({ required: ['messages'] })
  .openapi('StudioPromptPublic')

const StudioLlmModelPublicSchema = z
  .object({ model: z.string().min(1), parameters: JsonNodePublicSchema.exactOptional() })
  .openapi({ required: ['model'] })
  .openapi('StudioLlmModelPublic')

const StudioMetricPublicSchema = z
  .object({ type: z.string().min(1), parameters: JsonNodePublicSchema.exactOptional() })
  .openapi({ required: ['type'] })
  .openapi('StudioMetricPublic')

const StudioEvaluationPublicSchema = z
  .object({ metrics: z.array(StudioMetricPublicSchema).min(1) })
  .openapi({ required: ['metrics'] })
  .openapi('StudioEvaluationPublic')

const StudioOptimizerPublicSchema = z
  .object({ type: z.string().min(1), parameters: JsonNodePublicSchema.exactOptional() })
  .openapi({ required: ['type'] })
  .openapi('StudioOptimizerPublic')

const OptimizationStudioConfigPublicSchema = z
  .object({
    dataset_name: z.string().min(1),
    prompt: StudioPromptPublicSchema,
    llm_model: StudioLlmModelPublicSchema,
    evaluation: StudioEvaluationPublicSchema,
    optimizer: StudioOptimizerPublicSchema,
  })
  .openapi({ required: ['dataset_name', 'evaluation', 'llm_model', 'optimizer', 'prompt'] })
  .openapi('OptimizationStudioConfigPublic')

const OptimizationPublicSchema = z
  .object({
    id: z.uuid().exactOptional(),
    name: z.string().exactOptional(),
    dataset_name: z.string().min(1),
    project_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Project ID. Takes precedence over project_name when both are provided.',
      }),
    objective_name: z.string().min(1),
    status: z.enum(['running', 'completed', 'cancelled', 'initialized', 'error']),
    metadata: JsonListStringPublicSchema.exactOptional(),
    studio_config: OptimizationStudioConfigPublicSchema.exactOptional(),
    error_info: ErrorInfoPublicSchema.exactOptional(),
    dataset_id: z.uuid().exactOptional().openapi({ readOnly: true }),
    num_trials: z
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
      .openapi({ type: 'integer', format: 'int64', readOnly: true }),
    feedback_scores: z
      .array(FeedbackScoreAveragePublicSchema)
      .exactOptional()
      .openapi({ readOnly: true }),
    experiment_scores: z
      .array(FeedbackScoreAveragePublicSchema)
      .exactOptional()
      .openapi({ readOnly: true }),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    created_by: z.string().exactOptional().openapi({ readOnly: true }),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional(),
    last_updated_by: z.string().exactOptional().openapi({ readOnly: true }),
    baseline_objective_score: z.number().exactOptional().openapi({ readOnly: true }),
    best_objective_score: z.number().exactOptional().openapi({ readOnly: true }),
    baseline_duration: z.number().exactOptional().openapi({ readOnly: true }),
    best_duration: z.number().exactOptional().openapi({ readOnly: true }),
    baseline_cost: z.number().exactOptional().openapi({ readOnly: true }),
    best_cost: z.number().exactOptional().openapi({ readOnly: true }),
    total_optimization_cost: z.number().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: ['dataset_name', 'objective_name', 'status'] })
  .openapi('OptimizationPublic')

const OptimizationPagePublicSchema = z
  .object({
    page: z.int32().exactOptional(),
    size: z.int32().exactOptional(),
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
    content: z.array(OptimizationPublicSchema).exactOptional(),
    sortableBy: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OptimizationPagePublic')

const OptimizationStudioLogSchema = z
  .object({
    url: z.string().exactOptional(),
    last_modified: z.iso.datetime({ offset: true }).exactOptional(),
    expires_at: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OptimizationStudioLog')

const OptimizationUpdateSchema = z
  .object({
    name: z.string().exactOptional(),
    status: z.enum(['running', 'completed', 'cancelled', 'initialized', 'error']).exactOptional(),
    error_info: ErrorInfoSchema.exactOptional(),
    metadata: JsonListStringSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OptimizationUpdate')

const ActivateRequestSchema = z
  .object({ runner_name: z.string().min(0).max(128), hmac: z.string().min(43).max(44) })
  .openapi({ required: ['hmac', 'runner_name'] })
  .openapi('ActivateRequest')

const CreateSessionResponseSchema = z
  .object({ session_id: z.uuid().exactOptional(), runner_id: z.uuid().exactOptional() })
  .openapi({ required: [] })
  .openapi('CreateSessionResponse')

const CreateSessionRequestSchema = z
  .object({
    project_id: z.uuid(),
    activation_key: z.string().min(43).max(44),
    ttl_seconds: z.int32().min(60).max(600).exactOptional(),
    type: z.enum(['connect', 'endpoint']),
  })
  .openapi({ required: ['activation_key', 'project_id', 'type'] })
  .openapi('CreateSessionRequest')

const PromptPublicSchema = z
  .object({
    id: z.uuid().exactOptional(),
    name: z.string().min(1),
    project_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Project ID. Takes precedence over project_name when both are provided.',
      }),
    description: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .min(0)
      .max(255)
      .exactOptional(),
    template_structure: z
      .enum(['text', 'chat'])
      .default('text')
      .exactOptional()
      .openapi({
        description: "Template structure type: 'text' or 'chat'. Immutable after creation.",
      }),
    tags: z
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
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    created_by: z.string().exactOptional().openapi({ readOnly: true }),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    last_updated_by: z.string().exactOptional().openapi({ readOnly: true }),
    version_count: z
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
      .openapi({ type: 'integer', format: 'int64', readOnly: true }),
  })
  .openapi({ required: ['name'] })
  .openapi('PromptPublic')

const PromptPagePublicSchema = z
  .object({
    page: z.int32().exactOptional(),
    size: z.int32().exactOptional(),
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
    content: z.array(PromptPublicSchema).exactOptional(),
    sortableBy: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PromptPagePublic')

const ErrorCountWithDeviationSchema = z
  .object({
    count: z
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
    deviation: z
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
    deviation_percentage: z
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
  .openapi('ErrorCountWithDeviation')

const ProjectSchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ readOnly: true }),
    name: z.string().min(1),
    visibility: z.enum(['private', 'public']).exactOptional(),
    description: z.string().min(0).max(255).exactOptional(),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    created_by: z.string().exactOptional().openapi({ readOnly: true }),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    last_updated_by: z.string().exactOptional().openapi({ readOnly: true }),
    last_updated_trace_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ readOnly: true }),
    feedback_scores: z
      .array(FeedbackScoreAverageSchema)
      .exactOptional()
      .openapi({ readOnly: true }),
    duration: PercentageValuesSchema.exactOptional(),
    total_estimated_cost: z.float64().exactOptional().openapi({ readOnly: true }),
    total_estimated_cost_sum: z.float64().exactOptional().openapi({ readOnly: true }),
    usage: z
      .record(z.string(), z.float64().openapi({ readOnly: true }))
      .exactOptional()
      .openapi({ readOnly: true }),
    trace_count: z
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
      .openapi({ type: 'integer', format: 'int64', readOnly: true }),
    thread_count: z
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
      .openapi({ type: 'integer', format: 'int64', readOnly: true }),
    guardrails_failed_count: z
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
      .openapi({ type: 'integer', format: 'int64', readOnly: true }),
    error_count: ErrorCountWithDeviationSchema.exactOptional(),
  })
  .openapi({ required: ['name'] })
  .openapi('Project')

const ProjectWriteSchema = z
  .object({
    name: z.string().min(1),
    visibility: z.enum(['private', 'public']).exactOptional(),
    description: z.string().min(0).max(255).exactOptional(),
  })
  .openapi({ required: ['name'] })
  .openapi('ProjectWrite')

const ProjectPublicSchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ readOnly: true }),
    name: z.string().min(1),
    visibility: z.enum(['private', 'public']).exactOptional(),
    description: z.string().min(0).max(255).exactOptional(),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    created_by: z.string().exactOptional().openapi({ readOnly: true }),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    last_updated_by: z.string().exactOptional().openapi({ readOnly: true }),
    last_updated_trace_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ readOnly: true }),
  })
  .openapi({ required: ['name'] })
  .openapi('ProjectPublic')

const ProjectPagePublicSchema = z
  .object({
    page: z.int32().exactOptional(),
    size: z.int32().exactOptional(),
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
    content: z.array(ProjectPublicSchema).exactOptional(),
    sortableBy: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProjectPagePublic')

const ScoreNameSchema = z
  .object({ name: z.string().exactOptional(), type: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('ScoreName')

const FeedbackScoreNamesSchema = z
  .object({ scores: z.array(ScoreNameSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('FeedbackScoreNames')

const TokenUsageNamesSchema = z
  .object({ names: z.array(z.string()).exactOptional() })
  .openapi({ required: [] })
  .openapi('TokenUsageNames')

const KpiMetricSchema = z
  .object({
    type: z.enum(['count', 'errors', 'avg_duration', 'total_cost']).exactOptional(),
    current_value: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Metric value for the current period. Unit depends on `type`: `count` is an integer count; `errors` is a percentage in [0, 100]; `avg_duration` is milliseconds; `total_cost` is in USD.',
      }),
    previous_value: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Metric value for the immediately preceding period of equal length. Same unit as `current_value`.',
      }),
  })
  .openapi({ required: [] })
  .openapi('KpiMetric')

const KpiCardResponseSchema = z
  .object({ stats: z.array(KpiMetricSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('KpiCardResponse')

const KpiCardRequestSchema = z
  .object({
    entity_type: z.enum(['traces', 'spans', 'threads']),
    filters: z.string().exactOptional(),
    interval_start: z.iso.datetime({ offset: true }),
    interval_end: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: ['entity_type', 'interval_start'] })
  .openapi('KpiCardRequest')

const DataPointNumberPublicSchema = z
  .object({ time: z.iso.datetime({ offset: true }), value: z.number().exactOptional() })
  .openapi({ required: ['time'] })
  .openapi('DataPointNumberPublic')

const ResultsNumberPublicSchema = z
  .object({
    name: z.string().exactOptional(),
    data: z.array(DataPointNumberPublicSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ResultsNumberPublic')

const ProjectMetricResponsePublicSchema = z
  .object({
    project_id: z.uuid().exactOptional(),
    metric_type: z
      .enum([
        'FEEDBACK_SCORES',
        'TRACE_COUNT',
        'TOKEN_USAGE',
        'DURATION',
        'COST',
        'GUARDRAILS_FAILED_COUNT',
        'THREAD_COUNT',
        'THREAD_DURATION',
        'THREAD_FEEDBACK_SCORES',
        'SPAN_FEEDBACK_SCORES',
        'SPAN_COUNT',
        'SPAN_DURATION',
        'SPAN_TOKEN_USAGE',
        'TRACE_AVERAGE_DURATION',
        'TRACE_ERROR_RATE',
        'SPAN_AVERAGE_DURATION',
        'SPAN_COST',
        'SPAN_ERROR_RATE',
        'THREAD_AVERAGE_DURATION',
        'THREAD_COST',
      ])
      .exactOptional(),
    interval: z.enum(['HOURLY', 'DAILY', 'WEEKLY', 'TOTAL']).exactOptional(),
    results: z.array(ResultsNumberPublicSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProjectMetricResponsePublic')

const BreakdownConfigPublicSchema = z
  .object({
    field: z
      .enum([
        'none',
        'tags',
        'metadata',
        'name',
        'error_info',
        'error_type',
        'model',
        'provider',
        'type',
        'guardrail_name',
      ])
      .exactOptional(),
    metadata_key: z.string().exactOptional(),
    sub_metric: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BreakdownConfigPublic')

const ProjectMetricRequestPublicSchema = z
  .object({
    metric_type: z
      .enum([
        'FEEDBACK_SCORES',
        'TRACE_COUNT',
        'TOKEN_USAGE',
        'DURATION',
        'COST',
        'GUARDRAILS_FAILED_COUNT',
        'THREAD_COUNT',
        'THREAD_DURATION',
        'THREAD_FEEDBACK_SCORES',
        'SPAN_FEEDBACK_SCORES',
        'SPAN_COUNT',
        'SPAN_DURATION',
        'SPAN_TOKEN_USAGE',
        'TRACE_AVERAGE_DURATION',
        'TRACE_ERROR_RATE',
        'SPAN_AVERAGE_DURATION',
        'SPAN_COST',
        'SPAN_ERROR_RATE',
        'THREAD_AVERAGE_DURATION',
        'THREAD_COST',
      ])
      .exactOptional(),
    interval: z.enum(['HOURLY', 'DAILY', 'WEEKLY', 'TOTAL']).exactOptional(),
    interval_start: z.iso.datetime({ offset: true }).exactOptional(),
    interval_end: z.iso.datetime({ offset: true }).exactOptional(),
    span_filters: z.array(SpanFilterPublicSchema).exactOptional(),
    trace_filters: z.array(TraceFilterPublicSchema).exactOptional(),
    thread_filters: z.array(TraceThreadFilterPublicSchema).exactOptional(),
    breakdown: BreakdownConfigPublicSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProjectMetricRequestPublic')

const ProjectStatsSummaryItemSchema = z
  .object({
    project_id: z.uuid().exactOptional(),
    feedback_scores: z.array(FeedbackScoreAverageSchema).exactOptional(),
    duration: PercentageValuesSchema.exactOptional(),
    total_estimated_cost: z.float64().exactOptional(),
    total_estimated_cost_sum: z.float64().exactOptional(),
    usage: z.record(z.string(), z.float64()).exactOptional(),
    trace_count: z
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
    thread_count: z
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
    guardrails_failed_count: z
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
    error_count: ErrorCountWithDeviationSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProjectStatsSummaryItem')

const ProjectStatsSummarySchema = z
  .object({ content: z.array(ProjectStatsSummaryItemSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('ProjectStatsSummary')

const ErrorCountWithDeviationDetailedSchema = z
  .object({
    count: z
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
    deviation: z
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
    deviation_percentage: z
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
  .openapi({ readOnly: true, required: [] })
  .openapi('ErrorCountWithDeviationDetailed')

const FeedbackScoreAverageDetailedSchema = z
  .object({ name: z.string().min(1), value: z.number() })
  .openapi({ required: ['name', 'value'], readOnly: true })
  .openapi('FeedbackScoreAverageDetailed')

const PercentageValuesDetailedSchema = z
  .object({
    p50: z.number().exactOptional(),
    p90: z.number().exactOptional(),
    p99: z.number().exactOptional(),
  })
  .openapi({ readOnly: true, required: [] })
  .openapi('PercentageValuesDetailed')

const ProjectDetailedSchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ readOnly: true }),
    name: z.string().min(1),
    visibility: z.enum(['private', 'public']).exactOptional(),
    description: z.string().min(0).max(255).exactOptional(),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    created_by: z.string().exactOptional().openapi({ readOnly: true }),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    last_updated_by: z.string().exactOptional().openapi({ readOnly: true }),
    last_updated_trace_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ readOnly: true }),
    feedback_scores: z
      .array(FeedbackScoreAverageDetailedSchema)
      .exactOptional()
      .openapi({ readOnly: true }),
    duration: PercentageValuesDetailedSchema.exactOptional(),
    total_estimated_cost: z.float64().exactOptional().openapi({ readOnly: true }),
    total_estimated_cost_sum: z.float64().exactOptional().openapi({ readOnly: true }),
    usage: z
      .record(z.string(), z.float64().openapi({ readOnly: true }))
      .exactOptional()
      .openapi({ readOnly: true }),
    trace_count: z
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
      .openapi({ type: 'integer', format: 'int64', readOnly: true }),
    thread_count: z
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
      .openapi({ type: 'integer', format: 'int64', readOnly: true }),
    guardrails_failed_count: z
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
      .openapi({ type: 'integer', format: 'int64', readOnly: true }),
    error_count: ErrorCountWithDeviationDetailedSchema.exactOptional(),
  })
  .openapi({ required: ['name'] })
  .openapi('ProjectDetailed')

const ErrorMessageDetailedSchema = z
  .object({ errors: z.array(z.string()).exactOptional() })
  .openapi({ required: [] })
  .openapi('ErrorMessageDetailed')

const ProjectRetrieveDetailedSchema = z
  .object({ name: z.string().min(1), includeStats: z.boolean().exactOptional() })
  .openapi({ required: ['name'] })
  .openapi('ProjectRetrieveDetailed')

const ProjectUpdateSchema = z
  .object({
    name: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .exactOptional(),
    description: z.string().min(0).max(255).exactOptional(),
    visibility: z.enum(['private', 'public']).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProjectUpdate')

const PromptVersionSchema = z
  .object({
    id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'version unique identifier, generated if absent' }),
    prompt_id: z.uuid().exactOptional().openapi({ readOnly: true }),
    commit: z
      .string()
      .regex(/^[a-zA-Z0-9]{8}$/)
      .exactOptional()
      .openapi({
        description:
          'version short unique identifier, generated if absent. it must be 8 characters long',
      }),
    version_number: z
      .string()
      .exactOptional()
      .openapi({
        description: 'sequential version number in the format v<N>; null for masks',
        readOnly: true,
      }),
    template: z.string().min(1),
    metadata: JsonNodeSchema.exactOptional(),
    type: z.enum(['mustache', 'jinja2', 'python']).exactOptional(),
    version_type: z
      .enum(['prompt_version', 'mask'])
      .exactOptional()
      .openapi({ description: 'version type discriminator; defaults to prompt_version' }),
    environment: z
      .string()
      .regex(/^[A-Za-z0-9_-]+$/)
      .min(0)
      .max(150)
      .exactOptional()
      .openapi({ description: "Deprecated: use 'environments' instead", deprecated: true }),
    environments: z
      .array(
        z
          .string()
          .regex(/^[A-Za-z0-9_-]+$/)
          .min(0)
          .max(150),
      )
      .min(0)
      .max(100)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    change_description: z.string().exactOptional(),
    tags: z
      .array(z.string().min(1))
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    variables: z
      .array(z.string().openapi({ readOnly: true }))
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({ readOnly: true }),
    template_structure: z.enum(['text', 'chat']).exactOptional().openapi({ readOnly: true }),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    created_by: z.string().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: ['template'], readOnly: true })
  .openapi('PromptVersion')

const PromptSchema = z
  .object({
    id: z.uuid().exactOptional(),
    name: z.string().min(1),
    project_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Project ID. Takes precedence over project_name when both are provided.',
      }),
    project_name: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .exactOptional()
      .openapi({
        description:
          'For project scope, specify either project_id or project_name. If project_name is provided and the project does not exist, it will be created. Ignored when project_id is provided. If neither is provided, the prompt is created at workspace level.',
      }),
    description: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .min(0)
      .max(255)
      .exactOptional(),
    template: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .exactOptional(),
    metadata: JsonNodeSchema.exactOptional(),
    change_description: z.string().exactOptional(),
    type: z.enum(['mustache', 'jinja2', 'python']).exactOptional(),
    template_structure: z
      .enum(['text', 'chat'])
      .default('text')
      .exactOptional()
      .openapi({
        description: "Template structure type: 'text' or 'chat'. Immutable after creation.",
      }),
    tags: z
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
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    created_by: z.string().exactOptional().openapi({ readOnly: true }),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    last_updated_by: z.string().exactOptional().openapi({ readOnly: true }),
    version_count: z
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
      .openapi({ type: 'integer', format: 'int64', readOnly: true }),
    latest_version: PromptVersionSchema.exactOptional(),
    requested_version: PromptVersionSchema.exactOptional(),
  })
  .openapi({ required: ['name'] })
  .openapi('Prompt')

const PromptWriteSchema = z
  .object({
    id: z.uuid().exactOptional(),
    name: z.string().min(1),
    project_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Project ID. Takes precedence over project_name when both are provided.',
      }),
    project_name: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .exactOptional()
      .openapi({
        description:
          'For project scope, specify either project_id or project_name. If project_name is provided and the project does not exist, it will be created. Ignored when project_id is provided. If neither is provided, the prompt is created at workspace level.',
      }),
    description: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .min(0)
      .max(255)
      .exactOptional(),
    template: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .exactOptional(),
    metadata: JsonNodeWriteSchema.exactOptional(),
    change_description: z.string().exactOptional(),
    type: z.enum(['mustache', 'jinja2', 'python']).exactOptional(),
    template_structure: z
      .enum(['text', 'chat'])
      .default('text')
      .exactOptional()
      .openapi({
        description: "Template structure type: 'text' or 'chat'. Immutable after creation.",
      }),
    tags: z
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
  .openapi({ required: ['name'] })
  .openapi('PromptWrite')

const JsonNodeDetailSchema = z.object({}).openapi('JsonNodeDetail')

const PromptVersionDetailSchema = z
  .object({
    id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'version unique identifier, generated if absent' }),
    prompt_id: z.uuid().exactOptional().openapi({ readOnly: true }),
    commit: z
      .string()
      .regex(/^[a-zA-Z0-9]{8}$/)
      .exactOptional()
      .openapi({
        description:
          'version short unique identifier, generated if absent. it must be 8 characters long',
      }),
    version_number: z
      .string()
      .exactOptional()
      .openapi({
        description: 'sequential version number in the format v<N>; null for masks',
        readOnly: true,
      }),
    template: z.string().min(1),
    metadata: JsonNodeDetailSchema.exactOptional(),
    type: z.enum(['mustache', 'jinja2', 'python']).exactOptional(),
    version_type: z
      .enum(['prompt_version', 'mask'])
      .exactOptional()
      .openapi({ description: 'version type discriminator; defaults to prompt_version' }),
    environment: z
      .string()
      .regex(/^[A-Za-z0-9_-]+$/)
      .min(0)
      .max(150)
      .exactOptional()
      .openapi({ description: "Deprecated: use 'environments' instead", deprecated: true }),
    environments: z
      .array(
        z
          .string()
          .regex(/^[A-Za-z0-9_-]+$/)
          .min(0)
          .max(150),
      )
      .min(0)
      .max(100)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    change_description: z.string().exactOptional(),
    tags: z
      .array(z.string().min(1))
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    variables: z
      .array(z.string().openapi({ readOnly: true }))
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({ readOnly: true }),
    template_structure: z.enum(['text', 'chat']).exactOptional().openapi({ readOnly: true }),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    created_by: z.string().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: ['template'] })
  .openapi('PromptVersionDetail')

const ErrorMessageDetailSchema = z
  .object({ errors: z.array(z.string()).exactOptional() })
  .openapi({ required: [] })
  .openapi('ErrorMessageDetail')

const CreatePromptVersionDetailSchema = z
  .object({
    name: z.string().min(1),
    version: PromptVersionDetailSchema,
    template_structure: z
      .enum(['text', 'chat'])
      .default('text')
      .exactOptional()
      .openapi({
        description:
          "Template structure for the prompt: 'text' or 'chat'. Note: This field is only used when creating a new prompt. If a prompt with the given name already exists, this field is ignored and the existing prompt's template structure is used. Template structure is immutable after prompt creation.",
      }),
    project_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Project ID. Takes precedence over project_name when both are provided.',
      }),
    project_name: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .exactOptional()
      .openapi({
        description:
          'If provided, scopes the prompt to the specified project. Ignored when project_id is provided.',
      }),
  })
  .openapi({ required: ['name', 'version'] })
  .openapi('CreatePromptVersionDetail')

const PromptDetailSchema = z
  .object({
    id: z.uuid().exactOptional(),
    name: z.string().min(1),
    project_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Project ID. Takes precedence over project_name when both are provided.',
      }),
    description: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .min(0)
      .max(255)
      .exactOptional(),
    template_structure: z
      .enum(['text', 'chat'])
      .default('text')
      .exactOptional()
      .openapi({
        description: "Template structure type: 'text' or 'chat'. Immutable after creation.",
      }),
    tags: z
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
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    created_by: z.string().exactOptional().openapi({ readOnly: true }),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    last_updated_by: z.string().exactOptional().openapi({ readOnly: true }),
    version_count: z
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
      .openapi({ type: 'integer', format: 'int64', readOnly: true }),
    latest_version: PromptVersionDetailSchema.exactOptional(),
    requested_version: PromptVersionDetailSchema.exactOptional(),
  })
  .openapi({ required: ['name'] })
  .openapi('PromptDetail')

const PromptVersionPublicSchema = z
  .object({
    id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'version unique identifier, generated if absent' }),
    prompt_id: z.uuid().exactOptional().openapi({ readOnly: true }),
    commit: z
      .string()
      .regex(/^[a-zA-Z0-9]{8}$/)
      .exactOptional()
      .openapi({
        description:
          'version short unique identifier, generated if absent. it must be 8 characters long',
      }),
    version_number: z
      .string()
      .exactOptional()
      .openapi({
        description: 'sequential version number in the format v<N>; null for masks',
        readOnly: true,
      }),
    template: z.string().min(1),
    metadata: JsonNodePublicSchema.exactOptional(),
    type: z.enum(['mustache', 'jinja2', 'python']).exactOptional(),
    version_type: z
      .enum(['prompt_version', 'mask'])
      .exactOptional()
      .openapi({ description: 'version type discriminator; defaults to prompt_version' }),
    environment: z
      .string()
      .regex(/^[A-Za-z0-9_-]+$/)
      .min(0)
      .max(150)
      .exactOptional()
      .openapi({ description: "Deprecated: use 'environments' instead", deprecated: true }),
    environments: z
      .array(
        z
          .string()
          .regex(/^[A-Za-z0-9_-]+$/)
          .min(0)
          .max(150),
      )
      .min(0)
      .max(100)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    change_description: z.string().exactOptional(),
    tags: z
      .array(z.string().min(1))
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    template_structure: z.enum(['text', 'chat']).exactOptional().openapi({ readOnly: true }),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    created_by: z.string().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: ['template'] })
  .openapi('PromptVersionPublic')

const PromptVersionPagePublicSchema = z
  .object({
    page: z.int32().exactOptional(),
    size: z.int32().exactOptional(),
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
    content: z.array(PromptVersionPublicSchema).exactOptional(),
    sortableBy: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PromptVersionPagePublic')

const PromptVersionCommitsRequestPublicSchema = z
  .object({ commits: z.array(z.string().min(1)).min(1).max(1000) })
  .openapi({ required: ['commits'] })
  .openapi('PromptVersionCommitsRequestPublic')

const PromptVersionRetrieveDetailSchema = z
  .object({
    name: z.string().min(1),
    commit: z.string().exactOptional(),
    environment: z
      .string()
      .regex(/^[A-Za-z0-9_-]+$/)
      .min(0)
      .max(150)
      .exactOptional()
      .openapi({
        description:
          'If provided, resolves to the version mapped to this environment for the prompt; mutually exclusive with commit and version_number',
      }),
    version_number: z
      .string()
      .regex(/v\d+/)
      .min(0)
      .max(10)
      .exactOptional()
      .openapi({
        description:
          'If provided, resolves to the version with this sequential number (e.g. v3); mutually exclusive with commit and environment',
      }),
    project_name: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .exactOptional()
      .openapi({
        description:
          'If provided, scopes the search to the specified project; prompts belonging to other projects are never matched, and an unknown project name returns 404. Legacy prompts that are not scoped to any project are still matched as a deprecated fallback, signalled by the X-Opik-Deprecation response header.',
      }),
  })
  .openapi({ required: ['name'] })
  .openapi('PromptVersionRetrieveDetail')

const PromptVersionIdsRequestDetailSchema = z
  .object({ ids: z.array(z.uuid()).min(1).max(1000) })
  .openapi({ required: ['ids'] })
  .openapi('PromptVersionIdsRequestDetail')

const PromptVersionEnvironmentUpdateSchema = z
  .object({
    environments: z
      .array(
        z
          .string()
          .regex(/^[A-Za-z0-9_-]+$/)
          .min(0)
          .max(150),
      )
      .min(0)
      .max(100)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      }),
  })
  .openapi({
    required: ['environments'],
    description:
      'Replace the full set of environments assigned to a prompt version.\nThe provided set becomes the new complete set of environments for this version.\n- Non-empty set: assigns each environment to this version; if another version of the same prompt currently owns any of those environments, ownership is moved atomically.\n- Empty set: clears all environments from this version.\nAll environments must already exist in the workspace registry; unknown names return 404.\n',
  })
  .openapi('PromptVersionEnvironmentUpdate')

const PromptUpdatableSchema = z
  .object({
    name: z.string().min(1),
    description: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .min(0)
      .max(255)
      .exactOptional(),
    tags: z
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
  .openapi({ required: ['name'] })
  .openapi('PromptUpdatable')

const PromptVersionUpdateSchema = z
  .object({
    tags: z
      .array(
        z
          .string()
          .min(0)
          .max(100)
          .openapi({
            description:
              'Tags to set or merge with existing tags. Follows PATCH semantics:\n- If merge_tags is true, these tags will be added to existing tags.\n- If merge_tags is false, these tags will replace all existing tags.\n- null: preserve existing tags (no change).\n- empty set: clear all tags when merge_tags is false.\n',
          }),
      )
      .min(0)
      .max(50)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({
        description:
          'Tags to set or merge with existing tags. Follows PATCH semantics:\n- If merge_tags is true, these tags will be added to existing tags.\n- If merge_tags is false, these tags will replace all existing tags.\n- null: preserve existing tags (no change).\n- empty set: clear all tags when merge_tags is false.\n',
      }),
  })
  .openapi({
    description:
      'Update to apply to prompt versions.\nNote: Prompt versions are immutable by design.\nOnly organizational properties (such as tags etc.) can be updated.\nCore properties like template, metadata etc. cannot be modified after creation.\n',
    required: [],
  })
  .openapi('PromptVersionUpdate')

const PromptVersionBatchUpdateSchema = z
  .object({
    ids: z
      .array(z.uuid().openapi({ description: 'IDs of prompt versions to update' }))
      .min(1)
      .max(1000)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .openapi({ description: 'IDs of prompt versions to update' }),
    update: PromptVersionUpdateSchema,
    merge_tags: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Tag merge behavior:\n- true: Add new tags to existing tags (union)\n- false: Replace all existing tags with new tags (default behaviour if not provided)\n',
      }),
  })
  .openapi({
    required: ['ids', 'update'],
    description:
      'Request to update one or more prompt versions.\nNote: Prompt versions are immutable by design - only organizational properties (such as tags etc.) can be updated.\n',
  })
  .openapi('PromptVersionBatchUpdate')

const RecentActivityItemPublicSchema = z
  .object({
    type: z
      .enum([
        'trace_daily',
        'experiment',
        'dataset_version',
        'test_suite_version',
        'alert_event',
        'optimization',
        'prompt_version',
      ])
      .exactOptional(),
    id: z.uuid().exactOptional(),
    name: z.string().exactOptional(),
    resource_id: z.uuid().exactOptional(),
    created_by: z.string().exactOptional(),
    created_at: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RecentActivityItemPublic')

const RecentActivityPagePublicSchema = z
  .object({
    page: z.int32().exactOptional(),
    size: z.int32().exactOptional(),
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
    content: z.array(RecentActivityItemPublicSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RecentActivityPagePublic')

const ReportFailureSchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ readOnly: true }),
    type: z.literal('agent_insights'),
    project_id: z.uuid(),
    reason: z.string().min(0).max(255),
    detail: z.string().exactOptional(),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    created_by: z.string().exactOptional().openapi({ readOnly: true }),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    last_updated_by: z.string().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: ['project_id', 'reason', 'type'] })
  .openapi('ReportFailure')

const ReportFailurePageSchema = z
  .object({
    page: z.int32().exactOptional(),
    size: z.int32().exactOptional(),
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
    content: z.array(ReportFailureSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReportFailurePage')

const ReportCompleteRequestSchema = z
  .object({
    content: z.string().exactOptional(),
    status: z.enum(['pending', 'completed', 'failed']),
    session_id: z.string().exactOptional(),
    recommended_actions: JsonNodeSchema.exactOptional(),
    failure_reason: z
      .string()
      .min(0)
      .max(64)
      .exactOptional()
      .openapi({
        description:
          "Why the report failed. Only 'out_of_credits' is acted on; any other value is recorded but renders as a generic failure.",
      }),
  })
  .openapi({ required: ['status'] })
  .openapi('ReportCompleteRequest')

const GenerateReportResponseSchema = z
  .object({ reportId: z.uuid().exactOptional() })
  .openapi({ description: 'Response for report generation trigger', required: [] })
  .openapi('GenerateReportResponse')

const ReportPreferenceSchema = z
  .object({
    project_id: z.uuid().exactOptional(),
    enabled: z.boolean().exactOptional(),
    schedule_time: z
      .string()
      .regex(/\d{2}:\d{2}:\d{2}/)
      .exactOptional(),
    custom_prompt: z.string().min(0).max(5000).exactOptional(),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('ReportPreference')

const OllieReportSchema = z
  .object({
    id: z.uuid().exactOptional(),
    project_id: z.uuid().exactOptional(),
    session_id: z.string().exactOptional(),
    content: z.string().exactOptional(),
    recommended_actions: JsonNodeSchema.exactOptional(),
    status: z.enum(['pending', 'completed', 'failed']).exactOptional(),
    failure_reason: z.string().exactOptional(),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('OllieReport')

const OllieReportPageSchema = z
  .object({
    page: z.int32().exactOptional(),
    size: z.int32().exactOptional(),
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
    content: z.array(OllieReportSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OllieReportPage')

const RetentionRulePublicSchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ readOnly: true }),
    workspace_id: z.string().exactOptional().openapi({ readOnly: true }),
    project_id: z.uuid().exactOptional(),
    level: z
      .enum(['organization', 'workspace', 'project'])
      .exactOptional()
      .openapi({ description: 'Computed from projectId and organizationLevel', readOnly: true }),
    retention: z.enum(['short_14d', 'base_60d', 'extended_400d', 'unlimited']),
    apply_to_past: z.boolean().exactOptional(),
    enabled: z.boolean().exactOptional().openapi({ readOnly: true }),
    created_by: z.string().exactOptional().openapi({ readOnly: true }),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    last_updated_by: z.string().exactOptional().openapi({ readOnly: true }),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    catch_up_cursor: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Current position of historical data cleanup', readOnly: true }),
    catch_up_done: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether historical catch-up is complete', readOnly: true }),
  })
  .openapi({ required: ['retention'] })
  .openapi('RetentionRulePublic')

const RetentionRuleWriteSchema = z
  .object({
    project_id: z.uuid().exactOptional(),
    organization_level: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Set to true to create an organization-level rule',
        writeOnly: true,
      }),
    retention: z.enum(['short_14d', 'base_60d', 'extended_400d', 'unlimited']),
    apply_to_past: z.boolean().exactOptional(),
  })
  .openapi({ required: ['retention'] })
  .openapi('RetentionRuleWrite')

const RetentionRulePagePublicSchema = z
  .object({
    content: z.array(RetentionRulePublicSchema).exactOptional(),
    page: z.int32().exactOptional(),
    size: z.int32().exactOptional(),
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
  .openapi({ required: [] })
  .openapi('RetentionRulePagePublic')

const ServiceTogglesConfigSchema = z
  .object({
    pythonEvaluatorEnabled: z.boolean(),
    traceThreadPythonEvaluatorEnabled: z.boolean(),
    spanLlmAsJudgeEnabled: z.boolean(),
    spanUserDefinedMetricPythonEnabled: z.boolean(),
    guardrailsEnabled: z.boolean(),
    opikAIEnabled: z.boolean(),
    alertsEnabled: z.boolean(),
    welcomeWizardEnabled: z.boolean(),
    exportEnabled: z.boolean(),
    costIntelligenceEnabled: z.boolean(),
    datasetVersioningEnabled: z.boolean(),
    datasetExportEnabled: z.boolean(),
    demoDataEnabled: z.boolean(),
    openaiProviderEnabled: z.boolean(),
    anthropicProviderEnabled: z.boolean(),
    geminiProviderEnabled: z.boolean(),
    openrouterProviderEnabled: z.boolean(),
    vertexaiProviderEnabled: z.boolean(),
    bedrockProviderEnabled: z.boolean(),
    customllmProviderEnabled: z.boolean(),
    ollamaProviderEnabled: z.boolean(),
    ollieEnabled: z.boolean(),
    agentInsightsEnabled: z.boolean(),
    agentInsightsGuidanceEnabled: z.boolean(),
    projectHomepageEnabled: z.boolean(),
    onlineScoringTracingEnabled: z.boolean(),
    annotationQueueAutomationEnabled: z.boolean(),
    eventBridgeAlertsEnabled: z.boolean(),
    defaultPageSize: z.int32().min(5).max(100).exactOptional(),
    customChartsEnabledForWorkspace: z.boolean().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({
    required: [
      'agentInsightsEnabled',
      'agentInsightsGuidanceEnabled',
      'alertsEnabled',
      'annotationQueueAutomationEnabled',
      'anthropicProviderEnabled',
      'bedrockProviderEnabled',
      'costIntelligenceEnabled',
      'customllmProviderEnabled',
      'datasetExportEnabled',
      'datasetVersioningEnabled',
      'demoDataEnabled',
      'eventBridgeAlertsEnabled',
      'exportEnabled',
      'geminiProviderEnabled',
      'guardrailsEnabled',
      'ollamaProviderEnabled',
      'ollieEnabled',
      'onlineScoringTracingEnabled',
      'openaiProviderEnabled',
      'openrouterProviderEnabled',
      'opikAIEnabled',
      'projectHomepageEnabled',
      'pythonEvaluatorEnabled',
      'spanLlmAsJudgeEnabled',
      'spanUserDefinedMetricPythonEnabled',
      'traceThreadPythonEvaluatorEnabled',
      'vertexaiProviderEnabled',
      'welcomeWizardEnabled',
    ],
  })
  .openapi('ServiceTogglesConfig')

const SpanUpdateSchema = z
  .object({
    project_name: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .exactOptional()
      .openapi({ description: 'If null and project_id not specified, Default Project is assumed' }),
    project_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'If null and project_name not specified, Default Project is assumed',
      }),
    trace_id: z.uuid(),
    parent_span_id: z.uuid().exactOptional(),
    name: z.string().exactOptional(),
    type: z.enum(['general', 'tool', 'llm', 'guardrail']).exactOptional(),
    end_time: z.iso.datetime({ offset: true }).exactOptional(),
    input: JsonListStringSchema.exactOptional(),
    output: JsonListStringSchema.exactOptional(),
    metadata: JsonListStringSchema.exactOptional(),
    model: z.string().exactOptional(),
    provider: z.string().exactOptional(),
    tags: z
      .array(z.string().min(0).max(100).openapi({ description: 'Tags' }))
      .min(0)
      .max(50)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({ description: 'Tags' }),
    tags_to_add: z
      .array(z.string().min(0).max(100).openapi({ description: 'Tags to add' }))
      .min(0)
      .max(50)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({ description: 'Tags to add' }),
    tags_to_remove: z
      .array(z.string().min(0).max(100).openapi({ description: 'Tags to remove' }))
      .min(0)
      .max(50)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({ description: 'Tags to remove' }),
    usage: z.record(z.string(), z.int32()).exactOptional(),
    total_estimated_cost: z.number().nonnegative().exactOptional(),
    error_info: ErrorInfoSchema.exactOptional(),
    ttft: z.float64().exactOptional(),
    source: z
      .enum(['sdk', 'experiment', 'playground', 'optimization', 'evaluator'])
      .exactOptional(),
    environment: z.string().min(0).max(150).exactOptional(),
  })
  .openapi({ required: ['trace_id'] })
  .openapi('SpanUpdate')

const SpanBatchUpdateSchema = z
  .object({
    ids: z
      .array(z.uuid().openapi({ description: 'List of span IDs to update (max 1000)' }))
      .min(1)
      .max(1000)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .openapi({ description: 'List of span IDs to update (max 1000)' }),
    update: SpanUpdateSchema,
    merge_tags: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, merge tags with existing tags instead of replacing them. Default: false',
      }),
  })
  .openapi({ required: ['ids', 'update'], description: 'Request to batch update multiple spans' })
  .openapi('SpanBatchUpdate')

const SpanWriteSchema = z
  .object({
    id: z.uuid().exactOptional(),
    project_name: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .exactOptional()
      .openapi({ description: 'If null, the default project is used' }),
    trace_id: z.uuid().exactOptional(),
    parent_span_id: z.uuid().exactOptional(),
    name: z.string().exactOptional(),
    type: z.enum(['general', 'tool', 'llm', 'guardrail']).exactOptional(),
    start_time: z.iso.datetime({ offset: true }),
    end_time: z.iso.datetime({ offset: true }).exactOptional(),
    input: JsonListStringWriteSchema.exactOptional(),
    output: JsonListStringWriteSchema.exactOptional(),
    metadata: JsonListStringWriteSchema.exactOptional(),
    model: z.string().exactOptional(),
    provider: z.string().exactOptional(),
    tags: z
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
    usage: z.record(z.string(), z.int32()).exactOptional(),
    error_info: ErrorInfoWriteSchema.exactOptional(),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional(),
    total_estimated_cost: z.number().nonnegative().exactOptional(),
    total_estimated_cost_version: z.string().exactOptional(),
    ttft: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Time to first token in milliseconds' }),
    source: z
      .enum(['sdk', 'experiment', 'playground', 'optimization', 'evaluator'])
      .exactOptional(),
    environment: z.string().min(0).max(150).exactOptional(),
  })
  .openapi({ required: ['start_time'] })
  .openapi('SpanWrite')

const SpanBatchSchema = z
  .object({ spans: z.array(SpanSchema).min(1).max(1000) })
  .openapi({ required: ['spans'] })
  .openapi('SpanBatch')

const SpanBatchWriteSchema = z
  .object({ spans: z.array(SpanWriteSchema).min(1).max(1000) })
  .openapi({ required: ['spans'] })
  .openapi('SpanBatchWrite')

const DeleteFeedbackScoreSchema = z
  .object({
    name: z.string().min(1),
    author: z.string().exactOptional(),
    source_queue_id: z.uuid().exactOptional(),
  })
  .openapi({ required: ['name'] })
  .openapi('DeleteFeedbackScore')

const ValueEntryPublicSchema = z
  .object({
    value: z.number().exactOptional(),
    reason: z.string().exactOptional(),
    category_name: z.string().exactOptional(),
    source: z.enum(['ui', 'sdk', 'online_scoring']).exactOptional(),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional(),
    span_type: z.string().exactOptional(),
    span_id: z.string().exactOptional(),
    source_queue_id: z.string().exactOptional(),
    author: z.string().exactOptional(),
  })
  .openapi({ readOnly: true, required: [] })
  .openapi('ValueEntryPublic')

const FeedbackScorePublicSchema = z
  .object({
    name: z.string().min(1),
    category_name: z.string().exactOptional(),
    value: z.number().min(-1000000000).max(1000000000),
    reason: z.string().exactOptional(),
    source: z.enum(['ui', 'sdk', 'online_scoring']),
    source_queue_id: z.uuid().exactOptional(),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    created_by: z.string().exactOptional().openapi({ readOnly: true }),
    last_updated_by: z.string().exactOptional().openapi({ readOnly: true }),
    value_by_author: z
      .record(z.string(), ValueEntryPublicSchema)
      .exactOptional()
      .openapi({ readOnly: true }),
  })
  .openapi({
    required: ['name', 'source', 'value'],
    description: 'Aggregated feedback scores from all spans in this trace, averaged by score name',
    readOnly: true,
  })
  .openapi('FeedbackScorePublic')

const SpanPublicSchema = z
  .object({
    id: z.uuid().exactOptional(),
    project_name: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .exactOptional()
      .openapi({ description: 'If null, the default project is used' }),
    project_id: z.uuid().exactOptional().openapi({ readOnly: true }),
    trace_id: z.uuid().exactOptional(),
    parent_span_id: z.uuid().exactOptional(),
    name: z.string().exactOptional(),
    type: z.enum(['general', 'tool', 'llm', 'guardrail']).exactOptional(),
    start_time: z.iso.datetime({ offset: true }),
    end_time: z.iso.datetime({ offset: true }).exactOptional(),
    input: JsonListStringPublicSchema.exactOptional(),
    output: JsonListStringPublicSchema.exactOptional(),
    metadata: JsonListStringPublicSchema.exactOptional(),
    model: z.string().exactOptional(),
    provider: z.string().exactOptional(),
    tags: z
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
    usage: z.record(z.string(), z.int32()).exactOptional(),
    error_info: ErrorInfoPublicSchema.exactOptional(),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional(),
    created_by: z.string().exactOptional().openapi({ readOnly: true }),
    last_updated_by: z.string().exactOptional().openapi({ readOnly: true }),
    feedback_scores: z.array(FeedbackScorePublicSchema).exactOptional().openapi({ readOnly: true }),
    comments: z.array(CommentPublicSchema).exactOptional().openapi({ readOnly: true }),
    total_estimated_cost: z.number().nonnegative().exactOptional(),
    total_estimated_cost_version: z.string().exactOptional(),
    duration: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Duration in milliseconds as a decimal number to support sub-millisecond precision',
        readOnly: true,
      }),
    ttft: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Time to first token in milliseconds' }),
    source: z
      .enum(['sdk', 'experiment', 'playground', 'optimization', 'evaluator'])
      .exactOptional(),
    environment: z.string().min(0).max(150).exactOptional(),
  })
  .openapi({ required: ['start_time'] })
  .openapi('SpanPublic')

const SpanPagePublicSchema = z
  .object({
    page: z.int32().exactOptional(),
    size: z.int32().exactOptional(),
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
    content: z.array(SpanPublicSchema).exactOptional(),
    sortableBy: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SpanPagePublic')

const FeedbackScoreBatchItemSchema = z
  .object({
    project_name: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .exactOptional()
      .openapi({ description: 'If null, the default project is used' }),
    project_id: z.uuid().exactOptional(),
    name: z.string().min(1),
    category_name: z.string().exactOptional(),
    value: z.number().min(-1000000000).max(1000000000),
    reason: z.string().exactOptional(),
    source: z.enum(['ui', 'sdk', 'online_scoring']),
    author: z.string().exactOptional(),
    source_queue_id: z.uuid().exactOptional(),
    id: z.uuid(),
  })
  .openapi({ required: ['id', 'name', 'source', 'value'] })
  .openapi('FeedbackScoreBatchItem')

const FeedbackScoreBatchSchema = z
  .object({ scores: z.array(FeedbackScoreBatchItemSchema).min(1).max(1000) })
  .openapi({ required: ['scores'] })
  .openapi('FeedbackScoreBatch')

const SpanSearchStreamRequestPublicSchema = z
  .object({
    trace_id: z.uuid().exactOptional(),
    project_name: z.string().exactOptional(),
    project_id: z.uuid().exactOptional(),
    type: z.enum(['general', 'tool', 'llm', 'guardrail']).exactOptional(),
    filters: z.array(SpanFilterPublicSchema).exactOptional(),
    limit: z
      .int32()
      .min(1)
      .max(2000)
      .default(500)
      .exactOptional()
      .openapi({ description: 'Max number of spans to be streamed' }),
    last_retrieved_id: z.uuid().exactOptional(),
    truncate: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'Truncate image included in either input, output or metadata' }),
    exclude: z
      .array(
        z
          .enum([
            'name',
            'type',
            'start_time',
            'end_time',
            'input',
            'output',
            'metadata',
            'model',
            'provider',
            'tags',
            'usage',
            'error_info',
            'created_at',
            'created_by',
            'last_updated_by',
            'feedback_scores',
            'comments',
            'total_estimated_cost',
            'total_estimated_cost_version',
            'duration',
            'ttft',
            'source',
            'environment',
          ])
          .openapi({ description: 'Fields to exclude from the response' }),
      )
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({ description: 'Fields to exclude from the response' }),
    from_time: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Filter spans created from this time (ISO-8601 format).' }),
    to_time: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          "Filter spans created up to this time (ISO-8601 format). If not provided, defaults to current time. Must be after 'from_time'.",
      }),
  })
  .openapi({ required: [] })
  .openapi('SpanSearchStreamRequestPublic')

const ExistenceResponseSchema = z
  .object({
    exists: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether the project has at least one matching entity for the given scope',
      }),
  })
  .openapi({ required: [] })
  .openapi('ExistenceResponse')

const TraceUpdateSchema = z
  .object({
    project_name: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .exactOptional()
      .openapi({ description: 'If null and project_id not specified, Default Project is assumed' }),
    project_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'If null and project_name not specified, Default Project is assumed',
      }),
    name: z.string().exactOptional(),
    end_time: z.iso.datetime({ offset: true }).exactOptional(),
    input: JsonListStringSchema.exactOptional(),
    output: JsonListStringSchema.exactOptional(),
    metadata: JsonListStringSchema.exactOptional(),
    tags: z
      .array(z.string().min(0).max(100).openapi({ description: 'Tags' }))
      .min(0)
      .max(50)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({ description: 'Tags' }),
    tags_to_add: z
      .array(z.string().min(0).max(100).openapi({ description: 'Tags to add' }))
      .min(0)
      .max(50)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({ description: 'Tags to add' }),
    tags_to_remove: z
      .array(z.string().min(0).max(100).openapi({ description: 'Tags to remove' }))
      .min(0)
      .max(50)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({ description: 'Tags to remove' }),
    error_info: ErrorInfoSchema.exactOptional(),
    thread_id: z.string().exactOptional(),
    ttft: z.float64().exactOptional(),
    source: z
      .enum(['sdk', 'experiment', 'playground', 'optimization', 'evaluator'])
      .exactOptional(),
    environment: z.string().min(0).max(150).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TraceUpdate')

const TraceBatchUpdateSchema = z
  .object({
    ids: z
      .array(z.uuid().openapi({ description: 'List of trace IDs to update (max 1000)' }))
      .min(1)
      .max(1000)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .openapi({ description: 'List of trace IDs to update (max 1000)' }),
    update: TraceUpdateSchema,
    merge_tags: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, merge tags with existing tags instead of replacing them. Default: false',
      }),
  })
  .openapi({ required: ['ids', 'update'], description: 'Request to batch update multiple traces' })
  .openapi('TraceBatchUpdate')

const TraceThreadUpdateSchema = z
  .object({
    tags: z
      .array(z.string().min(0).max(100))
      .min(0)
      .max(50)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    tags_to_add: z
      .array(z.string().min(0).max(100))
      .min(0)
      .max(50)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    tags_to_remove: z
      .array(z.string().min(0).max(100))
      .min(0)
      .max(50)
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
  .openapi('TraceThreadUpdate')

const TraceThreadBatchUpdateSchema = z
  .object({
    ids: z
      .array(z.uuid().openapi({ description: 'List of thread model IDs to update (max 1000)' }))
      .min(1)
      .max(1000)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .openapi({ description: 'List of thread model IDs to update (max 1000)' }),
    update: TraceThreadUpdateSchema,
    merge_tags: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, merge tags with existing tags instead of replacing them. Default: false',
      }),
  })
  .openapi({
    required: ['ids', 'update'],
    description: 'Request to batch update multiple trace threads',
  })
  .openapi('TraceThreadBatchUpdate')

const TraceThreadBatchIdentifierSchema = z
  .object({
    project_name: z.string().exactOptional(),
    project_id: z.uuid().exactOptional(),
    thread_id: z.string().exactOptional(),
    thread_ids: z
      .array(z.string().min(1))
      .min(1)
      .max(1000)
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
  .openapi('TraceThreadBatchIdentifier')

const TraceWriteSchema = z
  .object({
    id: z.uuid().exactOptional(),
    project_name: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .exactOptional()
      .openapi({ description: 'If null, the default project is used' }),
    name: z.string().exactOptional(),
    start_time: z.iso.datetime({ offset: true }),
    end_time: z.iso.datetime({ offset: true }).exactOptional(),
    input: JsonListStringWriteSchema.exactOptional(),
    output: JsonListStringWriteSchema.exactOptional(),
    metadata: JsonListStringWriteSchema.exactOptional(),
    tags: z
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
    error_info: ErrorInfoWriteSchema.exactOptional(),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional(),
    ttft: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Time to first token in milliseconds' }),
    thread_id: z.string().exactOptional(),
    source: z
      .enum(['sdk', 'experiment', 'playground', 'optimization', 'evaluator'])
      .exactOptional(),
    environment: z.string().min(0).max(150).exactOptional(),
  })
  .openapi({ required: ['start_time'] })
  .openapi('TraceWrite')

const TraceBatchSchema = z
  .object({ traces: z.array(TraceSchema).min(1).max(1000) })
  .openapi({ required: ['traces'] })
  .openapi('TraceBatch')

const TraceBatchWriteSchema = z
  .object({ traces: z.array(TraceWriteSchema).min(1).max(1000) })
  .openapi({ required: ['traces'] })
  .openapi('TraceBatchWrite')

const DeleteThreadFeedbackScoresSchema = z
  .object({
    project_name: z.string().min(1),
    thread_id: z.string().min(1),
    names: z
      .array(z.string().min(1))
      .min(1)
      .max(1000)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      }),
    author: z.string().exactOptional(),
    source_queue_id: z.uuid().exactOptional(),
  })
  .openapi({ required: ['names', 'project_name', 'thread_id'] })
  .openapi('DeleteThreadFeedbackScores')

const DeleteTraceThreadsSchema = z
  .object({
    project_name: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .exactOptional()
      .openapi({ description: 'If null, project_id must be provided' }),
    project_id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'If null, project_name must be provided' }),
    thread_ids: z.array(z.string().min(1)).min(1).max(1000),
  })
  .openapi({ required: ['thread_ids'] })
  .openapi('DeleteTraceThreads')

const BatchDeleteByProjectSchema = z
  .object({
    ids: z
      .array(z.uuid().openapi({ description: 'Ids of the traces to delete' }))
      .min(1)
      .max(1000)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .openapi({ description: 'Ids of the traces to delete' }),
    project_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          "Optional. Scopes the deletion to this project. When omitted, each trace's owning project is resolved automatically and the trace is deleted under its full key, so a trace can be deleted without knowing its project.",
      }),
  })
  .openapi({ required: ['ids'] })
  .openapi('BatchDeleteByProject')

const AnnotationQueueReferencePublicSchema = z
  .object({
    id: z.uuid().openapi({ description: 'Annotation queue ID' }),
    name: z.string().openapi({ description: 'Annotation queue name' }),
  })
  .openapi({
    required: ['id', 'name'],
    description: 'Annotation queue reference with ID and name',
    readOnly: true,
  })
  .openapi('AnnotationQueueReferencePublic')

const CheckPublicSchema = z
  .object({
    name: z
      .enum(['TOPIC', 'PII', 'LLM_JUDGE', 'PROMPT_INJECTION', 'CUSTOM_CLASSIFIER'])
      .exactOptional(),
    result: z.enum(['passed', 'failed']).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CheckPublic')

const ExperimentItemReferencePublicSchema = z
  .object({
    id: z.uuid().openapi({ description: 'Experiment ID' }),
    name: z.string().openapi({ description: 'Experiment name' }),
    dataset_id: z.uuid().openapi({ description: 'Dataset ID' }),
    dataset_item_id: z.uuid().openapi({ description: 'Dataset Item ID' }),
  })
  .openapi({
    required: ['dataset_id', 'dataset_item_id', 'id', 'name'],
    description: 'Experiment reference with ID, name, dataset ID, and dataset item ID',
    readOnly: true,
  })
  .openapi('ExperimentItemReferencePublic')

const GuardrailsValidationPublicSchema = z
  .object({ span_id: z.uuid().exactOptional(), checks: z.array(CheckPublicSchema).exactOptional() })
  .openapi({ readOnly: true, required: [] })
  .openapi('GuardrailsValidationPublic')

const TracePublicSchema = z
  .object({
    id: z.uuid().exactOptional(),
    project_id: z.uuid().exactOptional().openapi({ readOnly: true }),
    name: z.string().exactOptional(),
    start_time: z.iso.datetime({ offset: true }),
    end_time: z.iso.datetime({ offset: true }).exactOptional(),
    input: JsonListStringPublicSchema.exactOptional(),
    output: JsonListStringPublicSchema.exactOptional(),
    metadata: JsonListStringPublicSchema.exactOptional(),
    tags: z
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
    error_info: ErrorInfoPublicSchema.exactOptional(),
    usage: z
      .record(
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
          .openapi({ type: 'integer', format: 'int64', readOnly: true }),
      )
      .exactOptional()
      .openapi({ readOnly: true }),
    created_at: z.iso.datetime({ offset: true }).exactOptional().openapi({ readOnly: true }),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional(),
    created_by: z.string().exactOptional().openapi({ readOnly: true }),
    last_updated_by: z.string().exactOptional().openapi({ readOnly: true }),
    feedback_scores: z.array(FeedbackScorePublicSchema).exactOptional().openapi({ readOnly: true }),
    span_feedback_scores: z
      .array(FeedbackScorePublicSchema)
      .exactOptional()
      .openapi({
        description:
          'Aggregated feedback scores from all spans in this trace, averaged by score name',
        readOnly: true,
      }),
    comments: z.array(CommentPublicSchema).exactOptional().openapi({ readOnly: true }),
    guardrails_validations: z
      .array(GuardrailsValidationPublicSchema)
      .exactOptional()
      .openapi({ readOnly: true }),
    total_estimated_cost: z.number().exactOptional().openapi({ readOnly: true }),
    span_count: z.int32().exactOptional().openapi({ readOnly: true }),
    duration: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Duration in milliseconds as a decimal number to support sub-millisecond precision',
        readOnly: true,
      }),
    ttft: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Time to first token in milliseconds' }),
    thread_id: z.string().exactOptional(),
    visibility_mode: z.enum(['default', 'hidden']).exactOptional().openapi({ readOnly: true }),
    llm_span_count: z.int32().exactOptional().openapi({ readOnly: true }),
    has_tool_spans: z.boolean().exactOptional().openapi({ readOnly: true }),
    providers: z
      .array(
        z
          .string()
          .openapi({
            description:
              'List of unique provider names from all spans in this trace, sorted alphabetically',
            readOnly: true,
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'List of unique provider names from all spans in this trace, sorted alphabetically',
        readOnly: true,
      }),
    experiment: ExperimentItemReferencePublicSchema.exactOptional(),
    annotation_queues: z
      .array(AnnotationQueueReferencePublicSchema)
      .exactOptional()
      .openapi({
        description: 'Annotation queues this trace is currently an item of',
        readOnly: true,
      }),
    source: z
      .enum(['sdk', 'experiment', 'playground', 'optimization', 'evaluator'])
      .exactOptional(),
    environment: z.string().min(0).max(150).exactOptional(),
  })
  .openapi({ required: ['start_time'] })
  .openapi('TracePublic')

const TraceThreadSchema = z
  .object({
    id: z.string().exactOptional(),
    project_id: z.uuid().exactOptional(),
    thread_model_id: z.uuid().exactOptional(),
    start_time: z.iso.datetime({ offset: true }).exactOptional(),
    end_time: z.iso.datetime({ offset: true }).exactOptional(),
    duration: z.float64().exactOptional(),
    first_message: JsonListStringSchema.exactOptional(),
    last_message: JsonListStringSchema.exactOptional(),
    feedback_scores: z.array(FeedbackScoreSchema).exactOptional(),
    status: z.enum(['active', 'inactive']).exactOptional(),
    number_of_messages: z
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
    total_estimated_cost: z.number().exactOptional(),
    usage: z
      .record(
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
      )
      .exactOptional(),
    comments: z.array(CommentSchema).exactOptional(),
    tags: z
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
    annotation_queues: z
      .array(AnnotationQueueReferenceSchema)
      .exactOptional()
      .openapi({
        description: 'Annotation queues this thread is currently an item of',
        readOnly: true,
      }),
    last_updated_at: z.iso.datetime({ offset: true }).exactOptional(),
    last_updated_by: z.string().exactOptional(),
    created_by: z.string().exactOptional(),
    created_at: z.iso.datetime({ offset: true }).exactOptional(),
    environment: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TraceThread')

const TraceThreadIdentifierSchema = z
  .object({
    project_name: z.string().exactOptional(),
    project_id: z.uuid().exactOptional(),
    thread_id: z.string().min(1),
    truncate: z.boolean().exactOptional(),
  })
  .openapi({ required: ['thread_id'] })
  .openapi('TraceThreadIdentifier')

const TraceThreadPageSchema = z
  .object({
    page: z.int32().exactOptional(),
    size: z.int32().exactOptional(),
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
    content: z.array(TraceThreadSchema).exactOptional(),
    sortableBy: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TraceThreadPage')

const TracePagePublicSchema = z
  .object({
    page: z.int32().exactOptional(),
    size: z.int32().exactOptional(),
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
    content: z.array(TracePublicSchema).exactOptional(),
    sortableBy: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TracePagePublic')

const FeedbackScoreBatchItemThreadSchema = z
  .object({
    project_name: z
      .string()
      .regex(/^\s*(\S.*\S|\S)\s*$/s)
      .exactOptional()
      .openapi({ description: 'If null, the default project is used' }),
    project_id: z.uuid().exactOptional(),
    name: z.string().min(1),
    category_name: z.string().exactOptional(),
    value: z.number().min(-1000000000).max(1000000000),
    reason: z.string().exactOptional(),
    source: z.enum(['ui', 'sdk', 'online_scoring']),
    author: z.string().exactOptional(),
    source_queue_id: z.uuid().exactOptional(),
    thread_id: z.string().min(1),
  })
  .openapi({ required: ['name', 'source', 'thread_id', 'value'] })
  .openapi('FeedbackScoreBatchItemThread')

const FeedbackScoreBatchThreadSchema = z
  .object({ scores: z.array(FeedbackScoreBatchItemThreadSchema).min(1).max(1000) })
  .openapi({ required: ['scores'] })
  .openapi('FeedbackScoreBatchThread')

const TraceThreadSearchStreamRequestSchema = z
  .object({
    project_name: z.string().exactOptional(),
    project_id: z.uuid().exactOptional(),
    filters: z.array(TraceThreadFilterSchema).exactOptional(),
    last_retrieved_thread_model_id: z.uuid().exactOptional(),
    limit: z
      .int32()
      .min(1)
      .max(2000)
      .default(500)
      .exactOptional()
      .openapi({ description: 'Max number of trace thread to be streamed' }),
    truncate: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'Truncate input, output and metadata to slim payloads' }),
    strip_attachments: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'If true, returns attachment references like [file.png]; if false, downloads and reinjects stripped attachments',
      }),
    from_time: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Filter trace threads created from this time (ISO-8601 format).' }),
    to_time: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          "Filter trace threads created up to this time (ISO-8601 format). If not provided, defaults to current time. Must be after 'from_time'.",
      }),
  })
  .openapi({ required: [] })
  .openapi('TraceThreadSearchStreamRequest')

const TraceSearchStreamRequestPublicSchema = z
  .object({
    project_name: z.string().exactOptional(),
    project_id: z.uuid().exactOptional(),
    filters: z.array(TraceFilterPublicSchema).exactOptional(),
    last_retrieved_id: z.uuid().exactOptional(),
    limit: z
      .int32()
      .min(1)
      .max(2000)
      .default(500)
      .exactOptional()
      .openapi({ description: 'Max number of traces to be streamed' }),
    truncate: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'Truncate input, output and metadata to slim payloads' }),
    strip_attachments: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'If true, returns attachment references like [file.png]; if false, downloads and reinjects stripped attachments',
      }),
    exclude: z
      .array(
        z
          .enum([
            'name',
            'start_time',
            'end_time',
            'input',
            'output',
            'metadata',
            'tags',
            'error_info',
            'usage',
            'created_at',
            'created_by',
            'last_updated_by',
            'feedback_scores',
            'span_feedback_scores',
            'comments',
            'guardrails_validations',
            'total_estimated_cost',
            'span_count',
            'llm_span_count',
            'has_tool_spans',
            'duration',
            'ttft',
            'thread_id',
            'visibility_mode',
            'providers',
            'experiment',
            'annotation_queues',
            'source',
            'environment',
          ])
          .openapi({ description: 'Fields to exclude from the response' }),
      )
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({ description: 'Fields to exclude from the response' }),
    from_time: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Filter traces created from this time (ISO-8601 format).' }),
    to_time: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          "Filter traces created up to this time (ISO-8601 format). If not provided, defaults to current time. Must be after 'from_time'.",
      }),
  })
  .openapi({ required: [] })
  .openapi('TraceSearchStreamRequestPublic')

const WelcomeWizardTrackingSchema = z
  .object({
    completed: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the welcome wizard has been completed' }),
  })
  .openapi({ required: [] })
  .openapi('WelcomeWizardTracking')

const WelcomeWizardSubmissionSchema = z
  .object({
    role: z.string().min(0).max(100).exactOptional().openapi({ description: 'Optional user role' }),
    integrations: z
      .array(z.string().openapi({ description: 'List of integrations the user selected' }))
      .exactOptional()
      .openapi({ description: 'List of integrations the user selected' }),
    email: z
      .email()
      .min(0)
      .max(255)
      .exactOptional()
      .openapi({ description: 'Optional user email' }),
    join_beta_program: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether user wants to join beta programs' }),
  })
  .openapi({ required: [] })
  .openapi('WelcomeWizardSubmission')

const PermissionSchema = z
  .object({
    permissionName: z.string().exactOptional(),
    permissionValue: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Permission')

const WorkspaceUserPermissionsSchema = z
  .object({
    userName: z.string().exactOptional(),
    workspaceName: z.string().exactOptional(),
    permissions: z.array(PermissionSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('WorkspaceUserPermissions')

const WorkspaceMetricsSummaryRequestSchema = z
  .object({
    project_ids: z
      .array(z.uuid())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    interval_start: z.iso.datetime({ offset: true }),
    interval_end: z.iso.datetime({ offset: true }),
    start_before_end: z.boolean().exactOptional(),
  })
  .openapi({ required: ['interval_end', 'interval_start'] })
  .openapi('WorkspaceMetricsSummaryRequest')

const DataPointDoubleSchema = z
  .object({ time: z.iso.datetime({ offset: true }), value: z.float64().exactOptional() })
  .openapi({ required: ['time'] })
  .openapi('DataPointDouble')

const WorkspaceMetricResponseSchema = z
  .object({ results: z.array(ResultSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('WorkspaceMetricResponse')

const WorkspaceMetricRequestSchema = z
  .object({
    project_ids: z
      .array(z.uuid())
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
    interval_start: z.iso.datetime({ offset: true }),
    interval_end: z.iso.datetime({ offset: true }),
    start_before_end: z.boolean().exactOptional(),
  })
  .openapi({ required: ['interval_end', 'interval_start'] })
  .openapi('WorkspaceMetricRequest')

const WorkspaceConfigurationSchema = z
  .object({
    timeout_to_mark_thread_as_inactive: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Duration in ISO-8601 format (e.g., PT30M for 30 minutes, PT2H for 2 hours, P1D for 1 day). Minimum precision supported is seconds, please use a duration with seconds precision or higher. Also, the max duration allowed is 7 days.',
      }),
    truncation_on_tables: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Enable or disable data truncation in table views. When disabled, the frontend will limit pagination to prevent performance issues. Default: true (truncation enabled).',
        example: true,
      }),
    color_map: z
      .record(
        z.string(),
        z
          .string()
          .openapi({
            description:
              'Workspace-level color map. Maps label names to hex color values (e.g. #FF0000). Max 10000 entries.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Workspace-level color map. Maps label names to hex color values (e.g. #FF0000). Max 10000 entries.',
      }),
  })
  .openapi({ required: [] })
  .openapi('WorkspaceConfiguration')

const BreakdownConfigSchema = z
  .object({
    field: z
      .enum([
        'none',
        'tags',
        'metadata',
        'name',
        'error_info',
        'error_type',
        'model',
        'provider',
        'type',
        'guardrail_name',
      ])
      .exactOptional(),
    metadata_key: z.string().exactOptional(),
    sub_metric: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BreakdownConfig')

const WorkspaceSpanMetricRequestSchema = z
  .object({
    project_ids: z
      .array(z.uuid())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional(),
    metric_type: z
      .enum([
        'FEEDBACK_SCORES',
        'TRACE_COUNT',
        'TOKEN_USAGE',
        'DURATION',
        'COST',
        'GUARDRAILS_FAILED_COUNT',
        'THREAD_COUNT',
        'THREAD_DURATION',
        'THREAD_FEEDBACK_SCORES',
        'SPAN_FEEDBACK_SCORES',
        'SPAN_COUNT',
        'SPAN_DURATION',
        'SPAN_TOKEN_USAGE',
        'TRACE_AVERAGE_DURATION',
        'TRACE_ERROR_RATE',
        'SPAN_AVERAGE_DURATION',
        'SPAN_COST',
        'SPAN_ERROR_RATE',
        'THREAD_AVERAGE_DURATION',
        'THREAD_COST',
      ])
      .exactOptional(),
    interval: z.enum(['HOURLY', 'DAILY', 'WEEKLY', 'TOTAL']).exactOptional(),
    breakdown: BreakdownConfigSchema.exactOptional(),
    filters: z.array(SpanFilterSchema).exactOptional(),
    interval_start: z.iso.datetime({ offset: true }),
    interval_end: z.iso.datetime({ offset: true }).exactOptional(),
    start_before_end: z.boolean().exactOptional(),
  })
  .openapi({ required: ['interval_start'] })
  .openapi('WorkspaceSpanMetricRequest')

const WorkspaceTokenUsageNamesRequestSchema = z
  .object({
    project_ids: z
      .array(z.uuid())
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
  .openapi('WorkspaceTokenUsageNamesRequest')

const WorkspaceMetricsSummaryResponseSchema = z
  .object({ results: z.array(ResultSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('WorkspaceMetricsSummaryResponse')

export const getOauthAuthorizeRoute = createRoute({
  method: 'get',
  path: '/oauth/authorize',
  tags: ['MCP OAuth'],
  summary: 'OAuth Authorization Endpoint',
  description:
    'OAuth 2.1 authorization endpoint (RFC 6749 §3.1). Validates the client and PKCE parameters, then redirects to the login or consent page',
  operationId: 'authorize',
  request: {
    query: z.object({
      client_id: z
        .string()
        .min(1)
        .openapi({
          param: {
            name: 'client_id',
            in: 'query',
            required: true,
            schema: { minLength: 1, type: 'string' },
          },
        }),
      redirect_uri: z
        .string()
        .min(1)
        .openapi({
          param: {
            name: 'redirect_uri',
            in: 'query',
            required: true,
            schema: { minLength: 1, type: 'string' },
          },
        }),
      response_type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'response_type',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      code_challenge: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'code_challenge',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      code_challenge_method: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'code_challenge_method',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      resource: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'resource', in: 'query', schema: { type: 'string' }, required: false },
        }),
      state: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'state', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    302: { description: 'Redirect to login, consent, or client redirect_uri with an error' },
  },
})

export const postOauthAuthorizeRoute = createRoute({
  method: 'post',
  path: '/oauth/authorize',
  tags: ['MCP OAuth'],
  summary: 'Submit Authorization Consent',
  description:
    "Submit the user's consent, issue an authorization code, and return the client redirect target",
  operationId: 'consent',
  request: {
    body: { content: { 'application/json': { schema: ConsentRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Consent response with the client redirect target',
      content: { 'application/json': { schema: ConsentResponseSchema } },
    },
  },
})

export const getOauthAuthorizeContextRoute = createRoute({
  method: 'get',
  path: '/oauth/authorize/context',
  tags: ['MCP OAuth'],
  summary: 'Get Authorization Consent Context',
  description:
    'Get the client details, eligible workspaces, and a CSRF token used to render the consent screen',
  operationId: 'getAuthorizeContext',
  request: {
    query: z.object({
      client_id: z
        .string()
        .min(1)
        .openapi({
          param: {
            name: 'client_id',
            in: 'query',
            required: true,
            schema: { minLength: 1, type: 'string' },
          },
        }),
      redirect_uri: z
        .string()
        .min(1)
        .openapi({
          param: {
            name: 'redirect_uri',
            in: 'query',
            required: true,
            schema: { minLength: 1, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Authorization consent context',
      content: { 'application/json': { schema: AuthorizeContextSchema } },
    },
  },
})

export const getWellKnownOauthAuthorizationServerRoute = createRoute({
  method: 'get',
  path: '/.well-known/oauth-authorization-server',
  tags: ['MCP OAuth'],
  summary: 'Get OAuth Authorization Server Metadata',
  description: 'Get OAuth 2.1 Authorization Server Metadata (RFC 8414)',
  operationId: 'getOAuthAuthorizationServerMetadata',
  responses: {
    200: {
      description: 'Authorization Server Metadata',
      content: { 'application/json': { schema: AuthorizationServerMetadataSchema } },
    },
  },
})

export const postOauthRegisterRoute = createRoute({
  method: 'post',
  path: '/oauth/register',
  tags: ['MCP OAuth'],
  summary: 'OAuth Dynamic Client Registration Endpoint',
  description:
    'OAuth 2.0 Dynamic Client Registration (RFC 7591). Registers a public client for the MCP OAuth flow; throttled per source IP',
  operationId: 'registerOAuthClient',
  request: {
    body: {
      content: { 'application/json': { schema: ClientRegistrationRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Registered client metadata',
      content: { 'application/json': { schema: ClientRegistrationResponseSchema } },
    },
    429: { description: 'Registration rate limit exceeded' },
  },
})

export const postOauthRevokeRoute = createRoute({
  method: 'post',
  path: '/oauth/revoke',
  tags: ['MCP OAuth'],
  summary: 'OAuth Token Revocation Endpoint',
  description:
    'OAuth 2.0 token revocation endpoint (RFC 7009). Always returns 200, whether the token was revoked, never existed, or was invalid',
  operationId: 'revoke',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({ token: z.string().exactOptional(), client_id: z.string().exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: 'Revocation acknowledged' } },
})

export const postOauthTokenRoute = createRoute({
  method: 'post',
  path: '/oauth/token',
  tags: ['MCP OAuth'],
  summary: 'OAuth Token Endpoint',
  description:
    'OAuth 2.1 token endpoint (RFC 6749 §4.1.3, §6). Exchanges an authorization code with PKCE or a refresh token for an access/refresh token pair',
  operationId: 'token',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              grant_type: z.string().exactOptional(),
              code: z.string().exactOptional(),
              redirect_uri: z.string().exactOptional(),
              client_id: z.string().exactOptional(),
              code_verifier: z.string().exactOptional(),
              refresh_token: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Token response',
      content: { 'application/json': { schema: TokenResponseSchema } },
    },
    400: {
      description: 'OAuth error (RFC 6749 §5.2)',
      content: { 'application/json': { schema: OAuthErrorSchema } },
    },
  },
})

export const postOpikAuthOauthRoute = createRoute({
  method: 'post',
  path: '/opik/auth-oauth',
  tags: ['MCP OAuth'],
  summary: 'Validate OAuth Access Token',
  description: 'Introspects a bearer access token and returns the identity it resolves to',
  operationId: 'validateOAuthToken',
  request: {
    headers: z.object({
      Authorization: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Authorization',
            in: 'header',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Validated token identity',
      content: { 'application/json': { schema: ValidatedTokenSchema } },
    },
    401: { description: 'Missing, malformed, or unknown access token' },
  },
})

export const postV1InternalAgentInsightsEnrollmentRoute = createRoute({
  method: 'post',
  path: '/v1/internal/agent-insights/enrollment',
  tags: ['Agent Insights enrollment'],
  summary: 'Enrol projects in the auto-first-run rollout',
  description:
    'Enrols the given projects, creating their job row if needed, or clears their enrolment. Idempotent.',
  operationId: 'enrolProjectsInAutoFirstRun',
  request: { body: { content: { 'application/json': { schema: RequestSchema } }, required: true } },
  responses: {
    200: {
      description: 'Enrollment result',
      content: { 'application/json': { schema: ResponseSchema } },
    },
  },
})

export const postV1InternalAnalyticsQueriesProjectsProjectIdRoute = createRoute({
  method: 'post',
  path: '/v1/internal/analytics-queries/projects/{projectId}',
  tags: ['System analytics queries'],
  summary: 'Execute Agent Insights free-form SQL',
  description:
    "Runs Ollie-generated read-only SQL bounded to the caller's workspace and the requested project. Returns 501 when the Agent Insights toggle is off.",
  operationId: 'executeAnalyticsQuery',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            name: 'projectId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AnalyticsQueryRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Query results',
      content: { 'application/json': { schema: AnalyticsQueryResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    422: {
      description: 'Unprocessable Content',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    501: { description: 'Agent Insights queries are not enabled' },
  },
})

export const postV1InternalAnalyticsQueriesRoute = createRoute({
  method: 'post',
  path: '/v1/internal/analytics-queries',
  tags: ['System analytics queries'],
  summary: 'Execute free-form analytics SQL',
  description:
    "Runs read-only SQL bounded to the caller's workspace. Supply project_id to restrict traces, spans, feedback scores and trace threads to one project, or omit it to cover the whole workspace. Experiments, experiment items and dataset items always cover the whole workspace.",
  operationId: 'executeScopedAnalyticsQuery',
  request: {
    body: { content: { 'application/json': { schema: ScopedAnalyticsQueryRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Query results',
      content: { 'application/json': { schema: AnalyticsQueryResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    422: {
      description: 'Unprocessable Content',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    501: {
      description: 'Agent Insights is disabled, or Custom Charts is not enabled for this workspace',
    },
  },
})

export const postV1InternalDashboardSavedQueriesRoute = createRoute({
  method: 'post',
  path: '/v1/internal/dashboard-saved-queries',
  tags: ['Dashboard saved queries'],
  summary: 'Save a chart query',
  description: 'Saves the query of an Ollie chart so a dashboard widget can reference it by id.',
  operationId: 'createDashboardSavedQuery',
  request: { body: { content: { 'application/json': { schema: DashboardSavedQuerySchema } } } },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: DashboardSavedQuerySchema } },
      headers: z.object({
        Location: {
          required: true,
          example: '${basePath}/v1/internal/dashboard-saved-queries/{id}',
          style: 'simple',
          schema: z
            .string()
            .openapi({ example: '${basePath}/v1/internal/dashboard-saved-queries/{id}' }),
        },
      }),
    },
    422: {
      description: 'Unprocessable Content',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    501: { description: 'Ollie or Custom Charts is not enabled for this workspace' },
  },
})

export const getV1InternalDashboardSavedQueriesIdRoute = createRoute({
  method: 'get',
  path: '/v1/internal/dashboard-saved-queries/{id}',
  tags: ['Dashboard saved queries'],
  summary: 'Get a chart query',
  description: 'Gets a dashboard saved query by id.',
  operationId: 'getDashboardSavedQuery',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Dashboard saved query',
      content: { 'application/json': { schema: DashboardSavedQuerySchema } },
    },
    404: { description: 'Not found' },
    501: { description: 'Ollie or Custom Charts is not enabled for this workspace' },
  },
})

export const postV1InternalUsageProjectsRoute = createRoute({
  method: 'post',
  path: '/v1/internal/usage/projects',
  tags: ['System usage'],
  summary: 'Find projects across workspaces by ids or name',
  description:
    'Find projects across the given workspaces, optionally narrowed by project ids or a case-insensitive name substring. Unknown or deleted projects are omitted.',
  operationId: 'findUsageProjects',
  request: { body: { content: { 'application/json': { schema: UsageProjectsRequestSchema } } } },
  responses: {
    200: {
      description: 'UsageProjectsResponse resource',
      content: { 'application/json': { schema: UsageProjectsResponseSchema } },
    },
    422: {
      description: 'Unprocessable Content',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const getV1InternalUsageBiDatasetsRoute = createRoute({
  method: 'get',
  path: '/v1/internal/usage/bi-datasets',
  tags: ['System usage'],
  summary: 'Get datasets information for BI events',
  description: 'Get datasets information for BI events per user per workspace',
  operationId: 'getDatasetBiInfo',
  responses: {
    200: {
      description: 'Datasets BiInformationResponse resource',
      content: { 'application/json': { schema: BiInformationResponseSchema } },
    },
  },
})

export const getV1InternalUsageBiExperimentsRoute = createRoute({
  method: 'get',
  path: '/v1/internal/usage/bi-experiments',
  tags: ['System usage'],
  summary: 'Get experiments information for BI events',
  description: 'Get experiments information for BI events per user per workspace',
  operationId: 'getExperimentBiInfo',
  responses: {
    200: {
      description: 'Experiments BiInformationResponse resource',
      content: { 'application/json': { schema: BiInformationResponseSchema } },
    },
  },
})

export const getV1InternalUsageBiSpansRoute = createRoute({
  method: 'get',
  path: '/v1/internal/usage/bi-spans',
  tags: ['System usage'],
  summary: 'Get spans information for BI events',
  description: 'Get spans information for BI events per user per workspace',
  operationId: 'getSpansBiInfo',
  responses: {
    200: {
      description: 'Spans BiInformationResponse resource',
      content: { 'application/json': { schema: BiInformationResponseSchema } },
    },
  },
})

export const getV1InternalUsageWorkspaceSpanCountsBreakdownRoute = createRoute({
  method: 'get',
  path: '/v1/internal/usage/workspace-span-counts-breakdown',
  tags: ['System usage'],
  summary: 'Get spans count on previous day grouped by workspace, project and user',
  description: 'Get spans count on previous day grouped by workspace, project and user',
  operationId: 'getSpansCountBreakdownForWorkspaces',
  responses: {
    200: {
      description: 'UsageByWorkspaceProjectUserResponse resource',
      content: { 'application/json': { schema: UsageByWorkspaceProjectUserResponseSchema } },
    },
  },
})

export const getV1InternalUsageWorkspaceSpanCountsRoute = createRoute({
  method: 'get',
  path: '/v1/internal/usage/workspace-span-counts',
  tags: ['System usage'],
  summary: 'Get spans count on previous day for all available workspaces',
  description: 'Get spans count on previous day for all available workspaces',
  operationId: 'getSpansCountForWorkspaces',
  responses: {
    200: {
      description: 'SpanCountResponse resource',
      content: { 'application/json': { schema: SpansCountResponseSchema } },
    },
  },
})

export const getV1InternalUsageBiTracesRoute = createRoute({
  method: 'get',
  path: '/v1/internal/usage/bi-traces',
  tags: ['System usage'],
  summary: 'Get traces information for BI events',
  description: 'Get traces information for BI events per user per workspace',
  operationId: 'getTracesBiInfo',
  responses: {
    200: {
      description: 'Traces BiInformationResponse resource',
      content: { 'application/json': { schema: BiInformationResponseSchema } },
    },
  },
})

export const getV1InternalUsageWorkspaceTraceCountsRoute = createRoute({
  method: 'get',
  path: '/v1/internal/usage/workspace-trace-counts',
  tags: ['System usage'],
  summary: 'Get traces count on previous day for all available workspaces',
  description: 'Get traces count on previous day for all available workspaces',
  operationId: 'getTracesCountForWorkspaces',
  responses: {
    200: {
      description: 'TraceCountResponse resource',
      content: { 'application/json': { schema: TraceCountResponseSchema } },
    },
  },
})

export const postV1PrivateAgentConfigsBlueprintsRoute = createRoute({
  method: 'post',
  path: '/v1/private/agent-configs/blueprints',
  tags: ['Agent Configs'],
  summary: 'Create optimizer config with initial blueprint',
  description:
    'Creates a new optimizer config with initial blueprint. Fails if the project already has a config.',
  operationId: 'createAgentConfig',
  request: { body: { content: { 'application/json': { schema: AgentConfigCreateWriteSchema } } } },
  responses: {
    201: {
      description: 'Created',
      headers: z.object({
        Location: {
          required: true,
          example: '${basePath}/v1/private/agent-configs/blueprints/{blueprint_id}',
          style: 'simple',
          schema: z
            .string()
            .openapi({ example: '${basePath}/v1/private/agent-configs/blueprints/{blueprint_id}' }),
        },
      }),
    },
    400: {
      description: 'Bad Request (e.g. MASK type not allowed)',
      content: { 'application/json': { schema: ErrorMessageWriteSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorMessageWriteSchema } },
    },
    409: {
      description: 'Conflict (config already exists)',
      content: { 'application/json': { schema: ErrorMessageWriteSchema } },
    },
  },
})

export const patchV1PrivateAgentConfigsBlueprintsRoute = createRoute({
  method: 'patch',
  path: '/v1/private/agent-configs/blueprints',
  tags: ['Agent Configs'],
  summary: 'Add blueprint to existing config',
  description:
    'Adds a new blueprint to an existing optimizer config. Fails if the project has no config yet.',
  operationId: 'updateAgentConfig',
  request: { body: { content: { 'application/json': { schema: AgentConfigCreateWriteSchema } } } },
  responses: {
    201: {
      description: 'Created',
      headers: z.object({
        Location: {
          required: true,
          example: '${basePath}/v1/private/agent-configs/blueprints/{blueprint_id}',
          style: 'simple',
          schema: z
            .string()
            .openapi({ example: '${basePath}/v1/private/agent-configs/blueprints/{blueprint_id}' }),
        },
      }),
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorMessageWriteSchema } },
    },
    404: {
      description: 'Not Found (no config for project)',
      content: { 'application/json': { schema: ErrorMessageWriteSchema } },
    },
  },
})

export const postV1PrivateAgentConfigsBlueprintsProjectsProjectIdMasksMaskIdRoute = createRoute({
  method: 'post',
  path: '/v1/private/agent-configs/blueprints/projects/{project_id}/masks/{mask_id}',
  tags: ['Agent Configs'],
  summary: 'Create blueprint from mask',
  description:
    "Creates a new blueprint by applying a mask's changes on top of the latest blueprint for the project.",
  operationId: 'createBlueprintFromMask',
  request: {
    params: z.object({
      project_id: z
        .uuid()
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      mask_id: z
        .uuid()
        .openapi({
          param: {
            name: 'mask_id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    201: {
      description: 'Created',
      headers: z.object({
        Location: {
          required: true,
          example: '${basePath}/v1/private/agent-configs/blueprints/{blueprint_id}',
          style: 'simple',
          schema: z
            .string()
            .openapi({ example: '${basePath}/v1/private/agent-configs/blueprints/{blueprint_id}' }),
        },
      }),
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorMessageWriteSchema } },
    },
    404: {
      description: 'Not Found (no config or mask not found)',
      content: { 'application/json': { schema: ErrorMessageWriteSchema } },
    },
  },
})

export const postV1PrivateAgentConfigsBlueprintsEnvironmentsRoute = createRoute({
  method: 'post',
  path: '/v1/private/agent-configs/blueprints/environments',
  tags: ['Agent Configs'],
  summary: 'Create or update environments',
  description: 'Creates or updates environment-to-blueprint mappings',
  operationId: 'createOrUpdateEnvs',
  request: { body: { content: { 'application/json': { schema: AgentConfigEnvUpdateSchema } } } },
  responses: {
    204: { description: 'Environments updated' },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const getV1PrivateAgentConfigsBlueprintsEnvironmentsEnvNameProjectsProjectIdRoute =
  createRoute({
    method: 'get',
    path: '/v1/private/agent-configs/blueprints/environments/{env_name}/projects/{project_id}',
    tags: ['Agent Configs'],
    summary: 'Retrieve blueprint by environment',
    description: 'Retrieves the blueprint associated with a specific environment',
    operationId: 'getBlueprintByEnv',
    request: {
      params: z.object({
        env_name: z
          .string()
          .openapi({
            param: { name: 'env_name', in: 'path', required: true, schema: { type: 'string' } },
          }),
        project_id: z
          .uuid()
          .openapi({
            param: {
              name: 'project_id',
              in: 'path',
              required: true,
              schema: { type: 'string', format: 'uuid' },
            },
          }),
      }),
      query: z.object({
        mask_id: z
          .uuid()
          .exactOptional()
          .openapi({
            param: {
              name: 'mask_id',
              in: 'query',
              schema: { type: 'string', format: 'uuid' },
              required: false,
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Blueprint retrieved',
        content: { 'application/json': { schema: AgentBlueprintPublicSchema } },
      },
      401: {
        description: 'Unauthorized',
        content: { 'application/json': { schema: ErrorMessagePublicSchema } },
      },
      404: {
        description: 'Not Found',
        content: { 'application/json': { schema: ErrorMessagePublicSchema } },
      },
    },
  })

export const putV1PrivateAgentConfigsBlueprintsEnvironmentsEnvNameProjectsProjectIdRoute =
  createRoute({
    method: 'put',
    path: '/v1/private/agent-configs/blueprints/environments/{env_name}/projects/{project_id}',
    tags: ['Agent Configs'],
    summary: 'Set environment by blueprint name',
    description: 'Sets an environment to point to a blueprint identified by name',
    operationId: 'setEnvByBlueprintName',
    request: {
      params: z.object({
        env_name: z
          .string()
          .openapi({
            param: { name: 'env_name', in: 'path', required: true, schema: { type: 'string' } },
          }),
        project_id: z
          .uuid()
          .openapi({
            param: {
              name: 'project_id',
              in: 'path',
              required: true,
              schema: { type: 'string', format: 'uuid' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: AgentConfigEnvSetByNameSchema } } },
    },
    responses: {
      204: { description: 'Environment updated' },
      401: {
        description: 'Unauthorized',
        content: { 'application/json': { schema: ErrorMessageSchema } },
      },
      404: {
        description: 'Not Found',
        content: { 'application/json': { schema: ErrorMessageSchema } },
      },
    },
  })

export const deleteV1PrivateAgentConfigsBlueprintsEnvironmentsEnvNameProjectsProjectIdRoute =
  createRoute({
    method: 'delete',
    path: '/v1/private/agent-configs/blueprints/environments/{env_name}/projects/{project_id}',
    tags: ['Agent Configs'],
    summary: 'Delete environment',
    description: 'Soft-deletes an environment by setting its ended_at timestamp',
    operationId: 'deleteEnv',
    request: {
      params: z.object({
        env_name: z
          .string()
          .openapi({
            param: { name: 'env_name', in: 'path', required: true, schema: { type: 'string' } },
          }),
        project_id: z
          .uuid()
          .openapi({
            param: {
              name: 'project_id',
              in: 'path',
              required: true,
              schema: { type: 'string', format: 'uuid' },
            },
          }),
      }),
    },
    responses: {
      204: { description: 'Environment deleted' },
      401: {
        description: 'Unauthorized',
        content: { 'application/json': { schema: ErrorMessageSchema } },
      },
    },
  })

export const getV1PrivateAgentConfigsBlueprintsBlueprintIdRoute = createRoute({
  method: 'get',
  path: '/v1/private/agent-configs/blueprints/{blueprint_id}',
  tags: ['Agent Configs'],
  summary: 'Retrieve blueprint by ID',
  description: 'Retrieves a specific blueprint by its ID',
  operationId: 'getBlueprintById',
  request: {
    params: z.object({
      blueprint_id: z
        .uuid()
        .openapi({
          param: {
            name: 'blueprint_id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    query: z.object({
      mask_id: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            name: 'mask_id',
            in: 'query',
            schema: { type: 'string', format: 'uuid' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Blueprint retrieved',
      content: { 'application/json': { schema: AgentBlueprintPublicSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorMessagePublicSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: ErrorMessagePublicSchema } },
    },
  },
})

export const getV1PrivateAgentConfigsBlueprintsProjectsProjectIdNamesNameRoute = createRoute({
  method: 'get',
  path: '/v1/private/agent-configs/blueprints/projects/{project_id}/names/{name}',
  tags: ['Agent Configs'],
  summary: 'Retrieve blueprint by name',
  description: 'Retrieves a specific blueprint by its name within a project',
  operationId: 'getBlueprintByName',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: { name: 'name', in: 'path', required: true, schema: { type: 'string' } },
        }),
      project_id: z
        .uuid()
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    query: z.object({
      mask_id: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            name: 'mask_id',
            in: 'query',
            schema: { type: 'string', format: 'uuid' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Blueprint retrieved',
      content: { 'application/json': { schema: AgentBlueprintPublicSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorMessagePublicSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: ErrorMessagePublicSchema } },
    },
  },
})

export const getV1PrivateAgentConfigsBlueprintsHistoryProjectsProjectIdRoute = createRoute({
  method: 'get',
  path: '/v1/private/agent-configs/blueprints/history/projects/{project_id}',
  tags: ['Agent Configs'],
  summary: 'Get blueprint history',
  description: 'Retrieves paginated blueprint history for a project',
  operationId: 'getBlueprintHistory',
  request: {
    params: z.object({
      project_id: z
        .uuid()
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
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
          z.int32().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            schema: { minimum: 1, type: 'integer', format: 'int32', default: 1 },
            required: false,
          },
        }),
      size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'size',
            in: 'query',
            schema: { minimum: 1, type: 'integer', format: 'int32', default: 10 },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'History retrieved',
      content: { 'application/json': { schema: BlueprintPageHistorySchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorMessageHistorySchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: ErrorMessageHistorySchema } },
    },
  },
})

export const getV1PrivateAgentConfigsBlueprintsBlueprintIdDeltasRoute = createRoute({
  method: 'get',
  path: '/v1/private/agent-configs/blueprints/{blueprint_id}/deltas',
  tags: ['Agent Configs'],
  summary: 'Retrieve delta by blueprint ID',
  description: 'Retrieves only the changes (delta) introduced in a specific blueprint',
  operationId: 'getDeltaById',
  request: {
    params: z.object({
      blueprint_id: z
        .uuid()
        .openapi({
          param: {
            name: 'blueprint_id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Delta retrieved',
      content: { 'application/json': { schema: AgentBlueprintPublicSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorMessagePublicSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: ErrorMessagePublicSchema } },
    },
  },
})

export const getV1PrivateAgentConfigsBlueprintsLatestProjectsProjectIdRoute = createRoute({
  method: 'get',
  path: '/v1/private/agent-configs/blueprints/latest/projects/{project_id}',
  tags: ['Agent Configs'],
  summary: 'Retrieve latest blueprint',
  description: 'Retrieves the latest blueprint for a project',
  operationId: 'getLatestBlueprint',
  request: {
    params: z.object({
      project_id: z
        .uuid()
        .openapi({
          param: {
            name: 'project_id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    query: z.object({
      mask_id: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            name: 'mask_id',
            in: 'query',
            schema: { type: 'string', format: 'uuid' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Blueprint retrieved',
      content: { 'application/json': { schema: AgentBlueprintPublicSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorMessagePublicSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: ErrorMessagePublicSchema } },
    },
  },
})

export const postV1PrivateAgentConfigsBlueprintsRemoveKeysRoute = createRoute({
  method: 'post',
  path: '/v1/private/agent-configs/blueprints/remove-keys',
  tags: ['Agent Configs'],
  summary: 'Remove configuration parameters',
  description:
    'Removes configuration parameters by creating a new blueprint that closes the specified keys. Returns 204 if no changes were needed (idempotent).',
  operationId: 'removeConfigKeys',
  request: { body: { content: { 'application/json': { schema: AgentConfigRemoveValuesSchema } } } },
  responses: {
    201: {
      description: 'Created',
      headers: z.object({
        Location: {
          required: true,
          example: '${basePath}/v1/private/agent-configs/blueprints/{blueprint_id}',
          style: 'simple',
          schema: z
            .string()
            .openapi({ example: '${basePath}/v1/private/agent-configs/blueprints/{blueprint_id}' }),
        },
      }),
    },
    204: { description: 'No changes needed (no config or keys already removed)' },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const getV1PrivateAgentInsightsJobsProjectIdRoute = createRoute({
  method: 'get',
  path: '/v1/private/agent-insights/jobs/{projectId}',
  tags: ['Agent Insights Jobs'],
  summary: 'Get Agent Insights job',
  description:
    'Returns the Agent Insights job for the (workspace, project), or 404 if none exists.',
  operationId: 'getAgentInsightsJob',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            name: 'projectId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Job',
      content: { 'application/json': { schema: AgentInsightsJobSchema } },
    },
    404: { description: 'Job not found' },
  },
})

export const postV1PrivateAgentInsightsJobsProjectIdRoute = createRoute({
  method: 'post',
  path: '/v1/private/agent-insights/jobs/{projectId}',
  tags: ['Agent Insights Jobs'],
  summary: 'Create Agent Insights job',
  description:
    'Creates the Agent Insights job for a project, disabled: the daily schedule stays off until the job is enabled with PATCH. 409 if one already exists.',
  operationId: 'createAgentInsightsJob',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            name: 'projectId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    201: {
      description: 'Job created',
      content: { 'application/json': { schema: AgentInsightsJobSchema } },
      headers: z.object({
        Location: {
          description: 'URI of the created job',
          style: 'simple',
          schema: z
            .string()
            .exactOptional()
            .openapi({ description: 'URI of the created job', param: { required: false } }),
        },
      }),
    },
    404: { description: 'Project not found' },
    409: { description: 'Job already exists' },
  },
})

export const patchV1PrivateAgentInsightsJobsProjectIdRoute = createRoute({
  method: 'patch',
  path: '/v1/private/agent-insights/jobs/{projectId}',
  tags: ['Agent Insights Jobs'],
  summary: 'Update Agent Insights job',
  description:
    'Partially updates the Agent Insights job for a project (e.g. status; never deletes). Returns the updated job, or 404 if none exists.',
  operationId: 'updateAgentInsightsJob',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            name: 'projectId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AgentInsightsJobUpdateSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Job updated',
      content: { 'application/json': { schema: AgentInsightsJobSchema } },
    },
    404: { description: 'Job not found' },
  },
})

export const postV1PrivateAgentInsightsJobsProjectIdTriggerRoute = createRoute({
  method: 'post',
  path: '/v1/private/agent-insights/jobs/{projectId}/trigger',
  tags: ['Agent Insights Jobs'],
  summary: 'Trigger Agent Insights job',
  description:
    'Triggers an immediate report run for an existing job (over the last 24h). Fire-and-forget; returns 202. 404 if none exists.',
  operationId: 'triggerAgentInsightsJob',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            name: 'projectId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: { 202: { description: 'Run accepted' }, 404: { description: 'Job not found' } },
})

export const putV1PrivateAgentInsightsJobsProjectIdGuidanceRoute = createRoute({
  method: 'put',
  path: '/v1/private/agent-insights/jobs/{projectId}/guidance',
  tags: ['Agent Insights Jobs'],
  summary: 'Update Agent Insights project guidance',
  description:
    'Saves the project guidance sent to every Agent Insights run, creating the job (disabled) if the project has none. Empty or whitespace-only clears it. The guidance version is bumped only when the text changes. 404 while guidance is not enabled.',
  operationId: 'updateAgentInsightsGuidance',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            name: 'projectId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AgentInsightsGuidanceUpdateSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Job with the saved guidance',
      content: { 'application/json': { schema: AgentInsightsJobSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: {
      description: 'Project not found, or guidance not enabled',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    422: {
      description: 'Guidance missing or over the length limit',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const getV1PrivateAgentInsightsIssuesRoute = createRoute({
  method: 'get',
  path: '/v1/private/agent-insights/issues',
  tags: ['Agent Insights'],
  summary: 'Find agent insights issues',
  description:
    'Returns a paginated list of issues that have at least one detail row within the requested time window, with metrics aggregated over the window',
  operationId: 'findAgentInsightsIssues',
  request: {
    query: z.object({
      project_id: z
        .uuid()
        .openapi({
          param: {
            name: 'project_id',
            in: 'query',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      from_date: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            name: 'from_date',
            in: 'query',
            schema: { type: 'string', format: 'date' },
            required: false,
          },
        }),
      to_date: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            name: 'to_date',
            in: 'query',
            schema: { type: 'string', format: 'date' },
            required: false,
          },
        }),
      status: z
        .enum(['open', 'resolved', 'closed'])
        .exactOptional()
        .openapi({
          param: {
            name: 'status',
            in: 'query',
            schema: { type: 'string', enum: ['open', 'resolved', 'closed'] },
            required: false,
          },
        }),
      severity: z
        .enum(['critical', 'high', 'medium', 'low'])
        .exactOptional()
        .openapi({
          param: {
            name: 'severity',
            in: 'query',
            schema: { type: 'string', enum: ['critical', 'high', 'medium', 'low'] },
            required: false,
          },
        }),
      sorting: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'sorting', in: 'query', schema: { type: 'string' }, required: false },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            schema: { minimum: 1, type: 'integer', format: 'int32', default: 1 },
            required: false,
          },
        }),
      size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(100),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'size',
            in: 'query',
            schema: { maximum: 100, minimum: 1, type: 'integer', format: 'int32', default: 10 },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Issues page',
      content: { 'application/json': { schema: AgentInsightsIssuePageSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const postV1PrivateAgentInsightsIssuesRoute = createRoute({
  method: 'post',
  path: '/v1/private/agent-insights/issues',
  tags: ['Agent Insights'],
  summary: 'Store agent insights report results',
  description:
    'Upserts the detected issues and their per-day metrics for the given report day in a single transaction. Issue status is never modified by this endpoint.',
  operationId: 'reportAgentInsightsIssues',
  request: { body: { content: { 'application/json': { schema: AgentInsightsReportSchema } } } },
  responses: {
    204: { description: 'Report stored' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: {
      description: 'Project not found',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const getV1PrivateAgentInsightsIssuesIssueIdRoute = createRoute({
  method: 'get',
  path: '/v1/private/agent-insights/issues/{issue_id}',
  tags: ['Agent Insights'],
  summary: 'Get agent insights issue by id',
  description:
    'Returns the issue together with its per-day breakdown within the requested time window',
  operationId: 'getAgentInsightsIssueById',
  request: {
    params: z.object({
      issue_id: z
        .uuid()
        .openapi({
          param: {
            name: 'issue_id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    query: z.object({
      project_id: z
        .uuid()
        .openapi({
          param: {
            name: 'project_id',
            in: 'query',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      from_date: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            name: 'from_date',
            in: 'query',
            schema: { type: 'string', format: 'date' },
            required: false,
          },
        }),
      to_date: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            name: 'to_date',
            in: 'query',
            schema: { type: 'string', format: 'date' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Issue with details',
      content: { 'application/json': { schema: AgentInsightsIssueWithDetailsSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const patchV1PrivateAgentInsightsIssuesIssueIdRoute = createRoute({
  method: 'patch',
  path: '/v1/private/agent-insights/issues/{issue_id}',
  tags: ['Agent Insights'],
  summary: 'Update agent insights issue status',
  description:
    'Moves an issue through its lifecycle: open, resolved or closed. close_note is kept only with closed; any other status clears it',
  operationId: 'updateAgentInsightsIssue',
  request: {
    params: z.object({
      issue_id: z
        .uuid()
        .openapi({
          param: {
            name: 'issue_id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AgentInsightsIssueUpdateSchema } } },
  },
  responses: {
    204: { description: 'Issue updated' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    422: {
      description: 'Missing project_id or status, or close_note over the length limit',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const getV1PrivateAlertsRoute = createRoute({
  method: 'get',
  path: '/v1/private/alerts',
  tags: ['Alerts'],
  summary: 'Find alerts',
  description: 'Find alerts',
  operationId: 'findAlerts',
  request: {
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            schema: { minimum: 1, type: 'integer', format: 'int32', default: 1 },
            required: false,
          },
        }),
      size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'size',
            in: 'query',
            schema: { minimum: 1, type: 'integer', format: 'int32', default: 10 },
            required: false,
          },
        }),
      sorting: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'sorting', in: 'query', schema: { type: 'string' }, required: false },
        }),
      filters: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'filters', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: AlertPagePublicSchema } } },
  },
})

export const postV1PrivateAlertsRoute = createRoute({
  method: 'post',
  path: '/v1/private/alerts',
  tags: ['Alerts'],
  summary: 'Create alert',
  description: 'Create alert',
  operationId: 'createAlert',
  request: { body: { content: { 'application/json': { schema: AlertWriteSchema } } } },
  responses: {
    201: {
      description: 'Created',
      headers: z.object({
        Location: {
          required: true,
          example: '${basePath}/v1/private/alerts/{alertId}',
          style: 'simple',
          schema: z.string().openapi({ example: '${basePath}/v1/private/alerts/{alertId}' }),
        },
      }),
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    422: {
      description: 'Unprocessable Content',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const postV1PrivateAlertsDeleteRoute = createRoute({
  method: 'post',
  path: '/v1/private/alerts/delete',
  tags: ['Alerts'],
  summary: 'Delete alert batch',
  description: 'Delete multiple alerts by their IDs',
  operationId: 'deleteAlertBatch',
  request: { body: { content: { 'application/json': { schema: BatchDeleteSchema } } } },
  responses: {
    204: { description: 'No Content' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const getV1PrivateAlertsIdRoute = createRoute({
  method: 'get',
  path: '/v1/private/alerts/{id}',
  tags: ['Alerts'],
  summary: 'Get Alert by id',
  description: 'Get Alert by id',
  operationId: 'getAlertById',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Alert resource',
      content: { 'application/json': { schema: AlertPublicSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: ErrorMessagePublicSchema } },
    },
  },
})

export const putV1PrivateAlertsIdRoute = createRoute({
  method: 'put',
  path: '/v1/private/alerts/{id}',
  tags: ['Alerts'],
  summary: 'Update alert',
  description: 'Update alert',
  operationId: 'updateAlert',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AlertWriteSchema } } },
  },
  responses: {
    204: { description: 'No Content' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    422: {
      description: 'Unprocessable Content',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const getV1PrivateAlertsWebhooksExamplesRoute = createRoute({
  method: 'get',
  path: '/v1/private/alerts/webhooks/examples',
  tags: ['Alerts'],
  summary: 'Get webhook payload examples',
  description:
    'Get webhook payload examples for all alert event types, optionally filtered by alert type',
  operationId: 'getWebhookExamples',
  request: {
    query: z.object({
      alert_type: z
        .enum(['general', 'slack', 'pagerduty'])
        .exactOptional()
        .openapi({
          param: {
            name: 'alert_type',
            in: 'query',
            schema: { type: 'string', enum: ['general', 'slack', 'pagerduty'] },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Webhook examples',
      content: { 'application/json': { schema: WebhookExamplesSchema } },
    },
  },
})

export const postV1PrivateAlertsWebhooksTestsRoute = createRoute({
  method: 'post',
  path: '/v1/private/alerts/webhooks/tests',
  tags: ['Alerts'],
  summary: 'Test alert webhook',
  description: 'Test alert webhook',
  operationId: 'testWebhook',
  request: { body: { content: { 'application/json': { schema: AlertWriteSchema } } } },
  responses: {
    200: {
      description: 'Webhook test',
      content: { 'application/json': { schema: WebhookTestResultSchema } },
    },
    422: {
      description: 'Unprocessable Content',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const postV1PrivateAnnotationQueuesIdItemsAddRoute = createRoute({
  method: 'post',
  path: '/v1/private/annotation-queues/{id}/items/add',
  tags: ['Annotation Queues'],
  summary: 'Add items to annotation queue',
  description: 'Add traces or threads to annotation queue',
  operationId: 'addItemsToAnnotationQueue',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AnnotationQueueItemIdsSchema } } },
  },
  responses: {
    204: { description: 'No content' },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const getV1PrivateAnnotationQueuesRoute = createRoute({
  method: 'get',
  path: '/v1/private/annotation-queues',
  tags: ['Annotation Queues'],
  summary: 'Find annotation queues',
  description: 'Find annotation queues with filtering and sorting',
  operationId: 'findAnnotationQueues',
  request: {
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            schema: { minimum: 1, type: 'integer', format: 'int32', default: 1 },
            required: false,
          },
        }),
      size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'size',
            in: 'query',
            schema: { minimum: 1, type: 'integer', format: 'int32', default: 10 },
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
            schema: {
              type: 'string',
              description: 'Filter annotation queues by name (partial match, case insensitive)',
            },
            required: false,
          },
          description: 'Filter annotation queues by name (partial match, case insensitive)',
        }),
      filters: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'filters', in: 'query', schema: { type: 'string' }, required: false },
        }),
      sorting: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'sorting', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Annotation queues page',
      content: { 'application/json': { schema: AnnotationQueuePagePublicSchema } },
    },
  },
})

export const postV1PrivateAnnotationQueuesRoute = createRoute({
  method: 'post',
  path: '/v1/private/annotation-queues',
  tags: ['Annotation Queues'],
  summary: 'Create annotation queue',
  description: 'Create annotation queue for human annotation workflows',
  operationId: 'createAnnotationQueue',
  request: { body: { content: { 'application/json': { schema: AnnotationQueueWriteSchema } } } },
  responses: {
    201: {
      description: 'Created',
      headers: z.object({
        Location: {
          required: true,
          example: '${basePath}/v1/private/traces/{annotationId}',
          style: 'simple',
          schema: z.string().openapi({ example: '${basePath}/v1/private/traces/{annotationId}' }),
        },
      }),
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    422: {
      description: 'Unprocessable Content',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const postV1PrivateAnnotationQueuesBatchRoute = createRoute({
  method: 'post',
  path: '/v1/private/annotation-queues/batch',
  tags: ['Annotation Queues'],
  summary: 'Create annotation queue batch',
  description: 'Create multiple annotation queues for human annotation workflows',
  operationId: 'createAnnotationQueueBatch',
  request: {
    body: { content: { 'application/json': { schema: AnnotationQueueBatchWriteSchema } } },
  },
  responses: {
    204: { description: 'No Content' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    422: {
      description: 'Unprocessable Content',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const postV1PrivateAnnotationQueuesDeleteRoute = createRoute({
  method: 'post',
  path: '/v1/private/annotation-queues/delete',
  tags: ['Annotation Queues'],
  summary: 'Delete annotation queue batch',
  description: 'Delete multiple annotation queues by their IDs',
  operationId: 'deleteAnnotationQueueBatch',
  request: { body: { content: { 'application/json': { schema: BatchDeleteSchema } } } },
  responses: {
    204: { description: 'No Content' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const getV1PrivateAnnotationQueuesIdRoute = createRoute({
  method: 'get',
  path: '/v1/private/annotation-queues/{id}',
  tags: ['Annotation Queues'],
  summary: 'Get annotation queue by id',
  description: 'Get annotation queue by id',
  operationId: 'getAnnotationQueueById',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Annotation queue resource',
      content: { 'application/json': { schema: AnnotationQueuePublicSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: ErrorMessagePublicSchema } },
    },
  },
})

export const patchV1PrivateAnnotationQueuesIdRoute = createRoute({
  method: 'patch',
  path: '/v1/private/annotation-queues/{id}',
  tags: ['Annotation Queues'],
  summary: 'Update annotation queue',
  description: 'Update annotation queue by id',
  operationId: 'updateAnnotationQueue',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AnnotationQueueUpdateSchema } } },
  },
  responses: {
    204: { description: 'No Content' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const getV1PrivateAnnotationQueuesQueueIdLocksRoute = createRoute({
  method: 'get',
  path: '/v1/private/annotation-queues/{queueId}/locks',
  tags: ['Annotation Queues'],
  summary: 'Get all active locks for an annotation queue',
  description: 'Returns lock status for all actively locked items in the queue',
  operationId: 'getAnnotationQueueLocks',
  request: {
    params: z.object({
      queueId: z
        .uuid()
        .openapi({
          param: {
            name: 'queueId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Queue locks',
      content: { 'application/json': { schema: LocksResponseSchema } },
    },
  },
})

export const putV1PrivateAnnotationQueuesQueueIdItemsItemIdLockRoute = createRoute({
  method: 'put',
  path: '/v1/private/annotation-queues/{queueId}/items/{itemId}/lock',
  tags: ['Annotation Queues'],
  summary: 'Create or extend annotation queue item lock',
  description: 'Claim an annotation queue item for the current user, or extend an existing lock',
  operationId: 'lockAnnotationQueueItem',
  request: {
    params: z.object({
      queueId: z
        .uuid()
        .openapi({
          param: {
            name: 'queueId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      itemId: z
        .uuid()
        .openapi({
          param: {
            name: 'itemId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Lock result',
      content: { 'application/json': { schema: LockResponseSchema } },
    },
  },
})

export const postV1PrivateAnnotationQueuesIdItemsDeleteRoute = createRoute({
  method: 'post',
  path: '/v1/private/annotation-queues/{id}/items/delete',
  tags: ['Annotation Queues'],
  summary: 'Remove items from annotation queue',
  description: 'Remove items from annotation queue',
  operationId: 'removeItemsFromAnnotationQueue',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AnnotationQueueItemIdsSchema } } },
  },
  responses: {
    204: { description: 'No content' },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const postV1PrivateAnnotationQueuesIdItemsSearchRoute = createRoute({
  method: 'post',
  path: '/v1/private/annotation-queues/{id}/items/search',
  tags: ['Annotation Queues'],
  summary: 'Search annotation queue items',
  description:
    'Returns queue membership metadata — how each item got into the queue — for the given item ids. A lookup rather than a listing: the caller renders the items table from the traces or threads API with its own sort and filters, so it asks for exactly the ids it is displaying. Ids that are not in the queue are omitted.',
  operationId: 'searchAnnotationQueueItems',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AnnotationQueueItemIdsPublicSchema } } },
  },
  responses: {
    200: {
      description: 'Annotation queue items',
      content: { 'application/json': { schema: AnnotationQueueItemsPublicSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: ErrorMessagePublicSchema } },
    },
  },
})

export const putV1PrivateAssertionResultsRoute = createRoute({
  method: 'put',
  path: '/v1/private/assertion-results',
  tags: ['Assertion Results'],
  summary: 'Batch ingestion of assertion results',
  description: 'Batch ingestion of assertion results for traces or spans',
  operationId: 'storeAssertionsBatch',
  request: { body: { content: { 'application/json': { schema: AssertionResultBatchSchema } } } },
  responses: { 204: { description: 'No Content' } },
})

export const getV1PrivateAttachmentListRoute = createRoute({
  method: 'get',
  path: '/v1/private/attachment/list',
  tags: ['Attachments'],
  summary: 'Attachments list for entity',
  description: 'Attachments list for entity',
  operationId: 'attachmentList',
  request: {
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            schema: { minimum: 1, type: 'integer', format: 'int32', default: 1 },
            required: false,
          },
        }),
      size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'size',
            in: 'query',
            schema: { minimum: 1, type: 'integer', format: 'int32', default: 100 },
            required: false,
          },
        }),
      project_id: z
        .uuid()
        .openapi({
          param: {
            name: 'project_id',
            in: 'query',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      entity_type: z
        .enum(['trace', 'span'])
        .openapi({
          param: {
            name: 'entity_type',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['trace', 'span'] },
          },
        }),
      entity_id: z
        .uuid()
        .openapi({
          param: {
            name: 'entity_id',
            in: 'query',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      path: z
        .string()
        .min(1)
        .openapi({
          param: {
            name: 'path',
            in: 'query',
            required: true,
            schema: { minLength: 1, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Attachment Resource',
      content: { 'application/json': { schema: AttachmentPageSchema } },
    },
    401: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    403: {
      description: 'Access forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const postV1PrivateAttachmentUploadCompleteRoute = createRoute({
  method: 'post',
  path: '/v1/private/attachment/upload-complete',
  tags: ['Attachments'],
  summary: 'Complete multipart attachment upload',
  description: 'Complete multipart attachment upload',
  operationId: 'completeMultiPartUpload',
  request: {
    body: { content: { 'application/json': { schema: CompleteMultipartUploadRequestSchema } } },
  },
  responses: {
    204: { description: 'No content' },
    401: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    403: {
      description: 'Access forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const postV1PrivateAttachmentDeleteRoute = createRoute({
  method: 'post',
  path: '/v1/private/attachment/delete',
  tags: ['Attachments'],
  summary: 'Delete attachments',
  description: 'Delete attachments',
  operationId: 'deleteAttachments',
  request: {
    body: { content: { 'application/json': { schema: CompleteMultipartUploadRequestSchema } } },
  },
  responses: {
    204: { description: 'No content' },
    401: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    403: {
      description: 'Access forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const getV1PrivateAttachmentDownloadRoute = createRoute({
  method: 'get',
  path: '/v1/private/attachment/download',
  tags: ['Attachments'],
  summary: 'Download attachment from MinIO',
  description: 'Download attachment from MinIO',
  operationId: 'downloadAttachment',
  request: {
    query: z.object({
      workspace_name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'workspace_name',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      container_id: z
        .uuid()
        .openapi({
          param: {
            name: 'container_id',
            in: 'query',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      entity_type: z
        .enum(['trace', 'span'])
        .openapi({
          param: {
            name: 'entity_type',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['trace', 'span'] },
          },
        }),
      entity_id: z
        .uuid()
        .openapi({
          param: {
            name: 'entity_id',
            in: 'query',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      file_name: z
        .string()
        .min(1)
        .openapi({
          param: {
            name: 'file_name',
            in: 'query',
            required: true,
            schema: { minLength: 1, type: 'string' },
          },
        }),
      mime_type: z
        .string()
        .min(1)
        .openapi({
          param: {
            name: 'mime_type',
            in: 'query',
            required: true,
            schema: { minLength: 1, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Attachment Resource',
      content: { '*/*': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
    401: { description: 'Bad Request', content: { '*/*': { schema: ErrorMessageSchema } } },
    403: { description: 'Access forbidden', content: { '*/*': { schema: ErrorMessageSchema } } },
  },
})

export const postV1PrivateAttachmentUploadStartRoute = createRoute({
  method: 'post',
  path: '/v1/private/attachment/upload-start',
  tags: ['Attachments'],
  summary: 'Start multipart attachment upload',
  description: 'Start multipart attachment upload',
  operationId: 'startMultiPartUpload',
  request: {
    body: { content: { 'application/json': { schema: StartMultipartUploadRequestSchema } } },
  },
  responses: {
    200: {
      description: 'MultipartUploadResponse',
      content: { 'application/json': { schema: StartMultipartUploadResponseSchema } },
    },
    401: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    403: {
      description: 'Access forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const putV1PrivateAttachmentUploadRoute = createRoute({
  method: 'put',
  path: '/v1/private/attachment/upload',
  tags: ['Attachments'],
  summary: 'Upload attachment to MinIO',
  description: 'Upload attachment to MinIO',
  operationId: 'uploadAttachment',
  request: {
    query: z.object({
      file_name: z
        .string()
        .openapi({
          param: { name: 'file_name', in: 'query', required: true, schema: { type: 'string' } },
        }),
      project_name: z
        .string()
        .regex(/^\s*(\S.*\S|\S)\s*$/s)
        .exactOptional()
        .openapi({
          param: {
            name: 'project_name',
            in: 'query',
            schema: {
              pattern: '(?s)^\\s*(\\S.*\\S|\\S)\\s*$',
              type: 'string',
              description: 'If null, the default project is used',
            },
            required: false,
          },
          description: 'If null, the default project is used',
        }),
      mime_type: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'mime_type', in: 'query', schema: { type: 'string' }, required: false },
        }),
      entity_type: z
        .enum(['trace', 'span'])
        .openapi({
          param: {
            name: 'entity_type',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['trace', 'span'] },
          },
        }),
      entity_id: z
        .uuid()
        .openapi({
          param: {
            name: 'entity_id',
            in: 'query',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: { content: { '*/*': { schema: z.object({}) } } },
  },
  responses: {
    204: { description: 'No content' },
    401: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    403: {
      description: 'Access forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const postV1PrivateAuthRoute = createRoute({
  method: 'post',
  path: '/v1/private/auth',
  tags: ['Check'],
  summary: 'Check user access to workspace',
  description: 'Check user access to workspace',
  operationId: 'checkAccess',
  request: { body: { content: { 'application/json': { schema: AuthDetailsHolderSchema } } } },
  responses: {
    204: { description: 'No Content' },
    401: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    403: {
      description: 'Access forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const getV1PrivateAuthWorkspaceRoute = createRoute({
  method: 'get',
  path: '/v1/private/auth/workspace',
  tags: ['Check'],
  summary: "User's default workspace name",
  description: "User's default workspace name",
  operationId: 'getWorkspaceName',
  responses: {
    200: {
      description: 'Authentication resource',
      content: { 'application/json': { schema: WorkspaceNameHolderSchema } },
    },
    401: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    403: {
      description: 'Access forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const getV1PrivateAutomationsEvaluatorsRoute = createRoute({
  method: 'get',
  path: '/v1/private/automations/evaluators',
  tags: ['Automation rule evaluators'],
  summary: 'Find project Evaluators',
  description: 'Find project Evaluators',
  operationId: 'findEvaluators',
  request: {
    query: z.object({
      project_id: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            name: 'project_id',
            in: 'query',
            schema: { type: 'string', format: 'uuid' },
            required: false,
          },
        }),
      id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'id',
            in: 'query',
            schema: {
              type: 'string',
              description:
                'Filter automation rules with rule ID containing this value (partial match, like %id%)',
            },
            required: false,
          },
          description:
            'Filter automation rules with rule ID containing this value (partial match, like %id%)',
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            schema: {
              type: 'string',
              description:
                'Filter automation rule evaluators by name (partial match, case insensitive)',
            },
            required: false,
          },
          description:
            'Filter automation rule evaluators by name (partial match, case insensitive)',
        }),
      filters: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'filters', in: 'query', schema: { type: 'string' }, required: false },
        }),
      sorting: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'sorting', in: 'query', schema: { type: 'string' }, required: false },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            schema: { minimum: 1, type: 'integer', format: 'int32', default: 1 },
            required: false,
          },
        }),
      size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'size',
            in: 'query',
            schema: { minimum: 1, type: 'integer', format: 'int32', default: 10 },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Evaluators resource',
      content: { 'application/json': { schema: AutomationRuleEvaluatorPagePublicSchema } },
    },
  },
})

export const postV1PrivateAutomationsEvaluatorsRoute = createRoute({
  method: 'post',
  path: '/v1/private/automations/evaluators',
  tags: ['Automation rule evaluators'],
  summary: 'Create automation rule evaluator',
  description: 'Create automation rule evaluator',
  operationId: 'createAutomationRuleEvaluator',
  request: {
    body: { content: { 'application/json': { schema: AutomationRuleEvaluatorWriteSchema } } },
  },
  responses: {
    201: {
      description: 'Created',
      headers: z.object({
        Location: {
          required: true,
          example: '${basePath}/v1/private/automations/evaluators/{evaluatorId}',
          style: 'simple',
          schema: z
            .string()
            .openapi({ example: '${basePath}/v1/private/automations/evaluators/{evaluatorId}' }),
        },
      }),
    },
  },
})

export const postV1PrivateAutomationsEvaluatorsDeleteRoute = createRoute({
  method: 'post',
  path: '/v1/private/automations/evaluators/delete',
  tags: ['Automation rule evaluators'],
  summary: 'Delete automation rule evaluators',
  description: 'Delete automation rule evaluators batch',
  operationId: 'deleteAutomationRuleEvaluatorBatch',
  request: {
    query: z.object({
      project_id: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            name: 'project_id',
            in: 'query',
            schema: { type: 'string', format: 'uuid' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BatchDeleteSchema } } },
  },
  responses: { 204: { description: 'No Content' } },
})

export const getV1PrivateAutomationsEvaluatorsIdRoute = createRoute({
  method: 'get',
  path: '/v1/private/automations/evaluators/{id}',
  tags: ['Automation rule evaluators'],
  summary: 'Get automation rule evaluator by id',
  description: 'Get automation rule by id',
  operationId: 'getEvaluatorById',
  request: {
    query: z.object({
      project_id: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            name: 'project_id',
            in: 'query',
            schema: { type: 'string', format: 'uuid' },
            required: false,
          },
        }),
    }),
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Automation Rule resource',
      content: { 'application/json': { schema: AutomationRuleEvaluatorPublicSchema } },
    },
  },
})

export const patchV1PrivateAutomationsEvaluatorsIdRoute = createRoute({
  method: 'patch',
  path: '/v1/private/automations/evaluators/{id}',
  tags: ['Automation rule evaluators'],
  summary: 'Update Automation Rule Evaluator by id',
  description: 'Update Automation Rule Evaluator by id',
  operationId: 'updateAutomationRuleEvaluator',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AutomationRuleEvaluatorUpdateSchema } } },
  },
  responses: { 204: { description: 'No content' } },
})

export const getV1PrivateAutomationsEvaluatorsIdLogsRoute = createRoute({
  method: 'get',
  path: '/v1/private/automations/evaluators/{id}/logs',
  tags: ['Automation rule evaluators'],
  summary: 'Get automation rule evaluator logs by id',
  description: 'Get automation rule evaluator logs by id',
  operationId: 'getEvaluatorLogsById',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    query: z.object({
      size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(1000)
        .exactOptional()
        .openapi({
          param: {
            name: 'size',
            in: 'query',
            schema: { minimum: 1, type: 'integer', format: 'int32', default: 1000 },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Automation rule evaluator logs resource',
      content: { 'application/json': { schema: LogPageSchema } },
    },
  },
})

export const postV1PrivateChatCompletionsRoute = createRoute({
  method: 'post',
  path: '/v1/private/chat/completions',
  tags: ['Chat Completions'],
  summary: 'Create chat completions',
  description: 'Create chat completions',
  operationId: 'createChatCompletions',
  request: { body: { content: { 'application/json': { schema: ChatCompletionRequestSchema } } } },
  responses: {
    200: {
      description: 'Chat completions response',
      content: {
        'text/event-stream': {
          schema: z.array(z.union([ChatCompletionResponseSchema, ErrorMessageSchema])),
        },
        'application/json': { schema: ChatCompletionResponseSchema },
      },
    },
  },
})

export const getV1PrivateDashboardsRoute = createRoute({
  method: 'get',
  path: '/v1/private/dashboards',
  tags: ['Dashboards'],
  summary: 'Find dashboards',
  description: 'Find dashboards in a workspace',
  operationId: 'findDashboards',
  request: {
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            schema: { minimum: 1, type: 'integer', format: 'int32', default: 1 },
            required: false,
          },
        }),
      size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'size',
            in: 'query',
            schema: { minimum: 1, type: 'integer', format: 'int32', default: 10 },
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
            schema: {
              type: 'string',
              description: 'Filter dashboards by name (partial match, case insensitive)',
            },
            required: false,
          },
          description: 'Filter dashboards by name (partial match, case insensitive)',
        }),
      project_id: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            name: 'project_id',
            in: 'query',
            schema: { type: 'string', format: 'uuid' },
            required: false,
          },
        }),
      sorting: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'sorting', in: 'query', schema: { type: 'string' }, required: false },
        }),
      filters: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'filters', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Dashboard page',
      content: { 'application/json': { schema: DashboardPagePublicSchema } },
    },
  },
})

export const postV1PrivateDashboardsRoute = createRoute({
  method: 'post',
  path: '/v1/private/dashboards',
  tags: ['Dashboards'],
  summary: 'Create dashboard',
  description: 'Create a new dashboard in a workspace',
  operationId: 'createDashboard',
  request: { body: { content: { 'application/json': { schema: DashboardWriteSchema } } } },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: DashboardPublicSchema } },
      headers: z.object({
        Location: {
          required: true,
          example: '${basePath}/v1/private/dashboards/{dashboardId}',
          style: 'simple',
          schema: z
            .string()
            .openapi({ example: '${basePath}/v1/private/dashboards/{dashboardId}' }),
        },
      }),
    },
  },
})

export const getV1PrivateDashboardsDashboardIdRoute = createRoute({
  method: 'get',
  path: '/v1/private/dashboards/{dashboardId}',
  tags: ['Dashboards'],
  summary: 'Get dashboard by id',
  description: 'Get dashboard by id',
  operationId: 'getDashboardById',
  request: {
    params: z.object({
      dashboardId: z
        .uuid()
        .openapi({
          param: {
            name: 'dashboardId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Dashboard resource',
      content: { 'application/json': { schema: DashboardPublicSchema } },
    },
    404: { description: 'Dashboard not found' },
  },
})

export const deleteV1PrivateDashboardsDashboardIdRoute = createRoute({
  method: 'delete',
  path: '/v1/private/dashboards/{dashboardId}',
  tags: ['Dashboards'],
  summary: 'Delete dashboard',
  description: 'Delete dashboard by id',
  operationId: 'deleteDashboard',
  request: {
    params: z.object({
      dashboardId: z
        .uuid()
        .openapi({
          param: {
            name: 'dashboardId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'No content' } },
})

export const patchV1PrivateDashboardsDashboardIdRoute = createRoute({
  method: 'patch',
  path: '/v1/private/dashboards/{dashboardId}',
  tags: ['Dashboards'],
  summary: 'Update dashboard',
  description:
    'Update dashboard by id. Partial updates are supported - only provided fields will be updated.',
  operationId: 'updateDashboard',
  request: {
    params: z.object({
      dashboardId: z
        .uuid()
        .openapi({
          param: {
            name: 'dashboardId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DashboardUpdatePublicSchema } } },
  },
  responses: {
    200: {
      description: 'Updated dashboard',
      content: { 'application/json': { schema: DashboardPublicSchema } },
    },
    404: { description: 'Dashboard not found' },
    409: { description: 'Conflict - dashboard with this name already exists' },
  },
})

export const postV1PrivateDashboardsDeleteBatchRoute = createRoute({
  method: 'post',
  path: '/v1/private/dashboards/delete-batch',
  tags: ['Dashboards'],
  summary: 'Delete dashboards',
  description: 'Delete dashboards batch',
  operationId: 'deleteDashboardsBatch',
  request: { body: { content: { 'application/json': { schema: BatchDeleteSchema } } } },
  responses: { 204: { description: 'No content' } },
})

export const postV1PrivateDashboardsDashboardIdWidgetsWidgetIdQueryRoute = createRoute({
  method: 'post',
  path: '/v1/private/dashboards/{dashboardId}/widgets/{widgetId}/query',
  tags: ['Dashboards'],
  summary: 'Run a saved widget query',
  description:
    'Runs the query saved on an Ollie chart widget of this dashboard over the given date range and returns its rows. The query is read from the saved widget; the request carries no SQL. Returns 501 when Ollie or Custom Charts is not enabled for the workspace.',
  operationId: 'runDashboardWidgetQuery',
  request: {
    params: z.object({
      dashboardId: z
        .uuid()
        .openapi({
          param: {
            name: 'dashboardId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      widgetId: z
        .string()
        .openapi({
          param: { name: 'widgetId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: DashboardWidgetQueryRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Query results',
      content: { 'application/json': { schema: AnalyticsQueryResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Dashboard not found, or the widget has no dashboard saved query' },
    422: {
      description: 'Unprocessable Content',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    429: {
      description: 'Too many queries are running; retry after the Retry-After delay',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    501: { description: 'Ollie or Custom Charts is not enabled for this workspace' },
  },
})

export const postV1PrivateDatasetsIdItemsChangesRoute = createRoute({
  method: 'post',
  path: '/v1/private/datasets/{id}/items/changes',
  tags: ['Datasets'],
  summary: 'Apply changes to dataset items',
  description:
    "Apply delta changes (add, edit, delete) to a dataset version with conflict detection.\n\nThis endpoint:\n- Creates a new version with the applied changes\n- Validates that baseVersion matches the latest version (unless override=true)\n- Returns 409 Conflict if baseVersion is stale and override is not set\n\nUse `override=true` query parameter to force version creation even with stale baseVersion.\n\nSet 'copy_from_dataset_id' and 'copy_from_version_id' together on the request body to read\ncarry-forward rows from the supplied (dataset, version) pair instead of the destination's\nprior version. When the fields are null, carry-forward rows are read from the destination's\nprior version.\n",
  operationId: 'applyDatasetItemChanges',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    query: z.object({
      override: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'override',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DatasetItemChangesPublicSchema } } },
  },
  responses: {
    201: {
      description: 'Version created successfully',
      content: { 'application/json': { schema: DatasetVersionPublicSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessagePublicSchema } },
    },
    404: {
      description: 'Dataset or version not found',
      content: { 'application/json': { schema: ErrorMessagePublicSchema } },
    },
    409: {
      description: 'Version conflict - baseVersion is not the latest',
      content: { 'application/json': { schema: ErrorMessagePublicSchema } },
    },
  },
})

export const patchV1PrivateDatasetsItemsBatchRoute = createRoute({
  method: 'patch',
  path: '/v1/private/datasets/items/batch',
  tags: ['Datasets'],
  summary: 'Batch update dataset items',
  description: 'Update multiple dataset items',
  operationId: 'batchUpdateDatasetItems',
  request: { body: { content: { 'application/json': { schema: DatasetItemBatchUpdateSchema } } } },
  responses: {
    204: { description: 'No Content' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const getV1PrivateDatasetsRoute = createRoute({
  method: 'get',
  path: '/v1/private/datasets',
  tags: ['Datasets'],
  summary: 'Find datasets',
  description: 'Find datasets',
  operationId: 'findDatasets',
  request: {
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            schema: { minimum: 1, type: 'integer', format: 'int32', default: 1 },
            required: false,
          },
        }),
      size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'size',
            in: 'query',
            schema: { minimum: 1, type: 'integer', format: 'int32', default: 10 },
            required: false,
          },
        }),
      with_experiments_only: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'with_experiments_only',
            in: 'query',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      with_optimizations_only: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'with_optimizations_only',
            in: 'query',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      prompt_id: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            name: 'prompt_id',
            in: 'query',
            schema: { type: 'string', format: 'uuid' },
            required: false,
          },
        }),
      project_id: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            name: 'project_id',
            in: 'query',
            schema: { type: 'string', format: 'uuid' },
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
            schema: {
              type: 'string',
              description: 'Filter datasets by name (partial match, case insensitive)',
            },
            required: false,
          },
          description: 'Filter datasets by name (partial match, case insensitive)',
        }),
      sorting: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'sorting', in: 'query', schema: { type: 'string' }, required: false },
        }),
      filters: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'filters', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Dataset resource',
      content: { 'application/json': { schema: DatasetPagePublicSchema } },
    },
  },
})

export const postV1PrivateDatasetsRoute = createRoute({
  method: 'post',
  path: '/v1/private/datasets',
  tags: ['Datasets'],
  summary: 'Create dataset',
  description: 'Create dataset',
  operationId: 'createDataset',
  request: { body: { content: { 'application/json': { schema: DatasetWriteSchema } } } },
  responses: {
    201: {
      description: 'Created',
      headers: z.object({
        Location: {
          required: true,
          example: '${basePath}/api/v1/private/datasets/{id}',
          style: 'simple',
          schema: z.string().openapi({ example: '${basePath}/api/v1/private/datasets/{id}' }),
        },
      }),
    },
  },
})

export const putV1PrivateDatasetsItemsRoute = createRoute({
  method: 'put',
  path: '/v1/private/datasets/items',
  tags: ['Datasets'],
  summary: 'Create/update dataset items',
  description:
    "Create/update dataset items based on dataset item id.\nEach item's 'id' field is the stable identifier and upsert key.\nProvide it to update an existing item, or omit it to create a new one.\n\nSet 'copy_from_dataset_id' and 'copy_from_version_id' together to read carry-forward rows\nfrom the supplied (dataset, version) pair instead of the destination's prior version. When\nthe fields are null, carry-forward rows are read from the destination's prior version.",
  operationId: 'createOrUpdateDatasetItems',
  request: { body: { content: { 'application/json': { schema: DatasetItemBatchWriteSchema } } } },
  responses: { 204: { description: 'No content' } },
})

export const postV1PrivateDatasetsItemsFromCsvRoute = createRoute({
  method: 'post',
  path: '/v1/private/datasets/items/from-csv',
  tags: ['Datasets'],
  summary: 'Create dataset items from CSV file',
  description:
    'Create dataset items from uploaded CSV file. CSV should have headers in the first row. Processing happens asynchronously in batches.',
  operationId: 'createDatasetItemsFromCsv',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({ file: z.object({}), dataset_id: z.uuid() })
            .openapi({ required: ['dataset_id', 'file'] }),
        },
      },
    },
  },
  responses: {
    202: { description: 'Accepted - CSV processing started' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const postV1PrivateDatasetsItemsFromJsonRoute = createRoute({
  method: 'post',
  path: '/v1/private/datasets/items/from-json',
  tags: ['Datasets'],
  summary: 'Create dataset items from JSON file',
  description:
    "Create dataset items from an uploaded JSON or JSONL file. JSON files must contain a top-level array of objects.\nJSONL files contain one JSON object per non-blank line; multi-line JSON objects are not supported.\nReserved keys (id, source, description, tags, evaluators, execution_policy) are extracted into the\ncorresponding DatasetItem fields; all remaining keys form the item's data map and preserve their JSON types.\nTo link dataset items to specific traces or spans use the dedicated /items/from-traces or /items/from-spans endpoints.\nProcessing happens asynchronously in batches. With dataset versioning enabled, a supplied id acts as an upsert key.",
  operationId: 'createDatasetItemsFromJson',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({ file: z.object({}), dataset_id: z.uuid(), format: z.enum(['json', 'jsonl']) })
            .openapi({ required: ['dataset_id', 'file', 'format'] }),
        },
      },
    },
  },
  responses: {
    202: { description: 'Accepted - JSON processing started' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const postV1PrivateDatasetsDatasetIdItemsFromSpansRoute = createRoute({
  method: 'post',
  path: '/v1/private/datasets/{dataset_id}/items/from-spans',
  tags: ['Datasets'],
  summary: 'Create dataset items from spans',
  description: 'Create dataset items from spans with enriched metadata',
  operationId: 'createDatasetItemsFromSpans',
  request: {
    params: z.object({
      dataset_id: z
        .uuid()
        .openapi({
          param: {
            name: 'dataset_id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateDatasetItemsFromSpansRequestSchema } } },
  },
  responses: { 204: { description: 'No content' } },
})

export const postV1PrivateDatasetsDatasetIdItemsFromTracesRoute = createRoute({
  method: 'post',
  path: '/v1/private/datasets/{dataset_id}/items/from-traces',
  tags: ['Datasets'],
  summary: 'Create dataset items from traces',
  description: 'Create dataset items from traces with enriched metadata',
  operationId: 'createDatasetItemsFromTraces',
  request: {
    params: z.object({
      dataset_id: z
        .uuid()
        .openapi({
          param: {
            name: 'dataset_id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateDatasetItemsFromTracesRequestSchema } },
    },
  },
  responses: { 204: { description: 'No content' } },
})

export const getV1PrivateDatasetsIdRoute = createRoute({
  method: 'get',
  path: '/v1/private/datasets/{id}',
  tags: ['Datasets'],
  summary: 'Get dataset by id',
  description: 'Get dataset by id',
  operationId: 'getDatasetById',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Dataset resource',
      content: { 'application/json': { schema: DatasetPublicSchema } },
    },
  },
})

export const putV1PrivateDatasetsIdRoute = createRoute({
  method: 'put',
  path: '/v1/private/datasets/{id}',
  tags: ['Datasets'],
  summary: 'Update dataset by id',
  description: 'Update dataset by id',
  operationId: 'updateDataset',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DatasetUpdateSchema } } },
  },
  responses: { 204: { description: 'No content' } },
})

export const deleteV1PrivateDatasetsIdRoute = createRoute({
  method: 'delete',
  path: '/v1/private/datasets/{id}',
  tags: ['Datasets'],
  summary: 'Delete dataset by id',
  description: 'Delete dataset by id',
  operationId: 'deleteDataset',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'No content' } },
})

export const postV1PrivateDatasetsDeleteRoute = createRoute({
  method: 'post',
  path: '/v1/private/datasets/delete',
  tags: ['Datasets'],
  summary: 'Delete dataset by name',
  description: 'Delete dataset by name',
  operationId: 'deleteDatasetByName',
  request: { body: { content: { 'application/json': { schema: DatasetIdentifierSchema } } } },
  responses: { 204: { description: 'No content' } },
})

export const postV1PrivateDatasetsItemsDeleteRoute = createRoute({
  method: 'post',
  path: '/v1/private/datasets/items/delete',
  tags: ['Datasets'],
  summary: 'Delete dataset items',
  description:
    "Delete dataset items using one of two modes:\n1. **Delete by IDs**: Provide 'item_ids' to delete specific items by their IDs\n2. **Delete by filters**: Provide 'dataset_id' with optional 'filters' to delete items matching criteria\n\nWhen using filters, an empty 'filters' array will delete all items in the specified dataset.\n",
  operationId: 'deleteDatasetItems',
  request: { body: { content: { 'application/json': { schema: DatasetItemsDeleteSchema } } } },
  responses: {
    204: { description: 'No content' },
    400: { description: 'Bad request - invalid parameters or conflicting fields' },
  },
})

export const postV1PrivateDatasetsDeleteBatchRoute = createRoute({
  method: 'post',
  path: '/v1/private/datasets/delete-batch',
  tags: ['Datasets'],
  summary: 'Delete datasets',
  description: 'Delete datasets batch',
  operationId: 'deleteDatasetsBatch',
  request: { body: { content: { 'application/json': { schema: BatchDeleteSchema } } } },
  responses: { 204: { description: 'No content' } },
})

export const getV1PrivateDatasetsExportJobsJobIdDownloadRoute = createRoute({
  method: 'get',
  path: '/v1/private/datasets/export-jobs/{jobId}/download',
  tags: ['Datasets'],
  summary: 'Download dataset export file',
  description:
    'Downloads the exported CSV file for a completed export job. This endpoint proxies the file download to avoid exposing internal storage URLs.',
  operationId: 'downloadDatasetExport',
  request: {
    params: z.object({
      jobId: z
        .uuid()
        .openapi({
          param: {
            name: 'jobId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'CSV file content',
      content: { 'text/csv': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
    400: { description: 'Export job is not ready for download' },
    404: { description: 'Export job not found' },
  },
})

export const postV1PrivateDatasetsIdExpansionsRoute = createRoute({
  method: 'post',
  path: '/v1/private/datasets/{id}/expansions',
  tags: ['Datasets'],
  summary: 'Expand dataset with synthetic samples',
  description: 'Generate synthetic dataset samples using LLM based on existing data patterns',
  operationId: 'expandDataset',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DatasetExpansionWriteSchema } } },
  },
  responses: {
    200: {
      description: 'Generated synthetic samples',
      content: { 'application/json': { schema: DatasetExpansionResponseSchema } },
    },
  },
})

export const getV1PrivateDatasetsIdItemsExperimentsItemsRoute = createRoute({
  method: 'get',
  path: '/v1/private/datasets/{id}/items/experiments/items',
  tags: ['Datasets'],
  summary: 'Find dataset items with experiment items',
  description: 'Find dataset items with experiment items',
  operationId: 'findDatasetItemsWithExperimentItems',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
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
          z.int32().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            schema: { minimum: 1, type: 'integer', format: 'int32', default: 1 },
            required: false,
          },
        }),
      size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'size',
            in: 'query',
            schema: { minimum: 1, type: 'integer', format: 'int32', default: 10 },
            required: false,
          },
        }),
      experiment_ids: z
        .string()
        .openapi({
          param: {
            name: 'experiment_ids',
            in: 'query',
            required: true,
            schema: { type: 'string' },
          },
        }),
      filters: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'filters', in: 'query', schema: { type: 'string' }, required: false },
        }),
      sorting: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'sorting', in: 'query', schema: { type: 'string' }, required: false },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'search', in: 'query', schema: { type: 'string' }, required: false },
        }),
      truncate: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'truncate',
            in: 'query',
            schema: {
              type: 'boolean',
              description: 'Truncate image included in either input, output or metadata',
            },
            required: false,
          },
          description: 'Truncate image included in either input, output or metadata',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Dataset item resource',
      content: { 'application/json': { schema: DatasetItemPageCompareSchema } },
    },
  },
})

export const postV1PrivateDatasetsRetrieveRoute = createRoute({
  method: 'post',
  path: '/v1/private/datasets/retrieve',
  tags: ['Datasets'],
  summary: 'Get dataset by name',
  description: 'Get dataset by name',
  operationId: 'getDatasetByIdentifier',
  request: { body: { content: { 'application/json': { schema: DatasetIdentifierPublicSchema } } } },
  responses: {
    200: {
      description: 'Dataset resource',
      content: { 'application/json': { schema: DatasetPublicSchema } },
    },
  },
})

export const getV1PrivateDatasetsIdItemsExperimentsItemsStatsRoute = createRoute({
  method: 'get',
  path: '/v1/private/datasets/{id}/items/experiments/items/stats',
  tags: ['Datasets'],
  summary: 'Get experiment items stats for dataset',
  description: 'Get experiment items stats for dataset',
  operationId: 'getDatasetExperimentItemsStats',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    query: z.object({
      experiment_ids: z
        .string()
        .openapi({
          param: {
            name: 'experiment_ids',
            in: 'query',
            required: true,
            schema: { type: 'string' },
          },
        }),
      filters: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'filters', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Experiment items stats resource',
      content: { 'application/json': { schema: ProjectStatsPublicSchema } },
    },
  },
})

export const getV1PrivateDatasetsExportJobsJobIdRoute = createRoute({
  method: 'get',
  path: '/v1/private/datasets/export-jobs/{jobId}',
  tags: ['Datasets'],
  summary: 'Get dataset export job status',
  description: 'Retrieves the current status of a dataset export job',
  operationId: 'getDatasetExportJob',
  request: {
    params: z.object({
      jobId: z
        .uuid()
        .openapi({
          param: {
            name: 'jobId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Export job details',
      content: { 'application/json': { schema: DatasetExportJobPublicSchema } },
    },
    404: { description: 'Export job not found' },
  },
})

export const getV1PrivateDatasetsExportJobsRoute = createRoute({
  method: 'get',
  path: '/v1/private/datasets/export-jobs',
  tags: ['Datasets'],
  summary: 'Get all dataset export jobs',
  description:
    'Retrieves all export jobs for the workspace. This is used to restore the export panel state after page refresh.',
  operationId: 'getDatasetExportJobs',
  responses: {
    200: {
      description: 'List of export jobs',
      content: { 'application/json': { schema: z.array(DatasetExportJobPublicSchema) } },
    },
  },
})

export const getV1PrivateDatasetsItemsItemIdRoute = createRoute({
  method: 'get',
  path: '/v1/private/datasets/items/{itemId}',
  tags: ['Datasets'],
  summary: 'Get dataset item by id',
  description: 'Get dataset item by id',
  operationId: 'getDatasetItemById',
  request: {
    params: z.object({
      itemId: z
        .uuid()
        .openapi({
          param: {
            name: 'itemId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Dataset item resource',
      content: { 'application/json': { schema: DatasetItemPublicSchema } },
    },
  },
})

export const patchV1PrivateDatasetsItemsItemIdRoute = createRoute({
  method: 'patch',
  path: '/v1/private/datasets/items/{itemId}',
  tags: ['Datasets'],
  summary: 'Partially update dataset item by id',
  description: 'Partially update dataset item by id. Only provided fields will be updated.',
  operationId: 'patchDatasetItem',
  request: {
    params: z.object({
      itemId: z
        .uuid()
        .openapi({
          param: {
            name: 'itemId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DatasetItemWriteSchema } } },
  },
  responses: { 204: { description: 'No content' }, 404: { description: 'Dataset item not found' } },
})

export const getV1PrivateDatasetsIdItemsRoute = createRoute({
  method: 'get',
  path: '/v1/private/datasets/{id}/items',
  tags: ['Datasets'],
  summary: 'Get dataset items',
  description: 'Get dataset items',
  operationId: 'getDatasetItems',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
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
          z.int32().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            schema: { minimum: 1, type: 'integer', format: 'int32', default: 1 },
            required: false,
          },
        }),
      size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'size',
            in: 'query',
            schema: { minimum: 1, type: 'integer', format: 'int32', default: 10 },
            required: false,
          },
        }),
      version: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'version',
            in: 'query',
            schema: {
              type: 'string',
              description: 'Version hash or tag to fetch specific dataset version',
            },
            required: false,
          },
          description: 'Version hash or tag to fetch specific dataset version',
        }),
      filters: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'filters', in: 'query', schema: { type: 'string' }, required: false },
        }),
      truncate: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'truncate',
            in: 'query',
            schema: {
              type: 'boolean',
              description: 'Truncate image included in either input, output or metadata',
            },
            required: false,
          },
          description: 'Truncate image included in either input, output or metadata',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Dataset items resource',
      content: { 'application/json': { schema: DatasetItemPagePublicSchema } },
    },
  },
})

export const getV1PrivateDatasetsIdItemsExperimentsItemsOutputColumnsRoute = createRoute({
  method: 'get',
  path: '/v1/private/datasets/{id}/items/experiments/items/output/columns',
  tags: ['Datasets'],
  summary: 'Get dataset items output columns',
  description: 'Get dataset items output columns',
  operationId: 'getDatasetItemsOutputColumns',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    query: z.object({
      experiment_ids: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'experiment_ids',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Dataset item output columns',
      content: { 'application/json': { schema: PageColumnsSchema } },
    },
  },
})

export const putV1PrivateDatasetsExportJobsJobIdMarkViewedRoute = createRoute({
  method: 'put',
  path: '/v1/private/datasets/export-jobs/{jobId}/mark-viewed',
  tags: ['Datasets'],
  summary: 'Mark dataset export job as viewed',
  description:
    "Marks a dataset export job as viewed by setting the viewed_at timestamp. This is used to track that a user has seen a failed job's error message. This operation is idempotent.",
  operationId: 'markDatasetExportJobViewed',
  request: {
    params: z.object({
      jobId: z
        .uuid()
        .openapi({
          param: {
            name: 'jobId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Job marked as viewed' },
    404: { description: 'Export job not found' },
  },
})

export const postV1PrivateDatasetsIdExportRoute = createRoute({
  method: 'post',
  path: '/v1/private/datasets/{id}/export',
  tags: ['Datasets'],
  summary: 'Start dataset CSV export',
  description:
    'Initiates an asynchronous CSV export job for the dataset. Returns immediately with job details for polling.',
  operationId: 'startDatasetExport',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Existing export job in progress',
      content: { 'application/json': { schema: DatasetExportJobPublicSchema } },
    },
    202: {
      description: 'Export job created',
      content: { 'application/json': { schema: DatasetExportJobPublicSchema } },
    },
  },
})

export const postV1PrivateDatasetsItemsStreamRoute = createRoute({
  method: 'post',
  path: '/v1/private/datasets/items/stream',
  tags: ['Datasets'],
  summary: 'Stream dataset items',
  description: 'Stream dataset items',
  operationId: 'streamDatasetItems',
  request: {
    body: { content: { 'application/json': { schema: DatasetItemStreamRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Dataset items stream or error during process',
      content: {
        'application/octet-stream': {
          schema: z.array(z.union([DatasetItemSchema, ErrorMessageSchema])).max(2000),
        },
      },
    },
  },
})

export const getV1PrivateDatasetsIdVersionsDiffRoute = createRoute({
  method: 'get',
  path: '/v1/private/datasets/{id}/versions/diff',
  tags: ['Datasets'],
  summary: 'Compare latest version with draft',
  description:
    'Compare the latest committed dataset version with the current draft state. This endpoint provides insights into changes made since the last version was committed. The comparison calculates additions, modifications, deletions, and unchanged items between the latest version snapshot and current draft.',
  operationId: 'compareDatasetVersions',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Diff computed successfully',
      content: { 'application/json': { schema: DatasetVersionDiffSchema } },
    },
    404: { description: 'Version not found' },
  },
})

export const postV1PrivateDatasetsIdVersionsHashVersionHashTagsRoute = createRoute({
  method: 'post',
  path: '/v1/private/datasets/{id}/versions/hash/{versionHash}/tags',
  tags: ['Datasets'],
  summary: 'Create version tag',
  description:
    "Add a tag to a specific dataset version for easy reference (e.g., 'baseline', 'v1.0', 'production')",
  operationId: 'createVersionTag',
  request: {
    params: z.object({
      versionHash: z
        .string()
        .openapi({
          param: { name: 'versionHash', in: 'path', required: true, schema: { type: 'string' } },
        }),
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DatasetVersionTagSchema } } },
  },
  responses: {
    204: { description: 'Tag created successfully' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: {
      description: 'Not Found - Version not found',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    409: {
      description: 'Conflict - Tag already exists',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const deleteV1PrivateDatasetsIdVersionsVersionHashTagsTagRoute = createRoute({
  method: 'delete',
  path: '/v1/private/datasets/{id}/versions/{versionHash}/tags/{tag}',
  tags: ['Datasets'],
  summary: 'Delete version tag',
  description:
    'Remove a tag from a dataset version. The version itself is not deleted, only the tag reference.',
  operationId: 'deleteVersionTag',
  request: {
    params: z.object({
      versionHash: z
        .string()
        .openapi({
          param: { name: 'versionHash', in: 'path', required: true, schema: { type: 'string' } },
        }),
      tag: z
        .string()
        .openapi({
          param: { name: 'tag', in: 'path', required: true, schema: { type: 'string' } },
        }),
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Tag deleted successfully' } },
})

export const getV1PrivateDatasetsIdVersionsHashVersionHashRoute = createRoute({
  method: 'get',
  path: '/v1/private/datasets/{id}/versions/hash/{versionHash}',
  tags: ['Datasets'],
  summary: 'Get dataset version by hash',
  description: 'Get a specific version by its version hash',
  operationId: 'getDatasetVersionByHash',
  request: {
    params: z.object({
      versionHash: z
        .string()
        .openapi({
          param: { name: 'versionHash', in: 'path', required: true, schema: { type: 'string' } },
        }),
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Dataset version',
      content: { 'application/json': { schema: DatasetVersionPublicSchema } },
    },
    404: {
      description: 'Version not found',
      content: { 'application/json': { schema: ErrorMessagePublicSchema } },
    },
  },
})

export const patchV1PrivateDatasetsIdVersionsHashVersionHashRoute = createRoute({
  method: 'patch',
  path: '/v1/private/datasets/{id}/versions/hash/{versionHash}',
  tags: ['Datasets'],
  summary: 'Update dataset version',
  description: "Update a dataset version's change_description and/or add new tags",
  operationId: 'updateDatasetVersion',
  request: {
    params: z.object({
      versionHash: z
        .string()
        .openapi({
          param: { name: 'versionHash', in: 'path', required: true, schema: { type: 'string' } },
        }),
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DatasetVersionUpdatePublicSchema } } },
  },
  responses: {
    200: {
      description: 'Version updated successfully',
      content: { 'application/json': { schema: DatasetVersionPublicSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessagePublicSchema } },
    },
    404: {
      description: 'Not Found - Version not found',
      content: { 'application/json': { schema: ErrorMessagePublicSchema } },
    },
    409: {
      description: 'Conflict - Tag already exists',
      content: { 'application/json': { schema: ErrorMessagePublicSchema } },
    },
  },
})

export const getV1PrivateDatasetsIdVersionsRoute = createRoute({
  method: 'get',
  path: '/v1/private/datasets/{id}/versions',
  tags: ['Datasets'],
  summary: 'List dataset versions',
  description:
    'Get paginated list of versions for a dataset, ordered by creation time (newest first)',
  operationId: 'listDatasetVersions',
  request: {
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            schema: { minimum: 1, type: 'integer', format: 'int32', default: 1 },
            required: false,
          },
        }),
      size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'size',
            in: 'query',
            schema: { minimum: 1, type: 'integer', format: 'int32', default: 10 },
            required: false,
          },
        }),
    }),
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Dataset versions',
      content: { 'application/json': { schema: DatasetVersionPagePublicSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessagePublicSchema } },
    },
  },
})

export const postV1PrivateDatasetsIdVersionsRestoreRoute = createRoute({
  method: 'post',
  path: '/v1/private/datasets/{id}/versions/restore',
  tags: ['Datasets'],
  summary: 'Restore dataset to a previous version',
  description:
    'Restores the dataset to a previous version state by creating a new version with items copied from the specified version. If the version is already the latest, returns it as-is (no-op).',
  operationId: 'restoreDatasetVersion',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DatasetVersionRestorePublicSchema } } },
  },
  responses: {
    200: {
      description: 'Version restored successfully',
      content: { 'application/json': { schema: DatasetVersionPublicSchema } },
    },
    404: {
      description: 'Version not found',
      content: { 'application/json': { schema: ErrorMessagePublicSchema } },
    },
    409: {
      description: 'Concurrent modification - the latest version changed during the restore; retry',
      content: { 'application/json': { schema: ErrorMessagePublicSchema } },
    },
  },
})

export const postV1PrivateDatasetsIdVersionsRetrieveRoute = createRoute({
  method: 'post',
  path: '/v1/private/datasets/{id}/versions/retrieve',
  tags: ['Datasets'],
  summary: 'Retrieve dataset version by name',
  description:
    "Get a specific version by its version name (e.g., 'v1', 'v373'). This is more efficient than paginating through all versions for large datasets.",
  operationId: 'retrieveDatasetVersion',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DatasetVersionRetrieveRequestPublicSchema } },
    },
  },
  responses: {
    200: {
      description: 'Dataset version',
      content: { 'application/json': { schema: DatasetVersionPublicSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessagePublicSchema } },
    },
    404: {
      description: 'Version not found',
      content: { 'application/json': { schema: ErrorMessagePublicSchema } },
    },
  },
})

export const getV1PrivateEnvironmentsRoute = createRoute({
  method: 'get',
  path: '/v1/private/environments',
  tags: ['Environments'],
  summary: 'Find environments',
  description: 'Find environments for the workspace. Capped at the workspace limit (default 100).',
  operationId: 'findEnvironments',
  responses: {
    200: {
      description: 'Environments page',
      content: { 'application/json': { schema: EnvironmentPagePublicSchema } },
    },
  },
})

export const postV1PrivateEnvironmentsRoute = createRoute({
  method: 'post',
  path: '/v1/private/environments',
  tags: ['Environments'],
  summary: 'Create environment',
  description: 'Create environment',
  operationId: 'createEnvironment',
  request: { body: { content: { 'application/json': { schema: EnvironmentWriteSchema } } } },
  responses: {
    201: {
      description: 'Created',
      headers: z.object({
        Location: {
          required: true,
          example: '${basePath}/v1/private/environments/{environmentId}',
          style: 'simple',
          schema: z
            .string()
            .openapi({ example: '${basePath}/v1/private/environments/{environmentId}' }),
        },
      }),
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const postV1PrivateEnvironmentsDeleteRoute = createRoute({
  method: 'post',
  path: '/v1/private/environments/delete',
  tags: ['Environments'],
  summary: 'Delete environments',
  description: 'Delete environments batch. Idempotent — missing ids are silently ignored.',
  operationId: 'deleteEnvironmentsBatch',
  request: { body: { content: { 'application/json': { schema: BatchDeleteSchema } } } },
  responses: { 204: { description: 'No Content' } },
})

export const getV1PrivateEnvironmentsIdRoute = createRoute({
  method: 'get',
  path: '/v1/private/environments/{id}',
  tags: ['Environments'],
  summary: 'Get environment by id',
  description: 'Get environment by id',
  operationId: 'getEnvironmentById',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Environment',
      content: { 'application/json': { schema: EnvironmentPublicSchema } },
    },
    404: {
      description: 'Not found',
      content: { 'application/json': { schema: ErrorMessagePublicSchema } },
    },
  },
})

export const patchV1PrivateEnvironmentsIdRoute = createRoute({
  method: 'patch',
  path: '/v1/private/environments/{id}',
  tags: ['Environments'],
  summary: 'Update environment by id',
  description: 'Update environment by id',
  operationId: 'updateEnvironment',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EnvironmentUpdateSchema } } },
  },
  responses: {
    204: { description: 'No Content' },
    404: {
      description: 'Not found',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const patchV1PrivateExperimentsBatchRoute = createRoute({
  method: 'patch',
  path: '/v1/private/experiments/batch',
  tags: ['Experiments'],
  summary: 'Batch update experiments',
  description: 'Update multiple experiments',
  operationId: 'batchUpdateExperiments',
  request: { body: { content: { 'application/json': { schema: ExperimentBatchUpdateSchema } } } },
  responses: {
    204: { description: 'No Content' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const putV1PrivateExperimentsCancelRoute = createRoute({
  method: 'put',
  path: '/v1/private/experiments/cancel',
  tags: ['Experiments'],
  summary: 'Cancel running experiments',
  description:
    'Stops the given experiments: queued items are skipped and the experiments are marked cancelled',
  operationId: 'cancelExperiments',
  request: { body: { content: { 'application/json': { schema: IdsHolderSchema } } } },
  responses: {
    204: { description: 'No content' },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const getV1PrivateExperimentsRoute = createRoute({
  method: 'get',
  path: '/v1/private/experiments',
  tags: ['Experiments'],
  summary: 'Find experiments',
  description: 'Find experiments',
  operationId: 'findExperiments',
  request: {
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            schema: { minimum: 1, type: 'integer', format: 'int32', default: 1 },
            required: false,
          },
        }),
      size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'size',
            in: 'query',
            schema: { minimum: 1, type: 'integer', format: 'int32', default: 10 },
            required: false,
          },
        }),
      datasetId: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            name: 'datasetId',
            in: 'query',
            schema: { type: 'string', format: 'uuid' },
            required: false,
          },
        }),
      optimization_id: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            name: 'optimization_id',
            in: 'query',
            schema: { type: 'string', format: 'uuid' },
            required: false,
          },
        }),
      types: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'types', in: 'query', schema: { type: 'string' }, required: false },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            schema: {
              type: 'string',
              description: 'Filter experiments by name (partial match, case insensitive)',
            },
            required: false,
          },
          description: 'Filter experiments by name (partial match, case insensitive)',
        }),
      dataset_deleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'dataset_deleted',
            in: 'query',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      prompt_id: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            name: 'prompt_id',
            in: 'query',
            schema: { type: 'string', format: 'uuid' },
            required: false,
          },
        }),
      project_id: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            name: 'project_id',
            in: 'query',
            schema: { type: 'string', format: 'uuid' },
            required: false,
          },
        }),
      project_deleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'project_deleted',
            in: 'query',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      sorting: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'sorting', in: 'query', schema: { type: 'string' }, required: false },
        }),
      filters: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'filters', in: 'query', schema: { type: 'string' }, required: false },
        }),
      experiment_ids: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'experiment_ids',
            in: 'query',
            schema: {
              type: 'string',
              description: 'Filter experiments by a list of experiment IDs',
            },
            required: false,
          },
          description: 'Filter experiments by a list of experiment IDs',
        }),
      force_sorting: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'force_sorting',
            in: 'query',
            schema: {
              type: 'boolean',
              description:
                'Force sorting even when exceeding the endpoint result set limit. May result in slower queries',
              default: false,
            },
            required: false,
          },
          description:
            'Force sorting even when exceeding the endpoint result set limit. May result in slower queries',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Experiments resource',
      content: { 'application/json': { schema: ExperimentPagePublicSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessagePublicSchema } },
    },
  },
})

export const postV1PrivateExperimentsRoute = createRoute({
  method: 'post',
  path: '/v1/private/experiments',
  tags: ['Experiments'],
  summary: 'Create experiment',
  description: 'Create experiment',
  operationId: 'createExperiment',
  request: { body: { content: { 'application/json': { schema: ExperimentWriteSchema } } } },
  responses: {
    201: {
      description: 'Created',
      headers: z.object({
        Location: {
          required: true,
          example: '${basePath}/v1/private/experiments/{id}',
          style: 'simple',
          schema: z.string().openapi({ example: '${basePath}/v1/private/experiments/{id}' }),
        },
      }),
    },
  },
})

export const postV1PrivateExperimentsItemsRoute = createRoute({
  method: 'post',
  path: '/v1/private/experiments/items',
  tags: ['Experiments'],
  summary: 'Create experiment items',
  description: 'Create experiment items',
  operationId: 'createExperimentItems',
  request: { body: { content: { 'application/json': { schema: ExperimentItemsBatchSchema } } } },
  responses: { 204: { description: 'No content' } },
})

export const postV1PrivateExperimentsItemsDeleteRoute = createRoute({
  method: 'post',
  path: '/v1/private/experiments/items/delete',
  tags: ['Experiments'],
  summary: 'Delete experiment items',
  description: 'Delete experiment items',
  operationId: 'deleteExperimentItems',
  request: { body: { content: { 'application/json': { schema: ExperimentItemsDeleteSchema } } } },
  responses: { 204: { description: 'No content' } },
})

export const postV1PrivateExperimentsDeleteRoute = createRoute({
  method: 'post',
  path: '/v1/private/experiments/delete',
  tags: ['Experiments'],
  summary: 'Delete experiments by id',
  description: 'Delete experiments by id',
  operationId: 'deleteExperimentsById',
  request: { body: { content: { 'application/json': { schema: DeleteIdsHolderSchema } } } },
  responses: { 204: { description: 'No content' } },
})

export const postV1PrivateExperimentsExecuteRoute = createRoute({
  method: 'post',
  path: '/v1/private/experiments/execute',
  tags: ['Experiments'],
  summary: 'Create and execute experiment',
  description:
    'Creates experiments for each prompt variant and asynchronously processes all dataset items',
  operationId: 'executeExperiment',
  request: {
    body: {
      content: { 'application/json': { schema: ExperimentExecutionRequestSchema } },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Experiments created and processing started',
      content: { 'application/json': { schema: ExperimentExecutionResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    403: {
      description: 'Forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const putV1PrivateExperimentsItemsBulkRoute = createRoute({
  method: 'put',
  path: '/v1/private/experiments/items/bulk',
  tags: ['Experiments'],
  summary: 'Record experiment items in bulk',
  description:
    'Record experiment items in bulk with traces, spans, and feedback scores. Maximum request size is 4MB.',
  operationId: 'experimentItemsBulk',
  request: {
    body: {
      content: {
        'application/json': { schema: ExperimentItemBulkUploadExperimentItemBulkWriteViewSchema },
      },
    },
  },
  responses: {
    204: { description: 'No content' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    422: {
      description: 'Unprocessable Content',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const getV1PrivateExperimentsFeedbackScoresNamesRoute = createRoute({
  method: 'get',
  path: '/v1/private/experiments/feedback-scores/names',
  tags: ['Experiments'],
  summary: 'Find Feedback Score names',
  description: 'Find Feedback Score names',
  operationId: 'findFeedbackScoreNames',
  request: {
    query: z.object({
      experiment_ids: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'experiment_ids',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      project_id: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            name: 'project_id',
            in: 'query',
            schema: { type: 'string', format: 'uuid' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Feedback Scores resource',
      content: { 'application/json': { schema: FeedbackScoreNamesPublicSchema } },
    },
  },
})

export const getV1PrivateExperimentsGroupsRoute = createRoute({
  method: 'get',
  path: '/v1/private/experiments/groups',
  tags: ['Experiments'],
  summary: 'Find experiment groups',
  description: 'Find experiments grouped by specified fields',
  operationId: 'findExperimentGroups',
  request: {
    query: z.object({
      groups: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'groups', in: 'query', schema: { type: 'string' }, required: false },
        }),
      types: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'types', in: 'query', schema: { type: 'string' }, required: false },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            schema: {
              type: 'string',
              description: 'Filter experiments by name (partial match, case insensitive)',
            },
            required: false,
          },
          description: 'Filter experiments by name (partial match, case insensitive)',
        }),
      project_id: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            name: 'project_id',
            in: 'query',
            schema: { type: 'string', format: 'uuid' },
            required: false,
          },
        }),
      project_deleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'project_deleted',
            in: 'query',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      filters: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'filters', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Experiment groups',
      content: { 'application/json': { schema: ExperimentGroupResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const getV1PrivateExperimentsGroupsAggregationsRoute = createRoute({
  method: 'get',
  path: '/v1/private/experiments/groups/aggregations',
  tags: ['Experiments'],
  summary: 'Find experiment groups with aggregations',
  description: 'Find experiments grouped by specified fields with aggregation metrics',
  operationId: 'findExperimentGroupsAggregations',
  request: {
    query: z.object({
      groups: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'groups', in: 'query', schema: { type: 'string' }, required: false },
        }),
      types: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'types', in: 'query', schema: { type: 'string' }, required: false },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            schema: {
              type: 'string',
              description: 'Filter experiments by name (partial match, case insensitive)',
            },
            required: false,
          },
          description: 'Filter experiments by name (partial match, case insensitive)',
        }),
      project_id: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            name: 'project_id',
            in: 'query',
            schema: { type: 'string', format: 'uuid' },
            required: false,
          },
        }),
      project_deleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'project_deleted',
            in: 'query',
            schema: { type: 'boolean', description: 'Filter experiments by deleted projects' },
            required: false,
          },
          description: 'Filter experiments by deleted projects',
        }),
      filters: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'filters', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Experiment groups with aggregations',
      content: { 'application/json': { schema: ExperimentGroupAggregationsResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const postV1PrivateExperimentsFinishRoute = createRoute({
  method: 'post',
  path: '/v1/private/experiments/finish',
  tags: ['Experiments'],
  summary: 'Finish experiments',
  description: 'Finish experiments and trigger alert events',
  operationId: 'finishExperiments',
  request: { body: { content: { 'application/json': { schema: DeleteIdsHolderSchema } } } },
  responses: {
    204: { description: 'No content' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const getV1PrivateExperimentsIdRoute = createRoute({
  method: 'get',
  path: '/v1/private/experiments/{id}',
  tags: ['Experiments'],
  summary: 'Get experiment by id',
  description: 'Get experiment by id',
  operationId: 'getExperimentById',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Experiment resource',
      content: { 'application/json': { schema: ExperimentPublicSchema } },
    },
    404: {
      description: 'Not found',
      content: { 'application/json': { schema: ErrorMessagePublicSchema } },
    },
  },
})

export const patchV1PrivateExperimentsIdRoute = createRoute({
  method: 'patch',
  path: '/v1/private/experiments/{id}',
  tags: ['Experiments'],
  summary: 'Update experiment by id',
  description: 'Update experiment by id',
  operationId: 'updateExperiment',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ExperimentUpdateSchema } } },
  },
  responses: {
    204: { description: 'No Content' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: {
      description: 'Not found',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const getV1PrivateExperimentsItemsIdRoute = createRoute({
  method: 'get',
  path: '/v1/private/experiments/items/{id}',
  tags: ['Experiments'],
  summary: 'Get experiment item by id',
  description: 'Get experiment item by id',
  operationId: 'getExperimentItemById',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Experiment item resource',
      content: { 'application/json': { schema: ExperimentItemPublicSchema } },
    },
    404: {
      description: 'Not found',
      content: { 'application/json': { schema: ErrorMessagePublicSchema } },
    },
  },
})

export const postV1PrivateExperimentsItemsStreamRoute = createRoute({
  method: 'post',
  path: '/v1/private/experiments/items/stream',
  tags: ['Experiments'],
  summary: 'Stream experiment items',
  description: 'Stream experiment items',
  operationId: 'streamExperimentItems',
  request: {
    body: { content: { 'application/json': { schema: ExperimentItemStreamRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Experiment items stream or error during process',
      content: {
        'application/octet-stream': {
          schema: z.array(z.union([ExperimentItemSchema, ErrorMessageSchema])).max(2000),
        },
      },
    },
  },
})

export const postV1PrivateExperimentsStreamRoute = createRoute({
  method: 'post',
  path: '/v1/private/experiments/stream',
  tags: ['Experiments'],
  summary: 'Stream experiments',
  description: 'Stream experiments',
  operationId: 'streamExperiments',
  request: {
    body: { content: { 'application/json': { schema: ExperimentStreamRequestPublicSchema } } },
  },
  responses: {
    200: {
      description: 'Experiments stream or error during process',
      content: {
        'application/octet-stream': {
          schema: z.array(z.union([ExperimentPublicSchema, ErrorMessagePublicSchema])).max(2000),
        },
      },
    },
  },
})

export const getV1PrivateFeedbackDefinitionsRoute = createRoute({
  method: 'get',
  path: '/v1/private/feedback-definitions',
  tags: ['Feedback-definitions'],
  summary: 'Find Feedback definitions',
  description: 'Find Feedback definitions',
  operationId: 'findFeedbackDefinitions',
  request: {
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            schema: { minimum: 1, type: 'integer', format: 'int32', default: 1 },
            required: false,
          },
        }),
      size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'size',
            in: 'query',
            schema: { minimum: 1, type: 'integer', format: 'int32', default: 10 },
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
            schema: {
              type: 'string',
              description: 'Filter feedback definitions by name (partial match, case insensitive)',
            },
            required: false,
          },
          description: 'Filter feedback definitions by name (partial match, case insensitive)',
        }),
      type: z
        .enum(['numerical', 'categorical', 'boolean'])
        .exactOptional()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            schema: { type: 'string', enum: ['numerical', 'categorical', 'boolean'] },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Feedback definitions resource',
      content: { 'application/json': { schema: FeedbackDefinitionPagePublicSchema } },
    },
  },
})

export const postV1PrivateFeedbackDefinitionsRoute = createRoute({
  method: 'post',
  path: '/v1/private/feedback-definitions',
  tags: ['Feedback-definitions'],
  summary: 'Create feedback definition',
  description: 'Get feedback definition',
  operationId: 'createFeedbackDefinition',
  request: { body: { content: { 'application/json': { schema: FeedbackCreateSchema } } } },
  responses: {
    201: {
      description: 'Created',
      headers: z.object({
        Location: {
          required: true,
          example: '${basePath}/v1/private/feedback-definitions/{feedbackId}',
          style: 'simple',
          schema: z
            .string()
            .openapi({ example: '${basePath}/v1/private/feedback-definitions/{feedbackId}' }),
        },
      }),
    },
  },
})

export const getV1PrivateFeedbackDefinitionsIdRoute = createRoute({
  method: 'get',
  path: '/v1/private/feedback-definitions/{id}',
  tags: ['Feedback-definitions'],
  summary: 'Get feedback definition by id',
  description: 'Get feedback definition by id',
  operationId: 'getFeedbackDefinitionById',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Feedback definition resource',
      content: { 'application/json': { schema: FeedbackPublicSchema } },
    },
  },
})

export const putV1PrivateFeedbackDefinitionsIdRoute = createRoute({
  method: 'put',
  path: '/v1/private/feedback-definitions/{id}',
  tags: ['Feedback-definitions'],
  summary: 'Update feedback definition by id',
  description: 'Update feedback definition by id',
  operationId: 'updateFeedbackDefinition',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: FeedbackUpdateSchema } } },
  },
  responses: { 204: { description: 'No Content' } },
})

export const deleteV1PrivateFeedbackDefinitionsIdRoute = createRoute({
  method: 'delete',
  path: '/v1/private/feedback-definitions/{id}',
  tags: ['Feedback-definitions'],
  summary: 'Delete feedback definition by id',
  description: 'Delete feedback definition by id',
  operationId: 'deleteFeedbackDefinitionById',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const postV1PrivateFeedbackDefinitionsDeleteRoute = createRoute({
  method: 'post',
  path: '/v1/private/feedback-definitions/delete',
  tags: ['Feedback-definitions'],
  summary: 'Delete feedback definitions',
  description: 'Delete feedback definitions batch',
  operationId: 'deleteFeedbackDefinitionsBatch',
  request: { body: { content: { 'application/json': { schema: BatchDeleteSchema } } } },
  responses: {
    204: { description: 'No Content' },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const postV1PrivateGuardrailsRoute = createRoute({
  method: 'post',
  path: '/v1/private/guardrails',
  tags: ['Guardrails'],
  summary: 'Create guardrails for traces in a batch',
  description: 'Batch guardrails for traces',
  operationId: 'createGuardrails',
  request: { body: { content: { 'application/json': { schema: GuardrailBatchWriteSchema } } } },
  responses: { 204: { description: 'No Content' } },
})

export const getV1PrivateInsightsViewsRoute = createRoute({
  method: 'get',
  path: '/v1/private/insights-views',
  tags: ['Insights Views'],
  summary: 'Find insights views',
  description: 'Find insights views in a workspace',
  operationId: 'findInsightsViews',
  request: {
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            schema: { minimum: 1, type: 'integer', format: 'int32', default: 1 },
            required: false,
          },
        }),
      size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'size',
            in: 'query',
            schema: { minimum: 1, type: 'integer', format: 'int32', default: 10 },
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
            schema: {
              type: 'string',
              description: 'Filter insights views by name (partial match, case insensitive)',
            },
            required: false,
          },
          description: 'Filter insights views by name (partial match, case insensitive)',
        }),
      project_id: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            name: 'project_id',
            in: 'query',
            schema: { type: 'string', format: 'uuid' },
            required: false,
          },
        }),
      sorting: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'sorting', in: 'query', schema: { type: 'string' }, required: false },
        }),
      filters: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'filters', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Insights view page',
      content: { 'application/json': { schema: DashboardPagePublicSchema } },
    },
  },
})

export const postV1PrivateInsightsViewsRoute = createRoute({
  method: 'post',
  path: '/v1/private/insights-views',
  tags: ['Insights Views'],
  summary: 'Create insights view',
  description: 'Create a new insights view in a workspace',
  operationId: 'createInsightsView',
  request: { body: { content: { 'application/json': { schema: DashboardWriteSchema } } } },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: DashboardPublicSchema } },
      headers: z.object({
        Location: {
          required: true,
          example: '${basePath}/v1/private/insights-views/{insightsViewId}',
          style: 'simple',
          schema: z
            .string()
            .openapi({ example: '${basePath}/v1/private/insights-views/{insightsViewId}' }),
        },
      }),
    },
  },
})

export const getV1PrivateInsightsViewsInsightsViewIdRoute = createRoute({
  method: 'get',
  path: '/v1/private/insights-views/{insightsViewId}',
  tags: ['Insights Views'],
  summary: 'Get insights view by id',
  description: 'Get insights view by id',
  operationId: 'getInsightsViewById',
  request: {
    params: z.object({
      insightsViewId: z
        .uuid()
        .openapi({
          param: {
            name: 'insightsViewId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Insights view resource',
      content: { 'application/json': { schema: DashboardPublicSchema } },
    },
    404: { description: 'Insights view not found' },
  },
})

export const deleteV1PrivateInsightsViewsInsightsViewIdRoute = createRoute({
  method: 'delete',
  path: '/v1/private/insights-views/{insightsViewId}',
  tags: ['Insights Views'],
  summary: 'Delete insights view',
  description: 'Delete insights view by id',
  operationId: 'deleteInsightsView',
  request: {
    params: z.object({
      insightsViewId: z
        .uuid()
        .openapi({
          param: {
            name: 'insightsViewId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'No content' } },
})

export const patchV1PrivateInsightsViewsInsightsViewIdRoute = createRoute({
  method: 'patch',
  path: '/v1/private/insights-views/{insightsViewId}',
  tags: ['Insights Views'],
  summary: 'Update insights view',
  description:
    'Update insights view by id. Partial updates are supported - only provided fields will be updated.',
  operationId: 'updateInsightsView',
  request: {
    params: z.object({
      insightsViewId: z
        .uuid()
        .openapi({
          param: {
            name: 'insightsViewId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DashboardUpdatePublicSchema } } },
  },
  responses: {
    200: {
      description: 'Updated insights view',
      content: { 'application/json': { schema: DashboardPublicSchema } },
    },
    404: { description: 'Insights view not found' },
    409: { description: 'Conflict - insights view with this name already exists' },
  },
})

export const postV1PrivateInsightsViewsDeleteBatchRoute = createRoute({
  method: 'post',
  path: '/v1/private/insights-views/delete-batch',
  tags: ['Insights Views'],
  summary: 'Delete insights views',
  description: 'Delete insights views batch',
  operationId: 'deleteInsightsViewsBatch',
  request: { body: { content: { 'application/json': { schema: BatchDeleteSchema } } } },
  responses: { 204: { description: 'No content' } },
})

export const postV1PrivateInsightsViewsInsightsViewIdWidgetsWidgetIdQueryRoute = createRoute({
  method: 'post',
  path: '/v1/private/insights-views/{insightsViewId}/widgets/{widgetId}/query',
  tags: ['Insights Views'],
  summary: 'Run a saved widget query',
  description:
    'Runs the query saved on an Ollie chart widget of this insights view over the given date range and returns its rows. The query is read from the saved widget; the request carries no SQL. Returns 501 when Ollie or Custom Charts is not enabled for the workspace.',
  operationId: 'runInsightsViewWidgetQuery',
  request: {
    params: z.object({
      insightsViewId: z
        .uuid()
        .openapi({
          param: {
            name: 'insightsViewId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      widgetId: z
        .string()
        .openapi({
          param: { name: 'widgetId', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: DashboardWidgetQueryRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Query results',
      content: { 'application/json': { schema: AnalyticsQueryResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: { description: 'Insights view not found, or the widget has no dashboard saved query' },
    422: {
      description: 'Unprocessable Content',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    429: {
      description: 'Too many queries are running; retry after the Retry-After delay',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    501: { description: 'Ollie or Custom Charts is not enabled for this workspace' },
  },
})

export const getV1PrivateLlmModelsRoute = createRoute({
  method: 'get',
  path: '/v1/private/llm/models',
  tags: ['LLM Models'],
  summary: 'Get LLM models',
  description: 'Get the list of supported LLM models grouped by provider',
  operationId: 'getLlmModels',
  responses: {
    200: {
      description: 'LLM models by provider',
      content: { 'application/json': { schema: z.string() } },
    },
  },
})

export const getV1PrivateLlmModelsProfilesRoute = createRoute({
  method: 'get',
  path: '/v1/private/llm/models/profiles',
  tags: ['LLM Models'],
  summary: 'Get LLM model profiles',
  description: "Get the params each provider's unlisted models take, keyed by provider",
  operationId: 'getLlmModelProfiles',
  responses: {
    200: {
      description: 'Params by provider',
      content: { 'application/json': { schema: z.record(z.string(), ModelParamsSchema) } },
    },
  },
})

export const postV1PrivateLlmProviderKeyDeleteRoute = createRoute({
  method: 'post',
  path: '/v1/private/llm-provider-key/delete',
  tags: ['LlmProviderKey'],
  summary: "Delete LLM Provider's ApiKeys",
  description: "Delete LLM Provider's ApiKeys batch",
  operationId: 'deleteLlmProviderApiKeysBatch',
  request: { body: { content: { 'application/json': { schema: BatchDeleteSchema } } } },
  responses: { 204: { description: 'No Content' } },
})

export const getV1PrivateLlmProviderKeyRoute = createRoute({
  method: 'get',
  path: '/v1/private/llm-provider-key',
  tags: ['LlmProviderKey'],
  summary: "Find LLM Provider's ApiKeys",
  description: "Find LLM Provider's ApiKeys",
  operationId: 'findLlmProviderKeys',
  responses: {
    200: {
      description: 'LLMProviderApiKey resource',
      content: { 'application/json': { schema: ProviderApiKeyPagePublicSchema } },
    },
  },
})

export const postV1PrivateLlmProviderKeyRoute = createRoute({
  method: 'post',
  path: '/v1/private/llm-provider-key',
  tags: ['LlmProviderKey'],
  summary: "Store LLM Provider's ApiKey",
  description: "Store LLM Provider's ApiKey",
  operationId: 'storeLlmProviderApiKey',
  request: { body: { content: { 'application/json': { schema: ProviderApiKeyWriteSchema } } } },
  responses: {
    201: {
      description: 'Created',
      headers: z.object({
        Location: {
          required: true,
          example: '${basePath}/v1/private/proxy/api_key/{apiKeyId}',
          style: 'simple',
          schema: z
            .string()
            .openapi({ example: '${basePath}/v1/private/proxy/api_key/{apiKeyId}' }),
        },
      }),
    },
    401: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    403: {
      description: 'Access forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const getV1PrivateLlmProviderKeyIdRoute = createRoute({
  method: 'get',
  path: '/v1/private/llm-provider-key/{id}',
  tags: ['LlmProviderKey'],
  summary: "Get LLM Provider's ApiKey by id",
  description: "Get LLM Provider's ApiKey by id",
  operationId: 'getLlmProviderApiKeyById',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'LLMProviderApiKey resource',
      content: { 'application/json': { schema: ProviderApiKeyPublicSchema } },
    },
    404: {
      description: 'Not found',
      content: { 'application/json': { schema: ErrorMessagePublicSchema } },
    },
  },
})

export const patchV1PrivateLlmProviderKeyIdRoute = createRoute({
  method: 'patch',
  path: '/v1/private/llm-provider-key/{id}',
  tags: ['LlmProviderKey'],
  summary: "Update LLM Provider's ApiKey",
  description:
    "Update LLM Provider's ApiKey. api_key and auth_config are mutually exclusive: setting a valid auth_config on a provider that holds a static api_key clears the stored key; send auth_config as an empty object to clear the recipe and switch back to a static key",
  operationId: 'updateLlmProviderApiKey',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ProviderApiKeyUpdateSchema } } },
  },
  responses: {
    204: { description: 'No Content' },
    401: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    403: {
      description: 'Access forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: {
      description: 'Not found',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const postV1PrivateLlmProviderKeyAuthConfigTestRoute = createRoute({
  method: 'post',
  path: '/v1/private/llm-provider-key/auth-config/test',
  tags: ['LlmProviderKey'],
  summary: "Test a provider's dynamic token auth",
  description:
    'Runs the token fetch once, backend-side, and reports the token lifetime. The token itself is never returned. Send provider_id to test the stored config, auth_config to test submitted values, or both to resolve secret sentinels against the stored config.',
  operationId: 'testLlmProviderAuthConfig',
  request: { body: { content: { 'application/json': { schema: ProviderAuthCheckSchema } } } },
  responses: {
    200: {
      description: 'Token fetched',
      content: { 'application/json': { schema: ResultSchema } },
    },
    400: {
      description:
        'Bad Request — the token fetch itself failed (unreachable URL, rejected credentials, malformed reply)',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    403: {
      description: 'Access forbidden',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: {
      description: 'Not found',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    422: {
      description:
        'Unprocessable Content — the request is invalid (neither provider_id nor auth_config, or an invalid auth_config)',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const getV1PrivateLocalRunnersJobsJobIdLogsRoute = createRoute({
  method: 'get',
  path: '/v1/private/local-runners/jobs/{jobId}/logs',
  tags: ['Runners'],
  summary: 'Get local runner job logs',
  description: 'Get log entries for a local runner job',
  operationId: 'getJobLogs',
  request: {
    params: z.object({
      jobId: z
        .uuid()
        .openapi({
          param: {
            name: 'jobId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    query: z.object({
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            in: 'query',
            schema: { minimum: 0, type: 'integer', format: 'int32', default: 0 },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Log entries',
      content: { 'application/json': { schema: z.array(LocalRunnerLogEntrySchema) } },
    },
    404: {
      description: 'Not found',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const postV1PrivateLocalRunnersJobsJobIdLogsRoute = createRoute({
  method: 'post',
  path: '/v1/private/local-runners/jobs/{jobId}/logs',
  tags: ['Runners'],
  summary: 'Append local runner job logs',
  description: 'Append log entries for a running local runner job',
  operationId: 'appendJobLogs',
  request: {
    params: z.object({
      jobId: z
        .uuid()
        .openapi({
          param: {
            name: 'jobId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: z.array(LocalRunnerLogEntrySchema) } } },
  },
  responses: {
    204: { description: 'No content' },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: {
      description: 'Not found',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const postV1PrivateLocalRunnersJobsJobIdCancelRoute = createRoute({
  method: 'post',
  path: '/v1/private/local-runners/jobs/{jobId}/cancel',
  tags: ['Runners'],
  summary: 'Cancel local runner job',
  description: 'Cancel a pending or running local runner job',
  operationId: 'cancelJob',
  request: {
    params: z.object({
      jobId: z
        .uuid()
        .openapi({
          param: {
            name: 'jobId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No content' },
    404: {
      description: 'Not found',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const postV1PrivateLocalRunnersRunnerIdBridgeCommandsRoute = createRoute({
  method: 'post',
  path: '/v1/private/local-runners/{runnerId}/bridge/commands',
  tags: ['Runners'],
  summary: 'Submit bridge command',
  description: 'Submit a bridge command for execution by the local daemon',
  operationId: 'createBridgeCommand',
  request: {
    params: z.object({
      runnerId: z
        .uuid()
        .openapi({
          param: {
            name: 'runnerId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BridgeCommandSubmitRequestSchema } } },
  },
  responses: {
    201: {
      description: 'Command submitted',
      content: { 'application/json': { schema: BridgeCommandSubmitResponseSchema } },
      headers: z.object({ Location: { description: 'URI of the command', style: 'simple' } }),
    },
    404: {
      description: 'Runner not found or not connected',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    409: {
      description: 'Runner does not support bridge',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const postV1PrivateLocalRunnersJobsRoute = createRoute({
  method: 'post',
  path: '/v1/private/local-runners/jobs',
  tags: ['Runners'],
  summary: 'Create local runner job',
  description: 'Create a local runner job and enqueue it for execution',
  operationId: 'createJob',
  request: {
    body: { content: { 'application/json': { schema: CreateLocalRunnerJobRequestSchema } } },
  },
  responses: {
    201: {
      description: 'Job created',
      headers: z.object({ Location: { description: 'URI of the job', style: 'simple' } }),
    },
    404: {
      description: 'Not found',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const getV1PrivateLocalRunnersRunnerIdRoute = createRoute({
  method: 'get',
  path: '/v1/private/local-runners/{runnerId}',
  tags: ['Runners'],
  summary: 'Get local runner',
  description: 'Get a single local runner with its registered agents',
  operationId: 'getRunner',
  request: {
    params: z.object({
      runnerId: z
        .uuid()
        .openapi({
          param: {
            name: 'runnerId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Runner details',
      content: { 'application/json': { schema: LocalRunnerSchema } },
    },
    404: {
      description: 'Not found',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const deleteV1PrivateLocalRunnersRunnerIdRoute = createRoute({
  method: 'delete',
  path: '/v1/private/local-runners/{runnerId}',
  tags: ['Runners'],
  summary: 'Disconnect local runner',
  description: 'Disconnect a local runner, terminating its connection and failing any pending jobs',
  operationId: 'disconnectRunner',
  request: {
    params: z.object({
      runnerId: z
        .uuid()
        .openapi({
          param: {
            name: 'runnerId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'No content' } },
})

export const getV1PrivateLocalRunnersRunnerIdBridgeCommandsCommandIdRoute = createRoute({
  method: 'get',
  path: '/v1/private/local-runners/{runnerId}/bridge/commands/{commandId}',
  tags: ['Runners'],
  summary: 'Get bridge command',
  description: 'Get bridge command status, optionally long-polling for completion',
  operationId: 'getBridgeCommand',
  request: {
    params: z.object({
      runnerId: z
        .uuid()
        .openapi({
          param: {
            name: 'runnerId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      commandId: z
        .uuid()
        .openapi({
          param: {
            name: 'commandId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    query: z.object({
      wait: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'wait',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
      timeout: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(30)
        .exactOptional()
        .openapi({
          param: {
            name: 'timeout',
            in: 'query',
            schema: { type: 'integer', format: 'int32', default: 30 },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Command state',
      content: { 'application/json': { schema: BridgeCommandSchema } },
    },
    404: {
      description: 'Command not found',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const getV1PrivateLocalRunnersJobsJobIdRoute = createRoute({
  method: 'get',
  path: '/v1/private/local-runners/jobs/{jobId}',
  tags: ['Runners'],
  summary: 'Get local runner job',
  description: "Get a single local runner job's status and results",
  operationId: 'getJob',
  request: {
    params: z.object({
      jobId: z
        .uuid()
        .openapi({
          param: {
            name: 'jobId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Job details',
      content: { 'application/json': { schema: LocalRunnerJobSchema } },
    },
    404: {
      description: 'Not found',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const postV1PrivateLocalRunnersRunnerIdHeartbeatsRoute = createRoute({
  method: 'post',
  path: '/v1/private/local-runners/{runnerId}/heartbeats',
  tags: ['Runners'],
  summary: 'Local runner heartbeat',
  description: 'Refresh local runner heartbeat',
  operationId: 'heartbeat',
  request: {
    params: z.object({
      runnerId: z
        .uuid()
        .openapi({
          param: {
            name: 'runnerId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: LocalRunnerHeartbeatRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Heartbeat response',
      content: { 'application/json': { schema: LocalRunnerHeartbeatResponseSchema } },
    },
    404: {
      description: 'Not found',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    410: { description: 'Gone', content: { 'application/json': { schema: ErrorMessageSchema } } },
  },
})

export const getV1PrivateLocalRunnersRunnerIdJobsRoute = createRoute({
  method: 'get',
  path: '/v1/private/local-runners/{runnerId}/jobs',
  tags: ['Runners'],
  summary: 'List local runner jobs',
  description: 'List jobs for a local runner',
  operationId: 'listJobs',
  request: {
    params: z.object({
      runnerId: z
        .uuid()
        .openapi({
          param: {
            name: 'runnerId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    query: z.object({
      project_id: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            name: 'project_id',
            in: 'query',
            schema: { type: 'string', format: 'uuid' },
            required: false,
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            schema: { minimum: 0, type: 'integer', format: 'int32', default: 0 },
            required: false,
          },
        }),
      size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            name: 'size',
            in: 'query',
            schema: { minimum: 1, type: 'integer', format: 'int32', default: 25 },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Jobs list',
      content: { 'application/json': { schema: LocalRunnerJobPageSchema } },
    },
    404: {
      description: 'Not found',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const getV1PrivateLocalRunnersRoute = createRoute({
  method: 'get',
  path: '/v1/private/local-runners',
  tags: ['Runners'],
  summary: 'List local runners',
  description: 'List local runners owned by the current user in the workspace',
  operationId: 'listRunners',
  request: {
    query: z.object({
      project_id: z
        .uuid()
        .openapi({
          param: {
            name: 'project_id',
            in: 'query',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      status: z
        .enum(['pairing', 'connected', 'disconnected'])
        .exactOptional()
        .openapi({
          param: {
            name: 'status',
            in: 'query',
            schema: { type: 'string', enum: ['pairing', 'connected', 'disconnected'] },
            required: false,
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            schema: { minimum: 0, type: 'integer', format: 'int32', default: 0 },
            required: false,
          },
        }),
      size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            name: 'size',
            in: 'query',
            schema: { minimum: 1, type: 'integer', format: 'int32', default: 25 },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Runners list',
      content: { 'application/json': { schema: LocalRunnerPageSchema } },
    },
    404: {
      description: 'Not found',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const postV1PrivateLocalRunnersRunnerIdBridgeCommandsNextRoute = createRoute({
  method: 'post',
  path: '/v1/private/local-runners/{runnerId}/bridge/commands/next',
  tags: ['Runners'],
  summary: 'Poll next bridge commands',
  description: 'Long-poll for pending bridge commands (batch)',
  operationId: 'nextBridgeCommands',
  request: {
    params: z.object({
      runnerId: z
        .uuid()
        .openapi({
          param: {
            name: 'runnerId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BridgeCommandNextRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Commands batch',
      content: { 'application/json': { schema: BridgeCommandBatchResponseSchema } },
    },
    404: {
      description: 'Not found',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const postV1PrivateLocalRunnersRunnerIdJobsNextRoute = createRoute({
  method: 'post',
  path: '/v1/private/local-runners/{runnerId}/jobs/next',
  tags: ['Runners'],
  summary: 'Next local runner job',
  description: 'Long-poll for the next pending local runner job',
  operationId: 'nextJob',
  request: {
    params: z.object({
      runnerId: z
        .uuid()
        .openapi({
          param: {
            name: 'runnerId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Job available, or null if no pending jobs',
      content: { 'application/json': { schema: LocalRunnerJobSchema.nullable() } },
    },
    404: {
      description: 'Not found',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const patchV1PrivateLocalRunnersRunnerIdChecklistRoute = createRoute({
  method: 'patch',
  path: '/v1/private/local-runners/{runnerId}/checklist',
  tags: ['Runners'],
  summary: 'Patch runner checklist',
  description: "Partial update of the runner's checklist (deep merge)",
  operationId: 'patchChecklist',
  request: {
    params: z.object({
      runnerId: z
        .uuid()
        .openapi({
          param: {
            name: 'runnerId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: z.object({}) } } },
  },
  responses: {
    204: { description: 'No content' },
    404: {
      description: 'Not found',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const putV1PrivateLocalRunnersRunnerIdAgentsRoute = createRoute({
  method: 'put',
  path: '/v1/private/local-runners/{runnerId}/agents',
  tags: ['Runners'],
  summary: 'Register local runner agents',
  description: "Register or update the local runner's agent list",
  operationId: 'registerAgents',
  request: {
    params: z.object({
      runnerId: z
        .uuid()
        .openapi({
          param: {
            name: 'runnerId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      description: 'Map of agent name to agent definition',
      content: { 'application/json': { schema: z.object({}) } },
    },
  },
  responses: {
    204: { description: 'No content' },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: {
      description: 'Not found',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const postV1PrivateLocalRunnersRunnerIdBridgeCommandsCommandIdResultsRoute = createRoute({
  method: 'post',
  path: '/v1/private/local-runners/{runnerId}/bridge/commands/{commandId}/results',
  tags: ['Runners'],
  summary: 'Report bridge command result',
  description: 'Report bridge command completion or failure',
  operationId: 'reportBridgeResult',
  request: {
    params: z.object({
      runnerId: z
        .uuid()
        .openapi({
          param: {
            name: 'runnerId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      commandId: z
        .uuid()
        .openapi({
          param: {
            name: 'commandId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BridgeCommandResultRequestSchema } } },
  },
  responses: {
    204: { description: 'Result accepted' },
    404: {
      description: 'Command not found',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    409: {
      description: 'Already completed',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const postV1PrivateLocalRunnersJobsJobIdResultsRoute = createRoute({
  method: 'post',
  path: '/v1/private/local-runners/jobs/{jobId}/results',
  tags: ['Runners'],
  summary: 'Report local runner job result',
  description: 'Report local runner job completion or failure',
  operationId: 'reportJobResult',
  request: {
    params: z.object({
      jobId: z
        .uuid()
        .openapi({
          param: {
            name: 'jobId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: LocalRunnerJobResultRequestSchema } } },
  },
  responses: {
    204: { description: 'No content' },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: {
      description: 'Not found',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const postV1PrivateManualEvaluationSpansRoute = createRoute({
  method: 'post',
  path: '/v1/private/manual-evaluation/spans',
  tags: ['Manual Evaluation'],
  summary: 'Manually evaluate spans',
  description:
    'Manually trigger evaluation rules on selected spans. Bypasses sampling and enqueues all specified spans for evaluation.',
  operationId: 'evaluateSpans',
  request: { body: { content: { 'application/json': { schema: ManualEvaluationRequestSchema } } } },
  responses: {
    202: {
      description: 'Accepted - Evaluation request queued successfully',
      content: { 'application/json': { schema: ManualEvaluationResponseSchema } },
    },
    400: {
      description: 'Bad Request - Invalid request or missing automation rules',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: {
      description: 'Not Found - Project not found',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const postV1PrivateManualEvaluationThreadsRoute = createRoute({
  method: 'post',
  path: '/v1/private/manual-evaluation/threads',
  tags: ['Manual Evaluation'],
  summary: 'Manually evaluate threads',
  description:
    'Manually trigger evaluation rules on selected threads. Bypasses sampling and enqueues all specified threads for evaluation.',
  operationId: 'evaluateThreads',
  request: { body: { content: { 'application/json': { schema: ManualEvaluationRequestSchema } } } },
  responses: {
    202: {
      description: 'Accepted - Evaluation request queued successfully',
      content: { 'application/json': { schema: ManualEvaluationResponseSchema } },
    },
    400: {
      description: 'Bad Request - Invalid request or missing automation rules',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: {
      description: 'Not Found - Project not found',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const postV1PrivateManualEvaluationTracesRoute = createRoute({
  method: 'post',
  path: '/v1/private/manual-evaluation/traces',
  tags: ['Manual Evaluation'],
  summary: 'Manually evaluate traces',
  description:
    'Manually trigger evaluation rules on selected traces. Bypasses sampling and enqueues all specified traces for evaluation.',
  operationId: 'evaluateTraces',
  request: { body: { content: { 'application/json': { schema: ManualEvaluationRequestSchema } } } },
  responses: {
    202: {
      description: 'Accepted - Evaluation request queued successfully',
      content: { 'application/json': { schema: ManualEvaluationResponseSchema } },
    },
    400: {
      description: 'Bad Request - Invalid request or missing automation rules',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: {
      description: 'Not Found - Project not found',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const postV1PrivateOllamaModelsRoute = createRoute({
  method: 'post',
  path: '/v1/private/ollama/models',
  tags: ['Ollama'],
  summary: 'List available Ollama models',
  description:
    'Fetches the list of models available from the Ollama instance. URL may be provided with or without /v1 suffix (e.g., http://localhost:11434 or http://localhost:11434/v1). The /v1 suffix will be automatically removed for model discovery. For actual LLM inference, use the URL with /v1 suffix for OpenAI-compatible endpoints.',
  operationId: 'listModels',
  request: {
    body: {
      content: { 'application/json': { schema: OllamaInstanceBaseUrlRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Models retrieved successfully',
      content: { 'application/json': { schema: z.array(OllamaModelSchema) } },
    },
    422: {
      description: 'Unprocessable Content - Invalid URL format',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    500: { description: 'Failed to fetch models' },
    503: {
      description: 'Ollama provider is disabled',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const postV1PrivateOllamaTestConnectionRoute = createRoute({
  method: 'post',
  path: '/v1/private/ollama/test-connection',
  tags: ['Ollama'],
  summary: 'Test connection to Ollama instance',
  description:
    'Validates that the provided Ollama URL is reachable. URL may be provided with or without /v1 suffix (e.g., http://localhost:11434 or http://localhost:11434/v1). The /v1 suffix will be automatically removed for connection testing. For inference, use the URL with /v1 suffix.',
  operationId: 'testConnection',
  request: {
    body: {
      content: { 'application/json': { schema: OllamaInstanceBaseUrlRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Connection test successful',
      content: { 'application/json': { schema: OllamaConnectionTestResponseSchema } },
    },
    422: {
      description: 'Unprocessable Content - Invalid URL format',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    502: {
      description: 'Connection test failed - Ollama instance unreachable',
      content: { 'application/json': { schema: OllamaConnectionTestResponseSchema } },
    },
    503: {
      description: 'Ollama provider is disabled',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const getV1PrivateOllieStateRoute = createRoute({
  method: 'get',
  path: '/v1/private/ollie/state',
  tags: ['Ollie State'],
  summary: 'Download ollie state',
  description: 'Download stored ollie state file',
  operationId: 'downloadOllieState',
  responses: {
    200: {
      description: 'Ollie state file',
      content: {
        'application/gzip': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/gzip': { schema: ErrorMessageSchema } },
    },
    404: {
      description: 'Not found',
      content: { 'application/gzip': { schema: ErrorMessageSchema } },
    },
  },
})

export const putV1PrivateOllieStateRoute = createRoute({
  method: 'put',
  path: '/v1/private/ollie/state',
  tags: ['Ollie State'],
  summary: 'Replace ollie state',
  description: 'Upload gzip-compressed SQLite DB file, replacing any existing state',
  operationId: 'replaceOllieState',
  request: {
    headers: z.object({
      'Content-Length': z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            name: 'Content-Length',
            in: 'header',
            schema: { type: 'integer', format: 'int64' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/gzip': { schema: z.object({}) } } },
  },
  responses: {
    204: { description: 'No content' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    429: {
      description: 'Rate limit exceeded',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const deleteV1PrivateOllieStateRoute = createRoute({
  method: 'delete',
  path: '/v1/private/ollie/state',
  tags: ['Ollie State'],
  summary: 'Delete ollie state',
  description: 'Clear stored ollie state',
  operationId: 'deleteOllieState',
  responses: {
    204: { description: 'No content' },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const postV1PrivateOtelV1TracesRoute = createRoute({
  method: 'post',
  path: '/v1/private/otel/v1/traces',
  tags: ['OpenTelemetry Ingestion'],
  operationId: 'receiveProtobufTraces',
  request: {
    body: { content: { 'application/x-protobuf': { schema: JsonNodeSchema } }, required: true },
  },
  responses: { default: { description: 'default response', content: {} } },
})

export const getV1PrivateOptimizationsRoute = createRoute({
  method: 'get',
  path: '/v1/private/optimizations',
  tags: ['Optimizations'],
  summary: 'Find optimizations',
  description: 'Find optimizations',
  operationId: 'findOptimizations',
  request: {
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            schema: { minimum: 1, type: 'integer', format: 'int32', default: 1 },
            required: false,
          },
        }),
      size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'size',
            in: 'query',
            schema: { minimum: 1, type: 'integer', format: 'int32', default: 10 },
            required: false,
          },
        }),
      dataset_id: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            name: 'dataset_id',
            in: 'query',
            schema: { type: 'string', format: 'uuid' },
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
            schema: {
              type: 'string',
              description: 'Filter optimizations by name (partial match, case insensitive)',
            },
            required: false,
          },
          description: 'Filter optimizations by name (partial match, case insensitive)',
        }),
      dataset_name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'dataset_name',
            in: 'query',
            schema: {
              type: 'string',
              description: 'Filter optimizations by dataset name (partial match)',
            },
            required: false,
          },
          description: 'Filter optimizations by dataset name (partial match)',
        }),
      dataset_deleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'dataset_deleted',
            in: 'query',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      project_id: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            name: 'project_id',
            in: 'query',
            schema: { type: 'string', format: 'uuid' },
            required: false,
          },
        }),
      filters: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'filters', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Optimizations resource',
      content: { 'application/json': { schema: OptimizationPagePublicSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessagePublicSchema } },
    },
  },
})

export const putV1PrivateOptimizationsRoute = createRoute({
  method: 'put',
  path: '/v1/private/optimizations',
  tags: ['Optimizations'],
  summary: 'Upsert optimization',
  description: 'Upsert optimization',
  operationId: 'upsertOptimization',
  request: { body: { content: { 'application/json': { schema: OptimizationWriteSchema } } } },
  responses: {
    201: {
      description: 'Created',
      headers: z.object({
        Location: {
          required: true,
          example: '${basePath}/v1/private/optimizations/{id}',
          style: 'simple',
          schema: z.string().openapi({ example: '${basePath}/v1/private/optimizations/{id}' }),
        },
      }),
    },
  },
})

export const postV1PrivateOptimizationsRoute = createRoute({
  method: 'post',
  path: '/v1/private/optimizations',
  tags: ['Optimizations'],
  summary: 'Create optimization',
  description: 'Create optimization',
  operationId: 'createOptimization',
  request: { body: { content: { 'application/json': { schema: OptimizationWriteSchema } } } },
  responses: {
    201: {
      description: 'Created',
      headers: z.object({
        Location: {
          required: true,
          example: '${basePath}/v1/private/optimizations/{id}',
          style: 'simple',
          schema: z.string().openapi({ example: '${basePath}/v1/private/optimizations/{id}' }),
        },
      }),
    },
  },
})

export const postV1PrivateOptimizationsDeleteRoute = createRoute({
  method: 'post',
  path: '/v1/private/optimizations/delete',
  tags: ['Optimizations'],
  summary: 'Delete optimizations by id',
  description: 'Delete optimizations by id',
  operationId: 'deleteOptimizationsById',
  request: { body: { content: { 'application/json': { schema: DeleteIdsHolderSchema } } } },
  responses: { 204: { description: 'No content' } },
})

export const getV1PrivateOptimizationsIdRoute = createRoute({
  method: 'get',
  path: '/v1/private/optimizations/{id}',
  tags: ['Optimizations'],
  summary: 'Get optimization by id',
  description: 'Get optimization by id',
  operationId: 'getOptimizationById',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Optimization resource',
      content: { 'application/json': { schema: OptimizationPublicSchema } },
    },
    404: {
      description: 'Not found',
      content: { 'application/json': { schema: ErrorMessagePublicSchema } },
    },
  },
})

export const putV1PrivateOptimizationsIdRoute = createRoute({
  method: 'put',
  path: '/v1/private/optimizations/{id}',
  tags: ['Optimizations'],
  summary: 'Update optimization by id',
  description: 'Update optimization by id',
  operationId: 'updateOptimizationsById',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: OptimizationUpdateSchema } } },
  },
  responses: { 204: { description: 'No content' } },
})

export const getV1PrivateOptimizationsStudioIdLogsRoute = createRoute({
  method: 'get',
  path: '/v1/private/optimizations/studio/{id}/logs',
  tags: ['Optimizations'],
  summary: 'Get Studio optimization logs',
  description: 'Get presigned S3 URL for downloading optimization logs',
  operationId: 'getStudioOptimizationLogs',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Logs response',
      content: { 'application/json': { schema: OptimizationStudioLogSchema } },
    },
    404: {
      description: 'Not found',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const postV1PrivatePairingSessionsSessionIdActivateRoute = createRoute({
  method: 'post',
  path: '/v1/private/pairing/sessions/{sessionId}/activate',
  tags: ['Pairing'],
  summary: 'Activate a pairing session',
  description: 'Verify the activation HMAC and flip the runner row to CONNECTED',
  operationId: 'activatePairingSession',
  request: {
    params: z.object({
      sessionId: z
        .uuid()
        .openapi({
          param: {
            name: 'sessionId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ActivateRequestSchema } } },
  },
  responses: {
    201: {
      description: 'Session activated',
      headers: z.object({ Location: { description: 'URI of the runner', style: 'simple' } }),
    },
    403: {
      description: 'Invalid HMAC',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: {
      description: 'Session not found',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    409: {
      description: 'Session already activated',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    422: {
      description: 'Unprocessable entity',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const postV1PrivatePairingSessionsRoute = createRoute({
  method: 'post',
  path: '/v1/private/pairing/sessions',
  tags: ['Pairing'],
  summary: 'Create a pairing session',
  description:
    'Register a short-lived pairing session that a local daemon will later activate via HMAC',
  operationId: 'createPairingSession',
  request: { body: { content: { 'application/json': { schema: CreateSessionRequestSchema } } } },
  responses: {
    201: {
      description: 'Session created',
      content: { 'application/json': { schema: CreateSessionResponseSchema } },
    },
    400: {
      description: 'Bad request',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: {
      description: 'Project not found',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    422: {
      description: 'Unprocessable entity',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    429: {
      description: 'Too many requests',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const getV1PrivateProjectsProjectIdAlertsRoute = createRoute({
  method: 'get',
  path: '/v1/private/projects/{projectId}/alerts',
  tags: ['Projects'],
  summary: 'Find alerts by project',
  description: 'Find alerts scoped to a project',
  operationId: 'findAlertsByProject',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            name: 'projectId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
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
          z.int32().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            schema: { minimum: 1, type: 'integer', format: 'int32', default: 1 },
            required: false,
          },
        }),
      size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'size',
            in: 'query',
            schema: { minimum: 1, type: 'integer', format: 'int32', default: 10 },
            required: false,
          },
        }),
      sorting: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'sorting', in: 'query', schema: { type: 'string' }, required: false },
        }),
      filters: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'filters', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Alerts page',
      content: { 'application/json': { schema: AlertPagePublicSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessagePublicSchema } },
    },
  },
})

export const getV1PrivateProjectsProjectIdDashboardsRoute = createRoute({
  method: 'get',
  path: '/v1/private/projects/{projectId}/dashboards',
  tags: ['Projects'],
  summary: 'Find dashboards by project',
  description: 'Find dashboards scoped to a project',
  operationId: 'findDashboardsByProject',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            name: 'projectId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
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
          z.int32().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            schema: { minimum: 1, type: 'integer', format: 'int32', default: 1 },
            required: false,
          },
        }),
      size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'size',
            in: 'query',
            schema: { minimum: 1, type: 'integer', format: 'int32', default: 10 },
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
            schema: {
              type: 'string',
              description: 'Filter dashboards by name (partial match, case insensitive)',
            },
            required: false,
          },
          description: 'Filter dashboards by name (partial match, case insensitive)',
        }),
      sorting: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'sorting', in: 'query', schema: { type: 'string' }, required: false },
        }),
      filters: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'filters', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Dashboard page',
      content: { 'application/json': { schema: DashboardPagePublicSchema } },
    },
  },
})

export const getV1PrivateProjectsProjectIdDatasetsRoute = createRoute({
  method: 'get',
  path: '/v1/private/projects/{projectId}/datasets',
  tags: ['Projects'],
  summary: 'Find datasets by project',
  description: 'Find datasets scoped to a project',
  operationId: 'findDatasetsByProject',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            name: 'projectId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
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
          z.int32().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            schema: { minimum: 1, type: 'integer', format: 'int32', default: 1 },
            required: false,
          },
        }),
      size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'size',
            in: 'query',
            schema: { minimum: 1, type: 'integer', format: 'int32', default: 10 },
            required: false,
          },
        }),
      with_experiments_only: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'with_experiments_only',
            in: 'query',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      with_optimizations_only: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'with_optimizations_only',
            in: 'query',
            schema: { type: 'boolean' },
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
            schema: {
              type: 'string',
              description: 'Filter datasets by name (partial match, case insensitive)',
            },
            required: false,
          },
          description: 'Filter datasets by name (partial match, case insensitive)',
        }),
      sorting: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'sorting', in: 'query', schema: { type: 'string' }, required: false },
        }),
      filters: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'filters', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Dataset page',
      content: { 'application/json': { schema: DatasetPagePublicSchema } },
    },
  },
})

export const getV1PrivateProjectsProjectIdExperimentsRoute = createRoute({
  method: 'get',
  path: '/v1/private/projects/{projectId}/experiments',
  tags: ['Projects'],
  summary: 'Find experiments by project',
  description: 'Find experiments scoped to a project',
  operationId: 'findExperimentsByProject',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            name: 'projectId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
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
          z.int32().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            schema: { minimum: 1, type: 'integer', format: 'int32', default: 1 },
            required: false,
          },
        }),
      size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'size',
            in: 'query',
            schema: { minimum: 1, type: 'integer', format: 'int32', default: 10 },
            required: false,
          },
        }),
      datasetId: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            name: 'datasetId',
            in: 'query',
            schema: { type: 'string', format: 'uuid' },
            required: false,
          },
        }),
      optimization_id: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            name: 'optimization_id',
            in: 'query',
            schema: { type: 'string', format: 'uuid' },
            required: false,
          },
        }),
      types: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'types', in: 'query', schema: { type: 'string' }, required: false },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            schema: {
              type: 'string',
              description: 'Filter experiments by name (partial match, case insensitive)',
            },
            required: false,
          },
          description: 'Filter experiments by name (partial match, case insensitive)',
        }),
      dataset_deleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'dataset_deleted',
            in: 'query',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      sorting: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'sorting', in: 'query', schema: { type: 'string' }, required: false },
        }),
      filters: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'filters', in: 'query', schema: { type: 'string' }, required: false },
        }),
      experiment_ids: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'experiment_ids',
            in: 'query',
            schema: {
              type: 'string',
              description: 'Filter experiments by a list of experiment IDs',
            },
            required: false,
          },
          description: 'Filter experiments by a list of experiment IDs',
        }),
      force_sorting: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'force_sorting',
            in: 'query',
            schema: {
              type: 'boolean',
              description:
                'Force sorting even when exceeding the endpoint result set limit. May result in slower queries',
              default: false,
            },
            required: false,
          },
          description:
            'Force sorting even when exceeding the endpoint result set limit. May result in slower queries',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Experiments page',
      content: { 'application/json': { schema: ExperimentPagePublicSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessagePublicSchema } },
    },
  },
})

export const getV1PrivateProjectsProjectIdOptimizationsRoute = createRoute({
  method: 'get',
  path: '/v1/private/projects/{projectId}/optimizations',
  tags: ['Projects'],
  summary: 'Find optimizations by project',
  description: 'Find optimizations scoped to a project',
  operationId: 'findOptimizationsByProject',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            name: 'projectId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
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
          z.int32().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            schema: { minimum: 1, type: 'integer', format: 'int32', default: 1 },
            required: false,
          },
        }),
      size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'size',
            in: 'query',
            schema: { minimum: 1, type: 'integer', format: 'int32', default: 10 },
            required: false,
          },
        }),
      dataset_id: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            name: 'dataset_id',
            in: 'query',
            schema: { type: 'string', format: 'uuid' },
            required: false,
          },
        }),
      dataset_name: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'dataset_name', in: 'query', schema: { type: 'string' }, required: false },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            schema: {
              type: 'string',
              description: 'Filter optimizations by name (partial match, case insensitive)',
            },
            required: false,
          },
          description: 'Filter optimizations by name (partial match, case insensitive)',
        }),
      dataset_deleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'dataset_deleted',
            in: 'query',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      filters: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'filters', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Optimizations page',
      content: { 'application/json': { schema: OptimizationPagePublicSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessagePublicSchema } },
    },
  },
})

export const getV1PrivateProjectsProjectIdPromptsRoute = createRoute({
  method: 'get',
  path: '/v1/private/projects/{projectId}/prompts',
  tags: ['Projects'],
  summary: 'Get prompts by project',
  description: 'Get prompts scoped to a project',
  operationId: 'getPromptsByProject',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            name: 'projectId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
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
          z.int32().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            schema: { minimum: 1, type: 'integer', format: 'int32', default: 1 },
            required: false,
          },
        }),
      size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'size',
            in: 'query',
            schema: { minimum: 1, type: 'integer', format: 'int32', default: 10 },
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
            schema: {
              type: 'string',
              description: 'Filter prompts by name (partial match, case insensitive)',
            },
            required: false,
          },
          description: 'Filter prompts by name (partial match, case insensitive)',
        }),
      sorting: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'sorting', in: 'query', schema: { type: 'string' }, required: false },
        }),
      filters: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'filters', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: PromptPagePublicSchema } } },
  },
})

export const getV1PrivateProjectsRoute = createRoute({
  method: 'get',
  path: '/v1/private/projects',
  tags: ['Projects'],
  summary: 'Find projects',
  description: 'Find projects',
  operationId: 'findProjects',
  request: {
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            schema: { minimum: 1, type: 'integer', format: 'int32', default: 1 },
            required: false,
          },
        }),
      size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'size',
            in: 'query',
            schema: { minimum: 1, type: 'integer', format: 'int32', default: 10 },
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
            schema: {
              type: 'string',
              description: 'Filter projects by name (partial match, case insensitive)',
            },
            required: false,
          },
          description: 'Filter projects by name (partial match, case insensitive)',
        }),
      sorting: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'sorting', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Project resource',
      content: { 'application/json': { schema: ProjectPagePublicSchema } },
    },
  },
})

export const postV1PrivateProjectsRoute = createRoute({
  method: 'post',
  path: '/v1/private/projects',
  tags: ['Projects'],
  summary: 'Create project',
  description: 'Create project',
  operationId: 'createProject',
  request: { body: { content: { 'application/json': { schema: ProjectWriteSchema } } } },
  responses: {
    201: {
      description: 'Created',
      headers: z.object({
        Location: {
          required: true,
          example: '${basePath}/v1/private/projects/{projectId}',
          style: 'simple',
          schema: z.string().openapi({ example: '${basePath}/v1/private/projects/{projectId}' }),
        },
      }),
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    422: {
      description: 'Unprocessable Content',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const getV1PrivateProjectsIdRoute = createRoute({
  method: 'get',
  path: '/v1/private/projects/{id}',
  tags: ['Projects'],
  summary: 'Get project by id',
  description: 'Get project by id',
  operationId: 'getProjectById',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Project resource',
      content: { 'application/json': { schema: ProjectPublicSchema } },
    },
  },
})

export const deleteV1PrivateProjectsIdRoute = createRoute({
  method: 'delete',
  path: '/v1/private/projects/{id}',
  tags: ['Projects'],
  summary: 'Delete project by id',
  description: 'Delete project by id',
  operationId: 'deleteProjectById',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content' },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const patchV1PrivateProjectsIdRoute = createRoute({
  method: 'patch',
  path: '/v1/private/projects/{id}',
  tags: ['Projects'],
  summary: 'Update project by id',
  description: 'Update project by id',
  operationId: 'updateProject',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ProjectUpdateSchema } } },
  },
  responses: {
    204: { description: 'No Content' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    422: {
      description: 'Unprocessable Content',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const postV1PrivateProjectsDeleteRoute = createRoute({
  method: 'post',
  path: '/v1/private/projects/delete',
  tags: ['Projects'],
  summary: 'Delete projects',
  description: 'Delete projects batch',
  operationId: 'deleteProjectsBatch',
  request: { body: { content: { 'application/json': { schema: BatchDeleteSchema } } } },
  responses: { 204: { description: 'No Content' } },
})

export const getV1PrivateProjectsFeedbackScoresNamesRoute = createRoute({
  method: 'get',
  path: '/v1/private/projects/feedback-scores/names',
  tags: ['Projects'],
  summary: 'Find Feedback Score names By Project Ids',
  description: 'Find Feedback Score names By Project Ids',
  operationId: 'findFeedbackScoreNamesByProjectIds',
  request: {
    query: z.object({
      project_ids: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'project_ids', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Feedback Scores resource',
      content: { 'application/json': { schema: FeedbackScoreNamesSchema } },
    },
  },
})

export const getV1PrivateProjectsIdTokenUsageNamesRoute = createRoute({
  method: 'get',
  path: '/v1/private/projects/{id}/token-usage/names',
  tags: ['Projects'],
  summary: 'Find Token Usage names',
  description: 'Find Token Usage names',
  operationId: 'findTokenUsageNames',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Token Usage names resource',
      content: { 'application/json': { schema: TokenUsageNamesSchema } },
    },
  },
})

export const postV1PrivateProjectsIdKpiCardsRoute = createRoute({
  method: 'post',
  path: '/v1/private/projects/{id}/kpi-cards',
  tags: ['Projects'],
  summary: 'Get Project KPI Cards',
  description: 'Gets KPI card metrics for a project',
  operationId: 'getProjectKpiCards',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: KpiCardRequestSchema } } },
  },
  responses: {
    200: {
      description: 'KPI Card Metrics',
      content: { 'application/json': { schema: KpiCardResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const postV1PrivateProjectsIdMetricsRoute = createRoute({
  method: 'post',
  path: '/v1/private/projects/{id}/metrics',
  tags: ['Projects'],
  summary: 'Get Project Metrics',
  description: 'Gets specified metrics for a project',
  operationId: 'getProjectMetrics',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ProjectMetricRequestPublicSchema } } },
  },
  responses: {
    200: {
      description: 'Project Metrics',
      content: { 'application/json': { schema: ProjectMetricResponsePublicSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessagePublicSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: ErrorMessagePublicSchema } },
    },
  },
})

export const getV1PrivateProjectsStatsRoute = createRoute({
  method: 'get',
  path: '/v1/private/projects/stats',
  tags: ['Projects'],
  summary: 'Get Project Stats',
  description: 'Get Project Stats',
  operationId: 'getProjectStats',
  request: {
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            schema: { minimum: 1, type: 'integer', format: 'int32', default: 1 },
            required: false,
          },
        }),
      size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'size',
            in: 'query',
            schema: { minimum: 1, type: 'integer', format: 'int32', default: 10 },
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
            schema: {
              type: 'string',
              description: 'Filter projects by name (partial match, case insensitive)',
            },
            required: false,
          },
          description: 'Filter projects by name (partial match, case insensitive)',
        }),
      filters: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'filters', in: 'query', schema: { type: 'string' }, required: false },
        }),
      from_time: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'from_time',
            in: 'query',
            schema: {
              type: 'string',
              description:
                'When set, scope the project metrics from this time (ISO-8601 format); omitted keeps the all-time aggregates',
              format: 'date-time',
            },
            required: false,
          },
          description:
            'When set, scope the project metrics from this time (ISO-8601 format); omitted keeps the all-time aggregates',
        }),
      to_time: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'to_time',
            in: 'query',
            schema: {
              type: 'string',
              description:
                "Scope the project metrics up to this time (ISO-8601 format). Must be after 'from_time'.",
              format: 'date-time',
            },
            required: false,
          },
          description:
            "Scope the project metrics up to this time (ISO-8601 format). Must be after 'from_time'.",
        }),
      sorting: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'sorting', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Project Stats',
      content: { 'application/json': { schema: ProjectStatsSummarySchema } },
    },
  },
})

export const postV1PrivateProjectsRetrieveRoute = createRoute({
  method: 'post',
  path: '/v1/private/projects/retrieve',
  tags: ['Projects'],
  summary: 'Retrieve project',
  description: 'Retrieve project',
  operationId: 'retrieveProject',
  request: { body: { content: { 'application/json': { schema: ProjectRetrieveDetailedSchema } } } },
  responses: {
    200: {
      description: 'Project resource',
      content: { 'application/json': { schema: ProjectDetailedSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessageDetailedSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: ErrorMessageDetailedSchema } },
    },
    422: {
      description: 'Unprocessable Content',
      content: { 'application/json': { schema: ErrorMessageDetailedSchema } },
    },
  },
})

export const getV1PrivatePromptsRoute = createRoute({
  method: 'get',
  path: '/v1/private/prompts',
  tags: ['Prompts'],
  summary: 'Get prompts',
  description: 'Get prompts',
  operationId: 'getPrompts',
  request: {
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            schema: { minimum: 1, type: 'integer', format: 'int32', default: 1 },
            required: false,
          },
        }),
      size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'size',
            in: 'query',
            schema: { minimum: 1, type: 'integer', format: 'int32', default: 10 },
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
            schema: {
              type: 'string',
              description: 'Filter prompts by name (partial match, case insensitive)',
            },
            required: false,
          },
          description: 'Filter prompts by name (partial match, case insensitive)',
        }),
      project_id: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            name: 'project_id',
            in: 'query',
            schema: { type: 'string', format: 'uuid' },
            required: false,
          },
        }),
      sorting: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'sorting', in: 'query', schema: { type: 'string' }, required: false },
        }),
      filters: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'filters', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: PromptPagePublicSchema } } },
  },
})

export const postV1PrivatePromptsRoute = createRoute({
  method: 'post',
  path: '/v1/private/prompts',
  tags: ['Prompts'],
  summary: 'Create prompt',
  description: 'Create prompt',
  operationId: 'createPrompt',
  request: { body: { content: { 'application/json': { schema: PromptWriteSchema } } } },
  responses: {
    201: {
      description: 'Created',
      headers: z.object({
        Location: {
          required: true,
          example: '${basePath}/v1/private/prompts/{promptId}',
          style: 'simple',
          schema: z.string().openapi({ example: '${basePath}/v1/private/prompts/{promptId}' }),
        },
      }),
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    422: {
      description: 'Unprocessable Content',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const postV1PrivatePromptsVersionsRoute = createRoute({
  method: 'post',
  path: '/v1/private/prompts/versions',
  tags: ['Prompts'],
  summary: 'Create prompt version',
  description: 'Create prompt version',
  operationId: 'createPromptVersion',
  request: {
    body: { content: { 'application/json': { schema: CreatePromptVersionDetailSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PromptVersionDetailSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessageDetailSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: ErrorMessageDetailSchema } },
    },
    422: {
      description: 'Unprocessable Content',
      content: { 'application/json': { schema: ErrorMessageDetailSchema } },
    },
  },
})

export const patchV1PrivatePromptsVersionsRoute = createRoute({
  method: 'patch',
  path: '/v1/private/prompts/versions',
  tags: ['Prompts'],
  summary: 'Update prompt versions',
  description:
    'Update one or more prompt versions.\n\nNote: Prompt versions are immutable by design.\nOnly organizational properties, such as tags etc., can be updated.\nCore properties like template and metadata cannot be modified after creation.\n\nPATCH semantics:\n- non-empty values update the field\n- null values preserve existing field values (no change)\n- empty values explicitly clear the field\n',
  operationId: 'updatePromptVersions',
  request: {
    body: { content: { 'application/json': { schema: PromptVersionBatchUpdateSchema } } },
  },
  responses: {
    204: { description: 'No Content' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const getV1PrivatePromptsIdRoute = createRoute({
  method: 'get',
  path: '/v1/private/prompts/{id}',
  tags: ['Prompts'],
  summary: 'Get prompt by id',
  description:
    'Get prompt by id; when mask_id or environment is provided, requestedVersion is populated with the resolved version. mask_id and environment are mutually exclusive.',
  operationId: 'getPromptById',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    query: z.object({
      mask_id: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            name: 'mask_id',
            in: 'query',
            description:
              'Optional mask version id; when set, requestedVersion is the mask row for that id',
            schema: { type: 'string', format: 'uuid' },
            required: false,
          },
        }),
      environment: z
        .string()
        .regex(/^[A-Za-z0-9_-]+$/)
        .min(0)
        .max(150)
        .exactOptional()
        .openapi({
          param: {
            name: 'environment',
            in: 'query',
            description:
              'Optional environment name; when set, requestedVersion is the version mapped to that environment for the prompt',
            schema: { maxLength: 150, minLength: 0, pattern: '^[A-Za-z0-9_-]+$', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Prompt resource',
      content: { 'application/json': { schema: PromptDetailSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessageDetailSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: ErrorMessageDetailSchema } },
    },
  },
})

export const putV1PrivatePromptsIdRoute = createRoute({
  method: 'put',
  path: '/v1/private/prompts/{id}',
  tags: ['Prompts'],
  summary: 'Update prompt',
  description: 'Update prompt',
  operationId: 'updatePrompt',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PromptUpdatableSchema } } },
  },
  responses: {
    204: { description: 'No content' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    422: {
      description: 'Unprocessable Content',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const deleteV1PrivatePromptsIdRoute = createRoute({
  method: 'delete',
  path: '/v1/private/prompts/{id}',
  tags: ['Prompts'],
  summary: 'Delete prompt',
  description: 'Delete prompt',
  operationId: 'deletePrompt',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'No content' } },
})

export const postV1PrivatePromptsDeleteRoute = createRoute({
  method: 'post',
  path: '/v1/private/prompts/delete',
  tags: ['Prompts'],
  summary: 'Delete prompts',
  description: 'Delete prompts batch',
  operationId: 'deletePromptsBatch',
  request: { body: { content: { 'application/json': { schema: BatchDeleteSchema } } } },
  responses: { 204: { description: 'No Content' } },
})

export const getV1PrivatePromptsByCommitCommitRoute = createRoute({
  method: 'get',
  path: '/v1/private/prompts/by-commit/{commit}',
  tags: ['Prompts'],
  summary: 'Get prompt by commit',
  description: 'Get prompt by commit',
  operationId: 'getPromptByCommit',
  request: {
    params: z.object({
      commit: z
        .string()
        .regex(/^[a-zA-Z0-9]{8}$/)
        .openapi({
          param: {
            name: 'commit',
            in: 'path',
            required: true,
            schema: { pattern: '^[a-zA-Z0-9]{8}$', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: PromptDetailSchema } } },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessageDetailSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: ErrorMessageDetailSchema } },
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: ErrorMessageDetailSchema } },
    },
  },
})

export const getV1PrivatePromptsVersionsVersionIdRoute = createRoute({
  method: 'get',
  path: '/v1/private/prompts/versions/{versionId}',
  tags: ['Prompts'],
  summary: 'Get prompt version by id',
  description: 'Get prompt version by id',
  operationId: 'getPromptVersionById',
  request: {
    params: z.object({
      versionId: z
        .uuid()
        .openapi({
          param: {
            name: 'versionId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Prompt version resource',
      content: { 'application/json': { schema: PromptVersionDetailSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: ErrorMessageDetailSchema } },
    },
  },
})

export const getV1PrivatePromptsPromptIdVersionsByNumberVersionNumberRoute = createRoute({
  method: 'get',
  path: '/v1/private/prompts/{promptId}/versions/by-number/{versionNumber}',
  tags: ['Prompts'],
  summary: 'Get prompt version by sequential number',
  description: 'Get a prompt version by its sequential v<N> number for the given prompt.',
  operationId: 'getPromptVersionByNumber',
  request: {
    params: z.object({
      promptId: z
        .uuid()
        .openapi({
          param: {
            name: 'promptId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      versionNumber: z
        .string()
        .regex(/v\d+/)
        .min(0)
        .max(10)
        .openapi({
          param: {
            name: 'versionNumber',
            in: 'path',
            required: true,
            schema: { maxLength: 10, minLength: 0, pattern: 'v\\d+', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Prompt version resource',
      content: { 'application/json': { schema: PromptVersionDetailSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessageDetailSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: ErrorMessageDetailSchema } },
    },
  },
})

export const getV1PrivatePromptsIdVersionsRoute = createRoute({
  method: 'get',
  path: '/v1/private/prompts/{id}/versions',
  tags: ['Prompts'],
  summary: 'Get prompt versions',
  description: 'Get prompt versions',
  operationId: 'getPromptVersions',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
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
          z.int32().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            schema: { minimum: 1, type: 'integer', format: 'int32', default: 1 },
            required: false,
          },
        }),
      size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'size',
            in: 'query',
            schema: { minimum: 1, type: 'integer', format: 'int32', default: 10 },
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
            description: 'Search text to find in template or change description fields',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sorting: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'sorting', in: 'query', schema: { type: 'string' }, required: false },
        }),
      filters: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'filters', in: 'query', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PromptVersionPagePublicSchema } },
    },
  },
})

export const postV1PrivatePromptsRetrieveByCommitsRoute = createRoute({
  method: 'post',
  path: '/v1/private/prompts/retrieve-by-commits',
  tags: ['Prompts'],
  summary: 'Get prompts by commits',
  description: 'Get prompts by prompt version commits',
  operationId: 'getPromptsByCommits',
  request: {
    body: { content: { 'application/json': { schema: PromptVersionCommitsRequestPublicSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(PromptVersionLinkPublicSchema) } },
    },
  },
})

export const postV1PrivatePromptsPromptIdVersionsVersionIdRestoreRoute = createRoute({
  method: 'post',
  path: '/v1/private/prompts/{promptId}/versions/{versionId}/restore',
  tags: ['Prompts'],
  summary: 'Restore prompt version',
  description:
    'Restore a prompt version by creating a new version with the content from the specified version',
  operationId: 'restorePromptVersion',
  request: {
    params: z.object({
      promptId: z
        .uuid()
        .openapi({
          param: {
            name: 'promptId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      versionId: z
        .uuid()
        .openapi({
          param: {
            name: 'versionId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PromptVersionDetailSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessageDetailSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: ErrorMessageDetailSchema } },
    },
  },
})

export const postV1PrivatePromptsVersionsRetrieveRoute = createRoute({
  method: 'post',
  path: '/v1/private/prompts/versions/retrieve',
  tags: ['Prompts'],
  summary: 'Retrieve prompt version',
  description:
    'Retrieve prompt version. When project_name is supplied the lookup is scoped to that project: a prompt belonging to a different project is never matched, and an unknown project name returns 404. Legacy prompts with no project are still resolved as a deprecated fallback, signalled by the X-Opik-Deprecation response header.',
  operationId: 'retrievePromptVersion',
  request: {
    body: { content: { 'application/json': { schema: PromptVersionRetrieveDetailSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: PromptVersionDetailSchema } },
      headers: z.object({
        'X-Opik-Deprecation': {
          description:
            'Present only when the prompt was resolved through the deprecated workspace-wide fallback, i.e. it has no project. Absent for project-scoped prompts.',
          style: 'simple',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Present only when the prompt was resolved through the deprecated workspace-wide fallback, i.e. it has no project. Absent for project-scoped prompts.',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessageDetailSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: ErrorMessageDetailSchema } },
    },
    422: {
      description: 'Unprocessable Content',
      content: { 'application/json': { schema: ErrorMessageDetailSchema } },
    },
  },
})

export const postV1PrivatePromptsVersionsRetrieveByIdsRoute = createRoute({
  method: 'post',
  path: '/v1/private/prompts/versions/retrieve-by-ids',
  tags: ['Prompts'],
  summary: 'Retrieve prompt versions by ids',
  description:
    'Retrieve a batch of prompt versions by their ids. Typically used by the UI to resolve mask overlays.',
  operationId: 'retrievePromptVersionsByIds',
  request: {
    body: { content: { 'application/json': { schema: PromptVersionIdsRequestDetailSchema } } },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: z.array(PromptVersionDetailSchema) } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessageDetailSchema } },
    },
  },
})

export const patchV1PrivatePromptsVersionsVersionIdEnvironmentsRoute = createRoute({
  method: 'patch',
  path: '/v1/private/prompts/versions/{versionId}/environments',
  tags: ['Prompts'],
  summary: 'Set prompt version environment',
  description:
    'Set or clear the environment owned by a prompt version.\nSetting a non-null environment moves ownership atomically: any previous owner of that\nenvironment for the same prompt has its environment cleared in the same transaction.\nSetting null clears the environment from the version.\nThe environment must already exist in the workspace registry; unknown names return 404.\n',
  operationId: 'setPromptVersionEnvironment',
  request: {
    params: z.object({
      versionId: z
        .uuid()
        .openapi({
          param: {
            name: 'versionId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PromptVersionEnvironmentUpdateSchema } } },
  },
  responses: {
    204: { description: 'No Content' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    404: {
      description: 'Not Found',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const getV1PrivateProjectsProjectIdActivitiesRoute = createRoute({
  method: 'get',
  path: '/v1/private/projects/{projectId}/activities',
  tags: ['Projects'],
  summary: 'Get recent activity for a project',
  description:
    'Returns the most recent activity items across all entity types for a project, sorted by date descending.',
  operationId: 'getRecentActivity',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            name: 'projectId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
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
          z.int32().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            schema: { minimum: 1, type: 'integer', format: 'int32', default: 1 },
            required: false,
          },
        }),
      size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(100),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'size',
            in: 'query',
            schema: { maximum: 100, minimum: 1, type: 'integer', format: 'int32', default: 10 },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Recent activity page',
      content: { 'application/json': { schema: RecentActivityPagePublicSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessagePublicSchema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorMessagePublicSchema } },
    },
  },
})

export const getV1PrivateReportFailuresRoute = createRoute({
  method: 'get',
  path: '/v1/private/report-failures',
  tags: ['Report Failures'],
  summary: 'List failures for a project',
  description: 'Returns failures for the given project id and type, most recent first.',
  operationId: 'findReportFailures',
  request: {
    query: z.object({
      type: z
        .literal('agent_insights')
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            required: true,
            schema: { type: 'string', enum: ['agent_insights'] },
          },
        }),
      project_id: z
        .uuid()
        .openapi({
          param: {
            name: 'project_id',
            in: 'query',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            schema: { minimum: 1, type: 'integer', format: 'int32', default: 1 },
            required: false,
          },
        }),
      size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(100),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'size',
            in: 'query',
            schema: { maximum: 100, minimum: 1, type: 'integer', format: 'int32', default: 10 },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Failures page',
      content: { 'application/json': { schema: ReportFailurePageSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const postV1PrivateReportFailuresRoute = createRoute({
  method: 'post',
  path: '/v1/private/report-failures',
  tags: ['Report Failures'],
  summary: 'Record a report/job failure',
  description:
    'Appends a failure row keyed by (project_id, type). Append-only — never overwrites earlier failures.',
  operationId: 'createReportFailure',
  request: { body: { content: { 'application/json': { schema: ReportFailureSchema } } } },
  responses: {
    201: {
      description: 'Created',
      headers: z.object({
        Location: {
          style: 'simple',
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const postV1PrivateProjectsProjectIdReportsReportIdCompleteRoute = createRoute({
  method: 'post',
  path: '/v1/private/projects/{projectId}/reports/{reportId}/complete',
  tags: ['Reports'],
  summary: 'Complete report generation',
  description: 'Callback from Ollie to update report status and content after generation.',
  operationId: 'completeReport',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            name: 'projectId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      reportId: z
        .uuid()
        .openapi({
          param: {
            name: 'reportId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ReportCompleteRequestSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Report updated' },
    400: { description: 'Status is not terminal' },
    404: { description: 'Report not found' },
  },
})

export const postV1PrivateProjectsProjectIdReportsGenerateRoute = createRoute({
  method: 'post',
  path: '/v1/private/projects/{projectId}/reports/generate',
  tags: ['Reports'],
  summary: 'Trigger report generation',
  description:
    'Creates a pending report and triggers asynchronous generation via the orchestrator.',
  operationId: 'generateReport',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            name: 'projectId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Report generation triggered',
      content: { 'application/json': { schema: GenerateReportResponseSchema } },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
  },
})

export const getV1PrivateProjectsProjectIdReportsPreferencesRoute = createRoute({
  method: 'get',
  path: '/v1/private/projects/{projectId}/reports/preferences',
  tags: ['Reports'],
  summary: 'Get report preferences',
  description: 'Returns report preferences for a project, or null if none have been set.',
  operationId: 'getReportPreference',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            name: 'projectId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Report preferences or null',
      content: { 'application/json': { schema: ReportPreferenceSchema } },
    },
  },
})

export const putV1PrivateProjectsProjectIdReportsPreferencesRoute = createRoute({
  method: 'put',
  path: '/v1/private/projects/{projectId}/reports/preferences',
  tags: ['Reports'],
  summary: 'Update report preferences',
  description: 'Enable or disable daily report generation for a project.',
  operationId: 'updateReportPreference',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            name: 'projectId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ReportPreferenceSchema } } },
  },
  responses: {
    200: {
      description: 'Updated preferences',
      content: { 'application/json': { schema: ReportPreferenceSchema } },
    },
  },
})

export const getV1PrivateProjectsProjectIdReportsRoute = createRoute({
  method: 'get',
  path: '/v1/private/projects/{projectId}/reports',
  tags: ['Reports'],
  summary: 'Get reports for a project',
  description: 'Returns a paginated list of reports, newest first.',
  operationId: 'getReports',
  request: {
    params: z.object({
      projectId: z
        .uuid()
        .openapi({
          param: {
            name: 'projectId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
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
          z.int32().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            schema: { minimum: 1, type: 'integer', format: 'int32', default: 1 },
            required: false,
          },
        }),
      size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(100),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'size',
            in: 'query',
            schema: { maximum: 100, minimum: 1, type: 'integer', format: 'int32', default: 10 },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Reports page',
      content: { 'application/json': { schema: OllieReportPageSchema } },
    },
  },
})

export const getV1PrivateRetentionRulesRoute = createRoute({
  method: 'get',
  path: '/v1/private/retention/rules',
  tags: ['Retention Rules'],
  summary: 'Find retention rules',
  description: "List retention rules for the caller's workspace. Defaults to active only.",
  operationId: 'findRetentionRules',
  request: {
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            schema: { minimum: 1, type: 'integer', format: 'int32', default: 1 },
            required: false,
          },
        }),
      size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'size',
            in: 'query',
            schema: { minimum: 1, type: 'integer', format: 'int32', default: 10 },
            required: false,
          },
        }),
      include_inactive: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'include_inactive',
            in: 'query',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Retention rules page',
      content: { 'application/json': { schema: RetentionRulePagePublicSchema } },
    },
  },
})

export const postV1PrivateRetentionRulesRoute = createRoute({
  method: 'post',
  path: '/v1/private/retention/rules',
  tags: ['Retention Rules'],
  summary: 'Create retention rule',
  description:
    'Create a new retention rule. Auto-deactivates any existing active rule for the same scope.',
  operationId: 'createRetentionRule',
  request: { body: { content: { 'application/json': { schema: RetentionRuleWriteSchema } } } },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: RetentionRulePublicSchema } },
      headers: z.object({
        Location: {
          required: true,
          example: '${basePath}/v1/private/retention/rules/{ruleId}',
          style: 'simple',
          schema: z
            .string()
            .openapi({ example: '${basePath}/v1/private/retention/rules/{ruleId}' }),
        },
      }),
    },
  },
})

export const getV1PrivateRetentionRulesRuleIdRoute = createRoute({
  method: 'get',
  path: '/v1/private/retention/rules/{ruleId}',
  tags: ['Retention Rules'],
  summary: 'Get retention rule by id',
  description: 'Get a specific retention rule by id',
  operationId: 'getRetentionRuleById',
  request: {
    params: z.object({
      ruleId: z
        .uuid()
        .openapi({
          param: {
            name: 'ruleId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Retention rule',
      content: { 'application/json': { schema: RetentionRulePublicSchema } },
    },
    404: { description: 'Retention rule not found' },
  },
})

export const deleteV1PrivateRetentionRulesRuleIdRoute = createRoute({
  method: 'delete',
  path: '/v1/private/retention/rules/{ruleId}',
  tags: ['Retention Rules'],
  summary: 'Deactivate retention rule',
  description:
    'Soft-deactivate a retention rule (sets enabled=false). Rules are never hard-deleted for audit trail.',
  operationId: 'deactivateRetentionRule',
  request: {
    params: z.object({
      ruleId: z
        .uuid()
        .openapi({
          param: {
            name: 'ruleId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No content' },
    404: { description: 'Retention rule not found' },
  },
})

export const getV1PrivateTogglesRoute = createRoute({
  method: 'get',
  path: '/v1/private/toggles',
  tags: ['Service Toggles'],
  summary: 'Get Service Toggles',
  description: 'Get Service Toggles',
  operationId: 'getServiceToggles',
  responses: {
    200: {
      description: 'Service Toggles',
      content: { 'application/json': { schema: ServiceTogglesConfigSchema } },
    },
  },
})

export const postV1PrivateSpansIdCommentsRoute = createRoute({
  method: 'post',
  path: '/v1/private/spans/{id}/comments',
  tags: ['Spans'],
  summary: 'Add span comment',
  description: 'Add span comment',
  operationId: 'addSpanComment',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CommentSchema } } },
  },
  responses: {
    201: {
      description: 'Created',
      headers: z.object({
        Location: {
          required: true,
          example: '${basePath}/v1/private/spans/{spanId}/comments/{commentId}',
          style: 'simple',
          schema: z
            .string()
            .openapi({ example: '${basePath}/v1/private/spans/{spanId}/comments/{commentId}' }),
        },
      }),
    },
  },
})

export const putV1PrivateSpansIdFeedbackScoresRoute = createRoute({
  method: 'put',
  path: '/v1/private/spans/{id}/feedback-scores',
  tags: ['Spans'],
  summary: 'Add span feedback score',
  description: 'Add span feedback score',
  operationId: 'addSpanFeedbackScore',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: FeedbackScoreSchema } } },
  },
  responses: { 204: { description: 'No Content' } },
})

export const postV1PrivateSpansBatchRoute = createRoute({
  method: 'post',
  path: '/v1/private/spans/batch',
  tags: ['Spans'],
  summary: 'Create spans',
  description: 'Create spans',
  operationId: 'createSpans',
  request: { body: { content: { 'application/json': { schema: SpanBatchWriteSchema } } } },
  responses: { 204: { description: 'No Content' } },
})

export const patchV1PrivateSpansBatchRoute = createRoute({
  method: 'patch',
  path: '/v1/private/spans/batch',
  tags: ['Spans'],
  summary: 'Batch update spans',
  description: 'Update multiple spans',
  operationId: 'batchUpdateSpans',
  request: { body: { content: { 'application/json': { schema: SpanBatchUpdateSchema } } } },
  responses: {
    204: { description: 'No Content' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const getV1PrivateSpansRoute = createRoute({
  method: 'get',
  path: '/v1/private/spans',
  tags: ['Spans'],
  summary: 'Get spans by project_name or project_id and optionally by trace_id and/or type',
  description: 'Get spans by project_name or project_id and optionally by trace_id and/or type',
  operationId: 'getSpansByProject',
  request: {
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            schema: { minimum: 1, type: 'integer', format: 'int32', default: 1 },
            required: false,
          },
        }),
      size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'size',
            in: 'query',
            schema: { minimum: 1, type: 'integer', format: 'int32', default: 10 },
            required: false,
          },
        }),
      project_name: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'project_name', in: 'query', schema: { type: 'string' }, required: false },
        }),
      project_id: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            name: 'project_id',
            in: 'query',
            schema: { type: 'string', format: 'uuid' },
            required: false,
          },
        }),
      trace_id: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            name: 'trace_id',
            in: 'query',
            schema: { type: 'string', format: 'uuid' },
            required: false,
          },
        }),
      type: z
        .enum(['general', 'tool', 'llm', 'guardrail'])
        .exactOptional()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            schema: { type: 'string', enum: ['general', 'tool', 'llm', 'guardrail'] },
            required: false,
          },
        }),
      filters: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'filters', in: 'query', schema: { type: 'string' }, required: false },
        }),
      truncate: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'truncate',
            in: 'query',
            schema: {
              type: 'boolean',
              description: 'Truncate input, output and metadata to slim payloads',
              default: false,
            },
            required: false,
          },
          description: 'Truncate input, output and metadata to slim payloads',
        }),
      strip_attachments: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'strip_attachments',
            in: 'query',
            schema: {
              type: 'boolean',
              description:
                'If true, returns attachment references like [file.png]; if false, downloads and reinjects stripped attachments',
              default: false,
            },
            required: false,
          },
          description:
            'If true, returns attachment references like [file.png]; if false, downloads and reinjects stripped attachments',
        }),
      sorting: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'sorting', in: 'query', schema: { type: 'string' }, required: false },
        }),
      exclude: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'exclude', in: 'query', schema: { type: 'string' }, required: false },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            in: 'query',
            schema: { type: 'string', description: 'Full-text search across span fields' },
            required: false,
          },
          description: 'Full-text search across span fields',
        }),
      from_time: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'from_time',
            in: 'query',
            schema: {
              type: 'string',
              description: 'Filter spans created from this time (ISO-8601 format).',
              format: 'date-time',
            },
            required: false,
          },
          description: 'Filter spans created from this time (ISO-8601 format).',
        }),
      to_time: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'to_time',
            in: 'query',
            schema: {
              type: 'string',
              description:
                "Filter spans created up to this time (ISO-8601 format). If not provided, defaults to current time. Must be after 'from_time'.",
              format: 'date-time',
            },
            required: false,
          },
          description:
            "Filter spans created up to this time (ISO-8601 format). If not provided, defaults to current time. Must be after 'from_time'.",
        }),
    }),
  },
  responses: {
    200: {
      description: 'Spans resource',
      content: { 'application/json': { schema: SpanPagePublicSchema } },
    },
  },
})

export const postV1PrivateSpansRoute = createRoute({
  method: 'post',
  path: '/v1/private/spans',
  tags: ['Spans'],
  summary: 'Create span',
  description: 'Create span',
  operationId: 'createSpan',
  request: { body: { content: { 'application/json': { schema: SpanWriteSchema } } } },
  responses: {
    201: {
      description: 'Created',
      headers: z.object({
        Location: {
          required: true,
          example: '${basePath}/v1/private/spans/{spanId}',
          style: 'simple',
          schema: z.string().openapi({ example: '${basePath}/v1/private/spans/{spanId}' }),
        },
      }),
    },
    409: {
      description: 'Conflict',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const getV1PrivateSpansIdRoute = createRoute({
  method: 'get',
  path: '/v1/private/spans/{id}',
  tags: ['Spans'],
  summary: 'Get span by id',
  description: 'Get span by id',
  operationId: 'getSpanById',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    query: z.object({
      strip_attachments: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'strip_attachments',
            in: 'query',
            schema: {
              type: 'boolean',
              description:
                'If true, returns attachment references like [file.png]; if false, downloads and reinjects attachment content from S3 (default: false for backward compatibility)',
              default: false,
            },
            required: false,
          },
          description:
            'If true, returns attachment references like [file.png]; if false, downloads and reinjects attachment content from S3 (default: false for backward compatibility)',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Span resource',
      content: { 'application/json': { schema: SpanPublicSchema } },
    },
    404: {
      description: 'Not found',
      content: { 'application/json': { schema: SpanPublicSchema } },
    },
  },
})

export const deleteV1PrivateSpansIdRoute = createRoute({
  method: 'delete',
  path: '/v1/private/spans/{id}',
  tags: ['Spans'],
  summary: 'Delete span by id',
  description: 'Delete span by id',
  operationId: 'deleteSpanById',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: { 204: { description: 'No Content' }, 501: { description: 'Not implemented' } },
})

export const patchV1PrivateSpansIdRoute = createRoute({
  method: 'patch',
  path: '/v1/private/spans/{id}',
  tags: ['Spans'],
  summary: 'Update span by id',
  description: 'Update span by id',
  operationId: 'updateSpan',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SpanUpdateSchema } } },
  },
  responses: { 204: { description: 'No Content' }, 404: { description: 'Not found' } },
})

export const postV1PrivateSpansCommentsDeleteRoute = createRoute({
  method: 'post',
  path: '/v1/private/spans/comments/delete',
  tags: ['Spans'],
  summary: 'Delete span comments',
  description: 'Delete span comments',
  operationId: 'deleteSpanComments',
  request: { body: { content: { 'application/json': { schema: BatchDeleteSchema } } } },
  responses: { 204: { description: 'No Content' } },
})

export const postV1PrivateSpansIdFeedbackScoresDeleteRoute = createRoute({
  method: 'post',
  path: '/v1/private/spans/{id}/feedback-scores/delete',
  tags: ['Spans'],
  summary: 'Delete span feedback score',
  description: 'Delete span feedback score',
  operationId: 'deleteSpanFeedbackScore',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteFeedbackScoreSchema } } },
  },
  responses: { 204: { description: 'No Content' } },
})

export const getV1PrivateSpansFeedbackScoresNamesRoute = createRoute({
  method: 'get',
  path: '/v1/private/spans/feedback-scores/names',
  tags: ['Spans'],
  summary: 'Find Feedback Score names',
  description: 'Find Feedback Score names',
  operationId: 'findFeedbackScoreNames_1',
  request: {
    query: z.object({
      project_id: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            name: 'project_id',
            in: 'query',
            schema: { type: 'string', format: 'uuid' },
            required: false,
          },
        }),
      type: z
        .enum(['general', 'tool', 'llm', 'guardrail'])
        .exactOptional()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            schema: { type: 'string', enum: ['general', 'tool', 'llm', 'guardrail'] },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Feedback Scores resource',
      content: { 'application/json': { schema: FeedbackScoreNamesPublicSchema } },
    },
  },
})

export const getV1PrivateSpansSpanIdCommentsCommentIdRoute = createRoute({
  method: 'get',
  path: '/v1/private/spans/{spanId}/comments/{commentId}',
  tags: ['Spans'],
  summary: 'Get span comment',
  description: 'Get span comment',
  operationId: 'getSpanComment',
  request: {
    params: z.object({
      commentId: z
        .uuid()
        .openapi({
          param: {
            name: 'commentId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      spanId: z
        .uuid()
        .openapi({
          param: {
            name: 'spanId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Comment resource',
      content: { 'application/json': { schema: CommentSchema } },
    },
    404: {
      description: 'Not found',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const getV1PrivateSpansStatsRoute = createRoute({
  method: 'get',
  path: '/v1/private/spans/stats',
  tags: ['Spans'],
  summary: 'Get span stats',
  description: 'Get span stats',
  operationId: 'getSpanStats',
  request: {
    query: z.object({
      project_id: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            name: 'project_id',
            in: 'query',
            schema: { type: 'string', format: 'uuid' },
            required: false,
          },
        }),
      project_name: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'project_name', in: 'query', schema: { type: 'string' }, required: false },
        }),
      trace_id: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            name: 'trace_id',
            in: 'query',
            schema: { type: 'string', format: 'uuid' },
            required: false,
          },
        }),
      type: z
        .enum(['general', 'tool', 'llm', 'guardrail'])
        .exactOptional()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            schema: { type: 'string', enum: ['general', 'tool', 'llm', 'guardrail'] },
            required: false,
          },
        }),
      filters: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'filters', in: 'query', schema: { type: 'string' }, required: false },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            in: 'query',
            schema: { type: 'string', description: 'Full-text search across span fields' },
            required: false,
          },
          description: 'Full-text search across span fields',
        }),
      from_time: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'from_time',
            in: 'query',
            schema: {
              type: 'string',
              description: 'Filter spans created from this time (ISO-8601 format).',
              format: 'date-time',
            },
            required: false,
          },
          description: 'Filter spans created from this time (ISO-8601 format).',
        }),
      to_time: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'to_time',
            in: 'query',
            schema: {
              type: 'string',
              description:
                "Filter spans created up to this time (ISO-8601 format). If not provided, defaults to current time. Must be after 'from_time'.",
              format: 'date-time',
            },
            required: false,
          },
          description:
            "Filter spans created up to this time (ISO-8601 format). If not provided, defaults to current time. Must be after 'from_time'.",
        }),
    }),
  },
  responses: {
    200: {
      description: 'Span stats resource',
      content: { 'application/json': { schema: ProjectStatsPublicSchema } },
    },
  },
})

export const putV1PrivateSpansFeedbackScoresRoute = createRoute({
  method: 'put',
  path: '/v1/private/spans/feedback-scores',
  tags: ['Spans'],
  summary: 'Batch feedback scoring for spans',
  description: 'Batch feedback scoring for spans',
  operationId: 'scoreBatchOfSpans',
  request: { body: { content: { 'application/json': { schema: FeedbackScoreBatchSchema } } } },
  responses: { 204: { description: 'No Content' } },
})

export const postV1PrivateSpansSearchRoute = createRoute({
  method: 'post',
  path: '/v1/private/spans/search',
  tags: ['Spans'],
  summary: 'Search spans',
  description: 'Search spans',
  operationId: 'searchSpans',
  request: {
    body: { content: { 'application/json': { schema: SpanSearchStreamRequestPublicSchema } } },
  },
  responses: {
    200: {
      description: 'Spans stream or error during process',
      content: {
        'application/octet-stream': {
          schema: z.array(z.union([SpanPublicSchema, ErrorMessagePublicSchema])).max(2000),
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/octet-stream': { schema: ErrorMessagePublicSchema } },
    },
  },
})

export const getV1PrivateSpansExistsRoute = createRoute({
  method: 'get',
  path: '/v1/private/spans/exists',
  tags: ['Spans'],
  summary: 'Check whether a project has spans',
  description:
    'Returns whether the project has at least one span matching the given scope. Cheap existence probe (LIMIT 1) used to drive empty-state decisions without scanning or aggregating the whole project.',
  operationId: 'spansExist',
  request: {
    query: z.object({
      project_id: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            name: 'project_id',
            in: 'query',
            schema: { type: 'string', format: 'uuid' },
            required: false,
          },
        }),
      project_name: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'project_name', in: 'query', schema: { type: 'string' }, required: false },
        }),
      source: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'source',
            in: 'query',
            schema: {
              type: 'string',
              description:
                "Restrict the probe to a single ingestion source (e.g. 'sdk' for the Logs empty state), matching the rendered list's logs-source scope. Omit to probe any source.",
            },
            required: false,
          },
          description:
            "Restrict the probe to a single ingestion source (e.g. 'sdk' for the Logs empty state), matching the rendered list's logs-source scope. Omit to probe any source.",
        }),
    }),
  },
  responses: {
    200: {
      description: 'Span existence',
      content: { 'application/json': { schema: ExistenceResponseSchema } },
    },
  },
})

export const patchV1PrivateSpansCommentsCommentIdRoute = createRoute({
  method: 'patch',
  path: '/v1/private/spans/comments/{commentId}',
  tags: ['Spans'],
  summary: 'Update span comment by id',
  description: 'Update span comment by id',
  operationId: 'updateSpanComment',
  request: {
    params: z.object({
      commentId: z
        .uuid()
        .openapi({
          param: {
            name: 'commentId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CommentSchema } } },
  },
  responses: { 204: { description: 'No Content' }, 404: { description: 'Not found' } },
})

export const postV1PrivateTracesThreadsIdCommentsRoute = createRoute({
  method: 'post',
  path: '/v1/private/traces/threads/{id}/comments',
  tags: ['Traces'],
  summary: 'Add thread comment',
  description: 'Add thread comment',
  operationId: 'addThreadComment',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CommentSchema } } },
  },
  responses: {
    201: {
      description: 'Created',
      headers: z.object({
        Location: {
          required: true,
          example: '${basePath}/v1/private/traces/threads/{threadId}/comments/{commentId}',
          style: 'simple',
          schema: z
            .string()
            .openapi({
              example: '${basePath}/v1/private/traces/threads/{threadId}/comments/{commentId}',
            }),
        },
      }),
    },
  },
})

export const postV1PrivateTracesIdCommentsRoute = createRoute({
  method: 'post',
  path: '/v1/private/traces/{id}/comments',
  tags: ['Traces'],
  summary: 'Add trace comment',
  description: 'Add trace comment',
  operationId: 'addTraceComment',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CommentSchema } } },
  },
  responses: {
    201: {
      description: 'Created',
      headers: z.object({
        Location: {
          required: true,
          example: '${basePath}/v1/private/traces/{traceId}/comments/{commentId}',
          style: 'simple',
          schema: z
            .string()
            .openapi({ example: '${basePath}/v1/private/traces/{traceId}/comments/{commentId}' }),
        },
      }),
    },
  },
})

export const putV1PrivateTracesIdFeedbackScoresRoute = createRoute({
  method: 'put',
  path: '/v1/private/traces/{id}/feedback-scores',
  tags: ['Traces'],
  summary: 'Add trace feedback score',
  description: 'Add trace feedback score',
  operationId: 'addTraceFeedbackScore',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: FeedbackScoreSchema } } },
  },
  responses: { 204: { description: 'No Content' } },
})

export const postV1PrivateTracesBatchRoute = createRoute({
  method: 'post',
  path: '/v1/private/traces/batch',
  tags: ['Traces'],
  summary: 'Create traces',
  description: 'Create traces',
  operationId: 'createTraces',
  request: { body: { content: { 'application/json': { schema: TraceBatchWriteSchema } } } },
  responses: { 204: { description: 'No Content' } },
})

export const patchV1PrivateTracesBatchRoute = createRoute({
  method: 'patch',
  path: '/v1/private/traces/batch',
  tags: ['Traces'],
  summary: 'Batch update traces',
  description: 'Update multiple traces',
  operationId: 'batchUpdateTraces',
  request: { body: { content: { 'application/json': { schema: TraceBatchUpdateSchema } } } },
  responses: {
    204: { description: 'No Content' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const patchV1PrivateTracesThreadsBatchRoute = createRoute({
  method: 'patch',
  path: '/v1/private/traces/threads/batch',
  tags: ['Traces'],
  summary: 'Batch update threads',
  description: 'Update multiple threads',
  operationId: 'batchUpdateThreads',
  request: { body: { content: { 'application/json': { schema: TraceThreadBatchUpdateSchema } } } },
  responses: {
    204: { description: 'No Content' },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const putV1PrivateTracesThreadsCloseRoute = createRoute({
  method: 'put',
  path: '/v1/private/traces/threads/close',
  tags: ['Traces'],
  summary: 'Close trace thread(s)',
  description:
    'Close one or multiple trace threads. Supports both single thread_id and multiple thread_ids for batch operations.',
  operationId: 'closeTraceThread',
  request: {
    body: { content: { 'application/json': { schema: TraceThreadBatchIdentifierSchema } } },
  },
  responses: {
    204: { description: 'No Content' },
    404: {
      description: 'Not found',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const getV1PrivateTracesRoute = createRoute({
  method: 'get',
  path: '/v1/private/traces',
  tags: ['Traces'],
  summary: 'Get traces by project_name or project_id',
  description: 'Get traces by project_name or project_id',
  operationId: 'getTracesByProject',
  request: {
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            schema: { minimum: 1, type: 'integer', format: 'int32', default: 1 },
            required: false,
          },
        }),
      size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'size',
            in: 'query',
            schema: { minimum: 1, type: 'integer', format: 'int32', default: 10 },
            required: false,
          },
        }),
      project_name: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'project_name', in: 'query', schema: { type: 'string' }, required: false },
        }),
      project_id: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            name: 'project_id',
            in: 'query',
            schema: { type: 'string', format: 'uuid' },
            required: false,
          },
        }),
      filters: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'filters', in: 'query', schema: { type: 'string' }, required: false },
        }),
      truncate: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'truncate',
            in: 'query',
            schema: {
              type: 'boolean',
              description: 'Truncate input, output and metadata to slim payloads',
              default: false,
            },
            required: false,
          },
          description: 'Truncate input, output and metadata to slim payloads',
        }),
      strip_attachments: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'strip_attachments',
            in: 'query',
            schema: {
              type: 'boolean',
              description:
                'If true, returns attachment references like [file.png]; if false, downloads and reinjects stripped attachments',
              default: false,
            },
            required: false,
          },
          description:
            'If true, returns attachment references like [file.png]; if false, downloads and reinjects stripped attachments',
        }),
      sorting: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'sorting', in: 'query', schema: { type: 'string' }, required: false },
        }),
      exclude: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'exclude', in: 'query', schema: { type: 'string' }, required: false },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            in: 'query',
            schema: { type: 'string', description: 'Full-text search across trace fields' },
            required: false,
          },
          description: 'Full-text search across trace fields',
        }),
      from_time: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'from_time',
            in: 'query',
            schema: {
              type: 'string',
              description: 'Filter traces created from this time (ISO-8601 format).',
              format: 'date-time',
            },
            required: false,
          },
          description: 'Filter traces created from this time (ISO-8601 format).',
        }),
      to_time: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'to_time',
            in: 'query',
            schema: {
              type: 'string',
              description:
                "Filter traces created up to this time (ISO-8601 format). If not provided, defaults to current time. Must be after 'from_time'.",
              format: 'date-time',
            },
            required: false,
          },
          description:
            "Filter traces created up to this time (ISO-8601 format). If not provided, defaults to current time. Must be after 'from_time'.",
        }),
      annotation_queue_id: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            name: 'annotation_queue_id',
            in: 'query',
            schema: {
              type: 'string',
              description:
                'Filter traces belonging to this annotation queue and scope feedback scores/comments to it',
              format: 'uuid',
            },
            required: false,
          },
          description:
            'Filter traces belonging to this annotation queue and scope feedback scores/comments to it',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Trace resource',
      content: { 'application/json': { schema: TracePagePublicSchema } },
    },
  },
})

export const postV1PrivateTracesRoute = createRoute({
  method: 'post',
  path: '/v1/private/traces',
  tags: ['Traces'],
  summary: 'Create trace',
  description: 'Get trace',
  operationId: 'createTrace',
  request: { body: { content: { 'application/json': { schema: TraceWriteSchema } } } },
  responses: {
    201: {
      description: 'Created',
      headers: z.object({
        Location: {
          required: true,
          example: '${basePath}/v1/private/traces/{traceId}',
          style: 'simple',
          schema: z.string().openapi({ example: '${basePath}/v1/private/traces/{traceId}' }),
        },
      }),
    },
  },
})

export const getV1PrivateTracesIdRoute = createRoute({
  method: 'get',
  path: '/v1/private/traces/{id}',
  tags: ['Traces'],
  summary: 'Get trace by id',
  description: 'Get trace by id',
  operationId: 'getTraceById',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    query: z.object({
      strip_attachments: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'strip_attachments',
            in: 'query',
            schema: {
              type: 'boolean',
              description:
                'If true, returns attachment references like [file.png]; if false, downloads and reinjects attachment content from S3 (default: false for backward compatibility)',
              default: false,
            },
            required: false,
          },
          description:
            'If true, returns attachment references like [file.png]; if false, downloads and reinjects attachment content from S3 (default: false for backward compatibility)',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Trace resource',
      content: { 'application/json': { schema: TracePublicSchema } },
    },
  },
})

export const deleteV1PrivateTracesIdRoute = createRoute({
  method: 'delete',
  path: '/v1/private/traces/{id}',
  tags: ['Traces'],
  summary: 'Delete trace by id',
  description: 'Delete trace by id',
  operationId: 'deleteTraceById',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: { 204: { description: 'No Content' } },
})

export const patchV1PrivateTracesIdRoute = createRoute({
  method: 'patch',
  path: '/v1/private/traces/{id}',
  tags: ['Traces'],
  summary: 'Update trace by id',
  description: 'Update trace by id',
  operationId: 'updateTrace',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TraceUpdateSchema } } },
  },
  responses: { 204: { description: 'No Content' } },
})

export const postV1PrivateTracesThreadsCommentsDeleteRoute = createRoute({
  method: 'post',
  path: '/v1/private/traces/threads/comments/delete',
  tags: ['Traces'],
  summary: 'Delete thread comments',
  description: 'Delete thread comments',
  operationId: 'deleteThreadComments',
  request: { body: { content: { 'application/json': { schema: BatchDeleteSchema } } } },
  responses: { 204: { description: 'No Content' } },
})

export const postV1PrivateTracesThreadsFeedbackScoresDeleteRoute = createRoute({
  method: 'post',
  path: '/v1/private/traces/threads/feedback-scores/delete',
  tags: ['Traces'],
  summary: 'Delete thread feedback scores',
  description: 'Delete thread feedback scores',
  operationId: 'deleteThreadFeedbackScores',
  request: {
    body: { content: { 'application/json': { schema: DeleteThreadFeedbackScoresSchema } } },
  },
  responses: { 204: { description: 'No Content' } },
})

export const postV1PrivateTracesCommentsDeleteRoute = createRoute({
  method: 'post',
  path: '/v1/private/traces/comments/delete',
  tags: ['Traces'],
  summary: 'Delete trace comments',
  description: 'Delete trace comments',
  operationId: 'deleteTraceComments',
  request: { body: { content: { 'application/json': { schema: BatchDeleteSchema } } } },
  responses: { 204: { description: 'No Content' } },
})

export const postV1PrivateTracesIdFeedbackScoresDeleteRoute = createRoute({
  method: 'post',
  path: '/v1/private/traces/{id}/feedback-scores/delete',
  tags: ['Traces'],
  summary: 'Delete trace feedback score',
  description: 'Delete trace feedback score',
  operationId: 'deleteTraceFeedbackScore',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteFeedbackScoreSchema } } },
  },
  responses: { 204: { description: 'No Content' } },
})

export const postV1PrivateTracesThreadsDeleteRoute = createRoute({
  method: 'post',
  path: '/v1/private/traces/threads/delete',
  tags: ['Traces'],
  summary: 'Delete trace threads',
  description: 'Delete trace threads',
  operationId: 'deleteTraceThreads',
  request: { body: { content: { 'application/json': { schema: DeleteTraceThreadsSchema } } } },
  responses: { 204: { description: 'No Content' } },
})

export const postV1PrivateTracesDeleteRoute = createRoute({
  method: 'post',
  path: '/v1/private/traces/delete',
  tags: ['Traces'],
  summary: 'Delete traces',
  description: 'Delete traces',
  operationId: 'deleteTraces',
  request: { body: { content: { 'application/json': { schema: BatchDeleteByProjectSchema } } } },
  responses: {
    204: { description: 'No Content' },
    422: {
      description: 'Unprocessable Content',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const getV1PrivateTracesFeedbackScoresNamesRoute = createRoute({
  method: 'get',
  path: '/v1/private/traces/feedback-scores/names',
  tags: ['Traces'],
  summary: 'Find Feedback Score names',
  description: 'Find Feedback Score names',
  operationId: 'findFeedbackScoreNames_2',
  request: {
    query: z.object({
      project_id: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            name: 'project_id',
            in: 'query',
            schema: { type: 'string', format: 'uuid' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Feedback Scores resource',
      content: { 'application/json': { schema: FeedbackScoreNamesPublicSchema } },
    },
  },
})

export const getV1PrivateTracesThreadsFeedbackScoresNamesRoute = createRoute({
  method: 'get',
  path: '/v1/private/traces/threads/feedback-scores/names',
  tags: ['Traces'],
  summary: 'Find Trace Threads Feedback Score names',
  description: 'Find Trace Threads Feedback Score names',
  operationId: 'findTraceThreadsFeedbackScoreNames',
  request: {
    query: z.object({
      project_id: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            name: 'project_id',
            in: 'query',
            schema: { type: 'string', format: 'uuid' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Find Trace Threads Feedback Score names',
      content: { 'application/json': { schema: FeedbackScoreNamesPublicSchema } },
    },
  },
})

export const getV1PrivateTracesStatsRoute = createRoute({
  method: 'get',
  path: '/v1/private/traces/stats',
  tags: ['Traces'],
  summary: 'Get trace stats',
  description: 'Get trace stats',
  operationId: 'getTraceStats',
  request: {
    query: z.object({
      project_id: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            name: 'project_id',
            in: 'query',
            schema: { type: 'string', format: 'uuid' },
            required: false,
          },
        }),
      project_name: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'project_name', in: 'query', schema: { type: 'string' }, required: false },
        }),
      filters: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'filters', in: 'query', schema: { type: 'string' }, required: false },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            in: 'query',
            schema: { type: 'string', description: 'Full-text search across trace fields' },
            required: false,
          },
          description: 'Full-text search across trace fields',
        }),
      from_time: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'from_time',
            in: 'query',
            schema: {
              type: 'string',
              description: 'Filter traces created from this time (ISO-8601 format).',
              format: 'date-time',
            },
            required: false,
          },
          description: 'Filter traces created from this time (ISO-8601 format).',
        }),
      to_time: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'to_time',
            in: 'query',
            schema: {
              type: 'string',
              description:
                "Filter traces created up to this time (ISO-8601 format). If not provided, defaults to current time. Must be after 'from_time'.",
              format: 'date-time',
            },
            required: false,
          },
          description:
            "Filter traces created up to this time (ISO-8601 format). If not provided, defaults to current time. Must be after 'from_time'.",
        }),
      annotation_queue_id: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            name: 'annotation_queue_id',
            in: 'query',
            schema: {
              type: 'string',
              description:
                'Compute stats over the traces belonging to this annotation queue and scope feedback scores to it',
              format: 'uuid',
            },
            required: false,
          },
          description:
            'Compute stats over the traces belonging to this annotation queue and scope feedback scores to it',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Trace stats resource',
      content: { 'application/json': { schema: ProjectStatsPublicSchema } },
    },
  },
})

export const getV1PrivateTracesThreadsThreadIdCommentsCommentIdRoute = createRoute({
  method: 'get',
  path: '/v1/private/traces/threads/{threadId}/comments/{commentId}',
  tags: ['Traces'],
  summary: 'Get thread comment',
  description: 'Get thread comment',
  operationId: 'getThreadComment',
  request: {
    params: z.object({
      commentId: z
        .uuid()
        .openapi({
          param: {
            name: 'commentId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      threadId: z
        .uuid()
        .openapi({
          param: {
            name: 'threadId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Comment resource',
      content: { 'application/json': { schema: CommentSchema } },
    },
    404: {
      description: 'Not found',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const getV1PrivateTracesThreadsStatsRoute = createRoute({
  method: 'get',
  path: '/v1/private/traces/threads/stats',
  tags: ['Traces'],
  summary: 'Get trace thread stats',
  description: 'Get trace thread stats',
  operationId: 'getTraceThreadStats',
  request: {
    query: z.object({
      project_id: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            name: 'project_id',
            in: 'query',
            schema: { type: 'string', format: 'uuid' },
            required: false,
          },
        }),
      project_name: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'project_name', in: 'query', schema: { type: 'string' }, required: false },
        }),
      filters: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'filters', in: 'query', schema: { type: 'string' }, required: false },
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            in: 'query',
            schema: { type: 'string', description: 'Full-text search across thread fields' },
            required: false,
          },
          description: 'Full-text search across thread fields',
        }),
      from_time: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'from_time',
            in: 'query',
            schema: {
              type: 'string',
              description: 'Filter trace threads created from this time (ISO-8601 format).',
              format: 'date-time',
            },
            required: false,
          },
          description: 'Filter trace threads created from this time (ISO-8601 format).',
        }),
      to_time: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'to_time',
            in: 'query',
            schema: {
              type: 'string',
              description:
                "Filter trace threads created up to this time (ISO-8601 format). If not provided, defaults to current time. Must be after 'from_time'.",
              format: 'date-time',
            },
            required: false,
          },
          description:
            "Filter trace threads created up to this time (ISO-8601 format). If not provided, defaults to current time. Must be after 'from_time'.",
        }),
    }),
  },
  responses: {
    200: {
      description: 'Trace thread stats resource',
      content: { 'application/json': { schema: ProjectStatsPublicSchema } },
    },
  },
})

export const getV1PrivateTracesTraceIdCommentsCommentIdRoute = createRoute({
  method: 'get',
  path: '/v1/private/traces/{traceId}/comments/{commentId}',
  tags: ['Traces'],
  summary: 'Get trace comment',
  description: 'Get trace comment',
  operationId: 'getTraceComment',
  request: {
    params: z.object({
      commentId: z
        .uuid()
        .openapi({
          param: {
            name: 'commentId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      traceId: z
        .uuid()
        .openapi({
          param: {
            name: 'traceId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Comment resource',
      content: { 'application/json': { schema: CommentSchema } },
    },
    404: {
      description: 'Not found',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const postV1PrivateTracesThreadsRetrieveRoute = createRoute({
  method: 'post',
  path: '/v1/private/traces/threads/retrieve',
  tags: ['Traces'],
  summary: 'Get trace thread',
  description: 'Get trace thread',
  operationId: 'getTraceThread',
  request: { body: { content: { 'application/json': { schema: TraceThreadIdentifierSchema } } } },
  responses: {
    200: {
      description: 'Trace thread resource',
      content: { 'application/json': { schema: TraceThreadSchema } },
    },
    404: {
      description: 'Not found',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const getV1PrivateTracesThreadsRoute = createRoute({
  method: 'get',
  path: '/v1/private/traces/threads',
  tags: ['Traces'],
  summary: 'Get trace threads',
  description: 'Get trace threads',
  operationId: 'getTraceThreads',
  request: {
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            schema: { minimum: 1, type: 'integer', format: 'int32', default: 1 },
            required: false,
          },
        }),
      size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'size',
            in: 'query',
            schema: { minimum: 1, type: 'integer', format: 'int32', default: 10 },
            required: false,
          },
        }),
      project_name: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'project_name', in: 'query', schema: { type: 'string' }, required: false },
        }),
      project_id: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            name: 'project_id',
            in: 'query',
            schema: { type: 'string', format: 'uuid' },
            required: false,
          },
        }),
      truncate: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'truncate',
            in: 'query',
            schema: {
              type: 'boolean',
              description: 'Truncate input, output and metadata to slim payloads',
              default: false,
            },
            required: false,
          },
          description: 'Truncate input, output and metadata to slim payloads',
        }),
      strip_attachments: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'strip_attachments',
            in: 'query',
            schema: {
              type: 'boolean',
              description:
                'If true, returns attachment references like [file.png]; if false, downloads and reinjects stripped attachments',
              default: false,
            },
            required: false,
          },
          description:
            'If true, returns attachment references like [file.png]; if false, downloads and reinjects stripped attachments',
        }),
      filters: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'filters', in: 'query', schema: { type: 'string' }, required: false },
        }),
      sorting: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'sorting', in: 'query', schema: { type: 'string' }, required: false },
        }),
      exclude: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'exclude',
            in: 'query',
            schema: {
              type: 'string',
              description:
                'Enrichment fields to leave out of each thread, e.g. ["annotation_queues"]',
            },
            required: false,
          },
          description: 'Enrichment fields to leave out of each thread, e.g. ["annotation_queues"]',
        }),
      search: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'search',
            in: 'query',
            schema: { type: 'string', description: 'Full-text search across thread fields' },
            required: false,
          },
          description: 'Full-text search across thread fields',
        }),
      from_time: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'from_time',
            in: 'query',
            schema: {
              type: 'string',
              description: 'Filter trace threads created from this time (ISO-8601 format).',
              format: 'date-time',
            },
            required: false,
          },
          description: 'Filter trace threads created from this time (ISO-8601 format).',
        }),
      to_time: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'to_time',
            in: 'query',
            schema: {
              type: 'string',
              description:
                "Filter trace threads created up to this time (ISO-8601 format). If not provided, defaults to current time. Must be after 'from_time'.",
              format: 'date-time',
            },
            required: false,
          },
          description:
            "Filter trace threads created up to this time (ISO-8601 format). If not provided, defaults to current time. Must be after 'from_time'.",
        }),
      annotation_queue_id: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            name: 'annotation_queue_id',
            in: 'query',
            schema: {
              type: 'string',
              description:
                'Filter threads belonging to this annotation queue and scope feedback scores/comments to it',
              format: 'uuid',
            },
            required: false,
          },
          description:
            'Filter threads belonging to this annotation queue and scope feedback scores/comments to it',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Trace threads resource',
      content: { 'application/json': { schema: TraceThreadPageSchema } },
    },
  },
})

export const putV1PrivateTracesThreadsOpenRoute = createRoute({
  method: 'put',
  path: '/v1/private/traces/threads/open',
  tags: ['Traces'],
  summary: 'Open trace thread',
  description: 'Open trace thread',
  operationId: 'openTraceThread',
  request: { body: { content: { 'application/json': { schema: TraceThreadIdentifierSchema } } } },
  responses: { 204: { description: 'No Content' } },
})

export const putV1PrivateTracesThreadsFeedbackScoresRoute = createRoute({
  method: 'put',
  path: '/v1/private/traces/threads/feedback-scores',
  tags: ['Traces'],
  summary: 'Batch feedback scoring for threads',
  description: 'Batch feedback scoring for threads',
  operationId: 'scoreBatchOfThreads',
  request: {
    body: { content: { 'application/json': { schema: FeedbackScoreBatchThreadSchema } } },
  },
  responses: { 204: { description: 'No Content' } },
})

export const putV1PrivateTracesFeedbackScoresRoute = createRoute({
  method: 'put',
  path: '/v1/private/traces/feedback-scores',
  tags: ['Traces'],
  summary: 'Batch feedback scoring for traces',
  description: 'Batch feedback scoring for traces',
  operationId: 'scoreBatchOfTraces',
  request: { body: { content: { 'application/json': { schema: FeedbackScoreBatchSchema } } } },
  responses: { 204: { description: 'No Content' } },
})

export const postV1PrivateTracesThreadsSearchRoute = createRoute({
  method: 'post',
  path: '/v1/private/traces/threads/search',
  tags: ['Traces'],
  summary: 'Search trace threads',
  description: 'Search trace threads',
  operationId: 'searchTraceThreads',
  request: {
    body: { content: { 'application/json': { schema: TraceThreadSearchStreamRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Trace threads stream or error during process',
      content: {
        'application/octet-stream': {
          schema: z.array(z.union([TraceThreadSchema, ErrorMessageSchema])).max(2000),
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/octet-stream': { schema: ErrorMessageSchema } },
    },
  },
})

export const postV1PrivateTracesSearchRoute = createRoute({
  method: 'post',
  path: '/v1/private/traces/search',
  tags: ['Traces'],
  summary: 'Search traces',
  description: 'Search traces',
  operationId: 'searchTraces',
  request: {
    body: { content: { 'application/json': { schema: TraceSearchStreamRequestPublicSchema } } },
  },
  responses: {
    200: {
      description: 'Traces stream or error during process',
      content: {
        'application/octet-stream': {
          schema: z.array(z.union([TracePublicSchema, ErrorMessagePublicSchema])).max(2000),
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/octet-stream': { schema: ErrorMessagePublicSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/octet-stream': { schema: ErrorMessagePublicSchema } },
    },
  },
})

export const getV1PrivateTracesExistsRoute = createRoute({
  method: 'get',
  path: '/v1/private/traces/exists',
  tags: ['Traces'],
  summary: 'Check whether a project has traces',
  description:
    'Returns whether the project has at least one trace matching the given scope. Cheap existence probe (LIMIT 1) used to drive empty-state decisions without scanning or aggregating the whole project.',
  operationId: 'tracesExist',
  request: {
    query: z.object({
      project_id: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            name: 'project_id',
            in: 'query',
            schema: { type: 'string', format: 'uuid' },
            required: false,
          },
        }),
      project_name: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'project_name', in: 'query', schema: { type: 'string' }, required: false },
        }),
      source: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'source',
            in: 'query',
            schema: {
              type: 'string',
              description:
                "Restrict the probe to a single ingestion source (e.g. 'sdk' for the Logs empty state), matching the rendered list's logs-source scope. Omit to probe any source.",
            },
            required: false,
          },
          description:
            "Restrict the probe to a single ingestion source (e.g. 'sdk' for the Logs empty state), matching the rendered list's logs-source scope. Omit to probe any source.",
        }),
      thread_only: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'thread_only',
            in: 'query',
            schema: {
              type: 'boolean',
              description:
                'When true, only considers traces that belong to a thread (thread_id is set) — used by the Threads empty state.',
              default: false,
            },
            required: false,
          },
          description:
            'When true, only considers traces that belong to a thread (thread_id is set) — used by the Threads empty state.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Trace existence',
      content: { 'application/json': { schema: ExistenceResponseSchema } },
    },
  },
})

export const patchV1PrivateTracesThreadsThreadModelIdRoute = createRoute({
  method: 'patch',
  path: '/v1/private/traces/threads/{threadModelId}',
  tags: ['Traces'],
  summary: 'Update thread',
  description: 'Update thread',
  operationId: 'updateThread',
  request: {
    params: z.object({
      threadModelId: z
        .uuid()
        .openapi({
          param: {
            name: 'threadModelId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TraceThreadUpdateSchema } } },
  },
  responses: { 204: { description: 'No Content' }, 404: { description: 'Not found' } },
})

export const patchV1PrivateTracesThreadsCommentsCommentIdRoute = createRoute({
  method: 'patch',
  path: '/v1/private/traces/threads/comments/{commentId}',
  tags: ['Traces'],
  summary: 'Update thread comment by id',
  description: 'Update thread comment by id',
  operationId: 'updateThreadComment',
  request: {
    params: z.object({
      commentId: z
        .uuid()
        .openapi({
          param: {
            name: 'commentId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CommentSchema } } },
  },
  responses: { 204: { description: 'No Content' }, 404: { description: 'Not found' } },
})

export const patchV1PrivateTracesCommentsCommentIdRoute = createRoute({
  method: 'patch',
  path: '/v1/private/traces/comments/{commentId}',
  tags: ['Traces'],
  summary: 'Update trace comment by id',
  description: 'Update trace comment by id',
  operationId: 'updateTraceComment',
  request: {
    params: z.object({
      commentId: z
        .uuid()
        .openapi({
          param: {
            name: 'commentId',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CommentSchema } } },
  },
  responses: { 204: { description: 'No Content' }, 404: { description: 'Not found' } },
})

export const getV1PrivateWelcomeWizardRoute = createRoute({
  method: 'get',
  path: '/v1/private/welcome-wizard',
  tags: ['Welcome Wizard'],
  summary: 'Get welcome wizard tracking status',
  description: 'Get welcome wizard tracking status for the current workspace',
  operationId: 'getWelcomeWizardStatus',
  responses: {
    200: {
      description: 'Welcome wizard tracking status',
      content: { 'application/json': { schema: WelcomeWizardTrackingSchema } },
    },
  },
})

export const postV1PrivateWelcomeWizardRoute = createRoute({
  method: 'post',
  path: '/v1/private/welcome-wizard',
  tags: ['Welcome Wizard'],
  summary: 'Submit welcome wizard',
  description: 'Submit welcome wizard with user information',
  operationId: 'submitWelcomeWizard',
  request: { body: { content: { 'application/json': { schema: WelcomeWizardSubmissionSchema } } } },
  responses: { 204: { description: 'Welcome wizard submitted successfully' } },
})

export const getV1PrivateWorkspacePermissionsRoute = createRoute({
  method: 'get',
  path: '/v1/private/workspace-permissions',
  tags: ['Workspace permissions'],
  summary: 'Get workspace permissions for the authenticated user',
  description: 'Get workspace permissions for the authenticated user',
  operationId: 'getWorkspaceUserPermissions',
  responses: {
    200: {
      description: 'Workspace Permissions',
      content: { 'application/json': { schema: WorkspaceUserPermissionsSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const postV1PrivateWorkspacesCostsSummariesRoute = createRoute({
  method: 'post',
  path: '/v1/private/workspaces/costs/summaries',
  tags: ['Workspaces'],
  summary: 'Get costs summary',
  description: 'Get costs summary',
  operationId: 'costsSummary',
  request: {
    body: { content: { 'application/json': { schema: WorkspaceMetricsSummaryRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Workspace Metrics',
      content: { 'application/json': { schema: ResultSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const getV1PrivateWorkspacesConfigurationsRoute = createRoute({
  method: 'get',
  path: '/v1/private/workspaces/configurations',
  tags: ['Workspaces'],
  summary: 'Get workspace configuration',
  description: 'Get workspace configuration',
  operationId: 'getWorkspaceConfiguration',
  responses: {
    200: {
      description: 'Workspace Configuration',
      content: { 'application/json': { schema: WorkspaceConfigurationSchema } },
    },
    404: {
      description: 'Configuration Not Found',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const putV1PrivateWorkspacesConfigurationsRoute = createRoute({
  method: 'put',
  path: '/v1/private/workspaces/configurations',
  tags: ['Workspaces'],
  summary: 'Upsert workspace configuration',
  description: 'Upsert workspace configuration',
  operationId: 'upsertWorkspaceConfiguration',
  request: { body: { content: { 'application/json': { schema: WorkspaceConfigurationSchema } } } },
  responses: {
    200: {
      description: 'Configuration Updated',
      content: { 'application/json': { schema: WorkspaceConfigurationSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
    422: {
      description: 'Unprocessable Content',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const deleteV1PrivateWorkspacesConfigurationsRoute = createRoute({
  method: 'delete',
  path: '/v1/private/workspaces/configurations',
  tags: ['Workspaces'],
  summary: 'Delete workspace configuration',
  description: 'Delete workspace configuration',
  operationId: 'deleteWorkspaceConfiguration',
  responses: {
    204: { description: 'Configuration Deleted' },
    404: {
      description: 'Configuration Not Found',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const postV1PrivateWorkspacesCostsRoute = createRoute({
  method: 'post',
  path: '/v1/private/workspaces/costs',
  tags: ['Workspaces'],
  summary: 'Get cost daily data',
  description: 'Get cost daily data',
  operationId: 'getCost',
  request: {
    body: { content: { 'application/json': { schema: WorkspaceMetricsSummaryRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Workspace cost data by days',
      content: { 'application/json': { schema: WorkspaceMetricResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const postV1PrivateWorkspacesMetricsRoute = createRoute({
  method: 'post',
  path: '/v1/private/workspaces/metrics',
  tags: ['Workspaces'],
  summary: 'Get metric daily data',
  description: 'Get metric daily data',
  operationId: 'getMetric',
  request: {
    body: { content: { 'application/json': { schema: WorkspaceMetricsSummaryRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Workspace metric data by days',
      content: { 'application/json': { schema: WorkspaceMetricResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
  deprecated: true,
})

export const postV1PrivateWorkspacesMetricsSpansRoute = createRoute({
  method: 'post',
  path: '/v1/private/workspaces/metrics/spans',
  tags: ['Workspaces'],
  summary: 'Get workspace span metric',
  description:
    'Gets a span metric time series aggregated across the workspace. When project_ids is empty, all projects in the workspace are included; otherwise only the given projects.',
  operationId: 'getWorkspaceSpanMetric',
  request: {
    body: { content: { 'application/json': { schema: WorkspaceSpanMetricRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Workspace span metric',
      content: { 'application/json': { schema: WorkspaceMetricResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const postV1PrivateWorkspacesTokenUsageNamesRoute = createRoute({
  method: 'post',
  path: '/v1/private/workspaces/token-usage/names',
  tags: ['Workspaces'],
  summary: 'Get workspace token usage names',
  description:
    'Gets the distinct span token usage key names aggregated across the workspace. When project_ids is empty, all projects in the workspace are included; otherwise only the given projects.',
  operationId: 'getWorkspaceTokenUsageNames',
  request: {
    body: { content: { 'application/json': { schema: WorkspaceTokenUsageNamesRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Token Usage names resource',
      content: { 'application/json': { schema: TokenUsageNamesSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
})

export const postV1PrivateWorkspacesMetricsSummariesRoute = createRoute({
  method: 'post',
  path: '/v1/private/workspaces/metrics/summaries',
  tags: ['Workspaces'],
  summary: 'Get metrics summary',
  description: 'Get metrics summary',
  operationId: 'metricsSummary',
  request: {
    body: { content: { 'application/json': { schema: WorkspaceMetricsSummaryRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Workspace Metrics',
      content: { 'application/json': { schema: WorkspaceMetricsSummaryResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: ErrorMessageSchema } },
    },
  },
  deprecated: true,
})

export const getV1SessionRedirectDatasetsRoute = createRoute({
  method: 'get',
  path: '/v1/session/redirect/datasets',
  tags: ['Redirect'],
  summary: 'Create dataset redirect url',
  description: 'Create dataset redirect url',
  operationId: 'datasetsRedirect',
  request: {
    query: z.object({
      dataset_id: z
        .uuid()
        .openapi({
          param: {
            name: 'dataset_id',
            in: 'query',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      workspace_name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'workspace_name',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      path: z
        .string()
        .openapi({
          param: { name: 'path', in: 'query', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    303: { description: 'Redirect' },
    400: { description: 'Bad Request', content: { '*/*': { schema: ErrorMessageSchema } } },
    404: { description: 'Not Found', content: { '*/*': { schema: ErrorMessageSchema } } },
  },
})

export const getV1SessionRedirectExperimentsRoute = createRoute({
  method: 'get',
  path: '/v1/session/redirect/experiments',
  tags: ['Redirect'],
  summary: 'Create experiment redirect url',
  description: 'Create experiment redirect url',
  operationId: 'experimentsRedirect',
  request: {
    query: z.object({
      dataset_id: z
        .uuid()
        .openapi({
          param: {
            name: 'dataset_id',
            in: 'query',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      experiment_id: z
        .uuid()
        .openapi({
          param: {
            name: 'experiment_id',
            in: 'query',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      workspace_name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'workspace_name',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      path: z
        .string()
        .openapi({
          param: { name: 'path', in: 'query', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    303: { description: 'Redirect' },
    400: { description: 'Bad Request', content: { '*/*': { schema: ErrorMessageSchema } } },
    404: { description: 'Not Found', content: { '*/*': { schema: ErrorMessageSchema } } },
  },
})

export const getV1SessionRedirectOptimizationsRoute = createRoute({
  method: 'get',
  path: '/v1/session/redirect/optimizations',
  tags: ['Redirect'],
  summary: 'Create optimization redirect url',
  description: 'Create optimization redirect url',
  operationId: 'optimizationsRedirect',
  request: {
    query: z.object({
      dataset_id: z
        .uuid()
        .openapi({
          param: {
            name: 'dataset_id',
            in: 'query',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      optimization_id: z
        .uuid()
        .openapi({
          param: {
            name: 'optimization_id',
            in: 'query',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      workspace_name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'workspace_name',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      path: z
        .string()
        .openapi({
          param: { name: 'path', in: 'query', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    303: { description: 'Redirect' },
    400: { description: 'Bad Request', content: { '*/*': { schema: ErrorMessageSchema } } },
    404: { description: 'Not Found', content: { '*/*': { schema: ErrorMessageSchema } } },
  },
})

export const getV1SessionRedirectProjectsRoute = createRoute({
  method: 'get',
  path: '/v1/session/redirect/projects',
  tags: ['Redirect'],
  summary: 'Create project redirect url',
  description: 'Create project redirect url',
  operationId: 'projectsRedirect',
  request: {
    query: z.object({
      trace_id: z
        .uuid()
        .openapi({
          param: {
            name: 'trace_id',
            in: 'query',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      workspace_name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'workspace_name',
            in: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
      path: z
        .string()
        .openapi({
          param: { name: 'path', in: 'query', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    303: { description: 'Redirect' },
    400: { description: 'Bad Request', content: { '*/*': { schema: ErrorMessageSchema } } },
    404: { description: 'Not Found', content: { '*/*': { schema: ErrorMessageSchema } } },
  },
})

export const getIsAlivePingRoute = createRoute({
  method: 'get',
  path: '/is-alive/ping',
  operationId: 'isAlive',
  responses: { default: { description: 'default response', content: {} } },
})

export const getIsAliveVerRoute = createRoute({
  method: 'get',
  path: '/is-alive/ver',
  operationId: 'version',
  responses: { default: { description: 'default response', content: {} } },
})
