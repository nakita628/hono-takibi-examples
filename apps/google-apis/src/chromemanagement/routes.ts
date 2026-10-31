import { createRoute, z } from '@hono/zod-openapi'

const GoogleChromeManagementV1AndroidAppPermissionSchema = z
  .object({
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The type of the permission.', readOnly: true }),
  })
  .openapi({ description: 'Permission requested by an Android app.', required: [] })
  .openapi('GoogleChromeManagementV1AndroidAppPermission')

const GoogleChromeManagementV1AndroidAppInfoSchema = z
  .object({
    permissions: z
      .array(GoogleChromeManagementV1AndroidAppPermissionSchema)
      .exactOptional()
      .openapi({
        description: 'Output only. Permissions requested by an Android app.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Android app information.', required: [] })
  .openapi('GoogleChromeManagementV1AndroidAppInfo')

const GoogleChromeManagementV1ChromeAppPermissionSchema = z
  .object({
    accessUserData: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. If available, whether this permissions grants the app/extension access to user data.',
        readOnly: true,
      }),
    documentationUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. If available, a URI to a page that has documentation for the current permission.',
        readOnly: true,
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The type of the permission.', readOnly: true }),
  })
  .openapi({ description: 'Permission requested by a Chrome app or extension.', required: [] })
  .openapi('GoogleChromeManagementV1ChromeAppPermission')

const GoogleChromeManagementV1ChromeAppSiteAccessSchema = z
  .object({
    hostMatch: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. This can contain very specific hosts, or patterns like "*.com" for instance.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Represent one host permission.', required: [] })
  .openapi('GoogleChromeManagementV1ChromeAppSiteAccess')

const GoogleChromeManagementV1ChromeAppInfoSchema = z
  .object({
    googleOwned: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Whether the app or extension is built and maintained by Google. Version-specific field that will only be set when the requested app version is found.',
        readOnly: true,
      }),
    isCwsHosted: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Whether the app or extension is in a published state in the Chrome Web Store.',
        readOnly: true,
      }),
    isExtensionPolicySupported: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Output only. Whether an app supports policy for extensions.',
        readOnly: true,
      }),
    isKioskOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Output only. Whether the app is only for Kiosk mode on ChromeOS devices',
        readOnly: true,
      }),
    isTheme: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Output only. Whether the app or extension is a theme.',
        readOnly: true,
      }),
    kioskEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Output only. Whether this app is enabled for Kiosk mode on ChromeOS devices',
        readOnly: true,
      }),
    minUserCount: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Output only. The minimum number of users using this app.',
        readOnly: true,
      }),
    permissions: z
      .array(GoogleChromeManagementV1ChromeAppPermissionSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. Every custom permission requested by the app. Version-specific field that will only be set when the requested app version is found.',
        readOnly: true,
      }),
    siteAccess: z
      .array(GoogleChromeManagementV1ChromeAppSiteAccessSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. Every permission giving access to domains or broad host patterns. ( e.g. www.google.com). This includes the matches from content scripts as well as hosts in the permissions node of the manifest. Version-specific field that will only be set when the requested app version is found.',
        readOnly: true,
      }),
    supportEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. The app developer has enabled support for their app. Version-specific field that will only be set when the requested app version is found.',
        readOnly: true,
      }),
    type: z
      .enum(['ITEM_TYPE_UNSPECIFIED', 'EXTENSION', 'OTHERS'])
      .exactOptional()
      .openapi({
        description: 'Output only. Types of an item in the Chrome Web Store',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Chrome Web Store app information.', required: [] })
  .openapi('GoogleChromeManagementV1ChromeAppInfo')

const GoogleRpcStatusSchema = z
  .object({
    code: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The status code, which should be an enum value of google.rpc.Code.',
      }),
    details: z
      .array(
        z.record(
          z.string(),
          z
            .any()
            .openapi({
              description: 'Properties of the object. Contains field @type with type URL.',
            }),
        ),
      )
      .exactOptional()
      .openapi({
        description:
          'A list of messages that carry the error details. There is a common set of message types for APIs to use.',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.',
      }),
  })
  .openapi({
    description:
      'The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).',
    required: [],
  })
  .openapi('GoogleRpcStatus')

const GoogleChromeManagementV1AppDetailsSchema = z
  .object({
    androidAppInfo: GoogleChromeManagementV1AndroidAppInfoSchema.exactOptional().openapi({
      description: 'Output only. Android app information.',
      readOnly: true,
    }),
    appId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Unique store identifier for the item. Examples: "gmbmikajjgmnabiglmofipeabaddhgne" for the Save to Google Drive Chrome extension, "com.google.android.apps.docs" for the Google Drive Android app.',
        readOnly: true,
      }),
    chromeAppInfo: GoogleChromeManagementV1ChromeAppInfoSchema.exactOptional().openapi({
      description: 'Output only. Chrome Web Store app information.',
      readOnly: true,
    }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: "Output only. App's description.", readOnly: true }),
    detailUri: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The uri for the detail page of the item.',
        readOnly: true,
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: "Output only. App's display name.", readOnly: true }),
    firstPublishTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. First published time.', readOnly: true }),
    homepageUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Home page or Website uri.', readOnly: true }),
    iconUri: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. A link to an image that can be used as an icon for the product.',
        readOnly: true,
      }),
    isPaidApp: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Output only. Indicates if the app has to be paid for OR has paid content.',
        readOnly: true,
      }),
    latestPublishTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Latest published time.', readOnly: true }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Format: name=customers/{customer_id}/apps/{chrome|android|web}/{app_id}@{version}',
        readOnly: true,
      }),
    privacyPolicyUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The URI pointing to the privacy policy of the app, if it was provided by the developer. Version-specific field that will only be set when the requested app version is found.',
        readOnly: true,
      }),
    publisher: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The publisher of the item.', readOnly: true }),
    reviewNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Number of reviews received. Chrome Web Store review information will always be for the latest version of an app.',
        readOnly: true,
      }),
    reviewRating: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Output only. The rating of the app (on 5 stars). Chrome Web Store review information will always be for the latest version of an app.',
        readOnly: true,
      }),
    revisionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. App version. A new revision is committed whenever a new version of the app is published.',
        readOnly: true,
      }),
    serviceError: GoogleRpcStatusSchema.exactOptional().openapi({
      description: 'Output only. Information about a partial service error if applicable.',
      readOnly: true,
    }),
    type: z
      .enum(['APP_ITEM_TYPE_UNSPECIFIED', 'CHROME', 'ANDROID', 'WEB'])
      .exactOptional()
      .openapi({ description: 'Output only. App type.', readOnly: true }),
  })
  .openapi({ description: 'Resource representing app details.', required: [] })
  .openapi('GoogleChromeManagementV1AppDetails')

const GoogleChromeManagementV1AudioStatusReportSchema = z
  .object({
    inputDevice: z
      .string()
      .exactOptional()
      .openapi({ description: "Output only. Active input device's name.", readOnly: true }),
    inputGain: z
      .int32()
      .exactOptional()
      .openapi({
        description: "Output only. Active input device's gain in [0, 100].",
        readOnly: true,
      }),
    inputMute: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Output only. Is active input device mute or not.', readOnly: true }),
    outputDevice: z
      .string()
      .exactOptional()
      .openapi({ description: "Output only. Active output device's name.", readOnly: true }),
    outputMute: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Output only. Is active output device mute or not.',
        readOnly: true,
      }),
    outputVolume: z
      .int32()
      .exactOptional()
      .openapi({
        description: "Output only. Active output device's volume in [0, 100].",
        readOnly: true,
      }),
    reportTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Timestamp of when the sample was collected on device.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Status data for storage. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceAudioStatus](https://chromeenterprise.google/policies/#ReportDeviceAudioStatus) * Data Collection Frequency: 10 minutes * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A',
    required: [],
  })
  .openapi('GoogleChromeManagementV1AudioStatusReport')

const GoogleTypeDateSchema = z
  .object({
    day: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.",
      }),
    month: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.',
      }),
    year: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.',
      }),
  })
  .openapi({
    description:
      'Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp',
    required: [],
  })
  .openapi('GoogleTypeDate')

const GoogleChromeManagementV1BatteryInfoSchema = z
  .object({
    designCapacity: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Design capacity (mAmpere-hours).', readOnly: true }),
    designMinVoltage: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Output only. Designed minimum output voltage (mV)',
        readOnly: true,
      }),
    manufactureDate: GoogleTypeDateSchema.exactOptional().openapi({
      description: 'Output only. The date the battery was manufactured.',
      readOnly: true,
    }),
    manufacturer: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Battery manufacturer.', readOnly: true }),
    serialNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Battery serial number.', readOnly: true }),
    technology: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Technology of the battery. Example: Li-ion',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Information about the battery. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDevicePowerStatus](https://chromeenterprise.google/policies/#ReportDevicePowerStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A',
    required: [],
  })
  .openapi('GoogleChromeManagementV1BatteryInfo')

