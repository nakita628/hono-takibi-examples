import { createRoute, z } from '@hono/zod-openapi'

const TimestampSchema = z
  .object({
    nanos: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Non-negative fractions of a second at nanosecond resolution. Must be from 0 to 999,999,999 inclusive.',
      }),
    seconds: z
      .string()
      .exactOptional()
      .openapi({ description: 'Represents seconds of UTC time since Unix epoch.' }),
  })
  .openapi({
    description:
      'A Timestamp represents a point in time independent of any time zone or local calendar, encoded as a count of seconds and fractions of seconds at nanosecond resolution. The count is relative to an epoch at UTC midnight on January 1, 1970.',
    required: [],
  })
  .openapi('Timestamp')

const DeveloperCommentSchema = z
  .object({
    lastModified: TimestampSchema.exactOptional().openapi({
      description: 'The last time at which this comment was updated.',
    }),
    text: z
      .string()
      .exactOptional()
      .openapi({ description: 'The content of the comment, i.e. reply body.' }),
  })
  .openapi({
    description: 'Developer entry from conversation between user and developer.',
    required: [],
  })
  .openapi('DeveloperComment')

const DeviceMetadataSchema = z
  .object({
    cpuMake: z
      .string()
      .exactOptional()
      .openapi({ description: 'Device CPU make, e.g. "Qualcomm"' }),
    cpuModel: z
      .string()
      .exactOptional()
      .openapi({ description: 'Device CPU model, e.g. "MSM8974"' }),
    deviceClass: z.string().exactOptional().openapi({ description: 'Device class (e.g. tablet)' }),
    glEsVersion: z.int32().exactOptional().openapi({ description: 'OpenGL version' }),
    manufacturer: z
      .string()
      .exactOptional()
      .openapi({ description: 'Device manufacturer (e.g. Motorola)' }),
    nativePlatform: z
      .string()
      .exactOptional()
      .openapi({ description: 'Comma separated list of native platforms (e.g. "arm", "arm7")' }),
    productName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Device model name (e.g. Droid)' }),
    ramMb: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Device RAM in Megabytes, e.g. "2048"' }),
    screenDensityDpi: z.int32().exactOptional().openapi({ description: 'Screen density in DPI' }),
    screenHeightPx: z.int32().exactOptional().openapi({ description: 'Screen height in pixels' }),
    screenWidthPx: z.int32().exactOptional().openapi({ description: 'Screen width in pixels' }),
  })
  .openapi({ description: "Characteristics of the user's device.", required: [] })
  .openapi('DeviceMetadata')

const UserCommentSchema = z
  .object({
    androidOsVersion: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "Integer Android SDK version of the user's device at the time the review was written, e.g. 23 is Marshmallow. May be absent.",
      }),
    appVersionCode: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Integer version code of the app as installed at the time the review was written. May be absent.',
      }),
    appVersionName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'String version name of the app as installed at the time the review was written. May be absent.',
      }),
    device: z
      .string()
      .exactOptional()
      .openapi({
        description: "Codename for the reviewer's device, e.g. klte, flounder. May be absent.",
      }),
    deviceMetadata: DeviceMetadataSchema.exactOptional().openapi({
      description: "Information about the characteristics of the user's device.",
    }),
    lastModified: TimestampSchema.exactOptional().openapi({
      description: 'The last time at which this comment was updated.',
    }),
    originalText: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Untranslated text of the review, where the review was translated. If the review was not translated this is left blank.',
      }),
    reviewerLanguage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Language code for the reviewer. This is taken from the device settings so is not guaranteed to match the language the review is written in. May be absent.',
      }),
    starRating: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The star rating associated with the review, from 1 to 5.' }),
    text: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The content of the comment, i.e. review body. In some cases users have been able to write a review with separate title and body; in those cases the title and body are concatenated and separated by a tab character.',
      }),
    thumbsDownCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Number of users who have given this review a thumbs down.' }),
    thumbsUpCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Number of users who have given this review a thumbs up.' }),
  })
  .openapi({
    description: 'User entry from conversation between user and developer.',
    required: [],
  })
  .openapi('UserComment')

type CommentType = {
  developerComment?: z.infer<typeof DeveloperCommentSchema>
  userComment?: z.infer<typeof UserCommentSchema>
}

const PriceSchema = z
  .object({
    currency: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '3 letter Currency code, as defined by ISO 4217. See java/com/google/common/money/CurrencyCode.java',
      }),
    priceMicros: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Price in 1/million of the currency base unit, represented as a string.',
      }),
  })
  .openapi({ description: 'Definition of a price, i.e. currency and units.', required: [] })
  .openapi('Price')

const OneTimeExternalTransactionSchema = z
  .object({
    externalTransactionToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Input only. Provided during the call to Create. Retrieved from the client when the alternative billing flow is launched.',
      }),
  })
  .openapi({ description: 'Represents a one-time transaction.', required: [] })
  .openapi('OneTimeExternalTransaction')

const ExternalSubscriptionSchema = z
  .object({
    subscriptionType: z
      .enum(['SUBSCRIPTION_TYPE_UNSPECIFIED', 'RECURRING', 'PREPAID'])
      .exactOptional()
      .openapi({ description: 'Required. The type of the external subscription.' }),
  })
  .openapi({ description: 'Details of an external subscription.', required: [] })
  .openapi('ExternalSubscription')

const RecurringExternalTransactionSchema = z
  .object({
    externalSubscription: ExternalSubscriptionSchema.exactOptional().openapi({
      description: 'Details of an external subscription.',
    }),
    externalTransactionToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Input only. Provided during the call to Create. Retrieved from the client when the alternative billing flow is launched. Required only for the initial purchase.',
      }),
    initialExternalTransactionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The external transaction id of the first transaction of this recurring series of transactions. For example, for a subscription this would be the transaction id of the first payment. Required when creating recurring external transactions.',
      }),
  })
  .openapi({
    description:
      'Represents a transaction that is part of a recurring series of payments. This can be a subscription or a one-time product with multiple payments (such as preorder).',
    required: [],
  })
  .openapi('RecurringExternalTransaction')

const ExternalTransactionTestPurchaseSchema = z
  .object({})
  .openapi({
    description:
      'Represents a transaction performed using a test account. These transactions will not be charged by Google.',
  })
  .openapi('ExternalTransactionTestPurchase')

const ExternalTransactionAddressSchema = z
  .object({
    regionCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Two letter region code based on ISO-3166-1 Alpha-2 (UN region codes).',
      }),
  })
  .openapi({ description: "User's address for the external transaction.", required: [] })
  .openapi('ExternalTransactionAddress')

type ExternalTransactionType = {
  createTime?: string
  currentPreTaxAmount?: z.infer<typeof PriceSchema>
  currentTaxAmount?: z.infer<typeof PriceSchema>
  externalTransactionId?: string
  oneTimeTransaction?: z.infer<typeof OneTimeExternalTransactionSchema>
  originalPreTaxAmount?: z.infer<typeof PriceSchema>
  originalTaxAmount?: z.infer<typeof PriceSchema>
  packageName?: string
  recurringTransaction?: z.infer<typeof RecurringExternalTransactionSchema>
  testPurchase?: z.infer<typeof ExternalTransactionTestPurchaseSchema>
  transactionState?:
    | 'TRANSACTION_STATE_UNSPECIFIED'
    | 'TRANSACTION_REPORTED'
    | 'TRANSACTION_CANCELED'
  transactionTime?: string
  userTaxAddress?: z.infer<typeof ExternalTransactionAddressSchema>
}

const TargetingRuleScopeSchema = z
  .object({
    specificSubscriptionInApp: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The scope of the current targeting rule is the subscription with the specified subscription ID. Must be a subscription within the same parent app.',
      }),
  })
  .openapi({
    description:
      'Defines the scope of subscriptions which a targeting rule can match to target offers to users based on past or current entitlement.',
    required: [],
  })
  .openapi('TargetingRuleScope')

const AcquisitionTargetingRuleSchema = z
  .object({
    scope: TargetingRuleScopeSchema.exactOptional().openapi({
      description:
        'Required. The scope of subscriptions this rule considers. Only allows "this subscription" and "any subscription in app".',
    }),
  })
  .openapi({
    description: 'Represents a targeting rule of the form: User never had {scope} before.',
    required: [],
  })
  .openapi('AcquisitionTargetingRule')

const ActivateBasePlanRequestSchema = z
  .object({})
  .openapi({ description: 'Request message for ActivateBasePlan.' })
  .openapi('ActivateBasePlanRequest')

const ActivateSubscriptionOfferRequestSchema = z
  .object({})
  .openapi({ description: 'Request message for ActivateSubscriptionOffer.' })
  .openapi('ActivateSubscriptionOfferRequest')

const ApkBinarySchema = z
  .object({
    sha1: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A sha1 hash of the APK payload, encoded as a hex string and matching the output of the sha1sum command.',
      }),
    sha256: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A sha256 hash of the APK payload, encoded as a hex string and matching the output of the sha256sum command.',
      }),
  })
  .openapi({ description: 'Represents the binary payload of an APK.', required: [] })
  .openapi('ApkBinary')

const ApkSchema = z
  .object({
    binary: ApkBinarySchema.exactOptional().openapi({
      description: 'Information about the binary payload of this APK.',
    }),
    versionCode: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The version code of the APK, as specified in the manifest file.' }),
  })
  .openapi({ description: 'Information about an APK. The resource for ApksService.', required: [] })
  .openapi('Apk')

const UsesPermissionSchema = z
  .object({
    maxSdkVersion: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Optionally, the maximum SDK version for which the permission is required.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the permission requested.' }),
  })
  .openapi({ description: 'A permission used by this APK.', required: [] })
  .openapi('UsesPermission')

const ExternallyHostedApkSchema = z
  .object({
    applicationLabel: z.string().exactOptional().openapi({ description: 'The application label.' }),
    certificateBase64s: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A certificate (or array of certificates if a certificate-chain is used) used to sign this APK, represented as a base64 encoded byte array.',
      }),
    externallyHostedUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL at which the APK is hosted. This must be an https URL.' }),
    fileSha1Base64: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The sha1 checksum of this APK, represented as a base64 encoded byte array.',
      }),
    fileSha256Base64: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The sha256 checksum of this APK, represented as a base64 encoded byte array.',
      }),
    fileSize: z
      .string()
      .exactOptional()
      .openapi({ description: 'The file size in bytes of this APK.' }),
    iconBase64: z
      .string()
      .exactOptional()
      .openapi({ description: 'The icon image from the APK, as a base64 encoded byte array.' }),
    maximumSdk: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The maximum SDK supported by this APK (optional).' }),
    minimumSdk: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The minimum SDK targeted by this APK.' }),
    nativeCodes: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The native code environments supported by this APK (optional).' }),
    packageName: z.string().exactOptional().openapi({ description: 'The package name.' }),
    usesFeatures: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The features required by this APK (optional).' }),
    usesPermissions: z
      .array(UsesPermissionSchema)
      .exactOptional()
      .openapi({ description: 'The permissions requested by this APK.' }),
    versionCode: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The version code of this APK.' }),
    versionName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The version name of this APK.' }),
  })
  .openapi({
    description:
      'Defines an APK available for this application that is hosted externally and not uploaded to Google Play. This function is only available to organizations using Managed Play whose application is configured to restrict distribution to the organizations.',
    required: [],
  })
  .openapi('ExternallyHostedApk')

const ApksAddExternallyHostedRequestSchema = z
  .object({
    externallyHostedApk: ExternallyHostedApkSchema.exactOptional().openapi({
      description: 'The definition of the externally-hosted APK and where it is located.',
    }),
  })
  .openapi({ description: 'Request to create a new externally hosted APK.', required: [] })
  .openapi('ApksAddExternallyHostedRequest')

const ApksAddExternallyHostedResponseSchema = z
  .object({
    externallyHostedApk: ExternallyHostedApkSchema.exactOptional().openapi({
      description: 'The definition of the externally-hosted APK and where it is located.',
    }),
  })
  .openapi({ description: 'Response for creating a new externally hosted APK.', required: [] })
  .openapi('ApksAddExternallyHostedResponse')

const ApksListResponseSchema = z
  .object({
    apks: z.array(ApkSchema).exactOptional().openapi({ description: 'All APKs.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'The kind of this response ("androidpublisher#apksListResponse").' }),
  })
  .openapi({ description: 'Response listing all APKs.', required: [] })
  .openapi('ApksListResponse')

const AppDetailsSchema = z
  .object({
    contactEmail: z
      .string()
      .exactOptional()
      .openapi({ description: 'The user-visible support email for this app.' }),
    contactPhone: z
      .string()
      .exactOptional()
      .openapi({ description: 'The user-visible support telephone number for this app.' }),
    contactWebsite: z
      .string()
      .exactOptional()
      .openapi({ description: 'The user-visible website for this app.' }),
    defaultLanguage: z
      .string()
      .exactOptional()
      .openapi({ description: 'Default language code, in BCP 47 format (eg "en-US").' }),
  })
  .openapi({ description: 'The app details. The resource for DetailsService.', required: [] })
  .openapi('AppDetails')

const AppEditSchema = z
  .object({
    expiryTimeSeconds: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The time (as seconds since Epoch) at which the edit will expire and will be no longer valid for use.',
        readOnly: true,
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Identifier of the edit. Can be used in subsequent API calls.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'An app edit. The resource for EditsService.', required: [] })
  .openapi('AppEdit')

const ArchiveSubscriptionRequestSchema = z
  .object({})
  .openapi({ description: 'Request message for ArchiveSubscription.' })
  .openapi('ArchiveSubscriptionRequest')

const AutoRenewingBasePlanTypeSchema = z
  .object({
    billingPeriodDuration: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Subscription period, specified in ISO 8601 format. For a list of acceptable billing periods, refer to the help center.',
      }),
    gracePeriodDuration: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Grace period of the subscription, specified in ISO 8601 format. Acceptable values are P0D (zero days), P3D (3 days), P7D (7 days), P14D (14 days), and P30D (30 days). If not specified, a default value will be used based on the recurring period duration.',
      }),
    legacyCompatible: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the renewing base plan is backward compatible. The backward compatible base plan is returned by the Google Play Billing Library deprecated method querySkuDetailsAsync(). Only one renewing base plan can be marked as legacy compatible for a given subscription.',
      }),
    legacyCompatibleSubscriptionOfferId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Subscription offer id which is legacy compatible. The backward compatible subscription offer is returned by the Google Play Billing Library deprecated method querySkuDetailsAsync(). Only one subscription offer can be marked as legacy compatible for a given renewing base plan. To have no Subscription offer as legacy compatible set this field as empty string.',
      }),
    prorationMode: z
      .enum([
        'SUBSCRIPTION_PRORATION_MODE_UNSPECIFIED',
        'SUBSCRIPTION_PRORATION_MODE_CHARGE_ON_NEXT_BILLING_DATE',
        'SUBSCRIPTION_PRORATION_MODE_CHARGE_FULL_PRICE_IMMEDIATELY',
      ])
      .exactOptional()
      .openapi({
        description:
          'The proration mode for the base plan determines what happens when a user switches to this plan from another base plan. If unspecified, defaults to CHARGE_ON_NEXT_BILLING_DATE.',
      }),
    resubscribeState: z
      .enum([
        'RESUBSCRIBE_STATE_UNSPECIFIED',
        'RESUBSCRIBE_STATE_ACTIVE',
        'RESUBSCRIBE_STATE_INACTIVE',
      ])
      .exactOptional()
      .openapi({
        description:
          'Whether users should be able to resubscribe to this base plan in Google Play surfaces. Defaults to RESUBSCRIBE_STATE_ACTIVE if not specified.',
      }),
  })
  .openapi({
    description:
      'Represents a base plan that automatically renews at the end of its subscription period.',
    required: [],
  })
  .openapi('AutoRenewingBasePlanType')

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

const SubscriptionItemPriceChangeDetailsSchema = z
  .object({
    expectedNewPriceChargeTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The renewal time at which the price change will become effective for the user. This is subject to change(to a future time) due to cases where the renewal time shifts like pause.',
      }),
    newPrice: MoneySchema.exactOptional().openapi({
      description: 'New recurring price for the subscription item.',
    }),
    priceChangeMode: z
      .enum(['PRICE_CHANGE_MODE_UNSPECIFIED', 'PRICE_DECREASE', 'PRICE_INCREASE'])
      .exactOptional()
      .openapi({
        description: 'Price change mode specifies how the subscription item price is changing.',
      }),
    priceChangeState: z
      .enum(['PRICE_CHANGE_STATE_UNSPECIFIED', 'OUTSTANDING', 'CONFIRMED', 'APPLIED'])
      .exactOptional()
      .openapi({ description: 'State the price change is currently in.' }),
  })
  .openapi({
    description: 'Price change related information of a subscription item.',
    required: [],
  })
  .openapi('SubscriptionItemPriceChangeDetails')

const AutoRenewingPlanSchema = z
  .object({
    autoRenewEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If the subscription is currently set to auto-renew, e.g. the user has not canceled the subscription',
      }),
    priceChangeDetails: SubscriptionItemPriceChangeDetailsSchema.exactOptional().openapi({
      description:
        'The information of the last price change for the item since subscription signup.',
    }),
  })
  .openapi({ description: 'Information related to an auto renewing plan.', required: [] })
  .openapi('AutoRenewingPlan')

const OfferTagSchema = z
  .object({
    tag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Must conform with RFC-1034. That is, this string can only contain lower-case letters (a-z), numbers (0-9), and hyphens (-), and be at most 20 characters.',
      }),
  })
  .openapi({
    description: 'Represents a custom tag specified for base plans and subscription offers.',
    required: [],
  })
  .openapi('OfferTag')

const OtherRegionsBasePlanConfigSchema = z
  .object({
    eurPrice: MoneySchema.exactOptional().openapi({
      description: 'Required. Price in EUR to use for any new locations Play may launch in.',
    }),
    newSubscriberAvailability: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the base plan is available for new subscribers in any new locations Play may launch in. If not specified, this will default to false.',
      }),
    usdPrice: MoneySchema.exactOptional().openapi({
      description: 'Required. Price in USD to use for any new locations Play may launch in.',
    }),
  })
  .openapi({
    description: 'Pricing information for any new locations Play may launch in.',
    required: [],
  })
  .openapi('OtherRegionsBasePlanConfig')

const PrepaidBasePlanTypeSchema = z
  .object({
    billingPeriodDuration: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Subscription period, specified in ISO 8601 format. For a list of acceptable billing periods, refer to the help center.',
      }),
    timeExtension: z
      .enum(['TIME_EXTENSION_UNSPECIFIED', 'TIME_EXTENSION_ACTIVE', 'TIME_EXTENSION_INACTIVE'])
      .exactOptional()
      .openapi({
        description:
          'Whether users should be able to extend this prepaid base plan in Google Play surfaces. Defaults to TIME_EXTENSION_ACTIVE if not specified.',
      }),
  })
  .openapi({
    description:
      'Represents a base plan that does not automatically renew at the end of the base plan, and must be manually renewed by the user.',
    required: [],
  })
  .openapi('PrepaidBasePlanType')

const RegionalBasePlanConfigSchema = z
  .object({
    newSubscriberAvailability: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the base plan in the specified region is available for new subscribers. Existing subscribers will not have their subscription canceled if this value is set to false. If not specified, this will default to false.',
      }),
    price: MoneySchema.exactOptional().openapi({
      description:
        'The price of the base plan in the specified region. Must be set if the base plan is available to new subscribers. Must be set in the currency that is linked to the specified region.',
    }),
    regionCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Region code this configuration applies to, as defined by ISO 3166-2, e.g. "US".',
      }),
  })
  .openapi({ description: 'Configuration for a base plan specific to a region.', required: [] })
  .openapi('RegionalBasePlanConfig')

const BasePlanSchema = z
  .object({
    autoRenewingBasePlanType: AutoRenewingBasePlanTypeSchema.exactOptional().openapi({
      description: 'Set when the base plan automatically renews at a regular interval.',
    }),
    basePlanId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Immutable. The unique identifier of this base plan. Must be unique within the subscription, and conform with RFC-1034. That is, this ID can only contain lower-case letters (a-z), numbers (0-9), and hyphens (-), and be at most 63 characters.',
      }),
    offerTags: z
      .array(OfferTagSchema)
      .exactOptional()
      .openapi({
        description:
          'List of up to 20 custom tags specified for this base plan, and returned to the app through the billing library. Subscription offers for this base plan will also receive these offer tags in the billing library.',
      }),
    otherRegionsConfig: OtherRegionsBasePlanConfigSchema.exactOptional().openapi({
      description:
        'Pricing information for any new locations Play may launch in the future. If omitted, the BasePlan will not be automatically available any new locations Play may launch in the future.',
    }),
    prepaidBasePlanType: PrepaidBasePlanTypeSchema.exactOptional().openapi({
      description:
        'Set when the base plan does not automatically renew at the end of the billing period.',
    }),
    regionalConfigs: z
      .array(RegionalBasePlanConfigSchema)
      .exactOptional()
      .openapi({ description: 'Region-specific information for this base plan.' }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'DRAFT', 'ACTIVE', 'INACTIVE'])
      .exactOptional()
      .openapi({
        description:
          "Output only. The state of the base plan, i.e. whether it's active. Draft and inactive base plans can be activated or deleted. Active base plans can be made inactive. Inactive base plans can be canceled. This field cannot be changed by updating the resource. Use the dedicated endpoints instead.",
        readOnly: true,
      }),
  })
  .openapi({ description: 'A single base plan for a subscription.', required: [] })
  .openapi('BasePlan')

const BundleSchema = z
  .object({
    sha1: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A sha1 hash of the upload payload, encoded as a hex string and matching the output of the sha1sum command.',
      }),
    sha256: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A sha256 hash of the upload payload, encoded as a hex string and matching the output of the sha256sum command.',
      }),
    versionCode: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "The version code of the Android App Bundle, as specified in the Android App Bundle's base module APK manifest file.",
      }),
  })
  .openapi({
    description: 'Information about an app bundle. The resource for BundlesService.',
    required: [],
  })
  .openapi('Bundle')

const BundlesListResponseSchema = z
  .object({
    bundles: z.array(BundleSchema).exactOptional().openapi({ description: 'All app bundles.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The kind of this response ("androidpublisher#bundlesListResponse").',
      }),
  })
  .openapi({ description: 'Response listing all app bundles.', required: [] })
  .openapi('BundlesListResponse')

const CancelSurveyResultSchema = z
  .object({
    reason: z
      .enum([
        'CANCEL_SURVEY_REASON_UNSPECIFIED',
        'CANCEL_SURVEY_REASON_NOT_ENOUGH_USAGE',
        'CANCEL_SURVEY_REASON_TECHNICAL_ISSUES',
        'CANCEL_SURVEY_REASON_COST_RELATED',
        'CANCEL_SURVEY_REASON_FOUND_BETTER_APP',
        'CANCEL_SURVEY_REASON_OTHERS',
      ])
      .exactOptional()
      .openapi({ description: 'The reason the user selected in the cancel survey.' }),
    reasonUserInput: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Only set for CANCEL_SURVEY_REASON_OTHERS. This is the user's freeform response to the survey.",
      }),
  })
  .openapi({
    description: 'Result of the cancel survey when the subscription was canceled by the user.',
    required: [],
  })
  .openapi('CancelSurveyResult')

