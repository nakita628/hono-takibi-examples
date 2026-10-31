import { createRoute, z } from '@hono/zod-openapi'

const ActionPolicyReassignSchema = z
  .object({
    policy_id: z
      .string()
      .openapi({ desription: 'The policy ID the agent has been reassigned to.' }),
  })
  .openapi({ description: 'The POLICY_REASSIGN action data.', required: ['policy_id'] })
  .openapi('ActionPolicyReassign')

const OtelConfigServiceSchema = z
  .object({
    extensions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'List of enabled extensions.',
        'x-go-type-skip-optional-pointer': true,
      }),
    pipelines: z
      .record(
        z.string(),
        z
          .object({
            exporters: z
              .array(z.string())
              .exactOptional()
              .openapi({
                description: 'list of enabled exporters for each pipeline.',
                'x-go-type-skip-optional-pointer': true,
              }),
            processors: z
              .array(z.string())
              .exactOptional()
              .openapi({
                description: 'list of enabled processors for each pipeline.',
                'x-go-type-skip-optional-pointer': true,
              }),
            receivers: z
              .array(z.string())
              .exactOptional()
              .openapi({
                description: 'list of enabled receivers for each pipeline.',
                'x-go-type-skip-optional-pointer': true,
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ 'x-go-type-skip-optional-pointer': true }),
  })
  .openapi({ description: 'OTel collector pipelines setup.', required: [] })
  .openapi('OtelConfigService')

const ActionSignatureSchema = z
  .object({
    data: z
      .base64()
      .openapi({
        description: 'The base64 encoded, UTF-8 JSON serialized action bytes that are signed.',
        'x-go-custom-tag': 'yaml:"data"',
        'x-oapi-codegen-extra-tags': { yaml: 'data', json: 'data,omitempty' },
      }),
    signature: z
      .base64()
      .openapi({
        description: 'The base64 encoded signature.',
        'x-go-custom-tag': 'yaml:"signature"',
        'x-oapi-codegen-extra-tags': { yaml: 'signature', json: 'signature,omitempty' },
      }),
  })
  .openapi({
    description: 'Optional action signing data.',
    'x-go-custom-tag': 'yaml:"signed"',
    'x-oapi-codegen-extra-tags': { yaml: 'signed' },
    required: ['data', 'signature'],
  })
  .openapi('ActionSignature')

const PolicyDataSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: "The policy's ID.", 'x-go-type-skip-optional-pointer': true }),
    secret_paths: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of keys that reference secret values that have been injected into the policy.',
        'x-go-type-skip-optional-pointer': true,
      }),
    outputs: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'A map of all outputs that the agent running the policy can use to send data to.',
        'x-go-type-skip-optional-pointer': true,
      }),
    inputs: z
      .array(z.object({}))
      .exactOptional()
      .openapi({
        description: 'A list of all inputs that the agent should run.',
        'x-go-type-skip-optional-pointer': true,
      }),
    extensions: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'OTel collector extensions.',
        'x-go-type-skip-optional-pointer': true,
      }),
    receivers: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'OTel collector receivers.',
        'x-go-type-skip-optional-pointer': true,
      }),
    processors: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'OTel collector processors.',
        'x-go-type-skip-optional-pointer': true,
      }),
    connectors: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'OTel collector connectors.',
        'x-go-type-skip-optional-pointer': true,
      }),
    exporters: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'OTel collector exporters.',
        'x-go-type-skip-optional-pointer': true,
      }),
    service: OtelConfigServiceSchema.exactOptional(),
    revision: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The revision number of the policy. Should match revision_idx.',
        'x-go-type-skip-optional-pointer': true,
      }),
    agent: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'Agent configuration details associated with the policy. May include configuration toggling monitoring, uninstallation protection, etc.',
        'x-go-type-skip-optional-pointer': true,
      }),
    signed: ActionSignatureSchema.exactOptional(),
    output_permissions: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'Elasticsearch permissions that the agent requires in order to run the policy.',
        'x-go-type-skip-optional-pointer': true,
      }),
    fleet: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'Agent configuration to describe how to connect to fleet-server.',
        'x-go-type-skip-optional-pointer': true,
      }),
  })
  .openapi({
    description:
      'The full policy that an agent should run after combining with local configuration/env vars.',
    required: [],
  })
  .openapi('PolicyData')

const ActionPolicyChangeSchema = z
  .object({ policy: PolicyDataSchema })
  .openapi({ description: 'The POLICY_CHANGE action data.', required: ['policy'] })
  .openapi('ActionPolicyChange')

const ActionUpgradeSchema = z
  .object({
    version: z
      .string()
      .openapi({ description: 'The version number that the agent should upgrade to.' }),
    source_uri: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The source of the upgrade artifact.',
        deprecated: true,
        'x-deprecated-reason': 'Replaced by sources.',
      }),
    sources: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'An ordered list of sources for the upgrade artifact.' }),
    rollback: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if this version change should be performed as a rollback to a previous version.',
      }),
  })
  .openapi({ description: 'the UPGRADE action data.', required: ['version'] })
  .openapi('ActionUpgrade')

const ActionUnenrollSchema = z
  .any()
  .openapi({ description: 'The UNENROLL action data.' })
  .openapi('ActionUnenroll')

const ActionSettingsSchema = z
  .object({ log_level: z.enum(['trace', 'debug', 'info', 'warning', 'error']).exactOptional() })
  .openapi({ description: 'The SETTINGS action data.', required: [] })
  .openapi('ActionSettings')

const ActionCancelSchema = z
  .object({ target_id: z.string().openapi({ decription: 'The action to attempt to cancel.' }) })
  .openapi({ description: 'The CANCEL action data.', required: ['target_id'] })
  .openapi('ActionCancel')

const ActionRequestDiagnosticsSchema = z
  .object({
    additional_metrics: z
      .array(z.enum(['CPU', 'CONN']))
      .exactOptional()
      .openapi({
        description: 'list optional additional metrics.',
        'x-go-type-skip-optional-pointer': true,
      }),
    exclude_events_log: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Excludes the Events Log from the diagnostic collection.',
        'x-go-type-skip-optional-pointer': true,
      }),
  })
  .openapi({ description: 'The REQUEST_DIAGNOSTICS action data.', required: [] })
  .openapi('ActionRequestDiagnostics')

const ActionInputActionSchema = z
  .object({})
  .openapi({ description: 'The INPUT_ACTION action data.' })
  .openapi('ActionInputAction')

const ActionMigrateSchema = z
  .object({
    target_uri: z.string().openapi({ description: 'URI of Fleet Server in a target cluster.' }),
    enrollment_token: z
      .string()
      .openapi({ description: 'Enrollment token used to enroll agent to a new cluster.' }),
    settings: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An embedded JSON object that holds user-provided settings like TLS.\nDefined in fleet-server as a `json.RawMessage`.\n',
        'x-go-type': 'json.RawMessage',
        'x-go-type-skip-optional-pointer': true,
      }),
  })
  .openapi({
    description: 'The MIGRATE action data.',
    required: ['enrollment_token', 'target_uri'],
  })
  .openapi('ActionMigrate')

const UserInfoSchema = z
  .object({
    username: z
      .string()
      .exactOptional()
      .openapi({ description: 'Username of custom user used to run Elastic Agent.' }),
    password: z
      .string()
      .exactOptional()
      .openapi({ description: 'Password for user specified by username.' }),
    groupname: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom group used to access Elastic Agent files.' }),
  })
  .openapi({ description: 'Optional user info data.', required: [] })
  .openapi('UserInfo')

const ActionPrivilegeLevelChangeSchema = z
  .object({
    unprivileged: z
      .boolean()
      .openapi({
        description:
          'Flag indicating whether target level is unprivileged. If not provided unprivileged is assumed.',
      }),
    user_info: UserInfoSchema.exactOptional(),
  })
  .openapi({ description: 'The PRIVILEGE_LEVEL_CHANGE action.', required: ['unprivileged'] })
  .openapi('ActionPrivilegeLevelChange')

const ActionUninstallSchema = z
  .any()
  .openapi({ description: 'The UNINSTALL action data.' })
  .openapi('ActionUninstall')

const ActionRestartSchema = z
  .any()
  .openapi({ description: 'The RESTART action data.' })
  .openapi('ActionRestart')

