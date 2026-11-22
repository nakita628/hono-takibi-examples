type Operation = {
  id?: string | undefined
  reason?:
    | 'incorrect'
    | 'unknown'
    | 'unavailable'
    | 'forbidden'
    | 'busy'
    | 'fault'
    | 'partial'
    | 'not-found'
    | 'interrupted'
    | 'unsupported'
    | 'conflict'
    | undefined
  reference?:
    | { id?: string | undefined; link?: string | undefined; command?: string | undefined }
    | undefined
  message?: string | undefined
  state?: 'failure' | 'pending' | 'success' | 'timeout' | undefined
}
type LoadBalancerServiceHealthcheck = {
  mode?: 'tcp' | 'http' | 'https' | undefined
  interval?: bigint | undefined
  uri?: string | undefined
  port?: bigint | undefined
  timeout?: bigint | undefined
  retries?: bigint | undefined
  'tls-sni'?: string | undefined
}
type AntiAffinityGroupRef = { id?: string | undefined }
type PublicIpAssignment = 'inet4' | 'dual' | 'none'
type Labels = { [x: string]: string }
type SecurityGroupRef = { id?: string | undefined }
type ElasticIpRef = { id?: string | undefined }
type InstanceTypeRef = { id?: string | undefined }
type PrivateNetworkRef = { id?: string | undefined }
type TemplateRef = { id?: string | undefined }
type SshKeyRef = { name?: string | undefined }
type Manager = { id?: string | undefined; type?: 'sks-nodepool' | 'instance-pool' | undefined }
type InstanceRef = { id?: string | undefined }
type DeployTargetRef = { id?: string | undefined }
type InstancePool = {
  'application-consistent-snapshot-enabled'?: boolean | undefined
  'anti-affinity-groups'?: AntiAffinityGroupRef[] | undefined
  description?: string | undefined
  'public-ip-assignment'?: PublicIpAssignment | undefined
  labels?: Labels | undefined
  'security-groups'?: SecurityGroupRef[] | undefined
  'elastic-ips'?: ElasticIpRef[] | undefined
  name?: string | undefined
  'instance-type'?: InstanceTypeRef | undefined
  'min-available'?: bigint | undefined
  'private-networks'?: PrivateNetworkRef[] | undefined
  template?: TemplateRef | undefined
  state?:
    | 'scaling-up'
    | 'scaling-down'
    | 'destroying'
    | 'creating'
    | 'suspended'
    | 'running'
    | 'updating'
    | undefined
  size?: bigint | undefined
  'ssh-key'?: SshKeyRef | undefined
  'instance-prefix'?: string | undefined
  'user-data'?: string | undefined
  manager?: Manager | undefined
  instances?: InstanceRef[] | undefined
  'deploy-target'?: DeployTargetRef | undefined
  'ipv6-enabled'?: boolean | undefined
  id?: string | undefined
  'disk-size'?: bigint | undefined
  'ssh-keys'?: SshKeyRef[] | undefined
}
type LoadBalancerServerStatus = {
  'public-ip'?: string | undefined
  status?: 'failure' | 'success' | undefined
}
type LoadBalancerService = {
  description?: string | undefined
  protocol?: 'tcp' | 'udp' | undefined
  name?: string | undefined
  state?: 'creating' | 'deleting' | 'running' | 'updating' | 'error' | undefined
  'target-port'?: bigint | undefined
  port?: bigint | undefined
  'instance-pool'?: InstancePool | undefined
  strategy?: 'round-robin' | 'maglev-hash' | 'source-hash' | undefined
  healthcheck?: LoadBalancerServiceHealthcheck | undefined
  id?: string | undefined
  'healthcheck-status'?: LoadBalancerServerStatus[] | undefined
}
type EnumExternalEndpointTypes =
  | 'prometheus'
  | 'opensearch'
  | 'rsyslog'
  | 'datadog'
  | 'elasticsearch'
type DbaasEndpointOpensearchOptionalFields = {
  url?: string | undefined
  'index-prefix'?: string | undefined
  'index-days-max'?: bigint | undefined
  timeout?: bigint | undefined
}
type DbaasEndpointOpensearchOutput = {
  name?: string | undefined
  type?: EnumExternalEndpointTypes | undefined
  id?: string | undefined
  settings?: DbaasEndpointOpensearchOptionalFields | undefined
}
type DbaasEndpointOpensearchInputUpdate = {
  settings?:
    | {
        ca?: string | undefined
        url?: string | undefined
        'index-prefix'?: string | undefined
        'index-days-max'?: bigint | undefined
        timeout?: bigint | undefined
      }
    | undefined
}
type DbaasServiceName = string
type EnumOpensearchRulePermission = 'admin' | 'read' | 'deny' | 'readwrite' | 'write'
type DbaasUserUsername = string
type DbaasOpensearchAclConfig = {
  acls?:
    | {
        rules?:
          | { index: string; permission?: EnumOpensearchRulePermission | undefined }[]
          | undefined
        username?: DbaasUserUsername | undefined
      }[]
    | undefined
  'acl-enabled'?: boolean | undefined
  'extended-acl-enabled'?: boolean | undefined
}
type DomainName = string
type ReverseDnsRecord = { 'domain-name'?: DomainName | undefined }
type ZoneName =
  | 'ch-dk-2'
  | 'de-muc-1'
  | 'ch-gva-2'
  | 'at-vie-1'
  | 'de-fra-1'
  | 'bg-sof-1'
  | 'at-vie-2'
  | 'hr-zag-1'
type InstanceType = {
  id?: string | undefined
  size?:
    | 'large'
    | 'huge'
    | 'jumbo'
    | 'medium'
    | 'mega'
    | 'small'
    | 'extra-large'
    | 'titan48c'
    | 'titan'
    | 'micro'
    | 'colossus'
    | 'tiny'
    | undefined
  family?:
    | 'gpu3'
    | 'gpua30'
    | 'gpu3080ti'
    | 'gpu2'
    | 'gpu'
    | 'memory'
    | 'gpua5000'
    | 'gpub300'
    | 'gpurtx6000pro'
    | 'storage'
    | 'standard'
    | 'colossus'
    | 'cpu'
    | undefined
  cpus?: bigint | undefined
  gpus?: bigint | undefined
  authorized?: boolean | undefined
  memory?: bigint | undefined
  zones?: ZoneName[] | undefined
}
type Template = {
  'application-consistent-snapshot-enabled'?: boolean | undefined
  maintainer?: string | undefined
  description?: string | undefined
  'ssh-key-enabled'?: boolean | undefined
  family?: string | undefined
  name?: string | undefined
  'default-user'?: string | undefined
  size?: bigint | undefined
  'password-enabled'?: boolean | undefined
  build?: string | undefined
  checksum?: string | undefined
  'boot-mode'?: 'legacy' | 'uefi' | undefined
  id?: string | undefined
  zones?: ZoneName[] | undefined
  url?: string | undefined
  version?: string | undefined
  'created-at'?: string | undefined
  visibility?: 'private' | 'public' | undefined
}
type InstanceState =
  | 'expunging'
  | 'starting'
  | 'destroying'
  | 'running'
  | 'stopping'
  | 'stopped'
  | 'migrating'
  | 'error'
  | 'destroyed'
type SshKey = { name?: string | undefined; fingerprint?: string | undefined }
type SnapshotRef = { id?: string | undefined }
type Instance = {
  'application-consistent-snapshot-enabled'?: boolean | undefined
  'anti-affinity-groups'?: AntiAffinityGroupRef[] | undefined
  'public-ip-assignment'?: PublicIpAssignment | undefined
  labels?: Labels | undefined
  'security-groups'?: SecurityGroupRef[] | undefined
  'elastic-ips'?: ElasticIpRef[] | undefined
  name?: string | undefined
  'instance-type'?: InstanceType | undefined
  'private-networks'?: { id?: string | undefined; 'mac-address'?: string | undefined }[] | undefined
  template?: Template | undefined
  state?: InstanceState | undefined
  'secureboot-enabled'?: boolean | undefined
  'ssh-key'?: SshKey | undefined
  'user-data'?: string | undefined
  'mac-address'?: string | undefined
  manager?: Manager | undefined
  'tpm-enabled'?: boolean | undefined
  'deploy-target'?: DeployTargetRef | undefined
  'ipv6-address'?: string | undefined
  id?: string | undefined
  snapshots?: SnapshotRef[] | undefined
  'disk-size'?: bigint | undefined
  'disk-encrypted'?: boolean | undefined
  'ssh-keys'?: SshKey[] | undefined
  'created-at'?: string | undefined
  'public-ip'?: string | undefined
}
type AntiAffinityGroup = {
  id?: string | undefined
  name?: string | undefined
  description?: string | undefined
  instances?: Instance[] | undefined
}
type IamServicePolicyRule = {
  action?: 'allow' | 'deny' | undefined
  expression?: string | undefined
  resources?: string[] | undefined
}
type IamAssumeRolePolicy = { rules?: IamServicePolicyRule[] | undefined }
type IamServicePolicy = {
  type?: 'rules' | 'allow' | 'deny' | undefined
  rules?: IamServicePolicyRule[] | undefined
}
type IamPolicy = {
  'default-service-strategy': 'allow' | 'deny'
  services: { [x: string]: IamServicePolicy }
}
type IamRole = {
  description?: string | undefined
  labels?: Labels | undefined
  permissions?: ('bypass-governance-retention' | 'reset-iam-organization-policy')[] | undefined
  'assume-role-policy'?: IamAssumeRolePolicy | undefined
  editable?: boolean | undefined
  name?: string | undefined
  'max-session-ttl'?: bigint | undefined
  policy?: IamPolicy | undefined
  id?: string | undefined
}
type User = {
  sso?: boolean | undefined
  'two-factor-authentication'?: boolean | undefined
  email: string
  id?: string | undefined
  role: IamRole
  pending?: boolean | undefined
}
type IamApiKey = {
  name?: string | undefined
  key?: string | undefined
  'role-id'?: string | undefined
}
type Event = {
  'iam-user'?: User | undefined
  'request-id'?: string | undefined
  'iam-role'?: IamRole | undefined
  zone?: string | undefined
  'get-params'?: { [x: string]: unknown } | undefined
  'body-params'?: { [x: string]: unknown } | undefined
  status?: bigint | undefined
  'source-ip'?: string | undefined
  'iam-api-key'?: IamApiKey | undefined
  uri?: string | undefined
  'elapsed-ms'?: bigint | undefined
  timestamp?: string | undefined
  'path-params'?: { [x: string]: unknown } | undefined
  handler?: string | undefined
  message?: string | undefined
}
type KeyRotationConfig = {
  'manual-count': number
  automatic: boolean
  'rotation-period': number
  'next-at': string
}
type DisableKmsKeyRotationResponse = { rotation: KeyRotationConfig }
type ErrorResponse = { type: string; title: string; status: number; detail: string }
type DbaasPgTargetVersions = '14' | '17' | '15' | '18' | '13' | '16'
type DbaasTask = {
  id?: string | undefined
  'create-time'?: string | undefined
  result?: string | undefined
  'result-codes'?: { code?: string | undefined; dbname?: string | undefined }[] | undefined
  success?: boolean | undefined
  'task-type'?: string | undefined
}
type DbaasMysqlUserPassword = string
type EnumMysqlAuthenticationPlugin = 'caching_sha2_password' | 'mysql_native_password'
type InferenceEngineParameterEntry = {
  description?: string | undefined
  'allowed-values'?: string[] | undefined
  default?: string | undefined
  name?: string | undefined
  section?: string | undefined
  type?: string | undefined
  flags?: string[] | undefined
}
type GetInferenceEngineHelpResponse = { parameters: InferenceEngineParameterEntry[] }
type LoadBalancer = {
  id?: string | undefined
  description?: string | undefined
  name?: string | undefined
  state?: 'creating' | 'migrated' | 'deleting' | 'running' | 'migrating' | 'error' | undefined
  'created-at'?: string | undefined
  ip?: string | undefined
  services?: LoadBalancerService[] | undefined
  labels?: Labels | undefined
}
type SecurityGroupResource = {
  id?: string | undefined
  name?: string | undefined
  visibility?: 'private' | 'public' | undefined
}
type SecurityGroupRule = {
  description?: string | undefined
  'start-port'?: bigint | undefined
  protocol?: 'tcp' | 'esp' | 'icmp' | 'udp' | 'gre' | 'ah' | 'ipip' | 'icmpv6' | undefined
  icmp?: { code?: bigint | undefined; type?: bigint | undefined } | undefined
  'end-port'?: bigint | undefined
  'security-group'?: SecurityGroupResource | undefined
  id?: string | undefined
  network?: string | undefined
  'flow-direction'?: 'ingress' | 'egress' | undefined
}
type SecurityGroup = {
  id?: string | undefined
  name?: string | undefined
  description?: string | undefined
  'external-sources'?: string[] | undefined
  rules?: SecurityGroupRule[] | undefined
}
type DbaasPgPoolName = string
type DbaasDatabaseName = string
type EnumPgPoolMode = 'transaction' | 'statement' | 'session'
type DbaasPgPoolSize = bigint
type DbaasPgPoolUsername = string
type JsonSchemaMysql = {
  net_write_timeout?: number | undefined
  internal_tmp_mem_storage_engine?: 'TempTable' | 'MEMORY' | undefined
  sql_mode?: string | undefined
  information_schema_stats_expiry?: number | undefined
  sort_buffer_size?: number | undefined
  innodb_thread_concurrency?: number | undefined
  innodb_write_io_threads?: number | undefined
  innodb_ft_min_token_size?: number | undefined
  innodb_change_buffer_max_size?: number | undefined
  innodb_flush_neighbors?: number | undefined
  tmp_table_size?: number | undefined
  slow_query_log?: boolean | undefined
  connect_timeout?: number | undefined
  log_output?: 'INSIGHTS' | 'INSIGHTS,TABLE' | 'NONE' | 'TABLE' | undefined
  net_read_timeout?: number | undefined
  innodb_lock_wait_timeout?: number | undefined
  wait_timeout?: number | undefined
  innodb_rollback_on_timeout?: boolean | undefined
  group_concat_max_len?: number | undefined
  net_buffer_length?: number | undefined
  innodb_print_all_deadlocks?: boolean | undefined
  innodb_online_alter_log_max_size?: number | undefined
  interactive_timeout?: number | undefined
  innodb_log_buffer_size?: number | undefined
  max_allowed_packet?: number | undefined
  max_heap_table_size?: number | undefined
  innodb_ft_server_stopword_table?: (string | null) | undefined
  innodb_read_io_threads?: number | undefined
  sql_require_primary_key?: boolean | undefined
  default_time_zone?: string | undefined
  long_query_time?: number | undefined
}
type EnumMigrationMethod = 'dump' | 'replication'
type DbaasIntegration = {
  description?: string | undefined
  settings?: { [x: string]: unknown } | undefined
  type?: string | undefined
  'is-enabled'?: boolean | undefined
  source?: string | undefined
  'is-active'?: boolean | undefined
  status?: string | undefined
  id?: string | undefined
  dest?: string | undefined
}
type DbaasNodeStateProgressUpdate = {
  completed: boolean
  current?: bigint | undefined
  max?: bigint | undefined
  min?: bigint | undefined
  phase: 'stream' | 'basebackup' | 'prepare' | 'finalize'
  unit?: string | undefined
}
type DbaasNodeState = {
  name: string
  'progress-updates'?: DbaasNodeStateProgressUpdate[] | undefined
  role?: 'standby' | 'master' | 'read-replica' | undefined
  state: 'leaving' | 'running' | 'syncing_data' | 'setting_up_vm' | 'unknown'
}
type DbaasServiceTypeName = string
type EnumServiceState = 'running' | 'rebuilding' | 'rebalancing' | 'poweroff'
type DbaasMysqlDatabaseName = string
type DbaasServiceBackup = { 'backup-name': string; 'backup-time': string; 'data-size': bigint }
type DbaasServiceNotification = {
  level: 'warning' | 'notice'
  message: string
  type: 'service_powered_off_removal' | 'service_end_of_life'
  metadata: { [x: string]: unknown }
}
type EnumComponentRoute = 'dynamic' | 'private' | 'public' | 'privatelink'
type EnumComponentUsage = 'primary' | 'replica'
type DbaasServiceUpdate = {
  description?: string | undefined
  deadline?: string | undefined
  'start-after'?: string | undefined
  'start-at'?: string | undefined
}
type DbaasServiceMaintenance = {
  dow: 'saturday' | 'tuesday' | 'never' | 'wednesday' | 'sunday' | 'friday' | 'monday' | 'thursday'
  time: string
  updates: DbaasServiceUpdate[]
}
type DbaasServiceMysql = {
  'updated-at'?: string | undefined
  'node-count'?: bigint | undefined
  'connection-info'?:
    | {
        uri?: string[] | undefined
        params?: { [x: string]: string }[] | undefined
        standby?: string[] | undefined
      }
    | undefined
  'backup-schedule'?:
    | { 'backup-hour'?: bigint | undefined; 'backup-minute'?: bigint | undefined }
    | undefined
  'node-cpu-count'?: bigint | undefined
  'prometheus-uri': { host?: string | undefined; port?: bigint | undefined }
  integrations?: DbaasIntegration[] | undefined
  zone?: string | undefined
  'node-states'?: DbaasNodeState[] | undefined
  name: DbaasServiceName
  type: DbaasServiceTypeName
  state?: EnumServiceState | undefined
  databases?: DbaasMysqlDatabaseName[] | undefined
  'ip-filter'?: string[] | undefined
  backups?: DbaasServiceBackup[] | undefined
  'termination-protection'?: boolean | undefined
  notifications?: DbaasServiceNotification[] | undefined
  components?:
    | {
        component: string
        host: string
        port: bigint
        route: EnumComponentRoute
        usage: EnumComponentUsage
      }[]
    | undefined
  'mysql-settings'?: JsonSchemaMysql | undefined
  maintenance?: DbaasServiceMaintenance | undefined
  'disk-size'?: bigint | undefined
  'node-memory'?: bigint | undefined
  uri?: string | undefined
  'uri-params'?: { [x: string]: unknown } | undefined
  version?: string | undefined
  'created-at'?: string | undefined
  plan: string
  users?:
    | {
        type?: string | undefined
        username?: string | undefined
        password?: string | undefined
        authentication?: string | undefined
      }[]
    | undefined
  'binlog-retention-period'?: bigint | undefined
}
type RevisionStamp = { at: string; seq: number }
type ReplicaFailure = { 'attempted-watermark': number; error: string; 'failed-at': string }
type ReplicaState = {
  zone: string
  'last-applied-watermark': number
  'last-failure'?: ReplicaFailure | undefined
}
type KeyMaterial = { version: number; 'created-at': string; automatic: boolean }
type GetKmsKeyResponse = {
  description?: string | undefined
  rotation: KeyRotationConfig
  revision: RevisionStamp
  'delete-at'?: string | undefined
  name: string
  'multi-zone': boolean
  source: 'exoscale-kms'
  usage: string
  'replicas-status'?: ReplicaState[] | undefined
  status: 'enabled' | 'disabled' | 'pending-deletion'
  'status-since': string
  id: string
  replicas?: string[] | undefined
  material: KeyMaterial
  'origin-zone': string
  'created-at': string
}
type DbaasEndpointElasticsearchOptionalFields = {
  url?: string | undefined
  'index-prefix'?: string | undefined
  'index-days-max'?: bigint | undefined
  timeout?: bigint | undefined
}
type DbaasEndpointElasticsearchOutput = {
  name?: string | undefined
  type?: EnumExternalEndpointTypes | undefined
  id?: string | undefined
  settings?: DbaasEndpointElasticsearchOptionalFields | undefined
}
type DbaasEndpointElasticsearchInputUpdate = {
  settings?:
    | {
        ca?: string | undefined
        url?: string | undefined
        'index-prefix'?: string | undefined
        'index-days-max'?: bigint | undefined
        timeout?: bigint | undefined
      }
    | undefined
}
type CreateModelRequest = { name: string; 'huggingface-token'?: string | undefined }
type ListModelsResponseEntry = {
  'updated-at': string
  name: string
  state: 'ready' | 'creating' | 'downloading' | 'error' | 'created'
  id: string
  'model-size': bigint
  'created-at': string
}
type ListModelsResponse = { models: ListModelsResponseEntry[] }
type DbaasBackupConfig = {
  'max-count'?: bigint | undefined
  interval?: bigint | undefined
  'recovery-mode'?: string | undefined
  'frequent-interval-minutes'?: bigint | undefined
  'frequent-oldest-age-minutes'?: bigint | undefined
  'infrequent-interval-minutes'?: bigint | undefined
  'infrequent-oldest-age-minutes'?: bigint | undefined
}
type DbaasPlan = {
  'node-count'?: bigint | undefined
  'backup-config'?: DbaasBackupConfig | undefined
  'node-cpu-count'?: bigint | undefined
  family?: string | undefined
  'disk-space'?: bigint | undefined
  authorized?: boolean | undefined
  name?: string | undefined
  'max-memory-percent'?: bigint | undefined
  zones?: string[] | undefined
  'node-memory'?: bigint | undefined
}
type DbaasServiceType = {
  name?: DbaasServiceTypeName | undefined
  'available-versions'?: string[] | undefined
  'default-version'?: string | undefined
  description?: string | undefined
  plans?: DbaasPlan[] | undefined
}
type ScaleDeploymentRequest = { replicas: bigint }
type JsonSchemaClickhouse = {
  server_settings?: { vector_similarity_index_cache_size?: number | undefined } | undefined
  tiered_storage_move_factor?: number | undefined
}
type DbaasClickhouseUser = {
  username: DbaasUserUsername
  uuid?: string | undefined
  required?: boolean | undefined
}
type DbaasServiceClickhouse = {
  'updated-at'?: string | undefined
  'node-count'?: bigint | undefined
  'connection-info'?:
    | {
        uri?: string[] | undefined
        'mysql-uri'?: string | undefined
        'arrowflight-uri'?: string | undefined
      }
    | undefined
  'node-cpu-count'?: bigint | undefined
  'prometheus-uri': { host?: string | undefined; port?: bigint | undefined }
  integrations?: DbaasIntegration[] | undefined
  zone?: string | undefined
  'node-states'?: DbaasNodeState[] | undefined
  name: DbaasServiceName
  type: DbaasServiceTypeName
  state?: EnumServiceState | undefined
  'ip-filter'?: string[] | undefined
  backups?: DbaasServiceBackup[] | undefined
  'termination-protection'?: boolean | undefined
  'clickhouse-settings'?: JsonSchemaClickhouse | undefined
  notifications?: DbaasServiceNotification[] | undefined
  components?:
    | {
        component: string
        host: string
        port: bigint
        route: EnumComponentRoute
        ssl?: boolean | undefined
        usage: EnumComponentUsage
      }[]
    | undefined
  maintenance?: DbaasServiceMaintenance | undefined
  'disk-size'?: bigint | undefined
  'node-memory'?: bigint | undefined
  uri?: string | undefined
  'uri-params'?: { [x: string]: unknown } | undefined
  version?: string | undefined
  'created-at'?: string | undefined
  plan: string
  users?: DbaasClickhouseUser[] | undefined
}
type InstancePassword = { password?: string | undefined }
type DbaasServiceCommon = {
  'updated-at'?: string | undefined
  'node-count'?: bigint | undefined
  'node-cpu-count'?: bigint | undefined
  integrations?: DbaasIntegration[] | undefined
  zone?: string | undefined
  name: DbaasServiceName
  type: DbaasServiceTypeName
  state?: EnumServiceState | undefined
  'termination-protection'?: boolean | undefined
  notifications?: DbaasServiceNotification[] | undefined
  'disk-size'?: bigint | undefined
  'node-memory'?: bigint | undefined
  'created-at'?: string | undefined
  plan: string
}
type ElasticIpHealthcheck = {
  'strikes-ok'?: bigint | undefined
  'tls-skip-verify'?: boolean | undefined
  'tls-sni'?: string | undefined
  'strikes-fail'?: bigint | undefined
  mode: 'tcp' | 'http' | 'https'
  port: bigint
  uri?: string | undefined
  interval?: bigint | undefined
  timeout?: bigint | undefined
}
type ElasticIp = {
  id?: string | undefined
  ip?: string | undefined
  addressfamily?: 'inet4' | 'inet6' | undefined
  cidr?: string | undefined
  description?: string | undefined
  healthcheck?: ElasticIpHealthcheck | undefined
  labels?: Labels | undefined
}
type Zone = {
  name?: ZoneName | undefined
  'api-endpoint'?: string | undefined
  'sos-endpoint'?: string | undefined
}
type EnumRsyslogFormat = 'custom' | 'rfc3164' | 'rfc5424'
type DbaasEndpointRsyslogInputCreate = {
  settings?:
    | {
        format: EnumRsyslogFormat
        key?: string | undefined
        logline?: string | undefined
        server: string
        ca?: string | undefined
        cert?: string | undefined
        tls: boolean
        port: bigint
        sd?: string | undefined
        'max-message-size'?: bigint | undefined
      }
    | undefined
}
type SksKubeconfigRequest = { ttl?: bigint | undefined; user: string; groups: string[] }
type DnsDomainRecord = {
  'updated-at'?: string | undefined
  content?: string | undefined
  name?: string | undefined
  type?:
    | 'NS'
    | 'CAA'
    | 'NAPTR'
    | 'POOL'
    | 'A'
    | 'HINFO'
    | 'CNAME'
    | 'SOA'
    | 'SSHFP'
    | 'SRV'
    | 'AAAA'
    | 'MX'
    | 'TXT'
    | 'ALIAS'
    | 'URL'
    | 'SPF'
    | undefined
  ttl?: bigint | undefined
  priority?: bigint | undefined
  id?: string | undefined
  'created-at'?: string | undefined
  'system-record'?: boolean | undefined
}
type ImpactValueWithUnit = { unit: string; value: number }
type ImpactErrorResponse = { title: string; status: number; detail: string }
type DeployTarget = {
  id: string
  name?: string | undefined
  type?: 'edge' | 'dedicated' | undefined
  description?: string | undefined
}
type InferenceEngineVersion =
  | '0.12.0'
  | '0.15.1'
  | '0.16.0'
  | '0.17.0'
  | '0.18.0'
  | '0.18.1'
  | '0.19.0'
  | '0.19.1'
  | '0.20.0'
  | '0.20.1'
  | '0.20.2'
  | '0.21.0'
  | '0.22.0'
  | '0.22.1'
  | '0.23.0'
  | '0.24.0'
  | '0.25.0'
  | '0.25.1'
  | '0.26.0'
