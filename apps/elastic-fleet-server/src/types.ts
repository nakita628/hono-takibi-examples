type StatusResponseVersion = {
  number?: string | undefined
  build_hash?: string | undefined
  build_time?: string | undefined
}
type StatusResponse = {
  name: string
  status:
    | 'STARTING'
    | 'CONFIGURING'
    | 'HEALTHY'
    | 'DEGRADED'
    | 'FAILED'
    | 'STOPPING'
    | 'STOPPED'
    | 'UNKNOWN'
  version?: StatusResponseVersion | undefined
}
type EnrollMetadata = { user_provided: string; local: string; tags?: string[] | undefined }
type EnrollRequest = {
  id?: string | undefined
  type: 'PERMANENT'
  replace_token?: string | undefined
  enrollment_id?: string | undefined
  shared_id?: string | undefined
  metadata: EnrollMetadata
}
type EnrollResponseItem = {
  id: string
  active: boolean
  policy_id: string
  type: string
  enrolled_at: string
  user_provided_metadata: string
  local_metadata: string
  actions?: { [x: string]: unknown }[] | undefined
  access_api_key_id: string
  access_api_key: string
  status: string
  tags: string[]
}
type EnrollResponse = { action: string; item: EnrollResponseItem }
type UpgradeMetadataScheduled = { scheduled_at: string }
type UpgradeMetadataDownloading = {
  download_percent: number
  download_rate?: number | undefined
  retry_error_msg?: string | undefined
  retry_until?: string | undefined
}
type UpgradeMetadataFailed = {
  failed_state:
    | 'UPG_REQUESTED'
    | 'UPG_SCHEDULED'
    | 'UPG_DOWNLOADING'
    | 'UPG_EXTRACTING'
    | 'UPG_REPLACING'
    | 'UPG_RESTARTING'
    | 'UPG_WATCHING'
  error_msg: string
}
type UpgradeDetails = {
  target_version: string
  action_id: string
  state:
    | 'UPG_REQUESTED'
    | 'UPG_SCHEDULED'
    | 'UPG_DOWNLOADING'
    | 'UPG_EXTRACTING'
    | 'UPG_REPLACING'
    | 'UPG_RESTARTING'
    | 'UPG_WATCHING'
    | 'UPG_ROLLBACK'
    | 'UPG_FAILED'
  metadata?:
    | UpgradeMetadataScheduled
    | UpgradeMetadataDownloading
    | UpgradeMetadataFailed
    | undefined
}
type AvailableRollbacks = { version: string; valid_until: string }[]
type UpgradeInformation = { rollbacks?: AvailableRollbacks | undefined }
type CheckinRequest = {
  status: 'online' | 'error' | 'degraded' | 'starting' | 'disconnected'
  message: string
  ack_token?: string | undefined
  local_metadata?: string | undefined
  components?: string | undefined
  poll_timeout?: string | undefined
  upgrade_details?: UpgradeDetails | undefined
  agent_policy_id?: string | undefined
  policy_revision_idx?: bigint | undefined
  upgrade?: UpgradeInformation | undefined
}
type ActionPolicyReassign = { policy_id: string }
type OtelConfigService = {
  extensions?: string[] | undefined
  pipelines?:
    | {
        [x: string]: {
          exporters?: string[] | undefined
          processors?: string[] | undefined
          receivers?: string[] | undefined
        }
      }
    | undefined
}
type ActionSignature = { data: string; signature: string }
type PolicyData = {
  id?: string | undefined
  secret_paths?: string[] | undefined
  outputs?: { [x: string]: unknown } | undefined
  inputs?: { [x: string]: unknown }[] | undefined
  extensions?: { [x: string]: unknown } | undefined
  receivers?: { [x: string]: unknown } | undefined
  processors?: { [x: string]: unknown } | undefined
  connectors?: { [x: string]: unknown } | undefined
  exporters?: { [x: string]: unknown } | undefined
  service?: OtelConfigService | undefined
  revision?: number | undefined
  agent?: { [x: string]: unknown } | undefined
  signed?: ActionSignature | undefined
  output_permissions?: { [x: string]: unknown } | undefined
  fleet?: { [x: string]: unknown } | undefined
}
type ActionPolicyChange = { policy: PolicyData }
type ActionUpgrade = {
  version: string
  source_uri?: string | undefined
  sources?: string[] | undefined
  rollback?: boolean | undefined
}
type ActionUnenroll = { [x: string]: unknown }
type ActionSettings = { log_level?: 'trace' | 'debug' | 'info' | 'warning' | 'error' | undefined }
type ActionCancel = { target_id: string }
type ActionRequestDiagnostics = {
  additional_metrics?: ('CPU' | 'CONN')[] | undefined
  exclude_events_log?: boolean | undefined
}
type ActionInputAction = { [x: string]: unknown }
type ActionMigrate = { target_uri: string; enrollment_token: string; settings?: string | undefined }
type UserInfo = {
  username?: string | undefined
  password?: string | undefined
  groupname?: string | undefined
}
type ActionPrivilegeLevelChange = { unprivileged: boolean; user_info?: UserInfo | undefined }
type ActionUninstall = { [x: string]: unknown }
type ActionRestart = { [x: string]: unknown }
type Action = {
  agent_id: string
  created_at: string
  start_time?: string | undefined
  expiration?: string | undefined
  data:
    | ActionPolicyReassign
    | ActionPolicyChange
    | ActionUpgrade
    | ActionUnenroll
    | ActionSettings
    | ActionCancel
    | ActionRequestDiagnostics
    | ActionInputAction
    | ActionMigrate
    | ActionPrivilegeLevelChange
    | ActionUninstall
    | ActionRestart
  id: string
  traceparent?: string | undefined
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
  timeout?: bigint | undefined
  signed?: ActionSignature | undefined
}
type CheckinResponse = {
  ack_token?: string | undefined
  action: string
  actions?: Action[] | undefined
}
type EventType = 'STATE' | 'ERROR' | 'ACTION_RESULT' | 'ACTION'
type EventSubtype =
  | 'RUNNING'
  | 'STARTING'
  | 'IN_PROGRESS'
  | 'CONFIG'
  | 'FAILED'
  | 'STOPPING'
  | 'STOPPED'
  | 'DATA_DUMP'
  | 'ACKNOWLEDGED'
  | 'UNKNOWN'
