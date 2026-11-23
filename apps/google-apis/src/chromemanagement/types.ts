type GoogleChromeManagementV1ChromeAppRequest = {
  appDetails?: string | undefined
  appId?: string | undefined
  detailUri?: string | undefined
  displayName?: string | undefined
  iconUri?: string | undefined
  latestRequestTime?: string | undefined
  requestCount?: string | undefined
}
type GoogleChromeManagementV1CountChromeAppRequestsResponse = {
  nextPageToken?: string | undefined
  requestedApps?: GoogleChromeManagementV1ChromeAppRequest[] | undefined
  totalSize?: number | undefined
}
type GoogleChromeManagementV1CountChromeBrowsersNeedingAttentionResponse = {
  noRecentActivityCount?: string | undefined
  pendingBrowserUpdateCount?: string | undefined
  recentlyEnrolledCount?: string | undefined
}
type GoogleChromeManagementV1DeviceAueCountReport = {
  aueMonth?:
    | 'MONTH_UNSPECIFIED'
    | 'JANUARY'
    | 'FEBRUARY'
    | 'MARCH'
    | 'APRIL'
    | 'MAY'
    | 'JUNE'
    | 'JULY'
    | 'AUGUST'
    | 'SEPTEMBER'
    | 'OCTOBER'
    | 'NOVEMBER'
    | 'DECEMBER'
    | undefined
  aueYear?: string | undefined
  count?: string | undefined
  expired?: boolean | undefined
  model?: string | undefined
}
type GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse = {
  deviceAueCountReports?: GoogleChromeManagementV1DeviceAueCountReport[] | undefined
}
type GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse = {
  noRecentPolicySyncCount?: string | undefined
  noRecentUserActivityCount?: string | undefined
  osVersionNotCompliantCount?: string | undefined
  pendingUpdate?: string | undefined
  unsupportedPolicyCount?: string | undefined
}
type GoogleChromeManagementV1DeviceHardwareCountReport = {
  bucket?: string | undefined
  count?: string | undefined
}
type GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse = {
  cpuReports?: GoogleChromeManagementV1DeviceHardwareCountReport[] | undefined
  memoryReports?: GoogleChromeManagementV1DeviceHardwareCountReport[] | undefined
  modelReports?: GoogleChromeManagementV1DeviceHardwareCountReport[] | undefined
  storageReports?: GoogleChromeManagementV1DeviceHardwareCountReport[] | undefined
}
type GoogleChromeManagementV1BrowserVersion = {
  channel?: 'RELEASE_CHANNEL_UNSPECIFIED' | 'CANARY' | 'DEV' | 'BETA' | 'STABLE' | undefined
  count?: string | undefined
  deviceOsVersion?: string | undefined
  system?:
    | 'DEVICE_SYSTEM_UNSPECIFIED'
    | 'SYSTEM_OTHER'
    | 'SYSTEM_ANDROID'
    | 'SYSTEM_IOS'
    | 'SYSTEM_CROS'
    | 'SYSTEM_WINDOWS'
    | 'SYSTEM_MAC'
    | 'SYSTEM_LINUX'
    | undefined
  version?: string | undefined
}
type GoogleChromeManagementV1CountChromeVersionsResponse = {
  browserVersions?: GoogleChromeManagementV1BrowserVersion[] | undefined
  nextPageToken?: string | undefined
  totalSize?: number | undefined
}
type GoogleChromeManagementV1InstalledApp = {
  appId?: string | undefined
  appInstallType?:
    | 'APP_INSTALL_TYPE_UNSPECIFIED'
    | 'MULTIPLE'
    | 'NORMAL'
    | 'ADMIN'
    | 'DEVELOPMENT'
    | 'SIDELOAD'
    | 'OTHER'
    | undefined
  appSource?: 'APP_SOURCE_UNSPECIFIED' | 'CHROME_WEBSTORE' | 'PLAY_STORE' | undefined
  appType?:
    | 'APP_TYPE_UNSPECIFIED'
    | 'EXTENSION'
    | 'APP'
    | 'THEME'
    | 'HOSTED_APP'
    | 'ANDROID_APP'
    | undefined
  browserDeviceCount?: string | undefined
  description?: string | undefined
  disabled?: boolean | undefined
  displayName?: string | undefined
  homepageUri?: string | undefined
  osUserCount?: string | undefined
  permissions?: string[] | undefined
}
type GoogleChromeManagementV1CountInstalledAppsResponse = {
  installedApps?: GoogleChromeManagementV1InstalledApp[] | undefined
  nextPageToken?: string | undefined
  totalSize?: number | undefined
}
type GoogleChromeManagementV1Device = {
  deviceId?: string | undefined
  machine?: string | undefined
}
type GoogleChromeManagementV1FindInstalledAppDevicesResponse = {
  devices?: GoogleChromeManagementV1Device[] | undefined
  nextPageToken?: string | undefined
  totalSize?: number | undefined
}
type GoogleChromeManagementV1AudioStatusReport = {
  inputDevice?: string | undefined
  inputGain?: number | undefined
  inputMute?: boolean | undefined
  outputDevice?: string | undefined
  outputMute?: boolean | undefined
  outputVolume?: number | undefined
  reportTime?: string | undefined
}
type GoogleChromeManagementV1UsbPeripheralReport = {
  categories?: string[] | undefined
  classId?: number | undefined
  firmwareVersion?: string | undefined
  name?: string | undefined
  pid?: number | undefined
  subclassId?: number | undefined
  vendor?: string | undefined
  vid?: number | undefined
}
type GoogleChromeManagementV1PeripheralsReport = {
  reportTime?: string | undefined
  usbPeripheralReport?: GoogleChromeManagementV1UsbPeripheralReport[] | undefined
}
type GoogleChromeManagementV1TelemetryUserDevice = {
  audioStatusReport?: GoogleChromeManagementV1AudioStatusReport[] | undefined
  deviceId?: string | undefined
  peripheralsReport?: GoogleChromeManagementV1PeripheralsReport[] | undefined
}
type GoogleChromeManagementV1TelemetryUser = {
  customer?: string | undefined
  name?: string | undefined
  orgUnitId?: string | undefined
  userDevice?: GoogleChromeManagementV1TelemetryUserDevice[] | undefined
  userEmail?: string | undefined
  userId?: string | undefined
}
type GoogleTypeDate = {
  day?: number | undefined
  month?: number | undefined
  year?: number | undefined
}
type GoogleChromeManagementV1BatteryInfo = {
  designCapacity?: string | undefined
  designMinVoltage?: number | undefined
  manufactureDate?: GoogleTypeDate | undefined
  manufacturer?: string | undefined
  serialNumber?: string | undefined
  technology?: string | undefined
}
type GoogleChromeManagementV1BatterySampleReport = {
  chargeRate?: number | undefined
  current?: string | undefined
  dischargeRate?: number | undefined
  remainingCapacity?: string | undefined
  reportTime?: string | undefined
  status?: string | undefined
  temperature?: number | undefined
  voltage?: string | undefined
}
type GoogleChromeManagementV1BatteryStatusReport = {
  batteryHealth?:
    | 'BATTERY_HEALTH_UNSPECIFIED'
    | 'BATTERY_HEALTH_NORMAL'
    | 'BATTERY_REPLACE_SOON'
    | 'BATTERY_REPLACE_NOW'
    | undefined
  cycleCount?: number | undefined
  fullChargeCapacity?: string | undefined
  reportTime?: string | undefined
  sample?: GoogleChromeManagementV1BatterySampleReport[] | undefined
  serialNumber?: string | undefined
}
type GoogleChromeManagementV1BootPerformanceReport = {
  bootUpDuration?: string | undefined
  bootUpTime?: string | undefined
  reportTime?: string | undefined
  shutdownDuration?: string | undefined
  shutdownReason?:
    | 'SHUTDOWN_REASON_UNSPECIFIED'
    | 'USER_REQUEST'
    | 'SYSTEM_UPDATE'
    | 'LOW_BATTERY'
    | 'OTHER'
    | undefined
  shutdownTime?: string | undefined
}
type GoogleChromeManagementV1CpuInfo = {
  architecture?: 'ARCHITECTURE_UNSPECIFIED' | 'X64' | undefined
  keylockerConfigured?: boolean | undefined
  keylockerSupported?: boolean | undefined
  maxClockSpeed?: number | undefined
  model?: string | undefined
}
type GoogleChromeManagementV1CpuTemperatureInfo = {
  label?: string | undefined
  temperatureCelsius?: number | undefined
}
type GoogleChromeManagementV1CpuStatusReport = {
  cpuTemperatureInfo?: GoogleChromeManagementV1CpuTemperatureInfo[] | undefined
  cpuUtilizationPct?: number | undefined
  reportTime?: string | undefined
  sampleFrequency?: string | undefined
}
type GoogleChromeManagementV1GraphicsAdapterInfo = {
  adapter?: string | undefined
  deviceId?: string | undefined
  driverVersion?: string | undefined
}
type GoogleChromeManagementV1DisplayDevice = {
  displayHeightMm?: number | undefined
  displayName?: string | undefined
  displayWidthMm?: number | undefined
  internal?: boolean | undefined
  manufactureYear?: number | undefined
  manufacturerId?: string | undefined
  modelId?: number | undefined
}
type GoogleChromeManagementV1TouchScreenDevice = {
  displayName?: string | undefined
  stylusCapable?: boolean | undefined
  touchPointCount?: number | undefined
}
type GoogleChromeManagementV1TouchScreenInfo = {
  devices?: GoogleChromeManagementV1TouchScreenDevice[] | undefined
  touchpadLibrary?: string | undefined
}
type GoogleChromeManagementV1GraphicsInfo = {
  adapterInfo?: GoogleChromeManagementV1GraphicsAdapterInfo | undefined
  displayDevices?: GoogleChromeManagementV1DisplayDevice[] | undefined
  eprivacySupported?: boolean | undefined
  touchScreenInfo?: GoogleChromeManagementV1TouchScreenInfo | undefined
}
type GoogleChromeManagementV1DisplayInfo = {
  deviceId?: string | undefined
  displayName?: string | undefined
  isInternal?: boolean | undefined
  refreshRate?: number | undefined
  resolutionHeight?: number | undefined
  resolutionWidth?: number | undefined
}
type GoogleChromeManagementV1GraphicsStatusReport = {
  displays?: GoogleChromeManagementV1DisplayInfo[] | undefined
  reportTime?: string | undefined
}
type GoogleChromeManagementV1TotalMemoryEncryptionInfo = {
  encryptionAlgorithm?:
    | 'MEMORY_ENCRYPTION_ALGORITHM_UNSPECIFIED'
    | 'MEMORY_ENCRYPTION_ALGORITHM_UNKNOWN'
    | 'MEMORY_ENCRYPTION_ALGORITHM_AES_XTS_128'
    | 'MEMORY_ENCRYPTION_ALGORITHM_AES_XTS_256'
    | undefined
  encryptionState?:
    | 'MEMORY_ENCRYPTION_STATE_UNSPECIFIED'
    | 'MEMORY_ENCRYPTION_STATE_UNKNOWN'
    | 'MEMORY_ENCRYPTION_STATE_DISABLED'
    | 'MEMORY_ENCRYPTION_STATE_TME'
    | 'MEMORY_ENCRYPTION_STATE_MKTME'
    | undefined
  keyLength?: string | undefined
  maxKeys?: string | undefined
}
type GoogleChromeManagementV1MemoryInfo = {
  availableRamBytes?: string | undefined
  totalMemoryEncryption?: GoogleChromeManagementV1TotalMemoryEncryptionInfo | undefined
  totalRamBytes?: string | undefined
}
type GoogleChromeManagementV1MemoryStatusReport = {
  pageFaults?: number | undefined
  reportTime?: string | undefined
  sampleFrequency?: string | undefined
  systemRamFreeBytes?: string | undefined
}
type GoogleChromeManagementV1HttpsLatencyRoutineData = {
  latency?: string | undefined
  problem?:
    | 'HTTPS_LATENCY_PROBLEM_UNSPECIFIED'
    | 'FAILED_DNS_RESOLUTIONS'
    | 'FAILED_HTTPS_REQUESTS'
    | 'HIGH_LATENCY'
    | 'VERY_HIGH_LATENCY'
    | undefined
}
type GoogleChromeManagementV1NetworkDiagnosticsReport = {
  httpsLatencyData?: GoogleChromeManagementV1HttpsLatencyRoutineData | undefined
  reportTime?: string | undefined
}
type GoogleChromeManagementV1NetworkDevice = {
  iccid?: string | undefined
  imei?: string | undefined
  macAddress?: string | undefined
  mdn?: string | undefined
  meid?: string | undefined
  type?:
    | 'NETWORK_DEVICE_TYPE_UNSPECIFIED'
    | 'CELLULAR_DEVICE'
    | 'ETHERNET_DEVICE'
    | 'WIFI_DEVICE'
    | undefined
}
type GoogleChromeManagementV1NetworkInfo = {
  networkDevices?: GoogleChromeManagementV1NetworkDevice[] | undefined
}
type GoogleChromeManagementV1NetworkStatusReport = {
  connectionState?:
    | 'NETWORK_CONNECTION_STATE_UNSPECIFIED'
    | 'ONLINE'
    | 'CONNECTED'
    | 'PORTAL'
    | 'CONNECTING'
    | 'NOT_CONNECTED'
    | undefined
  connectionType?:
    | 'NETWORK_TYPE_UNSPECIFIED'
    | 'CELLULAR'
    | 'ETHERNET'
    | 'TETHER'
    | 'VPN'
    | 'WIFI'
    | undefined
  encryptionOn?: boolean | undefined
  gatewayIpAddress?: string | undefined
  guid?: string | undefined
  lanIpAddress?: string | undefined
  receivingBitRateMbps?: string | undefined
  reportTime?: string | undefined
  sampleFrequency?: string | undefined
  signalStrengthDbm?: number | undefined
  transmissionBitRateMbps?: string | undefined
  transmissionPowerDbm?: number | undefined
  wifiLinkQuality?: string | undefined
  wifiPowerManagementEnabled?: boolean | undefined
}
type GoogleChromeManagementV1OsUpdateStatus = {
  lastRebootTime?: string | undefined
  lastUpdateCheckTime?: string | undefined
  lastUpdateTime?: string | undefined
  newPlatformVersion?: string | undefined
  newRequestedPlatformVersion?: string | undefined
  updateState?:
    | 'UPDATE_STATE_UNSPECIFIED'
    | 'OS_IMAGE_DOWNLOAD_NOT_STARTED'
    | 'OS_IMAGE_DOWNLOAD_IN_PROGRESS'
    | 'OS_UPDATE_NEED_REBOOT'
    | undefined
}
type GoogleChromeManagementV1StorageInfoDiskVolume = {
  storageFreeBytes?: string | undefined
  storageTotalBytes?: string | undefined
  volumeId?: string | undefined
}
type GoogleChromeManagementV1StorageInfo = {
  availableDiskBytes?: string | undefined
  totalDiskBytes?: string | undefined
  volume?: GoogleChromeManagementV1StorageInfoDiskVolume[] | undefined
}
type GoogleChromeManagementV1DiskInfo = {
  bytesReadThisSession?: string | undefined
  bytesWrittenThisSession?: string | undefined
  discardTimeThisSession?: string | undefined
  health?: string | undefined
  ioTimeThisSession?: string | undefined
  manufacturer?: string | undefined
  model?: string | undefined
  readTimeThisSession?: string | undefined
  serialNumber?: string | undefined
  sizeBytes?: string | undefined
  type?: string | undefined
  volumeIds?: string[] | undefined
  writeTimeThisSession?: string | undefined
}
type GoogleChromeManagementV1StorageStatusReport = {
  disk?: GoogleChromeManagementV1DiskInfo[] | undefined
  reportTime?: string | undefined
}
type GoogleChromeManagementV1ThunderboltInfo = {
  securityLevel?:
    | 'THUNDERBOLT_SECURITY_LEVEL_UNSPECIFIED'
    | 'THUNDERBOLT_SECURITY_NONE_LEVEL'
    | 'THUNDERBOLT_SECURITY_USER_LEVEL'
    | 'THUNDERBOLT_SECURITY_SECURE_LEVEL'
    | 'THUNDERBOLT_SECURITY_DP_ONLY_LEVEL'
    | 'THUNDERBOLT_SECURITY_USB_ONLY_LEVEL'
    | 'THUNDERBOLT_SECURITY_NO_PCIE_LEVEL'
    | undefined
}
type GoogleChromeManagementV1TelemetryDevice = {
  audioStatusReport?: GoogleChromeManagementV1AudioStatusReport[] | undefined
  batteryInfo?: GoogleChromeManagementV1BatteryInfo[] | undefined
  batteryStatusReport?: GoogleChromeManagementV1BatteryStatusReport[] | undefined
  bootPerformanceReport?: GoogleChromeManagementV1BootPerformanceReport[] | undefined
  cpuInfo?: GoogleChromeManagementV1CpuInfo[] | undefined
  cpuStatusReport?: GoogleChromeManagementV1CpuStatusReport[] | undefined
  customer?: string | undefined
  deviceId?: string | undefined
  graphicsInfo?: GoogleChromeManagementV1GraphicsInfo | undefined
  graphicsStatusReport?: GoogleChromeManagementV1GraphicsStatusReport[] | undefined
  memoryInfo?: GoogleChromeManagementV1MemoryInfo | undefined
  memoryStatusReport?: GoogleChromeManagementV1MemoryStatusReport[] | undefined
  name?: string | undefined
  networkDiagnosticsReport?: GoogleChromeManagementV1NetworkDiagnosticsReport[] | undefined
  networkInfo?: GoogleChromeManagementV1NetworkInfo | undefined
  networkStatusReport?: GoogleChromeManagementV1NetworkStatusReport[] | undefined
  orgUnitId?: string | undefined
  osUpdateStatus?: GoogleChromeManagementV1OsUpdateStatus[] | undefined
  peripheralsReport?: GoogleChromeManagementV1PeripheralsReport[] | undefined
  serialNumber?: string | undefined
  storageInfo?: GoogleChromeManagementV1StorageInfo | undefined
  storageStatusReport?: GoogleChromeManagementV1StorageStatusReport[] | undefined
  thunderboltInfo?: GoogleChromeManagementV1ThunderboltInfo[] | undefined
}
type GoogleChromeManagementV1ListTelemetryDevicesResponse = {
  devices?: GoogleChromeManagementV1TelemetryDevice[] | undefined
  nextPageToken?: string | undefined
}
type GoogleChromeManagementV1TelemetryAudioSevereUnderrunEvent = { [x: string]: unknown }
type GoogleChromeManagementV1TelemetryDeviceInfo = {
  deviceId?: string | undefined
  orgUnitId?: string | undefined
}
type GoogleChromeManagementV1TelemetryHttpsLatencyChangeEvent = {
  httpsLatencyRoutineData?: GoogleChromeManagementV1HttpsLatencyRoutineData | undefined
  httpsLatencyState?: 'HTTPS_LATENCY_STATE_UNSPECIFIED' | 'RECOVERY' | 'PROBLEM' | undefined
}
type GoogleChromeManagementV1TelemetryUsbPeripheralsEvent = {
  usbPeripheralReport?: GoogleChromeManagementV1UsbPeripheralReport[] | undefined
}
type GoogleChromeManagementV1TelemetryUserInfo = {
  email?: string | undefined
  orgUnitId?: string | undefined
}
type GoogleChromeManagementV1TelemetryEvent = {
  audioSevereUnderrunEvent?: GoogleChromeManagementV1TelemetryAudioSevereUnderrunEvent | undefined
  device?: GoogleChromeManagementV1TelemetryDeviceInfo | undefined
  eventType?:
    | 'EVENT_TYPE_UNSPECIFIED'
    | 'AUDIO_SEVERE_UNDERRUN'
    | 'USB_ADDED'
    | 'USB_REMOVED'
    | 'NETWORK_HTTPS_LATENCY_CHANGE'
    | undefined
  httpsLatencyChangeEvent?: GoogleChromeManagementV1TelemetryHttpsLatencyChangeEvent | undefined
  name?: string | undefined
  reportTime?: string | undefined
  usbPeripheralsEvent?: GoogleChromeManagementV1TelemetryUsbPeripheralsEvent | undefined
  user?: GoogleChromeManagementV1TelemetryUserInfo | undefined
}
type GoogleChromeManagementV1ListTelemetryEventsResponse = {
  nextPageToken?: string | undefined
  telemetryEvents?: GoogleChromeManagementV1TelemetryEvent[] | undefined
}
type GoogleChromeManagementV1ListTelemetryUsersResponse = {
  nextPageToken?: string | undefined
  telemetryUsers?: GoogleChromeManagementV1TelemetryUser[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/:customer/apps:countChromeAppRequests': {
      $get: {
        input: { param: { customer: string } } & {
          query: {
            orderBy?: string | undefined
            orgUnitId?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleChromeManagementV1CountChromeAppRequestsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:customer/reports:countChromeBrowsersNeedingAttention': {
      $get: {
        input: { param: { customer: string } } & {
          query: {
            orgUnitId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleChromeManagementV1CountChromeBrowsersNeedingAttentionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:customer/reports:countChromeDevicesReachingAutoExpirationDate': {
      $get: {
        input: { param: { customer: string } } & {
          query: {
            maxAueDate?: string | undefined
            minAueDate?: string | undefined
            orgUnitId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:customer/reports:countChromeDevicesThatNeedAttention': {
      $get: {
        input: { param: { customer: string } } & {
          query: {
            orgUnitId?: string | undefined
            readMask?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:customer/reports:countChromeHardwareFleetDevices': {
      $get: {
        input: { param: { customer: string } } & {
          query: {
            orgUnitId?: string | undefined
            readMask?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:customer/reports:countChromeVersions': {
      $get: {
        input: { param: { customer: string } } & {
          query: {
            filter?: string | undefined
            orgUnitId?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleChromeManagementV1CountChromeVersionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:customer/reports:countInstalledApps': {
      $get: {
        input: { param: { customer: string } } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
            orgUnitId?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleChromeManagementV1CountInstalledAppsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:customer/reports:findInstalledAppDevices': {
      $get: {
        input: { param: { customer: string } } & {
          query: {
            appId?: string | undefined
            appType?:
              | 'APP_TYPE_UNSPECIFIED'
              | 'EXTENSION'
              | 'APP'
              | 'THEME'
              | 'HOSTED_APP'
              | 'ANDROID_APP'
              | undefined
            filter?: string | undefined
            orderBy?: string | undefined
            orgUnitId?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleChromeManagementV1FindInstalledAppDevicesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            readMask?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleChromeManagementV1TelemetryUser
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/telemetry/devices': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            readMask?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleChromeManagementV1ListTelemetryDevicesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/telemetry/events': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            readMask?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleChromeManagementV1ListTelemetryEventsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/telemetry/users': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            readMask?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleChromeManagementV1ListTelemetryUsersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
