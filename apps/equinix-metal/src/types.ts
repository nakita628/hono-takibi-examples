type Error = { error?: string | undefined; errors?: string[] | undefined }
type Href = { href: string }
type Batch = {
  created_at?: string | undefined
  devices?: Href[] | undefined
  error_messages?: string[] | undefined
  id?: string | undefined
  project?: Href | undefined
  quantity?: number | undefined
  state?: string | undefined
  updated_at?: string | undefined
}
type BgpSessionAddressFamily = 'ipv4' | 'ipv6'
type BgpSession = {
  address_family: BgpSessionAddressFamily
  created_at?: string | undefined
  default_route?: boolean | undefined
  device?: Href | undefined
  href?: string | undefined
  id?: string | undefined
  learned_routes?: string[] | undefined
  status?: string | undefined
  updated_at?: string | undefined
}
type MetalGatewayState = 'ready' | 'active' | 'deleting'
type MetalGatewayLite = {
  created_at?: string | undefined
  gateway_address?: string | undefined
  href?: string | undefined
  id?: string | undefined
  state?: MetalGatewayState | undefined
  updated_at?: string | undefined
  vlan?: number | undefined
}
type Coordinates = { latitude?: string | undefined; longitude?: string | undefined }
type Address = {
  address: string
  address2?: string | undefined
  city?: string | undefined
  coordinates?: Coordinates | undefined
  country: string
  state?: string | undefined
  zip_code: string
}
type Organization = {
  address?: Address | undefined
  billing_address?: Address | undefined
  created_at?: string | undefined
  credit_amount?: number | undefined
  customdata?: { [x: string]: unknown } | undefined
  description?: string | undefined
  enforce_2fa_at?: string | undefined
  id?: string | undefined
  logo?: string | undefined
  members?: Href[] | undefined
  memberships?: Href[] | undefined
  name?: string | undefined
  projects?: Href[] | undefined
  terms?: number | undefined
  twitter?: string | undefined
  updated_at?: string | undefined
  website?: string | undefined
}
type ProjectType = 'default' | 'vmce'
type Project = {
  bgp_config?: Href | undefined
  created_at?: string | undefined
  customdata?: { [x: string]: unknown } | undefined
  devices?: Href[] | undefined
  href?: string | undefined
  id?: string | undefined
  invitations?: Href[] | undefined
  max_devices?: { [x: string]: unknown } | undefined
  members?: Href[] | undefined
  memberships?: Href[] | undefined
  name?: string | undefined
  network_status?: { [x: string]: unknown } | undefined
  organization?: Organization | undefined
  payment_method?: Href | undefined
  ssh_keys?: Href[] | undefined
  updated_at?: string | undefined
  volumes?: Href[] | undefined
  type?: ProjectType | undefined
  tags?: string[] | undefined
}
type VrfIpReservationType = 'vrf'
type VrfVirtualCircuitStatus =
  | 'pending'
  | 'waiting_on_peering_details'
  | 'activating'
  | 'changing_peering_details'
  | 'deactivating'
  | 'deleting'
  | 'active'
  | 'expired'
  | 'activation_failed'
  | 'changing_peering_details_failed'
  | 'deactivation_failed'
  | 'delete_failed'
type VrfVirtualCircuit = {
  customer_ip?: string | undefined
  description?: string | undefined
  id?: string | undefined
  md5?: string | undefined
  metal_ip?: string | undefined
  name?: string | undefined
  port?: Href | undefined
  nni_vlan?: number | undefined
  peer_asn?: number | undefined
  project?: Href | undefined
  speed?: number | undefined
  status?: VrfVirtualCircuitStatus | undefined
  subnet?: string | undefined
  tags?: string[] | undefined
  type?: VrfIpReservationType | undefined
  vrf: Vrf
  created_at?: string | undefined
  updated_at?: string | undefined
}
type Metro = {
  code?: string | undefined
  country?: string | undefined
  id?: string | undefined
  name?: string | undefined
}
type User = {
  avatar_thumb_url?: string | undefined
  avatar_url?: string | undefined
  created_at?: string | undefined
  customdata?: { [x: string]: unknown } | undefined
  default_organization_id?: string | undefined
  default_project_id?: string | undefined
  email?: string | undefined
  emails?: Href[] | undefined
  first_name?: string | undefined
  fraud_score?: string | undefined
  full_name?: string | undefined
  href?: string | undefined
  id?: string | undefined
  last_login_at?: string | undefined
  last_name?: string | undefined
  max_organizations?: number | undefined
  max_projects?: number | undefined
  phone_number?: string | undefined
  short_id?: string | undefined
  timezone?: string | undefined
  two_factor_auth?: string | undefined
  updated_at?: string | undefined
}
type Vrf = {
  id?: string | undefined
  name?: string | undefined
  description?: string | undefined
  bill?: boolean | undefined
  bgp_dynamic_neighbors_enabled?: boolean | undefined
  bgp_dynamic_neighbors_export_route_map?: boolean | undefined
  bgp_dynamic_neighbors_bfd_enabled?: boolean | undefined
  local_asn?: number | undefined
  virtual_circuits?: VrfVirtualCircuit[] | undefined
  ip_ranges?: string[] | undefined
  project?: Project | undefined
  metro?: Metro | undefined
  created_by?: User | undefined
  href?: string | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  tags?: string[] | undefined
}
type VrfIpReservation = {
  address_family?: number | undefined
  cidr?: number | undefined
  created_at?: string | undefined
  created_by?: Href | undefined
  details?: string | undefined
  href?: string | undefined
  id?: string | undefined
  metal_gateway?: MetalGatewayLite | undefined
  netmask?: string | undefined
  network?: string | undefined
  project?: Project | undefined
  state?: string | undefined
  tags?: string[] | undefined
  type: VrfIpReservationType
  vrf: Vrf
  public?: boolean | undefined
  management?: boolean | undefined
  manageable?: boolean | undefined
  customdata?: { [x: string]: unknown } | undefined
  bill?: boolean | undefined
  project_lite?: Project | undefined
  address?: string | undefined
  gateway?: string | undefined
  metro?: Metro | undefined
}
type VirtualNetwork = {
  assigned_to?: Href | undefined
  assigned_to_virtual_circuit?: boolean | undefined
  description?: string | undefined
  facility?: Href | undefined
  href?: string | undefined
  created_at?: string | undefined
  id?: string | undefined
  instances?: Href[] | undefined
  metal_gateways?: MetalGatewayLite[] | undefined
  metro?: Href | undefined
  metro_code?: string | undefined
  vxlan?: number | undefined
  tags?: string[] | undefined
}
type VrfMetalGateway = {
  created_at?: string | undefined
  created_by?: Href | undefined
  href?: string | undefined
  id?: string | undefined
  ip_reservation?: VrfIpReservation | undefined
  project?: Project | undefined
  state?: MetalGatewayState | undefined
  updated_at?: string | undefined
  virtual_network?: VirtualNetwork | undefined
  vrf?: Vrf | undefined
}
type BgpDynamicNeighborState = 'active' | 'deleting' | 'pending' | 'ready'
type UserLimited = {
  avatar_thumb_url?: string | undefined
  avatar_url?: string | undefined
  full_name?: string | undefined
  href?: string | undefined
  id: string
}
type BgpDynamicNeighbor = {
  id?: string | undefined
  bgp_neighbor_asn?: number | undefined
  bgp_neighbor_range?: string | undefined
  metal_gateway?: VrfMetalGateway | undefined
  state?: BgpDynamicNeighborState | undefined
  href?: string | undefined
  created_at?: string | undefined
  created_by?: UserLimited | undefined
  updated_at?: string | undefined
  tags?: string[] | undefined
}
type CapacityLevelPerBaremetal = { level?: string | undefined }
type CapacityList = {
  capacity?: { [x: string]: { [x: string]: CapacityLevelPerBaremetal } } | undefined
}
type ServerInfo = {
  facility?: string | undefined
  metro?: string | undefined
  plan?: string | undefined
  quantity?: string | undefined
}
type CapacityInput = { servers?: ServerInfo[] | undefined }
type CapacityCheckPerFacilityInfo = {
  available?: boolean | undefined
  facility?: string | undefined
  plan?: string | undefined
  quantity?: string | undefined
}
type CapacityCheckPerFacilityList = { servers?: CapacityCheckPerFacilityInfo[] | undefined }
type CapacityCheckPerMetroInfo = {
  available?: boolean | undefined
  metro?: string | undefined
  plan?: string | undefined
  quantity?: string | undefined
}
type CapacityCheckPerMetroList = { servers?: CapacityCheckPerMetroInfo[] | undefined }
type InterconnectionMode = 'standard' | 'tunnel'
type InterconnectionPortRole = 'primary' | 'secondary'
type InterconnectionPortStatus = 'requested' | 'active' | 'deleting' | 'expired' | 'delete_failed'
type VlanVirtualCircuitStatus =
  | 'pending'
  | 'waiting_on_customer_vlan'
  | 'activating'
  | 'changing_vlan'
  | 'deactivating'
  | 'deleting'
  | 'active'
  | 'expired'
  | 'activation_failed'
  | 'changing_vlan_failed'
  | 'deactivation_failed'
  | 'delete_failed'