type GenericEvent = {
  type: EventType
  subtype: EventSubtype
  agent_id: string
  action_id: string
  message: string
  timestamp: string
  error?: string | undefined
}
type UpgradeEvent = {
  type: EventType
  subtype: EventSubtype
  agent_id: string
  action_id: string
  message: string
  timestamp: string
  error?: string | undefined
  payload?: { retry: boolean; retry_attempt: number } | undefined
}
type DiagnosticsEvent = {
  type: EventType
  subtype: EventSubtype
  agent_id: string
  action_id: string
  message: string
  timestamp: string
  error?: string | undefined
  data?: { upload_id: string } | undefined
}
type InputEvent = {
  type: EventType
  subtype: EventSubtype
  agent_id: string
  action_id: string
  message: string
  timestamp: string
  error?: string | undefined
  action_input_type: string
  action_data: string
  action_response: string
  started_at: string
  completed_at: string
}
type AckRequest = { events: (GenericEvent | UpgradeEvent | DiagnosticsEvent | InputEvent)[] }
type AckResponseItem = { status: number; message?: string | undefined }
type AckResponse = {
  action: string
  errors?: boolean | undefined
  items?: AckResponseItem[] | undefined
}
type UploadBeginRequest = {
  file: {
    Compression?: string | undefined
    hash?: { sha256?: string | undefined } | undefined
    name: string
    mime_type: string
    size: bigint
  }
  action_id: string
  agent_id: string
  src: 'endpoint' | 'agent'
}
type UploadBeginResponse = { upload_id: string; chunk_size: bigint }
type UploadCompleteRequest = { transithash: { sha256: string } }
type Error = { statusCode: number; error: string; message?: string | undefined }
type AuditUnenrollRequest = {
  reason: 'uninstall' | 'orphaned' | 'key_revoked' | 'migrated'
  timestamp: string
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/status': {
      $get:
        | {
            input: {
              header: {
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            }
            output: StatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              header: {
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            }
            output: StatusResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/api/fleet/agents/enroll': {
      $post:
        | {
            input: {
              header: {
                'User-Agent': string
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            } & { json: EnrollRequest }
            output: EnrollResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'User-Agent': string
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            } & { json: EnrollRequest }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                'User-Agent': string
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            } & { json: EnrollRequest }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: {
                'User-Agent': string
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            } & { json: EnrollRequest }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              header: {
                'User-Agent': string
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            } & { json: EnrollRequest }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 408
          }
        | {
            input: {
              header: {
                'User-Agent': string
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            } & { json: EnrollRequest }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 413
          }
        | {
            input: {
              header: {
                'User-Agent': string
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            } & { json: EnrollRequest }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              header: {
                'User-Agent': string
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            } & { json: EnrollRequest }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              header: {
                'User-Agent': string
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            } & { json: EnrollRequest }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/api/fleet/agents/:id/checkin': {
      $post:
        | {
            input: { param: { id: string } } & {
              header: {
                'Accept-Encoding'?: string | undefined
                'Content-Encoding'?: 'gzip' | undefined
                'User-Agent': string
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            } & { json: CheckinRequest }
            output: CheckinResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'Accept-Encoding'?: string | undefined
                'Content-Encoding'?: 'gzip' | undefined
                'User-Agent': string
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            } & { json: CheckinRequest }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'Accept-Encoding'?: string | undefined
                'Content-Encoding'?: 'gzip' | undefined
                'User-Agent': string
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            } & { json: CheckinRequest }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'Accept-Encoding'?: string | undefined
                'Content-Encoding'?: 'gzip' | undefined
                'User-Agent': string
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            } & { json: CheckinRequest }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'Accept-Encoding'?: string | undefined
                'Content-Encoding'?: 'gzip' | undefined
                'User-Agent': string
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            } & { json: CheckinRequest }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'Accept-Encoding'?: string | undefined
                'Content-Encoding'?: 'gzip' | undefined
                'User-Agent': string
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            } & { json: CheckinRequest }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 408
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'Accept-Encoding'?: string | undefined
                'Content-Encoding'?: 'gzip' | undefined
                'User-Agent': string
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            } & { json: CheckinRequest }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'Accept-Encoding'?: string | undefined
                'Content-Encoding'?: 'gzip' | undefined
                'User-Agent': string
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            } & { json: CheckinRequest }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'Accept-Encoding'?: string | undefined
                'Content-Encoding'?: 'gzip' | undefined
                'User-Agent': string
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            } & { json: CheckinRequest }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'Accept-Encoding'?: string | undefined
                'Content-Encoding'?: 'gzip' | undefined
                'User-Agent': string
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            } & { json: CheckinRequest }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/api/fleet/agents/:id/acks': {
      $post:
        | {
            input: { param: { id: string } } & {
              header: {
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            } & { json: AckRequest }
            output: AckResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            } & { json: AckRequest }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            } & { json: AckRequest }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            } & { json: AckRequest }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            } & { json: AckRequest }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            } & { json: AckRequest }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 408
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            } & { json: AckRequest }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            } & { json: AckRequest }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            } & { json: AckRequest }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            } & { json: AckRequest }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/api/fleet/artifacts/:id/:sha2': {
      $get:
        | {
            input: { param: { id: string; sha2: string } } & {
              header: {
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string; sha2: string } } & {
              header: {
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string; sha2: string } } & {
              header: {
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string; sha2: string } } & {
              header: {
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string; sha2: string } } & {
              header: {
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string; sha2: string } } & {
              header: {
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 408
          }
        | {
            input: { param: { id: string; sha2: string } } & {
              header: {
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string; sha2: string } } & {
              header: {
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string; sha2: string } } & {
              header: {
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/api/fleet/uploads': {
      $post:
        | {
            input: {
              header: {
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            } & { json: UploadBeginRequest }
            output: UploadBeginResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            } & { json: UploadBeginRequest }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            } & { json: UploadBeginRequest }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: {
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            } & { json: UploadBeginRequest }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              header: {
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            } & { json: UploadBeginRequest }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 408
          }
        | {
            input: {
              header: {
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            } & { json: UploadBeginRequest }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 413
          }
        | {
            input: {
              header: {
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            } & { json: UploadBeginRequest }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              header: {
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            } & { json: UploadBeginRequest }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              header: {
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            } & { json: UploadBeginRequest }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/api/fleet/uploads/:id/:chunkNum': {
      $put:
        | {
            input: { param: { id: string; chunkNum: number } } & {
              header: {
                'X-Chunk-SHA2': string
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string; chunkNum: number } } & {
              header: {
                'X-Chunk-SHA2': string
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string; chunkNum: number } } & {
              header: {
                'X-Chunk-SHA2': string
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string; chunkNum: number } } & {
              header: {
                'X-Chunk-SHA2': string
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string; chunkNum: number } } & {
              header: {
                'X-Chunk-SHA2': string
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 408
          }
        | {
            input: { param: { id: string; chunkNum: number } } & {
              header: {
                'X-Chunk-SHA2': string
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { id: string; chunkNum: number } } & {
              header: {
                'X-Chunk-SHA2': string
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string; chunkNum: number } } & {
              header: {
                'X-Chunk-SHA2': string
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string; chunkNum: number } } & {
              header: {
                'X-Chunk-SHA2': string
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/api/fleet/uploads/:id': {
      $post:
        | {
            input: { param: { id: string } } & {
              header: {
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            } & { json: UploadCompleteRequest }
            output: { status?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            } & { json: UploadCompleteRequest }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            } & { json: UploadCompleteRequest }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            } & { json: UploadCompleteRequest }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            } & { json: UploadCompleteRequest }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 408
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            } & { json: UploadCompleteRequest }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            } & { json: UploadCompleteRequest }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/api/fleet/file/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { source?: string | undefined } } & {
              header: {
                'elastic-api-version'?: string | undefined
                'X-Request-Id'?: string | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { source?: string | undefined } } & {
              header: {
                'elastic-api-version'?: string | undefined
                'X-Request-Id'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 206
          }
        | {
            input: { param: { id: string } } & { query: { source?: string | undefined } } & {
              header: {
                'elastic-api-version'?: string | undefined
                'X-Request-Id'?: string | undefined
              }
            }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { source?: string | undefined } } & {
              header: {
                'elastic-api-version'?: string | undefined
                'X-Request-Id'?: string | undefined
              }
            }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { source?: string | undefined } } & {
              header: {
                'elastic-api-version'?: string | undefined
                'X-Request-Id'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { source?: string | undefined } } & {
              header: {
                'elastic-api-version'?: string | undefined
                'X-Request-Id'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { source?: string | undefined } } & {
              header: {
                'elastic-api-version'?: string | undefined
                'X-Request-Id'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 416
          }
        | {
            input: { param: { id: string } } & { query: { source?: string | undefined } } & {
              header: {
                'elastic-api-version'?: string | undefined
                'X-Request-Id'?: string | undefined
              }
            }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & { query: { source?: string | undefined } } & {
              header: {
                'elastic-api-version'?: string | undefined
                'X-Request-Id'?: string | undefined
              }
            }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & { query: { source?: string | undefined } } & {
              header: {
                'elastic-api-version'?: string | undefined
                'X-Request-Id'?: string | undefined
              }
            }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/api/agents/upgrades/:major.{minor}.{patch}/pgp-public-key': {
      $get:
        | {
            input: { param: { major: number; minor: number; patch: number } } & {
              header: {
                'elastic-api-version'?: string | undefined
                'X-Request-Id'?: string | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { major: number; minor: number; patch: number } } & {
              header: {
                'elastic-api-version'?: string | undefined
                'X-Request-Id'?: string | undefined
              }
            }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { major: number; minor: number; patch: number } } & {
              header: {
                'elastic-api-version'?: string | undefined
                'X-Request-Id'?: string | undefined
              }
            }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { major: number; minor: number; patch: number } } & {
              header: {
                'elastic-api-version'?: string | undefined
                'X-Request-Id'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { major: number; minor: number; patch: number } } & {
              header: {
                'elastic-api-version'?: string | undefined
                'X-Request-Id'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 501
          }
    }
  } & {
    '/api/fleet/agents/:id/audit/unenroll': {
      $post:
        | {
            input: { param: { id: string } } & {
              header: {
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            } & { json: AuditUnenrollRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            } & { json: AuditUnenrollRequest }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            } & { json: AuditUnenrollRequest }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            } & { json: AuditUnenrollRequest }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            } & { json: AuditUnenrollRequest }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            } & { json: AuditUnenrollRequest }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            } & { json: AuditUnenrollRequest }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'X-Request-Id'?: string | undefined
                'elastic-api-version'?: string | undefined
              }
            } & { json: AuditUnenrollRequest }
            output: { statusCode: number; error: string; message?: string | undefined }
            outputFormat: 'json'
            status: 503
          }
    }
  },
  '/'
>
export default routes
