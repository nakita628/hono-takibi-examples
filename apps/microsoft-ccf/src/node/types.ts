type Json = { [x: string]: unknown }
type CCFError = { error?: { code?: string | undefined; message?: string | undefined } | undefined }
type Base64string = string
type QuoteFormat = 'OE_SGX_v1' | 'Insecure_Virtual' | 'AMD_SEV_SNP_v1'
type String = string
type NodeId = string
type Attestation = {
  endorsements: Base64string
  format: QuoteFormat
  measurement?: String | undefined
  node_id: NodeId
  raw: Base64string
  uvm_endorsements?: Base64string | undefined
}
type AttestationArray = Attestation[]
type GetAttestationsOut = { attestations: AttestationArray }
type Boolean = boolean
type Uint64 = number
type TransactionId = string
type TransactionIdArray = TransactionId[]
type GetCommitOut = { transaction_id: TransactionId; view_history?: TransactionIdArray | undefined }
type ConsensusNodeConfig = { address: String }
type StringToConsensusNodeConfig = { [x: string]: ConsensusNodeConfig }
type ConsensusDetailsAck = { last_received_ms: Uint64; seqno: Uint64 }
type NodeIdToConsensusDetailsAck = { [x: string]: ConsensusDetailsAck }
type ConfigurationNodeInfo = { address: String }
type NodeIdToConfigurationNodeInfo = { [x: string]: ConfigurationNodeInfo }
type Configuration = { idx: Uint64; nodes: NodeIdToConfigurationNodeInfo; rid: Uint64 }
type ConfigurationArray = Configuration[]
type LeadershipState = 'None' | 'Leader' | 'Follower' | 'PreVoteCandidate' | 'Candidate'
type NodeIdToUint64 = { [x: string]: Uint64 }
type MembershipState = 'Active' | 'Retired'
type ReconfigurationType = 'OneTransaction' | 'TwoTransaction'
type RetirementPhase = 'Ordered' | 'Signed' | 'Completed' | 'RetiredCommitted'
type ConsensusDetails = {
  acks: NodeIdToConsensusDetailsAck
  configs: ConfigurationArray
  current_view: Uint64
  leadership_state?: LeadershipState | undefined
  learners?: NodeIdToUint64 | undefined
  membership_state: MembershipState
  primary_id: NodeId | null
  reconfiguration_type?: ReconfigurationType | undefined
  retirement_phase?: RetirementPhase | undefined
  ticking: Boolean
}
type ConsensusConfigDetails = { details: ConsensusDetails }
type GetHistoricalCacheInfoOut = { estimated_size: Uint64 }
type JavaScriptMetrics = {
  bytecode_size: Uint64
  bytecode_used: Boolean
  max_cached_interpreters: Uint64
  max_execution_time: Uint64
  max_heap_size: Uint64
  max_stack_size: Uint64
}
type JWTRefreshMetrics = { attempts: Uint64; failures: Uint64; successes: Uint64 }
type Binary = File
type SessionMetricsErrors = {
  parsing: Uint64
  request_header_too_large: Uint64
  request_payload_too_large: Uint64
  request_target_too_long: Uint64
}
type SessionMetricsPerInterface = {
  active: Uint64
  errors: SessionMetricsErrors
  hard_cap: Uint64
  peak: Uint64
  soft_cap: Uint64
}
type StringToSessionMetricsPerInterface = { [x: string]: SessionMetricsPerInterface }
type SessionMetrics = {
  active: Uint64
  interfaces: StringToSessionMetricsPerInterface
  peak: Uint64
}
type NodeMetrics = { sessions: SessionMetrics }
type Pem = string
type ServiceStatus = 'Opening' | 'Open' | 'WaitingForRecoveryShares' | 'Recovering'
type GetNetworkInfoOut = {
  current_service_create_txid: TransactionId | null
  current_view: Uint64 | null
  pq_service_certificate?: Pem | undefined
  primary_id: NodeId | null
  recovery_count: Uint64
  service_certificate: Pem
  service_data: Json
  service_status: ServiceStatus
}
type StringArray = String[]
type OperatorFeature = 'SnapshotRead' | 'LedgerChunkRead' | 'SnapshotCreate'
type OperatorFeatureSet = OperatorFeature[]
type Authority = 'Node' | 'Service' | 'ACME' | 'Unsecured'
type Endorsement = { authority: Authority }
type SizeString = string
type Uint32 = number
type ParserConfiguration = {
  max_body_size?: SizeString | undefined
  max_header_size?: SizeString | undefined
  max_headers_count?: Uint32 | undefined
  max_request_target_size?: SizeString | undefined
}
type RedirectionResolutionKind = 'NodeByRole' | 'StaticAddress'
type RedirectionResolverConfig = { kind: RedirectionResolutionKind; target?: Json | undefined }
type NodeInfoNetworkV2NetInterfaceRedirections = {
  to_backup?: RedirectionResolverConfig | undefined
  to_primary?: RedirectionResolverConfig | undefined
}
type NodeInfoNetworkV2NetInterface = {
  accepted_endpoints?: StringArray | undefined
  app_protocol?: String | undefined
  bind_address: String
  enabled_operator_features?: OperatorFeatureSet | undefined
  endorsement?: Endorsement | undefined
  forwarding_timeout_ms?: Uint64 | undefined
  http_configuration?: ParserConfiguration | undefined
  max_open_sessions_hard?: Uint64 | undefined
  max_open_sessions_soft?: Uint64 | undefined
  protocol?: String | undefined
  published_address?: String | undefined
  redirections?: NodeInfoNetworkV2NetInterfaceRedirections | undefined
}
type StringToNodeInfoNetworkV2NetInterface = { [x: string]: NodeInfoNetworkV2NetInterface }
type NodeStatus = 'Pending' | 'Trusted' | 'Retired'
type GetNodeNodeInfo = {
  last_written: Uint64
  node_data: Json
  node_id: NodeId
  primary: Boolean
  rpc_interfaces: StringToNodeInfoNetworkV2NetInterface
  status: NodeStatus
}
type GetNodeNodeInfoArray = GetNodeNodeInfo[]
type GetNodesOut = { nodes: GetNodeNodeInfoArray }
type Quote = {
  endorsements: Base64string
  format: QuoteFormat
  measurement?: String | undefined
  node_id: NodeId
  raw: Base64string
  uvm_endorsements?: Base64string | undefined
}
type QuoteArray = Quote[]
type GetQuotesOut = { quotes: QuoteArray }
type Cose = File
type SelfSignedNodeCertificateInfo = { self_signed_certificate: Pem }
type ConsensusType = 'CFT' | 'BFT'
type ServiceConfiguration = {
  consensus?: ConsensusType | undefined
  maximum_node_certificate_validity_days?: Uint64 | undefined
  maximum_service_certificate_validity_days?: Uint64 | undefined
  recent_cose_proposals_window_size?: Uint64 | undefined
  reconfiguration_type?: ReconfigurationType | undefined
  recovery_threshold: Uint64
}
type GetServicePreviousIdentityOut = { previous_service_identity: Pem }
type CcfNodeStartupState =
  | 'Uninitialized'
  | 'Initialized'
  | 'Pending'
  | 'PartOfPublicNetwork'
  | 'PartOfNetwork'
  | 'ReadingPublicLedger'
  | 'ReadingPrivateLedger'