type ActionType = {
  agent_id: string
  created_at: string
  start_time?: string
  expiration?: string
  data:
    | z.infer<typeof ActionPolicyReassignSchema>
    | z.infer<typeof ActionPolicyChangeSchema>
    | z.infer<typeof ActionUpgradeSchema>
    | z.infer<typeof ActionUnenrollSchema>
    | z.infer<typeof ActionSettingsSchema>
    | z.infer<typeof ActionCancelSchema>
    | z.infer<typeof ActionRequestDiagnosticsSchema>
    | z.infer<typeof ActionInputActionSchema>
    | z.infer<typeof ActionMigrateSchema>
    | z.infer<typeof ActionPrivilegeLevelChangeSchema>
    | z.infer<typeof ActionUninstallSchema>
    | z.infer<typeof ActionRestartSchema>
  id: string
  traceparent?: string
  type:
    | 'UPGRADE'
    | 'UNENROLL'
    | 'POLICY_CHANGE'
    | 'POLICY_REASSIGN'
    | 'SETTINGS'
    | 'INPUT_ACTION'
    | 'CANCEL'
    | 'REQUEST_DIAGNOSTICS'
    | 'MIGRATE'
    | 'PRIVILEGE_LEVEL_CHANGE'
    | 'UNINSTALL'
    | 'RESTART'
  input_type: string
  timeout?: bigint
  signed?: z.infer<typeof ActionSignatureSchema>
}

const ErrorSchema = z
  .object({
    statusCode: z.int().openapi({ description: 'The HTTP status code of the error.' }),
    error: z.string().openapi({ description: 'Error type.' }),
    message: z.string().exactOptional().openapi({ description: '(optional) Error message.' }),
  })
  .openapi({ description: 'Error processing request.', required: ['statusCode', 'error'] })
  .openapi('Error')

const StatusResponseVersionSchema = z
  .object({
    number: z.string().exactOptional().openapi({ description: 'The fleet-server version.' }),
    build_hash: z
      .string()
      .exactOptional()
      .openapi({ description: 'The commit that the fleet-server was built from.' }),
    build_time: z
      .string()
      .exactOptional()
      .openapi({ description: 'The date-time that the fleet-server binary was created.' }),
  })
  .openapi({
    description: 'Version information included in the response to an authorized status request.',
    required: [],
  })
  .openapi('StatusResponseVersion')

const StatusResponseSchema = z
  .object({
    name: z.string().openapi({ description: 'Service name.' }),
    status: z
      .enum([
        'STARTING',
        'CONFIGURING',
        'HEALTHY',
        'DEGRADED',
        'FAILED',
        'STOPPING',
        'STOPPED',
        'UNKNOWN',
      ])
      .openapi({
        description:
          'A Unit state that fleet-server may report.\nUnit state is defined in the elastic-agent-client specification.\n',
      }),
    version: StatusResponseVersionSchema.exactOptional(),
  })
  .openapi({
    'x-go-name': 'StatusAPIResponse',
    description: 'Status response information.',
    required: ['name', 'status'],
  })
  .openapi('StatusResponse')

const EnrollMetadataSchema = z
  .object({
    user_provided: z
      .string()
      .openapi({
        deprecated: true,
        'x-deprecated-reason': 'Not used by elastic-agent.',
        description:
          'An embedded JSON object that holds user-provided meta-data values.\nDefined in fleet-server as a `json.RawMessage`.\nfleet-server does not use these values on enrollment of an agent.\n\nDefined in the elastic-agent as a `map[string]interface{}` with no way to specify any values.\n',
        'x-go-type': 'json.RawMessage',
      }),
    local: z
      .string()
      .openapi({
        description:
          'An embedded JSON object that holds meta-data values.\nDefined in fleet-server as a `json.RawMessage`, defined as an object in the elastic-agent.\nelastic-agent will populate the object with information from the binary and host/system environment.\nIf not empty fleet-server will update the value of `local["elastic"]["agent"]["id"]` to the agent ID (assuming the keys exist).\nThe (possibly updated) value is sent by fleet-server when creating the record for a new agent.\n',
        'x-go-type': 'json.RawMessage',
      }),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'User provided tags for the agent.\nfleet-server will pass the tags to the agent record on enrollment.\n',
        'x-go-type-skip-optional-pointer': true,
      }),
  })
  .openapi({
    description: 'Metadata associated with the agent that is enrolling to fleet.',
    required: ['user_provided', 'local'],
  })
  .openapi('EnrollMetadata')

const EnrollRequestSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the agent.\nThis is the ID that will be used to reference this agent, if no ID is passed one will be generated.\nIf another agent is enrolled with the same ID the other agent will no longer be able to communicate,\nthis new agent is considered a replacement of the other agent. The other agent will be able to continue\nsending data to ES.\n',
      }),
    type: z
      .literal('PERMANENT')
      .openapi({
        description:
          'The enrollment type of the agent.\nThe agent only supports the PERMANENT value.\nIn the future the enrollment type may be used to indicate agents that use fleet for reporting and monitoring, but do not use policies.\n',
      }),
    replace_token: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The replacement token of the agent.\nProvided when an agent could replace an existing agent. This token must match the original enrollment of\nthat agent otherwise it will not be able to enroll.\n',
      }),
    enrollment_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The enrollment ID of the agent.\nTo replace an agent on enroll fail.\nThe existing agent with a matching enrollment_id will be deleted if it never checked in. The new agent will be enrolled with the enrollment_id.\n',
      }),
    shared_id: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        'x-deprecated-reason': 'Never implemented.',
        description:
          'The shared ID of the agent.\nTo support pre-existing installs.\n\nNever implemented.\n',
      }),
    metadata: EnrollMetadataSchema,
  })
  .openapi({
    description: 'A request to enroll a new agent into fleet.',
    required: ['type', 'metadata'],
  })
  .openapi('EnrollRequest')

const EnrollResponseItemSchema = z
  .object({
    id: z.string().openapi({ description: 'The agent ID' }),
    active: z
      .boolean()
      .openapi({
        deprecated: true,
        'x-deprecated-reason': 'Handling of other values is undefined.',
        description:
          'If the agent is active in fleet.\nSet to true upon enrollment.\n\nHandling of other values never implemented.\n',
      }),
    policy_id: z
      .string()
      .openapi({
        description:
          'The policy ID that the agent is enrolled with. Decoded from the API key used in the request.',
      }),
    type: z
      .string()
      .openapi({
        deprecated: true,
        'x-deprecated-reason': 'Handling of other values is undefined.',
        description:
          'The enrollment request type.\n\nHandling of other values never implemented.\n',
      }),
    enrolled_at: z
      .string()
      .openapi({ description: 'The RFC3339 timestamp that the agent was enrolled at.' }),
    user_provided_metadata: z
      .string()
      .openapi({
        deprecated: true,
        'x-deprecated-reason': 'Not used by elastic-agent.',
        description:
          'A copy of the user provided metadata from the enrollment request.\n\nCurrently will be empty.\n',
        'x-go-type': 'json.RawMessage',
        'x-go-type-skip-optional-pointer': true,
      }),
    local_metadata: z
      .string()
      .openapi({
        deprecated: true,
        'x-deprecated-reason': 'Not used by elastic-agent.',
        description:
          'A copy of the (updated) local metadata provided in the enrollment request.\n\nNever used by agent.\n',
        'x-go-type': 'json.RawMessage',
        'x-go-type-skip-optional-pointer': true,
      }),
    actions: z
      .array(z.object({}))
      .exactOptional()
      .openapi({
        deprecated: true,
        'x-go-type-skip-optional-pointer': true,
        'x-deprecated-reason': 'Not used by elastic-agent.',
        description:
          'Defined in fleet-server and elastic-agent as `[]interface{}`.\n\nNever used by agent.\n',
      }),
    access_api_key_id: z
      .string()
      .openapi({
        description:
          'The id of the ApiKey that fleet-server has generated for the enrolling agent.',
      }),
    access_api_key: z
      .string()
      .openapi({
        description: 'The ApiKey token that fleet-server has generated for the enrolling agent.',
      }),
    status: z
      .string()
      .openapi({
        deprecated: true,
        'x-deprecated-reason': 'Not used by elastic-agent.',
        description:
          'Agent status from fleet-server.\nfleet-ui may differ.\n\nNever used by agent.\n',
      }),
    tags: z
      .array(z.string())
      .openapi({ description: 'A copy of the tags that were sent with the enrollment request.' }),
  })
  .openapi({
    description: 'Response to a successful enrollment of an agent into fleet.',
    required: [
      'id',
      'active',
      'policy_id',
      'type',
      'enrolled_at',
      'user_provided_metadata',
      'local_metadata',
      'access_api_key_id',
      'access_api_key',
      'status',
      'tags',
    ],
  })
  .openapi('EnrollResponseItem')