const GoogleChromeManagementV1BatterySampleReportSchema = z
  .object({
    chargeRate: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Output only. Battery charge percentage.', readOnly: true }),
    current: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Battery current (mA).', readOnly: true }),
    dischargeRate: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "Output only. The battery discharge rate measured in mW. Positive if the battery is being discharged, negative if it's being charged.",
        readOnly: true,
      }),
    remainingCapacity: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Battery remaining capacity (mAmpere-hours).',
        readOnly: true,
      }),
    reportTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Timestamp of when the sample was collected on device',
        readOnly: true,
      }),
    status: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Battery status read from sysfs. Example: Discharging',
        readOnly: true,
      }),
    temperature: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Output only. Temperature in Celsius degrees.', readOnly: true }),
    voltage: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Battery voltage (millivolt).', readOnly: true }),
  })
  .openapi({
    description:
      'Sampling data for battery. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDevicePowerStatus](https://chromeenterprise.google/policies/#ReportDevicePowerStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A',
    required: [],
  })
  .openapi('GoogleChromeManagementV1BatterySampleReport')

const GoogleChromeManagementV1BatteryStatusReportSchema = z
  .object({
    batteryHealth: z
      .enum([
        'BATTERY_HEALTH_UNSPECIFIED',
        'BATTERY_HEALTH_NORMAL',
        'BATTERY_REPLACE_SOON',
        'BATTERY_REPLACE_NOW',
      ])
      .exactOptional()
      .openapi({ description: 'Output only. Battery health.', readOnly: true }),
    cycleCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Output only. Cycle count.', readOnly: true }),
    fullChargeCapacity: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Full charge capacity (mAmpere-hours).',
        readOnly: true,
      }),
    reportTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Timestamp of when the sample was collected on device',
        readOnly: true,
      }),
    sample: z
      .array(GoogleChromeManagementV1BatterySampleReportSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. Sampling data for the battery sorted in a decreasing order of report_time.',
        readOnly: true,
      }),
    serialNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Battery serial number.', readOnly: true }),
  })
  .openapi({
    description:
      'Status data for battery. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDevicePowerStatus](https://chromeenterprise.google/policies/#ReportDevicePowerStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A',
    required: [],
  })
  .openapi('GoogleChromeManagementV1BatteryStatusReport')

const GoogleChromeManagementV1BootPerformanceReportSchema = z
  .object({
    bootUpDuration: z.string().exactOptional().openapi({ description: 'Total time to boot up.' }),
    bootUpTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The timestamp when power came on.' }),
    reportTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Timestamp when the report was collected.' }),
    shutdownDuration: z
      .string()
      .exactOptional()
      .openapi({ description: 'Total time since shutdown start to power off.' }),
    shutdownReason: z
      .enum([
        'SHUTDOWN_REASON_UNSPECIFIED',
        'USER_REQUEST',
        'SYSTEM_UPDATE',
        'LOW_BATTERY',
        'OTHER',
      ])
      .exactOptional()
      .openapi({ description: 'The shutdown reason.' }),
    shutdownTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The timestamp when shutdown.' }),
  })
  .openapi({
    description:
      'Boot performance report of a device. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceBootMode](https://chromeenterprise.google/policies/#ReportDeviceBootMode) * Data Collection Frequency: On every boot up event * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: N/A',
    required: [],
  })
  .openapi('GoogleChromeManagementV1BootPerformanceReport')

const GoogleChromeManagementV1BrowserVersionSchema = z
  .object({
    channel: z
      .enum(['RELEASE_CHANNEL_UNSPECIFIED', 'CANARY', 'DEV', 'BETA', 'STABLE'])
      .exactOptional()
      .openapi({
        description: 'Output only. The release channel of the installed browser.',
        readOnly: true,
      }),
    count: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Count grouped by device_system and major version',
        readOnly: true,
      }),
    deviceOsVersion: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Version of the system-specified operating system.',
        readOnly: true,
      }),
    system: z
      .enum([
        'DEVICE_SYSTEM_UNSPECIFIED',
        'SYSTEM_OTHER',
        'SYSTEM_ANDROID',
        'SYSTEM_IOS',
        'SYSTEM_CROS',
        'SYSTEM_WINDOWS',
        'SYSTEM_MAC',
        'SYSTEM_LINUX',
      ])
      .exactOptional()
      .openapi({ description: 'Output only. The device operating system.', readOnly: true }),
    version: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The full version of the installed browser.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Describes a browser version and its install count.', required: [] })
  .openapi('GoogleChromeManagementV1BrowserVersion')

const GoogleChromeManagementV1ChromeAppRequestSchema = z
  .object({
    appDetails: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Format: app_details=customers/{customer_id}/apps/chrome/{app_id}',
        readOnly: true,
      }),
    appId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Unique store identifier for the app. Example: "gmbmikajjgmnabiglmofipeabaddhgne" for the Save to Google Drive Chrome extension.',
        readOnly: true,
      }),
    detailUri: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The uri for the detail page of the item.',
        readOnly: true,
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: "Output only. App's display name.", readOnly: true }),
    iconUri: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. A link to an image that can be used as an icon for the product.',
        readOnly: true,
      }),
    latestRequestTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The timestamp of the most recently made request for this app.',
        readOnly: true,
      }),
    requestCount: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Total count of requests for this app.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Details of an app installation request.', required: [] })
  .openapi('GoogleChromeManagementV1ChromeAppRequest')

const GoogleChromeManagementV1CountChromeAppRequestsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Token to specify the next page in the list.' }),
    requestedApps: z
      .array(GoogleChromeManagementV1ChromeAppRequestSchema)
      .exactOptional()
      .openapi({ description: 'Count of requested apps matching request.' }),
    totalSize: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Total number of matching app requests.' }),
  })
  .openapi({
    description: 'Response containing summary of requested app installations.',
    required: [],
  })
  .openapi('GoogleChromeManagementV1CountChromeAppRequestsResponse')

const GoogleChromeManagementV1CountChromeBrowsersNeedingAttentionResponseSchema = z
  .object({
    noRecentActivityCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of browsers that haven’t had any recent activity' }),
    pendingBrowserUpdateCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of browsers that are pending an OS update' }),
    recentlyEnrolledCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of browsers that have been recently enrolled' }),
  })
  .openapi({
    description: 'Response containing counts for browsers that need attention.',
    required: [],
  })
  .openapi('GoogleChromeManagementV1CountChromeBrowsersNeedingAttentionResponse')

const GoogleChromeManagementV1DeviceAueCountReportSchema = z
  .object({
    aueMonth: z
      .enum([
        'MONTH_UNSPECIFIED',
        'JANUARY',
        'FEBRUARY',
        'MARCH',
        'APRIL',
        'MAY',
        'JUNE',
        'JULY',
        'AUGUST',
        'SEPTEMBER',
        'OCTOBER',
        'NOVEMBER',
        'DECEMBER',
      ])
      .exactOptional()
      .openapi({
        description:
          'Enum value of month corresponding to the auto update expiration date in UTC time zone. If the device is already expired, this field is empty.',
      }),
    aueYear: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Int value of year corresponding to the Auto Update Expiration date in UTC time zone. If the device is already expired, this field is empty.',
      }),
    count: z.string().exactOptional().openapi({ description: 'Count of devices of this model.' }),
    expired: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Boolean value for whether or not the device has already expired.' }),
    model: z.string().exactOptional().openapi({ description: 'Public model name of the devices.' }),
  })
  .openapi({
    description:
      'Report for CountChromeDevicesPerAueDateResponse, contains the count of devices of a specific model and auto update expiration range.',
    required: [],
  })
  .openapi('GoogleChromeManagementV1DeviceAueCountReport')

const GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponseSchema = z
  .object({
    deviceAueCountReports: z
      .array(GoogleChromeManagementV1DeviceAueCountReportSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of reports sorted by auto update expiration date in ascending order.',
      }),
  })
  .openapi({
    description:
      'Response containing a list of devices expiring in each month of a selected time frame. Counts are grouped by model and Auto Update Expiration date.',
    required: [],
  })
  .openapi('GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse')

const GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponseSchema = z
  .object({
    noRecentPolicySyncCount: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Number of ChromeOS devices have not synced policies in the past 28 days.',
      }),
    noRecentUserActivityCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Number of ChromeOS devices that have not seen any user activity in the past 28 days.',
      }),
    osVersionNotCompliantCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of devices whose OS version is not compliant.' }),
    pendingUpdate: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of devices that are pending an OS update.' }),
    unsupportedPolicyCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Number of devices that are unable to apply a policy due to an OS version mismatch.',
      }),
  })
  .openapi({
    description: 'Response containing counts for devices that need attention.',
    required: [],
  })
  .openapi('GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse')

const GoogleChromeManagementV1DeviceHardwareCountReportSchema = z
  .object({
    bucket: z
      .string()
      .exactOptional()
      .openapi({ description: 'Public name of the hardware specification.' }),
    count: z
      .string()
      .exactOptional()
      .openapi({ description: 'Count of devices with a unique hardware specification.' }),
  })
  .openapi({
    description:
      'Report for CountChromeDevicesPerHardwareSpecResponse, contains the count of devices with a unique hardware specification.',
    required: [],
  })
  .openapi('GoogleChromeManagementV1DeviceHardwareCountReport')

const GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponseSchema = z
  .object({
    cpuReports: z
      .array(GoogleChromeManagementV1DeviceHardwareCountReportSchema)
      .exactOptional()
      .openapi({
        description:
          'The DeviceHardwareCountReport for device cpu type (for example Intel(R) Core(TM) i7-10610U CPU @ 1.80GHz).',
      }),
    memoryReports: z
      .array(GoogleChromeManagementV1DeviceHardwareCountReportSchema)
      .exactOptional()
      .openapi({
        description:
          'The DeviceHardwareCountReport for device memory amount in gigabytes (for example 16).',
      }),
    modelReports: z
      .array(GoogleChromeManagementV1DeviceHardwareCountReportSchema)
      .exactOptional()
      .openapi({
        description:
          'The DeviceHardwareCountReport for device model type (for example Acer C7 Chromebook).',
      }),
    storageReports: z
      .array(GoogleChromeManagementV1DeviceHardwareCountReportSchema)
      .exactOptional()
      .openapi({
        description:
          'The DeviceHardwareCountReport for device storage amount in gigabytes (for example 128).',
      }),
  })
  .openapi({
    description:
      'Response containing a list of devices with a specific type of hardware specification from the requested hardware type.',
    required: [],
  })
  .openapi('GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse')

const GoogleChromeManagementV1CountChromeVersionsResponseSchema = z
  .object({
    browserVersions: z
      .array(GoogleChromeManagementV1BrowserVersionSchema)
      .exactOptional()
      .openapi({ description: 'List of all browser versions and their install counts.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Token to specify the next page of the request.' }),
    totalSize: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Total number browser versions matching request.' }),
  })
  .openapi({
    description: 'Response containing requested browser versions details and counts.',
    required: [],
  })
  .openapi('GoogleChromeManagementV1CountChromeVersionsResponse')

const GoogleChromeManagementV1InstalledAppSchema = z
  .object({
    appId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Unique identifier of the app. For Chrome apps and extensions, the 32-character id (e.g. ehoadneljpdggcbbknedodolkkjodefl). For Android apps, the package name (e.g. com.evernote).',
        readOnly: true,
      }),
    appInstallType: z
      .enum([
        'APP_INSTALL_TYPE_UNSPECIFIED',
        'MULTIPLE',
        'NORMAL',
        'ADMIN',
        'DEVELOPMENT',
        'SIDELOAD',
        'OTHER',
      ])
      .exactOptional()
      .openapi({ description: 'Output only. How the app was installed.', readOnly: true }),
    appSource: z
      .enum(['APP_SOURCE_UNSPECIFIED', 'CHROME_WEBSTORE', 'PLAY_STORE'])
      .exactOptional()
      .openapi({ description: 'Output only. Source of the installed app.', readOnly: true }),
    appType: z
      .enum(['APP_TYPE_UNSPECIFIED', 'EXTENSION', 'APP', 'THEME', 'HOSTED_APP', 'ANDROID_APP'])
      .exactOptional()
      .openapi({ description: 'Output only. Type of the app.', readOnly: true }),
    browserDeviceCount: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Count of browser devices with this app installed.',
        readOnly: true,
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Description of the installed app.', readOnly: true }),
    disabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Output only. Whether the app is disabled.', readOnly: true }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Name of the installed app.', readOnly: true }),
    homepageUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Homepage uri of the installed app.', readOnly: true }),
    osUserCount: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Count of ChromeOS users with this app installed.',
        readOnly: true,
      }),
    permissions: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Output only. Permissions of the installed app.', readOnly: true }),
  })
  .openapi({ description: 'Describes an installed app.', required: [] })
  .openapi('GoogleChromeManagementV1InstalledApp')

const GoogleChromeManagementV1CountInstalledAppsResponseSchema = z
  .object({
    installedApps: z
      .array(GoogleChromeManagementV1InstalledAppSchema)
      .exactOptional()
      .openapi({ description: 'List of installed apps matching request.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Token to specify the next page of the request.' }),
    totalSize: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Total number of installed apps matching request.' }),
  })
  .openapi({ description: 'Response containing details of queried installed apps.', required: [] })
  .openapi('GoogleChromeManagementV1CountInstalledAppsResponse')

const GoogleChromeManagementV1CpuInfoSchema = z
  .object({
    architecture: z
      .enum(['ARCHITECTURE_UNSPECIFIED', 'X64'])
      .exactOptional()
      .openapi({
        description:
          'Output only. Architecture type for the CPU. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDeviceCpuInfo](https://chromeenterprise.google/policies/#ReportDeviceCpuInfo) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A',
        readOnly: true,
      }),
    keylockerConfigured: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Whether keylocker is configured.`TRUE` = Enabled; `FALSE` = disabled. Only reported if keylockerSupported = `TRUE`.',
        readOnly: true,
      }),
    keylockerSupported: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Output only. Whether keylocker is supported.', readOnly: true }),
    maxClockSpeed: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Output only. The max CPU clock speed in kHz.', readOnly: true }),
    model: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The CPU model name. Example: Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'CPU specifications for the device * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDeviceCpuInfo](https://chromeenterprise.google/policies/#ReportDeviceCpuInfo) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A',
    required: [],
  })
  .openapi('GoogleChromeManagementV1CpuInfo')

const GoogleChromeManagementV1CpuTemperatureInfoSchema = z
  .object({
    label: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. CPU label. Example: Core 0', readOnly: true }),
    temperatureCelsius: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Output only. CPU temperature in Celsius.', readOnly: true }),
  })
  .openapi({
    description:
      'CPU temperature of a device. Sampled per CPU core in Celsius. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceCpuInfo](https://chromeenterprise.google/policies/#ReportDeviceCpuInfo) * Data Collection Frequency: Every 10 minutes * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A',
    required: [],
  })
  .openapi('GoogleChromeManagementV1CpuTemperatureInfo')

const GoogleChromeManagementV1CpuStatusReportSchema = z
  .object({
    cpuTemperatureInfo: z
      .array(GoogleChromeManagementV1CpuTemperatureInfoSchema)
      .exactOptional()
      .openapi({
        description: 'Output only. CPU temperature sample info per CPU core in Celsius',
        readOnly: true,
      }),
    cpuUtilizationPct: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Output only. Sample of CPU utilization (0-100 percent).',
        readOnly: true,
      }),
    reportTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The timestamp in milliseconds representing time at which this report was sampled.',
        readOnly: true,
      }),
    sampleFrequency: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Frequency the report is sampled.', readOnly: true }),
  })
  .openapi({
    description:
      'Provides information about the status of the CPU. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceCpuInfo](https://chromeenterprise.google/policies/#ReportDeviceCpuInfo) * Data Collection Frequency: Every 10 minutes * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A',
    required: [],
  })
  .openapi('GoogleChromeManagementV1CpuStatusReport')

const GoogleChromeManagementV1DeviceSchema = z
  .object({
    deviceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The ID of the device that reported this Chrome browser information.',
        readOnly: true,
      }),
    machine: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The name of the machine within its local network.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'Describes a device reporting Chrome browser information.',
    required: [],
  })
  .openapi('GoogleChromeManagementV1Device')

const GoogleChromeManagementV1DiskInfoSchema = z
  .object({
    bytesReadThisSession: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Number of bytes read since last boot.',
        readOnly: true,
      }),
    bytesWrittenThisSession: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Number of bytes written since last boot.',
        readOnly: true,
      }),
    discardTimeThisSession: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Time spent discarding since last boot. Discarding is writing to clear blocks which are no longer in use. Supported on kernels 4.18+.',
        readOnly: true,
      }),
    health: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Disk health.', readOnly: true }),
    ioTimeThisSession: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Counts the time the disk and queue were busy, so unlike the fields above, parallel requests are not counted multiple times.',
        readOnly: true,
      }),
    manufacturer: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Disk manufacturer.', readOnly: true }),
    model: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Disk model.', readOnly: true }),
    readTimeThisSession: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Time spent reading from disk since last boot.',
        readOnly: true,
      }),
    serialNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Disk serial number.', readOnly: true }),
    sizeBytes: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Disk size.', readOnly: true }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Disk type: eMMC / NVMe / ATA / SCSI.',
        readOnly: true,
      }),
    volumeIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Output only. Disk volumes.', readOnly: true }),
    writeTimeThisSession: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Time spent writing to disk since last boot.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Status of the single storage device.', required: [] })
  .openapi('GoogleChromeManagementV1DiskInfo')

const GoogleChromeManagementV1DisplayDeviceSchema = z
  .object({
    displayHeightMm: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Output only. Display height in millimeters.', readOnly: true }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Display device name.', readOnly: true }),
    displayWidthMm: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Output only. Display width in millimeters.', readOnly: true }),
    internal: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Output only. Is display internal or not.', readOnly: true }),
    manufactureYear: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Output only. Year of manufacture.', readOnly: true }),
    manufacturerId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Three letter manufacturer ID.', readOnly: true }),
    modelId: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Output only. Manufacturer product code.', readOnly: true }),
  })
  .openapi({ description: 'Information of a display device.', required: [] })
  .openapi('GoogleChromeManagementV1DisplayDevice')

const GoogleChromeManagementV1DisplayInfoSchema = z
  .object({
    deviceId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Represents the graphics card device id.',
        readOnly: true,
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Display device name.', readOnly: true }),
    isInternal: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Output only. Indicates if display is internal or not.',
        readOnly: true,
      }),
    refreshRate: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Output only. Refresh rate in Hz.', readOnly: true }),
    resolutionHeight: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Output only. Resolution height in pixels.', readOnly: true }),
    resolutionWidth: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Output only. Resolution width in pixels.', readOnly: true }),
  })
  .openapi({ description: 'Information for a display.', required: [] })
  .openapi('GoogleChromeManagementV1DisplayInfo')

