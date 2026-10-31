import { createRoute, z } from '@hono/zod-openapi'

const Base64stringSchema = z.base64().openapi('Base64string')

const QuoteFormatSchema = z
  .enum(['OE_SGX_v1', 'Insecure_Virtual', 'AMD_SEV_SNP_v1'])
  .openapi('QuoteFormat')

const StringSchema = z.string().openapi('String')

const NodeIdSchema = z
  .hex()
  .regex(/^[a-f0-9]{64}$/)
  .openapi('NodeId')

const AttestationSchema = z
  .object({
    endorsements: Base64stringSchema,
    format: QuoteFormatSchema,
    measurement: StringSchema.exactOptional(),
    node_id: NodeIdSchema,
    raw: Base64stringSchema,
    uvm_endorsements: Base64stringSchema.exactOptional(),
  })
  .openapi({ required: ['node_id', 'raw', 'endorsements', 'format'] })
  .openapi('Attestation')

const AttestationArraySchema = z.array(AttestationSchema).openapi('AttestationArray')

const AuthoritySchema = z.enum(['Node', 'Service', 'ACME', 'Unsecured']).openapi('Authority')

const BinarySchema = z.file().openapi({ type: 'string', format: 'binary' }).openapi('Binary')

const CCFErrorSchema = z
  .object({
    error: z
      .object({
        code: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Response error code. CCF error codes: https://microsoft.github.io/CCF/main/operations/troubleshooting.html#error-codes',
          }),
        message: z.string().exactOptional().openapi({ description: 'Response error message' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('CCFError')

const Uint64Schema = z.int().min(0).max(18446744073709552000).openapi('Uint64')

const ConfigurationNodeInfoSchema = z
  .object({ address: StringSchema })
  .openapi({ required: ['address'] })
  .openapi('ConfigurationNodeInfo')

const NodeIdToConfigurationNodeInfoSchema = z
  .record(z.string(), ConfigurationNodeInfoSchema)
  .openapi('NodeIdToConfigurationNodeInfo')

const ConfigurationSchema = z
  .object({ idx: Uint64Schema, nodes: NodeIdToConfigurationNodeInfoSchema, rid: Uint64Schema })
  .openapi({ required: ['idx', 'nodes', 'rid'] })
  .openapi('Configuration')

const ConfigurationArraySchema = z.array(ConfigurationSchema).openapi('ConfigurationArray')

const ConsensusDetailsAckSchema = z
  .object({ last_received_ms: Uint64Schema, seqno: Uint64Schema })
  .openapi({ required: ['seqno', 'last_received_ms'] })
  .openapi('ConsensusDetailsAck')

const NodeIdToConsensusDetailsAckSchema = z
  .record(z.string(), ConsensusDetailsAckSchema)
  .openapi('NodeIdToConsensusDetailsAck')

const LeadershipStateSchema = z
  .enum(['None', 'Leader', 'Follower', 'PreVoteCandidate', 'Candidate'])
  .openapi('LeadershipState')

const NodeIdToUint64Schema = z.record(z.string(), Uint64Schema).openapi('NodeIdToUint64')

const MembershipStateSchema = z.enum(['Active', 'Retired']).openapi('MembershipState')

const ReconfigurationTypeSchema = z
  .enum(['OneTransaction', 'TwoTransaction'])
  .openapi('ReconfigurationType')

const RetirementPhaseSchema = z
  .enum(['Ordered', 'Signed', 'Completed', 'RetiredCommitted'])
  .openapi('RetirementPhase')

const BooleanSchema = z.boolean().openapi('Boolean')

const ConsensusDetailsSchema = z
  .object({
    acks: NodeIdToConsensusDetailsAckSchema,
    configs: ConfigurationArraySchema,
    current_view: Uint64Schema,
    leadership_state: LeadershipStateSchema.exactOptional(),
    learners: NodeIdToUint64Schema.exactOptional(),
    membership_state: MembershipStateSchema,
    primary_id: z.union([NodeIdSchema, z.literal(null).nullable()]),
    reconfiguration_type: ReconfigurationTypeSchema.exactOptional(),
    retirement_phase: RetirementPhaseSchema.exactOptional(),
    ticking: BooleanSchema,
  })
  .openapi({
    required: ['configs', 'acks', 'membership_state', 'primary_id', 'current_view', 'ticking'],
  })
  .openapi('ConsensusDetails')

const ConsensusConfigDetailsSchema = z
  .object({ details: ConsensusDetailsSchema })
  .openapi({ required: ['details'] })
  .openapi('ConsensusConfigDetails')

const ConsensusNodeConfigSchema = z
  .object({ address: StringSchema })
  .openapi({ required: ['address'] })
  .openapi('ConsensusNodeConfig')

const ConsensusTypeSchema = z.enum(['CFT', 'BFT']).openapi('ConsensusType')

const CoseSchema = z.file().openapi({ type: 'string', format: 'binary' }).openapi('Cose')

const EndorsementSchema = z
  .object({ authority: AuthoritySchema })
  .openapi({ required: ['authority'] })
  .openapi('Endorsement')

const GetAttestationsOutSchema = z
  .object({ attestations: AttestationArraySchema })
  .openapi({ required: ['attestations'] })
  .openapi('GetAttestationsOut')

const TransactionIdSchema = z
  .string()
  .regex(/^[0-9]+\.[0-9]+$/)
  .openapi('TransactionId')

const TransactionIdArraySchema = z.array(TransactionIdSchema).openapi('TransactionIdArray')

const GetCommitOutSchema = z
  .object({
    transaction_id: TransactionIdSchema,
    view_history: TransactionIdArraySchema.exactOptional(),
  })
  .openapi({ required: ['transaction_id'] })
  .openapi('GetCommitOut')

const GetHistoricalCacheInfoOutSchema = z
  .object({ estimated_size: Uint64Schema })
  .openapi({ required: ['estimated_size'] })
  .openapi('GetHistoricalCacheInfoOut')

const PemSchema = z.string().openapi('Pem')

const JsonSchema = z.any().openapi('Json')

const ServiceStatusSchema = z
  .enum(['Opening', 'Open', 'WaitingForRecoveryShares', 'Recovering'])
  .openapi('ServiceStatus')

const GetNetworkInfoOutSchema = z
  .object({
    current_service_create_txid: z.union([TransactionIdSchema, z.literal(null).nullable()]),
    current_view: z.union([Uint64Schema, z.literal(null).nullable()]),
    primary_id: z.union([NodeIdSchema, z.literal(null).nullable()]),
    recovery_count: Uint64Schema,
    service_certificate: PemSchema,
    service_data: JsonSchema,
    service_status: ServiceStatusSchema,
  })
  .openapi({
    required: [
      'service_status',
      'service_certificate',
      'current_view',
      'primary_id',
      'recovery_count',
      'service_data',
      'current_service_create_txid',
    ],
  })
  .openapi('GetNetworkInfoOut')

const StringArraySchema = z.array(StringSchema).openapi('StringArray')

const OperatorFeatureSchema = z
  .enum(['SnapshotRead', 'LedgerChunkRead', 'SnapshotCreate'])
  .openapi('OperatorFeature')

const OperatorFeatureSetSchema = z.array(OperatorFeatureSchema).openapi('OperatorFeatureSet')

const SizeStringSchema = z
  .string()
  .regex(/^[0-9]+(B|KB|MB|GB|TB|PB)?$/)
  .openapi('SizeString')

const Uint32Schema = z.int().min(0).max(4294967295).openapi('Uint32')

const ParserConfigurationSchema = z
  .object({
    initial_window_size: SizeStringSchema.exactOptional(),
    max_body_size: SizeStringSchema.exactOptional(),
    max_concurrent_streams_count: Uint64Schema.exactOptional(),
    max_frame_size: SizeStringSchema.exactOptional(),
    max_header_size: SizeStringSchema.exactOptional(),
    max_headers_count: Uint32Schema.exactOptional(),
    max_request_target_size: SizeStringSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ParserConfiguration')

const RedirectionResolutionKindSchema = z
  .enum(['NodeByRole', 'StaticAddress'])
  .openapi('RedirectionResolutionKind')

const RedirectionResolverConfigSchema = z
  .object({ kind: RedirectionResolutionKindSchema, target: JsonSchema.exactOptional() })
  .openapi({ required: ['kind'] })
  .openapi('RedirectionResolverConfig')

const NodeInfoNetworkV2NetInterfaceRedirectionsSchema = z
  .object({
    to_backup: RedirectionResolverConfigSchema.exactOptional(),
    to_primary: RedirectionResolverConfigSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('NodeInfoNetworkV2NetInterfaceRedirections')

const NodeInfoNetworkV2NetInterfaceSchema = z
  .object({
    accepted_endpoints: StringArraySchema.exactOptional(),
    app_protocol: StringSchema.exactOptional(),
    bind_address: StringSchema,
    enabled_operator_features: OperatorFeatureSetSchema.exactOptional(),
    endorsement: EndorsementSchema.exactOptional(),
    forwarding_timeout_ms: Uint64Schema.exactOptional(),
    http_configuration: ParserConfigurationSchema.exactOptional(),
    max_open_sessions_hard: Uint64Schema.exactOptional(),
    max_open_sessions_soft: Uint64Schema.exactOptional(),
    protocol: StringSchema.exactOptional(),
    published_address: StringSchema.exactOptional(),
    redirections: NodeInfoNetworkV2NetInterfaceRedirectionsSchema.exactOptional(),
  })
  .openapi({ required: ['bind_address'] })
  .openapi('NodeInfoNetworkV2NetInterface')

const StringToNodeInfoNetworkV2NetInterfaceSchema = z
  .record(z.string(), NodeInfoNetworkV2NetInterfaceSchema)
  .openapi('StringToNodeInfoNetworkV2NetInterface')

const NodeStatusSchema = z.enum(['Pending', 'Trusted', 'Retired']).openapi('NodeStatus')

const GetNodeNodeInfoSchema = z
  .object({
    last_written: Uint64Schema,
    node_data: JsonSchema,
    node_id: NodeIdSchema,
    primary: BooleanSchema,
    rpc_interfaces: StringToNodeInfoNetworkV2NetInterfaceSchema,
    status: NodeStatusSchema,
  })
  .openapi({
    required: ['node_id', 'status', 'primary', 'rpc_interfaces', 'node_data', 'last_written'],
  })
  .openapi('GetNodeNodeInfo')

const GetNodeNodeInfoArraySchema = z.array(GetNodeNodeInfoSchema).openapi('GetNodeNodeInfoArray')

const GetNodesOutSchema = z
  .object({ nodes: GetNodeNodeInfoArraySchema })
  .openapi({ required: ['nodes'] })
  .openapi('GetNodesOut')

const QuoteSchema = z
  .object({
    endorsements: Base64stringSchema,
    format: QuoteFormatSchema,
    measurement: StringSchema.exactOptional(),
    node_id: NodeIdSchema,
    raw: Base64stringSchema,
    uvm_endorsements: Base64stringSchema.exactOptional(),
  })
  .openapi({ required: ['node_id', 'raw', 'endorsements', 'format'] })
  .openapi('Quote')

const QuoteArraySchema = z.array(QuoteSchema).openapi('QuoteArray')

const GetQuotesOutSchema = z
  .object({ quotes: QuoteArraySchema })
  .openapi({ required: ['quotes'] })
  .openapi('GetQuotesOut')

const GetServicePreviousIdentityOutSchema = z
  .object({ previous_service_identity: PemSchema })
  .openapi({ required: ['previous_service_identity'] })
  .openapi('GetServicePreviousIdentityOut')

const CcfNodeStartupStateSchema = z
  .enum([
    'Uninitialized',
    'Initialized',
    'Pending',
    'PartOfPublicNetwork',
    'PartOfNetwork',
    'ReadingPublicLedger',
    'ReadingPrivateLedger',
  ])
  .openapi('CcfNodeStartupState')

const GetStateOutSchema = z
  .object({
    last_recovered_seqno: Uint64Schema.exactOptional(),
    last_signed_seqno: Uint64Schema,
    node_id: NodeIdSchema,
    recovery_target_seqno: Uint64Schema.exactOptional(),
    startup_seqno: Uint64Schema,
    state: CcfNodeStartupStateSchema,
    stop_notice: BooleanSchema,
  })
  .openapi({ required: ['node_id', 'state', 'last_signed_seqno', 'startup_seqno', 'stop_notice'] })
  .openapi('GetStateOut')

const TxStatusSchema = z.enum(['Unknown', 'Pending', 'Committed', 'Invalid']).openapi('TxStatus')

const GetTxStatusOutSchema = z
  .object({ status: TxStatusSchema, transaction_id: TransactionIdSchema })
  .openapi({ required: ['transaction_id', 'status'] })
  .openapi('GetTxStatusOut')

const GetVersionOutSchema = z
  .object({ ccf_version: StringSchema, quickjs_version: StringSchema, unsafe: BooleanSchema })
  .openapi({ required: ['ccf_version', 'quickjs_version', 'unsafe'] })
  .openapi('GetVersionOut')

const JWTRefreshMetricsSchema = z
  .object({ attempts: Uint64Schema, failures: Uint64Schema, successes: Uint64Schema })
  .openapi({ required: ['attempts', 'successes', 'failures'] })
  .openapi('JWTRefreshMetrics')

const JavaScriptMetricsSchema = z
  .object({
    bytecode_size: Uint64Schema,
    bytecode_used: BooleanSchema,
    max_cached_interpreters: Uint64Schema,
    max_execution_time: Uint64Schema,
    max_heap_size: Uint64Schema,
    max_stack_size: Uint64Schema,
  })
  .openapi({
    required: [
      'bytecode_size',
      'bytecode_used',
      'max_heap_size',
      'max_stack_size',
      'max_execution_time',
      'max_cached_interpreters',
    ],
  })
  .openapi('JavaScriptMetrics')

const SessionMetricsErrorsSchema = z
  .object({
    parsing: Uint64Schema,
    request_header_too_large: Uint64Schema,
    request_payload_too_large: Uint64Schema,
    request_target_too_long: Uint64Schema,
  })
  .openapi({
    required: [
      'parsing',
      'request_payload_too_large',
      'request_header_too_large',
      'request_target_too_long',
    ],
  })
  .openapi('SessionMetricsErrors')

const SessionMetricsPerInterfaceSchema = z
  .object({
    active: Uint64Schema,
    errors: SessionMetricsErrorsSchema,
    hard_cap: Uint64Schema,
    peak: Uint64Schema,
    soft_cap: Uint64Schema,
  })
  .openapi({ required: ['active', 'peak', 'soft_cap', 'hard_cap', 'errors'] })
  .openapi('SessionMetricsPerInterface')

const StringToSessionMetricsPerInterfaceSchema = z
  .record(z.string(), SessionMetricsPerInterfaceSchema)
  .openapi('StringToSessionMetricsPerInterface')

const SessionMetricsSchema = z
  .object({
    active: Uint64Schema,
    interfaces: StringToSessionMetricsPerInterfaceSchema,
    peak: Uint64Schema,
  })
  .openapi({ required: ['active', 'peak', 'interfaces'] })
  .openapi('SessionMetrics')

const NodeMetricsSchema = z
  .object({ sessions: SessionMetricsSchema })
  .openapi({ required: ['sessions'] })
  .openapi('NodeMetrics')

const SelfSignedNodeCertificateInfoSchema = z
  .object({ self_signed_certificate: PemSchema })
  .openapi({ required: ['self_signed_certificate'] })
  .openapi('SelfSignedNodeCertificateInfo')

const ServiceConfigurationSchema = z
  .object({
    consensus: ConsensusTypeSchema.exactOptional(),
    maximum_node_certificate_validity_days: Uint64Schema.exactOptional(),
    maximum_service_certificate_validity_days: Uint64Schema.exactOptional(),
    recent_cose_proposals_window_size: Uint64Schema.exactOptional(),
    reconfiguration_type: ReconfigurationTypeSchema.exactOptional(),
    recovery_threshold: Uint64Schema,
  })
  .openapi({ required: ['recovery_threshold'] })
  .openapi('ServiceConfiguration')

const StringToConsensusNodeConfigSchema = z
  .record(z.string(), ConsensusNodeConfigSchema)
  .openapi('StringToConsensusNodeConfig')

const DefaultResponse = {
  description: 'An error occurred',
  content: { 'application/json': { schema: CCFErrorSchema } },
}

export const getNodeApiRoute = createRoute({
  method: 'get',
  path: '/node/api',
  summary: 'OpenAPI schema',
  operationId: 'GetNodeApi',
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: JsonSchema } },
    },
    default: DefaultResponse,
  },
})

export const getNodeAttestationsRoute = createRoute({
  method: 'get',
  path: '/node/attestations',
  operationId: 'GetNodeAttestations',
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: GetAttestationsOutSchema } },
    },
    default: DefaultResponse,
  },
})

