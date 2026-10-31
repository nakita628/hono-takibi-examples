import { createRoute, z } from '@hono/zod-openapi'

const DimensionsSchema = z
  .object({
    heightPixels: z.int32().exactOptional().openapi({ description: 'The height in pixels.' }),
    widthPixels: z.int32().exactOptional().openapi({ description: 'The width in pixels.' }),
  })
  .openapi({ description: 'Dimensions.', required: [] })
  .openapi('Dimensions')

const InventorySourceDisplayCreativeConfigSchema = z
  .object({
    creativeSize: DimensionsSchema.exactOptional().openapi({
      description:
        'The size requirements for display creatives that can be assigned to the inventory source.',
    }),
  })
  .openapi({ description: 'The configuration for display creatives.', required: [] })
  .openapi('InventorySourceDisplayCreativeConfig')

const InventorySourceVideoCreativeConfigSchema = z
  .object({
    duration: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The duration requirements for the video creatives that can be assigned to the inventory source.',
      }),
  })
  .openapi({ description: 'The configuration for video creatives.', required: [] })
  .openapi('InventorySourceVideoCreativeConfig')

type CreativeConfigType = {
  creativeType?:
    | 'CREATIVE_TYPE_UNSPECIFIED'
    | 'CREATIVE_TYPE_STANDARD'
    | 'CREATIVE_TYPE_EXPANDABLE'
    | 'CREATIVE_TYPE_VIDEO'
    | 'CREATIVE_TYPE_NATIVE'
    | 'CREATIVE_TYPE_TEMPLATED_APP_INSTALL'
    | 'CREATIVE_TYPE_NATIVE_SITE_SQUARE'
    | 'CREATIVE_TYPE_TEMPLATED_APP_INSTALL_INTERSTITIAL'
    | 'CREATIVE_TYPE_LIGHTBOX'
    | 'CREATIVE_TYPE_NATIVE_APP_INSTALL'
    | 'CREATIVE_TYPE_NATIVE_APP_INSTALL_SQUARE'
    | 'CREATIVE_TYPE_AUDIO'
    | 'CREATIVE_TYPE_PUBLISHER_HOSTED'
    | 'CREATIVE_TYPE_NATIVE_VIDEO'
    | 'CREATIVE_TYPE_TEMPLATED_APP_INSTALL_VIDEO'
  displayCreativeConfig?: z.infer<typeof InventorySourceDisplayCreativeConfigSchema>
  videoCreativeConfig?: z.infer<typeof InventorySourceVideoCreativeConfigSchema>
}

const ActivateManualTriggerRequestSchema = z
  .object({})
  .openapi({ description: 'Request message for ManualTriggerService.ActivateManualTrigger.' })
  .openapi('ActivateManualTriggerRequest')

const ActiveViewVideoViewabilityMetricConfigSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The display name of the custom metric.' }),
    minimumDuration: z
      .enum([
        'VIDEO_DURATION_UNSPECIFIED',
        'VIDEO_DURATION_SECONDS_NONE',
        'VIDEO_DURATION_SECONDS_0',
        'VIDEO_DURATION_SECONDS_1',
        'VIDEO_DURATION_SECONDS_2',
        'VIDEO_DURATION_SECONDS_3',
        'VIDEO_DURATION_SECONDS_4',
        'VIDEO_DURATION_SECONDS_5',
        'VIDEO_DURATION_SECONDS_6',
        'VIDEO_DURATION_SECONDS_7',
        'VIDEO_DURATION_SECONDS_8',
        'VIDEO_DURATION_SECONDS_9',
        'VIDEO_DURATION_SECONDS_10',
        'VIDEO_DURATION_SECONDS_11',
        'VIDEO_DURATION_SECONDS_12',
        'VIDEO_DURATION_SECONDS_13',
        'VIDEO_DURATION_SECONDS_14',
        'VIDEO_DURATION_SECONDS_15',
        'VIDEO_DURATION_SECONDS_30',
        'VIDEO_DURATION_SECONDS_45',
        'VIDEO_DURATION_SECONDS_60',
      ])
      .exactOptional()
      .openapi({
        description:
          'The minimum visible video duration required (in seconds) in order for an impression to be recorded. You must specify minimum_duration, minimum_quartile or both. If both are specified, an impression meets the metric criteria if either requirement is met (whichever happens first).',
      }),
    minimumQuartile: z
      .enum([
        'VIDEO_DURATION_QUARTILE_UNSPECIFIED',
        'VIDEO_DURATION_QUARTILE_NONE',
        'VIDEO_DURATION_QUARTILE_FIRST',
        'VIDEO_DURATION_QUARTILE_SECOND',
        'VIDEO_DURATION_QUARTILE_THIRD',
        'VIDEO_DURATION_QUARTILE_FOURTH',
      ])
      .exactOptional()
      .openapi({
        description:
          'The minimum visible video duration required, based on the video quartiles, in order for an impression to be recorded. You must specify minimum_duration, minimum_quartile or both. If both are specified, an impression meets the metric criteria if either requirement is met (whichever happens first).',
      }),
    minimumViewability: z
      .enum([
        'VIEWABILITY_PERCENT_UNSPECIFIED',
        'VIEWABILITY_PERCENT_0',
        'VIEWABILITY_PERCENT_25',
        'VIEWABILITY_PERCENT_50',
        'VIEWABILITY_PERCENT_75',
        'VIEWABILITY_PERCENT_100',
      ])
      .exactOptional()
      .openapi({
        description:
          "Required. The minimum percentage of the video ad's pixels visible on the screen in order for an impression to be recorded.",
      }),
    minimumVolume: z
      .enum([
        'VIDEO_VOLUME_PERCENT_UNSPECIFIED',
        'VIDEO_VOLUME_PERCENT_0',
        'VIDEO_VOLUME_PERCENT_10',
      ])
      .exactOptional()
      .openapi({
        description:
          "Required. The minimum percentage of the video ad's volume required in order for an impression to be recorded.",
      }),
  })
  .openapi({
    description: 'Configuration for custom Active View video viewability metrics.',
    required: [],
  })
  .openapi('ActiveViewVideoViewabilityMetricConfig')

const AdUrlSchema = z
  .object({
    type: z
      .enum([
        'AD_URL_TYPE_UNSPECIFIED',
        'AD_URL_TYPE_BEACON_IMPRESSION',
        'AD_URL_TYPE_BEACON_EXPANDABLE_DCM_IMPRESSION',
        'AD_URL_TYPE_BEACON_CLICK',
        'AD_URL_TYPE_BEACON_SKIP',
      ])
      .exactOptional()
      .openapi({ description: 'The type of the Ad URL.' }),
    url: z.string().exactOptional().openapi({ description: 'The URL string value.' }),
  })
  .openapi({ description: 'Additional URLs related to the ad, including beacons.', required: [] })
  .openapi('AdUrl')

const AdlooxSchema = z
  .object({
    excludedAdlooxCategories: z
      .array(
        z.enum([
          'ADLOOX_UNSPECIFIED',
          'ADULT_CONTENT_HARD',
          'ADULT_CONTENT_SOFT',
          'ILLEGAL_CONTENT',
          'BORDERLINE_CONTENT',
          'DISCRIMINATORY_CONTENT',
          'VIOLENT_CONTENT_WEAPONS',
          'LOW_VIEWABILITY_DOMAINS',
          'FRAUD',
        ]),
      )
      .exactOptional()
      .openapi({ description: "Adloox's brand safety settings." }),
  })
  .openapi({ description: 'Details of Adloox settings.', required: [] })
  .openapi('Adloox')

const CmHybridConfigSchema = z
  .object({
    cmAccountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Immutable. Account ID of the CM360 Floodlight configuration linked with the DV360 advertiser.',
      }),
    cmFloodlightConfigId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Immutable. ID of the CM360 Floodlight configuration linked with the DV360 advertiser.',
      }),
    cmFloodlightLinkingAuthorized: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Required. Immutable. By setting this field to `true`, you, on behalf of your company, authorize the sharing of information from the given Floodlight configuration to this Display & Video 360 advertiser.',
      }),
    cmSyncableSiteIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of CM360 sites whose placements will be synced to DV360 as creatives. If absent or empty in CreateAdvertiser method, the system will automatically create a CM360 site. Removing sites from this list may cause DV360 creatives synced from CM360 to be deleted. At least one site must be specified.',
      }),
    dv360ToCmCostReportingEnabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether or not to report DV360 cost to CM360.' }),
    dv360ToCmDataSharingEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether or not to include DV360 data in CM360 data transfer reports.',
      }),
  })
  .openapi({
    description:
      'Settings for advertisers that use both Campaign Manager 360 (CM360) and third-party ad servers.',
    required: [],
  })
  .openapi('CmHybridConfig')

const ThirdPartyOnlyConfigSchema = z
  .object({
    pixelOrderIdReportingEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether or not order ID reporting for pixels is enabled. This value cannot be changed once set to `true`.',
      }),
  })
  .openapi({
    description: 'Settings for advertisers that use third-party ad servers only.',
    required: [],
  })
  .openapi('ThirdPartyOnlyConfig')

const AdvertiserAdServerConfigSchema = z
  .object({
    cmHybridConfig: CmHybridConfigSchema.exactOptional().openapi({
      description:
        'The configuration for advertisers that use both Campaign Manager 360 (CM360) and third-party ad servers.',
    }),
    thirdPartyOnlyConfig: ThirdPartyOnlyConfigSchema.exactOptional().openapi({
      description: 'The configuration for advertisers that use third-party ad servers only.',
    }),
  })
  .openapi({ description: 'Ad server related settings of an advertiser.', required: [] })
  .openapi('AdvertiserAdServerConfig')

const AdvertiserBillingConfigSchema = z
  .object({
    billingProfileId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The ID of a billing profile assigned to the advertiser. This field will default to the default billing profile ID of the advertiser's parent partner if a value is not provided.",
      }),
  })
  .openapi({ description: 'Billing related settings of an advertiser.', required: [] })
  .openapi('AdvertiserBillingConfig')

const AdvertiserCreativeConfigSchema = z
  .object({
    dynamicCreativeEnabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether or not the advertiser is enabled for dynamic creatives.' }),
    iasClientId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An ID for configuring campaign monitoring provided by Integral Ad Service (IAS). The DV360 system will append an IAS "Campaign Monitor" tag containing this ID to the creative tag.',
      }),
    obaComplianceDisabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Whether or not to use DV360's Online Behavioral Advertising (OBA) compliance. Warning: Changing OBA settings may cause the audit status of your creatives to be reset by some ad exchanges, making them ineligible to serve until they are re-approved.",
      }),
    videoCreativeDataSharingAuthorized: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "By setting this field to `true`, you, on behalf of your company, authorize Google to use video creatives associated with this Display & Video 360 advertiser to provide reporting and features related to the advertiser's television campaigns. Applicable only when the advertiser has a CM360 hybrid ad server configuration.",
      }),
  })
  .openapi({ description: 'Creatives related settings of an advertiser.', required: [] })
  .openapi('AdvertiserCreativeConfig')

const SdfConfigSchema = z
  .object({
    adminEmail: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An administrator email address to which the SDF processing status reports will be sent.',
      }),
    version: z
      .enum([
        'SDF_VERSION_UNSPECIFIED',
        'SDF_VERSION_3_1',
        'SDF_VERSION_4',
        'SDF_VERSION_4_1',
        'SDF_VERSION_4_2',
        'SDF_VERSION_5',
        'SDF_VERSION_5_1',
        'SDF_VERSION_5_2',
        'SDF_VERSION_5_3',
        'SDF_VERSION_5_4',
        'SDF_VERSION_5_5',
      ])
      .exactOptional()
      .openapi({ description: 'Required. The version of SDF being used.' }),
  })
  .openapi({ description: 'Structured Data File (SDF) related settings.', required: [] })
  .openapi('SdfConfig')

const AdvertiserSdfConfigSchema = z
  .object({
    overridePartnerSdfConfig: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether or not this advertiser overrides the SDF configuration of its parent partner. By default, an advertiser inherits the SDF configuration from the parent partner. To override the partner configuration, set this field to `true` and provide the new configuration in sdfConfig.',
      }),
    sdfConfig: SdfConfigSchema.exactOptional().openapi({
      description:
        'The SDF configuration for the advertiser. * Required when overridePartnerSdfConfig is `true`. * Output only when overridePartnerSdfConfig is `false`.',
    }),
  })
  .openapi({ description: 'Structured Data Files (SDF) settings of an advertiser.', required: [] })
  .openapi('AdvertiserSdfConfig')

const AdvertiserDataAccessConfigSchema = z
  .object({
    sdfConfig: AdvertiserSdfConfigSchema.exactOptional().openapi({
      description:
        'Structured Data Files (SDF) settings for the advertiser. If not specified, the SDF settings of the parent partner are used.',
    }),
  })
  .openapi({
    description: 'Settings that control how advertiser related data may be accessed.',
    required: [],
  })
  .openapi('AdvertiserDataAccessConfig')

const AdvertiserGeneralConfigSchema = z
  .object({
    currencyCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. Immutable. Advertiser's currency in ISO 4217 format. Accepted codes and the currencies they represent are: Currency Code : Currency Name * `ARS` : Argentine Peso * `AUD` : Australian Dollar * `BRL` : Brazilian Real * `CAD` : Canadian Dollar * `CHF` : Swiss Franc * `CLP` : Chilean Peso * `CNY` : Chinese Yuan * `COP` : Colombian Peso * `CZK` : Czech Koruna * `DKK` : Danish Krone * `EGP` : Egyption Pound * `EUR` : Euro * `GBP` : British Pound * `HKD` : Hong Kong Dollar * `HUF` : Hungarian Forint * `IDR` : Indonesian Rupiah * `ILS` : Israeli Shekel * `INR` : Indian Rupee * `JPY` : Japanese Yen * `KRW` : South Korean Won * `MXN` : Mexican Pesos * `MYR` : Malaysian Ringgit * `NGN` : Nigerian Naira * `NOK` : Norwegian Krone * `NZD` : New Zealand Dollar * `PEN` : Peruvian Nuevo Sol * `PLN` : Polish Zloty * `RON` : New Romanian Leu * `RUB` : Russian Ruble * `SEK` : Swedish Krona * `TRY` : Turkish Lira * `TWD` : New Taiwan Dollar * `USD` : US Dollar * `ZAR` : South African Rand",
      }),
    domainUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. The domain URL of the advertiser's primary website. The system will send this information to publishers that require website URL to associate a campaign with an advertiser. Provide a URL with no path or query string, beginning with `http:` or `https:`. For example, http://www.example.com",
      }),
    timeZone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. The standard TZ database name of the advertiser's time zone. For example, `America/New_York`. See more at: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones For CM360 hybrid advertisers, the time zone is the same as that of the associated CM360 account; for third-party only advertisers, the time zone is the same as that of the parent partner.",
        readOnly: true,
      }),
  })
  .openapi({ description: 'General settings of an advertiser.', required: [] })
  .openapi('AdvertiserGeneralConfig')

const IntegrationDetailsSchema = z
  .object({
    details: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Additional details of the entry in string format. Must be UTF-8 encoded with a length of no more than 1000 characters.',
      }),
    integrationCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An external identifier to be associated with the entry. The integration code will show up together with the entry in many places in the system, for example, reporting. Must be UTF-8 encoded with a length of no more than 500 characters.',
      }),
  })
  .openapi({ description: 'Integration details of an entry.', required: [] })
  .openapi('IntegrationDetails')

const AdvertiserTargetingConfigSchema = z
  .object({
    exemptTvFromViewabilityTargeting: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether or not connected TV devices are exempt from viewability targeting for all video line items under the advertiser.',
      }),
  })
  .openapi({
    description: 'Targeting settings related to ad serving of an advertiser.',
    required: [],
  })
  .openapi('AdvertiserTargetingConfig')

const AdvertiserSchema = z
  .object({
    adServerConfig: AdvertiserAdServerConfigSchema.exactOptional().openapi({
      description: 'Required. Immutable. Ad server related settings of the advertiser.',
    }),
    advertiserId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The unique ID of the advertiser. Assigned by the system.',
        readOnly: true,
      }),
    billingConfig: AdvertiserBillingConfigSchema.exactOptional().openapi({
      description: 'Billing related settings of the advertiser.',
    }),
    creativeConfig: AdvertiserCreativeConfigSchema.exactOptional().openapi({
      description: 'Required. Creative related settings of the advertiser.',
    }),
    dataAccessConfig: AdvertiserDataAccessConfigSchema.exactOptional().openapi({
      description: 'Settings that control how advertiser data may be accessed.',
    }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The display name of the advertiser. Must be UTF-8 encoded with a maximum size of 240 bytes.',
      }),
    entityStatus: z
      .enum([
        'ENTITY_STATUS_UNSPECIFIED',
        'ENTITY_STATUS_ACTIVE',
        'ENTITY_STATUS_ARCHIVED',
        'ENTITY_STATUS_DRAFT',
        'ENTITY_STATUS_PAUSED',
        'ENTITY_STATUS_SCHEDULED_FOR_DELETION',
      ])
      .exactOptional()
      .openapi({
        description:
          'Required. Controls whether or not insertion orders and line items of the advertiser can spend their budgets and bid on inventory. * Accepted values are `ENTITY_STATUS_ACTIVE`, `ENTITY_STATUS_PAUSED` and `ENTITY_STATUS_SCHEDULED_FOR_DELETION`. * If set to `ENTITY_STATUS_SCHEDULED_FOR_DELETION`, the advertiser will be deleted 30 days from when it was first scheduled for deletion.',
      }),
    generalConfig: AdvertiserGeneralConfigSchema.exactOptional().openapi({
      description: 'Required. General settings of the advertiser.',
    }),
    integrationDetails: IntegrationDetailsSchema.exactOptional().openapi({
      description:
        'Integration details of the advertiser. Only integrationCode is currently applicable to advertiser. Other fields of IntegrationDetails are not supported and will be ignored if provided.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The resource name of the advertiser.',
        readOnly: true,
      }),
    partnerId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Immutable. The unique ID of the partner that the advertiser belongs to.',
      }),
    prismaEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether integration with Mediaocean (Prisma) is enabled. By enabling this, you agree to the following: On behalf of my company, I authorize Mediaocean (Prisma) to send budget segment plans to Google, and I authorize Google to send corresponding reporting and invoices from DV360 to Mediaocean for the purposes of budget planning, billing, and reconciliation for this advertiser.',
      }),
    servingConfig: AdvertiserTargetingConfigSchema.exactOptional().openapi({
      description: 'Targeting settings related to ad serving of the advertiser.',
    }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The timestamp when the advertiser was last updated. Assigned by the system.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'A single advertiser in Display & Video 360 (DV360).', required: [] })
  .openapi('Advertiser')

const AgeRangeAssignedTargetingOptionDetailsSchema = z
  .object({
    ageRange: z
      .enum([
        'AGE_RANGE_UNSPECIFIED',
        'AGE_RANGE_18_24',
        'AGE_RANGE_25_34',
        'AGE_RANGE_35_44',
        'AGE_RANGE_45_54',
        'AGE_RANGE_55_64',
        'AGE_RANGE_65_PLUS',
        'AGE_RANGE_UNKNOWN',
        'AGE_RANGE_18_20',
        'AGE_RANGE_21_24',
        'AGE_RANGE_25_29',
        'AGE_RANGE_30_34',
        'AGE_RANGE_35_39',
        'AGE_RANGE_40_44',
        'AGE_RANGE_45_49',
        'AGE_RANGE_50_54',
        'AGE_RANGE_55_59',
        'AGE_RANGE_60_64',
      ])
      .exactOptional()
      .openapi({
        description:
          'The age range of an audience. We only support targeting a continuous age range of an audience. Thus, the age range represented in this field can be 1) targeted solely, or, 2) part of a larger continuous age range. The reach of a continuous age range targeting can be expanded by also targeting an audience of an unknown age. Output only in v1. Required in v2.',
      }),
  })
  .openapi({
    description:
      'Represents a targetable age range. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_AGE_RANGE`.',
    required: [],
  })
  .openapi('AgeRangeAssignedTargetingOptionDetails')

const AgeRangeTargetingOptionDetailsSchema = z
  .object({
    ageRange: z
      .enum([
        'AGE_RANGE_UNSPECIFIED',
        'AGE_RANGE_18_24',
        'AGE_RANGE_25_34',
        'AGE_RANGE_35_44',
        'AGE_RANGE_45_54',
        'AGE_RANGE_55_64',
        'AGE_RANGE_65_PLUS',
        'AGE_RANGE_UNKNOWN',
        'AGE_RANGE_18_20',
        'AGE_RANGE_21_24',
        'AGE_RANGE_25_29',
        'AGE_RANGE_30_34',
        'AGE_RANGE_35_39',
        'AGE_RANGE_40_44',
        'AGE_RANGE_45_49',
        'AGE_RANGE_50_54',
        'AGE_RANGE_55_59',
        'AGE_RANGE_60_64',
      ])
      .exactOptional()
      .openapi({ description: 'Output only. The age range of an audience.', readOnly: true }),
  })
  .openapi({
    description:
      'Represents a targetable age range. This will be populated in the age_range_details field when targeting_type is `TARGETING_TYPE_AGE_RANGE`.',
    required: [],
  })
  .openapi('AgeRangeTargetingOptionDetails')

const AppAssignedTargetingOptionDetailsSchema = z
  .object({
    appId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. The ID of the app. Android's Play store app uses bundle ID, for example `com.google.android.gm`. Apple's App store app ID uses 9 digit string, for example `422689480`.",
      }),
    appPlatform: z
      .enum([
        'APP_PLATFORM_UNSPECIFIED',
        'APP_PLATFORM_IOS',
        'APP_PLATFORM_ANDROID',
        'APP_PLATFORM_ROKU',
        'APP_PLATFORM_AMAZON_FIRETV',
        'APP_PLATFORM_PLAYSTATION',
        'APP_PLATFORM_APPLE_TV',
        'APP_PLATFORM_XBOX',
        'APP_PLATFORM_SAMSUNG_TV',
        'APP_PLATFORM_ANDROID_TV',
        'APP_PLATFORM_GENERIC_CTV',
      ])
      .exactOptional()
      .openapi({
        description:
          'Indicates the platform of the targeted app. If this field is not specified, the app platform will be assumed to be mobile (i.e., Android or iOS), and we will derive the appropriate mobile platform from the app ID.',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The display name of the app.', readOnly: true }),
    negative: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if this option is being negatively targeted.' }),
  })
  .openapi({
    description:
      'Details for assigned app targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_APP`.',
    required: [],
  })
  .openapi('AppAssignedTargetingOptionDetails')

const AppCategoryAssignedTargetingOptionDetailsSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The display name of the app category.',
        readOnly: true,
      }),
    negative: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if this option is being negatively targeted.' }),
    targetingOptionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The targeting_option_id field when targeting_type is `TARGETING_TYPE_APP_CATEGORY`.',
      }),
  })
  .openapi({
    description:
      'Details for assigned app category targeting option. This will be populated in the app_category_details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_APP_CATEGORY`.',
    required: [],
  })
  .openapi('AppCategoryAssignedTargetingOptionDetails')

const AppCategoryTargetingOptionDetailsSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The name of the app collection.', readOnly: true }),
  })
  .openapi({
    description:
      'Represents a targetable collection of apps. A collection lets you target dynamic groups of related apps that are maintained by the platform, for example `All Apps/Google Play/Games`. This will be populated in the app_category_details field when targeting_type is `TARGETING_TYPE_APP_CATEGORY`.',
    required: [],
  })
  .openapi('AppCategoryTargetingOptionDetails')

const AssetSchema = z
  .object({
    content: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The asset content. For uploaded assets, the content is the serving path.',
      }),
    mediaId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Media ID of the uploaded asset. This is a unique identifier for the asset. This ID can be passed to other API calls, e.g. CreateCreative to associate the asset with a creative. The Media ID space updated on **April 5, 2023**. Update media IDs cached before **April 5, 2023** by retrieving the new media ID from associated creative resources or re-uploading the asset.',
      }),
  })
  .openapi({ description: 'A single asset.', required: [] })
  .openapi('Asset')

const AssetAssociationSchema = z
  .object({
    asset: AssetSchema.exactOptional().openapi({ description: 'The associated asset.' }),
    role: z
      .enum([
        'ASSET_ROLE_UNSPECIFIED',
        'ASSET_ROLE_MAIN',
        'ASSET_ROLE_BACKUP',
        'ASSET_ROLE_POLITE_LOAD',
        'ASSET_ROLE_HEADLINE',
        'ASSET_ROLE_LONG_HEADLINE',
        'ASSET_ROLE_BODY',
        'ASSET_ROLE_LONG_BODY',
        'ASSET_ROLE_CAPTION_URL',
        'ASSET_ROLE_CALL_TO_ACTION',
        'ASSET_ROLE_ADVERTISER_NAME',
        'ASSET_ROLE_PRICE',
        'ASSET_ROLE_ANDROID_APP_ID',
        'ASSET_ROLE_IOS_APP_ID',
        'ASSET_ROLE_RATING',
        'ASSET_ROLE_ICON',
        'ASSET_ROLE_COVER_IMAGE',
      ])
      .exactOptional()
      .openapi({ description: 'The role of this asset for the creative.' }),
  })
  .openapi({ description: 'Asset association for the creative.', required: [] })
  .openapi('AssetAssociation')

const AssignedInventorySourceSchema = z
  .object({
    assignedInventorySourceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The unique ID of the assigned inventory source. The ID is only unique within a given inventory source group. It may be reused in other contexts.',
        readOnly: true,
      }),
    inventorySourceId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The ID of the inventory source entity being targeted.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The resource name of the assigned inventory source.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'An assignment between a targetable inventory source and an inventory source group.',
    required: [],
  })
  .openapi('AssignedInventorySource')

const AssignedLocationSchema = z
  .object({
    assignedLocationId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The unique ID of the assigned location. The ID is only unique within a location list. It may be reused in other contexts.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The resource name of the assigned location.',
        readOnly: true,
      }),
    targetingOptionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The ID of the targeting option assigned to the location list. Must be of type TARGETING_TYPE_GEO_REGION.',
      }),
  })
  .openapi({
    description:
      'An assignment between a location list and a relevant targeting option. Currently, geo region targeting options are the only supported option for assignment.',
    required: [],
  })
  .openapi('AssignedLocation')

const FirstAndThirdPartyAudienceTargetingSettingSchema = z
  .object({
    firstAndThirdPartyAudienceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. First and third party audience id of the first and third party audience targeting setting. This id is first_and_third_party_audience_id.',
      }),
    recency: z
      .enum([
        'RECENCY_NO_LIMIT',
        'RECENCY_1_MINUTE',
        'RECENCY_5_MINUTES',
        'RECENCY_10_MINUTES',
        'RECENCY_15_MINUTES',
        'RECENCY_30_MINUTES',
        'RECENCY_1_HOUR',
        'RECENCY_2_HOURS',
        'RECENCY_3_HOURS',
        'RECENCY_6_HOURS',
        'RECENCY_12_HOURS',
        'RECENCY_1_DAY',
        'RECENCY_2_DAYS',
        'RECENCY_3_DAYS',
        'RECENCY_5_DAYS',
        'RECENCY_7_DAYS',
        'RECENCY_10_DAYS',
        'RECENCY_14_DAYS',
        'RECENCY_15_DAYS',
        'RECENCY_21_DAYS',
        'RECENCY_28_DAYS',
        'RECENCY_30_DAYS',
        'RECENCY_40_DAYS',
        'RECENCY_45_DAYS',
        'RECENCY_60_DAYS',
        'RECENCY_90_DAYS',
        'RECENCY_120_DAYS',
        'RECENCY_180_DAYS',
        'RECENCY_270_DAYS',
        'RECENCY_365_DAYS',
      ])
      .exactOptional()
      .openapi({
        description:
          'The recency of the first and third party audience targeting setting. Only applicable to first party audiences, otherwise will be ignored. For more info, refer to https://support.google.com/displayvideo/answer/2949947#recency When unspecified, no recency limit will be used.',
      }),
  })
  .openapi({
    description: 'Details of first and third party audience targeting setting.',
    required: [],
  })
  .openapi('FirstAndThirdPartyAudienceTargetingSetting')

const FirstAndThirdPartyAudienceGroupSchema = z
  .object({
    settings: z
      .array(FirstAndThirdPartyAudienceTargetingSettingSchema)
      .exactOptional()
      .openapi({
        description:
          'Required. All first and third party audience targeting settings in first and third party audience group. Repeated settings with same id are not allowed.',
      }),
  })
  .openapi({
    description:
      'Details of first and third party audience group. All first and third party audience targeting settings are logically ‘OR’ of each other.',
    required: [],
  })
  .openapi('FirstAndThirdPartyAudienceGroup')

const GoogleAudienceTargetingSettingSchema = z
  .object({
    googleAudienceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Google audience id of the Google audience targeting setting. This id is google_audience_id.',
      }),
  })
  .openapi({ description: 'Details of Google audience targeting setting.', required: [] })
  .openapi('GoogleAudienceTargetingSetting')

const GoogleAudienceGroupSchema = z
  .object({
    settings: z
      .array(GoogleAudienceTargetingSettingSchema)
      .exactOptional()
      .openapi({
        description:
          'Required. All Google audience targeting settings in Google audience group. Repeated settings with same id will be ignored.',
      }),
  })
  .openapi({
    description:
      'Details of Google audience group. All Google audience targeting settings are logically ‘OR’ of each other.',
    required: [],
  })
  .openapi('GoogleAudienceGroup')

const CombinedAudienceTargetingSettingSchema = z
  .object({
    combinedAudienceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Combined audience id of combined audience targeting setting. This id is combined_audience_id.',
      }),
  })
  .openapi({ description: 'Details of combined audience targeting setting.', required: [] })
  .openapi('CombinedAudienceTargetingSetting')

const CombinedAudienceGroupSchema = z
  .object({
    settings: z
      .array(CombinedAudienceTargetingSettingSchema)
      .exactOptional()
      .openapi({
        description:
          'Required. All combined audience targeting settings in combined audience group. Repeated settings with same id will be ignored. The number of combined audience settings should be no more than five, error will be thrown otherwise.',
      }),
  })
  .openapi({
    description:
      'Details of combined audience group. All combined audience targeting settings are logically ‘OR’ of each other.',
    required: [],
  })
  .openapi('CombinedAudienceGroup')

const CustomListTargetingSettingSchema = z
  .object({
    customListId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Custom id of custom list targeting setting. This id is custom_list_id.',
      }),
  })
  .openapi({ description: 'Details of custom list targeting setting.', required: [] })
  .openapi('CustomListTargetingSetting')

const CustomListGroupSchema = z
  .object({
    settings: z
      .array(CustomListTargetingSettingSchema)
      .exactOptional()
      .openapi({
        description:
          'Required. All custom list targeting settings in custom list group. Repeated settings with same id will be ignored.',
      }),
  })
  .openapi({
    description:
      'Details of custom list group. All custom list targeting settings are logically ‘OR’ of each other.',
    required: [],
  })
  .openapi('CustomListGroup')

const AudienceGroupAssignedTargetingOptionDetailsSchema = z
  .object({
    excludedFirstAndThirdPartyAudienceGroup:
      FirstAndThirdPartyAudienceGroupSchema.exactOptional().openapi({
        description:
          'The first and third party audience ids and recencies of the excluded first and third party audience group. Used for negative targeting. The COMPLEMENT of the UNION of this group and other excluded audience groups is used as an INTERSECTION to any positive audience targeting. All items are logically ‘OR’ of each other.',
      }),
    excludedGoogleAudienceGroup: GoogleAudienceGroupSchema.exactOptional().openapi({
      description:
        'The Google audience ids of the excluded Google audience group. Used for negative targeting. The COMPLEMENT of the UNION of this group and other excluded audience groups is used as an INTERSECTION to any positive audience targeting. Only contains Affinity, In-market and Installed-apps type Google audiences. All items are logically ‘OR’ of each other.',
    }),
    includedCombinedAudienceGroup: CombinedAudienceGroupSchema.exactOptional().openapi({
      description:
        'The combined audience ids of the included combined audience group. Contains combined audience ids only.',
    }),
    includedCustomListGroup: CustomListGroupSchema.exactOptional().openapi({
      description:
        'The custom list ids of the included custom list group. Contains custom list ids only.',
    }),
    includedFirstAndThirdPartyAudienceGroups: z
      .array(FirstAndThirdPartyAudienceGroupSchema)
      .exactOptional()
      .openapi({
        description:
          "The first and third party audience ids and recencies of included first and third party audience groups. Each first and third party audience group contains first and third party audience ids only. The relation between each first and third party audience group is INTERSECTION, and the result is UNION'ed with other audience groups. Repeated groups with same settings will be ignored.",
      }),
    includedGoogleAudienceGroup: GoogleAudienceGroupSchema.exactOptional().openapi({
      description:
        'The Google audience ids of the included Google audience group. Contains Google audience ids only.',
    }),
  })
  .openapi({
    description:
      'Assigned audience group targeting option details. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_AUDIENCE_GROUP`. The relation between each group is UNION, except for excluded_first_and_third_party_audience_group and excluded_google_audience_group, of which COMPLEMENT is used as an INTERSECTION with other groups.',
    required: [],
  })
  .openapi('AudienceGroupAssignedTargetingOptionDetails')

const AudioContentTypeAssignedTargetingOptionDetailsSchema = z
  .object({
    audioContentType: z
      .enum([
        'AUDIO_CONTENT_TYPE_UNSPECIFIED',
        'AUDIO_CONTENT_TYPE_UNKNOWN',
        'AUDIO_CONTENT_TYPE_MUSIC',
        'AUDIO_CONTENT_TYPE_BROADCAST',
        'AUDIO_CONTENT_TYPE_PODCAST',
      ])
      .exactOptional()
      .openapi({ description: 'The audio content type. Output only in v1. Required in v2.' }),
  })
  .openapi({
    description:
      'Details for audio content type assigned targeting option. This will be populated in the audio_content_type_details field when targeting_type is `TARGETING_TYPE_AUDIO_CONTENT_TYPE`. Explicitly targeting all options is not supported. Remove all audio content type targeting options to achieve this effect.',
    required: [],
  })
  .openapi('AudioContentTypeAssignedTargetingOptionDetails')

const AuthorizedSellerStatusAssignedTargetingOptionDetailsSchema = z
  .object({
    authorizedSellerStatus: z
      .enum([
        'AUTHORIZED_SELLER_STATUS_UNSPECIFIED',
        'AUTHORIZED_SELLER_STATUS_AUTHORIZED_DIRECT_SELLERS_ONLY',
        'AUTHORIZED_SELLER_STATUS_AUTHORIZED_AND_NON_PARTICIPATING_PUBLISHERS',
      ])
      .exactOptional()
      .openapi({
        description: 'Output only. The authorized seller status to target.',
        readOnly: true,
      }),
    targetingOptionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The targeting_option_id of a TargetingOption of type `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS`.',
      }),
  })
  .openapi({
    description:
      'Represents an assigned authorized seller status. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS`.',
    required: [],
  })
  .openapi('AuthorizedSellerStatusAssignedTargetingOptionDetails')

const BrowserAssignedTargetingOptionDetailsSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The display name of the browser.', readOnly: true }),
    negative: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if this option is being negatively targeted. All assigned browser targeting options on the same resource must have the same value for this field.',
      }),
    targetingOptionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The targeting_option_id of a TargetingOption of type `TARGETING_TYPE_BROWSER`.',
      }),
  })
  .openapi({
    description:
      'Details for assigned browser targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_BROWSER`.',
    required: [],
  })
  .openapi('BrowserAssignedTargetingOptionDetails')

const BusinessChainAssignedTargetingOptionDetailsSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The display name of a business chain, e.g. "KFC", "Chase Bank".',
        readOnly: true,
      }),
    proximityRadiusAmount: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Required. The radius of the area around the business chain that will be targeted. The units of the radius are specified by proximity_radius_unit. Must be 1 to 800 if unit is `DISTANCE_UNIT_KILOMETERS` and 1 to 500 if unit is `DISTANCE_UNIT_MILES`. The minimum increment for both cases is 0.1. Inputs will be rounded to the nearest acceptable value if it is too granular, e.g. 15.57 will become 15.6.',
      }),
    proximityRadiusUnit: z
      .enum(['DISTANCE_UNIT_UNSPECIFIED', 'DISTANCE_UNIT_MILES', 'DISTANCE_UNIT_KILOMETERS'])
      .exactOptional()
      .openapi({
        description: 'Required. The unit of distance by which the targeting radius is measured.',
      }),
    targetingOptionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The targeting_option_id of a TargetingOption of type `TARGETING_TYPE_BUSINESS_CHAIN`. Accepted business chain targeting option IDs can be retrieved using SearchTargetingOptions.',
      }),
  })
  .openapi({
    description:
      'Details for assigned Business chain targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_BUSINESS_CHAIN`.',
    required: [],
  })
  .openapi('BusinessChainAssignedTargetingOptionDetails')

const CarrierAndIspAssignedTargetingOptionDetailsSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The display name of the carrier or ISP.',
        readOnly: true,
      }),
    negative: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if this option is being negatively targeted. All assigned carrier and ISP targeting options on the same resource must have the same value for this field.',
      }),
    targetingOptionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The targeting_option_id of a TargetingOption of type `TARGETING_TYPE_CARRIER_AND_ISP`.',
      }),
  })
  .openapi({
    description:
      'Details for assigned carrier and ISP targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_CARRIER_AND_ISP`.',
    required: [],
  })
  .openapi('CarrierAndIspAssignedTargetingOptionDetails')

const CategoryAssignedTargetingOptionDetailsSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The display name of the category.', readOnly: true }),
    negative: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if this option is being negatively targeted.' }),
    targetingOptionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The targeting_option_id field when targeting_type is `TARGETING_TYPE_CATEGORY`.',
      }),
  })
  .openapi({
    description:
      'Assigned category targeting option details. This will be populated in the category_details field when targeting_type is `TARGETING_TYPE_CATEGORY`.',
    required: [],
  })
  .openapi('CategoryAssignedTargetingOptionDetails')

const ChannelAssignedTargetingOptionDetailsSchema = z
  .object({
    channelId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. ID of the channel. Should refer to the channel ID field on a [Partner-owned channel](partners.channels#Channel.FIELDS.channel_id) or [advertiser-owned channel](advertisers.channels#Channel.FIELDS.channel_id) resource.',
      }),
    negative: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if this option is being negatively targeted. For advertiser level assigned targeting option, this field must be true.',
      }),
  })
  .openapi({
    description:
      'Details for assigned channel targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_CHANNEL`.',
    required: [],
  })
  .openapi('ChannelAssignedTargetingOptionDetails')

const ContentDurationAssignedTargetingOptionDetailsSchema = z
  .object({
    contentDuration: z
      .enum([
        'CONTENT_DURATION_UNSPECIFIED',
        'CONTENT_DURATION_UNKNOWN',
        'CONTENT_DURATION_0_TO_1_MIN',
        'CONTENT_DURATION_1_TO_5_MIN',
        'CONTENT_DURATION_5_TO_15_MIN',
        'CONTENT_DURATION_15_TO_30_MIN',
        'CONTENT_DURATION_30_TO_60_MIN',
        'CONTENT_DURATION_OVER_60_MIN',
      ])
      .exactOptional()
      .openapi({ description: 'Output only. The content duration.', readOnly: true }),
    targetingOptionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The targeting_option_id field when targeting_type is `TARGETING_TYPE_CONTENT_DURATION`.',
      }),
  })
  .openapi({
    description:
      'Details for content duration assigned targeting option. This will be populated in the content_duration_details field when targeting_type is `TARGETING_TYPE_CONTENT_DURATION`. Explicitly targeting all options is not supported. Remove all content duration targeting options to achieve this effect.',
    required: [],
  })
  .openapi('ContentDurationAssignedTargetingOptionDetails')

const ContentGenreAssignedTargetingOptionDetailsSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The display name of the content genre.',
        readOnly: true,
      }),
    negative: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if this option is being negatively targeted.' }),
    targetingOptionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The targeting_option_id field when targeting_type is `TARGETING_TYPE_CONTENT_GENRE`.',
      }),
  })
  .openapi({
    description:
      'Details for content genre assigned targeting option. This will be populated in the content_genre_details field when targeting_type is `TARGETING_TYPE_CONTENT_GENRE`. Explicitly targeting all options is not supported. Remove all content genre targeting options to achieve this effect.',
    required: [],
  })
  .openapi('ContentGenreAssignedTargetingOptionDetails')

const ContentInstreamPositionAssignedTargetingOptionDetailsSchema = z
  .object({
    adType: z
      .enum(['AD_TYPE_UNSPECIFIED', 'AD_TYPE_DISPLAY', 'AD_TYPE_VIDEO', 'AD_TYPE_AUDIO'])
      .exactOptional()
      .openapi({
        description:
          'Output only. The ad type to target. Only applicable to insertion order targeting and new line items supporting the specified ad type will inherit this targeting option by default. Possible values are: * `AD_TYPE_VIDEO`, the setting will be inherited by new line item when line_item_type is `LINE_ITEM_TYPE_VIDEO_DEFAULT`. * `AD_TYPE_AUDIO`, the setting will be inherited by new line item when line_item_type is `LINE_ITEM_TYPE_AUDIO_DEFAULT`.',
        readOnly: true,
      }),
    contentInstreamPosition: z
      .enum([
        'CONTENT_INSTREAM_POSITION_UNSPECIFIED',
        'CONTENT_INSTREAM_POSITION_PRE_ROLL',
        'CONTENT_INSTREAM_POSITION_MID_ROLL',
        'CONTENT_INSTREAM_POSITION_POST_ROLL',
        'CONTENT_INSTREAM_POSITION_UNKNOWN',
      ])
      .exactOptional()
      .openapi({
        description:
          'The content instream position for video or audio ads. Output only in v1. Required in v2.',
      }),
  })
  .openapi({
    description:
      'Assigned content instream position targeting option details. This will be populated in the content_instream_position_details field when targeting_type is `TARGETING_TYPE_CONTENT_INSTREAM_POSITION`.',
    required: [],
  })
  .openapi('ContentInstreamPositionAssignedTargetingOptionDetails')

const ContentOutstreamPositionAssignedTargetingOptionDetailsSchema = z
  .object({
    adType: z
      .enum(['AD_TYPE_UNSPECIFIED', 'AD_TYPE_DISPLAY', 'AD_TYPE_VIDEO', 'AD_TYPE_AUDIO'])
      .exactOptional()
      .openapi({
        description:
          'Output only. The ad type to target. Only applicable to insertion order targeting and new line items supporting the specified ad type will inherit this targeting option by default. Possible values are: * `AD_TYPE_DISPLAY`, the setting will be inherited by new line item when line_item_type is `LINE_ITEM_TYPE_DISPLAY_DEFAULT`. * `AD_TYPE_VIDEO`, the setting will be inherited by new line item when line_item_type is `LINE_ITEM_TYPE_VIDEO_DEFAULT`.',
        readOnly: true,
      }),
    contentOutstreamPosition: z
      .enum([
        'CONTENT_OUTSTREAM_POSITION_UNSPECIFIED',
        'CONTENT_OUTSTREAM_POSITION_UNKNOWN',
        'CONTENT_OUTSTREAM_POSITION_IN_ARTICLE',
        'CONTENT_OUTSTREAM_POSITION_IN_BANNER',
        'CONTENT_OUTSTREAM_POSITION_IN_FEED',
        'CONTENT_OUTSTREAM_POSITION_INTERSTITIAL',
      ])
      .exactOptional()
      .openapi({
        description: 'The content outstream position. Output only in v1. Required in v2.',
      }),
  })
  .openapi({
    description:
      'Assigned content outstream position targeting option details. This will be populated in the content_outstream_position_details field when targeting_type is `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION`.',
    required: [],
  })
  .openapi('ContentOutstreamPositionAssignedTargetingOptionDetails')

const ContentStreamTypeAssignedTargetingOptionDetailsSchema = z
  .object({
    contentStreamType: z
      .enum(['CONTENT_STREAM_TYPE_UNSPECIFIED', 'CONTENT_LIVE_STREAM', 'CONTENT_ON_DEMAND'])
      .exactOptional()
      .openapi({ description: 'Output only. The content stream type.', readOnly: true }),
    targetingOptionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The targeting_option_id field when targeting_type is `TARGETING_TYPE_CONTENT_STREAM_TYPE`.',
      }),
  })
  .openapi({
    description:
      'Details for content stream type assigned targeting option. This will be populated in the content_stream_type_details field when targeting_type is `TARGETING_TYPE_CONTENT_STREAM_TYPE`. Explicitly targeting all options is not supported. Remove all content stream type targeting options to achieve this effect.',
    required: [],
  })
  .openapi('ContentStreamTypeAssignedTargetingOptionDetails')

const DayAndTimeAssignedTargetingOptionDetailsSchema = z
  .object({
    dayOfWeek: z
      .enum([
        'DAY_OF_WEEK_UNSPECIFIED',
        'MONDAY',
        'TUESDAY',
        'WEDNESDAY',
        'THURSDAY',
        'FRIDAY',
        'SATURDAY',
        'SUNDAY',
      ])
      .exactOptional()
      .openapi({
        description: 'Required. The day of the week for this day and time targeting setting.',
      }),
    endHour: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Required. The end hour for day and time targeting. Must be between 1 (1 hour after start of day) and 24 (end of day).',
      }),
    startHour: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Required. The start hour for day and time targeting. Must be between 0 (start of day) and 23 (1 hour before end of day).',
      }),
    timeZoneResolution: z
      .enum([
        'TIME_ZONE_RESOLUTION_UNSPECIFIED',
        'TIME_ZONE_RESOLUTION_END_USER',
        'TIME_ZONE_RESOLUTION_ADVERTISER',
      ])
      .exactOptional()
      .openapi({
        description:
          'Required. The mechanism used to determine which timezone to use for this day and time targeting setting.',
      }),
  })
  .openapi({
    description:
      'Representation of a segment of time defined on a specific day of the week and with a start and end time. The time represented by `start_hour` must be before the time represented by `end_hour`.',
    required: [],
  })
  .openapi('DayAndTimeAssignedTargetingOptionDetails')

const DeviceMakeModelAssignedTargetingOptionDetailsSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The display name of the device make and model.',
        readOnly: true,
      }),
    negative: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if this option is being negatively targeted.' }),
    targetingOptionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The targeting_option_id field when targeting_type is `TARGETING_TYPE_DEVICE_MAKE_MODEL`.',
      }),
  })
  .openapi({
    description:
      'Assigned device make and model targeting option details. This will be populated in the device_make_model_details field when targeting_type is `TARGETING_TYPE_DEVICE_MAKE_MODEL`.',
    required: [],
  })
  .openapi('DeviceMakeModelAssignedTargetingOptionDetails')

const DeviceTypeAssignedTargetingOptionDetailsSchema = z
  .object({
    deviceType: z
      .enum([
        'DEVICE_TYPE_UNSPECIFIED',
        'DEVICE_TYPE_COMPUTER',
        'DEVICE_TYPE_CONNECTED_TV',
        'DEVICE_TYPE_SMART_PHONE',
        'DEVICE_TYPE_TABLET',
      ])
      .exactOptional()
      .openapi({
        description: 'The display name of the device type. Output only in v1. Required in v2.',
      }),
    youtubeAndPartnersBidMultiplier: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Output only. Bid multiplier allows you to show your ads more or less frequently based on the device type. It will apply a multiplier on the original bid price. When this field is 0, it indicates this field is not applicable instead of multiplying 0 on the original bid price. For example, if the bid price without multiplier is $10.0 and the multiplier is 1.5 for Tablet, the resulting bid price for Tablet will be $15.0. Only applicable to YouTube and Partners line items.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Targeting details for device type. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_DEVICE_TYPE`.',
    required: [],
  })
  .openapi('DeviceTypeAssignedTargetingOptionDetails')

const DigitalContentLabelAssignedTargetingOptionDetailsSchema = z
  .object({
    excludedContentRatingTier: z
      .enum([
        'CONTENT_RATING_TIER_UNSPECIFIED',
        'CONTENT_RATING_TIER_UNRATED',
        'CONTENT_RATING_TIER_GENERAL',
        'CONTENT_RATING_TIER_PARENTAL_GUIDANCE',
        'CONTENT_RATING_TIER_TEENS',
        'CONTENT_RATING_TIER_MATURE',
        'CONTENT_RATING_TIER_FAMILIES',
      ])
      .exactOptional()
      .openapi({
        description:
          'Required. The display name of the digital content label rating tier to be EXCLUDED.',
      }),
  })
  .openapi({
    description:
      'Targeting details for digital content label. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION`.',
    required: [],
  })
  .openapi('DigitalContentLabelAssignedTargetingOptionDetails')

const EnvironmentAssignedTargetingOptionDetailsSchema = z
  .object({
    environment: z
      .enum([
        'ENVIRONMENT_UNSPECIFIED',
        'ENVIRONMENT_WEB_OPTIMIZED',
        'ENVIRONMENT_WEB_NOT_OPTIMIZED',
        'ENVIRONMENT_APP',
      ])
      .exactOptional()
      .openapi({ description: 'The serving environment. Output only in v1. Required in v2.' }),
  })
  .openapi({
    description:
      'Assigned environment targeting option details. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_ENVIRONMENT`.',
    required: [],
  })
  .openapi('EnvironmentAssignedTargetingOptionDetails')

const ExchangeAssignedTargetingOptionDetailsSchema = z
  .object({
    exchange: z
      .enum([
        'EXCHANGE_UNSPECIFIED',
        'EXCHANGE_GOOGLE_AD_MANAGER',
        'EXCHANGE_APPNEXUS',
        'EXCHANGE_BRIGHTROLL',
        'EXCHANGE_ADFORM',
        'EXCHANGE_ADMETA',
        'EXCHANGE_ADMIXER',
        'EXCHANGE_ADSMOGO',
        'EXCHANGE_ADSWIZZ',
        'EXCHANGE_BIDSWITCH',
        'EXCHANGE_BRIGHTROLL_DISPLAY',
        'EXCHANGE_CADREON',
        'EXCHANGE_DAILYMOTION',
        'EXCHANGE_FIVE',
        'EXCHANGE_FLUCT',
        'EXCHANGE_FREEWHEEL',
        'EXCHANGE_GENIEE',
        'EXCHANGE_GUMGUM',
        'EXCHANGE_IMOBILE',
        'EXCHANGE_IBILLBOARD',
        'EXCHANGE_IMPROVE_DIGITAL',
        'EXCHANGE_INDEX',
        'EXCHANGE_KARGO',
        'EXCHANGE_MICROAD',
        'EXCHANGE_MOPUB',
        'EXCHANGE_NEND',
        'EXCHANGE_ONE_BY_AOL_DISPLAY',
        'EXCHANGE_ONE_BY_AOL_MOBILE',
        'EXCHANGE_ONE_BY_AOL_VIDEO',
        'EXCHANGE_OOYALA',
        'EXCHANGE_OPENX',
        'EXCHANGE_PERMODO',
        'EXCHANGE_PLATFORMONE',
        'EXCHANGE_PLATFORMID',
        'EXCHANGE_PUBMATIC',
        'EXCHANGE_PULSEPOINT',
        'EXCHANGE_REVENUEMAX',
        'EXCHANGE_RUBICON',
        'EXCHANGE_SMARTCLIP',
        'EXCHANGE_SMARTRTB',
        'EXCHANGE_SMARTSTREAMTV',
        'EXCHANGE_SOVRN',
        'EXCHANGE_SPOTXCHANGE',
        'EXCHANGE_STROER',
        'EXCHANGE_TEADSTV',
        'EXCHANGE_TELARIA',
        'EXCHANGE_TVN',
        'EXCHANGE_UNITED',
        'EXCHANGE_YIELDLAB',
        'EXCHANGE_YIELDMO',
        'EXCHANGE_UNRULYX',
        'EXCHANGE_OPEN8',
        'EXCHANGE_TRITON',
        'EXCHANGE_TRIPLELIFT',
        'EXCHANGE_TABOOLA',
        'EXCHANGE_INMOBI',
        'EXCHANGE_SMAATO',
        'EXCHANGE_AJA',
        'EXCHANGE_SUPERSHIP',
        'EXCHANGE_NEXSTAR_DIGITAL',
        'EXCHANGE_WAZE',
        'EXCHANGE_SOUNDCAST',
        'EXCHANGE_SHARETHROUGH',
        'EXCHANGE_FYBER',
        'EXCHANGE_RED_FOR_PUBLISHERS',
        'EXCHANGE_MEDIANET',
        'EXCHANGE_TAPJOY',
        'EXCHANGE_VISTAR',
        'EXCHANGE_DAX',
        'EXCHANGE_JCD',
        'EXCHANGE_PLACE_EXCHANGE',
        'EXCHANGE_APPLOVIN',
        'EXCHANGE_CONNATIX',
        'EXCHANGE_RESET_DIGITAL',
        'EXCHANGE_HIVESTACK',
      ])
      .exactOptional()
      .openapi({ description: 'Required. The enum value for the exchange.' }),
  })
  .openapi({
    description:
      'Details for assigned exchange targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_EXCHANGE`.',
    required: [],
  })
  .openapi('ExchangeAssignedTargetingOptionDetails')

const GenderAssignedTargetingOptionDetailsSchema = z
  .object({
    gender: z
      .enum(['GENDER_UNSPECIFIED', 'GENDER_MALE', 'GENDER_FEMALE', 'GENDER_UNKNOWN'])
      .exactOptional()
      .openapi({ description: 'The gender of the audience. Output only in v1. Required in v2.' }),
  })
  .openapi({
    description:
      'Details for assigned gender targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_GENDER`.',
    required: [],
  })
  .openapi('GenderAssignedTargetingOptionDetails')

const GeoRegionAssignedTargetingOptionDetailsSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The display name of the geographic region (e.g., "Ontario, Canada").',
        readOnly: true,
      }),
    geoRegionType: z
      .enum([
        'GEO_REGION_TYPE_UNKNOWN',
        'GEO_REGION_TYPE_OTHER',
        'GEO_REGION_TYPE_COUNTRY',
        'GEO_REGION_TYPE_REGION',
        'GEO_REGION_TYPE_TERRITORY',
        'GEO_REGION_TYPE_PROVINCE',
        'GEO_REGION_TYPE_STATE',
        'GEO_REGION_TYPE_PREFECTURE',
        'GEO_REGION_TYPE_GOVERNORATE',
        'GEO_REGION_TYPE_CANTON',
        'GEO_REGION_TYPE_UNION_TERRITORY',
        'GEO_REGION_TYPE_AUTONOMOUS_COMMUNITY',
        'GEO_REGION_TYPE_DMA_REGION',
        'GEO_REGION_TYPE_METRO',
        'GEO_REGION_TYPE_CONGRESSIONAL_DISTRICT',
        'GEO_REGION_TYPE_COUNTY',
        'GEO_REGION_TYPE_MUNICIPALITY',
        'GEO_REGION_TYPE_CITY',
        'GEO_REGION_TYPE_POSTAL_CODE',
        'GEO_REGION_TYPE_DEPARTMENT',
        'GEO_REGION_TYPE_AIRPORT',
        'GEO_REGION_TYPE_TV_REGION',
        'GEO_REGION_TYPE_OKRUG',
        'GEO_REGION_TYPE_BOROUGH',
        'GEO_REGION_TYPE_CITY_REGION',
        'GEO_REGION_TYPE_ARRONDISSEMENT',
        'GEO_REGION_TYPE_NEIGHBORHOOD',
        'GEO_REGION_TYPE_UNIVERSITY',
        'GEO_REGION_TYPE_DISTRICT',
      ])
      .exactOptional()
      .openapi({
        description: 'Output only. The type of geographic region targeting.',
        readOnly: true,
      }),
    negative: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if this option is being negatively targeted.' }),
    targetingOptionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The targeting_option_id of a TargetingOption of type `TARGETING_TYPE_GEO_REGION`.',
      }),
  })
  .openapi({
    description:
      'Details for assigned geographic region targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_GEO_REGION`.',
    required: [],
  })
  .openapi('GeoRegionAssignedTargetingOptionDetails')

const HouseholdIncomeAssignedTargetingOptionDetailsSchema = z
  .object({
    householdIncome: z
      .enum([
        'HOUSEHOLD_INCOME_UNSPECIFIED',
        'HOUSEHOLD_INCOME_UNKNOWN',
        'HOUSEHOLD_INCOME_LOWER_50_PERCENT',
        'HOUSEHOLD_INCOME_TOP_41_TO_50_PERCENT',
        'HOUSEHOLD_INCOME_TOP_31_TO_40_PERCENT',
        'HOUSEHOLD_INCOME_TOP_21_TO_30_PERCENT',
        'HOUSEHOLD_INCOME_TOP_11_TO_20_PERCENT',
        'HOUSEHOLD_INCOME_TOP_10_PERCENT',
      ])
      .exactOptional()
      .openapi({
        description: 'The household income of the audience. Output only in v1. Required in v2.',
      }),
  })
  .openapi({
    description:
      'Details for assigned household income targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_HOUSEHOLD_INCOME`.',
    required: [],
  })
  .openapi('HouseholdIncomeAssignedTargetingOptionDetails')

const InventorySourceAssignedTargetingOptionDetailsSchema = z
  .object({
    inventorySourceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. ID of the inventory source. Should refer to the inventory_source_id field of an InventorySource resource.',
      }),
  })
  .openapi({
    description:
      'Targeting details for inventory source. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_INVENTORY_SOURCE`.',
    required: [],
  })
  .openapi('InventorySourceAssignedTargetingOptionDetails')

const InventorySourceGroupAssignedTargetingOptionDetailsSchema = z
  .object({
    inventorySourceGroupId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. ID of the inventory source group. Should refer to the inventory_source_group_id field of an InventorySourceGroup resource.',
      }),
  })
  .openapi({
    description:
      'Targeting details for inventory source group. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_INVENTORY_SOURCE_GROUP`.',
    required: [],
  })
  .openapi('InventorySourceGroupAssignedTargetingOptionDetails')

const KeywordAssignedTargetingOptionDetailsSchema = z
  .object({
    keyword: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The keyword, for example `car insurance`. Positive keyword cannot be offensive word. Must be UTF-8 encoded with a maximum size of 255 bytes. Maximum number of characters is 80. Maximum number of words is 10.',
      }),
    negative: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if this option is being negatively targeted.' }),
  })
  .openapi({
    description:
      'Details for assigned keyword targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_KEYWORD`.',
    required: [],
  })
  .openapi('KeywordAssignedTargetingOptionDetails')

const LanguageAssignedTargetingOptionDetailsSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The display name of the language (e.g., "French").',
        readOnly: true,
      }),
    negative: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if this option is being negatively targeted. All assigned language targeting options on the same resource must have the same value for this field.',
      }),
    targetingOptionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The targeting_option_id of a TargetingOption of type `TARGETING_TYPE_LANGUAGE`.',
      }),
  })
  .openapi({
    description:
      'Details for assigned language targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_LANGUAGE`.',
    required: [],
  })
  .openapi('LanguageAssignedTargetingOptionDetails')

const NativeContentPositionAssignedTargetingOptionDetailsSchema = z
  .object({
    contentPosition: z
      .enum([
        'NATIVE_CONTENT_POSITION_UNSPECIFIED',
        'NATIVE_CONTENT_POSITION_UNKNOWN',
        'NATIVE_CONTENT_POSITION_IN_ARTICLE',
        'NATIVE_CONTENT_POSITION_IN_FEED',
        'NATIVE_CONTENT_POSITION_PERIPHERAL',
        'NATIVE_CONTENT_POSITION_RECOMMENDATION',
      ])
      .exactOptional()
      .openapi({ description: 'The content position. Output only in v1. Required in v2.' }),
  })
  .openapi({
    description:
      'Details for native content position assigned targeting option. This will be populated in the native_content_position_details field when targeting_type is `TARGETING_TYPE_NATIVE_CONTENT_POSITION`. Explicitly targeting all options is not supported. Remove all native content position targeting options to achieve this effect.',
    required: [],
  })
  .openapi('NativeContentPositionAssignedTargetingOptionDetails')

const NegativeKeywordListAssignedTargetingOptionDetailsSchema = z
  .object({
    negativeKeywordListId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. ID of the negative keyword list. Should refer to the negative_keyword_list_id field of a NegativeKeywordList resource.',
      }),
  })
  .openapi({
    description:
      'Targeting details for negative keyword list. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST`.',
    required: [],
  })
  .openapi('NegativeKeywordListAssignedTargetingOptionDetails')

const OmidAssignedTargetingOptionDetailsSchema = z
  .object({
    omid: z
      .enum(['OMID_UNSPECIFIED', 'OMID_FOR_MOBILE_DISPLAY_ADS'])
      .exactOptional()
      .openapi({
        description:
          'The type of Open Measurement enabled inventory. Output only in v1. Required in v2.',
      }),
  })
  .openapi({
    description:
      'Represents a targetable Open Measurement enabled inventory type. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_OMID`.',
    required: [],
  })
  .openapi('OmidAssignedTargetingOptionDetails')

const OnScreenPositionAssignedTargetingOptionDetailsSchema = z
  .object({
    adType: z
      .enum(['AD_TYPE_UNSPECIFIED', 'AD_TYPE_DISPLAY', 'AD_TYPE_VIDEO', 'AD_TYPE_AUDIO'])
      .exactOptional()
      .openapi({
        description:
          'Output only. The ad type to target. Only applicable to insertion order targeting and new line items supporting the specified ad type will inherit this targeting option by default. Possible values are: * `AD_TYPE_DISPLAY`, the setting will be inherited by new line item when line_item_type is `LINE_ITEM_TYPE_DISPLAY_DEFAULT`. * `AD_TYPE_VIDEO`, the setting will be inherited by new line item when line_item_type is `LINE_ITEM_TYPE_VIDEO_DEFAULT`.',
        readOnly: true,
      }),
    onScreenPosition: z
      .enum([
        'ON_SCREEN_POSITION_UNSPECIFIED',
        'ON_SCREEN_POSITION_UNKNOWN',
        'ON_SCREEN_POSITION_ABOVE_THE_FOLD',
        'ON_SCREEN_POSITION_BELOW_THE_FOLD',
      ])
      .exactOptional()
      .openapi({ description: 'Output only. The on screen position.', readOnly: true }),
    targetingOptionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The targeting_option_id field when targeting_type is `TARGETING_TYPE_ON_SCREEN_POSITION`.',
      }),
  })
  .openapi({
    description:
      'On screen position targeting option details. This will be populated in the on_screen_position_details field when targeting_type is `TARGETING_TYPE_ON_SCREEN_POSITION`.',
    required: [],
  })
  .openapi('OnScreenPositionAssignedTargetingOptionDetails')

const OperatingSystemAssignedTargetingOptionDetailsSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The display name of the operating system.',
        readOnly: true,
      }),
    negative: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if this option is being negatively targeted.' }),
    targetingOptionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The targeting option ID populated in targeting_option_id field when targeting_type is `TARGETING_TYPE_OPERATING_SYSTEM`.',
      }),
  })
  .openapi({
    description:
      'Assigned operating system targeting option details. This will be populated in the operating_system_details field when targeting_type is `TARGETING_TYPE_OPERATING_SYSTEM`.',
    required: [],
  })
  .openapi('OperatingSystemAssignedTargetingOptionDetails')

const ParentalStatusAssignedTargetingOptionDetailsSchema = z
  .object({
    parentalStatus: z
      .enum([
        'PARENTAL_STATUS_UNSPECIFIED',
        'PARENTAL_STATUS_PARENT',
        'PARENTAL_STATUS_NOT_A_PARENT',
        'PARENTAL_STATUS_UNKNOWN',
      ])
      .exactOptional()
      .openapi({
        description: 'The parental status of the audience. Output only in v1. Required in v2.',
      }),
  })
  .openapi({
    description:
      'Details for assigned parental status targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_PARENTAL_STATUS`.',
    required: [],
  })
  .openapi('ParentalStatusAssignedTargetingOptionDetails')

const PoiAssignedTargetingOptionDetailsSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The display name of a POI, e.g. "Times Square", "Space Needle", followed by its full address if available.',
        readOnly: true,
      }),
    latitude: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Output only. Latitude of the POI rounding to 6th decimal place.',
        readOnly: true,
      }),
    longitude: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Output only. Longitude of the POI rounding to 6th decimal place.',
        readOnly: true,
      }),
    proximityRadiusAmount: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Required. The radius of the area around the POI that will be targeted. The units of the radius are specified by proximity_radius_unit. Must be 1 to 800 if unit is `DISTANCE_UNIT_KILOMETERS` and 1 to 500 if unit is `DISTANCE_UNIT_MILES`.',
      }),
    proximityRadiusUnit: z
      .enum(['DISTANCE_UNIT_UNSPECIFIED', 'DISTANCE_UNIT_MILES', 'DISTANCE_UNIT_KILOMETERS'])
      .exactOptional()
      .openapi({
        description: 'Required. The unit of distance by which the targeting radius is measured.',
      }),
    targetingOptionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The targeting_option_id of a TargetingOption of type `TARGETING_TYPE_POI`. Accepted POI targeting option IDs can be retrieved using SearchTargetingOptions. If targeting a specific latitude/longitude coordinate removed from an address or POI name, you can generate the necessary targeting option ID by rounding the desired coordinate values to the 6th decimal place, removing the decimals, and concatenating the string values separated by a semicolon. For example, you can target the latitude/longitude pair of 40.7414691, -74.003387 using the targeting option ID "40741469;-74003387".',
      }),
  })
  .openapi({
    description:
      'Details for assigned POI targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_POI`.',
    required: [],
  })
  .openapi('PoiAssignedTargetingOptionDetails')

const ProximityLocationListAssignedTargetingOptionDetailsSchema = z
  .object({
    proximityLocationListId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. ID of the proximity location list. Should refer to the location_list_id field of a LocationList resource whose type is `TARGETING_LOCATION_TYPE_PROXIMITY`.',
      }),
    proximityRadius: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Required. Radius expressed in the distance units set in proximity_radius_unit. This represents the size of the area around a chosen location that will be targeted. Radius should be between 1 and 500 miles or 800 kilometers.',
      }),
    proximityRadiusUnit: z
      .enum([
        'PROXIMITY_RADIUS_UNIT_UNSPECIFIED',
        'PROXIMITY_RADIUS_UNIT_MILES',
        'PROXIMITY_RADIUS_UNIT_KILOMETERS',
      ])
      .exactOptional()
      .openapi({ description: 'Required. Radius distance units.' }),
  })
  .openapi({
    description:
      'Targeting details for proximity location list. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_PROXIMITY_LOCATION_LIST`.',
    required: [],
  })
  .openapi('ProximityLocationListAssignedTargetingOptionDetails')

const RegionalLocationListAssignedTargetingOptionDetailsSchema = z
  .object({
    negative: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if this option is being negatively targeted.' }),
    regionalLocationListId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. ID of the regional location list. Should refer to the location_list_id field of a LocationList resource whose type is `TARGETING_LOCATION_TYPE_REGIONAL`.',
      }),
  })
  .openapi({
    description:
      'Targeting details for regional location list. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_REGIONAL_LOCATION_LIST`.',
    required: [],
  })
  .openapi('RegionalLocationListAssignedTargetingOptionDetails')

const SensitiveCategoryAssignedTargetingOptionDetailsSchema = z
  .object({
    excludedSensitiveCategory: z
      .enum([
        'SENSITIVE_CATEGORY_UNSPECIFIED',
        'SENSITIVE_CATEGORY_ADULT',
        'SENSITIVE_CATEGORY_DEROGATORY',
        'SENSITIVE_CATEGORY_DOWNLOADS_SHARING',
        'SENSITIVE_CATEGORY_WEAPONS',
        'SENSITIVE_CATEGORY_GAMBLING',
        'SENSITIVE_CATEGORY_VIOLENCE',
        'SENSITIVE_CATEGORY_SUGGESTIVE',
        'SENSITIVE_CATEGORY_PROFANITY',
        'SENSITIVE_CATEGORY_ALCOHOL',
        'SENSITIVE_CATEGORY_DRUGS',
        'SENSITIVE_CATEGORY_TOBACCO',
        'SENSITIVE_CATEGORY_POLITICS',
        'SENSITIVE_CATEGORY_RELIGION',
        'SENSITIVE_CATEGORY_TRAGEDY',
        'SENSITIVE_CATEGORY_TRANSPORTATION_ACCIDENTS',
        'SENSITIVE_CATEGORY_SENSITIVE_SOCIAL_ISSUES',
        'SENSITIVE_CATEGORY_SHOCKING',
        'SENSITIVE_CATEGORY_EMBEDDED_VIDEO',
        'SENSITIVE_CATEGORY_LIVE_STREAMING_VIDEO',
      ])
      .exactOptional()
      .openapi({
        description:
          'Required. An enum for the DV360 Sensitive category content classified to be EXCLUDED.',
      }),
  })
  .openapi({
    description:
      'Targeting details for sensitive category. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION`.',
    required: [],
  })
  .openapi('SensitiveCategoryAssignedTargetingOptionDetails')

const SessionPositionAssignedTargetingOptionDetailsSchema = z
  .object({
    sessionPosition: z
      .enum(['SESSION_POSITION_UNSPECIFIED', 'SESSION_POSITION_FIRST_IMPRESSION'])
      .exactOptional()
      .openapi({ description: 'The position where the ad will show in a session.' }),
  })
  .openapi({
    description:
      'Details for session position assigned targeting option. This will be populated in the session_position_details field when targeting_type is `TARGETING_TYPE_SESSION_POSITION`.',
    required: [],
  })
  .openapi('SessionPositionAssignedTargetingOptionDetails')

const SubExchangeAssignedTargetingOptionDetailsSchema = z
  .object({
    targetingOptionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The targeting_option_id of a TargetingOption of type `TARGETING_TYPE_SUB_EXCHANGE`.',
      }),
  })
  .openapi({
    description:
      'Details for assigned sub-exchange targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_SUB_EXCHANGE`.',
    required: [],
  })
  .openapi('SubExchangeAssignedTargetingOptionDetails')

const DoubleVerifyAppStarRatingSchema = z
  .object({
    avoidInsufficientStarRating: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Avoid bidding on apps with insufficient star ratings.' }),
    avoidedStarRating: z
      .enum([
        'APP_STAR_RATE_UNSPECIFIED',
        'APP_STAR_RATE_1_POINT_5_LESS',
        'APP_STAR_RATE_2_LESS',
        'APP_STAR_RATE_2_POINT_5_LESS',
        'APP_STAR_RATE_3_LESS',
        'APP_STAR_RATE_3_POINT_5_LESS',
        'APP_STAR_RATE_4_LESS',
        'APP_STAR_RATE_4_POINT_5_LESS',
      ])
      .exactOptional()
      .openapi({ description: 'Avoid bidding on apps with the star ratings.' }),
  })
  .openapi({ description: 'Details of DoubleVerify star ratings settings.', required: [] })
  .openapi('DoubleVerifyAppStarRating')

const DoubleVerifyBrandSafetyCategoriesSchema = z
  .object({
    avoidUnknownBrandSafetyCategory: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Unknown or unrateable.' }),
    avoidedHighSeverityCategories: z
      .array(
        z.enum([
          'HIGHER_SEVERITY_UNSPECIFIED',
          'ADULT_CONTENT_PORNOGRAPHY',
          'COPYRIGHT_INFRINGEMENT',
          'SUBSTANCE_ABUSE',
          'GRAPHIC_VIOLENCE_WEAPONS',
          'HATE_PROFANITY',
          'CRIMINAL_SKILLS',
          'NUISANCE_INCENTIVIZED_MALWARE_CLUTTER',
        ]),
      )
      .exactOptional()
      .openapi({ description: 'Brand safety high severity avoidance categories.' }),
    avoidedMediumSeverityCategories: z
      .array(
        z.enum([
          'MEDIUM_SEVERITY_UNSPECIFIED',
          'AD_SERVERS',
          'ADULT_CONTENT_SWIMSUIT',
          'ALTERNATIVE_LIFESTYLES',
          'CELEBRITY_GOSSIP',
          'GAMBLING',
          'OCCULT',
          'SEX_EDUCATION',
          'DISASTER_AVIATION',
          'DISASTER_MAN_MADE',
          'DISASTER_NATURAL',
          'DISASTER_TERRORIST_EVENTS',
          'DISASTER_VEHICLE',
          'ALCOHOL',
          'SMOKING',
          'NEGATIVE_NEWS_FINANCIAL',
          'NON_ENGLISH',
          'PARKING_PAGE',
          'UNMODERATED_UGC',
          'INFLAMMATORY_POLITICS_AND_NEWS',
          'NEGATIVE_NEWS_PHARMACEUTICAL',
        ]),
      )
      .exactOptional()
      .openapi({ description: 'Brand safety medium severity avoidance categories.' }),
  })
  .openapi({ description: 'Settings for brand safety controls.', required: [] })
  .openapi('DoubleVerifyBrandSafetyCategories')

const DoubleVerifyDisplayViewabilitySchema = z
  .object({
    iab: z
      .enum([
        'IAB_VIEWED_RATE_UNSPECIFIED',
        'IAB_VIEWED_RATE_80_PERCENT_HIGHER',
        'IAB_VIEWED_RATE_75_PERCENT_HIGHER',
        'IAB_VIEWED_RATE_70_PERCENT_HIGHER',
        'IAB_VIEWED_RATE_65_PERCENT_HIGHER',
        'IAB_VIEWED_RATE_60_PERCENT_HIGHER',
        'IAB_VIEWED_RATE_55_PERCENT_HIGHER',
        'IAB_VIEWED_RATE_50_PERCENT_HIGHER',
        'IAB_VIEWED_RATE_40_PERCENT_HIGHER',
        'IAB_VIEWED_RATE_30_PERCENT_HIGHER',
      ])
      .exactOptional()
      .openapi({ description: 'Target web and app inventory to maximize IAB viewable rate.' }),
    viewableDuring: z
      .enum([
        'AVERAGE_VIEW_DURATION_UNSPECIFIED',
        'AVERAGE_VIEW_DURATION_5_SEC',
        'AVERAGE_VIEW_DURATION_10_SEC',
        'AVERAGE_VIEW_DURATION_15_SEC',
      ])
      .exactOptional()
      .openapi({ description: 'Target web and app inventory to maximize 100% viewable duration.' }),
  })
  .openapi({ description: 'Details of DoubleVerify display viewability settings.', required: [] })
  .openapi('DoubleVerifyDisplayViewability')

const DoubleVerifyFraudInvalidTrafficSchema = z
  .object({
    avoidInsufficientOption: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Insufficient Historical Fraud & IVT Stats.' }),
    avoidedFraudOption: z
      .enum([
        'FRAUD_UNSPECIFIED',
        'AD_IMPRESSION_FRAUD_100',
        'AD_IMPRESSION_FRAUD_50',
        'AD_IMPRESSION_FRAUD_25',
        'AD_IMPRESSION_FRAUD_10',
        'AD_IMPRESSION_FRAUD_8',
        'AD_IMPRESSION_FRAUD_6',
        'AD_IMPRESSION_FRAUD_4',
        'AD_IMPRESSION_FRAUD_2',
      ])
      .exactOptional()
      .openapi({ description: 'Avoid Sites and Apps with historical Fraud & IVT.' }),
  })
  .openapi({ description: 'DoubleVerify Fraud & Invalid Traffic settings.', required: [] })
  .openapi('DoubleVerifyFraudInvalidTraffic')

const DoubleVerifyVideoViewabilitySchema = z
  .object({
    playerImpressionRate: z
      .enum([
        'PLAYER_SIZE_400X300_UNSPECIFIED',
        'PLAYER_SIZE_400X300_95',
        'PLAYER_SIZE_400X300_70',
        'PLAYER_SIZE_400X300_25',
        'PLAYER_SIZE_400X300_5',
      ])
      .exactOptional()
      .openapi({
        description:
          'Target inventory to maximize impressions with 400x300 or greater player size.',
      }),
    videoIab: z
      .enum([
        'VIDEO_IAB_UNSPECIFIED',
        'IAB_VIEWABILITY_80_PERCENT_HIGHER',
        'IAB_VIEWABILITY_75_PERCENT_HIGHER',
        'IAB_VIEWABILITY_70_PERCENT_HIGHER',
        'IAB_VIEWABILITY_65_PERCENT_HIHGER',
        'IAB_VIEWABILITY_60_PERCENT_HIGHER',
        'IAB_VIEWABILITY_55_PERCENT_HIHGER',
        'IAB_VIEWABILITY_50_PERCENT_HIGHER',
        'IAB_VIEWABILITY_40_PERCENT_HIHGER',
        'IAB_VIEWABILITY_30_PERCENT_HIHGER',
      ])
      .exactOptional()
      .openapi({ description: 'Target web inventory to maximize IAB viewable rate.' }),
    videoViewableRate: z
      .enum([
        'VIDEO_VIEWABLE_RATE_UNSPECIFIED',
        'VIEWED_PERFORMANCE_40_PERCENT_HIGHER',
        'VIEWED_PERFORMANCE_35_PERCENT_HIGHER',
        'VIEWED_PERFORMANCE_30_PERCENT_HIGHER',
        'VIEWED_PERFORMANCE_25_PERCENT_HIGHER',
        'VIEWED_PERFORMANCE_20_PERCENT_HIGHER',
        'VIEWED_PERFORMANCE_10_PERCENT_HIGHER',
      ])
      .exactOptional()
      .openapi({ description: 'Target web inventory to maximize fully viewable rate.' }),
  })
  .openapi({ description: 'Details of DoubleVerify video viewability settings.', required: [] })
  .openapi('DoubleVerifyVideoViewability')

const DoubleVerifySchema = z
  .object({
    appStarRating: DoubleVerifyAppStarRatingSchema.exactOptional().openapi({
      description: 'Avoid bidding on apps with the star ratings.',
    }),
    avoidedAgeRatings: z
      .array(
        z.enum([
          'AGE_RATING_UNSPECIFIED',
          'APP_AGE_RATE_UNKNOWN',
          'APP_AGE_RATE_4_PLUS',
          'APP_AGE_RATE_9_PLUS',
          'APP_AGE_RATE_12_PLUS',
          'APP_AGE_RATE_17_PLUS',
          'APP_AGE_RATE_18_PLUS',
        ]),
      )
      .exactOptional()
      .openapi({ description: 'Avoid bidding on apps with the age rating.' }),
    brandSafetyCategories: DoubleVerifyBrandSafetyCategoriesSchema.exactOptional().openapi({
      description: 'DV Brand Safety Controls.',
    }),
    customSegmentId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The custom segment ID provided by DoubleVerify. The ID must start with "51" and consist of eight digits. Custom segment ID cannot be specified along with any of the following fields: * brand_safety_categories * avoided_age_ratings * app_star_rating * fraud_invalid_traffic',
      }),
    displayViewability: DoubleVerifyDisplayViewabilitySchema.exactOptional().openapi({
      description: 'Display viewability settings (applicable to display line items only).',
    }),
    fraudInvalidTraffic: DoubleVerifyFraudInvalidTrafficSchema.exactOptional().openapi({
      description: 'Avoid Sites and Apps with historical Fraud & IVT Rates.',
    }),
    videoViewability: DoubleVerifyVideoViewabilitySchema.exactOptional().openapi({
      description: 'Video viewability settings (applicable to video line items only).',
    }),
  })
  .openapi({ description: 'Details of DoubleVerify settings.', required: [] })
  .openapi('DoubleVerify')

const IntegralAdScienceSchema = z
  .object({
    customSegmentId: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The custom segment ID provided by Integral Ad Science. The ID must be between `1000001` and `1999999`, inclusive.',
      }),
    displayViewability: z
      .enum([
        'PERFORMANCE_VIEWABILITY_UNSPECIFIED',
        'PERFORMANCE_VIEWABILITY_40',
        'PERFORMANCE_VIEWABILITY_50',
        'PERFORMANCE_VIEWABILITY_60',
        'PERFORMANCE_VIEWABILITY_70',
      ])
      .exactOptional()
      .openapi({
        description: 'Display Viewability section (applicable to display line items only).',
      }),
    excludeUnrateable: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Brand Safety - **Unrateable**.' }),
    excludedAdFraudRisk: z
      .enum([
        'SUSPICIOUS_ACTIVITY_UNSPECIFIED',
        'SUSPICIOUS_ACTIVITY_HR',
        'SUSPICIOUS_ACTIVITY_HMR',
      ])
      .exactOptional()
      .openapi({ description: 'Ad Fraud settings.' }),
    excludedAdultRisk: z
      .enum(['ADULT_UNSPECIFIED', 'ADULT_HR', 'ADULT_HMR'])
      .exactOptional()
      .openapi({ description: 'Brand Safety - **Adult content**.' }),
    excludedAlcoholRisk: z
      .enum(['ALCOHOL_UNSPECIFIED', 'ALCOHOL_HR', 'ALCOHOL_HMR'])
      .exactOptional()
      .openapi({ description: 'Brand Safety - **Alcohol**.' }),
    excludedDrugsRisk: z
      .enum(['DRUGS_UNSPECIFIED', 'DRUGS_HR', 'DRUGS_HMR'])
      .exactOptional()
      .openapi({ description: 'Brand Safety - **Drugs**.' }),
    excludedGamblingRisk: z
      .enum(['GAMBLING_UNSPECIFIED', 'GAMBLING_HR', 'GAMBLING_HMR'])
      .exactOptional()
      .openapi({ description: 'Brand Safety - **Gambling**.' }),
    excludedHateSpeechRisk: z
      .enum(['HATE_SPEECH_UNSPECIFIED', 'HATE_SPEECH_HR', 'HATE_SPEECH_HMR'])
      .exactOptional()
      .openapi({ description: 'Brand Safety - **Hate speech**.' }),
    excludedIllegalDownloadsRisk: z
      .enum(['ILLEGAL_DOWNLOADS_UNSPECIFIED', 'ILLEGAL_DOWNLOADS_HR', 'ILLEGAL_DOWNLOADS_HMR'])
      .exactOptional()
      .openapi({ description: 'Brand Safety - **Illegal downloads**.' }),
    excludedOffensiveLanguageRisk: z
      .enum(['OFFENSIVE_LANGUAGE_UNSPECIFIED', 'OFFENSIVE_LANGUAGE_HR', 'OFFENSIVE_LANGUAGE_HMR'])
      .exactOptional()
      .openapi({ description: 'Brand Safety - **Offensive language**.' }),
    excludedViolenceRisk: z
      .enum(['VIOLENCE_UNSPECIFIED', 'VIOLENCE_HR', 'VIOLENCE_HMR'])
      .exactOptional()
      .openapi({ description: 'Brand Safety - **Violence**.' }),
    traqScoreOption: z
      .enum([
        'TRAQ_UNSPECIFIED',
        'TRAQ_250',
        'TRAQ_500',
        'TRAQ_600',
        'TRAQ_700',
        'TRAQ_750',
        'TRAQ_875',
        'TRAQ_1000',
      ])
      .exactOptional()
      .openapi({
        description: 'True advertising quality (applicable to Display line items only).',
      }),
    videoViewability: z
      .enum([
        'VIDEO_VIEWABILITY_UNSPECIFIED',
        'VIDEO_VIEWABILITY_40',
        'VIDEO_VIEWABILITY_50',
        'VIDEO_VIEWABILITY_60',
        'VIDEO_VIEWABILITY_70',
      ])
      .exactOptional()
      .openapi({ description: 'Video Viewability Section (applicable to video line items only).' }),
  })
  .openapi({ description: 'Details of Integral Ad Science settings.', required: [] })
  .openapi('IntegralAdScience')

const ThirdPartyVerifierAssignedTargetingOptionDetailsSchema = z
  .object({
    adloox: AdlooxSchema.exactOptional().openapi({
      description: 'Third party brand verifier -- Adloox.',
    }),
    doubleVerify: DoubleVerifySchema.exactOptional().openapi({
      description: 'Third party brand verifier -- DoubleVerify.',
    }),
    integralAdScience: IntegralAdScienceSchema.exactOptional().openapi({
      description: 'Third party brand verifier -- Integral Ad Science.',
    }),
  })
  .openapi({
    description:
      'Assigned third party verifier targeting option details. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_THIRD_PARTY_VERIFIER`.',
    required: [],
  })
  .openapi('ThirdPartyVerifierAssignedTargetingOptionDetails')

const UrlAssignedTargetingOptionDetailsSchema = z
  .object({
    negative: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if this option is being negatively targeted.' }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The URL, for example `example.com`. DV360 supports two levels of subdirectory targeting, for example `www.example.com/one-subdirectory-level/second-level`, and five levels of subdomain targeting, for example `five.four.three.two.one.example.com`.',
      }),
  })
  .openapi({
    description:
      'Details for assigned URL targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_URL`.',
    required: [],
  })
  .openapi('UrlAssignedTargetingOptionDetails')

const UserRewardedContentAssignedTargetingOptionDetailsSchema = z
  .object({
    targetingOptionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The targeting_option_id field when targeting_type is `TARGETING_TYPE_USER_REWARDED_CONTENT`.',
      }),
    userRewardedContent: z
      .enum([
        'USER_REWARDED_CONTENT_UNSPECIFIED',
        'USER_REWARDED_CONTENT_USER_REWARDED',
        'USER_REWARDED_CONTENT_NOT_USER_REWARDED',
      ])
      .exactOptional()
      .openapi({
        description: 'Output only. User rewarded content status for video ads.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'User rewarded content targeting option details. This will be populated in the user_rewarded_content_details field when targeting_type is `TARGETING_TYPE_USER_REWARDED_CONTENT`.',
    required: [],
  })
  .openapi('UserRewardedContentAssignedTargetingOptionDetails')

const VideoPlayerSizeAssignedTargetingOptionDetailsSchema = z
  .object({
    videoPlayerSize: z
      .enum([
        'VIDEO_PLAYER_SIZE_UNSPECIFIED',
        'VIDEO_PLAYER_SIZE_SMALL',
        'VIDEO_PLAYER_SIZE_LARGE',
        'VIDEO_PLAYER_SIZE_HD',
        'VIDEO_PLAYER_SIZE_UNKNOWN',
      ])
      .exactOptional()
      .openapi({ description: 'The video player size. Output only in v1. Required in v2.' }),
  })
  .openapi({
    description:
      'Video player size targeting option details. This will be populated in the video_player_size_details field when targeting_type is `TARGETING_TYPE_VIDEO_PLAYER_SIZE`. Explicitly targeting all options is not supported. Remove all video player size targeting options to achieve this effect.',
    required: [],
  })
  .openapi('VideoPlayerSizeAssignedTargetingOptionDetails')

const ViewabilityAssignedTargetingOptionDetailsSchema = z
  .object({
    viewability: z
      .enum([
        'VIEWABILITY_UNSPECIFIED',
        'VIEWABILITY_10_PERCENT_OR_MORE',
        'VIEWABILITY_20_PERCENT_OR_MORE',
        'VIEWABILITY_30_PERCENT_OR_MORE',
        'VIEWABILITY_40_PERCENT_OR_MORE',
        'VIEWABILITY_50_PERCENT_OR_MORE',
        'VIEWABILITY_60_PERCENT_OR_MORE',
        'VIEWABILITY_70_PERCENT_OR_MORE',
        'VIEWABILITY_80_PERCENT_OR_MORE',
        'VIEWABILITY_90_PERCENT_OR_MORE',
      ])
      .exactOptional()
      .openapi({
        description: 'The predicted viewability percentage. Output only in v1. Required in v2.',
      }),
  })
  .openapi({
    description:
      'Assigned viewability targeting option details. This will be populated in the viewability_details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_VIEWABILITY`.',
    required: [],
  })
  .openapi('ViewabilityAssignedTargetingOptionDetails')

const YoutubeChannelAssignedTargetingOptionDetailsSchema = z
  .object({
    channelId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The YouTube uploader channel id or the channel code of a YouTube channel.',
      }),
    negative: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if this option is being negatively targeted.' }),
  })
  .openapi({
    description:
      'Details for YouTube channel assigned targeting option. This will be populated in the youtube_channel_details field when targeting_type is `TARGETING_TYPE_YOUTUBE_CHANNEL`.',
    required: [],
  })
  .openapi('YoutubeChannelAssignedTargetingOptionDetails')

const YoutubeVideoAssignedTargetingOptionDetailsSchema = z
  .object({
    negative: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if this option is being negatively targeted.' }),
    videoId: z
      .string()
      .exactOptional()
      .openapi({ description: 'YouTube video id as it appears on the YouTube watch page.' }),
  })
  .openapi({
    description:
      'Details for YouTube video assigned targeting option. This will be populated in the youtube_video_details field when targeting_type is `TARGETING_TYPE_YOUTUBE_VIDEO`.',
    required: [],
  })
  .openapi('YoutubeVideoAssignedTargetingOptionDetails')

const AssignedTargetingOptionSchema = z
  .object({
    ageRangeDetails: AgeRangeAssignedTargetingOptionDetailsSchema.exactOptional().openapi({
      description:
        'Age range details. This field will be populated when the targeting_type is `TARGETING_TYPE_AGE_RANGE`.',
    }),
    appCategoryDetails: AppCategoryAssignedTargetingOptionDetailsSchema.exactOptional().openapi({
      description:
        'App category details. This field will be populated when the targeting_type is `TARGETING_TYPE_APP_CATEGORY`.',
    }),
    appDetails: AppAssignedTargetingOptionDetailsSchema.exactOptional().openapi({
      description:
        'App details. This field will be populated when the targeting_type is `TARGETING_TYPE_APP`.',
    }),
    assignedTargetingOptionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The unique ID of the assigned targeting option. The ID is only unique within a given resource and targeting type. It may be reused in other contexts.',
        readOnly: true,
      }),
    assignedTargetingOptionIdAlias: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. An alias for the assigned_targeting_option_id. This value can be used in place of `assignedTargetingOptionId` when retrieving or deleting existing targeting. This field will only be supported for all assigned targeting options of the following targeting types: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_DEVICE_TYPE` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_NATIVE_CONTENT_POSITION` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_VIDEO_PLAYER_SIZE` * `TARGETING_TYPE_VIEWABILITY` This field is also supported for line item assigned targeting options of the following targeting types: * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION`',
        readOnly: true,
      }),
    audienceGroupDetails: AudienceGroupAssignedTargetingOptionDetailsSchema.exactOptional().openapi(
      {
        description:
          'Audience targeting details. This field will be populated when the targeting_type is `TARGETING_TYPE_AUDIENCE_GROUP`. You can only target one audience group option per resource.',
      },
    ),
    audioContentTypeDetails:
      AudioContentTypeAssignedTargetingOptionDetailsSchema.exactOptional().openapi({
        description:
          'Audio content type details. This field will be populated when the targeting_type is `TARGETING_TYPE_AUDIO_CONTENT_TYPE`.',
      }),
    authorizedSellerStatusDetails:
      AuthorizedSellerStatusAssignedTargetingOptionDetailsSchema.exactOptional().openapi({
        description:
          "Authorized seller status details. This field will be populated when the targeting_type is `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS`. You can only target one authorized seller status option per resource. If a resource doesn't have an authorized seller status option, all authorized sellers indicated as DIRECT or RESELLER in the ads.txt file are targeted by default.",
      }),
    browserDetails: BrowserAssignedTargetingOptionDetailsSchema.exactOptional().openapi({
      description:
        'Browser details. This field will be populated when the targeting_type is `TARGETING_TYPE_BROWSER`.',
    }),
    businessChainDetails: BusinessChainAssignedTargetingOptionDetailsSchema.exactOptional().openapi(
      {
        description:
          'Business chain details. This field will be populated when the targeting_type is `TARGETING_TYPE_BUSINESS_CHAIN`.',
      },
    ),
    carrierAndIspDetails: CarrierAndIspAssignedTargetingOptionDetailsSchema.exactOptional().openapi(
      {
        description:
          'Carrier and ISP details. This field will be populated when the targeting_type is `TARGETING_TYPE_CARRIER_AND_ISP`.',
      },
    ),
    categoryDetails: CategoryAssignedTargetingOptionDetailsSchema.exactOptional().openapi({
      description:
        'Category details. This field will be populated when the targeting_type is `TARGETING_TYPE_CATEGORY`. Targeting a category will also target its subcategories. If a category is excluded from targeting and a subcategory is included, the exclusion will take precedence.',
    }),
    channelDetails: ChannelAssignedTargetingOptionDetailsSchema.exactOptional().openapi({
      description:
        'Channel details. This field will be populated when the targeting_type is `TARGETING_TYPE_CHANNEL`.',
    }),
    contentDurationDetails:
      ContentDurationAssignedTargetingOptionDetailsSchema.exactOptional().openapi({
        description:
          'Content duration details. This field will be populated when the targeting_type is `TARGETING_TYPE_CONTENT_DURATION`.',
      }),
    contentGenreDetails: ContentGenreAssignedTargetingOptionDetailsSchema.exactOptional().openapi({
      description:
        'Content genre details. This field will be populated when the targeting_type is `TARGETING_TYPE_CONTENT_GENRE`.',
    }),
    contentInstreamPositionDetails:
      ContentInstreamPositionAssignedTargetingOptionDetailsSchema.exactOptional().openapi({
        description:
          'Content instream position details. This field will be populated when the targeting_type is `TARGETING_TYPE_CONTENT_INSTREAM_POSITION`.',
      }),
    contentOutstreamPositionDetails:
      ContentOutstreamPositionAssignedTargetingOptionDetailsSchema.exactOptional().openapi({
        description:
          'Content outstream position details. This field will be populated when the targeting_type is `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION`.',
      }),
    contentStreamTypeDetails:
      ContentStreamTypeAssignedTargetingOptionDetailsSchema.exactOptional().openapi({
        description:
          'Content duration details. This field will be populated when the TargetingType is `TARGETING_TYPE_CONTENT_STREAM_TYPE`.',
      }),
    dayAndTimeDetails: DayAndTimeAssignedTargetingOptionDetailsSchema.exactOptional().openapi({
      description:
        'Day and time details. This field will be populated when the targeting_type is `TARGETING_TYPE_DAY_AND_TIME`.',
    }),
    deviceMakeModelDetails:
      DeviceMakeModelAssignedTargetingOptionDetailsSchema.exactOptional().openapi({
        description:
          'Device make and model details. This field will be populated when the targeting_type is `TARGETING_TYPE_DEVICE_MAKE_MODEL`.',
      }),
    deviceTypeDetails: DeviceTypeAssignedTargetingOptionDetailsSchema.exactOptional().openapi({
      description:
        'Device Type details. This field will be populated when the targeting_type is `TARGETING_TYPE_DEVICE_TYPE`.',
    }),
    digitalContentLabelExclusionDetails:
      DigitalContentLabelAssignedTargetingOptionDetailsSchema.exactOptional().openapi({
        description:
          "Digital content label details. This field will be populated when the targeting_type is `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION`. Digital content labels are targeting exclusions. Advertiser level digital content label exclusions, if set, are always applied in serving (even though they aren't visible in resource settings). Resource settings can exclude content labels in addition to advertiser exclusions, but can't override them. A line item won't serve if all the digital content labels are excluded.",
      }),
    environmentDetails: EnvironmentAssignedTargetingOptionDetailsSchema.exactOptional().openapi({
      description:
        'Environment details. This field will be populated when the targeting_type is `TARGETING_TYPE_ENVIRONMENT`.',
    }),
    exchangeDetails: ExchangeAssignedTargetingOptionDetailsSchema.exactOptional().openapi({
      description:
        'Exchange details. This field will be populated when the targeting_type is `TARGETING_TYPE_EXCHANGE`.',
    }),
    genderDetails: GenderAssignedTargetingOptionDetailsSchema.exactOptional().openapi({
      description:
        'Gender details. This field will be populated when the targeting_type is `TARGETING_TYPE_GENDER`.',
    }),
    geoRegionDetails: GeoRegionAssignedTargetingOptionDetailsSchema.exactOptional().openapi({
      description:
        'Geographic region details. This field will be populated when the targeting_type is `TARGETING_TYPE_GEO_REGION`.',
    }),
    householdIncomeDetails:
      HouseholdIncomeAssignedTargetingOptionDetailsSchema.exactOptional().openapi({
        description:
          'Household income details. This field will be populated when the targeting_type is `TARGETING_TYPE_HOUSEHOLD_INCOME`.',
      }),
    inheritance: z
      .enum([
        'INHERITANCE_UNSPECIFIED',
        'NOT_INHERITED',
        'INHERITED_FROM_PARTNER',
        'INHERITED_FROM_ADVERTISER',
      ])
      .exactOptional()
      .openapi({
        description: 'Output only. The inheritance status of the assigned targeting option.',
        readOnly: true,
      }),
    inventorySourceDetails:
      InventorySourceAssignedTargetingOptionDetailsSchema.exactOptional().openapi({
        description:
          'Inventory source details. This field will be populated when the targeting_type is `TARGETING_TYPE_INVENTORY_SOURCE`.',
      }),
    inventorySourceGroupDetails:
      InventorySourceGroupAssignedTargetingOptionDetailsSchema.exactOptional().openapi({
        description:
          'Inventory source group details. This field will be populated when the targeting_type is `TARGETING_TYPE_INVENTORY_SOURCE_GROUP`.',
      }),
    keywordDetails: KeywordAssignedTargetingOptionDetailsSchema.exactOptional().openapi({
      description:
        'Keyword details. This field will be populated when the targeting_type is `TARGETING_TYPE_KEYWORD`. A maximum of 5000 direct negative keywords can be assigned to a resource. No limit on number of positive keywords that can be assigned.',
    }),
    languageDetails: LanguageAssignedTargetingOptionDetailsSchema.exactOptional().openapi({
      description:
        'Language details. This field will be populated when the targeting_type is `TARGETING_TYPE_LANGUAGE`.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The resource name for this assigned targeting option.',
        readOnly: true,
      }),
    nativeContentPositionDetails:
      NativeContentPositionAssignedTargetingOptionDetailsSchema.exactOptional().openapi({
        description:
          'Native content position details. This field will be populated when the targeting_type is `TARGETING_TYPE_NATIVE_CONTENT_POSITION`.',
      }),
    negativeKeywordListDetails:
      NegativeKeywordListAssignedTargetingOptionDetailsSchema.exactOptional().openapi({
        description:
          'Keyword details. This field will be populated when the targeting_type is `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST`. A maximum of 4 negative keyword lists can be assigned to a resource.',
      }),
    omidDetails: OmidAssignedTargetingOptionDetailsSchema.exactOptional().openapi({
      description:
        'Open Measurement enabled inventory details. This field will be populated when the targeting_type is `TARGETING_TYPE_OMID`.',
    }),
    onScreenPositionDetails:
      OnScreenPositionAssignedTargetingOptionDetailsSchema.exactOptional().openapi({
        description:
          'On screen position details. This field will be populated when the targeting_type is `TARGETING_TYPE_ON_SCREEN_POSITION`.',
      }),
    operatingSystemDetails:
      OperatingSystemAssignedTargetingOptionDetailsSchema.exactOptional().openapi({
        description:
          'Operating system details. This field will be populated when the targeting_type is `TARGETING_TYPE_OPERATING_SYSTEM`.',
      }),
    parentalStatusDetails:
      ParentalStatusAssignedTargetingOptionDetailsSchema.exactOptional().openapi({
        description:
          'Parental status details. This field will be populated when the targeting_type is `TARGETING_TYPE_PARENTAL_STATUS`.',
      }),
    poiDetails: PoiAssignedTargetingOptionDetailsSchema.exactOptional().openapi({
      description:
        'POI details. This field will be populated when the targeting_type is `TARGETING_TYPE_POI`.',
    }),
    proximityLocationListDetails:
      ProximityLocationListAssignedTargetingOptionDetailsSchema.exactOptional().openapi({
        description:
          'Proximity location list details. This field will be populated when the targeting_type is `TARGETING_TYPE_PROXIMITY_LOCATION_LIST`.',
      }),
    regionalLocationListDetails:
      RegionalLocationListAssignedTargetingOptionDetailsSchema.exactOptional().openapi({
        description:
          'Regional location list details. This field will be populated when the targeting_type is `TARGETING_TYPE_REGIONAL_LOCATION_LIST`.',
      }),
    sensitiveCategoryExclusionDetails:
      SensitiveCategoryAssignedTargetingOptionDetailsSchema.exactOptional().openapi({
        description:
          "Sensitive category details. This field will be populated when the targeting_type is `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION`. Sensitive categories are targeting exclusions. Advertiser level sensitive category exclusions, if set, are always applied in serving (even though they aren't visible in resource settings). Resource settings can exclude sensitive categories in addition to advertiser exclusions, but can't override them.",
      }),
    sessionPositionDetails:
      SessionPositionAssignedTargetingOptionDetailsSchema.exactOptional().openapi({
        description:
          'Session position details. This field will be populated when the targeting_type is `TARGETING_TYPE_SESSION_POSITION`.',
      }),
    subExchangeDetails: SubExchangeAssignedTargetingOptionDetailsSchema.exactOptional().openapi({
      description:
        'Sub-exchange details. This field will be populated when the targeting_type is `TARGETING_TYPE_SUB_EXCHANGE`.',
    }),
    targetingType: z
      .enum([
        'TARGETING_TYPE_UNSPECIFIED',
        'TARGETING_TYPE_CHANNEL',
        'TARGETING_TYPE_APP_CATEGORY',
        'TARGETING_TYPE_APP',
        'TARGETING_TYPE_URL',
        'TARGETING_TYPE_DAY_AND_TIME',
        'TARGETING_TYPE_AGE_RANGE',
        'TARGETING_TYPE_REGIONAL_LOCATION_LIST',
        'TARGETING_TYPE_PROXIMITY_LOCATION_LIST',
        'TARGETING_TYPE_GENDER',
        'TARGETING_TYPE_VIDEO_PLAYER_SIZE',
        'TARGETING_TYPE_USER_REWARDED_CONTENT',
        'TARGETING_TYPE_PARENTAL_STATUS',
        'TARGETING_TYPE_CONTENT_INSTREAM_POSITION',
        'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION',
        'TARGETING_TYPE_DEVICE_TYPE',
        'TARGETING_TYPE_AUDIENCE_GROUP',
        'TARGETING_TYPE_BROWSER',
        'TARGETING_TYPE_HOUSEHOLD_INCOME',
        'TARGETING_TYPE_ON_SCREEN_POSITION',
        'TARGETING_TYPE_THIRD_PARTY_VERIFIER',
        'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION',
        'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION',
        'TARGETING_TYPE_ENVIRONMENT',
        'TARGETING_TYPE_CARRIER_AND_ISP',
        'TARGETING_TYPE_OPERATING_SYSTEM',
        'TARGETING_TYPE_DEVICE_MAKE_MODEL',
        'TARGETING_TYPE_KEYWORD',
        'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST',
        'TARGETING_TYPE_VIEWABILITY',
        'TARGETING_TYPE_CATEGORY',
        'TARGETING_TYPE_INVENTORY_SOURCE',
        'TARGETING_TYPE_LANGUAGE',
        'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS',
        'TARGETING_TYPE_GEO_REGION',
        'TARGETING_TYPE_INVENTORY_SOURCE_GROUP',
        'TARGETING_TYPE_EXCHANGE',
        'TARGETING_TYPE_SUB_EXCHANGE',
        'TARGETING_TYPE_POI',
        'TARGETING_TYPE_BUSINESS_CHAIN',
        'TARGETING_TYPE_CONTENT_DURATION',
        'TARGETING_TYPE_CONTENT_STREAM_TYPE',
        'TARGETING_TYPE_NATIVE_CONTENT_POSITION',
        'TARGETING_TYPE_OMID',
        'TARGETING_TYPE_AUDIO_CONTENT_TYPE',
        'TARGETING_TYPE_CONTENT_GENRE',
        'TARGETING_TYPE_YOUTUBE_VIDEO',
        'TARGETING_TYPE_YOUTUBE_CHANNEL',
        'TARGETING_TYPE_SESSION_POSITION',
      ])
      .exactOptional()
      .openapi({
        description: 'Output only. Identifies the type of this assigned targeting option.',
        readOnly: true,
      }),
    thirdPartyVerifierDetails:
      ThirdPartyVerifierAssignedTargetingOptionDetailsSchema.exactOptional().openapi({
        description:
          'Third party verification details. This field will be populated when the targeting_type is `TARGETING_TYPE_THIRD_PARTY_VERIFIER`.',
      }),
    urlDetails: UrlAssignedTargetingOptionDetailsSchema.exactOptional().openapi({
      description:
        'URL details. This field will be populated when the targeting_type is `TARGETING_TYPE_URL`.',
    }),
    userRewardedContentDetails:
      UserRewardedContentAssignedTargetingOptionDetailsSchema.exactOptional().openapi({
        description:
          'User rewarded content details. This field will be populated when the targeting_type is `TARGETING_TYPE_USER_REWARDED_CONTENT`.',
      }),
    videoPlayerSizeDetails:
      VideoPlayerSizeAssignedTargetingOptionDetailsSchema.exactOptional().openapi({
        description:
          'Video player size details. This field will be populated when the targeting_type is `TARGETING_TYPE_VIDEO_PLAYER_SIZE`.',
      }),
    viewabilityDetails: ViewabilityAssignedTargetingOptionDetailsSchema.exactOptional().openapi({
      description:
        'Viewability details. This field will be populated when the targeting_type is `TARGETING_TYPE_VIEWABILITY`. You can only target one viewability option per resource.',
    }),
    youtubeChannelDetails:
      YoutubeChannelAssignedTargetingOptionDetailsSchema.exactOptional().openapi({
        description:
          'YouTube channel details. This field will be populated when the targeting_type is `TARGETING_TYPE_YOUTUBE_CHANNEL`.',
      }),
    youtubeVideoDetails: YoutubeVideoAssignedTargetingOptionDetailsSchema.exactOptional().openapi({
      description:
        'YouTube video details. This field will be populated when the targeting_type is `TARGETING_TYPE_YOUTUBE_VIDEO`.',
    }),
  })
  .openapi({
    description:
      'A single assigned targeting option, which defines the state of a targeting option for an entity with targeting settings.',
    required: [],
  })
  .openapi('AssignedTargetingOption')

const AssignedUserRoleSchema = z
  .object({
    advertiserId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the advertiser that the assigend user role applies to.' }),
    assignedUserRoleId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The ID of the assigned user role.', readOnly: true }),
    partnerId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the partner that the assigned user role applies to.' }),
    userRole: z
      .enum([
        'USER_ROLE_UNSPECIFIED',
        'ADMIN',
        'ADMIN_PARTNER_CLIENT',
        'STANDARD',
        'STANDARD_PLANNER',
        'STANDARD_PLANNER_LIMITED',
        'STANDARD_PARTNER_CLIENT',
        'READ_ONLY',
        'REPORTING_ONLY',
        'LIMITED_REPORTING_ONLY',
        'CREATIVE',
        'CREATIVE_ADMIN',
      ])
      .exactOptional()
      .openapi({ description: 'Required. The user role to assign to a user for the entity.' }),
  })
  .openapi({
    description:
      "A single assigned user role, which defines a user's authorized interaction with a specified partner or advertiser.",
    required: [],
  })
  .openapi('AssignedUserRole')

const YoutubeVideoDetailsSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The YouTube video ID which can be searched on YouTube webpage.' }),
    unavailableReason: z
      .enum([
        'VIDEO_UNAVAILABLE_REASON_UNSPECIFIED',
        'VIDEO_UNAVAILABLE_REASON_PRIVATE',
        'VIDEO_UNAVAILABLE_REASON_DELETED',
      ])
      .exactOptional()
      .openapi({ description: 'The reason why the video data is not available.' }),
  })
  .openapi({ description: 'Details of a YouTube video.', required: [] })
  .openapi('YoutubeVideoDetails')

const AudioAdSchema = z
  .object({
    displayUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The webpage address that appears with the ad.' }),
    finalUrl: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The URL address of the webpage that people reach after they click the ad.',
      }),
    trackingUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL address loaded in the background for tracking purposes.' }),
    video: YoutubeVideoDetailsSchema.exactOptional().openapi({
      description: 'The YouTube video of the ad.',
    }),
  })
  .openapi({ description: 'Details for an audio ad.', required: [] })
  .openapi('AudioAd')

const AudioContentTypeTargetingOptionDetailsSchema = z
  .object({
    audioContentType: z
      .enum([
        'AUDIO_CONTENT_TYPE_UNSPECIFIED',
        'AUDIO_CONTENT_TYPE_UNKNOWN',
        'AUDIO_CONTENT_TYPE_MUSIC',
        'AUDIO_CONTENT_TYPE_BROADCAST',
        'AUDIO_CONTENT_TYPE_PODCAST',
      ])
      .exactOptional()
      .openapi({ description: 'Output only. The audio content type.', readOnly: true }),
  })
  .openapi({
    description:
      'Represents a targetable audio content type. This will be populated in the audio_content_type_details field when targeting_type is `TARGETING_TYPE_AUDIO_CONTENT_TYPE`.',
    required: [],
  })
  .openapi('AudioContentTypeTargetingOptionDetails')

const AudioVideoOffsetSchema = z
  .object({
    percentage: z
      .string()
      .exactOptional()
      .openapi({ description: 'The offset in percentage of the audio or video duration.' }),
    seconds: z
      .string()
      .exactOptional()
      .openapi({ description: 'The offset in seconds from the start of the audio or video.' }),
  })
  .openapi({ description: 'The length an audio or a video has been played.', required: [] })
  .openapi('AudioVideoOffset')

const AuditAdvertiserResponseSchema = z
  .object({
    adGroupCriteriaCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The number of individual targeting options from the following targeting types that are assigned to a line item under this advertiser. These individual targeting options count towards the limit of 4500000 ad group targeting options per advertiser. Qualifying Targeting types: * Channels, URLs, apps, and collections * Demographic * Google Audiences, including Affinity, Custom Affinity, and In-market audiences * Inventory source * Keyword * Mobile app category * User lists * Video targeting * Viewability',
      }),
    campaignCriteriaCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The number of individual targeting options from the following targeting types that are assigned to a line item under this advertiser. These individual targeting options count towards the limit of 900000 campaign targeting options per advertiser. Qualifying Targeting types: * Position * Browser * Connection speed * Day and time * Device and operating system * Digital content label * Sensitive categories * Environment * Geography, including business chains and proximity * ISP * Language * Third-party verification',
      }),
    channelsCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The number of channels created under this advertiser. These channels count towards the limit of 1000 channels per advertiser.',
      }),
    negativeKeywordListsCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The number of negative keyword lists created under this advertiser. These negative keyword lists count towards the limit of 20 negative keyword lists per advertiser.',
      }),
    negativelyTargetedChannelsCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The number of negatively targeted channels created under this advertiser. These negatively targeted channels count towards the limit of 5 negatively targeted channels per advertiser.',
      }),
    usedCampaignsCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The number of ACTIVE and PAUSED campaigns under this advertiser. These campaigns count towards the limit of 9999 campaigns per advertiser.',
      }),
    usedInsertionOrdersCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The number of ACTIVE, PAUSED and DRAFT insertion orders under this advertiser. These insertion orders count towards the limit of 9999 insertion orders per advertiser.',
      }),
    usedLineItemsCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The number of ACTIVE, PAUSED, and DRAFT line items under this advertiser. These line items count towards the limit of 9999 line items per advertiser.',
      }),
  })
  .openapi({ description: 'Response message for AdvertiserService.AuditAdvertiser.', required: [] })
  .openapi('AuditAdvertiserResponse')

const AuthorizedSellerStatusTargetingOptionDetailsSchema = z
  .object({
    authorizedSellerStatus: z
      .enum([
        'AUTHORIZED_SELLER_STATUS_UNSPECIFIED',
        'AUTHORIZED_SELLER_STATUS_AUTHORIZED_DIRECT_SELLERS_ONLY',
        'AUTHORIZED_SELLER_STATUS_AUTHORIZED_AND_NON_PARTICIPATING_PUBLISHERS',
      ])
      .exactOptional()
      .openapi({ description: 'Output only. The authorized seller status.', readOnly: true }),
  })
  .openapi({
    description:
      'Represents a targetable authorized seller status. This will be populated in the authorized_seller_status_details field when targeting_type is `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS`.',
    required: [],
  })
  .openapi('AuthorizedSellerStatusTargetingOptionDetails')

const FixedBidStrategySchema = z
  .object({
    bidAmountMicros: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The fixed bid amount, in micros of the advertiser's currency. For insertion order entity, bid_amount_micros should be set as 0. For line item entity, bid_amount_micros must be greater than or equal to billable unit of the given currency and smaller than or equal to the upper limit 1000000000. For example, 1500000 represents 1.5 standard units of the currency.",
      }),
  })
  .openapi({ description: 'A strategy that uses a fixed bidding price.', required: [] })
  .openapi('FixedBidStrategy')

const MaximizeSpendBidStrategySchema = z
  .object({
    customBiddingAlgorithmId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the Custom Bidding Algorithm used by this strategy. Only applicable when performance_goal_type is set to `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CUSTOM_ALGO`.',
      }),
    maxAverageCpmBidAmountMicros: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The maximum average CPM that may be bid, in micros of the advertiser's currency. Must be greater than or equal to a billable unit of the given currency. For example, 1500000 represents 1.5 standard units of the currency.",
      }),
    performanceGoalType: z
      .enum([
        'BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_UNSPECIFIED',
        'BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPA',
        'BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPC',
        'BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_VIEWABLE_CPM',
        'BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CUSTOM_ALGO',
        'BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CIVA',
        'BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_IVO_TEN',
        'BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_AV_VIEWED',
      ])
      .exactOptional()
      .openapi({
        description:
          'Required. The type of the performance goal that the bidding strategy tries to minimize while spending the full budget. `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_VIEWABLE_CPM` is not supported for this strategy.',
      }),
    raiseBidForDeals: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the strategy takes deal floor prices into account.' }),
  })
  .openapi({
    description:
      'A strategy that automatically adjusts the bid to optimize a specified performance goal while spending the full budget.',
    required: [],
  })
  .openapi('MaximizeSpendBidStrategy')

const PerformanceGoalBidStrategySchema = z
  .object({
    customBiddingAlgorithmId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the Custom Bidding Algorithm used by this strategy. Only applicable when performance_goal_type is set to `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CUSTOM_ALGO`.',
      }),
    maxAverageCpmBidAmountMicros: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The maximum average CPM that may be bid, in micros of the advertiser's currency. Must be greater than or equal to a billable unit of the given currency. Not applicable when performance_goal_type is set to `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_VIEWABLE_CPM`. For example, 1500000 represents 1.5 standard units of the currency.",
      }),
    performanceGoalAmountMicros: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. The performance goal the bidding strategy will attempt to meet or beat, in micros of the advertiser's currency or in micro of the ROAS (Return On Advertising Spend) value which is also based on advertiser's currency. Must be greater than or equal to a billable unit of the given currency and smaller or equal to upper bounds. Each performance_goal_type has its upper bound: * when performance_goal_type is `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPA`, upper bound is 10000.00 USD. * when performance_goal_type is `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPC`, upper bound is 1000.00 USD. * when performance_goal_type is `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_VIEWABLE_CPM`, upper bound is 1000.00 USD. * when performance_goal_type is `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CUSTOM_ALGO`, upper bound is 1000.00 and lower bound is 0.01. Example: If set to `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_VIEWABLE_CPM`, the bid price will be based on the probability that each available impression will be viewable. For example, if viewable CPM target is $2 and an impression is 40% likely to be viewable, the bid price will be $0.80 CPM (40% of $2). For example, 1500000 represents 1.5 standard units of the currency or ROAS value.",
      }),
    performanceGoalType: z
      .enum([
        'BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_UNSPECIFIED',
        'BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPA',
        'BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPC',
        'BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_VIEWABLE_CPM',
        'BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CUSTOM_ALGO',
        'BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CIVA',
        'BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_IVO_TEN',
        'BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_AV_VIEWED',
      ])
      .exactOptional()
      .openapi({
        description:
          'Required. The type of the performance goal that the bidding strategy will try to meet or beat. For line item level usage, the value must be one of: * `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPA` * `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPC` * `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_VIEWABLE_CPM` * `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CUSTOM_ALGO`.',
      }),
  })
  .openapi({
    description:
      'A strategy that automatically adjusts the bid to meet or beat a specified performance goal.',
    required: [],
  })
  .openapi('PerformanceGoalBidStrategy')

const BiddingStrategySchema = z
  .object({
    fixedBid: FixedBidStrategySchema.exactOptional().openapi({
      description: 'A strategy that uses a fixed bid price.',
    }),
    maximizeSpendAutoBid: MaximizeSpendBidStrategySchema.exactOptional().openapi({
      description:
        'A strategy that automatically adjusts the bid to optimize to your performance goal while spending the full budget. At insertion order level, the markup_type of line items cannot be set to `PARTNER_REVENUE_MODEL_MARKUP_TYPE_CPM`. In addition, when performance_goal_type is one of: * `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPA` * `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPC` * `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_AV_VIEWED` , the line_item_type of the insertion order line items must be either: * `LINE_ITEM_TYPE_DISPLAY_DEFAULT` * `LINE_ITEM_TYPE_VIDEO_DEFAULT` , and when performance_goal_type is either: * `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CIVA` * `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_IVO_TEN` the line_item_type of the insertion order line items must be `LINE_ITEM_TYPE_VIDEO_DEFAULT`.',
    }),
    performanceGoalAutoBid: PerformanceGoalBidStrategySchema.exactOptional().openapi({
      description:
        'A strategy that automatically adjusts the bid to meet or beat a specified performance goal. It is to be used only for a line item entity.',
    }),
  })
  .openapi({
    description: 'Settings that control the bid strategy. Bid strategy determines the bid price.',
    required: [],
  })
  .openapi('BiddingStrategy')

const BrowserTargetingOptionDetailsSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The display name of the browser.', readOnly: true }),
  })
  .openapi({
    description:
      'Represents a targetable browser. This will be populated in the browser_details field when targeting_type is `TARGETING_TYPE_BROWSER`.',
    required: [],
  })
  .openapi('BrowserTargetingOptionDetails')

const PrismaCpeCodeSchema = z
  .object({
    prismaClientCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Prisma client code.' }),
    prismaEstimateCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Prisma estimate code.' }),
    prismaProductCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Prisma product code.' }),
  })
  .openapi({
    description:
      'Google Payments Center supports searching and filtering on the component fields of this code.',
    required: [],
  })
  .openapi('PrismaCpeCode')

const BudgetSummarySchema = z
  .object({
    externalBudgetId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Corresponds to the external_budget_id of a campaign budget. If the value is not set in the campaign budget, this field will be empty.',
      }),
    preTaxAmountMicros: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The sum of charges made under this budget before taxes, in micros of the invoice's currency. For example, if currency_code is `USD`, then 1000000 represents one US dollar.",
      }),
    prismaCpeCode: PrismaCpeCodeSchema.exactOptional().openapi({
      description:
        'Relevant client, product, and estimate codes from the Mediaocean Prisma tool. Only applicable for campaign budgets with an external_budget_source of EXTERNAL_BUDGET_SOURCE_MEDIA_OCEAN.',
    }),
    taxAmountMicros: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The amount of tax applied to charges under this budget, in micros of the invoice's currency. For example, if currency_code is `USD`, then 1000000 represents one US dollar.",
      }),
    totalAmountMicros: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The total sum of charges made under this budget, including tax, in micros of the invoice's currency. For example, if currency_code is `USD`, then 1000000 represents one US dollar.",
      }),
  })
  .openapi({
    description: 'Summarized information of an individual campaign budget.',
    required: [],
  })
  .openapi('BudgetSummary')

const CreateAssignedTargetingOptionsRequestSchema = z
  .object({
    assignedTargetingOptions: z
      .array(AssignedTargetingOptionSchema)
      .exactOptional()
      .openapi({ description: 'Required. The assigned targeting options to create and add.' }),
    targetingType: z
      .enum([
        'TARGETING_TYPE_UNSPECIFIED',
        'TARGETING_TYPE_CHANNEL',
        'TARGETING_TYPE_APP_CATEGORY',
        'TARGETING_TYPE_APP',
        'TARGETING_TYPE_URL',
        'TARGETING_TYPE_DAY_AND_TIME',
        'TARGETING_TYPE_AGE_RANGE',
        'TARGETING_TYPE_REGIONAL_LOCATION_LIST',
        'TARGETING_TYPE_PROXIMITY_LOCATION_LIST',
        'TARGETING_TYPE_GENDER',
        'TARGETING_TYPE_VIDEO_PLAYER_SIZE',
        'TARGETING_TYPE_USER_REWARDED_CONTENT',
        'TARGETING_TYPE_PARENTAL_STATUS',
        'TARGETING_TYPE_CONTENT_INSTREAM_POSITION',
        'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION',
        'TARGETING_TYPE_DEVICE_TYPE',
        'TARGETING_TYPE_AUDIENCE_GROUP',
        'TARGETING_TYPE_BROWSER',
        'TARGETING_TYPE_HOUSEHOLD_INCOME',
        'TARGETING_TYPE_ON_SCREEN_POSITION',
        'TARGETING_TYPE_THIRD_PARTY_VERIFIER',
        'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION',
        'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION',
        'TARGETING_TYPE_ENVIRONMENT',
        'TARGETING_TYPE_CARRIER_AND_ISP',
        'TARGETING_TYPE_OPERATING_SYSTEM',
        'TARGETING_TYPE_DEVICE_MAKE_MODEL',
        'TARGETING_TYPE_KEYWORD',
        'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST',
        'TARGETING_TYPE_VIEWABILITY',
        'TARGETING_TYPE_CATEGORY',
        'TARGETING_TYPE_INVENTORY_SOURCE',
        'TARGETING_TYPE_LANGUAGE',
        'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS',
        'TARGETING_TYPE_GEO_REGION',
        'TARGETING_TYPE_INVENTORY_SOURCE_GROUP',
        'TARGETING_TYPE_EXCHANGE',
        'TARGETING_TYPE_SUB_EXCHANGE',
        'TARGETING_TYPE_POI',
        'TARGETING_TYPE_BUSINESS_CHAIN',
        'TARGETING_TYPE_CONTENT_DURATION',
        'TARGETING_TYPE_CONTENT_STREAM_TYPE',
        'TARGETING_TYPE_NATIVE_CONTENT_POSITION',
        'TARGETING_TYPE_OMID',
        'TARGETING_TYPE_AUDIO_CONTENT_TYPE',
        'TARGETING_TYPE_CONTENT_GENRE',
        'TARGETING_TYPE_YOUTUBE_VIDEO',
        'TARGETING_TYPE_YOUTUBE_CHANNEL',
        'TARGETING_TYPE_SESSION_POSITION',
      ])
      .exactOptional()
      .openapi({ description: 'Required. Identifies the type of this assigned targeting option.' }),
  })
  .openapi({
    description:
      'A request listing which assigned targeting options of a given targeting type should be created and added.',
    required: [],
  })
  .openapi('CreateAssignedTargetingOptionsRequest')

const DeleteAssignedTargetingOptionsRequestSchema = z
  .object({
    assignedTargetingOptionIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Required. The assigned targeting option IDs to delete.' }),
    targetingType: z
      .enum([
        'TARGETING_TYPE_UNSPECIFIED',
        'TARGETING_TYPE_CHANNEL',
        'TARGETING_TYPE_APP_CATEGORY',
        'TARGETING_TYPE_APP',
        'TARGETING_TYPE_URL',
        'TARGETING_TYPE_DAY_AND_TIME',
        'TARGETING_TYPE_AGE_RANGE',
        'TARGETING_TYPE_REGIONAL_LOCATION_LIST',
        'TARGETING_TYPE_PROXIMITY_LOCATION_LIST',
        'TARGETING_TYPE_GENDER',
        'TARGETING_TYPE_VIDEO_PLAYER_SIZE',
        'TARGETING_TYPE_USER_REWARDED_CONTENT',
        'TARGETING_TYPE_PARENTAL_STATUS',
        'TARGETING_TYPE_CONTENT_INSTREAM_POSITION',
        'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION',
        'TARGETING_TYPE_DEVICE_TYPE',
        'TARGETING_TYPE_AUDIENCE_GROUP',
        'TARGETING_TYPE_BROWSER',
        'TARGETING_TYPE_HOUSEHOLD_INCOME',
        'TARGETING_TYPE_ON_SCREEN_POSITION',
        'TARGETING_TYPE_THIRD_PARTY_VERIFIER',
        'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION',
        'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION',
        'TARGETING_TYPE_ENVIRONMENT',
        'TARGETING_TYPE_CARRIER_AND_ISP',
        'TARGETING_TYPE_OPERATING_SYSTEM',
        'TARGETING_TYPE_DEVICE_MAKE_MODEL',
        'TARGETING_TYPE_KEYWORD',
        'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST',
        'TARGETING_TYPE_VIEWABILITY',
        'TARGETING_TYPE_CATEGORY',
        'TARGETING_TYPE_INVENTORY_SOURCE',
        'TARGETING_TYPE_LANGUAGE',
        'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS',
        'TARGETING_TYPE_GEO_REGION',
        'TARGETING_TYPE_INVENTORY_SOURCE_GROUP',
        'TARGETING_TYPE_EXCHANGE',
        'TARGETING_TYPE_SUB_EXCHANGE',
        'TARGETING_TYPE_POI',
        'TARGETING_TYPE_BUSINESS_CHAIN',
        'TARGETING_TYPE_CONTENT_DURATION',
        'TARGETING_TYPE_CONTENT_STREAM_TYPE',
        'TARGETING_TYPE_NATIVE_CONTENT_POSITION',
        'TARGETING_TYPE_OMID',
        'TARGETING_TYPE_AUDIO_CONTENT_TYPE',
        'TARGETING_TYPE_CONTENT_GENRE',
        'TARGETING_TYPE_YOUTUBE_VIDEO',
        'TARGETING_TYPE_YOUTUBE_CHANNEL',
        'TARGETING_TYPE_SESSION_POSITION',
      ])
      .exactOptional()
      .openapi({ description: 'Required. Identifies the type of this assigned targeting option.' }),
  })
  .openapi({
    description:
      'A request listing which assigned targeting options of a given targeting type should be deleted.',
    required: [],
  })
  .openapi('DeleteAssignedTargetingOptionsRequest')

const BulkEditAdvertiserAssignedTargetingOptionsRequestSchema = z
  .object({
    createRequests: z
      .array(CreateAssignedTargetingOptionsRequestSchema)
      .exactOptional()
      .openapi({
        description:
          'The assigned targeting options to create in batch, specified as a list of `CreateAssignedTargetingOptionsRequest`. Supported targeting types: * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION`',
      }),
    deleteRequests: z
      .array(DeleteAssignedTargetingOptionsRequestSchema)
      .exactOptional()
      .openapi({
        description:
          'The assigned targeting options to delete in batch, specified as a list of `DeleteAssignedTargetingOptionsRequest`. Supported targeting types: * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION`',
      }),
  })
  .openapi({
    description: 'Request message for BulkEditAdvertiserAssignedTargetingOptions.',
    required: [],
  })
  .openapi('BulkEditAdvertiserAssignedTargetingOptionsRequest')

const BulkEditAdvertiserAssignedTargetingOptionsResponseSchema = z
  .object({
    createdAssignedTargetingOptions: z
      .array(AssignedTargetingOptionSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of assigned targeting options that have been successfully created. This list will be absent if empty.',
      }),
  })
  .openapi({ required: [] })
  .openapi('BulkEditAdvertiserAssignedTargetingOptionsResponse')

const BulkEditAssignedInventorySourcesRequestSchema = z
  .object({
    advertiserId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the advertiser that owns the parent inventory source group. The parent partner does not have access to these assigned inventory sources.',
      }),
    createdAssignedInventorySources: z
      .array(AssignedInventorySourceSchema)
      .exactOptional()
      .openapi({
        description:
          'The assigned inventory sources to create in bulk, specified as a list of AssignedInventorySources.',
      }),
    deletedAssignedInventorySources: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The IDs of the assigned inventory sources to delete in bulk, specified as a list of assigned_inventory_source_ids.',
      }),
    partnerId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the partner that owns the inventory source group. Only this partner has write access to these assigned inventory sources.',
      }),
  })
  .openapi({
    description: 'Request message for AssignedInventorySourceService.BulkEdit.',
    required: [],
  })
  .openapi('BulkEditAssignedInventorySourcesRequest')

const BulkEditAssignedInventorySourcesResponseSchema = z
  .object({
    assignedInventorySources: z
      .array(AssignedInventorySourceSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of assigned inventory sources that have been successfully created. This list will be absent if empty.',
      }),
  })
  .openapi({
    description: 'Response message for AssignedInventorySourceService.BulkEdit.',
    required: [],
  })
  .openapi('BulkEditAssignedInventorySourcesResponse')

const BulkEditAssignedLocationsRequestSchema = z
  .object({
    createdAssignedLocations: z
      .array(AssignedLocationSchema)
      .exactOptional()
      .openapi({
        description:
          'The assigned locations to create in bulk, specified as a list of AssignedLocations.',
      }),
    deletedAssignedLocations: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The IDs of the assigned locations to delete in bulk, specified as a list of assigned_location_ids.',
      }),
  })
  .openapi({
    description: 'Request message for AssignedLocationService.BulkEditAssignedLocations.',
    required: [],
  })
  .openapi('BulkEditAssignedLocationsRequest')

const BulkEditAssignedLocationsResponseSchema = z
  .object({
    assignedLocations: z
      .array(AssignedLocationSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of assigned locations that have been successfully created. This list will be absent if empty.',
      }),
  })
  .openapi({
    description: 'Response message for AssignedLocationService.BulkEditAssignedLocations.',
    required: [],
  })
  .openapi('BulkEditAssignedLocationsResponse')

const BulkEditAssignedTargetingOptionsRequestSchema = z
  .object({
    createRequests: z
      .array(CreateAssignedTargetingOptionsRequestSchema)
      .exactOptional()
      .openapi({
        description:
          'The assigned targeting options to create in batch, specified as a list of CreateAssignedTargetingOptionsRequest. Supported targeting types include: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_APP` * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AUDIENCE_GROUP` * `TARGETING_TYPE_AUDIO_CONTENT_TYPE` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_BUSINESS_CHAIN` * `TARGETING_TYPE_CARRIER_AND_ISP` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_CONTENT_DURATION` * `TARGETING_TYPE_CONTENT_GENRE` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_STREAM_TYPE` * `TARGETING_TYPE_DAY_AND_TIME` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DEVICE_TYPE` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_INVENTORY_SOURCE` * `TARGETING_TYPE_INVENTORY_SOURCE_GROUP` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NATIVE_CONTENT_POSITION` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_POI` * `TARGETING_TYPE_PROXIMITY_LOCATION_LIST` * `TARGETING_TYPE_REGIONAL_LOCATION_LIST` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_THIRD_PARTY_VERIFIER` * `TARGETING_TYPE_URL` * `TARGETING_TYPE_USER_REWARDED_CONTENT` * `TARGETING_TYPE_VIDEO_PLAYER_SIZE` * `TARGETING_TYPE_VIEWABILITY`',
      }),
    deleteRequests: z
      .array(DeleteAssignedTargetingOptionsRequestSchema)
      .exactOptional()
      .openapi({
        description:
          'The assigned targeting options to delete in batch, specified as a list of DeleteAssignedTargetingOptionsRequest. Supported targeting types include: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_APP` * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AUDIENCE_GROUP` * `TARGETING_TYPE_AUDIO_CONTENT_TYPE` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_BUSINESS_CHAIN` * `TARGETING_TYPE_CARRIER_AND_ISP` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_CONTENT_DURATION` * `TARGETING_TYPE_CONTENT_GENRE` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_STREAM_TYPE` * `TARGETING_TYPE_DAY_AND_TIME` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DEVICE_TYPE` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_INVENTORY_SOURCE` * `TARGETING_TYPE_INVENTORY_SOURCE_GROUP` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NATIVE_CONTENT_POSITION` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_POI` * `TARGETING_TYPE_PROXIMITY_LOCATION_LIST` * `TARGETING_TYPE_REGIONAL_LOCATION_LIST` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_THIRD_PARTY_VERIFIER` * `TARGETING_TYPE_URL` * `TARGETING_TYPE_USER_REWARDED_CONTENT` * `TARGETING_TYPE_VIDEO_PLAYER_SIZE` * `TARGETING_TYPE_VIEWABILITY`',
      }),
    lineItemIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Required. The ID of the line items whose targeting is being updated.',
      }),
  })
  .openapi({
    description: 'Request message for BulkEditLineItemsAssignedTargetingOptions.',
    required: [],
  })
  .openapi('BulkEditAssignedTargetingOptionsRequest')

const StatusSchema = z
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
  .openapi('Status')

const BulkEditAssignedTargetingOptionsResponseSchema = z
  .object({
    errors: z
      .array(StatusSchema)
      .exactOptional()
      .openapi({ description: 'The error information for each line item that failed to update.' }),
    failedLineItemIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Output only. The IDs of the line items which failed.',
        readOnly: true,
      }),
    updatedLineItemIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Output only. The IDs of the line items which successfully updated.',
        readOnly: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('BulkEditAssignedTargetingOptionsResponse')

const BulkEditAssignedUserRolesRequestSchema = z
  .object({
    createdAssignedUserRoles: z
      .array(AssignedUserRoleSchema)
      .exactOptional()
      .openapi({
        description:
          'The assigned user roles to create in batch, specified as a list of AssignedUserRoles.',
      }),
    deletedAssignedUserRoles: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The assigned user roles to delete in batch, specified as a list of assigned_user_role_ids. The format of assigned_user_role_id is `entityType-entityid`, for example `partner-123`.',
      }),
  })
  .openapi({ description: 'Request message for BulkEditAssignedUserRoles.', required: [] })
  .openapi('BulkEditAssignedUserRolesRequest')

const BulkEditAssignedUserRolesResponseSchema = z
  .object({
    createdAssignedUserRoles: z
      .array(AssignedUserRoleSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of assigned user roles that have been successfully created. This list will be absent if empty.',
      }),
  })
  .openapi({ required: [] })
  .openapi('BulkEditAssignedUserRolesResponse')

const NegativeKeywordSchema = z
  .object({
    keywordValue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Immutable. The negatively targeted keyword, for example `car insurance`. Must be UTF-8 encoded with a maximum size of 255 bytes. Maximum number of characters is 80. Maximum number of words is 10. Valid characters are restricted to ASCII characters only. The only URL-escaping permitted is for representing whitespace between words. Leading or trailing whitespace is ignored.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The resource name of the negative keyword.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'A negatively targeted keyword that belongs to a negative keyword list.',
    required: [],
  })
  .openapi('NegativeKeyword')

const BulkEditNegativeKeywordsRequestSchema = z
  .object({
    createdNegativeKeywords: z
      .array(NegativeKeywordSchema)
      .exactOptional()
      .openapi({
        description:
          'The negative keywords to create in batch, specified as a list of NegativeKeywords.',
      }),
    deletedNegativeKeywords: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The negative keywords to delete in batch, specified as a list of keyword_values.',
      }),
  })
  .openapi({
    description: 'Request message for NegativeKeywordService.BulkEditNegativeKeywords.',
    required: [],
  })
  .openapi('BulkEditNegativeKeywordsRequest')

const BulkEditNegativeKeywordsResponseSchema = z
  .object({
    negativeKeywords: z
      .array(NegativeKeywordSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of negative keywords that have been successfully created. This list will be absent if empty.',
      }),
  })
  .openapi({
    description: 'Response message for NegativeKeywordService.BulkEditNegativeKeywords.',
    required: [],
  })
  .openapi('BulkEditNegativeKeywordsResponse')

const BulkEditPartnerAssignedTargetingOptionsRequestSchema = z
  .object({
    createRequests: z
      .array(CreateAssignedTargetingOptionsRequestSchema)
      .exactOptional()
      .openapi({
        description:
          'The assigned targeting options to create in batch, specified as a list of `CreateAssignedTargetingOptionsRequest`. Supported targeting types: * `TARGETING_TYPE_CHANNEL`',
      }),
    deleteRequests: z
      .array(DeleteAssignedTargetingOptionsRequestSchema)
      .exactOptional()
      .openapi({
        description:
          'The assigned targeting options to delete in batch, specified as a list of `DeleteAssignedTargetingOptionsRequest`. Supported targeting types: * `TARGETING_TYPE_CHANNEL`',
      }),
  })
  .openapi({
    description: 'Request message for BulkEditPartnerAssignedTargetingOptions.',
    required: [],
  })
  .openapi('BulkEditPartnerAssignedTargetingOptionsRequest')

const BulkEditPartnerAssignedTargetingOptionsResponseSchema = z
  .object({
    createdAssignedTargetingOptions: z
      .array(AssignedTargetingOptionSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of assigned targeting options that have been successfully created. This list will be absent if empty.',
      }),
  })
  .openapi({ required: [] })
  .openapi('BulkEditPartnerAssignedTargetingOptionsResponse')

const SiteSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The resource name of the site.', readOnly: true }),
    urlOrAppId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The app ID or URL of the site. Must be UTF-8 encoded with a maximum length of 240 bytes.',
      }),
  })
  .openapi({
    description: 'A single site. Sites are apps or websites belonging to a channel.',
    required: [],
  })
  .openapi('Site')

const BulkEditSitesRequestSchema = z
  .object({
    advertiserId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the advertiser that owns the parent channel.' }),
    createdSites: z
      .array(SiteSchema)
      .exactOptional()
      .openapi({ description: 'The sites to create in batch, specified as a list of Sites.' }),
    deletedSites: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'The sites to delete in batch, specified as a list of site url_or_app_ids.',
      }),
    partnerId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the partner that owns the parent channel.' }),
  })
  .openapi({ description: 'Request message for SiteService.BulkEditSites.', required: [] })
  .openapi('BulkEditSitesRequest')

const BulkEditSitesResponseSchema = z
  .object({
    sites: z
      .array(SiteSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of sites that have been successfully created. This list will be absent if empty.',
      }),
  })
  .openapi({ description: 'Response message for SiteService.BulkEditSites.', required: [] })
  .openapi('BulkEditSitesResponse')

const YoutubeAdGroupAssignedTargetingOptionSchema = z
  .object({
    assignedTargetingOption: AssignedTargetingOptionSchema.exactOptional().openapi({
      description: 'The assigned targeting option resource.',
    }),
    youtubeAdGroupId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the youtube ad group the assigned targeting option is assigned to.',
      }),
  })
  .openapi({
    description:
      'Wrapper object associating an assigned_targeting_option resource and the youtube ad group it is assigned to.',
    required: [],
  })
  .openapi('YoutubeAdGroupAssignedTargetingOption')

const BulkListAdGroupAssignedTargetingOptionsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token identifying the next page of results. This value should be specified as the pageToken in a subsequent call to `BulkListAdGroupAssignedTargetingOptions` to fetch the next page of results. This token will be absent if there are no more youtube_ad_group_assigned_targeting_options to return.',
      }),
    youtubeAdGroupAssignedTargetingOptions: z
      .array(YoutubeAdGroupAssignedTargetingOptionSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of wrapper objects, each providing an assigned targeting option and the youtube ad group it is assigned to. This list will be absent if empty.',
      }),
  })
  .openapi({ required: [] })
  .openapi('BulkListAdGroupAssignedTargetingOptionsResponse')

const BulkListAdvertiserAssignedTargetingOptionsResponseSchema = z
  .object({
    assignedTargetingOptions: z
      .array(AssignedTargetingOptionSchema)
      .exactOptional()
      .openapi({
        description: 'The list of assigned targeting options. This list will be absent if empty.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token identifying the next page of results. This value should be specified as the pageToken in a subsequent BulkListAdvertiserAssignedTargetingOptionsRequest to fetch the next page of results. This token will be absent if there are no more assigned_targeting_options to return.',
      }),
  })
  .openapi({ required: [] })
  .openapi('BulkListAdvertiserAssignedTargetingOptionsResponse')

const LineItemAssignedTargetingOptionSchema = z
  .object({
    assignedTargetingOption: AssignedTargetingOptionSchema.exactOptional().openapi({
      description: 'The assigned targeting option resource.',
    }),
    lineItemId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the line item the assigned targeting option is assigned to.',
      }),
  })
  .openapi({
    description:
      'Wrapper object associating an assigned_targeting_option resource and the line item it is assigned to.',
    required: [],
  })
  .openapi('LineItemAssignedTargetingOption')

const BulkListAssignedTargetingOptionsResponseSchema = z
  .object({
    lineItemAssignedTargetingOptions: z
      .array(LineItemAssignedTargetingOptionSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of wrapper objects, each providing an assigned targeting option and the line item it is assigned to. This list will be absent if empty.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token identifying the next page of results. This value should be specified as the pageToken in a subsequent call to `BulkListAssignedTargetingOptions` to fetch the next page of results. This token will be absent if there are no more line_item_assigned_targeting_options to return.',
      }),
  })
  .openapi({ required: [] })
  .openapi('BulkListAssignedTargetingOptionsResponse')

const BulkListCampaignAssignedTargetingOptionsResponseSchema = z
  .object({
    assignedTargetingOptions: z
      .array(AssignedTargetingOptionSchema)
      .exactOptional()
      .openapi({
        description: 'The list of assigned targeting options. This list will be absent if empty.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token identifying the next page of results. This value should be specified as the pageToken in a subsequent BulkListCampaignAssignedTargetingOptionsRequest to fetch the next page of results. This token will be absent if there are no more assigned_targeting_options to return.',
      }),
  })
  .openapi({
    description: 'Response message for BulkListCampaignAssignedTargetingOptions.',
    required: [],
  })
  .openapi('BulkListCampaignAssignedTargetingOptionsResponse')

const BulkListInsertionOrderAssignedTargetingOptionsResponseSchema = z
  .object({
    assignedTargetingOptions: z
      .array(AssignedTargetingOptionSchema)
      .exactOptional()
      .openapi({
        description: 'The list of assigned targeting options. This list will be absent if empty.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token identifying the next page of results. This value should be specified as the pageToken in a subsequent BulkListInsertionOrderAssignedTargetingOptionsRequest to fetch the next page of results. This token will be absent if there are no more assigned_targeting_options to return.',
      }),
  })
  .openapi({
    description: 'Response message for BulkListInsertionOrderAssignedTargetingOptions.',
    required: [],
  })
  .openapi('BulkListInsertionOrderAssignedTargetingOptionsResponse')

const LineItemBudgetSchema = z
  .object({
    budgetAllocationType: z
      .enum([
        'LINE_ITEM_BUDGET_ALLOCATION_TYPE_UNSPECIFIED',
        'LINE_ITEM_BUDGET_ALLOCATION_TYPE_AUTOMATIC',
        'LINE_ITEM_BUDGET_ALLOCATION_TYPE_FIXED',
        'LINE_ITEM_BUDGET_ALLOCATION_TYPE_UNLIMITED',
      ])
      .exactOptional()
      .openapi({
        description:
          'Required. The type of the budget allocation. `LINE_ITEM_BUDGET_ALLOCATION_TYPE_AUTOMATIC` is only applicable when automatic budget allocation is enabled for the parent insertion order.',
      }),
    budgetUnit: z
      .enum(['BUDGET_UNIT_UNSPECIFIED', 'BUDGET_UNIT_CURRENCY', 'BUDGET_UNIT_IMPRESSIONS'])
      .exactOptional()
      .openapi({
        description:
          'Output only. The budget unit specifies whether the budget is currency based or impression based. This value is inherited from the parent insertion order.',
        readOnly: true,
      }),
    maxAmount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The maximum budget amount the line item will spend. Must be greater than 0. When budget_allocation_type is: * `LINE_ITEM_BUDGET_ALLOCATION_TYPE_AUTOMATIC`, this field is immutable and is set by the system. * `LINE_ITEM_BUDGET_ALLOCATION_TYPE_FIXED`, if budget_unit is: - `BUDGET_UNIT_CURRENCY`, this field represents maximum budget amount to spend, in micros of the advertiser's currency. For example, 1500000 represents 1.5 standard units of the currency. - `BUDGET_UNIT_IMPRESSIONS`, this field represents the maximum number of impressions to serve. * `LINE_ITEM_BUDGET_ALLOCATION_TYPE_UNLIMITED`, this field is not applicable and will be ignored by the system.",
      }),
  })
  .openapi({ description: 'Settings that control how budget is allocated.', required: [] })
  .openapi('LineItemBudget')

const TrackingFloodlightActivityConfigSchema = z
  .object({
    floodlightActivityId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The ID of the Floodlight activity.' }),
    postClickLookbackWindowDays: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Required. The number of days after an ad has been clicked in which a conversion may be counted. Must be between 0 and 90 inclusive.',
      }),
    postViewLookbackWindowDays: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Required. The number of days after an ad has been viewed in which a conversion may be counted. Must be between 0 and 90 inclusive.',
      }),
  })
  .openapi({
    description: 'Settings that control the behavior of a single Floodlight activity config.',
    required: [],
  })
  .openapi('TrackingFloodlightActivityConfig')

const ConversionCountingConfigSchema = z
  .object({
    floodlightActivityConfigs: z
      .array(TrackingFloodlightActivityConfigSchema)
      .exactOptional()
      .openapi({
        description:
          'The Floodlight activity configs used to track conversions. The number of conversions counted is the sum of all of the conversions counted by all of the Floodlight activity IDs specified in this field.',
      }),
    postViewCountPercentageMillis: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The percentage of post-view conversions to count, in millis (1/1000 of a percent). Must be between 0 and 100000 inclusive. For example, to track 50% of the post-click conversions, set a value of 50000.',
      }),
  })
  .openapi({
    description:
      'Settings that control how conversions are counted. All post-click conversions will be counted. A percentage value can be set for post-view conversions counting.',
    required: [],
  })
  .openapi('ConversionCountingConfig')

const DateSchema = z
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
  .openapi('Date')

const DateRangeSchema = z
  .object({
    endDate: DateSchema.exactOptional().openapi({
      description:
        'The upper bound of the date range, inclusive. Must specify a positive value for `year`, `month`, and `day`.',
    }),
    startDate: DateSchema.exactOptional().openapi({
      description:
        'The lower bound of the date range, inclusive. Must specify a positive value for `year`, `month`, and `day`.',
    }),
  })
  .openapi({ description: 'A date range.', required: [] })
  .openapi('DateRange')

const LineItemFlightSchema = z
  .object({
    dateRange: DateRangeSchema.exactOptional().openapi({
      description:
        "The flight start and end dates of the line item. They are resolved relative to the parent advertiser's time zone. * Required when flight_date_type is `LINE_ITEM_FLIGHT_DATE_TYPE_CUSTOM`. Output only otherwise. * When creating a new flight, both `start_date` and `end_date` must be in the future. * An existing flight with a `start_date` in the past has a mutable `end_date` but an immutable `start_date`. * `end_date` must be the `start_date` or later, both before the year 2037.",
    }),
    flightDateType: z
      .enum([
        'LINE_ITEM_FLIGHT_DATE_TYPE_UNSPECIFIED',
        'LINE_ITEM_FLIGHT_DATE_TYPE_INHERITED',
        'LINE_ITEM_FLIGHT_DATE_TYPE_CUSTOM',
      ])
      .exactOptional()
      .openapi({ description: "Required. The type of the line item's flight dates." }),
  })
  .openapi({
    description: 'Settings that control the active duration of a line item.',
    required: [],
  })
  .openapi('LineItemFlight')

const FrequencyCapSchema = z
  .object({
    maxImpressions: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The maximum number of times a user may be shown the same ad during this period. Must be greater than 0. Required when unlimited is `false` and max_views is not set.',
      }),
    maxViews: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The maximum number of times a user may click-through or fully view an ad during this period until it is no longer served to them. Must be greater than 0. Only applicable to YouTube and Partners resources. Required when unlimited is `false` and max_impressions is not set.',
      }),
    timeUnit: z
      .enum([
        'TIME_UNIT_UNSPECIFIED',
        'TIME_UNIT_LIFETIME',
        'TIME_UNIT_MONTHS',
        'TIME_UNIT_WEEKS',
        'TIME_UNIT_DAYS',
        'TIME_UNIT_HOURS',
        'TIME_UNIT_MINUTES',
      ])
      .exactOptional()
      .openapi({
        description:
          'The time unit in which the frequency cap will be applied. Required when unlimited is `false`.',
      }),
    timeUnitCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of time_unit the frequency cap will last. Required when unlimited is `false`. The following restrictions apply based on the value of time_unit: * `TIME_UNIT_LIFETIME` - this field is output only and will default to 1 * `TIME_UNIT_MONTHS` - must be between 1 and 2 * `TIME_UNIT_WEEKS` - must be between 1 and 4 * `TIME_UNIT_DAYS` - must be between 1 and 6 * `TIME_UNIT_HOURS` - must be between 1 and 23 * `TIME_UNIT_MINUTES` - must be between 1 and 59',
      }),
    unlimited: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether unlimited frequency capping is applied. When this field is set to `true`, the remaining frequency cap fields are not applicable.',
      }),
  })
  .openapi({
    description:
      'Settings that control the number of times a user may be shown with the same ad during a given time period.',
    required: [],
  })
  .openapi('FrequencyCap')

const MobileAppSchema = z
  .object({
    appId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. The ID of the app provided by the platform store. Android apps are identified by the bundle ID used by Android's Play store, such as `com.google.android.gm`. iOS apps are identified by a nine-digit app ID used by Apple's App store, such as `422689480`.",
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The app name.', readOnly: true }),
    platform: z
      .enum(['PLATFORM_UNSPECIFIED', 'IOS', 'ANDROID'])
      .exactOptional()
      .openapi({ description: 'Output only. The app platform.', readOnly: true }),
    publisher: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The app publisher.', readOnly: true }),
  })
  .openapi({
    description: 'A mobile app promoted by a mobile app install line item.',
    required: [],
  })
  .openapi('MobileApp')

const PacingSchema = z
  .object({
    dailyMaxImpressions: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Maximum number of impressions to serve every day. Applicable when the budget is impression based. Must be greater than 0.',
      }),
    dailyMaxMicros: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Maximum currency amount to spend every day in micros of advertiser's currency. Applicable when the budget is currency based. Must be greater than 0. For example, for 1.5 standard unit of the currency, set this field to 1500000. The value assigned will be rounded to whole billable units for the relevant currency by the following rules: any positive value less than a single billable unit will be rounded up to one billable unit and any value larger than a single billable unit will be rounded down to the nearest billable value. For example, if the currency's billable unit is 0.01, and this field is set to 10257770, it will round down to 10250000, a value of 10.25. If set to 505, it will round up to 10000, a value of 0.01.",
      }),
    pacingPeriod: z
      .enum(['PACING_PERIOD_UNSPECIFIED', 'PACING_PERIOD_DAILY', 'PACING_PERIOD_FLIGHT'])
      .exactOptional()
      .openapi({
        description:
          'Required. The time period in which the pacing budget will be spent. When automatic budget allocation is enabled at the insertion order via auto_budget_allocation, this field is output only and defaults to `PACING_PERIOD_FLIGHT`.',
      }),
    pacingType: z
      .enum([
        'PACING_TYPE_UNSPECIFIED',
        'PACING_TYPE_AHEAD',
        'PACING_TYPE_ASAP',
        'PACING_TYPE_EVEN',
      ])
      .exactOptional()
      .openapi({
        description:
          'Required. The type of pacing that defines how the budget amount will be spent across the pacing_period.',
      }),
  })
  .openapi({
    description: 'Settings that control the rate at which a budget is spent.',
    required: [],
  })
  .openapi('Pacing')

const PartnerCostSchema = z
  .object({
    costType: z
      .enum([
        'PARTNER_COST_TYPE_UNSPECIFIED',
        'PARTNER_COST_TYPE_ADLOOX',
        'PARTNER_COST_TYPE_ADLOOX_PREBID',
        'PARTNER_COST_TYPE_ADSAFE',
        'PARTNER_COST_TYPE_ADXPOSE',
        'PARTNER_COST_TYPE_AGGREGATE_KNOWLEDGE',
        'PARTNER_COST_TYPE_AGENCY_TRADING_DESK',
        'PARTNER_COST_TYPE_DV360_FEE',
        'PARTNER_COST_TYPE_COMSCORE_VCE',
        'PARTNER_COST_TYPE_DATA_MANAGEMENT_PLATFORM',
        'PARTNER_COST_TYPE_DEFAULT',
        'PARTNER_COST_TYPE_DOUBLE_VERIFY',
        'PARTNER_COST_TYPE_DOUBLE_VERIFY_PREBID',
        'PARTNER_COST_TYPE_EVIDON',
        'PARTNER_COST_TYPE_INTEGRAL_AD_SCIENCE_VIDEO',
        'PARTNER_COST_TYPE_INTEGRAL_AD_SCIENCE_PREBID',
        'PARTNER_COST_TYPE_MEDIA_COST_DATA',
        'PARTNER_COST_TYPE_MOAT_VIDEO',
        'PARTNER_COST_TYPE_NIELSEN_DAR',
        'PARTNER_COST_TYPE_SHOP_LOCAL',
        'PARTNER_COST_TYPE_TERACENT',
        'PARTNER_COST_TYPE_THIRD_PARTY_AD_SERVER',
        'PARTNER_COST_TYPE_TRUST_METRICS',
        'PARTNER_COST_TYPE_VIZU',
        'PARTNER_COST_TYPE_ADLINGO_FEE',
        'PARTNER_COST_TYPE_CUSTOM_FEE_1',
        'PARTNER_COST_TYPE_CUSTOM_FEE_2',
        'PARTNER_COST_TYPE_CUSTOM_FEE_3',
        'PARTNER_COST_TYPE_CUSTOM_FEE_4',
        'PARTNER_COST_TYPE_CUSTOM_FEE_5',
      ])
      .exactOptional()
      .openapi({ description: 'Required. The type of the partner cost.' }),
    feeAmount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The CPM fee amount in micros of advertiser's currency. Applicable when the fee_type is `PARTNER_FEE_TYPE_CPM_FEE`. Must be greater than or equal to 0. For example, for 1.5 standard unit of the advertiser's currency, set this field to 1500000.",
      }),
    feePercentageMillis: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The media fee percentage in millis (1/1000 of a percent). Applicable when the fee_type is `PARTNER_FEE_TYPE_MEDIA_FEE`. Must be greater than or equal to 0. For example: 100 represents 0.1%.',
      }),
    feeType: z
      .enum([
        'PARTNER_COST_FEE_TYPE_UNSPECIFIED',
        'PARTNER_COST_FEE_TYPE_CPM_FEE',
        'PARTNER_COST_FEE_TYPE_MEDIA_FEE',
      ])
      .exactOptional()
      .openapi({ description: 'Required. The fee type for this partner cost.' }),
    invoiceType: z
      .enum([
        'PARTNER_COST_INVOICE_TYPE_UNSPECIFIED',
        'PARTNER_COST_INVOICE_TYPE_DV360',
        'PARTNER_COST_INVOICE_TYPE_PARTNER',
      ])
      .exactOptional()
      .openapi({
        description:
          'The invoice type for this partner cost. * Required when cost_type is one of: - `PARTNER_COST_TYPE_ADLOOX` - `PARTNER_COST_TYPE_DOUBLE_VERIFY` - `PARTNER_COST_TYPE_INTEGRAL_AD_SCIENCE`. * Output only for other types.',
      }),
  })
  .openapi({
    description:
      'Settings that control a partner cost. A partner cost is any type of expense involved in running a campaign, other than the costs of purchasing impressions (which is called the media cost) and using third-party audience segment data (data fee). Some examples of partner costs include the fees for using DV360, a third-party ad server, or a third-party ad serving verification service.',
    required: [],
  })
  .openapi('PartnerCost')

const PartnerRevenueModelSchema = z
  .object({
    markupAmount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. The markup amount of the partner revenue model. Must be greater than or equal to 0. * When the markup_type is set to be `PARTNER_REVENUE_MODEL_MARKUP_TYPE_CPM`, this field represents the CPM markup in micros of advertiser's currency. For example, 1500000 represents 1.5 standard units of the currency. * When the markup_type is set to be `PARTNER_REVENUE_MODEL_MARKUP_TYPE_MEDIA_COST_MARKUP`, this field represents the media cost percent markup in millis. For example, 100 represents 0.1% (decimal 0.001). * When the markup_type is set to be `PARTNER_REVENUE_MODEL_MARKUP_TYPE_TOTAL_MEDIA_COST_MARKUP`, this field represents the total media cost percent markup in millis. For example, 100 represents 0.1% (decimal 0.001).",
      }),
    markupType: z
      .enum([
        'PARTNER_REVENUE_MODEL_MARKUP_TYPE_UNSPECIFIED',
        'PARTNER_REVENUE_MODEL_MARKUP_TYPE_CPM',
        'PARTNER_REVENUE_MODEL_MARKUP_TYPE_MEDIA_COST_MARKUP',
        'PARTNER_REVENUE_MODEL_MARKUP_TYPE_TOTAL_MEDIA_COST_MARKUP',
      ])
      .exactOptional()
      .openapi({ description: 'Required. The markup type of the partner revenue model.' }),
  })
  .openapi({
    description: 'Settings that control how partner revenue is calculated.',
    required: [],
  })
  .openapi('PartnerRevenueModel')

const TargetingExpansionConfigSchema = z
  .object({
    excludeFirstPartyAudience: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Required. Whether to exclude first-party audiences from use in targeting expansion or optimized targeting. Similar audiences of the excluded first-party lists will not be excluded. Only applicable when a first-party audience is positively targeted (directly or included in a combined audience), otherwise this selection will be ignored. Beginning **March 25, 2023**, this field may be deprecated with the replacement of targeting expansion with [optimized targeting](//support.google.com/displayvideo/answer/12060859). Upon deprecation, this field will be set to `false`. If this field is set to `true` when deprecated, all positive first-party audience targeting assigned to this line item will be replaced with negative targeting of the same first-party audiences to ensure the continued exclusion of those audiences. This field will be deprecated for all partners by early May 2023.',
      }),
    targetingExpansionLevel: z
      .enum([
        'TARGETING_EXPANSION_LEVEL_UNSPECIFIED',
        'NO_EXPANSION',
        'LEAST_EXPANSION',
        'SOME_EXPANSION',
        'BALANCED_EXPANSION',
        'MORE_EXPANSION',
        'MOST_EXPANSION',
      ])
      .exactOptional()
      .openapi({
        description:
          'Required. Magnitude of expansion for applicable targeting under this line item. Beginning **March 25, 2023**, the behavior of this field may change in the following ways with the replacement of targeting expansion with [optimized targeting](//support.google.com/displayvideo/answer/12060859): * This field will represent the optimized targeting checkbox, with a `NO_EXPANSION` value representing optimized targeting turned off and a `LEAST_EXPANSION` value representing optimized targeting turned on. * `NO_EXPANSION` will be the default value for the field and will be automatically assigned if you do not set the field. * If you set the field to any value other than `NO_EXPANSION`, it will automatically be set to `LEAST_EXPANSION`. This behavior will be rolled out to all partners by early May 2023.',
      }),
  })
  .openapi({
    description:
      'Settings that control the targeting expansion of the line item. Targeting expansion allows the line item to reach a larger audience based on the original audience list and the targeting expansion level. Beginning **March 25, 2023**, these settings may represent the [optimized targeting feature](//support.google.com/displayvideo/answer/12060859) in place of targeting expansion. This feature will be rolled out to all partners by early May 2023.',
    required: [],
  })
  .openapi('TargetingExpansionConfig')

const YoutubeAndPartnersBiddingStrategySchema = z
  .object({
    adGroupEffectiveTargetCpaSource: z
      .enum(['BIDDING_SOURCE_UNSPECIFIED', 'BIDDING_SOURCE_LINE_ITEM', 'BIDDING_SOURCE_AD_GROUP'])
      .exactOptional()
      .openapi({
        description: 'Output only. Source of the effective targetCpa value for AdGroup.',
        readOnly: true,
      }),
    adGroupEffectiveTargetCpaValue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. The effective targetCpa for AdGroup, in micros of advertiser's currency.",
        readOnly: true,
      }),
    type: z
      .enum([
        'YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_UNSPECIFIED',
        'YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MANUAL_CPV',
        'YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MANUAL_CPM',
        'YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPA',
        'YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPM',
        'YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MAXIMIZE_LIFT',
        'YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MAXIMIZE_CONVERSIONS',
      ])
      .exactOptional()
      .openapi({ description: 'The type of the bidding strategy.' }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The value used by the bidding strategy. When the bidding strategy is assigned at the line item level, this field is only applicable for the following strategy types: * `YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPA` When the bidding strategy is assigned at the ad group level, this field is only applicable for the following strategy types: * `YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MANUAL_CPM` * `YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MANUAL_CPV` * `YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPA` * `YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPM` If not using an applicable strategy, the value of this field will be 0.',
      }),
  })
  .openapi({
    description: 'Settings that control the bid strategy for YouTube and Partners resources.',
    required: [],
  })
  .openapi('YoutubeAndPartnersBiddingStrategy')

const YoutubeAndPartnersInventorySourceConfigSchema = z
  .object({
    includeYoutubeSearch: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether to target inventory on the YouTube search results page.' }),
    includeYoutubeVideoPartners: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether to target inventory on a collection of partner sites and apps that follow the same brand safety standards as YouTube.',
      }),
    includeYoutubeVideos: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether to target inventory of channels and videos on YouTube and YouTube videos embedded on other sites.',
      }),
  })
  .openapi({
    description:
      'Settings that control what YouTube related inventories the YouTube and Partners line item will target.',
    required: [],
  })
  .openapi('YoutubeAndPartnersInventorySourceConfig')

const TargetFrequencySchema = z
  .object({
    targetCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The target number of times, on average, the ads will be shown to the same person in the timespan dictated by time_unit and time_unit_count.',
      }),
    timeUnit: z
      .enum([
        'TIME_UNIT_UNSPECIFIED',
        'TIME_UNIT_LIFETIME',
        'TIME_UNIT_MONTHS',
        'TIME_UNIT_WEEKS',
        'TIME_UNIT_DAYS',
        'TIME_UNIT_HOURS',
        'TIME_UNIT_MINUTES',
      ])
      .exactOptional()
      .openapi({
        description:
          'The unit of time in which the target frequency will be applied. The following time unit is applicable: * `TIME_UNIT_WEEKS`',
      }),
    timeUnitCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of time_unit the target frequency will last. The following restrictions apply based on the value of time_unit: * `TIME_UNIT_WEEKS` - must be 1',
      }),
  })
  .openapi({
    description:
      'Setting that controls the average number of times the ads will show to the same person over a certain period of time.',
    required: [],
  })
  .openapi('TargetFrequency')

const ThirdPartyVendorConfigSchema = z
  .object({
    placementId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID used by the platform of the third-party vendor to identify the line item.',
      }),
    vendor: z
      .enum([
        'THIRD_PARTY_VENDOR_UNSPECIFIED',
        'THIRD_PARTY_VENDOR_MOAT',
        'THIRD_PARTY_VENDOR_DOUBLE_VERIFY',
        'THIRD_PARTY_VENDOR_INTEGRAL_AD_SCIENCE',
        'THIRD_PARTY_VENDOR_COMSCORE',
        'THIRD_PARTY_VENDOR_TELEMETRY',
        'THIRD_PARTY_VENDOR_MEETRICS',
        'THIRD_PARTY_VENDOR_ZEFR',
        'THIRD_PARTY_VENDOR_NIELSEN',
        'THIRD_PARTY_VENDOR_KANTAR',
        'THIRD_PARTY_VENDOR_DYNATA',
      ])
      .exactOptional()
      .openapi({ description: 'The third-party measurement vendor.' }),
  })
  .openapi({
    description: 'Settings that control how third-party measurement vendors are configured.',
    required: [],
  })
  .openapi('ThirdPartyVendorConfig')

const YoutubeAndPartnersThirdPartyMeasurementSettingsSchema = z
  .object({
    brandLiftVendorConfigs: z
      .array(ThirdPartyVendorConfigSchema)
      .exactOptional()
      .openapi({
        description:
          'The third-party vendors measuring brand lift. The following third-party vendors are applicable: * `THIRD_PARTY_VENDOR_DYNATA` * `THIRD_PARTY_VENDOR_KANTAR`',
      }),
    brandSafetyVendorConfigs: z
      .array(ThirdPartyVendorConfigSchema)
      .exactOptional()
      .openapi({
        description:
          'The third-party vendors measuring brand safety. The following third-party vendors are applicable: * `THIRD_PARTY_VENDOR_ZERF` * `THIRD_PARTY_VENDOR_DOUBLE_VERIFY` * `THIRD_PARTY_VENDOR_INTEGRAL_AD_SCIENCE`',
      }),
    reachVendorConfigs: z
      .array(ThirdPartyVendorConfigSchema)
      .exactOptional()
      .openapi({
        description:
          'The third-party vendors measuring reach. The following third-party vendors are applicable: * `THIRD_PARTY_VENDOR_NIELSEN` * `THIRD_PARTY_VENDOR_COMSCORE` * `THIRD_PARTY_VENDOR_KANTAR`',
      }),
    viewabilityVendorConfigs: z
      .array(ThirdPartyVendorConfigSchema)
      .exactOptional()
      .openapi({
        description:
          'The third-party vendors measuring viewability. The following third-party vendors are applicable: * `THIRD_PARTY_VENDOR_MOAT` * `THIRD_PARTY_VENDOR_DOUBLE_VERIFY` * `THIRD_PARTY_VENDOR_INTEGRAL_AD_SCIENCE` * `THIRD_PARTY_VENDOR_COMSCORE` * `THIRD_PARTY_VENDOR_TELEMETRY` * `THIRD_PARTY_VENDOR_MEETRICS`',
      }),
  })
  .openapi({
    description:
      'Settings that control what third-party vendors are measuring specific line item metrics.',
    required: [],
  })
  .openapi('YoutubeAndPartnersThirdPartyMeasurementSettings')

const VideoAdSequenceStepSchema = z
  .object({
    adGroupId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the corresponding ad group of the step.' }),
    interactionType: z
      .enum([
        'INTERACTION_TYPE_UNSPECIFIED',
        'INTERACTION_TYPE_PAID_VIEW',
        'INTERACTION_TYPE_SKIP',
        'INTERACTION_TYPE_IMPRESSION',
        'INTERACTION_TYPE_ENGAGED_IMPRESSION',
      ])
      .exactOptional()
      .openapi({
        description:
          'The interaction on the previous step that will lead the viewer to this step. The first step does not have interaction_type.',
      }),
    previousStepId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the previous step. The first step does not have previous step.',
      }),
    stepId: z.string().exactOptional().openapi({ description: 'The ID of the step.' }),
  })
  .openapi({ description: 'The detail of a single step in a VideoAdSequence.', required: [] })
  .openapi('VideoAdSequenceStep')

const VideoAdSequenceSettingsSchema = z
  .object({
    minimumDuration: z
      .enum([
        'VIDEO_AD_SEQUENCE_MINIMUM_DURATION_UNSPECIFIED',
        'VIDEO_AD_SEQUENCE_MINIMUM_DURATION_WEEK',
        'VIDEO_AD_SEQUENCE_MINIMUM_DURATION_MONTH',
      ])
      .exactOptional()
      .openapi({
        description: 'The minimum time interval before the same user sees this sequence again.',
      }),
    steps: z
      .array(VideoAdSequenceStepSchema)
      .exactOptional()
      .openapi({ description: 'The steps of which the sequence consists.' }),
  })
  .openapi({ description: 'Settings related to VideoAdSequence.', required: [] })
  .openapi('VideoAdSequenceSettings')

const YoutubeAndPartnersSettingsSchema = z
  .object({
    biddingStrategy: YoutubeAndPartnersBiddingStrategySchema.exactOptional().openapi({
      description: 'The bidding strategy of the YouTube and Partners line item.',
    }),
    contentCategory: z
      .enum([
        'YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_UNSPECIFIED',
        'YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_STANDARD',
        'YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_EXPANDED',
        'YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_LIMITED',
      ])
      .exactOptional()
      .openapi({
        description: 'The kind of content on which the YouTube and Partners ads will be shown.',
      }),
    inventorySourceSettings: YoutubeAndPartnersInventorySourceConfigSchema.exactOptional().openapi({
      description:
        'Settings that control what YouTube and Partners inventories the line item will target.',
    }),
    leadFormId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the form to generate leads.' }),
    linkedMerchantId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the merchant which is linked to the line item for product feed.',
      }),
    relatedVideoIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The IDs of the videos appear below the primary video ad when the ad is playing in the YouTube app on mobile devices.',
      }),
    targetFrequency: TargetFrequencySchema.exactOptional().openapi({
      description:
        'The average number of times you want ads from this line item to show to the same person over a certain period of time.',
    }),
    thirdPartyMeasurementSettings:
      YoutubeAndPartnersThirdPartyMeasurementSettingsSchema.exactOptional().openapi({
        description: 'The third-party measurement settings of the line item.',
      }),
    videoAdSequenceSettings: VideoAdSequenceSettingsSchema.exactOptional().openapi({
      description: 'The settings related to VideoAdSequence.',
    }),
    viewFrequencyCap: FrequencyCapSchema.exactOptional().openapi({
      description:
        'The view frequency cap settings of the line item. The max_views field in this settings object must be used if assigning a limited cap.',
    }),
  })
  .openapi({ description: 'Settings for YouTube and Partners line items.', required: [] })
  .openapi('YoutubeAndPartnersSettings')

const LineItemSchema = z
  .object({
    advertiserId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The unique ID of the advertiser the line item belongs to.',
        readOnly: true,
      }),
    bidStrategy: BiddingStrategySchema.exactOptional().openapi({
      description: 'Required. The bidding strategy of the line item.',
    }),
    budget: LineItemBudgetSchema.exactOptional().openapi({
      description: 'Required. The budget allocation setting of the line item.',
    }),
    campaignId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The unique ID of the campaign that the line item belongs to.',
        readOnly: true,
      }),
    conversionCounting: ConversionCountingConfigSchema.exactOptional().openapi({
      description: 'The conversion tracking setting of the line item.',
    }),
    creativeIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The IDs of the creatives associated with the line item.' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The display name of the line item. Must be UTF-8 encoded with a maximum size of 240 bytes.',
      }),
    entityStatus: z
      .enum([
        'ENTITY_STATUS_UNSPECIFIED',
        'ENTITY_STATUS_ACTIVE',
        'ENTITY_STATUS_ARCHIVED',
        'ENTITY_STATUS_DRAFT',
        'ENTITY_STATUS_PAUSED',
        'ENTITY_STATUS_SCHEDULED_FOR_DELETION',
      ])
      .exactOptional()
      .openapi({
        description:
          "Required. Controls whether or not the line item can spend its budget and bid on inventory. * For CreateLineItem method, only `ENTITY_STATUS_DRAFT` is allowed. To activate a line item, use UpdateLineItem method and update the status to `ENTITY_STATUS_ACTIVE` after creation. * A line item cannot be changed back to `ENTITY_STATUS_DRAFT` status from any other status. * If the line item's parent insertion order is not active, the line item can't spend its budget even if its own status is `ENTITY_STATUS_ACTIVE`.",
      }),
    excludeNewExchanges: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether to exclude new exchanges from automatically being targeted by the line item. This field is false by default.',
      }),
    flight: LineItemFlightSchema.exactOptional().openapi({
      description: "Required. The start and end time of the line item's flight.",
    }),
    frequencyCap: FrequencyCapSchema.exactOptional().openapi({
      description:
        'Required. The impression frequency cap settings of the line item. The max_impressions field in this settings object must be used if assigning a limited cap.',
    }),
    insertionOrderId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Immutable. The unique ID of the insertion order that the line item belongs to.',
      }),
    integrationDetails: IntegrationDetailsSchema.exactOptional().openapi({
      description: 'Integration details of the line item.',
    }),
    lineItemId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The unique ID of the line item. Assigned by the system.',
        readOnly: true,
      }),
    lineItemType: z
      .enum([
        'LINE_ITEM_TYPE_UNSPECIFIED',
        'LINE_ITEM_TYPE_DISPLAY_DEFAULT',
        'LINE_ITEM_TYPE_DISPLAY_MOBILE_APP_INSTALL',
        'LINE_ITEM_TYPE_VIDEO_DEFAULT',
        'LINE_ITEM_TYPE_VIDEO_MOBILE_APP_INSTALL',
        'LINE_ITEM_TYPE_DISPLAY_MOBILE_APP_INVENTORY',
        'LINE_ITEM_TYPE_VIDEO_MOBILE_APP_INVENTORY',
        'LINE_ITEM_TYPE_AUDIO_DEFAULT',
        'LINE_ITEM_TYPE_VIDEO_OVER_THE_TOP',
        'LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_ACTION',
        'LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_NON_SKIPPABLE',
        'LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_VIDEO_SEQUENCE',
        'LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_AUDIO',
        'LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_REACH',
        'LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_SIMPLE',
        'LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_NON_SKIPPABLE_OVER_THE_TOP',
        'LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_REACH_OVER_THE_TOP',
        'LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_SIMPLE_OVER_THE_TOP',
        'LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_TARGET_FREQUENCY',
      ])
      .exactOptional()
      .openapi({ description: 'Required. Immutable. The type of the line item.' }),
    mobileApp: MobileAppSchema.exactOptional().openapi({
      description:
        'The mobile app promoted by the line item. This is applicable only when line_item_type is either `LINE_ITEM_TYPE_DISPLAY_MOBILE_APP_INSTALL` or `LINE_ITEM_TYPE_VIDEO_MOBILE_APP_INSTALL`.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The resource name of the line item.', readOnly: true }),
    pacing: PacingSchema.exactOptional().openapi({
      description: 'Required. The budget spending speed setting of the line item.',
    }),
    partnerCosts: z
      .array(PartnerCostSchema)
      .exactOptional()
      .openapi({
        description:
          'The partner costs associated with the line item. If absent or empty in CreateLineItem method, the newly created line item will inherit partner costs from its parent insertion order.',
      }),
    partnerRevenueModel: PartnerRevenueModelSchema.exactOptional().openapi({
      description: 'Required. The partner revenue model setting of the line item.',
    }),
    reservationType: z
      .enum([
        'RESERVATION_TYPE_UNSPECIFIED',
        'RESERVATION_TYPE_NOT_GUARANTEED',
        'RESERVATION_TYPE_PROGRAMMATIC_GUARANTEED',
        'RESERVATION_TYPE_TAG_GUARANTEED',
        'RESERVATION_TYPE_PETRA_VIRAL',
        'RESERVATION_TYPE_INSTANT_RESERVE',
      ])
      .exactOptional()
      .openapi({
        description: 'Output only. The reservation type of the line item.',
        readOnly: true,
      }),
    targetingExpansion: TargetingExpansionConfigSchema.exactOptional().openapi({
      description:
        'The [targeting expansion](//support.google.com/displayvideo/answer/10191558) settings of the line item. This config is only applicable when eligible audience list targeting is assigned to the line item. Beginning **March 25, 2023**, these settings may represent the [optimized targeting feature](//support.google.com/displayvideo/answer/12060859) in place of targeting expansion. This feature will be rolled out to all partners by early May 2023.',
    }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The timestamp when the line item was last updated. Assigned by the system.',
        readOnly: true,
      }),
    warningMessages: z
      .array(
        z.enum([
          'LINE_ITEM_WARNING_MESSAGE_UNSPECIFIED',
          'INVALID_FLIGHT_DATES',
          'EXPIRED',
          'PENDING_FLIGHT',
          'ALL_PARTNER_ENABLED_EXCHANGES_NEGATIVELY_TARGETED',
          'INVALID_INVENTORY_SOURCE',
          'APP_INVENTORY_INVALID_SITE_TARGETING',
          'APP_INVENTORY_INVALID_AUDIENCE_LISTS',
          'NO_VALID_CREATIVE',
          'PARENT_INSERTION_ORDER_PAUSED',
          'PARENT_INSERTION_ORDER_EXPIRED',
          'DEPRECATED_FIRST_PARTY_AUDIENCE_EXCLUSION',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'Output only. The warning messages generated by the line item. These warnings do not block saving the line item, but some may block the line item from running.',
        readOnly: true,
      }),
    youtubeAndPartnersSettings: YoutubeAndPartnersSettingsSchema.exactOptional().openapi({
      description: 'Output only. Settings specific to YouTube and Partners line items.',
      readOnly: true,
    }),
  })
  .openapi({ description: 'A single line item.', required: [] })
  .openapi('LineItem')

const BulkUpdateLineItemsRequestSchema = z
  .object({
    lineItemIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Required. IDs of line items to update.' }),
    targetLineItem: LineItemSchema.exactOptional().openapi({
      description:
        'Required. A line item object containing the fields to be updated and the new values to assign to all line items specified in line_item_ids."',
    }),
    updateMask: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. A field mask identifying which fields to update. Only the following fields are currently supported: * entityStatus',
      }),
  })
  .openapi({
    description: 'Request message for LineItemService.BulkUpdateLineItems.',
    required: [],
  })
  .openapi('BulkUpdateLineItemsRequest')

const BulkUpdateLineItemsResponseSchema = z
  .object({
    errors: z
      .array(StatusSchema)
      .exactOptional()
      .openapi({ description: 'Errors returned by line items that failed to update.' }),
    failedLineItemIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The IDs of line items that failed to update.' }),
    skippedLineItemIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The IDs of line items that are skipped for updates. For example, unnecessary mutates that will result in effectively no changes to line items will be skipped and corresponding line item IDs can be tracked here.',
      }),
    updatedLineItemIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The IDs of successfully updated line items.' }),
  })
  .openapi({
    description: 'Response message for LineItemService.BulkUpdateLineItems.',
    required: [],
  })
  .openapi('BulkUpdateLineItemsResponse')

const ImageAssetSchema = z
  .object({
    fileSize: z
      .string()
      .exactOptional()
      .openapi({ description: 'File size of the image asset in bytes.' }),
    fullSize: DimensionsSchema.exactOptional().openapi({
      description: 'Metadata for this image at its original size.',
    }),
    mimeType: z.string().exactOptional().openapi({ description: 'MIME type of the image asset.' }),
  })
  .openapi({ description: 'Meta data of an image asset.', required: [] })
  .openapi('ImageAsset')

const CommonInStreamAttributeSchema = z
  .object({
    actionButtonLabel: z
      .string()
      .exactOptional()
      .openapi({ description: 'The text on the call-to-action button.' }),
    actionHeadline: z
      .string()
      .exactOptional()
      .openapi({ description: 'The headline of the call-to-action banner.' }),
    companionBanner: ImageAssetSchema.exactOptional().openapi({
      description: 'The image which shows next to the video ad.',
    }),
    displayUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The webpage address that appears with the ad.' }),
    finalUrl: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The URL address of the webpage that people reach after they click the ad.',
      }),
    trackingUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL address loaded in the background for tracking purposes.' }),
    video: YoutubeVideoDetailsSchema.exactOptional().openapi({
      description: 'The YouTube video of the ad.',
    }),
  })
  .openapi({
    description: 'Common attributes for in-stream, non-skippable and bumper ads.',
    required: [],
  })
  .openapi('CommonInStreamAttribute')

const BumperAdSchema = z
  .object({
    commonInStreamAttribute: CommonInStreamAttributeSchema.exactOptional().openapi({
      description: 'Common ad attributes.',
    }),
  })
  .openapi({ description: 'Details for a bumper ad.', required: [] })
  .openapi('BumperAd')

const BusinessChainSearchTermsSchema = z
  .object({
    businessChainQuery: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The search query for the desired business chain. The query must be the full name of the business, e.g. "KFC", "mercedes-benz".',
      }),
    regionQuery: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The search query for the desired geo region, e.g. "Seattle", "United State".',
      }),
  })
  .openapi({
    description:
      'Search terms for Business Chain targeting options. At least one of the field should be populated.',
    required: [],
  })
  .openapi('BusinessChainSearchTerms')

const BusinessChainTargetingOptionDetailsSchema = z
  .object({
    businessChain: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The display name of the business chain, e.g. "KFC", "Chase Bank".',
        readOnly: true,
      }),
    geoRegion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The display name of the geographic region, e.g. "Ontario, Canada".',
        readOnly: true,
      }),
    geoRegionType: z
      .enum([
        'GEO_REGION_TYPE_UNKNOWN',
        'GEO_REGION_TYPE_OTHER',
        'GEO_REGION_TYPE_COUNTRY',
        'GEO_REGION_TYPE_REGION',
        'GEO_REGION_TYPE_TERRITORY',
        'GEO_REGION_TYPE_PROVINCE',
        'GEO_REGION_TYPE_STATE',
        'GEO_REGION_TYPE_PREFECTURE',
        'GEO_REGION_TYPE_GOVERNORATE',
        'GEO_REGION_TYPE_CANTON',
        'GEO_REGION_TYPE_UNION_TERRITORY',
        'GEO_REGION_TYPE_AUTONOMOUS_COMMUNITY',
        'GEO_REGION_TYPE_DMA_REGION',
        'GEO_REGION_TYPE_METRO',
        'GEO_REGION_TYPE_CONGRESSIONAL_DISTRICT',
        'GEO_REGION_TYPE_COUNTY',
        'GEO_REGION_TYPE_MUNICIPALITY',
        'GEO_REGION_TYPE_CITY',
        'GEO_REGION_TYPE_POSTAL_CODE',
        'GEO_REGION_TYPE_DEPARTMENT',
        'GEO_REGION_TYPE_AIRPORT',
        'GEO_REGION_TYPE_TV_REGION',
        'GEO_REGION_TYPE_OKRUG',
        'GEO_REGION_TYPE_BOROUGH',
        'GEO_REGION_TYPE_CITY_REGION',
        'GEO_REGION_TYPE_ARRONDISSEMENT',
        'GEO_REGION_TYPE_NEIGHBORHOOD',
        'GEO_REGION_TYPE_UNIVERSITY',
        'GEO_REGION_TYPE_DISTRICT',
      ])
      .exactOptional()
      .openapi({ description: 'Output only. The type of the geographic region.', readOnly: true }),
  })
  .openapi({
    description:
      'Represents a targetable business chain within a geo region. This will be populated in the business_chain_details field when targeting_type is `TARGETING_TYPE_BUSINESS_CHAIN`.',
    required: [],
  })
  .openapi('BusinessChainTargetingOptionDetails')

const PrismaConfigSchema = z
  .object({
    prismaCpeCode: PrismaCpeCodeSchema.exactOptional().openapi({
      description:
        'Required. Relevant client, product, and estimate codes from the Mediaocean Prisma tool.',
    }),
    prismaType: z
      .enum([
        'PRISMA_TYPE_UNSPECIFIED',
        'PRISMA_TYPE_DISPLAY',
        'PRISMA_TYPE_SEARCH',
        'PRISMA_TYPE_VIDEO',
        'PRISMA_TYPE_AUDIO',
        'PRISMA_TYPE_SOCIAL',
        'PRISMA_TYPE_FEE',
      ])
      .exactOptional()
      .openapi({ description: 'Required. The Prisma type.' }),
    supplier: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The entity allocated this budget (DSP, site, etc.).' }),
  })
  .openapi({ description: 'Settings specific to the Mediaocean Prisma tool.', required: [] })
  .openapi('PrismaConfig')

const CampaignBudgetSchema = z
  .object({
    budgetAmountMicros: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The total amount the linked insertion order segments can budget. The amount is in micros. Must be greater than 0. For example, 500000000 represents 500 standard units of the currency.',
      }),
    budgetId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique ID of the campaign budget. Assigned by the system. Do not set for new budgets. Must be included when updating or adding budgets to campaign_budgets. Otherwise, a new ID will be generated and assigned.',
      }),
    budgetUnit: z
      .enum(['BUDGET_UNIT_UNSPECIFIED', 'BUDGET_UNIT_CURRENCY', 'BUDGET_UNIT_IMPRESSIONS'])
      .exactOptional()
      .openapi({
        description:
          'Required. Immutable. Specifies whether the budget is measured in currency or impressions.',
      }),
    dateRange: DateRangeSchema.exactOptional().openapi({
      description:
        "Required. The date range for the campaign budget. Linked budget segments may have a different date range. They are resolved relative to the parent advertiser's time zone. Both `start_date` and `end_date` must be before the year 2037.",
    }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The display name of the budget. Must be UTF-8 encoded with a maximum size of 240 bytes.',
      }),
    externalBudgetId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. The ID identifying this budget to the external source. If this field is set and the invoice detail level of the corresponding billing profile is set to "Budget level PO", all impressions served against this budget will include this ID on the invoice. Must be unique under the campaign.',
      }),
    externalBudgetSource: z
      .enum([
        'EXTERNAL_BUDGET_SOURCE_UNSPECIFIED',
        'EXTERNAL_BUDGET_SOURCE_NONE',
        'EXTERNAL_BUDGET_SOURCE_MEDIA_OCEAN',
      ])
      .exactOptional()
      .openapi({ description: 'Required. The external source of the budget.' }),
    invoiceGroupingId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. The ID used to group budgets to be included the same invoice. If this field is set and the invoice level of the corresponding billing profile is set to "Budget invoice grouping ID", all external_budget_id sharing the same invoice_grouping_id will be grouped in the same invoice.',
      }),
    prismaConfig: PrismaConfigSchema.exactOptional().openapi({
      description:
        'Additional metadata for use by the Mediaocean Prisma tool. Required for Mediaocean budgets. Only applicable to prisma_enabled advertisers.',
    }),
  })
  .openapi({
    description: 'Settings that control how the campaign budget is allocated.',
    required: [],
  })
  .openapi('CampaignBudget')

const CampaignFlightSchema = z
  .object({
    plannedDates: DateRangeSchema.exactOptional().openapi({
      description:
        "Required. The dates that the campaign is expected to run. They are resolved relative to the parent advertiser's time zone. * The dates specified here will not affect serving. They are used to generate alerts and warnings. For example, if the flight date of any child insertion order is outside the range of these dates, the user interface will show a warning. * `start_date` is required and must be the current date or later. * `end_date` is optional. If specified, it must be the `start_date` or later. * Any specified date must be before the year 2037.",
    }),
    plannedSpendAmountMicros: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The amount the campaign is expected to spend for its given planned_dates. This will not limit serving, but will be used for tracking spend in the DV360 UI. The amount is in micros. Must be greater than or equal to 0. For example, 500000000 represents 500 standard units of the currency.',
      }),
  })
  .openapi({
    description: 'Settings that track the planned spend and duration of a campaign.',
    required: [],
  })
  .openapi('CampaignFlight')

const PerformanceGoalSchema = z
  .object({
    performanceGoalAmountMicros: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The goal amount, in micros of the advertiser's currency. Applicable when performance_goal_type is one of: * `PERFORMANCE_GOAL_TYPE_CPM` * `PERFORMANCE_GOAL_TYPE_CPC` * `PERFORMANCE_GOAL_TYPE_CPA` * `PERFORMANCE_GOAL_TYPE_CPIAVC` * `PERFORMANCE_GOAL_TYPE_VCPM` For example 1500000 represents 1.5 standard units of the currency.",
      }),
    performanceGoalPercentageMicros: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The decimal representation of the goal percentage in micros. Applicable when performance_goal_type is one of: * `PERFORMANCE_GOAL_TYPE_CTR` * `PERFORMANCE_GOAL_TYPE_VIEWABILITY` * `PERFORMANCE_GOAL_TYPE_CLICK_CVR` * `PERFORMANCE_GOAL_TYPE_IMPRESSION_CVR` * `PERFORMANCE_GOAL_TYPE_VTR` * `PERFORMANCE_GOAL_TYPE_AUDIO_COMPLETION_RATE` * `PERFORMANCE_GOAL_TYPE_VIDEO_COMPLETION_RATE` For example, 70000 represents 7% (decimal 0.07).',
      }),
    performanceGoalString: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A key performance indicator (KPI) string, which can be empty. Must be UTF-8 encoded with a length of no more than 100 characters. Applicable when performance_goal_type is set to `PERFORMANCE_GOAL_TYPE_OTHER`.',
      }),
    performanceGoalType: z
      .enum([
        'PERFORMANCE_GOAL_TYPE_UNSPECIFIED',
        'PERFORMANCE_GOAL_TYPE_CPM',
        'PERFORMANCE_GOAL_TYPE_CPC',
        'PERFORMANCE_GOAL_TYPE_CPA',
        'PERFORMANCE_GOAL_TYPE_CTR',
        'PERFORMANCE_GOAL_TYPE_VIEWABILITY',
        'PERFORMANCE_GOAL_TYPE_CPIAVC',
        'PERFORMANCE_GOAL_TYPE_CPE',
        'PERFORMANCE_GOAL_TYPE_CLICK_CVR',
        'PERFORMANCE_GOAL_TYPE_IMPRESSION_CVR',
        'PERFORMANCE_GOAL_TYPE_VCPM',
        'PERFORMANCE_GOAL_TYPE_VTR',
        'PERFORMANCE_GOAL_TYPE_AUDIO_COMPLETION_RATE',
        'PERFORMANCE_GOAL_TYPE_VIDEO_COMPLETION_RATE',
        'PERFORMANCE_GOAL_TYPE_OTHER',
      ])
      .exactOptional()
      .openapi({ description: 'Required. The type of the performance goal.' }),
  })
  .openapi({
    description: 'Settings that control the performance goal of a campaign or insertion order.',
    required: [],
  })
  .openapi('PerformanceGoal')

const CampaignGoalSchema = z
  .object({
    campaignGoalType: z
      .enum([
        'CAMPAIGN_GOAL_TYPE_UNSPECIFIED',
        'CAMPAIGN_GOAL_TYPE_APP_INSTALL',
        'CAMPAIGN_GOAL_TYPE_BRAND_AWARENESS',
        'CAMPAIGN_GOAL_TYPE_OFFLINE_ACTION',
        'CAMPAIGN_GOAL_TYPE_ONLINE_ACTION',
      ])
      .exactOptional()
      .openapi({ description: 'Required. The type of the campaign goal.' }),
    performanceGoal: PerformanceGoalSchema.exactOptional().openapi({
      description:
        'Required. The performance goal of the campaign. Acceptable values for performance_goal_type are: * `PERFORMANCE_GOAL_TYPE_CPM` * `PERFORMANCE_GOAL_TYPE_CPC` * `PERFORMANCE_GOAL_TYPE_CPA` * `PERFORMANCE_GOAL_TYPE_CPIAVC` * `PERFORMANCE_GOAL_TYPE_CTR` * `PERFORMANCE_GOAL_TYPE_VIEWABILITY` * `PERFORMANCE_GOAL_TYPE_OTHER`',
    }),
  })
  .openapi({ description: 'Settings that control the goal of a campaign.', required: [] })
  .openapi('CampaignGoal')

const CampaignSchema = z
  .object({
    advertiserId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The unique ID of the advertiser the campaign belongs to.',
        readOnly: true,
      }),
    campaignBudgets: z
      .array(CampaignBudgetSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of budgets available to this campaign. If this field is not set, the campaign uses an unlimited budget.',
      }),
    campaignFlight: CampaignFlightSchema.exactOptional().openapi({
      description: 'Required. The planned spend and duration of the campaign.',
    }),
    campaignGoal: CampaignGoalSchema.exactOptional().openapi({
      description: 'Required. The goal of the campaign.',
    }),
    campaignId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The unique ID of the campaign. Assigned by the system.',
        readOnly: true,
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The display name of the campaign. Must be UTF-8 encoded with a maximum size of 240 bytes.',
      }),
    entityStatus: z
      .enum([
        'ENTITY_STATUS_UNSPECIFIED',
        'ENTITY_STATUS_ACTIVE',
        'ENTITY_STATUS_ARCHIVED',
        'ENTITY_STATUS_DRAFT',
        'ENTITY_STATUS_PAUSED',
        'ENTITY_STATUS_SCHEDULED_FOR_DELETION',
      ])
      .exactOptional()
      .openapi({
        description:
          'Required. Controls whether or not the insertion orders under this campaign can spend their budgets and bid on inventory. * Accepted values are `ENTITY_STATUS_ACTIVE`, `ENTITY_STATUS_ARCHIVED`, and `ENTITY_STATUS_PAUSED`. * For CreateCampaign method, `ENTITY_STATUS_ARCHIVED` is not allowed.',
      }),
    frequencyCap: FrequencyCapSchema.exactOptional().openapi({
      description: 'Required. The frequency cap setting of the campaign.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The resource name of the campaign.', readOnly: true }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The timestamp when the campaign was last updated. Assigned by the system.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'A single campaign.', required: [] })
  .openapi('Campaign')

const CarrierAndIspTargetingOptionDetailsSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The display name of the carrier or ISP.',
        readOnly: true,
      }),
    type: z
      .enum([
        'CARRIER_AND_ISP_TYPE_UNSPECIFIED',
        'CARRIER_AND_ISP_TYPE_ISP',
        'CARRIER_AND_ISP_TYPE_CARRIER',
      ])
      .exactOptional()
      .openapi({
        description: "Output only. The type indicating if it's carrier or ISP.",
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Represents a targetable carrier or ISP. This will be populated in the carrier_and_isp_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_CARRIER_AND_ISP`.',
    required: [],
  })
  .openapi('CarrierAndIspTargetingOptionDetails')

const CategoryTargetingOptionDetailsSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The display name of the category.', readOnly: true }),
  })
  .openapi({
    description:
      'Represents a targetable category. This will be populated in the category_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_CATEGORY`.',
    required: [],
  })
  .openapi('CategoryTargetingOptionDetails')

const ChannelSchema = z
  .object({
    advertiserId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the advertiser that owns the channel.' }),
    channelId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The unique ID of the channel. Assigned by the system.',
        readOnly: true,
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The display name of the channel. Must be UTF-8 encoded with a maximum length of 240 bytes.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The resource name of the channel.', readOnly: true }),
    negativelyTargetedLineItemCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Number of line items that are directly targeting this channel negatively.',
        readOnly: true,
      }),
    partnerId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the partner that owns the channel.' }),
    positivelyTargetedLineItemCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Number of line items that are directly targeting this channel positively.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'A single channel. Channels are custom groups of related websites and apps.',
    required: [],
  })
  .openapi('Channel')

const CmTrackingAdSchema = z
  .object({
    cmAdId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ad ID of the campaign manager 360 tracking Ad.' }),
    cmCreativeId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The creative ID of the campaign manager 360 tracking Ad.' }),
    cmPlacementId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The placement ID of the campaign manager 360 tracking Ad.' }),
  })
  .openapi({ description: 'A Campaign Manager 360 tracking ad.', required: [] })
  .openapi('CmTrackingAd')

const CombinedAudienceSchema = z
  .object({
    combinedAudienceId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The unique ID of the combined audience. Assigned by the system.',
        readOnly: true,
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The display name of the combined audience. .',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The resource name of the combined audience.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Describes a combined audience resource.', required: [] })
  .openapi('CombinedAudience')

const ContactInfoSchema = z
  .object({
    countryCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Country code of the member. Must also be set with the following fields: * hashed_first_name * hashed_last_name * zip_codes',
      }),
    hashedEmails: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of SHA256 hashed email of the member. Before hashing, remove all whitespace and make sure the string is all lowercase.',
      }),
    hashedFirstName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'SHA256 hashed first name of the member. Before hashing, remove all whitespace and make sure the string is all lowercase. Must also be set with the following fields: * country_code * hashed_last_name * zip_codes',
      }),
    hashedLastName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'SHA256 hashed last name of the member. Before hashing, remove all whitespace and make sure the string is all lowercase. Must also be set with the following fields: * country_code * hashed_first_name * zip_codes',
      }),
    hashedPhoneNumbers: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of SHA256 hashed phone numbers of the member. Before hashing, all phone numbers must be formatted using the [E.164 format](//en.wikipedia.org/wiki/E.164) and include the country calling code.',
      }),
    zipCodes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of zip codes of the member. Must also be set with the following fields: * country_code * hashed_first_name * hashed_last_name',
      }),
  })
  .openapi({
    description: 'Contact information defining a Customer Match audience member.',
    required: [],
  })
  .openapi('ContactInfo')

const ContactInfoListSchema = z
  .object({
    contactInfos: z
      .array(ContactInfoSchema)
      .exactOptional()
      .openapi({
        description:
          "A list of ContactInfo objects defining Customer Match audience members. The size of members after splitting the contact_infos mustn't be greater than 500,000.",
      }),
  })
  .openapi({
    description:
      'Wrapper message for a list of contact information defining Customer Match audience members.',
    required: [],
  })
  .openapi('ContactInfoList')

const ContentDurationTargetingOptionDetailsSchema = z
  .object({
    contentDuration: z
      .enum([
        'CONTENT_DURATION_UNSPECIFIED',
        'CONTENT_DURATION_UNKNOWN',
        'CONTENT_DURATION_0_TO_1_MIN',
        'CONTENT_DURATION_1_TO_5_MIN',
        'CONTENT_DURATION_5_TO_15_MIN',
        'CONTENT_DURATION_15_TO_30_MIN',
        'CONTENT_DURATION_30_TO_60_MIN',
        'CONTENT_DURATION_OVER_60_MIN',
      ])
      .exactOptional()
      .openapi({ description: 'Output only. The content duration.', readOnly: true }),
  })
  .openapi({
    description:
      'Represents a targetable content duration. This will be populated in the content_duration_details field when targeting_type is `TARGETING_TYPE_CONTENT_DURATION`.',
    required: [],
  })
  .openapi('ContentDurationTargetingOptionDetails')

const ContentGenreTargetingOptionDetailsSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The display name of the content genre',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Represents a targetable content genre. This will be populated in the content_genre_details field when targeting_type is `TARGETING_TYPE_CONTENT_GENRE`.',
    required: [],
  })
  .openapi('ContentGenreTargetingOptionDetails')

const ContentInstreamPositionTargetingOptionDetailsSchema = z
  .object({
    contentInstreamPosition: z
      .enum([
        'CONTENT_INSTREAM_POSITION_UNSPECIFIED',
        'CONTENT_INSTREAM_POSITION_PRE_ROLL',
        'CONTENT_INSTREAM_POSITION_MID_ROLL',
        'CONTENT_INSTREAM_POSITION_POST_ROLL',
        'CONTENT_INSTREAM_POSITION_UNKNOWN',
      ])
      .exactOptional()
      .openapi({ description: 'Output only. The content instream position.', readOnly: true }),
  })
  .openapi({
    description:
      'Represents a targetable content instream position, which could be used by video and audio ads. This will be populated in the content_instream_position_details field when targeting_type is `TARGETING_TYPE_CONTENT_INSTREAM_POSITION`.',
    required: [],
  })
  .openapi('ContentInstreamPositionTargetingOptionDetails')

const ContentOutstreamPositionTargetingOptionDetailsSchema = z
  .object({
    contentOutstreamPosition: z
      .enum([
        'CONTENT_OUTSTREAM_POSITION_UNSPECIFIED',
        'CONTENT_OUTSTREAM_POSITION_UNKNOWN',
        'CONTENT_OUTSTREAM_POSITION_IN_ARTICLE',
        'CONTENT_OUTSTREAM_POSITION_IN_BANNER',
        'CONTENT_OUTSTREAM_POSITION_IN_FEED',
        'CONTENT_OUTSTREAM_POSITION_INTERSTITIAL',
      ])
      .exactOptional()
      .openapi({ description: 'Output only. The content outstream position.', readOnly: true }),
  })
  .openapi({
    description:
      'Represents a targetable content outstream position, which could be used by display and video ads. This will be populated in the content_outstream_position_details field when targeting_type is `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION`.',
    required: [],
  })
  .openapi('ContentOutstreamPositionTargetingOptionDetails')

const ContentStreamTypeTargetingOptionDetailsSchema = z
  .object({
    contentStreamType: z
      .enum(['CONTENT_STREAM_TYPE_UNSPECIFIED', 'CONTENT_LIVE_STREAM', 'CONTENT_ON_DEMAND'])
      .exactOptional()
      .openapi({ description: 'Output only. The content stream type.', readOnly: true }),
  })
  .openapi({
    description:
      'Represents a targetable content stream type. This will be populated in the content_stream_type_details field when targeting_type is `TARGETING_TYPE_CONTENT_STREAM_TYPE`.',
    required: [],
  })
  .openapi('ContentStreamTypeTargetingOptionDetails')

const CounterEventSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The name of the counter event.' }),
    reportingName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. The name used to identify this counter event in reports.',
      }),
  })
  .openapi({ description: 'Counter event of the creative.', required: [] })
  .openapi('CounterEvent')

const CreateAssetRequestSchema = z
  .object({
    filename: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The filename of the asset, including the file extension. The filename must be UTF-8 encoded with a maximum size of 240 bytes.',
      }),
  })
  .openapi({ description: 'A request message for CreateAsset.', required: [] })
  .openapi('CreateAssetRequest')

const CreateAssetResponseSchema = z
  .object({
    asset: AssetSchema.exactOptional().openapi({
      description: 'The uploaded asset, if successful.',
    }),
  })
  .openapi({ description: 'A response message for CreateAsset.', required: [] })
  .openapi('CreateAssetResponse')

const IdFilterSchema = z
  .object({
    adGroupAdIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'YouTube Ads to download by ID. All IDs must belong to the same Advertiser or Partner specified in CreateSdfDownloadTaskRequest.',
      }),
    adGroupIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'YouTube Ad Groups to download by ID. All IDs must belong to the same Advertiser or Partner specified in CreateSdfDownloadTaskRequest.',
      }),
    campaignIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Campaigns to download by ID. All IDs must belong to the same Advertiser or Partner specified in CreateSdfDownloadTaskRequest.',
      }),
    insertionOrderIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Insertion Orders to download by ID. All IDs must belong to the same Advertiser or Partner specified in CreateSdfDownloadTaskRequest.',
      }),
    lineItemIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Line Items to download by ID. All IDs must belong to the same Advertiser or Partner specified in CreateSdfDownloadTaskRequest.',
      }),
    mediaProductIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Media Products to download by ID. All IDs must belong to the same Advertiser or Partner specified in CreateSdfDownloadTaskRequest.',
      }),
  })
  .openapi({
    description: 'A filtering option that filters entities by their entity IDs.',
    required: [],
  })
  .openapi('IdFilter')

const InventorySourceFilterSchema = z
  .object({
    inventorySourceIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Inventory Sources to download by ID. All IDs must belong to the same Advertiser or Partner specified in CreateSdfDownloadTaskRequest. Leave empty to download all Inventory Sources for the selected Advertiser or Partner.',
      }),
  })
  .openapi({
    description: 'A filtering option for filtering on Inventory Source entities.',
    required: [],
  })
  .openapi('InventorySourceFilter')

const ParentEntityFilterSchema = z
  .object({
    fileType: z
      .array(
        z.enum([
          'FILE_TYPE_UNSPECIFIED',
          'FILE_TYPE_CAMPAIGN',
          'FILE_TYPE_MEDIA_PRODUCT',
          'FILE_TYPE_INSERTION_ORDER',
          'FILE_TYPE_LINE_ITEM',
          'FILE_TYPE_AD_GROUP',
          'FILE_TYPE_AD',
        ]),
      )
      .exactOptional()
      .openapi({ description: 'Required. File types that will be returned.' }),
    filterIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The IDs of the specified filter type. This is used to filter entities to fetch. If filter type is not `FILTER_TYPE_NONE`, at least one ID must be specified.',
      }),
    filterType: z
      .enum([
        'FILTER_TYPE_UNSPECIFIED',
        'FILTER_TYPE_NONE',
        'FILTER_TYPE_ADVERTISER_ID',
        'FILTER_TYPE_CAMPAIGN_ID',
        'FILTER_TYPE_MEDIA_PRODUCT_ID',
        'FILTER_TYPE_INSERTION_ORDER_ID',
        'FILTER_TYPE_LINE_ITEM_ID',
      ])
      .exactOptional()
      .openapi({ description: 'Required. Filter type used to filter fetched entities.' }),
  })
  .openapi({
    description:
      'A filtering option that filters on selected file types belonging to a chosen set of filter entities.',
    required: [],
  })
  .openapi('ParentEntityFilter')

const CreateSdfDownloadTaskRequestSchema = z
  .object({
    advertiserId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the advertiser to download SDF for.' }),
    idFilter: IdFilterSchema.exactOptional().openapi({
      description: 'Filters on entities by their entity IDs.',
    }),
    inventorySourceFilter: InventorySourceFilterSchema.exactOptional().openapi({
      description: 'Filters on Inventory Sources by their IDs.',
    }),
    parentEntityFilter: ParentEntityFilterSchema.exactOptional().openapi({
      description:
        'Filters on selected file types. The entities in each file are filtered by a chosen set of filter entities. The filter entities must be the same type as, or a parent type of, the selected file types.',
    }),
    partnerId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the partner to download SDF for.' }),
    version: z
      .enum([
        'SDF_VERSION_UNSPECIFIED',
        'SDF_VERSION_3_1',
        'SDF_VERSION_4',
        'SDF_VERSION_4_1',
        'SDF_VERSION_4_2',
        'SDF_VERSION_5',
        'SDF_VERSION_5_1',
        'SDF_VERSION_5_2',
        'SDF_VERSION_5_3',
        'SDF_VERSION_5_4',
        'SDF_VERSION_5_5',
      ])
      .exactOptional()
      .openapi({
        description:
          'Required. The SDF version of the downloaded file. If set to `SDF_VERSION_UNSPECIFIED`, this will default to the version specified by the advertiser or partner identified by `root_id`. An advertiser inherits its SDF version from its partner unless configured otherwise.',
      }),
  })
  .openapi({
    description: 'Request message for [SdfDownloadTaskService.CreateSdfDownloadTask].',
    required: [],
  })
  .openapi('CreateSdfDownloadTaskRequest')

const ExitEventSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the click tag of the exit event. The name must be unique within one creative. Leave it empty or unset for creatives containing image assets only.',
      }),
    reportingName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name used to identify this event in reports. Leave it empty or unset for creatives containing image assets only.',
      }),
    type: z
      .enum(['EXIT_EVENT_TYPE_UNSPECIFIED', 'EXIT_EVENT_TYPE_DEFAULT', 'EXIT_EVENT_TYPE_BACKUP'])
      .exactOptional()
      .openapi({ description: 'Required. The type of the exit event.' }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The click through URL of the exit event. This is required when type is: * `EXIT_EVENT_TYPE_DEFAULT` * `EXIT_EVENT_TYPE_BACKUP`',
      }),
  })
  .openapi({ description: 'Exit event of the creative.', required: [] })
  .openapi('ExitEvent')

const ObaIconSchema = z
  .object({
    clickTrackingUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The click tracking URL of the OBA icon. Only URLs of the following domains are allowed: * https://info.evidon.com * https://l.betrad.com',
      }),
    dimensions: DimensionsSchema.exactOptional().openapi({
      description: 'The dimensions of the OBA icon.',
    }),
    landingPageUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The landing page URL of the OBA icon. Only URLs of the following domains are allowed: * https://info.evidon.com * https://l.betrad.com',
      }),
    position: z
      .enum([
        'OBA_ICON_POSITION_UNSPECIFIED',
        'OBA_ICON_POSITION_UPPER_RIGHT',
        'OBA_ICON_POSITION_UPPER_LEFT',
        'OBA_ICON_POSITION_LOWER_RIGHT',
        'OBA_ICON_POSITION_LOWER_LEFT',
      ])
      .exactOptional()
      .openapi({ description: 'The position of the OBA icon on the creative.' }),
    program: z
      .string()
      .exactOptional()
      .openapi({ description: 'The program of the OBA icon. For example: “AdChoices”.' }),
    resourceMimeType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The MIME type of the OBA icon resource.' }),
    resourceUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL of the OBA icon resource.' }),
    viewTrackingUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The view tracking URL of the OBA icon. Only URLs of the following domains are allowed: * https://info.evidon.com * https://l.betrad.com',
      }),
  })
  .openapi({ description: 'OBA Icon for a Creative', required: [] })
  .openapi('ObaIcon')

const ExchangeReviewStatusSchema = z
  .object({
    exchange: z
      .enum([
        'EXCHANGE_UNSPECIFIED',
        'EXCHANGE_GOOGLE_AD_MANAGER',
        'EXCHANGE_APPNEXUS',
        'EXCHANGE_BRIGHTROLL',
        'EXCHANGE_ADFORM',
        'EXCHANGE_ADMETA',
        'EXCHANGE_ADMIXER',
        'EXCHANGE_ADSMOGO',
        'EXCHANGE_ADSWIZZ',
        'EXCHANGE_BIDSWITCH',
        'EXCHANGE_BRIGHTROLL_DISPLAY',
        'EXCHANGE_CADREON',
        'EXCHANGE_DAILYMOTION',
        'EXCHANGE_FIVE',
        'EXCHANGE_FLUCT',
        'EXCHANGE_FREEWHEEL',
        'EXCHANGE_GENIEE',
        'EXCHANGE_GUMGUM',
        'EXCHANGE_IMOBILE',
        'EXCHANGE_IBILLBOARD',
        'EXCHANGE_IMPROVE_DIGITAL',
        'EXCHANGE_INDEX',
        'EXCHANGE_KARGO',
        'EXCHANGE_MICROAD',
        'EXCHANGE_MOPUB',
        'EXCHANGE_NEND',
        'EXCHANGE_ONE_BY_AOL_DISPLAY',
        'EXCHANGE_ONE_BY_AOL_MOBILE',
        'EXCHANGE_ONE_BY_AOL_VIDEO',
        'EXCHANGE_OOYALA',
        'EXCHANGE_OPENX',
        'EXCHANGE_PERMODO',
        'EXCHANGE_PLATFORMONE',
        'EXCHANGE_PLATFORMID',
        'EXCHANGE_PUBMATIC',
        'EXCHANGE_PULSEPOINT',
        'EXCHANGE_REVENUEMAX',
        'EXCHANGE_RUBICON',
        'EXCHANGE_SMARTCLIP',
        'EXCHANGE_SMARTRTB',
        'EXCHANGE_SMARTSTREAMTV',
        'EXCHANGE_SOVRN',
        'EXCHANGE_SPOTXCHANGE',
        'EXCHANGE_STROER',
        'EXCHANGE_TEADSTV',
        'EXCHANGE_TELARIA',
        'EXCHANGE_TVN',
        'EXCHANGE_UNITED',
        'EXCHANGE_YIELDLAB',
        'EXCHANGE_YIELDMO',
        'EXCHANGE_UNRULYX',
        'EXCHANGE_OPEN8',
        'EXCHANGE_TRITON',
        'EXCHANGE_TRIPLELIFT',
        'EXCHANGE_TABOOLA',
        'EXCHANGE_INMOBI',
        'EXCHANGE_SMAATO',
        'EXCHANGE_AJA',
        'EXCHANGE_SUPERSHIP',
        'EXCHANGE_NEXSTAR_DIGITAL',
        'EXCHANGE_WAZE',
        'EXCHANGE_SOUNDCAST',
        'EXCHANGE_SHARETHROUGH',
        'EXCHANGE_FYBER',
        'EXCHANGE_RED_FOR_PUBLISHERS',
        'EXCHANGE_MEDIANET',
        'EXCHANGE_TAPJOY',
        'EXCHANGE_VISTAR',
        'EXCHANGE_DAX',
        'EXCHANGE_JCD',
        'EXCHANGE_PLACE_EXCHANGE',
        'EXCHANGE_APPLOVIN',
        'EXCHANGE_CONNATIX',
        'EXCHANGE_RESET_DIGITAL',
        'EXCHANGE_HIVESTACK',
      ])
      .exactOptional()
      .openapi({ description: 'The exchange reviewing the creative.' }),
    status: z
      .enum([
        'REVIEW_STATUS_UNSPECIFIED',
        'REVIEW_STATUS_APPROVED',
        'REVIEW_STATUS_REJECTED',
        'REVIEW_STATUS_PENDING',
      ])
      .exactOptional()
      .openapi({ description: 'Status of the exchange review.' }),
  })
  .openapi({ description: 'Exchange review status for the creative.', required: [] })
  .openapi('ExchangeReviewStatus')

const PublisherReviewStatusSchema = z
  .object({
    publisherName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The publisher reviewing the creative.' }),
    status: z
      .enum([
        'REVIEW_STATUS_UNSPECIFIED',
        'REVIEW_STATUS_APPROVED',
        'REVIEW_STATUS_REJECTED',
        'REVIEW_STATUS_PENDING',
      ])
      .exactOptional()
      .openapi({ description: 'Status of the publisher review.' }),
  })
  .openapi({ description: 'Publisher review status for the creative.', required: [] })
  .openapi('PublisherReviewStatus')

const ReviewStatusInfoSchema = z
  .object({
    approvalStatus: z
      .enum([
        'APPROVAL_STATUS_UNSPECIFIED',
        'APPROVAL_STATUS_PENDING_NOT_SERVABLE',
        'APPROVAL_STATUS_PENDING_SERVABLE',
        'APPROVAL_STATUS_APPROVED_SERVABLE',
        'APPROVAL_STATUS_REJECTED_NOT_SERVABLE',
      ])
      .exactOptional()
      .openapi({
        description:
          'Represents the basic approval needed for a creative to begin serving. Summary of creative_and_landing_page_review_status and content_and_policy_review_status.',
      }),
    contentAndPolicyReviewStatus: z
      .enum([
        'REVIEW_STATUS_UNSPECIFIED',
        'REVIEW_STATUS_APPROVED',
        'REVIEW_STATUS_REJECTED',
        'REVIEW_STATUS_PENDING',
      ])
      .exactOptional()
      .openapi({ description: 'Content and policy review status for the creative.' }),
    creativeAndLandingPageReviewStatus: z
      .enum([
        'REVIEW_STATUS_UNSPECIFIED',
        'REVIEW_STATUS_APPROVED',
        'REVIEW_STATUS_REJECTED',
        'REVIEW_STATUS_PENDING',
      ])
      .exactOptional()
      .openapi({ description: 'Creative and landing page review status for the creative.' }),
    exchangeReviewStatuses: z
      .array(ExchangeReviewStatusSchema)
      .exactOptional()
      .openapi({ description: 'Exchange review statuses for the creative.' }),
    publisherReviewStatuses: z
      .array(PublisherReviewStatusSchema)
      .exactOptional()
      .openapi({ description: 'Publisher review statuses for the creative.' }),
  })
  .openapi({ description: 'Review statuses for the creative.', required: [] })
  .openapi('ReviewStatusInfo')

const ThirdPartyUrlSchema = z
  .object({
    type: z
      .enum([
        'THIRD_PARTY_URL_TYPE_UNSPECIFIED',
        'THIRD_PARTY_URL_TYPE_IMPRESSION',
        'THIRD_PARTY_URL_TYPE_CLICK_TRACKING',
        'THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_START',
        'THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_FIRST_QUARTILE',
        'THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_MIDPOINT',
        'THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_THIRD_QUARTILE',
        'THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_COMPLETE',
        'THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_MUTE',
        'THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_PAUSE',
        'THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_REWIND',
        'THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_FULLSCREEN',
        'THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_STOP',
        'THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_CUSTOM',
        'THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_SKIP',
        'THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_PROGRESS',
      ])
      .exactOptional()
      .openapi({ description: 'The type of interaction needs to be tracked by the tracking URL' }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Tracking URL used to track the interaction. Provide a URL with optional path or query string, beginning with `https:`. For example, https://www.example.com/path',
      }),
  })
  .openapi({
    description:
      'Tracking URLs from third parties to track interactions with an audio or a video creative.',
    required: [],
  })
  .openapi('ThirdPartyUrl')

const TimerEventSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The name of the timer event.' }),
    reportingName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The name used to identify this timer event in reports.' }),
  })
  .openapi({ description: 'Timer event of the creative.', required: [] })
  .openapi('TimerEvent')

const TranscodeSchema = z
  .object({
    audioBitRateKbps: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The bit rate for the audio stream of the transcoded video, or the bit rate for the transcoded audio, in kilobits per second.',
      }),
    audioSampleRateHz: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The sample rate for the audio stream of the transcoded video, or the sample rate for the transcoded audio, in hertz.',
      }),
    bitRateKbps: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The transcoding bit rate of the transcoded video, in kilobits per second.',
      }),
    dimensions: DimensionsSchema.exactOptional().openapi({
      description: 'The dimensions of the transcoded video.',
    }),
    fileSizeBytes: z
      .string()
      .exactOptional()
      .openapi({ description: 'The size of the transcoded file, in bytes.' }),
    frameRate: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The frame rate of the transcoded video, in frames per second.' }),
    mimeType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The MIME type of the transcoded file.' }),
    name: z.string().exactOptional().openapi({ description: 'The name of the transcoded file.' }),
    transcoded: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if the transcoding was successful.' }),
  })
  .openapi({
    description: 'Represents information about the transcoded audio or video file.',
    required: [],
  })
  .openapi('Transcode')

const UniversalAdIdSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'The unique creative identifier.' }),
    registry: z
      .enum([
        'UNIVERSAL_AD_REGISTRY_UNSPECIFIED',
        'UNIVERSAL_AD_REGISTRY_OTHER',
        'UNIVERSAL_AD_REGISTRY_AD_ID',
        'UNIVERSAL_AD_REGISTRY_CLEARCAST',
        'UNIVERSAL_AD_REGISTRY_DV360',
        'UNIVERSAL_AD_REGISTRY_CM',
      ])
      .exactOptional()
      .openapi({ description: 'The registry provides unique creative identifiers.' }),
  })
  .openapi({
    description:
      'A creative identifier provided by a registry that is unique across all platforms. This is part of the VAST 4.0 standard.',
    required: [],
  })
  .openapi('UniversalAdId')

const CreativeSchema = z
  .object({
    additionalDimensions: z
      .array(DimensionsSchema)
      .exactOptional()
      .openapi({
        description:
          'Additional dimensions. Applicable when creative_type is one of: * `CREATIVE_TYPE_STANDARD` * `CREATIVE_TYPE_EXPANDABLE` * `CREATIVE_TYPE_NATIVE` * `CREATIVE_TYPE_NATIVE_SITE_SQUARE` * `CREATIVE_TYPE_LIGHTBOX` * `CREATIVE_TYPE_PUBLISHER_HOSTED` If this field is specified, width_pixels and height_pixels are both required and must be greater than or equal to 0.',
      }),
    advertiserId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The unique ID of the advertiser the creative belongs to.',
        readOnly: true,
      }),
    appendedTag: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Third-party HTML tracking tag to be appended to the creative tag.',
      }),
    assets: z
      .array(AssetAssociationSchema)
      .exactOptional()
      .openapi({ description: 'Required. Assets associated to this creative.' }),
    cmPlacementId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The unique ID of the Campaign Manager 360 placement associated with the creative. This field is only applicable for creatives that are synced from Campaign Manager.',
        readOnly: true,
      }),
    cmTrackingAd: CmTrackingAdSchema.exactOptional().openapi({
      description:
        'The Campaign Manager 360 tracking ad associated with the creative. Optional for the following creative_type when created by an advertiser that uses both Campaign Manager 360 and third-party ad serving: * `CREATIVE_TYPE_NATIVE` * `CREATIVE_TYPE_NATIVE_SITE_SQUARE` Output only for other cases.',
    }),
    companionCreativeIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "The IDs of companion creatives for a video creative. You can assign existing display creatives (with image or HTML5 assets) to serve surrounding the publisher's video player. Companions display around the video player while the video is playing and remain after the video has completed. Creatives contain additional dimensions can not be companion creatives. This field is only supported for following creative_type: * `CREATIVE_TYPE_AUDIO` * `CREATIVE_TYPE_VIDEO`",
      }),
    counterEvents: z
      .array(CounterEventSchema)
      .exactOptional()
      .openapi({
        description:
          'Counter events for a rich media creative. Counters track the number of times that a user interacts with any part of a rich media creative in a specified way (mouse-overs, mouse-outs, clicks, taps, data loading, keyboard entries, etc.). Any event that can be captured in the creative can be recorded as a counter. Leave it empty or unset for creatives containing image assets only.',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The timestamp when the creative was created. Assigned by the system.',
        readOnly: true,
      }),
    creativeAttributes: z
      .array(
        z.enum([
          'CREATIVE_ATTRIBUTE_UNSPECIFIED',
          'CREATIVE_ATTRIBUTE_VAST',
          'CREATIVE_ATTRIBUTE_VPAID_LINEAR',
          'CREATIVE_ATTRIBUTE_VPAID_NON_LINEAR',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'Output only. A list of attributes of the creative that is generated by the system.',
        readOnly: true,
      }),
    creativeId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The unique ID of the creative. Assigned by the system.',
        readOnly: true,
      }),
    creativeType: z
      .enum([
        'CREATIVE_TYPE_UNSPECIFIED',
        'CREATIVE_TYPE_STANDARD',
        'CREATIVE_TYPE_EXPANDABLE',
        'CREATIVE_TYPE_VIDEO',
        'CREATIVE_TYPE_NATIVE',
        'CREATIVE_TYPE_TEMPLATED_APP_INSTALL',
        'CREATIVE_TYPE_NATIVE_SITE_SQUARE',
        'CREATIVE_TYPE_TEMPLATED_APP_INSTALL_INTERSTITIAL',
        'CREATIVE_TYPE_LIGHTBOX',
        'CREATIVE_TYPE_NATIVE_APP_INSTALL',
        'CREATIVE_TYPE_NATIVE_APP_INSTALL_SQUARE',
        'CREATIVE_TYPE_AUDIO',
        'CREATIVE_TYPE_PUBLISHER_HOSTED',
        'CREATIVE_TYPE_NATIVE_VIDEO',
        'CREATIVE_TYPE_TEMPLATED_APP_INSTALL_VIDEO',
      ])
      .exactOptional()
      .openapi({ description: 'Required. Immutable. The type of the creative.' }),
    dimensions: DimensionsSchema.exactOptional().openapi({
      description:
        'Required. Primary dimensions of the creative. Applicable to all creative types. The value of width_pixels and height_pixels defaults to `0` when creative_type is one of: * `CREATIVE_TYPE_VIDEO` * `CREATIVE_TYPE_AUDIO` * `CREATIVE_TYPE_NATIVE_VIDEO`',
    }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The display name of the creative. Must be UTF-8 encoded with a maximum size of 240 bytes.',
      }),
    dynamic: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Output only. Indicates whether the creative is dynamic.',
        readOnly: true,
      }),
    entityStatus: z
      .enum([
        'ENTITY_STATUS_UNSPECIFIED',
        'ENTITY_STATUS_ACTIVE',
        'ENTITY_STATUS_ARCHIVED',
        'ENTITY_STATUS_DRAFT',
        'ENTITY_STATUS_PAUSED',
        'ENTITY_STATUS_SCHEDULED_FOR_DELETION',
      ])
      .exactOptional()
      .openapi({
        description:
          'Required. Controls whether or not the creative can serve. Accepted values are: * `ENTITY_STATUS_ACTIVE` * `ENTITY_STATUS_ARCHIVED` * `ENTITY_STATUS_PAUSED`',
      }),
    exitEvents: z
      .array(ExitEventSchema)
      .exactOptional()
      .openapi({
        description:
          'Required. Exit events for this creative. An exit (also known as a click tag) is any area in your creative that someone can click or tap to open an advertiser\'s landing page. Every creative must include at least one exit. You can add an exit to your creative in any of the following ways: * Use Google Web Designer\'s tap area. * Define a JavaScript variable called "clickTag". * Use the Enabler (Enabler.exit()) to track exits in rich media formats.',
      }),
    expandOnHover: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. Indicates the creative will automatically expand on hover. Optional and only valid for third-party expandable creatives. Third-party expandable creatives are creatives with following hosting source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_EXPANDABLE`',
      }),
    expandingDirection: z
      .enum([
        'EXPANDING_DIRECTION_UNSPECIFIED',
        'EXPANDING_DIRECTION_NONE',
        'EXPANDING_DIRECTION_UP',
        'EXPANDING_DIRECTION_DOWN',
        'EXPANDING_DIRECTION_LEFT',
        'EXPANDING_DIRECTION_RIGHT',
        'EXPANDING_DIRECTION_UP_AND_LEFT',
        'EXPANDING_DIRECTION_UP_AND_RIGHT',
        'EXPANDING_DIRECTION_DOWN_AND_LEFT',
        'EXPANDING_DIRECTION_DOWN_AND_RIGHT',
        'EXPANDING_DIRECTION_UP_OR_DOWN',
        'EXPANDING_DIRECTION_LEFT_OR_RIGHT',
        'EXPANDING_DIRECTION_ANY_DIAGONAL',
      ])
      .exactOptional()
      .openapi({
        description:
          'Optional. Specifies the expanding direction of the creative. Required and only valid for third-party expandable creatives. Third-party expandable creatives are creatives with following hosting source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_EXPANDABLE`',
      }),
    hostingSource: z
      .enum([
        'HOSTING_SOURCE_UNSPECIFIED',
        'HOSTING_SOURCE_CM',
        'HOSTING_SOURCE_THIRD_PARTY',
        'HOSTING_SOURCE_HOSTED',
        'HOSTING_SOURCE_RICH_MEDIA',
      ])
      .exactOptional()
      .openapi({ description: 'Required. Indicates where the creative is hosted.' }),
    html5Video: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Indicates the third-party VAST tag creative requires HTML5 Video support. Output only and only valid for third-party VAST tag creatives. Third-party VAST tag creatives are creatives with following hosting_source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_VIDEO`',
        readOnly: true,
      }),
    iasCampaignMonitoring: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether Integral Ad Science (IAS) campaign monitoring is enabled. To enable this for the creative, make sure the Advertiser.creative_config.ias_client_id has been set to your IAS client ID.',
      }),
    integrationCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ID information used to link this creative to an external system. Must be UTF-8 encoded with a length of no more than 10,000 characters.',
      }),
    jsTrackerUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'JavaScript measurement URL from supported third-party verification providers (ComScore, DoubleVerify, IAS, Moat). HTML script tags are not supported. This field is only writeable in following creative_type: * `CREATIVE_TYPE_NATIVE` * `CREATIVE_TYPE_NATIVE_SITE_SQUARE` * `CREATIVE_TYPE_NATIVE_VIDEO`',
      }),
    lineItemIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Output only. The IDs of the line items this creative is associated with. To associate a creative to a line item, use LineItem.creative_ids instead.',
        readOnly: true,
      }),
    mediaDuration: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Media duration of the creative. Applicable when creative_type is one of: * `CREATIVE_TYPE_VIDEO` * `CREATIVE_TYPE_AUDIO` * `CREATIVE_TYPE_NATIVE_VIDEO` * `CREATIVE_TYPE_PUBLISHER_HOSTED`',
        readOnly: true,
      }),
    mp3Audio: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Indicates the third-party audio creative supports MP3. Output only and only valid for third-party audio creatives. Third-party audio creatives are creatives with following hosting_source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_AUDIO`',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The resource name of the creative.', readOnly: true }),
    notes: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'User notes for this creative. Must be UTF-8 encoded with a length of no more than 20,000 characters.',
      }),
    obaIcon: ObaIconSchema.exactOptional().openapi({
      description:
        'Specifies the OBA icon for a video creative. This field is only supported in following creative_type: * `CREATIVE_TYPE_VIDEO`',
    }),
    oggAudio: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Indicates the third-party audio creative supports OGG. Output only and only valid for third-party audio creatives. Third-party audio creatives are creatives with following hosting_source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_AUDIO`',
        readOnly: true,
      }),
    progressOffset: AudioVideoOffsetSchema.exactOptional().openapi({
      description:
        'Amount of time to play the video before counting a view. This field is required when skippable is true. This field is only supported for the following creative_type: * `CREATIVE_TYPE_VIDEO`',
    }),
    requireHtml5: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. Indicates that the creative relies on HTML5 to render properly. Optional and only valid for third-party tag creatives. Third-party tag creatives are creatives with following hosting_source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_STANDARD` * `CREATIVE_TYPE_EXPANDABLE`',
      }),
    requireMraid: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. Indicates that the creative requires MRAID (Mobile Rich Media Ad Interface Definitions system). Set this if the creative relies on mobile gestures for interactivity, such as swiping or tapping. Optional and only valid for third-party tag creatives. Third-party tag creatives are creatives with following hosting_source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_STANDARD` * `CREATIVE_TYPE_EXPANDABLE`',
      }),
    requirePingForAttribution: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. Indicates that the creative will wait for a return ping for attribution. Only valid when using a Campaign Manager 360 tracking ad with a third-party ad server parameter and the ${DC_DBM_TOKEN} macro. Optional and only valid for third-party tag creatives or third-party VAST tag creatives. Third-party tag creatives are creatives with following hosting_source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_STANDARD` * `CREATIVE_TYPE_EXPANDABLE` Third-party VAST tag creatives are creatives with following hosting_source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_AUDIO` * `CREATIVE_TYPE_VIDEO`',
      }),
    reviewStatus: ReviewStatusInfoSchema.exactOptional().openapi({
      description: 'Output only. The current status of the creative review process.',
      readOnly: true,
    }),
    skipOffset: AudioVideoOffsetSchema.exactOptional().openapi({
      description:
        'Amount of time to play the video before the skip button appears. This field is required when skippable is true. This field is only supported for the following creative_type: * `CREATIVE_TYPE_VIDEO`',
    }),
    skippable: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the user can choose to skip a video creative. This field is only supported for the following creative_type: * `CREATIVE_TYPE_VIDEO`',
      }),
    thirdPartyTag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The original third-party tag used for the creative. Required and only valid for third-party tag creatives. Third-party tag creatives are creatives with following hosting_source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_STANDARD` * `CREATIVE_TYPE_EXPANDABLE`',
      }),
    thirdPartyUrls: z
      .array(ThirdPartyUrlSchema)
      .exactOptional()
      .openapi({
        description:
          'Tracking URLs from third parties to track interactions with a video creative. This field is only supported for the following creative_type: * `CREATIVE_TYPE_AUDIO` * `CREATIVE_TYPE_VIDEO` * `CREATIVE_TYPE_NATIVE_VIDEO`',
      }),
    timerEvents: z
      .array(TimerEventSchema)
      .exactOptional()
      .openapi({
        description:
          'Timer custom events for a rich media creative. Timers track the time during which a user views and interacts with a specified part of a rich media creative. A creative can have multiple timer events, each timed independently. Leave it empty or unset for creatives containing image assets only.',
      }),
    trackerUrls: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "Tracking URLs for analytics providers or third-party ad technology vendors. The URLs must start with https (except on inventory that doesn't require SSL compliance). If using macros in your URL, use only macros supported by Display & Video 360. Standard URLs only, no IMG or SCRIPT tags. This field is only writeable in following creative_type: * `CREATIVE_TYPE_NATIVE` * `CREATIVE_TYPE_NATIVE_SITE_SQUARE` * `CREATIVE_TYPE_NATIVE_VIDEO`",
      }),
    transcodes: z
      .array(TranscodeSchema)
      .exactOptional()
      .openapi({
        description:
          "Output only. Audio/Video transcodes. Display & Video 360 transcodes the main asset into a number of alternative versions that use different file formats or have different properties (resolution, audio bit rate, and video bit rate), each designed for specific video players or bandwidths. These transcodes give a publisher's system more options to choose from for each impression on your video and ensures that the appropriate file serves based on the viewer’s connection and screen size. This field is only supported in following creative_type: * `CREATIVE_TYPE_VIDEO` * `CREATIVE_TYPE_NATIVE_VIDEO` * `CREATIVE_TYPE_AUDIO`",
        readOnly: true,
      }),
    universalAdId: UniversalAdIdSchema.exactOptional().openapi({
      description:
        'Optional. An optional creative identifier provided by a registry that is unique across all platforms. Universal Ad ID is part of the VAST 4.0 standard. It can be modified after the creative is created. This field is only supported for the following creative_type: * `CREATIVE_TYPE_VIDEO`',
    }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The timestamp when the creative was last updated, either by the user or system (e.g. creative review). Assigned by the system.',
        readOnly: true,
      }),
    vastTagUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The URL of the VAST tag for a third-party VAST tag creative. Required and only valid for third-party VAST tag creatives. Third-party VAST tag creatives are creatives with following hosting_source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_AUDIO` * `CREATIVE_TYPE_VIDEO`',
      }),
    vpaid: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Indicates the third-party VAST tag creative requires VPAID (Digital Video Player-Ad Interface). Output only and only valid for third-party VAST tag creatives. Third-party VAST tag creatives are creatives with following hosting_source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_VIDEO`',
        readOnly: true,
      }),
  })
  .openapi({ description: 'A single Creative.', required: [] })
  .openapi('Creative')

const CreativeConfigSchema: z.ZodType<CreativeConfigType> = z
  .lazy(() =>
    z
      .object({
        creativeType: z
          .enum([
            'CREATIVE_TYPE_UNSPECIFIED',
            'CREATIVE_TYPE_STANDARD',
            'CREATIVE_TYPE_EXPANDABLE',
            'CREATIVE_TYPE_VIDEO',
            'CREATIVE_TYPE_NATIVE',
            'CREATIVE_TYPE_TEMPLATED_APP_INSTALL',
            'CREATIVE_TYPE_NATIVE_SITE_SQUARE',
            'CREATIVE_TYPE_TEMPLATED_APP_INSTALL_INTERSTITIAL',
            'CREATIVE_TYPE_LIGHTBOX',
            'CREATIVE_TYPE_NATIVE_APP_INSTALL',
            'CREATIVE_TYPE_NATIVE_APP_INSTALL_SQUARE',
            'CREATIVE_TYPE_AUDIO',
            'CREATIVE_TYPE_PUBLISHER_HOSTED',
            'CREATIVE_TYPE_NATIVE_VIDEO',
            'CREATIVE_TYPE_TEMPLATED_APP_INSTALL_VIDEO',
          ])
          .exactOptional()
          .openapi({
            description:
              'The type of creative that can be assigned to the inventory source. Only the following types are supported: * `CREATIVE_TYPE_STANDARD` * `CREATIVE_TYPE_VIDEO`',
          }),
        displayCreativeConfig: InventorySourceDisplayCreativeConfigSchema.exactOptional().openapi({
          description:
            'The configuration for display creatives. Applicable when creative_type is `CREATIVE_TYPE_STANDARD`.',
        }),
        videoCreativeConfig: InventorySourceVideoCreativeConfigSchema.exactOptional().openapi({
          description:
            'The configuration for video creatives. Applicable when creative_type is `CREATIVE_TYPE_VIDEO`.',
        }),
      })
      .openapi({
        description: 'Creative requirements configuration for the inventory source.',
        required: [],
      }),
  )
  .openapi('CreativeConfig')

const CustomBiddingModelDetailsSchema = z
  .object({
    advertiserId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique ID of the relevant advertiser.' }),
    readinessState: z
      .enum([
        'READINESS_STATE_UNSPECIFIED',
        'READINESS_STATE_ACTIVE',
        'READINESS_STATE_INSUFFICIENT_DATA',
        'READINESS_STATE_TRAINING',
        'READINESS_STATE_NO_VALID_SCRIPT',
      ])
      .exactOptional()
      .openapi({ description: 'The readiness state of custom bidding model.' }),
    suspensionState: z
      .enum([
        'SUSPENSION_STATE_UNSPECIFIED',
        'SUSPENSION_STATE_ENABLED',
        'SUSPENSION_STATE_DORMANT',
        'SUSPENSION_STATE_SUSPENDED',
      ])
      .exactOptional()
      .openapi({
        description: 'Output only. The suspension state of custom bidding model.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'The details of a custom bidding algorithm model for a single shared advertiser.',
    required: [],
  })
  .openapi('CustomBiddingModelDetails')

const CustomBiddingAlgorithmSchema = z
  .object({
    advertiserId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. The unique ID of the advertiser that owns the custom bidding algorithm.',
      }),
    customBiddingAlgorithmId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The unique ID of the custom bidding algorithm. Assigned by the system.',
        readOnly: true,
      }),
    customBiddingAlgorithmType: z
      .enum([
        'CUSTOM_BIDDING_ALGORITHM_TYPE_UNSPECIFIED',
        'SCRIPT_BASED',
        'ADS_DATA_HUB_BASED',
        'GOAL_BUILDER_BASED',
      ])
      .exactOptional()
      .openapi({ description: 'Required. Immutable. The type of custom bidding algorithm.' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The display name of the custom bidding algorithm. Must be UTF-8 encoded with a maximum size of 240 bytes.',
      }),
    entityStatus: z
      .enum([
        'ENTITY_STATUS_UNSPECIFIED',
        'ENTITY_STATUS_ACTIVE',
        'ENTITY_STATUS_ARCHIVED',
        'ENTITY_STATUS_DRAFT',
        'ENTITY_STATUS_PAUSED',
        'ENTITY_STATUS_SCHEDULED_FOR_DELETION',
      ])
      .exactOptional()
      .openapi({
        description:
          'Controls whether or not the custom bidding algorithm can be used as a bidding strategy. Accepted values are: * `ENTITY_STATUS_ACTIVE` * `ENTITY_STATUS_ARCHIVED`',
      }),
    modelDetails: z
      .array(CustomBiddingModelDetailsSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. The details of custom bidding models for each advertiser who has access. This field may only include the details of the queried advertiser if the algorithm [`owner`](/display-video/api/reference/rest/v1/customBiddingAlgorithms#CustomBiddingAlgorithm.FIELDS.oneof_owner) is a partner and is being retrieved using an advertiser [`accessor`](/display-video/api/reference/rest/v1/customBiddingAlgorithms/list#body.QUERY_PARAMETERS.oneof_accessor).',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The resource name of the custom bidding algorithm.',
        readOnly: true,
      }),
    partnerId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. The unique ID of the partner that owns the custom bidding algorithm.',
      }),
    sharedAdvertiserIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The IDs of the advertisers who have access to this algorithm. If advertiser_id is set, this field will only consist of that value. This field will not be set if the algorithm [`owner`](/display-video/api/reference/rest/v1/customBiddingAlgorithms#CustomBiddingAlgorithm.FIELDS.oneof_owner) is a partner and is being retrieved using an advertiser [`accessor`](/display-video/api/reference/rest/v1/customBiddingAlgorithms/list#body.QUERY_PARAMETERS.oneof_accessor).',
      }),
  })
  .openapi({ description: 'A single custom bidding algorithm.', required: [] })
  .openapi('CustomBiddingAlgorithm')

const ScriptErrorSchema = z
  .object({
    column: z
      .string()
      .exactOptional()
      .openapi({ description: 'The column number in the script where the error was thrown.' }),
    errorCode: z
      .enum(['ERROR_CODE_UNSPECIFIED', 'SYNTAX_ERROR', 'DEPRECATED_SYNTAX', 'INTERNAL_ERROR'])
      .exactOptional()
      .openapi({ description: 'The type of error.' }),
    errorMessage: z
      .string()
      .exactOptional()
      .openapi({ description: 'The detailed error message.' }),
    line: z
      .string()
      .exactOptional()
      .openapi({ description: 'The line number in the script where the error was thrown.' }),
  })
  .openapi({ description: 'An error message for a custom bidding script.', required: [] })
  .openapi('ScriptError')

const CustomBiddingScriptRefSchema = z
  .object({
    resourceName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A resource name to be used in media.download to Download the script files. Or media.upload to Upload the script files. Resource names have the format `customBiddingAlgorithms/{custom_bidding_algorithm_id}/scriptRef/{ref_id}`.',
      }),
  })
  .openapi({
    description: 'The reference to the uploaded custom bidding script file.',
    required: [],
  })
  .openapi('CustomBiddingScriptRef')

const CustomBiddingScriptSchema = z
  .object({
    active: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Whether the script is currently being used for scoring by the parent algorithm.',
        readOnly: true,
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time when the script was created.',
        readOnly: true,
      }),
    customBiddingAlgorithmId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The unique ID of the custom bidding algorithm the script belongs to.',
        readOnly: true,
      }),
    customBiddingScriptId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The unique ID of the custom bidding script.',
        readOnly: true,
      }),
    errors: z
      .array(ScriptErrorSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. Error details of a rejected custom bidding script. This field will only be populated when Script.state is REJECTED.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The resource name of the custom bidding script.',
        readOnly: true,
      }),
    script: CustomBiddingScriptRefSchema.exactOptional().openapi({
      description: 'The reference to the uploaded script file.',
    }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'ACCEPTED', 'REJECTED', 'PENDING'])
      .exactOptional()
      .openapi({
        description: 'Output only. The state of the custom bidding script.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'A single custom bidding script.', required: [] })
  .openapi('CustomBiddingScript')

const CustomLabelSchema = z
  .object({
    key: z
      .enum([
        'CUSTOM_LABEL_KEY_UNSPECIFIED',
        'CUSTOM_LABEL_KEY_0',
        'CUSTOM_LABEL_KEY_1',
        'CUSTOM_LABEL_KEY_2',
        'CUSTOM_LABEL_KEY_3',
        'CUSTOM_LABEL_KEY_4',
      ])
      .exactOptional()
      .openapi({ description: 'The key of the label.' }),
    value: z.string().exactOptional().openapi({ description: 'The value of the label.' }),
  })
  .openapi({ description: 'The key and value of a custom label.', required: [] })
  .openapi('CustomLabel')

const CustomListSchema = z
  .object({
    customListId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The unique ID of the custom list. Assigned by the system.',
        readOnly: true,
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The display name of the custom list. .',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The resource name of the custom list.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Describes a custom list entity, such as a custom affinity or custom intent audience list.',
    required: [],
  })
  .openapi('CustomList')

const DeactivateManualTriggerRequestSchema = z
  .object({})
  .openapi({ description: 'Request message for ManualTriggerService.DeactivateManualTrigger.' })
  .openapi('DeactivateManualTriggerRequest')

const DeviceMakeModelTargetingOptionDetailsSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The display name of the device make and model.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Represents a targetable device make and model. This will be populated in the device_make_model_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_DEVICE_MAKE_MODEL`.',
    required: [],
  })
  .openapi('DeviceMakeModelTargetingOptionDetails')

const DeviceTypeTargetingOptionDetailsSchema = z
  .object({
    deviceType: z
      .enum([
        'DEVICE_TYPE_UNSPECIFIED',
        'DEVICE_TYPE_COMPUTER',
        'DEVICE_TYPE_CONNECTED_TV',
        'DEVICE_TYPE_SMART_PHONE',
        'DEVICE_TYPE_TABLET',
      ])
      .exactOptional()
      .openapi({
        description: 'Output only. The device type that is used to be targeted.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Represents a targetable device type. This will be populated in the device_type_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_DEVICE_TYPE`.',
    required: [],
  })
  .openapi('DeviceTypeTargetingOptionDetails')

const DigitalContentLabelTargetingOptionDetailsSchema = z
  .object({
    contentRatingTier: z
      .enum([
        'CONTENT_RATING_TIER_UNSPECIFIED',
        'CONTENT_RATING_TIER_UNRATED',
        'CONTENT_RATING_TIER_GENERAL',
        'CONTENT_RATING_TIER_PARENTAL_GUIDANCE',
        'CONTENT_RATING_TIER_TEENS',
        'CONTENT_RATING_TIER_MATURE',
        'CONTENT_RATING_TIER_FAMILIES',
      ])
      .exactOptional()
      .openapi({
        description: 'Output only. An enum for the content label brand safety tiers.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Represents a targetable digital content label rating tier. This will be populated in the digital_content_label_details field of the TargetingOption when targeting_type is `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION`.',
    required: [],
  })
  .openapi('DigitalContentLabelTargetingOptionDetails')

const DisplayVideoSourceAdSchema = z
  .object({
    creativeId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the source creative.' }),
  })
  .openapi({ description: 'The ad sourced from a DV360 creative.', required: [] })
  .openapi('DisplayVideoSourceAd')

const DuplicateLineItemRequestSchema = z
  .object({
    targetDisplayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The display name of the new line item. Must be UTF-8 encoded with a maximum size of 240 bytes.',
      }),
  })
  .openapi({ description: 'Request message for LineItemService.DuplicateLineItem.', required: [] })
  .openapi('DuplicateLineItemRequest')

const DuplicateLineItemResponseSchema = z
  .object({
    duplicateLineItemId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the created line item.' }),
  })
  .openapi({ required: [] })
  .openapi('DuplicateLineItemResponse')

const MobileDeviceIdListSchema = z
  .object({
    mobileDeviceIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "A list of mobile device IDs defining Customer Match audience members. The size of mobile_device_ids mustn't be greater than 500,000.",
      }),
  })
  .openapi({
    description:
      'Wrapper message for a list of mobile device IDs defining Customer Match audience members.',
    required: [],
  })
  .openapi('MobileDeviceIdList')

const EditCustomerMatchMembersRequestSchema = z
  .object({
    addedContactInfoList: ContactInfoListSchema.exactOptional().openapi({
      description: 'Input only. A list of contact information to define the members to be added.',
    }),
    addedMobileDeviceIdList: MobileDeviceIdListSchema.exactOptional().openapi({
      description: 'Input only. A list of mobile device IDs to define the members to be added.',
    }),
    advertiserId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The ID of the owner advertiser of the updated Customer Match FirstAndThirdPartyAudience.',
      }),
  })
  .openapi({
    description: 'Request message for FirstAndThirdPartyAudienceService.EditCustomerMatchMembers.',
    required: [],
  })
  .openapi('EditCustomerMatchMembersRequest')

const EditCustomerMatchMembersResponseSchema = z
  .object({
    firstAndThirdPartyAudienceId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. The ID of the updated Customer Match FirstAndThirdPartyAudience.',
      }),
  })
  .openapi({
    description: 'The response of FirstAndThirdPartyAudienceService.EditCustomerMatchMembers.',
    required: [],
  })
  .openapi('EditCustomerMatchMembersResponse')

const EditGuaranteedOrderReadAccessorsRequestSchema = z
  .object({
    addedAdvertisers: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'The advertisers to add as read accessors to the guaranteed order.',
      }),
    partnerId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The partner context in which the change is being made.' }),
    readAccessInherited: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether to give all advertisers of the read/write accessor partner read access to the guaranteed order. Only applicable if read_write_partner_id is set in the guaranteed order.',
      }),
    removedAdvertisers: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'The advertisers to remove as read accessors to the guaranteed order.',
      }),
  })
  .openapi({
    description: 'Request message for GuaranteedOrderService.EditGuaranteedOrderReadAccessors.',
    required: [],
  })
  .openapi('EditGuaranteedOrderReadAccessorsRequest')

const EditGuaranteedOrderReadAccessorsResponseSchema = z
  .object({
    readAccessInherited: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether all advertisers of read_write_partner_id have read access to the guaranteed order.',
      }),
    readAdvertiserIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The IDs of advertisers with read access to the guaranteed order.' }),
  })
  .openapi({ required: [] })
  .openapi('EditGuaranteedOrderReadAccessorsResponse')

const EditInventorySourceReadWriteAccessorsRequestAdvertisersUpdateSchema = z
  .object({
    addedAdvertisers: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The advertisers to add.' }),
    removedAdvertisers: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The advertisers to remove.' }),
  })
  .openapi({
    description:
      'Update to the list of advertisers with read/write access to the inventory source.',
    required: [],
  })
  .openapi('EditInventorySourceReadWriteAccessorsRequestAdvertisersUpdate')

const EditInventorySourceReadWriteAccessorsRequestSchema = z
  .object({
    advertisersUpdate:
      EditInventorySourceReadWriteAccessorsRequestAdvertisersUpdateSchema.exactOptional().openapi({
        description:
          'The advertisers to add or remove from the list of advertisers that have read/write access to the inventory source. This change will remove an existing partner read/write accessor.',
      }),
    assignPartner: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Set the partner context as read/write accessor of the inventory source. This will remove all other current read/write advertiser accessors.',
      }),
    partnerId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. The partner context by which the accessors change is being made.',
      }),
  })
  .openapi({
    description:
      'Request message for InventorySourceService.EditInventorySourceReadWriteAccessors.',
    required: [],
  })
  .openapi('EditInventorySourceReadWriteAccessorsRequest')

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('Empty')

const EnvironmentTargetingOptionDetailsSchema = z
  .object({
    environment: z
      .enum([
        'ENVIRONMENT_UNSPECIFIED',
        'ENVIRONMENT_WEB_OPTIMIZED',
        'ENVIRONMENT_WEB_NOT_OPTIMIZED',
        'ENVIRONMENT_APP',
      ])
      .exactOptional()
      .openapi({ description: 'Output only. The serving environment.', readOnly: true }),
  })
  .openapi({
    description:
      'Represents a targetable environment. This will be populated in the environment_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_ENVIRONMENT`.',
    required: [],
  })
  .openapi('EnvironmentTargetingOptionDetails')

const ExchangeConfigEnabledExchangeSchema = z
  .object({
    exchange: z
      .enum([
        'EXCHANGE_UNSPECIFIED',
        'EXCHANGE_GOOGLE_AD_MANAGER',
        'EXCHANGE_APPNEXUS',
        'EXCHANGE_BRIGHTROLL',
        'EXCHANGE_ADFORM',
        'EXCHANGE_ADMETA',
        'EXCHANGE_ADMIXER',
        'EXCHANGE_ADSMOGO',
        'EXCHANGE_ADSWIZZ',
        'EXCHANGE_BIDSWITCH',
        'EXCHANGE_BRIGHTROLL_DISPLAY',
        'EXCHANGE_CADREON',
        'EXCHANGE_DAILYMOTION',
        'EXCHANGE_FIVE',
        'EXCHANGE_FLUCT',
        'EXCHANGE_FREEWHEEL',
        'EXCHANGE_GENIEE',
        'EXCHANGE_GUMGUM',
        'EXCHANGE_IMOBILE',
        'EXCHANGE_IBILLBOARD',
        'EXCHANGE_IMPROVE_DIGITAL',
        'EXCHANGE_INDEX',
        'EXCHANGE_KARGO',
        'EXCHANGE_MICROAD',
        'EXCHANGE_MOPUB',
        'EXCHANGE_NEND',
        'EXCHANGE_ONE_BY_AOL_DISPLAY',
        'EXCHANGE_ONE_BY_AOL_MOBILE',
        'EXCHANGE_ONE_BY_AOL_VIDEO',
        'EXCHANGE_OOYALA',
        'EXCHANGE_OPENX',
        'EXCHANGE_PERMODO',
        'EXCHANGE_PLATFORMONE',
        'EXCHANGE_PLATFORMID',
        'EXCHANGE_PUBMATIC',
        'EXCHANGE_PULSEPOINT',
        'EXCHANGE_REVENUEMAX',
        'EXCHANGE_RUBICON',
        'EXCHANGE_SMARTCLIP',
        'EXCHANGE_SMARTRTB',
        'EXCHANGE_SMARTSTREAMTV',
        'EXCHANGE_SOVRN',
        'EXCHANGE_SPOTXCHANGE',
        'EXCHANGE_STROER',
        'EXCHANGE_TEADSTV',
        'EXCHANGE_TELARIA',
        'EXCHANGE_TVN',
        'EXCHANGE_UNITED',
        'EXCHANGE_YIELDLAB',
        'EXCHANGE_YIELDMO',
        'EXCHANGE_UNRULYX',
        'EXCHANGE_OPEN8',
        'EXCHANGE_TRITON',
        'EXCHANGE_TRIPLELIFT',
        'EXCHANGE_TABOOLA',
        'EXCHANGE_INMOBI',
        'EXCHANGE_SMAATO',
        'EXCHANGE_AJA',
        'EXCHANGE_SUPERSHIP',
        'EXCHANGE_NEXSTAR_DIGITAL',
        'EXCHANGE_WAZE',
        'EXCHANGE_SOUNDCAST',
        'EXCHANGE_SHARETHROUGH',
        'EXCHANGE_FYBER',
        'EXCHANGE_RED_FOR_PUBLISHERS',
        'EXCHANGE_MEDIANET',
        'EXCHANGE_TAPJOY',
        'EXCHANGE_VISTAR',
        'EXCHANGE_DAX',
        'EXCHANGE_JCD',
        'EXCHANGE_PLACE_EXCHANGE',
        'EXCHANGE_APPLOVIN',
        'EXCHANGE_CONNATIX',
        'EXCHANGE_RESET_DIGITAL',
        'EXCHANGE_HIVESTACK',
      ])
      .exactOptional()
      .openapi({ description: 'The enabled exchange.' }),
    googleAdManagerAgencyId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Agency ID of Google Ad Manager. The field is only relevant when Google Ad Manager is the enabled exchange.',
        readOnly: true,
      }),
    googleAdManagerBuyerNetworkId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Network ID of Google Ad Manager. The field is only relevant when Google Ad Manager is the enabled exchange.',
        readOnly: true,
      }),
    seatId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Seat ID of the enabled exchange.', readOnly: true }),
  })
  .openapi({ description: 'An enabled exchange in the partner.', required: [] })
  .openapi('ExchangeConfigEnabledExchange')

const ExchangeConfigSchema = z
  .object({
    enabledExchanges: z
      .array(ExchangeConfigEnabledExchangeSchema)
      .exactOptional()
      .openapi({
        description:
          'All enabled exchanges in the partner. Duplicate enabled exchanges will be ignored.',
      }),
  })
  .openapi({
    description: 'Settings that control which exchanges are enabled for a partner.',
    required: [],
  })
  .openapi('ExchangeConfig')

const ExchangeTargetingOptionDetailsSchema = z
  .object({
    exchange: z
      .enum([
        'EXCHANGE_UNSPECIFIED',
        'EXCHANGE_GOOGLE_AD_MANAGER',
        'EXCHANGE_APPNEXUS',
        'EXCHANGE_BRIGHTROLL',
        'EXCHANGE_ADFORM',
        'EXCHANGE_ADMETA',
        'EXCHANGE_ADMIXER',
        'EXCHANGE_ADSMOGO',
        'EXCHANGE_ADSWIZZ',
        'EXCHANGE_BIDSWITCH',
        'EXCHANGE_BRIGHTROLL_DISPLAY',
        'EXCHANGE_CADREON',
        'EXCHANGE_DAILYMOTION',
        'EXCHANGE_FIVE',
        'EXCHANGE_FLUCT',
        'EXCHANGE_FREEWHEEL',
        'EXCHANGE_GENIEE',
        'EXCHANGE_GUMGUM',
        'EXCHANGE_IMOBILE',
        'EXCHANGE_IBILLBOARD',
        'EXCHANGE_IMPROVE_DIGITAL',
        'EXCHANGE_INDEX',
        'EXCHANGE_KARGO',
        'EXCHANGE_MICROAD',
        'EXCHANGE_MOPUB',
        'EXCHANGE_NEND',
        'EXCHANGE_ONE_BY_AOL_DISPLAY',
        'EXCHANGE_ONE_BY_AOL_MOBILE',
        'EXCHANGE_ONE_BY_AOL_VIDEO',
        'EXCHANGE_OOYALA',
        'EXCHANGE_OPENX',
        'EXCHANGE_PERMODO',
        'EXCHANGE_PLATFORMONE',
        'EXCHANGE_PLATFORMID',
        'EXCHANGE_PUBMATIC',
        'EXCHANGE_PULSEPOINT',
        'EXCHANGE_REVENUEMAX',
        'EXCHANGE_RUBICON',
        'EXCHANGE_SMARTCLIP',
        'EXCHANGE_SMARTRTB',
        'EXCHANGE_SMARTSTREAMTV',
        'EXCHANGE_SOVRN',
        'EXCHANGE_SPOTXCHANGE',
        'EXCHANGE_STROER',
        'EXCHANGE_TEADSTV',
        'EXCHANGE_TELARIA',
        'EXCHANGE_TVN',
        'EXCHANGE_UNITED',
        'EXCHANGE_YIELDLAB',
        'EXCHANGE_YIELDMO',
        'EXCHANGE_UNRULYX',
        'EXCHANGE_OPEN8',
        'EXCHANGE_TRITON',
        'EXCHANGE_TRIPLELIFT',
        'EXCHANGE_TABOOLA',
        'EXCHANGE_INMOBI',
        'EXCHANGE_SMAATO',
        'EXCHANGE_AJA',
        'EXCHANGE_SUPERSHIP',
        'EXCHANGE_NEXSTAR_DIGITAL',
        'EXCHANGE_WAZE',
        'EXCHANGE_SOUNDCAST',
        'EXCHANGE_SHARETHROUGH',
        'EXCHANGE_FYBER',
        'EXCHANGE_RED_FOR_PUBLISHERS',
        'EXCHANGE_MEDIANET',
        'EXCHANGE_TAPJOY',
        'EXCHANGE_VISTAR',
        'EXCHANGE_DAX',
        'EXCHANGE_JCD',
        'EXCHANGE_PLACE_EXCHANGE',
        'EXCHANGE_APPLOVIN',
        'EXCHANGE_CONNATIX',
        'EXCHANGE_RESET_DIGITAL',
        'EXCHANGE_HIVESTACK',
      ])
      .exactOptional()
      .openapi({ description: 'Output only. The type of exchange.', readOnly: true }),
  })
  .openapi({
    description:
      'Represents a targetable exchange. This will be populated in the exchange_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_EXCHANGE`.',
    required: [],
  })
  .openapi('ExchangeTargetingOptionDetails')

const FirstAndThirdPartyAudienceSchema = z
  .object({
    activeDisplayAudienceSize: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The estimated audience size for the Display network in the past month. If the size is less than 1000, the number will be hidden and 0 will be returned due to privacy reasons. Otherwise, the number will be rounded off to two significant digits. Only returned in GET request.',
        readOnly: true,
      }),
    appId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The app_id matches with the type of the mobile_device_ids being uploaded. Only applicable to audience_type `CUSTOMER_MATCH_DEVICE_ID`',
      }),
    audienceSource: z
      .enum([
        'AUDIENCE_SOURCE_UNSPECIFIED',
        'DISPLAY_VIDEO_360',
        'CAMPAIGN_MANAGER',
        'AD_MANAGER',
        'SEARCH_ADS_360',
        'YOUTUBE',
        'ADS_DATA_HUB',
      ])
      .exactOptional()
      .openapi({ description: 'Output only. The source of the audience.', readOnly: true }),
    audienceType: z
      .enum([
        'AUDIENCE_TYPE_UNSPECIFIED',
        'CUSTOMER_MATCH_CONTACT_INFO',
        'CUSTOMER_MATCH_DEVICE_ID',
        'CUSTOMER_MATCH_USER_ID',
        'ACTIVITY_BASED',
        'FREQUENCY_CAP',
        'TAG_BASED',
        'YOUTUBE_USERS',
        'LICENSED',
      ])
      .exactOptional()
      .openapi({ description: 'The type of the audience.' }),
    contactInfoList: ContactInfoListSchema.exactOptional().openapi({
      description:
        'Input only. A list of contact information to define the initial audience members. Only applicable to audience_type `CUSTOMER_MATCH_CONTACT_INFO`',
    }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The user-provided description of the audience. Only applicable to first party audiences.',
      }),
    displayAudienceSize: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The estimated audience size for the Display network. If the size is less than 1000, the number will be hidden and 0 will be returned due to privacy reasons. Otherwise, the number will be rounded off to two significant digits. Only returned in GET request.',
        readOnly: true,
      }),
    displayDesktopAudienceSize: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The estimated desktop audience size in Display network. If the size is less than 1000, the number will be hidden and 0 will be returned due to privacy reasons. Otherwise, the number will be rounded off to two significant digits. Only applicable to first party audiences. Only returned in GET request.',
        readOnly: true,
      }),
    displayMobileAppAudienceSize: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The estimated mobile app audience size in Display network. If the size is less than 1000, the number will be hidden and 0 will be returned due to privacy reasons. Otherwise, the number will be rounded off to two significant digits. Only applicable to first party audiences. Only returned in GET request.',
        readOnly: true,
      }),
    displayMobileWebAudienceSize: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The estimated mobile web audience size in Display network. If the size is less than 1000, the number will be hidden and 0 will be returned due to privacy reasons. Otherwise, the number will be rounded off to two significant digits. Only applicable to first party audiences. Only returned in GET request.',
        readOnly: true,
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The display name of the first and third party audience.' }),
    firstAndThirdPartyAudienceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The unique ID of the first and third party audience. Assigned by the system.',
        readOnly: true,
      }),
    firstAndThirdPartyAudienceType: z
      .enum([
        'FIRST_AND_THIRD_PARTY_AUDIENCE_TYPE_UNSPECIFIED',
        'FIRST_AND_THIRD_PARTY_AUDIENCE_TYPE_FIRST_PARTY',
        'FIRST_AND_THIRD_PARTY_AUDIENCE_TYPE_THIRD_PARTY',
      ])
      .exactOptional()
      .openapi({ description: 'Whether the audience is a first or third party audience.' }),
    gmailAudienceSize: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The estimated audience size for Gmail network. If the size is less than 1000, the number will be hidden and 0 will be returned due to privacy reasons. Otherwise, the number will be rounded off to two significant digits. Only applicable to first party audiences. Only returned in GET request.',
        readOnly: true,
      }),
    membershipDurationDays: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The duration in days that an entry remains in the audience after the qualifying event. If the audience has no expiration, set the value of this field to 10000. Otherwise, the set value must be greater than 0 and less than or equal to 540. Only applicable to first party audiences. This field is required if one of the following audience_type is used: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`',
      }),
    mobileDeviceIdList: MobileDeviceIdListSchema.exactOptional().openapi({
      description:
        'Input only. A list of mobile device IDs to define the initial audience members. Only applicable to audience_type `CUSTOMER_MATCH_DEVICE_ID`',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The resource name of the first and third party audience.',
        readOnly: true,
      }),
    youtubeAudienceSize: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The estimated audience size for YouTube network. If the size is less than 1000, the number will be hidden and 0 will be returned due to privacy reasons. Otherwise, the number will be rounded off to two significant digits. Only applicable to first party audiences. Only returned in GET request.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Describes a first or third party audience list used for targeting. First party audiences are created via usage of client data. Third party audiences are provided by Third Party data providers and can only be licensed to customers.',
    required: [],
  })
  .openapi('FirstAndThirdPartyAudience')

const LookbackWindowSchema = z
  .object({
    clickDays: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Lookback window, in days, from the last time a given user clicked on one of your ads.',
      }),
    impressionDays: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Lookback window, in days, from the last time a given user viewed one of your ads.',
      }),
  })
  .openapi({
    description:
      'Specifies how many days into the past to look when determining whether to record a conversion.',
    required: [],
  })
  .openapi('LookbackWindow')

const FloodlightGroupSchema = z
  .object({
    activeViewConfig: ActiveViewVideoViewabilityMetricConfigSchema.exactOptional().openapi({
      description:
        'The Active View video viewability metric configuration for the Floodlight group.',
    }),
    customVariables: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional()
      .openapi({
        description:
          'User-defined custom variables owned by the Floodlight group. Use custom Floodlight variables to create reporting data that is tailored to your unique business needs. Custom Floodlight variables use the keys `U1=`, `U2=`, and so on, and can take any values that you choose to pass to them. You can use them to track virtually any type of data that you collect about your customers, such as the genre of movie that a customer purchases, the country to which the item is shipped, and so on. Custom Floodlight variables may not be used to pass any data that could be used or recognized as personally identifiable information (PII). Example: `custom_variables { fields { "U1": value { number_value: 123.4 }, "U2": value { string_value: "MyVariable2" }, "U3": value { string_value: "MyVariable3" } } }` Acceptable values for keys are "U1" through "U100", inclusive. String values must be less than 64 characters long, and cannot contain the following characters: `"<>`.',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The display name of the Floodlight group.' }),
    floodlightGroupId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The unique ID of the Floodlight group. Assigned by the system.',
        readOnly: true,
      }),
    lookbackWindow: LookbackWindowSchema.exactOptional().openapi({
      description:
        'Required. The lookback window for the Floodlight group. Both click_days and impression_days are required. Acceptable values for both are `0` to `90`, inclusive.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The resource name of the Floodlight group.',
        readOnly: true,
      }),
    webTagType: z
      .enum([
        'WEB_TAG_TYPE_UNSPECIFIED',
        'WEB_TAG_TYPE_NONE',
        'WEB_TAG_TYPE_IMAGE',
        'WEB_TAG_TYPE_DYNAMIC',
      ])
      .exactOptional()
      .openapi({ description: 'Required. The web tag type enabled for the Floodlight group.' }),
  })
  .openapi({ description: 'A single Floodlight group.', required: [] })
  .openapi('FloodlightGroup')

const GenderTargetingOptionDetailsSchema = z
  .object({
    gender: z
      .enum(['GENDER_UNSPECIFIED', 'GENDER_MALE', 'GENDER_FEMALE', 'GENDER_UNKNOWN'])
      .exactOptional()
      .openapi({ description: 'Output only. The gender of an audience.', readOnly: true }),
  })
  .openapi({
    description:
      'Represents a targetable gender. This will be populated in the gender_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_GENDER`.',
    required: [],
  })
  .openapi('GenderTargetingOptionDetails')

const GenerateDefaultLineItemRequestSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The display name of the line item. Must be UTF-8 encoded with a maximum size of 240 bytes.',
      }),
    insertionOrderId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The unique ID of the insertion order that the line item belongs to.',
      }),
    lineItemType: z
      .enum([
        'LINE_ITEM_TYPE_UNSPECIFIED',
        'LINE_ITEM_TYPE_DISPLAY_DEFAULT',
        'LINE_ITEM_TYPE_DISPLAY_MOBILE_APP_INSTALL',
        'LINE_ITEM_TYPE_VIDEO_DEFAULT',
        'LINE_ITEM_TYPE_VIDEO_MOBILE_APP_INSTALL',
        'LINE_ITEM_TYPE_DISPLAY_MOBILE_APP_INVENTORY',
        'LINE_ITEM_TYPE_VIDEO_MOBILE_APP_INVENTORY',
        'LINE_ITEM_TYPE_AUDIO_DEFAULT',
        'LINE_ITEM_TYPE_VIDEO_OVER_THE_TOP',
        'LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_ACTION',
        'LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_NON_SKIPPABLE',
        'LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_VIDEO_SEQUENCE',
        'LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_AUDIO',
        'LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_REACH',
        'LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_SIMPLE',
        'LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_NON_SKIPPABLE_OVER_THE_TOP',
        'LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_REACH_OVER_THE_TOP',
        'LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_SIMPLE_OVER_THE_TOP',
        'LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_TARGET_FREQUENCY',
      ])
      .exactOptional()
      .openapi({ description: 'Required. The type of the line item.' }),
    mobileApp: MobileAppSchema.exactOptional().openapi({
      description:
        'The mobile app promoted by the line item. This is applicable only when line_item_type is either `LINE_ITEM_TYPE_DISPLAY_MOBILE_APP_INSTALL` or `LINE_ITEM_TYPE_VIDEO_MOBILE_APP_INSTALL`.',
    }),
  })
  .openapi({
    description: 'Request message for LineItemService.GenerateDefaultLineItem.',
    required: [],
  })
  .openapi('GenerateDefaultLineItemRequest')

const GeoRegionSearchTermsSchema = z
  .object({
    geoRegionQuery: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The search query for the desired geo region. The query can be a prefix, e.g. "New Yor", "Seattle", "USA", etc.',
      }),
  })
  .openapi({ description: 'Search terms for geo region targeting options.', required: [] })
  .openapi('GeoRegionSearchTerms')

const GeoRegionTargetingOptionDetailsSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The display name of the geographic region (e.g., "Ontario, Canada").',
        readOnly: true,
      }),
    geoRegionType: z
      .enum([
        'GEO_REGION_TYPE_UNKNOWN',
        'GEO_REGION_TYPE_OTHER',
        'GEO_REGION_TYPE_COUNTRY',
        'GEO_REGION_TYPE_REGION',
        'GEO_REGION_TYPE_TERRITORY',
        'GEO_REGION_TYPE_PROVINCE',
        'GEO_REGION_TYPE_STATE',
        'GEO_REGION_TYPE_PREFECTURE',
        'GEO_REGION_TYPE_GOVERNORATE',
        'GEO_REGION_TYPE_CANTON',
        'GEO_REGION_TYPE_UNION_TERRITORY',
        'GEO_REGION_TYPE_AUTONOMOUS_COMMUNITY',
        'GEO_REGION_TYPE_DMA_REGION',
        'GEO_REGION_TYPE_METRO',
        'GEO_REGION_TYPE_CONGRESSIONAL_DISTRICT',
        'GEO_REGION_TYPE_COUNTY',
        'GEO_REGION_TYPE_MUNICIPALITY',
        'GEO_REGION_TYPE_CITY',
        'GEO_REGION_TYPE_POSTAL_CODE',
        'GEO_REGION_TYPE_DEPARTMENT',
        'GEO_REGION_TYPE_AIRPORT',
        'GEO_REGION_TYPE_TV_REGION',
        'GEO_REGION_TYPE_OKRUG',
        'GEO_REGION_TYPE_BOROUGH',
        'GEO_REGION_TYPE_CITY_REGION',
        'GEO_REGION_TYPE_ARRONDISSEMENT',
        'GEO_REGION_TYPE_NEIGHBORHOOD',
        'GEO_REGION_TYPE_UNIVERSITY',
        'GEO_REGION_TYPE_DISTRICT',
      ])
      .exactOptional()
      .openapi({
        description: 'Output only. The type of geographic region targeting.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Represents a targetable geographic region. This will be populated in the geo_region_details field when targeting_type is `TARGETING_TYPE_GEO_REGION`.',
    required: [],
  })
  .openapi('GeoRegionTargetingOptionDetails')

const GoogleAudienceSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The display name of the Google audience. .',
        readOnly: true,
      }),
    googleAudienceId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The unique ID of the Google audience. Assigned by the system.',
        readOnly: true,
      }),
    googleAudienceType: z
      .enum([
        'GOOGLE_AUDIENCE_TYPE_UNSPECIFIED',
        'GOOGLE_AUDIENCE_TYPE_AFFINITY',
        'GOOGLE_AUDIENCE_TYPE_IN_MARKET',
        'GOOGLE_AUDIENCE_TYPE_INSTALLED_APPS',
        'GOOGLE_AUDIENCE_TYPE_NEW_MOBILE_DEVICES',
        'GOOGLE_AUDIENCE_TYPE_LIFE_EVENT',
        'GOOGLE_AUDIENCE_TYPE_EXTENDED_DEMOGRAPHIC',
      ])
      .exactOptional()
      .openapi({ description: 'Output only. The type of Google audience. .', readOnly: true }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The resource name of the google audience.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'Describes a Google audience resource. Includes Google audience lists.',
    required: [],
  })
  .openapi('GoogleAudience')

const GoogleBytestreamMediaSchema = z
  .object({
    resourceName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the media resource.' }),
  })
  .openapi({ description: 'Media resource.', required: [] })
  .openapi('GoogleBytestreamMedia')

const GuaranteedOrderStatusSchema = z
  .object({
    configStatus: z
      .enum(['GUARANTEED_ORDER_CONFIG_STATUS_UNSPECIFIED', 'PENDING', 'COMPLETED'])
      .exactOptional()
      .openapi({
        description:
          'Output only. The configuration status of the guaranteed order. Acceptable values are `PENDING` and `COMPLETED`. A guaranteed order must be configured (fill in the required fields, choose creatives, and select a default campaign) before it can serve. Currently the configuration action can only be performed via UI.',
        readOnly: true,
      }),
    entityPauseReason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The user-provided reason for pausing this guaranteed order. Must be UTF-8 encoded with a maximum length of 100 bytes. Only applicable when entity_status is set to `ENTITY_STATUS_PAUSED`.',
      }),
    entityStatus: z
      .enum([
        'ENTITY_STATUS_UNSPECIFIED',
        'ENTITY_STATUS_ACTIVE',
        'ENTITY_STATUS_ARCHIVED',
        'ENTITY_STATUS_DRAFT',
        'ENTITY_STATUS_PAUSED',
        'ENTITY_STATUS_SCHEDULED_FOR_DELETION',
      ])
      .exactOptional()
      .openapi({
        description:
          'Whether or not the guaranteed order is servable. Acceptable values are `ENTITY_STATUS_ACTIVE`, `ENTITY_STATUS_ARCHIVED`, and `ENTITY_STATUS_PAUSED`. Default value is `ENTITY_STATUS_ACTIVE`.',
      }),
  })
  .openapi({ description: 'The status settings of the guaranteed order.', required: [] })
  .openapi('GuaranteedOrderStatus')

const GuaranteedOrderSchema = z
  .object({
    defaultAdvertiserId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The ID of default advertiser of the guaranteed order. The default advertiser is either the read_write_advertiser_id or, if that is not set, the first advertiser listed in read_advertiser_ids. Otherwise, there is no default advertiser.',
        readOnly: true,
      }),
    defaultCampaignId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the default campaign that is assigned to the guaranteed order. The default campaign must belong to the default advertiser.',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The display name of the guaranteed order. Must be UTF-8 encoded with a maximum size of 240 bytes.',
      }),
    exchange: z
      .enum([
        'EXCHANGE_UNSPECIFIED',
        'EXCHANGE_GOOGLE_AD_MANAGER',
        'EXCHANGE_APPNEXUS',
        'EXCHANGE_BRIGHTROLL',
        'EXCHANGE_ADFORM',
        'EXCHANGE_ADMETA',
        'EXCHANGE_ADMIXER',
        'EXCHANGE_ADSMOGO',
        'EXCHANGE_ADSWIZZ',
        'EXCHANGE_BIDSWITCH',
        'EXCHANGE_BRIGHTROLL_DISPLAY',
        'EXCHANGE_CADREON',
        'EXCHANGE_DAILYMOTION',
        'EXCHANGE_FIVE',
        'EXCHANGE_FLUCT',
        'EXCHANGE_FREEWHEEL',
        'EXCHANGE_GENIEE',
        'EXCHANGE_GUMGUM',
        'EXCHANGE_IMOBILE',
        'EXCHANGE_IBILLBOARD',
        'EXCHANGE_IMPROVE_DIGITAL',
        'EXCHANGE_INDEX',
        'EXCHANGE_KARGO',
        'EXCHANGE_MICROAD',
        'EXCHANGE_MOPUB',
        'EXCHANGE_NEND',
        'EXCHANGE_ONE_BY_AOL_DISPLAY',
        'EXCHANGE_ONE_BY_AOL_MOBILE',
        'EXCHANGE_ONE_BY_AOL_VIDEO',
        'EXCHANGE_OOYALA',
        'EXCHANGE_OPENX',
        'EXCHANGE_PERMODO',
        'EXCHANGE_PLATFORMONE',
        'EXCHANGE_PLATFORMID',
        'EXCHANGE_PUBMATIC',
        'EXCHANGE_PULSEPOINT',
        'EXCHANGE_REVENUEMAX',
        'EXCHANGE_RUBICON',
        'EXCHANGE_SMARTCLIP',
        'EXCHANGE_SMARTRTB',
        'EXCHANGE_SMARTSTREAMTV',
        'EXCHANGE_SOVRN',
        'EXCHANGE_SPOTXCHANGE',
        'EXCHANGE_STROER',
        'EXCHANGE_TEADSTV',
        'EXCHANGE_TELARIA',
        'EXCHANGE_TVN',
        'EXCHANGE_UNITED',
        'EXCHANGE_YIELDLAB',
        'EXCHANGE_YIELDMO',
        'EXCHANGE_UNRULYX',
        'EXCHANGE_OPEN8',
        'EXCHANGE_TRITON',
        'EXCHANGE_TRIPLELIFT',
        'EXCHANGE_TABOOLA',
        'EXCHANGE_INMOBI',
        'EXCHANGE_SMAATO',
        'EXCHANGE_AJA',
        'EXCHANGE_SUPERSHIP',
        'EXCHANGE_NEXSTAR_DIGITAL',
        'EXCHANGE_WAZE',
        'EXCHANGE_SOUNDCAST',
        'EXCHANGE_SHARETHROUGH',
        'EXCHANGE_FYBER',
        'EXCHANGE_RED_FOR_PUBLISHERS',
        'EXCHANGE_MEDIANET',
        'EXCHANGE_TAPJOY',
        'EXCHANGE_VISTAR',
        'EXCHANGE_DAX',
        'EXCHANGE_JCD',
        'EXCHANGE_PLACE_EXCHANGE',
        'EXCHANGE_APPLOVIN',
        'EXCHANGE_CONNATIX',
        'EXCHANGE_RESET_DIGITAL',
        'EXCHANGE_HIVESTACK',
      ])
      .exactOptional()
      .openapi({
        description: 'Required. Immutable. The exchange where the guaranteed order originated.',
      }),
    guaranteedOrderId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The unique identifier of the guaranteed order. The guaranteed order IDs have the format `{exchange}-{legacy_guaranteed_order_id}`.',
        readOnly: true,
      }),
    legacyGuaranteedOrderId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The legacy ID of the guaranteed order. Assigned by the original exchange. The legacy ID is unique within one exchange, but is not guaranteed to be unique across all guaranteed orders. This ID is used in SDF and UI.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The resource name of the guaranteed order.',
        readOnly: true,
      }),
    publisherName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The publisher name of the guaranteed order. Must be UTF-8 encoded with a maximum size of 240 bytes.',
      }),
    readAccessInherited: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether all advertisers of read_write_partner_id have read access to the guaranteed order. Only applicable if read_write_partner_id is set. If True, overrides read_advertiser_ids.',
      }),
    readAdvertiserIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The IDs of advertisers with read access to the guaranteed order. This field must not include the advertiser assigned to read_write_advertiser_id if it is set. All advertisers in this field must belong to read_write_partner_id or the same partner as read_write_advertiser_id.',
      }),
    readWriteAdvertiserId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The advertiser with read/write access to the guaranteed order. This is also the default advertiser of the guaranteed order.',
      }),
    readWritePartnerId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The partner with read/write access to the guaranteed order.' }),
    status: GuaranteedOrderStatusSchema.exactOptional().openapi({
      description: 'The status settings of the guaranteed order.',
    }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The timestamp when the guaranteed order was last updated. Assigned by the system.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'A guaranteed order. Guaranteed orders are parent entity of guaranteed inventory sources. When creating a guaranteed inventory source, a guaranteed order ID must be assigned to the inventory source.',
    required: [],
  })
  .openapi('GuaranteedOrder')

const HouseholdIncomeTargetingOptionDetailsSchema = z
  .object({
    householdIncome: z
      .enum([
        'HOUSEHOLD_INCOME_UNSPECIFIED',
        'HOUSEHOLD_INCOME_UNKNOWN',
        'HOUSEHOLD_INCOME_LOWER_50_PERCENT',
        'HOUSEHOLD_INCOME_TOP_41_TO_50_PERCENT',
        'HOUSEHOLD_INCOME_TOP_31_TO_40_PERCENT',
        'HOUSEHOLD_INCOME_TOP_21_TO_30_PERCENT',
        'HOUSEHOLD_INCOME_TOP_11_TO_20_PERCENT',
        'HOUSEHOLD_INCOME_TOP_10_PERCENT',
      ])
      .exactOptional()
      .openapi({
        description: 'Output only. The household income of an audience.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Represents a targetable household income. This will be populated in the household_income_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_HOUSEHOLD_INCOME`.',
    required: [],
  })
  .openapi('HouseholdIncomeTargetingOptionDetails')

const InStreamAdSchema = z
  .object({
    commonInStreamAttribute: CommonInStreamAttributeSchema.exactOptional().openapi({
      description: 'Common ad attributes.',
    }),
    customParameters: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'The custom parameters to pass custom values to tracking URL template.',
      }),
  })
  .openapi({ description: 'Details for an in-stream ad.', required: [] })
  .openapi('InStreamAd')

const InsertionOrderBudgetSegmentSchema = z
  .object({
    budgetAmountMicros: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The budget amount the insertion order will spend for the given date_range. The amount is in micros. Must be greater than 0. For example, 500000000 represents 500 standard units of the currency.',
      }),
    campaignBudgetId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The budget_id of the campaign budget that this insertion order budget segment is a part of.',
      }),
    dateRange: DateRangeSchema.exactOptional().openapi({
      description:
        "Required. The start and end date settings of the budget segment. They are resolved relative to the parent advertiser's time zone. * When creating a new budget segment, both `start_date` and `end_date` must be in the future. * An existing budget segment with a `start_date` in the past has a mutable `end_date` but an immutable `start_date`. * `end_date` must be the `start_date` or later, both before the year 2037.",
    }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The budget segment description. It can be used to enter Purchase Order information for each budget segment and have that information printed on the invoices. Must be UTF-8 encoded.',
      }),
  })
  .openapi({
    description: 'Settings that control the budget of a single budget segment.',
    required: [],
  })
  .openapi('InsertionOrderBudgetSegment')

const InsertionOrderBudgetSchema = z
  .object({
    automationType: z
      .enum([
        'INSERTION_ORDER_AUTOMATION_TYPE_UNSPECIFIED',
        'INSERTION_ORDER_AUTOMATION_TYPE_BUDGET',
        'INSERTION_ORDER_AUTOMATION_TYPE_NONE',
        'INSERTION_ORDER_AUTOMATION_TYPE_BID_BUDGET',
      ])
      .exactOptional()
      .openapi({
        description:
          'The type of automation used to manage bid and budget for the insertion order. If this field is unspecified in creation, the value defaults to `INSERTION_ORDER_AUTOMATION_TYPE_NONE`.',
      }),
    budgetSegments: z
      .array(InsertionOrderBudgetSegmentSchema)
      .exactOptional()
      .openapi({
        description:
          'Required. The list of budget segments. Use a budget segment to specify a specific budget for a given period of time an insertion order is running.',
      }),
    budgetUnit: z
      .enum(['BUDGET_UNIT_UNSPECIFIED', 'BUDGET_UNIT_CURRENCY', 'BUDGET_UNIT_IMPRESSIONS'])
      .exactOptional()
      .openapi({
        description:
          'Required. Immutable. The budget unit specifies whether the budget is currency based or impression based.',
      }),
  })
  .openapi({
    description: 'Settings that control how insertion order budget is allocated.',
    required: [],
  })
  .openapi('InsertionOrderBudget')

const InsertionOrderSchema = z
  .object({
    advertiserId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The unique ID of the advertiser the insertion order belongs to.',
        readOnly: true,
      }),
    bidStrategy: BiddingStrategySchema.exactOptional().openapi({
      description: 'The bidding strategy of the insertion order. By default, fixed_bid is set.',
    }),
    billableOutcome: z
      .enum([
        'BILLABLE_OUTCOME_UNSPECIFIED',
        'BILLABLE_OUTCOME_PAY_PER_IMPRESSION',
        'BILLABLE_OUTCOME_PAY_PER_CLICK',
        'BILLABLE_OUTCOME_PAY_PER_VIEWABLE_IMPRESSION',
      ])
      .exactOptional()
      .openapi({ description: 'Immutable. The billable outcome of the insertion order.' }),
    budget: InsertionOrderBudgetSchema.exactOptional().openapi({
      description: 'Required. The budget allocation settings of the insertion order.',
    }),
    campaignId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Immutable. The unique ID of the campaign that the insertion order belongs to.',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The display name of the insertion order. Must be UTF-8 encoded with a maximum size of 240 bytes.',
      }),
    entityStatus: z
      .enum([
        'ENTITY_STATUS_UNSPECIFIED',
        'ENTITY_STATUS_ACTIVE',
        'ENTITY_STATUS_ARCHIVED',
        'ENTITY_STATUS_DRAFT',
        'ENTITY_STATUS_PAUSED',
        'ENTITY_STATUS_SCHEDULED_FOR_DELETION',
      ])
      .exactOptional()
      .openapi({
        description:
          'Required. Controls whether or not the insertion order can spend its budget and bid on inventory. * For CreateInsertionOrder method, only `ENTITY_STATUS_DRAFT` is allowed. To activate an insertion order, use UpdateInsertionOrder method and update the status to `ENTITY_STATUS_ACTIVE` after creation. * An insertion order cannot be changed back to `ENTITY_STATUS_DRAFT` status from any other status. * An insertion order cannot be set to `ENTITY_STATUS_ACTIVE` if its parent campaign is not active.',
      }),
    frequencyCap: FrequencyCapSchema.exactOptional().openapi({
      description: 'Required. The frequency capping setting of the insertion order.',
    }),
    insertionOrderId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The unique ID of the insertion order. Assigned by the system.',
        readOnly: true,
      }),
    insertionOrderType: z
      .enum(['INSERTION_ORDER_TYPE_UNSPECIFIED', 'RTB', 'OVER_THE_TOP'])
      .exactOptional()
      .openapi({
        description:
          'The type of insertion order. If this field is unspecified in creation, the value defaults to `RTB`.',
      }),
    integrationDetails: IntegrationDetailsSchema.exactOptional().openapi({
      description: 'Additional integration details of the insertion order.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The resource name of the insertion order.',
        readOnly: true,
      }),
    pacing: PacingSchema.exactOptional().openapi({
      description: 'Required. The budget spending speed setting of the insertion order.',
    }),
    partnerCosts: z
      .array(PartnerCostSchema)
      .exactOptional()
      .openapi({
        description:
          'The partner costs associated with the insertion order. If absent or empty in CreateInsertionOrder method, the newly created insertion order will inherit partner costs from the partner settings.',
      }),
    performanceGoal: PerformanceGoalSchema.exactOptional().openapi({
      description: 'Required. Performance goal of the insertion order.',
    }),
    reservationType: z
      .enum([
        'RESERVATION_TYPE_UNSPECIFIED',
        'RESERVATION_TYPE_NOT_GUARANTEED',
        'RESERVATION_TYPE_PROGRAMMATIC_GUARANTEED',
        'RESERVATION_TYPE_TAG_GUARANTEED',
        'RESERVATION_TYPE_PETRA_VIRAL',
        'RESERVATION_TYPE_INSTANT_RESERVE',
      ])
      .exactOptional()
      .openapi({
        description: 'Output only. The reservation type of the insertion order.',
        readOnly: true,
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The timestamp when the insertion order was last updated. Assigned by the system.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'A single insertion order.', required: [] })
  .openapi('InsertionOrder')

const MoneySchema = z
  .object({
    currencyCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The three-letter currency code defined in ISO 4217.' }),
    nanos: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.',
      }),
    units: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.',
      }),
  })
  .openapi({ description: 'Represents an amount of money with its currency type.', required: [] })
  .openapi('Money')

const RateDetailsSchema = z
  .object({
    inventorySourceRateType: z
      .enum([
        'INVENTORY_SOURCE_RATE_TYPE_UNSPECIFIED',
        'INVENTORY_SOURCE_RATE_TYPE_CPM_FIXED',
        'INVENTORY_SOURCE_RATE_TYPE_CPM_FLOOR',
        'INVENTORY_SOURCE_RATE_TYPE_CPD',
        'INVENTORY_SOURCE_RATE_TYPE_FLAT',
      ])
      .exactOptional()
      .openapi({
        description:
          'The rate type. Acceptable values are `INVENTORY_SOURCE_RATE_TYPE_CPM_FIXED`, `INVENTORY_SOURCE_RATE_TYPE_CPM_FLOOR`, and `INVENTORY_SOURCE_RATE_TYPE_CPD`.',
      }),
    minimumSpend: MoneySchema.exactOptional().openapi({
      description:
        'Output only. The amount that the buyer has committed to spending on the inventory source up front. Only applicable for guaranteed inventory sources.',
      readOnly: true,
    }),
    rate: MoneySchema.exactOptional().openapi({
      description: 'The rate for the inventory source.',
    }),
    unitsPurchased: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required for guaranteed inventory sources. The number of impressions guaranteed by the seller.',
      }),
  })
  .openapi({ description: 'The rate related settings of the inventory source.', required: [] })
  .openapi('RateDetails')

const InventorySourceAccessorsAdvertiserAccessorsSchema = z
  .object({
    advertiserIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The IDs of the advertisers.' }),
  })
  .openapi({ description: 'The advertisers with access to the inventory source.', required: [] })
  .openapi('InventorySourceAccessorsAdvertiserAccessors')

const InventorySourceAccessorsPartnerAccessorSchema = z
  .object({
    partnerId: z.string().exactOptional().openapi({ description: 'The ID of the partner.' }),
  })
  .openapi({ description: 'The partner with access to the inventory source.', required: [] })
  .openapi('InventorySourceAccessorsPartnerAccessor')

const InventorySourceAccessorsSchema = z
  .object({
    advertisers: InventorySourceAccessorsAdvertiserAccessorsSchema.exactOptional().openapi({
      description:
        'The advertisers with access to the inventory source. All advertisers must belong to the same partner.',
    }),
    partner: InventorySourceAccessorsPartnerAccessorSchema.exactOptional().openapi({
      description: 'The partner with access to the inventory source.',
    }),
  })
  .openapi({
    description: 'The partner or advertisers with access to the inventory source.',
    required: [],
  })
  .openapi('InventorySourceAccessors')

const InventorySourceStatusSchema = z
  .object({
    configStatus: z
      .enum([
        'INVENTORY_SOURCE_CONFIG_STATUS_UNSPECIFIED',
        'INVENTORY_SOURCE_CONFIG_STATUS_PENDING',
        'INVENTORY_SOURCE_CONFIG_STATUS_COMPLETED',
      ])
      .exactOptional()
      .openapi({
        description:
          'Output only. The configuration status of the inventory source. Only applicable for guaranteed inventory sources. Acceptable values are `INVENTORY_SOURCE_CONFIG_STATUS_PENDING` and `INVENTORY_SOURCE_CONFIG_STATUS_COMPLETED`. An inventory source must be configured (fill in the required fields, choose creatives, and select a default campaign) before it can serve.',
        readOnly: true,
      }),
    entityPauseReason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The user-provided reason for pausing this inventory source. Must not exceed 100 characters. Only applicable when entity_status is set to `ENTITY_STATUS_PAUSED`.',
      }),
    entityStatus: z
      .enum([
        'ENTITY_STATUS_UNSPECIFIED',
        'ENTITY_STATUS_ACTIVE',
        'ENTITY_STATUS_ARCHIVED',
        'ENTITY_STATUS_DRAFT',
        'ENTITY_STATUS_PAUSED',
        'ENTITY_STATUS_SCHEDULED_FOR_DELETION',
      ])
      .exactOptional()
      .openapi({
        description:
          'Whether or not the inventory source is servable. Acceptable values are `ENTITY_STATUS_ACTIVE`, `ENTITY_STATUS_ARCHIVED`, and `ENTITY_STATUS_PAUSED`. Default value is `ENTITY_STATUS_ACTIVE`.',
      }),
    sellerPauseReason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The seller-provided reason for pausing this inventory source. Only applicable for inventory sources synced directly from the publishers and when seller_status is set to `ENTITY_STATUS_PAUSED`.',
        readOnly: true,
      }),
    sellerStatus: z
      .enum([
        'ENTITY_STATUS_UNSPECIFIED',
        'ENTITY_STATUS_ACTIVE',
        'ENTITY_STATUS_ARCHIVED',
        'ENTITY_STATUS_DRAFT',
        'ENTITY_STATUS_PAUSED',
        'ENTITY_STATUS_SCHEDULED_FOR_DELETION',
      ])
      .exactOptional()
      .openapi({
        description:
          'Output only. The status set by the seller for the inventory source. Only applicable for inventory sources synced directly from the publishers. Acceptable values are `ENTITY_STATUS_ACTIVE` and `ENTITY_STATUS_PAUSED`.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'The status related settings of the inventory source.', required: [] })
  .openapi('InventorySourceStatus')

const TimeRangeSchema = z
  .object({
    endTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The upper bound of a time range, inclusive.' }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The lower bound of a time range, inclusive.' }),
  })
  .openapi({ description: 'A time range.', required: [] })
  .openapi('TimeRange')

const InventorySourceSchema = z
  .object({
    commitment: z
      .enum([
        'INVENTORY_SOURCE_COMMITMENT_UNSPECIFIED',
        'INVENTORY_SOURCE_COMMITMENT_GUARANTEED',
        'INVENTORY_SOURCE_COMMITMENT_NON_GUARANTEED',
      ])
      .exactOptional()
      .openapi({
        description: 'Whether the inventory source has a guaranteed or non-guaranteed delivery.',
      }),
    creativeConfigs: z
      .array(CreativeConfigSchema)
      .exactOptional()
      .openapi({
        description:
          'The creative requirements of the inventory source. Not applicable for auction packages.',
      }),
    dealId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID in the exchange space that uniquely identifies the inventory source. Must be unique across buyers within each exchange but not necessarily unique across exchanges.',
      }),
    deliveryMethod: z
      .enum([
        'INVENTORY_SOURCE_DELIVERY_METHOD_UNSPECIFIED',
        'INVENTORY_SOURCE_DELIVERY_METHOD_PROGRAMMATIC',
        'INVENTORY_SOURCE_DELIVERY_METHOD_TAG',
      ])
      .exactOptional()
      .openapi({
        description:
          'The delivery method of the inventory source. * For non-guaranteed inventory sources, the only acceptable value is `INVENTORY_SOURCE_DELIVERY_METHOD_PROGRAMMATIC`. * For guaranteed inventory sources, acceptable values are `INVENTORY_SOURCE_DELIVERY_METHOD_TAG` and `INVENTORY_SOURCE_DELIVERY_METHOD_PROGRAMMATIC`.',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The display name of the inventory source. Must be UTF-8 encoded with a maximum size of 240 bytes.',
      }),
    exchange: z
      .enum([
        'EXCHANGE_UNSPECIFIED',
        'EXCHANGE_GOOGLE_AD_MANAGER',
        'EXCHANGE_APPNEXUS',
        'EXCHANGE_BRIGHTROLL',
        'EXCHANGE_ADFORM',
        'EXCHANGE_ADMETA',
        'EXCHANGE_ADMIXER',
        'EXCHANGE_ADSMOGO',
        'EXCHANGE_ADSWIZZ',
        'EXCHANGE_BIDSWITCH',
        'EXCHANGE_BRIGHTROLL_DISPLAY',
        'EXCHANGE_CADREON',
        'EXCHANGE_DAILYMOTION',
        'EXCHANGE_FIVE',
        'EXCHANGE_FLUCT',
        'EXCHANGE_FREEWHEEL',
        'EXCHANGE_GENIEE',
        'EXCHANGE_GUMGUM',
        'EXCHANGE_IMOBILE',
        'EXCHANGE_IBILLBOARD',
        'EXCHANGE_IMPROVE_DIGITAL',
        'EXCHANGE_INDEX',
        'EXCHANGE_KARGO',
        'EXCHANGE_MICROAD',
        'EXCHANGE_MOPUB',
        'EXCHANGE_NEND',
        'EXCHANGE_ONE_BY_AOL_DISPLAY',
        'EXCHANGE_ONE_BY_AOL_MOBILE',
        'EXCHANGE_ONE_BY_AOL_VIDEO',
        'EXCHANGE_OOYALA',
        'EXCHANGE_OPENX',
        'EXCHANGE_PERMODO',
        'EXCHANGE_PLATFORMONE',
        'EXCHANGE_PLATFORMID',
        'EXCHANGE_PUBMATIC',
        'EXCHANGE_PULSEPOINT',
        'EXCHANGE_REVENUEMAX',
        'EXCHANGE_RUBICON',
        'EXCHANGE_SMARTCLIP',
        'EXCHANGE_SMARTRTB',
        'EXCHANGE_SMARTSTREAMTV',
        'EXCHANGE_SOVRN',
        'EXCHANGE_SPOTXCHANGE',
        'EXCHANGE_STROER',
        'EXCHANGE_TEADSTV',
        'EXCHANGE_TELARIA',
        'EXCHANGE_TVN',
        'EXCHANGE_UNITED',
        'EXCHANGE_YIELDLAB',
        'EXCHANGE_YIELDMO',
        'EXCHANGE_UNRULYX',
        'EXCHANGE_OPEN8',
        'EXCHANGE_TRITON',
        'EXCHANGE_TRIPLELIFT',
        'EXCHANGE_TABOOLA',
        'EXCHANGE_INMOBI',
        'EXCHANGE_SMAATO',
        'EXCHANGE_AJA',
        'EXCHANGE_SUPERSHIP',
        'EXCHANGE_NEXSTAR_DIGITAL',
        'EXCHANGE_WAZE',
        'EXCHANGE_SOUNDCAST',
        'EXCHANGE_SHARETHROUGH',
        'EXCHANGE_FYBER',
        'EXCHANGE_RED_FOR_PUBLISHERS',
        'EXCHANGE_MEDIANET',
        'EXCHANGE_TAPJOY',
        'EXCHANGE_VISTAR',
        'EXCHANGE_DAX',
        'EXCHANGE_JCD',
        'EXCHANGE_PLACE_EXCHANGE',
        'EXCHANGE_APPLOVIN',
        'EXCHANGE_CONNATIX',
        'EXCHANGE_RESET_DIGITAL',
        'EXCHANGE_HIVESTACK',
      ])
      .exactOptional()
      .openapi({ description: 'The exchange to which the inventory source belongs.' }),
    guaranteedOrderId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. The ID of the guaranteed order that this inventory source belongs to. Only applicable when commitment is `INVENTORY_SOURCE_COMMITMENT_GUARANTEED`.',
      }),
    inventorySourceId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The unique ID of the inventory source. Assigned by the system.',
        readOnly: true,
      }),
    inventorySourceProductType: z
      .enum([
        'INVENTORY_SOURCE_PRODUCT_TYPE_UNSPECIFIED',
        'PREFERRED_DEAL',
        'PRIVATE_AUCTION',
        'PROGRAMMATIC_GUARANTEED',
        'TAG_GUARANTEED',
        'YOUTUBE_RESERVE',
        'INSTANT_RESERVE',
        'GUARANTEED_PACKAGE',
        'PROGRAMMATIC_TV',
        'AUCTION_PACKAGE',
      ])
      .exactOptional()
      .openapi({
        description:
          'Output only. The product type of the inventory source, denoting the way through which it sells inventory.',
        readOnly: true,
      }),
    inventorySourceType: z
      .enum([
        'INVENTORY_SOURCE_TYPE_UNSPECIFIED',
        'INVENTORY_SOURCE_TYPE_PRIVATE',
        'INVENTORY_SOURCE_TYPE_AUCTION_PACKAGE',
      ])
      .exactOptional()
      .openapi({ description: 'Denotes the type of the inventory source.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The resource name of the inventory source.',
        readOnly: true,
      }),
    publisherName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The publisher/seller name of the inventory source.' }),
    rateDetails: RateDetailsSchema.exactOptional().openapi({
      description: 'Required. The rate details of the inventory source.',
    }),
    readAdvertiserIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Output only. The IDs of advertisers with read-only access to the inventory source.',
        readOnly: true,
      }),
    readPartnerIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Output only. The IDs of partners with read-only access to the inventory source. All advertisers of partners in this field inherit read-only access to the inventory source.',
        readOnly: true,
      }),
    readWriteAccessors: InventorySourceAccessorsSchema.exactOptional().openapi({
      description:
        'The partner or advertisers that have read/write access to the inventory source. Output only when commitment is `INVENTORY_SOURCE_COMMITMENT_GUARANTEED`, in which case the read/write accessors are inherited from the parent guaranteed order. Required when commitment is `INVENTORY_SOURCE_COMMITMENT_NON_GUARANTEED`. If commitment is `INVENTORY_SOURCE_COMMITMENT_NON_GUARANTEED` and a partner is set in this field, all advertisers under this partner will automatically have read-only access to the inventory source. These advertisers will not be included in read_advertiser_ids.',
    }),
    status: InventorySourceStatusSchema.exactOptional().openapi({
      description: 'The status settings of the inventory source.',
    }),
    subSitePropertyId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. The unique ID of the sub-site property assigned to this inventory source.',
      }),
    timeRange: TimeRangeSchema.exactOptional().openapi({
      description: 'The time range when this inventory source starts and stops serving.',
    }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The timestamp when the inventory source was last updated. Assigned by the system.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'An inventory source.', required: [] })
  .openapi('InventorySource')

const InventorySourceGroupSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The display name of the inventory source group. Must be UTF-8 encoded with a maximum size of 240 bytes.',
      }),
    inventorySourceGroupId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The unique ID of the inventory source group. Assigned by the system.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The resource name of the inventory source group.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'A collection of targetable inventory sources.', required: [] })
  .openapi('InventorySourceGroup')

const InvoiceSchema = z
  .object({
    budgetInvoiceGroupingId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The budget grouping ID for this invoice. This field will only be set if the invoice level of the corresponding billing profile was set to "Budget invoice grouping ID".',
      }),
    budgetSummaries: z
      .array(BudgetSummarySchema)
      .exactOptional()
      .openapi({
        description:
          'The list of summarized information for each budget associated with this invoice. This field will only be set if the invoice detail level of the corresponding billing profile was set to "Budget level PO".',
      }),
    correctedInvoiceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the original invoice being adjusted by this invoice, if applicable. May appear on the invoice PDF as `Reference invoice number`. If replaced_invoice_ids is set, this field will be empty.',
      }),
    currencyCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The currency used in the invoice in ISO 4217 format.' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The display name of the invoice.' }),
    dueDate: DateSchema.exactOptional().openapi({
      description: 'The date when the invoice is due.',
    }),
    invoiceId: z.string().exactOptional().openapi({ description: 'The unique ID of the invoice.' }),
    invoiceType: z
      .enum(['INVOICE_TYPE_UNSPECIFIED', 'INVOICE_TYPE_CREDIT', 'INVOICE_TYPE_INVOICE'])
      .exactOptional()
      .openapi({ description: 'The type of invoice document.' }),
    issueDate: DateSchema.exactOptional().openapi({
      description: 'The date when the invoice was issued.',
    }),
    name: z.string().exactOptional().openapi({ description: 'The resource name of the invoice.' }),
    nonBudgetMicros: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The total amount of costs or adjustments not tied to a particular budget, in micros of the invoice's currency. For example, if currency_code is `USD`, then 1000000 represents one US dollar.",
      }),
    paymentsAccountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the payments account the invoice belongs to. Appears on the invoice PDF as `Billing Account Number`.',
      }),
    paymentsProfileId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the payments profile the invoice belongs to. Appears on the invoice PDF as `Billing ID`.',
      }),
    pdfUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URL to download a PDF copy of the invoice. This URL is user specific and requires a valid OAuth 2.0 access token to access. The access token must be provided in an `Authorization: Bearer` HTTP header and be authorized for one of the following scopes: * `https://www.googleapis.com/auth/display-video-mediaplanning` * `https://www.googleapis.com/auth/display-video` The URL will be valid for 7 days after retrieval of this invoice object or until this invoice is retrieved again.',
      }),
    purchaseOrderNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'Purchase order number associated with the invoice.' }),
    replacedInvoiceIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The ID(s) of any originally issued invoice that is being cancelled by this invoice, if applicable. Multiple invoices may be listed if those invoices are being consolidated into a single invoice. May appear on invoice PDF as `Replaced invoice numbers`. If corrected_invoice_id is set, this field will be empty.',
      }),
    serviceDateRange: DateRangeSchema.exactOptional().openapi({
      description: 'The service start and end dates which are covered by this invoice.',
    }),
    subtotalAmountMicros: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The pre-tax subtotal amount, in micros of the invoice's currency. For example, if currency_code is `USD`, then 1000000 represents one US dollar.",
      }),
    totalAmountMicros: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The invoice total amount, in micros of the invoice's currency. For example, if currency_code is `USD`, then 1000000 represents one US dollar.",
      }),
    totalTaxAmountMicros: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The sum of all taxes in invoice, in micros of the invoice's currency. For example, if currency_code is `USD`, then 1000000 represents one US dollar.",
      }),
  })
  .openapi({ description: 'A single invoice.', required: [] })
  .openapi('Invoice')

const LanguageTargetingOptionDetailsSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The display name of the language (e.g., "French").',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Represents a targetable language. This will be populated in the language_details field when targeting_type is `TARGETING_TYPE_LANGUAGE`.',
    required: [],
  })
  .openapi('LanguageTargetingOptionDetails')

const ListAdvertiserAssignedTargetingOptionsResponseSchema = z
  .object({
    assignedTargetingOptions: z
      .array(AssignedTargetingOptionSchema)
      .exactOptional()
      .openapi({
        description: 'The list of assigned targeting options. This list will be absent if empty.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token identifying the next page of results. This value should be specified as the pageToken in a subsequent ListAdvertiserAssignedTargetingOptionsRequest to fetch the next page of results. This token will be absent if there are no more assigned_targeting_options to return.',
      }),
  })
  .openapi({
    description: 'Response message for ListAdvertiserAssignedTargetingOptions.',
    required: [],
  })
  .openapi('ListAdvertiserAssignedTargetingOptionsResponse')

const ListAdvertisersResponseSchema = z
  .object({
    advertisers: z
      .array(AdvertiserSchema)
      .exactOptional()
      .openapi({ description: 'The list of advertisers. This list will be absent if empty.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListAdvertisers` method to retrieve the next page of results.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ListAdvertisersResponse')

const ListAssignedInventorySourcesResponseSchema = z
  .object({
    assignedInventorySources: z
      .array(AssignedInventorySourceSchema)
      .exactOptional()
      .openapi({
        description: 'The list of assigned inventory sources. This list will be absent if empty.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListAssignedInventorySources` method to retrieve the next page of results.',
      }),
  })
  .openapi({
    description:
      'Response message for AssignedInventorySourceService.ListAssignedInventorySources.',
    required: [],
  })
  .openapi('ListAssignedInventorySourcesResponse')

const ListAssignedLocationsResponseSchema = z
  .object({
    assignedLocations: z
      .array(AssignedLocationSchema)
      .exactOptional()
      .openapi({
        description: 'The list of assigned locations. This list will be absent if empty.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListAssignedLocations` method to retrieve the next page of results.',
      }),
  })
  .openapi({
    description: 'Response message for AssignedLocationService.ListAssignedLocations.',
    required: [],
  })
  .openapi('ListAssignedLocationsResponse')

const ListCampaignAssignedTargetingOptionsResponseSchema = z
  .object({
    assignedTargetingOptions: z
      .array(AssignedTargetingOptionSchema)
      .exactOptional()
      .openapi({
        description: 'The list of assigned targeting options. This list will be absent if empty.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token identifying the next page of results. This value should be specified as the pageToken in a subsequent ListCampaignAssignedTargetingOptionsRequest to fetch the next page of results. This token will be absent if there are no more assigned_targeting_options to return.',
      }),
  })
  .openapi({
    description: 'Response message for ListCampaignAssignedTargetingOptions.',
    required: [],
  })
  .openapi('ListCampaignAssignedTargetingOptionsResponse')

const ListCampaignsResponseSchema = z
  .object({
    campaigns: z
      .array(CampaignSchema)
      .exactOptional()
      .openapi({ description: 'The list of campaigns. This list will be absent if empty.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListCampaigns` method to retrieve the next page of results.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ListCampaignsResponse')

const ListChannelsResponseSchema = z
  .object({
    channels: z
      .array(ChannelSchema)
      .exactOptional()
      .openapi({ description: 'The list of channels. This list will be absent if empty.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListChannels` method to retrieve the next page of results.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ListChannelsResponse')

const ListCombinedAudiencesResponseSchema = z
  .object({
    combinedAudiences: z
      .array(CombinedAudienceSchema)
      .exactOptional()
      .openapi({
        description: 'The list of combined audiences. This list will be absent if empty.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListCombinedAudiences` method to retrieve the next page of results.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ListCombinedAudiencesResponse')

const ListCreativesResponseSchema = z
  .object({
    creatives: z
      .array(CreativeSchema)
      .exactOptional()
      .openapi({ description: 'The list of creatives. This list will be absent if empty.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListCreativesRequest` method to retrieve the next page of results. If this field is null, it means this is the last page.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ListCreativesResponse')

const ListCustomBiddingAlgorithmsResponseSchema = z
  .object({
    customBiddingAlgorithms: z
      .array(CustomBiddingAlgorithmSchema)
      .exactOptional()
      .openapi({
        description: 'The list of custom bidding algorithms. This list will be absent if empty.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListCustomBiddingAlgorithmsRequest` method to retrieve the next page of results. If this field is null, it means this is the last page.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ListCustomBiddingAlgorithmsResponse')

const ListCustomBiddingScriptsResponseSchema = z
  .object({
    customBiddingScripts: z
      .array(CustomBiddingScriptSchema)
      .exactOptional()
      .openapi({
        description: 'The list of custom bidding scripts. This list will be absent if empty.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListCustomBiddingScriptsRequest` method to retrieve the next page of results. If this field is null, it means this is the last page.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ListCustomBiddingScriptsResponse')

const ListCustomListsResponseSchema = z
  .object({
    customLists: z
      .array(CustomListSchema)
      .exactOptional()
      .openapi({ description: 'The list of custom lists. This list will be absent if empty.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListCustomLists` method to retrieve the next page of results.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ListCustomListsResponse')

const ListFirstAndThirdPartyAudiencesResponseSchema = z
  .object({
    firstAndThirdPartyAudiences: z
      .array(FirstAndThirdPartyAudienceSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of first and third party audiences. Audience size properties will not be included. This list will be absent if empty.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListFirstAndThirdPartyAudiences` method to retrieve the next page of results.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ListFirstAndThirdPartyAudiencesResponse')

const ListGoogleAudiencesResponseSchema = z
  .object({
    googleAudiences: z
      .array(GoogleAudienceSchema)
      .exactOptional()
      .openapi({ description: 'The list of Google audiences. This list will be absent if empty.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListGoogleAudiences` method to retrieve the next page of results.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ListGoogleAudiencesResponse')

const ListGuaranteedOrdersResponseSchema = z
  .object({
    guaranteedOrders: z
      .array(GuaranteedOrderSchema)
      .exactOptional()
      .openapi({
        description: 'The list of guaranteed orders. This list will be absent if empty.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListGuaranteedOrders` method to retrieve the next page of results.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ListGuaranteedOrdersResponse')

const ListInsertionOrderAssignedTargetingOptionsResponseSchema = z
  .object({
    assignedTargetingOptions: z
      .array(AssignedTargetingOptionSchema)
      .exactOptional()
      .openapi({
        description: 'The list of assigned targeting options. This list will be absent if empty.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token identifying the next page of results. This value should be specified as the pageToken in a subsequent ListInsertionOrderAssignedTargetingOptionsRequest to fetch the next page of results. This token will be absent if there are no more assigned_targeting_options to return.',
      }),
  })
  .openapi({
    description: 'Response message for ListInsertionOrderAssignedTargetingOptions.',
    required: [],
  })
  .openapi('ListInsertionOrderAssignedTargetingOptionsResponse')

const ListInsertionOrdersResponseSchema = z
  .object({
    insertionOrders: z
      .array(InsertionOrderSchema)
      .exactOptional()
      .openapi({ description: 'The list of insertion orders. This list will be absent if empty.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListInsertionOrders` method to retrieve the next page of results.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ListInsertionOrdersResponse')

const ListInventorySourceGroupsResponseSchema = z
  .object({
    inventorySourceGroups: z
      .array(InventorySourceGroupSchema)
      .exactOptional()
      .openapi({
        description: 'The list of inventory source groups. This list will be absent if empty.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListInventorySourceGroups` method to retrieve the next page of results.',
      }),
  })
  .openapi({
    description: 'Response message for InventorySourceGroupService.ListInventorySourceGroups.',
    required: [],
  })
  .openapi('ListInventorySourceGroupsResponse')

const ListInventorySourcesResponseSchema = z
  .object({
    inventorySources: z
      .array(InventorySourceSchema)
      .exactOptional()
      .openapi({
        description: 'The list of inventory sources. This list will be absent if empty.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListInventorySources` method to retrieve the next page of results.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ListInventorySourcesResponse')

const ListInvoicesResponseSchema = z
  .object({
    invoices: z
      .array(InvoiceSchema)
      .exactOptional()
      .openapi({ description: 'The list of invoices. This list will be absent if empty.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListInvoices` method to retrieve the next page of results. This token will be absent if there are no more invoices to return.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ListInvoicesResponse')

const ListLineItemAssignedTargetingOptionsResponseSchema = z
  .object({
    assignedTargetingOptions: z
      .array(AssignedTargetingOptionSchema)
      .exactOptional()
      .openapi({
        description: 'The list of assigned targeting options. This list will be absent if empty.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token identifying the next page of results. This value should be specified as the pageToken in a subsequent ListLineItemAssignedTargetingOptionsRequest to fetch the next page of results. This token will be absent if there are no more assigned_targeting_options to return.',
      }),
  })
  .openapi({
    description: 'Response message for ListLineItemAssignedTargetingOptions.',
    required: [],
  })
  .openapi('ListLineItemAssignedTargetingOptionsResponse')

const ListLineItemsResponseSchema = z
  .object({
    lineItems: z
      .array(LineItemSchema)
      .exactOptional()
      .openapi({ description: 'The list of line items. This list will be absent if empty.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListLineItems` method to retrieve the next page of results.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ListLineItemsResponse')

const LocationListSchema = z
  .object({
    advertiserId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Immutable. The unique ID of the advertiser the location list belongs to.',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The display name of the location list. Must be UTF-8 encoded with a maximum size of 240 bytes.',
      }),
    locationListId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The unique ID of the location list. Assigned by the system.',
        readOnly: true,
      }),
    locationType: z
      .enum([
        'TARGETING_LOCATION_TYPE_UNSPECIFIED',
        'TARGETING_LOCATION_TYPE_PROXIMITY',
        'TARGETING_LOCATION_TYPE_REGIONAL',
      ])
      .exactOptional()
      .openapi({
        description:
          'Required. Immutable. The type of location. All locations in the list will share this type.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The resource name of the location list.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'A list of locations used for targeting.', required: [] })
  .openapi('LocationList')

const ListLocationListsResponseSchema = z
  .object({
    locationLists: z
      .array(LocationListSchema)
      .exactOptional()
      .openapi({ description: 'The list of location lists. This list will be absent if empty.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListLocationLists` method to retrieve the next page of results.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ListLocationListsResponse')

const ManualTriggerSchema = z
  .object({
    activationDurationMinutes: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The maximum duration of each activation in minutes. Must be between 1 and 360 inclusive. After this duration, the trigger will be automatically deactivated.',
      }),
    advertiserId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Immutable. The unique ID of the advertiser that the manual trigger belongs to.',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The display name of the manual trigger. Must be UTF-8 encoded with a maximum size of 240 bytes.',
      }),
    latestActivationTime: z
      .string()
      .exactOptional()
      .openapi({
        description: "Output only. The timestamp of the trigger's latest activation.",
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The resource name of the manual trigger.',
        readOnly: true,
      }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'INACTIVE', 'ACTIVE'])
      .exactOptional()
      .openapi({
        description:
          'Output only. The state of the manual trigger. Will be set to the `INACTIVE` state upon creation.',
        readOnly: true,
      }),
    triggerId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The unique ID of the manual trigger.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'A single manual trigger in Display & Video 360.', required: [] })
  .openapi('ManualTrigger')

const ListManualTriggersResponseSchema = z
  .object({
    manualTriggers: z
      .array(ManualTriggerSchema)
      .exactOptional()
      .openapi({ description: 'The list of manual triggers. This list will be absent if empty.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListManualTriggers` method to retrieve the next page of results.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ListManualTriggersResponse')

const NegativeKeywordListSchema = z
  .object({
    advertiserId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The unique ID of the advertiser the negative keyword list belongs to.',
        readOnly: true,
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The display name of the negative keyword list. Must be UTF-8 encoded with a maximum size of 255 bytes.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The resource name of the negative keyword list.',
        readOnly: true,
      }),
    negativeKeywordListId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The unique ID of the negative keyword list. Assigned by the system.',
        readOnly: true,
      }),
    targetedLineItemCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Number of line items that are directly targeting this negative keyword list.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'A list of negative keywords used for targeting.', required: [] })
  .openapi('NegativeKeywordList')

const ListNegativeKeywordListsResponseSchema = z
  .object({
    negativeKeywordLists: z
      .array(NegativeKeywordListSchema)
      .exactOptional()
      .openapi({
        description: 'The list of negative keyword lists. This list will be absent if empty.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListNegativeKeywordLists` method to retrieve the next page of results.',
      }),
  })
  .openapi({
    description: 'Response message for NegativeKeywordListService.ListNegativeKeywordLists.',
    required: [],
  })
  .openapi('ListNegativeKeywordListsResponse')

const ListNegativeKeywordsResponseSchema = z
  .object({
    negativeKeywords: z
      .array(NegativeKeywordSchema)
      .exactOptional()
      .openapi({
        description: 'The list of negative keywords. This list will be absent if empty.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListNegativeKeywords` method to retrieve the next page of results.',
      }),
  })
  .openapi({
    description: 'Response message for NegativeKeywordService.ListNegativeKeywords.',
    required: [],
  })
  .openapi('ListNegativeKeywordsResponse')

const ListPartnerAssignedTargetingOptionsResponseSchema = z
  .object({
    assignedTargetingOptions: z
      .array(AssignedTargetingOptionSchema)
      .exactOptional()
      .openapi({
        description: 'The list of assigned targeting options. This list will be absent if empty.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token identifying the next page of results. This value should be specified as the pageToken in a subsequent ListPartnerAssignedTargetingOptionsRequest to fetch the next page of results. This token will be absent if there are no more assigned_targeting_options to return.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ListPartnerAssignedTargetingOptionsResponse')

const MeasurementConfigSchema = z
  .object({
    dv360ToCmCostReportingEnabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether or not to report DV360 cost to CM360.' }),
    dv360ToCmDataSharingEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether or not to include DV360 data in CM360 data transfer reports.',
      }),
  })
  .openapi({ description: 'Measurement settings of a partner.', required: [] })
  .openapi('MeasurementConfig')

const PartnerAdServerConfigSchema = z
  .object({
    measurementConfig: MeasurementConfigSchema.exactOptional().openapi({
      description: 'Measurement settings of a partner.',
    }),
  })
  .openapi({ description: 'Ad server related settings of a partner.', required: [] })
  .openapi('PartnerAdServerConfig')

const PartnerDataAccessConfigSchema = z
  .object({
    sdfConfig: SdfConfigSchema.exactOptional().openapi({
      description:
        'Structured Data Files (SDF) settings for the partner. The SDF configuration for the partner.',
    }),
  })
  .openapi({
    description: 'Settings that control how partner related data may be accessed.',
    required: [],
  })
  .openapi('PartnerDataAccessConfig')

const PartnerGeneralConfigSchema = z
  .object({
    currencyCode: z
      .string()
      .exactOptional()
      .openapi({ description: "Immutable. Partner's currency in ISO 4217 format." }),
    timeZone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Immutable. The standard TZ database name of the partner's time zone. For example, `America/New_York`. See more at: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones",
      }),
  })
  .openapi({ description: 'General settings of a partner.', required: [] })
  .openapi('PartnerGeneralConfig')

const PartnerSchema = z
  .object({
    adServerConfig: PartnerAdServerConfigSchema.exactOptional().openapi({
      description: 'Ad server related settings of the partner.',
    }),
    dataAccessConfig: PartnerDataAccessConfigSchema.exactOptional().openapi({
      description: 'Settings that control how partner data may be accessed.',
    }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The display name of the partner. Must be UTF-8 encoded with a maximum size of 240 bytes.',
      }),
    entityStatus: z
      .enum([
        'ENTITY_STATUS_UNSPECIFIED',
        'ENTITY_STATUS_ACTIVE',
        'ENTITY_STATUS_ARCHIVED',
        'ENTITY_STATUS_DRAFT',
        'ENTITY_STATUS_PAUSED',
        'ENTITY_STATUS_SCHEDULED_FOR_DELETION',
      ])
      .exactOptional()
      .openapi({ description: 'Output only. The status of the partner.', readOnly: true }),
    exchangeConfig: ExchangeConfigSchema.exactOptional().openapi({
      description: 'Settings that control which exchanges are enabled for the partner.',
    }),
    generalConfig: PartnerGeneralConfigSchema.exactOptional().openapi({
      description: 'General settings of the partner.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The resource name of the partner.', readOnly: true }),
    partnerId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The unique ID of the partner. Assigned by the system.',
        readOnly: true,
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The timestamp when the partner was last updated. Assigned by the system.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'A single partner in Display & Video 360 (DV360).', required: [] })
  .openapi('Partner')

const ListPartnersResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListPartners` method to retrieve the next page of results.',
      }),
    partners: z
      .array(PartnerSchema)
      .exactOptional()
      .openapi({ description: 'The list of partners. This list will be absent if empty.' }),
  })
  .openapi({ required: [] })
  .openapi('ListPartnersResponse')

const ListSitesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListSites` method to retrieve the next page of results.',
      }),
    sites: z
      .array(SiteSchema)
      .exactOptional()
      .openapi({ description: 'The list of sites. This list will be absent if empty.' }),
  })
  .openapi({ description: 'Response message for SiteService.ListSites.', required: [] })
  .openapi('ListSitesResponse')

const NativeContentPositionTargetingOptionDetailsSchema = z
  .object({
    contentPosition: z
      .enum([
        'NATIVE_CONTENT_POSITION_UNSPECIFIED',
        'NATIVE_CONTENT_POSITION_UNKNOWN',
        'NATIVE_CONTENT_POSITION_IN_ARTICLE',
        'NATIVE_CONTENT_POSITION_IN_FEED',
        'NATIVE_CONTENT_POSITION_PERIPHERAL',
        'NATIVE_CONTENT_POSITION_RECOMMENDATION',
      ])
      .exactOptional()
      .openapi({ description: 'Output only. The content position.', readOnly: true }),
  })
  .openapi({
    description:
      'Represents a targetable native content position. This will be populated in the native_content_position_details field when targeting_type is `TARGETING_TYPE_NATIVE_CONTENT_POSITION`.',
    required: [],
  })
  .openapi('NativeContentPositionTargetingOptionDetails')

const OmidTargetingOptionDetailsSchema = z
  .object({
    omid: z
      .enum(['OMID_UNSPECIFIED', 'OMID_FOR_MOBILE_DISPLAY_ADS'])
      .exactOptional()
      .openapi({
        description: 'Output only. The type of Open Measurement enabled inventory.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Represents a targetable Open Measurement enabled inventory type. This will be populated in the omid_details field when targeting_type is `TARGETING_TYPE_OMID`.',
    required: [],
  })
  .openapi('OmidTargetingOptionDetails')

const OnScreenPositionTargetingOptionDetailsSchema = z
  .object({
    onScreenPosition: z
      .enum([
        'ON_SCREEN_POSITION_UNSPECIFIED',
        'ON_SCREEN_POSITION_UNKNOWN',
        'ON_SCREEN_POSITION_ABOVE_THE_FOLD',
        'ON_SCREEN_POSITION_BELOW_THE_FOLD',
      ])
      .exactOptional()
      .openapi({ description: 'Output only. The on screen position.', readOnly: true }),
  })
  .openapi({
    description:
      'Represents a targetable on screen position, which could be used by display and video ads. This will be populated in the on_screen_position_details field when targeting_type is `TARGETING_TYPE_ON_SCREEN_POSITION`.',
    required: [],
  })
  .openapi('OnScreenPositionTargetingOptionDetails')

const OperatingSystemTargetingOptionDetailsSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The display name of the operating system.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Represents a targetable operating system. This will be populated in the operating_system_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_OPERATING_SYSTEM`.',
    required: [],
  })
  .openapi('OperatingSystemTargetingOptionDetails')

const ParentalStatusTargetingOptionDetailsSchema = z
  .object({
    parentalStatus: z
      .enum([
        'PARENTAL_STATUS_UNSPECIFIED',
        'PARENTAL_STATUS_PARENT',
        'PARENTAL_STATUS_NOT_A_PARENT',
        'PARENTAL_STATUS_UNKNOWN',
      ])
      .exactOptional()
      .openapi({ description: 'Output only. The parental status of an audience.', readOnly: true }),
  })
  .openapi({
    description:
      'Represents a targetable parental status. This will be populated in the parental_status_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_PARENTAL_STATUS`.',
    required: [],
  })
  .openapi('ParentalStatusTargetingOptionDetails')

const PoiTargetingOptionDetailsSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The display name of a POI(e.g. "Times Square", "Space Needle"), followed by its full address if available.',
        readOnly: true,
      }),
    latitude: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Output only. Latitude of the POI rounding to 6th decimal place.',
        readOnly: true,
      }),
    longitude: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Output only. Longitude of the POI rounding to 6th decimal place.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Represents a targetable point of interest(POI). This will be populated in the poi_details field when targeting_type is `TARGETING_TYPE_POI`.',
    required: [],
  })
  .openapi('PoiTargetingOptionDetails')

const SensitiveCategoryTargetingOptionDetailsSchema = z
  .object({
    sensitiveCategory: z
      .enum([
        'SENSITIVE_CATEGORY_UNSPECIFIED',
        'SENSITIVE_CATEGORY_ADULT',
        'SENSITIVE_CATEGORY_DEROGATORY',
        'SENSITIVE_CATEGORY_DOWNLOADS_SHARING',
        'SENSITIVE_CATEGORY_WEAPONS',
        'SENSITIVE_CATEGORY_GAMBLING',
        'SENSITIVE_CATEGORY_VIOLENCE',
        'SENSITIVE_CATEGORY_SUGGESTIVE',
        'SENSITIVE_CATEGORY_PROFANITY',
        'SENSITIVE_CATEGORY_ALCOHOL',
        'SENSITIVE_CATEGORY_DRUGS',
        'SENSITIVE_CATEGORY_TOBACCO',
        'SENSITIVE_CATEGORY_POLITICS',
        'SENSITIVE_CATEGORY_RELIGION',
        'SENSITIVE_CATEGORY_TRAGEDY',
        'SENSITIVE_CATEGORY_TRANSPORTATION_ACCIDENTS',
        'SENSITIVE_CATEGORY_SENSITIVE_SOCIAL_ISSUES',
        'SENSITIVE_CATEGORY_SHOCKING',
        'SENSITIVE_CATEGORY_EMBEDDED_VIDEO',
        'SENSITIVE_CATEGORY_LIVE_STREAMING_VIDEO',
      ])
      .exactOptional()
      .openapi({
        description: 'Output only. An enum for the DV360 Sensitive category content classifier.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Represents a targetable sensitive category. This will be populated in the sensitive_category_details field of the TargetingOption when targeting_type is `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION`.',
    required: [],
  })
  .openapi('SensitiveCategoryTargetingOptionDetails')

const SubExchangeTargetingOptionDetailsSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The display name of the sub-exchange.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Represents a targetable sub-exchange. This will be populated in the sub_exchange_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_SUB_EXCHANGE`.',
    required: [],
  })
  .openapi('SubExchangeTargetingOptionDetails')

const UserRewardedContentTargetingOptionDetailsSchema = z
  .object({
    userRewardedContent: z
      .enum([
        'USER_REWARDED_CONTENT_UNSPECIFIED',
        'USER_REWARDED_CONTENT_USER_REWARDED',
        'USER_REWARDED_CONTENT_NOT_USER_REWARDED',
      ])
      .exactOptional()
      .openapi({
        description: 'Output only. User rewarded content status for video ads.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Represents a targetable user rewarded content status for video ads only. This will be populated in the user_rewarded_content_details field when targeting_type is `TARGETING_TYPE_USER_REWARDED_CONTENT`.',
    required: [],
  })
  .openapi('UserRewardedContentTargetingOptionDetails')

const VideoPlayerSizeTargetingOptionDetailsSchema = z
  .object({
    videoPlayerSize: z
      .enum([
        'VIDEO_PLAYER_SIZE_UNSPECIFIED',
        'VIDEO_PLAYER_SIZE_SMALL',
        'VIDEO_PLAYER_SIZE_LARGE',
        'VIDEO_PLAYER_SIZE_HD',
        'VIDEO_PLAYER_SIZE_UNKNOWN',
      ])
      .exactOptional()
      .openapi({ description: 'Output only. The video player size.', readOnly: true }),
  })
  .openapi({
    description:
      'Represents a targetable video player size. This will be populated in the video_player_size_details field when targeting_type is `TARGETING_TYPE_VIDEO_PLAYER_SIZE`.',
    required: [],
  })
  .openapi('VideoPlayerSizeTargetingOptionDetails')

const ViewabilityTargetingOptionDetailsSchema = z
  .object({
    viewability: z
      .enum([
        'VIEWABILITY_UNSPECIFIED',
        'VIEWABILITY_10_PERCENT_OR_MORE',
        'VIEWABILITY_20_PERCENT_OR_MORE',
        'VIEWABILITY_30_PERCENT_OR_MORE',
        'VIEWABILITY_40_PERCENT_OR_MORE',
        'VIEWABILITY_50_PERCENT_OR_MORE',
        'VIEWABILITY_60_PERCENT_OR_MORE',
        'VIEWABILITY_70_PERCENT_OR_MORE',
        'VIEWABILITY_80_PERCENT_OR_MORE',
        'VIEWABILITY_90_PERCENT_OR_MORE',
      ])
      .exactOptional()
      .openapi({
        description: 'Output only. The predicted viewability percentage.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Represents a targetable viewability. This will be populated in the viewability_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_VIEWABILITY`.',
    required: [],
  })
  .openapi('ViewabilityTargetingOptionDetails')

const TargetingOptionSchema = z
  .object({
    ageRangeDetails: AgeRangeTargetingOptionDetailsSchema.exactOptional().openapi({
      description: 'Age range details.',
    }),
    appCategoryDetails: AppCategoryTargetingOptionDetailsSchema.exactOptional().openapi({
      description: 'App category details.',
    }),
    audioContentTypeDetails: AudioContentTypeTargetingOptionDetailsSchema.exactOptional().openapi({
      description: 'Audio content type details.',
    }),
    authorizedSellerStatusDetails:
      AuthorizedSellerStatusTargetingOptionDetailsSchema.exactOptional().openapi({
        description: 'Authorized seller status resource details.',
      }),
    browserDetails: BrowserTargetingOptionDetailsSchema.exactOptional().openapi({
      description: 'Browser details.',
    }),
    businessChainDetails: BusinessChainTargetingOptionDetailsSchema.exactOptional().openapi({
      description: 'Business chain resource details.',
    }),
    carrierAndIspDetails: CarrierAndIspTargetingOptionDetailsSchema.exactOptional().openapi({
      description: 'Carrier and ISP details.',
    }),
    categoryDetails: CategoryTargetingOptionDetailsSchema.exactOptional().openapi({
      description: 'Category resource details.',
    }),
    contentDurationDetails: ContentDurationTargetingOptionDetailsSchema.exactOptional().openapi({
      description: 'Content duration resource details.',
    }),
    contentGenreDetails: ContentGenreTargetingOptionDetailsSchema.exactOptional().openapi({
      description: 'Content genre resource details.',
    }),
    contentInstreamPositionDetails:
      ContentInstreamPositionTargetingOptionDetailsSchema.exactOptional().openapi({
        description: 'Content instream position details.',
      }),
    contentOutstreamPositionDetails:
      ContentOutstreamPositionTargetingOptionDetailsSchema.exactOptional().openapi({
        description: 'Content outstream position details.',
      }),
    contentStreamTypeDetails: ContentStreamTypeTargetingOptionDetailsSchema.exactOptional().openapi(
      { description: 'Content stream type resource details.' },
    ),
    deviceMakeModelDetails: DeviceMakeModelTargetingOptionDetailsSchema.exactOptional().openapi({
      description: 'Device make and model resource details.',
    }),
    deviceTypeDetails: DeviceTypeTargetingOptionDetailsSchema.exactOptional().openapi({
      description: 'Device type details.',
    }),
    digitalContentLabelDetails:
      DigitalContentLabelTargetingOptionDetailsSchema.exactOptional().openapi({
        description: 'Digital content label details.',
      }),
    environmentDetails: EnvironmentTargetingOptionDetailsSchema.exactOptional().openapi({
      description: 'Environment details.',
    }),
    exchangeDetails: ExchangeTargetingOptionDetailsSchema.exactOptional().openapi({
      description: 'Exchange details.',
    }),
    genderDetails: GenderTargetingOptionDetailsSchema.exactOptional().openapi({
      description: 'Gender details.',
    }),
    geoRegionDetails: GeoRegionTargetingOptionDetailsSchema.exactOptional().openapi({
      description: 'Geographic region resource details.',
    }),
    householdIncomeDetails: HouseholdIncomeTargetingOptionDetailsSchema.exactOptional().openapi({
      description: 'Household income details.',
    }),
    languageDetails: LanguageTargetingOptionDetailsSchema.exactOptional().openapi({
      description: 'Language resource details.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The resource name for this targeting option.',
        readOnly: true,
      }),
    nativeContentPositionDetails:
      NativeContentPositionTargetingOptionDetailsSchema.exactOptional().openapi({
        description: 'Native content position details.',
      }),
    omidDetails: OmidTargetingOptionDetailsSchema.exactOptional().openapi({
      description: 'Open Measurement enabled inventory details.',
    }),
    onScreenPositionDetails: OnScreenPositionTargetingOptionDetailsSchema.exactOptional().openapi({
      description: 'On screen position details.',
    }),
    operatingSystemDetails: OperatingSystemTargetingOptionDetailsSchema.exactOptional().openapi({
      description: 'Operating system resources details.',
    }),
    parentalStatusDetails: ParentalStatusTargetingOptionDetailsSchema.exactOptional().openapi({
      description: 'Parental status details.',
    }),
    poiDetails: PoiTargetingOptionDetailsSchema.exactOptional().openapi({
      description: 'POI resource details.',
    }),
    sensitiveCategoryDetails: SensitiveCategoryTargetingOptionDetailsSchema.exactOptional().openapi(
      { description: 'Sensitive Category details.' },
    ),
    subExchangeDetails: SubExchangeTargetingOptionDetailsSchema.exactOptional().openapi({
      description: 'Sub-exchange details.',
    }),
    targetingOptionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. A unique identifier for this targeting option. The tuple {`targeting_type`, `targeting_option_id`} will be unique.',
        readOnly: true,
      }),
    targetingType: z
      .enum([
        'TARGETING_TYPE_UNSPECIFIED',
        'TARGETING_TYPE_CHANNEL',
        'TARGETING_TYPE_APP_CATEGORY',
        'TARGETING_TYPE_APP',
        'TARGETING_TYPE_URL',
        'TARGETING_TYPE_DAY_AND_TIME',
        'TARGETING_TYPE_AGE_RANGE',
        'TARGETING_TYPE_REGIONAL_LOCATION_LIST',
        'TARGETING_TYPE_PROXIMITY_LOCATION_LIST',
        'TARGETING_TYPE_GENDER',
        'TARGETING_TYPE_VIDEO_PLAYER_SIZE',
        'TARGETING_TYPE_USER_REWARDED_CONTENT',
        'TARGETING_TYPE_PARENTAL_STATUS',
        'TARGETING_TYPE_CONTENT_INSTREAM_POSITION',
        'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION',
        'TARGETING_TYPE_DEVICE_TYPE',
        'TARGETING_TYPE_AUDIENCE_GROUP',
        'TARGETING_TYPE_BROWSER',
        'TARGETING_TYPE_HOUSEHOLD_INCOME',
        'TARGETING_TYPE_ON_SCREEN_POSITION',
        'TARGETING_TYPE_THIRD_PARTY_VERIFIER',
        'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION',
        'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION',
        'TARGETING_TYPE_ENVIRONMENT',
        'TARGETING_TYPE_CARRIER_AND_ISP',
        'TARGETING_TYPE_OPERATING_SYSTEM',
        'TARGETING_TYPE_DEVICE_MAKE_MODEL',
        'TARGETING_TYPE_KEYWORD',
        'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST',
        'TARGETING_TYPE_VIEWABILITY',
        'TARGETING_TYPE_CATEGORY',
        'TARGETING_TYPE_INVENTORY_SOURCE',
        'TARGETING_TYPE_LANGUAGE',
        'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS',
        'TARGETING_TYPE_GEO_REGION',
        'TARGETING_TYPE_INVENTORY_SOURCE_GROUP',
        'TARGETING_TYPE_EXCHANGE',
        'TARGETING_TYPE_SUB_EXCHANGE',
        'TARGETING_TYPE_POI',
        'TARGETING_TYPE_BUSINESS_CHAIN',
        'TARGETING_TYPE_CONTENT_DURATION',
        'TARGETING_TYPE_CONTENT_STREAM_TYPE',
        'TARGETING_TYPE_NATIVE_CONTENT_POSITION',
        'TARGETING_TYPE_OMID',
        'TARGETING_TYPE_AUDIO_CONTENT_TYPE',
        'TARGETING_TYPE_CONTENT_GENRE',
        'TARGETING_TYPE_YOUTUBE_VIDEO',
        'TARGETING_TYPE_YOUTUBE_CHANNEL',
        'TARGETING_TYPE_SESSION_POSITION',
      ])
      .exactOptional()
      .openapi({ description: 'Output only. The type of this targeting option.', readOnly: true }),
    userRewardedContentDetails:
      UserRewardedContentTargetingOptionDetailsSchema.exactOptional().openapi({
        description: 'User rewarded content details.',
      }),
    videoPlayerSizeDetails: VideoPlayerSizeTargetingOptionDetailsSchema.exactOptional().openapi({
      description: 'Video player size details.',
    }),
    viewabilityDetails: ViewabilityTargetingOptionDetailsSchema.exactOptional().openapi({
      description: 'Viewability resource details.',
    }),
  })
  .openapi({
    description: 'Represents a single targeting option, which is a targetable concept in DV360.',
    required: [],
  })
  .openapi('TargetingOption')

const ListTargetingOptionsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListTargetingOptions` method to retrieve the next page of results.',
      }),
    targetingOptions: z
      .array(TargetingOptionSchema)
      .exactOptional()
      .openapi({
        description: 'The list of targeting options. This list will be absent if empty.',
      }),
  })
  .openapi({ description: 'Response message for ListTargetingOptions.', required: [] })
  .openapi('ListTargetingOptionsResponse')

const UserSchema = z
  .object({
    assignedUserRoles: z
      .array(AssignedUserRoleSchema)
      .exactOptional()
      .openapi({
        description:
          'The assigned user roles. Required in CreateUser. Output only in UpdateUser. Can only be updated through BulkEditAssignedUserRoles.',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The display name of the user. Must be UTF-8 encoded with a maximum size of 240 bytes.',
      }),
    email: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. Immutable. The email address used to identify the user.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The resource name of the user.', readOnly: true }),
    userId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The unique ID of the user. Assigned by the system.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'A single user in Display & Video 360.', required: [] })
  .openapi('User')

const ListUsersResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListUsers` method to retrieve the next page of results. This token will be absent if there are no more results to return.',
      }),
    users: z
      .array(UserSchema)
      .exactOptional()
      .openapi({ description: 'The list of users. This list will be absent if empty.' }),
  })
  .openapi({ required: [] })
  .openapi('ListUsersResponse')

const MastheadAdSchema = z
  .object({
    autoplayVideoDuration: z
      .string()
      .exactOptional()
      .openapi({ description: 'The duration of time the video will autoplay.' }),
    autoplayVideoStartMillisecond: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The amount of time in milliseconds after which the video will start to play.',
      }),
    callToActionButtonLabel: z
      .string()
      .exactOptional()
      .openapi({ description: 'The text on the call-to-action button.' }),
    callToActionFinalUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The destination URL for the call-to-action button.' }),
    callToActionTrackingUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The tracking URL for the call-to-action button.' }),
    companionYoutubeVideos: z
      .array(YoutubeVideoDetailsSchema)
      .exactOptional()
      .openapi({
        description:
          'The videos that appear next to the Masthead Ad on desktop. Can be no more than two.',
      }),
    description: z.string().exactOptional().openapi({ description: 'The description of the ad.' }),
    headline: z.string().exactOptional().openapi({ description: 'The headline of the ad.' }),
    showChannelArt: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether to show a background or banner that appears at the top of a YouTube page.',
      }),
    video: YoutubeVideoDetailsSchema.exactOptional().openapi({
      description: 'The YouTube video used by the ad.',
    }),
    videoAspectRatio: z
      .enum([
        'VIDEO_ASPECT_RATIO_UNSPECIFIED',
        'VIDEO_ASPECT_RATIO_WIDESCREEN',
        'VIDEO_ASPECT_RATIO_FIXED_16_9',
      ])
      .exactOptional()
      .openapi({
        description: 'The aspect ratio of the autoplaying YouTube video on the Masthead.',
      }),
  })
  .openapi({ description: 'Details for a Masthead Ad.', required: [] })
  .openapi('MastheadAd')

const NonSkippableAdSchema = z
  .object({
    commonInStreamAttribute: CommonInStreamAttributeSchema.exactOptional().openapi({
      description: 'Common ad attributes.',
    }),
    customParameters: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'The custom parameters to pass custom values to tracking URL template.',
      }),
  })
  .openapi({ description: 'Details for a non-skippable ad.', required: [] })
  .openapi('NonSkippableAd')

const VideoDiscoveryAdSchema = z
  .object({
    description1: z
      .string()
      .exactOptional()
      .openapi({ description: 'First text line for the ad.' }),
    description2: z
      .string()
      .exactOptional()
      .openapi({ description: 'Second text line for the ad.' }),
    headline: z.string().exactOptional().openapi({ description: 'The headline of ad.' }),
    thumbnail: z
      .enum([
        'THUMBNAIL_UNSPECIFIED',
        'THUMBNAIL_DEFAULT',
        'THUMBNAIL_1',
        'THUMBNAIL_2',
        'THUMBNAIL_3',
      ])
      .exactOptional()
      .openapi({ description: 'Thumbnail image used in the ad.' }),
    video: YoutubeVideoDetailsSchema.exactOptional().openapi({
      description: 'The YouTube video the ad promotes.',
    }),
  })
  .openapi({ description: 'Details for a video discovery ad.', required: [] })
  .openapi('VideoDiscoveryAd')

const VideoPerformanceAdSchema = z
  .object({
    actionButtonLabels: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The list of text assets shown on the call-to-action button.' }),
    companionBanners: z
      .array(ImageAssetSchema)
      .exactOptional()
      .openapi({ description: 'The list of companion banners used by this ad.' }),
    customParameters: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'The custom parameters to pass custom values to tracking URL template.',
      }),
    descriptions: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The list of descriptions shown on the call-to-action banner.' }),
    displayUrlBreadcrumb1: z
      .string()
      .exactOptional()
      .openapi({ description: 'The first piece after the domain in the display URL.' }),
    displayUrlBreadcrumb2: z
      .string()
      .exactOptional()
      .openapi({ description: 'The second piece after the domain in the display URL.' }),
    domain: z.string().exactOptional().openapi({ description: 'The domain of the display URL.' }),
    finalUrl: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The URL address of the webpage that people reach after they click the ad.',
      }),
    headlines: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The list of headlines shown on the call-to-action banner.' }),
    longHeadlines: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The list of lone headlines shown on the call-to-action banner.' }),
    trackingUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL address loaded in the background for tracking purposes.' }),
    videos: z
      .array(YoutubeVideoDetailsSchema)
      .exactOptional()
      .openapi({ description: 'The list of YouTube video assets used by this ad.' }),
  })
  .openapi({ description: 'Details for a video performance ad.', required: [] })
  .openapi('VideoPerformanceAd')

const YoutubeAdGroupAdSchema = z
  .object({
    adGroupAdId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique ID of the ad. Assigned by the system.' }),
    adGroupId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique ID of the ad group that the ad belongs to.' }),
    adUrls: z
      .array(AdUrlSchema)
      .exactOptional()
      .openapi({ description: 'List of URLs used by the ad.' }),
    advertiserId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique ID of the advertiser the ad belongs to.' }),
    audioAd: AudioAdSchema.exactOptional().openapi({
      description:
        'Details of an [audio ad](//support.google.com/displayvideo/answer/6274216) used for reach marketing objectives.',
    }),
    bumperAd: BumperAdSchema.exactOptional().openapi({
      description:
        'Details of a [non-skippable short video ad](//support.google.com/displayvideo/answer/6274216), equal to or less than 6 seconds, used for reach.',
    }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The display name of the ad. Must be UTF-8 encoded with a maximum size of 255 bytes.',
      }),
    displayVideoSourceAd: DisplayVideoSourceAdSchema.exactOptional().openapi({
      description: 'Details of an ad sourced from a Display & Video 360 creative.',
    }),
    entityStatus: z
      .enum([
        'ENTITY_STATUS_UNSPECIFIED',
        'ENTITY_STATUS_ACTIVE',
        'ENTITY_STATUS_ARCHIVED',
        'ENTITY_STATUS_DRAFT',
        'ENTITY_STATUS_PAUSED',
        'ENTITY_STATUS_SCHEDULED_FOR_DELETION',
      ])
      .exactOptional()
      .openapi({ description: 'The entity status of the ad.' }),
    inStreamAd: InStreamAdSchema.exactOptional().openapi({
      description:
        'Details of an [in-stream ad skippable after 5 seconds](//support.google.com/displayvideo/answer/6274216), used for brand awareness or reach marketing objectives.',
    }),
    mastheadAd: MastheadAdSchema.exactOptional().openapi({
      description:
        'Details of an [ad served on the YouTube Home feed](//support.google.com/google-ads/answer/9709826).',
    }),
    name: z.string().exactOptional().openapi({ description: 'The resource name of the ad.' }),
    nonSkippableAd: NonSkippableAdSchema.exactOptional().openapi({
      description:
        'Details of a [non-skippable short in-stream video ad](//support.google.com/displayvideo/answer/6274216), between 6 and 15 seconds, used for reach marketing objectives.',
    }),
    videoDiscoverAd: VideoDiscoveryAdSchema.exactOptional().openapi({
      description:
        'Details of an [ad promoting a video](//support.google.com/displayvideo/answer/6274216) that shows in places of discovery.',
    }),
    videoPerformanceAd: VideoPerformanceAdSchema.exactOptional().openapi({
      description:
        'Details of an [ad used in a video action campaign](//support.google.com/google-ads/answer/10147229) to drive actions to the business, service or product.',
    }),
  })
  .openapi({ description: 'A single ad associated with a YouTube ad group.', required: [] })
  .openapi('YoutubeAdGroupAd')

const ListYoutubeAdGroupAdsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListYoutubeAdGroupAds` method to retrieve the next page of results.',
      }),
    youtubeAdGroupAds: z
      .array(YoutubeAdGroupAdSchema)
      .exactOptional()
      .openapi({ description: 'The list of ad group ads. This list will be absent if empty.' }),
  })
  .openapi({ required: [] })
  .openapi('ListYoutubeAdGroupAdsResponse')

const ListYoutubeAdGroupAssignedTargetingOptionsResponseSchema = z
  .object({
    assignedTargetingOptions: z
      .array(AssignedTargetingOptionSchema)
      .exactOptional()
      .openapi({
        description: 'The list of assigned targeting options. This list will be absent if empty.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token identifying the next page of results. This value should be specified as the pageToken in a subsequent ListYoutubeAdGroupAssignedTargetingOptionsRequest to fetch the next page of results. This token will be absent if there are no more assigned_targeting_options to return.',
      }),
  })
  .openapi({
    description: 'Response message for ListYoutubeAdGroupAssignedTargetingOptions.',
    required: [],
  })
  .openapi('ListYoutubeAdGroupAssignedTargetingOptionsResponse')

const ProductMatchDimensionSchema = z
  .object({
    customLabel: CustomLabelSchema.exactOptional().openapi({
      description: 'The custom label to match all the products with the label.',
    }),
    productOfferId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the product offer to match with a product with the same offer ID.',
      }),
  })
  .openapi({ description: 'A dimension used to match products.', required: [] })
  .openapi('ProductMatchDimension')

const ProductFeedDataSchema = z
  .object({
    isFeedDisabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the product feed has opted-out of showing products.' }),
    productMatchDimensions: z
      .array(ProductMatchDimensionSchema)
      .exactOptional()
      .openapi({ description: 'A list of dimensions used to match products.' }),
    productMatchType: z
      .enum([
        'PRODUCT_MATCH_TYPE_UNSPECIFIED',
        'PRODUCT_MATCH_TYPE_ALL_PRODUCTS',
        'PRODUCT_MATCH_TYPE_SPECIFIC_PRODUCTS',
        'PRODUCT_MATCH_TYPE_CUSTOM_LABEL',
      ])
      .exactOptional()
      .openapi({ description: 'How products are selected by the product feed.' }),
  })
  .openapi({ description: 'The details of product feed.', required: [] })
  .openapi('ProductFeedData')

const YoutubeAdGroupSchema = z
  .object({
    adGroupFormat: z
      .enum([
        'YOUTUBE_AND_PARTNERS_AD_GROUP_FORMAT_UNSPECIFIED',
        'YOUTUBE_AND_PARTNERS_AD_GROUP_FORMAT_IN_STREAM',
        'YOUTUBE_AND_PARTNERS_AD_GROUP_FORMAT_VIDEO_DISCOVERY',
        'YOUTUBE_AND_PARTNERS_AD_GROUP_FORMAT_BUMPER',
        'YOUTUBE_AND_PARTNERS_AD_GROUP_FORMAT_NON_SKIPPABLE_IN_STREAM',
        'YOUTUBE_AND_PARTNERS_AD_GROUP_FORMAT_AUDIO',
        'YOUTUBE_AND_PARTNERS_AD_GROUP_FORMAT_ACTION',
        'YOUTUBE_AND_PARTNERS_AD_GROUP_FORMAT_REACH',
        'YOUTUBE_AND_PARTNERS_AD_GROUP_FORMAT_MASTHEAD',
      ])
      .exactOptional()
      .openapi({ description: 'The format of the ads in the ad group.' }),
    adGroupId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique ID of the ad group. Assigned by the system.' }),
    advertiserId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique ID of the advertiser the ad group belongs to.' }),
    biddingStrategy: YoutubeAndPartnersBiddingStrategySchema.exactOptional().openapi({
      description: 'The bidding strategy used by the ad group.',
    }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The display name of the ad group. Must be UTF-8 encoded with a maximum size of 255 bytes.',
      }),
    entityStatus: z
      .enum([
        'ENTITY_STATUS_UNSPECIFIED',
        'ENTITY_STATUS_ACTIVE',
        'ENTITY_STATUS_ARCHIVED',
        'ENTITY_STATUS_DRAFT',
        'ENTITY_STATUS_PAUSED',
        'ENTITY_STATUS_SCHEDULED_FOR_DELETION',
      ])
      .exactOptional()
      .openapi({
        description:
          "Controls whether or not the ad group can spend its budget and bid on inventory. If the ad group's parent line item is not active, the ad group can't spend its budget even if its own status is `ENTITY_STATUS_ACTIVE`.",
      }),
    lineItemId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique ID of the line item that the ad group belongs to.' }),
    name: z.string().exactOptional().openapi({ description: 'The resource name of the ad group.' }),
    productFeedData: ProductFeedDataSchema.exactOptional().openapi({
      description: 'The settings of the product feed in this ad group.',
    }),
    targetingExpansion: TargetingExpansionConfigSchema.exactOptional().openapi({
      description:
        'The [targeting expansion](https://support.google.com/displayvideo/answer/10191558) settings of the ad group. This config is only applicable when eligible audience list targeting is assigned to the ad group.',
    }),
    youtubeAdIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'The IDs of the youtube_ad_group_ad resources associated with the ad group.',
      }),
  })
  .openapi({
    description: 'A single YouTube ad group associated with a YouTube and Partners line item.',
    required: [],
  })
  .openapi('YoutubeAdGroup')

const ListYoutubeAdGroupsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListYoutubeAdGroups` method to retrieve the next page of results.',
      }),
    youtubeAdGroups: z
      .array(YoutubeAdGroupSchema)
      .exactOptional()
      .openapi({ description: 'The list of ad groups. This list will be absent if empty.' }),
  })
  .openapi({ required: [] })
  .openapi('ListYoutubeAdGroupsResponse')

const LookupInvoiceCurrencyResponseSchema = z
  .object({
    currencyCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Currency used by the advertiser in ISO 4217 format.' }),
  })
  .openapi({ required: [] })
  .openapi('LookupInvoiceCurrencyResponse')

const OperationSchema = z
  .object({
    done: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.',
      }),
    error: StatusSchema.exactOptional().openapi({
      description: 'The error result of the operation in case of failure or cancellation.',
    }),
    metadata: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.',
      }),
    response: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.',
      }),
  })
  .openapi({
    description:
      'This resource represents a long-running operation that is the result of a network API call.',
    required: [],
  })
  .openapi('Operation')

const PoiSearchTermsSchema = z
  .object({
    poiQuery: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The search query for the desired POI name, street address, or coordinate of the desired POI. The query can be a prefix, e.g. "Times squar", "40.7505045,-73.99562", "315 W 44th St", etc.',
      }),
  })
  .openapi({ description: 'Search terms for POI targeting options.', required: [] })
  .openapi('PoiSearchTerms')

const ReplaceNegativeKeywordsRequestSchema = z
  .object({
    newNegativeKeywords: z
      .array(NegativeKeywordSchema)
      .exactOptional()
      .openapi({
        description:
          'The negative keywords that will replace the existing keywords in the negative keyword list, specified as a list of NegativeKeywords.',
      }),
  })
  .openapi({
    description: 'Request message for NegativeKeywordService.ReplaceNegativeKeywords.',
    required: [],
  })
  .openapi('ReplaceNegativeKeywordsRequest')

const ReplaceNegativeKeywordsResponseSchema = z
  .object({
    negativeKeywords: z
      .array(NegativeKeywordSchema)
      .exactOptional()
      .openapi({
        description: 'The full list of negative keywords now present in the negative keyword list.',
      }),
  })
  .openapi({
    description: 'Response message for NegativeKeywordService.ReplaceNegativeKeywords.',
    required: [],
  })
  .openapi('ReplaceNegativeKeywordsResponse')

const ReplaceSitesRequestSchema = z
  .object({
    advertiserId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the advertiser that owns the parent channel.' }),
    newSites: z
      .array(SiteSchema)
      .exactOptional()
      .openapi({
        description:
          'The sites that will replace the existing sites assigned to the channel, specified as a list of Sites.',
      }),
    partnerId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the partner that owns the parent channel.' }),
  })
  .openapi({ description: 'Request message for SiteService.ReplaceSites.', required: [] })
  .openapi('ReplaceSitesRequest')

const ReplaceSitesResponseSchema = z
  .object({
    sites: z
      .array(SiteSchema)
      .exactOptional()
      .openapi({ description: 'The list of sites in the channel after replacing.' }),
  })
  .openapi({ description: 'Response message for SiteService.ReplaceSites.', required: [] })
  .openapi('ReplaceSitesResponse')

const SdfDownloadTaskSchema = z
  .object({
    resourceName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A resource name to be used in media.download to Download the prepared files. Resource names have the format `download/sdfdownloadtasks/media/{media_id}`. `media_id` will be made available by the long running operation service once the task status is done.',
      }),
  })
  .openapi({
    description:
      'Type for the response returned by [SdfDownloadTaskService.CreateSdfDownloadTask].',
    required: [],
  })
  .openapi('SdfDownloadTask')

const SdfDownloadTaskMetadataSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time when the operation was created.' }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time when execution was completed.' }),
    version: z
      .enum([
        'SDF_VERSION_UNSPECIFIED',
        'SDF_VERSION_3_1',
        'SDF_VERSION_4',
        'SDF_VERSION_4_1',
        'SDF_VERSION_4_2',
        'SDF_VERSION_5',
        'SDF_VERSION_5_1',
        'SDF_VERSION_5_2',
        'SDF_VERSION_5_3',
        'SDF_VERSION_5_4',
        'SDF_VERSION_5_5',
      ])
      .exactOptional()
      .openapi({ description: 'The SDF version used to execute this download task.' }),
  })
  .openapi({
    description:
      'Type for the metadata returned by [SdfDownloadTaskService.CreateSdfDownloadTask].',
    required: [],
  })
  .openapi('SdfDownloadTaskMetadata')

const SearchTargetingOptionsRequestSchema = z
  .object({
    advertiserId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. The Advertiser this request is being made in the context of.',
      }),
    businessChainSearchTerms: BusinessChainSearchTermsSchema.exactOptional().openapi({
      description:
        'Search terms for Business Chain targeting options. Can only be used when targeting_type is `TARGETING_TYPE_BUSINESS_CHAIN`.',
    }),
    geoRegionSearchTerms: GeoRegionSearchTermsSchema.exactOptional().openapi({
      description:
        'Search terms for geo region targeting options. Can only be used when targeting_type is `TARGETING_TYPE_GEO_REGION`.',
    }),
    pageSize: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.',
      }),
    pageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `SearchTargetingOptions` method. If not specified, the first page of results will be returned.',
      }),
    poiSearchTerms: PoiSearchTermsSchema.exactOptional().openapi({
      description:
        'Search terms for POI targeting options. Can only be used when targeting_type is `TARGETING_TYPE_POI`.',
    }),
  })
  .openapi({ description: 'Request message for SearchTargetingOptions.', required: [] })
  .openapi('SearchTargetingOptionsRequest')

const SearchTargetingOptionsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `SearchTargetingOptions` method to retrieve the next page of results.',
      }),
    targetingOptions: z
      .array(TargetingOptionSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of targeting options that match the search criteria. This list will be absent if empty.',
      }),
  })
  .openapi({ description: 'Response message for SearchTargetingOptions.', required: [] })
  .openapi('SearchTargetingOptionsResponse')

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
        'https://www.googleapis.com/auth/display-video':
          'Create, see, edit, and permanently delete your Display & Video 360 entities and reports',
        'https://www.googleapis.com/auth/display-video-mediaplanning':
          'Create, see, and edit Display & Video 360 Campaign entities and see billing invoices',
        'https://www.googleapis.com/auth/display-video-user-management':
          'Private Service: https://www.googleapis.com/auth/display-video-user-management',
        'https://www.googleapis.com/auth/doubleclickbidmanager':
          'View and manage your reports in DoubleClick Bid Manager',
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
        'https://www.googleapis.com/auth/display-video':
          'Create, see, edit, and permanently delete your Display & Video 360 entities and reports',
        'https://www.googleapis.com/auth/display-video-mediaplanning':
          'Create, see, and edit Display & Video 360 Campaign entities and see billing invoices',
        'https://www.googleapis.com/auth/display-video-user-management':
          'Private Service: https://www.googleapis.com/auth/display-video-user-management',
        'https://www.googleapis.com/auth/doubleclickbidmanager':
          'View and manage your reports in DoubleClick Bid Manager',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getDownloadResourceNameRoute = createRoute({
  method: 'get',
  path: '/download/{resourceName}',
  tags: ['media'],
  description:
    'Downloads media. Download is supported on the URI `/download/{resource_name=**}?alt=media.` **Note**: Download requests will not be successful without including `alt=media` query string.',
  operationId: 'displayvideo.media.download',
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
    }),
    params: z.object({
      resourceName: z
        .string()
        .openapi({
          param: {
            description:
              'Name of the media that is being downloaded. See ReadRequest.resource_name.',
            in: 'path',
            name: 'resourceName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleBytestreamMediaSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/doubleclickbidmanager'],
      Oauth2c: ['https://www.googleapis.com/auth/doubleclickbidmanager'],
    },
  ],
})

export const postMediaResourceNameRoute = createRoute({
  method: 'post',
  path: '/media/{resourceName}',
  tags: ['media'],
  description:
    'Uploads media. Upload is supported on the URI `/upload/media/{resource_name=**}?upload_type=media.` **Note**: Upload requests will not be successful without including `upload_type=media` query string.',
  operationId: 'displayvideo.media.upload',
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
    }),
    params: z.object({
      resourceName: z
        .string()
        .openapi({
          param: {
            description:
              'Name of the media that is being downloaded. See ReadRequest.resource_name.',
            in: 'path',
            name: 'resourceName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/octet-stream': { schema: GoogleBytestreamMediaSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleBytestreamMediaSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/doubleclickbidmanager'],
      Oauth2c: ['https://www.googleapis.com/auth/doubleclickbidmanager'],
    },
  ],
})

export const getV2AdvertisersRoute = createRoute({
  method: 'get',
  path: '/v2/advertisers',
  tags: ['advertisers'],
  description:
    'Lists advertisers that are accessible to the current user. The order is defined by the order_by parameter. A single partner_id is required. Cross-partner listing is not supported.',
  operationId: 'displayvideo.advertisers.list',
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
              'Allows filtering by advertiser properties. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * The operator used on `updateTime` must be `GREATER THAN OR EQUAL TO (>=)` or `LESS THAN OR EQUAL TO (<=)`. * The operator must be `EQUALS (=)`. * Supported fields: - `advertiserId` - `displayName` - `entityStatus` - `updateTime` (input in ISO 8601 format, or YYYY-MM-DDTHH:MM:SSZ) Examples: * All active advertisers under a partner: `entityStatus="ENTITY_STATUS_ACTIVE"` * All advertisers with an update time less than or equal to `2020-11-04T18:54:47Z (format of ISO 8601)`: `updateTime<="2020-11-04T18:54:47Z"` * All advertisers with an update time greater than or equal to `2020-11-04T18:54:47Z (format of ISO 8601)`: `updateTime>="2020-11-04T18:54:47Z"` The length of this field should be no more than 500 characters.',
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
              'Field by which to sort the list. Acceptable values are: * `displayName` (default) * `entityStatus` * `updateTime` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. For example, `displayName desc`.',
            in: 'query',
            name: 'orderBy',
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
              'Requested page size. Must be between `1` and `200`. If unspecified will default to `100`.',
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
            description:
              'A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListAdvertisers` method. If not specified, the first page of results will be returned.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      partnerId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. The ID of the partner that the fetched advertisers should all belong to. The system only supports listing advertisers for one partner at a time.',
            in: 'query',
            name: 'partnerId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListAdvertisersResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const postV2AdvertisersRoute = createRoute({
  method: 'post',
  path: '/v2/advertisers',
  tags: ['advertisers'],
  description:
    'Creates a new advertiser. Returns the newly created advertiser if successful. This method can take up to 180 seconds to complete.',
  operationId: 'displayvideo.advertisers.create',
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
    }),
    body: { content: { 'application/json': { schema: AdvertiserSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AdvertiserSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const getV2AdvertisersAdvertiserIdRoute = createRoute({
  method: 'get',
  path: '/v2/advertisers/{advertiserId}',
  tags: ['advertisers'],
  description: 'Gets an advertiser.',
  operationId: 'displayvideo.advertisers.get',
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
    }),
    params: z.object({
      advertiserId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the advertiser to fetch.',
            in: 'path',
            name: 'advertiserId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AdvertiserSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const deleteV2AdvertisersAdvertiserIdRoute = createRoute({
  method: 'delete',
  path: '/v2/advertisers/{advertiserId}',
  tags: ['advertisers'],
  description:
    'Deletes an advertiser. Deleting an advertiser will delete all of its child resources, for example, campaigns, insertion orders and line items. A deleted advertiser cannot be recovered.',
  operationId: 'displayvideo.advertisers.delete',
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
    }),
    params: z.object({
      advertiserId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the advertiser we need to delete.',
            in: 'path',
            name: 'advertiserId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const patchV2AdvertisersAdvertiserIdRoute = createRoute({
  method: 'patch',
  path: '/v2/advertisers/{advertiserId}',
  tags: ['advertisers'],
  description: 'Updates an existing advertiser. Returns the updated advertiser if successful.',
  operationId: 'displayvideo.advertisers.patch',
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
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. The mask to control which fields to update.',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      advertiserId: z
        .string()
        .openapi({
          param: {
            description: 'Output only. The unique ID of the advertiser. Assigned by the system.',
            in: 'path',
            name: 'advertiserId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AdvertiserSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AdvertiserSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const postV2AdvertisersAdvertiserIdAssetsRoute = createRoute({
  method: 'post',
  path: '/v2/advertisers/{advertiserId}/assets',
  tags: ['advertisers'],
  description:
    'Uploads an asset. Returns the ID of the newly uploaded asset if successful. The asset file size should be no more than 10 MB for images, 200 MB for ZIP files, and 1 GB for videos. Must be used within the [multipart media upload process](/display-video/api/guides/how-tos/upload#multipart). Examples using provided client libraries can be found in our [Creating Creatives guide](/display-video/api/guides/creating-creatives/overview#upload_an_asset).',
  operationId: 'displayvideo.advertisers.assets.upload',
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
    }),
    params: z.object({
      advertiserId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the advertiser this asset belongs to.',
            in: 'path',
            name: 'advertiserId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/octet-stream': { schema: CreateAssetRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CreateAssetResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const getV2AdvertisersAdvertiserIdCampaignsRoute = createRoute({
  method: 'get',
  path: '/v2/advertisers/{advertiserId}/campaigns',
  tags: ['advertisers'],
  description:
    'Lists campaigns in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, campaigns with `ENTITY_STATUS_ARCHIVED` will not be included in the results.',
  operationId: 'displayvideo.advertisers.campaigns.list',
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
              'Allows filtering by campaign properties. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * The operator used on `updateTime` must be `GREATER THAN OR EQUAL TO (>=)` or `LESS THAN OR EQUAL TO (<=)`. * The operator must be `EQUALS (=)`. * Supported fields: - `campaignId` - `displayName` - `entityStatus` - `updateTime` (input in ISO 8601 format, or YYYY-MM-DDTHH:MM:SSZ) Examples: * All `ENTITY_STATUS_ACTIVE` or `ENTITY_STATUS_PAUSED` campaigns under an advertiser: `(entityStatus="ENTITY_STATUS_ACTIVE" OR entityStatus="ENTITY_STATUS_PAUSED")` * All campaigns with an update time less than or equal to `2020-11-04T18:54:47Z (format of ISO 8601)`: `updateTime<="2020-11-04T18:54:47Z"` * All campaigns with an update time greater than or equal to `2020-11-04T18:54:47Z (format of ISO 8601)`: `updateTime>="2020-11-04T18:54:47Z"` The length of this field should be no more than 500 characters.',
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
              'Field by which to sort the list. Acceptable values are: * `displayName` (default) * `entityStatus` * `updateTime` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`.',
            in: 'query',
            name: 'orderBy',
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
              'Requested page size. Must be between `1` and `200`. If unspecified will default to `100`.',
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
            description:
              'A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListCampaigns` method. If not specified, the first page of results will be returned.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      advertiserId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the advertiser to list campaigns for.',
            in: 'path',
            name: 'advertiserId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListCampaignsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video-mediaplanning'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video-mediaplanning'],
    },
  ],
})

export const postV2AdvertisersAdvertiserIdCampaignsRoute = createRoute({
  method: 'post',
  path: '/v2/advertisers/{advertiserId}/campaigns',
  tags: ['advertisers'],
  description: 'Creates a new campaign. Returns the newly created campaign if successful.',
  operationId: 'displayvideo.advertisers.campaigns.create',
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
    }),
    params: z.object({
      advertiserId: z
        .string()
        .openapi({
          param: {
            description: 'Output only. The unique ID of the advertiser the campaign belongs to.',
            in: 'path',
            name: 'advertiserId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CampaignSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CampaignSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video-mediaplanning'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video-mediaplanning'],
    },
  ],
})

export const getV2AdvertisersAdvertiserIdCampaignsCampaignIdRoute = createRoute({
  method: 'get',
  path: '/v2/advertisers/{advertiserId}/campaigns/{campaignId}',
  tags: ['advertisers'],
  description: 'Gets a campaign.',
  operationId: 'displayvideo.advertisers.campaigns.get',
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
    }),
    params: z.object({
      advertiserId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the advertiser this campaign belongs to.',
            in: 'path',
            name: 'advertiserId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      campaignId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the campaign to fetch.',
            in: 'path',
            name: 'campaignId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CampaignSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video-mediaplanning'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video-mediaplanning'],
    },
  ],
})

export const deleteV2AdvertisersAdvertiserIdCampaignsCampaignIdRoute = createRoute({
  method: 'delete',
  path: '/v2/advertisers/{advertiserId}/campaigns/{campaignId}',
  tags: ['advertisers'],
  description:
    'Permanently deletes a campaign. A deleted campaign cannot be recovered. The campaign should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it.',
  operationId: 'displayvideo.advertisers.campaigns.delete',
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
    }),
    params: z.object({
      advertiserId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the advertiser this campaign belongs to.',
            in: 'path',
            name: 'advertiserId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      campaignId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the campaign we need to delete.',
            in: 'path',
            name: 'campaignId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video-mediaplanning'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video-mediaplanning'],
    },
  ],
})

export const patchV2AdvertisersAdvertiserIdCampaignsCampaignIdRoute = createRoute({
  method: 'patch',
  path: '/v2/advertisers/{advertiserId}/campaigns/{campaignId}',
  tags: ['advertisers'],
  description: 'Updates an existing campaign. Returns the updated campaign if successful.',
  operationId: 'displayvideo.advertisers.campaigns.patch',
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
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. The mask to control which fields to update.',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      advertiserId: z
        .string()
        .openapi({
          param: {
            description: 'Output only. The unique ID of the advertiser the campaign belongs to.',
            in: 'path',
            name: 'advertiserId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      campaignId: z
        .string()
        .openapi({
          param: {
            description: 'Output only. The unique ID of the campaign. Assigned by the system.',
            in: 'path',
            name: 'campaignId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CampaignSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CampaignSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video-mediaplanning'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video-mediaplanning'],
    },
  ],
})

export const getV2AdvertisersAdvertiserIdCampaignsCampaignIdTargetingTypesTargetingTypeAssignedTargetingOptionsRoute =
  createRoute({
    method: 'get',
    path: '/v2/advertisers/{advertiserId}/campaigns/{campaignId}/targetingTypes/{targetingType}/assignedTargetingOptions',
    tags: ['advertisers'],
    description:
      'Lists the targeting options assigned to a campaign for a specified targeting type.',
    operationId: 'displayvideo.advertisers.campaigns.targetingTypes.assignedTargetingOptions.list',
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
                'Allows filtering by assigned targeting option properties. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the logical operator `OR`. * A restriction has the form of `{field} {operator} {value}`. * The operator must be `EQUALS (=)`. * Supported fields: - `assignedTargetingOptionId` - `inheritance` Examples: * AssignedTargetingOptions with ID 1 or 2 `assignedTargetingOptionId="1" OR assignedTargetingOptionId="2"` * AssignedTargetingOptions with inheritance status of NOT_INHERITED or INHERITED_FROM_PARTNER `inheritance="NOT_INHERITED" OR inheritance="INHERITED_FROM_PARTNER"` The length of this field should be no more than 500 characters.',
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
                'Field by which to sort the list. Acceptable values are: * `assignedTargetingOptionId` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `assignedTargetingOptionId desc`.',
              in: 'query',
              name: 'orderBy',
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
                'Requested page size. Must be between `1` and `5000`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.',
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
              description:
                'A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListCampaignAssignedTargetingOptions` method. If not specified, the first page of results will be returned.',
              in: 'query',
              name: 'pageToken',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        advertiserId: z
          .string()
          .openapi({
            param: {
              description: 'Required. The ID of the advertiser the campaign belongs to.',
              in: 'path',
              name: 'advertiserId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        campaignId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. The ID of the campaign to list assigned targeting options for.',
              in: 'path',
              name: 'campaignId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        targetingType: z
          .enum([
            'TARGETING_TYPE_UNSPECIFIED',
            'TARGETING_TYPE_CHANNEL',
            'TARGETING_TYPE_APP_CATEGORY',
            'TARGETING_TYPE_APP',
            'TARGETING_TYPE_URL',
            'TARGETING_TYPE_DAY_AND_TIME',
            'TARGETING_TYPE_AGE_RANGE',
            'TARGETING_TYPE_REGIONAL_LOCATION_LIST',
            'TARGETING_TYPE_PROXIMITY_LOCATION_LIST',
            'TARGETING_TYPE_GENDER',
            'TARGETING_TYPE_VIDEO_PLAYER_SIZE',
            'TARGETING_TYPE_USER_REWARDED_CONTENT',
            'TARGETING_TYPE_PARENTAL_STATUS',
            'TARGETING_TYPE_CONTENT_INSTREAM_POSITION',
            'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION',
            'TARGETING_TYPE_DEVICE_TYPE',
            'TARGETING_TYPE_AUDIENCE_GROUP',
            'TARGETING_TYPE_BROWSER',
            'TARGETING_TYPE_HOUSEHOLD_INCOME',
            'TARGETING_TYPE_ON_SCREEN_POSITION',
            'TARGETING_TYPE_THIRD_PARTY_VERIFIER',
            'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION',
            'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION',
            'TARGETING_TYPE_ENVIRONMENT',
            'TARGETING_TYPE_CARRIER_AND_ISP',
            'TARGETING_TYPE_OPERATING_SYSTEM',
            'TARGETING_TYPE_DEVICE_MAKE_MODEL',
            'TARGETING_TYPE_KEYWORD',
            'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST',
            'TARGETING_TYPE_VIEWABILITY',
            'TARGETING_TYPE_CATEGORY',
            'TARGETING_TYPE_INVENTORY_SOURCE',
            'TARGETING_TYPE_LANGUAGE',
            'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS',
            'TARGETING_TYPE_GEO_REGION',
            'TARGETING_TYPE_INVENTORY_SOURCE_GROUP',
            'TARGETING_TYPE_EXCHANGE',
            'TARGETING_TYPE_SUB_EXCHANGE',
            'TARGETING_TYPE_POI',
            'TARGETING_TYPE_BUSINESS_CHAIN',
            'TARGETING_TYPE_CONTENT_DURATION',
            'TARGETING_TYPE_CONTENT_STREAM_TYPE',
            'TARGETING_TYPE_NATIVE_CONTENT_POSITION',
            'TARGETING_TYPE_OMID',
            'TARGETING_TYPE_AUDIO_CONTENT_TYPE',
            'TARGETING_TYPE_CONTENT_GENRE',
            'TARGETING_TYPE_YOUTUBE_VIDEO',
            'TARGETING_TYPE_YOUTUBE_CHANNEL',
            'TARGETING_TYPE_SESSION_POSITION',
          ])
          .openapi({
            param: {
              description:
                'Required. Identifies the type of assigned targeting options to list. Supported targeting types: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_INVENTORY_SOURCE` * `TARGETING_TYPE_INVENTORY_SOURCE_GROUP` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_THIRD_PARTY_VERIFIER` * `TARGETING_TYPE_VIEWABILITY`',
              in: 'path',
              name: 'targetingType',
              required: true,
              schema: {
                enum: [
                  'TARGETING_TYPE_UNSPECIFIED',
                  'TARGETING_TYPE_CHANNEL',
                  'TARGETING_TYPE_APP_CATEGORY',
                  'TARGETING_TYPE_APP',
                  'TARGETING_TYPE_URL',
                  'TARGETING_TYPE_DAY_AND_TIME',
                  'TARGETING_TYPE_AGE_RANGE',
                  'TARGETING_TYPE_REGIONAL_LOCATION_LIST',
                  'TARGETING_TYPE_PROXIMITY_LOCATION_LIST',
                  'TARGETING_TYPE_GENDER',
                  'TARGETING_TYPE_VIDEO_PLAYER_SIZE',
                  'TARGETING_TYPE_USER_REWARDED_CONTENT',
                  'TARGETING_TYPE_PARENTAL_STATUS',
                  'TARGETING_TYPE_CONTENT_INSTREAM_POSITION',
                  'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION',
                  'TARGETING_TYPE_DEVICE_TYPE',
                  'TARGETING_TYPE_AUDIENCE_GROUP',
                  'TARGETING_TYPE_BROWSER',
                  'TARGETING_TYPE_HOUSEHOLD_INCOME',
                  'TARGETING_TYPE_ON_SCREEN_POSITION',
                  'TARGETING_TYPE_THIRD_PARTY_VERIFIER',
                  'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION',
                  'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION',
                  'TARGETING_TYPE_ENVIRONMENT',
                  'TARGETING_TYPE_CARRIER_AND_ISP',
                  'TARGETING_TYPE_OPERATING_SYSTEM',
                  'TARGETING_TYPE_DEVICE_MAKE_MODEL',
                  'TARGETING_TYPE_KEYWORD',
                  'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST',
                  'TARGETING_TYPE_VIEWABILITY',
                  'TARGETING_TYPE_CATEGORY',
                  'TARGETING_TYPE_INVENTORY_SOURCE',
                  'TARGETING_TYPE_LANGUAGE',
                  'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS',
                  'TARGETING_TYPE_GEO_REGION',
                  'TARGETING_TYPE_INVENTORY_SOURCE_GROUP',
                  'TARGETING_TYPE_EXCHANGE',
                  'TARGETING_TYPE_SUB_EXCHANGE',
                  'TARGETING_TYPE_POI',
                  'TARGETING_TYPE_BUSINESS_CHAIN',
                  'TARGETING_TYPE_CONTENT_DURATION',
                  'TARGETING_TYPE_CONTENT_STREAM_TYPE',
                  'TARGETING_TYPE_NATIVE_CONTENT_POSITION',
                  'TARGETING_TYPE_OMID',
                  'TARGETING_TYPE_AUDIO_CONTENT_TYPE',
                  'TARGETING_TYPE_CONTENT_GENRE',
                  'TARGETING_TYPE_YOUTUBE_VIDEO',
                  'TARGETING_TYPE_YOUTUBE_CHANNEL',
                  'TARGETING_TYPE_SESSION_POSITION',
                ],
                type: 'string',
              },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': { schema: ListCampaignAssignedTargetingOptionsResponseSchema },
        },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/display-video'],
        Oauth2c: ['https://www.googleapis.com/auth/display-video'],
      },
    ],
  })

export const getV2AdvertisersAdvertiserIdCampaignsCampaignIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdRoute =
  createRoute({
    method: 'get',
    path: '/v2/advertisers/{advertiserId}/campaigns/{campaignId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId}',
    tags: ['advertisers'],
    description: 'Gets a single targeting option assigned to a campaign.',
    operationId: 'displayvideo.advertisers.campaigns.targetingTypes.assignedTargetingOptions.get',
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
      }),
      params: z.object({
        advertiserId: z
          .string()
          .openapi({
            param: {
              description: 'Required. The ID of the advertiser the campaign belongs to.',
              in: 'path',
              name: 'advertiserId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        campaignId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. The ID of the campaign the assigned targeting option belongs to.',
              in: 'path',
              name: 'campaignId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        targetingType: z
          .enum([
            'TARGETING_TYPE_UNSPECIFIED',
            'TARGETING_TYPE_CHANNEL',
            'TARGETING_TYPE_APP_CATEGORY',
            'TARGETING_TYPE_APP',
            'TARGETING_TYPE_URL',
            'TARGETING_TYPE_DAY_AND_TIME',
            'TARGETING_TYPE_AGE_RANGE',
            'TARGETING_TYPE_REGIONAL_LOCATION_LIST',
            'TARGETING_TYPE_PROXIMITY_LOCATION_LIST',
            'TARGETING_TYPE_GENDER',
            'TARGETING_TYPE_VIDEO_PLAYER_SIZE',
            'TARGETING_TYPE_USER_REWARDED_CONTENT',
            'TARGETING_TYPE_PARENTAL_STATUS',
            'TARGETING_TYPE_CONTENT_INSTREAM_POSITION',
            'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION',
            'TARGETING_TYPE_DEVICE_TYPE',
            'TARGETING_TYPE_AUDIENCE_GROUP',
            'TARGETING_TYPE_BROWSER',
            'TARGETING_TYPE_HOUSEHOLD_INCOME',
            'TARGETING_TYPE_ON_SCREEN_POSITION',
            'TARGETING_TYPE_THIRD_PARTY_VERIFIER',
            'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION',
            'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION',
            'TARGETING_TYPE_ENVIRONMENT',
            'TARGETING_TYPE_CARRIER_AND_ISP',
            'TARGETING_TYPE_OPERATING_SYSTEM',
            'TARGETING_TYPE_DEVICE_MAKE_MODEL',
            'TARGETING_TYPE_KEYWORD',
            'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST',
            'TARGETING_TYPE_VIEWABILITY',
            'TARGETING_TYPE_CATEGORY',
            'TARGETING_TYPE_INVENTORY_SOURCE',
            'TARGETING_TYPE_LANGUAGE',
            'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS',
            'TARGETING_TYPE_GEO_REGION',
            'TARGETING_TYPE_INVENTORY_SOURCE_GROUP',
            'TARGETING_TYPE_EXCHANGE',
            'TARGETING_TYPE_SUB_EXCHANGE',
            'TARGETING_TYPE_POI',
            'TARGETING_TYPE_BUSINESS_CHAIN',
            'TARGETING_TYPE_CONTENT_DURATION',
            'TARGETING_TYPE_CONTENT_STREAM_TYPE',
            'TARGETING_TYPE_NATIVE_CONTENT_POSITION',
            'TARGETING_TYPE_OMID',
            'TARGETING_TYPE_AUDIO_CONTENT_TYPE',
            'TARGETING_TYPE_CONTENT_GENRE',
            'TARGETING_TYPE_YOUTUBE_VIDEO',
            'TARGETING_TYPE_YOUTUBE_CHANNEL',
            'TARGETING_TYPE_SESSION_POSITION',
          ])
          .openapi({
            param: {
              description:
                'Required. Identifies the type of this assigned targeting option. Supported targeting types: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_INVENTORY_SOURCE` * `TARGETING_TYPE_INVENTORY_SOURCE_GROUP` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_THIRD_PARTY_VERIFIER` * `TARGETING_TYPE_VIEWABILITY`',
              in: 'path',
              name: 'targetingType',
              required: true,
              schema: {
                enum: [
                  'TARGETING_TYPE_UNSPECIFIED',
                  'TARGETING_TYPE_CHANNEL',
                  'TARGETING_TYPE_APP_CATEGORY',
                  'TARGETING_TYPE_APP',
                  'TARGETING_TYPE_URL',
                  'TARGETING_TYPE_DAY_AND_TIME',
                  'TARGETING_TYPE_AGE_RANGE',
                  'TARGETING_TYPE_REGIONAL_LOCATION_LIST',
                  'TARGETING_TYPE_PROXIMITY_LOCATION_LIST',
                  'TARGETING_TYPE_GENDER',
                  'TARGETING_TYPE_VIDEO_PLAYER_SIZE',
                  'TARGETING_TYPE_USER_REWARDED_CONTENT',
                  'TARGETING_TYPE_PARENTAL_STATUS',
                  'TARGETING_TYPE_CONTENT_INSTREAM_POSITION',
                  'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION',
                  'TARGETING_TYPE_DEVICE_TYPE',
                  'TARGETING_TYPE_AUDIENCE_GROUP',
                  'TARGETING_TYPE_BROWSER',
                  'TARGETING_TYPE_HOUSEHOLD_INCOME',
                  'TARGETING_TYPE_ON_SCREEN_POSITION',
                  'TARGETING_TYPE_THIRD_PARTY_VERIFIER',
                  'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION',
                  'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION',
                  'TARGETING_TYPE_ENVIRONMENT',
                  'TARGETING_TYPE_CARRIER_AND_ISP',
                  'TARGETING_TYPE_OPERATING_SYSTEM',
                  'TARGETING_TYPE_DEVICE_MAKE_MODEL',
                  'TARGETING_TYPE_KEYWORD',
                  'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST',
                  'TARGETING_TYPE_VIEWABILITY',
                  'TARGETING_TYPE_CATEGORY',
                  'TARGETING_TYPE_INVENTORY_SOURCE',
                  'TARGETING_TYPE_LANGUAGE',
                  'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS',
                  'TARGETING_TYPE_GEO_REGION',
                  'TARGETING_TYPE_INVENTORY_SOURCE_GROUP',
                  'TARGETING_TYPE_EXCHANGE',
                  'TARGETING_TYPE_SUB_EXCHANGE',
                  'TARGETING_TYPE_POI',
                  'TARGETING_TYPE_BUSINESS_CHAIN',
                  'TARGETING_TYPE_CONTENT_DURATION',
                  'TARGETING_TYPE_CONTENT_STREAM_TYPE',
                  'TARGETING_TYPE_NATIVE_CONTENT_POSITION',
                  'TARGETING_TYPE_OMID',
                  'TARGETING_TYPE_AUDIO_CONTENT_TYPE',
                  'TARGETING_TYPE_CONTENT_GENRE',
                  'TARGETING_TYPE_YOUTUBE_VIDEO',
                  'TARGETING_TYPE_YOUTUBE_CHANNEL',
                  'TARGETING_TYPE_SESSION_POSITION',
                ],
                type: 'string',
              },
            },
          }),
        assignedTargetingOptionId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. An identifier unique to the targeting type in this campaign that identifies the assigned targeting option being requested.',
              in: 'path',
              name: 'assignedTargetingOptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: AssignedTargetingOptionSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/display-video'],
        Oauth2c: ['https://www.googleapis.com/auth/display-video'],
      },
    ],
  })

export const getV2AdvertisersAdvertiserIdCampaignsCampaignIdListAssignedTargetingOptionsRoute =
  createRoute({
    method: 'get',
    path: '/v2/advertisers/{advertiserId}/campaigns/{campaignId}:listAssignedTargetingOptions',
    tags: ['advertisers'],
    description: 'Lists assigned targeting options of a campaign across targeting types.',
    operationId: 'displayvideo.advertisers.campaigns.listAssignedTargetingOptions',
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
                'Allows filtering by assigned targeting option properties. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the logical operator `OR` on the same field. * A restriction has the form of `{field} {operator} {value}`. * The operator must be `EQUALS (=)`. * Supported fields: - `targetingType` - `inheritance` Examples: * AssignedTargetingOptions of targeting type TARGETING_TYPE_LANGUAGE or TARGETING_TYPE_GENDER `targetingType="TARGETING_TYPE_LANGUAGE" OR targetingType="TARGETING_TYPE_GENDER"` * AssignedTargetingOptions with inheritance status of NOT_INHERITED or INHERITED_FROM_PARTNER `inheritance="NOT_INHERITED" OR inheritance="INHERITED_FROM_PARTNER"` The length of this field should be no more than 500 characters.',
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
                'Field by which to sort the list. Acceptable values are: * `targetingType` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `targetingType desc`.',
              in: 'query',
              name: 'orderBy',
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
                'Requested page size. The size must be an integer between `1` and `5000`. If unspecified, the default is `5000`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.',
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
              description:
                'A token that lets the client fetch the next page of results. Typically, this is the value of next_page_token returned from the previous call to `BulkListCampaignAssignedTargetingOptions` method. If not specified, the first page of results will be returned.',
              in: 'query',
              name: 'pageToken',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        advertiserId: z
          .string()
          .openapi({
            param: {
              description: 'Required. The ID of the advertiser the campaign belongs to.',
              in: 'path',
              name: 'advertiserId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        campaignId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. The ID of the campaign to list assigned targeting options for.',
              in: 'path',
              name: 'campaignId',
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
          'application/json': { schema: BulkListCampaignAssignedTargetingOptionsResponseSchema },
        },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/display-video'],
        Oauth2c: ['https://www.googleapis.com/auth/display-video'],
      },
    ],
  })

export const getV2AdvertisersAdvertiserIdChannelsRoute = createRoute({
  method: 'get',
  path: '/v2/advertisers/{advertiserId}/channels',
  tags: ['advertisers'],
  description: 'Lists channels for a partner or advertiser.',
  operationId: 'displayvideo.advertisers.channels.list',
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
              'Allows filtering by channel fields. Supported syntax: * Filter expressions for channel currently can only contain at most one * restriction. * A restriction has the form of `{field} {operator} {value}`. * The operator must be `CONTAINS (:)`. * Supported fields: - `displayName` Examples: * All channels for which the display name contains "google": `displayName : "google"`. The length of this field should be no more than 500 characters.',
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
              'Field by which to sort the list. Acceptable values are: * `displayName` (default) * `channelId` The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be added to the field name. Example: `displayName desc`.',
            in: 'query',
            name: 'orderBy',
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
              'Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.',
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
            description:
              'A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListChannels` method. If not specified, the first page of results will be returned.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      partnerId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the partner that owns the channels.',
            in: 'query',
            name: 'partnerId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      advertiserId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the advertiser that owns the channels.',
            in: 'path',
            name: 'advertiserId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListChannelsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const postV2AdvertisersAdvertiserIdChannelsRoute = createRoute({
  method: 'post',
  path: '/v2/advertisers/{advertiserId}/channels',
  tags: ['advertisers'],
  description: 'Creates a new channel. Returns the newly created channel if successful.',
  operationId: 'displayvideo.advertisers.channels.create',
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
      partnerId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the partner that owns the created channel.',
            in: 'query',
            name: 'partnerId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      advertiserId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the advertiser that owns the created channel.',
            in: 'path',
            name: 'advertiserId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ChannelSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ChannelSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const patchV2AdvertisersAdvertiserIdChannelsChannelIdRoute = createRoute({
  method: 'patch',
  path: '/v2/advertisers/{advertiserId}/channels/{channelId}',
  tags: ['advertisers'],
  description: 'Updates a channel. Returns the updated channel if successful.',
  operationId: 'displayvideo.advertisers.channels.patch',
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
      partnerId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the partner that owns the created channel.',
            in: 'query',
            name: 'partnerId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. The mask to control which fields to update.',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      advertiserId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the advertiser that owns the created channel.',
            in: 'path',
            name: 'advertiserId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      channelId: z
        .string()
        .openapi({
          param: {
            description: 'Output only. The unique ID of the channel. Assigned by the system.',
            in: 'path',
            name: 'channelId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ChannelSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ChannelSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const getV2AdvertisersAdvertiserIdChannelsChannelIdSitesRoute = createRoute({
  method: 'get',
  path: '/v2/advertisers/{advertiserId}/channels/{channelId}/sites',
  tags: ['advertisers'],
  description: 'Lists sites in a channel.',
  operationId: 'displayvideo.advertisers.channels.sites.list',
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
              'Allows filtering by site fields. Supported syntax: * Filter expressions for site currently can only contain at most one * restriction. * A restriction has the form of `{field} {operator} {value}`. * The operator must be `CONTAINS (:)`. * Supported fields: - `urlOrAppId` Examples: * All sites for which the URL or app ID contains "google": `urlOrAppId : "google"`',
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
              'Field by which to sort the list. Acceptable values are: * `urlOrAppId` (default) The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be added to the field name. Example: `urlOrAppId desc`.',
            in: 'query',
            name: 'orderBy',
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
              'Requested page size. Must be between `1` and `10000`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.',
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
            description:
              'A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListSites` method. If not specified, the first page of results will be returned.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      partnerId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the partner that owns the parent channel.',
            in: 'query',
            name: 'partnerId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      advertiserId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the advertiser that owns the parent channel.',
            in: 'path',
            name: 'advertiserId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      channelId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The ID of the parent channel to which the requested sites belong.',
            in: 'path',
            name: 'channelId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListSitesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const deleteV2AdvertisersAdvertiserIdChannelsChannelIdSitesUrlOrAppIdRoute = createRoute({
  method: 'delete',
  path: '/v2/advertisers/{advertiserId}/channels/{channelId}/sites/{urlOrAppId}',
  tags: ['advertisers'],
  description: 'Deletes a site from a channel.',
  operationId: 'displayvideo.advertisers.channels.sites.delete',
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
      partnerId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the partner that owns the parent channel.',
            in: 'query',
            name: 'partnerId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      advertiserId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the advertiser that owns the parent channel.',
            in: 'path',
            name: 'advertiserId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      channelId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the parent channel to which the site belongs.',
            in: 'path',
            name: 'channelId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      urlOrAppId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The URL or app ID of the site to delete.',
            in: 'path',
            name: 'urlOrAppId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const postV2AdvertisersAdvertiserIdChannelsChannelIdSitesBulkEditRoute = createRoute({
  method: 'post',
  path: '/v2/advertisers/{advertiserId}/channels/{channelId}/sites:bulkEdit',
  tags: ['advertisers'],
  description:
    'Bulk edits sites under a single channel. The operation will delete the sites provided in BulkEditSitesRequest.deleted_sites and then create the sites provided in BulkEditSitesRequest.created_sites.',
  operationId: 'displayvideo.advertisers.channels.sites.bulkEdit',
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
    }),
    params: z.object({
      advertiserId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the advertiser that owns the parent channel.',
            in: 'path',
            name: 'advertiserId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      channelId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the parent channel to which the sites belong.',
            in: 'path',
            name: 'channelId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BulkEditSitesRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BulkEditSitesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const postV2AdvertisersAdvertiserIdChannelsChannelIdSitesReplaceRoute = createRoute({
  method: 'post',
  path: '/v2/advertisers/{advertiserId}/channels/{channelId}/sites:replace',
  tags: ['advertisers'],
  description:
    'Replaces all of the sites under a single channel. The operation will replace the sites under a channel with the sites provided in ReplaceSitesRequest.new_sites.',
  operationId: 'displayvideo.advertisers.channels.sites.replace',
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
    }),
    params: z.object({
      advertiserId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the advertiser that owns the parent channel.',
            in: 'path',
            name: 'advertiserId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      channelId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the parent channel whose sites will be replaced.',
            in: 'path',
            name: 'channelId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ReplaceSitesRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ReplaceSitesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const getV2AdvertisersAdvertiserIdCreativesRoute = createRoute({
  method: 'get',
  path: '/v2/advertisers/{advertiserId}/creatives',
  tags: ['advertisers'],
  description:
    'Lists creatives in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, creatives with `ENTITY_STATUS_ARCHIVED` will not be included in the results.',
  operationId: 'displayvideo.advertisers.creatives.list',
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
              'Allows filtering by creative properties. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restriction for the same field must be combined by `OR`. * Restriction for different fields must be combined by `AND`. * Between `(` and `)` there can only be restrictions combined by `OR` for the same field. * A restriction has the form of `{field} {operator} {value}`. * The operator must be `EQUALS (=)` for the following fields: - `entityStatus` - `creativeType`. - `dimensions` - `minDuration` - `maxDuration` - `approvalStatus` - `exchangeReviewStatus` - `dynamic` - `creativeId` * The operator must be `HAS (:)` for the following fields: - `lineItemIds` * The operator must be `GREATER THAN OR EQUAL TO (>=)` or `LESS THAN OR EQUAL TO (<=)` for the following fields: - `updateTime` (input in ISO 8601 format, or YYYY-MM-DDTHH:MM:SSZ) * For `entityStatus`, `minDuration`, `maxDuration`, `updateTime`, and `dynamic`, there may be at most one restriction. * For `dimensions`, the value is in the form of `"{width}x{height}"`. * For `exchangeReviewStatus`, the value is in the form of `{exchange}-{reviewStatus}`. * For `minDuration` and `maxDuration`, the value is in the form of `"{duration}s"`. Only seconds are supported with millisecond granularity. * For `updateTime`, a creative resource\'s field value reflects the last time that a creative has been updated, which includes updates made by the system (e.g. creative review updates). * There may be multiple `lineItemIds` restrictions in order to search against multiple possible line item IDs. * There may be multiple `creativeId` restrictions in order to search against multiple possible creative IDs. Examples: * All native creatives: `creativeType="CREATIVE_TYPE_NATIVE"` * All active creatives with 300x400 or 50x100 dimensions: `entityStatus="ENTITY_STATUS_ACTIVE" AND (dimensions="300x400" OR dimensions="50x100")` * All dynamic creatives that are approved by AdX or AppNexus, with a minimum duration of 5 seconds and 200ms. `dynamic="true" AND minDuration="5.2s" AND (exchangeReviewStatus="EXCHANGE_GOOGLE_AD_MANAGER-REVIEW_STATUS_APPROVED" OR exchangeReviewStatus="EXCHANGE_APPNEXUS-REVIEW_STATUS_APPROVED")` * All video creatives that are associated with line item ID 1 or 2: `creativeType="CREATIVE_TYPE_VIDEO" AND (lineItemIds:1 OR lineItemIds:2)` * Find creatives by multiple creative IDs: `creativeId=1 OR creativeId=2` * All creatives with an update time greater than or equal to `2020-11-04T18:54:47Z (format of ISO 8601)`: `updateTime>="2020-11-04T18:54:47Z"` The length of this field should be no more than 500 characters.',
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
              'Field by which to sort the list. Acceptable values are: * `creativeId` (default) * `createTime` * `mediaDuration` * `dimensions` (sorts by width first, then by height) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `createTime desc`.',
            in: 'query',
            name: 'orderBy',
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
              'Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.',
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
            description:
              'A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListCreatives` method. If not specified, the first page of results will be returned.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      advertiserId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the advertiser to list creatives for.',
            in: 'path',
            name: 'advertiserId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListCreativesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const postV2AdvertisersAdvertiserIdCreativesRoute = createRoute({
  method: 'post',
  path: '/v2/advertisers/{advertiserId}/creatives',
  tags: ['advertisers'],
  description: 'Creates a new creative. Returns the newly created creative if successful.',
  operationId: 'displayvideo.advertisers.creatives.create',
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
    }),
    params: z.object({
      advertiserId: z
        .string()
        .openapi({
          param: {
            description: 'Output only. The unique ID of the advertiser the creative belongs to.',
            in: 'path',
            name: 'advertiserId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreativeSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CreativeSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const getV2AdvertisersAdvertiserIdCreativesCreativeIdRoute = createRoute({
  method: 'get',
  path: '/v2/advertisers/{advertiserId}/creatives/{creativeId}',
  tags: ['advertisers'],
  description: 'Gets a creative.',
  operationId: 'displayvideo.advertisers.creatives.get',
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
    }),
    params: z.object({
      advertiserId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the advertiser this creative belongs to.',
            in: 'path',
            name: 'advertiserId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      creativeId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the creative to fetch.',
            in: 'path',
            name: 'creativeId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CreativeSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const deleteV2AdvertisersAdvertiserIdCreativesCreativeIdRoute = createRoute({
  method: 'delete',
  path: '/v2/advertisers/{advertiserId}/creatives/{creativeId}',
  tags: ['advertisers'],
  description:
    'Deletes a creative. Returns error code `NOT_FOUND` if the creative does not exist. The creative should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, before it can be deleted.',
  operationId: 'displayvideo.advertisers.creatives.delete',
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
    }),
    params: z.object({
      advertiserId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the advertiser this creative belongs to.',
            in: 'path',
            name: 'advertiserId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      creativeId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the creative to be deleted.',
            in: 'path',
            name: 'creativeId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const patchV2AdvertisersAdvertiserIdCreativesCreativeIdRoute = createRoute({
  method: 'patch',
  path: '/v2/advertisers/{advertiserId}/creatives/{creativeId}',
  tags: ['advertisers'],
  description: 'Updates an existing creative. Returns the updated creative if successful.',
  operationId: 'displayvideo.advertisers.creatives.patch',
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
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. The mask to control which fields to update.',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      advertiserId: z
        .string()
        .openapi({
          param: {
            description: 'Output only. The unique ID of the advertiser the creative belongs to.',
            in: 'path',
            name: 'advertiserId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      creativeId: z
        .string()
        .openapi({
          param: {
            description: 'Output only. The unique ID of the creative. Assigned by the system.',
            in: 'path',
            name: 'creativeId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreativeSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CreativeSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const getV2AdvertisersAdvertiserIdInsertionOrdersRoute = createRoute({
  method: 'get',
  path: '/v2/advertisers/{advertiserId}/insertionOrders',
  tags: ['advertisers'],
  description:
    'Lists insertion orders in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, insertion orders with `ENTITY_STATUS_ARCHIVED` will not be included in the results.',
  operationId: 'displayvideo.advertisers.insertionOrders.list',
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
              'Allows filtering by insertion order properties. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * The operator used on `budget.budget_segments.date_range.end_date` must be LESS THAN (<). * The operator used on `updateTime` must be `GREATER THAN OR EQUAL TO (>=)` or `LESS THAN OR EQUAL TO (<=)`. * The operators used on all other fields must be `EQUALS (=)`. * Supported fields: - `campaignId` - `displayName` - `entityStatus` - `budget.budget_segments.date_range.end_date` (input as YYYY-MM-DD) - `updateTime` (input in ISO 8601 format, or YYYY-MM-DDTHH:MM:SSZ) Examples: * All insertion orders under a campaign: `campaignId="1234"` * All `ENTITY_STATUS_ACTIVE` or `ENTITY_STATUS_PAUSED` insertion orders under an advertiser: `(entityStatus="ENTITY_STATUS_ACTIVE" OR entityStatus="ENTITY_STATUS_PAUSED")` * All insertion orders whose budget segments\' dates end before March 28, 2019: `budget.budget_segments.date_range.end_date<"2019-03-28"` * All insertion orders with an update time less than or equal to `2020-11-04T18:54:47Z (format of ISO 8601)`: `updateTime<="2020-11-04T18:54:47Z"` * All insertion orders with an update time greater than or equal to `2020-11-04T18:54:47Z (format of ISO 8601)`: `updateTime>="2020-11-04T18:54:47Z"` The length of this field should be no more than 500 characters.',
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
              'Field by which to sort the list. Acceptable values are: * "displayName" (default) * "entityStatus" * "updateTime" The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`.',
            in: 'query',
            name: 'orderBy',
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
              'Requested page size. Must be between `1` and `100`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.',
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
            description:
              'A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListInsertionOrders` method. If not specified, the first page of results will be returned.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      advertiserId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the advertiser to list insertion orders for.',
            in: 'path',
            name: 'advertiserId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListInsertionOrdersResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const postV2AdvertisersAdvertiserIdInsertionOrdersRoute = createRoute({
  method: 'post',
  path: '/v2/advertisers/{advertiserId}/insertionOrders',
  tags: ['advertisers'],
  description:
    'Creates a new insertion order. Returns the newly created insertion order if successful.',
  operationId: 'displayvideo.advertisers.insertionOrders.create',
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
    }),
    params: z.object({
      advertiserId: z
        .string()
        .openapi({
          param: {
            description:
              'Output only. The unique ID of the advertiser the insertion order belongs to.',
            in: 'path',
            name: 'advertiserId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: InsertionOrderSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: InsertionOrderSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const getV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdRoute = createRoute({
  method: 'get',
  path: '/v2/advertisers/{advertiserId}/insertionOrders/{insertionOrderId}',
  tags: ['advertisers'],
  description:
    'Gets an insertion order. Returns error code `NOT_FOUND` if the insertion order does not exist.',
  operationId: 'displayvideo.advertisers.insertionOrders.get',
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
    }),
    params: z.object({
      advertiserId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the advertiser this insertion order belongs to.',
            in: 'path',
            name: 'advertiserId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      insertionOrderId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the insertion order to fetch.',
            in: 'path',
            name: 'insertionOrderId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: InsertionOrderSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const deleteV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdRoute = createRoute({
  method: 'delete',
  path: '/v2/advertisers/{advertiserId}/insertionOrders/{insertionOrderId}',
  tags: ['advertisers'],
  description:
    'Deletes an insertion order. Returns error code `NOT_FOUND` if the insertion order does not exist. The insertion order should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it.',
  operationId: 'displayvideo.advertisers.insertionOrders.delete',
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
    }),
    params: z.object({
      advertiserId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the advertiser this insertion order belongs to.',
            in: 'path',
            name: 'advertiserId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      insertionOrderId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the insertion order to delete.',
            in: 'path',
            name: 'insertionOrderId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const patchV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdRoute = createRoute({
  method: 'patch',
  path: '/v2/advertisers/{advertiserId}/insertionOrders/{insertionOrderId}',
  tags: ['advertisers'],
  description:
    'Updates an existing insertion order. Returns the updated insertion order if successful.',
  operationId: 'displayvideo.advertisers.insertionOrders.patch',
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
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. The mask to control which fields to update.',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      advertiserId: z
        .string()
        .openapi({
          param: {
            description:
              'Output only. The unique ID of the advertiser the insertion order belongs to.',
            in: 'path',
            name: 'advertiserId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      insertionOrderId: z
        .string()
        .openapi({
          param: {
            description:
              'Output only. The unique ID of the insertion order. Assigned by the system.',
            in: 'path',
            name: 'insertionOrderId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: InsertionOrderSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: InsertionOrderSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const getV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsRoute =
  createRoute({
    method: 'get',
    path: '/v2/advertisers/{advertiserId}/insertionOrders/{insertionOrderId}/targetingTypes/{targetingType}/assignedTargetingOptions',
    tags: ['advertisers'],
    description: 'Lists the targeting options assigned to an insertion order.',
    operationId:
      'displayvideo.advertisers.insertionOrders.targetingTypes.assignedTargetingOptions.list',
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
                'Allows filtering by assigned targeting option properties. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the logical operator `OR`. * A restriction has the form of `{field} {operator} {value}`. * The operator must be `EQUALS (=)`. * Supported fields: - `assignedTargetingOptionId` - `inheritance` Examples: * AssignedTargetingOptions with ID 1 or 2 `assignedTargetingOptionId="1" OR assignedTargetingOptionId="2"` * AssignedTargetingOptions with inheritance status of NOT_INHERITED or INHERITED_FROM_PARTNER `inheritance="NOT_INHERITED" OR inheritance="INHERITED_FROM_PARTNER"` The length of this field should be no more than 500 characters.',
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
                'Field by which to sort the list. Acceptable values are: * `assignedTargetingOptionId` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `assignedTargetingOptionId desc`.',
              in: 'query',
              name: 'orderBy',
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
                'Requested page size. Must be between `1` and `5000`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.',
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
              description:
                'A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListInsertionOrderAssignedTargetingOptions` method. If not specified, the first page of results will be returned.',
              in: 'query',
              name: 'pageToken',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        advertiserId: z
          .string()
          .openapi({
            param: {
              description: 'Required. The ID of the advertiser the insertion order belongs to.',
              in: 'path',
              name: 'advertiserId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        insertionOrderId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. The ID of the insertion order to list assigned targeting options for.',
              in: 'path',
              name: 'insertionOrderId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        targetingType: z
          .enum([
            'TARGETING_TYPE_UNSPECIFIED',
            'TARGETING_TYPE_CHANNEL',
            'TARGETING_TYPE_APP_CATEGORY',
            'TARGETING_TYPE_APP',
            'TARGETING_TYPE_URL',
            'TARGETING_TYPE_DAY_AND_TIME',
            'TARGETING_TYPE_AGE_RANGE',
            'TARGETING_TYPE_REGIONAL_LOCATION_LIST',
            'TARGETING_TYPE_PROXIMITY_LOCATION_LIST',
            'TARGETING_TYPE_GENDER',
            'TARGETING_TYPE_VIDEO_PLAYER_SIZE',
            'TARGETING_TYPE_USER_REWARDED_CONTENT',
            'TARGETING_TYPE_PARENTAL_STATUS',
            'TARGETING_TYPE_CONTENT_INSTREAM_POSITION',
            'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION',
            'TARGETING_TYPE_DEVICE_TYPE',
            'TARGETING_TYPE_AUDIENCE_GROUP',
            'TARGETING_TYPE_BROWSER',
            'TARGETING_TYPE_HOUSEHOLD_INCOME',
            'TARGETING_TYPE_ON_SCREEN_POSITION',
            'TARGETING_TYPE_THIRD_PARTY_VERIFIER',
            'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION',
            'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION',
            'TARGETING_TYPE_ENVIRONMENT',
            'TARGETING_TYPE_CARRIER_AND_ISP',
            'TARGETING_TYPE_OPERATING_SYSTEM',
            'TARGETING_TYPE_DEVICE_MAKE_MODEL',
            'TARGETING_TYPE_KEYWORD',
            'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST',
            'TARGETING_TYPE_VIEWABILITY',
            'TARGETING_TYPE_CATEGORY',
            'TARGETING_TYPE_INVENTORY_SOURCE',
            'TARGETING_TYPE_LANGUAGE',
            'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS',
            'TARGETING_TYPE_GEO_REGION',
            'TARGETING_TYPE_INVENTORY_SOURCE_GROUP',
            'TARGETING_TYPE_EXCHANGE',
            'TARGETING_TYPE_SUB_EXCHANGE',
            'TARGETING_TYPE_POI',
            'TARGETING_TYPE_BUSINESS_CHAIN',
            'TARGETING_TYPE_CONTENT_DURATION',
            'TARGETING_TYPE_CONTENT_STREAM_TYPE',
            'TARGETING_TYPE_NATIVE_CONTENT_POSITION',
            'TARGETING_TYPE_OMID',
            'TARGETING_TYPE_AUDIO_CONTENT_TYPE',
            'TARGETING_TYPE_CONTENT_GENRE',
            'TARGETING_TYPE_YOUTUBE_VIDEO',
            'TARGETING_TYPE_YOUTUBE_CHANNEL',
            'TARGETING_TYPE_SESSION_POSITION',
          ])
          .openapi({
            param: {
              description:
                'Required. Identifies the type of assigned targeting options to list. Supported targeting types include: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_APP` * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AUDIENCE_GROUP` * `TARGETING_TYPE_AUDIO_CONTENT_TYPE` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_BUSINESS_CHAIN` * `TARGETING_TYPE_CARRIER_AND_ISP` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_CONTENT_DURATION` * `TARGETING_TYPE_CONTENT_GENRE` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_STREAM_TYPE` * `TARGETING_TYPE_DAY_AND_TIME` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DEVICE_TYPE` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_INVENTORY_SOURCE` * `TARGETING_TYPE_INVENTORY_SOURCE_GROUP` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NATIVE_CONTENT_POSITION` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_POI` * `TARGETING_TYPE_PROXIMITY_LOCATION_LIST` * `TARGETING_TYPE_REGIONAL_LOCATION_LIST` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_THIRD_PARTY_VERIFIER` * `TARGETING_TYPE_URL` * `TARGETING_TYPE_USER_REWARDED_CONTENT` * `TARGETING_TYPE_VIDEO_PLAYER_SIZE` * `TARGETING_TYPE_VIEWABILITY`',
              in: 'path',
              name: 'targetingType',
              required: true,
              schema: {
                enum: [
                  'TARGETING_TYPE_UNSPECIFIED',
                  'TARGETING_TYPE_CHANNEL',
                  'TARGETING_TYPE_APP_CATEGORY',
                  'TARGETING_TYPE_APP',
                  'TARGETING_TYPE_URL',
                  'TARGETING_TYPE_DAY_AND_TIME',
                  'TARGETING_TYPE_AGE_RANGE',
                  'TARGETING_TYPE_REGIONAL_LOCATION_LIST',
                  'TARGETING_TYPE_PROXIMITY_LOCATION_LIST',
                  'TARGETING_TYPE_GENDER',
                  'TARGETING_TYPE_VIDEO_PLAYER_SIZE',
                  'TARGETING_TYPE_USER_REWARDED_CONTENT',
                  'TARGETING_TYPE_PARENTAL_STATUS',
                  'TARGETING_TYPE_CONTENT_INSTREAM_POSITION',
                  'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION',
                  'TARGETING_TYPE_DEVICE_TYPE',
                  'TARGETING_TYPE_AUDIENCE_GROUP',
                  'TARGETING_TYPE_BROWSER',
                  'TARGETING_TYPE_HOUSEHOLD_INCOME',
                  'TARGETING_TYPE_ON_SCREEN_POSITION',
                  'TARGETING_TYPE_THIRD_PARTY_VERIFIER',
                  'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION',
                  'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION',
                  'TARGETING_TYPE_ENVIRONMENT',
                  'TARGETING_TYPE_CARRIER_AND_ISP',
                  'TARGETING_TYPE_OPERATING_SYSTEM',
                  'TARGETING_TYPE_DEVICE_MAKE_MODEL',
                  'TARGETING_TYPE_KEYWORD',
                  'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST',
                  'TARGETING_TYPE_VIEWABILITY',
                  'TARGETING_TYPE_CATEGORY',
                  'TARGETING_TYPE_INVENTORY_SOURCE',
                  'TARGETING_TYPE_LANGUAGE',
                  'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS',
                  'TARGETING_TYPE_GEO_REGION',
                  'TARGETING_TYPE_INVENTORY_SOURCE_GROUP',
                  'TARGETING_TYPE_EXCHANGE',
                  'TARGETING_TYPE_SUB_EXCHANGE',
                  'TARGETING_TYPE_POI',
                  'TARGETING_TYPE_BUSINESS_CHAIN',
                  'TARGETING_TYPE_CONTENT_DURATION',
                  'TARGETING_TYPE_CONTENT_STREAM_TYPE',
                  'TARGETING_TYPE_NATIVE_CONTENT_POSITION',
                  'TARGETING_TYPE_OMID',
                  'TARGETING_TYPE_AUDIO_CONTENT_TYPE',
                  'TARGETING_TYPE_CONTENT_GENRE',
                  'TARGETING_TYPE_YOUTUBE_VIDEO',
                  'TARGETING_TYPE_YOUTUBE_CHANNEL',
                  'TARGETING_TYPE_SESSION_POSITION',
                ],
                type: 'string',
              },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': { schema: ListInsertionOrderAssignedTargetingOptionsResponseSchema },
        },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/display-video'],
        Oauth2c: ['https://www.googleapis.com/auth/display-video'],
      },
    ],
  })

export const postV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsRoute =
  createRoute({
    method: 'post',
    path: '/v2/advertisers/{advertiserId}/insertionOrders/{insertionOrderId}/targetingTypes/{targetingType}/assignedTargetingOptions',
    tags: ['advertisers'],
    description:
      'Assigns a targeting option to an insertion order. Returns the assigned targeting option if successful. Supported targeting types: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_VIEWABILITY`',
    operationId:
      'displayvideo.advertisers.insertionOrders.targetingTypes.assignedTargetingOptions.create',
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
      }),
      params: z.object({
        advertiserId: z
          .string()
          .openapi({
            param: {
              description: 'Required. The ID of the advertiser the insertion order belongs to.',
              in: 'path',
              name: 'advertiserId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        insertionOrderId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. The ID of the insertion order the assigned targeting option will belong to.',
              in: 'path',
              name: 'insertionOrderId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        targetingType: z
          .enum([
            'TARGETING_TYPE_UNSPECIFIED',
            'TARGETING_TYPE_CHANNEL',
            'TARGETING_TYPE_APP_CATEGORY',
            'TARGETING_TYPE_APP',
            'TARGETING_TYPE_URL',
            'TARGETING_TYPE_DAY_AND_TIME',
            'TARGETING_TYPE_AGE_RANGE',
            'TARGETING_TYPE_REGIONAL_LOCATION_LIST',
            'TARGETING_TYPE_PROXIMITY_LOCATION_LIST',
            'TARGETING_TYPE_GENDER',
            'TARGETING_TYPE_VIDEO_PLAYER_SIZE',
            'TARGETING_TYPE_USER_REWARDED_CONTENT',
            'TARGETING_TYPE_PARENTAL_STATUS',
            'TARGETING_TYPE_CONTENT_INSTREAM_POSITION',
            'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION',
            'TARGETING_TYPE_DEVICE_TYPE',
            'TARGETING_TYPE_AUDIENCE_GROUP',
            'TARGETING_TYPE_BROWSER',
            'TARGETING_TYPE_HOUSEHOLD_INCOME',
            'TARGETING_TYPE_ON_SCREEN_POSITION',
            'TARGETING_TYPE_THIRD_PARTY_VERIFIER',
            'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION',
            'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION',
            'TARGETING_TYPE_ENVIRONMENT',
            'TARGETING_TYPE_CARRIER_AND_ISP',
            'TARGETING_TYPE_OPERATING_SYSTEM',
            'TARGETING_TYPE_DEVICE_MAKE_MODEL',
            'TARGETING_TYPE_KEYWORD',
            'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST',
            'TARGETING_TYPE_VIEWABILITY',
            'TARGETING_TYPE_CATEGORY',
            'TARGETING_TYPE_INVENTORY_SOURCE',
            'TARGETING_TYPE_LANGUAGE',
            'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS',
            'TARGETING_TYPE_GEO_REGION',
            'TARGETING_TYPE_INVENTORY_SOURCE_GROUP',
            'TARGETING_TYPE_EXCHANGE',
            'TARGETING_TYPE_SUB_EXCHANGE',
            'TARGETING_TYPE_POI',
            'TARGETING_TYPE_BUSINESS_CHAIN',
            'TARGETING_TYPE_CONTENT_DURATION',
            'TARGETING_TYPE_CONTENT_STREAM_TYPE',
            'TARGETING_TYPE_NATIVE_CONTENT_POSITION',
            'TARGETING_TYPE_OMID',
            'TARGETING_TYPE_AUDIO_CONTENT_TYPE',
            'TARGETING_TYPE_CONTENT_GENRE',
            'TARGETING_TYPE_YOUTUBE_VIDEO',
            'TARGETING_TYPE_YOUTUBE_CHANNEL',
            'TARGETING_TYPE_SESSION_POSITION',
          ])
          .openapi({
            param: {
              description:
                'Required. Identifies the type of this assigned targeting option. Supported targeting types: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_VIEWABILITY`',
              in: 'path',
              name: 'targetingType',
              required: true,
              schema: {
                enum: [
                  'TARGETING_TYPE_UNSPECIFIED',
                  'TARGETING_TYPE_CHANNEL',
                  'TARGETING_TYPE_APP_CATEGORY',
                  'TARGETING_TYPE_APP',
                  'TARGETING_TYPE_URL',
                  'TARGETING_TYPE_DAY_AND_TIME',
                  'TARGETING_TYPE_AGE_RANGE',
                  'TARGETING_TYPE_REGIONAL_LOCATION_LIST',
                  'TARGETING_TYPE_PROXIMITY_LOCATION_LIST',
                  'TARGETING_TYPE_GENDER',
                  'TARGETING_TYPE_VIDEO_PLAYER_SIZE',
                  'TARGETING_TYPE_USER_REWARDED_CONTENT',
                  'TARGETING_TYPE_PARENTAL_STATUS',
                  'TARGETING_TYPE_CONTENT_INSTREAM_POSITION',
                  'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION',
                  'TARGETING_TYPE_DEVICE_TYPE',
                  'TARGETING_TYPE_AUDIENCE_GROUP',
                  'TARGETING_TYPE_BROWSER',
                  'TARGETING_TYPE_HOUSEHOLD_INCOME',
                  'TARGETING_TYPE_ON_SCREEN_POSITION',
                  'TARGETING_TYPE_THIRD_PARTY_VERIFIER',
                  'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION',
                  'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION',
                  'TARGETING_TYPE_ENVIRONMENT',
                  'TARGETING_TYPE_CARRIER_AND_ISP',
                  'TARGETING_TYPE_OPERATING_SYSTEM',
                  'TARGETING_TYPE_DEVICE_MAKE_MODEL',
                  'TARGETING_TYPE_KEYWORD',
                  'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST',
                  'TARGETING_TYPE_VIEWABILITY',
                  'TARGETING_TYPE_CATEGORY',
                  'TARGETING_TYPE_INVENTORY_SOURCE',
                  'TARGETING_TYPE_LANGUAGE',
                  'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS',
                  'TARGETING_TYPE_GEO_REGION',
                  'TARGETING_TYPE_INVENTORY_SOURCE_GROUP',
                  'TARGETING_TYPE_EXCHANGE',
                  'TARGETING_TYPE_SUB_EXCHANGE',
                  'TARGETING_TYPE_POI',
                  'TARGETING_TYPE_BUSINESS_CHAIN',
                  'TARGETING_TYPE_CONTENT_DURATION',
                  'TARGETING_TYPE_CONTENT_STREAM_TYPE',
                  'TARGETING_TYPE_NATIVE_CONTENT_POSITION',
                  'TARGETING_TYPE_OMID',
                  'TARGETING_TYPE_AUDIO_CONTENT_TYPE',
                  'TARGETING_TYPE_CONTENT_GENRE',
                  'TARGETING_TYPE_YOUTUBE_VIDEO',
                  'TARGETING_TYPE_YOUTUBE_CHANNEL',
                  'TARGETING_TYPE_SESSION_POSITION',
                ],
                type: 'string',
              },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: AssignedTargetingOptionSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: AssignedTargetingOptionSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/display-video'],
        Oauth2c: ['https://www.googleapis.com/auth/display-video'],
      },
    ],
  })

export const getV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdRoute =
  createRoute({
    method: 'get',
    path: '/v2/advertisers/{advertiserId}/insertionOrders/{insertionOrderId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId}',
    tags: ['advertisers'],
    description: 'Gets a single targeting option assigned to an insertion order.',
    operationId:
      'displayvideo.advertisers.insertionOrders.targetingTypes.assignedTargetingOptions.get',
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
      }),
      params: z.object({
        advertiserId: z
          .string()
          .openapi({
            param: {
              description: 'Required. The ID of the advertiser the insertion order belongs to.',
              in: 'path',
              name: 'advertiserId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        insertionOrderId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. The ID of the insertion order the assigned targeting option belongs to.',
              in: 'path',
              name: 'insertionOrderId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        targetingType: z
          .enum([
            'TARGETING_TYPE_UNSPECIFIED',
            'TARGETING_TYPE_CHANNEL',
            'TARGETING_TYPE_APP_CATEGORY',
            'TARGETING_TYPE_APP',
            'TARGETING_TYPE_URL',
            'TARGETING_TYPE_DAY_AND_TIME',
            'TARGETING_TYPE_AGE_RANGE',
            'TARGETING_TYPE_REGIONAL_LOCATION_LIST',
            'TARGETING_TYPE_PROXIMITY_LOCATION_LIST',
            'TARGETING_TYPE_GENDER',
            'TARGETING_TYPE_VIDEO_PLAYER_SIZE',
            'TARGETING_TYPE_USER_REWARDED_CONTENT',
            'TARGETING_TYPE_PARENTAL_STATUS',
            'TARGETING_TYPE_CONTENT_INSTREAM_POSITION',
            'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION',
            'TARGETING_TYPE_DEVICE_TYPE',
            'TARGETING_TYPE_AUDIENCE_GROUP',
            'TARGETING_TYPE_BROWSER',
            'TARGETING_TYPE_HOUSEHOLD_INCOME',
            'TARGETING_TYPE_ON_SCREEN_POSITION',
            'TARGETING_TYPE_THIRD_PARTY_VERIFIER',
            'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION',
            'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION',
            'TARGETING_TYPE_ENVIRONMENT',
            'TARGETING_TYPE_CARRIER_AND_ISP',
            'TARGETING_TYPE_OPERATING_SYSTEM',
            'TARGETING_TYPE_DEVICE_MAKE_MODEL',
            'TARGETING_TYPE_KEYWORD',
            'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST',
            'TARGETING_TYPE_VIEWABILITY',
            'TARGETING_TYPE_CATEGORY',
            'TARGETING_TYPE_INVENTORY_SOURCE',
            'TARGETING_TYPE_LANGUAGE',
            'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS',
            'TARGETING_TYPE_GEO_REGION',
            'TARGETING_TYPE_INVENTORY_SOURCE_GROUP',
            'TARGETING_TYPE_EXCHANGE',
            'TARGETING_TYPE_SUB_EXCHANGE',
            'TARGETING_TYPE_POI',
            'TARGETING_TYPE_BUSINESS_CHAIN',
            'TARGETING_TYPE_CONTENT_DURATION',
            'TARGETING_TYPE_CONTENT_STREAM_TYPE',
            'TARGETING_TYPE_NATIVE_CONTENT_POSITION',
            'TARGETING_TYPE_OMID',
            'TARGETING_TYPE_AUDIO_CONTENT_TYPE',
            'TARGETING_TYPE_CONTENT_GENRE',
            'TARGETING_TYPE_YOUTUBE_VIDEO',
            'TARGETING_TYPE_YOUTUBE_CHANNEL',
            'TARGETING_TYPE_SESSION_POSITION',
          ])
          .openapi({
            param: {
              description:
                'Required. Identifies the type of this assigned targeting option. Supported targeting types include: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_APP` * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AUDIENCE_GROUP` * `TARGETING_TYPE_AUDIO_CONTENT_TYPE` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_BUSINESS_CHAIN` * `TARGETING_TYPE_CARRIER_AND_ISP` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_CONTENT_DURATION` * `TARGETING_TYPE_CONTENT_GENRE` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_STREAM_TYPE` * `TARGETING_TYPE_DAY_AND_TIME` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DEVICE_TYPE` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_INVENTORY_SOURCE` * `TARGETING_TYPE_INVENTORY_SOURCE_GROUP` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NATIVE_CONTENT_POSITION` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_POI` * `TARGETING_TYPE_PROXIMITY_LOCATION_LIST` * `TARGETING_TYPE_REGIONAL_LOCATION_LIST` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_THIRD_PARTY_VERIFIER` * `TARGETING_TYPE_URL` * `TARGETING_TYPE_USER_REWARDED_CONTENT` * `TARGETING_TYPE_VIDEO_PLAYER_SIZE` * `TARGETING_TYPE_VIEWABILITY`',
              in: 'path',
              name: 'targetingType',
              required: true,
              schema: {
                enum: [
                  'TARGETING_TYPE_UNSPECIFIED',
                  'TARGETING_TYPE_CHANNEL',
                  'TARGETING_TYPE_APP_CATEGORY',
                  'TARGETING_TYPE_APP',
                  'TARGETING_TYPE_URL',
                  'TARGETING_TYPE_DAY_AND_TIME',
                  'TARGETING_TYPE_AGE_RANGE',
                  'TARGETING_TYPE_REGIONAL_LOCATION_LIST',
                  'TARGETING_TYPE_PROXIMITY_LOCATION_LIST',
                  'TARGETING_TYPE_GENDER',
                  'TARGETING_TYPE_VIDEO_PLAYER_SIZE',
                  'TARGETING_TYPE_USER_REWARDED_CONTENT',
                  'TARGETING_TYPE_PARENTAL_STATUS',
                  'TARGETING_TYPE_CONTENT_INSTREAM_POSITION',
                  'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION',
                  'TARGETING_TYPE_DEVICE_TYPE',
                  'TARGETING_TYPE_AUDIENCE_GROUP',
                  'TARGETING_TYPE_BROWSER',
                  'TARGETING_TYPE_HOUSEHOLD_INCOME',
                  'TARGETING_TYPE_ON_SCREEN_POSITION',
                  'TARGETING_TYPE_THIRD_PARTY_VERIFIER',
                  'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION',
                  'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION',
                  'TARGETING_TYPE_ENVIRONMENT',
                  'TARGETING_TYPE_CARRIER_AND_ISP',
                  'TARGETING_TYPE_OPERATING_SYSTEM',
                  'TARGETING_TYPE_DEVICE_MAKE_MODEL',
                  'TARGETING_TYPE_KEYWORD',
                  'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST',
                  'TARGETING_TYPE_VIEWABILITY',
                  'TARGETING_TYPE_CATEGORY',
                  'TARGETING_TYPE_INVENTORY_SOURCE',
                  'TARGETING_TYPE_LANGUAGE',
                  'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS',
                  'TARGETING_TYPE_GEO_REGION',
                  'TARGETING_TYPE_INVENTORY_SOURCE_GROUP',
                  'TARGETING_TYPE_EXCHANGE',
                  'TARGETING_TYPE_SUB_EXCHANGE',
                  'TARGETING_TYPE_POI',
                  'TARGETING_TYPE_BUSINESS_CHAIN',
                  'TARGETING_TYPE_CONTENT_DURATION',
                  'TARGETING_TYPE_CONTENT_STREAM_TYPE',
                  'TARGETING_TYPE_NATIVE_CONTENT_POSITION',
                  'TARGETING_TYPE_OMID',
                  'TARGETING_TYPE_AUDIO_CONTENT_TYPE',
                  'TARGETING_TYPE_CONTENT_GENRE',
                  'TARGETING_TYPE_YOUTUBE_VIDEO',
                  'TARGETING_TYPE_YOUTUBE_CHANNEL',
                  'TARGETING_TYPE_SESSION_POSITION',
                ],
                type: 'string',
              },
            },
          }),
        assignedTargetingOptionId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. An identifier unique to the targeting type in this insertion order that identifies the assigned targeting option being requested.',
              in: 'path',
              name: 'assignedTargetingOptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: AssignedTargetingOptionSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/display-video'],
        Oauth2c: ['https://www.googleapis.com/auth/display-video'],
      },
    ],
  })

export const deleteV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdRoute =
  createRoute({
    method: 'delete',
    path: '/v2/advertisers/{advertiserId}/insertionOrders/{insertionOrderId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId}',
    tags: ['advertisers'],
    description:
      'Deletes an assigned targeting option from an insertion order. Supported targeting types: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_VIEWABILITY`',
    operationId:
      'displayvideo.advertisers.insertionOrders.targetingTypes.assignedTargetingOptions.delete',
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
      }),
      params: z.object({
        advertiserId: z
          .string()
          .openapi({
            param: {
              description: 'Required. The ID of the advertiser the insertion order belongs to.',
              in: 'path',
              name: 'advertiserId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        insertionOrderId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. The ID of the insertion order the assigned targeting option belongs to.',
              in: 'path',
              name: 'insertionOrderId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        targetingType: z
          .enum([
            'TARGETING_TYPE_UNSPECIFIED',
            'TARGETING_TYPE_CHANNEL',
            'TARGETING_TYPE_APP_CATEGORY',
            'TARGETING_TYPE_APP',
            'TARGETING_TYPE_URL',
            'TARGETING_TYPE_DAY_AND_TIME',
            'TARGETING_TYPE_AGE_RANGE',
            'TARGETING_TYPE_REGIONAL_LOCATION_LIST',
            'TARGETING_TYPE_PROXIMITY_LOCATION_LIST',
            'TARGETING_TYPE_GENDER',
            'TARGETING_TYPE_VIDEO_PLAYER_SIZE',
            'TARGETING_TYPE_USER_REWARDED_CONTENT',
            'TARGETING_TYPE_PARENTAL_STATUS',
            'TARGETING_TYPE_CONTENT_INSTREAM_POSITION',
            'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION',
            'TARGETING_TYPE_DEVICE_TYPE',
            'TARGETING_TYPE_AUDIENCE_GROUP',
            'TARGETING_TYPE_BROWSER',
            'TARGETING_TYPE_HOUSEHOLD_INCOME',
            'TARGETING_TYPE_ON_SCREEN_POSITION',
            'TARGETING_TYPE_THIRD_PARTY_VERIFIER',
            'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION',
            'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION',
            'TARGETING_TYPE_ENVIRONMENT',
            'TARGETING_TYPE_CARRIER_AND_ISP',
            'TARGETING_TYPE_OPERATING_SYSTEM',
            'TARGETING_TYPE_DEVICE_MAKE_MODEL',
            'TARGETING_TYPE_KEYWORD',
            'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST',
            'TARGETING_TYPE_VIEWABILITY',
            'TARGETING_TYPE_CATEGORY',
            'TARGETING_TYPE_INVENTORY_SOURCE',
            'TARGETING_TYPE_LANGUAGE',
            'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS',
            'TARGETING_TYPE_GEO_REGION',
            'TARGETING_TYPE_INVENTORY_SOURCE_GROUP',
            'TARGETING_TYPE_EXCHANGE',
            'TARGETING_TYPE_SUB_EXCHANGE',
            'TARGETING_TYPE_POI',
            'TARGETING_TYPE_BUSINESS_CHAIN',
            'TARGETING_TYPE_CONTENT_DURATION',
            'TARGETING_TYPE_CONTENT_STREAM_TYPE',
            'TARGETING_TYPE_NATIVE_CONTENT_POSITION',
            'TARGETING_TYPE_OMID',
            'TARGETING_TYPE_AUDIO_CONTENT_TYPE',
            'TARGETING_TYPE_CONTENT_GENRE',
            'TARGETING_TYPE_YOUTUBE_VIDEO',
            'TARGETING_TYPE_YOUTUBE_CHANNEL',
            'TARGETING_TYPE_SESSION_POSITION',
          ])
          .openapi({
            param: {
              description:
                'Required. Identifies the type of this assigned targeting option. Supported targeting types: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_VIEWABILITY`',
              in: 'path',
              name: 'targetingType',
              required: true,
              schema: {
                enum: [
                  'TARGETING_TYPE_UNSPECIFIED',
                  'TARGETING_TYPE_CHANNEL',
                  'TARGETING_TYPE_APP_CATEGORY',
                  'TARGETING_TYPE_APP',
                  'TARGETING_TYPE_URL',
                  'TARGETING_TYPE_DAY_AND_TIME',
                  'TARGETING_TYPE_AGE_RANGE',
                  'TARGETING_TYPE_REGIONAL_LOCATION_LIST',
                  'TARGETING_TYPE_PROXIMITY_LOCATION_LIST',
                  'TARGETING_TYPE_GENDER',
                  'TARGETING_TYPE_VIDEO_PLAYER_SIZE',
                  'TARGETING_TYPE_USER_REWARDED_CONTENT',
                  'TARGETING_TYPE_PARENTAL_STATUS',
                  'TARGETING_TYPE_CONTENT_INSTREAM_POSITION',
                  'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION',
                  'TARGETING_TYPE_DEVICE_TYPE',
                  'TARGETING_TYPE_AUDIENCE_GROUP',
                  'TARGETING_TYPE_BROWSER',
                  'TARGETING_TYPE_HOUSEHOLD_INCOME',
                  'TARGETING_TYPE_ON_SCREEN_POSITION',
                  'TARGETING_TYPE_THIRD_PARTY_VERIFIER',
                  'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION',
                  'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION',
                  'TARGETING_TYPE_ENVIRONMENT',
                  'TARGETING_TYPE_CARRIER_AND_ISP',
                  'TARGETING_TYPE_OPERATING_SYSTEM',
                  'TARGETING_TYPE_DEVICE_MAKE_MODEL',
                  'TARGETING_TYPE_KEYWORD',
                  'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST',
                  'TARGETING_TYPE_VIEWABILITY',
                  'TARGETING_TYPE_CATEGORY',
                  'TARGETING_TYPE_INVENTORY_SOURCE',
                  'TARGETING_TYPE_LANGUAGE',
                  'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS',
                  'TARGETING_TYPE_GEO_REGION',
                  'TARGETING_TYPE_INVENTORY_SOURCE_GROUP',
                  'TARGETING_TYPE_EXCHANGE',
                  'TARGETING_TYPE_SUB_EXCHANGE',
                  'TARGETING_TYPE_POI',
                  'TARGETING_TYPE_BUSINESS_CHAIN',
                  'TARGETING_TYPE_CONTENT_DURATION',
                  'TARGETING_TYPE_CONTENT_STREAM_TYPE',
                  'TARGETING_TYPE_NATIVE_CONTENT_POSITION',
                  'TARGETING_TYPE_OMID',
                  'TARGETING_TYPE_AUDIO_CONTENT_TYPE',
                  'TARGETING_TYPE_CONTENT_GENRE',
                  'TARGETING_TYPE_YOUTUBE_VIDEO',
                  'TARGETING_TYPE_YOUTUBE_CHANNEL',
                  'TARGETING_TYPE_SESSION_POSITION',
                ],
                type: 'string',
              },
            },
          }),
        assignedTargetingOptionId: z
          .string()
          .openapi({
            param: {
              description: 'Required. The ID of the assigned targeting option to delete.',
              in: 'path',
              name: 'assignedTargetingOptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: EmptySchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/display-video'],
        Oauth2c: ['https://www.googleapis.com/auth/display-video'],
      },
    ],
  })

export const getV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdListAssignedTargetingOptionsRoute =
  createRoute({
    method: 'get',
    path: '/v2/advertisers/{advertiserId}/insertionOrders/{insertionOrderId}:listAssignedTargetingOptions',
    tags: ['advertisers'],
    description: 'Lists assigned targeting options of an insertion order across targeting types.',
    operationId: 'displayvideo.advertisers.insertionOrders.listAssignedTargetingOptions',
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
                'Allows filtering by assigned targeting option properties. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the logical operator `OR` on the same field. * A restriction has the form of `{field} {operator} {value}`. * The operator must be `EQUALS (=)`. * Supported fields: - `targetingType` - `inheritance` Examples: * AssignedTargetingOptions of targeting type TARGETING_TYPE_PROXIMITY_LOCATION_LIST or TARGETING_TYPE_CHANNEL `targetingType="TARGETING_TYPE_PROXIMITY_LOCATION_LIST" OR targetingType="TARGETING_TYPE_CHANNEL"` * AssignedTargetingOptions with inheritance status of NOT_INHERITED or INHERITED_FROM_PARTNER `inheritance="NOT_INHERITED" OR inheritance="INHERITED_FROM_PARTNER"` The length of this field should be no more than 500 characters.',
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
                'Field by which to sort the list. Acceptable values are: * `targetingType` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `targetingType desc`.',
              in: 'query',
              name: 'orderBy',
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
                'Requested page size. The size must be an integer between `1` and `5000`. If unspecified, the default is `5000`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.',
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
              description:
                'A token that lets the client fetch the next page of results. Typically, this is the value of next_page_token returned from the previous call to `BulkListInsertionOrderAssignedTargetingOptions` method. If not specified, the first page of results will be returned.',
              in: 'query',
              name: 'pageToken',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        advertiserId: z
          .string()
          .openapi({
            param: {
              description: 'Required. The ID of the advertiser the insertion order belongs to.',
              in: 'path',
              name: 'advertiserId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        insertionOrderId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. The ID of the insertion order to list assigned targeting options for.',
              in: 'path',
              name: 'insertionOrderId',
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
            schema: BulkListInsertionOrderAssignedTargetingOptionsResponseSchema,
          },
        },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/display-video'],
        Oauth2c: ['https://www.googleapis.com/auth/display-video'],
      },
    ],
  })

export const getV2AdvertisersAdvertiserIdInvoicesRoute = createRoute({
  method: 'get',
  path: '/v2/advertisers/{advertiserId}/invoices',
  tags: ['advertisers'],
  description:
    'Lists invoices posted for an advertiser in a given month. Invoices generated by billing profiles with a "Partner" invoice level are not retrievable through this method.',
  operationId: 'displayvideo.advertisers.invoices.list',
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
      issueMonth: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The month to list the invoices for. If not set, the request will retrieve invoices for the previous month. Must be in the format YYYYMM.',
            in: 'query',
            name: 'issueMonth',
            schema: { type: 'string' },
            required: false,
          },
        }),
      loiSapinInvoiceType: z
        .enum([
          'LOI_SAPIN_INVOICE_TYPE_UNSPECIFIED',
          'LOI_SAPIN_INVOICE_TYPE_MEDIA',
          'LOI_SAPIN_INVOICE_TYPE_PLATFORM',
        ])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Select type of invoice to retrieve for Loi Sapin advertisers. Only applicable to Loi Sapin advertisers. Will be ignored otherwise.',
            in: 'query',
            name: 'loiSapinInvoiceType',
            schema: {
              enum: [
                'LOI_SAPIN_INVOICE_TYPE_UNSPECIFIED',
                'LOI_SAPIN_INVOICE_TYPE_MEDIA',
                'LOI_SAPIN_INVOICE_TYPE_PLATFORM',
              ],
              type: 'string',
            },
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
              'Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.',
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
            description:
              'A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListInvoices` method. If not specified, the first page of results will be returned.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      advertiserId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the advertiser to list invoices for.',
            in: 'path',
            name: 'advertiserId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListInvoicesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video-mediaplanning'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video-mediaplanning'],
    },
  ],
})

export const getV2AdvertisersAdvertiserIdInvoicesLookupInvoiceCurrencyRoute = createRoute({
  method: 'get',
  path: '/v2/advertisers/{advertiserId}/invoices:lookupInvoiceCurrency',
  tags: ['advertisers'],
  description: 'Retrieves the invoice currency used by an advertiser in a given month.',
  operationId: 'displayvideo.advertisers.invoices.lookupInvoiceCurrency',
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
      invoiceMonth: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Month for which the currency is needed. If not set, the request will return existing currency settings for the advertiser. Must be in the format YYYYMM.',
            in: 'query',
            name: 'invoiceMonth',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      advertiserId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the advertiser to lookup currency for.',
            in: 'path',
            name: 'advertiserId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LookupInvoiceCurrencyResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video-mediaplanning'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video-mediaplanning'],
    },
  ],
})

export const getV2AdvertisersAdvertiserIdLineItemsRoute = createRoute({
  method: 'get',
  path: '/v2/advertisers/{advertiserId}/lineItems',
  tags: ['advertisers'],
  description:
    'Lists line items in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, line items with `ENTITY_STATUS_ARCHIVED` will not be included in the results.',
  operationId: 'displayvideo.advertisers.lineItems.list',
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
              'Allows filtering by line item properties. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * The operator used on `flight.dateRange.endDate` must be LESS THAN (<). * The operator used on `updateTime` must be `GREATER THAN OR EQUAL TO (>=)` or `LESS THAN OR EQUAL TO (<=)`. * The operator used on `warningMessages` must be `HAS (:)`. * The operators used on all other fields must be `EQUALS (=)`. * Supported properties: - `campaignId` - `displayName` - `insertionOrderId` - `entityStatus` - `lineItemId` - `lineItemType` - `flight.dateRange.endDate` (input formatted as YYYY-MM-DD) - `warningMessages` - `flight.triggerId` - `updateTime` (input in ISO 8601 format, or YYYY-MM-DDTHH:MM:SSZ) - `targetedChannelId` - `targetedNegativeKeywordListId` Examples: * All line items under an insertion order: `insertionOrderId="1234"` * All `ENTITY_STATUS_ACTIVE` or `ENTITY_STATUS_PAUSED` and `LINE_ITEM_TYPE_DISPLAY_DEFAULT` line items under an advertiser: `(entityStatus="ENTITY_STATUS_ACTIVE" OR entityStatus="ENTITY_STATUS_PAUSED") AND lineItemType="LINE_ITEM_TYPE_DISPLAY_DEFAULT"` * All line items whose flight dates end before March 28, 2019: `flight.dateRange.endDate<"2019-03-28"` * All line items that have `NO_VALID_CREATIVE` in `warningMessages`: `warningMessages:"NO_VALID_CREATIVE"` * All line items with an update time less than or equal to `2020-11-04T18:54:47Z (format of ISO 8601)`: `updateTime<="2020-11-04T18:54:47Z"` * All line items with an update time greater than or equal to `2020-11-04T18:54:47Z (format of ISO 8601)`: `updateTime>="2020-11-04T18:54:47Z"` * All line items that are using both the specified channel and specified negative keyword list in their targeting: `targetedNegativeKeywordListId=789 AND targetedChannelId=12345` The length of this field should be no more than 500 characters.',
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
              'Field by which to sort the list. Acceptable values are: * `displayName` (default) * `entityStatus` * `flight.dateRange.endDate` * `updateTime` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`.',
            in: 'query',
            name: 'orderBy',
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
              'Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.',
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
            description:
              'A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListLineItems` method. If not specified, the first page of results will be returned.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      advertiserId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the advertiser to list line items for.',
            in: 'path',
            name: 'advertiserId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListLineItemsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const postV2AdvertisersAdvertiserIdLineItemsRoute = createRoute({
  method: 'post',
  path: '/v2/advertisers/{advertiserId}/lineItems',
  tags: ['advertisers'],
  description: 'Creates a new line item. Returns the newly created line item if successful.',
  operationId: 'displayvideo.advertisers.lineItems.create',
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
    }),
    params: z.object({
      advertiserId: z
        .string()
        .openapi({
          param: {
            description: 'Output only. The unique ID of the advertiser the line item belongs to.',
            in: 'path',
            name: 'advertiserId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: LineItemSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LineItemSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const getV2AdvertisersAdvertiserIdLineItemsLineItemIdRoute = createRoute({
  method: 'get',
  path: '/v2/advertisers/{advertiserId}/lineItems/{lineItemId}',
  tags: ['advertisers'],
  description: 'Gets a line item.',
  operationId: 'displayvideo.advertisers.lineItems.get',
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
    }),
    params: z.object({
      advertiserId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the advertiser this line item belongs to.',
            in: 'path',
            name: 'advertiserId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      lineItemId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the line item to fetch.',
            in: 'path',
            name: 'lineItemId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LineItemSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const deleteV2AdvertisersAdvertiserIdLineItemsLineItemIdRoute = createRoute({
  method: 'delete',
  path: '/v2/advertisers/{advertiserId}/lineItems/{lineItemId}',
  tags: ['advertisers'],
  description:
    'Deletes a line item. Returns error code `NOT_FOUND` if the line item does not exist. The line item should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it.',
  operationId: 'displayvideo.advertisers.lineItems.delete',
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
    }),
    params: z.object({
      advertiserId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the advertiser this line item belongs to.',
            in: 'path',
            name: 'advertiserId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      lineItemId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the line item to delete.',
            in: 'path',
            name: 'lineItemId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const patchV2AdvertisersAdvertiserIdLineItemsLineItemIdRoute = createRoute({
  method: 'patch',
  path: '/v2/advertisers/{advertiserId}/lineItems/{lineItemId}',
  tags: ['advertisers'],
  description:
    'Updates an existing line item. Returns the updated line item if successful. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * BulkUpdateLineItems * CreateLineItemAssignedTargetingOption * DeleteLineItemAssignedTargetingOption',
  operationId: 'displayvideo.advertisers.lineItems.patch',
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
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. The mask to control which fields to update.',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      advertiserId: z
        .string()
        .openapi({
          param: {
            description: 'Output only. The unique ID of the advertiser the line item belongs to.',
            in: 'path',
            name: 'advertiserId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      lineItemId: z
        .string()
        .openapi({
          param: {
            description: 'Output only. The unique ID of the line item. Assigned by the system.',
            in: 'path',
            name: 'lineItemId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: LineItemSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LineItemSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const getV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsRoute =
  createRoute({
    method: 'get',
    path: '/v2/advertisers/{advertiserId}/lineItems/{lineItemId}/targetingTypes/{targetingType}/assignedTargetingOptions',
    tags: ['advertisers'],
    description: 'Lists the targeting options assigned to a line item.',
    operationId: 'displayvideo.advertisers.lineItems.targetingTypes.assignedTargetingOptions.list',
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
                'Allows filtering by assigned targeting option properties. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the logical operator `OR`. * A restriction has the form of `{field} {operator} {value}`. * The operator must be `EQUALS (=)`. * Supported fields: - `assignedTargetingOptionId` - `inheritance` Examples: * AssignedTargetingOptions with ID 1 or 2 `assignedTargetingOptionId="1" OR assignedTargetingOptionId="2"` * AssignedTargetingOptions with inheritance status of NOT_INHERITED or INHERITED_FROM_PARTNER `inheritance="NOT_INHERITED" OR inheritance="INHERITED_FROM_PARTNER"` The length of this field should be no more than 500 characters.',
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
                'Field by which to sort the list. Acceptable values are: * `assignedTargetingOptionId` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `assignedTargetingOptionId desc`.',
              in: 'query',
              name: 'orderBy',
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
                'Requested page size. Must be between `1` and `5000`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.',
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
              description:
                'A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListLineItemAssignedTargetingOptions` method. If not specified, the first page of results will be returned.',
              in: 'query',
              name: 'pageToken',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        advertiserId: z
          .string()
          .openapi({
            param: {
              description: 'Required. The ID of the advertiser the line item belongs to.',
              in: 'path',
              name: 'advertiserId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        lineItemId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. The ID of the line item to list assigned targeting options for.',
              in: 'path',
              name: 'lineItemId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        targetingType: z
          .enum([
            'TARGETING_TYPE_UNSPECIFIED',
            'TARGETING_TYPE_CHANNEL',
            'TARGETING_TYPE_APP_CATEGORY',
            'TARGETING_TYPE_APP',
            'TARGETING_TYPE_URL',
            'TARGETING_TYPE_DAY_AND_TIME',
            'TARGETING_TYPE_AGE_RANGE',
            'TARGETING_TYPE_REGIONAL_LOCATION_LIST',
            'TARGETING_TYPE_PROXIMITY_LOCATION_LIST',
            'TARGETING_TYPE_GENDER',
            'TARGETING_TYPE_VIDEO_PLAYER_SIZE',
            'TARGETING_TYPE_USER_REWARDED_CONTENT',
            'TARGETING_TYPE_PARENTAL_STATUS',
            'TARGETING_TYPE_CONTENT_INSTREAM_POSITION',
            'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION',
            'TARGETING_TYPE_DEVICE_TYPE',
            'TARGETING_TYPE_AUDIENCE_GROUP',
            'TARGETING_TYPE_BROWSER',
            'TARGETING_TYPE_HOUSEHOLD_INCOME',
            'TARGETING_TYPE_ON_SCREEN_POSITION',
            'TARGETING_TYPE_THIRD_PARTY_VERIFIER',
            'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION',
            'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION',
            'TARGETING_TYPE_ENVIRONMENT',
            'TARGETING_TYPE_CARRIER_AND_ISP',
            'TARGETING_TYPE_OPERATING_SYSTEM',
            'TARGETING_TYPE_DEVICE_MAKE_MODEL',
            'TARGETING_TYPE_KEYWORD',
            'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST',
            'TARGETING_TYPE_VIEWABILITY',
            'TARGETING_TYPE_CATEGORY',
            'TARGETING_TYPE_INVENTORY_SOURCE',
            'TARGETING_TYPE_LANGUAGE',
            'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS',
            'TARGETING_TYPE_GEO_REGION',
            'TARGETING_TYPE_INVENTORY_SOURCE_GROUP',
            'TARGETING_TYPE_EXCHANGE',
            'TARGETING_TYPE_SUB_EXCHANGE',
            'TARGETING_TYPE_POI',
            'TARGETING_TYPE_BUSINESS_CHAIN',
            'TARGETING_TYPE_CONTENT_DURATION',
            'TARGETING_TYPE_CONTENT_STREAM_TYPE',
            'TARGETING_TYPE_NATIVE_CONTENT_POSITION',
            'TARGETING_TYPE_OMID',
            'TARGETING_TYPE_AUDIO_CONTENT_TYPE',
            'TARGETING_TYPE_CONTENT_GENRE',
            'TARGETING_TYPE_YOUTUBE_VIDEO',
            'TARGETING_TYPE_YOUTUBE_CHANNEL',
            'TARGETING_TYPE_SESSION_POSITION',
          ])
          .openapi({
            param: {
              description:
                'Required. Identifies the type of assigned targeting options to list. Supported targeting types include: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_APP` * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AUDIENCE_GROUP` * `TARGETING_TYPE_AUDIO_CONTENT_TYPE` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_BUSINESS_CHAIN` * `TARGETING_TYPE_CARRIER_AND_ISP` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_CONTENT_DURATION` * `TARGETING_TYPE_CONTENT_GENRE` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_STREAM_TYPE` * `TARGETING_TYPE_DAY_AND_TIME` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DEVICE_TYPE` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_INVENTORY_SOURCE` * `TARGETING_TYPE_INVENTORY_SOURCE_GROUP` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NATIVE_CONTENT_POSITION` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_POI` * `TARGETING_TYPE_PROXIMITY_LOCATION_LIST` * `TARGETING_TYPE_REGIONAL_LOCATION_LIST` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_THIRD_PARTY_VERIFIER` * `TARGETING_TYPE_URL` * `TARGETING_TYPE_USER_REWARDED_CONTENT` * `TARGETING_TYPE_VIDEO_PLAYER_SIZE` * `TARGETING_TYPE_VIEWABILITY` * `TARGETING_TYPE_YOUTUBE_CHANNEL` (only for `LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_VIDEO_SEQUENCE` line items) * `TARGETING_TYPE_YOUTUBE_VIDEO` (only for `LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_VIDEO_SEQUENCE` line items)',
              in: 'path',
              name: 'targetingType',
              required: true,
              schema: {
                enum: [
                  'TARGETING_TYPE_UNSPECIFIED',
                  'TARGETING_TYPE_CHANNEL',
                  'TARGETING_TYPE_APP_CATEGORY',
                  'TARGETING_TYPE_APP',
                  'TARGETING_TYPE_URL',
                  'TARGETING_TYPE_DAY_AND_TIME',
                  'TARGETING_TYPE_AGE_RANGE',
                  'TARGETING_TYPE_REGIONAL_LOCATION_LIST',
                  'TARGETING_TYPE_PROXIMITY_LOCATION_LIST',
                  'TARGETING_TYPE_GENDER',
                  'TARGETING_TYPE_VIDEO_PLAYER_SIZE',
                  'TARGETING_TYPE_USER_REWARDED_CONTENT',
                  'TARGETING_TYPE_PARENTAL_STATUS',
                  'TARGETING_TYPE_CONTENT_INSTREAM_POSITION',
                  'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION',
                  'TARGETING_TYPE_DEVICE_TYPE',
                  'TARGETING_TYPE_AUDIENCE_GROUP',
                  'TARGETING_TYPE_BROWSER',
                  'TARGETING_TYPE_HOUSEHOLD_INCOME',
                  'TARGETING_TYPE_ON_SCREEN_POSITION',
                  'TARGETING_TYPE_THIRD_PARTY_VERIFIER',
                  'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION',
                  'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION',
                  'TARGETING_TYPE_ENVIRONMENT',
                  'TARGETING_TYPE_CARRIER_AND_ISP',
                  'TARGETING_TYPE_OPERATING_SYSTEM',
                  'TARGETING_TYPE_DEVICE_MAKE_MODEL',
                  'TARGETING_TYPE_KEYWORD',
                  'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST',
                  'TARGETING_TYPE_VIEWABILITY',
                  'TARGETING_TYPE_CATEGORY',
                  'TARGETING_TYPE_INVENTORY_SOURCE',
                  'TARGETING_TYPE_LANGUAGE',
                  'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS',
                  'TARGETING_TYPE_GEO_REGION',
                  'TARGETING_TYPE_INVENTORY_SOURCE_GROUP',
                  'TARGETING_TYPE_EXCHANGE',
                  'TARGETING_TYPE_SUB_EXCHANGE',
                  'TARGETING_TYPE_POI',
                  'TARGETING_TYPE_BUSINESS_CHAIN',
                  'TARGETING_TYPE_CONTENT_DURATION',
                  'TARGETING_TYPE_CONTENT_STREAM_TYPE',
                  'TARGETING_TYPE_NATIVE_CONTENT_POSITION',
                  'TARGETING_TYPE_OMID',
                  'TARGETING_TYPE_AUDIO_CONTENT_TYPE',
                  'TARGETING_TYPE_CONTENT_GENRE',
                  'TARGETING_TYPE_YOUTUBE_VIDEO',
                  'TARGETING_TYPE_YOUTUBE_CHANNEL',
                  'TARGETING_TYPE_SESSION_POSITION',
                ],
                type: 'string',
              },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': { schema: ListLineItemAssignedTargetingOptionsResponseSchema },
        },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/display-video'],
        Oauth2c: ['https://www.googleapis.com/auth/display-video'],
      },
    ],
  })

export const postV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsRoute =
  createRoute({
    method: 'post',
    path: '/v2/advertisers/{advertiserId}/lineItems/{lineItemId}/targetingTypes/{targetingType}/assignedTargetingOptions',
    tags: ['advertisers'],
    description:
      'Assigns a targeting option to a line item. Returns the assigned targeting option if successful. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * BulkUpdate * UpdateLineItem * DeleteLineItemAssignedTargetingOption',
    operationId:
      'displayvideo.advertisers.lineItems.targetingTypes.assignedTargetingOptions.create',
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
      }),
      params: z.object({
        advertiserId: z
          .string()
          .openapi({
            param: {
              description: 'Required. The ID of the advertiser the line item belongs to.',
              in: 'path',
              name: 'advertiserId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        lineItemId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. The ID of the line item the assigned targeting option will belong to.',
              in: 'path',
              name: 'lineItemId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        targetingType: z
          .enum([
            'TARGETING_TYPE_UNSPECIFIED',
            'TARGETING_TYPE_CHANNEL',
            'TARGETING_TYPE_APP_CATEGORY',
            'TARGETING_TYPE_APP',
            'TARGETING_TYPE_URL',
            'TARGETING_TYPE_DAY_AND_TIME',
            'TARGETING_TYPE_AGE_RANGE',
            'TARGETING_TYPE_REGIONAL_LOCATION_LIST',
            'TARGETING_TYPE_PROXIMITY_LOCATION_LIST',
            'TARGETING_TYPE_GENDER',
            'TARGETING_TYPE_VIDEO_PLAYER_SIZE',
            'TARGETING_TYPE_USER_REWARDED_CONTENT',
            'TARGETING_TYPE_PARENTAL_STATUS',
            'TARGETING_TYPE_CONTENT_INSTREAM_POSITION',
            'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION',
            'TARGETING_TYPE_DEVICE_TYPE',
            'TARGETING_TYPE_AUDIENCE_GROUP',
            'TARGETING_TYPE_BROWSER',
            'TARGETING_TYPE_HOUSEHOLD_INCOME',
            'TARGETING_TYPE_ON_SCREEN_POSITION',
            'TARGETING_TYPE_THIRD_PARTY_VERIFIER',
            'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION',
            'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION',
            'TARGETING_TYPE_ENVIRONMENT',
            'TARGETING_TYPE_CARRIER_AND_ISP',
            'TARGETING_TYPE_OPERATING_SYSTEM',
            'TARGETING_TYPE_DEVICE_MAKE_MODEL',
            'TARGETING_TYPE_KEYWORD',
            'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST',
            'TARGETING_TYPE_VIEWABILITY',
            'TARGETING_TYPE_CATEGORY',
            'TARGETING_TYPE_INVENTORY_SOURCE',
            'TARGETING_TYPE_LANGUAGE',
            'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS',
            'TARGETING_TYPE_GEO_REGION',
            'TARGETING_TYPE_INVENTORY_SOURCE_GROUP',
            'TARGETING_TYPE_EXCHANGE',
            'TARGETING_TYPE_SUB_EXCHANGE',
            'TARGETING_TYPE_POI',
            'TARGETING_TYPE_BUSINESS_CHAIN',
            'TARGETING_TYPE_CONTENT_DURATION',
            'TARGETING_TYPE_CONTENT_STREAM_TYPE',
            'TARGETING_TYPE_NATIVE_CONTENT_POSITION',
            'TARGETING_TYPE_OMID',
            'TARGETING_TYPE_AUDIO_CONTENT_TYPE',
            'TARGETING_TYPE_CONTENT_GENRE',
            'TARGETING_TYPE_YOUTUBE_VIDEO',
            'TARGETING_TYPE_YOUTUBE_CHANNEL',
            'TARGETING_TYPE_SESSION_POSITION',
          ])
          .openapi({
            param: {
              description:
                'Required. Identifies the type of this assigned targeting option. Supported targeting types include: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_APP` * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AUDIENCE_GROUP` * `TARGETING_TYPE_AUDIO_CONTENT_TYPE` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_BUSINESS_CHAIN` * `TARGETING_TYPE_CARRIER_AND_ISP` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_CONTENT_DURATION` * `TARGETING_TYPE_CONTENT_GENRE` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_STREAM_TYPE` * `TARGETING_TYPE_DAY_AND_TIME` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DEVICE_TYPE` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_INVENTORY_SOURCE` * `TARGETING_TYPE_INVENTORY_SOURCE_GROUP` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NATIVE_CONTENT_POSITION` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_POI` * `TARGETING_TYPE_PROXIMITY_LOCATION_LIST` * `TARGETING_TYPE_REGIONAL_LOCATION_LIST` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_THIRD_PARTY_VERIFIER` * `TARGETING_TYPE_URL` * `TARGETING_TYPE_USER_REWARDED_CONTENT` * `TARGETING_TYPE_VIDEO_PLAYER_SIZE` * `TARGETING_TYPE_VIEWABILITY`',
              in: 'path',
              name: 'targetingType',
              required: true,
              schema: {
                enum: [
                  'TARGETING_TYPE_UNSPECIFIED',
                  'TARGETING_TYPE_CHANNEL',
                  'TARGETING_TYPE_APP_CATEGORY',
                  'TARGETING_TYPE_APP',
                  'TARGETING_TYPE_URL',
                  'TARGETING_TYPE_DAY_AND_TIME',
                  'TARGETING_TYPE_AGE_RANGE',
                  'TARGETING_TYPE_REGIONAL_LOCATION_LIST',
                  'TARGETING_TYPE_PROXIMITY_LOCATION_LIST',
                  'TARGETING_TYPE_GENDER',
                  'TARGETING_TYPE_VIDEO_PLAYER_SIZE',
                  'TARGETING_TYPE_USER_REWARDED_CONTENT',
                  'TARGETING_TYPE_PARENTAL_STATUS',
                  'TARGETING_TYPE_CONTENT_INSTREAM_POSITION',
                  'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION',
                  'TARGETING_TYPE_DEVICE_TYPE',
                  'TARGETING_TYPE_AUDIENCE_GROUP',
                  'TARGETING_TYPE_BROWSER',
                  'TARGETING_TYPE_HOUSEHOLD_INCOME',
                  'TARGETING_TYPE_ON_SCREEN_POSITION',
                  'TARGETING_TYPE_THIRD_PARTY_VERIFIER',
                  'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION',
                  'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION',
                  'TARGETING_TYPE_ENVIRONMENT',
                  'TARGETING_TYPE_CARRIER_AND_ISP',
                  'TARGETING_TYPE_OPERATING_SYSTEM',
                  'TARGETING_TYPE_DEVICE_MAKE_MODEL',
                  'TARGETING_TYPE_KEYWORD',
                  'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST',
                  'TARGETING_TYPE_VIEWABILITY',
                  'TARGETING_TYPE_CATEGORY',
                  'TARGETING_TYPE_INVENTORY_SOURCE',
                  'TARGETING_TYPE_LANGUAGE',
                  'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS',
                  'TARGETING_TYPE_GEO_REGION',
                  'TARGETING_TYPE_INVENTORY_SOURCE_GROUP',
                  'TARGETING_TYPE_EXCHANGE',
                  'TARGETING_TYPE_SUB_EXCHANGE',
                  'TARGETING_TYPE_POI',
                  'TARGETING_TYPE_BUSINESS_CHAIN',
                  'TARGETING_TYPE_CONTENT_DURATION',
                  'TARGETING_TYPE_CONTENT_STREAM_TYPE',
                  'TARGETING_TYPE_NATIVE_CONTENT_POSITION',
                  'TARGETING_TYPE_OMID',
                  'TARGETING_TYPE_AUDIO_CONTENT_TYPE',
                  'TARGETING_TYPE_CONTENT_GENRE',
                  'TARGETING_TYPE_YOUTUBE_VIDEO',
                  'TARGETING_TYPE_YOUTUBE_CHANNEL',
                  'TARGETING_TYPE_SESSION_POSITION',
                ],
                type: 'string',
              },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: AssignedTargetingOptionSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: AssignedTargetingOptionSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/display-video'],
        Oauth2c: ['https://www.googleapis.com/auth/display-video'],
      },
    ],
  })

export const getV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdRoute =
  createRoute({
    method: 'get',
    path: '/v2/advertisers/{advertiserId}/lineItems/{lineItemId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId}',
    tags: ['advertisers'],
    description: 'Gets a single targeting option assigned to a line item.',
    operationId: 'displayvideo.advertisers.lineItems.targetingTypes.assignedTargetingOptions.get',
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
      }),
      params: z.object({
        advertiserId: z
          .string()
          .openapi({
            param: {
              description: 'Required. The ID of the advertiser the line item belongs to.',
              in: 'path',
              name: 'advertiserId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        lineItemId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. The ID of the line item the assigned targeting option belongs to.',
              in: 'path',
              name: 'lineItemId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        targetingType: z
          .enum([
            'TARGETING_TYPE_UNSPECIFIED',
            'TARGETING_TYPE_CHANNEL',
            'TARGETING_TYPE_APP_CATEGORY',
            'TARGETING_TYPE_APP',
            'TARGETING_TYPE_URL',
            'TARGETING_TYPE_DAY_AND_TIME',
            'TARGETING_TYPE_AGE_RANGE',
            'TARGETING_TYPE_REGIONAL_LOCATION_LIST',
            'TARGETING_TYPE_PROXIMITY_LOCATION_LIST',
            'TARGETING_TYPE_GENDER',
            'TARGETING_TYPE_VIDEO_PLAYER_SIZE',
            'TARGETING_TYPE_USER_REWARDED_CONTENT',
            'TARGETING_TYPE_PARENTAL_STATUS',
            'TARGETING_TYPE_CONTENT_INSTREAM_POSITION',
            'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION',
            'TARGETING_TYPE_DEVICE_TYPE',
            'TARGETING_TYPE_AUDIENCE_GROUP',
            'TARGETING_TYPE_BROWSER',
            'TARGETING_TYPE_HOUSEHOLD_INCOME',
            'TARGETING_TYPE_ON_SCREEN_POSITION',
            'TARGETING_TYPE_THIRD_PARTY_VERIFIER',
            'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION',
            'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION',
            'TARGETING_TYPE_ENVIRONMENT',
            'TARGETING_TYPE_CARRIER_AND_ISP',
            'TARGETING_TYPE_OPERATING_SYSTEM',
            'TARGETING_TYPE_DEVICE_MAKE_MODEL',
            'TARGETING_TYPE_KEYWORD',
            'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST',
            'TARGETING_TYPE_VIEWABILITY',
            'TARGETING_TYPE_CATEGORY',
            'TARGETING_TYPE_INVENTORY_SOURCE',
            'TARGETING_TYPE_LANGUAGE',
            'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS',
            'TARGETING_TYPE_GEO_REGION',
            'TARGETING_TYPE_INVENTORY_SOURCE_GROUP',
            'TARGETING_TYPE_EXCHANGE',
            'TARGETING_TYPE_SUB_EXCHANGE',
            'TARGETING_TYPE_POI',
            'TARGETING_TYPE_BUSINESS_CHAIN',
            'TARGETING_TYPE_CONTENT_DURATION',
            'TARGETING_TYPE_CONTENT_STREAM_TYPE',
            'TARGETING_TYPE_NATIVE_CONTENT_POSITION',
            'TARGETING_TYPE_OMID',
            'TARGETING_TYPE_AUDIO_CONTENT_TYPE',
            'TARGETING_TYPE_CONTENT_GENRE',
            'TARGETING_TYPE_YOUTUBE_VIDEO',
            'TARGETING_TYPE_YOUTUBE_CHANNEL',
            'TARGETING_TYPE_SESSION_POSITION',
          ])
          .openapi({
            param: {
              description:
                'Required. Identifies the type of this assigned targeting option. Supported targeting types include: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_APP` * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AUDIENCE_GROUP` * `TARGETING_TYPE_AUDIO_CONTENT_TYPE` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_BUSINESS_CHAIN` * `TARGETING_TYPE_CARRIER_AND_ISP` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_CONTENT_DURATION` * `TARGETING_TYPE_CONTENT_GENRE` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_STREAM_TYPE` * `TARGETING_TYPE_DAY_AND_TIME` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DEVICE_TYPE` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_INVENTORY_SOURCE` * `TARGETING_TYPE_INVENTORY_SOURCE_GROUP` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NATIVE_CONTENT_POSITION` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_POI` * `TARGETING_TYPE_PROXIMITY_LOCATION_LIST` * `TARGETING_TYPE_REGIONAL_LOCATION_LIST` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_THIRD_PARTY_VERIFIER` * `TARGETING_TYPE_URL` * `TARGETING_TYPE_USER_REWARDED_CONTENT` * `TARGETING_TYPE_VIDEO_PLAYER_SIZE` * `TARGETING_TYPE_VIEWABILITY` * `TARGETING_TYPE_YOUTUBE_CHANNEL` (only for `LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_VIDEO_SEQUENCE` line items) * `TARGETING_TYPE_YOUTUBE_VIDEO` (only for `LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_VIDEO_SEQUENCE` line items)',
              in: 'path',
              name: 'targetingType',
              required: true,
              schema: {
                enum: [
                  'TARGETING_TYPE_UNSPECIFIED',
                  'TARGETING_TYPE_CHANNEL',
                  'TARGETING_TYPE_APP_CATEGORY',
                  'TARGETING_TYPE_APP',
                  'TARGETING_TYPE_URL',
                  'TARGETING_TYPE_DAY_AND_TIME',
                  'TARGETING_TYPE_AGE_RANGE',
                  'TARGETING_TYPE_REGIONAL_LOCATION_LIST',
                  'TARGETING_TYPE_PROXIMITY_LOCATION_LIST',
                  'TARGETING_TYPE_GENDER',
                  'TARGETING_TYPE_VIDEO_PLAYER_SIZE',
                  'TARGETING_TYPE_USER_REWARDED_CONTENT',
                  'TARGETING_TYPE_PARENTAL_STATUS',
                  'TARGETING_TYPE_CONTENT_INSTREAM_POSITION',
                  'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION',
                  'TARGETING_TYPE_DEVICE_TYPE',
                  'TARGETING_TYPE_AUDIENCE_GROUP',
                  'TARGETING_TYPE_BROWSER',
                  'TARGETING_TYPE_HOUSEHOLD_INCOME',
                  'TARGETING_TYPE_ON_SCREEN_POSITION',
                  'TARGETING_TYPE_THIRD_PARTY_VERIFIER',
                  'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION',
                  'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION',
                  'TARGETING_TYPE_ENVIRONMENT',
                  'TARGETING_TYPE_CARRIER_AND_ISP',
                  'TARGETING_TYPE_OPERATING_SYSTEM',
                  'TARGETING_TYPE_DEVICE_MAKE_MODEL',
                  'TARGETING_TYPE_KEYWORD',
                  'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST',
                  'TARGETING_TYPE_VIEWABILITY',
                  'TARGETING_TYPE_CATEGORY',
                  'TARGETING_TYPE_INVENTORY_SOURCE',
                  'TARGETING_TYPE_LANGUAGE',
                  'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS',
                  'TARGETING_TYPE_GEO_REGION',
                  'TARGETING_TYPE_INVENTORY_SOURCE_GROUP',
                  'TARGETING_TYPE_EXCHANGE',
                  'TARGETING_TYPE_SUB_EXCHANGE',
                  'TARGETING_TYPE_POI',
                  'TARGETING_TYPE_BUSINESS_CHAIN',
                  'TARGETING_TYPE_CONTENT_DURATION',
                  'TARGETING_TYPE_CONTENT_STREAM_TYPE',
                  'TARGETING_TYPE_NATIVE_CONTENT_POSITION',
                  'TARGETING_TYPE_OMID',
                  'TARGETING_TYPE_AUDIO_CONTENT_TYPE',
                  'TARGETING_TYPE_CONTENT_GENRE',
                  'TARGETING_TYPE_YOUTUBE_VIDEO',
                  'TARGETING_TYPE_YOUTUBE_CHANNEL',
                  'TARGETING_TYPE_SESSION_POSITION',
                ],
                type: 'string',
              },
            },
          }),
        assignedTargetingOptionId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. An identifier unique to the targeting type in this line item that identifies the assigned targeting option being requested.',
              in: 'path',
              name: 'assignedTargetingOptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: AssignedTargetingOptionSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/display-video'],
        Oauth2c: ['https://www.googleapis.com/auth/display-video'],
      },
    ],
  })

export const deleteV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdRoute =
  createRoute({
    method: 'delete',
    path: '/v2/advertisers/{advertiserId}/lineItems/{lineItemId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId}',
    tags: ['advertisers'],
    description:
      'Deletes an assigned targeting option from a line item. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * BulkUpdate * UpdateLineItem * CreateLineItemAssignedTargetingOption',
    operationId:
      'displayvideo.advertisers.lineItems.targetingTypes.assignedTargetingOptions.delete',
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
      }),
      params: z.object({
        advertiserId: z
          .string()
          .openapi({
            param: {
              description: 'Required. The ID of the advertiser the line item belongs to.',
              in: 'path',
              name: 'advertiserId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        lineItemId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. The ID of the line item the assigned targeting option belongs to.',
              in: 'path',
              name: 'lineItemId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        targetingType: z
          .enum([
            'TARGETING_TYPE_UNSPECIFIED',
            'TARGETING_TYPE_CHANNEL',
            'TARGETING_TYPE_APP_CATEGORY',
            'TARGETING_TYPE_APP',
            'TARGETING_TYPE_URL',
            'TARGETING_TYPE_DAY_AND_TIME',
            'TARGETING_TYPE_AGE_RANGE',
            'TARGETING_TYPE_REGIONAL_LOCATION_LIST',
            'TARGETING_TYPE_PROXIMITY_LOCATION_LIST',
            'TARGETING_TYPE_GENDER',
            'TARGETING_TYPE_VIDEO_PLAYER_SIZE',
            'TARGETING_TYPE_USER_REWARDED_CONTENT',
            'TARGETING_TYPE_PARENTAL_STATUS',
            'TARGETING_TYPE_CONTENT_INSTREAM_POSITION',
            'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION',
            'TARGETING_TYPE_DEVICE_TYPE',
            'TARGETING_TYPE_AUDIENCE_GROUP',
            'TARGETING_TYPE_BROWSER',
            'TARGETING_TYPE_HOUSEHOLD_INCOME',
            'TARGETING_TYPE_ON_SCREEN_POSITION',
            'TARGETING_TYPE_THIRD_PARTY_VERIFIER',
            'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION',
            'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION',
            'TARGETING_TYPE_ENVIRONMENT',
            'TARGETING_TYPE_CARRIER_AND_ISP',
            'TARGETING_TYPE_OPERATING_SYSTEM',
            'TARGETING_TYPE_DEVICE_MAKE_MODEL',
            'TARGETING_TYPE_KEYWORD',
            'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST',
            'TARGETING_TYPE_VIEWABILITY',
            'TARGETING_TYPE_CATEGORY',
            'TARGETING_TYPE_INVENTORY_SOURCE',
            'TARGETING_TYPE_LANGUAGE',
            'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS',
            'TARGETING_TYPE_GEO_REGION',
            'TARGETING_TYPE_INVENTORY_SOURCE_GROUP',
            'TARGETING_TYPE_EXCHANGE',
            'TARGETING_TYPE_SUB_EXCHANGE',
            'TARGETING_TYPE_POI',
            'TARGETING_TYPE_BUSINESS_CHAIN',
            'TARGETING_TYPE_CONTENT_DURATION',
            'TARGETING_TYPE_CONTENT_STREAM_TYPE',
            'TARGETING_TYPE_NATIVE_CONTENT_POSITION',
            'TARGETING_TYPE_OMID',
            'TARGETING_TYPE_AUDIO_CONTENT_TYPE',
            'TARGETING_TYPE_CONTENT_GENRE',
            'TARGETING_TYPE_YOUTUBE_VIDEO',
            'TARGETING_TYPE_YOUTUBE_CHANNEL',
            'TARGETING_TYPE_SESSION_POSITION',
          ])
          .openapi({
            param: {
              description:
                'Required. Identifies the type of this assigned targeting option. Supported targeting types include: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_APP` * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AUDIENCE_GROUP` * `TARGETING_TYPE_AUDIO_CONTENT_TYPE` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_BUSINESS_CHAIN` * `TARGETING_TYPE_CARRIER_AND_ISP` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_CONTENT_DURATION` * `TARGETING_TYPE_CONTENT_GENRE` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_STREAM_TYPE` * `TARGETING_TYPE_DAY_AND_TIME` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DEVICE_TYPE` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_INVENTORY_SOURCE` * `TARGETING_TYPE_INVENTORY_SOURCE_GROUP` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NATIVE_CONTENT_POSITION` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_POI` * `TARGETING_TYPE_PROXIMITY_LOCATION_LIST` * `TARGETING_TYPE_REGIONAL_LOCATION_LIST` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_THIRD_PARTY_VERIFIER` * `TARGETING_TYPE_URL` * `TARGETING_TYPE_USER_REWARDED_CONTENT` * `TARGETING_TYPE_VIDEO_PLAYER_SIZE` * `TARGETING_TYPE_VIEWABILITY`',
              in: 'path',
              name: 'targetingType',
              required: true,
              schema: {
                enum: [
                  'TARGETING_TYPE_UNSPECIFIED',
                  'TARGETING_TYPE_CHANNEL',
                  'TARGETING_TYPE_APP_CATEGORY',
                  'TARGETING_TYPE_APP',
                  'TARGETING_TYPE_URL',
                  'TARGETING_TYPE_DAY_AND_TIME',
                  'TARGETING_TYPE_AGE_RANGE',
                  'TARGETING_TYPE_REGIONAL_LOCATION_LIST',
                  'TARGETING_TYPE_PROXIMITY_LOCATION_LIST',
                  'TARGETING_TYPE_GENDER',
                  'TARGETING_TYPE_VIDEO_PLAYER_SIZE',
                  'TARGETING_TYPE_USER_REWARDED_CONTENT',
                  'TARGETING_TYPE_PARENTAL_STATUS',
                  'TARGETING_TYPE_CONTENT_INSTREAM_POSITION',
                  'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION',
                  'TARGETING_TYPE_DEVICE_TYPE',
                  'TARGETING_TYPE_AUDIENCE_GROUP',
                  'TARGETING_TYPE_BROWSER',
                  'TARGETING_TYPE_HOUSEHOLD_INCOME',
                  'TARGETING_TYPE_ON_SCREEN_POSITION',
                  'TARGETING_TYPE_THIRD_PARTY_VERIFIER',
                  'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION',
                  'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION',
                  'TARGETING_TYPE_ENVIRONMENT',
                  'TARGETING_TYPE_CARRIER_AND_ISP',
                  'TARGETING_TYPE_OPERATING_SYSTEM',
                  'TARGETING_TYPE_DEVICE_MAKE_MODEL',
                  'TARGETING_TYPE_KEYWORD',
                  'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST',
                  'TARGETING_TYPE_VIEWABILITY',
                  'TARGETING_TYPE_CATEGORY',
                  'TARGETING_TYPE_INVENTORY_SOURCE',
                  'TARGETING_TYPE_LANGUAGE',
                  'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS',
                  'TARGETING_TYPE_GEO_REGION',
                  'TARGETING_TYPE_INVENTORY_SOURCE_GROUP',
                  'TARGETING_TYPE_EXCHANGE',
                  'TARGETING_TYPE_SUB_EXCHANGE',
                  'TARGETING_TYPE_POI',
                  'TARGETING_TYPE_BUSINESS_CHAIN',
                  'TARGETING_TYPE_CONTENT_DURATION',
                  'TARGETING_TYPE_CONTENT_STREAM_TYPE',
                  'TARGETING_TYPE_NATIVE_CONTENT_POSITION',
                  'TARGETING_TYPE_OMID',
                  'TARGETING_TYPE_AUDIO_CONTENT_TYPE',
                  'TARGETING_TYPE_CONTENT_GENRE',
                  'TARGETING_TYPE_YOUTUBE_VIDEO',
                  'TARGETING_TYPE_YOUTUBE_CHANNEL',
                  'TARGETING_TYPE_SESSION_POSITION',
                ],
                type: 'string',
              },
            },
          }),
        assignedTargetingOptionId: z
          .string()
          .openapi({
            param: {
              description: 'Required. The ID of the assigned targeting option to delete.',
              in: 'path',
              name: 'assignedTargetingOptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: EmptySchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/display-video'],
        Oauth2c: ['https://www.googleapis.com/auth/display-video'],
      },
    ],
  })

export const postV2AdvertisersAdvertiserIdLineItemsLineItemIdDuplicateRoute = createRoute({
  method: 'post',
  path: '/v2/advertisers/{advertiserId}/lineItems/{lineItemId}:duplicate',
  tags: ['advertisers'],
  description: 'Duplicates a line item. Returns the ID of the created line item if successful.',
  operationId: 'displayvideo.advertisers.lineItems.duplicate',
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
    }),
    params: z.object({
      advertiserId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the advertiser this line item belongs to.',
            in: 'path',
            name: 'advertiserId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      lineItemId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the line item to duplicate.',
            in: 'path',
            name: 'lineItemId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DuplicateLineItemRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DuplicateLineItemResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const postV2AdvertisersAdvertiserIdLineItemsBulkEditAssignedTargetingOptionsRoute =
  createRoute({
    method: 'post',
    path: '/v2/advertisers/{advertiserId}/lineItems:bulkEditAssignedTargetingOptions',
    tags: ['advertisers'],
    description:
      'Bulk edits targeting options under multiple line items. The operation will delete the assigned targeting options provided in BulkEditAssignedTargetingOptionsRequest.delete_requests and then create the assigned targeting options provided in BulkEditAssignedTargetingOptionsRequest.create_requests. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkUpdate * UpdateLineItem * CreateLineItemAssignedTargetingOption * DeleteLineItemAssignedTargetingOption',
    operationId: 'displayvideo.advertisers.lineItems.bulkEditAssignedTargetingOptions',
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
      }),
      params: z.object({
        advertiserId: z
          .string()
          .openapi({
            param: {
              description: 'Required. The ID of the advertiser the line items belong to.',
              in: 'path',
              name: 'advertiserId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: BulkEditAssignedTargetingOptionsRequestSchema } },
      },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: BulkEditAssignedTargetingOptionsResponseSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/display-video'],
        Oauth2c: ['https://www.googleapis.com/auth/display-video'],
      },
    ],
  })

export const getV2AdvertisersAdvertiserIdLineItemsBulkListAssignedTargetingOptionsRoute =
  createRoute({
    method: 'get',
    path: '/v2/advertisers/{advertiserId}/lineItems:bulkListAssignedTargetingOptions',
    tags: ['advertisers'],
    description: 'Lists assigned targeting options for multiple line items across targeting types.',
    operationId: 'displayvideo.advertisers.lineItems.bulkListAssignedTargetingOptions',
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
                'Allows filtering by assigned targeting option properties. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the logical operator `OR` on the same field. * A restriction has the form of `{field} {operator} {value}`. * The operator must be `EQUALS (=)`. * Supported fields: - `targetingType` - `inheritance` Examples: * AssignedTargetingOptions of targeting type TARGETING_TYPE_PROXIMITY_LOCATION_LIST or TARGETING_TYPE_CHANNEL `targetingType="TARGETING_TYPE_PROXIMITY_LOCATION_LIST" OR targetingType="TARGETING_TYPE_CHANNEL"` * AssignedTargetingOptions with inheritance status of NOT_INHERITED or INHERITED_FROM_PARTNER `inheritance="NOT_INHERITED" OR inheritance="INHERITED_FROM_PARTNER"` The length of this field should be no more than 500 characters.',
              in: 'query',
              name: 'filter',
              schema: { type: 'string' },
              required: false,
            },
          }),
        lineItemIds: z
          .preprocess(
            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
            z.array(z.string()),
          )
          .exactOptional()
          .openapi({
            param: {
              description:
                'Required. The IDs of the line items to list assigned targeting options for.',
              explode: true,
              in: 'query',
              name: 'lineItemIds',
              schema: { items: { type: 'string' }, type: 'array' },
              style: 'form',
              required: false,
            },
          }),
        orderBy: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'Field by which to sort the list. Acceptable values are: * `lineItemId` (default) * `assignedTargetingOption.targetingType` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `targetingType desc`.',
              in: 'query',
              name: 'orderBy',
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
                'Requested page size. The size must be an integer between `1` and `5000`. If unspecified, the default is `5000`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.',
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
              description:
                'A token that lets the client fetch the next page of results. Typically, this is the value of next_page_token returned from the previous call to the `BulkListAssignedTargetingOptions` method. If not specified, the first page of results will be returned.',
              in: 'query',
              name: 'pageToken',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        advertiserId: z
          .string()
          .openapi({
            param: {
              description: 'Required. The ID of the advertiser the line items belongs to.',
              in: 'path',
              name: 'advertiserId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: BulkListAssignedTargetingOptionsResponseSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/display-video'],
        Oauth2c: ['https://www.googleapis.com/auth/display-video'],
      },
    ],
  })

export const postV2AdvertisersAdvertiserIdLineItemsBulkUpdateRoute = createRoute({
  method: 'post',
  path: '/v2/advertisers/{advertiserId}/lineItems:bulkUpdate',
  tags: ['advertisers'],
  description:
    'Updates multiple line items. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * UpdateLineItem * CreateLineItemAssignedTargetingOption * DeleteLineItemAssignedTargetingOption',
  operationId: 'displayvideo.advertisers.lineItems.bulkUpdate',
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
    }),
    params: z.object({
      advertiserId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the advertiser this line item belongs to.',
            in: 'path',
            name: 'advertiserId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BulkUpdateLineItemsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BulkUpdateLineItemsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const postV2AdvertisersAdvertiserIdLineItemsGenerateDefaultRoute = createRoute({
  method: 'post',
  path: '/v2/advertisers/{advertiserId}/lineItems:generateDefault',
  tags: ['advertisers'],
  description:
    "Creates a new line item with settings (including targeting) inherited from the insertion order and an `ENTITY_STATUS_DRAFT` entity_status. Returns the newly created line item if successful. There are default values based on the three fields: * The insertion order's insertion_order_type * The insertion order's automation_type * The given line_item_type",
  operationId: 'displayvideo.advertisers.lineItems.generateDefault',
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
    }),
    params: z.object({
      advertiserId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the advertiser this line item belongs to.',
            in: 'path',
            name: 'advertiserId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GenerateDefaultLineItemRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LineItemSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const getV2AdvertisersAdvertiserIdLocationListsRoute = createRoute({
  method: 'get',
  path: '/v2/advertisers/{advertiserId}/locationLists',
  tags: ['advertisers'],
  description: 'Lists location lists based on a given advertiser id.',
  operationId: 'displayvideo.advertisers.locationLists.list',
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
              'Allows filtering by location list fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * The operator must be `EQUALS (=)`. * Supported fields: - `locationType` Examples: * All regional location list: `locationType="TARGETING_LOCATION_TYPE_REGIONAL"` * All proximity location list: `locationType="TARGETING_LOCATION_TYPE_PROXIMITY"`',
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
              'Field by which to sort the list. Acceptable values are: * `locationListId` (default) * `displayName` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`.',
            in: 'query',
            name: 'orderBy',
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
              'Requested page size. Must be between `1` and `200`. Defaults to `100` if not set. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.',
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
            description:
              'A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListLocationLists` method. If not specified, the first page of results will be returned.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      advertiserId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The ID of the DV360 advertiser to which the fetched location lists belong.',
            in: 'path',
            name: 'advertiserId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListLocationListsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const postV2AdvertisersAdvertiserIdLocationListsRoute = createRoute({
  method: 'post',
  path: '/v2/advertisers/{advertiserId}/locationLists',
  tags: ['advertisers'],
  description:
    'Creates a new location list. Returns the newly created location list if successful.',
  operationId: 'displayvideo.advertisers.locationLists.create',
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
    }),
    params: z.object({
      advertiserId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The ID of the DV360 advertiser to which the location list belongs.',
            in: 'path',
            name: 'advertiserId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: LocationListSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LocationListSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const patchV2AdvertisersAdvertiserIdLocationListsLocationListIdRoute = createRoute({
  method: 'patch',
  path: '/v2/advertisers/{advertiserId}/locationLists/{locationListId}',
  tags: ['advertisers'],
  description: 'Updates a location list. Returns the updated location list if successful.',
  operationId: 'displayvideo.advertisers.locationLists.patch',
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
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. The mask to control which fields to update.',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      advertiserId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The ID of the DV360 advertiser to which the location lists belongs.',
            in: 'path',
            name: 'advertiserId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      locationListId: z
        .string()
        .openapi({
          param: {
            description: 'Output only. The unique ID of the location list. Assigned by the system.',
            in: 'path',
            name: 'locationListId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: LocationListSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LocationListSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const getV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocationsRoute =
  createRoute({
    method: 'get',
    path: '/v2/advertisers/{advertiserId}/locationLists/{locationListId}/assignedLocations',
    tags: ['advertisers'],
    description: 'Lists locations assigned to a location list.',
    operationId: 'displayvideo.advertisers.locationLists.assignedLocations.list',
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
                'Allows filtering by location list assignment fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the logical operator `OR`. * A restriction has the form of `{field} {operator} {value}`. * The operator must be `EQUALS (=)`. * Supported fields: - `assignedLocationId` The length of this field should be no more than 500 characters.',
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
                'Field by which to sort the list. Acceptable values are: * `assignedLocationId` (default) The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be added to the field name. Example: `assignedLocationId desc`.',
              in: 'query',
              name: 'orderBy',
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
                'Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.',
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
              description:
                'A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListAssignedLocations` method. If not specified, the first page of results will be returned.',
              in: 'query',
              name: 'pageToken',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        advertiserId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. The ID of the DV360 advertiser to which the location list belongs.',
              in: 'path',
              name: 'advertiserId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        locationListId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. The ID of the location list to which these assignments are assigned.',
              in: 'path',
              name: 'locationListId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ListAssignedLocationsResponseSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/display-video'],
        Oauth2c: ['https://www.googleapis.com/auth/display-video'],
      },
    ],
  })

export const postV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocationsRoute =
  createRoute({
    method: 'post',
    path: '/v2/advertisers/{advertiserId}/locationLists/{locationListId}/assignedLocations',
    tags: ['advertisers'],
    description: 'Creates an assignment between a location and a location list.',
    operationId: 'displayvideo.advertisers.locationLists.assignedLocations.create',
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
      }),
      params: z.object({
        advertiserId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. The ID of the DV360 advertiser to which the location list belongs.',
              in: 'path',
              name: 'advertiserId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        locationListId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. The ID of the location list for which the assignment will be created.',
              in: 'path',
              name: 'locationListId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: AssignedLocationSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: AssignedLocationSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/display-video'],
        Oauth2c: ['https://www.googleapis.com/auth/display-video'],
      },
    ],
  })

export const deleteV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocationsAssignedLocationIdRoute =
  createRoute({
    method: 'delete',
    path: '/v2/advertisers/{advertiserId}/locationLists/{locationListId}/assignedLocations/{assignedLocationId}',
    tags: ['advertisers'],
    description: 'Deletes the assignment between a location and a location list.',
    operationId: 'displayvideo.advertisers.locationLists.assignedLocations.delete',
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
      }),
      params: z.object({
        advertiserId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. The ID of the DV360 advertiser to which the location list belongs.',
              in: 'path',
              name: 'advertiserId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        locationListId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. The ID of the location list to which this assignment is assigned.',
              in: 'path',
              name: 'locationListId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        assignedLocationId: z
          .string()
          .openapi({
            param: {
              description: 'Required. The ID of the assigned location to delete.',
              in: 'path',
              name: 'assignedLocationId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: EmptySchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/display-video'],
        Oauth2c: ['https://www.googleapis.com/auth/display-video'],
      },
    ],
  })

export const postV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocationsBulkEditRoute =
  createRoute({
    method: 'post',
    path: '/v2/advertisers/{advertiserId}/locationLists/{locationListId}/assignedLocations:bulkEdit',
    tags: ['advertisers'],
    description:
      'Bulk edits multiple assignments between locations and a single location list. The operation will delete the assigned locations provided in BulkEditAssignedLocationsRequest.deleted_assigned_locations and then create the assigned locations provided in BulkEditAssignedLocationsRequest.created_assigned_locations.',
    operationId: 'displayvideo.advertisers.locationLists.assignedLocations.bulkEdit',
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
      }),
      params: z.object({
        advertiserId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. The ID of the DV360 advertiser to which the location list belongs.',
              in: 'path',
              name: 'advertiserId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        locationListId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. The ID of the location list to which these assignments are assigned.',
              in: 'path',
              name: 'locationListId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: BulkEditAssignedLocationsRequestSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: BulkEditAssignedLocationsResponseSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/display-video'],
        Oauth2c: ['https://www.googleapis.com/auth/display-video'],
      },
    ],
  })

export const getV2AdvertisersAdvertiserIdManualTriggersRoute = createRoute({
  method: 'get',
  path: '/v2/advertisers/{advertiserId}/manualTriggers',
  tags: ['advertisers'],
  description:
    'Lists manual triggers that are accessible to the current user for a given advertiser ID. The order is defined by the order_by parameter. A single advertiser_id is required.',
  operationId: 'displayvideo.advertisers.manualTriggers.list',
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
              'Allows filtering by manual trigger properties. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * The operator must be `EQUALS (=)`. * Supported fields: - `displayName` - `state` Examples: * All active manual triggers under an advertiser: `state="ACTIVE"` The length of this field should be no more than 500 characters.',
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
              'Field by which to sort the list. Acceptable values are: * `displayName` (default) * `state` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. For example, `displayName desc`.',
            in: 'query',
            name: 'orderBy',
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
              'Requested page size. Must be between `1` and `200`. If unspecified will default to `100`.',
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
            description:
              'A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListManualTriggers` method. If not specified, the first page of results will be returned.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      advertiserId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The ID of the advertiser that the fetched manual triggers belong to.',
            in: 'path',
            name: 'advertiserId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListManualTriggersResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const postV2AdvertisersAdvertiserIdManualTriggersRoute = createRoute({
  method: 'post',
  path: '/v2/advertisers/{advertiserId}/manualTriggers',
  tags: ['advertisers'],
  description:
    'Creates a new manual trigger. Returns the newly created manual trigger if successful.',
  operationId: 'displayvideo.advertisers.manualTriggers.create',
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
    }),
    params: z.object({
      advertiserId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Immutable. The unique ID of the advertiser that the manual trigger belongs to.',
            in: 'path',
            name: 'advertiserId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ManualTriggerSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ManualTriggerSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const getV2AdvertisersAdvertiserIdManualTriggersTriggerIdRoute = createRoute({
  method: 'get',
  path: '/v2/advertisers/{advertiserId}/manualTriggers/{triggerId}',
  tags: ['advertisers'],
  description: 'Gets a manual trigger.',
  operationId: 'displayvideo.advertisers.manualTriggers.get',
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
    }),
    params: z.object({
      advertiserId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the advertiser this manual trigger belongs to.',
            in: 'path',
            name: 'advertiserId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      triggerId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the manual trigger to fetch.',
            in: 'path',
            name: 'triggerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ManualTriggerSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const patchV2AdvertisersAdvertiserIdManualTriggersTriggerIdRoute = createRoute({
  method: 'patch',
  path: '/v2/advertisers/{advertiserId}/manualTriggers/{triggerId}',
  tags: ['advertisers'],
  description: 'Updates a manual trigger. Returns the updated manual trigger if successful.',
  operationId: 'displayvideo.advertisers.manualTriggers.patch',
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
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. The mask to control which fields to update.',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      advertiserId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Immutable. The unique ID of the advertiser that the manual trigger belongs to.',
            in: 'path',
            name: 'advertiserId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      triggerId: z
        .string()
        .openapi({
          param: {
            description: 'Output only. The unique ID of the manual trigger.',
            in: 'path',
            name: 'triggerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ManualTriggerSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ManualTriggerSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const postV2AdvertisersAdvertiserIdManualTriggersTriggerIdActivateRoute = createRoute({
  method: 'post',
  path: '/v2/advertisers/{advertiserId}/manualTriggers/{triggerId}:activate',
  tags: ['advertisers'],
  description:
    'Activates a manual trigger. Each activation of the manual trigger must be at least 5 minutes apart, otherwise an error will be returned.',
  operationId: 'displayvideo.advertisers.manualTriggers.activate',
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
    }),
    params: z.object({
      advertiserId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the advertiser that the manual trigger belongs.',
            in: 'path',
            name: 'advertiserId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      triggerId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the manual trigger to activate.',
            in: 'path',
            name: 'triggerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ActivateManualTriggerRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ManualTriggerSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const postV2AdvertisersAdvertiserIdManualTriggersTriggerIdDeactivateRoute = createRoute({
  method: 'post',
  path: '/v2/advertisers/{advertiserId}/manualTriggers/{triggerId}:deactivate',
  tags: ['advertisers'],
  description: 'Deactivates a manual trigger.',
  operationId: 'displayvideo.advertisers.manualTriggers.deactivate',
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
    }),
    params: z.object({
      advertiserId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the advertiser that the manual trigger belongs.',
            in: 'path',
            name: 'advertiserId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      triggerId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the manual trigger to deactivate.',
            in: 'path',
            name: 'triggerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeactivateManualTriggerRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ManualTriggerSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const getV2AdvertisersAdvertiserIdNegativeKeywordListsRoute = createRoute({
  method: 'get',
  path: '/v2/advertisers/{advertiserId}/negativeKeywordLists',
  tags: ['advertisers'],
  description: 'Lists negative keyword lists based on a given advertiser id.',
  operationId: 'displayvideo.advertisers.negativeKeywordLists.list',
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
              'Requested page size. Must be between `1` and `200`. Defaults to `100` if not set. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.',
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
            description:
              'A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListNegativeKeywordLists` method. If not specified, the first page of results will be returned.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      advertiserId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The ID of the DV360 advertiser to which the fetched negative keyword lists belong.',
            in: 'path',
            name: 'advertiserId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListNegativeKeywordListsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const postV2AdvertisersAdvertiserIdNegativeKeywordListsRoute = createRoute({
  method: 'post',
  path: '/v2/advertisers/{advertiserId}/negativeKeywordLists',
  tags: ['advertisers'],
  description:
    'Creates a new negative keyword list. Returns the newly created negative keyword list if successful.',
  operationId: 'displayvideo.advertisers.negativeKeywordLists.create',
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
    }),
    params: z.object({
      advertiserId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The ID of the DV360 advertiser to which the negative keyword list will belong.',
            in: 'path',
            name: 'advertiserId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: NegativeKeywordListSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: NegativeKeywordListSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const patchV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdRoute =
  createRoute({
    method: 'patch',
    path: '/v2/advertisers/{advertiserId}/negativeKeywordLists/{negativeKeywordListId}',
    tags: ['advertisers'],
    description:
      'Updates a negative keyword list. Returns the updated negative keyword list if successful.',
    operationId: 'displayvideo.advertisers.negativeKeywordLists.patch',
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
        updateMask: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description: 'Required. The mask to control which fields to update.',
              in: 'query',
              name: 'updateMask',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        advertiserId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. The ID of the DV360 advertiser to which the negative keyword list belongs.',
              in: 'path',
              name: 'advertiserId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        negativeKeywordListId: z
          .string()
          .openapi({
            param: {
              description:
                'Output only. The unique ID of the negative keyword list. Assigned by the system.',
              in: 'path',
              name: 'negativeKeywordListId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: NegativeKeywordListSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: NegativeKeywordListSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/display-video'],
        Oauth2c: ['https://www.googleapis.com/auth/display-video'],
      },
    ],
  })

export const getV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsRoute =
  createRoute({
    method: 'get',
    path: '/v2/advertisers/{advertiserId}/negativeKeywordLists/{negativeKeywordListId}/negativeKeywords',
    tags: ['advertisers'],
    description: 'Lists negative keywords in a negative keyword list.',
    operationId: 'displayvideo.advertisers.negativeKeywordLists.negativeKeywords.list',
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
                'Allows filtering by negative keyword fields. Supported syntax: * Filter expressions for negative keyword currently can only contain at most one * restriction. * A restriction has the form of `{field} {operator} {value}`. * The operator must be `CONTAINS (:)`. * Supported fields: - `keywordValue` Examples: * All negative keywords for which the keyword value contains "google": `keywordValue : "google"`',
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
                'Field by which to sort the list. Acceptable values are: * `keywordValue` (default) The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be added to the field name. Example: `keywordValue desc`.',
              in: 'query',
              name: 'orderBy',
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
                'Requested page size. Must be between `1` and `1000`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.',
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
              description:
                'A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListNegativeKeywords` method. If not specified, the first page of results will be returned.',
              in: 'query',
              name: 'pageToken',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        advertiserId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. The ID of the DV360 advertiser to which the parent negative keyword list belongs.',
              in: 'path',
              name: 'advertiserId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        negativeKeywordListId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. The ID of the parent negative keyword list to which the requested negative keywords belong.',
              in: 'path',
              name: 'negativeKeywordListId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ListNegativeKeywordsResponseSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/display-video'],
        Oauth2c: ['https://www.googleapis.com/auth/display-video'],
      },
    ],
  })

export const deleteV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsKeywordValueRoute =
  createRoute({
    method: 'delete',
    path: '/v2/advertisers/{advertiserId}/negativeKeywordLists/{negativeKeywordListId}/negativeKeywords/{keywordValue}',
    tags: ['advertisers'],
    description: 'Deletes a negative keyword from a negative keyword list.',
    operationId: 'displayvideo.advertisers.negativeKeywordLists.negativeKeywords.delete',
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
      }),
      params: z.object({
        advertiserId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. The ID of the DV360 advertiser to which the parent negative keyword list belongs.',
              in: 'path',
              name: 'advertiserId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        negativeKeywordListId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. The ID of the parent negative keyword list to which the negative keyword belongs.',
              in: 'path',
              name: 'negativeKeywordListId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        keywordValue: z
          .string()
          .openapi({
            param: {
              description: 'Required. The keyword value of the negative keyword to delete.',
              in: 'path',
              name: 'keywordValue',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: EmptySchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/display-video'],
        Oauth2c: ['https://www.googleapis.com/auth/display-video'],
      },
    ],
  })

export const postV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsBulkEditRoute =
  createRoute({
    method: 'post',
    path: '/v2/advertisers/{advertiserId}/negativeKeywordLists/{negativeKeywordListId}/negativeKeywords:bulkEdit',
    tags: ['advertisers'],
    description:
      'Bulk edits negative keywords in a single negative keyword list. The operation will delete the negative keywords provided in BulkEditNegativeKeywordsRequest.deleted_negative_keywords and then create the negative keywords provided in BulkEditNegativeKeywordsRequest.created_negative_keywords. This operation is guaranteed to be atomic and will never result in a partial success or partial failure.',
    operationId: 'displayvideo.advertisers.negativeKeywordLists.negativeKeywords.bulkEdit',
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
      }),
      params: z.object({
        advertiserId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. The ID of the DV360 advertiser to which the parent negative keyword list belongs.',
              in: 'path',
              name: 'advertiserId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        negativeKeywordListId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. The ID of the parent negative keyword list to which the negative keywords belong.',
              in: 'path',
              name: 'negativeKeywordListId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: BulkEditNegativeKeywordsRequestSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: BulkEditNegativeKeywordsResponseSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/display-video'],
        Oauth2c: ['https://www.googleapis.com/auth/display-video'],
      },
    ],
  })

export const postV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsReplaceRoute =
  createRoute({
    method: 'post',
    path: '/v2/advertisers/{advertiserId}/negativeKeywordLists/{negativeKeywordListId}/negativeKeywords:replace',
    tags: ['advertisers'],
    description:
      'Replaces all negative keywords in a single negative keyword list. The operation will replace the keywords in a negative keyword list with keywords provided in ReplaceNegativeKeywordsRequest.new_negative_keywords.',
    operationId: 'displayvideo.advertisers.negativeKeywordLists.negativeKeywords.replace',
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
      }),
      params: z.object({
        advertiserId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. The ID of the DV360 advertiser to which the parent negative keyword list belongs.',
              in: 'path',
              name: 'advertiserId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        negativeKeywordListId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. The ID of the parent negative keyword list to which the negative keywords belong.',
              in: 'path',
              name: 'negativeKeywordListId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: ReplaceNegativeKeywordsRequestSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ReplaceNegativeKeywordsResponseSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/display-video'],
        Oauth2c: ['https://www.googleapis.com/auth/display-video'],
      },
    ],
  })

export const getV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsRoute =
  createRoute({
    method: 'get',
    path: '/v2/advertisers/{advertiserId}/targetingTypes/{targetingType}/assignedTargetingOptions',
    tags: ['advertisers'],
    description: 'Lists the targeting options assigned to an advertiser.',
    operationId: 'displayvideo.advertisers.targetingTypes.assignedTargetingOptions.list',
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
                'Allows filtering by assigned targeting option properties. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the logical operator `OR`. * A restriction has the form of `{field} {operator} {value}`. * The operator must be `EQUALS (=)`. * Supported fields: - `assignedTargetingOptionId` Examples: * AssignedTargetingOption with ID 123456 `assignedTargetingOptionId="123456"` The length of this field should be no more than 500 characters.',
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
                'Field by which to sort the list. Acceptable values are: * `assignedTargetingOptionId` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `assignedTargetingOptionId desc`.',
              in: 'query',
              name: 'orderBy',
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
                'Requested page size. Must be between `1` and `5000`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.',
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
              description:
                'A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListAdvertiserAssignedTargetingOptions` method. If not specified, the first page of results will be returned.',
              in: 'query',
              name: 'pageToken',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        advertiserId: z
          .string()
          .openapi({
            param: {
              description: 'Required. The ID of the advertiser.',
              in: 'path',
              name: 'advertiserId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        targetingType: z
          .enum([
            'TARGETING_TYPE_UNSPECIFIED',
            'TARGETING_TYPE_CHANNEL',
            'TARGETING_TYPE_APP_CATEGORY',
            'TARGETING_TYPE_APP',
            'TARGETING_TYPE_URL',
            'TARGETING_TYPE_DAY_AND_TIME',
            'TARGETING_TYPE_AGE_RANGE',
            'TARGETING_TYPE_REGIONAL_LOCATION_LIST',
            'TARGETING_TYPE_PROXIMITY_LOCATION_LIST',
            'TARGETING_TYPE_GENDER',
            'TARGETING_TYPE_VIDEO_PLAYER_SIZE',
            'TARGETING_TYPE_USER_REWARDED_CONTENT',
            'TARGETING_TYPE_PARENTAL_STATUS',
            'TARGETING_TYPE_CONTENT_INSTREAM_POSITION',
            'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION',
            'TARGETING_TYPE_DEVICE_TYPE',
            'TARGETING_TYPE_AUDIENCE_GROUP',
            'TARGETING_TYPE_BROWSER',
            'TARGETING_TYPE_HOUSEHOLD_INCOME',
            'TARGETING_TYPE_ON_SCREEN_POSITION',
            'TARGETING_TYPE_THIRD_PARTY_VERIFIER',
            'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION',
            'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION',
            'TARGETING_TYPE_ENVIRONMENT',
            'TARGETING_TYPE_CARRIER_AND_ISP',
            'TARGETING_TYPE_OPERATING_SYSTEM',
            'TARGETING_TYPE_DEVICE_MAKE_MODEL',
            'TARGETING_TYPE_KEYWORD',
            'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST',
            'TARGETING_TYPE_VIEWABILITY',
            'TARGETING_TYPE_CATEGORY',
            'TARGETING_TYPE_INVENTORY_SOURCE',
            'TARGETING_TYPE_LANGUAGE',
            'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS',
            'TARGETING_TYPE_GEO_REGION',
            'TARGETING_TYPE_INVENTORY_SOURCE_GROUP',
            'TARGETING_TYPE_EXCHANGE',
            'TARGETING_TYPE_SUB_EXCHANGE',
            'TARGETING_TYPE_POI',
            'TARGETING_TYPE_BUSINESS_CHAIN',
            'TARGETING_TYPE_CONTENT_DURATION',
            'TARGETING_TYPE_CONTENT_STREAM_TYPE',
            'TARGETING_TYPE_NATIVE_CONTENT_POSITION',
            'TARGETING_TYPE_OMID',
            'TARGETING_TYPE_AUDIO_CONTENT_TYPE',
            'TARGETING_TYPE_CONTENT_GENRE',
            'TARGETING_TYPE_YOUTUBE_VIDEO',
            'TARGETING_TYPE_YOUTUBE_CHANNEL',
            'TARGETING_TYPE_SESSION_POSITION',
          ])
          .openapi({
            param: {
              description:
                'Required. Identifies the type of assigned targeting options to list. Supported targeting types: * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_YOUTUBE_VIDEO` * `TARGETING_TYPE_YOUTUBE_CHANNEL`',
              in: 'path',
              name: 'targetingType',
              required: true,
              schema: {
                enum: [
                  'TARGETING_TYPE_UNSPECIFIED',
                  'TARGETING_TYPE_CHANNEL',
                  'TARGETING_TYPE_APP_CATEGORY',
                  'TARGETING_TYPE_APP',
                  'TARGETING_TYPE_URL',
                  'TARGETING_TYPE_DAY_AND_TIME',
                  'TARGETING_TYPE_AGE_RANGE',
                  'TARGETING_TYPE_REGIONAL_LOCATION_LIST',
                  'TARGETING_TYPE_PROXIMITY_LOCATION_LIST',
                  'TARGETING_TYPE_GENDER',
                  'TARGETING_TYPE_VIDEO_PLAYER_SIZE',
                  'TARGETING_TYPE_USER_REWARDED_CONTENT',
                  'TARGETING_TYPE_PARENTAL_STATUS',
                  'TARGETING_TYPE_CONTENT_INSTREAM_POSITION',
                  'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION',
                  'TARGETING_TYPE_DEVICE_TYPE',
                  'TARGETING_TYPE_AUDIENCE_GROUP',
                  'TARGETING_TYPE_BROWSER',
                  'TARGETING_TYPE_HOUSEHOLD_INCOME',
                  'TARGETING_TYPE_ON_SCREEN_POSITION',
                  'TARGETING_TYPE_THIRD_PARTY_VERIFIER',
                  'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION',
                  'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION',
                  'TARGETING_TYPE_ENVIRONMENT',
                  'TARGETING_TYPE_CARRIER_AND_ISP',
                  'TARGETING_TYPE_OPERATING_SYSTEM',
                  'TARGETING_TYPE_DEVICE_MAKE_MODEL',
                  'TARGETING_TYPE_KEYWORD',
                  'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST',
                  'TARGETING_TYPE_VIEWABILITY',
                  'TARGETING_TYPE_CATEGORY',
                  'TARGETING_TYPE_INVENTORY_SOURCE',
                  'TARGETING_TYPE_LANGUAGE',
                  'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS',
                  'TARGETING_TYPE_GEO_REGION',
                  'TARGETING_TYPE_INVENTORY_SOURCE_GROUP',
                  'TARGETING_TYPE_EXCHANGE',
                  'TARGETING_TYPE_SUB_EXCHANGE',
                  'TARGETING_TYPE_POI',
                  'TARGETING_TYPE_BUSINESS_CHAIN',
                  'TARGETING_TYPE_CONTENT_DURATION',
                  'TARGETING_TYPE_CONTENT_STREAM_TYPE',
                  'TARGETING_TYPE_NATIVE_CONTENT_POSITION',
                  'TARGETING_TYPE_OMID',
                  'TARGETING_TYPE_AUDIO_CONTENT_TYPE',
                  'TARGETING_TYPE_CONTENT_GENRE',
                  'TARGETING_TYPE_YOUTUBE_VIDEO',
                  'TARGETING_TYPE_YOUTUBE_CHANNEL',
                  'TARGETING_TYPE_SESSION_POSITION',
                ],
                type: 'string',
              },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': { schema: ListAdvertiserAssignedTargetingOptionsResponseSchema },
        },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/display-video'],
        Oauth2c: ['https://www.googleapis.com/auth/display-video'],
      },
    ],
  })

export const postV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsRoute =
  createRoute({
    method: 'post',
    path: '/v2/advertisers/{advertiserId}/targetingTypes/{targetingType}/assignedTargetingOptions',
    tags: ['advertisers'],
    description:
      'Assigns a targeting option to an advertiser. Returns the assigned targeting option if successful.',
    operationId: 'displayvideo.advertisers.targetingTypes.assignedTargetingOptions.create',
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
      }),
      params: z.object({
        advertiserId: z
          .string()
          .openapi({
            param: {
              description: 'Required. The ID of the advertiser.',
              in: 'path',
              name: 'advertiserId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        targetingType: z
          .enum([
            'TARGETING_TYPE_UNSPECIFIED',
            'TARGETING_TYPE_CHANNEL',
            'TARGETING_TYPE_APP_CATEGORY',
            'TARGETING_TYPE_APP',
            'TARGETING_TYPE_URL',
            'TARGETING_TYPE_DAY_AND_TIME',
            'TARGETING_TYPE_AGE_RANGE',
            'TARGETING_TYPE_REGIONAL_LOCATION_LIST',
            'TARGETING_TYPE_PROXIMITY_LOCATION_LIST',
            'TARGETING_TYPE_GENDER',
            'TARGETING_TYPE_VIDEO_PLAYER_SIZE',
            'TARGETING_TYPE_USER_REWARDED_CONTENT',
            'TARGETING_TYPE_PARENTAL_STATUS',
            'TARGETING_TYPE_CONTENT_INSTREAM_POSITION',
            'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION',
            'TARGETING_TYPE_DEVICE_TYPE',
            'TARGETING_TYPE_AUDIENCE_GROUP',
            'TARGETING_TYPE_BROWSER',
            'TARGETING_TYPE_HOUSEHOLD_INCOME',
            'TARGETING_TYPE_ON_SCREEN_POSITION',
            'TARGETING_TYPE_THIRD_PARTY_VERIFIER',
            'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION',
            'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION',
            'TARGETING_TYPE_ENVIRONMENT',
            'TARGETING_TYPE_CARRIER_AND_ISP',
            'TARGETING_TYPE_OPERATING_SYSTEM',
            'TARGETING_TYPE_DEVICE_MAKE_MODEL',
            'TARGETING_TYPE_KEYWORD',
            'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST',
            'TARGETING_TYPE_VIEWABILITY',
            'TARGETING_TYPE_CATEGORY',
            'TARGETING_TYPE_INVENTORY_SOURCE',
            'TARGETING_TYPE_LANGUAGE',
            'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS',
            'TARGETING_TYPE_GEO_REGION',
            'TARGETING_TYPE_INVENTORY_SOURCE_GROUP',
            'TARGETING_TYPE_EXCHANGE',
            'TARGETING_TYPE_SUB_EXCHANGE',
            'TARGETING_TYPE_POI',
            'TARGETING_TYPE_BUSINESS_CHAIN',
            'TARGETING_TYPE_CONTENT_DURATION',
            'TARGETING_TYPE_CONTENT_STREAM_TYPE',
            'TARGETING_TYPE_NATIVE_CONTENT_POSITION',
            'TARGETING_TYPE_OMID',
            'TARGETING_TYPE_AUDIO_CONTENT_TYPE',
            'TARGETING_TYPE_CONTENT_GENRE',
            'TARGETING_TYPE_YOUTUBE_VIDEO',
            'TARGETING_TYPE_YOUTUBE_CHANNEL',
            'TARGETING_TYPE_SESSION_POSITION',
          ])
          .openapi({
            param: {
              description:
                'Required. Identifies the type of this assigned targeting option. Supported targeting types: * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION`',
              in: 'path',
              name: 'targetingType',
              required: true,
              schema: {
                enum: [
                  'TARGETING_TYPE_UNSPECIFIED',
                  'TARGETING_TYPE_CHANNEL',
                  'TARGETING_TYPE_APP_CATEGORY',
                  'TARGETING_TYPE_APP',
                  'TARGETING_TYPE_URL',
                  'TARGETING_TYPE_DAY_AND_TIME',
                  'TARGETING_TYPE_AGE_RANGE',
                  'TARGETING_TYPE_REGIONAL_LOCATION_LIST',
                  'TARGETING_TYPE_PROXIMITY_LOCATION_LIST',
                  'TARGETING_TYPE_GENDER',
                  'TARGETING_TYPE_VIDEO_PLAYER_SIZE',
                  'TARGETING_TYPE_USER_REWARDED_CONTENT',
                  'TARGETING_TYPE_PARENTAL_STATUS',
                  'TARGETING_TYPE_CONTENT_INSTREAM_POSITION',
                  'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION',
                  'TARGETING_TYPE_DEVICE_TYPE',
                  'TARGETING_TYPE_AUDIENCE_GROUP',
                  'TARGETING_TYPE_BROWSER',
                  'TARGETING_TYPE_HOUSEHOLD_INCOME',
                  'TARGETING_TYPE_ON_SCREEN_POSITION',
                  'TARGETING_TYPE_THIRD_PARTY_VERIFIER',
                  'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION',
                  'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION',
                  'TARGETING_TYPE_ENVIRONMENT',
                  'TARGETING_TYPE_CARRIER_AND_ISP',
                  'TARGETING_TYPE_OPERATING_SYSTEM',
                  'TARGETING_TYPE_DEVICE_MAKE_MODEL',
                  'TARGETING_TYPE_KEYWORD',
                  'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST',
                  'TARGETING_TYPE_VIEWABILITY',
                  'TARGETING_TYPE_CATEGORY',
                  'TARGETING_TYPE_INVENTORY_SOURCE',
                  'TARGETING_TYPE_LANGUAGE',
                  'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS',
                  'TARGETING_TYPE_GEO_REGION',
                  'TARGETING_TYPE_INVENTORY_SOURCE_GROUP',
                  'TARGETING_TYPE_EXCHANGE',
                  'TARGETING_TYPE_SUB_EXCHANGE',
                  'TARGETING_TYPE_POI',
                  'TARGETING_TYPE_BUSINESS_CHAIN',
                  'TARGETING_TYPE_CONTENT_DURATION',
                  'TARGETING_TYPE_CONTENT_STREAM_TYPE',
                  'TARGETING_TYPE_NATIVE_CONTENT_POSITION',
                  'TARGETING_TYPE_OMID',
                  'TARGETING_TYPE_AUDIO_CONTENT_TYPE',
                  'TARGETING_TYPE_CONTENT_GENRE',
                  'TARGETING_TYPE_YOUTUBE_VIDEO',
                  'TARGETING_TYPE_YOUTUBE_CHANNEL',
                  'TARGETING_TYPE_SESSION_POSITION',
                ],
                type: 'string',
              },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: AssignedTargetingOptionSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: AssignedTargetingOptionSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/display-video'],
        Oauth2c: ['https://www.googleapis.com/auth/display-video'],
      },
    ],
  })

export const getV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdRoute =
  createRoute({
    method: 'get',
    path: '/v2/advertisers/{advertiserId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId}',
    tags: ['advertisers'],
    description: 'Gets a single targeting option assigned to an advertiser.',
    operationId: 'displayvideo.advertisers.targetingTypes.assignedTargetingOptions.get',
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
      }),
      params: z.object({
        advertiserId: z
          .string()
          .openapi({
            param: {
              description: 'Required. The ID of the advertiser.',
              in: 'path',
              name: 'advertiserId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        targetingType: z
          .enum([
            'TARGETING_TYPE_UNSPECIFIED',
            'TARGETING_TYPE_CHANNEL',
            'TARGETING_TYPE_APP_CATEGORY',
            'TARGETING_TYPE_APP',
            'TARGETING_TYPE_URL',
            'TARGETING_TYPE_DAY_AND_TIME',
            'TARGETING_TYPE_AGE_RANGE',
            'TARGETING_TYPE_REGIONAL_LOCATION_LIST',
            'TARGETING_TYPE_PROXIMITY_LOCATION_LIST',
            'TARGETING_TYPE_GENDER',
            'TARGETING_TYPE_VIDEO_PLAYER_SIZE',
            'TARGETING_TYPE_USER_REWARDED_CONTENT',
            'TARGETING_TYPE_PARENTAL_STATUS',
            'TARGETING_TYPE_CONTENT_INSTREAM_POSITION',
            'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION',
            'TARGETING_TYPE_DEVICE_TYPE',
            'TARGETING_TYPE_AUDIENCE_GROUP',
            'TARGETING_TYPE_BROWSER',
            'TARGETING_TYPE_HOUSEHOLD_INCOME',
            'TARGETING_TYPE_ON_SCREEN_POSITION',
            'TARGETING_TYPE_THIRD_PARTY_VERIFIER',
            'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION',
            'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION',
            'TARGETING_TYPE_ENVIRONMENT',
            'TARGETING_TYPE_CARRIER_AND_ISP',
            'TARGETING_TYPE_OPERATING_SYSTEM',
            'TARGETING_TYPE_DEVICE_MAKE_MODEL',
            'TARGETING_TYPE_KEYWORD',
            'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST',
            'TARGETING_TYPE_VIEWABILITY',
            'TARGETING_TYPE_CATEGORY',
            'TARGETING_TYPE_INVENTORY_SOURCE',
            'TARGETING_TYPE_LANGUAGE',
            'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS',
            'TARGETING_TYPE_GEO_REGION',
            'TARGETING_TYPE_INVENTORY_SOURCE_GROUP',
            'TARGETING_TYPE_EXCHANGE',
            'TARGETING_TYPE_SUB_EXCHANGE',
            'TARGETING_TYPE_POI',
            'TARGETING_TYPE_BUSINESS_CHAIN',
            'TARGETING_TYPE_CONTENT_DURATION',
            'TARGETING_TYPE_CONTENT_STREAM_TYPE',
            'TARGETING_TYPE_NATIVE_CONTENT_POSITION',
            'TARGETING_TYPE_OMID',
            'TARGETING_TYPE_AUDIO_CONTENT_TYPE',
            'TARGETING_TYPE_CONTENT_GENRE',
            'TARGETING_TYPE_YOUTUBE_VIDEO',
            'TARGETING_TYPE_YOUTUBE_CHANNEL',
            'TARGETING_TYPE_SESSION_POSITION',
          ])
          .openapi({
            param: {
              description:
                'Required. Identifies the type of this assigned targeting option. Supported targeting types: * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_YOUTUBE_VIDEO` * `TARGETING_TYPE_YOUTUBE_CHANNEL`',
              in: 'path',
              name: 'targetingType',
              required: true,
              schema: {
                enum: [
                  'TARGETING_TYPE_UNSPECIFIED',
                  'TARGETING_TYPE_CHANNEL',
                  'TARGETING_TYPE_APP_CATEGORY',
                  'TARGETING_TYPE_APP',
                  'TARGETING_TYPE_URL',
                  'TARGETING_TYPE_DAY_AND_TIME',
                  'TARGETING_TYPE_AGE_RANGE',
                  'TARGETING_TYPE_REGIONAL_LOCATION_LIST',
                  'TARGETING_TYPE_PROXIMITY_LOCATION_LIST',
                  'TARGETING_TYPE_GENDER',
                  'TARGETING_TYPE_VIDEO_PLAYER_SIZE',
                  'TARGETING_TYPE_USER_REWARDED_CONTENT',
                  'TARGETING_TYPE_PARENTAL_STATUS',
                  'TARGETING_TYPE_CONTENT_INSTREAM_POSITION',
                  'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION',
                  'TARGETING_TYPE_DEVICE_TYPE',
                  'TARGETING_TYPE_AUDIENCE_GROUP',
                  'TARGETING_TYPE_BROWSER',
                  'TARGETING_TYPE_HOUSEHOLD_INCOME',
                  'TARGETING_TYPE_ON_SCREEN_POSITION',
                  'TARGETING_TYPE_THIRD_PARTY_VERIFIER',
                  'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION',
                  'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION',
                  'TARGETING_TYPE_ENVIRONMENT',
                  'TARGETING_TYPE_CARRIER_AND_ISP',
                  'TARGETING_TYPE_OPERATING_SYSTEM',
                  'TARGETING_TYPE_DEVICE_MAKE_MODEL',
                  'TARGETING_TYPE_KEYWORD',
                  'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST',
                  'TARGETING_TYPE_VIEWABILITY',
                  'TARGETING_TYPE_CATEGORY',
                  'TARGETING_TYPE_INVENTORY_SOURCE',
                  'TARGETING_TYPE_LANGUAGE',
                  'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS',
                  'TARGETING_TYPE_GEO_REGION',
                  'TARGETING_TYPE_INVENTORY_SOURCE_GROUP',
                  'TARGETING_TYPE_EXCHANGE',
                  'TARGETING_TYPE_SUB_EXCHANGE',
                  'TARGETING_TYPE_POI',
                  'TARGETING_TYPE_BUSINESS_CHAIN',
                  'TARGETING_TYPE_CONTENT_DURATION',
                  'TARGETING_TYPE_CONTENT_STREAM_TYPE',
                  'TARGETING_TYPE_NATIVE_CONTENT_POSITION',
                  'TARGETING_TYPE_OMID',
                  'TARGETING_TYPE_AUDIO_CONTENT_TYPE',
                  'TARGETING_TYPE_CONTENT_GENRE',
                  'TARGETING_TYPE_YOUTUBE_VIDEO',
                  'TARGETING_TYPE_YOUTUBE_CHANNEL',
                  'TARGETING_TYPE_SESSION_POSITION',
                ],
                type: 'string',
              },
            },
          }),
        assignedTargetingOptionId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. An identifier unique to the targeting type in this advertiser that identifies the assigned targeting option being requested.',
              in: 'path',
              name: 'assignedTargetingOptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: AssignedTargetingOptionSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/display-video'],
        Oauth2c: ['https://www.googleapis.com/auth/display-video'],
      },
    ],
  })

export const deleteV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdRoute =
  createRoute({
    method: 'delete',
    path: '/v2/advertisers/{advertiserId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId}',
    tags: ['advertisers'],
    description: 'Deletes an assigned targeting option from an advertiser.',
    operationId: 'displayvideo.advertisers.targetingTypes.assignedTargetingOptions.delete',
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
      }),
      params: z.object({
        advertiserId: z
          .string()
          .openapi({
            param: {
              description: 'Required. The ID of the advertiser.',
              in: 'path',
              name: 'advertiserId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        targetingType: z
          .enum([
            'TARGETING_TYPE_UNSPECIFIED',
            'TARGETING_TYPE_CHANNEL',
            'TARGETING_TYPE_APP_CATEGORY',
            'TARGETING_TYPE_APP',
            'TARGETING_TYPE_URL',
            'TARGETING_TYPE_DAY_AND_TIME',
            'TARGETING_TYPE_AGE_RANGE',
            'TARGETING_TYPE_REGIONAL_LOCATION_LIST',
            'TARGETING_TYPE_PROXIMITY_LOCATION_LIST',
            'TARGETING_TYPE_GENDER',
            'TARGETING_TYPE_VIDEO_PLAYER_SIZE',
            'TARGETING_TYPE_USER_REWARDED_CONTENT',
            'TARGETING_TYPE_PARENTAL_STATUS',
            'TARGETING_TYPE_CONTENT_INSTREAM_POSITION',
            'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION',
            'TARGETING_TYPE_DEVICE_TYPE',
            'TARGETING_TYPE_AUDIENCE_GROUP',
            'TARGETING_TYPE_BROWSER',
            'TARGETING_TYPE_HOUSEHOLD_INCOME',
            'TARGETING_TYPE_ON_SCREEN_POSITION',
            'TARGETING_TYPE_THIRD_PARTY_VERIFIER',
            'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION',
            'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION',
            'TARGETING_TYPE_ENVIRONMENT',
            'TARGETING_TYPE_CARRIER_AND_ISP',
            'TARGETING_TYPE_OPERATING_SYSTEM',
            'TARGETING_TYPE_DEVICE_MAKE_MODEL',
            'TARGETING_TYPE_KEYWORD',
            'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST',
            'TARGETING_TYPE_VIEWABILITY',
            'TARGETING_TYPE_CATEGORY',
            'TARGETING_TYPE_INVENTORY_SOURCE',
            'TARGETING_TYPE_LANGUAGE',
            'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS',
            'TARGETING_TYPE_GEO_REGION',
            'TARGETING_TYPE_INVENTORY_SOURCE_GROUP',
            'TARGETING_TYPE_EXCHANGE',
            'TARGETING_TYPE_SUB_EXCHANGE',
            'TARGETING_TYPE_POI',
            'TARGETING_TYPE_BUSINESS_CHAIN',
            'TARGETING_TYPE_CONTENT_DURATION',
            'TARGETING_TYPE_CONTENT_STREAM_TYPE',
            'TARGETING_TYPE_NATIVE_CONTENT_POSITION',
            'TARGETING_TYPE_OMID',
            'TARGETING_TYPE_AUDIO_CONTENT_TYPE',
            'TARGETING_TYPE_CONTENT_GENRE',
            'TARGETING_TYPE_YOUTUBE_VIDEO',
            'TARGETING_TYPE_YOUTUBE_CHANNEL',
            'TARGETING_TYPE_SESSION_POSITION',
          ])
          .openapi({
            param: {
              description:
                'Required. Identifies the type of this assigned targeting option. Supported targeting types: * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION`',
              in: 'path',
              name: 'targetingType',
              required: true,
              schema: {
                enum: [
                  'TARGETING_TYPE_UNSPECIFIED',
                  'TARGETING_TYPE_CHANNEL',
                  'TARGETING_TYPE_APP_CATEGORY',
                  'TARGETING_TYPE_APP',
                  'TARGETING_TYPE_URL',
                  'TARGETING_TYPE_DAY_AND_TIME',
                  'TARGETING_TYPE_AGE_RANGE',
                  'TARGETING_TYPE_REGIONAL_LOCATION_LIST',
                  'TARGETING_TYPE_PROXIMITY_LOCATION_LIST',
                  'TARGETING_TYPE_GENDER',
                  'TARGETING_TYPE_VIDEO_PLAYER_SIZE',
                  'TARGETING_TYPE_USER_REWARDED_CONTENT',
                  'TARGETING_TYPE_PARENTAL_STATUS',
                  'TARGETING_TYPE_CONTENT_INSTREAM_POSITION',
                  'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION',
                  'TARGETING_TYPE_DEVICE_TYPE',
                  'TARGETING_TYPE_AUDIENCE_GROUP',
                  'TARGETING_TYPE_BROWSER',
                  'TARGETING_TYPE_HOUSEHOLD_INCOME',
                  'TARGETING_TYPE_ON_SCREEN_POSITION',
                  'TARGETING_TYPE_THIRD_PARTY_VERIFIER',
                  'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION',
                  'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION',
                  'TARGETING_TYPE_ENVIRONMENT',
                  'TARGETING_TYPE_CARRIER_AND_ISP',
                  'TARGETING_TYPE_OPERATING_SYSTEM',
                  'TARGETING_TYPE_DEVICE_MAKE_MODEL',
                  'TARGETING_TYPE_KEYWORD',
                  'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST',
                  'TARGETING_TYPE_VIEWABILITY',
                  'TARGETING_TYPE_CATEGORY',
                  'TARGETING_TYPE_INVENTORY_SOURCE',
                  'TARGETING_TYPE_LANGUAGE',
                  'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS',
                  'TARGETING_TYPE_GEO_REGION',
                  'TARGETING_TYPE_INVENTORY_SOURCE_GROUP',
                  'TARGETING_TYPE_EXCHANGE',
                  'TARGETING_TYPE_SUB_EXCHANGE',
                  'TARGETING_TYPE_POI',
                  'TARGETING_TYPE_BUSINESS_CHAIN',
                  'TARGETING_TYPE_CONTENT_DURATION',
                  'TARGETING_TYPE_CONTENT_STREAM_TYPE',
                  'TARGETING_TYPE_NATIVE_CONTENT_POSITION',
                  'TARGETING_TYPE_OMID',
                  'TARGETING_TYPE_AUDIO_CONTENT_TYPE',
                  'TARGETING_TYPE_CONTENT_GENRE',
                  'TARGETING_TYPE_YOUTUBE_VIDEO',
                  'TARGETING_TYPE_YOUTUBE_CHANNEL',
                  'TARGETING_TYPE_SESSION_POSITION',
                ],
                type: 'string',
              },
            },
          }),
        assignedTargetingOptionId: z
          .string()
          .openapi({
            param: {
              description: 'Required. The ID of the assigned targeting option to delete.',
              in: 'path',
              name: 'assignedTargetingOptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: EmptySchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/display-video'],
        Oauth2c: ['https://www.googleapis.com/auth/display-video'],
      },
    ],
  })

export const getV2AdvertisersAdvertiserIdYoutubeAdGroupAdsRoute = createRoute({
  method: 'get',
  path: '/v2/advertisers/{advertiserId}/youtubeAdGroupAds',
  tags: ['advertisers'],
  description: 'Lists YouTube ad group ads.',
  operationId: 'displayvideo.advertisers.youtubeAdGroupAds.list',
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
              'Allows filtering by custom YouTube ad group ad fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` and `OR`. Only the restrictions for * the same field can be combined by `OR`. A sequence of restrictions * implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * The operator must be `EQUALS (=)`. * Supported properties: - `adGroupId` - `displayName` - `entityStatus` - `adGroupAdId` Examples: * All ad group ads under an ad group: `adGroupId="1234"` and its * entityStatus is `ENTITY_STATUS_ACTIVE` or `ENTITY_STATUS_PAUSED`: `(entityStatus="ENTITY_STATUS_ACTIVE" OR entityStatus="ENTITY_STATUS_PAUSED") AND adGroupId="12345"` The length of this field should be no more than 500 characters.',
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
              'Field by which to sort the list. Acceptable values are: * `displayName` (default) * `entityStatus` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`.',
            in: 'query',
            name: 'orderBy',
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
              'Requested page size. Must be between `1` and `100`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.',
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
            description:
              'A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListYoutubeAdGroupAds` method. If not specified, the first page of results will be returned.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      advertiserId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the advertiser the ad groups belongs to.',
            in: 'path',
            name: 'advertiserId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListYoutubeAdGroupAdsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const getV2AdvertisersAdvertiserIdYoutubeAdGroupAdsYoutubeAdGroupAdIdRoute = createRoute({
  method: 'get',
  path: '/v2/advertisers/{advertiserId}/youtubeAdGroupAds/{youtubeAdGroupAdId}',
  tags: ['advertisers'],
  description: 'Gets a YouTube ad group ad.',
  operationId: 'displayvideo.advertisers.youtubeAdGroupAds.get',
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
    }),
    params: z.object({
      advertiserId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the advertiser this ad group ad belongs to.',
            in: 'path',
            name: 'advertiserId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      youtubeAdGroupAdId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the ad group ad to fetch.',
            in: 'path',
            name: 'youtubeAdGroupAdId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: YoutubeAdGroupAdSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const getV2AdvertisersAdvertiserIdYoutubeAdGroupsRoute = createRoute({
  method: 'get',
  path: '/v2/advertisers/{advertiserId}/youtubeAdGroups',
  tags: ['advertisers'],
  description: 'Lists YouTube ad groups.',
  operationId: 'displayvideo.advertisers.youtubeAdGroups.list',
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
              'Allows filtering by custom YouTube ad group fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` and `OR`. Only the restrictions for * the same field can be combined by `OR`. A sequence of restrictions * implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * The operator must be `EQUALS (=)`. * Supported properties: - `adGroupId` - `displayName` - `entityStatus` - `lineItemId` - `adGroupFormat` Examples: * All ad groups under an line item: `lineItemId="1234"` * All `ENTITY_STATUS_ACTIVE` or `ENTITY_STATUS_PAUSED` and `YOUTUBE_AND_PARTNERS_AD_GROUP_FORMAT_IN_STREAM` ad groups under an advertiser: `(entityStatus="ENTITY_STATUS_ACTIVE" OR entityStatus="ENTITY_STATUS_PAUSED") AND adGroupFormat="YOUTUBE_AND_PARTNERS_AD_GROUP_FORMAT_IN_STREAM"` The length of this field should be no more than 500 characters.',
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
              'Field by which to sort the list. Acceptable values are: * `displayName` (default) * `entityStatus` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`.',
            in: 'query',
            name: 'orderBy',
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
              'Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.',
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
            description:
              'A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListYoutubeAdGroups` method. If not specified, the first page of results will be returned.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      advertiserId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the advertiser the ad groups belongs to.',
            in: 'path',
            name: 'advertiserId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListYoutubeAdGroupsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const getV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupIdRoute = createRoute({
  method: 'get',
  path: '/v2/advertisers/{advertiserId}/youtubeAdGroups/{youtubeAdGroupId}',
  tags: ['advertisers'],
  description: 'Gets a YouTube ad group.',
  operationId: 'displayvideo.advertisers.youtubeAdGroups.get',
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
    }),
    params: z.object({
      advertiserId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the advertiser this ad group belongs to.',
            in: 'path',
            name: 'advertiserId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      youtubeAdGroupId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the ad group to fetch.',
            in: 'path',
            name: 'youtubeAdGroupId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: YoutubeAdGroupSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const getV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupIdTargetingTypesTargetingTypeAssignedTargetingOptionsRoute =
  createRoute({
    method: 'get',
    path: '/v2/advertisers/{advertiserId}/youtubeAdGroups/{youtubeAdGroupId}/targetingTypes/{targetingType}/assignedTargetingOptions',
    tags: ['advertisers'],
    description:
      'Lists the targeting options assigned to a YouTube ad group. Inherited assigned targeting options are not included.',
    operationId:
      'displayvideo.advertisers.youtubeAdGroups.targetingTypes.assignedTargetingOptions.list',
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
                'Allows filtering by assigned targeting option properties. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the logical operator `OR`. * A restriction has the form of `{field} {operator} {value}`. * The operator must be `EQUALS (=)`. * Supported fields: - `assignedTargetingOptionId` Examples: * AssignedTargetingOptions with ID 1 or 2 `assignedTargetingOptionId="1" OR assignedTargetingOptionId="2"` The length of this field should be no more than 500 characters.',
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
                'Field by which to sort the list. Acceptable values are: * `assignedTargetingOptionId` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `assignedTargetingOptionId desc`.',
              in: 'query',
              name: 'orderBy',
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
                'Requested page size. Must be between `1` and `5000`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.',
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
              description:
                'A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListYoutubeAdGroupAssignedTargetingOptions` method. If not specified, the first page of results will be returned.',
              in: 'query',
              name: 'pageToken',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        advertiserId: z
          .string()
          .openapi({
            param: {
              description: 'Required. The ID of the advertiser the ad group belongs to.',
              in: 'path',
              name: 'advertiserId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        youtubeAdGroupId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. The ID of the ad group to list assigned targeting options for.',
              in: 'path',
              name: 'youtubeAdGroupId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        targetingType: z
          .enum([
            'TARGETING_TYPE_UNSPECIFIED',
            'TARGETING_TYPE_CHANNEL',
            'TARGETING_TYPE_APP_CATEGORY',
            'TARGETING_TYPE_APP',
            'TARGETING_TYPE_URL',
            'TARGETING_TYPE_DAY_AND_TIME',
            'TARGETING_TYPE_AGE_RANGE',
            'TARGETING_TYPE_REGIONAL_LOCATION_LIST',
            'TARGETING_TYPE_PROXIMITY_LOCATION_LIST',
            'TARGETING_TYPE_GENDER',
            'TARGETING_TYPE_VIDEO_PLAYER_SIZE',
            'TARGETING_TYPE_USER_REWARDED_CONTENT',
            'TARGETING_TYPE_PARENTAL_STATUS',
            'TARGETING_TYPE_CONTENT_INSTREAM_POSITION',
            'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION',
            'TARGETING_TYPE_DEVICE_TYPE',
            'TARGETING_TYPE_AUDIENCE_GROUP',
            'TARGETING_TYPE_BROWSER',
            'TARGETING_TYPE_HOUSEHOLD_INCOME',
            'TARGETING_TYPE_ON_SCREEN_POSITION',
            'TARGETING_TYPE_THIRD_PARTY_VERIFIER',
            'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION',
            'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION',
            'TARGETING_TYPE_ENVIRONMENT',
            'TARGETING_TYPE_CARRIER_AND_ISP',
            'TARGETING_TYPE_OPERATING_SYSTEM',
            'TARGETING_TYPE_DEVICE_MAKE_MODEL',
            'TARGETING_TYPE_KEYWORD',
            'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST',
            'TARGETING_TYPE_VIEWABILITY',
            'TARGETING_TYPE_CATEGORY',
            'TARGETING_TYPE_INVENTORY_SOURCE',
            'TARGETING_TYPE_LANGUAGE',
            'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS',
            'TARGETING_TYPE_GEO_REGION',
            'TARGETING_TYPE_INVENTORY_SOURCE_GROUP',
            'TARGETING_TYPE_EXCHANGE',
            'TARGETING_TYPE_SUB_EXCHANGE',
            'TARGETING_TYPE_POI',
            'TARGETING_TYPE_BUSINESS_CHAIN',
            'TARGETING_TYPE_CONTENT_DURATION',
            'TARGETING_TYPE_CONTENT_STREAM_TYPE',
            'TARGETING_TYPE_NATIVE_CONTENT_POSITION',
            'TARGETING_TYPE_OMID',
            'TARGETING_TYPE_AUDIO_CONTENT_TYPE',
            'TARGETING_TYPE_CONTENT_GENRE',
            'TARGETING_TYPE_YOUTUBE_VIDEO',
            'TARGETING_TYPE_YOUTUBE_CHANNEL',
            'TARGETING_TYPE_SESSION_POSITION',
          ])
          .openapi({
            param: {
              description:
                'Required. Identifies the type of assigned targeting options to list. Supported targeting types include: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_APP` * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AUDIENCE_GROUP` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SESSION_POSITION` * `TARGETING_TYPE_URL` * `TARGETING_TYPE_YOUTUBE_CHANNEL` * `TARGETING_TYPE_YOUTUBE_VIDEO`',
              in: 'path',
              name: 'targetingType',
              required: true,
              schema: {
                enum: [
                  'TARGETING_TYPE_UNSPECIFIED',
                  'TARGETING_TYPE_CHANNEL',
                  'TARGETING_TYPE_APP_CATEGORY',
                  'TARGETING_TYPE_APP',
                  'TARGETING_TYPE_URL',
                  'TARGETING_TYPE_DAY_AND_TIME',
                  'TARGETING_TYPE_AGE_RANGE',
                  'TARGETING_TYPE_REGIONAL_LOCATION_LIST',
                  'TARGETING_TYPE_PROXIMITY_LOCATION_LIST',
                  'TARGETING_TYPE_GENDER',
                  'TARGETING_TYPE_VIDEO_PLAYER_SIZE',
                  'TARGETING_TYPE_USER_REWARDED_CONTENT',
                  'TARGETING_TYPE_PARENTAL_STATUS',
                  'TARGETING_TYPE_CONTENT_INSTREAM_POSITION',
                  'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION',
                  'TARGETING_TYPE_DEVICE_TYPE',
                  'TARGETING_TYPE_AUDIENCE_GROUP',
                  'TARGETING_TYPE_BROWSER',
                  'TARGETING_TYPE_HOUSEHOLD_INCOME',
                  'TARGETING_TYPE_ON_SCREEN_POSITION',
                  'TARGETING_TYPE_THIRD_PARTY_VERIFIER',
                  'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION',
                  'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION',
                  'TARGETING_TYPE_ENVIRONMENT',
                  'TARGETING_TYPE_CARRIER_AND_ISP',
                  'TARGETING_TYPE_OPERATING_SYSTEM',
                  'TARGETING_TYPE_DEVICE_MAKE_MODEL',
                  'TARGETING_TYPE_KEYWORD',
                  'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST',
                  'TARGETING_TYPE_VIEWABILITY',
                  'TARGETING_TYPE_CATEGORY',
                  'TARGETING_TYPE_INVENTORY_SOURCE',
                  'TARGETING_TYPE_LANGUAGE',
                  'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS',
                  'TARGETING_TYPE_GEO_REGION',
                  'TARGETING_TYPE_INVENTORY_SOURCE_GROUP',
                  'TARGETING_TYPE_EXCHANGE',
                  'TARGETING_TYPE_SUB_EXCHANGE',
                  'TARGETING_TYPE_POI',
                  'TARGETING_TYPE_BUSINESS_CHAIN',
                  'TARGETING_TYPE_CONTENT_DURATION',
                  'TARGETING_TYPE_CONTENT_STREAM_TYPE',
                  'TARGETING_TYPE_NATIVE_CONTENT_POSITION',
                  'TARGETING_TYPE_OMID',
                  'TARGETING_TYPE_AUDIO_CONTENT_TYPE',
                  'TARGETING_TYPE_CONTENT_GENRE',
                  'TARGETING_TYPE_YOUTUBE_VIDEO',
                  'TARGETING_TYPE_YOUTUBE_CHANNEL',
                  'TARGETING_TYPE_SESSION_POSITION',
                ],
                type: 'string',
              },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': { schema: ListYoutubeAdGroupAssignedTargetingOptionsResponseSchema },
        },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/display-video'],
        Oauth2c: ['https://www.googleapis.com/auth/display-video'],
      },
    ],
  })

export const getV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdRoute =
  createRoute({
    method: 'get',
    path: '/v2/advertisers/{advertiserId}/youtubeAdGroups/{youtubeAdGroupId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId}',
    tags: ['advertisers'],
    description:
      'Gets a single targeting option assigned to a YouTube ad group. Inherited assigned targeting options are not included.',
    operationId:
      'displayvideo.advertisers.youtubeAdGroups.targetingTypes.assignedTargetingOptions.get',
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
      }),
      params: z.object({
        advertiserId: z
          .string()
          .openapi({
            param: {
              description: 'Required. The ID of the advertiser the ad group belongs to.',
              in: 'path',
              name: 'advertiserId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        youtubeAdGroupId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. The ID of the ad group the assigned targeting option belongs to.',
              in: 'path',
              name: 'youtubeAdGroupId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        targetingType: z
          .enum([
            'TARGETING_TYPE_UNSPECIFIED',
            'TARGETING_TYPE_CHANNEL',
            'TARGETING_TYPE_APP_CATEGORY',
            'TARGETING_TYPE_APP',
            'TARGETING_TYPE_URL',
            'TARGETING_TYPE_DAY_AND_TIME',
            'TARGETING_TYPE_AGE_RANGE',
            'TARGETING_TYPE_REGIONAL_LOCATION_LIST',
            'TARGETING_TYPE_PROXIMITY_LOCATION_LIST',
            'TARGETING_TYPE_GENDER',
            'TARGETING_TYPE_VIDEO_PLAYER_SIZE',
            'TARGETING_TYPE_USER_REWARDED_CONTENT',
            'TARGETING_TYPE_PARENTAL_STATUS',
            'TARGETING_TYPE_CONTENT_INSTREAM_POSITION',
            'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION',
            'TARGETING_TYPE_DEVICE_TYPE',
            'TARGETING_TYPE_AUDIENCE_GROUP',
            'TARGETING_TYPE_BROWSER',
            'TARGETING_TYPE_HOUSEHOLD_INCOME',
            'TARGETING_TYPE_ON_SCREEN_POSITION',
            'TARGETING_TYPE_THIRD_PARTY_VERIFIER',
            'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION',
            'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION',
            'TARGETING_TYPE_ENVIRONMENT',
            'TARGETING_TYPE_CARRIER_AND_ISP',
            'TARGETING_TYPE_OPERATING_SYSTEM',
            'TARGETING_TYPE_DEVICE_MAKE_MODEL',
            'TARGETING_TYPE_KEYWORD',
            'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST',
            'TARGETING_TYPE_VIEWABILITY',
            'TARGETING_TYPE_CATEGORY',
            'TARGETING_TYPE_INVENTORY_SOURCE',
            'TARGETING_TYPE_LANGUAGE',
            'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS',
            'TARGETING_TYPE_GEO_REGION',
            'TARGETING_TYPE_INVENTORY_SOURCE_GROUP',
            'TARGETING_TYPE_EXCHANGE',
            'TARGETING_TYPE_SUB_EXCHANGE',
            'TARGETING_TYPE_POI',
            'TARGETING_TYPE_BUSINESS_CHAIN',
            'TARGETING_TYPE_CONTENT_DURATION',
            'TARGETING_TYPE_CONTENT_STREAM_TYPE',
            'TARGETING_TYPE_NATIVE_CONTENT_POSITION',
            'TARGETING_TYPE_OMID',
            'TARGETING_TYPE_AUDIO_CONTENT_TYPE',
            'TARGETING_TYPE_CONTENT_GENRE',
            'TARGETING_TYPE_YOUTUBE_VIDEO',
            'TARGETING_TYPE_YOUTUBE_CHANNEL',
            'TARGETING_TYPE_SESSION_POSITION',
          ])
          .openapi({
            param: {
              description:
                'Required. Identifies the type of this assigned targeting option. Supported targeting types include: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_APP` * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AUDIENCE_GROUP` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SESSION_POSITION` * `TARGETING_TYPE_URL` * `TARGETING_TYPE_YOUTUBE_CHANNEL` * `TARGETING_TYPE_YOUTUBE_VIDEO`',
              in: 'path',
              name: 'targetingType',
              required: true,
              schema: {
                enum: [
                  'TARGETING_TYPE_UNSPECIFIED',
                  'TARGETING_TYPE_CHANNEL',
                  'TARGETING_TYPE_APP_CATEGORY',
                  'TARGETING_TYPE_APP',
                  'TARGETING_TYPE_URL',
                  'TARGETING_TYPE_DAY_AND_TIME',
                  'TARGETING_TYPE_AGE_RANGE',
                  'TARGETING_TYPE_REGIONAL_LOCATION_LIST',
                  'TARGETING_TYPE_PROXIMITY_LOCATION_LIST',
                  'TARGETING_TYPE_GENDER',
                  'TARGETING_TYPE_VIDEO_PLAYER_SIZE',
                  'TARGETING_TYPE_USER_REWARDED_CONTENT',
                  'TARGETING_TYPE_PARENTAL_STATUS',
                  'TARGETING_TYPE_CONTENT_INSTREAM_POSITION',
                  'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION',
                  'TARGETING_TYPE_DEVICE_TYPE',
                  'TARGETING_TYPE_AUDIENCE_GROUP',
                  'TARGETING_TYPE_BROWSER',
                  'TARGETING_TYPE_HOUSEHOLD_INCOME',
                  'TARGETING_TYPE_ON_SCREEN_POSITION',
                  'TARGETING_TYPE_THIRD_PARTY_VERIFIER',
                  'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION',
                  'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION',
                  'TARGETING_TYPE_ENVIRONMENT',
                  'TARGETING_TYPE_CARRIER_AND_ISP',
                  'TARGETING_TYPE_OPERATING_SYSTEM',
                  'TARGETING_TYPE_DEVICE_MAKE_MODEL',
                  'TARGETING_TYPE_KEYWORD',
                  'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST',
                  'TARGETING_TYPE_VIEWABILITY',
                  'TARGETING_TYPE_CATEGORY',
                  'TARGETING_TYPE_INVENTORY_SOURCE',
                  'TARGETING_TYPE_LANGUAGE',
                  'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS',
                  'TARGETING_TYPE_GEO_REGION',
                  'TARGETING_TYPE_INVENTORY_SOURCE_GROUP',
                  'TARGETING_TYPE_EXCHANGE',
                  'TARGETING_TYPE_SUB_EXCHANGE',
                  'TARGETING_TYPE_POI',
                  'TARGETING_TYPE_BUSINESS_CHAIN',
                  'TARGETING_TYPE_CONTENT_DURATION',
                  'TARGETING_TYPE_CONTENT_STREAM_TYPE',
                  'TARGETING_TYPE_NATIVE_CONTENT_POSITION',
                  'TARGETING_TYPE_OMID',
                  'TARGETING_TYPE_AUDIO_CONTENT_TYPE',
                  'TARGETING_TYPE_CONTENT_GENRE',
                  'TARGETING_TYPE_YOUTUBE_VIDEO',
                  'TARGETING_TYPE_YOUTUBE_CHANNEL',
                  'TARGETING_TYPE_SESSION_POSITION',
                ],
                type: 'string',
              },
            },
          }),
        assignedTargetingOptionId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. An identifier unique to the targeting type in this line item that identifies the assigned targeting option being requested.',
              in: 'path',
              name: 'assignedTargetingOptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: AssignedTargetingOptionSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/display-video'],
        Oauth2c: ['https://www.googleapis.com/auth/display-video'],
      },
    ],
  })

export const getV2AdvertisersAdvertiserIdYoutubeAdGroupsBulkListAdGroupAssignedTargetingOptionsRoute =
  createRoute({
    method: 'get',
    path: '/v2/advertisers/{advertiserId}/youtubeAdGroups:bulkListAdGroupAssignedTargetingOptions',
    tags: ['advertisers'],
    description:
      'Lists assigned targeting options for multiple YouTube ad groups across targeting types. Inherieted assigned targeting options are not included.',
    operationId: 'displayvideo.advertisers.youtubeAdGroups.bulkListAdGroupAssignedTargetingOptions',
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
                'Allows filtering by assigned targeting option properties. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the logical operator `OR` on the same field. * A restriction has the form of `{field} {operator} {value}`. * The operator must be `EQUALS (=)`. * Supported fields: - `targetingType` Examples: * AssignedTargetingOptions of targeting type TARGETING_TYPE_YOUTUBE_VIDEO or TARGETING_TYPE_YOUTUBE_CHANNEL `targetingType="TARGETING_TYPE_YOUTUBE_VIDEO" OR targetingType="TARGETING_TYPE_YOUTUBE_CHANNEL"` The length of this field should be no more than 500 characters.',
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
                'Field by which to sort the list. Acceptable values are: * `youtubeAdGroupId` (default) * `assignedTargetingOption.targetingType` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `targetingType desc`.',
              in: 'query',
              name: 'orderBy',
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
                'Requested page size. The size must be an integer between `1` and `5000`. If unspecified, the default is `5000`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.',
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
              description:
                'A token that lets the client fetch the next page of results. Typically, this is the value of next_page_token returned from the previous call to the `BulkListAdGroupAssignedTargetingOptions` method. If not specified, the first page of results will be returned.',
              in: 'query',
              name: 'pageToken',
              schema: { type: 'string' },
              required: false,
            },
          }),
        youtubeAdGroupIds: z
          .preprocess(
            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
            z.array(z.string()),
          )
          .exactOptional()
          .openapi({
            param: {
              description:
                'Required. The IDs of the youtube ad groups to list assigned targeting options for.',
              explode: true,
              in: 'query',
              name: 'youtubeAdGroupIds',
              schema: { items: { type: 'string' }, type: 'array' },
              style: 'form',
              required: false,
            },
          }),
      }),
      params: z.object({
        advertiserId: z
          .string()
          .openapi({
            param: {
              description: 'Required. The ID of the advertiser the line items belongs to.',
              in: 'path',
              name: 'advertiserId',
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
          'application/json': { schema: BulkListAdGroupAssignedTargetingOptionsResponseSchema },
        },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/display-video'],
        Oauth2c: ['https://www.googleapis.com/auth/display-video'],
      },
    ],
  })

export const getV2AdvertisersAdvertiserIdAuditRoute = createRoute({
  method: 'get',
  path: '/v2/advertisers/{advertiserId}:audit',
  tags: ['advertisers'],
  description:
    'Audits an advertiser. Returns the counts of used entities per resource type under the advertiser provided. Used entities count towards their respective resource limit. See https://support.google.com/displayvideo/answer/6071450.',
  operationId: 'displayvideo.advertisers.audit',
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
            description:
              'Optional. The specific fields to return. If no mask is specified, all fields in the response proto will be filled. Valid values are: * usedLineItemsCount * usedInsertionOrdersCount * usedCampaignsCount * channelsCount * negativelyTargetedChannelsCount * negativeKeywordListsCount * adGroupCriteriaCount * campaignCriteriaCount',
            in: 'query',
            name: 'readMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      advertiserId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the advertiser to audit.',
            in: 'path',
            name: 'advertiserId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AuditAdvertiserResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const postV2AdvertisersAdvertiserIdEditAssignedTargetingOptionsRoute = createRoute({
  method: 'post',
  path: '/v2/advertisers/{advertiserId}:editAssignedTargetingOptions',
  tags: ['advertisers'],
  description:
    'Edits targeting options under a single advertiser. The operation will delete the assigned targeting options provided in BulkEditAdvertiserAssignedTargetingOptionsRequest.delete_requests and then create the assigned targeting options provided in BulkEditAdvertiserAssignedTargetingOptionsRequest.create_requests .',
  operationId: 'displayvideo.advertisers.editAssignedTargetingOptions',
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
    }),
    params: z.object({
      advertiserId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the advertiser.',
            in: 'path',
            name: 'advertiserId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: BulkEditAdvertiserAssignedTargetingOptionsRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: BulkEditAdvertiserAssignedTargetingOptionsResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const getV2AdvertisersAdvertiserIdListAssignedTargetingOptionsRoute = createRoute({
  method: 'get',
  path: '/v2/advertisers/{advertiserId}:listAssignedTargetingOptions',
  tags: ['advertisers'],
  description: 'Lists assigned targeting options of an advertiser across targeting types.',
  operationId: 'displayvideo.advertisers.listAssignedTargetingOptions',
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
              'Allows filtering by assigned targeting option properties. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the logical operator `OR`.. * A restriction has the form of `{field} {operator} {value}`. * The operator must be `EQUALS (=)`. * Supported fields: - `targetingType` Examples: * targetingType with value TARGETING_TYPE_CHANNEL `targetingType="TARGETING_TYPE_CHANNEL"` The length of this field should be no more than 500 characters.',
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
              'Field by which to sort the list. Acceptable values are: * `targetingType` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `targetingType desc`.',
            in: 'query',
            name: 'orderBy',
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
              "Requested page size. The size must be an integer between `1` and `5000`. If unspecified, the default is '5000'. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.",
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
            description:
              'A token that lets the client fetch the next page of results. Typically, this is the value of next_page_token returned from the previous call to `BulkListAdvertiserAssignedTargetingOptions` method. If not specified, the first page of results will be returned.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      advertiserId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the advertiser the line item belongs to.',
            in: 'path',
            name: 'advertiserId',
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
        'application/json': { schema: BulkListAdvertiserAssignedTargetingOptionsResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const getV2CombinedAudiencesRoute = createRoute({
  method: 'get',
  path: '/v2/combinedAudiences',
  tags: ['combinedAudiences'],
  description: 'Lists combined audiences. The order is defined by the order_by parameter.',
  operationId: 'displayvideo.combinedAudiences.list',
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
      advertiserId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The ID of the advertiser that has access to the fetched combined audiences.',
            in: 'query',
            name: 'advertiserId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Allows filtering by combined audience fields. Supported syntax: * Filter expressions for combined audiences currently can only contain at most one restriction. * A restriction has the form of `{field} {operator} {value}`. * The operator must be `CONTAINS (:)`. * Supported fields: - `displayName` Examples: * All combined audiences for which the display name contains "Google": `displayName : "Google"`. The length of this field should be no more than 500 characters.',
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
              'Field by which to sort the list. Acceptable values are: * `combinedAudienceId` (default) * `displayName` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`.',
            in: 'query',
            name: 'orderBy',
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
              'Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.',
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
            description:
              'A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListCombinedAudiences` method. If not specified, the first page of results will be returned.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      partnerId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the partner that has access to the fetched combined audiences.',
            in: 'query',
            name: 'partnerId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListCombinedAudiencesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const getV2CombinedAudiencesCombinedAudienceIdRoute = createRoute({
  method: 'get',
  path: '/v2/combinedAudiences/{combinedAudienceId}',
  tags: ['combinedAudiences'],
  description: 'Gets a combined audience.',
  operationId: 'displayvideo.combinedAudiences.get',
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
      advertiserId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The ID of the advertiser that has access to the fetched combined audience.',
            in: 'query',
            name: 'advertiserId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      partnerId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the partner that has access to the fetched combined audience.',
            in: 'query',
            name: 'partnerId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      combinedAudienceId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the combined audience to fetch.',
            in: 'path',
            name: 'combinedAudienceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CombinedAudienceSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const getV2CustomBiddingAlgorithmsRoute = createRoute({
  method: 'get',
  path: '/v2/customBiddingAlgorithms',
  tags: ['customBiddingAlgorithms'],
  description:
    'Lists custom bidding algorithms that are accessible to the current user and can be used in bidding stratgies. The order is defined by the order_by parameter.',
  operationId: 'displayvideo.customBiddingAlgorithms.list',
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
      advertiserId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The ID of the DV360 advertiser that has access to the custom bidding algorithm.',
            in: 'query',
            name: 'advertiserId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Allows filtering by custom bidding algorithm fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND`. A sequence of restrictions * implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * The operator must be `CONTAINS (:)` or `EQUALS (=)`. * The operator must be `CONTAINS (:)` for the following field: - `displayName` * The operator must be `EQUALS (=)` for the following field: - `customBiddingAlgorithmType` * For `displayName`, the value is a string. We return all custom bidding algorithms whose display_name contains such string. * For `customBiddingAlgorithmType`, the value is a string. We return all algorithms whose custom_bidding_algorithm_type is equal to the given type. Examples: * All custom bidding algorithms for which the display name contains "politics": `displayName:politics`. * All custom bidding algorithms for which the type is "SCRIPT_BASED": `customBiddingAlgorithmType=SCRIPT_BASED` The length of this field should be no more than 500 characters.',
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
              'Field by which to sort the list. Acceptable values are: * `displayName` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`.',
            in: 'query',
            name: 'orderBy',
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
              'Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.',
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
            description:
              'A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListCustomBiddingAlgorithms` method. If not specified, the first page of results will be returned.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      partnerId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The ID of the DV360 partner that has access to the custom bidding algorithm.',
            in: 'query',
            name: 'partnerId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListCustomBiddingAlgorithmsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const postV2CustomBiddingAlgorithmsRoute = createRoute({
  method: 'post',
  path: '/v2/customBiddingAlgorithms',
  tags: ['customBiddingAlgorithms'],
  description:
    'Creates a new custom bidding algorithm. Returns the newly created custom bidding algorithm if successful.',
  operationId: 'displayvideo.customBiddingAlgorithms.create',
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
    }),
    body: { content: { 'application/json': { schema: CustomBiddingAlgorithmSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CustomBiddingAlgorithmSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdRoute = createRoute({
  method: 'get',
  path: '/v2/customBiddingAlgorithms/{customBiddingAlgorithmId}',
  tags: ['customBiddingAlgorithms'],
  description: 'Gets a custom bidding algorithm.',
  operationId: 'displayvideo.customBiddingAlgorithms.get',
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
      advertiserId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The ID of the DV360 partner that has access to the custom bidding algorithm.',
            in: 'query',
            name: 'advertiserId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      partnerId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The ID of the DV360 partner that has access to the custom bidding algorithm.',
            in: 'query',
            name: 'partnerId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      customBiddingAlgorithmId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the custom bidding algorithm to fetch.',
            in: 'path',
            name: 'customBiddingAlgorithmId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CustomBiddingAlgorithmSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const patchV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdRoute = createRoute({
  method: 'patch',
  path: '/v2/customBiddingAlgorithms/{customBiddingAlgorithmId}',
  tags: ['customBiddingAlgorithms'],
  description:
    'Updates an existing custom bidding algorithm. Returns the updated custom bidding algorithm if successful.',
  operationId: 'displayvideo.customBiddingAlgorithms.patch',
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
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. The mask to control which fields to update.',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      customBiddingAlgorithmId: z
        .string()
        .openapi({
          param: {
            description:
              'Output only. The unique ID of the custom bidding algorithm. Assigned by the system.',
            in: 'path',
            name: 'customBiddingAlgorithmId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CustomBiddingAlgorithmSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CustomBiddingAlgorithmSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScriptsRoute = createRoute({
  method: 'get',
  path: '/v2/customBiddingAlgorithms/{customBiddingAlgorithmId}/scripts',
  tags: ['customBiddingAlgorithms'],
  description:
    'Lists custom bidding scripts that belong to the given algorithm. The order is defined by the order_by parameter.',
  operationId: 'displayvideo.customBiddingAlgorithms.scripts.list',
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
      advertiserId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the advertiser that owns the parent custom bidding algorithm.',
            in: 'query',
            name: 'advertiserId',
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
              'Field by which to sort the list. Acceptable values are: * `createTime desc` (default) The default sorting order is descending. To specify ascending order for a field, the suffix "desc" should be removed. Example: `createTime`.',
            in: 'query',
            name: 'orderBy',
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
              'Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.',
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
            description:
              'A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListCustomBiddingScripts` method. If not specified, the first page of results will be returned.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      partnerId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The ID of the partner that owns the parent custom bidding algorithm. Only this partner will have write access to this custom bidding script.',
            in: 'query',
            name: 'partnerId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      customBiddingAlgorithmId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the custom bidding algorithm owns the script.',
            in: 'path',
            name: 'customBiddingAlgorithmId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListCustomBiddingScriptsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const postV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScriptsRoute = createRoute({
  method: 'post',
  path: '/v2/customBiddingAlgorithms/{customBiddingAlgorithmId}/scripts',
  tags: ['customBiddingAlgorithms'],
  description:
    'Creates a new custom bidding script. Returns the newly created script if successful.',
  operationId: 'displayvideo.customBiddingAlgorithms.scripts.create',
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
      advertiserId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the advertiser that owns the parent custom bidding algorithm.',
            in: 'query',
            name: 'advertiserId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      partnerId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The ID of the partner that owns the parent custom bidding algorithm. Only this partner will have write access to this custom bidding script.',
            in: 'query',
            name: 'partnerId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      customBiddingAlgorithmId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the custom bidding algorithm that owns the script.',
            in: 'path',
            name: 'customBiddingAlgorithmId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CustomBiddingScriptSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CustomBiddingScriptSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScriptsCustomBiddingScriptIdRoute =
  createRoute({
    method: 'get',
    path: '/v2/customBiddingAlgorithms/{customBiddingAlgorithmId}/scripts/{customBiddingScriptId}',
    tags: ['customBiddingAlgorithms'],
    description: 'Gets a custom bidding script.',
    operationId: 'displayvideo.customBiddingAlgorithms.scripts.get',
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
        advertiserId: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'The ID of the advertiser that owns the parent custom bidding algorithm.',
              in: 'query',
              name: 'advertiserId',
              schema: { type: 'string' },
              required: false,
            },
          }),
        partnerId: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'The ID of the partner that owns the parent custom bidding algorithm. Only this partner will have write access to this custom bidding script.',
              in: 'query',
              name: 'partnerId',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        customBiddingAlgorithmId: z
          .string()
          .openapi({
            param: {
              description: 'Required. The ID of the custom bidding algorithm owns the script.',
              in: 'path',
              name: 'customBiddingAlgorithmId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        customBiddingScriptId: z
          .string()
          .openapi({
            param: {
              description: 'Required. The ID of the custom bidding script to fetch.',
              in: 'path',
              name: 'customBiddingScriptId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: CustomBiddingScriptSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/display-video'],
        Oauth2c: ['https://www.googleapis.com/auth/display-video'],
      },
    ],
  })

export const getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdUploadScriptRoute = createRoute({
  method: 'get',
  path: '/v2/customBiddingAlgorithms/{customBiddingAlgorithmId}:uploadScript',
  tags: ['customBiddingAlgorithms'],
  description:
    'Creates a custom bidding script reference object for a script file. The resulting reference object provides a resource path to which the script file should be uploaded. This reference object should be included in when creating a new custom bidding script object.',
  operationId: 'displayvideo.customBiddingAlgorithms.uploadScript',
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
      advertiserId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the advertiser that owns the parent custom bidding algorithm.',
            in: 'query',
            name: 'advertiserId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      partnerId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The ID of the partner that owns the parent custom bidding algorithm. Only this partner will have write access to this custom bidding script.',
            in: 'query',
            name: 'partnerId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      customBiddingAlgorithmId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the custom bidding algorithm owns the script.',
            in: 'path',
            name: 'customBiddingAlgorithmId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CustomBiddingScriptRefSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const getV2CustomListsRoute = createRoute({
  method: 'get',
  path: '/v2/customLists',
  tags: ['customLists'],
  description: 'Lists custom lists. The order is defined by the order_by parameter.',
  operationId: 'displayvideo.customLists.list',
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
      advertiserId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The ID of the DV360 advertiser that has access to the fetched custom lists.',
            in: 'query',
            name: 'advertiserId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Allows filtering by custom list fields. Supported syntax: * Filter expressions for custom lists currently can only contain at most one restriction. * A restriction has the form of `{field} {operator} {value}`. * The operator must be `CONTAINS (:)`. * Supported fields: - `displayName` Examples: * All custom lists for which the display name contains "Google": `displayName : "Google"`. The length of this field should be no more than 500 characters.',
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
              'Field by which to sort the list. Acceptable values are: * `customListId` (default) * `displayName` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`.',
            in: 'query',
            name: 'orderBy',
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
              'Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.',
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
            description:
              'A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListCustomLists` method. If not specified, the first page of results will be returned.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListCustomListsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const getV2CustomListsCustomListIdRoute = createRoute({
  method: 'get',
  path: '/v2/customLists/{customListId}',
  tags: ['customLists'],
  description: 'Gets a custom list.',
  operationId: 'displayvideo.customLists.get',
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
      advertiserId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The ID of the DV360 advertiser that has access to the fetched custom lists.',
            in: 'query',
            name: 'advertiserId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      customListId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the custom list to fetch.',
            in: 'path',
            name: 'customListId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CustomListSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const getV2FirstAndThirdPartyAudiencesRoute = createRoute({
  method: 'get',
  path: '/v2/firstAndThirdPartyAudiences',
  tags: ['firstAndThirdPartyAudiences'],
  description:
    'Lists first and third party audiences. The order is defined by the order_by parameter.',
  operationId: 'displayvideo.firstAndThirdPartyAudiences.list',
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
      advertiserId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The ID of the advertiser that has access to the fetched first and third party audiences.',
            in: 'query',
            name: 'advertiserId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Allows filtering by first and third party audience fields. Supported syntax: * Filter expressions for first and third party audiences currently can only contain at most one restriction. * A restriction has the form of `{field} {operator} {value}`. * The operator must be `CONTAINS (:)`. * Supported fields: - `displayName` Examples: * All first and third party audiences for which the display name contains "Google": `displayName : "Google"`. The length of this field should be no more than 500 characters.',
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
              'Field by which to sort the list. Acceptable values are: * `firstAndThirdPartyAudienceId` (default) * `displayName` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`.',
            in: 'query',
            name: 'orderBy',
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
              'Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.',
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
            description:
              'A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListFirstAndThirdPartyAudiences` method. If not specified, the first page of results will be returned.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      partnerId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The ID of the partner that has access to the fetched first and third party audiences.',
            in: 'query',
            name: 'partnerId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListFirstAndThirdPartyAudiencesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const postV2FirstAndThirdPartyAudiencesRoute = createRoute({
  method: 'post',
  path: '/v2/firstAndThirdPartyAudiences',
  tags: ['firstAndThirdPartyAudiences'],
  description:
    'Creates a FirstAndThirdPartyAudience. Only supported for the following audience_type: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`',
  operationId: 'displayvideo.firstAndThirdPartyAudiences.create',
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
      advertiserId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. The ID of the advertiser under whom the FirstAndThirdPartyAudience will be created.',
            in: 'query',
            name: 'advertiserId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: FirstAndThirdPartyAudienceSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FirstAndThirdPartyAudienceSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const getV2FirstAndThirdPartyAudiencesFirstAndThirdPartyAudienceIdRoute = createRoute({
  method: 'get',
  path: '/v2/firstAndThirdPartyAudiences/{firstAndThirdPartyAudienceId}',
  tags: ['firstAndThirdPartyAudiences'],
  description: 'Gets a first and third party audience.',
  operationId: 'displayvideo.firstAndThirdPartyAudiences.get',
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
      advertiserId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The ID of the advertiser that has access to the fetched first and third party audience.',
            in: 'query',
            name: 'advertiserId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      partnerId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The ID of the partner that has access to the fetched first and third party audience.',
            in: 'query',
            name: 'partnerId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      firstAndThirdPartyAudienceId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the first and third party audience to fetch.',
            in: 'path',
            name: 'firstAndThirdPartyAudienceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FirstAndThirdPartyAudienceSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const patchV2FirstAndThirdPartyAudiencesFirstAndThirdPartyAudienceIdRoute = createRoute({
  method: 'patch',
  path: '/v2/firstAndThirdPartyAudiences/{firstAndThirdPartyAudienceId}',
  tags: ['firstAndThirdPartyAudiences'],
  description:
    'Updates an existing FirstAndThirdPartyAudience. Only supported for the following audience_type: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`',
  operationId: 'displayvideo.firstAndThirdPartyAudiences.patch',
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
      advertiserId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. The ID of the owner advertiser of the updated FirstAndThirdPartyAudience.',
            in: 'query',
            name: 'advertiserId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. The mask to control which fields to update. Updates are only supported for the following fields: * `displayName` * `description` * `membershipDurationDays`',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      firstAndThirdPartyAudienceId: z
        .string()
        .openapi({
          param: {
            description:
              'Output only. The unique ID of the first and third party audience. Assigned by the system.',
            in: 'path',
            name: 'firstAndThirdPartyAudienceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: FirstAndThirdPartyAudienceSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FirstAndThirdPartyAudienceSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const postV2FirstAndThirdPartyAudiencesFirstAndThirdPartyAudienceIdEditCustomerMatchMembersRoute =
  createRoute({
    method: 'post',
    path: '/v2/firstAndThirdPartyAudiences/{firstAndThirdPartyAudienceId}:editCustomerMatchMembers',
    tags: ['firstAndThirdPartyAudiences'],
    description:
      'Updates the member list of a Customer Match audience. Only supported for the following audience_type: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`',
    operationId: 'displayvideo.firstAndThirdPartyAudiences.editCustomerMatchMembers',
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
      }),
      params: z.object({
        firstAndThirdPartyAudienceId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. The ID of the Customer Match FirstAndThirdPartyAudience whose members will be edited.',
              in: 'path',
              name: 'firstAndThirdPartyAudienceId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: EditCustomerMatchMembersRequestSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: EditCustomerMatchMembersResponseSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/display-video'],
        Oauth2c: ['https://www.googleapis.com/auth/display-video'],
      },
    ],
  })

export const getV2FloodlightGroupsFloodlightGroupIdRoute = createRoute({
  method: 'get',
  path: '/v2/floodlightGroups/{floodlightGroupId}',
  tags: ['floodlightGroups'],
  description: 'Gets a Floodlight group.',
  operationId: 'displayvideo.floodlightGroups.get',
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
      partnerId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. The partner context by which the Floodlight group is being accessed.',
            in: 'query',
            name: 'partnerId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      floodlightGroupId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the Floodlight group to fetch.',
            in: 'path',
            name: 'floodlightGroupId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FloodlightGroupSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const getV2GoogleAudiencesRoute = createRoute({
  method: 'get',
  path: '/v2/googleAudiences',
  tags: ['googleAudiences'],
  description: 'Lists Google audiences. The order is defined by the order_by parameter.',
  operationId: 'displayvideo.googleAudiences.list',
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
      advertiserId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The ID of the advertiser that has access to the fetched Google audiences.',
            in: 'query',
            name: 'advertiserId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Allows filtering by Google audience fields. Supported syntax: * Filter expressions for Google audiences currently can only contain at most one restriction. * A restriction has the form of `{field} {operator} {value}`. * The operator must be `CONTAINS (:)`. * Supported fields: - `displayName` Examples: * All Google audiences for which the display name contains "Google": `displayName : "Google"`. The length of this field should be no more than 500 characters.',
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
              'Field by which to sort the list. Acceptable values are: * `googleAudienceId` (default) * `displayName` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`.',
            in: 'query',
            name: 'orderBy',
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
              'Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.',
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
            description:
              'A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListGoogleAudiences` method. If not specified, the first page of results will be returned.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      partnerId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the partner that has access to the fetched Google audiences.',
            in: 'query',
            name: 'partnerId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListGoogleAudiencesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const getV2GoogleAudiencesGoogleAudienceIdRoute = createRoute({
  method: 'get',
  path: '/v2/googleAudiences/{googleAudienceId}',
  tags: ['googleAudiences'],
  description: 'Gets a Google audience.',
  operationId: 'displayvideo.googleAudiences.get',
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
      advertiserId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the advertiser that has access to the fetched Google audience.',
            in: 'query',
            name: 'advertiserId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      partnerId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the partner that has access to the fetched Google audience.',
            in: 'query',
            name: 'partnerId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      googleAudienceId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the Google audience to fetch.',
            in: 'path',
            name: 'googleAudienceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleAudienceSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const getV2GuaranteedOrdersRoute = createRoute({
  method: 'get',
  path: '/v2/guaranteedOrders',
  tags: ['guaranteedOrders'],
  description:
    'Lists guaranteed orders that are accessible to the current user. The order is defined by the order_by parameter. If a filter by entity_status is not specified, guaranteed orders with entity status `ENTITY_STATUS_ARCHIVED` will not be included in the results.',
  operationId: 'displayvideo.guaranteedOrders.list',
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
      advertiserId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the advertiser that has access to the guaranteed order.',
            in: 'query',
            name: 'advertiserId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Allows filtering by guaranteed order properties. * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * The operator must be `EQUALS (=)`. * Supported fields: - `guaranteed_order_id` - `exchange` - `display_name` - `status.entityStatus` Examples: * All active guaranteed orders: `status.entityStatus="ENTITY_STATUS_ACTIVE"` * Guaranteed orders belonging to Google Ad Manager or Rubicon exchanges: `exchange="EXCHANGE_GOOGLE_AD_MANAGER" OR exchange="EXCHANGE_RUBICON"` The length of this field should be no more than 500 characters.',
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
              'Field by which to sort the list. Acceptable values are: * `displayName` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. For example, `displayName desc`.',
            in: 'query',
            name: 'orderBy',
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
              'Requested page size. Must be between `1` and `200`. If unspecified will default to `100`.',
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
            description:
              'A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListGuaranteedOrders` method. If not specified, the first page of results will be returned.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      partnerId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the partner that has access to the guaranteed order.',
            in: 'query',
            name: 'partnerId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListGuaranteedOrdersResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const postV2GuaranteedOrdersRoute = createRoute({
  method: 'post',
  path: '/v2/guaranteedOrders',
  tags: ['guaranteedOrders'],
  description:
    'Creates a new guaranteed order. Returns the newly created guaranteed order if successful.',
  operationId: 'displayvideo.guaranteedOrders.create',
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
      advertiserId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the advertiser that the request is being made within.',
            in: 'query',
            name: 'advertiserId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      partnerId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the partner that the request is being made within.',
            in: 'query',
            name: 'partnerId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GuaranteedOrderSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GuaranteedOrderSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const getV2GuaranteedOrdersGuaranteedOrderIdRoute = createRoute({
  method: 'get',
  path: '/v2/guaranteedOrders/{guaranteedOrderId}',
  tags: ['guaranteedOrders'],
  description: 'Gets a guaranteed order.',
  operationId: 'displayvideo.guaranteedOrders.get',
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
      advertiserId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the advertiser that has access to the guaranteed order.',
            in: 'query',
            name: 'advertiserId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      partnerId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the partner that has access to the guaranteed order.',
            in: 'query',
            name: 'partnerId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      guaranteedOrderId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The ID of the guaranteed order to fetch. The ID is of the format `{exchange}-{legacy_guaranteed_order_id}`',
            in: 'path',
            name: 'guaranteedOrderId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GuaranteedOrderSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const patchV2GuaranteedOrdersGuaranteedOrderIdRoute = createRoute({
  method: 'patch',
  path: '/v2/guaranteedOrders/{guaranteedOrderId}',
  tags: ['guaranteedOrders'],
  description:
    'Updates an existing guaranteed order. Returns the updated guaranteed order if successful.',
  operationId: 'displayvideo.guaranteedOrders.patch',
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
      advertiserId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the advertiser that the request is being made within.',
            in: 'query',
            name: 'advertiserId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      partnerId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the partner that the request is being made within.',
            in: 'query',
            name: 'partnerId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. The mask to control which fields to update.',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      guaranteedOrderId: z
        .string()
        .openapi({
          param: {
            description:
              'Output only. The unique identifier of the guaranteed order. The guaranteed order IDs have the format `{exchange}-{legacy_guaranteed_order_id}`.',
            in: 'path',
            name: 'guaranteedOrderId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GuaranteedOrderSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GuaranteedOrderSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const postV2GuaranteedOrdersGuaranteedOrderIdEditGuaranteedOrderReadAccessorsRoute =
  createRoute({
    method: 'post',
    path: '/v2/guaranteedOrders/{guaranteedOrderId}:editGuaranteedOrderReadAccessors',
    tags: ['guaranteedOrders'],
    description: 'Edits read advertisers of a guaranteed order.',
    operationId: 'displayvideo.guaranteedOrders.editGuaranteedOrderReadAccessors',
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
      }),
      params: z.object({
        guaranteedOrderId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. The ID of the guaranteed order to edit. The ID is of the format `{exchange}-{legacy_guaranteed_order_id}`',
              in: 'path',
              name: 'guaranteedOrderId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: EditGuaranteedOrderReadAccessorsRequestSchema } },
      },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: EditGuaranteedOrderReadAccessorsResponseSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/display-video'],
        Oauth2c: ['https://www.googleapis.com/auth/display-video'],
      },
    ],
  })

export const getV2InventorySourceGroupsRoute = createRoute({
  method: 'get',
  path: '/v2/inventorySourceGroups',
  tags: ['inventorySourceGroups'],
  description:
    'Lists inventory source groups that are accessible to the current user. The order is defined by the order_by parameter.',
  operationId: 'displayvideo.inventorySourceGroups.list',
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
      advertiserId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The ID of the advertiser that has access to the inventory source group. If an inventory source group is partner-owned, only advertisers to which the group is explicitly shared can access the group.',
            in: 'query',
            name: 'advertiserId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Allows filtering by inventory source group properties. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the logical operator `OR`. * A restriction has the form of `{field} {operator} {value}`. * The operator must be `EQUALS (=)`. * Supported fields: - `inventorySourceGroupId` The length of this field should be no more than 500 characters.',
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
              'Field by which to sort the list. Acceptable values are: * `displayName` (default) * `inventorySourceGroupId` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. For example, `displayName desc`.',
            in: 'query',
            name: 'orderBy',
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
              'Requested page size. Must be between `1` and `200`. If unspecified will default to `100`.',
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
            description:
              'A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListInventorySources` method. If not specified, the first page of results will be returned.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      partnerId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The ID of the partner that has access to the inventory source group. A partner cannot access advertiser-owned inventory source groups.',
            in: 'query',
            name: 'partnerId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListInventorySourceGroupsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const postV2InventorySourceGroupsRoute = createRoute({
  method: 'post',
  path: '/v2/inventorySourceGroups',
  tags: ['inventorySourceGroups'],
  description:
    'Creates a new inventory source group. Returns the newly created inventory source group if successful.',
  operationId: 'displayvideo.inventorySourceGroups.create',
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
      advertiserId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The ID of the advertiser that owns the inventory source group. The parent partner will not have access to this group.',
            in: 'query',
            name: 'advertiserId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      partnerId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The ID of the partner that owns the inventory source group. Only this partner will have write access to this group. Only advertisers to which this group is explicitly shared will have read access to this group.',
            in: 'query',
            name: 'partnerId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: InventorySourceGroupSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: InventorySourceGroupSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const getV2InventorySourceGroupsInventorySourceGroupIdRoute = createRoute({
  method: 'get',
  path: '/v2/inventorySourceGroups/{inventorySourceGroupId}',
  tags: ['inventorySourceGroups'],
  description: 'Gets an inventory source group.',
  operationId: 'displayvideo.inventorySourceGroups.get',
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
      advertiserId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The ID of the advertiser that has access to the inventory source group. If an inventory source group is partner-owned, only advertisers to which the group is explicitly shared can access the group.',
            in: 'query',
            name: 'advertiserId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      partnerId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The ID of the partner that has access to the inventory source group. A partner cannot access an advertiser-owned inventory source group.',
            in: 'query',
            name: 'partnerId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      inventorySourceGroupId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the inventory source group to fetch.',
            in: 'path',
            name: 'inventorySourceGroupId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: InventorySourceGroupSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const deleteV2InventorySourceGroupsInventorySourceGroupIdRoute = createRoute({
  method: 'delete',
  path: '/v2/inventorySourceGroups/{inventorySourceGroupId}',
  tags: ['inventorySourceGroups'],
  description: 'Deletes an inventory source group.',
  operationId: 'displayvideo.inventorySourceGroups.delete',
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
      advertiserId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The ID of the advertiser that owns the inventory source group. The parent partner does not have access to this group.',
            in: 'query',
            name: 'advertiserId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      partnerId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The ID of the partner that owns the inventory source group. Only this partner has write access to this group.',
            in: 'query',
            name: 'partnerId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      inventorySourceGroupId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the inventory source group to delete.',
            in: 'path',
            name: 'inventorySourceGroupId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const getV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesRoute =
  createRoute({
    method: 'get',
    path: '/v2/inventorySourceGroups/{inventorySourceGroupId}/assignedInventorySources',
    tags: ['inventorySourceGroups'],
    description: 'Lists inventory sources assigned to an inventory source group.',
    operationId: 'displayvideo.inventorySourceGroups.assignedInventorySources.list',
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
        advertiserId: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'The ID of the advertiser that has access to the assignment. If the parent inventory source group is partner-owned, only advertisers to which the parent group is explicitly shared can access the assigned inventory source.',
              in: 'query',
              name: 'advertiserId',
              schema: { type: 'string' },
              required: false,
            },
          }),
        filter: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'Allows filtering by assigned inventory source fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the logical operator `OR`. * A restriction has the form of `{field} {operator} {value}`. * The operator must be `EQUALS (=)`. * Supported fields: - `assignedInventorySourceId` The length of this field should be no more than 500 characters.',
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
                'Field by which to sort the list. Acceptable values are: * `assignedInventorySourceId` (default) The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be added to the field name. Example: `assignedInventorySourceId desc`.',
              in: 'query',
              name: 'orderBy',
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
                'Requested page size. Must be between `1` and `100`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.',
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
              description:
                'A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListAssignedInventorySources` method. If not specified, the first page of results will be returned.',
              in: 'query',
              name: 'pageToken',
              schema: { type: 'string' },
              required: false,
            },
          }),
        partnerId: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'The ID of the partner that has access to the assignment. If the parent inventory source group is advertiser-owned, the assignment cannot be accessed via a partner.',
              in: 'query',
              name: 'partnerId',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        inventorySourceGroupId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. The ID of the inventory source group to which these assignments are assigned.',
              in: 'path',
              name: 'inventorySourceGroupId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ListAssignedInventorySourcesResponseSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/display-video'],
        Oauth2c: ['https://www.googleapis.com/auth/display-video'],
      },
    ],
  })

export const postV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesRoute =
  createRoute({
    method: 'post',
    path: '/v2/inventorySourceGroups/{inventorySourceGroupId}/assignedInventorySources',
    tags: ['inventorySourceGroups'],
    description: 'Creates an assignment between an inventory source and an inventory source group.',
    operationId: 'displayvideo.inventorySourceGroups.assignedInventorySources.create',
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
        advertiserId: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'The ID of the advertiser that owns the parent inventory source group. The parent partner will not have access to this assigned inventory source.',
              in: 'query',
              name: 'advertiserId',
              schema: { type: 'string' },
              required: false,
            },
          }),
        partnerId: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'The ID of the partner that owns the parent inventory source group. Only this partner will have write access to this assigned inventory source.',
              in: 'query',
              name: 'partnerId',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        inventorySourceGroupId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. The ID of the inventory source group to which the assignment will be assigned.',
              in: 'path',
              name: 'inventorySourceGroupId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: AssignedInventorySourceSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: AssignedInventorySourceSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/display-video'],
        Oauth2c: ['https://www.googleapis.com/auth/display-video'],
      },
    ],
  })

export const deleteV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesAssignedInventorySourceIdRoute =
  createRoute({
    method: 'delete',
    path: '/v2/inventorySourceGroups/{inventorySourceGroupId}/assignedInventorySources/{assignedInventorySourceId}',
    tags: ['inventorySourceGroups'],
    description:
      'Deletes the assignment between an inventory source and an inventory source group.',
    operationId: 'displayvideo.inventorySourceGroups.assignedInventorySources.delete',
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
        advertiserId: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'The ID of the advertiser that owns the parent inventory source group. The parent partner does not have access to this assigned inventory source.',
              in: 'query',
              name: 'advertiserId',
              schema: { type: 'string' },
              required: false,
            },
          }),
        partnerId: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'The ID of the partner that owns the parent inventory source group. Only this partner has write access to this assigned inventory source.',
              in: 'query',
              name: 'partnerId',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        inventorySourceGroupId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. The ID of the inventory source group to which this assignment is assigned.',
              in: 'path',
              name: 'inventorySourceGroupId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        assignedInventorySourceId: z
          .string()
          .openapi({
            param: {
              description: 'Required. The ID of the assigned inventory source to delete.',
              in: 'path',
              name: 'assignedInventorySourceId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: EmptySchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/display-video'],
        Oauth2c: ['https://www.googleapis.com/auth/display-video'],
      },
    ],
  })

export const postV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesBulkEditRoute =
  createRoute({
    method: 'post',
    path: '/v2/inventorySourceGroups/{inventorySourceGroupId}/assignedInventorySources:bulkEdit',
    tags: ['inventorySourceGroups'],
    description:
      'Bulk edits multiple assignments between inventory sources and a single inventory source group. The operation will delete the assigned inventory sources provided in BulkEditAssignedInventorySourcesRequest.deleted_assigned_inventory_sources and then create the assigned inventory sources provided in BulkEditAssignedInventorySourcesRequest.created_assigned_inventory_sources.',
    operationId: 'displayvideo.inventorySourceGroups.assignedInventorySources.bulkEdit',
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
      }),
      params: z.object({
        inventorySourceGroupId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. The ID of the inventory source group to which the assignments are assigned.',
              in: 'path',
              name: 'inventorySourceGroupId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: BulkEditAssignedInventorySourcesRequestSchema } },
      },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: BulkEditAssignedInventorySourcesResponseSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/display-video'],
        Oauth2c: ['https://www.googleapis.com/auth/display-video'],
      },
    ],
  })

export const getV2InventorySourcesRoute = createRoute({
  method: 'get',
  path: '/v2/inventorySources',
  tags: ['inventorySources'],
  description:
    'Lists inventory sources that are accessible to the current user. The order is defined by the order_by parameter. If a filter by entity_status is not specified, inventory sources with entity status `ENTITY_STATUS_ARCHIVED` will not be included in the results.',
  operationId: 'displayvideo.inventorySources.list',
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
      advertiserId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the advertiser that has access to the inventory source.',
            in: 'query',
            name: 'advertiserId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Allows filtering by inventory source properties. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * The operator must be `EQUALS (=)`. * Supported fields: - `status.entityStatus` - `commitment` - `deliveryMethod` - `rateDetails.rateType` - `exchange` Examples: * All active inventory sources: `status.entityStatus="ENTITY_STATUS_ACTIVE"` * Inventory sources belonging to Google Ad Manager or Rubicon exchanges: `exchange="EXCHANGE_GOOGLE_AD_MANAGER" OR exchange="EXCHANGE_RUBICON"` The length of this field should be no more than 500 characters.',
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
              'Field by which to sort the list. Acceptable values are: * `displayName` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. For example, `displayName desc`.',
            in: 'query',
            name: 'orderBy',
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
              'Requested page size. Must be between `1` and `200`. If unspecified will default to `100`.',
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
            description:
              'A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListInventorySources` method. If not specified, the first page of results will be returned.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      partnerId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the partner that has access to the inventory source.',
            in: 'query',
            name: 'partnerId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListInventorySourcesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const postV2InventorySourcesRoute = createRoute({
  method: 'post',
  path: '/v2/inventorySources',
  tags: ['inventorySources'],
  description:
    'Creates a new inventory source. Returns the newly created inventory source if successful.',
  operationId: 'displayvideo.inventorySources.create',
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
      advertiserId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the advertiser that the request is being made within.',
            in: 'query',
            name: 'advertiserId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      partnerId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the partner that the request is being made within.',
            in: 'query',
            name: 'partnerId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: InventorySourceSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: InventorySourceSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const getV2InventorySourcesInventorySourceIdRoute = createRoute({
  method: 'get',
  path: '/v2/inventorySources/{inventorySourceId}',
  tags: ['inventorySources'],
  description: 'Gets an inventory source.',
  operationId: 'displayvideo.inventorySources.get',
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
      partnerId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. The ID of the DV360 partner to which the fetched inventory source is permissioned.',
            in: 'query',
            name: 'partnerId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      inventorySourceId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the inventory source to fetch.',
            in: 'path',
            name: 'inventorySourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: InventorySourceSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const patchV2InventorySourcesInventorySourceIdRoute = createRoute({
  method: 'patch',
  path: '/v2/inventorySources/{inventorySourceId}',
  tags: ['inventorySources'],
  description:
    'Updates an existing inventory source. Returns the updated inventory source if successful.',
  operationId: 'displayvideo.inventorySources.patch',
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
      advertiserId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the advertiser that the request is being made within.',
            in: 'query',
            name: 'advertiserId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      partnerId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the partner that the request is being made within.',
            in: 'query',
            name: 'partnerId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. The mask to control which fields to update.',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      inventorySourceId: z
        .string()
        .openapi({
          param: {
            description:
              'Output only. The unique ID of the inventory source. Assigned by the system.',
            in: 'path',
            name: 'inventorySourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: InventorySourceSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: InventorySourceSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const postV2InventorySourcesInventorySourceIdEditInventorySourceReadWriteAccessorsRoute =
  createRoute({
    method: 'post',
    path: '/v2/inventorySources/{inventorySourceId}:editInventorySourceReadWriteAccessors',
    tags: ['inventorySources'],
    description:
      'Edits read/write accessors of an inventory source. Returns the updated read_write_accessors for the inventory source.',
    operationId: 'displayvideo.inventorySources.editInventorySourceReadWriteAccessors',
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
      }),
      params: z.object({
        inventorySourceId: z
          .string()
          .openapi({
            param: {
              description: 'Required. The ID of inventory source to update.',
              in: 'path',
              name: 'inventorySourceId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: EditInventorySourceReadWriteAccessorsRequestSchema },
        },
      },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: InventorySourceAccessorsSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/display-video'],
        Oauth2c: ['https://www.googleapis.com/auth/display-video'],
      },
    ],
  })

export const getV2PartnersRoute = createRoute({
  method: 'get',
  path: '/v2/partners',
  tags: ['partners'],
  description:
    'Lists partners that are accessible to the current user. The order is defined by the order_by parameter.',
  operationId: 'displayvideo.partners.list',
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
              'Allows filtering by partner properties. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * The operator must be `EQUALS (=)`. * Supported fields: - `entityStatus` Examples: * All active partners: `entityStatus="ENTITY_STATUS_ACTIVE"` The length of this field should be no more than 500 characters.',
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
              'Field by which to sort the list. Acceptable values are: * `displayName` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. For example, `displayName desc`.',
            in: 'query',
            name: 'orderBy',
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
              'Requested page size. Must be between `1` and `200`. If unspecified will default to `100`.',
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
            description:
              'A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListPartners` method. If not specified, the first page of results will be returned.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListPartnersResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const getV2PartnersPartnerIdRoute = createRoute({
  method: 'get',
  path: '/v2/partners/{partnerId}',
  tags: ['partners'],
  description: 'Gets a partner.',
  operationId: 'displayvideo.partners.get',
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
    }),
    params: z.object({
      partnerId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the partner to fetch.',
            in: 'path',
            name: 'partnerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PartnerSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const getV2PartnersPartnerIdChannelsRoute = createRoute({
  method: 'get',
  path: '/v2/partners/{partnerId}/channels',
  tags: ['partners'],
  description: 'Lists channels for a partner or advertiser.',
  operationId: 'displayvideo.partners.channels.list',
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
      advertiserId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the advertiser that owns the channels.',
            in: 'query',
            name: 'advertiserId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Allows filtering by channel fields. Supported syntax: * Filter expressions for channel currently can only contain at most one * restriction. * A restriction has the form of `{field} {operator} {value}`. * The operator must be `CONTAINS (:)`. * Supported fields: - `displayName` Examples: * All channels for which the display name contains "google": `displayName : "google"`. The length of this field should be no more than 500 characters.',
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
              'Field by which to sort the list. Acceptable values are: * `displayName` (default) * `channelId` The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be added to the field name. Example: `displayName desc`.',
            in: 'query',
            name: 'orderBy',
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
              'Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.',
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
            description:
              'A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListChannels` method. If not specified, the first page of results will be returned.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      partnerId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the partner that owns the channels.',
            in: 'path',
            name: 'partnerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListChannelsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const postV2PartnersPartnerIdChannelsRoute = createRoute({
  method: 'post',
  path: '/v2/partners/{partnerId}/channels',
  tags: ['partners'],
  description: 'Creates a new channel. Returns the newly created channel if successful.',
  operationId: 'displayvideo.partners.channels.create',
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
      advertiserId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the advertiser that owns the created channel.',
            in: 'query',
            name: 'advertiserId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      partnerId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the partner that owns the created channel.',
            in: 'path',
            name: 'partnerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ChannelSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ChannelSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const patchV2PartnersPartnerIdChannelsChannelIdRoute = createRoute({
  method: 'patch',
  path: '/v2/partners/{partnerId}/channels/{channelId}',
  tags: ['partners'],
  description: 'Updates a channel. Returns the updated channel if successful.',
  operationId: 'displayvideo.partners.channels.patch',
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
      advertiserId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the advertiser that owns the created channel.',
            in: 'query',
            name: 'advertiserId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. The mask to control which fields to update.',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      partnerId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the partner that owns the created channel.',
            in: 'path',
            name: 'partnerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      channelId: z
        .string()
        .openapi({
          param: {
            description: 'Output only. The unique ID of the channel. Assigned by the system.',
            in: 'path',
            name: 'channelId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ChannelSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ChannelSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const getV2PartnersPartnerIdChannelsChannelIdSitesRoute = createRoute({
  method: 'get',
  path: '/v2/partners/{partnerId}/channels/{channelId}/sites',
  tags: ['partners'],
  description: 'Lists sites in a channel.',
  operationId: 'displayvideo.partners.channels.sites.list',
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
      advertiserId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the advertiser that owns the parent channel.',
            in: 'query',
            name: 'advertiserId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Allows filtering by site fields. Supported syntax: * Filter expressions for site currently can only contain at most one * restriction. * A restriction has the form of `{field} {operator} {value}`. * The operator must be `CONTAINS (:)`. * Supported fields: - `urlOrAppId` Examples: * All sites for which the URL or app ID contains "google": `urlOrAppId : "google"`',
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
              'Field by which to sort the list. Acceptable values are: * `urlOrAppId` (default) The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be added to the field name. Example: `urlOrAppId desc`.',
            in: 'query',
            name: 'orderBy',
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
              'Requested page size. Must be between `1` and `10000`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.',
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
            description:
              'A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListSites` method. If not specified, the first page of results will be returned.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      partnerId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the partner that owns the parent channel.',
            in: 'path',
            name: 'partnerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      channelId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The ID of the parent channel to which the requested sites belong.',
            in: 'path',
            name: 'channelId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListSitesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const deleteV2PartnersPartnerIdChannelsChannelIdSitesUrlOrAppIdRoute = createRoute({
  method: 'delete',
  path: '/v2/partners/{partnerId}/channels/{channelId}/sites/{urlOrAppId}',
  tags: ['partners'],
  description: 'Deletes a site from a channel.',
  operationId: 'displayvideo.partners.channels.sites.delete',
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
      advertiserId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the advertiser that owns the parent channel.',
            in: 'query',
            name: 'advertiserId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      partnerId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the partner that owns the parent channel.',
            in: 'path',
            name: 'partnerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      channelId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the parent channel to which the site belongs.',
            in: 'path',
            name: 'channelId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      urlOrAppId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The URL or app ID of the site to delete.',
            in: 'path',
            name: 'urlOrAppId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const postV2PartnersPartnerIdChannelsChannelIdSitesBulkEditRoute = createRoute({
  method: 'post',
  path: '/v2/partners/{partnerId}/channels/{channelId}/sites:bulkEdit',
  tags: ['partners'],
  description:
    'Bulk edits sites under a single channel. The operation will delete the sites provided in BulkEditSitesRequest.deleted_sites and then create the sites provided in BulkEditSitesRequest.created_sites.',
  operationId: 'displayvideo.partners.channels.sites.bulkEdit',
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
    }),
    params: z.object({
      partnerId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the partner that owns the parent channel.',
            in: 'path',
            name: 'partnerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      channelId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the parent channel to which the sites belong.',
            in: 'path',
            name: 'channelId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BulkEditSitesRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BulkEditSitesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const postV2PartnersPartnerIdChannelsChannelIdSitesReplaceRoute = createRoute({
  method: 'post',
  path: '/v2/partners/{partnerId}/channels/{channelId}/sites:replace',
  tags: ['partners'],
  description:
    'Replaces all of the sites under a single channel. The operation will replace the sites under a channel with the sites provided in ReplaceSitesRequest.new_sites.',
  operationId: 'displayvideo.partners.channels.sites.replace',
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
    }),
    params: z.object({
      partnerId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the partner that owns the parent channel.',
            in: 'path',
            name: 'partnerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      channelId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the parent channel whose sites will be replaced.',
            in: 'path',
            name: 'channelId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ReplaceSitesRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ReplaceSitesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const getV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsRoute =
  createRoute({
    method: 'get',
    path: '/v2/partners/{partnerId}/targetingTypes/{targetingType}/assignedTargetingOptions',
    tags: ['partners'],
    description: 'Lists the targeting options assigned to a partner.',
    operationId: 'displayvideo.partners.targetingTypes.assignedTargetingOptions.list',
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
                'Allows filtering by assigned targeting option properties. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the logical operator `OR`. * A restriction has the form of `{field} {operator} {value}`. * The operator must be `EQUALS (=)`. * Supported fields: - `assignedTargetingOptionId` Examples: * AssignedTargetingOption with ID 123456 `assignedTargetingOptionId="123456"` The length of this field should be no more than 500 characters.',
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
                'Field by which to sort the list. Acceptable values are: * `assignedTargetingOptionId` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `assignedTargetingOptionId desc`.',
              in: 'query',
              name: 'orderBy',
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
                'Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.',
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
              description:
                'A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListPartnerAssignedTargetingOptions` method. If not specified, the first page of results will be returned.',
              in: 'query',
              name: 'pageToken',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        partnerId: z
          .string()
          .openapi({
            param: {
              description: 'Required. The ID of the partner.',
              in: 'path',
              name: 'partnerId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        targetingType: z
          .enum([
            'TARGETING_TYPE_UNSPECIFIED',
            'TARGETING_TYPE_CHANNEL',
            'TARGETING_TYPE_APP_CATEGORY',
            'TARGETING_TYPE_APP',
            'TARGETING_TYPE_URL',
            'TARGETING_TYPE_DAY_AND_TIME',
            'TARGETING_TYPE_AGE_RANGE',
            'TARGETING_TYPE_REGIONAL_LOCATION_LIST',
            'TARGETING_TYPE_PROXIMITY_LOCATION_LIST',
            'TARGETING_TYPE_GENDER',
            'TARGETING_TYPE_VIDEO_PLAYER_SIZE',
            'TARGETING_TYPE_USER_REWARDED_CONTENT',
            'TARGETING_TYPE_PARENTAL_STATUS',
            'TARGETING_TYPE_CONTENT_INSTREAM_POSITION',
            'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION',
            'TARGETING_TYPE_DEVICE_TYPE',
            'TARGETING_TYPE_AUDIENCE_GROUP',
            'TARGETING_TYPE_BROWSER',
            'TARGETING_TYPE_HOUSEHOLD_INCOME',
            'TARGETING_TYPE_ON_SCREEN_POSITION',
            'TARGETING_TYPE_THIRD_PARTY_VERIFIER',
            'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION',
            'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION',
            'TARGETING_TYPE_ENVIRONMENT',
            'TARGETING_TYPE_CARRIER_AND_ISP',
            'TARGETING_TYPE_OPERATING_SYSTEM',
            'TARGETING_TYPE_DEVICE_MAKE_MODEL',
            'TARGETING_TYPE_KEYWORD',
            'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST',
            'TARGETING_TYPE_VIEWABILITY',
            'TARGETING_TYPE_CATEGORY',
            'TARGETING_TYPE_INVENTORY_SOURCE',
            'TARGETING_TYPE_LANGUAGE',
            'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS',
            'TARGETING_TYPE_GEO_REGION',
            'TARGETING_TYPE_INVENTORY_SOURCE_GROUP',
            'TARGETING_TYPE_EXCHANGE',
            'TARGETING_TYPE_SUB_EXCHANGE',
            'TARGETING_TYPE_POI',
            'TARGETING_TYPE_BUSINESS_CHAIN',
            'TARGETING_TYPE_CONTENT_DURATION',
            'TARGETING_TYPE_CONTENT_STREAM_TYPE',
            'TARGETING_TYPE_NATIVE_CONTENT_POSITION',
            'TARGETING_TYPE_OMID',
            'TARGETING_TYPE_AUDIO_CONTENT_TYPE',
            'TARGETING_TYPE_CONTENT_GENRE',
            'TARGETING_TYPE_YOUTUBE_VIDEO',
            'TARGETING_TYPE_YOUTUBE_CHANNEL',
            'TARGETING_TYPE_SESSION_POSITION',
          ])
          .openapi({
            param: {
              description:
                'Required. Identifies the type of assigned targeting options to list. Supported targeting types: * `TARGETING_TYPE_CHANNEL`',
              in: 'path',
              name: 'targetingType',
              required: true,
              schema: {
                enum: [
                  'TARGETING_TYPE_UNSPECIFIED',
                  'TARGETING_TYPE_CHANNEL',
                  'TARGETING_TYPE_APP_CATEGORY',
                  'TARGETING_TYPE_APP',
                  'TARGETING_TYPE_URL',
                  'TARGETING_TYPE_DAY_AND_TIME',
                  'TARGETING_TYPE_AGE_RANGE',
                  'TARGETING_TYPE_REGIONAL_LOCATION_LIST',
                  'TARGETING_TYPE_PROXIMITY_LOCATION_LIST',
                  'TARGETING_TYPE_GENDER',
                  'TARGETING_TYPE_VIDEO_PLAYER_SIZE',
                  'TARGETING_TYPE_USER_REWARDED_CONTENT',
                  'TARGETING_TYPE_PARENTAL_STATUS',
                  'TARGETING_TYPE_CONTENT_INSTREAM_POSITION',
                  'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION',
                  'TARGETING_TYPE_DEVICE_TYPE',
                  'TARGETING_TYPE_AUDIENCE_GROUP',
                  'TARGETING_TYPE_BROWSER',
                  'TARGETING_TYPE_HOUSEHOLD_INCOME',
                  'TARGETING_TYPE_ON_SCREEN_POSITION',
                  'TARGETING_TYPE_THIRD_PARTY_VERIFIER',
                  'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION',
                  'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION',
                  'TARGETING_TYPE_ENVIRONMENT',
                  'TARGETING_TYPE_CARRIER_AND_ISP',
                  'TARGETING_TYPE_OPERATING_SYSTEM',
                  'TARGETING_TYPE_DEVICE_MAKE_MODEL',
                  'TARGETING_TYPE_KEYWORD',
                  'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST',
                  'TARGETING_TYPE_VIEWABILITY',
                  'TARGETING_TYPE_CATEGORY',
                  'TARGETING_TYPE_INVENTORY_SOURCE',
                  'TARGETING_TYPE_LANGUAGE',
                  'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS',
                  'TARGETING_TYPE_GEO_REGION',
                  'TARGETING_TYPE_INVENTORY_SOURCE_GROUP',
                  'TARGETING_TYPE_EXCHANGE',
                  'TARGETING_TYPE_SUB_EXCHANGE',
                  'TARGETING_TYPE_POI',
                  'TARGETING_TYPE_BUSINESS_CHAIN',
                  'TARGETING_TYPE_CONTENT_DURATION',
                  'TARGETING_TYPE_CONTENT_STREAM_TYPE',
                  'TARGETING_TYPE_NATIVE_CONTENT_POSITION',
                  'TARGETING_TYPE_OMID',
                  'TARGETING_TYPE_AUDIO_CONTENT_TYPE',
                  'TARGETING_TYPE_CONTENT_GENRE',
                  'TARGETING_TYPE_YOUTUBE_VIDEO',
                  'TARGETING_TYPE_YOUTUBE_CHANNEL',
                  'TARGETING_TYPE_SESSION_POSITION',
                ],
                type: 'string',
              },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': { schema: ListPartnerAssignedTargetingOptionsResponseSchema },
        },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/display-video'],
        Oauth2c: ['https://www.googleapis.com/auth/display-video'],
      },
    ],
  })

export const postV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsRoute =
  createRoute({
    method: 'post',
    path: '/v2/partners/{partnerId}/targetingTypes/{targetingType}/assignedTargetingOptions',
    tags: ['partners'],
    description:
      'Assigns a targeting option to a partner. Returns the assigned targeting option if successful.',
    operationId: 'displayvideo.partners.targetingTypes.assignedTargetingOptions.create',
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
      }),
      params: z.object({
        partnerId: z
          .string()
          .openapi({
            param: {
              description: 'Required. The ID of the partner.',
              in: 'path',
              name: 'partnerId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        targetingType: z
          .enum([
            'TARGETING_TYPE_UNSPECIFIED',
            'TARGETING_TYPE_CHANNEL',
            'TARGETING_TYPE_APP_CATEGORY',
            'TARGETING_TYPE_APP',
            'TARGETING_TYPE_URL',
            'TARGETING_TYPE_DAY_AND_TIME',
            'TARGETING_TYPE_AGE_RANGE',
            'TARGETING_TYPE_REGIONAL_LOCATION_LIST',
            'TARGETING_TYPE_PROXIMITY_LOCATION_LIST',
            'TARGETING_TYPE_GENDER',
            'TARGETING_TYPE_VIDEO_PLAYER_SIZE',
            'TARGETING_TYPE_USER_REWARDED_CONTENT',
            'TARGETING_TYPE_PARENTAL_STATUS',
            'TARGETING_TYPE_CONTENT_INSTREAM_POSITION',
            'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION',
            'TARGETING_TYPE_DEVICE_TYPE',
            'TARGETING_TYPE_AUDIENCE_GROUP',
            'TARGETING_TYPE_BROWSER',
            'TARGETING_TYPE_HOUSEHOLD_INCOME',
            'TARGETING_TYPE_ON_SCREEN_POSITION',
            'TARGETING_TYPE_THIRD_PARTY_VERIFIER',
            'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION',
            'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION',
            'TARGETING_TYPE_ENVIRONMENT',
            'TARGETING_TYPE_CARRIER_AND_ISP',
            'TARGETING_TYPE_OPERATING_SYSTEM',
            'TARGETING_TYPE_DEVICE_MAKE_MODEL',
            'TARGETING_TYPE_KEYWORD',
            'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST',
            'TARGETING_TYPE_VIEWABILITY',
            'TARGETING_TYPE_CATEGORY',
            'TARGETING_TYPE_INVENTORY_SOURCE',
            'TARGETING_TYPE_LANGUAGE',
            'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS',
            'TARGETING_TYPE_GEO_REGION',
            'TARGETING_TYPE_INVENTORY_SOURCE_GROUP',
            'TARGETING_TYPE_EXCHANGE',
            'TARGETING_TYPE_SUB_EXCHANGE',
            'TARGETING_TYPE_POI',
            'TARGETING_TYPE_BUSINESS_CHAIN',
            'TARGETING_TYPE_CONTENT_DURATION',
            'TARGETING_TYPE_CONTENT_STREAM_TYPE',
            'TARGETING_TYPE_NATIVE_CONTENT_POSITION',
            'TARGETING_TYPE_OMID',
            'TARGETING_TYPE_AUDIO_CONTENT_TYPE',
            'TARGETING_TYPE_CONTENT_GENRE',
            'TARGETING_TYPE_YOUTUBE_VIDEO',
            'TARGETING_TYPE_YOUTUBE_CHANNEL',
            'TARGETING_TYPE_SESSION_POSITION',
          ])
          .openapi({
            param: {
              description:
                'Required. Identifies the type of this assigned targeting option. Supported targeting types: * `TARGETING_TYPE_CHANNEL`',
              in: 'path',
              name: 'targetingType',
              required: true,
              schema: {
                enum: [
                  'TARGETING_TYPE_UNSPECIFIED',
                  'TARGETING_TYPE_CHANNEL',
                  'TARGETING_TYPE_APP_CATEGORY',
                  'TARGETING_TYPE_APP',
                  'TARGETING_TYPE_URL',
                  'TARGETING_TYPE_DAY_AND_TIME',
                  'TARGETING_TYPE_AGE_RANGE',
                  'TARGETING_TYPE_REGIONAL_LOCATION_LIST',
                  'TARGETING_TYPE_PROXIMITY_LOCATION_LIST',
                  'TARGETING_TYPE_GENDER',
                  'TARGETING_TYPE_VIDEO_PLAYER_SIZE',
                  'TARGETING_TYPE_USER_REWARDED_CONTENT',
                  'TARGETING_TYPE_PARENTAL_STATUS',
                  'TARGETING_TYPE_CONTENT_INSTREAM_POSITION',
                  'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION',
                  'TARGETING_TYPE_DEVICE_TYPE',
                  'TARGETING_TYPE_AUDIENCE_GROUP',
                  'TARGETING_TYPE_BROWSER',
                  'TARGETING_TYPE_HOUSEHOLD_INCOME',
                  'TARGETING_TYPE_ON_SCREEN_POSITION',
                  'TARGETING_TYPE_THIRD_PARTY_VERIFIER',
                  'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION',
                  'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION',
                  'TARGETING_TYPE_ENVIRONMENT',
                  'TARGETING_TYPE_CARRIER_AND_ISP',
                  'TARGETING_TYPE_OPERATING_SYSTEM',
                  'TARGETING_TYPE_DEVICE_MAKE_MODEL',
                  'TARGETING_TYPE_KEYWORD',
                  'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST',
                  'TARGETING_TYPE_VIEWABILITY',
                  'TARGETING_TYPE_CATEGORY',
                  'TARGETING_TYPE_INVENTORY_SOURCE',
                  'TARGETING_TYPE_LANGUAGE',
                  'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS',
                  'TARGETING_TYPE_GEO_REGION',
                  'TARGETING_TYPE_INVENTORY_SOURCE_GROUP',
                  'TARGETING_TYPE_EXCHANGE',
                  'TARGETING_TYPE_SUB_EXCHANGE',
                  'TARGETING_TYPE_POI',
                  'TARGETING_TYPE_BUSINESS_CHAIN',
                  'TARGETING_TYPE_CONTENT_DURATION',
                  'TARGETING_TYPE_CONTENT_STREAM_TYPE',
                  'TARGETING_TYPE_NATIVE_CONTENT_POSITION',
                  'TARGETING_TYPE_OMID',
                  'TARGETING_TYPE_AUDIO_CONTENT_TYPE',
                  'TARGETING_TYPE_CONTENT_GENRE',
                  'TARGETING_TYPE_YOUTUBE_VIDEO',
                  'TARGETING_TYPE_YOUTUBE_CHANNEL',
                  'TARGETING_TYPE_SESSION_POSITION',
                ],
                type: 'string',
              },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: AssignedTargetingOptionSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: AssignedTargetingOptionSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/display-video'],
        Oauth2c: ['https://www.googleapis.com/auth/display-video'],
      },
    ],
  })

export const getV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdRoute =
  createRoute({
    method: 'get',
    path: '/v2/partners/{partnerId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId}',
    tags: ['partners'],
    description: 'Gets a single targeting option assigned to a partner.',
    operationId: 'displayvideo.partners.targetingTypes.assignedTargetingOptions.get',
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
      }),
      params: z.object({
        partnerId: z
          .string()
          .openapi({
            param: {
              description: 'Required. The ID of the partner.',
              in: 'path',
              name: 'partnerId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        targetingType: z
          .enum([
            'TARGETING_TYPE_UNSPECIFIED',
            'TARGETING_TYPE_CHANNEL',
            'TARGETING_TYPE_APP_CATEGORY',
            'TARGETING_TYPE_APP',
            'TARGETING_TYPE_URL',
            'TARGETING_TYPE_DAY_AND_TIME',
            'TARGETING_TYPE_AGE_RANGE',
            'TARGETING_TYPE_REGIONAL_LOCATION_LIST',
            'TARGETING_TYPE_PROXIMITY_LOCATION_LIST',
            'TARGETING_TYPE_GENDER',
            'TARGETING_TYPE_VIDEO_PLAYER_SIZE',
            'TARGETING_TYPE_USER_REWARDED_CONTENT',
            'TARGETING_TYPE_PARENTAL_STATUS',
            'TARGETING_TYPE_CONTENT_INSTREAM_POSITION',
            'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION',
            'TARGETING_TYPE_DEVICE_TYPE',
            'TARGETING_TYPE_AUDIENCE_GROUP',
            'TARGETING_TYPE_BROWSER',
            'TARGETING_TYPE_HOUSEHOLD_INCOME',
            'TARGETING_TYPE_ON_SCREEN_POSITION',
            'TARGETING_TYPE_THIRD_PARTY_VERIFIER',
            'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION',
            'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION',
            'TARGETING_TYPE_ENVIRONMENT',
            'TARGETING_TYPE_CARRIER_AND_ISP',
            'TARGETING_TYPE_OPERATING_SYSTEM',
            'TARGETING_TYPE_DEVICE_MAKE_MODEL',
            'TARGETING_TYPE_KEYWORD',
            'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST',
            'TARGETING_TYPE_VIEWABILITY',
            'TARGETING_TYPE_CATEGORY',
            'TARGETING_TYPE_INVENTORY_SOURCE',
            'TARGETING_TYPE_LANGUAGE',
            'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS',
            'TARGETING_TYPE_GEO_REGION',
            'TARGETING_TYPE_INVENTORY_SOURCE_GROUP',
            'TARGETING_TYPE_EXCHANGE',
            'TARGETING_TYPE_SUB_EXCHANGE',
            'TARGETING_TYPE_POI',
            'TARGETING_TYPE_BUSINESS_CHAIN',
            'TARGETING_TYPE_CONTENT_DURATION',
            'TARGETING_TYPE_CONTENT_STREAM_TYPE',
            'TARGETING_TYPE_NATIVE_CONTENT_POSITION',
            'TARGETING_TYPE_OMID',
            'TARGETING_TYPE_AUDIO_CONTENT_TYPE',
            'TARGETING_TYPE_CONTENT_GENRE',
            'TARGETING_TYPE_YOUTUBE_VIDEO',
            'TARGETING_TYPE_YOUTUBE_CHANNEL',
            'TARGETING_TYPE_SESSION_POSITION',
          ])
          .openapi({
            param: {
              description:
                'Required. Identifies the type of this assigned targeting option. Supported targeting types: * `TARGETING_TYPE_CHANNEL`',
              in: 'path',
              name: 'targetingType',
              required: true,
              schema: {
                enum: [
                  'TARGETING_TYPE_UNSPECIFIED',
                  'TARGETING_TYPE_CHANNEL',
                  'TARGETING_TYPE_APP_CATEGORY',
                  'TARGETING_TYPE_APP',
                  'TARGETING_TYPE_URL',
                  'TARGETING_TYPE_DAY_AND_TIME',
                  'TARGETING_TYPE_AGE_RANGE',
                  'TARGETING_TYPE_REGIONAL_LOCATION_LIST',
                  'TARGETING_TYPE_PROXIMITY_LOCATION_LIST',
                  'TARGETING_TYPE_GENDER',
                  'TARGETING_TYPE_VIDEO_PLAYER_SIZE',
                  'TARGETING_TYPE_USER_REWARDED_CONTENT',
                  'TARGETING_TYPE_PARENTAL_STATUS',
                  'TARGETING_TYPE_CONTENT_INSTREAM_POSITION',
                  'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION',
                  'TARGETING_TYPE_DEVICE_TYPE',
                  'TARGETING_TYPE_AUDIENCE_GROUP',
                  'TARGETING_TYPE_BROWSER',
                  'TARGETING_TYPE_HOUSEHOLD_INCOME',
                  'TARGETING_TYPE_ON_SCREEN_POSITION',
                  'TARGETING_TYPE_THIRD_PARTY_VERIFIER',
                  'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION',
                  'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION',
                  'TARGETING_TYPE_ENVIRONMENT',
                  'TARGETING_TYPE_CARRIER_AND_ISP',
                  'TARGETING_TYPE_OPERATING_SYSTEM',
                  'TARGETING_TYPE_DEVICE_MAKE_MODEL',
                  'TARGETING_TYPE_KEYWORD',
                  'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST',
                  'TARGETING_TYPE_VIEWABILITY',
                  'TARGETING_TYPE_CATEGORY',
                  'TARGETING_TYPE_INVENTORY_SOURCE',
                  'TARGETING_TYPE_LANGUAGE',
                  'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS',
                  'TARGETING_TYPE_GEO_REGION',
                  'TARGETING_TYPE_INVENTORY_SOURCE_GROUP',
                  'TARGETING_TYPE_EXCHANGE',
                  'TARGETING_TYPE_SUB_EXCHANGE',
                  'TARGETING_TYPE_POI',
                  'TARGETING_TYPE_BUSINESS_CHAIN',
                  'TARGETING_TYPE_CONTENT_DURATION',
                  'TARGETING_TYPE_CONTENT_STREAM_TYPE',
                  'TARGETING_TYPE_NATIVE_CONTENT_POSITION',
                  'TARGETING_TYPE_OMID',
                  'TARGETING_TYPE_AUDIO_CONTENT_TYPE',
                  'TARGETING_TYPE_CONTENT_GENRE',
                  'TARGETING_TYPE_YOUTUBE_VIDEO',
                  'TARGETING_TYPE_YOUTUBE_CHANNEL',
                  'TARGETING_TYPE_SESSION_POSITION',
                ],
                type: 'string',
              },
            },
          }),
        assignedTargetingOptionId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. An identifier unique to the targeting type in this partner that identifies the assigned targeting option being requested.',
              in: 'path',
              name: 'assignedTargetingOptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: AssignedTargetingOptionSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/display-video'],
        Oauth2c: ['https://www.googleapis.com/auth/display-video'],
      },
    ],
  })

export const deleteV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdRoute =
  createRoute({
    method: 'delete',
    path: '/v2/partners/{partnerId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId}',
    tags: ['partners'],
    description: 'Deletes an assigned targeting option from a partner.',
    operationId: 'displayvideo.partners.targetingTypes.assignedTargetingOptions.delete',
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
      }),
      params: z.object({
        partnerId: z
          .string()
          .openapi({
            param: {
              description: 'Required. The ID of the partner.',
              in: 'path',
              name: 'partnerId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        targetingType: z
          .enum([
            'TARGETING_TYPE_UNSPECIFIED',
            'TARGETING_TYPE_CHANNEL',
            'TARGETING_TYPE_APP_CATEGORY',
            'TARGETING_TYPE_APP',
            'TARGETING_TYPE_URL',
            'TARGETING_TYPE_DAY_AND_TIME',
            'TARGETING_TYPE_AGE_RANGE',
            'TARGETING_TYPE_REGIONAL_LOCATION_LIST',
            'TARGETING_TYPE_PROXIMITY_LOCATION_LIST',
            'TARGETING_TYPE_GENDER',
            'TARGETING_TYPE_VIDEO_PLAYER_SIZE',
            'TARGETING_TYPE_USER_REWARDED_CONTENT',
            'TARGETING_TYPE_PARENTAL_STATUS',
            'TARGETING_TYPE_CONTENT_INSTREAM_POSITION',
            'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION',
            'TARGETING_TYPE_DEVICE_TYPE',
            'TARGETING_TYPE_AUDIENCE_GROUP',
            'TARGETING_TYPE_BROWSER',
            'TARGETING_TYPE_HOUSEHOLD_INCOME',
            'TARGETING_TYPE_ON_SCREEN_POSITION',
            'TARGETING_TYPE_THIRD_PARTY_VERIFIER',
            'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION',
            'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION',
            'TARGETING_TYPE_ENVIRONMENT',
            'TARGETING_TYPE_CARRIER_AND_ISP',
            'TARGETING_TYPE_OPERATING_SYSTEM',
            'TARGETING_TYPE_DEVICE_MAKE_MODEL',
            'TARGETING_TYPE_KEYWORD',
            'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST',
            'TARGETING_TYPE_VIEWABILITY',
            'TARGETING_TYPE_CATEGORY',
            'TARGETING_TYPE_INVENTORY_SOURCE',
            'TARGETING_TYPE_LANGUAGE',
            'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS',
            'TARGETING_TYPE_GEO_REGION',
            'TARGETING_TYPE_INVENTORY_SOURCE_GROUP',
            'TARGETING_TYPE_EXCHANGE',
            'TARGETING_TYPE_SUB_EXCHANGE',
            'TARGETING_TYPE_POI',
            'TARGETING_TYPE_BUSINESS_CHAIN',
            'TARGETING_TYPE_CONTENT_DURATION',
            'TARGETING_TYPE_CONTENT_STREAM_TYPE',
            'TARGETING_TYPE_NATIVE_CONTENT_POSITION',
            'TARGETING_TYPE_OMID',
            'TARGETING_TYPE_AUDIO_CONTENT_TYPE',
            'TARGETING_TYPE_CONTENT_GENRE',
            'TARGETING_TYPE_YOUTUBE_VIDEO',
            'TARGETING_TYPE_YOUTUBE_CHANNEL',
            'TARGETING_TYPE_SESSION_POSITION',
          ])
          .openapi({
            param: {
              description:
                'Required. Identifies the type of this assigned targeting option. Supported targeting types: * `TARGETING_TYPE_CHANNEL`',
              in: 'path',
              name: 'targetingType',
              required: true,
              schema: {
                enum: [
                  'TARGETING_TYPE_UNSPECIFIED',
                  'TARGETING_TYPE_CHANNEL',
                  'TARGETING_TYPE_APP_CATEGORY',
                  'TARGETING_TYPE_APP',
                  'TARGETING_TYPE_URL',
                  'TARGETING_TYPE_DAY_AND_TIME',
                  'TARGETING_TYPE_AGE_RANGE',
                  'TARGETING_TYPE_REGIONAL_LOCATION_LIST',
                  'TARGETING_TYPE_PROXIMITY_LOCATION_LIST',
                  'TARGETING_TYPE_GENDER',
                  'TARGETING_TYPE_VIDEO_PLAYER_SIZE',
                  'TARGETING_TYPE_USER_REWARDED_CONTENT',
                  'TARGETING_TYPE_PARENTAL_STATUS',
                  'TARGETING_TYPE_CONTENT_INSTREAM_POSITION',
                  'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION',
                  'TARGETING_TYPE_DEVICE_TYPE',
                  'TARGETING_TYPE_AUDIENCE_GROUP',
                  'TARGETING_TYPE_BROWSER',
                  'TARGETING_TYPE_HOUSEHOLD_INCOME',
                  'TARGETING_TYPE_ON_SCREEN_POSITION',
                  'TARGETING_TYPE_THIRD_PARTY_VERIFIER',
                  'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION',
                  'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION',
                  'TARGETING_TYPE_ENVIRONMENT',
                  'TARGETING_TYPE_CARRIER_AND_ISP',
                  'TARGETING_TYPE_OPERATING_SYSTEM',
                  'TARGETING_TYPE_DEVICE_MAKE_MODEL',
                  'TARGETING_TYPE_KEYWORD',
                  'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST',
                  'TARGETING_TYPE_VIEWABILITY',
                  'TARGETING_TYPE_CATEGORY',
                  'TARGETING_TYPE_INVENTORY_SOURCE',
                  'TARGETING_TYPE_LANGUAGE',
                  'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS',
                  'TARGETING_TYPE_GEO_REGION',
                  'TARGETING_TYPE_INVENTORY_SOURCE_GROUP',
                  'TARGETING_TYPE_EXCHANGE',
                  'TARGETING_TYPE_SUB_EXCHANGE',
                  'TARGETING_TYPE_POI',
                  'TARGETING_TYPE_BUSINESS_CHAIN',
                  'TARGETING_TYPE_CONTENT_DURATION',
                  'TARGETING_TYPE_CONTENT_STREAM_TYPE',
                  'TARGETING_TYPE_NATIVE_CONTENT_POSITION',
                  'TARGETING_TYPE_OMID',
                  'TARGETING_TYPE_AUDIO_CONTENT_TYPE',
                  'TARGETING_TYPE_CONTENT_GENRE',
                  'TARGETING_TYPE_YOUTUBE_VIDEO',
                  'TARGETING_TYPE_YOUTUBE_CHANNEL',
                  'TARGETING_TYPE_SESSION_POSITION',
                ],
                type: 'string',
              },
            },
          }),
        assignedTargetingOptionId: z
          .string()
          .openapi({
            param: {
              description: 'Required. The ID of the assigned targeting option to delete.',
              in: 'path',
              name: 'assignedTargetingOptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: EmptySchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/display-video'],
        Oauth2c: ['https://www.googleapis.com/auth/display-video'],
      },
    ],
  })

export const postV2PartnersPartnerIdEditAssignedTargetingOptionsRoute = createRoute({
  method: 'post',
  path: '/v2/partners/{partnerId}:editAssignedTargetingOptions',
  tags: ['partners'],
  description:
    'Edits targeting options under a single partner. The operation will delete the assigned targeting options provided in BulkEditPartnerAssignedTargetingOptionsRequest.deleteRequests and then create the assigned targeting options provided in BulkEditPartnerAssignedTargetingOptionsRequest.createRequests .',
  operationId: 'displayvideo.partners.editAssignedTargetingOptions',
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
    }),
    params: z.object({
      partnerId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the partner.',
            in: 'path',
            name: 'partnerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: BulkEditPartnerAssignedTargetingOptionsRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: BulkEditPartnerAssignedTargetingOptionsResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const postV2SdfdownloadtasksRoute = createRoute({
  method: 'post',
  path: '/v2/sdfdownloadtasks',
  tags: ['sdfdownloadtasks'],
  description:
    'Creates an SDF Download Task. Returns an Operation. An SDF Download Task is a long-running, asynchronous operation. The metadata type of this operation is SdfDownloadTaskMetadata. If the request is successful, the response type of the operation is SdfDownloadTask. The response will not include the download files, which must be retrieved with media.download. The state of operation can be retrieved with sdfdownloadtask.operations.get. Any errors can be found in the error.message. Note that error.details is expected to be empty.',
  operationId: 'displayvideo.sdfdownloadtasks.create',
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
    }),
    body: { content: { 'application/json': { schema: CreateSdfDownloadTaskRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const getV2TargetingTypesTargetingTypeTargetingOptionsRoute = createRoute({
  method: 'get',
  path: '/v2/targetingTypes/{targetingType}/targetingOptions',
  tags: ['targetingTypes'],
  description: 'Lists targeting options of a given type.',
  operationId: 'displayvideo.targetingTypes.targetingOptions.list',
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
      advertiserId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. The Advertiser this request is being made in the context of.',
            in: 'query',
            name: 'advertiserId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Allows filtering by targeting option properties. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `OR` logical operators. * A restriction has the form of `{field} {operator} {value}`. * The operator must be "=" (equal sign). * Supported fields: - `carrierAndIspDetails.type` - `geoRegionDetails.geoRegionType` - `targetingOptionId` Examples: * All `GEO REGION` targeting options that belong to sub type `GEO_REGION_TYPE_COUNTRY` or `GEO_REGION_TYPE_STATE`: `geoRegionDetails.geoRegionType="GEO_REGION_TYPE_COUNTRY" OR geoRegionDetails.geoRegionType="GEO_REGION_TYPE_STATE"` * All `CARRIER AND ISP` targeting options that belong to sub type `CARRIER_AND_ISP_TYPE_CARRIER`: `carrierAndIspDetails.type="CARRIER_AND_ISP_TYPE_CARRIER"`. The length of this field should be no more than 500 characters.',
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
              'Field by which to sort the list. Acceptable values are: * `targetingOptionId` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `targetingOptionId desc`.',
            in: 'query',
            name: 'orderBy',
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
              'Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.',
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
            description:
              'A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListTargetingOptions` method. If not specified, the first page of results will be returned.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      targetingType: z
        .enum([
          'TARGETING_TYPE_UNSPECIFIED',
          'TARGETING_TYPE_CHANNEL',
          'TARGETING_TYPE_APP_CATEGORY',
          'TARGETING_TYPE_APP',
          'TARGETING_TYPE_URL',
          'TARGETING_TYPE_DAY_AND_TIME',
          'TARGETING_TYPE_AGE_RANGE',
          'TARGETING_TYPE_REGIONAL_LOCATION_LIST',
          'TARGETING_TYPE_PROXIMITY_LOCATION_LIST',
          'TARGETING_TYPE_GENDER',
          'TARGETING_TYPE_VIDEO_PLAYER_SIZE',
          'TARGETING_TYPE_USER_REWARDED_CONTENT',
          'TARGETING_TYPE_PARENTAL_STATUS',
          'TARGETING_TYPE_CONTENT_INSTREAM_POSITION',
          'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION',
          'TARGETING_TYPE_DEVICE_TYPE',
          'TARGETING_TYPE_AUDIENCE_GROUP',
          'TARGETING_TYPE_BROWSER',
          'TARGETING_TYPE_HOUSEHOLD_INCOME',
          'TARGETING_TYPE_ON_SCREEN_POSITION',
          'TARGETING_TYPE_THIRD_PARTY_VERIFIER',
          'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION',
          'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION',
          'TARGETING_TYPE_ENVIRONMENT',
          'TARGETING_TYPE_CARRIER_AND_ISP',
          'TARGETING_TYPE_OPERATING_SYSTEM',
          'TARGETING_TYPE_DEVICE_MAKE_MODEL',
          'TARGETING_TYPE_KEYWORD',
          'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST',
          'TARGETING_TYPE_VIEWABILITY',
          'TARGETING_TYPE_CATEGORY',
          'TARGETING_TYPE_INVENTORY_SOURCE',
          'TARGETING_TYPE_LANGUAGE',
          'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS',
          'TARGETING_TYPE_GEO_REGION',
          'TARGETING_TYPE_INVENTORY_SOURCE_GROUP',
          'TARGETING_TYPE_EXCHANGE',
          'TARGETING_TYPE_SUB_EXCHANGE',
          'TARGETING_TYPE_POI',
          'TARGETING_TYPE_BUSINESS_CHAIN',
          'TARGETING_TYPE_CONTENT_DURATION',
          'TARGETING_TYPE_CONTENT_STREAM_TYPE',
          'TARGETING_TYPE_NATIVE_CONTENT_POSITION',
          'TARGETING_TYPE_OMID',
          'TARGETING_TYPE_AUDIO_CONTENT_TYPE',
          'TARGETING_TYPE_CONTENT_GENRE',
          'TARGETING_TYPE_YOUTUBE_VIDEO',
          'TARGETING_TYPE_YOUTUBE_CHANNEL',
          'TARGETING_TYPE_SESSION_POSITION',
        ])
        .openapi({
          param: {
            description:
              'Required. The type of targeting option to be listed. Accepted values are: * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_VIDEO_PLAYER_SIZE` * `TARGETING_TYPE_USER_REWARDED_CONTENT` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_DEVICE_TYPE` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_CARRIER_AND_ISP` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_VIEWABILITY` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_NATIVE_CONTENT_POSITION` * `TARGETING_TYPE_OMID`',
            in: 'path',
            name: 'targetingType',
            required: true,
            schema: {
              enum: [
                'TARGETING_TYPE_UNSPECIFIED',
                'TARGETING_TYPE_CHANNEL',
                'TARGETING_TYPE_APP_CATEGORY',
                'TARGETING_TYPE_APP',
                'TARGETING_TYPE_URL',
                'TARGETING_TYPE_DAY_AND_TIME',
                'TARGETING_TYPE_AGE_RANGE',
                'TARGETING_TYPE_REGIONAL_LOCATION_LIST',
                'TARGETING_TYPE_PROXIMITY_LOCATION_LIST',
                'TARGETING_TYPE_GENDER',
                'TARGETING_TYPE_VIDEO_PLAYER_SIZE',
                'TARGETING_TYPE_USER_REWARDED_CONTENT',
                'TARGETING_TYPE_PARENTAL_STATUS',
                'TARGETING_TYPE_CONTENT_INSTREAM_POSITION',
                'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION',
                'TARGETING_TYPE_DEVICE_TYPE',
                'TARGETING_TYPE_AUDIENCE_GROUP',
                'TARGETING_TYPE_BROWSER',
                'TARGETING_TYPE_HOUSEHOLD_INCOME',
                'TARGETING_TYPE_ON_SCREEN_POSITION',
                'TARGETING_TYPE_THIRD_PARTY_VERIFIER',
                'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION',
                'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION',
                'TARGETING_TYPE_ENVIRONMENT',
                'TARGETING_TYPE_CARRIER_AND_ISP',
                'TARGETING_TYPE_OPERATING_SYSTEM',
                'TARGETING_TYPE_DEVICE_MAKE_MODEL',
                'TARGETING_TYPE_KEYWORD',
                'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST',
                'TARGETING_TYPE_VIEWABILITY',
                'TARGETING_TYPE_CATEGORY',
                'TARGETING_TYPE_INVENTORY_SOURCE',
                'TARGETING_TYPE_LANGUAGE',
                'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS',
                'TARGETING_TYPE_GEO_REGION',
                'TARGETING_TYPE_INVENTORY_SOURCE_GROUP',
                'TARGETING_TYPE_EXCHANGE',
                'TARGETING_TYPE_SUB_EXCHANGE',
                'TARGETING_TYPE_POI',
                'TARGETING_TYPE_BUSINESS_CHAIN',
                'TARGETING_TYPE_CONTENT_DURATION',
                'TARGETING_TYPE_CONTENT_STREAM_TYPE',
                'TARGETING_TYPE_NATIVE_CONTENT_POSITION',
                'TARGETING_TYPE_OMID',
                'TARGETING_TYPE_AUDIO_CONTENT_TYPE',
                'TARGETING_TYPE_CONTENT_GENRE',
                'TARGETING_TYPE_YOUTUBE_VIDEO',
                'TARGETING_TYPE_YOUTUBE_CHANNEL',
                'TARGETING_TYPE_SESSION_POSITION',
              ],
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListTargetingOptionsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const getV2TargetingTypesTargetingTypeTargetingOptionsTargetingOptionIdRoute = createRoute({
  method: 'get',
  path: '/v2/targetingTypes/{targetingType}/targetingOptions/{targetingOptionId}',
  tags: ['targetingTypes'],
  description: 'Gets a single targeting option.',
  operationId: 'displayvideo.targetingTypes.targetingOptions.get',
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
      advertiserId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. The Advertiser this request is being made in the context of.',
            in: 'query',
            name: 'advertiserId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      targetingType: z
        .enum([
          'TARGETING_TYPE_UNSPECIFIED',
          'TARGETING_TYPE_CHANNEL',
          'TARGETING_TYPE_APP_CATEGORY',
          'TARGETING_TYPE_APP',
          'TARGETING_TYPE_URL',
          'TARGETING_TYPE_DAY_AND_TIME',
          'TARGETING_TYPE_AGE_RANGE',
          'TARGETING_TYPE_REGIONAL_LOCATION_LIST',
          'TARGETING_TYPE_PROXIMITY_LOCATION_LIST',
          'TARGETING_TYPE_GENDER',
          'TARGETING_TYPE_VIDEO_PLAYER_SIZE',
          'TARGETING_TYPE_USER_REWARDED_CONTENT',
          'TARGETING_TYPE_PARENTAL_STATUS',
          'TARGETING_TYPE_CONTENT_INSTREAM_POSITION',
          'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION',
          'TARGETING_TYPE_DEVICE_TYPE',
          'TARGETING_TYPE_AUDIENCE_GROUP',
          'TARGETING_TYPE_BROWSER',
          'TARGETING_TYPE_HOUSEHOLD_INCOME',
          'TARGETING_TYPE_ON_SCREEN_POSITION',
          'TARGETING_TYPE_THIRD_PARTY_VERIFIER',
          'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION',
          'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION',
          'TARGETING_TYPE_ENVIRONMENT',
          'TARGETING_TYPE_CARRIER_AND_ISP',
          'TARGETING_TYPE_OPERATING_SYSTEM',
          'TARGETING_TYPE_DEVICE_MAKE_MODEL',
          'TARGETING_TYPE_KEYWORD',
          'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST',
          'TARGETING_TYPE_VIEWABILITY',
          'TARGETING_TYPE_CATEGORY',
          'TARGETING_TYPE_INVENTORY_SOURCE',
          'TARGETING_TYPE_LANGUAGE',
          'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS',
          'TARGETING_TYPE_GEO_REGION',
          'TARGETING_TYPE_INVENTORY_SOURCE_GROUP',
          'TARGETING_TYPE_EXCHANGE',
          'TARGETING_TYPE_SUB_EXCHANGE',
          'TARGETING_TYPE_POI',
          'TARGETING_TYPE_BUSINESS_CHAIN',
          'TARGETING_TYPE_CONTENT_DURATION',
          'TARGETING_TYPE_CONTENT_STREAM_TYPE',
          'TARGETING_TYPE_NATIVE_CONTENT_POSITION',
          'TARGETING_TYPE_OMID',
          'TARGETING_TYPE_AUDIO_CONTENT_TYPE',
          'TARGETING_TYPE_CONTENT_GENRE',
          'TARGETING_TYPE_YOUTUBE_VIDEO',
          'TARGETING_TYPE_YOUTUBE_CHANNEL',
          'TARGETING_TYPE_SESSION_POSITION',
        ])
        .openapi({
          param: {
            description:
              'Required. The type of targeting option to retrieve. Accepted values are: * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_VIDEO_PLAYER_SIZE` * `TARGETING_TYPE_USER_REWARDED_CONTENT` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_DEVICE_TYPE` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_CARRIER_AND_ISP` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_VIEWABILITY` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_NATIVE_CONTENT_POSITION` * `TARGETING_TYPE_OMID`',
            in: 'path',
            name: 'targetingType',
            required: true,
            schema: {
              enum: [
                'TARGETING_TYPE_UNSPECIFIED',
                'TARGETING_TYPE_CHANNEL',
                'TARGETING_TYPE_APP_CATEGORY',
                'TARGETING_TYPE_APP',
                'TARGETING_TYPE_URL',
                'TARGETING_TYPE_DAY_AND_TIME',
                'TARGETING_TYPE_AGE_RANGE',
                'TARGETING_TYPE_REGIONAL_LOCATION_LIST',
                'TARGETING_TYPE_PROXIMITY_LOCATION_LIST',
                'TARGETING_TYPE_GENDER',
                'TARGETING_TYPE_VIDEO_PLAYER_SIZE',
                'TARGETING_TYPE_USER_REWARDED_CONTENT',
                'TARGETING_TYPE_PARENTAL_STATUS',
                'TARGETING_TYPE_CONTENT_INSTREAM_POSITION',
                'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION',
                'TARGETING_TYPE_DEVICE_TYPE',
                'TARGETING_TYPE_AUDIENCE_GROUP',
                'TARGETING_TYPE_BROWSER',
                'TARGETING_TYPE_HOUSEHOLD_INCOME',
                'TARGETING_TYPE_ON_SCREEN_POSITION',
                'TARGETING_TYPE_THIRD_PARTY_VERIFIER',
                'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION',
                'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION',
                'TARGETING_TYPE_ENVIRONMENT',
                'TARGETING_TYPE_CARRIER_AND_ISP',
                'TARGETING_TYPE_OPERATING_SYSTEM',
                'TARGETING_TYPE_DEVICE_MAKE_MODEL',
                'TARGETING_TYPE_KEYWORD',
                'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST',
                'TARGETING_TYPE_VIEWABILITY',
                'TARGETING_TYPE_CATEGORY',
                'TARGETING_TYPE_INVENTORY_SOURCE',
                'TARGETING_TYPE_LANGUAGE',
                'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS',
                'TARGETING_TYPE_GEO_REGION',
                'TARGETING_TYPE_INVENTORY_SOURCE_GROUP',
                'TARGETING_TYPE_EXCHANGE',
                'TARGETING_TYPE_SUB_EXCHANGE',
                'TARGETING_TYPE_POI',
                'TARGETING_TYPE_BUSINESS_CHAIN',
                'TARGETING_TYPE_CONTENT_DURATION',
                'TARGETING_TYPE_CONTENT_STREAM_TYPE',
                'TARGETING_TYPE_NATIVE_CONTENT_POSITION',
                'TARGETING_TYPE_OMID',
                'TARGETING_TYPE_AUDIO_CONTENT_TYPE',
                'TARGETING_TYPE_CONTENT_GENRE',
                'TARGETING_TYPE_YOUTUBE_VIDEO',
                'TARGETING_TYPE_YOUTUBE_CHANNEL',
                'TARGETING_TYPE_SESSION_POSITION',
              ],
              type: 'string',
            },
          },
        }),
      targetingOptionId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the of targeting option to retrieve.',
            in: 'path',
            name: 'targetingOptionId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TargetingOptionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const postV2TargetingTypesTargetingTypeTargetingOptionsSearchRoute = createRoute({
  method: 'post',
  path: '/v2/targetingTypes/{targetingType}/targetingOptions:search',
  tags: ['targetingTypes'],
  description: 'Searches for targeting options of a given type based on the given search terms.',
  operationId: 'displayvideo.targetingTypes.targetingOptions.search',
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
    }),
    params: z.object({
      targetingType: z
        .enum([
          'TARGETING_TYPE_UNSPECIFIED',
          'TARGETING_TYPE_CHANNEL',
          'TARGETING_TYPE_APP_CATEGORY',
          'TARGETING_TYPE_APP',
          'TARGETING_TYPE_URL',
          'TARGETING_TYPE_DAY_AND_TIME',
          'TARGETING_TYPE_AGE_RANGE',
          'TARGETING_TYPE_REGIONAL_LOCATION_LIST',
          'TARGETING_TYPE_PROXIMITY_LOCATION_LIST',
          'TARGETING_TYPE_GENDER',
          'TARGETING_TYPE_VIDEO_PLAYER_SIZE',
          'TARGETING_TYPE_USER_REWARDED_CONTENT',
          'TARGETING_TYPE_PARENTAL_STATUS',
          'TARGETING_TYPE_CONTENT_INSTREAM_POSITION',
          'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION',
          'TARGETING_TYPE_DEVICE_TYPE',
          'TARGETING_TYPE_AUDIENCE_GROUP',
          'TARGETING_TYPE_BROWSER',
          'TARGETING_TYPE_HOUSEHOLD_INCOME',
          'TARGETING_TYPE_ON_SCREEN_POSITION',
          'TARGETING_TYPE_THIRD_PARTY_VERIFIER',
          'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION',
          'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION',
          'TARGETING_TYPE_ENVIRONMENT',
          'TARGETING_TYPE_CARRIER_AND_ISP',
          'TARGETING_TYPE_OPERATING_SYSTEM',
          'TARGETING_TYPE_DEVICE_MAKE_MODEL',
          'TARGETING_TYPE_KEYWORD',
          'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST',
          'TARGETING_TYPE_VIEWABILITY',
          'TARGETING_TYPE_CATEGORY',
          'TARGETING_TYPE_INVENTORY_SOURCE',
          'TARGETING_TYPE_LANGUAGE',
          'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS',
          'TARGETING_TYPE_GEO_REGION',
          'TARGETING_TYPE_INVENTORY_SOURCE_GROUP',
          'TARGETING_TYPE_EXCHANGE',
          'TARGETING_TYPE_SUB_EXCHANGE',
          'TARGETING_TYPE_POI',
          'TARGETING_TYPE_BUSINESS_CHAIN',
          'TARGETING_TYPE_CONTENT_DURATION',
          'TARGETING_TYPE_CONTENT_STREAM_TYPE',
          'TARGETING_TYPE_NATIVE_CONTENT_POSITION',
          'TARGETING_TYPE_OMID',
          'TARGETING_TYPE_AUDIO_CONTENT_TYPE',
          'TARGETING_TYPE_CONTENT_GENRE',
          'TARGETING_TYPE_YOUTUBE_VIDEO',
          'TARGETING_TYPE_YOUTUBE_CHANNEL',
          'TARGETING_TYPE_SESSION_POSITION',
        ])
        .openapi({
          param: {
            description:
              'Required. The type of targeting options to retrieve. Accepted values are: * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_POI` * `TARGETING_TYPE_BUSINESS_CHAIN`',
            in: 'path',
            name: 'targetingType',
            required: true,
            schema: {
              enum: [
                'TARGETING_TYPE_UNSPECIFIED',
                'TARGETING_TYPE_CHANNEL',
                'TARGETING_TYPE_APP_CATEGORY',
                'TARGETING_TYPE_APP',
                'TARGETING_TYPE_URL',
                'TARGETING_TYPE_DAY_AND_TIME',
                'TARGETING_TYPE_AGE_RANGE',
                'TARGETING_TYPE_REGIONAL_LOCATION_LIST',
                'TARGETING_TYPE_PROXIMITY_LOCATION_LIST',
                'TARGETING_TYPE_GENDER',
                'TARGETING_TYPE_VIDEO_PLAYER_SIZE',
                'TARGETING_TYPE_USER_REWARDED_CONTENT',
                'TARGETING_TYPE_PARENTAL_STATUS',
                'TARGETING_TYPE_CONTENT_INSTREAM_POSITION',
                'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION',
                'TARGETING_TYPE_DEVICE_TYPE',
                'TARGETING_TYPE_AUDIENCE_GROUP',
                'TARGETING_TYPE_BROWSER',
                'TARGETING_TYPE_HOUSEHOLD_INCOME',
                'TARGETING_TYPE_ON_SCREEN_POSITION',
                'TARGETING_TYPE_THIRD_PARTY_VERIFIER',
                'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION',
                'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION',
                'TARGETING_TYPE_ENVIRONMENT',
                'TARGETING_TYPE_CARRIER_AND_ISP',
                'TARGETING_TYPE_OPERATING_SYSTEM',
                'TARGETING_TYPE_DEVICE_MAKE_MODEL',
                'TARGETING_TYPE_KEYWORD',
                'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST',
                'TARGETING_TYPE_VIEWABILITY',
                'TARGETING_TYPE_CATEGORY',
                'TARGETING_TYPE_INVENTORY_SOURCE',
                'TARGETING_TYPE_LANGUAGE',
                'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS',
                'TARGETING_TYPE_GEO_REGION',
                'TARGETING_TYPE_INVENTORY_SOURCE_GROUP',
                'TARGETING_TYPE_EXCHANGE',
                'TARGETING_TYPE_SUB_EXCHANGE',
                'TARGETING_TYPE_POI',
                'TARGETING_TYPE_BUSINESS_CHAIN',
                'TARGETING_TYPE_CONTENT_DURATION',
                'TARGETING_TYPE_CONTENT_STREAM_TYPE',
                'TARGETING_TYPE_NATIVE_CONTENT_POSITION',
                'TARGETING_TYPE_OMID',
                'TARGETING_TYPE_AUDIO_CONTENT_TYPE',
                'TARGETING_TYPE_CONTENT_GENRE',
                'TARGETING_TYPE_YOUTUBE_VIDEO',
                'TARGETING_TYPE_YOUTUBE_CHANNEL',
                'TARGETING_TYPE_SESSION_POSITION',
              ],
              type: 'string',
            },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SearchTargetingOptionsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SearchTargetingOptionsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
  ],
})

export const getV2UsersRoute = createRoute({
  method: 'get',
  path: '/v2/users',
  tags: ['users'],
  description:
    'Lists users that are accessible to the current user. If two users have user roles on the same partner or advertiser, they can access each other.',
  operationId: 'displayvideo.users.list',
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
              'Allows filtering by user properties. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the logical operator `AND`. * A restriction has the form of `{field} {operator} {value}`. * The operator must be `CONTAINS (:)` or `EQUALS (=)`. * The operator must be `CONTAINS (:)` for the following fields: - `displayName` - `email` * The operator must be `EQUALS (=)` for the following fields: - `assignedUserRole.userRole` - `assignedUserRole.partnerId` - `assignedUserRole.advertiserId` - `assignedUserRole.entityType`: A synthetic field of AssignedUserRole used for filtering. Identifies the type of entity to which the user role is assigned. Valid values are `Partner` and `Advertiser`. - `assignedUserRole.parentPartnerId`: A synthetic field of AssignedUserRole used for filtering. Identifies the parent partner of the entity to which the user role is assigned." Examples: * The user with displayName containing `foo`: `displayName:"foo"` * The user with email containing `bar`: `email:"bar"` * All users with standard user roles: `assignedUserRole.userRole="STANDARD"` * All users with user roles for partner 123: `assignedUserRole.partnerId="123"` * All users with user roles for advertiser 123: `assignedUserRole.advertiserId="123"` * All users with partner level user roles: `entityType="PARTNER"` * All users with user roles for partner 123 and advertisers under partner 123: `parentPartnerId="123"` The length of this field should be no more than 500 characters.',
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
              'Field by which to sort the list. Acceptable values are: * `displayName` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. For example, `displayName desc`.',
            in: 'query',
            name: 'orderBy',
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
              'Requested page size. Must be between `1` and `200`. If unspecified will default to `100`.',
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
            description:
              'A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListUsers` method. If not specified, the first page of results will be returned.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListUsersResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video-user-management'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video-user-management'],
    },
  ],
})

export const postV2UsersRoute = createRoute({
  method: 'post',
  path: '/v2/users',
  tags: ['users'],
  description: 'Creates a new user. Returns the newly created user if successful.',
  operationId: 'displayvideo.users.create',
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
    }),
    body: { content: { 'application/json': { schema: UserSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: UserSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video-user-management'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video-user-management'],
    },
  ],
})

export const getV2UsersUserIdRoute = createRoute({
  method: 'get',
  path: '/v2/users/{userId}',
  tags: ['users'],
  description: 'Gets a user.',
  operationId: 'displayvideo.users.get',
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
    }),
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the user to fetch.',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: UserSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video-user-management'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video-user-management'],
    },
  ],
})

export const deleteV2UsersUserIdRoute = createRoute({
  method: 'delete',
  path: '/v2/users/{userId}',
  tags: ['users'],
  description: 'Deletes a user.',
  operationId: 'displayvideo.users.delete',
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
    }),
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the user to delete.',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video-user-management'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video-user-management'],
    },
  ],
})

export const patchV2UsersUserIdRoute = createRoute({
  method: 'patch',
  path: '/v2/users/{userId}',
  tags: ['users'],
  description: 'Updates an existing user. Returns the updated user if successful.',
  operationId: 'displayvideo.users.patch',
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
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. The mask to control which fields to update.',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            description: 'Output only. The unique ID of the user. Assigned by the system.',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UserSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: UserSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video-user-management'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video-user-management'],
    },
  ],
})

export const postV2UsersUserIdBulkEditAssignedUserRolesRoute = createRoute({
  method: 'post',
  path: '/v2/users/{userId}:bulkEditAssignedUserRoles',
  tags: ['users'],
  description:
    'Bulk edits user roles for a user. The operation will delete the assigned user roles provided in BulkEditAssignedUserRolesRequest.deletedAssignedUserRoles and then assign the user roles provided in BulkEditAssignedUserRolesRequest.createdAssignedUserRoles.',
  operationId: 'displayvideo.users.bulkEditAssignedUserRoles',
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
    }),
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the user to which the assigned user roles belong.',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BulkEditAssignedUserRolesRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BulkEditAssignedUserRolesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video-user-management'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video-user-management'],
    },
  ],
})

export const getV2NameRoute = createRoute({
  method: 'get',
  path: '/v2/{name}',
  tags: ['sdfdownloadtasks'],
  description:
    'Gets the latest state of an asynchronous SDF download task operation. Clients should poll this method at intervals of 30 seconds.',
  operationId: 'displayvideo.sdfdownloadtasks.operations.get',
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
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the operation resource.',
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
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/display-video'],
      Oauth2c: ['https://www.googleapis.com/auth/display-video'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/doubleclickbidmanager'],
      Oauth2c: ['https://www.googleapis.com/auth/doubleclickbidmanager'],
    },
  ],
})