const GoogleChromeManagementV1FindInstalledAppDevicesResponseSchema = z
  .object({
    devices: z
      .array(GoogleChromeManagementV1DeviceSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of devices which have the app installed. Sorted in ascending alphabetical order on the Device.machine field.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Token to specify the next page of the request.' }),
    totalSize: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Total number of devices matching request.' }),
  })
  .openapi({
    description: 'Response containing a list of devices with queried app installed.',
    required: [],
  })
  .openapi('GoogleChromeManagementV1FindInstalledAppDevicesResponse')

const GoogleChromeManagementV1GraphicsAdapterInfoSchema = z
  .object({
    adapter: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Adapter name. Example: Mesa DRI Intel(R) UHD Graphics 620 (Kabylake GT2).',
        readOnly: true,
      }),
    deviceId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Represents the graphics card device id.',
        readOnly: true,
      }),
    driverVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Version of the GPU driver.', readOnly: true }),
  })
  .openapi({ description: 'Information of a graphics adapter (GPU).', required: [] })
  .openapi('GoogleChromeManagementV1GraphicsAdapterInfo')

const GoogleChromeManagementV1TouchScreenDeviceSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Touch screen device display name.', readOnly: true }),
    stylusCapable: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Output only. Touch screen device is stylus capable or not.',
        readOnly: true,
      }),
    touchPointCount: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Output only. Number of touch points supported on the device.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Information of an internal touch screen device.', required: [] })
  .openapi('GoogleChromeManagementV1TouchScreenDevice')

const GoogleChromeManagementV1TouchScreenInfoSchema = z
  .object({
    devices: z
      .array(GoogleChromeManagementV1TouchScreenDeviceSchema)
      .exactOptional()
      .openapi({
        description: 'Output only. List of the internal touch screen devices.',
        readOnly: true,
      }),
    touchpadLibrary: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Touchpad library name used by the input stack.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Information on the device touch screen.', required: [] })
  .openapi('GoogleChromeManagementV1TouchScreenInfo')

const GoogleChromeManagementV1GraphicsInfoSchema = z
  .object({
    adapterInfo: GoogleChromeManagementV1GraphicsAdapterInfoSchema.exactOptional().openapi({
      description: 'Output only. Information about the graphics adapter (GPU).',
      readOnly: true,
    }),
    displayDevices: z
      .array(GoogleChromeManagementV1DisplayDeviceSchema)
      .exactOptional()
      .openapi({
        description: 'Output only. Information about the display(s) of the device.',
        readOnly: true,
      }),
    eprivacySupported: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Output only. Is ePrivacy screen supported or not.',
        readOnly: true,
      }),
    touchScreenInfo: GoogleChromeManagementV1TouchScreenInfoSchema.exactOptional().openapi({
      description: 'Output only. Information about the internal touch screen(s) of the device.',
      readOnly: true,
    }),
  })
  .openapi({
    description:
      'Information of the graphics subsystem. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDeviceGraphicsStatus](https://chromeenterprise.google/policies/#ReportDeviceGraphicsStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A',
    required: [],
  })
  .openapi('GoogleChromeManagementV1GraphicsInfo')

const GoogleChromeManagementV1GraphicsStatusReportSchema = z
  .object({
    displays: z
      .array(GoogleChromeManagementV1DisplayInfoSchema)
      .exactOptional()
      .openapi({
        description: 'Output only. Information about the displays for the device.',
        readOnly: true,
      }),
    reportTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Time at which the graphics data was reported.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Information of the graphics subsystem. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceGraphicsInfo](https://chromeenterprise.google/policies/#ReportDeviceGraphicsInfo) * Data Collection Frequency: 3 hours. * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A',
    required: [],
  })
  .openapi('GoogleChromeManagementV1GraphicsStatusReport')

const GoogleChromeManagementV1HttpsLatencyRoutineDataSchema = z
  .object({
    latency: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. HTTPS latency if routine succeeded or failed because of HIGH_LATENCY or VERY_HIGH_LATENCY.',
        readOnly: true,
      }),
    problem: z
      .enum([
        'HTTPS_LATENCY_PROBLEM_UNSPECIFIED',
        'FAILED_DNS_RESOLUTIONS',
        'FAILED_HTTPS_REQUESTS',
        'HIGH_LATENCY',
        'VERY_HIGH_LATENCY',
      ])
      .exactOptional()
      .openapi({
        description: 'Output only. HTTPS latency routine problem if a problem occurred.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Data that describes the result of the HTTPS latency diagnostics routine, with the HTTPS requests issued to Google websites.',
    required: [],
  })
  .openapi('GoogleChromeManagementV1HttpsLatencyRoutineData')

const GoogleChromeManagementV1TotalMemoryEncryptionInfoSchema = z
  .object({
    encryptionAlgorithm: z
      .enum([
        'MEMORY_ENCRYPTION_ALGORITHM_UNSPECIFIED',
        'MEMORY_ENCRYPTION_ALGORITHM_UNKNOWN',
        'MEMORY_ENCRYPTION_ALGORITHM_AES_XTS_128',
        'MEMORY_ENCRYPTION_ALGORITHM_AES_XTS_256',
      ])
      .exactOptional()
      .openapi({ description: 'Memory encryption algorithm.' }),
    encryptionState: z
      .enum([
        'MEMORY_ENCRYPTION_STATE_UNSPECIFIED',
        'MEMORY_ENCRYPTION_STATE_UNKNOWN',
        'MEMORY_ENCRYPTION_STATE_DISABLED',
        'MEMORY_ENCRYPTION_STATE_TME',
        'MEMORY_ENCRYPTION_STATE_MKTME',
      ])
      .exactOptional()
      .openapi({ description: 'The state of memory encryption on the device.' }),
    keyLength: z
      .string()
      .exactOptional()
      .openapi({ description: 'The length of the encryption keys.' }),
    maxKeys: z
      .string()
      .exactOptional()
      .openapi({ description: 'The maximum number of keys that can be used for encryption.' }),
  })
  .openapi({
    description:
      'Memory encryption information of a device. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDeviceMemoryInfo](https://chromeenterprise.google/policies/#ReportDeviceMemoryInfo) * Data Collection Frequency: At device startup * Default Data Reporting Frequency: At device startup - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: N/A',
    required: [],
  })
  .openapi('GoogleChromeManagementV1TotalMemoryEncryptionInfo')

const GoogleChromeManagementV1MemoryInfoSchema = z
  .object({
    availableRamBytes: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Amount of available RAM in bytes.', readOnly: true }),
    totalMemoryEncryption:
      GoogleChromeManagementV1TotalMemoryEncryptionInfoSchema.exactOptional().openapi({
        description: 'Output only. Total memory encryption info for the device.',
        readOnly: true,
      }),
    totalRamBytes: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Total RAM in bytes.', readOnly: true }),
  })
  .openapi({
    description:
      'Memory information of a device. * This field has both telemetry and device information: - `totalRamBytes` - Device information - `availableRamBytes` - Telemetry information - `totalMemoryEncryption` - Device information * Data for this field is controlled via policy: [ReportDeviceMemoryInfo](https://chromeenterprise.google/policies/#ReportDeviceMemoryInfo) * Data Collection Frequency: - `totalRamBytes` - Only at upload - `availableRamBytes` - Every 10 minutes - `totalMemoryEncryption` - at device startup * Default Data Reporting Frequency: - `totalRamBytes` - 3 hours - `availableRamBytes` - 3 hours - `totalMemoryEncryption` - at device startup - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: only for `totalMemoryEncryption` * Reported for affiliated users only: N/A',
    required: [],
  })
  .openapi('GoogleChromeManagementV1MemoryInfo')

const GoogleChromeManagementV1MemoryStatusReportSchema = z
  .object({
    pageFaults: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Output only. Number of page faults during this collection',
        readOnly: true,
      }),
    reportTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The timestamp in milliseconds representing time at which this report was sampled.',
        readOnly: true,
      }),
    sampleFrequency: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Frequency the report is sampled.', readOnly: true }),
    systemRamFreeBytes: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Amount of free RAM in bytes (unreliable due to Garbage Collection).',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Contains samples of memory status reports. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceMemoryInfo](https://chromeenterprise.google/policies/#ReportDeviceMemoryInfo) * Data Collection Frequency: Only at upload, SystemRamFreeByes is collected every 10 minutes * Default Data Reporting Frequency: Every 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A',
    required: [],
  })
  .openapi('GoogleChromeManagementV1MemoryStatusReport')

const GoogleChromeManagementV1NetworkDiagnosticsReportSchema = z
  .object({
    httpsLatencyData: GoogleChromeManagementV1HttpsLatencyRoutineDataSchema.exactOptional().openapi(
      { description: 'Output only. HTTPS latency test data.', readOnly: true },
    ),
    reportTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Timestamp of when the diagnostics were collected.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      "Network testing results to determine the health of the device's network connection, for example whether the HTTPS latency is high or normal.",
    required: [],
  })
  .openapi('GoogleChromeManagementV1NetworkDiagnosticsReport')