const DeveloperInitiatedCancellationSchema = z
  .object({})
  .openapi({ description: 'Information specific to cancellations initiated by developers.' })
  .openapi('DeveloperInitiatedCancellation')

const ReplacementCancellationSchema = z
  .object({})
  .openapi({
    description: 'Information specific to cancellations caused by subscription replacement.',
  })
  .openapi('ReplacementCancellation')

const SystemInitiatedCancellationSchema = z
  .object({})
  .openapi({ description: 'Information specific to cancellations initiated by Google system.' })
  .openapi('SystemInitiatedCancellation')

const UserInitiatedCancellationSchema = z
  .object({
    cancelSurveyResult: CancelSurveyResultSchema.exactOptional().openapi({
      description:
        'Information provided by the user when they complete the subscription cancellation flow (cancellation reason survey).',
    }),
    cancelTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time at which the subscription was canceled by the user. The user might still have access to the subscription after this time. Use line_items.expiry_time to determine if a user still has access.',
      }),
  })
  .openapi({
    description: 'Information specific to cancellations initiated by users.',
    required: [],
  })
  .openapi('UserInitiatedCancellation')

const CanceledStateContextSchema = z
  .object({
    developerInitiatedCancellation: DeveloperInitiatedCancellationSchema.exactOptional().openapi({
      description: 'Subscription was canceled by the developer.',
    }),
    replacementCancellation: ReplacementCancellationSchema.exactOptional().openapi({
      description: 'Subscription was replaced by a new subscription.',
    }),
    systemInitiatedCancellation: SystemInitiatedCancellationSchema.exactOptional().openapi({
      description:
        'Subscription was canceled by the system, for example because of a billing problem.',
    }),
    userInitiatedCancellation: UserInitiatedCancellationSchema.exactOptional().openapi({
      description: 'Subscription was canceled by user.',
    }),
  })
  .openapi({
    description: 'Information specific to a subscription in canceled state.',
    required: [],
  })
  .openapi('CanceledStateContext')

const CommentSchema: z.ZodType<CommentType> = z
  .lazy(() =>
    z
      .object({
        developerComment: DeveloperCommentSchema.exactOptional().openapi({
          description: 'A comment from a developer.',
        }),
        userComment: UserCommentSchema.exactOptional().openapi({
          description: 'A comment from a user.',
        }),
      })
      .openapi({
        description: 'An entry of conversation between user and developer.',
        required: [],
      }),
  )
  .openapi('Comment')

const ConvertRegionPricesRequestSchema = z
  .object({
    price: MoneySchema.exactOptional().openapi({
      description: 'The intital price to convert other regions from. Tax exclusive.',
    }),
  })
  .openapi({ description: 'Request message for ConvertRegionPrices.', required: [] })
  .openapi('ConvertRegionPricesRequest')

const ConvertedOtherRegionsPriceSchema = z
  .object({
    eurPrice: MoneySchema.exactOptional().openapi({
      description: 'Price in EUR to use for the "Other regions" location exclusive of taxes.',
    }),
    usdPrice: MoneySchema.exactOptional().openapi({
      description: 'Price in USD to use for the "Other regions" location exclusive of taxes.',
    }),
  })
  .openapi({ description: 'Converted other regions prices.', required: [] })
  .openapi('ConvertedOtherRegionsPrice')

const ConvertedRegionPriceSchema = z
  .object({
    price: MoneySchema.exactOptional().openapi({
      description: 'The converted price tax inclusive.',
    }),
    regionCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The region code of the region.' }),
    taxAmount: MoneySchema.exactOptional().openapi({
      description: 'The tax amount of the converted price.',
    }),
  })
  .openapi({ description: 'A converted region price.', required: [] })
  .openapi('ConvertedRegionPrice')

const ConvertRegionPricesResponseSchema = z
  .object({
    convertedOtherRegionsPrice: ConvertedOtherRegionsPriceSchema.exactOptional().openapi({
      description:
        "Converted other regions prices in USD and EUR, to use for countries where Play doesn't support a country's local currency.",
    }),
    convertedRegionPrices: z
      .record(z.string(), ConvertedRegionPriceSchema)
      .exactOptional()
      .openapi({ description: 'Map from region code to converted region price.' }),
  })
  .openapi({ description: 'Response message for ConvertRegionPrices.', required: [] })
  .openapi('ConvertRegionPricesResponse')

const CountryTargetingSchema = z
  .object({
    countries: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Countries to target, specified as two letter [CLDR codes](https://unicode.org/cldr/charts/latest/supplemental/territory_containment_un_m_49.html).',
      }),
    includeRestOfWorld: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Include "rest of world" as well as explicitly targeted countries.',
      }),
  })
  .openapi({ description: 'Country targeting specification.', required: [] })
  .openapi('CountryTargeting')

const DeactivateBasePlanRequestSchema = z
  .object({})
  .openapi({ description: 'Request message for DeactivateBasePlan.' })
  .openapi('DeactivateBasePlanRequest')

const DeactivateSubscriptionOfferRequestSchema = z
  .object({})
  .openapi({ description: 'Request message for DeactivateSubscriptionOffer.' })
  .openapi('DeactivateSubscriptionOfferRequest')

const DeobfuscationFileSchema = z
  .object({
    symbolType: z
      .enum(['deobfuscationFileTypeUnspecified', 'proguard', 'nativeCode'])
      .exactOptional()
      .openapi({ description: 'The type of the deobfuscation file.' }),
  })
  .openapi({ description: 'Represents a deobfuscation file.', required: [] })
  .openapi('DeobfuscationFile')

const DeobfuscationFilesUploadResponseSchema = z
  .object({
    deobfuscationFile: DeobfuscationFileSchema.exactOptional().openapi({
      description: 'The uploaded Deobfuscation File configuration.',
    }),
  })
  .openapi({ description: 'Responses for the upload.', required: [] })
  .openapi('DeobfuscationFilesUploadResponse')

const DeviceRamSchema = z
  .object({
    maxBytes: z
      .string()
      .exactOptional()
      .openapi({ description: 'Maximum RAM in bytes (bound excluded).' }),
    minBytes: z
      .string()
      .exactOptional()
      .openapi({ description: 'Minimum RAM in bytes (bound included).' }),
  })
  .openapi({ description: "Conditions about a device's RAM capabilities.", required: [] })
  .openapi('DeviceRam')

const DeviceIdSchema = z
  .object({
    buildBrand: z.string().exactOptional().openapi({ description: 'Value of Build.BRAND.' }),
    buildDevice: z.string().exactOptional().openapi({ description: 'Value of Build.DEVICE.' }),
  })
  .openapi({ description: 'Identifier of a device.', required: [] })
  .openapi('DeviceId')

const SystemFeatureSchema = z
  .object({ name: z.string().exactOptional().openapi({ description: 'The name of the feature.' }) })
  .openapi({ description: 'Representation of a system feature.', required: [] })
  .openapi('SystemFeature')

const DeviceSelectorSchema = z
  .object({
    deviceRam: DeviceRamSchema.exactOptional().openapi({
      description: "Conditions on the device's RAM.",
    }),
    excludedDeviceIds: z
      .array(DeviceIdSchema)
      .exactOptional()
      .openapi({
        description:
          'Device models excluded by this selector, even if they match all other conditions.',
      }),
    forbiddenSystemFeatures: z
      .array(SystemFeatureSchema)
      .exactOptional()
      .openapi({
        description:
          'A device that has any of these system features is excluded by this selector, even if it matches all other conditions.',
      }),
    includedDeviceIds: z
      .array(DeviceIdSchema)
      .exactOptional()
      .openapi({ description: 'Device models included by this selector.' }),
    requiredSystemFeatures: z
      .array(SystemFeatureSchema)
      .exactOptional()
      .openapi({
        description:
          'A device needs to have all these system features to be included by the selector.',
      }),
  })
  .openapi({
    description:
      "Selector for a device group. A selector consists of a set of conditions on the device that should all match (logical AND) to determine a device group eligibility. For instance, if a selector specifies RAM conditions, device model inclusion and device model exclusion, a device is considered to match if: device matches RAM conditions AND device matches one of the included device models AND device doesn't match excluded device models",
    required: [],
  })
  .openapi('DeviceSelector')

const DeviceGroupSchema = z
  .object({
    deviceSelectors: z
      .array(DeviceSelectorSchema)
      .exactOptional()
      .openapi({
        description:
          'Device selectors for this group. A device matching any of the selectors is included in this group.',
      }),
    name: z.string().exactOptional().openapi({ description: 'The name of the group.' }),
  })
  .openapi({
    description:
      'A group of devices. A group is defined by a set of device selectors. A device belongs to the group if it matches any selector (logical OR).',
    required: [],
  })
  .openapi('DeviceGroup')

const DeviceSpecSchema = z
  .object({
    screenDensity: z.uint32().exactOptional().openapi({ description: 'Screen dpi.' }),
    supportedAbis: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Supported ABI architectures in the order of preference. The values should be the string as reported by the platform, e.g. "armeabi-v7a", "x86_64".',
      }),
    supportedLocales: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'All installed locales represented as BCP-47 strings, e.g. "en-US".',
      }),
  })
  .openapi({ description: 'The device spec used to generate a system APK.', required: [] })
  .openapi('DeviceSpec')

const DeviceTierSchema = z
  .object({
    deviceGroupNames: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Groups of devices included in this tier. These groups must be defined explicitly under device_groups in this configuration.',
      }),
    level: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "The priority level of the tier. Tiers are evaluated in descending order of level: the highest level tier has the highest priority. The highest tier matching a given device is selected for that device. You should use a contiguous range of levels for your tiers in a tier set; tier levels in a tier set must be unique. For instance, if your tier set has 4 tiers (including the global fallback), you should define tiers 1, 2 and 3 in this configuration. Note: tier 0 is implicitly defined as a global fallback and selected for devices that don't match any of the tiers explicitly defined here. You mustn't define level 0 explicitly in this configuration.",
      }),
  })
  .openapi({
    description:
      'A single device tier. Devices matching any of the device groups in device_group_names are considered to match the tier.',
    required: [],
  })
  .openapi('DeviceTier')

const DeviceTierSetSchema = z
  .object({
    deviceTiers: z
      .array(DeviceTierSchema)
      .exactOptional()
      .openapi({ description: 'Device tiers belonging to the set.' }),
  })
  .openapi({
    description:
      'A set of device tiers. A tier set determines what variation of app content gets served to a specific device, for device-targeted content. You should assign a priority level to each tier, which determines the ordering by which they are evaluated by Play. See the documentation of DeviceTier.level for more details.',
    required: [],
  })
  .openapi('DeviceTierSet')

const UserCountrySetSchema = z
  .object({
    countryCodes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of country codes representing countries. A Country code is represented in ISO 3166 alpha-2 format. For Example:- "IT" for Italy, "GE" for Georgia.',
      }),
    name: z.string().exactOptional().openapi({ description: 'Country set name.' }),
  })
  .openapi({
    description:
      'A set of user countries. A country set determines what variation of app content gets served to a specific location.',
    required: [],
  })
  .openapi('UserCountrySet')

const DeviceTierConfigSchema = z
  .object({
    deviceGroups: z
      .array(DeviceGroupSchema)
      .exactOptional()
      .openapi({ description: 'Definition of device groups for the app.' }),
    deviceTierConfigId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The device tier config ID.', readOnly: true }),
    deviceTierSet: DeviceTierSetSchema.exactOptional().openapi({
      description: 'Definition of the set of device tiers for the app.',
    }),
    userCountrySets: z
      .array(UserCountrySetSchema)
      .exactOptional()
      .openapi({ description: 'Definition of user country sets for the app.' }),
  })
  .openapi({
    description: 'Configuration describing device targeting criteria for the content of an app.',
    required: [],
  })
  .openapi('DeviceTierConfig')

const ExpansionFileSchema = z
  .object({
    fileSize: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "If set, this field indicates that this APK has an expansion file uploaded to it: this APK does not reference another APK's expansion file. The field's value is the size of the uploaded expansion file in bytes.",
      }),
    referencesVersion: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "If set, this APK's expansion file references another APK's expansion file. The file_size field will not be set.",
      }),
  })
  .openapi({
    description: 'An expansion file. The resource for ExpansionFilesService.',
    required: [],
  })
  .openapi('ExpansionFile')

const ExpansionFilesUploadResponseSchema = z
  .object({
    expansionFile: ExpansionFileSchema.exactOptional().openapi({
      description: 'The uploaded expansion file configuration.',
    }),
  })
  .openapi({ description: 'Response for uploading an expansion file.', required: [] })
  .openapi('ExpansionFilesUploadResponse')

const ExternalAccountIdentifiersSchema = z
  .object({
    externalAccountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'User account identifier in the third-party service. Only present if account linking happened as part of the subscription purchase flow.',
      }),
    obfuscatedExternalAccountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "An obfuscated version of the id that is uniquely associated with the user's account in your app. Present for the following purchases: * If account linking happened as part of the subscription purchase flow. * It was specified using https://developer.android.com/reference/com/android/billingclient/api/BillingFlowParams.Builder#setobfuscatedaccountid when the purchase was made.",
      }),
    obfuscatedExternalProfileId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "An obfuscated version of the id that is uniquely associated with the user's profile in your app. Only present if specified using https://developer.android.com/reference/com/android/billingclient/api/BillingFlowParams.Builder#setobfuscatedprofileid when the purchase was made.",
      }),
  })
  .openapi({ description: 'User account identifier in the third-party service.', required: [] })
  .openapi('ExternalAccountIdentifiers')

const ExternalTransactionSchema: z.ZodType<ExternalTransactionType> = z
  .lazy(() =>
    z
      .object({
        createTime: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Output only. The time when this transaction was created. This is the time when Google was notified of the transaction.',
            readOnly: true,
          }),
        currentPreTaxAmount: PriceSchema.exactOptional().openapi({
          description:
            'Output only. The current transaction amount before tax. This represents the current pre-tax amount including any refunds that may have been applied to this transaction.',
          readOnly: true,
        }),
        currentTaxAmount: PriceSchema.exactOptional().openapi({
          description:
            'Output only. The current tax amount. This represents the current tax amount including any refunds that may have been applied to this transaction.',
          readOnly: true,
        }),
        externalTransactionId: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Output only. The id of this transaction. All transaction ids under the same package name must be unique. Set when creating the external transaction.',
            readOnly: true,
          }),
        oneTimeTransaction: OneTimeExternalTransactionSchema.exactOptional().openapi({
          description: 'This is a one-time transaction and not part of a subscription.',
        }),
        originalPreTaxAmount: PriceSchema.exactOptional().openapi({
          description:
            'Required. The original transaction amount before taxes. This represents the pre-tax amount originally notified to Google before any refunds were applied.',
        }),
        originalTaxAmount: PriceSchema.exactOptional().openapi({
          description:
            'Required. The original tax amount. This represents the tax amount originally notified to Google before any refunds were applied.',
        }),
        packageName: z
          .string()
          .exactOptional()
          .openapi({
            description:
              "Output only. The resource name of the external transaction. The package name of the application the inapp products were sold (for example, 'com.some.app').",
            readOnly: true,
          }),
        recurringTransaction: RecurringExternalTransactionSchema.exactOptional().openapi({
          description: 'This transaction is part of a recurring series of transactions.',
        }),
        testPurchase: ExternalTransactionTestPurchaseSchema.exactOptional().openapi({
          description:
            'Output only. If set, this transaction was a test purchase. Google will not charge for a test transaction.',
          readOnly: true,
        }),
        transactionState: z
          .enum(['TRANSACTION_STATE_UNSPECIFIED', 'TRANSACTION_REPORTED', 'TRANSACTION_CANCELED'])
          .exactOptional()
          .openapi({
            description: 'Output only. The current state of the transaction.',
            readOnly: true,
          }),
        transactionTime: z
          .string()
          .exactOptional()
          .openapi({ description: 'Required. The time when the transaction was completed.' }),
        userTaxAddress: ExternalTransactionAddressSchema.exactOptional().openapi({
          description: 'Required. User address for tax computation.',
        }),
      })
      .openapi({ description: 'The details of an external transaction.', required: [] }),
  )
  .openapi('ExternalTransaction')

const FullRefundSchema = z
  .object({})
  .openapi({ description: 'A full refund of the remaining amount of a transaction.' })
  .openapi('FullRefund')

const GeneratedAssetPackSliceSchema = z
  .object({
    downloadId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Download ID, which uniquely identifies the APK to download. Should be supplied to `generatedapks.download` method.',
      }),
    moduleName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the module that this asset slice belongs to.' }),
    sliceId: z.string().exactOptional().openapi({ description: 'Asset slice ID.' }),
    version: z.string().exactOptional().openapi({ description: 'Asset module version.' }),
  })
  .openapi({ description: 'Download metadata for an asset pack slice.', required: [] })
  .openapi('GeneratedAssetPackSlice')

const GeneratedSplitApkSchema = z
  .object({
    downloadId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Download ID, which uniquely identifies the APK to download. Should be supplied to `generatedapks.download` method.',
      }),
    moduleName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the module that this APK belongs to.' }),
    splitId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Split ID. Empty for the main split of the base module.' }),
    variantId: z.int32().exactOptional().openapi({ description: 'ID of the generated variant.' }),
  })
  .openapi({ description: 'Download metadata for a split APK.', required: [] })
  .openapi('GeneratedSplitApk')

const GeneratedStandaloneApkSchema = z
  .object({
    downloadId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Download ID, which uniquely identifies the APK to download. Should be supplied to `generatedapks.download` method.',
      }),
    variantId: z.int32().exactOptional().openapi({ description: 'ID of the generated variant.' }),
  })
  .openapi({ description: 'Download metadata for a standalone APK.', required: [] })
  .openapi('GeneratedStandaloneApk')

const GeneratedUniversalApkSchema = z
  .object({
    downloadId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Download ID, which uniquely identifies the APK to download. Should be supplied to `generatedapks.download` method.',
      }),
  })
  .openapi({ description: 'Download metadata for a universal APK.', required: [] })
  .openapi('GeneratedUniversalApk')

const GeneratedApksPerSigningKeySchema = z
  .object({
    certificateSha256Hash: z
      .string()
      .exactOptional()
      .openapi({ description: 'SHA256 hash of the APK signing public key certificate.' }),
    generatedAssetPackSlices: z
      .array(GeneratedAssetPackSliceSchema)
      .exactOptional()
      .openapi({
        description:
          'List of asset pack slices which will be served for this app bundle, signed with a key corresponding to certificate_sha256_hash.',
      }),
    generatedSplitApks: z
      .array(GeneratedSplitApkSchema)
      .exactOptional()
      .openapi({
        description:
          'List of generated split APKs, signed with a key corresponding to certificate_sha256_hash.',
      }),
    generatedStandaloneApks: z
      .array(GeneratedStandaloneApkSchema)
      .exactOptional()
      .openapi({
        description:
          'List of generated standalone APKs, signed with a key corresponding to certificate_sha256_hash.',
      }),
    generatedUniversalApk: GeneratedUniversalApkSchema.exactOptional().openapi({
      description:
        'Generated universal APK, signed with a key corresponding to certificate_sha256_hash. This field is not set if no universal APK was generated for this signing key.',
    }),
  })
  .openapi({
    description:
      'Download metadata for split, standalone and universal APKs, as well as asset pack slices, signed with a given key.',
    required: [],
  })
  .openapi('GeneratedApksPerSigningKey')

const GeneratedApksListResponseSchema = z
  .object({
    generatedApks: z
      .array(GeneratedApksPerSigningKeySchema)
      .exactOptional()
      .openapi({ description: 'All generated APKs, grouped by the APK signing key.' }),
  })
  .openapi({ description: 'Response to list generated APKs.', required: [] })
  .openapi('GeneratedApksListResponse')

const GrantSchema = z
  .object({
    appLevelPermissions: z
      .array(
        z.enum([
          'APP_LEVEL_PERMISSION_UNSPECIFIED',
          'CAN_ACCESS_APP',
          'CAN_VIEW_FINANCIAL_DATA',
          'CAN_MANAGE_PERMISSIONS',
          'CAN_REPLY_TO_REVIEWS',
          'CAN_MANAGE_PUBLIC_APKS',
          'CAN_MANAGE_TRACK_APKS',
          'CAN_MANAGE_TRACK_USERS',
          'CAN_MANAGE_PUBLIC_LISTING',
          'CAN_MANAGE_DRAFT_APPS',
          'CAN_MANAGE_ORDERS',
          'CAN_MANAGE_APP_CONTENT',
        ]),
      )
      .exactOptional()
      .openapi({ description: 'The permissions granted to the user for this app.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Resource name for this grant, following the pattern "developers/{developer}/users/{email}/grants/{package_name}". If this grant is for a draft app, the app ID will be used in this resource name instead of the package name.',
      }),
    packageName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Immutable. The package name of the app. This will be empty for draft apps.',
      }),
  })
  .openapi({ description: 'An access grant resource.', required: [] })
  .openapi('Grant')

const ImageSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'A unique id representing this image.' }),
    sha1: z.string().exactOptional().openapi({ description: 'A sha1 hash of the image.' }),
    sha256: z.string().exactOptional().openapi({ description: 'A sha256 hash of the image.' }),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'A URL that will serve a preview of the image.' }),
  })
  .openapi({ description: 'An uploaded image. The resource for ImagesService.', required: [] })
  .openapi('Image')

const ImagesDeleteAllResponseSchema = z
  .object({
    deleted: z.array(ImageSchema).exactOptional().openapi({ description: 'The deleted images.' }),
  })
  .openapi({ description: 'Response for deleting all images.', required: [] })
  .openapi('ImagesDeleteAllResponse')

const ImagesListResponseSchema = z
  .object({
    images: z.array(ImageSchema).exactOptional().openapi({ description: 'All listed Images.' }),
  })
  .openapi({ description: 'Response listing all images.', required: [] })
  .openapi('ImagesListResponse')

const ImagesUploadResponseSchema = z
  .object({ image: ImageSchema.exactOptional().openapi({ description: 'The uploaded image.' }) })
  .openapi({ description: 'Response for uploading an image.', required: [] })
  .openapi('ImagesUploadResponse')

const InAppProductListingSchema = z
  .object({
    benefits: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Localized entitlement benefits for a subscription.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description for the store listing.' }),
    title: z.string().exactOptional().openapi({ description: 'Title for the store listing.' }),
  })
  .openapi({ description: 'Store listing of a single in-app product.', required: [] })
  .openapi('InAppProductListing')