const EnrollResponseSchema = z
  .object({
    action: z
      .string()
      .openapi({ description: 'The action result. Will have the value "created".' }),
    item: EnrollResponseItemSchema,
  })
  .openapi({ description: 'The enrollment action response.', required: ['action', 'item'] })
  .openapi('EnrollResponse')

const UpgradeMetadataScheduledSchema = z
  .object({
    scheduled_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The RFC3339 timestamp the upgrade is scheduled to start at.' }),
  })
  .openapi({
    description: 'Upgrade metadata for an upgrade that has been scheduled.',
    required: ['scheduled_at'],
  })
  .openapi('UpgradeMetadataScheduled')

const UpgradeMetadataDownloadingSchema = z
  .object({
    download_percent: z
      .float64()
      .openapi({ description: 'The artifact download progress as a percentage.' }),
    download_rate: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The artifact download rate as bytes per second.' }),
    retry_error_msg: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The error message that is a result of a retryable upgrade download failure.',
      }),
    retry_until: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The RFC3339 timestamp of the deadline the upgrade download is retried until.',
      }),
  })
  .openapi({
    description: 'Upgrade metadata for an upgrade that is downloading.',
    required: ['download_percent'],
  })
  .openapi('UpgradeMetadataDownloading')

const UpgradeMetadataFailedSchema = z
  .object({
    failed_state: z
      .enum([
        'UPG_REQUESTED',
        'UPG_SCHEDULED',
        'UPG_DOWNLOADING',
        'UPG_EXTRACTING',
        'UPG_REPLACING',
        'UPG_RESTARTING',
        'UPG_WATCHING',
      ])
      .openapi({ description: 'The state where the upgrade failed.' }),
    error_msg: z
      .string()
      .openapi({ description: 'The error message associated with a failed state.' }),
  })
  .openapi({
    description: 'Upgrade metadata for an upgrade that has failed.',
    required: ['failed_state', 'error_msg'],
  })
  .openapi('UpgradeMetadataFailed')

const UpgradeDetailsSchema = z
  .object({
    target_version: z.string().openapi({ description: 'The version the agent should upgrade to.' }),
    action_id: z
      .string()
      .openapi({ description: 'The upgrade action ID the details are associated with.' }),
    state: z
      .enum([
        'UPG_REQUESTED',
        'UPG_SCHEDULED',
        'UPG_DOWNLOADING',
        'UPG_EXTRACTING',
        'UPG_REPLACING',
        'UPG_RESTARTING',
        'UPG_WATCHING',
        'UPG_ROLLBACK',
        'UPG_FAILED',
      ])
      .openapi({ description: 'The upgrade state.' }),
    metadata: z
      .xor([
        UpgradeMetadataScheduledSchema,
        UpgradeMetadataDownloadingSchema,
        UpgradeMetadataFailedSchema,
      ])
      .exactOptional()
      .openapi({ description: 'Upgrade status metadata. Determined by state.' }),
  })
  .openapi({
    description:
      'Additional details describing the status of an UPGRADE action delivered by the client (agent) on checkin.\n',
    required: ['target_version', 'action_id', 'state'],
  })
  .openapi('UpgradeDetails')

const AvailableRollbacksSchema = z
  .array(
    z
      .object({
        version: z
          .string()
          .openapi({
            description: 'version of the available rollback target, represented as string',
          }),
        valid_until: z.iso
          .datetime({ offset: true })
          .openapi({ description: 'timestamp indicating when the rollback target will expire' }),
      })
      .openapi({ required: ['version', 'valid_until'] }),
  )
  .openapi({ description: 'Target versions available for a rollback\n' })
  .openapi('AvailableRollbacks')

const UpgradeInformationSchema = z
  .object({ rollbacks: AvailableRollbacksSchema.exactOptional() })
  .openapi({
    description: 'Container for upgrade information coming from agent\n',
    'x-go-type': 'json.RawMessage',
    'x-go-type-skip-optional-pointer': true,
    required: [],
  })
  .openapi('UpgradeInformation')

const CheckinRequestSchema = z
  .object({
    status: z
      .enum(['online', 'error', 'degraded', 'starting', 'disconnected'])
      .openapi({ description: 'The agent state, inferred from agent control protocol states.' }),
    message: z
      .string()
      .openapi({
        description:
          'State message, may be overridden or use the error message of a failing component.',
      }),
    ack_token: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ack_token form a previous response if the agent has checked in before.\nTranslated to a sequence number in fleet-server in order to retrieve any new actions for the agent from the last checkin.\n',
      }),
    local_metadata: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An embedded JSON object that holds meta-data values.\nDefined in fleet-server as a `json.RawMessage`, defined as an object in the elastic-agent.\nelastic-agent will populate the object with information from the binary and host/system environment.\nfleet-server will update the agent record if a checkin response contains different data from the record.\n',
        'x-go-type': 'json.RawMessage',
        'x-go-type-skip-optional-pointer': true,
      }),
    components: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An embedded JSON object that holds component information that the agent is running.\nDefined in fleet-server as a `json.RawMessage`, defined as an object in the elastic-agent.\nfleet-server will update the components in an agent record if they differ from this object.\n',
        'x-go-type': 'json.RawMessage',
        'x-go-type-skip-optional-pointer': true,
      }),
    poll_timeout: z.iso
      .duration()
      .exactOptional()
      .openapi({
        description:
          "An optional timeout value that informs fleet-server of when a client will time out on it's checkin request.\nIf not specified fleet-server will use the timeout values specified in the config (defaults to 5m polling and a 10m write timeout).\nThe value, if specified is expected to be a string that is parsable by [time.ParseDuration](https://pkg.go.dev/time#ParseDuration).\nIf specified fleet-server will set its poll timeout to `max(1m, poll_timeout-2m)` and its write timeout to `max(2m, poll_timout-1m)`.\n",
      }),
    upgrade_details: UpgradeDetailsSchema.exactOptional(),
    agent_policy_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the policy that the agent is currently running.\n' }),
    policy_revision_idx: z
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
        description: 'The revision of the policy that the agent is currently running.\n',
      }),
    upgrade: UpgradeInformationSchema.exactOptional(),
  })
  .openapi({ required: ['status', 'message'] })
  .openapi('CheckinRequest')

const ActionSchema: z.ZodType<ActionType> = z
  .lazy(() =>
    z
      .object({
        agent_id: z.string().openapi({ description: 'The agent ID.' }),
        created_at: z.string().openapi({ description: 'Time when the action was created.' }),
        start_time: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The earliest execution time for the action. Agent will not execute the action before this time. Used for scheduled actions.',
            'x-go-custom-tag': 'yaml:"start_time"',
            'x-oapi-codegen-extra-tags': { yaml: 'start_time' },
          }),
        expiration: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The latest start time for the action. Actions will be dropped by the agent if execution has not started by this time. Used for scheduled actions.',
            'x-go-custom-tag': 'yaml:"expiration"',
            'x-oapi-codegen-extra-tags': { yaml: 'expiration' },
          }),
        data: z
          .xor([
            ActionPolicyReassignSchema,
            ActionPolicyChangeSchema,
            ActionUpgradeSchema,
            ActionUnenrollSchema,
            ActionSettingsSchema,
            ActionCancelSchema,
            ActionRequestDiagnosticsSchema,
            ActionInputActionSchema,
            ActionMigrateSchema,
            ActionPrivilegeLevelChangeSchema,
            ActionUninstallSchema,
            ActionRestartSchema,
          ])
          .openapi({
            description: 'An embedded action-specific object.',
            'x-go-custom-tag': 'yaml:"data"',
            'x-go-type-skip-optional-pointer': true,
            'x-oapi-codegen-extra-tags': { yaml: 'data' },
          }),
        id: z
          .string()
          .openapi({
            description: 'The action ID.',
            'x-go-custom-tag': 'yaml:"action_id"',
            'x-oapi-codegen-extra-tags': { yaml: 'action_id' },
          }),
        traceparent: z
          .string()
          .exactOptional()
          .openapi({
            description: 'APM traceparent for the action.',
            'x-go-custom-tag': 'yaml:"traceparent"',
            'x-oapi-codegen-extra-tags': { yaml: 'traceparent' },
          }),
        type: z
          .enum([
            'UPGRADE',
            'UNENROLL',
            'POLICY_CHANGE',
            'POLICY_REASSIGN',
            'SETTINGS',
            'INPUT_ACTION',
            'CANCEL',
            'REQUEST_DIAGNOSTICS',
            'MIGRATE',
            'PRIVILEGE_LEVEL_CHANGE',
            'UNINSTALL',
            'RESTART',
          ])
          .openapi({
            description:
              'The action type. If fleet-server encounters an action that does not have a type listed below it will be filtered out and an error will be logged.',
            'x-go-custom-tag': 'yaml:"type"',
            'x-oapi-codegen-extra-tags': { yaml: 'type' },
          }),
        input_type: z
          .string()
          .openapi({
            description: 'The input type of the action for actions with type `INPUT_ACTION`.',
            'x-go-custom-tag': 'yaml:"input_type"',
            'x-oapi-codegen-extra-tags': { yaml: 'input_type' },
          }),
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
          .openapi({
            type: 'integer',
            format: 'int64',
            description: 'The timeout value (in seconds) for actions with type `INPUT_ACTION`.',
            'x-go-custom-tag': 'yaml:"timeout"',
            'x-oapi-codegen-extra-tags': { yaml: 'timeout' },
          }),
        signed: ActionSignatureSchema.exactOptional(),
      })
      .openapi({
        description:
          "An action for an elastic-agent.\nThe structure of the `data` attribute will vary between action types.\nmodel/schema.json has a looser definition of actions and it define's fleet-server's interactions with Elasticsearch when retrieving actions.\n",
        required: ['agent_id', 'created_at', 'data', 'id', 'type', 'input_type'],
      }),
  )
  .openapi('Action')

