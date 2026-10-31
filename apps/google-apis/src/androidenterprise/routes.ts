import { createRoute, z } from '@hono/zod-openapi'

const AppRestrictionsSchemaRestrictionRestrictionValueSchema = z
  .object({
    type: z
      .enum([
        'bool',
        'string',
        'integer',
        'choice',
        'multiselect',
        'hidden',
        'bundle',
        'bundleArray',
      ])
      .exactOptional()
      .openapi({ description: 'The type of the value being provided.' }),
    valueBool: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'The boolean value - this will only be present if type is bool.' }),
    valueInteger: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The integer value - this will only be present if type is integer.',
      }),
    valueMultiselect: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The list of string values - this will only be present if type is multiselect.',
      }),
    valueString: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The string value - this will be present for types string, choice and hidden.',
      }),
  })
  .openapi({ description: 'A typed value for the restriction.', required: [] })
  .openapi('AppRestrictionsSchemaRestrictionRestrictionValue')

type AppRestrictionsSchemaRestrictionType = {
  defaultValue?: z.infer<typeof AppRestrictionsSchemaRestrictionRestrictionValueSchema>
  description?: string
  entry?: string[]
  entryValue?: string[]
  key?: string
  nestedRestriction?: AppRestrictionsSchemaRestrictionType[]
  restrictionType?:
    | 'bool'
    | 'string'
    | 'integer'
    | 'choice'
    | 'multiselect'
    | 'hidden'
    | 'bundle'
    | 'bundleArray'
  title?: string
}

const KeyedAppStateSchema = z
  .object({
    data: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Additional field intended for machine-readable data. For example, a number or JSON object. To prevent XSS, we recommend removing any HTML from the data before displaying it.',
      }),
    key: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Key indicating what the app is providing a state for. The content of the key is set by the app's developer. To prevent XSS, we recommend removing any HTML from the key before displaying it. This field will always be present.",
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Free-form, human-readable message describing the app state. For example, an error message. To prevent XSS, we recommend removing any HTML from the message before displaying it.',
      }),
    severity: z
      .enum(['severityUnknown', 'severityInfo', 'severityError'])
      .exactOptional()
      .openapi({ description: 'Severity of the app state. This field will always be present.' }),
    stateTimestampMillis: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Timestamp of when the app set the state in milliseconds since epoch. This field will always be present.',
      }),
  })
  .openapi({
    description:
      'Represents a keyed app state containing a key, timestamp, severity level, optional description, and optional data.',
    required: [],
  })
  .openapi('KeyedAppState')

type AppStateType = { keyedAppState?: z.infer<typeof KeyedAppStateSchema>[]; packageName?: string }

const ManagedPropertyBundleSchema: z.ZodType<ManagedPropertyBundleType> = z
  .lazy(() =>
    z
      .object({
        managedProperty: z
          .array(ManagedPropertySchema)
          .exactOptional()
          .openapi({ description: 'The list of managed properties.' }),
      })
      .openapi({ description: 'A bundle of managed properties.', required: [] }),
  )
  .openapi('ManagedPropertyBundle')

type ManagedPropertyType = {
  key?: string
  valueBool?: boolean
  valueBundle?: z.infer<typeof ManagedPropertyBundleSchema>
  valueBundleArray?: z.infer<typeof ManagedPropertyBundleSchema>[]
  valueInteger?: number
  valueString?: string
  valueStringArray?: string[]
}

const ManagedPropertySchema: z.ZodType<ManagedPropertyType> = z
  .lazy(() =>
    z
      .object({
        key: z
          .string()
          .exactOptional()
          .openapi({ description: 'The unique key that identifies the property.' }),
        valueBool: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'The boolean value - this will only be present if type of the property is bool.',
          }),
        valueBundle: ManagedPropertyBundleSchema.exactOptional().openapi({
          description:
            'The bundle of managed properties - this will only be present if type of the property is bundle.',
        }),
        valueBundleArray: z
          .array(ManagedPropertyBundleSchema)
          .exactOptional()
          .openapi({
            description:
              'The list of bundles of properties - this will only be present if type of the property is bundle_array.',
          }),
        valueInteger: z
          .int32()
          .exactOptional()
          .openapi({
            description:
              'The integer value - this will only be present if type of the property is integer.',
          }),
        valueString: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The string value - this will only be present if type of the property is string, choice or hidden.',
          }),
        valueStringArray: z
          .array(z.string())
          .exactOptional()
          .openapi({
            description:
              'The list of string values - this will only be present if type of the property is multiselect.',
          }),
      })
      .openapi({
        description:
          "A managed property of a managed configuration. The property must match one of the properties in the app restrictions schema of the product. Exactly one of the value fields must be populated, and it must match the property's type in the app restrictions schema.",
        required: [],
      }),
  )
  .openapi('ManagedProperty')

type ManagedPropertyBundleType = { managedProperty?: z.infer<typeof ManagedPropertySchema>[] }

const MaintenanceWindowSchema = z
  .object({
    durationMs: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Duration of the maintenance window, in milliseconds. The duration must be between 30 minutes and 24 hours (inclusive).',
      }),
    startTimeAfterMidnightMs: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Start time of the maintenance window, in milliseconds after midnight on the device. Windows can span midnight.',
      }),
  })
  .openapi({
    description:
      'Maintenance window for managed Google Play Accounts. This allows Play store to update the apps on the foreground in the designated window.',
    required: [],
  })
  .openapi('MaintenanceWindow')

const AutoInstallConstraintSchema = z
  .object({
    chargingStateConstraint: z
      .enum(['chargingStateConstraintUnspecified', 'chargingNotRequired', 'chargingRequired'])
      .exactOptional()
      .openapi({ description: 'Charging state constraint.' }),
    deviceIdleStateConstraint: z
      .enum(['deviceIdleStateConstraintUnspecified', 'deviceIdleNotRequired', 'deviceIdleRequired'])
      .exactOptional()
      .openapi({ description: 'Device idle state constraint.' }),
    networkTypeConstraint: z
      .enum(['networkTypeConstraintUnspecified', 'anyNetwork', 'unmeteredNetwork'])
      .exactOptional()
      .openapi({ description: 'Network type constraint.' }),
  })
  .openapi({
    description:
      'The auto-install constraint. Defines a set of restrictions for installation. At least one of the fields must be set.',
    required: [],
  })
  .openapi('AutoInstallConstraint')

const AutoInstallPolicySchema = z
  .object({
    autoInstallConstraint: z
      .array(AutoInstallConstraintSchema)
      .exactOptional()
      .openapi({
        description:
          'The constraints for auto-installing the app. You can specify a maximum of one constraint.',
      }),
    autoInstallMode: z
      .enum([
        'autoInstallModeUnspecified',
        'doNotAutoInstall',
        'autoInstallOnce',
        'forceAutoInstall',
      ])
      .exactOptional()
      .openapi({ description: 'The auto-install mode. If unset defaults to "doNotAutoInstall".' }),
    autoInstallPriority: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The priority of the install, as an unsigned integer. A lower number means higher priority.',
      }),
    minimumVersionCode: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The minimum version of the app. If a lower version of the app is installed, then the app will be auto-updated according to the auto-install constraints, instead of waiting for the regular auto-update. You can set a minimum version code for at most 20 apps per device.',
      }),
  })
  .openapi({ required: [] })
  .openapi('AutoInstallPolicy')

const EnterpriseAuthenticationAppLinkConfigSchema = z
  .object({ uri: z.string().exactOptional().openapi({ description: 'An authentication url.' }) })
  .openapi({
    description:
      'An authentication URL configuration for the authenticator app of an identity provider.',
    required: [],
  })
  .openapi('EnterpriseAuthenticationAppLinkConfig')

const VariableSetSchema = z
  .object({
    placeholder: z
      .string()
      .exactOptional()
      .openapi({ description: 'The placeholder string; defined by EMM.' }),
    userValue: z
      .string()
      .exactOptional()
      .openapi({ description: 'The value of the placeholder, specific to the user.' }),
  })
  .openapi({
    description:
      "A variable set is a key-value pair of EMM-provided placeholders and its corresponding value, which is attributed to a user. For example, $FIRSTNAME could be a placeholder, and its value could be Alice. Placeholders should start with a '$' sign and should be alphanumeric only.",
    required: [],
  })
  .openapi('VariableSet')

const ConfigurationVariablesSchema = z
  .object({
    mcmId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the managed configurations settings.' }),
    variableSet: z
      .array(VariableSetSchema)
      .exactOptional()
      .openapi({ description: 'The variable set that is attributed to the user.' }),
  })
  .openapi({
    description:
      'A configuration variables resource contains the managed configuration settings ID to be applied to a single user, as well as the variable set that is attributed to the user. The variable set will be used to replace placeholders in the managed configuration settings.',
    required: [],
  })
  .openapi('ConfigurationVariables')

const ManagedConfigurationSchema = z
  .object({
    configurationVariables: ConfigurationVariablesSchema.exactOptional().openapi({
      description:
        'Contains the ID of the managed configuration profile and the set of configuration variables (if any) defined for the user.',
    }),
    kind: z.string().exactOptional().openapi({ description: 'Deprecated.' }),
    managedProperty: z
      .array(ManagedPropertySchema)
      .exactOptional()
      .openapi({ description: 'The set of managed properties for this configuration.' }),
    productId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the product that the managed configuration is for, e.g. "app:com.google.android.gm".',
      }),
  })
  .openapi({
    description:
      "A managed configuration resource contains the set of managed properties defined by the app developer in the app's managed configurations schema, as well as any configuration variables defined for the user.",
    required: [],
  })
  .openapi('ManagedConfiguration')

const ProductPolicySchema = z
  .object({
    autoInstallPolicy: AutoInstallPolicySchema.exactOptional().openapi({
      description: 'The auto-install policy for the product.',
    }),
    autoUpdateMode: z
      .enum([
        'autoUpdateModeUnspecified',
        'autoUpdateDefault',
        'autoUpdatePostponed',
        'autoUpdateHighPriority',
      ])
      .exactOptional()
      .openapi({ description: 'The auto-update mode for the product.' }),
    enterpriseAuthenticationAppLinkConfigs: z
      .array(EnterpriseAuthenticationAppLinkConfigSchema)
      .exactOptional()
      .openapi({
        description:
          "An authentication URL configuration for the authenticator app of an identity provider. This helps to launch the identity provider's authenticator app during the authentication happening in a private app using Android WebView. Authenticator app should already be the [default handler](https://developer.android.com/training/app-links/verify-site-associations) for the authentication url on the device.",
      }),
    managedConfiguration: ManagedConfigurationSchema.exactOptional().openapi({
      description: 'The managed configuration for the product.',
    }),
    productId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the product. For example, "app:com.google.android.gm".' }),
    trackIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Grants the device visibility to the specified product release track(s), identified by trackIds. The list of release tracks of a product can be obtained by calling Products.Get.',
      }),
    tracks: z
      .array(z.enum(['appTrackUnspecified', 'production', 'beta', 'alpha']))
      .exactOptional()
      .openapi({ description: 'Deprecated. Use trackIds instead.' }),
  })
  .openapi({ description: 'The policy for a product.', required: [] })
  .openapi('ProductPolicy')

type PolicyType = {
  autoUpdatePolicy?:
    | 'autoUpdatePolicyUnspecified'
    | 'choiceToTheUser'
    | 'never'
    | 'wifiOnly'
    | 'always'
  deviceReportPolicy?:
    | 'deviceReportPolicyUnspecified'
    | 'deviceReportDisabled'
    | 'deviceReportEnabled'
  maintenanceWindow?: z.infer<typeof MaintenanceWindowSchema>
  productAvailabilityPolicy?: 'productAvailabilityPolicyUnspecified' | 'whitelist' | 'all'
  productPolicy?: z.infer<typeof ProductPolicySchema>[]
}

const AdministratorSchema = z
  .object({
    email: z.string().exactOptional().openapi({ description: "The admin's email address." }),
  })
  .openapi({
    description:
      'This represents an enterprise admin who can manage the enterprise in the managed Google Play store.',
    required: [],
  })
  .openapi('Administrator')

const AdministratorWebTokenSchema = z
  .object({
    token: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An opaque token to be passed to the Play front-end to generate an iframe.',
      }),
  })
  .openapi({ description: 'A token authorizing an admin to access an iframe.', required: [] })
  .openapi('AdministratorWebToken')

const AdministratorWebTokenSpecManagedConfigurationsSchema = z
  .object({
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether the Managed Configuration page is displayed. Default is true.',
      }),
  })
  .openapi({ required: [] })
  .openapi('AdministratorWebTokenSpecManagedConfigurations')

const AdministratorWebTokenSpecPlaySearchSchema = z
  .object({
    approveApps: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Allow access to the iframe in approve mode. Default is false.' }),
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether the managed Play Search apps page is displayed. Default is true.',
      }),
  })
  .openapi({ required: [] })
  .openapi('AdministratorWebTokenSpecPlaySearch')

const AdministratorWebTokenSpecPrivateAppsSchema = z
  .object({
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the Private Apps page is displayed. Default is true.' }),
  })
  .openapi({ required: [] })
  .openapi('AdministratorWebTokenSpecPrivateApps')

const AdministratorWebTokenSpecStoreBuilderSchema = z
  .object({
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the Organize apps page is displayed. Default is true.' }),
  })
  .openapi({ required: [] })
  .openapi('AdministratorWebTokenSpecStoreBuilder')

const AdministratorWebTokenSpecWebAppsSchema = z
  .object({
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the Web Apps page is displayed. Default is true.' }),
  })
  .openapi({ required: [] })
  .openapi('AdministratorWebTokenSpecWebApps')

const AdministratorWebTokenSpecZeroTouchSchema = z
  .object({
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether zero-touch embedded UI is usable with this token. If enabled, the admin can link zero-touch customers to this enterprise.',
      }),
  })
  .openapi({ required: [] })
  .openapi('AdministratorWebTokenSpecZeroTouch')

const AdministratorWebTokenSpecSchema = z
  .object({
    managedConfigurations:
      AdministratorWebTokenSpecManagedConfigurationsSchema.exactOptional().openapi({
        description: 'Options for displaying the Managed Configuration page.',
      }),
    parent: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URI of the parent frame hosting the iframe. To prevent XSS, the iframe may not be hosted at other URIs. This URI must be https. Use whitespaces to separate multiple parent URIs.',
      }),
    permission: z
      .array(z.enum(['unknown', 'approveApps', 'manageMcm']))
      .exactOptional()
      .openapi({ description: 'Deprecated. Use PlaySearch.approveApps.' }),
    playSearch: AdministratorWebTokenSpecPlaySearchSchema.exactOptional().openapi({
      description: 'Options for displaying the managed Play Search apps page.',
    }),
    privateApps: AdministratorWebTokenSpecPrivateAppsSchema.exactOptional().openapi({
      description: 'Options for displaying the Private Apps page.',
    }),
    storeBuilder: AdministratorWebTokenSpecStoreBuilderSchema.exactOptional().openapi({
      description: 'Options for displaying the Organize apps page.',
    }),
    webApps: AdministratorWebTokenSpecWebAppsSchema.exactOptional().openapi({
      description: 'Options for displaying the Web Apps page.',
    }),
    zeroTouch: AdministratorWebTokenSpecZeroTouchSchema.exactOptional().openapi({
      description: 'Options for displaying the Zero Touch page.',
    }),
  })
  .openapi({
    description:
      'Specification for a token used to generate iframes. The token specifies what data the admin is allowed to modify and the URI the iframe is allowed to communiate with.',
    required: [],
  })
  .openapi('AdministratorWebTokenSpec')

