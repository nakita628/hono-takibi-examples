type Agent = {
  arch?: string | undefined
  client_id?: string | undefined
  connected?: boolean | undefined
  created_at?: bigint | undefined
  deactivated_at?: bigint | undefined
  external_ip?: string | undefined
  host_id?: string | undefined
  hub_id?: string | undefined
  id: string
  inactive?: boolean | undefined
  internal_ip?: string | undefined
  last_checkin?: bigint | undefined
  name?: string | undefined
  organization_id?: string | undefined
  os?: string | undefined
  site_id?: string | undefined
  system_info?: { [x: string]: unknown } | undefined
  updated_at?: bigint | undefined
  version?: string | undefined
}
type Credential = {
  acl?: { [x: string]: unknown } | undefined
  cidrs?: string[] | undefined
  client_id?: string | undefined
  created_at?: bigint | undefined
  created_by_email?: string | undefined
  created_by_id?: string | undefined
  global?: boolean | undefined
  id: string
  last_used_at?: bigint | undefined
  last_used_by_id?: string | undefined
  name?: string | undefined
  type?:
    | 'miradore_api_key_v1'
    | 'aws_access_secret'
    | 'crowdstrike_api_key'
    | 'azure_client_secret'
    | 'azure_username_password'
    | 'censys_search_api_key'
    | 'snmpv2_community'
    | 'snmpv3_credential'
    | 'vmware_username_password'
    | undefined
}
type MiradoreCredentialFields = { api_key: string; hostname: string }
type AWSCredentialFields = {
  access_key: string
  regions?: string | undefined
  role?: string | undefined
  secret_access_key: string
  use_cross_account_org?: string | undefined
}
type AzureClientSecretCredentialFields = {
  client_id: string
  client_secret: string
  multi_subscription?: string | undefined
  subscription_id?: string | undefined
  tenant_id: string
}
type AzureUsernamePasswordCredentialFields = {
  client_id: string
  password: string
  tenant_id: string
  username: string
}
type CrowdstrikeCredentialFields = { api_url: string; client_id: string; client_secret: string }
type CensysCredentialFields = {
  api_url?: string | undefined
  client_id: string
  client_secret: string
}
type SNMPv2CommunitiesCredentialFields = { community: string }
type SNMPv3CredentialFields = {
  'auth-passphrase'?: string | undefined
  'auth-protocol'?: string | undefined
  context?: string | undefined
  'privacy-passphrase'?: string | undefined
  'privacy-protocol'?: string | undefined
  username: string
}
type VMwareCredentialFields = {
  insecure?: string | undefined
  password: string
  thumbprints?: string | undefined
  username: string
}
type CredentialFields =
  | MiradoreCredentialFields
  | AWSCredentialFields
  | AzureClientSecretCredentialFields
  | AzureUsernamePasswordCredentialFields
  | CrowdstrikeCredentialFields
  | CensysCredentialFields
  | SNMPv2CommunitiesCredentialFields
  | SNMPv3CredentialFields
  | VMwareCredentialFields