export const getNodeAttestationsSelfRoute = createRoute({
  method: 'get',
  path: '/node/attestations/self',
  operationId: 'GetNodeAttestationsSelf',
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: AttestationSchema } },
    },
    default: DefaultResponse,
  },
})

export const getNodeBackupRoute = createRoute({
  method: 'get',
  path: '/node/backup',
  operationId: 'GetNodeBackup',
  responses: { 200: { description: 'Default response description' }, default: DefaultResponse },
})

export const getNodeCommitRoute = createRoute({
  method: 'get',
  path: '/node/commit',
  summary: 'Current commit level',
  description: 'Latest transaction ID that has been committed on the service',
  operationId: 'GetNodeCommit',
  request: {
    query: z.object({
      view_history: z
        .preprocess(
          ((read) => (val: unknown) => {
            const result = read.safeParse(val)
            return result.success ? result.data : val
          })(z.stringbool()),
          BooleanSchema.openapi({
            param: {
              in: 'query',
              name: 'view_history',
              required: false,
              schema: { $ref: '#/components/schemas/boolean' },
            },
          }),
        )
        .exactOptional(),
      view_history_since: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          Uint64Schema.openapi({
            param: {
              in: 'query',
              name: 'view_history_since',
              required: false,
              schema: { $ref: '#/components/schemas/uint64' },
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: GetCommitOutSchema } },
    },
    default: DefaultResponse,
  },
})

export const getNodeConfigRoute = createRoute({
  method: 'get',
  path: '/node/config',
  operationId: 'GetNodeConfig',
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: StringToConsensusNodeConfigSchema } },
    },
    default: DefaultResponse,
  },
})

