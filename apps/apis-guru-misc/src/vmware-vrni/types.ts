type Domain = { domain_type?: 'LDAP' | 'LOCAL' | undefined; value?: string | undefined }
type UserCredential = {
  domain?: Domain | undefined
  password?: string | undefined
  username?: string | undefined
}
type Token = { expiry?: bigint | undefined; token?: string | undefined }
type ErrorDetail = {
  code?: number | undefined
  message?: string | undefined
  target?: string[] | undefined
}
type ApiError = {
  code?: number | undefined
  details?: ErrorDetail[] | undefined
  message?: string | undefined
}
type DataSourceType =
  | 'CiscoSwitchDataSource'
  | 'DellSwitchDataSource'
  | 'AristaSwitchDataSource'
  | 'BrocadeSwitchDataSource'
  | 'JuniperSwitchDataSource'
  | 'VCenterDataSource'
  | 'NSXVManagerDataSource'
  | 'UCSManagerDataSource'
  | 'HPVCManagerDataSource'
  | 'HPOneViewDataSource'
  | 'PanFirewallDataSource'
  | 'CheckpointFirewallDataSource'
type DataSourceEntityId = {
  entity_id?: string | undefined
  entity_type?: DataSourceType | undefined
}
type DataSourceListResponse = {
  results?: DataSourceEntityId[] | undefined
  total_count?: number | undefined
}
type PasswordCredentials = { password: string; username: string }
type AristaSwitchDataSourceRequest = {
  enabled?: boolean | undefined
  fqdn?: string | undefined
  ip?: string | undefined
  nickname: string
  notes?: string | undefined
  proxy_id: string
  credentials?: PasswordCredentials | undefined
}
type AristaSwitchDataSource = {
  enabled?: boolean | undefined
  entity_id?: string | undefined
  entity_type?: DataSourceType | undefined
  fqdn?: string | undefined
  ip?: string | undefined
  nickname?: string | undefined
  notes?: string | undefined
  proxy_id?: string | undefined
  credentials?: PasswordCredentials | undefined
}
type SNMP2cConfig = { community_string?: string | undefined }
type SNMP3Config = {
  authentication_password?: string | undefined
  authentication_type?: 'NO_AUTH' | 'MD5' | 'SHA' | undefined
  context_name?: string | undefined
  privacy_password?: string | undefined
  privacy_type?: 'AES' | 'DES' | 'AES128' | 'AES192' | 'AES256' | '3DES' | 'NO_PRIV' | undefined
  username?: string | undefined
}
type SNMPConfig = {
  config_snmp_2c?: SNMP2cConfig | undefined
  config_snmp_3?: SNMP3Config | undefined
  snmp_enabled?: boolean | undefined
  snmp_version?: 'v2c' | 'v3' | undefined
}
type BrocadeSwitchDataSourceRequest = {
  enabled?: boolean | undefined
  fqdn?: string | undefined
  ip?: string | undefined
  nickname: string
  notes?: string | undefined
  proxy_id: string
  credentials?: PasswordCredentials | undefined
}
type BrocadeSwitchDataSource = {
  enabled?: boolean | undefined
  entity_id?: string | undefined
  entity_type?: DataSourceType | undefined
  fqdn?: string | undefined
  ip?: string | undefined
  nickname?: string | undefined
  notes?: string | undefined
  proxy_id?: string | undefined
  credentials?: PasswordCredentials | undefined
}
type CheckpointFirewallDataSourceRequest = {
  enabled?: boolean | undefined
  fqdn?: string | undefined
  ip?: string | undefined
  nickname: string
  notes?: string | undefined
  proxy_id: string
  credentials?: PasswordCredentials | undefined
}
type CheckpointFirewallDataSource = {
  enabled?: boolean | undefined
  entity_id?: string | undefined
  entity_type?: DataSourceType | undefined
  fqdn?: string | undefined
  ip?: string | undefined
  nickname?: string | undefined
  notes?: string | undefined
  proxy_id?: string | undefined
  credentials?: PasswordCredentials | undefined
}
type CiscoSwitchType =
  | 'CATALYST_3000'
  | 'CATALYST_4500'
  | 'CATALYST_6500'
  | 'NEXUS_5K'
  | 'NEXUS_7K'
  | 'NEXUS_9K'
