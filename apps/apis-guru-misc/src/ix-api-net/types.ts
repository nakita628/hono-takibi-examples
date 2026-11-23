type Address = {
  country?: string | undefined
  locality?: string | undefined
  post_office_box_number?: (string | null) | undefined
  postal_code?: string | undefined
  region?: (string | null) | undefined
  street_address?: string | undefined
}
type BillingInformation = {
  address?: Address | undefined
  name?: string | undefined
  vat_number?: (string | null) | undefined
}
type Status = {
  attrs?: { [x: string]: unknown } | undefined
  message?: string | undefined
  severity?: number | undefined
  tag?: string | undefined
  timestamp?: string | undefined
}
type Account = {
  address?: Address | undefined
  billing_information?: BillingInformation | undefined
  discoverable?: boolean | undefined
  external_ref?: (string | null) | undefined
  id?: string | undefined
  legal_name?: (string | null) | undefined
  managing_account?: (string | null) | undefined
  metro_area_network_presence?: string[] | undefined
  name?: string | undefined
  state?:
    | 'requested'
    | 'allocated'
    | 'testing'
    | 'production'
    | 'production_change_pending'
    | 'decommission_requested'
    | 'decommissioned'
    | 'archived'
    | 'error'
    | 'operator'
    | 'scheduled'
    | undefined
  status?: Status[] | undefined
}
type AccountRequest = {
  address?: Address | undefined
  billing_information?: BillingInformation | undefined
  discoverable?: boolean | undefined
  external_ref?: (string | null) | undefined
  legal_name?: (string | null) | undefined
  managing_account?: (string | null) | undefined
  metro_area_network_presence?: string[] | undefined
  name?: string | undefined
}
type AccountUpdatePartial = {
  address?: Address | undefined
  billing_information?: BillingInformation | undefined
  discoverable?: boolean | undefined
  external_ref?: (string | null) | undefined
  legal_name?: (string | null) | undefined
  managing_account?: (string | null) | undefined
  metro_area_network_presence?: string[] | undefined
  name?: string | undefined
}
type AccountUpdate = {
  address?: Address | undefined
  billing_information?: BillingInformation | undefined
  discoverable?: boolean | undefined
  external_ref?: (string | null) | undefined
  legal_name?: (string | null) | undefined
  managing_account?: (string | null) | undefined
  metro_area_network_presence?: string[] | undefined
  name?: string | undefined
}
type RefreshTokenRequest = { refresh_token?: string | undefined }
type AuthToken = { access_token?: string | undefined; refresh_token?: string | undefined }
type AuthTokenRequest = { api_key?: string | undefined; api_secret?: string | undefined }
type Connection = {
  billing_account?: string | undefined
  consuming_account?: string | undefined
  contract_ref?: (string | null) | undefined
  external_ref?: (string | null) | undefined
  id?: string | undefined
  lacp_timeout?: 'slow' | 'fast' | undefined
  managing_account?: string | undefined
  mode?: 'lag_lacp' | 'lag_static' | 'flex_ethernet' | 'standalone' | undefined
  name?: string | undefined
  outer_vlan_ethertypes?: ('0x8100' | '0x88a8' | '0x9100')[] | undefined
  ports?: string[] | undefined
  purchase_order?: string | undefined
  role_assignments?: string[] | undefined
  speed?: (number | null) | undefined
  state?:
    | 'requested'
    | 'allocated'
    | 'testing'
    | 'production'
    | 'production_change_pending'
    | 'decommission_requested'
    | 'decommissioned'
    | 'archived'
    | 'error'
    | 'operator'
    | 'scheduled'
    | undefined
  status?: Status[] | undefined
  vlan_types?: ('port' | 'dot1q' | 'qinq')[] | undefined
}
type Contact = {
  consuming_account?: string | undefined
  email?: (string | null) | undefined
  external_ref?: (string | null) | undefined
  id?: string | undefined
  managing_account?: string | undefined
  name?: (string | null) | undefined
  telephone?: (string | null) | undefined
}
type ContactRequest = {
  consuming_account?: string | undefined
  email?: (string | null) | undefined
  external_ref?: (string | null) | undefined
  managing_account?: string | undefined
  name?: (string | null) | undefined
  telephone?: (string | null) | undefined
}
type ContactRequestPartial = {
  consuming_account?: string | undefined
  email?: (string | null) | undefined
  external_ref?: (string | null) | undefined
  managing_account?: string | undefined
  name?: (string | null) | undefined
  telephone?: (string | null) | undefined
}
type DeviceCapability = {
  availability?: number | undefined
  max_lag?: number | undefined
  media_type?: string | undefined
  speed?: number | undefined
}
type Device = {
  capabilities?: DeviceCapability[] | undefined
  facility?: string | undefined
  id?: string | undefined
  name?: string | undefined
  pop?: string | undefined
}
type Facility = {
  address_country?: string | undefined
  address_locality?: string | undefined
  address_region?: string | undefined
  id?: string | undefined
  metro_area?: string | undefined
  name?: string | undefined
  organisation_name?: string | undefined
  peeringdb_facility_id?: (number | null) | undefined
  pops?: string[] | undefined
  postal_code?: string | undefined
  street_address?: string | undefined
}
type HealthResponse = {
  checks?: { [x: string]: { [x: string]: string } } | undefined
  description?: string | undefined
  links?: { [x: string]: string } | undefined
  notes?: string[] | undefined
  output?: string | undefined
  releaseId?: string | undefined
  serviceId?: string | undefined
  status?: 'pass' | 'fail' | 'warn' | undefined
  version?: string | undefined
}
type ImplementationResponse = {
  schema_version?: string | undefined
  service_version?: string | undefined
  supported_network_feature_config_types?: string[] | undefined
  supported_network_feature_types?: string[] | undefined
  supported_network_service_config_types?: string[] | undefined
  supported_network_service_types?: string[] | undefined
  supported_operations?: string[] | undefined
}
type IpAddress = {
  address?: string | undefined
  consuming_account?: string | undefined
  external_ref?: (string | null) | undefined
  fqdn?: (string | null) | undefined
  id?: string | undefined
  managing_account?: string | undefined
  prefix_length?: number | undefined
  valid_not_after?: (string | null) | undefined
  valid_not_before?: (string | null) | undefined
  version?: number | undefined
}
type IpAddressRequest = {
  address?: string | undefined
  consuming_account?: string | undefined
  external_ref?: (string | null) | undefined
  fqdn?: (string | null) | undefined
  managing_account?: string | undefined
  prefix_length?: number | undefined
  valid_not_after?: (string | null) | undefined
  valid_not_before?: (string | null) | undefined
  version?: number | undefined
}
type IpAddressUpdatePartial = {
  address?: string | undefined
  consuming_account?: string | undefined
  external_ref?: (string | null) | undefined
  fqdn?: (string | null) | undefined
  managing_account?: string | undefined
  prefix_length?: number | undefined
  valid_not_after?: (string | null) | undefined
  valid_not_before?: (string | null) | undefined
  version?: number | undefined
}
type IpAddressUpdate = {
  address?: string | undefined
  consuming_account?: string | undefined
  external_ref?: (string | null) | undefined
  fqdn?: (string | null) | undefined
  managing_account?: string | undefined
  prefix_length?: number | undefined
  valid_not_after?: (string | null) | undefined
  valid_not_before?: (string | null) | undefined
  version?: number | undefined
}
type MacAddress = {
  address?: string | undefined
  consuming_account?: string | undefined
  external_ref?: (string | null) | undefined
  id?: string | undefined
  managing_account?: string | undefined
  valid_not_after?: (string | null) | undefined
  valid_not_before?: (string | null) | undefined
}
type MacAddressRequest = {
  address?: string | undefined
  consuming_account?: string | undefined
  external_ref?: (string | null) | undefined
  managing_account?: string | undefined
  valid_not_after?: (string | null) | undefined
  valid_not_before?: (string | null) | undefined
}
type AllowMemberJoiningRule = {
  capacity_max?: (number | null) | undefined
  capacity_min?: (number | null) | undefined
  consuming_account?: string | undefined
  external_ref?: (string | null) | undefined
  id?: string | undefined
  managing_account?: string | undefined
  network_service?: string | undefined
  type: string
}
type DenyMemberJoiningRule = {
  consuming_account?: string | undefined
  external_ref?: (string | null) | undefined
  id?: string | undefined
  managing_account?: string | undefined
  network_service?: string | undefined
  type: string
}
type MemberJoiningRule = AllowMemberJoiningRule | DenyMemberJoiningRule
type AllowMemberJoiningRuleRequest = {
  capacity_max?: (number | null) | undefined
  capacity_min?: (number | null) | undefined
  consuming_account?: string | undefined
  external_ref?: (string | null) | undefined
  managing_account?: string | undefined
  network_service?: string | undefined
  type: string
}
type DenyMemberJoiningRuleRequest = {
  consuming_account?: string | undefined
  external_ref?: (string | null) | undefined
  managing_account?: string | undefined
  network_service?: string | undefined
  type: string
}
type MemberJoiningRuleRequest = AllowMemberJoiningRuleRequest | DenyMemberJoiningRuleRequest
type AllowMemberJoiningRuleUpdatePartial = {
  capacity_max?: (number | null) | undefined
  capacity_min?: (number | null) | undefined
  consuming_account?: string | undefined
  external_ref?: (string | null) | undefined
  managing_account?: string | undefined
  type: string
}
type DenyMemberJoiningRuleUpdatePartial = {
  consuming_account?: string | undefined
  external_ref?: (string | null) | undefined
  managing_account?: string | undefined
  type: string
}
type MemberJoiningRuleUpdatePartial =
  | AllowMemberJoiningRuleUpdatePartial
  | DenyMemberJoiningRuleUpdatePartial