export const getNodeConsensusRoute = createRoute({
  method: 'get',
  path: '/node/consensus',
  operationId: 'GetNodeConsensus',
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: ConsensusConfigDetailsSchema } },
    },
    default: DefaultResponse,
  },
})

export const getNodeHistoricalCacheRoute = createRoute({
  method: 'get',
  path: '/node/historical_cache',
  operationId: 'GetNodeHistoricalCache',
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: GetHistoricalCacheInfoOutSchema } },
    },
    default: DefaultResponse,
  },
})

export const getNodeIndexStrategiesRoute = createRoute({
  method: 'get',
  path: '/node/index/strategies',
  operationId: 'GetNodeIndexStrategies',
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: JsonSchema } },
    },
    default: DefaultResponse,
  },
})

export const getNodeJsMetricsRoute = createRoute({
  method: 'get',
  path: '/node/js_metrics',
  operationId: 'GetNodeJsMetrics',
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: JavaScriptMetricsSchema } },
    },
    default: DefaultResponse,
  },
})

export const getNodeJwtKeysRefreshMetricsRoute = createRoute({
  method: 'get',
  path: '/node/jwt_keys/refresh/metrics',
  operationId: 'GetNodeJwtKeysRefreshMetrics',
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: JWTRefreshMetricsSchema } },
    },
    default: DefaultResponse,
  },
})

