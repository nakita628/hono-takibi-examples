import { createRoute, z } from '@hono/zod-openapi'

const AccessibilityRequestSchema = z
  .object({ endpoint_enabled: z.boolean(), hotword_enabled: z.boolean() })
  .openapi({
    example: { endpoint_enabled: false, hotword_enabled: false },
    required: ['hotword_enabled', 'endpoint_enabled'],
    title: 'AccessibilityRequest',
  })
  .openapi('AccessibilityRequest')

const DatePatternSchema = z
  .object({ day: z.int32(), month: z.int32(), year: z.int32() })
  .openapi({
    example: { day: 15, month: 1, year: 2018 },
    required: ['day', 'month', 'year'],
    title: 'DatePattern',
  })
  .openapi('DatePattern')

const TimePatternSchema = z
  .object({ hour: z.int32(), minute: z.int32(), second: z.int32() })
  .openapi({
    example: { hour: 6, minute: 50, second: 0 },
    required: ['hour', 'minute', 'second'],
    title: 'TimePattern',
  })
  .openapi('TimePattern')

const AlarmSchema = z
  .object({
    date_pattern: DatePatternSchema,
    fire_time: z.number(),
    id: z.string(),
    status: z.int32(),
    time_pattern: TimePatternSchema,
  })
  .openapi({
    example: {
      date_pattern: { day: 15, month: 1, year: 2018 },
      fire_time: 1515995400000,
      id: 'alarm/xxx',
      status: 1,
      time_pattern: { hour: 6, minute: 50, second: 0 },
    },
    required: ['date_pattern', 'time_pattern', 'fire_time', 'id', 'status'],
    title: 'Alarm',
  })
  .openapi('Alarm')

const AlarmVolumeRequestSchema = z
  .object({ volume: z.int32() })
  .openapi({ example: { volume: 1 }, required: ['volume'], title: 'AlarmVolumeRequest' })
  .openapi('AlarmVolumeRequest')

const AoghSchema = z
  .object({ aogh_api_version: z.string() })
  .openapi({ example: { aogh_api_version: '2' }, required: ['aogh_api_version'], title: 'Aogh' })
  .openapi('Aogh')

const AppDeviceIDRequestSchema = z
  .object({ app_id: z.string() })
  .openapi({ example: { app_id: 'E8C28D3C' }, required: ['app_id'], title: 'AppDeviceIDRequest' })
  .openapi('AppDeviceIDRequest')

const AudioSchema = z
  .object({ digital: z.boolean() })
  .openapi({ example: { digital: false }, required: ['digital'], title: 'Audio' })
  .openapi('Audio')

const BuildInfoSchema = z
  .object({
    build_type: z.int32(),
    cast_build_revision: z.string(),
    cast_control_version: z.int32(),
    preview_channel_state: z.int32(),
    release_track: z.string(),
    system_build_number: z.string(),
  })
  .openapi({
    example: {
      build_type: 2,
      cast_build_revision: '1.46.195690',
      cast_control_version: 1,
      preview_channel_state: 4,
      release_track: 'preview-joining-stable-channel',
      system_build_number: '195690',
    },
    required: [
      'build_type',
      'cast_build_revision',
      'cast_control_version',
      'preview_channel_state',
      'release_track',
      'system_build_number',
    ],
    title: 'BuildInfo',
  })
  .openapi('BuildInfo')

const CapabilitiesSchema = z
  .object({
    aogh_supported: z.boolean(),
    assistant_supported: z.boolean(),
    audio_hdr_supported: z.boolean(),
    audio_surround_mode_supported: z.boolean(),
    ble_supported: z.boolean(),
    bluetooth_audio_sink_supported: z.boolean(),
    bluetooth_audio_source_supported: z.boolean(),
    bluetooth_supported: z.boolean(),
    cloudcast_supported: z.boolean(),
    content_filters_supported: z.boolean(),
    display_supported: z.boolean(),
    fdr_supported: z.boolean(),
    hdmi_prefer_50hz_supported: z.boolean(),
    hdmi_prefer_high_fps_supported: z.boolean(),
    hotspot_supported: z.boolean(),
    https_setup_supported: z.boolean(),
    input_management_supported: z.boolean(),
    keep_hotspot_until_connected_supported: z.boolean(),
    multi_user_supported: z.boolean(),
    multichannel_group_supported: z.boolean(),
    multizone_supported: z.boolean(),
    night_mode_supported: z.boolean(),
    night_mode_supported_v2: z.boolean(),
    opencast_supported: z.boolean(),
    preview_channel_supported: z.boolean(),
    reboot_supported: z.boolean(),
    remote_ducking_supported: z.boolean(),
    separate_tts_volume_supported: z.boolean(),
    setup_supported: z.boolean(),
    sleep_mode_supported: z.boolean(),
    stats_supported: z.boolean(),
    system_sound_effects_supported: z.boolean(),
    user_eq_supported: z.boolean(),
    wifi_auto_save_supported: z.boolean(),
    wifi_regulatory_domain_locked: z.boolean(),
    wifi_supported: z.boolean(),
  })
  .openapi({
    example: {
      aogh_supported: true,
      assistant_supported: true,
      audio_hdr_supported: false,
      audio_surround_mode_supported: false,
      ble_supported: true,
      bluetooth_audio_sink_supported: true,
      bluetooth_audio_source_supported: true,
      bluetooth_supported: true,
      cloudcast_supported: true,
      content_filters_supported: true,
      display_supported: false,
      fdr_supported: false,
      hdmi_prefer_50hz_supported: false,
      hdmi_prefer_high_fps_supported: false,
      hotspot_supported: true,
      https_setup_supported: true,
      input_management_supported: true,
      keep_hotspot_until_connected_supported: true,
      multi_user_supported: true,
      multichannel_group_supported: true,
      multizone_supported: true,
      night_mode_supported: true,
      night_mode_supported_v2: true,
      opencast_supported: false,
      preview_channel_supported: true,
      reboot_supported: true,
      remote_ducking_supported: true,
      separate_tts_volume_supported: true,
      setup_supported: true,
      sleep_mode_supported: true,
      stats_supported: true,
      system_sound_effects_supported: false,
      user_eq_supported: true,
      wifi_auto_save_supported: true,
      wifi_regulatory_domain_locked: true,
      wifi_supported: true,
    },
    required: [
      'aogh_supported',
      'assistant_supported',
      'audio_hdr_supported',
      'audio_surround_mode_supported',
      'ble_supported',
      'bluetooth_audio_sink_supported',
      'bluetooth_audio_source_supported',
      'bluetooth_supported',
      'cloudcast_supported',
      'content_filters_supported',
      'display_supported',
      'fdr_supported',
      'hdmi_prefer_50hz_supported',
      'hdmi_prefer_high_fps_supported',
      'hotspot_supported',
      'https_setup_supported',
      'input_management_supported',
      'keep_hotspot_until_connected_supported',
      'multi_user_supported',
      'multichannel_group_supported',
      'multizone_supported',
      'night_mode_supported',
      'night_mode_supported_v2',
      'opencast_supported',
      'preview_channel_supported',
      'reboot_supported',
      'remote_ducking_supported',
      'separate_tts_volume_supported',
      'setup_supported',
      'sleep_mode_supported',
      'stats_supported',
      'system_sound_effects_supported',
      'user_eq_supported',
      'wifi_auto_save_supported',
      'wifi_regulatory_domain_locked',
      'wifi_supported',
    ],
    title: 'Capabilities',
  })
  .openapi('Capabilities')

const ChangeDiscoverabilityRequestSchema = z
  .object({ enable_discovery: z.boolean() })
  .openapi({
    example: { enable_discovery: true },
    required: ['enable_discovery'],
    title: 'ChangeDiscoverabilityRequest',
  })
  .openapi('ChangeDiscoverabilityRequest')

const CheckReadyStatusRequestSchema = z
  .object({ play_ready_message: z.boolean(), user_id: z.string() })
  .openapi({
    example: { play_ready_message: true, user_id: 'xxxxx' },
    required: ['play_ready_message', 'user_id'],
    title: 'CheckReadyStatusRequest',
  })
  .openapi('CheckReadyStatusRequest')

const DeviceSchema = z
  .object({
    bond_date: z.number(),
    device_class: z.int32(),
    device_type: z.int32(),
    last_connect_date: z.int32(),
    mac_address: z.string(),
    name: z.string(),
    rssi: z.int32(),
    service_uuids: z.array(z.string()),
  })
  .openapi({
    example: {
      bond_date: 1529248165656.613,
      device_class: 2491396,
      device_type: 1,
      last_connect_date: 0,
      mac_address: 'xx:xx:xx:xx:xx:xx',
      name: 'PHILIPS BT64',
      rssi: -255,
      service_uuids: [
        'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
        'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
        'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
        'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
        'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
        'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
      ],
    },
    required: [
      'bond_date',
      'device_class',
      'device_type',
      'last_connect_date',
      'mac_address',
      'name',
      'rssi',
      'service_uuids',
    ],
    title: 'Device',
  })
  .openapi('Device')

const ConnectedDeviceSchema = z
  .object({ device: DeviceSchema, enabled_profiles: z.int32() })
  .openapi({
    example: {
      device: {
        bond_date: 1529248165656.613,
        device_class: 2491396,
        device_type: 1,
        last_connect_date: 0,
        mac_address: 'xx:xx:xx:xx:xx:xx',
        name: 'PHILIPS BT64',
        rssi: -255,
        service_uuids: [
          'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
          'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
          'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
          'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
          'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
          'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
        ],
      },
      enabled_profiles: 2,
    },
    required: ['device', 'enabled_profiles'],
    title: 'ConnectedDevice',
  })
  .openapi('ConnectedDevice')