type VlanVirtualCircuitType = 'vlan'
type VlanVirtualCircuit = {
  bill?: boolean | undefined
  description?: string | undefined
  id?: string | undefined
  name?: string | undefined
  nni_vlan?: number | undefined
  port?: Href | undefined
  project?: Href | undefined
  speed?: number | undefined
  status?: VlanVirtualCircuitStatus | undefined
  tags?: string[] | undefined
  type?: VlanVirtualCircuitType | undefined
  virtual_network?: Href | undefined
  vnid?: number | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
}
type VirtualCircuit = VlanVirtualCircuit | VrfVirtualCircuit
type InterconnectionPort = {
  id?: string | undefined
  organization?: Href | undefined
  role?: InterconnectionPortRole | undefined
  status?: InterconnectionPortStatus | undefined
  switch_id?: string | undefined
  virtual_circuits?: VirtualCircuit[] | undefined
  name?: string | undefined
  speed?: number | undefined
  link_status?: string | undefined
  href?: string | undefined
}
type InterconnectionRedundancy = 'primary' | 'redundant'
type FabricServiceTokenRole = 'primary' | 'secondary'
type FabricServiceTokenServiceTokenType = 'a_side' | 'z_side'
type FabricServiceTokenState = 'inactive' | 'active' | 'expired'
type FabricServiceToken = {
  expires_at?: string | undefined
  id?: string | undefined
  max_allowed_speed?: number | undefined
  role?: FabricServiceTokenRole | undefined
  service_token_type?: FabricServiceTokenServiceTokenType | undefined
  state?: FabricServiceTokenState | undefined
}
type InterconnectionType = 'shared' | 'dedicated'
type Interconnection = {
  contact_email?: string | undefined
  description?: string | undefined
  facility?: Href | undefined
  id?: string | undefined
  metro?:
    | {
        code?: string | undefined
        country?: string | undefined
        id?: string | undefined
        name?: string | undefined
      }
    | undefined
  mode?: InterconnectionMode | undefined
  name?: string | undefined
  organization?: Href | undefined
  ports?: InterconnectionPort[] | undefined
  redundancy?: InterconnectionRedundancy | undefined
  service_tokens?: FabricServiceToken[] | undefined
  speed?: number | undefined
  status?: string | undefined
  tags?: string[] | undefined
  token?: string | undefined
  type?: InterconnectionType | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  requested_by?: Href | undefined
}
type InterconnectionUpdateInput = {
  contact_email?: string | undefined
  description?: string | undefined
  mode?: InterconnectionMode | undefined
  name?: string | undefined
  redundancy?: string | undefined
  tags?: string[] | undefined
}
type Event = {
  body?: string | undefined
  created_at?: string | undefined
  href?: string | undefined
  id?: string | undefined
  interpolated?: string | undefined
  relationships?: Href[] | undefined
  state?: string | undefined
  type?: string | undefined
  modified_by?: { [x: string]: unknown } | undefined
  ip?: string | undefined
}
type Meta = {
  first?: Href | undefined
  last?: Href | undefined
  next?: Href | undefined
  previous?: Href | undefined
  self?: Href | undefined
  total?: number | undefined
  current_page?: number | undefined
  last_page?: number | undefined
}
type EventList = { events?: Event[] | undefined; meta?: Meta | undefined }
type InterconnectionPortList = { ports?: InterconnectionPort[] | undefined }
type VirtualCircuitList = { virtual_circuits?: VirtualCircuit[] | undefined }
type VlanVirtualCircuitCreateInput = {
  description?: string | undefined
  name?: string | undefined
  nni_vlan?: number | undefined
  project_id: string
  speed?: number | undefined
  tags?: string[] | undefined
  vnid?: string | undefined
}
type VrfVirtualCircuitCreateInput = {
  customer_ip?: string | undefined
  description?: string | undefined
  md5?: (string | null) | undefined
  metal_ip?: string | undefined
  name?: string | undefined
  nni_vlan: number
  peer_asn: number
  project_id: string
  speed?: number | undefined
  subnet: string
  tags?: string[] | undefined
  vrf: string
}
type VirtualCircuitCreateInput = VlanVirtualCircuitCreateInput | VrfVirtualCircuitCreateInput
type DeviceCreatedBy = {
  avatar_thumb_url?: string | undefined
  created_at?: string | undefined
  email?: string | undefined
  first_name?: string | undefined
  full_name?: string | undefined
  href?: string | undefined
  id: string
  last_name?: string | undefined
  short_id: string
  updated_at?: string | undefined
}
type FacilityFeaturesInner = 'baremetal' | 'backend_transfer' | 'layer_2' | 'global_ipv4' | 'ibx'
type DeviceMetro = {
  code?: string | undefined
  country?: string | undefined
  id?: string | undefined
  name?: string | undefined
}
type Facility = {
  address?: Address | undefined
  code?: string | undefined
  features?: FacilityFeaturesInner[] | undefined
  id?: string | undefined
  ip_ranges?: string[] | undefined
  metro?: DeviceMetro | undefined
  name?: string | undefined
}
type PlanAvailableInInnerPrice = { hour?: number | undefined }
type PlanAvailableInInner = {
  href?: string | undefined
  price?: PlanAvailableInInnerPrice | undefined
}
type PlanAvailableInMetrosInner = {
  href?: string | undefined
  price?: PlanAvailableInInnerPrice | undefined
}
type PlanDeploymentTypesInner = 'on_demand' | 'spot_market'
type PlanSpecsCpusInner = { count?: number | undefined; type?: string | undefined }
type PlanSpecsMemory = { total?: string | undefined }
type PlanSpecsDrivesInnerCategory = 'boot' | 'cache' | 'storage'
type PlanSpecsDrivesInner = {
  count?: number | undefined
  type?: string | undefined
  size?: string | undefined
  category?: PlanSpecsDrivesInnerCategory | undefined
}
type PlanSpecsNicsInner = { count?: number | undefined; type?: string | undefined }
type PlanSpecsFeatures = {
  raid?: boolean | undefined
  txt?: boolean | undefined
  uefi?: boolean | undefined
}
type PlanSpecs = {
  cpus?: PlanSpecsCpusInner[] | undefined
  memory?: PlanSpecsMemory | undefined
  drives?: PlanSpecsDrivesInner[] | undefined
  nics?: PlanSpecsNicsInner[] | undefined
  features?: PlanSpecsFeatures | undefined
}
type PlanType = 'standard' | 'workload_optimized' | 'custom'
type Plan = {
  available_in?: PlanAvailableInInner[] | undefined
  available_in_metros?: PlanAvailableInMetrosInner[] | undefined
  categories?: string[] | undefined
  class?: string | undefined
  description?: string | undefined
  deployment_types?: PlanDeploymentTypesInner[] | undefined
  id?: string | undefined
  legacy?: boolean | undefined
  line?: string | undefined
  name?: string | undefined
  pricing?: { [x: string]: unknown } | undefined
  slug?: string | undefined
  specs?: PlanSpecs | undefined
  type?: PlanType | undefined
}
type HardwareReservation = {
  created_at?: string | undefined
  custom_rate?: number | undefined
  device?: Device | undefined
  facility?: Facility | undefined
  href?: string | undefined
  id?: string | undefined
  need_of_service?: boolean | undefined
  plan?: Plan | undefined
  project?: Project | undefined
  provisionable?: boolean | undefined
  short_id?: string | undefined
  spare?: boolean | undefined
  switch_uuid?: string | undefined
  termination_time?: string | undefined
}
type IPAssignmentMetro = {
  code?: string | undefined
  country?: string | undefined
  id?: string | undefined
  name?: string | undefined
}
type ParentBlock = {
  cidr?: number | undefined
  href?: string | undefined
  netmask?: string | undefined
  network?: string | undefined
}
type IPAssignmentState = 'pending' | 'active' | 'deleting'
type IPAssignmentType = 'IPAssignment'
type IPAssignment = {
  address?: string | undefined
  address_family?: number | undefined
  assigned_to?: Href | undefined
  cidr?: number | undefined
  created_at?: string | undefined
  enabled?: boolean | undefined
  gateway?: string | undefined
  global_ip?: boolean | undefined
  href?: string | undefined
  id?: string | undefined
  manageable?: boolean | undefined
  management?: boolean | undefined
  metro?: IPAssignmentMetro | undefined
  netmask?: string | undefined
  network?: string | undefined
  parent_block?: ParentBlock | undefined
  public?: boolean | undefined
  state?: IPAssignmentState | undefined
  next_hop?: string | undefined
  type?: IPAssignmentType | undefined
}
type BondPortData = { id?: string | undefined; name?: string | undefined }
type PortData = { mac?: string | undefined; bonded?: boolean | undefined }
type PortType = 'NetworkPort' | 'NetworkBondPort'
type PortNetworkType = 'layer2-bonded' | 'layer2-individual' | 'layer3' | 'hybrid' | 'hybrid-bonded'
type Port = {
  bond?: BondPortData | undefined
  data?: PortData | undefined
  disbond_operation_supported?: boolean | undefined
  href?: string | undefined
  id?: string | undefined
  name?: string | undefined
  type?: PortType | undefined
  network_type?: PortNetworkType | undefined
  native_virtual_network?: VirtualNetwork | undefined
  virtual_networks?: Href[] | undefined
}
type OperatingSystem = {
  distro?: string | undefined
  distro_label?: string | undefined
  id?: string | undefined
  licensed?: boolean | undefined
  name?: string | undefined
  preinstallable?: boolean | undefined
  pricing?: { [x: string]: unknown } | undefined
  provisionable_on?: string[] | undefined
  slug?: string | undefined
  version?: string | undefined
  default_operating_system?: boolean | undefined
}
type DeviceActionsInner = { type?: string | undefined; name?: string | undefined }
type DeviceProjectLite = { href: string }
type DeviceState =
  | 'queued'
  | 'provisioning'
  | 'deprovisioning'
  | 'reinstalling'
  | 'active'
  | 'inactive'
  | 'failed'
  | 'powering_on'
  | 'powering_off'
  | 'deleted'
type Partition = {
  label?: string | undefined
  number?: number | undefined
  size?: string | undefined
}
type Disk = {
  device?: string | undefined
  wipeTable?: boolean | undefined
  partitions?: Partition[] | undefined
}
type Raid = {
  devices?: string[] | undefined
  level?: string | undefined
  name?: string | undefined
}
type Mount = {
  device?: string | undefined
  format?: string | undefined
  point?: string | undefined
  options?: string[] | undefined
}
type Filesystem = { mount?: Mount | undefined }
type Storage = {
  disks?: Disk[] | undefined
  raid?: Raid[] | undefined
  filesystems?: Filesystem[] | undefined
}
type Device = {
  always_pxe?: boolean | undefined
  billing_cycle?: string | undefined
  bonding_mode?: number | undefined
  created_at?: string | undefined
  created_by?: DeviceCreatedBy | undefined
  customdata?: { [x: string]: unknown } | undefined
  description?: string | undefined
  facility?: Facility | undefined
  firmware_set_id?: string | undefined
  hardware_reservation?: HardwareReservation | undefined
  hostname?: string | undefined
  href?: string | undefined
  id?: string | undefined
  image_url?: string | undefined
  ip_addresses?: IPAssignment[] | undefined
  ipxe_script_url?: string | undefined
  iqn?: string | undefined
  locked?: boolean | undefined
  metro?: DeviceMetro | undefined
  network_frozen?: boolean | undefined
  network_ports?: Port[] | undefined
  operating_system?: OperatingSystem | undefined
  actions?: DeviceActionsInner[] | undefined
  plan?: Plan | undefined
  project?: Project | undefined
  project_lite?: DeviceProjectLite | undefined
  provisioning_events?: Event[] | undefined
  provisioning_percentage?: number | undefined
  root_password?: string | undefined
  short_id?: string | undefined
  spot_instance?: boolean | undefined
  spot_price_max?: number | undefined
  ssh_keys?: Href[] | undefined
  state?: DeviceState | undefined
  storage?: Storage | undefined
  switch_uuid?: string | undefined
  tags?: string[] | undefined
  termination_time?: string | undefined
  updated_at?: string | undefined
  user?: string | undefined
  userdata?: string | undefined
  volumes?: Href[] | undefined
  sos?: string | undefined
}
type DeviceUpdateInput = {
  always_pxe?: boolean | undefined
  billing_cycle?: string | undefined
  customdata?: { [x: string]: unknown } | undefined
  description?: string | undefined
  hostname?: string | undefined
  firmware_set_id?: string | undefined
  ipxe_script_url?: string | undefined
  locked?: boolean | undefined
  network_frozen?: boolean | undefined
  spot_instance?: boolean | undefined
  tags?: string[] | undefined
  userdata?: string | undefined
}
type DeviceActionInputType = 'power_on' | 'power_off' | 'reboot' | 'rescue' | 'reinstall'
type DeviceActionInput = {
  type: DeviceActionInputType
  force_delete?: boolean | undefined
  deprovision_fast?: boolean | undefined
  preserve_data?: boolean | undefined
  operating_system?: string | undefined
  ipxe_script_url?: string | undefined
}
type BgpRoute = { exact?: boolean | undefined; route?: string | undefined }
type BgpNeighborData = {
  address_family?: number | undefined
  customer_as?: number | undefined
  customer_ip?: string | undefined
  md5_enabled?: boolean | undefined
  md5_password?: string | undefined
  multihop?: boolean | undefined
  peer_as?: number | undefined
  peer_ips?: string[] | undefined
  routes_in?: BgpRoute[] | undefined
  routes_out?: BgpRoute[] | undefined
}
type BgpSessionNeighbors = { bgp_neighbors?: BgpNeighborData[] | undefined }
type BgpSessionList = { bgp_sessions?: BgpSession[] | undefined }
type BGPSessionInputAddressFamily = 'ipv4' | 'ipv6'
type BGPSessionInput = {
  address_family?: BGPSessionInputAddressFamily | undefined
  default_route?: boolean | undefined
}
type DeviceHealthRollupHealthRollup = 'ok' | 'warning' | 'critical'
type DeviceHealthRollup = {
  health_rollup?: DeviceHealthRollupHealthRollup | undefined
  updated_at?: string | undefined
}
type AttributeData = {
  latest?: boolean | undefined
  model?: string | undefined
  vendor?: string | undefined
  plan?: string | undefined
}
type Attribute = {
  namespace?: string | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  data?: AttributeData | undefined
}
type Component = {
  uuid?: string | undefined
  vendor?: string | undefined
  model?: string[] | undefined
  filename?: string | undefined
  version?: string | undefined
  component?: string | undefined
  checksum?: string | undefined
  upstream_url?: string | undefined
  repository_url?: string | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
}
type FirmwareSet = {
  uuid: string
  name: string
  created_at?: string | undefined
  updated_at?: string | undefined
  attributes?: Attribute[] | undefined
  component_firmware?: Component[] | undefined
}
type FirmwareSetResponse = { record?: FirmwareSet | undefined }
type IPAssignmentList = { ip_addresses?: IPAssignment[] | undefined }
type IPAssignmentInput = { address: string; customdata?: { [x: string]: unknown } | undefined }
type MetadataNetworkNetworkBonding = {
  link_aggregation?: string | undefined
  mac?: string | undefined
  mode?: number | undefined
}
type MetadataNetworkNetwork = { bonding?: MetadataNetworkNetworkBonding | undefined }
type MetadataNetwork = {
  addresses?: string[] | undefined
  interfaces?: { [x: string]: unknown }[] | undefined
  network?: MetadataNetworkNetwork | undefined
}
type Metadata = {
  class?: string | undefined
  customdata?: { [x: string]: unknown } | undefined
  facility?: string | undefined
  hostname?: string | undefined
  id?: string | undefined
  iqn?: string | undefined
  metro?: string | undefined
  network?: MetadataNetwork | undefined
  operating_system?: { [x: string]: unknown } | undefined
  plan?: string | undefined
  private_subnets?: string[] | undefined
  reserved?: boolean | undefined
  specs?: { [x: string]: unknown } | undefined
  ssh_keys?: string[] | undefined
  switch_short_id?: string | undefined
  state?: DeviceState | undefined
  tags?: string[] | undefined
  volumes?: string[] | undefined
}
type SSHKey = {
  created_at?: string | undefined
  entity?: Href | undefined
  fingerprint?: string | undefined
  href?: string | undefined
  id?: string | undefined
  key?: string | undefined
  label?: string | undefined
  updated_at?: string | undefined
  tags?: string[] | undefined
}
type SSHKeyList = { ssh_keys?: SSHKey[] | undefined }
type FindTrafficDirectionParameter = 'inbound' | 'outbound'
type FindTrafficIntervalParameter =
  | 'minute'
  | 'hour'
  | 'day'
  | 'week'
  | 'month'
  | 'year'
  | 'hour_of_day'
  | 'day_of_week'
  | 'day_of_month'
  | 'month_of_year'