type CiscoSwitchDataSourceRequest = {
  enabled?: boolean | undefined
  fqdn?: string | undefined
  ip?: string | undefined
  nickname: string
  notes?: string | undefined
  proxy_id: string
  credentials?: PasswordCredentials | undefined
  switch_type?: CiscoSwitchType | undefined
}
type CiscoSwitchDataSource = {
  enabled?: boolean | undefined
  entity_id?: string | undefined
  entity_type?: DataSourceType | undefined
  fqdn?: string | undefined
  ip?: string | undefined
  nickname?: string | undefined
  notes?: string | undefined
  proxy_id?: string | undefined
  credentials?: PasswordCredentials | undefined
  switch_type?: CiscoSwitchType | undefined
}
type DellSwitchType = 'FORCE_10_MXL_10' | 'POWERCONNECT_8024' | 'S4048' | 'Z9100' | 'S6000'
type DellSwitchDataSourceRequest = {
  enabled?: boolean | undefined
  fqdn?: string | undefined
  ip?: string | undefined
  nickname: string
  notes?: string | undefined
  proxy_id: string
  credentials?: PasswordCredentials | undefined
  switch_type?: DellSwitchType | undefined
}
type DellSwitchDataSource = {
  enabled?: boolean | undefined
  entity_id?: string | undefined
  entity_type?: DataSourceType | undefined
  fqdn?: string | undefined
  ip?: string | undefined
  nickname?: string | undefined
  notes?: string | undefined
  proxy_id?: string | undefined
  credentials?: PasswordCredentials | undefined
  switch_type?: DellSwitchType | undefined
}
type HPOneViewManagerDataSourceRequest = {
  enabled?: boolean | undefined
  entity_id?: string | undefined
  entity_type?: DataSourceType | undefined
  fqdn?: string | undefined
  ip?: string | undefined
  nickname?: string | undefined
  notes?: string | undefined
  proxy_id?: string | undefined
  credentials?: PasswordCredentials | undefined
}
type HPOneViewManagerDataSource = {
  enabled?: boolean | undefined
  entity_id?: string | undefined
  entity_type?: DataSourceType | undefined
  fqdn?: string | undefined
  ip?: string | undefined
  nickname?: string | undefined
  notes?: string | undefined
  proxy_id?: string | undefined
  credentials?: PasswordCredentials | undefined
}
type HPVCManagerDataSourceRequest = {
  enabled?: boolean | undefined
  entity_id?: string | undefined
  entity_type?: DataSourceType | undefined
  fqdn?: string | undefined
  ip?: string | undefined
  nickname?: string | undefined
  notes?: string | undefined
  proxy_id?: string | undefined
  credentials?: PasswordCredentials | undefined
}
type HPVCManagerDataSource = {
  enabled?: boolean | undefined
  entity_id?: string | undefined
  entity_type?: DataSourceType | undefined
  fqdn?: string | undefined
  ip?: string | undefined
  nickname?: string | undefined
  notes?: string | undefined
  proxy_id?: string | undefined
  credentials?: PasswordCredentials | undefined
}
type JuniperSwitchDataSourceRequest = {
  enabled?: boolean | undefined
  fqdn?: string | undefined
  ip?: string | undefined
  nickname: string
  notes?: string | undefined
  proxy_id: string
  credentials?: PasswordCredentials | undefined
}
type JuniperSwitchDataSource = {
  enabled?: boolean | undefined
  entity_id?: string | undefined
  entity_type?: DataSourceType | undefined
  fqdn?: string | undefined
  ip?: string | undefined
  nickname?: string | undefined
  notes?: string | undefined
  proxy_id?: string | undefined
  credentials?: PasswordCredentials | undefined
}
type NSXVManagerDataSourceRequest = {
  enabled?: boolean | undefined
  fqdn?: string | undefined
  ip?: string | undefined
  nickname: string
  notes?: string | undefined
  proxy_id: string
  central_cli_enabled?: boolean | undefined
  credentials: PasswordCredentials
  ipfix_enabled?: boolean | undefined
  vcenter_id: string
}
type NSXVManagerDataSource = {
  enabled?: boolean | undefined
  entity_id?: string | undefined
  entity_type?: DataSourceType | undefined
  fqdn?: string | undefined
  ip?: string | undefined
  nickname?: string | undefined
  notes?: string | undefined
  proxy_id?: string | undefined
  central_cli_enabled?: boolean | undefined
  credentials?: PasswordCredentials | undefined
  ipfix_enabled?: boolean | undefined
  vcenter_id?: string | undefined
}
type NSXControllerDataCollection = {
  controller_password?: string | undefined
  enabled?: boolean | undefined
}
type PanFirewallDataSourceRequest = {
  enabled?: boolean | undefined
  fqdn?: string | undefined
  ip?: string | undefined
  nickname: string
  notes?: string | undefined
  proxy_id: string
  credentials?: PasswordCredentials | undefined
}
type PanFirewallDataSource = {
  enabled?: boolean | undefined
  entity_id?: string | undefined
  entity_type?: DataSourceType | undefined
  fqdn?: string | undefined
  ip?: string | undefined
  nickname?: string | undefined
  notes?: string | undefined
  proxy_id?: string | undefined
  credentials?: PasswordCredentials | undefined
}
type UCSManagerDataSourceRequest = {
  enabled?: boolean | undefined
  entity_id?: string | undefined
  entity_type?: DataSourceType | undefined
  fqdn?: string | undefined
  ip?: string | undefined
  nickname?: string | undefined
  notes?: string | undefined
  proxy_id?: string | undefined
  credentials?: PasswordCredentials | undefined
}
type UCSManagerDataSource = {
  enabled?: boolean | undefined
  entity_id?: string | undefined
  entity_type?: DataSourceType | undefined
  fqdn?: string | undefined
  ip?: string | undefined
  nickname?: string | undefined
  notes?: string | undefined
  proxy_id?: string | undefined
  credentials?: PasswordCredentials | undefined
}
type VCenterDataSourceRequest = {
  enabled?: boolean | undefined
  fqdn?: string | undefined
  ip?: string | undefined
  nickname: string
  notes?: string | undefined
  proxy_id: string
  credentials?: PasswordCredentials | undefined
}
type VCenterDataSource = {
  enabled?: boolean | undefined
  entity_id?: string | undefined
  entity_type?: DataSourceType | undefined
  fqdn?: string | undefined
  ip?: string | undefined
  nickname?: string | undefined
  notes?: string | undefined
  proxy_id?: string | undefined
  credentials?: PasswordCredentials | undefined
}
type EntityType =
  | 'VirtualMachine'
  | 'EC2Instance'
  | 'Host'
  | 'Vnic'
  | 'Vmknic'
  | 'VxlanLayer2Network'
  | 'VlanL2Network'
  | 'Cluster'
  | 'SecurityTag'
  | 'ResourcePool'
  | 'NSXIPSet'
  | 'EC2IPSet'
  | 'NSXSecurityGroup'
  | 'EC2SecurityGroup'
  | 'Flow'
  | 'ProblemEvent'
  | 'Application'
  | 'Tier'
  | 'NSXFirewallRule'
  | 'EC2SGFirewallRule'
  | 'NSXRedirectRule'
  | 'VCenterManager'
  | 'NSXVManager'
  | 'NSXService'
  | 'EC2Service'
  | 'VPC'
  | 'NSXDistributedFirewall'
  | 'EC2Firewall'
  | 'NSXServiceGroup'
  | 'DistributedVirtualSwitch'
  | 'DistributedVirtualPortgroup'
  | 'VCDatacenter'
  | 'Datastore'
  | 'Folder'