export const getNodeLedgerChunkRoute = createRoute({
  method: 'get',
  path: '/node/ledger_chunk',
  summary: 'Download ledger chunk',
  description:
    "Redirect to the corresponding /node/ledger_chunk/{chunk_name} endpoint for the ledger chunk including the sequence number specified in the 'since' query parameter. If 'include_committed_prefix' is true and no committed file is available, this may temporarily redirect to a synthetic committed-prefix resource.",
  operationId: 'GetNodeLedgerChunk',
  request: {
    query: z.object({
      since: z.preprocess(
        (val) =>
          typeof val === 'string' &&
          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
            ? Number(val)
            : val,
        Uint64Schema.openapi({
          param: {
            in: 'query',
            name: 'since',
            required: true,
            schema: { $ref: '#/components/schemas/uint64' },
          },
        }),
      ),
      include_committed_prefix: z
        .preprocess(
          ((read) => (val: unknown) => {
            const result = read.safeParse(val)
            return result.success ? result.data : val
          })(z.stringbool()),
          BooleanSchema.openapi({
            param: {
              in: 'query',
              name: 'include_committed_prefix',
              required: false,
              schema: { $ref: '#/components/schemas/boolean' },
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    307: { description: 'Redirect to a temporary committed ledger prefix.' },
    308: { description: 'Redirect to the selected ledger chunk.' },
    404: { description: 'No matching ledger chunk is available.' },
    default: DefaultResponse,
  },
})

export const headNodeLedgerChunkRoute = createRoute({
  method: 'head',
  path: '/node/ledger_chunk',
  summary: 'Ledger chunk metadata',
  description:
    "Redirect to the corresponding /node/ledger_chunk/{chunk_name} endpoint for the ledger chunk including the sequence number specified in the 'since' query parameter. If 'include_committed_prefix' is true and no committed file is available, this may temporarily redirect to a synthetic committed-prefix resource.",
  operationId: 'HeadNodeLedgerChunk',
  request: {
    query: z.object({
      since: z.preprocess(
        (val) =>
          typeof val === 'string' &&
          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
            ? Number(val)
            : val,
        Uint64Schema.openapi({
          param: {
            in: 'query',
            name: 'since',
            required: true,
            schema: { $ref: '#/components/schemas/uint64' },
          },
        }),
      ),
      include_committed_prefix: z
        .preprocess(
          ((read) => (val: unknown) => {
            const result = read.safeParse(val)
            return result.success ? result.data : val
          })(z.stringbool()),
          BooleanSchema.openapi({
            param: {
              in: 'query',
              name: 'include_committed_prefix',
              required: false,
              schema: { $ref: '#/components/schemas/boolean' },
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    307: { description: 'Redirect to a temporary committed ledger prefix.' },
    308: { description: 'Redirect to the selected ledger chunk.' },
    404: { description: 'No matching ledger chunk is available.' },
    default: DefaultResponse,
  },
})

export const getNodeLedgerChunkCommittedPrefixChunkNameRoute = createRoute({
  method: 'get',
  path: '/node/ledger_chunk/committed_prefix/{chunk_name}',
  summary: 'Download committed ledger prefix',
  description:
    'Download a synthetic chunk containing only committed ledger entries. Supports HTTP Range and digest headers. The resource is not a canonical .committed ledger file and must not be used for recovery.',
  operationId: 'GetNodeLedgerChunkCommittedPrefixChunkName',
  request: {
    params: z.object({
      chunk_name: z
        .string()
        .openapi({
          param: { in: 'path', name: 'chunk_name', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The requested committed ledger prefix.',
      content: { 'application/octet-stream': { schema: BinarySchema } },
    },
    206: {
      description: 'The requested byte range of the committed ledger prefix.',
      content: { 'application/octet-stream': { schema: BinarySchema } },
    },
    304: { description: 'The requested committed ledger prefix has not changed.' },
    404: { description: 'The requested committed ledger prefix is not available.' },
    default: DefaultResponse,
  },
})

export const headNodeLedgerChunkCommittedPrefixChunkNameRoute = createRoute({
  method: 'head',
  path: '/node/ledger_chunk/committed_prefix/{chunk_name}',
  summary: 'Committed ledger prefix metadata',
  description:
    'Metadata about a synthetic chunk containing only committed ledger entries. The resource is not a canonical .committed ledger file.',
  operationId: 'HeadNodeLedgerChunkCommittedPrefixChunkName',
  request: {
    params: z.object({
      chunk_name: z
        .string()
        .openapi({
          param: { in: 'path', name: 'chunk_name', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'Metadata for the requested committed ledger prefix.' },
    206: { description: 'Metadata for the requested committed ledger prefix range.' },
    304: { description: 'The requested committed ledger prefix has not changed.' },
    404: { description: 'The requested committed ledger prefix is not available.' },
    default: DefaultResponse,
  },
})

export const getNodeLedgerChunkChunkNameRoute = createRoute({
  method: 'get',
  path: '/node/ledger_chunk/{chunk_name}',
  summary: 'Download ledger chunk',
  description:
    'Download a specific ledger chunk by name. Supports HTTP Range header for partial downloads.',
  operationId: 'GetNodeLedgerChunkChunkName',
  request: {
    params: z.object({
      chunk_name: z
        .string()
        .openapi({
          param: { in: 'path', name: 'chunk_name', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The requested ledger chunk.',
      content: { 'application/octet-stream': { schema: BinarySchema } },
    },
    206: {
      description: 'The requested byte range of the ledger chunk.',
      content: { 'application/octet-stream': { schema: BinarySchema } },
    },
    304: { description: 'The requested ledger chunk has not changed.' },
    404: { description: 'The requested ledger chunk is not available.' },
    default: DefaultResponse,
  },
})

export const headNodeLedgerChunkChunkNameRoute = createRoute({
  method: 'head',
  path: '/node/ledger_chunk/{chunk_name}',
  summary: 'Ledger chunk metadata',
  description:
    'Metadata about a specific ledger chunk (Content-Length and x-ms-ccf-ledger-chunk-name)',
  operationId: 'HeadNodeLedgerChunkChunkName',
  request: {
    params: z.object({
      chunk_name: z
        .string()
        .openapi({
          param: { in: 'path', name: 'chunk_name', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'Metadata for the requested ledger chunk.' },
    206: { description: 'Metadata for the requested ledger chunk range.' },
    304: { description: 'The requested ledger chunk has not changed.' },
    404: { description: 'The requested ledger chunk is not available.' },
    default: DefaultResponse,
  },
})

export const getNodeMetricsRoute = createRoute({
  method: 'get',
  path: '/node/metrics',
  operationId: 'GetNodeMetrics',
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: NodeMetricsSchema } },
    },
    default: DefaultResponse,
  },
})

export const getNodeNetworkRoute = createRoute({
  method: 'get',
  path: '/node/network',
  operationId: 'GetNodeNetwork',
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: GetNetworkInfoOutSchema } },
    },
    default: DefaultResponse,
  },
})

export const getNodeNetworkNodesRoute = createRoute({
  method: 'get',
  path: '/node/network/nodes',
  operationId: 'GetNodeNetworkNodes',
  request: {
    query: z.object({
      host: StringSchema.openapi({
        param: {
          in: 'query',
          name: 'host',
          required: false,
          schema: { $ref: '#/components/schemas/string' },
        },
      }).exactOptional(),
      port: StringSchema.openapi({
        param: {
          in: 'query',
          name: 'port',
          required: false,
          schema: { $ref: '#/components/schemas/string' },
        },
      }).exactOptional(),
      status: StringSchema.openapi({
        param: {
          in: 'query',
          name: 'status',
          required: false,
          schema: { $ref: '#/components/schemas/string' },
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: GetNodesOutSchema } },
    },
    default: DefaultResponse,
  },
})

export const getNodeNetworkNodesPrimaryRoute = createRoute({
  method: 'get',
  path: '/node/network/nodes/primary',
  operationId: 'GetNodeNetworkNodesPrimary',
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: GetNodeNodeInfoSchema } },
    },
    default: DefaultResponse,
  },
})

export const getNodeNetworkNodesSelfRoute = createRoute({
  method: 'get',
  path: '/node/network/nodes/self',
  operationId: 'GetNodeNetworkNodesSelf',
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: GetNodeNodeInfoSchema } },
    },
    default: DefaultResponse,
  },
})

export const getNodeNetworkNodesNodeIdRoute = createRoute({
  method: 'get',
  path: '/node/network/nodes/{node_id}',
  operationId: 'GetNodeNetworkNodesNodeId',
  request: {
    params: z.object({
      node_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'node_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: GetNodeNodeInfoSchema } },
    },
    default: DefaultResponse,
  },
})

export const deleteNodeNetworkNodesNodeIdRoute = createRoute({
  method: 'delete',
  path: '/node/network/nodes/{node_id}',
  operationId: 'DeleteNodeNetworkNodesNodeId',
  request: {
    params: z.object({
      node_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'node_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: BooleanSchema } },
    },
    default: DefaultResponse,
  },
})

export const getNodeNetworkRemovableNodesRoute = createRoute({
  method: 'get',
  path: '/node/network/removable_nodes',
  operationId: 'GetNodeNetworkRemovableNodes',
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: GetNodesOutSchema } },
    },
    default: DefaultResponse,
  },
})

export const getNodePrimaryRoute = createRoute({
  method: 'get',
  path: '/node/primary',
  operationId: 'GetNodePrimary',
  responses: { 200: { description: 'Default response description' }, default: DefaultResponse },
})

export const headNodePrimaryRoute = createRoute({
  method: 'head',
  path: '/node/primary',
  operationId: 'HeadNodePrimary',
  responses: {
    308: { description: 'Redirect to the current primary node.' },
    default: DefaultResponse,
  },
})

export const getNodeQuotesRoute = createRoute({
  method: 'get',
  path: '/node/quotes',
  operationId: 'GetNodeQuotes',
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: GetQuotesOutSchema } },
    },
    default: DefaultResponse,
  },
})

export const getNodeQuotesSelfRoute = createRoute({
  method: 'get',
  path: '/node/quotes/self',
  operationId: 'GetNodeQuotesSelf',
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: QuoteSchema } },
    },
    default: DefaultResponse,
  },
})

export const getNodeReadyAppRoute = createRoute({
  method: 'get',
  path: '/node/ready/app',
  operationId: 'GetNodeReadyApp',
  responses: {
    204: { description: 'Default response description' },
    503: { description: 'The application frontend is not ready.' },
    default: DefaultResponse,
  },
})

export const getNodeReadyGovRoute = createRoute({
  method: 'get',
  path: '/node/ready/gov',
  operationId: 'GetNodeReadyGov',
  responses: {
    204: { description: 'Default response description' },
    503: { description: 'The governance frontend is not ready.' },
    default: DefaultResponse,
  },
})

export const getNodeReceiptRoute = createRoute({
  method: 'get',
  path: '/node/receipt',
  summary: 'Receipt for a transaction',
  description: 'A signed statement from the service over a transaction entry in the ledger',
  operationId: 'GetNodeReceipt',
  request: {
    query: z.object({
      transaction_id: TransactionIdSchema.openapi({
        param: {
          in: 'query',
          name: 'transaction_id',
          required: true,
          schema: { $ref: '#/components/schemas/TransactionId' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: JsonSchema } },
    },
    202: {
      description:
        'The transaction is not yet available. The response describes why and the Retry-After header indicates when to retry.',
      content: { 'text/plain': { schema: StringSchema } },
    },
    default: DefaultResponse,
  },
})

export const getNodeReceiptCoseRoute = createRoute({
  method: 'get',
  path: '/node/receipt/cose',
  summary: 'COSE receipt for a transaction',
  description:
    'A COSE Sign1 envelope containing a signed statement from the service over a transaction entry in the ledger, with a Merkle proof in the unprotected header. See https://datatracker.ietf.org/doc/draft-ietf-scitt-receipts-ccf-profile/ for a complete description.',
  operationId: 'GetNodeReceiptCose',
  request: {
    query: z.object({
      transaction_id: TransactionIdSchema.openapi({
        param: {
          in: 'query',
          name: 'transaction_id',
          required: true,
          schema: { $ref: '#/components/schemas/TransactionId' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/cose': { schema: CoseSchema } },
    },
    202: {
      description:
        'The transaction is not yet available. The response describes why and the Retry-After header indicates when to retry.',
      content: { 'text/plain': { schema: StringSchema } },
    },
    default: DefaultResponse,
  },
})

export const getNodeSelfSignedCertificateRoute = createRoute({
  method: 'get',
  path: '/node/self_signed_certificate',
  operationId: 'GetNodeSelfSignedCertificate',
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: SelfSignedNodeCertificateInfoSchema } },
    },
    default: DefaultResponse,
  },
})

export const getNodeServiceConfigurationRoute = createRoute({
  method: 'get',
  path: '/node/service/configuration',
  operationId: 'GetNodeServiceConfiguration',
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: ServiceConfigurationSchema } },
    },
    default: DefaultResponse,
  },
})

export const getNodeServicePreviousIdentityRoute = createRoute({
  method: 'get',
  path: '/node/service/previous_identity',
  operationId: 'GetNodeServicePreviousIdentity',
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: GetServicePreviousIdentityOutSchema } },
    },
    default: DefaultResponse,
  },
})