type AllowMemberJoiningRuleUpdate = {
  capacity_max?: (number | null) | undefined
  capacity_min?: (number | null) | undefined
  consuming_account?: string | undefined
  external_ref?: (string | null) | undefined
  managing_account?: string | undefined
  type: string
}
type DenyMemberJoiningRuleUpdate = {
  consuming_account?: string | undefined
  external_ref?: (string | null) | undefined
  managing_account?: string | undefined
  type: string
}
type MemberJoiningRuleUpdate = AllowMemberJoiningRuleUpdate | DenyMemberJoiningRuleUpdate
type MetroAreaNetwork = {
  id?: string | undefined
  metro_area?: string | undefined
  name?: string | undefined
  pops?: string[] | undefined
  service_provider?: string | undefined
}
type MetroArea = {
  display_name?: string | undefined
  facilities?: string[] | undefined
  iata_code?: string | undefined
  id?: string | undefined
  metro_area_networks?: string[] | undefined
  un_locode?: string | undefined
}
type RouteServerNetworkFeatureConfig = {
  as_set_v4?: (string | null) | undefined
  as_set_v6?: (string | null) | undefined
  asn?: bigint | undefined
  bgp_session_type?: 'active' | 'passive' | undefined
  billing_account?: string | undefined
  consuming_account?: string | undefined
  contract_ref?: (string | null) | undefined
  external_ref?: (string | null) | undefined
  id?: string | undefined
  insert_ixp_asn?: boolean | undefined
  ip?: string | undefined
  managing_account?: string | undefined
  max_prefix_v4?: (number | null) | undefined
  max_prefix_v6?: (number | null) | undefined
  network_feature?: string | undefined
  network_service_config?: string | undefined
  password?: string | undefined
  purchase_order?: string | undefined
  role_assignments?: string[] | undefined
  session_mode?: 'public' | 'collector' | undefined
  state?:
    | 'requested'
    | 'allocated'
    | 'testing'
    | 'production'
    | 'production_change_pending'
    | 'decommission_requested'
    | 'decommissioned'
    | 'archived'
    | 'error'
    | 'operator'
    | 'scheduled'
    | undefined
  status?: Status[] | undefined
  type: string
}
type NetworkFeatureConfig = RouteServerNetworkFeatureConfig
type RouteServerNetworkFeatureConfigRequest = {
  as_set_v4?: (string | null) | undefined
  as_set_v6?: (string | null) | undefined
  asn?: bigint | undefined
  bgp_session_type?: 'active' | 'passive' | undefined
  billing_account?: string | undefined
  consuming_account?: string | undefined
  contract_ref?: (string | null) | undefined
  external_ref?: (string | null) | undefined
  insert_ixp_asn?: boolean | undefined
  ip?: string | undefined
  managing_account?: string | undefined
  max_prefix_v4?: (number | null) | undefined
  max_prefix_v6?: (number | null) | undefined
  network_feature?: string | undefined
  network_service_config?: string | undefined
  password?: string | undefined
  purchase_order?: string | undefined
  role_assignments?: string[] | undefined
  session_mode?: 'public' | 'collector' | undefined
  type: string
}
type NetworkFeatureConfigRequest = RouteServerNetworkFeatureConfigRequest
type RouteServerNetworkFeatureConfigUpdatePartial = {
  as_set_v4?: (string | null) | undefined
  as_set_v6?: (string | null) | undefined
  asn?: bigint | undefined
  bgp_session_type?: 'active' | 'passive' | undefined
  consuming_account?: string | undefined
  external_ref?: (string | null) | undefined
  insert_ixp_asn?: boolean | undefined
  ip?: string | undefined
  managing_account?: string | undefined
  max_prefix_v4?: (number | null) | undefined
  max_prefix_v6?: (number | null) | undefined
  password?: string | undefined
  session_mode?: 'public' | 'collector' | undefined
  type: string
}
type NetworkFeatureConfigUpdatePartial = RouteServerNetworkFeatureConfigUpdatePartial
type RouteServerNetworkFeatureConfigUpdate = {
  as_set_v4?: (string | null) | undefined
  as_set_v6?: (string | null) | undefined
  asn?: bigint | undefined
  bgp_session_type?: 'active' | 'passive' | undefined
  consuming_account?: string | undefined
  external_ref?: (string | null) | undefined
  insert_ixp_asn?: boolean | undefined
  ip?: string | undefined
  managing_account?: string | undefined
  max_prefix_v4?: (number | null) | undefined
  max_prefix_v6?: (number | null) | undefined
  password?: string | undefined
  session_mode?: 'public' | 'collector' | undefined
  type: string
}
type NetworkFeatureConfigUpdate = RouteServerNetworkFeatureConfigUpdate
type IXPSpecificFeatureFlag = { description?: string | undefined; name?: string | undefined }
type RouteServerNetworkFeature = {
  address_families?: ('af_inet' | 'af_inet6')[] | undefined
  asn?: number | undefined
  available_bgp_session_types?: ('active' | 'passive')[] | undefined
  flags?: IXPSpecificFeatureFlag[] | undefined
  fqdn?: string | undefined
  id?: string | undefined
  ip_v4?: string | undefined
  ip_v6?: string | undefined
  looking_glass_url?: string | undefined
  name?: string | undefined
  network_service?: string | undefined
  nfc_required_contact_roles?: string[] | undefined
  required?: boolean | undefined
  session_mode?: 'public' | 'collector' | undefined
  type: string
}
type NetworkFeature = RouteServerNetworkFeature
type VLanConfigDot1Q = {
  vlan?: number | undefined
  vlan_ethertype?: '0x8100' | '0x88a8' | '0x9100' | undefined
  vlan_type: string
}
type VLanConfigQinQ = {
  inner_vlan?: number | undefined
  outer_vlan?: number | undefined
  outer_vlan_ethertype?: '0x8100' | '0x88a8' | '0x9100' | undefined
  vlan_type: string
}
type VLanConfigPort = { vlan_type: string }
type VlanConfig = VLanConfigDot1Q | VLanConfigQinQ | VLanConfigPort
type ExchangeLanNetworkServiceConfig = {
  asns?: bigint[] | undefined
  billing_account?: string | undefined
  capacity?: (number | null) | undefined
  charged_until?: string | undefined
  connection?: string | undefined
  consuming_account?: string | undefined
  contract_ref?: (string | null) | undefined
  decommission_at?: string | undefined
  external_ref?: (string | null) | undefined
  id?: string | undefined
  ips?: string[] | undefined
  listed?: boolean | undefined
  macs?: string[] | undefined
  managing_account?: string | undefined
  network_feature_configs?: string[] | undefined
  network_service?: string | undefined
  product_offering?: string | undefined
  purchase_order?: string | undefined
  role_assignments?: string[] | undefined
  state?:
    | 'requested'
    | 'allocated'
    | 'testing'
    | 'production'
    | 'production_change_pending'
    | 'decommission_requested'
    | 'decommissioned'
    | 'archived'
    | 'error'
    | 'operator'
    | 'scheduled'
    | undefined
  status?: Status[] | undefined
  type: string
  vlan_config?: VlanConfig | undefined
}
type P2PNetworkServiceConfig = {
  billing_account?: string | undefined
  capacity?: (number | null) | undefined
  charged_until?: string | undefined
  connection?: string | undefined
  consuming_account?: string | undefined
  contract_ref?: (string | null) | undefined
  decommission_at?: string | undefined
  external_ref?: (string | null) | undefined
  id?: string | undefined
  managing_account?: string | undefined
  network_feature_configs?: string[] | undefined
  network_service?: string | undefined
  purchase_order?: string | undefined
  role_assignments?: string[] | undefined
  state?:
    | 'requested'
    | 'allocated'
    | 'testing'
    | 'production'
    | 'production_change_pending'
    | 'decommission_requested'
    | 'decommissioned'
    | 'archived'
    | 'error'
    | 'operator'
    | 'scheduled'
    | undefined
  status?: Status[] | undefined
  type: string
  vlan_config?: VlanConfig | undefined
}
type P2MPNetworkServiceConfig = {
  billing_account?: string | undefined
  capacity?: (number | null) | undefined
  charged_until?: string | undefined
  connection?: string | undefined
  consuming_account?: string | undefined
  contract_ref?: (string | null) | undefined
  decommission_at?: string | undefined
  external_ref?: (string | null) | undefined
  id?: string | undefined
  managing_account?: string | undefined
  network_feature_configs?: string[] | undefined
  network_service?: string | undefined
  purchase_order?: string | undefined
  role?: 'root' | 'leaf' | undefined
  role_assignments?: string[] | undefined
  state?:
    | 'requested'
    | 'allocated'
    | 'testing'
    | 'production'
    | 'production_change_pending'
    | 'decommission_requested'
    | 'decommissioned'
    | 'archived'
    | 'error'
    | 'operator'
    | 'scheduled'
    | undefined
  status?: Status[] | undefined
  type: string
  vlan_config?: VlanConfig | undefined
}
type MP2MPNetworkServiceConfig = {
  billing_account?: string | undefined
  capacity?: (number | null) | undefined
  charged_until?: string | undefined
  connection?: string | undefined
  consuming_account?: string | undefined
  contract_ref?: (string | null) | undefined
  decommission_at?: string | undefined
  external_ref?: (string | null) | undefined
  id?: string | undefined
  macs?: string[] | undefined
  managing_account?: string | undefined
  network_feature_configs?: string[] | undefined
  network_service?: string | undefined
  purchase_order?: string | undefined
  role_assignments?: string[] | undefined
  state?:
    | 'requested'
    | 'allocated'
    | 'testing'
    | 'production'
    | 'production_change_pending'
    | 'decommission_requested'
    | 'decommissioned'
    | 'archived'
    | 'error'
    | 'operator'
    | 'scheduled'
    | undefined
  status?: Status[] | undefined
  type: string
  vlan_config?: VlanConfig | undefined
}
type CloudNetworkServiceConfig = {
  billing_account?: string | undefined
  charged_until?: string | undefined
  cloud_vlan?: (number | null) | undefined
  connection?: string | undefined
  consuming_account?: string | undefined
  contract_ref?: (string | null) | undefined
  decommission_at?: string | undefined
  external_ref?: (string | null) | undefined
  handover?: number | undefined
  id?: string | undefined
  managing_account?: string | undefined
  network_feature_configs?: string[] | undefined
  network_service?: string | undefined
  purchase_order?: string | undefined
  role_assignments?: string[] | undefined
  state?:
    | 'requested'
    | 'allocated'
    | 'testing'
    | 'production'
    | 'production_change_pending'
    | 'decommission_requested'
    | 'decommissioned'
    | 'archived'
    | 'error'
    | 'operator'
    | 'scheduled'
    | undefined
  status?: Status[] | undefined
  type: string
  vlan_config?: VlanConfig | undefined
}
type NetworkServiceConfig =
  | ExchangeLanNetworkServiceConfig
  | P2PNetworkServiceConfig
  | P2MPNetworkServiceConfig
  | MP2MPNetworkServiceConfig
  | CloudNetworkServiceConfig