type FindTrafficBucketParameter = 'internal' | 'external'
type FindTrafficTimeframeParameter = { ended_at: string; started_at: string }
type DeviceUsage = {
  quantity?: string | undefined
  total?: string | undefined
  unit?: string | undefined
}
type DeviceUsageList = { usages?: DeviceUsage[] | undefined }
type Userdata = { userdata?: string | undefined }
type CreateEmailInput = { address: string }
type Email = {
  address?: string | undefined
  default?: boolean | undefined
  href?: string | undefined
  id?: string | undefined
  verified?: boolean | undefined
}
type UpdateEmailInput = { default?: boolean | undefined }
type FindFacilitiesIncludeParameterInner = 'address' | 'labels'
type FacilityList = { facilities?: Facility[] | undefined }
type ActivateHardwareReservationRequest = { description?: string | undefined }
type MoveHardwareReservationRequest = { project_id?: string | undefined }
type Membership = {
  created_at?: string | undefined
  href?: string | undefined
  id?: string | undefined
  project?: Href | undefined
  roles?: string[] | undefined
  updated_at?: string | undefined
  user?: Href | undefined
}
type InvitationList = { invitations?: Membership[] | undefined }
type InvitationRolesInner = 'admin' | 'billing' | 'collaborator' | 'limited_collaborator'
type Invitation = {
  created_at?: string | undefined
  href?: string | undefined
  id?: string | undefined
  invitation?: Href | undefined
  invited_by?: Href | undefined
  invitee?: string | undefined
  nonce?: string | undefined
  organization?: Href | undefined
  projects?: Href[] | undefined
  roles?: InvitationRolesInner[] | undefined
  updated_at?: string | undefined
}
type LineItem = {
  amount?: number | undefined
  currency?: string | undefined
  description?: string | undefined
  details?: string | undefined
  plan?: Plan | undefined
  unit?: string | undefined
  unit_price?: number | undefined
}
type ProjectIdName = { id?: string | undefined; name?: string | undefined }
type Invoice = {
  amount?: number | undefined
  balance?: number | undefined
  created_on?: string | undefined
  credit_amount?: number | undefined
  credits_applied?: number | undefined
  currency?: string | undefined
  due_on?: string | undefined
  id?: string | undefined
  items?: LineItem[] | undefined
  number?: string | undefined
  project?: ProjectIdName | undefined
  reference_number?: string | undefined
  status?: string | undefined
  target_date?: string | undefined
}
type IPReservationFacility = {
  address?: Address | undefined
  code?: string | undefined
  features?: FacilityFeaturesInner[] | undefined
  id?: string | undefined
  ip_ranges?: string[] | undefined
  metro?: DeviceMetro | undefined
  name?: string | undefined
}
type IPReservationMetro = {
  code?: string | undefined
  country?: string | undefined
  id?: string | undefined
  name?: string | undefined
}
type IPReservationType = 'global_ipv4' | 'public_ipv4' | 'private_ipv4' | 'public_ipv6'
type IPReservation = {
  addon?: boolean | undefined
  address?: string | undefined
  address_family?: number | undefined
  assignments?: IPAssignment[] | undefined
  available?: string | undefined
  bill?: boolean | undefined
  cidr?: number | undefined
  created_at?: string | undefined
  customdata?: { [x: string]: unknown } | undefined
  enabled?: boolean | undefined
  details?: string | undefined
  facility?: IPReservationFacility | undefined
  gateway?: string | undefined
  global_ip?: boolean | undefined
  href?: string | undefined
  id?: string | undefined
  manageable?: boolean | undefined
  management?: boolean | undefined
  metal_gateway?: MetalGatewayLite | undefined
  metro?: IPReservationMetro | undefined
  netmask?: string | undefined
  network?: string | undefined
  project?: Project | undefined
  project_lite?: Href | undefined
  requested_by?: Href | undefined
  public?: boolean | undefined
  state?: string | undefined
  tags?: string[] | undefined
  type: IPReservationType
}
type FindIPAddressById_200Response = IPAssignment | IPReservation | VrfIpReservation
type IPAssignmentUpdateInput = {
  details?: string | undefined
  customdata?: { [x: string]: unknown } | undefined
  tags?: string[] | undefined
}
type FindIPAvailabilitiesCidrParameter =
  | '20'
  | '21'
  | '22'
  | '23'
  | '24'
  | '25'
  | '26'
  | '27'
  | '28'
  | '29'
  | '30'
  | '31'
  | '32'
  | '33'
  | '34'
  | '35'
  | '36'
  | '37'
  | '38'
  | '39'
  | '40'
  | '41'
  | '42'
  | '43'
  | '44'
  | '45'
  | '46'
  | '47'
  | '48'
  | '49'
  | '50'
  | '51'
  | '52'
  | '53'
  | '54'
  | '55'
  | '56'
  | '57'
  | '58'
  | '59'
  | '60'
  | '61'
  | '62'
  | '63'
  | '64'
  | '65'
  | '66'
  | '67'
  | '68'
  | '69'
  | '70'
  | '71'
  | '72'
  | '73'
  | '74'
  | '75'
  | '76'
  | '77'
  | '78'
  | '79'
  | '80'
  | '81'
  | '82'
  | '83'
  | '84'
  | '85'
  | '86'
  | '87'
  | '88'
  | '89'
  | '90'
  | '91'
  | '92'
  | '93'
  | '94'
  | '95'
  | '96'
  | '97'
  | '98'
  | '99'
  | '100'
  | '101'
  | '102'
  | '103'
  | '104'
  | '105'
  | '106'
  | '107'
  | '108'
  | '109'
  | '110'
  | '111'
  | '112'
  | '113'
  | '114'
  | '115'
  | '116'
  | '117'
  | '118'
  | '119'
  | '120'
  | '121'
  | '122'
  | '123'
  | '124'
  | '125'
  | '126'
  | '127'
  | '128'
type IPAvailabilitiesList = { available?: string[] | undefined }
type License = {
  description?: string | undefined
  id?: string | undefined
  license_key?: string | undefined
  licensee_product?: Href | undefined
  project?: Href | undefined
  size?: number | undefined
}
type LicenseUpdateInput = { description?: string | undefined; size?: number | undefined }
type MetroList = { metros?: Metro[] | undefined }
type SpotPricesPerBaremetal = { price?: number | undefined }
type SpotPricesPerFacility = {
  baremetal_0?: SpotPricesPerBaremetal | undefined
  baremetal_1?: SpotPricesPerBaremetal | undefined
  baremetal_2?: SpotPricesPerBaremetal | undefined
  baremetal_2a?: SpotPricesPerBaremetal | undefined
  baremetal_2a2?: SpotPricesPerBaremetal | undefined
  baremetal_3?: SpotPricesPerBaremetal | undefined
  baremetal_s?: SpotPricesPerBaremetal | undefined
  'c2.medium.x86'?: SpotPricesPerBaremetal | undefined
  'm2.xlarge.x86'?: SpotPricesPerBaremetal | undefined
}
type SpotPricesPerNewFacility = { baremetal_1e?: SpotPricesPerBaremetal | undefined }
type SpotPricesReport = {
  ams1?: SpotPricesPerFacility | undefined
  atl1?: SpotPricesPerNewFacility | undefined
  dfw1?: SpotPricesPerNewFacility | undefined
  ewr1?: SpotPricesPerFacility | undefined
  fra1?: SpotPricesPerNewFacility | undefined
  iad1?: SpotPricesPerNewFacility | undefined
  lax1?: SpotPricesPerNewFacility | undefined
  nrt1?: SpotPricesPerFacility | undefined
  ord1?: SpotPricesPerNewFacility | undefined
  sea1?: SpotPricesPerNewFacility | undefined
  sin1?: SpotPricesPerNewFacility | undefined
  sjc1?: SpotPricesPerFacility | undefined
  syd1?: SpotPricesPerNewFacility | undefined
  yyz1?: SpotPricesPerNewFacility | undefined
}
type SpotMarketPricesList = { spot_market_prices?: SpotPricesReport | undefined }
type SpotPricesDatapointsList = number[]
type SpotPricesDatapoints = { datapoints?: SpotPricesDatapointsList[] | undefined }
type SpotPricesHistoryReport = { prices_history?: SpotPricesDatapoints | undefined }
type SpotMarketPricesPerMetroReport = {
  am?: SpotPricesPerFacility | undefined
  ch?: SpotPricesPerFacility | undefined
  da?: SpotPricesPerFacility | undefined
  la?: SpotPricesPerFacility | undefined
  ny?: SpotPricesPerFacility | undefined
  sg?: SpotPricesPerFacility | undefined
  sv?: SpotPricesPerFacility | undefined
}
type SpotMarketPricesPerMetroList = {
  spot_market_prices?: SpotMarketPricesPerMetroReport | undefined
}
type MembershipInput = { role?: string[] | undefined }
type MetalGateway = {
  created_at?: string | undefined
  created_by?: Href | undefined
  href?: string | undefined
  id?: string | undefined
  ip_reservation?: IPReservation | undefined
  project?: Project | undefined
  state?: MetalGatewayState | undefined
  updated_at?: string | undefined
  virtual_network?: VirtualNetwork | undefined
}
type FindMetalGatewayById_200Response = MetalGateway | VrfMetalGateway
type BgpDynamicNeighborList = {
  bgp_dynamic_neighbors?: BgpDynamicNeighbor[] | undefined
  meta?: Meta | undefined
}
type BgpDynamicNeighborCreateInput = {
  bgp_neighbor_range: string
  bgp_neighbor_asn: number
  tags?: string[] | undefined
}
type MetalGatewayElasticIpCreateInput = {
  address: string
  next_hop: string
  customdata?: { [x: string]: unknown } | undefined
  tags?: string[] | undefined
}
type OperatingSystemList = { operating_systems?: OperatingSystem[] | undefined }
type FindOrganizationsPersonalParameter = 'include' | 'exclude' | 'only'
type OrganizationList = { meta?: Meta | undefined; organizations?: Organization[] | undefined }
type OrganizationInput = {
  address?: Address | undefined
  billing_address?: Address | undefined
  customdata?: { [x: string]: unknown } | undefined
  description?: string | undefined
  enforce_2fa_at?: string | undefined
  logo?: string | undefined
  name?: string | undefined
  twitter?: string | undefined
  website?: string | undefined
}
type FindOrganizationDevicesCategoriesParameterInner =
  | 'compute'
  | 'storage'
  | 'vmce'
  | 'legacy_gen'
  | 'current_gen'