const ConnecttoWiFiNetworkRequestSchema = z
  .object({
    bssid: z.string(),
    enc_passwd: z.string(),
    signal_level: z.int32(),
    ssid: z.string(),
    wpa_auth: z.int32(),
    wpa_cipher: z.int32(),
  })
  .openapi({
    example: {
      bssid: '5c:0a:xx:xx:xx:xx',
      enc_passwd: 'xxxxxfPY=',
      signal_level: -42,
      ssid: 'myotherssid',
      wpa_auth: 7,
      wpa_cipher: 4,
    },
    required: ['bssid', 'signal_level', 'ssid', 'wpa_auth', 'wpa_cipher', 'enc_passwd'],
    title: 'ConnecttoWi-FiNetworkRequest',
  })
  .openapi('ConnecttoWiFiNetworkRequest')

const DeleteAlarmsandTimersRequestSchema = z
  .object({ ids: z.array(z.string()) })
  .openapi({
    example: { ids: ['timer/xxx', 'alarm/xxx'] },
    required: ['ids'],
    title: 'DeleteAlarmsandTimersRequest',
  })
  .openapi('DeleteAlarmsandTimersRequest')

const IconListSchema = z
  .object({
    depth: z.int32(),
    height: z.int32(),
    mimetype: z.string(),
    url: z.string(),
    width: z.int32(),
  })
  .openapi({
    example: { depth: 32, height: 55, mimetype: 'image/png', url: '/setup/icon.png', width: 98 },
    required: ['depth', 'height', 'mimetype', 'url', 'width'],
    title: 'IconList',
  })
  .openapi('IconList')

const LocaleSchema = z
  .object({ display_string: z.string() })
  .openapi({
    example: { display_string: 'English (United States)' },
    required: ['display_string'],
    title: 'Locale',
  })
  .openapi('Locale')

const TimezoneSchema = z
  .object({ display_string: z.string(), offset: z.int32() })
  .openapi({
    example: { display_string: 'India Standard Time (Kolkata)', offset: 330 },
    required: ['display_string', 'offset'],
    title: 'Timezone',
  })
  .openapi('Timezone')

const DetailSchema = z
  .object({ icon_list: z.array(IconListSchema), locale: LocaleSchema, timezone: TimezoneSchema })
  .openapi({
    example: {
      icon_list: [
        { depth: 32, height: 55, mimetype: 'image/png', url: '/setup/icon.png', width: 98 },
      ],
      locale: { display_string: 'English (United States)' },
      timezone: { display_string: 'India Standard Time (Kolkata)', offset: 330 },
    },
    required: ['icon_list', 'locale', 'timezone'],
    title: 'Detail',
  })
  .openapi('Detail')

const DeviceInfoSchema = z
  .object({
    '4k_blocked': z.int32(),
    capabilities: CapabilitiesSchema,
    cloud_device_id: z.string(),
    factory_country_code: z.string(),
    hotspot_bssid: z.string(),
    local_authorization_token_hash: z.string(),
    mac_address: z.string(),
    manufacturer: z.string(),
    model_name: z.string(),
    product_name: z.string(),
    public_key: z.string(),
    ssdp_udn: z.string(),
    uma_client_id: z.string(),
    uptime: z.number(),
    weave_device_id: z.string(),
  })
  .openapi({
    example: {
      '4k_blocked': 0,
      capabilities: {
        aogh_supported: true,
        assistant_supported: true,
        audio_hdr_supported: false,
        audio_surround_mode_supported: false,
        ble_supported: true,
        bluetooth_audio_sink_supported: true,
        bluetooth_audio_source_supported: true,
        bluetooth_supported: true,
        cloudcast_supported: true,
        content_filters_supported: true,
        display_supported: false,
        fdr_supported: false,
        hdmi_prefer_50hz_supported: false,
        hdmi_prefer_high_fps_supported: false,
        hotspot_supported: true,
        https_setup_supported: true,
        input_management_supported: true,
        keep_hotspot_until_connected_supported: true,
        multi_user_supported: true,
        multichannel_group_supported: true,
        multizone_supported: true,
        night_mode_supported: true,
        night_mode_supported_v2: true,
        opencast_supported: false,
        preview_channel_supported: true,
        reboot_supported: true,
        remote_ducking_supported: true,
        separate_tts_volume_supported: true,
        setup_supported: true,
        sleep_mode_supported: true,
        stats_supported: true,
        system_sound_effects_supported: false,
        user_eq_supported: true,
        wifi_auto_save_supported: true,
        wifi_regulatory_domain_locked: true,
        wifi_supported: true,
      },
      cloud_device_id: '003D...',
      factory_country_code: 'US',
      hotspot_bssid: 'FA:8F:CA:30:41:71',
      local_authorization_token_hash: 'hBt2...',
      mac_address: 'F4:F5:...',
      manufacturer: 'Google Inc.',
      model_name: 'Google Home',
      product_name: 'pineapple',
      public_key: 'MIIB...',
      ssdp_udn: 'baab...',
      uma_client_id: '8ce0...',
      uptime: 48509.169282,
      weave_device_id: '',
    },
    required: [
      '4k_blocked',
      'capabilities',
      'cloud_device_id',
      'factory_country_code',
      'hotspot_bssid',
      'local_authorization_token_hash',
      'mac_address',
      'manufacturer',
      'model_name',
      'product_name',
      'public_key',
      'ssdp_udn',
      'uma_client_id',
      'uptime',
      'weave_device_id',
    ],
    title: 'DeviceInfo',
  })
  .openapi('DeviceInfo')

const MultizoneSchema = z
  .object({
    audio_output_delay: z.int32(),
    audio_output_delay_hdmi: z.int32(),
    audio_output_delay_oem: z.int32(),
    aux_in_group: z.string(),
    dynamic_groups: z.array(z.string()),
    groups: z.array(z.string()),
    multichannel_status: z.int32(),
  })
  .openapi({
    example: {
      audio_output_delay: 0,
      audio_output_delay_hdmi: 0,
      audio_output_delay_oem: 0,
      aux_in_group: '',
      dynamic_groups: [],
      groups: [],
      multichannel_status: 0,
    },
    required: [
      'audio_output_delay',
      'audio_output_delay_hdmi',
      'audio_output_delay_oem',
      'aux_in_group',
      'dynamic_groups',
      'groups',
      'multichannel_status',
    ],
    title: 'Multizone',
  })
  .openapi('Multizone')

const NetSchema = z
  .object({ ethernet_connected: z.boolean(), ip_address: z.string(), online: z.boolean() })
  .openapi({
    example: { ethernet_connected: false, ip_address: '192.168.0.18', online: true },
    required: ['ethernet_connected', 'ip_address', 'online'],
    title: 'Net',
  })
  .openapi('Net')

const WindowSchema = z
  .object({ days: z.array(z.int32()), length_hours: z.int32(), start_hour: z.int32() })
  .openapi({
    example: { days: [0, 1, 2, 3, 4, 5, 6], length_hours: 6, start_hour: 23 },
    required: ['days', 'length_hours', 'start_hour'],
    title: 'Window',
  })
  .openapi('Window')

const NightModeParamsSchema = z
  .object({
    device_override_do_not_disturb: z.int32(),
    do_not_disturb: z.boolean(),
    enabled: z.boolean(),
    led_brightness: z.number(),
    volume: z.number(),
    windows: z.array(WindowSchema),
  })
  .openapi({
    example: {
      device_override_do_not_disturb: 0,
      do_not_disturb: true,
      enabled: true,
      led_brightness: 0.5799999833106995,
      volume: 0.5899999737739563,
      windows: [{ days: [0, 1, 2, 3, 4, 5, 6], length_hours: 6, start_hour: 23 }],
    },
    required: [
      'device_override_do_not_disturb',
      'do_not_disturb',
      'enabled',
      'led_brightness',
      'volume',
      'windows',
    ],
    title: 'NightModeParams',
  })
  .openapi('NightModeParams')

const OpencastSchema = z
  .object({ pin_code: z.string() })
  .openapi({ example: { pin_code: '' }, required: ['pin_code'], title: 'Opencast' })
  .openapi('Opencast')

const OptInSchema = z
  .object({
    audio_hdr: z.boolean(),
    audio_surround_mode: z.int32(),
    autoplay_on_signal: z.boolean(),
    cloud_ipc: z.boolean(),
    hdmi_prefer_50hz: z.boolean(),
    hdmi_prefer_high_fps: z.boolean(),
    managed_mode: z.boolean(),
    opencast: z.boolean(),
    preview_channel: z.boolean(),
    remote_ducking: z.boolean(),
    stats: z.boolean(),
    ui_flipped: z.boolean(),
    wpa3_support_enabled: z.boolean(),
  })
  .openapi({
    example: {
      audio_hdr: false,
      audio_surround_mode: 0,
      autoplay_on_signal: true,
      cloud_ipc: true,
      hdmi_prefer_50hz: false,
      hdmi_prefer_high_fps: true,
      managed_mode: false,
      opencast: true,
      preview_channel: true,
      remote_ducking: true,
      stats: true,
      ui_flipped: false,
      wpa3_support_enabled: false,
    },
    required: [
      'audio_hdr',
      'audio_surround_mode',
      'autoplay_on_signal',
      'cloud_ipc',
      'hdmi_prefer_50hz',
      'hdmi_prefer_high_fps',
      'managed_mode',
      'opencast',
      'preview_channel',
      'remote_ducking',
      'stats',
      'ui_flipped',
      'wpa3_support_enabled',
    ],
    title: 'OptIn',
  })
  .openapi('OptIn')

const ProxySchema = z
  .object({ mode: z.string() })
  .openapi({ example: { mode: 'system' }, required: ['mode'], title: 'Proxy' })
  .openapi('Proxy')