const AppRestrictionsSchemaRestrictionSchema: z.ZodType<AppRestrictionsSchemaRestrictionType> = z
  .lazy(() =>
    z
      .object({
        defaultValue:
          AppRestrictionsSchemaRestrictionRestrictionValueSchema.exactOptional().openapi({
            description:
              'The default value of the restriction. bundle and bundleArray restrictions never have a default value.',
          }),
        description: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'A longer description of the restriction, giving more detail of what it affects.',
          }),
        entry: z
          .array(z.string())
          .exactOptional()
          .openapi({
            description:
              "For choice or multiselect restrictions, the list of possible entries' human-readable names.",
          }),
        entryValue: z
          .array(z.string())
          .exactOptional()
          .openapi({
            description:
              "For choice or multiselect restrictions, the list of possible entries' machine-readable values. These values should be used in the configuration, either as a single string value for a choice restriction or in a stringArray for a multiselect restriction.",
          }),
        key: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The unique key that the product uses to identify the restriction, e.g. "com.google.android.gm.fieldname".',
          }),
        nestedRestriction: z
          .array(AppRestrictionsSchemaRestrictionSchema)
          .exactOptional()
          .openapi({
            description:
              'For bundle or bundleArray restrictions, the list of nested restrictions. A bundle restriction is always nested within a bundleArray restriction, and a bundleArray restriction is at most two levels deep.',
          }),
        restrictionType: z
          .enum([
            'bool',
            'string',
            'integer',
            'choice',
            'multiselect',
            'hidden',
            'bundle',
            'bundleArray',
          ])
          .exactOptional()
          .openapi({ description: 'The type of the restriction.' }),
        title: z.string().exactOptional().openapi({ description: 'The name of the restriction.' }),
      })
      .openapi({
        description:
          'A restriction in the App Restriction Schema represents a piece of configuration that may be pre-applied.',
        required: [],
      }),
  )
  .openapi('AppRestrictionsSchemaRestriction')

const AppRestrictionsSchemaSchema = z
  .object({
    kind: z.string().exactOptional().openapi({ description: 'Deprecated.' }),
    restrictions: z
      .array(AppRestrictionsSchemaRestrictionSchema)
      .exactOptional()
      .openapi({ description: 'The set of restrictions that make up this schema.' }),
  })
  .openapi({
    description:
      'Represents the list of app restrictions available to be pre-configured for the product.',
    required: [],
  })
  .openapi('AppRestrictionsSchema')

const AppRestrictionsSchemaChangeEventSchema = z
  .object({
    productId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The id of the product (e.g. "app:com.google.android.gm") for which the app restriction schema changed. This field will always be present.',
      }),
  })
  .openapi({
    description:
      'An event generated when a new app version is uploaded to Google Play and its app restrictions schema changed. To fetch the app restrictions schema for an app, use Products.getAppRestrictionsSchema on the EMM API.',
    required: [],
  })
  .openapi('AppRestrictionsSchemaChangeEvent')

const AppStateSchema: z.ZodType<AppStateType> = z
  .lazy(() =>
    z
      .object({
        keyedAppState: z
          .array(KeyedAppStateSchema)
          .exactOptional()
          .openapi({ description: 'List of keyed app states. This field will always be present.' }),
        packageName: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The package name of the app. This field will always be present.',
          }),
      })
      .openapi({ description: 'List of states set by the app.', required: [] }),
  )
  .openapi('AppState')

const AppUpdateEventSchema = z
  .object({
    productId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The id of the product (e.g. "app:com.google.android.gm") that was updated. This field will always be present.',
      }),
  })
  .openapi({
    description:
      'An event generated when a new version of an app is uploaded to Google Play. Notifications are sent for new public versions only: alpha, beta, or canary versions do not generate this event. To fetch up-to-date version history for an app, use Products.Get on the EMM API.',
    required: [],
  })
  .openapi('AppUpdateEvent')

const AppVersionSchema = z
  .object({
    isProduction: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if this version is a production APK.' }),
    track: z
      .enum(['appTrackUnspecified', 'production', 'beta', 'alpha'])
      .exactOptional()
      .openapi({ description: 'Deprecated, use trackId instead.' }),
    trackId: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "Track ids that the app version is published in. Replaces the track field (deprecated), but doesn't include the production track (see isProduction instead).",
      }),
    versionCode: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Unique increasing identifier for the app version.' }),
    versionString: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The string used in the Play store by the app developer to identify the version. The string is not necessarily unique or localized (for example, the string could be "1.4").',
      }),
  })
  .openapi({ description: 'This represents a single version of the app.', required: [] })
  .openapi('AppVersion')

const ApprovalUrlInfoSchema = z
  .object({
    approvalUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A URL that displays a product's permissions and that can also be used to approve the product with the Products.approve call.",
      }),
  })
  .openapi({ description: 'Information on an approval URL.', required: [] })
  .openapi('ApprovalUrlInfo')

const AuthenticationTokenSchema = z
  .object({
    token: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The authentication token to be passed to the device policy client on the device where it can be used to provision the account for which this token was generated.',
      }),
  })
  .openapi({
    description:
      "An AuthenticationToken is used by the EMM's device policy client on a device to provision the given EMM-managed user on that device.",
    required: [],
  })
  .openapi('AuthenticationToken')

const CreateEnrollmentTokenResponseSchema = z
  .object({
    enrollmentToken: z.string().exactOptional().openapi({ description: 'Enrollment token.' }),
  })
  .openapi({ description: 'Response message for create enrollment token.', required: [] })
  .openapi('CreateEnrollmentTokenResponse')

const PolicySchema: z.ZodType<PolicyType> = z
  .lazy(() =>
    z
      .object({
        autoUpdatePolicy: z
          .enum(['autoUpdatePolicyUnspecified', 'choiceToTheUser', 'never', 'wifiOnly', 'always'])
          .exactOptional()
          .openapi({
            description:
              'Recommended alternative: autoUpdateMode which is set per app, provides greater flexibility around update frequency. When autoUpdateMode is set to AUTO_UPDATE_POSTPONED or AUTO_UPDATE_HIGH_PRIORITY, this field has no effect. "choiceToTheUser" allows the device\'s user to configure the app update policy. "always" enables auto updates. "never" disables auto updates. "wifiOnly" enables auto updates only when the device is connected to wifi.',
          }),
        deviceReportPolicy: z
          .enum(['deviceReportPolicyUnspecified', 'deviceReportDisabled', 'deviceReportEnabled'])
          .exactOptional()
          .openapi({
            description:
              'Whether the device reports app states to the EMM. The default value is "deviceReportDisabled".',
          }),
        maintenanceWindow: MaintenanceWindowSchema.exactOptional().openapi({
          description:
            'The maintenance window defining when apps running in the foreground should be updated.',
        }),
        productAvailabilityPolicy: z
          .enum(['productAvailabilityPolicyUnspecified', 'whitelist', 'all'])
          .exactOptional()
          .openapi({
            description:
              'The availability granted to the device for the specified products. "all" gives the device access to all products, regardless of approval status. "all" does not enable automatic visibility of "alpha" or "beta" tracks. "whitelist" grants the device access the products specified in productPolicy[]. Only products that are approved or products that were previously approved (products with revoked approval) by the enterprise can be whitelisted. If no value is provided, the availability set at the user level is applied by default.',
          }),
        productPolicy: z
          .array(ProductPolicySchema)
          .exactOptional()
          .openapi({
            description:
              'The list of product policies. The productAvailabilityPolicy needs to be set to WHITELIST or ALL for the product policies to be applied.',
          }),
      })
      .openapi({ description: 'The device policy for a given managed device.', required: [] }),
  )
  .openapi('Policy')

const DeviceReportSchema = z
  .object({
    appState: z
      .array(AppStateSchema)
      .exactOptional()
      .openapi({
        description:
          "List of app states set by managed apps on the device. App states are defined by the app's developers. This field will always be present.",
      }),
    lastUpdatedTimestampMillis: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The timestamp of the last report update in milliseconds since epoch. This field will always be present.',
      }),
  })
  .openapi({
    description: 'Device report updated with the latest app states for managed apps on the device.',
    required: [],
  })
  .openapi('DeviceReport')

const DeviceSchema = z
  .object({
    androidId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Google Play Services Android ID for the device encoded as a lowercase hex string. For example, "123456789abcdef0".',
      }),
    device: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The internal hardware codename of the device. This comes from android.os.Build.DEVICE. (field named "device" per logs/wireless/android/android_checkin.proto)',
      }),
    latestBuildFingerprint: z
      .string()
      .exactOptional()
      .openapi({ description: 'The build fingerprint of the device if known.' }),
    maker: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The manufacturer of the device. This comes from android.os.Build.MANUFACTURER.',
      }),
    managementType: z
      .enum(['managedDevice', 'managedProfile', 'containerApp', 'unmanagedProfile'])
      .exactOptional()
      .openapi({
        description:
          'Identifies the extent to which the device is controlled by a managed Google Play EMM in various deployment configurations. Possible values include: - "managedDevice", a device that has the EMM\'s device policy controller (DPC) as the device owner. - "managedProfile", a device that has a profile managed by the DPC (DPC is profile owner) in addition to a separate, personal profile that is unavailable to the DPC. - "containerApp", no longer used (deprecated). - "unmanagedProfile", a device that has been allowed (by the domain\'s admin, using the Admin Console to enable the privilege) to use managed Google Play, but the profile is itself not owned by a DPC. ',
      }),
    model: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The model name of the device. This comes from android.os.Build.MODEL.',
      }),
    policy: PolicySchema.exactOptional().openapi({
      description: 'The policy enforced on the device.',
    }),
    product: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The product name of the device. This comes from android.os.Build.PRODUCT.',
      }),
    report: DeviceReportSchema.exactOptional().openapi({
      description: 'The device report updated with the latest app states.',
    }),
    retailBrand: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Retail brand for the device, if set. See https://developer.android.com/reference/android/os/Build.html#BRAND',
      }),
    sdkVersion: z.int32().exactOptional().openapi({ description: 'API compatibility version.' }),
  })
  .openapi({
    description:
      'A Devices resource represents a mobile device managed by the EMM and belonging to a specific enterprise user.',
    required: [],
  })
  .openapi('Device')

const DeviceReportUpdateEventSchema = z
  .object({
    deviceId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Android ID of the device. This field will always be present.' }),
    report: DeviceReportSchema.exactOptional().openapi({
      description:
        'The device report updated with the latest app states. This field will always be present.',
    }),
    userId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the user. This field will always be present.' }),
  })
  .openapi({
    description: 'An event generated when an updated device report is available.',
    required: [],
  })
  .openapi('DeviceReportUpdateEvent')

const DeviceStateSchema = z
  .object({
    accountState: z
      .enum(['enabled', 'disabled'])
      .exactOptional()
      .openapi({
        description:
          'The state of the Google account on the device. "enabled" indicates that the Google account on the device can be used to access Google services (including Google Play), while "disabled" means that it cannot. A new device is initially in the "disabled" state.',
      }),
  })
  .openapi({
    description:
      "The state of a user's device, as accessed by the getState and setState methods on device resources.",
    required: [],
  })
  .openapi('DeviceState')

const DevicesListResponseSchema = z
  .object({
    device: z.array(DeviceSchema).exactOptional().openapi({ description: 'A managed device.' }),
  })
  .openapi({ required: [] })
  .openapi('DevicesListResponse')

const GoogleAuthenticationSettingsSchema = z
  .object({
    dedicatedDevicesAllowed: z
      .enum(['dedicatedDevicesAllowedUnspecified', 'disallowed', 'allowed'])
      .exactOptional()
      .openapi({ description: 'Whether dedicated devices are allowed.' }),
    googleAuthenticationRequired: z
      .enum(['googleAuthenticationRequiredUnspecified', 'notRequired', 'required'])
      .exactOptional()
      .openapi({ description: 'Whether Google authentication is required.' }),
  })
  .openapi({
    description: 'Contains settings for Google-provided user authentication.',
    required: [],
  })
  .openapi('GoogleAuthenticationSettings')

const EnterpriseSchema = z
  .object({
    administrator: z
      .array(AdministratorSchema)
      .exactOptional()
      .openapi({
        description:
          'Admins of the enterprise. This is only supported for enterprises created via the EMM-initiated flow.',
      }),
    googleAuthenticationSettings: GoogleAuthenticationSettingsSchema.exactOptional().openapi({
      description: 'Output only. Settings for Google-provided user authentication.',
      readOnly: true,
    }),
    id: z.string().exactOptional().openapi({ description: 'The unique ID for the enterprise.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the enterprise, for example, "Example, Inc".' }),
    primaryDomain: z
      .string()
      .exactOptional()
      .openapi({ description: 'The enterprise\'s primary domain, such as "example.com".' }),
  })
  .openapi({
    description:
      'An Enterprises resource represents the binding between an EMM and a specific organization. That binding can be instantiated in one of two different ways using this API as follows: - For Google managed domain customers, the process involves using Enterprises.enroll and Enterprises.setAccount (in conjunction with artifacts obtained from the Admin console and the Google API Console) and submitted to the EMM through a more-or-less manual process. - For managed Google Play Accounts customers, the process involves using Enterprises.generateSignupUrl and Enterprises.completeSignup in conjunction with the managed Google Play sign-up UI (Google-provided mechanism) to create the binding without manual steps. As an EMM, you can support either or both approaches in your EMM console. See Create an Enterprise for details.',
    required: [],
  })
  .openapi('Enterprise')

const EnterpriseAccountSchema = z
  .object({
    accountEmail: z
      .string()
      .exactOptional()
      .openapi({ description: 'The email address of the service account.' }),
  })
  .openapi({
    description:
      'A service account that can be used to authenticate as the enterprise to API calls that require such authentication.',
    required: [],
  })
  .openapi('EnterpriseAccount')

const EnterprisesListResponseSchema = z
  .object({
    enterprise: z
      .array(EnterpriseSchema)
      .exactOptional()
      .openapi({ description: 'An enterprise.' }),
  })
  .openapi({ required: [] })
  .openapi('EnterprisesListResponse')

const EnterprisesSendTestPushNotificationResponseSchema = z
  .object({
    messageId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The message ID of the test push notification that was sent.' }),
    topicName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The name of the Cloud Pub/Sub topic to which notifications for this enterprise's enrolled account will be sent.",
      }),
  })
  .openapi({ required: [] })
  .openapi('EnterprisesSendTestPushNotificationResponse')