type EntityIdWithTime = {
  entity_id?: string | undefined
  entity_type?: EntityType | undefined
  time?: bigint | undefined
}
type PagedListResponseWithTime = {
  cursor?: string | undefined
  end_time?: bigint | undefined
  results?: EntityIdWithTime[] | undefined
  start_time?: bigint | undefined
  total_count?: number | undefined
}
type Reference = { entity_id?: string | undefined; entity_type?: EntityType | undefined }
type Cluster = {
  entity_id?: string | undefined
  entity_type?: EntityType | undefined
  name?: string | undefined
  nsx_manager?: Reference | undefined
  num_cpu_cores?: number | undefined
  num_datastores?: number | undefined
  num_hosts?: number | undefined
  total_cpus?: number | undefined
  total_memory?: bigint | undefined
  vcenter_manager?: Reference | undefined
  vendor_id?: string | undefined
}
type Datastore = {
  entity_id?: string | undefined
  entity_type?: EntityType | undefined
  name?: string | undefined
  vcenter_manager?: Reference | undefined
  vendor_id?: string | undefined
}
type DistributedVirtualPortgroup = {
  entity_id?: string | undefined
  entity_type?: EntityType | undefined
  name?: string | undefined
  distributed_virtual_switch?: Reference | undefined
  vcenter_manager?: Reference | undefined
  vendor_id?: string | undefined
}
type DistributedVirtualSwitch = {
  entity_id?: string | undefined
  entity_type?: EntityType | undefined
  name?: string | undefined
  hosts?: Reference[] | undefined
  vcenter_manager?: Reference | undefined
  vendor_id?: string | undefined
}
type FirewallAction =
  | 'ALLOW'
  | 'ACCEPT'
  | 'DENY'
  | 'DROP'
  | 'REJECT'
  | 'REDIRECT'
  | 'DO_NOT_REDIRECT'
type PortRange = {
  display?: string | undefined
  end?: number | undefined
  iana_name?: string | undefined
  iana_port_display?: string | undefined
  start?: number | undefined
}
type BaseFirewallRule = {
  entity_id?: string | undefined
  entity_type?: EntityType | undefined
  name?: string | undefined
  action?: FirewallAction | undefined
  destination_any?: boolean | undefined
  destination_inversion?: boolean | undefined
  destinations?: Reference[] | undefined
  disabled?: boolean | undefined
  port_ranges?: PortRange[] | undefined
  rule_id?: string | undefined
  section_id?: string | undefined
  section_name?: string | undefined
  sequence_number?: number | undefined
  service_any?: boolean | undefined
  services?: Reference[] | undefined
  source_any?: boolean | undefined
  source_inversion?: boolean | undefined
  sources?: Reference[] | undefined
}
type IpV4Address = {
  ip_address?: string | undefined
  netmask?: string | undefined
  network_address?: string | undefined
}
type FlowTag =
  | 'TAG_TRAFFIC_TYPE_UNKNOWN'
  | 'TAG_INTERNET_TRAFFIC'
  | 'TAG_EAST_WEST_TRAFFIC'
  | 'TAG_VM_VM_TRAFFIC'
  | 'TAG_VM_PHY_TRAFFIC'
  | 'TAG_PHY_PHY_TRAFFIC'
  | 'TAG_SRC_IP_VMKNIC'
  | 'TAG_DST_IP_VMKNIC'
  | 'TAG_SRC_IP_VM'
  | 'TAG_DST_IP_VM'
  | 'TAG_SRC_IP_INTERNET'
  | 'TAG_DST_IP_INTERNET'
  | 'TAG_SRC_IP_PHYSICAL'
  | 'TAG_DST_IP_PHYSICAL'
  | 'TAG_SAME_HOST'
  | 'TAG_DIFF_HOST'
  | 'TAG_SHARED_SERVICE'
  | 'TAG_NOT_SHARED_SERVICE'
  | 'TAG_NETWORK_SWITCHED'
  | 'TAG_NETWORK_ROUTED'
  | 'TAG_NETWORK_UNKNOWN'
  | 'TAG_SRC_IP_VTEP'
  | 'TAG_DST_IP_VTEP'
  | 'TAG_UNICAST'
  | 'TAG_BROADCAST'
  | 'TAG_MULTICAST'
  | 'TAG_SRC_IP_LINK_LOCAL'
  | 'TAG_DST_IP_LINK_LOCAL'
  | 'TAG_SRC_IP_CLASS_E'
  | 'TAG_DST_IP_CLASS_E'
  | 'TAG_SRC_IP_CLASS_A_RESERVED'
  | 'TAG_DST_IP_CLASS_A_RESERVED'
  | 'TAG_INVALID_IP_PACKETS'
  | 'TAG_NOT_ANALYZED'
  | 'TAG_GENERIC_INTERNET_SRC_IP'
  | 'TAG_SNAT_DNAT_FLOW'
  | 'TAG_MULTINICS'
  | 'TAG_SRC_VC'
  | 'TAG_DST_VC'
  | 'TAG_SRC_AWS'
  | 'TAG_DST_AWS'
  | 'TAG_WITHIN_DC'
  | 'TAG_DIFF_DC'
  | 'TAG_WITHIN_VPC'
  | 'TAG_DIFF_VPC'