const SettingsSchema = z
  .object({
    closed_caption: z.object({}),
    control_notifications: z.int32(),
    country_code: z.string(),
    locale: z.string(),
    network_standby: z.int32(),
    system_sound_effects: z.boolean(),
    time_format: z.int32(),
    timezone: z.string(),
    wake_on_cast: z.int32(),
  })
  .openapi({
    example: {
      closed_caption: {},
      control_notifications: 1,
      country_code: 'IN',
      locale: 'en-US',
      network_standby: 0,
      system_sound_effects: true,
      time_format: 1,
      timezone: 'Asia/Kolkata',
      wake_on_cast: 1,
    },
    required: [
      'closed_caption',
      'control_notifications',
      'country_code',
      'locale',
      'network_standby',
      'system_sound_effects',
      'time_format',
      'timezone',
      'wake_on_cast',
    ],
    title: 'Settings',
  })
  .openapi('Settings')

const StatsSchema = z
  .object({
    num_check_connectivity: z.int32(),
    num_connect_wifi: z.int32(),
    num_connected_wifi_not_saved: z.int32(),
    num_initial_eureka_info: z.int32(),
    num_obtain_ip: z.int32(),
  })
  .openapi({
    example: {
      num_check_connectivity: 0,
      num_connect_wifi: 0,
      num_connected_wifi_not_saved: 0,
      num_initial_eureka_info: 0,
      num_obtain_ip: 0,
    },
    required: [
      'num_check_connectivity',
      'num_connect_wifi',
      'num_connected_wifi_not_saved',
      'num_initial_eureka_info',
      'num_obtain_ip',
    ],
    title: 'Stats',
  })
  .openapi('Stats')

const SetupSchema = z
  .object({
    qr_ssid_suffix: z.string(),
    setup_state: z.int32(),
    ssid_suffix: z.string(),
    stats: StatsSchema,
    tos_accepted: z.boolean(),
  })
  .openapi({
    example: {
      qr_ssid_suffix: '',
      setup_state: 60,
      ssid_suffix: 'k',
      stats: {
        num_check_connectivity: 0,
        num_connect_wifi: 0,
        num_connected_wifi_not_saved: 0,
        num_initial_eureka_info: 0,
        num_obtain_ip: 0,
      },
      tos_accepted: true,
    },
    required: ['qr_ssid_suffix', 'setup_state', 'ssid_suffix', 'stats', 'tos_accepted'],
    title: 'Setup',
  })
  .openapi('Setup')

const SignSchema = z
  .object({
    certificate: z.string(),
    intermediate_certs: z.array(z.string()),
    nonce: z.string(),
    signed_data: z.string(),
  })
  .openapi({
    example: {
      certificate: '-----BEGIN CERTIFICATE-----\nMIID...Oeb0\n-----END CERTIFICATE-----\n',
      intermediate_certs: [
        '-----BEGIN CERTIFICATE-----\nMIID...O/bYS\n-----END CERTIFICATE-----\n',
      ],
      nonce: '1234512345',
      signed_data: 'Rr5Q...',
    },
    required: ['certificate', 'intermediate_certs', 'nonce', 'signed_data'],
    title: 'Sign',
  })
  .openapi('Sign')

const HighShelfSchema = z
  .object({ frequency: z.int32(), gain_db: z.int32(), quality: z.number() })
  .openapi({
    example: { frequency: 4500, gain_db: 0, quality: 0.707 },
    required: ['frequency', 'gain_db', 'quality'],
    title: 'HighShelf',
  })
  .openapi('HighShelf')

const LowShelfSchema = z
  .object({ frequency: z.int32(), gain_db: z.int32(), quality: z.number() })
  .openapi({
    example: { frequency: 150, gain_db: 0, quality: 0.707 },
    required: ['frequency', 'gain_db', 'quality'],
    title: 'LowShelf',
  })
  .openapi('LowShelf')

const UserEqSchema = z
  .object({
    high_shelf: HighShelfSchema,
    low_shelf: LowShelfSchema,
    max_peaking_eqs: z.int32(),
    peaking_eqs: z.array(z.string()),
  })
  .openapi({
    example: {
      high_shelf: { frequency: 4500, gain_db: 0, quality: 0.707 },
      low_shelf: { frequency: 150, gain_db: 0, quality: 0.707 },
      max_peaking_eqs: 0,
      peaking_eqs: [],
    },
    required: ['high_shelf', 'low_shelf', 'max_peaking_eqs', 'peaking_eqs'],
    title: 'UserEq',
  })
  .openapi('UserEq')

const WifiSchema = z
  .object({
    bssid: z.string(),
    has_changes: z.boolean(),
    noise_level: z.int32(),
    signal_level: z.int32(),
    ssid: z.string(),
    wpa_configured: z.boolean(),
    wpa_id: z.int32(),
    wpa_state: z.int32(),
  })
  .openapi({
    example: {
      bssid: 'a0:ab:...',
      has_changes: false,
      noise_level: -90,
      signal_level: -50,
      ssid: 'Nucl...',
      wpa_configured: true,
      wpa_id: 1,
      wpa_state: 10,
    },
    required: [
      'bssid',
      'has_changes',
      'noise_level',
      'signal_level',
      'ssid',
      'wpa_configured',
      'wpa_id',
      'wpa_state',
    ],
    title: 'Wifi',
  })
  .openapi('Wifi')

const Example1Schema = z
  .object({
    aogh: AoghSchema,
    audio: AudioSchema,
    build_info: BuildInfoSchema,
    detail: DetailSchema,
    device_info: DeviceInfoSchema,
    multizone: MultizoneSchema,
    name: z.string(),
    net: NetSchema,
    night_mode_params: NightModeParamsSchema,
    opencast: OpencastSchema,
    opt_in: OptInSchema,
    proxy: ProxySchema,
    settings: SettingsSchema,
    setup: SetupSchema,
    sign: SignSchema,
    user_eq: UserEqSchema,
    version: z.int32(),
    wifi: WifiSchema,
  })
  .openapi({
    example: {
      aogh: { aogh_api_version: '2' },
      audio: { digital: false },
      build_info: {
        build_type: 2,
        cast_build_revision: '1.46.195690',
        cast_control_version: 1,
        preview_channel_state: 4,
        release_track: 'preview-joining-stable-channel',
        system_build_number: '195690',
      },
      detail: {
        icon_list: [
          { depth: 32, height: 55, mimetype: 'image/png', url: '/setup/icon.png', width: 98 },
        ],
        locale: { display_string: 'English (United States)' },
        timezone: { display_string: 'India Standard Time (Kolkata)', offset: 330 },
      },
      device_info: {
        '4k_blocked': 0,
        capabilities: {
          aogh_supported: true,
          assistant_supported: true,
          audio_hdr_supported: false,
          audio_surround_mode_supported: false,
          ble_supported: true,
          bluetooth_audio_sink_supported: true,
          bluetooth_audio_source_supported: true,
          bluetooth_supported: true,
          cloudcast_supported: true,
          content_filters_supported: true,
          display_supported: false,
          fdr_supported: false,
          hdmi_prefer_50hz_supported: false,
          hdmi_prefer_high_fps_supported: false,
          hotspot_supported: true,
          https_setup_supported: true,
          input_management_supported: true,
          keep_hotspot_until_connected_supported: true,
          multi_user_supported: true,
          multichannel_group_supported: true,
          multizone_supported: true,
          night_mode_supported: true,
          night_mode_supported_v2: true,
          opencast_supported: false,
          preview_channel_supported: true,
          reboot_supported: true,
          remote_ducking_supported: true,
          separate_tts_volume_supported: true,
          setup_supported: true,
          sleep_mode_supported: true,
          stats_supported: true,
          system_sound_effects_supported: false,
          user_eq_supported: true,
          wifi_auto_save_supported: true,
          wifi_regulatory_domain_locked: true,
          wifi_supported: true,
        },
        cloud_device_id: '003D...',
        factory_country_code: 'US',
        hotspot_bssid: 'FA:8F:CA:30:41:71',
        local_authorization_token_hash: 'hBt2...',
        mac_address: 'F4:F5:...',
        manufacturer: 'Google Inc.',
        model_name: 'Google Home',
        product_name: 'pineapple',
        public_key: 'MIIB...',
        ssdp_udn: 'baab...',
        uma_client_id: '8ce0...',
        uptime: 48509.169282,
        weave_device_id: '',
      },
      multizone: {
        audio_output_delay: 0,
        audio_output_delay_hdmi: 0,
        audio_output_delay_oem: 0,
        aux_in_group: '',
        dynamic_groups: [],
        groups: [],
        multichannel_status: 0,
      },
      name: 'Bedroom Speaker',
      net: { ethernet_connected: false, ip_address: '192.168.0.18', online: true },
      night_mode_params: {
        device_override_do_not_disturb: 0,
        do_not_disturb: true,
        enabled: true,
        led_brightness: 0.5799999833106995,
        volume: 0.5899999737739563,
        windows: [{ days: [0, 1, 2, 3, 4, 5, 6], length_hours: 6, start_hour: 23 }],
      },
      opencast: { pin_code: '' },
      opt_in: {
        audio_hdr: false,
        audio_surround_mode: 0,
        autoplay_on_signal: true,
        cloud_ipc: true,
        hdmi_prefer_50hz: false,
        hdmi_prefer_high_fps: true,
        managed_mode: false,
        opencast: true,
        preview_channel: true,
        remote_ducking: true,
        stats: true,
        ui_flipped: false,
        wpa3_support_enabled: false,
      },
      proxy: { mode: 'system' },
      settings: {
        closed_caption: {},
        control_notifications: 1,
        country_code: 'IN',
        locale: 'en-US',
        network_standby: 0,
        system_sound_effects: true,
        time_format: 1,
        timezone: 'Asia/Kolkata',
        wake_on_cast: 1,
      },
      setup: {
        qr_ssid_suffix: '',
        setup_state: 60,
        ssid_suffix: 'k',
        stats: {
          num_check_connectivity: 0,
          num_connect_wifi: 0,
          num_connected_wifi_not_saved: 0,
          num_initial_eureka_info: 0,
          num_obtain_ip: 0,
        },
        tos_accepted: true,
      },
      sign: {
        certificate: '-----BEGIN CERTIFICATE-----\nMIID...Oeb0\n-----END CERTIFICATE-----\n',
        intermediate_certs: [
          '-----BEGIN CERTIFICATE-----\nMIID...O/bYS\n-----END CERTIFICATE-----\n',
        ],
        nonce: '1234512345',
        signed_data: 'Rr5Q...',
      },
      user_eq: {
        high_shelf: { frequency: 4500, gain_db: 0, quality: 0.707 },
        low_shelf: { frequency: 150, gain_db: 0, quality: 0.707 },
        max_peaking_eqs: 0,
        peaking_eqs: [],
      },
      version: 10,
      wifi: {
        bssid: 'a0:ab:...',
        has_changes: false,
        noise_level: -90,
        signal_level: -50,
        ssid: 'Nucl...',
        wpa_configured: true,
        wpa_id: 1,
        wpa_state: 10,
      },
    },
    required: [
      'aogh',
      'audio',
      'build_info',
      'detail',
      'device_info',
      'multizone',
      'name',
      'net',
      'night_mode_params',
      'opencast',
      'opt_in',
      'proxy',
      'settings',
      'setup',
      'sign',
      'user_eq',
      'version',
      'wifi',
    ],
    title: 'Example1',
  })
  .openapi('Example1')