const CheckinResponseSchema = z
  .object({
    ack_token: z
      .string()
      .exactOptional()
      .openapi({ description: 'The acknowlegment token used to indicate action delivery.' }),
    action: z.string().openapi({ description: 'The action result. Set to "checkin".' }),
    actions: z
      .array(ActionSchema)
      .exactOptional()
      .openapi({
        description: 'A list of actions that the agent must execute.',
        'x-go-type-skip-optional-pointer': true,
      }),
  })
  .openapi({ required: ['action'] })
  .openapi('CheckinResponse')

const EventTypeSchema = z
  .enum(['STATE', 'ERROR', 'ACTION_RESULT', 'ACTION'])
  .openapi({
    deprecated: true,
    'x-deprecated-reason': 'Not used by fleet-server.',
    description:
      'The event type of the ack.\nCurrently the elastic-agent will only generate ACTION_RESULT events.\n\nNot used by fleet-server.\nActions that have errored should use the error attribute to communicate an error status.\nAdditional action status information can be provided in the data attribute.\n',
  })
  .openapi('EventType')

const EventSubtypeSchema = z
  .enum([
    'RUNNING',
    'STARTING',
    'IN_PROGRESS',
    'CONFIG',
    'FAILED',
    'STOPPING',
    'STOPPED',
    'DATA_DUMP',
    'ACKNOWLEDGED',
    'UNKNOWN',
  ])
  .openapi({
    deprecated: true,
    'x-deprecated-reason': 'Not used by fleet-server.',
    description:
      'The subtype of the ack event.\nThe elastic-agent will only generate ACKNOWLEDGED events.\n\nNot used by fleet-server.\nActions that have errored should use the error attribute to communicate an error status.\nAdditional action status information can be provided in the data attribute.\n',
  })
  .openapi('EventSubtype')

const GenericEventSchema = z
  .object({
    type: EventTypeSchema,
    subtype: EventSubtypeSchema,
    agent_id: z.string().openapi({ description: 'The ID of the agent that executed the action.' }),
    action_id: z.string().openapi({ description: 'The action ID.' }),
    message: z
      .string()
      .openapi({
        description:
          'An acknowlegement message. The elastic-agent inserts the action ID and action type into this message.',
      }),
    timestamp: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The timestamp of the acknowledgement event. Has the format of "2006-01-02T15:04:05.99999-07:00"',
      }),
    error: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An error message.\nIf this is non-empty an error has occured when executing the action.\nFor some actions (such as UPGRADE actions) it may result in the action being marked as failed.\n',
      }),
  })
  .openapi({
    description: 'A generic ack event for an action. Includes an optional error attribute.',
    required: ['type', 'subtype', 'agent_id', 'action_id', 'message', 'timestamp'],
  })
  .openapi('GenericEvent')

const UpgradeEventSchema = GenericEventSchema.and(
  z
    .object({
      payload: z
        .object({
          retry: z
            .boolean()
            .openapi({ description: 'If the agent will retry the upgrade or not.' }),
          retry_attempt: z
            .int()
            .openapi({
              description:
                'The number of attempts the agent has made so far, -1 indicates no future attempts and that the upgrade has failed.',
            }),
        })
        .exactOptional()
        .openapi({
          deprecated: true,
          'x-deprecated-reason':
            "Replaced in newer elastic-agent releases by the checkin request's upgrade_details attribute.",
          description:
            "If the payload is part of an upgrade event action ack it will include information about if the agent  will retry the upgrade.\nPayload is only used by upgrade acks and has been replaced in more recent versions by the checkin's upgrade_details attribute.\n",
          required: ['retry', 'retry_attempt'],
        }),
    })
    .openapi({
      deprecated: true,
      'x-deprecated-reason':
        "Replaced in newer elastic-agent releases by the checkin request's upgrade_details attribute.",
      required: [],
    }),
)
  .openapi({ description: 'The ack event for an upgrade action' })
  .openapi('UpgradeEvent')

const DiagnosticsEventSchema = GenericEventSchema.and(
  z
    .object({
      data: z
        .object({
          upload_id: z
            .string()
            .openapi({ description: 'The upload ID for the diagnostics bundle.' }),
        })
        .exactOptional()
        .openapi({ required: ['upload_id'] }),
    })
    .openapi({ required: [] }),
)
  .openapi({ description: 'The ack event for a request diagnostics action.' })
  .openapi('DiagnosticsEvent')

const InputEventSchema = GenericEventSchema.and(
  z
    .object({
      action_input_type: z
        .string()
        .openapi({ description: 'The input_type of the action for input actions.' }),
      action_data: z
        .string()
        .openapi({
          description: 'The action data for the input action being acknowledged.',
          'x-go-type': 'json.RawMessage',
        }),
      action_response: z
        .string()
        .openapi({
          description: 'The action response for the input action being acknowledged.',
          'x-go-type': 'json.RawMessage',
        }),
      started_at: z.iso
        .datetime({ offset: true })
        .openapi({ description: 'The time at which the action was started.' }),
      completed_at: z.iso
        .datetime({ offset: true })
        .openapi({ description: 'The time at which the action was completed.' }),
    })
    .openapi({
      required: [
        'action_input_type',
        'action_data',
        'action_response',
        'started_at',
        'completed_at',
      ],
    }),
)
  .openapi({ description: 'The ack event for an input action.' })
  .openapi('InputEvent')

const AckRequestSchema = z
  .object({
    events: z.array(
      z.union([GenericEventSchema, UpgradeEventSchema, DiagnosticsEventSchema, InputEventSchema]),
    ),
  })
  .openapi({
    description:
      'The request an elastic-agent sends to fleet-serve to acknowledge the execution of one or more actions.',
    required: ['events'],
  })
  .openapi('AckRequest')

const AckResponseItemSchema = z
  .object({
    status: z
      .int()
      .openapi({
        description:
          'An HTTP status code that indicates if the event was processed successfully or not.',
      }),
    message: z.string().exactOptional().openapi({ description: 'HTTP status text.' }),
  })
  .openapi({
    description: 'The results of processing an acknowledgement event.',
    required: ['status'],
  })
  .openapi('AckResponseItem')

const AckResponseSchema = z
  .object({
    action: z.string().openapi({ description: 'The action result. Will have the value "acks".' }),
    errors: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A flag to indicate if one or more errors occured when proccessing events.',
        'x-oapi-codegen-extra-tags': { json: 'errors,omitempty' },
        'x-go-type-skip-optional-pointer': true,
      }),
    items: z
      .array(AckResponseItemSchema)
      .exactOptional()
      .openapi({
        description: 'The in-order list of results from processing events.',
        'x-oapi-codegen-extra-tags': { json: 'items,omitempty' },
        'x-go-type-skip-optional-pointer': true,
      }),
  })
  .openapi({ description: 'Response to processing acknowledgement events.', required: ['action'] })
  .openapi('AckResponse')

