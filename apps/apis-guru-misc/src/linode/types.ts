type Promotion = {
  credit_monthly_cap?: string | undefined
  credit_remaining?: string | undefined
  description?: string | undefined
  expire_dt?: string | undefined
  image_url?: string | undefined
  service_type?:
    | 'all'
    | 'backup'
    | 'blockstorage'
    | 'db_mysql'
    | 'ip_v4'
    | 'linode'
    | 'linode_disk'
    | 'linode_memory'
    | 'longview'
    | 'managed'
    | 'nodebalancer'
    | 'objectstorage'
    | 'transfer_tx'
    | undefined
  summary?: string | undefined
  this_month_credit_remaining?: string | undefined
}
type Account = {
  active_promotions?: Promotion[] | undefined
  active_since?: string | undefined
  address_1?: string | undefined
  address_2?: string | undefined
  balance?: number | undefined
  balance_uninvoiced?: number | undefined
  billing_source?: 'akamai' | 'linode' | undefined
  capabilities?: string[] | undefined
  city?: string | undefined
  company?: string | undefined
  country?: string | undefined
  credit_card?: { expiry?: string | undefined; last_four?: string | undefined } | undefined
  email?: string | undefined
  euuid?: string | undefined
  first_name?: string | undefined
  last_name?: string | undefined
  phone?: string | undefined
  state?: string | undefined
  tax_id?: string | undefined
  zip?: string | undefined
}
type ErrorObject = { field?: string | undefined; reason?: string | undefined }
type CreditCard = { card_number: string; cvv: string; expiry_month: number; expiry_year: number }
type PaginationEnvelopePage = number
type PaginationEnvelopePages = number
type PaginationEnvelopeResults = number
type EntityTransferEntities = { linodes?: number[] | undefined }
type EntityTransfer = {
  created?: string | undefined
  entities?: EntityTransferEntities | undefined
  expiry?: string | undefined
  is_sender?: boolean | undefined
  status?: 'accepted' | 'cancelled' | 'completed' | 'failed' | 'pending' | 'stale' | undefined
  token?: string | undefined
  updated?: string | undefined
}
type Event = {
  action?:
    | 'account_update'
    | 'account_settings_update'
    | 'backups_enable'
    | 'backups_cancel'
    | 'backups_restore'
    | 'community_question_reply'
    | 'community_like'
    | 'credit_card_updated'
    | 'disk_create'
    | 'disk_delete'
    | 'disk_update'
    | 'disk_duplicate'
    | 'disk_imagize'
    | 'disk_resize'
    | 'dns_record_create'
    | 'dns_record_delete'
    | 'dns_record_update'
    | 'dns_zone_create'
    | 'dns_zone_delete'
    | 'dns_zone_import'
    | 'dns_zone_update'
    | 'entity_transfer_accept'
    | 'entity_transfer_cancel'
    | 'entity_transfer_create'
    | 'entity_transfer_fail'
    | 'entity_transfer_stale'
    | 'firewall_create'
    | 'firewall_delete'
    | 'firewall_disable'
    | 'firewall_enable'
    | 'firewall_update'
    | 'firewall_device_add'
    | 'firewall_device_remove'
    | 'host_reboot'
    | 'image_delete'
    | 'image_update'
    | 'image_upload'
    | 'ipaddress_update'
    | 'lassie_reboot'
    | 'lish_boot'
    | 'linode_addip'
    | 'linode_boot'
    | 'linode_clone'
    | 'linode_create'
    | 'linode_delete'
    | 'linode_update'
    | 'linode_deleteip'
    | 'linode_migrate'
    | 'linode_migrate_datacenter'
    | 'linode_migrate_datacenter_create'
    | 'linode_mutate'
    | 'linode_mutate_create'
    | 'linode_reboot'
    | 'linode_rebuild'
    | 'linode_resize'
    | 'linode_resize_create'
    | 'linode_shutdown'
    | 'linode_snapshot'
    | 'linode_config_create'
    | 'linode_config_delete'
    | 'linode_config_update'
    | 'lke_node_create'
    | 'longviewclient_create'
    | 'longviewclient_delete'
    | 'longviewclient_update'
    | 'managed_disabled'
    | 'managed_enabled'
    | 'managed_service_create'
    | 'managed_service_delete'
    | 'nodebalancer_create'
    | 'nodebalancer_delete'
    | 'nodebalancer_update'
    | 'nodebalancer_config_create'
    | 'nodebalancer_config_delete'
    | 'nodebalancer_config_update'
    | 'nodebalancer_node_create'
    | 'nodebalancer_node_delete'
    | 'nodebalancer_node_update'
    | 'oauth_client_create'
    | 'oauth_client_delete'
    | 'oauth_client_secret_reset'
    | 'oauth_client_update'
    | 'password_reset'
    | 'payment_method_add'
    | 'payment_submitted'
    | 'profile_update'
    | 'stackscript_create'
    | 'stackscript_delete'
    | 'stackscript_update'
    | 'stackscript_publicize'
    | 'stackscript_revise'
    | 'tag_create'
    | 'tag_delete'
    | 'tfa_disabled'
    | 'tfa_enabled'
    | 'ticket_attachment_upload'
    | 'ticket_create'
    | 'ticket_update'
    | 'token_create'
    | 'token_delete'
    | 'token_update'
    | 'user_create'
    | 'user_update'
    | 'user_delete'
    | 'user_ssh_key_add'
    | 'user_ssh_key_delete'
    | 'user_ssh_key_update'
    | 'vlan_attach'
    | 'vlan_detach'
    | 'volume_attach'
    | 'volume_clone'
    | 'volume_create'
    | 'volume_delete'
    | 'volume_update'
    | 'volume_detach'
    | 'volume_resize'
    | undefined
  created?: string | undefined
  duration?: number | undefined
  entity?:
    | {
        id?: number | undefined
        label?: string | undefined
        type?:
          | 'account'
          | 'backups'
          | 'community'
          | 'disks'
          | 'domain'
          | 'entity_transfer'
          | 'firewall'
          | 'image'
          | 'ipaddress'
          | 'linode'
          | 'longview'
          | 'managed_service'
          | 'nodebalancer'
          | 'oauth_client'
          | 'profile'
          | 'stackscript'
          | 'tag'
          | 'ticket'
          | 'token'
          | 'user'
          | 'user_ssh_key'
          | 'volume'
          | undefined
        url?: string | undefined
      }
    | undefined
  id?: number | undefined
  message?: (string | null) | undefined
  percent_complete?: number | undefined
  rate?: string | undefined
  read?: boolean | undefined
  secondary_entity?:
    | {
        id?: string | undefined
        label?: string | undefined
        type?: string | undefined
        url?: string | undefined
      }
    | undefined
  seen?: boolean | undefined
  status?: 'failed' | 'finished' | 'notification' | 'scheduled' | 'started' | undefined
  time_remaining?: (string | null) | undefined
  username?: (string | null) | undefined
}
type Invoice = {
  date?: string | undefined
  id?: number | undefined
  label?: string | undefined
  subtotal?: number | undefined
  tax?: number | undefined
  tax_summary?: { name?: string | undefined; tax?: number | undefined }[] | undefined
  total?: number | undefined
}
type InvoiceItem = {
  amount?: number | undefined
  from?: string | undefined
  label?: string | undefined
  quantity?: number | undefined
  tax?: number | undefined
  to?: string | undefined
  total?: number | undefined
  type?: 'hourly' | 'misc' | undefined
  unit_price?: string | undefined
}
type Login = {
  datetime?: string | undefined
  id?: number | undefined
  ip?: string | undefined
  restricted?: boolean | undefined
  username?: string | undefined
}
type Maintenance = {
  entity?:
    | {
        id?: number | undefined
        label?: string | undefined
        type?: string | undefined
        url?: string | undefined
      }
    | undefined
  reason?: string | undefined
  status?: 'completed' | 'pending' | 'started' | undefined
  type?: 'reboot' | 'cold_migration' | 'live_migration' | undefined
  when?: string | undefined
}
type Notification = {
  body?: (string | null) | undefined
  entity?:
    | {
        id?: number | undefined
        label?: string | undefined
        type?: string | undefined
        url?: string | undefined
      }
    | undefined
  label?: string | undefined
  message?: string | undefined
  severity?: 'minor' | 'major' | 'critical' | undefined
  type?:
    | 'migration_scheduled'
    | 'migration_imminent'
    | 'migration_pending'
    | 'reboot_scheduled'
    | 'outage'
    | 'payment_due'
    | 'ticket_important'
    | 'ticket_abuse'
    | 'notice'
    | 'maintenance'
    | 'promotion'
    | undefined
  until?: string | undefined
  when?: string | undefined
}
type OAuthClient = {
  id?: string | undefined
  label?: string | undefined
  public?: boolean | undefined
  redirect_uri?: string | undefined
  secret?: string | undefined
  status?: 'active' | 'disabled' | 'suspended' | undefined
  thumbnail_url?: (string | null) | undefined
}
type CreditCardData = {
  card_type?: string | undefined
  expiry?: string | undefined
  last_four?: string | undefined
}
type GooglePayData = {
  card_type?: string | undefined
  expiry?: string | undefined
  last_four?: string | undefined
}
type PayPalData = { email?: string | undefined; paypal_id?: string | undefined }
type PaymentMethodIsDefault = boolean
type PaymentMethod = {
  created?: string | undefined
  data?: CreditCardData | GooglePayData | PayPalData | undefined
  id?: number | undefined
  is_default?: PaymentMethodIsDefault | undefined
  type?: 'credit_card' | 'google_pay' | 'paypal' | undefined
}
type Payment = { date?: string | undefined; id?: number | undefined; usd?: number | undefined }
type PaymentRequest = {
  cvv?: string | undefined
  payment_method_id?: number | undefined
  usd: string
}
type WarningObject = { details?: string | undefined; title?: string | undefined }
type PayPal = { cancel_url: string; redirect_url: string; usd: string }
type PayPalExecute = { payer_id: string; payment_id: string }
type ServiceTransferEntities = { linodes?: number[] | undefined }
type ServiceTransfer = {
  created?: string | undefined
  entities?: ServiceTransferEntities | undefined
  expiry?: string | undefined
  is_sender?: boolean | undefined
  status?: 'accepted' | 'cancelled' | 'completed' | 'failed' | 'pending' | 'stale' | undefined
  token?: string | undefined
  updated?: string | undefined
}
type AccountSettings = {
  backups_enabled?: boolean | undefined
  longview_subscription?: string | undefined
  managed?: boolean | undefined
  network_helper?: boolean | undefined
  object_storage?: 'disabled' | 'suspended' | 'active' | undefined
}
type Transfer = {
  billable?: number | undefined
  quota?: number | undefined
  used?: number | undefined
}
type User = {
  email?: string | undefined
  restricted?: boolean | undefined
  ssh_keys?: string[] | undefined
  tfa_enabled?: boolean | undefined
  username?: string | undefined
}
type Grant = {
  id?: number | undefined
  label?: string | undefined
  permissions?: 'read_only' | 'read_write' | undefined
}
type GrantsResponse = {
  database?: Grant[] | undefined
  domain?: Grant[] | undefined
  global?:
    | {
        account_access?: 'read_only' | 'read_write' | undefined
        add_databases?: boolean | undefined
        add_domains?: boolean | undefined
        add_firewalls?: boolean | undefined
        add_images?: boolean | undefined
        add_linodes?: boolean | undefined
        add_longview?: boolean | undefined
        add_nodebalancers?: boolean | undefined
        add_stackscripts?: boolean | undefined
        add_volumes?: boolean | undefined
        cancel_account?: boolean | undefined
        longview_subscription?: boolean | undefined
      }
    | undefined
  image?: Grant[] | undefined
  linode?: Grant[] | undefined
  longview?: Grant[] | undefined
  nodebalancer?: Grant[] | undefined
  stackscript?: Grant[] | undefined
  volume?: Grant[] | undefined
}
type DatabaseEngine = {
  engine?: string | undefined
  id?: string | undefined
  version?: string | undefined
}
type DatabaseAllowList = string[]
type DatabaseClusterSize = 1 | 3
type DatabaseCreated = string
type DatabaseEncrypted = boolean
type DatabaseHosts = {
  primary?: (string | null) | undefined
  secondary?: (string | null) | undefined
}
type DatabaseId = number
type DatabaseLabel = string
type DatabaseRegion = string
type DatabaseStatus =
  | 'provisioning'
  | 'active'
  | 'suspending'
  | 'suspended'
  | 'resuming'
  | 'restoring'
  | 'failed'
  | 'degraded'
  | 'updating'
  | 'backing_up'
type DatabaseType2 = string
type DatabaseUpdated = string
type DatabaseUpdates = {
  day_of_week?: number | undefined
  duration?: number | undefined
  frequency?: 'weekly' | 'monthly' | undefined
  hour_of_day?: number | undefined
  week_of_month?: (number | null) | undefined
}
type Database = {
  allow_list?: DatabaseAllowList | undefined
  cluster_size?: DatabaseClusterSize | undefined
  created?: DatabaseCreated | undefined
  encrypted?: DatabaseEncrypted | undefined
  engine?: 'mongodb' | 'mysql' | 'postgresql' | undefined
  hosts?: DatabaseHosts | undefined
  id?: DatabaseId | undefined
  instance_uri?: string | undefined
  label?: DatabaseLabel | undefined
  region?: DatabaseRegion | undefined
  status?: DatabaseStatus | undefined
  type?: DatabaseType2 | undefined
  updated?: DatabaseUpdated | undefined
  updates?: DatabaseUpdates | undefined
  version?: string | undefined
}
type DatabaseMongoDBCompressionType = 'none' | 'snappy' | 'zlip'
type DatabaseMongoDBReplicaSet = string | null
type DatabaseMongoDBSslConnection = boolean
type DatabaseMongoDBStorageEngine = 'mmapv1' | 'wiredtiger'
type DatabaseMongoDB = {
  allow_list?: DatabaseAllowList | undefined
  cluster_size?: DatabaseClusterSize | undefined
  compression_type?: DatabaseMongoDBCompressionType | undefined
  created?: DatabaseCreated | undefined
  encrypted?: DatabaseEncrypted | undefined
  engine?: string | undefined
  hosts?:
    | { primary?: (string | null) | undefined; secondary?: (string | null) | undefined }
    | undefined
  id?: DatabaseId | undefined
  label?: DatabaseLabel | undefined
  peers?: string[] | undefined
  port?: number | undefined
  region?: DatabaseRegion | undefined
  replica_set?: DatabaseMongoDBReplicaSet | undefined
  ssl_connection?: DatabaseMongoDBSslConnection | undefined
  status?: DatabaseStatus | undefined
  storage_engine?: DatabaseMongoDBStorageEngine | undefined
  type?: DatabaseType2 | undefined
  updated?: DatabaseUpdated | undefined
  updates?: DatabaseUpdates | undefined
  version?: string | undefined
}
type DatabaseBackup = {
  created?: string | undefined
  id?: number | undefined
  label?: string | undefined
  type?: 'snapshot' | 'auto' | undefined
}
type DatabaseBackupSnapshot = { label: string; target?: 'primary' | 'secondary' | undefined }
type DatabaseCredentials = { password?: string | undefined; username?: string | undefined }
type DatabaseSSL = { ca_certificate?: string | undefined }
type DatabaseMySQLReplicationType = 'none' | 'asynch' | 'semi_synch'
type DatabaseMySQLSslConnection = boolean
type DatabaseMySQL = {
  allow_list?: DatabaseAllowList | undefined
  cluster_size?: DatabaseClusterSize | undefined
  created?: DatabaseCreated | undefined
  encrypted?: DatabaseEncrypted | undefined
  engine?: string | undefined
  hosts?: DatabaseHosts | undefined
  id?: DatabaseId | undefined
  label?: DatabaseLabel | undefined
  port?: number | undefined
  region?: DatabaseRegion | undefined
  replication_type?: DatabaseMySQLReplicationType | undefined
  ssl_connection?: DatabaseMySQLSslConnection | undefined
  status?: DatabaseStatus | undefined
  type?: DatabaseType2 | undefined
  updated?: DatabaseUpdated | undefined
  updates?: DatabaseUpdates | undefined
  version?: string | undefined
}
type DatabaseMySQLRequest = {
  allow_list?: DatabaseAllowList | undefined
  cluster_size?: DatabaseClusterSize | undefined
  encrypted?: DatabaseEncrypted | undefined
  engine: string
  label: DatabaseLabel
  region: DatabaseRegion
  replication_type?: DatabaseMySQLReplicationType | undefined
  ssl_connection?: DatabaseMySQLSslConnection | undefined
  type: DatabaseType2
}
type DatabasePostgreSQLReplicationCommitType =
  | 'on'
  | 'local'
  | 'remote_write'
  | 'remote_apply'
  | 'off'