type GetStateOut = {
  last_recovered_seqno?: Uint64 | undefined
  last_signed_seqno: Uint64
  node_id: NodeId
  recovery_target_seqno?: Uint64 | undefined
  startup_seqno: Uint64
  state: CcfNodeStartupState
  stop_notice: Boolean
}
type TxStatus = 'Unknown' | 'Pending' | 'Committed' | 'Invalid'
type GetTxStatusOut = { status: TxStatus; transaction_id: TransactionId }
type GetVersionOut = { ccf_version: String; quickjs_version: String; unsafe: Boolean }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/node/api': {
      $get:
        | { input: {}; output: Json; outputFormat: 'json'; status: 200 }
        | { input: {}; output: CCFError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/node/attestations': {
      $get:
        | { input: {}; output: GetAttestationsOut; outputFormat: 'json'; status: 200 }
        | { input: {}; output: CCFError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/node/attestations/self': {
      $get:
        | { input: {}; output: Attestation; outputFormat: 'json'; status: 200 }
        | { input: {}; output: CCFError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/node/backup': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: CCFError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/node/commit': {
      $get:
        | {
            input: {
              query: { view_history?: Boolean | undefined; view_history_since?: Uint64 | undefined }
            }
            output: GetCommitOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { view_history?: Boolean | undefined; view_history_since?: Uint64 | undefined }
            }
            output: CCFError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/node/config': {
      $get:
        | { input: {}; output: StringToConsensusNodeConfig; outputFormat: 'json'; status: 200 }
        | { input: {}; output: CCFError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/node/consensus': {
      $get:
        | { input: {}; output: ConsensusConfigDetails; outputFormat: 'json'; status: 200 }
        | { input: {}; output: CCFError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/node/historical_cache': {
      $get:
        | { input: {}; output: GetHistoricalCacheInfoOut; outputFormat: 'json'; status: 200 }
        | { input: {}; output: CCFError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/node/index/strategies': {
      $get:
        | { input: {}; output: Json; outputFormat: 'json'; status: 200 }
        | { input: {}; output: CCFError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/node/js_metrics': {
      $get:
        | { input: {}; output: JavaScriptMetrics; outputFormat: 'json'; status: 200 }
        | { input: {}; output: CCFError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/node/jwt_keys/refresh/metrics': {
      $get:
        | { input: {}; output: JWTRefreshMetrics; outputFormat: 'json'; status: 200 }
        | { input: {}; output: CCFError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/node/ledger_chunk': {
      $get:
        | {
            input: { query: { since: Uint64; include_committed_prefix?: Boolean | undefined } }
            output: {}
            outputFormat: string
            status: 307
          }
        | {
            input: { query: { since: Uint64; include_committed_prefix?: Boolean | undefined } }
            output: {}
            outputFormat: string
            status: 308
          }
        | {
            input: { query: { since: Uint64; include_committed_prefix?: Boolean | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { since: Uint64; include_committed_prefix?: Boolean | undefined } }
            output: CCFError
            outputFormat: 'json'
            status: 200
          }
      $head:
        | {
            input: { query: { since: Uint64; include_committed_prefix?: Boolean | undefined } }
            output: {}
            outputFormat: string
            status: 307
          }
        | {
            input: { query: { since: Uint64; include_committed_prefix?: Boolean | undefined } }
            output: {}
            outputFormat: string
            status: 308
          }
        | {
            input: { query: { since: Uint64; include_committed_prefix?: Boolean | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { since: Uint64; include_committed_prefix?: Boolean | undefined } }
            output: CCFError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/node/ledger_chunk/committed_prefix/:chunk_name': {
      $get:
        | {
            input: { param: { chunk_name: string } }
            output: Binary
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { chunk_name: string } }
            output: Binary
            outputFormat: 'text'
            status: 206
          }
        | {
            input: { param: { chunk_name: string } }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { chunk_name: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { chunk_name: string } }
            output: CCFError
            outputFormat: 'json'
            status: 200
          }
      $head:
        | {
            input: { param: { chunk_name: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { chunk_name: string } }
            output: {}
            outputFormat: string
            status: 206
          }
        | {
            input: { param: { chunk_name: string } }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { chunk_name: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { chunk_name: string } }
            output: CCFError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/node/ledger_chunk/:chunk_name': {
      $get:
        | {
            input: { param: { chunk_name: string } }
            output: Binary
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { chunk_name: string } }
            output: Binary
            outputFormat: 'text'
            status: 206
          }
        | {
            input: { param: { chunk_name: string } }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { chunk_name: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { chunk_name: string } }
            output: CCFError
            outputFormat: 'json'
            status: 200
          }
      $head:
        | {
            input: { param: { chunk_name: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { chunk_name: string } }
            output: {}
            outputFormat: string
            status: 206
          }
        | {
            input: { param: { chunk_name: string } }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { chunk_name: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { chunk_name: string } }
            output: CCFError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/node/metrics': {
      $get:
        | { input: {}; output: NodeMetrics; outputFormat: 'json'; status: 200 }
        | { input: {}; output: CCFError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/node/network': {
      $get:
        | { input: {}; output: GetNetworkInfoOut; outputFormat: 'json'; status: 200 }
        | { input: {}; output: CCFError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/node/network/nodes': {
      $get:
        | {
            input: {
              query: {
                host?: String | undefined
                port?: String | undefined
                status?: String | undefined
              }
            }
            output: GetNodesOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                host?: String | undefined
                port?: String | undefined
                status?: String | undefined
              }
            }
            output: CCFError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/node/network/nodes/primary': {
      $get:
        | { input: {}; output: GetNodeNodeInfo; outputFormat: 'json'; status: 200 }
        | { input: {}; output: CCFError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/node/network/nodes/self': {
      $get:
        | { input: {}; output: GetNodeNodeInfo; outputFormat: 'json'; status: 200 }
        | { input: {}; output: CCFError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/node/network/nodes/:node_id': {
      $delete:
        | {
            input: { param: { node_id: string } }
            output: Boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { node_id: string } }
            output: CCFError
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { node_id: string } }
            output: GetNodeNodeInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { node_id: string } }
            output: CCFError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/node/network/removable_nodes': {
      $get:
        | { input: {}; output: GetNodesOut; outputFormat: 'json'; status: 200 }
        | { input: {}; output: CCFError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/node/primary': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: CCFError; outputFormat: 'json'; status: 200 }
      $head:
        | { input: {}; output: {}; outputFormat: string; status: 308 }
        | { input: {}; output: CCFError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/node/quotes': {
      $get:
        | { input: {}; output: GetQuotesOut; outputFormat: 'json'; status: 200 }
        | { input: {}; output: CCFError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/node/quotes/self': {
      $get:
        | { input: {}; output: Quote; outputFormat: 'json'; status: 200 }
        | { input: {}; output: CCFError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/node/ready/app': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: {}; outputFormat: string; status: 503 }
        | { input: {}; output: CCFError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/node/ready/gov': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: {}; outputFormat: string; status: 503 }
        | { input: {}; output: CCFError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/node/receipt': {
      $get:
        | {
            input: { query: { transaction_id: TransactionId } }
            output: Json
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { transaction_id: TransactionId } }
            output: String
            outputFormat: 'text'
            status: 202
          }
        | {
            input: { query: { transaction_id: TransactionId } }
            output: CCFError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/node/receipt/cose': {
      $get:
        | {
            input: { query: { transaction_id: TransactionId } }
            output: Cose
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { transaction_id: TransactionId } }
            output: String
            outputFormat: 'text'
            status: 202
          }
        | {
            input: { query: { transaction_id: TransactionId } }
            output: CCFError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/node/self_signed_certificate': {
      $get:
        | { input: {}; output: SelfSignedNodeCertificateInfo; outputFormat: 'json'; status: 200 }
        | { input: {}; output: CCFError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/node/service/configuration': {
      $get:
        | { input: {}; output: ServiceConfiguration; outputFormat: 'json'; status: 200 }
        | { input: {}; output: CCFError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/node/service/previous_identity': {
      $get:
        | { input: {}; output: GetServicePreviousIdentityOut; outputFormat: 'json'; status: 200 }
        | { input: {}; output: CCFError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/node/snapshot': {
      $get:
        | {
            input: { query: { since?: Uint64 | undefined } }
            output: {}
            outputFormat: string
            status: 308
          }
        | {
            input: { query: { since?: Uint64 | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { since?: Uint64 | undefined } }
            output: CCFError
            outputFormat: 'json'
            status: 200
          }
      $head:
        | {
            input: { query: { since?: Uint64 | undefined } }
            output: {}
            outputFormat: string
            status: 308
          }
        | {
            input: { query: { since?: Uint64 | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { since?: Uint64 | undefined } }
            output: CCFError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/node/snapshot/:snapshot_name': {
      $get:
        | {
            input: { param: { snapshot_name: string } }
            output: Binary
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { snapshot_name: string } }
            output: Binary
            outputFormat: 'text'
            status: 206
          }
        | {
            input: { param: { snapshot_name: string } }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { snapshot_name: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { snapshot_name: string } }
            output: CCFError
            outputFormat: 'json'
            status: 200
          }
      $head:
        | {
            input: { param: { snapshot_name: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { snapshot_name: string } }
            output: {}
            outputFormat: string
            status: 206
          }
        | {
            input: { param: { snapshot_name: string } }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { snapshot_name: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { snapshot_name: string } }
            output: CCFError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/node/snapshot:create': {
      $post:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
        | { input: {}; output: CCFError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/node/state': {
      $get:
        | { input: {}; output: GetStateOut; outputFormat: 'json'; status: 200 }
        | { input: {}; output: CCFError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/node/tx': {
      $get:
        | {
            input: { query: { transaction_id: TransactionId } }
            output: GetTxStatusOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { transaction_id: TransactionId } }
            output: CCFError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/node/version': {
      $get:
        | { input: {}; output: GetVersionOut; outputFormat: 'json'; status: 200 }
        | { input: {}; output: CCFError; outputFormat: 'json'; status: 200 }
    }
  },
  '/'
>
export default routes