const RegionalTaxRateInfoSchema = z
  .object({
    eligibleForStreamingServiceTaxRate: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'You must tell us if your app contains streaming products to correctly charge US state and local sales tax. Field only supported in United States.',
      }),
    streamingTaxType: z
      .enum([
        'STREAMING_TAX_TYPE_UNSPECIFIED',
        'STREAMING_TAX_TYPE_TELCO_VIDEO_RENTAL',
        'STREAMING_TAX_TYPE_TELCO_VIDEO_SALES',
        'STREAMING_TAX_TYPE_TELCO_VIDEO_MULTI_CHANNEL',
        'STREAMING_TAX_TYPE_TELCO_AUDIO_RENTAL',
        'STREAMING_TAX_TYPE_TELCO_AUDIO_SALES',
        'STREAMING_TAX_TYPE_TELCO_AUDIO_MULTI_CHANNEL',
      ])
      .exactOptional()
      .openapi({
        description:
          'To collect communications or amusement taxes in the United States, choose the appropriate tax category. [Learn more](https://support.google.com/googleplay/android-developer/answer/10463498#streaming_tax).',
      }),
    taxTier: z
      .enum([
        'TAX_TIER_UNSPECIFIED',
        'TAX_TIER_BOOKS_1',
        'TAX_TIER_NEWS_1',
        'TAX_TIER_NEWS_2',
        'TAX_TIER_MUSIC_OR_AUDIO_1',
        'TAX_TIER_LIVE_OR_BROADCAST_1',
      ])
      .exactOptional()
      .openapi({
        description:
          'Tax tier to specify reduced tax rate. Developers who sell digital news, magazines, newspapers, books, or audiobooks in various regions may be eligible for reduced tax rates. [Learn more](https://support.google.com/googleplay/android-developer/answer/10463498).',
      }),
  })
  .openapi({
    description: 'Specified details about taxation in a given geographical region.',
    required: [],
  })
  .openapi('RegionalTaxRateInfo')

const ManagedProductTaxAndComplianceSettingsSchema = z
  .object({
    eeaWithdrawalRightType: z
      .enum([
        'WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED',
        'WITHDRAWAL_RIGHT_DIGITAL_CONTENT',
        'WITHDRAWAL_RIGHT_SERVICE',
      ])
      .exactOptional()
      .openapi({
        description:
          'Digital content or service classification for products distributed to users in the European Economic Area (EEA). The withdrawal regime under EEA consumer laws depends on this classification. Refer to the [Help Center article](https://support.google.com/googleplay/android-developer/answer/10463498) for more information.',
      }),
    taxRateInfoByRegionCode: z
      .record(z.string(), RegionalTaxRateInfoSchema)
      .exactOptional()
      .openapi({
        description:
          'A mapping from region code to tax rate details. The keys are region codes as defined by Unicode\'s "CLDR".',
      }),
  })
  .openapi({
    description: 'Details about taxation and legal compliance for managed products.',
    required: [],
  })
  .openapi('ManagedProductTaxAndComplianceSettings')

const SubscriptionTaxAndComplianceSettingsSchema = z
  .object({
    eeaWithdrawalRightType: z
      .enum([
        'WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED',
        'WITHDRAWAL_RIGHT_DIGITAL_CONTENT',
        'WITHDRAWAL_RIGHT_SERVICE',
      ])
      .exactOptional()
      .openapi({
        description:
          'Digital content or service classification for products distributed to users in the European Economic Area (EEA). The withdrawal regime under EEA consumer laws depends on this classification. Refer to the [Help Center article](https://support.google.com/googleplay/android-developer/answer/10463498) for more information.',
      }),
    taxRateInfoByRegionCode: z
      .record(z.string(), RegionalTaxRateInfoSchema)
      .exactOptional()
      .openapi({
        description:
          'A mapping from region code to tax rate details. The keys are region codes as defined by Unicode\'s "CLDR".',
      }),
  })
  .openapi({
    description:
      'Details about taxation, Google Play policy and legal compliance for subscription products.',
    required: [],
  })
  .openapi('SubscriptionTaxAndComplianceSettings')

const InAppProductSchema = z
  .object({
    defaultLanguage: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Default language of the localized data, as defined by BCP-47. e.g. "en-US".',
      }),
    defaultPrice: PriceSchema.exactOptional().openapi({
      description:
        "Default price. Cannot be zero, as in-app products are never free. Always in the developer's Checkout merchant currency.",
    }),
    gracePeriod: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Grace period of the subscription, specified in ISO 8601 format. Allows developers to give their subscribers a grace period when the payment for the new recurrence period is declined. Acceptable values are P0D (zero days), P3D (three days), P7D (seven days), P14D (14 days), and P30D (30 days).',
      }),
    listings: z
      .record(z.string(), InAppProductListingSchema)
      .exactOptional()
      .openapi({
        description:
          'List of localized title and description data. Map key is the language of the localized data, as defined by BCP-47, e.g. "en-US".',
      }),
    managedProductTaxesAndComplianceSettings:
      ManagedProductTaxAndComplianceSettingsSchema.exactOptional().openapi({
        description:
          'Details about taxes and legal compliance. Only applicable to managed products.',
      }),
    packageName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Package name of the parent app.' }),
    prices: z
      .record(z.string(), PriceSchema)
      .exactOptional()
      .openapi({
        description:
          'Prices per buyer region. None of these can be zero, as in-app products are never free. Map key is region code, as defined by ISO 3166-2.',
      }),
    purchaseType: z
      .enum(['purchaseTypeUnspecified', 'managedUser', 'subscription'])
      .exactOptional()
      .openapi({ description: 'The type of the product, e.g. a recurring subscription.' }),
    sku: z
      .string()
      .exactOptional()
      .openapi({ description: 'Stock-keeping-unit (SKU) of the product, unique within an app.' }),
    status: z
      .enum(['statusUnspecified', 'active', 'inactive'])
      .exactOptional()
      .openapi({ description: "The status of the product, e.g. whether it's active." }),
    subscriptionPeriod: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Subscription period, specified in ISO 8601 format. Acceptable values are P1W (one week), P1M (one month), P3M (three months), P6M (six months), and P1Y (one year).',
      }),
    subscriptionTaxesAndComplianceSettings:
      SubscriptionTaxAndComplianceSettingsSchema.exactOptional().openapi({
        description:
          'Details about taxes and legal compliance. Only applicable to subscription products.',
      }),
    trialPeriod: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Trial period, specified in ISO 8601 format. Acceptable values are anything between P7D (seven days) and P999D (999 days).',
      }),
  })
  .openapi({
    description: 'An in-app product. The resource for InappproductsService.',
    required: [],
  })
  .openapi('InAppProduct')

const PageInfoSchema = z
  .object({
    resultPerPage: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Maximum number of results returned in one page. ! The number of results included in the API response.',
      }),
    startIndex: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Index of the first result returned in the current page.' }),
    totalResults: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Total number of results available on the backend ! The total number of results in the result set.',
      }),
  })
  .openapi({
    description:
      'Information about the current page. List operations that supports paging return only one "page" of results. This protocol buffer message describes the page that has been returned.',
    required: [],
  })
  .openapi('PageInfo')

const TokenPaginationSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Tokens to pass to the standard list field 'page_token'. Whenever available, tokens are preferred over manipulating start_index.",
      }),
    previousPageToken: z.string().exactOptional(),
  })
  .openapi({
    description:
      'Pagination information returned by a List operation when token pagination is enabled. List operations that supports paging return only one "page" of results. This protocol buffer message describes the page that has been returned. When using token pagination, clients should use the next/previous token to get another page of the result. The presence or absence of next/previous token indicates whether a next/previous page is available and provides a mean of accessing this page. ListRequest.page_token should be set to either next_page_token or previous_page_token to access another page.',
    required: [],
  })
  .openapi('TokenPagination')

const InappproductsListResponseSchema = z
  .object({
    inappproduct: z
      .array(InAppProductSchema)
      .exactOptional()
      .openapi({ description: 'All in-app products.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The kind of this response ("androidpublisher#inappproductsListResponse").',
      }),
    pageInfo: PageInfoSchema.exactOptional().openapi({ description: 'Deprecated and unset.' }),
    tokenPagination: TokenPaginationSchema.exactOptional().openapi({
      description: 'Pagination token, to handle a number of products that is over one page.',
    }),
  })
  .openapi({ description: 'Response listing all in-app products.', required: [] })
  .openapi('InappproductsListResponse')

const InternalAppSharingArtifactSchema = z
  .object({
    certificateFingerprint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The sha256 fingerprint of the certificate used to sign the generated artifact.',
      }),
    downloadUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The download URL generated for the uploaded artifact. Users that are authorized to download can follow the link to the Play Store app to install it.',
      }),
    sha256: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The sha256 hash of the artifact represented as a lowercase hexadecimal number, matching the output of the sha256sum command.',
      }),
  })
  .openapi({
    description:
      'An artifact resource which gets created when uploading an APK or Android App Bundle through internal app sharing.',
    required: [],
  })
  .openapi('InternalAppSharingArtifact')

const IntroductoryPriceInfoSchema = z
  .object({
    introductoryPriceAmountMicros: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Introductory price of the subscription, not including tax. The currency is the same as price_currency_code. Price is expressed in micro-units, where 1,000,000 micro-units represents one unit of the currency. For example, if the subscription price is €1.99, price_amount_micros is 1990000.',
      }),
    introductoryPriceCurrencyCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ISO 4217 currency code for the introductory subscription price. For example, if the price is specified in British pounds sterling, price_currency_code is "GBP".',
      }),
    introductoryPriceCycles: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of billing period to offer introductory pricing.' }),
    introductoryPricePeriod: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Introductory price period, specified in ISO 8601 format. Common values are (but not limited to) "P1W" (one week), "P1M" (one month), "P3M" (three months), "P6M" (six months), and "P1Y" (one year).',
      }),
  })
  .openapi({
    description: 'Contains the introductory price information for a subscription.',
    required: [],
  })
  .openapi('IntroductoryPriceInfo')

const ListDeviceTierConfigsResponseSchema = z
  .object({
    deviceTierConfigs: z
      .array(DeviceTierConfigSchema)
      .exactOptional()
      .openapi({ description: 'Device tier configs created by the developer.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
  })
  .openapi({ description: 'Response listing existing device tier configs.', required: [] })
  .openapi('ListDeviceTierConfigsResponse')

const OtherRegionsSubscriptionOfferConfigSchema = z
  .object({
    otherRegionsNewSubscriberAvailability: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the subscription offer in any new locations Play may launch in the future. If not specified, this will default to false.',
      }),
  })
  .openapi({
    description:
      'Configuration for any new locations Play may launch in specified on a subscription offer.',
    required: [],
  })
  .openapi('OtherRegionsSubscriptionOfferConfig')

const OtherRegionsSubscriptionOfferPhasePricesSchema = z
  .object({
    eurPrice: MoneySchema.exactOptional().openapi({
      description: 'Required. Price in EUR to use for any new locations Play may launch in.',
    }),
    usdPrice: MoneySchema.exactOptional().openapi({
      description: 'Required. Price in USD to use for any new locations Play may launch in.',
    }),
  })
  .openapi({
    description: 'Pricing information for any new locations Play may launch in.',
    required: [],
  })
  .openapi('OtherRegionsSubscriptionOfferPhasePrices')

const OtherRegionsSubscriptionOfferPhaseConfigSchema = z
  .object({
    absoluteDiscounts: OtherRegionsSubscriptionOfferPhasePricesSchema.exactOptional().openapi({
      description:
        'The absolute amount of money subtracted from the base plan price prorated over the phase duration that the user pays for this offer phase. For example, if the base plan price for this region is $12 for a period of 1 year, then a $1 absolute discount for a phase of a duration of 3 months would correspond to a price of $2. The resulting price may not be smaller than the minimum price allowed for any new locations Play may launch in.',
    }),
    otherRegionsPrices: OtherRegionsSubscriptionOfferPhasePricesSchema.exactOptional().openapi({
      description:
        'The absolute price the user pays for this offer phase. The price must not be smaller than the minimum price allowed for any new locations Play may launch in.',
    }),
    relativeDiscount: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The fraction of the base plan price prorated over the phase duration that the user pays for this offer phase. For example, if the base plan price for this region is $12 for a period of 1 year, then a 50% discount for a phase of a duration of 3 months would correspond to a price of $1.50. The discount must be specified as a fraction strictly larger than 0 and strictly smaller than 1. The resulting price will be rounded to the nearest billable unit (e.g. cents for USD). The relative discount is considered invalid if the discounted price ends up being smaller than the minimum price allowed in any new locations Play may launch in.',
      }),
  })
  .openapi({
    description: 'Configuration for any new locations Play may launch in for a single offer phase.',
    required: [],
  })
  .openapi('OtherRegionsSubscriptionOfferPhaseConfig')

const RegionalSubscriptionOfferPhaseConfigSchema = z
  .object({
    absoluteDiscount: MoneySchema.exactOptional().openapi({
      description:
        'The absolute amount of money subtracted from the base plan price prorated over the phase duration that the user pays for this offer phase. For example, if the base plan price for this region is $12 for a period of 1 year, then a $1 absolute discount for a phase of a duration of 3 months would correspond to a price of $2. The resulting price may not be smaller than the minimum price allowed for this region.',
    }),
    price: MoneySchema.exactOptional().openapi({
      description:
        'The absolute price the user pays for this offer phase. The price must not be smaller than the minimum price allowed for this region.',
    }),
    regionCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Immutable. The region to which this config applies.' }),
    relativeDiscount: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The fraction of the base plan price prorated over the phase duration that the user pays for this offer phase. For example, if the base plan price for this region is $12 for a period of 1 year, then a 50% discount for a phase of a duration of 3 months would correspond to a price of $1.50. The discount must be specified as a fraction strictly larger than 0 and strictly smaller than 1. The resulting price will be rounded to the nearest billable unit (e.g. cents for USD). The relative discount is considered invalid if the discounted price ends up being smaller than the minimum price allowed in this region.',
      }),
  })
  .openapi({
    description: 'Configuration for a single phase of a subscription offer in a single region.',
    required: [],
  })
  .openapi('RegionalSubscriptionOfferPhaseConfig')

const SubscriptionOfferPhaseSchema = z
  .object({
    duration: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The duration of a single recurrence of this phase. Specified in ISO 8601 format.',
      }),
    otherRegionsConfig: OtherRegionsSubscriptionOfferPhaseConfigSchema.exactOptional().openapi({
      description: 'Pricing information for any new locations Play may launch in.',
    }),
    recurrenceCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Required. The number of times this phase repeats. If this offer phase is not free, each recurrence charges the user the price of this offer phase.',
      }),
    regionalConfigs: z
      .array(RegionalSubscriptionOfferPhaseConfigSchema)
      .exactOptional()
      .openapi({
        description:
          'Required. The region-specific configuration of this offer phase. This list must contain exactly one entry for each region for which the subscription offer has a regional config.',
      }),
  })
  .openapi({ description: 'A single phase of a subscription offer.', required: [] })
  .openapi('SubscriptionOfferPhase')

const RegionalSubscriptionOfferConfigSchema = z
  .object({
    newSubscriberAvailability: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the subscription offer in the specified region is available for new subscribers. Existing subscribers will not have their subscription cancelled if this value is set to false. If not specified, this will default to false.',
      }),
    regionCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Immutable. Region code this configuration applies to, as defined by ISO 3166-2, e.g. "US".',
      }),
  })
  .openapi({
    description: 'Configuration for a subscription offer in a single region.',
    required: [],
  })
  .openapi('RegionalSubscriptionOfferConfig')

const UpgradeTargetingRuleSchema = z
  .object({
    billingPeriodDuration: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The specific billing period duration, specified in ISO 8601 format, that a user must be currently subscribed to to be eligible for this rule. If not specified, users subscribed to any billing period are matched.',
      }),
    oncePerUser: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Limit this offer to only once per user. If set to true, a user can never be eligible for this offer again if they ever subscribed to this offer.',
      }),
    scope: TargetingRuleScopeSchema.exactOptional().openapi({
      description:
        'Required. The scope of subscriptions this rule considers. Only allows "this subscription" and "specific subscription in app".',
    }),
  })
  .openapi({
    description:
      'Represents a targeting rule of the form: User currently has {scope} [with billing period {billing_period}].',
    required: [],
  })
  .openapi('UpgradeTargetingRule')

const SubscriptionOfferTargetingSchema = z
  .object({
    acquisitionRule: AcquisitionTargetingRuleSchema.exactOptional().openapi({
      description: 'Offer targeting rule for new user acquisition.',
    }),
    upgradeRule: UpgradeTargetingRuleSchema.exactOptional().openapi({
      description: "Offer targeting rule for upgrading users' existing plans.",
    }),
  })
  .openapi({
    description: 'Defines the rule a user needs to satisfy to receive this offer.',
    required: [],
  })
  .openapi('SubscriptionOfferTargeting')

const SubscriptionOfferSchema = z
  .object({
    basePlanId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Immutable. The ID of the base plan to which this offer is an extension.',
      }),
    offerId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Immutable. Unique ID of this subscription offer. Must be unique within the base plan.',
      }),
    offerTags: z
      .array(OfferTagSchema)
      .exactOptional()
      .openapi({
        description:
          'List of up to 20 custom tags specified for this offer, and returned to the app through the billing library.',
      }),
    otherRegionsConfig: OtherRegionsSubscriptionOfferConfigSchema.exactOptional().openapi({
      description: 'The configuration for any new locations Play may launch in the future.',
    }),
    packageName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Immutable. The package name of the app the parent subscription belongs to.',
      }),
    phases: z
      .array(SubscriptionOfferPhaseSchema)
      .exactOptional()
      .openapi({
        description:
          'Required. The phases of this subscription offer. Must contain at least one entry, and may contain at most five. Users will always receive all these phases in the specified order. Phases may not be added, removed, or reordered after initial creation.',
      }),
    productId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Immutable. The ID of the parent subscription this offer belongs to.',
      }),
    regionalConfigs: z
      .array(RegionalSubscriptionOfferConfigSchema)
      .exactOptional()
      .openapi({
        description:
          'Required. The region-specific configuration of this offer. Must contain at least one entry.',
      }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'DRAFT', 'ACTIVE', 'INACTIVE'])
      .exactOptional()
      .openapi({
        description:
          'Output only. The current state of this offer. Can be changed using Activate and Deactivate actions. NB: the base plan state supersedes this state, so an active offer may not be available if the base plan is not active.',
        readOnly: true,
      }),
    targeting: SubscriptionOfferTargetingSchema.exactOptional().openapi({
      description:
        'The requirements that users need to fulfil to be eligible for this offer. Represents the requirements that Play will evaluate to decide whether an offer should be returned. Developers may further filter these offers themselves.',
    }),
  })
  .openapi({ description: 'A single, temporary offer', required: [] })
  .openapi('SubscriptionOffer')

const ListSubscriptionOffersResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
    subscriptionOffers: z
      .array(SubscriptionOfferSchema)
      .exactOptional()
      .openapi({ description: 'The subscription offers from the specified subscription.' }),
  })
  .openapi({ description: 'Response message for ListSubscriptionOffers.', required: [] })
  .openapi('ListSubscriptionOffersResponse')

const SubscriptionListingSchema = z
  .object({
    benefits: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of benefits shown to the user on platforms such as the Play Store and in restoration flows in the language of this listing. Plain text. Ordered list of at most four benefits.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The description of this subscription in the language of this listing. Maximum length - 80 characters. Plain text.',
      }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. The language of this listing, as defined by BCP-47, e.g. "en-US".',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The title of this subscription in the language of this listing. Plain text.',
      }),
  })
  .openapi({ description: 'The consumer-visible metadata of a subscription.', required: [] })
  .openapi('SubscriptionListing')

const SubscriptionSchema = z
  .object({
    archived: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Whether this subscription is archived. Archived subscriptions are not available to any subscriber any longer, cannot be updated, and are not returned in list requests unless the show archived flag is passed in.',
        readOnly: true,
      }),
    basePlans: z
      .array(BasePlanSchema)
      .exactOptional()
      .openapi({
        description:
          'The set of base plans for this subscription. Represents the prices and duration of the subscription if no other offers apply.',
      }),
    listings: z
      .array(SubscriptionListingSchema)
      .exactOptional()
      .openapi({
        description:
          'Required. List of localized listings for this subscription. Must contain at least an entry for the default language of the parent app.',
      }),
    packageName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Immutable. Package name of the parent app.' }),
    productId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. Unique product ID of the product. Unique within the parent app. Product IDs must be composed of lower-case letters (a-z), numbers (0-9), underscores (_) and dots (.). It must start with a lower-case letter or number, and be between 1 and 40 (inclusive) characters in length.',
      }),
    taxAndComplianceSettings: SubscriptionTaxAndComplianceSettingsSchema.exactOptional().openapi({
      description: 'Details about taxes and legal compliance.',
    }),
  })
  .openapi({ description: 'A single subscription for an app.', required: [] })
  .openapi('Subscription')

const ListSubscriptionsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
    subscriptions: z
      .array(SubscriptionSchema)
      .exactOptional()
      .openapi({ description: 'The subscriptions from the specified app.' }),
  })
  .openapi({ description: 'Response message for ListSubscriptions.', required: [] })
  .openapi('ListSubscriptionsResponse')

const UserSchema = z
  .object({
    accessState: z
      .enum([
        'ACCESS_STATE_UNSPECIFIED',
        'INVITED',
        'INVITATION_EXPIRED',
        'ACCESS_GRANTED',
        'ACCESS_EXPIRED',
      ])
      .exactOptional()
      .openapi({
        description: "Output only. The state of the user's access to the Play Console.",
        readOnly: true,
      }),
    developerAccountPermissions: z
      .array(
        z.enum([
          'DEVELOPER_LEVEL_PERMISSION_UNSPECIFIED',
          'CAN_SEE_ALL_APPS',
          'CAN_VIEW_FINANCIAL_DATA_GLOBAL',
          'CAN_MANAGE_PERMISSIONS_GLOBAL',
          'CAN_EDIT_GAMES_GLOBAL',
          'CAN_PUBLISH_GAMES_GLOBAL',
          'CAN_REPLY_TO_REVIEWS_GLOBAL',
          'CAN_MANAGE_PUBLIC_APKS_GLOBAL',
          'CAN_MANAGE_TRACK_APKS_GLOBAL',
          'CAN_MANAGE_TRACK_USERS_GLOBAL',
          'CAN_MANAGE_PUBLIC_LISTING_GLOBAL',
          'CAN_MANAGE_DRAFT_APPS_GLOBAL',
          'CAN_CREATE_MANAGED_PLAY_APPS_GLOBAL',
          'CAN_CHANGE_MANAGED_PLAY_SETTING_GLOBAL',
          'CAN_MANAGE_ORDERS_GLOBAL',
          'CAN_MANAGE_APP_CONTENT_GLOBAL',
        ]),
      )
      .exactOptional()
      .openapi({
        description: 'Permissions for the user which apply across the developer account.',
      }),
    email: z
      .string()
      .exactOptional()
      .openapi({ description: "Immutable. The user's email address." }),
    expirationTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The time at which the user's access expires, if set. When setting this value, it must always be in the future.",
      }),
    grants: z
      .array(GrantSchema)
      .exactOptional()
      .openapi({ description: 'Output only. Per-app permissions for the user.', readOnly: true }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Resource name for this user, following the pattern "developers/{developer}/users/{email}".',
      }),
    partial: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Output only. Whether there are more permissions for the user that are not represented here. This can happen if the caller does not have permission to manage all apps in the account. This is also `true` if this user is the account owner. If this field is `true`, it should be taken as a signal that this user cannot be fully managed via the API. That is, the API caller is not be able to manage all of the permissions this user holds, either because it doesn't know about them or because the user is the account owner.",
        readOnly: true,
      }),
  })
  .openapi({ description: 'A user resource.', required: [] })
  .openapi('User')

const ListUsersResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to pass to subsequent calls in order to retrieve subsequent results. This will not be set if there are no more results to return.',
      }),
    users: z.array(UserSchema).exactOptional().openapi({ description: 'The resulting users.' }),
  })
  .openapi({
    description: 'A response containing one or more users with access to an account.',
    required: [],
  })
  .openapi('ListUsersResponse')

const ListingSchema = z
  .object({
    fullDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'Full description of the app.' }),
    language: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German).',
      }),
    shortDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'Short description of the app.' }),
    title: z.string().exactOptional().openapi({ description: 'Localized title of the app.' }),
    video: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL of a promotional YouTube video for the app.' }),
  })
  .openapi({
    description: 'A localized store listing. The resource for ListingsService.',
    required: [],
  })
  .openapi('Listing')

const ListingsListResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The kind of this response ("androidpublisher#listingsListResponse").',
      }),
    listings: z
      .array(ListingSchema)
      .exactOptional()
      .openapi({ description: 'All localized listings.' }),
  })
  .openapi({ description: 'Response listing all localized listings.', required: [] })
  .openapi('ListingsListResponse')

const LocalizedTextSchema = z
  .object({
    language: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German).',
      }),
    text: z.string().exactOptional().openapi({ description: 'The text in the given language.' }),
  })
  .openapi({ description: 'Localized text in given language.', required: [] })
  .openapi('LocalizedText')

const RegionalPriceMigrationConfigSchema = z
  .object({
    oldestAllowedPriceVersionTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The cutoff time for historical prices that subscribers can remain paying. Subscribers who are on a price that was created before this cutoff time will be migrated to the currently-offered price. These subscribers will receive a notification that they will be paying a different price. Subscribers who do not agree to the new price will have their subscription ended at the next renewal.',
      }),
    regionCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Region code this configuration applies to, as defined by ISO 3166-2, e.g. "US".',
      }),
  })
  .openapi({ description: 'Configuration for a price migration.', required: [] })
  .openapi('RegionalPriceMigrationConfig')

const RegionsVersionSchema = z
  .object({
    version: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. A string representing version of the available regions being used for the specified resource. The current version is 2022/02.',
      }),
  })
  .openapi({
    description: 'The version of the available regions being used for the specified resource.',
    required: [],
  })
  .openapi('RegionsVersion')

const MigrateBasePlanPricesRequestSchema = z
  .object({
    regionalPriceMigrations: z
      .array(RegionalPriceMigrationConfigSchema)
      .exactOptional()
      .openapi({ description: 'Required. The regional prices to update.' }),
    regionsVersion: RegionsVersionSchema.exactOptional().openapi({
      description:
        'Required. The version of the available regions being used for the regional_price_migrations.',
    }),
  })
  .openapi({ description: 'Request message for MigrateBasePlanPrices.', required: [] })
  .openapi('MigrateBasePlanPricesRequest')

const MigrateBasePlanPricesResponseSchema = z
  .object({})
  .openapi({ description: 'Response message for MigrateBasePlanPrices.' })
  .openapi('MigrateBasePlanPricesResponse')

const OfferDetailsSchema = z
  .object({
    basePlanId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The base plan ID. Present for all base plan and offers.' }),
    offerId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The offer ID. Only present for discounted offers.' }),
    offerTags: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The latest offer tags associated with the offer. It includes tags inherited from the base plan.',
      }),
  })
  .openapi({
    description: 'Offer details information related to a purchase line item.',
    required: [],
  })
  .openapi('OfferDetails')

const PartialRefundSchema = z
  .object({
    refundId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. A unique id distinguishing this partial refund. If the refund is successful, subsequent refunds with the same id will fail. Must be unique across refunds for one individual transaction.',
      }),
    refundPreTaxAmount: PriceSchema.exactOptional().openapi({
      description:
        'Required. The pre-tax amount of the partial refund. Should be less than the remaining pre-tax amount of the transaction.',
    }),
  })
  .openapi({ description: 'A partial refund of a transaction.', required: [] })
  .openapi('PartialRefund')

const PausedStateContextSchema = z
  .object({
    autoResumeTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time at which the subscription will be automatically resumed.' }),
  })
  .openapi({ description: 'Information specific to a subscription in paused state.', required: [] })
  .openapi('PausedStateContext')

const PrepaidPlanSchema = z
  .object({
    allowExtendAfterTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If present, this is the time after which top up purchases are allowed for the prepaid plan. Will not be present for expired prepaid plans.',
      }),
  })
  .openapi({ description: 'Information related to a prepaid plan.', required: [] })
  .openapi('PrepaidPlan')

const ProductPurchaseSchema = z
  .object({
    acknowledgementState: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The acknowledgement state of the inapp product. Possible values are: 0. Yet to be acknowledged 1. Acknowledged',
      }),
    consumptionState: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The consumption state of the inapp product. Possible values are: 0. Yet to be consumed 1. Consumed',
      }),
    developerPayload: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A developer-specified string that contains supplemental information about an order.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This kind represents an inappPurchase object in the androidpublisher service.',
      }),
    obfuscatedExternalAccountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "An obfuscated version of the id that is uniquely associated with the user's account in your app. Only present if specified using https://developer.android.com/reference/com/android/billingclient/api/BillingFlowParams.Builder#setobfuscatedaccountid when the purchase was made.",
      }),
    obfuscatedExternalProfileId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "An obfuscated version of the id that is uniquely associated with the user's profile in your app. Only present if specified using https://developer.android.com/reference/com/android/billingclient/api/BillingFlowParams.Builder#setobfuscatedprofileid when the purchase was made.",
      }),
    orderId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The order id associated with the purchase of the inapp product.' }),
    productId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The inapp product SKU. May not be present.' }),
    purchaseState: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The purchase state of the order. Possible values are: 0. Purchased 1. Canceled 2. Pending',
      }),
    purchaseTimeMillis: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time the product was purchased, in milliseconds since the epoch (Jan 1, 1970).',
      }),
    purchaseToken: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The purchase token generated to identify this purchase. May not be present.',
      }),
    purchaseType: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The type of purchase of the inapp product. This field is only set if this purchase was not made using the standard in-app billing flow. Possible values are: 0. Test (i.e. purchased from a license testing account) 1. Promo (i.e. purchased using a promo code) 2. Rewarded (i.e. from watching a video ad instead of paying)',
      }),
    quantity: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The quantity associated with the purchase of the inapp product. If not present, the quantity is 1.',
      }),
    regionCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ISO 3166-1 alpha-2 billing region code of the user at the time the product was granted.',
      }),
  })
  .openapi({
    description:
      "A ProductPurchase resource indicates the status of a user's inapp product purchase.",
    required: [],
  })
  .openapi('ProductPurchase')

const ProductPurchasesAcknowledgeRequestSchema = z
  .object({
    developerPayload: z
      .string()
      .exactOptional()
      .openapi({ description: 'Payload to attach to the purchase.' }),
  })
  .openapi({ description: 'Request for the product.purchases.acknowledge API.', required: [] })
  .openapi('ProductPurchasesAcknowledgeRequest')

const RefundExternalTransactionRequestSchema = z
  .object({
    fullRefund: FullRefundSchema.exactOptional().openapi({ description: 'A full-amount refund.' }),
    partialRefund: PartialRefundSchema.exactOptional().openapi({
      description: 'A partial refund.',
    }),
    refundTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The time that the transaction was refunded.' }),
  })
  .openapi({ description: 'A request to refund an existing external transaction.', required: [] })
  .openapi('RefundExternalTransactionRequest')

const ReviewSchema = z
  .object({
    authorName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the user who wrote the review.' }),
    comments: z
      .array(CommentSchema)
      .exactOptional()
      .openapi({ description: 'A repeated field containing comments for the review.' }),
    reviewId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier for this review.' }),
  })
  .openapi({ description: 'An Android app review.', required: [] })
  .openapi('Review')

const ReviewReplyResultSchema = z
  .object({
    lastEdited: TimestampSchema.exactOptional().openapi({
      description: 'The time at which the reply took effect.',
    }),
    replyText: z
      .string()
      .exactOptional()
      .openapi({ description: 'The reply text that was applied.' }),
  })
  .openapi({ description: 'The result of replying/updating a reply to review.', required: [] })
  .openapi('ReviewReplyResult')

const ReviewsListResponseSchema = z
  .object({
    pageInfo: PageInfoSchema.exactOptional().openapi({
      description: 'Information about the current page.',
    }),
    reviews: z.array(ReviewSchema).exactOptional().openapi({ description: 'List of reviews.' }),
    tokenPagination: TokenPaginationSchema.exactOptional().openapi({
      description: 'Pagination token, to handle a number of products that is over one page.',
    }),
  })
  .openapi({ description: 'Response listing reviews.', required: [] })
  .openapi('ReviewsListResponse')

const ReviewsReplyRequestSchema = z
  .object({
    replyText: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The text to set as the reply. Replies of more than approximately 350 characters will be rejected. HTML tags will be stripped.',
      }),
  })
  .openapi({ description: 'Request to reply to review or update existing reply.', required: [] })
  .openapi('ReviewsReplyRequest')

const ReviewsReplyResponseSchema = z
  .object({
    result: ReviewReplyResultSchema.exactOptional().openapi({
      description: 'The result of replying/updating a reply to review.',
    }),
  })
  .openapi({ description: 'Response on status of replying to a review.', required: [] })
  .openapi('ReviewsReplyResponse')

const SubscribeWithGoogleInfoSchema = z
  .object({
    emailAddress: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The email address of the user when the subscription was purchased.',
      }),
    familyName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The family name of the user when the subscription was purchased.' }),
    givenName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The given name of the user when the subscription was purchased.' }),
    profileId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The Google profile id of the user when the subscription was purchased.',
      }),
    profileName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The profile name of the user when the subscription was purchased.',
      }),
  })
  .openapi({
    description: "Information associated with purchases made with 'Subscribe with Google'.",
    required: [],
  })
  .openapi('SubscribeWithGoogleInfo')

const SubscriptionCancelSurveyResultSchema = z
  .object({
    cancelSurveyReason: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "The cancellation reason the user chose in the survey. Possible values are: 0. Other 1. I don't use this service enough 2. Technical issues 3. Cost-related reasons 4. I found a better app",
      }),
    userInputCancelReason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The customized input cancel reason from the user. Only present when cancelReason is 0.',
      }),
  })
  .openapi({
    description:
      'Information provided by the user when they complete the subscription cancellation flow (cancellation reason survey).',
    required: [],
  })
  .openapi('SubscriptionCancelSurveyResult')

const SubscriptionDeferralInfoSchema = z
  .object({
    desiredExpiryTimeMillis: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The desired next expiry time to assign to the subscription, in milliseconds since the Epoch. The given time must be later/greater than the current expiry time for the subscription.',
      }),
    expectedExpiryTimeMillis: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The expected expiry time for the subscription. If the current expiry time for the subscription is not the value specified here, the deferral will not occur.',
      }),
  })
  .openapi({
    description:
      'A SubscriptionDeferralInfo contains the data needed to defer a subscription purchase to a future expiry time.',
    required: [],
  })
  .openapi('SubscriptionDeferralInfo')

const SubscriptionPriceChangeSchema = z
  .object({
    newPrice: PriceSchema.exactOptional().openapi({
      description:
        'The new price the subscription will renew with if the price change is accepted by the user.',
    }),
    state: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "The current state of the price change. Possible values are: 0. Outstanding: State for a pending price change waiting for the user to agree. In this state, you can optionally seek confirmation from the user using the In-App API. 1. Accepted: State for an accepted price change that the subscription will renew with unless it's canceled. The price change takes effect on a future date when the subscription renews. Note that the change might not occur when the subscription is renewed next.",
      }),
  })
  .openapi({
    description:
      'Contains the price change information for a subscription that can be used to control the user journey for the price change in the app. This can be in the form of seeking confirmation from the user or tailoring the experience for a successful conversion.',
    required: [],
  })
  .openapi('SubscriptionPriceChange')

const SubscriptionPurchaseSchema = z
  .object({
    acknowledgementState: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The acknowledgement state of the subscription product. Possible values are: 0. Yet to be acknowledged 1. Acknowledged',
      }),
    autoRenewing: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the subscription will automatically be renewed when it reaches its current expiry time.',
      }),
    autoResumeTimeMillis: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time at which the subscription will be automatically resumed, in milliseconds since the Epoch. Only present if the user has requested to pause the subscription.',
      }),
    cancelReason: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The reason why a subscription was canceled or is not auto-renewing. Possible values are: 0. User canceled the subscription 1. Subscription was canceled by the system, for example because of a billing problem 2. Subscription was replaced with a new subscription 3. Subscription was canceled by the developer',
      }),
    cancelSurveyResult: SubscriptionCancelSurveyResultSchema.exactOptional().openapi({
      description:
        'Information provided by the user when they complete the subscription cancellation flow (cancellation reason survey).',
    }),
    countryCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ISO 3166-1 alpha-2 billing country/region code of the user at the time the subscription was granted.',
      }),
    developerPayload: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A developer-specified string that contains supplemental information about an order.',
      }),
    emailAddress: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The email address of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'.",
      }),
    expiryTimeMillis: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Time at which the subscription will expire, in milliseconds since the Epoch.',
      }),
    externalAccountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'User account identifier in the third-party service. Only present if account linking happened as part of the subscription purchase flow.',
      }),
    familyName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The family name of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'.",
      }),
    givenName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The given name of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'.",
      }),
    introductoryPriceInfo: IntroductoryPriceInfoSchema.exactOptional().openapi({
      description:
        'Introductory price information of the subscription. This is only present when the subscription was purchased with an introductory price. This field does not indicate the subscription is currently in introductory price period.',
    }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This kind represents a subscriptionPurchase object in the androidpublisher service.',
      }),
    linkedPurchaseToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The purchase token of the originating purchase if this subscription is one of the following: 0. Re-signup of a canceled but non-lapsed subscription 1. Upgrade/downgrade from a previous subscription For example, suppose a user originally signs up and you receive purchase token X, then the user cancels and goes through the resignup flow (before their subscription lapses) and you receive purchase token Y, and finally the user upgrades their subscription and you receive purchase token Z. If you call this API with purchase token Z, this field will be set to Y. If you call this API with purchase token Y, this field will be set to X. If you call this API with purchase token X, this field will not be set.',
      }),
    obfuscatedExternalAccountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "An obfuscated version of the id that is uniquely associated with the user's account in your app. Present for the following purchases: * If account linking happened as part of the subscription purchase flow. * It was specified using https://developer.android.com/reference/com/android/billingclient/api/BillingFlowParams.Builder#setobfuscatedaccountid when the purchase was made.",
      }),
    obfuscatedExternalProfileId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "An obfuscated version of the id that is uniquely associated with the user's profile in your app. Only present if specified using https://developer.android.com/reference/com/android/billingclient/api/BillingFlowParams.Builder#setobfuscatedprofileid when the purchase was made.",
      }),
    orderId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The order id of the latest recurring order associated with the purchase of the subscription. If the subscription was canceled because payment was declined, this will be the order id from the payment declined order.',
      }),
    paymentState: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The payment state of the subscription. Possible values are: 0. Payment pending 1. Payment received 2. Free trial 3. Pending deferred upgrade/downgrade Not present for canceled, expired subscriptions.',
      }),
    priceAmountMicros: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Price of the subscription, For tax exclusive countries, the price doesn't include tax. For tax inclusive countries, the price includes tax. Price is expressed in micro-units, where 1,000,000 micro-units represents one unit of the currency. For example, if the subscription price is €1.99, price_amount_micros is 1990000.",
      }),
    priceChange: SubscriptionPriceChangeSchema.exactOptional().openapi({
      description:
        'The latest price change information available. This is present only when there is an upcoming price change for the subscription yet to be applied. Once the subscription renews with the new price or the subscription is canceled, no price change information will be returned.',
    }),
    priceCurrencyCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ISO 4217 currency code for the subscription price. For example, if the price is specified in British pounds sterling, price_currency_code is "GBP".',
      }),
    profileId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The Google profile id of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'.",
      }),
    profileName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The profile name of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'.",
      }),
    promotionCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The promotion code applied on this purchase. This field is only set if a vanity code promotion is applied when the subscription was purchased.',
      }),
    promotionType: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The type of promotion applied on this purchase. This field is only set if a promotion is applied when the subscription was purchased. Possible values are: 0. One time code 1. Vanity code',
      }),
    purchaseType: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The type of purchase of the subscription. This field is only set if this purchase was not made using the standard in-app billing flow. Possible values are: 0. Test (i.e. purchased from a license testing account) 1. Promo (i.e. purchased using a promo code)',
      }),
    startTimeMillis: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Time at which the subscription was granted, in milliseconds since the Epoch.',
      }),
    userCancellationTimeMillis: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time at which the subscription was canceled by the user, in milliseconds since the epoch. Only present if cancelReason is 0.',
      }),
  })
  .openapi({
    description:
      "A SubscriptionPurchase resource indicates the status of a user's subscription purchase.",
    required: [],
  })
  .openapi('SubscriptionPurchase')

const SubscriptionPurchaseLineItemSchema = z
  .object({
    autoRenewingPlan: AutoRenewingPlanSchema.exactOptional().openapi({
      description: 'The item is auto renewing.',
    }),
    expiryTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time at which the subscription expired or will expire unless the access is extended (ex. renews).',
      }),
    offerDetails: OfferDetailsSchema.exactOptional().openapi({
      description: 'The offer details for this item.',
    }),
    prepaidPlan: PrepaidPlanSchema.exactOptional().openapi({ description: 'The item is prepaid.' }),
    productId: z
      .string()
      .exactOptional()
      .openapi({ description: "The purchased product ID (for example, 'monthly001')." }),
  })
  .openapi({ description: 'Item-level info for a subscription purchase.', required: [] })
  .openapi('SubscriptionPurchaseLineItem')

const TestPurchaseSchema = z
  .object({})
  .openapi({ description: 'Whether this subscription purchase is a test purchase.' })
  .openapi('TestPurchase')

const SubscriptionPurchaseV2Schema = z
  .object({
    acknowledgementState: z
      .enum([
        'ACKNOWLEDGEMENT_STATE_UNSPECIFIED',
        'ACKNOWLEDGEMENT_STATE_PENDING',
        'ACKNOWLEDGEMENT_STATE_ACKNOWLEDGED',
      ])
      .exactOptional()
      .openapi({ description: 'The acknowledgement state of the subscription.' }),
    canceledStateContext: CanceledStateContextSchema.exactOptional().openapi({
      description:
        'Additional context around canceled subscriptions. Only present if the subscription currently has subscription_state SUBSCRIPTION_STATE_CANCELED.',
    }),
    externalAccountIdentifiers: ExternalAccountIdentifiersSchema.exactOptional().openapi({
      description: 'User account identifier in the third-party service.',
    }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This kind represents a SubscriptionPurchaseV2 object in the androidpublisher service.',
      }),
    latestOrderId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The order id of the latest order associated with the purchase of the subscription. For autoRenewing subscription, this is the order id of signup order if it is not renewed yet, or the last recurring order id (success, pending, or declined order). For prepaid subscription, this is the order id associated with the queried purchase token.',
      }),
    lineItems: z
      .array(SubscriptionPurchaseLineItemSchema)
      .exactOptional()
      .openapi({
        description:
          'Item-level info for a subscription purchase. The items in the same purchase should be either all with AutoRenewingPlan or all with PrepaidPlan.',
      }),
    linkedPurchaseToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The purchase token of the old subscription if this subscription is one of the following: * Re-signup of a canceled but non-lapsed subscription * Upgrade/downgrade from a previous subscription. * Convert from prepaid to auto renewing subscription. * Convert from an auto renewing subscription to prepaid. * Topup a prepaid subscription.',
      }),
    pausedStateContext: PausedStateContextSchema.exactOptional().openapi({
      description:
        'Additional context around paused subscriptions. Only present if the subscription currently has subscription_state SUBSCRIPTION_STATE_PAUSED.',
    }),
    regionCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ISO 3166-1 alpha-2 billing country/region code of the user at the time the subscription was granted.',
      }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time at which the subscription was granted. Not set for pending subscriptions (subscription was created but awaiting payment during signup).',
      }),
    subscribeWithGoogleInfo: SubscribeWithGoogleInfoSchema.exactOptional().openapi({
      description: "User profile associated with purchases made with 'Subscribe with Google'.",
    }),
    subscriptionState: z
      .enum([
        'SUBSCRIPTION_STATE_UNSPECIFIED',
        'SUBSCRIPTION_STATE_PENDING',
        'SUBSCRIPTION_STATE_ACTIVE',
        'SUBSCRIPTION_STATE_PAUSED',
        'SUBSCRIPTION_STATE_IN_GRACE_PERIOD',
        'SUBSCRIPTION_STATE_ON_HOLD',
        'SUBSCRIPTION_STATE_CANCELED',
        'SUBSCRIPTION_STATE_EXPIRED',
      ])
      .exactOptional()
      .openapi({ description: 'The current state of the subscription.' }),
    testPurchase: TestPurchaseSchema.exactOptional().openapi({
      description: 'Only present if this subscription purchase is a test purchase.',
    }),
  })
  .openapi({ description: "Indicates the status of a user's subscription purchase.", required: [] })
  .openapi('SubscriptionPurchaseV2')

const SubscriptionPurchasesAcknowledgeRequestSchema = z
  .object({
    developerPayload: z
      .string()
      .exactOptional()
      .openapi({ description: 'Payload to attach to the purchase.' }),
  })
  .openapi({
    description: 'Request for the purchases.subscriptions.acknowledge API.',
    required: [],
  })
  .openapi('SubscriptionPurchasesAcknowledgeRequest')

const SubscriptionPurchasesDeferRequestSchema = z
  .object({
    deferralInfo: SubscriptionDeferralInfoSchema.exactOptional().openapi({
      description: 'The information about the new desired expiry time for the subscription.',
    }),
  })
  .openapi({ description: 'Request for the purchases.subscriptions.defer API.', required: [] })
  .openapi('SubscriptionPurchasesDeferRequest')

const SubscriptionPurchasesDeferResponseSchema = z
  .object({
    newExpiryTimeMillis: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The new expiry time for the subscription in milliseconds since the Epoch.',
      }),
  })
  .openapi({ description: 'Response for the purchases.subscriptions.defer API.', required: [] })
  .openapi('SubscriptionPurchasesDeferResponse')