type DatabasePostgreSQLReplicationType = 'none' | 'asynch' | 'semi_synch'
type DatabasePostgreSQLSslConnection = boolean
type DatabasePostgreSQL = {
  allow_list?: DatabaseAllowList | undefined
  cluster_size?: DatabaseClusterSize | undefined
  created?: DatabaseCreated | undefined
  encrypted?: DatabaseEncrypted | undefined
  engine?: string | undefined
  hosts?:
    | { primary?: (string | null) | undefined; secondary?: (string | null) | undefined }
    | undefined
  id?: DatabaseId | undefined
  label?: DatabaseLabel | undefined
  port?: number | undefined
  region?: DatabaseRegion | undefined
  replication_commit_type?: DatabasePostgreSQLReplicationCommitType | undefined
  replication_type?: DatabasePostgreSQLReplicationType | undefined
  ssl_connection?: DatabasePostgreSQLSslConnection | undefined
  status?: DatabaseStatus | undefined
  type?: DatabaseType2 | undefined
  updated?: DatabaseUpdated | undefined
  updates?: DatabaseUpdates | undefined
  version?: string | undefined
}
type DatabasePostgreSQLRequest = {
  allow_list?: DatabaseAllowList | undefined
  cluster_size?: DatabaseClusterSize | undefined
  encrypted?: DatabaseEncrypted | undefined
  engine: string
  label: DatabaseLabel
  region: DatabaseRegion
  replication_commit_type?: DatabasePostgreSQLReplicationCommitType | undefined
  replication_type?: DatabasePostgreSQLReplicationType | undefined
  ssl_connection?: DatabasePostgreSQLSslConnection | undefined
  type: DatabaseType2
}
type DatabaseTypeEngine = {
  price?: { hourly?: number | undefined; monthly?: number | undefined } | undefined
  quantity?: 1 | 2 | 3 | undefined
}
type DatabaseType = {
  class?: string | undefined
  deprecated?: boolean | undefined
  disk?: number | undefined
  engines?:
    | {
        mongodb?: DatabaseTypeEngine[] | undefined
        mysql?: DatabaseTypeEngine[] | undefined
        postgresql?: DatabaseTypeEngine[] | undefined
      }
    | undefined
  id?: string | undefined
  label?: string | undefined
  memory?: number | undefined
  vcpus?: number | undefined
}
type Domain = {
  axfr_ips?: string[] | undefined
  description?: string | undefined
  domain?: string | undefined
  expire_sec?: number | undefined
  group?: string | undefined
  id?: number | undefined
  master_ips?: string[] | undefined
  refresh_sec?: number | undefined
  retry_sec?: number | undefined
  soa_email?: string | undefined
  status?: 'disabled' | 'active' | undefined
  tags?: string[] | undefined
  ttl_sec?: number | undefined
  type?: 'master' | 'slave' | undefined
}
type DomainRecordName = string
type DomainRecordPort = number
type DomainRecordPriority = number
type DomainRecordProtocol = string | null
type DomainRecordService = string | null
type DomainRecordTag = 'issue' | 'issuewild' | 'iodef'
type DomainRecordTarget = string
type DomainRecordTtlSec = number
type DomainRecordWeight = number
type DomainRecord = {
  created?: string | undefined
  id?: number | undefined
  name?: DomainRecordName | undefined
  port?: DomainRecordPort | undefined
  priority?: DomainRecordPriority | undefined
  protocol?: DomainRecordProtocol | undefined
  service?: DomainRecordService | undefined
  tag?: DomainRecordTag | undefined
  target?: DomainRecordTarget | undefined
  ttl_sec?: DomainRecordTtlSec | undefined
  type?: 'A' | 'AAAA' | 'NS' | 'MX' | 'CNAME' | 'TXT' | 'SRV' | 'PTR' | 'CAA' | undefined
  updated?: string | undefined
  weight?: DomainRecordWeight | undefined
}
type Image = {
  created?: string | undefined
  created_by?: string | undefined
  deprecated?: boolean | undefined
  description?: (string | null) | undefined
  eol?: string | undefined
  expiry?: (string | null) | undefined
  id?: string | undefined
  is_public?: boolean | undefined
  label?: string | undefined
  size?: number | undefined
  status?: 'creating' | 'pending_upload' | 'available' | undefined
  type?: 'manual' | 'automatic' | undefined
  updated?: string | undefined
  vendor?: string | undefined
}
type LinodeGroup = string
type LinodeLabel = string
type LinodeTags = string[]
type Linode = {
  alerts?:
    | {
        cpu?: number | undefined
        io?: number | undefined
        network_in?: number | undefined
        network_out?: number | undefined
        transfer_quota?: number | undefined
      }
    | undefined
  backups?:
    | {
        available?: boolean | undefined
        enabled?: boolean | undefined
        last_successful?: string | undefined
        schedule?:
          | {
              day?:
                | 'Scheduling'
                | 'Sunday'
                | 'Monday'
                | 'Tuesday'
                | 'Wednesday'
                | 'Thursday'
                | 'Friday'
                | 'Saturday'
                | undefined
              window?:
                | 'Scheduling'
                | 'W0'
                | 'W2'
                | 'W4'
                | 'W6'
                | 'W8'
                | 'W10'
                | 'W12'
                | 'W14'
                | 'W16'
                | 'W18'
                | 'W20'
                | 'W22'
                | undefined
            }
          | undefined
      }
    | undefined
  created?: string | undefined
  group?: LinodeGroup | undefined
  host_uuid?: string | undefined
  hypervisor?: 'kvm' | undefined
  id?: number | undefined
  image?: {} | undefined
  ipv4?: string[] | undefined
  ipv6?: (string | null) | undefined
  label?: LinodeLabel | undefined
  region?: string | undefined
  specs?:
    | {
        disk?: number | undefined
        memory?: number | undefined
        transfer?: number | undefined
        vcpus?: number | undefined
      }
    | undefined
  status?:
    | 'running'
    | 'offline'
    | 'booting'
    | 'rebooting'
    | 'shutting_down'
    | 'provisioning'
    | 'deleting'
    | 'migrating'
    | 'rebuilding'
    | 'cloning'
    | 'restoring'
    | 'stopped'
    | undefined
  tags?: LinodeTags | undefined
  type?: string | undefined
  updated?: string | undefined
  watchdog_enabled?: boolean | undefined
}
type DiskRequestAuthorizedKeys = string[]
type DiskRequestAuthorizedUsers = string[]
type DiskRequestImage = string
type DiskRequestRootPass = string
type DiskRequestStackscriptData = { [x: string]: unknown }
type DiskRequestStackscriptId = number
type LinodeConfigInterface = {
  ipam_address?: (string | null) | undefined
  label?: (string | null) | undefined
  purpose?: 'public' | 'vlan' | undefined
}
type LinodeConfigInterfaces = LinodeConfigInterface[]
type DiskFilesystem = 'raw' | 'swap' | 'ext3' | 'ext4' | 'initrd'
type Backup = {
  available?: boolean | undefined
  configs?: string[] | undefined
  created?: string | undefined
  disks?:
    | {
        filesystem?: DiskFilesystem | undefined
        label?: string | undefined
        size?: number | undefined
      }[]
    | undefined
  finished?: string | undefined
  id?: number | undefined
  label?: (string | null) | undefined
  status?:
    | 'paused'
    | 'pending'
    | 'running'
    | 'needsPostProcessing'
    | 'successful'
    | 'failed'
    | 'userAborted'
    | undefined
  type?: 'auto' | 'snapshot' | undefined
  updated?: string | undefined
}
type Device = { disk_id?: number | undefined; volume_id?: number | undefined }
type Devices = {
  sda?: Device | undefined
  sdb?: Device | undefined
  sdc?: Device | undefined
  sdd?: Device | undefined
  sde?: Device | undefined
  sdf?: Device | undefined
  sdg?: Device | undefined
  sdh?: Device | undefined
}
type LinodeConfig = {
  comments?: (string | null) | undefined
  devices?: Devices | undefined
  helpers?:
    | {
        devtmpfs_automount?: boolean | undefined
        distro?: boolean | undefined
        modules_dep?: boolean | undefined
        network?: boolean | undefined
        updatedb_disabled?: boolean | undefined
      }
    | undefined
  id?: number | undefined
  interfaces?: LinodeConfigInterfaces | undefined
  kernel?: string | undefined
  label?: string | undefined
  memory_limit?: number | undefined
  root_device?: string | undefined
  run_level?: 'default' | 'single' | 'binbash' | undefined
  virt_mode?: 'paravirt' | 'fullvirt' | undefined
}
type DiskLabel = string
type Disk = {
  created?: string | undefined
  filesystem?: DiskFilesystem | undefined
  id?: number | undefined
  label?: DiskLabel | undefined
  size?: number | undefined
  status?: 'ready' | 'not ready' | 'deleting' | undefined
  updated?: string | undefined
}
type FirewallLabel = string
type FirewallRuleConfig = {
  action?: 'ACCEPT' | 'DROP' | undefined
  addresses?: { ipv4?: string[] | undefined; ipv6?: string[] | undefined } | undefined
  description?: string | undefined
  label?: string | undefined
  ports?: string | undefined
  protocol?: 'TCP' | 'UDP' | 'ICMP' | 'IPENCAP' | undefined
}
type FirewallRules = {
  inbound?: FirewallRuleConfig[] | undefined
  inbound_policy?: 'ACCEPT' | 'DROP' | undefined
  outbound?: FirewallRuleConfig[] | undefined
  outbound_policy?: 'ACCEPT' | 'DROP' | undefined
}
type FirewallTags = string[]
type Firewall = {
  created?: string | undefined
  id?: number | undefined
  label?: FirewallLabel | undefined
  rules?: FirewallRules | undefined
  status?: 'enabled' | 'disabled' | 'deleted' | undefined
  tags?: FirewallTags | undefined
  updated?: string | undefined
}
type IPAddressPrivate = {
  address?: string | undefined
  gateway?: string | undefined
  linode_id?: number | undefined
  prefix?: number | undefined
  public?: boolean | undefined
  rdns?: string | undefined
  region?: string | undefined
  subnet_mask?: string | undefined
  type?: string | undefined
}
type IPAddress = {
  address?: string | undefined
  gateway?: (string | null) | undefined
  linode_id?: number | undefined
  prefix?: number | undefined
  public?: boolean | undefined
  rdns?: (string | null) | undefined
  region?: string | undefined
  subnet_mask?: string | undefined
  type?: 'ipv4' | 'ipv6' | 'ipv6/pool' | 'ipv6/range' | undefined
}
type IPv6Pool = {
  prefix?: number | undefined
  range?: string | undefined
  region?: string | undefined
  route_target?: (string | null) | undefined
}
type IPAddressV6LinkLocal = {
  address?: string | undefined
  gateway?: string | undefined
  linode_id?: number | undefined
  prefix?: number | undefined
  public?: boolean | undefined
  rdns?: string | undefined
  region?: string | undefined
  subnet_mask?: string | undefined
  type?: string | undefined
}
type IPAddressV6Slaac = {
  address?: string | undefined
  gateway?: string | undefined
  linode_id?: number | undefined
  prefix?: number | undefined
  public?: boolean | undefined
  rdns?: string | undefined
  region?: string | undefined
  subnet_mask?: string | undefined
  type?: string | undefined
}
type NodeBalancerClientConnThrottle = number
type NodeBalancerLabel = string
type NodeBalancer = {
  client_conn_throttle?: NodeBalancerClientConnThrottle | undefined
  created?: string | undefined
  hostname?: string | undefined
  id?: number | undefined
  ipv4?: string | undefined
  ipv6?: (string | null) | undefined
  label?: NodeBalancerLabel | undefined
  region?: string | undefined
  tags?: string[] | undefined
  transfer?:
    | {
        in?: (number | null) | undefined
        out?: (number | null) | undefined
        total?: (number | null) | undefined
      }
    | undefined
  updated?: string | undefined
}
type RescueDevices = {
  sda?: Device | undefined
  sdb?: Device | undefined
  sdc?: Device | undefined
  sdd?: Device | undefined
  sde?: Device | undefined
  sdf?: Device | undefined
  sdg?: Device | undefined
}
type LinodeStats = {
  cpu?: number[][] | undefined
  io?: { io?: number[][] | undefined; swap?: number[][] | undefined } | undefined
  netv4?:
    | {
        in?: number[][] | undefined
        out?: number[][] | undefined
        private_in?: number[][] | undefined
        private_out?: number[][] | undefined
      }
    | undefined
  netv6?:
    | {
        in?: number[][] | undefined
        out?: number[][] | undefined
        private_in?: number[][] | undefined
        private_out?: number[][] | undefined
      }
    | undefined
  title?: string | undefined
}
type VolumeLabel = string
type RegionId = string
type VolumeSize = number
type Volume = {
  created?: string | undefined
  filesystem_path?: string | undefined
  hardware_type?: 'hdd' | 'nvme' | undefined
  id?: number | undefined
  label?: VolumeLabel | undefined
  linode_id?: (number | null) | undefined
  linode_label?: (string | null) | undefined
  region?: RegionId | undefined
  size?: VolumeSize | undefined
  status?: 'creating' | 'active' | 'resizing' | undefined
  tags?: string[] | undefined
  updated?: string | undefined
}
type Kernel = {
  architecture?: 'x86_64' | 'i386' | undefined
  built?: string | undefined
  deprecated?: boolean | undefined
  id?: string | undefined
  kvm?: boolean | undefined
  label?: string | undefined
  pvops?: boolean | undefined
  version?: string | undefined
  xen?: boolean | undefined
}
type UserDefinedField = {
  default?: string | undefined
  example: string
  label: string
  manyOf?: string | undefined
  name: string
  oneOf?: string | undefined
}
type StackScript = {
  created?: string | undefined
  deployments_active?: number | undefined
  deployments_total?: number | undefined
  description?: string | undefined
  id?: number | undefined
  images?: string[] | undefined
  is_public?: boolean | undefined
  label?: string | undefined
  mine?: boolean | undefined
  rev_note?: string | undefined
  script?: string | undefined
  updated?: string | undefined
  user_defined_fields?: UserDefinedField[] | undefined
  user_gravatar_id?: string | undefined
  username?: string | undefined
}
type LinodeType = {
  addons?:
    | {
        backups?:
          | { price?: { hourly?: number | undefined; monthly?: number | undefined } | undefined }
          | undefined
      }
    | undefined
  class?: 'nanode' | 'standard' | 'dedicated' | 'gpu' | 'highmem' | undefined
  disk?: number | undefined
  gpus?: number | undefined
  id?: string | undefined
  label?: string | undefined
  memory?: number | undefined
  network_out?: number | undefined
  price?: { hourly?: number | undefined; monthly?: number | undefined } | undefined
  successor?: (string | null) | undefined
  transfer?: number | undefined
  vcpus?: number | undefined
}
type LKEClusterCreated = string
type LKEClusterK8sVersion = string
type LKEClusterLabel = string
type LKEClusterRegion = string
type LKEClusterTags = string[]
type LKEClusterUpdated = string
type LKECluster = {
  control_plane?: { high_availability?: boolean | undefined } | undefined
  created?: LKEClusterCreated | undefined
  id?: number | undefined
  k8s_version?: LKEClusterK8sVersion | undefined
  label?: LKEClusterLabel | undefined
  region?: LKEClusterRegion | undefined
  tags?: LKEClusterTags | undefined
  updated?: LKEClusterUpdated | undefined
}
type LKENodePoolRequestBodyAutoscaler = {
  enabled?: boolean | undefined
  max?: number | undefined
  min?: number | undefined
}
type LKENodePoolCount = number
type LKENodePoolDisksItems = { size?: number | undefined; type?: 'raw' | 'ext4' | undefined }
type LKENodePoolTags = string[]
type LKENodePoolType = string
type LKENodePoolRequestBody = {
  autoscaler?: LKENodePoolRequestBodyAutoscaler | undefined
  count?: LKENodePoolCount | undefined
  disks?: LKENodePoolDisksItems[] | undefined
  tags?: LKENodePoolTags | undefined
  type?: LKENodePoolType | undefined
}
type LKENodeStatus = {
  id?: string | undefined
  instance_id?: string | undefined
  status?: 'ready' | 'not_ready' | undefined
}
type LKENodePool = {
  autoscaler?:
    | { enabled?: boolean | undefined; max?: number | undefined; min?: number | undefined }
    | undefined
  count?: LKENodePoolCount | undefined
  disks?: LKENodePoolDisksItems[] | undefined
  id?: number | undefined
  nodes?: LKENodeStatus[] | undefined
  tags?: LKENodePoolTags | undefined
  type?: LKENodePoolType | undefined
}
type LKEVersion = { id?: string | undefined }
type LongviewClient = {
  api_key?: string | undefined
  apps?:
    | { apache?: boolean | undefined; mysql?: boolean | undefined; nginx?: boolean | undefined }
    | undefined
  created?: string | undefined
  id?: number | undefined
  install_code?: string | undefined
  label?: string | undefined
  updated?: string | undefined
}
type LongviewSubscription = {
  clients_included?: number | undefined
  id?: 'longview-3' | 'longview-10' | 'longview-40' | 'longview-100' | undefined
  label?: string | undefined
  price?: { hourly?: number | undefined; monthly?: number | undefined } | undefined
}
type LongviewPlan = {
  longview_subscription?: 'longview-3' | 'longview-10' | 'longview-40' | 'longview-100' | undefined
}
type ManagedContact = {
  email?: string | undefined
  group?: (string | null) | undefined
  id?: number | undefined
  name?: string | undefined
  phone?:
    | { primary?: (string | null) | undefined; secondary?: (string | null) | undefined }
    | undefined
  updated?: string | undefined
}
type ManagedCredential = {
  id?: number | undefined
  label?: string | undefined
  last_decrypted?: string | undefined
}
type ManagedIssue = {
  created?: string | undefined
  entity?:
    | {
        id?: number | undefined
        label?: string | undefined
        type?: 'ticket' | undefined
        url?: string | undefined
      }
    | undefined
  id?: number | undefined
  services?: number[] | undefined
}
type ManagedLinodeSettings = {
  group?: string | undefined
  id?: number | undefined
  label?: string | undefined
  ssh?:
    | {
        access?: boolean | undefined
        ip?: string | undefined
        port?: (number | null) | undefined
        user?: (string | null) | undefined
      }
    | undefined
}
type ManagedService = {
  address?: string | undefined
  body?: (string | null) | undefined
  consultation_group?: string | undefined
  created?: string | undefined
  credentials?: number[] | undefined
  id?: number | undefined
  label?: string | undefined
  notes?: (string | null) | undefined
  region?: string | undefined
  service_type?: 'url' | 'tcp' | undefined
  status?: 'disabled' | 'pending' | 'ok' | 'problem' | undefined
  timeout?: number | undefined
  updated?: string | undefined
}
type StatsData = { x?: number | undefined; y?: number | undefined }
type StatsDataAvailable = {
  cpu?: StatsData[] | undefined
  disk?: StatsData[] | undefined
  net_in?: StatsData[] | undefined
  net_out?: StatsData[] | undefined
  swap?: StatsData[] | undefined
}
type StatsDataUnavailable = string[]
type FirewallDevicesEntity = {
  id?: number | undefined
  label?: string | undefined
  type?: 'linode' | undefined
  url?: string | undefined
}
type FirewallDevices = {
  created?: string | undefined
  entity?: FirewallDevicesEntity | undefined
  id?: number | undefined
  updated?: string | undefined
}
type IPAddressesAssignRequest = {
  assignments: { address?: string | undefined; linode_id?: number | undefined }[]
  region: string
}
type IPAddressesShareRequest = { ips: string[]; linode_id: number }
type IPv6Range = {
  prefix?: number | undefined
  range?: string | undefined
  region?: string | undefined
  route_target?: (string | null) | undefined
}
type IPv6RangeBGP = {
  is_bgp?: boolean | undefined
  linodes?: number[] | undefined
  prefix?: number | undefined
  range?: string | undefined
  region?: string | undefined
}
type Vlans = {
  created?: string | undefined
  label?: string | undefined
  linodes?: number[] | undefined
  region?: string | undefined
}
type NodeBalancerConfigAlgorithm = 'roundrobin' | 'leastconn' | 'source'
type NodeBalancerConfigCheck = 'none' | 'connection' | 'http' | 'http_body'
type NodeBalancerConfigCheckAttempts = number
type NodeBalancerConfigCheckBody = string
type NodeBalancerConfigCheckInterval = number
type NodeBalancerConfigCheckPassive = boolean
type NodeBalancerConfigCheckPath = string
type NodeBalancerConfigCheckTimeout = number
type NodeBalancerConfigCipherSuite = 'recommended' | 'legacy'
type NodeBalancerNodeAddress = string
type NodeBalancerNodeLabel = string
type NodeBalancerNodeMode = 'accept' | 'reject' | 'drain' | 'backup'
type NodeBalancerNodeWeight = number
type NodeBalancerNode = {
  address?: NodeBalancerNodeAddress | undefined
  config_id?: number | undefined
  id?: number | undefined
  label?: NodeBalancerNodeLabel | undefined
  mode?: NodeBalancerNodeMode | undefined
  nodebalancer_id?: number | undefined
  status?: 'unknown' | 'UP' | 'DOWN' | undefined
  weight?: NodeBalancerNodeWeight | undefined
}
type NodeBalancerConfigPort = number
type NodeBalancerConfigProtocol = 'http' | 'https' | 'tcp'
type NodeBalancerConfigProxyProtocol = 'none' | 'v1' | 'v2'
type NodeBalancerConfigSslCert = string | null
type NodeBalancerConfigSslKey = string | null
type NodeBalancerConfigStickiness = 'none' | 'table' | 'http_cookie'
type NodeBalancerConfig = {
  algorithm?: NodeBalancerConfigAlgorithm | undefined
  check?: NodeBalancerConfigCheck | undefined
  check_attempts?: NodeBalancerConfigCheckAttempts | undefined
  check_body?: NodeBalancerConfigCheckBody | undefined
  check_interval?: NodeBalancerConfigCheckInterval | undefined
  check_passive?: NodeBalancerConfigCheckPassive | undefined
  check_path?: NodeBalancerConfigCheckPath | undefined
  check_timeout?: NodeBalancerConfigCheckTimeout | undefined
  cipher_suite?: NodeBalancerConfigCipherSuite | undefined
  id?: number | undefined
  nodebalancer_id?: number | undefined
  nodes_status?: { down?: number | undefined; up?: number | undefined } | undefined
  port?: NodeBalancerConfigPort | undefined
  protocol?: NodeBalancerConfigProtocol | undefined
  proxy_protocol?: NodeBalancerConfigProxyProtocol | undefined
  ssl_cert?: NodeBalancerConfigSslCert | undefined
  ssl_commonname?: string | undefined
  ssl_fingerprint?: string | undefined
  ssl_key?: NodeBalancerConfigSslKey | undefined
  stickiness?: NodeBalancerConfigStickiness | undefined
}
type NodeBalancerStats = {
  data?:
    | {
        connections?: number[] | undefined
        traffic?: { in?: number[] | undefined; out?: number[] | undefined } | undefined
      }
    | undefined
  title?: string | undefined
}
type ObjectStorageBucket = {
  cluster?: string | undefined
  created?: string | undefined
  hostname?: string | undefined
  label?: string | undefined
  objects?: number | undefined
  size?: number | undefined
}
type ObjectStorageObject = {
  etag?: string | undefined
  is_truncated?: boolean | undefined
  last_modified?: string | undefined
  name?: string | undefined
  next_marker?: (string | null) | undefined
  owner?: string | undefined
  size?: number | undefined
}
type ObjectStorageSSLResponse = { ssl?: boolean | undefined }
type ObjectStorageSSL = { certificate: string; private_key: string }
type ObjectStorageCluster = {
  domain?: string | undefined
  id?: string | undefined
  region?: string | undefined
  static_site_domain?: string | undefined
  status?: 'available' | 'unavailable' | undefined
}
type ObjectStorageKey = {
  access_key?: string | undefined
  bucket_access?:
    | {
        bucket_name?: string | undefined
        cluster?: string | undefined
        permissions?: 'read_write' | 'read_only' | undefined
      }[]
    | undefined
  id?: number | undefined
  label?: string | undefined
  limited?: boolean | undefined
  secret_key?: string | undefined
}
type Profile = {
  authentication_type?: 'password' | 'github' | undefined
  authorized_keys?: (string[] | null) | undefined
  email?: string | undefined
  email_notifications?: boolean | undefined
  ip_whitelist_enabled?: boolean | undefined
  lish_auth_method?: 'password_keys' | 'keys_only' | 'disabled' | undefined
  referrals?:
    | {
        code?: string | undefined
        completed?: number | undefined
        credit?: number | undefined
        pending?: number | undefined
        total?: number | undefined
        url?: string | undefined
      }
    | undefined
  restricted?: boolean | undefined
  timezone?: string | undefined
  two_factor_auth?: boolean | undefined
  uid?: number | undefined
  username?: string | undefined
  verified_phone_number?: string | undefined
}
type AuthorizedApp = {
  created?: string | undefined
  expiry?: (string | null) | undefined
  id?: number | undefined
  label?: string | undefined
  scopes?: string | undefined
  thumbnail_url?: string | undefined
  website?: string | undefined
}
type TrustedDevice = {
  created?: string | undefined
  expiry?: string | undefined
  id?: number | undefined
  last_authenticated?: string | undefined
  last_remote_addr?: string | undefined
  user_agent?: string | undefined
}
type SecurityQuestionId = number
type SecurityQuestionQuestion = string
type SecurityQuestionResponse = string
type SecurityQuestionsGet = {
  security_questions?:
    | {
        id?: SecurityQuestionId | undefined
        question?: SecurityQuestionQuestion | undefined
        response?: SecurityQuestionResponse | undefined
      }[]
    | undefined
}
type SecurityQuestionsPost = {
  security_questions?:
    | {
        question_id?: SecurityQuestionId | undefined
        response?: SecurityQuestionResponse | undefined
        security_question?: SecurityQuestionQuestion | undefined
      }[]
    | undefined
}
type SSHKeyLabel = string
type SSHKey = {
  created?: string | undefined
  id?: number | undefined
  label?: SSHKeyLabel | undefined
  ssh_key?: string | undefined
}
type PersonalAccessTokenLabel = string
type PersonalAccessToken = {
  created?: string | undefined
  expiry?: string | undefined
  id?: number | undefined
  label?: PersonalAccessTokenLabel | undefined
  scopes?: string | undefined
  token?: string | undefined
}
type Region = {
  capabilities?: string[] | undefined
  country?: string | undefined
  id?: RegionId | undefined
  label?: string | undefined
  resolvers?: { ipv4?: string | undefined; ipv6?: string | undefined } | undefined
  status?: 'ok' | 'outage' | undefined
}
type SupportTicket = {
  attachments?: string[] | undefined
  closable?: boolean | undefined
  closed?: (string | null) | undefined
  description?: string | undefined
  entity?:
    | ({
        id?: number | undefined
        label?: string | undefined
        type?: string | undefined
        url?: string | undefined
      } | null)
    | undefined
  gravatar_id?: string | undefined
  id?: number | undefined
  opened?: string | undefined
  opened_by?: string | undefined
  status?: 'closed' | 'new' | 'open' | undefined
  summary?: string | undefined
  updated?: string | undefined
  updated_by?: (string | null) | undefined
}
type SupportTicketRequest = {
  database_id?: number | undefined
  description: string
  domain_id?: number | undefined
  firewall_id?: number | undefined
  linode_id?: number | undefined
  lkecluster_id?: number | undefined
  longviewclient_id?: number | undefined
  managed_issue?: boolean | undefined
  nodebalancer_id?: number | undefined
  region?: string | undefined
  summary: string
  vlan?: string | undefined
  volume_id?: number | undefined
}
type SupportTicketReply = {
  created?: string | undefined
  created_by?: string | undefined
  description?: string | undefined
  from_linode?: boolean | undefined
  gravatar_id?: string | undefined
  id?: number | undefined
}
type Tag = { label?: string | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/account': {
      $get:
        | { input: {}; output: Account; outputFormat: 'json'; status: 200 }
        | {
            input: {}
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | { input: { json: Account }; output: Account; outputFormat: 'json'; status: 200 }
        | {
            input: { json: Account }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/cancel': {
      $post:
        | {
            input: { json: { comments?: string | undefined } }
            output: { survey_link?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { comments?: string | undefined } }
            output: { errors?: { reason?: string | undefined }[] | undefined }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: { comments?: string | undefined } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/credit-card': {
      $post:
        | {
            input: { json: CreditCard }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreditCard }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/entity-transfers': {
      $get:
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: {
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
              data?: EntityTransfer[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: { entities: EntityTransferEntities } }
            output: EntityTransfer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { entities: EntityTransferEntities } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/entity-transfers/:token': {
      $delete:
        | {
            input: { param: { token: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { token: string } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { token: string } }
            output: EntityTransfer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { token: string } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/entity-transfers/:token/accept': {
      $post:
        | {
            input: { param: { token: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { token: string } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/events': {
      $get:
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: {
              data?: Event[] | undefined
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/events/:eventId': {
      $get:
        | {
            input: { param: { eventId: number } }
            output: Event
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { eventId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/events/:eventId/read': {
      $post:
        | {
            input: { param: { eventId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { eventId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/events/:eventId/seen': {
      $post:
        | {
            input: { param: { eventId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { eventId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/invoices': {
      $get:
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: {
              data?: Invoice[] | undefined
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/invoices/:invoiceId': {
      $get:
        | {
            input: { param: { invoiceId: number } }
            output: Invoice
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { invoiceId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/invoices/:invoiceId/items': {
      $get:
        | {
            input: { param: { invoiceId: number } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              data?: InvoiceItem[] | undefined
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { invoiceId: number } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/logins': {
      $get:
        | {
            input: {}
            output: {
              data?: Login[] | undefined
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/logins/:loginId': {
      $get:
        | {
            input: { param: { loginId: number } }
            output: Login
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { loginId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/maintenance': {
      $get:
        | {
            input: {}
            output: {
              data?: Maintenance[] | undefined
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/notifications': {
      $get:
        | {
            input: {}
            output: {
              data?: Notification[] | undefined
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/oauth-clients': {
      $get:
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: {
              data?: OAuthClient[] | undefined
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              json: {
                id?: string | undefined
                label?: string | undefined
                public?: boolean | undefined
                redirect_uri?: string | undefined
                secret?: string | undefined
                status?: 'active' | 'disabled' | 'suspended' | undefined
                thumbnail_url?: (string | null) | undefined
              }
            }
            output: OAuthClient
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                id?: string | undefined
                label?: string | undefined
                public?: boolean | undefined
                redirect_uri?: string | undefined
                secret?: string | undefined
                status?: 'active' | 'disabled' | 'suspended' | undefined
                thumbnail_url?: (string | null) | undefined
              }
            }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/oauth-clients/:clientId': {
      $delete:
        | {
            input: { param: { clientId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clientId: string } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { clientId: string } }
            output: OAuthClient
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clientId: string } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { clientId: string } } & { json: OAuthClient }
            output: OAuthClient
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clientId: string } } & { json: OAuthClient }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/oauth-clients/:clientId/reset-secret': {
      $post:
        | {
            input: { param: { clientId: string } }
            output: OAuthClient
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clientId: string } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/oauth-clients/:clientId/thumbnail': {
      $get:
        | {
            input: { param: { clientId: string } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { clientId: string } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { clientId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clientId: string } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/payment-methods': {
      $get:
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: {
              data?: PaymentMethod[] | undefined
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              json: { data: CreditCard; is_default: PaymentMethodIsDefault; type: 'credit_card' }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: { data: CreditCard; is_default: PaymentMethodIsDefault; type: 'credit_card' }
            }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/payment-methods/:paymentMethodId': {
      $delete:
        | {
            input: { param: { paymentMethodId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { paymentMethodId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { paymentMethodId: number } }
            output: PaymentMethod
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { paymentMethodId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/payment-methods/:paymentMethodId/make-default': {
      $post:
        | {
            input: { param: { paymentMethodId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { paymentMethodId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/payments': {
      $get:
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: {
              data?: Payment[] | undefined
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $post:
        | { input: { json: PaymentRequest }; output: Payment; outputFormat: 'json'; status: 200 }
        | {
            input: { json: PaymentRequest }
            output: { warnings?: WarningObject[] | undefined }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: PaymentRequest }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/payments/paypal': {
      $post:
        | {
            input: { json: PayPal }
            output: { checkout_token?: string | undefined; payment_id?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PayPal }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/payments/paypal/execute': {
      $post:
        | {
            input: { json: PayPalExecute }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PayPalExecute }
            output: { warnings?: WarningObject[] | undefined }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: PayPalExecute }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/payments/:paymentId': {
      $get:
        | {
            input: { param: { paymentId: number } }
            output: Payment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { paymentId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/promo-codes': {
      $post:
        | {
            input: { json: { promo_code: string } }
            output: Promotion
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { promo_code: string } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/service-transfers': {
      $get:
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: {
              data?: ServiceTransfer[] | undefined
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: { entities: ServiceTransferEntities } }
            output: ServiceTransfer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { entities: ServiceTransferEntities } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/service-transfers/:token': {
      $delete:
        | {
            input: { param: { token: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { token: string } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { token: string } }
            output: ServiceTransfer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { token: string } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/service-transfers/:token/accept': {
      $post:
        | {
            input: { param: { token: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { token: string } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/settings': {
      $get:
        | { input: {}; output: AccountSettings; outputFormat: 'json'; status: 200 }
        | {
            input: {}
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { json: AccountSettings }
            output: AccountSettings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AccountSettings }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/settings/managed-enable': {
      $post:
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
        | {
            input: {}
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/transfer': {
      $get:
        | { input: {}; output: Transfer; outputFormat: 'json'; status: 200 }
        | {
            input: {}
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/users': {
      $get:
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: {
              data?: User[] | undefined
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              json: {
                email?: string | undefined
                restricted?: boolean | undefined
                ssh_keys?: string[] | undefined
                tfa_enabled?: boolean | undefined
                username?: string | undefined
              }
            }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                email?: string | undefined
                restricted?: boolean | undefined
                ssh_keys?: string[] | undefined
                tfa_enabled?: boolean | undefined
                username?: string | undefined
              }
            }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/users/:username': {
      $delete:
        | {
            input: { param: { username: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { username: string } }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { username: string } } & { json: User }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string } } & { json: User }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/account/users/:username/grants': {
      $get:
        | {
            input: { param: { username: string } }
            output: GrantsResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { username: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { username: string } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { username: string } } & { json: GrantsResponse }
            output: GrantsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { username: string } } & { json: GrantsResponse }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/databases/engines': {
      $get:
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: {
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
              data?: DatabaseEngine[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/databases/engines/:engineId': {
      $get:
        | {
            input: { param: { engineId: string } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: DatabaseEngine
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { engineId: string } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/databases/instances': {
      $get:
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: {
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
              data?: Database[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/databases/mongodb/instances': {
      $get:
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: {
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
              data?: DatabaseMongoDB[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/databases/mongodb/instances/:instanceId': {
      $delete:
        | {
            input: { param: { instanceId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { instanceId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { instanceId: number } }
            output: DatabaseMongoDB
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { instanceId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { instanceId: number } } & {
              json: {
                allow_list?: DatabaseAllowList | undefined
                label?: DatabaseLabel | undefined
                updates?: DatabaseUpdates | undefined
              }
            }
            output: DatabaseMongoDB
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { instanceId: number } } & {
              json: {
                allow_list?: DatabaseAllowList | undefined
                label?: DatabaseLabel | undefined
                updates?: DatabaseUpdates | undefined
              }
            }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/databases/mongodb/instances/:instanceId/backups': {
      $get:
        | {
            input: { param: { instanceId: number } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
              data?: DatabaseBackup[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { instanceId: number } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { instanceId: number } } & { json: DatabaseBackupSnapshot }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { instanceId: number } } & { json: DatabaseBackupSnapshot }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/databases/mongodb/instances/:instanceId/backups/:backupId': {
      $delete:
        | {
            input: { param: { instanceId: number; backupId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { instanceId: number; backupId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { instanceId: number; backupId: number } }
            output: DatabaseBackup
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { instanceId: number; backupId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/databases/mongodb/instances/:instanceId/backups/:backupId/restore': {
      $post:
        | {
            input: { param: { instanceId: number; backupId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { instanceId: number; backupId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/databases/mongodb/instances/:instanceId/credentials': {
      $get:
        | {
            input: { param: { instanceId: number } }
            output: DatabaseCredentials
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { instanceId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/databases/mongodb/instances/:instanceId/credentials/reset': {
      $post:
        | {
            input: { param: { instanceId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { instanceId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/databases/mongodb/instances/:instanceId/patch': {
      $post:
        | {
            input: { param: { instanceId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { instanceId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/databases/mongodb/instances/:instanceId/ssl': {
      $get:
        | {
            input: { param: { instanceId: number } }
            output: DatabaseSSL
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { instanceId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/databases/mysql/instances': {
      $get:
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: {
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
              data?: DatabaseMySQL[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: DatabaseMySQLRequest }
            output: DatabaseMySQL
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DatabaseMySQLRequest }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/databases/mysql/instances/:instanceId': {
      $delete:
        | {
            input: { param: { instanceId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { instanceId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { instanceId: number } }
            output: DatabaseMySQL
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { instanceId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { instanceId: number } } & {
              json: {
                allow_list?: DatabaseAllowList | undefined
                label?: DatabaseLabel | undefined
                updates?: DatabaseUpdates | undefined
              }
            }
            output: DatabaseMySQL
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { instanceId: number } } & {
              json: {
                allow_list?: DatabaseAllowList | undefined
                label?: DatabaseLabel | undefined
                updates?: DatabaseUpdates | undefined
              }
            }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/databases/mysql/instances/:instanceId/backups': {
      $get:
        | {
            input: { param: { instanceId: number } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
              data?: DatabaseBackup[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { instanceId: number } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { instanceId: number } } & { json: DatabaseBackupSnapshot }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { instanceId: number } } & { json: DatabaseBackupSnapshot }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/databases/mysql/instances/:instanceId/backups/:backupId': {
      $delete:
        | {
            input: { param: { instanceId: number; backupId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { instanceId: number; backupId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { instanceId: number; backupId: number } }
            output: DatabaseBackup
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { instanceId: number; backupId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/databases/mysql/instances/:instanceId/backups/:backupId/restore': {
      $post:
        | {
            input: { param: { instanceId: number; backupId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { instanceId: number; backupId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/databases/mysql/instances/:instanceId/credentials': {
      $get:
        | {
            input: { param: { instanceId: number } }
            output: DatabaseCredentials
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { instanceId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/databases/mysql/instances/:instanceId/credentials/reset': {
      $post:
        | {
            input: { param: { instanceId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { instanceId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/databases/mysql/instances/:instanceId/patch': {
      $post:
        | {
            input: { param: { instanceId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { instanceId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/databases/mysql/instances/:instanceId/ssl': {
      $get:
        | {
            input: { param: { instanceId: number } }
            output: DatabaseSSL
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { instanceId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/databases/postgresql/instances': {
      $get:
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: {
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
              data?: DatabasePostgreSQL[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: DatabasePostgreSQLRequest }
            output: DatabasePostgreSQL
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DatabasePostgreSQLRequest }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/databases/postgresql/instances/:instanceId': {
      $delete:
        | {
            input: { param: { instanceId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { instanceId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { instanceId: number } }
            output: DatabasePostgreSQL
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { instanceId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { instanceId: number } } & {
              json: {
                allow_list?: DatabaseAllowList | undefined
                label?: DatabaseLabel | undefined
                updates?: DatabaseUpdates | undefined
              }
            }
            output: DatabasePostgreSQL
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { instanceId: number } } & {
              json: {
                allow_list?: DatabaseAllowList | undefined
                label?: DatabaseLabel | undefined
                updates?: DatabaseUpdates | undefined
              }
            }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/databases/postgresql/instances/:instanceId/backups': {
      $get:
        | {
            input: { param: { instanceId: number } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
              data?: DatabaseBackup[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { instanceId: number } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { instanceId: number } } & { json: DatabaseBackupSnapshot }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { instanceId: number } } & { json: DatabaseBackupSnapshot }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/databases/postgresql/instances/:instanceId/backups/:backupId': {
      $delete:
        | {
            input: { param: { instanceId: number; backupId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { instanceId: number; backupId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { instanceId: number; backupId: number } }
            output: DatabaseBackup
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { instanceId: number; backupId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/databases/postgresql/instances/:instanceId/backups/:backupId/restore': {
      $post:
        | {
            input: { param: { instanceId: number; backupId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { instanceId: number; backupId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/databases/postgresql/instances/:instanceId/credentials': {
      $get:
        | {
            input: { param: { instanceId: number } }
            output: DatabaseCredentials
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { instanceId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/databases/postgresql/instances/:instanceId/credentials/reset': {
      $post:
        | {
            input: { param: { instanceId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { instanceId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/databases/postgresql/instances/:instanceId/patch': {
      $post:
        | {
            input: { param: { instanceId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { instanceId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/databases/postgresql/instances/:instanceId/ssl': {
      $get:
        | {
            input: { param: { instanceId: number } }
            output: DatabaseSSL
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { instanceId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/databases/types': {
      $get:
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: {
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
              data?: DatabaseType[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/databases/types/:typeId': {
      $get:
        | {
            input: { param: { typeId: string } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: DatabaseType
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { typeId: string } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/domains': {
      $get:
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: {
              data?: Domain[] | undefined
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              json: {
                axfr_ips?: string[] | undefined
                description?: string | undefined
                domain?: string | undefined
                expire_sec?: number | undefined
                group?: string | undefined
                id?: number | undefined
                master_ips?: string[] | undefined
                refresh_sec?: number | undefined
                retry_sec?: number | undefined
                soa_email?: string | undefined
                status?: 'disabled' | 'active' | undefined
                tags?: string[] | undefined
                ttl_sec?: number | undefined
                type?: 'master' | 'slave' | undefined
              }
            }
            output: Domain
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                axfr_ips?: string[] | undefined
                description?: string | undefined
                domain?: string | undefined
                expire_sec?: number | undefined
                group?: string | undefined
                id?: number | undefined
                master_ips?: string[] | undefined
                refresh_sec?: number | undefined
                retry_sec?: number | undefined
                soa_email?: string | undefined
                status?: 'disabled' | 'active' | undefined
                tags?: string[] | undefined
                ttl_sec?: number | undefined
                type?: 'master' | 'slave' | undefined
              }
            }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/domains/import': {
      $post:
        | {
            input: { json: { domain: string; remote_nameserver: string } }
            output: Domain
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { domain: string; remote_nameserver: string } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/domains/:domainId': {
      $delete:
        | {
            input: { param: { domainId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { domainId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { domainId: number } }
            output: Domain
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { domainId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { domainId: number } } & { json: Domain }
            output: Domain
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { domainId: number } } & { json: Domain }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/domains/:domainId/clone': {
      $post:
        | {
            input: { param: { domainId: string } } & { json: { domain: string } }
            output: Domain
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { domainId: string } } & { json: { domain: string } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/domains/:domainId/records': {
      $get: {
        input: { param: { domainId: number } } & {
          query: { page?: number | undefined; page_size?: number | undefined }
        }
        output: {
          data?: DomainRecord[] | undefined
          page?: PaginationEnvelopePage | undefined
          pages?: PaginationEnvelopePages | undefined
          results?: PaginationEnvelopeResults | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { domainId: number } } & {
              json: {
                created?: string | undefined
                id?: number | undefined
                name?: DomainRecordName | undefined
                port?: DomainRecordPort | undefined
                priority?: DomainRecordPriority | undefined
                protocol?: DomainRecordProtocol | undefined
                service?: DomainRecordService | undefined
                tag?: DomainRecordTag | undefined
                target?: DomainRecordTarget | undefined
                ttl_sec?: DomainRecordTtlSec | undefined
                type?:
                  | 'A'
                  | 'AAAA'
                  | 'NS'
                  | 'MX'
                  | 'CNAME'
                  | 'TXT'
                  | 'SRV'
                  | 'PTR'
                  | 'CAA'
                  | undefined
                updated?: string | undefined
                weight?: DomainRecordWeight | undefined
              }
            }
            output: DomainRecord
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { domainId: number } } & {
              json: {
                created?: string | undefined
                id?: number | undefined
                name?: DomainRecordName | undefined
                port?: DomainRecordPort | undefined
                priority?: DomainRecordPriority | undefined
                protocol?: DomainRecordProtocol | undefined
                service?: DomainRecordService | undefined
                tag?: DomainRecordTag | undefined
                target?: DomainRecordTarget | undefined
                ttl_sec?: DomainRecordTtlSec | undefined
                type?:
                  | 'A'
                  | 'AAAA'
                  | 'NS'
                  | 'MX'
                  | 'CNAME'
                  | 'TXT'
                  | 'SRV'
                  | 'PTR'
                  | 'CAA'
                  | undefined
                updated?: string | undefined
                weight?: DomainRecordWeight | undefined
              }
            }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/domains/:domainId/records/:recordId': {
      $delete:
        | {
            input: { param: { domainId: number; recordId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { domainId: number; recordId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { domainId: number; recordId: number } }
            output: DomainRecord
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { domainId: number; recordId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { domainId: number; recordId: number } } & {
              json: {
                name?: DomainRecordName | undefined
                port?: DomainRecordPort | undefined
                priority?: DomainRecordPriority | undefined
                protocol?: DomainRecordProtocol | undefined
                service?: DomainRecordService | undefined
                tag?: DomainRecordTag | undefined
                target?: DomainRecordTarget | undefined
                ttl_sec?: DomainRecordTtlSec | undefined
                weight?: DomainRecordWeight | undefined
              }
            }
            output: DomainRecord
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { domainId: number; recordId: number } } & {
              json: {
                name?: DomainRecordName | undefined
                port?: DomainRecordPort | undefined
                priority?: DomainRecordPriority | undefined
                protocol?: DomainRecordProtocol | undefined
                service?: DomainRecordService | undefined
                tag?: DomainRecordTag | undefined
                target?: DomainRecordTarget | undefined
                ttl_sec?: DomainRecordTtlSec | undefined
                weight?: DomainRecordWeight | undefined
              }
            }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/domains/:domainId/zone-file': {
      $get:
        | {
            input: { param: { domainId: string } }
            output: { zone_file?: string[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { domainId: string } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/images': {
      $get:
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: {
              data?: Image[] | undefined
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              json: {
                description?: string | undefined
                disk_id: number
                label?: string | undefined
              }
            }
            output: Image
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                description?: string | undefined
                disk_id: number
                label?: string | undefined
              }
            }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/images/upload': {
      $post:
        | {
            input: { json: { description?: string | undefined; label: string; region: string } }
            output: { image?: Image | undefined; upload_to?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { description?: string | undefined; label: string; region: string } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/images/:imageId': {
      $delete:
        | {
            input: { param: { imageId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { imageId: string } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { imageId: string } }
            output: Image
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { imageId: string } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { imageId: string } } & { json: Image }
            output: Image
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { imageId: string } } & { json: Image }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/linode/instances': {
      $get:
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: {
              data?: Linode[] | undefined
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              json: {
                authorized_keys?: DiskRequestAuthorizedKeys | undefined
                authorized_users?: DiskRequestAuthorizedUsers | undefined
                booted?: boolean | undefined
                image?: DiskRequestImage | undefined
                root_pass?: DiskRequestRootPass | undefined
                stackscript_data?: DiskRequestStackscriptData | undefined
                stackscript_id?: DiskRequestStackscriptId | undefined
                backup_id?: number | undefined
                backups_enabled?: boolean | undefined
                group?: LinodeGroup | undefined
                interfaces?: LinodeConfigInterfaces | undefined
                label?: LinodeLabel | undefined
                private_ip?: boolean | undefined
                region?: string | undefined
                swap_size?: number | undefined
                tags?: LinodeTags | undefined
                type?: string | undefined
              }
            }
            output: Linode
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                authorized_keys?: DiskRequestAuthorizedKeys | undefined
                authorized_users?: DiskRequestAuthorizedUsers | undefined
                booted?: boolean | undefined
                image?: DiskRequestImage | undefined
                root_pass?: DiskRequestRootPass | undefined
                stackscript_data?: DiskRequestStackscriptData | undefined
                stackscript_id?: DiskRequestStackscriptId | undefined
                backup_id?: number | undefined
                backups_enabled?: boolean | undefined
                group?: LinodeGroup | undefined
                interfaces?: LinodeConfigInterfaces | undefined
                label?: LinodeLabel | undefined
                private_ip?: boolean | undefined
                region?: string | undefined
                swap_size?: number | undefined
                tags?: LinodeTags | undefined
                type?: string | undefined
              }
            }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/linode/instances/:linodeId': {
      $delete:
        | {
            input: { param: { linodeId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { linodeId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { linodeId: number } }
            output: Linode
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { linodeId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { linodeId: number } } & { json: Linode }
            output: Linode
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { linodeId: number } } & { json: Linode }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/linode/instances/:linodeId/backups': {
      $get:
        | {
            input: { param: { linodeId: number } }
            output: {
              automatic?:
                | {
                    available?: boolean | undefined
                    configs?: string[] | undefined
                    created?: string | undefined
                    disks?:
                      | {
                          filesystem?: DiskFilesystem | undefined
                          label?: string | undefined
                          size?: number | undefined
                        }[]
                      | undefined
                    finished?: string | undefined
                    id?: number | undefined
                    label?: (string | null) | undefined
                    status?:
                      | 'paused'
                      | 'pending'
                      | 'running'
                      | 'needsPostProcessing'
                      | 'successful'
                      | 'failed'
                      | 'userAborted'
                      | undefined
                    type?: string | undefined
                    updated?: string | undefined
                  }[]
                | undefined
              snapshot?:
                | { current?: Backup | undefined; in_progress?: Backup | undefined }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { linodeId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { linodeId: number } } & { json: { label: string } }
            output: Backup
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { linodeId: number } } & { json: { label: string } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/linode/instances/:linodeId/backups/cancel': {
      $post:
        | {
            input: { param: { linodeId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { linodeId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/linode/instances/:linodeId/backups/enable': {
      $post:
        | {
            input: { param: { linodeId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { linodeId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/linode/instances/:linodeId/backups/:backupId': {
      $get:
        | {
            input: { param: { linodeId: number; backupId: number } }
            output: Backup
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { linodeId: number; backupId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/linode/instances/:linodeId/backups/:backupId/restore': {
      $post:
        | {
            input: { param: { linodeId: number; backupId: number } } & {
              json: { linode_id: number; overwrite?: boolean | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { linodeId: number; backupId: number } } & {
              json: { linode_id: number; overwrite?: boolean | undefined }
            }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/linode/instances/:linodeId/boot': {
      $post:
        | {
            input: { param: { linodeId: number } } & { json: { config_id?: number | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { linodeId: number } } & { json: { config_id?: number | undefined } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/linode/instances/:linodeId/clone': {
      $post:
        | {
            input: { param: { linodeId: number } } & {
              json: {
                backups_enabled?: boolean | undefined
                configs?: number[] | undefined
                disks?: number[] | undefined
                group?: string | undefined
                label?: string | undefined
                linode_id?: number | undefined
                private_ip?: boolean | undefined
                region?: string | undefined
                type?: string | undefined
              }
            }
            output: Linode
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { linodeId: number } } & {
              json: {
                backups_enabled?: boolean | undefined
                configs?: number[] | undefined
                disks?: number[] | undefined
                group?: string | undefined
                label?: string | undefined
                linode_id?: number | undefined
                private_ip?: boolean | undefined
                region?: string | undefined
                type?: string | undefined
              }
            }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/linode/instances/:linodeId/configs': {
      $get: {
        input: { param: { linodeId: number } } & {
          query: { page?: number | undefined; page_size?: number | undefined }
        }
        output: {
          data?: LinodeConfig[] | undefined
          page?: PaginationEnvelopePage | undefined
          pages?: PaginationEnvelopePages | undefined
          results?: PaginationEnvelopeResults | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { linodeId: number } } & {
              json: {
                comments?: (string | null) | undefined
                devices?: Devices | undefined
                helpers?:
                  | {
                      devtmpfs_automount?: boolean | undefined
                      distro?: boolean | undefined
                      modules_dep?: boolean | undefined
                      network?: boolean | undefined
                      updatedb_disabled?: boolean | undefined
                    }
                  | undefined
                id?: number | undefined
                interfaces?: LinodeConfigInterfaces | undefined
                kernel?: string | undefined
                label?: string | undefined
                memory_limit?: number | undefined
                root_device?: string | undefined
                run_level?: 'default' | 'single' | 'binbash' | undefined
                virt_mode?: 'paravirt' | 'fullvirt' | undefined
              }
            }
            output: LinodeConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { linodeId: number } } & {
              json: {
                comments?: (string | null) | undefined
                devices?: Devices | undefined
                helpers?:
                  | {
                      devtmpfs_automount?: boolean | undefined
                      distro?: boolean | undefined
                      modules_dep?: boolean | undefined
                      network?: boolean | undefined
                      updatedb_disabled?: boolean | undefined
                    }
                  | undefined
                id?: number | undefined
                interfaces?: LinodeConfigInterfaces | undefined
                kernel?: string | undefined
                label?: string | undefined
                memory_limit?: number | undefined
                root_device?: string | undefined
                run_level?: 'default' | 'single' | 'binbash' | undefined
                virt_mode?: 'paravirt' | 'fullvirt' | undefined
              }
            }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/linode/instances/:linodeId/configs/:configId': {
      $delete:
        | {
            input: { param: { linodeId: number; configId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { linodeId: number; configId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { linodeId: number; configId: number } }
            output: LinodeConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { linodeId: number; configId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { linodeId: number; configId: number } } & { json: LinodeConfig }
            output: LinodeConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { linodeId: number; configId: number } } & { json: LinodeConfig }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/linode/instances/:linodeId/disks': {
      $get:
        | {
            input: { param: { linodeId: number } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              data?: Disk[] | undefined
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { linodeId: number } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { linodeId: number } } & {
              json: {
                authorized_keys?: DiskRequestAuthorizedKeys | undefined
                authorized_users?: DiskRequestAuthorizedUsers | undefined
                filesystem?: DiskFilesystem | undefined
                image?: DiskRequestImage | undefined
                label?: DiskLabel | undefined
                root_pass?: DiskRequestRootPass | undefined
                size?: number | undefined
                stackscript_data?: DiskRequestStackscriptData | undefined
                stackscript_id?: DiskRequestStackscriptId | undefined
              }
            }
            output: Disk
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { linodeId: number } } & {
              json: {
                authorized_keys?: DiskRequestAuthorizedKeys | undefined
                authorized_users?: DiskRequestAuthorizedUsers | undefined
                filesystem?: DiskFilesystem | undefined
                image?: DiskRequestImage | undefined
                label?: DiskLabel | undefined
                root_pass?: DiskRequestRootPass | undefined
                size?: number | undefined
                stackscript_data?: DiskRequestStackscriptData | undefined
                stackscript_id?: DiskRequestStackscriptId | undefined
              }
            }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/linode/instances/:linodeId/disks/:diskId': {
      $delete:
        | {
            input: { param: { linodeId: number; diskId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { linodeId: number; diskId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { linodeId: number; diskId: number } }
            output: Disk
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { linodeId: number; diskId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { linodeId: number; diskId: number } } & { json: Disk }
            output: Disk
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { linodeId: number; diskId: number } } & { json: Disk }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/linode/instances/:linodeId/disks/:diskId/clone': {
      $post:
        | {
            input: { param: { linodeId: number; diskId: number } }
            output: Disk
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { linodeId: number; diskId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/linode/instances/:linodeId/disks/:diskId/password': {
      $post:
        | {
            input: { param: { linodeId: number; diskId: number } } & { json: { password: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { linodeId: number; diskId: number } } & { json: { password: string } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/linode/instances/:linodeId/disks/:diskId/resize': {
      $post:
        | {
            input: { param: { linodeId: number; diskId: number } } & { json: { size: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { linodeId: number; diskId: number } } & { json: { size: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/linode/instances/:linodeId/firewalls': {
      $get:
        | {
            input: { param: { linodeId: number } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              data?: Firewall[] | undefined
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { linodeId: number } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/linode/instances/:linodeId/ips': {
      $get:
        | {
            input: { param: { linodeId: number } }
            output: {
              ipv4?:
                | {
                    private?: IPAddressPrivate[] | undefined
                    public?: IPAddress[] | undefined
                    reserved?: IPAddress[] | undefined
                    shared?: IPAddress[] | undefined
                  }
                | undefined
              ipv6?:
                | {
                    global?: IPv6Pool | undefined
                    link_local?: IPAddressV6LinkLocal | undefined
                    slaac?: IPAddressV6Slaac | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { linodeId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { linodeId: number } } & { json: { public: boolean; type: 'ipv4' } }
            output: IPAddress
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { linodeId: number } } & { json: { public: boolean; type: 'ipv4' } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/linode/instances/:linodeId/ips/:address': {
      $delete:
        | {
            input: { param: { linodeId: number; address: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { linodeId: number; address: string } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { linodeId: number; address: string } }
            output: IPAddress
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { linodeId: number; address: string } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { linodeId: number; address: string } } & {
              json: { rdns: string | null }
            }
            output: IPAddress
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { linodeId: number; address: string } } & {
              json: { rdns: string | null }
            }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/linode/instances/:linodeId/migrate': {
      $post:
        | {
            input: { param: { linodeId: number } } & {
              json: { region?: string | undefined; upgrade?: boolean | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { linodeId: number } } & {
              json: { region?: string | undefined; upgrade?: boolean | undefined }
            }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/linode/instances/:linodeId/mutate': {
      $post:
        | {
            input: { param: { linodeId: number } } & {
              json: { allow_auto_disk_resize?: boolean | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { linodeId: number } } & {
              json: { allow_auto_disk_resize?: boolean | undefined }
            }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/linode/instances/:linodeId/nodebalancers': {
      $get: {
        input: { param: { linodeId: number } }
        output: {
          data?: NodeBalancer[] | undefined
          page?: PaginationEnvelopePage | undefined
          pages?: PaginationEnvelopePages | undefined
          results?: PaginationEnvelopeResults | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/linode/instances/:linodeId/password': {
      $post:
        | {
            input: { param: { linodeId: number } } & { json: { root_pass: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { linodeId: number } } & { json: { root_pass: string } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/linode/instances/:linodeId/reboot': {
      $post:
        | {
            input: { param: { linodeId: number } } & { json: { config_id?: number | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { linodeId: number } } & { json: { config_id?: number | undefined } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/linode/instances/:linodeId/rebuild': {
      $post:
        | {
            input: { param: { linodeId: number } } & {
              json: {
                authorized_keys?: DiskRequestAuthorizedKeys | undefined
                authorized_users?: DiskRequestAuthorizedUsers | undefined
                booted?: boolean | undefined
                image?: DiskRequestImage | undefined
                root_pass?: DiskRequestRootPass | undefined
                stackscript_data?: DiskRequestStackscriptData | undefined
                stackscript_id?: DiskRequestStackscriptId | undefined
              }
            }
            output: Linode
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { linodeId: number } } & {
              json: {
                authorized_keys?: DiskRequestAuthorizedKeys | undefined
                authorized_users?: DiskRequestAuthorizedUsers | undefined
                booted?: boolean | undefined
                image?: DiskRequestImage | undefined
                root_pass?: DiskRequestRootPass | undefined
                stackscript_data?: DiskRequestStackscriptData | undefined
                stackscript_id?: DiskRequestStackscriptId | undefined
              }
            }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/linode/instances/:linodeId/rescue': {
      $post:
        | {
            input: { param: { linodeId: number } } & {
              json: { devices?: RescueDevices | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { linodeId: number } } & {
              json: { devices?: RescueDevices | undefined }
            }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/linode/instances/:linodeId/resize': {
      $post:
        | {
            input: { param: { linodeId: number } } & {
              json: { allow_auto_disk_resize?: boolean | undefined; type: string }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { linodeId: number } } & {
              json: { allow_auto_disk_resize?: boolean | undefined; type: string }
            }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/linode/instances/:linodeId/shutdown': {
      $post:
        | {
            input: { param: { linodeId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { linodeId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/linode/instances/:linodeId/stats': {
      $get:
        | {
            input: { param: { linodeId: number } }
            output: LinodeStats
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { linodeId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/linode/instances/:linodeId/stats/:year/:month': {
      $get:
        | {
            input: { param: { linodeId: number; year: number; month: number } }
            output: LinodeStats
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { linodeId: number; year: number; month: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/linode/instances/:linodeId/transfer': {
      $get:
        | {
            input: { param: { linodeId: number } }
            output: {
              billable?: number | undefined
              quota?: number | undefined
              used?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { linodeId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/linode/instances/:linodeId/transfer/:year/:month': {
      $get:
        | {
            input: { param: { linodeId: number; year: number; month: number } }
            output: {
              bytes_in?: number | undefined
              bytes_out?: number | undefined
              bytes_total?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { linodeId: number; year: number; month: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/linode/instances/:linodeId/volumes': {
      $get:
        | {
            input: { param: { linodeId: number } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              data?: Volume[] | undefined
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { linodeId: number } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/linode/kernels': {
      $get:
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: {
              data?: Kernel[] | undefined
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/linode/kernels/:kernelId': {
      $get:
        | {
            input: { param: { kernelId: string } }
            output: Kernel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { kernelId: string } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/linode/stackscripts': {
      $get:
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: {
              data?: StackScript[] | undefined
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              json: {
                created?: string | undefined
                deployments_active?: number | undefined
                deployments_total?: number | undefined
                description?: string | undefined
                id?: number | undefined
                images?: string[] | undefined
                is_public?: boolean | undefined
                label?: string | undefined
                mine?: boolean | undefined
                rev_note?: string | undefined
                script?: string | undefined
                updated?: string | undefined
                user_defined_fields?: UserDefinedField[] | undefined
                user_gravatar_id?: string | undefined
                username?: string | undefined
              }
            }
            output: StackScript
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                created?: string | undefined
                deployments_active?: number | undefined
                deployments_total?: number | undefined
                description?: string | undefined
                id?: number | undefined
                images?: string[] | undefined
                is_public?: boolean | undefined
                label?: string | undefined
                mine?: boolean | undefined
                rev_note?: string | undefined
                script?: string | undefined
                updated?: string | undefined
                user_defined_fields?: UserDefinedField[] | undefined
                user_gravatar_id?: string | undefined
                username?: string | undefined
              }
            }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/linode/stackscripts/:stackscriptId': {
      $delete:
        | {
            input: { param: { stackscriptId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stackscriptId: string } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { stackscriptId: string } }
            output: StackScript
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stackscriptId: string } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { stackscriptId: string } } & { json: StackScript }
            output: StackScript
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { stackscriptId: string } } & { json: StackScript }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/linode/types': {
      $get:
        | {
            input: {}
            output: {
              data?: LinodeType[] | undefined
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/linode/types/:typeId': {
      $get:
        | {
            input: { param: { typeId: string } }
            output: LinodeType
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { typeId: string } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/lke/clusters': {
      $get:
        | {
            input: {}
            output: {
              data?: LKECluster[] | undefined
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              json: {
                control_plane?: { high_availability?: boolean | undefined } | undefined
                k8s_version: LKEClusterK8sVersion
                label: LKEClusterLabel
                node_pools: LKENodePoolRequestBody[]
                region: LKEClusterRegion
                tags?: LKEClusterTags | undefined
              }
            }
            output: LKECluster
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                control_plane?: { high_availability?: boolean | undefined } | undefined
                k8s_version: LKEClusterK8sVersion
                label: LKEClusterLabel
                node_pools: LKENodePoolRequestBody[]
                region: LKEClusterRegion
                tags?: LKEClusterTags | undefined
              }
            }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/lke/clusters/:clusterId': {
      $delete:
        | {
            input: { param: { clusterId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clusterId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { clusterId: number } }
            output: LKECluster
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clusterId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $put: {
        input: { param: { clusterId: number } } & {
          json: {
            control_plane?: { high_availability?: boolean | undefined } | undefined
            k8s_version?: string | undefined
            label?: LKEClusterLabel | undefined
            tags?: string[] | undefined
          }
        }
        output: {
          created?: LKEClusterCreated | undefined
          k8s_version?: LKEClusterK8sVersion | undefined
          label?: LKEClusterLabel | undefined
          region?: LKEClusterRegion | undefined
          tags?: string[] | undefined
          updated?: LKEClusterUpdated | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/lke/clusters/:clusterId/api-endpoints': {
      $get:
        | {
            input: { param: { clusterId: number } }
            output: {
              data?: { endpoint?: string | undefined }[] | undefined
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clusterId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/lke/clusters/:clusterId/dashboard': {
      $get:
        | {
            input: { param: { clusterId: number } }
            output: { url?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clusterId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/lke/clusters/:clusterId/kubeconfig': {
      $delete:
        | {
            input: { param: { clusterId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clusterId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { clusterId: number } }
            output: { kubeconfig?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clusterId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/lke/clusters/:clusterId/nodes/:nodeId': {
      $delete:
        | {
            input: { param: { clusterId: number; nodeId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clusterId: number; nodeId: string } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { clusterId: number; nodeId: string } }
            output: {
              id?: string | undefined
              instance_id?: number | undefined
              status?: 'ready' | 'not_ready' | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clusterId: number; nodeId: string } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/lke/clusters/:clusterId/nodes/:nodeId/recycle': {
      $post:
        | {
            input: { param: { clusterId: number; nodeId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clusterId: number; nodeId: string } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/lke/clusters/:clusterId/pools': {
      $get:
        | {
            input: { param: { clusterId: number } }
            output: {
              data?: LKENodePool[] | undefined
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clusterId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { clusterId: number } } & {
              json: {
                autoscaler?: LKENodePoolRequestBodyAutoscaler | undefined
                count?: LKENodePoolCount | undefined
                disks?: LKENodePoolDisksItems[] | undefined
                tags?: LKENodePoolTags | undefined
                type?: LKENodePoolType | undefined
              }
            }
            output: LKENodePool
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clusterId: number } } & {
              json: {
                autoscaler?: LKENodePoolRequestBodyAutoscaler | undefined
                count?: LKENodePoolCount | undefined
                disks?: LKENodePoolDisksItems[] | undefined
                tags?: LKENodePoolTags | undefined
                type?: LKENodePoolType | undefined
              }
            }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/lke/clusters/:clusterId/pools/:poolId': {
      $delete:
        | {
            input: { param: { clusterId: number; poolId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clusterId: number; poolId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $get: {
        input: { param: { clusterId: number; poolId: number } }
        output: LKENodePool
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { clusterId: number; poolId: number } } & {
          json: {
            autoscaler?: LKENodePoolRequestBodyAutoscaler | undefined
            count?: LKENodePoolCount | undefined
          }
        }
        output: LKENodePool
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/lke/clusters/:clusterId/pools/:poolId/recycle': {
      $post:
        | {
            input: { param: { clusterId: number; poolId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clusterId: number; poolId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/lke/clusters/:clusterId/recycle': {
      $post:
        | {
            input: { param: { clusterId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clusterId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/lke/clusters/:clusterId/regenerate': {
      $post:
        | {
            input: { param: { clusterId: number } } & {
              json: { kubeconfig?: boolean | undefined; servicetoken?: boolean | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clusterId: number } } & {
              json: { kubeconfig?: boolean | undefined; servicetoken?: boolean | undefined }
            }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/lke/clusters/:clusterId/servicetoken': {
      $delete:
        | {
            input: { param: { clusterId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clusterId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/lke/versions': {
      $get:
        | {
            input: {}
            output: {
              data?: LKEVersion[] | undefined
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/lke/versions/:version': {
      $get:
        | {
            input: { param: { version: string } }
            output: LKEVersion
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { version: string } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/longview/clients': {
      $get:
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: {
              data?: LongviewClient[] | undefined
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: LongviewClient }
            output: LongviewClient
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: LongviewClient }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/longview/clients/:clientId': {
      $delete:
        | {
            input: { param: { clientId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clientId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { clientId: number } }
            output: LongviewClient
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clientId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { clientId: number } } & { json: LongviewClient }
            output: LongviewClient
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clientId: number } } & { json: LongviewClient }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/longview/plan': {
      $get:
        | { input: {}; output: LongviewSubscription; outputFormat: 'json'; status: 200 }
        | {
            input: {}
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { json: LongviewPlan }
            output: LongviewSubscription
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: LongviewPlan }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/longview/subscriptions': {
      $get:
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: {
              data?: LongviewSubscription[] | undefined
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/longview/subscriptions/:subscriptionId': {
      $get:
        | {
            input: { param: { subscriptionId: string } }
            output: LongviewSubscription
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscriptionId: string } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/managed/contacts': {
      $get:
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: {
              data?: ManagedContact[] | undefined
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: ManagedContact }
            output: ManagedContact
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ManagedContact }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/managed/contacts/:contactId': {
      $delete:
        | {
            input: { param: { contactId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { contactId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { contactId: number } }
            output: ManagedContact
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { contactId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { contactId: number } } & { json: ManagedContact }
            output: ManagedContact
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { contactId: number } } & { json: ManagedContact }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/managed/credentials': {
      $get:
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: {
              data?: ManagedCredential[] | undefined
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              json: {
                id?: number | undefined
                label?: string | undefined
                last_decrypted?: string | undefined
                password?: string | undefined
                username?: string | undefined
              }
            }
            output: ManagedCredential
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                id?: number | undefined
                label?: string | undefined
                last_decrypted?: string | undefined
                password?: string | undefined
                username?: string | undefined
              }
            }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/managed/credentials/sshkey': {
      $get:
        | { input: {}; output: { ssh_key?: string | undefined }; outputFormat: 'json'; status: 200 }
        | {
            input: {}
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/managed/credentials/:credentialId': {
      $get:
        | {
            input: { param: { credentialId: number } }
            output: ManagedCredential
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { credentialId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { credentialId: number } } & { json: ManagedCredential }
            output: ManagedCredential
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { credentialId: number } } & { json: ManagedCredential }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/managed/credentials/:credentialId/revoke': {
      $post:
        | {
            input: { param: { credentialId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { credentialId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/managed/credentials/:credentialId/update': {
      $post:
        | {
            input: { param: { credentialId: number } } & {
              json: { password: string; username?: string | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { credentialId: number } } & {
              json: { password: string; username?: string | undefined }
            }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/managed/issues': {
      $get:
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: {
              data?: ManagedIssue[] | undefined
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/managed/issues/:issueId': {
      $get:
        | {
            input: { param: { issueId: number } }
            output: ManagedIssue
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { issueId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/managed/linode-settings': {
      $get:
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: {
              data?: ManagedLinodeSettings[] | undefined
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/managed/linode-settings/:linodeId': {
      $get:
        | {
            input: { param: { linodeId: number } }
            output: ManagedLinodeSettings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { linodeId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { linodeId: number } } & { json: ManagedLinodeSettings }
            output: ManagedLinodeSettings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { linodeId: number } } & { json: ManagedLinodeSettings }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/managed/services': {
      $get:
        | {
            input: {}
            output: {
              data?: ManagedService[] | undefined
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              json: {
                address?: string | undefined
                body?: (string | null) | undefined
                consultation_group?: string | undefined
                created?: string | undefined
                credentials?: number[] | undefined
                id?: number | undefined
                label?: string | undefined
                notes?: (string | null) | undefined
                region?: string | undefined
                service_type?: 'url' | 'tcp' | undefined
                status?: 'disabled' | 'pending' | 'ok' | 'problem' | undefined
                timeout?: number | undefined
                updated?: string | undefined
              }
            }
            output: ManagedService
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                address?: string | undefined
                body?: (string | null) | undefined
                consultation_group?: string | undefined
                created?: string | undefined
                credentials?: number[] | undefined
                id?: number | undefined
                label?: string | undefined
                notes?: (string | null) | undefined
                region?: string | undefined
                service_type?: 'url' | 'tcp' | undefined
                status?: 'disabled' | 'pending' | 'ok' | 'problem' | undefined
                timeout?: number | undefined
                updated?: string | undefined
              }
            }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/managed/services/:serviceId': {
      $delete:
        | {
            input: { param: { serviceId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { serviceId: number } }
            output: ManagedService
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { serviceId: number } } & { json: ManagedService }
            output: ManagedService
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceId: number } } & { json: ManagedService }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/managed/services/:serviceId/disable': {
      $post:
        | {
            input: { param: { serviceId: number } }
            output: ManagedService
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/managed/services/:serviceId/enable': {
      $post:
        | {
            input: { param: { serviceId: number } }
            output: ManagedService
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/managed/stats': {
      $get:
        | {
            input: {}
            output: { data?: StatsDataAvailable | StatsDataUnavailable | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/networking/firewalls': {
      $get:
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: {
              data?: Firewall[] | undefined
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              json: {
                created?: string | undefined
                id?: number | undefined
                label?: FirewallLabel | undefined
                rules?: FirewallRules | undefined
                status?: 'enabled' | 'disabled' | 'deleted' | undefined
                tags?: FirewallTags | undefined
                updated?: string | undefined
              }
            }
            output: Firewall
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                created?: string | undefined
                id?: number | undefined
                label?: FirewallLabel | undefined
                rules?: FirewallRules | undefined
                status?: 'enabled' | 'disabled' | 'deleted' | undefined
                tags?: FirewallTags | undefined
                updated?: string | undefined
              }
            }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/networking/firewalls/:firewallId': {
      $delete:
        | {
            input: { param: { firewallId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { firewallId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { firewallId: number } }
            output: Firewall
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { firewallId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { firewallId: number } } & {
              json: {
                label?: FirewallLabel | undefined
                status?: 'enabled' | 'disabled' | undefined
                tags?: FirewallTags | undefined
              }
            }
            output: Firewall
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { firewallId: number } } & {
              json: {
                label?: FirewallLabel | undefined
                status?: 'enabled' | 'disabled' | undefined
                tags?: FirewallTags | undefined
              }
            }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/networking/firewalls/:firewallId/devices': {
      $get:
        | {
            input: { param: { firewallId: number } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              data?: FirewallDevices[] | undefined
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { firewallId: number } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { firewallId: number } } & {
              json: {
                id?: number | undefined
                label?: string | undefined
                type?: 'linode' | undefined
                url?: string | undefined
              }
            }
            output: FirewallDevices
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { firewallId: number } } & {
              json: {
                id?: number | undefined
                label?: string | undefined
                type?: 'linode' | undefined
                url?: string | undefined
              }
            }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/networking/firewalls/:firewallId/devices/:deviceId': {
      $delete:
        | {
            input: { param: { firewallId: number; deviceId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { firewallId: number; deviceId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { firewallId: number; deviceId: number } }
            output: FirewallDevices
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { firewallId: number; deviceId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/networking/firewalls/:firewallId/rules': {
      $get:
        | {
            input: { param: { firewallId: number } }
            output: FirewallRules
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { firewallId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { firewallId: number } } & {
              json: {
                inbound?: FirewallRuleConfig[] | undefined
                inbound_policy?: 'ACCEPT' | 'DROP' | undefined
                outbound?: FirewallRuleConfig[] | undefined
                outbound_policy?: 'ACCEPT' | 'DROP' | undefined
              }
            }
            output: FirewallRules
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { firewallId: number } } & {
              json: {
                inbound?: FirewallRuleConfig[] | undefined
                inbound_policy?: 'ACCEPT' | 'DROP' | undefined
                outbound?: FirewallRuleConfig[] | undefined
                outbound_policy?: 'ACCEPT' | 'DROP' | undefined
              }
            }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/networking/ips': {
      $get:
        | {
            input: {}
            output: {
              data?: IPAddress[] | undefined
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: { linode_id: number; public: boolean; type: 'ipv4' } }
            output: IPAddress
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { linode_id: number; public: boolean; type: 'ipv4' } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/networking/ips/assign': {
      $post:
        | {
            input: { json: IPAddressesAssignRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: IPAddressesAssignRequest }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/networking/ips/share': {
      $post:
        | {
            input: { json: IPAddressesShareRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: IPAddressesShareRequest }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/networking/ips/:address': {
      $get:
        | {
            input: { param: { address: string } }
            output: IPAddress
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { address: string } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { address: string } } & { json: { rdns: string | null } }
            output: IPAddress
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { address: string } } & { json: { rdns: string | null } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/networking/ipv4/assign': {
      $post:
        | {
            input: { json: IPAddressesAssignRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: IPAddressesAssignRequest }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/networking/ipv4/share': {
      $post:
        | {
            input: { json: IPAddressesShareRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: IPAddressesShareRequest }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/networking/ipv6/pools': {
      $get:
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: {
              data?: IPv6Pool[] | undefined
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/networking/ipv6/ranges': {
      $get:
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: {
              data?: IPv6Range[] | undefined
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              json: {
                linode_id?: number | undefined
                prefix_length: 56 | 64
                route_target?: string | undefined
              }
            }
            output: { range?: string | undefined; route_target?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                linode_id?: number | undefined
                prefix_length: 56 | 64
                route_target?: string | undefined
              }
            }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/networking/ipv6/ranges/:range': {
      $delete:
        | {
            input: { param: { range: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { range: string } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { range: string } }
            output: IPv6RangeBGP
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { range: string } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/networking/vlans': {
      $get:
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: {
              data?: Vlans[] | undefined
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/nodebalancers': {
      $get:
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: {
              data?: NodeBalancer[] | undefined
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              json: {
                client_conn_throttle?: NodeBalancerClientConnThrottle | undefined
                configs?:
                  | {
                      algorithm?: NodeBalancerConfigAlgorithm | undefined
                      check?: NodeBalancerConfigCheck | undefined
                      check_attempts?: NodeBalancerConfigCheckAttempts | undefined
                      check_body?: NodeBalancerConfigCheckBody | undefined
                      check_interval?: NodeBalancerConfigCheckInterval | undefined
                      check_passive?: NodeBalancerConfigCheckPassive | undefined
                      check_path?: NodeBalancerConfigCheckPath | undefined
                      check_timeout?: NodeBalancerConfigCheckTimeout | undefined
                      cipher_suite?: NodeBalancerConfigCipherSuite | undefined
                      nodes?: NodeBalancerNode[] | undefined
                      port?: NodeBalancerConfigPort | undefined
                      protocol?: NodeBalancerConfigProtocol | undefined
                      proxy_protocol?: NodeBalancerConfigProxyProtocol | undefined
                      ssl_cert?: NodeBalancerConfigSslCert | undefined
                      ssl_key?: NodeBalancerConfigSslKey | undefined
                      stickiness?: NodeBalancerConfigStickiness | undefined
                    }[]
                  | undefined
                label?: NodeBalancerLabel | undefined
                region: string
              }
            }
            output: NodeBalancer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                client_conn_throttle?: NodeBalancerClientConnThrottle | undefined
                configs?:
                  | {
                      algorithm?: NodeBalancerConfigAlgorithm | undefined
                      check?: NodeBalancerConfigCheck | undefined
                      check_attempts?: NodeBalancerConfigCheckAttempts | undefined
                      check_body?: NodeBalancerConfigCheckBody | undefined
                      check_interval?: NodeBalancerConfigCheckInterval | undefined
                      check_passive?: NodeBalancerConfigCheckPassive | undefined
                      check_path?: NodeBalancerConfigCheckPath | undefined
                      check_timeout?: NodeBalancerConfigCheckTimeout | undefined
                      cipher_suite?: NodeBalancerConfigCipherSuite | undefined
                      nodes?: NodeBalancerNode[] | undefined
                      port?: NodeBalancerConfigPort | undefined
                      protocol?: NodeBalancerConfigProtocol | undefined
                      proxy_protocol?: NodeBalancerConfigProxyProtocol | undefined
                      ssl_cert?: NodeBalancerConfigSslCert | undefined
                      ssl_key?: NodeBalancerConfigSslKey | undefined
                      stickiness?: NodeBalancerConfigStickiness | undefined
                    }[]
                  | undefined
                label?: NodeBalancerLabel | undefined
                region: string
              }
            }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/nodebalancers/:nodeBalancerId': {
      $delete:
        | {
            input: { param: { nodeBalancerId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { nodeBalancerId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { nodeBalancerId: number } }
            output: NodeBalancer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { nodeBalancerId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { nodeBalancerId: number } } & { json: NodeBalancer }
            output: NodeBalancer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { nodeBalancerId: number } } & { json: NodeBalancer }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/nodebalancers/:nodeBalancerId/configs': {
      $get:
        | {
            input: { param: { nodeBalancerId: number } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              data?: NodeBalancerConfig[] | undefined
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { nodeBalancerId: number } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { nodeBalancerId: number } } & { json: NodeBalancerConfig }
            output: NodeBalancerConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { nodeBalancerId: number } } & { json: NodeBalancerConfig }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/nodebalancers/:nodeBalancerId/configs/:configId': {
      $delete:
        | {
            input: { param: { nodeBalancerId: number; configId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { nodeBalancerId: number; configId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { nodeBalancerId: number; configId: number } }
            output: NodeBalancerConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { nodeBalancerId: number; configId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { nodeBalancerId: number; configId: number } } & {
              json: NodeBalancerConfig
            }
            output: NodeBalancerConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { nodeBalancerId: number; configId: number } } & {
              json: NodeBalancerConfig
            }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/nodebalancers/:nodeBalancerId/configs/:configId/nodes': {
      $get:
        | {
            input: { param: { nodeBalancerId: number; configId: number } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              data?: NodeBalancerNode[] | undefined
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { nodeBalancerId: number; configId: number } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { nodeBalancerId: number; configId: number } } & {
              json: {
                address?: NodeBalancerNodeAddress | undefined
                config_id?: number | undefined
                id?: number | undefined
                label?: NodeBalancerNodeLabel | undefined
                mode?: NodeBalancerNodeMode | undefined
                nodebalancer_id?: number | undefined
                status?: 'unknown' | 'UP' | 'DOWN' | undefined
                weight?: NodeBalancerNodeWeight | undefined
              }
            }
            output: NodeBalancerNode
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { nodeBalancerId: number; configId: number } } & {
              json: {
                address?: NodeBalancerNodeAddress | undefined
                config_id?: number | undefined
                id?: number | undefined
                label?: NodeBalancerNodeLabel | undefined
                mode?: NodeBalancerNodeMode | undefined
                nodebalancer_id?: number | undefined
                status?: 'unknown' | 'UP' | 'DOWN' | undefined
                weight?: NodeBalancerNodeWeight | undefined
              }
            }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/nodebalancers/:nodeBalancerId/configs/:configId/nodes/:nodeId': {
      $delete:
        | {
            input: { param: { nodeBalancerId: number; configId: number; nodeId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { nodeBalancerId: number; configId: number; nodeId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { nodeBalancerId: number; configId: number; nodeId: number } }
            output: NodeBalancerNode
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { nodeBalancerId: number; configId: number; nodeId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { nodeBalancerId: number; configId: number; nodeId: number } } & {
              json: NodeBalancerNode
            }
            output: NodeBalancerNode
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { nodeBalancerId: number; configId: number; nodeId: number } } & {
              json: NodeBalancerNode
            }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/nodebalancers/:nodeBalancerId/configs/:configId/rebuild': {
      $post:
        | {
            input: { param: { nodeBalancerId: number; configId: number } } & {
              json: {
                algorithm?: NodeBalancerConfigAlgorithm | undefined
                check?: NodeBalancerConfigCheck | undefined
                check_attempts?: NodeBalancerConfigCheckAttempts | undefined
                check_body?: NodeBalancerConfigCheckBody | undefined
                check_interval?: NodeBalancerConfigCheckInterval | undefined
                check_passive?: NodeBalancerConfigCheckPassive | undefined
                check_path?: NodeBalancerConfigCheckPath | undefined
                check_timeout?: NodeBalancerConfigCheckTimeout | undefined
                cipher_suite?: NodeBalancerConfigCipherSuite | undefined
                id?: number | undefined
                nodebalancer_id?: number | undefined
                nodes_status?: { down?: number | undefined; up?: number | undefined } | undefined
                port?: NodeBalancerConfigPort | undefined
                protocol?: NodeBalancerConfigProtocol | undefined
                proxy_protocol?: NodeBalancerConfigProxyProtocol | undefined
                ssl_cert?: NodeBalancerConfigSslCert | undefined
                ssl_commonname?: string | undefined
                ssl_fingerprint?: string | undefined
                ssl_key?: NodeBalancerConfigSslKey | undefined
                stickiness?: NodeBalancerConfigStickiness | undefined
                nodes: {
                  address?: NodeBalancerNodeAddress | undefined
                  id?: number | undefined
                  label?: NodeBalancerNodeLabel | undefined
                  mode?: NodeBalancerNodeMode | undefined
                  weight?: NodeBalancerNodeWeight | undefined
                }[]
              }
            }
            output: NodeBalancerConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { nodeBalancerId: number; configId: number } } & {
              json: {
                algorithm?: NodeBalancerConfigAlgorithm | undefined
                check?: NodeBalancerConfigCheck | undefined
                check_attempts?: NodeBalancerConfigCheckAttempts | undefined
                check_body?: NodeBalancerConfigCheckBody | undefined
                check_interval?: NodeBalancerConfigCheckInterval | undefined
                check_passive?: NodeBalancerConfigCheckPassive | undefined
                check_path?: NodeBalancerConfigCheckPath | undefined
                check_timeout?: NodeBalancerConfigCheckTimeout | undefined
                cipher_suite?: NodeBalancerConfigCipherSuite | undefined
                id?: number | undefined
                nodebalancer_id?: number | undefined
                nodes_status?: { down?: number | undefined; up?: number | undefined } | undefined
                port?: NodeBalancerConfigPort | undefined
                protocol?: NodeBalancerConfigProtocol | undefined
                proxy_protocol?: NodeBalancerConfigProxyProtocol | undefined
                ssl_cert?: NodeBalancerConfigSslCert | undefined
                ssl_commonname?: string | undefined
                ssl_fingerprint?: string | undefined
                ssl_key?: NodeBalancerConfigSslKey | undefined
                stickiness?: NodeBalancerConfigStickiness | undefined
                nodes: {
                  address?: NodeBalancerNodeAddress | undefined
                  id?: number | undefined
                  label?: NodeBalancerNodeLabel | undefined
                  mode?: NodeBalancerNodeMode | undefined
                  weight?: NodeBalancerNodeWeight | undefined
                }[]
              }
            }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/nodebalancers/:nodeBalancerId/stats': {
      $get:
        | {
            input: { param: { nodeBalancerId: number } }
            output: NodeBalancerStats
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { nodeBalancerId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/object-storage/buckets': {
      $get:
        | {
            input: {}
            output: {
              data?: ObjectStorageBucket[] | undefined
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              json: {
                acl?:
                  | 'private'
                  | 'public-read'
                  | 'authenticated-read'
                  | 'public-read-write'
                  | undefined
                cluster: string
                cors_enabled?: boolean | undefined
                label: string
              }
            }
            output: ObjectStorageBucket
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                acl?:
                  | 'private'
                  | 'public-read'
                  | 'authenticated-read'
                  | 'public-read-write'
                  | undefined
                cluster: string
                cors_enabled?: boolean | undefined
                label: string
              }
            }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/object-storage/buckets/:clusterId': {
      $get:
        | {
            input: { param: { clusterId: string } }
            output: {
              data?: ObjectStorageBucket[] | undefined
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clusterId: string } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/object-storage/buckets/:clusterId/:bucket': {
      $delete:
        | {
            input: { param: { clusterId: string; bucket: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clusterId: string; bucket: string } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { clusterId: string; bucket: string } }
            output: ObjectStorageBucket
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clusterId: string; bucket: string } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/object-storage/buckets/:clusterId/:bucket/access': {
      $post:
        | {
            input: { param: { clusterId: string; bucket: string } } & {
              json: {
                acl?:
                  | 'private'
                  | 'public-read'
                  | 'authenticated-read'
                  | 'public-read-write'
                  | 'custom'
                  | undefined
                cors_enabled?: boolean | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clusterId: string; bucket: string } } & {
              json: {
                acl?:
                  | 'private'
                  | 'public-read'
                  | 'authenticated-read'
                  | 'public-read-write'
                  | 'custom'
                  | undefined
                cors_enabled?: boolean | undefined
              }
            }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { clusterId: string; bucket: string } } & {
              json: {
                acl?:
                  | 'private'
                  | 'public-read'
                  | 'authenticated-read'
                  | 'public-read-write'
                  | 'custom'
                  | undefined
                cors_enabled?: boolean | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clusterId: string; bucket: string } } & {
              json: {
                acl?:
                  | 'private'
                  | 'public-read'
                  | 'authenticated-read'
                  | 'public-read-write'
                  | 'custom'
                  | undefined
                cors_enabled?: boolean | undefined
              }
            }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/object-storage/buckets/:clusterId/:bucket/object-acl': {
      $get:
        | {
            input: { param: { clusterId: string; bucket: string } } & { query: { name: string } }
            output: {
              acl?:
                | 'private'
                | 'public-read'
                | 'authenticated-read'
                | 'public-read-write'
                | 'custom'
                | undefined
              acl_xml?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clusterId: string; bucket: string } } & { query: { name: string } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { clusterId: string; bucket: string } } & {
              json: {
                acl:
                  | 'private'
                  | 'public-read'
                  | 'authenticated-read'
                  | 'public-read-write'
                  | 'custom'
                name: string
              }
            }
            output: {
              acl?:
                | 'private'
                | 'public-read'
                | 'authenticated-read'
                | 'public-read-write'
                | 'custom'
                | undefined
              acl_xml?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clusterId: string; bucket: string } } & {
              json: {
                acl:
                  | 'private'
                  | 'public-read'
                  | 'authenticated-read'
                  | 'public-read-write'
                  | 'custom'
                name: string
              }
            }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/object-storage/buckets/:clusterId/:bucket/object-list': {
      $get:
        | {
            input: { param: { clusterId: string; bucket: string } } & {
              query: {
                marker?: string | undefined
                delimiter?: string | undefined
                prefix?: string | undefined
                page_size?: number | undefined
              }
            }
            output: { data?: ObjectStorageObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clusterId: string; bucket: string } } & {
              query: {
                marker?: string | undefined
                delimiter?: string | undefined
                prefix?: string | undefined
                page_size?: number | undefined
              }
            }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/object-storage/buckets/:clusterId/:bucket/object-url': {
      $post:
        | {
            input: { param: { clusterId: string; bucket: string } } & {
              json: {
                content_type?: string | undefined
                expires_in?: number | undefined
                method: string
                name: string
              }
            }
            output: { url?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clusterId: string; bucket: string } } & {
              json: {
                content_type?: string | undefined
                expires_in?: number | undefined
                method: string
                name: string
              }
            }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/object-storage/buckets/:clusterId/:bucket/ssl': {
      $delete:
        | {
            input: { param: { clusterId: string; bucket: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clusterId: string; bucket: string } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { clusterId: string; bucket: string } }
            output: ObjectStorageSSLResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clusterId: string; bucket: string } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { clusterId: string; bucket: string } } & { json: ObjectStorageSSL }
            output: ObjectStorageSSLResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clusterId: string; bucket: string } } & { json: ObjectStorageSSL }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/object-storage/cancel': {
      $post:
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
        | {
            input: {}
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/object-storage/clusters': {
      $get:
        | {
            input: {}
            output: {
              data?: ObjectStorageCluster[] | undefined
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/object-storage/clusters/:clusterId': {
      $get:
        | {
            input: { param: { clusterId: string } }
            output: ObjectStorageCluster
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clusterId: string } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/object-storage/keys': {
      $get:
        | {
            input: {}
            output: {
              data?: ObjectStorageKey[] | undefined
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: ObjectStorageKey }
            output: ObjectStorageKey
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ObjectStorageKey }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/object-storage/keys/:keyId': {
      $delete:
        | {
            input: { param: { keyId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { keyId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { keyId: number } }
            output: ObjectStorageKey
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { keyId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { keyId: number } } & { json: { label?: string | undefined } }
            output: ObjectStorageKey
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { keyId: number } } & { json: { label?: string | undefined } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/object-storage/transfer': {
      $get:
        | { input: {}; output: { used?: number | undefined }; outputFormat: 'json'; status: 200 }
        | {
            input: {}
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/profile': {
      $get:
        | { input: {}; output: Profile; outputFormat: 'json'; status: 200 }
        | {
            input: {}
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | { input: { json: Profile }; output: Profile; outputFormat: 'json'; status: 200 }
        | {
            input: { json: Profile }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/profile/apps': {
      $get:
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: {
              data?: AuthorizedApp[] | undefined
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/profile/apps/:appId': {
      $delete:
        | {
            input: { param: { appId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { appId: number } }
            output: AuthorizedApp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { appId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/profile/devices': {
      $get:
        | {
            input: {}
            output: {
              data?: TrustedDevice[] | undefined
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/profile/devices/:deviceId': {
      $delete:
        | {
            input: { param: { deviceId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { deviceId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { deviceId: number } }
            output: TrustedDevice
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { deviceId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/profile/grants': {
      $get:
        | { input: {}; output: GrantsResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | {
            input: {}
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/profile/logins': {
      $get:
        | {
            input: {}
            output: {
              data?: Login[] | undefined
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/profile/logins/:loginId': {
      $get:
        | {
            input: { param: { loginId: number } }
            output: Login
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { loginId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/profile/phone-number': {
      $delete:
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
        | {
            input: {}
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: { iso_code: string; phone_number: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { iso_code: string; phone_number: string } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/profile/phone-number/verify': {
      $post:
        | {
            input: { json: { otp_code: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { otp_code: string } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/profile/preferences': {
      $get:
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
        | {
            input: {}
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { json: { [x: string]: unknown } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { [x: string]: unknown } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/profile/security-questions': {
      $get:
        | { input: {}; output: SecurityQuestionsGet; outputFormat: 'json'; status: 200 }
        | {
            input: {}
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: SecurityQuestionsPost }
            output: SecurityQuestionsPost
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SecurityQuestionsPost }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/profile/sshkeys': {
      $get:
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: {
              data?: SSHKey[] | undefined
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $post:
        | { input: { json: SSHKey }; output: SSHKey; outputFormat: 'json'; status: 200 }
        | {
            input: { json: SSHKey }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/profile/sshkeys/:sshKeyId': {
      $delete:
        | {
            input: { param: { sshKeyId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sshKeyId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { sshKeyId: number } }
            output: SSHKey
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sshKeyId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { sshKeyId: number } } & { json: { label?: SSHKeyLabel | undefined } }
            output: SSHKey
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sshKeyId: number } } & { json: { label?: SSHKeyLabel | undefined } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/profile/tfa-disable': {
      $post:
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
        | {
            input: {}
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/profile/tfa-enable': {
      $post:
        | {
            input: {}
            output: { expiry?: string | undefined; secret?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/profile/tfa-enable-confirm': {
      $post:
        | {
            input: { json: { tfa_code?: string | undefined } }
            output: { scratch?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { tfa_code?: string | undefined } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/profile/tokens': {
      $get:
        | {
            input: {}
            output: {
              data?: PersonalAccessToken[] | undefined
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              json: {
                expiry?: string | undefined
                label?: PersonalAccessTokenLabel | undefined
                scopes?: string | undefined
              }
            }
            output: PersonalAccessToken
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                expiry?: string | undefined
                label?: PersonalAccessTokenLabel | undefined
                scopes?: string | undefined
              }
            }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/profile/tokens/:tokenId': {
      $delete:
        | {
            input: { param: { tokenId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tokenId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { tokenId: number } }
            output: PersonalAccessToken
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tokenId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { tokenId: number } } & { json: PersonalAccessToken }
            output: PersonalAccessToken
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tokenId: number } } & { json: PersonalAccessToken }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/regions': {
      $get:
        | {
            input: {}
            output: {
              data?: Region[] | undefined
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/regions/:regionId': {
      $get:
        | {
            input: { param: { regionId: string } }
            output: Region
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { regionId: string } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/support/tickets': {
      $get:
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: {
              data?: SupportTicket[] | undefined
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: SupportTicketRequest }
            output: SupportTicket
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SupportTicketRequest }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/support/tickets/:ticketId': {
      $get:
        | {
            input: { param: { ticketId: number } }
            output: SupportTicket
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ticketId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/support/tickets/:ticketId/attachments': {
      $post:
        | {
            input: { param: { ticketId: number } } & { form: { file: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ticketId: number } } & { form: { file: string } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/support/tickets/:ticketId/close': {
      $post:
        | {
            input: { param: { ticketId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ticketId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/support/tickets/:ticketId/replies': {
      $get:
        | {
            input: { param: { ticketId: number } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              data?: SupportTicketReply[] | undefined
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ticketId: number } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { ticketId: number } } & { json: { description: string } }
            output: SupportTicketReply
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ticketId: number } } & { json: { description: string } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/tags': {
      $get:
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: {
              data?: Tag[] | undefined
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              json: {
                domains?: number[] | undefined
                label: string
                linodes?: number[] | undefined
                nodebalancers?: number[] | undefined
                volumes?: number[] | undefined
              }
            }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                domains?: number[] | undefined
                label: string
                linodes?: number[] | undefined
                nodebalancers?: number[] | undefined
                volumes?: number[] | undefined
              }
            }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/tags/:label': {
      $delete:
        | {
            input: { param: { label: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { label: string } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { label: string } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: {
              data?:
                | {
                    data?: Linode | Domain | Volume | NodeBalancer | undefined
                    type?: string | undefined
                  }[]
                | undefined
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { label: string } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/volumes': {
      $get:
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: {
              data?: Volume[] | undefined
              page?: PaginationEnvelopePage | undefined
              pages?: PaginationEnvelopePages | undefined
              results?: PaginationEnvelopeResults | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; page_size?: number | undefined } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              json: {
                config_id?: number | undefined
                label: string
                linode_id?: number | undefined
                region?: string | undefined
                size?: number | undefined
                tags?: string[] | undefined
              }
            }
            output: Volume
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                config_id?: number | undefined
                label: string
                linode_id?: number | undefined
                region?: string | undefined
                size?: number | undefined
                tags?: string[] | undefined
              }
            }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/volumes/:volumeId': {
      $delete:
        | {
            input: { param: { volumeId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { volumeId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { volumeId: number } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: Volume
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { volumeId: number } } & {
              query: { page?: number | undefined; page_size?: number | undefined }
            }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: { param: { volumeId: number } } & {
              json: {
                created?: string | undefined
                filesystem_path?: string | undefined
                hardware_type?: 'hdd' | 'nvme' | undefined
                id?: number | undefined
                label?: VolumeLabel | undefined
                linode_id?: { [x: string]: unknown } | undefined
                linode_label?: (string | null) | undefined
                region?: RegionId | undefined
                size?: { [x: string]: unknown } | undefined
                status?: 'creating' | 'active' | 'resizing' | undefined
                tags?: string[] | undefined
                updated?: string | undefined
              }
            }
            output: Volume
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { volumeId: number } } & {
              json: {
                created?: string | undefined
                filesystem_path?: string | undefined
                hardware_type?: 'hdd' | 'nvme' | undefined
                id?: number | undefined
                label?: VolumeLabel | undefined
                linode_id?: { [x: string]: unknown } | undefined
                linode_label?: (string | null) | undefined
                region?: RegionId | undefined
                size?: { [x: string]: unknown } | undefined
                status?: 'creating' | 'active' | 'resizing' | undefined
                tags?: string[] | undefined
                updated?: string | undefined
              }
            }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/volumes/:volumeId/attach': {
      $post:
        | {
            input: { param: { volumeId: number } } & {
              json: {
                config_id?: number | undefined
                linode_id: number
                persist_across_boots?: boolean | undefined
              }
            }
            output: Volume
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { volumeId: number } } & {
              json: {
                config_id?: number | undefined
                linode_id: number
                persist_across_boots?: boolean | undefined
              }
            }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/volumes/:volumeId/clone': {
      $post:
        | {
            input: { param: { volumeId: number } } & { json: { label: VolumeLabel } }
            output: Volume
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { volumeId: number } } & { json: { label: VolumeLabel } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/volumes/:volumeId/detach': {
      $post:
        | {
            input: { param: { volumeId: number } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { volumeId: number } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/volumes/:volumeId/resize': {
      $post:
        | {
            input: { param: { volumeId: number } } & { json: { size: VolumeSize } }
            output: Volume
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { volumeId: number } } & { json: { size: VolumeSize } }
            output: { errors?: ErrorObject[] | undefined }
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