const UploadBeginRequestSchema = z
  .looseObject({
    file: z
      .looseObject({
        Compression: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The algorithm used to compress the file. Valid values: br,gzip,deflate,none',
            examples: ['deflate'],
          }),
        hash: z
          .object({
            sha256: z
              .string()
              .exactOptional()
              .openapi({
                description: 'SHA256 of the contents',
                examples: ['04f81394bababa0fb31e6ad2d703c875eb46dc254527e39ff316564c0dc339e2'],
              }),
          })
          .exactOptional()
          .openapi({ title: 'Hash', description: 'Checksums on the file contents', required: [] }),
        name: z
          .string()
          .openapi({
            description: 'Name of the file including the extension, without the directory',
            examples: ['yankees-stats.zip'],
          }),
        mime_type: z
          .string()
          .openapi({ description: 'MIME type of the file', examples: ['application/zip'] }),
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
          .openapi({
            type: 'integer',
            format: 'int64',
            description: 'Size of the file contents, in bytes',
            examples: [8276748],
          }),
      })
      .openapi({ required: ['name', 'size', 'mime_type'] }),
    action_id: z
      .string()
      .openapi({
        description: 'ID of the action that requested this file',
        examples: ['2f440d31-2ea4-42f8-b0f2-4b6e98e8dc5e'],
      }),
    agent_id: z
      .string()
      .openapi({
        description: 'Identifier of the agent uploading. Matches the ID usually found in agent.id',
        examples: ['9347e918-5e00-48b0-b302-a09f9258a46d'],
      }),
    src: z
      .enum(['endpoint', 'agent'])
      .openapi({ description: 'The source integration sending this file' }),
  })
  .openapi({
    title: 'Upload Operation Start request body',
    required: ['file', 'action_id', 'agent_id', 'src'],
  })
  .openapi('UploadBeginRequest')

const UploadBeginResponseSchema = z
  .object({
    upload_id: z
      .string()
      .openapi({
        description: 'A unique identifier for the ensuing upload operation',
        examples: ['fbc8e23c-055d-461e-87f7-b0d1b57f14b4'],
      }),
    chunk_size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The required size (in bytes) that the file must be segmented into for each chunk',
        examples: [4194304],
      }),
  })
  .openapi({
    'x-go-name': 'UploadBeginAPIResponse',
    description: 'Response to initiating a file upload',
    required: ['upload_id', 'chunk_size'],
  })
  .openapi('UploadBeginResponse')

const UploadCompleteRequestSchema = z
  .object({
    transithash: z
      .object({
        sha256: z
          .string()
          .openapi({
            description: 'SHA256 hash',
            examples: ['83810fdc61c44290778c212d7829d0c3f0232e81bd551d3943998a920025d14f'],
          }),
      })
      .openapi({
        description:
          'the transithash (sha256 of the concatenation of each in-order chunk hash) of the entire file contents',
        required: ['sha256'],
      }),
  })
  .openapi({
    description: 'Request to verify and finish an uploaded file',
    required: ['transithash'],
  })
  .openapi('UploadCompleteRequest')

const AuditUnenrollRequestSchema = z
  .object({
    reason: z
      .enum(['uninstall', 'orphaned', 'key_revoked', 'migrated'])
      .openapi({ description: 'The unenroll reason', examples: ['uninstall'] }),
    timestamp: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'Agent timestamp of when the uninstall/unenroll action occured; may differ from fleet-server time due to retries.',
      }),
  })
  .openapi({
    description: 'Request to add unenroll audit information to an agent document.',
    required: ['reason', 'timestamp'],
  })
  .openapi('AuditUnenrollRequest')

const ApiVersionHeaderSchema = z
  .string()
  .exactOptional()
  .openapi({
    description: 'The API version the server is using to respond.',
    examples: { '2023-06-01': { value: '2023-06-01' } },
    param: { required: false },
  })

const RequestIDHeaderSchema = z
  .string()
  .exactOptional()
  .openapi({
    description: 'The X-Request-Id header used for tracing requests.',
    param: { required: false },
  })

const BadRequestResponse = {
  description:
    'A 400 response for receiving an invalid User-Agent, Elastic-Api-Version header or version number (checkin and enroll endpoints).\nIn the case where an invalid or unsupported Elastic-Api-Version header is requested, the response will contain the default version number.\nOr any other undefined error encounted by the fleet-server. May be returned by any endpoint except /api/fleet/status.\n',
  content: {
    'application/json': {
      schema: ErrorSchema,
      examples: {
        badRequest: {
          description: 'Generic bad request response.',
          value: { statusCode: 400, error: 'BadRequest' },
        },
      },
    },
  },
  headers: z.object({
    'Elastic-Api-Version': ApiVersionHeaderSchema,
    'X-Request-Id': RequestIDHeaderSchema,
  }),
}

const InternalServerErrorResponse = {
  description: 'A 500 response for encountering not expected bahavior.\n',
  content: {
    'application/json': {
      schema: ErrorSchema,
      examples: {
        internalServerError: {
          description: 'Generic internal server error response.',
          value: { statusCode: 500, error: 'InternalServerError' },
        },
      },
    },
  },
  headers: z.object({
    'Elastic-Api-Version': ApiVersionHeaderSchema,
    'X-Request-Id': RequestIDHeaderSchema,
  }),
}

const KeyNotEnabledResponse = {
  description:
    '401 response when the API key is not enabled on any endpoint except /api/fleet/status. Or when there are issues updating an inactive agent on the ack endpoint.',
  content: {
    'application/json': {
      schema: ErrorSchema,
      examples: {
        unauthorized: {
          description: 'The ApiKey is not enabled',
          value: { statusCode: 401, error: 'Unauthorized', message: 'ApiKey not enabled' },
        },
      },
    },
  },
  headers: z.object({
    'Elastic-Api-Version': ApiVersionHeaderSchema,
    'X-Request-Id': RequestIDHeaderSchema,
  }),
}

const ForbiddenResponse = {
  description: '403 response when the API key is valid but does not match the agent',
  content: {
    'application/json': {
      schema: ErrorSchema,
      examples: {
        unauthorized: {
          description: 'The ApiKey is not enabled',
          value: {
            statusCode: 403,
            error: 'ErrAgentIdentity',
            message: 'Agent header contains wrong identifier',
          },
        },
      },
    },
  },
  headers: z.object({
    'Elastic-Api-Version': ApiVersionHeaderSchema,
    'X-Request-Id': RequestIDHeaderSchema,
  }),
}

const AgentNotFoundResponse = {
  description:
    '404 response when the agent is not found. May be returned by checkin endpoint. or endpoints that use the agentApiKey auth scheme',
  content: {
    'application/json': {
      schema: ErrorSchema,
      examples: {
        agentNotFound: {
          description: 'The agent is not found.',
          value: { statusCode: 404, error: 'AgentNotFound', message: 'agent could not be found' },
        },
      },
    },
  },
  headers: z.object({
    'Elastic-Api-Version': ApiVersionHeaderSchema,
    'X-Request-Id': RequestIDHeaderSchema,
  }),
}

const DeadlineResponse = {
  description: '408 request timeout.',
  content: {
    'application/json': {
      schema: ErrorSchema,
      examples: {
        requestTimeout: {
          description: 'Deadline exceeded.',
          value: { statusCode: 408, error: 'RequestTimeout', message: 'timeout on request' },
        },
      },
    },
  },
  headers: z.object({
    'Elastic-Api-Version': ApiVersionHeaderSchema,
    'X-Request-Id': RequestIDHeaderSchema,
  }),
}

const ConflictResponse = {
  description: '409 conflict response.',
  content: {
    'application/json': {
      schema: ErrorSchema,
      examples: {
        reasonConflict: {
          description: 'Audit unenroll endpoint agent already has reason attribute.',
          value: {
            statusCode: 409,
            error: 'ErrAuditReasonConflict',
            message: 'agent document contains audit_unenroll_reason',
          },
        },
      },
    },
  },
  headers: z.object({
    'Elastic-Api-Version': ApiVersionHeaderSchema,
    'X-Request-Id': RequestIDHeaderSchema,
  }),
}

const ThrottleResponse = {
  description: '429 rate limiting request.',
  content: {
    'application/json': {
      schema: ErrorSchema,
      examples: {
        rateLimit: {
          description: 'Too many requests - rate limit reached.',
          value: { statusCode: 429, error: 'TooManyRequests', message: 'too many requests' },
        },
      },
    },
  },
  headers: z.object({ 'X-Request-Id': RequestIDHeaderSchema }),
}

const PayloadTooLargeResponse = {
  description: '413 response when the request body exceeds the maximum allowed size.',
  content: {
    'application/json': {
      schema: ErrorSchema,
      examples: {
        payloadTooLarge: {
          description: 'Request body exceeds maximum allowed size.',
          value: {
            statusCode: 413,
            error: 'ErrPayloadSizeTooLarge',
            message: 'the request body exceeds the maximum allowed size',
          },
        },
      },
    },
  },
  headers: z.object({
    'Elastic-Api-Version': ApiVersionHeaderSchema,
    'X-Request-Id': RequestIDHeaderSchema,
  }),
}