type ModelRef = { name?: string | undefined; id?: string | undefined }
type CreateDeploymentRequest = {
  'gpu-count': bigint
  'inference-engine-version'?: InferenceEngineVersion | undefined
  name: string
  'gpu-type': string
  'product-name'?: string | undefined
  replicas: bigint
  'inference-engine-parameters'?: string[] | undefined
  model: ModelRef
}
type ListDeploymentsResponseEntry = {
  'gpu-count'?: bigint | undefined
  'updated-at'?: string | undefined
  'deployment-url': string
  'service-level'?: string | undefined
  name: string
  state: 'ready' | 'creating' | 'preparing' | 'error' | 'deploying' | 'scaling' | 'updating'
  'gpu-type'?: string | undefined
  id?: string | undefined
  replicas?: bigint | undefined
  'created-at'?: string | undefined
  visibility: 'public' | 'private'
  model: ModelRef
}
type ListDeploymentsResponse = { deployments: ListDeploymentsResponseEntry[] }
type LiveBalance = { balance?: number | undefined; currency?: string | undefined }
type RateLimited = { error?: string | undefined; retry_after?: number | undefined }
type DbaasPgDatabaseName = string
type DbaasClickhouseRolePrivilege = {
  name: DbaasUserUsername
  database?: string | undefined
  table?: string | undefined
  'grant-option'?: boolean | undefined
  column?: string | undefined
  'is-partial-revoke'?: boolean | undefined
}
type DbaasClickhouseGrantedRole = {
  name: string
  uuid?: string | undefined
  'is-default'?: boolean | undefined
  'with-admin-option'?: boolean | undefined
}
type DbaasClickhouseRole = {
  name: DbaasUserUsername
  uuid?: string | undefined
  privileges?: DbaasClickhouseRolePrivilege[] | undefined
  'granted-roles'?: DbaasClickhouseGrantedRole[] | undefined
}
type DbaasClickhouseRoles = { roles?: DbaasClickhouseRole[] | undefined }
type SuccessResponse = { status: 'success' | 'target-registered' | 'already-applied' }
type JsonSchemaSchemaRegistry = {
  leader_eligibility?: boolean | undefined
  topic_name?: string | undefined
}
type JsonSchemaKafkaRest = {
  producer_compression_type?: 'gzip' | 'snappy' | 'lz4' | 'zstd' | 'none' | undefined
  name_strategy_validation?: boolean | undefined
  name_strategy?: 'topic_name' | 'record_name' | 'topic_record_name' | undefined
  consumer_enable_auto_commit?: boolean | undefined
  producer_acks?: 'all' | '-1' | '0' | '1' | undefined
  consumer_request_max_bytes?: number | undefined
  producer_max_request_size?: number | undefined
  simpleconsumer_pool_size_max?: number | undefined
  producer_linger_ms?: number | undefined
  consumer_request_timeout_ms?: 1000 | 15000 | 30000 | undefined
}
type JsonSchemaKafkaConnect = {
  producer_buffer_memory?: number | undefined
  consumer_max_poll_interval_ms?: number | undefined
  producer_compression_type?: 'gzip' | 'snappy' | 'lz4' | 'zstd' | 'none' | undefined
  connector_client_config_override_policy?: 'None' | 'All' | undefined
  offset_flush_interval_ms?: number | undefined
  scheduled_rebalance_max_delay_ms?: number | undefined
  consumer_fetch_max_bytes?: number | undefined
  consumer_max_partition_fetch_bytes?: number | undefined
  offset_flush_timeout_ms?: number | undefined
  consumer_auto_offset_reset?: 'earliest' | 'latest' | undefined
  producer_max_request_size?: number | undefined
  producer_batch_size?: number | undefined
  session_timeout_ms?: number | undefined
  producer_linger_ms?: number | undefined
  consumer_isolation_level?: 'read_uncommitted' | 'read_committed' | undefined
  consumer_max_poll_records?: number | undefined
}
type EnumKafkaAuthMethod = 'certificate' | 'sasl'
type JsonSchemaKafka = {
  sasl_oauthbearer_expected_audience?: string | undefined
  group_max_session_timeout_ms?: number | undefined
  log_flush_interval_messages?: number | undefined
  sasl_oauthbearer_jwks_endpoint_url?: string | undefined
  max_connections_per_ip?: number | undefined
  sasl_oauthbearer_expected_issuer?: string | undefined
  log_index_size_max_bytes?: number | undefined
  auto_create_topics_enable?: boolean | undefined
  log_index_interval_bytes?: number | undefined
  replica_fetch_max_bytes?: number | undefined
  num_partitions?: number | undefined
  transaction_state_log_segment_bytes?: number | undefined
  replica_fetch_response_max_bytes?: number | undefined
  log_message_timestamp_type?: 'CreateTime' | 'LogAppendTime' | undefined
  connections_max_idle_ms?: number | undefined
  log_flush_interval_ms?: number | undefined
  log_preallocate?: boolean | undefined
  log_segment_delete_delay_ms?: number | undefined
  message_max_bytes?: number | undefined
  group_initial_rebalance_delay_ms?: number | undefined
  log_local_retention_bytes?: number | undefined
  log_roll_jitter_ms?: number | undefined
  transaction_remove_expired_transaction_cleanup_interval_ms?: number | undefined
  transaction_partition_verification_enable?: boolean | undefined
  default_replication_factor?: number | undefined
  log_roll_ms?: number | undefined
  producer_purgatory_purge_interval_requests?: number | undefined
  log_retention_bytes?: number | undefined
  min_insync_replicas?: number | undefined
  compression_type?: 'gzip' | 'snappy' | 'lz4' | 'zstd' | 'uncompressed' | 'producer' | undefined
  log_message_timestamp_difference_max_ms?: number | undefined
  log_local_retention_ms?: number | undefined
  log_message_downconversion_enable?: boolean | undefined
  sasl_oauthbearer_sub_claim_name?: string | undefined
  max_incremental_fetch_session_cache_slots?: number | undefined
  log_retention_hours?: number | undefined
  group_min_session_timeout_ms?: number | undefined
  socket_request_max_bytes?: number | undefined
  log_segment_bytes?: number | undefined
  'log-cleanup-and-compaction'?:
    | {
        log_cleaner_delete_retention_ms?: number | undefined
        log_cleaner_max_compaction_lag_ms?: number | undefined
        log_cleaner_min_cleanable_ratio?: number | undefined
        log_cleaner_min_compaction_lag_ms?: number | undefined
        log_cleanup_policy?: 'delete' | 'compact' | 'compact,delete' | undefined
      }
    | undefined
  offsets_retention_minutes?: number | undefined
  log_retention_ms?: number | undefined
}
type DbaasServiceKafka = {
  'updated-at'?: string | undefined
  'authentication-methods'?:
    | { certificate?: boolean | undefined; sasl?: boolean | undefined }
    | undefined
  'node-count'?: bigint | undefined
  'connection-info'?:
    | {
        nodes?: string[] | undefined
        'access-cert'?: string | undefined
        'access-key'?: string | undefined
        'connect-uri'?: string | undefined
        'rest-uri'?: string | undefined
        'registry-uri'?: string | undefined
      }
    | undefined
  'node-cpu-count'?: bigint | undefined
  'kafka-rest-enabled'?: boolean | undefined
  'prometheus-uri': { host?: string | undefined; port?: bigint | undefined }
  integrations?: DbaasIntegration[] | undefined
  zone?: string | undefined
  'node-states'?: DbaasNodeState[] | undefined
  name: DbaasServiceName
  'kafka-connect-enabled'?: boolean | undefined
  type: DbaasServiceTypeName
  state?: EnumServiceState | undefined
  'ip-filter'?: string[] | undefined
  'schema-registry-settings'?: JsonSchemaSchemaRegistry | undefined
  backups?: DbaasServiceBackup[] | undefined
  'kafka-rest-settings'?: JsonSchemaKafkaRest | undefined
  'termination-protection'?: boolean | undefined
  notifications?: DbaasServiceNotification[] | undefined
  'kafka-connect-settings'?: JsonSchemaKafkaConnect | undefined
  components?:
    | {
        component: string
        host: string
        'kafka-authentication-method'?: EnumKafkaAuthMethod | undefined
        port: bigint
        route: EnumComponentRoute
        usage: EnumComponentUsage
      }[]
    | undefined
  maintenance?: DbaasServiceMaintenance | undefined
  'kafka-settings'?: JsonSchemaKafka | undefined
  'disk-size'?: bigint | undefined
  'node-memory'?: bigint | undefined
  uri?: string | undefined
  'uri-params'?: { [x: string]: unknown } | undefined
  'schema-registry-enabled'?: boolean | undefined
  version?: string | undefined
  'created-at'?: string | undefined
  plan: string
  users?:
    | {
        type?: string | undefined
        username?: string | undefined
        password?: string | undefined
        'access-cert'?: string | undefined
        'access-cert-expiry'?: string | undefined
        'access-key'?: string | undefined
      }[]
    | undefined
}
type DbaasKafkaAclId = string
type DbaasKafkaSchemaRegistryAclEntry = {
  id?: DbaasKafkaAclId | undefined
  username: string
  resource: string
  permission: 'schema_registry_read' | 'schema_registry_write'
}
type ListRouteEntry = {
  id?: string | undefined
  kind?: 'Subnet' | 'Vpc' | undefined
  description?: string | undefined
  destination?: string | undefined
  target?: string | undefined
}
type SksNodepoolLabels = { [x: string]: string }
type SksNodepoolTaint = { value: string; effect: 'NoExecute' | 'NoSchedule' | 'PreferNoSchedule' }
type SksNodepoolTaints = { [x: string]: SksNodepoolTaint }
type KubeletImageGc = {
  'high-threshold'?: bigint | undefined
  'low-threshold'?: bigint | undefined
  'min-age'?: string | undefined
}
type NvidiaMigProfileA30_24gb = '1g.6gb' | '1g.6gb+me' | '2g.12gb' | '2g.12gb+me' | '4g.24gb'
type NvidiaMigProfileRtxpro6000_96gb =
  | '1g.24gb'
  | '1g.24gb+me'
  | '1g.24gb+gfx'
  | '1g.24gb+me.all'
  | '1g.24gb-me'
  | '2g.48gb'
  | '2g.48gb+gfx'
  | '2g.48gb+me.all'
  | '2g.48gb-me'
  | '4g.96gb'
  | '4g.96gb+gfx'
type NvidiaMigProfileB300_269gb =
  | '1g.34gb'
  | '1g.34gb+me'
  | '1g.67gb'
  | '2g.67gb'
  | '3g.135gb'
  | '4g.135gb'
  | '7g.269gb'