const Example11Schema = z
  .object({ app_device_id: z.string(), certificate: z.string(), signed_data: z.string() })
  .openapi({
    example: {
      app_device_id: '...',
      certificate: '-----BEGIN CERTIFICATE-----\nMIID...Oeb0\n-----END CERTIFICATE-----\n',
      signed_data: 'HAjp...',
    },
    required: ['app_device_id', 'certificate', 'signed_data'],
    title: 'Example11',
  })
  .openapi('Example11')

const RemoteSinkSchema = z
  .object({
    bond_date: z.number(),
    device_class: z.int32(),
    device_type: z.int32(),
    last_connect_date: z.int32(),
    mac_address: z.string(),
    name: z.string(),
    rssi: z.int32(),
    service_uuids: z.array(z.string()),
  })
  .openapi({
    example: {
      bond_date: 1529248165656.613,
      device_class: 2491396,
      device_type: 1,
      last_connect_date: 0,
      mac_address: 'xx:xx:xx:xx:xx:xx',
      name: 'PHILIPS BT64',
      rssi: -255,
      service_uuids: [
        'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
        'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
        'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
        'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
        'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
        'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
      ],
    },
    required: [
      'bond_date',
      'device_class',
      'device_type',
      'last_connect_date',
      'mac_address',
      'name',
      'rssi',
      'service_uuids',
    ],
    title: 'RemoteSink',
  })
  .openapi('RemoteSink')

const Example110Schema = z
  .object({
    audio_mode: z.int32(),
    connected_devices: z.array(ConnectedDeviceSchema),
    connecting_devices: z.array(z.string()),
    discovery_enabled: z.boolean(),
    remote_sink: RemoteSinkSchema,
    scanning_enabled: z.boolean(),
  })
  .openapi({
    example: {
      audio_mode: 0,
      connected_devices: [
        {
          device: {
            bond_date: 1529248165656.613,
            device_class: 2491396,
            device_type: 1,
            last_connect_date: 0,
            mac_address: 'xx:xx:xx:xx:xx:xx',
            name: 'PHILIPS BT64',
            rssi: -255,
            service_uuids: [
              'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
              'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
              'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
              'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
              'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
              'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
            ],
          },
          enabled_profiles: 2,
        },
      ],
      connecting_devices: [],
      discovery_enabled: false,
      remote_sink: {
        bond_date: 1529248165656.613,
        device_class: 2491396,
        device_type: 1,
        last_connect_date: 0,
        mac_address: 'xx:xx:xx:xx:xx:xx',
        name: 'PHILIPS BT64',
        rssi: -255,
        service_uuids: [
          'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
          'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
          'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
          'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
          'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
          'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
        ],
      },
      scanning_enabled: false,
    },
    required: [
      'audio_mode',
      'connecting_devices',
      'connected_devices',
      'remote_sink',
      'discovery_enabled',
      'scanning_enabled',
    ],
    title: 'Example110',
  })
  .openapi('Example110')

const Example111Schema = z
  .object({
    bond_date: z.number(),
    device_class: z.int32(),
    device_type: z.int32(),
    last_connect_date: z.number(),
    mac_address: z.string(),
    name: z.string(),
    rssi: z.int32(),
    service_uuids: z.array(z.string()),
  })
  .openapi({
    example: {
      bond_date: 1503212407260.55,
      device_class: 5898764,
      device_type: 1,
      last_connect_date: 1514807829482.111,
      mac_address: 'xx:xx:xx:xx:xx:xx',
      name: 'Device Name',
      rssi: -255,
      service_uuids: [
        'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
        'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
      ],
    },
    required: [
      'bond_date',
      'device_class',
      'device_type',
      'last_connect_date',
      'mac_address',
      'name',
      'rssi',
      'service_uuids',
    ],
    title: 'Example111',
  })
  .openapi('Example111')

const Example112Schema = z
  .object({
    device_class: z.int32(),
    device_type: z.int32(),
    expected_profiles: z.int32(),
    mac_address: z.string(),
    name: z.string(),
    rssi: z.int32(),
  })
  .openapi({
    example: {
      device_class: 525372,
      device_type: 3,
      expected_profiles: 0,
      mac_address: 'xx:xx:xx:xx:xx:xx',
      name: 'KD-49X8200E',
      rssi: -90,
    },
    required: ['device_class', 'device_type', 'expected_profiles', 'mac_address', 'name', 'rssi'],
    title: 'Example112',
  })
  .openapi('Example112')

const Example113Schema = z
  .object({ ssid: z.string(), wpa_auth: z.int32(), wpa_cipher: z.int32(), wpa_id: z.int32() })
  .openapi({
    example: { ssid: 'Wifi name', wpa_auth: 7, wpa_cipher: 4, wpa_id: 0 },
    required: ['ssid', 'wpa_auth', 'wpa_cipher', 'wpa_id'],
    title: 'Example113',
  })
  .openapi('Example113')

const Example114Schema = z
  .object({
    bssid: z.string(),
    signal_level: z.int32(),
    ssid: z.string(),
    wpa_auth: z.int32(),
    wpa_cipher: z.int32(),
    wpa_id: z.int32(),
  })
  .openapi({
    example: {
      bssid: 'APBSSID1',
      signal_level: -20,
      ssid: 'APSSID1',
      wpa_auth: 7,
      wpa_cipher: 4,
      wpa_id: 0,
    },
    required: ['bssid', 'signal_level', 'ssid', 'wpa_auth', 'wpa_cipher', 'wpa_id'],
    title: 'Example114',
  })
  .openapi('Example114')

const Example12Schema = z
  .object({ token: z.string() })
  .openapi({ example: { token: 'ADtq...' }, required: ['token'], title: 'Example12' })
  .openapi('Example12')

const Example13Schema = z
  .object({
    can_enroll: z.boolean(),
    enrollment_state: z.int32(),
    error_code: z.int32(),
    ready: z.boolean(),
    retryable: z.boolean(),
  })
  .openapi({
    example: {
      can_enroll: true,
      enrollment_state: 0,
      error_code: 0,
      ready: false,
      retryable: true,
    },
    required: ['can_enroll', 'enrollment_state', 'error_code', 'ready', 'retryable'],
    title: 'Example13',
  })
  .openapi('Example13')

const Example14Schema = z
  .object({ display_string: z.string(), offset: z.int32(), timezone: z.string() })
  .openapi({
    example: {
      display_string: 'Samoa Standard Time (Midway)',
      offset: -660,
      timezone: 'Pacific/Midway',
    },
    required: ['display_string', 'offset', 'timezone'],
    title: 'Example14',
  })
  .openapi('Example14')

const Example15Schema = z
  .object({ display_string: z.string(), locale: z.string() })
  .openapi({
    example: { display_string: 'Amharic - አማርኛ', locale: 'am' },
    required: ['display_string', 'locale'],
    title: 'Example15',
  })
  .openapi('Example15')

const Example16Schema = z
  .object({
    bytes_received: z.int32(),
    response_code: z.int32(),
    time_for_data_fetch: z.int32(),
    time_for_http_response: z.int32(),
  })
  .openapi({
    example: {
      bytes_received: 31457280,
      response_code: 200,
      time_for_data_fetch: 4722,
      time_for_http_response: 316,
    },
    required: ['bytes_received', 'response_code', 'time_for_data_fetch', 'time_for_http_response'],
    title: 'Example16',
  })
  .openapi('Example16')

const Window2Schema = z
  .object({ days: z.array(z.int32()), length_hours: z.number(), start_hour: z.number() })
  .openapi({
    example: { days: [0, 1, 2, 3, 4, 5, 6], length_hours: 8, start_hour: 22 },
    required: ['days', 'length_hours', 'start_hour'],
    title: 'Window2',
  })
  .openapi('Window2')

const Example17Schema = z
  .object({
    do_not_disturb: z.boolean(),
    enabled: z.boolean(),
    led_brightness: z.number(),
    volume: z.number(),
    windows: z.array(Window2Schema),
  })
  .openapi({
    example: {
      do_not_disturb: true,
      enabled: false,
      led_brightness: 0.44999998807907104,
      volume: 0.46000000834465027,
      windows: [{ days: [0, 1, 2, 3, 4, 5, 6], length_hours: 8, start_hour: 22 }],
    },
    required: ['do_not_disturb', 'enabled', 'led_brightness', 'volume', 'windows'],
    title: 'Example17',
  })
  .openapi('Example17')