const UnavailableResponse = {
  description:
    '503 response when the server is not available for some reason.\nSuch as if a context is cancelled or the connection (to ES) is refused.\nMay be returned by any endpoint.\n',
  content: {
    'application/json': {
      schema: ErrorSchema,
      examples: {
        unavailable: {
          description: 'Service unavailable',
          value: {
            statusCode: 503,
            error: 'ServiceUnavailable',
            message: 'Fleet server unable to communicate with Elasticsearch',
          },
        },
      },
    },
  },
  headers: z.object({
    'Elastic-Api-Version': ApiVersionHeaderSchema,
    'X-Request-Id': RequestIDHeaderSchema,
  }),
}

const RequestIdParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Request-Id',
      description: 'The request tracking ID for APM.',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const ApiVersionParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'elastic-api-version',
      description: 'The API version to use, format should be "YYYY-MM-DD"',
      in: 'header',
      schema: { type: 'string' },
      examples: { '2023-06-01': { value: '2023-06-01' } },
      required: false,
    },
  })

const UserAgentParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'User-Agent',
      description:
        'The user-agent header that is sent.\nMust have the format "elastic agent X.Y.Z" where "X.Y.Z" indicates the agent version.\nThe agent version must not be greater than the version of the fleet-server.\n',
      in: 'header',
      required: true,
      schema: { type: 'string' },
      examples: {
        valid: {
          description: 'A valid User-Agent header from the elastic-agent.',
          value: 'elastic agent 8.6.0',
        },
        validWithSuffix: {
          description: 'A version number may include an optional suffix',
          value: 'elastic agent 8.6.0-SNAPSHOT',
        },
        invalidName: {
          description: 'The elastic-agent name is not formatted correctly.',
          value: 'elastic-agent 8.6.0',
        },
        outdatedVersion: {
          description: 'The version string given is too old.',
          value: 'elastic agent 7.0.0',
        },
      },
    },
  })

const ApiKeySecurityScheme = {
  description:
    'API key security will check that the API key exists and is enabled, but will not check additional permissions',
  type: 'apiKey',
  in: 'header',
  name: 'ApiKey',
}

const AgentApiKeySecurityScheme = {
  description:
    'Agent API key security will check that the API key exists, is enabled, and is assigned to the agent',
  type: 'apiKey',
  in: 'header',
  name: 'ApiKey',
}