type Protocol = 'TCP' | 'UDP' | 'OTHER'
type FlowTrafficType = 'INTERNET_TRAFFIC' | 'EAST_WEST_TRAFFIC'
type Flow = {
  entity_id?: string | undefined
  entity_type?: EntityType | undefined
  name?: string | undefined
  destination_cluster?: Reference | undefined
  destination_datacenter?: Reference | undefined
  destination_folders?: Reference[] | undefined
  destination_host?: Reference | undefined
  destination_ip?: IpV4Address | undefined
  destination_ip_sets?: Reference[] | undefined
  destination_l2_network?: Reference | undefined
  destination_resource_pool?: Reference | undefined
  destination_security_groups?: Reference[] | undefined
  destination_security_tags?: Reference[] | undefined
  destination_vm?: Reference | undefined
  destination_vm_tags?: string[] | undefined
  destination_vnic?: Reference | undefined
  destination_vpc?: Reference | undefined
  firewall_action?: FirewallAction | undefined
  flow_tag?: FlowTag[] | undefined
  port?: PortRange | undefined
  protocol?: Protocol | undefined
  source_cluster?: Reference | undefined
  source_datacenter?: Reference | undefined
  source_folders?: Reference[] | undefined
  source_host?: Reference | undefined
  source_ip?: IpV4Address | undefined
  source_ip_sets?: Reference[] | undefined
  source_l2_network?: Reference | undefined
  source_resource_pool?: Reference | undefined
  source_security_groups?: Reference[] | undefined
  source_security_tags?: Reference[] | undefined
  source_vm?: Reference | undefined
  source_vm_tags?: string[] | undefined
  source_vnic?: Reference | undefined
  source_vpc?: Reference | undefined
  traffic_type?: FlowTrafficType | undefined
  within_host?: boolean | undefined
}
type Folder = {
  entity_id?: string | undefined
  entity_type?: EntityType | undefined
  name?: string | undefined
  vcenter_manager?: Reference | undefined
  vendor_id?: string | undefined
}
type Host = {
  entity_id?: string | undefined
  entity_type?: EntityType | undefined
  name?: string | undefined
  cluster?: Reference | undefined
  connection_state?: string | undefined
  datastores?: Reference[] | undefined
  maintenance_mode?: string | undefined
  nsx_manager?: Reference | undefined
  service_tag?: string | undefined
  vcenter_manager?: Reference | undefined
  vendor_id?: string | undefined
  vm_count?: number | undefined
  vmknics?: Reference[] | undefined
}
type RuleSet = {
  firewall?: Reference | undefined
  rule_set_type?: 'NSX_STANDARD' | 'NSX_REDIRECT' | 'AWS_STANDARD' | undefined
  rules?: Reference[] | undefined
}
type IpNumericRange = { end?: bigint | undefined; start?: bigint | undefined }
type IpAddressRange = { end_ip?: string | undefined; start_ip?: string | undefined }
type BaseIPSet = {
  entity_id?: string | undefined
  entity_type?: EntityType | undefined
  name?: string | undefined
  direct_destination_rules?: RuleSet[] | undefined
  direct_source_rules?: RuleSet[] | undefined
  indirect_destination_rules?: RuleSet[] | undefined
  indirect_source_rules?: RuleSet[] | undefined
  ip_addresses?: IpV4Address[] | undefined
  ip_numeric_ranges?: IpNumericRange[] | undefined
  ip_ranges?: IpAddressRange[] | undefined
  parent_security_groups?: Reference[] | undefined
  translated_vm_count?: number | undefined
  vendor?: string | undefined
  vendor_id?: string | undefined
}
type BaseL2Network = {
  entity_id?: string | undefined
  entity_type?: EntityType | undefined
  name?: string | undefined
  gateways?: string[] | undefined
  network_addresses?: string[] | undefined
}
type NameRequestParam = { entity_id?: string | undefined; time?: bigint | undefined }
type NamesRequest = { entities?: NameRequestParam[] | undefined }
type EntityName = {
  entity_id?: string | undefined
  entity_type?: EntityType | undefined
  time?: bigint | undefined
  name?: string | undefined
}
type NamesResponse = { entities?: EntityName[] | undefined }
type BaseNSXManager = {
  entity_id?: string | undefined
  entity_type?: EntityType | undefined
  name?: string | undefined
}
type ProblemEvent = {
  entity_id?: string | undefined
  entity_type?: EntityType | undefined
  name?: string | undefined
  admin_state?: 'ENABLED' | 'DISABLED' | undefined
  anchor_entities?: Reference[] | undefined
  archived?: boolean | undefined
  event_tags?: string[] | undefined
  event_time_epoch_ms?: bigint | undefined
  message?: string | undefined
  related_entities?: Reference[] | undefined
  event_close_time_epoch_ms?: bigint | undefined
  severity?: 'CRITICAL' | 'MODERATE' | 'WARNING' | 'INFO' | undefined
}
type BaseSecurityGroup = {
  entity_id?: string | undefined
  entity_type?: EntityType | undefined
  name?: string | undefined
  members?: Reference[] | undefined
  direct_destination_rules?: RuleSet[] | undefined
  direct_members?: Reference[] | undefined
  direct_source_rules?: RuleSet[] | undefined
  excluded_members?: Reference[] | undefined
  indirect_destination_rules?: RuleSet[] | undefined
  indirect_source_rules?: RuleSet[] | undefined
  parents?: Reference[] | undefined
  translated_vm_count?: number | undefined
  vendor_id?: string | undefined
}
type SecurityTag = {
  entity_id?: string | undefined
  entity_type?: EntityType | undefined
  name?: string | undefined
  description?: string | undefined
  direct_security_groups?: Reference[] | undefined
  nsx_manager?: Reference | undefined
  security_groups?: Reference[] | undefined
  vendor_id?: string | undefined
}
type BaseServiceGroup = {
  entity_id?: string | undefined
  entity_type?: EntityType | undefined
  name?: string | undefined
  members?: Reference[] | undefined
}
type BaseService = {
  entity_id?: string | undefined
  entity_type?: EntityType | undefined
  name?: string | undefined
  port_ranges?: PortRange[] | undefined
  protocol?: string | undefined
}
type VCDatacenter = {
  entity_id?: string | undefined
  entity_type?: EntityType | undefined
  name?: string | undefined
  vcenter_manager?: Reference | undefined
  vendor_id?: string | undefined
}
type VCenterManager = {
  entity_id?: string | undefined
  entity_type?: EntityType | undefined
  name?: string | undefined
  fqdn?: string | undefined
  ip_address?: IpV4Address | undefined
  nsx_manager?: Reference | undefined
  vm?: Reference | undefined
}
type Vlan = { begin?: number | undefined; end?: number | undefined }
type Vmknic = {
  entity_id?: string | undefined
  entity_type?: EntityType | undefined
  name?: string | undefined
  host?: Reference | undefined
  ip_addresses?: IpV4Address[] | undefined
  layer2_network?: Reference | undefined
  vlan?: Vlan | undefined
}
type BaseVirtualMachine = {
  entity_id?: string | undefined
  entity_type?: EntityType | undefined
  name?: string | undefined
  default_gateway?: string | undefined
  destination_firewall_rules?: RuleSet[] | undefined
  ip_addresses?: IpV4Address[] | undefined
  ip_sets?: Reference[] | undefined
  security_groups?: Reference[] | undefined
  source_firewall_rules?: RuleSet[] | undefined
  vnics?: Reference[] | undefined
}
type BaseVnic = {
  entity_id?: string | undefined
  entity_type?: EntityType | undefined
  name?: string | undefined
  ip_addresses?: IpV4Address[] | undefined
  layer2_network?: Reference | undefined
  vlan?: Vlan | undefined
  vm?: Reference | undefined
}
type EntityId = { entity_id?: string | undefined; entity_type?: EntityType | undefined }
type PagedListResponse = {
  cursor?: string | undefined
  end_time?: bigint | undefined
  results?: EntityId[] | undefined
  start_time?: bigint | undefined
  total_count?: number | undefined
}
type ApplicationRequest = { name?: string | undefined }
type Application = {
  entity_id?: string | undefined
  entity_type?: EntityType | undefined
  name?: string | undefined
  create_time?: bigint | undefined
  created_by?: string | undefined
  last_modified_by?: string | undefined
  last_modified_time?: bigint | undefined
}
type IpAddressMembershipCriteria = { ip_addresses?: string[] | undefined }
type AllEntityType =
  | 'Group'
  | 'BaseSecurityGroup'
  | 'BaseEvent'
  | 'BaseVirtualMachine'
  | 'BaseFirewallRule'
  | 'BaseIPSet'
  | 'BaseL2Network'
  | 'BaseFirewall'
  | 'BaseService'
  | 'BaseServiceGroup'
  | 'BaseVnic'
  | 'VirtualMachine'
  | 'EC2Instance'
  | 'Host'
  | 'Vnic'
  | 'Vmknic'
  | 'VxlanLayer2Network'
  | 'VlanL2Network'
  | 'Cluster'
  | 'SecurityTag'
  | 'ResourcePool'
  | 'NSXIPSet'
  | 'EC2IPSet'
  | 'NSXSecurityGroup'
  | 'EC2SecurityGroup'
  | 'Flow'
  | 'ProblemEvent'
  | 'Application'
  | 'Tier'
  | 'NSXFirewallRule'
  | 'EC2SGFirewallRule'
  | 'NSXRedirectRule'
  | 'VCenterManager'
  | 'NSXVManager'
  | 'BaseManager'
  | 'BaseNSXManager'
  | 'NSXService'
  | 'EC2Service'
  | 'VPC'
  | 'NSXDistributedFirewall'
  | 'EC2Firewall'
  | 'NSXServiceGroup'
  | 'DistributedVirtualSwitch'
  | 'DistributedVirtualPortgroup'
  | 'VCDatacenter'
  | 'Datastore'
  | 'Folder'
