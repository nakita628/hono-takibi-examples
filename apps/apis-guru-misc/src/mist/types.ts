type ConstDeviceAp = {
  ap_type?: string | undefined
  band24?:
    | {
        max_clients?: number | undefined
        max_power?: number | undefined
        min_power?: number | undefined
      }
    | undefined
  band5?:
    | {
        max_clients?: number | undefined
        max_power?: number | undefined
        min_power?: number | undefined
      }
    | undefined
  band6?:
    | {
        max_clients?: number | undefined
        max_power?: number | undefined
        min_power?: number | undefined
      }
    | undefined
  ce_dfs_ok?: boolean | undefined
  cisco_pace?: boolean | undefined
  description?: string | undefined
  disallowed_channels?: { [x: string]: { [x: string]: number[] } } | undefined
  display?: string | undefined
  extio?:
    | {
        [x: string]: {
          default_dir?: 'IN' | 'OUT' | undefined
          input?: boolean | undefined
          output?: boolean | undefined
        }
      }
    | undefined
  fcc_dfs_ok?: boolean | undefined
  has_11ax?: boolean | undefined
  has_compass?: boolean | undefined
  has_ext_ant?: boolean | undefined
  has_extio?: boolean | undefined
  has_height?: boolean | undefined
  has_module_port?: boolean | undefined
  has_poe_out?: boolean | undefined
  has_scanning_radio?: boolean | undefined
  has_selectable_radio?: boolean | undefined
  has_usb?: boolean | undefined
  has_vble?: boolean | undefined
  has_wifi_band24?: boolean | undefined
  has_wifi_band5?: boolean | undefined
  has_wifi_band6?: boolean | undefined
  max_poe_out?: number | undefined
  max_wlans?: number | undefined
  model?: string | undefined
  other_dfs_ok?: boolean | undefined
  outdoor?: boolean | undefined
  radios?: { [x: string]: string } | undefined
  shared_scanning_radio?: boolean | undefined
  type?: 'ap' | undefined
  unmanaged?: boolean | undefined
  vble?:
    | { beacon_rate?: number | undefined; beams?: number | undefined; power?: number | undefined }
    | undefined
}
type ConstDeviceSwitch = {
  alias?: string | undefined
  defaults?: { _ports?: string | undefined } | undefined
  description?: string | undefined
  display?: string | undefined
  evolved_os?: boolean | undefined
  evpn_ri_type?: string | undefined
  experimental?: boolean | undefined
  fans_pluggable?: boolean | undefined
  has_bgp?: boolean | undefined
  has_ets?: boolean | undefined
  has_evpn?: boolean | undefined
  has_irb?: boolean | undefined
  has_poe_out?: boolean | undefined
  has_snapshot?: boolean | undefined
  has_vc?: boolean | undefined
  model?: string | undefined
  modular?: boolean | undefined
  no_shaping_rate?: boolean | undefined
  number_fans?: number | undefined
  oc_device?: boolean | undefined
  oob_interface?: string | undefined
  packet_action_drop_only?: boolean | undefined
  pic?: { [x: string]: string } | undefined
  sub_required?: string | undefined
  type?: 'switch' | undefined
}
type ConstDeviceGateway = {
  defaults?: { [x: string]: string } | undefined
  description?: string | undefined
  experimental?: boolean | undefined
  fans_pluggable?: boolean | undefined
  ha_node0_fpc?: number | undefined
  ha_node1_fpc?: number | undefined
  has_bgp?: boolean | undefined
  has_fxp0?: boolean | undefined
  has_ha_control?: boolean | undefined
  has_ha_data?: boolean | undefined
  has_irb?: boolean | undefined
  has_poe_out?: boolean | undefined
  has_snapshot?: boolean | undefined
  irb_disabled_by_default?: boolean | undefined
  model?: string | undefined
  number_fans?: number | undefined
  oc_device?: boolean | undefined
  pic?: { [x: string]: string } | undefined
  ports?:
    | { display?: string | undefined; pci_address?: string | undefined; speed?: number | undefined }
    | undefined
  sub_required?: string | undefined
  t128_device?: boolean | undefined
  type?: 'gateway' | undefined
}
type ConstDeviceUnknown = {
  ap_type?: string | undefined
  description?: string | undefined
  display?: string | undefined
  has_extio?: boolean | undefined
  has_vble?: boolean | undefined
  has_wifi_band24?: boolean | undefined
  has_wifi_band5?: boolean | undefined
  model?: string | undefined
  unmanaged?: boolean | undefined
}
type ModelArrayString = string[]
type InstallerDevices = {
  deviceprofile_name?: string | undefined
  for_site?: boolean | undefined
  height?: number | undefined
  map_id?: string | undefined
  name: string
  orientation?: number | undefined
  replacing_mac?: string | undefined
  role?: string | undefined
  site_id?: string | undefined
  site_name?: string | undefined
  x?: number | undefined
  y?: number | undefined
}
type ImageUpload = { file?: File | undefined; json?: string | undefined }
type Site = {
  ''?: string | undefined
  address?: string | undefined
  alarmtemplate_id?: (string | null) | undefined
  aptemplate_id?: string | undefined
  country_code?: string | undefined
  created_time?: number | undefined
  gatewaytemplate_id?: (string | null) | undefined
  id?: string | undefined
  latlng?: { lat?: number | undefined; lng?: number | undefined } | undefined
  modified_time?: number | undefined
  name: string
  networktemplate_id?: (string | null) | undefined
  notes?: string | undefined
  org_id?: string | undefined
  rftemplate_id?: (string | null) | undefined
  secpolicy_id?: (string | null) | undefined
  sitegroup_ids?: string[] | undefined
  timezone?: string | undefined
}
type MapNode = {
  edges?: { [x: string]: string } | undefined
  name: string
  position?: { x: number; y: number } | undefined
}
type Map = {
  created_time?: number | undefined
  flags?: { [x: string]: unknown } | undefined
  for_site?: boolean | undefined
  height?: number | undefined
  height_m?: number | undefined
  id?: string | undefined
  latlng_br?: { lat?: string | undefined; lng?: string | undefined } | undefined
  latlng_tl?: { lat?: string | undefined; lng?: string | undefined } | undefined
  locked?: boolean | undefined
  modified_time?: number | undefined
  name?: string | undefined
  occupancy_limit?: number | undefined
  org_id?: string | undefined
  orientation?: number | undefined
  origin_x?: number | undefined
  origin_y?: number | undefined
  ppm?: number | undefined
  site_id?: string | undefined
  sitesurvey_path?:
    | {
        coordinate?: string | undefined
        id?: string | undefined
        name?: string | undefined
        nodes?: MapNode[] | undefined
      }[]
    | undefined
  thumbnail_url?: string | undefined
  type?: 'image' | 'google' | undefined
  url?: string | undefined
  use_auto_orientation?: boolean | undefined
  use_auto_placement?: boolean | undefined
  view?: 'roadmap' | 'satellite' | 'hybrid' | 'terrain' | undefined
  wall_path?:
    | { coordinate?: string | undefined; name?: string | undefined; nodes?: MapNode[] | undefined }
    | undefined
  wayfinding?:
    | {
        micello?:
          | {
              account_key?: string | undefined
              default_level_id?: number | undefined
              map_id?: string | undefined
            }
          | undefined
        snap_to_path?: boolean | undefined
      }
    | undefined
  wayfinding_path?: { coordinate?: string | undefined; nodes?: MapNode[] | undefined } | undefined
  width?: number | undefined
  width_m?: number | undefined
}
type ModelObjectEmail = { email: string }
type ModelObjectDeviceId = { device_id: string }
type Msp = {
  allow_mist?: boolean | undefined
  created_time?: number | undefined
  id?: string | undefined
  logo_url?: string | undefined
  name?: string | undefined
  tier?: 'base' | 'advanced' | undefined
  url?: string | undefined
}
type Privileges = {
  for_site?: boolean | undefined
  msp_id?: (string | null) | undefined
  msp_logo_url?: string | undefined
  msp_name?: (string | null) | undefined
  msp_url?: string | undefined
  name?: string | undefined
  org_id?: (string | null) | undefined
  org_name?: string | undefined
  orggroup_ids?: string[] | undefined
  role: 'admin' | 'write' | 'read' | 'helpdesk' | 'installer'
  scope: 'org' | 'site' | 'msp' | 'orggroup'
  site_id?: (string | null) | undefined
  sitegroup_ids?: string[] | undefined
  views?: string[] | undefined
}
type Admin = {
  admin_id?: string | undefined
  email: string
  enable_two_factor?: boolean | undefined
  first_name: string
  hours?: number | undefined
  last_name: string
  oauth_google?: boolean | undefined
  phone?: string | undefined
  phone2?: string | undefined
  privileges?: Privileges[] | undefined
  session_expiry?: number | undefined
  tags?: string[] | undefined
  two_factor_verified?: boolean | undefined
  via_sso?: string | undefined
}
type License = {
  amendments?:
    | {
        created_time?: number | undefined
        end_time?: number | undefined
        id?: string | undefined
        modified_time?: number | undefined
        quantity?: number | undefined
        start_time?: number | undefined
        subscription_id?: string | undefined
        type?:
          | 'SUB-MAN'
          | 'SUB-AST'
          | 'SUB-VNA'
          | 'SUB-DATA'
          | 'SUB-ENG'
          | 'SUB-PMA'
          | 'SUB-EX12'
          | 'SUB-EX24'
          | 'SUB-EX48'
          | 'SUB-SVNA'
          | 'SUB-ME'
          | 'SUB-WAN1'
          | 'SUB-WAN2'
          | 'SUB-WVNA1'
          | 'SUB-WVNA2'
          | 'SUB-SRX1'
          | 'SUB-SRX2'
          | undefined
      }[]
    | undefined
  entitled?: { [x: string]: number } | undefined
  licenses?:
    | {
        created_time?: number | undefined
        end_time?: number | undefined
        id?: string | undefined
        modified_time?: number | undefined
        order_id?: string | undefined
        org_id?: string | undefined
        quantity?: number | undefined
        remaining_quantity?: number | undefined
        start_time?: number | undefined
        subscription_id?: string | undefined
        type?:
          | 'SUB-MAN'
          | 'SUB-AST'
          | 'SUB-VNA'
          | 'SUB-DATA'
          | 'SUB-ENG'
          | 'SUB-PMA'
          | 'SUB-EX12'
          | 'SUB-EX24'
          | 'SUB-EX48'
          | 'SUB-SVNA'
          | 'SUB-ME'
          | 'SUB-WAN1'
          | 'SUB-WAN2'
          | 'SUB-WVNA1'
          | 'SUB-WVNA2'
          | 'SUB-SRX1'
          | 'SUB-SRX2'
          | undefined
      }[]
    | undefined
  summary?: { [x: string]: number } | undefined
}
type Orggroup = {
  created_time?: number | undefined
  id?: string | undefined
  modified_time?: number | undefined
  msp_id?: string | undefined
  name: string
  org_ids?: string[] | undefined
}
type Org = {
  alarmtemplate_id?: (string | null) | undefined
  allow_mist?: boolean | undefined
  created_time?: number | undefined
  id?: string | undefined
  modified_time?: number | undefined
  msp_id?: (string | null) | undefined
  name: string
  orggroup_ids?: string[] | undefined
  session_expiry?: number | undefined
}
type Ssorole = {
  created_time?: number | undefined
  for_site?: boolean | undefined
  id?: string | undefined
  modified_time?: number | undefined
  msp_id?: string | undefined
  name: string
  org_id?: string | undefined
  privileges: Privileges[]
  site_id?: string | undefined
}
type Sso = {
  created_time?: number | undefined
  custom_logout_url?: string | undefined
  default_role?: string | undefined
  domain?: string | undefined
  id?: string | undefined
  idp_cert?: string | undefined
  idp_sign_algo?: string | undefined
  idp_sso_url?: string | undefined
  idp_type?: 'saml' | 'ldap' | 'oauth' | undefined
  ignore_unmatched_roles?: boolean | undefined
  issuer?: string | undefined
  ldap_base_dn?: string | undefined
  ldap_bind_dn?: string | undefined
  ldap_bind_password?: string | undefined
  ldap_certs?: string[] | undefined
  ldap_client_cert?: string | undefined
  ldap_client_key?: string | undefined
  ldap_group_attr?: string | undefined
  ldap_group_dn?: string | undefined
  ldap_group_filter?: string | undefined
  ldap_server_hosts?: string[] | undefined
  ldap_type?: 'ad' | 'okta' | 'custom' | undefined
  ldap_user_filter?: string | undefined
  modified_time?: number | undefined
  msp_id?: string | undefined
  name: string
  nameid_format?: 'email' | 'unspecified' | undefined
  oauth_cc_client_id?: string | undefined
  oauth_cc_client_secret?: string | undefined
  oauth_discovery_url?: string | undefined
  oauth_ropc_client_id?: string | undefined
  oauth_ropc_secret?: string | undefined
  oauth_tenant_id?: string | undefined
  oauth_type?: 'azure' | 'okta' | undefined
  org_id?: string | undefined
  role_attr_extraction?: string | undefined
  role_attr_from?: string | undefined
  site_id?: string | undefined
  type?: string | undefined
}
type StatsOrg = {
  alarmtemplate_id: string
  allow_mist: boolean
  created_time: number
  id: string
  modified_time: number
  msp_id: string
  name: string
  num_devices: number
  num_devices_connected: number
  num_devices_disconnected: number
  num_inventory: number
  num_sites: number
  orggroup_ids: string[]
  session_expiry: number
  sle: { path: string; user_minutes?: { ok: number; total: number } | undefined }[]
}
type Ticket = {
  case_number?: string | undefined
  comments?:
    | {
        attachments?:
          | {
              content_type?: string | undefined
              content_url?: string | undefined
              size?: number | undefined
            }[]
          | undefined
        author: string
        comment: string
        created_at: number
      }[]
    | undefined
  created_at?: number | undefined
  id?: string | undefined
  requester?: string | undefined
  requester_email?: string | undefined
  status?: 'open' | 'pending' | 'solved' | 'closed' | undefined
  subject: string
  type: string
  updated_at?: number | undefined
}
type OrgInfo = {
  alarmtemplate_id?: (string | null) | undefined
  allow_mist?: boolean | undefined
  created_time?: number | undefined
  id: string
  modified_time?: number | undefined
  msp_id?: string | undefined
  msp_logo_url?: string | undefined
  msp_name?: string | undefined
  name: string
  orggroup_ids?: string[] | undefined
  session_expiry?: number | undefined
}
type Note = { note?: string | undefined }
type Alarm = {
  ack_admin_id?: string | undefined
  ack_admin_name?: string | undefined
  acked?: boolean | undefined
  acked_time?: number | undefined
  aps?: string[] | undefined
  bssids?: string[] | undefined
  count: number
  gateways?: string[] | undefined
  group: string
  hostnames?: string[] | undefined
  id: string
  last_seen: number
  note?: string | undefined
  org_id?: string | undefined
  severity: string
  site_id?: string | undefined
  ssids?: string[] | undefined
  switches?: string[] | undefined
  timestamp: number
  type: string
}
type Delivery = {
  additional_emails?: string[] | undefined
  enabled: boolean
  to_org_admins?: boolean | undefined
  to_site_admins?: boolean | undefined
}
type Alarmtemplate = {
  created_time?: number | undefined
  delivery: Delivery
  id?: string | undefined
  modified_time?: number | undefined
  name?: string | undefined
  org_id?: string | undefined
  rules: { [x: string]: { delivery?: Delivery | undefined; enabled?: boolean | undefined } }
}
type Apitoken = {
  created_by?: (string | null) | undefined
  created_time?: number | undefined
  id?: string | undefined
  key?: string | undefined
  last_used?: (number | null) | undefined
  name?: string | undefined
  org_id?: string | undefined
  privileges?: Privileges[] | undefined
}
type AcctServer = {
  host: string
  keywrap_enabled?: boolean | undefined
  keywrap_format?: string | undefined
  keywrap_kek?: string | undefined
  keywrap_mack?: string | undefined
  port: number
  secret: string
}
type AuthServer = {
  host: string
  keywrap_enabled?: boolean | undefined
  keywrap_format?: string | undefined
  keywrap_kek?: string | undefined
  keywrap_mack?: string | undefined
  port: number
  secret: string
}
type JunosRadiusConfig = {
  acct_interim_interval?: number | undefined
  acct_servers?: AcctServer[] | undefined
  auth_servers?: AuthServer[] | undefined
  auth_servers_retries?: number | undefined
  auth_servers_timeout?: number | undefined
  coa_enabled?: boolean | undefined
  coa_port?: number | undefined
  network?: string | undefined
  source_ip?: string | undefined
}
type Radsec = {
  enabled?: boolean | undefined
  idle_timeout?: number | undefined
  mxcluster_ids?: string[] | undefined
  server_name?: string | undefined
  servers?: { host?: string | undefined; port?: number | undefined }[] | undefined
  use_mxedge?: boolean | undefined
  use_site_mxedge?: boolean | undefined
}
type ApPortConfig = {
  additional_vlan_ids?: number[] | undefined
  disabled?: boolean | undefined
  dynamic_vlan?:
    | {
        default_vlan_id?: number | undefined
        enabled?: boolean | undefined
        type?: string | undefined
        vlans?: { [x: string]: string } | undefined
      }
    | undefined
  enable_mac_auth?: boolean | undefined
  forwarding?: 'all' | 'limited' | 'wxtunnel' | 'mxtunnel' | 'site_mxedge' | undefined
  mx_tunnel_id?: string | undefined
  mxtunnel_name?: string | undefined
  port_auth?: 'none' | 'dot1x' | undefined
  port_vlan_id?: number | undefined
  radius_config?: JunosRadiusConfig | undefined
  radsec?: Radsec | undefined
  vlan_id?: number | undefined
  vland_ids?: number[] | undefined
  wxtunnel_id?: string | undefined
  wxtunnel_remote_id?: string | undefined
}
type Aptemplate = {
  ap_matching: {
    enabled?: boolean | undefined
    rules?:
      | {
          match_model?: string | undefined
          name?: string | undefined
          port_config?: { [x: string]: ApPortConfig } | undefined
        }[]
      | undefined
  }
  created_time?: number | undefined
  for_site?: boolean | undefined
  id?: string | undefined
  modified_time?: number | undefined
  org_id?: string | undefined
  site_id?: string | undefined
  wifi?:
    | {
        cisco_enabled?: boolean | undefined
        disable_11k?: boolean | undefined
        disable_radios_when_power_constrained?: boolean | undefined
        enable_arp_spoof?: boolean | undefined
        enable_shared_radio_scanning?: boolean | undefined
        enabled?: boolean | undefined
        locate_connected?: boolean | undefined
        locate_unconnected?: boolean | undefined
        mesh_allow_dfs?: boolean | undefined
        mesh_enable_crm?: boolean | undefined
        mesh_enabled?: boolean | undefined
        proxy_arp?: boolean | undefined
      }
    | undefined
}
type AssetFilter = {
  ap_mac?: string | undefined
  beam?: number | undefined
  created_time?: number | undefined
  disasbled?: boolean | undefined
  eddystone_uid_namespace?: string | undefined
  eddystone_url?: string | undefined
  for_site?: boolean | undefined
  ibeacon_major?: number | undefined
  ibeacon_uuid?: string | undefined
  id?: string | undefined
  mfg_company_id?: number | undefined
  modified_time?: number | undefined
  name: string
  org_id?: string | undefined
  rssi?: number | undefined
  service_uuid?: string | undefined
  site_id?: string | undefined
}
type Asset = {
  created_time?: number | undefined
  for_site?: boolean | undefined
  id?: string | undefined
  mac: string
  map_id?: string | undefined
  modified_time?: number | undefined
  name: string
  org_id?: string | undefined
  site_id?: string | undefined
  tag_id?: string | undefined
}
type EventCall = {
  app?: string | undefined
  audio_quality?: string | undefined
  meeting_id?: string | undefined
  org_id?: string | undefined
  reason?: string | undefined
  screen_share_quality?: string | undefined
  site_id?: string | undefined
  timestamp?: number | undefined
  type?: string | undefined
  video_quality?: string | undefined
  wcid?: string | undefined
}
type EventsClient = {
  ap?: string | undefined
  band: '24' | '5'
  bssid?: string | undefined
  channel?: number | undefined
  proto: 'a' | 'b' | 'g' | 'n' | 'ac' | 'ax'
  ssid?: string | undefined
  text?: string | undefined
  timestamp: number
  type?: string | undefined
  type_code?: number | undefined
  wlan_id?: string | undefined
}
type ApAeroscout = {
  enabled?: boolean | undefined
  host?: (string | null) | undefined
  locate_connected?: boolean | undefined
}
type ApBle = {
  beacon_enabled?: boolean | undefined
  beacon_rate?: number | undefined
  beacon_rate_mode?: 'default' | 'custom' | undefined
  beam_disabled?: number[] | undefined
  eddystone_uid_adv_power?: number | undefined
  eddystone_uid_beams?: string | undefined
  eddystone_uid_enabled?: boolean | undefined
  eddystone_uid_freq_msec?: number | undefined
  eddystone_uid_instance?: string | undefined
  eddystone_uid_namespace?: string | undefined
  eddystone_url_adv_power?: number | undefined
  eddystone_url_beams?: string | undefined
  eddystone_url_enabled?: boolean | undefined
  eddystone_url_freq_msec?: number | undefined
  eddystone_url_url?: string | undefined
  ibeacon_adv_power?: number | undefined
  ibeacon_beams?: string | undefined
  ibeacon_enabled?: boolean | undefined
  ibeacon_freq_msec?: number | undefined
  ibeacon_major?: number | undefined
  ibeacon_minor?: number | undefined
  ibeacon_uuid?: string | undefined
  power?: number | undefined
  power_mode?: string | undefined
}
type ApIotOutput = {
  enabled?: boolean | undefined
  name?: string | undefined
  output?: boolean | undefined
  pullup?: 'internal' | 'external' | 'none' | undefined
  value?: number | undefined
}
type ApIotInput = {
  enabled?: boolean | undefined
  name?: string | undefined
  pullup?: 'internal' | 'external' | 'none' | undefined
}
type ApIot = {
  A1?: ApIotOutput | undefined
  A2?: ApIotOutput | undefined
  A3?: ApIotOutput | undefined
  A4?: ApIotOutput | undefined
  DI1?: ApIotInput | undefined
  DI2?: ApIotInput | undefined
  DO?: ApIotOutput | undefined
}
type ApIp = {
  dns?: string[] | undefined
  dns_suffix?: string[] | undefined
  gateway?: string | undefined
  gateway6?: string | undefined
  ip?: string | undefined
  ip6?: string | undefined
  mtu?: number | undefined
  netmask?: string | undefined
  netmask6?: string | undefined
  type?: 'static' | 'dhcp' | undefined
  type6?: 'static' | 'dhcp' | undefined
  vlan_id?: number | undefined
}
type ApLed = { brightness?: number | undefined; enabled?: boolean | undefined }
type ApMesh = {
  enabled?: boolean | undefined
  group?: (number | null) | undefined
  role?: 'base' | 'remote' | undefined
}
type ApRadioBand = {
  allow_rrm_disable?: boolean | undefined
  ant_gain?: (number | null) | undefined
  antenna_mode?: 'default' | '1x1' | '2x2' | '3x3' | '4x4' | undefined
  bandwidth?: 20 | 40 | 80 | undefined
  channel?: (number | null) | undefined
  channels?: (number[] | null) | undefined
  disabled?: boolean | undefined
  power?: (number | null) | undefined
  power_max?: (number | null) | undefined
  power_min?: (number | null) | undefined
  preamble?: 'short' | 'long' | 'auto' | undefined
  usage?: '24' | '5' | 'rrm' | undefined
}
type ApRadio = {
  allow_rrm_disable?: boolean | undefined
  ant_gain_24?: number | undefined
  ant_gain_5?: number | undefined
  ant_gain_6?: number | undefined
  antenna_mode?: 'default' | '1x1' | '2x2' | '3x3' | '4x4' | undefined
  band_24?: ApRadioBand | undefined
  band_24_usage?: '24' | '5' | 'auto' | undefined
  band_5?: ApRadioBand | undefined
  band_5_on_24_radio?: ApRadioBand | undefined
  band_6?: ApRadioBand | undefined
  scanning_enabled?: boolean | undefined
}
type ApSwitchSetting = {
  additional_vlan_ids?: number[] | undefined
  enable_vlan?: boolean | undefined
  port_vlan_id?: number | string | undefined
  vlan_ids?: number[] | undefined
}
type ApSwitch = {
  enabled?: boolean | undefined
  eth0?: ApSwitchSetting | undefined
  eth1?: ApSwitchSetting | undefined
  eth2?: ApSwitchSetting | undefined
  eth3?: ApSwitchSetting | undefined
  module?: ApSwitchSetting | undefined
  wds?: ApSwitchSetting | undefined
}
type ApUsb = {
  cacert?: (string | null) | undefined
  channel?: number | undefined
  enabled?: boolean | undefined
  host?: string | undefined
  port?: number | undefined
  type?: 'imagotag' | 'solum' | 'hanshow' | undefined
  verify_cert?: boolean | undefined
  vlan_id?: number | undefined
}
type Deviceprofile = {
  aeroscout?: ApAeroscout | undefined
  ble_config?: ApBle | undefined
  created_time?: number | undefined
  disable_eth1?: boolean | undefined
  disable_eth2?: boolean | undefined
  disable_eth3?: boolean | undefined
  disable_module?: boolean | undefined
  for_site?: boolean | undefined
  height?: (number | null) | undefined
  id?: string | undefined
  iot_config?: ApIot | undefined
  ip_config?: ApIp | undefined
  led?: ApLed | undefined
  map_id?: (string | null) | undefined
  mesh?: ApMesh | undefined
  modified_time?: number | undefined
  name?: (string | null) | undefined
  notes?: (string | null) | undefined
  ntp_servers?: string[] | undefined
  org_id?: string | undefined
  orientation?: number | undefined
  orientation_overwrite?: boolean | undefined
  poe_passthrough?: boolean | undefined
  port_config?: { [x: string]: ApPortConfig } | undefined
  pwr_config?: { base?: number | undefined } | undefined
  radio_config?: ApRadio | undefined
  site_id?: string | undefined
  switch_config?: ApSwitch | undefined
  type?: 'ap' | 'switch' | 'gateway' | undefined
  usb_config?: ApUsb | undefined
  vars?: { [x: string]: unknown } | undefined
  x?: (number | null) | undefined
  y?: (number | null) | undefined
}
type ModelObjectMacsArrayString = { macs: string[] }
type EventsDeviceAp = {
  last_reboot_time?: number | undefined
  text?: string | undefined
  timestamp: number
  type?: string | undefined
  type_code?: number | undefined
}
type DeviceSearchAp = {
  band_24_bandwith?: string | undefined
  band_24_channel?: number | undefined
  band_24_power?: number | undefined
  band_5_bandwith?: string | undefined
  band_5_channel?: number | undefined
  band_5_power?: number | undefined
  band_6_bandwith?: string | undefined
  band_6_channel?: number | undefined
  band_6_power?: number | undefined
  eth0_port_speed?: number | undefined
  ext_ip?: string | undefined
  hostname?: string[] | undefined
  ip?: string | undefined
  lldp_mgmt_addr?: string | undefined
  lldp_port_desc?: string | undefined
  lldp_port_id?: string | undefined
  lldp_power_allocated?: number | undefined
  lldp_power_draw?: number | undefined
  lldp_system_desc?: string | undefined
  lldp_system_name?: string | undefined
  mac?: string | undefined
  model?: string | undefined
  mxedge_id?: string | undefined
  mxtunnel_status?: string | undefined
  org_id?: string | undefined
  power_constrained?: boolean | undefined
  site_id?: string | undefined
  sku?: string | undefined
  timestamp?: number | undefined
  uptime?: number | undefined
  version?: string | undefined
}
type DeviceSearchSwitchGateway = {
  ext_ip?: string | undefined
  hostname?: string[] | undefined
  ip?: string | undefined
  last_hostname?: string | undefined
  mac?: string | undefined
  model?: string | undefined
  num_members?: number | undefined
  org_id?: string | undefined
  site_id?: string | undefined
  timestamp?: number | undefined
  type?: string | undefined
  uptime?: number | undefined
  version?: string | undefined
}
type DeviceUpgrade = {
  canary_phases?: number[] | undefined
  device_ids?: string[] | undefined
  enable_p2p?: boolean | undefined
  force?: boolean | undefined
  max_failure_percentage?: number | undefined
  max_failures?: number[] | undefined
  models?: string[] | undefined
  p2p_cluster_size?: number | undefined
  p2p_parallelism?: number | undefined
  reboot?: boolean | undefined
  reboot_at?: number | undefined
  rrm_first_batch_percentage?: number | undefined
  rrm_max_batch_percentage?: number | undefined
  rrm_mesh_upgrade?: string | undefined
  rrm_node_order?: 'fringe_to_center' | 'center_to_fringe' | undefined
  rrm_slow_ramp?: boolean | undefined
  snapshot?: boolean | undefined
  start_time?: number | undefined
  strategy?: 'big_bang' | 'canary' | 'serial' | 'rrm' | undefined
  version?: string | undefined
}
type OrgDeviceUpgradeResponse = {
  enable_p2p?: boolean | undefined
  force?: boolean | undefined
  id: string
  start_time?: number | undefined
  status?: 'created' | 'in_progress' | 'completed' | 'canceled' | undefined
  strategy?: 'big_bang' | undefined
  target_version?: string | undefined
  upgrades?:
    | {
        site_id?: string | undefined
        upgrade?:
          | {
              id?: string | undefined
              start_time?: number | undefined
              status?: 'created' | 'in_progress' | 'completed' | 'cancelled' | undefined
              targets?:
                | {
                    downloaded?: string[] | undefined
                    failed?: string[] | undefined
                    reboot_in_progress?: string[] | undefined
                    rebooted?: string[] | undefined
                    scheduled?: string[] | undefined
                    skipped?: string[] | undefined
                    upgraded?: string[] | undefined
                  }
                | undefined
            }
          | undefined
      }[]
    | undefined
}
type JunosEvpnTopology = {
  id?: string | undefined
  name?: string | undefined
  pod_names?: { [x: string]: string } | undefined
  switches: {
    deviceprofile_id?: string | undefined
    downlink_ips?: string[] | undefined
    downlinks?: string[] | undefined
    esilaglinks?: string[] | undefined
    evpn_id?: number | undefined
    mac?: string | undefined
    pod?: number | undefined
    role?:
      | 'core'
      | 'distribution'
      | 'access'
      | 'collapsed-core'
      | 'none'
      | 'esilag-access'
      | undefined
    site_id?: string | undefined
    uplinks?: string[] | undefined
  }[]
}
type JunosBgpConfig = {
  auth_key?: string | undefined
  bfd_minimum_interval?: number | undefined
  communities?:
    | {
        id?: string | undefined
        local_preference?: number | undefined
        vpn_name?: string | undefined
      }[]
    | undefined
  disable_bfd?: boolean | undefined
  export?: string | undefined
  export_policy?: string | undefined
  graceful_restart_time?: number | undefined
  hold_time?: number | undefined
  import?: string | undefined
  import_policy?: string | undefined
  local_as?: number | undefined
  neighbor_as?: number | undefined
  neighbors?:
    | {
        [x: string]: {
          export_policy?: string | undefined
          hold_time?: number | undefined
          import_policy?: string | undefined
          multihop_ttl?: number | undefined
          neighbor_as?: number | undefined
        }
      }
    | undefined
  networks?: string[] | undefined
  type?: 'internal' | 'external' | undefined
  via?: 'lan' | 'wan' | undefined
  vpn_name?: string | undefined
  wan_name?: string | undefined
}
type JunosPortConfig = {
  ae_disable_lacp?: boolean | undefined
  ae_idx?: number | undefined
  aggregated?: boolean | undefined
  critical?: boolean | undefined
  description?: string | undefined
  disable_autoneg?: boolean | undefined
  duplex?: 'auto' | 'full' | 'half' | undefined
  dynamic_usage?: (string | null) | undefined
  esilag?: boolean | undefined
  mtu?: number | undefined
  no_local_overwrite?: boolean | undefined
  poe_disabled?: boolean | undefined
  speed?: 'auto' | '10m' | '100m' | '1g' | '2.5g' | '5g' | undefined
  usage: string
}
type TemplateGatewayMatching = {
  enable?: boolean | undefined
  rules?:
    | {
        additional_config_cmds?: string[] | undefined
        name?: string | undefined
        port_config?: { [x: string]: JunosPortConfig } | undefined
      }[]
    | undefined
}
type Network = {
  created_time?: number | undefined
  disallow_mist_services?: boolean | undefined
  gateway?: string | undefined
  hosts?:
    | { [x: string]: { external_ips?: string | undefined; ips?: string | undefined } }
    | undefined
  id?: string | undefined
  internal_access?: { enabled?: boolean | undefined } | undefined
  internet_access?:
    | {
        create_simple_service_policy?: boolean | undefined
        destination_nat?:
          | {
              [x: string]: {
                internal_ip?: string | undefined
                name?: string | undefined
                port?: string | undefined
              }
            }
          | undefined
        enabled?: boolean | undefined
        restricted?: boolean | undefined
        static_nat?:
          | { [x: string]: { internal_ip?: string | undefined; name?: string | undefined } }
          | undefined
      }
    | undefined
  isolation?: boolean | undefined
  modified_time?: number | undefined
  name?: string | undefined
  org_id?: string | undefined
  subnet?: string | undefined
  tenants?: { [x: string]: { addresses?: string | undefined } } | undefined
  vlan_id?: number | undefined
  vpn_access?:
    | {
        [x: string]: {
          allow_ping?: boolean | undefined
          destination_nat?:
            | {
                [x: string]: {
                  name?: string | undefined
                  port?: string | undefined
                  to?: string | undefined
                }
              }
            | undefined
          nat_pool?: string | undefined
          routed?: boolean | undefined
          source_nat?: { exteral_ip?: string | undefined } | undefined
          static_nat?:
            | { [x: string]: { name?: string | undefined; to?: string | undefined } }
            | undefined
          summarized_nat_pool?: string | undefined
        }
      }
    | undefined
}
type JunosOobIpConfig = {
  dns?: string[] | undefined
  dns_suffix?: string[] | undefined
  gateway?: string | undefined
  ip?: string | undefined
  netmask?: string | undefined
  network?: string | undefined
  type?: 'static' | 'dynamic' | undefined
  use_mgmt_vrf?: boolean | undefined
  use_mgmt_vrf_for_host_out?: boolean | undefined
}
type JunosIpConfigGateway = {
  dns?: string[] | undefined
  dns_suffix?: string[] | undefined
  gateway?: string | undefined
  ip?: string | undefined
  netmask?: string | undefined
  network?: string | undefined
  poser_password?: string | undefined
  ppoe_username?: string | undefined
  pppoe_auth?: 'none' | 'chap' | 'pap' | undefined
  type?: 'dhcp' | 'static' | 'ppoe' | undefined
}
type JunosPortConfigGateway = {
  description?: string | undefined
  disable_autoneg?: boolean | undefined
  dsl_config?:
    | {
        ppoe_auth?: 'none' | 'chap' | 'pap' | undefined
        ppoe_password?: string | undefined
        ppoe_username?: string | undefined
      }
    | undefined
  duplex?: 'half' | 'full' | 'auto' | undefined
  ip_config?: JunosIpConfigGateway | undefined
  lte_apn?: string | undefined
  lte_auth?: 'none' | 'chap' | 'pap' | undefined
  lte_backup?: boolean | undefined
  lte_password?: string | undefined
  lte_username?: string | undefined
  mtu?: number | undefined
  name?: string | undefined
  networks?: string[] | undefined
  outer_vlan_id?: number | undefined
  pci_address?: string | undefined
  poe_disabled?: boolean | undefined
  port_network?: string | undefined
  preserve_dscp?: boolean | undefined
  redundant?: boolean | undefined
  reth_idx?: number | undefined
  reth_node?: string | undefined
  speed?: string | undefined
  svr_port_range?: string | undefined
  traffic_shaping?:
    | { class_percentages?: number[] | undefined; enabled?: boolean | undefined }
    | undefined
  usage: 'lan' | 'wan' | 'ha_data' | 'ha_control'
  vlan_id?: number | undefined
  vpn_paths?:
    | {
        [x: string]: {
          bfd_profile?: 'lte' | 'broadband' | undefined
          bfd_udp_transform?: boolean | undefined
          role?: 'spoke' | 'hub' | undefined
          traffic_shaping?:
            | {
                class_percentage?: number[] | undefined
                enabled?: boolean | undefined
                max_tx_kbps?: number | undefined
              }
            | undefined
        }
      }
    | undefined
  wan_ext_ip?: string | undefined
  wan_source_nat?: { disabled?: boolean | undefined; nat_pool?: string | undefined } | undefined
  wan_type?: 'broadband' | 'dsl' | 'lte' | undefined
}
type JunosRoutingPolicy = {
  terms?:
    | {
        action?:
          | {
              accept?: boolean | undefined
              community?: string[] | undefined
              exclude_as_path?: string[] | undefined
              export_communitites?: string[] | undefined
              local_preference?: string | undefined
              prepend_as_path?: string[] | undefined
              summarize?: string | undefined
            }
          | undefined
        matching?:
          | {
              as_path?: string[] | undefined
              community?: string[] | undefined
              network?: string[] | undefined
              prefix?: string[] | undefined
              protocol?: string[] | undefined
              route_exists?:
                | { route?: string | undefined; vrf_name?: string | undefined }
                | undefined
              vpn_name?: string[] | undefined
              vpn_path?: string[] | undefined
            }
          | undefined
      }[]
    | undefined
}
type JunosIdpConfig = {
  alert_only?: string | undefined
  enabled?: boolean | undefined
  profile?: 'strict' | 'standard' | undefined
}
type GatewaytemplateTunnelConfigs = {
  ike_lifetime?: number | undefined
  ike_mode?: 'main' | 'aggressive' | undefined
  ike_proposals?:
    | {
        auth_algo?: 'sha1' | 'sha2' | 'md5' | undefined
        dh_group?: '1' | '2' | '5' | '14' | '15' | '16' | '19' | '20' | '21' | '24' | undefined
        enc_algo?: 'aes256' | '3des' | 'aes128' | 'aes_gcm256' | 'aes_gcm128' | undefined
      }[]
    | undefined
  ipsec_lifetime?: number | undefined
  ipsec_proposals?:
    | {
        auth_algo?: 'sha1' | 'sha2' | 'md5' | undefined
        dh_group?: '1' | '2' | '5' | '14' | '15' | '16' | '19' | '20' | '21' | '24' | undefined
        enc_algo?: 'aes256' | '3des' | 'aes128' | 'aes_gcm128' | 'aes_gcm256' | undefined
      }[]
    | undefined
  local_id?: string | undefined
  mode?: 'active-standby' | 'active-active' | undefined
  primary?:
    | {
        hosts?: string[] | undefined
        internal_ips?: string[] | undefined
        probe_ips?: string[] | undefined
        remote_ids?: string[] | undefined
        wan_names?: string[] | undefined
      }
    | undefined
  probe?:
    | {
        interval?: number | undefined
        threshold?: number | undefined
        timeout?: number | undefined
        type?: 'icmp' | 'http' | undefined
      }
    | undefined
  protocol?: 'ipsec' | 'gre' | undefined
  provider?:
    | 'zscaler-ipsec'
    | 'zscaler-gre'
    | 'customer-gre'
    | 'jse-ipsec'
    | 'custom-ipsec'
    | undefined
  psk?: string | undefined
  secondary?:
    | {
        hosts?: string[] | undefined
        internal_ips?: string[] | undefined
        probe_ips?: string[] | undefined
        remote_ids?: string[] | undefined
        wan_names?: string[] | undefined
      }
    | undefined
  version?: '1' | '2' | undefined
}
type Gatewaytemplate = {
  additional_config_cmds?: string[] | undefined
  bgp_config?: { [x: string]: JunosBgpConfig } | undefined
  created_time?: number | undefined
  dhcpd_config?:
    | {
        [x: string]: {
          dns_servers?: string[] | undefined
          dns_suffix?: string[] | undefined
          fixed_bindings?: { [x: string]: { ip: string; name?: string | undefined } } | undefined
          gateway?: string | undefined
          ip_end?: string | undefined
          ip_start?: string | undefined
          servers?: string[] | undefined
          type?: 'local' | 'relay' | undefined
        }
      }
    | undefined
  extra_routes?: { [x: string]: { via?: string | undefined } } | undefined
  gateway_matching?: TemplateGatewayMatching | undefined
  id?: string | undefined
  ip_configs?:
    | { [x: string]: { ip?: string | undefined; netmask?: string | undefined } }
    | undefined
  modified_time?: number | undefined
  name: string
  networks?: { [x: string]: Network } | undefined
  oob_ip_config?: JunosOobIpConfig | undefined
  org_id?: string | undefined
  path_preferences?:
    | {
        [x: string]: {
          paths?:
            | {
                cost?: number | undefined
                gateway_ip?: string | undefined
                internet_access?: boolean | undefined
                name?: string | undefined
                networks?: string[] | undefined
                target_ips?: string[] | undefined
                type?: 'local' | 'wan' | 'vpn' | 'tunnel' | undefined
              }
            | undefined
          strategy?: 'ordered' | 'weighted' | 'ecmp' | undefined
        }
      }
    | undefined
  port_config?: { [x: string]: JunosPortConfigGateway } | undefined
  routing_policies?: { [x: string]: JunosRoutingPolicy } | undefined
  service_policies?:
    | {
        action?: 'allow' | 'deny' | undefined
        ewf?:
          | {
              alert_only?: boolean | undefined
              block_message?: string | undefined
              enabled?: boolean | undefined
              profille?: 'strict' | 'standard' | undefined
            }[]
          | undefined
        idp?: JunosIdpConfig | undefined
        local_routing?: boolean | undefined
        name?: string | undefined
        path_preferences?: string | undefined
        servicepolicy_id?: string | undefined
        services?: string[] | undefined
        tenants?: string[] | undefined
      }[]
    | undefined
  tunnel_configs?: { [x: string]: GatewaytemplateTunnelConfigs } | undefined
  type?: 'standalone' | 'spoke' | 'hub' | undefined
}
type Guest = {
  authorized?: boolean | undefined
  authorized_expiring_time?: number | undefined
  authorized_time?: number | undefined
  company?: string | undefined
  email?: string | undefined
  field1?: string | undefined
  field2?: string | undefined
  field3?: string | undefined
  field4?: string | undefined
  mac?: string | undefined
  minutes?: number | undefined
  name?: string | undefined
  ssid?: string | undefined
  wlan_id?: string | undefined
}
type OrgSiteSleWifiResponse = {
  end: number
  interval: number
  limit: number
  page: number
  results: {
    'ap-availability'?: number | undefined
    'ap-health'?: number | undefined
    capacity?: number | undefined
    coverage?: number | undefined
    num_aps?: number | undefined
    num_clients?: number | undefined
    roaming?: number | undefined
    site_id: string
    'successful-connect'?: number | undefined
    throughput?: number | undefined
    'time-to-connect'?: number | undefined
  }[]
  start: number
  total: number
}
type OrgSiteSleWiredResponse = {
  end: number
  interval: number
  limit: number
  page: number
  results: {
    num_clients?: number | undefined
    num_switches?: number | undefined
    site_id: string
    'switch-health'?: number | undefined
    'switch-stc'?: number | undefined
    'switch-throughput'?: number | undefined
  }[]
  start: number
  total: number
}
type OrgSiteSleWanResponse = {
  end: number
  interval: number
  limit: number
  page: number
  results: {
    'application-health'?: number | undefined
    'gateway-health'?: number | undefined
    num_clients?: number | undefined
    num_gateways?: number | undefined
    site_id: string
    'wan-link-health'?: number | undefined
  }[]
  start: number
  total: number
}
type Inventory = {
  adopted?: boolean | undefined
  connected?: boolean | undefined
  created_time?: number | undefined
  deviceprofile_id?: (string | null) | undefined
  hw_rev?: string | undefined
  id?: string | undefined
  jsi?: boolean | undefined
  mac?: string | undefined
  magic?: string | undefined
  model?: string | undefined
  modified_time?: number | undefined
  name?: string | undefined
  org_id?: string | undefined
  serial?: string | undefined
  site_id?: (string | null) | undefined
  sku?: string | undefined
  type?: 'ap' | 'switch' | 'gateway' | undefined
}
type ResponseInventory = {
  added?: string[] | undefined
  duplicated?: string[] | undefined
  error?: string[] | undefined
  inventory_added?:
    | { mac: string; magic: string; model: string; serial: string; type: string }[]
    | undefined
  inventory_duplicated?:
    | { mac: string; magic: string; model: string; serial: string; type: string }[]
    | undefined
}
type MxedgeDas = {
  coa_servers?:
    | {
        disable_event_timestamp_check?: boolean | undefined
        enabled?: boolean | undefined
        host?: string | undefined
        port?: number | undefined
        secret?: string | undefined
      }[]
    | undefined
  enabled?: boolean | undefined
}
type MxclusterNac = {
  acct_server_port?: number | undefined
  auth_server_port?: number | undefined
  client_ips?:
    | {
        [x: string]: {
          secret?: string | undefined
          site_id?: string | undefined
          vendor?: string | undefined
        }
      }
    | undefined
  enabled?: boolean | undefined
  secret?: string | undefined
}
type MxclusterRadsec = {
  acct_servers?:
    | {
        host?: string | undefined
        port?: number | undefined
        secret?: string | undefined
        ssids?: string[] | undefined
      }[]
    | undefined
  auth_servers?:
    | {
        host?: string | undefined
        keywrap_enabled?: boolean | undefined
        keywrap_format?: 'hex' | 'ascii' | undefined
        keywrap_kek?: string | undefined
        keywrap_mack?: string | undefined
        port?: number | undefined
        secret?: string | undefined
        ssids?: string[] | undefined
      }[]
    | undefined
  enabled?: boolean | undefined
  match_ssid?: boolean | undefined
  proxy_hosts?: string[] | undefined
  server_selection?: 'ordered' | 'unordered' | undefined
  source?: 'tunnel' | 'oob' | 'any' | undefined
}
type SiteTuntermMonitoring = {
  host?: string | undefined
  port?: number | undefined
  protocol?: 'arp' | 'ping' | 'tcp' | undefined
  timeout?: number | undefined
}
type Mxcluster = {
  created_time?: number | undefined
  for_site?: boolean | undefined
  id?: string | undefined
  mist_das?: MxedgeDas | undefined
  mist_nac?: MxclusterNac | undefined
  modified_time?: number | undefined
  name?: string | undefined
  org_id?: string | undefined
  proxy?: { url?: string | undefined } | undefined
  radsec?: MxclusterRadsec | undefined
  radsec_tls?: { keypair?: string | undefined } | undefined
  site_id?: string | undefined
  tunterm_ap_subnets?: string[] | undefined
  tunterm_dhcpd_config?:
    | { enabled?: boolean | undefined; servers?: string[] | undefined; type?: 'relay' | undefined }
    | undefined
  tunterm_extra_routes?: { [x: string]: { via?: string | undefined } } | undefined
  tunterm_hosts?: string[] | undefined
  tunterm_hosts_order?: number[] | undefined
  tunterm_hosts_selection?: 'shuffle' | 'shuffle-by-site' | 'ordered' | undefined
  tunterm_monitoring?: SiteTuntermMonitoring[] | undefined
  tunterm_monitoring_disabled?: boolean | undefined
}
type Mxedge = {
  created_time?: number | undefined
  for_site?: boolean | undefined
  id?: string | undefined
  magic?: string | undefined
  model: string
  modified_time?: number | undefined
  mxagent_registered?: boolean | undefined
  mxcluster_id?: string | undefined
  mxedge_mgmt?:
    | { mist_password?: string | undefined; root_password?: string | undefined }
    | undefined
  name: string
  ntp_servers?: string[] | undefined
  oob_ip_config?:
    | {
        dns?: string[] | undefined
        gateway?: string | undefined
        ip?: string | undefined
        netmask?: string | undefined
        type?: 'static' | 'dhcp' | undefined
      }
    | undefined
  org_id?: string | undefined
  proxy?: { url?: string | undefined } | undefined
  services?: string[] | undefined
  site_id?: string | undefined
  tunterm_dhcpd_config?:
    | { enabled?: boolean | undefined; servers?: string[] | undefined; type?: 'relay' | undefined }
    | undefined
  tunterm_extra_routes?: { [x: string]: { via?: string | undefined } } | undefined
  tunterm_igmp_snooping_config?:
    | {
        enabled?: boolean | undefined
        querier?:
          | {
              max_response_time?: number | undefined
              mtu?: number | undefined
              query_interval?: number | undefined
              robustness?: number | undefined
              version?: number | undefined
            }
          | undefined
        vlan_ids?: number[] | undefined
      }
    | undefined
  tunterm_ip_config?: { gateway: string; ip: string; netmask: string } | undefined
  tunterm_monitoring?: SiteTuntermMonitoring[] | undefined
  tunterm_other_ip_configs?: { [x: string]: { ip: string; netmask: string } } | undefined
  tunterm_port_config?:
    | {
        downstream_ports?: string[] | undefined
        separate_upstream_downstream?: boolean | undefined
        upstream_port_vlan_id?: number | undefined
        upstream_ports?: string[] | undefined
      }
    | undefined
  tunterm_registered?: boolean | undefined
  tunterm_switch_config?: { enabled?: boolean | undefined } | undefined
  versions?: { mxagent?: string | undefined; tuntnerm?: string | undefined } | undefined
}
type MxedgeUpgradeResponse = {
  channel: string
  counts: { failed: number; queued: number; success: number; upgrading: number }
  id: string
  status: string
  strategy: string
  versions: { [x: string]: unknown }
}
type Mxtunnel = {
  anchor_mxtunnel_ids?: string[] | undefined
  auto_preemption?:
    | {
        day_of_week?: 'any' | 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun' | undefined
        enabled?: boolean | undefined
        time_of_day?: string | undefined
      }
    | undefined
  created_time?: number | undefined
  for_site?: boolean | undefined
  hello_interval?: (number | null) | undefined
  hello_retries?: (number | null) | undefined
  id?: string | undefined
  ipsec?:
    | {
        dns_servers?: (string[] | null) | undefined
        dns_suffix?: string[] | undefined
        enabled?: boolean | undefined
        extra_routes?: { dest?: string | undefined; next_hop?: string | undefined }[] | undefined
        split_tunnel?: boolean | undefined
        use_mxedge?: boolean | undefined
      }
    | undefined
  modified_time?: number | undefined
  mtu?: number | undefined
  mxcluster_ids?: string[] | undefined
  name?: (string | null) | undefined
  org_id?: string | undefined
  protocol?: 'udp' | 'ip' | undefined
  site_id?: string | undefined
  vlan_ids?: number[] | undefined
}
type NacRuleMatching = {
  auth_type?: 'cert' | 'idp' | 'mab' | 'psk' | undefined
  nactags?: string[] | undefined
  port_types?: ('wireless' | 'wired')[] | undefined
  site_ids?: string[] | undefined
  sitegroup_ids?: string[] | undefined
}
type NacRule = {
  action: 'allow' | 'block'
  apply_tags?: string[] | undefined
  created_time?: number | undefined
  enabled?: boolean | undefined
  id?: string | undefined
  matching?: NacRuleMatching | undefined
  modified_time?: number | undefined
  name: string
  not_matching?: NacRuleMatching | undefined
  order?: number | undefined
  org_id?: string | undefined
}
type NacTag = {
  created_time?: number | undefined
  gbp_tag?: number | undefined
  id?: string | undefined
  match?:
    | 'vendor'
    | 'idp_role'
    | 'cert_cn'
    | 'cert_sub'
    | 'cert_serial'
    | 'cert_issuer'
    | 'cert_san'
    | 'realm'
    | 'user_name'
    | 'ssid'
    | 'client_mac'
    | undefined
  modified_time?: number | undefined
  name: string
  org_id?: string | undefined
  radius_group?: string | undefined
  type: 'match' | 'radius_group' | 'vlan' | 'gbp_tag'
  values?: string[] | undefined
  vlan?: string | undefined
}
type JunosDhcpSnooping = {
  all_networks?: boolean | undefined
  enable_arp_spoof_check?: boolean | undefined
  enable_ip_source_guard?: boolean | undefined
  enabled?: boolean | undefined
  networks?: string[] | undefined
}
type JunosPortUsagesDynamic = {
  mode: 'dynamic'
  reset_default_when?: 'none' | 'link_down' | undefined
  rules?:
    | {
        equals?: string | undefined
        equals_any?: string[] | undefined
        expression?: string | undefined
        src:
          | 'lldp_chassis_id'
          | 'lldp_system_name'
          | 'lldp_serial_number'
          | 'lldp_hardware_revision'
          | 'lldp_manufacturer_name'
          | 'lldp_oui'
          | 'radius_username'
          | 'radius_usermac'
          | 'radius_dynamicfilter'
          | 'link_peermac'
        usage?: string | undefined
      }[]
    | undefined
}
type RemoteSyslog = {
  archive?: { files?: number | undefined; size?: string | undefined } | undefined
  console?:
    | {
        contents?:
          | {
              facility?:
                | 'any'
                | 'authorization'
                | 'conflict-log'
                | 'change-log'
                | 'daemon'
                | 'dfc'
                | 'kernel'
                | 'interactive-commands'
                | 'ftp'
                | 'firewall'
                | 'external'
                | 'pfe'
                | 'ntp'
                | 'security'
                | 'user'
                | undefined
              severity?:
                | 'any'
                | 'alert'
                | 'emergency'
                | 'critical'
                | 'warning'
                | 'info'
                | 'notice'
                | 'error'
                | undefined
            }[]
          | undefined
      }
    | undefined
  enabled?: boolean | undefined
  files?:
    | {
        archive?: { files?: number | undefined; size?: string | undefined } | undefined
        contents?:
          | {
              facility?:
                | 'any'
                | 'authorization'
                | 'conflict-log'
                | 'change-log'
                | 'daemon'
                | 'dfc'
                | 'kernel'
                | 'interactive-commands'
                | 'ftp'
                | 'firewall'
                | 'external'
                | 'pfe'
                | 'ntp'
                | 'security'
                | 'user'
                | undefined
              severity?:
                | 'any'
                | 'alert'
                | 'emergency'
                | 'critical'
                | 'warning'
                | 'info'
                | 'notice'
                | 'error'
                | undefined
            }[]
          | undefined
        explicit_priority?: boolean | undefined
        file?: string | undefined
        match?: string | undefined
        structured_data?: boolean | undefined
      }[]
    | undefined
  network?: string | undefined
  send_to_all_servers?: boolean | undefined
  servers?:
    | {
        contents?:
          | {
              facility?:
                | 'any'
                | 'authorization'
                | 'conflict-log'
                | 'change-log'
                | 'daemon'
                | 'dfc'
                | 'kernel'
                | 'interactive-commands'
                | 'ftp'
                | 'firewall'
                | 'external'
                | 'pfe'
                | 'ntp'
                | 'security'
                | 'user'
                | undefined
              severity?:
                | 'any'
                | 'alert'
                | 'emergency'
                | 'critical'
                | 'warning'
                | 'info'
                | 'notice'
                | 'error'
                | undefined
            }[]
          | undefined
        explicit_priority?: boolean | undefined
        facility?:
          | 'any'
          | 'authorization'
          | 'conflict-log'
          | 'change-log'
          | 'daemon'
          | 'dfc'
          | 'kernel'
          | 'interactive-commands'
          | 'ftp'
          | 'firewall'
          | 'external'
          | 'pfe'
          | 'ntp'
          | 'security'
          | 'user'
          | undefined
        host?: string | undefined
        match?: string | undefined
        port?: number | undefined
        protocol?: 'udp' | 'tcp' | undefined
        routing_instance?: string | undefined
        severity?:
          | 'any'
          | 'alert'
          | 'emergency'
          | 'critical'
          | 'warning'
          | 'info'
          | 'notice'
          | 'error'
          | undefined
        source_address?: string | undefined
        structured_data?: boolean | undefined
        tag?: string | undefined
      }[]
    | undefined
  time_format?: 'millisecond' | 'year' | 'year millisecond' | undefined
  users?:
    | {
        contents?:
          | {
              facility?:
                | 'any'
                | 'authorization'
                | 'conflict-log'
                | 'change-log'
                | 'daemon'
                | 'dfc'
                | 'kernel'
                | 'interactive-commands'
                | 'ftp'
                | 'firewall'
                | 'external'
                | 'pfe'
                | 'ntp'
                | 'security'
                | 'user'
                | undefined
              severity?:
                | 'any'
                | 'alert'
                | 'emergency'
                | 'critical'
                | 'warning'
                | 'info'
                | 'notice'
                | 'error'
                | undefined
            }[]
          | undefined
        match?: string | undefined
        user?: string | undefined
      }[]
    | undefined
}
type JunosSnmpConfig = {
  client_list?:
    | { client_list_name?: string | undefined; clients?: string[] | undefined }[]
    | undefined
  contact?: string | undefined
  description?: string | undefined
  enabled?: boolean | undefined
  engine_id?:
    | 'local'
    | 'engine-id-suffix'
    | 'use-default-ip-address'
    | 'use-mac-address'
    | undefined
  location?: string | undefined
  name?: string | undefined
  trap_groups?:
    | {
        categories?: string[] | undefined
        group_name?: string | undefined
        targets?: string[] | undefined
        version?: 'v1' | 'v2' | 'all' | undefined
      }[]
    | undefined
  v2c_config?:
    | {
        authorization?: string | undefined
        client_list_name?: string | undefined
        community_name?: string | undefined
        view?: string | undefined
      }[]
    | undefined
  v3_config?:
    | {
        notify?:
          | {
              name?: string | undefined
              tag?: string | undefined
              type?: 'trap' | 'inform' | undefined
            }[]
          | undefined
        notify_filter?:
          | {
              contents?: { include?: boolean | undefined; oid?: string | undefined }[] | undefined
              profile_name?: string | undefined
            }[]
          | undefined
        target_address?:
          | {
              address?: string | undefined
              address_mask?: string | undefined
              port?: number | undefined
              tag_list?: string | undefined
              target_address_name?: string | undefined
              target_parameters?: string | undefined
            }[]
          | undefined
        target_parameters?:
          | {
              message_processing_model?: 'v1' | 'v2c' | 'v3' | undefined
              name?: string | undefined
              notify_filter?: string | undefined
              security_level?: 'authentication' | 'none' | 'privacy' | undefined
              security_model?: 'usm' | 'v1' | 'v2c' | undefined
              security_name?: string | undefined
            }[]
          | undefined
        usm?:
          | {
              'engine-id'?: string | undefined
              engine_type?: 'remote_engine' | 'local_engine' | undefined
              users?:
                | {
                    authentication_password?: string | undefined
                    authentication_type?:
                      | 'authentication-md5'
                      | 'authentication-sha'
                      | 'authentication-sha224'
                      | 'authentication-sha256'
                      | 'authentication-sha384'
                      | 'authentication-sha512'
                      | 'authentication-none'
                      | undefined
                    encryption_password?: string | undefined
                    encryption_type?:
                      | 'privacy-aes128'
                      | 'privacy-des'
                      | 'privacy-3des'
                      | 'privacy-none'
                      | undefined
                    name?: string | undefined
                  }[]
                | undefined
            }
          | undefined
        vacm?:
          | {
              access?:
                | {
                    group_name?: string | undefined
                    prefix_list?:
                      | {
                          context_prefix?: string | undefined
                          notify_view?: string | undefined
                          read_view?: string | undefined
                          security_level?: 'privacy' | 'authentication' | 'none' | undefined
                          security_model?: 'any' | 'usm' | 'v1' | 'v2c' | undefined
                          type?: 'default_context_prefix' | undefined
                          write_view?: string | undefined
                        }[]
                      | undefined
                  }[]
                | undefined
              security_to_group?:
                | {
                    content?:
                      | { group?: string | undefined; security_name?: string | undefined }[]
                      | undefined
                    security_model?: 'usm' | 'v1' | 'v2c' | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
  views?:
    | { include?: boolean | undefined; oid?: string | undefined; view_name?: string | undefined }
    | undefined
}
type TemplateSwitchMatching = {
  enable?: boolean | undefined
  rules?:
    | {
        additional_config_cmds?: string[] | undefined
        match_role?: string | undefined
        name?: string | undefined
        port_config?: { [x: string]: JunosPortConfig } | undefined
        switch_mgmt?:
          | {
              ap_affinity_threshold?: string | undefined
              config_revert_timer?: number | undefined
              dhcp_option_fqdn?: boolean | undefined
              mxedge_proxy_host?: string | undefined
              mxedge_proxy_port?: number | undefined
              use_mxedge_proxy?: boolean | undefined
            }
          | undefined
      }[]
    | undefined
}
type Networktemplate = {
  additional_config_cmds?: string[] | undefined
  created_time?: number | undefined
  dhcp_snooping?: JunosDhcpSnooping | undefined
  dns_servers?: string[] | undefined
  dns_suffix?: string[] | undefined
  extra_routes?: { [x: string]: { via?: string | undefined } } | undefined
  group_tags?: { [x: string]: unknown } | undefined
  id?: string | undefined
  mist_nac?: { enabled?: boolean | undefined; network?: string | undefined } | undefined
  modified_time?: number | undefined
  name?: string | undefined
  networks?:
    | { [x: string]: { subnet?: string | undefined; vlan_id?: number | undefined } }
    | undefined
  ntp_servers?: string[] | undefined
  org_id?: string | undefined
  port_usages?: { dynamic?: JunosPortUsagesDynamic | undefined } | undefined
  radius_config?: JunosRadiusConfig | undefined
  remote_syslog?: RemoteSyslog | undefined
  snmp_config?: JunosSnmpConfig | undefined
  switch_matching?: TemplateSwitchMatching | undefined
  switch_mgmt?:
    | {
        config_revert?: number | undefined
        protect_re?: { enabled?: boolean | undefined } | undefined
        root_password?: string | undefined
        tacacs?:
          | {
              acct_servers?:
                | {
                    host?: string | undefined
                    port?: string | undefined
                    secret?: string | undefined
                    timeout?: number | undefined
                  }[]
                | undefined
              enabled?: boolean | undefined
              network?: string | undefined
              tacplus_servers?:
                | {
                    host?: string | undefined
                    port?: string | undefined
                    secret?: string | undefined
                    timeout?: number | undefined
                  }[]
                | undefined
            }
          | undefined
      }
    | undefined
  vrf_config?: { enabled?: boolean | undefined } | undefined
  vrf_instances?:
    | {
        [x: string]: {
          extra_routes?: { [x: string]: { via?: string | undefined } } | undefined
          networks?: string[] | undefined
        }
      }
    | undefined
}
type DeviceOther = {
  created_time?: number | undefined
  device_mac?: string | undefined
  id?: string | undefined
  mac?: string | undefined
  model?: string | undefined
  modified_time?: number | undefined
  name?: string | undefined
  org_id?: string | undefined
  serial?: string | undefined
  site_id?: string | undefined
  vendor?: string | undefined
}
type PskPortal = {
  auth?: 'sso' | 'sponsor' | undefined
  bg_image_url?: string | undefined
  cleanup_psk?: boolean | undefined
  created_time?: number | undefined
  expire_time?: number | undefined
  expiry_notification_time?: number | undefined
  hide_psks_created_by_other_admins?: boolean | undefined
  id?: string | undefined
  max_usage?: number | undefined
  modified_time?: number | undefined
  name: string
  notify_expiry?: boolean | undefined
  notify_on_create_or_edit?: boolean | undefined
  org_id?: string | undefined
  passphrase_rules?:
    | {
        alphaberts_enabled?: boolean | undefined
        length?: number | undefined
        max_length?: number | undefined
        min_length?: number | undefined
        numerics_enabled?: boolean | undefined
        symbols?: string | undefined
        symbols_enabled?: boolean | undefined
      }
    | undefined
  required_fields?: string[] | undefined
  role?: string | undefined
  ssid: string
  sso?:
    | {
        allowed_roles?: string[] | undefined
        idp_cert?: string | undefined
        idp_sign_algo?: string | undefined
        idp_sso_url?: string | undefined
        issuer?: string | undefined
        nameid_format?: string | undefined
        role_mapping?: { [x: string]: string } | undefined
        use_sso_role_for_psk_role?: boolean | undefined
      }
    | undefined
  template_url?: string | undefined
  thumbnail_url?: string | undefined
  type?: 'byod' | 'admin' | undefined
  vlan_id?: number | undefined
}
type Psk = {
  admin_sso_id?: string | undefined
  created_time?: number | undefined
  email?: string | undefined
  expire_time?: (number | null) | undefined
  expiry_notification_time?: number | undefined
  id?: string | undefined
  mac?: string | undefined
  max_usage?: number | undefined
  modified_time?: number | undefined
  name: string
  note?: string | undefined
  notify_expiry?: boolean | undefined
  notify_on_create_or_edit?: boolean | undefined
  old_passphrase?: string | undefined
  org_id?: string | undefined
  passphrase: string
  role?: string | undefined
  site_id?: string | undefined
  ssid: string
  usage?: 'multi' | 'single' | undefined
  vlan_id?: number | undefined
}
type Rftemplate = {
  ant_gain_24?: number | undefined
  ant_gain_5?: number | undefined
  band_24?: ApRadioBand | undefined
  band_24_usage?: '24' | '5' | 'auto' | undefined
  band_5?: ApRadioBand | undefined
  band_5_on_24_radio?: ApRadioBand | undefined
  country_code?: string | undefined
  created_time?: number | undefined
  for_site?: boolean | undefined
  id?: string | undefined
  model_specific?:
    | { [x: string]: { band_24?: ApRadioBand | undefined; band_5?: ApRadioBand | undefined } }
    | undefined
  modified_time?: number | undefined
  name: string
  org_id?: string | undefined
  scanning_enabled?: boolean | undefined
  site_id?: string | undefined
}
type Sdkinvite = {
  created_time?: number | undefined
  enabled?: boolean | undefined
  expire_time?: number | undefined
  id?: string | undefined
  modified_time?: number | undefined
  name: string
  org_id?: string | undefined
  quota?: number | undefined
  quota_limited?: boolean | undefined
  site_id?: string | undefined
}
type Sdktemplate = {
  bg_image?: string | undefined
  btn_flr_bgcolor?: string | undefined
  created_time?: number | undefined
  default?: boolean | undefined
  for_site?: boolean | undefined
  header_txt?: string | undefined
  id?: string | undefined
  modified_time?: number | undefined
  name: string
  org_id?: string | undefined
  search_txtcolor?: string | undefined
  site_id?: string | undefined
  welcome_msg?: string | undefined
}
type WlanAirwatch = {
  api_key?: string | undefined
  console_url?: string | undefined
  enabled?: boolean | undefined
  password?: string | undefined
  username?: string | undefined
}
type WlanAppQos = {
  apps?:
    | {
        'skype-business-video'?:
          | {
              dscp?: number | undefined
              dst_subnet?: string | undefined
              src_subnet?: string | undefined
            }
          | undefined
        'skype-business-voice'?: { dscp?: number | undefined } | undefined
      }
    | undefined
  enabled?: boolean | undefined
  others?:
    | {
        dscp?: number | undefined
        dst_subnet?: string | undefined
        port_ranges?: string | undefined
        protocol?: string | undefined
        src_subnet?: string | undefined
      }[]
    | undefined
}
type WlanAuth = {
  anticlog_threshold?: number | undefined
  eap_reauth?: boolean | undefined
  enable_mac_auth?: boolean | undefined
  key_idx?: number | undefined
  keys?: (string | null)[] | undefined
  multi_psk_only?: boolean | undefined
  owe?: string | undefined
  pairwise?: (string | null)[] | undefined
  private_wlan?: boolean | undefined
  psk?: (string | null) | undefined
  type: 'open' | 'psk' | 'wep' | 'eap' | 'psk-tkip' | 'psk-wpa2-tkip'
  wep_as_secondary_auth?: boolean | undefined
}
type WlanBonjour = {
  additional_vlan_ids: number[]
  enabled?: boolean | undefined
  services: {
    [x: string]: {
      disable_local?: boolean | undefined
      radius_groups?: string[] | undefined
      scope?: string | undefined
    }
  }
}
type WlanCiscoCwa = {
  allowed_hostnames?: string[] | undefined
  allowed_subnets?: string[] | undefined
  blocked_subnets?: string[] | undefined
  enabled?: boolean | undefined
}
type CoaServer = {
  disable_event_timestamp_check: boolean
  enabled: boolean
  ip: string
  port: string
  secret: string
}
type WlanHotspot_20 = {
  enabled?: boolean | undefined
  operators?: string[] | undefined
  venue_name?: string | undefined
}
type WlanPortal = {
  amazon_client_id?: (string | null) | undefined
  amazon_client_secret?: (string | null) | undefined
  amazon_email_domains?: string[] | undefined
  amazon_enabled?: boolean | undefined
  auth?: 'none' | 'email' | 'external' | 'sso' | undefined
  azure_client_id?: (string | null) | undefined
  azure_client_secret?: (string | null) | undefined
  azure_enabled?: boolean | undefined
  azure_tenant_id?: (string | null) | undefined
  broadnet_password?: string | undefined
  broadnet_sid?: string | undefined
  broadnet_user_id?: string | undefined
  bypass_when_cloud_down?: boolean | undefined
  clickatell_api_key?: string | undefined
  cross_site?: boolean | undefined
  email_enabled?: boolean | undefined
  enabled?: boolean | undefined
  expire?: number | undefined
  external_portal_url?: string | undefined
  facebook_client_id?: (string | null) | undefined
  facebook_client_secret?: (string | null) | undefined
  facebook_email_domains?: string[] | undefined
  facebook_enabled?: boolean | undefined
  forward?: boolean | undefined
  forward_url?: (string | null) | undefined
  google_client_id?: (string | null) | undefined
  google_client_secret?: (string | null) | undefined
  google_email_domains?: string[] | undefined
  google_enabled?: boolean | undefined
  gupshup_password?: string | undefined
  gupshup_userid?: string | undefined
  microsoft_client_id?: (string | null) | undefined
  microsoft_client_secret?: (string | null) | undefined
  microsoft_email_domains?: string[] | undefined
  microsoft_enabled?: boolean | undefined
  passphrase_enabled?: boolean | undefined
  password?: (string | null) | undefined
  portal_allowed_hostnames?: string | undefined
  portal_allowed_subnets?: string | undefined
  portal_api_secret?: string | undefined
  portal_denied_hostnames?: string | undefined
  portal_image?: string | undefined
  portal_sso_url?: string | undefined
  predefined_sponsors_enabled?: boolean | undefined
  privacy?: boolean | undefined
  puzzel_password?: string | undefined
  puzzel_service_id?: string | undefined
  puzzel_username?: string | undefined
  smsMessageFormat?: string | undefined
  sms_enabled?: boolean | undefined
  sms_provider?:
    | 'manual'
    | 'twilio'
    | 'broadnet'
    | 'clickatell'
    | 'puzzel'
    | 'gupshup'
    | 'telstra'
    | undefined
  sponsor_auto_approve?: boolean | undefined
  sponsor_email_domains?: string[] | undefined
  sponsor_enabled?: boolean | undefined
  sponsor_link_validity_duration?: string | undefined
  sponsor_notify_all?: boolean | undefined
  sponsors?: { [x: string]: string } | undefined
  sso_default_role?: string | undefined
  sso_forced_role?: string | undefined
  sso_idp_cert?: string | undefined
  sso_idp_sign_algo?: string | undefined
  sso_idp_sso_url?: string | undefined
  sso_issuer?: string | undefined
  sso_nameid_format?: 'email' | 'unspecified' | undefined
  telstra_client_id?: string | undefined
  telstra_client_secret?: string | undefined
  thumbnail?: string | undefined
  twilio_auth_token?: (string | null) | undefined
  twilio_phone_number?: (string | null) | undefined
  twilio_sid?: (string | null) | undefined
}
type WlanDatarates = {
  ht?: (string | null) | undefined
  legacy?: string[] | undefined
  min_rssi?: number | undefined
  template?: (string | null) | undefined
  vht?: string | undefined
}
type Wlan = {
  acct_interim_interval?: number | undefined
  acct_servers?: AcctServer[] | undefined
  airwatch?: WlanAirwatch | undefined
  allow_ipv6_ndp?: boolean | undefined
  allow_mdns?: boolean | undefined
  allow_ssdp?: boolean | undefined
  ap_ids?: (string[] | null) | undefined
  app_limit?:
    | {
        apps?: { [x: string]: unknown } | undefined
        enabled?: boolean | undefined
        wxtag_ids?: { [x: string]: unknown } | undefined
      }
    | undefined
  app_qos?: WlanAppQos | undefined
  apply_to?: 'site' | 'wxtags' | 'aps' | undefined
  arp_filter?: boolean | undefined
  auth?: WlanAuth | undefined
  auth_server_selection?: 'ordered' | 'unordered' | undefined
  auth_servers?: AuthServer[] | undefined
  auth_servers_nas_id?: (string | null) | undefined
  auth_servers_nas_ip?: (string | null) | undefined
  auth_servers_retries?: number | undefined
  auth_servers_timeout?: number | undefined
  band?: string | undefined
  band_steer?: boolean | undefined
  band_steer_force_band5?: boolean | undefined
  bands?: ('24' | '5' | '6')[] | undefined
  block_blacklist_clients?: boolean | undefined
  bonjour?: WlanBonjour | undefined
  cisco_cwa?: WlanCiscoCwa | undefined
  client_limit_down?: number | undefined
  client_limit_down_enabled?: boolean | undefined
  client_limit_up?: number | undefined
  client_limit_up_enabled?: boolean | undefined
  coa_servers?: (CoaServer[] | null) | undefined
  created_time?: number | undefined
  disable_11ax?: boolean | undefined
  disable_ht_vht_rates?: boolean | undefined
  disable_uapsd?: boolean | undefined
  disable_v1_roam_notify?: boolean | undefined
  disable_v2_roam_notify?: boolean | undefined
  disable_wmm?: boolean | undefined
  dns_server_rewrite?:
    | ({
        enabled?: boolean | undefined
        radius_groups?: { [x: string]: unknown } | undefined
      } | null)
    | undefined
  dtim?: number | undefined
  dynamic_psk?:
    | ({
        default_psk?: string | undefined
        default_vlan_id?: (number | null) | undefined
        enabled?: boolean | undefined
        source?: 'radius' | 'cloud_psks' | undefined
        vlan_ids?: (number | null)[] | undefined
      } | null)
    | undefined
  dynamic_vlan?:
    | ({
        default_vlan_id?: (number | null) | undefined
        enabled?: boolean | undefined
        local_vlan_ids?: (number | null)[] | undefined
        type?: 'standard' | 'airespace-interface-name' | undefined
        vlans?: { [x: string]: string } | undefined
      } | null)
    | undefined
  enable_local_keycaching?: boolean | undefined
  enable_wireless_bridging?: boolean | undefined
  enabled?: boolean | undefined
  for_site?: boolean | undefined
  hide_ssid?: boolean | undefined
  hostname_ie?: boolean | undefined
  hotspot20?: WlanHotspot_20 | undefined
  id?: string | undefined
  interface?:
    | 'all'
    | 'eth0'
    | 'eth1'
    | 'eth2'
    | 'eth3'
    | 'wxtunnel'
    | 'mxtunnel'
    | 'site_mxedge'
    | undefined
  isolation?: boolean | undefined
  l2_isolation?: boolean | undefined
  legacy_overds?: boolean | undefined
  limit_bcast?: boolean | undefined
  limit_probe_response?: boolean | undefined
  max_idletime?: number | undefined
  mist_nac?: { enabled?: boolean | undefined } | undefined
  modified_time?: number | undefined
  msp_id?: string | undefined
  mxtunnel?: { [x: string]: unknown } | undefined
  mxtunnel_id?: (string | null) | undefined
  mxtunnel_name?: (string | null) | undefined
  no_static_dns?: boolean | undefined
  no_static_ip?: boolean | undefined
  org_id?: string | undefined
  portal?: WlanPortal | undefined
  portal_allowed_hostnames?: string[] | undefined
  portal_allowed_subnets?: string[] | undefined
  portal_api_secret?: (string | null) | undefined
  portal_denied_hostnames?: string[] | undefined
  portal_image?: (string | null) | undefined
  portal_sso_url?: (string | null) | undefined
  portal_template_url?: (string | null) | undefined
  qos?:
    | {
        class?: 'background' | 'best_effort' | 'video' | 'voice' | undefined
        overwrite?: boolean | undefined
      }
    | undefined
  radsec?: Radsec | undefined
  rateset?: { '5'?: WlanDatarates | undefined; '24'?: WlanDatarates | undefined } | undefined
  roam_mode?: 'none' | 'NONE' | 'OKC' | '11r' | undefined
  schedule?:
    | { enabled?: boolean | undefined; hours?: { [x: string]: unknown } | undefined }
    | undefined
  site_id?: string | undefined
  sle_excluded?: boolean | undefined
  ssid: string
  template_id?: (string | null) | undefined
  thumbnail?: (string | null) | undefined
  use_eapol_v1?: boolean | undefined
  vlan_enabled?: boolean | undefined
  vlan_id?: (number | null) | undefined
  vlan_ids?: (number | null)[] | undefined
  vlan_pooling?: boolean | undefined
  wlan_limit_down?: number | undefined
  wlan_limit_down_enabled?: boolean | undefined
  wlan_limit_up?: number | undefined
  wlan_limit_up_enabled?: boolean | undefined
  wxtag_ids?: (string[] | null) | undefined
  wxtunnel_id?: (string | null) | undefined
  wxtunnel_remote_id?: (string | null) | undefined
}
type Secpolicy = {
  created_time?: number | undefined
  id?: string | undefined
  modified_time?: number | undefined
  name?: string | undefined
  org_id?: string | undefined
  site_id?: string | undefined
  wlans?: Wlan[] | undefined
}
type ServicePolicy = {
  action: 'allow' | 'deny'
  created_time?: number | undefined
  id?: string | undefined
  modified_time?: number | undefined
  name: string
  org_id?: string | undefined
  services: string[]
  tenants: string[]
}
type Service = {
  addresses?: string[] | undefined
  app_caetgories?: string[] | undefined
  apps?: string[] | undefined
  created_time?: number | undefined
  description?: string | undefined
  dscp?: number | undefined
  failover_policy?: 'revertable' | 'non-revertable' | undefined
  hostnames?: string[] | undefined
  id?: string | undefined
  max_jitter?: number | undefined
  max_latency?: string | undefined
  max_loss?: number | undefined
  modified_time?: number | undefined
  name?: string | undefined
  org_id?: string | undefined
  sle_enabled?: boolean | undefined
  specs?: { port_range?: number | undefined; protocol?: string | undefined }[] | undefined
  traffic_class?: 'best_effort' | 'high' | 'medium' | 'low' | undefined
  traffic_type?: string | undefined
  type?: 'app' | 'app_categories' | 'custom' | undefined
  vpn_name?: 'addresses' | 'apps' | 'local' | 'hostname' | undefined
}
type OrgAutoRules = {
  expression?: (string | null) | undefined
  model?: string | undefined
  prefix?: (string | null) | undefined
  src: 'name' | 'subnet' | 'lldp_system_name' | 'dns_suffix' | 'model' | 'lldp_port_desc'
  subnet?: string | undefined
  suffix?: (string | null) | undefined
  value?: string | undefined
}
type Tacacs = {
  acct_servers?:
    | {
        host?: string | undefined
        port?: number | undefined
        secret?: string | undefined
        timeout?: number | undefined
      }[]
    | undefined
  enabled?: boolean | undefined
  network?: string | undefined
  tacplus_servers?:
    | {
        host?: string | undefined
        port?: number | undefined
        secret?: string | undefined
        timeout?: number | undefined
      }[]
    | undefined
}
type MxedgeMgmt = { mist_password?: string | undefined; root_password?: string | undefined }
type SimpleAlert = {
  arp_failure?:
    | {
        client_count?: number | undefined
        duration?: number | undefined
        incident_count?: number | undefined
      }
    | undefined
  dhcp_failure?:
    | {
        client_count?: number | undefined
        duration?: number | undefined
        incident_count?: number | undefined
      }
    | undefined
  dns_failure?:
    | {
        client_count?: number | undefined
        duration?: number | undefined
        incident_count?: number | undefined
      }
    | undefined
}
type OrgSetting = {
  auto_device_naming?:
    | { enable?: boolean | undefined; rules?: (OrgAutoRules[] | null) | undefined }
    | undefined
  auto_deviceprofile_assignment?:
    | { enable?: boolean | undefined; rules?: (OrgAutoRules[] | null) | undefined }
    | undefined
  auto_site_assignment?:
    | { enable?: boolean | undefined; rules?: (OrgAutoRules[] | null) | undefined }
    | undefined
  blacklist_url?: string | undefined
  cacerts?: string[] | undefined
  celona?: { api_key?: string | undefined; api_prefix?: string | undefined } | undefined
  cloudshark?: { apitoken?: string | undefined; url?: string | undefined } | undefined
  cradlepoint?:
    | {
        cp_api_id?: string | undefined
        cp_api_key?: string | undefined
        ecm_api_id?: string | undefined
        ecm_api_key?: string | undefined
      }
    | undefined
  created_time?: number | undefined
  device_cert?: { cert?: string | undefined; key?: string | undefined } | undefined
  device_updown_threshold?: number | undefined
  disable_pcap?: boolean | undefined
  for_site?: boolean | undefined
  gateway_mgmt?:
    | {
        app_probing?: { apps?: string[] | undefined } | undefined
        app_usage?: boolean | undefined
        tacacs?: Tacacs | undefined
      }
    | undefined
  id?: string | undefined
  installer?:
    | {
        allow_all_devices?: boolean | undefined
        allow_all_sites?: boolean | undefined
        extra_site_ids?: string[] | undefined
        grace_period?: number | undefined
      }
    | undefined
  juniper?:
    | {
        accounts?: { linked_by?: string | undefined; name?: string | undefined }[] | undefined
        customer_name?: string | undefined
        linked?: boolean | undefined
      }
    | undefined
  mgmt?:
    | {
        mxtunnel_ids?: string[] | undefined
        use_mxtunnel?: boolean | undefined
        use_wxtunnel?: boolean | undefined
      }
    | undefined
  mist_nac?:
    | {
        cacerts?: string | undefined
        default_idp_id?: string | undefined
        idps?: { id?: string | undefined; realm?: string[] | undefined }[] | undefined
        server_cert?: { cert?: string | undefined; key?: string | undefined } | undefined
      }
    | undefined
  modified_time?: number | undefined
  msp_id?: string | undefined
  mxedge_mgmt?: MxedgeMgmt | undefined
  org_id?: string | undefined
  password_policy?:
    | {
        enabled?: boolean | undefined
        freshness?: number | undefined
        min_length?: number | undefined
        requires_special_char?: boolean | undefined
        requires_two_factor_auth?: boolean | undefined
      }
    | undefined
  pcap?: { bucket?: string | undefined; max_pkt_len?: number | undefined } | undefined
  pcap_bucket_verified?: boolean | undefined
  remote_syslog?: RemoteSyslog | undefined
  security?:
    | {
        disable_local_ssh?: boolean | undefined
        fips_zeroize_password?: string | undefined
        limit_ssh_access?: boolean | undefined
      }
    | undefined
  simple_alert?: SimpleAlert | undefined
  site_id?: string | undefined
  switch_mgmt?: { ap_affinity_threshold?: number | undefined } | undefined
  tags?: string[] | undefined
  ui_idle_timeout?: number | undefined
  vpn_options?: { as_base?: number | undefined } | undefined
}
type OauthAppStatus = {
  accounts?:
    | {
        account_id?: string | undefined
        error?: string | undefined
        last_status?: number | string | undefined
        last_sync?: number | string | undefined
        linked_by?: string | undefined
        name?: string | undefined
      }[]
    | undefined
  authorization_url?: string | undefined
  linked?: boolean | undefined
}
type Sitegroup = {
  created_time?: number | undefined
  id?: string | undefined
  modified_time?: number | undefined
  name: string
  org_id?: string | undefined
  site_ids?: string[] | undefined
}
type Sitetemplate = {
  auto_upgrade?:
    | {
        day_of_week?: string | undefined
        enabled?: boolean | undefined
        time_of_day?: string | undefined
        version?: string | undefined
      }
    | undefined
  name?: string | undefined
  vars?: { SSID_STR?: string | undefined; VLAN_ID?: string | undefined } | undefined
}
type SsrUpgradeResponse = {
  channel: string
  counts: { failed: number; queued: number; success: number; upgrading: number }
  device_type: string
  id: string
  status: string
  strategy: string
  versions: { [x: string]: unknown }
}
type StatsAsset = {
  battery_voltage?: number | undefined
  eddystone_uid_instance?: string | undefined
  eddystone_uid_namespace?: string | undefined
  eddystone_url_url?: string | undefined
  ibeacon_major?: number | undefined
  ibeacon_minor?: number | undefined
  ibeacon_uuid?: string | undefined
  last_seen?: number | undefined
  mac: string
  map_id?: string | undefined
  name?: string | undefined
  rssizones?: { id?: string | undefined; since?: number | undefined }[] | undefined
  x?: number | undefined
  y?: number | undefined
  zones?: { id?: string | undefined; since?: number | undefined }[] | undefined
}
type StatsBgp = {
  for_overlay?: boolean | undefined
  local_as?: number | undefined
  mac?: string | undefined
  neighbor?: string | undefined
  neighbor_as?: number | undefined
  neighbor_mac?: string | undefined
  org_id?: string | undefined
  rx_pkts?: number | undefined
  rx_routes?: number | undefined
  site_id?: string | undefined
  state?: 'idle' | 'connect' | 'active' | 'open_sent' | 'open_config' | 'established' | undefined
  timestamp?: number | undefined
  tx_pkts?: number | undefined
  tx_routes?: number | undefined
  up?: boolean | undefined
  uptime?: number | undefined
  vrf_name?: string | undefined
}
type StatsDeviceAp = {
  ble_config?:
    | {
        beacon_rate?: number | undefined
        beacon_rate_model?: string | undefined
        beam_disabled?: number[] | undefined
        power?: number | undefined
        power_mode?: string | undefined
      }
    | undefined
  ble_stat?:
    | {
        beacon_rate?: number | undefined
        eddystone_uid_enabled?: boolean | undefined
        eddystone_uid_freq_msec?: number | undefined
        eddystone_uid_instance?: string | undefined
        eddystone_uid_namespace?: string | undefined
        eddystone_url_enabled?: boolean | undefined
        eddystone_url_freq_msec?: number | undefined
        eddystone_url_url?: string | undefined
        ibeacon_enabled?: boolean | undefined
        ibeacon_major?: number | undefined
        ibeacon_minor?: number | undefined
        ibeacon_uuid?: string | undefined
        major?: number | undefined
        minors?: number[] | undefined
        power?: number | undefined
        rx_bytes?: number | undefined
        rx_pkts?: number | undefined
        tx_bytes?: number | undefined
        tx_pkts?: number | undefined
        tx_resets?: number | undefined
        uuid?: string | undefined
      }
    | undefined
  cert_expiry?: number | undefined
  env_stat?:
    | {
        accel_x?: number | undefined
        accel_y?: number | undefined
        accel_z?: number | undefined
        ambient_temp?: number | undefined
        attitude?: number | undefined
        cpu_temp?: number | undefined
        humidity?: number | undefined
        magne_x?: number | undefined
        magne_y?: number | undefined
        magne_z?: number | undefined
        pressure?: number | undefined
        vcore_voltage?: number | undefined
      }
    | undefined
  ext_ip?: string | undefined
  fwupdate?:
    | {
        progress?: number | undefined
        status?: string | undefined
        status_id?: number | undefined
        timestamp?: number | undefined
      }
    | undefined
  iot_stat?: { DI2?: { value?: number | undefined } | undefined } | undefined
  ip?: string | undefined
  ip_config?:
    | {
        dns?: string[] | undefined
        dns_suffix?: string[] | undefined
        gateway?: string | undefined
        ip?: string | undefined
        netmask?: string | undefined
        type?: string | undefined
      }
    | undefined
  ip_stat?:
    | {
        dns?: string[] | undefined
        dns_suffix?: string[] | undefined
        gateway?: string | undefined
        gateway6?: string | undefined
        ip?: string | undefined
        ip6?: string | undefined
        ips?: { [x: string]: string } | undefined
        netmask?: string | undefined
        netmask6?: string | undefined
      }
    | undefined
  l2tp_stat?:
    | {
        [x: string]: {
          sessions?:
            | {
                local_sid?: number | undefined
                remote_id?: string | undefined
                remote_sid?: number | undefined
                state?: string | undefined
              }[]
            | undefined
          state?: string | undefined
          uptime?: number | undefined
          wxtunnel_id?: string | undefined
        }
      }
    | undefined
  last_seen?: number | undefined
  last_trouble?: { code: string; timestamp: number } | undefined
  led?: { brightness?: number | undefined; enabled?: boolean | undefined } | undefined
  lldp_stat?:
    | {
        chassis_id?: string | undefined
        lldp_med_supported?: boolean | undefined
        mgmt_addr?: string | undefined
        port_desc?: string | undefined
        power_allocated?: number | undefined
        power_draw?: number | undefined
        power_request_count?: number | undefined
        power_requested?: number | undefined
        system_desc?: string | undefined
        system_name?: string | undefined
      }
    | undefined
  locating?: boolean | undefined
  locked?: boolean | undefined
  mac: string
  map_id?: string | undefined
  mesh_downlinks?:
    | {
        [x: string]: {
          band?: string | undefined
          channel?: number | undefined
          idle_time?: number | undefined
          last_seen?: number | undefined
          proto?: string | undefined
          rssi?: number | undefined
          rx_bps?: number | undefined
          rx_bytes?: number | undefined
          rx_packets?: number | undefined
          rx_rate?: number | undefined
          rx_retries?: number | undefined
          site_id?: string | undefined
          snr?: number | undefined
          tx_bps?: number | undefined
          tx_bytes?: number | undefined
          tx_packets?: number | undefined
          tx_rate?: number | undefined
          tx_retries?: number | undefined
        }
      }
    | undefined
  mesh_uplink?:
    | {
        band?: string | undefined
        channel?: number | undefined
        idle_time?: number | undefined
        last_seen?: number | undefined
        proto?: string | undefined
        rssi?: number | undefined
        rx_bps?: number | undefined
        rx_bytes?: number | undefined
        rx_packets?: number | undefined
        rx_rate?: number | undefined
        rx_retries?: number | undefined
        snr?: number | undefined
        tx_bps?: number | undefined
        tx_bytes?: number | undefined
        tx_packets?: number | undefined
        tx_rate?: number | undefined
        tx_retries?: number | undefined
        uplink_ap_id?: string | undefined
        uplink_site_id?: string | undefined
      }
    | undefined
  model: string
  mount?: string | undefined
  name?: string | undefined
  num_clients?: number | undefined
  port_stat?:
    | {
        [x: string]: {
          full_duplex?: boolean | undefined
          rx_bytes?: number | undefined
          rx_errors?: number | undefined
          rx_pkts?: number | undefined
          speed?: number | undefined
          tx_bytes?: number | undefined
          tx_pkts?: number | undefined
          up?: boolean | undefined
        }
      }
    | undefined
  power_budget?: number | undefined
  power_src?: string | undefined
  radio_config?:
    | {
        band_24?:
          | {
              bandwidth?: number | undefined
              channel?: number | undefined
              dynamic_chaining_enabled?: boolean | undefined
              power?: number | undefined
              rx_chain?: number | undefined
              tx_chain?: number | undefined
            }
          | undefined
        band_5?:
          | {
              bandwidth?: number | undefined
              channel?: number | undefined
              dynamic_chaining_enabled?: boolean | undefined
              power?: number | undefined
              rx_chain?: number | undefined
              tx_chain?: number | undefined
            }
          | undefined
        band_6?:
          | {
              bandwidth?: number | undefined
              channel?: number | undefined
              dynamic_chaining_enabled?: boolean | undefined
              power?: number | undefined
              rx_chain?: number | undefined
              tx_chain?: number | undefined
            }
          | undefined
        scanning_enabled?: boolean | undefined
      }
    | undefined
  radio_stat?:
    | {
        band_24?:
          | {
              bandwidth?: 20 | 40 | undefined
              channel?: number | undefined
              dynamic_chaining_enalbed?: boolean | undefined
              mac?: string | undefined
              num_clients?: number | undefined
              power?: number | undefined
              rx_bytes?: number | undefined
              rx_pkts?: number | undefined
              tx_bytes?: number | undefined
              tx_pkts?: number | undefined
              util_all?: number | undefined
              util_non_wifi?: number | undefined
              util_rx_in_bss?: number | undefined
              util_rx_other_bss?: number | undefined
              util_tx?: number | undefined
              util_unknown_wifi?: number | undefined
            }
          | undefined
        band_5?:
          | {
              bandwidth?: 20 | 40 | 80 | undefined
              channel?: number | undefined
              dynamic_chaining_enalbed?: boolean | undefined
              mac?: string | undefined
              num_clients?: number | undefined
              power?: number | undefined
              rx_bytes?: number | undefined
              rx_pkts?: number | undefined
              tx_bytes?: number | undefined
              tx_pkts?: number | undefined
              util_all?: number | undefined
              util_non_wifi?: number | undefined
              util_rx_in_bss?: number | undefined
              util_rx_other_bss?: number | undefined
              util_tx?: number | undefined
              util_unknown_wifi?: number | undefined
            }
          | undefined
        band_6?:
          | {
              bandwidth?: 20 | 40 | 80 | 160 | undefined
              channel?: number | undefined
              dynamic_chaining_enalbed?: boolean | undefined
              mac?: string | undefined
              num_clients?: number | undefined
              power?: number | undefined
              rx_bytes?: number | undefined
              rx_pkts?: number | undefined
              tx_bytes?: number | undefined
              tx_pkts?: number | undefined
              util_all?: number | undefined
              util_non_wifi?: number | undefined
              util_rx_in_bss?: number | undefined
              util_rx_other_bss?: number | undefined
              util_tx?: number | undefined
              util_unknown_wifi?: number | undefined
            }
          | undefined
      }
    | undefined
  rx_bps?: number | undefined
  rx_bytes?: number | undefined
  rx_pkts?: number | undefined
  serial?: string | undefined
  status?: 'connected' | 'disconnected' | 'restarting' | 'upgrading' | undefined
  tx_bps?: number | undefined
  tx_bytes?: number | undefined
  tx_pkts?: number | undefined
  type?: string | undefined
  uptime?: number | undefined
  usb_stat?:
    | {
        channel?: number | undefined
        connected?: boolean | undefined
        last_activity?: number | undefined
        type?: string | undefined
        up?: boolean | undefined
      }
    | undefined
  version?: string | undefined
  x?: number | undefined
  y?: number | undefined
}
type StatsDeviceSwitch = {
  cpu_stat?:
    | {
        idle?: number | undefined
        interrupt?: number | undefined
        load_avg?: { [x: string]: unknown }[] | undefined
        system?: number | undefined
        user?: number | undefined
      }
    | undefined
  hostname?: string | undefined
  if_stat?:
    | {
        [x: string]: {
          ips?: string[] | undefined
          port_id?: string | undefined
          rx_bytes?: number | undefined
          rx_pkts?: number | undefined
          tx_bytes?: number | undefined
          tx_pkts?: number | undefined
          up?: boolean | undefined
        }
      }
    | undefined
  ip?: string | undefined
  ip_stat?:
    | {
        dns?: { [x: string]: unknown }[] | undefined
        dns_suffix?: { [x: string]: unknown }[] | undefined
        gateway?: string | undefined
        gateway6?: string | undefined
        ip?: string | undefined
        ip6?: string | undefined
        ips?:
          | {
              vlan1?: string | undefined
              vlan193?: string | undefined
              vlan3157?: string | undefined
            }
          | undefined
        netmask?: string | undefined
        netmask6?: string | undefined
      }
    | undefined
  last_seen?: number | undefined
  last_trouble?: { code?: string | undefined; timestamp?: number | undefined } | undefined
  mac?: string | undefined
  memory_stat?: { usage?: number | undefined } | undefined
  model?: string | undefined
  module_stat?:
    | {
        fans?:
          | {
              airflow?: string | undefined
              name?: string | undefined
              status?: string | undefined
            }[]
          | undefined
        model?: string | undefined
        pics?:
          | {
              idx?: number | undefined
              port_groups?: { count?: number | undefined; type?: string | undefined }[] | undefined
            }
          | undefined
        poe?: { max_power?: number | undefined; power_draw?: number | undefined } | undefined
        psus?: { name?: string | undefined; status?: string | undefined }[] | undefined
        serial?: string | undefined
        temperatures?:
          | {
              celsius?: number | undefined
              name?: string | undefined
              status?: string | undefined
            }[]
          | undefined
        vc_links?:
          | {
              neighbor_module_idx?: number | undefined
              neighbor_port_id?: string | undefined
              port_id?: string | undefined
            }[]
          | undefined
        vc_role?: string | undefined
      }[]
    | undefined
  name?: string | undefined
  serial?: string | undefined
  status?: string | undefined
  type?: string | undefined
  uptime?: number | undefined
  version?: string | undefined
}
type StatsDeviceGateway = {
  cluster_stat?: { [x: string]: { status?: string | undefined } } | undefined
  cpu2_stat?: string | undefined
  cpu_stat?:
    | {
        idle?: number | undefined
        interrupt?: number | undefined
        load_avg?: { [x: string]: unknown }[] | undefined
        system?: number | undefined
        user?: number | undefined
      }
    | undefined
  hostname?: string | undefined
  ip?: string | undefined
  ip_stat?:
    | {
        dns?: { [x: string]: unknown }[] | undefined
        dns_suffix?: { [x: string]: unknown }[] | undefined
        gateway?: string | undefined
        gateway6?: string | undefined
        ip?: string | undefined
        ip6?: string | undefined
        ips?: { '{vlan}'?: string | undefined } | undefined
        netmask?: string | undefined
        netmask6?: string | undefined
      }
    | undefined
  last_seen?: number | undefined
  mac: string
  memory_stat?: { usage: number } | undefined
  model?: string | undefined
  module2_stat?: string | undefined
  module_stat?:
    | {
        fans?:
          | {
              airflow?: string | undefined
              name?: string | undefined
              status?: string | undefined
            }[]
          | undefined
        model?: string | undefined
        poe?: { max_power?: number | undefined; power_draw?: number | undefined } | undefined
        psus?: { name?: string | undefined; status?: string | undefined }[] | undefined
        serial?: string | undefined
        temperatures?:
          | {
              celsius?: number | undefined
              name?: string | undefined
              status?: string | undefined
            }[]
          | undefined
        vc_links?:
          | {
              neighbor_module_idx?: number | undefined
              neighbor_port_id?: string | undefined
              port_id?: string | undefined
            }[]
          | undefined
        vc_role?: string | undefined
      }[]
    | undefined
  name?: string | undefined
  serial?: string | undefined
  spu2_stat?: string | undefined
  spu_stat?:
    | {
        cpu?: number | undefined
        memory?: number | undefined
        sessions?:
          | {
              current?: number | undefined
              max?: number | undefined
              pending?: number | undefined
              valid?: number | undefined
            }
          | undefined
      }
    | undefined
  status?: string | undefined
  type?: string | undefined
  uptime?: number | undefined
  version?: string | undefined
}
type StatsMxedge = {
  cpu_stat?:
    | {
        cpus?:
          | {
              [x: string]: {
                idle?: number | undefined
                interrupt?: number | undefined
                system?: number | undefined
                usage?: number | undefined
                user?: number | undefined
              }
            }
          | undefined
        idle?: number | undefined
        interrupt?: number | undefined
        system?: number | undefined
        usage?: number | undefined
        user?: number | undefined
      }
    | undefined
  created_time?: number | undefined
  for_site?: boolean | undefined
  id?: string | undefined
  ip_stat?:
    | {
        ip?: string | undefined
        ips?: { [x: string]: string } | undefined
        macs?: { [x: string]: string } | undefined
      }
    | undefined
  lag_stat?: { [x: string]: { active_ports?: string[] | undefined } } | undefined
  last_seen?: number | undefined
  mac?: string | undefined
  memory_stat?:
    | {
        active?: number | undefined
        available?: number | undefined
        buffers?: number | undefined
        cached?: number | undefined
        free?: number | undefined
        inactive?: number | undefined
        swap_cached?: number | undefined
        swap_free?: number | undefined
        swap_total?: number | undefined
        total?: number | undefined
        usage?: number | undefined
      }
    | undefined
  model?: string | undefined
  modified_time?: number | undefined
  mxagent_registered?: boolean | undefined
  mxcluster_id?: string | undefined
  name?: string | undefined
  num_tunnels?: number | undefined
  org_id?: string | undefined
  port_stat?:
    | {
        [x: string]: {
          full_duplex?: boolean | undefined
          mac?: string | undefined
          rx_bytes?: number | undefined
          rx_errors?: number | undefined
          rx_pkts?: number | undefined
          speed?: number | undefined
          state?: string | undefined
          tx_bytes?: number | undefined
          tx_errors?: number | undefined
          tx_pkts?: number | undefined
          up?: boolean | undefined
        }
      }
    | undefined
  sensor_stat?: { [x: string]: unknown } | undefined
  service_stat?:
    | {
        mxagent?:
          | {
              ext_ip?: string | undefined
              last_seen?: number | undefined
              package_state?: string | undefined
              package_version?: string | undefined
              running_state?: string | undefined
              uptime?: number | undefined
            }
          | undefined
        tunterm?:
          | {
              ext_ip?: string | undefined
              last_seen?: number | undefined
              package_state?: string | undefined
              package_version?: string | undefined
              running_state?: string | undefined
              uptime?: number | undefined
            }
          | undefined
      }
    | undefined
  services?: { [x: string]: unknown }[] | undefined
  site_id?: string | undefined
  status?: string | undefined
  tunterm_id?: string | undefined
  tunterm_ip_config?:
    | { gateway?: string | undefined; ip?: string | undefined; netmask?: string | undefined }
    | undefined
  tunterm_port_config?:
    | {
        downstream_ports?: { [x: string]: unknown }[] | undefined
        separate_upstream_downstream?: boolean | undefined
        upstream_ports?: { [x: string]: unknown }[] | undefined
      }
    | undefined
  tunterm_registered?: boolean | undefined
  tunterm_stat?: { monitoring_failed?: boolean | undefined } | undefined
  uptime?: number | undefined
  virtualization_type?: string | undefined
}
type StatsDeviceOther = {
  last_config?: number | undefined
  last_seen?: number | undefined
  mac?: string | undefined
  uptime?: number | undefined
  vendor?: string | undefined
  vendor_specific?: { [x: string]: unknown } | undefined
  version?: string | undefined
}
type StatsSwitchPort = {
  for_site?: boolean | undefined
  mac: string
  neighbor_mac: string
  neighbor_port_desc?: string | undefined
  neighbor_system_name?: string | undefined
  org_id: string
  poe_disabled?: boolean | undefined
  port_id: string
  port_mac: string
  rx_bytes: number
  rx_pkts: number
  site_id: string
  speed?: number | undefined
  tx_bytes: number
  tx_pkts: number
  up?: boolean | undefined
  xcvr_part_number?: string | undefined
}
type StatsMxtunnel = {
  ap?: string | undefined
  for_site?: boolean | undefined
  last_seen?: number | undefined
  mxcluster_id?: string | undefined
  mxedge_id?: string | undefined
  mxtunnel_id?: string | undefined
  org_id?: string | undefined
  peer_mxedge_id?: string | undefined
  remote_ip?: string | undefined
  remote_port?: number | undefined
  rx_control_pkts?: number | undefined
  sessions?:
    | { local_sid: number; remote_id: string; remote_sid: number; state: string }[]
    | undefined
  site_id?: string | undefined
  state?:
    | 'idle'
    | 'wait-ctrl-reply'
    | 'wait-ctrl-conn'
    | 'established'
    | 'established_with_session'
    | undefined
  tx_control_pkts?: number | undefined
  uptime?: number | undefined
}
type StatsWantunnel = {
  auth_algo?: string | undefined
  encrypt_algo?: string | undefined
  ike_version?: string | undefined
  ip?: string | undefined
  last_event?: string | undefined
  mac?: string | undefined
  node?: string | undefined
  org_id?: string | undefined
  peer_host?: string | undefined
  peer_ip?: string | undefined
  protocol?: 'ipsec' | 'gre' | undefined
  rx_bytes?: number | undefined
  rx_pkts?: number | undefined
  site_id?: string | undefined
  tunnel_name?: string | undefined
  tx_bytes?: number | undefined
  tx_pkts?: number | undefined
  up?: boolean | undefined
  uptime?: number | undefined
}
type Template = {
  applies?:
    | {
        org_id?: string | undefined
        site_ids?: string[] | undefined
        sitegroup_ids?: string[] | undefined
      }
    | undefined
  created_time?: number | undefined
  deviceprofile_ids?: string[] | undefined
  exceptions?: { site_ids?: string[] | undefined; sitegroup_ids?: string[] | undefined } | undefined
  filter_by_deviceprofile?: boolean | undefined
  id?: string | undefined
  modified_time?: number | undefined
  name: string
  org_id?: string | undefined
}
type Vpn = {
  created_time?: number | undefined
  id?: string | undefined
  modified_time?: number | undefined
  name: string
  org_id?: string | undefined
  paths: { [x: string]: { bfd_profile?: 'broadband' | 'lte' | undefined; ip?: string | undefined } }
}
type Webhook = {
  created_time?: number | undefined
  enabled?: boolean | undefined
  for_site?: boolean | undefined
  headers?: ({ [x: string]: unknown } | null) | undefined
  id?: string | undefined
  modified_time?: number | undefined
  name?: (string | null) | undefined
  org_id?: string | undefined
  secret?: (string | null) | undefined
  site_id?: string | undefined
  splunk_token?: (string | null) | undefined
  topics?:
    | (
        | 'alarms'
        | 'asset-raw'
        | 'asset-raw-rssi'
        | 'audits'
        | 'client-join'
        | 'client-sessions'
        | 'device-events'
        | 'device-updowns'
        | 'discovered-raw-rssi'
        | 'location'
        | 'mxedge-events'
        | 'nac-sessions'
        | 'occupancy-alerts'
        | 'rssizone'
        | 'sdkclient-scan-data'
        | 'vbeacon'
        | 'wifi-conn-raw'
        | 'wifi-unconn-raw'
        | 'zone'
      )[]
    | undefined
  type?: 'http-post' | 'splunk' | undefined
  url?: (string | null) | undefined
  verify_cert?: boolean | undefined
}
type WiredClientResponse = {
  device_mac?: string[] | undefined
  device_mac_port?:
    | {
        device_mac?: string | undefined
        ip?: string | undefined
        port_id?: string | undefined
        port_parent?: string | undefined
        start?: string | undefined
        vlan?: number | undefined
        when?: string | undefined
      }[]
    | undefined
  ip?: string[] | undefined
  mac?: string | undefined
  org_id?: string | undefined
  port_id?: string[] | undefined
  site_id?: string | undefined
  timestamp?: number | undefined
  vlan?: number[] | undefined
}
type WlanPortalTemplate = {
  accessCodeAlternateEmail?: string | undefined
  alignment?: string | undefined
  authButtonAmazon?: string | undefined
  authButtonAzure?: string | undefined
  authButtonEmail?: string | undefined
  authButtonFacebook?: string | undefined
  authButtonGoogle?: string | undefined
  authButtonMicrosoft?: string | undefined
  authButtonPassphrase?: string | undefined
  authButtonSms?: string | undefined
  authButtonSponsor?: string | undefined
  authLabel?: string | undefined
  backLink?: string | undefined
  color?: string | undefined
  colorDark?: string | undefined
  colorLight?: string | undefined
  company?: boolean | undefined
  companyError?: string | undefined
  companyLabel?: string | undefined
  email?: boolean | undefined
  emailAccessDomainError?: string | undefined
  emailCancel?: string | undefined
  emailCodeCancel?: string | undefined
  emailCodeError?: string | undefined
  emailCodeFieldLabel?: string | undefined
  emailCodeMessage?: string | undefined
  emailCodeSubmit?: string | undefined
  emailCodeTitle?: string | undefined
  emailError?: string | undefined
  emailFieldLabel?: string | undefined
  emailLabel?: string | undefined
  emailMessage?: string | undefined
  emailSubmit?: string | undefined
  emailTitle?: string | undefined
  field1?: boolean | undefined
  field1Error?: string | undefined
  field1Label?: string | undefined
  field1Required?: boolean | undefined
  field2?: boolean | undefined
  field2Error?: string | undefined
  field2Label?: string | undefined
  field2Required?: boolean | undefined
  field3?: boolean | undefined
  field3Error?: string | undefined
  field3Label?: string | undefined
  field3Required?: boolean | undefined
  field4?: boolean | undefined
  field4Error?: string | undefined
  field4Label?: string | undefined
  field4Required?: boolean | undefined
  message?: string | undefined
  name?: boolean | undefined
  nameError?: string | undefined
  nameLabel?: string | undefined
  optout?: boolean | undefined
  optoutLabel?: string | undefined
  pageTitle: string
  passphraseCancel?: string | undefined
  passphraseError?: string | undefined
  passphraseLabel?: string | undefined
  passphraseMessage?: string | undefined
  passphraseSubmit?: string | undefined
  passphraseTitle?: string | undefined
  poweredBy?: boolean | undefined
  requiredFieldLabel?: string | undefined
  signInLabel?: string | undefined
  smsCarrierDefault?: string | undefined
  smsCarrierError?: string | undefined
  smsCarrierFieldLabel?: string | undefined
  smsCodeCancel?: string | undefined
  smsCodeError?: string | undefined
  smsCodeFieldLabel?: string | undefined
  smsCodeMessage?: string | undefined
  smsCodeSubmit?: string | undefined
  smsCodeTitle?: string | undefined
  smsCountryFieldLabel?: string | undefined
  smsCountryFormat?: string | undefined
  smsHaveAccessCode?: string | undefined
  smsMessageFormat?: string | undefined
  smsNumberCancel?: string | undefined
  smsNumberError?: string | undefined
  smsNumberFieldLabel?: string | undefined
  smsNumberFormat?: string | undefined
  smsNumberMessage?: string | undefined
  smsNumberSubmit?: string | undefined
  smsNumberTitle?: string | undefined
  smsUsernameFormat?: string | undefined
  smsValidityDuration?: number | undefined
  sponsorBackLink?: string | undefined
  sponsorCancel?: string | undefined
  sponsorEmail?: string | undefined
  sponsorEmailError?: string | undefined
  sponsorEmailTemplate?: string | undefined
  sponsorInfoApproved?: string | undefined
  sponsorInfoDenied?: string | undefined
  sponsorInfoPending?: string | undefined
  sponsorName?: string | undefined
  sponsorNameError?: string | undefined
  sponsorNotePending?: string | undefined
  sponsorRequestAccess?: string | undefined
  sponsorSelectEmail?: string | undefined
  sponsorStatusApproved?: string | undefined
  sponsorStatusDenied?: string | undefined
  sponsorStatusPending?: string | undefined
  sponsorSubmit?: string | undefined
  sponsorsError?: string | undefined
  sponsorsInfoApproved?: string | undefined
  sponsorsInfoDenied?: string | undefined
  sponsorsInfoPending?: string | undefined
  tos?: boolean | undefined
  tosAcceptLabel?: string | undefined
  tosError?: string | undefined
  tosLink?: string | undefined
  tosText?: string | undefined
}
type PortalTemplate = {
  accessCodeAlternateEmail?: string | undefined
  alignment?: string | undefined
  authButtonAmazon?: string | undefined
  authButtonAzure?: string | undefined
  authButtonEmail?: string | undefined
  authButtonFacebook?: string | undefined
  authButtonGoogle?: string | undefined
  authButtonMicrosoft?: string | undefined
  authButtonPassphrase?: string | undefined
  authButtonSms?: string | undefined
  authButtonSponsor?: string | undefined
  authLabel?: string | undefined
  backLink?: string | undefined
  color?: string | undefined
  colorDark?: string | undefined
  colorLight?: string | undefined
  company?: boolean | undefined
  companyError?: string | undefined
  companyLabel?: string | undefined
  created_time?: number | undefined
  email?: boolean | undefined
  emailAccessDomainError?: string | undefined
  emailCancel?: string | undefined
  emailCodeError?: string | undefined
  emailError?: string | undefined
  emailFieldLabel?: string | undefined
  emailLabel?: string | undefined
  emailMessage?: string | undefined
  emailSubmit?: string | undefined
  emailTitle?: string | undefined
  field1?: boolean | undefined
  field1Error?: string | undefined
  field1Label?: string | undefined
  field1Required?: boolean | undefined
  field2?: boolean | undefined
  field2Error?: string | undefined
  field2Label?: string | undefined
  field2Required?: boolean | undefined
  field3?: boolean | undefined
  field3Error?: string | undefined
  field3Label?: string | undefined
  field3Required?: boolean | undefined
  field4?: boolean | undefined
  field4Error?: string | undefined
  field4Label?: string | undefined
  field4Required?: boolean | undefined
  for_site?: boolean | undefined
  id?: string | undefined
  message?: string | undefined
  modified_time?: number | undefined
  name?: boolean | undefined
  nameError?: string | undefined
  nameLabel?: string | undefined
  optout?: boolean | undefined
  optoutLabel?: string | undefined
  org_id?: string | undefined
  pageTitle: string
  passphraseCancel?: string | undefined
  passphraseError?: string | undefined
  passphraseLabel?: string | undefined
  passphraseMessage?: string | undefined
  passphraseSubmit?: string | undefined
  passphraseTitle?: string | undefined
  poweredBy?: boolean | undefined
  requiredFieldLabel?: string | undefined
  signInLabel?: string | undefined
  site_id?: string | undefined
  smsCarrierDefault?: string | undefined
  smsCarrierError?: string | undefined
  smsCarrierFieldLabel?: string | undefined
  smsCodeCancel?: string | undefined
  smsCodeError?: string | undefined
  smsCodeFieldLabel?: string | undefined
  smsCodeMessage?: string | undefined
  smsCodeSubmit?: string | undefined
  smsCodeTitle?: string | undefined
  smsCountryFieldLabel?: string | undefined
  smsCountryFormat?: string | undefined
  smsHaveAccessCode?: string | undefined
  smsMessageFormat?: string | undefined
  smsNumberCancel?: string | undefined
  smsNumberError?: string | undefined
  smsNumberFieldLabel?: string | undefined
  smsNumberFormat?: string | undefined
  smsNumberMessage?: string | undefined
  smsNumberSubmit?: string | undefined
  smsNumberTitle?: string | undefined
  smsUsernameFormat?: string | undefined
  smsValidityDuration?: number | undefined
  sponsorBackLink?: string | undefined
  sponsorCancel?: string | undefined
  sponsorEmail?: string | undefined
  sponsorEmailError?: string | undefined
  sponsorEmailTemplate?: string | undefined
  sponsorInfoApproved?: string | undefined
  sponsorInfoDenied?: string | undefined
  sponsorInfoPending?: string | undefined
  sponsorName?: string | undefined
  sponsorNameError?: string | undefined
  sponsorNotePending?: string | undefined
  sponsorStatusApproved?: string | undefined
  sponsorStatusDenied?: string | undefined
  sponsorStatusPending?: string | undefined
  sponsorSubmit?: string | undefined
  tos?: boolean | undefined
  tosAcceptLabel?: string | undefined
  tosError?: string | undefined
  tosLink?: string | undefined
  tosText?: string | undefined
}
type WxlanRule = {
  action?: 'allow' | 'block' | undefined
  blocked_apps?: string[] | undefined
  created_time?: number | undefined
  dst_allow_wxtags?: string[] | undefined
  dst_deny_wxtags?: string[] | undefined
  enabled?: boolean | undefined
  for_site?: boolean | undefined
  id?: string | undefined
  modified_time?: number | undefined
  order: number
  org_id?: string | undefined
  site_id?: string | undefined
  src_wxtags: string[]
}
type WxlanTag = {
  created_time?: number | undefined
  for_site?: boolean | undefined
  id?: string | undefined
  last_ips?: string[] | undefined
  mac?: (string | null) | undefined
  match?:
    | 'ap_id'
    | 'app'
    | 'asset_mac'
    | 'client_mac'
    | 'hostname'
    | 'ip_range_subnet'
    | 'port'
    | 'radius_attr'
    | 'radius_group'
    | 'radius_username'
    | 'wlan_id'
    | 'psk_name'
    | 'psk_rule'
    | undefined
  modified_time?: number | undefined
  name: string
  op?: 'in' | 'not_in' | undefined
  org_id?: string | undefined
  resource_mac?: (string | null) | undefined
  services?: string[] | undefined
  site_id?: string | undefined
  specs?:
    | {
        port_range?: string | undefined
        protocol?: string | undefined
        subnets?: string[] | undefined
      }[]
    | undefined
  subnet?: string | undefined
  type: 'match' | 'client' | 'resource' | 'subnet' | 'spec'
  values?: string[] | undefined
}
type WxlanTunnel = {
  created_time?: number | undefined
  dmvpn?:
    | {
        enabled?: boolean | undefined
        holding_time?: number | undefined
        host_routes?: string[] | undefined
      }
    | undefined
  for_mgmt?: boolean | undefined
  for_site?: boolean | undefined
  hello_interval?: number | undefined
  hello_retries?: number | undefined
  hostname?: string | undefined
  id?: string | undefined
  ipsec?: { enabled?: boolean | undefined; psk: string } | undefined
  is_static?: boolean | undefined
  modified_time?: number | undefined
  mtu?: number | undefined
  name: string
  org_id?: string | undefined
  peers?: string[] | undefined
  router_id?: string | undefined
  secret?: string | undefined
  sessions?:
    | {
        ap_as_session_id?: string | undefined
        comment?: string | undefined
        enable_cookie?: boolean | undefined
        ethertype?: 'ethernet' | 'vlan' | undefined
        local_session_id?: number | undefined
        'pseudo_802.1ad_enabled'?: boolean | undefined
        remote_id?: string | undefined
        remote_session_id?: number | undefined
        use_ap_as_session_ids?: boolean | undefined
      }[]
    | undefined
  site_id?: string | undefined
  udp_port?: number | undefined
  use_udp?: boolean | undefined
}
type Anomaly = {
  events: { [x: string]: unknown }[]
  since?: number | undefined
  sle_baseline: number
  sle_deviation: number
  timestamp: number
}
type Beacon = {
  created_time?: number | undefined
  eddystone_instance?: string | undefined
  eddystone_namespace?: string | undefined
  eddystone_url?: string | undefined
  for_site?: boolean | undefined
  ibeacon_major?: number | undefined
  ibeacon_minor?: number | undefined
  ibeacon_uuid?: string | undefined
  id?: string | undefined
  mac?: string | undefined
  map_id?: string | undefined
  modified_time?: number | undefined
  name?: string | undefined
  org_id?: string | undefined
  power?: number | undefined
  site_id?: string | undefined
  type?: 'ibeacon' | 'eddystone-uid' | 'eddystone-url' | undefined
  x?: number | undefined
  y?: number | undefined
}
type ApClientBridge = {
  auth?: { psk?: string | undefined; type?: 'open' | 'psk' | undefined } | undefined
  enabled?: boolean | undefined
  ssid?: string | undefined
}
type DeviceAp = {
  aeroscout?: ApAeroscout | undefined
  ble_config?: ApBle | undefined
  centrak?: { enabled?: boolean | undefined } | undefined
  client_bridge?: ApClientBridge | undefined
  created_time?: number | undefined
  deviceprofile_id?: (string | null) | undefined
  disable_eth1?: boolean | undefined
  disable_eth2?: boolean | undefined
  disable_eth3?: boolean | undefined
  disable_module?: boolean | undefined
  for_site?: boolean | undefined
  height?: number | undefined
  id?: string | undefined
  image1_url?: (string | null) | undefined
  image2_url?: (string | null) | undefined
  image3_url?: (string | null) | undefined
  iot_config?: ApIot | undefined
  ip_config?: ApIp | undefined
  led?: ApLed | undefined
  locked?: boolean | undefined
  map_id?: string | undefined
  mesh?: ApMesh | undefined
  modified_time?: number | undefined
  name?: string | undefined
  notes?: string | undefined
  ntp_servers?: string[] | undefined
  org_id?: string | undefined
  orientation?: number | undefined
  poe_passthrough?: boolean | undefined
  port_config?: { [x: string]: ApPortConfig } | undefined
  pwr_config?: { base?: number | undefined; prefer_usb_over_wifi?: boolean | undefined } | undefined
  radio_config?: ApRadio | undefined
  site_id?: string | undefined
  uplink_port_config?: { dot1x?: boolean | undefined } | undefined
  usb_config?: ApUsb | undefined
  vars?: { [x: string]: unknown } | undefined
  x?: number | undefined
  y?: number | undefined
}
type JunosAclPolicies = {
  allow_dst_tags?: string[] | undefined
  deny_dst_tags?: string[] | undefined
  name?: string | undefined
  src_tags?: string[] | undefined
}
type JunosDhcpd = { enabled?: boolean | undefined }
type JunosEvpnConfig = {
  enabled?: boolean | undefined
  role?: 'core' | 'distribution' | 'access' | undefined
}
type JunosIpConfig = {
  dns?: string[] | undefined
  dns_suffix?: string[] | undefined
  gateway?: string | undefined
  ip?: string | undefined
  netmask?: string | undefined
  network?: string | undefined
  type?: 'static' | 'dynamic' | undefined
  use_mgmt_vrf?: boolean | undefined
}
type JunosNetworks = {
  dns?: string[] | undefined
  dns_suffix?: string[] | undefined
  gateway?: string | undefined
  ospf_interface_type?: string | undefined
  subnet?: string | undefined
  vlan_id: number
  zone?: string | undefined
}
type JunosOspfConfig = {
  areas?: { [x: string]: { no_summary?: boolean | undefined } } | undefined
  enabled?: boolean | undefined
}
type JunosOtherIpConfigs = {
  evpn_anycast?: boolean | undefined
  ip?: string | undefined
  netmask?: string | undefined
  type?: 'static' | 'dhcp' | undefined
}
type JunosPortMirror = {
  egress_port_ids?: string[] | undefined
  filter?: { [x: string]: unknown } | undefined
  ingress_networks?: string[] | undefined
  ingress_port_ids?: string[] | undefined
  output_network?: string | undefined
  output_port_id?: string | undefined
}
type JunosVrfConfig = { enabled?: boolean | undefined }
type JunosVrrpConfig = {
  enabled?: boolean | undefined
  groups?: { '{vrrp_group}'?: { priority?: number | undefined } | undefined } | undefined
}
type DeviceSwitch = {
  acl_policies?: JunosAclPolicies[] | undefined
  acl_tags?: { any?: { type?: string | undefined } | undefined } | undefined
  additional_config_cmds?: string[] | undefined
  created_time?: number | undefined
  deviceprofile_id?: string | undefined
  dhcp_config?: JunosDhcpd | undefined
  dhcp_snooping?: JunosDhcpSnooping | undefined
  disable_auto_config?: boolean | undefined
  dns_servers?: string[] | undefined
  dns_suffix?: string[] | undefined
  evpn_config?: JunosEvpnConfig | undefined
  extra_routes?: { [x: string]: { via?: string | undefined } } | undefined
  id?: string | undefined
  image1_url?: (string | null) | undefined
  image2_url?: (string | null) | undefined
  image3_url?: (string | null) | undefined
  ip_config?: JunosIpConfig | undefined
  managed?: boolean | undefined
  modified_time?: number | undefined
  name?: string | undefined
  networks?: JunosNetworks | undefined
  notes?: string | undefined
  ntp_servers?: string[] | undefined
  oob_ip_config?: JunosOobIpConfig | undefined
  org_id?: string | undefined
  ospf_config?: JunosOspfConfig | undefined
  other_ip_configs?: { [x: string]: JunosOtherIpConfigs } | undefined
  port_config?: { [x: string]: JunosPortConfig } | undefined
  port_mirroring?: { port_mirror?: JunosPortMirror | undefined } | undefined
  port_usages?: { dynamic?: JunosPortUsagesDynamic | undefined } | undefined
  radius_config?: JunosRadiusConfig | undefined
  role?: 'access' | 'aggregation' | undefined
  router_id?: string | undefined
  site_id?: string | undefined
  vars?: { [x: string]: unknown } | undefined
  virtual_chassis?:
    | {
        members?:
          | { mac?: string | undefined; vc_role?: 'master' | 'linecard' | 'backup' | undefined }[]
          | undefined
        preprovisioned?: boolean | undefined
      }
    | undefined
  vrf_config?: JunosVrfConfig | undefined
  vrrp_config?: JunosVrrpConfig | undefined
}
type DeviceGateway = {
  additional_config_cmds?: string[] | undefined
  created_time?: number | undefined
  deviceprofile_id?: string | undefined
  dhcpd_config?: JunosDhcpd | undefined
  extra_routes?: { [x: string]: { via?: string | undefined } } | undefined
  for_site?: boolean | undefined
  id?: string | undefined
  image1_url?: string | undefined
  image2_url?: string | undefined
  image3_url?: string | undefined
  ip_config?: JunosIpConfig | undefined
  managed?: boolean | undefined
  modified_time?: number | undefined
  msp_id?: string | undefined
  name?: string | undefined
  networks?: { [x: string]: { vlan_id?: number | undefined } } | undefined
  ntp_servers?: string[] | undefined
  oob_ip_config?: JunosOobIpConfig | undefined
  org_id?: string | undefined
  port_config?: { [x: string]: JunosPortConfigGateway } | undefined
  site_id?: string | undefined
  vars?: { [x: string]: unknown } | undefined
}
type DeviceUpgradeResponse = {
  counts?:
    | {
        download_requested?: number | undefined
        downloaded?: number | undefined
        failed?: number | undefined
        reboot_in_progress?: number | undefined
        rebooted?: number | undefined
        scheduled?: number | undefined
        skipped?: number | undefined
        total?: number | undefined
        upgraded?: number | undefined
      }
    | undefined
  current_phase?: number | undefined
  enable_p2p?: boolean | undefined
  force?: boolean | undefined
  id: string
  max_failure_percentage?: number | undefined
  max_failures?: number[] | undefined
  reboot_at?: number | undefined
  start_time?: number | undefined
  status?: 'created' | 'completed' | 'canceled' | 'downloading' | undefined
  strategy?: 'big_bang' | undefined
  target_version?: string | undefined
  upgrade_plan?: { [x: string]: unknown } | undefined
}
type DeviceSwitchVc = {
  member?: number | undefined
  members?:
    | {
        mac?: string | undefined
        member?: number | undefined
        vc_ports?: string[] | undefined
        vc_role?: 'master' | 'backup' | 'linecard' | undefined
      }[]
    | undefined
  'new-member'?: number | undefined
  op?: 'add' | 'remove' | 'renumber' | undefined
}
type ModelMl = { [x: string]: { int?: number | undefined; ple?: number | undefined } }
type Capture =
  | {
      ap_mac?: (string | null) | undefined
      client_mac?: (string | null) | undefined
      duration?: number | undefined
      includes_mcast?: boolean | undefined
      max_pkt_len?: number | undefined
      num_packets?: number | undefined
      ssid?: (string | null) | undefined
      type: 'client'
    }
  | {
      ap_mac?: (string | null) | undefined
      client_mac?: (string | null) | undefined
      duration?: number | undefined
      includes_mcast?: boolean | undefined
      max_pkt_len?: number | undefined
      num_packets?: number | undefined
      ssid?: (string | null) | undefined
      type: 'new_assoc'
    }
  | {
      ap_mac?: (string | null) | undefined
      duration?: number | undefined
      format?: 'pcap' | 'string' | undefined
      max_pkt_len?: number | undefined
      num_packets?: number | undefined
      tcpdump_expression?: string | undefined
      type: 'wired'
    }
  | {
      ap_mac?: (string | null) | undefined
      band?: '24' | '5' | '6' | '24,5,6' | undefined
      duration?: number | undefined
      format?: 'pcap' | 'string' | undefined
      max_pkt_len?: number | undefined
      num_packets?: number | undefined
      ssid?: string | undefined
      type: 'wlan'
      wlan_id?: string | undefined
    }
  | {
      ap_mac?: (string | null) | undefined
      band?: '24' | '5' | '6' | '24,5,6' | undefined
      client_mac?: (string | null) | undefined
      duration?: number | undefined
      format?: 'pcap' | 'stream' | undefined
      max_pkt_len?: number | undefined
      num_packets?: number | undefined
      radiotap_tcpdump_expression?: string | undefined
      ssid?: (string | null) | undefined
      tcpdump_expression?: string | undefined
      type: 'radiotap,wired'
      wired_tcpdump_expression?: string | undefined
      wireless_tcpdump_expression?: string | undefined
      wlan_id?: string | undefined
    }
  | {
      ap_mac?: (string | null) | undefined
      band?: '24' | '5' | '6' | '24,5,6' | undefined
      client_mac?: (string | null) | undefined
      duration?: number | undefined
      format?: 'pcap' | 'stream' | undefined
      max_pkt_len?: number | undefined
      num_packets?: number | undefined
      ssid?: string | undefined
      tcpdump_expression?: string | undefined
      type: 'radiotap'
      wlan_id?: string | undefined
    }
  | {
      duration?: number | undefined
      format?: 'stream' | 'pcap' | undefined
      gateways?:
        | {
            [x: string]: {
              ports?: { [x: string]: { tcpdump_expression?: string | undefined } } | undefined
            }
          }
        | undefined
      max_pkt_len?: number | undefined
      num_packets?: number | undefined
      type: 'gateway'
    }
  | {
      ap_mac?: (string | null) | undefined
      band?: '24' | '5' | '6' | undefined
      channel?: string | undefined
      client_mac?: string | undefined
      duration?: number | undefined
      format?: 'pcap' | 'stream' | undefined
      max_pkt_len?: number | undefined
      num_packets?: number | undefined
      tcpdump_expression?: string | undefined
      type: string
      width?: string | undefined
    }
  | {
      duration?: number | undefined
      format?: 'pcap' | 'stream' | undefined
      max_pkt_len?: number | undefined
      num_packets?: number | undefined
      switches?:
        | { [x: string]: { ports?: { [x: string]: { [x: string]: unknown } | null } | undefined } }
        | undefined
      tcpdump_expression?: string | undefined
      type?: 'switch' | undefined
    }
type RfdiagResponse = {
  asset_id?: string | undefined
  asset_name?: string | undefined
  client_name?: string | undefined
  duration: number
  end_time: number
  frame_count: number
  id?: string | undefined
  mac?: string | undefined
  map_id: string
  name: string
  next?: string | undefined
  raw_events: string
  ready: boolean
  sdkclient_id?: string | undefined
  sdkclient_name?: string | undefined
  sdkclient_uuid?: string | undefined
  start_time: number
  type: 'sdkclient' | 'client' | 'asset'
  url: string
}[]
type Rfdiag = {
  duration?: number | undefined
  mac?: string | undefined
  name: string
  sdkclient_id?: string | undefined
  type: 'sdkclient' | 'client' | 'asset'
}
type EventsRogue = {
  ap: string
  bssid: string
  channel: number
  rssi: number
  ssid: string
  timestamp: number
}
type RrmBand = {
  bandwidth?: 20 | 40 | 80 | 160 | undefined
  channel?: number | undefined
  curr_bandwidht?: 20 | 40 | 80 | 160 | undefined
  curr_channel?: number | undefined
  curr_power?: number | undefined
  curr_usage?: string | undefined
  power?: number | undefined
  usage?: string | undefined
}
type RrmBandMetric = {
  cochannel_neighbors: number
  density: number
  neighbors: number
  noise: number
}
type Rrm = {
  band_24: { [x: string]: RrmBand }
  band_24_metric: RrmBandMetric
  band_5: { [x: string]: RrmBand }
  band_5_metric: RrmBandMetric
  band_6?: { [x: string]: RrmBand } | undefined
  band_6_metric?: RrmBandMetric | undefined
  rftemplate: Rftemplate
  rftemplate_id: string
  rftemplate_name: string
  status: 'unknown' | 'updating' | 'ready'
  timestamp: number
}
type Rssizone = {
  created_time?: number | undefined
  devices: { device_id: string; rssi: number }[]
  for_site?: boolean | undefined
  id?: string | undefined
  modified_time?: number | undefined
  name?: string | undefined
  org_id?: string | undefined
  site_id?: string | undefined
}
type AutoPreemption = {
  day_of_week?: 'any' | 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun' | undefined
  enabled?: boolean | undefined
  time_of_day?: string | undefined
}
type SiteAutoUpgrade = {
  custom_versions?: { [x: string]: string } | undefined
  day_of_week?: 'any' | 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun' | '' | undefined
  enabled?: boolean | undefined
  time_of_day?: string | undefined
  version?: 'beta' | 'stable' | 'custom' | undefined
}
type SiteEngagement = {
  dwell_tag_names: { bounce: string; engaged: string; passerby: string; stationed: string }
  dwell_tags?:
    | {
        bounce?: (string | null) | undefined
        engaged?: (string | null) | undefined
        passerby?: (string | null) | undefined
        stationed?: (string | null) | undefined
      }
    | undefined
  hours?:
    | {
        fri?: string | undefined
        mon?: string | undefined
        sta?: string | undefined
        sun?: string | undefined
        thu?: string | undefined
        tue?: string | undefined
        wed?: string | undefined
      }
    | undefined
  max_dwell?: number | undefined
  min_dwell?: number | undefined
}
type JunosEvpnOptions = {
  core_as_border?: boolean | undefined
  overlay?: { as?: number | undefined } | undefined
  per_vlan_vga_v4_mac?: boolean | undefined
  routed_at?: 'edge' | 'core' | 'distribution' | undefined
  underlay?:
    | {
        as_base?: number | undefined
        routed_id_prefix?: string | undefined
        subnet?: string | undefined
      }
    | undefined
}
type SiteGateway = {
  admin_sshkeys?: string[] | undefined
  app_probing?:
    | {
        apps?: string[] | undefined
        custom_apps?:
          | {
              app_type?: string | undefined
              hostname?: string[] | undefined
              name?: string | undefined
              protocol?: 'http' | 'tcp' | 'udp' | undefined
            }[]
          | undefined
        enabled?: boolean | undefined
      }
    | undefined
  app_usage?: boolean | undefined
  config_revert_timer?: number | undefined
  probe_hosts?: string[] | undefined
  root_password?: string | undefined
  security_log_source_address?: string | undefined
  security_log_source_interface?: string | undefined
}
type SiteMxtunnel = {
  ap_subnets?: string[] | undefined
  clusters?: { name?: string | undefined; tunterm_hosts?: string[] | undefined }[] | undefined
  created_time?: number | undefined
  for_site?: boolean | undefined
  hello_interval?: number | undefined
  hello_retries?: number | undefined
  hosts?: string[] | undefined
  id?: string | undefined
  modified_time?: number | undefined
  mtu?: number | undefined
  org_id?: string | undefined
  protocol?: 'udp' | 'ip' | undefined
  radsec?:
    | {
        acct_servers?: AcctServer[] | undefined
        auth_servers?: AuthServer[] | undefined
        enabled?: boolean | undefined
        use_mxedge?: boolean | undefined
      }
    | undefined
  site_id?: string | undefined
  vlan_ids?: (number | string)[] | undefined
}
type SiteOccupancyAnalytics = {
  assets_enabled?: boolean | undefined
  clients_enabled?: boolean | undefined
  min_duration?: number | undefined
  sdkclients_enabled?: boolean | undefined
  unconnected_clients_enabled?: boolean | undefined
}
type JunosOspfAreas = {
  networks?:
    | {
        [x: string]: {
          auth_keys?: { [x: string]: string } | undefined
          auth_password?: string | undefined
          auth_type?: 'none' | 'md5' | 'password' | undefined
          dead_interval?: number | undefined
          hello_interval?: number | undefined
          interface_type?: 'nbma' | 'p2p' | 'p2mp' | undefined
          passive?: boolean | undefined
        }
      }
    | undefined
  type?: 'default' | 'stub' | 'nssa' | undefined
}
type SiteRogue = {
  enabled?: boolean | undefined
  honeypot_enabled?: boolean | undefined
  min_duration?: number | undefined
  min_rssi?: number | undefined
  whitelisted_bssids?: string[] | undefined
  whitelisted_ssids?: string[] | undefined
}
type SiteSsr = { conductor_hosts?: string[] | undefined; disable_stats?: boolean | undefined }
type SiteSwitch = {
  ap_affinity_threshold?: number | undefined
  config_revert_timer?: number | undefined
  dhcp_option_fqdn?: boolean | undefined
  mxedge_proxy_host?: string | undefined
  mxedge_proxy_port?: number | undefined
  protect_re?:
    | {
        allowed_services?: string[] | undefined
        custom?:
          | {
              port_range?: string | undefined
              protocol?: 'tcp' | 'udp' | 'icmp' | 'any' | undefined
              subnets?: string[] | undefined
            }[]
          | undefined
        enabled?: boolean | undefined
        trusted_hosts?: string[] | undefined
      }
    | undefined
  root_password?: string | undefined
  use_mxedge_proxy?: boolean | undefined
}
type JunosVrfInstance = {
  extra_routes: { [x: string]: { via?: string | undefined } }
  networks: string[]
}
type JunosVrrpGroup = {
  auth_key?: string | undefined
  auth_password?: string | undefined
  auth_type?: 'md5' | 'simple' | undefined
  networks?: { [x: string]: { ip?: string | undefined } } | undefined
}
type SiteWids = {
  repeated_auth_failures?:
    | { duration?: number | undefined; threshold?: number | undefined }
    | undefined
}
type SiteWifi = {
  cisco_enabled?: boolean | undefined
  disable_11k?: boolean | undefined
  disable_radios_when_power_constrained?: boolean | undefined
  enable_arp_spoof_check?: boolean | undefined
  enable_channel_144?: boolean | undefined
  enable_shared_radio_scanning?: boolean | undefined
  enable_vna?: boolean | undefined
  enabled?: boolean | undefined
  locate_connected?: boolean | undefined
  locate_unconnected?: boolean | undefined
  mesh_allow_dfs?: boolean | undefined
  mesh_enable_crm?: boolean | undefined
  mesh_enabled?: boolean | undefined
  mesh_psk?: string | undefined
  mesh_ssid?: string | undefined
  proxy_arp?: 'default' | 'enabled' | 'disabled' | undefined
}
type SiteZoneOccupancyAlert = {
  email_notifiers?: string[] | undefined
  enabled?: boolean | undefined
  threshold?: number | undefined
}
type SiteSetting = {
  additional_config_cmds?: string[] | undefined
  analytic?: { enabled?: boolean | undefined } | undefined
  ap_matching?:
    | {
        enabled?: boolean | undefined
        rules?:
          | {
              match_model?: string | undefined
              name?: string | undefined
              port_config?: { [x: string]: ApPortConfig } | undefined
            }[]
          | undefined
      }
    | undefined
  ap_port_config?:
    | { model_specific?: { [x: string]: { [x: string]: ApPortConfig } } | undefined }
    | undefined
  auto_placement?:
    | { orientation?: number | undefined; x?: number | undefined; y?: number | undefined }
    | undefined
  auto_preemption?: AutoPreemption | undefined
  auto_upgrade?: SiteAutoUpgrade | undefined
  blacklist_url?: string | undefined
  ble_config?: ApBle | undefined
  config_auto_revert?: boolean | undefined
  created_time?: number | undefined
  device_updown_threshold?: number | undefined
  dns_servers?: string[] | undefined
  dns_suffix?: string[] | undefined
  enable_channel_144?: boolean | undefined
  engagement?: SiteEngagement | undefined
  evpn_options?: JunosEvpnOptions | undefined
  flags?: { [x: string]: string } | undefined
  for_site?: boolean | undefined
  gateway_additional_config_cmds?: string[] | undefined
  gateway_mgmt?: SiteGateway | undefined
  id?: string | undefined
  led?: ApLed | undefined
  modified_time?: number | undefined
  mxedge?: { mist_das?: MxedgeDas | undefined; radsec?: MxclusterRadsec | undefined } | undefined
  mxedge_mgmt?: MxedgeMgmt | undefined
  mxtunnels?: SiteMxtunnel | undefined
  networks?: { [x: string]: JunosNetworks } | undefined
  ntp_servers?: string[] | undefined
  occupancy?: SiteOccupancyAnalytics | undefined
  org_id?: string | undefined
  ospf_areas?: { [x: string]: JunosOspfAreas } | undefined
  persist_config_on_device?: boolean | undefined
  port_usages?: { dynamic?: JunosPortUsagesDynamic | undefined } | undefined
  proxy?: { url?: string | undefined } | undefined
  radio_config?: ApRadio | undefined
  radius_config?: JunosRadiusConfig | undefined
  remote_syslog?: RemoteSyslog | undefined
  report_gatt?: boolean | undefined
  rogue?: SiteRogue | undefined
  rtsa?:
    | {
        app_waking?: boolean | undefined
        disable_dead_reckoning?: boolean | undefined
        disable_pressure_sensor?: boolean | undefined
        enabled?: boolean | undefined
        track_asset?: boolean | undefined
      }
    | undefined
  simple_alert?: SimpleAlert | undefined
  site_id?: string | undefined
  skyatp?: { enabled?: boolean | undefined; send_ip_mac_mapping?: boolean | undefined } | undefined
  srx_app?: { enabled?: boolean | undefined } | undefined
  ssh_keys?: string[] | undefined
  ssr?: SiteSsr | undefined
  status_portal?: { enabled?: boolean | undefined; hostnames?: string[] | undefined } | undefined
  switch_matching?:
    | {
        additional_config_cmds?: string[] | undefined
        enabled?: boolean | undefined
        rules?:
          | {
              additionalProperty?: string | undefined
              match_model?: string | undefined
              name?: string | undefined
              port_config?: { [x: string]: { usage?: string | undefined } } | undefined
            }[]
          | undefined
      }
    | undefined
  switch_mgmt?: SiteSwitch | undefined
  track_anonymous_devices?: boolean | undefined
  tunterm_monitoring?: SiteTuntermMonitoring[] | undefined
  tunterm_monitoring_disabled?: boolean | undefined
  vars?: { [x: string]: string } | undefined
  vna?: { enabled?: boolean | undefined } | undefined
  vrf_instances?: { [x: string]: JunosVrfInstance } | undefined
  vrrp_groups?: { [x: string]: JunosVrrpGroup } | undefined
  wan_vna?: { enabled?: boolean | undefined } | undefined
  watched_station_url?: string | undefined
  whitelist_url?: string | undefined
  wids?: SiteWids | undefined
  wifi?: SiteWifi | undefined
  wired_vna?: { enabled?: boolean | undefined } | undefined
  zone_occupancy_alert?: SiteZoneOccupancyAlert | undefined
}
type EventsSkyatp = {
  device_mac: string
  for_site?: boolean | undefined
  ip: string
  mac: string
  org_id: string
  site_id: string
  threat_level: number
  timestamp: number
  type: string
}
type SleClassifierSummary = {
  classifier: {
    impact: { num_aps: number; num_users: number }
    interval: number
    name: string
    samples: { degraded: number[]; duration: number[]; total: number[] }
    x_label: string
    y_label: string
  }
  end: number
  failures: { [x: string]: unknown }[]
  impact: { num_aps: number; num_users: number; total_aps: number; total_users: number }
  metric: string
  start: number
}
type SleHistogram = {
  data: { range?: (number | null)[] | undefined; value: number }[]
  end: number
  metric: string
  start: number
  x_label: string
  y_label: string
}
type SleImpactSummary = {
  ap: { ap_mac: string; degraded: number; duration: number; name: string; total: number }[]
  band: { band: string; degraded: number; duration: number; name: string; total: number }[]
  classifier: string
  device_os: {
    degraded: number
    device_os: string
    duration: number
    name: string
    total: number
  }[]
  device_type: {
    degraded: number
    device_type: string
    duration: number
    name: string
    total: number
  }[]
  end: number
  failure: string
  metric: string
  start: number
  wlan: { degraded: number; duration: number; name: string; total: number; wlan_id: string }[]
}
type SleImpactedApplications = {
  apps?:
    | {
        app?: string | undefined
        degraded?: number | undefined
        duration?: number | undefined
        name?: string | undefined
        threshold?: number | undefined
        total?: number | undefined
      }[]
    | undefined
  classifier?: string | undefined
  end?: number | undefined
  failure?: string | undefined
  limit?: string | undefined
  metric?: string | undefined
  page?: number | undefined
  start?: number | undefined
  total_count?: number | undefined
}
type SleImpactedAps = {
  aps: { ap_mac: string; degraded: number; duration: number; name: string; total: number }[]
  classifier: string
  end: number
  failure: string
  limit: number
  metric: string
  page: number
  start: number
  total_count: number
}
type SleImpactedChassis = {
  chassis?:
    | {
        chassis?: string | undefined
        degraded?: number | undefined
        duration?: number | undefined
        role?: string | undefined
        switch_mac?: string | undefined
        switch_name?: string | undefined
        total?: number | undefined
      }[]
    | undefined
  classifier?: string | undefined
  end?: number | undefined
  failure?: string | undefined
  limit?: number | undefined
  metric?: string | undefined
  page?: number | undefined
  start?: number | undefined
  total_count?: number | undefined
}
type SleImpactedClients = {
  classifier?: string | undefined
  clients?:
    | {
        degraded?: number | undefined
        duration?: number | undefined
        mac?: string | undefined
        name?: string | undefined
        switches?:
          | {
              interfaces?: string[] | undefined
              switch_mac?: string | undefined
              switch_name?: string | undefined
            }[]
          | undefined
        total?: number | undefined
      }[]
    | undefined
  end?: number | undefined
  failure?: string | undefined
  limit?: number | undefined
  metric?: string | undefined
  page?: number | undefined
  start?: number | undefined
  total_count?: number | undefined
}
type SleImpactedGateways = {
  classifier?: string | undefined
  end?: number | undefined
  failure?: string | undefined
  gateways?:
    | {
        degraded?: number | undefined
        duration?: number | undefined
        gateway_mac?: string | undefined
        gateway_model?: string | undefined
        gateway_version?: string | undefined
        name?: string | undefined
        total?: number | undefined
      }[]
    | undefined
  limit?: number | undefined
  metric?: string | undefined
  page?: number | undefined
  start?: number | undefined
  total_count?: number | undefined
}
type SleImpactedInterfaces = {
  classifier?: string | undefined
  end?: number | undefined
  failure?: string | undefined
  interfaces?:
    | {
        degraded?: number | undefined
        duration?: number | undefined
        interface_name?: string | undefined
        switch_mac?: string | undefined
        switch_name?: string | undefined
        total?: number | undefined
      }[]
    | undefined
  limit?: number | undefined
  metric?: string | undefined
  page?: number | undefined
  start?: number | undefined
  total_count?: number | undefined
}
type SleImpactedSwitches = {
  classifier?: string | undefined
  end?: number | undefined
  failure?: string | undefined
  limit?: number | undefined
  metric?: string | undefined
  page?: number | undefined
  start?: number | undefined
  switches?:
    | {
        degraded?: number | undefined
        duration?: number | undefined
        interface?: string[] | undefined
        name?: string | undefined
        switch_mac?: string | undefined
        switch_model?: string | undefined
        switch_version?: string | undefined
        total?: number | undefined
      }[]
    | undefined
  total_count?: number | undefined
}
type SleImpactedUsers = {
  classifier: string
  end: number
  failure: string
  limit: number
  metric: string
  page: number
  start: number
  total_count: number
  users: {
    ap_mac: string
    ap_name: string
    degraded: number
    device_os: string
    device_type: string
    duration: number
    mac: string
    name: string
    ssid: string
    total: number
    wlan_id: string
  }[]
}
type SleSummary = {
  classifiers: {
    impact?:
      | { num_aps: number; num_users: number; total_aps: number; total_users: number }
      | undefined
    interval: number
    name: string
    samples?: { degraded: number[]; duration: number[]; total: number[] } | undefined
    x_label: string
    y_label: string
  }[]
  end: number
  events: { [x: string]: unknown }[]
  impact: { num_aps: number; num_users: number; total_aps: number; total_users: number }
  sle: {
    interval: number
    name: string
    samples: { degraded: number[]; total: number[]; value: number[] }
    x_label: string
    y_label: string
  }
  start: number
}
type SleThreshold = {
  default?: number | undefined
  direction?: string | undefined
  maximum?: number | undefined
  metric?: string | undefined
  minimum?: number | undefined
  threshold?: string | undefined
  units?: string | undefined
}
type StatsSite = {
  address: string
  alarmtemplate_id: string
  country_code: string
  created_time: number
  id: string
  lat: number
  latlng: { lat: number; lng: number }
  lng: number
  modified_time: number
  msp_id: string
  name: string
  networktemplate_id: string
  num_ap: number
  num_ap_connected: number
  num_clients: number
  num_devices: number
  num_devices_connected: number
  num_gateway: number
  num_gateway_connected: number
  num_switch: number
  num_switch_connected: number
  org_id: string
  rftemplate_id: string
  secpolicy_id?: { [x: string]: unknown } | undefined
  sitegroup_ids: string[]
  timezone: string
  tzoffset: number
}
type StatsBeacon = {
  battery_voltage?: number | undefined
  eddystone_instance?: string | undefined
  eddystone_namespace?: string | undefined
  last_seen: number
  mac: string
  map_id: string
  name: string
  power: number
  type: string
  x: number
  y: number
}[]
type StatsCall = {
  app?: string | undefined
  audio_quality?: number | undefined
  end_time?: number | undefined
  mac?: string | undefined
  meeting_id?: string | undefined
  org_id?: string | undefined
  rating?: number | undefined
  screen_share_quality?: number | undefined
  site_id?: string | undefined
  start_time?: number | undefined
  video_quality?: number | undefined
}
type StatsClientDetail = {
  _ttl: number
  accuracy?: number | undefined
  airespace_ifname?: string | undefined
  airwatch?: { authorized: boolean } | undefined
  ap_id: string
  ap_mac: string
  band: '24' | '5'
  channel: number
  dual_band: boolean
  family: string
  guest?:
    | {
        authorized: boolean
        authorized_expiring_time: number
        authorized_time: number
        company: string
        email: string
        field1: string
        name: string
      }
    | undefined
  hostname: string
  idle_time: number
  ip: string
  is_guest: boolean
  key_mgmt: string
  last_seen: number
  mac: string
  manufacture: string
  map_id?: string | undefined
  model: string
  num_locating_aps?: number | undefined
  os: string
  power_saving: boolean
  proto: 'a' | 'b' | 'g' | 'n' | 'ac' | 'ax'
  psk_id?: string | undefined
  rssi: number
  rssizones?: { id?: string | undefined; since?: number | undefined }[] | undefined
  rx_bps: number
  rx_bytes: number
  rx_packets: number
  rx_rate: number
  rx_retries: number
  snr: number
  ssid: string
  tx_bps: number
  tx_bytes: number
  tx_packets: number
  tx_rate: number
  tx_retries: number
  type?: string | undefined
  uptime: number
  username: string
  vbeacons?: { id?: string | undefined; since?: number | undefined }[] | undefined
  vlan_id?: number | undefined
  wlan_id: string
  wxrule_id?: string | undefined
  wxrule_usage?: { tag_id?: string | undefined; usage?: number | undefined }[] | undefined
  x?: number | undefined
  x_m?: number | undefined
  y?: number | undefined
  y_m?: number | undefined
  zones?: { id?: string | undefined; since?: number | undefined }[] | undefined
}[]
type StatsClientWired = {
  _id?: string | undefined
  _ttl?: number | undefined
  auth_state?: string | undefined
  device_id?: string | undefined
  eth_port?: string | undefined
  last_seen?: number | undefined
  mac: string
  rx_bytes?: number | undefined
  rx_pkts?: number | undefined
  site_id?: string | undefined
  tx_bytes?: number | undefined
  tx_pkts?: number | undefined
  uptime?: number | undefined
  vlan_id?: number | undefined
}
type StatsClient = {
  _ttl: number
  accuracy?: number | undefined
  airespace_ifname?: string | undefined
  airwatch?: { authorized: boolean } | undefined
  ap_id: string
  ap_mac: string
  band: '24' | '5'
  channel: number
  dual_band: boolean
  family: string
  guest?:
    | {
        authorized: boolean
        authorized_expiring_time: number
        authorized_time: number
        company: string
        email: string
        field1: string
        name: string
      }
    | undefined
  hostname: string
  idle_time: number
  ip: string
  ip6?: string | undefined
  is_guest: boolean
  key_mgmt: string
  last_seen: number
  mac: string
  manufacture: string
  map_id?: string | undefined
  model: string
  num_locating_aps?: number | undefined
  os: string
  power_saving: boolean
  proto: 'a' | 'b' | 'g' | 'n' | 'ac' | 'ax'
  psk_id?: string | undefined
  rssi: number
  rx_bps: number
  rx_bytes: number
  rx_packets: number
  rx_rate: number
  rx_retries: number
  snr: number
  ssid: string
  tx_bps: number
  tx_bytes: number
  tx_packets: number
  tx_rate: number
  tx_retries: number
  type?: string | undefined
  uptime: number
  username: string
  vlan_id?: number | undefined
  wlan_id: string
  x?: number | undefined
  x_m?: number | undefined
  y?: number | undefined
  y_m?: number | undefined
}
type AssetOfInterest = {
  _checkpoint_prep?: number | undefined
  _checkpoint_preparer?: number | undefined
  _checkpoint_scan?: number | undefined
  _id?: string | undefined
  _timestamp?: number | undefined
  _ttl?: number | undefined
  ap_mac?: string | undefined
  beam?: number | undefined
  by?: string | undefined
  curr_site?: string | undefined
  device_name?: string | undefined
  id?: string | undefined
  last_seen?: number | undefined
  mac?: string | undefined
  manufacture?: string | undefined
  map_id?: string | undefined
  name?: string | undefined
  rssi?: number | undefined
}
type StatsSdkclient = {
  id: string
  last_seen: number
  map_id?: (string | null) | undefined
  name?: string | undefined
  network_connection: { mac: string; rssi: number; signal_level: number; type: string }
  uuid: string
  x?: number | undefined
  y?: number | undefined
}
type StatsUnconnectedClients = {
  ap_mac: string
  last_seen: number
  mac: string
  manufacture: string
  map_id?: (string | null) | undefined
  rssi: number
  x?: number | undefined
  y: number
}
type StatsSdkclientDetails = {
  id: string
  last_seen: number
  map_id?: (string | null) | undefined
  name?: string | undefined
  network_connection?: { mac: string; rssi: number; signal_level: number; type: string } | undefined
  uuid: string
  vbeacons?: { id: string; since: number }[] | undefined
  x?: number | undefined
  y?: number | undefined
  zones?: { id: string; since: number }[] | undefined
}
type StatsWxrule = {
  action: string
  client_mac: string[]
  dst_allow_wxtags: string[]
  dst_deny_wxtags: string[]
  dst_wxtags: string[]
  name: string
  order: number
  src_wxtags: string[]
  usage: { [x: string]: unknown }
}
type StatsZone = {
  assets_waits?: { avg: number; max: number; min: number; p95: number } | undefined
  clients_waits?: { avg: number; max: number; min: number; p95: number } | undefined
  id: string
  map_id: string
  name: string
  num_assets?: number | undefined
  num_clients?: number | undefined
  num_sdkclients: number
  sdkclients_waits?: { avg: number; max: number; min: number; p95: number } | undefined
}
type StatsZoneDetails = {
  assets?: string[] | undefined
  client_waits: { avg: number; max: number; min: number; p95: number }
  clients?: string[] | undefined
  id: string
  map_id: string
  name: string
  num_clients: number
  num_sdkclients: number
  sdkclients?: string[] | undefined
}
type CurdUiSettings = {
  created_time: number
  defaultScopeId?: string | undefined
  defaultScopeType?: string | undefined
  defaultTimeRange?:
    | {
        end?: number | undefined
        endDate?: string | undefined
        interval?: string | undefined
        name?: string | undefined
        shortName?: string | undefined
        start?: number | undefined
        usePreset?: boolean | undefined
      }
    | undefined
  description: string
  for_site: boolean
  id: string
  isCustomDataboard?: boolean | undefined
  isScopeLinked?: boolean | undefined
  isTimeRangeLinked?: boolean | undefined
  modified_time: number
  name?: string | undefined
  org_id: string
  purpose: string
  site_id: string
  tiles?:
    | {
        chartBand?: string | undefined
        chartColor?: string | undefined
        chartDirection?: string | undefined
        chartRankBy?: string | undefined
        chartType?: string | undefined
        colspan?: number | undefined
        column?: number | undefined
        hideEmptyRows?: boolean | undefined
        id?: string | undefined
        metric?: { apiName?: string | undefined } | undefined
        name?: string | undefined
        row?: number | undefined
        rowspan?: number | undefined
        scopeId?: string | undefined
        scopeType?: string | undefined
        sortedColumns?: { [x: string]: unknown } | undefined
        timeRange?:
          | {
              end?: number | undefined
              endDate?: string | undefined
              interval?: string | undefined
              name?: string | undefined
              shortName?: string | undefined
              start?: number | undefined
              usePreset?: boolean | undefined
            }
          | undefined
        trendType?: string | undefined
        vizType?: string | undefined
      }[]
    | undefined
}
type Vbeacon = {
  created_time?: number | undefined
  for_site?: boolean | undefined
  id?: string | undefined
  major?: number | undefined
  map_id?: string | undefined
  message?: string | undefined
  minor?: number | undefined
  modified_time?: number | undefined
  name?: string | undefined
  org_id?: string | undefined
  power?: number | undefined
  power_mode?: 'default' | 'custom' | undefined
  site_id?: string | undefined
  url?: string | undefined
  uuid?: string | undefined
  wayfinding_nodename?: string | undefined
  x?: number | undefined
  y?: number | undefined
}
type Zone = {
  created_time?: number | undefined
  for_site?: boolean | undefined
  id?: string | undefined
  map_id: string
  modified_time?: number | undefined
  name: string
  org_id?: string | undefined
  site_id?: string | undefined
  vertices: { x: number; y: number }[]
}
type WebhookAlarms = {
  events: {
    aps?: string[] | undefined
    bssids?: string[] | undefined
    count?: number | undefined
    event_id?: string | undefined
    for_site?: boolean | undefined
    id: string
    last_seen: number
    org_id: string
    site_id: string
    ssids?: string[] | undefined
    timestamp: number
    type: string
    update?: boolean | undefined
  }[]
  topic: string
}
type WebhookAssetRaw = {
  events: {
    asset_id: string
    beam: number
    device_id: string
    ibeacon_major?: number | undefined
    ibeacon_minor?: number | undefined
    ibeacon_uuid?: string | undefined
    mac: string
    map_id: string
    mfg_company_id: number
    mfg_data: string
    rssi: number
    service_data_data?: string | undefined
    service_data_last_rx_time?: number | undefined
    service_data_rx_cnt?: number | undefined
    service_data_uuid?: string | undefined
    service_packets?:
      | { service_data?: string | undefined; service_uuid?: string | undefined }[]
      | undefined
    site_id: string
    timestamp: number
  }[]
  topic: string
}
type WebhookAudits = {
  events: {
    admin_name: string
    device_id: string
    id: string
    message: string
    org_id: string
    site_id: string
    src_ip: string
    timestamp: number
  }[]
  topic: string
}
type WebhookClientJoin = {
  events: {
    ap: string
    ap_name: string
    band: string
    bssid: string
    connect: number
    connect_float: number
    mac: string
    org_id: string
    rssi: number
    site_id: string
    site_name: string
    ssid: string
    timestamp: number
    version: number
    wlan_id: string
  }[]
  topic: string
}
type WebhookClientSessions = {
  events: {
    ap: string
    ap_name: string
    band: string
    bssid: string
    client_family: string
    client_manufacture: string
    client_model: string
    client_os: string
    connect: number
    connect_float: number
    disconnect: number
    disconnect_float: number
    duration: number
    mac: string
    next_ap: string
    org_id: string
    rssi: number
    site_id: string
    site_name: string
    ssid: string
    termination_reason: number
    timestamp: number
    version: number
    wlan_id: string
  }[]
  topic: string
}
type WebhookDeviceEvents = {
  events: {
    ap?: string | undefined
    ap_name?: string | undefined
    audit_id?: string | undefined
    device_name: string
    device_type: 'ap' | 'switch' | 'gateway'
    ev_type: 'notice' | 'warn'
    mac: string
    org_id: string
    reason?: string | undefined
    site_id?: string | undefined
    site_name?: string | undefined
    text?: string | undefined
    timestamp: number
    type: string
  }[]
  topic: string
}
type WebhookDeviceUpdowns = {
  events: {
    ap: string
    ap_name: string
    for_site?: boolean | undefined
    org_id: string
    site_id: string
    site_name: string
    timestamp: number
    type: string
  }[]
  topic: string
}
type WebhookDiscoveredRawRssi = {
  events?:
    | {
        ap_loc?: number[] | undefined
        beam: number
        device_id: string
        ibeacon_major?: number | undefined
        ibeacon_minor?: number | undefined
        ibeacon_uuid?: string | undefined
        is_asset?: boolean | undefined
        mac: string
        map_id: string
        mfg_company_id?: string | undefined
        mfg_data?: string | undefined
        org_id: string
        rssi: number
        service_packets?:
          | { service_data?: string | undefined; service_uuid?: string | undefined }[]
          | undefined
        site_id: string
        timestamp?: number | undefined
      }[]
    | undefined
  topic: string
}
type WebhookLocation = {
  events: {
    battery_voltage?: number | undefined
    eddystone_uid_instance?: string | undefined
    eddystone_uid_namespace?: string | undefined
    eddystone_url_url?: string | undefined
    ibeacon_major?: number | undefined
    ibeacon_minor?: number | undefined
    ibeacon_uuid?: string | undefined
    id: string
    mac?: string | undefined
    map_id: string
    mfg_company_id?: number | undefined
    mfg_data?: string | undefined
    name?: string | undefined
    site_id: string
    timestamp: number
    type: string
    wifi_beacon_extended_info?:
      | {
          frame_ctrl?: number | undefined
          payload?: string | undefined
          seq_ctrl?: number | undefined
        }[]
      | undefined
    x: number
    y: number
  }[]
  topic: string
}
type WebhookOccupancyAlerts = {
  events: {
    alert_events?:
      | {
          current_occupancy: number
          map_id: string
          occupancy_limit: number
          org_id: string
          timestamp: number
          type: 'COMPLIANCE-VIOLATION' | 'COMPLIANCE-OK'
          zone_id: string
          zone_name: string
        }[]
      | undefined
    for_site?: boolean | undefined
    site_id: string
    site_name: string
  }[]
  topic: string
}
type WebhookPing = {
  events: { id: string; name: string; site_id: string; timestamp: number }[]
  topic: string
}
type WebhookSdkclientScanData = {
  events: {
    connection_ap: string
    connection_band: string
    connection_bssid: string
    connection_channel: number
    connection_rssi: number
    last_seen: number
    mac: string
    scan_data?:
      | {
          ap: string
          band: '2.4' | '5'
          bssid: string
          channel: number
          rssi: number
          ssid: string
          timestamp: number
        }[]
      | undefined
    site_id: string
  }[]
  topic: 'sdkclient-scan-data'
}
type WebhookZone = {
  events: {
    asset_id?: string | undefined
    id: string
    mac?: string | undefined
    map_id: string
    name?: string | undefined
    site_id: string
    timestamp: number
    trigger: 'enter' | 'exit'
    type: string
    zone_id: string
  }[]
  topic: string
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/v1/const/alarm_defs': {
      $get: {
        input: {}
        output: {
          display: string
          fields: string[]
          group: string
          key: string
          marvis_suggestion_category?: string | undefined
          severity: string
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/const/ap_channels': {
      $get: {
        input: { query: { country_code?: string | undefined } }
        output: {
          band24_channels: { [x: string]: number[] }
          band24_enabled: boolean
          band5_channels: { [x: string]: number[] }
          band5_enabled: boolean
          code: number
          dfs_ok: boolean
          key: string
          name: string
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/const/ap_led_status': {
      $get: {
        input: {}
        output: { code: string; description: string; key: string; name: string }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/const/applications': {
      $get: {
        input: {}
        output: {
          app_id?: boolean | undefined
          app_image_url?: string | undefined
          app_probe?: boolean | undefined
          group?: string | undefined
          key?: string | undefined
          name?: string | undefined
          signature_based?: boolean | undefined
          ssr_app_id?: boolean | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/const/call_events': {
      $get: {
        input: {}
        output: {
          description?: string | undefined
          display?: string | undefined
          example?:
            | {
                app?: string | undefined
                meeting_id?: string | undefined
                org_id?: string | undefined
                site_id?: string | undefined
                timestamp?: number | undefined
                type?: string | undefined
                wcid?: string | undefined
              }
            | undefined
          key?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/const/client_events': {
      $get: {
        input: {}
        output: { display: string; key: string }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/const/countries': {
      $get: {
        input: {}
        output: { alpha2: string; certified: boolean; name: string; numeric: number }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/const/default_gateway_config': {
      $get: {
        input: { query: { model?: string | undefined; ha?: string | undefined } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/const/device_events': {
      $get: {
        input: {}
        output: {
          description?: string | undefined
          display?: string | undefined
          example?: { [x: string]: unknown } | undefined
          key: string
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/const/device_models': {
      $get: {
        input: {}
        output: (ConstDeviceAp | ConstDeviceSwitch | ConstDeviceGateway | ConstDeviceUnknown)[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/const/insight_metrics': {
      $get: {
        input: {}
        output: {
          [x: string]: {
            description?: string | undefined
            example?:
              | (
                  | ({ [x: string]: unknown } | null)
                  | (number | null)
                  | (number | null)
                  | (string | null)
                )[]
              | undefined
            intervals?:
              | { [x: string]: { interval?: number | undefined; max_age?: number | undefined } }
              | undefined
            report_intervals?: { [x: string]: { interval?: number | undefined } } | undefined
            report_scopes?: string[] | undefined
            scopes?: string[] | undefined
            type?: string | undefined
            unit?: string | undefined
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/const/languages': {
      $get: {
        input: {}
        output: { display: string; display_native: string; key: string }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/const/mxedge_events': {
      $get: {
        input: {}
        output: {
          description?: string | undefined
          display?: string | undefined
          example?: { [x: string]: unknown } | undefined
          key?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/const/mxedge_models': {
      $get: {
        input: {}
        output: {
          custom_ports?: boolean | undefined
          display?: string | undefined
          model?: string | undefined
          ports?:
            | {
                '0'?: { display?: string | undefined; speed?: number | undefined } | undefined
                '1'?: { display?: string | undefined; speed?: number | undefined } | undefined
                '2'?: { display?: string | undefined; speed?: number | undefined } | undefined
                '3'?: { display?: string | undefined; speed?: number | undefined } | undefined
              }
            | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/const/system_events': {
      $get: {
        input: {}
        output: { display: string; group: string; key: string }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/const/traffic_types': {
      $get: {
        input: {}
        output: { dscp: number; failover_policy: string; name: string; traffic_class: string }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/installer/orgs/:org_id/alarmtemplates': {
      $get: {
        input: { param: { org_id: string } }
        output: { id: string; name: string }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/installer/orgs/:org_id/deviceprofiles': {
      $get: {
        input: { param: { org_id: string } }
        output: { id: string; name: string }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/installer/orgs/:org_id/devices': {
      $get: {
        input: { param: { org_id: string } }
        output: {
          connected: boolean
          height?: number | undefined
          map_id?: string | undefined
          orientation?: number | undefined
          x?: number | undefined
          y?: number | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { org_id: string } } & { json: ModelArrayString }
            output: {
              added: string[]
              duplicated: string[]
              error: string[]
              inventory_added: {
                mac: string
                magic: string
                model: string
                serial: string
                type: string
              }[]
              inventory_duplicated: {
                mac: string
                magic: string
                model: string
                serial: string
                type: string
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org_id: string } } & { json: ModelArrayString }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/api/v1/installer/orgs/:org_id/devices/:device_mac': {
      $delete: {
        input: { param: { org_id: string; device_mac: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: { param: { org_id: string; device_mac: string } } & { json: InstallerDevices }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org_id: string; device_mac: string } } & { json: InstallerDevices }
            output: { detail: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { org_id: string; device_mac: string } } & { json: InstallerDevices }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/installer/orgs/:org_id/devices/:device_mac/locate': {
      $post: {
        input: { param: { org_id: string; device_mac: string } } & {
          json: { [x: string]: unknown }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/installer/orgs/:org_id/devices/:device_mac/unlocate': {
      $post: {
        input: { param: { org_id: string; device_mac: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/installer/orgs/:org_id/devices/:device_mac/:image_name': {
      $delete: {
        input: { param: { org_id: string; image_name: string; device_mac: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { org_id: string; image_name: string; device_mac: string } } & {
          form: ImageUpload
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/installer/orgs/:org_id/rftemplates': {
      $get: {
        input: { param: { org_id: string } }
        output: { id: string; name: string }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/installer/orgs/:org_id/secpolicies': {
      $get: {
        input: { param: { org_id: string } }
        output: { id: string; name: string }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/installer/orgs/:org_id/sitegroups': {
      $get: {
        input: { param: { org_id: string } }
        output: { id: string; name: string }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/installer/orgs/:org_id/sites': {
      $get: {
        input: { param: { org_id: string } }
        output: {
          address: string
          country_code: string
          id: string
          latlng: { lat: number; lng: number }
          name: string
          timezone: string
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/installer/orgs/:org_id/sites/:site_name': {
      $put: {
        input: { param: { org_id: string; site_name: string } } & { json: Site }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/installer/orgs/:org_id/sites/:site_name/maps': {
      $get: {
        input: { param: { org_id: string; site_name: string } }
        output: Map[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/installer/orgs/:org_id/sites/:site_name/maps/import': {
      $post: {
        input: { param: { org_id: string; site_name: string } } & {
          form: {
            csv?: File | undefined
            file?: File | undefined
            json?:
              | {
                  import_all_floorplans?: boolean | undefined
                  import_height?: boolean | undefined
                  import_orientation?: boolean | undefined
                  vendor_name: 'ibwave' | 'ekahau'
                }
              | undefined
          }
        }
        output: {
          aps: {
            action:
              | 'placed'
              | 'assigned-placed'
              | 'named-placed'
              | 'assigned-named-placed'
              | 'ignored'
            floorplan_id: string
            height?: number | undefined
            mac: string
            map_id: string
            orientation: number
            reason?: string | undefined
          }[]
          floorplans: {
            action: string
            id: string
            map_id: string
            name: string
            reason?: string | undefined
          }[]
          for_site?: boolean | undefined
          site_id: string
          summary: { num_ap_assigned: number; num_inv_assigned: number; num_map_assigned: number }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/installer/orgs/:org_id/sites/:site_name/maps/:map_id': {
      $delete: {
        input: { param: { org_id: string; site_name: string; map_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { org_id: string; site_name: string; map_id: string } } & { json: Map }
        output: Map
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { org_id: string; site_name: string; map_id: string } } & { json: Map }
        output: Map
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/installer/sites/:site_name/optimize': {
      $get: {
        input: { param: { site_name: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/invite/verify/:token': {
      $post:
        | {
            input: { param: { token: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { token: string } }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/login': {
      $post:
        | {
            input: { json: { email: string; password: string; two_factor?: string | undefined } }
            output: {
              email?: string | undefined
              two_factor_passed?: boolean | undefined
              two_factor_required?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { email: string; password: string; two_factor?: string | undefined } }
            output: { detail: string; forward_url?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/v1/login/lookup': {
      $post:
        | {
            input: { json: ModelObjectEmail }
            output: { sso_url?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: ModelObjectEmail }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/v1/login/oauth/:provider': {
      $delete: {
        input: { param: { provider: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { provider: string } } & { query: { forward?: string | undefined } }
        output: { authorization_url: string; client_id: string }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { provider: string } } & { json: { code: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/login/two_factor': {
      $post:
        | {
            input: { json: { two_factor: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: { two_factor: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: { two_factor: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/v1/logout': {
      $post: {
        input: {}
        output: { forward_url?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/mobile/verify/:secret': {
      $post: {
        input: { param: { secret: string } } & { json: ModelObjectDeviceId }
        output: { name: string; org_id: string; secret: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/msps': {
      $post: { input: { json: Msp }; output: Msp; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/msps/:msp_id': {
      $delete: {
        input: { param: { msp_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: { input: { param: { msp_id: string } }; output: Msp; outputFormat: 'json'; status: 200 }
      $put: {
        input: { param: { msp_id: string } } & { json: Msp }
        output: Msp
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/msps/:msp_id/admins': {
      $get: {
        input: { param: { msp_id: string } }
        output: Admin[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/msps/:msp_id/admins/:admin_id': {
      $delete: {
        input: { param: { msp_id: string; admin_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { msp_id: string; admin_id: string } }
        output: Admin
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { msp_id: string; admin_id: string } } & { json: Admin }
        output: Admin
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/msps/:msp_id/claim': {
      $post:
        | {
            input: { param: { msp_id: string } } & { json: { code: string } }
            output: {
              inventory_added: {
                mac: string
                magic: string
                model: string
                serial: string
                type: string
              }[]
              inventory_duplicated: {
                mac: string
                magic: string
                model: string
                serial: string
                type: string
              }[]
              license_added: { end: number; quantity: number; start: number; type: string }[]
              license_duplicated: { end: number; quantity: number; start: number; type: string }[]
              license_error: { order: string; reason: string }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { msp_id: string } } & { json: { code: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/api/v1/msps/:msp_id/insights/:metric': {
      $get: {
        input: { param: { msp_id: string; metric: string } } & {
          query: {
            sle?: string | undefined
            duration?: string | undefined
            interval?: string | undefined
            start?: number | undefined
            end?: number | undefined
          }
        }
        output: {
          end: number
          interval: number
          limit: number
          results: { [x: string]: { [x: string]: unknown } }[]
          start: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/msps/:msp_id/inventory/:device_mac': {
      $get: {
        input: { param: { msp_id: string; device_mac: string } }
        output: {
          for_site?: boolean | undefined
          mac: string
          model: string
          org_id: string
          serial: string
          site_id: string
          type: string
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/msps/:msp_id/invites': {
      $post: {
        input: { param: { msp_id: string } } & { json: Admin }
        output: Admin
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/msps/:msp_id/invites/:invite_id': {
      $delete: {
        input: { param: { msp_id: string; invite_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { msp_id: string; invite_id: string } } & { json: Admin }
        output: Admin
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/msps/:msp_id/licenses': {
      $get: {
        input: { param: { msp_id: string } }
        output: License
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { msp_id: string } } & {
          json: {
            dst_org_id?: string | undefined
            notes?: string | undefined
            op: 'amend' | 'unamend' | 'delete' | 'annotate'
            quantity?: number | undefined
            subscription_id?: string | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/msps/:msp_id/logo': {
      $delete: {
        input: { param: { msp_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { msp_id: string } } & { json: { logo_url?: string | undefined } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/msps/:msp_id/logs': {
      $get: {
        input: { param: { msp_id: string } } & {
          query: {
            org_id?: string | undefined
            admin_name?: string | undefined
            message?: string | undefined
          }
        }
        output: {
          end: number
          limit: number
          next?: string | undefined
          results: {
            admin_id: string | null
            admin_name: string | null
            after?: { [x: string]: unknown } | undefined
            before?: { [x: string]: unknown } | undefined
            for_site?: boolean | undefined
            id?: string | undefined
            message: string
            org_id: string
            site_id: string
            timestamp: number
          }[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/msps/:msp_id/logs/count': {
      $get: {
        input: { param: { msp_id: string } } & {
          query: { distinct?: 'admin_id' | 'admin_name' | 'message' | 'org_id' | undefined }
        }
        output: {
          distinct: string
          end: number
          limit: number
          results: { count: number }[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/msps/:msp_id/orggroups': {
      $get: {
        input: { param: { msp_id: string } }
        output: Orggroup[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { msp_id: string } } & { json: Orggroup }
        output: Orggroup
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/msps/:msp_id/orggroups/:orggroup_id': {
      $delete: {
        input: { param: { msp_id: string; orggroup_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { msp_id: string; orggroup_id: string } }
        output: Orggroup
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { msp_id: string; orggroup_id: string } } & { json: Orggroup }
        output: Orggroup
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/msps/:msp_id/orgs': {
      $get: {
        input: { param: { msp_id: string } }
        output: Org[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { msp_id: string } } & { json: Org }
        output: Org
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { msp_id: string } } & {
          json: { op: 'assign' | 'unassign'; org_ids: string[] }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/msps/:msp_id/orgs/search': {
      $get: {
        input: { param: { msp_id: string } } & {
          query: {
            name?: string | undefined
            org_id?: string | undefined
            sub_insufficient?: boolean | undefined
            trial_enabled?: boolean | undefined
            usage_types?: string[] | undefined
            limit?: number | undefined
          }
        }
        output: {
          end: number
          limit: number
          next?: string | undefined
          results: {
            msp_id?: string | undefined
            name?: string | undefined
            num_aps?: number | undefined
            num_gateways?: number | undefined
            num_sites?: number | undefined
            num_switches?: number | undefined
            num_unassigned_aps?: number | undefined
            org_id?: string | undefined
            sub_ana_entitled?: number | undefined
            sub_ana_required?: number | undefined
            sub_ast_entitled?: number | undefined
            sub_ast_required?: number | undefined
            sub_eng_entitled?: number | undefined
            sub_eng_required?: number | undefined
            sub_ex12_required?: number | undefined
            sub_insufficient?: boolean | undefined
            sub_man_entitled?: number | undefined
            sub_man_required?: number | undefined
            sub_me_entitled?: number | undefined
            sub_vna_entitled?: number | undefined
            sub_vna_required?: number | undefined
            timestamp?: number | undefined
            trial_enabled?: boolean | undefined
            usage_types?: string[] | undefined
          }[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/msps/:msp_id/orgs/:org_id': {
      $get: {
        input: { param: { msp_id: string; org_id: string } }
        output: Org
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/msps/:msp_id/search': {
      $get: {
        input: { param: { msp_id: string } } & {
          query: {
            type: 'orgs'
            q?: string | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          limit: number
          next?: string | undefined
          page: number
          results: { id: string; text: string; type: string }[]
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/msps/:msp_id/ssoroles': {
      $get: {
        input: { param: { msp_id: string } }
        output: Ssorole[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { msp_id: string } } & { json: Ssorole }
        output: Ssorole
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/msps/:msp_id/ssoroles/:ssorole_id': {
      $delete: {
        input: { param: { msp_id: string; ssorole_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { msp_id: string; ssorole_id: string } } & { json: Ssorole }
        output: Ssorole
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/msps/:msp_id/ssos': {
      $get: {
        input: { param: { msp_id: string } }
        output: Sso[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { msp_id: string } } & { json: Sso }
        output: Sso
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/msps/:msp_id/ssos/:sso_id': {
      $delete: {
        input: { param: { msp_id: string; sso_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { msp_id: string; sso_id: string } } & { json: Sso }
        output: Sso
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/msps/:msp_id/ssos/:sso_id/failures': {
      $get: {
        input: { param: { msp_id: string; sso_id: string } }
        output: { results: { detail: string; saml_assertion_xml: string; timestamp: number }[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/msps/:msp_id/ssos/:sso_id/metadata': {
      $get: {
        input: { param: { msp_id: string; sso_id: string } }
        output: { acs_url: string; entity_id: string; logout_url: string; metadata_xml: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/msps/:msp_id/ssos/:sso_id/metadata.xml': {
      $get: {
        input: { param: { msp_id: string; sso_id: string } }
        output: File
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/msps/:msp_id/stats/licenses': {
      $get: {
        input: { param: { msp_id: string } }
        output: License
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/msps/:msp_id/stats/orgs': {
      $get: {
        input: { param: { msp_id: string } } & {
          query: { page?: number | undefined; limit?: number | undefined }
        }
        output: StatsOrg[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/msps/:msp_id/tickets': {
      $get: {
        input: { param: { msp_id: string } } & {
          query: {
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: Ticket[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/msps/:msp_id/tickets/count': {
      $get: {
        input: { param: { msp_id: string } } & {
          query: { distinct?: 'status' | 'type' | 'org_id' | undefined }
        }
        output: {
          distinct: string
          end: number
          limit: number
          results: { count: number }[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs': {
      $post: { input: { json: Org }; output: Org; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/orgs/:org_id': {
      $delete: {
        input: { param: { org_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { org_id: string } }
        output: OrgInfo
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { org_id: string } } & { json: Org }
        output: Org
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/128routers/register_cmd': {
      $get: {
        input: { param: { org_id: string } }
        output: {
          conductor_cmd?: string | undefined
          registration_code?: string | undefined
          router_shell_cmd?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/admins': {
      $get: {
        input: { param: { org_id: string } }
        output: Admin[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/admins/:admin_id': {
      $delete: {
        input: { param: { org_id: string; admin_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { org_id: string; admin_id: string } } & { json: Admin }
        output: Admin
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/alarms/ack': {
      $post: {
        input: { param: { org_id: string } } & {
          json: { alarm_ids: string[]; note?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/alarms/ack_all': {
      $post: {
        input: { param: { org_id: string } } & { json: Note }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/alarms/count': {
      $get: {
        input: { param: { org_id: string } } & {
          query: {
            distinct?: string | undefined
            page?: number | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          distinct: string
          end: number
          limit: number
          results: { count: number }[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/alarms/search': {
      $get: {
        input: { param: { org_id: string } } & {
          query: {
            site_id?: string | undefined
            type?: string | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
            limit?: number | undefined
          }
        }
        output: {
          end: number
          limit: number
          next?: string | undefined
          results: Alarm[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/alarms/unack': {
      $post: {
        input: { param: { org_id: string } } & {
          json: { alarm_ids: string[]; note?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/alarms/unack_all': {
      $post: {
        input: { param: { org_id: string } } & { json: Note }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/alarms/:alarm_id/ack': {
      $post: {
        input: { param: { org_id: string; alarm_id: string } } & { json: Note }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/alarmtemplates': {
      $get: {
        input: { param: { org_id: string } }
        output: Alarmtemplate[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { org_id: string } } & { json: Alarmtemplate }
        output: Alarmtemplate
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/alarmtemplates/suppress': {
      $post: {
        input: { param: { org_id: string } } & {
          json: {
            applies: { org_id: string; site_ids: string[]; sitegroup_ids: string[] }
            duration?: number | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/alarmtemplates/:alarmtemplate_id': {
      $delete: {
        input: { param: { org_id: string; alarmtemplate_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { org_id: string; alarmtemplate_id: string } }
        output: Alarmtemplate
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { org_id: string; alarmtemplate_id: string } } & { json: Alarmtemplate }
        output: Alarmtemplate
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/apitokens': {
      $get: {
        input: { param: { org_id: string } }
        output: Apitoken[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { org_id: string } } & {
          json: {
            name: string
            privileges: {
              role: 'admin' | 'write' | 'read'
              scope: 'site' | 'org' | 'sitegroup'
              site_id: string
              sitegroup_id?: string | undefined
            }[]
          }
        }
        output: Apitoken
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/apitokens/:apitoken_id': {
      $delete: {
        input: { param: { org_id: string; apitoken_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { org_id: string; apitoken_id: string } }
        output: Apitoken
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { org_id: string; apitoken_id: string } } & { json: Apitoken }
        output: Apitoken
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/aptemplates': {
      $get: {
        input: { param: { org_id: string } }
        output: Aptemplate[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { org_id: string } } & { json: Aptemplate }
        output: Aptemplate
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/aptemplates/:aptemplate_id': {
      $delete: {
        input: { param: { org_id: string; aptemplate_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { org_id: string; aptemplate_id: string } }
        output: Aptemplate
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { org_id: string; aptemplate_id: string } } & { json: Aptemplate }
        output: Aptemplate
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/assetfilters': {
      $get: {
        input: { param: { org_id: string } }
        output: AssetFilter[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { org_id: string } } & { json: AssetFilter }
        output: AssetFilter
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/assetfilters/:assetfilter_id': {
      $delete: {
        input: { param: { org_id: string; assetfilter_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { org_id: string; assetfilter_id: string } }
        output: AssetFilter
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { org_id: string; assetfilter_id: string } } & { json: AssetFilter }
        output: AssetFilter
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/assets': {
      $get: {
        input: { param: { org_id: string } }
        output: Asset[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { org_id: string } } & { json: Asset }
        output: Asset
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/assets/import': {
      $post: {
        input: { param: { org_id: string } } & { json: { mac: string; name: string }[] } & {
          form: { file?: File | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/assets/:asset_id': {
      $delete:
        | {
            input: { param: { org_id: string; asset_id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org_id: string; asset_id: string } }
            output: {}
            outputFormat: string
            status: 201
          }
      $get: {
        input: { param: { org_id: string; asset_id: string } }
        output: Asset
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { org_id: string; asset_id: string } } & { json: Asset }
        output: Asset
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/call/events/count': {
      $get: {
        input: { param: { org_id: string } } & { query: { distinct?: 'type' | 'app' | undefined } }
        output: {
          distinct: string
          end: number
          limit: number
          results: { count: number }[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/call/events/search': {
      $get: {
        input: { param: { org_id: string } } & {
          query: {
            type?: string | undefined
            ap?: string | undefined
            mac?: string | undefined
            app?: string | undefined
          }
        }
        output: {
          end?: number | undefined
          limit?: number | undefined
          results?: EventCall[] | undefined
          start?: number | undefined
          total?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/cert': {
      $get: {
        input: { param: { org_id: string } }
        output: { cert: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/cert/regenerate': {
      $post: {
        input: { param: { org_id: string } }
        output: { cert: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/claim': {
      $post:
        | {
            input: { param: { org_id: string } } & {
              json: { code: string; type: 'all' | 'license' | 'inventory' }
            }
            output: {
              inventory_added: {
                mac: string
                magic: string
                model: string
                serial: string
                type: string
              }[]
              inventory_duplicated: {
                mac: string
                magic: string
                model: string
                serial: string
                type: string
              }[]
              license_added: { end: number; quantity: number; start: number; type: string }[]
              license_duplicated: { end: number; quantity: number; start: number; type: string }[]
              license_error: { order: string; reason: string }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org_id: string } } & {
              json: { code: string; type: 'all' | 'license' | 'inventory' }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/api/v1/orgs/:org_id/clients/count': {
      $get: {
        input: { param: { org_id: string } } & {
          query: {
            distinct?:
              | 'mac'
              | 'hostname'
              | 'device'
              | 'os'
              | 'model'
              | 'ap'
              | 'vlan'
              | 'ssid'
              | 'ip'
              | undefined
            mac?: string | undefined
            hostname?: string | undefined
            device?: string | undefined
            os?: string | undefined
            model?: string | undefined
            ap?: string | undefined
            vlan?: string | undefined
            ssid?: string | undefined
            'ip address'?: string | undefined
            page?: number | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          distinct: string
          end: number
          limit: number
          results: { count: number }[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/clients/events/search': {
      $get: {
        input: { param: { org_id: string } } & {
          query: {
            type?: string | undefined
            reason_code?: number | undefined
            ssid?: string | undefined
            ap?: string | undefined
            proto?: 'b' | 'g' | 'n' | 'ac' | 'ax' | 'a' | undefined
            band?: '24' | '5' | undefined
            wlan_id?: string | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          end: number
          limit: number
          next?: string | undefined
          results: EventsClient[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/clients/search': {
      $get: {
        input: { param: { org_id: string } } & {
          query: {
            site_id?: string | undefined
            mac?: string | undefined
            'ip address'?: string | undefined
            hostname?: string | undefined
            device?: string | undefined
            os?: string | undefined
            model?: string | undefined
            ap?: string | undefined
            psk_id?: string | undefined
            psk_name?: string | undefined
            vlan?: string | undefined
            ssid?: string | undefined
            text?: string | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          end: number
          limit: number
          next?: string | undefined
          results: EventsClient[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/clients/sessions/count': {
      $get: {
        input: { param: { org_id: string } } & {
          query: {
            distinct: 'ssid' | 'ap' | 'ip' | 'vlan' | 'hostname' | 'os' | 'model' | 'device'
            ap?: string | undefined
            band?: '24' | '5' | undefined
            client_family?: string | undefined
            client_manufacture?: string | undefined
            client_model?: string | undefined
            client_os?: string | undefined
            ssid?: string | undefined
            wlan_id?: string | undefined
            page?: number | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          distinct: string
          end: number
          limit: number
          results: { count: number }[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/clients/sessions/search': {
      $get: {
        input: { param: { org_id: string } } & {
          query: {
            ap?: string | undefined
            band?: '24' | '5' | undefined
            client_family?: string | undefined
            client_manufacture?: string | undefined
            client_model?: string | undefined
            client_username?: string | undefined
            client_os?: string | undefined
            ssid?: string | undefined
            wlan_id?: string | undefined
            psk_id?: string | undefined
            psk_name?: string | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          end: number
          limit: number
          next?: string | undefined
          results: {
            ap: string
            band: string
            client_manufacture: string | null
            connect: number
            disconnect: number
            duration: number
            for_site?: boolean | undefined
            mac: string
            org_id: string
            site_id: string
            ssid: string
            tags?: string[] | undefined
            timestamp: number
            wlan_id: string
          }[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/clone': {
      $post: {
        input: { param: { org_id: string } } & { json: { name?: string | undefined } }
        output: Org
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/crl': {
      $get: {
        input: { param: { org_id: string } }
        output: File
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/crl/truncate': {
      $post: {
        input: { param: { org_id: string } } & { json: { days?: number | undefined } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/deviceprofiles': {
      $get: {
        input: { param: { org_id: string } } & {
          query: {
            type?: 'ap' | 'switch' | 'gateway' | undefined
            limit?: number | undefined
            page?: number | undefined
          }
        }
        output: Deviceprofile[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { org_id: string } } & { json: Deviceprofile }
        output: Deviceprofile
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/deviceprofiles/:deviceprofile_id': {
      $delete: {
        input: { param: { org_id: string; deviceprofile_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { org_id: string; deviceprofile_id: string } }
        output: Deviceprofile
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { org_id: string; deviceprofile_id: string } } & { json: Deviceprofile }
        output: Deviceprofile
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/deviceprofiles/:deviceprofile_id/assign': {
      $post: {
        input: { param: { org_id: string; deviceprofile_id: string } } & {
          json: ModelObjectMacsArrayString
        }
        output: { success: string[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/deviceprofiles/:deviceprofile_id/unassign': {
      $post: {
        input: { param: { org_id: string; deviceprofile_id: string } } & {
          json: ModelObjectMacsArrayString
        }
        output: { success: string[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/devices': {
      $get: {
        input: { param: { org_id: string } }
        output: { results: { mac: string; name: string }[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/devices/count': {
      $get: {
        input: { param: { org_id: string } } & {
          query: {
            distinct:
              | 'hostname'
              | 'site_id'
              | 'model'
              | 'mac'
              | 'version'
              | 'ip'
              | 'mxtunnel_status'
              | 'mxedge_id'
              | 'lldp_system_name'
              | 'lldp_system_desc'
              | 'lldp_port_id'
              | 'lldp_mgmt_addr'
            hostname?: string | undefined
            site_id?: string | undefined
            model?: string | undefined
            mac?: string | undefined
            version?: string | undefined
            'ip address'?: string | undefined
            mxtunnel_status?: 'up' | 'down' | undefined
            mxedge_id?: string | undefined
            lldp_system_name?: string | undefined
            lldp_system_desc?: string | undefined
            lldp_port_id?: string | undefined
            lldp_mgmt_addr?: string | undefined
            page?: number | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          distinct: string
          end: number
          limit: number
          results: { count: number }[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/devices/events/count': {
      $get: {
        input: { param: { org_id: string } } & {
          query: {
            distinct: 'org_id' | 'site_id' | 'ap' | 'apfw' | 'model' | 'text' | 'timestamp' | 'type'
            site_id?: string | undefined
            ap?: string | undefined
            apfw?: string | undefined
            model?: string | undefined
            text?: string | undefined
            timestamp?: string | undefined
            type?: string | undefined
            page?: number | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          distinct: string
          end: number
          limit: number
          results: { count: number }[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/devices/events/search': {
      $get: {
        input: { param: { org_id: string } } & {
          query: {
            mac?: string | undefined
            model?: string | undefined
            text?: string | undefined
            timestamp?: string | undefined
            type?: string | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          end: number
          limit: number
          next?: string | undefined
          results: EventsDeviceAp[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/devices/last_config/count': {
      $get: {
        input: { param: { org_id: string } } & {
          query: {
            device_type?: 'ap' | 'switch' | 'gateway' | undefined
            distinct?: 'mac' | 'version' | 'name' | 'site_id' | undefined
            start?: number | undefined
            end?: number | undefined
            limit?: number | undefined
          }
        }
        output: {
          distinct: string
          end: number
          limit: number
          results: { count: number }[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/devices/last_config/search': {
      $get: {
        input: { param: { org_id: string } } & {
          query: {
            device_type?: 'ap' | 'switch' | 'gateway' | undefined
            mac?: string | undefined
            name?: string | undefined
            version?: string | undefined
            start?: number | undefined
            end?: number | undefined
            limit?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          end: number
          limit: number
          next?: string | undefined
          results: {
            channel_24: number
            channel_5: number
            radio_macs?: string[] | undefined
            radios?: { band: string; channel: number }[] | undefined
            secpolicy_violated: boolean
            ssids?: string[] | undefined
            ssids_24?: string[] | undefined
            ssids_5?: string[] | undefined
            timestamp: number
            version: string
            wlans?:
              | {
                  auth: string
                  bands?: string[] | undefined
                  id: string
                  ssid: string
                  vlan_ids?: string[] | undefined
                }[]
              | undefined
          }[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/devices/radio_macs': {
      $get: {
        input: { param: { org_id: string } }
        output: { mac: string; radio_macs: { [x: string]: unknown }[] }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/devices/search': {
      $get: {
        input: { param: { org_id: string } } & {
          query: {
            hostname?: string | undefined
            site_id?: string | undefined
            model?: string | undefined
            mac?: string | undefined
            version?: string | undefined
            power_constrained?: boolean | undefined
            'ip address'?: string | undefined
            mxtunnel_status?: 'up' | 'down' | undefined
            mxedge_id?: string | undefined
            lldp_system_name?: string | undefined
            lldp_system_desc?: string | undefined
            lldp_port_id?: string | undefined
            lldp_mgmt_addr?: string | undefined
            band_24_bandwith?: number | undefined
            band_5_bandwith?: number | undefined
            band_6_bandwith?: number | undefined
            band_24_channel?: number | undefined
            band_5_channel?: number | undefined
            band_6_channel?: number | undefined
            eth0_port_speed?: number | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          end: number
          limit: number
          next?: string | undefined
          results: (DeviceSearchAp | DeviceSearchSwitchGateway)[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/devices/upgrade': {
      $get: {
        input: { param: { org_id: string } }
        output: { id: string; upgrades: { site_id: string; upgrade_id: string }[] }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { org_id: string } } & { json: DeviceUpgrade }
        output: { id?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/devices/upgrade/:upgrade_id': {
      $get: {
        input: { param: { org_id: string; upgrade_id: string } }
        output: OrgDeviceUpgradeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/evpn_topologies': {
      $get: {
        input: { param: { org_id: string } }
        output: JunosEvpnTopology
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { org_id: string } } & { json: JunosEvpnTopology }
        output: JunosEvpnTopology
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/evpn_topologies/:evpn_topology_id': {
      $delete: {
        input: { param: { org_id: string; evpn_topology_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { org_id: string; evpn_topology_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { org_id: string; evpn_topology_id: string } } & { json: JunosEvpnTopology }
        output: JunosEvpnTopology
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/gatewaytemplates': {
      $get: {
        input: { param: { org_id: string } }
        output: Gatewaytemplate[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { org_id: string } } & { json: Gatewaytemplate }
        output: Gatewaytemplate
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/gatewaytemplates/:gatewaytemplate_id': {
      $delete: {
        input: { param: { org_id: string; gatewaytemplate_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { org_id: string; gatewaytemplate_id: string } }
        output: Gatewaytemplate
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { org_id: string; gatewaytemplate_id: string } } & { json: Gatewaytemplate }
        output: Gatewaytemplate
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/guests': {
      $get: {
        input: { param: { org_id: string } }
        output: Guest[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/guests/count': {
      $get: {
        input: { param: { org_id: string } } & {
          query: {
            distinct?: 'auth_method' | 'ssid' | 'company' | undefined
            page?: number | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          distinct: string
          end: number
          limit: number
          results: { count: number }[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/guests/search': {
      $get: {
        input: { param: { org_id: string } } & {
          query: {
            wlan_id?: string | undefined
            auth_method?: string | undefined
            ssid?: string | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          end: number
          limit: number
          next: string
          results: {
            ap: string
            auth_method: string
            authorized_expiring_time: number
            authorized_time: number
            company: string
            email: string
            name: string
            ssid: string
            timestamp: number
          }[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/guests/:guest_mac': {
      $delete: {
        input: { param: { org_id: string; guest_mac: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { org_id: string; guest_mac: string } }
        output: Guest
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { org_id: string; guest_mac: string } } & { json: Guest }
        output: Guest
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/insights/sites-sle': {
      $get: {
        input: { param: { org_id: string } } & {
          query: {
            sle?: 'wan' | 'wired' | 'wifi' | undefined
            start?: number | undefined
            end?: number | undefined
            limit?: number | undefined
            page?: number | undefined
            duration?: string | undefined
            interval?: string | undefined
          }
        }
        output: OrgSiteSleWifiResponse | OrgSiteSleWiredResponse | OrgSiteSleWanResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/insights/:metric': {
      $get: {
        input: { param: { org_id: string; metric: string } } & {
          query: {
            sle?: string | undefined
            duration?: string | undefined
            interval?: string | undefined
            start?: number | undefined
            end?: number | undefined
          }
        }
        output: {
          end: number
          interval: number
          limit: number
          results: { [x: string]: { [x: string]: unknown } }[]
          start: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/inventory': {
      $get: {
        input: { param: { org_id: string } } & {
          query: {
            serial?: string | undefined
            model?: string | undefined
            type?: 'ap' | 'switch' | 'gateway' | 'mxedge' | undefined
            mac?: string | undefined
            site_id?: string | undefined
            vc_mac?: string | undefined
            vc?: string | undefined
            unassigned?: boolean | undefined
            limit?: number | undefined
            page?: number | undefined
          }
        }
        output: Inventory[]
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { org_id: string } } & { json: string[] }
            output: ResponseInventory
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org_id: string } } & { json: string[] }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
      $put: {
        input: { param: { org_id: string } } & {
          json: {
            disable_auto_config?: boolean | undefined
            macs?: string[] | undefined
            managed?: boolean | undefined
            no_reassign?: boolean | undefined
            op: 'assign' | 'unassign' | 'delete' | 'manage' | 'unmanage'
            serials?: string[] | undefined
            site_id?: string | undefined
          }
        }
        output: { error: string[]; op: 'delete' | 'assign'; success: string[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/inventory/reevaluate_auto_assignment': {
      $post: {
        input: { param: { org_id: string } } & { json: { [x: string]: unknown } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/inventory/replace': {
      $post: {
        input: { param: { org_id: string } } & {
          json: {
            discard?: string[] | undefined
            inventory_mac: string
            mac: string
            site_id: string
          }
        }
        output: { error: string[]; op: 'delete' | 'assign'; success: string[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/invites': {
      $post: {
        input: { param: { org_id: string } } & { json: Admin }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/invites/:invite_id': {
      $delete: {
        input: { param: { org_id: string; invite_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { org_id: string; invite_id: string } } & { json: Admin }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/jsi/devices': {
      $get: {
        input: { param: { org_id: string } } & {
          query: {
            limit?: number | undefined
            page?: number | undefined
            model?: string | undefined
            serial?: string | undefined
            mac?: string | undefined
          }
        }
        output: {
          ext_ip?: string | undefined
          last_seen?: number | undefined
          mac?: string | undefined
          model?: string | undefined
          serial?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/jsi/devices/outbound_ssh_cmd': {
      $get: {
        input: { param: { org_id: string } }
        output: { cmd?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/jsi/devices/:device_mac/shell': {
      $post: {
        input: { param: { org_id: string; device_mac: string } }
        output: { session?: string | undefined; url?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/jsi/devices/:device_mac/upgrade': {
      $post: {
        input: { param: { org_id: string; device_mac: string } } & {
          json: { version?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/jsi/inventory': {
      $get:
        | {
            input: { param: { org_id: string } } & {
              query: {
                limit?: number | undefined
                page?: number | undefined
                model?: string | undefined
                serial?: string | undefined
              }
            }
            output: {
              contract_end_time?: number | undefined
              contract_id?: string | undefined
              contract_sku?: string | undefined
              contract_start_time?: number | undefined
              customer_po?: string | undefined
              distributor?: string | undefined
              eol_time?: number | undefined
              eos_time?: number | undefined
              installed_address?: string | undefined
              model?: string | undefined
              order_id?: string | undefined
              reseller?: string | undefined
              serial?: string | undefined
              sku?: string | undefined
              type?: 'ap' | 'switch' | 'gateway' | undefined
              warranty_end_time?: number | undefined
              warranty_start_time?: number | undefined
              warranty_type?: string | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org_id: string } } & {
              query: {
                limit?: number | undefined
                page?: number | undefined
                model?: string | undefined
                serial?: string | undefined
              }
            }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/v1/orgs/:org_id/junos/register_cmd': {
      $get: {
        input: { param: { org_id: string } }
        output: { registration_code: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/licenses': {
      $get: {
        input: { param: { org_id: string } }
        output: License
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { org_id: string } } & {
          json: {
            amendment_id?: string | undefined
            dst_org_id?: string | undefined
            notes?: string | undefined
            op: 'amend' | 'unamend' | 'delete' | 'annotate'
            quantity?: number | undefined
            subscription_id?: string | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/licenses/usages': {
      $get: {
        input: { param: { org_id: string } }
        output: {
          for_site?: boolean | undefined
          fully_loaded?: { [x: string]: number } | undefined
          num_devices: number
          site_id: string
          usages: { [x: string]: number }
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/logs': {
      $get: {
        input: { param: { org_id: string } } & {
          query: {
            site_id?: string | undefined
            admin_name?: string | undefined
            message?: string | undefined
            start?: number | undefined
            end?: number | undefined
            limit?: number | undefined
            page?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          end: number
          limit: number
          next?: string | undefined
          results: {
            admin_id: string | null
            admin_name: string | null
            after?: { [x: string]: unknown } | undefined
            before?: { [x: string]: unknown } | undefined
            for_site?: boolean | undefined
            id?: string | undefined
            message: string
            org_id: string
            site_id: string
            timestamp: number
          }[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/logs/count': {
      $get: {
        input: { param: { org_id: string } } & {
          query: {
            distinct: 'admin_id' | 'admin_name' | 'message' | 'site_id'
            admin_id?: string | undefined
            admin_name?: string | undefined
            site_id?: string | undefined
            message?: string | undefined
            page?: number | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          distinct: string
          end: number
          limit: number
          results: { count: number }[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/maps/import': {
      $post: {
        input: { param: { org_id: string } } & {
          form: {
            auto_deviceprofile_assignment?: boolean | undefined
            csv?: File | undefined
            file?: File | undefined
            json?:
              | {
                  import_all_floorpans?: boolean | undefined
                  import_height?: boolean | undefined
                  import_orientation?: boolean | undefined
                  site_id: string
                  vendor_name: 'ekahau' | 'ibwave'
                }
              | undefined
          }
        }
        output: {
          aps: {
            action?:
              | 'placed'
              | 'assigned-placed'
              | 'named-placed'
              | 'assigned-named-placed'
              | 'ignored'
              | undefined
            floorplan_id?: string | undefined
            height?: number | undefined
            mac: string
            map_id?: string | undefined
            orientation?: number | undefined
            reason?: string | undefined
          }[]
          floorplans?:
            | {
                action?: 'imported' | 'ignored' | undefined
                id?: string | undefined
                map_id?: string | undefined
                name?: string | undefined
                reason?: string | undefined
              }[]
            | undefined
          site_id: string
          summary?:
            | {
                num_ap_assigned: number
                num_inv_assigned?: number | undefined
                num_map_assigned?: number | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/mxclusters': {
      $get: {
        input: { param: { org_id: string } }
        output: Mxcluster[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { org_id: string } } & { json: Mxcluster }
        output: Mxcluster
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/mxclusters/:mxcluster_id': {
      $delete: {
        input: { param: { org_id: string; mxcluster_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { org_id: string; mxcluster_id: string } }
        output: Mxcluster
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { org_id: string; mxcluster_id: string } } & { json: Mxcluster }
        output: Mxcluster
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/mxedges': {
      $get: {
        input: { param: { org_id: string } } & {
          query: {
            for_sites?: 'any' | 'true' | 'false' | undefined
            limit?: number | undefined
            page?: number | undefined
          }
        }
        output: Mxedge[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { org_id: string } } & { json: Mxedge }
        output: Mxedge
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/mxedges/assign': {
      $post: {
        input: { param: { org_id: string } } & { json: { mxedge_ids: string[]; site_id: string } }
        output: { success: string[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/mxedges/claim': {
      $post: {
        input: { param: { org_id: string } } & { json: { code: string } }
        output: { id: string; magic: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/mxedges/unassign': {
      $post: {
        input: { param: { org_id: string } } & { json: { mxedge_ids: string[] } }
        output: { success: string[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/mxedges/upgrade': {
      $get: {
        input: { param: { org_id: string } }
        output: MxedgeUpgradeResponse[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { org_id: string } } & {
          json: {
            allow_downgrades?:
              | {
                  mxagent?: boolean | undefined
                  mxdas?: boolean | undefined
                  mxocproxy?: boolean | undefined
                  radsecproxy?: boolean | undefined
                  tunterm?: boolean | undefined
                }
              | undefined
            channel?: 'stable' | 'beta' | 'alpha' | undefined
            distro?: string | undefined
            mxedge_ids: string[]
            strategy?: 'big_bang' | 'serial' | undefined
            versions?:
              | {
                  mxagent: string
                  mxdas?: string | undefined
                  mxocproxy?: string | undefined
                  radsecproxy?: string | undefined
                  tunterm: string
                }
              | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/mxedges/upgrade/:upgrade_id': {
      $get: {
        input: { param: { org_id: string; upgrade_id: string } }
        output: MxedgeUpgradeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/mxedges/version': {
      $get: {
        input: { param: { org_id: string } } & {
          query: { channel?: 'stable' | 'beta' | 'alpha' | undefined }
        }
        output: { default?: boolean | undefined; package: string; version: string }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/mxedges/:mxedge_id': {
      $delete: {
        input: { param: { org_id: string; mxedge_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { org_id: string; mxedge_id: string } }
        output: Mxedge
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { org_id: string; mxedge_id: string } } & { json: Mxedge }
        output: Mxedge
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/mxedges/:mxedge_id/restart': {
      $post: {
        input: { param: { org_id: string; mxedge_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/mxedges/:mxedge_id/services/tunterm/bounce_port': {
      $post: {
        input: { param: { org_id: string; mxedge_id: string } } & {
          json: { hold_time?: number | undefined; ports: string[] }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/mxedges/:mxedge_id/services/:name/:action': {
      $post: {
        input: {
          param: {
            org_id: string
            mxedge_id: string
            name: 'tunterm' | 'radsecproxy' | 'mxagent' | 'mxocproxy' | 'mxdas'
            action: 'restart' | 'start' | 'stop'
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/mxedges/:mxedge_id/support': {
      $post: {
        input: { param: { org_id: string; mxedge_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/mxedges/:mxedge_id/unregister': {
      $post: {
        input: { param: { org_id: string; mxedge_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/mxedges/:mxedge_id/upgrade': {
      $post: {
        input: { param: { org_id: string; mxedge_id: string } } & {
          json: {
            channel?: 'stable' | 'beta' | 'alpha' | undefined
            mxedge_ids?: string[] | undefined
            versions?: { mxagent?: string | undefined; tunterm?: string | undefined } | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/mxtunnels': {
      $get: {
        input: { param: { org_id: string } }
        output: Mxtunnel[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { org_id: string } } & { json: Mxtunnel }
        output: Mxtunnel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/mxtunnels/:mxtunnel_id': {
      $delete: {
        input: { param: { org_id: string; mxtunnel_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { org_id: string; mxtunnel_id: string } }
        output: Mxtunnel
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { org_id: string; mxtunnel_id: string } } & { json: Mxtunnel }
        output: Mxtunnel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/nacrules': {
      $get: {
        input: { param: { org_id: string } }
        output: NacRule[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { org_id: string } } & { json: NacRule }
        output: NacRule
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/nacrules/:nacrule_id': {
      $delete: {
        input: { param: { org_id: string; nacrule_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { org_id: string; nacrule_id: string } }
        output: NacRule
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { org_id: string; nacrule_id: string } } & { json: NacRule }
        output: NacRule
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/nactags': {
      $get: {
        input: { param: { org_id: string } }
        output: NacTag[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { org_id: string } } & { json: NacTag }
        output: NacTag
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/nactags/:nactag_id': {
      $delete: {
        input: { param: { org_id: string; nactag_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { org_id: string; nactag_id: string } }
        output: NacTag
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { org_id: string; nactag_id: string } } & { json: NacTag }
        output: NacTag
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/networks': {
      $get: {
        input: { param: { org_id: string } }
        output: Network[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { org_id: string } } & { json: Network }
        output: Network
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/networks/:network_id': {
      $delete: {
        input: { param: { org_id: string; network_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { org_id: string; network_id: string } }
        output: Network
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { org_id: string; network_id: string } } & { json: Network }
        output: Network
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/networktemplates': {
      $get: {
        input: { param: { org_id: string } }
        output: Networktemplate[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { org_id: string } } & { json: Networktemplate }
        output: Networktemplate
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/networktemplates/:networktemplate_id': {
      $delete: {
        input: { param: { org_id: string; networktemplate_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { org_id: string; networktemplate_id: string } }
        output: Networktemplate
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { org_id: string; networktemplate_id: string } } & { json: Networktemplate }
        output: Networktemplate
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/ocdevices/outbound_ssh_cmd': {
      $get: {
        input: { param: { org_id: string } } & { query: { site_id?: string | undefined } }
        output: { cmd: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/otherdevices': {
      $get: {
        input: { param: { org_id: string } } & {
          query: {
            vendor?: string | undefined
            mac?: string | undefined
            serial?: string | undefined
            model?: string | undefined
            name?: string | undefined
            page?: number | undefined
            limit?: number | undefined
          }
        }
        output: DeviceOther[]
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { org_id: string } } & {
          json: {
            device_mac?: string | undefined
            macs?: string[] | undefined
            site_id?: string | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/otherdevices/:device_mac': {
      $delete: {
        input: { param: { org_id: string; device_mac: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { org_id: string; device_mac: string } }
        output: DeviceOther
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { org_id: string; device_mac: string } } & {
          json: { device_mac?: string | undefined; site_id?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/pma/dashboards': {
      $get: {
        input: { param: { org_id: string } }
        output: { name?: string | undefined; url?: string | undefined }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/pskportals': {
      $get: {
        input: { param: { org_id: string } }
        output: PskPortal[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { org_id: string } } & { json: PskPortal }
        output: PskPortal
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/pskportals/:pskportal_id': {
      $delete: {
        input: { param: { org_id: string; pskportal_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { org_id: string; pskportal_id: string } }
        output: PskPortal
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { org_id: string; pskportal_id: string } } & { json: PskPortal }
        output: PskPortal
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/psks': {
      $get: {
        input: { param: { org_id: string } } & {
          query: {
            name?: string | undefined
            ssid?: string | undefined
            role?: string | undefined
            page?: number | undefined
            limit?: number | undefined
          }
        }
        output: Psk[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { org_id: string } } & { query: { upsert?: boolean | undefined } } & {
          json: Psk
        }
        output: Psk
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { org_id: string } } & { json: Psk[] }
        output: Psk[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/psks/import': {
      $post: {
        input: { param: { org_id: string } } & { json: Psk[] } & {
          form: { file?: File | undefined }
        }
        output: Psk[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/psks/:psk_id': {
      $delete: {
        input: { param: { org_id: string; psk_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { org_id: string; psk_id: string } }
        output: Psk
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { org_id: string; psk_id: string } } & { json: Psk }
        output: Psk
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/psks/:psk_id/delete_old_passphrase': {
      $post: {
        input: { param: { org_id: string; psk_id: string } } & { json: { [x: string]: unknown } }
        output: Psk
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/rftemplates': {
      $get: {
        input: { param: { org_id: string } }
        output: Rftemplate[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { org_id: string } } & { json: Rftemplate }
        output: Rftemplate
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/rftemplates/:rftemplate_id': {
      $delete: {
        input: { param: { org_id: string; rftemplate_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { org_id: string; rftemplate_id: string } }
        output: Rftemplate
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { org_id: string; rftemplate_id: string } } & { json: Rftemplate }
        output: Rftemplate
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/sdkclients/:sdkclient_id': {
      $put: {
        input: { param: { org_id: string; sdkclient_id: string } } & {
          json: { name?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/sdkinvites': {
      $get: {
        input: { param: { org_id: string } }
        output: Sdkinvite[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { org_id: string } } & { json: Sdkinvite }
        output: Sdkinvite
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/sdkinvites/:sdkinvite_id': {
      $delete: {
        input: { param: { org_id: string; sdkinvite_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { org_id: string; sdkinvite_id: string } }
        output: Sdkinvite
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { org_id: string; sdkinvite_id: string } } & { json: Sdkinvite }
        output: Sdkinvite
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/sdkinvites/:sdkinvite_id/email': {
      $post: {
        input: { param: { org_id: string; sdkinvite_id: string } } & { json: ModelObjectEmail }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/sdkinvites/:sdkinvite_id/qrcode': {
      $get: {
        input: { param: { org_id: string; sdkinvite_id: string } }
        output: File
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/sdkinvites/:sdkinvite_id/sms': {
      $post: {
        input: { param: { org_id: string; sdkinvite_id: string } } & { json: { number: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/sdktemplates': {
      $get: {
        input: { param: { org_id: string } }
        output: Sdktemplate[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { org_id: string } } & { json: Sdktemplate }
        output: Sdktemplate
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/sdktemplates/:sdktemplate_id': {
      $delete: {
        input: { param: { org_id: string; sdktemplate_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { org_id: string; sdktemplate_id: string } }
        output: Sdktemplate
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { org_id: string; sdktemplate_id: string } } & { json: Sdktemplate }
        output: Sdktemplate
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/secpolicies': {
      $get: {
        input: { param: { org_id: string } }
        output: Secpolicy[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { org_id: string } } & { json: Secpolicy }
        output: Secpolicy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/secpolicies/:secpolicy_id': {
      $delete: {
        input: { param: { org_id: string; secpolicy_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { org_id: string; secpolicy_id: string } }
        output: Secpolicy
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { org_id: string; secpolicy_id: string } } & { json: Secpolicy }
        output: Secpolicy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/servicepolicies': {
      $get: {
        input: { param: { org_id: string } }
        output: ServicePolicy[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { org_id: string } } & { json: ServicePolicy }
        output: ServicePolicy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/servicepolicies/:servicepolicy_id': {
      $delete: {
        input: { param: { org_id: string; servicepolicy_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { org_id: string; servicepolicy_id: string } }
        output: ServicePolicy
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { org_id: string; servicepolicy_id: string } } & { json: ServicePolicy }
        output: ServicePolicy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/services': {
      $get: {
        input: { param: { org_id: string } }
        output: Service[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { org_id: string } } & { json: Service }
        output: Service
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/services/:service_id': {
      $delete: {
        input: { param: { org_id: string; service_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { org_id: string; service_id: string } }
        output: Service
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { org_id: string; service_id: string } } & { json: Service }
        output: Service
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/setting': {
      $get: {
        input: { param: { org_id: string } }
        output: OrgSetting
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { org_id: string } } & { json: OrgSetting }
        output: OrgSetting
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/setting/blacklist': {
      $delete: {
        input: { param: { org_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { org_id: string } } & { json: ModelObjectMacsArrayString }
        output: { macs?: string[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/setting/cradlepoint/setup': {
      $post: {
        input: { param: { org_id: string } } & {
          json: {
            cp_api_id?: string | undefined
            cp_api_key?: string | undefined
            ecm_api_id?: string | undefined
            ecm_api_key?: string | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/setting/cradlepoint/sync': {
      $post: {
        input: { param: { org_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/setting/juniper/link_accounts': {
      $post:
        | {
            input: { param: { org_id: string } } & {
              json: { password?: string | undefined; username?: string | undefined }
            }
            output: {
              account?: { linked_by?: string | undefined; name?: string | undefined } | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { org_id: string } } & {
              json: { password?: string | undefined; username?: string | undefined }
            }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/v1/orgs/:org_id/setting/juniper/linked_account': {
      $delete: {
        input: { param: { org_id: string } } & {
          json: { account_name: string; linked_by?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/setting/pcap_bucket/setup': {
      $post: {
        input: { param: { org_id: string } } & { json: { bucket: string } }
        output: { bucket?: string | undefined; detail?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/setting/pcap_bucket/verify': {
      $post: {
        input: { param: { org_id: string } } & { json: { bucket: string; verify_token: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/setting/zscaler/setup': {
      $post: {
        input: { param: { org_id: string } } & {
          json: {
            cloud_name?: string | undefined
            partner_key?: string | undefined
            password?: string | undefined
            username?: string | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/setting/:app_name/link': {
      $delete:
        | {
            input: { param: { org_id: string; app_name: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { org_id: string; app_name: string } }
            output: {}
            outputFormat: string
            status: 400
          }
      $get: {
        input: { param: { org_id: string; app_name: string } } & {
          query: { forward?: string | undefined }
        }
        output: OauthAppStatus
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/setting/:app_name/link_accounts': {
      $delete:
        | {
            input: { param: { org_id: string; app_name: string } } & {
              json: { account_id: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { org_id: string; app_name: string } } & {
              json: { account_id: string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
      $get: {
        input: { param: { org_id: string; app_name: string } } & {
          query: { forward?: string | undefined }
        }
        output: OauthAppStatus
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/sitegroups': {
      $get: {
        input: { param: { org_id: string } }
        output: Sitegroup[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { org_id: string } } & { json: Sitegroup }
        output: Sitegroup
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/sitegroups/:sitegroup_id': {
      $delete: {
        input: { param: { org_id: string; sitegroup_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { org_id: string; sitegroup_id: string } }
        output: Sitegroup
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { org_id: string; sitegroup_id: string } } & {
          json: { id: string; name: string }
        }
        output: Sitegroup
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/sites': {
      $get: {
        input: { param: { org_id: string } } & {
          query: { limit?: number | undefined; page?: number | undefined }
        }
        output: Site[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { org_id: string } } & { json: Site }
        output: Site
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/sites/count': {
      $get: {
        input: { param: { org_id: string } } & {
          query: {
            distinct?:
              | 'analytic_enabled'
              | 'app_waking'
              | 'asset_enabled'
              | 'auto_upgrade_enabled'
              | 'auto_upgrade_version'
              | 'country_code'
              | 'honeypot_enabled'
              | 'id'
              | 'locate_unconnected'
              | 'mesh_enabled'
              | 'name'
              | 'rogue_enabled'
              | 'remote_syslog_enabled'
              | 'rtsa_enabled'
              | 'vna_enabled'
              | 'wifi_enabled'
              | undefined
            page?: number | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          distinct: string
          end: number
          limit: number
          results: { count: number }[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/sites/search': {
      $get: {
        input: { param: { org_id: string } } & {
          query: {
            analytic_enabled?: boolean | undefined
            app_waking?: boolean | undefined
            asset_enabled?: boolean | undefined
            auto_upgrade_enabled?: boolean | undefined
            auto_upgrade_version?: string | undefined
            country_code?: string | undefined
            honeypot_enabled?: boolean | undefined
            id?: string | undefined
            locate_unconnected?: boolean | undefined
            mesh_enabled?: boolean | undefined
            name?: string | undefined
            rogue_enabled?: boolean | undefined
            remote_syslog_enabled?: boolean | undefined
            rtsa_enabled?: boolean | undefined
            vna_enabled?: boolean | undefined
            wifi_enabled?: boolean | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          end: number
          limit: number
          next?: string | undefined
          results: {
            auto_upgrade_enabled: boolean
            auto_upgrade_version: string
            country_code: string | null
            honeypot_enabled: boolean
            id: string
            name: string
            org_id: string
            site_id: string
            timestamp: number
            timezone: string
            vna_enabled: boolean
            wifi_enabled: boolean
          }[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/sites/:site_name/maps/import': {
      $post: {
        input: { param: { org_id: string; site_name: string } } & {
          form: { csl?: File | undefined; file?: File | undefined }
        }
        output: {
          aps: {
            action:
              | 'placed'
              | 'assigned-placed'
              | 'named-placed'
              | 'assigned-named-placed'
              | 'ignored'
            floorplan_id: string
            height?: number | undefined
            mac: string
            map_id: string
            orientation: number
            reason?: string | undefined
          }[]
          floorplans: {
            action: string
            id: string
            map_id: string
            name: string
            reason?: string | undefined
          }[]
          for_site?: boolean | undefined
          site_id: string
          summary: { num_ap_assigned: number; num_inv_assigned: number; num_map_assigned: number }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/sitetemplates': {
      $get: {
        input: { param: { org_id: string } }
        output: Sitetemplate[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { org_id: string } } & { json: Sitetemplate }
        output: Sitetemplate
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/sitetemplates/:sitetemplate_id': {
      $delete: {
        input: { param: { org_id: string; sitetemplate_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { org_id: string; sitetemplate_id: string } }
        output: Sitetemplate
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { org_id: string; sitetemplate_id: string } } & { json: Sitetemplate }
        output: Sitetemplate
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/ssoroles': {
      $get: {
        input: { param: { org_id: string } }
        output: Ssorole[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { org_id: string } } & { json: Ssorole }
        output: Ssorole
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/ssoroles/:ssorole_id': {
      $delete: {
        input: { param: { org_id: string; ssorole_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { org_id: string; ssorole_id: string } }
        output: Ssorole
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { org_id: string; ssorole_id: string } } & { json: Ssorole }
        output: Ssorole
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/ssos': {
      $get: {
        input: { param: { org_id: string } }
        output: Sso[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { org_id: string } } & { json: Sso }
        output: Sso
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/ssos/:sso_id': {
      $delete: {
        input: { param: { org_id: string; sso_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { org_id: string; sso_id: string } }
        output: Sso
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { org_id: string; sso_id: string } } & { json: Sso }
        output: Sso
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/ssos/:sso_id/failures': {
      $get: {
        input: { param: { org_id: string; sso_id: string } } & {
          query: {
            page?: number | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: { results: { detail: string; saml_assertion_xml: string; timestamp: number }[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/ssos/:sso_id/metadata': {
      $get: {
        input: { param: { org_id: string; sso_id: string } }
        output: { acs_url: string; entity_id: string; logout_url: string; metadata_xml: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/ssos/:sso_id/metadata.xml': {
      $get: {
        input: { param: { org_id: string; sso_id: string } }
        output: File
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/ssr/upgrade': {
      $get: {
        input: { param: { org_id: string } }
        output: SsrUpgradeResponse[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { org_id: string } } & {
          json: {
            channel?: 'stable' | 'beta' | 'alpha' | undefined
            device_ids: string[]
            reboot_at?: number | undefined
            start_time?: number | undefined
            strategy?: 'big_bang' | 'serial' | undefined
            version?: string | undefined
          }
        }
        output: SsrUpgradeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/ssr/upgrade/:upgrade_id/cancel': {
      $post: {
        input: { param: { org_id: string; upgrade_id: string } } & {
          json: { [x: string]: unknown }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/ssr/versions': {
      $get: {
        input: { param: { org_id: string } } & { query: { channel?: string | undefined } }
        output: {
          _version: string
          default?: boolean | undefined
          package: string
          version: string
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/stats': {
      $get: {
        input: { param: { org_id: string } } & {
          query: {
            page?: number | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: StatsOrg
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/stats/assets': {
      $get: {
        input: { param: { org_id: string } } & {
          query: {
            page?: number | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: StatsAsset[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/stats/assets/count': {
      $get: {
        input: { param: { org_id: string } } & {
          query: {
            distinct?:
              | 'site_id'
              | 'mac'
              | 'map_id'
              | 'ibeacon_uuid'
              | 'ibeacon_major'
              | 'ibeacon_minor'
              | undefined
          }
        }
        output: {
          distinct: string
          end: number
          limit: number
          results: { count: number }[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/stats/assets/search': {
      $get: {
        input: { param: { org_id: string } } & {
          query: {
            site_id?: string | undefined
            mac?: string | undefined
            device_name?: string | undefined
            name?: string | undefined
            map_id?: string | undefined
            ibeacon_uuid?: string | undefined
            ibeacon_major?: string | undefined
            ibeacon_minor?: string | undefined
            eddystone_uid_namespace?: string | undefined
            eddystone_uid_instance?: string | undefined
            eddystone_url?: string | undefined
            ap_mac?: string | undefined
            beam?: number | undefined
            rssi?: number | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          end: number
          limit: number
          next?: string | undefined
          results: StatsAsset[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/stats/bgp_peers/count': {
      $get: {
        input: { param: { org_id: string } }
        output: {
          distinct?: string | undefined
          end?: number | undefined
          limit?: number | undefined
          results?: { count?: number | undefined; mac?: string | undefined }[] | undefined
          start?: number | undefined
          total?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/stats/bgp_peers/search': {
      $get: {
        input: { param: { org_id: string } }
        output: {
          end?: number | undefined
          limit?: number | undefined
          results?: StatsBgp[] | undefined
          start?: number | undefined
          total?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/stats/devices': {
      $get: {
        input: { param: { org_id: string } } & {
          query: {
            page?: number | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
            type?: 'ap' | 'switch' | 'gateways' | 'all' | undefined
            status?: 'all' | 'connected' | 'disconnected' | undefined
            site_id?: string | undefined
            mac?: string | undefined
            evpntopo_id?: string | undefined
            evpn_unused?: string | undefined
          }
        }
        output: (StatsDeviceAp | StatsDeviceSwitch | StatsDeviceGateway)[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/stats/mxedges': {
      $get: {
        input: { param: { org_id: string } } & {
          query: {
            page?: number | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
            for_site?: 'true' | 'false' | 'any' | undefined
          }
        }
        output: StatsMxedge[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/stats/mxedges/:mxedge_id': {
      $get: {
        input: { param: { org_id: string; mxedge_id: string } }
        output: StatsMxedge
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/stats/otherdevices/:device_mac': {
      $get: {
        input: { param: { org_id: string; device_mac: string } }
        output: StatsDeviceOther
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/stats/ports/search': {
      $get: {
        input: { param: { org_id: string } } & {
          query: {
            full_duplex?: boolean | undefined
            mac?: string | undefined
            neighbor_mac?: string | undefined
            neighbor_port_desc?: string | undefined
            neighbor_system_name?: string | undefined
            poe_disabled?: boolean | undefined
            poe_mode?: string | undefined
            poe_on?: boolean | undefined
            port_id?: string | undefined
            port_mac?: string | undefined
            power_draw?: number | undefined
            tx_pkts?: number | undefined
            rx_pkts?: number | undefined
            rx_bytes?: number | undefined
            tx_bps?: number | undefined
            rx_bps?: number | undefined
            tx_errors?: number | undefined
            rx_errors?: number | undefined
            tx_mcast_pkts?: number | undefined
            tx_bcast_pkts?: number | undefined
            rx_mcast_pkts?: number | undefined
            rx_bcast_pkts?: number | undefined
            speed?: number | undefined
            mac_limit?: number | undefined
            mac_count?: number | undefined
            up?: boolean | undefined
            stp_state?:
              | 'forwarding'
              | 'blocking'
              | 'learning'
              | 'listening'
              | 'disabled'
              | undefined
            stp_role?: 'designated' | 'backup' | 'alternate' | 'root' | 'root-prevented' | undefined
            auth_state?: 'init' | 'authenticated' | 'authenticating' | 'held' | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          end: number
          limit: number
          next?: string | undefined
          results: StatsSwitchPort[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/stats/switch_ports/count': {
      $get: {
        input: { param: { org_id: string } } & {
          query: {
            distinct?:
              | 'port_id'
              | 'port_mac'
              | 'full_duplex'
              | 'mac'
              | 'neighbor_mac'
              | 'neighbor_port_desc'
              | 'neighbor_system_name'
              | 'poe_disabled'
              | 'poe_mode'
              | 'poe_on'
              | 'speed'
              | 'up'
              | undefined
            full_duplex?: boolean | undefined
            mac?: string | undefined
            neighbor_mac?: string | undefined
            neighbor_port_desc?: string | undefined
            neighbor_system_name?: string | undefined
            poe_disabled?: boolean | undefined
            poe_mode?: string | undefined
            poe_on?: boolean | undefined
            port_id?: string | undefined
            port_mac?: string | undefined
            power_draw?: number | undefined
            tx_pkts?: number | undefined
            rx_pkts?: number | undefined
            rx_bytes?: number | undefined
            tx_bps?: number | undefined
            rx_bps?: number | undefined
            tx_mcast_pkts?: number | undefined
            tx_bcast_pkts?: number | undefined
            rx_mcast_pkts?: number | undefined
            rx_bcast_pkts?: number | undefined
            speed?: number | undefined
            stp_state?:
              | 'forwarding'
              | 'blocking'
              | 'learning'
              | 'listening'
              | 'disabled'
              | undefined
            stp_role?: 'designated' | 'backup' | 'alternate' | 'root' | 'root-prevented' | undefined
            auth_state?: 'init' | 'authenticated' | 'authenticating' | 'held' | undefined
            up?: boolean | undefined
            page?: number | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          distinct: string
          end: number
          limit: number
          results: { count: number; mac: string }[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/stats/tunnels/count': {
      $get: {
        input: { param: { org_id: string } } & {
          query: { distinct?: 'auth_algo' | undefined; type?: 'wxtunnel' | 'wan' | undefined }
        }
        output: {
          distinct: string
          end: number
          limit: number
          results: { count: number }[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/stats/tunnels/search': {
      $get: {
        input: { param: { org_id: string } } & {
          query: {
            mxcluster_id?: string | undefined
            site_id?: string | undefined
            wxtunnel_id?: string | undefined
            ap?: string | undefined
            mac?: string | undefined
            node?: string | undefined
            peer_ip?: string | undefined
            peer_host?: string | undefined
            ip?: string | undefined
            tunnel_name?: string | undefined
            protocol?: string | undefined
            auth_algo?: string | undefined
            encrypt_algo?: string | undefined
            ike_version?: string | undefined
            up?: string | undefined
            type?: 'wxtunnel' | 'wan' | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          end: number
          limit: number
          next?: string | undefined
          results: (StatsMxtunnel | StatsWantunnel)[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/stats/vpn_peers/count': {
      $get: {
        input: { param: { org_id: string } } & {
          query: {
            distinct?: string | undefined
            page?: number | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          distinct: string
          end: number
          limit: number
          results: { count: number }[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/stats/vpn_peers/search': {
      $get: {
        input: { param: { org_id: string } } & {
          query: {
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
            limit?: number | undefined
          }
        }
        output: {
          end: number
          limit: number
          next?: string | undefined
          results: {
            is_active?: boolean | undefined
            last_seen?: number | undefined
            latency?: number | undefined
            mac?: string | undefined
            mos?: number | undefined
            mtu?: number | undefined
            org_id?: string | undefined
            peer_mac?: string | undefined
            peer_port_id?: string | undefined
            peer_router_name?: string | undefined
            peer_site_id?: string | undefined
            port_id?: string | undefined
            router_name?: string | undefined
            site_id?: string | undefined
            type?: string | undefined
            up?: boolean | undefined
            uptime?: number | undefined
          }[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/subscriptions': {
      $delete: {
        input: { param: { org_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { org_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/templates': {
      $get: {
        input: { param: { org_id: string } }
        output: Template[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { org_id: string } } & { json: Template }
        output: Template
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/templates/:template_id': {
      $delete: {
        input: { param: { org_id: string; template_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { org_id: string; template_id: string } }
        output: Template
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { org_id: string; template_id: string } } & { json: Template }
        output: Template
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/templates/:template_id/clone': {
      $post: {
        input: { param: { org_id: string; template_id: string } } & {
          json: { name?: string | undefined }
        }
        output: Template
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/tickets': {
      $get: {
        input: { param: { org_id: string } } & {
          query: {
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: Ticket[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { org_id: string } } & { json: Ticket }
        output: Ticket
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/tickets/count': {
      $get: {
        input: { param: { org_id: string } } & {
          query: { distinct?: 'status' | 'type' | undefined }
        }
        output: {
          distinct: string
          end: number
          limit: number
          results: { count: number }[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/tickets/:ticket_id': {
      $get: {
        input: { param: { org_id: string; ticket_id: string } }
        output: Ticket
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { org_id: string; ticket_id: string } } & { json: Ticket }
        output: Ticket
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/tickets/:ticket_id/comments': {
      $post: {
        input: { param: { org_id: string; ticket_id: string } } & {
          json: { comment?: string | undefined }
        } & { form: { comment?: string | undefined; file?: File | undefined } }
        output: Ticket
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/troubleshoot': {
      $get: {
        input: { param: { org_id: string } } & {
          query: {
            mac?: string | undefined
            site_id?: string | undefined
            start?: number | undefined
            end?: number | undefined
            type?: 'wireless' | 'wired' | 'wan' | undefined
          }
        }
        output: {
          end?: number | undefined
          results?:
            | {
                category?: string | undefined
                reason?: string | undefined
                recommendation?: string | undefined
                text?: string | undefined
              }[]
            | undefined
          start?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/vpns': {
      $get: {
        input: { param: { org_id: string } }
        output: Vpn[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { org_id: string } } & { json: Vpn }
        output: Vpn
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/vpns/:vpn_id': {
      $delete: {
        input: { param: { org_id: string; vpn_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { org_id: string; vpn_id: string } }
        output: Vpn
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { org_id: string; vpn_id: string } } & { json: Vpn }
        output: Vpn
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/webhooks': {
      $get: {
        input: { param: { org_id: string } }
        output: Webhook[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { org_id: string } } & { json: Webhook }
        output: Webhook
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/webhooks/:webhook_id': {
      $delete: {
        input: { param: { org_id: string; webhook_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { org_id: string; webhook_id: string } }
        output: Webhook
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { org_id: string; webhook_id: string } } & { json: Webhook }
        output: Webhook
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/wired_clients/count': {
      $get: {
        input: { param: { org_id: string } } & {
          query: {
            distinct?: 'port_id' | 'vlan' | 'mac' | 'device_mac' | 'site_id' | 'type' | undefined
            page?: number | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          distinct: string
          end: number
          limit: number
          results: { count: number }[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/wired_clients/search': {
      $get: {
        input: { param: { org_id: string } } & {
          query: {
            site_id?: string | undefined
            device_mac?: string | undefined
            mac?: string | undefined
            port_id?: string | undefined
            vlan?: number | undefined
            ip?: string | undefined
            manufacture?: string | undefined
            text?: string | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          end: number
          limit: number
          next?: string | undefined
          results: WiredClientResponse[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/wlans': {
      $get: {
        input: { param: { org_id: string } }
        output: Wlan[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { org_id: string } } & { json: Wlan }
        output: Wlan
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/wlans/derived': {
      $get: {
        input: { param: { org_id: string } } & { query: { resolve?: boolean | undefined } }
        output: Wlan
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/wlans/:wlan_id': {
      $delete: {
        input: { param: { org_id: string; wlan_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { org_id: string; wlan_id: string } }
        output: Wlan[]
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { org_id: string; wlan_id: string } } & { json: Wlan }
        output: Wlan
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/wlans/:wlan_id/portal_image': {
      $delete: {
        input: { param: { org_id: string; wlan_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { org_id: string; wlan_id: string } } & { form: ImageUpload }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/wlans/:wlan_id/portal_template': {
      $put: {
        input: { param: { org_id: string; wlan_id: string } } & { json: WlanPortalTemplate }
        output: PortalTemplate
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/wxrules': {
      $get: {
        input: { param: { org_id: string } }
        output: WxlanRule[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { org_id: string } } & { json: WxlanRule }
        output: WxlanRule
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/wxrules/derived': {
      $get: {
        input: { param: { org_id: string } }
        output: WxlanRule[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/wxrules/:wxrules_id': {
      $delete: {
        input: { param: { org_id: string; wxrules_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { org_id: string; wxrules_id: string } }
        output: WxlanRule
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { org_id: string; wxrules_id: string } } & { json: WxlanRule }
        output: WxlanRule
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/wxtags': {
      $get: {
        input: { param: { org_id: string } }
        output: WxlanTag[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { org_id: string } } & { json: WxlanTag }
        output: WxlanTag
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/wxtags/apps': {
      $get: {
        input: { param: { org_id: string } }
        output: { group: string; key: string; name: string }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/wxtags/:wxtag_id': {
      $delete: {
        input: { param: { org_id: string; wxtag_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { org_id: string; wxtag_id: string } }
        output: WxlanTag
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { org_id: string; wxtag_id: string } } & { json: WxlanTag }
        output: WxlanTag
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/wxtags/:wxtag_id/clients': {
      $get: {
        input: { param: { org_id: string; wxtag_id: string } }
        output: { mac: string; since: number }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/wxtunnels': {
      $get: {
        input: { param: { org_id: string } }
        output: WxlanTunnel[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { org_id: string } } & { json: WxlanTunnel }
        output: WxlanTunnel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/orgs/:org_id/wxtunnels/:wxtunnel_id': {
      $delete: {
        input: { param: { org_id: string; wxtunnel_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { org_id: string; wxtunnel_id: string } }
        output: WxlanTunnel
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { org_id: string; wxtunnel_id: string } } & { json: WxlanTunnel }
        output: WxlanTunnel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/recover': {
      $post: {
        input: { json: { email: string; recaptcha: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/recover/verify/:token': {
      $post: {
        input: { param: { token: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/register': {
      $post: {
        input: {
          json: {
            account_only?: boolean | undefined
            allow_mist?: boolean | undefined
            email: string
            first_name: string
            invite_code?: string | undefined
            last_name: string
            org_name: string
            password: string
            recaptcha: string
            referer_invite_token?: string | undefined
            return_to?: string | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/register/verify/:token': {
      $post:
        | {
            input: { param: { token: string } }
            output: {
              detail?: string | undefined
              invite_not_applied?: boolean | undefined
              min_length?: number | undefined
              return_to?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { token: string } }
            output: { detail: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { token: string } }
            output: { detail: string }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v1/self': {
      $delete:
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
        | {
            input: {}
            output: { detail: string; org_id: string }
            outputFormat: 'json'
            status: 400
          }
      $get: { input: {}; output: Admin; outputFormat: 'json'; status: 200 }
      $put: { input: { json: Admin }; output: Admin; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/self/apitokens': {
      $get: { input: {}; output: Apitoken[]; outputFormat: 'json'; status: 200 }
      $post: {
        input: { json: { name?: string | undefined } }
        output: Apitoken
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/self/apitokens/:apitoken_id': {
      $delete: {
        input: { param: { apitoken_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/self/logs': {
      $get: {
        input: {
          query: {
            page?: number | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          end: number
          limit: number
          page: number
          results: {
            admin_id: string
            admin_name: string
            after?: { auth: { type: string } } | undefined
            before?: { auth: { type: string } } | undefined
            for_site?: boolean | undefined
            id: string
            message: string
            org_id: string
            site_id: string
            timestamp: number
          }[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/self/oauth/:provider': {
      $get: {
        input: { param: { provider: string } } & { query: { forward?: string | undefined } }
        output: { authorization_url: string; linked: boolean }
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { provider: string } } & { json: { code: string } }
            output: { action: string; id: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { provider: string } } & { json: { code: string } }
            output: { error: string; error_description: string }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/v1/self/subscriptions': {
      $get: { input: {}; output: { org_id: string }[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/self/two_factor/token': {
      $get: {
        input: { query: { by?: 'qrcode' | undefined } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/self/two_factor/verify': {
      $post: {
        input: { json: { two_factor: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/self/update': {
      $post:
        | {
            input: { json: ModelObjectEmail }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ModelObjectEmail }
            output: { detail?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/v1/self/update/verify/:token': {
      $get:
        | {
            input: { param: { token: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { token: string } }
            output: { detail: string }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/v1/sites/:site_id': {
      $delete: {
        input: { param: { site_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { site_id: string } }
        output: Site
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { site_id: string } } & { json: Site }
        output: Site
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/alarms/ack': {
      $post: {
        input: { param: { site_id: string } } & {
          json: { alarm_ids: string[]; note?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/alarms/ack_all': {
      $post: {
        input: { param: { site_id: string } } & { json: Note }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/alarms/count': {
      $get: {
        input: { param: { site_id: string } } & {
          query: {
            distinct?: 'type' | 'acked' | 'severity' | 'group' | undefined
            ack_admin_name?: string | undefined
            acked?: boolean | undefined
            type?: string | undefined
            severity?: string | undefined
            group?: string | undefined
            page?: number | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          distinct: string
          end: number
          limit: number
          results: { count: number }[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/alarms/search': {
      $get: {
        input: { param: { site_id: string } } & {
          query: {
            type?: string | undefined
            ack_admin_name?: string | undefined
            acked?: boolean | undefined
            severity?: string | undefined
            group?: string | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          end: number
          limit: number
          next?: string | undefined
          results: Alarm[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/alarms/unack': {
      $post: {
        input: { param: { site_id: string } } & {
          json: { alarm_ids: string[]; note?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/alarms/unack_all': {
      $post: {
        input: { param: { site_id: string } } & { json: Note }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/alarms/:alarm_id/ack': {
      $post: {
        input: { param: { site_id: string; alarm_id: string } } & { json: Note }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/alarms/:alarm_id/unack': {
      $post: {
        input: { param: { site_id: string; alarm_id: string } } & { json: Note }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/anomaly/client/:client_mac/:metric': {
      $get: {
        input: { param: { site_id: string; client_mac: string; metric: string } }
        output: { end: number; limit: number; page: number; results: Anomaly[]; start: number }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/anomaly/device/:device_mac/:metric': {
      $get: {
        input: { param: { site_id: string; metric: string; device_mac: string } }
        output: { end: number; limit: number; page: number; results: Anomaly[]; start: number }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/anomaly/:metric': {
      $get: {
        input: { param: { site_id: string; metric: string } }
        output: { end: number; limit: number; page: number; results: Anomaly[]; start: number }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/apps': {
      $get: {
        input: { param: { site_id: string } }
        output: { group: string; key: string; name: string }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/assetfilters': {
      $get: {
        input: { param: { site_id: string } }
        output: AssetFilter[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { site_id: string } } & { json: AssetFilter }
        output: AssetFilter
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/assetfilters/:assetfilter_id': {
      $delete: {
        input: { param: { site_id: string; assetfilter_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { site_id: string; assetfilter_id: string } }
        output: AssetFilter
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { site_id: string; assetfilter_id: string } } & { json: AssetFilter }
        output: AssetFilter
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/assets': {
      $get: {
        input: { param: { site_id: string } }
        output: Asset[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { site_id: string } } & { json: Asset }
        output: Asset
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/assets/import': {
      $post: {
        input: { param: { site_id: string } } & {
          query: { upsert?: 'True' | 'False' | undefined }
        } & { json: { mac: string; name: string }[] } & { form: { file?: File | undefined } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/assets/:asset_id': {
      $delete:
        | {
            input: { param: { site_id: string; asset_id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string; asset_id: string } }
            output: {}
            outputFormat: string
            status: 201
          }
      $get: {
        input: { param: { site_id: string; asset_id: string } }
        output: Asset
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { site_id: string; asset_id: string } } & { json: Asset }
        output: Asset
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/beacons': {
      $get: {
        input: { param: { site_id: string } }
        output: Beacon[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { site_id: string } } & { json: Beacon }
        output: Beacon
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/beacons/:beacon_id': {
      $delete: {
        input: { param: { site_id: string; beacon_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { site_id: string; beacon_id: string } }
        output: Beacon
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { site_id: string; beacon_id: string } } & { json: Beacon }
        output: Beacon
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/call/events/count': {
      $get: {
        input: { param: { site_id: string } } & { query: { distinct?: 'type' | 'app' | undefined } }
        output: {
          distinct: string
          end: number
          limit: number
          results: { count: number }[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/call/events/search': {
      $get: {
        input: { param: { site_id: string } } & {
          query: {
            type?: string | undefined
            ap?: string | undefined
            mac?: string | undefined
            app?: string | undefined
          }
        }
        output: {
          end?: number | undefined
          limit?: number | undefined
          results?: EventCall[] | undefined
          start?: number | undefined
          total?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/clients/count': {
      $get: {
        input: { param: { site_id: string } } & {
          query: {
            distinct: 'ssid' | 'ap' | 'ip' | 'vlan' | 'hostname' | 'os' | 'model' | 'device'
            ssid?: string | undefined
            ap?: string | undefined
            'ip address'?: string | undefined
            vlan?: string | undefined
            hostname?: string | undefined
            os?: string | undefined
            model?: string | undefined
            device?: string | undefined
            page?: number | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          distinct: string
          end: number
          limit: number
          results: { count: number }[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/clients/disconnect': {
      $post: {
        input: { param: { site_id: string } } & { json: string[] }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/clients/events/count': {
      $get: {
        input: { param: { site_id: string } } & {
          query: {
            distinct?: 'type' | 'proto' | 'band' | 'channel' | 'wlan_id' | 'ssid' | undefined
            type?: string | undefined
            reason_code?: number | undefined
            ssid?: string | undefined
            ap?: string | undefined
            proto?: 'b' | 'g' | 'n' | 'ac' | 'ax' | 'a' | undefined
            band?: '24' | '5' | undefined
            wlan_id?: string | undefined
            page?: number | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          distinct: string
          end: number
          limit: number
          results: { count: number }[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/clients/events/search': {
      $get: {
        input: { param: { site_id: string } } & {
          query: {
            type?: string | undefined
            reason_code?: number | undefined
            ssid?: string | undefined
            ap?: string | undefined
            proto?: 'b' | 'g' | 'n' | 'ac' | 'ax' | 'a' | undefined
            band?: '24' | '5' | undefined
            wlan_id?: string | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          end: number
          limit: number
          next?: string | undefined
          results: EventsClient[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/clients/search': {
      $get: {
        input: { param: { site_id: string } } & {
          query: {
            mac?: string | undefined
            'ip address'?: string | undefined
            hostname?: string | undefined
            device?: string | undefined
            os?: string | undefined
            model?: string | undefined
            ap?: string | undefined
            ssid?: string | undefined
            text?: string | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          end: number
          limit: number
          next?: string | undefined
          results: EventsClient[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/clients/sessions/count': {
      $get: {
        input: { param: { site_id: string } } & {
          query: {
            distinct?:
              | 'ssid'
              | 'wlan_id'
              | 'ap'
              | 'mac'
              | 'client_family'
              | 'client_manufacture'
              | 'client_model'
              | 'client_os'
              | undefined
            ap?: string | undefined
            band?: string | undefined
            client_family?: string | undefined
            client_manufacture?: string | undefined
            client_model?: string | undefined
            client_os?: string | undefined
            ssid?: string | undefined
            wlan_id?: string | undefined
            page?: number | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          distinct: string
          end: number
          limit: number
          results: { count: number }[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/clients/sessions/search': {
      $get: {
        input: { param: { site_id: string } } & {
          query: {
            ap?: string | undefined
            band?: '24' | '5' | undefined
            client_family?: string | undefined
            client_manufacture?: string | undefined
            client_model?: string | undefined
            client_username?: string | undefined
            client_os?: string | undefined
            ssid?: string | undefined
            wlan_id?: string | undefined
            psk_id?: string | undefined
            psk_name?: string | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          end: number
          limit: number
          next?: string | undefined
          results: {
            ap: string
            band: string
            client_manufacture: string
            connect: number
            disconnect: number
            duration: number
            mac: string
            org_id: string
            site_id: string
            ssid: string
            tags?: string[] | undefined
            timestamp: number
            wlan_id: string
          }[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/clients/unauthorize': {
      $post: {
        input: { param: { site_id: string } } & { json: string[] }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/clients/:client_mac/disconnect': {
      $post: {
        input: { param: { site_id: string; client_mac: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/clients/:client_mac/events': {
      $get: {
        input: { param: { site_id: string; client_mac: string } } & {
          query: {
            type?: 'b' | 'g' | 'n' | undefined
            proto?: 'a' | 'b' | 'g' | 'n' | 'ac' | 'ax' | undefined
            band?: string | undefined
            channel?: string | undefined
            wlan_id?: string | undefined
            ssid?: string | undefined
            start?: number | undefined
            end?: number | undefined
            page?: number | undefined
            limit?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          end: number
          limit: number
          next?: string | undefined
          results: EventsClient[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/clients/:client_mac/unauthorize': {
      $post: {
        input: { param: { site_id: string; client_mac: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/devices': {
      $get: {
        input: { param: { site_id: string } } & {
          query: {
            type?: 'ap' | 'switch' | 'gateway' | 'all' | undefined
            name?: string | undefined
            page?: number | undefined
            limit?: number | undefined
          }
        }
        output: (DeviceAp | DeviceSwitch | DeviceGateway)[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { site_id: string } } & { json: DeviceAp | DeviceSwitch | DeviceGateway }
        output: DeviceAp | DeviceSwitch | DeviceGateway
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/devices/ap_channels': {
      $get: {
        input: { param: { site_id: string } } & { query: { country_code?: string | undefined } }
        output: {
          band24_40mhz_allowed: boolean
          band24_channels: { [x: string]: unknown }
          band24_enabled: boolean
          band5_channels: { [x: string]: unknown }
          band5_enabled: boolean
          certified: boolean
          code: number
          dfs_ok: boolean
          key: string
          name: string
          uses: string
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/devices/config_history/count': {
      $get: {
        input: { param: { site_id: string } } & {
          query: {
            distinct?: string | undefined
            mac?: string | undefined
            page?: number | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          distinct: string
          end: number
          limit: number
          results: { count: number }[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/devices/config_history/search': {
      $get: {
        input: { param: { site_id: string } } & {
          query: {
            device_type?: 'ap' | 'switch' | 'gateway' | undefined
            mac?: string | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          end: number
          limit: number
          next?: string | undefined
          results: {
            channel_24: number
            channel_5: number
            radio_macs?: string[] | undefined
            radios?: { band: string; channel: number }[] | undefined
            secpolicy_violated: boolean
            ssids?: string[] | undefined
            ssids_24?: string[] | undefined
            ssids_5?: string[] | undefined
            timestamp: number
            version: string
            wlans?:
              | {
                  auth: string
                  bands?: string[] | undefined
                  id: string
                  ssid: string
                  vlan_ids?: string[] | undefined
                }[]
              | undefined
          }[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/devices/count': {
      $get: {
        input: { param: { site_id: string } } & {
          query: {
            distinct?:
              | 'model'
              | 'version'
              | 'map_id'
              | 'hostname'
              | 'mxtunnel_status'
              | 'mxedge_id'
              | 'lldp_system_name'
              | 'lldp_system_desc'
              | 'lldp_port_id'
              | 'lldp_mgmt_addr'
              | undefined
            hostname?: string | undefined
            model?: string | undefined
            mac?: string | undefined
            version?: string | undefined
            mxtunnel_status?: string | undefined
            mxedge_id?: string | undefined
            lldp_system_name?: string | undefined
            lldp_system_desc?: string | undefined
            lldp_port_id?: string | undefined
            lldp_mgmt_addr?: string | undefined
            map_id?: string | undefined
            page?: number | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          distinct: string
          end: number
          limit: number
          percentage: number
          results: { count: number; model: string }[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/devices/events/count': {
      $get: {
        input: { param: { site_id: string } } & {
          query: {
            distinct?: 'model' | 'type' | 'type_code' | 'mac' | undefined
            model?: string | undefined
            type?: string | undefined
            type_code?: string | undefined
            page?: number | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          distinct: string
          end: number
          limit: number
          percentage: number
          results: { count: number; type: string }[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/devices/events/search': {
      $get: {
        input: { param: { site_id: string } } & {
          query: {
            device_type?: 'ap' | 'switch' | 'gateway' | undefined
            mac?: string | undefined
            model?: string | undefined
            text?: string | undefined
            timestamp?: string | undefined
            type?: string | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          end: number
          limit: number
          next: string
          results: EventsDeviceAp[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/devices/export': {
      $get: {
        input: { param: { site_id: string } }
        output: File
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/devices/import': {
      $post: {
        input: { param: { site_id: string } } & { json: DeviceAp[] | File }
        output: (DeviceAp | DeviceSwitch | DeviceGateway)[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/devices/last_config/count': {
      $get: {
        input: { param: { site_id: string } } & {
          query: {
            distinct?: 'version' | 'name' | 'site_id' | 'mac' | undefined
            page?: number | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          distinct: string
          end: number
          limit: number
          percentage: number
          results: { ap: string; count: number }[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/devices/last_config/search': {
      $get: {
        input: { param: { site_id: string } } & {
          query: {
            device_type?: 'ap' | 'switch' | 'gateway' | undefined
            mac?: string | undefined
            version?: string | undefined
            name?: string | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          end: number
          limit: number
          next?: string | undefined
          results: {
            channel_24: number
            channel_5: number
            radio_macs?: string[] | undefined
            radios?: { band: string; channel: number }[] | undefined
            secpolicy_violated: boolean
            ssids?: string[] | undefined
            ssids_24?: string[] | undefined
            ssids_5?: string[] | undefined
            timestamp: number
            version: string
            wlans?:
              | {
                  auth: string
                  bands?: string[] | undefined
                  id: string
                  ssid: string
                  vlan_ids?: string[] | undefined
                }[]
              | undefined
          }[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/devices/reprovision': {
      $post: {
        input: { param: { site_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/devices/reset_radio_config': {
      $post: {
        input: { param: { site_id: string } } & {
          json: { bands: string[]; force?: boolean | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/devices/restart': {
      $post: {
        input: { param: { site_id: string } } & {
          json: { device_ids: string[]; node?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/devices/search': {
      $get: {
        input: { param: { site_id: string } } & {
          query: {
            hostname?: string | undefined
            type?: 'ap' | 'switch' | 'gateway' | undefined
            model?: string | undefined
            mac?: string | undefined
            version?: string | undefined
            power_constrained?: boolean | undefined
            'ip address'?: string | undefined
            mxtunnel_status?: 'up' | 'down' | undefined
            mxedge_id?: string | undefined
            lldp_system_name?: string | undefined
            lldp_system_desc?: string | undefined
            lldp_port_id?: string | undefined
            lldp_mgmt_addr?: string | undefined
            band_24_channel?: number | undefined
            band_5_channel?: number | undefined
            band_6_channel?: number | undefined
            eth0_port_speed?: number | undefined
            sort?: 'timestamp' | 'mac' | 'model' | 'sku' | undefined
            'desc-sort'?: 'timestamp' | 'mac' | 'model' | 'sku' | undefined
            stats?: boolean | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          end: number
          limit: number
          next?: string | undefined
          results: (DeviceSearchAp | DeviceSearchSwitchGateway)[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/devices/upgrade': {
      $get: {
        input: { param: { site_id: string } } & {
          query: {
            status?:
              | 'downloading'
              | 'completed'
              | 'created'
              | 'downloaded'
              | 'upgrading'
              | 'cancelled'
              | 'failed'
              | undefined
          }
        }
        output: DeviceUpgradeResponse[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { site_id: string } } & { json: DeviceUpgrade }
        output: DeviceUpgradeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/devices/upgrade/:upgrade_id': {
      $get: {
        input: { param: { site_id: string; upgrade_id: string } }
        output: DeviceUpgradeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/devices/upgrade/:upgrade_id/cancel': {
      $post: {
        input: { param: { site_id: string; upgrade_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/devices/versions': {
      $get: {
        input: { param: { site_id: string } } & {
          query: { type?: 'ap' | 'switch' | 'gateway' | undefined }
        }
        output: { model: string; tag?: string | undefined; version: string }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/devices/zerioze': {
      $post: {
        input: { param: { site_id: string } } & { json: { password: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/devices/:device_id': {
      $delete: {
        input: { param: { site_id: string; device_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { site_id: string; device_id: string } }
        output: DeviceAp | DeviceSwitch | DeviceGateway
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { site_id: string; device_id: string } } & {
          json: DeviceAp | DeviceSwitch | DeviceGateway
        }
        output: DeviceAp | DeviceSwitch | DeviceGateway
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/devices/:device_id/arp': {
      $post: {
        input: { param: { site_id: string; device_id: string } }
        output: { session: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/devices/:device_id/bounce_port': {
      $post: {
        input: { param: { site_id: string; device_id: string } } & {
          json: { port?: string | undefined; ports?: string[] | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/devices/:device_id/cable_test': {
      $post: {
        input: { param: { site_id: string; device_id: string } } & { json: { port: string } }
        output: { session: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/devices/:device_id/check_radius_server': {
      $post: {
        input: { param: { site_id: string; device_id: string } } & {
          json: { password: string; profile?: string | undefined; user: string }
        }
        output: { session: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/devices/:device_id/clear_arp': {
      $post:
        | {
            input: { param: { site_id: string; device_id: string } } & {
              json:
                | { [x: string]: unknown }
                | {
                    ip?: string | undefined
                    port_id?: string | undefined
                    vlan?: number | undefined
                  }
            }
            output: { session: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string; device_id: string } } & {
              json:
                | { [x: string]: unknown }
                | {
                    ip?: string | undefined
                    port_id?: string | undefined
                    vlan?: number | undefined
                  }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/api/v1/sites/:site_id/devices/:device_id/clear_bgp': {
      $post:
        | {
            input: { param: { site_id: string; device_id: string } } & {
              json: {
                neighbor: string
                type?: 'in' | 'out' | 'hard' | 'soft' | undefined
                vrf?: string | undefined
              }
            }
            output: { session: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string; device_id: string } } & {
              json: {
                neighbor: string
                type?: 'in' | 'out' | 'hard' | 'soft' | undefined
                vrf?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/api/v1/sites/:site_id/devices/:device_id/clear_bpdu_error': {
      $post:
        | {
            input: { param: { site_id: string; device_id: string } } & {
              json: { port?: string | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string; device_id: string } } & {
              json: { port?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/api/v1/sites/:site_id/devices/:device_id/clear_macs': {
      $post: {
        input: { param: { site_id: string; device_id: string } } & {
          json: { ports?: string[] | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/devices/:device_id/config_cmd': {
      $get: {
        input: { param: { site_id: string; device_id: string } } & {
          query: { sort?: 'true' | 'false' | undefined }
        }
        output: { cli: string[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/devices/:device_id/ha': {
      $delete: {
        input: { param: { site_id: string; device_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { site_id: string; device_id: string } } & {
          json: { nodes: { mac: string }[] }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { site_id: string; device_id: string } } & {
          json: { mac?: string | undefined; op: 'swap' | 'replace_node1' }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/devices/:device_id/image:image_number': {
      $delete: {
        input: { param: { site_id: string; device_id: string; image_number: number } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { site_id: string; device_id: string; image_number: number } } & {
          form: ImageUpload
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/devices/:device_id/iot': {
      $get: {
        input: { param: { site_id: string; device_id: string } }
        output: { [x: string]: number }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { site_id: string; device_id: string } } & { json: { [x: string]: number } }
        output: { [x: string]: number }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/devices/:device_id/local_port_config': {
      $delete: {
        input: { param: { site_id: string; device_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { site_id: string; device_id: string } } & { json: JunosPortConfig }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/devices/:device_id/locate': {
      $post: {
        input: { param: { site_id: string; device_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/devices/:device_id/ping': {
      $post: {
        input: { param: { site_id: string; device_id: string } } & {
          json: {
            count?: number | undefined
            egress_interface?: string | undefined
            host: string
            size?: number | undefined
          }
        }
        output: { session: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/devices/:device_id/poll_stats': {
      $post: {
        input: { param: { site_id: string; device_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/devices/:device_id/release_dhcp': {
      $post:
        | {
            input: { param: { site_id: string; device_id: string } } & { json: { port: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string; device_id: string } } & { json: { port: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/api/v1/sites/:site_id/devices/:device_id/request_ztp_password': {
      $post: {
        input: { param: { site_id: string; device_id: string } }
        output: { root_password: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/devices/:device_id/resolve_dns': {
      $post: {
        input: { param: { site_id: string; device_id: string } }
        output: { session: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/devices/:device_id/restart': {
      $post: {
        input: { param: { site_id: string; device_id: string } } & {
          json: { member?: string | undefined; node?: string | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/devices/:device_id/service_ping': {
      $post: {
        input: { param: { site_id: string; device_id: string } } & {
          json: {
            count?: number | undefined
            host: string
            service: string
            size?: number | undefined
            tenant?: string | undefined
          }
        }
        output: { session: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/devices/:device_id/show_route': {
      $post: {
        input: { param: { site_id: string; device_id: string } } & {
          json: {
            neighbor?: string | undefined
            prefix?: string | undefined
            protocol?: string | undefined
            route?: 'received' | 'advertised' | undefined
            vrf_name?: string | undefined
          }
        }
        output: { session: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/devices/:device_id/show_session': {
      $post: {
        input: { param: { site_id: string; device_id: string } } & {
          json: { service_name?: string | undefined }
        }
        output: { session: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/devices/:device_id/snapshot': {
      $post:
        | {
            input: { param: { site_id: string; device_id: string } }
            output: {
              status_id?: string | undefined
              staus?: 'starting' | 'inprogress' | 'success' | 'error' | 'scheduled' | undefined
              timestamp?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string; device_id: string } }
            output: string
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/v1/sites/:site_id/devices/:device_id/support': {
      $post:
        | {
            input: { param: { site_id: string; device_id: string } } & {
              json: {
                info?: 'process' | 'outbound-ssh' | 'full' | undefined
                node?: string | undefined
                num_messages_files?: number | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string; device_id: string } } & {
              json: {
                info?: 'process' | 'outbound-ssh' | 'full' | undefined
                node?: string | undefined
                num_messages_files?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/api/v1/sites/:site_id/devices/:device_id/synthetic_test': {
      $post:
        | {
            input: { param: { site_id: string; device_id: string } } & {
              json: {
                hostname?: string | undefined
                ip?: string | undefined
                password?: string | undefined
                type?:
                  | 'dns'
                  | 'arp'
                  | 'dhcp'
                  | 'curl'
                  | 'radius'
                  | 'speedtest'
                  | 'dhcp6'
                  | undefined
                url?: string | undefined
                username?: string | undefined
                vlan_id?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { site_id: string; device_id: string } } & {
              json: {
                hostname?: string | undefined
                ip?: string | undefined
                password?: string | undefined
                type?:
                  | 'dns'
                  | 'arp'
                  | 'dhcp'
                  | 'curl'
                  | 'radius'
                  | 'speedtest'
                  | 'dhcp6'
                  | undefined
                url?: string | undefined
                username?: string | undefined
                vlan_id?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/api/v1/sites/:site_id/devices/:device_id/traceroute': {
      $post: {
        input: { param: { site_id: string; device_id: string } } & {
          json: {
            host?: string | undefined
            port?: number | undefined
            protocol?: 'udp' | 'icmp' | undefined
            timeout?: number | undefined
          }
        }
        output: { session: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/devices/:device_id/unlocate': {
      $post: {
        input: { param: { site_id: string; device_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/devices/:device_id/upgrade': {
      $post: {
        input: { param: { site_id: string; device_id: string } } & { json: { version: string } }
        output: {
          status: 'starting' | 'inprogress' | 'success' | 'error' | 'scheduled'
          status_id: number
          timestamp: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/devices/:device_id/vc': {
      $delete: {
        input: { param: { site_id: string; device_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { site_id: string; device_id: string } }
        output: { id?: DeviceSwitchVc | undefined }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { site_id: string; device_id: string } } & { json: DeviceSwitchVc }
        output: { id?: DeviceSwitchVc | undefined }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { site_id: string; device_id: string } } & { json: DeviceSwitchVc }
        output: { id?: DeviceSwitchVc | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/devices/:device_id/vc/vc_port': {
      $post: {
        input: { param: { site_id: string; device_id: string } } & {
          json: {
            members: { member: number; vc_ports?: string[] | undefined }[]
            op: 'set' | 'delete'
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/events/fast_roam': {
      $get: {
        input: { param: { site_id: string } } & {
          query: {
            type?: 'success' | 'fail' | 'none' | undefined
            page?: number | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          end: number
          limit: number
          next?: string | undefined
          results: {
            ap_mac: string
            client_mac: string
            fromap: string
            latency: number
            ssid: string
            subtype?: string | undefined
            timestamp: number
            type?: 'success' | 'fail' | 'none' | 'poor' | 'pingpong' | 'slow' | undefined
          }[]
          start: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/events/interference': {
      $get: {
        input: { param: { site_id: string } } & {
          query: {
            page?: number | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          end: number
          limit: number
          page: number
          results: {
            ap_id: string
            band: number
            channel_util: number
            channels?: number[] | undefined
            rssi: number
            source: string
            timestamp: number
          }[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/events/system/count': {
      $get: {
        input: { param: { site_id: string } } & {
          query: {
            distinct?: 'type' | undefined
            page?: number | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          distinct: string
          end: number
          limit: number
          results: { count: number }[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/events/system/search': {
      $get: {
        input: { param: { site_id: string } } & {
          query: {
            type?: string | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          end: number
          limit: number
          next?: string | undefined
          results: EventsDeviceAp[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/evpn_topologies': {
      $get: {
        input: { param: { site_id: string } }
        output: JunosEvpnTopology
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { site_id: string } } & { json: JunosEvpnTopology }
        output: JunosEvpnTopology
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/evpn_topologies/:evpn_topology_id': {
      $delete: {
        input: { param: { site_id: string; evpn_topology_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { site_id: string; evpn_topology_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { site_id: string; evpn_topology_id: string } } & {
          json: JunosEvpnTopology
        }
        output: JunosEvpnTopology
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/guests': {
      $get: {
        input: { param: { site_id: string } } & { query: { wlan_id?: string | undefined } }
        output: Guest[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/guests/count': {
      $get: {
        input: { param: { site_id: string } } & {
          query: {
            distinct?: 'auth_method' | 'ssid' | 'company' | undefined
            page?: number | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          distinct: string
          end: number
          limit: number
          results: { count: number }[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/guests/search': {
      $get: {
        input: { param: { site_id: string } } & {
          query: {
            wlan_id?: string | undefined
            auth_method?: string | undefined
            ssid?: string | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          end: number
          limit: number
          next: string
          results: {
            ap: string
            auth_method: string
            authorized_expiring_time: number
            authorized_time: number
            company: string
            email: string
            name: string
            ssid: string
            timestamp: number
          }[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/guests/:guest_mac': {
      $delete: {
        input: { param: { site_id: string; guest_mac: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { site_id: string; guest_mac: string } }
        output: Guest
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { site_id: string; guest_mac: string } } & { json: Guest }
        output: Guest
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/insights/client/:client_mac/:metric': {
      $get: {
        input: { param: { site_id: string; client_mac: string; metric: string } } & {
          query: {
            page?: number | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
            interval?: string | undefined
          }
        }
        output: {
          end: number
          interval: number
          results: { [x: string]: unknown }[]
          start: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/insights/device/:device_mac/:metric': {
      $get: {
        input: { param: { site_id: string; metric: string; device_mac: string } } & {
          query: {
            page?: number | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
            interval?: string | undefined
          }
        }
        output: {
          end: number
          interval: number
          results: (string | number)[]
          rt?: string[] | undefined
          start: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/insights/rogues': {
      $get: {
        input: { param: { site_id: string } } & {
          query: {
            type?: 'honeypot' | 'lan' | 'others' | 'spoof' | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
            interval?: string | undefined
          }
        }
        output: {
          end: number
          limit: number
          next?: string | undefined
          results: {
            ap_mac: string
            avg_rssi: number
            bssid: string
            channel: string
            delta_x?: number | undefined
            delta_y?: number | undefined
            num_aps: number
            seen_on_lan?: boolean | undefined
            ssid?: string | undefined
            times_heard?: number | undefined
          }[]
          start: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/insights/rogues/clients': {
      $get: {
        input: { param: { site_id: string } } & {
          query: {
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
            interval?: string | undefined
          }
        }
        output: {
          end: number
          limit: number
          next: string
          results: {
            annotation: string
            ap_mac: string
            avg_rssi: number
            band: string
            bssid: string
            client_mac: string
            num_aps: number
          }[]
          start: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/insights/:metric': {
      $get: {
        input: { param: { site_id: string; metric: string } } & {
          query: {
            page?: number | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
            interval?: string | undefined
          }
        }
        output: {
          end: number
          interval: number
          results: { [x: string]: unknown }[]
          start: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/licenses/usages': {
      $get: {
        input: { param: { site_id: string } }
        output: {
          org_entitled: { [x: string]: number }
          svna_enabled: boolean
          trial_enabled: boolean
          usages: { [x: string]: number }
          vna_enabled: boolean
          wvna_enabled: boolean
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/location/coverage': {
      $get: {
        input: { param: { site_id: string } } & {
          query: {
            map_id?: string | undefined
            type?: 'sdkclient' | 'client' | 'asset' | undefined
            duration?: '1d' | '5h' | '1h' | '30m' | undefined
            resolution?: 'default' | 'fine' | undefined
            client_type?: string | undefined
            start?: number | undefined
            end?: number | undefined
          }
        }
        output: {
          beams_means: number[][]
          end: number
          gridsize: number
          result_def: string[]
          results: number[][]
          start: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/location/ml/current': {
      $get: {
        input: { param: { site_id: string } } & { query: { map_id?: string | undefined } }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/location/ml/defaults': {
      $get: {
        input: { param: { site_id: string } }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/location/ml/device/:device_id': {
      $delete: {
        input: { param: { site_id: string; device_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { site_id: string; device_id: string } } & { json: ModelMl }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/location/ml/map/:map_id': {
      $delete: {
        input: { param: { site_id: string; map_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { site_id: string; map_id: string } } & { json: ModelMl }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/location/ml/reset/map/:map_id': {
      $post: {
        input: { param: { site_id: string; map_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/location/ml/updates': {
      $get: {
        input: { param: { site_id: string } } & {
          query: {
            device_id?: string | undefined
            map_ip?: string | undefined
            client_type?: string | undefined
            duration?: string | undefined
            start?: number | undefined
            end?: number | undefined
            interval?: string | undefined
          }
        }
        output: {
          end: number
          interval: number
          start: number
          updates: {
            client_type: string
            completed: number
            int: number
            level: number
            ple: number
            timestamp: number
          }[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/maps': {
      $get: {
        input: { param: { site_id: string } }
        output: Map[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { site_id: string } } & { json: Map }
        output: Map
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/maps/import': {
      $post: {
        input: { param: { site_id: string } } & {
          form: {
            auto_deviceprofile_assignment?: boolean | undefined
            csv?: File | undefined
            file?: File | undefined
            json?:
              | {
                  import_all_floorpans?: boolean | undefined
                  import_height?: boolean | undefined
                  import_orientation?: boolean | undefined
                  site_id: string
                  vendor_name: 'ekahau' | 'ibwave'
                }
              | undefined
          }
        }
        output: {
          aps: {
            action?:
              | 'placed'
              | 'assigned-placed'
              | 'named-placed'
              | 'assigned-named-placed'
              | 'ignored'
              | undefined
            floorplan_id?: string | undefined
            height?: number | undefined
            mac: string
            map_id?: string | undefined
            orientation?: number | undefined
            reason?: string | undefined
          }[]
          floorplans?:
            | {
                action?: 'imported' | 'ignored' | undefined
                id?: string | undefined
                map_id?: string | undefined
                name?: string | undefined
                reason?: string | undefined
              }[]
            | undefined
          site_id: string
          summary?:
            | {
                num_ap_assigned: number
                num_inv_assigned?: number | undefined
                num_map_assigned?: number | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/maps/:map_id': {
      $delete: {
        input: { param: { site_id: string; map_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { site_id: string; map_id: string } }
        output: Map
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { site_id: string; map_id: string } } & { json: Map }
        output: Map
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/maps/:map_id/auto_orient': {
      $delete:
        | {
            input: { param: { map_id: string; site_id: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { map_id: string; site_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
      $post: {
        input: { param: { map_id: string; site_id: string } }
        output: {
          state?: 'Not Started' | 'Enqueued' | 'Oriented' | undefined
          time_queued?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/maps/:map_id/auto_placement': {
      $delete:
        | {
            input: { param: { site_id: string; map_id: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { site_id: string; map_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
      $get: {
        input: { param: { site_id: string; map_id: string } }
        output: {
          estimated_time_left?: number | undefined
          state?: 'Not Started' | 'In Progress' | 'Localized' | undefined
          time_queued?: number | undefined
          time_stopped?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { site_id: string; map_id: string } } & {
              json: { device_ids?: string[] | undefined; force_collection?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { site_id: string; map_id: string } } & {
              json: { device_ids?: string[] | undefined; force_collection?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/api/v1/sites/:site_id/maps/:map_id/clear_auto_orient': {
      $post: {
        input: { param: { site_id: string; map_id: string } } & {
          json: { device_ids?: string[] | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/maps/:map_id/clear_autoplacement': {
      $post: {
        input: { param: { site_id: string; map_id: string } } & {
          json: { device_ids?: string[] | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/maps/:map_id/image': {
      $delete: {
        input: { param: { site_id: string; map_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { site_id: string; map_id: string } } & { form: ImageUpload }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/maps/:map_id/replace': {
      $post: {
        input: { param: { site_id: string; map_id: string } } & {
          form: {
            file: File
            json?:
              | {
                  transform?:
                    | {
                        rotate?: number | undefined
                        scale?: number | undefined
                        x?: number | undefined
                        y?: number | undefined
                      }
                    | undefined
                }
              | undefined
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/maps/:map_id/revert_auto_orient': {
      $post: {
        input: { param: { site_id: string; map_id: string } } & {
          json: { device_ids?: string[] | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/maps/:map_id/revert_autoplacement': {
      $post: {
        input: { param: { site_id: string; map_id: string } } & {
          json: { device_ids?: string[] | undefined }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/maps/:map_id/set_map': {
      $post: {
        input: { param: { site_id: string; map_id: string } } & {
          json: { device_ids?: string[] | undefined }
        }
        output: { locked?: string[] | undefined; moved?: string[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/maps/:map_id/wayfinding/import': {
      $post: {
        input: { param: { site_id: string; map_id: string } } & {
          json:
            | {
                client_id: string
                client_secret: string
                customer_id: number
                endpoint_url: string
                map_id: string
                mmpp: number
                ppm: number
                vendor_name: 'jibestream'
                venue_id: number
              }
            | {
                account_key: string
                default_level_id: number
                map_id: string
                vendor_name: 'micello'
              }
        }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/mxedges': {
      $get: {
        input: { param: { site_id: string } }
        output: Mxedge[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { site_id: string } } & { json: Mxedge }
        output: Mxedge
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/mxedges/:mxedge_id': {
      $delete: {
        input: { param: { site_id: string; mxedge_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { site_id: string; mxedge_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { site_id: string; mxedge_id: string } } & { json: Mxedge }
        output: Mxedge
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/mxedges/:mxedge_id/support': {
      $post: {
        input: { param: { site_id: string; mxedge_id: string } }
        output: {
          created_time?: number | undefined
          for_site?: boolean | undefined
          id?: string | undefined
          magic?: string | undefined
          model?: string | undefined
          modified_time?: number | undefined
          mxagent_registered?: boolean | undefined
          mxcluster_id?: string | undefined
          name?: string | undefined
          org_id?: string | undefined
          services?: string[] | undefined
          site_id?: string | undefined
          status?: string | undefined
          tunterm_ip_config?:
            | {
                gateway?: string | undefined
                ip?: string | undefined
                netmask?: string | undefined
              }
            | undefined
          tunterm_port_config?:
            | {
                downstream_ports?: string[] | undefined
                separate_upstream_downstream?: boolean | undefined
                upstream_ports?: string[] | undefined
              }
            | undefined
          tunterm_registered?: boolean | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/mxtunnels/:mxtunnel_id/preempt_aps': {
      $post: {
        input: { param: { site_id: string; mxtunnel_id: string } }
        output: { preempted_aps: string[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/otherdevices': {
      $get: {
        input: { param: { site_id: string } } & {
          query: {
            vendor?: string | undefined
            mac?: string | undefined
            serial?: string | undefined
            model?: string | undefined
            name?: string | undefined
            page?: number | undefined
            limit?: number | undefined
          }
        }
        output: DeviceOther[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/pcaps': {
      $get: {
        input: { param: { site_id: string } } & {
          query: {
            page?: number | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
            client_mac?: string | undefined
          }
        }
        output: {
          end: number
          limit: number
          next: string
          results: {
            ap_macs?: string[] | undefined
            timestamp: number
            type: string
            url: string
          }[]
          start: number
          total?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/pcaps/capture': {
      $delete: {
        input: { param: { site_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { site_id: string } }
        output: {
          ap_mac?: (string | null) | undefined
          aps?: string[] | undefined
          client_mac?: (string | null) | undefined
          duration?: number | undefined
          failed?: string[] | undefined
          gateways?: string[] | undefined
          id: string
          includes_mcast?: boolean | undefined
          max_num_packets?: number | undefined
          max_pkt_len?: number | undefined
          num_packets?: number | undefined
          ok?: string[] | undefined
          radiotap_tcpdump_expression?: string | undefined
          scan_tcpdump_expression?: string | undefined
          ssid?: (string | null) | undefined
          started_time?: number | undefined
          tcpdump_expression?: string | undefined
          type: 'new_assoc' | 'client' | 'wired' | 'wireless' | 'radiotap' | 'gateway'
          wired_tcpdump_expression?: string | undefined
          wireless_tcpdump_expression?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { site_id: string } } & { json: Capture }
        output: {
          ap_count?: number | undefined
          aps?: string[] | undefined
          client_mac?: (string | null) | undefined
          duration?: number | undefined
          enabled?: boolean | undefined
          expiry?: number | undefined
          format?: string | undefined
          id: string
          include_mcast?: boolean | undefined
          invalid_aps?: { [x: string]: unknown } | undefined
          max_pkt_len?: number | undefined
          num_packets?: number | undefined
          org_id: string
          raw?: boolean | undefined
          site_id: string
          ssid?: (string | null) | undefined
          tcpdump_parser_expression?: (string | null) | undefined
          timestamp: number
          type: string
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/psks': {
      $get: {
        input: { param: { site_id: string } } & {
          query: {
            ssid?: string | undefined
            role?: string | undefined
            name?: string | undefined
            page?: number | undefined
            limit?: number | undefined
          }
        }
        output: Psk[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { site_id: string } } & { json: Psk }
        output: Psk
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { site_id: string } } & { json: Psk[] }
        output: Psk[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/psks/import': {
      $post: {
        input: { param: { site_id: string } } & { json: Psk[] } & {
          form: { file?: File | undefined }
        }
        output: Psk[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/psks/:psk_id': {
      $delete: {
        input: { param: { site_id: string; psk_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { site_id: string; psk_id: string } }
        output: Psk
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { site_id: string; psk_id: string } } & { json: Psk }
        output: Psk
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/rfdiags': {
      $get: {
        input: { param: { site_id: string } } & {
          query: {
            page?: number | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: RfdiagResponse[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { site_id: string } } & { json: Rfdiag }
        output: RfdiagResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/rfdiags/:rfdiag_id': {
      $delete: {
        input: { param: { site_id: string; rfdiag_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { site_id: string; rfdiag_id: string } }
        output: RfdiagResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { site_id: string; rfdiag_id: string } } & { json: Rfdiag }
        output: RfdiagResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/rfdiags/:rfdiag_id/download': {
      $get: {
        input: { param: { site_id: string; rfdiag_id: string } }
        output: File
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/rfdiags/:rfdiag_id/stop': {
      $post: {
        input: { param: { site_id: string; rfdiag_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/rogues/events/count': {
      $get: {
        input: { param: { site_id: string } } & {
          query: {
            distinct?: 'bssid' | 'ssid' | 'ap' | 'type' | undefined
            type?: 'honeypot' | 'lan' | 'others' | 'spoof' | undefined
            ssid?: string | undefined
            bssid?: string | undefined
            ap_mac?: string | undefined
            channel?: string | undefined
            seen_on_lan?: boolean | undefined
            page?: number | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          distinct: string
          end: number
          limit: number
          results: { count: number }[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/rogues/events/search': {
      $get: {
        input: { param: { site_id: string } } & {
          query: {
            type?: 'honeypot' | 'lan' | 'others' | 'spoof' | undefined
            ssid?: string | undefined
            bssid?: string | undefined
            ap_mac?: string | undefined
            channel?: number | undefined
            seen_on_lan?: boolean | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          end: number
          limit: number
          next?: string | undefined
          results: EventsRogue[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/rogues/:rogue_bssid': {
      $get: {
        input: { param: { site_id: string; rogue_bssid: string } }
        output: { manufacture: string; seen_as_client: boolean }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/rogues/:rogue_bssid/deauth_clients': {
      $post: {
        input: { param: { site_id: string; rogue_bssid: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/rrm/current': {
      $get: {
        input: { param: { site_id: string } }
        output: Rrm
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/rrm/current/devices/:device_id/band/:band': {
      $get: {
        input: { param: { site_id: string; device_id: string; band: '24' | '5' | '6' } }
        output: {
          results: {
            channel: number
            noise: number
            other_rssi?: number | undefined
            other_ssid?: string | undefined
            util_score: number
            util_score_non_wifi: number
            util_score_other: number
          }[]
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/rrm/events': {
      $get: {
        input: { param: { site_id: string } } & {
          query: {
            band: '24' | '5' | '6'
            page?: number | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          end: number
          limit: number
          next?: string | undefined
          results: {
            ap_id: string
            band: '24' | '5' | '6'
            bandwidth: 20 | 40 | 80 | 160
            channel: number
            event:
              | 'triggered-site-rrm'
              | 'interference-ap-co-channel'
              | 'rrm-radar'
              | 'scheduled-site-rrm'
              | 'interference-ap-non-wifi'
              | 'radar-detected'
              | 'neighbor-ap-down'
              | 'neighbor-ap-recovered'
            power: number
            pre_bandwidth: 0 | 20 | 40 | 80 | 160
            pre_channel: number
            pre_power: number
            pre_usage: string
            timestamp: number
            usage: string
          }[]
          start: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/rrm/optimize': {
      $post: {
        input: { param: { site_id: string } } & { json: { bands: string[] } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/rssizones': {
      $get: {
        input: { param: { site_id: string } }
        output: Rssizone[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { site_id: string } } & { json: Rssizone }
        output: Rssizone
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/rssizones/:rssizone_id': {
      $delete: {
        input: { param: { site_id: string; rssizone_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { site_id: string; rssizone_id: string } }
        output: Rssizone[]
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { site_id: string; rssizone_id: string } } & { json: Rssizone }
        output: Rssizone
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/setting': {
      $get: {
        input: { param: { site_id: string } }
        output: SiteSetting
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { site_id: string } } & { json: SiteSetting }
        output: SiteSetting
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/setting/blacklist': {
      $delete: {
        input: { param: { site_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { site_id: string } } & { json: ModelObjectMacsArrayString }
        output: { macs?: string[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/setting/watched_station': {
      $delete: {
        input: { param: { site_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { site_id: string } } & { json: ModelObjectMacsArrayString }
        output: { macs?: string[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/setting/whitelist': {
      $delete: {
        input: { param: { site_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { site_id: string } } & { json: ModelObjectMacsArrayString }
        output: { macs?: string[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/skyatp/events/count': {
      $get: {
        input: { param: { site_id: string } } & {
          query: {
            distinct?: 'type' | 'mac' | 'device_mac' | 'threat_level' | undefined
            type?: string | undefined
            mac?: string | undefined
            device_mac?: string | undefined
            threat_level?: number | undefined
            'ip address'?: string | undefined
            page?: number | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          distinct: string
          end: number
          limit: number
          results: { count: number }[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/skyatp/events/search': {
      $get: {
        input: { param: { site_id: string } } & {
          query: {
            type?: string | undefined
            mac?: string | undefined
            device_mac?: string | undefined
            threat_level?: number | undefined
            'ip address'?: string | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          end: number
          limit: number
          next?: string | undefined
          results: EventsSkyatp[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/sle/:scope/:scope_id/metric/:metric/classifier/:classifier/summary': {
      $get: {
        input: {
          param: {
            site_id: string
            scope: 'site' | 'ap' | 'switch' | 'gateway' | 'client'
            scope_id: string
            metric: string
            classifier: string
          }
        } & {
          query: {
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: SleClassifierSummary
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/sle/:scope/:scope_id/metric/:metric/classifiers': {
      $get: {
        input: {
          param: {
            site_id: string
            scope: 'site' | 'ap' | 'switch' | 'gateway' | 'client'
            scope_id: string
            metric: string
          }
        }
        output: string[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/sle/:scope/:scope_id/metric/:metric/histogram': {
      $get: {
        input: {
          param: {
            site_id: string
            scope: 'site' | 'ap' | 'switch' | 'gateway' | 'client'
            scope_id: string
            metric: string
          }
        } & {
          query: {
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: SleHistogram
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/sle/:scope/:scope_id/metric/:metric/impact-summary': {
      $get: {
        input: {
          param: {
            site_id: string
            scope: 'site' | 'ap' | 'switch' | 'gateway' | 'client'
            scope_id: string
            metric: string
          }
        } & {
          query: {
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
            fields?:
              | 'wlan'
              | 'device_type'
              | 'device_os'
              | 'band'
              | 'ap'
              | 'server'
              | 'mxedge'
              | 'switch'
              | 'client'
              | 'vlan'
              | 'interface'
              | 'chassis'
              | 'gateway'
              | 'peer_path'
              | 'gateway_zones'
              | undefined
            classifier?: string | undefined
          }
        }
        output: SleImpactSummary
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/sle/:scope/:scope_id/metric/:metric/impacted-applications': {
      $get: {
        input: {
          param: {
            site_id: string
            scope: 'site' | 'switch' | 'gateway'
            scope_id: string
            metric: string
          }
        } & {
          query: {
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
            classifier?: string | undefined
          }
        }
        output: SleImpactedApplications
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/sle/:scope/:scope_id/metric/:metric/impacted-aps': {
      $get: {
        input: { param: { site_id: string; scope: 'site'; scope_id: string; metric: string } } & {
          query: {
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
            classifier?: string | undefined
          }
        }
        output: SleImpactedAps
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/sle/:scope/:scope_id/metric/:metric/impacted-chassis': {
      $get: {
        input: {
          param: {
            site_id: string
            scope: 'site' | 'switch' | 'gateway'
            scope_id: string
            metric: string
          }
        } & {
          query: {
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
            classifier?: string | undefined
          }
        }
        output: SleImpactedChassis
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/sle/:scope/:scope_id/metric/:metric/impacted-clients': {
      $get: {
        input: {
          param: {
            site_id: string
            scope: 'site' | 'switch' | 'gateway'
            scope_id: string
            metric: string
          }
        } & {
          query: {
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
            classifier?: string | undefined
          }
        }
        output: SleImpactedClients
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/sle/:scope/:scope_id/metric/:metric/impacted-gateways': {
      $get: {
        input: { param: { site_id: string; scope: 'site'; scope_id: string; metric: string } } & {
          query: {
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
            classifier?: string | undefined
          }
        }
        output: SleImpactedGateways
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/sle/:scope/:scope_id/metric/:metric/impacted-interfaces': {
      $get: {
        input: {
          param: {
            site_id: string
            scope: 'site' | 'switch' | 'gateway'
            scope_id: string
            metric: string
          }
        } & {
          query: {
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
            classifier?: string | undefined
          }
        }
        output: SleImpactedInterfaces
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/sle/:scope/:scope_id/metric/:metric/impacted-switches': {
      $get: {
        input: { param: { site_id: string; scope: 'site'; scope_id: string; metric: string } } & {
          query: {
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
            classifier?: string | undefined
          }
        }
        output: SleImpactedSwitches
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/sle/:scope/:scope_id/metric/:metric/impacted-users': {
      $get: {
        input: {
          param: { site_id: string; scope: 'site' | 'ap'; scope_id: string; metric: string }
        } & {
          query: {
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
            classifier?: string | undefined
          }
        }
        output: SleImpactedUsers
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/sle/:scope/:scope_id/metric/:metric/summary': {
      $get: {
        input: {
          param: {
            site_id: string
            scope: 'site' | 'ap' | 'switch' | 'gateway' | 'client'
            scope_id: string
            metric: string
          }
        } & {
          query: {
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: SleSummary
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/sle/:scope/:scope_id/metric/:metric/threshold': {
      $get: {
        input: {
          param: {
            site_id: string
            scope: 'site' | 'ap' | 'switch' | 'gateway' | 'client'
            scope_id: string
            metric: string
          }
        }
        output: SleThreshold
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          param: {
            site_id: string
            scope: 'site' | 'ap' | 'switch' | 'gateway' | 'client'
            scope_id: string
            metric: string
          }
        } & { json: SleThreshold }
        output: SleThreshold
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: {
          param: {
            site_id: string
            scope: 'site' | 'ap' | 'switch' | 'gateway' | 'client'
            scope_id: string
            metric: string
          }
        } & { json: SleThreshold }
        output: SleThreshold
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/sle/:scope/:scope_id/metrics': {
      $get: {
        input: {
          param: {
            site_id: string
            scope: 'site' | 'ap' | 'switch' | 'gateway' | 'client'
            scope_id: string
          }
        }
        output: { enabled: string[]; supported: string[] }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/ssr/upgrade/:upgrade_id': {
      $get: {
        input: { param: { site_id: string; upgrade_id: string } }
        output: {
          channel: string
          device_type?: string | undefined
          id: string
          status: string
          targets: { failed: string[]; queued: string[]; success: string[]; upgrading: string[] }
          versions: { [x: string]: unknown }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/ssr/:device_id/upgrade': {
      $post: {
        input: { param: { site_id: string; device_id: string } } & {
          json: {
            channel?: 'stable' | 'beta' | 'alpha' | undefined
            reboot_at?: number | undefined
            start_time?: number | undefined
            version: string
          }
        }
        output: SsrUpgradeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/stats': {
      $get: {
        input: { param: { site_id: string } }
        output: StatsSite
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/stats/apps/count': {
      $get: {
        input: { param: { site_id: string } } & {
          query: {
            distinct?:
              | 'ap'
              | 'wcid'
              | 'ssid'
              | 'wlan_id app'
              | 'device_mac'
              | 'src_ip'
              | 'port_id'
              | 'app'
              | 'category'
              | 'service'
              | undefined
            device_mac?: string | undefined
            app?: string | undefined
            wired?: string | undefined
          }
        }
        output: {
          distinct: string
          end: number
          limit: number
          results: { count: number }[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/stats/assets': {
      $get: {
        input: { param: { site_id: string } } & {
          query: {
            page?: number | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: StatsAsset[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/stats/assets/asset_id': {
      $get: {
        input: { param: { site_id: string } } & {
          query: {
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: StatsAsset
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/stats/assets/count': {
      $get: {
        input: { param: { site_id: string } } & {
          query: {
            distinct?:
              | 'mac'
              | 'map_id'
              | 'ibeacon_uuid'
              | 'ibeacon_major'
              | 'ibeacon_minor'
              | 'eddystone_uid_namespace'
              | 'eddystone_uid_instance'
              | 'eddystone_url'
              | 'by'
              | 'name'
              | 'device_name'
              | undefined
          }
        }
        output: {
          distinct: string
          end: number
          limit: number
          results: { count: number }[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/stats/assets/search': {
      $get: {
        input: { param: { site_id: string } } & {
          query: {
            mac?: string | undefined
            map_id?: string | undefined
            ibeacon_uuid?: string | undefined
            ibeacon_major?: number | undefined
            ibeacon_minor?: number | undefined
            eddystone_uid_namespace?: string | undefined
            eddystone_uid_instance?: string | undefined
            eddystone_url?: string | undefined
            device_name?: string | undefined
            by?: string | undefined
            name?: string | undefined
            ap_mac?: string | undefined
            beam?: string | undefined
            rssi?: string | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          end: number
          limit: number
          next?: string | undefined
          results: StatsAsset[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/stats/beacons': {
      $get: {
        input: { param: { site_id: string } } & {
          query: {
            page?: number | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: StatsBeacon[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/stats/bgp_peers/count': {
      $get: {
        input: { param: { site_id: string } } & {
          query: { state?: string | undefined; distinct?: string | undefined }
        }
        output: {
          distinct: string
          end: number
          limit: number
          results: { count: number }[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/stats/bgp_peers/search': {
      $get: {
        input: { param: { site_id: string } }
        output: {
          end?: number | undefined
          limit?: number | undefined
          results?: StatsBgp[] | undefined
          start?: number | undefined
          total?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/stats/calls/count': {
      $get: {
        input: { param: { site_id: string } } & {
          query: {
            distrinct?: 'mac' | undefined
            app?: string | undefined
            start?: string | undefined
            end?: string | undefined
          }
        }
        output: {
          distinct: string
          end: number
          limit: number
          results: { count: number }[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/stats/calls/search': {
      $get: {
        input: { param: { site_id: string } } & {
          query: {
            mac?: string | undefined
            app?: string | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          end?: number | undefined
          limit?: number | undefined
          next?: string | undefined
          results?: StatsCall[] | undefined
          start?: number | undefined
          total?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/stats/clients': {
      $get: {
        input: { param: { site_id: string } } & { query: { wired?: boolean | undefined } }
        output: (StatsClientDetail | StatsClientWired)[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/stats/clients/:client_mac': {
      $get: {
        input: { param: { site_id: string; client_mac: string } } & {
          query: { wired?: boolean | undefined }
        }
        output: StatsClientDetail | StatsClientWired
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/stats/devices': {
      $get: {
        input: { param: { site_id: string } } & {
          query: {
            page?: number | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
            type?: 'ap' | 'switch' | 'gateways' | 'all' | undefined
            status?: 'all' | 'connected' | 'disconnected' | undefined
          }
        }
        output: (StatsDeviceAp | StatsDeviceSwitch | StatsDeviceGateway)[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/stats/devices/:device_id': {
      $get: {
        input: { param: { site_id: string; device_id: string } }
        output: StatsDeviceAp | StatsDeviceSwitch | StatsDeviceGateway
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/stats/devices/:device_id/clients': {
      $get: {
        input: { param: { site_id: string; device_id: string } }
        output: StatsClient[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/stats/discovered_assets': {
      $get: {
        input: { param: { site_id: string } } & {
          query: {
            page?: number | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: Asset[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/stats/discovered_switch_metrics/search': {
      $get: {
        input: { param: { site_id: string } } & {
          query: {
            scope?: 'site' | 'switch' | undefined
            type?:
              | 'inactive_wired_vlans'
              | 'switch_ap_affinity'
              | 'poe_compliance'
              | 'version_compliance'
              | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          end: number
          limit: number
          next?: string | undefined
          results: {
            details?: { [x: string]: unknown } | undefined
            org_id?: string | undefined
            scope?: string | undefined
            score?: number | undefined
            site_id?: string | undefined
            timestamp?: number | undefined
            type?: string | undefined
          }[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/stats/discovered_switches/count': {
      $get: {
        input: { param: { site_id: string } } & {
          query: {
            distinct?: 'system_name' | 'version' | 'model' | 'mgmt_addr' | undefined
            page?: number | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          distinct: string
          end: number
          limit: number
          percentage: number
          results: { count: number; system_name: string }[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/stats/discovered_switches/metrics': {
      $get: {
        input: { param: { site_id: string } } & {
          query: { threshold?: string | undefined; system_name?: string | undefined }
        }
        output: {
          inactive_wired_vlans: { details: { [x: string]: unknown }; score: number }
          poe_compliance: { details: { total_aps: number; total_power: number }; score: number }
          switch_ap_affinity: {
            details: { system_name: string[]; threshold: number }
            score: number
          }
          version_compliance: {
            details: {
              major_versions: {
                major_count: number
                model: string
                system_names?: string[] | undefined
              }[]
              total_switch_count: number
            }
            score: number
          }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/stats/discovered_switches/search': {
      $get: {
        input: { param: { site_id: string } } & {
          query: {
            adopted?: boolean | undefined
            system_name?: string | undefined
            hostname?: string | undefined
            vendor?: string | undefined
            model?: string | undefined
            version?: string | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          end: number
          limit: number
          next?: string | undefined
          results: {
            adopted?: boolean | undefined
            aps?:
              | {
                  hostname?: string | undefined
                  mac?: string | undefined
                  poe_status?: boolean | undefined
                  port?: string | undefined
                  port_id?: string | undefined
                  power_draw?: number | undefined
                  when?: string | undefined
                }[]
              | undefined
            chassis_id?: string[] | undefined
            for_site?: boolean | undefined
            model: string
            org_id: string
            site_id: string
            system_desc: string
            system_name: string
            timestamp: number
            vendor: string
            version: string
          }[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/stats/filtered_assets': {
      $get: {
        input: { param: { site_id: string } } & {
          query: {
            duration?: string | undefined
            start?: number | undefined
            end?: number | undefined
            page?: number | undefined
            limit?: number | undefined
          }
        }
        output: AssetOfInterest[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/stats/gateways/metrics': {
      $get: {
        input: { param: { site_id: string } }
        output: {
          config_success?: number | undefined
          version_compliance?:
            | {
                major_version?:
                  | {
                      [x: string]: {
                        major_count?: number | undefined
                        major_version?: string | undefined
                      }
                    }
                  | undefined
                score?: number | undefined
                type?: string | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/stats/maps/:map_id/clients': {
      $get: {
        input: { param: { site_id: string; map_id: string } } & {
          query: {
            page?: number | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: StatsClient[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/stats/maps/:map_id/discovered_assets': {
      $get: {
        input: { param: { site_id: string; map_id: string } }
        output: StatsAsset[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/stats/maps/:map_id/sdkclients': {
      $get: {
        input: { param: { site_id: string; map_id: string } }
        output: StatsSdkclient[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/stats/maps/:map_id/unconnected_clients': {
      $get: {
        input: { param: { site_id: string; map_id: string } }
        output: StatsUnconnectedClients[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/stats/mxedges': {
      $get: {
        input: { param: { site_id: string } }
        output: StatsMxedge[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/stats/mxedges/:mxedge_id': {
      $get: {
        input: { param: { site_id: string; mxedge_id: string } }
        output: StatsMxedge
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/stats/ports/count': {
      $get: {
        input: { param: { site_id: string } } & {
          query: {
            distinct?:
              | 'port_id'
              | 'port_mac'
              | 'full_duplex'
              | 'mac'
              | 'neighbor_mac'
              | 'neighbor_port_desc'
              | 'neighbor_system_name'
              | 'poe_disabled'
              | 'poe_mode'
              | 'poe_on'
              | 'speed'
              | 'up'
              | undefined
            full_duplex?: boolean | undefined
            mac?: string | undefined
            neighbor_mac?: string | undefined
            neighbor_port_desc?: string | undefined
            neighbor_system_name?: string | undefined
            poe_disabled?: boolean | undefined
            poe_mode?: string | undefined
            poe_on?: boolean | undefined
            port_id?: string | undefined
            port_mac?: string | undefined
            power_draw?: number | undefined
            tx_pkts?: number | undefined
            rx_pkts?: number | undefined
            rx_bytes?: number | undefined
            tx_bps?: number | undefined
            rx_bps?: number | undefined
            tx_mcast_pkts?: number | undefined
            tx_bcast_pkts?: number | undefined
            rx_mcast_pkts?: number | undefined
            rx_bcast_pkts?: number | undefined
            speed?: number | undefined
            stp_state?:
              | 'forwarding'
              | 'blocking'
              | 'learning'
              | 'listening'
              | 'disabled'
              | undefined
            stp_role?: 'designated' | 'backup' | 'alternate' | 'root' | 'root-prevented' | undefined
            auth_state?: 'init' | 'authenticated' | 'authenticating' | 'held' | undefined
            up?: boolean | undefined
            page?: number | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          distinct: string
          end: number
          limit: number
          results: { count: number; mac: string }[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/stats/ports/search': {
      $get: {
        input: { param: { site_id: string } } & {
          query: {
            full_duplex?: boolean | undefined
            mac?: string | undefined
            neighbor_mac?: string | undefined
            neighbor_port_desc?: string | undefined
            neighbor_system_name?: string | undefined
            poe_disabled?: boolean | undefined
            poe_mode?: string | undefined
            poe_on?: boolean | undefined
            port_id?: string | undefined
            port_mac?: string | undefined
            power_draw?: number | undefined
            tx_pkts?: number | undefined
            rx_pkts?: number | undefined
            rx_bytes?: number | undefined
            tx_bps?: number | undefined
            rx_bps?: number | undefined
            tx_errors?: number | undefined
            rx_errors?: number | undefined
            tx_mcast_pkts?: number | undefined
            tx_bcast_pkts?: number | undefined
            rx_mcast_pkts?: number | undefined
            rx_bcast_pkts?: number | undefined
            speed?: number | undefined
            mac_limit?: number | undefined
            mac_count?: number | undefined
            up?: boolean | undefined
            stp_state?:
              | 'forwarding'
              | 'blocking'
              | 'learning'
              | 'listening'
              | 'disabled'
              | undefined
            stp_role?: 'designated' | 'backup' | 'alternate' | 'root' | 'root-prevented' | undefined
            xcvr_part_number?: string | undefined
            auth_state?: 'init' | 'authenticated' | 'authenticating' | 'held' | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          end: number
          limit: number
          results: StatsSwitchPort[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/stats/sdkclients/:sdkclient_id': {
      $get: {
        input: { param: { site_id: string; sdkclient_id: string } }
        output: StatsSdkclientDetails
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/stats/switch_ports/count': {
      $get: {
        input: { param: { site_id: string } } & {
          query: {
            distinct?:
              | 'port_id'
              | 'port_mac'
              | 'full_duplex'
              | 'mac'
              | 'neighbor_mac'
              | 'neighbor_port_desc'
              | 'neighbor_system_name'
              | 'poe_disabled'
              | 'poe_mode'
              | 'poe_on'
              | 'speed'
              | 'up'
              | undefined
            full_duplex?: boolean | undefined
            mac?: string | undefined
            neighbor_mac?: string | undefined
            neighbor_port_desc?: string | undefined
            neighbor_system_name?: string | undefined
            poe_disabled?: boolean | undefined
            poe_mode?: string | undefined
            poe_on?: boolean | undefined
            port_id?: string | undefined
            port_mac?: string | undefined
            power_draw?: number | undefined
            tx_pkts?: number | undefined
            rx_pkts?: number | undefined
            rx_bytes?: number | undefined
            tx_bps?: number | undefined
            rx_bps?: number | undefined
            tx_mcast_pkts?: number | undefined
            tx_bcast_pkts?: number | undefined
            rx_mcast_pkts?: number | undefined
            rx_bcast_pkts?: number | undefined
            speed?: number | undefined
            stp_state?:
              | 'forwarding'
              | 'blocking'
              | 'learning'
              | 'listening'
              | 'disabled'
              | undefined
            stp_role?: 'designated' | 'backup' | 'alternate' | 'root' | 'root-prevented' | undefined
            auth_state?: 'init' | 'authenticated' | 'authenticating' | 'held' | undefined
            up?: boolean | undefined
            page?: number | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          distinct: string
          end: number
          limit: number
          results: { count: number; mac: string }[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/stats/switch_ports/search': {
      $get: {
        input: { param: { site_id: string } } & {
          query: {
            full_duplex?: boolean | undefined
            mac?: string | undefined
            neighbor_mac?: string | undefined
            neighbor_port_desc?: string | undefined
            neighbor_system_name?: string | undefined
            poe_disabled?: boolean | undefined
            poe_mode?: string | undefined
            poe_on?: boolean | undefined
            port_id?: string | undefined
            port_mac?: string | undefined
            power_draw?: number | undefined
            tx_pkts?: number | undefined
            rx_pkts?: number | undefined
            rx_bytes?: number | undefined
            tx_bps?: number | undefined
            rx_bps?: number | undefined
            tx_mcast_pkts?: number | undefined
            tx_bcast_pkts?: number | undefined
            rx_mcast_pkts?: number | undefined
            rx_bcast_pkts?: number | undefined
            speed?: number | undefined
            stp_state?:
              | 'forwarding'
              | 'blocking'
              | 'learning'
              | 'listening'
              | 'disabled'
              | undefined
            stp_role?: 'designated' | 'backup' | 'alternate' | 'root' | 'root-prevented' | undefined
            auth_state?: 'init' | 'authenticated' | 'authenticating' | 'held' | undefined
            up?: boolean | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          end: number
          limit: number
          results: StatsSwitchPort[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/stats/switches/metrics': {
      $get: {
        input: { param: { site_id: string } }
        output: {
          version_compliance?:
            | {
                details?:
                  | {
                      major_versions?:
                        | {
                            major_count?: number | undefined
                            major_version?: string | undefined
                            model?: string | undefined
                            system_names?: { [x: string]: unknown }[] | undefined
                          }[]
                        | undefined
                    }
                  | undefined
                score?: number | undefined
                total_switch_count?: number | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/stats/wxrules': {
      $get: {
        input: { param: { site_id: string } }
        output: StatsWxrule[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/stats/zones': {
      $get: {
        input: { param: { site_id: string } } & { query: { map_id?: string | undefined } }
        output: StatsZone[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/stats/:zone_type/:zone_id': {
      $get: {
        input: { param: { site_id: string; zone_type: 'zones' | 'rssizones'; zone_id: string } }
        output: StatsZoneDetails
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/subscriptions': {
      $delete: {
        input: { param: { site_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { site_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/synthetic_test': {
      $get: {
        input: { param: { site_id: string } }
        output: {
          end_time?: number | undefined
          id?: string | undefined
          report_url?: string | undefined
          start_time?: number | undefined
          status?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { site_id: string } } & { json: { email?: string | undefined } }
        output: { email?: string | undefined; id?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/uisettings': {
      $get: {
        input: { param: { site_id: string } }
        output: CurdUiSettings[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { site_id: string } } & { json: CurdUiSettings }
        output: CurdUiSettings
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/uisettings/derived': {
      $get: {
        input: { param: { site_id: string } }
        output: CurdUiSettings
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/uisettings/:uisetting_id': {
      $delete: {
        input: { param: { site_id: string; uisetting_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { site_id: string; uisetting_id: string } }
        output: CurdUiSettings
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { site_id: string; uisetting_id: string } } & { json: CurdUiSettings }
        output: CurdUiSettings
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/vbeacons': {
      $get: {
        input: { param: { site_id: string } }
        output: Vbeacon[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { site_id: string } } & { json: Vbeacon }
        output: Vbeacon
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/vbeacons/:vbeacon_id': {
      $delete: {
        input: { param: { site_id: string; vbeacon_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { site_id: string; vbeacon_id: string } }
        output: Vbeacon
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { site_id: string; vbeacon_id: string } } & { json: Vbeacon }
        output: Vbeacon
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/webhooks': {
      $get: {
        input: { param: { site_id: string } }
        output: Webhook[]
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { site_id: string } } & { json: Webhook }
            output: Webhook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { site_id: string } } & { json: Webhook }
            output: { detail?: string | undefined; webhook_id?: string | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/v1/sites/:site_id/webhooks/:webhook_id': {
      $delete: {
        input: { param: { site_id: string; webhook_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { site_id: string; webhook_id: string } }
        output: Webhook
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { site_id: string; webhook_id: string } } & { json: Webhook }
        output: Webhook
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/webhooks/:webhook_id/ping': {
      $post: {
        input: { param: { site_id: string; webhook_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/wired_clients/count': {
      $get: {
        input: { param: { site_id: string } } & {
          query: {
            distinct?: 'port_id' | 'vlan' | 'mac' | undefined
            mac?: string | undefined
            device_mac?: string | undefined
            port_id?: string | undefined
            vlan?: string | undefined
            page?: number | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          distinct: string
          end: number
          limit: number
          results: { count: number }[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/wired_clients/search': {
      $get: {
        input: { param: { site_id: string } } & {
          query: {
            device_mac?: string | undefined
            mac?: string | undefined
            port_id?: string | undefined
            vlan?: string | undefined
            'ip address'?: string | undefined
            manufacture?: string | undefined
            text?: string | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          end: number
          limit: number
          next?: string | undefined
          results: WiredClientResponse[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/wlans': {
      $get: {
        input: { param: { site_id: string } }
        output: Wlan[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { site_id: string } } & { json: Wlan }
        output: Wlan
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/wlans/derived': {
      $get: {
        input: { param: { site_id: string } } & { query: { resolve?: boolean | undefined } }
        output: Wlan[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/wlans/:wlan_id': {
      $delete: {
        input: { param: { site_id: string; wlan_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { site_id: string; wlan_id: string } }
        output: Wlan
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { site_id: string; wlan_id: string } } & { json: Wlan }
        output: Wlan
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/wlans/:wlan_id/portal_image': {
      $post: {
        input: { param: { site_id: string; wlan_id: string } } & { form: ImageUpload }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/wlans/:wlan_id/portal_template': {
      $put: {
        input: { param: { site_id: string; wlan_id: string } } & { json: WlanPortalTemplate }
        output: PortalTemplate
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/wxrules': {
      $get: {
        input: { param: { site_id: string } }
        output: WxlanRule[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { site_id: string } } & { json: WxlanRule }
        output: WxlanRule
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/wxrules/derived': {
      $get: {
        input: { param: { site_id: string } }
        output: WxlanRule[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/wxrules/:wxrules_id': {
      $delete: {
        input: { param: { site_id: string; wxrules_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { site_id: string; wxrules_id: string } }
        output: WxlanRule
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { site_id: string; wxrules_id: string } } & { json: WxlanRule }
        output: WxlanRule
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/wxtags': {
      $get: {
        input: { param: { site_id: string } }
        output: WxlanTag[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { site_id: string } } & { json: WxlanTag }
        output: WxlanTag
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/wxtags/apps': {
      $get: {
        input: { param: { site_id: string } }
        output: { group: string; key: string; name: string }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/wxtags/:wxtag_id': {
      $delete: {
        input: { param: { site_id: string; wxtag_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { site_id: string; wxtag_id: string } }
        output: WxlanTag
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { site_id: string; wxtag_id: string } } & { json: WxlanTag }
        output: WxlanTag
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/wxtags/:wxtag_id/clients': {
      $get: {
        input: { param: { site_id: string; wxtag_id: string } }
        output: { mac: string; since: number }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/wxtunnels': {
      $get: {
        input: { param: { site_id: string } }
        output: WxlanTunnel[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { site_id: string } } & { json: WxlanTunnel }
        output: WxlanTunnel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/wxtunnels/:wxtunnel_id': {
      $delete: {
        input: { param: { site_id: string; wxtunnel_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { site_id: string; wxtunnel_id: string } }
        output: WxlanTunnel
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { site_id: string; wxtunnel_id: string } } & { json: WxlanTunnel }
        output: WxlanTunnel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/zones': {
      $get: {
        input: { param: { site_id: string } }
        output: Zone[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { site_id: string } } & { json: Zone }
        output: Zone
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/zones/:zone_id': {
      $delete: {
        input: { param: { site_id: string; zone_id: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { site_id: string; zone_id: string } }
        output: Zone
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { site_id: string; zone_id: string } } & { json: Zone }
        output: Zone
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/:zone_type/count': {
      $get: {
        input: { param: { site_id: string; zone_type: 'zones' | 'rssizones' } } & {
          query: {
            distinct?: 'user_type' | 'user' | 'scope_id' | 'scope' | undefined
            user_type?: 'client' | 'sdkclient' | 'asset' | undefined
            user?: string | undefined
            scope_id?: string | undefined
            scope?: 'site' | 'map' | 'zone' | 'rssizone' | undefined
            page?: number | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          end: number
          results: { count: number; scope_id: string }[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/sites/:site_id/:zone_type/visits/search': {
      $get: {
        input: { param: { site_id: string; zone_type: 'zones' | 'rssizones' } } & {
          query: {
            user_type?: 'client' | 'sdkclient' | 'asset' | undefined
            user?: string | undefined
            scope_id?: string | undefined
            scope?: 'site' | 'map' | 'zone' | 'rssizone' | undefined
            page?: number | undefined
            limit?: number | undefined
            start?: number | undefined
            end?: number | undefined
            duration?: string | undefined
          }
        }
        output: {
          end: number
          limit: number
          next: string
          results: { enter: number; scope: string; timestamp: number; user: string }[]
          start: number
          total: number
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/utils/test_telstra': {
      $get: {
        input: { json: { telstra_client_id: string; telstra_client_secret: string; to: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/utils/test_twilio': {
      $post: {
        input: { json: { from: string; to: string; twilio_auth_token: string; twilio_sid: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/webhook_example/_alarm_': {
      $post: {
        input: { json: WebhookAlarms }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/webhook_example/_asset_raw_': {
      $post: {
        input: { json: WebhookAssetRaw }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/webhook_example/_audit_': {
      $post: {
        input: { json: WebhookAudits }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/webhook_example/_client_join_': {
      $post: {
        input: { json: WebhookClientJoin }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/webhook_example/_client_sessions_': {
      $post: {
        input: { json: WebhookClientSessions }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/webhook_example/_device_events_': {
      $post: {
        input: { json: WebhookDeviceEvents }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/webhook_example/_device_updowns_': {
      $post: {
        input: { json: WebhookDeviceUpdowns }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/webhook_example/_discovered_raw_rssi_': {
      $post: {
        input: { json: WebhookDiscoveredRawRssi }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/webhook_example/_location_': {
      $post: {
        input: { json: WebhookLocation }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/webhook_example/_occupancy_alerts_': {
      $post: {
        input: { json: WebhookOccupancyAlerts }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/webhook_example/_ping_': {
      $post: {
        input: { json: WebhookPing }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/webhook_example/_sdkclient_scan_data': {
      $post: {
        input: { json: WebhookSdkclientScanData }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/webhook_example/_zone_': {
      $post: {
        input: { json: WebhookZone }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