export const getApiStatusRoute = createRoute({
  method: 'get',
  path: '/api/status',
  description:
    'Return the fleet-server status.\nThe status code will either be 200 if healthy, or 503 if not.\nService is considered healthy if it has access to Elasticsearch, but the policies index\ndoes not exist. This is equivalent to a deployment without any policy.\nAuthentication for this endpoint is optional, if not provided a shorter response body is returned.\n',
  operationId: 'status',
  request: {
    headers: z.object({
      'X-Request-Id': RequestIdParamsSchema,
      'elastic-api-version': ApiVersionParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Healthy fleet-server response.',
      content: {
        'application/json': {
          schema: StatusResponseSchema,
          examples: {
            unauthenticated: {
              description: 'The short response for unauthenticated requests.',
              value: { name: 'fleet-server', status: 'healthy' },
            },
            authenticated: {
              description: 'The full response for an authenticated request.',
              value: {
                name: 'fleet-server',
                status: 'healthy',
                version: {
                  number: '8.6.0',
                  build_hash: 'fd6d862bcbebe841f930e8cdd2fa5107922e66e7',
                  build_time: '2022-12-01T01:02:03Z',
                },
              },
            },
          },
        },
      },
      headers: z.object({
        'Elastic-Api-Version': ApiVersionHeaderSchema,
        'X-Request-Id': RequestIDHeaderSchema,
      }),
    },
    400: BadRequestResponse,
    429: ThrottleResponse,
    503: {
      description: 'Unhealthy fleet-server response.',
      content: {
        'application/json': {
          schema: StatusResponseSchema,
          examples: {
            unauthenticated: {
              description: 'The short response for unauthenticated requests.',
              value: { name: 'fleet-server', status: 'failed' },
            },
            authenticated: {
              description: 'The full response for an authenticated request.',
              value: {
                name: 'fleet-server',
                status: 'failed',
                version: {
                  number: '8.6.0',
                  build_hash: 'fd6d862bcbebe841f930e8cdd2fa5107922e66e7',
                  build_time: '2022-12-01T01:02:03Z',
                },
              },
            },
          },
        },
      },
      headers: z.object({
        'Elastic-Api-Version': ApiVersionHeaderSchema,
        'X-Request-Id': RequestIDHeaderSchema,
      }),
    },
  },
  security: [{}, { apiKey: [] }],
})

export const postApiFleetAgentsEnrollRoute = createRoute({
  method: 'post',
  path: '/api/fleet/agents/enroll',
  description:
    'Enroll a new agent to fleet-server. The agent is enrolled in the policy encoded in the apiKey used.',
  operationId: 'agentEnroll',
  request: {
    headers: z.object({
      'User-Agent': UserAgentParamsSchema,
      'X-Request-Id': RequestIdParamsSchema,
      'elastic-api-version': ApiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: EnrollRequestSchema,
          examples: {
            request: {
              description: 'A request to enroll a new agent.',
              value: {
                type: 'PERMANENT',
                metadata: {
                  local: {
                    elastic: { agent: { id: '', version: '8.6.0', snapshot: false } },
                    host: { hostname: 'test' },
                  },
                  tags: ['us-west', 'test'],
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
      description: 'Agent enrolled successfully.',
      content: {
        'application/json': {
          schema: EnrollResponseSchema,
          examples: {
            success: {
              description: 'Agent enrolled successfully.',
              value: {
                action: 'created',
                item: {
                  id: 'agent-test-id',
                  active: true,
                  policy_id: 'agent-policy-id',
                  type: 'PERMANENT',
                  enrolled_at: '2022-12-01T01:02:03Z',
                  user_provided_metadata: {},
                  local_metadata: {
                    elastic: { agent: { id: 'agent-test-id', version: '8.6.0', snapshot: false } },
                    host: { hostname: 'test' },
                  },
                  access_api_key_id: 'api-key-id',
                  access_api_key: 'api-key-token',
                  status: 'online',
                  tags: ['us-west', 'test'],
                },
              },
            },
          },
        },
      },
      headers: z.object({
        'Elastic-Api-Version': ApiVersionHeaderSchema,
        'X-Request-Id': RequestIDHeaderSchema,
      }),
    },
    400: BadRequestResponse,
    401: KeyNotEnabledResponse,
    403: ForbiddenResponse,
    408: DeadlineResponse,
    413: PayloadTooLargeResponse,
    429: ThrottleResponse,
    500: InternalServerErrorResponse,
    503: UnavailableResponse,
  },
  security: [{ apiKey: [] }],
})

export const postApiFleetAgentsIdCheckinRoute = createRoute({
  method: 'post',
  path: '/api/fleet/agents/{id}/checkin',
  description:
    "The agent checkin endpoint.\nClients will long-poll this endpoint.\nA client may inform fleet-server of it's long-poll timeout in the request body.\nThe fleet-server will return a response if there is a new action for the agent, or if the polling timeout is reached.\nThe fleet-server may also use some jitter to offset the polling timeout, if specified a random amount of the jitter value may be subtracted from the polling timeout.\nThe fleet-sever polling timeout is short-circuited in cases of heavy load where setting up the checkin (ensuring the API key is authed etc) takes longer then the timeout value.\nFleet-server sets the poll timeout to 5m by default (with a 10m write timeout), for these values we assume that elastic-agent's request timeout is set to 10m and the cloud-proxy's timeout is longer than 10m.\n",
  operationId: 'agentCheckin',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The agent ID.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'Accept-Encoding': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Accept-Encoding',
            in: 'header',
            description:
              'Indicates encodings the agent can accept. The only encoding supported by the server currently is gzip.\nComma-separated directive lists and RFC 7231 quality values (e.g. "gzip;q=1.0, deflate;q=0.5") are both accepted.\n',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'Content-Encoding': z
        .literal('gzip')
        .exactOptional()
        .openapi({
          param: {
            name: 'Content-Encoding',
            in: 'header',
            description:
              'Signals that the request body has been compressed. Server currently only supports gzip compression.\n',
            schema: { type: 'string', enum: ['gzip'] },
            required: false,
          },
        }),
      'User-Agent': UserAgentParamsSchema,
      'X-Request-Id': RequestIdParamsSchema,
      'elastic-api-version': ApiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: CheckinRequestSchema,
          examples: {
            request: {
              description: 'A checkin request from an elastic-agent.',
              value: { status: 'online', message: '', ack_token: 'previous-token' },
            },
            withCheckinDetails: {
              description:
                'A checking request from an elastic-agent that is downloading a new version.',
              value: {
                status: 'online',
                message: '',
                ack_token: 'previous-token',
                upgrade_details: {
                  action_id: 'upgrade-action-id',
                  target_version: 'X.Y.Z',
                  state: 'UPG_DOWNLOADING',
                  metadata: { download_percent: 12.3, download_rate: 1024 },
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
      description: 'Agent checkin successful. May include actions.',
      content: {
        'application/json': {
          schema: CheckinResponseSchema,
          examples: {
            response: {
              description: 'Agent successfully checked in.',
              value: {
                action: 'checkin',
                ack_token: 'new-token',
                actions: [
                  {
                    agent_id: 'test-agent',
                    created_at: '2022-12-01T01:02:03Z',
                    data: { log_level: 'debug' },
                    id: 'test-action',
                    type: 'SETTINGS',
                  },
                ],
              },
            },
          },
        },
      },
      headers: z.object({
        'Content-Encoding': {
          description:
            "Present when fleet-server has gzip-compressed the response body.\nCompression is applied when all three conditions are met: the serialised\nresponse exceeds the configured compression threshold, the server compression\nlevel is not NoCompression, and the request's Accept-Encoding header\nadvertises gzip support.\n",
          examples: { gzip: { description: 'Response body is gzip-compressed.', value: 'gzip' } },
          schema: z
            .literal('gzip')
            .exactOptional()
            .openapi({
              description:
                "Present when fleet-server has gzip-compressed the response body.\nCompression is applied when all three conditions are met: the serialised\nresponse exceeds the configured compression threshold, the server compression\nlevel is not NoCompression, and the request's Accept-Encoding header\nadvertises gzip support.\n",
              examples: {
                gzip: { description: 'Response body is gzip-compressed.', value: 'gzip' },
              },
              param: { required: false },
            }),
        },
        'Elastic-Api-Version': ApiVersionHeaderSchema,
        'X-Request-Id': RequestIDHeaderSchema,
      }),
    },
    400: BadRequestResponse,
    401: KeyNotEnabledResponse,
    403: ForbiddenResponse,
    404: AgentNotFoundResponse,
    408: DeadlineResponse,
    413: PayloadTooLargeResponse,
    429: ThrottleResponse,
    500: InternalServerErrorResponse,
    503: UnavailableResponse,
  },
  security: [{ agentApiKey: [] }],
})

export const postApiFleetAgentsIdAcksRoute = createRoute({
  method: 'post',
  path: '/api/fleet/agents/{id}/acks',
  description:
    'The endpoint that an agent uses to acknowledge (and inform fleet-server) of events that it has recieved/executed.\nA single action may have multiple different events associated with it.\nAlso an action may not have any acks associated with it.\n\nNote that using this endpoint for an `UPGRADE` action is deprecated behaviour.\n`UPGRADE` status should use the `upgrade_details` attribute of the checkin request body.\n',
  operationId: 'agentAcks',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The agent ID.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'X-Request-Id': RequestIdParamsSchema,
      'elastic-api-version': ApiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: AckRequestSchema,
          examples: {
            single: {
              description: 'Send an ack for a single event.',
              value: {
                events: [
                  {
                    type: 'ACTION_RESULT',
                    subtype: 'ACKNOWLEDGED',
                    agent_id: 'test-agent',
                    action_id: 'test-action',
                    timestamp: '2022-12-01T01:02:03.00004-07:00',
                    message: "Action 'test-action' of type 'TEST' acknowledged.",
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Agent ack successfully received.',
      content: {
        'application/json': {
          schema: AckResponseSchema,
          examples: {
            single: {
              description: 'Successfull ack for a single action.',
              value: { action: 'acks', errors: false, items: [{ status: 200, message: 'ok' }] },
            },
          },
        },
      },
      headers: z.object({
        'Elastic-Api-Version': ApiVersionHeaderSchema,
        'X-Request-Id': RequestIDHeaderSchema,
      }),
    },
    400: BadRequestResponse,
    401: KeyNotEnabledResponse,
    403: ForbiddenResponse,
    404: AgentNotFoundResponse,
    408: DeadlineResponse,
    413: PayloadTooLargeResponse,
    429: ThrottleResponse,
    500: InternalServerErrorResponse,
    503: UnavailableResponse,
  },
  security: [{ agentApiKey: [] }],
})

export const getApiFleetArtifactsIdSha2Route = createRoute({
  method: 'get',
  path: '/api/fleet/artifacts/{id}/{sha2}',
  description: 'The route to retrieve an artifact from Elasticsearch.',
  operationId: 'artifact',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The artifact record ID.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      sha2: z
        .string()
        .openapi({
          param: {
            name: 'sha2',
            in: 'path',
            description: 'The decoded Sha256 associated with the artifact record.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'X-Request-Id': RequestIdParamsSchema,
      'elastic-api-version': ApiVersionParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The artifact retrieved from ES.',
      content: { '*/*': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
      headers: z.object({
        'Elastic-Api-Version': ApiVersionHeaderSchema,
        'X-Request-Id': RequestIDHeaderSchema,
      }),
    },
    400: BadRequestResponse,
    401: KeyNotEnabledResponse,
    403: ForbiddenResponse,
    404: AgentNotFoundResponse,
    408: DeadlineResponse,
    429: ThrottleResponse,
    500: InternalServerErrorResponse,
    503: UnavailableResponse,
  },
  security: [{ agentApiKey: [] }],
})

export const postApiFleetUploadsRoute = createRoute({
  method: 'post',
  path: '/api/fleet/uploads',
  summary: 'Initiate a file upload process',
  operationId: 'uploadBegin',
  request: {
    headers: z.object({
      'X-Request-Id': RequestIdParamsSchema,
      'elastic-api-version': ApiVersionParamsSchema,
    }),
    body: {
      description:
        'Information about the file to be uploaded. Minimum required fields are marked as required. Additional fields may be specified and are allowed. For information about the file itself, ECS.file paths are recommended. For archived files, information about the archive should be placed in `file`. Information about the archive members may be placed in a `contents` array.',
      content: { 'application/json': { schema: UploadBeginRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Information about the upload procedure',
      content: { 'application/json': { schema: UploadBeginResponseSchema } },
      headers: z.object({
        'Elastic-Api-Version': ApiVersionHeaderSchema,
        'X-Request-Id': RequestIDHeaderSchema,
      }),
    },
    400: BadRequestResponse,
    401: KeyNotEnabledResponse,
    403: ForbiddenResponse,
    408: DeadlineResponse,
    413: PayloadTooLargeResponse,
    429: ThrottleResponse,
    500: InternalServerErrorResponse,
    503: UnavailableResponse,
  },
  security: [{ agentApiKey: [] }],
})

export const putApiFleetUploadsIdChunkNumRoute = createRoute({
  method: 'put',
  path: '/api/fleet/uploads/{id}/{chunkNum}',
  summary: 'Upload a section of file data',
  description:
    'Upload portions of the intended file in a piecewise fashion. Chunks may be uploaded in any order, and may be uploaded in parallel. The body is the raw contents of the file at the given position matching the chunk number. The body must be the exact chunk size returned from the upload initiation response. All chunks must be this size except for the final one, which is naturally the file remainder.',
  operationId: 'uploadChunk',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The upload_id as returned in the Upload initiation response',
            required: true,
            schema: { type: 'string', examples: ['ecb30383-6dd1-4b1d-bed0-2386b4e5df51'] },
          },
          examples: ['ecb30383-6dd1-4b1d-bed0-2386b4e5df51'],
        }),
      chunkNum: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            name: 'chunkNum',
            in: 'path',
            description:
              'the positional index of the chunk within the file. The first chunk is 0, the next 1, etc.',
            required: true,
            schema: { type: 'integer', examples: [3] },
          },
          examples: [3],
        }),
    }),
    headers: z.object({
      'X-Chunk-SHA2': z
        .string()
        .openapi({
          param: {
            name: 'X-Chunk-SHA2',
            in: 'header',
            required: true,
            description: 'the SHA256 hash of the body contents for this request',
            schema: {
              type: 'string',
              examples: ['0c4a81b85a6b7ff00bde6c32e1e8be33b4b793b3b7b5cb03db93f77f7c9374d1'],
            },
          },
          examples: ['0c4a81b85a6b7ff00bde6c32e1e8be33b4b793b3b7b5cb03db93f77f7c9374d1'],
        }),
      'X-Request-Id': RequestIdParamsSchema,
      'elastic-api-version': ApiVersionParamsSchema,
    }),
    body: {
      description: 'The chunk contents as bytes',
      content: { '*/*': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful chunk upload',
      headers: z.object({
        'Elastic-Api-Version': ApiVersionHeaderSchema,
        'X-Request-Id': RequestIDHeaderSchema,
      }),
    },
    400: BadRequestResponse,
    401: KeyNotEnabledResponse,
    403: ForbiddenResponse,
    408: DeadlineResponse,
    413: PayloadTooLargeResponse,
    429: ThrottleResponse,
    500: InternalServerErrorResponse,
    503: UnavailableResponse,
  },
  security: [{ agentApiKey: [] }],
})

export const postApiFleetUploadsIdRoute = createRoute({
  method: 'post',
  path: '/api/fleet/uploads/{id}',
  summary: 'Complete a file upload process',
  operationId: 'uploadComplete',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The upload_id as returned in the Upload initiation response',
            required: true,
            schema: { type: 'string', examples: ['ecb30383-6dd1-4b1d-bed0-2386b4e5df51'] },
          },
          examples: ['ecb30383-6dd1-4b1d-bed0-2386b4e5df51'],
        }),
    }),
    headers: z.object({
      'X-Request-Id': RequestIdParamsSchema,
      'elastic-api-version': ApiVersionParamsSchema,
    }),
    body: {
      content: { 'application/json': { schema: UploadCompleteRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'success response',
      content: {
        'application/json': {
          schema: z
            .object({
              status: z
                .string()
                .exactOptional()
                .openapi({ examples: ['ok'] }),
            })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        'Elastic-Api-Version': ApiVersionHeaderSchema,
        'X-Request-Id': RequestIDHeaderSchema,
      }),
    },
    400: BadRequestResponse,
    401: KeyNotEnabledResponse,
    403: ForbiddenResponse,
    408: DeadlineResponse,
    500: InternalServerErrorResponse,
    503: UnavailableResponse,
  },
  security: [{ agentApiKey: [] }],
})

export const getApiFleetFileIdRoute = createRoute({
  method: 'get',
  path: '/api/fleet/file/{id}',
  summary: 'retrieve stored file for integration',
  description:
    'Stream out file contents to an agent or integration, provided there is a matching and authorized file stored in elasticsearch.',
  operationId: 'getFile',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The file_id as provided to the integration',
            required: true,
            schema: { type: 'string', examples: ['ecb30383-6dd1-4b1d-bed0-2386b4e5df51'] },
          },
          examples: ['ecb30383-6dd1-4b1d-bed0-2386b4e5df51'],
        }),
    }),
    query: z.object({
      source: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'source',
            in: 'query',
            description:
              'Requests file from an alternate index pattern in elasticsearch. Requires specific integration support for creating the corresponding index and files. Supporting integration clients are allowlisted in fleet server.',
            required: false,
            schema: { type: 'string', example: 'archive' },
          },
          example: 'archive',
        }),
    }),
    headers: z.object({
      'elastic-api-version': ApiVersionParamsSchema,
      'X-Request-Id': RequestIdParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'File Contents.',
      content: { '*/*': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
      headers: z.object({
        'X-File-Sha2': {
          description:
            'SHA256 digest of the file contents. Only sent when the uploaded file contains a file.hash.sha256 value.',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'SHA256 digest of the file contents. Only sent when the uploaded file contains a file.hash.sha256 value.',
              param: { required: false },
              examples: ['0c4a81b85a6b7ff00bde6c32e1e8be33b4b793b3b7b5cb03db93f77f7c9374d1'],
            }),
        },
        'Elastic-Api-Version': ApiVersionHeaderSchema,
        'X-Request-Id': RequestIDHeaderSchema,
      }),
    },
    206: {
      description: 'Partial File Contents',
      headers: z.object({
        'Content-Range': {
          description: 'Byte range of returned file section',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'Byte range of returned file section',
              param: { required: false },
              examples: ['500-4096/250000'],
            }),
        },
        'Elastic-Api-Version': ApiVersionHeaderSchema,
        'X-Request-Id': RequestIDHeaderSchema,
      }),
    },
    400: BadRequestResponse,
    401: KeyNotEnabledResponse,
    403: {
      description: 'The requesting entity is not permitted to access the requested file',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            unauthorized: {
              description: 'The file is not accessible',
              value: { statusCode: 403, error: 'Forbidden', message: 'Client is not authorized' },
            },
          },
        },
      },
      headers: z.object({
        'Elastic-Api-Version': ApiVersionHeaderSchema,
        'X-Request-Id': RequestIDHeaderSchema,
      }),
    },
    404: {
      description: 'bad path, file not found',
      headers: z.object({
        'Elastic-Api-Version': ApiVersionHeaderSchema,
        'X-Request-Id': RequestIDHeaderSchema,
      }),
    },
    416: {
      description: 'Range Not Satisfiable',
      headers: z.object({
        'Elastic-Api-Version': ApiVersionHeaderSchema,
        'X-Request-Id': RequestIDHeaderSchema,
      }),
    },
    429: ThrottleResponse,
    500: InternalServerErrorResponse,
    503: UnavailableResponse,
  },
  security: [{ agentApiKey: [] }],
})

