type AccessibilityRequest = { endpoint_enabled: boolean; hotword_enabled: boolean }
type Getcurrentvalues = { endpoint_enabled: boolean; hotword_enabled: boolean }
type DatePattern = { day: number; month: number; year: number }
type TimePattern = { hour: number; minute: number; second: number }
type Alarm = {
  date_pattern: DatePattern
  fire_time: number
  id: string
  status: number
  time_pattern: TimePattern
}
type Timer = { fire_time: bigint; id: string; original_duration: number; status: number }
type Example18 = { alarm: Alarm[]; timer: Timer[] }
type DeleteAlarmsandTimersRequest = { ids: string[] }
type Example19 = { success: boolean }
type AlarmVolumeRequest = { volume: number }
type Getvolume = { volume: number }
type CheckReadyStatusRequest = { play_ready_message: boolean; user_id: string }
type Example13 = {
  can_enroll: boolean
  enrollment_state: number
  error_code: number
  ready: boolean
  retryable: boolean
}
type Getcurrentstate = { notifications_enabled: boolean }
type Window = { days: number[]; length_hours: number; start_hour: number }
type NightModesettingsRequest = {
  demo_to_user: boolean
  do_not_disturb: boolean
  enabled: boolean
  led_brightness: number
  volume: number
  windows: Window[]
}
type Window2 = { days: number[]; length_hours: number; start_hour: number }
type Example17 = {
  do_not_disturb: boolean
  enabled: boolean
  led_brightness: number
  volume: number
  windows: Window2[]
}
type ForgetpaireddeviceRequest = { bond: boolean; mac_address: string }
type PairwithSpeakerRequest = { connect: boolean; mac_address: string; profile: number }
type ChangeDiscoverabilityRequest = { enable_discovery: boolean }
type Example111 = {
  bond_date: number
  device_class: number
  device_type: number
  last_connect_date: number
  mac_address: string
  name: string
  rssi: number
  service_uuids: string[]
}
type ScanfordevicesRequest = { clear_results: boolean; enable: boolean; timeout: number }
type Example112 = {
  device_class: number
  device_type: number
  expected_profiles: number
  mac_address: string
  name: string
  rssi: number
}
type Device = {
  bond_date: number
  device_class: number
  device_type: number
  last_connect_date: number
  mac_address: string
  name: string
  rssi: number
  service_uuids: string[]
}
type ConnectedDevice = { device: Device; enabled_profiles: number }
type RemoteSink = {
  bond_date: number
  device_class: number
  device_type: number
  last_connect_date: number
  mac_address: string
  name: string
  rssi: number
  service_uuids: string[]
}
type Example110 = {
  audio_mode: number
  connected_devices: ConnectedDevice[]
  connecting_devices: string[]
  discovery_enabled: boolean
  remote_sink: RemoteSink
  scanning_enabled: boolean
}
type Example113 = { ssid: string; wpa_auth: number; wpa_cipher: number; wpa_id: number }
type ConnecttoWiFiNetworkRequest = {
  bssid: string
  enc_passwd: string
  signal_level: number
  ssid: string
  wpa_auth: number
  wpa_cipher: number
}
type Aogh = { aogh_api_version: string }
type Audio = { digital: boolean }
type BuildInfo = {
  build_type: number
  cast_build_revision: string
  cast_control_version: number
  preview_channel_state: number
  release_track: string
  system_build_number: string
}
type IconList = { depth: number; height: number; mimetype: string; url: string; width: number }
type Locale = { display_string: string }
type Timezone = { display_string: string; offset: number }
type Detail = { icon_list: IconList[]; locale: Locale; timezone: Timezone }
type Capabilities = {
  aogh_supported: boolean
  assistant_supported: boolean
  audio_hdr_supported: boolean
  audio_surround_mode_supported: boolean
  ble_supported: boolean
  bluetooth_audio_sink_supported: boolean
  bluetooth_audio_source_supported: boolean
  bluetooth_supported: boolean
  cloudcast_supported: boolean
  content_filters_supported: boolean
  display_supported: boolean
  fdr_supported: boolean
  hdmi_prefer_50hz_supported: boolean
  hdmi_prefer_high_fps_supported: boolean
  hotspot_supported: boolean
  https_setup_supported: boolean
  input_management_supported: boolean
  keep_hotspot_until_connected_supported: boolean
  multi_user_supported: boolean
  multichannel_group_supported: boolean
  multizone_supported: boolean
  night_mode_supported: boolean
  night_mode_supported_v2: boolean
  opencast_supported: boolean
  preview_channel_supported: boolean
  reboot_supported: boolean
  remote_ducking_supported: boolean
  separate_tts_volume_supported: boolean
  setup_supported: boolean
  sleep_mode_supported: boolean
  stats_supported: boolean
  system_sound_effects_supported: boolean
  user_eq_supported: boolean
  wifi_auto_save_supported: boolean
  wifi_regulatory_domain_locked: boolean
  wifi_supported: boolean
}
type DeviceInfo = {
  '4k_blocked': number
  capabilities: Capabilities
  cloud_device_id: string
  factory_country_code: string
  hotspot_bssid: string
  local_authorization_token_hash: string
  mac_address: string
  manufacturer: string
  model_name: string
  product_name: string
  public_key: string
  ssdp_udn: string
  uma_client_id: string
  uptime: number
  weave_device_id: string
}
type Multizone = {
  audio_output_delay: number
  audio_output_delay_hdmi: number
  audio_output_delay_oem: number
  aux_in_group: string
  dynamic_groups: string[]
  groups: string[]
  multichannel_status: number
}
type Net = { ethernet_connected: boolean; ip_address: string; online: boolean }
type NightModeParams = {
  device_override_do_not_disturb: number
  do_not_disturb: boolean
  enabled: boolean
  led_brightness: number
  volume: number
  windows: Window[]
}
type Opencast = { pin_code: string }
type OptIn = {
  audio_hdr: boolean
  audio_surround_mode: number
  autoplay_on_signal: boolean
  cloud_ipc: boolean
  hdmi_prefer_50hz: boolean
  hdmi_prefer_high_fps: boolean
  managed_mode: boolean
  opencast: boolean
  preview_channel: boolean
  remote_ducking: boolean
  stats: boolean
  ui_flipped: boolean
  wpa3_support_enabled: boolean
}
type Proxy = { mode: string }
type Settings = {
  closed_caption: { [x: string]: unknown }
  control_notifications: number
  country_code: string
  locale: string
  network_standby: number
  system_sound_effects: boolean
  time_format: number
  timezone: string
  wake_on_cast: number
}
type Stats = {
  num_check_connectivity: number
  num_connect_wifi: number
  num_connected_wifi_not_saved: number
  num_initial_eureka_info: number
  num_obtain_ip: number
}
type Setup = {
  qr_ssid_suffix: string
  setup_state: number
  ssid_suffix: string
  stats: Stats
  tos_accepted: boolean
}
type Sign = {
  certificate: string
  intermediate_certs: string[]
  nonce: string
  signed_data: string
}
type HighShelf = { frequency: number; gain_db: number; quality: number }
type LowShelf = { frequency: number; gain_db: number; quality: number }
type UserEq = {
  high_shelf: HighShelf
  low_shelf: LowShelf
  max_peaking_eqs: number
  peaking_eqs: string[]
}
type Wifi = {
  bssid: string
  has_changes: boolean
  noise_level: number
  signal_level: number
  ssid: string
  wpa_configured: boolean
  wpa_id: number
  wpa_state: number
}
type Example1 = {
  aogh: Aogh
  audio: Audio
  build_info: BuildInfo
  detail: Detail
  device_info: DeviceInfo
  multizone: Multizone
  name: string
  net: Net
  night_mode_params: NightModeParams
  opencast: Opencast
  opt_in: OptIn
  proxy: Proxy
  settings: Settings
  setup: Setup
  sign: Sign
  user_eq: UserEq
  version: number
  wifi: Wifi
}
type ForgetWiFiNetworkRequest = { wpa_id: number }
type AppDeviceIDRequest = { app_id: string }
type Example11 = { app_device_id: string; certificate: string; signed_data: string }
type Example12 = { token: string }
type RebootandFactoryResetRequest = { params: string }
type Example114 = {
  bssid: string
  signal_level: number
  ssid: string
  wpa_auth: number
  wpa_cipher: number
  wpa_id: number
}
type OptIn1 = {
  opencast: boolean
  preview_channel: boolean
  remote_ducking: boolean
  stats: boolean
}
type Settings1 = { control_notifications: number }
type SetEurekaInfoRequest = { name: string; opt_in: OptIn1; settings: Settings1 }
type Example15 = { display_string: string; locale: string }
type Example14 = { display_string: string; offset: number; timezone: string }
type TestInternetDownloadSpeedRequest = { url: string }
type Example16 = {
  bytes_received: number
  response_code: number
  time_for_data_fetch: number
  time_for_http_response: number
}
type HighShelf1 = { gain_db: number }
type LowShelf1 = { gain_db: number }
type SetEqualizerValuesRequest = { high_shelf: HighShelf1; low_shelf: LowShelf1 }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/NOTICE.html.gz': { $get: { input: {}; output: string; outputFormat: 'text'; status: 200 } }
  } & {
    '/assistant/a11y_mode': {
      $post: {
        input: { json: AccessibilityRequest }
        output: Getcurrentvalues
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/assistant/alarms': {
      $get: { input: {}; output: Example18; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/assistant/alarms/delete': {
      $post: {
        input: { json: DeleteAlarmsandTimersRequest }
        output: Example19
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/assistant/alarms/volume': {
      $post: {
        input: { json: AlarmVolumeRequest }
        output: Getvolume
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/assistant/check_ready_status': {
      $post: {
        input: { json: CheckReadyStatusRequest }
        output: Example13
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/assistant/notifications': {
      $post: {
        input: { header: { 'Content-Type': string } }
        output: Getcurrentstate
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/assistant/set_night_mode_params': {
      $post: {
        input: { json: NightModesettingsRequest }
        output: Example17
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/bluetooth/bond': {
      $post: {
        input: { json: ForgetpaireddeviceRequest }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/bluetooth/connect': {
      $post: {
        input: { json: PairwithSpeakerRequest }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/bluetooth/discovery': {
      $post: {
        input: { json: ChangeDiscoverabilityRequest }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/bluetooth/get_bonded': {
      $get: { input: {}; output: Example111[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/bluetooth/scan': {
      $post: {
        input: { json: ScanfordevicesRequest }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/bluetooth/scan_results': {
      $get: { input: {}; output: Example112[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/bluetooth/status': {
      $get: { input: {}; output: Example110; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/configured_networks': {
      $get: { input: {}; output: Example113[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/connect_wifi': {
      $post: {
        input: { json: ConnecttoWiFiNetworkRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/eureka_info': {
      $get: {
        input: { query: { params: string; options: string; nonce: number } }
        output: Example1
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/forget_wifi': {
      $post: {
        input: { json: ForgetWiFiNetworkRequest }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/get_app_device_id': {
      $post:
        | {
            input: { json: AppDeviceIDRequest }
            output: Example11
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: AppDeviceIDRequest }; output: {}; outputFormat: string; status: 404 }
    }
  } & { '/icon.png': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/offer': { $get: { input: {}; output: Example12; outputFormat: 'json'; status: 200 } }
  } & {
    '/reboot': {
      $post: {
        input: { json: RebootandFactoryResetRequest }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/scan_results': {
      $get: { input: {}; output: Example114[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/scan_wifi': {
      $post: { input: {}; output: { [x: string]: unknown }; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/set_eureka_info': {
      $post: {
        input: { json: SetEurekaInfoRequest }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/supported_locales': {
      $get: { input: {}; output: Example15[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/supported_timezones': {
      $get: { input: {}; output: Example14[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/test_internet_download_speed': {
      $post: {
        input: { json: TestInternetDownloadSpeedRequest }
        output: Example16
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/user_eq/set_equalizer': {
      $post: {
        input: { json: SetEqualizerValuesRequest }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  },
  '/'
>
export default routes