const VariantSchema = z
  .object({
    deviceSpec: DeviceSpecSchema.exactOptional().openapi({
      description: 'The device spec used to generate the APK.',
    }),
    variantId: z
      .uint32()
      .exactOptional()
      .openapi({
        description: 'Output only. The ID of a previously created system APK variant.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'APK that is suitable for inclusion in a system image. The resource of SystemApksService.',
    required: [],
  })
  .openapi('Variant')

const SystemApksListResponseSchema = z
  .object({
    variants: z
      .array(VariantSchema)
      .exactOptional()
      .openapi({ description: 'All system APK variants created.' }),
  })
  .openapi({
    description: 'Response to list previously created system APK variants.',
    required: [],
  })
  .openapi('SystemApksListResponse')

const TestersSchema = z
  .object({
    googleGroups: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'All testing Google Groups, as email addresses.' }),
  })
  .openapi({
    description:
      'The testers of an app. The resource for TestersService. Note: while it is possible in the Play Console UI to add testers via email lists, email lists are not supported by this resource.',
    required: [],
  })
  .openapi('Testers')

const TrackReleaseSchema = z
  .object({
    countryTargeting: CountryTargetingSchema.exactOptional().openapi({
      description: 'Restricts a release to a specific set of countries.',
    }),
    inAppUpdatePriority: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'In-app update priority of the release. All newly added APKs in the release will be considered at this priority. Can take values in the range [0, 5], with 5 the highest priority. Defaults to 0. in_app_update_priority can not be updated once the release is rolled out. See https://developer.android.com/guide/playcore/in-app-updates.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The release name. Not required to be unique. If not set, the name is generated from the APK's version_name. If the release contains multiple APKs, the name is generated from the date.",
      }),
    releaseNotes: z
      .array(LocalizedTextSchema)
      .exactOptional()
      .openapi({ description: 'A description of what is new in this release.' }),
    status: z
      .enum(['statusUnspecified', 'draft', 'inProgress', 'halted', 'completed'])
      .exactOptional()
      .openapi({ description: 'The status of the release.' }),
    userFraction: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Fraction of users who are eligible for a staged release. 0 < fraction < 1. Can only be set when status is "inProgress" or "halted".',
      }),
    versionCodes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Version codes of all APKs in the release. Must include version codes to retain from previous releases.',
      }),
  })
  .openapi({ description: 'A release within a track.', required: [] })
  .openapi('TrackRelease')

const TrackSchema = z
  .object({
    releases: z
      .array(TrackReleaseSchema)
      .exactOptional()
      .openapi({
        description:
          'In a read request, represents all active releases in the track. In an update request, represents desired changes.',
      }),
    track: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifier of the track. Form factor tracks have a special prefix as an identifier, for example `wear:production`, `automotive:production`. [More on track name](https://developers.google.com/android-publisher/tracks#ff-track-name)',
      }),
  })
  .openapi({ description: 'A track configuration. The resource for TracksService.', required: [] })
  .openapi('Track')

const TrackTargetedCountrySchema = z
  .object({
    countryCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The country to target, as a two-letter CLDR code.' }),
  })
  .openapi({
    description: 'Representation of a single country where the contents of a track are available.',
    required: [],
  })
  .openapi('TrackTargetedCountry')

const TrackCountryAvailabilitySchema = z
  .object({
    countries: z
      .array(TrackTargetedCountrySchema)
      .exactOptional()
      .openapi({
        description:
          'A list of one or more countries where artifacts in this track are available. This list includes all countries that are targeted by the track, even if only specific carriers are targeted in that country.',
      }),
    restOfWorld: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether artifacts in this track are available to "rest of the world" countries.',
      }),
    syncWithProduction: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether this track\'s availability is synced with the default production track. See https://support.google.com/googleplay/android-developer/answer/7550024 for more information on syncing country availability with production. Note that if this is true, the returned "countries" and "rest_of_world" fields will reflect the values for the default production track.',
      }),
  })
  .openapi({
    description: 'Resource for per-track country availability information.',
    required: [],
  })
  .openapi('TrackCountryAvailability')

const TracksListResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The kind of this response ("androidpublisher#tracksListResponse").',
      }),
    tracks: z.array(TrackSchema).exactOptional().openapi({ description: 'All tracks.' }),
  })
  .openapi({ description: 'Response listing all tracks.', required: [] })
  .openapi('TracksListResponse')

const VoidedPurchaseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This kind represents a voided purchase object in the androidpublisher service.',
      }),
    orderId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The order id which uniquely identifies a one-time purchase, subscription purchase, or subscription renewal.',
      }),
    purchaseTimeMillis: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time at which the purchase was made, in milliseconds since the epoch (Jan 1, 1970).',
      }),
    purchaseToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The token which uniquely identifies a one-time purchase or subscription. To uniquely identify subscription renewals use order_id (available starting from version 3 of the API).',
      }),
    voidedReason: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The reason why the purchase was voided, possible values are: 0. Other 1. Remorse 2. Not_received 3. Defective 4. Accidental_purchase 5. Fraud 6. Friendly_fraud 7. Chargeback',
      }),
    voidedSource: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The initiator of voided purchase, possible values are: 0. User 1. Developer 2. Google',
      }),
    voidedTimeMillis: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time at which the purchase was canceled/refunded/charged-back, in milliseconds since the epoch (Jan 1, 1970).',
      }),
  })
  .openapi({
    description:
      'A VoidedPurchase resource indicates a purchase that was either canceled/refunded/charged-back.',
    required: [],
  })
  .openapi('VoidedPurchase')