type ExchangeLanNetworkServiceConfigRequest = {
  asns?: bigint[] | undefined
  billing_account?: string | undefined
  capacity?: (number | null) | undefined
  connection?: string | undefined
  consuming_account?: string | undefined
  contract_ref?: (string | null) | undefined
  external_ref?: (string | null) | undefined
  ips?: string[] | undefined
  listed?: boolean | undefined
  macs?: string[] | undefined
  managing_account?: string | undefined
  network_feature_configs?: string[] | undefined
  network_service?: string | undefined
  product_offering?: string | undefined
  purchase_order?: string | undefined
  role_assignments?: string[] | undefined
  type: string
  vlan_config?: VlanConfig | undefined
}
type P2PNetworkServiceConfigRequest = {
  billing_account?: string | undefined
  capacity?: (number | null) | undefined
  connection?: string | undefined
  consuming_account?: string | undefined
  contract_ref?: (string | null) | undefined
  external_ref?: (string | null) | undefined
  managing_account?: string | undefined
  network_feature_configs?: string[] | undefined
  network_service?: string | undefined
  purchase_order?: string | undefined
  role_assignments?: string[] | undefined
  type: string
  vlan_config?: VlanConfig | undefined
}
type P2MPNetworkServiceConfigRequest = {
  billing_account?: string | undefined
  capacity?: (number | null) | undefined
  connection?: string | undefined
  consuming_account?: string | undefined
  contract_ref?: (string | null) | undefined
  external_ref?: (string | null) | undefined
  managing_account?: string | undefined
  network_feature_configs?: string[] | undefined
  network_service?: string | undefined
  purchase_order?: string | undefined
  role?: 'root' | 'leaf' | undefined
  role_assignments?: string[] | undefined
  type: string
  vlan_config?: VlanConfig | undefined
}
type MP2MPNetworkServiceConfigRequest = {
  billing_account?: string | undefined
  capacity?: (number | null) | undefined
  connection?: string | undefined
  consuming_account?: string | undefined
  contract_ref?: (string | null) | undefined
  external_ref?: (string | null) | undefined
  macs?: string[] | undefined
  managing_account?: string | undefined
  network_feature_configs?: string[] | undefined
  network_service?: string | undefined
  purchase_order?: string | undefined
  role_assignments?: string[] | undefined
  type: string
  vlan_config?: VlanConfig | undefined
}
type CloudNetworkServiceConfigRequest = {
  billing_account?: string | undefined
  cloud_vlan?: (number | null) | undefined
  connection?: string | undefined
  consuming_account?: string | undefined
  contract_ref?: (string | null) | undefined
  external_ref?: (string | null) | undefined
  handover?: number | undefined
  managing_account?: string | undefined
  network_feature_configs?: string[] | undefined
  network_service?: string | undefined
  purchase_order?: string | undefined
  role_assignments?: string[] | undefined
  type: string
  vlan_config?: VlanConfig | undefined
}
type NetworkServiceConfigRequest =
  | ExchangeLanNetworkServiceConfigRequest
  | P2PNetworkServiceConfigRequest
  | P2MPNetworkServiceConfigRequest
  | MP2MPNetworkServiceConfigRequest
  | CloudNetworkServiceConfigRequest
type CancellationRequest = { decommission_at?: string | undefined }
type ExchangeLanNetworkServiceConfigUpdatePartial = {
  asns?: bigint[] | undefined
  billing_account?: string | undefined
  capacity?: (number | null) | undefined
  connection?: string | undefined
  consuming_account?: string | undefined
  contract_ref?: (string | null) | undefined
  external_ref?: (string | null) | undefined
  ips?: string[] | undefined
  listed?: boolean | undefined
  macs?: string[] | undefined
  managing_account?: string | undefined
  network_feature_configs?: string[] | undefined
  purchase_order?: string | undefined
  role_assignments?: string[] | undefined
  type: string
  vlan_config?: VlanConfig | undefined
}
type P2PNetworkServiceConfigUpdatePartial = {
  billing_account?: string | undefined
  capacity?: (number | null) | undefined
  connection?: string | undefined
  consuming_account?: string | undefined
  contract_ref?: (string | null) | undefined
  external_ref?: (string | null) | undefined
  managing_account?: string | undefined
  network_feature_configs?: string[] | undefined
  purchase_order?: string | undefined
  role_assignments?: string[] | undefined
  type: string
  vlan_config?: VlanConfig | undefined
}
type P2MPNetworkServiceConfigRequestPartial = {
  billing_account?: string | undefined
  capacity?: (number | null) | undefined
  connection?: string | undefined
  consuming_account?: string | undefined
  contract_ref?: (string | null) | undefined
  external_ref?: (string | null) | undefined
  managing_account?: string | undefined
  network_feature_configs?: string[] | undefined
  network_service?: string | undefined
  purchase_order?: string | undefined
  role?: 'root' | 'leaf' | undefined
  role_assignments?: string[] | undefined
  type: string
  vlan_config?: VlanConfig | undefined
}
type MP2MPNetworkServiceConfigRequestPartial = {
  billing_account?: string | undefined
  capacity?: (number | null) | undefined
  connection?: string | undefined
  consuming_account?: string | undefined
  contract_ref?: (string | null) | undefined
  external_ref?: (string | null) | undefined
  macs?: string[] | undefined
  managing_account?: string | undefined
  network_feature_configs?: string[] | undefined
  network_service?: string | undefined
  purchase_order?: string | undefined
  role_assignments?: string[] | undefined
  type: string
  vlan_config?: VlanConfig | undefined
}
type CloudNetworkServiceConfigUpdatePartial = {
  billing_account?: string | undefined
  cloud_vlan?: (number | null) | undefined
  connection?: string | undefined
  consuming_account?: string | undefined
  contract_ref?: (string | null) | undefined
  external_ref?: (string | null) | undefined
  handover?: number | undefined
  managing_account?: string | undefined
  network_feature_configs?: string[] | undefined
  purchase_order?: string | undefined
  role_assignments?: string[] | undefined
  type: string
  vlan_config?: VlanConfig | undefined
}
type NetworkServiceConfigUpdatePartial =
  | ExchangeLanNetworkServiceConfigUpdatePartial
  | P2PNetworkServiceConfigUpdatePartial
  | P2MPNetworkServiceConfigRequestPartial
  | MP2MPNetworkServiceConfigRequestPartial
  | CloudNetworkServiceConfigUpdatePartial
type ExchangeLanNetworkServiceConfigUpdate = {
  asns?: bigint[] | undefined
  billing_account?: string | undefined
  capacity?: (number | null) | undefined
  connection?: string | undefined
  consuming_account?: string | undefined
  contract_ref?: (string | null) | undefined
  external_ref?: (string | null) | undefined
  ips?: string[] | undefined
  listed?: boolean | undefined
  macs?: string[] | undefined
  managing_account?: string | undefined
  network_feature_configs?: string[] | undefined
  purchase_order?: string | undefined
  role_assignments?: string[] | undefined
  type: string
  vlan_config?: VlanConfig | undefined
}
type P2PNetworkServiceConfigUpdate = {
  billing_account?: string | undefined
  capacity?: (number | null) | undefined
  connection?: string | undefined
  consuming_account?: string | undefined
  contract_ref?: (string | null) | undefined
  external_ref?: (string | null) | undefined
  managing_account?: string | undefined
  network_feature_configs?: string[] | undefined
  purchase_order?: string | undefined
  role_assignments?: string[] | undefined
  type: string
  vlan_config?: VlanConfig | undefined
}
type CloudNetworkServiceConfigUpdate = {
  billing_account?: string | undefined
  cloud_vlan?: (number | null) | undefined
  connection?: string | undefined
  consuming_account?: string | undefined
  contract_ref?: (string | null) | undefined
  external_ref?: (string | null) | undefined
  handover?: number | undefined
  managing_account?: string | undefined
  network_feature_configs?: string[] | undefined
  purchase_order?: string | undefined
  role_assignments?: string[] | undefined
  type: string
  vlan_config?: VlanConfig | undefined
}
type NetworkServiceConfigUpdate =
  | ExchangeLanNetworkServiceConfigUpdate
  | P2PNetworkServiceConfigUpdate
  | P2MPNetworkServiceConfigRequest
  | MP2MPNetworkServiceConfigRequest
  | CloudNetworkServiceConfigUpdate