type NvidiaMigProfiles = {
  'a30.24gb'?: NvidiaMigProfileA30_24gb | undefined
  'rtxpro6000.96gb'?: NvidiaMigProfileRtxpro6000_96gb | undefined
  'b300.269gb'?: NvidiaMigProfileB300_269gb | undefined
}
type InstancePoolRef = { id?: string | undefined }
type SksNodepool = {
  'anti-affinity-groups'?: AntiAffinityGroupRef[] | undefined
  description?: string | undefined
  'public-ip-assignment'?: 'inet4' | 'dual' | undefined
  labels?: SksNodepoolLabels | undefined
  taints?: SksNodepoolTaints | undefined
  'security-groups'?: SecurityGroupRef[] | undefined
  name?: string | undefined
  'instance-type'?: InstanceTypeRef | undefined
  'private-networks'?: PrivateNetworkRef[] | undefined
  template?: TemplateRef | undefined
  state?:
    | 'renewing-token'
    | 'creating'
    | 'deleting'
    | 'running'
    | 'degraded'
    | 'scaling'
    | 'updating'
    | 'error'
    | undefined
  size?: bigint | undefined
  'kubelet-image-gc'?: KubeletImageGc | undefined
  'instance-pool'?: InstancePoolRef | undefined
  'instance-prefix'?: string | undefined
  'deploy-target'?: DeployTargetRef | undefined
  addons?: 'storage-lvm'[] | undefined
  id?: string | undefined
  'disk-size'?: bigint | undefined
  version?: string | undefined
  'nvidia-mig-profiles'?: NvidiaMigProfiles | undefined
  'created-at'?: string | undefined
}
type BlockStorageVolumeRef = { id?: string | undefined }
type BlockStorageSnapshot = {
  id?: string | undefined
  name?: string | undefined
  size?: bigint | undefined
  'volume-size'?: bigint | undefined
  'created-at'?: string | undefined
  state?:
    | 'partially-destroyed'
    | 'destroying'
    | 'creating'
    | 'created'
    | 'promoting'
    | 'error'
    | 'destroyed'
    | 'allocated'
    | undefined
  labels?: Labels | undefined
  'block-storage-volume'?: BlockStorageVolumeRef | undefined
}
type ListKmsKeyRotationsResponseEntry = {
  version: number
  'rotated-at': string
  automatic: boolean
}
type ListKmsKeyRotationsResponse = { rotations: ListKmsKeyRotationsResponseEntry[] }
type DbaasExternalIntegration = {
  description: string
  'dest-endpoint-name'?: string | undefined
  'dest-endpoint-id'?: string | undefined
  'integration-id'?: string | undefined
  status?: string | undefined
  'source-service-name': string
  'source-service-type': DbaasServiceTypeName
  type: EnumExternalEndpointTypes
}
type GetAiApiKeyResponse = {
  'updated-at': string
  name: string
  scope: string
  id: string
  'org-uuid': string
  'created-at': string
}
type UpdateAiApiKeyRequest = { name?: string | undefined; scope?: string | undefined }
type UpdateAiApiKeyResponse = {
  'updated-at': string
  name: string
  scope: string
  id: string
  'org-uuid': string
  'created-at': string
}
type PrivateNetworkLease = { ip?: string | undefined; 'instance-id'?: string | undefined }
type PrivateNetworkOptions = {
  routers?: string[] | undefined
  'dns-servers'?: string[] | undefined
  'ntp-servers'?: string[] | undefined
  'domain-search'?: string[] | undefined
}
type PrivateNetwork = {
  description?: string | undefined
  labels?: Labels | undefined
  name?: string | undefined
  'start-ip'?: string | undefined
  leases?: PrivateNetworkLease[] | undefined
  id?: string | undefined
  vni?: bigint | undefined
  netmask?: string | undefined
  options?: PrivateNetworkOptions | undefined
  'end-ip'?: string | undefined
}
type ListVpcEntry = {
  id?: string | undefined
  name?: string | undefined
  description?: string | undefined
  'created-at'?: string | undefined
  labels?: Labels | undefined
}
type RotateAiApiKeyResponse = { value: string }
type Organization = {
  id?: string | undefined
  name?: string | undefined
  address?: string | undefined
  postcode?: string | undefined
  city?: string | undefined
  country?: string | undefined
  balance?: number | undefined
  currency?: string | undefined
}
type GetDeploymentResponse = {
  'gpu-count'?: bigint | undefined
  'updated-at'?: string | undefined
  'deployment-url': string
  'service-level'?: string | undefined
  'inference-engine-version'?: InferenceEngineVersion | undefined
  name: string
  state: 'ready' | 'creating' | 'preparing' | 'error' | 'deploying' | 'scaling' | 'updating'
  'gpu-type'?: string | undefined
  id?: string | undefined
  replicas?: bigint | undefined
  'state-details'?: string | undefined
  'created-at'?: string | undefined
  visibility: 'public' | 'private'
  'inference-engine-parameters'?: string[] | undefined
  model: ModelRef
}
type UpdateDeploymentRequest = {
  'inference-engine-version'?: InferenceEngineVersion | undefined
  name?: string | undefined
  'inference-engine-parameters'?: string[] | undefined
}
type DbaasUserKafkaConnectSecrets = { username?: string | undefined; password?: string | undefined }
type EnableKmsKeyRotationRequest = { 'rotation-period'?: number | undefined }
type EnableKmsKeyRotationResponse = { rotation: KeyRotationConfig }
type Route = {
  id?: string | undefined
  kind?: 'Subnet' | 'Vpc' | undefined
  description?: string | undefined
  destination?: string | undefined
  target?: string | undefined
}
type Quota = {
  resource?: string | undefined
  usage?: bigint | undefined
  limit?: bigint | undefined
}
type ListSubnetEntry = {
  id?: string | undefined
  name?: string | undefined
  description?: string | undefined
  'created-at'?: string | undefined
  addressfamily?: 'inet4' | 'dual' | undefined
  'address-space'?: 'private' | undefined
  'ipv4-block'?: string | undefined
  labels?: Labels | undefined
}
type SksClusterDeprecatedResource = {
  group?: string | undefined
  version?: string | undefined
  resource?: string | undefined
  subresource?: string | undefined
  'removed-release'?: string | undefined
}
type BlockStorageSnapshotRef = { id?: string | undefined }
type BlockStorageVolume = {
  labels?: Labels | undefined
  instance?: InstanceRef | undefined
  name?: string | undefined
  state?:
    | 'snapshotting'
    | 'deleted'
    | 'creating'
    | 'detached'
    | 'deleting'
    | 'attaching'
    | 'error'
    | 'attached'
    | 'detaching'
    | undefined
  size?: bigint | undefined
  blocksize?: bigint | undefined
  'block-storage-snapshots'?: BlockStorageSnapshotRef[] | undefined
  id?: string | undefined
  encrypted?: boolean | undefined
  'created-at'?: string | undefined
}
type DbaasEndpointExternalPrometheusOutput = {
  name?: string | undefined
  type?: EnumExternalEndpointTypes | undefined
  id?: string | undefined
  settings?: { 'basic-auth-username'?: string | undefined } | undefined
}
type DbaasEndpointPrometheusPayload = {
  settings?:
    | { 'basic-auth-password'?: string | undefined; 'basic-auth-username'?: string | undefined }
    | undefined
}
type InstanceTypeEntry = { family: string; authorized: boolean }
type ListAiInstanceTypesResponse = { 'instance-types': InstanceTypeEntry[] }
type IamApiKeyCreated = {
  name?: string | undefined
  key?: string | undefined
  secret?: string | undefined
  'role-id'?: string | undefined
}
type DnsDomain = {
  id?: string | undefined
  'created-at'?: string | undefined
  'unicode-name'?: string | undefined
}
type DbaasUserPassword = string
type DbaasIntegrationSettingsDatadog = {
  'datadog-dbm-enabled'?: boolean | undefined
  'datadog-pgbouncer-enabled'?: boolean | undefined
}
type Snapshot = {
  id?: string | undefined
  name?: string | undefined
  'created-at'?: string | undefined
  state?:
    | 'snapshotting'
    | 'deleted'
    | 'exporting'
    | 'ready'
    | 'deleting'
    | 'error'
    | 'exported'
    | undefined
  size?: bigint | undefined
  export?: { 'presigned-url'?: string | undefined; md5sum?: string | undefined } | undefined
  instance?: Instance | undefined
  'application-consistent'?: boolean | undefined
}
type RotateKmsKeyResponse = { rotation: KeyRotationConfig }
type DbaasIntegrationType = {
  type?: string | undefined
  'source-description'?: string | undefined
  'source-service-types'?: string[] | undefined
  'dest-description'?: string | undefined
  'dest-service-types'?: string[] | undefined
  settings?:
    | {
        properties?: { [x: string]: unknown } | undefined
        additionalProperties?: boolean | undefined
        type?: string | undefined
        title?: string | undefined
      }
    | undefined
}
type EnvMetadataEntry = {
  value?: string | undefined
  amount?: number | undefined
  unit?: string | undefined
}
type EnvImpactDetail = {
  value?: string | undefined
  amount?: number | undefined
  unit?: string | undefined
}
type EnvImpactIndicator = {
  value?: string | undefined
  amount?: number | undefined
  unit?: string | undefined
  details?: EnvImpactDetail[] | undefined
}
type EnvProduct = {
  value?: string | undefined
  metadata?: EnvMetadataEntry[] | undefined
  impacts?: EnvImpactIndicator[] | undefined
}
type EnvImpactReport = {
  metadata?: EnvMetadataEntry[] | undefined
  products?: EnvProduct[] | undefined
}
type DbaasPostgresUsers = {
  users?: { username: DbaasUserUsername; 'allow-replication'?: boolean | undefined }[] | undefined
}
type DbaasKafkaTopicAclEntry = {
  id?: DbaasKafkaAclId | undefined
  username: string
  topic: string
  permission: 'admin' | 'read' | 'readwrite' | 'write'
}
type DbaasEndpointOpensearchInputCreate = {
  settings?:
    | {
        ca?: string | undefined
        url: string
        'index-prefix': string
        'index-days-max'?: bigint | undefined
        timeout?: bigint | undefined
      }
    | undefined
}
type EnumSortOrder = 'desc' | 'asc'
type DbaasServiceLogs = {
  offset?: string | undefined
  'first-log-offset'?: string | undefined
  logs?:
    | {
        unit?: string | undefined
        time?: string | undefined
        message?: string | undefined
        node?: string | undefined
      }[]
    | undefined
}
type DecryptRequest = { 'encryption-context'?: (string | null) | undefined; ciphertext: string }
type DecryptResponse = { plaintext: string }
type DbaasUserGrafanaSecrets = { username?: string | undefined; password?: string | undefined }
type DbaasUserClickhouseSecrets = { username?: string | undefined; password?: string | undefined }
type DbaasClickhouseUserRole = {
  default?: boolean | undefined
  name?: string | undefined
  uuid?: string | undefined
  'with-admin-option'?: boolean | undefined
}
type DbaasClickhouseUserPrivilege = {
  'access-type'?: string | undefined
  column?: string | undefined
  database?: string | undefined
  'grant-option'?: boolean | undefined
  'partial-revoke'?: boolean | undefined
  table?: string | undefined
}
type DbaasClickhouseUserAclConfig = {
  username: DbaasUserUsername
  uuid?: string | undefined
  roles?: DbaasClickhouseUserRole[] | undefined
  privileges?: DbaasClickhouseUserPrivilege[] | undefined
}
type DbaasClickhouseAclConfig = { users?: DbaasClickhouseUserAclConfig[] | undefined }
type DbaasClickhouseUsers = { users?: DbaasClickhouseUser[] | undefined }
type DbaasClickhouseUserRoleInput = { uuid: string }
type DbaasValkeyUserAccessControl = {
  categories?: string[] | undefined
  channels?: string[] | undefined
  commands?: string[] | undefined
  keys?: string[] | undefined
}
type EnumDatadogSite =
  | 'us3.datadoghq.com'
  | 'ddog-gov.com'
  | 'datadoghq.eu'
  | 'us5.datadoghq.com'
  | 'ap1.datadoghq.com'
  | 'datadoghq.com'