type DeviceList = { devices?: Device[] | undefined; meta?: Meta | undefined }
type FirmwareSetListResponse = {
  page_size?: number | undefined
  page?: number | undefined
  page_count?: number | undefined
  total_pages?: number | undefined
  total_record_count?: number | undefined
  records?: FirmwareSet[] | undefined
}
type InvitationInput = {
  invitee: string
  message?: string | undefined
  organization_id?: string | undefined
  projects_ids?: string[] | undefined
  roles?: InvitationRolesInner[] | undefined
}
type InvoiceList = { invoices?: Invoice[] | undefined }
type PaymentMethodBillingAddress = {
  country_code_alpha2?: string | undefined
  postal_code?: string | undefined
  street_address?: string | undefined
}
type PaymentMethod = {
  billing_address?: PaymentMethodBillingAddress | undefined
  card_type?: string | undefined
  cardholder_name?: string | undefined
  created_at?: string | undefined
  created_by_user?: Href | undefined
  default?: boolean | undefined
  email?: string | undefined
  expiration_month?: string | undefined
  expiration_year?: string | undefined
  id?: string | undefined
  name?: string | undefined
  organization?: Href | undefined
  projects?: Href[] | undefined
  type?: string | undefined
  updated_at?: string | undefined
}
type PaymentMethodList = { payment_methods?: PaymentMethod[] | undefined }
type PaymentMethodCreateInput = { default?: boolean | undefined; name: string; nonce: string }
type PlanList = { plans?: Plan[] | undefined }
type ProjectList = { meta?: Meta | undefined; projects?: Project[] | undefined }
type ProjectCreateFromRootInputType = 'default' | 'vmce'
type ProjectCreateInput = {
  customdata?: { [x: string]: unknown } | undefined
  name: string
  payment_method_id?: string | undefined
  type?: ProjectCreateFromRootInputType | undefined
  tags?: string[] | undefined
}
type TransferRequest = {
  created_at?: string | undefined
  href?: string | undefined
  id?: string | undefined
  project?: Href | undefined
  target_organization?: Href | undefined
  updated_at?: string | undefined
}
type TransferRequestList = { transfers?: TransferRequest[] | undefined }
type InterconnectionList = {
  interconnections?: Interconnection[] | undefined
  meta?: Meta | undefined
}
type DedicatedPortCreateInputMode = 'standard' | 'tunnel'
type DedicatedPortCreateInputType = 'dedicated'
type DedicatedPortCreateInput = {
  billing_account_name?: string | undefined
  contact_email?: string | undefined
  description?: string | undefined
  metro: string
  mode?: DedicatedPortCreateInputMode | undefined
  name: string
  project?: string | undefined
  redundancy: string
  speed?: number | undefined
  tags?: string[] | undefined
  type: DedicatedPortCreateInputType
  use_case?: string | undefined
}
type VlanFabricVcCreateInputServiceTokenType = 'a_side' | 'z_side'
type VlanFabricVcCreateInputType = 'shared'
type VlanFabricVcCreateInput = {
  contact_email?: string | undefined
  description?: string | undefined
  metro: string
  name: string
  project?: string | undefined
  redundancy: string
  service_token_type: VlanFabricVcCreateInputServiceTokenType
  speed?: number | undefined
  tags?: string[] | undefined
  type: VlanFabricVcCreateInputType
  vlans?: number[] | undefined
}
type VrfFabricVcCreateInput = {
  contact_email?: string | undefined
  description?: string | undefined
  metro: string
  name: string
  project?: string | undefined
  redundancy: string
  service_token_type: VlanFabricVcCreateInputServiceTokenType
  speed?: number | undefined
  tags?: string[] | undefined
  type: VlanFabricVcCreateInputType
  vrfs: string[]
}
type CreateOrganizationInterconnectionRequest =
  | DedicatedPortCreateInput
  | VlanFabricVcCreateInput
  | VrfFabricVcCreateInput
type PaymentMethodUpdateInput = {
  billing_address?: { [x: string]: unknown } | undefined
  cardholder_name?: string | undefined
  default?: boolean | undefined
  expiration_month?: string | undefined
  expiration_year?: number | undefined
  name?: string | undefined
}
type FindPlansTypeParameter = 'standard' | 'workload_optimized' | 'custom'
type PortAssignInput = { vnid?: string | undefined }
type PortConvertLayer3InputRequestIpsInner = {
  address_family?: number | undefined
  public?: boolean | undefined
}
type PortConvertLayer3Input = { request_ips?: PortConvertLayer3InputRequestIpsInner[] | undefined }
type PortVlanAssignmentState = 'assigned' | 'unassigning'
type PortVlanAssignment = {
  created_at?: string | undefined
  id?: string | undefined
  native?: boolean | undefined
  port?: Href | undefined
  state?: PortVlanAssignmentState | undefined
  updated_at?: string | undefined
  virtual_network?: Href | undefined
  vlan?: number | undefined
}
type PortVlanAssignmentList = { vlan_assignments?: PortVlanAssignment[] | undefined }
type PortVlanAssignmentBatchState = 'queued' | 'in_progress' | 'completed' | 'failed'
type PortVlanAssignmentBatchVlanAssignmentsInnerState = 'assigned' | 'unassigned'
type PortVlanAssignmentBatchVlanAssignmentsInner = {
  id?: string | undefined
  native?: boolean | undefined
  state?: PortVlanAssignmentBatchVlanAssignmentsInnerState | undefined
  vlan?: number | undefined
}
type PortVlanAssignmentBatch = {
  created_at?: string | undefined
  error_messages?: string[] | undefined
  id?: string | undefined
  port?: Port | undefined
  quantity?: number | undefined
  state?: PortVlanAssignmentBatchState | undefined
  updated_at?: string | undefined
  vlan_assignments?: PortVlanAssignmentBatchVlanAssignmentsInner[] | undefined
  project?: Href | undefined
}
type PortVlanAssignmentBatchList = { batches?: PortVlanAssignmentBatch[] | undefined }
type PortVlanAssignmentBatchCreateInputVlanAssignmentsInner = {
  native?: boolean | undefined
  state?: PortVlanAssignmentBatchVlanAssignmentsInnerState | undefined
  vlan?: string | undefined
}
type PortVlanAssignmentBatchCreateInput = {
  vlan_assignments?: PortVlanAssignmentBatchCreateInputVlanAssignmentsInner[] | undefined
}
type ProjectCreateFromRootInput = {
  customdata?: { [x: string]: unknown } | undefined
  name: string
  organization_id?: string | undefined
  payment_method_id?: string | undefined
  type?: ProjectCreateFromRootInputType | undefined
  tags?: string[] | undefined
}
type ProjectUpdateInput = {
  backend_transfer_enabled?: boolean | undefined
  customdata?: { [x: string]: unknown } | undefined
  name?: string | undefined
  payment_method_id?: string | undefined
  tags?: string[] | undefined
}
type AuthTokenProject = {
  bgp_config?: Href | undefined
  created_at?: string | undefined
  customdata?: { [x: string]: unknown } | undefined
  devices?: Href[] | undefined
  href?: string | undefined
  id?: string | undefined
  invitations?: Href[] | undefined
  max_devices?: { [x: string]: unknown } | undefined
  members?: Href[] | undefined
  memberships?: Href[] | undefined
  name?: string | undefined
  network_status?: { [x: string]: unknown } | undefined
  organization?: Organization | undefined
  payment_method?: Href | undefined
  ssh_keys?: Href[] | undefined
  updated_at?: string | undefined
  volumes?: Href[] | undefined
  type?: ProjectType | undefined
  tags?: string[] | undefined
}
type AuthTokenUser = {
  avatar_thumb_url?: string | undefined
  avatar_url?: string | undefined
  created_at?: string | undefined
  customdata?: { [x: string]: unknown } | undefined
  default_organization_id?: string | undefined
  default_project_id?: string | undefined
  email?: string | undefined
  emails?: Href[] | undefined
  first_name?: string | undefined
  fraud_score?: string | undefined
  full_name?: string | undefined
  href?: string | undefined
  id?: string | undefined
  last_login_at?: string | undefined
  last_name?: string | undefined
  max_organizations?: number | undefined
  max_projects?: number | undefined
  phone_number?: string | undefined
  short_id?: string | undefined
  timezone?: string | undefined
  two_factor_auth?: string | undefined
  updated_at?: string | undefined
}
type AuthToken = {
  created_at?: string | undefined
  description?: string | undefined
  id?: string | undefined
  project?: AuthTokenProject | undefined
  read_only?: boolean | undefined
  token?: string | undefined
  updated_at?: string | undefined
  user?: AuthTokenUser | undefined
}
type AuthTokenList = { api_keys?: AuthToken[] | undefined }
type AuthTokenInput = { description?: string | undefined; read_only?: boolean | undefined }
type BatchesList = { batches?: Batch[] | undefined }
type BgpConfigDeploymentType = 'global' | 'local'
type GlobalBgpRange = {
  address_family?: number | undefined
  href?: string | undefined
  id?: string | undefined
  project?: Href | undefined
  range?: string | undefined
}
type BgpConfigStatus = 'requested' | 'enabled' | 'disabled'
type BgpConfig = {
  asn?: number | undefined
  created_at?: string | undefined
  deployment_type?: BgpConfigDeploymentType | undefined
  href?: string | undefined
  id?: string | undefined
  max_prefix?: number | undefined
  md5?: (string | null) | undefined
  project?: Href | undefined
  ranges?: GlobalBgpRange[] | undefined
  requested_at?: string | undefined
  route_object?: string | undefined
  sessions?: BgpSession[] | undefined
  status?: BgpConfigStatus | undefined
}
type BgpConfigRequestInputDeploymentType = 'local' | 'global'
type BgpConfigRequestInput = {
  asn: number
  deployment_type: BgpConfigRequestInputDeploymentType
  md5?: string | undefined
  use_case?: string | undefined
}
type DeviceCreateInputBillingCycle = 'hourly' | 'daily' | 'monthly' | 'yearly'
type IPAddressAddressFamily = 4 | 6
type IPAddress = {
  address_family?: IPAddressAddressFamily | undefined
  cidr?: number | undefined
  ip_reservations?: string[] | undefined
  public?: boolean | undefined
}
type SSHKeyInput = {
  key?: string | undefined
  label?: string | undefined
  tags?: string[] | undefined
}
type DeviceCreateInMetroInput = {
  metro: string
  always_pxe?: boolean | undefined
  billing_cycle?: DeviceCreateInputBillingCycle | undefined
  customdata?: { [x: string]: unknown } | undefined
  description?: string | undefined
  features?: string[] | undefined
  hardware_reservation_id?: string | undefined
  hostname?: string | undefined
  ip_addresses?: IPAddress[] | undefined
  ipxe_script_url?: string | undefined
  locked?: boolean | undefined
  network_frozen?: boolean | undefined
  no_ssh_keys?: boolean | undefined
  operating_system: string
  plan: string
  private_ipv4_subnet_size?: number | undefined
  project_ssh_keys?: string[] | undefined
  public_ipv4_subnet_size?: number | undefined
  spot_instance?: boolean | undefined
  spot_price_max?: number | undefined
  ssh_keys?: SSHKeyInput[] | undefined
  storage?: Storage | undefined
  tags?: string[] | undefined
  termination_time?: string | undefined
  user_ssh_keys?: string[] | undefined
  userdata?: string | undefined
}
type DeviceCreateInFacilityInput = {
  facility: string[]
  always_pxe?: boolean | undefined
  billing_cycle?: DeviceCreateInputBillingCycle | undefined
  customdata?: { [x: string]: unknown } | undefined
  description?: string | undefined
  features?: string[] | undefined
  hardware_reservation_id?: string | undefined
  hostname?: string | undefined
  ip_addresses?: IPAddress[] | undefined
  ipxe_script_url?: string | undefined
  locked?: boolean | undefined
  network_frozen?: boolean | undefined
  no_ssh_keys?: boolean | undefined
  operating_system: string
  plan: string
  private_ipv4_subnet_size?: number | undefined
  project_ssh_keys?: string[] | undefined
  public_ipv4_subnet_size?: number | undefined
  spot_instance?: boolean | undefined
  spot_price_max?: number | undefined
  ssh_keys?: SSHKeyInput[] | undefined
  storage?: Storage | undefined
  tags?: string[] | undefined
  termination_time?: string | undefined
  user_ssh_keys?: string[] | undefined
  userdata?: string | undefined
}
type CreateDeviceRequest = DeviceCreateInMetroInput | DeviceCreateInFacilityInput
type InstancesBatchCreateInputBatchesInner = {
  hostnames?: string[] | undefined
  quantity?: number | undefined
}
type InstancesBatchCreateInput = { batches?: InstancesBatchCreateInputBatchesInner[] | undefined }
type GlobalBgpRangeList = { global_bgp_ranges?: GlobalBgpRange[] | undefined }
type FindProjectHardwareReservationsStateParameter = 'active' | 'spare' | 'need_of_service'
type FindProjectHardwareReservationsProvisionableParameter = 'only'
type HardwareReservationList = {
  hardware_reservations?: HardwareReservation[] | undefined
  meta?: Meta | undefined
}
type FindIPReservationsTypesParameterInner =
  | 'global_ipv4'
  | 'private_ipv4'
  | 'public_ipv4'
  | 'public_ipv6'
  | 'vrf'