type CancellationPolicy = {
  charged_until?: string | undefined
  decommission_at?: string | undefined
}
type ExchangeLanNetworkService = {
  consuming_account?: string | undefined
  external_ref?: (string | null) | undefined
  id?: string | undefined
  ixfdb_ixid?: (number | null) | undefined
  managing_account?: string | undefined
  metro_area_network?: string | undefined
  name?: string | undefined
  network_features?: string[] | undefined
  nsc_required_contact_roles?: string[] | undefined
  peeringdb_ixid?: (number | null) | undefined
  product_offering?: string | undefined
  state?:
    | 'requested'
    | 'allocated'
    | 'testing'
    | 'production'
    | 'production_change_pending'
    | 'decommission_requested'
    | 'decommissioned'
    | 'archived'
    | 'error'
    | 'operator'
    | 'scheduled'
    | undefined
  status?: Status[] | undefined
  subnet_v4?: string | undefined
  subnet_v6?: string | undefined
  type: string
}
type P2PNetworkService = {
  billing_account?: string | undefined
  capacity?: (number | null) | undefined
  charged_until?: string | undefined
  consuming_account?: string | undefined
  contract_ref?: (string | null) | undefined
  decommission_at?: string | undefined
  external_ref?: (string | null) | undefined
  id?: string | undefined
  joining_member_account?: string | undefined
  managing_account?: string | undefined
  nsc_required_contact_roles?: string[] | undefined
  product_offering?: string | undefined
  purchase_order?: string | undefined
  state?:
    | 'requested'
    | 'allocated'
    | 'testing'
    | 'production'
    | 'production_change_pending'
    | 'decommission_requested'
    | 'decommissioned'
    | 'archived'
    | 'error'
    | 'operator'
    | 'scheduled'
    | undefined
  status?: Status[] | undefined
  type: string
}
type P2MPNetworkService = {
  billing_account?: string | undefined
  charged_until?: string | undefined
  consuming_account?: string | undefined
  contract_ref?: (string | null) | undefined
  decommission_at?: string | undefined
  external_ref?: (string | null) | undefined
  id?: string | undefined
  managing_account?: string | undefined
  member_joining_rules?: string[] | undefined
  name?: string | undefined
  network_features?: string[] | undefined
  nsc_required_contact_roles?: string[] | undefined
  product_offering?: string | undefined
  public?: boolean | undefined
  purchase_order?: string | undefined
  state?:
    | 'requested'
    | 'allocated'
    | 'testing'
    | 'production'
    | 'production_change_pending'
    | 'decommission_requested'
    | 'decommissioned'
    | 'archived'
    | 'error'
    | 'operator'
    | 'scheduled'
    | undefined
  status?: Status[] | undefined
  type: string
}
type MP2MPNetworkService = {
  billing_account?: string | undefined
  charged_until?: string | undefined
  consuming_account?: string | undefined
  contract_ref?: (string | null) | undefined
  decommission_at?: string | undefined
  external_ref?: (string | null) | undefined
  id?: string | undefined
  managing_account?: string | undefined
  member_joining_rules?: string[] | undefined
  name?: string | undefined
  network_features?: string[] | undefined
  nsc_required_contact_roles?: string[] | undefined
  product_offering?: string | undefined
  public?: boolean | undefined
  purchase_order?: string | undefined
  state?:
    | 'requested'
    | 'allocated'
    | 'testing'
    | 'production'
    | 'production_change_pending'
    | 'decommission_requested'
    | 'decommissioned'
    | 'archived'
    | 'error'
    | 'operator'
    | 'scheduled'
    | undefined
  status?: Status[] | undefined
  type: string
}
type CloudNetworkService = {
  billing_account?: string | undefined
  capacity?: (number | null) | undefined
  charged_until?: string | undefined
  cloud_key?: string | undefined
  consuming_account?: string | undefined
  contract_ref?: (string | null) | undefined
  decommission_at?: string | undefined
  diversity?: number | undefined
  external_ref?: (string | null) | undefined
  id?: string | undefined
  managing_account?: string | undefined
  nsc_required_contact_roles?: string[] | undefined
  product_offering?: string | undefined
  provider_ref?: (string | null) | undefined
  purchase_order?: string | undefined
  state?:
    | 'requested'
    | 'allocated'
    | 'testing'
    | 'production'
    | 'production_change_pending'
    | 'decommission_requested'
    | 'decommissioned'
    | 'archived'
    | 'error'
    | 'operator'
    | 'scheduled'
    | undefined
  status?: Status[] | undefined
  type: string
}
type NetworkService =
  | ExchangeLanNetworkService
  | P2PNetworkService
  | P2MPNetworkService
  | MP2MPNetworkService
  | CloudNetworkService
type P2PNetworkServiceRequest = {
  billing_account?: string | undefined
  consuming_account?: string | undefined
  contract_ref?: (string | null) | undefined
  external_ref?: (string | null) | undefined
  joining_member_account?: string | undefined
  managing_account?: string | undefined
  product_offering?: string | undefined
  purchase_order?: string | undefined
  type: string
}
type P2MPNetworkServiceRequest = {
  billing_account?: string | undefined
  consuming_account?: string | undefined
  contract_ref?: (string | null) | undefined
  external_ref?: (string | null) | undefined
  managing_account?: string | undefined
  name?: string | undefined
  product_offering?: string | undefined
  public?: boolean | undefined
  purchase_order?: string | undefined
  type: string
}
type MP2MPNetworkServiceRequest = {
  billing_account?: string | undefined
  consuming_account?: string | undefined
  contract_ref?: (string | null) | undefined
  external_ref?: (string | null) | undefined
  managing_account?: string | undefined
  name?: string | undefined
  product_offering?: string | undefined
  public?: boolean | undefined
  purchase_order?: string | undefined
  type: string
}
type CloudNetworkServiceRequest = {
  billing_account?: string | undefined
  capacity?: (number | null) | undefined
  cloud_key?: string | undefined
  consuming_account?: string | undefined
  contract_ref?: (string | null) | undefined
  external_ref?: (string | null) | undefined
  managing_account?: string | undefined
  product_offering?: string | undefined
  purchase_order?: string | undefined
  type: string
}
type NetworkServiceRequest =
  | P2PNetworkServiceRequest
  | P2MPNetworkServiceRequest
  | MP2MPNetworkServiceRequest
  | CloudNetworkServiceRequest
type P2PNetworkServiceRequestPartial = {
  billing_account?: string | undefined
  consuming_account?: string | undefined
  contract_ref?: (string | null) | undefined
  external_ref?: (string | null) | undefined
  joining_member_account?: string | undefined
  managing_account?: string | undefined
  product_offering?: string | undefined
  purchase_order?: string | undefined
  type: string
}
type P2MPNetworkServiceRequestPartial = {
  billing_account?: string | undefined
  consuming_account?: string | undefined
  contract_ref?: (string | null) | undefined
  external_ref?: (string | null) | undefined
  managing_account?: string | undefined
  name?: string | undefined
  product_offering?: string | undefined
  public?: boolean | undefined
  purchase_order?: string | undefined
  type: string
}
type MP2MPNetworkServiceRequestPartial = {
  billing_account?: string | undefined
  consuming_account?: string | undefined
  contract_ref?: (string | null) | undefined
  external_ref?: (string | null) | undefined
  managing_account?: string | undefined
  name?: string | undefined
  product_offering?: string | undefined
  public?: boolean | undefined
  purchase_order?: string | undefined
  type: string
}
type CloudNetworkServiceRequestPartial = {
  billing_account?: string | undefined
  capacity?: (number | null) | undefined
  cloud_key?: string | undefined
  consuming_account?: string | undefined
  contract_ref?: (string | null) | undefined
  external_ref?: (string | null) | undefined
  managing_account?: string | undefined
  product_offering?: string | undefined
  purchase_order?: string | undefined
  type: string
}
type NetworkServiceRequestPartial =
  | P2PNetworkServiceRequestPartial
  | P2MPNetworkServiceRequestPartial
  | MP2MPNetworkServiceRequestPartial
  | CloudNetworkServiceRequestPartial
type NetworkServiceChangeRequest = {
  capacity?: (number | null) | undefined
  product_offering?: string | undefined
}
type PointOfPresence = {
  devices?: string[] | undefined
  facility?: string | undefined
  id?: string | undefined
  metro_area_network?: string | undefined
  name?: string | undefined
}
type Port = {
  billing_account?: string | undefined
  connection?: (string | null) | undefined
  consuming_account?: string | undefined
  contract_ref?: (string | null) | undefined
  device?: string | undefined
  external_ref?: (string | null) | undefined
  id?: string | undefined
  managing_account?: string | undefined
  media_type?: string | undefined
  name?: string | undefined
  pop?: string | undefined
  purchase_order?: string | undefined
  role_assignments?: string[] | undefined
  speed?: (number | null) | undefined
  state?:
    | 'requested'
    | 'allocated'
    | 'testing'
    | 'production'
    | 'production_change_pending'
    | 'decommission_requested'
    | 'decommissioned'
    | 'archived'
    | 'error'
    | 'operator'
    | 'scheduled'
    | undefined
  status?: Status[] | undefined
}
type ExchangeLanNetworkProductOfferingPartial = {
  bandwidth_max?: (number | null) | undefined
  bandwidth_min?: (number | null) | undefined
  display_name?: string | undefined
  downgrade_allowed?: boolean | undefined
  exchange_lan_network_service?: string | undefined
  handover_metro_area?: string | undefined
  handover_metro_area_network?: string | undefined
  id?: string | undefined
  name?: string | undefined
  physical_port_speed?: (number | null) | undefined
  provider_vlans?: 'single' | 'multi' | undefined
  resource_type?: 'connection' | 'demarc' | 'network_service' | 'network_service_config' | undefined
  service_metro_area?: string | undefined
  service_metro_area_network?: string | undefined
  service_provider?: string | undefined
  type: string
  upgrade_allowed?: boolean | undefined
}
type P2PNetworkProductOfferingPartial = {
  bandwidth_max?: (number | null) | undefined
  bandwidth_min?: (number | null) | undefined
  display_name?: string | undefined
  downgrade_allowed?: boolean | undefined
  handover_metro_area?: string | undefined
  handover_metro_area_network?: string | undefined
  id?: string | undefined
  name?: string | undefined
  physical_port_speed?: (number | null) | undefined
  provider_vlans?: 'single' | 'multi' | undefined
  resource_type?: 'connection' | 'demarc' | 'network_service' | 'network_service_config' | undefined
  service_metro_area?: string | undefined
  service_metro_area_network?: string | undefined
  service_provider?: string | undefined
  type: string
  upgrade_allowed?: boolean | undefined
}
type MP2MPNetworkProductOfferingPartial = {
  bandwidth_max?: (number | null) | undefined
  bandwidth_min?: (number | null) | undefined
  display_name?: string | undefined
  downgrade_allowed?: boolean | undefined
  handover_metro_area?: string | undefined
  handover_metro_area_network?: string | undefined
  id?: string | undefined
  name?: string | undefined
  physical_port_speed?: (number | null) | undefined
  provider_vlans?: 'single' | 'multi' | undefined
  resource_type?: 'connection' | 'demarc' | 'network_service' | 'network_service_config' | undefined
  service_metro_area?: string | undefined
  service_metro_area_network?: string | undefined
  service_provider?: string | undefined
  type: string
  upgrade_allowed?: boolean | undefined
}
type P2MPNetworkProductOfferingPartial = {
  bandwidth_max?: (number | null) | undefined
  bandwidth_min?: (number | null) | undefined
  display_name?: string | undefined
  downgrade_allowed?: boolean | undefined
  handover_metro_area?: string | undefined
  handover_metro_area_network?: string | undefined
  id?: string | undefined
  name?: string | undefined
  physical_port_speed?: (number | null) | undefined
  provider_vlans?: 'single' | 'multi' | undefined
  resource_type?: 'connection' | 'demarc' | 'network_service' | 'network_service_config' | undefined
  service_metro_area?: string | undefined
  service_metro_area_network?: string | undefined
  service_provider?: string | undefined
  type: string
  upgrade_allowed?: boolean | undefined
}
type CloudNetworkProductOfferingPartial = {
  bandwidth_max?: (number | null) | undefined
  bandwidth_min?: (number | null) | undefined
  delivery_method?: 'dedicated' | 'shared' | undefined
  display_name?: string | undefined
  diversity?: number | undefined
  downgrade_allowed?: boolean | undefined
  handover_metro_area?: string | undefined
  handover_metro_area_network?: string | undefined
  id?: string | undefined
  name?: string | undefined
  physical_port_speed?: (number | null) | undefined
  provider_vlans?: 'single' | 'multi' | undefined
  resource_type?: 'connection' | 'demarc' | 'network_service' | 'network_service_config' | undefined
  service_metro_area?: string | undefined
  service_metro_area_network?: string | undefined
  service_provider?: string | undefined
  service_provider_pop?: (string | null) | undefined
  service_provider_region?: (string | null) | undefined
  service_provider_workflow?: 'exchange_first' | 'provider_first' | undefined
  type: string
  upgrade_allowed?: boolean | undefined
}
type ProductOfferingPartial =
  | ExchangeLanNetworkProductOfferingPartial
  | P2PNetworkProductOfferingPartial
  | MP2MPNetworkProductOfferingPartial
  | P2MPNetworkProductOfferingPartial
  | CloudNetworkProductOfferingPartial