const VoidedPurchasesListResponseSchema = z
  .object({
    pageInfo: PageInfoSchema.exactOptional().openapi({
      description: 'General pagination information.',
    }),
    tokenPagination: TokenPaginationSchema.exactOptional().openapi({
      description: 'Pagination information for token pagination.',
    }),
    voidedPurchases: z.array(VoidedPurchaseSchema).exactOptional(),
  })
  .openapi({ description: 'Response for the voidedpurchases.list API.', required: [] })
  .openapi('VoidedPurchasesListResponse')

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
        'https://www.googleapis.com/auth/androidpublisher':
          'View and manage your Google Play Developer account',
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
        'https://www.googleapis.com/auth/androidpublisher':
          'View and manage your Google Play Developer account',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const postAndroidpublisherV3ApplicationsInternalappsharingPackageNameArtifactsApkRoute =
  createRoute({
    method: 'post',
    path: '/androidpublisher/v3/applications/internalappsharing/{packageName}/artifacts/apk',
    tags: ['internalappsharingartifacts'],
    description:
      'Uploads an APK to internal app sharing. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.',
    operationId: 'androidpublisher.internalappsharingartifacts.uploadapk',
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
        packageName: z
          .string()
          .openapi({
            param: {
              description: 'Package name of the app.',
              in: 'path',
              name: 'packageName',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: InternalAppSharingArtifactSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
        Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
      },
    ],
  })

export const postAndroidpublisherV3ApplicationsInternalappsharingPackageNameArtifactsBundleRoute =
  createRoute({
    method: 'post',
    path: '/androidpublisher/v3/applications/internalappsharing/{packageName}/artifacts/bundle',
    tags: ['internalappsharingartifacts'],
    description:
      'Uploads an app bundle to internal app sharing. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.',
    operationId: 'androidpublisher.internalappsharingartifacts.uploadbundle',
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
        packageName: z
          .string()
          .openapi({
            param: {
              description: 'Package name of the app.',
              in: 'path',
              name: 'packageName',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: InternalAppSharingArtifactSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
        Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
      },
    ],
  })

export const getAndroidpublisherV3ApplicationsPackageNameDeviceTierConfigsRoute = createRoute({
  method: 'get',
  path: '/androidpublisher/v3/applications/{packageName}/deviceTierConfigs',
  tags: ['applications'],
  description: 'Returns created device tier configs, ordered by descending creation time.',
  operationId: 'androidpublisher.applications.deviceTierConfigs.list',
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
              'The maximum number of device tier configs to return. The service may return fewer than this value. If unspecified, at most 10 device tier configs will be returned. The maximum value for this field is 100; values above 100 will be coerced to 100. Device tier configs will be ordered by descending creation time.',
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
              'A page token, received from a previous `ListDeviceTierConfigs` call. Provide this to retrieve the subsequent page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      packageName: z
        .string()
        .openapi({
          param: {
            description: 'Package name of the app.',
            in: 'path',
            name: 'packageName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListDeviceTierConfigsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
      Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
    },
  ],
})

export const postAndroidpublisherV3ApplicationsPackageNameDeviceTierConfigsRoute = createRoute({
  method: 'post',
  path: '/androidpublisher/v3/applications/{packageName}/deviceTierConfigs',
  tags: ['applications'],
  description: 'Creates a new device tier config for an app.',
  operationId: 'androidpublisher.applications.deviceTierConfigs.create',
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
      allowUnknownDevices: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Whether the service should accept device IDs that are unknown to Play's device catalog.",
            in: 'query',
            name: 'allowUnknownDevices',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      packageName: z
        .string()
        .openapi({
          param: {
            description: 'Package name of the app.',
            in: 'path',
            name: 'packageName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeviceTierConfigSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DeviceTierConfigSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
      Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
    },
  ],
})

export const getAndroidpublisherV3ApplicationsPackageNameDeviceTierConfigsDeviceTierConfigIdRoute =
  createRoute({
    method: 'get',
    path: '/androidpublisher/v3/applications/{packageName}/deviceTierConfigs/{deviceTierConfigId}',
    tags: ['applications'],
    description: 'Returns a particular device tier config.',
    operationId: 'androidpublisher.applications.deviceTierConfigs.get',
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
        packageName: z
          .string()
          .openapi({
            param: {
              description: 'Package name of the app.',
              in: 'path',
              name: 'packageName',
              required: true,
              schema: { type: 'string' },
            },
          }),
        deviceTierConfigId: z
          .string()
          .openapi({
            param: {
              description: 'Required. Id of an existing device tier config.',
              in: 'path',
              name: 'deviceTierConfigId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: DeviceTierConfigSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
        Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
      },
    ],
  })

export const postAndroidpublisherV3ApplicationsPackageNameEditsRoute = createRoute({
  method: 'post',
  path: '/androidpublisher/v3/applications/{packageName}/edits',
  tags: ['edits'],
  description: 'Creates a new edit for an app.',
  operationId: 'androidpublisher.edits.insert',
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
      packageName: z
        .string()
        .openapi({
          param: {
            description: 'Package name of the app.',
            in: 'path',
            name: 'packageName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AppEditSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AppEditSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
      Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
    },
  ],
})

export const getAndroidpublisherV3ApplicationsPackageNameEditsEditIdRoute = createRoute({
  method: 'get',
  path: '/androidpublisher/v3/applications/{packageName}/edits/{editId}',
  tags: ['edits'],
  description: 'Gets an app edit.',
  operationId: 'androidpublisher.edits.get',
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
      packageName: z
        .string()
        .openapi({
          param: {
            description: 'Package name of the app.',
            in: 'path',
            name: 'packageName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      editId: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the edit.',
            in: 'path',
            name: 'editId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AppEditSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
      Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
    },
  ],
})

export const deleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdRoute = createRoute({
  method: 'delete',
  path: '/androidpublisher/v3/applications/{packageName}/edits/{editId}',
  tags: ['edits'],
  description: 'Deletes an app edit.',
  operationId: 'androidpublisher.edits.delete',
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
      packageName: z
        .string()
        .openapi({
          param: {
            description: 'Package name of the app.',
            in: 'path',
            name: 'packageName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      editId: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the edit.',
            in: 'path',
            name: 'editId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
      Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
    },
  ],
})

export const getAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksRoute = createRoute({
  method: 'get',
  path: '/androidpublisher/v3/applications/{packageName}/edits/{editId}/apks',
  tags: ['edits'],
  description: 'Lists all current APKs of the app and edit.',
  operationId: 'androidpublisher.edits.apks.list',
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
      packageName: z
        .string()
        .openapi({
          param: {
            description: 'Package name of the app.',
            in: 'path',
            name: 'packageName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      editId: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the edit.',
            in: 'path',
            name: 'editId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ApksListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
      Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
    },
  ],
})

export const postAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksRoute = createRoute({
  method: 'post',
  path: '/androidpublisher/v3/applications/{packageName}/edits/{editId}/apks',
  tags: ['edits'],
  description: 'Uploads an APK and adds to the current edit.',
  operationId: 'androidpublisher.edits.apks.upload',
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
      packageName: z
        .string()
        .openapi({
          param: {
            description: 'Package name of the app.',
            in: 'path',
            name: 'packageName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      editId: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the edit.',
            in: 'path',
            name: 'editId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ApkSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
      Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
    },
  ],
})

export const postAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksExternallyHostedRoute =
  createRoute({
    method: 'post',
    path: '/androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/externallyHosted',
    tags: ['edits'],
    description:
      'Creates a new APK without uploading the APK itself to Google Play, instead hosting the APK at a specified URL. This function is only available to organizations using Managed Play whose application is configured to restrict distribution to the organizations.',
    operationId: 'androidpublisher.edits.apks.addexternallyhosted',
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
        packageName: z
          .string()
          .openapi({
            param: {
              description: 'Package name of the app.',
              in: 'path',
              name: 'packageName',
              required: true,
              schema: { type: 'string' },
            },
          }),
        editId: z
          .string()
          .openapi({
            param: {
              description: 'Identifier of the edit.',
              in: 'path',
              name: 'editId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: ApksAddExternallyHostedRequestSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ApksAddExternallyHostedResponseSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
        Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
      },
    ],
  })

export const postAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeDeobfuscationFilesDeobfuscationFileTypeRoute =
  createRoute({
    method: 'post',
    path: '/androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/deobfuscationFiles/{deobfuscationFileType}',
    tags: ['edits'],
    description: 'Uploads a new deobfuscation file and attaches to the specified APK.',
    operationId: 'androidpublisher.edits.deobfuscationfiles.upload',
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
        packageName: z
          .string()
          .openapi({
            param: {
              description: 'Unique identifier for the Android app.',
              in: 'path',
              name: 'packageName',
              required: true,
              schema: { type: 'string' },
            },
          }),
        editId: z
          .string()
          .openapi({
            param: {
              description: 'Unique identifier for this edit.',
              in: 'path',
              name: 'editId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        apkVersionCode: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int(),
          )
          .openapi({
            param: {
              description:
                'The version code of the APK whose Deobfuscation File is being uploaded.',
              in: 'path',
              name: 'apkVersionCode',
              required: true,
              schema: { type: 'integer' },
            },
          }),
        deobfuscationFileType: z
          .enum(['deobfuscationFileTypeUnspecified', 'proguard', 'nativeCode'])
          .openapi({
            param: {
              description: 'The type of the deobfuscation file.',
              in: 'path',
              name: 'deobfuscationFileType',
              required: true,
              schema: {
                enum: ['deobfuscationFileTypeUnspecified', 'proguard', 'nativeCode'],
                type: 'string',
              },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: DeobfuscationFilesUploadResponseSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
        Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
      },
    ],
  })

export const getAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeExpansionFilesExpansionFileTypeRoute =
  createRoute({
    method: 'get',
    path: '/androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}',
    tags: ['edits'],
    description: 'Fetches the expansion file configuration for the specified APK.',
    operationId: 'androidpublisher.edits.expansionfiles.get',
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
        packageName: z
          .string()
          .openapi({
            param: {
              description: 'Package name of the app.',
              in: 'path',
              name: 'packageName',
              required: true,
              schema: { type: 'string' },
            },
          }),
        editId: z
          .string()
          .openapi({
            param: {
              description: 'Identifier of the edit.',
              in: 'path',
              name: 'editId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        apkVersionCode: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int(),
          )
          .openapi({
            param: {
              description:
                'The version code of the APK whose expansion file configuration is being read or modified.',
              in: 'path',
              name: 'apkVersionCode',
              required: true,
              schema: { type: 'integer' },
            },
          }),
        expansionFileType: z
          .enum(['expansionFileTypeUnspecified', 'main', 'patch'])
          .openapi({
            param: {
              description:
                'The file type of the file configuration which is being read or modified.',
              in: 'path',
              name: 'expansionFileType',
              required: true,
              schema: { enum: ['expansionFileTypeUnspecified', 'main', 'patch'], type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ExpansionFileSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
        Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
      },
    ],
  })

export const putAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeExpansionFilesExpansionFileTypeRoute =
  createRoute({
    method: 'put',
    path: '/androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}',
    tags: ['edits'],
    description:
      "Updates the APK's expansion file configuration to reference another APK's expansion file. To add a new expansion file use the Upload method.",
    operationId: 'androidpublisher.edits.expansionfiles.update',
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
        packageName: z
          .string()
          .openapi({
            param: {
              description: 'Package name of the app.',
              in: 'path',
              name: 'packageName',
              required: true,
              schema: { type: 'string' },
            },
          }),
        editId: z
          .string()
          .openapi({
            param: {
              description: 'Identifier of the edit.',
              in: 'path',
              name: 'editId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        apkVersionCode: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int(),
          )
          .openapi({
            param: {
              description:
                'The version code of the APK whose expansion file configuration is being read or modified.',
              in: 'path',
              name: 'apkVersionCode',
              required: true,
              schema: { type: 'integer' },
            },
          }),
        expansionFileType: z
          .enum(['expansionFileTypeUnspecified', 'main', 'patch'])
          .openapi({
            param: {
              description:
                'The file type of the file configuration which is being read or modified.',
              in: 'path',
              name: 'expansionFileType',
              required: true,
              schema: { enum: ['expansionFileTypeUnspecified', 'main', 'patch'], type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: ExpansionFileSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ExpansionFileSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
        Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
      },
    ],
  })

export const postAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeExpansionFilesExpansionFileTypeRoute =
  createRoute({
    method: 'post',
    path: '/androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}',
    tags: ['edits'],
    description: 'Uploads a new expansion file and attaches to the specified APK.',
    operationId: 'androidpublisher.edits.expansionfiles.upload',
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
        packageName: z
          .string()
          .openapi({
            param: {
              description: 'Package name of the app.',
              in: 'path',
              name: 'packageName',
              required: true,
              schema: { type: 'string' },
            },
          }),
        editId: z
          .string()
          .openapi({
            param: {
              description: 'Identifier of the edit.',
              in: 'path',
              name: 'editId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        apkVersionCode: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int(),
          )
          .openapi({
            param: {
              description:
                'The version code of the APK whose expansion file configuration is being read or modified.',
              in: 'path',
              name: 'apkVersionCode',
              required: true,
              schema: { type: 'integer' },
            },
          }),
        expansionFileType: z
          .enum(['expansionFileTypeUnspecified', 'main', 'patch'])
          .openapi({
            param: {
              description:
                'The file type of the expansion file configuration which is being updated.',
              in: 'path',
              name: 'expansionFileType',
              required: true,
              schema: { enum: ['expansionFileTypeUnspecified', 'main', 'patch'], type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ExpansionFilesUploadResponseSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
        Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
      },
    ],
  })

export const patchAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeExpansionFilesExpansionFileTypeRoute =
  createRoute({
    method: 'patch',
    path: '/androidpublisher/v3/applications/{packageName}/edits/{editId}/apks/{apkVersionCode}/expansionFiles/{expansionFileType}',
    tags: ['edits'],
    description:
      "Patches the APK's expansion file configuration to reference another APK's expansion file. To add a new expansion file use the Upload method.",
    operationId: 'androidpublisher.edits.expansionfiles.patch',
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
        packageName: z
          .string()
          .openapi({
            param: {
              description: 'Package name of the app.',
              in: 'path',
              name: 'packageName',
              required: true,
              schema: { type: 'string' },
            },
          }),
        editId: z
          .string()
          .openapi({
            param: {
              description: 'Identifier of the edit.',
              in: 'path',
              name: 'editId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        apkVersionCode: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int(),
          )
          .openapi({
            param: {
              description:
                'The version code of the APK whose expansion file configuration is being read or modified.',
              in: 'path',
              name: 'apkVersionCode',
              required: true,
              schema: { type: 'integer' },
            },
          }),
        expansionFileType: z
          .enum(['expansionFileTypeUnspecified', 'main', 'patch'])
          .openapi({
            param: {
              description:
                'The file type of the expansion file configuration which is being updated.',
              in: 'path',
              name: 'expansionFileType',
              required: true,
              schema: { enum: ['expansionFileTypeUnspecified', 'main', 'patch'], type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: ExpansionFileSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ExpansionFileSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
        Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
      },
    ],
  })

export const getAndroidpublisherV3ApplicationsPackageNameEditsEditIdBundlesRoute = createRoute({
  method: 'get',
  path: '/androidpublisher/v3/applications/{packageName}/edits/{editId}/bundles',
  tags: ['edits'],
  description: 'Lists all current Android App Bundles of the app and edit.',
  operationId: 'androidpublisher.edits.bundles.list',
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
      packageName: z
        .string()
        .openapi({
          param: {
            description: 'Package name of the app.',
            in: 'path',
            name: 'packageName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      editId: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the edit.',
            in: 'path',
            name: 'editId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BundlesListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
      Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
    },
  ],
})

export const postAndroidpublisherV3ApplicationsPackageNameEditsEditIdBundlesRoute = createRoute({
  method: 'post',
  path: '/androidpublisher/v3/applications/{packageName}/edits/{editId}/bundles',
  tags: ['edits'],
  description:
    'Uploads a new Android App Bundle to this edit. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.',
  operationId: 'androidpublisher.edits.bundles.upload',
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
      ackBundleInstallationWarning: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Must be set to true if the app bundle installation may trigger a warning on user devices (for example, if installation size may be over a threshold, typically 100 MB).',
            in: 'query',
            name: 'ackBundleInstallationWarning',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      deviceTierConfigId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Device tier config (DTC) to be used for generating deliverables (APKs). Contains id of the DTC or "LATEST" for last uploaded DTC.',
            in: 'query',
            name: 'deviceTierConfigId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      packageName: z
        .string()
        .openapi({
          param: {
            description: 'Package name of the app.',
            in: 'path',
            name: 'packageName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      editId: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the edit.',
            in: 'path',
            name: 'editId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BundleSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
      Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
    },
  ],
})

export const getAndroidpublisherV3ApplicationsPackageNameEditsEditIdCountryAvailabilityTrackRoute =
  createRoute({
    method: 'get',
    path: '/androidpublisher/v3/applications/{packageName}/edits/{editId}/countryAvailability/{track}',
    tags: ['edits'],
    description: 'Gets country availability.',
    operationId: 'androidpublisher.edits.countryavailability.get',
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
        packageName: z
          .string()
          .openapi({
            param: {
              description: 'Package name of the app.',
              in: 'path',
              name: 'packageName',
              required: true,
              schema: { type: 'string' },
            },
          }),
        editId: z
          .string()
          .openapi({
            param: {
              description: 'Identifier of the edit.',
              in: 'path',
              name: 'editId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        track: z
          .string()
          .openapi({
            param: {
              description: 'The track to read from.',
              in: 'path',
              name: 'track',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: TrackCountryAvailabilitySchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
        Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
      },
    ],
  })

export const getAndroidpublisherV3ApplicationsPackageNameEditsEditIdDetailsRoute = createRoute({
  method: 'get',
  path: '/androidpublisher/v3/applications/{packageName}/edits/{editId}/details',
  tags: ['edits'],
  description: 'Gets details of an app.',
  operationId: 'androidpublisher.edits.details.get',
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
      packageName: z
        .string()
        .openapi({
          param: {
            description: 'Package name of the app.',
            in: 'path',
            name: 'packageName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      editId: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the edit.',
            in: 'path',
            name: 'editId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AppDetailsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
      Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
    },
  ],
})

export const putAndroidpublisherV3ApplicationsPackageNameEditsEditIdDetailsRoute = createRoute({
  method: 'put',
  path: '/androidpublisher/v3/applications/{packageName}/edits/{editId}/details',
  tags: ['edits'],
  description: 'Updates details of an app.',
  operationId: 'androidpublisher.edits.details.update',
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
      packageName: z
        .string()
        .openapi({
          param: {
            description: 'Package name of the app.',
            in: 'path',
            name: 'packageName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      editId: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the edit.',
            in: 'path',
            name: 'editId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AppDetailsSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AppDetailsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
      Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
    },
  ],
})

export const patchAndroidpublisherV3ApplicationsPackageNameEditsEditIdDetailsRoute = createRoute({
  method: 'patch',
  path: '/androidpublisher/v3/applications/{packageName}/edits/{editId}/details',
  tags: ['edits'],
  description: 'Patches details of an app.',
  operationId: 'androidpublisher.edits.details.patch',
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
      packageName: z
        .string()
        .openapi({
          param: {
            description: 'Package name of the app.',
            in: 'path',
            name: 'packageName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      editId: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the edit.',
            in: 'path',
            name: 'editId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AppDetailsSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AppDetailsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
      Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
    },
  ],
})

export const getAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsRoute = createRoute({
  method: 'get',
  path: '/androidpublisher/v3/applications/{packageName}/edits/{editId}/listings',
  tags: ['edits'],
  description: 'Lists all localized store listings.',
  operationId: 'androidpublisher.edits.listings.list',
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
      packageName: z
        .string()
        .openapi({
          param: {
            description: 'Package name of the app.',
            in: 'path',
            name: 'packageName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      editId: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the edit.',
            in: 'path',
            name: 'editId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListingsListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
      Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
    },
  ],
})

export const deleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsRoute = createRoute({
  method: 'delete',
  path: '/androidpublisher/v3/applications/{packageName}/edits/{editId}/listings',
  tags: ['edits'],
  description: 'Deletes all store listings.',
  operationId: 'androidpublisher.edits.listings.deleteall',
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
      packageName: z
        .string()
        .openapi({
          param: {
            description: 'Package name of the app.',
            in: 'path',
            name: 'packageName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      editId: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the edit.',
            in: 'path',
            name: 'editId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
      Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
    },
  ],
})

export const getAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageRoute =
  createRoute({
    method: 'get',
    path: '/androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}',
    tags: ['edits'],
    description: 'Gets a localized store listing.',
    operationId: 'androidpublisher.edits.listings.get',
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
        packageName: z
          .string()
          .openapi({
            param: {
              description: 'Package name of the app.',
              in: 'path',
              name: 'packageName',
              required: true,
              schema: { type: 'string' },
            },
          }),
        editId: z
          .string()
          .openapi({
            param: {
              description: 'Identifier of the edit.',
              in: 'path',
              name: 'editId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        language: z
          .string()
          .openapi({
            param: {
              description:
                'Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German).',
              in: 'path',
              name: 'language',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ListingSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
        Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
      },
    ],
  })

export const putAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageRoute =
  createRoute({
    method: 'put',
    path: '/androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}',
    tags: ['edits'],
    description: 'Creates or updates a localized store listing.',
    operationId: 'androidpublisher.edits.listings.update',
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
        packageName: z
          .string()
          .openapi({
            param: {
              description: 'Package name of the app.',
              in: 'path',
              name: 'packageName',
              required: true,
              schema: { type: 'string' },
            },
          }),
        editId: z
          .string()
          .openapi({
            param: {
              description: 'Identifier of the edit.',
              in: 'path',
              name: 'editId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        language: z
          .string()
          .openapi({
            param: {
              description:
                'Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German).',
              in: 'path',
              name: 'language',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: ListingSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ListingSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
        Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
      },
    ],
  })

export const deleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageRoute =
  createRoute({
    method: 'delete',
    path: '/androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}',
    tags: ['edits'],
    description: 'Deletes a localized store listing.',
    operationId: 'androidpublisher.edits.listings.delete',
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
        packageName: z
          .string()
          .openapi({
            param: {
              description: 'Package name of the app.',
              in: 'path',
              name: 'packageName',
              required: true,
              schema: { type: 'string' },
            },
          }),
        editId: z
          .string()
          .openapi({
            param: {
              description: 'Identifier of the edit.',
              in: 'path',
              name: 'editId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        language: z
          .string()
          .openapi({
            param: {
              description:
                'Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German).',
              in: 'path',
              name: 'language',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: { 200: { description: 'Successful response' } },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
        Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
      },
    ],
  })

export const patchAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageRoute =
  createRoute({
    method: 'patch',
    path: '/androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}',
    tags: ['edits'],
    description: 'Patches a localized store listing.',
    operationId: 'androidpublisher.edits.listings.patch',
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
        packageName: z
          .string()
          .openapi({
            param: {
              description: 'Package name of the app.',
              in: 'path',
              name: 'packageName',
              required: true,
              schema: { type: 'string' },
            },
          }),
        editId: z
          .string()
          .openapi({
            param: {
              description: 'Identifier of the edit.',
              in: 'path',
              name: 'editId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        language: z
          .string()
          .openapi({
            param: {
              description:
                'Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German).',
              in: 'path',
              name: 'language',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: ListingSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ListingSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
        Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
      },
    ],
  })

export const getAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageImageTypeRoute =
  createRoute({
    method: 'get',
    path: '/androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}',
    tags: ['edits'],
    description: 'Lists all images. The response may be empty.',
    operationId: 'androidpublisher.edits.images.list',
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
        packageName: z
          .string()
          .openapi({
            param: {
              description: 'Package name of the app.',
              in: 'path',
              name: 'packageName',
              required: true,
              schema: { type: 'string' },
            },
          }),
        editId: z
          .string()
          .openapi({
            param: {
              description: 'Identifier of the edit.',
              in: 'path',
              name: 'editId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        language: z
          .string()
          .openapi({
            param: {
              description:
                'Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German). There must be a store listing for the specified language.',
              in: 'path',
              name: 'language',
              required: true,
              schema: { type: 'string' },
            },
          }),
        imageType: z
          .enum([
            'appImageTypeUnspecified',
            'phoneScreenshots',
            'sevenInchScreenshots',
            'tenInchScreenshots',
            'tvScreenshots',
            'wearScreenshots',
            'icon',
            'featureGraphic',
            'tvBanner',
          ])
          .openapi({
            param: {
              description:
                'Type of the Image. Providing an image type that refers to no images will return an empty response.',
              in: 'path',
              name: 'imageType',
              required: true,
              schema: {
                enum: [
                  'appImageTypeUnspecified',
                  'phoneScreenshots',
                  'sevenInchScreenshots',
                  'tenInchScreenshots',
                  'tvScreenshots',
                  'wearScreenshots',
                  'icon',
                  'featureGraphic',
                  'tvBanner',
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
        content: { 'application/json': { schema: ImagesListResponseSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
        Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
      },
    ],
  })

export const postAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageImageTypeRoute =
  createRoute({
    method: 'post',
    path: '/androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}',
    tags: ['edits'],
    description: 'Uploads an image of the specified language and image type, and adds to the edit.',
    operationId: 'androidpublisher.edits.images.upload',
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
        packageName: z
          .string()
          .openapi({
            param: {
              description: 'Package name of the app.',
              in: 'path',
              name: 'packageName',
              required: true,
              schema: { type: 'string' },
            },
          }),
        editId: z
          .string()
          .openapi({
            param: {
              description: 'Identifier of the edit.',
              in: 'path',
              name: 'editId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        language: z
          .string()
          .openapi({
            param: {
              description:
                'Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German). Providing a language that is not supported by the App is a no-op.',
              in: 'path',
              name: 'language',
              required: true,
              schema: { type: 'string' },
            },
          }),
        imageType: z
          .enum([
            'appImageTypeUnspecified',
            'phoneScreenshots',
            'sevenInchScreenshots',
            'tenInchScreenshots',
            'tvScreenshots',
            'wearScreenshots',
            'icon',
            'featureGraphic',
            'tvBanner',
          ])
          .openapi({
            param: {
              description: 'Type of the Image.',
              in: 'path',
              name: 'imageType',
              required: true,
              schema: {
                enum: [
                  'appImageTypeUnspecified',
                  'phoneScreenshots',
                  'sevenInchScreenshots',
                  'tenInchScreenshots',
                  'tvScreenshots',
                  'wearScreenshots',
                  'icon',
                  'featureGraphic',
                  'tvBanner',
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
        content: { 'application/json': { schema: ImagesUploadResponseSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
        Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
      },
    ],
  })

export const deleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageImageTypeRoute =
  createRoute({
    method: 'delete',
    path: '/androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}',
    tags: ['edits'],
    description:
      'Deletes all images for the specified language and image type. Returns an empty response if no images are found.',
    operationId: 'androidpublisher.edits.images.deleteall',
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
        packageName: z
          .string()
          .openapi({
            param: {
              description: 'Package name of the app.',
              in: 'path',
              name: 'packageName',
              required: true,
              schema: { type: 'string' },
            },
          }),
        editId: z
          .string()
          .openapi({
            param: {
              description: 'Identifier of the edit.',
              in: 'path',
              name: 'editId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        language: z
          .string()
          .openapi({
            param: {
              description:
                'Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German). Providing a language that is not supported by the App is a no-op.',
              in: 'path',
              name: 'language',
              required: true,
              schema: { type: 'string' },
            },
          }),
        imageType: z
          .enum([
            'appImageTypeUnspecified',
            'phoneScreenshots',
            'sevenInchScreenshots',
            'tenInchScreenshots',
            'tvScreenshots',
            'wearScreenshots',
            'icon',
            'featureGraphic',
            'tvBanner',
          ])
          .openapi({
            param: {
              description:
                'Type of the Image. Providing an image type that refers to no images is a no-op.',
              in: 'path',
              name: 'imageType',
              required: true,
              schema: {
                enum: [
                  'appImageTypeUnspecified',
                  'phoneScreenshots',
                  'sevenInchScreenshots',
                  'tenInchScreenshots',
                  'tvScreenshots',
                  'wearScreenshots',
                  'icon',
                  'featureGraphic',
                  'tvBanner',
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
        content: { 'application/json': { schema: ImagesDeleteAllResponseSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
        Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
      },
    ],
  })

export const deleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageImageTypeImageIdRoute =
  createRoute({
    method: 'delete',
    path: '/androidpublisher/v3/applications/{packageName}/edits/{editId}/listings/{language}/{imageType}/{imageId}',
    tags: ['edits'],
    description: 'Deletes the image (specified by id) from the edit.',
    operationId: 'androidpublisher.edits.images.delete',
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
        packageName: z
          .string()
          .openapi({
            param: {
              description: 'Package name of the app.',
              in: 'path',
              name: 'packageName',
              required: true,
              schema: { type: 'string' },
            },
          }),
        editId: z
          .string()
          .openapi({
            param: {
              description: 'Identifier of the edit.',
              in: 'path',
              name: 'editId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        language: z
          .string()
          .openapi({
            param: {
              description:
                'Language localization code (a BCP-47 language tag; for example, "de-AT" for Austrian German).',
              in: 'path',
              name: 'language',
              required: true,
              schema: { type: 'string' },
            },
          }),
        imageType: z
          .enum([
            'appImageTypeUnspecified',
            'phoneScreenshots',
            'sevenInchScreenshots',
            'tenInchScreenshots',
            'tvScreenshots',
            'wearScreenshots',
            'icon',
            'featureGraphic',
            'tvBanner',
          ])
          .openapi({
            param: {
              description: 'Type of the Image.',
              in: 'path',
              name: 'imageType',
              required: true,
              schema: {
                enum: [
                  'appImageTypeUnspecified',
                  'phoneScreenshots',
                  'sevenInchScreenshots',
                  'tenInchScreenshots',
                  'tvScreenshots',
                  'wearScreenshots',
                  'icon',
                  'featureGraphic',
                  'tvBanner',
                ],
                type: 'string',
              },
            },
          }),
        imageId: z
          .string()
          .openapi({
            param: {
              description:
                'Unique identifier an image within the set of images attached to this edit.',
              in: 'path',
              name: 'imageId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: { 200: { description: 'Successful response' } },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
        Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
      },
    ],
  })

export const getAndroidpublisherV3ApplicationsPackageNameEditsEditIdTestersTrackRoute = createRoute(
  {
    method: 'get',
    path: '/androidpublisher/v3/applications/{packageName}/edits/{editId}/testers/{track}',
    tags: ['edits'],
    description: 'Gets testers. Note: Testers resource does not support email lists.',
    operationId: 'androidpublisher.edits.testers.get',
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
        packageName: z
          .string()
          .openapi({
            param: {
              description: 'Package name of the app.',
              in: 'path',
              name: 'packageName',
              required: true,
              schema: { type: 'string' },
            },
          }),
        editId: z
          .string()
          .openapi({
            param: {
              description: 'Identifier of the edit.',
              in: 'path',
              name: 'editId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        track: z
          .string()
          .openapi({
            param: {
              description: 'The track to read from.',
              in: 'path',
              name: 'track',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: TestersSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
        Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
      },
    ],
  },
)

export const putAndroidpublisherV3ApplicationsPackageNameEditsEditIdTestersTrackRoute = createRoute(
  {
    method: 'put',
    path: '/androidpublisher/v3/applications/{packageName}/edits/{editId}/testers/{track}',
    tags: ['edits'],
    description: 'Updates testers. Note: Testers resource does not support email lists.',
    operationId: 'androidpublisher.edits.testers.update',
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
        packageName: z
          .string()
          .openapi({
            param: {
              description: 'Package name of the app.',
              in: 'path',
              name: 'packageName',
              required: true,
              schema: { type: 'string' },
            },
          }),
        editId: z
          .string()
          .openapi({
            param: {
              description: 'Identifier of the edit.',
              in: 'path',
              name: 'editId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        track: z
          .string()
          .openapi({
            param: {
              description: 'The track to update.',
              in: 'path',
              name: 'track',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: TestersSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: TestersSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
        Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
      },
    ],
  },
)

export const patchAndroidpublisherV3ApplicationsPackageNameEditsEditIdTestersTrackRoute =
  createRoute({
    method: 'patch',
    path: '/androidpublisher/v3/applications/{packageName}/edits/{editId}/testers/{track}',
    tags: ['edits'],
    description: 'Patches testers. Note: Testers resource does not support email lists.',
    operationId: 'androidpublisher.edits.testers.patch',
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
        packageName: z
          .string()
          .openapi({
            param: {
              description: 'Package name of the app.',
              in: 'path',
              name: 'packageName',
              required: true,
              schema: { type: 'string' },
            },
          }),
        editId: z
          .string()
          .openapi({
            param: {
              description: 'Identifier of the edit.',
              in: 'path',
              name: 'editId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        track: z
          .string()
          .openapi({
            param: {
              description: 'The track to update.',
              in: 'path',
              name: 'track',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: TestersSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: TestersSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
        Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
      },
    ],
  })

export const getAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracksRoute = createRoute({
  method: 'get',
  path: '/androidpublisher/v3/applications/{packageName}/edits/{editId}/tracks',
  tags: ['edits'],
  description: 'Lists all tracks.',
  operationId: 'androidpublisher.edits.tracks.list',
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
      packageName: z
        .string()
        .openapi({
          param: {
            description: 'Package name of the app.',
            in: 'path',
            name: 'packageName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      editId: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the edit.',
            in: 'path',
            name: 'editId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TracksListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
      Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
    },
  ],
})

export const getAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracksTrackRoute = createRoute({
  method: 'get',
  path: '/androidpublisher/v3/applications/{packageName}/edits/{editId}/tracks/{track}',
  tags: ['edits'],
  description: 'Gets a track.',
  operationId: 'androidpublisher.edits.tracks.get',
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
      packageName: z
        .string()
        .openapi({
          param: {
            description: 'Package name of the app.',
            in: 'path',
            name: 'packageName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      editId: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the edit.',
            in: 'path',
            name: 'editId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      track: z
        .string()
        .openapi({
          param: {
            description:
              'Identifier of the track. [More on track name](https://developers.google.com/android-publisher/tracks#ff-track-name)',
            in: 'path',
            name: 'track',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TrackSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
      Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
    },
  ],
})

export const putAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracksTrackRoute = createRoute({
  method: 'put',
  path: '/androidpublisher/v3/applications/{packageName}/edits/{editId}/tracks/{track}',
  tags: ['edits'],
  description: 'Updates a track.',
  operationId: 'androidpublisher.edits.tracks.update',
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
      packageName: z
        .string()
        .openapi({
          param: {
            description: 'Package name of the app.',
            in: 'path',
            name: 'packageName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      editId: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the edit.',
            in: 'path',
            name: 'editId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      track: z
        .string()
        .openapi({
          param: {
            description:
              'Identifier of the track. [More on track name](https://developers.google.com/android-publisher/tracks#ff-track-name)',
            in: 'path',
            name: 'track',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TrackSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TrackSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
      Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
    },
  ],
})

export const patchAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracksTrackRoute =
  createRoute({
    method: 'patch',
    path: '/androidpublisher/v3/applications/{packageName}/edits/{editId}/tracks/{track}',
    tags: ['edits'],
    description: 'Patches a track.',
    operationId: 'androidpublisher.edits.tracks.patch',
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
        packageName: z
          .string()
          .openapi({
            param: {
              description: 'Package name of the app.',
              in: 'path',
              name: 'packageName',
              required: true,
              schema: { type: 'string' },
            },
          }),
        editId: z
          .string()
          .openapi({
            param: {
              description: 'Identifier of the edit.',
              in: 'path',
              name: 'editId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        track: z
          .string()
          .openapi({
            param: {
              description:
                'Identifier of the track. [More on track name](https://developers.google.com/android-publisher/tracks#ff-track-name)',
              in: 'path',
              name: 'track',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: TrackSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: TrackSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
        Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
      },
    ],
  })

export const postAndroidpublisherV3ApplicationsPackageNameEditsEditIdCommitRoute = createRoute({
  method: 'post',
  path: '/androidpublisher/v3/applications/{packageName}/edits/{editId}:commit',
  tags: ['edits'],
  description: 'Commits an app edit.',
  operationId: 'androidpublisher.edits.commit',
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
      changesNotSentForReview: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Indicates that the changes in this edit will not be reviewed until they are explicitly sent for review from the Google Play Console UI. These changes will be added to any other changes that are not yet sent for review.',
            in: 'query',
            name: 'changesNotSentForReview',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      packageName: z
        .string()
        .openapi({
          param: {
            description: 'Package name of the app.',
            in: 'path',
            name: 'packageName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      editId: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the edit.',
            in: 'path',
            name: 'editId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AppEditSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
      Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
    },
  ],
})

export const postAndroidpublisherV3ApplicationsPackageNameEditsEditIdValidateRoute = createRoute({
  method: 'post',
  path: '/androidpublisher/v3/applications/{packageName}/edits/{editId}:validate',
  tags: ['edits'],
  description: 'Validates an app edit.',
  operationId: 'androidpublisher.edits.validate',
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
      packageName: z
        .string()
        .openapi({
          param: {
            description: 'Package name of the app.',
            in: 'path',
            name: 'packageName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      editId: z
        .string()
        .openapi({
          param: {
            description: 'Identifier of the edit.',
            in: 'path',
            name: 'editId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AppEditSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
      Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
    },
  ],
})

export const getAndroidpublisherV3ApplicationsPackageNameGeneratedApksVersionCodeRoute =
  createRoute({
    method: 'get',
    path: '/androidpublisher/v3/applications/{packageName}/generatedApks/{versionCode}',
    tags: ['generatedapks'],
    description:
      'Returns download metadata for all APKs that were generated from a given app bundle.',
    operationId: 'androidpublisher.generatedapks.list',
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
        packageName: z
          .string()
          .openapi({
            param: {
              description: 'Package name of the app.',
              in: 'path',
              name: 'packageName',
              required: true,
              schema: { type: 'string' },
            },
          }),
        versionCode: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int(),
          )
          .openapi({
            param: {
              description: 'Version code of the app bundle.',
              in: 'path',
              name: 'versionCode',
              required: true,
              schema: { type: 'integer' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: GeneratedApksListResponseSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
        Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
      },
    ],
  })

export const getAndroidpublisherV3ApplicationsPackageNameGeneratedApksVersionCodeDownloadsDownloadIdDownloadRoute =
  createRoute({
    method: 'get',
    path: '/androidpublisher/v3/applications/{packageName}/generatedApks/{versionCode}/downloads/{downloadId}:download',
    tags: ['generatedapks'],
    description: 'Downloads a single signed APK generated from an app bundle.',
    operationId: 'androidpublisher.generatedapks.download',
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
        packageName: z
          .string()
          .openapi({
            param: {
              description: 'Package name of the app.',
              in: 'path',
              name: 'packageName',
              required: true,
              schema: { type: 'string' },
            },
          }),
        versionCode: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int(),
          )
          .openapi({
            param: {
              description: 'Version code of the app bundle.',
              in: 'path',
              name: 'versionCode',
              required: true,
              schema: { type: 'integer' },
            },
          }),
        downloadId: z
          .string()
          .openapi({
            param: {
              description:
                'Download ID, which uniquely identifies the APK to download. Can be obtained from the response of `generatedapks.list` method.',
              in: 'path',
              name: 'downloadId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: { 200: { description: 'Successful response' } },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
        Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
      },
    ],
  })

export const getAndroidpublisherV3ApplicationsPackageNameInappproductsRoute = createRoute({
  method: 'get',
  path: '/androidpublisher/v3/applications/{packageName}/inappproducts',
  tags: ['inappproducts'],
  description:
    'Lists all in-app products - both managed products and subscriptions. If an app has a large number of in-app products, the response may be paginated. In this case the response field `tokenPagination.nextPageToken` will be set and the caller should provide its value as a `token` request parameter to retrieve the next page.',
  operationId: 'androidpublisher.inappproducts.list',
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
      maxResults: z
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
            description: 'Deprecated and ignored. The page size is determined by the server.',
            in: 'query',
            name: 'maxResults',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      startIndex: z
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
              'Deprecated and ignored. Set the `token` parameter to retrieve the next page.',
            in: 'query',
            name: 'startIndex',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Pagination token. If empty, list starts at the first product.',
            in: 'query',
            name: 'token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      packageName: z
        .string()
        .openapi({
          param: {
            description: 'Package name of the app.',
            in: 'path',
            name: 'packageName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: InappproductsListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
      Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
    },
  ],
})

export const postAndroidpublisherV3ApplicationsPackageNameInappproductsRoute = createRoute({
  method: 'post',
  path: '/androidpublisher/v3/applications/{packageName}/inappproducts',
  tags: ['inappproducts'],
  description: 'Creates an in-app product (i.e. a managed product or a subscription).',
  operationId: 'androidpublisher.inappproducts.insert',
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
      autoConvertMissingPrices: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false.",
            in: 'query',
            name: 'autoConvertMissingPrices',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      packageName: z
        .string()
        .openapi({
          param: {
            description: 'Package name of the app.',
            in: 'path',
            name: 'packageName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: InAppProductSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: InAppProductSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
      Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
    },
  ],
})

export const getAndroidpublisherV3ApplicationsPackageNameInappproductsSkuRoute = createRoute({
  method: 'get',
  path: '/androidpublisher/v3/applications/{packageName}/inappproducts/{sku}',
  tags: ['inappproducts'],
  description: 'Gets an in-app product, which can be a managed product or a subscription.',
  operationId: 'androidpublisher.inappproducts.get',
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
      packageName: z
        .string()
        .openapi({
          param: {
            description: 'Package name of the app.',
            in: 'path',
            name: 'packageName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      sku: z
        .string()
        .openapi({
          param: {
            description: 'Unique identifier for the in-app product.',
            in: 'path',
            name: 'sku',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: InAppProductSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
      Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
    },
  ],
})

export const putAndroidpublisherV3ApplicationsPackageNameInappproductsSkuRoute = createRoute({
  method: 'put',
  path: '/androidpublisher/v3/applications/{packageName}/inappproducts/{sku}',
  tags: ['inappproducts'],
  description: 'Updates an in-app product (i.e. a managed product or a subscription).',
  operationId: 'androidpublisher.inappproducts.update',
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
      allowMissing: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If set to true, and the in-app product with the given package_name and sku doesn't exist, the in-app product will be created.",
            in: 'query',
            name: 'allowMissing',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      autoConvertMissingPrices: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false.",
            in: 'query',
            name: 'autoConvertMissingPrices',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      packageName: z
        .string()
        .openapi({
          param: {
            description: 'Package name of the app.',
            in: 'path',
            name: 'packageName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      sku: z
        .string()
        .openapi({
          param: {
            description: 'Unique identifier for the in-app product.',
            in: 'path',
            name: 'sku',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: InAppProductSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: InAppProductSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
      Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
    },
  ],
})

export const deleteAndroidpublisherV3ApplicationsPackageNameInappproductsSkuRoute = createRoute({
  method: 'delete',
  path: '/androidpublisher/v3/applications/{packageName}/inappproducts/{sku}',
  tags: ['inappproducts'],
  description: 'Deletes an in-app product (i.e. a managed product or a subscription).',
  operationId: 'androidpublisher.inappproducts.delete',
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
      packageName: z
        .string()
        .openapi({
          param: {
            description: 'Package name of the app.',
            in: 'path',
            name: 'packageName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      sku: z
        .string()
        .openapi({
          param: {
            description: 'Unique identifier for the in-app product.',
            in: 'path',
            name: 'sku',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
      Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
    },
  ],
})

export const patchAndroidpublisherV3ApplicationsPackageNameInappproductsSkuRoute = createRoute({
  method: 'patch',
  path: '/androidpublisher/v3/applications/{packageName}/inappproducts/{sku}',
  tags: ['inappproducts'],
  description: 'Patches an in-app product (i.e. a managed product or a subscription).',
  operationId: 'androidpublisher.inappproducts.patch',
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
      autoConvertMissingPrices: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false.",
            in: 'query',
            name: 'autoConvertMissingPrices',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      packageName: z
        .string()
        .openapi({
          param: {
            description: 'Package name of the app.',
            in: 'path',
            name: 'packageName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      sku: z
        .string()
        .openapi({
          param: {
            description: 'Unique identifier for the in-app product.',
            in: 'path',
            name: 'sku',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: InAppProductSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: InAppProductSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
      Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
    },
  ],
})

export const postAndroidpublisherV3ApplicationsPackageNameOrdersOrderIdRefundRoute = createRoute({
  method: 'post',
  path: '/androidpublisher/v3/applications/{packageName}/orders/{orderId}:refund',
  tags: ['orders'],
  description:
    "Refunds a user's subscription or in-app purchase order. Orders older than 1 year cannot be refunded.",
  operationId: 'androidpublisher.orders.refund',
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
      revoke: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Whether to revoke the purchased item. If set to true, access to the subscription or in-app item will be terminated immediately. If the item is a recurring subscription, all future payments will also be terminated. Consumed in-app items need to be handled by developer's app. (optional).",
            in: 'query',
            name: 'revoke',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      packageName: z
        .string()
        .openapi({
          param: {
            description:
              "The package name of the application for which this subscription or in-app item was purchased (for example, 'com.some.thing').",
            in: 'path',
            name: 'packageName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      orderId: z
        .string()
        .openapi({
          param: {
            description:
              'The order ID provided to the user when the subscription or in-app order was purchased.',
            in: 'path',
            name: 'orderId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
      Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
    },
  ],
})

export const postAndroidpublisherV3ApplicationsPackageNamePricingConvertRegionPricesRoute =
  createRoute({
    method: 'post',
    path: '/androidpublisher/v3/applications/{packageName}/pricing:convertRegionPrices',
    tags: ['monetization'],
    description:
      "Calculates the region prices, using today's exchange rate and country-specific pricing patterns, based on the price in the request for a set of regions.",
    operationId: 'androidpublisher.monetization.convertRegionPrices',
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
        packageName: z
          .string()
          .openapi({
            param: {
              description: 'Required. The app package name.',
              in: 'path',
              name: 'packageName',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: ConvertRegionPricesRequestSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ConvertRegionPricesResponseSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
        Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
      },
    ],
  })

export const getAndroidpublisherV3ApplicationsPackageNamePurchasesProductsProductIdTokensTokenRoute =
  createRoute({
    method: 'get',
    path: '/androidpublisher/v3/applications/{packageName}/purchases/products/{productId}/tokens/{token}',
    tags: ['purchases'],
    description: 'Checks the purchase and consumption status of an inapp item.',
    operationId: 'androidpublisher.purchases.products.get',
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
        packageName: z
          .string()
          .openapi({
            param: {
              description:
                "The package name of the application the inapp product was sold in (for example, 'com.some.thing').",
              in: 'path',
              name: 'packageName',
              required: true,
              schema: { type: 'string' },
            },
          }),
        productId: z
          .string()
          .openapi({
            param: {
              description: "The inapp product SKU (for example, 'com.some.thing.inapp1').",
              in: 'path',
              name: 'productId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        token: z
          .string()
          .openapi({
            param: {
              description:
                "The token provided to the user's device when the inapp product was purchased.",
              in: 'path',
              name: 'token',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ProductPurchaseSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
        Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
      },
    ],
  })

export const postAndroidpublisherV3ApplicationsPackageNamePurchasesProductsProductIdTokensTokenAcknowledgeRoute =
  createRoute({
    method: 'post',
    path: '/androidpublisher/v3/applications/{packageName}/purchases/products/{productId}/tokens/{token}:acknowledge',
    tags: ['purchases'],
    description: 'Acknowledges a purchase of an inapp item.',
    operationId: 'androidpublisher.purchases.products.acknowledge',
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
        packageName: z
          .string()
          .openapi({
            param: {
              description:
                "The package name of the application the inapp product was sold in (for example, 'com.some.thing').",
              in: 'path',
              name: 'packageName',
              required: true,
              schema: { type: 'string' },
            },
          }),
        productId: z
          .string()
          .openapi({
            param: {
              description: "The inapp product SKU (for example, 'com.some.thing.inapp1').",
              in: 'path',
              name: 'productId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        token: z
          .string()
          .openapi({
            param: {
              description:
                "The token provided to the user's device when the inapp product was purchased.",
              in: 'path',
              name: 'token',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: ProductPurchasesAcknowledgeRequestSchema } },
      },
    },
    responses: { 200: { description: 'Successful response' } },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
        Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
      },
    ],
  })

export const postAndroidpublisherV3ApplicationsPackageNamePurchasesProductsProductIdTokensTokenConsumeRoute =
  createRoute({
    method: 'post',
    path: '/androidpublisher/v3/applications/{packageName}/purchases/products/{productId}/tokens/{token}:consume',
    tags: ['purchases'],
    description: 'Consumes a purchase for an inapp item.',
    operationId: 'androidpublisher.purchases.products.consume',
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
        packageName: z
          .string()
          .openapi({
            param: {
              description:
                "The package name of the application the inapp product was sold in (for example, 'com.some.thing').",
              in: 'path',
              name: 'packageName',
              required: true,
              schema: { type: 'string' },
            },
          }),
        productId: z
          .string()
          .openapi({
            param: {
              description: "The inapp product SKU (for example, 'com.some.thing.inapp1').",
              in: 'path',
              name: 'productId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        token: z
          .string()
          .openapi({
            param: {
              description:
                "The token provided to the user's device when the inapp product was purchased.",
              in: 'path',
              name: 'token',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: { 200: { description: 'Successful response' } },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
        Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
      },
    ],
  })

export const getAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenRoute =
  createRoute({
    method: 'get',
    path: '/androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}',
    tags: ['purchases'],
    description:
      "Checks whether a user's subscription purchase is valid and returns its expiry time.",
    operationId: 'androidpublisher.purchases.subscriptions.get',
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
        packageName: z
          .string()
          .openapi({
            param: {
              description:
                "The package name of the application for which this subscription was purchased (for example, 'com.some.thing').",
              in: 'path',
              name: 'packageName',
              required: true,
              schema: { type: 'string' },
            },
          }),
        subscriptionId: z
          .string()
          .openapi({
            param: {
              description: "The purchased subscription ID (for example, 'monthly001').",
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        token: z
          .string()
          .openapi({
            param: {
              description:
                "The token provided to the user's device when the subscription was purchased.",
              in: 'path',
              name: 'token',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: SubscriptionPurchaseSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
        Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
      },
    ],
  })

export const postAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenAcknowledgeRoute =
  createRoute({
    method: 'post',
    path: '/androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:acknowledge',
    tags: ['purchases'],
    description: 'Acknowledges a subscription purchase.',
    operationId: 'androidpublisher.purchases.subscriptions.acknowledge',
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
        packageName: z
          .string()
          .openapi({
            param: {
              description:
                "The package name of the application for which this subscription was purchased (for example, 'com.some.thing').",
              in: 'path',
              name: 'packageName',
              required: true,
              schema: { type: 'string' },
            },
          }),
        subscriptionId: z
          .string()
          .openapi({
            param: {
              description: "The purchased subscription ID (for example, 'monthly001').",
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        token: z
          .string()
          .openapi({
            param: {
              description:
                "The token provided to the user's device when the subscription was purchased.",
              in: 'path',
              name: 'token',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: SubscriptionPurchasesAcknowledgeRequestSchema } },
      },
    },
    responses: { 200: { description: 'Successful response' } },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
        Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
      },
    ],
  })

export const postAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenCancelRoute =
  createRoute({
    method: 'post',
    path: '/androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:cancel',
    tags: ['purchases'],
    description:
      "Cancels a user's subscription purchase. The subscription remains valid until its expiration time.",
    operationId: 'androidpublisher.purchases.subscriptions.cancel',
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
        packageName: z
          .string()
          .openapi({
            param: {
              description:
                "The package name of the application for which this subscription was purchased (for example, 'com.some.thing').",
              in: 'path',
              name: 'packageName',
              required: true,
              schema: { type: 'string' },
            },
          }),
        subscriptionId: z
          .string()
          .openapi({
            param: {
              description: "The purchased subscription ID (for example, 'monthly001').",
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        token: z
          .string()
          .openapi({
            param: {
              description:
                "The token provided to the user's device when the subscription was purchased.",
              in: 'path',
              name: 'token',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: { 200: { description: 'Successful response' } },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
        Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
      },
    ],
  })

export const postAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenDeferRoute =
  createRoute({
    method: 'post',
    path: '/androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:defer',
    tags: ['purchases'],
    description: "Defers a user's subscription purchase until a specified future expiration time.",
    operationId: 'androidpublisher.purchases.subscriptions.defer',
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
        packageName: z
          .string()
          .openapi({
            param: {
              description:
                "The package name of the application for which this subscription was purchased (for example, 'com.some.thing').",
              in: 'path',
              name: 'packageName',
              required: true,
              schema: { type: 'string' },
            },
          }),
        subscriptionId: z
          .string()
          .openapi({
            param: {
              description: "The purchased subscription ID (for example, 'monthly001').",
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        token: z
          .string()
          .openapi({
            param: {
              description:
                "The token provided to the user's device when the subscription was purchased.",
              in: 'path',
              name: 'token',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: SubscriptionPurchasesDeferRequestSchema } },
      },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: SubscriptionPurchasesDeferResponseSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
        Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
      },
    ],
  })

export const postAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenRefundRoute =
  createRoute({
    method: 'post',
    path: '/androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:refund',
    tags: ['purchases'],
    description:
      "Refunds a user's subscription purchase, but the subscription remains valid until its expiration time and it will continue to recur.",
    operationId: 'androidpublisher.purchases.subscriptions.refund',
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
        packageName: z
          .string()
          .openapi({
            param: {
              description:
                "The package name of the application for which this subscription was purchased (for example, 'com.some.thing').",
              in: 'path',
              name: 'packageName',
              required: true,
              schema: { type: 'string' },
            },
          }),
        subscriptionId: z
          .string()
          .openapi({
            param: {
              description: "\"The purchased subscription ID (for example, 'monthly001').",
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        token: z
          .string()
          .openapi({
            param: {
              description:
                "The token provided to the user's device when the subscription was purchased.",
              in: 'path',
              name: 'token',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: { 200: { description: 'Successful response' } },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
        Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
      },
    ],
  })

export const postAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenRevokeRoute =
  createRoute({
    method: 'post',
    path: '/androidpublisher/v3/applications/{packageName}/purchases/subscriptions/{subscriptionId}/tokens/{token}:revoke',
    tags: ['purchases'],
    description:
      "Refunds and immediately revokes a user's subscription purchase. Access to the subscription will be terminated immediately and it will stop recurring.",
    operationId: 'androidpublisher.purchases.subscriptions.revoke',
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
        packageName: z
          .string()
          .openapi({
            param: {
              description:
                "The package name of the application for which this subscription was purchased (for example, 'com.some.thing').",
              in: 'path',
              name: 'packageName',
              required: true,
              schema: { type: 'string' },
            },
          }),
        subscriptionId: z
          .string()
          .openapi({
            param: {
              description: "The purchased subscription ID (for example, 'monthly001').",
              in: 'path',
              name: 'subscriptionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        token: z
          .string()
          .openapi({
            param: {
              description:
                "The token provided to the user's device when the subscription was purchased.",
              in: 'path',
              name: 'token',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: { 200: { description: 'Successful response' } },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
        Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
      },
    ],
  })

export const getAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsv2TokensTokenRoute =
  createRoute({
    method: 'get',
    path: '/androidpublisher/v3/applications/{packageName}/purchases/subscriptionsv2/tokens/{token}',
    tags: ['purchases'],
    description: 'Get metadata about a subscription',
    operationId: 'androidpublisher.purchases.subscriptionsv2.get',
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
        packageName: z
          .string()
          .openapi({
            param: {
              description:
                "The package of the application for which this subscription was purchased (for example, 'com.some.thing').",
              in: 'path',
              name: 'packageName',
              required: true,
              schema: { type: 'string' },
            },
          }),
        token: z
          .string()
          .openapi({
            param: {
              description:
                "Required. The token provided to the user's device when the subscription was purchased.",
              in: 'path',
              name: 'token',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: SubscriptionPurchaseV2Schema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
        Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
      },
    ],
  })

export const getAndroidpublisherV3ApplicationsPackageNamePurchasesVoidedpurchasesRoute =
  createRoute({
    method: 'get',
    path: '/androidpublisher/v3/applications/{packageName}/purchases/voidedpurchases',
    tags: ['purchases'],
    description: 'Lists the purchases that were canceled, refunded or charged-back.',
    operationId: 'androidpublisher.purchases.voidedpurchases.list',
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
        endTime: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'The time, in milliseconds since the Epoch, of the newest voided purchase that you want to see in the response. The value of this parameter cannot be greater than the current time and is ignored if a pagination token is set. Default value is current time. Note: This filter is applied on the time at which the record is seen as voided by our systems and not the actual voided time returned in the response.',
              in: 'query',
              name: 'endTime',
              schema: { type: 'string' },
              required: false,
            },
          }),
        maxResults: z
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
                'Defines how many results the list operation should return. The default number depends on the resource collection.',
              in: 'query',
              name: 'maxResults',
              schema: { type: 'integer' },
              required: false,
            },
          }),
        startIndex: z
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
                'Defines the index of the first element to return. This can only be used if indexed paging is enabled.',
              in: 'query',
              name: 'startIndex',
              schema: { type: 'integer' },
              required: false,
            },
          }),
        startTime: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'The time, in milliseconds since the Epoch, of the oldest voided purchase that you want to see in the response. The value of this parameter cannot be older than 30 days and is ignored if a pagination token is set. Default value is current time minus 30 days. Note: This filter is applied on the time at which the record is seen as voided by our systems and not the actual voided time returned in the response.',
              in: 'query',
              name: 'startTime',
              schema: { type: 'string' },
              required: false,
            },
          }),
        token: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'Defines the token of the page to return, usually taken from TokenPagination. This can only be used if token paging is enabled.',
              in: 'query',
              name: 'token',
              schema: { type: 'string' },
              required: false,
            },
          }),
        type: z
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
                'The type of voided purchases that you want to see in the response. Possible values are: 0. Only voided in-app product purchases will be returned in the response. This is the default value. 1. Both voided in-app purchases and voided subscription purchases will be returned in the response. Note: Before requesting to receive voided subscription purchases, you must switch to use orderId in the response which uniquely identifies one-time purchases and subscriptions. Otherwise, you will receive multiple subscription orders with the same PurchaseToken, because subscription renewal orders share the same PurchaseToken.',
              in: 'query',
              name: 'type',
              schema: { type: 'integer' },
              required: false,
            },
          }),
      }),
      params: z.object({
        packageName: z
          .string()
          .openapi({
            param: {
              description:
                "The package name of the application for which voided purchases need to be returned (for example, 'com.some.thing').",
              in: 'path',
              name: 'packageName',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: VoidedPurchasesListResponseSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
        Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
      },
    ],
  })

export const getAndroidpublisherV3ApplicationsPackageNameReviewsRoute = createRoute({
  method: 'get',
  path: '/androidpublisher/v3/applications/{packageName}/reviews',
  tags: ['reviews'],
  description: 'Lists all reviews.',
  operationId: 'androidpublisher.reviews.list',
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
      maxResults: z
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
            description: 'How many results the list operation should return.',
            in: 'query',
            name: 'maxResults',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      startIndex: z
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
            description: 'The index of the first element to return.',
            in: 'query',
            name: 'startIndex',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Pagination token. If empty, list starts at the first review.',
            in: 'query',
            name: 'token',
            schema: { type: 'string' },
            required: false,
          },
        }),
      translationLanguage: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Language localization code.',
            in: 'query',
            name: 'translationLanguage',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      packageName: z
        .string()
        .openapi({
          param: {
            description: 'Package name of the app.',
            in: 'path',
            name: 'packageName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ReviewsListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
      Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
    },
  ],
})

export const getAndroidpublisherV3ApplicationsPackageNameReviewsReviewIdRoute = createRoute({
  method: 'get',
  path: '/androidpublisher/v3/applications/{packageName}/reviews/{reviewId}',
  tags: ['reviews'],
  description: 'Gets a single review.',
  operationId: 'androidpublisher.reviews.get',
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
      translationLanguage: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Language localization code.',
            in: 'query',
            name: 'translationLanguage',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      packageName: z
        .string()
        .openapi({
          param: {
            description: 'Package name of the app.',
            in: 'path',
            name: 'packageName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      reviewId: z
        .string()
        .openapi({
          param: {
            description: 'Unique identifier for a review.',
            in: 'path',
            name: 'reviewId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ReviewSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
      Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
    },
  ],
})

export const postAndroidpublisherV3ApplicationsPackageNameReviewsReviewIdReplyRoute = createRoute({
  method: 'post',
  path: '/androidpublisher/v3/applications/{packageName}/reviews/{reviewId}:reply',
  tags: ['reviews'],
  description: 'Replies to a single review, or updates an existing reply.',
  operationId: 'androidpublisher.reviews.reply',
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
      packageName: z
        .string()
        .openapi({
          param: {
            description: 'Package name of the app.',
            in: 'path',
            name: 'packageName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      reviewId: z
        .string()
        .openapi({
          param: {
            description: 'Unique identifier for a review.',
            in: 'path',
            name: 'reviewId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ReviewsReplyRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ReviewsReplyResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
      Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
    },
  ],
})

export const getAndroidpublisherV3ApplicationsPackageNameSubscriptionsRoute = createRoute({
  method: 'get',
  path: '/androidpublisher/v3/applications/{packageName}/subscriptions',
  tags: ['monetization'],
  description: 'Lists all subscriptions under a given app.',
  operationId: 'androidpublisher.monetization.subscriptions.list',
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
              'The maximum number of subscriptions to return. The service may return fewer than this value. If unspecified, at most 50 subscriptions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.',
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
              'A page token, received from a previous `ListSubscriptions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSubscriptions` must match the call that provided the page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      showArchived: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether archived subscriptions should be included in the response. Defaults to false.',
            in: 'query',
            name: 'showArchived',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      packageName: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The parent app (package name) for which the subscriptions should be read.',
            in: 'path',
            name: 'packageName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListSubscriptionsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
      Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
    },
  ],
})

export const postAndroidpublisherV3ApplicationsPackageNameSubscriptionsRoute = createRoute({
  method: 'post',
  path: '/androidpublisher/v3/applications/{packageName}/subscriptions',
  tags: ['monetization'],
  description:
    'Creates a new subscription. Newly added base plans will remain in draft state until activated.',
  operationId: 'androidpublisher.monetization.subscriptions.create',
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
      productId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. The ID to use for the subscription. For the requirements on this format, see the documentation of the product_id field on the Subscription resource.',
            in: 'query',
            name: 'productId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'regionsVersion.version': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. A string representing version of the available regions being used for the specified resource. The current version is 2022/02.',
            in: 'query',
            name: 'regionsVersion.version',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      packageName: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The parent app (package name) for which the subscription should be created. Must be equal to the package_name field on the Subscription resource.',
            in: 'path',
            name: 'packageName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SubscriptionSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SubscriptionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
      Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
    },
  ],
})

export const getAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdRoute = createRoute({
  method: 'get',
  path: '/androidpublisher/v3/applications/{packageName}/subscriptions/{productId}',
  tags: ['monetization'],
  description: 'Reads a single subscription.',
  operationId: 'androidpublisher.monetization.subscriptions.get',
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
      packageName: z
        .string()
        .openapi({
          param: {
            description: 'Required. The parent app (package name) of the subscription to get.',
            in: 'path',
            name: 'packageName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      productId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The unique product ID of the subscription to get.',
            in: 'path',
            name: 'productId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SubscriptionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
      Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
    },
  ],
})

export const deleteAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdRoute =
  createRoute({
    method: 'delete',
    path: '/androidpublisher/v3/applications/{packageName}/subscriptions/{productId}',
    tags: ['monetization'],
    description:
      'Deletes a subscription. A subscription can only be deleted if it has never had a base plan published.',
    operationId: 'androidpublisher.monetization.subscriptions.delete',
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
        packageName: z
          .string()
          .openapi({
            param: {
              description:
                'Required. The parent app (package name) of the app of the subscription to delete.',
              in: 'path',
              name: 'packageName',
              required: true,
              schema: { type: 'string' },
            },
          }),
        productId: z
          .string()
          .openapi({
            param: {
              description: 'Required. The unique product ID of the subscription to delete.',
              in: 'path',
              name: 'productId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: { 200: { description: 'Successful response' } },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
        Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
      },
    ],
  })

export const patchAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdRoute =
  createRoute({
    method: 'patch',
    path: '/androidpublisher/v3/applications/{packageName}/subscriptions/{productId}',
    tags: ['monetization'],
    description: 'Updates an existing subscription.',
    operationId: 'androidpublisher.monetization.subscriptions.patch',
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
        'regionsVersion.version': z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'Required. A string representing version of the available regions being used for the specified resource. The current version is 2022/02.',
              in: 'query',
              name: 'regionsVersion.version',
              schema: { type: 'string' },
              required: false,
            },
          }),
        updateMask: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description: 'Required. The list of fields to be updated.',
              in: 'query',
              name: 'updateMask',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        packageName: z
          .string()
          .openapi({
            param: {
              description: 'Immutable. Package name of the parent app.',
              in: 'path',
              name: 'packageName',
              required: true,
              schema: { type: 'string' },
            },
          }),
        productId: z
          .string()
          .openapi({
            param: {
              description:
                'Immutable. Unique product ID of the product. Unique within the parent app. Product IDs must be composed of lower-case letters (a-z), numbers (0-9), underscores (_) and dots (.). It must start with a lower-case letter or number, and be between 1 and 40 (inclusive) characters in length.',
              in: 'path',
              name: 'productId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: SubscriptionSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: SubscriptionSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
        Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
      },
    ],
  })

export const deleteAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdRoute =
  createRoute({
    method: 'delete',
    path: '/androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}',
    tags: ['monetization'],
    description:
      'Deletes a base plan. Can only be done for draft base plans. This action is irreversible.',
    operationId: 'androidpublisher.monetization.subscriptions.basePlans.delete',
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
        packageName: z
          .string()
          .openapi({
            param: {
              description: 'Required. The parent app (package name) of the base plan to delete.',
              in: 'path',
              name: 'packageName',
              required: true,
              schema: { type: 'string' },
            },
          }),
        productId: z
          .string()
          .openapi({
            param: {
              description: 'Required. The parent subscription (ID) of the base plan to delete.',
              in: 'path',
              name: 'productId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        basePlanId: z
          .string()
          .openapi({
            param: {
              description: 'Required. The unique offer ID of the base plan to delete.',
              in: 'path',
              name: 'basePlanId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: { 200: { description: 'Successful response' } },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
        Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
      },
    ],
  })

export const getAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersRoute =
  createRoute({
    method: 'get',
    path: '/androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers',
    tags: ['monetization'],
    description: 'Lists all offers under a given subscription.',
    operationId: 'androidpublisher.monetization.subscriptions.basePlans.offers.list',
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
                'The maximum number of subscriptions to return. The service may return fewer than this value. If unspecified, at most 50 subscriptions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.',
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
                'A page token, received from a previous `ListSubscriptionsOffers` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSubscriptionOffers` must match the call that provided the page token.',
              in: 'query',
              name: 'pageToken',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        packageName: z
          .string()
          .openapi({
            param: {
              description:
                'Required. The parent app (package name) for which the subscriptions should be read.',
              in: 'path',
              name: 'packageName',
              required: true,
              schema: { type: 'string' },
            },
          }),
        productId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. The parent subscription (ID) for which the offers should be read.',
              in: 'path',
              name: 'productId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        basePlanId: z
          .string()
          .openapi({
            param: {
              description:
                "Required. The parent base plan (ID) for which the offers should be read. May be specified as '-' to read all offers under a subscription.",
              in: 'path',
              name: 'basePlanId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ListSubscriptionOffersResponseSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
        Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
      },
    ],
  })

export const postAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersRoute =
  createRoute({
    method: 'post',
    path: '/androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers',
    tags: ['monetization'],
    description:
      'Creates a new subscription offer. Only auto-renewing base plans can have subscription offers. The offer state will be DRAFT until it is activated.',
    operationId: 'androidpublisher.monetization.subscriptions.basePlans.offers.create',
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
        offerId: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'Required. The ID to use for the offer. For the requirements on this format, see the documentation of the offer_id field on the SubscriptionOffer resource.',
              in: 'query',
              name: 'offerId',
              schema: { type: 'string' },
              required: false,
            },
          }),
        'regionsVersion.version': z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'Required. A string representing version of the available regions being used for the specified resource. The current version is 2022/02.',
              in: 'query',
              name: 'regionsVersion.version',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        packageName: z
          .string()
          .openapi({
            param: {
              description:
                'Required. The parent app (package name) for which the offer should be created. Must be equal to the package_name field on the Subscription resource.',
              in: 'path',
              name: 'packageName',
              required: true,
              schema: { type: 'string' },
            },
          }),
        productId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. The parent subscription (ID) for which the offer should be created. Must be equal to the product_id field on the SubscriptionOffer resource.',
              in: 'path',
              name: 'productId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        basePlanId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. The parent base plan (ID) for which the offer should be created. Must be equal to the base_plan_id field on the SubscriptionOffer resource.',
              in: 'path',
              name: 'basePlanId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: SubscriptionOfferSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: SubscriptionOfferSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
        Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
      },
    ],
  })

export const getAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdRoute =
  createRoute({
    method: 'get',
    path: '/androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers/{offerId}',
    tags: ['monetization'],
    description: 'Reads a single offer',
    operationId: 'androidpublisher.monetization.subscriptions.basePlans.offers.get',
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
        packageName: z
          .string()
          .openapi({
            param: {
              description: 'Required. The parent app (package name) of the offer to get.',
              in: 'path',
              name: 'packageName',
              required: true,
              schema: { type: 'string' },
            },
          }),
        productId: z
          .string()
          .openapi({
            param: {
              description: 'Required. The parent subscription (ID) of the offer to get.',
              in: 'path',
              name: 'productId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        basePlanId: z
          .string()
          .openapi({
            param: {
              description: 'Required. The parent base plan (ID) of the offer to get.',
              in: 'path',
              name: 'basePlanId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        offerId: z
          .string()
          .openapi({
            param: {
              description: 'Required. The unique offer ID of the offer to get.',
              in: 'path',
              name: 'offerId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: SubscriptionOfferSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
        Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
      },
    ],
  })

export const deleteAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdRoute =
  createRoute({
    method: 'delete',
    path: '/androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers/{offerId}',
    tags: ['monetization'],
    description:
      'Deletes a subscription offer. Can only be done for draft offers. This action is irreversible.',
    operationId: 'androidpublisher.monetization.subscriptions.basePlans.offers.delete',
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
        packageName: z
          .string()
          .openapi({
            param: {
              description: 'Required. The parent app (package name) of the offer to delete.',
              in: 'path',
              name: 'packageName',
              required: true,
              schema: { type: 'string' },
            },
          }),
        productId: z
          .string()
          .openapi({
            param: {
              description: 'Required. The parent subscription (ID) of the offer to delete.',
              in: 'path',
              name: 'productId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        basePlanId: z
          .string()
          .openapi({
            param: {
              description: 'Required. The parent base plan (ID) of the offer to delete.',
              in: 'path',
              name: 'basePlanId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        offerId: z
          .string()
          .openapi({
            param: {
              description: 'Required. The unique offer ID of the offer to delete.',
              in: 'path',
              name: 'offerId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: { 200: { description: 'Successful response' } },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
        Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
      },
    ],
  })

export const patchAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdRoute =
  createRoute({
    method: 'patch',
    path: '/androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers/{offerId}',
    tags: ['monetization'],
    description: 'Updates an existing subscription offer.',
    operationId: 'androidpublisher.monetization.subscriptions.basePlans.offers.patch',
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
        'regionsVersion.version': z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'Required. A string representing version of the available regions being used for the specified resource. The current version is 2022/02.',
              in: 'query',
              name: 'regionsVersion.version',
              schema: { type: 'string' },
              required: false,
            },
          }),
        updateMask: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description: 'Required. The list of fields to be updated.',
              in: 'query',
              name: 'updateMask',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        packageName: z
          .string()
          .openapi({
            param: {
              description:
                'Required. Immutable. The package name of the app the parent subscription belongs to.',
              in: 'path',
              name: 'packageName',
              required: true,
              schema: { type: 'string' },
            },
          }),
        productId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. Immutable. The ID of the parent subscription this offer belongs to.',
              in: 'path',
              name: 'productId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        basePlanId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. Immutable. The ID of the base plan to which this offer is an extension.',
              in: 'path',
              name: 'basePlanId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        offerId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. Immutable. Unique ID of this subscription offer. Must be unique within the base plan.',
              in: 'path',
              name: 'offerId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: SubscriptionOfferSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: SubscriptionOfferSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
        Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
      },
    ],
  })

export const postAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdActivateRoute =
  createRoute({
    method: 'post',
    path: '/androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers/{offerId}:activate',
    tags: ['monetization'],
    description:
      'Activates a subscription offer. Once activated, subscription offers will be available to new subscribers.',
    operationId: 'androidpublisher.monetization.subscriptions.basePlans.offers.activate',
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
        packageName: z
          .string()
          .openapi({
            param: {
              description: 'Required. The parent app (package name) of the offer to activate.',
              in: 'path',
              name: 'packageName',
              required: true,
              schema: { type: 'string' },
            },
          }),
        productId: z
          .string()
          .openapi({
            param: {
              description: 'Required. The parent subscription (ID) of the offer to activate.',
              in: 'path',
              name: 'productId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        basePlanId: z
          .string()
          .openapi({
            param: {
              description: 'Required. The parent base plan (ID) of the offer to activate.',
              in: 'path',
              name: 'basePlanId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        offerId: z
          .string()
          .openapi({
            param: {
              description: 'Required. The unique offer ID of the offer to activate.',
              in: 'path',
              name: 'offerId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: ActivateSubscriptionOfferRequestSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: SubscriptionOfferSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
        Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
      },
    ],
  })

export const postAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdDeactivateRoute =
  createRoute({
    method: 'post',
    path: '/androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}/offers/{offerId}:deactivate',
    tags: ['monetization'],
    description:
      'Deactivates a subscription offer. Once deactivated, existing subscribers will maintain their subscription, but the offer will become unavailable to new subscribers.',
    operationId: 'androidpublisher.monetization.subscriptions.basePlans.offers.deactivate',
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
        packageName: z
          .string()
          .openapi({
            param: {
              description: 'Required. The parent app (package name) of the offer to deactivate.',
              in: 'path',
              name: 'packageName',
              required: true,
              schema: { type: 'string' },
            },
          }),
        productId: z
          .string()
          .openapi({
            param: {
              description: 'Required. The parent subscription (ID) of the offer to deactivate.',
              in: 'path',
              name: 'productId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        basePlanId: z
          .string()
          .openapi({
            param: {
              description: 'Required. The parent base plan (ID) of the offer to deactivate.',
              in: 'path',
              name: 'basePlanId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        offerId: z
          .string()
          .openapi({
            param: {
              description: 'Required. The unique offer ID of the offer to deactivate.',
              in: 'path',
              name: 'offerId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DeactivateSubscriptionOfferRequestSchema } },
      },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: SubscriptionOfferSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
        Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
      },
    ],
  })

export const postAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdActivateRoute =
  createRoute({
    method: 'post',
    path: '/androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}:activate',
    tags: ['monetization'],
    description:
      'Activates a base plan. Once activated, base plans will be available to new subscribers.',
    operationId: 'androidpublisher.monetization.subscriptions.basePlans.activate',
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
        packageName: z
          .string()
          .openapi({
            param: {
              description: 'Required. The parent app (package name) of the base plan to activate.',
              in: 'path',
              name: 'packageName',
              required: true,
              schema: { type: 'string' },
            },
          }),
        productId: z
          .string()
          .openapi({
            param: {
              description: 'Required. The parent subscription (ID) of the base plan to activate.',
              in: 'path',
              name: 'productId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        basePlanId: z
          .string()
          .openapi({
            param: {
              description: 'Required. The unique base plan ID of the base plan to activate.',
              in: 'path',
              name: 'basePlanId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: ActivateBasePlanRequestSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: SubscriptionSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
        Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
      },
    ],
  })

export const postAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdDeactivateRoute =
  createRoute({
    method: 'post',
    path: '/androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}:deactivate',
    tags: ['monetization'],
    description:
      'Deactivates a base plan. Once deactivated, the base plan will become unavailable to new subscribers, but existing subscribers will maintain their subscription',
    operationId: 'androidpublisher.monetization.subscriptions.basePlans.deactivate',
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
        packageName: z
          .string()
          .openapi({
            param: {
              description:
                'Required. The parent app (package name) of the base plan to deactivate.',
              in: 'path',
              name: 'packageName',
              required: true,
              schema: { type: 'string' },
            },
          }),
        productId: z
          .string()
          .openapi({
            param: {
              description: 'Required. The parent subscription (ID) of the base plan to deactivate.',
              in: 'path',
              name: 'productId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        basePlanId: z
          .string()
          .openapi({
            param: {
              description: 'Required. The unique base plan ID of the base plan to deactivate.',
              in: 'path',
              name: 'basePlanId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: DeactivateBasePlanRequestSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: SubscriptionSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
        Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
      },
    ],
  })

export const postAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdMigratePricesRoute =
  createRoute({
    method: 'post',
    path: '/androidpublisher/v3/applications/{packageName}/subscriptions/{productId}/basePlans/{basePlanId}:migratePrices',
    tags: ['monetization'],
    description:
      'Migrates subscribers who are receiving an historical subscription price to the currently-offered price for the specified region. Requests will cause price change notifications to be sent to users who are currently receiving an historical price older than the supplied timestamp. Subscribers who do not agree to the new price will have their subscription ended at the next renewal.',
    operationId: 'androidpublisher.monetization.subscriptions.basePlans.migratePrices',
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
        packageName: z
          .string()
          .openapi({
            param: {
              description:
                'Required. Package name of the parent app. Must be equal to the package_name field on the Subscription resource.',
              in: 'path',
              name: 'packageName',
              required: true,
              schema: { type: 'string' },
            },
          }),
        productId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. The ID of the subscription to update. Must be equal to the product_id field on the Subscription resource.',
              in: 'path',
              name: 'productId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        basePlanId: z
          .string()
          .openapi({
            param: {
              description:
                'Required. The unique base plan ID of the base plan to update prices on.',
              in: 'path',
              name: 'basePlanId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: MigrateBasePlanPricesRequestSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: MigrateBasePlanPricesResponseSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
        Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
      },
    ],
  })

export const postAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdArchiveRoute =
  createRoute({
    method: 'post',
    path: '/androidpublisher/v3/applications/{packageName}/subscriptions/{productId}:archive',
    tags: ['monetization'],
    description:
      'Archives a subscription. Can only be done if at least one base plan was active in the past, and no base plan is available for new or existing subscribers currently. This action is irreversible, and the subscription ID will remain reserved.',
    operationId: 'androidpublisher.monetization.subscriptions.archive',
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
        packageName: z
          .string()
          .openapi({
            param: {
              description:
                'Required. The parent app (package name) of the app of the subscription to delete.',
              in: 'path',
              name: 'packageName',
              required: true,
              schema: { type: 'string' },
            },
          }),
        productId: z
          .string()
          .openapi({
            param: {
              description: 'Required. The unique product ID of the subscription to delete.',
              in: 'path',
              name: 'productId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: ArchiveSubscriptionRequestSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: SubscriptionSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
        Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
      },
    ],
  })

export const getAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsRoute =
  createRoute({
    method: 'get',
    path: '/androidpublisher/v3/applications/{packageName}/systemApks/{versionCode}/variants',
    tags: ['systemapks'],
    description: 'Returns the list of previously created system APK variants.',
    operationId: 'androidpublisher.systemapks.variants.list',
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
        packageName: z
          .string()
          .openapi({
            param: {
              description: 'Package name of the app.',
              in: 'path',
              name: 'packageName',
              required: true,
              schema: { type: 'string' },
            },
          }),
        versionCode: z
          .string()
          .openapi({
            param: {
              description: 'The version code of the App Bundle.',
              in: 'path',
              name: 'versionCode',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: SystemApksListResponseSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
        Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
      },
    ],
  })

export const postAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsRoute =
  createRoute({
    method: 'post',
    path: '/androidpublisher/v3/applications/{packageName}/systemApks/{versionCode}/variants',
    tags: ['systemapks'],
    description:
      'Creates an APK which is suitable for inclusion in a system image from an already uploaded Android App Bundle.',
    operationId: 'androidpublisher.systemapks.variants.create',
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
        packageName: z
          .string()
          .openapi({
            param: {
              description: 'Package name of the app.',
              in: 'path',
              name: 'packageName',
              required: true,
              schema: { type: 'string' },
            },
          }),
        versionCode: z
          .string()
          .openapi({
            param: {
              description: 'The version code of the App Bundle.',
              in: 'path',
              name: 'versionCode',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: VariantSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: VariantSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
        Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
      },
    ],
  })

export const getAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsVariantIdRoute =
  createRoute({
    method: 'get',
    path: '/androidpublisher/v3/applications/{packageName}/systemApks/{versionCode}/variants/{variantId}',
    tags: ['systemapks'],
    description: 'Returns a previously created system APK variant.',
    operationId: 'androidpublisher.systemapks.variants.get',
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
        packageName: z
          .string()
          .openapi({
            param: {
              description: 'Package name of the app.',
              in: 'path',
              name: 'packageName',
              required: true,
              schema: { type: 'string' },
            },
          }),
        versionCode: z
          .string()
          .openapi({
            param: {
              description: 'The version code of the App Bundle.',
              in: 'path',
              name: 'versionCode',
              required: true,
              schema: { type: 'string' },
            },
          }),
        variantId: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int(),
          )
          .openapi({
            param: {
              description: 'The ID of a previously created system APK variant.',
              in: 'path',
              name: 'variantId',
              required: true,
              schema: { type: 'integer' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: VariantSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
        Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
      },
    ],
  })

export const getAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsVariantIdDownloadRoute =
  createRoute({
    method: 'get',
    path: '/androidpublisher/v3/applications/{packageName}/systemApks/{versionCode}/variants/{variantId}:download',
    tags: ['systemapks'],
    description:
      'Downloads a previously created system APK which is suitable for inclusion in a system image.',
    operationId: 'androidpublisher.systemapks.variants.download',
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
        packageName: z
          .string()
          .openapi({
            param: {
              description: 'Package name of the app.',
              in: 'path',
              name: 'packageName',
              required: true,
              schema: { type: 'string' },
            },
          }),
        versionCode: z
          .string()
          .openapi({
            param: {
              description: 'The version code of the App Bundle.',
              in: 'path',
              name: 'versionCode',
              required: true,
              schema: { type: 'string' },
            },
          }),
        variantId: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int(),
          )
          .openapi({
            param: {
              description: 'The ID of a previously created system APK variant.',
              in: 'path',
              name: 'variantId',
              required: true,
              schema: { type: 'integer' },
            },
          }),
      }),
    },
    responses: { 200: { description: 'Successful response' } },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
        Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
      },
    ],
  })

export const getAndroidpublisherV3NameRoute = createRoute({
  method: 'get',
  path: '/androidpublisher/v3/{name}',
  tags: ['externaltransactions'],
  description: 'Gets an existing external transaction.',
  operationId: 'androidpublisher.externaltransactions.getexternaltransaction',
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
            description:
              'Required. The name of the external transaction to retrieve. Format: applications/{package_name}/externalTransactions/{external_transaction}',
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
      content: { 'application/json': { schema: ExternalTransactionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
      Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
    },
  ],
})

export const deleteAndroidpublisherV3NameRoute = createRoute({
  method: 'delete',
  path: '/androidpublisher/v3/{name}',
  tags: ['users'],
  description: 'Removes all access for the user to the given developer account.',
  operationId: 'androidpublisher.users.delete',
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
            description:
              'Required. The name of the user to delete. Format: developers/{developer}/users/{email}',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
      Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
    },
  ],
})

export const patchAndroidpublisherV3NameRoute = createRoute({
  method: 'patch',
  path: '/androidpublisher/v3/{name}',
  tags: ['users'],
  description: 'Updates access for the user to the developer account.',
  operationId: 'androidpublisher.users.patch',
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
            description: 'Optional. The list of fields to be updated.',
            in: 'query',
            name: 'updateMask',
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
            description:
              'Required. Resource name for this user, following the pattern "developers/{developer}/users/{email}".',
            in: 'path',
            name: 'name',
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
      Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
      Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
    },
  ],
})

export const postAndroidpublisherV3NameRefundRoute = createRoute({
  method: 'post',
  path: '/androidpublisher/v3/{name}:refund',
  tags: ['externaltransactions'],
  description: 'Refunds or partially refunds an existing external transaction.',
  operationId: 'androidpublisher.externaltransactions.refundexternaltransaction',
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
            description:
              'Required. The name of the external transaction that will be refunded. Format: applications/{package_name}/externalTransactions/{external_transaction}',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RefundExternalTransactionRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ExternalTransactionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
      Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
    },
  ],
})

export const postAndroidpublisherV3ParentExternalTransactionsRoute = createRoute({
  method: 'post',
  path: '/androidpublisher/v3/{parent}/externalTransactions',
  tags: ['externaltransactions'],
  description: 'Creates a new external transaction.',
  operationId: 'androidpublisher.externaltransactions.createexternaltransaction',
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
      externalTransactionId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. The id to use for the external transaction. Must be unique across all other transactions for the app. This value should be 1-63 characters and valid characters are /a-z0-9_-/.',
            in: 'query',
            name: 'externalTransactionId',
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
              'Required. The parent resource where this external transaction will be created. Format: applications/{package_name}',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ExternalTransactionSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ExternalTransactionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
      Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
    },
  ],
})

export const postAndroidpublisherV3ParentGrantsRoute = createRoute({
  method: 'post',
  path: '/androidpublisher/v3/{parent}/grants',
  tags: ['grants'],
  description: 'Grant access for a user to the given package.',
  operationId: 'androidpublisher.grants.create',
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
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The user which needs permission. Format: developers/{developer}/users/{user}',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GrantSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GrantSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
      Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
    },
  ],
})

export const getAndroidpublisherV3ParentUsersRoute = createRoute({
  method: 'get',
  path: '/androidpublisher/v3/{parent}/users',
  tags: ['users'],
  description: 'Lists all users with access to a developer account.',
  operationId: 'androidpublisher.users.list',
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
              'The maximum number of results to return. This must be set to -1 to disable pagination.',
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
              'A token received from a previous call to this method, in order to retrieve further results.',
            in: 'query',
            name: 'pageToken',
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
              'Required. The developer account to fetch users from. Format: developers/{developer}',
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
      content: { 'application/json': { schema: ListUsersResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
      Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
    },
  ],
})

export const postAndroidpublisherV3ParentUsersRoute = createRoute({
  method: 'post',
  path: '/androidpublisher/v3/{parent}/users',
  tags: ['users'],
  description: 'Grant access for a user to the given developer account.',
  operationId: 'androidpublisher.users.create',
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
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The developer account to add the user to. Format: developers/{developer}',
            in: 'path',
            name: 'parent',
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
      Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
      Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
    },
  ],
})
