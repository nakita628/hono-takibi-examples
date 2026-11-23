type NestedCable = { id?: number | undefined; label?: string | undefined; url?: string | undefined }
type NestedCircuit = { cid: string; id?: number | undefined; url?: string | undefined }
type NestedSite = { id?: number | undefined; name: string; slug: string; url?: string | undefined }
type CircuitTermination = {
  cable?: NestedCable | undefined
  circuit: NestedCircuit
  connected_endpoint?: { [x: string]: string } | undefined
  connected_endpoint_type?: string | undefined
  connection_status?: { label: 'Not Connected' | 'Connected'; value: false | true } | undefined
  description?: string | undefined
  id?: number | undefined
  port_speed: number
  pp_info?: string | undefined
  site: NestedSite
  term_side: 'A' | 'Z'
  upstream_speed?: (number | null) | undefined
  xconnect_id?: string | undefined
}
type WritableCircuitTermination = {
  cable?: NestedCable | undefined
  circuit: number
  connected_endpoint?: { [x: string]: string } | undefined
  connected_endpoint_type?: string | undefined
  connection_status?: false | true | undefined
  description?: string | undefined
  id?: number | undefined
  port_speed: number
  pp_info?: string | undefined
  site: number
  term_side: 'A' | 'Z'
  upstream_speed?: (number | null) | undefined
  xconnect_id?: string | undefined
}
type CircuitType = {
  circuit_count?: number | undefined
  description?: string | undefined
  id?: number | undefined
  name: string
  slug: string
}
type NestedProvider = {
  circuit_count?: number | undefined
  id?: number | undefined
  name: string
  slug: string
  url?: string | undefined
}
type NestedTenant = {
  id?: number | undefined
  name: string
  slug: string
  url?: string | undefined
}
type NestedDevice = {
  display_name?: string | undefined
  id?: number | undefined
  name?: (string | null) | undefined
  url?: string | undefined
}
type NestedInterface = {
  cable?: (number | null) | undefined
  connection_status?: { label: 'Not Connected' | 'Connected'; value: false | true } | undefined
  device?: NestedDevice | undefined
  id?: number | undefined
  name: string
  url?: string | undefined
}
type CircuitCircuitTermination = {
  connected_endpoint: NestedInterface
  id?: number | undefined
  port_speed: number
  site: NestedSite
  upstream_speed?: (number | null) | undefined
  url?: string | undefined
  xconnect_id?: string | undefined
}
type NestedCircuitType = {
  circuit_count?: number | undefined
  id?: number | undefined
  name: string
  slug: string
  url?: string | undefined
}
type Circuit = {
  cid: string
  comments?: string | undefined
  commit_rate?: (number | null) | undefined
  created?: string | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  id?: number | undefined
  install_date?: (string | null) | undefined
  last_updated?: string | undefined
  provider: NestedProvider
  status?:
    | {
        label:
          | 'Planned'
          | 'Provisioning'
          | 'Active'
          | 'Offline'
          | 'Deprovisioning'
          | 'Decommissioned'
        value:
          | 'planned'
          | 'provisioning'
          | 'active'
          | 'offline'
          | 'deprovisioning'
          | 'decommissioned'
      }
    | undefined
  tags?: string[] | undefined
  tenant?: NestedTenant | undefined
  termination_a?: CircuitCircuitTermination | undefined
  termination_z?: CircuitCircuitTermination | undefined
  type: NestedCircuitType
}
type WritableCircuit = {
  cid: string
  comments?: string | undefined
  commit_rate?: (number | null) | undefined
  created?: string | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  id?: number | undefined
  install_date?: (string | null) | undefined
  last_updated?: string | undefined
  provider: number
  status?:
    | 'planned'
    | 'provisioning'
    | 'active'
    | 'offline'
    | 'deprovisioning'
    | 'decommissioned'
    | undefined
  tags?: string[] | undefined
  tenant?: (number | null) | undefined
  termination_a?: string | undefined
  termination_z?: string | undefined
  type: number
}
type Provider = {
  account?: string | undefined
  admin_contact?: string | undefined
  asn?: (number | null) | undefined
  circuit_count?: number | undefined
  comments?: string | undefined
  created?: string | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  id?: number | undefined
  last_updated?: string | undefined
  name: string
  noc_contact?: string | undefined
  portal_url?: string | undefined
  slug: string
  tags?: string[] | undefined
}
type Cable = {
  color?: string | undefined
  id?: number | undefined
  label?: string | undefined
  length?: (number | null) | undefined
  length_unit?:
    | { label: 'Meters' | 'Centimeters' | 'Feet' | 'Inches'; value: 'm' | 'cm' | 'ft' | 'in' }
    | undefined
  status?:
    | {
        label: 'Connected' | 'Planned' | 'Decommissioning'
        value: 'connected' | 'planned' | 'decommissioning'
      }
    | undefined
  termination_a?: { [x: string]: string } | undefined
  termination_a_id: number
  termination_a_type: string
  termination_b?: { [x: string]: string } | undefined
  termination_b_id: number
  termination_b_type: string
  type?:
    | 'cat3'
    | 'cat5'
    | 'cat5e'
    | 'cat6'
    | 'cat6a'
    | 'cat7'
    | 'dac-active'
    | 'dac-passive'
    | 'mrj21-trunk'
    | 'coaxial'
    | 'mmf'
    | 'mmf-om1'
    | 'mmf-om2'
    | 'mmf-om3'
    | 'mmf-om4'
    | 'smf'
    | 'smf-os1'
    | 'smf-os2'
    | 'aoc'
    | 'power'
    | undefined
}
type WritableCable = {
  color?: string | undefined
  id?: number | undefined
  label?: string | undefined
  length?: (number | null) | undefined
  length_unit?: 'm' | 'cm' | 'ft' | 'in' | undefined
  status?: 'connected' | 'planned' | 'decommissioning' | undefined
  termination_a?: { [x: string]: string } | undefined
  termination_a_id: number
  termination_a_type: string
  termination_b?: { [x: string]: string } | undefined
  termination_b_id: number
  termination_b_type: string
  type?:
    | 'cat3'
    | 'cat5'
    | 'cat5e'
    | 'cat6'
    | 'cat6a'
    | 'cat7'
    | 'dac-active'
    | 'dac-passive'
    | 'mrj21-trunk'
    | 'coaxial'
    | 'mmf'
    | 'mmf-om1'
    | 'mmf-om2'
    | 'mmf-om3'
    | 'mmf-om4'
    | 'smf'
    | 'smf-os1'
    | 'smf-os2'
    | 'aoc'
    | 'power'
    | undefined
}
type NestedCluster = {
  id?: number | undefined
  name: string
  url?: string | undefined
  virtualmachine_count?: number | undefined
}
type NestedDeviceRole = {
  device_count?: number | undefined
  id?: number | undefined
  name: string
  slug: string
  url?: string | undefined
  virtualmachine_count?: number | undefined
}
type NestedManufacturer = {
  devicetype_count?: number | undefined
  id?: number | undefined
  name: string
  slug: string
  url?: string | undefined
}
type NestedDeviceType = {
  device_count?: number | undefined
  display_name?: string | undefined
  id?: number | undefined
  manufacturer?: NestedManufacturer | undefined
  model: string
  slug: string
  url?: string | undefined
}
type NestedPlatform = {
  device_count?: number | undefined
  id?: number | undefined
  name: string
  slug: string
  url?: string | undefined
  virtualmachine_count?: number | undefined
}
type NestedIPAddress = {
  address: string
  family?: string | undefined
  id?: number | undefined
  url?: string | undefined
}
type NestedRack = {
  device_count?: number | undefined
  display_name?: string | undefined
  id?: number | undefined
  name: string
  url?: string | undefined
}
type NestedVirtualChassis = {
  id?: number | undefined
  master: NestedDevice
  member_count?: number | undefined
  url?: string | undefined
}
type Device = {
  asset_tag?: (string | null) | undefined
  cluster?: NestedCluster | undefined
  comments?: string | undefined
  created?: string | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  device_role: NestedDeviceRole
  device_type: NestedDeviceType
  display_name?: string | undefined
  face?: { label: 'Front' | 'Rear'; value: 'front' | 'rear' } | undefined
  id?: number | undefined
  last_updated?: string | undefined
  local_context_data?: (string | null) | undefined
  name?: (string | null) | undefined
  parent_device?: NestedDevice | undefined
  platform?: NestedPlatform | undefined
  position?: (number | null) | undefined
  primary_ip?: NestedIPAddress | undefined
  primary_ip4?: NestedIPAddress | undefined
  primary_ip6?: NestedIPAddress | undefined
  rack?: NestedRack | undefined
  serial?: string | undefined
  site: NestedSite
  status?:
    | {
        label:
          | 'Offline'
          | 'Active'
          | 'Planned'
          | 'Staged'
          | 'Failed'
          | 'Inventory'
          | 'Decommissioning'
        value:
          | 'offline'
          | 'active'
          | 'planned'
          | 'staged'
          | 'failed'
          | 'inventory'
          | 'decommissioning'
      }
    | undefined
  tags?: string[] | undefined
  tenant?: NestedTenant | undefined
  vc_position?: (number | null) | undefined
  vc_priority?: (number | null) | undefined
  virtual_chassis?: NestedVirtualChassis | undefined
}
type ConsolePort = {
  cable?: NestedCable | undefined
  connected_endpoint?: { [x: string]: string } | undefined
  connected_endpoint_type?: string | undefined
  connection_status?: { label: 'Not Connected' | 'Connected'; value: false | true } | undefined
  description?: string | undefined
  device: NestedDevice
  id?: number | undefined
  name: string
  tags?: string[] | undefined
  type?:
    | {
        label:
          | 'DE-9'
          | 'DB-25'
          | 'RJ-11'
          | 'RJ-12'
          | 'RJ-45'
          | 'USB Type A'
          | 'USB Type B'
          | 'USB Type C'
          | 'USB Mini A'
          | 'USB Mini B'
          | 'USB Micro A'
          | 'USB Micro B'
          | 'Other'
        value:
          | 'de-9'
          | 'db-25'
          | 'rj-11'
          | 'rj-12'
          | 'rj-45'
          | 'usb-a'
          | 'usb-b'
          | 'usb-c'
          | 'usb-mini-a'
          | 'usb-mini-b'
          | 'usb-micro-a'
          | 'usb-micro-b'
          | 'other'
      }
    | undefined
}
type ConsolePortTemplate = {
  device_type: NestedDeviceType
  id?: number | undefined
  name: string
  type?:
    | {
        label:
          | 'DE-9'
          | 'DB-25'
          | 'RJ-11'
          | 'RJ-12'
          | 'RJ-45'
          | 'USB Type A'
          | 'USB Type B'
          | 'USB Type C'
          | 'USB Mini A'
          | 'USB Mini B'
          | 'USB Micro A'
          | 'USB Micro B'
          | 'Other'
        value:
          | 'de-9'
          | 'db-25'
          | 'rj-11'
          | 'rj-12'
          | 'rj-45'
          | 'usb-a'
          | 'usb-b'
          | 'usb-c'
          | 'usb-mini-a'
          | 'usb-mini-b'
          | 'usb-micro-a'
          | 'usb-micro-b'
          | 'other'
      }
    | undefined
}
type WritableConsolePortTemplate = {
  device_type: number
  id?: number | undefined
  name: string
  type?:
    | 'de-9'
    | 'db-25'
    | 'rj-11'
    | 'rj-12'
    | 'rj-45'
    | 'usb-a'
    | 'usb-b'
    | 'usb-c'
    | 'usb-mini-a'
    | 'usb-mini-b'
    | 'usb-micro-a'
    | 'usb-micro-b'
    | 'other'
    | undefined
}
type WritableConsolePort = {
  cable?: NestedCable | undefined
  connected_endpoint?: { [x: string]: string } | undefined
  connected_endpoint_type?: string | undefined
  connection_status?: false | true | undefined
  description?: string | undefined
  device: number
  id?: number | undefined
  name: string
  tags?: string[] | undefined
  type?:
    | 'de-9'
    | 'db-25'
    | 'rj-11'
    | 'rj-12'
    | 'rj-45'
    | 'usb-a'
    | 'usb-b'
    | 'usb-c'
    | 'usb-mini-a'
    | 'usb-mini-b'
    | 'usb-micro-a'
    | 'usb-micro-b'
    | 'other'
    | undefined
}
type ConsoleServerPortTemplate = {
  device_type: NestedDeviceType
  id?: number | undefined
  name: string
  type?:
    | {
        label:
          | 'DE-9'
          | 'DB-25'
          | 'RJ-11'
          | 'RJ-12'
          | 'RJ-45'
          | 'USB Type A'
          | 'USB Type B'
          | 'USB Type C'
          | 'USB Mini A'
          | 'USB Mini B'
          | 'USB Micro A'
          | 'USB Micro B'
          | 'Other'
        value:
          | 'de-9'
          | 'db-25'
          | 'rj-11'
          | 'rj-12'
          | 'rj-45'
          | 'usb-a'
          | 'usb-b'
          | 'usb-c'
          | 'usb-mini-a'
          | 'usb-mini-b'
          | 'usb-micro-a'
          | 'usb-micro-b'
          | 'other'
      }
    | undefined
}
type WritableConsoleServerPortTemplate = {
  device_type: number
  id?: number | undefined
  name: string
  type?:
    | 'de-9'
    | 'db-25'
    | 'rj-11'
    | 'rj-12'
    | 'rj-45'
    | 'usb-a'
    | 'usb-b'
    | 'usb-c'
    | 'usb-mini-a'
    | 'usb-mini-b'
    | 'usb-micro-a'
    | 'usb-micro-b'
    | 'other'
    | undefined
}
type ConsoleServerPort = {
  cable?: NestedCable | undefined
  connected_endpoint?: { [x: string]: string } | undefined
  connected_endpoint_type?: string | undefined
  connection_status?: { label: 'Not Connected' | 'Connected'; value: false | true } | undefined
  description?: string | undefined
  device: NestedDevice
  id?: number | undefined
  name: string
  tags?: string[] | undefined
  type?:
    | {
        label:
          | 'DE-9'
          | 'DB-25'
          | 'RJ-11'
          | 'RJ-12'
          | 'RJ-45'
          | 'USB Type A'
          | 'USB Type B'
          | 'USB Type C'
          | 'USB Mini A'
          | 'USB Mini B'
          | 'USB Micro A'
          | 'USB Micro B'
          | 'Other'
        value:
          | 'de-9'
          | 'db-25'
          | 'rj-11'
          | 'rj-12'
          | 'rj-45'
          | 'usb-a'
          | 'usb-b'
          | 'usb-c'
          | 'usb-mini-a'
          | 'usb-mini-b'
          | 'usb-micro-a'
          | 'usb-micro-b'
          | 'other'
      }
    | undefined
}
type WritableConsoleServerPort = {
  cable?: NestedCable | undefined
  connected_endpoint?: { [x: string]: string } | undefined
  connected_endpoint_type?: string | undefined
  connection_status?: false | true | undefined
  description?: string | undefined
  device: number
  id?: number | undefined
  name: string
  tags?: string[] | undefined
  type?:
    | 'de-9'
    | 'db-25'
    | 'rj-11'
    | 'rj-12'
    | 'rj-45'
    | 'usb-a'
    | 'usb-b'
    | 'usb-c'
    | 'usb-mini-a'
    | 'usb-mini-b'
    | 'usb-micro-a'
    | 'usb-micro-b'
    | 'other'
    | undefined
}
type DeviceBayTemplate = { device_type: NestedDeviceType; id?: number | undefined; name: string }
type WritableDeviceBayTemplate = { device_type: number; id?: number | undefined; name: string }
type DeviceBay = {
  description?: string | undefined
  device: NestedDevice
  id?: number | undefined
  installed_device?: NestedDevice | undefined
  name: string
  tags?: string[] | undefined
}
type WritableDeviceBay = {
  description?: string | undefined
  device: number
  id?: number | undefined
  installed_device?: (number | null) | undefined
  name: string
  tags?: string[] | undefined
}
type DeviceRole = {
  color?: string | undefined
  description?: string | undefined
  device_count?: number | undefined
  id?: number | undefined
  name: string
  slug: string
  virtualmachine_count?: number | undefined
  vm_role?: boolean | undefined
}
type DeviceType = {
  comments?: string | undefined
  created?: string | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  device_count?: number | undefined
  display_name?: string | undefined
  front_image?: string | undefined
  id?: number | undefined
  is_full_depth?: boolean | undefined
  last_updated?: string | undefined
  manufacturer: NestedManufacturer
  model: string
  part_number?: string | undefined
  rear_image?: string | undefined
  slug: string
  subdevice_role?: { label: 'Parent' | 'Child'; value: 'parent' | 'child' } | undefined
  tags?: string[] | undefined
  u_height?: number | undefined
}
type WritableDeviceType = {
  comments?: string | undefined
  created?: string | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  device_count?: number | undefined
  display_name?: string | undefined
  front_image?: string | undefined
  id?: number | undefined
  is_full_depth?: boolean | undefined
  last_updated?: string | undefined
  manufacturer: number
  model: string
  part_number?: string | undefined
  rear_image?: string | undefined
  slug: string
  subdevice_role?: 'parent' | 'child' | undefined
  tags?: string[] | undefined
  u_height?: number | undefined
}
type DeviceWithConfigContext = {
  asset_tag?: (string | null) | undefined
  cluster?: NestedCluster | undefined
  comments?: string | undefined
  config_context?: { [x: string]: string } | undefined
  created?: string | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  device_role: NestedDeviceRole
  device_type: NestedDeviceType
  display_name?: string | undefined
  face?: { label: 'Front' | 'Rear'; value: 'front' | 'rear' } | undefined
  id?: number | undefined
  last_updated?: string | undefined
  local_context_data?: (string | null) | undefined
  name?: (string | null) | undefined
  parent_device?: NestedDevice | undefined
  platform?: NestedPlatform | undefined
  position?: (number | null) | undefined
  primary_ip?: NestedIPAddress | undefined
  primary_ip4?: NestedIPAddress | undefined
  primary_ip6?: NestedIPAddress | undefined
  rack?: NestedRack | undefined
  serial?: string | undefined
  site: NestedSite
  status?:
    | {
        label:
          | 'Offline'
          | 'Active'
          | 'Planned'
          | 'Staged'
          | 'Failed'
          | 'Inventory'
          | 'Decommissioning'
        value:
          | 'offline'
          | 'active'
          | 'planned'
          | 'staged'
          | 'failed'
          | 'inventory'
          | 'decommissioning'
      }
    | undefined
  tags?: string[] | undefined
  tenant?: NestedTenant | undefined
  vc_position?: (number | null) | undefined
  vc_priority?: (number | null) | undefined
  virtual_chassis?: NestedVirtualChassis | undefined
}
type WritableDeviceWithConfigContext = {
  asset_tag?: (string | null) | undefined
  cluster?: (number | null) | undefined
  comments?: string | undefined
  config_context?: { [x: string]: string } | undefined
  created?: string | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  device_role: number
  device_type: number
  display_name?: string | undefined
  face?: 'front' | 'rear' | undefined
  id?: number | undefined
  last_updated?: string | undefined
  local_context_data?: (string | null) | undefined
  name?: (string | null) | undefined
  parent_device?: NestedDevice | undefined
  platform?: (number | null) | undefined
  position?: (number | null) | undefined
  primary_ip?: string | undefined
  primary_ip4?: (number | null) | undefined
  primary_ip6?: (number | null) | undefined
  rack?: (number | null) | undefined
  serial?: string | undefined
  site: number
  status?:
    | 'offline'
    | 'active'
    | 'planned'
    | 'staged'
    | 'failed'
    | 'inventory'
    | 'decommissioning'
    | undefined
  tags?: string[] | undefined
  tenant?: (number | null) | undefined
  vc_position?: (number | null) | undefined
  vc_priority?: (number | null) | undefined
  virtual_chassis?: (number | null) | undefined
}
type DeviceNAPALM = { method: { [x: string]: string } }
type NestedRearPortTemplate = { id?: number | undefined; name: string; url?: string | undefined }
type FrontPortTemplate = {
  device_type: NestedDeviceType
  id?: number | undefined
  name: string
  rear_port: NestedRearPortTemplate
  rear_port_position?: number | undefined
  type: {
    label:
      | '8P8C'
      | '110 Punch'
      | 'BNC'
      | 'MRJ21'
      | 'FC'
      | 'LC'
      | 'LC/APC'
      | 'LSH'
      | 'LSH/APC'
      | 'MPO'
      | 'MTRJ'
      | 'SC'
      | 'SC/APC'
      | 'ST'
    value:
      | '8p8c'
      | '110-punch'
      | 'bnc'
      | 'mrj21'
      | 'fc'
      | 'lc'
      | 'lc-apc'
      | 'lsh'
      | 'lsh-apc'
      | 'mpo'
      | 'mtrj'
      | 'sc'
      | 'sc-apc'
      | 'st'
  }
}
type WritableFrontPortTemplate = {
  device_type: number
  id?: number | undefined
  name: string
  rear_port: number
  rear_port_position?: number | undefined
  type:
    | '8p8c'
    | '110-punch'
    | 'bnc'
    | 'mrj21'
    | 'fc'
    | 'lc'
    | 'lc-apc'
    | 'lsh'
    | 'lsh-apc'
    | 'mpo'
    | 'mtrj'
    | 'sc'
    | 'sc-apc'
    | 'st'
}
type FrontPortRearPort = { id?: number | undefined; name: string; url?: string | undefined }
type FrontPort = {
  cable?: NestedCable | undefined
  description?: string | undefined
  device: NestedDevice
  id?: number | undefined
  name: string
  rear_port: FrontPortRearPort
  rear_port_position?: number | undefined
  tags?: string[] | undefined
  type: {
    label:
      | '8P8C'
      | '110 Punch'
      | 'BNC'
      | 'MRJ21'
      | 'FC'
      | 'LC'
      | 'LC/APC'
      | 'LSH'
      | 'LSH/APC'
      | 'MPO'
      | 'MTRJ'
      | 'SC'
      | 'SC/APC'
      | 'ST'
    value:
      | '8p8c'
      | '110-punch'
      | 'bnc'
      | 'mrj21'
      | 'fc'
      | 'lc'
      | 'lc-apc'
      | 'lsh'
      | 'lsh-apc'
      | 'mpo'
      | 'mtrj'
      | 'sc'
      | 'sc-apc'
      | 'st'
  }
}
type WritableFrontPort = {
  cable?: NestedCable | undefined
  description?: string | undefined
  device: number
  id?: number | undefined
  name: string
  rear_port: number
  rear_port_position?: number | undefined
  tags?: string[] | undefined
  type:
    | '8p8c'
    | '110-punch'
    | 'bnc'
    | 'mrj21'
    | 'fc'
    | 'lc'
    | 'lc-apc'
    | 'lsh'
    | 'lsh-apc'
    | 'mpo'
    | 'mtrj'
    | 'sc'
    | 'sc-apc'
    | 'st'
}
type InterfaceConnection = {
  connection_status?: { label: 'Not Connected' | 'Connected'; value: false | true } | undefined
  interface_a?: NestedInterface | undefined
  interface_b: NestedInterface
}
type InterfaceTemplate = {
  device_type: NestedDeviceType
  id?: number | undefined
  mgmt_only?: boolean | undefined
  name: string
  type: {
    label:
      | 'Virtual'
      | 'Link Aggregation Group (LAG)'
      | '100BASE-TX (10/100ME)'
      | '1000BASE-T (1GE)'
      | '2.5GBASE-T (2.5GE)'
      | '5GBASE-T (5GE)'
      | '10GBASE-T (10GE)'
      | '10GBASE-CX4 (10GE)'
      | 'GBIC (1GE)'
      | 'SFP (1GE)'
      | 'SFP+ (10GE)'
      | 'XFP (10GE)'
      | 'XENPAK (10GE)'
      | 'X2 (10GE)'
      | 'SFP28 (25GE)'
      | 'QSFP+ (40GE)'
      | 'QSFP28 (50GE)'
      | 'CFP (100GE)'
      | 'CFP2 (100GE)'
      | 'CFP2 (200GE)'
      | 'CFP4 (100GE)'
      | 'Cisco CPAK (100GE)'
      | 'QSFP28 (100GE)'
      | 'QSFP56 (200GE)'
      | 'QSFP-DD (400GE)'
      | 'OSFP (400GE)'
      | 'IEEE 802.11a'
      | 'IEEE 802.11b/g'
      | 'IEEE 802.11n'
      | 'IEEE 802.11ac'
      | 'IEEE 802.11ad'
      | 'IEEE 802.11ax'
      | 'GSM'
      | 'CDMA'
      | 'LTE'
      | 'OC-3/STM-1'
      | 'OC-12/STM-4'
      | 'OC-48/STM-16'
      | 'OC-192/STM-64'
      | 'OC-768/STM-256'
      | 'OC-1920/STM-640'
      | 'OC-3840/STM-1234'
      | 'SFP (1GFC)'
      | 'SFP (2GFC)'
      | 'SFP (4GFC)'
      | 'SFP+ (8GFC)'
      | 'SFP+ (16GFC)'
      | 'SFP28 (32GFC)'
      | 'QSFP28 (128GFC)'
      | 'SDR (2 Gbps)'
      | 'DDR (4 Gbps)'
      | 'QDR (8 Gbps)'
      | 'FDR10 (10 Gbps)'
      | 'FDR (13.5 Gbps)'
      | 'EDR (25 Gbps)'
      | 'HDR (50 Gbps)'
      | 'NDR (100 Gbps)'
      | 'XDR (250 Gbps)'
      | 'T1 (1.544 Mbps)'
      | 'E1 (2.048 Mbps)'
      | 'T3 (45 Mbps)'
      | 'E3 (34 Mbps)'
      | 'Cisco StackWise'
      | 'Cisco StackWise Plus'
      | 'Cisco FlexStack'
      | 'Cisco FlexStack Plus'
      | 'Juniper VCP'
      | 'Extreme SummitStack'
      | 'Extreme SummitStack-128'
      | 'Extreme SummitStack-256'
      | 'Extreme SummitStack-512'
      | 'Other'
    value:
      | 'virtual'
      | 'lag'
      | '100base-tx'
      | '1000base-t'
      | '2.5gbase-t'
      | '5gbase-t'
      | '10gbase-t'
      | '10gbase-cx4'
      | '1000base-x-gbic'
      | '1000base-x-sfp'
      | '10gbase-x-sfpp'
      | '10gbase-x-xfp'
      | '10gbase-x-xenpak'
      | '10gbase-x-x2'
      | '25gbase-x-sfp28'
      | '40gbase-x-qsfpp'
      | '50gbase-x-sfp28'
      | '100gbase-x-cfp'
      | '100gbase-x-cfp2'
      | '200gbase-x-cfp2'
      | '100gbase-x-cfp4'
      | '100gbase-x-cpak'
      | '100gbase-x-qsfp28'
      | '200gbase-x-qsfp56'
      | '400gbase-x-qsfpdd'
      | '400gbase-x-osfp'
      | 'ieee802.11a'
      | 'ieee802.11g'
      | 'ieee802.11n'
      | 'ieee802.11ac'
      | 'ieee802.11ad'
      | 'ieee802.11ax'
      | 'gsm'
      | 'cdma'
      | 'lte'
      | 'sonet-oc3'
      | 'sonet-oc12'
      | 'sonet-oc48'
      | 'sonet-oc192'
      | 'sonet-oc768'
      | 'sonet-oc1920'
      | 'sonet-oc3840'
      | '1gfc-sfp'
      | '2gfc-sfp'
      | '4gfc-sfp'
      | '8gfc-sfpp'
      | '16gfc-sfpp'
      | '32gfc-sfp28'
      | '128gfc-sfp28'
      | 'infiniband-sdr'
      | 'infiniband-ddr'
      | 'infiniband-qdr'
      | 'infiniband-fdr10'
      | 'infiniband-fdr'
      | 'infiniband-edr'
      | 'infiniband-hdr'
      | 'infiniband-ndr'
      | 'infiniband-xdr'
      | 't1'
      | 'e1'
      | 't3'
      | 'e3'
      | 'cisco-stackwise'
      | 'cisco-stackwise-plus'
      | 'cisco-flexstack'
      | 'cisco-flexstack-plus'
      | 'juniper-vcp'
      | 'extreme-summitstack'
      | 'extreme-summitstack-128'
      | 'extreme-summitstack-256'
      | 'extreme-summitstack-512'
      | 'other'
  }
}
type WritableInterfaceTemplate = {
  device_type: number
  id?: number | undefined
  mgmt_only?: boolean | undefined
  name: string
  type:
    | 'virtual'
    | 'lag'
    | '100base-tx'
    | '1000base-t'
    | '2.5gbase-t'
    | '5gbase-t'
    | '10gbase-t'
    | '10gbase-cx4'
    | '1000base-x-gbic'
    | '1000base-x-sfp'
    | '10gbase-x-sfpp'
    | '10gbase-x-xfp'
    | '10gbase-x-xenpak'
    | '10gbase-x-x2'
    | '25gbase-x-sfp28'
    | '40gbase-x-qsfpp'
    | '50gbase-x-sfp28'
    | '100gbase-x-cfp'
    | '100gbase-x-cfp2'
    | '200gbase-x-cfp2'
    | '100gbase-x-cfp4'
    | '100gbase-x-cpak'
    | '100gbase-x-qsfp28'
    | '200gbase-x-qsfp56'
    | '400gbase-x-qsfpdd'
    | '400gbase-x-osfp'
    | 'ieee802.11a'
    | 'ieee802.11g'
    | 'ieee802.11n'
    | 'ieee802.11ac'
    | 'ieee802.11ad'
    | 'ieee802.11ax'
    | 'gsm'
    | 'cdma'
    | 'lte'
    | 'sonet-oc3'
    | 'sonet-oc12'
    | 'sonet-oc48'
    | 'sonet-oc192'
    | 'sonet-oc768'
    | 'sonet-oc1920'
    | 'sonet-oc3840'
    | '1gfc-sfp'
    | '2gfc-sfp'
    | '4gfc-sfp'
    | '8gfc-sfpp'
    | '16gfc-sfpp'
    | '32gfc-sfp28'
    | '128gfc-sfp28'
    | 'infiniband-sdr'
    | 'infiniband-ddr'
    | 'infiniband-qdr'
    | 'infiniband-fdr10'
    | 'infiniband-fdr'
    | 'infiniband-edr'
    | 'infiniband-hdr'
    | 'infiniband-ndr'
    | 'infiniband-xdr'
    | 't1'
    | 'e1'
    | 't3'
    | 'e3'
    | 'cisco-stackwise'
    | 'cisco-stackwise-plus'
    | 'cisco-flexstack'
    | 'cisco-flexstack-plus'
    | 'juniper-vcp'
    | 'extreme-summitstack'
    | 'extreme-summitstack-128'
    | 'extreme-summitstack-256'
    | 'extreme-summitstack-512'
    | 'other'
}
type NestedVLAN = {
  display_name?: string | undefined
  id?: number | undefined
  name: string
  url?: string | undefined
  vid: number
}
type DeviceInterface = {
  cable?: NestedCable | undefined
  connected_endpoint?: { [x: string]: string } | undefined
  connected_endpoint_type?: string | undefined
  connection_status?: { label: 'Not Connected' | 'Connected'; value: false | true } | undefined
  count_ipaddresses?: number | undefined
  description?: string | undefined
  device: NestedDevice
  enabled?: boolean | undefined
  id?: number | undefined
  lag?: NestedInterface | undefined
  mac_address?: (string | null) | undefined
  mgmt_only?: boolean | undefined
  mode?:
    | { label: 'Access' | 'Tagged' | 'Tagged (All)'; value: 'access' | 'tagged' | 'tagged-all' }
    | undefined
  mtu?: (number | null) | undefined
  name: string
  tagged_vlans?: NestedVLAN[] | undefined
  tags?: string[] | undefined
  type: {
    label:
      | 'Virtual'
      | 'Link Aggregation Group (LAG)'
      | '100BASE-TX (10/100ME)'
      | '1000BASE-T (1GE)'
      | '2.5GBASE-T (2.5GE)'
      | '5GBASE-T (5GE)'
      | '10GBASE-T (10GE)'
      | '10GBASE-CX4 (10GE)'
      | 'GBIC (1GE)'
      | 'SFP (1GE)'
      | 'SFP+ (10GE)'
      | 'XFP (10GE)'
      | 'XENPAK (10GE)'
      | 'X2 (10GE)'
      | 'SFP28 (25GE)'
      | 'QSFP+ (40GE)'
      | 'QSFP28 (50GE)'
      | 'CFP (100GE)'
      | 'CFP2 (100GE)'
      | 'CFP2 (200GE)'
      | 'CFP4 (100GE)'
      | 'Cisco CPAK (100GE)'
      | 'QSFP28 (100GE)'
      | 'QSFP56 (200GE)'
      | 'QSFP-DD (400GE)'
      | 'OSFP (400GE)'
      | 'IEEE 802.11a'
      | 'IEEE 802.11b/g'
      | 'IEEE 802.11n'
      | 'IEEE 802.11ac'
      | 'IEEE 802.11ad'
      | 'IEEE 802.11ax'
      | 'GSM'
      | 'CDMA'
      | 'LTE'
      | 'OC-3/STM-1'
      | 'OC-12/STM-4'
      | 'OC-48/STM-16'
      | 'OC-192/STM-64'
      | 'OC-768/STM-256'
      | 'OC-1920/STM-640'
      | 'OC-3840/STM-1234'
      | 'SFP (1GFC)'
      | 'SFP (2GFC)'
      | 'SFP (4GFC)'
      | 'SFP+ (8GFC)'
      | 'SFP+ (16GFC)'
      | 'SFP28 (32GFC)'
      | 'QSFP28 (128GFC)'
      | 'SDR (2 Gbps)'
      | 'DDR (4 Gbps)'
      | 'QDR (8 Gbps)'
      | 'FDR10 (10 Gbps)'
      | 'FDR (13.5 Gbps)'
      | 'EDR (25 Gbps)'
      | 'HDR (50 Gbps)'
      | 'NDR (100 Gbps)'
      | 'XDR (250 Gbps)'
      | 'T1 (1.544 Mbps)'
      | 'E1 (2.048 Mbps)'
      | 'T3 (45 Mbps)'
      | 'E3 (34 Mbps)'
      | 'Cisco StackWise'
      | 'Cisco StackWise Plus'
      | 'Cisco FlexStack'
      | 'Cisco FlexStack Plus'
      | 'Juniper VCP'
      | 'Extreme SummitStack'
      | 'Extreme SummitStack-128'
      | 'Extreme SummitStack-256'
      | 'Extreme SummitStack-512'
      | 'Other'
    value:
      | 'virtual'
      | 'lag'
      | '100base-tx'
      | '1000base-t'
      | '2.5gbase-t'
      | '5gbase-t'
      | '10gbase-t'
      | '10gbase-cx4'
      | '1000base-x-gbic'
      | '1000base-x-sfp'
      | '10gbase-x-sfpp'
      | '10gbase-x-xfp'
      | '10gbase-x-xenpak'
      | '10gbase-x-x2'
      | '25gbase-x-sfp28'
      | '40gbase-x-qsfpp'
      | '50gbase-x-sfp28'
      | '100gbase-x-cfp'
      | '100gbase-x-cfp2'
      | '200gbase-x-cfp2'
      | '100gbase-x-cfp4'
      | '100gbase-x-cpak'
      | '100gbase-x-qsfp28'
      | '200gbase-x-qsfp56'
      | '400gbase-x-qsfpdd'
      | '400gbase-x-osfp'
      | 'ieee802.11a'
      | 'ieee802.11g'
      | 'ieee802.11n'
      | 'ieee802.11ac'
      | 'ieee802.11ad'
      | 'ieee802.11ax'
      | 'gsm'
      | 'cdma'
      | 'lte'
      | 'sonet-oc3'
      | 'sonet-oc12'
      | 'sonet-oc48'
      | 'sonet-oc192'
      | 'sonet-oc768'
      | 'sonet-oc1920'
      | 'sonet-oc3840'
      | '1gfc-sfp'
      | '2gfc-sfp'
      | '4gfc-sfp'
      | '8gfc-sfpp'
      | '16gfc-sfpp'
      | '32gfc-sfp28'
      | '128gfc-sfp28'
      | 'infiniband-sdr'
      | 'infiniband-ddr'
      | 'infiniband-qdr'
      | 'infiniband-fdr10'
      | 'infiniband-fdr'
      | 'infiniband-edr'
      | 'infiniband-hdr'
      | 'infiniband-ndr'
      | 'infiniband-xdr'
      | 't1'
      | 'e1'
      | 't3'
      | 'e3'
      | 'cisco-stackwise'
      | 'cisco-stackwise-plus'
      | 'cisco-flexstack'
      | 'cisco-flexstack-plus'
      | 'juniper-vcp'
      | 'extreme-summitstack'
      | 'extreme-summitstack-128'
      | 'extreme-summitstack-256'
      | 'extreme-summitstack-512'
      | 'other'
  }
  untagged_vlan?: NestedVLAN | undefined
}
type WritableDeviceInterface = {
  cable?: NestedCable | undefined
  connected_endpoint?: { [x: string]: string } | undefined
  connected_endpoint_type?: string | undefined
  connection_status?: false | true | undefined
  count_ipaddresses?: number | undefined
  description?: string | undefined
  device: number
  enabled?: boolean | undefined
  id?: number | undefined
  lag?: (number | null) | undefined
  mac_address?: (string | null) | undefined
  mgmt_only?: boolean | undefined
  mode?: 'access' | 'tagged' | 'tagged-all' | undefined
  mtu?: (number | null) | undefined
  name: string
  tagged_vlans?: number[] | undefined
  tags?: string[] | undefined
  type:
    | 'virtual'
    | 'lag'
    | '100base-tx'
    | '1000base-t'
    | '2.5gbase-t'
    | '5gbase-t'
    | '10gbase-t'
    | '10gbase-cx4'
    | '1000base-x-gbic'
    | '1000base-x-sfp'
    | '10gbase-x-sfpp'
    | '10gbase-x-xfp'
    | '10gbase-x-xenpak'
    | '10gbase-x-x2'
    | '25gbase-x-sfp28'
    | '40gbase-x-qsfpp'
    | '50gbase-x-sfp28'
    | '100gbase-x-cfp'
    | '100gbase-x-cfp2'
    | '200gbase-x-cfp2'
    | '100gbase-x-cfp4'
    | '100gbase-x-cpak'
    | '100gbase-x-qsfp28'
    | '200gbase-x-qsfp56'
    | '400gbase-x-qsfpdd'
    | '400gbase-x-osfp'
    | 'ieee802.11a'
    | 'ieee802.11g'
    | 'ieee802.11n'
    | 'ieee802.11ac'
    | 'ieee802.11ad'
    | 'ieee802.11ax'
    | 'gsm'
    | 'cdma'
    | 'lte'
    | 'sonet-oc3'
    | 'sonet-oc12'
    | 'sonet-oc48'
    | 'sonet-oc192'
    | 'sonet-oc768'
    | 'sonet-oc1920'
    | 'sonet-oc3840'
    | '1gfc-sfp'
    | '2gfc-sfp'
    | '4gfc-sfp'
    | '8gfc-sfpp'
    | '16gfc-sfpp'
    | '32gfc-sfp28'
    | '128gfc-sfp28'
    | 'infiniband-sdr'
    | 'infiniband-ddr'
    | 'infiniband-qdr'
    | 'infiniband-fdr10'
    | 'infiniband-fdr'
    | 'infiniband-edr'
    | 'infiniband-hdr'
    | 'infiniband-ndr'
    | 'infiniband-xdr'
    | 't1'
    | 'e1'
    | 't3'
    | 'e3'
    | 'cisco-stackwise'
    | 'cisco-stackwise-plus'
    | 'cisco-flexstack'
    | 'cisco-flexstack-plus'
    | 'juniper-vcp'
    | 'extreme-summitstack'
    | 'extreme-summitstack-128'
    | 'extreme-summitstack-256'
    | 'extreme-summitstack-512'
    | 'other'
  untagged_vlan?: (number | null) | undefined
}
type InventoryItem = {
  asset_tag?: (string | null) | undefined
  description?: string | undefined
  device: NestedDevice
  discovered?: boolean | undefined
  id?: number | undefined
  manufacturer?: NestedManufacturer | undefined
  name: string
  parent?: (number | null) | undefined
  part_id?: string | undefined
  serial?: string | undefined
  tags?: string[] | undefined
}
type WritableInventoryItem = {
  asset_tag?: (string | null) | undefined
  description?: string | undefined
  device: number
  discovered?: boolean | undefined
  id?: number | undefined
  manufacturer?: (number | null) | undefined
  name: string
  parent?: (number | null) | undefined
  part_id?: string | undefined
  serial?: string | undefined
  tags?: string[] | undefined
}
type Manufacturer = {
  description?: string | undefined
  devicetype_count?: number | undefined
  id?: number | undefined
  inventoryitem_count?: number | undefined
  name: string
  platform_count?: number | undefined
  slug: string
}
type Platform = {
  description?: string | undefined
  device_count?: number | undefined
  id?: number | undefined
  manufacturer?: NestedManufacturer | undefined
  name: string
  napalm_args?: (string | null) | undefined
  napalm_driver?: string | undefined
  slug: string
  virtualmachine_count?: number | undefined
}
type WritablePlatform = {
  description?: string | undefined
  device_count?: number | undefined
  id?: number | undefined
  manufacturer?: (number | null) | undefined
  name: string
  napalm_args?: (string | null) | undefined
  napalm_driver?: string | undefined
  slug: string
  virtualmachine_count?: number | undefined
}
type PowerPort = {
  allocated_draw?: (number | null) | undefined
  cable?: NestedCable | undefined
  connected_endpoint?: { [x: string]: string } | undefined
  connected_endpoint_type?: string | undefined
  connection_status?: { label: 'Not Connected' | 'Connected'; value: false | true } | undefined
  description?: string | undefined
  device: NestedDevice
  id?: number | undefined
  maximum_draw?: (number | null) | undefined
  name: string
  tags?: string[] | undefined
  type?:
    | {
        label:
          | 'C6'
          | 'C8'
          | 'C14'
          | 'C16'
          | 'C20'
          | 'P+N+E 4H'
          | 'P+N+E 6H'
          | 'P+N+E 9H'
          | '2P+E 4H'
          | '2P+E 6H'
          | '2P+E 9H'
          | '3P+E 4H'
          | '3P+E 6H'
          | '3P+E 9H'
          | '3P+N+E 4H'
          | '3P+N+E 6H'
          | '3P+N+E 9H'
          | 'NEMA 1-15P'
          | 'NEMA 5-15P'
          | 'NEMA 5-20P'
          | 'NEMA 5-30P'
          | 'NEMA 5-50P'
          | 'NEMA 6-15P'
          | 'NEMA 6-20P'
          | 'NEMA 6-30P'
          | 'NEMA 6-50P'
          | 'NEMA 10-30P'
          | 'NEMA 10-50P'
          | 'NEMA 14-20P'
          | 'NEMA 14-30P'
          | 'NEMA 14-50P'
          | 'NEMA 14-60P'
          | 'NEMA L1-15P'
          | 'NEMA L5-15P'
          | 'NEMA L5-20P'
          | 'NEMA L5-30P'
          | 'NEMA L5-50P'
          | 'NEMA L6-15P'
          | 'NEMA L6-20P'
          | 'NEMA L6-30P'
          | 'NEMA L6-50P'
          | 'NEMA L10-30P'
          | 'NEMA L14-20P'
          | 'NEMA L14-30P'
          | 'NEMA L14-50P'
          | 'NEMA L14-60P'
          | 'NEMA L21-20P'
          | 'NEMA L21-30P'
          | 'CS6361C'
          | 'CS6365C'
          | 'CS8165C'
          | 'CS8265C'
          | 'CS8365C'
          | 'CS8465C'
          | 'ITA Type E (CEE 7/5)'
          | 'ITA Type F (CEE 7/4)'
          | 'ITA Type E/F (CEE 7/7)'
          | 'ITA Type G (BS 1363)'
          | 'ITA Type H'
          | 'ITA Type I'
          | 'ITA Type J'
          | 'ITA Type K'
          | 'ITA Type L (CEI 23-50)'
          | 'ITA Type M (BS 546)'
          | 'ITA Type N'
          | 'ITA Type O'
        value:
          | 'iec-60320-c6'
          | 'iec-60320-c8'
          | 'iec-60320-c14'
          | 'iec-60320-c16'
          | 'iec-60320-c20'
          | 'iec-60309-p-n-e-4h'
          | 'iec-60309-p-n-e-6h'
          | 'iec-60309-p-n-e-9h'
          | 'iec-60309-2p-e-4h'
          | 'iec-60309-2p-e-6h'
          | 'iec-60309-2p-e-9h'
          | 'iec-60309-3p-e-4h'
          | 'iec-60309-3p-e-6h'
          | 'iec-60309-3p-e-9h'
          | 'iec-60309-3p-n-e-4h'
          | 'iec-60309-3p-n-e-6h'
          | 'iec-60309-3p-n-e-9h'
          | 'nema-1-15p'
          | 'nema-5-15p'
          | 'nema-5-20p'
          | 'nema-5-30p'
          | 'nema-5-50p'
          | 'nema-6-15p'
          | 'nema-6-20p'
          | 'nema-6-30p'
          | 'nema-6-50p'
          | 'nema-10-30p'
          | 'nema-10-50p'
          | 'nema-14-20p'
          | 'nema-14-30p'
          | 'nema-14-50p'
          | 'nema-14-60p'
          | 'nema-l1-15p'
          | 'nema-l5-15p'
          | 'nema-l5-20p'
          | 'nema-l5-30p'
          | 'nema-l5-50p'
          | 'nema-l6-15p'
          | 'nema-l6-20p'
          | 'nema-l6-30p'
          | 'nema-l6-50p'
          | 'nema-l10-30p'
          | 'nema-l14-20p'
          | 'nema-l14-30p'
          | 'nema-l14-50p'
          | 'nema-l14-60p'
          | 'nema-l21-20p'
          | 'nema-l21-30p'
          | 'cs6361c'
          | 'cs6365c'
          | 'cs8165c'
          | 'cs8265c'
          | 'cs8365c'
          | 'cs8465c'
          | 'ita-e'
          | 'ita-f'
          | 'ita-ef'
          | 'ita-g'
          | 'ita-h'
          | 'ita-i'
          | 'ita-j'
          | 'ita-k'
          | 'ita-l'
          | 'ita-m'
          | 'ita-n'
          | 'ita-o'
      }
    | undefined
}
type NestedPowerPanel = {
  id?: number | undefined
  name: string
  powerfeed_count?: number | undefined
  url?: string | undefined
}
type PowerFeed = {
  amperage?: number | undefined
  comments?: string | undefined
  created?: string | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  id?: number | undefined
  last_updated?: string | undefined
  max_utilization?: number | undefined
  name: string
  phase?:
    | { label: 'Single phase' | 'Three-phase'; value: 'single-phase' | 'three-phase' }
    | undefined
  power_panel: NestedPowerPanel
  rack?: NestedRack | undefined
  status?:
    | {
        label: 'Offline' | 'Active' | 'Planned' | 'Failed'
        value: 'offline' | 'active' | 'planned' | 'failed'
      }
    | undefined
  supply?: { label: 'AC' | 'DC'; value: 'ac' | 'dc' } | undefined
  tags?: string[] | undefined
  type?: { label: 'Primary' | 'Redundant'; value: 'primary' | 'redundant' } | undefined
  voltage?: number | undefined
}
type WritablePowerFeed = {
  amperage?: number | undefined
  comments?: string | undefined
  created?: string | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  id?: number | undefined
  last_updated?: string | undefined
  max_utilization?: number | undefined
  name: string
  phase?: 'single-phase' | 'three-phase' | undefined
  power_panel: number
  rack?: (number | null) | undefined
  status?: 'offline' | 'active' | 'planned' | 'failed' | undefined
  supply?: 'ac' | 'dc' | undefined
  tags?: string[] | undefined
  type?: 'primary' | 'redundant' | undefined
  voltage?: number | undefined
}
type NestedPowerPortTemplate = { id?: number | undefined; name: string; url?: string | undefined }
type PowerOutletTemplate = {
  device_type: NestedDeviceType
  feed_leg?: { label: 'A' | 'B' | 'C'; value: 'A' | 'B' | 'C' } | undefined
  id?: number | undefined
  name: string
  power_port?: NestedPowerPortTemplate | undefined
  type?:
    | {
        label:
          | 'C5'
          | 'C7'
          | 'C13'
          | 'C15'
          | 'C19'
          | 'P+N+E 4H'
          | 'P+N+E 6H'
          | 'P+N+E 9H'
          | '2P+E 4H'
          | '2P+E 6H'
          | '2P+E 9H'
          | '3P+E 4H'
          | '3P+E 6H'
          | '3P+E 9H'
          | '3P+N+E 4H'
          | '3P+N+E 6H'
          | '3P+N+E 9H'
          | 'NEMA 1-15R'
          | 'NEMA 5-15R'
          | 'NEMA 5-20R'
          | 'NEMA 5-30R'
          | 'NEMA 5-50R'
          | 'NEMA 6-15R'
          | 'NEMA 6-20R'
          | 'NEMA 6-30R'
          | 'NEMA 6-50R'
          | 'NEMA 10-30R'
          | 'NEMA 10-50R'
          | 'NEMA 14-20R'
          | 'NEMA 14-30R'
          | 'NEMA 14-50R'
          | 'NEMA 14-60R'
          | 'NEMA L1-15R'
          | 'NEMA L5-15R'
          | 'NEMA L5-20R'
          | 'NEMA L5-30R'
          | 'NEMA L5-50R'
          | 'NEMA L6-15R'
          | 'NEMA L6-20R'
          | 'NEMA L6-30R'
          | 'NEMA L6-50R'
          | 'NEMA L10-30R'
          | 'NEMA L14-20R'
          | 'NEMA L14-30R'
          | 'NEMA L14-50R'
          | 'NEMA L14-60R'
          | 'NEMA L21-20R'
          | 'NEMA L21-30R'
          | 'CS6360C'
          | 'CS6364C'
          | 'CS8164C'
          | 'CS8264C'
          | 'CS8364C'
          | 'CS8464C'
          | 'ITA Type E (CEE7/5)'
          | 'ITA Type F (CEE7/3)'
          | 'ITA Type G (BS 1363)'
          | 'ITA Type H'
          | 'ITA Type I'
          | 'ITA Type J'
          | 'ITA Type K'
          | 'ITA Type L (CEI 23-50)'
          | 'ITA Type M (BS 546)'
          | 'ITA Type N'
          | 'ITA Type O'
          | 'HDOT Cx'
        value:
          | 'iec-60320-c5'
          | 'iec-60320-c7'
          | 'iec-60320-c13'
          | 'iec-60320-c15'
          | 'iec-60320-c19'
          | 'iec-60309-p-n-e-4h'
          | 'iec-60309-p-n-e-6h'
          | 'iec-60309-p-n-e-9h'
          | 'iec-60309-2p-e-4h'
          | 'iec-60309-2p-e-6h'
          | 'iec-60309-2p-e-9h'
          | 'iec-60309-3p-e-4h'
          | 'iec-60309-3p-e-6h'
          | 'iec-60309-3p-e-9h'
          | 'iec-60309-3p-n-e-4h'
          | 'iec-60309-3p-n-e-6h'
          | 'iec-60309-3p-n-e-9h'
          | 'nema-1-15r'
          | 'nema-5-15r'
          | 'nema-5-20r'
          | 'nema-5-30r'
          | 'nema-5-50r'
          | 'nema-6-15r'
          | 'nema-6-20r'
          | 'nema-6-30r'
          | 'nema-6-50r'
          | 'nema-10-30r'
          | 'nema-10-50r'
          | 'nema-14-20r'
          | 'nema-14-30r'
          | 'nema-14-50r'
          | 'nema-14-60r'
          | 'nema-l1-15r'
          | 'nema-l5-15r'
          | 'nema-l5-20r'
          | 'nema-l5-30r'
          | 'nema-l5-50r'
          | 'nema-l6-15r'
          | 'nema-l6-20r'
          | 'nema-l6-30r'
          | 'nema-l6-50r'
          | 'nema-l10-30r'
          | 'nema-l14-20r'
          | 'nema-l14-30r'
          | 'nema-l14-50r'
          | 'nema-l14-60r'
          | 'nema-l21-20r'
          | 'nema-l21-30r'
          | 'CS6360C'
          | 'CS6364C'
          | 'CS8164C'
          | 'CS8264C'
          | 'CS8364C'
          | 'CS8464C'
          | 'ita-e'
          | 'ita-f'
          | 'ita-g'
          | 'ita-h'
          | 'ita-i'
          | 'ita-j'
          | 'ita-k'
          | 'ita-l'
          | 'ita-m'
          | 'ita-n'
          | 'ita-o'
          | 'hdot-cx'
      }
    | undefined
}
type WritablePowerOutletTemplate = {
  device_type: number
  feed_leg?: 'A' | 'B' | 'C' | undefined
  id?: number | undefined
  name: string
  power_port?: (number | null) | undefined
  type?:
    | 'iec-60320-c5'
    | 'iec-60320-c7'
    | 'iec-60320-c13'
    | 'iec-60320-c15'
    | 'iec-60320-c19'
    | 'iec-60309-p-n-e-4h'
    | 'iec-60309-p-n-e-6h'
    | 'iec-60309-p-n-e-9h'
    | 'iec-60309-2p-e-4h'
    | 'iec-60309-2p-e-6h'
    | 'iec-60309-2p-e-9h'
    | 'iec-60309-3p-e-4h'
    | 'iec-60309-3p-e-6h'
    | 'iec-60309-3p-e-9h'
    | 'iec-60309-3p-n-e-4h'
    | 'iec-60309-3p-n-e-6h'
    | 'iec-60309-3p-n-e-9h'
    | 'nema-1-15r'
    | 'nema-5-15r'
    | 'nema-5-20r'
    | 'nema-5-30r'
    | 'nema-5-50r'
    | 'nema-6-15r'
    | 'nema-6-20r'
    | 'nema-6-30r'
    | 'nema-6-50r'
    | 'nema-10-30r'
    | 'nema-10-50r'
    | 'nema-14-20r'
    | 'nema-14-30r'
    | 'nema-14-50r'
    | 'nema-14-60r'
    | 'nema-l1-15r'
    | 'nema-l5-15r'
    | 'nema-l5-20r'
    | 'nema-l5-30r'
    | 'nema-l5-50r'
    | 'nema-l6-15r'
    | 'nema-l6-20r'
    | 'nema-l6-30r'
    | 'nema-l6-50r'
    | 'nema-l10-30r'
    | 'nema-l14-20r'
    | 'nema-l14-30r'
    | 'nema-l14-50r'
    | 'nema-l14-60r'
    | 'nema-l21-20r'
    | 'nema-l21-30r'
    | 'CS6360C'
    | 'CS6364C'
    | 'CS8164C'
    | 'CS8264C'
    | 'CS8364C'
    | 'CS8464C'
    | 'ita-e'
    | 'ita-f'
    | 'ita-g'
    | 'ita-h'
    | 'ita-i'
    | 'ita-j'
    | 'ita-k'
    | 'ita-l'
    | 'ita-m'
    | 'ita-n'
    | 'ita-o'
    | 'hdot-cx'
    | undefined
}
type NestedPowerPort = {
  cable?: (number | null) | undefined
  connection_status?: { label: 'Not Connected' | 'Connected'; value: false | true } | undefined
  device?: NestedDevice | undefined
  id?: number | undefined
  name: string
  url?: string | undefined
}
type PowerOutlet = {
  cable?: NestedCable | undefined
  connected_endpoint?: { [x: string]: string } | undefined
  connected_endpoint_type?: string | undefined
  connection_status?: { label: 'Not Connected' | 'Connected'; value: false | true } | undefined
  description?: string | undefined
  device: NestedDevice
  feed_leg?: { label: 'A' | 'B' | 'C'; value: 'A' | 'B' | 'C' } | undefined
  id?: number | undefined
  name: string
  power_port?: NestedPowerPort | undefined
  tags?: string[] | undefined
  type?:
    | {
        label:
          | 'C5'
          | 'C7'
          | 'C13'
          | 'C15'
          | 'C19'
          | 'P+N+E 4H'
          | 'P+N+E 6H'
          | 'P+N+E 9H'
          | '2P+E 4H'
          | '2P+E 6H'
          | '2P+E 9H'
          | '3P+E 4H'
          | '3P+E 6H'
          | '3P+E 9H'
          | '3P+N+E 4H'
          | '3P+N+E 6H'
          | '3P+N+E 9H'
          | 'NEMA 1-15R'
          | 'NEMA 5-15R'
          | 'NEMA 5-20R'
          | 'NEMA 5-30R'
          | 'NEMA 5-50R'
          | 'NEMA 6-15R'
          | 'NEMA 6-20R'
          | 'NEMA 6-30R'
          | 'NEMA 6-50R'
          | 'NEMA 10-30R'
          | 'NEMA 10-50R'
          | 'NEMA 14-20R'
          | 'NEMA 14-30R'
          | 'NEMA 14-50R'
          | 'NEMA 14-60R'
          | 'NEMA L1-15R'
          | 'NEMA L5-15R'
          | 'NEMA L5-20R'
          | 'NEMA L5-30R'
          | 'NEMA L5-50R'
          | 'NEMA L6-15R'
          | 'NEMA L6-20R'
          | 'NEMA L6-30R'
          | 'NEMA L6-50R'
          | 'NEMA L10-30R'
          | 'NEMA L14-20R'
          | 'NEMA L14-30R'
          | 'NEMA L14-50R'
          | 'NEMA L14-60R'
          | 'NEMA L21-20R'
          | 'NEMA L21-30R'
          | 'CS6360C'
          | 'CS6364C'
          | 'CS8164C'
          | 'CS8264C'
          | 'CS8364C'
          | 'CS8464C'
          | 'ITA Type E (CEE7/5)'
          | 'ITA Type F (CEE7/3)'
          | 'ITA Type G (BS 1363)'
          | 'ITA Type H'
          | 'ITA Type I'
          | 'ITA Type J'
          | 'ITA Type K'
          | 'ITA Type L (CEI 23-50)'
          | 'ITA Type M (BS 546)'
          | 'ITA Type N'
          | 'ITA Type O'
          | 'HDOT Cx'
        value:
          | 'iec-60320-c5'
          | 'iec-60320-c7'
          | 'iec-60320-c13'
          | 'iec-60320-c15'
          | 'iec-60320-c19'
          | 'iec-60309-p-n-e-4h'
          | 'iec-60309-p-n-e-6h'
          | 'iec-60309-p-n-e-9h'
          | 'iec-60309-2p-e-4h'
          | 'iec-60309-2p-e-6h'
          | 'iec-60309-2p-e-9h'
          | 'iec-60309-3p-e-4h'
          | 'iec-60309-3p-e-6h'
          | 'iec-60309-3p-e-9h'
          | 'iec-60309-3p-n-e-4h'
          | 'iec-60309-3p-n-e-6h'
          | 'iec-60309-3p-n-e-9h'
          | 'nema-1-15r'
          | 'nema-5-15r'
          | 'nema-5-20r'
          | 'nema-5-30r'
          | 'nema-5-50r'
          | 'nema-6-15r'
          | 'nema-6-20r'
          | 'nema-6-30r'
          | 'nema-6-50r'
          | 'nema-10-30r'
          | 'nema-10-50r'
          | 'nema-14-20r'
          | 'nema-14-30r'
          | 'nema-14-50r'
          | 'nema-14-60r'
          | 'nema-l1-15r'
          | 'nema-l5-15r'
          | 'nema-l5-20r'
          | 'nema-l5-30r'
          | 'nema-l5-50r'
          | 'nema-l6-15r'
          | 'nema-l6-20r'
          | 'nema-l6-30r'
          | 'nema-l6-50r'
          | 'nema-l10-30r'
          | 'nema-l14-20r'
          | 'nema-l14-30r'
          | 'nema-l14-50r'
          | 'nema-l14-60r'
          | 'nema-l21-20r'
          | 'nema-l21-30r'
          | 'CS6360C'
          | 'CS6364C'
          | 'CS8164C'
          | 'CS8264C'
          | 'CS8364C'
          | 'CS8464C'
          | 'ita-e'
          | 'ita-f'
          | 'ita-g'
          | 'ita-h'
          | 'ita-i'
          | 'ita-j'
          | 'ita-k'
          | 'ita-l'
          | 'ita-m'
          | 'ita-n'
          | 'ita-o'
          | 'hdot-cx'
      }
    | undefined
}
type WritablePowerOutlet = {
  cable?: NestedCable | undefined
  connected_endpoint?: { [x: string]: string } | undefined
  connected_endpoint_type?: string | undefined
  connection_status?: false | true | undefined
  description?: string | undefined
  device: number
  feed_leg?: 'A' | 'B' | 'C' | undefined
  id?: number | undefined
  name: string
  power_port?: (number | null) | undefined
  tags?: string[] | undefined
  type?:
    | 'iec-60320-c5'
    | 'iec-60320-c7'
    | 'iec-60320-c13'
    | 'iec-60320-c15'
    | 'iec-60320-c19'
    | 'iec-60309-p-n-e-4h'
    | 'iec-60309-p-n-e-6h'
    | 'iec-60309-p-n-e-9h'
    | 'iec-60309-2p-e-4h'
    | 'iec-60309-2p-e-6h'
    | 'iec-60309-2p-e-9h'
    | 'iec-60309-3p-e-4h'
    | 'iec-60309-3p-e-6h'
    | 'iec-60309-3p-e-9h'
    | 'iec-60309-3p-n-e-4h'
    | 'iec-60309-3p-n-e-6h'
    | 'iec-60309-3p-n-e-9h'
    | 'nema-1-15r'
    | 'nema-5-15r'
    | 'nema-5-20r'
    | 'nema-5-30r'
    | 'nema-5-50r'
    | 'nema-6-15r'
    | 'nema-6-20r'
    | 'nema-6-30r'
    | 'nema-6-50r'
    | 'nema-10-30r'
    | 'nema-10-50r'
    | 'nema-14-20r'
    | 'nema-14-30r'
    | 'nema-14-50r'
    | 'nema-14-60r'
    | 'nema-l1-15r'
    | 'nema-l5-15r'
    | 'nema-l5-20r'
    | 'nema-l5-30r'
    | 'nema-l5-50r'
    | 'nema-l6-15r'
    | 'nema-l6-20r'
    | 'nema-l6-30r'
    | 'nema-l6-50r'
    | 'nema-l10-30r'
    | 'nema-l14-20r'
    | 'nema-l14-30r'
    | 'nema-l14-50r'
    | 'nema-l14-60r'
    | 'nema-l21-20r'
    | 'nema-l21-30r'
    | 'CS6360C'
    | 'CS6364C'
    | 'CS8164C'
    | 'CS8264C'
    | 'CS8364C'
    | 'CS8464C'
    | 'ita-e'
    | 'ita-f'
    | 'ita-g'
    | 'ita-h'
    | 'ita-i'
    | 'ita-j'
    | 'ita-k'
    | 'ita-l'
    | 'ita-m'
    | 'ita-n'
    | 'ita-o'
    | 'hdot-cx'
    | undefined
}
type NestedRackGroup = {
  id?: number | undefined
  name: string
  rack_count?: number | undefined
  slug: string
  url?: string | undefined
}
type PowerPanel = {
  id?: number | undefined
  name: string
  powerfeed_count?: number | undefined
  rack_group?: NestedRackGroup | undefined
  site: NestedSite
}
type WritablePowerPanel = {
  id?: number | undefined
  name: string
  powerfeed_count?: number | undefined
  rack_group?: (number | null) | undefined
  site: number
}
type PowerPortTemplate = {
  allocated_draw?: (number | null) | undefined
  device_type: NestedDeviceType
  id?: number | undefined
  maximum_draw?: (number | null) | undefined
  name: string
  type?:
    | {
        label:
          | 'C6'
          | 'C8'
          | 'C14'
          | 'C16'
          | 'C20'
          | 'P+N+E 4H'
          | 'P+N+E 6H'
          | 'P+N+E 9H'
          | '2P+E 4H'
          | '2P+E 6H'
          | '2P+E 9H'
          | '3P+E 4H'
          | '3P+E 6H'
          | '3P+E 9H'
          | '3P+N+E 4H'
          | '3P+N+E 6H'
          | '3P+N+E 9H'
          | 'NEMA 1-15P'
          | 'NEMA 5-15P'
          | 'NEMA 5-20P'
          | 'NEMA 5-30P'
          | 'NEMA 5-50P'
          | 'NEMA 6-15P'
          | 'NEMA 6-20P'
          | 'NEMA 6-30P'
          | 'NEMA 6-50P'
          | 'NEMA 10-30P'
          | 'NEMA 10-50P'
          | 'NEMA 14-20P'
          | 'NEMA 14-30P'
          | 'NEMA 14-50P'
          | 'NEMA 14-60P'
          | 'NEMA L1-15P'
          | 'NEMA L5-15P'
          | 'NEMA L5-20P'
          | 'NEMA L5-30P'
          | 'NEMA L5-50P'
          | 'NEMA L6-15P'
          | 'NEMA L6-20P'
          | 'NEMA L6-30P'
          | 'NEMA L6-50P'
          | 'NEMA L10-30P'
          | 'NEMA L14-20P'
          | 'NEMA L14-30P'
          | 'NEMA L14-50P'
          | 'NEMA L14-60P'
          | 'NEMA L21-20P'
          | 'NEMA L21-30P'
          | 'CS6361C'
          | 'CS6365C'
          | 'CS8165C'
          | 'CS8265C'
          | 'CS8365C'
          | 'CS8465C'
          | 'ITA Type E (CEE 7/5)'
          | 'ITA Type F (CEE 7/4)'
          | 'ITA Type E/F (CEE 7/7)'
          | 'ITA Type G (BS 1363)'
          | 'ITA Type H'
          | 'ITA Type I'
          | 'ITA Type J'
          | 'ITA Type K'
          | 'ITA Type L (CEI 23-50)'
          | 'ITA Type M (BS 546)'
          | 'ITA Type N'
          | 'ITA Type O'
        value:
          | 'iec-60320-c6'
          | 'iec-60320-c8'
          | 'iec-60320-c14'
          | 'iec-60320-c16'
          | 'iec-60320-c20'
          | 'iec-60309-p-n-e-4h'
          | 'iec-60309-p-n-e-6h'
          | 'iec-60309-p-n-e-9h'
          | 'iec-60309-2p-e-4h'
          | 'iec-60309-2p-e-6h'
          | 'iec-60309-2p-e-9h'
          | 'iec-60309-3p-e-4h'
          | 'iec-60309-3p-e-6h'
          | 'iec-60309-3p-e-9h'
          | 'iec-60309-3p-n-e-4h'
          | 'iec-60309-3p-n-e-6h'
          | 'iec-60309-3p-n-e-9h'
          | 'nema-1-15p'
          | 'nema-5-15p'
          | 'nema-5-20p'
          | 'nema-5-30p'
          | 'nema-5-50p'
          | 'nema-6-15p'
          | 'nema-6-20p'
          | 'nema-6-30p'
          | 'nema-6-50p'
          | 'nema-10-30p'
          | 'nema-10-50p'
          | 'nema-14-20p'
          | 'nema-14-30p'
          | 'nema-14-50p'
          | 'nema-14-60p'
          | 'nema-l1-15p'
          | 'nema-l5-15p'
          | 'nema-l5-20p'
          | 'nema-l5-30p'
          | 'nema-l5-50p'
          | 'nema-l6-15p'
          | 'nema-l6-20p'
          | 'nema-l6-30p'
          | 'nema-l6-50p'
          | 'nema-l10-30p'
          | 'nema-l14-20p'
          | 'nema-l14-30p'
          | 'nema-l14-50p'
          | 'nema-l14-60p'
          | 'nema-l21-20p'
          | 'nema-l21-30p'
          | 'cs6361c'
          | 'cs6365c'
          | 'cs8165c'
          | 'cs8265c'
          | 'cs8365c'
          | 'cs8465c'
          | 'ita-e'
          | 'ita-f'
          | 'ita-ef'
          | 'ita-g'
          | 'ita-h'
          | 'ita-i'
          | 'ita-j'
          | 'ita-k'
          | 'ita-l'
          | 'ita-m'
          | 'ita-n'
          | 'ita-o'
      }
    | undefined
}
type WritablePowerPortTemplate = {
  allocated_draw?: (number | null) | undefined
  device_type: number
  id?: number | undefined
  maximum_draw?: (number | null) | undefined
  name: string
  type?:
    | 'iec-60320-c6'
    | 'iec-60320-c8'
    | 'iec-60320-c14'
    | 'iec-60320-c16'
    | 'iec-60320-c20'
    | 'iec-60309-p-n-e-4h'
    | 'iec-60309-p-n-e-6h'
    | 'iec-60309-p-n-e-9h'
    | 'iec-60309-2p-e-4h'
    | 'iec-60309-2p-e-6h'
    | 'iec-60309-2p-e-9h'
    | 'iec-60309-3p-e-4h'
    | 'iec-60309-3p-e-6h'
    | 'iec-60309-3p-e-9h'
    | 'iec-60309-3p-n-e-4h'
    | 'iec-60309-3p-n-e-6h'
    | 'iec-60309-3p-n-e-9h'
    | 'nema-1-15p'
    | 'nema-5-15p'
    | 'nema-5-20p'
    | 'nema-5-30p'
    | 'nema-5-50p'
    | 'nema-6-15p'
    | 'nema-6-20p'
    | 'nema-6-30p'
    | 'nema-6-50p'
    | 'nema-10-30p'
    | 'nema-10-50p'
    | 'nema-14-20p'
    | 'nema-14-30p'
    | 'nema-14-50p'
    | 'nema-14-60p'
    | 'nema-l1-15p'
    | 'nema-l5-15p'
    | 'nema-l5-20p'
    | 'nema-l5-30p'
    | 'nema-l5-50p'
    | 'nema-l6-15p'
    | 'nema-l6-20p'
    | 'nema-l6-30p'
    | 'nema-l6-50p'
    | 'nema-l10-30p'
    | 'nema-l14-20p'
    | 'nema-l14-30p'
    | 'nema-l14-50p'
    | 'nema-l14-60p'
    | 'nema-l21-20p'
    | 'nema-l21-30p'
    | 'cs6361c'
    | 'cs6365c'
    | 'cs8165c'
    | 'cs8265c'
    | 'cs8365c'
    | 'cs8465c'
    | 'ita-e'
    | 'ita-f'
    | 'ita-ef'
    | 'ita-g'
    | 'ita-h'
    | 'ita-i'
    | 'ita-j'
    | 'ita-k'
    | 'ita-l'
    | 'ita-m'
    | 'ita-n'
    | 'ita-o'
    | undefined
}
type WritablePowerPort = {
  allocated_draw?: (number | null) | undefined
  cable?: NestedCable | undefined
  connected_endpoint?: { [x: string]: string } | undefined
  connected_endpoint_type?: string | undefined
  connection_status?: false | true | undefined
  description?: string | undefined
  device: number
  id?: number | undefined
  maximum_draw?: (number | null) | undefined
  name: string
  tags?: string[] | undefined
  type?:
    | 'iec-60320-c6'
    | 'iec-60320-c8'
    | 'iec-60320-c14'
    | 'iec-60320-c16'
    | 'iec-60320-c20'
    | 'iec-60309-p-n-e-4h'
    | 'iec-60309-p-n-e-6h'
    | 'iec-60309-p-n-e-9h'
    | 'iec-60309-2p-e-4h'
    | 'iec-60309-2p-e-6h'
    | 'iec-60309-2p-e-9h'
    | 'iec-60309-3p-e-4h'
    | 'iec-60309-3p-e-6h'
    | 'iec-60309-3p-e-9h'
    | 'iec-60309-3p-n-e-4h'
    | 'iec-60309-3p-n-e-6h'
    | 'iec-60309-3p-n-e-9h'
    | 'nema-1-15p'
    | 'nema-5-15p'
    | 'nema-5-20p'
    | 'nema-5-30p'
    | 'nema-5-50p'
    | 'nema-6-15p'
    | 'nema-6-20p'
    | 'nema-6-30p'
    | 'nema-6-50p'
    | 'nema-10-30p'
    | 'nema-10-50p'
    | 'nema-14-20p'
    | 'nema-14-30p'
    | 'nema-14-50p'
    | 'nema-14-60p'
    | 'nema-l1-15p'
    | 'nema-l5-15p'
    | 'nema-l5-20p'
    | 'nema-l5-30p'
    | 'nema-l5-50p'
    | 'nema-l6-15p'
    | 'nema-l6-20p'
    | 'nema-l6-30p'
    | 'nema-l6-50p'
    | 'nema-l10-30p'
    | 'nema-l14-20p'
    | 'nema-l14-30p'
    | 'nema-l14-50p'
    | 'nema-l14-60p'
    | 'nema-l21-20p'
    | 'nema-l21-30p'
    | 'cs6361c'
    | 'cs6365c'
    | 'cs8165c'
    | 'cs8265c'
    | 'cs8365c'
    | 'cs8465c'
    | 'ita-e'
    | 'ita-f'
    | 'ita-ef'
    | 'ita-g'
    | 'ita-h'
    | 'ita-i'
    | 'ita-j'
    | 'ita-k'
    | 'ita-l'
    | 'ita-m'
    | 'ita-n'
    | 'ita-o'
    | undefined
}
type RackGroup = {
  description?: string | undefined
  id?: number | undefined
  name: string
  parent?: NestedRackGroup | undefined
  rack_count?: number | undefined
  site: NestedSite
  slug: string
}
type WritableRackGroup = {
  description?: string | undefined
  id?: number | undefined
  name: string
  parent?: (number | null) | undefined
  rack_count?: number | undefined
  site: number
  slug: string
}
type NestedUser = { id?: number | undefined; username: string }
type RackReservation = {
  created?: string | undefined
  description: string
  id?: number | undefined
  rack: NestedRack
  tenant?: NestedTenant | undefined
  units: number[]
  user: NestedUser
}
type WritableRackReservation = {
  created?: string | undefined
  description: string
  id?: number | undefined
  rack: number
  tenant?: (number | null) | undefined
  units: number[]
  user: number
}
type RackRole = {
  color?: string | undefined
  description?: string | undefined
  id?: number | undefined
  name: string
  rack_count?: number | undefined
  slug: string
}
type NestedRackRole = {
  id?: number | undefined
  name: string
  rack_count?: number | undefined
  slug: string
  url?: string | undefined
}
type Rack = {
  asset_tag?: (string | null) | undefined
  comments?: string | undefined
  created?: string | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  desc_units?: boolean | undefined
  device_count?: number | undefined
  display_name?: string | undefined
  facility_id?: (string | null) | undefined
  group?: NestedRackGroup | undefined
  id?: number | undefined
  last_updated?: string | undefined
  name: string
  outer_depth?: (number | null) | undefined
  outer_unit?: { label: 'Millimeters' | 'Inches'; value: 'mm' | 'in' } | undefined
  outer_width?: (number | null) | undefined
  powerfeed_count?: number | undefined
  role?: NestedRackRole | undefined
  serial?: string | undefined
  site: NestedSite
  status?:
    | {
        label: 'Reserved' | 'Available' | 'Planned' | 'Active' | 'Deprecated'
        value: 'reserved' | 'available' | 'planned' | 'active' | 'deprecated'
      }
    | undefined
  tags?: string[] | undefined
  tenant?: NestedTenant | undefined
  type?:
    | {
        label:
          | '2-post frame'
          | '4-post frame'
          | '4-post cabinet'
          | 'Wall-mounted frame'
          | 'Wall-mounted cabinet'
        value: '2-post-frame' | '4-post-frame' | '4-post-cabinet' | 'wall-frame' | 'wall-cabinet'
      }
    | undefined
  u_height?: number | undefined
  width?:
    | { label: '10 inches' | '19 inches' | '21 inches' | '23 inches'; value: 10 | 19 | 21 | 23 }
    | undefined
}
type WritableRack = {
  asset_tag?: (string | null) | undefined
  comments?: string | undefined
  created?: string | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  desc_units?: boolean | undefined
  device_count?: number | undefined
  display_name?: string | undefined
  facility_id?: (string | null) | undefined
  group?: (number | null) | undefined
  id?: number | undefined
  last_updated?: string | undefined
  name: string
  outer_depth?: (number | null) | undefined
  outer_unit?: 'mm' | 'in' | undefined
  outer_width?: (number | null) | undefined
  powerfeed_count?: number | undefined
  role?: (number | null) | undefined
  serial?: string | undefined
  site: number
  status?: 'reserved' | 'available' | 'planned' | 'active' | 'deprecated' | undefined
  tags?: string[] | undefined
  tenant?: (number | null) | undefined
  type?:
    | '2-post-frame'
    | '4-post-frame'
    | '4-post-cabinet'
    | 'wall-frame'
    | 'wall-cabinet'
    | undefined
  u_height?: number | undefined
  width?: 10 | 19 | 21 | 23 | undefined
}
type RackUnit = {
  device?: NestedDevice | undefined
  face?: { label: 'Front' | 'Rear'; value: 'front' | 'rear' } | undefined
  id?: number | undefined
  name?: string | undefined
}
type RearPortTemplate = {
  device_type: NestedDeviceType
  id?: number | undefined
  name: string
  positions?: number | undefined
  type: {
    label:
      | '8P8C'
      | '110 Punch'
      | 'BNC'
      | 'MRJ21'
      | 'FC'
      | 'LC'
      | 'LC/APC'
      | 'LSH'
      | 'LSH/APC'
      | 'MPO'
      | 'MTRJ'
      | 'SC'
      | 'SC/APC'
      | 'ST'
    value:
      | '8p8c'
      | '110-punch'
      | 'bnc'
      | 'mrj21'
      | 'fc'
      | 'lc'
      | 'lc-apc'
      | 'lsh'
      | 'lsh-apc'
      | 'mpo'
      | 'mtrj'
      | 'sc'
      | 'sc-apc'
      | 'st'
  }
}
type WritableRearPortTemplate = {
  device_type: number
  id?: number | undefined
  name: string
  positions?: number | undefined
  type:
    | '8p8c'
    | '110-punch'
    | 'bnc'
    | 'mrj21'
    | 'fc'
    | 'lc'
    | 'lc-apc'
    | 'lsh'
    | 'lsh-apc'
    | 'mpo'
    | 'mtrj'
    | 'sc'
    | 'sc-apc'
    | 'st'
}
type RearPort = {
  cable?: NestedCable | undefined
  description?: string | undefined
  device: NestedDevice
  id?: number | undefined
  name: string
  positions?: number | undefined
  tags?: string[] | undefined
  type: {
    label:
      | '8P8C'
      | '110 Punch'
      | 'BNC'
      | 'MRJ21'
      | 'FC'
      | 'LC'
      | 'LC/APC'
      | 'LSH'
      | 'LSH/APC'
      | 'MPO'
      | 'MTRJ'
      | 'SC'
      | 'SC/APC'
      | 'ST'
    value:
      | '8p8c'
      | '110-punch'
      | 'bnc'
      | 'mrj21'
      | 'fc'
      | 'lc'
      | 'lc-apc'
      | 'lsh'
      | 'lsh-apc'
      | 'mpo'
      | 'mtrj'
      | 'sc'
      | 'sc-apc'
      | 'st'
  }
}
type WritableRearPort = {
  cable?: NestedCable | undefined
  description?: string | undefined
  device: number
  id?: number | undefined
  name: string
  positions?: number | undefined
  tags?: string[] | undefined
  type:
    | '8p8c'
    | '110-punch'
    | 'bnc'
    | 'mrj21'
    | 'fc'
    | 'lc'
    | 'lc-apc'
    | 'lsh'
    | 'lsh-apc'
    | 'mpo'
    | 'mtrj'
    | 'sc'
    | 'sc-apc'
    | 'st'
}
type NestedRegion = {
  id?: number | undefined
  name: string
  site_count?: number | undefined
  slug: string
  url?: string | undefined
}
type Region = {
  description?: string | undefined
  id?: number | undefined
  name: string
  parent?: NestedRegion | undefined
  site_count?: number | undefined
  slug: string
}
type WritableRegion = {
  description?: string | undefined
  id?: number | undefined
  name: string
  parent?: (number | null) | undefined
  site_count?: number | undefined
  slug: string
}
type Site = {
  asn?: (number | null) | undefined
  circuit_count?: number | undefined
  comments?: string | undefined
  contact_email?: string | undefined
  contact_name?: string | undefined
  contact_phone?: string | undefined
  created?: string | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  device_count?: number | undefined
  facility?: string | undefined
  id?: number | undefined
  last_updated?: string | undefined
  latitude?: (string | null) | undefined
  longitude?: (string | null) | undefined
  name: string
  physical_address?: string | undefined
  prefix_count?: number | undefined
  rack_count?: number | undefined
  region?: NestedRegion | undefined
  shipping_address?: string | undefined
  slug: string
  status?:
    | { label: 'Active' | 'Planned' | 'Retired'; value: 'active' | 'planned' | 'retired' }
    | undefined
  tags?: string[] | undefined
  tenant?: NestedTenant | undefined
  time_zone?: string | undefined
  virtualmachine_count?: number | undefined
  vlan_count?: number | undefined
}
type WritableSite = {
  asn?: (number | null) | undefined
  circuit_count?: number | undefined
  comments?: string | undefined
  contact_email?: string | undefined
  contact_name?: string | undefined
  contact_phone?: string | undefined
  created?: string | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  device_count?: number | undefined
  facility?: string | undefined
  id?: number | undefined
  last_updated?: string | undefined
  latitude?: (string | null) | undefined
  longitude?: (string | null) | undefined
  name: string
  physical_address?: string | undefined
  prefix_count?: number | undefined
  rack_count?: number | undefined
  region?: (number | null) | undefined
  shipping_address?: string | undefined
  slug: string
  status?: 'active' | 'planned' | 'retired' | undefined
  tags?: string[] | undefined
  tenant?: (number | null) | undefined
  time_zone?: string | undefined
  virtualmachine_count?: number | undefined
  vlan_count?: number | undefined
}
type VirtualChassis = {
  domain?: string | undefined
  id?: number | undefined
  master: NestedDevice
  member_count?: number | undefined
  tags?: string[] | undefined
}
type WritableVirtualChassis = {
  domain?: string | undefined
  id?: number | undefined
  master: number
  member_count?: number | undefined
  tags?: string[] | undefined
}
type NestedClusterGroup = {
  cluster_count?: number | undefined
  id?: number | undefined
  name: string
  slug: string
  url?: string | undefined
}
type NestedTenantGroup = {
  id?: number | undefined
  name: string
  slug: string
  tenant_count?: number | undefined
  url?: string | undefined
}
type ConfigContext = {
  cluster_groups?: NestedClusterGroup[] | undefined
  clusters?: NestedCluster[] | undefined
  data: string
  description?: string | undefined
  id?: number | undefined
  is_active?: boolean | undefined
  name: string
  platforms?: NestedPlatform[] | undefined
  regions?: NestedRegion[] | undefined
  roles?: NestedDeviceRole[] | undefined
  sites?: NestedSite[] | undefined
  tags?: string[] | undefined
  tenant_groups?: NestedTenantGroup[] | undefined
  tenants?: NestedTenant[] | undefined
  weight?: number | undefined
}
type WritableConfigContext = {
  cluster_groups?: number[] | undefined
  clusters?: number[] | undefined
  data: string
  description?: string | undefined
  id?: number | undefined
  is_active?: boolean | undefined
  name: string
  platforms?: number[] | undefined
  regions?: number[] | undefined
  roles?: number[] | undefined
  sites?: number[] | undefined
  tags?: string[] | undefined
  tenant_groups?: number[] | undefined
  tenants?: number[] | undefined
  weight?: number | undefined
}
type ExportTemplate = {
  content_type: string
  description?: string | undefined
  file_extension?: string | undefined
  id?: number | undefined
  mime_type?: string | undefined
  name: string
  template_code: string
  template_language?: { label: 'Django' | 'Jinja2'; value: 'django' | 'jinja2' } | undefined
}
type WritableExportTemplate = {
  content_type: string
  description?: string | undefined
  file_extension?: string | undefined
  id?: number | undefined
  mime_type?: string | undefined
  name: string
  template_code: string
  template_language?: 'django' | 'jinja2' | undefined
}
type Graph = {
  id?: number | undefined
  link?: string | undefined
  name: string
  source: string
  template_language?: 'django' | 'jinja2' | undefined
  type: string
  weight?: number | undefined
}
type ImageAttachment = {
  content_type: string
  created?: string | undefined
  id?: number | undefined
  image?: string | undefined
  image_height: number
  image_width: number
  name?: string | undefined
  object_id: number
  parent?: { [x: string]: string } | undefined
}
type ObjectChange = {
  action?:
    | { label: 'Created' | 'Updated' | 'Deleted'; value: 'create' | 'update' | 'delete' }
    | undefined
  changed_object?: { [x: string]: string } | undefined
  changed_object_id: number
  changed_object_type?: string | undefined
  id?: number | undefined
  object_data?: string | undefined
  request_id?: string | undefined
  time?: string | undefined
  user?: NestedUser | undefined
  user_name?: string | undefined
}
type Tag = {
  color?: string | undefined
  description?: string | undefined
  id?: number | undefined
  name: string
  slug: string
  tagged_items?: number | undefined
}
type NestedRIR = {
  aggregate_count?: number | undefined
  id?: number | undefined
  name: string
  slug: string
  url?: string | undefined
}
type Aggregate = {
  created?: string | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  date_added?: (string | null) | undefined
  description?: string | undefined
  family?: { label: 'IPv4' | 'IPv6'; value: 4 | 6 } | undefined
  id?: number | undefined
  last_updated?: string | undefined
  prefix: string
  rir: NestedRIR
  tags?: string[] | undefined
}
type WritableAggregate = {
  created?: string | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  date_added?: (string | null) | undefined
  description?: string | undefined
  family?: string | undefined
  id?: number | undefined
  last_updated?: string | undefined
  prefix: string
  rir: number
  tags?: string[] | undefined
}
type NestedVirtualMachine = { id?: number | undefined; name: string; url?: string | undefined }
type IPAddressInterface = {
  device?: NestedDevice | undefined
  id?: number | undefined
  name: string
  url?: string | undefined
  virtual_machine?: NestedVirtualMachine | undefined
}
type NestedVRF = {
  id?: number | undefined
  name: string
  prefix_count?: number | undefined
  rd?: (string | null) | undefined
  url?: string | undefined
}
type IPAddress = {
  address: string
  created?: string | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  dns_name?: string | undefined
  family?: { label: 'IPv4' | 'IPv6'; value: 4 | 6 } | undefined
  id?: number | undefined
  interface?: IPAddressInterface | undefined
  last_updated?: string | undefined
  nat_inside?: NestedIPAddress | undefined
  nat_outside?: NestedIPAddress | undefined
  role?:
    | {
        label: 'Loopback' | 'Secondary' | 'Anycast' | 'VIP' | 'VRRP' | 'HSRP' | 'GLBP' | 'CARP'
        value: 'loopback' | 'secondary' | 'anycast' | 'vip' | 'vrrp' | 'hsrp' | 'glbp' | 'carp'
      }
    | undefined
  status?:
    | {
        label: 'Active' | 'Reserved' | 'Deprecated' | 'DHCP'
        value: 'active' | 'reserved' | 'deprecated' | 'dhcp'
      }
    | undefined
  tags?: string[] | undefined
  tenant?: NestedTenant | undefined
  vrf?: NestedVRF | undefined
}
type WritableIPAddress = {
  address: string
  created?: string | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  dns_name?: string | undefined
  family?: string | undefined
  id?: number | undefined
  interface?: (number | null) | undefined
  last_updated?: string | undefined
  nat_inside?: (number | null) | undefined
  nat_outside: number
  role?:
    | 'loopback'
    | 'secondary'
    | 'anycast'
    | 'vip'
    | 'vrrp'
    | 'hsrp'
    | 'glbp'
    | 'carp'
    | undefined
  status?: 'active' | 'reserved' | 'deprecated' | 'dhcp' | undefined
  tags?: string[] | undefined
  tenant?: (number | null) | undefined
  vrf?: (number | null) | undefined
}
type NestedRole = {
  id?: number | undefined
  name: string
  prefix_count?: number | undefined
  slug: string
  url?: string | undefined
  vlan_count?: number | undefined
}
type Prefix = {
  created?: string | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  family?: { label: 'IPv4' | 'IPv6'; value: 4 | 6 } | undefined
  id?: number | undefined
  is_pool?: boolean | undefined
  last_updated?: string | undefined
  prefix: string
  role?: NestedRole | undefined
  site?: NestedSite | undefined
  status?:
    | {
        label: 'Container' | 'Active' | 'Reserved' | 'Deprecated'
        value: 'container' | 'active' | 'reserved' | 'deprecated'
      }
    | undefined
  tags?: string[] | undefined
  tenant?: NestedTenant | undefined
  vlan?: NestedVLAN | undefined
  vrf?: NestedVRF | undefined
}
type WritablePrefix = {
  created?: string | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  family?: string | undefined
  id?: number | undefined
  is_pool?: boolean | undefined
  last_updated?: string | undefined
  prefix: string
  role?: (number | null) | undefined
  site?: (number | null) | undefined
  status?: 'container' | 'active' | 'reserved' | 'deprecated' | undefined
  tags?: string[] | undefined
  tenant?: (number | null) | undefined
  vlan?: (number | null) | undefined
  vrf?: (number | null) | undefined
}
type AvailableIP = {
  address?: string | undefined
  family?: number | undefined
  vrf?: NestedVRF | undefined
}
type WritableAvailableIP = { address?: string | undefined; family?: number | undefined }
type AvailablePrefix = {
  family?: number | undefined
  prefix?: string | undefined
  vrf?: NestedVRF | undefined
}
type RIR = {
  aggregate_count?: number | undefined
  description?: string | undefined
  id?: number | undefined
  is_private?: boolean | undefined
  name: string
  slug: string
}
type Role = {
  description?: string | undefined
  id?: number | undefined
  name: string
  prefix_count?: number | undefined
  slug: string
  vlan_count?: number | undefined
  weight?: number | undefined
}
type Service = {
  created?: string | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  device?: NestedDevice | undefined
  id?: number | undefined
  ipaddresses?: NestedIPAddress[] | undefined
  last_updated?: string | undefined
  name: string
  port: number
  protocol?: { label: 'TCP' | 'UDP'; value: 'tcp' | 'udp' } | undefined
  tags?: string[] | undefined
  virtual_machine?: NestedVirtualMachine | undefined
}
type WritableService = {
  created?: string | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  device?: (number | null) | undefined
  id?: number | undefined
  ipaddresses?: number[] | undefined
  last_updated?: string | undefined
  name: string
  port: number
  protocol: 'tcp' | 'udp'
  tags?: string[] | undefined
  virtual_machine?: (number | null) | undefined
}
type VLANGroup = {
  description?: string | undefined
  id?: number | undefined
  name: string
  site?: NestedSite | undefined
  slug: string
  vlan_count?: number | undefined
}
type WritableVLANGroup = {
  description?: string | undefined
  id?: number | undefined
  name: string
  site?: (number | null) | undefined
  slug: string
  vlan_count?: number | undefined
}
type NestedVLANGroup = {
  id?: number | undefined
  name: string
  slug: string
  url?: string | undefined
  vlan_count?: number | undefined
}
type VLAN = {
  created?: string | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display_name?: string | undefined
  group?: NestedVLANGroup | undefined
  id?: number | undefined
  last_updated?: string | undefined
  name: string
  prefix_count?: number | undefined
  role?: NestedRole | undefined
  site?: NestedSite | undefined
  status?:
    | { label: 'Active' | 'Reserved' | 'Deprecated'; value: 'active' | 'reserved' | 'deprecated' }
    | undefined
  tags?: string[] | undefined
  tenant?: NestedTenant | undefined
  vid: number
}
type WritableVLAN = {
  created?: string | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display_name?: string | undefined
  group?: (number | null) | undefined
  id?: number | undefined
  last_updated?: string | undefined
  name: string
  prefix_count?: number | undefined
  role?: (number | null) | undefined
  site?: (number | null) | undefined
  status?: 'active' | 'reserved' | 'deprecated' | undefined
  tags?: string[] | undefined
  tenant?: (number | null) | undefined
  vid: number
}
type VRF = {
  created?: string | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display_name?: string | undefined
  enforce_unique?: boolean | undefined
  id?: number | undefined
  ipaddress_count?: number | undefined
  last_updated?: string | undefined
  name: string
  prefix_count?: number | undefined
  rd?: (string | null) | undefined
  tags?: string[] | undefined
  tenant?: NestedTenant | undefined
}
type WritableVRF = {
  created?: string | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display_name?: string | undefined
  enforce_unique?: boolean | undefined
  id?: number | undefined
  ipaddress_count?: number | undefined
  last_updated?: string | undefined
  name: string
  prefix_count?: number | undefined
  rd?: (string | null) | undefined
  tags?: string[] | undefined
  tenant?: (number | null) | undefined
}
type SecretRole = {
  description?: string | undefined
  id?: number | undefined
  name: string
  secret_count?: number | undefined
  slug: string
}
type NestedSecretRole = {
  id?: number | undefined
  name: string
  secret_count?: number | undefined
  slug: string
  url?: string | undefined
}
type Secret = {
  created?: string | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  device: NestedDevice
  hash?: string | undefined
  id?: number | undefined
  last_updated?: string | undefined
  name?: string | undefined
  plaintext: string
  role: NestedSecretRole
  tags?: string[] | undefined
}
type WritableSecret = {
  created?: string | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  device: number
  hash?: string | undefined
  id?: number | undefined
  last_updated?: string | undefined
  name?: string | undefined
  plaintext: string
  role: number
  tags?: string[] | undefined
}
type TenantGroup = {
  description?: string | undefined
  id?: number | undefined
  name: string
  parent?: NestedTenantGroup | undefined
  slug: string
  tenant_count?: number | undefined
}
type WritableTenantGroup = {
  description?: string | undefined
  id?: number | undefined
  name: string
  parent?: (number | null) | undefined
  slug: string
  tenant_count?: number | undefined
}
type Tenant = {
  circuit_count?: number | undefined
  cluster_count?: number | undefined
  comments?: string | undefined
  created?: string | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  device_count?: number | undefined
  group?: NestedTenantGroup | undefined
  id?: number | undefined
  ipaddress_count?: number | undefined
  last_updated?: string | undefined
  name: string
  prefix_count?: number | undefined
  rack_count?: number | undefined
  site_count?: number | undefined
  slug: string
  tags?: string[] | undefined
  virtualmachine_count?: number | undefined
  vlan_count?: number | undefined
  vrf_count?: number | undefined
}
type WritableTenant = {
  circuit_count?: number | undefined
  cluster_count?: number | undefined
  comments?: string | undefined
  created?: string | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  device_count?: number | undefined
  group?: (number | null) | undefined
  id?: number | undefined
  ipaddress_count?: number | undefined
  last_updated?: string | undefined
  name: string
  prefix_count?: number | undefined
  rack_count?: number | undefined
  site_count?: number | undefined
  slug: string
  tags?: string[] | undefined
  virtualmachine_count?: number | undefined
  vlan_count?: number | undefined
  vrf_count?: number | undefined
}
type ClusterGroup = {
  cluster_count?: number | undefined
  description?: string | undefined
  id?: number | undefined
  name: string
  slug: string
}
type ClusterType = {
  cluster_count?: number | undefined
  description?: string | undefined
  id?: number | undefined
  name: string
  slug: string
}
type NestedClusterType = {
  cluster_count?: number | undefined
  id?: number | undefined
  name: string
  slug: string
  url?: string | undefined
}
type Cluster = {
  comments?: string | undefined
  created?: string | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  device_count?: number | undefined
  group?: NestedClusterGroup | undefined
  id?: number | undefined
  last_updated?: string | undefined
  name: string
  site?: NestedSite | undefined
  tags?: string[] | undefined
  tenant?: NestedTenant | undefined
  type: NestedClusterType
  virtualmachine_count?: number | undefined
}
type WritableCluster = {
  comments?: string | undefined
  created?: string | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  device_count?: number | undefined
  group?: (number | null) | undefined
  id?: number | undefined
  last_updated?: string | undefined
  name: string
  site?: (number | null) | undefined
  tags?: string[] | undefined
  tenant?: (number | null) | undefined
  type: number
  virtualmachine_count?: number | undefined
}
type VirtualMachineInterface = {
  description?: string | undefined
  enabled?: boolean | undefined
  id?: number | undefined
  mac_address?: (string | null) | undefined
  mode?:
    | { label: 'Access' | 'Tagged' | 'Tagged (All)'; value: 'access' | 'tagged' | 'tagged-all' }
    | undefined
  mtu?: (number | null) | undefined
  name: string
  tagged_vlans?: NestedVLAN[] | undefined
  tags?: string[] | undefined
  type?: { label: 'Virtual'; value: 'virtual' } | undefined
  untagged_vlan?: NestedVLAN | undefined
  virtual_machine: NestedVirtualMachine
}
type WritableVirtualMachineInterface = {
  description?: string | undefined
  enabled?: boolean | undefined
  id?: number | undefined
  mac_address?: (string | null) | undefined
  mode?: 'access' | 'tagged' | 'tagged-all' | undefined
  mtu?: (number | null) | undefined
  name: string
  tagged_vlans?: number[] | undefined
  tags?: string[] | undefined
  type:
    | 'virtual'
    | 'lag'
    | '100base-tx'
    | '1000base-t'
    | '2.5gbase-t'
    | '5gbase-t'
    | '10gbase-t'
    | '10gbase-cx4'
    | '1000base-x-gbic'
    | '1000base-x-sfp'
    | '10gbase-x-sfpp'
    | '10gbase-x-xfp'
    | '10gbase-x-xenpak'
    | '10gbase-x-x2'
    | '25gbase-x-sfp28'
    | '40gbase-x-qsfpp'
    | '50gbase-x-sfp28'
    | '100gbase-x-cfp'
    | '100gbase-x-cfp2'
    | '200gbase-x-cfp2'
    | '100gbase-x-cfp4'
    | '100gbase-x-cpak'
    | '100gbase-x-qsfp28'
    | '200gbase-x-qsfp56'
    | '400gbase-x-qsfpdd'
    | '400gbase-x-osfp'
    | 'ieee802.11a'
    | 'ieee802.11g'
    | 'ieee802.11n'
    | 'ieee802.11ac'
    | 'ieee802.11ad'
    | 'ieee802.11ax'
    | 'gsm'
    | 'cdma'
    | 'lte'
    | 'sonet-oc3'
    | 'sonet-oc12'
    | 'sonet-oc48'
    | 'sonet-oc192'
    | 'sonet-oc768'
    | 'sonet-oc1920'
    | 'sonet-oc3840'
    | '1gfc-sfp'
    | '2gfc-sfp'
    | '4gfc-sfp'
    | '8gfc-sfpp'
    | '16gfc-sfpp'
    | '32gfc-sfp28'
    | '128gfc-sfp28'
    | 'infiniband-sdr'
    | 'infiniband-ddr'
    | 'infiniband-qdr'
    | 'infiniband-fdr10'
    | 'infiniband-fdr'
    | 'infiniband-edr'
    | 'infiniband-hdr'
    | 'infiniband-ndr'
    | 'infiniband-xdr'
    | 't1'
    | 'e1'
    | 't3'
    | 'e3'
    | 'cisco-stackwise'
    | 'cisco-stackwise-plus'
    | 'cisco-flexstack'
    | 'cisco-flexstack-plus'
    | 'juniper-vcp'
    | 'extreme-summitstack'
    | 'extreme-summitstack-128'
    | 'extreme-summitstack-256'
    | 'extreme-summitstack-512'
    | 'other'
  untagged_vlan?: (number | null) | undefined
  virtual_machine?: (number | null) | undefined
}
type VirtualMachineWithConfigContext = {
  cluster: NestedCluster
  comments?: string | undefined
  config_context?: { [x: string]: string } | undefined
  created?: string | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  disk?: (number | null) | undefined
  id?: number | undefined
  last_updated?: string | undefined
  local_context_data?: (string | null) | undefined
  memory?: (number | null) | undefined
  name: string
  platform?: NestedPlatform | undefined
  primary_ip?: NestedIPAddress | undefined
  primary_ip4?: NestedIPAddress | undefined
  primary_ip6?: NestedIPAddress | undefined
  role?: NestedDeviceRole | undefined
  site?: NestedSite | undefined
  status?:
    | {
        label: 'Offline' | 'Active' | 'Planned' | 'Staged' | 'Failed' | 'Decommissioning'
        value: 'offline' | 'active' | 'planned' | 'staged' | 'failed' | 'decommissioning'
      }
    | undefined
  tags?: string[] | undefined
  tenant?: NestedTenant | undefined
  vcpus?: (number | null) | undefined
}
type WritableVirtualMachineWithConfigContext = {
  cluster: number
  comments?: string | undefined
  config_context?: { [x: string]: string } | undefined
  created?: string | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  disk?: (number | null) | undefined
  id?: number | undefined
  last_updated?: string | undefined
  local_context_data?: (string | null) | undefined
  memory?: (number | null) | undefined
  name: string
  platform?: (number | null) | undefined
  primary_ip?: string | undefined
  primary_ip4?: (number | null) | undefined
  primary_ip6?: (number | null) | undefined
  role?: (number | null) | undefined
  site?: string | undefined
  status?: 'offline' | 'active' | 'planned' | 'staged' | 'failed' | 'decommissioning' | undefined
  tags?: string[] | undefined
  tenant?: (number | null) | undefined
  vcpus?: (number | null) | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/circuits/circuit-terminations/': {
      $get: {
        input: {
          query: {
            term_side?: string | undefined
            port_speed?: string | undefined
            upstream_speed?: string | undefined
            xconnect_id?: string | undefined
            q?: string | undefined
            circuit_id?: string | undefined
            site_id?: string | undefined
            site?: string | undefined
            term_side__n?: string | undefined
            port_speed__n?: string | undefined
            port_speed__lte?: string | undefined
            port_speed__lt?: string | undefined
            port_speed__gte?: string | undefined
            port_speed__gt?: string | undefined
            upstream_speed__n?: string | undefined
            upstream_speed__lte?: string | undefined
            upstream_speed__lt?: string | undefined
            upstream_speed__gte?: string | undefined
            upstream_speed__gt?: string | undefined
            xconnect_id__n?: string | undefined
            xconnect_id__ic?: string | undefined
            xconnect_id__nic?: string | undefined
            xconnect_id__iew?: string | undefined
            xconnect_id__niew?: string | undefined
            xconnect_id__isw?: string | undefined
            xconnect_id__nisw?: string | undefined
            xconnect_id__ie?: string | undefined
            xconnect_id__nie?: string | undefined
            circuit_id__n?: string | undefined
            site_id__n?: string | undefined
            site__n?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: CircuitTermination[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableCircuitTermination }
        output: CircuitTermination
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/circuits/circuit-terminations/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: CircuitTermination
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: WritableCircuitTermination }
        output: CircuitTermination
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableCircuitTermination }
        output: CircuitTermination
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/circuits/circuit-types/': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            slug?: string | undefined
            q?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            name__n?: string | undefined
            name__ic?: string | undefined
            name__nic?: string | undefined
            name__iew?: string | undefined
            name__niew?: string | undefined
            name__isw?: string | undefined
            name__nisw?: string | undefined
            name__ie?: string | undefined
            name__nie?: string | undefined
            slug__n?: string | undefined
            slug__ic?: string | undefined
            slug__nic?: string | undefined
            slug__iew?: string | undefined
            slug__niew?: string | undefined
            slug__isw?: string | undefined
            slug__nisw?: string | undefined
            slug__ie?: string | undefined
            slug__nie?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: CircuitType[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: CircuitType }
        output: CircuitType
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/circuits/circuit-types/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: CircuitType
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: CircuitType }
        output: CircuitType
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: CircuitType }
        output: CircuitType
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/circuits/circuits/': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            cid?: string | undefined
            install_date?: string | undefined
            commit_rate?: string | undefined
            tenant_group_id?: string | undefined
            tenant_group?: string | undefined
            tenant_id?: string | undefined
            tenant?: string | undefined
            created?: string | undefined
            created__gte?: string | undefined
            created__lte?: string | undefined
            last_updated?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__lte?: string | undefined
            q?: string | undefined
            provider_id?: string | undefined
            provider?: string | undefined
            type_id?: string | undefined
            type?: string | undefined
            status?: string | undefined
            site_id?: string | undefined
            site?: string | undefined
            region_id?: string | undefined
            region?: string | undefined
            tag?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            cid__n?: string | undefined
            cid__ic?: string | undefined
            cid__nic?: string | undefined
            cid__iew?: string | undefined
            cid__niew?: string | undefined
            cid__isw?: string | undefined
            cid__nisw?: string | undefined
            cid__ie?: string | undefined
            cid__nie?: string | undefined
            install_date__n?: string | undefined
            install_date__lte?: string | undefined
            install_date__lt?: string | undefined
            install_date__gte?: string | undefined
            install_date__gt?: string | undefined
            commit_rate__n?: string | undefined
            commit_rate__lte?: string | undefined
            commit_rate__lt?: string | undefined
            commit_rate__gte?: string | undefined
            commit_rate__gt?: string | undefined
            tenant_group_id__n?: string | undefined
            tenant_group__n?: string | undefined
            tenant_id__n?: string | undefined
            tenant__n?: string | undefined
            provider_id__n?: string | undefined
            provider__n?: string | undefined
            type_id__n?: string | undefined
            type__n?: string | undefined
            status__n?: string | undefined
            site_id__n?: string | undefined
            site__n?: string | undefined
            region_id__n?: string | undefined
            region__n?: string | undefined
            tag__n?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: Circuit[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableCircuit }
        output: Circuit
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/circuits/circuits/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: { input: { param: { id: number } }; output: Circuit; outputFormat: 'json'; status: 200 }
      $patch: {
        input: { param: { id: number } } & { json: WritableCircuit }
        output: Circuit
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableCircuit }
        output: Circuit
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/circuits/providers/': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            slug?: string | undefined
            asn?: string | undefined
            account?: string | undefined
            created?: string | undefined
            created__gte?: string | undefined
            created__lte?: string | undefined
            last_updated?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__lte?: string | undefined
            q?: string | undefined
            region_id?: string | undefined
            region?: string | undefined
            site_id?: string | undefined
            site?: string | undefined
            tag?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            name__n?: string | undefined
            name__ic?: string | undefined
            name__nic?: string | undefined
            name__iew?: string | undefined
            name__niew?: string | undefined
            name__isw?: string | undefined
            name__nisw?: string | undefined
            name__ie?: string | undefined
            name__nie?: string | undefined
            slug__n?: string | undefined
            slug__ic?: string | undefined
            slug__nic?: string | undefined
            slug__iew?: string | undefined
            slug__niew?: string | undefined
            slug__isw?: string | undefined
            slug__nisw?: string | undefined
            slug__ie?: string | undefined
            slug__nie?: string | undefined
            asn__n?: string | undefined
            asn__lte?: string | undefined
            asn__lt?: string | undefined
            asn__gte?: string | undefined
            asn__gt?: string | undefined
            account__n?: string | undefined
            account__ic?: string | undefined
            account__nic?: string | undefined
            account__iew?: string | undefined
            account__niew?: string | undefined
            account__isw?: string | undefined
            account__nisw?: string | undefined
            account__ie?: string | undefined
            account__nie?: string | undefined
            region_id__n?: string | undefined
            region__n?: string | undefined
            site_id__n?: string | undefined
            site__n?: string | undefined
            tag__n?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: Provider[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: { input: { json: Provider }; output: Provider; outputFormat: 'json'; status: 201 }
    }
  } & {
    '/circuits/providers/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: Provider
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: Provider }
        output: Provider
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: Provider }
        output: Provider
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/circuits/providers/:id/graphs/': {
      $get: {
        input: { param: { id: number } }
        output: Provider
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/cables/': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            label?: string | undefined
            length?: string | undefined
            length_unit?: string | undefined
            q?: string | undefined
            type?: string | undefined
            status?: string | undefined
            color?: string | undefined
            device_id?: string | undefined
            device?: string | undefined
            rack_id?: string | undefined
            rack?: string | undefined
            site_id?: string | undefined
            site?: string | undefined
            tenant_id?: string | undefined
            tenant?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            label__n?: string | undefined
            label__ic?: string | undefined
            label__nic?: string | undefined
            label__iew?: string | undefined
            label__niew?: string | undefined
            label__isw?: string | undefined
            label__nisw?: string | undefined
            label__ie?: string | undefined
            label__nie?: string | undefined
            length__n?: string | undefined
            length__lte?: string | undefined
            length__lt?: string | undefined
            length__gte?: string | undefined
            length__gt?: string | undefined
            length_unit__n?: string | undefined
            type__n?: string | undefined
            status__n?: string | undefined
            color__n?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: Cable[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: { input: { json: WritableCable }; output: Cable; outputFormat: 'json'; status: 201 }
    }
  } & {
    '/dcim/cables/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: { input: { param: { id: number } }; output: Cable; outputFormat: 'json'; status: 200 }
      $patch: {
        input: { param: { id: number } } & { json: WritableCable }
        output: Cable
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableCable }
        output: Cable
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/connected-device/': {
      $get: {
        input: { query: { peer_device: string; peer_interface: string } }
        output: Device
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/console-connections/': {
      $get: {
        input: {
          query: {
            name?: string | undefined
            connection_status?: string | undefined
            site?: string | undefined
            device_id?: string | undefined
            device?: string | undefined
            name__n?: string | undefined
            name__ic?: string | undefined
            name__nic?: string | undefined
            name__iew?: string | undefined
            name__niew?: string | undefined
            name__isw?: string | undefined
            name__nisw?: string | undefined
            name__ie?: string | undefined
            name__nie?: string | undefined
            connection_status__n?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: ConsolePort[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/console-port-templates/': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            type?: string | undefined
            q?: string | undefined
            devicetype_id?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            name__n?: string | undefined
            name__ic?: string | undefined
            name__nic?: string | undefined
            name__iew?: string | undefined
            name__niew?: string | undefined
            name__isw?: string | undefined
            name__nisw?: string | undefined
            name__ie?: string | undefined
            name__nie?: string | undefined
            type__n?: string | undefined
            devicetype_id__n?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: ConsolePortTemplate[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableConsolePortTemplate }
        output: ConsolePortTemplate
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/dcim/console-port-templates/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: ConsolePortTemplate
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: WritableConsolePortTemplate }
        output: ConsolePortTemplate
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableConsolePortTemplate }
        output: ConsolePortTemplate
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/console-ports/': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            description?: string | undefined
            connection_status?: string | undefined
            q?: string | undefined
            region_id?: string | undefined
            region?: string | undefined
            site_id?: string | undefined
            site?: string | undefined
            device_id?: string | undefined
            device?: string | undefined
            tag?: string | undefined
            type?: string | undefined
            cabled?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            name__n?: string | undefined
            name__ic?: string | undefined
            name__nic?: string | undefined
            name__iew?: string | undefined
            name__niew?: string | undefined
            name__isw?: string | undefined
            name__nisw?: string | undefined
            name__ie?: string | undefined
            name__nie?: string | undefined
            description__n?: string | undefined
            description__ic?: string | undefined
            description__nic?: string | undefined
            description__iew?: string | undefined
            description__niew?: string | undefined
            description__isw?: string | undefined
            description__nisw?: string | undefined
            description__ie?: string | undefined
            description__nie?: string | undefined
            connection_status__n?: string | undefined
            region_id__n?: string | undefined
            region__n?: string | undefined
            site_id__n?: string | undefined
            site__n?: string | undefined
            device_id__n?: string | undefined
            device__n?: string | undefined
            tag__n?: string | undefined
            type__n?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: ConsolePort[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableConsolePort }
        output: ConsolePort
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/dcim/console-ports/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: ConsolePort
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: WritableConsolePort }
        output: ConsolePort
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableConsolePort }
        output: ConsolePort
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/console-ports/:id/trace/': {
      $get: {
        input: { param: { id: number } }
        output: ConsolePort
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/console-server-port-templates/': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            type?: string | undefined
            q?: string | undefined
            devicetype_id?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            name__n?: string | undefined
            name__ic?: string | undefined
            name__nic?: string | undefined
            name__iew?: string | undefined
            name__niew?: string | undefined
            name__isw?: string | undefined
            name__nisw?: string | undefined
            name__ie?: string | undefined
            name__nie?: string | undefined
            type__n?: string | undefined
            devicetype_id__n?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: ConsoleServerPortTemplate[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableConsoleServerPortTemplate }
        output: ConsoleServerPortTemplate
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/dcim/console-server-port-templates/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: ConsoleServerPortTemplate
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: WritableConsoleServerPortTemplate }
        output: ConsoleServerPortTemplate
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableConsoleServerPortTemplate }
        output: ConsoleServerPortTemplate
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/console-server-ports/': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            description?: string | undefined
            connection_status?: string | undefined
            q?: string | undefined
            region_id?: string | undefined
            region?: string | undefined
            site_id?: string | undefined
            site?: string | undefined
            device_id?: string | undefined
            device?: string | undefined
            tag?: string | undefined
            type?: string | undefined
            cabled?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            name__n?: string | undefined
            name__ic?: string | undefined
            name__nic?: string | undefined
            name__iew?: string | undefined
            name__niew?: string | undefined
            name__isw?: string | undefined
            name__nisw?: string | undefined
            name__ie?: string | undefined
            name__nie?: string | undefined
            description__n?: string | undefined
            description__ic?: string | undefined
            description__nic?: string | undefined
            description__iew?: string | undefined
            description__niew?: string | undefined
            description__isw?: string | undefined
            description__nisw?: string | undefined
            description__ie?: string | undefined
            description__nie?: string | undefined
            connection_status__n?: string | undefined
            region_id__n?: string | undefined
            region__n?: string | undefined
            site_id__n?: string | undefined
            site__n?: string | undefined
            device_id__n?: string | undefined
            device__n?: string | undefined
            tag__n?: string | undefined
            type__n?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: ConsoleServerPort[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableConsoleServerPort }
        output: ConsoleServerPort
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/dcim/console-server-ports/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: ConsoleServerPort
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: WritableConsoleServerPort }
        output: ConsoleServerPort
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableConsoleServerPort }
        output: ConsoleServerPort
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/console-server-ports/:id/trace/': {
      $get: {
        input: { param: { id: number } }
        output: ConsoleServerPort
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/device-bay-templates/': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            q?: string | undefined
            devicetype_id?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            name__n?: string | undefined
            name__ic?: string | undefined
            name__nic?: string | undefined
            name__iew?: string | undefined
            name__niew?: string | undefined
            name__isw?: string | undefined
            name__nisw?: string | undefined
            name__ie?: string | undefined
            name__nie?: string | undefined
            devicetype_id__n?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: DeviceBayTemplate[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableDeviceBayTemplate }
        output: DeviceBayTemplate
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/dcim/device-bay-templates/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: DeviceBayTemplate
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: WritableDeviceBayTemplate }
        output: DeviceBayTemplate
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableDeviceBayTemplate }
        output: DeviceBayTemplate
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/device-bays/': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            description?: string | undefined
            q?: string | undefined
            region_id?: string | undefined
            region?: string | undefined
            site_id?: string | undefined
            site?: string | undefined
            device_id?: string | undefined
            device?: string | undefined
            tag?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            name__n?: string | undefined
            name__ic?: string | undefined
            name__nic?: string | undefined
            name__iew?: string | undefined
            name__niew?: string | undefined
            name__isw?: string | undefined
            name__nisw?: string | undefined
            name__ie?: string | undefined
            name__nie?: string | undefined
            description__n?: string | undefined
            description__ic?: string | undefined
            description__nic?: string | undefined
            description__iew?: string | undefined
            description__niew?: string | undefined
            description__isw?: string | undefined
            description__nisw?: string | undefined
            description__ie?: string | undefined
            description__nie?: string | undefined
            region_id__n?: string | undefined
            region__n?: string | undefined
            site_id__n?: string | undefined
            site__n?: string | undefined
            device_id__n?: string | undefined
            device__n?: string | undefined
            tag__n?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: DeviceBay[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableDeviceBay }
        output: DeviceBay
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/dcim/device-bays/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: DeviceBay
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: WritableDeviceBay }
        output: DeviceBay
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableDeviceBay }
        output: DeviceBay
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/device-roles/': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            slug?: string | undefined
            color?: string | undefined
            vm_role?: string | undefined
            q?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            name__n?: string | undefined
            name__ic?: string | undefined
            name__nic?: string | undefined
            name__iew?: string | undefined
            name__niew?: string | undefined
            name__isw?: string | undefined
            name__nisw?: string | undefined
            name__ie?: string | undefined
            name__nie?: string | undefined
            slug__n?: string | undefined
            slug__ic?: string | undefined
            slug__nic?: string | undefined
            slug__iew?: string | undefined
            slug__niew?: string | undefined
            slug__isw?: string | undefined
            slug__nisw?: string | undefined
            slug__ie?: string | undefined
            slug__nie?: string | undefined
            color__n?: string | undefined
            color__ic?: string | undefined
            color__nic?: string | undefined
            color__iew?: string | undefined
            color__niew?: string | undefined
            color__isw?: string | undefined
            color__nisw?: string | undefined
            color__ie?: string | undefined
            color__nie?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: DeviceRole[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: { input: { json: DeviceRole }; output: DeviceRole; outputFormat: 'json'; status: 201 }
    }
  } & {
    '/dcim/device-roles/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: DeviceRole
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: DeviceRole }
        output: DeviceRole
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: DeviceRole }
        output: DeviceRole
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/device-types/': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            model?: string | undefined
            slug?: string | undefined
            part_number?: string | undefined
            u_height?: string | undefined
            is_full_depth?: string | undefined
            subdevice_role?: string | undefined
            created?: string | undefined
            created__gte?: string | undefined
            created__lte?: string | undefined
            last_updated?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__lte?: string | undefined
            q?: string | undefined
            manufacturer_id?: string | undefined
            manufacturer?: string | undefined
            console_ports?: string | undefined
            console_server_ports?: string | undefined
            power_ports?: string | undefined
            power_outlets?: string | undefined
            interfaces?: string | undefined
            pass_through_ports?: string | undefined
            device_bays?: string | undefined
            tag?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            model__n?: string | undefined
            model__ic?: string | undefined
            model__nic?: string | undefined
            model__iew?: string | undefined
            model__niew?: string | undefined
            model__isw?: string | undefined
            model__nisw?: string | undefined
            model__ie?: string | undefined
            model__nie?: string | undefined
            slug__n?: string | undefined
            slug__ic?: string | undefined
            slug__nic?: string | undefined
            slug__iew?: string | undefined
            slug__niew?: string | undefined
            slug__isw?: string | undefined
            slug__nisw?: string | undefined
            slug__ie?: string | undefined
            slug__nie?: string | undefined
            part_number__n?: string | undefined
            part_number__ic?: string | undefined
            part_number__nic?: string | undefined
            part_number__iew?: string | undefined
            part_number__niew?: string | undefined
            part_number__isw?: string | undefined
            part_number__nisw?: string | undefined
            part_number__ie?: string | undefined
            part_number__nie?: string | undefined
            u_height__n?: string | undefined
            u_height__lte?: string | undefined
            u_height__lt?: string | undefined
            u_height__gte?: string | undefined
            u_height__gt?: string | undefined
            subdevice_role__n?: string | undefined
            manufacturer_id__n?: string | undefined
            manufacturer__n?: string | undefined
            tag__n?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: DeviceType[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableDeviceType }
        output: DeviceType
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/dcim/device-types/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: DeviceType
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: WritableDeviceType }
        output: DeviceType
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableDeviceType }
        output: DeviceType
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/devices/': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            asset_tag?: string | undefined
            face?: string | undefined
            position?: string | undefined
            vc_position?: string | undefined
            vc_priority?: string | undefined
            tenant_group_id?: string | undefined
            tenant_group?: string | undefined
            tenant_id?: string | undefined
            tenant?: string | undefined
            local_context_data?: string | undefined
            created?: string | undefined
            created__gte?: string | undefined
            created__lte?: string | undefined
            last_updated?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__lte?: string | undefined
            q?: string | undefined
            manufacturer_id?: string | undefined
            manufacturer?: string | undefined
            device_type_id?: string | undefined
            role_id?: string | undefined
            role?: string | undefined
            platform_id?: string | undefined
            platform?: string | undefined
            region_id?: string | undefined
            region?: string | undefined
            site_id?: string | undefined
            site?: string | undefined
            rack_group_id?: string | undefined
            rack_id?: string | undefined
            cluster_id?: string | undefined
            model?: string | undefined
            status?: string | undefined
            is_full_depth?: string | undefined
            mac_address?: string | undefined
            serial?: string | undefined
            has_primary_ip?: string | undefined
            virtual_chassis_id?: string | undefined
            virtual_chassis_member?: string | undefined
            console_ports?: string | undefined
            console_server_ports?: string | undefined
            power_ports?: string | undefined
            power_outlets?: string | undefined
            interfaces?: string | undefined
            pass_through_ports?: string | undefined
            device_bays?: string | undefined
            tag?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            name__n?: string | undefined
            name__ic?: string | undefined
            name__nic?: string | undefined
            name__iew?: string | undefined
            name__niew?: string | undefined
            name__isw?: string | undefined
            name__nisw?: string | undefined
            name__ie?: string | undefined
            name__nie?: string | undefined
            asset_tag__n?: string | undefined
            asset_tag__ic?: string | undefined
            asset_tag__nic?: string | undefined
            asset_tag__iew?: string | undefined
            asset_tag__niew?: string | undefined
            asset_tag__isw?: string | undefined
            asset_tag__nisw?: string | undefined
            asset_tag__ie?: string | undefined
            asset_tag__nie?: string | undefined
            face__n?: string | undefined
            position__n?: string | undefined
            position__lte?: string | undefined
            position__lt?: string | undefined
            position__gte?: string | undefined
            position__gt?: string | undefined
            vc_position__n?: string | undefined
            vc_position__lte?: string | undefined
            vc_position__lt?: string | undefined
            vc_position__gte?: string | undefined
            vc_position__gt?: string | undefined
            vc_priority__n?: string | undefined
            vc_priority__lte?: string | undefined
            vc_priority__lt?: string | undefined
            vc_priority__gte?: string | undefined
            vc_priority__gt?: string | undefined
            tenant_group_id__n?: string | undefined
            tenant_group__n?: string | undefined
            tenant_id__n?: string | undefined
            tenant__n?: string | undefined
            manufacturer_id__n?: string | undefined
            manufacturer__n?: string | undefined
            device_type_id__n?: string | undefined
            role_id__n?: string | undefined
            role__n?: string | undefined
            platform_id__n?: string | undefined
            platform__n?: string | undefined
            region_id__n?: string | undefined
            region__n?: string | undefined
            site_id__n?: string | undefined
            site__n?: string | undefined
            rack_group_id__n?: string | undefined
            rack_id__n?: string | undefined
            cluster_id__n?: string | undefined
            model__n?: string | undefined
            status__n?: string | undefined
            mac_address__n?: string | undefined
            mac_address__ic?: string | undefined
            mac_address__nic?: string | undefined
            mac_address__iew?: string | undefined
            mac_address__niew?: string | undefined
            mac_address__isw?: string | undefined
            mac_address__nisw?: string | undefined
            mac_address__ie?: string | undefined
            mac_address__nie?: string | undefined
            virtual_chassis_id__n?: string | undefined
            tag__n?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: DeviceWithConfigContext[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableDeviceWithConfigContext }
        output: DeviceWithConfigContext
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/dcim/devices/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: DeviceWithConfigContext
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: WritableDeviceWithConfigContext }
        output: DeviceWithConfigContext
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableDeviceWithConfigContext }
        output: DeviceWithConfigContext
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/devices/:id/graphs/': {
      $get: {
        input: { param: { id: number } }
        output: DeviceWithConfigContext
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/devices/:id/napalm/': {
      $get: {
        input: { param: { id: number } } & { query: { method: string } }
        output: DeviceNAPALM
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/front-port-templates/': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            type?: string | undefined
            q?: string | undefined
            devicetype_id?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            name__n?: string | undefined
            name__ic?: string | undefined
            name__nic?: string | undefined
            name__iew?: string | undefined
            name__niew?: string | undefined
            name__isw?: string | undefined
            name__nisw?: string | undefined
            name__ie?: string | undefined
            name__nie?: string | undefined
            type__n?: string | undefined
            devicetype_id__n?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: FrontPortTemplate[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableFrontPortTemplate }
        output: FrontPortTemplate
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/dcim/front-port-templates/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: FrontPortTemplate
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: WritableFrontPortTemplate }
        output: FrontPortTemplate
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableFrontPortTemplate }
        output: FrontPortTemplate
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/front-ports/': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            type?: string | undefined
            description?: string | undefined
            q?: string | undefined
            region_id?: string | undefined
            region?: string | undefined
            site_id?: string | undefined
            site?: string | undefined
            device_id?: string | undefined
            device?: string | undefined
            tag?: string | undefined
            cabled?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            name__n?: string | undefined
            name__ic?: string | undefined
            name__nic?: string | undefined
            name__iew?: string | undefined
            name__niew?: string | undefined
            name__isw?: string | undefined
            name__nisw?: string | undefined
            name__ie?: string | undefined
            name__nie?: string | undefined
            type__n?: string | undefined
            description__n?: string | undefined
            description__ic?: string | undefined
            description__nic?: string | undefined
            description__iew?: string | undefined
            description__niew?: string | undefined
            description__isw?: string | undefined
            description__nisw?: string | undefined
            description__ie?: string | undefined
            description__nie?: string | undefined
            region_id__n?: string | undefined
            region__n?: string | undefined
            site_id__n?: string | undefined
            site__n?: string | undefined
            device_id__n?: string | undefined
            device__n?: string | undefined
            tag__n?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: FrontPort[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableFrontPort }
        output: FrontPort
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/dcim/front-ports/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: FrontPort
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: WritableFrontPort }
        output: FrontPort
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableFrontPort }
        output: FrontPort
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/front-ports/:id/trace/': {
      $get: {
        input: { param: { id: number } }
        output: FrontPort
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/interface-connections/': {
      $get: {
        input: {
          query: {
            connection_status?: string | undefined
            site?: string | undefined
            device_id?: string | undefined
            device?: string | undefined
            connection_status__n?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: InterfaceConnection[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/interface-templates/': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            type?: string | undefined
            mgmt_only?: string | undefined
            q?: string | undefined
            devicetype_id?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            name__n?: string | undefined
            name__ic?: string | undefined
            name__nic?: string | undefined
            name__iew?: string | undefined
            name__niew?: string | undefined
            name__isw?: string | undefined
            name__nisw?: string | undefined
            name__ie?: string | undefined
            name__nie?: string | undefined
            type__n?: string | undefined
            devicetype_id__n?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: InterfaceTemplate[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableInterfaceTemplate }
        output: InterfaceTemplate
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/dcim/interface-templates/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: InterfaceTemplate
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: WritableInterfaceTemplate }
        output: InterfaceTemplate
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableInterfaceTemplate }
        output: InterfaceTemplate
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/interfaces/': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            connection_status?: string | undefined
            type?: string | undefined
            enabled?: string | undefined
            mtu?: string | undefined
            mgmt_only?: string | undefined
            mode?: string | undefined
            description?: string | undefined
            q?: string | undefined
            region_id?: string | undefined
            region?: string | undefined
            site_id?: string | undefined
            site?: string | undefined
            device_id?: string | undefined
            device?: string | undefined
            tag?: string | undefined
            cabled?: string | undefined
            kind?: string | undefined
            lag_id?: string | undefined
            mac_address?: string | undefined
            vlan_id?: string | undefined
            vlan?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            name__n?: string | undefined
            name__ic?: string | undefined
            name__nic?: string | undefined
            name__iew?: string | undefined
            name__niew?: string | undefined
            name__isw?: string | undefined
            name__nisw?: string | undefined
            name__ie?: string | undefined
            name__nie?: string | undefined
            connection_status__n?: string | undefined
            type__n?: string | undefined
            mtu__n?: string | undefined
            mtu__lte?: string | undefined
            mtu__lt?: string | undefined
            mtu__gte?: string | undefined
            mtu__gt?: string | undefined
            mode__n?: string | undefined
            description__n?: string | undefined
            description__ic?: string | undefined
            description__nic?: string | undefined
            description__iew?: string | undefined
            description__niew?: string | undefined
            description__isw?: string | undefined
            description__nisw?: string | undefined
            description__ie?: string | undefined
            description__nie?: string | undefined
            region_id__n?: string | undefined
            region__n?: string | undefined
            site_id__n?: string | undefined
            site__n?: string | undefined
            tag__n?: string | undefined
            lag_id__n?: string | undefined
            mac_address__n?: string | undefined
            mac_address__ic?: string | undefined
            mac_address__nic?: string | undefined
            mac_address__iew?: string | undefined
            mac_address__niew?: string | undefined
            mac_address__isw?: string | undefined
            mac_address__nisw?: string | undefined
            mac_address__ie?: string | undefined
            mac_address__nie?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: DeviceInterface[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableDeviceInterface }
        output: DeviceInterface
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/dcim/interfaces/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: DeviceInterface
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: WritableDeviceInterface }
        output: DeviceInterface
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableDeviceInterface }
        output: DeviceInterface
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/interfaces/:id/graphs/': {
      $get: {
        input: { param: { id: number } }
        output: DeviceInterface
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/interfaces/:id/trace/': {
      $get: {
        input: { param: { id: number } }
        output: DeviceInterface
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/inventory-items/': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            part_id?: string | undefined
            asset_tag?: string | undefined
            discovered?: string | undefined
            q?: string | undefined
            region_id?: string | undefined
            region?: string | undefined
            site_id?: string | undefined
            site?: string | undefined
            device_id?: string | undefined
            device?: string | undefined
            tag?: string | undefined
            parent_id?: string | undefined
            manufacturer_id?: string | undefined
            manufacturer?: string | undefined
            serial?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            name__n?: string | undefined
            name__ic?: string | undefined
            name__nic?: string | undefined
            name__iew?: string | undefined
            name__niew?: string | undefined
            name__isw?: string | undefined
            name__nisw?: string | undefined
            name__ie?: string | undefined
            name__nie?: string | undefined
            part_id__n?: string | undefined
            part_id__ic?: string | undefined
            part_id__nic?: string | undefined
            part_id__iew?: string | undefined
            part_id__niew?: string | undefined
            part_id__isw?: string | undefined
            part_id__nisw?: string | undefined
            part_id__ie?: string | undefined
            part_id__nie?: string | undefined
            asset_tag__n?: string | undefined
            asset_tag__ic?: string | undefined
            asset_tag__nic?: string | undefined
            asset_tag__iew?: string | undefined
            asset_tag__niew?: string | undefined
            asset_tag__isw?: string | undefined
            asset_tag__nisw?: string | undefined
            asset_tag__ie?: string | undefined
            asset_tag__nie?: string | undefined
            region_id__n?: string | undefined
            region__n?: string | undefined
            site_id__n?: string | undefined
            site__n?: string | undefined
            device_id__n?: string | undefined
            device__n?: string | undefined
            tag__n?: string | undefined
            parent_id__n?: string | undefined
            manufacturer_id__n?: string | undefined
            manufacturer__n?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: InventoryItem[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableInventoryItem }
        output: InventoryItem
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/dcim/inventory-items/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: InventoryItem
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: WritableInventoryItem }
        output: InventoryItem
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableInventoryItem }
        output: InventoryItem
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/manufacturers/': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            slug?: string | undefined
            description?: string | undefined
            q?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            name__n?: string | undefined
            name__ic?: string | undefined
            name__nic?: string | undefined
            name__iew?: string | undefined
            name__niew?: string | undefined
            name__isw?: string | undefined
            name__nisw?: string | undefined
            name__ie?: string | undefined
            name__nie?: string | undefined
            slug__n?: string | undefined
            slug__ic?: string | undefined
            slug__nic?: string | undefined
            slug__iew?: string | undefined
            slug__niew?: string | undefined
            slug__isw?: string | undefined
            slug__nisw?: string | undefined
            slug__ie?: string | undefined
            slug__nie?: string | undefined
            description__n?: string | undefined
            description__ic?: string | undefined
            description__nic?: string | undefined
            description__iew?: string | undefined
            description__niew?: string | undefined
            description__isw?: string | undefined
            description__nisw?: string | undefined
            description__ie?: string | undefined
            description__nie?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: Manufacturer[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: Manufacturer }
        output: Manufacturer
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/dcim/manufacturers/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: Manufacturer
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: Manufacturer }
        output: Manufacturer
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: Manufacturer }
        output: Manufacturer
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/platforms/': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            slug?: string | undefined
            napalm_driver?: string | undefined
            description?: string | undefined
            q?: string | undefined
            manufacturer_id?: string | undefined
            manufacturer?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            name__n?: string | undefined
            name__ic?: string | undefined
            name__nic?: string | undefined
            name__iew?: string | undefined
            name__niew?: string | undefined
            name__isw?: string | undefined
            name__nisw?: string | undefined
            name__ie?: string | undefined
            name__nie?: string | undefined
            slug__n?: string | undefined
            slug__ic?: string | undefined
            slug__nic?: string | undefined
            slug__iew?: string | undefined
            slug__niew?: string | undefined
            slug__isw?: string | undefined
            slug__nisw?: string | undefined
            slug__ie?: string | undefined
            slug__nie?: string | undefined
            napalm_driver__n?: string | undefined
            napalm_driver__ic?: string | undefined
            napalm_driver__nic?: string | undefined
            napalm_driver__iew?: string | undefined
            napalm_driver__niew?: string | undefined
            napalm_driver__isw?: string | undefined
            napalm_driver__nisw?: string | undefined
            napalm_driver__ie?: string | undefined
            napalm_driver__nie?: string | undefined
            description__n?: string | undefined
            description__ic?: string | undefined
            description__nic?: string | undefined
            description__iew?: string | undefined
            description__niew?: string | undefined
            description__isw?: string | undefined
            description__nisw?: string | undefined
            description__ie?: string | undefined
            description__nie?: string | undefined
            manufacturer_id__n?: string | undefined
            manufacturer__n?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: Platform[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritablePlatform }
        output: Platform
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/dcim/platforms/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: Platform
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: WritablePlatform }
        output: Platform
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritablePlatform }
        output: Platform
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/power-connections/': {
      $get: {
        input: {
          query: {
            name?: string | undefined
            connection_status?: string | undefined
            site?: string | undefined
            device_id?: string | undefined
            device?: string | undefined
            name__n?: string | undefined
            name__ic?: string | undefined
            name__nic?: string | undefined
            name__iew?: string | undefined
            name__niew?: string | undefined
            name__isw?: string | undefined
            name__nisw?: string | undefined
            name__ie?: string | undefined
            name__nie?: string | undefined
            connection_status__n?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: PowerPort[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/power-feeds/': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            status?: string | undefined
            type?: string | undefined
            supply?: string | undefined
            phase?: string | undefined
            voltage?: string | undefined
            amperage?: string | undefined
            max_utilization?: string | undefined
            created?: string | undefined
            created__gte?: string | undefined
            created__lte?: string | undefined
            last_updated?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__lte?: string | undefined
            q?: string | undefined
            region_id?: string | undefined
            region?: string | undefined
            site_id?: string | undefined
            site?: string | undefined
            power_panel_id?: string | undefined
            rack_id?: string | undefined
            tag?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            name__n?: string | undefined
            name__ic?: string | undefined
            name__nic?: string | undefined
            name__iew?: string | undefined
            name__niew?: string | undefined
            name__isw?: string | undefined
            name__nisw?: string | undefined
            name__ie?: string | undefined
            name__nie?: string | undefined
            status__n?: string | undefined
            type__n?: string | undefined
            supply__n?: string | undefined
            phase__n?: string | undefined
            voltage__n?: string | undefined
            voltage__lte?: string | undefined
            voltage__lt?: string | undefined
            voltage__gte?: string | undefined
            voltage__gt?: string | undefined
            amperage__n?: string | undefined
            amperage__lte?: string | undefined
            amperage__lt?: string | undefined
            amperage__gte?: string | undefined
            amperage__gt?: string | undefined
            max_utilization__n?: string | undefined
            max_utilization__lte?: string | undefined
            max_utilization__lt?: string | undefined
            max_utilization__gte?: string | undefined
            max_utilization__gt?: string | undefined
            region_id__n?: string | undefined
            region__n?: string | undefined
            site_id__n?: string | undefined
            site__n?: string | undefined
            power_panel_id__n?: string | undefined
            rack_id__n?: string | undefined
            tag__n?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: PowerFeed[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritablePowerFeed }
        output: PowerFeed
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/dcim/power-feeds/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: PowerFeed
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: WritablePowerFeed }
        output: PowerFeed
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritablePowerFeed }
        output: PowerFeed
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/power-outlet-templates/': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            type?: string | undefined
            feed_leg?: string | undefined
            q?: string | undefined
            devicetype_id?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            name__n?: string | undefined
            name__ic?: string | undefined
            name__nic?: string | undefined
            name__iew?: string | undefined
            name__niew?: string | undefined
            name__isw?: string | undefined
            name__nisw?: string | undefined
            name__ie?: string | undefined
            name__nie?: string | undefined
            type__n?: string | undefined
            feed_leg__n?: string | undefined
            devicetype_id__n?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: PowerOutletTemplate[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritablePowerOutletTemplate }
        output: PowerOutletTemplate
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/dcim/power-outlet-templates/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: PowerOutletTemplate
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: WritablePowerOutletTemplate }
        output: PowerOutletTemplate
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritablePowerOutletTemplate }
        output: PowerOutletTemplate
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/power-outlets/': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            feed_leg?: string | undefined
            description?: string | undefined
            connection_status?: string | undefined
            q?: string | undefined
            region_id?: string | undefined
            region?: string | undefined
            site_id?: string | undefined
            site?: string | undefined
            device_id?: string | undefined
            device?: string | undefined
            tag?: string | undefined
            type?: string | undefined
            cabled?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            name__n?: string | undefined
            name__ic?: string | undefined
            name__nic?: string | undefined
            name__iew?: string | undefined
            name__niew?: string | undefined
            name__isw?: string | undefined
            name__nisw?: string | undefined
            name__ie?: string | undefined
            name__nie?: string | undefined
            feed_leg__n?: string | undefined
            description__n?: string | undefined
            description__ic?: string | undefined
            description__nic?: string | undefined
            description__iew?: string | undefined
            description__niew?: string | undefined
            description__isw?: string | undefined
            description__nisw?: string | undefined
            description__ie?: string | undefined
            description__nie?: string | undefined
            connection_status__n?: string | undefined
            region_id__n?: string | undefined
            region__n?: string | undefined
            site_id__n?: string | undefined
            site__n?: string | undefined
            device_id__n?: string | undefined
            device__n?: string | undefined
            tag__n?: string | undefined
            type__n?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: PowerOutlet[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritablePowerOutlet }
        output: PowerOutlet
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/dcim/power-outlets/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: PowerOutlet
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: WritablePowerOutlet }
        output: PowerOutlet
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritablePowerOutlet }
        output: PowerOutlet
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/power-outlets/:id/trace/': {
      $get: {
        input: { param: { id: number } }
        output: PowerOutlet
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/power-panels/': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            q?: string | undefined
            region_id?: string | undefined
            region?: string | undefined
            site_id?: string | undefined
            site?: string | undefined
            rack_group_id?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            name__n?: string | undefined
            name__ic?: string | undefined
            name__nic?: string | undefined
            name__iew?: string | undefined
            name__niew?: string | undefined
            name__isw?: string | undefined
            name__nisw?: string | undefined
            name__ie?: string | undefined
            name__nie?: string | undefined
            region_id__n?: string | undefined
            region__n?: string | undefined
            site_id__n?: string | undefined
            site__n?: string | undefined
            rack_group_id__n?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: PowerPanel[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritablePowerPanel }
        output: PowerPanel
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/dcim/power-panels/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: PowerPanel
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: WritablePowerPanel }
        output: PowerPanel
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritablePowerPanel }
        output: PowerPanel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/power-port-templates/': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            type?: string | undefined
            maximum_draw?: string | undefined
            allocated_draw?: string | undefined
            q?: string | undefined
            devicetype_id?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            name__n?: string | undefined
            name__ic?: string | undefined
            name__nic?: string | undefined
            name__iew?: string | undefined
            name__niew?: string | undefined
            name__isw?: string | undefined
            name__nisw?: string | undefined
            name__ie?: string | undefined
            name__nie?: string | undefined
            type__n?: string | undefined
            maximum_draw__n?: string | undefined
            maximum_draw__lte?: string | undefined
            maximum_draw__lt?: string | undefined
            maximum_draw__gte?: string | undefined
            maximum_draw__gt?: string | undefined
            allocated_draw__n?: string | undefined
            allocated_draw__lte?: string | undefined
            allocated_draw__lt?: string | undefined
            allocated_draw__gte?: string | undefined
            allocated_draw__gt?: string | undefined
            devicetype_id__n?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: PowerPortTemplate[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritablePowerPortTemplate }
        output: PowerPortTemplate
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/dcim/power-port-templates/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: PowerPortTemplate
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: WritablePowerPortTemplate }
        output: PowerPortTemplate
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritablePowerPortTemplate }
        output: PowerPortTemplate
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/power-ports/': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            maximum_draw?: string | undefined
            allocated_draw?: string | undefined
            description?: string | undefined
            connection_status?: string | undefined
            q?: string | undefined
            region_id?: string | undefined
            region?: string | undefined
            site_id?: string | undefined
            site?: string | undefined
            device_id?: string | undefined
            device?: string | undefined
            tag?: string | undefined
            type?: string | undefined
            cabled?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            name__n?: string | undefined
            name__ic?: string | undefined
            name__nic?: string | undefined
            name__iew?: string | undefined
            name__niew?: string | undefined
            name__isw?: string | undefined
            name__nisw?: string | undefined
            name__ie?: string | undefined
            name__nie?: string | undefined
            maximum_draw__n?: string | undefined
            maximum_draw__lte?: string | undefined
            maximum_draw__lt?: string | undefined
            maximum_draw__gte?: string | undefined
            maximum_draw__gt?: string | undefined
            allocated_draw__n?: string | undefined
            allocated_draw__lte?: string | undefined
            allocated_draw__lt?: string | undefined
            allocated_draw__gte?: string | undefined
            allocated_draw__gt?: string | undefined
            description__n?: string | undefined
            description__ic?: string | undefined
            description__nic?: string | undefined
            description__iew?: string | undefined
            description__niew?: string | undefined
            description__isw?: string | undefined
            description__nisw?: string | undefined
            description__ie?: string | undefined
            description__nie?: string | undefined
            connection_status__n?: string | undefined
            region_id__n?: string | undefined
            region__n?: string | undefined
            site_id__n?: string | undefined
            site__n?: string | undefined
            device_id__n?: string | undefined
            device__n?: string | undefined
            tag__n?: string | undefined
            type__n?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: PowerPort[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritablePowerPort }
        output: PowerPort
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/dcim/power-ports/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: PowerPort
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: WritablePowerPort }
        output: PowerPort
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritablePowerPort }
        output: PowerPort
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/power-ports/:id/trace/': {
      $get: {
        input: { param: { id: number } }
        output: PowerPort
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/rack-groups/': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            slug?: string | undefined
            description?: string | undefined
            q?: string | undefined
            region_id?: string | undefined
            region?: string | undefined
            site_id?: string | undefined
            site?: string | undefined
            parent_id?: string | undefined
            parent?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            name__n?: string | undefined
            name__ic?: string | undefined
            name__nic?: string | undefined
            name__iew?: string | undefined
            name__niew?: string | undefined
            name__isw?: string | undefined
            name__nisw?: string | undefined
            name__ie?: string | undefined
            name__nie?: string | undefined
            slug__n?: string | undefined
            slug__ic?: string | undefined
            slug__nic?: string | undefined
            slug__iew?: string | undefined
            slug__niew?: string | undefined
            slug__isw?: string | undefined
            slug__nisw?: string | undefined
            slug__ie?: string | undefined
            slug__nie?: string | undefined
            description__n?: string | undefined
            description__ic?: string | undefined
            description__nic?: string | undefined
            description__iew?: string | undefined
            description__niew?: string | undefined
            description__isw?: string | undefined
            description__nisw?: string | undefined
            description__ie?: string | undefined
            description__nie?: string | undefined
            region_id__n?: string | undefined
            region__n?: string | undefined
            site_id__n?: string | undefined
            site__n?: string | undefined
            parent_id__n?: string | undefined
            parent__n?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: RackGroup[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableRackGroup }
        output: RackGroup
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/dcim/rack-groups/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: RackGroup
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: WritableRackGroup }
        output: RackGroup
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableRackGroup }
        output: RackGroup
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/rack-reservations/': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            created?: string | undefined
            tenant_group_id?: string | undefined
            tenant_group?: string | undefined
            tenant_id?: string | undefined
            tenant?: string | undefined
            q?: string | undefined
            rack_id?: string | undefined
            site_id?: string | undefined
            site?: string | undefined
            group_id?: string | undefined
            group?: string | undefined
            user_id?: string | undefined
            user?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            tenant_group_id__n?: string | undefined
            tenant_group__n?: string | undefined
            tenant_id__n?: string | undefined
            tenant__n?: string | undefined
            rack_id__n?: string | undefined
            site_id__n?: string | undefined
            site__n?: string | undefined
            group_id__n?: string | undefined
            group__n?: string | undefined
            user_id__n?: string | undefined
            user__n?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: RackReservation[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableRackReservation }
        output: RackReservation
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/dcim/rack-reservations/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: RackReservation
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: WritableRackReservation }
        output: RackReservation
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableRackReservation }
        output: RackReservation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/rack-roles/': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            slug?: string | undefined
            color?: string | undefined
            q?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            name__n?: string | undefined
            name__ic?: string | undefined
            name__nic?: string | undefined
            name__iew?: string | undefined
            name__niew?: string | undefined
            name__isw?: string | undefined
            name__nisw?: string | undefined
            name__ie?: string | undefined
            name__nie?: string | undefined
            slug__n?: string | undefined
            slug__ic?: string | undefined
            slug__nic?: string | undefined
            slug__iew?: string | undefined
            slug__niew?: string | undefined
            slug__isw?: string | undefined
            slug__nisw?: string | undefined
            slug__ie?: string | undefined
            slug__nie?: string | undefined
            color__n?: string | undefined
            color__ic?: string | undefined
            color__nic?: string | undefined
            color__iew?: string | undefined
            color__niew?: string | undefined
            color__isw?: string | undefined
            color__nisw?: string | undefined
            color__ie?: string | undefined
            color__nie?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: RackRole[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: { input: { json: RackRole }; output: RackRole; outputFormat: 'json'; status: 201 }
    }
  } & {
    '/dcim/rack-roles/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: RackRole
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: RackRole }
        output: RackRole
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: RackRole }
        output: RackRole
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/racks/': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            facility_id?: string | undefined
            asset_tag?: string | undefined
            type?: string | undefined
            width?: string | undefined
            u_height?: string | undefined
            desc_units?: string | undefined
            outer_width?: string | undefined
            outer_depth?: string | undefined
            outer_unit?: string | undefined
            tenant_group_id?: string | undefined
            tenant_group?: string | undefined
            tenant_id?: string | undefined
            tenant?: string | undefined
            created?: string | undefined
            created__gte?: string | undefined
            created__lte?: string | undefined
            last_updated?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__lte?: string | undefined
            q?: string | undefined
            region_id?: string | undefined
            region?: string | undefined
            site_id?: string | undefined
            site?: string | undefined
            group_id?: string | undefined
            group?: string | undefined
            status?: string | undefined
            role_id?: string | undefined
            role?: string | undefined
            serial?: string | undefined
            tag?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            name__n?: string | undefined
            name__ic?: string | undefined
            name__nic?: string | undefined
            name__iew?: string | undefined
            name__niew?: string | undefined
            name__isw?: string | undefined
            name__nisw?: string | undefined
            name__ie?: string | undefined
            name__nie?: string | undefined
            facility_id__n?: string | undefined
            facility_id__ic?: string | undefined
            facility_id__nic?: string | undefined
            facility_id__iew?: string | undefined
            facility_id__niew?: string | undefined
            facility_id__isw?: string | undefined
            facility_id__nisw?: string | undefined
            facility_id__ie?: string | undefined
            facility_id__nie?: string | undefined
            asset_tag__n?: string | undefined
            asset_tag__ic?: string | undefined
            asset_tag__nic?: string | undefined
            asset_tag__iew?: string | undefined
            asset_tag__niew?: string | undefined
            asset_tag__isw?: string | undefined
            asset_tag__nisw?: string | undefined
            asset_tag__ie?: string | undefined
            asset_tag__nie?: string | undefined
            type__n?: string | undefined
            width__n?: string | undefined
            u_height__n?: string | undefined
            u_height__lte?: string | undefined
            u_height__lt?: string | undefined
            u_height__gte?: string | undefined
            u_height__gt?: string | undefined
            outer_width__n?: string | undefined
            outer_width__lte?: string | undefined
            outer_width__lt?: string | undefined
            outer_width__gte?: string | undefined
            outer_width__gt?: string | undefined
            outer_depth__n?: string | undefined
            outer_depth__lte?: string | undefined
            outer_depth__lt?: string | undefined
            outer_depth__gte?: string | undefined
            outer_depth__gt?: string | undefined
            outer_unit__n?: string | undefined
            tenant_group_id__n?: string | undefined
            tenant_group__n?: string | undefined
            tenant_id__n?: string | undefined
            tenant__n?: string | undefined
            region_id__n?: string | undefined
            region__n?: string | undefined
            site_id__n?: string | undefined
            site__n?: string | undefined
            group_id__n?: string | undefined
            group__n?: string | undefined
            status__n?: string | undefined
            role_id__n?: string | undefined
            role__n?: string | undefined
            tag__n?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: Rack[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: { input: { json: WritableRack }; output: Rack; outputFormat: 'json'; status: 201 }
    }
  } & {
    '/dcim/racks/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: { input: { param: { id: number } }; output: Rack; outputFormat: 'json'; status: 200 }
      $patch: {
        input: { param: { id: number } } & { json: WritableRack }
        output: Rack
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableRack }
        output: Rack
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/racks/:id/elevation/': {
      $get: {
        input: { param: { id: number } } & {
          query: {
            q?: string | undefined
            face?: 'front' | 'rear' | undefined
            render?: 'json' | 'svg' | undefined
            unit_width?: number | undefined
            unit_height?: number | undefined
            legend_width?: number | undefined
            exclude?: number | undefined
            expand_devices?: boolean | undefined
            include_images?: boolean | undefined
          }
        }
        output: RackUnit[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/rear-port-templates/': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            type?: string | undefined
            positions?: string | undefined
            q?: string | undefined
            devicetype_id?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            name__n?: string | undefined
            name__ic?: string | undefined
            name__nic?: string | undefined
            name__iew?: string | undefined
            name__niew?: string | undefined
            name__isw?: string | undefined
            name__nisw?: string | undefined
            name__ie?: string | undefined
            name__nie?: string | undefined
            type__n?: string | undefined
            positions__n?: string | undefined
            positions__lte?: string | undefined
            positions__lt?: string | undefined
            positions__gte?: string | undefined
            positions__gt?: string | undefined
            devicetype_id__n?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: RearPortTemplate[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableRearPortTemplate }
        output: RearPortTemplate
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/dcim/rear-port-templates/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: RearPortTemplate
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: WritableRearPortTemplate }
        output: RearPortTemplate
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableRearPortTemplate }
        output: RearPortTemplate
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/rear-ports/': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            type?: string | undefined
            positions?: string | undefined
            description?: string | undefined
            q?: string | undefined
            region_id?: string | undefined
            region?: string | undefined
            site_id?: string | undefined
            site?: string | undefined
            device_id?: string | undefined
            device?: string | undefined
            tag?: string | undefined
            cabled?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            name__n?: string | undefined
            name__ic?: string | undefined
            name__nic?: string | undefined
            name__iew?: string | undefined
            name__niew?: string | undefined
            name__isw?: string | undefined
            name__nisw?: string | undefined
            name__ie?: string | undefined
            name__nie?: string | undefined
            type__n?: string | undefined
            positions__n?: string | undefined
            positions__lte?: string | undefined
            positions__lt?: string | undefined
            positions__gte?: string | undefined
            positions__gt?: string | undefined
            description__n?: string | undefined
            description__ic?: string | undefined
            description__nic?: string | undefined
            description__iew?: string | undefined
            description__niew?: string | undefined
            description__isw?: string | undefined
            description__nisw?: string | undefined
            description__ie?: string | undefined
            description__nie?: string | undefined
            region_id__n?: string | undefined
            region__n?: string | undefined
            site_id__n?: string | undefined
            site__n?: string | undefined
            device_id__n?: string | undefined
            device__n?: string | undefined
            tag__n?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: RearPort[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableRearPort }
        output: RearPort
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/dcim/rear-ports/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: RearPort
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: WritableRearPort }
        output: RearPort
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableRearPort }
        output: RearPort
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/rear-ports/:id/trace/': {
      $get: {
        input: { param: { id: number } }
        output: RearPort
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/regions/': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            slug?: string | undefined
            description?: string | undefined
            q?: string | undefined
            parent_id?: string | undefined
            parent?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            name__n?: string | undefined
            name__ic?: string | undefined
            name__nic?: string | undefined
            name__iew?: string | undefined
            name__niew?: string | undefined
            name__isw?: string | undefined
            name__nisw?: string | undefined
            name__ie?: string | undefined
            name__nie?: string | undefined
            slug__n?: string | undefined
            slug__ic?: string | undefined
            slug__nic?: string | undefined
            slug__iew?: string | undefined
            slug__niew?: string | undefined
            slug__isw?: string | undefined
            slug__nisw?: string | undefined
            slug__ie?: string | undefined
            slug__nie?: string | undefined
            description__n?: string | undefined
            description__ic?: string | undefined
            description__nic?: string | undefined
            description__iew?: string | undefined
            description__niew?: string | undefined
            description__isw?: string | undefined
            description__nisw?: string | undefined
            description__ie?: string | undefined
            description__nie?: string | undefined
            parent_id__n?: string | undefined
            parent__n?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: Region[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: { input: { json: WritableRegion }; output: Region; outputFormat: 'json'; status: 201 }
    }
  } & {
    '/dcim/regions/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: { input: { param: { id: number } }; output: Region; outputFormat: 'json'; status: 200 }
      $patch: {
        input: { param: { id: number } } & { json: WritableRegion }
        output: Region
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableRegion }
        output: Region
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/sites/': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            slug?: string | undefined
            facility?: string | undefined
            asn?: string | undefined
            latitude?: string | undefined
            longitude?: string | undefined
            contact_name?: string | undefined
            contact_phone?: string | undefined
            contact_email?: string | undefined
            tenant_group_id?: string | undefined
            tenant_group?: string | undefined
            tenant_id?: string | undefined
            tenant?: string | undefined
            created?: string | undefined
            created__gte?: string | undefined
            created__lte?: string | undefined
            last_updated?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__lte?: string | undefined
            q?: string | undefined
            status?: string | undefined
            region_id?: string | undefined
            region?: string | undefined
            tag?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            name__n?: string | undefined
            name__ic?: string | undefined
            name__nic?: string | undefined
            name__iew?: string | undefined
            name__niew?: string | undefined
            name__isw?: string | undefined
            name__nisw?: string | undefined
            name__ie?: string | undefined
            name__nie?: string | undefined
            slug__n?: string | undefined
            slug__ic?: string | undefined
            slug__nic?: string | undefined
            slug__iew?: string | undefined
            slug__niew?: string | undefined
            slug__isw?: string | undefined
            slug__nisw?: string | undefined
            slug__ie?: string | undefined
            slug__nie?: string | undefined
            facility__n?: string | undefined
            facility__ic?: string | undefined
            facility__nic?: string | undefined
            facility__iew?: string | undefined
            facility__niew?: string | undefined
            facility__isw?: string | undefined
            facility__nisw?: string | undefined
            facility__ie?: string | undefined
            facility__nie?: string | undefined
            asn__n?: string | undefined
            asn__lte?: string | undefined
            asn__lt?: string | undefined
            asn__gte?: string | undefined
            asn__gt?: string | undefined
            latitude__n?: string | undefined
            latitude__lte?: string | undefined
            latitude__lt?: string | undefined
            latitude__gte?: string | undefined
            latitude__gt?: string | undefined
            longitude__n?: string | undefined
            longitude__lte?: string | undefined
            longitude__lt?: string | undefined
            longitude__gte?: string | undefined
            longitude__gt?: string | undefined
            contact_name__n?: string | undefined
            contact_name__ic?: string | undefined
            contact_name__nic?: string | undefined
            contact_name__iew?: string | undefined
            contact_name__niew?: string | undefined
            contact_name__isw?: string | undefined
            contact_name__nisw?: string | undefined
            contact_name__ie?: string | undefined
            contact_name__nie?: string | undefined
            contact_phone__n?: string | undefined
            contact_phone__ic?: string | undefined
            contact_phone__nic?: string | undefined
            contact_phone__iew?: string | undefined
            contact_phone__niew?: string | undefined
            contact_phone__isw?: string | undefined
            contact_phone__nisw?: string | undefined
            contact_phone__ie?: string | undefined
            contact_phone__nie?: string | undefined
            contact_email__n?: string | undefined
            contact_email__ic?: string | undefined
            contact_email__nic?: string | undefined
            contact_email__iew?: string | undefined
            contact_email__niew?: string | undefined
            contact_email__isw?: string | undefined
            contact_email__nisw?: string | undefined
            contact_email__ie?: string | undefined
            contact_email__nie?: string | undefined
            tenant_group_id__n?: string | undefined
            tenant_group__n?: string | undefined
            tenant_id__n?: string | undefined
            tenant__n?: string | undefined
            status__n?: string | undefined
            region_id__n?: string | undefined
            region__n?: string | undefined
            tag__n?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: Site[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: { input: { json: WritableSite }; output: Site; outputFormat: 'json'; status: 201 }
    }
  } & {
    '/dcim/sites/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: { input: { param: { id: number } }; output: Site; outputFormat: 'json'; status: 200 }
      $patch: {
        input: { param: { id: number } } & { json: WritableSite }
        output: Site
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableSite }
        output: Site
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/sites/:id/graphs/': {
      $get: { input: { param: { id: number } }; output: Site; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/dcim/virtual-chassis/': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            domain?: string | undefined
            q?: string | undefined
            region_id?: string | undefined
            region?: string | undefined
            site_id?: string | undefined
            site?: string | undefined
            tenant_id?: string | undefined
            tenant?: string | undefined
            tag?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            domain__n?: string | undefined
            domain__ic?: string | undefined
            domain__nic?: string | undefined
            domain__iew?: string | undefined
            domain__niew?: string | undefined
            domain__isw?: string | undefined
            domain__nisw?: string | undefined
            domain__ie?: string | undefined
            domain__nie?: string | undefined
            region_id__n?: string | undefined
            region__n?: string | undefined
            site_id__n?: string | undefined
            site__n?: string | undefined
            tenant_id__n?: string | undefined
            tenant__n?: string | undefined
            tag__n?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: VirtualChassis[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableVirtualChassis }
        output: VirtualChassis
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/dcim/virtual-chassis/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: VirtualChassis
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: WritableVirtualChassis }
        output: VirtualChassis
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableVirtualChassis }
        output: VirtualChassis
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/extras/_custom_field_choices/': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/extras/_custom_field_choices/:id/': {
      $get: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/extras/config-contexts/': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            is_active?: string | undefined
            q?: string | undefined
            region_id?: string | undefined
            region?: string | undefined
            site_id?: string | undefined
            site?: string | undefined
            role_id?: string | undefined
            role?: string | undefined
            platform_id?: string | undefined
            platform?: string | undefined
            cluster_group_id?: string | undefined
            cluster_group?: string | undefined
            cluster_id?: string | undefined
            tenant_group_id?: string | undefined
            tenant_group?: string | undefined
            tenant_id?: string | undefined
            tenant?: string | undefined
            tag?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            name__n?: string | undefined
            name__ic?: string | undefined
            name__nic?: string | undefined
            name__iew?: string | undefined
            name__niew?: string | undefined
            name__isw?: string | undefined
            name__nisw?: string | undefined
            name__ie?: string | undefined
            name__nie?: string | undefined
            region_id__n?: string | undefined
            region__n?: string | undefined
            site_id__n?: string | undefined
            site__n?: string | undefined
            role_id__n?: string | undefined
            role__n?: string | undefined
            platform_id__n?: string | undefined
            platform__n?: string | undefined
            cluster_group_id__n?: string | undefined
            cluster_group__n?: string | undefined
            cluster_id__n?: string | undefined
            tenant_group_id__n?: string | undefined
            tenant_group__n?: string | undefined
            tenant_id__n?: string | undefined
            tenant__n?: string | undefined
            tag__n?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: ConfigContext[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableConfigContext }
        output: ConfigContext
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/extras/config-contexts/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: ConfigContext
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: WritableConfigContext }
        output: ConfigContext
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableConfigContext }
        output: ConfigContext
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/extras/export-templates/': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            content_type?: string | undefined
            name?: string | undefined
            template_language?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            content_type__n?: string | undefined
            name__n?: string | undefined
            name__ic?: string | undefined
            name__nic?: string | undefined
            name__iew?: string | undefined
            name__niew?: string | undefined
            name__isw?: string | undefined
            name__nisw?: string | undefined
            name__ie?: string | undefined
            name__nie?: string | undefined
            template_language__n?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: ExportTemplate[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableExportTemplate }
        output: ExportTemplate
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/extras/export-templates/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: ExportTemplate
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: WritableExportTemplate }
        output: ExportTemplate
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableExportTemplate }
        output: ExportTemplate
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/extras/graphs/': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            type?: string | undefined
            name?: string | undefined
            template_language?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            type__n?: string | undefined
            name__n?: string | undefined
            name__ic?: string | undefined
            name__nic?: string | undefined
            name__iew?: string | undefined
            name__niew?: string | undefined
            name__isw?: string | undefined
            name__nisw?: string | undefined
            name__ie?: string | undefined
            name__nie?: string | undefined
            template_language__n?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: Graph[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: { input: { json: Graph }; output: Graph; outputFormat: 'json'; status: 201 }
    }
  } & {
    '/extras/graphs/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: { input: { param: { id: number } }; output: Graph; outputFormat: 'json'; status: 200 }
      $patch: {
        input: { param: { id: number } } & { json: Graph }
        output: Graph
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: Graph }
        output: Graph
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/extras/image-attachments/': {
      $get: {
        input: { query: { limit?: number | undefined; offset?: number | undefined } }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: ImageAttachment[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: ImageAttachment }
        output: ImageAttachment
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/extras/image-attachments/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: ImageAttachment
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: ImageAttachment }
        output: ImageAttachment
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: ImageAttachment }
        output: ImageAttachment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/extras/object-changes/': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            user?: string | undefined
            user_name?: string | undefined
            request_id?: string | undefined
            action?: string | undefined
            changed_object_type?: string | undefined
            changed_object_id?: string | undefined
            object_repr?: string | undefined
            q?: string | undefined
            time?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            user__n?: string | undefined
            user_name__n?: string | undefined
            user_name__ic?: string | undefined
            user_name__nic?: string | undefined
            user_name__iew?: string | undefined
            user_name__niew?: string | undefined
            user_name__isw?: string | undefined
            user_name__nisw?: string | undefined
            user_name__ie?: string | undefined
            user_name__nie?: string | undefined
            action__n?: string | undefined
            changed_object_type__n?: string | undefined
            changed_object_id__n?: string | undefined
            changed_object_id__lte?: string | undefined
            changed_object_id__lt?: string | undefined
            changed_object_id__gte?: string | undefined
            changed_object_id__gt?: string | undefined
            object_repr__n?: string | undefined
            object_repr__ic?: string | undefined
            object_repr__nic?: string | undefined
            object_repr__iew?: string | undefined
            object_repr__niew?: string | undefined
            object_repr__isw?: string | undefined
            object_repr__nisw?: string | undefined
            object_repr__ie?: string | undefined
            object_repr__nie?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: ObjectChange[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/extras/object-changes/:id/': {
      $get: {
        input: { param: { id: number } }
        output: ObjectChange
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/extras/reports/': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/extras/reports/:id/': {
      $get: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/extras/reports/:id/run/': {
      $post: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 201 }
    }
  } & {
    '/extras/scripts/': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/extras/scripts/:id/': {
      $get: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/extras/tags/': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            slug?: string | undefined
            color?: string | undefined
            q?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            name__n?: string | undefined
            name__ic?: string | undefined
            name__nic?: string | undefined
            name__iew?: string | undefined
            name__niew?: string | undefined
            name__isw?: string | undefined
            name__nisw?: string | undefined
            name__ie?: string | undefined
            name__nie?: string | undefined
            slug__n?: string | undefined
            slug__ic?: string | undefined
            slug__nic?: string | undefined
            slug__iew?: string | undefined
            slug__niew?: string | undefined
            slug__isw?: string | undefined
            slug__nisw?: string | undefined
            slug__ie?: string | undefined
            slug__nie?: string | undefined
            color__n?: string | undefined
            color__ic?: string | undefined
            color__nic?: string | undefined
            color__iew?: string | undefined
            color__niew?: string | undefined
            color__isw?: string | undefined
            color__nisw?: string | undefined
            color__ie?: string | undefined
            color__nie?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: Tag[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: { input: { json: Tag }; output: Tag; outputFormat: 'json'; status: 201 }
    }
  } & {
    '/extras/tags/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: { input: { param: { id: number } }; output: Tag; outputFormat: 'json'; status: 200 }
      $patch: {
        input: { param: { id: number } } & { json: Tag }
        output: Tag
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: Tag }
        output: Tag
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ipam/aggregates/': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            date_added?: string | undefined
            created?: string | undefined
            created__gte?: string | undefined
            created__lte?: string | undefined
            last_updated?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__lte?: string | undefined
            q?: string | undefined
            family?: number | undefined
            prefix?: string | undefined
            rir_id?: string | undefined
            rir?: string | undefined
            tag?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            date_added__n?: string | undefined
            date_added__lte?: string | undefined
            date_added__lt?: string | undefined
            date_added__gte?: string | undefined
            date_added__gt?: string | undefined
            rir_id__n?: string | undefined
            rir__n?: string | undefined
            tag__n?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: Aggregate[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableAggregate }
        output: Aggregate
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/ipam/aggregates/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: Aggregate
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: WritableAggregate }
        output: Aggregate
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableAggregate }
        output: Aggregate
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ipam/ip-addresses/': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            dns_name?: string | undefined
            tenant_group_id?: string | undefined
            tenant_group?: string | undefined
            tenant_id?: string | undefined
            tenant?: string | undefined
            created?: string | undefined
            created__gte?: string | undefined
            created__lte?: string | undefined
            last_updated?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__lte?: string | undefined
            q?: string | undefined
            family?: number | undefined
            parent?: string | undefined
            address?: string | undefined
            mask_length?: number | undefined
            vrf_id?: string | undefined
            vrf?: string | undefined
            device?: string | undefined
            device_id?: string | undefined
            virtual_machine_id?: string | undefined
            virtual_machine?: string | undefined
            interface?: string | undefined
            interface_id?: string | undefined
            assigned_to_interface?: string | undefined
            status?: string | undefined
            role?: string | undefined
            tag?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            dns_name__n?: string | undefined
            dns_name__ic?: string | undefined
            dns_name__nic?: string | undefined
            dns_name__iew?: string | undefined
            dns_name__niew?: string | undefined
            dns_name__isw?: string | undefined
            dns_name__nisw?: string | undefined
            dns_name__ie?: string | undefined
            dns_name__nie?: string | undefined
            tenant_group_id__n?: string | undefined
            tenant_group__n?: string | undefined
            tenant_id__n?: string | undefined
            tenant__n?: string | undefined
            vrf_id__n?: string | undefined
            vrf__n?: string | undefined
            virtual_machine_id__n?: string | undefined
            virtual_machine__n?: string | undefined
            interface__n?: string | undefined
            interface_id__n?: string | undefined
            status__n?: string | undefined
            role__n?: string | undefined
            tag__n?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: IPAddress[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableIPAddress }
        output: IPAddress
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/ipam/ip-addresses/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: IPAddress
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: WritableIPAddress }
        output: IPAddress
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableIPAddress }
        output: IPAddress
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ipam/prefixes/': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            is_pool?: string | undefined
            tenant_group_id?: string | undefined
            tenant_group?: string | undefined
            tenant_id?: string | undefined
            tenant?: string | undefined
            created?: string | undefined
            created__gte?: string | undefined
            created__lte?: string | undefined
            last_updated?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__lte?: string | undefined
            q?: string | undefined
            family?: number | undefined
            prefix?: string | undefined
            within?: string | undefined
            within_include?: string | undefined
            contains?: string | undefined
            mask_length?: number | undefined
            vrf_id?: string | undefined
            vrf?: string | undefined
            region_id?: string | undefined
            region?: string | undefined
            site_id?: string | undefined
            site?: string | undefined
            vlan_id?: string | undefined
            vlan_vid?: number | undefined
            role_id?: string | undefined
            role?: string | undefined
            status?: string | undefined
            tag?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            tenant_group_id__n?: string | undefined
            tenant_group__n?: string | undefined
            tenant_id__n?: string | undefined
            tenant__n?: string | undefined
            vrf_id__n?: string | undefined
            vrf__n?: string | undefined
            region_id__n?: string | undefined
            region__n?: string | undefined
            site_id__n?: string | undefined
            site__n?: string | undefined
            vlan_id__n?: string | undefined
            role_id__n?: string | undefined
            role__n?: string | undefined
            status__n?: string | undefined
            tag__n?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: Prefix[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: { input: { json: WritablePrefix }; output: Prefix; outputFormat: 'json'; status: 201 }
    }
  } & {
    '/ipam/prefixes/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: { input: { param: { id: number } }; output: Prefix; outputFormat: 'json'; status: 200 }
      $patch: {
        input: { param: { id: number } } & { json: WritablePrefix }
        output: Prefix
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritablePrefix }
        output: Prefix
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ipam/prefixes/:id/available-ips/': {
      $get: {
        input: { param: { id: number } }
        output: AvailableIP[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: number } } & { json: WritableAvailableIP }
        output: AvailableIP[]
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/ipam/prefixes/:id/available-prefixes/': {
      $get: {
        input: { param: { id: number } }
        output: AvailablePrefix[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: number } } & { json: WritablePrefix }
        output: AvailablePrefix[]
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/ipam/rirs/': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            slug?: string | undefined
            is_private?: string | undefined
            description?: string | undefined
            q?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            name__n?: string | undefined
            name__ic?: string | undefined
            name__nic?: string | undefined
            name__iew?: string | undefined
            name__niew?: string | undefined
            name__isw?: string | undefined
            name__nisw?: string | undefined
            name__ie?: string | undefined
            name__nie?: string | undefined
            slug__n?: string | undefined
            slug__ic?: string | undefined
            slug__nic?: string | undefined
            slug__iew?: string | undefined
            slug__niew?: string | undefined
            slug__isw?: string | undefined
            slug__nisw?: string | undefined
            slug__ie?: string | undefined
            slug__nie?: string | undefined
            description__n?: string | undefined
            description__ic?: string | undefined
            description__nic?: string | undefined
            description__iew?: string | undefined
            description__niew?: string | undefined
            description__isw?: string | undefined
            description__nisw?: string | undefined
            description__ie?: string | undefined
            description__nie?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: RIR[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: { input: { json: RIR }; output: RIR; outputFormat: 'json'; status: 201 }
    }
  } & {
    '/ipam/rirs/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: { input: { param: { id: number } }; output: RIR; outputFormat: 'json'; status: 200 }
      $patch: {
        input: { param: { id: number } } & { json: RIR }
        output: RIR
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: RIR }
        output: RIR
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ipam/roles/': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            slug?: string | undefined
            q?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            name__n?: string | undefined
            name__ic?: string | undefined
            name__nic?: string | undefined
            name__iew?: string | undefined
            name__niew?: string | undefined
            name__isw?: string | undefined
            name__nisw?: string | undefined
            name__ie?: string | undefined
            name__nie?: string | undefined
            slug__n?: string | undefined
            slug__ic?: string | undefined
            slug__nic?: string | undefined
            slug__iew?: string | undefined
            slug__niew?: string | undefined
            slug__isw?: string | undefined
            slug__nisw?: string | undefined
            slug__ie?: string | undefined
            slug__nie?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: Role[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: { input: { json: Role }; output: Role; outputFormat: 'json'; status: 201 }
    }
  } & {
    '/ipam/roles/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: { input: { param: { id: number } }; output: Role; outputFormat: 'json'; status: 200 }
      $patch: {
        input: { param: { id: number } } & { json: Role }
        output: Role
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: Role }
        output: Role
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ipam/services/': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            protocol?: string | undefined
            port?: string | undefined
            created?: string | undefined
            created__gte?: string | undefined
            created__lte?: string | undefined
            last_updated?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__lte?: string | undefined
            q?: string | undefined
            device_id?: string | undefined
            device?: string | undefined
            virtual_machine_id?: string | undefined
            virtual_machine?: string | undefined
            tag?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            name__n?: string | undefined
            name__ic?: string | undefined
            name__nic?: string | undefined
            name__iew?: string | undefined
            name__niew?: string | undefined
            name__isw?: string | undefined
            name__nisw?: string | undefined
            name__ie?: string | undefined
            name__nie?: string | undefined
            protocol__n?: string | undefined
            port__n?: string | undefined
            port__lte?: string | undefined
            port__lt?: string | undefined
            port__gte?: string | undefined
            port__gt?: string | undefined
            device_id__n?: string | undefined
            device__n?: string | undefined
            virtual_machine_id__n?: string | undefined
            virtual_machine__n?: string | undefined
            tag__n?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: Service[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableService }
        output: Service
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/ipam/services/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: { input: { param: { id: number } }; output: Service; outputFormat: 'json'; status: 200 }
      $patch: {
        input: { param: { id: number } } & { json: WritableService }
        output: Service
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableService }
        output: Service
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ipam/vlan-groups/': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            slug?: string | undefined
            description?: string | undefined
            q?: string | undefined
            region_id?: string | undefined
            region?: string | undefined
            site_id?: string | undefined
            site?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            name__n?: string | undefined
            name__ic?: string | undefined
            name__nic?: string | undefined
            name__iew?: string | undefined
            name__niew?: string | undefined
            name__isw?: string | undefined
            name__nisw?: string | undefined
            name__ie?: string | undefined
            name__nie?: string | undefined
            slug__n?: string | undefined
            slug__ic?: string | undefined
            slug__nic?: string | undefined
            slug__iew?: string | undefined
            slug__niew?: string | undefined
            slug__isw?: string | undefined
            slug__nisw?: string | undefined
            slug__ie?: string | undefined
            slug__nie?: string | undefined
            description__n?: string | undefined
            description__ic?: string | undefined
            description__nic?: string | undefined
            description__iew?: string | undefined
            description__niew?: string | undefined
            description__isw?: string | undefined
            description__nisw?: string | undefined
            description__ie?: string | undefined
            description__nie?: string | undefined
            region_id__n?: string | undefined
            region__n?: string | undefined
            site_id__n?: string | undefined
            site__n?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: VLANGroup[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableVLANGroup }
        output: VLANGroup
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/ipam/vlan-groups/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: VLANGroup
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: WritableVLANGroup }
        output: VLANGroup
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableVLANGroup }
        output: VLANGroup
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ipam/vlans/': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            vid?: string | undefined
            name?: string | undefined
            tenant_group_id?: string | undefined
            tenant_group?: string | undefined
            tenant_id?: string | undefined
            tenant?: string | undefined
            created?: string | undefined
            created__gte?: string | undefined
            created__lte?: string | undefined
            last_updated?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__lte?: string | undefined
            q?: string | undefined
            region_id?: string | undefined
            region?: string | undefined
            site_id?: string | undefined
            site?: string | undefined
            group_id?: string | undefined
            group?: string | undefined
            role_id?: string | undefined
            role?: string | undefined
            status?: string | undefined
            tag?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            vid__n?: string | undefined
            vid__lte?: string | undefined
            vid__lt?: string | undefined
            vid__gte?: string | undefined
            vid__gt?: string | undefined
            name__n?: string | undefined
            name__ic?: string | undefined
            name__nic?: string | undefined
            name__iew?: string | undefined
            name__niew?: string | undefined
            name__isw?: string | undefined
            name__nisw?: string | undefined
            name__ie?: string | undefined
            name__nie?: string | undefined
            tenant_group_id__n?: string | undefined
            tenant_group__n?: string | undefined
            tenant_id__n?: string | undefined
            tenant__n?: string | undefined
            region_id__n?: string | undefined
            region__n?: string | undefined
            site_id__n?: string | undefined
            site__n?: string | undefined
            group_id__n?: string | undefined
            group__n?: string | undefined
            role_id__n?: string | undefined
            role__n?: string | undefined
            status__n?: string | undefined
            tag__n?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: VLAN[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: { input: { json: WritableVLAN }; output: VLAN; outputFormat: 'json'; status: 201 }
    }
  } & {
    '/ipam/vlans/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: { input: { param: { id: number } }; output: VLAN; outputFormat: 'json'; status: 200 }
      $patch: {
        input: { param: { id: number } } & { json: WritableVLAN }
        output: VLAN
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableVLAN }
        output: VLAN
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ipam/vrfs/': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            rd?: string | undefined
            enforce_unique?: string | undefined
            tenant_group_id?: string | undefined
            tenant_group?: string | undefined
            tenant_id?: string | undefined
            tenant?: string | undefined
            created?: string | undefined
            created__gte?: string | undefined
            created__lte?: string | undefined
            last_updated?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__lte?: string | undefined
            q?: string | undefined
            tag?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            name__n?: string | undefined
            name__ic?: string | undefined
            name__nic?: string | undefined
            name__iew?: string | undefined
            name__niew?: string | undefined
            name__isw?: string | undefined
            name__nisw?: string | undefined
            name__ie?: string | undefined
            name__nie?: string | undefined
            rd__n?: string | undefined
            rd__ic?: string | undefined
            rd__nic?: string | undefined
            rd__iew?: string | undefined
            rd__niew?: string | undefined
            rd__isw?: string | undefined
            rd__nisw?: string | undefined
            rd__ie?: string | undefined
            rd__nie?: string | undefined
            tenant_group_id__n?: string | undefined
            tenant_group__n?: string | undefined
            tenant_id__n?: string | undefined
            tenant__n?: string | undefined
            tag__n?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: VRF[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: { input: { json: WritableVRF }; output: VRF; outputFormat: 'json'; status: 201 }
    }
  } & {
    '/ipam/vrfs/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: { input: { param: { id: number } }; output: VRF; outputFormat: 'json'; status: 200 }
      $patch: {
        input: { param: { id: number } } & { json: WritableVRF }
        output: VRF
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableVRF }
        output: VRF
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/secrets/generate-rsa-key-pair/': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/secrets/get-session-key/': {
      $post: { input: {}; output: {}; outputFormat: string; status: 201 }
    }
  } & {
    '/secrets/secret-roles/': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            slug?: string | undefined
            q?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            name__n?: string | undefined
            name__ic?: string | undefined
            name__nic?: string | undefined
            name__iew?: string | undefined
            name__niew?: string | undefined
            name__isw?: string | undefined
            name__nisw?: string | undefined
            name__ie?: string | undefined
            name__nie?: string | undefined
            slug__n?: string | undefined
            slug__ic?: string | undefined
            slug__nic?: string | undefined
            slug__iew?: string | undefined
            slug__niew?: string | undefined
            slug__isw?: string | undefined
            slug__nisw?: string | undefined
            slug__ie?: string | undefined
            slug__nie?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: SecretRole[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: { input: { json: SecretRole }; output: SecretRole; outputFormat: 'json'; status: 201 }
    }
  } & {
    '/secrets/secret-roles/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: SecretRole
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: SecretRole }
        output: SecretRole
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: SecretRole }
        output: SecretRole
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/secrets/secrets/': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            created?: string | undefined
            created__gte?: string | undefined
            created__lte?: string | undefined
            last_updated?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__lte?: string | undefined
            q?: string | undefined
            role_id?: string | undefined
            role?: string | undefined
            device_id?: string | undefined
            device?: string | undefined
            tag?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            name__n?: string | undefined
            name__ic?: string | undefined
            name__nic?: string | undefined
            name__iew?: string | undefined
            name__niew?: string | undefined
            name__isw?: string | undefined
            name__nisw?: string | undefined
            name__ie?: string | undefined
            name__nie?: string | undefined
            role_id__n?: string | undefined
            role__n?: string | undefined
            device_id__n?: string | undefined
            device__n?: string | undefined
            tag__n?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: Secret[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: { input: { json: WritableSecret }; output: Secret; outputFormat: 'json'; status: 201 }
    }
  } & {
    '/secrets/secrets/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: { input: { param: { id: number } }; output: Secret; outputFormat: 'json'; status: 200 }
      $patch: {
        input: { param: { id: number } } & { json: WritableSecret }
        output: Secret
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableSecret }
        output: Secret
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tenancy/tenant-groups/': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            slug?: string | undefined
            description?: string | undefined
            q?: string | undefined
            parent_id?: string | undefined
            parent?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            name__n?: string | undefined
            name__ic?: string | undefined
            name__nic?: string | undefined
            name__iew?: string | undefined
            name__niew?: string | undefined
            name__isw?: string | undefined
            name__nisw?: string | undefined
            name__ie?: string | undefined
            name__nie?: string | undefined
            slug__n?: string | undefined
            slug__ic?: string | undefined
            slug__nic?: string | undefined
            slug__iew?: string | undefined
            slug__niew?: string | undefined
            slug__isw?: string | undefined
            slug__nisw?: string | undefined
            slug__ie?: string | undefined
            slug__nie?: string | undefined
            description__n?: string | undefined
            description__ic?: string | undefined
            description__nic?: string | undefined
            description__iew?: string | undefined
            description__niew?: string | undefined
            description__isw?: string | undefined
            description__nisw?: string | undefined
            description__ie?: string | undefined
            description__nie?: string | undefined
            parent_id__n?: string | undefined
            parent__n?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: TenantGroup[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableTenantGroup }
        output: TenantGroup
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/tenancy/tenant-groups/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: TenantGroup
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: WritableTenantGroup }
        output: TenantGroup
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableTenantGroup }
        output: TenantGroup
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tenancy/tenants/': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            slug?: string | undefined
            created?: string | undefined
            created__gte?: string | undefined
            created__lte?: string | undefined
            last_updated?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__lte?: string | undefined
            q?: string | undefined
            group_id?: string | undefined
            group?: string | undefined
            tag?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            name__n?: string | undefined
            name__ic?: string | undefined
            name__nic?: string | undefined
            name__iew?: string | undefined
            name__niew?: string | undefined
            name__isw?: string | undefined
            name__nisw?: string | undefined
            name__ie?: string | undefined
            name__nie?: string | undefined
            slug__n?: string | undefined
            slug__ic?: string | undefined
            slug__nic?: string | undefined
            slug__iew?: string | undefined
            slug__niew?: string | undefined
            slug__isw?: string | undefined
            slug__nisw?: string | undefined
            slug__ie?: string | undefined
            slug__nie?: string | undefined
            group_id__n?: string | undefined
            group__n?: string | undefined
            tag__n?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: Tenant[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: { input: { json: WritableTenant }; output: Tenant; outputFormat: 'json'; status: 201 }
    }
  } & {
    '/tenancy/tenants/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: { input: { param: { id: number } }; output: Tenant; outputFormat: 'json'; status: 200 }
      $patch: {
        input: { param: { id: number } } & { json: WritableTenant }
        output: Tenant
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableTenant }
        output: Tenant
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/virtualization/cluster-groups/': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            slug?: string | undefined
            description?: string | undefined
            q?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            name__n?: string | undefined
            name__ic?: string | undefined
            name__nic?: string | undefined
            name__iew?: string | undefined
            name__niew?: string | undefined
            name__isw?: string | undefined
            name__nisw?: string | undefined
            name__ie?: string | undefined
            name__nie?: string | undefined
            slug__n?: string | undefined
            slug__ic?: string | undefined
            slug__nic?: string | undefined
            slug__iew?: string | undefined
            slug__niew?: string | undefined
            slug__isw?: string | undefined
            slug__nisw?: string | undefined
            slug__ie?: string | undefined
            slug__nie?: string | undefined
            description__n?: string | undefined
            description__ic?: string | undefined
            description__nic?: string | undefined
            description__iew?: string | undefined
            description__niew?: string | undefined
            description__isw?: string | undefined
            description__nisw?: string | undefined
            description__ie?: string | undefined
            description__nie?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: ClusterGroup[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: ClusterGroup }
        output: ClusterGroup
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/virtualization/cluster-groups/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: ClusterGroup
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: ClusterGroup }
        output: ClusterGroup
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: ClusterGroup }
        output: ClusterGroup
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/virtualization/cluster-types/': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            slug?: string | undefined
            description?: string | undefined
            q?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            name__n?: string | undefined
            name__ic?: string | undefined
            name__nic?: string | undefined
            name__iew?: string | undefined
            name__niew?: string | undefined
            name__isw?: string | undefined
            name__nisw?: string | undefined
            name__ie?: string | undefined
            name__nie?: string | undefined
            slug__n?: string | undefined
            slug__ic?: string | undefined
            slug__nic?: string | undefined
            slug__iew?: string | undefined
            slug__niew?: string | undefined
            slug__isw?: string | undefined
            slug__nisw?: string | undefined
            slug__ie?: string | undefined
            slug__nie?: string | undefined
            description__n?: string | undefined
            description__ic?: string | undefined
            description__nic?: string | undefined
            description__iew?: string | undefined
            description__niew?: string | undefined
            description__isw?: string | undefined
            description__nisw?: string | undefined
            description__ie?: string | undefined
            description__nie?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: ClusterType[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: ClusterType }
        output: ClusterType
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/virtualization/cluster-types/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: ClusterType
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: ClusterType }
        output: ClusterType
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: ClusterType }
        output: ClusterType
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/virtualization/clusters/': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            tenant_group_id?: string | undefined
            tenant_group?: string | undefined
            tenant_id?: string | undefined
            tenant?: string | undefined
            created?: string | undefined
            created__gte?: string | undefined
            created__lte?: string | undefined
            last_updated?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__lte?: string | undefined
            q?: string | undefined
            region_id?: string | undefined
            region?: string | undefined
            site_id?: string | undefined
            site?: string | undefined
            group_id?: string | undefined
            group?: string | undefined
            type_id?: string | undefined
            type?: string | undefined
            tag?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            name__n?: string | undefined
            name__ic?: string | undefined
            name__nic?: string | undefined
            name__iew?: string | undefined
            name__niew?: string | undefined
            name__isw?: string | undefined
            name__nisw?: string | undefined
            name__ie?: string | undefined
            name__nie?: string | undefined
            tenant_group_id__n?: string | undefined
            tenant_group__n?: string | undefined
            tenant_id__n?: string | undefined
            tenant__n?: string | undefined
            region_id__n?: string | undefined
            region__n?: string | undefined
            site_id__n?: string | undefined
            site__n?: string | undefined
            group_id__n?: string | undefined
            group__n?: string | undefined
            type_id__n?: string | undefined
            type__n?: string | undefined
            tag__n?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: Cluster[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableCluster }
        output: Cluster
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/virtualization/clusters/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: { input: { param: { id: number } }; output: Cluster; outputFormat: 'json'; status: 200 }
      $patch: {
        input: { param: { id: number } } & { json: WritableCluster }
        output: Cluster
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableCluster }
        output: Cluster
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/virtualization/interfaces/': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            enabled?: string | undefined
            mtu?: string | undefined
            q?: string | undefined
            virtual_machine_id?: string | undefined
            virtual_machine?: string | undefined
            mac_address?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            name__n?: string | undefined
            name__ic?: string | undefined
            name__nic?: string | undefined
            name__iew?: string | undefined
            name__niew?: string | undefined
            name__isw?: string | undefined
            name__nisw?: string | undefined
            name__ie?: string | undefined
            name__nie?: string | undefined
            mtu__n?: string | undefined
            mtu__lte?: string | undefined
            mtu__lt?: string | undefined
            mtu__gte?: string | undefined
            mtu__gt?: string | undefined
            virtual_machine_id__n?: string | undefined
            virtual_machine__n?: string | undefined
            mac_address__n?: string | undefined
            mac_address__ic?: string | undefined
            mac_address__nic?: string | undefined
            mac_address__iew?: string | undefined
            mac_address__niew?: string | undefined
            mac_address__isw?: string | undefined
            mac_address__nisw?: string | undefined
            mac_address__ie?: string | undefined
            mac_address__nie?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: VirtualMachineInterface[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableVirtualMachineInterface }
        output: VirtualMachineInterface
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/virtualization/interfaces/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: VirtualMachineInterface
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: WritableVirtualMachineInterface }
        output: VirtualMachineInterface
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableVirtualMachineInterface }
        output: VirtualMachineInterface
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/virtualization/virtual-machines/': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            cluster?: string | undefined
            vcpus?: string | undefined
            memory?: string | undefined
            disk?: string | undefined
            local_context_data?: string | undefined
            tenant_group_id?: string | undefined
            tenant_group?: string | undefined
            tenant_id?: string | undefined
            tenant?: string | undefined
            created?: string | undefined
            created__gte?: string | undefined
            created__lte?: string | undefined
            last_updated?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__lte?: string | undefined
            q?: string | undefined
            status?: string | undefined
            cluster_group_id?: string | undefined
            cluster_group?: string | undefined
            cluster_type_id?: string | undefined
            cluster_type?: string | undefined
            cluster_id?: string | undefined
            region_id?: string | undefined
            region?: string | undefined
            site_id?: string | undefined
            site?: string | undefined
            role_id?: string | undefined
            role?: string | undefined
            platform_id?: string | undefined
            platform?: string | undefined
            mac_address?: string | undefined
            tag?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            name__n?: string | undefined
            name__ic?: string | undefined
            name__nic?: string | undefined
            name__iew?: string | undefined
            name__niew?: string | undefined
            name__isw?: string | undefined
            name__nisw?: string | undefined
            name__ie?: string | undefined
            name__nie?: string | undefined
            cluster__n?: string | undefined
            vcpus__n?: string | undefined
            vcpus__lte?: string | undefined
            vcpus__lt?: string | undefined
            vcpus__gte?: string | undefined
            vcpus__gt?: string | undefined
            memory__n?: string | undefined
            memory__lte?: string | undefined
            memory__lt?: string | undefined
            memory__gte?: string | undefined
            memory__gt?: string | undefined
            disk__n?: string | undefined
            disk__lte?: string | undefined
            disk__lt?: string | undefined
            disk__gte?: string | undefined
            disk__gt?: string | undefined
            tenant_group_id__n?: string | undefined
            tenant_group__n?: string | undefined
            tenant_id__n?: string | undefined
            tenant__n?: string | undefined
            status__n?: string | undefined
            cluster_group_id__n?: string | undefined
            cluster_group__n?: string | undefined
            cluster_type_id__n?: string | undefined
            cluster_type__n?: string | undefined
            cluster_id__n?: string | undefined
            region_id__n?: string | undefined
            region__n?: string | undefined
            site_id__n?: string | undefined
            site__n?: string | undefined
            role_id__n?: string | undefined
            role__n?: string | undefined
            platform_id__n?: string | undefined
            platform__n?: string | undefined
            mac_address__n?: string | undefined
            mac_address__ic?: string | undefined
            mac_address__nic?: string | undefined
            mac_address__iew?: string | undefined
            mac_address__niew?: string | undefined
            mac_address__isw?: string | undefined
            mac_address__nisw?: string | undefined
            mac_address__ie?: string | undefined
            mac_address__nie?: string | undefined
            tag__n?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: VirtualMachineWithConfigContext[]
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableVirtualMachineWithConfigContext }
        output: VirtualMachineWithConfigContext
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/virtualization/virtual-machines/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: VirtualMachineWithConfigContext
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: WritableVirtualMachineWithConfigContext }
        output: VirtualMachineWithConfigContext
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableVirtualMachineWithConfigContext }
        output: VirtualMachineWithConfigContext
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