const EntitlementSchema = z
  .object({
    productId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the product that the entitlement is for. For example, "app:com.google.android.gm".',
      }),
    reason: z
      .enum(['free', 'groupLicense', 'userPurchase'])
      .exactOptional()
      .openapi({
        description:
          'The reason for the entitlement. For example, "free" for free apps. This property is temporary: it will be replaced by the acquisition kind field of group licenses.',
      }),
  })
  .openapi({
    description:
      "The presence of an Entitlements resource indicates that a user has the right to use a particular app. Entitlements are user specific, not device specific. This allows a user with an entitlement to an app to install the app on all their devices. It's also possible for a user to hold an entitlement to an app without installing the app on any device. The API can be used to create an entitlement. As an option, you can also use the API to trigger the installation of an app on all a user's managed devices at the same time the entitlement is created. If the app is free, creating the entitlement also creates a group license for that app. For paid apps, creating the entitlement consumes one license, and that license remains consumed until the entitlement is removed. If the enterprise hasn't purchased enough licenses, then no entitlement is created and the installation fails. An entitlement is also not created for an app if the app requires permissions that the enterprise hasn't accepted. If an entitlement is deleted, the app may be uninstalled from a user's device. As a best practice, uninstall the app by calling Installs.delete() before deleting the entitlement. Entitlements for apps that a user pays for on an unmanaged profile have \"userPurchase\" as the entitlement reason. These entitlements cannot be removed via the API.",
    required: [],
  })
  .openapi('Entitlement')

const EntitlementsListResponseSchema = z
  .object({
    entitlement: z
      .array(EntitlementSchema)
      .exactOptional()
      .openapi({
        description:
          'An entitlement of a user to a product (e.g. an app). For example, a free app that they have installed, or a paid app that they have been allocated a license to.',
      }),
  })
  .openapi({ required: [] })
  .openapi('EntitlementsListResponse')

const GroupLicenseSchema = z
  .object({
    acquisitionKind: z
      .enum(['free', 'bulkPurchase'])
      .exactOptional()
      .openapi({
        description:
          'How this group license was acquired. "bulkPurchase" means that this Grouplicenses resource was created because the enterprise purchased licenses for this product; otherwise, the value is "free" (for free products).',
      }),
    approval: z
      .enum(['approved', 'unapproved'])
      .exactOptional()
      .openapi({
        description:
          'Whether the product to which this group license relates is currently approved by the enterprise. Products are approved when a group license is first created, but this approval may be revoked by an enterprise admin via Google Play. Unapproved products will not be visible to end users in collections, and new entitlements to them should not normally be created.',
      }),
    numProvisioned: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The total number of provisioned licenses for this product. Returned by read operations, but ignored in write operations.',
      }),
    numPurchased: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of purchased licenses (possibly in multiple purchases). If this field is omitted, then there is no limit on the number of licenses that can be provisioned (for example, if the acquisition kind is "free").',
      }),
    permissions: z
      .enum(['currentApproved', 'needsReapproval', 'allCurrentAndFutureApproved'])
      .exactOptional()
      .openapi({
        description:
          'The permission approval status of the product. This field is only set if the product is approved. Possible states are: - "currentApproved", the current set of permissions is approved, but additional permissions will require the administrator to reapprove the product (If the product was approved without specifying the approved permissions setting, then this is the default behavior.), - "needsReapproval", the product has unapproved permissions. No additional product licenses can be assigned until the product is reapproved, - "allCurrentAndFutureApproved", the current permissions are approved and any future permission updates will be automatically approved without administrator review. ',
      }),
    productId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the product that the license is for. For example, "app:com.google.android.gm".',
      }),
  })
  .openapi({
    description:
      'Group license objects allow you to keep track of licenses (called entitlements) for both free and paid apps. For a free app, a group license is created when an enterprise admin first approves the product in Google Play or when the first entitlement for the product is created for a user via the API. For a paid app, a group license object is only created when an enterprise admin purchases the product in Google Play for the first time. Use the API to query group licenses. A Grouplicenses resource includes the total number of licenses purchased (paid apps only) and the total number of licenses currently in use. In other words, the total number of Entitlements that exist for the product. Only one group license object is created per product and group license objects are never deleted. If a product is unapproved, its group license remains. This allows enterprise admins to keep track of any remaining entitlements for the product.',
    required: [],
  })
  .openapi('GroupLicense')

const UserSchema = z
  .object({
    accountIdentifier: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier you create for this user, such as "user342" or "asset#44418". Do not use personally identifiable information (PII) for this property. Must always be set for EMM-managed users. Not set for Google-managed users.',
      }),
    accountType: z
      .enum(['deviceAccount', 'userAccount'])
      .exactOptional()
      .openapi({
        description:
          'The type of account that this user represents. A userAccount can be installed on multiple devices, but a deviceAccount is specific to a single device. An EMM-managed user (emmManaged) can be either type (userAccount, deviceAccount), but a Google-managed user (googleManaged) is always a userAccount.',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name that will appear in user interfaces. Setting this property is optional when creating EMM-managed users. If you do set this property, use something generic about the organization (such as "Example, Inc.") or your name (as EMM). Not used for Google-managed user accounts. @mutable androidenterprise.users.update',
      }),
    id: z.string().exactOptional().openapi({ description: 'The unique ID for the user.' }),
    managementType: z
      .enum(['googleManaged', 'emmManaged'])
      .exactOptional()
      .openapi({
        description:
          'The entity that manages the user. With googleManaged users, the source of truth is Google so EMMs have to make sure a Google Account exists for the user. With emmManaged users, the EMM is in charge.',
      }),
    primaryEmail: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The user\'s primary email address, for example, "jsmith@example.com". Will always be set for Google managed users and not set for EMM managed users.',
      }),
  })
  .openapi({
    description:
      'A Users resource represents an account associated with an enterprise. The account may be specific to a device or to an individual user (who can then use the account across multiple devices). The account may provide access to managed Google Play only, or to other Google services, depending on the identity model: - The Google managed domain identity model requires synchronization to Google account sources (via primaryEmail). - The managed Google Play Accounts identity model provides a dynamic means for enterprises to create user or device accounts as needed. These accounts provide access to managed Google Play. ',
    required: [],
  })
  .openapi('User')

const GroupLicenseUsersListResponseSchema = z
  .object({
    user: z.array(UserSchema).exactOptional().openapi({ description: 'A user of an enterprise.' }),
  })
  .openapi({ required: [] })
  .openapi('GroupLicenseUsersListResponse')

const GroupLicensesListResponseSchema = z
  .object({
    groupLicense: z
      .array(GroupLicenseSchema)
      .exactOptional()
      .openapi({
        description: 'A group license for a product approved for use in the enterprise.',
      }),
  })
  .openapi({ required: [] })
  .openapi('GroupLicensesListResponse')

const InstallSchema = z
  .object({
    installState: z
      .enum(['installed', 'installPending'])
      .exactOptional()
      .openapi({
        description:
          'Install state. The state "installPending" means that an install request has recently been made and download to the device is in progress. The state "installed" means that the app has been installed. This field is read-only.',
      }),
    productId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the product that the install is for. For example, "app:com.google.android.gm".',
      }),
    versionCode: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The version of the installed product. Guaranteed to be set only if the install state is "installed".',
      }),
  })
  .openapi({
    description:
      'The existence of an Installs resource indicates that an app is installed on a particular device (or that an install is pending). The API can be used to create an install resource using the update method. This triggers the actual install of the app on the device. If the user does not already have an entitlement for the app, then an attempt is made to create one. If this fails (for example, because the app is not free and there is no available license), then the creation of the install fails. The API can also be used to update an installed app. If the update method is used on an existing install, then the app will be updated to the latest available version. Note that it is not possible to force the installation of a specific version of an app: the version code is read-only. If a user installs an app themselves (as permitted by the enterprise), then again an install resource and possibly an entitlement resource are automatically created. The API can also be used to delete an install resource, which triggers the removal of the app from the device. Note that deleting an install does not automatically remove the corresponding entitlement, even if there are no remaining installs. The install resource will also be deleted if the user uninstalls the app themselves.',
    required: [],
  })
  .openapi('Install')

const InstallFailureEventSchema = z
  .object({
    deviceId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Android ID of the device. This field will always be present.' }),
    failureDetails: z
      .string()
      .exactOptional()
      .openapi({ description: 'Additional details on the failure if applicable.' }),
    failureReason: z
      .enum(['unknown', 'timeout'])
      .exactOptional()
      .openapi({
        description: 'The reason for the installation failure. This field will always be present.',
      }),
    productId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The id of the product (e.g. "app:com.google.android.gm") for which the install failure event occured. This field will always be present.',
      }),
    userId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the user. This field will always be present.' }),
  })
  .openapi({
    description: 'An event generated when an app installation failed on a device',
    required: [],
  })
  .openapi('InstallFailureEvent')

const InstallsListResponseSchema = z
  .object({
    install: z
      .array(InstallSchema)
      .exactOptional()
      .openapi({
        description:
          'An installation of an app for a user on a specific device. The existence of an install implies that the user must have an entitlement to the app.',
      }),
  })
  .openapi({ required: [] })
  .openapi('InstallsListResponse')

const LocalizedTextSchema = z
  .object({
    locale: z
      .string()
      .exactOptional()
      .openapi({ description: 'The BCP47 tag for a locale. (e.g. "en-US", "de").' }),
    text: z
      .string()
      .exactOptional()
      .openapi({ description: 'The text localized in the associated locale.' }),
  })
  .openapi({ description: 'A localized string with its locale.', required: [] })
  .openapi('LocalizedText')

const ManagedConfigurationsForDeviceListResponseSchema = z
  .object({
    managedConfigurationForDevice: z
      .array(ManagedConfigurationSchema)
      .exactOptional()
      .openapi({ description: 'A managed configuration for an app on a specific device.' }),
  })
  .openapi({ required: [] })
  .openapi('ManagedConfigurationsForDeviceListResponse')

const ManagedConfigurationsForUserListResponseSchema = z
  .object({
    managedConfigurationForUser: z
      .array(ManagedConfigurationSchema)
      .exactOptional()
      .openapi({ description: 'A managed configuration for an app for a specific user.' }),
  })
  .openapi({ required: [] })
  .openapi('ManagedConfigurationsForUserListResponse')

const ManagedConfigurationsSettingsSchema = z
  .object({
    lastUpdatedTimestampMillis: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The last updated time of the managed configuration settings in milliseconds since 1970-01-01T00:00:00Z.',
      }),
    mcmId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the managed configurations settings.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the managed configurations settings.' }),
  })
  .openapi({
    description:
      "A managed configurations settings resource contains the set of managed properties that have been configured for an Android app to be applied to a set of users. The app's developer would have defined configurable properties in the managed configurations schema.",
    required: [],
  })
  .openapi('ManagedConfigurationsSettings')

const ManagedConfigurationsSettingsListResponseSchema = z
  .object({
    managedConfigurationsSettings: z
      .array(ManagedConfigurationsSettingsSchema)
      .exactOptional()
      .openapi({
        description:
          'A managed configurations settings for an app that may be assigned to a group of users in an enterprise.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ManagedConfigurationsSettingsListResponse')

const NewDeviceEventSchema = z
  .object({
    deviceId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Android ID of the device. This field will always be present.' }),
    dpcPackageName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Policy app on the device.' }),
    managementType: z
      .enum(['managedDevice', 'managedProfile'])
      .exactOptional()
      .openapi({
        description:
          'Identifies the extent to which the device is controlled by an Android EMM in various deployment configurations. Possible values include: - "managedDevice", a device where the DPC is set as device owner, - "managedProfile", a device where the DPC is set as profile owner. ',
      }),
    userId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the user. This field will always be present.' }),
  })
  .openapi({
    description: 'An event generated when a new device is ready to be managed.',
    required: [],
  })
  .openapi('NewDeviceEvent')

const NewPermissionsEventSchema = z
  .object({
    approvedPermissions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The set of permissions that the enterprise admin has already approved for this application. Use Permissions.Get on the EMM API to retrieve details about these permissions.',
      }),
    productId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The id of the product (e.g. "app:com.google.android.gm") for which new permissions were added. This field will always be present.',
      }),
    requestedPermissions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The set of permissions that the app is currently requesting. Use Permissions.Get on the EMM API to retrieve details about these permissions.',
      }),
  })
  .openapi({
    description: 'An event generated when new permissions are added to an app.',
    required: [],
  })
  .openapi('NewPermissionsEvent')

const ProductApprovalEventSchema = z
  .object({
    approved: z
      .enum(['unknown', 'approved', 'unapproved'])
      .exactOptional()
      .openapi({
        description:
          'Whether the product was approved or unapproved. This field will always be present.',
      }),
    productId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The id of the product (e.g. "app:com.google.android.gm") for which the approval status has changed. This field will always be present.',
      }),
  })
  .openapi({
    description: "An event generated when a product's approval status is changed.",
    required: [],
  })
  .openapi('ProductApprovalEvent')

const ProductAvailabilityChangeEventSchema = z
  .object({
    availabilityStatus: z
      .enum(['unknown', 'available', 'removed', 'unpublished'])
      .exactOptional()
      .openapi({ description: 'The new state of the product. This field will always be present.' }),
    productId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The id of the product (e.g. "app:com.google.android.gm") for which the product availability changed. This field will always be present.',
      }),
  })
  .openapi({
    description: "An event generated whenever a product's availability changes.",
    required: [],
  })
  .openapi('ProductAvailabilityChangeEvent')

const NotificationSchema = z
  .object({
    appRestrictionsSchemaChangeEvent:
      AppRestrictionsSchemaChangeEventSchema.exactOptional().openapi({
        description: 'Notifications about new app restrictions schema changes.',
      }),
    appUpdateEvent: AppUpdateEventSchema.exactOptional().openapi({
      description: 'Notifications about app updates.',
    }),
    deviceReportUpdateEvent: DeviceReportUpdateEventSchema.exactOptional().openapi({
      description: 'Notifications about device report updates.',
    }),
    enterpriseId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the enterprise for which the notification is sent. This will always be present.',
      }),
    installFailureEvent: InstallFailureEventSchema.exactOptional().openapi({
      description: 'Notifications about an app installation failure.',
    }),
    newDeviceEvent: NewDeviceEventSchema.exactOptional().openapi({
      description: 'Notifications about new devices.',
    }),
    newPermissionsEvent: NewPermissionsEventSchema.exactOptional().openapi({
      description: 'Notifications about new app permissions.',
    }),
    notificationType: z
      .enum([
        'unknown',
        'testNotification',
        'productApproval',
        'installFailure',
        'appUpdate',
        'newPermissions',
        'appRestricionsSchemaChange',
        'productAvailabilityChange',
        'newDevice',
        'deviceReportUpdate',
      ])
      .exactOptional()
      .openapi({ description: 'Type of the notification.' }),
    productApprovalEvent: ProductApprovalEventSchema.exactOptional().openapi({
      description: "Notifications about changes to a product's approval status.",
    }),
    productAvailabilityChangeEvent: ProductAvailabilityChangeEventSchema.exactOptional().openapi({
      description: 'Notifications about product availability changes.',
    }),
    timestampMillis: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time when the notification was published in milliseconds since 1970-01-01T00:00:00Z. This will always be present.',
      }),
  })
  .openapi({ description: 'A notification of one event relating to an enterprise.', required: [] })
  .openapi('Notification')