type IPReservationListIpAddressesInner = IPReservation | VrfIpReservation
type IPReservationList = {
  ip_addresses?: IPReservationListIpAddressesInner[] | undefined
  meta?: Meta | undefined
}
type IPReservationRequestInput = {
  comments?: string | undefined
  customdata?: { [x: string]: unknown } | undefined
  details?: string | undefined
  facility?: string | undefined
  fail_on_approval_required?: boolean | undefined
  metro?: string | undefined
  quantity: number
  tags?: string[] | undefined
  type: string
}
type VrfIpReservationCreateInput = {
  cidr: number
  customdata?: { [x: string]: unknown } | undefined
  details?: string | undefined
  network: string
  tags?: string[] | undefined
  type: string
  vrf_id: string
}
type RequestIPReservationRequest = IPReservationRequestInput | VrfIpReservationCreateInput
type RequestIPReservation_201Response = IPReservation | VrfIpReservation
type LicenseList = { licenses?: License[] | undefined }
type LicenseCreateInput = {
  description?: string | undefined
  licensee_product_id?: string | undefined
  size?: number | undefined
}
type SpotMarketRequestMetro = {
  code?: string | undefined
  country?: string | undefined
  id?: string | undefined
  name?: string | undefined
}
type SpotMarketRequest = {
  created_at?: string | undefined
  devices_max?: number | undefined
  devices_min?: number | undefined
  end_at?: string | undefined
  facilities?: Href | undefined
  href?: string | undefined
  id?: string | undefined
  instances?: Href | undefined
  max_bid_price?: number | undefined
  metro?: SpotMarketRequestMetro | undefined
  project?: Href | undefined
}
type SpotMarketRequestList = { spot_market_requests?: SpotMarketRequest[] | undefined }
type SpotMarketRequestCreateInputInstanceParameters = {
  always_pxe?: boolean | undefined
  billing_cycle?: string | undefined
  customdata?: { [x: string]: unknown } | undefined
  description?: string | undefined
  features?: string[] | undefined
  hostname?: string | undefined
  hostnames?: string[] | undefined
  locked?: boolean | undefined
  no_ssh_keys?: boolean | undefined
  operating_system?: string | undefined
  plan?: string | undefined
  private_ipv4_subnet_size?: number | undefined
  project_ssh_keys?: string[] | undefined
  public_ipv4_subnet_size?: number | undefined
  tags?: string[] | undefined
  termination_time?: string | undefined
  user_ssh_keys?: string[] | undefined
  userdata?: string | undefined
}
type SpotMarketRequestCreateInput = {
  devices_max?: number | undefined
  devices_min?: number | undefined
  end_at?: string | undefined
  facilities?: string[] | undefined
  instance_parameters?: SpotMarketRequestCreateInputInstanceParameters | undefined
  max_bid_price?: number | undefined
  metro?: string | undefined
}
type SSHKeyCreateInput = {
  instances_ids?: string[] | undefined
  key?: string | undefined
  label?: string | undefined
  tags?: string[] | undefined
}
type TransferRequestInput = { target_organization_id?: string | undefined }
type ProjectUsage = {
  facility?: string | undefined
  name?: string | undefined
  plan?: string | undefined
  plan_version?: string | undefined
  price?: string | undefined
  quantity?: string | undefined
  total?: string | undefined
  type?: string | undefined
  unit?: string | undefined
}
type ProjectUsageList = { usages?: ProjectUsage[] | undefined }
type VirtualNetworkList = { virtual_networks?: VirtualNetwork[] | undefined }
type VirtualNetworkCreateInput = {
  description?: string | undefined
  facility?: string | undefined
  metro?: string | undefined
  vxlan?: number | undefined
  tags?: string[] | undefined
}
type VrfList = { vrfs?: Vrf[] | undefined }
type VrfCreateInput = {
  bgp_dynamic_neighbors_enabled?: boolean | undefined
  bgp_dynamic_neighbors_export_route_map?: boolean | undefined
  bgp_dynamic_neighbors_bfd_enabled?: boolean | undefined
  description?: string | undefined
  ip_ranges?: string[] | undefined
  local_asn?: number | undefined
  metro: string
  name: string
  tags?: string[] | undefined
}
type MembershipList = { memberships?: Membership[] | undefined }
type MetalGatewayListMetalGatewaysInner = MetalGateway | VrfMetalGateway
type MetalGatewayList = {
  metal_gateways?: MetalGatewayListMetalGatewaysInner[] | undefined
  meta?: Meta | undefined
}
type MetalGatewayCreateInput = {
  ip_reservation_id?: string | undefined
  private_ipv4_subnet_size?: number | undefined
  virtual_network_id: string
}
type VrfMetalGatewayCreateInput = { ip_reservation_id: string; virtual_network_id: string }
type CreateMetalGatewayRequest = MetalGatewayCreateInput | VrfMetalGatewayCreateInput
type SelfServiceReservationItemResponse = {
  amount?: number | undefined
  id?: string | undefined
  metro_code?: string | undefined
  metro_id?: string | undefined
  metro_name?: string | undefined
  plan_id?: string | undefined
  plan_name?: string | undefined
  plan_slug?: string | undefined
  plan_categories?: string[] | undefined
  quantity?: number | undefined
  term?: string | undefined
}
type CreateSelfServiceReservationRequestPeriodCount = 12 | 36
type CreateSelfServiceReservationRequestPeriodUnit = 'monthly'
type CreateSelfServiceReservationRequestPeriod = {
  count?: CreateSelfServiceReservationRequestPeriodCount | undefined
  unit?: CreateSelfServiceReservationRequestPeriodUnit | undefined
}
type SelfServiceReservationResponse = {
  created_at?: string | undefined
  item?: SelfServiceReservationItemResponse[] | undefined
  notes?: string | undefined
  organization?: string | undefined
  organization_id?: string | undefined
  period?: CreateSelfServiceReservationRequestPeriod | undefined
  project?: string | undefined
  project_id?: string | undefined
  start_date?: string | undefined
  status?: string | undefined
  total_cost?: number | undefined
}
type SelfServiceReservationList = { reservations?: SelfServiceReservationResponse[] | undefined }
type SelfServiceReservationItemRequest = {
  amount?: number | undefined
  metro_id?: string | undefined
  plan_id?: string | undefined
  quantity?: number | undefined
  term?: string | undefined
}
type CreateSelfServiceReservationRequest = {
  item?: SelfServiceReservationItemRequest[] | undefined
  notes?: string | undefined
  period?: CreateSelfServiceReservationRequestPeriod | undefined
  start_date?: string | undefined
}
type NewPassword = { new_password?: string | undefined }
type VrfRouteStatus = 'pending' | 'active' | 'deleting' | 'error'
type VrfRouteType = 'static'
type VrfRoute = {
  id?: string | undefined
  status?: VrfRouteStatus | undefined
  prefix?: string | undefined
  next_hop?: string | undefined
  type?: VrfRouteType | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  metal_gateway?: VrfMetalGateway | undefined
  virtual_network?: VirtualNetwork | undefined
  vrf?: Vrf | undefined
  href?: string | undefined
  tags?: string[] | undefined
}
type VrfRouteUpdateInput = {
  prefix?: string | undefined
  next_hop?: string | undefined
  tags?: string[] | undefined
}
type SupportRequestInputPriority = 'urgent' | 'high' | 'medium' | 'low'
type SupportRequestInput = {
  device_id?: string | undefined
  message: string
  priority?: SupportRequestInputPriority | undefined
  project_id?: string | undefined
  subject: string
}
type UserUpdateInput = {
  customdata?: { [x: string]: unknown } | undefined
  first_name?: string | undefined
  last_name?: string | undefined
  password?: string | undefined
  phone_number?: string | undefined
  timezone?: string | undefined
}
type RecoveryCodeList = { recovery_codes?: string[] | undefined }
type UserList = { meta?: Meta | undefined; users?: User[] | undefined }
type EmailInput = { address: string; default?: boolean | undefined }
type UserCreateInput = {
  avatar?: File | undefined
  company_name?: string | undefined
  company_url?: string | undefined
  customdata?: { [x: string]: unknown } | undefined
  emails: EmailInput[]
  first_name: string
  last_name: string
  level?: string | undefined
  password?: string | undefined
  phone_number?: string | undefined
  social_accounts?: { [x: string]: unknown } | undefined
  timezone?: string | undefined
  title?: string | undefined
  two_factor_auth?: string | undefined
  verified_at?: string | undefined
  invitation_id?: string | undefined
  nonce?: string | undefined
}
type VerifyEmail = { user_token: string }
type VlanVirtualCircuitUpdateInput = {
  description?: string | undefined
  name?: string | undefined
  speed?: string | undefined
  tags?: string[] | undefined
  vnid?: string | undefined
}
type VrfVirtualCircuitUpdateInput = {
  customer_ip?: string | undefined
  description?: string | undefined
  md5?: string | undefined
  metal_ip?: string | undefined
  name?: string | undefined
  peer_asn?: number | undefined
  speed?: string | undefined
  subnet?: string | undefined
  tags?: string[] | undefined
}
type VirtualCircuitUpdateInput = VlanVirtualCircuitUpdateInput | VrfVirtualCircuitUpdateInput
type VrfUpdateInput = {
  bgp_dynamic_neighbors_enabled?: boolean | undefined
  bgp_dynamic_neighbors_export_route_map?: boolean | undefined
  bgp_dynamic_neighbors_bfd_enabled?: boolean | undefined
  description?: string | undefined
  ip_ranges?: string[] | undefined
  local_asn?: number | undefined
  name?: string | undefined
  tags?: string[] | undefined
}
type VrfIpReservationList = { ip_addresses?: VrfIpReservation[] | undefined }
type VrfRouteList = { routes?: VrfRoute[] | undefined; meta?: Meta | undefined }
type VrfRouteCreateInput = { prefix: string; next_hop: string; tags?: string[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api-keys/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/batches/:id': {
      $delete:
        | {
            input: { param: { id: string } } & {
              query: { remove_associated_instances?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & {
              query: { remove_associated_instances?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { remove_associated_instances?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: Batch
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/bgp/sessions/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: BgpSession
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & { json: boolean }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: boolean }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: boolean }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: boolean }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: boolean }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/bgp-dynamic-neighbors/:id': {
      $delete:
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: BgpDynamicNeighbor
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: BgpDynamicNeighbor
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/capacity': {
      $get:
        | { input: {}; output: CapacityList; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
      $post:
        | {
            input: { json: CapacityInput }
            output: CapacityCheckPerFacilityList
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: CapacityInput }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: CapacityInput }; output: Error; outputFormat: 'json'; status: 422 }
    }
  } & {
    '/capacity/metros': {
      $get:
        | { input: {}; output: CapacityList; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
      $post:
        | {
            input: { json: CapacityInput }
            output: CapacityCheckPerMetroList
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: CapacityInput }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: CapacityInput }; output: Error; outputFormat: 'json'; status: 422 }
    }
  } & {
    '/connections/:connection_id': {
      $delete:
        | {
            input: { param: { connection_id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Interconnection
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { connection_id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { connection_id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { connection_id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Interconnection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { connection_id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { connection_id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { connection_id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: InterconnectionUpdateInput }
            output: Interconnection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { connection_id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: InterconnectionUpdateInput }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { connection_id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: InterconnectionUpdateInput }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/connections/:connection_id/events': {
      $get:
        | {
            input: { param: { connection_id: string } } & {
              query: {
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: EventList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { connection_id: string } } & {
              query: {
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { connection_id: string } } & {
              query: {
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { connection_id: string } } & {
              query: {
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/connections/:connection_id/ports': {
      $get:
        | {
            input: { param: { connection_id: string } }
            output: InterconnectionPortList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { connection_id: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { connection_id: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/connections/:connection_id/virtual-circuits': {
      $get:
        | {
            input: { param: { connection_id: string } }
            output: VirtualCircuitList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { connection_id: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { connection_id: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/connections/:connection_id/ports/:id': {
      $get:
        | {
            input: { param: { connection_id: string; id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: InterconnectionPort
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { connection_id: string; id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { connection_id: string; id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/connections/:connection_id/ports/:id/events': {
      $get:
        | {
            input: { param: { connection_id: string; id: string } } & {
              query: {
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Event
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { connection_id: string; id: string } } & {
              query: {
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { connection_id: string; id: string } } & {
              query: {
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { connection_id: string; id: string } } & {
              query: {
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/connections/:connection_id/ports/:port_id/virtual-circuits': {
      $get:
        | {
            input: { param: { connection_id: string; port_id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: VirtualCircuitList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { connection_id: string; port_id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { connection_id: string; port_id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { connection_id: string; port_id: string } } & {
              json: VirtualCircuitCreateInput
            }
            output: VirtualCircuit
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { connection_id: string; port_id: string } } & {
              json: VirtualCircuitCreateInput
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { connection_id: string; port_id: string } } & {
              json: VirtualCircuitCreateInput
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/devices/:id': {
      $delete:
        | {
            input: { param: { id: string } } & { query: { force_delete?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { query: { force_delete?: boolean | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { force_delete?: boolean | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { force_delete?: boolean | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { force_delete?: boolean | undefined } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Device
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: DeviceUpdateInput }
            output: Device
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: DeviceUpdateInput }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: DeviceUpdateInput }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: DeviceUpdateInput }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: DeviceUpdateInput }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/devices/:id/actions': {
      $post:
        | {
            input: { param: { id: string } } & { json: DeviceActionInput }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { id: string } } & { json: DeviceActionInput }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: DeviceActionInput }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: DeviceActionInput }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/devices/:id/bandwidth': {
      $get:
        | {
            input: { param: { id: string } } & { query: { from: string; until: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { from: string; until: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { from: string; until: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/devices/:id/bgp/neighbors': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: BgpSessionNeighbors
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/devices/:id/bgp/sessions': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: BgpSessionList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: BGPSessionInput
            }
            output: BgpSession
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: BGPSessionInput
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: BGPSessionInput
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: BGPSessionInput
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/devices/:id/customdata': {
      $get:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/devices/:id/diagnostics/screenshot': {
      $get:
        | { input: { param: { id: string } }; output: File; outputFormat: 'text'; status: 200 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 501 }
    }
  } & {
    '/devices/:id/diagnostics/health/rollup': {
      $get:
        | {
            input: { param: { id: string } }
            output: DeviceHealthRollup
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/devices/:id/events': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: EventList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/devices/:id/firmware-sets': {
      $get:
        | {
            input: { param: { id: string } }
            output: FirmwareSetResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/devices/:id/ips': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: IPAssignmentList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: IPAssignmentInput }
            output: IPAssignment
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: IPAssignmentInput }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: IPAssignmentInput }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: IPAssignmentInput }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/devices/:id/metadata': {
      $get:
        | { input: { param: { id: string } }; output: Metadata; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 422 }
    }
  } & {
    '/devices/:id/ssh-keys': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { 'Search string'?: string | undefined; include?: string[] | undefined }
            }
            output: SSHKeyList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { 'Search string'?: string | undefined; include?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/devices/:id/traffic': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                direction: FindTrafficDirectionParameter
                interval?: FindTrafficIntervalParameter | undefined
                bucket?: FindTrafficBucketParameter | undefined
                timeframe?: FindTrafficTimeframeParameter | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                direction: FindTrafficDirectionParameter
                interval?: FindTrafficIntervalParameter | undefined
                bucket?: FindTrafficBucketParameter | undefined
                timeframe?: FindTrafficTimeframeParameter | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                direction: FindTrafficDirectionParameter
                interval?: FindTrafficIntervalParameter | undefined
                bucket?: FindTrafficBucketParameter | undefined
                timeframe?: FindTrafficTimeframeParameter | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                direction: FindTrafficDirectionParameter
                interval?: FindTrafficIntervalParameter | undefined
                bucket?: FindTrafficBucketParameter | undefined
                timeframe?: FindTrafficTimeframeParameter | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/devices/:id/usages': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'created[after]'?: string | undefined
                'created[before]'?: string | undefined
              }
            }
            output: DeviceUsageList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'created[after]'?: string | undefined
                'created[before]'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'created[after]'?: string | undefined
                'created[before]'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/devices/:id/userdata': {
      $get:
        | { input: { param: { id: string } }; output: Userdata; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 422 }
    }
  } & {
    '/devices/:instance_id/ips/:id/customdata': {
      $get:
        | {
            input: { param: { instance_id: string; id: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { instance_id: string; id: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { instance_id: string; id: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { instance_id: string; id: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/emails': {
      $post:
        | { input: { json: CreateEmailInput }; output: Email; outputFormat: 'json'; status: 201 }
        | { input: { json: CreateEmailInput }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: CreateEmailInput }; output: Error; outputFormat: 'json'; status: 422 }
    }
  } & {
    '/emails/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
      $get:
        | { input: { param: { id: string } }; output: Email; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
      $put:
        | {
            input: { param: { id: string } } & { json: UpdateEmailInput }
            output: Email
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: UpdateEmailInput }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: UpdateEmailInput }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: UpdateEmailInput }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: UpdateEmailInput }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/events': {
      $get:
        | {
            input: {
              query: {
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: EventList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/events/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Event
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
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
                include?: FindFacilitiesIncludeParameterInner[] | undefined
                exclude?: FindFacilitiesIncludeParameterInner[] | undefined
              }
            }
            output: FacilityList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                include?: FindFacilitiesIncludeParameterInner[] | undefined
                exclude?: FindFacilitiesIncludeParameterInner[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/hardware-reservations/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: HardwareReservation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/hardware-reservations/:id/activate': {
      $post:
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: ActivateHardwareReservationRequest }
            output: HardwareReservation
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: ActivateHardwareReservationRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: ActivateHardwareReservationRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: ActivateHardwareReservationRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/hardware-reservations/:id/move': {
      $post:
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: MoveHardwareReservationRequest }
            output: HardwareReservation
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: MoveHardwareReservationRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: MoveHardwareReservationRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: MoveHardwareReservationRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/incidents': {
      $get:
        | {
            input: { query: { include?: string[] | undefined; exclude?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { include?: string[] | undefined; exclude?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/invitations': {
      $get:
        | {
            input: {
              query: {
                include?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: InvitationList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                include?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                include?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                include?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/invitations/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: Invitation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: Membership
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/invoices/:id': {
      $get:
        | { input: { param: { id: string } }; output: Invoice; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/ips/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
      $get:
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: FindIPAddressById_200Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: IPAssignmentUpdateInput }
            output: FindIPAddressById_200Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: IPAssignmentUpdateInput }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: IPAssignmentUpdateInput }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: IPAssignmentUpdateInput }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ips/:id/available': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { cidr: FindIPAvailabilitiesCidrParameter }
            }
            output: IPAvailabilitiesList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { cidr: FindIPAvailabilitiesCidrParameter }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { cidr: FindIPAvailabilitiesCidrParameter }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { cidr: FindIPAvailabilitiesCidrParameter }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ips/:id/customdata': {
      $get:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/licenses/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
      $get:
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: License
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: LicenseUpdateInput }
            output: License
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: LicenseUpdateInput }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: LicenseUpdateInput }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: LicenseUpdateInput }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: LicenseUpdateInput }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/locations/metros': {
      $get:
        | { input: {}; output: MetroList; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/locations/metros/:id': {
      $get:
        | { input: { param: { id: string } }; output: Metro; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/market/spot/prices': {
      $get:
        | {
            input: { query: { facility?: string | undefined; plan?: string | undefined } }
            output: SpotMarketPricesList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { facility?: string | undefined; plan?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { facility?: string | undefined; plan?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/market/spot/prices/history': {
      $get:
        | {
            input: {
              query: {
                facility: string
                plan: string
                metro?: string | undefined
                from: string
                until: string
              }
            }
            output: SpotPricesHistoryReport
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                facility: string
                plan: string
                metro?: string | undefined
                from: string
                until: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                facility: string
                plan: string
                metro?: string | undefined
                from: string
                until: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/market/spot/prices/metros': {
      $get:
        | {
            input: { query: { metro?: string | undefined; plan?: string | undefined } }
            output: SpotMarketPricesPerMetroList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { metro?: string | undefined; plan?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { metro?: string | undefined; plan?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/memberships/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: Membership
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: MembershipInput
            }
            output: Membership
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: MembershipInput
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: MembershipInput
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: MembershipInput
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: MembershipInput
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/metal-gateways/:id': {
      $delete:
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: FindMetalGatewayById_200Response
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: FindMetalGatewayById_200Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/metal-gateways/:id/bgp-dynamic-neighbors': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: BgpDynamicNeighborList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: BgpDynamicNeighborCreateInput }
            output: BgpDynamicNeighbor
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: BgpDynamicNeighborCreateInput }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: BgpDynamicNeighborCreateInput }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: BgpDynamicNeighborCreateInput }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: BgpDynamicNeighborCreateInput }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/metal-gateways/:id/ips': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: IPAssignmentList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: MetalGatewayElasticIpCreateInput }
            output: IPAssignment
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: MetalGatewayElasticIpCreateInput }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: MetalGatewayElasticIpCreateInput }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: MetalGatewayElasticIpCreateInput }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: MetalGatewayElasticIpCreateInput }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/operating-system-versions': {
      $get:
        | { input: {}; output: OperatingSystemList; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/operating-systems': {
      $get:
        | { input: {}; output: OperatingSystemList; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/organizations': {
      $get:
        | {
            input: {
              query: {
                personal?: FindOrganizationsPersonalParameter | undefined
                without_projects?: FindOrganizationsPersonalParameter | undefined
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: OrganizationList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                personal?: FindOrganizationsPersonalParameter | undefined
                without_projects?: FindOrganizationsPersonalParameter | undefined
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { query: { include?: string[] | undefined; exclude?: string[] | undefined } } & {
              json: OrganizationInput
            }
            output: Organization
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { include?: string[] | undefined; exclude?: string[] | undefined } } & {
              json: OrganizationInput
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string[] | undefined; exclude?: string[] | undefined } } & {
              json: OrganizationInput
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { include?: string[] | undefined; exclude?: string[] | undefined } } & {
              json: OrganizationInput
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/organizations/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
      $get:
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Organization
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: OrganizationInput }
            output: Organization
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: OrganizationInput }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: OrganizationInput }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: OrganizationInput }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: OrganizationInput }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/organizations/:id/capacity': {
      $get:
        | {
            input: { param: { id: string } }
            output: CapacityList
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
    }
  } & {
    '/organizations/:id/capacity/metros': {
      $get:
        | {
            input: { param: { id: string } }
            output: CapacityList
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
    }
  } & {
    '/organizations/:id/customdata': {
      $get:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/organizations/:id/devices': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                search?: string | undefined
                categories?: FindOrganizationDevicesCategoriesParameterInner[] | undefined
                facility?: string | undefined
                hostname?: string | undefined
                reserved?: boolean | undefined
                tag?: string | undefined
                type?: string | undefined
                has_termination_time?: boolean | undefined
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: DeviceList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                search?: string | undefined
                categories?: FindOrganizationDevicesCategoriesParameterInner[] | undefined
                facility?: string | undefined
                hostname?: string | undefined
                reserved?: boolean | undefined
                tag?: string | undefined
                type?: string | undefined
                has_termination_time?: boolean | undefined
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                search?: string | undefined
                categories?: FindOrganizationDevicesCategoriesParameterInner[] | undefined
                facility?: string | undefined
                hostname?: string | undefined
                reserved?: boolean | undefined
                tag?: string | undefined
                type?: string | undefined
                has_termination_time?: boolean | undefined
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                search?: string | undefined
                categories?: FindOrganizationDevicesCategoriesParameterInner[] | undefined
                facility?: string | undefined
                hostname?: string | undefined
                reserved?: boolean | undefined
                tag?: string | undefined
                type?: string | undefined
                has_termination_time?: boolean | undefined
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organizations/:id/events': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: EventList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organizations/:id/facilities': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: FacilityList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organizations/:id/firmware-sets': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: FirmwareSetListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/organizations/:id/invitations': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                include?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: InvitationList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                include?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                include?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                include?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: InvitationInput
            }
            output: Invitation
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: InvitationInput
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: InvitationInput
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: InvitationInput
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: InvitationInput
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/organizations/:id/invoices': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                status?: string | undefined
              }
            }
            output: InvoiceList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                status?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                status?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organizations/:id/operating-systems': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: OperatingSystemList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organizations/:id/payment-methods': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                include?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: PaymentMethodList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                include?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                include?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: PaymentMethodCreateInput
            }
            output: PaymentMethod
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: PaymentMethodCreateInput
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: PaymentMethodCreateInput
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: PaymentMethodCreateInput
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/organizations/:id/plans': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: PlanList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/organizations/:id/projects': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                name?: string | undefined
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: ProjectList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                name?: string | undefined
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: ProjectCreateInput }
            output: Project
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: ProjectCreateInput }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: ProjectCreateInput }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/organizations/:id/transfers': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: TransferRequestList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/organizations/:organization_id/connections': {
      $get:
        | {
            input: { param: { organization_id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: InterconnectionList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organization_id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { organization_id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: CreateOrganizationInterconnectionRequest }
            output: Interconnection
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { organization_id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: CreateOrganizationInterconnectionRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organization_id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: CreateOrganizationInterconnectionRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organization_id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: CreateOrganizationInterconnectionRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/payment-methods/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: PaymentMethod
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: PaymentMethodUpdateInput
            }
            output: PaymentMethod
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: PaymentMethodUpdateInput
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: PaymentMethodUpdateInput
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: PaymentMethodUpdateInput
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/plans': {
      $get:
        | {
            input: {
              query: {
                categories?: FindOrganizationDevicesCategoriesParameterInner[] | undefined
                type?: FindPlansTypeParameter | undefined
                slug?: string | undefined
                include?: string[] | undefined
                exclude?: string[] | undefined
              }
            }
            output: PlanList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                categories?: FindOrganizationDevicesCategoriesParameterInner[] | undefined
                type?: FindPlansTypeParameter | undefined
                slug?: string | undefined
                include?: string[] | undefined
                exclude?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ports/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: Port
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ports/:id/assign': {
      $post:
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: PortAssignInput
            }
            output: Port
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: PortAssignInput
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: PortAssignInput
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: PortAssignInput
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: PortAssignInput
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/ports/:id/bond': {
      $post:
        | {
            input: { param: { id: string } } & {
              query: { bulk_enable?: boolean | undefined; include?: string[] | undefined }
            }
            output: Port
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { bulk_enable?: boolean | undefined; include?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { bulk_enable?: boolean | undefined; include?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { bulk_enable?: boolean | undefined; include?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { bulk_enable?: boolean | undefined; include?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/ports/:id/convert/layer-2': {
      $post:
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: PortAssignInput
            }
            output: Port
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: PortAssignInput
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: PortAssignInput
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: PortAssignInput
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: PortAssignInput
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/ports/:id/convert/layer-3': {
      $post:
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: PortConvertLayer3Input
            }
            output: Port
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: PortConvertLayer3Input
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: PortConvertLayer3Input
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: PortConvertLayer3Input
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: PortConvertLayer3Input
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/ports/:id/disbond': {
      $post:
        | {
            input: { param: { id: string } } & {
              query: { bulk_disable?: boolean | undefined; include?: string[] | undefined }
            }
            output: Port
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { bulk_disable?: boolean | undefined; include?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { bulk_disable?: boolean | undefined; include?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { bulk_disable?: boolean | undefined; include?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { bulk_disable?: boolean | undefined; include?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/ports/:id/native-vlan': {
      $delete:
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: Port
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
      $post:
        | {
            input: { param: { id: string } } & {
              query: { vnid: string; include?: string[] | undefined }
            }
            output: Port
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { vnid: string; include?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { vnid: string; include?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { vnid: string; include?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/ports/:id/unassign': {
      $post:
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: PortAssignInput
            }
            output: Port
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: PortAssignInput
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: PortAssignInput
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: PortAssignInput
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: PortAssignInput
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/ports/:id/vlan-assignments': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: PortVlanAssignmentList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ports/:id/vlan-assignments/:assignment_id': {
      $get:
        | {
            input: { param: { id: string; assignment_id: string } } & {
              query: { include?: string[] | undefined }
            }
            output: PortVlanAssignment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; assignment_id: string } } & {
              query: { include?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string; assignment_id: string } } & {
              query: { include?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string; assignment_id: string } } & {
              query: { include?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ports/:id/vlan-assignments/batches': {
      $get:
        | {
            input: { param: { id: string } }
            output: PortVlanAssignmentBatchList
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
      $post:
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: PortVlanAssignmentBatchCreateInput
            }
            output: PortVlanAssignmentBatch
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: PortVlanAssignmentBatchCreateInput
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: PortVlanAssignmentBatchCreateInput
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: PortVlanAssignmentBatchCreateInput
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: PortVlanAssignmentBatchCreateInput
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/ports/:id/vlan-assignments/batches/:batch_id': {
      $get:
        | {
            input: { param: { id: string; batch_id: string } } & {
              query: { include?: string[] | undefined }
            }
            output: PortVlanAssignmentBatch
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; batch_id: string } } & {
              query: { include?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string; batch_id: string } } & {
              query: { include?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string; batch_id: string } } & {
              query: { include?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/projects': {
      $get:
        | {
            input: {
              query: {
                name?: string | undefined
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: ProjectList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                name?: string | undefined
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { query: { include?: string[] | undefined; exclude?: string[] | undefined } } & {
              json: ProjectCreateFromRootInput
            }
            output: Project
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { include?: string[] | undefined; exclude?: string[] | undefined } } & {
              json: ProjectCreateFromRootInput
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string[] | undefined; exclude?: string[] | undefined } } & {
              json: ProjectCreateFromRootInput
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/projects/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
      $get:
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Project
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: ProjectUpdateInput }
            output: Project
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: ProjectUpdateInput }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: ProjectUpdateInput }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: ProjectUpdateInput }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: ProjectUpdateInput }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/projects/:id/api-keys': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: AuthTokenList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: AuthTokenInput
            }
            output: AuthToken
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: AuthTokenInput
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: AuthTokenInput
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: AuthTokenInput
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/projects/:id/batches': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: BatchesList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/projects/:id/bgp-config': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: BgpConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/projects/:id/bgp-configs': {
      $post:
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: BgpConfigRequestInput
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: BgpConfigRequestInput
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: BgpConfigRequestInput
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: BgpConfigRequestInput
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: BgpConfigRequestInput
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/projects/:id/bgp/sessions': {
      $get:
        | {
            input: { param: { id: string } }
            output: BgpSessionList
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/projects/:id/customdata': {
      $get:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/projects/:id/devices': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                search?: string | undefined
                categories?: FindOrganizationDevicesCategoriesParameterInner[] | undefined
                facility?: string | undefined
                metro?: string | undefined
                hostname?: string | undefined
                reserved?: boolean | undefined
                tag?: string | undefined
                type?: string | undefined
                has_termination_time?: boolean | undefined
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: DeviceList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                search?: string | undefined
                categories?: FindOrganizationDevicesCategoriesParameterInner[] | undefined
                facility?: string | undefined
                metro?: string | undefined
                hostname?: string | undefined
                reserved?: boolean | undefined
                tag?: string | undefined
                type?: string | undefined
                has_termination_time?: boolean | undefined
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                search?: string | undefined
                categories?: FindOrganizationDevicesCategoriesParameterInner[] | undefined
                facility?: string | undefined
                metro?: string | undefined
                hostname?: string | undefined
                reserved?: boolean | undefined
                tag?: string | undefined
                type?: string | undefined
                has_termination_time?: boolean | undefined
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                search?: string | undefined
                categories?: FindOrganizationDevicesCategoriesParameterInner[] | undefined
                facility?: string | undefined
                metro?: string | undefined
                hostname?: string | undefined
                reserved?: boolean | undefined
                tag?: string | undefined
                type?: string | undefined
                has_termination_time?: boolean | undefined
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: CreateDeviceRequest }
            output: Device
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: CreateDeviceRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: CreateDeviceRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: CreateDeviceRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: CreateDeviceRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/projects/:id/devices/batch': {
      $post:
        | {
            input: { param: { id: string } } & { json: InstancesBatchCreateInput }
            output: BatchesList
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & { json: InstancesBatchCreateInput }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: InstancesBatchCreateInput }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: InstancesBatchCreateInput }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: InstancesBatchCreateInput }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/projects/:id/events': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: EventList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/projects/:id/facilities': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: FacilityList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/projects/:id/firmware-sets': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: FirmwareSetListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/projects/:id/global-bgp-ranges': {
      $get:
        | {
            input: { param: { id: string } }
            output: GlobalBgpRangeList
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/projects/:id/hardware-reservations': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                query?: string | undefined
                state?: FindProjectHardwareReservationsStateParameter | undefined
                provisionable?: FindProjectHardwareReservationsProvisionableParameter | undefined
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: HardwareReservationList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                query?: string | undefined
                state?: FindProjectHardwareReservationsStateParameter | undefined
                provisionable?: FindProjectHardwareReservationsProvisionableParameter | undefined
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                query?: string | undefined
                state?: FindProjectHardwareReservationsStateParameter | undefined
                provisionable?: FindProjectHardwareReservationsProvisionableParameter | undefined
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                query?: string | undefined
                state?: FindProjectHardwareReservationsStateParameter | undefined
                provisionable?: FindProjectHardwareReservationsProvisionableParameter | undefined
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/projects/:id/ips': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                types?: FindIPReservationsTypesParameterInner[] | undefined
                include?: string[] | undefined
                exclude?: string[] | undefined
                per_page?: number | undefined
              }
            }
            output: IPReservationList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                types?: FindIPReservationsTypesParameterInner[] | undefined
                include?: string[] | undefined
                exclude?: string[] | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                types?: FindIPReservationsTypesParameterInner[] | undefined
                include?: string[] | undefined
                exclude?: string[] | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                types?: FindIPReservationsTypesParameterInner[] | undefined
                include?: string[] | undefined
                exclude?: string[] | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: RequestIPReservationRequest }
            output: RequestIPReservation_201Response
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: RequestIPReservationRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: RequestIPReservationRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: RequestIPReservationRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: RequestIPReservationRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/projects/:id/licenses': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: LicenseList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: LicenseCreateInput }
            output: License
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: LicenseCreateInput }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: LicenseCreateInput }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: LicenseCreateInput }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: LicenseCreateInput }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/projects/:id/plans': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: PlanList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/projects/:id/spot-market-requests': {
      $get:
        | {
            input: { param: { id: string } }
            output: SpotMarketRequestList
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
      $post:
        | {
            input: { param: { id: string } } & { json: SpotMarketRequestCreateInput }
            output: SpotMarketRequest
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & { json: SpotMarketRequestCreateInput }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: SpotMarketRequestCreateInput }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: SpotMarketRequestCreateInput }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/projects/:id/ssh-keys': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { query?: string | undefined; include?: string[] | undefined }
            }
            output: SSHKeyList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { query?: string | undefined; include?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: SSHKeyCreateInput
            }
            output: SSHKey
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: SSHKeyCreateInput
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: SSHKeyCreateInput
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/projects/:id/transfers': {
      $post:
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: TransferRequestInput
            }
            output: TransferRequest
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: TransferRequestInput
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: TransferRequestInput
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: TransferRequestInput
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: TransferRequestInput
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/projects/:id/usages': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                'created[after]'?: string | undefined
                'created[before]'?: string | undefined
              }
            }
            output: ProjectUsageList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'created[after]'?: string | undefined
                'created[before]'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                'created[after]'?: string | undefined
                'created[before]'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/projects/:id/virtual-networks': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                include?: string[] | undefined
                exclude?: string[] | undefined
                facility?: string | undefined
                metro?: string | undefined
              }
            }
            output: VirtualNetworkList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                include?: string[] | undefined
                exclude?: string[] | undefined
                facility?: string | undefined
                metro?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                include?: string[] | undefined
                exclude?: string[] | undefined
                facility?: string | undefined
                metro?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                include?: string[] | undefined
                exclude?: string[] | undefined
                facility?: string | undefined
                metro?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: VirtualNetworkCreateInput }
            output: VirtualNetwork
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: VirtualNetworkCreateInput }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: VirtualNetworkCreateInput }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: VirtualNetworkCreateInput }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: VirtualNetworkCreateInput }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/projects/:id/vrfs': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                include?: string[] | undefined
                exclude?: string[] | undefined
                metro?: string | undefined
              }
            }
            output: VrfList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                include?: string[] | undefined
                exclude?: string[] | undefined
                metro?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                include?: string[] | undefined
                exclude?: string[] | undefined
                metro?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: VrfCreateInput }
            output: Vrf
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: VrfCreateInput }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: VrfCreateInput }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: VrfCreateInput }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/projects/:project_id/connections': {
      $get:
        | {
            input: { param: { project_id: string } } & {
              query: {
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: InterconnectionList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & {
              query: {
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string } } & {
              query: {
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { project_id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: CreateOrganizationInterconnectionRequest }
            output: Interconnection
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { project_id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: CreateOrganizationInterconnectionRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: CreateOrganizationInterconnectionRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/projects/:project_id/invitations': {
      $get:
        | {
            input: { param: { project_id: string } } & {
              query: {
                include?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: InvitationList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & {
              query: {
                include?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_id: string } } & {
              query: {
                include?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string } } & {
              query: {
                include?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { project_id: string } } & {
              query: { include?: string[] | undefined }
            } & { json: InvitationInput }
            output: Invitation
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { project_id: string } } & {
              query: { include?: string[] | undefined }
            } & { json: InvitationInput }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_id: string } } & {
              query: { include?: string[] | undefined }
            } & { json: InvitationInput }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string } } & {
              query: { include?: string[] | undefined }
            } & { json: InvitationInput }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string } } & {
              query: { include?: string[] | undefined }
            } & { json: InvitationInput }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/projects/:project_id/ips/:id/customdata': {
      $get:
        | {
            input: { param: { project_id: string; id: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { project_id: string; id: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_id: string; id: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string; id: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/projects/:project_id/memberships': {
      $get:
        | {
            input: { param: { project_id: string } } & {
              query: {
                search?: string | undefined
                include?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: MembershipList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & {
              query: {
                search?: string | undefined
                include?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_id: string } } & {
              query: {
                search?: string | undefined
                include?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: string } } & {
              query: {
                search?: string | undefined
                include?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/projects/:project_id/metal-gateways': {
      $get:
        | {
            input: { param: { project_id: string } } & {
              query: {
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: MetalGatewayList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & {
              query: {
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_id: string } } & {
              query: {
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { project_id: string } } & {
              query: {
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            } & { json: CreateMetalGatewayRequest }
            output: FindMetalGatewayById_200Response
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { project_id: string } } & {
              query: {
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            } & { json: CreateMetalGatewayRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_id: string } } & {
              query: {
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            } & { json: CreateMetalGatewayRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { project_id: string } } & {
              query: {
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            } & { json: CreateMetalGatewayRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/projects/:project_id/self-service/reservations': {
      $get:
        | {
            input: { param: { project_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                categories?: FindOrganizationDevicesCategoriesParameterInner[] | undefined
              }
            }
            output: SelfServiceReservationList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                categories?: FindOrganizationDevicesCategoriesParameterInner[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { param: { project_id: string } } & { json: CreateSelfServiceReservationRequest }
            output: SelfServiceReservationResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { project_id: string } } & { json: CreateSelfServiceReservationRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_id: string } } & { json: CreateSelfServiceReservationRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/projects/:project_id/self-service/reservations/:id': {
      $get:
        | {
            input: { param: { id: string; project_id: string } }
            output: SelfServiceReservationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; project_id: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string; project_id: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/reset-password': {
      $delete:
        | { input: {}; output: NewPassword; outputFormat: 'json'; status: 201 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 422 }
      $post:
        | { input: { query: { email: string } }; output: {}; outputFormat: string; status: 201 }
        | { input: { query: { email: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { query: { email: string } }; output: Error; outputFormat: 'json'; status: 422 }
    }
  } & {
    '/routes/:id': {
      $delete:
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: VrfRoute
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: VrfRoute
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: VrfRouteUpdateInput }
            output: VrfRoute
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: VrfRouteUpdateInput }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: VrfRouteUpdateInput }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: VrfRouteUpdateInput }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: VrfRouteUpdateInput }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: VrfRouteUpdateInput }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/routes/:id/events': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Event
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/spot-market-requests/:id': {
      $delete:
        | {
            input: { param: { id: string } } & {
              query: { force_termination?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & {
              query: { force_termination?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { force_termination?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { force_termination?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: SpotMarketRequest
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ssh-keys': {
      $get:
        | {
            input: { query: { search?: string | undefined; include?: string[] | undefined } }
            output: SSHKeyList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { search?: string | undefined; include?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { query: { include?: string[] | undefined } } & { json: SSHKeyCreateInput }
            output: SSHKey
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { include?: string[] | undefined } } & { json: SSHKeyCreateInput }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string[] | undefined } } & { json: SSHKeyCreateInput }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/ssh-keys/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: SSHKey
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: SSHKeyInput
            }
            output: SSHKey
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: SSHKeyInput
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: SSHKeyInput
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: SSHKeyInput
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } } & {
              json: SSHKeyInput
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/support-requests': {
      $post:
        | { input: { json: SupportRequestInput }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: SupportRequestInput }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: SupportRequestInput }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { json: SupportRequestInput }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { json: SupportRequestInput }; output: Error; outputFormat: 'json'; status: 422 }
    }
  } & {
    '/transfers/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: TransferRequest
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { include?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/user': {
      $get:
        | {
            input: { query: { include?: string[] | undefined; exclude?: string[] | undefined } }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include?: string[] | undefined; exclude?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
      $put:
        | {
            input: { query: { include?: string[] | undefined; exclude?: string[] | undefined } } & {
              json: UserUpdateInput
            }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include?: string[] | undefined; exclude?: string[] | undefined } } & {
              json: UserUpdateInput
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string[] | undefined; exclude?: string[] | undefined } } & {
              json: UserUpdateInput
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/user/api-keys': {
      $get:
        | {
            input: { query: { search?: string | undefined; include?: string[] | undefined } }
            output: AuthTokenList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { search?: string | undefined; include?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { search?: string | undefined; include?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { query: { include?: string[] | undefined } } & { json: AuthTokenInput }
            output: AuthToken
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { include?: string[] | undefined } } & { json: AuthTokenInput }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string[] | undefined } } & { json: AuthTokenInput }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { include?: string[] | undefined } } & { json: AuthTokenInput }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/user/api-keys/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/user/otp/app': {
      $delete:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 404 }
      $post:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/user/otp/recovery-codes': {
      $get:
        | { input: {}; output: RecoveryCodeList; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 404 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 422 }
      $post:
        | { input: {}; output: RecoveryCodeList; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 404 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 422 }
    }
  } & {
    '/user/otp/sms': {
      $delete:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 404 }
      $post:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/user/otp/sms/receive': {
      $post:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 400 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 422 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/user/otp/verify/:otp': {
      $post:
        | { input: { param: { otp: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { otp: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { param: { otp: string } }; output: Error; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/userdata/validate': {
      $post:
        | {
            input: { query: { userdata?: string | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { userdata?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { userdata?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/users': {
      $get:
        | {
            input: {
              query: {
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: UserList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { query: { include?: string[] | undefined; exclude?: string[] | undefined } } & {
              json: UserCreateInput
            }
            output: User
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { include?: string[] | undefined; exclude?: string[] | undefined } } & {
              json: UserCreateInput
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string[] | undefined; exclude?: string[] | undefined } } & {
              json: UserCreateInput
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/users/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/users/:id/customdata': {
      $get:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/verify-email': {
      $post:
        | {
            input: { query: { login: string; include?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { query: { login: string; include?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { login: string; include?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
      $put:
        | {
            input: { query: { include?: string[] | undefined } } & { json: VerifyEmail }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { include?: string[] | undefined } } & { json: VerifyEmail }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { include?: string[] | undefined } } & { json: VerifyEmail }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/virtual-circuits/:id/events': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Event
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/virtual-circuits/:id': {
      $delete:
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: VirtualCircuit
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: VirtualCircuit
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: VirtualCircuitUpdateInput }
            output: VirtualCircuit
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: VirtualCircuitUpdateInput }
            output: VirtualCircuit
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: VirtualCircuitUpdateInput }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: VirtualCircuitUpdateInput }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/virtual-networks/:id': {
      $delete:
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: VirtualNetwork
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: VirtualNetwork
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/vrfs/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
      $get:
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Vrf
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: VrfUpdateInput }
            output: Vrf
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: VrfUpdateInput }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: VrfUpdateInput }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: VrfUpdateInput }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: VrfUpdateInput }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/vrfs/:id/ips': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: VrfIpReservationList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/vrfs/:vrf_id/ips/:id': {
      $get:
        | {
            input: { param: { vrf_id: string; id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: VrfIpReservation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { vrf_id: string; id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { vrf_id: string; id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/vrfs/:id/routes': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: VrfRouteList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: VrfRouteCreateInput }
            output: VrfRoute
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: VrfRouteCreateInput }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: VrfRouteCreateInput }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: VrfRouteCreateInput }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { include?: string[] | undefined; exclude?: string[] | undefined }
            } & { json: VrfRouteCreateInput }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  },
  '/'
>
export default routes