const GoogleChromeManagementV1NetworkDeviceSchema = z
  .object({
    iccid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. The integrated circuit card ID associated with the device's sim card.",
        readOnly: true,
      }),
    imei: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. IMEI (if applicable) of the corresponding network device.',
        readOnly: true,
      }),
    macAddress: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. MAC address (if applicable) of the corresponding network device.',
        readOnly: true,
      }),
    mdn: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. The mobile directory number associated with the device's sim card.",
        readOnly: true,
      }),
    meid: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. MEID (if applicable) of the corresponding network device.',
        readOnly: true,
      }),
    type: z
      .enum([
        'NETWORK_DEVICE_TYPE_UNSPECIFIED',
        'CELLULAR_DEVICE',
        'ETHERNET_DEVICE',
        'WIFI_DEVICE',
      ])
      .exactOptional()
      .openapi({ description: 'Output only. Network device type.', readOnly: true }),
  })
  .openapi({
    description:
      'Details about the network device. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportNetworkDeviceConfiguration](https://chromeenterprise.google/policies/#ReportNetworkDeviceConfiguration) * Data Collection Frequency: At device startup * Default Data Reporting Frequency: At device startup - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: N/A',
    required: [],
  })
  .openapi('GoogleChromeManagementV1NetworkDevice')

const GoogleChromeManagementV1NetworkInfoSchema = z
  .object({
    networkDevices: z
      .array(GoogleChromeManagementV1NetworkDeviceSchema)
      .exactOptional()
      .openapi({ description: 'Output only. List of network devices.', readOnly: true }),
  })
  .openapi({
    description:
      'Network device information. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportNetworkDeviceConfiguration](https://chromeenterprise.google/policies/#ReportNetworkDeviceConfiguration) * Data Collection Frequency: At device startup * Default Data Reporting Frequency: At device startup - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: N/A',
    required: [],
  })
  .openapi('GoogleChromeManagementV1NetworkInfo')

const GoogleChromeManagementV1NetworkStatusReportSchema = z
  .object({
    connectionState: z
      .enum([
        'NETWORK_CONNECTION_STATE_UNSPECIFIED',
        'ONLINE',
        'CONNECTED',
        'PORTAL',
        'CONNECTING',
        'NOT_CONNECTED',
      ])
      .exactOptional()
      .openapi({
        description: 'Output only. Current connection state of the network.',
        readOnly: true,
      }),
    connectionType: z
      .enum(['NETWORK_TYPE_UNSPECIFIED', 'CELLULAR', 'ETHERNET', 'TETHER', 'VPN', 'WIFI'])
      .exactOptional()
      .openapi({ description: 'Output only. Network connection type.', readOnly: true }),
    encryptionOn: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Output only. Whether the wifi encryption key is turned off.',
        readOnly: true,
      }),
    gatewayIpAddress: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Gateway IP address.', readOnly: true }),
    guid: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Network connection guid.', readOnly: true }),
    lanIpAddress: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. LAN IP address.', readOnly: true }),
    receivingBitRateMbps: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Receiving bit rate measured in Megabits per second.',
        readOnly: true,
      }),
    reportTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Time at which the network state was reported.',
        readOnly: true,
      }),
    sampleFrequency: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Frequency the report is sampled.', readOnly: true }),
    signalStrengthDbm: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Output only. Signal strength for wireless networks measured in decibels.',
        readOnly: true,
      }),
    transmissionBitRateMbps: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Transmission bit rate measured in Megabits per second.',
        readOnly: true,
      }),
    transmissionPowerDbm: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Output only. Transmission power measured in decibels.',
        readOnly: true,
      }),
    wifiLinkQuality: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Wifi link quality. Value ranges from [0, 70]. 0 indicates no signal and 70 indicates a strong signal.',
        readOnly: true,
      }),
    wifiPowerManagementEnabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Output only. Wifi power management enabled', readOnly: true }),
  })
  .openapi({
    description:
      'State of visible/configured networks. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportNetworkStatus](https://chromeenterprise.google/policies/#ReportNetworkStatus) * Data Collection Frequency: 60 minutes * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: Yes',
    required: [],
  })
  .openapi('GoogleChromeManagementV1NetworkStatusReport')

const GoogleChromeManagementV1OsUpdateStatusSchema = z
  .object({
    lastRebootTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Timestamp of the last reboot.', readOnly: true }),
    lastUpdateCheckTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Timestamp of the last update check.', readOnly: true }),
    lastUpdateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Timestamp of the last successful update.',
        readOnly: true,
      }),
    newPlatformVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. New platform version of the os image being downloaded and applied. It is only set when update status is OS_IMAGE_DOWNLOAD_IN_PROGRESS or OS_UPDATE_NEED_REBOOT. Note this could be a dummy "0.0.0.0" for OS_UPDATE_NEED_REBOOT status for some edge cases, e.g. update engine is restarted without a reboot.',
        readOnly: true,
      }),
    newRequestedPlatformVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. New requested platform version from the pending updated kiosk app.',
        readOnly: true,
      }),
    updateState: z
      .enum([
        'UPDATE_STATE_UNSPECIFIED',
        'OS_IMAGE_DOWNLOAD_NOT_STARTED',
        'OS_IMAGE_DOWNLOAD_IN_PROGRESS',
        'OS_UPDATE_NEED_REBOOT',
      ])
      .exactOptional()
      .openapi({ description: 'Output only. Current state of the os update.', readOnly: true }),
  })
  .openapi({
    description:
      'Contains information regarding the current OS update status. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceOsUpdateStatus](https://chromeenterprise.google/policies/#ReportDeviceOsUpdateStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A',
    required: [],
  })
  .openapi('GoogleChromeManagementV1OsUpdateStatus')

const GoogleChromeManagementV1UsbPeripheralReportSchema = z
  .object({
    categories: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Output only. Categories the device belongs to https://www.usb.org/defined-class-codes',
        readOnly: true,
      }),
    classId: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Output only. Class ID https://www.usb.org/defined-class-codes',
        readOnly: true,
      }),
    firmwareVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Firmware version', readOnly: true }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Device name, model name, or product name',
        readOnly: true,
      }),
    pid: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Output only. Product ID', readOnly: true }),
    subclassId: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Output only. Subclass ID https://www.usb.org/defined-class-codes',
        readOnly: true,
      }),
    vendor: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Vendor name', readOnly: true }),
    vid: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Output only. Vendor ID', readOnly: true }),
  })
  .openapi({ description: 'USB connected peripheral report.', required: [] })
  .openapi('GoogleChromeManagementV1UsbPeripheralReport')

const GoogleChromeManagementV1PeripheralsReportSchema = z
  .object({
    reportTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Timestamp of when the report was collected.',
        readOnly: true,
      }),
    usbPeripheralReport: z
      .array(GoogleChromeManagementV1UsbPeripheralReportSchema)
      .exactOptional()
      .openapi({ description: 'Reports of all usb connected devices.' }),
  })
  .openapi({ description: 'Peripherals report.', required: [] })
  .openapi('GoogleChromeManagementV1PeripheralsReport')

const GoogleChromeManagementV1StorageInfoDiskVolumeSchema = z
  .object({
    storageFreeBytes: z
      .string()
      .exactOptional()
      .openapi({ description: 'Free storage space in bytes.' }),
    storageTotalBytes: z
      .string()
      .exactOptional()
      .openapi({ description: 'Total storage space in bytes.' }),
    volumeId: z.string().exactOptional().openapi({ description: 'Disk volume id.' }),
  })
  .openapi({ description: 'Information for disk volumes', required: [] })
  .openapi('GoogleChromeManagementV1StorageInfoDiskVolume')

const GoogleChromeManagementV1StorageInfoSchema = z
  .object({
    availableDiskBytes: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The available space for user data storage in the device in bytes.',
      }),
    totalDiskBytes: z
      .string()
      .exactOptional()
      .openapi({ description: 'The total space for user data storage in the device in bytes.' }),
    volume: z
      .array(GoogleChromeManagementV1StorageInfoDiskVolumeSchema)
      .exactOptional()
      .openapi({ description: 'Information for disk volumes' }),
  })
  .openapi({
    description:
      'Status data for storage. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceStorageStatus](https://chromeenterprise.google/policies/#ReportDeviceStorageStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A',
    required: [],
  })
  .openapi('GoogleChromeManagementV1StorageInfo')

const GoogleChromeManagementV1StorageStatusReportSchema = z
  .object({
    disk: z
      .array(GoogleChromeManagementV1DiskInfoSchema)
      .exactOptional()
      .openapi({ description: 'Output only. Reports on disk.', readOnly: true }),
    reportTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Timestamp of when the sample was collected on device',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Status data for storage. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceStorageStatus](https://chromeenterprise.google/policies/#ReportDeviceStorageStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A',
    required: [],
  })
  .openapi('GoogleChromeManagementV1StorageStatusReport')