export const getApiAgentsUpgradesMajorMinorPatchPgpPublicKeyRoute = createRoute({
  method: 'get',
  path: '/api/agents/upgrades/{major}.{minor}.{patch}/pgp-public-key',
  summary: "retrieve a PGP key from the fleet-server's local storage.",
  description:
    "Get a PGP key that can be used to verify agent upgrades. Key is stored on (fleet-server's) disk.",
  operationId: 'getPGPKey',
  request: {
    params: z.object({
      major: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            name: 'major',
            in: 'path',
            description: 'The major version number.',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      minor: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            name: 'minor',
            in: 'path',
            description: 'The minor version number.',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      patch: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            name: 'patch',
            in: 'path',
            description: 'The patch version number.',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      'elastic-api-version': ApiVersionParamsSchema,
      'X-Request-Id': RequestIdParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The PGP key bytes.',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
      headers: z.object({
        'Elastic-Api-Version': ApiVersionHeaderSchema,
        'X-Request-Id': RequestIDHeaderSchema,
      }),
    },
    400: BadRequestResponse,
    429: ThrottleResponse,
    500: {
      description: 'The server has an error retrieving or reading the local key.',
      headers: z.object({
        'Elastic-Api-Version': ApiVersionHeaderSchema,
        'X-Request-Id': RequestIDHeaderSchema,
      }),
    },
    501: {
      description: 'The server will not serve the request without a TLS connection.',
      headers: z.object({
        'Elastic-Api-Version': ApiVersionHeaderSchema,
        'X-Request-Id': RequestIDHeaderSchema,
      }),
    },
  },
})

export const postApiFleetAgentsIdAuditUnenrollRoute = createRoute({
  method: 'post',
  path: '/api/fleet/agents/{id}/audit/unenroll',
  summary: 'Annotate an agent with unenroll attributes.',
  description:
    'Annotate an agent with unenroll attributes so the UI will show it as uninstalled or orphaned instead of offline.\nAPI keys for an agent that is annotated will not be revoked by fleet-server.\nIf an agent checks in after the unenroll attributes are set, the attributes will be removed from the agent document.\n',
  operationId: 'auditUnenroll',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The agent ID.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'X-Request-Id': RequestIdParamsSchema,
      'elastic-api-version': ApiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: AuditUnenrollRequestSchema,
          examples: {
            request: {
              description: 'An uninstall request.',
              value: { reason: 'uninstall', timestamp: '2024-01-01T12:00:00.000Z' },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Audit attributes set in agent document.',
      headers: z.object({
        'Elastic-Api-Version': ApiVersionHeaderSchema,
        'X-Request-Id': RequestIDHeaderSchema,
      }),
    },
    400: BadRequestResponse,
    401: KeyNotEnabledResponse,
    403: ForbiddenResponse,
    409: ConflictResponse,
    429: ThrottleResponse,
    500: InternalServerErrorResponse,
    503: UnavailableResponse,
  },
  security: [{ agentApiKey: [] }],
})