const TimerSchema = z
  .object({
    fire_time: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    id: z.string(),
    original_duration: z.int32(),
    status: z.int32(),
  })
  .openapi({
    example: { fire_time: 1516176765589, id: 'timer/xxx', original_duration: 20000, status: 1 },
    required: ['fire_time', 'id', 'original_duration', 'status'],
    title: 'Timer',
  })
  .openapi('Timer')

const Example18Schema = z
  .object({ alarm: z.array(AlarmSchema), timer: z.array(TimerSchema) })
  .openapi({
    example: {
      alarm: [
        {
          date_pattern: { day: 15, month: 1, year: 2018 },
          fire_time: 1515995400000,
          id: 'alarm/xxx',
          status: 1,
          time_pattern: { hour: 6, minute: 50, second: 0 },
        },
      ],
      timer: [{ fire_time: 1516176765589, id: 'timer/xxx', original_duration: 20000, status: 1 }],
    },
    required: ['alarm', 'timer'],
    title: 'Example18',
  })
  .openapi('Example18')

const Example19Schema = z
  .object({ success: z.boolean() })
  .openapi({ example: { success: true }, required: ['success'], title: 'Example19' })
  .openapi('Example19')

const ForgetWiFiNetworkRequestSchema = z
  .object({ wpa_id: z.int32() })
  .openapi({ example: { wpa_id: 0 }, required: ['wpa_id'], title: 'ForgetWi-FiNetworkRequest' })
  .openapi('ForgetWiFiNetworkRequest')

const ForgetpaireddeviceRequestSchema = z
  .object({ bond: z.boolean(), mac_address: z.string() })
  .openapi({
    example: { bond: false, mac_address: 'xx:xx:xx:xx:xx:xx' },
    required: ['mac_address', 'bond'],
    title: 'ForgetpaireddeviceRequest',
  })
  .openapi('ForgetpaireddeviceRequest')

const GetcurrentstateSchema = z
  .object({ notifications_enabled: z.boolean() })
  .openapi({
    example: { notifications_enabled: true },
    required: ['notifications_enabled'],
    title: 'Getcurrentstate',
  })
  .openapi('Getcurrentstate')

const GetcurrentvaluesSchema = z
  .object({ endpoint_enabled: z.boolean(), hotword_enabled: z.boolean() })
  .openapi({
    example: { endpoint_enabled: false, hotword_enabled: false },
    required: ['endpoint_enabled', 'hotword_enabled'],
    title: 'Getcurrentvalues',
  })
  .openapi('Getcurrentvalues')

const GetvolumeSchema = z
  .object({ volume: z.number() })
  .openapi({ example: { volume: 1 }, required: ['volume'], title: 'Getvolume' })
  .openapi('Getvolume')

const HighShelf1Schema = z
  .object({ gain_db: z.int32() })
  .openapi({ example: { gain_db: 0 }, required: ['gain_db'], title: 'HighShelf1' })
  .openapi('HighShelf1')

const LowShelf1Schema = z
  .object({ gain_db: z.int32() })
  .openapi({ example: { gain_db: 0 }, required: ['gain_db'], title: 'LowShelf1' })
  .openapi('LowShelf1')

const NightModesettingsRequestSchema = z
  .object({
    demo_to_user: z.boolean(),
    do_not_disturb: z.boolean(),
    enabled: z.boolean(),
    led_brightness: z.number(),
    volume: z.number(),
    windows: z.array(WindowSchema),
  })
  .openapi({
    example: {
      demo_to_user: true,
      do_not_disturb: true,
      enabled: false,
      led_brightness: 0.44999998807907104,
      volume: 0.46000000834465027,
      windows: [{ days: [0, 1, 2, 3, 4, 5, 6], length_hours: 8, start_hour: 22 }],
    },
    required: ['enabled', 'do_not_disturb', 'led_brightness', 'volume', 'demo_to_user', 'windows'],
    title: 'NightModesettingsRequest',
  })
  .openapi('NightModesettingsRequest')

const OptIn1Schema = z
  .object({
    opencast: z.boolean(),
    preview_channel: z.boolean(),
    remote_ducking: z.boolean(),
    stats: z.boolean(),
  })
  .openapi({
    example: { opencast: true, preview_channel: true, remote_ducking: true, stats: true },
    required: ['opencast', 'preview_channel', 'remote_ducking', 'stats'],
    title: 'OptIn1',
  })
  .openapi('OptIn1')

const PairwithSpeakerRequestSchema = z
  .object({ connect: z.boolean(), mac_address: z.string(), profile: z.int32() })
  .openapi({
    example: { connect: true, mac_address: '54:13:79:49:19:22', profile: 2 },
    required: ['mac_address', 'connect', 'profile'],
    title: 'PairwithSpeakerRequest',
  })
  .openapi('PairwithSpeakerRequest')

const RebootandFactoryResetRequestSchema = z
  .object({ params: z.string() })
  .openapi({
    example: { params: 'now' },
    required: ['params'],
    title: 'RebootandFactoryResetRequest',
  })
  .openapi('RebootandFactoryResetRequest')

const ScanfordevicesRequestSchema = z
  .object({ clear_results: z.boolean(), enable: z.boolean(), timeout: z.int32() })
  .openapi({
    example: { clear_results: true, enable: true, timeout: 60 },
    required: ['enable', 'clear_results', 'timeout'],
    title: 'ScanfordevicesRequest',
  })
  .openapi('ScanfordevicesRequest')

const SetEqualizerValuesRequestSchema = z
  .object({ high_shelf: HighShelf1Schema, low_shelf: LowShelf1Schema })
  .openapi({
    example: { high_shelf: { gain_db: 0 }, low_shelf: { gain_db: 0 } },
    required: ['low_shelf', 'high_shelf'],
    title: 'SetEqualizerValuesRequest',
  })
  .openapi('SetEqualizerValuesRequest')

const Settings1Schema = z
  .object({ control_notifications: z.int32() })
  .openapi({
    example: { control_notifications: 2 },
    required: ['control_notifications'],
    title: 'Settings1',
  })
  .openapi('Settings1')

const SetEurekaInfoRequestSchema = z
  .object({ name: z.string(), opt_in: OptIn1Schema, settings: Settings1Schema })
  .openapi({
    example: {
      name: 'Living Room',
      opt_in: { opencast: true, preview_channel: true, remote_ducking: true, stats: true },
      settings: { control_notifications: 2 },
    },
    required: ['name', 'settings', 'opt_in'],
    title: 'SetEurekaInfoRequest',
  })
  .openapi('SetEurekaInfoRequest')

const TestInternetDownloadSpeedRequestSchema = z
  .object({ url: z.string() })
  .openapi({
    example: { url: 'https://storage.googleapis.com/reliability-speedtest/random.txt' },
    required: ['url'],
    title: 'TestInternetDownloadSpeedRequest',
  })
  .openapi('TestInternetDownloadSpeedRequest')

const CastLocalAuthorizationTokenSecurityScheme = {
  description:
    'Local authorization token. For more details, check the [Authentication section](#section/Google-Home-Local-API/Authentication).',
  in: 'header',
  name: 'cast-local-authorization-token',
  type: 'apiKey',
  'x-testValue': '',
}

export const getNOTICEHtmlGzRoute = createRoute({
  method: 'get',
  path: '/NOTICE.html.gz',
  tags: ['Static Files'],
  summary: 'Legal Notice',
  description: 'All licenses of programs used by Home.',
  operationId: 'LegalNotice',
  responses: {
    200: {
      description: '',
      content: {
        'text/plain': {
          schema: z.string().openapi({ example: '<html><!-- a long page --></html>' }),
          example: '<html><!-- a long page --></html>',
        },
      },
      headers: z.object({}),
    },
  },
})

export const postAssistantA11yModeRoute = createRoute({
  method: 'post',
  path: '/assistant/a11y_mode',
  tags: ['Assistant'],
  summary: 'Accessibility',
  description:
    "This controls Accessibility sounds. `hotword_enabled` is for 'Play start sound' and `endpoint_enabled` is for 'Play end sound'.  \nSending an empty-body POST request returns the current values.  \nEither of the fields or both can be sent and new values will be saved.",
  operationId: 'Accessibility',
  request: {
    body: {
      content: {
        'application/json': {
          schema: AccessibilityRequestSchema,
          example: { endpoint_enabled: false, hotword_enabled: false },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: GetcurrentvaluesSchema,
          example: { endpoint_enabled: false, hotword_enabled: false },
        },
      },
      headers: z.object({}),
    },
  },
})