const GoogleChromeManagementV1ThunderboltInfoSchema = z
  .object({
    securityLevel: z
      .enum([
        'THUNDERBOLT_SECURITY_LEVEL_UNSPECIFIED',
        'THUNDERBOLT_SECURITY_NONE_LEVEL',
        'THUNDERBOLT_SECURITY_USER_LEVEL',
        'THUNDERBOLT_SECURITY_SECURE_LEVEL',
        'THUNDERBOLT_SECURITY_DP_ONLY_LEVEL',
        'THUNDERBOLT_SECURITY_USB_ONLY_LEVEL',
        'THUNDERBOLT_SECURITY_NO_PCIE_LEVEL',
      ])
      .exactOptional()
      .openapi({ description: 'Security level of the Thunderbolt bus.' }),
  })
  .openapi({
    description:
      'Thunderbolt bus info. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDeviceSecurityStatus](https://chromeenterprise.google/policies/#ReportDeviceSecurityStatus) * Data Collection Frequency: At device startup * Default Data Reporting Frequency: At device startup - Policy Controlled: No * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: N/A',
    required: [],
  })
  .openapi('GoogleChromeManagementV1ThunderboltInfo')

const GoogleChromeManagementV1TelemetryDeviceSchema = z
  .object({
    audioStatusReport: z
      .array(GoogleChromeManagementV1AudioStatusReportSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. Audio reports collected periodically sorted in a decreasing order of report_time.',
        readOnly: true,
      }),
    batteryInfo: z
      .array(GoogleChromeManagementV1BatteryInfoSchema)
      .exactOptional()
      .openapi({
        description: 'Output only. Information on battery specs for the device.',
        readOnly: true,
      }),
    batteryStatusReport: z
      .array(GoogleChromeManagementV1BatteryStatusReportSchema)
      .exactOptional()
      .openapi({
        description: 'Output only. Battery reports collected periodically.',
        readOnly: true,
      }),
    bootPerformanceReport: z
      .array(GoogleChromeManagementV1BootPerformanceReportSchema)
      .exactOptional()
      .openapi({
        description: 'Output only. Boot performance reports of the device.',
        readOnly: true,
      }),
    cpuInfo: z
      .array(GoogleChromeManagementV1CpuInfoSchema)
      .exactOptional()
      .openapi({
        description: 'Output only. Information regarding CPU specs for the device.',
        readOnly: true,
      }),
    cpuStatusReport: z
      .array(GoogleChromeManagementV1CpuStatusReportSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. CPU status reports collected periodically sorted in a decreasing order of report_time.',
        readOnly: true,
      }),
    customer: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Google Workspace Customer whose enterprise enrolled the device.',
        readOnly: true,
      }),
    deviceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. The unique Directory API ID of the device. This value is the same as the Admin Console's Directory API ID in the ChromeOS Devices tab",
        readOnly: true,
      }),
    graphicsInfo: GoogleChromeManagementV1GraphicsInfoSchema.exactOptional().openapi({
      description:
        'Output only. Contains information regarding Graphic peripherals for the device.',
      readOnly: true,
    }),
    graphicsStatusReport: z
      .array(GoogleChromeManagementV1GraphicsStatusReportSchema)
      .exactOptional()
      .openapi({
        description: 'Output only. Graphics reports collected periodically.',
        readOnly: true,
      }),
    memoryInfo: GoogleChromeManagementV1MemoryInfoSchema.exactOptional().openapi({
      description: 'Output only. Information regarding memory specs for the device.',
      readOnly: true,
    }),
    memoryStatusReport: z
      .array(GoogleChromeManagementV1MemoryStatusReportSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. Memory status reports collected periodically sorted decreasing by report_time.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Resource name of the device.', readOnly: true }),
    networkDiagnosticsReport: z
      .array(GoogleChromeManagementV1NetworkDiagnosticsReportSchema)
      .exactOptional()
      .openapi({
        description: 'Output only. Network diagnostics collected periodically.',
        readOnly: true,
      }),
    networkInfo: GoogleChromeManagementV1NetworkInfoSchema.exactOptional().openapi({
      description: 'Output only. Network devices information.',
      readOnly: true,
    }),
    networkStatusReport: z
      .array(GoogleChromeManagementV1NetworkStatusReportSchema)
      .exactOptional()
      .openapi({
        description: 'Output only. Network specs collected periodically.',
        readOnly: true,
      }),
    orgUnitId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Organization unit ID of the device.', readOnly: true }),
    osUpdateStatus: z
      .array(GoogleChromeManagementV1OsUpdateStatusSchema)
      .exactOptional()
      .openapi({
        description: 'Output only. Contains relevant information regarding ChromeOS update status.',
        readOnly: true,
      }),
    peripheralsReport: z
      .array(GoogleChromeManagementV1PeripheralsReportSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. Peripherals reports collected periodically sorted in a decreasing order of report_time.',
        readOnly: true,
      }),
    serialNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. Device serial number. This value is the same as the Admin Console's Serial Number in the ChromeOS Devices tab.",
        readOnly: true,
      }),
    storageInfo: GoogleChromeManagementV1StorageInfoSchema.exactOptional().openapi({
      description: 'Output only. Information of storage specs for the device.',
      readOnly: true,
    }),
    storageStatusReport: z
      .array(GoogleChromeManagementV1StorageStatusReportSchema)
      .exactOptional()
      .openapi({
        description: 'Output only. Storage reports collected periodically.',
        readOnly: true,
      }),
    thunderboltInfo: z
      .array(GoogleChromeManagementV1ThunderboltInfoSchema)
      .exactOptional()
      .openapi({ description: 'Output only. Information on Thunderbolt bus.', readOnly: true }),
  })
  .openapi({ description: 'Telemetry data collected from a managed device.', required: [] })
  .openapi('GoogleChromeManagementV1TelemetryDevice')

const GoogleChromeManagementV1ListTelemetryDevicesResponseSchema = z
  .object({
    devices: z
      .array(GoogleChromeManagementV1TelemetryDeviceSchema)
      .exactOptional()
      .openapi({ description: 'Telemetry devices returned in the response.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Token to specify next page in the list.' }),
  })
  .openapi({ required: [] })
  .openapi('GoogleChromeManagementV1ListTelemetryDevicesResponse')

const GoogleChromeManagementV1TelemetryAudioSevereUnderrunEventSchema = z
  .object({})
  .openapi({
    description:
      '`TelemetryAudioSevereUnderrunEvent` is triggered when a audio devices run out of buffer data for more than 5 seconds.',
  })
  .openapi('GoogleChromeManagementV1TelemetryAudioSevereUnderrunEvent')

const GoogleChromeManagementV1TelemetryDeviceInfoSchema = z
  .object({
    deviceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. The unique Directory API ID of the device. This value is the same as the Admin Console's Directory API ID in the ChromeOS Devices tab.",
        readOnly: true,
      }),
    orgUnitId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Organization unit ID of the device.', readOnly: true }),
  })
  .openapi({
    description: 'Information about a device associated with telemetry data.',
    required: [],
  })
  .openapi('GoogleChromeManagementV1TelemetryDeviceInfo')

const GoogleChromeManagementV1TelemetryHttpsLatencyChangeEventSchema = z
  .object({
    httpsLatencyRoutineData:
      GoogleChromeManagementV1HttpsLatencyRoutineDataSchema.exactOptional().openapi({
        description: 'HTTPS latency routine data that triggered the event.',
      }),
    httpsLatencyState: z
      .enum(['HTTPS_LATENCY_STATE_UNSPECIFIED', 'RECOVERY', 'PROBLEM'])
      .exactOptional()
      .openapi({ description: 'Current HTTPS latency state.' }),
  })
  .openapi({
    description:
      'Https latency routine is run periodically and `TelemetryHttpsLatencyChangeEvent` is triggered if a latency problem was detected or if the device has recovered from a latency problem..',
    required: [],
  })
  .openapi('GoogleChromeManagementV1TelemetryHttpsLatencyChangeEvent')

const GoogleChromeManagementV1TelemetryUsbPeripheralsEventSchema = z
  .object({
    usbPeripheralReport: z
      .array(GoogleChromeManagementV1UsbPeripheralReportSchema)
      .exactOptional()
      .openapi({ description: 'List of usb devices that were either added or removed.' }),
  })
  .openapi({
    description:
      '`TelemetryUsbPeripheralsEvent` is triggered USB devices are either added or removed.',
    required: [],
  })
  .openapi('GoogleChromeManagementV1TelemetryUsbPeripheralsEvent')

const GoogleChromeManagementV1TelemetryUserInfoSchema = z
  .object({
    email: z
      .string()
      .exactOptional()
      .openapi({ description: "Output only. User's email.", readOnly: true }),
    orgUnitId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Organization unit ID of the user.', readOnly: true }),
  })
  .openapi({
    description: 'Information about a user associated with telemetry data.',
    required: [],
  })
  .openapi('GoogleChromeManagementV1TelemetryUserInfo')