const NotificationSetSchema = z
  .object({
    notification: z
      .array(NotificationSchema)
      .exactOptional()
      .openapi({
        description: 'The notifications received, or empty if no notifications are present.',
      }),
    notificationSetId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The notification set ID, required to mark the notification as received with the Enterprises.AcknowledgeNotification API. This will be omitted if no notifications are present.',
      }),
  })
  .openapi({
    description:
      'A resource returned by the PullNotificationSet API, which contains a collection of notifications for enterprises associated with the service account authenticated for the request.',
    required: [],
  })
  .openapi('NotificationSet')

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

const PermissionSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A longer description of the Permissions resource, giving more details of what it affects.',
      }),
    name: z.string().exactOptional().openapi({ description: 'The name of the permission.' }),
    permissionId: z
      .string()
      .exactOptional()
      .openapi({ description: 'An opaque string uniquely identifying the permission.' }),
  })
  .openapi({
    description:
      'A Permissions resource represents some extra capability, to be granted to an Android app, which requires explicit consent. An enterprise admin must consent to these permissions on behalf of their users before an entitlement for the app can be created. The permissions collection is read-only. The information provided for each permission (localized name and description) is intended to be used in the MDM user interface when obtaining consent from the enterprise.',
    required: [],
  })
  .openapi('Permission')

const TrackInfoSchema = z
  .object({
    trackAlias: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A modifiable name for a track. This is the visible name in the play developer console.',
      }),
    trackId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unmodifiable, unique track identifier. This identifier is the releaseTrackId in the url of the play developer console page that displays the track information.',
      }),
  })
  .openapi({ description: 'Id to name association of a track.', required: [] })
  .openapi('TrackInfo')

const ProductPermissionSchema = z
  .object({
    permissionId: z
      .string()
      .exactOptional()
      .openapi({ description: 'An opaque string uniquely identifying the permission.' }),
    state: z
      .enum(['required', 'accepted'])
      .exactOptional()
      .openapi({ description: 'Whether the permission has been accepted or not.' }),
  })
  .openapi({
    description:
      'A product permissions resource represents the set of permissions required by a specific app and whether or not they have been accepted by an enterprise admin. The API can be used to read the set of permissions, and also to update the set to indicate that permissions have been accepted.',
    required: [],
  })
  .openapi('ProductPermission')

const ProductSigningCertificateSchema = z
  .object({
    certificateHashSha1: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The base64 urlsafe encoded SHA1 hash of the certificate. (This field is deprecated in favor of SHA2-256. It should not be used and may be removed at any time.)',
      }),
    certificateHashSha256: z
      .string()
      .exactOptional()
      .openapi({ description: 'The base64 urlsafe encoded SHA2-256 hash of the certificate.' }),
  })
  .openapi({ required: [] })
  .openapi('ProductSigningCertificate')

const ProductSchema = z
  .object({
    appRestrictionsSchema: AppRestrictionsSchemaSchema.exactOptional().openapi({
      description: 'The app restriction schema',
    }),
    appTracks: z
      .array(TrackInfoSchema)
      .exactOptional()
      .openapi({ description: 'The tracks visible to the enterprise.' }),
    appVersion: z
      .array(AppVersionSchema)
      .exactOptional()
      .openapi({ description: 'App versions currently available for this product.' }),
    authorName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the author of the product (for example, the app developer).',
      }),
    availableCountries: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The countries which this app is available in.' }),
    availableTracks: z
      .array(z.enum(['appTrackUnspecified', 'production', 'beta', 'alpha']))
      .exactOptional()
      .openapi({ description: 'Deprecated, use appTracks instead.' }),
    category: z
      .string()
      .exactOptional()
      .openapi({ description: 'The app category (e.g. RACING, SOCIAL, etc.)' }),
    contentRating: z
      .enum(['ratingUnknown', 'all', 'preTeen', 'teen', 'mature'])
      .exactOptional()
      .openapi({ description: 'The content rating for this app.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The localized promotional description, if available.' }),
    detailsUrl: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A link to the (consumer) Google Play details page for the product.',
      }),
    distributionChannel: z
      .enum(['publicGoogleHosted', 'privateGoogleHosted', 'privateSelfHosted'])
      .exactOptional()
      .openapi({
        description:
          'How and to whom the package is made available. The value publicGoogleHosted means that the package is available through the Play store and not restricted to a specific enterprise. The value privateGoogleHosted means that the package is a private app (restricted to an enterprise) but hosted by Google. The value privateSelfHosted means that the package is a private app (restricted to an enterprise) and is privately hosted.',
      }),
    features: z
      .array(z.enum(['featureUnknown', 'vpnApp']))
      .exactOptional()
      .openapi({ description: 'Noteworthy features (if any) of this product.' }),
    iconUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A link to an image that can be used as an icon for the product. This image is suitable for use at up to 512px x 512px.',
      }),
    lastUpdatedTimestampMillis: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The approximate time (within 7 days) the app was last published, expressed in milliseconds since epoch.',
      }),
    minAndroidSdkVersion: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The minimum Android SDK necessary to run the app.' }),
    permissions: z
      .array(ProductPermissionSchema)
      .exactOptional()
      .openapi({ description: 'A list of permissions required by the app.' }),
    productId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string of the form *app:<package name>*. For example, app:com.google.android.gm represents the Gmail app.',
      }),
    productPricing: z
      .enum(['unknown', 'free', 'freeWithInAppPurchase', 'paid'])
      .exactOptional()
      .openapi({
        description:
          'Whether this product is free, free with in-app purchases, or paid. If the pricing is unknown, this means the product is not generally available anymore (even though it might still be available to people who own it).',
      }),
    recentChanges: z
      .string()
      .exactOptional()
      .openapi({ description: 'A description of the recent changes made to the app.' }),
    requiresContainerApp: z.boolean().exactOptional().openapi({ description: 'Deprecated.' }),
    screenshotUrls: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A list of screenshot links representing the app.' }),
    signingCertificate: ProductSigningCertificateSchema.exactOptional().openapi({
      description: 'The certificate used to sign this product.',
    }),
    smallIconUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A link to a smaller image that can be used as an icon for the product. This image is suitable for use at up to 128px x 128px.',
      }),
    title: z.string().exactOptional().openapi({ description: 'The name of the product.' }),
    workDetailsUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A link to the managed Google Play details page for the product, for use by an Enterprise admin.',
      }),
  })
  .openapi({
    description:
      'A Products resource represents an app in the Google Play store that is available to at least some users in the enterprise. (Some apps are restricted to a single enterprise, and no information about them is made available outside that enterprise.) The information provided for each product (localized name, icon, link to the full Google Play details page) is intended to allow a basic representation of the product within an EMM user interface.',
    required: [],
  })
  .openapi('Product')

const ProductPermissionsSchema = z
  .object({
    permission: z
      .array(ProductPermissionSchema)
      .exactOptional()
      .openapi({ description: 'The permissions required by the app.' }),
    productId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the app that the permissions relate to, e.g. "app:com.google.android.gm".',
      }),
  })
  .openapi({
    description:
      'Information about the permissions required by a specific app and whether they have been accepted by the enterprise.',
    required: [],
  })
  .openapi('ProductPermissions')

const ProductVisibilitySchema = z
  .object({
    productId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The product ID to make visible to the user. Required for each item in the productVisibility list.',
      }),
    trackIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Grants the user visibility to the specified product track(s), identified by trackIds.',
      }),
    tracks: z
      .array(z.enum(['appTrackUnspecified', 'production', 'beta', 'alpha']))
      .exactOptional()
      .openapi({ description: 'Deprecated. Use trackIds instead.' }),
  })
  .openapi({ description: 'A product to be made visible to a user.', required: [] })
  .openapi('ProductVisibility')

const ProductSetSchema = z
  .object({
    productId: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The list of product IDs making up the set of products.' }),
    productSetBehavior: z
      .enum(['unknown', 'whitelist', 'includeAll', 'allApproved'])
      .exactOptional()
      .openapi({
        description:
          'The interpretation of this product set. "unknown" should never be sent and is ignored if received. "whitelist" means that the user is entitled to access the product set. "includeAll" means that all products are accessible, including products that are approved, products with revoked approval, and products that have never been approved. "allApproved" means that the user is entitled to access all products that are approved for the enterprise. If the value is "allApproved" or "includeAll", the productId field is ignored. If no value is provided, it is interpreted as "whitelist" for backwards compatibility. Further "allApproved" or "includeAll" does not enable automatic visibility of "alpha" or "beta" tracks for Android app. Use ProductVisibility to enable "alpha" or "beta" tracks per user.',
      }),
    productVisibility: z
      .array(ProductVisibilitySchema)
      .exactOptional()
      .openapi({
        description:
          "Additional list of product IDs making up the product set. Unlike the productID array, in this list It's possible to specify which tracks (alpha, beta, production) of a product are visible to the user. See ProductVisibility and its fields for more information. Specifying the same product ID both here and in the productId array is not allowed and it will result in an error.",
      }),
  })
  .openapi({ description: 'A set of products.', required: [] })
  .openapi('ProductSet')

const ProductsApproveRequestSchema = z
  .object({
    approvalUrlInfo: ApprovalUrlInfoSchema.exactOptional().openapi({
      description:
        "The approval URL that was shown to the user. Only the permissions shown to the user with that URL will be accepted, which may not be the product's entire set of permissions. For example, the URL may only display new permissions from an update after the product was approved, or not include new permissions if the product was updated since the URL was generated.",
    }),
    approvedPermissions: z
      .enum(['currentPermissionsOnly', 'allPermissions'])
      .exactOptional()
      .openapi({
        description:
          'Sets how new permission requests for the product are handled. "allPermissions" automatically approves all current and future permissions for the product. "currentPermissionsOnly" approves the current set of permissions for the product, but any future permissions added through updates will require manual reapproval. If not specified, only the current set of permissions will be approved.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ProductsApproveRequest')

const ProductsGenerateApprovalUrlResponseSchema = z
  .object({
    url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A URL that can be rendered in an iframe to display the permissions (if any) of a product. This URL can be used to approve the product only once and only within 24 hours of being generated, using the Products.approve call. If the product is currently unapproved and has no permissions, this URL will point to an empty page. If the product is currently approved, a URL will only be generated if that product has added permissions since it was last approved, and the URL will only display those new permissions that have not yet been accepted.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ProductsGenerateApprovalUrlResponse')

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

const ProductsListResponseSchema = z
  .object({
    pageInfo: PageInfoSchema.exactOptional().openapi({
      description: 'General pagination information.',
    }),
    product: z
      .array(ProductSchema)
      .exactOptional()
      .openapi({
        description:
          'Information about a product (e.g. an app) in the Google Play store, for display to an enterprise admin.',
      }),
    tokenPagination: TokenPaginationSchema.exactOptional().openapi({
      description: 'Pagination information for token pagination.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ProductsListResponse')

const ServiceAccountKeySchema = z
  .object({
    data: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The body of the private key credentials file, in string format. This is only populated when the ServiceAccountKey is created, and is not stored by Google.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An opaque, unique identifier for this ServiceAccountKey. Assigned by the server.',
      }),
    publicData: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Public key data for the credentials file. This is an X.509 cert. If you are using the googleCredentials key type, this is identical to the cert that can be retrieved by using the X.509 cert url inside of the credentials file.',
      }),
    type: z
      .enum(['googleCredentials', 'pkcs12'])
      .exactOptional()
      .openapi({ description: 'The file format of the generated key data.' }),
  })
  .openapi({
    description: 'Credentials that can be used to authenticate as a service account.',
    required: [],
  })
  .openapi('ServiceAccountKey')

const ServiceAccountSchema = z
  .object({
    key: ServiceAccountKeySchema.exactOptional().openapi({
      description: 'Credentials that can be used to authenticate as this ServiceAccount.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The account name of the service account, in the form of an email address. Assigned by the server.',
      }),
  })
  .openapi({
    description:
      'A service account identity, including the name and credentials that can be used to authenticate as the service account.',
    required: [],
  })
  .openapi('ServiceAccount')

const ServiceAccountKeysListResponseSchema = z
  .object({
    serviceAccountKey: z
      .array(ServiceAccountKeySchema)
      .exactOptional()
      .openapi({ description: 'The service account credentials.' }),
  })
  .openapi({ required: [] })
  .openapi('ServiceAccountKeysListResponse')

const SignupInfoSchema = z
  .object({
    completionToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An opaque token that will be required, along with the Enterprise Token, for obtaining the enterprise resource from CompleteSignup.',
      }),
    kind: z.string().exactOptional().openapi({ description: 'Deprecated.' }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A URL under which the Admin can sign up for an enterprise. The page pointed to cannot be rendered in an iframe.',
      }),
  })
  .openapi({
    description:
      'A resource returned by the GenerateSignupUrl API, which contains the Signup URL and Completion Token.',
    required: [],
  })
  .openapi('SignupInfo')

const StoreClusterSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Unique ID of this cluster. Assigned by the server. Immutable once assigned.',
      }),
    name: z
      .array(LocalizedTextSchema)
      .exactOptional()
      .openapi({
        description:
          'Ordered list of localized strings giving the name of this page. The text displayed is the one that best matches the user locale, or the first entry if there is no good match. There needs to be at least one entry.',
      }),
    orderInPage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "String (US-ASCII only) used to determine order of this cluster within the parent page's elements. Page elements are sorted in lexicographic order of this field. Duplicated values are allowed, but ordering between elements with duplicate order is undefined. The value of this field is never visible to a user, it is used solely for the purpose of defining an ordering. Maximum length is 256 characters.",
      }),
    productId: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of products in the order they are displayed in the cluster. There should not be duplicates within a cluster.',
      }),
  })
  .openapi({
    description:
      'Definition of a managed Google Play store cluster, a list of products displayed as part of a store page.',
    required: [],
  })
  .openapi('StoreCluster')

const StoreLayoutSchema = z
  .object({
    homepageId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the store page to be used as the homepage. The homepage is the first page shown in the managed Google Play Store. Not specifying a homepage is equivalent to setting the store layout type to "basic".',
      }),
    storeLayoutType: z
      .enum(['unknown', 'basic', 'custom'])
      .exactOptional()
      .openapi({
        description:
          'The store layout type. By default, this value is set to "basic" if the homepageId field is not set, and to "custom" otherwise. If set to "basic", the layout will consist of all approved apps that have been whitelisted for the user.',
      }),
  })
  .openapi({
    description:
      'General setting for the managed Google Play store layout, currently only specifying the page to display the first time the store is opened.',
    required: [],
  })
  .openapi('StoreLayout')

const StoreLayoutClustersListResponseSchema = z
  .object({
    cluster: z
      .array(StoreClusterSchema)
      .exactOptional()
      .openapi({ description: 'A store cluster of an enterprise.' }),
  })
  .openapi({ required: [] })
  .openapi('StoreLayoutClustersListResponse')

const StorePageSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Unique ID of this page. Assigned by the server. Immutable once assigned.',
      }),
    link: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "Ordered list of pages a user should be able to reach from this page. The list can't include this page. It is recommended that the basic pages are created first, before adding the links between pages. The API doesn't verify that the pages exist or the pages are reachable.",
      }),
    name: z
      .array(LocalizedTextSchema)
      .exactOptional()
      .openapi({
        description:
          'Ordered list of localized strings giving the name of this page. The text displayed is the one that best matches the user locale, or the first entry if there is no good match. There needs to be at least one entry.',
      }),
  })
  .openapi({
    description:
      'Definition of a managed Google Play store page, made of a localized name and links to other pages. A page also contains clusters defined as a subcollection.',
    required: [],
  })
  .openapi('StorePage')