export const getAssistantAlarmsRoute = createRoute({
  method: 'get',
  path: '/assistant/alarms',
  tags: ['Assistant'],
  summary: 'Get Alarms and Timers',
  description:
    'This gives a list of all active alarms and timers.\n\nBoth alarms and timers have `id`s which can be used to delete them. (There is no known way of creating/deleting yet). The value of `status` have different meanings for alarms and timers (given below).\n\nAlarms have `date_pattern` and `time_pattern` with day, month, year, hour, minute, second. `fire_time` is the same in unix time (milliseconds, not seconds).  \n`status` is 1 for set up and 2 for ringing.\n\nTimers have `original_duration` is the original duration.  \n`status` is 1 for set up and 3 for ringing.',
  operationId: 'GetAlarmsandTimers',
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: Example18Schema,
          example: {
            alarm: [
              {
                date_pattern: { day: 15, month: 1, year: 2018 },
                fire_time: 1515995400000,
                id: 'alarm/xxx',
                status: 1,
                time_pattern: { hour: 6, minute: 50, second: 0 },
              },
            ],
            timer: [
              { fire_time: 1516176765589, id: 'timer/xxx', original_duration: 20000, status: 1 },
            ],
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const postAssistantAlarmsDeleteRoute = createRoute({
  method: 'post',
  path: '/assistant/alarms/delete',
  tags: ['Assistant'],
  summary: 'Delete Alarms and Timers',
  description:
    'This deletes alarms and timers by their id.\n\n`ids` is a list of ids to be deleted. Sending invalid id still returns a 200 OK. The `/` in the ids have to be escaped like `\\/`.',
  operationId: 'DeleteAlarmsandTimers',
  request: {
    body: {
      content: {
        'application/json': {
          schema: DeleteAlarmsandTimersRequestSchema,
          example: { ids: ['timer/xxx', 'alarm/xxx'] },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: Example19Schema, example: { success: true } } },
      headers: z.object({}),
    },
  },
})

export const postAssistantAlarmsVolumeRoute = createRoute({
  method: 'post',
  path: '/assistant/alarms/volume',
  tags: ['Assistant'],
  summary: 'Alarm Volume',
  description:
    'This gets and sets alarms and timers volume.  \n**Note:** This is not the same as normal volume.\n\nVolume is a float number in [0, 1] where 0 is minimum and 1 is maximum.  \nSending an empty body gets the volume. Sending `volume` sets the volume.',
  operationId: 'AlarmVolume',
  request: {
    body: {
      content: { 'application/json': { schema: AlarmVolumeRequestSchema, example: { volume: 1 } } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: GetvolumeSchema, example: { volume: 1 } } },
      headers: z.object({}),
    },
  },
})

export const postAssistantCheckReadyStatusRoute = createRoute({
  method: 'post',
  path: '/assistant/check_ready_status',
  tags: ['Device Info'],
  summary: 'Check Ready Status',
  description:
    '**Update:** This seems to have changed now and is no longer possible. The error is also new.\n\nSetting `play_ready_message` to true plays a welcome message on the device saying "Hi, I\'m your Google Assistant. I\'m here to help. To learn a few things you can do, continue in the Google Home app."',
  operationId: 'CheckReadyStatus',
  request: {
    body: {
      content: {
        'application/json': {
          schema: CheckReadyStatusRequestSchema,
          example: { play_ready_message: true, user_id: 'xxxxx' },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: Example13Schema,
          example: {
            can_enroll: true,
            enrollment_state: 0,
            error_code: 0,
            ready: false,
            retryable: true,
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const postAssistantNotificationsRoute = createRoute({
  method: 'post',
  path: '/assistant/notifications',
  tags: ['Assistant'],
  summary: 'Do Not Disturb',
  description:
    'This is for the Do Not Disturb option. Sending an empty-body POST returns the current value. Sending a new value changes it.',
  operationId: 'DoNotDisturb',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: {
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: GetcurrentstateSchema,
          example: { notifications_enabled: true },
        },
      },
      headers: z.object({}),
    },
  },
})

export const postAssistantSetNightModeParamsRoute = createRoute({
  method: 'post',
  path: '/assistant/set_night_mode_params',
  tags: ['Device Settings'],
  summary: 'Night Mode settings',
  description:
    'This sets night mode options.  \nTo view currently set values, use /setup/eureka_info.  \nIf `enabled` is set to false, night mode is disabled and the other values do not matter.  \n`led_brightness` and `volume` refer to the maximum LED Brightness and Volume that is set during night mode.  \n`demo_to_user` is always set to `true` so change in values will be visible in realtime (like brightness).  \n`windows`: A combination of `length_hours` and `start_hour` is used to define start and end times for night mode. In this example, night mode starts at 10 PM (22) and ends at 6 AM (8 hours later). `windows.days` is an array of days of week when night mode will be enabled. Example: 0->Sunday, 1-> Monday, ..., 6->Saturday.',
  operationId: 'NightModesettings',
  request: {
    body: {
      content: {
        'application/json': {
          schema: NightModesettingsRequestSchema,
          example: {
            demo_to_user: true,
            do_not_disturb: true,
            enabled: false,
            led_brightness: 0.44999998807907104,
            volume: 0.46000000834465027,
            windows: [{ days: [0, 1, 2, 3, 4, 5, 6], length_hours: 8, start_hour: 22 }],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: Example17Schema,
          example: {
            do_not_disturb: true,
            enabled: false,
            led_brightness: 0.44999998807907104,
            volume: 0.46000000834465027,
            windows: [{ days: [0, 1, 2, 3, 4, 5, 6], length_hours: 8, start_hour: 22 }],
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const postBluetoothBondRoute = createRoute({
  method: 'post',
  path: '/bluetooth/bond',
  tags: ['Bluetooth'],
  summary: 'Forget paired device',
  description:
    '*See note for Bluetooth under `/setup/bluetooth/status`*\n\n**For both parts**\n\nThis is to forget paired devices by mac address. Works for both kinds of devices (Part 1 and Part 2).',
  operationId: 'Forgetpaireddevice',
  request: {
    body: {
      content: {
        'application/json': {
          schema: ForgetpaireddeviceRequestSchema,
          example: { bond: false, mac_address: 'xx:xx:xx:xx:xx:xx' },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'text/plain': { schema: z.object({}).openapi({ 'x-is-dynamic': true }) } },
      headers: z.object({}),
    },
  },
})

export const postBluetoothConnectRoute = createRoute({
  method: 'post',
  path: '/bluetooth/connect',
  tags: ['Bluetooth'],
  summary: 'Pair with Speaker',
  description:
    '*See note for Bluetooth under `/setup/bluetooth/status`*\n\n**For Part 2 only**\n\nThis pairs with other bluetooth speakers by mac address.',
  operationId: 'PairwithSpeaker',
  request: {
    body: {
      content: {
        'application/json': {
          schema: PairwithSpeakerRequestSchema,
          example: { connect: true, mac_address: '54:13:79:49:19:22', profile: 2 },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'text/plain': { schema: z.object({}).openapi({ 'x-is-dynamic': true }) } },
      headers: z.object({}),
    },
  },
})

export const postBluetoothDiscoveryRoute = createRoute({
  method: 'post',
  path: '/bluetooth/discovery',
  tags: ['Bluetooth'],
  summary: 'Change Discoverability',
  description:
    "*See note for Bluetooth under `/setup/bluetooth/status`*\n\n**For Part 1 only**\n\nThis enables/disables Home's bluetooth discovery and other devices can pair with Home (where Home acts as a speaker).",
  operationId: 'ChangeDiscoverability',
  request: {
    body: {
      content: {
        'application/json': {
          schema: ChangeDiscoverabilityRequestSchema,
          example: { enable_discovery: true },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'text/plain': { schema: z.object({}).openapi({ 'x-is-dynamic': true }) } },
      headers: z.object({}),
    },
  },
})

export const getBluetoothGetBondedRoute = createRoute({
  method: 'get',
  path: '/bluetooth/get_bonded',
  tags: ['Bluetooth'],
  summary: 'Get Paired Devices',
  description:
    "*See note for Bluetooth under `/setup/bluetooth/status`*\n\n**For both parts**\n\nThis gives a list of all paired or 'bonded' devices. The response field names are self-descriptive.",
  operationId: 'GetPairedDevices',
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z.array(Example111Schema),
          example: [
            {
              bond_date: 1503212407260.55,
              device_class: 5898764,
              device_type: 1,
              last_connect_date: 1514807829482.111,
              mac_address: 'xx:xx:xx:xx:xx:xx',
              name: 'Device Name',
              rssi: -255,
              service_uuids: [
                'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
                'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
              ],
            },
          ],
        },
      },
      headers: z.object({}),
    },
  },
})

export const postBluetoothScanRoute = createRoute({
  method: 'post',
  path: '/bluetooth/scan',
  tags: ['Bluetooth'],
  summary: 'Scan for devices',
  description:
    '*See note for Bluetooth under `/setup/bluetooth/status`*\n\n**For Part 2 only**\n\nThis initiates scan for other bluetooth speakers/devices. Scan results will be updated continuously for `timeout` seconds.  \nTo get the scan results, see /setup/bluetooth/scan_results.',
  operationId: 'Scanfordevices',
  request: {
    body: {
      content: {
        'application/json': {
          schema: ScanfordevicesRequestSchema,
          example: { clear_results: true, enable: true, timeout: 60 },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'text/plain': { schema: z.object({}).openapi({ 'x-is-dynamic': true }) } },
      headers: z.object({}),
    },
  },
})

export const getBluetoothScanResultsRoute = createRoute({
  method: 'get',
  path: '/bluetooth/scan_results',
  tags: ['Bluetooth'],
  summary: 'Get Scan Results',
  description:
    '*See note for Bluetooth under `/setup/bluetooth/status`*\n\n**For Part 2 only**\n\nThis returns a list of all nearby bluetooth devices. While the Home app only shows speakers, this list contains all devices including TVs, mobiles, etc.\n\n`rssi` is signal strength, `name` is name, `mac_address` is mac address.  \n`device_class` and `device_type` are bluetooth codes.  \n\nThe Home app only lists those devices with `expected_profiles` > 0. Basically, the device should function as a speaker.',
  operationId: 'GetScanResults',
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z.array(Example112Schema),
          example: [
            {
              device_class: 525372,
              device_type: 3,
              expected_profiles: 0,
              mac_address: 'xx:xx:xx:xx:xx:xx',
              name: 'KD-49X8200E',
              rssi: -90,
            },
            {
              device_class: 5898764,
              device_type: 1,
              expected_profiles: 0,
              mac_address: 'xx:xx:xx:xx:xx:xx',
              name: 'vivo 1714',
              rssi: -96,
            },
            {
              device_class: 2491396,
              device_type: 1,
              expected_profiles: 1,
              mac_address: 'xx:xx:xx:xx:xx:xx',
              name: 'Bluetooth Speaker',
              rssi: -93,
            },
          ],
        },
      },
      headers: z.object({}),
    },
  },
})

export const getBluetoothStatusRoute = createRoute({
  method: 'get',
  path: '/bluetooth/status',
  tags: ['Bluetooth'],
  summary: 'Status',
  description:
    '> **There are 2 parts of Bluetooth.**\n>\n> *Part 1*: Devices like phones connect to Home and play audio through Home.  \n> For this, /setup/bluetooth/discovery is used to make Home discoverable. Then devices can connect to it as if Home is just another bluetooth speaker.\n>\n> *Part 2*: Bluetooth speakers connect to Home and Home plays audio through the speakers.\n> For this, /setup/bluetooth/scan and /setup/bluetooth/scan_results are used to connect to other speakers.\n>\n> The other endpoints are common for both parts.\n\n\n**For both parts**\n\nThis gives the status of all bluetooth things.\n- Not sure what `audio_mode` is.\n- `discovery_enabled` states whether Home is discoverable. (**Part 1**)\n- `connecting_devices` is a list of all media sources (like phones) connected to Home. (**Part 1**)\n- `scanning_enabled` states whether Home scanning for other bluetooth speakers/devices. (**Part 2**)\n- `connected_devices` is a list of all speakers connected to Home. (**Part 2**)',
  operationId: 'Status',
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: Example110Schema,
          example: {
            audio_mode: 0,
            connected_devices: [
              {
                device: {
                  bond_date: 1529248165656.613,
                  device_class: 2491396,
                  device_type: 1,
                  last_connect_date: 0,
                  mac_address: 'xx:xx:xx:xx:xx:xx',
                  name: 'PHILIPS BT64',
                  rssi: -255,
                  service_uuids: [
                    'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
                    'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
                    'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
                    'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
                    'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
                    'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
                  ],
                },
                enabled_profiles: 2,
              },
            ],
            connecting_devices: [],
            discovery_enabled: false,
            remote_sink: {
              bond_date: 1529248165656.613,
              device_class: 2491396,
              device_type: 1,
              last_connect_date: 0,
              mac_address: 'xx:xx:xx:xx:xx:xx',
              name: 'PHILIPS BT64',
              rssi: -255,
              service_uuids: [
                'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
                'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
                'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
                'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
                'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
                'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
              ],
            },
            scanning_enabled: false,
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const getConfiguredNetworksRoute = createRoute({
  method: 'get',
  path: '/configured_networks',
  tags: ['Wifi'],
  summary: 'Get Saved Networks',
  description:
    'This gets a list of all saved Wi-Fi networks.\n\nEach network has `ssid`, `wpa_auth`, `wpa_cipher` and `wpa_id`.  \n`wpa_id` is an incrementing number used to identify a saved network.  \n#TODO: Add values for `wpa_auth` and `wpa_cipher`.',
  operationId: 'GetSavedNetworks',
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z.array(Example113Schema),
          example: [{ ssid: 'Wifi name', wpa_auth: 7, wpa_cipher: 4, wpa_id: 0 }],
        },
      },
      headers: z.object({}),
    },
  },
})

export const postConnectWifiRoute = createRoute({
  method: 'post',
  path: '/connect_wifi',
  tags: ['Wifi'],
  summary: 'Connect to Wi-Fi Network',
  description:
    '**Note:** Not sure how the password is encrypted. Might be using the public certificate from /setup/eureka_info. So this cannot be used as of now. If someone figures it out, please [create a new issue here](https://github.com/rithvikvibhu/GHLocalApi/issues/new).',
  operationId: 'ConnecttoWi-FiNetwork',
  request: {
    body: {
      content: {
        'application/json': {
          schema: ConnecttoWiFiNetworkRequestSchema,
          example: {
            bssid: '5c:0a:xx:xx:xx:xx',
            enc_passwd: 'xxxxxfPY=',
            signal_level: -42,
            ssid: 'myotherssid',
            wpa_auth: 7,
            wpa_cipher: 4,
          },
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: '', headers: z.object({}) } },
})

export const getEurekaInfoRoute = createRoute({
  method: 'get',
  path: '/eureka_info',
  tags: ['Device Info'],
  summary: 'Eureka Info',
  description:
    'This gives most of the device info. The GET parameter `param` is a comma separated list of json keys to fetch. Currently, these params are known: `version,audio,name,build_info,detail,device_info,net,wifi,setup,settings,opt_in,opencast,multizone,proxy,night_mode_params,user_eq,room_equalizer,sign,aogh,ultrasound,mesh`\n\nNested items can also be filtered using the dot notation. Example: `audio.digital`\n\nThe `options` GET parameter is always set to `detail` or `detail,sign`. `sign` signs the `nonce` and returns some value.\n\nThe `nonce` GET parameter is an integer value signed with needed (see `option` parameter above).',
  operationId: 'EurekaInfo',
  request: {
    query: z.object({
      params: z
        .string()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'params',
            required: true,
            schema: {
              example:
                'version,audio,name,build_info,detail,device_info,net,wifi,setup,settings,opt_in,opencast,multizone,proxy,night_mode_params,user_eq,room_equalizer,sign,aogh,ultrasound,mesh',
              type: 'string',
            },
            style: 'form',
          },
          example:
            'version,audio,name,build_info,detail,device_info,net,wifi,setup,settings,opt_in,opencast,multizone,proxy,night_mode_params,user_eq,room_equalizer,sign,aogh,ultrasound,mesh',
        }),
      options: z
        .string()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'options',
            required: true,
            schema: { example: 'detail,sign', type: 'string' },
            style: 'form',
          },
          example: 'detail,sign',
        }),
      nonce: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'nonce',
            required: true,
            schema: { example: 1234512345, format: 'int32', type: 'integer' },
            style: 'form',
          },
          example: 1234512345,
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: Example1Schema,
          example: {
            aogh: { aogh_api_version: '2' },
            audio: { digital: false },
            build_info: {
              build_type: 2,
              cast_build_revision: '1.46.195690',
              cast_control_version: 1,
              preview_channel_state: 4,
              release_track: 'preview-joining-stable-channel',
              system_build_number: '195690',
            },
            detail: {
              icon_list: [
                { depth: 32, height: 55, mimetype: 'image/png', url: '/setup/icon.png', width: 98 },
              ],
              locale: { display_string: 'English (United States)' },
              timezone: { display_string: 'India Standard Time (Kolkata)', offset: 330 },
            },
            device_info: {
              '4k_blocked': 0,
              capabilities: {
                aogh_supported: true,
                assistant_supported: true,
                audio_hdr_supported: false,
                audio_surround_mode_supported: false,
                ble_supported: true,
                bluetooth_audio_sink_supported: true,
                bluetooth_audio_source_supported: true,
                bluetooth_supported: true,
                cloudcast_supported: true,
                content_filters_supported: true,
                display_supported: false,
                fdr_supported: false,
                hdmi_prefer_50hz_supported: false,
                hdmi_prefer_high_fps_supported: false,
                hotspot_supported: true,
                https_setup_supported: true,
                input_management_supported: true,
                keep_hotspot_until_connected_supported: true,
                multi_user_supported: true,
                multichannel_group_supported: true,
                multizone_supported: true,
                night_mode_supported: true,
                night_mode_supported_v2: true,
                opencast_supported: false,
                preview_channel_supported: true,
                reboot_supported: true,
                remote_ducking_supported: true,
                separate_tts_volume_supported: true,
                setup_supported: true,
                sleep_mode_supported: true,
                stats_supported: true,
                system_sound_effects_supported: false,
                user_eq_supported: true,
                wifi_auto_save_supported: true,
                wifi_regulatory_domain_locked: true,
                wifi_supported: true,
              },
              cloud_device_id: '003D...',
              factory_country_code: 'US',
              hotspot_bssid: 'FA:8F:CA:30:41:71',
              local_authorization_token_hash: 'hBt2...',
              mac_address: 'F4:F5:...',
              manufacturer: 'Google Inc.',
              model_name: 'Google Home',
              product_name: 'pineapple',
              public_key: 'MIIB...',
              ssdp_udn: 'baab...',
              uma_client_id: '8ce0...',
              uptime: 48509.169282,
              weave_device_id: '',
            },
            multizone: {
              audio_output_delay: 0,
              audio_output_delay_hdmi: 0,
              audio_output_delay_oem: 0,
              aux_in_group: '',
              dynamic_groups: [],
              groups: [],
              multichannel_status: 0,
            },
            name: 'Bedroom Speaker',
            net: { ethernet_connected: false, ip_address: '192.168.0.18', online: true },
            night_mode_params: {
              device_override_do_not_disturb: 0,
              do_not_disturb: true,
              enabled: true,
              led_brightness: 0.5799999833106995,
              volume: 0.5899999737739563,
              windows: [{ days: [0, 1, 2, 3, 4, 5, 6], length_hours: 6, start_hour: 23 }],
            },
            opencast: { pin_code: '' },
            opt_in: {
              audio_hdr: false,
              audio_surround_mode: 0,
              autoplay_on_signal: true,
              cloud_ipc: true,
              hdmi_prefer_50hz: false,
              hdmi_prefer_high_fps: true,
              managed_mode: false,
              opencast: true,
              preview_channel: true,
              remote_ducking: true,
              stats: true,
              ui_flipped: false,
              wpa3_support_enabled: false,
            },
            proxy: { mode: 'system' },
            settings: {
              closed_caption: {},
              control_notifications: 1,
              country_code: 'IN',
              locale: 'en-US',
              network_standby: 0,
              system_sound_effects: true,
              time_format: 1,
              timezone: 'Asia/Kolkata',
              wake_on_cast: 1,
            },
            setup: {
              qr_ssid_suffix: '',
              setup_state: 60,
              ssid_suffix: 'k',
              stats: {
                num_check_connectivity: 0,
                num_connect_wifi: 0,
                num_connected_wifi_not_saved: 0,
                num_initial_eureka_info: 0,
                num_obtain_ip: 0,
              },
              tos_accepted: true,
            },
            sign: {
              certificate: '-----BEGIN CERTIFICATE-----\nMIID...Oeb0\n-----END CERTIFICATE-----\n',
              intermediate_certs: [
                '-----BEGIN CERTIFICATE-----\nMIID...O/bYS\n-----END CERTIFICATE-----\n',
              ],
              nonce: '1234512345',
              signed_data: 'Rr5Q...',
            },
            user_eq: {
              high_shelf: { frequency: 4500, gain_db: 0, quality: 0.707 },
              low_shelf: { frequency: 150, gain_db: 0, quality: 0.707 },
              max_peaking_eqs: 0,
              peaking_eqs: [],
            },
            version: 10,
            wifi: {
              bssid: 'a0:ab:...',
              has_changes: false,
              noise_level: -90,
              signal_level: -50,
              ssid: 'Nucl...',
              wpa_configured: true,
              wpa_id: 1,
              wpa_state: 10,
            },
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const postForgetWifiRoute = createRoute({
  method: 'post',
  path: '/forget_wifi',
  tags: ['Wifi'],
  summary: 'Forget Wi-Fi Network',
  description:
    'This is to forget a saved network by `wpa_id`. Get the `wpa_id` from /setup/configured_networks',
  operationId: 'ForgetWi-FiNetwork',
  request: {
    body: {
      content: {
        'application/json': { schema: ForgetWiFiNetworkRequestSchema, example: { wpa_id: 0 } },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'text/plain': { schema: z.object({}).openapi({ 'x-is-dynamic': true }) } },
      headers: z.object({}),
    },
  },
})

export const postGetAppDeviceIdRoute = createRoute({
  method: 'post',
  path: '/get_app_device_id',
  tags: ['Device Info'],
  summary: 'App Device ID',
  description:
    'This gives "app device id", "certificate" and "signed data".  \nThe `app_id` in the request is mandatory and refers to Chromecast backdrop/screensaver app. It has to be set to `E8C28D3C`.  \n\nThe certificate is valid and issued by `Chromecast ICA 6 (Audio Assist), Google Inc`.\n\nNot sure what the other two are.',
  operationId: 'AppDeviceID',
  request: {
    body: {
      content: {
        'application/json': { schema: AppDeviceIDRequestSchema, example: { app_id: 'E8C28D3C' } },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: Example11Schema,
          example: {
            app_device_id: '...',
            certificate: '-----BEGIN CERTIFICATE-----\nMIID...Oeb0\n-----END CERTIFICATE-----\n',
            signed_data: 'HAjp...',
          },
        },
      },
      headers: z.object({}),
    },
    404: { description: 'Not Found' },
  },
})

export const getIconPngRoute = createRoute({
  method: 'get',
  path: '/icon.png',
  tags: ['Static Files'],
  summary: 'Chromecast Icon',
  description:
    "**Update:** This no longer exists. It's not useful, anyway.\n\nA redirect to `http://www.gstatic.com/eureka/images/eureka_device.png`",
  operationId: 'ChromecastIcon',
  responses: { 200: { description: '', headers: z.object({}) } },
})

export const getOfferRoute = createRoute({
  method: 'get',
  path: '/offer',
  tags: ['Device Info'],
  summary: 'Offer',
  description:
    'This gives a token which is used by the Home app to get offers. The offers themselves are not stored on the device.  \nA new token is generated for every request.',
  operationId: 'Offer',
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: Example12Schema, example: { token: 'ADtq...' } } },
      headers: z.object({}),
    },
  },
})

export const postRebootRoute = createRoute({
  method: 'post',
  path: '/reboot',
  tags: ['Device Settings'],
  summary: 'Reboot and Factory Reset',
  description:
    'This can simply reboot the device (`params: "now"`) or factory reset the device (`params: "fdr"`).',
  operationId: 'RebootandFactoryReset',
  request: {
    body: {
      content: {
        'application/json': {
          schema: RebootandFactoryResetRequestSchema,
          example: { params: 'now' },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'text/plain': { schema: z.object({}).openapi({ 'x-is-dynamic': true }) } },
      headers: z.object({}),
    },
  },
})

export const getScanResultsRoute = createRoute({
  method: 'get',
  path: '/scan_results',
  tags: ['Wifi'],
  summary: 'Get Wi-Fi Scan Results',
  description:
    'This gets a list of all nearby Wi-Fi access points.\n\nThe list only has the connected AP by default. Once a scan is triggered by `/setup/scan_wifi`, the whole list is cached for ~3 minutes. Then it will revert to returning only the connected AP again.',
  operationId: 'GetWi-FiScanResults',
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z.array(Example114Schema),
          example: [
            {
              bssid: 'APBSSID1',
              signal_level: -20,
              ssid: 'APSSID1',
              wpa_auth: 7,
              wpa_cipher: 4,
              wpa_id: 0,
            },
          ],
        },
      },
      headers: z.object({}),
    },
  },
})

export const postScanWifiRoute = createRoute({
  method: 'post',
  path: '/scan_wifi',
  tags: ['Wifi'],
  summary: 'Scan for Networks',
  description:
    'This initiates scanning for Wi-Fi networks.\n\nThe results can be obtained with `/setup/scan_results` after triggering the scan with this request.',
  operationId: 'ScanforNetworks',
  responses: {
    200: {
      description: '',
      content: { 'text/plain': { schema: z.object({}).openapi({ 'x-is-dynamic': true }) } },
      headers: z.object({}),
    },
  },
})

export const postSetEurekaInfoRoute = createRoute({
  method: 'post',
  path: '/set_eureka_info',
  tags: ['Device Settings'],
  summary: 'Set Eureka Info',
  description:
    'This can set custom values to some options.\n\nOnly fields to be modified need to be sent, not all. The example has some modifiable fields.\n\nTODO: List all modifiable fields.\n\nSending non-existant fields will still return a 200 OK, but they are not saved.',
  operationId: 'SetEurekaInfo',
  request: {
    body: {
      content: {
        'application/json': {
          schema: SetEurekaInfoRequestSchema,
          example: {
            name: 'Living Room',
            opt_in: { opencast: true, preview_channel: true, remote_ducking: true, stats: true },
            settings: { control_notifications: 2 },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'text/plain': { schema: z.object({}).openapi({ 'x-is-dynamic': true }) } },
      headers: z.object({}),
    },
  },
})

export const getSupportedLocalesRoute = createRoute({
  method: 'get',
  path: '/supported_locales',
  tags: ['Device Info'],
  summary: 'Locales',
  description: 'Simply returns a list of all supported locales.',
  operationId: 'Locales',
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z.array(Example15Schema),
          example: [
            { display_string: 'Arabic - العربية', locale: 'ar' },
            { display_string: 'German - Deutsch', locale: 'de' },
            { display_string: 'English (United States)', locale: 'en-US' },
          ],
        },
      },
      headers: z.object({}),
    },
  },
})