const GoogleChromeManagementV1TelemetryEventSchema = z
  .object({
    audioSevereUnderrunEvent:
      GoogleChromeManagementV1TelemetryAudioSevereUnderrunEventSchema.exactOptional().openapi({
        description:
          'Output only. Payload for audio severe underrun event. Present only when the `event_type` field is `AUDIO_SEVERE_UNDERRUN`.',
        readOnly: true,
      }),
    device: GoogleChromeManagementV1TelemetryDeviceInfoSchema.exactOptional().openapi({
      description: 'Output only. Information about the device associated with the event.',
      readOnly: true,
    }),
    eventType: z
      .enum([
        'EVENT_TYPE_UNSPECIFIED',
        'AUDIO_SEVERE_UNDERRUN',
        'USB_ADDED',
        'USB_REMOVED',
        'NETWORK_HTTPS_LATENCY_CHANGE',
      ])
      .exactOptional()
      .openapi({ description: 'The event type of the current event.' }),
    httpsLatencyChangeEvent:
      GoogleChromeManagementV1TelemetryHttpsLatencyChangeEventSchema.exactOptional().openapi({
        description:
          'Output only. Payload for HTTPS latency change event. Present only when `event_type` is `NETWORK_HTTPS_LATENCY_CHANGE`.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Resource name of the event.', readOnly: true }),
    reportTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Timestamp that represents when the event was reported.' }),
    usbPeripheralsEvent:
      GoogleChromeManagementV1TelemetryUsbPeripheralsEventSchema.exactOptional().openapi({
        description:
          'Output only. Payload for usb peripherals event. Present only when the `event_type` field is either `USB_ADDED` or `USB_REMOVED`.',
        readOnly: true,
      }),
    user: GoogleChromeManagementV1TelemetryUserInfoSchema.exactOptional().openapi({
      description: 'Output only. Information about the user associated with the event.',
      readOnly: true,
    }),
  })
  .openapi({ description: 'Telemetry data reported by a managed device.', required: [] })
  .openapi('GoogleChromeManagementV1TelemetryEvent')

const GoogleChromeManagementV1ListTelemetryEventsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Token to specify next page in the list.' }),
    telemetryEvents: z
      .array(GoogleChromeManagementV1TelemetryEventSchema)
      .exactOptional()
      .openapi({ description: 'Telemetry events returned in the response.' }),
  })
  .openapi({
    description: 'Response message for listing telemetry events for a customer.',
    required: [],
  })
  .openapi('GoogleChromeManagementV1ListTelemetryEventsResponse')

const GoogleChromeManagementV1TelemetryUserDeviceSchema = z
  .object({
    audioStatusReport: z
      .array(GoogleChromeManagementV1AudioStatusReportSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. Audio reports collected periodically sorted in a decreasing order of report_time.',
        readOnly: true,
      }),
    deviceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The unique Directory API ID of the device. This value is the same as the Admin Console's Directory API ID in the ChromeOS Devices tab.",
      }),
    peripheralsReport: z
      .array(GoogleChromeManagementV1PeripheralsReportSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. Peripherals reports collected periodically sorted in a decreasing order of report_time.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Telemetry data collected for a managed user and device.', required: [] })
  .openapi('GoogleChromeManagementV1TelemetryUserDevice')

const GoogleChromeManagementV1TelemetryUserSchema = z
  .object({
    customer: z
      .string()
      .exactOptional()
      .openapi({ description: 'G Suite Customer whose enterprise enrolled the device.' }),
    name: z.string().exactOptional().openapi({ description: 'Resource name of the user.' }),
    orgUnitId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Organization unit of the user.' }),
    userDevice: z
      .array(GoogleChromeManagementV1TelemetryUserDeviceSchema)
      .exactOptional()
      .openapi({ description: 'Telemetry data collected from a managed user and device.' }),
    userEmail: z.string().exactOptional().openapi({ description: 'Email address of the user.' }),
    userId: z.string().exactOptional().openapi({ description: 'Directory ID of the user.' }),
  })
  .openapi({ description: 'Telemetry data collected from a managed user.', required: [] })
  .openapi('GoogleChromeManagementV1TelemetryUser')

const GoogleChromeManagementV1ListTelemetryUsersResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Token to specify next page in the list.' }),
    telemetryUsers: z
      .array(GoogleChromeManagementV1TelemetryUserSchema)
      .exactOptional()
      .openapi({ description: 'Telemetry users returned in the response.' }),
  })
  .openapi({
    description: 'Response message for listing telemetry users for a customer.',
    required: [],
  })
  .openapi('GoogleChromeManagementV1ListTelemetryUsersResponse')

const XgafvParamsSchema = z
  .enum(['1', '2'])
  .exactOptional()
  .openapi({
    param: {
      description: 'V1 error format.',
      in: 'query',
      name: '$.xgafv',
      schema: { enum: ['1', '2'], type: 'string' },
      required: false,
    },
  })

const AccessTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth access token.',
      in: 'query',
      name: 'access_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const AltParamsSchema = z
  .enum(['json', 'media', 'proto'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json', 'media', 'proto'], type: 'string' },
      required: false,
    },
  })

const CallbackParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'JSONP',
      in: 'query',
      name: 'callback',
      schema: { type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Selector specifying which fields to include in a partial response.',
      in: 'query',
      name: 'fields',
      schema: { type: 'string' },
      required: false,
    },
  })

const KeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
      in: 'query',
      name: 'key',
      schema: { type: 'string' },
      required: false,
    },
  })

const OauthTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth 2.0 token for the current user.',
      in: 'query',
      name: 'oauth_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const PrettyPrintParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const QuotaUserParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Legacy upload protocol for media (e.g. "media", "multipart").',
      in: 'query',
      name: 'uploadType',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadProtocolParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Upload protocol for media (e.g. "raw", "multipart").',
      in: 'query',
      name: 'upload_protocol',
      schema: { type: 'string' },
      required: false,
    },
  })

const Oauth2SecurityScheme = {
  description: 'Oauth 2.0 implicit authentication',
  flows: {
    implicit: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/chrome.management.appdetails.readonly':
          'See detailed information about apps installed on Chrome browsers and devices managed by your organization',
        'https://www.googleapis.com/auth/chrome.management.reports.readonly':
          'See reports about devices and Chrome browsers managed within your organization',
        'https://www.googleapis.com/auth/chrome.management.telemetry.readonly':
          'See basic device and telemetry information collected from Chrome OS devices or users managed within your organization',
      },
    },
  },
  type: 'oauth2',
}

const Oauth2cSecurityScheme = {
  description: 'Oauth 2.0 authorizationCode authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/chrome.management.appdetails.readonly':
          'See detailed information about apps installed on Chrome browsers and devices managed by your organization',
        'https://www.googleapis.com/auth/chrome.management.reports.readonly':
          'See reports about devices and Chrome browsers managed within your organization',
        'https://www.googleapis.com/auth/chrome.management.telemetry.readonly':
          'See basic device and telemetry information collected from Chrome OS devices or users managed within your organization',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getV1CustomerAppsCountChromeAppRequestsRoute = createRoute({
  method: 'get',
  path: '/v1/{customer}/apps:countChromeAppRequests',
  tags: ['customers'],
  description: 'Generate summary of app installation requests.',
  operationId: 'chromemanagement.customers.apps.countChromeAppRequests',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Field used to order results. Supported fields: * request_count * latest_request_time',
            in: 'query',
            name: 'orderBy',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orgUnitId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the organizational unit.',
            in: 'query',
            name: 'orgUnitId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Maximum number of results to return. Maximum and default are 50, anything above will be coerced to 50.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Token to specify the page of the request to be returned.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      customer: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Customer id or "my_customer" to use the customer associated to the account making the request.',
            in: 'path',
            name: 'customer',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleChromeManagementV1CountChromeAppRequestsResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/chrome.management.appdetails.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/chrome.management.appdetails.readonly'],
    },
  ],
})

export const getV1CustomerReportsCountChromeBrowsersNeedingAttentionRoute = createRoute({
  method: 'get',
  path: '/v1/{customer}/reports:countChromeBrowsersNeedingAttention',
  tags: ['customers'],
  description:
    'Count of Chrome Browsers that have been recently enrolled, have new policy to be synced, or have no recent activity.',
  operationId: 'chromemanagement.customers.reports.countChromeBrowsersNeedingAttention',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      orgUnitId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The ID of the organizational unit. If omitted, all data will be returned.',
            in: 'query',
            name: 'orgUnitId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      customer: z
        .string()
        .openapi({
          param: {
            description: 'Required. The customer ID or "my_customer" prefixed with "customers/".',
            in: 'path',
            name: 'customer',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleChromeManagementV1CountChromeBrowsersNeedingAttentionResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/chrome.management.reports.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/chrome.management.reports.readonly'],
    },
  ],
})

export const getV1CustomerReportsCountChromeDevicesReachingAutoExpirationDateRoute = createRoute({
  method: 'get',
  path: '/v1/{customer}/reports:countChromeDevicesReachingAutoExpirationDate',
  tags: ['customers'],
  description:
    'Generate report of the number of devices expiring in each month of the selected time frame. Devices are grouped by auto update expiration date and model. Further information can be found [here](https://support.google.com/chrome/a/answer/10564947).',
  operationId: 'chromemanagement.customers.reports.countChromeDevicesReachingAutoExpirationDate',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      maxAueDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Maximum expiration date in format yyyy-mm-dd in UTC timezone. If included returns all devices that have already expired and devices with auto expiration date equal to or earlier than the maximum date.',
            in: 'query',
            name: 'maxAueDate',
            schema: { type: 'string' },
            required: false,
          },
        }),
      minAueDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Maximum expiration date in format yyyy-mm-dd in UTC timezone. If included returns all devices that have already expired and devices with auto expiration date equal to or later than the minimum date.',
            in: 'query',
            name: 'minAueDate',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orgUnitId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The organizational unit ID, if omitted, will return data for all organizational units.',
            in: 'query',
            name: 'orgUnitId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      customer: z
        .string()
        .openapi({
          param: {
            description: 'Required. The customer ID or "my_customer" prefixed with "customers/".',
            in: 'path',
            name: 'customer',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema:
            GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/chrome.management.reports.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/chrome.management.reports.readonly'],
    },
  ],
})