const StoreLayoutPagesListResponseSchema = z
  .object({
    page: z
      .array(StorePageSchema)
      .exactOptional()
      .openapi({ description: 'A store page of an enterprise.' }),
  })
  .openapi({ required: [] })
  .openapi('StoreLayoutPagesListResponse')

const UsersListResponseSchema = z
  .object({
    user: z.array(UserSchema).exactOptional().openapi({ description: 'A user of an enterprise.' }),
  })
  .openapi({ required: [] })
  .openapi('UsersListResponse')

const WebAppIconSchema = z
  .object({
    imageData: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The actual bytes of the image in a base64url encoded string (c.f. RFC4648, section 5 "Base 64 Encoding with URL and Filename Safe Alphabet"). - The image type can be png or jpg. - The image should ideally be square. - The image should ideally have a size of 512x512. ',
      }),
  })
  .openapi({ description: 'Icon for a web app.', required: [] })
  .openapi('WebAppIcon')

const WebAppSchema = z
  .object({
    displayMode: z
      .enum(['displayModeUnspecified', 'minimalUi', 'standalone', 'fullScreen'])
      .exactOptional()
      .openapi({
        description:
          'The display mode of the web app. Possible values include: - "minimalUi", the device\'s status bar, navigation bar, the app\'s URL, and a refresh button are visible when the app is open. For HTTP URLs, you can only select this option. - "standalone", the device\'s status bar and navigation bar are visible when the app is open. - "fullScreen", the app opens in full screen mode, hiding the device\'s status and navigation bars. All browser UI elements, page URL, system status bar and back button are not visible, and the web app takes up the entirety of the available display area. ',
      }),
    icons: z
      .array(WebAppIconSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of icons representing this website. If absent, a default icon (for create) or the current icon (for update) will be used.',
      }),
    isPublished: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'A flag whether the app has been published to the Play store yet.' }),
    startUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The start URL, i.e. the URL that should load when the user opens the application.',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The title of the web app as displayed to the user (e.g., amongst a list of other applications, or as a label for an icon).',
      }),
    versionCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The current version of the app. Note that the version can automatically increase during the lifetime of the web app, while Google does internal housekeeping to keep the web app up-to-date.',
      }),
    webAppId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the application. A string of the form "app:<package name>" where the package name always starts with the prefix "com.google.enterprise.webapp." followed by a random id.',
      }),
  })
  .openapi({
    description:
      "A WebApps resource represents a web app created for an enterprise. Web apps are published to managed Google Play and can be distributed like other Android apps. On a user's device, a web app opens its specified URL.",
    required: [],
  })
  .openapi('WebApp')

const WebAppsListResponseSchema = z
  .object({
    webApp: z
      .array(WebAppSchema)
      .exactOptional()
      .openapi({ description: 'The manifest describing a web app.' }),
  })
  .openapi({ required: [] })
  .openapi('WebAppsListResponse')

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
        'https://www.googleapis.com/auth/androidenterprise': 'Manage corporate Android devices',
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
        'https://www.googleapis.com/auth/androidenterprise': 'Manage corporate Android devices',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getAndroidenterpriseV1EnterprisesRoute = createRoute({
  method: 'get',
  path: '/androidenterprise/v1/enterprises',
  tags: ['enterprises'],
  description:
    'Looks up an enterprise by domain name. This is only supported for enterprises created via the Google-initiated creation flow. Lookup of the id is not needed for enterprises created via the EMM-initiated flow since the EMM learns the enterprise ID in the callback specified in the Enterprises.generateSignupUrl call.',
  operationId: 'androidenterprise.enterprises.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      domain: z
        .string()
        .openapi({
          param: {
            description: 'Required. The exact primary domain name of the enterprise to look up.',
            in: 'query',
            name: 'domain',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EnterprisesListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
      Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
    },
  ],
})

export const postAndroidenterpriseV1EnterprisesAcknowledgeNotificationSetRoute = createRoute({
  method: 'post',
  path: '/androidenterprise/v1/enterprises/acknowledgeNotificationSet',
  tags: ['enterprises'],
  description:
    'Acknowledges notifications that were received from Enterprises.PullNotificationSet to prevent subsequent calls from returning the same notifications.',
  operationId: 'androidenterprise.enterprises.acknowledgeNotificationSet',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      notificationSetId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The notification set ID as returned by Enterprises.PullNotificationSet. This must be provided.',
            in: 'query',
            name: 'notificationSetId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
      Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
    },
  ],
})

export const postAndroidenterpriseV1EnterprisesCompleteSignupRoute = createRoute({
  method: 'post',
  path: '/androidenterprise/v1/enterprises/completeSignup',
  tags: ['enterprises'],
  description:
    'Completes the signup flow, by specifying the Completion token and Enterprise token. This request must not be called multiple times for a given Enterprise Token.',
  operationId: 'androidenterprise.enterprises.completeSignup',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      completionToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Completion token initially returned by GenerateSignupUrl.',
            in: 'query',
            name: 'completionToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      enterpriseToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The Enterprise token appended to the Callback URL.',
            in: 'query',
            name: 'enterpriseToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EnterpriseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
      Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
    },
  ],
})

export const postAndroidenterpriseV1EnterprisesEnrollRoute = createRoute({
  method: 'post',
  path: '/androidenterprise/v1/enterprises/enroll',
  tags: ['enterprises'],
  description: 'Enrolls an enterprise with the calling EMM.',
  operationId: 'androidenterprise.enterprises.enroll',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      token: z
        .string()
        .openapi({
          param: {
            description: 'Required. The token provided by the enterprise to register the EMM.',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EnterpriseSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EnterpriseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
      Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
    },
  ],
})

export const postAndroidenterpriseV1EnterprisesPullNotificationSetRoute = createRoute({
  method: 'post',
  path: '/androidenterprise/v1/enterprises/pullNotificationSet',
  tags: ['enterprises'],
  description:
    'Pulls and returns a notification set for the enterprises associated with the service account authenticated for the request. The notification set may be empty if no notification are pending. A notification set returned needs to be acknowledged within 20 seconds by calling Enterprises.AcknowledgeNotificationSet, unless the notification set is empty. Notifications that are not acknowledged within the 20 seconds will eventually be included again in the response to another PullNotificationSet request, and those that are never acknowledged will ultimately be deleted according to the Google Cloud Platform Pub/Sub system policy. Multiple requests might be performed concurrently to retrieve notifications, in which case the pending notifications (if any) will be split among each caller, if any are pending. If no notifications are present, an empty notification list is returned. Subsequent requests may return more notifications once they become available.',
  operationId: 'androidenterprise.enterprises.pullNotificationSet',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      requestMode: z
        .enum(['waitForNotifications', 'returnImmediately'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'The request mode for pulling notifications. Specifying waitForNotifications will cause the request to block and wait until one or more notifications are present, or return an empty notification list if no notifications are present after some time. Specifying returnImmediately will cause the request to immediately return the pending notifications, or an empty list if no notifications are present. If omitted, defaults to waitForNotifications.',
            in: 'query',
            name: 'requestMode',
            schema: { enum: ['waitForNotifications', 'returnImmediately'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: NotificationSetSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
      Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
    },
  ],
})

export const postAndroidenterpriseV1EnterprisesSignupUrlRoute = createRoute({
  method: 'post',
  path: '/androidenterprise/v1/enterprises/signupUrl',
  tags: ['enterprises'],
  description: 'Generates a sign-up URL.',
  operationId: 'androidenterprise.enterprises.generateSignupUrl',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      callbackUrl: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The callback URL to which the Admin will be redirected after successfully creating an enterprise. Before redirecting there the system will add a single query parameter to this URL named "enterpriseToken" which will contain an opaque token to be used for the CompleteSignup request. Beware that this means that the URL will be parsed, the parameter added and then a new URL formatted, i.e. there may be some minor formatting changes and, more importantly, the URL must be well-formed so that it can be parsed.',
            in: 'query',
            name: 'callbackUrl',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SignupInfoSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
      Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
    },
  ],
})

export const getAndroidenterpriseV1EnterprisesEnterpriseIdRoute = createRoute({
  method: 'get',
  path: '/androidenterprise/v1/enterprises/{enterpriseId}',
  tags: ['enterprises'],
  description: 'Retrieves the name and domain of an enterprise.',
  operationId: 'androidenterprise.enterprises.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
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
      enterpriseId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the enterprise.',
            in: 'path',
            name: 'enterpriseId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EnterpriseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
      Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
    },
  ],
})

export const putAndroidenterpriseV1EnterprisesEnterpriseIdAccountRoute = createRoute({
  method: 'put',
  path: '/androidenterprise/v1/enterprises/{enterpriseId}/account',
  tags: ['enterprises'],
  description: 'Sets the account that will be used to authenticate to the API as the enterprise.',
  operationId: 'androidenterprise.enterprises.setAccount',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
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
      enterpriseId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the enterprise.',
            in: 'path',
            name: 'enterpriseId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EnterpriseAccountSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EnterpriseAccountSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
      Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
    },
  ],
})