type CredentialOptions = {
  acl?: { [x: string]: unknown } | undefined
  cidrs?: string | undefined
  global?: boolean | undefined
  name?: string | undefined
  secret?: CredentialFields | undefined
  type?: 'miradore_api_key_v1' | 'aws_access_secret' | undefined
}
type Event = {
  action?: string | undefined
  client_id?: string | undefined
  created_at?: bigint | undefined
  details?: { [x: string]: unknown } | undefined
  id?: string | undefined
  organization_id?: string | undefined
  processed_at?: bigint | undefined
  processor_id?: string | undefined
  site_id?: string | undefined
  source_id?: string | undefined
  source_name?: string | undefined
  source_type?: string | undefined
  state?: string | undefined
  success?: boolean | undefined
  target_id?: string | undefined
  target_name?: string | undefined
  target_type?: string | undefined
}
type Group = {
  created_at?: bigint | undefined
  created_by_email?: string | undefined
  description?: string | undefined
  expires_at?: bigint | undefined
  id: string
  name?: string | undefined
  org_default_role?: string | undefined
  org_roles?: { [x: string]: unknown } | undefined
  role_summary?: string | undefined
  updated_at?: bigint | undefined
  user_count?: bigint | undefined
}
type GroupPost = {
  description?: string | undefined
  expires_at?: bigint | undefined
  name?: string | undefined
  org_default_role?: string | undefined
  org_roles?: { [x: string]: unknown } | undefined
}
type GroupPut = {
  description?: string | undefined
  expires_at?: bigint | undefined
  id?: string | undefined
  name?: string | undefined
  org_default_role?: string | undefined
  org_roles?: { [x: string]: unknown } | undefined
}
type APIKey = {
  client_id?: string | undefined
  comment?: string | undefined
  counter?: bigint | undefined
  created_at?: bigint | undefined
  created_by?: string | undefined
  id: string
  inactive?: boolean | undefined
  last_used_at?: bigint | undefined
  last_used_ip?: string | undefined
  last_used_ua?: string | undefined
  organization_id?: string | undefined
  token?: string | undefined
  type?: string | undefined
  usage_limit?: bigint | undefined
  usage_today?: bigint | undefined
}
type APIKeyOptions = { comment?: string | undefined; organization_id?: string | undefined }
type License = {
  activated_at?: bigint | undefined
  address_city?: string | undefined
  address_country?: string | undefined
  address_postal?: string | undefined
  address_region?: string | undefined
  address_street?: string | undefined
  created_at?: bigint | undefined
  id?: string | undefined
  license_expiration?: bigint | undefined
  license_live_asset_count?: bigint | undefined
  license_max_assets?: bigint | undefined
  license_project_asset_count?: bigint | undefined
  license_type?: string | undefined
  name?: string | undefined
  partner?: string | undefined
  phone?: string | undefined
  settings?: { [x: string]: unknown } | undefined
  sso_default_role?: string | undefined
  sso_domain?: string | undefined
  sso_login_issuer_url?: string | undefined
  sso_login_login_url?: string | undefined
  sso_login_logout_url?: string | undefined
  sso_login_message?: string | undefined
  sso_mode?: string | undefined
  sso_type?: string | undefined
  subscription_cancel_at?: bigint | undefined
  subscription_canceled_at?: bigint | undefined
  subscription_period_end?: bigint | undefined
  subscription_period_start?: bigint | undefined
  updated_at?: bigint | undefined
  via_reseller?: boolean | undefined
}
type Organization = {
  asset_count?: bigint | undefined
  client_id?: string | undefined
  created_at?: bigint | undefined
  deactivated_at?: bigint | undefined
  description?: string | undefined
  download_token?: string | undefined
  download_token_created_at?: bigint | undefined
  expiration_assets_offline?: bigint | undefined
  expiration_assets_stale?: bigint | undefined
  expiration_scans?: bigint | undefined
  export_token?: string | undefined
  export_token_counter?: bigint | undefined
  export_token_created_at?: bigint | undefined
  export_token_last_used_at?: bigint | undefined
  export_token_last_used_by?: string | undefined
  id: string
  inactive?: boolean | undefined
  name: string
  parent_id?: string | undefined
  permanent?: boolean | undefined
  project?: boolean | undefined
  service_count?: bigint | undefined
  service_count_arp?: bigint | undefined
  service_count_icmp?: bigint | undefined
  service_count_tcp?: bigint | undefined
  service_count_udp?: bigint | undefined
  updated_at?: bigint | undefined
}
type OrgOptions = {
  description?: string | undefined
  expiration_assets_offline?: string | undefined
  expiration_assets_stale?: string | undefined
  expiration_scans?: string | undefined
  export_token?: string | undefined
  name?: string | undefined
  parent_id?: string | undefined
  project?: string | undefined
}
type Site = {
  created_at?: bigint | undefined
  description?: string | undefined
  excludes?: string | undefined
  id: string
  name: string
  permanent?: boolean | undefined
  scope?: string | undefined
  subnets?: { [x: string]: unknown } | undefined
  updated_at?: bigint | undefined
}
type GroupMapping = {
  created_at?: bigint | undefined
  created_by_email?: string | undefined
  description?: string | undefined
  group_id: string
  group_name?: string | undefined
  id: string
  sso_attribute: string
  sso_value: string
  updated_at?: bigint | undefined
}
type Task = {
  agent_id?: string | undefined
  client_id?: string | undefined
  created_at?: bigint | undefined
  created_by?: string | undefined
  created_by_user_id?: string | undefined
  cruncher_id?: string | undefined
  description?: string | undefined
  error?: string | undefined
  hidden?: boolean | undefined
  id: string
  name?: string | undefined
  organization_id?: string | undefined
  params?: { [x: string]: string } | undefined
  parent_id?: string | undefined
  recur?: boolean | undefined
  recur_frequency?: string | undefined
  recur_last?: bigint | undefined
  recur_last_task_id?: string | undefined
  recur_next?: bigint | undefined
  site_id?: string | undefined
  start_time?: bigint | undefined
  stats?: { [x: string]: unknown } | undefined
  status?: string | undefined
  template_id?: string | undefined
  type?: string | undefined
  updated_at?: bigint | undefined
}
type ScanTemplate = {
  acl: { [x: string]: unknown }
  agent_id?: string | undefined
  client_id?: string | undefined
  created_at?: bigint | undefined
  created_by?: string | undefined
  created_by_user_id?: string | undefined
  cruncher_id?: string | undefined
  description?: string | undefined
  error?: string | undefined
  global: boolean
  grace_period?: string | undefined
  hidden?: boolean | undefined
  hosted_zone_id?: string | undefined
  id: string
  linked_task_count?: number | undefined
  name?: string | undefined
  organization_id?: string | undefined
  params?: { [x: string]: string } | undefined
  parent_id?: string | undefined
  recur?: boolean | undefined
  recur_frequency?: string | undefined
  recur_last?: bigint | undefined
  recur_last_task_id?: string | undefined
  recur_next?: bigint | undefined
  site_id?: string | undefined
  size_data?: bigint | undefined
  size_results?: bigint | undefined
  size_site?: bigint | undefined
  source_id?: string | undefined
  start_time?: bigint | undefined
  stats?: { [x: string]: unknown } | undefined
  status?: string | undefined
  template_id?: string | undefined
  type?: string | undefined
  updated_at?: bigint | undefined
}
type ScanTemplateOptions = {
  acl: { [x: string]: unknown }
  description?: string | undefined
  global: boolean
  name: string
  params?: { [x: string]: string } | undefined
}
type User = {
  client_admin?: boolean | undefined
  client_id?: string | undefined
  created_at?: bigint | undefined
  email?: string | undefined
  first_name?: string | undefined
  id: string
  invite_token_expiration?: bigint | undefined
  last_login_at?: bigint | undefined
  last_login_ip?: string | undefined
  last_login_ua?: string | undefined
  last_name?: string | undefined
  login_failures?: bigint | undefined
  org_default_role?: string | undefined
  org_roles?: { [x: string]: unknown } | undefined
  reset_token_expiration?: bigint | undefined
  sso_only?: boolean | undefined
  updated_at?: bigint | undefined
}
type UserOptions = {
  client_admin?: boolean | undefined
  email?: string | undefined
  first_name?: string | undefined
  last_name?: string | undefined
  org_default_role?: string | undefined
  org_roles?: { [x: string]: unknown } | undefined
}
type UserInviteOptions = {
  client_admin?: boolean | undefined
  email?: string | undefined
  first_name?: string | undefined
  last_name?: string | undefined
  message?: string | undefined
  org_default_role?: string | undefined
  org_roles?: { [x: string]: unknown } | undefined
  subject?: string | undefined
}
type Asset = {
  addresses?: string[] | undefined
  addresses_extra?: string[] | undefined
  agent_name?: string | undefined
  alive?: boolean | undefined
  attributes?: { [x: string]: string } | undefined
  comments?: string | undefined
  created_at?: bigint | undefined
  credentials?: { [x: string]: string } | undefined
  detected_by?: string | undefined
  domains?: string[] | undefined
  first_seen?: bigint | undefined
  hw?: string | undefined
  id: string
  last_agent_id?: string | undefined
  last_seen?: bigint | undefined
  last_task_id?: string | undefined
  lowest_rtt?: bigint | undefined
  lowest_ttl?: bigint | undefined
  mac_vendors?: string[] | undefined
  macs?: string[] | undefined
  names?: string[] | undefined
  newest_mac?: string | undefined
  newest_mac_age?: bigint | undefined
  newest_mac_vendor?: string | undefined
  org_name?: string | undefined
  organization_id?: string | undefined
  os?: string | undefined
  os_version?: string | undefined
  rtts?: { [x: string]: unknown } | undefined
  service_count?: bigint | undefined
  service_count_arp?: bigint | undefined
  service_count_icmp?: bigint | undefined
  service_count_tcp?: bigint | undefined
  service_count_udp?: bigint | undefined
  service_ports_products?: string[] | undefined
  service_ports_protocols?: string[] | undefined
  service_ports_tcp?: string[] | undefined
  service_ports_udp?: string[] | undefined
  services?: { [x: string]: { [x: string]: string } } | undefined
  site_id?: string | undefined
  site_name?: string | undefined
  tags?: { [x: string]: string } | undefined
  type?: string | undefined
  updated_at?: bigint | undefined
}
type AssetServiceNow = {
  addresses_extra?: string | undefined
  addresses_scope?: string | undefined
  alive?: boolean | undefined
  asset_id: string
  comments?: string | undefined
  detected_by?: string | undefined
  domains?: string | undefined
  first_discovered?: string | undefined
  hw_product?: string | undefined
  hw_vendor?: string | undefined
  hw_version?: string | undefined
  ip_address?: string | undefined
  last_discovered?: string | undefined
  last_updated?: string | undefined
  lowest_rtt?: bigint | undefined
  lowest_ttl?: bigint | undefined
  mac_address?: string | undefined
  mac_manufacturer?: string | undefined
  mac_vendors?: string | undefined
  macs?: string | undefined
  name?: string | undefined
  newest_mac_age?: string | undefined
  organization?: string | undefined
  os_product?: string | undefined
  os_vendor?: string | undefined
  os_version?: string | undefined
  service_count?: bigint | undefined
  service_count_arp?: bigint | undefined
  service_count_icmp?: bigint | undefined
  service_count_tcp?: bigint | undefined
  service_count_udp?: bigint | undefined
  site?: string | undefined
  sys_class_name?: string | undefined
  tags?: string | undefined
  type?: string | undefined
}
type AssetsWithCheckpoint = { assets: Asset[]; since: bigint }
type Service = {
  addresses?: string[] | undefined
  addresses_extra?: string[] | undefined
  agent_name?: string | undefined
  alive?: boolean | undefined
  attributes?: { [x: string]: string } | undefined
  comments?: string | undefined
  created_at?: bigint | undefined
  credentials?: { [x: string]: string } | undefined
  detected_by?: string | undefined
  domains?: string[] | undefined
  first_seen?: bigint | undefined
  hw?: string | undefined
  id: string
  last_agent_id?: string | undefined
  last_seen?: bigint | undefined
  last_task_id?: string | undefined
  lowest_rtt?: bigint | undefined
  lowest_ttl?: bigint | undefined
  mac_vendors?: string[] | undefined
  macs?: string[] | undefined
  names?: string[] | undefined
  newest_mac?: string | undefined
  newest_mac_age?: bigint | undefined
  newest_mac_vendor?: string | undefined
  org_name?: string | undefined
  organization_id?: string | undefined
  os?: string | undefined
  os_version?: string | undefined
  rtts?: { [x: string]: unknown } | undefined
  service_address?: string | undefined
  service_asset_id?: string | undefined
  service_count?: bigint | undefined
  service_count_arp?: bigint | undefined
  service_count_icmp?: bigint | undefined
  service_count_tcp?: bigint | undefined
  service_count_udp?: bigint | undefined
  service_created_at?: bigint | undefined
  service_data?: { [x: string]: string } | undefined
  service_id: string
  service_link?: string | undefined
  service_port?: string | undefined
  service_ports_products?: string[] | undefined
  service_ports_protocols?: string[] | undefined
  service_ports_tcp?: string[] | undefined
  service_ports_udp?: string[] | undefined
  service_protocol?: string | undefined
  service_screenshot_link?: string | undefined
  service_summary?: string | undefined
  service_transport?: string | undefined
  service_updated_at?: bigint | undefined
  service_vhost?: string | undefined
  services?: { [x: string]: { [x: string]: string } } | undefined
  site_id?: string | undefined
  site_name?: string | undefined
  tags?: { [x: string]: string } | undefined
  type?: string | undefined
  updated_at?: bigint | undefined
}
type Wireless = {
  agent_name?: string | undefined
  authentication?: string | undefined
  bssid?: string | undefined
  channels?: string | undefined
  created_at?: bigint | undefined
  data?: { [x: string]: string } | undefined
  encryption?: string | undefined
  essid?: string | undefined
  family?: string | undefined
  id: string
  interface?: string | undefined
  last_agent_id?: string | undefined
  last_seen?: bigint | undefined
  last_task_id?: string | undefined
  org_name?: string | undefined
  organization_id?: string | undefined
  signal?: number | undefined
  site_id?: string | undefined
  site_name?: string | undefined
  type?: string | undefined
  vendor?: string | undefined
}
type AgentSiteID = { site_id: string }
type Search = { search: string }
type AssetTagsWithSearch = { search: string; tags: string }
type AssetComments = { comments: string }
type AssetTags = { tags: string }
type SiteOptions = {
  description?: string | undefined
  excludes?: string | undefined
  name: string
  scope?: string | undefined
}
type ScanOptions = {
  agent?: string | undefined
  excludes?: string | undefined
  'host-ping'?: string | undefined
  'max-attempts'?: string | undefined
  'max-group-size'?: string | undefined
  'max-host-rate'?: string | undefined
  'max-sockets'?: string | undefined
  'max-ttl'?: string | undefined
  nameservers?: string | undefined
  passes?: string | undefined
  probes?: string | undefined
  rate?: string | undefined
  'scan-description'?: string | undefined
  'scan-frequency'?: 'once' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'continuous' | undefined
  'scan-grace-period'?: string | undefined
  'scan-name'?: string | undefined
  'scan-start'?: string | undefined
  'scan-tags'?: string | undefined
  screenshots?: string | undefined
  'subnet-ping'?: string | undefined
  'subnet-ping-net-size'?: string | undefined
  'subnet-ping-sample-rate'?: string | undefined
  targets: string
  'tcp-excludes'?: string | undefined
  'tcp-ports'?: string | undefined
}
type URL = { id?: string | undefined }
type ComponentVersion = { id: string; version: string }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/account/agents': {
      $get:
        | {
            input: { query: { search?: string | undefined } }
            output: Agent[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { search?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/account/credentials': {
      $get:
        | {
            input: { query: { search?: string | undefined } }
            output: Credential[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { search?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
      $put:
        | {
            input: { json: CredentialOptions }
            output: Credential
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: CredentialOptions }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: CredentialOptions }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/account/credentials/:credential_id': {
      $delete:
        | {
            input: { param: { credential_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { credential_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { credential_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { credential_id: string } }
            output: Credential
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { credential_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { credential_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/account/events.json': {
      $get:
        | {
            input: { query: { search?: string | undefined; fields?: string | undefined } }
            output: Event[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { search?: string | undefined; fields?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/account/events.jsonl': {
      $get:
        | {
            input: { query: { search?: string | undefined; fields?: string | undefined } }
            output: Event[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { search?: string | undefined; fields?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/account/groups': {
      $get:
        | { input: {}; output: Group; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
      $post:
        | { input: { json: GroupPost }; output: Group; outputFormat: 'text'; status: 200 }
        | { input: { json: GroupPost }; output: {}; outputFormat: string; status: 401 }
      $put:
        | { input: { json: GroupPut }; output: Group; outputFormat: 'text'; status: 200 }
        | { input: { json: GroupPut }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/account/groups/:group_id': {
      $delete:
        | { input: { param: { group_id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { group_id: string } }; output: {}; outputFormat: string; status: 401 }
      $get:
        | {
            input: { param: { group_id: string } }
            output: Group
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { group_id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { group_id: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/account/keys': {
      $get:
        | { input: {}; output: APIKey[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
      $put:
        | { input: { json: APIKeyOptions }; output: APIKey; outputFormat: 'json'; status: 200 }
        | { input: { json: APIKeyOptions }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: APIKeyOptions }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/account/keys/:key_id': {
      $delete:
        | { input: { param: { key_id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { key_id: string } }; output: {}; outputFormat: string; status: 401 }
      $get:
        | {
            input: { param: { key_id: string } }
            output: APIKey
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { key_id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/account/keys/:key_id/rotate': {
      $patch:
        | {
            input: { param: { key_id: string } }
            output: APIKey
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { key_id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/account/license': {
      $get:
        | { input: {}; output: License; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/account/orgs': {
      $get:
        | {
            input: { query: { search?: string | undefined } }
            output: Organization[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { search?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
      $put:
        | { input: { json: OrgOptions }; output: Organization; outputFormat: 'json'; status: 200 }
        | { input: { json: OrgOptions }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: OrgOptions }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/account/orgs/:org_id': {
      $delete:
        | { input: { param: { org_id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { org_id: string } }; output: {}; outputFormat: string; status: 401 }
      $get:
        | {
            input: { param: { org_id: string } }
            output: Organization
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { org_id: string } }; output: {}; outputFormat: string; status: 401 }
      $patch:
        | {
            input: { param: { org_id: string } } & { json: OrgOptions }
            output: Organization
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org_id: string } } & { json: OrgOptions }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/account/orgs/:org_id/exportToken': {
      $delete:
        | { input: { param: { org_id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { org_id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/account/orgs/:org_id/exportToken/rotate': {
      $patch:
        | {
            input: { param: { org_id: string } }
            output: Organization
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { org_id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/account/sites': {
      $get:
        | {
            input: { query: { search?: string | undefined } }
            output: Site[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { search?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/account/sso/groups': {
      $get:
        | { input: {}; output: GroupMapping; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
      $post:
        | { input: { json: GroupMapping }; output: GroupMapping; outputFormat: 'text'; status: 200 }
        | { input: { json: GroupMapping }; output: {}; outputFormat: string; status: 401 }
      $put:
        | { input: { json: GroupMapping }; output: GroupMapping; outputFormat: 'text'; status: 200 }
        | { input: { json: GroupMapping }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/account/sso/groups/:group_mapping_id': {
      $delete:
        | {
            input: { param: { group_mapping_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { group_mapping_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
      $get:
        | {
            input: { param: { group_mapping_id: string } }
            output: GroupMapping
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { group_mapping_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { group_mapping_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/account/tasks': {
      $get:
        | {
            input: { query: { search?: string | undefined } }
            output: Task[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { search?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/account/tasks/templates': {
      $get:
        | {
            input: { query: { search?: string | undefined } }
            output: ScanTemplate[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { search?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { search?: string | undefined } }
            output: {}
            outputFormat: string
            status: 422
          }
      $post:
        | {
            input: { json: ScanTemplateOptions }
            output: ScanTemplate
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: ScanTemplateOptions }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: ScanTemplateOptions }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: ScanTemplateOptions }; output: {}; outputFormat: string; status: 422 }
      $put:
        | { input: { json: ScanTemplate }; output: ScanTemplate; outputFormat: 'json'; status: 200 }
        | { input: { json: ScanTemplate }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: ScanTemplate }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: ScanTemplate }; output: {}; outputFormat: string; status: 404 }
        | { input: { json: ScanTemplate }; output: {}; outputFormat: string; status: 422 }
    }
  } & {
    '/account/tasks/templates/:scan_template_id': {
      $delete:
        | {
            input: { param: { scan_template_id: string } }
            output: ScanTemplate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { scan_template_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { scan_template_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { scan_template_id: string } }
            output: {}
            outputFormat: string
            status: 422
          }
      $get:
        | {
            input: { param: { scan_template_id: string } }
            output: ScanTemplate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { scan_template_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { scan_template_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { scan_template_id: string } }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/account/users': {
      $get:
        | { input: {}; output: User[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
      $put:
        | { input: { json: UserOptions }; output: User; outputFormat: 'json'; status: 200 }
        | { input: { json: UserOptions }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: UserOptions }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/account/users/invite': {
      $put:
        | { input: { json: UserInviteOptions }; output: User; outputFormat: 'json'; status: 200 }
        | { input: { json: UserInviteOptions }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: UserInviteOptions }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/account/users/:user_id': {
      $delete:
        | { input: { param: { user_id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { user_id: string } }; output: {}; outputFormat: string; status: 401 }
      $get:
        | { input: { param: { user_id: string } }; output: User; outputFormat: 'text'; status: 200 }
        | { input: { param: { user_id: string } }; output: {}; outputFormat: string; status: 401 }
      $patch:
        | {
            input: { param: { user_id: string } } & { json: UserOptions }
            output: User
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { user_id: string } } & { json: UserOptions }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/account/users/:user_id/resetLockout': {
      $patch:
        | { input: { param: { user_id: string } }; output: User; outputFormat: 'text'; status: 200 }
        | { input: { param: { user_id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/account/users/:user_id/resetMFA': {
      $patch:
        | { input: { param: { user_id: string } }; output: User; outputFormat: 'text'; status: 200 }
        | { input: { param: { user_id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/account/users/:user_id/resetPassword': {
      $patch:
        | { input: { param: { user_id: string } }; output: User; outputFormat: 'text'; status: 200 }
        | { input: { param: { user_id: string } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/export/org/assets.cisco.csv': {
      $get:
        | {
            input: { query: { search?: string | undefined } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { search?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/export/org/assets.csv': {
      $get:
        | {
            input: { query: { search?: string | undefined } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { search?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/export/org/assets.json': {
      $get:
        | {
            input: { query: { search?: string | undefined; fields?: string | undefined } }
            output: Asset[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { search?: string | undefined; fields?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/export/org/assets.jsonl': {
      $get:
        | {
            input: { query: { search?: string | undefined; fields?: string | undefined } }
            output: File
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { search?: string | undefined; fields?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/export/org/assets.nmap.xml': {
      $get:
        | {
            input: { query: { search?: string | undefined } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { search?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/export/org/assets.servicenow.csv': {
      $get:
        | { input: {}; output: File; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/export/org/assets.servicenow.json': {
      $get:
        | { input: {}; output: AssetServiceNow[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/export/org/assets/sync/created/assets.json': {
      $get:
        | {
            input: {
              query: {
                search?: string | undefined
                fields?: string | undefined
                since?: bigint | undefined
              }
            }
            output: AssetsWithCheckpoint
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                search?: string | undefined
                fields?: string | undefined
                since?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/export/org/assets/sync/updated/assets.json': {
      $get:
        | {
            input: {
              query: {
                search?: string | undefined
                fields?: string | undefined
                since?: bigint | undefined
              }
            }
            output: AssetsWithCheckpoint
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                search?: string | undefined
                fields?: string | undefined
                since?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/export/org/services.csv': {
      $get:
        | {
            input: { query: { search?: string | undefined } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { search?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/export/org/services.json': {
      $get:
        | {
            input: { query: { search?: string | undefined; fields?: string | undefined } }
            output: Service[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { search?: string | undefined; fields?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/export/org/services.jsonl': {
      $get:
        | {
            input: { query: { search?: string | undefined; fields?: string | undefined } }
            output: File
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { search?: string | undefined; fields?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/export/org/services.servicenow.csv': {
      $get:
        | { input: {}; output: File; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/export/org/sites.csv': {
      $get:
        | { input: {}; output: File; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/export/org/sites.json': {
      $get:
        | {
            input: { query: { search?: string | undefined; fields?: string | undefined } }
            output: Site[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { search?: string | undefined; fields?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/export/org/sites.jsonl': {
      $get:
        | {
            input: { query: { search?: string | undefined; fields?: string | undefined } }
            output: File
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { search?: string | undefined; fields?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/export/org/wireless.csv': {
      $get:
        | {
            input: { query: { search?: string | undefined } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { search?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/export/org/wireless.json': {
      $get:
        | {
            input: { query: { search?: string | undefined; fields?: string | undefined } }
            output: Wireless[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { search?: string | undefined; fields?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/export/org/wireless.jsonl': {
      $get:
        | {
            input: { query: { search?: string | undefined; fields?: string | undefined } }
            output: File
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { search?: string | undefined; fields?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/org': {
      $get:
        | { input: {}; output: Organization; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
      $patch:
        | { input: { json: OrgOptions }; output: Organization; outputFormat: 'json'; status: 200 }
        | { input: { json: OrgOptions }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/org/agents': {
      $get:
        | { input: {}; output: Agent[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/org/agents/:agent_id': {
      $delete:
        | { input: { param: { agent_id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { agent_id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { agent_id: string } }; output: {}; outputFormat: string; status: 404 }
      $get:
        | {
            input: { param: { agent_id: string } }
            output: Agent
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { agent_id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { agent_id: string } }; output: {}; outputFormat: string; status: 404 }
      $patch:
        | {
            input: { param: { agent_id: string } } & { json: AgentSiteID }
            output: Agent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { agent_id: string } } & { json: AgentSiteID }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { agent_id: string } } & { json: AgentSiteID }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/org/agents/:agent_id/update': {
      $post:
        | { input: { param: { agent_id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { agent_id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { agent_id: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/org/assets': {
      $get:
        | {
            input: { query: { search?: string | undefined } }
            output: Asset[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { search?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/org/assets/bulk/clearTags': {
      $post:
        | { input: { json: Search }; output: unknown; outputFormat: 'json'; status: 200 }
        | { input: { json: Search }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: Search }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/org/assets/bulk/tags': {
      $patch:
        | {
            input: { json: AssetTagsWithSearch }
            output: unknown
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: AssetTagsWithSearch }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: AssetTagsWithSearch }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/org/assets/top.hw.csv': {
      $get:
        | { input: {}; output: File; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/org/assets/top.os.csv': {
      $get:
        | { input: {}; output: File; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/org/assets/top.tags.csv': {
      $get:
        | { input: {}; output: File; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/org/assets/top.types.csv': {
      $get:
        | { input: {}; output: File; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/org/assets/:asset_id': {
      $delete:
        | { input: { param: { asset_id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { asset_id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { asset_id: string } }; output: {}; outputFormat: string; status: 404 }
      $get:
        | {
            input: { param: { asset_id: string } }
            output: Asset
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { asset_id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { asset_id: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/org/assets/:asset_id/comments': {
      $patch:
        | {
            input: { param: { asset_id: string } } & { json: AssetComments }
            output: Asset
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { asset_id: string } } & { json: AssetComments }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { asset_id: string } } & { json: AssetComments }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/org/assets/:asset_id/tags': {
      $patch:
        | {
            input: { param: { asset_id: string } } & { json: AssetTags }
            output: Asset
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { asset_id: string } } & { json: AssetTags }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { asset_id: string } } & { json: AssetTags }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/org/key': {
      $delete:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
      $get:
        | { input: {}; output: APIKey; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/org/key/rotate': {
      $patch:
        | { input: {}; output: APIKey; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/org/services': {
      $get:
        | {
            input: { query: { search?: string | undefined } }
            output: Service[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { search?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/org/services/subnet.stats.csv': {
      $get:
        | {
            input: { query: { mask?: string | undefined } }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { mask?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/org/services/top.products.csv': {
      $get:
        | { input: {}; output: File; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/org/services/top.protocols.csv': {
      $get:
        | { input: {}; output: File; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/org/services/top.tcp.csv': {
      $get:
        | { input: {}; output: File; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/org/services/top.udp.csv': {
      $get:
        | { input: {}; output: File; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/org/services/:service_id': {
      $delete:
        | {
            input: { param: { service_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { service_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { service_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { service_id: string } }
            output: Service
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { service_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { service_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/org/sites': {
      $get:
        | { input: {}; output: Site[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
      $put:
        | { input: { json: SiteOptions }; output: Site; outputFormat: 'json'; status: 200 }
        | { input: { json: SiteOptions }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: SiteOptions }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/org/sites/:site_id': {
      $delete:
        | { input: { param: { site_id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { site_id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { site_id: string } }; output: {}; outputFormat: string; status: 404 }
      $get:
        | { input: { param: { site_id: string } }; output: Site; outputFormat: 'json'; status: 200 }
        | { input: { param: { site_id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { site_id: string } }; output: {}; outputFormat: string; status: 404 }
      $patch:
        | {
            input: { param: { site_id: string } } & { json: SiteOptions }
            output: Site
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string } } & { json: SiteOptions }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { site_id: string } } & { json: SiteOptions }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/org/sites/:site_id/import': {
      $put:
        | {
            input: { param: { site_id: string } } & { json: File }
            output: Task
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string } } & { json: File }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { site_id: string } } & { json: File }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { site_id: string } } & { json: File }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { site_id: string } } & { json: File }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/org/sites/:site_id/import/nessus': {
      $put:
        | {
            input: { param: { site_id: string } } & { json: File }
            output: Task
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string } } & { json: File }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { site_id: string } } & { json: File }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { site_id: string } } & { json: File }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { site_id: string } } & { json: File }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/org/sites/:site_id/scan': {
      $put:
        | {
            input: { param: { site_id: string } } & { json: ScanOptions }
            output: Task
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string } } & { json: ScanOptions }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { site_id: string } } & { json: ScanOptions }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { site_id: string } } & { json: ScanOptions }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { site_id: string } } & { json: ScanOptions }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/org/tasks': {
      $get:
        | {
            input: { query: { status?: string | undefined; search?: string | undefined } }
            output: Task[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { status?: string | undefined; search?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/org/tasks/:task_id': {
      $get:
        | { input: { param: { task_id: string } }; output: Task; outputFormat: 'json'; status: 200 }
        | { input: { param: { task_id: string } }; output: {}; outputFormat: string; status: 401 }
      $patch:
        | {
            input: { param: { task_id: string } } & { json: Task }
            output: Task
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { task_id: string } } & { json: Task }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { task_id: string } } & { json: Task }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/org/tasks/:task_id/changes': {
      $get:
        | { input: { param: { task_id: string } }; output: URL; outputFormat: 'text'; status: 200 }
        | { input: { param: { task_id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { task_id: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/org/tasks/:task_id/data': {
      $get:
        | { input: { param: { task_id: string } }; output: URL; outputFormat: 'text'; status: 200 }
        | { input: { param: { task_id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { task_id: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/org/tasks/:task_id/hide': {
      $post:
        | { input: { param: { task_id: string } }; output: Task; outputFormat: 'text'; status: 200 }
        | { input: { param: { task_id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { task_id: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/org/tasks/:task_id/log': {
      $get:
        | { input: { param: { task_id: string } }; output: URL; outputFormat: 'text'; status: 200 }
        | { input: { param: { task_id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { task_id: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/org/tasks/:task_id/stop': {
      $post:
        | { input: { param: { task_id: string } }; output: Task; outputFormat: 'text'; status: 200 }
        | { input: { param: { task_id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { task_id: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/org/wireless': {
      $get:
        | {
            input: { query: { search?: string | undefined } }
            output: Wireless[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { search?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/org/wireless/:wireless_id': {
      $delete:
        | {
            input: { param: { wireless_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { wireless_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { wireless_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { wireless_id: string } }
            output: Wireless
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { wireless_id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/releases/agent/version': {
      $get: { input: {}; output: ComponentVersion; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/releases/platform/version': {
      $get: { input: {}; output: ComponentVersion; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/releases/scanner/version': {
      $get: { input: {}; output: ComponentVersion; outputFormat: 'json'; status: 200 }
    }
  },
  '/'
>
export default routes