export const getNodeSnapshotRoute = createRoute({
  method: 'get',
  path: '/node/snapshot',
  operationId: 'GetNodeSnapshot',
  request: {
    query: z.object({
      since: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          Uint64Schema.openapi({
            param: {
              in: 'query',
              name: 'since',
              required: false,
              schema: { $ref: '#/components/schemas/uint64' },
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    308: { description: 'Redirect to the selected snapshot.' },
    404: { description: 'No matching snapshot is available.' },
    default: DefaultResponse,
  },
})

export const headNodeSnapshotRoute = createRoute({
  method: 'head',
  path: '/node/snapshot',
  operationId: 'HeadNodeSnapshot',
  request: {
    query: z.object({
      since: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          Uint64Schema.openapi({
            param: {
              in: 'query',
              name: 'since',
              required: false,
              schema: { $ref: '#/components/schemas/uint64' },
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    308: { description: 'Redirect to the selected snapshot.' },
    404: { description: 'No matching snapshot is available.' },
    default: DefaultResponse,
  },
})

export const getNodeSnapshotSnapshotNameRoute = createRoute({
  method: 'get',
  path: '/node/snapshot/{snapshot_name}',
  operationId: 'GetNodeSnapshotSnapshotName',
  request: {
    params: z.object({
      snapshot_name: z
        .string()
        .openapi({
          param: { in: 'path', name: 'snapshot_name', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The requested snapshot.',
      content: { 'application/octet-stream': { schema: BinarySchema } },
    },
    206: {
      description: 'The requested byte range of the snapshot.',
      content: { 'application/octet-stream': { schema: BinarySchema } },
    },
    304: { description: 'The requested snapshot has not changed.' },
    404: { description: 'The requested snapshot is not available.' },
    default: DefaultResponse,
  },
})

export const headNodeSnapshotSnapshotNameRoute = createRoute({
  method: 'head',
  path: '/node/snapshot/{snapshot_name}',
  operationId: 'HeadNodeSnapshotSnapshotName',
  request: {
    params: z.object({
      snapshot_name: z
        .string()
        .openapi({
          param: { in: 'path', name: 'snapshot_name', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'Metadata for the requested snapshot.' },
    206: { description: 'Metadata for the requested snapshot range.' },
    304: { description: 'The requested snapshot has not changed.' },
    404: { description: 'The requested snapshot is not available.' },
    default: DefaultResponse,
  },
})

export const postNodeSnapshotCreateRoute = createRoute({
  method: 'post',
  path: '/node/snapshot:create',
  operationId: 'PostNodeSnapshotCreate',
  responses: {
    204: { description: 'Default response description' },
    404: { description: 'The required operator feature is not enabled on this interface.' },
    default: DefaultResponse,
  },
})

export const getNodeStateRoute = createRoute({
  method: 'get',
  path: '/node/state',
  operationId: 'GetNodeState',
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: GetStateOutSchema } },
    },
    default: DefaultResponse,
  },
})

export const getNodeTxRoute = createRoute({
  method: 'get',
  path: '/node/tx',
  summary: 'Current status of a transaction',
  description: 'Possible statuses returned are Unknown, Pending, Committed or Invalid.',
  operationId: 'GetNodeTx',
  request: {
    query: z.object({
      transaction_id: TransactionIdSchema.openapi({
        param: {
          in: 'query',
          name: 'transaction_id',
          required: true,
          schema: { $ref: '#/components/schemas/TransactionId' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: GetTxStatusOutSchema } },
    },
    default: DefaultResponse,
  },
})

export const getNodeVersionRoute = createRoute({
  method: 'get',
  path: '/node/version',
  operationId: 'GetNodeVersion',
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: GetVersionOutSchema } },
    },
    default: DefaultResponse,
  },
})