type SearchMembershipCriteria = {
  entity_type?: AllEntityType | undefined
  filter?: string | undefined
}
type GroupMembershipCriteria = {
  ip_address_membership_criteria?: IpAddressMembershipCriteria | undefined
  membership_type?: 'SearchMembershipCriteria' | 'IPAddressMembershipCriteria' | undefined
  search_membership_criteria?: SearchMembershipCriteria | undefined
}
type Tier = {
  entity_id?: string | undefined
  entity_type?: EntityType | undefined
  name?: string | undefined
  application?: Reference | undefined
  group_membership_criteria?: GroupMembershipCriteria[] | undefined
}
type TierListResponse = { results?: Tier[] | undefined }
type TierRequest = {
  group_membership_criteria?: GroupMembershipCriteria[] | undefined
  name?: string | undefined
}
type VersionResponse = { api_version?: string | undefined }
type NodeType = 'Node'
type NodeId = { entity_type?: NodeType | undefined; id?: string | undefined }
type NodeListResult = { results?: NodeId[] | undefined; total_count?: number | undefined }
type Node = {
  entity_type?: NodeType | undefined
  id?: string | undefined
  ip_address?: string | undefined
  name?: string | undefined
  node_id?: string | undefined
  node_type?: 'PROXY_VM' | 'PLATFORM_VM' | undefined
}
type MicroSecGroup = { entity?: Reference | undefined }
type TimeRange = { end_time?: bigint | undefined; start_time?: bigint | undefined }
type RecommendedRulesRequest = {
  group_1?: MicroSecGroup | undefined
  group_2?: MicroSecGroup | undefined
  time_range?: TimeRange | undefined
}
type SimplePortRange = { end?: number | undefined; start?: number | undefined }
type RecommendedRule = {
  action?: 'ALLOW' | 'DROP' | undefined
  destinations?: Reference[] | undefined
  port_ranges?: SimplePortRange[] | undefined
  protocols?: string[] | undefined
  sources?: Reference[] | undefined
}
type RecommendedRules = {
  results?: RecommendedRule[] | undefined
  time_range?: TimeRange | undefined
}
type SortByClause = { field?: string | undefined; order?: 'ASC' | 'DESC' | undefined }
type SearchRequest = {
  cursor?: string | undefined
  entity_type?: AllEntityType | undefined
  filter?: string | undefined
  size?: number | undefined
  sort_by?: SortByClause | undefined
  time_range?: TimeRange | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/auth/token': {
      $delete:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
      $post:
        | { input: { json: UserCredential }; output: Token; outputFormat: 'json'; status: 200 }
        | { input: { json: UserCredential }; output: ApiError; outputFormat: 'json'; status: 400 }
        | { input: { json: UserCredential }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: UserCredential }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/data-sources/arista-switches': {
      $get:
        | { input: {}; output: DataSourceListResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
      $post:
        | {
            input: { json: AristaSwitchDataSourceRequest }
            output: AristaSwitchDataSource
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: AristaSwitchDataSourceRequest }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AristaSwitchDataSourceRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: AristaSwitchDataSourceRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: AristaSwitchDataSourceRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/data-sources/arista-switches/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
      $get:
        | {
            input: { param: { id: string } }
            output: AristaSwitchDataSource
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
      $put:
        | {
            input: { param: { id: string } } & { json: AristaSwitchDataSource }
            output: AristaSwitchDataSource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: AristaSwitchDataSource }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: AristaSwitchDataSource }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: AristaSwitchDataSource }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: AristaSwitchDataSource }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: AristaSwitchDataSource }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/data-sources/arista-switches/:id/disable': {
      $post:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/data-sources/arista-switches/:id/enable': {
      $post:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/data-sources/arista-switches/:id/snmp-config': {
      $get:
        | {
            input: { param: { id: string } }
            output: SNMPConfig
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
      $put:
        | {
            input: { param: { id: string } } & { json: SNMPConfig }
            output: SNMPConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: SNMPConfig }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: SNMPConfig }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: SNMPConfig }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: SNMPConfig }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: SNMPConfig }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/data-sources/brocade-switches': {
      $get:
        | { input: {}; output: DataSourceListResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
      $post:
        | {
            input: { json: BrocadeSwitchDataSourceRequest }
            output: BrocadeSwitchDataSource
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: BrocadeSwitchDataSourceRequest }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: BrocadeSwitchDataSourceRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: BrocadeSwitchDataSourceRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: BrocadeSwitchDataSourceRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/data-sources/brocade-switches/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
      $get:
        | {
            input: { param: { id: string } }
            output: BrocadeSwitchDataSource
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
      $put:
        | {
            input: { param: { id: string } } & { json: BrocadeSwitchDataSource }
            output: BrocadeSwitchDataSource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: BrocadeSwitchDataSource }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: BrocadeSwitchDataSource }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: BrocadeSwitchDataSource }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: BrocadeSwitchDataSource }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: BrocadeSwitchDataSource }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/data-sources/brocade-switches/:id/disable': {
      $post:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/data-sources/brocade-switches/:id/enable': {
      $post:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/data-sources/brocade-switches/:id/snmp-config': {
      $get:
        | {
            input: { param: { id: string } }
            output: SNMPConfig
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
      $put:
        | {
            input: { param: { id: string } } & { json: SNMPConfig }
            output: SNMPConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: SNMPConfig }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: SNMPConfig }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: SNMPConfig }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: SNMPConfig }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: SNMPConfig }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/data-sources/checkpoint-firewalls': {
      $get:
        | { input: {}; output: DataSourceListResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
      $post:
        | {
            input: { json: CheckpointFirewallDataSourceRequest }
            output: CheckpointFirewallDataSource
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CheckpointFirewallDataSourceRequest }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CheckpointFirewallDataSourceRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: CheckpointFirewallDataSourceRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: CheckpointFirewallDataSourceRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/data-sources/checkpoint-firewalls/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
      $get:
        | {
            input: { param: { id: string } }
            output: CheckpointFirewallDataSource
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
      $put:
        | {
            input: { param: { id: string } } & { json: CheckpointFirewallDataSource }
            output: CheckpointFirewallDataSource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: CheckpointFirewallDataSource }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: CheckpointFirewallDataSource }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: CheckpointFirewallDataSource }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: CheckpointFirewallDataSource }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: CheckpointFirewallDataSource }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/data-sources/checkpoint-firewalls/:id/disable': {
      $post:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/data-sources/checkpoint-firewalls/:id/enable': {
      $post:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/data-sources/cisco-switches': {
      $get:
        | { input: {}; output: DataSourceListResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
      $post:
        | {
            input: { json: CiscoSwitchDataSourceRequest }
            output: CiscoSwitchDataSource
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CiscoSwitchDataSourceRequest }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CiscoSwitchDataSourceRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: CiscoSwitchDataSourceRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: CiscoSwitchDataSourceRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/data-sources/cisco-switches/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
      $get:
        | {
            input: { param: { id: string } }
            output: CiscoSwitchDataSource
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
      $put:
        | {
            input: { param: { id: string } } & { json: CiscoSwitchDataSource }
            output: CiscoSwitchDataSource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: CiscoSwitchDataSource }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: CiscoSwitchDataSource }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: CiscoSwitchDataSource }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: CiscoSwitchDataSource }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: CiscoSwitchDataSource }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/data-sources/cisco-switches/:id/disable': {
      $post:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/data-sources/cisco-switches/:id/enable': {
      $post:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/data-sources/cisco-switches/:id/snmp-config': {
      $get:
        | {
            input: { param: { id: string } }
            output: SNMPConfig
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
      $put:
        | {
            input: { param: { id: string } } & { json: SNMPConfig }
            output: SNMPConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: SNMPConfig }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: SNMPConfig }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: SNMPConfig }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: SNMPConfig }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: SNMPConfig }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/data-sources/dell-switches': {
      $get:
        | { input: {}; output: DataSourceListResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
      $post:
        | {
            input: { json: DellSwitchDataSourceRequest }
            output: DellSwitchDataSource
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: DellSwitchDataSourceRequest }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: DellSwitchDataSourceRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: DellSwitchDataSourceRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: DellSwitchDataSourceRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/data-sources/dell-switches/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
      $get:
        | {
            input: { param: { id: string } }
            output: DellSwitchDataSource
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
      $put:
        | {
            input: { param: { id: string } } & { json: DellSwitchDataSource }
            output: DellSwitchDataSource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: DellSwitchDataSource }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: DellSwitchDataSource }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: DellSwitchDataSource }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: DellSwitchDataSource }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: DellSwitchDataSource }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/data-sources/dell-switches/:id/disable': {
      $post:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/data-sources/dell-switches/:id/enable': {
      $post:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/data-sources/dell-switches/:id/snmp-config': {
      $get:
        | {
            input: { param: { id: string } }
            output: SNMPConfig
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
      $put:
        | {
            input: { param: { id: string } } & { json: SNMPConfig }
            output: SNMPConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: SNMPConfig }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: SNMPConfig }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: SNMPConfig }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: SNMPConfig }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: SNMPConfig }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/data-sources/hpov-managers': {
      $get:
        | { input: {}; output: DataSourceListResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
      $post:
        | {
            input: { json: HPOneViewManagerDataSourceRequest }
            output: HPOneViewManagerDataSource
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: HPOneViewManagerDataSourceRequest }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: HPOneViewManagerDataSourceRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: HPOneViewManagerDataSourceRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: HPOneViewManagerDataSourceRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/data-sources/hpov-managers/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
      $get:
        | {
            input: { param: { id: string } }
            output: HPOneViewManagerDataSource
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
      $put:
        | {
            input: { param: { id: string } } & { json: HPOneViewManagerDataSource }
            output: HPOneViewManagerDataSource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: HPOneViewManagerDataSource }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: HPOneViewManagerDataSource }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: HPOneViewManagerDataSource }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: HPOneViewManagerDataSource }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: HPOneViewManagerDataSource }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/data-sources/hpov-managers/:id/disable': {
      $post:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/data-sources/hpov-managers/:id/enable': {
      $post:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/data-sources/hpvc-managers': {
      $get:
        | { input: {}; output: DataSourceListResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
      $post:
        | {
            input: { json: HPVCManagerDataSourceRequest }
            output: HPVCManagerDataSource
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: HPVCManagerDataSourceRequest }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: HPVCManagerDataSourceRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: HPVCManagerDataSourceRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: HPVCManagerDataSourceRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/data-sources/hpvc-managers/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
      $get:
        | {
            input: { param: { id: string } }
            output: HPVCManagerDataSource
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
      $put:
        | {
            input: { param: { id: string } } & { json: HPVCManagerDataSource }
            output: HPVCManagerDataSource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: HPVCManagerDataSource }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: HPVCManagerDataSource }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: HPVCManagerDataSource }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: HPVCManagerDataSource }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: HPVCManagerDataSource }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/data-sources/hpvc-managers/:id/disable': {
      $post:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/data-sources/hpvc-managers/:id/enable': {
      $post:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/data-sources/juniper-switches': {
      $get:
        | { input: {}; output: DataSourceListResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
      $post:
        | {
            input: { json: JuniperSwitchDataSourceRequest }
            output: JuniperSwitchDataSource
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: JuniperSwitchDataSourceRequest }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: JuniperSwitchDataSourceRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: JuniperSwitchDataSourceRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: JuniperSwitchDataSourceRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/data-sources/juniper-switches/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
      $get:
        | {
            input: { param: { id: string } }
            output: JuniperSwitchDataSource
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
      $put:
        | {
            input: { param: { id: string } } & { json: JuniperSwitchDataSource }
            output: JuniperSwitchDataSource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: JuniperSwitchDataSource }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: JuniperSwitchDataSource }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: JuniperSwitchDataSource }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: JuniperSwitchDataSource }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: JuniperSwitchDataSource }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/data-sources/juniper-switches/:id/disable': {
      $post:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/data-sources/juniper-switches/:id/enable': {
      $post:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/data-sources/juniper-switches/:id/snmp-config': {
      $get:
        | {
            input: { param: { id: string } }
            output: SNMPConfig
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
      $put:
        | {
            input: { param: { id: string } } & { json: SNMPConfig }
            output: SNMPConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: SNMPConfig }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: SNMPConfig }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: SNMPConfig }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: SNMPConfig }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: SNMPConfig }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/data-sources/nsxv-managers': {
      $get:
        | { input: {}; output: DataSourceListResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
      $post:
        | {
            input: { json: NSXVManagerDataSourceRequest }
            output: NSXVManagerDataSource
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: NSXVManagerDataSourceRequest }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: NSXVManagerDataSourceRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: NSXVManagerDataSourceRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: NSXVManagerDataSourceRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/data-sources/nsxv-managers/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
      $get:
        | {
            input: { param: { id: string } }
            output: NSXVManagerDataSource
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
      $put:
        | {
            input: { param: { id: string } } & { json: NSXVManagerDataSource }
            output: NSXVManagerDataSource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: NSXVManagerDataSource }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: NSXVManagerDataSource }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: NSXVManagerDataSource }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: NSXVManagerDataSource }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/data-sources/nsxv-managers/:id/controller-cluster': {
      $get:
        | {
            input: { param: { id: string } }
            output: NSXControllerDataCollection
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
      $put:
        | {
            input: { param: { id: string } } & { json: NSXControllerDataCollection }
            output: NSXControllerDataCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: NSXControllerDataCollection }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: NSXControllerDataCollection }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: NSXControllerDataCollection }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: NSXControllerDataCollection }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: NSXControllerDataCollection }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/data-sources/nsxv-managers/:id/disable': {
      $post:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/data-sources/nsxv-managers/:id/enable': {
      $post:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/data-sources/panorama-firewalls': {
      $get:
        | { input: {}; output: DataSourceListResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
      $post:
        | {
            input: { json: PanFirewallDataSourceRequest }
            output: PanFirewallDataSource
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: PanFirewallDataSourceRequest }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: PanFirewallDataSourceRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: PanFirewallDataSourceRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: PanFirewallDataSourceRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/data-sources/panorama-firewalls/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
      $get:
        | {
            input: { param: { id: string } }
            output: PanFirewallDataSource
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
      $put:
        | {
            input: { param: { id: string } } & { json: PanFirewallDataSource }
            output: PanFirewallDataSource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: PanFirewallDataSource }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: PanFirewallDataSource }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: PanFirewallDataSource }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: PanFirewallDataSource }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: PanFirewallDataSource }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/data-sources/panorama-firewalls/:id/disable': {
      $post:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/data-sources/panorama-firewalls/:id/enable': {
      $post:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/data-sources/ucs-managers': {
      $get:
        | { input: {}; output: DataSourceListResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
      $post:
        | {
            input: { json: UCSManagerDataSourceRequest }
            output: UCSManagerDataSource
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: UCSManagerDataSourceRequest }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: UCSManagerDataSourceRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: UCSManagerDataSourceRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: UCSManagerDataSourceRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/data-sources/ucs-managers/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
      $get:
        | {
            input: { param: { id: string } }
            output: UCSManagerDataSource
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
      $put:
        | {
            input: { param: { id: string } } & { json: UCSManagerDataSource }
            output: UCSManagerDataSource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: UCSManagerDataSource }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: UCSManagerDataSource }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: UCSManagerDataSource }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: UCSManagerDataSource }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: UCSManagerDataSource }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/data-sources/ucs-managers/:id/disable': {
      $post:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/data-sources/ucs-managers/:id/enable': {
      $post:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/data-sources/ucs-managers/:id/snmp-config': {
      $get:
        | {
            input: { param: { id: string } }
            output: SNMPConfig
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
      $put:
        | {
            input: { param: { id: string } } & { json: SNMPConfig }
            output: SNMPConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: SNMPConfig }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: SNMPConfig }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: SNMPConfig }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: SNMPConfig }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: SNMPConfig }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/data-sources/vcenters': {
      $get:
        | { input: {}; output: DataSourceListResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
      $post:
        | {
            input: { json: VCenterDataSourceRequest }
            output: VCenterDataSource
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: VCenterDataSourceRequest }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: VCenterDataSourceRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: VCenterDataSourceRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: VCenterDataSourceRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/data-sources/vcenters/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
      $get:
        | {
            input: { param: { id: string } }
            output: VCenterDataSource
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
      $put:
        | {
            input: { param: { id: string } } & { json: VCenterDataSource }
            output: VCenterDataSource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: VCenterDataSource }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: VCenterDataSource }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: VCenterDataSource }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: VCenterDataSource }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: VCenterDataSource }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/data-sources/vcenters/:id/disable': {
      $post:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/data-sources/vcenters/:id/enable': {
      $post:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/entities/clusters': {
      $get:
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: PagedListResponseWithTime
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/entities/clusters/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: Cluster
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/entities/datastores': {
      $get:
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: PagedListResponseWithTime
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/entities/datastores/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: Datastore
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/entities/distributed-virtual-portgroups': {
      $get:
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: PagedListResponseWithTime
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/entities/distributed-virtual-portgroups/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: DistributedVirtualPortgroup
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/entities/distributed-virtual-switches': {
      $get:
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: PagedListResponseWithTime
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/entities/distributed-virtual-switches/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: DistributedVirtualSwitch
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/entities/firewall-rules': {
      $get:
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: PagedListResponseWithTime
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/entities/firewall-rules/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: BaseFirewallRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/entities/firewalls': {
      $get:
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: PagedListResponseWithTime
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/entities/firewalls/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: BaseFirewallRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/entities/flows': {
      $get:
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: PagedListResponseWithTime
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/entities/flows/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: Flow
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/entities/folders': {
      $get:
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: PagedListResponseWithTime
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/entities/folders/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: Folder
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/entities/hosts': {
      $get:
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: PagedListResponseWithTime
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/entities/hosts/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: Host
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/entities/ip-sets': {
      $get:
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: PagedListResponseWithTime
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/entities/ip-sets/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: BaseIPSet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/entities/layer2-networks': {
      $get:
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: PagedListResponseWithTime
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/entities/layer2-networks/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: BaseL2Network
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/entities/names': {
      $post:
        | {
            input: { json: NamesRequest }
            output: NamesResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: NamesRequest }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: NamesRequest }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/entities/names/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: EntityName
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/entities/nsx-managers': {
      $get:
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: PagedListResponseWithTime
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/entities/nsx-managers/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: BaseNSXManager
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/entities/problems': {
      $get:
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: PagedListResponseWithTime
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/entities/problems/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: ProblemEvent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/entities/security-groups': {
      $get:
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: PagedListResponseWithTime
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/entities/security-groups/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: BaseSecurityGroup
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/entities/security-tags': {
      $get:
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: PagedListResponseWithTime
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/entities/security-tags/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: SecurityTag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/entities/service-groups': {
      $get:
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: PagedListResponseWithTime
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/entities/service-groups/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: BaseServiceGroup
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/entities/services': {
      $get:
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: PagedListResponseWithTime
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/entities/services/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: BaseService
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/entities/vc-datacenters': {
      $get:
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: PagedListResponseWithTime
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/entities/vc-datacenters/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: VCDatacenter
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/entities/vcenter-managers': {
      $get:
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: PagedListResponseWithTime
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/entities/vcenter-managers/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: VCenterManager
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/entities/vmknics': {
      $get:
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: PagedListResponseWithTime
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/entities/vmknics/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: Vmknic
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/entities/vms': {
      $get:
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: PagedListResponseWithTime
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/entities/vms/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: BaseVirtualMachine
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/entities/vnics': {
      $get:
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: PagedListResponseWithTime
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/entities/vnics/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: BaseVnic
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { time?: bigint | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/groups/applications': {
      $get:
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: PagedListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                size?: number | undefined
                cursor?: string | undefined
                start_time?: number | undefined
                end_time?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { json: ApplicationRequest }
            output: Application
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: ApplicationRequest }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | { input: { json: ApplicationRequest }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: ApplicationRequest }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/groups/applications/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
      $get:
        | {
            input: { param: { id: string } }
            output: Application
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/groups/applications/:id/tiers': {
      $get:
        | {
            input: { param: { id: string } }
            output: TierListResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
      $post:
        | {
            input: { param: { id: string } } & { json: TierRequest }
            output: Tier
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & { json: TierRequest }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: TierRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: TierRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: TierRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: TierRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/groups/applications/:id/tiers/:tier-id': {
      $delete:
        | {
            input: { param: { id: string; 'tier-id': string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string; 'tier-id': string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string; 'tier-id': string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $get:
        | {
            input: { param: { id: string; 'tier-id': string } }
            output: Tier
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; 'tier-id': string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string; 'tier-id': string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string; 'tier-id': string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/groups/tiers/:tier-id': {
      $get:
        | {
            input: { param: { 'tier-id': string } } & { header: { Authorization: string } }
            output: Tier
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'tier-id': string } } & { header: { Authorization: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { 'tier-id': string } } & { header: { Authorization: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { 'tier-id': string } } & { header: { Authorization: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/info/version': {
      $get:
        | { input: {}; output: VersionResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/infra/nodes': {
      $get:
        | { input: {}; output: NodeListResult; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/infra/nodes/:id': {
      $get:
        | { input: { param: { id: string } }; output: Node; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/micro-seg/recommended-rules': {
      $post:
        | {
            input: { json: RecommendedRulesRequest }
            output: RecommendedRules
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: RecommendedRulesRequest }
            output: ApiError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: RecommendedRulesRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: RecommendedRulesRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/micro-seg/recommended-rules/nsx': {
      $post:
        | {
            input: { json: RecommendedRulesRequest }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: RecommendedRulesRequest }
            output: ApiError
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { json: RecommendedRulesRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: RecommendedRulesRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/search': {
      $post:
        | {
            input: { json: SearchRequest }
            output: PagedListResponseWithTime
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: SearchRequest }; output: ApiError; outputFormat: 'json'; status: 400 }
        | { input: { json: SearchRequest }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: SearchRequest }; output: {}; outputFormat: string; status: 500 }
    }
  },
  '/'
>
export default routes