export const getV1CustomerReportsCountChromeDevicesThatNeedAttentionRoute = createRoute({
  method: 'get',
  path: '/v1/{customer}/reports:countChromeDevicesThatNeedAttention',
  tags: ['customers'],
  description:
    'Counts of ChromeOS devices that have not synced policies or have lacked user activity in the past 28 days, are out of date, or are not complaint. Further information can be found here https://support.google.com/chrome/a/answer/10564947',
  operationId: 'chromemanagement.customers.reports.countChromeDevicesThatNeedAttention',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      orgUnitId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The ID of the organizational unit. If omitted, all data will be returned.',
            in: 'query',
            name: 'orgUnitId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      readMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. Mask of the fields that should be populated in the returned report.',
            in: 'query',
            name: 'readMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      customer: z
        .string()
        .openapi({
          param: {
            description: 'Required. The customer ID or "my_customer" prefixed with "customers/".',
            in: 'path',
            name: 'customer',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/chrome.management.reports.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/chrome.management.reports.readonly'],
    },
  ],
})

export const getV1CustomerReportsCountChromeHardwareFleetDevicesRoute = createRoute({
  method: 'get',
  path: '/v1/{customer}/reports:countChromeHardwareFleetDevices',
  tags: ['customers'],
  description:
    'Counts of devices with a specific hardware specification from the requested hardware type (for example model name, processor type). Further information can be found here https://support.google.com/chrome/a/answer/10564947',
  operationId: 'chromemanagement.customers.reports.countChromeHardwareFleetDevices',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      orgUnitId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The ID of the organizational unit. If omitted, all data will be returned.',
            in: 'query',
            name: 'orgUnitId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      readMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. Mask of the fields that should be populated in the returned report.',
            in: 'query',
            name: 'readMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      customer: z
        .string()
        .openapi({
          param: {
            description: 'Required. The customer ID or "my_customer".',
            in: 'path',
            name: 'customer',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/chrome.management.reports.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/chrome.management.reports.readonly'],
    },
  ],
})

export const getV1CustomerReportsCountChromeVersionsRoute = createRoute({
  method: 'get',
  path: '/v1/{customer}/reports:countChromeVersions',
  tags: ['customers'],
  description: 'Generate report of installed Chrome versions.',
  operationId: 'chromemanagement.customers.reports.countChromeVersions',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Supported filter fields: * last_active_date',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orgUnitId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the organizational unit.',
            in: 'query',
            name: 'orgUnitId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return. Maximum and default are 100.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Token to specify the page of the request to be returned.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      customer: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Customer id or "my_customer" to use the customer associated to the account making the request.',
            in: 'path',
            name: 'customer',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleChromeManagementV1CountChromeVersionsResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/chrome.management.reports.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/chrome.management.reports.readonly'],
    },
  ],
})

export const getV1CustomerReportsCountInstalledAppsRoute = createRoute({
  method: 'get',
  path: '/v1/{customer}/reports:countInstalledApps',
  tags: ['customers'],
  description: 'Generate report of app installations.',
  operationId: 'chromemanagement.customers.reports.countInstalledApps',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Supported filter fields: * app_name * app_type * install_type * number_of_permissions * total_install_count * latest_profile_active_date * permission_name * app_id',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Field used to order results. Supported order by fields: * app_name * app_type * install_type * number_of_permissions * total_install_count * app_id',
            in: 'query',
            name: 'orderBy',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orgUnitId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the organizational unit.',
            in: 'query',
            name: 'orgUnitId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return. Maximum and default are 100.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Token to specify the page of the request to be returned.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      customer: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Customer id or "my_customer" to use the customer associated to the account making the request.',
            in: 'path',
            name: 'customer',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleChromeManagementV1CountInstalledAppsResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/chrome.management.reports.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/chrome.management.reports.readonly'],
    },
  ],
})

export const getV1CustomerReportsFindInstalledAppDevicesRoute = createRoute({
  method: 'get',
  path: '/v1/{customer}/reports:findInstalledAppDevices',
  tags: ['customers'],
  description:
    'Generate report of managed Chrome browser devices that have a specified app installed.',
  operationId: 'chromemanagement.customers.reports.findInstalledAppDevices',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      appId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Unique identifier of the app. For Chrome apps and extensions, the 32-character id (e.g. ehoadneljpdggcbbknedodolkkjodefl). For Android apps, the package name (e.g. com.evernote).',
            in: 'query',
            name: 'appId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      appType: z
        .enum(['APP_TYPE_UNSPECIFIED', 'EXTENSION', 'APP', 'THEME', 'HOSTED_APP', 'ANDROID_APP'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Type of the app.',
            in: 'query',
            name: 'appType',
            schema: {
              enum: [
                'APP_TYPE_UNSPECIFIED',
                'EXTENSION',
                'APP',
                'THEME',
                'HOSTED_APP',
                'ANDROID_APP',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Query string to filter results, AND-separated fields in EBNF syntax. Note: OR operations are not supported in this filter. Supported filter fields: * last_active_date',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Field used to order results. Supported order by fields: * machine * device_id',
            in: 'query',
            name: 'orderBy',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orgUnitId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the organizational unit.',
            in: 'query',
            name: 'orgUnitId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return. Maximum and default are 100.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Token to specify the page of the request to be returned.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      customer: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Customer id or "my_customer" to use the customer associated to the account making the request.',
            in: 'path',
            name: 'customer',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleChromeManagementV1FindInstalledAppDevicesResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/chrome.management.reports.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/chrome.management.reports.readonly'],
    },
  ],
})

export const getV1NameRoute = createRoute({
  method: 'get',
  path: '/v1/{name}',
  tags: ['customers'],
  description: 'Get telemetry user.',
  operationId: 'chromemanagement.customers.telemetry.users.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      readMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Read mask to specify which fields to return.',
            in: 'query',
            name: 'readMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Required. Name of the `TelemetryUser` to return.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleChromeManagementV1TelemetryUserSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/chrome.management.telemetry.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/chrome.management.telemetry.readonly'],
    },
  ],
})

export const getV1ParentTelemetryDevicesRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/telemetry/devices',
  tags: ['customers'],
  description: 'List all telemetry devices.',
  operationId: 'chromemanagement.customers.telemetry.devices.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Only include resources that match the filter. Supported filter fields: - org_unit_id - serial_number - device_id - reports_timestamp The "reports_timestamp" filter accepts either the Unix Epoch milliseconds format or the RFC3339 UTC "Zulu" format with nanosecond resolution and up to nine fractional digits. Both formats should be surrounded by simple double quotes. Examples: "2014-10-02T15:01:23Z", "2014-10-02T15:01:23.045123456Z", "1679283943823".',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Maximum number of results to return. Default value is 100. Maximum value is 1000.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Token to specify next page in the list.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      readMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. Read mask to specify which fields to return.',
            in: 'query',
            name: 'readMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Customer id or "my_customer" to use the customer associated to the account making the request.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleChromeManagementV1ListTelemetryDevicesResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/chrome.management.telemetry.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/chrome.management.telemetry.readonly'],
    },
  ],
})

export const getV1ParentTelemetryEventsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/telemetry/events',
  tags: ['customers'],
  description: 'List telemetry events.',
  operationId: 'chromemanagement.customers.telemetry.events.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Only include resources that match the filter. Supported filter fields: - device_id - user_id - device_org_unit_id - user_org_unit_id - timestamp - event_type The "timestamp" filter accepts either the Unix Epoch milliseconds format or the RFC3339 UTC "Zulu" format with nanosecond resolution and up to nine fractional digits. Both formats should be surrounded by simple double quotes. Examples: "2014-10-02T15:01:23Z", "2014-10-02T15:01:23.045123456Z", "1679283943823".',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Maximum number of results to return. Default value is 100. Maximum value is 1000.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Token to specify next page in the list.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      readMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. Read mask to specify which fields to return.',
            in: 'query',
            name: 'readMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Customer id or "my_customer" to use the customer associated to the account making the request.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleChromeManagementV1ListTelemetryEventsResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/chrome.management.telemetry.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/chrome.management.telemetry.readonly'],
    },
  ],
})

export const getV1ParentTelemetryUsersRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/telemetry/users',
  tags: ['customers'],
  description: 'List all telemetry users.',
  operationId: 'chromemanagement.customers.telemetry.users.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Only include resources that match the filter. Supported filter fields: - user_id - user_org_unit_id ',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Maximum number of results to return. Default value is 100. Maximum value is 1000.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Token to specify next page in the list.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      readMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Read mask to specify which fields to return.',
            in: 'query',
            name: 'readMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Customer id or "my_customer" to use the customer associated to the account making the request.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleChromeManagementV1ListTelemetryUsersResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/chrome.management.telemetry.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/chrome.management.telemetry.readonly'],
    },
  ],
})
