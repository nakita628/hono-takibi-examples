type NestedCable = {
  display?: string | undefined
  id?: number | undefined
  label?: string | undefined
  url?: string | undefined
}
type NestedCircuit = {
  cid: string
  display?: string | undefined
  id?: number | undefined
  url?: string | undefined
}
type NestedProviderNetwork = {
  display?: string | undefined
  id?: number | undefined
  name: string
  url?: string | undefined
} | null
type NestedSite = {
  display?: string | undefined
  id?: number | undefined
  name: string
  slug: string
  url?: string | undefined
} | null
type NestedTag = {
  color?: string | undefined
  display?: string | undefined
  id?: number | undefined
  name: string
  slug: string
  url?: string | undefined
}
type CircuitTermination = {
  _occupied?: boolean | undefined
  cable?: NestedCable | undefined
  cable_end?: string | undefined
  circuit: NestedCircuit
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display?: string | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  link_peers?: (string | null)[] | undefined
  link_peers_type?: string | undefined
  mark_connected?: boolean | undefined
  port_speed?: (number | null) | undefined
  pp_info?: string | undefined
  provider_network?: NestedProviderNetwork | undefined
  site?: NestedSite | undefined
  tags?: NestedTag[] | undefined
  term_side: 'A' | 'Z'
  upstream_speed?: (number | null) | undefined
  url?: string | undefined
  xconnect_id?: string | undefined
}
type WritableCircuitTermination = {
  _occupied?: boolean | undefined
  cable?: NestedCable | undefined
  cable_end?: string | undefined
  circuit: number
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display?: string | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  link_peers?: (string | null)[] | undefined
  link_peers_type?: string | undefined
  mark_connected?: boolean | undefined
  port_speed?: (number | null) | undefined
  pp_info?: string | undefined
  provider_network?: (number | null) | undefined
  site?: (number | null) | undefined
  tags?: NestedTag[] | undefined
  term_side: 'A' | 'Z'
  upstream_speed?: (number | null) | undefined
  url?: string | undefined
  xconnect_id?: string | undefined
}
type CircuitType = {
  circuit_count?: number | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display?: string | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  name: string
  slug: string
  tags?: NestedTag[] | undefined
  url?: string | undefined
}
type NestedProvider = {
  circuit_count?: number | undefined
  display?: string | undefined
  id?: number | undefined
  name: string
  slug: string
  url?: string | undefined
}
type NestedTenant = {
  display?: string | undefined
  id?: number | undefined
  name: string
  slug: string
  url?: string | undefined
} | null
type CircuitCircuitTermination = {
  description?: string | undefined
  display?: string | undefined
  id?: number | undefined
  port_speed?: (number | null) | undefined
  provider_network: NestedProviderNetwork
  site: NestedSite
  upstream_speed?: (number | null) | undefined
  url?: string | undefined
  xconnect_id?: string | undefined
}
type NestedCircuitType = {
  circuit_count?: number | undefined
  display?: string | undefined
  id?: number | undefined
  name: string
  slug: string
  url?: string | undefined
}
type Circuit = {
  cid: string
  comments?: string | undefined
  commit_rate?: (number | null) | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display?: string | undefined
  id?: number | undefined
  install_date?: (string | null) | undefined
  last_updated?: (string | null) | undefined
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
  tags?: NestedTag[] | undefined
  tenant?: NestedTenant | undefined
  termination_a?: CircuitCircuitTermination | undefined
  termination_date?: (string | null) | undefined
  termination_z?: CircuitCircuitTermination | undefined
  type: NestedCircuitType
  url?: string | undefined
}
type WritableCircuit = {
  cid: string
  comments?: string | undefined
  commit_rate?: (number | null) | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display?: string | undefined
  id?: number | undefined
  install_date?: (string | null) | undefined
  last_updated?: (string | null) | undefined
  provider: number
  status?:
    | 'planned'
    | 'provisioning'
    | 'active'
    | 'offline'
    | 'deprovisioning'
    | 'decommissioned'
    | undefined
  tags?: NestedTag[] | undefined
  tenant?: (number | null) | undefined
  termination_a?: (number | null) | undefined
  termination_date?: (string | null) | undefined
  termination_z?: (number | null) | undefined
  type: number
  url?: string | undefined
}
type ProviderNetwork = {
  comments?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display?: string | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  name: string
  provider: NestedProvider
  service_id?: string | undefined
  tags?: NestedTag[] | undefined
  url?: string | undefined
}
type WritableProviderNetwork = {
  comments?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display?: string | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  name: string
  provider: number
  service_id?: string | undefined
  tags?: NestedTag[] | undefined
  url?: string | undefined
}
type NestedASN = {
  asn: number
  display?: string | undefined
  id?: number | undefined
  url?: string | undefined
}
type Provider = {
  account?: string | undefined
  asns?: NestedASN[] | undefined
  circuit_count?: number | undefined
  comments?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display?: string | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  name: string
  slug: string
  tags?: NestedTag[] | undefined
  url?: string | undefined
}
type WritableProvider = {
  account?: string | undefined
  asns?: number[] | undefined
  circuit_count?: number | undefined
  comments?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display?: string | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  name: string
  slug: string
  tags?: NestedTag[] | undefined
  url?: string | undefined
}
type CableTermination = {
  cable: number
  cable_end: 'A' | 'B'
  display?: string | undefined
  id?: number | undefined
  termination?: { [x: string]: unknown } | undefined
  termination_id: number
  termination_type: string
  url?: string | undefined
}
type GenericObject = {
  object?: { [x: string]: unknown } | undefined
  object_id: number
  object_type: string
}
type Cable = {
  a_terminations?: GenericObject[] | undefined
  b_terminations?: GenericObject[] | undefined
  color?: string | undefined
  comments?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display?: string | undefined
  id?: number | undefined
  label?: string | undefined
  last_updated?: (string | null) | undefined
  length?: (number | null) | undefined
  length_unit?:
    | {
        label: 'Kilometers' | 'Meters' | 'Centimeters' | 'Miles' | 'Feet' | 'Inches'
        value: 'km' | 'm' | 'cm' | 'mi' | 'ft' | 'in'
      }
    | undefined
  status?:
    | {
        label: 'Connected' | 'Planned' | 'Decommissioning'
        value: 'connected' | 'planned' | 'decommissioning'
      }
    | undefined
  tags?: NestedTag[] | undefined
  tenant?: NestedTenant | undefined
  type?:
    | 'cat3'
    | 'cat5'
    | 'cat5e'
    | 'cat6'
    | 'cat6a'
    | 'cat7'
    | 'cat7a'
    | 'cat8'
    | 'dac-active'
    | 'dac-passive'
    | 'mrj21-trunk'
    | 'coaxial'
    | 'mmf'
    | 'mmf-om1'
    | 'mmf-om2'
    | 'mmf-om3'
    | 'mmf-om4'
    | 'mmf-om5'
    | 'smf'
    | 'smf-os1'
    | 'smf-os2'
    | 'aoc'
    | 'power'
    | undefined
  url?: string | undefined
}
type WritableCable = {
  a_terminations?: GenericObject[] | undefined
  b_terminations?: GenericObject[] | undefined
  color?: string | undefined
  comments?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display?: string | undefined
  id?: number | undefined
  label?: string | undefined
  last_updated?: (string | null) | undefined
  length?: (number | null) | undefined
  length_unit?: 'km' | 'm' | 'cm' | 'mi' | 'ft' | 'in' | undefined
  status?: 'connected' | 'planned' | 'decommissioning' | undefined
  tags?: NestedTag[] | undefined
  tenant?: (number | null) | undefined
  type?:
    | 'cat3'
    | 'cat5'
    | 'cat5e'
    | 'cat6'
    | 'cat6a'
    | 'cat7'
    | 'cat7a'
    | 'cat8'
    | 'dac-active'
    | 'dac-passive'
    | 'mrj21-trunk'
    | 'coaxial'
    | 'mmf'
    | 'mmf-om1'
    | 'mmf-om2'
    | 'mmf-om3'
    | 'mmf-om4'
    | 'mmf-om5'
    | 'smf'
    | 'smf-os1'
    | 'smf-os2'
    | 'aoc'
    | 'power'
    | undefined
  url?: string | undefined
}
type NestedCluster = {
  display?: string | undefined
  id?: number | undefined
  name: string
  url?: string | undefined
  virtualmachine_count?: number | undefined
} | null
type NestedDeviceRole = {
  device_count?: number | undefined
  display?: string | undefined
  id?: number | undefined
  name: string
  slug: string
  url?: string | undefined
  virtualmachine_count?: number | undefined
}
type NestedManufacturer = {
  devicetype_count?: number | undefined
  display?: string | undefined
  id?: number | undefined
  name: string
  slug: string
  url?: string | undefined
}
type NestedDeviceType = {
  device_count?: number | undefined
  display?: string | undefined
  id?: number | undefined
  manufacturer?: NestedManufacturer | undefined
  model: string
  slug: string
  url?: string | undefined
}
type NestedLocation = {
  _depth?: number | undefined
  display?: string | undefined
  id?: number | undefined
  name: string
  rack_count?: number | undefined
  slug: string
  url?: string | undefined
} | null
type NestedDevice = {
  display?: string | undefined
  id?: number | undefined
  name?: (string | null) | undefined
  url?: string | undefined
}
type NestedPlatform = {
  device_count?: number | undefined
  display?: string | undefined
  id?: number | undefined
  name: string
  slug: string
  url?: string | undefined
  virtualmachine_count?: number | undefined
} | null
type NestedIPAddress = {
  address: string
  display?: string | undefined
  family?: number | undefined
  id?: number | undefined
  url?: string | undefined
}
type NestedRack = {
  device_count?: number | undefined
  display?: string | undefined
  id?: number | undefined
  name: string
  url?: string | undefined
} | null
type NestedVirtualChassis = {
  display?: string | undefined
  id?: number | undefined
  master: NestedDevice
  member_count?: number | undefined
  name: string
  url?: string | undefined
} | null
type Device = {
  airflow?:
    | {
        label:
          | 'Front to rear'
          | 'Rear to front'
          | 'Left to right'
          | 'Right to left'
          | 'Side to rear'
          | 'Passive'
          | 'Mixed'
        value:
          | 'front-to-rear'
          | 'rear-to-front'
          | 'left-to-right'
          | 'right-to-left'
          | 'side-to-rear'
          | 'passive'
          | 'mixed'
      }
    | undefined
  asset_tag?: (string | null) | undefined
  cluster?: NestedCluster | undefined
  comments?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  device_role: NestedDeviceRole
  device_type: NestedDeviceType
  display?: string | undefined
  face?: { label: 'Front' | 'Rear'; value: 'front' | 'rear' } | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  local_context_data?: ({ [x: string]: unknown } | null) | undefined
  location?: NestedLocation | undefined
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
  tags?: NestedTag[] | undefined
  tenant?: NestedTenant | undefined
  url?: string | undefined
  vc_position?: (number | null) | undefined
  vc_priority?: (number | null) | undefined
  virtual_chassis?: NestedVirtualChassis | undefined
}
type NestedModuleType = {
  display?: string | undefined
  id?: number | undefined
  manufacturer?: NestedManufacturer | undefined
  model: string
  url?: string | undefined
} | null
type ConsolePortTemplate = {
  created?: (string | null) | undefined
  description?: string | undefined
  device_type?: NestedDeviceType | undefined
  display?: string | undefined
  id?: number | undefined
  label?: string | undefined
  last_updated?: (string | null) | undefined
  module_type?: NestedModuleType | undefined
  name: string
  type?:
    | {
        label:
          | 'DE-9'
          | 'DB-25'
          | 'RJ-11'
          | 'RJ-12'
          | 'RJ-45'
          | 'Mini-DIN 8'
          | 'USB Type A'
          | 'USB Type B'
          | 'USB Type C'
          | 'USB Mini A'
          | 'USB Mini B'
          | 'USB Micro A'
          | 'USB Micro B'
          | 'USB Micro AB'
          | 'Other'
        value:
          | 'de-9'
          | 'db-25'
          | 'rj-11'
          | 'rj-12'
          | 'rj-45'
          | 'mini-din-8'
          | 'usb-a'
          | 'usb-b'
          | 'usb-c'
          | 'usb-mini-a'
          | 'usb-mini-b'
          | 'usb-micro-a'
          | 'usb-micro-b'
          | 'usb-micro-ab'
          | 'other'
      }
    | undefined
  url?: string | undefined
}
type WritableConsolePortTemplate = {
  created?: (string | null) | undefined
  description?: string | undefined
  device_type?: (number | null) | undefined
  display?: string | undefined
  id?: number | undefined
  label?: string | undefined
  last_updated?: (string | null) | undefined
  module_type?: (number | null) | undefined
  name: string
  type?:
    | 'de-9'
    | 'db-25'
    | 'rj-11'
    | 'rj-12'
    | 'rj-45'
    | 'mini-din-8'
    | 'usb-a'
    | 'usb-b'
    | 'usb-c'
    | 'usb-mini-a'
    | 'usb-mini-b'
    | 'usb-micro-a'
    | 'usb-micro-b'
    | 'usb-micro-ab'
    | 'other'
    | undefined
  url?: string | undefined
}
type ModuleNestedModuleBay = {
  display?: string | undefined
  id?: number | undefined
  name: string
  url?: string | undefined
}
type ComponentNestedModule = {
  device: number
  display?: string | undefined
  id?: number | undefined
  module_bay?: ModuleNestedModuleBay | undefined
  url?: string | undefined
} | null
type ConsolePort = {
  _occupied?: boolean | undefined
  cable?: NestedCable | undefined
  cable_end?: string | undefined
  connected_endpoints?: (string | null)[] | undefined
  connected_endpoints_reachable?: boolean | undefined
  connected_endpoints_type?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  device: NestedDevice
  display?: string | undefined
  id?: number | undefined
  label?: string | undefined
  last_updated?: (string | null) | undefined
  link_peers?: (string | null)[] | undefined
  link_peers_type?: string | undefined
  mark_connected?: boolean | undefined
  module?: ComponentNestedModule | undefined
  name: string
  speed?:
    | ({
        label:
          | '1200 bps'
          | '2400 bps'
          | '4800 bps'
          | '9600 bps'
          | '19.2 kbps'
          | '38.4 kbps'
          | '57.6 kbps'
          | '115.2 kbps'
        value: 1200 | 2400 | 4800 | 9600 | 19200 | 38400 | 57600 | 115200
      } | null)
    | undefined
  tags?: NestedTag[] | undefined
  type?:
    | {
        label:
          | 'DE-9'
          | 'DB-25'
          | 'RJ-11'
          | 'RJ-12'
          | 'RJ-45'
          | 'Mini-DIN 8'
          | 'USB Type A'
          | 'USB Type B'
          | 'USB Type C'
          | 'USB Mini A'
          | 'USB Mini B'
          | 'USB Micro A'
          | 'USB Micro B'
          | 'USB Micro AB'
          | 'Other'
        value:
          | 'de-9'
          | 'db-25'
          | 'rj-11'
          | 'rj-12'
          | 'rj-45'
          | 'mini-din-8'
          | 'usb-a'
          | 'usb-b'
          | 'usb-c'
          | 'usb-mini-a'
          | 'usb-mini-b'
          | 'usb-micro-a'
          | 'usb-micro-b'
          | 'usb-micro-ab'
          | 'other'
      }
    | undefined
  url?: string | undefined
}
type WritableConsolePort = {
  _occupied?: boolean | undefined
  cable?: NestedCable | undefined
  cable_end?: string | undefined
  connected_endpoints?: (string | null)[] | undefined
  connected_endpoints_reachable?: boolean | undefined
  connected_endpoints_type?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  device: number
  display?: string | undefined
  id?: number | undefined
  label?: string | undefined
  last_updated?: (string | null) | undefined
  link_peers?: (string | null)[] | undefined
  link_peers_type?: string | undefined
  mark_connected?: boolean | undefined
  module?: (number | null) | undefined
  name: string
  speed?: 1200 | 2400 | 4800 | 9600 | 19200 | 38400 | 57600 | 115200 | undefined
  tags?: NestedTag[] | undefined
  type?:
    | 'de-9'
    | 'db-25'
    | 'rj-11'
    | 'rj-12'
    | 'rj-45'
    | 'mini-din-8'
    | 'usb-a'
    | 'usb-b'
    | 'usb-c'
    | 'usb-mini-a'
    | 'usb-mini-b'
    | 'usb-micro-a'
    | 'usb-micro-b'
    | 'usb-micro-ab'
    | 'other'
    | undefined
  url?: string | undefined
}
type ConsoleServerPortTemplate = {
  created?: (string | null) | undefined
  description?: string | undefined
  device_type?: NestedDeviceType | undefined
  display?: string | undefined
  id?: number | undefined
  label?: string | undefined
  last_updated?: (string | null) | undefined
  module_type?: NestedModuleType | undefined
  name: string
  type?:
    | {
        label:
          | 'DE-9'
          | 'DB-25'
          | 'RJ-11'
          | 'RJ-12'
          | 'RJ-45'
          | 'Mini-DIN 8'
          | 'USB Type A'
          | 'USB Type B'
          | 'USB Type C'
          | 'USB Mini A'
          | 'USB Mini B'
          | 'USB Micro A'
          | 'USB Micro B'
          | 'USB Micro AB'
          | 'Other'
        value:
          | 'de-9'
          | 'db-25'
          | 'rj-11'
          | 'rj-12'
          | 'rj-45'
          | 'mini-din-8'
          | 'usb-a'
          | 'usb-b'
          | 'usb-c'
          | 'usb-mini-a'
          | 'usb-mini-b'
          | 'usb-micro-a'
          | 'usb-micro-b'
          | 'usb-micro-ab'
          | 'other'
      }
    | undefined
  url?: string | undefined
}
type WritableConsoleServerPortTemplate = {
  created?: (string | null) | undefined
  description?: string | undefined
  device_type?: (number | null) | undefined
  display?: string | undefined
  id?: number | undefined
  label?: string | undefined
  last_updated?: (string | null) | undefined
  module_type?: (number | null) | undefined
  name: string
  type?:
    | 'de-9'
    | 'db-25'
    | 'rj-11'
    | 'rj-12'
    | 'rj-45'
    | 'mini-din-8'
    | 'usb-a'
    | 'usb-b'
    | 'usb-c'
    | 'usb-mini-a'
    | 'usb-mini-b'
    | 'usb-micro-a'
    | 'usb-micro-b'
    | 'usb-micro-ab'
    | 'other'
    | undefined
  url?: string | undefined
}
type ConsoleServerPort = {
  _occupied?: boolean | undefined
  cable?: NestedCable | undefined
  cable_end?: string | undefined
  connected_endpoints?: (string | null)[] | undefined
  connected_endpoints_reachable?: boolean | undefined
  connected_endpoints_type?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  device: NestedDevice
  display?: string | undefined
  id?: number | undefined
  label?: string | undefined
  last_updated?: (string | null) | undefined
  link_peers?: (string | null)[] | undefined
  link_peers_type?: string | undefined
  mark_connected?: boolean | undefined
  module?: ComponentNestedModule | undefined
  name: string
  speed?:
    | ({
        label:
          | '1200 bps'
          | '2400 bps'
          | '4800 bps'
          | '9600 bps'
          | '19.2 kbps'
          | '38.4 kbps'
          | '57.6 kbps'
          | '115.2 kbps'
        value: 1200 | 2400 | 4800 | 9600 | 19200 | 38400 | 57600 | 115200
      } | null)
    | undefined
  tags?: NestedTag[] | undefined
  type?:
    | {
        label:
          | 'DE-9'
          | 'DB-25'
          | 'RJ-11'
          | 'RJ-12'
          | 'RJ-45'
          | 'Mini-DIN 8'
          | 'USB Type A'
          | 'USB Type B'
          | 'USB Type C'
          | 'USB Mini A'
          | 'USB Mini B'
          | 'USB Micro A'
          | 'USB Micro B'
          | 'USB Micro AB'
          | 'Other'
        value:
          | 'de-9'
          | 'db-25'
          | 'rj-11'
          | 'rj-12'
          | 'rj-45'
          | 'mini-din-8'
          | 'usb-a'
          | 'usb-b'
          | 'usb-c'
          | 'usb-mini-a'
          | 'usb-mini-b'
          | 'usb-micro-a'
          | 'usb-micro-b'
          | 'usb-micro-ab'
          | 'other'
      }
    | undefined
  url?: string | undefined
}
type WritableConsoleServerPort = {
  _occupied?: boolean | undefined
  cable?: NestedCable | undefined
  cable_end?: string | undefined
  connected_endpoints?: (string | null)[] | undefined
  connected_endpoints_reachable?: boolean | undefined
  connected_endpoints_type?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  device: number
  display?: string | undefined
  id?: number | undefined
  label?: string | undefined
  last_updated?: (string | null) | undefined
  link_peers?: (string | null)[] | undefined
  link_peers_type?: string | undefined
  mark_connected?: boolean | undefined
  module?: (number | null) | undefined
  name: string
  speed?: 1200 | 2400 | 4800 | 9600 | 19200 | 38400 | 57600 | 115200 | undefined
  tags?: NestedTag[] | undefined
  type?:
    | 'de-9'
    | 'db-25'
    | 'rj-11'
    | 'rj-12'
    | 'rj-45'
    | 'mini-din-8'
    | 'usb-a'
    | 'usb-b'
    | 'usb-c'
    | 'usb-mini-a'
    | 'usb-mini-b'
    | 'usb-micro-a'
    | 'usb-micro-b'
    | 'usb-micro-ab'
    | 'other'
    | undefined
  url?: string | undefined
}
type DeviceBayTemplate = {
  created?: (string | null) | undefined
  description?: string | undefined
  device_type: NestedDeviceType
  display?: string | undefined
  id?: number | undefined
  label?: string | undefined
  last_updated?: (string | null) | undefined
  name: string
  url?: string | undefined
}
type WritableDeviceBayTemplate = {
  created?: (string | null) | undefined
  description?: string | undefined
  device_type: number
  display?: string | undefined
  id?: number | undefined
  label?: string | undefined
  last_updated?: (string | null) | undefined
  name: string
  url?: string | undefined
}
type DeviceBay = {
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  device: NestedDevice
  display?: string | undefined
  id?: number | undefined
  installed_device?: NestedDevice | undefined
  label?: string | undefined
  last_updated?: (string | null) | undefined
  name: string
  tags?: NestedTag[] | undefined
  url?: string | undefined
}
type WritableDeviceBay = {
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  device: number
  display?: string | undefined
  id?: number | undefined
  installed_device?: (number | null) | undefined
  label?: string | undefined
  last_updated?: (string | null) | undefined
  name: string
  tags?: NestedTag[] | undefined
  url?: string | undefined
}
type DeviceRole = {
  color?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  device_count?: number | undefined
  display?: string | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  name: string
  slug: string
  tags?: NestedTag[] | undefined
  url?: string | undefined
  virtualmachine_count?: number | undefined
  vm_role?: boolean | undefined
}
type DeviceType = {
  airflow?:
    | {
        label:
          | 'Front to rear'
          | 'Rear to front'
          | 'Left to right'
          | 'Right to left'
          | 'Side to rear'
          | 'Passive'
          | 'Mixed'
        value:
          | 'front-to-rear'
          | 'rear-to-front'
          | 'left-to-right'
          | 'right-to-left'
          | 'side-to-rear'
          | 'passive'
          | 'mixed'
      }
    | undefined
  comments?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  device_count?: number | undefined
  display?: string | undefined
  front_image?: string | undefined
  id?: number | undefined
  is_full_depth?: boolean | undefined
  last_updated?: (string | null) | undefined
  manufacturer: NestedManufacturer
  model: string
  part_number?: string | undefined
  rear_image?: string | undefined
  slug: string
  subdevice_role?: { label: 'Parent' | 'Child'; value: 'parent' | 'child' } | undefined
  tags?: NestedTag[] | undefined
  u_height?: number | undefined
  url?: string | undefined
  weight?: (number | null) | undefined
  weight_unit?:
    | { label: 'Kilograms' | 'Grams' | 'Pounds' | 'Ounces'; value: 'kg' | 'g' | 'lb' | 'oz' }
    | undefined
}
type WritableDeviceType = {
  airflow?:
    | 'front-to-rear'
    | 'rear-to-front'
    | 'left-to-right'
    | 'right-to-left'
    | 'side-to-rear'
    | 'passive'
    | 'mixed'
    | undefined
  comments?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  device_count?: number | undefined
  display?: string | undefined
  front_image?: string | undefined
  id?: number | undefined
  is_full_depth?: boolean | undefined
  last_updated?: (string | null) | undefined
  manufacturer: number
  model: string
  part_number?: string | undefined
  rear_image?: string | undefined
  slug: string
  subdevice_role?: 'parent' | 'child' | undefined
  tags?: NestedTag[] | undefined
  u_height?: number | undefined
  url?: string | undefined
  weight?: (number | null) | undefined
  weight_unit?: 'kg' | 'g' | 'lb' | 'oz' | undefined
}
type DeviceWithConfigContext = {
  airflow?:
    | {
        label:
          | 'Front to rear'
          | 'Rear to front'
          | 'Left to right'
          | 'Right to left'
          | 'Side to rear'
          | 'Passive'
          | 'Mixed'
        value:
          | 'front-to-rear'
          | 'rear-to-front'
          | 'left-to-right'
          | 'right-to-left'
          | 'side-to-rear'
          | 'passive'
          | 'mixed'
      }
    | undefined
  asset_tag?: (string | null) | undefined
  cluster?: NestedCluster | undefined
  comments?: string | undefined
  config_context?: { [x: string]: unknown } | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  device_role: NestedDeviceRole
  device_type: NestedDeviceType
  display?: string | undefined
  face?: { label: 'Front' | 'Rear'; value: 'front' | 'rear' } | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  local_context_data?: ({ [x: string]: unknown } | null) | undefined
  location?: NestedLocation | undefined
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
  tags?: NestedTag[] | undefined
  tenant?: NestedTenant | undefined
  url?: string | undefined
  vc_position?: (number | null) | undefined
  vc_priority?: (number | null) | undefined
  virtual_chassis?: NestedVirtualChassis | undefined
}
type WritableDeviceWithConfigContext = {
  airflow?:
    | 'front-to-rear'
    | 'rear-to-front'
    | 'left-to-right'
    | 'right-to-left'
    | 'side-to-rear'
    | 'passive'
    | 'mixed'
    | undefined
  asset_tag?: (string | null) | undefined
  cluster?: (number | null) | undefined
  comments?: string | undefined
  config_context?: { [x: string]: unknown } | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  device_role: number
  device_type: number
  display?: string | undefined
  face?: 'front' | 'rear' | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  local_context_data?: ({ [x: string]: unknown } | null) | undefined
  location?: (number | null) | undefined
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
  tags?: NestedTag[] | undefined
  tenant?: (number | null) | undefined
  url?: string | undefined
  vc_position?: (number | null) | undefined
  vc_priority?: (number | null) | undefined
  virtual_chassis?: (number | null) | undefined
}
type DeviceNAPALM = { method: { [x: string]: unknown } }
type NestedRearPortTemplate = {
  display?: string | undefined
  id?: number | undefined
  name: string
  url?: string | undefined
}
type FrontPortTemplate = {
  color?: string | undefined
  created?: (string | null) | undefined
  description?: string | undefined
  device_type?: NestedDeviceType | undefined
  display?: string | undefined
  id?: number | undefined
  label?: string | undefined
  last_updated?: (string | null) | undefined
  module_type?: NestedModuleType | undefined
  name: string
  rear_port: NestedRearPortTemplate
  rear_port_position?: number | undefined
  type: {
    label:
      | '8P8C'
      | '8P6C'
      | '8P4C'
      | '8P2C'
      | '6P6C'
      | '6P4C'
      | '6P2C'
      | '4P4C'
      | '4P2C'
      | 'GG45'
      | 'TERA 4P'
      | 'TERA 2P'
      | 'TERA 1P'
      | '110 Punch'
      | 'BNC'
      | 'F Connector'
      | 'N Connector'
      | 'MRJ21'
      | 'FC'
      | 'LC'
      | 'LC/PC'
      | 'LC/UPC'
      | 'LC/APC'
      | 'LSH'
      | 'LSH/PC'
      | 'LSH/UPC'
      | 'LSH/APC'
      | 'MPO'
      | 'MTRJ'
      | 'SC'
      | 'SC/PC'
      | 'SC/UPC'
      | 'SC/APC'
      | 'ST'
      | 'CS'
      | 'SN'
      | 'SMA 905'
      | 'SMA 906'
      | 'URM-P2'
      | 'URM-P4'
      | 'URM-P8'
      | 'Splice'
      | 'Other'
    value:
      | '8p8c'
      | '8p6c'
      | '8p4c'
      | '8p2c'
      | '6p6c'
      | '6p4c'
      | '6p2c'
      | '4p4c'
      | '4p2c'
      | 'gg45'
      | 'tera-4p'
      | 'tera-2p'
      | 'tera-1p'
      | '110-punch'
      | 'bnc'
      | 'f'
      | 'n'
      | 'mrj21'
      | 'fc'
      | 'lc'
      | 'lc-pc'
      | 'lc-upc'
      | 'lc-apc'
      | 'lsh'
      | 'lsh-pc'
      | 'lsh-upc'
      | 'lsh-apc'
      | 'mpo'
      | 'mtrj'
      | 'sc'
      | 'sc-pc'
      | 'sc-upc'
      | 'sc-apc'
      | 'st'
      | 'cs'
      | 'sn'
      | 'sma-905'
      | 'sma-906'
      | 'urm-p2'
      | 'urm-p4'
      | 'urm-p8'
      | 'splice'
      | 'other'
  }
  url?: string | undefined
}
type WritableFrontPortTemplate = {
  color?: string | undefined
  created?: (string | null) | undefined
  description?: string | undefined
  device_type?: (number | null) | undefined
  display?: string | undefined
  id?: number | undefined
  label?: string | undefined
  last_updated?: (string | null) | undefined
  module_type?: (number | null) | undefined
  name: string
  rear_port: number
  rear_port_position?: number | undefined
  type:
    | '8p8c'
    | '8p6c'
    | '8p4c'
    | '8p2c'
    | '6p6c'
    | '6p4c'
    | '6p2c'
    | '4p4c'
    | '4p2c'
    | 'gg45'
    | 'tera-4p'
    | 'tera-2p'
    | 'tera-1p'
    | '110-punch'
    | 'bnc'
    | 'f'
    | 'n'
    | 'mrj21'
    | 'fc'
    | 'lc'
    | 'lc-pc'
    | 'lc-upc'
    | 'lc-apc'
    | 'lsh'
    | 'lsh-pc'
    | 'lsh-upc'
    | 'lsh-apc'
    | 'mpo'
    | 'mtrj'
    | 'sc'
    | 'sc-pc'
    | 'sc-upc'
    | 'sc-apc'
    | 'st'
    | 'cs'
    | 'sn'
    | 'sma-905'
    | 'sma-906'
    | 'urm-p2'
    | 'urm-p4'
    | 'urm-p8'
    | 'splice'
    | 'other'
  url?: string | undefined
}
type FrontPortRearPort = {
  description?: string | undefined
  display?: string | undefined
  id?: number | undefined
  label?: string | undefined
  name: string
  url?: string | undefined
}
type FrontPort = {
  _occupied?: boolean | undefined
  cable?: NestedCable | undefined
  cable_end?: string | undefined
  color?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  device: NestedDevice
  display?: string | undefined
  id?: number | undefined
  label?: string | undefined
  last_updated?: (string | null) | undefined
  link_peers?: (string | null)[] | undefined
  link_peers_type?: string | undefined
  mark_connected?: boolean | undefined
  module?: ComponentNestedModule | undefined
  name: string
  rear_port: FrontPortRearPort
  rear_port_position?: number | undefined
  tags?: NestedTag[] | undefined
  type: {
    label:
      | '8P8C'
      | '8P6C'
      | '8P4C'
      | '8P2C'
      | '6P6C'
      | '6P4C'
      | '6P2C'
      | '4P4C'
      | '4P2C'
      | 'GG45'
      | 'TERA 4P'
      | 'TERA 2P'
      | 'TERA 1P'
      | '110 Punch'
      | 'BNC'
      | 'F Connector'
      | 'N Connector'
      | 'MRJ21'
      | 'FC'
      | 'LC'
      | 'LC/PC'
      | 'LC/UPC'
      | 'LC/APC'
      | 'LSH'
      | 'LSH/PC'
      | 'LSH/UPC'
      | 'LSH/APC'
      | 'MPO'
      | 'MTRJ'
      | 'SC'
      | 'SC/PC'
      | 'SC/UPC'
      | 'SC/APC'
      | 'ST'
      | 'CS'
      | 'SN'
      | 'SMA 905'
      | 'SMA 906'
      | 'URM-P2'
      | 'URM-P4'
      | 'URM-P8'
      | 'Splice'
      | 'Other'
    value:
      | '8p8c'
      | '8p6c'
      | '8p4c'
      | '8p2c'
      | '6p6c'
      | '6p4c'
      | '6p2c'
      | '4p4c'
      | '4p2c'
      | 'gg45'
      | 'tera-4p'
      | 'tera-2p'
      | 'tera-1p'
      | '110-punch'
      | 'bnc'
      | 'f'
      | 'n'
      | 'mrj21'
      | 'fc'
      | 'lc'
      | 'lc-pc'
      | 'lc-upc'
      | 'lc-apc'
      | 'lsh'
      | 'lsh-pc'
      | 'lsh-upc'
      | 'lsh-apc'
      | 'mpo'
      | 'mtrj'
      | 'sc'
      | 'sc-pc'
      | 'sc-upc'
      | 'sc-apc'
      | 'st'
      | 'cs'
      | 'sn'
      | 'sma-905'
      | 'sma-906'
      | 'urm-p2'
      | 'urm-p4'
      | 'urm-p8'
      | 'splice'
      | 'other'
  }
  url?: string | undefined
}
type WritableFrontPort = {
  _occupied?: boolean | undefined
  cable?: NestedCable | undefined
  cable_end?: string | undefined
  color?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  device: number
  display?: string | undefined
  id?: number | undefined
  label?: string | undefined
  last_updated?: (string | null) | undefined
  link_peers?: (string | null)[] | undefined
  link_peers_type?: string | undefined
  mark_connected?: boolean | undefined
  module?: (number | null) | undefined
  name: string
  rear_port: number
  rear_port_position?: number | undefined
  tags?: NestedTag[] | undefined
  type:
    | '8p8c'
    | '8p6c'
    | '8p4c'
    | '8p2c'
    | '6p6c'
    | '6p4c'
    | '6p2c'
    | '4p4c'
    | '4p2c'
    | 'gg45'
    | 'tera-4p'
    | 'tera-2p'
    | 'tera-1p'
    | '110-punch'
    | 'bnc'
    | 'f'
    | 'n'
    | 'mrj21'
    | 'fc'
    | 'lc'
    | 'lc-pc'
    | 'lc-upc'
    | 'lc-apc'
    | 'lsh'
    | 'lsh-pc'
    | 'lsh-upc'
    | 'lsh-apc'
    | 'mpo'
    | 'mtrj'
    | 'sc'
    | 'sc-pc'
    | 'sc-upc'
    | 'sc-apc'
    | 'st'
    | 'cs'
    | 'sn'
    | 'sma-905'
    | 'sma-906'
    | 'urm-p2'
    | 'urm-p4'
    | 'urm-p8'
    | 'splice'
    | 'other'
  url?: string | undefined
}
type InterfaceTemplate = {
  created?: (string | null) | undefined
  description?: string | undefined
  device_type?: NestedDeviceType | undefined
  display?: string | undefined
  id?: number | undefined
  label?: string | undefined
  last_updated?: (string | null) | undefined
  mgmt_only?: boolean | undefined
  module_type?: NestedModuleType | undefined
  name: string
  poe_mode?: { label: 'PD' | 'PSE'; value: 'pd' | 'pse' } | undefined
  poe_type?:
    | {
        label:
          | '802.3af (Type 1)'
          | '802.3at (Type 2)'
          | '802.3az (Type 2)'
          | '802.3bt (Type 3)'
          | '802.3bt (Type 4)'
          | 'Passive 24V (2-pair)'
          | 'Passive 24V (4-pair)'
          | 'Passive 48V (2-pair)'
          | 'Passive 48V (4-pair)'
        value:
          | 'type1-ieee802.3af'
          | 'type2-ieee802.3at'
          | 'type2-ieee802.3az'
          | 'type3-ieee802.3bt'
          | 'type4-ieee802.3bt'
          | 'passive-24v-2pair'
          | 'passive-24v-4pair'
          | 'passive-48v-2pair'
          | 'passive-48v-4pair'
      }
    | undefined
  type: {
    label:
      | 'Virtual'
      | 'Bridge'
      | 'Link Aggregation Group (LAG)'
      | '100BASE-FX (10/100ME FIBER)'
      | '100BASE-LFX (10/100ME FIBER)'
      | '100BASE-TX (10/100ME)'
      | '100BASE-T1 (10/100ME Single Pair)'
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
      | 'SFP56 (50GE)'
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
      | 'QSFP-DD (800GE)'
      | 'OSFP (800GE)'
      | '1000BASE-KX (1GE)'
      | '10GBASE-KR (10GE)'
      | '10GBASE-KX4 (10GE)'
      | '25GBASE-KR (25GE)'
      | '40GBASE-KR4 (40GE)'
      | '50GBASE-KR (50GE)'
      | '100GBASE-KP4 (100GE)'
      | '100GBASE-KR2 (100GE)'
      | '100GBASE-KR4 (100GE)'
      | 'IEEE 802.11a'
      | 'IEEE 802.11b/g'
      | 'IEEE 802.11n'
      | 'IEEE 802.11ac'
      | 'IEEE 802.11ad'
      | 'IEEE 802.11ax'
      | 'IEEE 802.11ay'
      | 'IEEE 802.15.1 (Bluetooth)'
      | 'Other (Wireless)'
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
      | 'QSFP+ (64GFC)'
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
      | 'xDSL'
      | 'DOCSIS'
      | 'GPON (2.5 Gbps / 1.25 Gps)'
      | 'XG-PON (10 Gbps / 2.5 Gbps)'
      | 'XGS-PON (10 Gbps)'
      | 'NG-PON2 (TWDM-PON) (4x10 Gbps)'
      | 'EPON (1 Gbps)'
      | '10G-EPON (10 Gbps)'
      | 'Cisco StackWise'
      | 'Cisco StackWise Plus'
      | 'Cisco FlexStack'
      | 'Cisco FlexStack Plus'
      | 'Cisco StackWise-80'
      | 'Cisco StackWise-160'
      | 'Cisco StackWise-320'
      | 'Cisco StackWise-480'
      | 'Cisco StackWise-1T'
      | 'Juniper VCP'
      | 'Extreme SummitStack'
      | 'Extreme SummitStack-128'
      | 'Extreme SummitStack-256'
      | 'Extreme SummitStack-512'
      | 'Other'
    value:
      | 'virtual'
      | 'bridge'
      | 'lag'
      | '100base-fx'
      | '100base-lfx'
      | '100base-tx'
      | '100base-t1'
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
      | '50gbase-x-sfp56'
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
      | '800gbase-x-qsfpdd'
      | '800gbase-x-osfp'
      | '1000base-kx'
      | '10gbase-kr'
      | '10gbase-kx4'
      | '25gbase-kr'
      | '40gbase-kr4'
      | '50gbase-kr'
      | '100gbase-kp4'
      | '100gbase-kr2'
      | '100gbase-kr4'
      | 'ieee802.11a'
      | 'ieee802.11g'
      | 'ieee802.11n'
      | 'ieee802.11ac'
      | 'ieee802.11ad'
      | 'ieee802.11ax'
      | 'ieee802.11ay'
      | 'ieee802.15.1'
      | 'other-wireless'
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
      | '64gfc-qsfpp'
      | '128gfc-qsfp28'
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
      | 'xdsl'
      | 'docsis'
      | 'gpon'
      | 'xg-pon'
      | 'xgs-pon'
      | 'ng-pon2'
      | 'epon'
      | '10g-epon'
      | 'cisco-stackwise'
      | 'cisco-stackwise-plus'
      | 'cisco-flexstack'
      | 'cisco-flexstack-plus'
      | 'cisco-stackwise-80'
      | 'cisco-stackwise-160'
      | 'cisco-stackwise-320'
      | 'cisco-stackwise-480'
      | 'cisco-stackwise-1t'
      | 'juniper-vcp'
      | 'extreme-summitstack'
      | 'extreme-summitstack-128'
      | 'extreme-summitstack-256'
      | 'extreme-summitstack-512'
      | 'other'
  }
  url?: string | undefined
}
type WritableInterfaceTemplate = {
  created?: (string | null) | undefined
  description?: string | undefined
  device_type?: (number | null) | undefined
  display?: string | undefined
  id?: number | undefined
  label?: string | undefined
  last_updated?: (string | null) | undefined
  mgmt_only?: boolean | undefined
  module_type?: (number | null) | undefined
  name: string
  poe_mode?: 'pd' | 'pse' | undefined
  poe_type?:
    | 'type1-ieee802.3af'
    | 'type2-ieee802.3at'
    | 'type2-ieee802.3az'
    | 'type3-ieee802.3bt'
    | 'type4-ieee802.3bt'
    | 'passive-24v-2pair'
    | 'passive-24v-4pair'
    | 'passive-48v-2pair'
    | 'passive-48v-4pair'
    | undefined
  type:
    | 'virtual'
    | 'bridge'
    | 'lag'
    | '100base-fx'
    | '100base-lfx'
    | '100base-tx'
    | '100base-t1'
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
    | '50gbase-x-sfp56'
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
    | '800gbase-x-qsfpdd'
    | '800gbase-x-osfp'
    | '1000base-kx'
    | '10gbase-kr'
    | '10gbase-kx4'
    | '25gbase-kr'
    | '40gbase-kr4'
    | '50gbase-kr'
    | '100gbase-kp4'
    | '100gbase-kr2'
    | '100gbase-kr4'
    | 'ieee802.11a'
    | 'ieee802.11g'
    | 'ieee802.11n'
    | 'ieee802.11ac'
    | 'ieee802.11ad'
    | 'ieee802.11ax'
    | 'ieee802.11ay'
    | 'ieee802.15.1'
    | 'other-wireless'
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
    | '64gfc-qsfpp'
    | '128gfc-qsfp28'
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
    | 'xdsl'
    | 'docsis'
    | 'gpon'
    | 'xg-pon'
    | 'xgs-pon'
    | 'ng-pon2'
    | 'epon'
    | '10g-epon'
    | 'cisco-stackwise'
    | 'cisco-stackwise-plus'
    | 'cisco-flexstack'
    | 'cisco-flexstack-plus'
    | 'cisco-stackwise-80'
    | 'cisco-stackwise-160'
    | 'cisco-stackwise-320'
    | 'cisco-stackwise-480'
    | 'cisco-stackwise-1t'
    | 'juniper-vcp'
    | 'extreme-summitstack'
    | 'extreme-summitstack-128'
    | 'extreme-summitstack-256'
    | 'extreme-summitstack-512'
    | 'other'
  url?: string | undefined
}
type NestedInterface = {
  _occupied?: boolean | undefined
  cable?: (number | null) | undefined
  device?: NestedDevice | undefined
  display?: string | undefined
  id?: number | undefined
  name: string
  url?: string | undefined
} | null
type NestedL2VPN = {
  display?: string | undefined
  id?: number | undefined
  identifier?: (number | null) | undefined
  name: string
  slug: string
  type:
    | 'vpws'
    | 'vpls'
    | 'vxlan'
    | 'vxlan-evpn'
    | 'mpls-evpn'
    | 'pbb-evpn'
    | 'epl'
    | 'evpl'
    | 'ep-lan'
    | 'evp-lan'
    | 'ep-tree'
    | 'evp-tree'
  url?: string | undefined
}
type NestedL2VPNTermination = {
  display?: string | undefined
  id?: number | undefined
  l2vpn: NestedL2VPN
  url?: string | undefined
}
type NestedVLAN = {
  display?: string | undefined
  id?: number | undefined
  name: string
  url?: string | undefined
  vid: number
} | null
type NestedVirtualDeviceContext = {
  device: NestedDevice
  display?: string | undefined
  id?: number | undefined
  identifier?: (number | null) | undefined
  name: string
  url?: string | undefined
}
type NestedVRF = {
  display?: string | undefined
  id?: number | undefined
  name: string
  prefix_count?: number | undefined
  rd?: (string | null) | undefined
  url?: string | undefined
} | null
type NestedWirelessLAN = {
  display?: string | undefined
  id?: number | undefined
  ssid: string
  url?: string | undefined
}
type NestedWirelessLink = {
  display?: string | undefined
  id?: number | undefined
  ssid?: string | undefined
  url?: string | undefined
}
type Interface = {
  _occupied?: boolean | undefined
  bridge?: NestedInterface | undefined
  cable?: NestedCable | undefined
  cable_end?: string | undefined
  connected_endpoints?: (string | null)[] | undefined
  connected_endpoints_reachable?: boolean | undefined
  connected_endpoints_type?: string | undefined
  count_fhrp_groups?: number | undefined
  count_ipaddresses?: number | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  device: NestedDevice
  display?: string | undefined
  duplex?: { label: 'Half' | 'Full' | 'Auto'; value: 'half' | 'full' | 'auto' } | undefined
  enabled?: boolean | undefined
  id?: number | undefined
  l2vpn_termination?: NestedL2VPNTermination | undefined
  label?: string | undefined
  lag?: NestedInterface | undefined
  last_updated?: (string | null) | undefined
  link_peers?: (string | null)[] | undefined
  link_peers_type?: string | undefined
  mac_address?: (string | null) | undefined
  mark_connected?: boolean | undefined
  mgmt_only?: boolean | undefined
  mode?:
    | { label: 'Access' | 'Tagged' | 'Tagged (All)'; value: 'access' | 'tagged' | 'tagged-all' }
    | undefined
  module?: ComponentNestedModule | undefined
  mtu?: (number | null) | undefined
  name: string
  parent?: NestedInterface | undefined
  poe_mode?: { label: 'PD' | 'PSE'; value: 'pd' | 'pse' } | undefined
  poe_type?:
    | {
        label:
          | '802.3af (Type 1)'
          | '802.3at (Type 2)'
          | '802.3az (Type 2)'
          | '802.3bt (Type 3)'
          | '802.3bt (Type 4)'
          | 'Passive 24V (2-pair)'
          | 'Passive 24V (4-pair)'
          | 'Passive 48V (2-pair)'
          | 'Passive 48V (4-pair)'
        value:
          | 'type1-ieee802.3af'
          | 'type2-ieee802.3at'
          | 'type2-ieee802.3az'
          | 'type3-ieee802.3bt'
          | 'type4-ieee802.3bt'
          | 'passive-24v-2pair'
          | 'passive-24v-4pair'
          | 'passive-48v-2pair'
          | 'passive-48v-4pair'
      }
    | undefined
  rf_channel?:
    | {
        label:
          | '1 (2412 MHz)'
          | '2 (2417 MHz)'
          | '3 (2422 MHz)'
          | '4 (2427 MHz)'
          | '5 (2432 MHz)'
          | '6 (2437 MHz)'
          | '7 (2442 MHz)'
          | '8 (2447 MHz)'
          | '9 (2452 MHz)'
          | '10 (2457 MHz)'
          | '11 (2462 MHz)'
          | '12 (2467 MHz)'
          | '13 (2472 MHz)'
          | '32 (5160/20 MHz)'
          | '34 (5170/40 MHz)'
          | '36 (5180/20 MHz)'
          | '38 (5190/40 MHz)'
          | '40 (5200/20 MHz)'
          | '42 (5210/80 MHz)'
          | '44 (5220/20 MHz)'
          | '46 (5230/40 MHz)'
          | '48 (5240/20 MHz)'
          | '50 (5250/160 MHz)'
          | '52 (5260/20 MHz)'
          | '54 (5270/40 MHz)'
          | '56 (5280/20 MHz)'
          | '58 (5290/80 MHz)'
          | '60 (5300/20 MHz)'
          | '62 (5310/40 MHz)'
          | '64 (5320/20 MHz)'
          | '100 (5500/20 MHz)'
          | '102 (5510/40 MHz)'
          | '104 (5520/20 MHz)'
          | '106 (5530/80 MHz)'
          | '108 (5540/20 MHz)'
          | '110 (5550/40 MHz)'
          | '112 (5560/20 MHz)'
          | '114 (5570/160 MHz)'
          | '116 (5580/20 MHz)'
          | '118 (5590/40 MHz)'
          | '120 (5600/20 MHz)'
          | '122 (5610/80 MHz)'
          | '124 (5620/20 MHz)'
          | '126 (5630/40 MHz)'
          | '128 (5640/20 MHz)'
          | '132 (5660/20 MHz)'
          | '134 (5670/40 MHz)'
          | '136 (5680/20 MHz)'
          | '138 (5690/80 MHz)'
          | '140 (5700/20 MHz)'
          | '142 (5710/40 MHz)'
          | '144 (5720/20 MHz)'
          | '149 (5745/20 MHz)'
          | '151 (5755/40 MHz)'
          | '153 (5765/20 MHz)'
          | '155 (5775/80 MHz)'
          | '157 (5785/20 MHz)'
          | '159 (5795/40 MHz)'
          | '161 (5805/20 MHz)'
          | '163 (5815/160 MHz)'
          | '165 (5825/20 MHz)'
          | '167 (5835/40 MHz)'
          | '169 (5845/20 MHz)'
          | '171 (5855/80 MHz)'
          | '173 (5865/20 MHz)'
          | '175 (5875/40 MHz)'
          | '177 (5885/20 MHz)'
          | '1 (5955/20 MHz)'
          | '3 (5965/40 MHz)'
          | '5 (5975/20 MHz)'
          | '7 (5985/80 MHz)'
          | '9 (5995/20 MHz)'
          | '11 (6005/40 MHz)'
          | '13 (6015/20 MHz)'
          | '15 (6025/160 MHz)'
          | '17 (6035/20 MHz)'
          | '19 (6045/40 MHz)'
          | '21 (6055/20 MHz)'
          | '23 (6065/80 MHz)'
          | '25 (6075/20 MHz)'
          | '27 (6085/40 MHz)'
          | '29 (6095/20 MHz)'
          | '31 (6105/320 MHz)'
          | '33 (6115/20 MHz)'
          | '35 (6125/40 MHz)'
          | '37 (6135/20 MHz)'
          | '39 (6145/80 MHz)'
          | '41 (6155/20 MHz)'
          | '43 (6165/40 MHz)'
          | '45 (6175/20 MHz)'
          | '47 (6185/160 MHz)'
          | '49 (6195/20 MHz)'
          | '51 (6205/40 MHz)'
          | '53 (6215/20 MHz)'
          | '55 (6225/80 MHz)'
          | '57 (6235/20 MHz)'
          | '59 (6245/40 MHz)'
          | '61 (6255/20 MHz)'
          | '65 (6275/20 MHz)'
          | '67 (6285/40 MHz)'
          | '69 (6295/20 MHz)'
          | '71 (6305/80 MHz)'
          | '73 (6315/20 MHz)'
          | '75 (6325/40 MHz)'
          | '77 (6335/20 MHz)'
          | '79 (6345/160 MHz)'
          | '81 (6355/20 MHz)'
          | '83 (6365/40 MHz)'
          | '85 (6375/20 MHz)'
          | '87 (6385/80 MHz)'
          | '89 (6395/20 MHz)'
          | '91 (6405/40 MHz)'
          | '93 (6415/20 MHz)'
          | '95 (6425/320 MHz)'
          | '97 (6435/20 MHz)'
          | '99 (6445/40 MHz)'
          | '101 (6455/20 MHz)'
          | '103 (6465/80 MHz)'
          | '105 (6475/20 MHz)'
          | '107 (6485/40 MHz)'
          | '109 (6495/20 MHz)'
          | '111 (6505/160 MHz)'
          | '113 (6515/20 MHz)'
          | '115 (6525/40 MHz)'
          | '117 (6535/20 MHz)'
          | '119 (6545/80 MHz)'
          | '121 (6555/20 MHz)'
          | '123 (6565/40 MHz)'
          | '125 (6575/20 MHz)'
          | '129 (6595/20 MHz)'
          | '131 (6605/40 MHz)'
          | '133 (6615/20 MHz)'
          | '135 (6625/80 MHz)'
          | '137 (6635/20 MHz)'
          | '139 (6645/40 MHz)'
          | '141 (6655/20 MHz)'
          | '143 (6665/160 MHz)'
          | '145 (6675/20 MHz)'
          | '147 (6685/40 MHz)'
          | '149 (6695/20 MHz)'
          | '151 (6705/80 MHz)'
          | '153 (6715/20 MHz)'
          | '155 (6725/40 MHz)'
          | '157 (6735/20 MHz)'
          | '159 (6745/320 MHz)'
          | '161 (6755/20 MHz)'
          | '163 (6765/40 MHz)'
          | '165 (6775/20 MHz)'
          | '167 (6785/80 MHz)'
          | '169 (6795/20 MHz)'
          | '171 (6805/40 MHz)'
          | '173 (6815/20 MHz)'
          | '175 (6825/160 MHz)'
          | '177 (6835/20 MHz)'
          | '179 (6845/40 MHz)'
          | '181 (6855/20 MHz)'
          | '183 (6865/80 MHz)'
          | '185 (6875/20 MHz)'
          | '187 (6885/40 MHz)'
          | '189 (6895/20 MHz)'
          | '193 (6915/20 MHz)'
          | '195 (6925/40 MHz)'
          | '197 (6935/20 MHz)'
          | '199 (6945/80 MHz)'
          | '201 (6955/20 MHz)'
          | '203 (6965/40 MHz)'
          | '205 (6975/20 MHz)'
          | '207 (6985/160 MHz)'
          | '209 (6995/20 MHz)'
          | '211 (7005/40 MHz)'
          | '213 (7015/20 MHz)'
          | '215 (7025/80 MHz)'
          | '217 (7035/20 MHz)'
          | '219 (7045/40 MHz)'
          | '221 (7055/20 MHz)'
          | '225 (7075/20 MHz)'
          | '227 (7085/40 MHz)'
          | '229 (7095/20 MHz)'
          | '233 (7115/20 MHz)'
          | '1 (58.32/2.16 GHz)'
          | '2 (60.48/2.16 GHz)'
          | '3 (62.64/2.16 GHz)'
          | '4 (64.80/2.16 GHz)'
          | '5 (66.96/2.16 GHz)'
          | '6 (69.12/2.16 GHz)'
          | '9 (59.40/4.32 GHz)'
          | '10 (61.56/4.32 GHz)'
          | '11 (63.72/4.32 GHz)'
          | '12 (65.88/4.32 GHz)'
          | '13 (68.04/4.32 GHz)'
          | '17 (60.48/6.48 GHz)'
          | '18 (62.64/6.48 GHz)'
          | '19 (64.80/6.48 GHz)'
          | '20 (66.96/6.48 GHz)'
          | '25 (61.56/8.64 GHz)'
          | '26 (63.72/8.64 GHz)'
          | '27 (65.88/8.64 GHz)'
        value:
          | '2.4g-1-2412-22'
          | '2.4g-2-2417-22'
          | '2.4g-3-2422-22'
          | '2.4g-4-2427-22'
          | '2.4g-5-2432-22'
          | '2.4g-6-2437-22'
          | '2.4g-7-2442-22'
          | '2.4g-8-2447-22'
          | '2.4g-9-2452-22'
          | '2.4g-10-2457-22'
          | '2.4g-11-2462-22'
          | '2.4g-12-2467-22'
          | '2.4g-13-2472-22'
          | '5g-32-5160-20'
          | '5g-34-5170-40'
          | '5g-36-5180-20'
          | '5g-38-5190-40'
          | '5g-40-5200-20'
          | '5g-42-5210-80'
          | '5g-44-5220-20'
          | '5g-46-5230-40'
          | '5g-48-5240-20'
          | '5g-50-5250-160'
          | '5g-52-5260-20'
          | '5g-54-5270-40'
          | '5g-56-5280-20'
          | '5g-58-5290-80'
          | '5g-60-5300-20'
          | '5g-62-5310-40'
          | '5g-64-5320-20'
          | '5g-100-5500-20'
          | '5g-102-5510-40'
          | '5g-104-5520-20'
          | '5g-106-5530-80'
          | '5g-108-5540-20'
          | '5g-110-5550-40'
          | '5g-112-5560-20'
          | '5g-114-5570-160'
          | '5g-116-5580-20'
          | '5g-118-5590-40'
          | '5g-120-5600-20'
          | '5g-122-5610-80'
          | '5g-124-5620-20'
          | '5g-126-5630-40'
          | '5g-128-5640-20'
          | '5g-132-5660-20'
          | '5g-134-5670-40'
          | '5g-136-5680-20'
          | '5g-138-5690-80'
          | '5g-140-5700-20'
          | '5g-142-5710-40'
          | '5g-144-5720-20'
          | '5g-149-5745-20'
          | '5g-151-5755-40'
          | '5g-153-5765-20'
          | '5g-155-5775-80'
          | '5g-157-5785-20'
          | '5g-159-5795-40'
          | '5g-161-5805-20'
          | '5g-163-5815-160'
          | '5g-165-5825-20'
          | '5g-167-5835-40'
          | '5g-169-5845-20'
          | '5g-171-5855-80'
          | '5g-173-5865-20'
          | '5g-175-5875-40'
          | '5g-177-5885-20'
          | '6g-1-5955-20'
          | '6g-3-5965-40'
          | '6g-5-5975-20'
          | '6g-7-5985-80'
          | '6g-9-5995-20'
          | '6g-11-6005-40'
          | '6g-13-6015-20'
          | '6g-15-6025-160'
          | '6g-17-6035-20'
          | '6g-19-6045-40'
          | '6g-21-6055-20'
          | '6g-23-6065-80'
          | '6g-25-6075-20'
          | '6g-27-6085-40'
          | '6g-29-6095-20'
          | '6g-31-6105-320'
          | '6g-33-6115-20'
          | '6g-35-6125-40'
          | '6g-37-6135-20'
          | '6g-39-6145-80'
          | '6g-41-6155-20'
          | '6g-43-6165-40'
          | '6g-45-6175-20'
          | '6g-47-6185-160'
          | '6g-49-6195-20'
          | '6g-51-6205-40'
          | '6g-53-6215-20'
          | '6g-55-6225-80'
          | '6g-57-6235-20'
          | '6g-59-6245-40'
          | '6g-61-6255-20'
          | '6g-65-6275-20'
          | '6g-67-6285-40'
          | '6g-69-6295-20'
          | '6g-71-6305-80'
          | '6g-73-6315-20'
          | '6g-75-6325-40'
          | '6g-77-6335-20'
          | '6g-79-6345-160'
          | '6g-81-6355-20'
          | '6g-83-6365-40'
          | '6g-85-6375-20'
          | '6g-87-6385-80'
          | '6g-89-6395-20'
          | '6g-91-6405-40'
          | '6g-93-6415-20'
          | '6g-95-6425-320'
          | '6g-97-6435-20'
          | '6g-99-6445-40'
          | '6g-101-6455-20'
          | '6g-103-6465-80'
          | '6g-105-6475-20'
          | '6g-107-6485-40'
          | '6g-109-6495-20'
          | '6g-111-6505-160'
          | '6g-113-6515-20'
          | '6g-115-6525-40'
          | '6g-117-6535-20'
          | '6g-119-6545-80'
          | '6g-121-6555-20'
          | '6g-123-6565-40'
          | '6g-125-6575-20'
          | '6g-129-6595-20'
          | '6g-131-6605-40'
          | '6g-133-6615-20'
          | '6g-135-6625-80'
          | '6g-137-6635-20'
          | '6g-139-6645-40'
          | '6g-141-6655-20'
          | '6g-143-6665-160'
          | '6g-145-6675-20'
          | '6g-147-6685-40'
          | '6g-149-6695-20'
          | '6g-151-6705-80'
          | '6g-153-6715-20'
          | '6g-155-6725-40'
          | '6g-157-6735-20'
          | '6g-159-6745-320'
          | '6g-161-6755-20'
          | '6g-163-6765-40'
          | '6g-165-6775-20'
          | '6g-167-6785-80'
          | '6g-169-6795-20'
          | '6g-171-6805-40'
          | '6g-173-6815-20'
          | '6g-175-6825-160'
          | '6g-177-6835-20'
          | '6g-179-6845-40'
          | '6g-181-6855-20'
          | '6g-183-6865-80'
          | '6g-185-6875-20'
          | '6g-187-6885-40'
          | '6g-189-6895-20'
          | '6g-193-6915-20'
          | '6g-195-6925-40'
          | '6g-197-6935-20'
          | '6g-199-6945-80'
          | '6g-201-6955-20'
          | '6g-203-6965-40'
          | '6g-205-6975-20'
          | '6g-207-6985-160'
          | '6g-209-6995-20'
          | '6g-211-7005-40'
          | '6g-213-7015-20'
          | '6g-215-7025-80'
          | '6g-217-7035-20'
          | '6g-219-7045-40'
          | '6g-221-7055-20'
          | '6g-225-7075-20'
          | '6g-227-7085-40'
          | '6g-229-7095-20'
          | '6g-233-7115-20'
          | '60g-1-58320-2160'
          | '60g-2-60480-2160'
          | '60g-3-62640-2160'
          | '60g-4-64800-2160'
          | '60g-5-66960-2160'
          | '60g-6-69120-2160'
          | '60g-9-59400-4320'
          | '60g-10-61560-4320'
          | '60g-11-63720-4320'
          | '60g-12-65880-4320'
          | '60g-13-68040-4320'
          | '60g-17-60480-6480'
          | '60g-18-62640-6480'
          | '60g-19-64800-6480'
          | '60g-20-66960-6480'
          | '60g-25-61560-6480'
          | '60g-26-63720-6480'
          | '60g-27-65880-6480'
      }
    | undefined
  rf_channel_frequency?: (number | null) | undefined
  rf_channel_width?: (number | null) | undefined
  rf_role?: { label: 'Access point' | 'Station'; value: 'ap' | 'station' } | undefined
  speed?: (number | null) | undefined
  tagged_vlans?: NestedVLAN[] | undefined
  tags?: NestedTag[] | undefined
  tx_power?: (number | null) | undefined
  type: {
    label:
      | 'Virtual'
      | 'Bridge'
      | 'Link Aggregation Group (LAG)'
      | '100BASE-FX (10/100ME FIBER)'
      | '100BASE-LFX (10/100ME FIBER)'
      | '100BASE-TX (10/100ME)'
      | '100BASE-T1 (10/100ME Single Pair)'
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
      | 'SFP56 (50GE)'
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
      | 'QSFP-DD (800GE)'
      | 'OSFP (800GE)'
      | '1000BASE-KX (1GE)'
      | '10GBASE-KR (10GE)'
      | '10GBASE-KX4 (10GE)'
      | '25GBASE-KR (25GE)'
      | '40GBASE-KR4 (40GE)'
      | '50GBASE-KR (50GE)'
      | '100GBASE-KP4 (100GE)'
      | '100GBASE-KR2 (100GE)'
      | '100GBASE-KR4 (100GE)'
      | 'IEEE 802.11a'
      | 'IEEE 802.11b/g'
      | 'IEEE 802.11n'
      | 'IEEE 802.11ac'
      | 'IEEE 802.11ad'
      | 'IEEE 802.11ax'
      | 'IEEE 802.11ay'
      | 'IEEE 802.15.1 (Bluetooth)'
      | 'Other (Wireless)'
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
      | 'QSFP+ (64GFC)'
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
      | 'xDSL'
      | 'DOCSIS'
      | 'GPON (2.5 Gbps / 1.25 Gps)'
      | 'XG-PON (10 Gbps / 2.5 Gbps)'
      | 'XGS-PON (10 Gbps)'
      | 'NG-PON2 (TWDM-PON) (4x10 Gbps)'
      | 'EPON (1 Gbps)'
      | '10G-EPON (10 Gbps)'
      | 'Cisco StackWise'
      | 'Cisco StackWise Plus'
      | 'Cisco FlexStack'
      | 'Cisco FlexStack Plus'
      | 'Cisco StackWise-80'
      | 'Cisco StackWise-160'
      | 'Cisco StackWise-320'
      | 'Cisco StackWise-480'
      | 'Cisco StackWise-1T'
      | 'Juniper VCP'
      | 'Extreme SummitStack'
      | 'Extreme SummitStack-128'
      | 'Extreme SummitStack-256'
      | 'Extreme SummitStack-512'
      | 'Other'
    value:
      | 'virtual'
      | 'bridge'
      | 'lag'
      | '100base-fx'
      | '100base-lfx'
      | '100base-tx'
      | '100base-t1'
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
      | '50gbase-x-sfp56'
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
      | '800gbase-x-qsfpdd'
      | '800gbase-x-osfp'
      | '1000base-kx'
      | '10gbase-kr'
      | '10gbase-kx4'
      | '25gbase-kr'
      | '40gbase-kr4'
      | '50gbase-kr'
      | '100gbase-kp4'
      | '100gbase-kr2'
      | '100gbase-kr4'
      | 'ieee802.11a'
      | 'ieee802.11g'
      | 'ieee802.11n'
      | 'ieee802.11ac'
      | 'ieee802.11ad'
      | 'ieee802.11ax'
      | 'ieee802.11ay'
      | 'ieee802.15.1'
      | 'other-wireless'
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
      | '64gfc-qsfpp'
      | '128gfc-qsfp28'
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
      | 'xdsl'
      | 'docsis'
      | 'gpon'
      | 'xg-pon'
      | 'xgs-pon'
      | 'ng-pon2'
      | 'epon'
      | '10g-epon'
      | 'cisco-stackwise'
      | 'cisco-stackwise-plus'
      | 'cisco-flexstack'
      | 'cisco-flexstack-plus'
      | 'cisco-stackwise-80'
      | 'cisco-stackwise-160'
      | 'cisco-stackwise-320'
      | 'cisco-stackwise-480'
      | 'cisco-stackwise-1t'
      | 'juniper-vcp'
      | 'extreme-summitstack'
      | 'extreme-summitstack-128'
      | 'extreme-summitstack-256'
      | 'extreme-summitstack-512'
      | 'other'
  }
  untagged_vlan?: NestedVLAN | undefined
  url?: string | undefined
  vdcs?: NestedVirtualDeviceContext[] | undefined
  vrf?: NestedVRF | undefined
  wireless_lans?: NestedWirelessLAN[] | undefined
  wireless_link?: NestedWirelessLink | undefined
  wwn?: (string | null) | undefined
}
type WritableInterface = {
  _occupied?: boolean | undefined
  bridge?: (number | null) | undefined
  cable?: NestedCable | undefined
  cable_end?: string | undefined
  connected_endpoints?: (string | null)[] | undefined
  connected_endpoints_reachable?: boolean | undefined
  connected_endpoints_type?: string | undefined
  count_fhrp_groups?: number | undefined
  count_ipaddresses?: number | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  device: number
  display?: string | undefined
  duplex?: 'half' | 'full' | 'auto' | undefined
  enabled?: boolean | undefined
  id?: number | undefined
  l2vpn_termination?: string | undefined
  label?: string | undefined
  lag?: (number | null) | undefined
  last_updated?: (string | null) | undefined
  link_peers?: (string | null)[] | undefined
  link_peers_type?: string | undefined
  mac_address?: (string | null) | undefined
  mark_connected?: boolean | undefined
  mgmt_only?: boolean | undefined
  mode?: 'access' | 'tagged' | 'tagged-all' | undefined
  module?: (number | null) | undefined
  mtu?: (number | null) | undefined
  name: string
  parent?: (number | null) | undefined
  poe_mode?: 'pd' | 'pse' | undefined
  poe_type?:
    | 'type1-ieee802.3af'
    | 'type2-ieee802.3at'
    | 'type2-ieee802.3az'
    | 'type3-ieee802.3bt'
    | 'type4-ieee802.3bt'
    | 'passive-24v-2pair'
    | 'passive-24v-4pair'
    | 'passive-48v-2pair'
    | 'passive-48v-4pair'
    | undefined
  rf_channel?:
    | '2.4g-1-2412-22'
    | '2.4g-2-2417-22'
    | '2.4g-3-2422-22'
    | '2.4g-4-2427-22'
    | '2.4g-5-2432-22'
    | '2.4g-6-2437-22'
    | '2.4g-7-2442-22'
    | '2.4g-8-2447-22'
    | '2.4g-9-2452-22'
    | '2.4g-10-2457-22'
    | '2.4g-11-2462-22'
    | '2.4g-12-2467-22'
    | '2.4g-13-2472-22'
    | '5g-32-5160-20'
    | '5g-34-5170-40'
    | '5g-36-5180-20'
    | '5g-38-5190-40'
    | '5g-40-5200-20'
    | '5g-42-5210-80'
    | '5g-44-5220-20'
    | '5g-46-5230-40'
    | '5g-48-5240-20'
    | '5g-50-5250-160'
    | '5g-52-5260-20'
    | '5g-54-5270-40'
    | '5g-56-5280-20'
    | '5g-58-5290-80'
    | '5g-60-5300-20'
    | '5g-62-5310-40'
    | '5g-64-5320-20'
    | '5g-100-5500-20'
    | '5g-102-5510-40'
    | '5g-104-5520-20'
    | '5g-106-5530-80'
    | '5g-108-5540-20'
    | '5g-110-5550-40'
    | '5g-112-5560-20'
    | '5g-114-5570-160'
    | '5g-116-5580-20'
    | '5g-118-5590-40'
    | '5g-120-5600-20'
    | '5g-122-5610-80'
    | '5g-124-5620-20'
    | '5g-126-5630-40'
    | '5g-128-5640-20'
    | '5g-132-5660-20'
    | '5g-134-5670-40'
    | '5g-136-5680-20'
    | '5g-138-5690-80'
    | '5g-140-5700-20'
    | '5g-142-5710-40'
    | '5g-144-5720-20'
    | '5g-149-5745-20'
    | '5g-151-5755-40'
    | '5g-153-5765-20'
    | '5g-155-5775-80'
    | '5g-157-5785-20'
    | '5g-159-5795-40'
    | '5g-161-5805-20'
    | '5g-163-5815-160'
    | '5g-165-5825-20'
    | '5g-167-5835-40'
    | '5g-169-5845-20'
    | '5g-171-5855-80'
    | '5g-173-5865-20'
    | '5g-175-5875-40'
    | '5g-177-5885-20'
    | '6g-1-5955-20'
    | '6g-3-5965-40'
    | '6g-5-5975-20'
    | '6g-7-5985-80'
    | '6g-9-5995-20'
    | '6g-11-6005-40'
    | '6g-13-6015-20'
    | '6g-15-6025-160'
    | '6g-17-6035-20'
    | '6g-19-6045-40'
    | '6g-21-6055-20'
    | '6g-23-6065-80'
    | '6g-25-6075-20'
    | '6g-27-6085-40'
    | '6g-29-6095-20'
    | '6g-31-6105-320'
    | '6g-33-6115-20'
    | '6g-35-6125-40'
    | '6g-37-6135-20'
    | '6g-39-6145-80'
    | '6g-41-6155-20'
    | '6g-43-6165-40'
    | '6g-45-6175-20'
    | '6g-47-6185-160'
    | '6g-49-6195-20'
    | '6g-51-6205-40'
    | '6g-53-6215-20'
    | '6g-55-6225-80'
    | '6g-57-6235-20'
    | '6g-59-6245-40'
    | '6g-61-6255-20'
    | '6g-65-6275-20'
    | '6g-67-6285-40'
    | '6g-69-6295-20'
    | '6g-71-6305-80'
    | '6g-73-6315-20'
    | '6g-75-6325-40'
    | '6g-77-6335-20'
    | '6g-79-6345-160'
    | '6g-81-6355-20'
    | '6g-83-6365-40'
    | '6g-85-6375-20'
    | '6g-87-6385-80'
    | '6g-89-6395-20'
    | '6g-91-6405-40'
    | '6g-93-6415-20'
    | '6g-95-6425-320'
    | '6g-97-6435-20'
    | '6g-99-6445-40'
    | '6g-101-6455-20'
    | '6g-103-6465-80'
    | '6g-105-6475-20'
    | '6g-107-6485-40'
    | '6g-109-6495-20'
    | '6g-111-6505-160'
    | '6g-113-6515-20'
    | '6g-115-6525-40'
    | '6g-117-6535-20'
    | '6g-119-6545-80'
    | '6g-121-6555-20'
    | '6g-123-6565-40'
    | '6g-125-6575-20'
    | '6g-129-6595-20'
    | '6g-131-6605-40'
    | '6g-133-6615-20'
    | '6g-135-6625-80'
    | '6g-137-6635-20'
    | '6g-139-6645-40'
    | '6g-141-6655-20'
    | '6g-143-6665-160'
    | '6g-145-6675-20'
    | '6g-147-6685-40'
    | '6g-149-6695-20'
    | '6g-151-6705-80'
    | '6g-153-6715-20'
    | '6g-155-6725-40'
    | '6g-157-6735-20'
    | '6g-159-6745-320'
    | '6g-161-6755-20'
    | '6g-163-6765-40'
    | '6g-165-6775-20'
    | '6g-167-6785-80'
    | '6g-169-6795-20'
    | '6g-171-6805-40'
    | '6g-173-6815-20'
    | '6g-175-6825-160'
    | '6g-177-6835-20'
    | '6g-179-6845-40'
    | '6g-181-6855-20'
    | '6g-183-6865-80'
    | '6g-185-6875-20'
    | '6g-187-6885-40'
    | '6g-189-6895-20'
    | '6g-193-6915-20'
    | '6g-195-6925-40'
    | '6g-197-6935-20'
    | '6g-199-6945-80'
    | '6g-201-6955-20'
    | '6g-203-6965-40'
    | '6g-205-6975-20'
    | '6g-207-6985-160'
    | '6g-209-6995-20'
    | '6g-211-7005-40'
    | '6g-213-7015-20'
    | '6g-215-7025-80'
    | '6g-217-7035-20'
    | '6g-219-7045-40'
    | '6g-221-7055-20'
    | '6g-225-7075-20'
    | '6g-227-7085-40'
    | '6g-229-7095-20'
    | '6g-233-7115-20'
    | '60g-1-58320-2160'
    | '60g-2-60480-2160'
    | '60g-3-62640-2160'
    | '60g-4-64800-2160'
    | '60g-5-66960-2160'
    | '60g-6-69120-2160'
    | '60g-9-59400-4320'
    | '60g-10-61560-4320'
    | '60g-11-63720-4320'
    | '60g-12-65880-4320'
    | '60g-13-68040-4320'
    | '60g-17-60480-6480'
    | '60g-18-62640-6480'
    | '60g-19-64800-6480'
    | '60g-20-66960-6480'
    | '60g-25-61560-6480'
    | '60g-26-63720-6480'
    | '60g-27-65880-6480'
    | undefined
  rf_channel_frequency?: (number | null) | undefined
  rf_channel_width?: (number | null) | undefined
  rf_role?: 'ap' | 'station' | undefined
  speed?: (number | null) | undefined
  tagged_vlans?: number[] | undefined
  tags?: NestedTag[] | undefined
  tx_power?: (number | null) | undefined
  type:
    | 'virtual'
    | 'bridge'
    | 'lag'
    | '100base-fx'
    | '100base-lfx'
    | '100base-tx'
    | '100base-t1'
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
    | '50gbase-x-sfp56'
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
    | '800gbase-x-qsfpdd'
    | '800gbase-x-osfp'
    | '1000base-kx'
    | '10gbase-kr'
    | '10gbase-kx4'
    | '25gbase-kr'
    | '40gbase-kr4'
    | '50gbase-kr'
    | '100gbase-kp4'
    | '100gbase-kr2'
    | '100gbase-kr4'
    | 'ieee802.11a'
    | 'ieee802.11g'
    | 'ieee802.11n'
    | 'ieee802.11ac'
    | 'ieee802.11ad'
    | 'ieee802.11ax'
    | 'ieee802.11ay'
    | 'ieee802.15.1'
    | 'other-wireless'
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
    | '64gfc-qsfpp'
    | '128gfc-qsfp28'
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
    | 'xdsl'
    | 'docsis'
    | 'gpon'
    | 'xg-pon'
    | 'xgs-pon'
    | 'ng-pon2'
    | 'epon'
    | '10g-epon'
    | 'cisco-stackwise'
    | 'cisco-stackwise-plus'
    | 'cisco-flexstack'
    | 'cisco-flexstack-plus'
    | 'cisco-stackwise-80'
    | 'cisco-stackwise-160'
    | 'cisco-stackwise-320'
    | 'cisco-stackwise-480'
    | 'cisco-stackwise-1t'
    | 'juniper-vcp'
    | 'extreme-summitstack'
    | 'extreme-summitstack-128'
    | 'extreme-summitstack-256'
    | 'extreme-summitstack-512'
    | 'other'
  untagged_vlan?: (number | null) | undefined
  url?: string | undefined
  vdcs: number[]
  vrf?: (number | null) | undefined
  wireless_lans?: number[] | undefined
  wireless_link?: (number | null) | undefined
  wwn?: (string | null) | undefined
}
type InventoryItemRole = {
  color?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display?: string | undefined
  id?: number | undefined
  inventoryitem_count?: number | undefined
  last_updated?: (string | null) | undefined
  name: string
  slug: string
  tags?: NestedTag[] | undefined
  url?: string | undefined
}
type NestedInventoryItemRole = {
  display?: string | undefined
  id?: number | undefined
  inventoryitem_count?: number | undefined
  name: string
  slug: string
  url?: string | undefined
} | null
type InventoryItemTemplate = {
  _depth?: number | undefined
  component?: { [x: string]: unknown } | undefined
  component_id?: (number | null) | undefined
  component_type?: (string | null) | undefined
  created?: (string | null) | undefined
  description?: string | undefined
  device_type: NestedDeviceType
  display?: string | undefined
  id?: number | undefined
  label?: string | undefined
  last_updated?: (string | null) | undefined
  manufacturer?: NestedManufacturer | undefined
  name: string
  parent?: (number | null) | undefined
  part_id?: string | undefined
  role?: NestedInventoryItemRole | undefined
  url?: string | undefined
}
type WritableInventoryItemTemplate = {
  _depth?: number | undefined
  component?: { [x: string]: unknown } | undefined
  component_id?: (number | null) | undefined
  component_type?: (string | null) | undefined
  created?: (string | null) | undefined
  description?: string | undefined
  device_type: number
  display?: string | undefined
  id?: number | undefined
  label?: string | undefined
  last_updated?: (string | null) | undefined
  manufacturer?: (number | null) | undefined
  name: string
  parent?: (number | null) | undefined
  part_id?: string | undefined
  role?: (number | null) | undefined
  url?: string | undefined
}
type InventoryItem = {
  _depth?: number | undefined
  asset_tag?: (string | null) | undefined
  component?: { [x: string]: unknown } | undefined
  component_id?: (number | null) | undefined
  component_type?: (string | null) | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  device: NestedDevice
  discovered?: boolean | undefined
  display?: string | undefined
  id?: number | undefined
  label?: string | undefined
  last_updated?: (string | null) | undefined
  manufacturer?: NestedManufacturer | undefined
  name: string
  parent?: (number | null) | undefined
  part_id?: string | undefined
  role?: NestedInventoryItemRole | undefined
  serial?: string | undefined
  tags?: NestedTag[] | undefined
  url?: string | undefined
}
type WritableInventoryItem = {
  _depth?: number | undefined
  asset_tag?: (string | null) | undefined
  component?: { [x: string]: unknown } | undefined
  component_id?: (number | null) | undefined
  component_type?: (string | null) | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  device: number
  discovered?: boolean | undefined
  display?: string | undefined
  id?: number | undefined
  label?: string | undefined
  last_updated?: (string | null) | undefined
  manufacturer?: (number | null) | undefined
  name: string
  parent?: (number | null) | undefined
  part_id?: string | undefined
  role?: (number | null) | undefined
  serial?: string | undefined
  tags?: NestedTag[] | undefined
  url?: string | undefined
}
type Location = {
  _depth?: number | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  device_count?: number | undefined
  display?: string | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  name: string
  parent?: NestedLocation | undefined
  rack_count?: number | undefined
  site: NestedSite
  slug: string
  status?:
    | {
        label: 'Planned' | 'Staging' | 'Active' | 'Decommissioning' | 'Retired'
        value: 'planned' | 'staging' | 'active' | 'decommissioning' | 'retired'
      }
    | undefined
  tags?: NestedTag[] | undefined
  tenant?: NestedTenant | undefined
  url?: string | undefined
}
type WritableLocation = {
  _depth?: number | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  device_count?: number | undefined
  display?: string | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  name: string
  parent?: (number | null) | undefined
  rack_count?: number | undefined
  site: number
  slug: string
  status?: 'planned' | 'staging' | 'active' | 'decommissioning' | 'retired' | undefined
  tags?: NestedTag[] | undefined
  tenant?: (number | null) | undefined
  url?: string | undefined
}
type Manufacturer = {
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  devicetype_count?: number | undefined
  display?: string | undefined
  id?: number | undefined
  inventoryitem_count?: number | undefined
  last_updated?: (string | null) | undefined
  name: string
  platform_count?: number | undefined
  slug: string
  tags?: NestedTag[] | undefined
  url?: string | undefined
}
type ModuleBayTemplate = {
  created?: (string | null) | undefined
  description?: string | undefined
  device_type: NestedDeviceType
  display?: string | undefined
  id?: number | undefined
  label?: string | undefined
  last_updated?: (string | null) | undefined
  name: string
  position?: string | undefined
  url?: string | undefined
}
type WritableModuleBayTemplate = {
  created?: (string | null) | undefined
  description?: string | undefined
  device_type: number
  display?: string | undefined
  id?: number | undefined
  label?: string | undefined
  last_updated?: (string | null) | undefined
  name: string
  position?: string | undefined
  url?: string | undefined
}
type ModuleBayNestedModule = {
  display?: string | undefined
  id?: number | undefined
  serial?: string | undefined
  url?: string | undefined
} | null
type ModuleBay = {
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  device: NestedDevice
  display?: string | undefined
  id?: number | undefined
  installed_module?: ModuleBayNestedModule | undefined
  label?: string | undefined
  last_updated?: (string | null) | undefined
  name: string
  position?: string | undefined
  tags?: NestedTag[] | undefined
  url?: string | undefined
}
type WritableModuleBay = {
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  device: number
  display?: string | undefined
  id?: number | undefined
  installed_module: number
  label?: string | undefined
  last_updated?: (string | null) | undefined
  name: string
  position?: string | undefined
  tags?: NestedTag[] | undefined
  url?: string | undefined
}
type ModuleType = {
  comments?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display?: string | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  manufacturer: NestedManufacturer
  model: string
  part_number?: string | undefined
  tags?: NestedTag[] | undefined
  url?: string | undefined
  weight?: (number | null) | undefined
  weight_unit?:
    | { label: 'Kilograms' | 'Grams' | 'Pounds' | 'Ounces'; value: 'kg' | 'g' | 'lb' | 'oz' }
    | undefined
}
type WritableModuleType = {
  comments?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display?: string | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  manufacturer: number
  model: string
  part_number?: string | undefined
  tags?: NestedTag[] | undefined
  url?: string | undefined
  weight?: (number | null) | undefined
  weight_unit?: 'kg' | 'g' | 'lb' | 'oz' | undefined
}
type NestedModule = {
  device?: NestedDevice | undefined
  display?: string | undefined
  id?: number | undefined
  module_bay?: ModuleNestedModuleBay | undefined
  module_type?: NestedModuleType | undefined
  url?: string | undefined
}
type NestedModuleBay = {
  display?: string | undefined
  id?: number | undefined
  module?: NestedModule | undefined
  name: string
  url?: string | undefined
}
type Module = {
  asset_tag?: (string | null) | undefined
  comments?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  device: NestedDevice
  display?: string | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  module_bay: NestedModuleBay
  module_type: NestedModuleType
  serial?: string | undefined
  status?:
    | {
        label: 'Offline' | 'Active' | 'Planned' | 'Staged' | 'Failed' | 'Decommissioning'
        value: 'offline' | 'active' | 'planned' | 'staged' | 'failed' | 'decommissioning'
      }
    | undefined
  tags?: NestedTag[] | undefined
  url?: string | undefined
}
type WritableModule = {
  asset_tag?: (string | null) | undefined
  comments?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  device: number
  display?: string | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  module_bay: number
  module_type: number
  serial?: string | undefined
  status?: 'offline' | 'active' | 'planned' | 'staged' | 'failed' | 'decommissioning' | undefined
  tags?: NestedTag[] | undefined
  url?: string | undefined
}
type Platform = {
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  device_count?: number | undefined
  display?: string | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  manufacturer?: NestedManufacturer | undefined
  name: string
  napalm_args?: ({ [x: string]: unknown } | null) | undefined
  napalm_driver?: string | undefined
  slug: string
  tags?: NestedTag[] | undefined
  url?: string | undefined
  virtualmachine_count?: number | undefined
}
type WritablePlatform = {
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  device_count?: number | undefined
  display?: string | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  manufacturer?: (number | null) | undefined
  name: string
  napalm_args?: ({ [x: string]: unknown } | null) | undefined
  napalm_driver?: string | undefined
  slug: string
  tags?: NestedTag[] | undefined
  url?: string | undefined
  virtualmachine_count?: number | undefined
}
type NestedPowerPanel = {
  display?: string | undefined
  id?: number | undefined
  name: string
  powerfeed_count?: number | undefined
  url?: string | undefined
}
type PowerFeed = {
  _occupied?: boolean | undefined
  amperage?: number | undefined
  cable?: NestedCable | undefined
  cable_end?: string | undefined
  comments?: string | undefined
  connected_endpoints?: (string | null)[] | undefined
  connected_endpoints_reachable?: boolean | undefined
  connected_endpoints_type?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display?: string | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  link_peers?: (string | null)[] | undefined
  link_peers_type?: string | undefined
  mark_connected?: boolean | undefined
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
  tags?: NestedTag[] | undefined
  type?: { label: 'Primary' | 'Redundant'; value: 'primary' | 'redundant' } | undefined
  url?: string | undefined
  voltage?: number | undefined
}
type WritablePowerFeed = {
  _occupied?: boolean | undefined
  amperage?: number | undefined
  cable?: NestedCable | undefined
  cable_end?: string | undefined
  comments?: string | undefined
  connected_endpoints?: (string | null)[] | undefined
  connected_endpoints_reachable?: boolean | undefined
  connected_endpoints_type?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display?: string | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  link_peers?: (string | null)[] | undefined
  link_peers_type?: string | undefined
  mark_connected?: boolean | undefined
  max_utilization?: number | undefined
  name: string
  phase?: 'single-phase' | 'three-phase' | undefined
  power_panel: number
  rack?: (number | null) | undefined
  status?: 'offline' | 'active' | 'planned' | 'failed' | undefined
  supply?: 'ac' | 'dc' | undefined
  tags?: NestedTag[] | undefined
  type?: 'primary' | 'redundant' | undefined
  url?: string | undefined
  voltage?: number | undefined
}
type NestedPowerPortTemplate = {
  display?: string | undefined
  id?: number | undefined
  name: string
  url?: string | undefined
} | null
type PowerOutletTemplate = {
  created?: (string | null) | undefined
  description?: string | undefined
  device_type?: NestedDeviceType | undefined
  display?: string | undefined
  feed_leg?: { label: 'A' | 'B' | 'C'; value: 'A' | 'B' | 'C' } | undefined
  id?: number | undefined
  label?: string | undefined
  last_updated?: (string | null) | undefined
  module_type?: NestedModuleType | undefined
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
          | 'C21'
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
          | 'NEMA 15-15R'
          | 'NEMA 15-20R'
          | 'NEMA 15-30R'
          | 'NEMA 15-50R'
          | 'NEMA 15-60R'
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
          | 'NEMA L15-20R'
          | 'NEMA L15-30R'
          | 'NEMA L15-50R'
          | 'NEMA L15-60R'
          | 'NEMA L21-20R'
          | 'NEMA L21-30R'
          | 'NEMA L22-30R'
          | 'CS6360C'
          | 'CS6364C'
          | 'CS8164C'
          | 'CS8264C'
          | 'CS8364C'
          | 'CS8464C'
          | 'ITA Type E (CEE 7/5)'
          | 'ITA Type F (CEE 7/3)'
          | 'ITA Type G (BS 1363)'
          | 'ITA Type H'
          | 'ITA Type I'
          | 'ITA Type J'
          | 'ITA Type K'
          | 'ITA Type L (CEI 23-50)'
          | 'ITA Type M (BS 546)'
          | 'ITA Type N'
          | 'ITA Type O'
          | 'ITA Multistandard'
          | 'USB Type A'
          | 'USB Micro B'
          | 'USB Type C'
          | 'DC Terminal'
          | 'HDOT Cx'
          | 'Saf-D-Grid'
          | 'Neutrik powerCON (20A)'
          | 'Neutrik powerCON (32A)'
          | 'Neutrik powerCON TRUE1'
          | 'Neutrik powerCON TRUE1 TOP'
          | 'Ubiquiti SmartPower'
          | 'Hardwired'
          | 'Other'
        value:
          | 'iec-60320-c5'
          | 'iec-60320-c7'
          | 'iec-60320-c13'
          | 'iec-60320-c15'
          | 'iec-60320-c19'
          | 'iec-60320-c21'
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
          | 'nema-15-15r'
          | 'nema-15-20r'
          | 'nema-15-30r'
          | 'nema-15-50r'
          | 'nema-15-60r'
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
          | 'nema-l15-20r'
          | 'nema-l15-30r'
          | 'nema-l15-50r'
          | 'nema-l15-60r'
          | 'nema-l21-20r'
          | 'nema-l21-30r'
          | 'nema-l22-30r'
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
          | 'ita-multistandard'
          | 'usb-a'
          | 'usb-micro-b'
          | 'usb-c'
          | 'dc-terminal'
          | 'hdot-cx'
          | 'saf-d-grid'
          | 'neutrik-powercon-20a'
          | 'neutrik-powercon-32a'
          | 'neutrik-powercon-true1'
          | 'neutrik-powercon-true1-top'
          | 'ubiquiti-smartpower'
          | 'hardwired'
          | 'other'
      }
    | undefined
  url?: string | undefined
}
type WritablePowerOutletTemplate = {
  created?: (string | null) | undefined
  description?: string | undefined
  device_type?: (number | null) | undefined
  display?: string | undefined
  feed_leg?: 'A' | 'B' | 'C' | undefined
  id?: number | undefined
  label?: string | undefined
  last_updated?: (string | null) | undefined
  module_type?: (number | null) | undefined
  name: string
  power_port?: (number | null) | undefined
  type?:
    | 'iec-60320-c5'
    | 'iec-60320-c7'
    | 'iec-60320-c13'
    | 'iec-60320-c15'
    | 'iec-60320-c19'
    | 'iec-60320-c21'
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
    | 'nema-15-15r'
    | 'nema-15-20r'
    | 'nema-15-30r'
    | 'nema-15-50r'
    | 'nema-15-60r'
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
    | 'nema-l15-20r'
    | 'nema-l15-30r'
    | 'nema-l15-50r'
    | 'nema-l15-60r'
    | 'nema-l21-20r'
    | 'nema-l21-30r'
    | 'nema-l22-30r'
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
    | 'ita-multistandard'
    | 'usb-a'
    | 'usb-micro-b'
    | 'usb-c'
    | 'dc-terminal'
    | 'hdot-cx'
    | 'saf-d-grid'
    | 'neutrik-powercon-20a'
    | 'neutrik-powercon-32a'
    | 'neutrik-powercon-true1'
    | 'neutrik-powercon-true1-top'
    | 'ubiquiti-smartpower'
    | 'hardwired'
    | 'other'
    | undefined
  url?: string | undefined
}
type NestedPowerPort = {
  _occupied?: boolean | undefined
  cable?: (number | null) | undefined
  device?: NestedDevice | undefined
  display?: string | undefined
  id?: number | undefined
  name: string
  url?: string | undefined
} | null
type PowerOutlet = {
  _occupied?: boolean | undefined
  cable?: NestedCable | undefined
  cable_end?: string | undefined
  connected_endpoints?: (string | null)[] | undefined
  connected_endpoints_reachable?: boolean | undefined
  connected_endpoints_type?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  device: NestedDevice
  display?: string | undefined
  feed_leg?: { label: 'A' | 'B' | 'C'; value: 'A' | 'B' | 'C' } | undefined
  id?: number | undefined
  label?: string | undefined
  last_updated?: (string | null) | undefined
  link_peers?: (string | null)[] | undefined
  link_peers_type?: string | undefined
  mark_connected?: boolean | undefined
  module?: ComponentNestedModule | undefined
  name: string
  power_port?: NestedPowerPort | undefined
  tags?: NestedTag[] | undefined
  type?:
    | {
        label:
          | 'C5'
          | 'C7'
          | 'C13'
          | 'C15'
          | 'C19'
          | 'C21'
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
          | 'NEMA 15-15R'
          | 'NEMA 15-20R'
          | 'NEMA 15-30R'
          | 'NEMA 15-50R'
          | 'NEMA 15-60R'
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
          | 'NEMA L15-20R'
          | 'NEMA L15-30R'
          | 'NEMA L15-50R'
          | 'NEMA L15-60R'
          | 'NEMA L21-20R'
          | 'NEMA L21-30R'
          | 'NEMA L22-30R'
          | 'CS6360C'
          | 'CS6364C'
          | 'CS8164C'
          | 'CS8264C'
          | 'CS8364C'
          | 'CS8464C'
          | 'ITA Type E (CEE 7/5)'
          | 'ITA Type F (CEE 7/3)'
          | 'ITA Type G (BS 1363)'
          | 'ITA Type H'
          | 'ITA Type I'
          | 'ITA Type J'
          | 'ITA Type K'
          | 'ITA Type L (CEI 23-50)'
          | 'ITA Type M (BS 546)'
          | 'ITA Type N'
          | 'ITA Type O'
          | 'ITA Multistandard'
          | 'USB Type A'
          | 'USB Micro B'
          | 'USB Type C'
          | 'DC Terminal'
          | 'HDOT Cx'
          | 'Saf-D-Grid'
          | 'Neutrik powerCON (20A)'
          | 'Neutrik powerCON (32A)'
          | 'Neutrik powerCON TRUE1'
          | 'Neutrik powerCON TRUE1 TOP'
          | 'Ubiquiti SmartPower'
          | 'Hardwired'
          | 'Other'
        value:
          | 'iec-60320-c5'
          | 'iec-60320-c7'
          | 'iec-60320-c13'
          | 'iec-60320-c15'
          | 'iec-60320-c19'
          | 'iec-60320-c21'
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
          | 'nema-15-15r'
          | 'nema-15-20r'
          | 'nema-15-30r'
          | 'nema-15-50r'
          | 'nema-15-60r'
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
          | 'nema-l15-20r'
          | 'nema-l15-30r'
          | 'nema-l15-50r'
          | 'nema-l15-60r'
          | 'nema-l21-20r'
          | 'nema-l21-30r'
          | 'nema-l22-30r'
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
          | 'ita-multistandard'
          | 'usb-a'
          | 'usb-micro-b'
          | 'usb-c'
          | 'dc-terminal'
          | 'hdot-cx'
          | 'saf-d-grid'
          | 'neutrik-powercon-20a'
          | 'neutrik-powercon-32a'
          | 'neutrik-powercon-true1'
          | 'neutrik-powercon-true1-top'
          | 'ubiquiti-smartpower'
          | 'hardwired'
          | 'other'
      }
    | undefined
  url?: string | undefined
}
type WritablePowerOutlet = {
  _occupied?: boolean | undefined
  cable?: NestedCable | undefined
  cable_end?: string | undefined
  connected_endpoints?: (string | null)[] | undefined
  connected_endpoints_reachable?: boolean | undefined
  connected_endpoints_type?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  device: number
  display?: string | undefined
  feed_leg?: 'A' | 'B' | 'C' | undefined
  id?: number | undefined
  label?: string | undefined
  last_updated?: (string | null) | undefined
  link_peers?: (string | null)[] | undefined
  link_peers_type?: string | undefined
  mark_connected?: boolean | undefined
  module?: (number | null) | undefined
  name: string
  power_port?: (number | null) | undefined
  tags?: NestedTag[] | undefined
  type?:
    | 'iec-60320-c5'
    | 'iec-60320-c7'
    | 'iec-60320-c13'
    | 'iec-60320-c15'
    | 'iec-60320-c19'
    | 'iec-60320-c21'
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
    | 'nema-15-15r'
    | 'nema-15-20r'
    | 'nema-15-30r'
    | 'nema-15-50r'
    | 'nema-15-60r'
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
    | 'nema-l15-20r'
    | 'nema-l15-30r'
    | 'nema-l15-50r'
    | 'nema-l15-60r'
    | 'nema-l21-20r'
    | 'nema-l21-30r'
    | 'nema-l22-30r'
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
    | 'ita-multistandard'
    | 'usb-a'
    | 'usb-micro-b'
    | 'usb-c'
    | 'dc-terminal'
    | 'hdot-cx'
    | 'saf-d-grid'
    | 'neutrik-powercon-20a'
    | 'neutrik-powercon-32a'
    | 'neutrik-powercon-true1'
    | 'neutrik-powercon-true1-top'
    | 'ubiquiti-smartpower'
    | 'hardwired'
    | 'other'
    | undefined
  url?: string | undefined
}
type PowerPanel = {
  comments?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display?: string | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  location?: NestedLocation | undefined
  name: string
  powerfeed_count?: number | undefined
  site: NestedSite
  tags?: NestedTag[] | undefined
  url?: string | undefined
}
type WritablePowerPanel = {
  comments?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display?: string | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  location?: (number | null) | undefined
  name: string
  powerfeed_count?: number | undefined
  site: number
  tags?: NestedTag[] | undefined
  url?: string | undefined
}
type PowerPortTemplate = {
  allocated_draw?: (number | null) | undefined
  created?: (string | null) | undefined
  description?: string | undefined
  device_type?: NestedDeviceType | undefined
  display?: string | undefined
  id?: number | undefined
  label?: string | undefined
  last_updated?: (string | null) | undefined
  maximum_draw?: (number | null) | undefined
  module_type?: NestedModuleType | undefined
  name: string
  type?:
    | {
        label:
          | 'C6'
          | 'C8'
          | 'C14'
          | 'C16'
          | 'C20'
          | 'C22'
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
          | 'NEMA 15-15P'
          | 'NEMA 15-20P'
          | 'NEMA 15-30P'
          | 'NEMA 15-50P'
          | 'NEMA 15-60P'
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
          | 'NEMA L15-20P'
          | 'NEMA L15-30P'
          | 'NEMA L15-50P'
          | 'NEMA L15-60P'
          | 'NEMA L21-20P'
          | 'NEMA L21-30P'
          | 'NEMA L22-30P'
          | 'CS6361C'
          | 'CS6365C'
          | 'CS8165C'
          | 'CS8265C'
          | 'CS8365C'
          | 'CS8465C'
          | 'ITA Type C (CEE 7/16)'
          | 'ITA Type E (CEE 7/6)'
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
          | 'USB Type A'
          | 'USB Type B'
          | 'USB Type C'
          | 'USB Mini A'
          | 'USB Mini B'
          | 'USB Micro A'
          | 'USB Micro B'
          | 'USB Micro AB'
          | 'USB 3.0 Type B'
          | 'USB 3.0 Micro B'
          | 'DC Terminal'
          | 'Saf-D-Grid'
          | 'Neutrik powerCON (20A)'
          | 'Neutrik powerCON (32A)'
          | 'Neutrik powerCON TRUE1'
          | 'Neutrik powerCON TRUE1 TOP'
          | 'Ubiquiti SmartPower'
          | 'Hardwired'
          | 'Other'
        value:
          | 'iec-60320-c6'
          | 'iec-60320-c8'
          | 'iec-60320-c14'
          | 'iec-60320-c16'
          | 'iec-60320-c20'
          | 'iec-60320-c22'
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
          | 'nema-15-15p'
          | 'nema-15-20p'
          | 'nema-15-30p'
          | 'nema-15-50p'
          | 'nema-15-60p'
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
          | 'nema-l15-20p'
          | 'nema-l15-30p'
          | 'nema-l15-50p'
          | 'nema-l15-60p'
          | 'nema-l21-20p'
          | 'nema-l21-30p'
          | 'nema-l22-30p'
          | 'cs6361c'
          | 'cs6365c'
          | 'cs8165c'
          | 'cs8265c'
          | 'cs8365c'
          | 'cs8465c'
          | 'ita-c'
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
          | 'usb-a'
          | 'usb-b'
          | 'usb-c'
          | 'usb-mini-a'
          | 'usb-mini-b'
          | 'usb-micro-a'
          | 'usb-micro-b'
          | 'usb-micro-ab'
          | 'usb-3-b'
          | 'usb-3-micro-b'
          | 'dc-terminal'
          | 'saf-d-grid'
          | 'neutrik-powercon-20'
          | 'neutrik-powercon-32'
          | 'neutrik-powercon-true1'
          | 'neutrik-powercon-true1-top'
          | 'ubiquiti-smartpower'
          | 'hardwired'
          | 'other'
      }
    | undefined
  url?: string | undefined
}
type WritablePowerPortTemplate = {
  allocated_draw?: (number | null) | undefined
  created?: (string | null) | undefined
  description?: string | undefined
  device_type?: (number | null) | undefined
  display?: string | undefined
  id?: number | undefined
  label?: string | undefined
  last_updated?: (string | null) | undefined
  maximum_draw?: (number | null) | undefined
  module_type?: (number | null) | undefined
  name: string
  type?:
    | 'iec-60320-c6'
    | 'iec-60320-c8'
    | 'iec-60320-c14'
    | 'iec-60320-c16'
    | 'iec-60320-c20'
    | 'iec-60320-c22'
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
    | 'nema-15-15p'
    | 'nema-15-20p'
    | 'nema-15-30p'
    | 'nema-15-50p'
    | 'nema-15-60p'
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
    | 'nema-l15-20p'
    | 'nema-l15-30p'
    | 'nema-l15-50p'
    | 'nema-l15-60p'
    | 'nema-l21-20p'
    | 'nema-l21-30p'
    | 'nema-l22-30p'
    | 'cs6361c'
    | 'cs6365c'
    | 'cs8165c'
    | 'cs8265c'
    | 'cs8365c'
    | 'cs8465c'
    | 'ita-c'
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
    | 'usb-a'
    | 'usb-b'
    | 'usb-c'
    | 'usb-mini-a'
    | 'usb-mini-b'
    | 'usb-micro-a'
    | 'usb-micro-b'
    | 'usb-micro-ab'
    | 'usb-3-b'
    | 'usb-3-micro-b'
    | 'dc-terminal'
    | 'saf-d-grid'
    | 'neutrik-powercon-20'
    | 'neutrik-powercon-32'
    | 'neutrik-powercon-true1'
    | 'neutrik-powercon-true1-top'
    | 'ubiquiti-smartpower'
    | 'hardwired'
    | 'other'
    | undefined
  url?: string | undefined
}
type PowerPort = {
  _occupied?: boolean | undefined
  allocated_draw?: (number | null) | undefined
  cable?: NestedCable | undefined
  cable_end?: string | undefined
  connected_endpoints?: (string | null)[] | undefined
  connected_endpoints_reachable?: boolean | undefined
  connected_endpoints_type?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  device: NestedDevice
  display?: string | undefined
  id?: number | undefined
  label?: string | undefined
  last_updated?: (string | null) | undefined
  link_peers?: (string | null)[] | undefined
  link_peers_type?: string | undefined
  mark_connected?: boolean | undefined
  maximum_draw?: (number | null) | undefined
  module?: ComponentNestedModule | undefined
  name: string
  tags?: NestedTag[] | undefined
  type?:
    | {
        label:
          | 'C6'
          | 'C8'
          | 'C14'
          | 'C16'
          | 'C20'
          | 'C22'
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
          | 'NEMA 15-15P'
          | 'NEMA 15-20P'
          | 'NEMA 15-30P'
          | 'NEMA 15-50P'
          | 'NEMA 15-60P'
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
          | 'NEMA L15-20P'
          | 'NEMA L15-30P'
          | 'NEMA L15-50P'
          | 'NEMA L15-60P'
          | 'NEMA L21-20P'
          | 'NEMA L21-30P'
          | 'NEMA L22-30P'
          | 'CS6361C'
          | 'CS6365C'
          | 'CS8165C'
          | 'CS8265C'
          | 'CS8365C'
          | 'CS8465C'
          | 'ITA Type C (CEE 7/16)'
          | 'ITA Type E (CEE 7/6)'
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
          | 'USB Type A'
          | 'USB Type B'
          | 'USB Type C'
          | 'USB Mini A'
          | 'USB Mini B'
          | 'USB Micro A'
          | 'USB Micro B'
          | 'USB Micro AB'
          | 'USB 3.0 Type B'
          | 'USB 3.0 Micro B'
          | 'DC Terminal'
          | 'Saf-D-Grid'
          | 'Neutrik powerCON (20A)'
          | 'Neutrik powerCON (32A)'
          | 'Neutrik powerCON TRUE1'
          | 'Neutrik powerCON TRUE1 TOP'
          | 'Ubiquiti SmartPower'
          | 'Hardwired'
          | 'Other'
        value:
          | 'iec-60320-c6'
          | 'iec-60320-c8'
          | 'iec-60320-c14'
          | 'iec-60320-c16'
          | 'iec-60320-c20'
          | 'iec-60320-c22'
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
          | 'nema-15-15p'
          | 'nema-15-20p'
          | 'nema-15-30p'
          | 'nema-15-50p'
          | 'nema-15-60p'
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
          | 'nema-l15-20p'
          | 'nema-l15-30p'
          | 'nema-l15-50p'
          | 'nema-l15-60p'
          | 'nema-l21-20p'
          | 'nema-l21-30p'
          | 'nema-l22-30p'
          | 'cs6361c'
          | 'cs6365c'
          | 'cs8165c'
          | 'cs8265c'
          | 'cs8365c'
          | 'cs8465c'
          | 'ita-c'
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
          | 'usb-a'
          | 'usb-b'
          | 'usb-c'
          | 'usb-mini-a'
          | 'usb-mini-b'
          | 'usb-micro-a'
          | 'usb-micro-b'
          | 'usb-micro-ab'
          | 'usb-3-b'
          | 'usb-3-micro-b'
          | 'dc-terminal'
          | 'saf-d-grid'
          | 'neutrik-powercon-20'
          | 'neutrik-powercon-32'
          | 'neutrik-powercon-true1'
          | 'neutrik-powercon-true1-top'
          | 'ubiquiti-smartpower'
          | 'hardwired'
          | 'other'
      }
    | undefined
  url?: string | undefined
}
type WritablePowerPort = {
  _occupied?: boolean | undefined
  allocated_draw?: (number | null) | undefined
  cable?: NestedCable | undefined
  cable_end?: string | undefined
  connected_endpoints?: (string | null)[] | undefined
  connected_endpoints_reachable?: boolean | undefined
  connected_endpoints_type?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  device: number
  display?: string | undefined
  id?: number | undefined
  label?: string | undefined
  last_updated?: (string | null) | undefined
  link_peers?: (string | null)[] | undefined
  link_peers_type?: string | undefined
  mark_connected?: boolean | undefined
  maximum_draw?: (number | null) | undefined
  module?: (number | null) | undefined
  name: string
  tags?: NestedTag[] | undefined
  type?:
    | 'iec-60320-c6'
    | 'iec-60320-c8'
    | 'iec-60320-c14'
    | 'iec-60320-c16'
    | 'iec-60320-c20'
    | 'iec-60320-c22'
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
    | 'nema-15-15p'
    | 'nema-15-20p'
    | 'nema-15-30p'
    | 'nema-15-50p'
    | 'nema-15-60p'
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
    | 'nema-l15-20p'
    | 'nema-l15-30p'
    | 'nema-l15-50p'
    | 'nema-l15-60p'
    | 'nema-l21-20p'
    | 'nema-l21-30p'
    | 'nema-l22-30p'
    | 'cs6361c'
    | 'cs6365c'
    | 'cs8165c'
    | 'cs8265c'
    | 'cs8365c'
    | 'cs8465c'
    | 'ita-c'
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
    | 'usb-a'
    | 'usb-b'
    | 'usb-c'
    | 'usb-mini-a'
    | 'usb-mini-b'
    | 'usb-micro-a'
    | 'usb-micro-b'
    | 'usb-micro-ab'
    | 'usb-3-b'
    | 'usb-3-micro-b'
    | 'dc-terminal'
    | 'saf-d-grid'
    | 'neutrik-powercon-20'
    | 'neutrik-powercon-32'
    | 'neutrik-powercon-true1'
    | 'neutrik-powercon-true1-top'
    | 'ubiquiti-smartpower'
    | 'hardwired'
    | 'other'
    | undefined
  url?: string | undefined
}
type NestedUser = {
  display?: string | undefined
  id?: number | undefined
  url?: string | undefined
  username: string
}
type RackReservation = {
  comments?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description: string
  display?: string | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  rack: NestedRack
  tags?: NestedTag[] | undefined
  tenant?: NestedTenant | undefined
  units: number[]
  url?: string | undefined
  user: NestedUser
}
type WritableRackReservation = {
  comments?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description: string
  display?: string | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  rack: number
  tags?: NestedTag[] | undefined
  tenant?: (number | null) | undefined
  units: number[]
  url?: string | undefined
  user: number
}
type RackRole = {
  color?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display?: string | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  name: string
  rack_count?: number | undefined
  slug: string
  tags?: NestedTag[] | undefined
  url?: string | undefined
}
type NestedRackRole = {
  display?: string | undefined
  id?: number | undefined
  name: string
  rack_count?: number | undefined
  slug: string
  url?: string | undefined
} | null
type Rack = {
  asset_tag?: (string | null) | undefined
  comments?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  desc_units?: boolean | undefined
  description?: string | undefined
  device_count?: number | undefined
  display?: string | undefined
  facility_id?: (string | null) | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  location?: NestedLocation | undefined
  max_weight?: (number | null) | undefined
  mounting_depth?: (number | null) | undefined
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
  tags?: NestedTag[] | undefined
  tenant?: NestedTenant | undefined
  type?:
    | {
        label:
          | '2-post frame'
          | '4-post frame'
          | '4-post cabinet'
          | 'Wall-mounted frame'
          | 'Wall-mounted frame (vertical)'
          | 'Wall-mounted cabinet'
          | 'Wall-mounted cabinet (vertical)'
        value:
          | '2-post-frame'
          | '4-post-frame'
          | '4-post-cabinet'
          | 'wall-frame'
          | 'wall-frame-vertical'
          | 'wall-cabinet'
          | 'wall-cabinet-vertical'
      }
    | undefined
  u_height?: number | undefined
  url?: string | undefined
  weight?: (number | null) | undefined
  weight_unit?:
    | { label: 'Kilograms' | 'Grams' | 'Pounds' | 'Ounces'; value: 'kg' | 'g' | 'lb' | 'oz' }
    | undefined
  width?:
    | { label: '10 inches' | '19 inches' | '21 inches' | '23 inches'; value: 10 | 19 | 21 | 23 }
    | undefined
}
type WritableRack = {
  asset_tag?: (string | null) | undefined
  comments?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  desc_units?: boolean | undefined
  description?: string | undefined
  device_count?: number | undefined
  display?: string | undefined
  facility_id?: (string | null) | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  location?: (number | null) | undefined
  max_weight?: (number | null) | undefined
  mounting_depth?: (number | null) | undefined
  name: string
  outer_depth?: (number | null) | undefined
  outer_unit?: 'mm' | 'in' | undefined
  outer_width?: (number | null) | undefined
  powerfeed_count?: number | undefined
  role?: (number | null) | undefined
  serial?: string | undefined
  site: number
  status?: 'reserved' | 'available' | 'planned' | 'active' | 'deprecated' | undefined
  tags?: NestedTag[] | undefined
  tenant?: (number | null) | undefined
  type?:
    | '2-post-frame'
    | '4-post-frame'
    | '4-post-cabinet'
    | 'wall-frame'
    | 'wall-frame-vertical'
    | 'wall-cabinet'
    | 'wall-cabinet-vertical'
    | undefined
  u_height?: number | undefined
  url?: string | undefined
  weight?: (number | null) | undefined
  weight_unit?: 'kg' | 'g' | 'lb' | 'oz' | undefined
  width?: 10 | 19 | 21 | 23 | undefined
}
type RackUnit = {
  device?: NestedDevice | undefined
  display?: string | undefined
  face?: { label: 'Front' | 'Rear'; value: 'front' | 'rear' } | undefined
  id?: number | undefined
  name?: string | undefined
  occupied?: boolean | undefined
}
type RearPortTemplate = {
  color?: string | undefined
  created?: (string | null) | undefined
  description?: string | undefined
  device_type?: NestedDeviceType | undefined
  display?: string | undefined
  id?: number | undefined
  label?: string | undefined
  last_updated?: (string | null) | undefined
  module_type?: NestedModuleType | undefined
  name: string
  positions?: number | undefined
  type: {
    label:
      | '8P8C'
      | '8P6C'
      | '8P4C'
      | '8P2C'
      | '6P6C'
      | '6P4C'
      | '6P2C'
      | '4P4C'
      | '4P2C'
      | 'GG45'
      | 'TERA 4P'
      | 'TERA 2P'
      | 'TERA 1P'
      | '110 Punch'
      | 'BNC'
      | 'F Connector'
      | 'N Connector'
      | 'MRJ21'
      | 'FC'
      | 'LC'
      | 'LC/PC'
      | 'LC/UPC'
      | 'LC/APC'
      | 'LSH'
      | 'LSH/PC'
      | 'LSH/UPC'
      | 'LSH/APC'
      | 'MPO'
      | 'MTRJ'
      | 'SC'
      | 'SC/PC'
      | 'SC/UPC'
      | 'SC/APC'
      | 'ST'
      | 'CS'
      | 'SN'
      | 'SMA 905'
      | 'SMA 906'
      | 'URM-P2'
      | 'URM-P4'
      | 'URM-P8'
      | 'Splice'
      | 'Other'
    value:
      | '8p8c'
      | '8p6c'
      | '8p4c'
      | '8p2c'
      | '6p6c'
      | '6p4c'
      | '6p2c'
      | '4p4c'
      | '4p2c'
      | 'gg45'
      | 'tera-4p'
      | 'tera-2p'
      | 'tera-1p'
      | '110-punch'
      | 'bnc'
      | 'f'
      | 'n'
      | 'mrj21'
      | 'fc'
      | 'lc'
      | 'lc-pc'
      | 'lc-upc'
      | 'lc-apc'
      | 'lsh'
      | 'lsh-pc'
      | 'lsh-upc'
      | 'lsh-apc'
      | 'mpo'
      | 'mtrj'
      | 'sc'
      | 'sc-pc'
      | 'sc-upc'
      | 'sc-apc'
      | 'st'
      | 'cs'
      | 'sn'
      | 'sma-905'
      | 'sma-906'
      | 'urm-p2'
      | 'urm-p4'
      | 'urm-p8'
      | 'splice'
      | 'other'
  }
  url?: string | undefined
}
type WritableRearPortTemplate = {
  color?: string | undefined
  created?: (string | null) | undefined
  description?: string | undefined
  device_type?: (number | null) | undefined
  display?: string | undefined
  id?: number | undefined
  label?: string | undefined
  last_updated?: (string | null) | undefined
  module_type?: (number | null) | undefined
  name: string
  positions?: number | undefined
  type:
    | '8p8c'
    | '8p6c'
    | '8p4c'
    | '8p2c'
    | '6p6c'
    | '6p4c'
    | '6p2c'
    | '4p4c'
    | '4p2c'
    | 'gg45'
    | 'tera-4p'
    | 'tera-2p'
    | 'tera-1p'
    | '110-punch'
    | 'bnc'
    | 'f'
    | 'n'
    | 'mrj21'
    | 'fc'
    | 'lc'
    | 'lc-pc'
    | 'lc-upc'
    | 'lc-apc'
    | 'lsh'
    | 'lsh-pc'
    | 'lsh-upc'
    | 'lsh-apc'
    | 'mpo'
    | 'mtrj'
    | 'sc'
    | 'sc-pc'
    | 'sc-upc'
    | 'sc-apc'
    | 'st'
    | 'cs'
    | 'sn'
    | 'sma-905'
    | 'sma-906'
    | 'urm-p2'
    | 'urm-p4'
    | 'urm-p8'
    | 'splice'
    | 'other'
  url?: string | undefined
}
type RearPort = {
  _occupied?: boolean | undefined
  cable?: NestedCable | undefined
  cable_end?: string | undefined
  color?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  device: NestedDevice
  display?: string | undefined
  id?: number | undefined
  label?: string | undefined
  last_updated?: (string | null) | undefined
  link_peers?: (string | null)[] | undefined
  link_peers_type?: string | undefined
  mark_connected?: boolean | undefined
  module?: ComponentNestedModule | undefined
  name: string
  positions?: number | undefined
  tags?: NestedTag[] | undefined
  type: {
    label:
      | '8P8C'
      | '8P6C'
      | '8P4C'
      | '8P2C'
      | '6P6C'
      | '6P4C'
      | '6P2C'
      | '4P4C'
      | '4P2C'
      | 'GG45'
      | 'TERA 4P'
      | 'TERA 2P'
      | 'TERA 1P'
      | '110 Punch'
      | 'BNC'
      | 'F Connector'
      | 'N Connector'
      | 'MRJ21'
      | 'FC'
      | 'LC'
      | 'LC/PC'
      | 'LC/UPC'
      | 'LC/APC'
      | 'LSH'
      | 'LSH/PC'
      | 'LSH/UPC'
      | 'LSH/APC'
      | 'MPO'
      | 'MTRJ'
      | 'SC'
      | 'SC/PC'
      | 'SC/UPC'
      | 'SC/APC'
      | 'ST'
      | 'CS'
      | 'SN'
      | 'SMA 905'
      | 'SMA 906'
      | 'URM-P2'
      | 'URM-P4'
      | 'URM-P8'
      | 'Splice'
      | 'Other'
    value:
      | '8p8c'
      | '8p6c'
      | '8p4c'
      | '8p2c'
      | '6p6c'
      | '6p4c'
      | '6p2c'
      | '4p4c'
      | '4p2c'
      | 'gg45'
      | 'tera-4p'
      | 'tera-2p'
      | 'tera-1p'
      | '110-punch'
      | 'bnc'
      | 'f'
      | 'n'
      | 'mrj21'
      | 'fc'
      | 'lc'
      | 'lc-pc'
      | 'lc-upc'
      | 'lc-apc'
      | 'lsh'
      | 'lsh-pc'
      | 'lsh-upc'
      | 'lsh-apc'
      | 'mpo'
      | 'mtrj'
      | 'sc'
      | 'sc-pc'
      | 'sc-upc'
      | 'sc-apc'
      | 'st'
      | 'cs'
      | 'sn'
      | 'sma-905'
      | 'sma-906'
      | 'urm-p2'
      | 'urm-p4'
      | 'urm-p8'
      | 'splice'
      | 'other'
  }
  url?: string | undefined
}
type WritableRearPort = {
  _occupied?: boolean | undefined
  cable?: NestedCable | undefined
  cable_end?: string | undefined
  color?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  device: number
  display?: string | undefined
  id?: number | undefined
  label?: string | undefined
  last_updated?: (string | null) | undefined
  link_peers?: (string | null)[] | undefined
  link_peers_type?: string | undefined
  mark_connected?: boolean | undefined
  module?: (number | null) | undefined
  name: string
  positions?: number | undefined
  tags?: NestedTag[] | undefined
  type:
    | '8p8c'
    | '8p6c'
    | '8p4c'
    | '8p2c'
    | '6p6c'
    | '6p4c'
    | '6p2c'
    | '4p4c'
    | '4p2c'
    | 'gg45'
    | 'tera-4p'
    | 'tera-2p'
    | 'tera-1p'
    | '110-punch'
    | 'bnc'
    | 'f'
    | 'n'
    | 'mrj21'
    | 'fc'
    | 'lc'
    | 'lc-pc'
    | 'lc-upc'
    | 'lc-apc'
    | 'lsh'
    | 'lsh-pc'
    | 'lsh-upc'
    | 'lsh-apc'
    | 'mpo'
    | 'mtrj'
    | 'sc'
    | 'sc-pc'
    | 'sc-upc'
    | 'sc-apc'
    | 'st'
    | 'cs'
    | 'sn'
    | 'sma-905'
    | 'sma-906'
    | 'urm-p2'
    | 'urm-p4'
    | 'urm-p8'
    | 'splice'
    | 'other'
  url?: string | undefined
}
type NestedRegion = {
  _depth?: number | undefined
  display?: string | undefined
  id?: number | undefined
  name: string
  site_count?: number | undefined
  slug: string
  url?: string | undefined
} | null
type Region = {
  _depth?: number | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display?: string | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  name: string
  parent?: NestedRegion | undefined
  site_count?: number | undefined
  slug: string
  tags?: NestedTag[] | undefined
  url?: string | undefined
}
type WritableRegion = {
  _depth?: number | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display?: string | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  name: string
  parent?: (number | null) | undefined
  site_count?: number | undefined
  slug: string
  tags?: NestedTag[] | undefined
  url?: string | undefined
}
type NestedSiteGroup = {
  _depth?: number | undefined
  display?: string | undefined
  id?: number | undefined
  name: string
  site_count?: number | undefined
  slug: string
  url?: string | undefined
} | null
type SiteGroup = {
  _depth?: number | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display?: string | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  name: string
  parent?: NestedSiteGroup | undefined
  site_count?: number | undefined
  slug: string
  tags?: NestedTag[] | undefined
  url?: string | undefined
}
type WritableSiteGroup = {
  _depth?: number | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display?: string | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  name: string
  parent?: (number | null) | undefined
  site_count?: number | undefined
  slug: string
  tags?: NestedTag[] | undefined
  url?: string | undefined
}
type Site = {
  asns?: NestedASN[] | undefined
  circuit_count?: number | undefined
  comments?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  device_count?: number | undefined
  display?: string | undefined
  facility?: string | undefined
  group?: NestedSiteGroup | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  latitude?: (number | null) | undefined
  longitude?: (number | null) | undefined
  name: string
  physical_address?: string | undefined
  prefix_count?: number | undefined
  rack_count?: number | undefined
  region?: NestedRegion | undefined
  shipping_address?: string | undefined
  slug: string
  status?:
    | {
        label: 'Planned' | 'Staging' | 'Active' | 'Decommissioning' | 'Retired'
        value: 'planned' | 'staging' | 'active' | 'decommissioning' | 'retired'
      }
    | undefined
  tags?: NestedTag[] | undefined
  tenant?: NestedTenant | undefined
  time_zone?: (string | null) | undefined
  url?: string | undefined
  virtualmachine_count?: number | undefined
  vlan_count?: number | undefined
}
type WritableSite = {
  asns?: number[] | undefined
  circuit_count?: number | undefined
  comments?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  device_count?: number | undefined
  display?: string | undefined
  facility?: string | undefined
  group?: (number | null) | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  latitude?: (number | null) | undefined
  longitude?: (number | null) | undefined
  name: string
  physical_address?: string | undefined
  prefix_count?: number | undefined
  rack_count?: number | undefined
  region?: (number | null) | undefined
  shipping_address?: string | undefined
  slug: string
  status?: 'planned' | 'staging' | 'active' | 'decommissioning' | 'retired' | undefined
  tags?: NestedTag[] | undefined
  tenant?: (number | null) | undefined
  time_zone?: (string | null) | undefined
  url?: string | undefined
  virtualmachine_count?: number | undefined
  vlan_count?: number | undefined
}
type VirtualChassis = {
  comments?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display?: string | undefined
  domain?: string | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  master?: NestedDevice | undefined
  member_count?: number | undefined
  name: string
  tags?: NestedTag[] | undefined
  url?: string | undefined
}
type WritableVirtualChassis = {
  comments?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display?: string | undefined
  domain?: string | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  master?: (number | null) | undefined
  member_count?: number | undefined
  name: string
  tags?: NestedTag[] | undefined
  url?: string | undefined
}
type VirtualDeviceContext = {
  comments?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  device: NestedDevice
  display?: string | undefined
  id?: number | undefined
  identifier?: (number | null) | undefined
  interface_count?: number | undefined
  last_updated?: (string | null) | undefined
  name: string
  primary_ip?: NestedIPAddress | undefined
  primary_ip4?: NestedIPAddress | undefined
  primary_ip6?: NestedIPAddress | undefined
  status: 'active' | 'planned' | 'offline'
  tags?: NestedTag[] | undefined
  tenant?: NestedTenant | undefined
  url?: string | undefined
}
type WritableVirtualDeviceContext = {
  comments?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  device?: (number | null) | undefined
  display?: string | undefined
  id?: number | undefined
  identifier?: (number | null) | undefined
  interface_count?: number | undefined
  last_updated?: (string | null) | undefined
  name: string
  primary_ip?: string | undefined
  primary_ip4?: (number | null) | undefined
  primary_ip6?: (number | null) | undefined
  status: 'active' | 'planned' | 'offline'
  tags?: NestedTag[] | undefined
  tenant?: (number | null) | undefined
  url?: string | undefined
}
type NestedClusterGroup = {
  cluster_count?: number | undefined
  display?: string | undefined
  id?: number | undefined
  name: string
  slug: string
  url?: string | undefined
}
type NestedClusterType = {
  cluster_count?: number | undefined
  display?: string | undefined
  id?: number | undefined
  name: string
  slug: string
  url?: string | undefined
}
type NestedTenantGroup = {
  _depth?: number | undefined
  display?: string | undefined
  id?: number | undefined
  name: string
  slug: string
  tenant_count?: number | undefined
  url?: string | undefined
}
type ConfigContext = {
  cluster_groups?: NestedClusterGroup[] | undefined
  cluster_types?: NestedClusterType[] | undefined
  clusters?: NestedCluster[] | undefined
  created?: (string | null) | undefined
  data: { [x: string]: unknown }
  description?: string | undefined
  device_types?: NestedDeviceType[] | undefined
  display?: string | undefined
  id?: number | undefined
  is_active?: boolean | undefined
  last_updated?: (string | null) | undefined
  locations?: NestedLocation[] | undefined
  name: string
  platforms?: NestedPlatform[] | undefined
  regions?: NestedRegion[] | undefined
  roles?: NestedDeviceRole[] | undefined
  site_groups?: NestedSiteGroup[] | undefined
  sites?: NestedSite[] | undefined
  tags?: string[] | undefined
  tenant_groups?: NestedTenantGroup[] | undefined
  tenants?: NestedTenant[] | undefined
  url?: string | undefined
  weight?: number | undefined
}
type WritableConfigContext = {
  cluster_groups?: number[] | undefined
  cluster_types?: number[] | undefined
  clusters?: number[] | undefined
  created?: (string | null) | undefined
  data: { [x: string]: unknown }
  description?: string | undefined
  device_types?: number[] | undefined
  display?: string | undefined
  id?: number | undefined
  is_active?: boolean | undefined
  last_updated?: (string | null) | undefined
  locations?: number[] | undefined
  name: string
  platforms?: number[] | undefined
  regions?: number[] | undefined
  roles?: number[] | undefined
  site_groups?: number[] | undefined
  sites?: number[] | undefined
  tags?: string[] | undefined
  tenant_groups?: number[] | undefined
  tenants?: number[] | undefined
  url?: string | undefined
  weight?: number | undefined
}
type ContentType = {
  app_label: string
  display?: string | undefined
  id?: number | undefined
  model: string
  url?: string | undefined
}
type CustomField = {
  choices?: (string[] | null) | undefined
  content_types: string[]
  created?: (string | null) | undefined
  data_type?: string | undefined
  default?: ({ [x: string]: unknown } | null) | undefined
  description?: string | undefined
  display?: string | undefined
  filter_logic?:
    | { label: 'Disabled' | 'Loose' | 'Exact'; value: 'disabled' | 'loose' | 'exact' }
    | undefined
  group_name?: string | undefined
  id?: number | undefined
  label?: string | undefined
  last_updated?: (string | null) | undefined
  name: string
  object_type?: string | undefined
  required?: boolean | undefined
  search_weight?: number | undefined
  type: {
    label:
      | 'Text'
      | 'Text (long)'
      | 'Integer'
      | 'Decimal'
      | 'Boolean (true/false)'
      | 'Date'
      | 'URL'
      | 'JSON'
      | 'Selection'
      | 'Multiple selection'
      | 'Object'
      | 'Multiple objects'
    value:
      | 'text'
      | 'longtext'
      | 'integer'
      | 'decimal'
      | 'boolean'
      | 'date'
      | 'url'
      | 'json'
      | 'select'
      | 'multiselect'
      | 'object'
      | 'multiobject'
  }
  ui_visibility?:
    | { label: 'Read/Write' | 'Read-only' | 'Hidden'; value: 'read-write' | 'read-only' | 'hidden' }
    | undefined
  url?: string | undefined
  validation_maximum?: (number | null) | undefined
  validation_minimum?: (number | null) | undefined
  validation_regex?: string | undefined
  weight?: number | undefined
}
type WritableCustomField = {
  choices?: (string[] | null) | undefined
  content_types: string[]
  created?: (string | null) | undefined
  data_type?: string | undefined
  default?: ({ [x: string]: unknown } | null) | undefined
  description?: string | undefined
  display?: string | undefined
  filter_logic?: 'disabled' | 'loose' | 'exact' | undefined
  group_name?: string | undefined
  id?: number | undefined
  label?: string | undefined
  last_updated?: (string | null) | undefined
  name: string
  object_type?: string | undefined
  required?: boolean | undefined
  search_weight?: number | undefined
  type?:
    | 'text'
    | 'longtext'
    | 'integer'
    | 'decimal'
    | 'boolean'
    | 'date'
    | 'url'
    | 'json'
    | 'select'
    | 'multiselect'
    | 'object'
    | 'multiobject'
    | undefined
  ui_visibility?: 'read-write' | 'read-only' | 'hidden' | undefined
  url?: string | undefined
  validation_maximum?: (number | null) | undefined
  validation_minimum?: (number | null) | undefined
  validation_regex?: string | undefined
  weight?: number | undefined
}
type CustomLink = {
  button_class?:
    | 'outline-dark'
    | 'blue'
    | 'indigo'
    | 'purple'
    | 'pink'
    | 'red'
    | 'orange'
    | 'yellow'
    | 'green'
    | 'teal'
    | 'cyan'
    | 'gray'
    | 'black'
    | 'white'
    | 'ghost-dark'
    | undefined
  content_types: string[]
  created?: (string | null) | undefined
  display?: string | undefined
  enabled?: boolean | undefined
  group_name?: string | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  link_text: string
  link_url: string
  name: string
  new_window?: boolean | undefined
  url?: string | undefined
  weight?: number | undefined
}
type ExportTemplate = {
  as_attachment?: boolean | undefined
  content_types: string[]
  created?: (string | null) | undefined
  description?: string | undefined
  display?: string | undefined
  file_extension?: string | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  mime_type?: string | undefined
  name: string
  template_code: string
  url?: string | undefined
}
type ImageAttachment = {
  content_type: string
  created?: (string | null) | undefined
  display?: string | undefined
  id?: number | undefined
  image?: string | undefined
  image_height: number
  image_width: number
  last_updated?: (string | null) | undefined
  name?: string | undefined
  object_id: number
  parent?: { [x: string]: unknown } | undefined
  url?: string | undefined
}
type JobResult = {
  completed?: (string | null) | undefined
  created?: string | undefined
  data?: ({ [x: string]: unknown } | null) | undefined
  display?: string | undefined
  id?: number | undefined
  interval?: (number | null) | undefined
  job_id: string
  name: string
  obj_type?: string | undefined
  scheduled?: (string | null) | undefined
  started?: (string | null) | undefined
  status?:
    | {
        label: 'Pending' | 'Scheduled' | 'Running' | 'Completed' | 'Errored' | 'Failed'
        value: 'pending' | 'scheduled' | 'running' | 'completed' | 'errored' | 'failed'
      }
    | undefined
  url?: string | undefined
  user?: NestedUser | undefined
}
type JournalEntry = {
  assigned_object?: { [x: string]: unknown } | undefined
  assigned_object_id: number
  assigned_object_type: string
  comments: string
  created?: (string | null) | undefined
  created_by?: (number | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  display?: string | undefined
  id?: number | undefined
  kind?:
    | {
        label: 'Info' | 'Success' | 'Warning' | 'Danger'
        value: 'info' | 'success' | 'warning' | 'danger'
      }
    | undefined
  last_updated?: (string | null) | undefined
  tags?: NestedTag[] | undefined
  url?: string | undefined
}
type WritableJournalEntry = {
  assigned_object?: { [x: string]: unknown } | undefined
  assigned_object_id: number
  assigned_object_type: string
  comments: string
  created?: (string | null) | undefined
  created_by?: (number | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  display?: string | undefined
  id?: number | undefined
  kind?: 'info' | 'success' | 'warning' | 'danger' | undefined
  last_updated?: (string | null) | undefined
  tags?: NestedTag[] | undefined
  url?: string | undefined
}
type ObjectChange = {
  action?:
    | { label: 'Created' | 'Updated' | 'Deleted'; value: 'create' | 'update' | 'delete' }
    | undefined
  changed_object?: { [x: string]: unknown } | undefined
  changed_object_id: number
  changed_object_type?: string | undefined
  display?: string | undefined
  id?: number | undefined
  postchange_data?: ({ [x: string]: unknown } | null) | undefined
  prechange_data?: ({ [x: string]: unknown } | null) | undefined
  request_id?: string | undefined
  time?: string | undefined
  url?: string | undefined
  user?: NestedUser | undefined
  user_name?: string | undefined
}
type SavedFilter = {
  content_types: string[]
  created?: (string | null) | undefined
  description?: string | undefined
  display?: string | undefined
  enabled?: boolean | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  name: string
  parameters: { [x: string]: unknown }
  shared?: boolean | undefined
  slug: string
  url?: string | undefined
  user?: (number | null) | undefined
  weight?: number | undefined
}
type Tag = {
  color?: string | undefined
  created?: (string | null) | undefined
  description?: string | undefined
  display?: string | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  name: string
  slug: string
  tagged_items?: number | undefined
  url?: string | undefined
}
type Webhook = {
  additional_headers?: string | undefined
  body_template?: string | undefined
  ca_file_path?: (string | null) | undefined
  conditions?: ({ [x: string]: unknown } | null) | undefined
  content_types: string[]
  created?: (string | null) | undefined
  display?: string | undefined
  enabled?: boolean | undefined
  http_content_type?: string | undefined
  http_method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  name: string
  payload_url: string
  secret?: string | undefined
  ssl_verification?: boolean | undefined
  type_create?: boolean | undefined
  type_delete?: boolean | undefined
  type_update?: boolean | undefined
  url?: string | undefined
}
type NestedRIR = {
  aggregate_count?: number | undefined
  display?: string | undefined
  id?: number | undefined
  name: string
  slug: string
  url?: string | undefined
}
type Aggregate = {
  comments?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  date_added?: (string | null) | undefined
  description?: string | undefined
  display?: string | undefined
  family?: { label: 'IPv4' | 'IPv6'; value: 4 | 6 } | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  prefix: string
  rir: NestedRIR
  tags?: NestedTag[] | undefined
  tenant?: NestedTenant | undefined
  url?: string | undefined
}
type WritableAggregate = {
  comments?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  date_added?: (string | null) | undefined
  description?: string | undefined
  display?: string | undefined
  family?: string | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  prefix: string
  rir: number
  tags?: NestedTag[] | undefined
  tenant?: (number | null) | undefined
  url?: string | undefined
}
type ASN = {
  asn: number
  comments?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display?: string | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  provider_count?: number | undefined
  rir: number
  site_count?: number | undefined
  tags?: NestedTag[] | undefined
  tenant?: NestedTenant | undefined
  url?: string | undefined
}
type WritableASN = {
  asn: number
  comments?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display?: string | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  provider_count?: number | undefined
  rir: number
  site_count?: number | undefined
  tags?: NestedTag[] | undefined
  tenant?: (number | null) | undefined
  url?: string | undefined
}
type NestedFHRPGroup = {
  display?: string | undefined
  group_id: number
  id?: number | undefined
  protocol: 'vrrp2' | 'vrrp3' | 'carp' | 'clusterxl' | 'hsrp' | 'glbp' | 'other'
  url?: string | undefined
}
type FHRPGroupAssignment = {
  created?: (string | null) | undefined
  display?: string | undefined
  group: NestedFHRPGroup
  id?: number | undefined
  interface?: { [x: string]: unknown } | undefined
  interface_id: number
  interface_type: string
  last_updated?: (string | null) | undefined
  priority: number
  url?: string | undefined
}
type WritableFHRPGroupAssignment = {
  created?: (string | null) | undefined
  display?: string | undefined
  group: number
  id?: number | undefined
  interface?: { [x: string]: unknown } | undefined
  interface_id: number
  interface_type: string
  last_updated?: (string | null) | undefined
  priority: number
  url?: string | undefined
}
type FHRPGroup = {
  auth_key?: string | undefined
  auth_type?: 'plaintext' | 'md5' | undefined
  comments?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display?: string | undefined
  group_id: number
  id?: number | undefined
  ip_addresses?: NestedIPAddress[] | undefined
  last_updated?: (string | null) | undefined
  name?: string | undefined
  protocol: 'vrrp2' | 'vrrp3' | 'carp' | 'clusterxl' | 'hsrp' | 'glbp' | 'other'
  tags?: NestedTag[] | undefined
  url?: string | undefined
}
type IPAddress = {
  address: string
  assigned_object?: { [x: string]: unknown } | undefined
  assigned_object_id?: (number | null) | undefined
  assigned_object_type?: (string | null) | undefined
  comments?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display?: string | undefined
  dns_name?: string | undefined
  family?: { label: 'IPv4' | 'IPv6'; value: 4 | 6 } | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  nat_inside?: NestedIPAddress | undefined
  nat_outside?: NestedIPAddress[] | undefined
  role?:
    | {
        label: 'Loopback' | 'Secondary' | 'Anycast' | 'VIP' | 'VRRP' | 'HSRP' | 'GLBP' | 'CARP'
        value: 'loopback' | 'secondary' | 'anycast' | 'vip' | 'vrrp' | 'hsrp' | 'glbp' | 'carp'
      }
    | undefined
  status?:
    | {
        label: 'Active' | 'Reserved' | 'Deprecated' | 'DHCP' | 'SLAAC'
        value: 'active' | 'reserved' | 'deprecated' | 'dhcp' | 'slaac'
      }
    | undefined
  tags?: NestedTag[] | undefined
  tenant?: NestedTenant | undefined
  url?: string | undefined
  vrf?: NestedVRF | undefined
}
type WritableIPAddress = {
  address: string
  assigned_object?: { [x: string]: unknown } | undefined
  assigned_object_id?: (number | null) | undefined
  assigned_object_type?: (string | null) | undefined
  comments?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display?: string | undefined
  dns_name?: string | undefined
  family?: string | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  nat_inside?: (number | null) | undefined
  nat_outside?: NestedIPAddress[] | undefined
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
  status?: 'active' | 'reserved' | 'deprecated' | 'dhcp' | 'slaac' | undefined
  tags?: NestedTag[] | undefined
  tenant?: (number | null) | undefined
  url?: string | undefined
  vrf?: (number | null) | undefined
}
type NestedRole = {
  display?: string | undefined
  id?: number | undefined
  name: string
  prefix_count?: number | undefined
  slug: string
  url?: string | undefined
  vlan_count?: number | undefined
} | null
type IPRange = {
  children?: number | undefined
  comments?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display?: string | undefined
  end_address: string
  family?: { label: 'IPv4' | 'IPv6'; value: 4 | 6 } | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  role?: NestedRole | undefined
  size?: number | undefined
  start_address: string
  status?:
    | { label: 'Active' | 'Reserved' | 'Deprecated'; value: 'active' | 'reserved' | 'deprecated' }
    | undefined
  tags?: NestedTag[] | undefined
  tenant?: NestedTenant | undefined
  url?: string | undefined
  vrf?: NestedVRF | undefined
}
type WritableIPRange = {
  children?: number | undefined
  comments?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display?: string | undefined
  end_address: string
  family?: string | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  role?: (number | null) | undefined
  size?: number | undefined
  start_address: string
  status?: 'active' | 'reserved' | 'deprecated' | undefined
  tags?: NestedTag[] | undefined
  tenant?: (number | null) | undefined
  url?: string | undefined
  vrf?: (number | null) | undefined
}
type AvailableIP = {
  address?: string | undefined
  family?: number | undefined
  vrf?: NestedVRF | undefined
}
type WritableAvailableIP = { address?: string | undefined; family?: number | undefined }
type L2VPNTermination = {
  assigned_object?: { [x: string]: unknown } | undefined
  assigned_object_id: number
  assigned_object_type: string
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  display?: string | undefined
  id?: number | undefined
  l2vpn: NestedL2VPN
  last_updated?: (string | null) | undefined
  tags?: NestedTag[] | undefined
  url?: string | undefined
}
type WritableL2VPNTermination = {
  assigned_object?: { [x: string]: unknown } | undefined
  assigned_object_id: number
  assigned_object_type: string
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  display?: string | undefined
  id?: number | undefined
  l2vpn: number
  last_updated?: (string | null) | undefined
  tags?: NestedTag[] | undefined
  url?: string | undefined
}
type NestedRouteTarget = {
  display?: string | undefined
  id?: number | undefined
  name: string
  url?: string | undefined
}
type L2VPN = {
  comments?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display?: string | undefined
  export_targets?: NestedRouteTarget[] | undefined
  id?: number | undefined
  identifier?: (number | null) | undefined
  import_targets?: NestedRouteTarget[] | undefined
  last_updated?: (string | null) | undefined
  name: string
  slug: string
  tags?: NestedTag[] | undefined
  tenant?: NestedTenant | undefined
  type?:
    | {
        label:
          | 'VPWS'
          | 'VPLS'
          | 'VXLAN'
          | 'VXLAN-EVPN'
          | 'MPLS EVPN'
          | 'PBB EVPN'
          | 'EPL'
          | 'EVPL'
          | 'Ethernet Private LAN'
          | 'Ethernet Virtual Private LAN'
          | 'Ethernet Private Tree'
          | 'Ethernet Virtual Private Tree'
        value:
          | 'vpws'
          | 'vpls'
          | 'vxlan'
          | 'vxlan-evpn'
          | 'mpls-evpn'
          | 'pbb-evpn'
          | 'epl'
          | 'evpl'
          | 'ep-lan'
          | 'evp-lan'
          | 'ep-tree'
          | 'evp-tree'
      }
    | undefined
  url?: string | undefined
}
type WritableL2VPN = {
  comments?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display?: string | undefined
  export_targets?: number[] | undefined
  id?: number | undefined
  identifier?: (number | null) | undefined
  import_targets?: number[] | undefined
  last_updated?: (string | null) | undefined
  name: string
  slug: string
  tags?: NestedTag[] | undefined
  tenant?: (number | null) | undefined
  type:
    | 'vpws'
    | 'vpls'
    | 'vxlan'
    | 'vxlan-evpn'
    | 'mpls-evpn'
    | 'pbb-evpn'
    | 'epl'
    | 'evpl'
    | 'ep-lan'
    | 'evp-lan'
    | 'ep-tree'
    | 'evp-tree'
  url?: string | undefined
}
type Prefix = {
  _depth?: number | undefined
  children?: number | undefined
  comments?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display?: string | undefined
  family?: { label: 'IPv4' | 'IPv6'; value: 4 | 6 } | undefined
  id?: number | undefined
  is_pool?: boolean | undefined
  last_updated?: (string | null) | undefined
  mark_utilized?: boolean | undefined
  prefix: string
  role?: NestedRole | undefined
  site?: NestedSite | undefined
  status?:
    | {
        label: 'Container' | 'Active' | 'Reserved' | 'Deprecated'
        value: 'container' | 'active' | 'reserved' | 'deprecated'
      }
    | undefined
  tags?: NestedTag[] | undefined
  tenant?: NestedTenant | undefined
  url?: string | undefined
  vlan?: NestedVLAN | undefined
  vrf?: NestedVRF | undefined
}
type WritablePrefix = {
  _depth?: number | undefined
  children?: number | undefined
  comments?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display?: string | undefined
  family?: string | undefined
  id?: number | undefined
  is_pool?: boolean | undefined
  last_updated?: (string | null) | undefined
  mark_utilized?: boolean | undefined
  prefix: string
  role?: (number | null) | undefined
  site?: (number | null) | undefined
  status?: 'container' | 'active' | 'reserved' | 'deprecated' | undefined
  tags?: NestedTag[] | undefined
  tenant?: (number | null) | undefined
  url?: string | undefined
  vlan?: (number | null) | undefined
  vrf?: (number | null) | undefined
}
type AvailablePrefix = {
  family?: number | undefined
  prefix?: string | undefined
  vrf?: NestedVRF | undefined
}
type PrefixLength = { prefix_length: number }
type RIR = {
  aggregate_count?: number | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display?: string | undefined
  id?: number | undefined
  is_private?: boolean | undefined
  last_updated?: (string | null) | undefined
  name: string
  slug: string
  tags?: NestedTag[] | undefined
  url?: string | undefined
}
type Role = {
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display?: string | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  name: string
  prefix_count?: number | undefined
  slug: string
  tags?: NestedTag[] | undefined
  url?: string | undefined
  vlan_count?: number | undefined
  weight?: number | undefined
}
type RouteTarget = {
  comments?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display?: string | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  name: string
  tags?: NestedTag[] | undefined
  tenant?: NestedTenant | undefined
  url?: string | undefined
}
type WritableRouteTarget = {
  comments?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display?: string | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  name: string
  tags?: NestedTag[] | undefined
  tenant?: (number | null) | undefined
  url?: string | undefined
}
type ServiceTemplate = {
  comments?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display?: string | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  name: string
  ports: number[]
  protocol?: { label: 'TCP' | 'UDP' | 'SCTP'; value: 'tcp' | 'udp' | 'sctp' } | undefined
  tags?: NestedTag[] | undefined
  url?: string | undefined
}
type WritableServiceTemplate = {
  comments?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display?: string | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  name: string
  ports: number[]
  protocol: 'tcp' | 'udp' | 'sctp'
  tags?: NestedTag[] | undefined
  url?: string | undefined
}
type NestedVirtualMachine = {
  display?: string | undefined
  id?: number | undefined
  name: string
  url?: string | undefined
} | null
type Service = {
  comments?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  device?: NestedDevice | undefined
  display?: string | undefined
  id?: number | undefined
  ipaddresses?: NestedIPAddress[] | undefined
  last_updated?: (string | null) | undefined
  name: string
  ports: number[]
  protocol?: { label: 'TCP' | 'UDP' | 'SCTP'; value: 'tcp' | 'udp' | 'sctp' } | undefined
  tags?: NestedTag[] | undefined
  url?: string | undefined
  virtual_machine?: NestedVirtualMachine | undefined
}
type WritableService = {
  comments?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  device?: (number | null) | undefined
  display?: string | undefined
  id?: number | undefined
  ipaddresses?: number[] | undefined
  last_updated?: (string | null) | undefined
  name: string
  ports: number[]
  protocol: 'tcp' | 'udp' | 'sctp'
  tags?: NestedTag[] | undefined
  url?: string | undefined
  virtual_machine?: (number | null) | undefined
}
type VLANGroup = {
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display?: string | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  max_vid?: number | undefined
  min_vid?: number | undefined
  name: string
  scope?: { [x: string]: unknown } | undefined
  scope_id?: (number | null) | undefined
  scope_type?: (string | null) | undefined
  slug: string
  tags?: NestedTag[] | undefined
  url?: string | undefined
  vlan_count?: number | undefined
}
type NestedVLANGroup = {
  display?: string | undefined
  id?: number | undefined
  name: string
  slug: string
  url?: string | undefined
  vlan_count?: number | undefined
}
type AvailableVLAN = { group?: NestedVLANGroup | undefined; vid?: number | undefined }
type WritableCreateAvailableVLAN = {
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  name: string
  role?: (number | null) | undefined
  site?: (number | null) | undefined
  status?: 'active' | 'reserved' | 'deprecated' | undefined
  tags?: NestedTag[] | undefined
  tenant?: (number | null) | undefined
}
type VLAN = {
  comments?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display?: string | undefined
  group?: NestedVLANGroup | undefined
  id?: number | undefined
  l2vpn_termination?: NestedL2VPNTermination | undefined
  last_updated?: (string | null) | undefined
  name: string
  prefix_count?: number | undefined
  role?: NestedRole | undefined
  site?: NestedSite | undefined
  status?:
    | { label: 'Active' | 'Reserved' | 'Deprecated'; value: 'active' | 'reserved' | 'deprecated' }
    | undefined
  tags?: NestedTag[] | undefined
  tenant?: NestedTenant | undefined
  url?: string | undefined
  vid: number
}
type WritableVLAN = {
  comments?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display?: string | undefined
  group?: (number | null) | undefined
  id?: number | undefined
  l2vpn_termination?: string | undefined
  last_updated?: (string | null) | undefined
  name: string
  prefix_count?: number | undefined
  role?: (number | null) | undefined
  site?: (number | null) | undefined
  status?: 'active' | 'reserved' | 'deprecated' | undefined
  tags?: NestedTag[] | undefined
  tenant?: (number | null) | undefined
  url?: string | undefined
  vid: number
}
type VRF = {
  comments?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display?: string | undefined
  enforce_unique?: boolean | undefined
  export_targets?: NestedRouteTarget[] | undefined
  id?: number | undefined
  import_targets?: NestedRouteTarget[] | undefined
  ipaddress_count?: number | undefined
  last_updated?: (string | null) | undefined
  name: string
  prefix_count?: number | undefined
  rd?: (string | null) | undefined
  tags?: NestedTag[] | undefined
  tenant?: NestedTenant | undefined
  url?: string | undefined
}
type WritableVRF = {
  comments?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display?: string | undefined
  enforce_unique?: boolean | undefined
  export_targets?: number[] | undefined
  id?: number | undefined
  import_targets?: number[] | undefined
  ipaddress_count?: number | undefined
  last_updated?: (string | null) | undefined
  name: string
  prefix_count?: number | undefined
  rd?: (string | null) | undefined
  tags?: NestedTag[] | undefined
  tenant?: (number | null) | undefined
  url?: string | undefined
}
type NestedContact = {
  display?: string | undefined
  id?: number | undefined
  name: string
  url?: string | undefined
}
type NestedContactRole = {
  display?: string | undefined
  id?: number | undefined
  name: string
  slug: string
  url?: string | undefined
} | null
type ContactAssignment = {
  contact: NestedContact
  content_type: string
  created?: (string | null) | undefined
  display?: string | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  object?: { [x: string]: unknown } | undefined
  object_id: number
  priority?:
    | {
        label: 'Primary' | 'Secondary' | 'Tertiary' | 'Inactive'
        value: 'primary' | 'secondary' | 'tertiary' | 'inactive'
      }
    | undefined
  role?: NestedContactRole | undefined
  url?: string | undefined
}
type WritableContactAssignment = {
  contact: number
  content_type: string
  created?: (string | null) | undefined
  display?: string | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  object?: { [x: string]: unknown } | undefined
  object_id: number
  priority?: 'primary' | 'secondary' | 'tertiary' | 'inactive' | undefined
  role: number
  url?: string | undefined
}
type NestedContactGroup = {
  _depth?: number | undefined
  contact_count?: number | undefined
  display?: string | undefined
  id?: number | undefined
  name: string
  slug: string
  url?: string | undefined
} | null
type ContactGroup = {
  _depth?: number | undefined
  contact_count?: number | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display?: string | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  name: string
  parent?: NestedContactGroup | undefined
  slug: string
  tags?: NestedTag[] | undefined
  url?: string | undefined
}
type WritableContactGroup = {
  _depth?: number | undefined
  contact_count?: number | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display?: string | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  name: string
  parent?: (number | null) | undefined
  slug: string
  tags?: NestedTag[] | undefined
  url?: string | undefined
}
type ContactRole = {
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display?: string | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  name: string
  slug: string
  tags?: NestedTag[] | undefined
  url?: string | undefined
}
type Contact = {
  address?: string | undefined
  comments?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display?: string | undefined
  email?: string | undefined
  group?: NestedContactGroup | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  link?: string | undefined
  name: string
  phone?: string | undefined
  tags?: NestedTag[] | undefined
  title?: string | undefined
  url?: string | undefined
}
type WritableContact = {
  address?: string | undefined
  comments?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display?: string | undefined
  email?: string | undefined
  group?: (number | null) | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  link?: string | undefined
  name: string
  phone?: string | undefined
  tags?: NestedTag[] | undefined
  title?: string | undefined
  url?: string | undefined
}
type TenantGroup = {
  _depth?: number | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display?: string | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  name: string
  parent?: NestedTenantGroup | undefined
  slug: string
  tags?: NestedTag[] | undefined
  tenant_count?: number | undefined
  url?: string | undefined
}
type WritableTenantGroup = {
  _depth?: number | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display?: string | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  name: string
  parent?: (number | null) | undefined
  slug: string
  tags?: NestedTag[] | undefined
  tenant_count?: number | undefined
  url?: string | undefined
}
type Tenant = {
  circuit_count?: number | undefined
  cluster_count?: number | undefined
  comments?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  device_count?: number | undefined
  display?: string | undefined
  group?: NestedTenantGroup | undefined
  id?: number | undefined
  ipaddress_count?: number | undefined
  last_updated?: (string | null) | undefined
  name: string
  prefix_count?: number | undefined
  rack_count?: number | undefined
  site_count?: number | undefined
  slug: string
  tags?: NestedTag[] | undefined
  url?: string | undefined
  virtualmachine_count?: number | undefined
  vlan_count?: number | undefined
  vrf_count?: number | undefined
}
type WritableTenant = {
  circuit_count?: number | undefined
  cluster_count?: number | undefined
  comments?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  device_count?: number | undefined
  display?: string | undefined
  group?: (number | null) | undefined
  id?: number | undefined
  ipaddress_count?: number | undefined
  last_updated?: (string | null) | undefined
  name: string
  prefix_count?: number | undefined
  rack_count?: number | undefined
  site_count?: number | undefined
  slug: string
  tags?: NestedTag[] | undefined
  url?: string | undefined
  virtualmachine_count?: number | undefined
  vlan_count?: number | undefined
  vrf_count?: number | undefined
}
type Group = {
  display?: string | undefined
  id?: number | undefined
  name: string
  url?: string | undefined
  user_count?: number | undefined
}
type NestedGroup = {
  display?: string | undefined
  id?: number | undefined
  name: string
  url?: string | undefined
}
type ObjectPermission = {
  actions: string[]
  constraints?: ({ [x: string]: unknown } | null) | undefined
  description?: string | undefined
  display?: string | undefined
  enabled?: boolean | undefined
  groups?: NestedGroup[] | undefined
  id?: number | undefined
  name: string
  object_types: string[]
  url?: string | undefined
  users?: NestedUser[] | undefined
}
type WritableObjectPermission = {
  actions: string[]
  constraints?: ({ [x: string]: unknown } | null) | undefined
  description?: string | undefined
  display?: string | undefined
  enabled?: boolean | undefined
  groups?: number[] | undefined
  id?: number | undefined
  name: string
  object_types: string[]
  url?: string | undefined
  users?: number[] | undefined
}
type IPNetwork = { [x: string]: unknown }
type Token = {
  allowed_ips?: IPNetwork[] | undefined
  created?: string | undefined
  description?: string | undefined
  display?: string | undefined
  expires?: (string | null) | undefined
  id?: number | undefined
  key?: string | undefined
  last_used?: (string | null) | undefined
  url?: string | undefined
  user: NestedUser
  write_enabled?: boolean | undefined
}
type WritableToken = {
  allowed_ips?: IPNetwork[] | undefined
  created?: string | undefined
  description?: string | undefined
  display?: string | undefined
  expires?: (string | null) | undefined
  id?: number | undefined
  key?: string | undefined
  last_used?: (string | null) | undefined
  url?: string | undefined
  user: number
  write_enabled?: boolean | undefined
}
type User = {
  date_joined?: string | undefined
  display?: string | undefined
  email?: string | undefined
  first_name?: string | undefined
  groups?: NestedGroup[] | undefined
  id?: number | undefined
  is_active?: boolean | undefined
  is_staff?: boolean | undefined
  last_name?: string | undefined
  password: string
  url?: string | undefined
  username: string
}
type WritableUser = {
  date_joined?: string | undefined
  display?: string | undefined
  email?: string | undefined
  first_name?: string | undefined
  groups?: number[] | undefined
  id?: number | undefined
  is_active?: boolean | undefined
  is_staff?: boolean | undefined
  last_name?: string | undefined
  password: string
  url?: string | undefined
  username: string
}
type ClusterGroup = {
  cluster_count?: number | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display?: string | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  name: string
  slug: string
  tags?: NestedTag[] | undefined
  url?: string | undefined
}
type ClusterType = {
  cluster_count?: number | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display?: string | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  name: string
  slug: string
  tags?: NestedTag[] | undefined
  url?: string | undefined
}
type Cluster = {
  comments?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  device_count?: number | undefined
  display?: string | undefined
  group?: NestedClusterGroup | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  name: string
  site?: NestedSite | undefined
  status?:
    | {
        label: 'Planned' | 'Staging' | 'Active' | 'Decommissioning' | 'Offline'
        value: 'planned' | 'staging' | 'active' | 'decommissioning' | 'offline'
      }
    | undefined
  tags?: NestedTag[] | undefined
  tenant?: NestedTenant | undefined
  type: NestedClusterType
  url?: string | undefined
  virtualmachine_count?: number | undefined
}
type WritableCluster = {
  comments?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  device_count?: number | undefined
  display?: string | undefined
  group?: (number | null) | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  name: string
  site?: (number | null) | undefined
  status?: 'planned' | 'staging' | 'active' | 'decommissioning' | 'offline' | undefined
  tags?: NestedTag[] | undefined
  tenant?: (number | null) | undefined
  type: number
  url?: string | undefined
  virtualmachine_count?: number | undefined
}
type NestedVMInterface = {
  display?: string | undefined
  id?: number | undefined
  name: string
  url?: string | undefined
  virtual_machine?: NestedVirtualMachine | undefined
} | null
type VMInterface = {
  bridge?: NestedVMInterface | undefined
  count_fhrp_groups?: number | undefined
  count_ipaddresses?: number | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display?: string | undefined
  enabled?: boolean | undefined
  id?: number | undefined
  l2vpn_termination?: NestedL2VPNTermination | undefined
  last_updated?: (string | null) | undefined
  mac_address?: (string | null) | undefined
  mode?:
    | { label: 'Access' | 'Tagged' | 'Tagged (All)'; value: 'access' | 'tagged' | 'tagged-all' }
    | undefined
  mtu?: (number | null) | undefined
  name: string
  parent?: NestedVMInterface | undefined
  tagged_vlans?: NestedVLAN[] | undefined
  tags?: NestedTag[] | undefined
  untagged_vlan?: NestedVLAN | undefined
  url?: string | undefined
  virtual_machine: NestedVirtualMachine
  vrf?: NestedVRF | undefined
}
type WritableVMInterface = {
  bridge?: (number | null) | undefined
  count_fhrp_groups?: number | undefined
  count_ipaddresses?: number | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display?: string | undefined
  enabled?: boolean | undefined
  id?: number | undefined
  l2vpn_termination?: string | undefined
  last_updated?: (string | null) | undefined
  mac_address?: (string | null) | undefined
  mode?: 'access' | 'tagged' | 'tagged-all' | undefined
  mtu?: (number | null) | undefined
  name: string
  parent?: (number | null) | undefined
  tagged_vlans?: number[] | undefined
  tags?: NestedTag[] | undefined
  untagged_vlan?: (number | null) | undefined
  url?: string | undefined
  virtual_machine: number
  vrf?: (number | null) | undefined
}
type VirtualMachineWithConfigContext = {
  cluster?: NestedCluster | undefined
  comments?: string | undefined
  config_context?: { [x: string]: unknown } | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  device?: NestedDevice | undefined
  disk?: (number | null) | undefined
  display?: string | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  local_context_data?: ({ [x: string]: unknown } | null) | undefined
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
  tags?: NestedTag[] | undefined
  tenant?: NestedTenant | undefined
  url?: string | undefined
  vcpus?: (number | null) | undefined
}
type WritableVirtualMachineWithConfigContext = {
  cluster?: (number | null) | undefined
  comments?: string | undefined
  config_context?: { [x: string]: unknown } | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  device?: (number | null) | undefined
  disk?: (number | null) | undefined
  display?: string | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  local_context_data?: ({ [x: string]: unknown } | null) | undefined
  memory?: (number | null) | undefined
  name: string
  platform?: (number | null) | undefined
  primary_ip?: string | undefined
  primary_ip4?: (number | null) | undefined
  primary_ip6?: (number | null) | undefined
  role?: (number | null) | undefined
  site?: (number | null) | undefined
  status?: 'offline' | 'active' | 'planned' | 'staged' | 'failed' | 'decommissioning' | undefined
  tags?: NestedTag[] | undefined
  tenant?: (number | null) | undefined
  url?: string | undefined
  vcpus?: (number | null) | undefined
}
type NestedWirelessLANGroup = {
  _depth?: number | undefined
  display?: string | undefined
  id?: number | undefined
  name: string
  slug: string
  url?: string | undefined
  wirelesslan_count?: number | undefined
} | null
type WirelessLANGroup = {
  _depth?: number | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display?: string | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  name: string
  parent?: NestedWirelessLANGroup | undefined
  slug: string
  tags?: NestedTag[] | undefined
  url?: string | undefined
  wirelesslan_count?: number | undefined
}
type WritableWirelessLANGroup = {
  _depth?: number | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display?: string | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  name: string
  parent?: (number | null) | undefined
  slug: string
  tags?: NestedTag[] | undefined
  url?: string | undefined
  wirelesslan_count?: number | undefined
}
type WirelessLAN = {
  auth_cipher?: { label: 'Auto' | 'TKIP' | 'AES'; value: 'auto' | 'tkip' | 'aes' } | undefined
  auth_psk?: string | undefined
  auth_type?:
    | {
        label: 'Open' | 'WEP' | 'WPA Personal (PSK)' | 'WPA Enterprise'
        value: 'open' | 'wep' | 'wpa-personal' | 'wpa-enterprise'
      }
    | undefined
  comments?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display?: string | undefined
  group?: NestedWirelessLANGroup | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  ssid: string
  status?:
    | {
        label: 'Active' | 'Reserved' | 'Disabled' | 'Deprecated'
        value: 'active' | 'reserved' | 'disabled' | 'deprecated'
      }
    | undefined
  tags?: NestedTag[] | undefined
  tenant?: NestedTenant | undefined
  url?: string | undefined
  vlan?: NestedVLAN | undefined
}
type WritableWirelessLAN = {
  auth_cipher?: 'auto' | 'tkip' | 'aes' | undefined
  auth_psk?: string | undefined
  auth_type?: 'open' | 'wep' | 'wpa-personal' | 'wpa-enterprise' | undefined
  comments?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display?: string | undefined
  group?: (number | null) | undefined
  id?: number | undefined
  last_updated?: (string | null) | undefined
  ssid: string
  status?: 'active' | 'reserved' | 'disabled' | 'deprecated' | undefined
  tags?: NestedTag[] | undefined
  tenant?: (number | null) | undefined
  url?: string | undefined
  vlan?: (number | null) | undefined
}
type WirelessLink = {
  auth_cipher?: { label: 'Auto' | 'TKIP' | 'AES'; value: 'auto' | 'tkip' | 'aes' } | undefined
  auth_psk?: string | undefined
  auth_type?:
    | {
        label: 'Open' | 'WEP' | 'WPA Personal (PSK)' | 'WPA Enterprise'
        value: 'open' | 'wep' | 'wpa-personal' | 'wpa-enterprise'
      }
    | undefined
  comments?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display?: string | undefined
  id?: number | undefined
  interface_a: NestedInterface
  interface_b: NestedInterface
  last_updated?: (string | null) | undefined
  ssid?: string | undefined
  status?:
    | {
        label: 'Connected' | 'Planned' | 'Decommissioning'
        value: 'connected' | 'planned' | 'decommissioning'
      }
    | undefined
  tags?: NestedTag[] | undefined
  tenant?: NestedTenant | undefined
  url?: string | undefined
}
type WritableWirelessLink = {
  auth_cipher?: 'auto' | 'tkip' | 'aes' | undefined
  auth_psk?: string | undefined
  auth_type?: 'open' | 'wep' | 'wpa-personal' | 'wpa-enterprise' | undefined
  comments?: string | undefined
  created?: (string | null) | undefined
  custom_fields?: { [x: string]: unknown } | undefined
  description?: string | undefined
  display?: string | undefined
  id?: number | undefined
  interface_a: number
  interface_b: number
  last_updated?: (string | null) | undefined
  ssid?: string | undefined
  status?: 'connected' | 'planned' | 'decommissioning' | undefined
  tags?: NestedTag[] | undefined
  tenant?: (number | null) | undefined
  url?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/circuits/circuit-terminations/': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            term_side?: string | undefined
            port_speed?: string | undefined
            upstream_speed?: string | undefined
            xconnect_id?: string | undefined
            description?: string | undefined
            cable_end?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            q?: string | undefined
            tag?: string | undefined
            cabled?: string | undefined
            occupied?: string | undefined
            circuit_id?: string | undefined
            site_id?: string | undefined
            site?: string | undefined
            provider_network_id?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
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
            xconnect_id__empty?: string | undefined
            description__n?: string | undefined
            description__ic?: string | undefined
            description__nic?: string | undefined
            description__iew?: string | undefined
            description__niew?: string | undefined
            description__isw?: string | undefined
            description__nisw?: string | undefined
            description__ie?: string | undefined
            description__nie?: string | undefined
            description__empty?: string | undefined
            cable_end__n?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            circuit_id__n?: string | undefined
            site_id__n?: string | undefined
            site__n?: string | undefined
            provider_network_id__n?: string | undefined
            ordering?: string | undefined
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
      $patch: {
        input: { json: WritableCircuitTermination }
        output: CircuitTermination
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableCircuitTermination }
        output: CircuitTermination
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: WritableCircuitTermination }
        output: CircuitTermination
        outputFormat: 'json'
        status: 200
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
    '/circuits/circuit-terminations/:id/paths/': {
      $get: {
        input: { param: { id: number } }
        output: CircuitTermination
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/circuits/circuit-types/': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            slug?: string | undefined
            description?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
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
            name__empty?: string | undefined
            slug__n?: string | undefined
            slug__ic?: string | undefined
            slug__nic?: string | undefined
            slug__iew?: string | undefined
            slug__niew?: string | undefined
            slug__isw?: string | undefined
            slug__nisw?: string | undefined
            slug__ie?: string | undefined
            slug__nie?: string | undefined
            slug__empty?: string | undefined
            description__n?: string | undefined
            description__ic?: string | undefined
            description__nic?: string | undefined
            description__iew?: string | undefined
            description__niew?: string | undefined
            description__isw?: string | undefined
            description__nisw?: string | undefined
            description__ie?: string | undefined
            description__nie?: string | undefined
            description__empty?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            ordering?: string | undefined
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
      $patch: {
        input: { json: CircuitType }
        output: CircuitType
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: CircuitType }
        output: CircuitType
        outputFormat: 'json'
        status: 201
      }
      $put: { input: { json: CircuitType }; output: CircuitType; outputFormat: 'json'; status: 200 }
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
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            cid?: string | undefined
            description?: string | undefined
            install_date?: string | undefined
            termination_date?: string | undefined
            commit_rate?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            q?: string | undefined
            tag?: string | undefined
            tenant_group_id?: string | undefined
            tenant_group?: string | undefined
            tenant_id?: string | undefined
            tenant?: string | undefined
            contact?: string | undefined
            contact_role?: string | undefined
            contact_group?: string | undefined
            provider_id?: string | undefined
            provider?: string | undefined
            provider_network_id?: string | undefined
            type_id?: string | undefined
            type?: string | undefined
            status?: string | undefined
            region_id?: string | undefined
            region?: string | undefined
            site_group_id?: string | undefined
            site_group?: string | undefined
            site_id?: string | undefined
            site?: string | undefined
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
            cid__empty?: string | undefined
            description__n?: string | undefined
            description__ic?: string | undefined
            description__nic?: string | undefined
            description__iew?: string | undefined
            description__niew?: string | undefined
            description__isw?: string | undefined
            description__nisw?: string | undefined
            description__ie?: string | undefined
            description__nie?: string | undefined
            description__empty?: string | undefined
            install_date__n?: string | undefined
            install_date__lte?: string | undefined
            install_date__lt?: string | undefined
            install_date__gte?: string | undefined
            install_date__gt?: string | undefined
            termination_date__n?: string | undefined
            termination_date__lte?: string | undefined
            termination_date__lt?: string | undefined
            termination_date__gte?: string | undefined
            termination_date__gt?: string | undefined
            commit_rate__n?: string | undefined
            commit_rate__lte?: string | undefined
            commit_rate__lt?: string | undefined
            commit_rate__gte?: string | undefined
            commit_rate__gt?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            tenant_group_id__n?: string | undefined
            tenant_group__n?: string | undefined
            tenant_id__n?: string | undefined
            tenant__n?: string | undefined
            contact__n?: string | undefined
            contact_role__n?: string | undefined
            contact_group__n?: string | undefined
            provider_id__n?: string | undefined
            provider__n?: string | undefined
            provider_network_id__n?: string | undefined
            type_id__n?: string | undefined
            type__n?: string | undefined
            status__n?: string | undefined
            region_id__n?: string | undefined
            region__n?: string | undefined
            site_group_id__n?: string | undefined
            site_group__n?: string | undefined
            site_id__n?: string | undefined
            site__n?: string | undefined
            ordering?: string | undefined
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
      $patch: {
        input: { json: WritableCircuit }
        output: Circuit
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableCircuit }
        output: Circuit
        outputFormat: 'json'
        status: 201
      }
      $put: { input: { json: WritableCircuit }; output: Circuit; outputFormat: 'json'; status: 200 }
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
    '/circuits/provider-networks/': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            service_id?: string | undefined
            description?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            q?: string | undefined
            tag?: string | undefined
            provider_id?: string | undefined
            provider?: string | undefined
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
            name__empty?: string | undefined
            service_id__n?: string | undefined
            service_id__ic?: string | undefined
            service_id__nic?: string | undefined
            service_id__iew?: string | undefined
            service_id__niew?: string | undefined
            service_id__isw?: string | undefined
            service_id__nisw?: string | undefined
            service_id__ie?: string | undefined
            service_id__nie?: string | undefined
            service_id__empty?: string | undefined
            description__n?: string | undefined
            description__ic?: string | undefined
            description__nic?: string | undefined
            description__iew?: string | undefined
            description__niew?: string | undefined
            description__isw?: string | undefined
            description__nisw?: string | undefined
            description__ie?: string | undefined
            description__nie?: string | undefined
            description__empty?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            provider_id__n?: string | undefined
            provider__n?: string | undefined
            ordering?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: ProviderNetwork[]
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { json: WritableProviderNetwork }
        output: ProviderNetwork
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableProviderNetwork }
        output: ProviderNetwork
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: WritableProviderNetwork }
        output: ProviderNetwork
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/circuits/provider-networks/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: ProviderNetwork
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: WritableProviderNetwork }
        output: ProviderNetwork
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableProviderNetwork }
        output: ProviderNetwork
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/circuits/providers/': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            slug?: string | undefined
            account?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            q?: string | undefined
            tag?: string | undefined
            contact?: string | undefined
            contact_role?: string | undefined
            contact_group?: string | undefined
            region_id?: string | undefined
            region?: string | undefined
            site_group_id?: string | undefined
            site_group?: string | undefined
            site_id?: string | undefined
            site?: string | undefined
            asn_id?: string | undefined
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
            name__empty?: string | undefined
            slug__n?: string | undefined
            slug__ic?: string | undefined
            slug__nic?: string | undefined
            slug__iew?: string | undefined
            slug__niew?: string | undefined
            slug__isw?: string | undefined
            slug__nisw?: string | undefined
            slug__ie?: string | undefined
            slug__nie?: string | undefined
            slug__empty?: string | undefined
            account__n?: string | undefined
            account__ic?: string | undefined
            account__nic?: string | undefined
            account__iew?: string | undefined
            account__niew?: string | undefined
            account__isw?: string | undefined
            account__nisw?: string | undefined
            account__ie?: string | undefined
            account__nie?: string | undefined
            account__empty?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            contact__n?: string | undefined
            contact_role__n?: string | undefined
            contact_group__n?: string | undefined
            region_id__n?: string | undefined
            region__n?: string | undefined
            site_group_id__n?: string | undefined
            site_group__n?: string | undefined
            site_id__n?: string | undefined
            site__n?: string | undefined
            asn_id__n?: string | undefined
            ordering?: string | undefined
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
      $patch: {
        input: { json: WritableProvider }
        output: Provider
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableProvider }
        output: Provider
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: WritableProvider }
        output: Provider
        outputFormat: 'json'
        status: 200
      }
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
        input: { param: { id: number } } & { json: WritableProvider }
        output: Provider
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableProvider }
        output: Provider
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/cable-terminations/': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            cable?: string | undefined
            cable_end?: string | undefined
            termination_type?: string | undefined
            termination_id?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            cable__n?: string | undefined
            cable_end__n?: string | undefined
            termination_type__n?: string | undefined
            termination_id__n?: string | undefined
            termination_id__lte?: string | undefined
            termination_id__lt?: string | undefined
            termination_id__gte?: string | undefined
            termination_id__gt?: string | undefined
            ordering?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: CableTermination[]
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { json: CableTermination }
        output: CableTermination
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: CableTermination }
        output: CableTermination
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: CableTermination }
        output: CableTermination
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/cable-terminations/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: CableTermination
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: CableTermination }
        output: CableTermination
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: CableTermination }
        output: CableTermination
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/cables/': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            label?: string | undefined
            length?: string | undefined
            length_unit?: string | undefined
            tenant_group_id?: string | undefined
            tenant_group?: string | undefined
            tenant_id?: string | undefined
            tenant?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            q?: string | undefined
            tag?: string | undefined
            termination_a_type?: string | undefined
            termination_a_id?: string | undefined
            termination_b_type?: string | undefined
            termination_b_id?: string | undefined
            type?: string | undefined
            status?: string | undefined
            color?: string | undefined
            device_id?: string | undefined
            device?: string | undefined
            rack_id?: string | undefined
            rack?: string | undefined
            location_id?: string | undefined
            location?: string | undefined
            site_id?: string | undefined
            site?: string | undefined
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
            label__empty?: string | undefined
            length__n?: string | undefined
            length__lte?: string | undefined
            length__lt?: string | undefined
            length__gte?: string | undefined
            length__gt?: string | undefined
            length_unit__n?: string | undefined
            tenant_group_id__n?: string | undefined
            tenant_group__n?: string | undefined
            tenant_id__n?: string | undefined
            tenant__n?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            termination_a_type__n?: string | undefined
            termination_a_id__n?: string | undefined
            termination_a_id__lte?: string | undefined
            termination_a_id__lt?: string | undefined
            termination_a_id__gte?: string | undefined
            termination_a_id__gt?: string | undefined
            termination_b_type__n?: string | undefined
            termination_b_id__n?: string | undefined
            termination_b_id__lte?: string | undefined
            termination_b_id__lt?: string | undefined
            termination_b_id__gte?: string | undefined
            termination_b_id__gt?: string | undefined
            type__n?: string | undefined
            status__n?: string | undefined
            color__n?: string | undefined
            ordering?: string | undefined
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
      $patch: { input: { json: WritableCable }; output: Cable; outputFormat: 'json'; status: 200 }
      $post: { input: { json: WritableCable }; output: Cable; outputFormat: 'json'; status: 201 }
      $put: { input: { json: WritableCable }; output: Cable; outputFormat: 'json'; status: 200 }
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
    '/dcim/console-port-templates/': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            type?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            q?: string | undefined
            devicetype_id?: string | undefined
            moduletype_id?: string | undefined
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
            name__empty?: string | undefined
            type__n?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            devicetype_id__n?: string | undefined
            moduletype_id__n?: string | undefined
            ordering?: string | undefined
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
      $patch: {
        input: { json: WritableConsolePortTemplate }
        output: ConsolePortTemplate
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableConsolePortTemplate }
        output: ConsolePortTemplate
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: WritableConsolePortTemplate }
        output: ConsolePortTemplate
        outputFormat: 'json'
        status: 200
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
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            label?: string | undefined
            description?: string | undefined
            cable_end?: string | undefined
            q?: string | undefined
            region_id?: string | undefined
            region?: string | undefined
            site_group_id?: string | undefined
            site_group?: string | undefined
            site_id?: string | undefined
            site?: string | undefined
            location_id?: string | undefined
            location?: string | undefined
            rack_id?: string | undefined
            rack?: string | undefined
            device_id?: string | undefined
            device?: string | undefined
            virtual_chassis_id?: string | undefined
            virtual_chassis?: string | undefined
            module_id?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            tag?: string | undefined
            cabled?: string | undefined
            occupied?: string | undefined
            connected?: string | undefined
            type?: string | undefined
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
            name__empty?: string | undefined
            label__n?: string | undefined
            label__ic?: string | undefined
            label__nic?: string | undefined
            label__iew?: string | undefined
            label__niew?: string | undefined
            label__isw?: string | undefined
            label__nisw?: string | undefined
            label__ie?: string | undefined
            label__nie?: string | undefined
            label__empty?: string | undefined
            description__n?: string | undefined
            description__ic?: string | undefined
            description__nic?: string | undefined
            description__iew?: string | undefined
            description__niew?: string | undefined
            description__isw?: string | undefined
            description__nisw?: string | undefined
            description__ie?: string | undefined
            description__nie?: string | undefined
            description__empty?: string | undefined
            cable_end__n?: string | undefined
            region_id__n?: string | undefined
            region__n?: string | undefined
            site_group_id__n?: string | undefined
            site_group__n?: string | undefined
            site_id__n?: string | undefined
            site__n?: string | undefined
            location_id__n?: string | undefined
            location__n?: string | undefined
            rack_id__n?: string | undefined
            rack__n?: string | undefined
            device_id__n?: string | undefined
            device__n?: string | undefined
            virtual_chassis_id__n?: string | undefined
            virtual_chassis__n?: string | undefined
            module_id__n?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            type__n?: string | undefined
            ordering?: string | undefined
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
      $patch: {
        input: { json: WritableConsolePort }
        output: ConsolePort
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableConsolePort }
        output: ConsolePort
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: WritableConsolePort }
        output: ConsolePort
        outputFormat: 'json'
        status: 200
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
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            type?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            q?: string | undefined
            devicetype_id?: string | undefined
            moduletype_id?: string | undefined
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
            name__empty?: string | undefined
            type__n?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            devicetype_id__n?: string | undefined
            moduletype_id__n?: string | undefined
            ordering?: string | undefined
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
      $patch: {
        input: { json: WritableConsoleServerPortTemplate }
        output: ConsoleServerPortTemplate
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableConsoleServerPortTemplate }
        output: ConsoleServerPortTemplate
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: WritableConsoleServerPortTemplate }
        output: ConsoleServerPortTemplate
        outputFormat: 'json'
        status: 200
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
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            label?: string | undefined
            description?: string | undefined
            cable_end?: string | undefined
            q?: string | undefined
            region_id?: string | undefined
            region?: string | undefined
            site_group_id?: string | undefined
            site_group?: string | undefined
            site_id?: string | undefined
            site?: string | undefined
            location_id?: string | undefined
            location?: string | undefined
            rack_id?: string | undefined
            rack?: string | undefined
            device_id?: string | undefined
            device?: string | undefined
            virtual_chassis_id?: string | undefined
            virtual_chassis?: string | undefined
            module_id?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            tag?: string | undefined
            cabled?: string | undefined
            occupied?: string | undefined
            connected?: string | undefined
            type?: string | undefined
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
            name__empty?: string | undefined
            label__n?: string | undefined
            label__ic?: string | undefined
            label__nic?: string | undefined
            label__iew?: string | undefined
            label__niew?: string | undefined
            label__isw?: string | undefined
            label__nisw?: string | undefined
            label__ie?: string | undefined
            label__nie?: string | undefined
            label__empty?: string | undefined
            description__n?: string | undefined
            description__ic?: string | undefined
            description__nic?: string | undefined
            description__iew?: string | undefined
            description__niew?: string | undefined
            description__isw?: string | undefined
            description__nisw?: string | undefined
            description__ie?: string | undefined
            description__nie?: string | undefined
            description__empty?: string | undefined
            cable_end__n?: string | undefined
            region_id__n?: string | undefined
            region__n?: string | undefined
            site_group_id__n?: string | undefined
            site_group__n?: string | undefined
            site_id__n?: string | undefined
            site__n?: string | undefined
            location_id__n?: string | undefined
            location__n?: string | undefined
            rack_id__n?: string | undefined
            rack__n?: string | undefined
            device_id__n?: string | undefined
            device__n?: string | undefined
            virtual_chassis_id__n?: string | undefined
            virtual_chassis__n?: string | undefined
            module_id__n?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            type__n?: string | undefined
            ordering?: string | undefined
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
      $patch: {
        input: { json: WritableConsoleServerPort }
        output: ConsoleServerPort
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableConsoleServerPort }
        output: ConsoleServerPort
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: WritableConsoleServerPort }
        output: ConsoleServerPort
        outputFormat: 'json'
        status: 200
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
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
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
            name__empty?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            devicetype_id__n?: string | undefined
            ordering?: string | undefined
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
      $patch: {
        input: { json: WritableDeviceBayTemplate }
        output: DeviceBayTemplate
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableDeviceBayTemplate }
        output: DeviceBayTemplate
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: WritableDeviceBayTemplate }
        output: DeviceBayTemplate
        outputFormat: 'json'
        status: 200
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
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            label?: string | undefined
            description?: string | undefined
            q?: string | undefined
            region_id?: string | undefined
            region?: string | undefined
            site_group_id?: string | undefined
            site_group?: string | undefined
            site_id?: string | undefined
            site?: string | undefined
            location_id?: string | undefined
            location?: string | undefined
            rack_id?: string | undefined
            rack?: string | undefined
            device_id?: string | undefined
            device?: string | undefined
            virtual_chassis_id?: string | undefined
            virtual_chassis?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
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
            name__empty?: string | undefined
            label__n?: string | undefined
            label__ic?: string | undefined
            label__nic?: string | undefined
            label__iew?: string | undefined
            label__niew?: string | undefined
            label__isw?: string | undefined
            label__nisw?: string | undefined
            label__ie?: string | undefined
            label__nie?: string | undefined
            label__empty?: string | undefined
            description__n?: string | undefined
            description__ic?: string | undefined
            description__nic?: string | undefined
            description__iew?: string | undefined
            description__niew?: string | undefined
            description__isw?: string | undefined
            description__nisw?: string | undefined
            description__ie?: string | undefined
            description__nie?: string | undefined
            description__empty?: string | undefined
            region_id__n?: string | undefined
            region__n?: string | undefined
            site_group_id__n?: string | undefined
            site_group__n?: string | undefined
            site_id__n?: string | undefined
            site__n?: string | undefined
            location_id__n?: string | undefined
            location__n?: string | undefined
            rack_id__n?: string | undefined
            rack__n?: string | undefined
            device_id__n?: string | undefined
            device__n?: string | undefined
            virtual_chassis_id__n?: string | undefined
            virtual_chassis__n?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            ordering?: string | undefined
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
      $patch: {
        input: { json: WritableDeviceBay }
        output: DeviceBay
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableDeviceBay }
        output: DeviceBay
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: WritableDeviceBay }
        output: DeviceBay
        outputFormat: 'json'
        status: 200
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
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            slug?: string | undefined
            color?: string | undefined
            vm_role?: string | undefined
            description?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
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
            name__empty?: string | undefined
            slug__n?: string | undefined
            slug__ic?: string | undefined
            slug__nic?: string | undefined
            slug__iew?: string | undefined
            slug__niew?: string | undefined
            slug__isw?: string | undefined
            slug__nisw?: string | undefined
            slug__ie?: string | undefined
            slug__nie?: string | undefined
            slug__empty?: string | undefined
            color__n?: string | undefined
            color__ic?: string | undefined
            color__nic?: string | undefined
            color__iew?: string | undefined
            color__niew?: string | undefined
            color__isw?: string | undefined
            color__nisw?: string | undefined
            color__ie?: string | undefined
            color__nie?: string | undefined
            color__empty?: string | undefined
            description__n?: string | undefined
            description__ic?: string | undefined
            description__nic?: string | undefined
            description__iew?: string | undefined
            description__niew?: string | undefined
            description__isw?: string | undefined
            description__nisw?: string | undefined
            description__ie?: string | undefined
            description__nie?: string | undefined
            description__empty?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            ordering?: string | undefined
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
      $patch: { input: { json: DeviceRole }; output: DeviceRole; outputFormat: 'json'; status: 200 }
      $post: { input: { json: DeviceRole }; output: DeviceRole; outputFormat: 'json'; status: 201 }
      $put: { input: { json: DeviceRole }; output: DeviceRole; outputFormat: 'json'; status: 200 }
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
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
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
            airflow?: string | undefined
            weight?: string | undefined
            weight_unit?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            q?: string | undefined
            tag?: string | undefined
            manufacturer_id?: string | undefined
            manufacturer?: string | undefined
            has_front_image?: string | undefined
            has_rear_image?: string | undefined
            console_ports?: string | undefined
            console_server_ports?: string | undefined
            power_ports?: string | undefined
            power_outlets?: string | undefined
            interfaces?: string | undefined
            pass_through_ports?: string | undefined
            module_bays?: string | undefined
            device_bays?: string | undefined
            inventory_items?: string | undefined
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
            model__empty?: string | undefined
            slug__n?: string | undefined
            slug__ic?: string | undefined
            slug__nic?: string | undefined
            slug__iew?: string | undefined
            slug__niew?: string | undefined
            slug__isw?: string | undefined
            slug__nisw?: string | undefined
            slug__ie?: string | undefined
            slug__nie?: string | undefined
            slug__empty?: string | undefined
            part_number__n?: string | undefined
            part_number__ic?: string | undefined
            part_number__nic?: string | undefined
            part_number__iew?: string | undefined
            part_number__niew?: string | undefined
            part_number__isw?: string | undefined
            part_number__nisw?: string | undefined
            part_number__ie?: string | undefined
            part_number__nie?: string | undefined
            part_number__empty?: string | undefined
            u_height__n?: string | undefined
            u_height__lte?: string | undefined
            u_height__lt?: string | undefined
            u_height__gte?: string | undefined
            u_height__gt?: string | undefined
            subdevice_role__n?: string | undefined
            airflow__n?: string | undefined
            weight__n?: string | undefined
            weight__lte?: string | undefined
            weight__lt?: string | undefined
            weight__gte?: string | undefined
            weight__gt?: string | undefined
            weight_unit__n?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            manufacturer_id__n?: string | undefined
            manufacturer__n?: string | undefined
            ordering?: string | undefined
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
      $patch: {
        input: { json: WritableDeviceType }
        output: DeviceType
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableDeviceType }
        output: DeviceType
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: WritableDeviceType }
        output: DeviceType
        outputFormat: 'json'
        status: 200
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
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            asset_tag?: string | undefined
            face?: string | undefined
            position?: string | undefined
            airflow?: string | undefined
            vc_position?: string | undefined
            vc_priority?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            q?: string | undefined
            tag?: string | undefined
            tenant_group_id?: string | undefined
            tenant_group?: string | undefined
            tenant_id?: string | undefined
            tenant?: string | undefined
            contact?: string | undefined
            contact_role?: string | undefined
            contact_group?: string | undefined
            local_context_data?: string | undefined
            manufacturer_id?: string | undefined
            manufacturer?: string | undefined
            device_type?: string | undefined
            device_type_id?: string | undefined
            role_id?: string | undefined
            role?: string | undefined
            parent_device_id?: string | undefined
            platform_id?: string | undefined
            platform?: string | undefined
            region_id?: string | undefined
            region?: string | undefined
            site_group_id?: string | undefined
            site_group?: string | undefined
            site_id?: string | undefined
            site?: string | undefined
            location_id?: string | undefined
            rack_id?: string | undefined
            cluster_id?: string | undefined
            model?: string | undefined
            name?: string | undefined
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
            module_bays?: string | undefined
            device_bays?: string | undefined
            primary_ip4_id?: string | undefined
            primary_ip6_id?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            asset_tag__n?: string | undefined
            asset_tag__ic?: string | undefined
            asset_tag__nic?: string | undefined
            asset_tag__iew?: string | undefined
            asset_tag__niew?: string | undefined
            asset_tag__isw?: string | undefined
            asset_tag__nisw?: string | undefined
            asset_tag__ie?: string | undefined
            asset_tag__nie?: string | undefined
            asset_tag__empty?: string | undefined
            face__n?: string | undefined
            position__n?: string | undefined
            position__lte?: string | undefined
            position__lt?: string | undefined
            position__gte?: string | undefined
            position__gt?: string | undefined
            airflow__n?: string | undefined
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
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            tenant_group_id__n?: string | undefined
            tenant_group__n?: string | undefined
            tenant_id__n?: string | undefined
            tenant__n?: string | undefined
            contact__n?: string | undefined
            contact_role__n?: string | undefined
            contact_group__n?: string | undefined
            manufacturer_id__n?: string | undefined
            manufacturer__n?: string | undefined
            device_type__n?: string | undefined
            device_type_id__n?: string | undefined
            role_id__n?: string | undefined
            role__n?: string | undefined
            parent_device_id__n?: string | undefined
            platform_id__n?: string | undefined
            platform__n?: string | undefined
            region_id__n?: string | undefined
            region__n?: string | undefined
            site_group_id__n?: string | undefined
            site_group__n?: string | undefined
            site_id__n?: string | undefined
            site__n?: string | undefined
            location_id__n?: string | undefined
            rack_id__n?: string | undefined
            cluster_id__n?: string | undefined
            model__n?: string | undefined
            name__n?: string | undefined
            name__ic?: string | undefined
            name__nic?: string | undefined
            name__iew?: string | undefined
            name__niew?: string | undefined
            name__isw?: string | undefined
            name__nisw?: string | undefined
            name__ie?: string | undefined
            name__nie?: string | undefined
            name__empty?: string | undefined
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
            serial__n?: string | undefined
            serial__ic?: string | undefined
            serial__nic?: string | undefined
            serial__iew?: string | undefined
            serial__niew?: string | undefined
            serial__isw?: string | undefined
            serial__nisw?: string | undefined
            serial__ie?: string | undefined
            serial__nie?: string | undefined
            serial__empty?: string | undefined
            virtual_chassis_id__n?: string | undefined
            primary_ip4_id__n?: string | undefined
            primary_ip6_id__n?: string | undefined
            ordering?: string | undefined
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
      $patch: {
        input: { json: WritableDeviceWithConfigContext }
        output: DeviceWithConfigContext
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableDeviceWithConfigContext }
        output: DeviceWithConfigContext
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: WritableDeviceWithConfigContext }
        output: DeviceWithConfigContext
        outputFormat: 'json'
        status: 200
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
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            type?: string | undefined
            color?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            q?: string | undefined
            devicetype_id?: string | undefined
            moduletype_id?: string | undefined
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
            name__empty?: string | undefined
            type__n?: string | undefined
            color__n?: string | undefined
            color__ic?: string | undefined
            color__nic?: string | undefined
            color__iew?: string | undefined
            color__niew?: string | undefined
            color__isw?: string | undefined
            color__nisw?: string | undefined
            color__ie?: string | undefined
            color__nie?: string | undefined
            color__empty?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            devicetype_id__n?: string | undefined
            moduletype_id__n?: string | undefined
            ordering?: string | undefined
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
      $patch: {
        input: { json: WritableFrontPortTemplate }
        output: FrontPortTemplate
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableFrontPortTemplate }
        output: FrontPortTemplate
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: WritableFrontPortTemplate }
        output: FrontPortTemplate
        outputFormat: 'json'
        status: 200
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
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            label?: string | undefined
            type?: string | undefined
            color?: string | undefined
            description?: string | undefined
            cable_end?: string | undefined
            q?: string | undefined
            region_id?: string | undefined
            region?: string | undefined
            site_group_id?: string | undefined
            site_group?: string | undefined
            site_id?: string | undefined
            site?: string | undefined
            location_id?: string | undefined
            location?: string | undefined
            rack_id?: string | undefined
            rack?: string | undefined
            device_id?: string | undefined
            device?: string | undefined
            virtual_chassis_id?: string | undefined
            virtual_chassis?: string | undefined
            module_id?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            tag?: string | undefined
            cabled?: string | undefined
            occupied?: string | undefined
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
            name__empty?: string | undefined
            label__n?: string | undefined
            label__ic?: string | undefined
            label__nic?: string | undefined
            label__iew?: string | undefined
            label__niew?: string | undefined
            label__isw?: string | undefined
            label__nisw?: string | undefined
            label__ie?: string | undefined
            label__nie?: string | undefined
            label__empty?: string | undefined
            type__n?: string | undefined
            color__n?: string | undefined
            color__ic?: string | undefined
            color__nic?: string | undefined
            color__iew?: string | undefined
            color__niew?: string | undefined
            color__isw?: string | undefined
            color__nisw?: string | undefined
            color__ie?: string | undefined
            color__nie?: string | undefined
            color__empty?: string | undefined
            description__n?: string | undefined
            description__ic?: string | undefined
            description__nic?: string | undefined
            description__iew?: string | undefined
            description__niew?: string | undefined
            description__isw?: string | undefined
            description__nisw?: string | undefined
            description__ie?: string | undefined
            description__nie?: string | undefined
            description__empty?: string | undefined
            cable_end__n?: string | undefined
            region_id__n?: string | undefined
            region__n?: string | undefined
            site_group_id__n?: string | undefined
            site_group__n?: string | undefined
            site_id__n?: string | undefined
            site__n?: string | undefined
            location_id__n?: string | undefined
            location__n?: string | undefined
            rack_id__n?: string | undefined
            rack__n?: string | undefined
            device_id__n?: string | undefined
            device__n?: string | undefined
            virtual_chassis_id__n?: string | undefined
            virtual_chassis__n?: string | undefined
            module_id__n?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            ordering?: string | undefined
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
      $patch: {
        input: { json: WritableFrontPort }
        output: FrontPort
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableFrontPort }
        output: FrontPort
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: WritableFrontPort }
        output: FrontPort
        outputFormat: 'json'
        status: 200
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
    '/dcim/front-ports/:id/paths/': {
      $get: {
        input: { param: { id: number } }
        output: FrontPort
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/interface-templates/': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            type?: string | undefined
            mgmt_only?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            q?: string | undefined
            devicetype_id?: string | undefined
            moduletype_id?: string | undefined
            poe_mode?: string | undefined
            poe_type?: string | undefined
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
            name__empty?: string | undefined
            type__n?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            devicetype_id__n?: string | undefined
            moduletype_id__n?: string | undefined
            poe_mode__n?: string | undefined
            poe_type__n?: string | undefined
            ordering?: string | undefined
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
      $patch: {
        input: { json: WritableInterfaceTemplate }
        output: InterfaceTemplate
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableInterfaceTemplate }
        output: InterfaceTemplate
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: WritableInterfaceTemplate }
        output: InterfaceTemplate
        outputFormat: 'json'
        status: 200
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
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            label?: string | undefined
            type?: string | undefined
            enabled?: string | undefined
            mtu?: string | undefined
            mgmt_only?: string | undefined
            poe_mode?: string | undefined
            poe_type?: string | undefined
            mode?: string | undefined
            rf_role?: string | undefined
            rf_channel?: string | undefined
            rf_channel_frequency?: string | undefined
            rf_channel_width?: string | undefined
            tx_power?: string | undefined
            description?: string | undefined
            cable_end?: string | undefined
            q?: string | undefined
            region_id?: string | undefined
            region?: string | undefined
            site_group_id?: string | undefined
            site_group?: string | undefined
            site_id?: string | undefined
            site?: string | undefined
            location_id?: string | undefined
            location?: string | undefined
            rack_id?: string | undefined
            rack?: string | undefined
            device_id?: string | undefined
            device?: string | undefined
            virtual_chassis_id?: string | undefined
            virtual_chassis?: string | undefined
            module_id?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            tag?: string | undefined
            cabled?: string | undefined
            occupied?: string | undefined
            connected?: string | undefined
            kind?: string | undefined
            parent_id?: string | undefined
            bridge_id?: string | undefined
            lag_id?: string | undefined
            speed?: string | undefined
            duplex?: string | undefined
            mac_address?: string | undefined
            wwn?: string | undefined
            vlan_id?: string | undefined
            vlan?: string | undefined
            vrf_id?: string | undefined
            vrf?: string | undefined
            vdc_id?: string | undefined
            vdc_identifier?: string | undefined
            vdc?: string | undefined
            l2vpn_id?: string | undefined
            l2vpn?: string | undefined
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
            name__empty?: string | undefined
            label__n?: string | undefined
            label__ic?: string | undefined
            label__nic?: string | undefined
            label__iew?: string | undefined
            label__niew?: string | undefined
            label__isw?: string | undefined
            label__nisw?: string | undefined
            label__ie?: string | undefined
            label__nie?: string | undefined
            label__empty?: string | undefined
            type__n?: string | undefined
            mtu__n?: string | undefined
            mtu__lte?: string | undefined
            mtu__lt?: string | undefined
            mtu__gte?: string | undefined
            mtu__gt?: string | undefined
            poe_mode__n?: string | undefined
            poe_type__n?: string | undefined
            mode__n?: string | undefined
            rf_role__n?: string | undefined
            rf_channel__n?: string | undefined
            rf_channel_frequency__n?: string | undefined
            rf_channel_frequency__lte?: string | undefined
            rf_channel_frequency__lt?: string | undefined
            rf_channel_frequency__gte?: string | undefined
            rf_channel_frequency__gt?: string | undefined
            rf_channel_width__n?: string | undefined
            rf_channel_width__lte?: string | undefined
            rf_channel_width__lt?: string | undefined
            rf_channel_width__gte?: string | undefined
            rf_channel_width__gt?: string | undefined
            tx_power__n?: string | undefined
            tx_power__lte?: string | undefined
            tx_power__lt?: string | undefined
            tx_power__gte?: string | undefined
            tx_power__gt?: string | undefined
            description__n?: string | undefined
            description__ic?: string | undefined
            description__nic?: string | undefined
            description__iew?: string | undefined
            description__niew?: string | undefined
            description__isw?: string | undefined
            description__nisw?: string | undefined
            description__ie?: string | undefined
            description__nie?: string | undefined
            description__empty?: string | undefined
            cable_end__n?: string | undefined
            region_id__n?: string | undefined
            region__n?: string | undefined
            site_group_id__n?: string | undefined
            site_group__n?: string | undefined
            site_id__n?: string | undefined
            site__n?: string | undefined
            location_id__n?: string | undefined
            location__n?: string | undefined
            rack_id__n?: string | undefined
            rack__n?: string | undefined
            virtual_chassis_id__n?: string | undefined
            virtual_chassis__n?: string | undefined
            module_id__n?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            parent_id__n?: string | undefined
            bridge_id__n?: string | undefined
            lag_id__n?: string | undefined
            speed__n?: string | undefined
            speed__lte?: string | undefined
            speed__lt?: string | undefined
            speed__gte?: string | undefined
            speed__gt?: string | undefined
            duplex__n?: string | undefined
            mac_address__n?: string | undefined
            mac_address__ic?: string | undefined
            mac_address__nic?: string | undefined
            mac_address__iew?: string | undefined
            mac_address__niew?: string | undefined
            mac_address__isw?: string | undefined
            mac_address__nisw?: string | undefined
            mac_address__ie?: string | undefined
            mac_address__nie?: string | undefined
            wwn__n?: string | undefined
            wwn__ic?: string | undefined
            wwn__nic?: string | undefined
            wwn__iew?: string | undefined
            wwn__niew?: string | undefined
            wwn__isw?: string | undefined
            wwn__nisw?: string | undefined
            wwn__ie?: string | undefined
            wwn__nie?: string | undefined
            vrf_id__n?: string | undefined
            vrf__n?: string | undefined
            vdc_id__n?: string | undefined
            vdc_identifier__n?: string | undefined
            vdc__n?: string | undefined
            l2vpn_id__n?: string | undefined
            l2vpn__n?: string | undefined
            ordering?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: Interface[]
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { json: WritableInterface }
        output: Interface
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableInterface }
        output: Interface
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: WritableInterface }
        output: Interface
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/interfaces/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: Interface
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: WritableInterface }
        output: Interface
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableInterface }
        output: Interface
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/interfaces/:id/trace/': {
      $get: {
        input: { param: { id: number } }
        output: Interface
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/inventory-item-roles/': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            slug?: string | undefined
            color?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
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
            name__empty?: string | undefined
            slug__n?: string | undefined
            slug__ic?: string | undefined
            slug__nic?: string | undefined
            slug__iew?: string | undefined
            slug__niew?: string | undefined
            slug__isw?: string | undefined
            slug__nisw?: string | undefined
            slug__ie?: string | undefined
            slug__nie?: string | undefined
            slug__empty?: string | undefined
            color__n?: string | undefined
            color__ic?: string | undefined
            color__nic?: string | undefined
            color__iew?: string | undefined
            color__niew?: string | undefined
            color__isw?: string | undefined
            color__nisw?: string | undefined
            color__ie?: string | undefined
            color__nie?: string | undefined
            color__empty?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            ordering?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: InventoryItemRole[]
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { json: InventoryItemRole }
        output: InventoryItemRole
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: InventoryItemRole }
        output: InventoryItemRole
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: InventoryItemRole }
        output: InventoryItemRole
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/inventory-item-roles/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: InventoryItemRole
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: InventoryItemRole }
        output: InventoryItemRole
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: InventoryItemRole }
        output: InventoryItemRole
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/inventory-item-templates/': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            label?: string | undefined
            part_id?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            q?: string | undefined
            devicetype_id?: string | undefined
            parent_id?: string | undefined
            manufacturer_id?: string | undefined
            manufacturer?: string | undefined
            role_id?: string | undefined
            role?: string | undefined
            component_type?: string | undefined
            component_id?: string | undefined
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
            name__empty?: string | undefined
            label__n?: string | undefined
            label__ic?: string | undefined
            label__nic?: string | undefined
            label__iew?: string | undefined
            label__niew?: string | undefined
            label__isw?: string | undefined
            label__nisw?: string | undefined
            label__ie?: string | undefined
            label__nie?: string | undefined
            label__empty?: string | undefined
            part_id__n?: string | undefined
            part_id__ic?: string | undefined
            part_id__nic?: string | undefined
            part_id__iew?: string | undefined
            part_id__niew?: string | undefined
            part_id__isw?: string | undefined
            part_id__nisw?: string | undefined
            part_id__ie?: string | undefined
            part_id__nie?: string | undefined
            part_id__empty?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            devicetype_id__n?: string | undefined
            parent_id__n?: string | undefined
            manufacturer_id__n?: string | undefined
            manufacturer__n?: string | undefined
            role_id__n?: string | undefined
            role__n?: string | undefined
            component_type__n?: string | undefined
            component_id__n?: string | undefined
            component_id__lte?: string | undefined
            component_id__lt?: string | undefined
            component_id__gte?: string | undefined
            component_id__gt?: string | undefined
            ordering?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: InventoryItemTemplate[]
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { json: WritableInventoryItemTemplate }
        output: InventoryItemTemplate
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableInventoryItemTemplate }
        output: InventoryItemTemplate
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: WritableInventoryItemTemplate }
        output: InventoryItemTemplate
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/inventory-item-templates/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: InventoryItemTemplate
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: WritableInventoryItemTemplate }
        output: InventoryItemTemplate
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableInventoryItemTemplate }
        output: InventoryItemTemplate
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/inventory-items/': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            label?: string | undefined
            part_id?: string | undefined
            asset_tag?: string | undefined
            discovered?: string | undefined
            q?: string | undefined
            region_id?: string | undefined
            region?: string | undefined
            site_group_id?: string | undefined
            site_group?: string | undefined
            site_id?: string | undefined
            site?: string | undefined
            location_id?: string | undefined
            location?: string | undefined
            rack_id?: string | undefined
            rack?: string | undefined
            device_id?: string | undefined
            device?: string | undefined
            virtual_chassis_id?: string | undefined
            virtual_chassis?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            tag?: string | undefined
            parent_id?: string | undefined
            manufacturer_id?: string | undefined
            manufacturer?: string | undefined
            role_id?: string | undefined
            role?: string | undefined
            component_type?: string | undefined
            component_id?: string | undefined
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
            name__empty?: string | undefined
            label__n?: string | undefined
            label__ic?: string | undefined
            label__nic?: string | undefined
            label__iew?: string | undefined
            label__niew?: string | undefined
            label__isw?: string | undefined
            label__nisw?: string | undefined
            label__ie?: string | undefined
            label__nie?: string | undefined
            label__empty?: string | undefined
            part_id__n?: string | undefined
            part_id__ic?: string | undefined
            part_id__nic?: string | undefined
            part_id__iew?: string | undefined
            part_id__niew?: string | undefined
            part_id__isw?: string | undefined
            part_id__nisw?: string | undefined
            part_id__ie?: string | undefined
            part_id__nie?: string | undefined
            part_id__empty?: string | undefined
            asset_tag__n?: string | undefined
            asset_tag__ic?: string | undefined
            asset_tag__nic?: string | undefined
            asset_tag__iew?: string | undefined
            asset_tag__niew?: string | undefined
            asset_tag__isw?: string | undefined
            asset_tag__nisw?: string | undefined
            asset_tag__ie?: string | undefined
            asset_tag__nie?: string | undefined
            asset_tag__empty?: string | undefined
            region_id__n?: string | undefined
            region__n?: string | undefined
            site_group_id__n?: string | undefined
            site_group__n?: string | undefined
            site_id__n?: string | undefined
            site__n?: string | undefined
            location_id__n?: string | undefined
            location__n?: string | undefined
            rack_id__n?: string | undefined
            rack__n?: string | undefined
            device_id__n?: string | undefined
            device__n?: string | undefined
            virtual_chassis_id__n?: string | undefined
            virtual_chassis__n?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            parent_id__n?: string | undefined
            manufacturer_id__n?: string | undefined
            manufacturer__n?: string | undefined
            role_id__n?: string | undefined
            role__n?: string | undefined
            component_type__n?: string | undefined
            component_id__n?: string | undefined
            component_id__lte?: string | undefined
            component_id__lt?: string | undefined
            component_id__gte?: string | undefined
            component_id__gt?: string | undefined
            serial__n?: string | undefined
            serial__ic?: string | undefined
            serial__nic?: string | undefined
            serial__iew?: string | undefined
            serial__niew?: string | undefined
            serial__isw?: string | undefined
            serial__nisw?: string | undefined
            serial__ie?: string | undefined
            serial__nie?: string | undefined
            serial__empty?: string | undefined
            ordering?: string | undefined
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
      $patch: {
        input: { json: WritableInventoryItem }
        output: InventoryItem
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableInventoryItem }
        output: InventoryItem
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: WritableInventoryItem }
        output: InventoryItem
        outputFormat: 'json'
        status: 200
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
    '/dcim/locations/': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            slug?: string | undefined
            status?: string | undefined
            description?: string | undefined
            tenant_group_id?: string | undefined
            tenant_group?: string | undefined
            tenant_id?: string | undefined
            tenant?: string | undefined
            contact?: string | undefined
            contact_role?: string | undefined
            contact_group?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            q?: string | undefined
            tag?: string | undefined
            region_id?: string | undefined
            region?: string | undefined
            site_group_id?: string | undefined
            site_group?: string | undefined
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
            name__empty?: string | undefined
            slug__n?: string | undefined
            slug__ic?: string | undefined
            slug__nic?: string | undefined
            slug__iew?: string | undefined
            slug__niew?: string | undefined
            slug__isw?: string | undefined
            slug__nisw?: string | undefined
            slug__ie?: string | undefined
            slug__nie?: string | undefined
            slug__empty?: string | undefined
            status__n?: string | undefined
            description__n?: string | undefined
            description__ic?: string | undefined
            description__nic?: string | undefined
            description__iew?: string | undefined
            description__niew?: string | undefined
            description__isw?: string | undefined
            description__nisw?: string | undefined
            description__ie?: string | undefined
            description__nie?: string | undefined
            description__empty?: string | undefined
            tenant_group_id__n?: string | undefined
            tenant_group__n?: string | undefined
            tenant_id__n?: string | undefined
            tenant__n?: string | undefined
            contact__n?: string | undefined
            contact_role__n?: string | undefined
            contact_group__n?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            region_id__n?: string | undefined
            region__n?: string | undefined
            site_group_id__n?: string | undefined
            site_group__n?: string | undefined
            site_id__n?: string | undefined
            site__n?: string | undefined
            parent_id__n?: string | undefined
            parent__n?: string | undefined
            ordering?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: Location[]
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { json: WritableLocation }
        output: Location
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableLocation }
        output: Location
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: WritableLocation }
        output: Location
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/locations/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: Location
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: WritableLocation }
        output: Location
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableLocation }
        output: Location
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/manufacturers/': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            slug?: string | undefined
            description?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            q?: string | undefined
            tag?: string | undefined
            contact?: string | undefined
            contact_role?: string | undefined
            contact_group?: string | undefined
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
            name__empty?: string | undefined
            slug__n?: string | undefined
            slug__ic?: string | undefined
            slug__nic?: string | undefined
            slug__iew?: string | undefined
            slug__niew?: string | undefined
            slug__isw?: string | undefined
            slug__nisw?: string | undefined
            slug__ie?: string | undefined
            slug__nie?: string | undefined
            slug__empty?: string | undefined
            description__n?: string | undefined
            description__ic?: string | undefined
            description__nic?: string | undefined
            description__iew?: string | undefined
            description__niew?: string | undefined
            description__isw?: string | undefined
            description__nisw?: string | undefined
            description__ie?: string | undefined
            description__nie?: string | undefined
            description__empty?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            contact__n?: string | undefined
            contact_role__n?: string | undefined
            contact_group__n?: string | undefined
            ordering?: string | undefined
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
      $patch: {
        input: { json: Manufacturer }
        output: Manufacturer
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: Manufacturer }
        output: Manufacturer
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: Manufacturer }
        output: Manufacturer
        outputFormat: 'json'
        status: 200
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
    '/dcim/module-bay-templates/': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
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
            name__empty?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            devicetype_id__n?: string | undefined
            ordering?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: ModuleBayTemplate[]
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { json: WritableModuleBayTemplate }
        output: ModuleBayTemplate
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableModuleBayTemplate }
        output: ModuleBayTemplate
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: WritableModuleBayTemplate }
        output: ModuleBayTemplate
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/module-bay-templates/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: ModuleBayTemplate
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: WritableModuleBayTemplate }
        output: ModuleBayTemplate
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableModuleBayTemplate }
        output: ModuleBayTemplate
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/module-bays/': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            label?: string | undefined
            description?: string | undefined
            q?: string | undefined
            region_id?: string | undefined
            region?: string | undefined
            site_group_id?: string | undefined
            site_group?: string | undefined
            site_id?: string | undefined
            site?: string | undefined
            location_id?: string | undefined
            location?: string | undefined
            rack_id?: string | undefined
            rack?: string | undefined
            device_id?: string | undefined
            device?: string | undefined
            virtual_chassis_id?: string | undefined
            virtual_chassis?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
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
            name__empty?: string | undefined
            label__n?: string | undefined
            label__ic?: string | undefined
            label__nic?: string | undefined
            label__iew?: string | undefined
            label__niew?: string | undefined
            label__isw?: string | undefined
            label__nisw?: string | undefined
            label__ie?: string | undefined
            label__nie?: string | undefined
            label__empty?: string | undefined
            description__n?: string | undefined
            description__ic?: string | undefined
            description__nic?: string | undefined
            description__iew?: string | undefined
            description__niew?: string | undefined
            description__isw?: string | undefined
            description__nisw?: string | undefined
            description__ie?: string | undefined
            description__nie?: string | undefined
            description__empty?: string | undefined
            region_id__n?: string | undefined
            region__n?: string | undefined
            site_group_id__n?: string | undefined
            site_group__n?: string | undefined
            site_id__n?: string | undefined
            site__n?: string | undefined
            location_id__n?: string | undefined
            location__n?: string | undefined
            rack_id__n?: string | undefined
            rack__n?: string | undefined
            device_id__n?: string | undefined
            device__n?: string | undefined
            virtual_chassis_id__n?: string | undefined
            virtual_chassis__n?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            ordering?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: ModuleBay[]
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { json: WritableModuleBay }
        output: ModuleBay
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableModuleBay }
        output: ModuleBay
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: WritableModuleBay }
        output: ModuleBay
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/module-bays/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: ModuleBay
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: WritableModuleBay }
        output: ModuleBay
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableModuleBay }
        output: ModuleBay
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/module-types/': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            model?: string | undefined
            part_number?: string | undefined
            weight?: string | undefined
            weight_unit?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            q?: string | undefined
            tag?: string | undefined
            manufacturer_id?: string | undefined
            manufacturer?: string | undefined
            console_ports?: string | undefined
            console_server_ports?: string | undefined
            power_ports?: string | undefined
            power_outlets?: string | undefined
            interfaces?: string | undefined
            pass_through_ports?: string | undefined
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
            model__empty?: string | undefined
            part_number__n?: string | undefined
            part_number__ic?: string | undefined
            part_number__nic?: string | undefined
            part_number__iew?: string | undefined
            part_number__niew?: string | undefined
            part_number__isw?: string | undefined
            part_number__nisw?: string | undefined
            part_number__ie?: string | undefined
            part_number__nie?: string | undefined
            part_number__empty?: string | undefined
            weight__n?: string | undefined
            weight__lte?: string | undefined
            weight__lt?: string | undefined
            weight__gte?: string | undefined
            weight__gt?: string | undefined
            weight_unit__n?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            manufacturer_id__n?: string | undefined
            manufacturer__n?: string | undefined
            ordering?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: ModuleType[]
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { json: WritableModuleType }
        output: ModuleType
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableModuleType }
        output: ModuleType
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: WritableModuleType }
        output: ModuleType
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/module-types/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: ModuleType
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: WritableModuleType }
        output: ModuleType
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableModuleType }
        output: ModuleType
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/modules/': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            status?: string | undefined
            asset_tag?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            q?: string | undefined
            tag?: string | undefined
            manufacturer_id?: string | undefined
            manufacturer?: string | undefined
            module_type_id?: string | undefined
            module_type?: string | undefined
            module_bay_id?: string | undefined
            device_id?: string | undefined
            serial?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            status__n?: string | undefined
            asset_tag__n?: string | undefined
            asset_tag__ic?: string | undefined
            asset_tag__nic?: string | undefined
            asset_tag__iew?: string | undefined
            asset_tag__niew?: string | undefined
            asset_tag__isw?: string | undefined
            asset_tag__nisw?: string | undefined
            asset_tag__ie?: string | undefined
            asset_tag__nie?: string | undefined
            asset_tag__empty?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            manufacturer_id__n?: string | undefined
            manufacturer__n?: string | undefined
            module_type_id__n?: string | undefined
            module_type__n?: string | undefined
            module_bay_id__n?: string | undefined
            device_id__n?: string | undefined
            serial__n?: string | undefined
            serial__ic?: string | undefined
            serial__nic?: string | undefined
            serial__iew?: string | undefined
            serial__niew?: string | undefined
            serial__isw?: string | undefined
            serial__nisw?: string | undefined
            serial__ie?: string | undefined
            serial__nie?: string | undefined
            serial__empty?: string | undefined
            ordering?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: Module[]
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: { input: { json: WritableModule }; output: Module; outputFormat: 'json'; status: 200 }
      $post: { input: { json: WritableModule }; output: Module; outputFormat: 'json'; status: 201 }
      $put: { input: { json: WritableModule }; output: Module; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/dcim/modules/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: { input: { param: { id: number } }; output: Module; outputFormat: 'json'; status: 200 }
      $patch: {
        input: { param: { id: number } } & { json: WritableModule }
        output: Module
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableModule }
        output: Module
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/platforms/': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            slug?: string | undefined
            napalm_driver?: string | undefined
            description?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            q?: string | undefined
            tag?: string | undefined
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
            name__empty?: string | undefined
            slug__n?: string | undefined
            slug__ic?: string | undefined
            slug__nic?: string | undefined
            slug__iew?: string | undefined
            slug__niew?: string | undefined
            slug__isw?: string | undefined
            slug__nisw?: string | undefined
            slug__ie?: string | undefined
            slug__nie?: string | undefined
            slug__empty?: string | undefined
            napalm_driver__n?: string | undefined
            napalm_driver__ic?: string | undefined
            napalm_driver__nic?: string | undefined
            napalm_driver__iew?: string | undefined
            napalm_driver__niew?: string | undefined
            napalm_driver__isw?: string | undefined
            napalm_driver__nisw?: string | undefined
            napalm_driver__ie?: string | undefined
            napalm_driver__nie?: string | undefined
            napalm_driver__empty?: string | undefined
            description__n?: string | undefined
            description__ic?: string | undefined
            description__nic?: string | undefined
            description__iew?: string | undefined
            description__niew?: string | undefined
            description__isw?: string | undefined
            description__nisw?: string | undefined
            description__ie?: string | undefined
            description__nie?: string | undefined
            description__empty?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            manufacturer_id__n?: string | undefined
            manufacturer__n?: string | undefined
            ordering?: string | undefined
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
      $patch: {
        input: { json: WritablePlatform }
        output: Platform
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritablePlatform }
        output: Platform
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: WritablePlatform }
        output: Platform
        outputFormat: 'json'
        status: 200
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
    '/dcim/power-feeds/': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
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
            cable_end?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            q?: string | undefined
            tag?: string | undefined
            cabled?: string | undefined
            occupied?: string | undefined
            connected?: string | undefined
            region_id?: string | undefined
            region?: string | undefined
            site_group_id?: string | undefined
            site_group?: string | undefined
            site_id?: string | undefined
            site?: string | undefined
            power_panel_id?: string | undefined
            rack_id?: string | undefined
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
            name__empty?: string | undefined
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
            cable_end__n?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            region_id__n?: string | undefined
            region__n?: string | undefined
            site_group_id__n?: string | undefined
            site_group__n?: string | undefined
            site_id__n?: string | undefined
            site__n?: string | undefined
            power_panel_id__n?: string | undefined
            rack_id__n?: string | undefined
            ordering?: string | undefined
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
      $patch: {
        input: { json: WritablePowerFeed }
        output: PowerFeed
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritablePowerFeed }
        output: PowerFeed
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: WritablePowerFeed }
        output: PowerFeed
        outputFormat: 'json'
        status: 200
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
    '/dcim/power-feeds/:id/trace/': {
      $get: {
        input: { param: { id: number } }
        output: PowerFeed
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/power-outlet-templates/': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            type?: string | undefined
            feed_leg?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            q?: string | undefined
            devicetype_id?: string | undefined
            moduletype_id?: string | undefined
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
            name__empty?: string | undefined
            type__n?: string | undefined
            feed_leg__n?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            devicetype_id__n?: string | undefined
            moduletype_id__n?: string | undefined
            ordering?: string | undefined
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
      $patch: {
        input: { json: WritablePowerOutletTemplate }
        output: PowerOutletTemplate
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritablePowerOutletTemplate }
        output: PowerOutletTemplate
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: WritablePowerOutletTemplate }
        output: PowerOutletTemplate
        outputFormat: 'json'
        status: 200
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
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            label?: string | undefined
            feed_leg?: string | undefined
            description?: string | undefined
            cable_end?: string | undefined
            q?: string | undefined
            region_id?: string | undefined
            region?: string | undefined
            site_group_id?: string | undefined
            site_group?: string | undefined
            site_id?: string | undefined
            site?: string | undefined
            location_id?: string | undefined
            location?: string | undefined
            rack_id?: string | undefined
            rack?: string | undefined
            device_id?: string | undefined
            device?: string | undefined
            virtual_chassis_id?: string | undefined
            virtual_chassis?: string | undefined
            module_id?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            tag?: string | undefined
            cabled?: string | undefined
            occupied?: string | undefined
            connected?: string | undefined
            type?: string | undefined
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
            name__empty?: string | undefined
            label__n?: string | undefined
            label__ic?: string | undefined
            label__nic?: string | undefined
            label__iew?: string | undefined
            label__niew?: string | undefined
            label__isw?: string | undefined
            label__nisw?: string | undefined
            label__ie?: string | undefined
            label__nie?: string | undefined
            label__empty?: string | undefined
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
            description__empty?: string | undefined
            cable_end__n?: string | undefined
            region_id__n?: string | undefined
            region__n?: string | undefined
            site_group_id__n?: string | undefined
            site_group__n?: string | undefined
            site_id__n?: string | undefined
            site__n?: string | undefined
            location_id__n?: string | undefined
            location__n?: string | undefined
            rack_id__n?: string | undefined
            rack__n?: string | undefined
            device_id__n?: string | undefined
            device__n?: string | undefined
            virtual_chassis_id__n?: string | undefined
            virtual_chassis__n?: string | undefined
            module_id__n?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            type__n?: string | undefined
            ordering?: string | undefined
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
      $patch: {
        input: { json: WritablePowerOutlet }
        output: PowerOutlet
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritablePowerOutlet }
        output: PowerOutlet
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: WritablePowerOutlet }
        output: PowerOutlet
        outputFormat: 'json'
        status: 200
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
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            q?: string | undefined
            tag?: string | undefined
            contact?: string | undefined
            contact_role?: string | undefined
            contact_group?: string | undefined
            region_id?: string | undefined
            region?: string | undefined
            site_group_id?: string | undefined
            site_group?: string | undefined
            site_id?: string | undefined
            site?: string | undefined
            location_id?: string | undefined
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
            name__empty?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            contact__n?: string | undefined
            contact_role__n?: string | undefined
            contact_group__n?: string | undefined
            region_id__n?: string | undefined
            region__n?: string | undefined
            site_group_id__n?: string | undefined
            site_group__n?: string | undefined
            site_id__n?: string | undefined
            site__n?: string | undefined
            location_id__n?: string | undefined
            ordering?: string | undefined
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
      $patch: {
        input: { json: WritablePowerPanel }
        output: PowerPanel
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritablePowerPanel }
        output: PowerPanel
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: WritablePowerPanel }
        output: PowerPanel
        outputFormat: 'json'
        status: 200
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
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            type?: string | undefined
            maximum_draw?: string | undefined
            allocated_draw?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            q?: string | undefined
            devicetype_id?: string | undefined
            moduletype_id?: string | undefined
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
            name__empty?: string | undefined
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
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            devicetype_id__n?: string | undefined
            moduletype_id__n?: string | undefined
            ordering?: string | undefined
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
      $patch: {
        input: { json: WritablePowerPortTemplate }
        output: PowerPortTemplate
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritablePowerPortTemplate }
        output: PowerPortTemplate
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: WritablePowerPortTemplate }
        output: PowerPortTemplate
        outputFormat: 'json'
        status: 200
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
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            label?: string | undefined
            maximum_draw?: string | undefined
            allocated_draw?: string | undefined
            description?: string | undefined
            cable_end?: string | undefined
            q?: string | undefined
            region_id?: string | undefined
            region?: string | undefined
            site_group_id?: string | undefined
            site_group?: string | undefined
            site_id?: string | undefined
            site?: string | undefined
            location_id?: string | undefined
            location?: string | undefined
            rack_id?: string | undefined
            rack?: string | undefined
            device_id?: string | undefined
            device?: string | undefined
            virtual_chassis_id?: string | undefined
            virtual_chassis?: string | undefined
            module_id?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            tag?: string | undefined
            cabled?: string | undefined
            occupied?: string | undefined
            connected?: string | undefined
            type?: string | undefined
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
            name__empty?: string | undefined
            label__n?: string | undefined
            label__ic?: string | undefined
            label__nic?: string | undefined
            label__iew?: string | undefined
            label__niew?: string | undefined
            label__isw?: string | undefined
            label__nisw?: string | undefined
            label__ie?: string | undefined
            label__nie?: string | undefined
            label__empty?: string | undefined
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
            description__empty?: string | undefined
            cable_end__n?: string | undefined
            region_id__n?: string | undefined
            region__n?: string | undefined
            site_group_id__n?: string | undefined
            site_group__n?: string | undefined
            site_id__n?: string | undefined
            site__n?: string | undefined
            location_id__n?: string | undefined
            location__n?: string | undefined
            rack_id__n?: string | undefined
            rack__n?: string | undefined
            device_id__n?: string | undefined
            device__n?: string | undefined
            virtual_chassis_id__n?: string | undefined
            virtual_chassis__n?: string | undefined
            module_id__n?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            type__n?: string | undefined
            ordering?: string | undefined
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
      $patch: {
        input: { json: WritablePowerPort }
        output: PowerPort
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritablePowerPort }
        output: PowerPort
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: WritablePowerPort }
        output: PowerPort
        outputFormat: 'json'
        status: 200
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
    '/dcim/rack-reservations/': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            created?: string | undefined
            description?: string | undefined
            last_updated?: string | undefined
            q?: string | undefined
            tag?: string | undefined
            tenant_group_id?: string | undefined
            tenant_group?: string | undefined
            tenant_id?: string | undefined
            tenant?: string | undefined
            rack_id?: string | undefined
            site_id?: string | undefined
            site?: string | undefined
            region_id?: string | undefined
            region?: string | undefined
            site_group_id?: string | undefined
            site_group?: string | undefined
            location_id?: string | undefined
            location?: string | undefined
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
            description__n?: string | undefined
            description__ic?: string | undefined
            description__nic?: string | undefined
            description__iew?: string | undefined
            description__niew?: string | undefined
            description__isw?: string | undefined
            description__nisw?: string | undefined
            description__ie?: string | undefined
            description__nie?: string | undefined
            description__empty?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            tenant_group_id__n?: string | undefined
            tenant_group__n?: string | undefined
            tenant_id__n?: string | undefined
            tenant__n?: string | undefined
            rack_id__n?: string | undefined
            site_id__n?: string | undefined
            site__n?: string | undefined
            region_id__n?: string | undefined
            region__n?: string | undefined
            site_group_id__n?: string | undefined
            site_group__n?: string | undefined
            location_id__n?: string | undefined
            location__n?: string | undefined
            user_id__n?: string | undefined
            user__n?: string | undefined
            ordering?: string | undefined
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
      $patch: {
        input: { json: WritableRackReservation }
        output: RackReservation
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableRackReservation }
        output: RackReservation
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: WritableRackReservation }
        output: RackReservation
        outputFormat: 'json'
        status: 200
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
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            slug?: string | undefined
            color?: string | undefined
            description?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
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
            name__empty?: string | undefined
            slug__n?: string | undefined
            slug__ic?: string | undefined
            slug__nic?: string | undefined
            slug__iew?: string | undefined
            slug__niew?: string | undefined
            slug__isw?: string | undefined
            slug__nisw?: string | undefined
            slug__ie?: string | undefined
            slug__nie?: string | undefined
            slug__empty?: string | undefined
            color__n?: string | undefined
            color__ic?: string | undefined
            color__nic?: string | undefined
            color__iew?: string | undefined
            color__niew?: string | undefined
            color__isw?: string | undefined
            color__nisw?: string | undefined
            color__ie?: string | undefined
            color__nie?: string | undefined
            color__empty?: string | undefined
            description__n?: string | undefined
            description__ic?: string | undefined
            description__nic?: string | undefined
            description__iew?: string | undefined
            description__niew?: string | undefined
            description__isw?: string | undefined
            description__nisw?: string | undefined
            description__ie?: string | undefined
            description__nie?: string | undefined
            description__empty?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            ordering?: string | undefined
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
      $patch: { input: { json: RackRole }; output: RackRole; outputFormat: 'json'; status: 200 }
      $post: { input: { json: RackRole }; output: RackRole; outputFormat: 'json'; status: 201 }
      $put: { input: { json: RackRole }; output: RackRole; outputFormat: 'json'; status: 200 }
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
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            facility_id?: string | undefined
            asset_tag?: string | undefined
            u_height?: string | undefined
            desc_units?: string | undefined
            outer_width?: string | undefined
            outer_depth?: string | undefined
            outer_unit?: string | undefined
            mounting_depth?: string | undefined
            weight?: string | undefined
            max_weight?: string | undefined
            weight_unit?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            q?: string | undefined
            tag?: string | undefined
            tenant_group_id?: string | undefined
            tenant_group?: string | undefined
            tenant_id?: string | undefined
            tenant?: string | undefined
            contact?: string | undefined
            contact_role?: string | undefined
            contact_group?: string | undefined
            region_id?: string | undefined
            region?: string | undefined
            site_group_id?: string | undefined
            site_group?: string | undefined
            site_id?: string | undefined
            site?: string | undefined
            location_id?: string | undefined
            location?: string | undefined
            status?: string | undefined
            type?: string | undefined
            width?: string | undefined
            role_id?: string | undefined
            role?: string | undefined
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
            name__empty?: string | undefined
            facility_id__n?: string | undefined
            facility_id__ic?: string | undefined
            facility_id__nic?: string | undefined
            facility_id__iew?: string | undefined
            facility_id__niew?: string | undefined
            facility_id__isw?: string | undefined
            facility_id__nisw?: string | undefined
            facility_id__ie?: string | undefined
            facility_id__nie?: string | undefined
            facility_id__empty?: string | undefined
            asset_tag__n?: string | undefined
            asset_tag__ic?: string | undefined
            asset_tag__nic?: string | undefined
            asset_tag__iew?: string | undefined
            asset_tag__niew?: string | undefined
            asset_tag__isw?: string | undefined
            asset_tag__nisw?: string | undefined
            asset_tag__ie?: string | undefined
            asset_tag__nie?: string | undefined
            asset_tag__empty?: string | undefined
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
            mounting_depth__n?: string | undefined
            mounting_depth__lte?: string | undefined
            mounting_depth__lt?: string | undefined
            mounting_depth__gte?: string | undefined
            mounting_depth__gt?: string | undefined
            weight__n?: string | undefined
            weight__lte?: string | undefined
            weight__lt?: string | undefined
            weight__gte?: string | undefined
            weight__gt?: string | undefined
            max_weight__n?: string | undefined
            max_weight__lte?: string | undefined
            max_weight__lt?: string | undefined
            max_weight__gte?: string | undefined
            max_weight__gt?: string | undefined
            weight_unit__n?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            tenant_group_id__n?: string | undefined
            tenant_group__n?: string | undefined
            tenant_id__n?: string | undefined
            tenant__n?: string | undefined
            contact__n?: string | undefined
            contact_role__n?: string | undefined
            contact_group__n?: string | undefined
            region_id__n?: string | undefined
            region__n?: string | undefined
            site_group_id__n?: string | undefined
            site_group__n?: string | undefined
            site_id__n?: string | undefined
            site__n?: string | undefined
            location_id__n?: string | undefined
            location__n?: string | undefined
            status__n?: string | undefined
            type__n?: string | undefined
            width__n?: string | undefined
            role_id__n?: string | undefined
            role__n?: string | undefined
            serial__n?: string | undefined
            serial__ic?: string | undefined
            serial__nic?: string | undefined
            serial__iew?: string | undefined
            serial__niew?: string | undefined
            serial__isw?: string | undefined
            serial__nisw?: string | undefined
            serial__ie?: string | undefined
            serial__nie?: string | undefined
            serial__empty?: string | undefined
            ordering?: string | undefined
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
      $patch: { input: { json: WritableRack }; output: Rack; outputFormat: 'json'; status: 200 }
      $post: { input: { json: WritableRack }; output: Rack; outputFormat: 'json'; status: 201 }
      $put: { input: { json: WritableRack }; output: Rack; outputFormat: 'json'; status: 200 }
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
            margin_width?: number | undefined
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
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            type?: string | undefined
            color?: string | undefined
            positions?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            q?: string | undefined
            devicetype_id?: string | undefined
            moduletype_id?: string | undefined
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
            name__empty?: string | undefined
            type__n?: string | undefined
            color__n?: string | undefined
            color__ic?: string | undefined
            color__nic?: string | undefined
            color__iew?: string | undefined
            color__niew?: string | undefined
            color__isw?: string | undefined
            color__nisw?: string | undefined
            color__ie?: string | undefined
            color__nie?: string | undefined
            color__empty?: string | undefined
            positions__n?: string | undefined
            positions__lte?: string | undefined
            positions__lt?: string | undefined
            positions__gte?: string | undefined
            positions__gt?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            devicetype_id__n?: string | undefined
            moduletype_id__n?: string | undefined
            ordering?: string | undefined
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
      $patch: {
        input: { json: WritableRearPortTemplate }
        output: RearPortTemplate
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableRearPortTemplate }
        output: RearPortTemplate
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: WritableRearPortTemplate }
        output: RearPortTemplate
        outputFormat: 'json'
        status: 200
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
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            label?: string | undefined
            type?: string | undefined
            color?: string | undefined
            positions?: string | undefined
            description?: string | undefined
            cable_end?: string | undefined
            q?: string | undefined
            region_id?: string | undefined
            region?: string | undefined
            site_group_id?: string | undefined
            site_group?: string | undefined
            site_id?: string | undefined
            site?: string | undefined
            location_id?: string | undefined
            location?: string | undefined
            rack_id?: string | undefined
            rack?: string | undefined
            device_id?: string | undefined
            device?: string | undefined
            virtual_chassis_id?: string | undefined
            virtual_chassis?: string | undefined
            module_id?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            tag?: string | undefined
            cabled?: string | undefined
            occupied?: string | undefined
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
            name__empty?: string | undefined
            label__n?: string | undefined
            label__ic?: string | undefined
            label__nic?: string | undefined
            label__iew?: string | undefined
            label__niew?: string | undefined
            label__isw?: string | undefined
            label__nisw?: string | undefined
            label__ie?: string | undefined
            label__nie?: string | undefined
            label__empty?: string | undefined
            type__n?: string | undefined
            color__n?: string | undefined
            color__ic?: string | undefined
            color__nic?: string | undefined
            color__iew?: string | undefined
            color__niew?: string | undefined
            color__isw?: string | undefined
            color__nisw?: string | undefined
            color__ie?: string | undefined
            color__nie?: string | undefined
            color__empty?: string | undefined
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
            description__empty?: string | undefined
            cable_end__n?: string | undefined
            region_id__n?: string | undefined
            region__n?: string | undefined
            site_group_id__n?: string | undefined
            site_group__n?: string | undefined
            site_id__n?: string | undefined
            site__n?: string | undefined
            location_id__n?: string | undefined
            location__n?: string | undefined
            rack_id__n?: string | undefined
            rack__n?: string | undefined
            device_id__n?: string | undefined
            device__n?: string | undefined
            virtual_chassis_id__n?: string | undefined
            virtual_chassis__n?: string | undefined
            module_id__n?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            ordering?: string | undefined
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
      $patch: {
        input: { json: WritableRearPort }
        output: RearPort
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableRearPort }
        output: RearPort
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: WritableRearPort }
        output: RearPort
        outputFormat: 'json'
        status: 200
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
    '/dcim/rear-ports/:id/paths/': {
      $get: {
        input: { param: { id: number } }
        output: RearPort
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/regions/': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            slug?: string | undefined
            description?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            q?: string | undefined
            tag?: string | undefined
            contact?: string | undefined
            contact_role?: string | undefined
            contact_group?: string | undefined
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
            name__empty?: string | undefined
            slug__n?: string | undefined
            slug__ic?: string | undefined
            slug__nic?: string | undefined
            slug__iew?: string | undefined
            slug__niew?: string | undefined
            slug__isw?: string | undefined
            slug__nisw?: string | undefined
            slug__ie?: string | undefined
            slug__nie?: string | undefined
            slug__empty?: string | undefined
            description__n?: string | undefined
            description__ic?: string | undefined
            description__nic?: string | undefined
            description__iew?: string | undefined
            description__niew?: string | undefined
            description__isw?: string | undefined
            description__nisw?: string | undefined
            description__ie?: string | undefined
            description__nie?: string | undefined
            description__empty?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            contact__n?: string | undefined
            contact_role__n?: string | undefined
            contact_group__n?: string | undefined
            parent_id__n?: string | undefined
            parent__n?: string | undefined
            ordering?: string | undefined
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
      $patch: { input: { json: WritableRegion }; output: Region; outputFormat: 'json'; status: 200 }
      $post: { input: { json: WritableRegion }; output: Region; outputFormat: 'json'; status: 201 }
      $put: { input: { json: WritableRegion }; output: Region; outputFormat: 'json'; status: 200 }
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
    '/dcim/site-groups/': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            slug?: string | undefined
            description?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            q?: string | undefined
            tag?: string | undefined
            contact?: string | undefined
            contact_role?: string | undefined
            contact_group?: string | undefined
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
            name__empty?: string | undefined
            slug__n?: string | undefined
            slug__ic?: string | undefined
            slug__nic?: string | undefined
            slug__iew?: string | undefined
            slug__niew?: string | undefined
            slug__isw?: string | undefined
            slug__nisw?: string | undefined
            slug__ie?: string | undefined
            slug__nie?: string | undefined
            slug__empty?: string | undefined
            description__n?: string | undefined
            description__ic?: string | undefined
            description__nic?: string | undefined
            description__iew?: string | undefined
            description__niew?: string | undefined
            description__isw?: string | undefined
            description__nisw?: string | undefined
            description__ie?: string | undefined
            description__nie?: string | undefined
            description__empty?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            contact__n?: string | undefined
            contact_role__n?: string | undefined
            contact_group__n?: string | undefined
            parent_id__n?: string | undefined
            parent__n?: string | undefined
            ordering?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: SiteGroup[]
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { json: WritableSiteGroup }
        output: SiteGroup
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableSiteGroup }
        output: SiteGroup
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: WritableSiteGroup }
        output: SiteGroup
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/site-groups/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: SiteGroup
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: WritableSiteGroup }
        output: SiteGroup
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableSiteGroup }
        output: SiteGroup
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/sites/': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            slug?: string | undefined
            facility?: string | undefined
            latitude?: string | undefined
            longitude?: string | undefined
            description?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            q?: string | undefined
            tag?: string | undefined
            tenant_group_id?: string | undefined
            tenant_group?: string | undefined
            tenant_id?: string | undefined
            tenant?: string | undefined
            contact?: string | undefined
            contact_role?: string | undefined
            contact_group?: string | undefined
            status?: string | undefined
            region_id?: string | undefined
            region?: string | undefined
            group_id?: string | undefined
            group?: string | undefined
            asn?: string | undefined
            asn_id?: string | undefined
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
            name__empty?: string | undefined
            slug__n?: string | undefined
            slug__ic?: string | undefined
            slug__nic?: string | undefined
            slug__iew?: string | undefined
            slug__niew?: string | undefined
            slug__isw?: string | undefined
            slug__nisw?: string | undefined
            slug__ie?: string | undefined
            slug__nie?: string | undefined
            slug__empty?: string | undefined
            facility__n?: string | undefined
            facility__ic?: string | undefined
            facility__nic?: string | undefined
            facility__iew?: string | undefined
            facility__niew?: string | undefined
            facility__isw?: string | undefined
            facility__nisw?: string | undefined
            facility__ie?: string | undefined
            facility__nie?: string | undefined
            facility__empty?: string | undefined
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
            description__n?: string | undefined
            description__ic?: string | undefined
            description__nic?: string | undefined
            description__iew?: string | undefined
            description__niew?: string | undefined
            description__isw?: string | undefined
            description__nisw?: string | undefined
            description__ie?: string | undefined
            description__nie?: string | undefined
            description__empty?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            tenant_group_id__n?: string | undefined
            tenant_group__n?: string | undefined
            tenant_id__n?: string | undefined
            tenant__n?: string | undefined
            contact__n?: string | undefined
            contact_role__n?: string | undefined
            contact_group__n?: string | undefined
            status__n?: string | undefined
            region_id__n?: string | undefined
            region__n?: string | undefined
            group_id__n?: string | undefined
            group__n?: string | undefined
            asn__n?: string | undefined
            asn_id__n?: string | undefined
            ordering?: string | undefined
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
      $patch: { input: { json: WritableSite }; output: Site; outputFormat: 'json'; status: 200 }
      $post: { input: { json: WritableSite }; output: Site; outputFormat: 'json'; status: 201 }
      $put: { input: { json: WritableSite }; output: Site; outputFormat: 'json'; status: 200 }
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
    '/dcim/virtual-chassis/': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            domain?: string | undefined
            name?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            q?: string | undefined
            tag?: string | undefined
            master_id?: string | undefined
            master?: string | undefined
            region_id?: string | undefined
            region?: string | undefined
            site_group_id?: string | undefined
            site_group?: string | undefined
            site_id?: string | undefined
            site?: string | undefined
            tenant_id?: string | undefined
            tenant?: string | undefined
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
            domain__empty?: string | undefined
            name__n?: string | undefined
            name__ic?: string | undefined
            name__nic?: string | undefined
            name__iew?: string | undefined
            name__niew?: string | undefined
            name__isw?: string | undefined
            name__nisw?: string | undefined
            name__ie?: string | undefined
            name__nie?: string | undefined
            name__empty?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            master_id__n?: string | undefined
            master__n?: string | undefined
            region_id__n?: string | undefined
            region__n?: string | undefined
            site_group_id__n?: string | undefined
            site_group__n?: string | undefined
            site_id__n?: string | undefined
            site__n?: string | undefined
            tenant_id__n?: string | undefined
            tenant__n?: string | undefined
            ordering?: string | undefined
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
      $patch: {
        input: { json: WritableVirtualChassis }
        output: VirtualChassis
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableVirtualChassis }
        output: VirtualChassis
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: WritableVirtualChassis }
        output: VirtualChassis
        outputFormat: 'json'
        status: 200
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
    '/dcim/virtual-device-contexts/': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            device?: string | undefined
            name?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            q?: string | undefined
            tag?: string | undefined
            tenant_group_id?: string | undefined
            tenant_group?: string | undefined
            tenant_id?: string | undefined
            tenant?: string | undefined
            device_id?: string | undefined
            status?: string | undefined
            has_primary_ip?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            device__n?: string | undefined
            name__n?: string | undefined
            name__ic?: string | undefined
            name__nic?: string | undefined
            name__iew?: string | undefined
            name__niew?: string | undefined
            name__isw?: string | undefined
            name__nisw?: string | undefined
            name__ie?: string | undefined
            name__nie?: string | undefined
            name__empty?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            tenant_group_id__n?: string | undefined
            tenant_group__n?: string | undefined
            tenant_id__n?: string | undefined
            tenant__n?: string | undefined
            device_id__n?: string | undefined
            status__n?: string | undefined
            ordering?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: VirtualDeviceContext[]
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { json: WritableVirtualDeviceContext }
        output: VirtualDeviceContext
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableVirtualDeviceContext }
        output: VirtualDeviceContext
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: WritableVirtualDeviceContext }
        output: VirtualDeviceContext
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dcim/virtual-device-contexts/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: VirtualDeviceContext
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: WritableVirtualDeviceContext }
        output: VirtualDeviceContext
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableVirtualDeviceContext }
        output: VirtualDeviceContext
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/extras/config-contexts/': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            is_active?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            q?: string | undefined
            region_id?: string | undefined
            region?: string | undefined
            site_group?: string | undefined
            site_group_id?: string | undefined
            site_id?: string | undefined
            site?: string | undefined
            location_id?: string | undefined
            location?: string | undefined
            device_type_id?: string | undefined
            role_id?: string | undefined
            role?: string | undefined
            platform_id?: string | undefined
            platform?: string | undefined
            cluster_type_id?: string | undefined
            cluster_type?: string | undefined
            cluster_group_id?: string | undefined
            cluster_group?: string | undefined
            cluster_id?: string | undefined
            tenant_group_id?: string | undefined
            tenant_group?: string | undefined
            tenant_id?: string | undefined
            tenant?: string | undefined
            tag_id?: string | undefined
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
            name__empty?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            region_id__n?: string | undefined
            region__n?: string | undefined
            site_group__n?: string | undefined
            site_group_id__n?: string | undefined
            site_id__n?: string | undefined
            site__n?: string | undefined
            location_id__n?: string | undefined
            location__n?: string | undefined
            device_type_id__n?: string | undefined
            role_id__n?: string | undefined
            role__n?: string | undefined
            platform_id__n?: string | undefined
            platform__n?: string | undefined
            cluster_type_id__n?: string | undefined
            cluster_type__n?: string | undefined
            cluster_group_id__n?: string | undefined
            cluster_group__n?: string | undefined
            cluster_id__n?: string | undefined
            tenant_group_id__n?: string | undefined
            tenant_group__n?: string | undefined
            tenant_id__n?: string | undefined
            tenant__n?: string | undefined
            tag_id__n?: string | undefined
            tag__n?: string | undefined
            ordering?: string | undefined
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
      $patch: {
        input: { json: WritableConfigContext }
        output: ConfigContext
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableConfigContext }
        output: ConfigContext
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: WritableConfigContext }
        output: ConfigContext
        outputFormat: 'json'
        status: 200
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
    '/extras/content-types/': {
      $get: {
        input: {
          query: {
            id?: number | undefined
            app_label?: string | undefined
            model?: string | undefined
            q?: string | undefined
            ordering?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: ContentType[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/extras/content-types/:id/': {
      $get: {
        input: { param: { id: number } }
        output: ContentType
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/extras/custom-fields/': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            content_types?: string | undefined
            name?: string | undefined
            group_name?: string | undefined
            required?: string | undefined
            search_weight?: string | undefined
            filter_logic?: string | undefined
            ui_visibility?: string | undefined
            weight?: string | undefined
            description?: string | undefined
            q?: string | undefined
            type?: string | undefined
            content_type_id?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            content_types__n?: string | undefined
            content_types__ic?: string | undefined
            content_types__nic?: string | undefined
            content_types__iew?: string | undefined
            content_types__niew?: string | undefined
            content_types__isw?: string | undefined
            content_types__nisw?: string | undefined
            content_types__ie?: string | undefined
            content_types__nie?: string | undefined
            name__n?: string | undefined
            name__ic?: string | undefined
            name__nic?: string | undefined
            name__iew?: string | undefined
            name__niew?: string | undefined
            name__isw?: string | undefined
            name__nisw?: string | undefined
            name__ie?: string | undefined
            name__nie?: string | undefined
            name__empty?: string | undefined
            group_name__n?: string | undefined
            group_name__ic?: string | undefined
            group_name__nic?: string | undefined
            group_name__iew?: string | undefined
            group_name__niew?: string | undefined
            group_name__isw?: string | undefined
            group_name__nisw?: string | undefined
            group_name__ie?: string | undefined
            group_name__nie?: string | undefined
            group_name__empty?: string | undefined
            search_weight__n?: string | undefined
            search_weight__lte?: string | undefined
            search_weight__lt?: string | undefined
            search_weight__gte?: string | undefined
            search_weight__gt?: string | undefined
            filter_logic__n?: string | undefined
            ui_visibility__n?: string | undefined
            weight__n?: string | undefined
            weight__lte?: string | undefined
            weight__lt?: string | undefined
            weight__gte?: string | undefined
            weight__gt?: string | undefined
            description__n?: string | undefined
            description__ic?: string | undefined
            description__nic?: string | undefined
            description__iew?: string | undefined
            description__niew?: string | undefined
            description__isw?: string | undefined
            description__nisw?: string | undefined
            description__ie?: string | undefined
            description__nie?: string | undefined
            description__empty?: string | undefined
            type__n?: string | undefined
            content_type_id__n?: string | undefined
            content_type_id__lte?: string | undefined
            content_type_id__lt?: string | undefined
            content_type_id__gte?: string | undefined
            content_type_id__gt?: string | undefined
            ordering?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: CustomField[]
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { json: WritableCustomField }
        output: CustomField
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableCustomField }
        output: CustomField
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: WritableCustomField }
        output: CustomField
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/extras/custom-fields/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: CustomField
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: WritableCustomField }
        output: CustomField
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableCustomField }
        output: CustomField
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/extras/custom-links/': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            content_types?: string | undefined
            name?: string | undefined
            enabled?: string | undefined
            link_text?: string | undefined
            link_url?: string | undefined
            weight?: string | undefined
            group_name?: string | undefined
            new_window?: string | undefined
            q?: string | undefined
            content_type_id?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            content_types__n?: string | undefined
            content_types__ic?: string | undefined
            content_types__nic?: string | undefined
            content_types__iew?: string | undefined
            content_types__niew?: string | undefined
            content_types__isw?: string | undefined
            content_types__nisw?: string | undefined
            content_types__ie?: string | undefined
            content_types__nie?: string | undefined
            name__n?: string | undefined
            name__ic?: string | undefined
            name__nic?: string | undefined
            name__iew?: string | undefined
            name__niew?: string | undefined
            name__isw?: string | undefined
            name__nisw?: string | undefined
            name__ie?: string | undefined
            name__nie?: string | undefined
            name__empty?: string | undefined
            link_text__n?: string | undefined
            link_text__ic?: string | undefined
            link_text__nic?: string | undefined
            link_text__iew?: string | undefined
            link_text__niew?: string | undefined
            link_text__isw?: string | undefined
            link_text__nisw?: string | undefined
            link_text__ie?: string | undefined
            link_text__nie?: string | undefined
            link_url__n?: string | undefined
            link_url__ic?: string | undefined
            link_url__nic?: string | undefined
            link_url__iew?: string | undefined
            link_url__niew?: string | undefined
            link_url__isw?: string | undefined
            link_url__nisw?: string | undefined
            link_url__ie?: string | undefined
            link_url__nie?: string | undefined
            weight__n?: string | undefined
            weight__lte?: string | undefined
            weight__lt?: string | undefined
            weight__gte?: string | undefined
            weight__gt?: string | undefined
            group_name__n?: string | undefined
            group_name__ic?: string | undefined
            group_name__nic?: string | undefined
            group_name__iew?: string | undefined
            group_name__niew?: string | undefined
            group_name__isw?: string | undefined
            group_name__nisw?: string | undefined
            group_name__ie?: string | undefined
            group_name__nie?: string | undefined
            group_name__empty?: string | undefined
            content_type_id__n?: string | undefined
            content_type_id__lte?: string | undefined
            content_type_id__lt?: string | undefined
            content_type_id__gte?: string | undefined
            content_type_id__gt?: string | undefined
            ordering?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: CustomLink[]
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: { input: { json: CustomLink }; output: CustomLink; outputFormat: 'json'; status: 200 }
      $post: { input: { json: CustomLink }; output: CustomLink; outputFormat: 'json'; status: 201 }
      $put: { input: { json: CustomLink }; output: CustomLink; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/extras/custom-links/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: CustomLink
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: CustomLink }
        output: CustomLink
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: CustomLink }
        output: CustomLink
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/extras/export-templates/': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            content_types?: string | undefined
            name?: string | undefined
            description?: string | undefined
            q?: string | undefined
            content_type_id?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            content_types__n?: string | undefined
            content_types__ic?: string | undefined
            content_types__nic?: string | undefined
            content_types__iew?: string | undefined
            content_types__niew?: string | undefined
            content_types__isw?: string | undefined
            content_types__nisw?: string | undefined
            content_types__ie?: string | undefined
            content_types__nie?: string | undefined
            name__n?: string | undefined
            name__ic?: string | undefined
            name__nic?: string | undefined
            name__iew?: string | undefined
            name__niew?: string | undefined
            name__isw?: string | undefined
            name__nisw?: string | undefined
            name__ie?: string | undefined
            name__nie?: string | undefined
            name__empty?: string | undefined
            description__n?: string | undefined
            description__ic?: string | undefined
            description__nic?: string | undefined
            description__iew?: string | undefined
            description__niew?: string | undefined
            description__isw?: string | undefined
            description__nisw?: string | undefined
            description__ie?: string | undefined
            description__nie?: string | undefined
            description__empty?: string | undefined
            content_type_id__n?: string | undefined
            content_type_id__lte?: string | undefined
            content_type_id__lt?: string | undefined
            content_type_id__gte?: string | undefined
            content_type_id__gt?: string | undefined
            ordering?: string | undefined
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
      $patch: {
        input: { json: ExportTemplate }
        output: ExportTemplate
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: ExportTemplate }
        output: ExportTemplate
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: ExportTemplate }
        output: ExportTemplate
        outputFormat: 'json'
        status: 200
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
        input: { param: { id: number } } & { json: ExportTemplate }
        output: ExportTemplate
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: ExportTemplate }
        output: ExportTemplate
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/extras/image-attachments/': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            content_type_id?: string | undefined
            object_id?: string | undefined
            name?: string | undefined
            q?: string | undefined
            created?: string | undefined
            content_type?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            content_type_id__n?: string | undefined
            object_id__n?: string | undefined
            object_id__lte?: string | undefined
            object_id__lt?: string | undefined
            object_id__gte?: string | undefined
            object_id__gt?: string | undefined
            name__n?: string | undefined
            name__ic?: string | undefined
            name__nic?: string | undefined
            name__iew?: string | undefined
            name__niew?: string | undefined
            name__isw?: string | undefined
            name__nisw?: string | undefined
            name__ie?: string | undefined
            name__nie?: string | undefined
            name__empty?: string | undefined
            content_type__n?: string | undefined
            ordering?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: ImageAttachment[]
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { json: ImageAttachment }
        output: ImageAttachment
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: ImageAttachment }
        output: ImageAttachment
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: ImageAttachment }
        output: ImageAttachment
        outputFormat: 'json'
        status: 200
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
    '/extras/job-results/': {
      $get: {
        input: {
          query: {
            id?: string | undefined
            interval?: string | undefined
            status?: string | undefined
            user?: string | undefined
            obj_type?: string | undefined
            name?: string | undefined
            q?: string | undefined
            created?: string | undefined
            created__before?: string | undefined
            created__after?: string | undefined
            scheduled?: string | undefined
            scheduled__before?: string | undefined
            scheduled__after?: string | undefined
            started?: string | undefined
            started__before?: string | undefined
            started__after?: string | undefined
            completed?: string | undefined
            completed__before?: string | undefined
            completed__after?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            interval__n?: string | undefined
            interval__lte?: string | undefined
            interval__lt?: string | undefined
            interval__gte?: string | undefined
            interval__gt?: string | undefined
            status__n?: string | undefined
            user__n?: string | undefined
            obj_type__n?: string | undefined
            name__n?: string | undefined
            name__ic?: string | undefined
            name__nic?: string | undefined
            name__iew?: string | undefined
            name__niew?: string | undefined
            name__isw?: string | undefined
            name__nisw?: string | undefined
            name__ie?: string | undefined
            name__nie?: string | undefined
            name__empty?: string | undefined
            ordering?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: JobResult[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/extras/job-results/:id/': {
      $get: {
        input: { param: { id: number } }
        output: JobResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/extras/journal-entries/': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            assigned_object_type_id?: string | undefined
            assigned_object_id?: string | undefined
            created?: string | undefined
            kind?: string | undefined
            last_updated?: string | undefined
            q?: string | undefined
            tag?: string | undefined
            assigned_object_type?: string | undefined
            created_by_id?: string | undefined
            created_by?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            assigned_object_type_id__n?: string | undefined
            assigned_object_id__n?: string | undefined
            assigned_object_id__lte?: string | undefined
            assigned_object_id__lt?: string | undefined
            assigned_object_id__gte?: string | undefined
            assigned_object_id__gt?: string | undefined
            kind__n?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            assigned_object_type__n?: string | undefined
            created_by_id__n?: string | undefined
            created_by__n?: string | undefined
            ordering?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: JournalEntry[]
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { json: WritableJournalEntry }
        output: JournalEntry
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableJournalEntry }
        output: JournalEntry
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: WritableJournalEntry }
        output: JournalEntry
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/extras/journal-entries/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: JournalEntry
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: WritableJournalEntry }
        output: JournalEntry
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableJournalEntry }
        output: JournalEntry
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
            changed_object_type_id?: string | undefined
            changed_object_id?: string | undefined
            object_repr?: string | undefined
            q?: string | undefined
            time?: string | undefined
            changed_object_type?: string | undefined
            user_id?: string | undefined
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
            user_name__empty?: string | undefined
            action__n?: string | undefined
            changed_object_type_id__n?: string | undefined
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
            object_repr__empty?: string | undefined
            changed_object_type__n?: string | undefined
            user_id__n?: string | undefined
            ordering?: string | undefined
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
    '/extras/saved-filters/': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            content_types?: string | undefined
            name?: string | undefined
            slug?: string | undefined
            description?: string | undefined
            enabled?: string | undefined
            shared?: string | undefined
            weight?: string | undefined
            q?: string | undefined
            content_type_id?: string | undefined
            user_id?: string | undefined
            user?: string | undefined
            usable?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            content_types__n?: string | undefined
            content_types__ic?: string | undefined
            content_types__nic?: string | undefined
            content_types__iew?: string | undefined
            content_types__niew?: string | undefined
            content_types__isw?: string | undefined
            content_types__nisw?: string | undefined
            content_types__ie?: string | undefined
            content_types__nie?: string | undefined
            name__n?: string | undefined
            name__ic?: string | undefined
            name__nic?: string | undefined
            name__iew?: string | undefined
            name__niew?: string | undefined
            name__isw?: string | undefined
            name__nisw?: string | undefined
            name__ie?: string | undefined
            name__nie?: string | undefined
            name__empty?: string | undefined
            slug__n?: string | undefined
            slug__ic?: string | undefined
            slug__nic?: string | undefined
            slug__iew?: string | undefined
            slug__niew?: string | undefined
            slug__isw?: string | undefined
            slug__nisw?: string | undefined
            slug__ie?: string | undefined
            slug__nie?: string | undefined
            slug__empty?: string | undefined
            description__n?: string | undefined
            description__ic?: string | undefined
            description__nic?: string | undefined
            description__iew?: string | undefined
            description__niew?: string | undefined
            description__isw?: string | undefined
            description__nisw?: string | undefined
            description__ie?: string | undefined
            description__nie?: string | undefined
            description__empty?: string | undefined
            weight__n?: string | undefined
            weight__lte?: string | undefined
            weight__lt?: string | undefined
            weight__gte?: string | undefined
            weight__gt?: string | undefined
            content_type_id__n?: string | undefined
            content_type_id__lte?: string | undefined
            content_type_id__lt?: string | undefined
            content_type_id__gte?: string | undefined
            content_type_id__gt?: string | undefined
            user_id__n?: string | undefined
            user__n?: string | undefined
            ordering?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: SavedFilter[]
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { json: SavedFilter }
        output: SavedFilter
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: SavedFilter }
        output: SavedFilter
        outputFormat: 'json'
        status: 201
      }
      $put: { input: { json: SavedFilter }; output: SavedFilter; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/extras/saved-filters/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: SavedFilter
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: SavedFilter }
        output: SavedFilter
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: SavedFilter }
        output: SavedFilter
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/extras/scripts/': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/extras/scripts/:id/': {
      $get: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/extras/tags/': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            slug?: string | undefined
            color?: string | undefined
            description?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            q?: string | undefined
            content_type?: string | undefined
            content_type_id?: string | undefined
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
            name__empty?: string | undefined
            slug__n?: string | undefined
            slug__ic?: string | undefined
            slug__nic?: string | undefined
            slug__iew?: string | undefined
            slug__niew?: string | undefined
            slug__isw?: string | undefined
            slug__nisw?: string | undefined
            slug__ie?: string | undefined
            slug__nie?: string | undefined
            slug__empty?: string | undefined
            color__n?: string | undefined
            color__ic?: string | undefined
            color__nic?: string | undefined
            color__iew?: string | undefined
            color__niew?: string | undefined
            color__isw?: string | undefined
            color__nisw?: string | undefined
            color__ie?: string | undefined
            color__nie?: string | undefined
            color__empty?: string | undefined
            description__n?: string | undefined
            description__ic?: string | undefined
            description__nic?: string | undefined
            description__iew?: string | undefined
            description__niew?: string | undefined
            description__isw?: string | undefined
            description__nisw?: string | undefined
            description__ie?: string | undefined
            description__nie?: string | undefined
            description__empty?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            ordering?: string | undefined
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
      $patch: { input: { json: Tag }; output: Tag; outputFormat: 'json'; status: 200 }
      $post: { input: { json: Tag }; output: Tag; outputFormat: 'json'; status: 201 }
      $put: { input: { json: Tag }; output: Tag; outputFormat: 'json'; status: 200 }
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
    '/extras/webhooks/': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            type_create?: string | undefined
            type_update?: string | undefined
            type_delete?: string | undefined
            payload_url?: string | undefined
            enabled?: string | undefined
            http_method?: string | undefined
            http_content_type?: string | undefined
            secret?: string | undefined
            ssl_verification?: string | undefined
            ca_file_path?: string | undefined
            q?: string | undefined
            content_type_id?: string | undefined
            content_types?: string | undefined
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
            name__empty?: string | undefined
            payload_url__n?: string | undefined
            payload_url__ic?: string | undefined
            payload_url__nic?: string | undefined
            payload_url__iew?: string | undefined
            payload_url__niew?: string | undefined
            payload_url__isw?: string | undefined
            payload_url__nisw?: string | undefined
            payload_url__ie?: string | undefined
            payload_url__nie?: string | undefined
            payload_url__empty?: string | undefined
            http_method__n?: string | undefined
            http_content_type__n?: string | undefined
            http_content_type__ic?: string | undefined
            http_content_type__nic?: string | undefined
            http_content_type__iew?: string | undefined
            http_content_type__niew?: string | undefined
            http_content_type__isw?: string | undefined
            http_content_type__nisw?: string | undefined
            http_content_type__ie?: string | undefined
            http_content_type__nie?: string | undefined
            http_content_type__empty?: string | undefined
            secret__n?: string | undefined
            secret__ic?: string | undefined
            secret__nic?: string | undefined
            secret__iew?: string | undefined
            secret__niew?: string | undefined
            secret__isw?: string | undefined
            secret__nisw?: string | undefined
            secret__ie?: string | undefined
            secret__nie?: string | undefined
            secret__empty?: string | undefined
            ca_file_path__n?: string | undefined
            ca_file_path__ic?: string | undefined
            ca_file_path__nic?: string | undefined
            ca_file_path__iew?: string | undefined
            ca_file_path__niew?: string | undefined
            ca_file_path__isw?: string | undefined
            ca_file_path__nisw?: string | undefined
            ca_file_path__ie?: string | undefined
            ca_file_path__nie?: string | undefined
            ca_file_path__empty?: string | undefined
            content_type_id__n?: string | undefined
            content_type_id__lte?: string | undefined
            content_type_id__lt?: string | undefined
            content_type_id__gte?: string | undefined
            content_type_id__gt?: string | undefined
            content_types__n?: string | undefined
            content_types__ic?: string | undefined
            content_types__nic?: string | undefined
            content_types__iew?: string | undefined
            content_types__niew?: string | undefined
            content_types__isw?: string | undefined
            content_types__nisw?: string | undefined
            content_types__ie?: string | undefined
            content_types__nie?: string | undefined
            ordering?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: Webhook[]
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: { input: { json: Webhook }; output: Webhook; outputFormat: 'json'; status: 200 }
      $post: { input: { json: Webhook }; output: Webhook; outputFormat: 'json'; status: 201 }
      $put: { input: { json: Webhook }; output: Webhook; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/extras/webhooks/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: { input: { param: { id: number } }; output: Webhook; outputFormat: 'json'; status: 200 }
      $patch: {
        input: { param: { id: number } } & { json: Webhook }
        output: Webhook
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: Webhook }
        output: Webhook
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ipam/aggregates/': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            date_added?: string | undefined
            description?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            q?: string | undefined
            tag?: string | undefined
            tenant_group_id?: string | undefined
            tenant_group?: string | undefined
            tenant_id?: string | undefined
            tenant?: string | undefined
            family?: number | undefined
            prefix?: string | undefined
            rir_id?: string | undefined
            rir?: string | undefined
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
            description__n?: string | undefined
            description__ic?: string | undefined
            description__nic?: string | undefined
            description__iew?: string | undefined
            description__niew?: string | undefined
            description__isw?: string | undefined
            description__nisw?: string | undefined
            description__ie?: string | undefined
            description__nie?: string | undefined
            description__empty?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            tenant_group_id__n?: string | undefined
            tenant_group__n?: string | undefined
            tenant_id__n?: string | undefined
            tenant__n?: string | undefined
            rir_id__n?: string | undefined
            rir__n?: string | undefined
            ordering?: string | undefined
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
      $patch: {
        input: { json: WritableAggregate }
        output: Aggregate
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableAggregate }
        output: Aggregate
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: WritableAggregate }
        output: Aggregate
        outputFormat: 'json'
        status: 200
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
    '/ipam/asns/': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            asn?: string | undefined
            description?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            q?: string | undefined
            tag?: string | undefined
            tenant_group_id?: string | undefined
            tenant_group?: string | undefined
            tenant_id?: string | undefined
            tenant?: string | undefined
            rir_id?: string | undefined
            rir?: string | undefined
            site_id?: string | undefined
            site?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            asn__n?: string | undefined
            asn__lte?: string | undefined
            asn__lt?: string | undefined
            asn__gte?: string | undefined
            asn__gt?: string | undefined
            description__n?: string | undefined
            description__ic?: string | undefined
            description__nic?: string | undefined
            description__iew?: string | undefined
            description__niew?: string | undefined
            description__isw?: string | undefined
            description__nisw?: string | undefined
            description__ie?: string | undefined
            description__nie?: string | undefined
            description__empty?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            tenant_group_id__n?: string | undefined
            tenant_group__n?: string | undefined
            tenant_id__n?: string | undefined
            tenant__n?: string | undefined
            rir_id__n?: string | undefined
            rir__n?: string | undefined
            site_id__n?: string | undefined
            site__n?: string | undefined
            ordering?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: ASN[]
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: { input: { json: WritableASN }; output: ASN; outputFormat: 'json'; status: 200 }
      $post: { input: { json: WritableASN }; output: ASN; outputFormat: 'json'; status: 201 }
      $put: { input: { json: WritableASN }; output: ASN; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/ipam/asns/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: { input: { param: { id: number } }; output: ASN; outputFormat: 'json'; status: 200 }
      $patch: {
        input: { param: { id: number } } & { json: WritableASN }
        output: ASN
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableASN }
        output: ASN
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ipam/fhrp-group-assignments/': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            group_id?: string | undefined
            interface_type?: string | undefined
            interface_id?: string | undefined
            priority?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            device?: string | undefined
            device_id?: string | undefined
            virtual_machine?: string | undefined
            virtual_machine_id?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            group_id__n?: string | undefined
            interface_type__n?: string | undefined
            interface_id__n?: string | undefined
            interface_id__lte?: string | undefined
            interface_id__lt?: string | undefined
            interface_id__gte?: string | undefined
            interface_id__gt?: string | undefined
            priority__n?: string | undefined
            priority__lte?: string | undefined
            priority__lt?: string | undefined
            priority__gte?: string | undefined
            priority__gt?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            ordering?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: FHRPGroupAssignment[]
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { json: WritableFHRPGroupAssignment }
        output: FHRPGroupAssignment
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableFHRPGroupAssignment }
        output: FHRPGroupAssignment
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: WritableFHRPGroupAssignment }
        output: FHRPGroupAssignment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ipam/fhrp-group-assignments/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: FHRPGroupAssignment
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: WritableFHRPGroupAssignment }
        output: FHRPGroupAssignment
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableFHRPGroupAssignment }
        output: FHRPGroupAssignment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ipam/fhrp-groups/': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            group_id?: string | undefined
            name?: string | undefined
            auth_key?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            q?: string | undefined
            tag?: string | undefined
            protocol?: string | undefined
            auth_type?: string | undefined
            related_ip?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            group_id__n?: string | undefined
            group_id__lte?: string | undefined
            group_id__lt?: string | undefined
            group_id__gte?: string | undefined
            group_id__gt?: string | undefined
            name__n?: string | undefined
            name__ic?: string | undefined
            name__nic?: string | undefined
            name__iew?: string | undefined
            name__niew?: string | undefined
            name__isw?: string | undefined
            name__nisw?: string | undefined
            name__ie?: string | undefined
            name__nie?: string | undefined
            name__empty?: string | undefined
            auth_key__n?: string | undefined
            auth_key__ic?: string | undefined
            auth_key__nic?: string | undefined
            auth_key__iew?: string | undefined
            auth_key__niew?: string | undefined
            auth_key__isw?: string | undefined
            auth_key__nisw?: string | undefined
            auth_key__ie?: string | undefined
            auth_key__nie?: string | undefined
            auth_key__empty?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            protocol__n?: string | undefined
            auth_type__n?: string | undefined
            ordering?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: FHRPGroup[]
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: { input: { json: FHRPGroup }; output: FHRPGroup; outputFormat: 'json'; status: 200 }
      $post: { input: { json: FHRPGroup }; output: FHRPGroup; outputFormat: 'json'; status: 201 }
      $put: { input: { json: FHRPGroup }; output: FHRPGroup; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/ipam/fhrp-groups/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: FHRPGroup
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: FHRPGroup }
        output: FHRPGroup
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: FHRPGroup }
        output: FHRPGroup
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ipam/ip-addresses/': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            dns_name?: string | undefined
            description?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            q?: string | undefined
            tag?: string | undefined
            tenant_group_id?: string | undefined
            tenant_group?: string | undefined
            tenant_id?: string | undefined
            tenant?: string | undefined
            family?: number | undefined
            parent?: string | undefined
            address?: string | undefined
            mask_length?: number | undefined
            vrf_id?: string | undefined
            vrf?: string | undefined
            present_in_vrf_id?: string | undefined
            present_in_vrf?: string | undefined
            device?: string | undefined
            device_id?: string | undefined
            virtual_machine?: string | undefined
            virtual_machine_id?: string | undefined
            interface?: string | undefined
            interface_id?: string | undefined
            vminterface?: string | undefined
            vminterface_id?: string | undefined
            fhrpgroup_id?: string | undefined
            assigned_to_interface?: string | undefined
            status?: string | undefined
            role?: string | undefined
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
            dns_name__empty?: string | undefined
            description__n?: string | undefined
            description__ic?: string | undefined
            description__nic?: string | undefined
            description__iew?: string | undefined
            description__niew?: string | undefined
            description__isw?: string | undefined
            description__nisw?: string | undefined
            description__ie?: string | undefined
            description__nie?: string | undefined
            description__empty?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            tenant_group_id__n?: string | undefined
            tenant_group__n?: string | undefined
            tenant_id__n?: string | undefined
            tenant__n?: string | undefined
            vrf_id__n?: string | undefined
            vrf__n?: string | undefined
            interface__n?: string | undefined
            interface_id__n?: string | undefined
            vminterface__n?: string | undefined
            vminterface_id__n?: string | undefined
            fhrpgroup_id__n?: string | undefined
            status__n?: string | undefined
            role__n?: string | undefined
            ordering?: string | undefined
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
      $patch: {
        input: { json: WritableIPAddress }
        output: IPAddress
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableIPAddress }
        output: IPAddress
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: WritableIPAddress }
        output: IPAddress
        outputFormat: 'json'
        status: 200
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
    '/ipam/ip-ranges/': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            description?: string | undefined
            tenant_group_id?: string | undefined
            tenant_group?: string | undefined
            tenant_id?: string | undefined
            tenant?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            q?: string | undefined
            tag?: string | undefined
            family?: number | undefined
            start_address?: string | undefined
            end_address?: string | undefined
            contains?: string | undefined
            vrf_id?: string | undefined
            vrf?: string | undefined
            role_id?: string | undefined
            role?: string | undefined
            status?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            description__n?: string | undefined
            description__ic?: string | undefined
            description__nic?: string | undefined
            description__iew?: string | undefined
            description__niew?: string | undefined
            description__isw?: string | undefined
            description__nisw?: string | undefined
            description__ie?: string | undefined
            description__nie?: string | undefined
            description__empty?: string | undefined
            tenant_group_id__n?: string | undefined
            tenant_group__n?: string | undefined
            tenant_id__n?: string | undefined
            tenant__n?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            vrf_id__n?: string | undefined
            vrf__n?: string | undefined
            role_id__n?: string | undefined
            role__n?: string | undefined
            status__n?: string | undefined
            ordering?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: IPRange[]
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { json: WritableIPRange }
        output: IPRange
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableIPRange }
        output: IPRange
        outputFormat: 'json'
        status: 201
      }
      $put: { input: { json: WritableIPRange }; output: IPRange; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/ipam/ip-ranges/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: { input: { param: { id: number } }; output: IPRange; outputFormat: 'json'; status: 200 }
      $patch: {
        input: { param: { id: number } } & { json: WritableIPRange }
        output: IPRange
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableIPRange }
        output: IPRange
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ipam/ip-ranges/:id/available-ips/': {
      $get: {
        input: { param: { id: number } }
        output: AvailableIP[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: number } } & { json: WritableAvailableIP }
        output: IPAddress[]
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/ipam/l2vpn-terminations/': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            assigned_object_type_id?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            q?: string | undefined
            tag?: string | undefined
            l2vpn_id?: string | undefined
            l2vpn?: string | undefined
            region?: string | undefined
            region_id?: string | undefined
            site?: string | undefined
            site_id?: string | undefined
            device?: string | undefined
            device_id?: string | undefined
            virtual_machine?: string | undefined
            virtual_machine_id?: string | undefined
            interface?: string | undefined
            interface_id?: string | undefined
            vminterface?: string | undefined
            vminterface_id?: string | undefined
            vlan?: string | undefined
            vlan_vid?: number | undefined
            vlan_id?: string | undefined
            assigned_object_type?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            assigned_object_type_id__n?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            l2vpn_id__n?: string | undefined
            l2vpn__n?: string | undefined
            device__n?: string | undefined
            device_id__n?: string | undefined
            virtual_machine__n?: string | undefined
            virtual_machine_id__n?: string | undefined
            interface__n?: string | undefined
            interface_id__n?: string | undefined
            vminterface__n?: string | undefined
            vminterface_id__n?: string | undefined
            vlan__n?: string | undefined
            vlan_vid__n?: number | undefined
            vlan_vid__lte?: number | undefined
            vlan_vid__lt?: number | undefined
            vlan_vid__gte?: number | undefined
            vlan_vid__gt?: number | undefined
            vlan_id__n?: string | undefined
            assigned_object_type__n?: string | undefined
            ordering?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: L2VPNTermination[]
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { json: WritableL2VPNTermination }
        output: L2VPNTermination
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableL2VPNTermination }
        output: L2VPNTermination
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: WritableL2VPNTermination }
        output: L2VPNTermination
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ipam/l2vpn-terminations/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: L2VPNTermination
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: WritableL2VPNTermination }
        output: L2VPNTermination
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableL2VPNTermination }
        output: L2VPNTermination
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ipam/l2vpns/': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            identifier?: string | undefined
            name?: string | undefined
            slug?: string | undefined
            type?: string | undefined
            description?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            q?: string | undefined
            tag?: string | undefined
            tenant_group_id?: string | undefined
            tenant_group?: string | undefined
            tenant_id?: string | undefined
            tenant?: string | undefined
            import_target_id?: string | undefined
            import_target?: string | undefined
            export_target_id?: string | undefined
            export_target?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            identifier__n?: string | undefined
            identifier__lte?: string | undefined
            identifier__lt?: string | undefined
            identifier__gte?: string | undefined
            identifier__gt?: string | undefined
            name__n?: string | undefined
            name__ic?: string | undefined
            name__nic?: string | undefined
            name__iew?: string | undefined
            name__niew?: string | undefined
            name__isw?: string | undefined
            name__nisw?: string | undefined
            name__ie?: string | undefined
            name__nie?: string | undefined
            name__empty?: string | undefined
            slug__n?: string | undefined
            slug__ic?: string | undefined
            slug__nic?: string | undefined
            slug__iew?: string | undefined
            slug__niew?: string | undefined
            slug__isw?: string | undefined
            slug__nisw?: string | undefined
            slug__ie?: string | undefined
            slug__nie?: string | undefined
            slug__empty?: string | undefined
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
            description__empty?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            tenant_group_id__n?: string | undefined
            tenant_group__n?: string | undefined
            tenant_id__n?: string | undefined
            tenant__n?: string | undefined
            import_target_id__n?: string | undefined
            import_target__n?: string | undefined
            export_target_id__n?: string | undefined
            export_target__n?: string | undefined
            ordering?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: L2VPN[]
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: { input: { json: WritableL2VPN }; output: L2VPN; outputFormat: 'json'; status: 200 }
      $post: { input: { json: WritableL2VPN }; output: L2VPN; outputFormat: 'json'; status: 201 }
      $put: { input: { json: WritableL2VPN }; output: L2VPN; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/ipam/l2vpns/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: { input: { param: { id: number } }; output: L2VPN; outputFormat: 'json'; status: 200 }
      $patch: {
        input: { param: { id: number } } & { json: WritableL2VPN }
        output: L2VPN
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableL2VPN }
        output: L2VPN
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ipam/prefixes/': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            is_pool?: string | undefined
            mark_utilized?: string | undefined
            description?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            q?: string | undefined
            tag?: string | undefined
            tenant_group_id?: string | undefined
            tenant_group?: string | undefined
            tenant_id?: string | undefined
            tenant?: string | undefined
            family?: number | undefined
            prefix?: string | undefined
            within?: string | undefined
            within_include?: string | undefined
            contains?: string | undefined
            depth?: string | undefined
            children?: string | undefined
            mask_length?: string | undefined
            mask_length__gte?: number | undefined
            mask_length__lte?: number | undefined
            vrf_id?: string | undefined
            vrf?: string | undefined
            present_in_vrf_id?: string | undefined
            present_in_vrf?: string | undefined
            region_id?: string | undefined
            region?: string | undefined
            site_group_id?: string | undefined
            site_group?: string | undefined
            site_id?: string | undefined
            site?: string | undefined
            vlan_id?: string | undefined
            vlan_vid?: number | undefined
            role_id?: string | undefined
            role?: string | undefined
            status?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            description__n?: string | undefined
            description__ic?: string | undefined
            description__nic?: string | undefined
            description__iew?: string | undefined
            description__niew?: string | undefined
            description__isw?: string | undefined
            description__nisw?: string | undefined
            description__ie?: string | undefined
            description__nie?: string | undefined
            description__empty?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            tenant_group_id__n?: string | undefined
            tenant_group__n?: string | undefined
            tenant_id__n?: string | undefined
            tenant__n?: string | undefined
            depth__n?: string | undefined
            depth__lte?: string | undefined
            depth__lt?: string | undefined
            depth__gte?: string | undefined
            depth__gt?: string | undefined
            children__n?: string | undefined
            children__lte?: string | undefined
            children__lt?: string | undefined
            children__gte?: string | undefined
            children__gt?: string | undefined
            vrf_id__n?: string | undefined
            vrf__n?: string | undefined
            region_id__n?: string | undefined
            region__n?: string | undefined
            site_group_id__n?: string | undefined
            site_group__n?: string | undefined
            site_id__n?: string | undefined
            site__n?: string | undefined
            vlan_id__n?: string | undefined
            vlan_vid__n?: number | undefined
            vlan_vid__lte?: number | undefined
            vlan_vid__lt?: number | undefined
            vlan_vid__gte?: number | undefined
            vlan_vid__gt?: number | undefined
            role_id__n?: string | undefined
            role__n?: string | undefined
            status__n?: string | undefined
            ordering?: string | undefined
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
      $patch: { input: { json: WritablePrefix }; output: Prefix; outputFormat: 'json'; status: 200 }
      $post: { input: { json: WritablePrefix }; output: Prefix; outputFormat: 'json'; status: 201 }
      $put: { input: { json: WritablePrefix }; output: Prefix; outputFormat: 'json'; status: 200 }
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
        output: IPAddress[]
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
        input: { param: { id: number } } & { json: PrefixLength }
        output: Prefix[]
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/ipam/rirs/': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            slug?: string | undefined
            is_private?: string | undefined
            description?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
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
            name__empty?: string | undefined
            slug__n?: string | undefined
            slug__ic?: string | undefined
            slug__nic?: string | undefined
            slug__iew?: string | undefined
            slug__niew?: string | undefined
            slug__isw?: string | undefined
            slug__nisw?: string | undefined
            slug__ie?: string | undefined
            slug__nie?: string | undefined
            slug__empty?: string | undefined
            description__n?: string | undefined
            description__ic?: string | undefined
            description__nic?: string | undefined
            description__iew?: string | undefined
            description__niew?: string | undefined
            description__isw?: string | undefined
            description__nisw?: string | undefined
            description__ie?: string | undefined
            description__nie?: string | undefined
            description__empty?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            ordering?: string | undefined
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
      $patch: { input: { json: RIR }; output: RIR; outputFormat: 'json'; status: 200 }
      $post: { input: { json: RIR }; output: RIR; outputFormat: 'json'; status: 201 }
      $put: { input: { json: RIR }; output: RIR; outputFormat: 'json'; status: 200 }
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
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            slug?: string | undefined
            description?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
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
            name__empty?: string | undefined
            slug__n?: string | undefined
            slug__ic?: string | undefined
            slug__nic?: string | undefined
            slug__iew?: string | undefined
            slug__niew?: string | undefined
            slug__isw?: string | undefined
            slug__nisw?: string | undefined
            slug__ie?: string | undefined
            slug__nie?: string | undefined
            slug__empty?: string | undefined
            description__n?: string | undefined
            description__ic?: string | undefined
            description__nic?: string | undefined
            description__iew?: string | undefined
            description__niew?: string | undefined
            description__isw?: string | undefined
            description__nisw?: string | undefined
            description__ie?: string | undefined
            description__nie?: string | undefined
            description__empty?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            ordering?: string | undefined
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
      $patch: { input: { json: Role }; output: Role; outputFormat: 'json'; status: 200 }
      $post: { input: { json: Role }; output: Role; outputFormat: 'json'; status: 201 }
      $put: { input: { json: Role }; output: Role; outputFormat: 'json'; status: 200 }
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
    '/ipam/route-targets/': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            description?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            q?: string | undefined
            tag?: string | undefined
            tenant_group_id?: string | undefined
            tenant_group?: string | undefined
            tenant_id?: string | undefined
            tenant?: string | undefined
            importing_vrf_id?: string | undefined
            importing_vrf?: string | undefined
            exporting_vrf_id?: string | undefined
            exporting_vrf?: string | undefined
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
            name__empty?: string | undefined
            description__n?: string | undefined
            description__ic?: string | undefined
            description__nic?: string | undefined
            description__iew?: string | undefined
            description__niew?: string | undefined
            description__isw?: string | undefined
            description__nisw?: string | undefined
            description__ie?: string | undefined
            description__nie?: string | undefined
            description__empty?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            tenant_group_id__n?: string | undefined
            tenant_group__n?: string | undefined
            tenant_id__n?: string | undefined
            tenant__n?: string | undefined
            importing_vrf_id__n?: string | undefined
            importing_vrf__n?: string | undefined
            exporting_vrf_id__n?: string | undefined
            exporting_vrf__n?: string | undefined
            ordering?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: RouteTarget[]
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { json: WritableRouteTarget }
        output: RouteTarget
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableRouteTarget }
        output: RouteTarget
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: WritableRouteTarget }
        output: RouteTarget
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ipam/route-targets/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: RouteTarget
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: WritableRouteTarget }
        output: RouteTarget
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableRouteTarget }
        output: RouteTarget
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ipam/service-templates/': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            protocol?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            q?: string | undefined
            tag?: string | undefined
            port?: number | undefined
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
            name__empty?: string | undefined
            protocol__n?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            ordering?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: ServiceTemplate[]
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { json: WritableServiceTemplate }
        output: ServiceTemplate
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableServiceTemplate }
        output: ServiceTemplate
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: WritableServiceTemplate }
        output: ServiceTemplate
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ipam/service-templates/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: ServiceTemplate
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: WritableServiceTemplate }
        output: ServiceTemplate
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableServiceTemplate }
        output: ServiceTemplate
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ipam/services/': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            protocol?: string | undefined
            description?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            q?: string | undefined
            tag?: string | undefined
            device_id?: string | undefined
            device?: string | undefined
            virtual_machine_id?: string | undefined
            virtual_machine?: string | undefined
            ipaddress_id?: string | undefined
            ipaddress?: string | undefined
            port?: number | undefined
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
            name__empty?: string | undefined
            protocol__n?: string | undefined
            description__n?: string | undefined
            description__ic?: string | undefined
            description__nic?: string | undefined
            description__iew?: string | undefined
            description__niew?: string | undefined
            description__isw?: string | undefined
            description__nisw?: string | undefined
            description__ie?: string | undefined
            description__nie?: string | undefined
            description__empty?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            device_id__n?: string | undefined
            device__n?: string | undefined
            virtual_machine_id__n?: string | undefined
            virtual_machine__n?: string | undefined
            ipaddress_id__n?: string | undefined
            ipaddress__n?: string | undefined
            ordering?: string | undefined
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
      $patch: {
        input: { json: WritableService }
        output: Service
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableService }
        output: Service
        outputFormat: 'json'
        status: 201
      }
      $put: { input: { json: WritableService }; output: Service; outputFormat: 'json'; status: 200 }
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
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            slug?: string | undefined
            min_vid?: string | undefined
            max_vid?: string | undefined
            description?: string | undefined
            scope_id?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            q?: string | undefined
            tag?: string | undefined
            scope_type?: string | undefined
            region?: number | undefined
            sitegroup?: number | undefined
            site?: number | undefined
            location?: number | undefined
            rack?: number | undefined
            clustergroup?: number | undefined
            cluster?: number | undefined
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
            name__empty?: string | undefined
            slug__n?: string | undefined
            slug__ic?: string | undefined
            slug__nic?: string | undefined
            slug__iew?: string | undefined
            slug__niew?: string | undefined
            slug__isw?: string | undefined
            slug__nisw?: string | undefined
            slug__ie?: string | undefined
            slug__nie?: string | undefined
            slug__empty?: string | undefined
            min_vid__n?: string | undefined
            min_vid__lte?: string | undefined
            min_vid__lt?: string | undefined
            min_vid__gte?: string | undefined
            min_vid__gt?: string | undefined
            max_vid__n?: string | undefined
            max_vid__lte?: string | undefined
            max_vid__lt?: string | undefined
            max_vid__gte?: string | undefined
            max_vid__gt?: string | undefined
            description__n?: string | undefined
            description__ic?: string | undefined
            description__nic?: string | undefined
            description__iew?: string | undefined
            description__niew?: string | undefined
            description__isw?: string | undefined
            description__nisw?: string | undefined
            description__ie?: string | undefined
            description__nie?: string | undefined
            description__empty?: string | undefined
            scope_id__n?: string | undefined
            scope_id__lte?: string | undefined
            scope_id__lt?: string | undefined
            scope_id__gte?: string | undefined
            scope_id__gt?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            scope_type__n?: string | undefined
            ordering?: string | undefined
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
      $patch: { input: { json: VLANGroup }; output: VLANGroup; outputFormat: 'json'; status: 200 }
      $post: { input: { json: VLANGroup }; output: VLANGroup; outputFormat: 'json'; status: 201 }
      $put: { input: { json: VLANGroup }; output: VLANGroup; outputFormat: 'json'; status: 200 }
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
        input: { param: { id: number } } & { json: VLANGroup }
        output: VLANGroup
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: VLANGroup }
        output: VLANGroup
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ipam/vlan-groups/:id/available-vlans/': {
      $get: {
        input: { param: { id: number } }
        output: AvailableVLAN[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: number } } & { json: WritableCreateAvailableVLAN }
        output: VLAN[]
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/ipam/vlans/': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            vid?: string | undefined
            name?: string | undefined
            description?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            q?: string | undefined
            tag?: string | undefined
            tenant_group_id?: string | undefined
            tenant_group?: string | undefined
            tenant_id?: string | undefined
            tenant?: string | undefined
            region_id?: string | undefined
            region?: string | undefined
            site_group_id?: string | undefined
            site_group?: string | undefined
            site_id?: string | undefined
            site?: string | undefined
            group_id?: string | undefined
            group?: string | undefined
            role_id?: string | undefined
            role?: string | undefined
            status?: string | undefined
            available_on_device?: string | undefined
            available_on_virtualmachine?: string | undefined
            l2vpn_id?: string | undefined
            l2vpn?: string | undefined
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
            name__empty?: string | undefined
            description__n?: string | undefined
            description__ic?: string | undefined
            description__nic?: string | undefined
            description__iew?: string | undefined
            description__niew?: string | undefined
            description__isw?: string | undefined
            description__nisw?: string | undefined
            description__ie?: string | undefined
            description__nie?: string | undefined
            description__empty?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            tenant_group_id__n?: string | undefined
            tenant_group__n?: string | undefined
            tenant_id__n?: string | undefined
            tenant__n?: string | undefined
            region_id__n?: string | undefined
            region__n?: string | undefined
            site_group_id__n?: string | undefined
            site_group__n?: string | undefined
            site_id__n?: string | undefined
            site__n?: string | undefined
            group_id__n?: string | undefined
            group__n?: string | undefined
            role_id__n?: string | undefined
            role__n?: string | undefined
            status__n?: string | undefined
            l2vpn_id__n?: string | undefined
            l2vpn__n?: string | undefined
            ordering?: string | undefined
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
      $patch: { input: { json: WritableVLAN }; output: VLAN; outputFormat: 'json'; status: 200 }
      $post: { input: { json: WritableVLAN }; output: VLAN; outputFormat: 'json'; status: 201 }
      $put: { input: { json: WritableVLAN }; output: VLAN; outputFormat: 'json'; status: 200 }
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
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            rd?: string | undefined
            enforce_unique?: string | undefined
            description?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            q?: string | undefined
            tag?: string | undefined
            tenant_group_id?: string | undefined
            tenant_group?: string | undefined
            tenant_id?: string | undefined
            tenant?: string | undefined
            import_target_id?: string | undefined
            import_target?: string | undefined
            export_target_id?: string | undefined
            export_target?: string | undefined
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
            name__empty?: string | undefined
            rd__n?: string | undefined
            rd__ic?: string | undefined
            rd__nic?: string | undefined
            rd__iew?: string | undefined
            rd__niew?: string | undefined
            rd__isw?: string | undefined
            rd__nisw?: string | undefined
            rd__ie?: string | undefined
            rd__nie?: string | undefined
            rd__empty?: string | undefined
            description__n?: string | undefined
            description__ic?: string | undefined
            description__nic?: string | undefined
            description__iew?: string | undefined
            description__niew?: string | undefined
            description__isw?: string | undefined
            description__nisw?: string | undefined
            description__ie?: string | undefined
            description__nie?: string | undefined
            description__empty?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            tenant_group_id__n?: string | undefined
            tenant_group__n?: string | undefined
            tenant_id__n?: string | undefined
            tenant__n?: string | undefined
            import_target_id__n?: string | undefined
            import_target__n?: string | undefined
            export_target_id__n?: string | undefined
            export_target__n?: string | undefined
            ordering?: string | undefined
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
      $patch: { input: { json: WritableVRF }; output: VRF; outputFormat: 'json'; status: 200 }
      $post: { input: { json: WritableVRF }; output: VRF; outputFormat: 'json'; status: 201 }
      $put: { input: { json: WritableVRF }; output: VRF; outputFormat: 'json'; status: 200 }
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
  } & { '/status/': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/tenancy/contact-assignments/': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            content_type_id?: string | undefined
            object_id?: string | undefined
            priority?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            content_type?: string | undefined
            contact_id?: string | undefined
            role_id?: string | undefined
            role?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            content_type_id__n?: string | undefined
            object_id__n?: string | undefined
            object_id__lte?: string | undefined
            object_id__lt?: string | undefined
            object_id__gte?: string | undefined
            object_id__gt?: string | undefined
            priority__n?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            content_type__n?: string | undefined
            contact_id__n?: string | undefined
            role_id__n?: string | undefined
            role__n?: string | undefined
            ordering?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: ContactAssignment[]
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { json: WritableContactAssignment }
        output: ContactAssignment
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableContactAssignment }
        output: ContactAssignment
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: WritableContactAssignment }
        output: ContactAssignment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tenancy/contact-assignments/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: ContactAssignment
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: WritableContactAssignment }
        output: ContactAssignment
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableContactAssignment }
        output: ContactAssignment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tenancy/contact-groups/': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            slug?: string | undefined
            description?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            q?: string | undefined
            tag?: string | undefined
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
            name__empty?: string | undefined
            slug__n?: string | undefined
            slug__ic?: string | undefined
            slug__nic?: string | undefined
            slug__iew?: string | undefined
            slug__niew?: string | undefined
            slug__isw?: string | undefined
            slug__nisw?: string | undefined
            slug__ie?: string | undefined
            slug__nie?: string | undefined
            slug__empty?: string | undefined
            description__n?: string | undefined
            description__ic?: string | undefined
            description__nic?: string | undefined
            description__iew?: string | undefined
            description__niew?: string | undefined
            description__isw?: string | undefined
            description__nisw?: string | undefined
            description__ie?: string | undefined
            description__nie?: string | undefined
            description__empty?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            parent_id__n?: string | undefined
            parent__n?: string | undefined
            ordering?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: ContactGroup[]
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { json: WritableContactGroup }
        output: ContactGroup
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableContactGroup }
        output: ContactGroup
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: WritableContactGroup }
        output: ContactGroup
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tenancy/contact-groups/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: ContactGroup
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: WritableContactGroup }
        output: ContactGroup
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableContactGroup }
        output: ContactGroup
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tenancy/contact-roles/': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            slug?: string | undefined
            description?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
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
            name__empty?: string | undefined
            slug__n?: string | undefined
            slug__ic?: string | undefined
            slug__nic?: string | undefined
            slug__iew?: string | undefined
            slug__niew?: string | undefined
            slug__isw?: string | undefined
            slug__nisw?: string | undefined
            slug__ie?: string | undefined
            slug__nie?: string | undefined
            slug__empty?: string | undefined
            description__n?: string | undefined
            description__ic?: string | undefined
            description__nic?: string | undefined
            description__iew?: string | undefined
            description__niew?: string | undefined
            description__isw?: string | undefined
            description__nisw?: string | undefined
            description__ie?: string | undefined
            description__nie?: string | undefined
            description__empty?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            ordering?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: ContactRole[]
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { json: ContactRole }
        output: ContactRole
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: ContactRole }
        output: ContactRole
        outputFormat: 'json'
        status: 201
      }
      $put: { input: { json: ContactRole }; output: ContactRole; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/tenancy/contact-roles/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: ContactRole
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: ContactRole }
        output: ContactRole
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: ContactRole }
        output: ContactRole
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tenancy/contacts/': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            title?: string | undefined
            phone?: string | undefined
            email?: string | undefined
            address?: string | undefined
            link?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            q?: string | undefined
            tag?: string | undefined
            group_id?: string | undefined
            group?: string | undefined
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
            name__empty?: string | undefined
            title__n?: string | undefined
            title__ic?: string | undefined
            title__nic?: string | undefined
            title__iew?: string | undefined
            title__niew?: string | undefined
            title__isw?: string | undefined
            title__nisw?: string | undefined
            title__ie?: string | undefined
            title__nie?: string | undefined
            title__empty?: string | undefined
            phone__n?: string | undefined
            phone__ic?: string | undefined
            phone__nic?: string | undefined
            phone__iew?: string | undefined
            phone__niew?: string | undefined
            phone__isw?: string | undefined
            phone__nisw?: string | undefined
            phone__ie?: string | undefined
            phone__nie?: string | undefined
            phone__empty?: string | undefined
            email__n?: string | undefined
            email__ic?: string | undefined
            email__nic?: string | undefined
            email__iew?: string | undefined
            email__niew?: string | undefined
            email__isw?: string | undefined
            email__nisw?: string | undefined
            email__ie?: string | undefined
            email__nie?: string | undefined
            email__empty?: string | undefined
            address__n?: string | undefined
            address__ic?: string | undefined
            address__nic?: string | undefined
            address__iew?: string | undefined
            address__niew?: string | undefined
            address__isw?: string | undefined
            address__nisw?: string | undefined
            address__ie?: string | undefined
            address__nie?: string | undefined
            address__empty?: string | undefined
            link__n?: string | undefined
            link__ic?: string | undefined
            link__nic?: string | undefined
            link__iew?: string | undefined
            link__niew?: string | undefined
            link__isw?: string | undefined
            link__nisw?: string | undefined
            link__ie?: string | undefined
            link__nie?: string | undefined
            link__empty?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            group_id__n?: string | undefined
            group__n?: string | undefined
            ordering?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: Contact[]
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { json: WritableContact }
        output: Contact
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableContact }
        output: Contact
        outputFormat: 'json'
        status: 201
      }
      $put: { input: { json: WritableContact }; output: Contact; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/tenancy/contacts/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: { input: { param: { id: number } }; output: Contact; outputFormat: 'json'; status: 200 }
      $patch: {
        input: { param: { id: number } } & { json: WritableContact }
        output: Contact
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableContact }
        output: Contact
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tenancy/tenant-groups/': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            slug?: string | undefined
            description?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            q?: string | undefined
            tag?: string | undefined
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
            name__empty?: string | undefined
            slug__n?: string | undefined
            slug__ic?: string | undefined
            slug__nic?: string | undefined
            slug__iew?: string | undefined
            slug__niew?: string | undefined
            slug__isw?: string | undefined
            slug__nisw?: string | undefined
            slug__ie?: string | undefined
            slug__nie?: string | undefined
            slug__empty?: string | undefined
            description__n?: string | undefined
            description__ic?: string | undefined
            description__nic?: string | undefined
            description__iew?: string | undefined
            description__niew?: string | undefined
            description__isw?: string | undefined
            description__nisw?: string | undefined
            description__ie?: string | undefined
            description__nie?: string | undefined
            description__empty?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            parent_id__n?: string | undefined
            parent__n?: string | undefined
            ordering?: string | undefined
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
      $patch: {
        input: { json: WritableTenantGroup }
        output: TenantGroup
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableTenantGroup }
        output: TenantGroup
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: WritableTenantGroup }
        output: TenantGroup
        outputFormat: 'json'
        status: 200
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
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            slug?: string | undefined
            description?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            q?: string | undefined
            tag?: string | undefined
            contact?: string | undefined
            contact_role?: string | undefined
            contact_group?: string | undefined
            group_id?: string | undefined
            group?: string | undefined
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
            name__empty?: string | undefined
            slug__n?: string | undefined
            slug__ic?: string | undefined
            slug__nic?: string | undefined
            slug__iew?: string | undefined
            slug__niew?: string | undefined
            slug__isw?: string | undefined
            slug__nisw?: string | undefined
            slug__ie?: string | undefined
            slug__nie?: string | undefined
            slug__empty?: string | undefined
            description__n?: string | undefined
            description__ic?: string | undefined
            description__nic?: string | undefined
            description__iew?: string | undefined
            description__niew?: string | undefined
            description__isw?: string | undefined
            description__nisw?: string | undefined
            description__ie?: string | undefined
            description__nie?: string | undefined
            description__empty?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            contact__n?: string | undefined
            contact_role__n?: string | undefined
            contact_group__n?: string | undefined
            group_id__n?: string | undefined
            group__n?: string | undefined
            ordering?: string | undefined
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
      $patch: { input: { json: WritableTenant }; output: Tenant; outputFormat: 'json'; status: 200 }
      $post: { input: { json: WritableTenant }; output: Tenant; outputFormat: 'json'; status: 201 }
      $put: { input: { json: WritableTenant }; output: Tenant; outputFormat: 'json'; status: 200 }
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
    '/users/config/': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/users/groups/': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
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
            name__empty?: string | undefined
            ordering?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: Group[]
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: { input: { json: Group }; output: Group; outputFormat: 'json'; status: 200 }
      $post: { input: { json: Group }; output: Group; outputFormat: 'json'; status: 201 }
      $put: { input: { json: Group }; output: Group; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/users/groups/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: { input: { param: { id: number } }; output: Group; outputFormat: 'json'; status: 200 }
      $patch: {
        input: { param: { id: number } } & { json: Group }
        output: Group
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: Group }
        output: Group
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/permissions/': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            enabled?: string | undefined
            object_types?: string | undefined
            description?: string | undefined
            q?: string | undefined
            user_id?: string | undefined
            user?: string | undefined
            group_id?: string | undefined
            group?: string | undefined
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
            name__empty?: string | undefined
            object_types__n?: string | undefined
            description__n?: string | undefined
            description__ic?: string | undefined
            description__nic?: string | undefined
            description__iew?: string | undefined
            description__niew?: string | undefined
            description__isw?: string | undefined
            description__nisw?: string | undefined
            description__ie?: string | undefined
            description__nie?: string | undefined
            description__empty?: string | undefined
            user_id__n?: string | undefined
            user__n?: string | undefined
            group_id__n?: string | undefined
            group__n?: string | undefined
            ordering?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: ObjectPermission[]
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { json: WritableObjectPermission }
        output: ObjectPermission
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableObjectPermission }
        output: ObjectPermission
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: WritableObjectPermission }
        output: ObjectPermission
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/permissions/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: ObjectPermission
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: WritableObjectPermission }
        output: ObjectPermission
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableObjectPermission }
        output: ObjectPermission
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/tokens/': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            key?: string | undefined
            write_enabled?: string | undefined
            description?: string | undefined
            q?: string | undefined
            user_id?: string | undefined
            user?: string | undefined
            created?: string | undefined
            created__gte?: string | undefined
            created__lte?: string | undefined
            expires?: string | undefined
            expires__gte?: string | undefined
            expires__lte?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            key__n?: string | undefined
            key__ic?: string | undefined
            key__nic?: string | undefined
            key__iew?: string | undefined
            key__niew?: string | undefined
            key__isw?: string | undefined
            key__nisw?: string | undefined
            key__ie?: string | undefined
            key__nie?: string | undefined
            key__empty?: string | undefined
            description__n?: string | undefined
            description__ic?: string | undefined
            description__nic?: string | undefined
            description__iew?: string | undefined
            description__niew?: string | undefined
            description__isw?: string | undefined
            description__nisw?: string | undefined
            description__ie?: string | undefined
            description__nie?: string | undefined
            description__empty?: string | undefined
            user_id__n?: string | undefined
            user__n?: string | undefined
            ordering?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: Token[]
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: { input: { json: WritableToken }; output: Token; outputFormat: 'json'; status: 200 }
      $post: { input: { json: WritableToken }; output: Token; outputFormat: 'json'; status: 201 }
      $put: { input: { json: WritableToken }; output: Token; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/users/tokens/provision/': {
      $post: { input: {}; output: {}; outputFormat: string; status: 201 }
    }
  } & {
    '/users/tokens/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: { input: { param: { id: number } }; output: Token; outputFormat: 'json'; status: 200 }
      $patch: {
        input: { param: { id: number } } & { json: WritableToken }
        output: Token
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableToken }
        output: Token
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/users/': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            username?: string | undefined
            first_name?: string | undefined
            last_name?: string | undefined
            email?: string | undefined
            is_staff?: string | undefined
            is_active?: string | undefined
            q?: string | undefined
            group_id?: string | undefined
            group?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            username__n?: string | undefined
            username__ic?: string | undefined
            username__nic?: string | undefined
            username__iew?: string | undefined
            username__niew?: string | undefined
            username__isw?: string | undefined
            username__nisw?: string | undefined
            username__ie?: string | undefined
            username__nie?: string | undefined
            username__empty?: string | undefined
            first_name__n?: string | undefined
            first_name__ic?: string | undefined
            first_name__nic?: string | undefined
            first_name__iew?: string | undefined
            first_name__niew?: string | undefined
            first_name__isw?: string | undefined
            first_name__nisw?: string | undefined
            first_name__ie?: string | undefined
            first_name__nie?: string | undefined
            first_name__empty?: string | undefined
            last_name__n?: string | undefined
            last_name__ic?: string | undefined
            last_name__nic?: string | undefined
            last_name__iew?: string | undefined
            last_name__niew?: string | undefined
            last_name__isw?: string | undefined
            last_name__nisw?: string | undefined
            last_name__ie?: string | undefined
            last_name__nie?: string | undefined
            last_name__empty?: string | undefined
            email__n?: string | undefined
            email__ic?: string | undefined
            email__nic?: string | undefined
            email__iew?: string | undefined
            email__niew?: string | undefined
            email__isw?: string | undefined
            email__nisw?: string | undefined
            email__ie?: string | undefined
            email__nie?: string | undefined
            email__empty?: string | undefined
            group_id__n?: string | undefined
            group__n?: string | undefined
            ordering?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: User[]
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: { input: { json: WritableUser }; output: User; outputFormat: 'json'; status: 200 }
      $post: { input: { json: WritableUser }; output: User; outputFormat: 'json'; status: 201 }
      $put: { input: { json: WritableUser }; output: User; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/users/users/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: { input: { param: { id: number } }; output: User; outputFormat: 'json'; status: 200 }
      $patch: {
        input: { param: { id: number } } & { json: WritableUser }
        output: User
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableUser }
        output: User
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/virtualization/cluster-groups/': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            slug?: string | undefined
            description?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            q?: string | undefined
            tag?: string | undefined
            contact?: string | undefined
            contact_role?: string | undefined
            contact_group?: string | undefined
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
            name__empty?: string | undefined
            slug__n?: string | undefined
            slug__ic?: string | undefined
            slug__nic?: string | undefined
            slug__iew?: string | undefined
            slug__niew?: string | undefined
            slug__isw?: string | undefined
            slug__nisw?: string | undefined
            slug__ie?: string | undefined
            slug__nie?: string | undefined
            slug__empty?: string | undefined
            description__n?: string | undefined
            description__ic?: string | undefined
            description__nic?: string | undefined
            description__iew?: string | undefined
            description__niew?: string | undefined
            description__isw?: string | undefined
            description__nisw?: string | undefined
            description__ie?: string | undefined
            description__nie?: string | undefined
            description__empty?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            contact__n?: string | undefined
            contact_role__n?: string | undefined
            contact_group__n?: string | undefined
            ordering?: string | undefined
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
      $patch: {
        input: { json: ClusterGroup }
        output: ClusterGroup
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: ClusterGroup }
        output: ClusterGroup
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: ClusterGroup }
        output: ClusterGroup
        outputFormat: 'json'
        status: 200
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
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            slug?: string | undefined
            description?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
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
            name__empty?: string | undefined
            slug__n?: string | undefined
            slug__ic?: string | undefined
            slug__nic?: string | undefined
            slug__iew?: string | undefined
            slug__niew?: string | undefined
            slug__isw?: string | undefined
            slug__nisw?: string | undefined
            slug__ie?: string | undefined
            slug__nie?: string | undefined
            slug__empty?: string | undefined
            description__n?: string | undefined
            description__ic?: string | undefined
            description__nic?: string | undefined
            description__iew?: string | undefined
            description__niew?: string | undefined
            description__isw?: string | undefined
            description__nisw?: string | undefined
            description__ie?: string | undefined
            description__nie?: string | undefined
            description__empty?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            ordering?: string | undefined
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
      $patch: {
        input: { json: ClusterType }
        output: ClusterType
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: ClusterType }
        output: ClusterType
        outputFormat: 'json'
        status: 201
      }
      $put: { input: { json: ClusterType }; output: ClusterType; outputFormat: 'json'; status: 200 }
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
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            q?: string | undefined
            tag?: string | undefined
            tenant_group_id?: string | undefined
            tenant_group?: string | undefined
            tenant_id?: string | undefined
            tenant?: string | undefined
            contact?: string | undefined
            contact_role?: string | undefined
            contact_group?: string | undefined
            region_id?: string | undefined
            region?: string | undefined
            site_group_id?: string | undefined
            site_group?: string | undefined
            site_id?: string | undefined
            site?: string | undefined
            group_id?: string | undefined
            group?: string | undefined
            type_id?: string | undefined
            type?: string | undefined
            status?: string | undefined
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
            name__empty?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            tenant_group_id__n?: string | undefined
            tenant_group__n?: string | undefined
            tenant_id__n?: string | undefined
            tenant__n?: string | undefined
            contact__n?: string | undefined
            contact_role__n?: string | undefined
            contact_group__n?: string | undefined
            region_id__n?: string | undefined
            region__n?: string | undefined
            site_group_id__n?: string | undefined
            site_group__n?: string | undefined
            site_id__n?: string | undefined
            site__n?: string | undefined
            group_id__n?: string | undefined
            group__n?: string | undefined
            type_id__n?: string | undefined
            type__n?: string | undefined
            status__n?: string | undefined
            ordering?: string | undefined
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
      $patch: {
        input: { json: WritableCluster }
        output: Cluster
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableCluster }
        output: Cluster
        outputFormat: 'json'
        status: 201
      }
      $put: { input: { json: WritableCluster }; output: Cluster; outputFormat: 'json'; status: 200 }
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
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            enabled?: string | undefined
            mtu?: string | undefined
            description?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            q?: string | undefined
            tag?: string | undefined
            cluster_id?: string | undefined
            cluster?: string | undefined
            virtual_machine_id?: string | undefined
            virtual_machine?: string | undefined
            parent_id?: string | undefined
            bridge_id?: string | undefined
            mac_address?: string | undefined
            vrf_id?: string | undefined
            vrf?: string | undefined
            l2vpn_id?: string | undefined
            l2vpn?: string | undefined
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
            name__empty?: string | undefined
            mtu__n?: string | undefined
            mtu__lte?: string | undefined
            mtu__lt?: string | undefined
            mtu__gte?: string | undefined
            mtu__gt?: string | undefined
            description__n?: string | undefined
            description__ic?: string | undefined
            description__nic?: string | undefined
            description__iew?: string | undefined
            description__niew?: string | undefined
            description__isw?: string | undefined
            description__nisw?: string | undefined
            description__ie?: string | undefined
            description__nie?: string | undefined
            description__empty?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            cluster_id__n?: string | undefined
            cluster__n?: string | undefined
            virtual_machine_id__n?: string | undefined
            virtual_machine__n?: string | undefined
            parent_id__n?: string | undefined
            bridge_id__n?: string | undefined
            mac_address__n?: string | undefined
            mac_address__ic?: string | undefined
            mac_address__nic?: string | undefined
            mac_address__iew?: string | undefined
            mac_address__niew?: string | undefined
            mac_address__isw?: string | undefined
            mac_address__nisw?: string | undefined
            mac_address__ie?: string | undefined
            mac_address__nie?: string | undefined
            vrf_id__n?: string | undefined
            vrf__n?: string | undefined
            l2vpn_id__n?: string | undefined
            l2vpn__n?: string | undefined
            ordering?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: VMInterface[]
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { json: WritableVMInterface }
        output: VMInterface
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableVMInterface }
        output: VMInterface
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: WritableVMInterface }
        output: VMInterface
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/virtualization/interfaces/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: VMInterface
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: WritableVMInterface }
        output: VMInterface
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableVMInterface }
        output: VMInterface
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/virtualization/virtual-machines/': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            cluster?: string | undefined
            vcpus?: string | undefined
            memory?: string | undefined
            disk?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            q?: string | undefined
            tag?: string | undefined
            tenant_group_id?: string | undefined
            tenant_group?: string | undefined
            tenant_id?: string | undefined
            tenant?: string | undefined
            contact?: string | undefined
            contact_role?: string | undefined
            contact_group?: string | undefined
            local_context_data?: string | undefined
            status?: string | undefined
            cluster_group_id?: string | undefined
            cluster_group?: string | undefined
            cluster_type_id?: string | undefined
            cluster_type?: string | undefined
            cluster_id?: string | undefined
            device_id?: string | undefined
            device?: string | undefined
            region_id?: string | undefined
            region?: string | undefined
            site_group_id?: string | undefined
            site_group?: string | undefined
            site_id?: string | undefined
            site?: string | undefined
            name?: string | undefined
            role_id?: string | undefined
            role?: string | undefined
            platform_id?: string | undefined
            platform?: string | undefined
            mac_address?: string | undefined
            has_primary_ip?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
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
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            tenant_group_id__n?: string | undefined
            tenant_group__n?: string | undefined
            tenant_id__n?: string | undefined
            tenant__n?: string | undefined
            contact__n?: string | undefined
            contact_role__n?: string | undefined
            contact_group__n?: string | undefined
            status__n?: string | undefined
            cluster_group_id__n?: string | undefined
            cluster_group__n?: string | undefined
            cluster_type_id__n?: string | undefined
            cluster_type__n?: string | undefined
            cluster_id__n?: string | undefined
            device_id__n?: string | undefined
            device__n?: string | undefined
            region_id__n?: string | undefined
            region__n?: string | undefined
            site_group_id__n?: string | undefined
            site_group__n?: string | undefined
            site_id__n?: string | undefined
            site__n?: string | undefined
            name__n?: string | undefined
            name__ic?: string | undefined
            name__nic?: string | undefined
            name__iew?: string | undefined
            name__niew?: string | undefined
            name__isw?: string | undefined
            name__nisw?: string | undefined
            name__ie?: string | undefined
            name__nie?: string | undefined
            name__empty?: string | undefined
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
            ordering?: string | undefined
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
      $patch: {
        input: { json: WritableVirtualMachineWithConfigContext }
        output: VirtualMachineWithConfigContext
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableVirtualMachineWithConfigContext }
        output: VirtualMachineWithConfigContext
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: WritableVirtualMachineWithConfigContext }
        output: VirtualMachineWithConfigContext
        outputFormat: 'json'
        status: 200
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
  } & {
    '/wireless/wireless-lan-groups/': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            name?: string | undefined
            slug?: string | undefined
            description?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            q?: string | undefined
            tag?: string | undefined
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
            name__empty?: string | undefined
            slug__n?: string | undefined
            slug__ic?: string | undefined
            slug__nic?: string | undefined
            slug__iew?: string | undefined
            slug__niew?: string | undefined
            slug__isw?: string | undefined
            slug__nisw?: string | undefined
            slug__ie?: string | undefined
            slug__nie?: string | undefined
            slug__empty?: string | undefined
            description__n?: string | undefined
            description__ic?: string | undefined
            description__nic?: string | undefined
            description__iew?: string | undefined
            description__niew?: string | undefined
            description__isw?: string | undefined
            description__nisw?: string | undefined
            description__ie?: string | undefined
            description__nie?: string | undefined
            description__empty?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            parent_id__n?: string | undefined
            parent__n?: string | undefined
            ordering?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: WirelessLANGroup[]
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { json: WritableWirelessLANGroup }
        output: WirelessLANGroup
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableWirelessLANGroup }
        output: WirelessLANGroup
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: WritableWirelessLANGroup }
        output: WirelessLANGroup
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/wireless/wireless-lan-groups/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: WirelessLANGroup
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: WritableWirelessLANGroup }
        output: WirelessLANGroup
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableWirelessLANGroup }
        output: WirelessLANGroup
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/wireless/wireless-lans/': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            ssid?: string | undefined
            auth_psk?: string | undefined
            description?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            q?: string | undefined
            tag?: string | undefined
            tenant_group_id?: string | undefined
            tenant_group?: string | undefined
            tenant_id?: string | undefined
            tenant?: string | undefined
            group_id?: string | undefined
            group?: string | undefined
            status?: string | undefined
            vlan_id?: string | undefined
            auth_type?: string | undefined
            auth_cipher?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            ssid__n?: string | undefined
            ssid__ic?: string | undefined
            ssid__nic?: string | undefined
            ssid__iew?: string | undefined
            ssid__niew?: string | undefined
            ssid__isw?: string | undefined
            ssid__nisw?: string | undefined
            ssid__ie?: string | undefined
            ssid__nie?: string | undefined
            ssid__empty?: string | undefined
            auth_psk__n?: string | undefined
            auth_psk__ic?: string | undefined
            auth_psk__nic?: string | undefined
            auth_psk__iew?: string | undefined
            auth_psk__niew?: string | undefined
            auth_psk__isw?: string | undefined
            auth_psk__nisw?: string | undefined
            auth_psk__ie?: string | undefined
            auth_psk__nie?: string | undefined
            auth_psk__empty?: string | undefined
            description__n?: string | undefined
            description__ic?: string | undefined
            description__nic?: string | undefined
            description__iew?: string | undefined
            description__niew?: string | undefined
            description__isw?: string | undefined
            description__nisw?: string | undefined
            description__ie?: string | undefined
            description__nie?: string | undefined
            description__empty?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            tenant_group_id__n?: string | undefined
            tenant_group__n?: string | undefined
            tenant_id__n?: string | undefined
            tenant__n?: string | undefined
            group_id__n?: string | undefined
            group__n?: string | undefined
            status__n?: string | undefined
            vlan_id__n?: string | undefined
            auth_type__n?: string | undefined
            auth_cipher__n?: string | undefined
            ordering?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: WirelessLAN[]
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { json: WritableWirelessLAN }
        output: WirelessLAN
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableWirelessLAN }
        output: WirelessLAN
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: WritableWirelessLAN }
        output: WirelessLAN
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/wireless/wireless-lans/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: WirelessLAN
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: WritableWirelessLAN }
        output: WirelessLAN
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableWirelessLAN }
        output: WirelessLAN
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/wireless/wireless-links/': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: {
          query: {
            id?: string | undefined
            ssid?: string | undefined
            auth_psk?: string | undefined
            description?: string | undefined
            created?: string | undefined
            last_updated?: string | undefined
            q?: string | undefined
            tag?: string | undefined
            tenant_group_id?: string | undefined
            tenant_group?: string | undefined
            tenant_id?: string | undefined
            tenant?: string | undefined
            interface_a_id?: string | undefined
            interface_b_id?: string | undefined
            status?: string | undefined
            auth_type?: string | undefined
            auth_cipher?: string | undefined
            id__n?: string | undefined
            id__lte?: string | undefined
            id__lt?: string | undefined
            id__gte?: string | undefined
            id__gt?: string | undefined
            ssid__n?: string | undefined
            ssid__ic?: string | undefined
            ssid__nic?: string | undefined
            ssid__iew?: string | undefined
            ssid__niew?: string | undefined
            ssid__isw?: string | undefined
            ssid__nisw?: string | undefined
            ssid__ie?: string | undefined
            ssid__nie?: string | undefined
            ssid__empty?: string | undefined
            auth_psk__n?: string | undefined
            auth_psk__ic?: string | undefined
            auth_psk__nic?: string | undefined
            auth_psk__iew?: string | undefined
            auth_psk__niew?: string | undefined
            auth_psk__isw?: string | undefined
            auth_psk__nisw?: string | undefined
            auth_psk__ie?: string | undefined
            auth_psk__nie?: string | undefined
            auth_psk__empty?: string | undefined
            description__n?: string | undefined
            description__ic?: string | undefined
            description__nic?: string | undefined
            description__iew?: string | undefined
            description__niew?: string | undefined
            description__isw?: string | undefined
            description__nisw?: string | undefined
            description__ie?: string | undefined
            description__nie?: string | undefined
            description__empty?: string | undefined
            created__n?: string | undefined
            created__lte?: string | undefined
            created__lt?: string | undefined
            created__gte?: string | undefined
            created__gt?: string | undefined
            last_updated__n?: string | undefined
            last_updated__lte?: string | undefined
            last_updated__lt?: string | undefined
            last_updated__gte?: string | undefined
            last_updated__gt?: string | undefined
            tag__n?: string | undefined
            tenant_group_id__n?: string | undefined
            tenant_group__n?: string | undefined
            tenant_id__n?: string | undefined
            tenant__n?: string | undefined
            interface_a_id__n?: string | undefined
            interface_a_id__lte?: string | undefined
            interface_a_id__lt?: string | undefined
            interface_a_id__gte?: string | undefined
            interface_a_id__gt?: string | undefined
            interface_b_id__n?: string | undefined
            interface_b_id__lte?: string | undefined
            interface_b_id__lt?: string | undefined
            interface_b_id__gte?: string | undefined
            interface_b_id__gt?: string | undefined
            status__n?: string | undefined
            auth_type__n?: string | undefined
            auth_cipher__n?: string | undefined
            ordering?: string | undefined
            limit?: number | undefined
            offset?: number | undefined
          }
        }
        output: {
          count: number
          next?: (string | null) | undefined
          previous?: (string | null) | undefined
          results: WirelessLink[]
        }
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { json: WritableWirelessLink }
        output: WirelessLink
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: WritableWirelessLink }
        output: WirelessLink
        outputFormat: 'json'
        status: 201
      }
      $put: {
        input: { json: WritableWirelessLink }
        output: WirelessLink
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/wireless/wireless-links/:id/': {
      $delete: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: number } }
        output: WirelessLink
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & { json: WritableWirelessLink }
        output: WirelessLink
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & { json: WritableWirelessLink }
        output: WirelessLink
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