export const postAndroidenterpriseV1EnterprisesEnterpriseIdCreateEnrollmentTokenRoute = createRoute(
  {
    method: 'post',
    path: '/androidenterprise/v1/enterprises/{enterpriseId}/createEnrollmentToken',
    tags: ['enterprises'],
    description:
      'Returns a token for device enrollment. The DPC can encode this token within the QR/NFC/zero-touch enrollment payload or fetch it before calling the on-device API to authenticate the user. The token can be generated for each device or reused across multiple devices.',
    operationId: 'androidenterprise.enterprises.createEnrollmentToken',
    request: {
      query: z.object({
        '$.xgafv': XgafvParamsSchema,
        access_token: AccessTokenParamsSchema,
        alt: AltParamsSchema,
        callback: CallbackParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        upload_protocol: UploadProtocolParamsSchema,
        uploadType: UploadTypeParamsSchema,
        deviceType: z
          .enum(['unknown', 'dedicatedDevice', 'knowledgeWorker'])
          .exactOptional()
          .openapi({
            param: {
              description: 'Whether it’s a dedicated device or a knowledge worker device.',
              in: 'query',
              name: 'deviceType',
              schema: { enum: ['unknown', 'dedicatedDevice', 'knowledgeWorker'], type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        enterpriseId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the enterprise.',
              in: 'path',
              name: 'enterpriseId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: CreateEnrollmentTokenResponseSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
        Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
      },
    ],
  },
)

export const postAndroidenterpriseV1EnterprisesEnterpriseIdCreateWebTokenRoute = createRoute({
  method: 'post',
  path: '/androidenterprise/v1/enterprises/{enterpriseId}/createWebToken',
  tags: ['enterprises'],
  description:
    'Returns a unique token to access an embeddable UI. To generate a web UI, pass the generated token into the managed Google Play javascript API. Each token may only be used to start one UI session. See the javascript API documentation for further information.',
  operationId: 'androidenterprise.enterprises.createWebToken',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
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
      enterpriseId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the enterprise.',
            in: 'path',
            name: 'enterpriseId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AdministratorWebTokenSpecSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AdministratorWebTokenSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
      Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
    },
  ],
})

export const getAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesRoute = createRoute({
  method: 'get',
  path: '/androidenterprise/v1/enterprises/{enterpriseId}/groupLicenses',
  tags: ['grouplicenses'],
  description:
    'Retrieves IDs of all products for which the enterprise has a group license. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.',
  operationId: 'androidenterprise.grouplicenses.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
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
      enterpriseId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the enterprise.',
            in: 'path',
            name: 'enterpriseId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GroupLicensesListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
      Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
    },
  ],
})

export const getAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesGroupLicenseIdRoute =
  createRoute({
    method: 'get',
    path: '/androidenterprise/v1/enterprises/{enterpriseId}/groupLicenses/{groupLicenseId}',
    tags: ['grouplicenses'],
    description:
      "Retrieves details of an enterprise's group license for a product. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.",
    operationId: 'androidenterprise.grouplicenses.get',
    request: {
      query: z.object({
        '$.xgafv': XgafvParamsSchema,
        access_token: AccessTokenParamsSchema,
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
        enterpriseId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the enterprise.',
              in: 'path',
              name: 'enterpriseId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        groupLicenseId: z
          .string()
          .openapi({
            param: {
              description:
                'The ID of the product the group license is for, e.g. "app:com.google.android.gm".',
              in: 'path',
              name: 'groupLicenseId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: GroupLicenseSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
        Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
      },
    ],
  })

export const getAndroidenterpriseV1EnterprisesEnterpriseIdGroupLicensesGroupLicenseIdUsersRoute =
  createRoute({
    method: 'get',
    path: '/androidenterprise/v1/enterprises/{enterpriseId}/groupLicenses/{groupLicenseId}/users',
    tags: ['grouplicenseusers'],
    description:
      'Retrieves the IDs of the users who have been granted entitlements under the license. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.',
    operationId: 'androidenterprise.grouplicenseusers.list',
    request: {
      query: z.object({
        '$.xgafv': XgafvParamsSchema,
        access_token: AccessTokenParamsSchema,
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
        enterpriseId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the enterprise.',
              in: 'path',
              name: 'enterpriseId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        groupLicenseId: z
          .string()
          .openapi({
            param: {
              description:
                'The ID of the product the group license is for, e.g. "app:com.google.android.gm".',
              in: 'path',
              name: 'groupLicenseId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: GroupLicenseUsersListResponseSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
        Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
      },
    ],
  })

export const getAndroidenterpriseV1EnterprisesEnterpriseIdProductsRoute = createRoute({
  method: 'get',
  path: '/androidenterprise/v1/enterprises/{enterpriseId}/products',
  tags: ['products'],
  description:
    'Finds approved products that match a query, or all approved products if there is no query. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations. ',
  operationId: 'androidenterprise.products.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      approved: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies whether to search among all products (false) or among only products that have been approved (true). Only "true" is supported, and should be specified.',
            in: 'query',
            name: 'approved',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The BCP47 tag for the user\'s preferred language (e.g. "en-US", "de"). Results are returned in the language best matching the preferred language.',
            in: 'query',
            name: 'language',
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
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The search query as typed in the Google Play store search box. If omitted, all approved apps will be returned (using the pagination parameters), including apps that are not available in the store (e.g. unpublished apps).',
            in: 'query',
            name: 'query',
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
    }),
    params: z.object({
      enterpriseId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the enterprise.',
            in: 'path',
            name: 'enterpriseId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ProductsListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
      Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
    },
  ],
})

export const getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdRoute = createRoute({
  method: 'get',
  path: '/androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}',
  tags: ['products'],
  description: 'Retrieves details of a product for display to an enterprise admin.',
  operationId: 'androidenterprise.products.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The BCP47 tag for the user\'s preferred language (e.g. "en-US", "de").',
            in: 'query',
            name: 'language',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      enterpriseId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the enterprise.',
            in: 'path',
            name: 'enterpriseId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      productId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the product, e.g. "app:com.google.android.gm".',
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
      content: { 'application/json': { schema: ProductSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
      Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
    },
  ],
})

export const getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdAppRestrictionsSchemaRoute =
  createRoute({
    method: 'get',
    path: '/androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/appRestrictionsSchema',
    tags: ['products'],
    description:
      'Retrieves the schema that defines the configurable properties for this product. All products have a schema, but this schema may be empty if no managed configurations have been defined. This schema can be used to populate a UI that allows an admin to configure the product. To apply a managed configuration based on the schema obtained using this API, see Managed Configurations through Play.',
    operationId: 'androidenterprise.products.getAppRestrictionsSchema',
    request: {
      query: z.object({
        '$.xgafv': XgafvParamsSchema,
        access_token: AccessTokenParamsSchema,
        alt: AltParamsSchema,
        callback: CallbackParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        upload_protocol: UploadProtocolParamsSchema,
        uploadType: UploadTypeParamsSchema,
        language: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description: 'The BCP47 tag for the user\'s preferred language (e.g. "en-US", "de").',
              in: 'query',
              name: 'language',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        enterpriseId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the enterprise.',
              in: 'path',
              name: 'enterpriseId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        productId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the product.',
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
        content: { 'application/json': { schema: AppRestrictionsSchemaSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
        Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
      },
    ],
  })

export const postAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdApproveRoute =
  createRoute({
    method: 'post',
    path: '/androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/approve',
    tags: ['products'],
    description:
      ' Approves the specified product and the relevant app permissions, if any. The maximum number of products that you can approve per enterprise customer is 1,000. To learn how to use managed Google Play to design and create a store layout to display approved products to your users, see Store Layout Design. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations. ',
    operationId: 'androidenterprise.products.approve',
    request: {
      query: z.object({
        '$.xgafv': XgafvParamsSchema,
        access_token: AccessTokenParamsSchema,
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
        enterpriseId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the enterprise.',
              in: 'path',
              name: 'enterpriseId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        productId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the product.',
              in: 'path',
              name: 'productId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: ProductsApproveRequestSchema } } },
    },
    responses: { 200: { description: 'Successful response' } },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
        Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
      },
    ],
  })

export const postAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdGenerateApprovalUrlRoute =
  createRoute({
    method: 'post',
    path: '/androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/generateApprovalUrl',
    tags: ['products'],
    description:
      'Generates a URL that can be rendered in an iframe to display the permissions (if any) of a product. An enterprise admin must view these permissions and accept them on behalf of their organization in order to approve that product. Admins should accept the displayed permissions by interacting with a separate UI element in the EMM console, which in turn should trigger the use of this URL as the approvalUrlInfo.approvalUrl property in a Products.approve call to approve the product. This URL can only be used to display permissions for up to 1 day. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations. ',
    operationId: 'androidenterprise.products.generateApprovalUrl',
    request: {
      query: z.object({
        '$.xgafv': XgafvParamsSchema,
        access_token: AccessTokenParamsSchema,
        alt: AltParamsSchema,
        callback: CallbackParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        upload_protocol: UploadProtocolParamsSchema,
        uploadType: UploadTypeParamsSchema,
        languageCode: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'The BCP 47 language code used for permission names and descriptions in the returned iframe, for instance "en-US".',
              in: 'query',
              name: 'languageCode',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        enterpriseId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the enterprise.',
              in: 'path',
              name: 'enterpriseId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        productId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the product.',
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
        content: { 'application/json': { schema: ProductsGenerateApprovalUrlResponseSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
        Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
      },
    ],
  })

export const getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdManagedConfigurationsSettingsRoute =
  createRoute({
    method: 'get',
    path: '/androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/managedConfigurationsSettings',
    tags: ['managedconfigurationssettings'],
    description: 'Lists all the managed configurations settings for the specified app.',
    operationId: 'androidenterprise.managedconfigurationssettings.list',
    request: {
      query: z.object({
        '$.xgafv': XgafvParamsSchema,
        access_token: AccessTokenParamsSchema,
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
        enterpriseId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the enterprise.',
              in: 'path',
              name: 'enterpriseId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        productId: z
          .string()
          .openapi({
            param: {
              description:
                'The ID of the product for which the managed configurations settings applies to.',
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
        content: {
          'application/json': { schema: ManagedConfigurationsSettingsListResponseSchema },
        },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
        Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
      },
    ],
  })

export const getAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdPermissionsRoute =
  createRoute({
    method: 'get',
    path: '/androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/permissions',
    tags: ['products'],
    description: 'Retrieves the Android app permissions required by this app.',
    operationId: 'androidenterprise.products.getPermissions',
    request: {
      query: z.object({
        '$.xgafv': XgafvParamsSchema,
        access_token: AccessTokenParamsSchema,
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
        enterpriseId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the enterprise.',
              in: 'path',
              name: 'enterpriseId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        productId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the product.',
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
        content: { 'application/json': { schema: ProductPermissionsSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
        Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
      },
    ],
  })

export const postAndroidenterpriseV1EnterprisesEnterpriseIdProductsProductIdUnapproveRoute =
  createRoute({
    method: 'post',
    path: '/androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/unapprove',
    tags: ['products'],
    description:
      'Unapproves the specified product (and the relevant app permissions, if any) **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.',
    operationId: 'androidenterprise.products.unapprove',
    request: {
      query: z.object({
        '$.xgafv': XgafvParamsSchema,
        access_token: AccessTokenParamsSchema,
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
        enterpriseId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the enterprise.',
              in: 'path',
              name: 'enterpriseId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        productId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the product.',
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
        Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
        Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
      },
    ],
  })

export const postAndroidenterpriseV1EnterprisesEnterpriseIdSendTestPushNotificationRoute =
  createRoute({
    method: 'post',
    path: '/androidenterprise/v1/enterprises/{enterpriseId}/sendTestPushNotification',
    tags: ['enterprises'],
    description:
      'Sends a test notification to validate the EMM integration with the Google Cloud Pub/Sub service for this enterprise.',
    operationId: 'androidenterprise.enterprises.sendTestPushNotification',
    request: {
      query: z.object({
        '$.xgafv': XgafvParamsSchema,
        access_token: AccessTokenParamsSchema,
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
        enterpriseId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the enterprise.',
              in: 'path',
              name: 'enterpriseId',
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
          'application/json': { schema: EnterprisesSendTestPushNotificationResponseSchema },
        },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
        Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
      },
    ],
  })

export const getAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountRoute = createRoute({
  method: 'get',
  path: '/androidenterprise/v1/enterprises/{enterpriseId}/serviceAccount',
  tags: ['enterprises'],
  description:
    'Returns a service account and credentials. The service account can be bound to the enterprise by calling setAccount. The service account is unique to this enterprise and EMM, and will be deleted if the enterprise is unbound. The credentials contain private key data and are not stored server-side. This method can only be called after calling Enterprises.Enroll or Enterprises.CompleteSignup, and before Enterprises.SetAccount; at other times it will return an error. Subsequent calls after the first will generate a new, unique set of credentials, and invalidate the previously generated credentials. Once the service account is bound to the enterprise, it can be managed using the serviceAccountKeys resource.',
  operationId: 'androidenterprise.enterprises.getServiceAccount',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      keyType: z
        .enum(['googleCredentials', 'pkcs12'])
        .exactOptional()
        .openapi({
          param: {
            description: 'The type of credential to return with the service account. Required.',
            in: 'query',
            name: 'keyType',
            schema: { enum: ['googleCredentials', 'pkcs12'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      enterpriseId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the enterprise.',
            in: 'path',
            name: 'enterpriseId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ServiceAccountSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
      Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
    },
  ],
})

export const getAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountKeysRoute = createRoute({
  method: 'get',
  path: '/androidenterprise/v1/enterprises/{enterpriseId}/serviceAccountKeys',
  tags: ['serviceaccountkeys'],
  description:
    'Lists all active credentials for the service account associated with this enterprise. Only the ID and key type are returned. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount.',
  operationId: 'androidenterprise.serviceaccountkeys.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
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
      enterpriseId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the enterprise.',
            in: 'path',
            name: 'enterpriseId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ServiceAccountKeysListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
      Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
    },
  ],
})

export const postAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountKeysRoute = createRoute({
  method: 'post',
  path: '/androidenterprise/v1/enterprises/{enterpriseId}/serviceAccountKeys',
  tags: ['serviceaccountkeys'],
  description:
    'Generates new credentials for the service account associated with this enterprise. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount. Only the type of the key should be populated in the resource to be inserted.',
  operationId: 'androidenterprise.serviceaccountkeys.insert',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
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
      enterpriseId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the enterprise.',
            in: 'path',
            name: 'enterpriseId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ServiceAccountKeySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ServiceAccountKeySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
      Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
    },
  ],
})

export const deleteAndroidenterpriseV1EnterprisesEnterpriseIdServiceAccountKeysKeyIdRoute =
  createRoute({
    method: 'delete',
    path: '/androidenterprise/v1/enterprises/{enterpriseId}/serviceAccountKeys/{keyId}',
    tags: ['serviceaccountkeys'],
    description:
      'Removes and invalidates the specified credentials for the service account associated with this enterprise. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount.',
    operationId: 'androidenterprise.serviceaccountkeys.delete',
    request: {
      query: z.object({
        '$.xgafv': XgafvParamsSchema,
        access_token: AccessTokenParamsSchema,
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
        enterpriseId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the enterprise.',
              in: 'path',
              name: 'enterpriseId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        keyId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the key.',
              in: 'path',
              name: 'keyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: { 200: { description: 'Successful response' } },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
        Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
      },
    ],
  })

export const getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutRoute = createRoute({
  method: 'get',
  path: '/androidenterprise/v1/enterprises/{enterpriseId}/storeLayout',
  tags: ['enterprises'],
  description:
    'Returns the store layout for the enterprise. If the store layout has not been set, returns "basic" as the store layout type and no homepage.',
  operationId: 'androidenterprise.enterprises.getStoreLayout',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
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
      enterpriseId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the enterprise.',
            in: 'path',
            name: 'enterpriseId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: StoreLayoutSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
      Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
    },
  ],
})

export const putAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutRoute = createRoute({
  method: 'put',
  path: '/androidenterprise/v1/enterprises/{enterpriseId}/storeLayout',
  tags: ['enterprises'],
  description:
    'Sets the store layout for the enterprise. By default, storeLayoutType is set to "basic" and the basic store layout is enabled. The basic layout only contains apps approved by the admin, and that have been added to the available product set for a user (using the setAvailableProductSet call). Apps on the page are sorted in order of their product ID value. If you create a custom store layout (by setting storeLayoutType = "custom" and setting a homepage), the basic store layout is disabled.',
  operationId: 'androidenterprise.enterprises.setStoreLayout',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
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
      enterpriseId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the enterprise.',
            in: 'path',
            name: 'enterpriseId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: StoreLayoutSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: StoreLayoutSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
      Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
    },
  ],
})

export const getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesRoute = createRoute({
  method: 'get',
  path: '/androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages',
  tags: ['storelayoutpages'],
  description: 'Retrieves the details of all pages in the store.',
  operationId: 'androidenterprise.storelayoutpages.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
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
      enterpriseId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the enterprise.',
            in: 'path',
            name: 'enterpriseId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: StoreLayoutPagesListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
      Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
    },
  ],
})

export const postAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesRoute = createRoute({
  method: 'post',
  path: '/androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages',
  tags: ['storelayoutpages'],
  description: 'Inserts a new store page.',
  operationId: 'androidenterprise.storelayoutpages.insert',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
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
      enterpriseId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the enterprise.',
            in: 'path',
            name: 'enterpriseId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: StorePageSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: StorePageSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
      Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
    },
  ],
})

export const getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdRoute = createRoute(
  {
    method: 'get',
    path: '/androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}',
    tags: ['storelayoutpages'],
    description: 'Retrieves details of a store page.',
    operationId: 'androidenterprise.storelayoutpages.get',
    request: {
      query: z.object({
        '$.xgafv': XgafvParamsSchema,
        access_token: AccessTokenParamsSchema,
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
        enterpriseId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the enterprise.',
              in: 'path',
              name: 'enterpriseId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        pageId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the page.',
              in: 'path',
              name: 'pageId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: StorePageSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
        Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
      },
    ],
  },
)

export const putAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdRoute = createRoute(
  {
    method: 'put',
    path: '/androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}',
    tags: ['storelayoutpages'],
    description: 'Updates the content of a store page.',
    operationId: 'androidenterprise.storelayoutpages.update',
    request: {
      query: z.object({
        '$.xgafv': XgafvParamsSchema,
        access_token: AccessTokenParamsSchema,
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
        enterpriseId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the enterprise.',
              in: 'path',
              name: 'enterpriseId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        pageId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the page.',
              in: 'path',
              name: 'pageId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: StorePageSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: StorePageSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
        Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
      },
    ],
  },
)

export const deleteAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdRoute =
  createRoute({
    method: 'delete',
    path: '/androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}',
    tags: ['storelayoutpages'],
    description: 'Deletes a store page.',
    operationId: 'androidenterprise.storelayoutpages.delete',
    request: {
      query: z.object({
        '$.xgafv': XgafvParamsSchema,
        access_token: AccessTokenParamsSchema,
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
        enterpriseId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the enterprise.',
              in: 'path',
              name: 'enterpriseId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        pageId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the page.',
              in: 'path',
              name: 'pageId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: { 200: { description: 'Successful response' } },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
        Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
      },
    ],
  })

export const getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersRoute =
  createRoute({
    method: 'get',
    path: '/androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}/clusters',
    tags: ['storelayoutclusters'],
    description: 'Retrieves the details of all clusters on the specified page.',
    operationId: 'androidenterprise.storelayoutclusters.list',
    request: {
      query: z.object({
        '$.xgafv': XgafvParamsSchema,
        access_token: AccessTokenParamsSchema,
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
        enterpriseId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the enterprise.',
              in: 'path',
              name: 'enterpriseId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        pageId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the page.',
              in: 'path',
              name: 'pageId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: StoreLayoutClustersListResponseSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
        Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
      },
    ],
  })

export const postAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersRoute =
  createRoute({
    method: 'post',
    path: '/androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}/clusters',
    tags: ['storelayoutclusters'],
    description: 'Inserts a new cluster in a page.',
    operationId: 'androidenterprise.storelayoutclusters.insert',
    request: {
      query: z.object({
        '$.xgafv': XgafvParamsSchema,
        access_token: AccessTokenParamsSchema,
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
        enterpriseId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the enterprise.',
              in: 'path',
              name: 'enterpriseId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        pageId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the page.',
              in: 'path',
              name: 'pageId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: StoreClusterSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: StoreClusterSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
        Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
      },
    ],
  })

export const getAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersClusterIdRoute =
  createRoute({
    method: 'get',
    path: '/androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}/clusters/{clusterId}',
    tags: ['storelayoutclusters'],
    description: 'Retrieves details of a cluster.',
    operationId: 'androidenterprise.storelayoutclusters.get',
    request: {
      query: z.object({
        '$.xgafv': XgafvParamsSchema,
        access_token: AccessTokenParamsSchema,
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
        enterpriseId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the enterprise.',
              in: 'path',
              name: 'enterpriseId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        pageId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the page.',
              in: 'path',
              name: 'pageId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        clusterId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the cluster.',
              in: 'path',
              name: 'clusterId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: StoreClusterSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
        Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
      },
    ],
  })

export const putAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersClusterIdRoute =
  createRoute({
    method: 'put',
    path: '/androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}/clusters/{clusterId}',
    tags: ['storelayoutclusters'],
    description: 'Updates a cluster.',
    operationId: 'androidenterprise.storelayoutclusters.update',
    request: {
      query: z.object({
        '$.xgafv': XgafvParamsSchema,
        access_token: AccessTokenParamsSchema,
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
        enterpriseId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the enterprise.',
              in: 'path',
              name: 'enterpriseId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        pageId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the page.',
              in: 'path',
              name: 'pageId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        clusterId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the cluster.',
              in: 'path',
              name: 'clusterId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: StoreClusterSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: StoreClusterSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
        Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
      },
    ],
  })

export const deleteAndroidenterpriseV1EnterprisesEnterpriseIdStoreLayoutPagesPageIdClustersClusterIdRoute =
  createRoute({
    method: 'delete',
    path: '/androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}/clusters/{clusterId}',
    tags: ['storelayoutclusters'],
    description: 'Deletes a cluster.',
    operationId: 'androidenterprise.storelayoutclusters.delete',
    request: {
      query: z.object({
        '$.xgafv': XgafvParamsSchema,
        access_token: AccessTokenParamsSchema,
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
        enterpriseId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the enterprise.',
              in: 'path',
              name: 'enterpriseId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        pageId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the page.',
              in: 'path',
              name: 'pageId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        clusterId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the cluster.',
              in: 'path',
              name: 'clusterId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: { 200: { description: 'Successful response' } },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
        Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
      },
    ],
  })

export const postAndroidenterpriseV1EnterprisesEnterpriseIdUnenrollRoute = createRoute({
  method: 'post',
  path: '/androidenterprise/v1/enterprises/{enterpriseId}/unenroll',
  tags: ['enterprises'],
  description: 'Unenrolls an enterprise from the calling EMM.',
  operationId: 'androidenterprise.enterprises.unenroll',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
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
      enterpriseId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the enterprise.',
            in: 'path',
            name: 'enterpriseId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
      Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
    },
  ],
})

export const getAndroidenterpriseV1EnterprisesEnterpriseIdUsersRoute = createRoute({
  method: 'get',
  path: '/androidenterprise/v1/enterprises/{enterpriseId}/users',
  tags: ['users'],
  description:
    'Looks up a user by primary email address. This is only supported for Google-managed users. Lookup of the id is not needed for EMM-managed users because the id is already returned in the result of the Users.insert call.',
  operationId: 'androidenterprise.users.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      email: z
        .string()
        .openapi({
          param: {
            description: 'Required. The exact primary email address of the user to look up.',
            in: 'query',
            name: 'email',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      enterpriseId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the enterprise.',
            in: 'path',
            name: 'enterpriseId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: UsersListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
      Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
    },
  ],
})

export const postAndroidenterpriseV1EnterprisesEnterpriseIdUsersRoute = createRoute({
  method: 'post',
  path: '/androidenterprise/v1/enterprises/{enterpriseId}/users',
  tags: ['users'],
  description:
    'Creates a new EMM-managed user. The Users resource passed in the body of the request should include an accountIdentifier and an accountType. If a corresponding user already exists with the same account identifier, the user will be updated with the resource. In this case only the displayName field can be changed.',
  operationId: 'androidenterprise.users.insert',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
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
      enterpriseId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the enterprise.',
            in: 'path',
            name: 'enterpriseId',
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
      Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
      Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
    },
  ],
})

export const getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdRoute = createRoute({
  method: 'get',
  path: '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}',
  tags: ['users'],
  description: "Retrieves a user's details.",
  operationId: 'androidenterprise.users.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
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
      enterpriseId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the enterprise.',
            in: 'path',
            name: 'enterpriseId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      userId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the user.',
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
      Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
      Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
    },
  ],
})

export const putAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdRoute = createRoute({
  method: 'put',
  path: '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}',
  tags: ['users'],
  description:
    'Updates the details of an EMM-managed user. Can be used with EMM-managed users only (not Google managed users). Pass the new details in the Users resource in the request body. Only the displayName field can be changed. Other fields must either be unset or have the currently active value.',
  operationId: 'androidenterprise.users.update',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
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
      enterpriseId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the enterprise.',
            in: 'path',
            name: 'enterpriseId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      userId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the user.',
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
      Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
      Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
    },
  ],
})

export const deleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdRoute = createRoute({
  method: 'delete',
  path: '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}',
  tags: ['users'],
  description: 'Deleted an EMM-managed user.',
  operationId: 'androidenterprise.users.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
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
      enterpriseId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the enterprise.',
            in: 'path',
            name: 'enterpriseId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      userId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the user.',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
      Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
    },
  ],
})

export const postAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdAuthenticationTokenRoute =
  createRoute({
    method: 'post',
    path: '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/authenticationToken',
    tags: ['users'],
    description:
      'Generates an authentication token which the device policy client can use to provision the given EMM-managed user account on a device. The generated token is single-use and expires after a few minutes. You can provision a maximum of 10 devices per user. This call only works with EMM-managed accounts.',
    operationId: 'androidenterprise.users.generateAuthenticationToken',
    request: {
      query: z.object({
        '$.xgafv': XgafvParamsSchema,
        access_token: AccessTokenParamsSchema,
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
        enterpriseId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the enterprise.',
              in: 'path',
              name: 'enterpriseId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        userId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the user.',
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
        content: { 'application/json': { schema: AuthenticationTokenSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
        Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
      },
    ],
  })

export const getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdAvailableProductSetRoute =
  createRoute({
    method: 'get',
    path: '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/availableProductSet',
    tags: ['users'],
    description:
      'Retrieves the set of products a user is entitled to access. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.',
    operationId: 'androidenterprise.users.getAvailableProductSet',
    request: {
      query: z.object({
        '$.xgafv': XgafvParamsSchema,
        access_token: AccessTokenParamsSchema,
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
        enterpriseId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the enterprise.',
              in: 'path',
              name: 'enterpriseId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        userId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the user.',
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
        content: { 'application/json': { schema: ProductSetSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
        Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
      },
    ],
  })

export const putAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdAvailableProductSetRoute =
  createRoute({
    method: 'put',
    path: '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/availableProductSet',
    tags: ['users'],
    description:
      'Modifies the set of products that a user is entitled to access (referred to as *whitelisted* products). Only products that are approved or products that were previously approved (products with revoked approval) can be whitelisted. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.',
    operationId: 'androidenterprise.users.setAvailableProductSet',
    request: {
      query: z.object({
        '$.xgafv': XgafvParamsSchema,
        access_token: AccessTokenParamsSchema,
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
        enterpriseId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the enterprise.',
              in: 'path',
              name: 'enterpriseId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        userId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the user.',
              in: 'path',
              name: 'userId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: ProductSetSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ProductSetSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
        Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
      },
    ],
  })

export const deleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDeviceAccessRoute =
  createRoute({
    method: 'delete',
    path: '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/deviceAccess',
    tags: ['users'],
    description:
      'Revokes access to all devices currently provisioned to the user. The user will no longer be able to use the managed Play store on any of their managed devices. This call only works with EMM-managed accounts.',
    operationId: 'androidenterprise.users.revokeDeviceAccess',
    request: {
      query: z.object({
        '$.xgafv': XgafvParamsSchema,
        access_token: AccessTokenParamsSchema,
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
        enterpriseId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the enterprise.',
              in: 'path',
              name: 'enterpriseId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        userId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the user.',
              in: 'path',
              name: 'userId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: { 200: { description: 'Successful response' } },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
        Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
      },
    ],
  })

export const getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesRoute = createRoute({
  method: 'get',
  path: '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices',
  tags: ['devices'],
  description: "Retrieves the IDs of all of a user's devices.",
  operationId: 'androidenterprise.devices.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
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
      enterpriseId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the enterprise.',
            in: 'path',
            name: 'enterpriseId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      userId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the user.',
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
      content: { 'application/json': { schema: DevicesListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
      Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
    },
  ],
})

export const getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdRoute =
  createRoute({
    method: 'get',
    path: '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}',
    tags: ['devices'],
    description: 'Retrieves the details of a device.',
    operationId: 'androidenterprise.devices.get',
    request: {
      query: z.object({
        '$.xgafv': XgafvParamsSchema,
        access_token: AccessTokenParamsSchema,
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
        enterpriseId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the enterprise.',
              in: 'path',
              name: 'enterpriseId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        userId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the user.',
              in: 'path',
              name: 'userId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        deviceId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the device.',
              in: 'path',
              name: 'deviceId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: DeviceSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
        Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
      },
    ],
  })

export const putAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdRoute =
  createRoute({
    method: 'put',
    path: '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}',
    tags: ['devices'],
    description:
      'Updates the device policy. To ensure the policy is properly enforced, you need to prevent unmanaged accounts from accessing Google Play by setting the allowed_accounts in the managed configuration for the Google Play package. See restrict accounts in Google Play. When provisioning a new device, you should set the device policy using this method before adding the managed Google Play Account to the device, otherwise the policy will not be applied for a short period of time after adding the account to the device.',
    operationId: 'androidenterprise.devices.update',
    request: {
      query: z.object({
        '$.xgafv': XgafvParamsSchema,
        access_token: AccessTokenParamsSchema,
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
              description:
                'Mask that identifies which fields to update. If not set, all modifiable fields will be modified. When set in a query parameter, this field should be specified as updateMask=<field1>,<field2>,...',
              in: 'query',
              name: 'updateMask',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        enterpriseId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the enterprise.',
              in: 'path',
              name: 'enterpriseId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        userId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the user.',
              in: 'path',
              name: 'userId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        deviceId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the device.',
              in: 'path',
              name: 'deviceId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: DeviceSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: DeviceSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
        Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
      },
    ],
  })

export const postAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdForceReportUploadRoute =
  createRoute({
    method: 'post',
    path: '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/forceReportUpload',
    tags: ['devices'],
    description:
      'Uploads a report containing any changes in app states on the device since the last report was generated. You can call this method up to 3 times every 24 hours for a given device. If you exceed the quota, then the Google Play EMM API returns HTTP 429 Too Many Requests.',
    operationId: 'androidenterprise.devices.forceReportUpload',
    request: {
      query: z.object({
        '$.xgafv': XgafvParamsSchema,
        access_token: AccessTokenParamsSchema,
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
        enterpriseId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the enterprise.',
              in: 'path',
              name: 'enterpriseId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        userId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the user.',
              in: 'path',
              name: 'userId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        deviceId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the device.',
              in: 'path',
              name: 'deviceId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: { 200: { description: 'Successful response' } },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
        Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
      },
    ],
  })

export const getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsRoute =
  createRoute({
    method: 'get',
    path: '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/installs',
    tags: ['installs'],
    description: 'Retrieves the details of all apps installed on the specified device.',
    operationId: 'androidenterprise.installs.list',
    request: {
      query: z.object({
        '$.xgafv': XgafvParamsSchema,
        access_token: AccessTokenParamsSchema,
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
        enterpriseId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the enterprise.',
              in: 'path',
              name: 'enterpriseId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        userId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the user.',
              in: 'path',
              name: 'userId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        deviceId: z
          .string()
          .openapi({
            param: {
              description: 'The Android ID of the device.',
              in: 'path',
              name: 'deviceId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: InstallsListResponseSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
        Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
      },
    ],
  })

export const getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsInstallIdRoute =
  createRoute({
    method: 'get',
    path: '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/installs/{installId}',
    tags: ['installs'],
    description: 'Retrieves details of an installation of an app on a device.',
    operationId: 'androidenterprise.installs.get',
    request: {
      query: z.object({
        '$.xgafv': XgafvParamsSchema,
        access_token: AccessTokenParamsSchema,
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
        enterpriseId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the enterprise.',
              in: 'path',
              name: 'enterpriseId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        userId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the user.',
              in: 'path',
              name: 'userId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        deviceId: z
          .string()
          .openapi({
            param: {
              description: 'The Android ID of the device.',
              in: 'path',
              name: 'deviceId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        installId: z
          .string()
          .openapi({
            param: {
              description:
                'The ID of the product represented by the install, e.g. "app:com.google.android.gm".',
              in: 'path',
              name: 'installId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: InstallSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
        Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
      },
    ],
  })

export const putAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsInstallIdRoute =
  createRoute({
    method: 'put',
    path: '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/installs/{installId}',
    tags: ['installs'],
    description:
      'Requests to install the latest version of an app to a device. If the app is already installed, then it is updated to the latest version if necessary.',
    operationId: 'androidenterprise.installs.update',
    request: {
      query: z.object({
        '$.xgafv': XgafvParamsSchema,
        access_token: AccessTokenParamsSchema,
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
        enterpriseId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the enterprise.',
              in: 'path',
              name: 'enterpriseId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        userId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the user.',
              in: 'path',
              name: 'userId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        deviceId: z
          .string()
          .openapi({
            param: {
              description: 'The Android ID of the device.',
              in: 'path',
              name: 'deviceId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        installId: z
          .string()
          .openapi({
            param: {
              description:
                'The ID of the product represented by the install, e.g. "app:com.google.android.gm".',
              in: 'path',
              name: 'installId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: InstallSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: InstallSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
        Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
      },
    ],
  })

export const deleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdInstallsInstallIdRoute =
  createRoute({
    method: 'delete',
    path: '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/installs/{installId}',
    tags: ['installs'],
    description:
      'Requests to remove an app from a device. A call to get or list will still show the app as installed on the device until it is actually removed.',
    operationId: 'androidenterprise.installs.delete',
    request: {
      query: z.object({
        '$.xgafv': XgafvParamsSchema,
        access_token: AccessTokenParamsSchema,
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
        enterpriseId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the enterprise.',
              in: 'path',
              name: 'enterpriseId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        userId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the user.',
              in: 'path',
              name: 'userId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        deviceId: z
          .string()
          .openapi({
            param: {
              description: 'The Android ID of the device.',
              in: 'path',
              name: 'deviceId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        installId: z
          .string()
          .openapi({
            param: {
              description:
                'The ID of the product represented by the install, e.g. "app:com.google.android.gm".',
              in: 'path',
              name: 'installId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: { 200: { description: 'Successful response' } },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
        Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
      },
    ],
  })

export const getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceRoute =
  createRoute({
    method: 'get',
    path: '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/managedConfigurationsForDevice',
    tags: ['managedconfigurationsfordevice'],
    description:
      'Lists all the per-device managed configurations for the specified device. Only the ID is set.',
    operationId: 'androidenterprise.managedconfigurationsfordevice.list',
    request: {
      query: z.object({
        '$.xgafv': XgafvParamsSchema,
        access_token: AccessTokenParamsSchema,
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
        enterpriseId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the enterprise.',
              in: 'path',
              name: 'enterpriseId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        userId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the user.',
              in: 'path',
              name: 'userId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        deviceId: z
          .string()
          .openapi({
            param: {
              description: 'The Android ID of the device.',
              in: 'path',
              name: 'deviceId',
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
          'application/json': { schema: ManagedConfigurationsForDeviceListResponseSchema },
        },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
        Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
      },
    ],
  })

export const getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceManagedConfigurationForDeviceIdRoute =
  createRoute({
    method: 'get',
    path: '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/managedConfigurationsForDevice/{managedConfigurationForDeviceId}',
    tags: ['managedconfigurationsfordevice'],
    description: 'Retrieves details of a per-device managed configuration.',
    operationId: 'androidenterprise.managedconfigurationsfordevice.get',
    request: {
      query: z.object({
        '$.xgafv': XgafvParamsSchema,
        access_token: AccessTokenParamsSchema,
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
        enterpriseId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the enterprise.',
              in: 'path',
              name: 'enterpriseId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        userId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the user.',
              in: 'path',
              name: 'userId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        deviceId: z
          .string()
          .openapi({
            param: {
              description: 'The Android ID of the device.',
              in: 'path',
              name: 'deviceId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        managedConfigurationForDeviceId: z
          .string()
          .openapi({
            param: {
              description:
                'The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".',
              in: 'path',
              name: 'managedConfigurationForDeviceId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ManagedConfigurationSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
        Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
      },
    ],
  })

export const putAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceManagedConfigurationForDeviceIdRoute =
  createRoute({
    method: 'put',
    path: '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/managedConfigurationsForDevice/{managedConfigurationForDeviceId}',
    tags: ['managedconfigurationsfordevice'],
    description:
      'Adds or updates a per-device managed configuration for an app for the specified device.',
    operationId: 'androidenterprise.managedconfigurationsfordevice.update',
    request: {
      query: z.object({
        '$.xgafv': XgafvParamsSchema,
        access_token: AccessTokenParamsSchema,
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
        enterpriseId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the enterprise.',
              in: 'path',
              name: 'enterpriseId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        userId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the user.',
              in: 'path',
              name: 'userId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        deviceId: z
          .string()
          .openapi({
            param: {
              description: 'The Android ID of the device.',
              in: 'path',
              name: 'deviceId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        managedConfigurationForDeviceId: z
          .string()
          .openapi({
            param: {
              description:
                'The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".',
              in: 'path',
              name: 'managedConfigurationForDeviceId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: ManagedConfigurationSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ManagedConfigurationSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
        Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
      },
    ],
  })

export const deleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdManagedConfigurationsForDeviceManagedConfigurationForDeviceIdRoute =
  createRoute({
    method: 'delete',
    path: '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/managedConfigurationsForDevice/{managedConfigurationForDeviceId}',
    tags: ['managedconfigurationsfordevice'],
    description: 'Removes a per-device managed configuration for an app for the specified device.',
    operationId: 'androidenterprise.managedconfigurationsfordevice.delete',
    request: {
      query: z.object({
        '$.xgafv': XgafvParamsSchema,
        access_token: AccessTokenParamsSchema,
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
        enterpriseId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the enterprise.',
              in: 'path',
              name: 'enterpriseId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        userId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the user.',
              in: 'path',
              name: 'userId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        deviceId: z
          .string()
          .openapi({
            param: {
              description: 'The Android ID of the device.',
              in: 'path',
              name: 'deviceId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        managedConfigurationForDeviceId: z
          .string()
          .openapi({
            param: {
              description:
                'The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".',
              in: 'path',
              name: 'managedConfigurationForDeviceId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: { 200: { description: 'Successful response' } },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
        Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
      },
    ],
  })

export const getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdStateRoute =
  createRoute({
    method: 'get',
    path: '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/state',
    tags: ['devices'],
    description:
      "Retrieves whether a device's access to Google services is enabled or disabled. The device state takes effect only if enforcing EMM policies on Android devices is enabled in the Google Admin Console. Otherwise, the device state is ignored and all devices are allowed access to Google services. This is only supported for Google-managed users.",
    operationId: 'androidenterprise.devices.getState',
    request: {
      query: z.object({
        '$.xgafv': XgafvParamsSchema,
        access_token: AccessTokenParamsSchema,
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
        enterpriseId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the enterprise.',
              in: 'path',
              name: 'enterpriseId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        userId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the user.',
              in: 'path',
              name: 'userId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        deviceId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the device.',
              in: 'path',
              name: 'deviceId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: DeviceStateSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
        Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
      },
    ],
  })

export const putAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdDevicesDeviceIdStateRoute =
  createRoute({
    method: 'put',
    path: '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/state',
    tags: ['devices'],
    description:
      "Sets whether a device's access to Google services is enabled or disabled. The device state takes effect only if enforcing EMM policies on Android devices is enabled in the Google Admin Console. Otherwise, the device state is ignored and all devices are allowed access to Google services. This is only supported for Google-managed users.",
    operationId: 'androidenterprise.devices.setState',
    request: {
      query: z.object({
        '$.xgafv': XgafvParamsSchema,
        access_token: AccessTokenParamsSchema,
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
        enterpriseId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the enterprise.',
              in: 'path',
              name: 'enterpriseId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        userId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the user.',
              in: 'path',
              name: 'userId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        deviceId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the device.',
              in: 'path',
              name: 'deviceId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: DeviceStateSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: DeviceStateSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
        Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
      },
    ],
  })

export const getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsRoute =
  createRoute({
    method: 'get',
    path: '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/entitlements',
    tags: ['entitlements'],
    description:
      'Lists all entitlements for the specified user. Only the ID is set. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.',
    operationId: 'androidenterprise.entitlements.list',
    request: {
      query: z.object({
        '$.xgafv': XgafvParamsSchema,
        access_token: AccessTokenParamsSchema,
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
        enterpriseId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the enterprise.',
              in: 'path',
              name: 'enterpriseId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        userId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the user.',
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
        content: { 'application/json': { schema: EntitlementsListResponseSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
        Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
      },
    ],
  })

export const getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsEntitlementIdRoute =
  createRoute({
    method: 'get',
    path: '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/entitlements/{entitlementId}',
    tags: ['entitlements'],
    description:
      'Retrieves details of an entitlement. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.',
    operationId: 'androidenterprise.entitlements.get',
    request: {
      query: z.object({
        '$.xgafv': XgafvParamsSchema,
        access_token: AccessTokenParamsSchema,
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
        enterpriseId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the enterprise.',
              in: 'path',
              name: 'enterpriseId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        userId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the user.',
              in: 'path',
              name: 'userId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        entitlementId: z
          .string()
          .openapi({
            param: {
              description:
                'The ID of the entitlement (a product ID), e.g. "app:com.google.android.gm".',
              in: 'path',
              name: 'entitlementId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: EntitlementSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
        Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
      },
    ],
  })

export const putAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsEntitlementIdRoute =
  createRoute({
    method: 'put',
    path: '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/entitlements/{entitlementId}',
    tags: ['entitlements'],
    description:
      'Adds or updates an entitlement to an app for a user. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.',
    operationId: 'androidenterprise.entitlements.update',
    request: {
      query: z.object({
        '$.xgafv': XgafvParamsSchema,
        access_token: AccessTokenParamsSchema,
        alt: AltParamsSchema,
        callback: CallbackParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        upload_protocol: UploadProtocolParamsSchema,
        uploadType: UploadTypeParamsSchema,
        install: z
          .stringbool()
          .exactOptional()
          .openapi({
            param: {
              description:
                "Set to true to also install the product on all the user's devices where possible. Failure to install on one or more devices will not prevent this operation from returning successfully, as long as the entitlement was successfully assigned to the user.",
              in: 'query',
              name: 'install',
              schema: { type: 'boolean' },
              required: false,
            },
          }),
      }),
      params: z.object({
        enterpriseId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the enterprise.',
              in: 'path',
              name: 'enterpriseId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        userId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the user.',
              in: 'path',
              name: 'userId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        entitlementId: z
          .string()
          .openapi({
            param: {
              description:
                'The ID of the entitlement (a product ID), e.g. "app:com.google.android.gm".',
              in: 'path',
              name: 'entitlementId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: EntitlementSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: EntitlementSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
        Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
      },
    ],
  })

export const deleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdEntitlementsEntitlementIdRoute =
  createRoute({
    method: 'delete',
    path: '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/entitlements/{entitlementId}',
    tags: ['entitlements'],
    description:
      'Removes an entitlement to an app for a user. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.',
    operationId: 'androidenterprise.entitlements.delete',
    request: {
      query: z.object({
        '$.xgafv': XgafvParamsSchema,
        access_token: AccessTokenParamsSchema,
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
        enterpriseId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the enterprise.',
              in: 'path',
              name: 'enterpriseId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        userId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the user.',
              in: 'path',
              name: 'userId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        entitlementId: z
          .string()
          .openapi({
            param: {
              description:
                'The ID of the entitlement (a product ID), e.g. "app:com.google.android.gm".',
              in: 'path',
              name: 'entitlementId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: { 200: { description: 'Successful response' } },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
        Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
      },
    ],
  })

export const getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserRoute =
  createRoute({
    method: 'get',
    path: '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/managedConfigurationsForUser',
    tags: ['managedconfigurationsforuser'],
    description:
      'Lists all the per-user managed configurations for the specified user. Only the ID is set.',
    operationId: 'androidenterprise.managedconfigurationsforuser.list',
    request: {
      query: z.object({
        '$.xgafv': XgafvParamsSchema,
        access_token: AccessTokenParamsSchema,
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
        enterpriseId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the enterprise.',
              in: 'path',
              name: 'enterpriseId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        userId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the user.',
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
        content: { 'application/json': { schema: ManagedConfigurationsForUserListResponseSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
        Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
      },
    ],
  })

export const getAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserManagedConfigurationForUserIdRoute =
  createRoute({
    method: 'get',
    path: '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/managedConfigurationsForUser/{managedConfigurationForUserId}',
    tags: ['managedconfigurationsforuser'],
    description:
      'Retrieves details of a per-user managed configuration for an app for the specified user.',
    operationId: 'androidenterprise.managedconfigurationsforuser.get',
    request: {
      query: z.object({
        '$.xgafv': XgafvParamsSchema,
        access_token: AccessTokenParamsSchema,
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
        enterpriseId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the enterprise.',
              in: 'path',
              name: 'enterpriseId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        userId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the user.',
              in: 'path',
              name: 'userId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        managedConfigurationForUserId: z
          .string()
          .openapi({
            param: {
              description:
                'The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".',
              in: 'path',
              name: 'managedConfigurationForUserId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ManagedConfigurationSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
        Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
      },
    ],
  })

export const putAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserManagedConfigurationForUserIdRoute =
  createRoute({
    method: 'put',
    path: '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/managedConfigurationsForUser/{managedConfigurationForUserId}',
    tags: ['managedconfigurationsforuser'],
    description:
      'Adds or updates the managed configuration settings for an app for the specified user. If you support the Managed configurations iframe, you can apply managed configurations to a user by specifying an mcmId and its associated configuration variables (if any) in the request. Alternatively, all EMMs can apply managed configurations by passing a list of managed properties.',
    operationId: 'androidenterprise.managedconfigurationsforuser.update',
    request: {
      query: z.object({
        '$.xgafv': XgafvParamsSchema,
        access_token: AccessTokenParamsSchema,
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
        enterpriseId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the enterprise.',
              in: 'path',
              name: 'enterpriseId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        userId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the user.',
              in: 'path',
              name: 'userId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        managedConfigurationForUserId: z
          .string()
          .openapi({
            param: {
              description:
                'The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".',
              in: 'path',
              name: 'managedConfigurationForUserId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: ManagedConfigurationSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ManagedConfigurationSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
        Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
      },
    ],
  })

export const deleteAndroidenterpriseV1EnterprisesEnterpriseIdUsersUserIdManagedConfigurationsForUserManagedConfigurationForUserIdRoute =
  createRoute({
    method: 'delete',
    path: '/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/managedConfigurationsForUser/{managedConfigurationForUserId}',
    tags: ['managedconfigurationsforuser'],
    description: 'Removes a per-user managed configuration for an app for the specified user.',
    operationId: 'androidenterprise.managedconfigurationsforuser.delete',
    request: {
      query: z.object({
        '$.xgafv': XgafvParamsSchema,
        access_token: AccessTokenParamsSchema,
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
        enterpriseId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the enterprise.',
              in: 'path',
              name: 'enterpriseId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        userId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the user.',
              in: 'path',
              name: 'userId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        managedConfigurationForUserId: z
          .string()
          .openapi({
            param: {
              description:
                'The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".',
              in: 'path',
              name: 'managedConfigurationForUserId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: { 200: { description: 'Successful response' } },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
        Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
      },
    ],
  })

export const getAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsRoute = createRoute({
  method: 'get',
  path: '/androidenterprise/v1/enterprises/{enterpriseId}/webApps',
  tags: ['webapps'],
  description: 'Retrieves the details of all web apps for a given enterprise.',
  operationId: 'androidenterprise.webapps.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
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
      enterpriseId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the enterprise.',
            in: 'path',
            name: 'enterpriseId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: WebAppsListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
      Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
    },
  ],
})

export const postAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsRoute = createRoute({
  method: 'post',
  path: '/androidenterprise/v1/enterprises/{enterpriseId}/webApps',
  tags: ['webapps'],
  description: 'Creates a new web app for the enterprise.',
  operationId: 'androidenterprise.webapps.insert',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
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
      enterpriseId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the enterprise.',
            in: 'path',
            name: 'enterpriseId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: WebAppSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: WebAppSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
      Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
    },
  ],
})

export const getAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsWebAppIdRoute = createRoute({
  method: 'get',
  path: '/androidenterprise/v1/enterprises/{enterpriseId}/webApps/{webAppId}',
  tags: ['webapps'],
  description: 'Gets an existing web app.',
  operationId: 'androidenterprise.webapps.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
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
      enterpriseId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the enterprise.',
            in: 'path',
            name: 'enterpriseId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      webAppId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the web app.',
            in: 'path',
            name: 'webAppId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: WebAppSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
      Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
    },
  ],
})

export const putAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsWebAppIdRoute = createRoute({
  method: 'put',
  path: '/androidenterprise/v1/enterprises/{enterpriseId}/webApps/{webAppId}',
  tags: ['webapps'],
  description: 'Updates an existing web app.',
  operationId: 'androidenterprise.webapps.update',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
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
      enterpriseId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the enterprise.',
            in: 'path',
            name: 'enterpriseId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      webAppId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the web app.',
            in: 'path',
            name: 'webAppId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: WebAppSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: WebAppSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
      Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
    },
  ],
})

export const deleteAndroidenterpriseV1EnterprisesEnterpriseIdWebAppsWebAppIdRoute = createRoute({
  method: 'delete',
  path: '/androidenterprise/v1/enterprises/{enterpriseId}/webApps/{webAppId}',
  tags: ['webapps'],
  description: 'Deletes an existing web app.',
  operationId: 'androidenterprise.webapps.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
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
      enterpriseId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the enterprise.',
            in: 'path',
            name: 'enterpriseId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      webAppId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the web app.',
            in: 'path',
            name: 'webAppId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
      Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
    },
  ],
})

export const getAndroidenterpriseV1PermissionsPermissionIdRoute = createRoute({
  method: 'get',
  path: '/androidenterprise/v1/permissions/{permissionId}',
  tags: ['permissions'],
  description: 'Retrieves details of an Android app permission for display to an enterprise admin.',
  operationId: 'androidenterprise.permissions.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The BCP47 tag for the user\'s preferred language (e.g. "en-US", "de")',
            in: 'query',
            name: 'language',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      permissionId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the permission.',
            in: 'path',
            name: 'permissionId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PermissionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidenterprise'],
      Oauth2c: ['https://www.googleapis.com/auth/androidenterprise'],
    },
  ],
})