type ExchangeLanNetworkProductOffering = {
  bandwidth_max?: (number | null) | undefined
  bandwidth_min?: (number | null) | undefined
  display_name?: string | undefined
  downgrade_allowed?: boolean | undefined
  exchange_lan_network_service?: string | undefined
  handover_metro_area?: string | undefined
  handover_metro_area_network?: string | undefined
  id?: string | undefined
  name?: string | undefined
  physical_port_speed?: (number | null) | undefined
  provider_vlans?: 'single' | 'multi' | undefined
  resource_type?: 'connection' | 'demarc' | 'network_service' | 'network_service_config' | undefined
  service_metro_area?: string | undefined
  service_metro_area_network?: string | undefined
  service_provider?: string | undefined
  type: string
  upgrade_allowed?: boolean | undefined
}
type P2PNetworkProductOffering = {
  bandwidth_max?: (number | null) | undefined
  bandwidth_min?: (number | null) | undefined
  display_name?: string | undefined
  downgrade_allowed?: boolean | undefined
  handover_metro_area?: string | undefined
  handover_metro_area_network?: string | undefined
  id?: string | undefined
  name?: string | undefined
  physical_port_speed?: (number | null) | undefined
  provider_vlans?: 'single' | 'multi' | undefined
  resource_type?: 'connection' | 'demarc' | 'network_service' | 'network_service_config' | undefined
  service_metro_area?: string | undefined
  service_metro_area_network?: string | undefined
  service_provider?: string | undefined
  type: string
  upgrade_allowed?: boolean | undefined
}
type MP2MPNetworkProductOffering = {
  bandwidth_max?: (number | null) | undefined
  bandwidth_min?: (number | null) | undefined
  display_name?: string | undefined
  downgrade_allowed?: boolean | undefined
  handover_metro_area?: string | undefined
  handover_metro_area_network?: string | undefined
  id?: string | undefined
  name?: string | undefined
  physical_port_speed?: (number | null) | undefined
  provider_vlans?: 'single' | 'multi' | undefined
  resource_type?: 'connection' | 'demarc' | 'network_service' | 'network_service_config' | undefined
  service_metro_area?: string | undefined
  service_metro_area_network?: string | undefined
  service_provider?: string | undefined
  type: string
  upgrade_allowed?: boolean | undefined
}
type P2MPNetworkProductOffering = {
  bandwidth_max?: (number | null) | undefined
  bandwidth_min?: (number | null) | undefined
  display_name?: string | undefined
  downgrade_allowed?: boolean | undefined
  handover_metro_area?: string | undefined
  handover_metro_area_network?: string | undefined
  id?: string | undefined
  name?: string | undefined
  physical_port_speed?: (number | null) | undefined
  provider_vlans?: 'single' | 'multi' | undefined
  resource_type?: 'connection' | 'demarc' | 'network_service' | 'network_service_config' | undefined
  service_metro_area?: string | undefined
  service_metro_area_network?: string | undefined
  service_provider?: string | undefined
  type: string
  upgrade_allowed?: boolean | undefined
}
type CloudNetworkProductOffering = {
  bandwidth_max?: (number | null) | undefined
  bandwidth_min?: (number | null) | undefined
  delivery_method?: 'dedicated' | 'shared' | undefined
  display_name?: string | undefined
  diversity?: number | undefined
  downgrade_allowed?: boolean | undefined
  handover_metro_area?: string | undefined
  handover_metro_area_network?: string | undefined
  id?: string | undefined
  name?: string | undefined
  physical_port_speed?: (number | null) | undefined
  provider_vlans?: 'single' | 'multi' | undefined
  resource_type?: 'connection' | 'demarc' | 'network_service' | 'network_service_config' | undefined
  service_metro_area?: string | undefined
  service_metro_area_network?: string | undefined
  service_provider?: string | undefined
  service_provider_pop?: (string | null) | undefined
  service_provider_region?: (string | null) | undefined
  service_provider_workflow?: 'exchange_first' | 'provider_first' | undefined
  type: string
  upgrade_allowed?: boolean | undefined
}
type ProductOffering =
  | ExchangeLanNetworkProductOffering
  | P2PNetworkProductOffering
  | MP2MPNetworkProductOffering
  | P2MPNetworkProductOffering
  | CloudNetworkProductOffering