export const getSupportedTimezonesRoute = createRoute({
  method: 'get',
  path: '/supported_timezones',
  tags: ['Device Info'],
  summary: 'Timezones',
  description: 'Simply returns a list of all supported timezones.',
  operationId: 'Timezones',
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z.array(Example14Schema),
          example: [
            {
              display_string: 'Samoa Standard Time (Midway)',
              offset: -660,
              timezone: 'Pacific/Midway',
            },
            {
              display_string: 'Hawaii-Aleutian Standard Time (Honolulu)',
              offset: -600,
              timezone: 'Pacific/Honolulu',
            },
          ],
        },
      },
      headers: z.object({}),
    },
  },
})

export const postTestInternetDownloadSpeedRoute = createRoute({
  method: 'post',
  path: '/test_internet_download_speed',
  tags: ['Device Info'],
  summary: 'Test Internet Download Speed',
  description:
    '**Update:** This seems to have been removed. Returns 404 Not Found.\n\nThis endpoint tests internet download speed. Any sample file URL can be provided.',
  operationId: 'TestInternetDownloadSpeed',
  request: {
    body: {
      content: {
        'application/json': {
          schema: TestInternetDownloadSpeedRequestSchema,
          example: { url: 'https://storage.googleapis.com/reliability-speedtest/random.txt' },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: Example16Schema,
          example: {
            bytes_received: 31457280,
            response_code: 200,
            time_for_data_fetch: 4722,
            time_for_http_response: 316,
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const postUserEqSetEqualizerRoute = createRoute({
  method: 'post',
  path: '/user_eq/set_equalizer',
  tags: ['Assistant'],
  summary: 'Set Equalizer Values',
  description:
    'This can only set new equalizer values. To get already set values, use /setup/eureka_info.\n\nThe body is mandatory. It can either contain `low_shelf` or `high_shelf` or both.\n\n`low_shelf.gain_db` and `high_shelf.gain_db` refer to **bass** and **treble** respectively.\n\nDefault values are 0 for both.  \nWhile the slider in the Home app only ranges from -6 to +6, they can be set to any integer like 50 or -100. These changes persist.',
  operationId: 'SetEqualizerValues',
  request: {
    body: {
      content: {
        'application/json': {
          schema: SetEqualizerValuesRequestSchema,
          example: { high_shelf: { gain_db: 0 }, low_shelf: { gain_db: 0 } },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'text/plain': { schema: z.object({}).openapi({ 'x-is-dynamic': true }) } },
      headers: z.object({}),
    },
  },
})