type DbaasDatadogTag = { comment?: string | undefined; tag: string }
type DbaasEndpointDatadogInputCreate = {
  settings?:
    | {
        'datadog-api-key': string
        site: EnumDatadogSite
        'datadog-tags'?: DbaasDatadogTag[] | undefined
        'disable-consumer-stats'?: boolean | undefined
        'kafka-consumer-check-instances'?: bigint | undefined
        'kafka-consumer-stats-timeout'?: bigint | undefined
        'max-partition-contexts'?: bigint | undefined
      }
    | undefined
}
type DeleteModelConflictResponse = { deployments?: string[] | undefined }
type GetModelResponse = {
  'updated-at': string
  name: string
  state: 'ready' | 'creating' | 'downloading' | 'error' | 'created'
  id: string
  'model-size': bigint
  'created-at': string
}
type SosBucketUsage = {
  name?: string | undefined
  'created-at'?: string | undefined
  'zone-name'?: ZoneName | undefined
  size?: bigint | undefined
}
type DbaasUserMysqlSecrets = { username?: string | undefined; password?: string | undefined }
type DbaasUserKafkaSecrets = {
  username?: string | undefined
  password?: string | undefined
  'access-cert'?: string | undefined
  'access-cert-expiry'?: string | undefined
  'access-key'?: string | undefined
}
type Empty = { [x: string]: unknown }
type EncryptRequest = { 'encryption-context'?: (string | null) | undefined; plaintext: string }
type EncryptResponse = { ciphertext: string }
type DbaasExternalEndpointDatadogOutput = {
  name?: string | undefined
  type?: EnumExternalEndpointTypes | undefined
  id?: string | undefined
  settings?:
    | {
        site?: EnumDatadogSite | undefined
        'datadog-tags'?: DbaasDatadogTag[] | undefined
        'disable-consumer-stats'?: boolean | undefined
        'kafka-consumer-check-instances'?: bigint | undefined
        'kafka-consumer-stats-timeout'?: bigint | undefined
        'max-partition-contexts'?: bigint | undefined
      }
    | undefined
}
type DbaasEndpointDatadogInputUpdate = {
  settings?:
    | {
        'datadog-api-key': string
        site?: EnumDatadogSite | undefined
        'datadog-tags'?: DbaasDatadogTag[] | undefined
        'disable-consumer-stats'?: boolean | undefined
        'kafka-consumer-check-instances'?: bigint | undefined
        'kafka-consumer-stats-timeout'?: bigint | undefined
        'max-partition-contexts'?: bigint | undefined
      }
    | undefined
}
type SksClusterLabels = { [x: string]: string }
type Networking = {
  'cluster-cidr'?: string | undefined
  'service-cluster-ip-range'?: string | undefined
  'node-cidr-mask-size-ipv4'?: bigint | undefined
  'node-cidr-mask-size-ipv6'?: bigint | undefined
}
type SksOidc = {
  'client-id': string
  'issuer-url': string
  'username-claim'?: string | undefined
  'username-prefix'?: string | undefined
  'groups-claim'?: string | undefined
  'groups-prefix'?: string | undefined
  'required-claim'?: { [x: string]: string } | undefined
}
type SksAuditEndpoint = string
type SksAuditBearerToken = string
type SksAuditInitialBackoff = string
type SksAuditCreate = {
  endpoint: SksAuditEndpoint
  'bearer-token': SksAuditBearerToken
  'initial-backoff'?: SksAuditInitialBackoff | undefined
}
type SksAudit = {
  endpoint?: SksAuditEndpoint | undefined
  enabled?: boolean | undefined
  'initial-backoff'?: SksAuditInitialBackoff | undefined
}
type SksCluster = {
  description?: string | undefined
  labels?: SksClusterLabels | undefined
  cni?: 'calico' | 'cilium' | undefined
  'auto-upgrade'?: boolean | undefined
  oidc?: SksOidc | undefined
  name?: string | undefined
  'enable-operators-ca'?: boolean | undefined
  'default-security-group-id'?: (string | null) | undefined
  state?:
    | 'rotating-csi-credentials'
    | 'rotating-ccm-credentials'
    | 'creating'
    | 'upgrading'
    | 'deleting'
    | 'running'
    | 'suspending'
    | 'updating'
    | 'error'
    | 'rotating-karpenter-credentials'
    | 'resuming'
    | undefined
  'enable-kube-proxy'?: boolean | undefined
  nodepools?: SksNodepool[] | undefined
  level?: 'starter' | 'pro' | undefined
  'feature-gates'?: string[] | undefined
  addons?:
    | (
        | 'exoscale-cloud-controller'
        | 'exoscale-container-storage-interface'
        | 'metrics-server'
        | 'karpenter'
      )[]
    | undefined
  id?: string | undefined
  audit?: SksAudit | undefined
  version?: string | undefined
  'created-at'?: string | undefined
  endpoint?: string | undefined
}
type SksAuditUpdate = {
  endpoint?: SksAuditEndpoint | undefined
  'bearer-token'?: SksAuditBearerToken | undefined
  'initial-backoff'?: SksAuditInitialBackoff | undefined
  enabled?: boolean | undefined
}
type DbaasUserThanosSecrets = { username?: string | undefined; password?: string | undefined }
type JsonSchemaValkey = {
  ssl?: boolean | undefined
  lfu_log_factor?: number | undefined
  frequent_snapshots?: boolean | undefined
  maxmemory_policy?:
    | 'noeviction'
    | 'allkeys-lru'
    | 'volatile-lru'
    | 'allkeys-random'
    | 'volatile-random'
    | 'volatile-ttl'
    | 'volatile-lfu'
    | 'allkeys-lfu'
    | undefined
  io_threads?: number | undefined
  lfu_decay_time?: number | undefined
  pubsub_client_output_buffer_limit?: number | undefined
  active_expire_effort?: number | undefined
  notify_keyspace_events?: string | undefined
  persistence?: 'off' | 'rdb' | undefined
  timeout?: number | undefined
  acl_channels_default?: 'allchannels' | 'resetchannels' | undefined
  number_of_databases?: number | undefined
}
type DbaasServiceValkey = {
  'updated-at'?: string | undefined
  'node-count'?: bigint | undefined
  'connection-info'?:
    | { uri?: string[] | undefined; password?: string | undefined; slave?: string[] | undefined }
    | undefined
  'node-cpu-count'?: bigint | undefined
  'prometheus-uri': { host?: string | undefined; port?: bigint | undefined }
  integrations?: DbaasIntegration[] | undefined
  zone?: string | undefined
  'node-states'?: DbaasNodeState[] | undefined
  name: DbaasServiceName
  type: DbaasServiceTypeName
  state?: EnumServiceState | undefined
  'valkey-settings'?: JsonSchemaValkey | undefined
  'ip-filter'?: string[] | undefined
  backups?: DbaasServiceBackup[] | undefined
  'termination-protection'?: boolean | undefined
  notifications?: DbaasServiceNotification[] | undefined
  components?:
    | {
        component: string
        host: string
        port: bigint
        route: EnumComponentRoute
        ssl?: boolean | undefined
        usage: EnumComponentUsage
      }[]
    | undefined
  maintenance?: DbaasServiceMaintenance | undefined
  'disk-size'?: bigint | undefined
  'node-memory'?: bigint | undefined
  uri?: string | undefined
  'uri-params'?: { [x: string]: unknown } | undefined
  version?: string | undefined
  'created-at'?: string | undefined
  plan: string
  users?:
    | {
        type?: string | undefined
        username?: string | undefined
        password?: string | undefined
        'access-control'?:
          | {
              categories?: string[] | undefined
              channels?: string[] | undefined
              commands?: string[] | undefined
              keys?: string[] | undefined
            }
          | undefined
      }[]
    | undefined
}
type Subnet = {
  description?: string | undefined
  labels?: Labels | undefined
  name?: string | undefined
  'ipv4-block'?: string | undefined
  addressfamily?: 'inet4' | 'dual' | undefined
  'address-space'?: 'private' | undefined
  instances?: { id?: string | undefined; ipv4?: string | undefined }[] | undefined
  id?: string | undefined
  'created-at'?: string | undefined
}
type DbaasExternalEndpoint = {
  name?: string | undefined
  type?: EnumExternalEndpointTypes | undefined
  id?: string | undefined
}
type CreateKmsKeyRequest = {
  name: string
  description?: string | undefined
  usage?: 'encrypt-decrypt' | undefined
  'multi-zone'?: boolean | undefined
}
type CreateKmsKeyResponse = {
  description?: string | undefined
  revision: RevisionStamp
  name: string
  'multi-zone': boolean
  source: 'exoscale-kms'
  usage: string
  status: 'enabled' | 'disabled' | 'pending-deletion'
  'status-since': string
  id: string
  'origin-zone': string
  'created-at': string
}
type ListKmsKeysResponseEntry = {
  description?: string | undefined
  rotation: KeyRotationConfig
  revision: RevisionStamp
  'delete-at'?: string | undefined
  name: string
  'multi-zone': boolean
  source: 'exoscale-kms'
  usage: string
  status: 'enabled' | 'disabled' | 'pending-deletion'
  'status-since': string
  id: string
  replicas?: string[] | undefined
  material: KeyMaterial
  'origin-zone': string
  'created-at': string
}
type ListKmsKeysResponse = { 'kms-keys': ListKmsKeysResponseEntry[] }
type JsonSchemaThanos = {
  compactor?: { 'retention.days'?: number | undefined } | undefined
  query?:
    | {
        'query.default-evaluation-interval'?: string | undefined
        'query.lookback-delta'?: string | undefined
        'query.metadata.default-time-range'?: string | undefined
        'query.timeout'?: string | undefined
        'store.limits.request-samples'?: number | undefined
        'store.limits.request-series'?: number | undefined
      }
    | undefined
  'query-frontend'?: { 'query-range.align-range-with-step'?: boolean | undefined } | undefined
}
type DbaasServiceThanos = {
  'updated-at'?: string | undefined
  'node-count'?: bigint | undefined
  'connection-info'?:
    | {
        'query-frontend-uri'?: string | undefined
        'query-uri'?: string | undefined
        'receiver-remote-write-uri'?: string | undefined
        'ruler-uri'?: string | undefined
      }
    | undefined
  'node-cpu-count'?: bigint | undefined
  'prometheus-uri': { host?: string | undefined; port?: bigint | undefined }
  integrations?: DbaasIntegration[] | undefined
  zone?: string | undefined
  'node-states'?: DbaasNodeState[] | undefined
  name: DbaasServiceName
  type: DbaasServiceTypeName
  state?: EnumServiceState | undefined
  'ip-filter'?: string[] | undefined
  backups?: DbaasServiceBackup[] | undefined
  'termination-protection'?: boolean | undefined
  notifications?: DbaasServiceNotification[] | undefined
  components?:
    | {
        component: string
        host: string
        port: bigint
        route: EnumComponentRoute
        ssl?: boolean | undefined
        usage: EnumComponentUsage
      }[]
    | undefined
  maintenance?: DbaasServiceMaintenance | undefined
  'disk-size'?: bigint | undefined
  'node-memory'?: bigint | undefined
  uri?: string | undefined
  'uri-params'?: { [x: string]: unknown } | undefined
  'thanos-settings'?: JsonSchemaThanos | undefined
  'created-at'?: string | undefined
  plan: string
  users?:
    | { type?: string | undefined; username?: string | undefined; password?: string | undefined }[]
    | undefined
}
type EnumMigrationStatus = 'running' | 'syncing' | 'failed' | 'done'
type DbaasMigrationStatus = {
  error?: string | undefined
  method?: string | undefined
  status?: string | undefined
  details?:
    | {
        dbname?: string | undefined
        error?: string | undefined
        method?: string | undefined
        status?: EnumMigrationStatus | undefined
      }[]
    | undefined
}
type ImpactResourceTreeNode = {
  impact: { [x: string]: ImpactValueWithUnit }
  usage: ImpactValueWithUnit
  resources: { [x: string]: ImpactResourceTreeNode }
}
type ZoneImpact = {
  impact: { [x: string]: ImpactValueWithUnit }
  resources: { [x: string]: ImpactResourceTreeNode }
}
type ImpactBreakdown = {
  impact: { [x: string]: ImpactValueWithUnit }
  zones: { [x: string]: ZoneImpact }
}
type DbaasUserPostgresSecrets = { username?: string | undefined; password?: string | undefined }
type ScheduleKmsKeyDeletionRequest = { 'delay-days'?: number | undefined }
type ScheduleKmsKeyDeletionResponse = { 'delete-at'?: string | undefined }
type JsonSchemaGrafana = {
  allow_embedding?: boolean | undefined
  cookie_samesite?: 'lax' | 'strict' | 'none' | undefined
  dashboard_previews_enabled?: boolean | undefined
  metrics_enabled?: boolean | undefined
  auth_azuread?:
    | {
        allow_sign_up?: boolean | undefined
        allowed_domains?: string[] | undefined
        allowed_groups?: string[] | undefined
        auth_url: string
        client_id: string
        client_secret: string
        token_url: string
      }
    | undefined
  alerting_enabled?: boolean | undefined
  wal?: boolean | undefined
  unified_alerting_enabled?: boolean | undefined
  auth_github?:
    | {
        allow_sign_up?: boolean | undefined
        allowed_organizations?: string[] | undefined
        auto_login?: boolean | undefined
        client_id: string
        client_secret: string
        skip_org_role_sync?: boolean | undefined
        team_ids?: number[] | undefined
      }
    | undefined
  user_auto_assign_org?: boolean | undefined
  dataproxy_send_user_header?: boolean | undefined
  google_analytics_ua_id?: string | undefined
  dashboards_versions_to_keep?: number | undefined
  editors_can_admin?: boolean | undefined
  smtp_server?:
    | {
        from_address: string
        from_name?: (string | null) | undefined
        host: string
        password?: (string | null) | undefined
        port: number
        skip_verify?: boolean | undefined
        starttls_policy?: 'OpportunisticStartTLS' | 'MandatoryStartTLS' | 'NoStartTLS' | undefined
        username?: (string | null) | undefined
      }
    | undefined
  auth_gitlab?:
    | {
        allow_sign_up?: boolean | undefined
        allowed_groups: string[]
        api_url?: string | undefined
        auth_url?: string | undefined
        client_id: string
        client_secret: string
        token_url?: string | undefined
      }
    | undefined
  alerting_nodata_or_nullvalues?: 'alerting' | 'no_data' | 'keep_state' | 'ok' | undefined
  auth_basic_enabled?: boolean | undefined
  date_formats?:
    | {
        default_timezone?: string | undefined
        full_date?: string | undefined
        interval_day?: string | undefined
        interval_hour?: string | undefined
        interval_minute?: string | undefined
        interval_month?: string | undefined
        interval_second?: string | undefined
        interval_year?: string | undefined
      }
    | undefined
  service_log?: (boolean | null) | undefined
  disable_gravatar?: boolean | undefined
  user_auto_assign_org_role?: 'Viewer' | 'Admin' | 'Editor' | undefined
  dataproxy_timeout?: number | undefined
  viewers_can_edit?: boolean | undefined
  dashboards_min_refresh_interval?: string | undefined
  auth_google?:
    | {
        allow_sign_up?: boolean | undefined
        allowed_domains: string[]
        client_id: string
        client_secret: string
      }
    | undefined
  oauth_allow_insecure_email_lookup?: boolean | undefined
  alerting_max_annotations_to_keep?: number | undefined
  auth_generic_oauth?:
    | {
        scopes?: string[] | undefined
        allowed_domains?: string[] | undefined
        allowed_organizations?: string[] | undefined
        token_url: string
        name?: string | undefined
        auth_url: string
        api_url: string
        auto_login?: boolean | undefined
        client_id: string
        client_secret: string
        allow_sign_up?: boolean | undefined
      }
    | undefined
  custom_domain?: (string | null) | undefined
  alerting_error_or_timeout?: 'alerting' | 'keep_state' | undefined
}
type DbaasServiceGrafana = {
  description?: string | undefined
  'updated-at'?: string | undefined
  'node-count'?: bigint | undefined
  'connection-info'?:
    | { uri?: string | undefined; username?: string | undefined; password?: string | undefined }
    | undefined
  'node-cpu-count'?: bigint | undefined
  'prometheus-uri': { host?: string | undefined; port?: bigint | undefined }
  integrations?: DbaasIntegration[] | undefined
  zone?: string | undefined
  'node-states'?: DbaasNodeState[] | undefined
  name: DbaasServiceName
  type: DbaasServiceTypeName
  state?: EnumServiceState | undefined
  'grafana-settings'?: JsonSchemaGrafana | undefined
  'ip-filter'?: string[] | undefined
  backups?: DbaasServiceBackup[] | undefined
  'termination-protection'?: boolean | undefined
  notifications?: DbaasServiceNotification[] | undefined
  components?:
    | {
        component: string
        host: string
        port: bigint
        route: EnumComponentRoute
        usage: EnumComponentUsage
      }[]
    | undefined
  maintenance?: DbaasServiceMaintenance | undefined
  'disk-size'?: bigint | undefined
  'node-memory'?: bigint | undefined
  uri?: string | undefined
  'uri-params'?: { [x: string]: unknown } | undefined
  version?: string | undefined
  'created-at'?: string | undefined
  plan: string
  users?:
    | { type?: string | undefined; username?: string | undefined; password?: string | undefined }[]
    | undefined
}
type DbaasEndpointRsyslogInputUpdate = {
  settings?:
    | {
        format?: EnumRsyslogFormat | undefined
        key?: string | undefined
        logline?: string | undefined
        server?: string | undefined
        ca?: string | undefined
        cert?: string | undefined
        tls?: boolean | undefined
        port?: bigint | undefined
        sd?: string | undefined
        'max-message-size'?: bigint | undefined
      }
    | undefined
}
type DbaasEndpointRsyslogOptionalFields = {
  server?: string | undefined
  port?: bigint | undefined
  tls?: boolean | undefined
  format?: EnumRsyslogFormat | undefined
  logline?: string | undefined
  sd?: string | undefined
  'max-message-size'?: bigint | undefined
}
type DbaasExternalEndpointRsyslogOutput = {
  name?: string | undefined
  type?: EnumExternalEndpointTypes | undefined
  id?: string | undefined
  settings?: DbaasEndpointRsyslogOptionalFields | undefined
}
type DbaasEndpointElasticsearchInputCreate = {
  settings?:
    | {
        ca?: string | undefined
        url: string
        'index-prefix': string
        'index-days-max'?: bigint | undefined
        timeout?: bigint | undefined
      }
    | undefined
}
type RevealAiApiKeyResponse = { value: string }
type DbaasKafkaAcls = {
  'topic-acl'?: DbaasKafkaTopicAclEntry[] | undefined
  'schema-registry-acl'?: DbaasKafkaSchemaRegistryAclEntry[] | undefined
}
type ListAiApiKeysResponseEntry = {
  'updated-at': string
  name: string
  scope: string
  id: string
  'org-uuid': string
  'created-at': string
}
type ListAiApiKeysResponse = { 'ai-api-keys': ListAiApiKeysResponseEntry[] }
type CreateAiApiKeyRequest = { name: string; scope: string }
type CreateAiApiKeyResponse = {
  'updated-at': string
  name: string
  value: string
  scope: string
  id: string
  'org-uuid': string
  'created-at': string
}
type ReEncryptRequest = {
  source: { key: string; 'encryption-context'?: (string | null) | undefined; ciphertext: string }
  destination: { key: string; 'encryption-context'?: (string | null) | undefined }
}
type ReEncryptResponse = { ciphertext: string }
type DbaasUserOpensearchSecrets = { username?: string | undefined; password?: string | undefined }
type JsonSchemaOpensearch = {
  thread_pool_search_throttled_size?: number | undefined
  thread_pool_analyze_size?: number | undefined
  thread_pool_get_size?: number | undefined
  thread_pool_get_queue_size?: number | undefined
  indices_memory_max_index_buffer_size?: number | undefined
  indices_recovery_max_concurrent_file_chunks?: number | undefined
  indices_queries_cache_size?: number | undefined
  search_backpressure?:
    | {
        mode?: 'monitor_only' | 'enforced' | 'disabled' | undefined
        node_duress?:
          | {
              cpu_threshold?: number | undefined
              heap_threshold?: number | undefined
              num_successive_breaches?: number | undefined
            }
          | undefined
        search_shard_task?:
          | {
              total_heap_percent_threshold?: number | undefined
              elapsed_time_millis_threshold?: number | undefined
              cancellation_rate?: number | undefined
              heap_variance?: number | undefined
              heap_moving_average_window_size?: number | undefined
              cancellation_ratio?: number | undefined
              heap_percent_threshold?: number | undefined
              cpu_time_millis_threshold?: number | undefined
              cancellation_burst?: number | undefined
            }
          | undefined
        search_task?:
          | {
              total_heap_percent_threshold?: number | undefined
              elapsed_time_millis_threshold?: number | undefined
              cancellation_rate?: number | undefined
              heap_variance?: number | undefined
              heap_moving_average_window_size?: number | undefined
              cancellation_ratio?: number | undefined
              heap_percent_threshold?: number | undefined
              cpu_time_millis_threshold?: number | undefined
              cancellation_burst?: number | undefined
            }
          | undefined
      }
    | undefined
  shard_indexing_pressure?:
    | {
        primary_parameter?:
          | {
              shard?: { min_limit?: number | undefined } | undefined
              node?: { soft_limit?: number | undefined } | undefined
            }
          | undefined
        operating_factor?:
          | { upper?: number | undefined; optimal?: number | undefined; lower?: number | undefined }
          | undefined
        enforced?: boolean | undefined
        enabled?: boolean | undefined
      }
    | undefined
  knn_memory_circuit_breaker_enabled?: boolean | undefined
  thread_pool_search_size?: number | undefined
  indices_memory_min_index_buffer_size?: number | undefined
  indices_recovery_max_bytes_per_sec?: number | undefined
  http_max_initial_line_length?: number | undefined
  enable_security_audit?: boolean | undefined
  thread_pool_write_queue_size?: number | undefined
  script_max_compilations_rate?: string | undefined
  search_max_buckets?: (number | null) | undefined
  reindex_remote_whitelist?: ((string | null)[] | null) | undefined
  override_main_response_version?: boolean | undefined
  http_max_header_size?: number | undefined
  'email-sender'?:
    | { email_sender_name: string; email_sender_password: string; email_sender_username: string }
    | undefined
  indices_fielddata_cache_size?: (number | null) | undefined
  action_destructive_requires_name?: (boolean | null) | undefined
  plugins_alerting_filter_by_backend_roles?: boolean | undefined
  indices_memory_index_buffer_size?: number | undefined
  thread_pool_force_merge_size?: number | undefined
  auth_failure_listeners?:
    | {
        internal_authentication_backend_limiting?:
          | {
              allowed_tries?: number | undefined
              authentication_backend?: 'internal' | undefined
              block_expiry_seconds?: number | undefined
              max_blocked_clients?: number | undefined
              max_tracked_clients?: number | undefined
              time_window_seconds?: number | undefined
              type?: 'username' | undefined
            }
          | undefined
        ip_rate_limiting?:
          | {
              allowed_tries?: number | undefined
              block_expiry_seconds?: number | undefined
              max_blocked_clients?: number | undefined
              max_tracked_clients?: number | undefined
              time_window_seconds?: number | undefined
              type?: 'ip' | undefined
            }
          | undefined
      }
    | undefined
  'ism-history'?:
    | {
        ism_enabled: boolean
        ism_history_enabled?: boolean | undefined
        ism_history_max_age?: number | undefined
        ism_history_max_docs?: number | undefined
        ism_history_rollover_check_period?: number | undefined
        ism_history_rollover_retention_period?: number | undefined
      }
    | undefined
  cluster_routing_allocation_node_concurrent_recoveries?: number | undefined
  thread_pool_analyze_queue_size?: number | undefined
  action_auto_create_index_enabled?: boolean | undefined
  http_max_content_length?: number | undefined
  thread_pool_write_size?: number | undefined
  thread_pool_search_queue_size?: number | undefined
  knn_memory_circuit_breaker_limit?: number | undefined
  indices_query_bool_max_clause_count?: number | undefined
  thread_pool_search_throttled_queue_size?: number | undefined
  cluster_max_shards_per_node?: number | undefined
}
type DbaasServiceOpensearch = {
  description?: string | undefined
  'max-index-count'?: (bigint | null) | undefined
  'updated-at'?: string | undefined
  'node-count'?: bigint | undefined
  'connection-info'?:
    | {
        uri?: string[] | undefined
        username?: string | undefined
        password?: string | undefined
        'dashboard-uri'?: string | undefined
      }
    | undefined
  'node-cpu-count'?: bigint | undefined
  'prometheus-uri': { host?: string | undefined; port?: bigint | undefined }
  integrations?: DbaasIntegration[] | undefined
  zone?: string | undefined
  'node-states'?: DbaasNodeState[] | undefined
  name: DbaasServiceName
  'keep-index-refresh-interval'?: boolean | undefined
  type: DbaasServiceTypeName
  state?: EnumServiceState | undefined
  'ip-filter'?: string[] | undefined
  backups?: DbaasServiceBackup[] | undefined
  'termination-protection'?: boolean | undefined
  notifications?: DbaasServiceNotification[] | undefined
  components?:
    | {
        component: string
        host: string
        port: bigint
        route: EnumComponentRoute
        usage: EnumComponentUsage
      }[]
    | undefined
  'index-patterns'?:
    | {
        'max-index-count'?: (bigint | null) | undefined
        'sorting-algorithm'?: 'alphabetical' | 'creation_date' | undefined
        pattern?: string | undefined
      }[]
    | undefined
  maintenance?: DbaasServiceMaintenance | undefined
  'index-template'?:
    | {
        'mapping-nested-objects-limit'?: bigint | undefined
        'number-of-replicas'?: bigint | undefined
        'number-of-shards'?: bigint | undefined
      }
    | undefined
  'disk-size'?: bigint | undefined
  'node-memory'?: bigint | undefined
  uri?: string | undefined
  'opensearch-settings'?: JsonSchemaOpensearch | undefined
  'uri-params'?: { [x: string]: unknown } | undefined
  version?: string | undefined
  'created-at'?: string | undefined
  plan: string
  'opensearch-dashboards'?:
    | {
        'opensearch-request-timeout'?: bigint | undefined
        enabled?: boolean | undefined
        'max-old-space-size'?: bigint | undefined
      }
    | undefined
  users?:
    | { type?: string | undefined; username?: string | undefined; password?: string | undefined }[]
    | undefined
}
type DbaasUserValkeySecrets = { username?: string | undefined; password?: string | undefined }
type OrgConsumptionQuotaResponse = { 'quota-uom-per-minute'?: (number | null) | undefined }
type JsonSchemaPgbouncer = {
  min_pool_size?: number | undefined
  ignore_startup_parameters?: ('extra_float_digits' | 'search_path')[] | undefined
  server_lifetime?: number | undefined
  autodb_pool_mode?: 'transaction' | 'session' | 'statement' | undefined
  server_idle_timeout?: number | undefined
  autodb_max_db_connections?: number | undefined
  max_prepared_statements?: number | undefined
  server_reset_query_always?: boolean | undefined
  autodb_pool_size?: number | undefined
  autodb_idle_timeout?: number | undefined
}
type EnumPgVariant = 'timescale' | 'aiven'
type JsonSchemaTimescaledb = { max_background_workers?: number | undefined }
type JsonSchemaPgaudit = {
  role?: string | undefined
  log_parameter?: boolean | undefined
  log_rows?: boolean | undefined
  log_level?:
    | 'debug1'
    | 'debug2'
    | 'debug3'
    | 'debug4'
    | 'debug5'
    | 'info'
    | 'notice'
    | 'warning'
    | 'log'
    | undefined
  log_relation?: boolean | undefined
  log_statement_once?: boolean | undefined
  log_max_string_length?: number | undefined
  log_catalog?: boolean | undefined
  log_nested_statements?: boolean | undefined
  log_statement?: boolean | undefined
  log_client?: boolean | undefined
  feature_enabled?: boolean | undefined
  log?: ('all' | 'ddl' | 'function' | 'misc' | 'misc_set' | 'read' | 'role' | 'write')[] | undefined
  log_parameter_max_size?: number | undefined
}
type EnumPgSynchronousReplication = 'quorum' | 'off'
type JsonSchemaPglookout = { max_failover_replication_time_lag?: number | undefined }
type JsonSchemaPg = {
  track_activity_query_size?: number | undefined
  timezone?: string | undefined
  track_io_timing?: 'off' | 'on' | undefined
  'pg_stat_monitor.pgsm_enable_query_plan'?: boolean | undefined
  max_files_per_process?: number | undefined
  'pg_stat_monitor.pgsm_max_buckets'?: number | undefined
  io_max_concurrency?: number | undefined
  wal?:
    | {
        max_slot_wal_keep_size?: number | undefined
        max_wal_senders?: number | undefined
        wal_sender_timeout?: number | undefined
        wal_writer_delay?: number | undefined
      }
    | undefined
  default_toast_compression?: 'lz4' | 'pglz' | undefined
  deadlock_timeout?: number | undefined
  idle_in_transaction_session_timeout?: number | undefined
  max_pred_locks_per_transaction?: number | undefined
  max_replication_slots?: number | undefined
  max_sync_workers_per_subscription?: number | undefined
  autovacuum?:
    | {
        log_autovacuum_min_duration?: number | undefined
        autovacuum_vacuum_cost_limit?: number | undefined
        autovacuum_max_workers?: number | undefined
        autovacuum_vacuum_threshold?: number | undefined
        autovacuum_naptime?: number | undefined
        autovacuum_vacuum_scale_factor?: number | undefined
        autovacuum_vacuum_cost_delay?: number | undefined
        autovacuum_analyze_scale_factor?: number | undefined
        autovacuum_analyze_threshold?: number | undefined
        autovacuum_freeze_max_age?: number | undefined
      }
    | undefined
  max_parallel_workers_per_gather?: number | undefined
  io_combine_limit?: number | undefined
  password_encryption?: 'md5' | 'scram-sha-256' | undefined
  io_workers?: number | undefined
  'pg_partman_bgw.interval'?: number | undefined
  log_line_prefix?:
    | "'pid=%p,user=%u,db=%d,app=%a,client=%h '"
    | "'pid=%p,user=%u,db=%d,app=%a,client=%h,txid=%x,qid=%Q '"
    | "'%t [%p]: [%l-1] user=%u,db=%d,app=%a,client=%h '"
    | "'%m [%p] %q[user=%u,db=%d,app=%a] '"
    | undefined
  log_temp_files?: number | undefined
  max_locks_per_transaction?: number | undefined
  track_commit_timestamp?: 'off' | 'on' | undefined
  track_functions?: 'all' | 'pl' | 'none' | undefined
  io_max_combine_limit?: number | undefined
  io_method?: 'worker' | 'sync' | 'io_uring' | undefined
  max_stack_depth?: number | undefined
  max_parallel_workers?: number | undefined
  'pg_partman_bgw.role'?: string | undefined
  max_logical_replication_workers?: number | undefined
  max_prepared_transactions?: number | undefined
  max_worker_processes?: number | undefined
  'pg_stat_statements.track'?: 'all' | 'top' | 'none' | undefined
  temp_file_limit?: number | undefined
  log_error_verbosity?: 'TERSE' | 'DEFAULT' | 'VERBOSE' | undefined
  log_min_duration_statement?: number | undefined
  max_standby_streaming_delay?: number | undefined
  jit?: boolean | undefined
  max_standby_archive_delay?: number | undefined
  'bg-writer'?:
    | {
        bgwriter_delay?: number | undefined
        bgwriter_flush_after?: number | undefined
        bgwriter_lru_maxpages?: number | undefined
        bgwriter_lru_multiplier?: number | undefined
      }
    | undefined
}
type DbaasServicePg = {
  'pgbouncer-settings'?: JsonSchemaPgbouncer | undefined
  'updated-at'?: string | undefined
  'node-count'?: bigint | undefined
  'connection-info'?:
    | {
        uri?: string[] | undefined
        params?: { [x: string]: string }[] | undefined
        standby?: string[] | undefined
        syncing?: string[] | undefined
      }
    | undefined
  'backup-schedule'?:
    | { 'backup-hour'?: bigint | undefined; 'backup-minute'?: bigint | undefined }
    | undefined
  'node-cpu-count'?: bigint | undefined
  'prometheus-uri': { host?: string | undefined; port?: bigint | undefined }
  integrations?: DbaasIntegration[] | undefined
  zone?: string | undefined
  'node-states'?: DbaasNodeState[] | undefined
  name: DbaasServiceName
  'connection-pools'?:
    | {
        'connection-uri': string
        database: DbaasDatabaseName
        mode: EnumPgPoolMode
        name: DbaasPgPoolName
        size: DbaasPgPoolSize
        username: DbaasPgPoolUsername
      }[]
    | undefined
  type: DbaasServiceTypeName
  state?: EnumServiceState | undefined
  'timescaledb-settings'?: JsonSchemaTimescaledb | undefined
  databases?: DbaasDatabaseName[] | undefined
  'ip-filter'?: string[] | undefined
  backups?: DbaasServiceBackup[] | undefined
  'termination-protection'?: boolean | undefined
  'pgaudit-settings'?: JsonSchemaPgaudit | undefined
  notifications?: DbaasServiceNotification[] | undefined
  components?:
    | {
        component: string
        host: string
        port: bigint
        route: EnumComponentRoute
        usage: EnumComponentUsage
      }[]
    | undefined
  'synchronous-replication'?: EnumPgSynchronousReplication | undefined
  'pglookout-settings'?: JsonSchemaPglookout | undefined
  maintenance?: DbaasServiceMaintenance | undefined
  'disk-size'?: bigint | undefined
  'node-memory'?: bigint | undefined
  uri?: string | undefined
  'uri-params'?: { [x: string]: unknown } | undefined
  version?: string | undefined
  'created-at'?: string | undefined
  plan: string
  'work-mem'?: bigint | undefined
  'shared-buffers-percentage'?: bigint | undefined
  'pg-settings'?: JsonSchemaPg | undefined
  'max-connections'?: bigint | undefined
  users?:
    | {
        type: string
        username: string
        password?: string | undefined
        'allow-replication'?: boolean | undefined
      }[]
    | undefined
}
type DbaasValkeyUser = {
  username: DbaasUserUsername
  type?: string | undefined
  'access-control'?: DbaasValkeyUserAccessControl | undefined
}
type DbaasValkeyUsers = { users?: DbaasValkeyUser[] | undefined }
type EnumIntegrationTypes = 'datasource' | 'logs' | 'metrics'
type RevealDeploymentApiKeyResponse = { 'api-key': string }
type ReplicateKmsKeyRequest = { zone: string }
type GetDeploymentLogsEntry = { time: string; node: string; message: string }
type GetDeploymentLogsResponse = { logs: GetDeploymentLogsEntry[] }
type GenerateDataKeyRequest = {
  'key-spec'?: 'AES-256' | undefined
  'bytes-count'?: number | undefined
  'encryption-context'?: (string | null) | undefined
}
type GenerateDataKeyResponse = { plaintext: string; ciphertext: string }
type Vpc = {
  id?: string | undefined
  name?: string | undefined
  description?: string | undefined
  'created-at'?: string | undefined
  labels?: Labels | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/load-balancer/:id/service/:service-id': {
      $delete: {
        input: { param: { id: string; 'service-id': string } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string; 'service-id': string } } & {
          json: {
            name?: string | undefined
            description?: string | undefined
            protocol?: 'tcp' | 'udp' | undefined
            strategy?: 'round-robin' | 'maglev-hash' | 'source-hash' | undefined
            port?: bigint | undefined
            'target-port'?: bigint | undefined
            healthcheck?: LoadBalancerServiceHealthcheck | undefined
          }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: string; 'service-id': string } }
        output: LoadBalancerService
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-external-endpoint-opensearch/:endpoint-id': {
      $delete: {
        input: { param: { 'endpoint-id': string } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { 'endpoint-id': string } }
        output: DbaasEndpointOpensearchOutput
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { 'endpoint-id': string } } & { json: DbaasEndpointOpensearchInputUpdate }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-opensearch/:name/acl-config': {
      $get: {
        input: { param: { name: DbaasServiceName } }
        output: DbaasOpensearchAclConfig
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { name: DbaasServiceName } } & { json: DbaasOpensearchAclConfig }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/instance-pool/:id:scale': {
      $put: {
        input: { param: { id: string } } & { json: { size: bigint } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/instance/:id:create-snapshot': {
      $post: {
        input: { param: { id: string } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-valkey/:name/migration/stop': {
      $post: {
        input: { param: { name: DbaasServiceName } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/reverse-dns/elastic-ip/:id': {
      $get: {
        input: { param: { id: string } }
        output: ReverseDnsRecord
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: string } } & { json: { 'domain-name'?: string | undefined } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { id: string } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/anti-affinity-group': {
      $get: {
        input: {}
        output: { 'anti-affinity-groups'?: AntiAffinityGroup[] | undefined }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: { name: string; description?: string | undefined } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/usage-report': {
      $get: {
        input: { query: { period?: string | undefined } }
        output: {
          usage?:
            | {
                from?: string | undefined
                to?: string | undefined
                product?: string | undefined
                variable?: string | undefined
                description?: string | undefined
                quantity?: string | undefined
                unit?: string | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/event': {
      $get: {
        input: { query: { from?: string | undefined; to?: string | undefined } }
        output: Event[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/security-group/:id/rules/:rule-id': {
      $delete: {
        input: { param: { id: string; 'rule-id': string } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-grafana/:name/maintenance/start': {
      $put: {
        input: { param: { name: DbaasServiceName } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/kms-key/:id/disable-key-rotation': {
      $post:
        | {
            input: { param: { id: string } }
            output: DisableKmsKeyRotationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/dbaas-postgres/:service/upgrade-check': {
      $post: {
        input: { param: { service: DbaasServiceName } } & {
          json: { 'target-version': DbaasPgTargetVersions }
        }
        output: DbaasTask
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-mysql/:service-name/user/:username/password/reset': {
      $put: {
        input: { param: { 'service-name': DbaasServiceName; username: DbaasUserUsername } } & {
          json: {
            password?: DbaasMysqlUserPassword | undefined
            authentication?: EnumMysqlAuthenticationPlugin | undefined
          }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ai/help/inference-engine-parameters': {
      $get: {
        input: { query: { version?: string | undefined } }
        output: GetInferenceEngineHelpResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/load-balancer': {
      $post: {
        input: {
          json: { description?: string | undefined; name: string; labels?: Labels | undefined }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: {}
        output: { 'load-balancers'?: LoadBalancer[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/security-group': {
      $post: {
        input: { json: { name: string; description?: string | undefined } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { query: { visibility?: 'private' | 'public' | undefined } }
        output: { 'security-groups'?: SecurityGroup[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-postgres/:service-name/connection-pool': {
      $post: {
        input: { param: { 'service-name': DbaasServiceName } } & {
          json: {
            name: DbaasPgPoolName
            'database-name': DbaasDatabaseName
            mode?: EnumPgPoolMode | undefined
            size?: DbaasPgPoolSize | undefined
            username?: DbaasPgPoolUsername | undefined
          }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-mysql/:name': {
      $put: {
        input: { param: { name: DbaasServiceName } } & {
          json: {
            'backup-schedule'?:
              | {
                  'backup-hour'?: (bigint | null) | undefined
                  'backup-minute'?: (bigint | null) | undefined
                }
              | undefined
            'ip-filter'?: string[] | undefined
            'termination-protection'?: boolean | undefined
            'mysql-settings'?: JsonSchemaMysql | undefined
            maintenance?:
              | {
                  dow:
                    | 'saturday'
                    | 'tuesday'
                    | 'never'
                    | 'wednesday'
                    | 'sunday'
                    | 'friday'
                    | 'monday'
                    | 'thursday'
                  time: string
                }
              | undefined
            version?: string | undefined
            plan?: string | undefined
            migration?:
              | {
                  host: string
                  port: bigint
                  password?: string | undefined
                  ssl?: boolean | undefined
                  username?: string | undefined
                  dbname?: string | undefined
                  'ignore-dbs'?: string | undefined
                  method?: EnumMigrationMethod | undefined
                }
              | undefined
            'binlog-retention-period'?: bigint | undefined
          }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { name: DbaasServiceName } }
        output: DbaasServiceMysql
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { name: DbaasServiceName } } & {
          json: {
            'backup-schedule'?:
              | {
                  'backup-hour'?: (bigint | null) | undefined
                  'backup-minute'?: (bigint | null) | undefined
                }
              | undefined
            integrations?:
              | {
                  type: 'read_replica'
                  'source-service'?: DbaasServiceName | undefined
                  'dest-service'?: DbaasServiceName | undefined
                  settings?: { [x: string]: unknown } | undefined
                }[]
              | undefined
            'ip-filter'?: string[] | undefined
            'termination-protection'?: boolean | undefined
            'fork-from-service'?: DbaasServiceName | undefined
            'recovery-backup-time'?: string | undefined
            'mysql-settings'?: JsonSchemaMysql | undefined
            maintenance?:
              | {
                  dow:
                    | 'saturday'
                    | 'tuesday'
                    | 'never'
                    | 'wednesday'
                    | 'sunday'
                    | 'friday'
                    | 'monday'
                    | 'thursday'
                  time: string
                }
              | undefined
            'admin-username'?: string | undefined
            version?: string | undefined
            plan: string
            'admin-password'?: DbaasMysqlUserPassword | undefined
            migration?:
              | {
                  host: string
                  port: bigint
                  password?: string | undefined
                  ssl?: boolean | undefined
                  username?: string | undefined
                  dbname?: string | undefined
                  'ignore-dbs'?: string | undefined
                  method?: EnumMigrationMethod | undefined
                }
              | undefined
            'binlog-retention-period'?: bigint | undefined
          }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { name: string } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/private-network/:id:attach': {
      $put: {
        input: { param: { id: string } } & {
          json: { ip?: string | undefined; instance: { id?: string | undefined } }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/iam-role/:id/assume': {
      $post: {
        input: { param: { id: string } } & { json: { ttl: bigint } }
        output: {
          key?: string | undefined
          name?: string | undefined
          'org-id'?: string | undefined
          'role-id'?: string | undefined
          secret?: string | undefined
          'expires-at'?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/vpc/:vpc-id/subnet/:subnet-id/attach': {
      $put: {
        input: { param: { 'vpc-id': string; 'subnet-id': string } } & {
          json: { instance: InstanceRef; ipv4?: string | undefined }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/kms-key/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: GetKmsKeyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/dbaas-thanos/:name/maintenance/start': {
      $put: {
        input: { param: { name: DbaasServiceName } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-external-endpoint-elasticsearch/:endpoint-id': {
      $delete: {
        input: { param: { 'endpoint-id': string } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { 'endpoint-id': string } }
        output: DbaasEndpointElasticsearchOutput
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { 'endpoint-id': string } } & {
          json: DbaasEndpointElasticsearchInputUpdate
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ai/model': {
      $post:
        | {
            input: { json: CreateModelRequest }
            output: Operation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateModelRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
      $get: { input: {}; output: ListModelsResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/dbaas-mysql/:service-name/user': {
      $post: {
        input: { param: { 'service-name': DbaasServiceName } } & {
          json: {
            username: DbaasUserUsername
            authentication?: EnumMysqlAuthenticationPlugin | undefined
          }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-service-type': {
      $get: {
        input: {}
        output: { 'dbaas-service-types'?: DbaasServiceType[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ai/deployment/:id/scale': {
      $post:
        | {
            input: { param: { id: string } } & { json: ScaleDeploymentRequest }
            output: Operation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: ScaleDeploymentRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: ScaleDeploymentRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: ScaleDeploymentRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { json: ScaleDeploymentRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
    }
  } & {
    '/instance-type/:id': {
      $get: {
        input: { param: { id: string } }
        output: InstanceType
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-clickhouse/:name': {
      $delete: {
        input: { param: { name: string } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { name: DbaasServiceName } }
        output: DbaasServiceClickhouse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { name: DbaasServiceName } } & {
          json: {
            maintenance?:
              | {
                  dow:
                    | 'saturday'
                    | 'tuesday'
                    | 'never'
                    | 'wednesday'
                    | 'sunday'
                    | 'friday'
                    | 'monday'
                    | 'thursday'
                  time: string
                }
              | undefined
            plan: string
            'termination-protection'?: boolean | undefined
            version?: string | undefined
            'ip-filter'?: string[] | undefined
            'clickhouse-settings'?: JsonSchemaClickhouse | undefined
            'fork-from-service'?: DbaasServiceName | undefined
            'recovery-backup-name'?: string | undefined
          }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { name: DbaasServiceName } } & {
          json: {
            maintenance?:
              | {
                  dow:
                    | 'saturday'
                    | 'tuesday'
                    | 'never'
                    | 'wednesday'
                    | 'sunday'
                    | 'friday'
                    | 'monday'
                    | 'thursday'
                  time: string
                }
              | undefined
            plan?: string | undefined
            'termination-protection'?: boolean | undefined
            version?: string | undefined
            'ip-filter'?: string[] | undefined
            'clickhouse-settings'?: JsonSchemaClickhouse | undefined
          }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/instance/:id:password': {
      $get: {
        input: { param: { id: string } }
        output: InstancePassword
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sks-template/:kube-version/:variant': {
      $get: {
        input: { param: { 'kube-version': string; variant: 'standard' | 'nvidia' } }
        output: { 'active-template'?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/instance/:id:resize-disk': {
      $put: {
        input: { param: { id: string } } & { json: { 'disk-size': bigint } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-service': {
      $get: {
        input: {}
        output: { 'dbaas-services'?: DbaasServiceCommon[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/elastic-ip': {
      $post: {
        input: {
          json: {
            addressfamily?: 'inet4' | 'inet6' | undefined
            description?: string | undefined
            healthcheck?: ElasticIpHealthcheck | undefined
            labels?: Labels | undefined
          }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: {}
        output: { 'elastic-ips'?: ElasticIp[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/zone': {
      $get: { input: {}; output: { zones?: Zone[] | undefined }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/instance-pool': {
      $get: {
        input: {}
        output: { 'instance-pools'?: InstancePool[] | undefined }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          json: {
            'application-consistent-snapshot-enabled'?: boolean | undefined
            'anti-affinity-groups'?: AntiAffinityGroupRef[] | undefined
            description?: string | undefined
            'public-ip-assignment'?: 'inet4' | 'dual' | 'none' | undefined
            labels?: Labels | undefined
            'security-groups'?: SecurityGroupRef[] | undefined
            'elastic-ips'?: ElasticIpRef[] | undefined
            name: string
            'instance-type': InstanceTypeRef
            'min-available'?: bigint | undefined
            'private-networks'?: PrivateNetworkRef[] | undefined
            template: TemplateRef
            size: bigint
            'ssh-key'?: SshKeyRef | undefined
            'instance-prefix'?: string | undefined
            'user-data'?: string | undefined
            'deploy-target'?: DeployTargetRef | undefined
            'ipv6-enabled'?: boolean | undefined
            'disk-size': bigint
            'ssh-keys'?: SshKeyRef[] | undefined
          }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-external-endpoint-rsyslog/:name': {
      $post: {
        input: { param: { name: string } } & { json: DbaasEndpointRsyslogInputCreate }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sks-cluster-kubeconfig/:id': {
      $post: {
        input: { param: { id: string } } & { json: SksKubeconfigRequest }
        output: { kubeconfig?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dns-domain/:domain-id/record': {
      $get: {
        input: { param: { 'domain-id': string } }
        output: { 'dns-domain-records'?: DnsDomainRecord[] | undefined }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { 'domain-id': string } } & {
          json: {
            name: string
            type:
              | 'NS'
              | 'CAA'
              | 'NAPTR'
              | 'POOL'
              | 'A'
              | 'HINFO'
              | 'CNAME'
              | 'SSHFP'
              | 'SRV'
              | 'AAAA'
              | 'MX'
              | 'TXT'
              | 'ALIAS'
              | 'URL'
            content: string
            ttl?: bigint | undefined
            priority?: bigint | undefined
          }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-ca-certificate': {
      $get: {
        input: {}
        output: { certificate?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-settings-grafana': {
      $get: {
        input: {}
        output: {
          settings?:
            | {
                grafana?:
                  | {
                      properties?: { [x: string]: unknown } | undefined
                      additionalProperties?: boolean | undefined
                      type?: string | undefined
                      title?: string | undefined
                    }
                  | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/environmental-impact/estimate': {
      $post:
        | {
            input: { json: { sku: string; metadata?: { [x: string]: unknown } | undefined } }
            output: { impact: { [x: string]: ImpactValueWithUnit } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { sku: string; metadata?: { [x: string]: unknown } | undefined } }
            output: ImpactErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { sku: string; metadata?: { [x: string]: unknown } | undefined } }
            output: ImpactErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/deploy-target': {
      $get: {
        input: {}
        output: { 'deploy-targets'?: DeployTarget[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/instance-type': {
      $get: {
        input: {}
        output: { 'instance-types'?: InstanceType[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ai/deployment': {
      $post:
        | {
            input: { json: CreateDeploymentRequest }
            output: Operation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateDeploymentRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateDeploymentRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateDeploymentRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 412
          }
      $get:
        | {
            input: { query: { visibility?: string | undefined } }
            output: ListDeploymentsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { visibility?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/live-balance': {
      $get:
        | { input: {}; output: LiveBalance; outputFormat: 'json'; status: 200 }
        | { input: {}; output: RateLimited; outputFormat: 'json'; status: 429 }
    }
  } & {
    '/dbaas-postgres/:service-name/database/:database-name': {
      $delete: {
        input: { param: { 'service-name': DbaasServiceName; 'database-name': DbaasPgDatabaseName } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-clickhouse/:service-name/role': {
      $get: {
        input: { param: { 'service-name': DbaasServiceName } }
        output: DbaasClickhouseRoles
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/block-storage/:id:attach': {
      $put: {
        input: { param: { id: string } } & { json: { instance: InstanceRef } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/kms-key/:id/enable': {
      $post:
        | {
            input: { param: { id: string } }
            output: SuccessResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/dbaas-postgres/:name/migration/stop': {
      $post: {
        input: { param: { name: DbaasServiceName } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-kafka/:name': {
      $get: {
        input: { param: { name: DbaasServiceName } }
        output: DbaasServiceKafka
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { name: DbaasServiceName } } & {
          json: {
            'authentication-methods'?:
              | { certificate?: boolean | undefined; sasl?: boolean | undefined }
              | undefined
            'kafka-rest-enabled'?: boolean | undefined
            'kafka-connect-enabled'?: boolean | undefined
            'ip-filter'?: string[] | undefined
            'schema-registry-settings'?: JsonSchemaSchemaRegistry | undefined
            'kafka-rest-settings'?: JsonSchemaKafkaRest | undefined
            'termination-protection'?: boolean | undefined
            'kafka-connect-settings'?: JsonSchemaKafkaConnect | undefined
            maintenance?:
              | {
                  dow:
                    | 'saturday'
                    | 'tuesday'
                    | 'never'
                    | 'wednesday'
                    | 'sunday'
                    | 'friday'
                    | 'monday'
                    | 'thursday'
                  time: string
                }
              | undefined
            'kafka-settings'?: JsonSchemaKafka | undefined
            'schema-registry-enabled'?: boolean | undefined
            version?: string | undefined
            plan: string
          }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { name: DbaasServiceName } } & {
          json: {
            'authentication-methods'?:
              | { certificate?: boolean | undefined; sasl?: boolean | undefined }
              | undefined
            'kafka-rest-enabled'?: boolean | undefined
            'kafka-connect-enabled'?: boolean | undefined
            'ip-filter'?: string[] | undefined
            'schema-registry-settings'?: JsonSchemaSchemaRegistry | undefined
            'kafka-rest-settings'?: JsonSchemaKafkaRest | undefined
            'termination-protection'?: boolean | undefined
            'kafka-connect-settings'?: JsonSchemaKafkaConnect | undefined
            maintenance?:
              | {
                  dow:
                    | 'saturday'
                    | 'tuesday'
                    | 'never'
                    | 'wednesday'
                    | 'sunday'
                    | 'friday'
                    | 'monday'
                    | 'thursday'
                  time: string
                }
              | undefined
            'kafka-settings'?: JsonSchemaKafka | undefined
            'schema-registry-enabled'?: boolean | undefined
            version?: string | undefined
            plan?: string | undefined
          }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { name: string } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/instance/:id:reset-password': {
      $put: {
        input: { param: { id: string } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-kafka/:name/schema-registry/acl-config': {
      $post: {
        input: { param: { name: DbaasServiceName } } & { json: DbaasKafkaSchemaRegistryAclEntry }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/private-network/:id:update-ip': {
      $put: {
        input: { param: { id: string } } & {
          json: { ip?: string | undefined; instance?: { id: string } | undefined }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/vpc/:vpc-id/route': {
      $get: {
        input: { param: { 'vpc-id': string } }
        output: { routes?: ListRouteEntry[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sks-cluster/:id/nodepool/:sks-nodepool-id': {
      $put: {
        input: { param: { id: string; 'sks-nodepool-id': string } } & {
          json: {
            'anti-affinity-groups'?: AntiAffinityGroupRef[] | undefined
            description?: string | undefined
            'public-ip-assignment'?: 'inet4' | 'dual' | undefined
            labels?: SksNodepoolLabels | undefined
            taints?: SksNodepoolTaints | undefined
            'security-groups'?: SecurityGroupRef[] | undefined
            name?: string | undefined
            'instance-type'?: InstanceTypeRef | undefined
            'private-networks'?: PrivateNetworkRef[] | undefined
            'kubelet-image-gc'?: KubeletImageGc | undefined
            'instance-prefix'?: string | undefined
            'deploy-target'?: DeployTargetRef | undefined
            'disk-size'?: bigint | undefined
            'nvidia-mig-profiles'?: NvidiaMigProfiles | undefined
          }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: string; 'sks-nodepool-id': string } }
        output: SksNodepool
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { id: string; 'sks-nodepool-id': string } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/block-storage-snapshot/:id': {
      $delete: {
        input: { param: { id: string } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & {
          json: { name?: (string | null) | undefined; labels?: Labels | undefined }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: string } }
        output: BlockStorageSnapshot
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/kms-key/:id/list-key-rotations': {
      $get:
        | {
            input: { param: { id: string } }
            output: ListKmsKeyRotationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/dbaas-postgres/:service-name/user': {
      $post: {
        input: { param: { 'service-name': DbaasServiceName } } & {
          json: { username: DbaasUserUsername; 'allow-replication'?: boolean | undefined }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-external-integrations/:service-name': {
      $get: {
        input: { param: { 'service-name': DbaasServiceName } }
        output: { 'external-integrations'?: DbaasExternalIntegration[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-external-integration/:integration-id': {
      $get: {
        input: { param: { 'integration-id': string } }
        output: DbaasExternalIntegration
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/instance-pool/:id': {
      $delete: {
        input: { param: { id: string } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: string } }
        output: InstancePool
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & {
          json: {
            'application-consistent-snapshot-enabled'?: boolean | undefined
            'anti-affinity-groups'?: (AntiAffinityGroupRef[] | null) | undefined
            description?: string | undefined
            'public-ip-assignment'?: 'inet4' | 'dual' | undefined
            labels?: Labels | undefined
            'security-groups'?: (SecurityGroupRef[] | null) | undefined
            'elastic-ips'?: (ElasticIpRef[] | null) | undefined
            name?: string | undefined
            'instance-type'?: InstanceTypeRef | undefined
            'min-available'?: (bigint | null) | undefined
            'private-networks'?: (PrivateNetworkRef[] | null) | undefined
            template?: TemplateRef | undefined
            'ssh-key'?: SshKeyRef | undefined
            'instance-prefix'?: (string | null) | undefined
            'user-data'?: (string | null) | undefined
            'deploy-target'?: DeployTargetRef | undefined
            'ipv6-enabled'?: boolean | undefined
            'disk-size'?: bigint | undefined
            'ssh-keys'?: (SshKeyRef[] | null) | undefined
          }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-external-endpoint-types': {
      $get: {
        input: {}
        output: {
          'endpoint-types'?:
            | {
                type?: EnumExternalEndpointTypes | undefined
                'service-types'?: string[] | undefined
                title?: string | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ai/api-key/:id': {
      $delete:
        | { input: { param: { id: string } }; output: Operation; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { id: string } }
            output: GetAiApiKeyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: UpdateAiApiKeyRequest }
            output: UpdateAiApiKeyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: UpdateAiApiKeyRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: UpdateAiApiKeyRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: UpdateAiApiKeyRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/private-network': {
      $get: {
        input: {}
        output: { 'private-networks'?: PrivateNetwork[] | undefined }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          json: {
            name: string
            description?: string | undefined
            netmask?: string | undefined
            'start-ip'?: string | undefined
            'end-ip'?: string | undefined
            labels?: Labels | undefined
            options?: PrivateNetworkOptions | undefined
          }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/vpc': {
      $post: {
        input: {
          json: { name: string; description?: string | undefined; labels?: Labels | undefined }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: {}
        output: { vpcs?: ListVpcEntry[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ai/api-key/:id/rotate': {
      $post:
        | {
            input: { param: { id: string } }
            output: RotateAiApiKeyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/instance/:id:start': {
      $put: {
        input: { param: { id: string } } & {
          json: { 'rescue-profile'?: 'netboot-efi' | 'netboot' | undefined }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/instance/:id:enable-tpm': {
      $post: {
        input: { param: { id: string } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organization': {
      $get: { input: {}; output: Organization; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/security-group/:id': {
      $get: {
        input: { param: { id: string } }
        output: SecurityGroup
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { id: string } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-clickhouse/:service-name/role/:role-uuid': {
      $delete: {
        input: { param: { 'service-name': DbaasServiceName; 'role-uuid': string } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sks-cluster/:id/authority/:authority/cert': {
      $get: {
        input: { param: { id: string; authority: 'control-plane' | 'aggregation' | 'kubelet' } }
        output: { cacert?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/snapshot/:id:export': {
      $post: {
        input: { param: { id: string } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ai/deployment/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: GetDeploymentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: UpdateDeploymentRequest }
            output: Operation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: UpdateDeploymentRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: UpdateDeploymentRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: UpdateDeploymentRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: UpdateDeploymentRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
      $delete:
        | { input: { param: { id: string } }; output: Operation; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/dbaas-kafka/:service-name/connect/password/reveal': {
      $get: {
        input: { param: { 'service-name': DbaasServiceName } }
        output: DbaasUserKafkaConnectSecrets
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/kms-key/:id/enable-key-rotation': {
      $post:
        | {
            input: { param: { id: string } } & { json: EnableKmsKeyRotationRequest }
            output: EnableKmsKeyRotationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: EnableKmsKeyRotationRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/vpc/:vpc-id/subnet/:subnet-id/route': {
      $get: {
        input: { param: { 'vpc-id': string; 'subnet-id': string } }
        output: { routes?: ListRouteEntry[] | undefined }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { 'vpc-id': string; 'subnet-id': string } } & {
          json: { description?: string | undefined; destination: string; target: string }
        }
        output: Route
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/elastic-ip/:id/:field': {
      $delete: {
        input: { param: { id: string; field: 'description' } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/quota/:entity': {
      $get: {
        input: { param: { entity: string } }
        output: Quota
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/vpc/:vpc-id/subnet': {
      $get: {
        input: { param: { 'vpc-id': string } }
        output: { subnets?: ListSubnetEntry[] | undefined }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { 'vpc-id': string } } & {
          json: {
            name: string
            description?: string | undefined
            labels?: Labels | undefined
            addressfamily: 'inet4'
            'address-space': 'private'
            'ipv4-block'?: string | undefined
          }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sks-cluster-deprecated-resources/:id': {
      $get: {
        input: { param: { id: string } }
        output: SksClusterDeprecatedResource[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/block-storage/:id': {
      $get: {
        input: { param: { id: string } }
        output: BlockStorageVolume
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & {
          json: { name?: (string | null) | undefined; labels?: Labels | undefined }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { id: string } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-opensearch/:service-name/user/:username': {
      $delete: {
        input: { param: { 'service-name': DbaasServiceName; username: DbaasUserUsername } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-external-endpoint-prometheus/:endpoint-id': {
      $get: {
        input: { param: { 'endpoint-id': string } }
        output: DbaasEndpointExternalPrometheusOutput
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { 'endpoint-id': string } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { 'endpoint-id': string } } & { json: DbaasEndpointPrometheusPayload }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/block-storage/:id:create-snapshot': {
      $post: {
        input: { param: { id: string } } & {
          json: { name?: string | undefined; labels?: Labels | undefined }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/private-network/:id:detach': {
      $put: {
        input: { param: { id: string } } & { json: { instance: Instance } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/private-network/:id': {
      $put: {
        input: { param: { id: string } } & {
          json: {
            name?: string | undefined
            description?: string | undefined
            netmask?: string | undefined
            'start-ip'?: string | undefined
            'end-ip'?: string | undefined
            labels?: Labels | undefined
            options?: PrivateNetworkOptions | undefined
          }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: string } }
        output: PrivateNetwork
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { id: string } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ai/instance-type': {
      $get: { input: {}; output: ListAiInstanceTypesResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/load-balancer/:id/:field': {
      $delete: {
        input: { param: { id: string; field: 'description' | 'labels' } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/instance/:id:scale': {
      $put: {
        input: { param: { id: string } } & { json: { 'instance-type': InstanceTypeRef } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api-key': {
      $post: {
        input: { json: { 'role-id': string; name: string } }
        output: IamApiKeyCreated
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: {}
        output: { 'api-keys'?: IamApiKey[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/block-storage-snapshot': {
      $get: {
        input: {}
        output: { 'block-storage-snapshots'?: BlockStorageSnapshot[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dns-domain': {
      $get: {
        input: {}
        output: { 'dns-domains'?: DnsDomain[] | undefined }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: { 'unicode-name'?: string | undefined } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/instance/:id:stop': {
      $put: {
        input: { param: { id: string } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dns-domain/:domain-id/record/:record-id': {
      $get: {
        input: { param: { 'domain-id': string; 'record-id': string } }
        output: DnsDomainRecord
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { 'domain-id': string; 'record-id': string } } & {
          json: {
            name?: string | undefined
            content?: string | undefined
            ttl?: bigint | undefined
            priority?: bigint | undefined
          }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { 'domain-id': string; 'record-id': string } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-kafka/:service-name/user': {
      $post: {
        input: { param: { 'service-name': DbaasServiceName } } & {
          json: { username: DbaasUserUsername }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-valkey/:service-name/user/:username/password/reset': {
      $put: {
        input: { param: { 'service-name': DbaasServiceName; username: DbaasUserUsername } } & {
          json: { password?: DbaasUserPassword | undefined }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-external-integration-settings-datadog/:integration-id': {
      $post: {
        input: { param: { 'integration-id': string } } & {
          json: { settings?: DbaasIntegrationSettingsDatadog | undefined }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { 'integration-id': string } }
        output: { settings?: DbaasIntegrationSettingsDatadog | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/security-group/:id:attach': {
      $put: {
        input: { param: { id: string } } & { json: { instance: Instance } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/snapshot/:id': {
      $delete: {
        input: { param: { id: string } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: string } }
        output: Snapshot
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sks-cluster/:id/nodepool/:sks-nodepool-id:scale': {
      $put: {
        input: { param: { id: string; 'sks-nodepool-id': string } } & { json: { size: bigint } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-settings-mysql': {
      $get: {
        input: {}
        output: {
          settings?:
            | {
                mysql?:
                  | {
                      properties?: { [x: string]: unknown } | undefined
                      additionalProperties?: boolean | undefined
                      type?: string | undefined
                      title?: string | undefined
                    }
                  | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sks-cluster/:id/upgrade-service-level': {
      $put: {
        input: { param: { id: string } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-settings-valkey': {
      $get: {
        input: {}
        output: {
          settings?:
            | {
                valkey?:
                  | {
                      properties?: { [x: string]: unknown } | undefined
                      additionalProperties?: boolean | undefined
                      type?: string | undefined
                      title?: string | undefined
                    }
                  | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api-key/:id': {
      $delete: {
        input: { param: { id: string } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: string } }
        output: IamApiKey
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/load-balancer/:id/service/:service-id/:field': {
      $delete: {
        input: { param: { id: string; 'service-id': string; field: 'description' } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-postgres/:service-name/database': {
      $post: {
        input: { param: { 'service-name': DbaasServiceName } } & {
          json: {
            'database-name': DbaasDatabaseName
            'lc-collate'?: string | undefined
            'lc-ctype'?: string | undefined
          }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/kms-key/:id/rotate': {
      $post:
        | {
            input: { param: { id: string } }
            output: RotateKmsKeyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/dbaas-settings-thanos': {
      $get: {
        input: {}
        output: {
          settings?:
            | {
                thanos?:
                  | {
                      properties?: { [x: string]: unknown } | undefined
                      additionalProperties?: boolean | undefined
                      type?: string | undefined
                      title?: string | undefined
                    }
                  | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/security-group/:id/rules': {
      $post: {
        input: { param: { id: string } } & {
          json: {
            'flow-direction': 'ingress' | 'egress'
            description?: string | undefined
            network?: string | undefined
            'security-group'?: SecurityGroupResource | undefined
            protocol: 'tcp' | 'esp' | 'icmp' | 'udp' | 'gre' | 'ah' | 'ipip' | 'icmpv6'
            icmp?:
              | { code?: (bigint | null) | undefined; type?: (bigint | null) | undefined }
              | undefined
            'start-port'?: bigint | undefined
            'end-port'?: bigint | undefined
          }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-settings-clickhouse': {
      $get: {
        input: {}
        output: {
          settings?:
            | {
                clickhouse?:
                  | {
                      properties?: { [x: string]: unknown } | undefined
                      additionalProperties?: boolean | undefined
                      type?: string | undefined
                      title?: string | undefined
                    }
                  | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-opensearch/:service-name/user': {
      $post: {
        input: { param: { 'service-name': DbaasServiceName } } & {
          json: { username: DbaasUserUsername }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-integration-types': {
      $get: {
        input: {}
        output: { 'dbaas-integration-types'?: DbaasIntegrationType[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/env-impact/:period': {
      $get: {
        input: { param: { period: string } }
        output: EnvImpactReport
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-postgres/:service-name/user/:username': {
      $delete: {
        input: { param: { 'service-name': DbaasServiceName; username: DbaasUserUsername } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/instance/:id:add-protection': {
      $put: {
        input: { param: { id: string } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-postgres/:service-name/user/:username/allow-replication': {
      $put: {
        input: { param: { 'service-name': DbaasServiceName; username: DbaasUserUsername } } & {
          json: { 'allow-replication'?: boolean | undefined }
        }
        output: DbaasPostgresUsers
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/iam-role/:id': {
      $put: {
        input: { param: { id: string } } & {
          json: {
            description?: string | undefined
            permissions?:
              | ('bypass-governance-retention' | 'reset-iam-organization-policy')[]
              | undefined
            labels?: Labels | undefined
            'max-session-ttl'?: bigint | undefined
            'assume-role-policy'?: IamAssumeRolePolicy | undefined
          }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $get: { input: { param: { id: string } }; output: IamRole; outputFormat: 'json'; status: 200 }
      $delete: {
        input: { param: { id: string } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/instance/:id/:field': {
      $delete: {
        input: { param: { id: string; field: 'labels' } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/instance-pool/:id/:field': {
      $delete: {
        input: {
          param: {
            id: string
            field:
              | 'anti-affinity-groups'
              | 'description'
              | 'labels'
              | 'security-groups'
              | 'elastic-ips'
              | 'private-networks'
              | 'ssh-key'
              | 'user-data'
              | 'deploy-target'
              | 'ipv6-enabled'
          }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/instance/:id:remove-protection': {
      $put: {
        input: { param: { id: string } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-kafka/:name/topic/acl-config': {
      $post: {
        input: { param: { name: DbaasServiceName } } & { json: DbaasKafkaTopicAclEntry }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/snapshot': {
      $get: {
        input: {}
        output: { snapshots?: Snapshot[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/operation/:id': {
      $get: {
        input: { param: { id: string } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dns-domain/:id/zone': {
      $get: {
        input: { param: { id: string } }
        output: { 'zone-file'?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-external-endpoint-opensearch/:name': {
      $post: {
        input: { param: { name: string } } & { json: DbaasEndpointOpensearchInputCreate }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-mysql/:service-name/database/:database-name': {
      $delete: {
        input: {
          param: { 'service-name': DbaasServiceName; 'database-name': DbaasMysqlDatabaseName }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/security-group/:id:remove-source': {
      $put: {
        input: { param: { id: string } } & { json: { cidr: string } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/iam-organization-policy': {
      $get: { input: {}; output: IamPolicy; outputFormat: 'json'; status: 200 }
      $put: { input: { json: IamPolicy }; output: Operation; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/dbaas-service-logs/:service-name': {
      $post: {
        input: { param: { 'service-name': string } } & {
          json: {
            limit?: bigint | undefined
            'sort-order'?: EnumSortOrder | undefined
            offset?: string | undefined
          }
        }
        output: DbaasServiceLogs
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/kms-key/:id/decrypt': {
      $post:
        | {
            input: { param: { id: string } } & { json: DecryptRequest }
            output: DecryptResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: DecryptRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/template/:id': {
      $delete: {
        input: { param: { id: string } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: string } } & { json: { 'target-zone': Zone } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & {
          json: { name?: string | undefined; description?: string | undefined }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: string } }
        output: Template
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-postgres/:name/maintenance/start': {
      $put: {
        input: { param: { name: DbaasServiceName } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-grafana/:service-name/user/:username/password/reveal': {
      $get: {
        input: { param: { 'service-name': DbaasServiceName; username: DbaasUserUsername } }
        output: DbaasUserGrafanaSecrets
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user/:id': {
      $put: {
        input: { param: { id: string } } & { json: { role?: IamRole | undefined } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { id: string } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/reverse-dns/instance/:id': {
      $post: {
        input: { param: { id: string } } & { json: { 'domain-name'?: string | undefined } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: string } }
        output: ReverseDnsRecord
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { id: string } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/instance-pool/:id:evict': {
      $put: {
        input: { param: { id: string } } & { json: { instances?: string[] | undefined } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sks-cluster/:id/rotate-csi-credentials': {
      $put: {
        input: { param: { id: string } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-grafana/:service-name/user/:username/password/reset': {
      $put: {
        input: { param: { 'service-name': DbaasServiceName; username: DbaasUserUsername } } & {
          json: { password?: DbaasUserPassword | undefined }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-clickhouse/:service-name/user/:username/password/reset': {
      $put: {
        input: { param: { 'service-name': DbaasServiceName; username: DbaasUserUsername } } & {
          json: { password?: DbaasUserPassword | undefined }
        }
        output: DbaasUserClickhouseSecrets
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/security-group/:id:detach': {
      $put: {
        input: { param: { id: string } } & { json: { instance: Instance } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-clickhouse/:service-name/acl-config': {
      $get: {
        input: { param: { 'service-name': DbaasServiceName } }
        output: DbaasClickhouseAclConfig
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-clickhouse/:service-name/user': {
      $get: {
        input: { param: { 'service-name': DbaasServiceName } }
        output: DbaasClickhouseUsers
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { 'service-name': DbaasServiceName } } & {
          json: {
            username: DbaasUserUsername
            password?: DbaasUserPassword | undefined
            roles?: DbaasClickhouseUserRoleInput[] | undefined
          }
        }
        output: DbaasUserClickhouseSecrets
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sks-cluster/:id/nodepool/:sks-nodepool-id:evict': {
      $put: {
        input: { param: { id: string; 'sks-nodepool-id': string } } & {
          json: { instances?: string[] | undefined }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-valkey/:service-name/user/:username': {
      $put: {
        input: { param: { 'service-name': DbaasServiceName; username: DbaasUserUsername } } & {
          json: { 'access-control'?: DbaasValkeyUserAccessControl | undefined }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { 'service-name': DbaasServiceName; username: DbaasUserUsername } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/kms-key/:id/disable': {
      $post:
        | {
            input: { param: { id: string } }
            output: SuccessResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/dbaas-kafka/:name/schema-registry/acl-config/:acl-id': {
      $delete: {
        input: { param: { name: DbaasServiceName; 'acl-id': DbaasKafkaAclId } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dns-domain/:id': {
      $delete: {
        input: { param: { id: string } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: string } }
        output: DnsDomain
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/block-storage/:id:resize-volume': {
      $put: {
        input: { param: { id: string } } & { json: { size: bigint } }
        output: BlockStorageVolume
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-kafka/:service-name/user/:username': {
      $delete: {
        input: { param: { 'service-name': DbaasServiceName; username: DbaasUserUsername } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-service-type/:service-type-name': {
      $get: {
        input: { param: { 'service-type-name': string } }
        output: DbaasServiceType
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/security-group/:id:add-source': {
      $put: {
        input: { param: { id: string } } & { json: { cidr: string } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-external-endpoint-datadog/:name': {
      $post: {
        input: { param: { name: string } } & { json: DbaasEndpointDatadogInputCreate }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-mysql/:name/maintenance/start': {
      $put: {
        input: { param: { name: DbaasServiceName } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-opensearch/:service-name/user/:username/password/reset': {
      $put: {
        input: { param: { 'service-name': DbaasServiceName; username: DbaasUserUsername } } & {
          json: { password?: DbaasUserPassword | undefined }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ai/model/:id': {
      $delete:
        | { input: { param: { id: string } }; output: Operation; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: DeleteModelConflictResponse
            outputFormat: 'json'
            status: 412
          }
      $get:
        | {
            input: { param: { id: string } }
            output: GetModelResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/sos-buckets-usage': {
      $get: {
        input: {}
        output: { 'sos-buckets-usage'?: SosBucketUsage[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/instance/:id:reset': {
      $put: {
        input: { param: { id: string } } & {
          json: { template?: TemplateRef | undefined; 'disk-size'?: bigint | undefined }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-mysql/:service-name/user/:username/password/reveal': {
      $get: {
        input: { param: { 'service-name': DbaasServiceName; username: DbaasUserUsername } }
        output: DbaasUserMysqlSecrets
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ssh-key/:name': {
      $delete: {
        input: { param: { name: string } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { name: string } }
        output: SshKey
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-service-metrics/:service-name': {
      $post: {
        input: { param: { 'service-name': string } } & {
          json: { period?: 'hour' | 'week' | 'year' | 'month' | 'day' | undefined }
        }
        output: { metrics?: { [x: string]: unknown } | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/deploy-target/:id': {
      $get: {
        input: { param: { id: string } }
        output: DeployTarget
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/elastic-ip/:id:detach': {
      $put: {
        input: { param: { id: string } } & { json: { instance: InstanceRef } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-mysql/:name/enable/writes': {
      $put: {
        input: { param: { name: DbaasServiceName } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-kafka/:service-name/user/:username/password/reveal': {
      $get: {
        input: { param: { 'service-name': DbaasServiceName; username: DbaasUserUsername } }
        output: DbaasUserKafkaSecrets
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/vpc/:vpc-id/subnet/:subnet-id/route/:id': {
      $delete: {
        input: { param: { 'vpc-id': string; 'subnet-id': string; id: string } }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/kms-key/:id/encrypt': {
      $post:
        | {
            input: { param: { id: string } } & { json: EncryptRequest }
            output: EncryptResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: EncryptRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/dbaas-task-migration-check/:service': {
      $post: {
        input: { param: { service: DbaasServiceName } } & {
          json: {
            'source-service-uri': string
            method?: EnumMigrationMethod | undefined
            'ignore-dbs'?: string | undefined
          }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-external-endpoint-datadog/:endpoint-id': {
      $delete: {
        input: { param: { 'endpoint-id': string } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { 'endpoint-id': string } }
        output: DbaasExternalEndpointDatadogOutput
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { 'endpoint-id': string } } & { json: DbaasEndpointDatadogInputUpdate }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/load-balancer/:id/service': {
      $post: {
        input: { param: { id: string } } & {
          json: {
            name: string
            description?: string | undefined
            'instance-pool': InstancePool
            protocol: 'tcp' | 'udp'
            strategy: 'round-robin' | 'maglev-hash' | 'source-hash'
            port: bigint
            'target-port': bigint
            healthcheck: LoadBalancerServiceHealthcheck
          }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ssh-key': {
      $get: {
        input: {}
        output: { 'ssh-keys'?: SshKey[] | undefined }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: { name: string; 'public-key': string } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/snapshot/:id:promote': {
      $post: {
        input: { param: { id: string } } & {
          json: {
            name: string
            description?: string | undefined
            'default-user'?: string | undefined
            'ssh-key-enabled'?: boolean | undefined
            'password-enabled'?: boolean | undefined
          }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-clickhouse/:service-name/user/:username/password/reveal': {
      $get: {
        input: { param: { 'service-name': DbaasServiceName; username: DbaasUserUsername } }
        output: DbaasUserClickhouseSecrets
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sks-cluster': {
      $post: {
        input: {
          json: {
            description?: (string | null) | undefined
            labels?: SksClusterLabels | undefined
            cni?: 'calico' | 'cilium' | undefined
            'auto-upgrade'?: boolean | undefined
            networking?: Networking | undefined
            oidc?: SksOidc | undefined
            name: string
            'create-default-security-group'?: (boolean | null) | undefined
            'enable-kube-proxy'?: boolean | undefined
            level: 'starter' | 'pro'
            'feature-gates'?: string[] | undefined
            addons?:
              | (
                  | 'exoscale-cloud-controller'
                  | 'exoscale-container-storage-interface'
                  | 'metrics-server'
                  | 'karpenter'
                )[]
              | undefined
            audit?: SksAuditCreate | undefined
            version: string
          }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: {}
        output: { 'sks-clusters'?: SksCluster[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/block-storage/:id:detach': {
      $put: {
        input: { param: { id: string } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-external-endpoint-prometheus/:name': {
      $post: {
        input: { param: { name: string } } & { json: DbaasEndpointPrometheusPayload }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/console/:id': {
      $get: {
        input: { param: { id: string } }
        output: { url?: string | undefined; host?: string | undefined; path?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-integration/:id': {
      $delete: {
        input: { param: { id: string } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & { json: { settings: { [x: string]: unknown } } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: string } }
        output: DbaasIntegration
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/elastic-ip/:id:attach': {
      $put: {
        input: { param: { id: string } } & { json: { instance: InstanceRef } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sks-cluster/:id': {
      $delete: {
        input: { param: { id: string } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: string } }
        output: SksCluster
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & {
          json: {
            description?: (string | null) | undefined
            labels?: SksClusterLabels | undefined
            'auto-upgrade'?: boolean | undefined
            oidc?: SksOidc | undefined
            name?: string | undefined
            'enable-operators-ca'?: boolean | undefined
            'feature-gates'?: (string[] | null) | undefined
            addons?:
              | (
                  | 'exoscale-cloud-controller'
                  | 'exoscale-container-storage-interface'
                  | 'metrics-server'
                  | 'karpenter'
                )[]
              | undefined
            audit?: SksAuditUpdate | undefined
          }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/quota': {
      $get: {
        input: {}
        output: { quotas?: Quota[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-integration-settings/:integration-type/:source-type/:dest-type': {
      $get: {
        input: { param: { 'integration-type': string; 'source-type': string; 'dest-type': string } }
        output: {
          settings?:
            | {
                properties?: { [x: string]: unknown } | undefined
                additionalProperties?: boolean | undefined
                type?: string | undefined
                title?: string | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-thanos/:service-name/user/:username/password/reveal': {
      $get: {
        input: { param: { 'service-name': DbaasServiceName; username: DbaasUserUsername } }
        output: DbaasUserThanosSecrets
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-clickhouse/:service-name/user/:user-uuid': {
      $delete: {
        input: { param: { 'service-name': DbaasServiceName; 'user-uuid': string } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-settings-pg': {
      $get: {
        input: {}
        output: {
          settings?:
            | {
                pg?:
                  | {
                      properties?: { [x: string]: unknown } | undefined
                      additionalProperties?: boolean | undefined
                      type?: string | undefined
                      title?: string | undefined
                    }
                  | undefined
                pglookout?:
                  | {
                      properties?: { [x: string]: unknown } | undefined
                      additionalProperties?: boolean | undefined
                      type?: string | undefined
                      title?: string | undefined
                    }
                  | undefined
                pgbouncer?:
                  | {
                      properties?: { [x: string]: unknown } | undefined
                      additionalProperties?: boolean | undefined
                      type?: string | undefined
                      title?: string | undefined
                    }
                  | undefined
                timescaledb?:
                  | {
                      properties?: { [x: string]: unknown } | undefined
                      additionalProperties?: boolean | undefined
                      type?: string | undefined
                      title?: string | undefined
                    }
                  | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/elastic-ip/:id': {
      $put: {
        input: { param: { id: string } } & {
          json: {
            description?: string | undefined
            healthcheck?: ElasticIpHealthcheck | undefined
            labels?: Labels | undefined
          }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: string } }
        output: ElasticIp
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { id: string } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sks-cluster/:id/inspection': {
      $get: {
        input: { param: { id: string } }
        output: { [x: string]: { [x: string]: unknown } }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-valkey/:name': {
      $delete: {
        input: { param: { name: string } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { name: DbaasServiceName } }
        output: DbaasServiceValkey
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { name: DbaasServiceName } } & {
          json: {
            'valkey-settings'?: JsonSchemaValkey | undefined
            'ip-filter'?: string[] | undefined
            'termination-protection'?: boolean | undefined
            'fork-from-service'?: DbaasServiceName | undefined
            maintenance?:
              | {
                  dow:
                    | 'saturday'
                    | 'tuesday'
                    | 'never'
                    | 'wednesday'
                    | 'sunday'
                    | 'friday'
                    | 'monday'
                    | 'thursday'
                  time: string
                }
              | undefined
            version?: string | undefined
            'recovery-backup-name'?: string | undefined
            plan: string
            migration?:
              | {
                  host: string
                  port: bigint
                  password?: string | undefined
                  ssl?: boolean | undefined
                  username?: string | undefined
                  dbname?: string | undefined
                  'ignore-dbs'?: string | undefined
                  method?: EnumMigrationMethod | undefined
                }
              | undefined
          }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { name: DbaasServiceName } } & {
          json: {
            maintenance?:
              | {
                  dow:
                    | 'saturday'
                    | 'tuesday'
                    | 'never'
                    | 'wednesday'
                    | 'sunday'
                    | 'friday'
                    | 'monday'
                    | 'thursday'
                  time: string
                }
              | undefined
            plan?: string | undefined
            'termination-protection'?: boolean | undefined
            'ip-filter'?: string[] | undefined
            migration?:
              | {
                  host: string
                  port: bigint
                  password?: string | undefined
                  ssl?: boolean | undefined
                  username?: string | undefined
                  dbname?: string | undefined
                  'ignore-dbs'?: string | undefined
                  method?: EnumMigrationMethod | undefined
                }
              | undefined
            version?: string | undefined
            'valkey-settings'?: JsonSchemaValkey | undefined
          }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/instance/:id': {
      $delete: {
        input: { param: { id: string } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & {
          json: {
            name?: string | undefined
            'user-data'?: string | undefined
            'public-ip-assignment'?: PublicIpAssignment | undefined
            labels?: Labels | undefined
            'application-consistent-snapshot-enabled'?: boolean | undefined
          }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: string } }
        output: Instance
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-mysql/:name/migration/stop': {
      $post: {
        input: { param: { name: DbaasServiceName } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/vpc/:vpc-id/subnet/:id': {
      $delete: {
        input: { param: { 'vpc-id': string; id: string } }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { 'vpc-id': string; id: string } } & {
          json: {
            name?: (string | null) | undefined
            description?: (string | null) | undefined
            labels?: Labels | undefined
            'ipv4-block'?: (string | null) | undefined
          }
        }
        output: Subnet
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { 'vpc-id': string; id: string } }
        output: Subnet
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-external-endpoints': {
      $get: {
        input: {}
        output: { 'dbaas-endpoints'?: DbaasExternalEndpoint[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-kafka/:name/maintenance/start': {
      $put: {
        input: { param: { name: DbaasServiceName } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sks-cluster/:id/rotate-ccm-credentials': {
      $put: {
        input: { param: { id: string } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-postgres/:service-name/connection-pool/:connection-pool-name': {
      $put: {
        input: {
          param: { 'service-name': DbaasServiceName; 'connection-pool-name': DbaasPgPoolName }
        } & {
          json: {
            'database-name'?: DbaasDatabaseName | undefined
            mode?: EnumPgPoolMode | undefined
            size?: DbaasPgPoolSize | undefined
            username?: DbaasPgPoolUsername | undefined
          }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: {
          param: { 'service-name': DbaasServiceName; 'connection-pool-name': DbaasPgPoolName }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/kms-key': {
      $post:
        | {
            input: { json: CreateKmsKeyRequest }
            output: CreateKmsKeyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateKmsKeyRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $get:
        | { input: {}; output: ListKmsKeysResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/dbaas-thanos/:name': {
      $get: {
        input: { param: { name: DbaasServiceName } }
        output: DbaasServiceThanos
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { name: DbaasServiceName } } & {
          json: {
            maintenance?:
              | {
                  dow:
                    | 'saturday'
                    | 'tuesday'
                    | 'never'
                    | 'wednesday'
                    | 'sunday'
                    | 'friday'
                    | 'monday'
                    | 'thursday'
                  time: string
                }
              | undefined
            plan: string
            'termination-protection'?: boolean | undefined
            'ip-filter'?: string[] | undefined
            'thanos-settings'?: JsonSchemaThanos | undefined
          }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { name: DbaasServiceName } } & {
          json: {
            maintenance?:
              | {
                  dow:
                    | 'saturday'
                    | 'tuesday'
                    | 'never'
                    | 'wednesday'
                    | 'sunday'
                    | 'friday'
                    | 'monday'
                    | 'thursday'
                  time: string
                }
              | undefined
            plan?: string | undefined
            'termination-protection'?: boolean | undefined
            'ip-filter'?: string[] | undefined
            'thanos-settings'?: JsonSchemaThanos | undefined
          }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { name: string } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/iam-role/:id:policy': {
      $put: {
        input: { param: { id: string } } & { json: IamPolicy }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-migration-status/:name': {
      $get: {
        input: { param: { name: DbaasServiceName } }
        output: DbaasMigrationStatus
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-mysql/:service-name/user/:username': {
      $delete: {
        input: { param: { 'service-name': DbaasServiceName; username: DbaasUserUsername } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sks-cluster/:id/generate-karpenter-nodepool': {
      $put: {
        input: { param: { id: string } }
        output: { nodepool?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/load-balancer/:id': {
      $put: {
        input: { param: { id: string } } & {
          json: {
            name?: string | undefined
            description?: string | undefined
            labels?: Labels | undefined
          }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { id: string } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: string } }
        output: LoadBalancer
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-service/:name': {
      $delete: {
        input: { param: { name: string } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/vpc/:vpc-id/subnet/:subnet-id/detach': {
      $put: {
        input: { param: { 'vpc-id': string; 'subnet-id': string } } & {
          json: { instance: InstanceRef }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-mysql/:service-name/database': {
      $post: {
        input: { param: { 'service-name': DbaasServiceName } } & {
          json: { 'database-name': DbaasDatabaseName }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/template': {
      $get: {
        input: {
          query: { visibility?: 'private' | 'public' | undefined; family?: string | undefined }
        }
        output: { templates?: Template[] | undefined }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          json: {
            'application-consistent-snapshot-enabled'?: boolean | undefined
            maintainer?: string | undefined
            description?: string | undefined
            'ssh-key-enabled': boolean
            name: string
            'default-user'?: string | undefined
            size?: bigint | undefined
            'password-enabled': boolean
            build?: string | undefined
            checksum: string
            'boot-mode'?: 'legacy' | 'uefi' | undefined
            url: string
            version?: string | undefined
          }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/instance/:id:reboot': {
      $put: {
        input: { param: { id: string } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/environmental-impact/report': {
      $get:
        | {
            input: { query: { from?: string | undefined; to?: string | undefined } }
            output: ImpactBreakdown
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { from?: string | undefined; to?: string | undefined } }
            output: ImpactErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { from?: string | undefined; to?: string | undefined } }
            output: ImpactErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/dbaas-settings-kafka': {
      $get: {
        input: {}
        output: {
          settings?:
            | {
                kafka?:
                  | {
                      properties?: { [x: string]: unknown } | undefined
                      additionalProperties?: boolean | undefined
                      type?: string | undefined
                      title?: string | undefined
                    }
                  | undefined
                'kafka-connect'?:
                  | {
                      properties?: { [x: string]: unknown } | undefined
                      additionalProperties?: boolean | undefined
                      type?: string | undefined
                      title?: string | undefined
                    }
                  | undefined
                'kafka-rest'?:
                  | {
                      properties?: { [x: string]: unknown } | undefined
                      additionalProperties?: boolean | undefined
                      type?: string | undefined
                      title?: string | undefined
                    }
                  | undefined
                'schema-registry'?:
                  | {
                      properties?: { [x: string]: unknown } | undefined
                      additionalProperties?: boolean | undefined
                      type?: string | undefined
                      title?: string | undefined
                    }
                  | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-postgres/:service-name/user/:username/password/reveal': {
      $get: {
        input: { param: { 'service-name': DbaasServiceName; username: DbaasUserUsername } }
        output: DbaasUserPostgresSecrets
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/iam-organization-policy:reset': {
      $post: { input: {}; output: Operation; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/dbaas-settings-opensearch': {
      $get: {
        input: {}
        output: {
          settings?:
            | {
                opensearch?:
                  | {
                      properties?: { [x: string]: unknown } | undefined
                      additionalProperties?: boolean | undefined
                      type?: string | undefined
                      title?: string | undefined
                    }
                  | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-external-endpoint/:source-service-name/attach': {
      $put: {
        input: { param: { 'source-service-name': DbaasServiceName } } & {
          json: { 'dest-endpoint-id': string; type: EnumExternalEndpointTypes }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/kms-key/:id/schedule-deletion': {
      $post:
        | {
            input: { param: { id: string } } & { json: ScheduleKmsKeyDeletionRequest }
            output: ScheduleKmsKeyDeletionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: ScheduleKmsKeyDeletionRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/dbaas-grafana/:name': {
      $delete: {
        input: { param: { name: string } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { name: DbaasServiceName } }
        output: DbaasServiceGrafana
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { name: DbaasServiceName } } & {
          json: {
            maintenance?:
              | {
                  dow:
                    | 'saturday'
                    | 'tuesday'
                    | 'never'
                    | 'wednesday'
                    | 'sunday'
                    | 'friday'
                    | 'monday'
                    | 'thursday'
                  time: string
                }
              | undefined
            plan?: string | undefined
            'termination-protection'?: boolean | undefined
            'grafana-settings'?: JsonSchemaGrafana | undefined
            'ip-filter'?: string[] | undefined
          }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { name: DbaasServiceName } } & {
          json: {
            maintenance?:
              | {
                  dow:
                    | 'saturday'
                    | 'tuesday'
                    | 'never'
                    | 'wednesday'
                    | 'sunday'
                    | 'friday'
                    | 'monday'
                    | 'thursday'
                  time: string
                }
              | undefined
            plan: string
            'termination-protection'?: boolean | undefined
            'fork-from-service'?: DbaasServiceName | undefined
            'grafana-settings'?: JsonSchemaGrafana | undefined
            'ip-filter'?: string[] | undefined
          }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-external-endpoint-rsyslog/:endpoint-id': {
      $delete: {
        input: { param: { 'endpoint-id': string } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { 'endpoint-id': string } } & { json: DbaasEndpointRsyslogInputUpdate }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { 'endpoint-id': string } }
        output: DbaasExternalEndpointRsyslogOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sks-cluster/:id/generate-karpenter-exoscale-nodeclass': {
      $put: {
        input: { param: { id: string } }
        output: { 'exoscale-nodeclass'?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sks-cluster/:id/nodepool': {
      $post: {
        input: { param: { id: string } } & {
          json: {
            'anti-affinity-groups'?: AntiAffinityGroupRef[] | undefined
            description?: string | undefined
            'public-ip-assignment'?: 'inet4' | 'dual' | undefined
            labels?: SksNodepoolLabels | undefined
            taints?: SksNodepoolTaints | undefined
            'security-groups'?: SecurityGroupRef[] | undefined
            name: string
            'instance-type': InstanceTypeRef
            'private-networks'?: PrivateNetworkRef[] | undefined
            size: bigint
            'kubelet-image-gc'?: KubeletImageGc | undefined
            'instance-prefix'?: string | undefined
            'deploy-target'?: DeployTargetRef | undefined
            addons?: 'storage-lvm'[] | undefined
            'disk-size': bigint
            'nvidia-mig-profiles'?: NvidiaMigProfiles | undefined
          }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-external-endpoint-elasticsearch/:name': {
      $post: {
        input: { param: { name: string } } & { json: DbaasEndpointElasticsearchInputCreate }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ai/api-key/:id/reveal': {
      $get:
        | {
            input: { param: { id: string } }
            output: RevealAiApiKeyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/dbaas-opensearch/:name/maintenance/start': {
      $put: {
        input: { param: { name: DbaasServiceName } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-kafka/:name/acl-config': {
      $get: {
        input: { param: { name: DbaasServiceName } }
        output: DbaasKafkaAcls
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-kafka/:service-name/user/:username/password/reset': {
      $put: {
        input: { param: { 'service-name': DbaasServiceName; username: DbaasUserUsername } } & {
          json: { password?: DbaasUserPassword | undefined }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ai/api-key': {
      $get:
        | { input: {}; output: ListAiApiKeysResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 403 }
      $post:
        | {
            input: { json: CreateAiApiKeyRequest }
            output: CreateAiApiKeyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateAiApiKeyRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateAiApiKeyRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateAiApiKeyRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/kms-key/:id/re-encrypt': {
      $post:
        | {
            input: { param: { id: string } } & { json: ReEncryptRequest }
            output: ReEncryptResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: ReEncryptRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/dbaas-opensearch/:service-name/user/:username/password/reveal': {
      $get: {
        input: { param: { 'service-name': DbaasServiceName; username: DbaasUserUsername } }
        output: DbaasUserOpensearchSecrets
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-valkey/:name/maintenance/start': {
      $put: {
        input: { param: { name: DbaasServiceName } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-opensearch/:name': {
      $post: {
        input: { param: { name: DbaasServiceName } } & {
          json: {
            'max-index-count'?: (bigint | null) | undefined
            'keep-index-refresh-interval'?: boolean | undefined
            'ip-filter'?: string[] | undefined
            'termination-protection'?: boolean | undefined
            'fork-from-service'?: DbaasServiceName | undefined
            'index-patterns'?:
              | {
                  'max-index-count'?: (bigint | null) | undefined
                  'sorting-algorithm'?: 'alphabetical' | 'creation_date' | undefined
                  pattern?: string | undefined
                }[]
              | undefined
            maintenance?:
              | {
                  dow:
                    | 'saturday'
                    | 'tuesday'
                    | 'never'
                    | 'wednesday'
                    | 'sunday'
                    | 'friday'
                    | 'monday'
                    | 'thursday'
                  time: string
                }
              | undefined
            'index-template'?:
              | {
                  'mapping-nested-objects-limit'?: (bigint | null) | undefined
                  'number-of-replicas'?: (bigint | null) | undefined
                  'number-of-shards'?: bigint | undefined
                }
              | undefined
            'opensearch-settings'?: JsonSchemaOpensearch | undefined
            version?: string | undefined
            'recovery-backup-name'?: string | undefined
            plan: string
            'opensearch-dashboards'?:
              | {
                  'opensearch-request-timeout'?: bigint | undefined
                  enabled?: boolean | undefined
                  'max-old-space-size'?: bigint | undefined
                }
              | undefined
          }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { name: DbaasServiceName } }
        output: DbaasServiceOpensearch
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { name: string } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { name: DbaasServiceName } } & {
          json: {
            'max-index-count'?: (bigint | null) | undefined
            'keep-index-refresh-interval'?: boolean | undefined
            'ip-filter'?: string[] | undefined
            'termination-protection'?: boolean | undefined
            'index-patterns'?:
              | {
                  'max-index-count'?: (bigint | null) | undefined
                  'sorting-algorithm'?: 'alphabetical' | 'creation_date' | undefined
                  pattern?: string | undefined
                }[]
              | undefined
            maintenance?:
              | {
                  dow:
                    | 'saturday'
                    | 'tuesday'
                    | 'never'
                    | 'wednesday'
                    | 'sunday'
                    | 'friday'
                    | 'monday'
                    | 'thursday'
                  time: string
                }
              | undefined
            'index-template'?:
              | {
                  'mapping-nested-objects-limit'?: (bigint | null) | undefined
                  'number-of-replicas'?: (bigint | null) | undefined
                  'number-of-shards'?: bigint | undefined
                }
              | undefined
            'opensearch-settings'?: JsonSchemaOpensearch | undefined
            version?: string | undefined
            plan?: string | undefined
            'opensearch-dashboards'?:
              | {
                  'opensearch-request-timeout'?: bigint | undefined
                  enabled?: boolean | undefined
                  'max-old-space-size'?: bigint | undefined
                }
              | undefined
          }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-external-endpoint/:source-service-name/detach': {
      $put: {
        input: { param: { 'source-service-name': DbaasServiceName } } & {
          json: { 'integration-id': string }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-valkey/:service-name/user/:username/password/reveal': {
      $get: {
        input: { param: { 'service-name': DbaasServiceName; username: DbaasUserUsername } }
        output: DbaasUserValkeySecrets
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ai/quota': {
      $get:
        | { input: {}; output: OrgConsumptionQuotaResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/dbaas-postgres/:name': {
      $put: {
        input: { param: { name: DbaasServiceName } } & {
          json: {
            'pgbouncer-settings'?: JsonSchemaPgbouncer | undefined
            'backup-schedule'?:
              | {
                  'backup-hour'?: (bigint | null) | undefined
                  'backup-minute'?: (bigint | null) | undefined
                }
              | undefined
            variant?: EnumPgVariant | undefined
            'timescaledb-settings'?: JsonSchemaTimescaledb | undefined
            'ip-filter'?: string[] | undefined
            'termination-protection'?: boolean | undefined
            'pgaudit-settings'?: JsonSchemaPgaudit | undefined
            'synchronous-replication'?: EnumPgSynchronousReplication | undefined
            'pglookout-settings'?: JsonSchemaPglookout | undefined
            maintenance?:
              | {
                  dow:
                    | 'saturday'
                    | 'tuesday'
                    | 'never'
                    | 'wednesday'
                    | 'sunday'
                    | 'friday'
                    | 'monday'
                    | 'thursday'
                  time: string
                }
              | undefined
            version?: string | undefined
            plan?: string | undefined
            'work-mem'?: bigint | undefined
            'shared-buffers-percentage'?: bigint | undefined
            'pg-settings'?: JsonSchemaPg | undefined
            migration?:
              | {
                  host: string
                  port: bigint
                  password?: string | undefined
                  ssl?: boolean | undefined
                  username?: string | undefined
                  dbname?: string | undefined
                  'ignore-dbs'?: string | undefined
                  method?: EnumMigrationMethod | undefined
                }
              | undefined
          }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { name: DbaasServiceName } }
        output: DbaasServicePg
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { name: DbaasServiceName } } & {
          json: {
            'pgbouncer-settings'?: JsonSchemaPgbouncer | undefined
            'backup-schedule'?:
              | {
                  'backup-hour'?: (bigint | null) | undefined
                  'backup-minute'?: (bigint | null) | undefined
                }
              | undefined
            variant?: EnumPgVariant | undefined
            integrations?:
              | {
                  type: 'read_replica'
                  'source-service'?: DbaasServiceName | undefined
                  'dest-service'?: DbaasServiceName | undefined
                  settings?: { [x: string]: unknown } | undefined
                }[]
              | undefined
            'timescaledb-settings'?: JsonSchemaTimescaledb | undefined
            'ip-filter'?: string[] | undefined
            'termination-protection'?: boolean | undefined
            'pgaudit-settings'?: JsonSchemaPgaudit | undefined
            'fork-from-service'?: DbaasServiceName | undefined
            'synchronous-replication'?: EnumPgSynchronousReplication | undefined
            'recovery-backup-time'?: string | undefined
            'pglookout-settings'?: JsonSchemaPglookout | undefined
            maintenance?:
              | {
                  dow:
                    | 'saturday'
                    | 'tuesday'
                    | 'never'
                    | 'wednesday'
                    | 'sunday'
                    | 'friday'
                    | 'monday'
                    | 'thursday'
                  time: string
                }
              | undefined
            'admin-username'?: string | undefined
            version?: DbaasPgTargetVersions | undefined
            plan: string
            'work-mem'?: bigint | undefined
            'shared-buffers-percentage'?: bigint | undefined
            'pg-settings'?: JsonSchemaPg | undefined
            'admin-password'?: string | undefined
            migration?:
              | {
                  host: string
                  port: bigint
                  password?: string | undefined
                  ssl?: boolean | undefined
                  username?: string | undefined
                  dbname?: string | undefined
                  'ignore-dbs'?: string | undefined
                  method?: EnumMigrationMethod | undefined
                }
              | undefined
          }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { name: string } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-valkey/:service-name/user': {
      $post: {
        input: { param: { 'service-name': DbaasServiceName } } & {
          json: {
            username: DbaasUserUsername
            'access-control'?: DbaasValkeyUserAccessControl | undefined
          }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { 'service-name': DbaasServiceName } }
        output: DbaasValkeyUsers
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sks-cluster/:id/rotate-karpenter-credentials': {
      $put: {
        input: { param: { id: string } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-integration': {
      $post: {
        input: {
          json: {
            'integration-type': EnumIntegrationTypes
            'source-service': DbaasServiceName
            'dest-service': DbaasServiceName
            settings?: { [x: string]: unknown } | undefined
          }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-task/:service/:id': {
      $get: {
        input: { param: { service: DbaasServiceName; id: string } }
        output: DbaasTask
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sos/:bucket/presigned-url': {
      $get: {
        input: { param: { bucket: string } } & { query: { key?: string | undefined } }
        output: { url?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sks-cluster/:id/rotate-operators-ca': {
      $put: {
        input: { param: { id: string } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ai/deployment/:id/api-key': {
      $get:
        | {
            input: { param: { id: string } }
            output: RevealDeploymentApiKeyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/anti-affinity-group/:id': {
      $get: {
        input: { param: { id: string } }
        output: AntiAffinityGroup
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { id: string } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/kms-key/:id/replicate': {
      $post:
        | {
            input: { param: { id: string } } & { json: ReplicateKmsKeyRequest }
            output: SuccessResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: ReplicateKmsKeyRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/sks-cluster-version': {
      $get: {
        input: { query: { 'include-deprecated'?: string | undefined } }
        output: { 'sks-cluster-versions'?: string[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/instance': {
      $post: {
        input: {
          json: {
            'application-consistent-snapshot-enabled'?: boolean | undefined
            'anti-affinity-groups'?: AntiAffinityGroupRef[] | undefined
            'public-ip-assignment'?: PublicIpAssignment | undefined
            labels?: Labels | undefined
            'auto-start'?: boolean | undefined
            'security-groups'?: SecurityGroupRef[] | undefined
            name?: string | undefined
            'instance-type': InstanceTypeRef
            template: TemplateRef
            'secureboot-enabled'?: boolean | undefined
            'ssh-key'?: SshKeyRef | undefined
            'user-data'?: string | undefined
            'tpm-enabled'?: boolean | undefined
            'deploy-target'?: DeployTargetRef | undefined
            'ipv6-enabled'?: boolean | undefined
            'disk-size': bigint
            'ssh-keys'?: SshKeyRef[] | undefined
          }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: {
          query: {
            'manager-id'?: string | undefined
            'manager-type'?: 'instance-pool' | undefined
            'ip-address'?: string | undefined
            labels?: string | undefined
          }
        }
        output: {
          instances?:
            | {
                'public-ip-assignment'?: PublicIpAssignment | undefined
                labels?: Labels | undefined
                'security-groups'?: SecurityGroup[] | undefined
                name?: string | undefined
                'instance-type'?: InstanceType | undefined
                'private-networks'?:
                  | { id?: string | undefined; 'mac-address'?: string | undefined }[]
                  | undefined
                template?: Template | undefined
                state?: InstanceState | undefined
                'ssh-key'?: SshKey | undefined
                'mac-address'?: string | undefined
                manager?: Manager | undefined
                'ipv6-address'?: string | undefined
                id?: string | undefined
                'ssh-keys'?: SshKey[] | undefined
                'created-at'?: string | undefined
                'public-ip'?: string | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/iam-role': {
      $get: {
        input: {}
        output: { 'iam-roles'?: IamRole[] | undefined }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          json: {
            name: string
            description?: string | undefined
            permissions?:
              | ('bypass-governance-retention' | 'reset-iam-organization-policy')[]
              | undefined
            editable?: boolean | undefined
            labels?: Labels | undefined
            policy?: IamPolicy | undefined
            'assume-role-policy'?: IamAssumeRolePolicy | undefined
            'max-session-ttl'?: bigint | undefined
          }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/private-network/:id/:field': {
      $delete: {
        input: { param: { id: string; field: 'labels' } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user': {
      $post: {
        input: { json: { email: string; role?: IamRole | undefined } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $get: { input: {}; output: { users?: User[] | undefined }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/dbaas-clickhouse/:name/maintenance/start': {
      $put: {
        input: { param: { name: DbaasServiceName } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ai/deployment/:id/logs': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { stream?: boolean | undefined; tail?: bigint | undefined }
            }
            output: GetDeploymentLogsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { stream?: boolean | undefined; tail?: bigint | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { stream?: boolean | undefined; tail?: bigint | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { stream?: boolean | undefined; tail?: bigint | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/sks-cluster/:id/upgrade': {
      $put: {
        input: { param: { id: string } } & { json: { version: string } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/kms-key/:id/cancel-deletion': {
      $post:
        | {
            input: { param: { id: string } }
            output: SuccessResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/kms-key/:id/generate-data-key': {
      $post:
        | {
            input: { param: { id: string } } & { json: GenerateDataKeyRequest }
            output: GenerateDataKeyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: GenerateDataKeyRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/vpc/:id': {
      $put: {
        input: { param: { id: string } } & {
          json: {
            name?: (string | null) | undefined
            description?: (string | null) | undefined
            labels?: Labels | undefined
          }
        }
        output: Vpc
        outputFormat: 'json'
        status: 200
      }
      $get: { input: { param: { id: string } }; output: Vpc; outputFormat: 'json'; status: 200 }
      $delete: {
        input: { param: { id: string } }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/block-storage': {
      $get: {
        input: { query: { 'instance-id'?: string | undefined } }
        output: { 'block-storage-volumes'?: BlockStorageVolume[] | undefined }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          json: {
            name?: string | undefined
            size?: bigint | undefined
            labels?: Labels | undefined
            'block-storage-snapshot'?: BlockStorageSnapshotRef | undefined
          }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-kafka/:name/topic/acl-config/:acl-id': {
      $delete: {
        input: { param: { name: DbaasServiceName; 'acl-id': DbaasKafkaAclId } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/instance/:instance-id:revert-snapshot': {
      $post: {
        input: { param: { 'instance-id': string } } & { json: { id: string } }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dbaas-postgres/:service-name/user/:username/password/reset': {
      $put: {
        input: { param: { 'service-name': DbaasServiceName; username: DbaasUserUsername } } & {
          json: { password?: DbaasUserPassword | undefined }
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