type RoleAssignment = {
  contact?: string | undefined
  id?: string | undefined
  role?: string | undefined
}
type RoleAssignmentRequest = { contact?: string | undefined; role?: string | undefined }
type Role = {
  id?: string | undefined
  name?: string | undefined
  required_fields?: string[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/accounts': {
      $get:
        | {
            input: {
              query: {
                id?: string[] | undefined
                state?: string | undefined
                state__is_not?: string | undefined
                managing_account?: string | undefined
                billable?: number | undefined
                external_ref?: string | undefined
                name?: string | undefined
              }
            }
            output: Account[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                state?: string | undefined
                state__is_not?: string | undefined
                managing_account?: string | undefined
                billable?: number | undefined
                external_ref?: string | undefined
                name?: string | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/validation-error.html' | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                state?: string | undefined
                state__is_not?: string | undefined
                managing_account?: string | undefined
                billable?: number | undefined
                external_ref?: string | undefined
                name?: string | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                state?: string | undefined
                state__is_not?: string | undefined
                managing_account?: string | undefined
                billable?: number | undefined
                external_ref?: string | undefined
                name?: string | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
      $post:
        | { input: { json: AccountRequest }; output: Account; outputFormat: 'json'; status: 201 }
        | {
            input: { json: AccountRequest }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/validation-error.html' | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AccountRequest }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: AccountRequest }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/accounts/:id': {
      $delete:
        | { input: { param: { id: string } }; output: Account; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/not-found.html' | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $get:
        | { input: { param: { id: string } }; output: Account; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/not-found.html' | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: AccountUpdatePartial }
            output: Account
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: string } } & { json: AccountUpdatePartial }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/validation-error.html' | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: AccountUpdatePartial }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: AccountUpdatePartial }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: AccountUpdatePartial }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/not-found.html' | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & { json: AccountUpdate }
            output: Account
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: string } } & { json: AccountUpdate }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/validation-error.html' | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: AccountUpdate }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: AccountUpdate }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: AccountUpdate }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/not-found.html' | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/auth/refresh': {
      $post:
        | {
            input: { json: RefreshTokenRequest }
            output: AuthToken
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: RefreshTokenRequest }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/validation-error.html' | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: RefreshTokenRequest }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | 'https://errors.ix-api.net/v2/not-authenticated.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/auth/token': {
      $post:
        | {
            input: { json: AuthTokenRequest }
            output: AuthToken
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: AuthTokenRequest }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/validation-error.html' | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AuthTokenRequest }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | 'https://errors.ix-api.net/v2/not-authenticated.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/connections': {
      $get:
        | {
            input: {
              query: {
                id?: string[] | undefined
                state?: string | undefined
                state__is_not?: string | undefined
                mode?: string | undefined
                mode__is_not?: string | undefined
                name?: string | undefined
                metro_area_network?: string | undefined
                pop?: string | undefined
                facility?: string | undefined
                external_ref?: string | undefined
              }
            }
            output: Connection[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                state?: string | undefined
                state__is_not?: string | undefined
                mode?: string | undefined
                mode__is_not?: string | undefined
                name?: string | undefined
                metro_area_network?: string | undefined
                pop?: string | undefined
                facility?: string | undefined
                external_ref?: string | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/validation-error.html' | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                state?: string | undefined
                state__is_not?: string | undefined
                mode?: string | undefined
                mode__is_not?: string | undefined
                name?: string | undefined
                metro_area_network?: string | undefined
                pop?: string | undefined
                facility?: string | undefined
                external_ref?: string | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                state?: string | undefined
                state__is_not?: string | undefined
                mode?: string | undefined
                mode__is_not?: string | undefined
                name?: string | undefined
                metro_area_network?: string | undefined
                pop?: string | undefined
                facility?: string | undefined
                external_ref?: string | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/connections/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: Connection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/not-found.html' | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/contacts': {
      $get:
        | {
            input: {
              query: {
                id?: string[] | undefined
                managing_account?: string | undefined
                consuming_account?: string | undefined
                external_ref?: string | undefined
              }
            }
            output: Contact[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                managing_account?: string | undefined
                consuming_account?: string | undefined
                external_ref?: string | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/validation-error.html' | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                managing_account?: string | undefined
                consuming_account?: string | undefined
                external_ref?: string | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                managing_account?: string | undefined
                consuming_account?: string | undefined
                external_ref?: string | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
      $post:
        | { input: { json: ContactRequest }; output: Contact; outputFormat: 'json'; status: 201 }
        | {
            input: { json: ContactRequest }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/validation-error.html' | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ContactRequest }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ContactRequest }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/contacts/:id': {
      $delete:
        | { input: { param: { id: string } }; output: Contact; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/unable-to-fulfill.html' | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/not-found.html' | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $get:
        | { input: { param: { id: string } }; output: Contact; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/not-found.html' | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: ContactRequestPartial }
            output: Contact
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: ContactRequestPartial }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/validation-error.html' | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: ContactRequestPartial }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: ContactRequestPartial }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: ContactRequestPartial }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/not-found.html' | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & { json: ContactRequest }
            output: Contact
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: ContactRequest }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/validation-error.html' | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: ContactRequest }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: ContactRequest }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: ContactRequest }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/not-found.html' | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/devices': {
      $get:
        | {
            input: {
              query: {
                id?: string[] | undefined
                name?: string | undefined
                capability_media_type?: string | undefined
                capability_speed?: number | undefined
                capability_speed__lt?: number | undefined
                capability_speed__lte?: number | undefined
                capability_speed__gt?: number | undefined
                capability_speed__gte?: number | undefined
                facility?: string | undefined
                pop?: string | undefined
                metro_area_network?: string | undefined
              }
            }
            output: Device[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                name?: string | undefined
                capability_media_type?: string | undefined
                capability_speed?: number | undefined
                capability_speed__lt?: number | undefined
                capability_speed__lte?: number | undefined
                capability_speed__gt?: number | undefined
                capability_speed__gte?: number | undefined
                facility?: string | undefined
                pop?: string | undefined
                metro_area_network?: string | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/validation-error.html' | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                name?: string | undefined
                capability_media_type?: string | undefined
                capability_speed?: number | undefined
                capability_speed__lt?: number | undefined
                capability_speed__lte?: number | undefined
                capability_speed__gt?: number | undefined
                capability_speed__gte?: number | undefined
                facility?: string | undefined
                pop?: string | undefined
                metro_area_network?: string | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                name?: string | undefined
                capability_media_type?: string | undefined
                capability_speed?: number | undefined
                capability_speed__lt?: number | undefined
                capability_speed__lte?: number | undefined
                capability_speed__gt?: number | undefined
                capability_speed__gte?: number | undefined
                facility?: string | undefined
                pop?: string | undefined
                metro_area_network?: string | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/devices/:id': {
      $get:
        | { input: { param: { id: string } }; output: Device; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/not-found.html' | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/facilities': {
      $get:
        | {
            input: {
              query: {
                id?: string[] | undefined
                capability_media_type?: string | undefined
                capability_speed?: number | undefined
                capability_speed__lt?: number | undefined
                capability_speed__lte?: number | undefined
                capability_speed__gt?: number | undefined
                capability_speed__gte?: number | undefined
                organisation_name?: string | undefined
                metro_area?: string | undefined
                metro_area_network?: string | undefined
                address_country?: string | undefined
                address_locality?: string | undefined
                postal_code?: string | undefined
              }
            }
            output: Facility[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                capability_media_type?: string | undefined
                capability_speed?: number | undefined
                capability_speed__lt?: number | undefined
                capability_speed__lte?: number | undefined
                capability_speed__gt?: number | undefined
                capability_speed__gte?: number | undefined
                organisation_name?: string | undefined
                metro_area?: string | undefined
                metro_area_network?: string | undefined
                address_country?: string | undefined
                address_locality?: string | undefined
                postal_code?: string | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/validation-error.html' | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                capability_media_type?: string | undefined
                capability_speed?: number | undefined
                capability_speed__lt?: number | undefined
                capability_speed__lte?: number | undefined
                capability_speed__gt?: number | undefined
                capability_speed__gte?: number | undefined
                organisation_name?: string | undefined
                metro_area?: string | undefined
                metro_area_network?: string | undefined
                address_country?: string | undefined
                address_locality?: string | undefined
                postal_code?: string | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                capability_media_type?: string | undefined
                capability_speed?: number | undefined
                capability_speed__lt?: number | undefined
                capability_speed__lte?: number | undefined
                capability_speed__gt?: number | undefined
                capability_speed__gte?: number | undefined
                organisation_name?: string | undefined
                metro_area?: string | undefined
                metro_area_network?: string | undefined
                address_country?: string | undefined
                address_locality?: string | undefined
                postal_code?: string | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/facilities/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: Facility[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/not-found.html' | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/health': { $get: { input: {}; output: HealthResponse; outputFormat: 'json'; status: 200 } }
  } & {
    '/implementation': {
      $get: { input: {}; output: ImplementationResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/ips': {
      $get:
        | {
            input: {
              query: {
                id?: string[] | undefined
                managing_account?: string | undefined
                consuming_account?: string | undefined
                external_ref?: string | undefined
                network_service?: string | undefined
                network_service_config?: string | undefined
                network_feature?: string | undefined
                network_feature_config?: string | undefined
                version?: number | undefined
                fqdn?: string | undefined
                prefix_length?: number | undefined
                valid_not_before?: string | undefined
                valid_not_after?: string | undefined
              }
            }
            output: IpAddress[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                managing_account?: string | undefined
                consuming_account?: string | undefined
                external_ref?: string | undefined
                network_service?: string | undefined
                network_service_config?: string | undefined
                network_feature?: string | undefined
                network_feature_config?: string | undefined
                version?: number | undefined
                fqdn?: string | undefined
                prefix_length?: number | undefined
                valid_not_before?: string | undefined
                valid_not_after?: string | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/validation-error.html' | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                managing_account?: string | undefined
                consuming_account?: string | undefined
                external_ref?: string | undefined
                network_service?: string | undefined
                network_service_config?: string | undefined
                network_feature?: string | undefined
                network_feature_config?: string | undefined
                version?: number | undefined
                fqdn?: string | undefined
                prefix_length?: number | undefined
                valid_not_before?: string | undefined
                valid_not_after?: string | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                managing_account?: string | undefined
                consuming_account?: string | undefined
                external_ref?: string | undefined
                network_service?: string | undefined
                network_service_config?: string | undefined
                network_feature?: string | undefined
                network_feature_config?: string | undefined
                version?: number | undefined
                fqdn?: string | undefined
                prefix_length?: number | undefined
                valid_not_before?: string | undefined
                valid_not_after?: string | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
      $post: {
        input: { json: IpAddressRequest }
        output: IpAddress
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/ips/:id': {
      $get:
        | { input: { param: { id: string } }; output: IpAddress; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/not-found.html' | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: IpAddressUpdatePartial }
            output: IpAddress
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: IpAddressUpdatePartial }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/validation-error.html' | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: IpAddressUpdatePartial }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: IpAddressUpdatePartial }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: IpAddressUpdatePartial }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/not-found.html' | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & { json: IpAddressUpdate }
            output: IpAddress
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: IpAddressUpdate }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/validation-error.html' | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: IpAddressUpdate }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: IpAddressUpdate }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: IpAddressUpdate }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/not-found.html' | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/macs': {
      $get:
        | {
            input: {
              query: {
                id?: string[] | undefined
                managing_account?: string | undefined
                consuming_account?: string | undefined
                external_ref?: string | undefined
                network_service_config?: string | undefined
                address?: string | undefined
                assigned_at?: string | undefined
                valid_not_before?: string | undefined
                valid_not_after?: string | undefined
              }
            }
            output: MacAddress[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                managing_account?: string | undefined
                consuming_account?: string | undefined
                external_ref?: string | undefined
                network_service_config?: string | undefined
                address?: string | undefined
                assigned_at?: string | undefined
                valid_not_before?: string | undefined
                valid_not_after?: string | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/validation-error.html' | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                managing_account?: string | undefined
                consuming_account?: string | undefined
                external_ref?: string | undefined
                network_service_config?: string | undefined
                address?: string | undefined
                assigned_at?: string | undefined
                valid_not_before?: string | undefined
                valid_not_after?: string | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                managing_account?: string | undefined
                consuming_account?: string | undefined
                external_ref?: string | undefined
                network_service_config?: string | undefined
                address?: string | undefined
                assigned_at?: string | undefined
                valid_not_before?: string | undefined
                valid_not_after?: string | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { json: MacAddressRequest }
            output: MacAddress
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: MacAddressRequest }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/validation-error.html' | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: MacAddressRequest }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: MacAddressRequest }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/macs/:id': {
      $delete:
        | {
            input: { param: { id: string } }
            output: MacAddress
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/unable-to-fulfill.html' | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/not-found.html' | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { id: string } }
            output: MacAddress
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/not-found.html' | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/member-joining-rules': {
      $get:
        | {
            input: { query: { id?: string[] | undefined; network_service?: string | undefined } }
            output: MemberJoiningRule[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { id?: string[] | undefined; network_service?: string | undefined } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/validation-error.html' | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { id?: string[] | undefined; network_service?: string | undefined } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { id?: string[] | undefined; network_service?: string | undefined } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { json: MemberJoiningRuleRequest }
            output: MemberJoiningRule
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: MemberJoiningRuleRequest }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/validation-error.html' | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: MemberJoiningRuleRequest }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: MemberJoiningRuleRequest }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/member-joining-rules/:id': {
      $delete:
        | {
            input: { param: { id: string } }
            output: MemberJoiningRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/unable-to-fulfill.html' | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/not-found.html' | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { id: string } }
            output: MemberJoiningRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/not-found.html' | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: MemberJoiningRuleUpdatePartial }
            output: MemberJoiningRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: MemberJoiningRuleUpdatePartial }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/validation-error.html' | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: MemberJoiningRuleUpdatePartial }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: MemberJoiningRuleUpdatePartial }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: MemberJoiningRuleUpdatePartial }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/not-found.html' | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & { json: MemberJoiningRuleUpdate }
            output: MemberJoiningRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: MemberJoiningRuleUpdate }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/validation-error.html' | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: MemberJoiningRuleUpdate }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: MemberJoiningRuleUpdate }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: MemberJoiningRuleUpdate }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/not-found.html' | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/metro-area-networks': {
      $get:
        | {
            input: {
              query: {
                id?: string[] | undefined
                name?: string | undefined
                metro_area?: string | undefined
                service_provider?: string | undefined
              }
            }
            output: MetroAreaNetwork[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                name?: string | undefined
                metro_area?: string | undefined
                service_provider?: string | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/validation-error.html' | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                name?: string | undefined
                metro_area?: string | undefined
                service_provider?: string | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                name?: string | undefined
                metro_area?: string | undefined
                service_provider?: string | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/metro-area-networks/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: MetroAreaNetwork
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/not-found.html' | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/metro-areas': {
      $get:
        | {
            input: { query: { id?: string[] | undefined } }
            output: MetroArea[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { id?: string[] | undefined } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/validation-error.html' | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { id?: string[] | undefined } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { id?: string[] | undefined } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/metro-areas/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: MetroArea[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/not-found.html' | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/network-feature-configs': {
      $get:
        | {
            input: {
              query: {
                id?: string[] | undefined
                state?: string | undefined
                state__is_not?: string | undefined
                managing_account?: string | undefined
                consuming_account?: string | undefined
                external_ref?: string | undefined
                type?: 'route_server' | undefined
                service_config?: string | undefined
                network_feature?: string | undefined
              }
            }
            output: NetworkFeatureConfig[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                state?: string | undefined
                state__is_not?: string | undefined
                managing_account?: string | undefined
                consuming_account?: string | undefined
                external_ref?: string | undefined
                type?: 'route_server' | undefined
                service_config?: string | undefined
                network_feature?: string | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/validation-error.html' | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                state?: string | undefined
                state__is_not?: string | undefined
                managing_account?: string | undefined
                consuming_account?: string | undefined
                external_ref?: string | undefined
                type?: 'route_server' | undefined
                service_config?: string | undefined
                network_feature?: string | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                state?: string | undefined
                state__is_not?: string | undefined
                managing_account?: string | undefined
                consuming_account?: string | undefined
                external_ref?: string | undefined
                type?: 'route_server' | undefined
                service_config?: string | undefined
                network_feature?: string | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { json: NetworkFeatureConfigRequest }
            output: NetworkFeatureConfig
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: NetworkFeatureConfigRequest }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/validation-error.html' | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: NetworkFeatureConfigRequest }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: NetworkFeatureConfigRequest }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/network-feature-configs/:id': {
      $delete:
        | {
            input: { param: { id: string } }
            output: NetworkFeatureConfig
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/unable-to-fulfill.html' | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/not-found.html' | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { id: string } }
            output: NetworkFeatureConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/not-found.html' | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: NetworkFeatureConfigUpdatePartial }
            output: NetworkFeatureConfig
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: string } } & { json: NetworkFeatureConfigUpdatePartial }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/validation-error.html' | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: NetworkFeatureConfigUpdatePartial }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: NetworkFeatureConfigUpdatePartial }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: NetworkFeatureConfigUpdatePartial }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/not-found.html' | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & { json: NetworkFeatureConfigUpdate }
            output: NetworkFeatureConfig
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: string } } & { json: NetworkFeatureConfigUpdate }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/validation-error.html' | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: NetworkFeatureConfigUpdate }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: NetworkFeatureConfigUpdate }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: NetworkFeatureConfigUpdate }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/not-found.html' | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/network-features': {
      $get:
        | {
            input: {
              query: {
                id?: string[] | undefined
                type?: 'route_server' | undefined
                required?: string | undefined
                network_service?: string | undefined
                name?: string | undefined
              }
            }
            output: NetworkFeature[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                type?: 'route_server' | undefined
                required?: string | undefined
                network_service?: string | undefined
                name?: string | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/validation-error.html' | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                type?: 'route_server' | undefined
                required?: string | undefined
                network_service?: string | undefined
                name?: string | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                type?: 'route_server' | undefined
                required?: string | undefined
                network_service?: string | undefined
                name?: string | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/network-features/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: NetworkFeature
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/not-found.html' | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/network-service-configs': {
      $get:
        | {
            input: {
              query: {
                id?: string[] | undefined
                state?: string | undefined
                state__is_not?: string | undefined
                managing_account?: string | undefined
                consuming_account?: string | undefined
                external_ref?: string | undefined
                type?: 'exchange_lan' | 'p2p_vc' | 'p2mp_vc' | 'mp2mp_vc' | 'cloud_vc' | undefined
                inner_vlan?: number | undefined
                outer_vlan?: number | undefined
                capacity?: number | undefined
                network_service?: string | undefined
                connection?: string | undefined
                product_offering?: string | undefined
              }
            }
            output: NetworkServiceConfig[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                state?: string | undefined
                state__is_not?: string | undefined
                managing_account?: string | undefined
                consuming_account?: string | undefined
                external_ref?: string | undefined
                type?: 'exchange_lan' | 'p2p_vc' | 'p2mp_vc' | 'mp2mp_vc' | 'cloud_vc' | undefined
                inner_vlan?: number | undefined
                outer_vlan?: number | undefined
                capacity?: number | undefined
                network_service?: string | undefined
                connection?: string | undefined
                product_offering?: string | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/validation-error.html' | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                state?: string | undefined
                state__is_not?: string | undefined
                managing_account?: string | undefined
                consuming_account?: string | undefined
                external_ref?: string | undefined
                type?: 'exchange_lan' | 'p2p_vc' | 'p2mp_vc' | 'mp2mp_vc' | 'cloud_vc' | undefined
                inner_vlan?: number | undefined
                outer_vlan?: number | undefined
                capacity?: number | undefined
                network_service?: string | undefined
                connection?: string | undefined
                product_offering?: string | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                state?: string | undefined
                state__is_not?: string | undefined
                managing_account?: string | undefined
                consuming_account?: string | undefined
                external_ref?: string | undefined
                type?: 'exchange_lan' | 'p2p_vc' | 'p2mp_vc' | 'mp2mp_vc' | 'cloud_vc' | undefined
                inner_vlan?: number | undefined
                outer_vlan?: number | undefined
                capacity?: number | undefined
                network_service?: string | undefined
                connection?: string | undefined
                product_offering?: string | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { json: NetworkServiceConfigRequest }
            output: NetworkServiceConfig
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: NetworkServiceConfigRequest }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/validation-error.html' | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: NetworkServiceConfigRequest }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: NetworkServiceConfigRequest }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/network-service-configs/:id': {
      $delete:
        | {
            input: { param: { id: string } } & { json: CancellationRequest }
            output: NetworkServiceConfig
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: string } } & { json: CancellationRequest }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/cancellation-policy-error.html'
                | 'https://errors.ix-api.net/v2/unable-to-fulfill.html'
                | undefined
              charged_until?: string | undefined
              decommission_at?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: CancellationRequest }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: CancellationRequest }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: CancellationRequest }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/not-found.html' | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { id: string } }
            output: NetworkServiceConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/not-found.html' | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: NetworkServiceConfigUpdatePartial }
            output: NetworkServiceConfig
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: string } } & { json: NetworkServiceConfigUpdatePartial }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/validation-error.html' | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: NetworkServiceConfigUpdatePartial }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: NetworkServiceConfigUpdatePartial }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: NetworkServiceConfigUpdatePartial }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/not-found.html' | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & { json: NetworkServiceConfigUpdate }
            output: NetworkServiceConfig
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: string } } & { json: NetworkServiceConfigUpdate }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/validation-error.html' | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: NetworkServiceConfigUpdate }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: NetworkServiceConfigUpdate }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: NetworkServiceConfigUpdate }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/not-found.html' | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/network-service-configs/:id/cancellation-policy': {
      $get:
        | {
            input: { param: { id: string } } & { query: { decommission_at?: string | undefined } }
            output: CancellationPolicy
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { decommission_at?: string | undefined } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { decommission_at?: string | undefined } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { decommission_at?: string | undefined } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/not-found.html' | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/network-services': {
      $get:
        | {
            input: {
              query: {
                id?: string[] | undefined
                state?: string | undefined
                state__is_not?: string | undefined
                managing_account?: string | undefined
                consuming_account?: string | undefined
                external_ref?: string | undefined
                type?: 'exchange_lan' | 'p2p_vc' | 'p2mp_vc' | 'mp2mp_vc' | 'cloud_vc' | undefined
                pop?: string | undefined
                product_offering?: string | undefined
              }
            }
            output: NetworkService[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                state?: string | undefined
                state__is_not?: string | undefined
                managing_account?: string | undefined
                consuming_account?: string | undefined
                external_ref?: string | undefined
                type?: 'exchange_lan' | 'p2p_vc' | 'p2mp_vc' | 'mp2mp_vc' | 'cloud_vc' | undefined
                pop?: string | undefined
                product_offering?: string | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/validation-error.html' | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                state?: string | undefined
                state__is_not?: string | undefined
                managing_account?: string | undefined
                consuming_account?: string | undefined
                external_ref?: string | undefined
                type?: 'exchange_lan' | 'p2p_vc' | 'p2mp_vc' | 'mp2mp_vc' | 'cloud_vc' | undefined
                pop?: string | undefined
                product_offering?: string | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                state?: string | undefined
                state__is_not?: string | undefined
                managing_account?: string | undefined
                consuming_account?: string | undefined
                external_ref?: string | undefined
                type?: 'exchange_lan' | 'p2p_vc' | 'p2mp_vc' | 'mp2mp_vc' | 'cloud_vc' | undefined
                pop?: string | undefined
                product_offering?: string | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { json: NetworkServiceRequest }
            output: NetworkService
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: NetworkServiceRequest }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/validation-error.html' | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: NetworkServiceRequest }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: NetworkServiceRequest }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/network-services/:id': {
      $delete:
        | {
            input: { param: { id: string } } & { json: CancellationRequest }
            output: NetworkService
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: string } } & { json: CancellationRequest }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/cancellation-policy-error.html'
                | 'https://errors.ix-api.net/v2/unable-to-fulfill.html'
                | undefined
              charged_until?: string | undefined
              decommission_at?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: CancellationRequest }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: CancellationRequest }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: CancellationRequest }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/not-found.html' | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { id: string } }
            output: NetworkService
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/not-found.html' | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: NetworkServiceRequestPartial }
            output: NetworkService
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: string } } & { json: NetworkServiceRequestPartial }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/validation-error.html' | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: NetworkServiceRequestPartial }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: NetworkServiceRequestPartial }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: NetworkServiceRequestPartial }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/not-found.html' | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & { json: NetworkServiceRequest }
            output: NetworkService
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: string } } & { json: NetworkServiceRequest }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/validation-error.html' | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: NetworkServiceRequest }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: NetworkServiceRequest }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: NetworkServiceRequest }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/not-found.html' | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/network-services/:id/cancellation-policy': {
      $get:
        | {
            input: { param: { id: string } } & { query: { decommission_at?: string | undefined } }
            output: CancellationPolicy
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { decommission_at?: string | undefined } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { decommission_at?: string | undefined } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { decommission_at?: string | undefined } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/not-found.html' | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/network-services/:id/change-request': {
      $delete:
        | {
            input: { param: { id: string } }
            output: NetworkServiceChangeRequest
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/unable-to-fulfill.html' | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/not-found.html' | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { id: string } }
            output: NetworkServiceChangeRequest
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/not-found.html' | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { id: string } } & { json: NetworkServiceChangeRequest }
            output: NetworkServiceChangeRequest
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: string } } & { json: NetworkServiceChangeRequest }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/validation-error.html' | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: NetworkServiceChangeRequest }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: NetworkServiceChangeRequest }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/pops': {
      $get:
        | {
            input: {
              query: {
                id?: string[] | undefined
                facility?: string | undefined
                metro_area_network?: string | undefined
                capability_media_type?: string | undefined
                capability_speed?: number | undefined
                capability_speed__lt?: number | undefined
                capability_speed__lte?: number | undefined
                capability_speed__gt?: number | undefined
                capability_speed__gte?: number | undefined
              }
            }
            output: PointOfPresence[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                facility?: string | undefined
                metro_area_network?: string | undefined
                capability_media_type?: string | undefined
                capability_speed?: number | undefined
                capability_speed__lt?: number | undefined
                capability_speed__lte?: number | undefined
                capability_speed__gt?: number | undefined
                capability_speed__gte?: number | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/validation-error.html' | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                facility?: string | undefined
                metro_area_network?: string | undefined
                capability_media_type?: string | undefined
                capability_speed?: number | undefined
                capability_speed__lt?: number | undefined
                capability_speed__lte?: number | undefined
                capability_speed__gt?: number | undefined
                capability_speed__gte?: number | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                facility?: string | undefined
                metro_area_network?: string | undefined
                capability_media_type?: string | undefined
                capability_speed?: number | undefined
                capability_speed__lt?: number | undefined
                capability_speed__lte?: number | undefined
                capability_speed__gt?: number | undefined
                capability_speed__gte?: number | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/pops/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: PointOfPresence
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/not-found.html' | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ports': {
      $get:
        | {
            input: {
              query: {
                id?: string[] | undefined
                state?: string | undefined
                state__is_not?: string | undefined
                media_type?: string | undefined
                pop?: string | undefined
                name?: string | undefined
                external_ref?: string | undefined
                device?: string | undefined
                speed?: string | undefined
                connection?: string | undefined
              }
            }
            output: Port[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                state?: string | undefined
                state__is_not?: string | undefined
                media_type?: string | undefined
                pop?: string | undefined
                name?: string | undefined
                external_ref?: string | undefined
                device?: string | undefined
                speed?: string | undefined
                connection?: string | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/validation-error.html' | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                state?: string | undefined
                state__is_not?: string | undefined
                media_type?: string | undefined
                pop?: string | undefined
                name?: string | undefined
                external_ref?: string | undefined
                device?: string | undefined
                speed?: string | undefined
                connection?: string | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                state?: string | undefined
                state__is_not?: string | undefined
                media_type?: string | undefined
                pop?: string | undefined
                name?: string | undefined
                external_ref?: string | undefined
                device?: string | undefined
                speed?: string | undefined
                connection?: string | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/ports/:id': {
      $get:
        | { input: { param: { id: string } }; output: Port; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/not-found.html' | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/product-offerings': {
      $get:
        | {
            input: {
              query: {
                id?: string[] | undefined
                type?: 'exchange_lan' | 'p2p_vc' | 'mp2mp_vc' | 'p2mp_vc' | 'cloud_vc' | undefined
                name?: string | undefined
                handover_metro_area?: string | undefined
                handover_metro_area_network?: string | undefined
                service_metro_area?: string | undefined
                service_metro_area_network?: string | undefined
                service_provider?: string | undefined
                downgrade_allowed?: 'true' | 'true' | undefined
                upgrade_allowed?: 'true' | 'false' | undefined
                bandwidth?: number | undefined
                physical_port_speed?: number | undefined
                service_provider_region?: string | undefined
                service_provider_pop?: string | undefined
                delivery_method?: 'dedicated' | 'shared' | undefined
                cloud_key?: string | undefined
                fields?: string | undefined
              }
            }
            output: ProductOfferingPartial[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                type?: 'exchange_lan' | 'p2p_vc' | 'mp2mp_vc' | 'p2mp_vc' | 'cloud_vc' | undefined
                name?: string | undefined
                handover_metro_area?: string | undefined
                handover_metro_area_network?: string | undefined
                service_metro_area?: string | undefined
                service_metro_area_network?: string | undefined
                service_provider?: string | undefined
                downgrade_allowed?: 'true' | 'true' | undefined
                upgrade_allowed?: 'true' | 'false' | undefined
                bandwidth?: number | undefined
                physical_port_speed?: number | undefined
                service_provider_region?: string | undefined
                service_provider_pop?: string | undefined
                delivery_method?: 'dedicated' | 'shared' | undefined
                cloud_key?: string | undefined
                fields?: string | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/validation-error.html' | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                type?: 'exchange_lan' | 'p2p_vc' | 'mp2mp_vc' | 'p2mp_vc' | 'cloud_vc' | undefined
                name?: string | undefined
                handover_metro_area?: string | undefined
                handover_metro_area_network?: string | undefined
                service_metro_area?: string | undefined
                service_metro_area_network?: string | undefined
                service_provider?: string | undefined
                downgrade_allowed?: 'true' | 'true' | undefined
                upgrade_allowed?: 'true' | 'false' | undefined
                bandwidth?: number | undefined
                physical_port_speed?: number | undefined
                service_provider_region?: string | undefined
                service_provider_pop?: string | undefined
                delivery_method?: 'dedicated' | 'shared' | undefined
                cloud_key?: string | undefined
                fields?: string | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                type?: 'exchange_lan' | 'p2p_vc' | 'mp2mp_vc' | 'p2mp_vc' | 'cloud_vc' | undefined
                name?: string | undefined
                handover_metro_area?: string | undefined
                handover_metro_area_network?: string | undefined
                service_metro_area?: string | undefined
                service_metro_area_network?: string | undefined
                service_provider?: string | undefined
                downgrade_allowed?: 'true' | 'true' | undefined
                upgrade_allowed?: 'true' | 'false' | undefined
                bandwidth?: number | undefined
                physical_port_speed?: number | undefined
                service_provider_region?: string | undefined
                service_provider_pop?: string | undefined
                delivery_method?: 'dedicated' | 'shared' | undefined
                cloud_key?: string | undefined
                fields?: string | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/product-offerings/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: ProductOffering
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/not-found.html' | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/role-assignments': {
      $get:
        | {
            input: {
              query: {
                id?: string[] | undefined
                contact?: string | undefined
                role?: string | undefined
              }
            }
            output: RoleAssignment[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                contact?: string | undefined
                role?: string | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/validation-error.html' | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                contact?: string | undefined
                role?: string | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                contact?: string | undefined
                role?: string | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { json: RoleAssignmentRequest }
            output: RoleAssignment
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: RoleAssignmentRequest }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/validation-error.html'
                | 'https://errors.ix-api.net/v2/unable-to-fulfill.html'
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: RoleAssignmentRequest }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: RoleAssignmentRequest }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/role-assignments/:assignment_id': {
      $delete:
        | {
            input: { param: { assignment_id: string } }
            output: RoleAssignment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { assignment_id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/unable-to-fulfill.html' | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { assignment_id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { assignment_id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { assignment_id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/not-found.html' | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { assignment_id: string } }
            output: RoleAssignment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { assignment_id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { assignment_id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/permission-denied.html' | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { assignment_id: string } }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?: 'https://errors.ix-api.net/v2/not-found.html' | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/roles': {
      $get:
        | {
            input: {
              query: {
                id?: string[] | undefined
                name?: string | undefined
                contact?: string | undefined
              }
            }
            output: Role[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                name?: string | undefined
                contact?: string | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/roles/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { id?: string[] | undefined; name?: string | undefined }
            }
            output: Role
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { id?: string[] | undefined; name?: string | undefined }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              status?: { [x: string]: unknown } | undefined
              title?: { [x: string]: unknown } | undefined
              type?:
                | 'https://errors.ix-api.net/v2/authentication-error.html'
                | 'https://errors.ix-api.net/v2/signature-expired.html'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  },
  '/'
>
export default routes
