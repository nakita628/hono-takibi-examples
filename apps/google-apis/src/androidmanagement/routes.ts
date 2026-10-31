import { createRoute, z } from '@hono/zod-openapi'

const ManagedPropertyEntrySchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The human-readable name of the value. Localized.' }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The machine-readable value of the entry, which should be used in the configuration. Not localized.',
      }),
  })
  .openapi({ description: 'An entry of a managed property.', required: [] })
  .openapi('ManagedPropertyEntry')

type ManagedPropertyType = {
  defaultValue?: { [key: string]: unknown }
  description?: string
  entries?: z.infer<typeof ManagedPropertyEntrySchema>[]
  key?: string
  nestedProperties?: ManagedPropertyType[]
  title?: string
  type?:
    | 'MANAGED_PROPERTY_TYPE_UNSPECIFIED'
    | 'BOOL'
    | 'STRING'
    | 'INTEGER'
    | 'CHOICE'
    | 'MULTISELECT'
    | 'HIDDEN'
    | 'BUNDLE'
    | 'BUNDLE_ARRAY'
}

const AdvancedSecurityOverridesSchema = z
  .object({
    commonCriteriaMode: z
      .enum([
        'COMMON_CRITERIA_MODE_UNSPECIFIED',
        'COMMON_CRITERIA_MODE_DISABLED',
        'COMMON_CRITERIA_MODE_ENABLED',
      ])
      .exactOptional()
      .openapi({
        description:
          'Controls Common Criteria Mode—security standards defined in the Common Criteria for Information Technology Security Evaluation (https://www.commoncriteriaportal.org/) (CC). Enabling Common Criteria Mode increases certain security components on a device, including AES-GCM encryption of Bluetooth Long Term Keys, and Wi-Fi configuration stores.Warning: Common Criteria Mode enforces a strict security model typically only required for IT products used in national security systems and other highly sensitive organizations. Standard device use may be affected. Only enabled if required.',
      }),
    developerSettings: z
      .enum([
        'DEVELOPER_SETTINGS_UNSPECIFIED',
        'DEVELOPER_SETTINGS_DISABLED',
        'DEVELOPER_SETTINGS_ALLOWED',
      ])
      .exactOptional()
      .openapi({
        description:
          'Controls access to developer settings: developer options and safe boot. Replaces safeBootDisabled (deprecated) and debuggingFeaturesAllowed (deprecated).',
      }),
    googlePlayProtectVerifyApps: z
      .enum([
        'GOOGLE_PLAY_PROTECT_VERIFY_APPS_UNSPECIFIED',
        'VERIFY_APPS_ENFORCED',
        'VERIFY_APPS_USER_CHOICE',
      ])
      .exactOptional()
      .openapi({
        description:
          'Whether Google Play Protect verification (https://support.google.com/accounts/answer/2812853) is enforced. Replaces ensureVerifyAppsEnabled (deprecated).',
      }),
    personalAppsThatCanReadWorkNotifications: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Personal apps that can read work profile notifications using a NotificationListenerService (https://developer.android.com/reference/android/service/notification/NotificationListenerService). By default, no personal apps (aside from system apps) can read work notifications. Each value in the list must be a package name.',
      }),
    untrustedAppsPolicy: z
      .enum([
        'UNTRUSTED_APPS_POLICY_UNSPECIFIED',
        'DISALLOW_INSTALL',
        'ALLOW_INSTALL_IN_PERSONAL_PROFILE_ONLY',
        'ALLOW_INSTALL_DEVICE_WIDE',
      ])
      .exactOptional()
      .openapi({
        description:
          'The policy for untrusted apps (apps from unknown sources) enforced on the device. Replaces install_unknown_sources_allowed (deprecated).',
      }),
  })
  .openapi({
    description:
      "Security policies set to secure values by default. To maintain the security posture of a device, we don't recommend overriding any of the default values.",
    required: [],
  })
  .openapi('AdvancedSecurityOverrides')

const AlwaysOnVpnPackageSchema = z
  .object({
    lockdownEnabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Disallows networking when the VPN is not connected.' }),
    packageName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The package name of the VPN app.' }),
  })
  .openapi({ description: 'Configuration for an always-on VPN connection.', required: [] })
  .openapi('AlwaysOnVpnPackage')

const ExtensionConfigSchema = z
  .object({
    notificationReceiver: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Fully qualified class name of the receiver service class for Android Device Policy to notify the extension app of any local command status updates.',
      }),
    signingKeyFingerprintsSha256: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Hex-encoded SHA-256 hash of the signing certificate of the extension app. Only hexadecimal string representations of 64 characters are valid.If not specified, the signature for the corresponding package name is obtained from the Play Store instead.If this list is empty, the signature of the extension app on the device must match the signature obtained from the Play Store for the app to be able to communicate with Android Device Policy.If this list is not empty, the signature of the extension app on the device must match one of the entries in this list for the app to be able to communicate with Android Device Policy.In production use cases, it is recommended to leave this empty.',
      }),
  })
  .openapi({
    description:
      'Configuration to enable an app as an extension app, with the capability of interacting with Android Device Policy offline. For Android versions 13 and above, extension apps are exempt from battery restrictions so will not be placed into the restricted App Standby Bucket (https://developer.android.com/topic/performance/appstandby#restricted-bucket). Extensions apps are also protected against users clearing their data or force-closing the application, although admins can continue to use the clear app data command (https://developer.android.com/management/reference/rest/v1/enterprises.devices/issueCommand#CommandType) on extension apps if needed for Android 13 and above.',
    required: [],
  })
  .openapi('ExtensionConfig')

const ManagedConfigurationTemplateSchema = z
  .object({
    configurationVariables: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional, a map containing configuration variables defined for the configuration.',
      }),
    templateId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the managed configurations template.' }),
  })
  .openapi({
    description:
      'The managed configurations template for the app, saved from the managed configurations iframe.',
    required: [],
  })
  .openapi('ManagedConfigurationTemplate')

const PermissionGrantSchema = z
  .object({
    permission: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Android permission or group, e.g. android.permission.READ_CALENDAR or android.permission_group.CALENDAR.',
      }),
    policy: z
      .enum(['PERMISSION_POLICY_UNSPECIFIED', 'PROMPT', 'GRANT', 'DENY'])
      .exactOptional()
      .openapi({ description: 'The policy for granting the permission.' }),
  })
  .openapi({
    description: 'Configuration for an Android permission and its grant state.',
    required: [],
  })
  .openapi('PermissionGrant')

const ApplicationPolicySchema = z
  .object({
    accessibleTrackIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of the app’s track IDs that a device belonging to the enterprise can access. If the list contains multiple track IDs, devices receive the latest version among all accessible tracks. If the list contains no track IDs, devices only have access to the app’s production track. More details about each track are available in AppTrackInfo.',
      }),
    alwaysOnVpnLockdownExemption: z
      .enum([
        'ALWAYS_ON_VPN_LOCKDOWN_EXEMPTION_UNSPECIFIED',
        'VPN_LOCKDOWN_ENFORCED',
        'VPN_LOCKDOWN_EXEMPTION',
      ])
      .exactOptional()
      .openapi({
        description:
          'Specifies whether the app is allowed networking when the VPN is not connected and alwaysOnVpnPackage.lockdownEnabled is enabled. If set to VPN_LOCKDOWN_ENFORCED, the app is not allowed networking, and if set to VPN_LOCKDOWN_EXEMPTION, the app is allowed networking. Only supported on devices running Android 10 and above. If this is not supported by the device, the device will contain a NonComplianceDetail with non_compliance_reason set to API_LEVEL and a fieldPath. If this is not applicable to the app, the device will contain a NonComplianceDetail with non_compliance_reason set to UNSUPPORTED and a fieldPath. The fieldPath is set to applications[i].alwaysOnVpnLockdownExemption, where i is the index of the package in the applications policy.',
      }),
    autoUpdateMode: z
      .enum([
        'AUTO_UPDATE_MODE_UNSPECIFIED',
        'AUTO_UPDATE_DEFAULT',
        'AUTO_UPDATE_POSTPONED',
        'AUTO_UPDATE_HIGH_PRIORITY',
      ])
      .exactOptional()
      .openapi({ description: 'Controls the auto-update mode for the app.' }),
    connectedWorkAndPersonalApp: z
      .enum([
        'CONNECTED_WORK_AND_PERSONAL_APP_UNSPECIFIED',
        'CONNECTED_WORK_AND_PERSONAL_APP_DISALLOWED',
        'CONNECTED_WORK_AND_PERSONAL_APP_ALLOWED',
      ])
      .exactOptional()
      .openapi({
        description:
          'Controls whether the app can communicate with itself across a device’s work and personal profiles, subject to user consent.',
      }),
    defaultPermissionPolicy: z
      .enum(['PERMISSION_POLICY_UNSPECIFIED', 'PROMPT', 'GRANT', 'DENY'])
      .exactOptional()
      .openapi({
        description:
          'The default policy for all permissions requested by the app. If specified, this overrides the policy-level default_permission_policy which applies to all apps. It does not override the permission_grants which applies to all apps.',
      }),
    delegatedScopes: z
      .array(
        z.enum([
          'DELEGATED_SCOPE_UNSPECIFIED',
          'CERT_INSTALL',
          'MANAGED_CONFIGURATIONS',
          'BLOCK_UNINSTALL',
          'PERMISSION_GRANT',
          'PACKAGE_ACCESS',
          'ENABLE_SYSTEM_APP',
          'NETWORK_ACTIVITY_LOGS',
          'SECURITY_LOGS',
        ]),
      )
      .exactOptional()
      .openapi({ description: 'The scopes delegated to the app from Android Device Policy.' }),
    disabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether the app is disabled. When disabled, the app data is still preserved.',
      }),
    extensionConfig: ExtensionConfigSchema.exactOptional().openapi({
      description:
        'Configuration to enable this app as an extension app, with the capability of interacting with Android Device Policy offline.This field can be set for at most one app.',
    }),
    installType: z
      .enum([
        'INSTALL_TYPE_UNSPECIFIED',
        'PREINSTALLED',
        'FORCE_INSTALLED',
        'BLOCKED',
        'AVAILABLE',
        'REQUIRED_FOR_SETUP',
        'KIOSK',
      ])
      .exactOptional()
      .openapi({ description: 'The type of installation to perform.' }),
    lockTaskAllowed: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the app is allowed to lock itself in full-screen mode. DEPRECATED. Use InstallType KIOSK or kioskCustomLauncherEnabled to configure a dedicated device.',
      }),
    managedConfiguration: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional()
      .openapi({
        description:
          'Managed configuration applied to the app. The format for the configuration is dictated by the ManagedProperty values supported by the app. Each field name in the managed configuration must match the key field of the ManagedProperty. The field value must be compatible with the type of the ManagedProperty: *type* *JSON value* BOOL true or false STRING string INTEGER number CHOICE string MULTISELECT array of strings HIDDEN string BUNDLE_ARRAY array of objects ',
      }),
    managedConfigurationTemplate: ManagedConfigurationTemplateSchema.exactOptional().openapi({
      description:
        'The managed configurations template for the app, saved from the managed configurations iframe. This field is ignored if managed_configuration is set.',
    }),
    minimumVersionCode: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The minimum version of the app that runs on the device. If set, the device attempts to update the app to at least this version code. If the app is not up-to-date, the device will contain a NonComplianceDetail with non_compliance_reason set to APP_NOT_UPDATED. The app must already be published to Google Play with a version code greater than or equal to this value. At most 20 apps may specify a minimum version code per policy.',
      }),
    packageName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The package name of the app. For example, com.google.android.youtube for the YouTube app.',
      }),
    permissionGrants: z
      .array(PermissionGrantSchema)
      .exactOptional()
      .openapi({
        description:
          'Explicit permission grants or denials for the app. These values override the default_permission_policy and permission_grants which apply to all apps.',
      }),
    workProfileWidgets: z
      .enum([
        'WORK_PROFILE_WIDGETS_UNSPECIFIED',
        'WORK_PROFILE_WIDGETS_ALLOWED',
        'WORK_PROFILE_WIDGETS_DISALLOWED',
      ])
      .exactOptional()
      .openapi({
        description:
          'Specifies whether the app installed in the work profile is allowed to add widgets to the home screen.',
      }),
  })
  .openapi({ description: 'Policy for an individual app.', required: [] })
  .openapi('ApplicationPolicy')

const ChoosePrivateKeyRuleSchema = z
  .object({
    packageNames: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The package names to which this rule applies. The hash of the signing certificate for each app is verified against the hash provided by Play. If no package names are specified, then the alias is provided to all apps that call KeyChain.choosePrivateKeyAlias (https://developer.android.com/reference/android/security/KeyChain#choosePrivateKeyAlias%28android.app.Activity,%20android.security.KeyChainAliasCallback,%20java.lang.String[],%20java.security.Principal[],%20java.lang.String,%20int,%20java.lang.String%29) or any overloads (but not without calling KeyChain.choosePrivateKeyAlias, even on Android 11 and above). Any app with the same Android UID as a package specified here will have access when they call KeyChain.choosePrivateKeyAlias.',
      }),
    privateKeyAlias: z
      .string()
      .exactOptional()
      .openapi({ description: 'The alias of the private key to be used.' }),
    urlPattern: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URL pattern to match against the URL of the request. If not set or empty, it matches all URLs. This uses the regular expression syntax of java.util.regex.Pattern.',
      }),
  })
  .openapi({
    description:
      "Controls apps' access to private keys. The rule determines which private key, if any, Android Device Policy grants to the specified app. Access is granted either when the app calls KeyChain.choosePrivateKeyAlias (https://developer.android.com/reference/android/security/KeyChain#choosePrivateKeyAlias%28android.app.Activity,%20android.security.KeyChainAliasCallback,%20java.lang.String[],%20java.security.Principal[],%20java.lang.String,%20int,%20java.lang.String%29) (or any overloads) to request a private key alias for a given URL, or for rules that are not URL-specific (that is, if urlPattern is not set, or set to the empty string or .*) on Android 11 and above, directly so that the app can call KeyChain.getPrivateKey (https://developer.android.com/reference/android/security/KeyChain#getPrivateKey%28android.content.Context,%20java.lang.String%29), without first having to call KeyChain.choosePrivateKeyAlias.When an app calls KeyChain.choosePrivateKeyAlias if more than one choosePrivateKeyRules matches, the last matching rule defines which key alias to return.",
    required: [],
  })
  .openapi('ChoosePrivateKeyRule')

const ApiLevelConditionSchema = z
  .object({
    minApiLevel: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "The minimum desired Android Framework API level. If the device doesn't meet the minimum requirement, this condition is satisfied. Must be greater than zero.",
      }),
  })
  .openapi({
    description:
      "A compliance rule condition which is satisfied if the Android Framework API level on the device doesn't meet a minimum requirement. There can only be one rule with this type of condition per policy.",
    required: [],
  })
  .openapi('ApiLevelCondition')

const NonComplianceDetailConditionSchema = z
  .object({
    nonComplianceReason: z
      .enum([
        'NON_COMPLIANCE_REASON_UNSPECIFIED',
        'API_LEVEL',
        'MANAGEMENT_MODE',
        'USER_ACTION',
        'INVALID_VALUE',
        'APP_NOT_INSTALLED',
        'UNSUPPORTED',
        'APP_INSTALLED',
        'PENDING',
        'APP_INCOMPATIBLE',
        'APP_NOT_UPDATED',
      ])
      .exactOptional()
      .openapi({
        description:
          'The reason the device is not in compliance with the setting. If not set, then this condition matches any reason.',
      }),
    packageName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The package name of the app that's out of compliance. If not set, then this condition matches any package name.",
      }),
    settingName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the policy setting. This is the JSON field name of a top-level Policy field. If not set, then this condition matches any setting name.',
      }),
  })
  .openapi({
    description:
      'A compliance rule condition which is satisfied if there exists any matching NonComplianceDetail for the device. A NonComplianceDetail matches a NonComplianceDetailCondition if all the fields which are set within the NonComplianceDetailCondition match the corresponding NonComplianceDetail fields.',
    required: [],
  })
  .openapi('NonComplianceDetailCondition')

const ComplianceRuleSchema = z
  .object({
    apiLevelCondition: ApiLevelConditionSchema.exactOptional().openapi({
      description:
        "A condition which is satisfied if the Android Framework API level on the device doesn't meet a minimum requirement.",
    }),
    disableApps: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If set to true, the rule includes a mitigating action to disable apps so that the device is effectively disabled, but app data is preserved. If the device is running an app in locked task mode, the app will be closed and a UI showing the reason for non-compliance will be displayed.',
      }),
    nonComplianceDetailCondition: NonComplianceDetailConditionSchema.exactOptional().openapi({
      description:
        'A condition which is satisfied if there exists any matching NonComplianceDetail for the device.',
    }),
    packageNamesToDisable: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'If set, the rule includes a mitigating action to disable apps specified in the list, but app data is preserved.',
      }),
  })
  .openapi({
    description:
      'A rule declaring which mitigating actions to take when a device is not compliant with its policy. For every rule, there is always an implicit mitigating action to set policy_compliant to false for the Device resource, and display a message on the device indicating that the device is not compliant with its policy. Other mitigating actions may optionally be taken as well, depending on the field values in the rule.',
    required: [],
  })
  .openapi('ComplianceRule')

const CrossProfilePoliciesSchema = z
  .object({
    crossProfileCopyPaste: z
      .enum([
        'CROSS_PROFILE_COPY_PASTE_UNSPECIFIED',
        'COPY_FROM_WORK_TO_PERSONAL_DISALLOWED',
        'CROSS_PROFILE_COPY_PASTE_ALLOWED',
      ])
      .exactOptional()
      .openapi({
        description:
          'Whether text copied from one profile (personal or work) can be pasted in the other profile.',
      }),
    crossProfileDataSharing: z
      .enum([
        'CROSS_PROFILE_DATA_SHARING_UNSPECIFIED',
        'CROSS_PROFILE_DATA_SHARING_DISALLOWED',
        'DATA_SHARING_FROM_WORK_TO_PERSONAL_DISALLOWED',
        'CROSS_PROFILE_DATA_SHARING_ALLOWED',
      ])
      .exactOptional()
      .openapi({
        description:
          'Whether data from one profile (personal or work) can be shared with apps in the other profile. Specifically controls simple data sharing via intents. Management of other cross-profile communication channels, such as contact search, copy/paste, or connected work & personal apps, are configured separately.',
      }),
    showWorkContactsInPersonalProfile: z
      .enum([
        'SHOW_WORK_CONTACTS_IN_PERSONAL_PROFILE_UNSPECIFIED',
        'SHOW_WORK_CONTACTS_IN_PERSONAL_PROFILE_DISALLOWED',
        'SHOW_WORK_CONTACTS_IN_PERSONAL_PROFILE_ALLOWED',
      ])
      .exactOptional()
      .openapi({
        description:
          'Whether contacts stored in the work profile can be shown in personal profile contact searches and incoming calls.',
      }),
    workProfileWidgetsDefault: z
      .enum([
        'WORK_PROFILE_WIDGETS_DEFAULT_UNSPECIFIED',
        'WORK_PROFILE_WIDGETS_DEFAULT_ALLOWED',
        'WORK_PROFILE_WIDGETS_DEFAULT_DISALLOWED',
      ])
      .exactOptional()
      .openapi({
        description:
          'Specifies the default behaviour for work profile widgets. If the policy does not specify work_profile_widgets for a specific application, it will behave according to the value specified here.',
      }),
  })
  .openapi({ description: 'Cross-profile policies applied on the device.', required: [] })
  .openapi('CrossProfilePolicies')

const UserFacingMessageSchema = z
  .object({
    defaultMessage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The default message displayed if no localized message is specified or the user's locale doesn't match with any of the localized messages. A default message must be provided if any localized messages are provided.",
      }),
    localizedMessages: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'A map containing pairs, where locale is a well-formed BCP 47 language (https://www.w3.org/International/articles/language-tags/) code, such as en-US, es-ES, or fr.',
      }),
  })
  .openapi({
    description:
      'Provides a user-facing message with locale info. The maximum message length is 4096 characters.',
    required: [],
  })
  .openapi('UserFacingMessage')

const KioskCustomizationSchema = z
  .object({
    deviceSettings: z
      .enum(['DEVICE_SETTINGS_UNSPECIFIED', 'SETTINGS_ACCESS_ALLOWED', 'SETTINGS_ACCESS_BLOCKED'])
      .exactOptional()
      .openapi({ description: 'Specifies whether the Settings app is allowed in kiosk mode.' }),
    powerButtonActions: z
      .enum(['POWER_BUTTON_ACTIONS_UNSPECIFIED', 'POWER_BUTTON_AVAILABLE', 'POWER_BUTTON_BLOCKED'])
      .exactOptional()
      .openapi({
        description:
          'Sets the behavior of a device in kiosk mode when a user presses and holds (long-presses) the Power button.',
      }),
    statusBar: z
      .enum([
        'STATUS_BAR_UNSPECIFIED',
        'NOTIFICATIONS_AND_SYSTEM_INFO_ENABLED',
        'NOTIFICATIONS_AND_SYSTEM_INFO_DISABLED',
        'SYSTEM_INFO_ONLY',
      ])
      .exactOptional()
      .openapi({
        description: 'Specifies whether system info and notifications are disabled in kiosk mode.',
      }),
    systemErrorWarnings: z
      .enum([
        'SYSTEM_ERROR_WARNINGS_UNSPECIFIED',
        'ERROR_AND_WARNINGS_ENABLED',
        'ERROR_AND_WARNINGS_MUTED',
      ])
      .exactOptional()
      .openapi({
        description:
          'Specifies whether system error dialogs for crashed or unresponsive apps are blocked in kiosk mode. When blocked, the system will force-stop the app as if the user chooses the "close app" option on the UI.',
      }),
    systemNavigation: z
      .enum([
        'SYSTEM_NAVIGATION_UNSPECIFIED',
        'NAVIGATION_ENABLED',
        'NAVIGATION_DISABLED',
        'HOME_BUTTON_ONLY',
      ])
      .exactOptional()
      .openapi({
        description:
          'Specifies which navigation features are enabled (e.g. Home, Overview buttons) in kiosk mode.',
      }),
  })
  .openapi({
    description:
      'Settings controlling the behavior of a device in kiosk mode. To enable kiosk mode, set kioskCustomLauncherEnabled to true or specify an app in the policy with installType KIOSK.',
    required: [],
  })
  .openapi('KioskCustomization')

const ContentProviderEndpointSchema = z
  .object({
    packageName: z
      .string()
      .exactOptional()
      .openapi({ description: 'This feature is not generally available.' }),
    signingCertsSha256: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Required. This feature is not generally available.' }),
    uri: z
      .string()
      .exactOptional()
      .openapi({ description: 'This feature is not generally available.' }),
  })
  .openapi({ description: 'This feature is not generally available.', required: [] })
  .openapi('ContentProviderEndpoint')

const OncCertificateProviderSchema = z
  .object({
    certificateReferences: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'This feature is not generally available.' }),
    contentProviderEndpoint: ContentProviderEndpointSchema.exactOptional().openapi({
      description: 'This feature is not generally available.',
    }),
  })
  .openapi({ description: 'This feature is not generally available.', required: [] })
  .openapi('OncCertificateProvider')

const PasswordRequirementsSchema = z
  .object({
    maximumFailedPasswordsForWipe: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number of incorrect device-unlock passwords that can be entered before a device is wiped. A value of 0 means there is no restriction.',
      }),
    passwordExpirationTimeout: z
      .string()
      .exactOptional()
      .openapi({ description: 'Password expiration timeout.' }),
    passwordHistoryLength: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "The length of the password history. After setting this field, the user won't be able to enter a new password that is the same as any password in the history. A value of 0 means there is no restriction.",
      }),
    passwordMinimumLength: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The minimum allowed password length. A value of 0 means there is no restriction. Only enforced when password_quality is NUMERIC, NUMERIC_COMPLEX, ALPHABETIC, ALPHANUMERIC, or COMPLEX.',
      }),
    passwordMinimumLetters: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Minimum number of letters required in the password. Only enforced when password_quality is COMPLEX.',
      }),
    passwordMinimumLowerCase: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Minimum number of lower case letters required in the password. Only enforced when password_quality is COMPLEX.',
      }),
    passwordMinimumNonLetter: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Minimum number of non-letter characters (numerical digits or symbols) required in the password. Only enforced when password_quality is COMPLEX.',
      }),
    passwordMinimumNumeric: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Minimum number of numerical digits required in the password. Only enforced when password_quality is COMPLEX.',
      }),
    passwordMinimumSymbols: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Minimum number of symbols required in the password. Only enforced when password_quality is COMPLEX.',
      }),
    passwordMinimumUpperCase: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Minimum number of upper case letters required in the password. Only enforced when password_quality is COMPLEX.',
      }),
    passwordQuality: z
      .enum([
        'PASSWORD_QUALITY_UNSPECIFIED',
        'BIOMETRIC_WEAK',
        'SOMETHING',
        'NUMERIC',
        'NUMERIC_COMPLEX',
        'ALPHABETIC',
        'ALPHANUMERIC',
        'COMPLEX',
        'COMPLEXITY_LOW',
        'COMPLEXITY_MEDIUM',
        'COMPLEXITY_HIGH',
      ])
      .exactOptional()
      .openapi({ description: 'The required password quality.' }),
    passwordScope: z
      .enum(['SCOPE_UNSPECIFIED', 'SCOPE_DEVICE', 'SCOPE_PROFILE'])
      .exactOptional()
      .openapi({ description: 'The scope that the password requirement applies to.' }),
    requirePasswordUnlock: z
      .enum([
        'REQUIRE_PASSWORD_UNLOCK_UNSPECIFIED',
        'USE_DEFAULT_DEVICE_TIMEOUT',
        'REQUIRE_EVERY_DAY',
      ])
      .exactOptional()
      .openapi({
        description:
          'The length of time after a device or work profile is unlocked using a strong form of authentication (password, PIN, pattern) that it can be unlocked using any other authentication method (e.g. fingerprint, trust agents, face). After the specified time period elapses, only strong forms of authentication can be used to unlock the device or work profile.',
      }),
    unifiedLockSettings: z
      .enum([
        'UNIFIED_LOCK_SETTINGS_UNSPECIFIED',
        'ALLOW_UNIFIED_WORK_AND_PERSONAL_LOCK',
        'REQUIRE_SEPARATE_WORK_LOCK',
      ])
      .exactOptional()
      .openapi({
        description:
          'Controls whether a unified lock is allowed for the device and the work profile, on devices running Android 9 and above with a work profile. This can be set only if password_scope is set to SCOPE_PROFILE, the policy will be rejected otherwise. If user has not set a separate work lock and this field is set to REQUIRE_SEPARATE_WORK_LOCK, a NonComplianceDetail is reported with nonComplianceReason set to USER_ACTION.',
      }),
  })
  .openapi({ description: 'Requirements for the password used to unlock a device.', required: [] })
  .openapi('PasswordRequirements')

const PackageNameListSchema = z
  .object({
    packageNames: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A list of package names.' }),
  })
  .openapi({ description: 'A list of package names.', required: [] })
  .openapi('PackageNameList')

const PersistentPreferredActivitySchema = z
  .object({
    actions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "The intent actions to match in the filter. If any actions are included in the filter, then an intent's action must be one of those values for it to match. If no actions are included, the intent action is ignored.",
      }),
    categories: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The intent categories to match in the filter. An intent includes the categories that it requires, all of which must be included in the filter in order to match. In other words, adding a category to the filter has no impact on matching unless that category is specified in the intent.',
      }),
    receiverActivity: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The activity that should be the default intent handler. This should be an Android component name, e.g. com.android.enterprise.app/.MainActivity. Alternatively, the value may be the package name of an app, which causes Android Device Policy to choose an appropriate activity from the app to handle the intent.',
      }),
  })
  .openapi({
    description:
      'A default activity for handling intents that match a particular intent filter. Note: To set up a kiosk, use InstallType to KIOSK rather than use persistent preferred activities.',
    required: [],
  })
  .openapi('PersistentPreferredActivity')

const PersonalApplicationPolicySchema = z
  .object({
    installType: z
      .enum(['INSTALL_TYPE_UNSPECIFIED', 'BLOCKED', 'AVAILABLE'])
      .exactOptional()
      .openapi({ description: 'The type of installation to perform.' }),
    packageName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The package name of the application.' }),
  })
  .openapi({
    description:
      'Policies for apps in the personal profile of a company-owned device with a work profile.',
    required: [],
  })
  .openapi('PersonalApplicationPolicy')

const PersonalUsagePoliciesSchema = z
  .object({
    accountTypesWithManagementDisabled: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: "Account types that can't be managed by the user." }),
    cameraDisabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true, the camera is disabled on the personal profile.' }),
    maxDaysWithWorkOff: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Controls how long the work profile can stay off. The duration must be at least 3 days.',
      }),
    personalApplications: z
      .array(PersonalApplicationPolicySchema)
      .exactOptional()
      .openapi({ description: 'Policy applied to applications in the personal profile.' }),
    personalPlayStoreMode: z
      .enum(['PLAY_STORE_MODE_UNSPECIFIED', 'BLACKLIST', 'BLOCKLIST', 'ALLOWLIST'])
      .exactOptional()
      .openapi({
        description:
          'Used together with personalApplications to control how apps in the personal profile are allowed or blocked.',
      }),
    screenCaptureDisabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true, screen capture is disabled for all users.' }),
  })
  .openapi({
    description:
      'Policies controlling personal usage on a company-owned device with a work profile.',
    required: [],
  })
  .openapi('PersonalUsagePolicies')

const BlockActionSchema = z
  .object({
    blockAfterDays: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number of days the policy is non-compliant before the device or work profile is blocked. To block access immediately, set to 0. blockAfterDays must be less than wipeAfterDays.',
      }),
    blockScope: z
      .enum(['BLOCK_SCOPE_UNSPECIFIED', 'BLOCK_SCOPE_WORK_PROFILE', 'BLOCK_SCOPE_DEVICE'])
      .exactOptional()
      .openapi({
        description:
          'Specifies the scope of this BlockAction. Only applicable to devices that are company-owned.',
      }),
  })
  .openapi({
    description:
      'An action to block access to apps and data on a fully managed device or in a work profile. This action also triggers a device or work profile to displays a user-facing notification with information (where possible) on how to correct the compliance issue. Note: wipeAction must also be specified.',
    required: [],
  })
  .openapi('BlockAction')

const WipeActionSchema = z
  .object({
    preserveFrp: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the factory-reset protection data is preserved on the device. This setting doesn’t apply to work profiles.',
      }),
    wipeAfterDays: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number of days the policy is non-compliant before the device or work profile is wiped. wipeAfterDays must be greater than blockAfterDays.',
      }),
  })
  .openapi({
    description:
      'An action to reset a company owned device or delete a work profile. Note: blockAction must also be specified.',
    required: [],
  })
  .openapi('WipeAction')

const PolicyEnforcementRuleSchema = z
  .object({
    blockAction: BlockActionSchema.exactOptional().openapi({
      description:
        'An action to block access to apps and data on a company owned device or in a work profile. This action also triggers a user-facing notification with information (where possible) on how to correct the compliance issue. Note: wipeAction must also be specified.',
    }),
    settingName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The top-level policy to enforce. For example, applications or passwordPolicies.',
      }),
    wipeAction: WipeActionSchema.exactOptional().openapi({
      description:
        'An action to reset a company owned device or delete a work profile. Note: blockAction must also be specified.',
    }),
  })
  .openapi({
    description:
      'A rule that defines the actions to take if a device or work profile is not compliant with the policy specified in settingName.',
    required: [],
  })
  .openapi('PolicyEnforcementRule')

const ProxyInfoSchema = z
  .object({
    excludedHosts: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'For a direct proxy, the hosts for which the proxy is bypassed. The host names may contain wildcards such as *.example.com.',
      }),
    host: z.string().exactOptional().openapi({ description: 'The host of the direct proxy.' }),
    pacUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URI of the PAC script used to configure the proxy.' }),
    port: z.int32().exactOptional().openapi({ description: 'The port of the direct proxy.' }),
  })
  .openapi({
    description:
      'Configuration info for an HTTP proxy. For a direct proxy, set the host, port, and excluded_hosts fields. For a PAC script proxy, set the pac_uri field.',
    required: [],
  })
  .openapi('ProxyInfo')

const LaunchAppActionSchema = z
  .object({
    packageName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Package name of app to be launched' }),
  })
  .openapi({ description: 'An action to launch an app.', required: [] })
  .openapi('LaunchAppAction')

const SetupActionSchema = z
  .object({
    description: UserFacingMessageSchema.exactOptional().openapi({
      description: 'Description of this action.',
    }),
    launchApp: LaunchAppActionSchema.exactOptional().openapi({
      description:
        'An action to launch an app. The app will be launched with an intent containing an extra with key com.google.android.apps.work.clouddpc.EXTRA_LAUNCHED_AS_SETUP_ACTION set to the boolean value true to indicate that this is a setup action flow. If SetupAction references an app, the corresponding installType in the application policy must be set as REQUIRED_FOR_SETUP or said setup will fail.',
    }),
    title: UserFacingMessageSchema.exactOptional().openapi({
      description: 'Title of this action.',
    }),
  })
  .openapi({ description: 'An action executed during setup.', required: [] })
  .openapi('SetupAction')

const ApplicationReportingSettingsSchema = z
  .object({
    includeRemovedApps: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether removed apps are included in application reports.' }),
  })
  .openapi({
    description: 'Settings controlling the behavior of application reports.',
    required: [],
  })
  .openapi('ApplicationReportingSettings')

const StatusReportingSettingsSchema = z
  .object({
    applicationReportingSettings: ApplicationReportingSettingsSchema.exactOptional().openapi({
      description:
        'Application reporting settings. Only applicable if application_reports_enabled is true.',
    }),
    applicationReportsEnabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether app reports are enabled.' }),
    commonCriteriaModeEnabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether Common Criteria Mode reporting is enabled.' }),
    deviceSettingsEnabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether device settings reporting is enabled.' }),
    displayInfoEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether displays reporting is enabled. Report data is not available for personally owned devices with work profiles.',
      }),
    hardwareStatusEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether hardware status reporting is enabled. Report data is not available for personally owned devices with work profiles.',
      }),
    memoryInfoEnabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether memory event reporting is enabled.' }),
    networkInfoEnabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether network info reporting is enabled.' }),
    powerManagementEventsEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether power management event reporting is enabled. Report data is not available for personally owned devices with work profiles.',
      }),
    softwareInfoEnabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether software info reporting is enabled.' }),
    systemPropertiesEnabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether system properties reporting is enabled.' }),
  })
  .openapi({ description: 'Settings controlling the behavior of status reports.', required: [] })
  .openapi('StatusReportingSettings')

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
      'Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: A full date, with non-zero year, month, and day values. A month and day, with a zero year (for example, an anniversary). A year on its own, with a zero month and a zero day. A year and month, with a zero day (for example, a credit card expiration date).Related types: google.type.TimeOfDay google.type.DateTime google.protobuf.Timestamp',
    required: [],
  })
  .openapi('Date')

const FreezePeriodSchema = z
  .object({
    endDate: DateSchema.exactOptional().openapi({
      description:
        'The end date (inclusive) of the freeze period. Must be no later than 90 days from the start date. If the end date is earlier than the start date, the freeze period is considered wrapping year-end. Note: year must not be set. For example, {"month": 1,"date": 30}.',
    }),
    startDate: DateSchema.exactOptional().openapi({
      description:
        'The start date (inclusive) of the freeze period. Note: year must not be set. For example, {"month": 1,"date": 30}.',
    }),
  })
  .openapi({
    description:
      'A system freeze period. When a device’s clock is within the freeze period, all incoming system updates (including security patches) are blocked and won’t be installed. When a device is outside the freeze period, normal update behavior applies. Leap years are ignored in freeze period calculations, in particular: * If Feb. 29th is set as the start or end date of a freeze period, the freeze period will start or end on Feb. 28th instead. * When a device’s system clock reads Feb. 29th, it’s treated as Feb. 28th. * When calculating the number of days in a freeze period or the time between two freeze periods, Feb. 29th is ignored and not counted as a day.Note: For Freeze Periods to take effect, SystemUpdateType cannot be specified as SYSTEM_UPDATE_TYPE_UNSPECIFIED, because freeze periods require a defined policy to be specified.',
    required: [],
  })
  .openapi('FreezePeriod')

const SystemUpdateSchema = z
  .object({
    endMinutes: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "If the type is WINDOWED, the end of the maintenance window, measured as the number of minutes after midnight in device's local time. This value must be between 0 and 1439, inclusive. If this value is less than start_minutes, then the maintenance window spans midnight. If the maintenance window specified is smaller than 30 minutes, the actual window is extended to 30 minutes beyond the start time.",
      }),
    freezePeriods: z
      .array(FreezePeriodSchema)
      .exactOptional()
      .openapi({
        description:
          'An annually repeating time period in which over-the-air (OTA) system updates are postponed to freeze the OS version running on a device. To prevent freezing the device indefinitely, each freeze period must be separated by at least 60 days.',
      }),
    startMinutes: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "If the type is WINDOWED, the start of the maintenance window, measured as the number of minutes after midnight in the device's local time. This value must be between 0 and 1439, inclusive.",
      }),
    type: z
      .enum(['SYSTEM_UPDATE_TYPE_UNSPECIFIED', 'AUTOMATIC', 'WINDOWED', 'POSTPONE'])
      .exactOptional()
      .openapi({ description: 'The type of system update to configure.' }),
  })
  .openapi({ description: 'Configuration for managing system updates', required: [] })
  .openapi('SystemUpdate')

const UsageLogSchema = z
  .object({
    enabledLogTypes: z
      .array(z.enum(['LOG_TYPE_UNSPECIFIED', 'SECURITY_LOGS', 'NETWORK_ACTIVITY_LOGS']))
      .exactOptional()
      .openapi({
        description:
          'Specifies which log types are enabled. Note that users will receive on-device messaging when usage logging is enabled.',
      }),
    uploadOnCellularAllowed: z
      .array(z.enum(['LOG_TYPE_UNSPECIFIED', 'SECURITY_LOGS', 'NETWORK_ACTIVITY_LOGS']))
      .exactOptional()
      .openapi({
        description:
          'Specifies which of the enabled log types can be uploaded over mobile data. By default logs are queued for upload when the device connects to WiFi.',
      }),
  })
  .openapi({
    description:
      'Controls types of device activity logs collected from the device and reported via Pub/Sub notification (https://developers.google.com/android/management/notifications).',
    required: [],
  })
  .openapi('UsageLog')

type PolicyType = {
  accountTypesWithManagementDisabled?: string[]
  addUserDisabled?: boolean
  adjustVolumeDisabled?: boolean
  advancedSecurityOverrides?: z.infer<typeof AdvancedSecurityOverridesSchema>
  alwaysOnVpnPackage?: z.infer<typeof AlwaysOnVpnPackageSchema>
  androidDevicePolicyTracks?: ('APP_TRACK_UNSPECIFIED' | 'PRODUCTION' | 'BETA')[]
  appAutoUpdatePolicy?:
    | 'APP_AUTO_UPDATE_POLICY_UNSPECIFIED'
    | 'CHOICE_TO_THE_USER'
    | 'NEVER'
    | 'WIFI_ONLY'
    | 'ALWAYS'
  applications?: z.infer<typeof ApplicationPolicySchema>[]
  autoDateAndTimeZone?:
    | 'AUTO_DATE_AND_TIME_ZONE_UNSPECIFIED'
    | 'AUTO_DATE_AND_TIME_ZONE_USER_CHOICE'
    | 'AUTO_DATE_AND_TIME_ZONE_ENFORCED'
  autoTimeRequired?: boolean
  blockApplicationsEnabled?: boolean
  bluetoothConfigDisabled?: boolean
  bluetoothContactSharingDisabled?: boolean
  bluetoothDisabled?: boolean
  cameraAccess?:
    | 'CAMERA_ACCESS_UNSPECIFIED'
    | 'CAMERA_ACCESS_USER_CHOICE'
    | 'CAMERA_ACCESS_DISABLED'
    | 'CAMERA_ACCESS_ENFORCED'
  cameraDisabled?: boolean
  cellBroadcastsConfigDisabled?: boolean
  choosePrivateKeyRules?: z.infer<typeof ChoosePrivateKeyRuleSchema>[]
  complianceRules?: z.infer<typeof ComplianceRuleSchema>[]
  createWindowsDisabled?: boolean
  credentialsConfigDisabled?: boolean
  crossProfilePolicies?: z.infer<typeof CrossProfilePoliciesSchema>
  dataRoamingDisabled?: boolean
  debuggingFeaturesAllowed?: boolean
  defaultPermissionPolicy?: 'PERMISSION_POLICY_UNSPECIFIED' | 'PROMPT' | 'GRANT' | 'DENY'
  deviceOwnerLockScreenInfo?: z.infer<typeof UserFacingMessageSchema>
  encryptionPolicy?:
    | 'ENCRYPTION_POLICY_UNSPECIFIED'
    | 'ENABLED_WITHOUT_PASSWORD'
    | 'ENABLED_WITH_PASSWORD'
  ensureVerifyAppsEnabled?: boolean
  factoryResetDisabled?: boolean
  frpAdminEmails?: string[]
  funDisabled?: boolean
  installAppsDisabled?: boolean
  installUnknownSourcesAllowed?: boolean
  keyguardDisabled?: boolean
  keyguardDisabledFeatures?: (
    | 'KEYGUARD_DISABLED_FEATURE_UNSPECIFIED'
    | 'CAMERA'
    | 'NOTIFICATIONS'
    | 'UNREDACTED_NOTIFICATIONS'
    | 'TRUST_AGENTS'
    | 'DISABLE_FINGERPRINT'
    | 'DISABLE_REMOTE_INPUT'
    | 'FACE'
    | 'IRIS'
    | 'BIOMETRICS'
    | 'ALL_FEATURES'
  )[]
  kioskCustomLauncherEnabled?: boolean
  kioskCustomization?: z.infer<typeof KioskCustomizationSchema>
  locationMode?:
    | 'LOCATION_MODE_UNSPECIFIED'
    | 'HIGH_ACCURACY'
    | 'SENSORS_ONLY'
    | 'BATTERY_SAVING'
    | 'OFF'
    | 'LOCATION_USER_CHOICE'
    | 'LOCATION_ENFORCED'
    | 'LOCATION_DISABLED'
  longSupportMessage?: z.infer<typeof UserFacingMessageSchema>
  maximumTimeToLock?: string
  microphoneAccess?:
    | 'MICROPHONE_ACCESS_UNSPECIFIED'
    | 'MICROPHONE_ACCESS_USER_CHOICE'
    | 'MICROPHONE_ACCESS_DISABLED'
    | 'MICROPHONE_ACCESS_ENFORCED'
  minimumApiLevel?: number
  mobileNetworksConfigDisabled?: boolean
  modifyAccountsDisabled?: boolean
  mountPhysicalMediaDisabled?: boolean
  name?: string
  networkEscapeHatchEnabled?: boolean
  networkResetDisabled?: boolean
  oncCertificateProviders?: z.infer<typeof OncCertificateProviderSchema>[]
  openNetworkConfiguration?: { [key: string]: { [key: string]: unknown } }
  outgoingBeamDisabled?: boolean
  outgoingCallsDisabled?: boolean
  passwordPolicies?: z.infer<typeof PasswordRequirementsSchema>[]
  passwordRequirements?: z.infer<typeof PasswordRequirementsSchema>
  permissionGrants?: z.infer<typeof PermissionGrantSchema>[]
  permittedAccessibilityServices?: z.infer<typeof PackageNameListSchema>
  permittedInputMethods?: z.infer<typeof PackageNameListSchema>
  persistentPreferredActivities?: z.infer<typeof PersistentPreferredActivitySchema>[]
  personalUsagePolicies?: z.infer<typeof PersonalUsagePoliciesSchema>
  playStoreMode?: 'PLAY_STORE_MODE_UNSPECIFIED' | 'WHITELIST' | 'BLACKLIST'
  policyEnforcementRules?: z.infer<typeof PolicyEnforcementRuleSchema>[]
  preferentialNetworkService?:
    | 'PREFERENTIAL_NETWORK_SERVICE_UNSPECIFIED'
    | 'PREFERENTIAL_NETWORK_SERVICE_DISABLED'
    | 'PREFERENTIAL_NETWORK_SERVICE_ENABLED'
  privateKeySelectionEnabled?: boolean
  recommendedGlobalProxy?: z.infer<typeof ProxyInfoSchema>
  removeUserDisabled?: boolean
  safeBootDisabled?: boolean
  screenCaptureDisabled?: boolean
  setUserIconDisabled?: boolean
  setWallpaperDisabled?: boolean
  setupActions?: z.infer<typeof SetupActionSchema>[]
  shareLocationDisabled?: boolean
  shortSupportMessage?: z.infer<typeof UserFacingMessageSchema>
  skipFirstUseHintsEnabled?: boolean
  smsDisabled?: boolean
  statusBarDisabled?: boolean
  statusReportingSettings?: z.infer<typeof StatusReportingSettingsSchema>
  stayOnPluggedModes?: ('BATTERY_PLUGGED_MODE_UNSPECIFIED' | 'AC' | 'USB' | 'WIRELESS')[]
  systemUpdate?: z.infer<typeof SystemUpdateSchema>
  tetheringConfigDisabled?: boolean
  uninstallAppsDisabled?: boolean
  unmuteMicrophoneDisabled?: boolean
  usageLog?: z.infer<typeof UsageLogSchema>
  usbFileTransferDisabled?: boolean
  usbMassStorageEnabled?: boolean
  version?: string
  vpnConfigDisabled?: boolean
  wifiConfigDisabled?: boolean
  wifiConfigsLockdownEnabled?: boolean
}

const AdbShellCommandEventSchema = z
  .object({
    shellCmd: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Shell command that was issued over ADB via "adb shell command". Redacted to empty string on organization-owned managed profile devices.',
      }),
  })
  .openapi({
    description: 'A shell command was issued over ADB via “adb shell command”.',
    required: [],
  })
  .openapi('AdbShellCommandEvent')

const AdbShellInteractiveEventSchema = z
  .object({})
  .openapi({
    description: 'An ADB interactive shell was opened via “adb shell”. Intentionally empty.',
  })
  .openapi('AdbShellInteractiveEvent')

const AppProcessInfoSchema = z
  .object({
    apkSha256Hash: z
      .string()
      .exactOptional()
      .openapi({ description: 'SHA-256 hash of the base APK, in hexadecimal format.' }),
    packageNames: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Package names of all packages that are associated with the particular user ID. In most cases, this will be a single package name, the package that has been assigned that user ID. If multiple application share a UID then all packages sharing UID will be included.',
      }),
    pid: z.int32().exactOptional().openapi({ description: 'Process ID.' }),
    processName: z.string().exactOptional().openapi({ description: 'Process name.' }),
    seinfo: z.string().exactOptional().openapi({ description: 'SELinux policy info.' }),
    startTime: z.string().exactOptional().openapi({ description: 'Process start time.' }),
    uid: z.int32().exactOptional().openapi({ description: 'UID of the package.' }),
  })
  .openapi({
    description:
      'Information about a process. It contains process name, start time, app Uid, app Pid, seinfo tag, hash of the base APK.',
    required: [],
  })
  .openapi('AppProcessInfo')

const AppProcessStartEventSchema = z
  .object({
    processInfo: AppProcessInfoSchema.exactOptional().openapi({
      description: 'Information about a process.',
    }),
  })
  .openapi({
    description:
      'An app process was started. This is available device-wide on fully managed devices and within the work profile on organization-owned devices with a work profile.',
    required: [],
  })
  .openapi('AppProcessStartEvent')

const AppTrackInfoSchema = z
  .object({
    trackAlias: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The track name associated with the trackId, set in the Play Console. The name is modifiable from Play Console.',
      }),
    trackId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unmodifiable unique track identifier, taken from the releaseTrackId in the URL of the Play Console page that displays the app’s track information.',
      }),
  })
  .openapi({ description: 'Id to name association of a app track.', required: [] })
  .openapi('AppTrackInfo')

const AppVersionSchema = z
  .object({
    production: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'If the value is True, it indicates that this version is a production track.',
      }),
    trackIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Track identifiers that the app version is published in. This does not include the production track (see production instead).',
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

const ManagedPropertySchema: z.ZodType<ManagedPropertyType> = z
  .lazy(() =>
    z
      .object({
        defaultValue: z
          .any()
          .exactOptional()
          .openapi({
            description:
              "The default value of the property. BUNDLE_ARRAY properties don't have a default value.",
          }),
        description: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'A longer description of the property, providing more detail of what it affects. Localized.',
          }),
        entries: z
          .array(ManagedPropertyEntrySchema)
          .exactOptional()
          .openapi({
            description: 'For CHOICE or MULTISELECT properties, the list of possible entries.',
          }),
        key: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The unique key that the app uses to identify the property, e.g. "com.google.android.gm.fieldname".',
          }),
        nestedProperties: z
          .array(ManagedPropertySchema)
          .exactOptional()
          .openapi({
            description:
              'For BUNDLE_ARRAY properties, the list of nested properties. A BUNDLE_ARRAY property is at most two levels deep.',
          }),
        title: z
          .string()
          .exactOptional()
          .openapi({ description: 'The name of the property. Localized.' }),
        type: z
          .enum([
            'MANAGED_PROPERTY_TYPE_UNSPECIFIED',
            'BOOL',
            'STRING',
            'INTEGER',
            'CHOICE',
            'MULTISELECT',
            'HIDDEN',
            'BUNDLE',
            'BUNDLE_ARRAY',
          ])
          .exactOptional()
          .openapi({ description: 'The type of the property.' }),
      })
      .openapi({ description: 'Managed property.', required: [] }),
  )
  .openapi('ManagedProperty')

const ApplicationPermissionSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A longer description of the permission, providing more detail on what it affects. Localized.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the permission. Localized.' }),
    permissionId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An opaque string uniquely identifying the permission. Not localized.',
      }),
  })
  .openapi({ description: 'A permission required by the app.', required: [] })
  .openapi('ApplicationPermission')

const ApplicationSchema = z
  .object({
    appPricing: z
      .enum(['APP_PRICING_UNSPECIFIED', 'FREE', 'FREE_WITH_IN_APP_PURCHASE', 'PAID'])
      .exactOptional()
      .openapi({
        description:
          'Whether this app is free, free with in-app purchases, or paid. If the pricing is unspecified, this means the app is not generally available anymore (even though it might still be available to people who own it).',
      }),
    appTracks: z
      .array(AppTrackInfoSchema)
      .exactOptional()
      .openapi({ description: 'Application tracks visible to the enterprise.' }),
    appVersions: z
      .array(AppVersionSchema)
      .exactOptional()
      .openapi({ description: 'Versions currently available for this app.' }),
    author: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the author of the apps (for example, the app developer).',
      }),
    availableCountries: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'The countries which this app is available in as per ISO 3166-1 alpha-2.',
      }),
    category: z
      .string()
      .exactOptional()
      .openapi({ description: 'The app category (e.g. RACING, SOCIAL, etc.)' }),
    contentRating: z
      .enum([
        'CONTENT_RATING_UNSPECIFIED',
        'THREE_YEARS',
        'SEVEN_YEARS',
        'TWELVE_YEARS',
        'SIXTEEN_YEARS',
        'EIGHTEEN_YEARS',
      ])
      .exactOptional()
      .openapi({ description: 'The content rating for this app.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The localized promotional description, if available.' }),
    distributionChannel: z
      .enum([
        'DISTRIBUTION_CHANNEL_UNSPECIFIED',
        'PUBLIC_GOOGLE_HOSTED',
        'PRIVATE_GOOGLE_HOSTED',
        'PRIVATE_SELF_HOSTED',
      ])
      .exactOptional()
      .openapi({ description: 'How and to whom the package is made available.' }),
    features: z
      .array(z.enum(['APP_FEATURE_UNSPECIFIED', 'VPN_APP']))
      .exactOptional()
      .openapi({ description: 'Noteworthy features (if any) of this app.' }),
    fullDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'Full app description, if available.' }),
    iconUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A link to an image that can be used as an icon for the app. This image is suitable for use up to a pixel size of 512 x 512.',
      }),
    managedProperties: z
      .array(ManagedPropertySchema)
      .exactOptional()
      .openapi({
        description: 'The set of managed properties available to be pre-configured for the app.',
      }),
    minAndroidSdkVersion: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The minimum Android SDK necessary to run the app.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the app in the form enterprises/{enterprise}/applications/{package_name}.',
      }),
    permissions: z
      .array(ApplicationPermissionSchema)
      .exactOptional()
      .openapi({ description: 'The permissions required by the app.' }),
    playStoreUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'A link to the (consumer) Google Play details page for the app.' }),
    recentChanges: z
      .string()
      .exactOptional()
      .openapi({ description: 'A localised description of the recent changes made to the app.' }),
    screenshotUrls: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A list of screenshot links representing the app.' }),
    smallIconUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A link to a smaller image that can be used as an icon for the app. This image is suitable for use up to a pixel size of 128 x 128.',
      }),
    title: z.string().exactOptional().openapi({ description: 'The title of the app. Localized.' }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The approximate time (within 7 days) the app was last published.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Information about an app.', required: [] })
  .openapi('Application')

const ApplicationEventSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The creation time of the event.' }),
    eventType: z
      .enum([
        'APPLICATION_EVENT_TYPE_UNSPECIFIED',
        'INSTALLED',
        'CHANGED',
        'DATA_CLEARED',
        'REMOVED',
        'REPLACED',
        'RESTARTED',
        'PINNED',
        'UNPINNED',
      ])
      .exactOptional()
      .openapi({ description: 'App event type.' }),
  })
  .openapi({ description: 'An app-related event.', required: [] })
  .openapi('ApplicationEvent')

const KeyedAppStateSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The creation time of the app state on the device.' }),
    data: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optionally, a machine-readable value to be read by the EMM. For example, setting values that the admin can choose to query against in the EMM console (e.g. “notify me if the battery_warning data < 10”).',
      }),
    key: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The key for the app state. Acts as a point of reference for what the app is providing state for. For example, when providing managed configuration feedback, this key could be the managed configuration key.',
      }),
    lastUpdateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time the app state was most recently updated.' }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optionally, a free-form message string to explain the app state. If the state was triggered by a particular value (e.g. a managed configuration value), it should be included in the message.',
      }),
    severity: z
      .enum(['SEVERITY_UNSPECIFIED', 'INFO', 'ERROR'])
      .exactOptional()
      .openapi({ description: 'The severity of the app state.' }),
  })
  .openapi({ description: 'Keyed app state reported by the app.', required: [] })
  .openapi('KeyedAppState')

const ApplicationReportSchema = z
  .object({
    applicationSource: z
      .enum([
        'APPLICATION_SOURCE_UNSPECIFIED',
        'SYSTEM_APP_FACTORY_VERSION',
        'SYSTEM_APP_UPDATED_VERSION',
        'INSTALLED_FROM_PLAY_STORE',
      ])
      .exactOptional()
      .openapi({ description: 'The source of the package.' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The display name of the app.' }),
    events: z
      .array(ApplicationEventSchema)
      .exactOptional()
      .openapi({ description: 'The list of app events which have occurred in the last 30 hours.' }),
    installerPackageName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The package name of the app that installed this app.' }),
    keyedAppStates: z
      .array(KeyedAppStateSchema)
      .exactOptional()
      .openapi({ description: 'List of keyed app states reported by the app.' }),
    packageName: z.string().exactOptional().openapi({ description: 'Package name of the app.' }),
    packageSha256Hash: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The SHA-256 hash of the app's APK file, which can be used to verify the app hasn't been modified. Each byte of the hash value is represented as a two-digit hexadecimal number.",
      }),
    signingKeyCertFingerprints: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The SHA-1 hash of each android.content.pm.Signature (https://developer.android.com/reference/android/content/pm/Signature.html) associated with the app package. Each byte of each hash value is represented as a two-digit hexadecimal number.',
      }),
    state: z
      .enum(['APPLICATION_STATE_UNSPECIFIED', 'REMOVED', 'INSTALLED'])
      .exactOptional()
      .openapi({ description: 'Application state.' }),
    versionCode: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The app version code, which can be used to determine whether one version is more recent than another.',
      }),
    versionName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The app version as displayed to the user.' }),
  })
  .openapi({ description: 'Information reported about an installed app.', required: [] })
  .openapi('ApplicationReport')

const CertAuthorityInstalledEventSchema = z
  .object({
    certificate: z.string().exactOptional().openapi({ description: 'Subject of the certificate.' }),
    success: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the installation event succeeded.' }),
    userId: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The user in which the certificate install event happened. Only available for devices running Android 11 and above.',
      }),
  })
  .openapi({
    description:
      "A new root certificate was installed into the system's trusted credential storage. This is available device-wide on fully managed devices and within the work profile on organization-owned devices with a work profile.",
    required: [],
  })
  .openapi('CertAuthorityInstalledEvent')

const CertAuthorityRemovedEventSchema = z
  .object({
    certificate: z.string().exactOptional().openapi({ description: 'Subject of the certificate.' }),
    success: z.boolean().exactOptional().openapi({ description: 'Whether the removal succeeded.' }),
    userId: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The user in which the certificate removal event occurred. Only available for devices running Android 11 and above.',
      }),
  })
  .openapi({
    description:
      "A root certificate was removed from the system's trusted credential storage. This is available device-wide on fully managed devices and within the work profile on organization-owned devices with a work profile.",
    required: [],
  })
  .openapi('CertAuthorityRemovedEvent')

const CertValidationFailureEventSchema = z
  .object({
    failureReason: z
      .string()
      .exactOptional()
      .openapi({ description: 'The reason why certification validation failed.' }),
  })
  .openapi({
    description:
      'An X.509v3 certificate failed to validate, currently this validation is performed on the Wi-FI access point and failure may be due to a mismatch upon server certificate validation. However it may in the future include other validation events of an X.509v3 certificate.',
    required: [],
  })
  .openapi('CertValidationFailureEvent')

const ConnectEventSchema = z
  .object({
    destinationIpAddress: z
      .string()
      .exactOptional()
      .openapi({ description: 'The destination IP address of the connect call.' }),
    destinationPort: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The destination port of the connect call.' }),
    packageName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The package name of the UID that performed the connect call.' }),
  })
  .openapi({
    description: 'A TCP connect event was initiated through the standard network stack.',
    required: [],
  })
  .openapi('ConnectEvent')

const CryptoSelfTestCompletedEventSchema = z
  .object({
    success: z.boolean().exactOptional().openapi({ description: 'Whether the test succeeded.' }),
  })
  .openapi({
    description:
      'Validates whether Android’s built-in cryptographic library (BoringSSL) is valid. Should always succeed on device boot, if it fails, the device should be considered untrusted.',
    required: [],
  })
  .openapi('CryptoSelfTestCompletedEvent')

const DnsEventSchema = z
  .object({
    hostname: z
      .string()
      .exactOptional()
      .openapi({ description: 'The hostname that was looked up.' }),
    ipAddresses: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The (possibly truncated) list of the IP addresses returned for DNS lookup (max 10 IPv4 or IPv6 addresses).',
      }),
    packageName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The package name of the UID that performed the DNS lookup.' }),
    totalIpAddressesReturned: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The number of IP addresses returned from the DNS lookup event. May be higher than the amount of ip_addresses if there were too many addresses to log.',
      }),
  })
  .openapi({
    description: 'A DNS lookup event was initiated through the standard network stack.',
    required: [],
  })
  .openapi('DnsEvent')

const FilePulledEventSchema = z
  .object({
    filePath: z
      .string()
      .exactOptional()
      .openapi({ description: 'The path of the file being pulled.' }),
  })
  .openapi({ description: 'A file was downloaded from the device.', required: [] })
  .openapi('FilePulledEvent')

const FilePushedEventSchema = z
  .object({
    filePath: z
      .string()
      .exactOptional()
      .openapi({ description: 'The path of the file being pushed.' }),
  })
  .openapi({ description: 'A file was uploaded onto the device.', required: [] })
  .openapi('FilePushedEvent')

const KeyDestructionEventSchema = z
  .object({
    applicationUid: z
      .int32()
      .exactOptional()
      .openapi({ description: 'UID of the application which owns the key.' }),
    keyAlias: z.string().exactOptional().openapi({ description: 'Alias of the key.' }),
    success: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the operation was successful.' }),
  })
  .openapi({
    description:
      'A cryptographic key including user installed, admin installed and system maintained private key is removed from the device either by the user or management. This is available device-wide on fully managed devices and within the work profile on organization-owned devices with a work profile.',
    required: [],
  })
  .openapi('KeyDestructionEvent')

const KeyGeneratedEventSchema = z
  .object({
    applicationUid: z
      .int32()
      .exactOptional()
      .openapi({ description: 'UID of the application which generated the key.' }),
    keyAlias: z.string().exactOptional().openapi({ description: 'Alias of the key.' }),
    success: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the operation was successful.' }),
  })
  .openapi({
    description:
      'A cryptographic key including user installed, admin installed and system maintained private key is installed on the device either by the user or management.This is available device-wide on fully managed devices and within the work profile on organization-owned devices with a work profile.',
    required: [],
  })
  .openapi('KeyGeneratedEvent')

const KeyImportEventSchema = z
  .object({
    applicationUid: z
      .int32()
      .exactOptional()
      .openapi({ description: 'UID of the application which imported the key' }),
    keyAlias: z.string().exactOptional().openapi({ description: 'Alias of the key.' }),
    success: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the operation was successful.' }),
  })
  .openapi({
    description:
      'A cryptographic key including user installed, admin installed and system maintained private key is imported on the device either by the user or management. This is available device-wide on fully managed devices and within the work profile on organization-owned devices with a work profile.',
    required: [],
  })
  .openapi('KeyImportEvent')

const KeyIntegrityViolationEventSchema = z
  .object({
    applicationUid: z
      .int32()
      .exactOptional()
      .openapi({ description: 'UID of the application which owns the key' }),
    keyAlias: z.string().exactOptional().openapi({ description: 'Alias of the key.' }),
  })
  .openapi({
    description:
      'A cryptographic key including user installed, admin installed and system maintained private key is determined to be corrupted due to storage corruption, hardware failure or some OS issue. This is available device-wide on fully managed devices and within the work profile on organization-owned devices with a work profile.',
    required: [],
  })
  .openapi('KeyIntegrityViolationEvent')

const KeyguardDismissAuthAttemptEventSchema = z
  .object({
    strongAuthMethodUsed: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether a strong form of authentication (password, PIN, or pattern) was used to unlock device.',
      }),
    success: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the unlock attempt was successful.' }),
  })
  .openapi({ description: 'An attempt was made to unlock the device.', required: [] })
  .openapi('KeyguardDismissAuthAttemptEvent')

const KeyguardDismissedEventSchema = z
  .object({})
  .openapi({ description: 'The keyguard was dismissed. Intentionally empty.' })
  .openapi('KeyguardDismissedEvent')

const KeyguardSecuredEventSchema = z
  .object({})
  .openapi({ description: 'The device was locked either by user or timeout. Intentionally empty.' })
  .openapi('KeyguardSecuredEvent')

const LogBufferSizeCriticalEventSchema = z
  .object({})
  .openapi({
    description:
      'The usageLog buffer on the device has reached 90% of its capacity, therefore older events may be dropped. Intentionally empty.',
  })
  .openapi('LogBufferSizeCriticalEvent')

const LoggingStartedEventSchema = z
  .object({})
  .openapi({ description: 'usageLog policy has been enabled. Intentionally empty.' })
  .openapi('LoggingStartedEvent')

const LoggingStoppedEventSchema = z
  .object({})
  .openapi({ description: 'usageLog policy has been disabled. Intentionally empty.' })
  .openapi('LoggingStoppedEvent')

const MediaMountEventSchema = z
  .object({
    mountPoint: z.string().exactOptional().openapi({ description: 'Mount point.' }),
    volumeLabel: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Volume label. Redacted to empty string on organization-owned managed profile devices.',
      }),
  })
  .openapi({ description: 'Removable media was mounted.', required: [] })
  .openapi('MediaMountEvent')

const MediaUnmountEventSchema = z
  .object({
    mountPoint: z.string().exactOptional().openapi({ description: 'Mount point.' }),
    volumeLabel: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Volume label. Redacted to empty string on organization-owned managed profile devices.',
      }),
  })
  .openapi({ description: 'Removable media was unmounted.', required: [] })
  .openapi('MediaUnmountEvent')

const OsShutdownEventSchema = z
  .object({})
  .openapi({ description: 'Device was shutdown. Intentionally empty.' })
  .openapi('OsShutdownEvent')

const OsStartupEventSchema = z
  .object({
    verifiedBootState: z
      .enum(['VERIFIED_BOOT_STATE_UNSPECIFIED', 'GREEN', 'YELLOW', 'ORANGE'])
      .exactOptional()
      .openapi({ description: 'Verified Boot state.' }),
    verityMode: z
      .enum(['DM_VERITY_MODE_UNSPECIFIED', 'ENFORCING', 'IO_ERROR', 'DISABLED'])
      .exactOptional()
      .openapi({ description: 'dm-verity mode.' }),
  })
  .openapi({ description: 'Device was started.', required: [] })
  .openapi('OsStartupEvent')

const RemoteLockEventSchema = z
  .object({
    adminPackageName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Package name of the admin app requesting the change.' }),
    adminUserId: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'User ID of the admin app from the which the change was requested.',
      }),
    targetUserId: z
      .int32()
      .exactOptional()
      .openapi({ description: 'User ID in which the change was requested in.' }),
  })
  .openapi({
    description: 'The device or profile has been remotely locked via the LOCK command.',
    required: [],
  })
  .openapi('RemoteLockEvent')

const WipeFailureEventSchema = z
  .object({})
  .openapi({
    description:
      'The work profile or company-owned device failed to wipe when requested. This could be user initiated or admin initiated e.g. delete was received. Intentionally empty.',
  })
  .openapi('WipeFailureEvent')

const UsageLogEventSchema = z
  .object({
    adbShellCommandEvent: AdbShellCommandEventSchema.exactOptional().openapi({
      description:
        'A shell command was issued over ADB via “adb shell command”. Part of SECURITY_LOGS.',
    }),
    adbShellInteractiveEvent: AdbShellInteractiveEventSchema.exactOptional().openapi({
      description: 'An ADB interactive shell was opened via “adb shell”. Part of SECURITY_LOGS.',
    }),
    appProcessStartEvent: AppProcessStartEventSchema.exactOptional().openapi({
      description: 'An app process was started. Part of SECURITY_LOGS.',
    }),
    certAuthorityInstalledEvent: CertAuthorityInstalledEventSchema.exactOptional().openapi({
      description:
        "A new root certificate was installed into the system's trusted credential storage. Part of SECURITY_LOGS.",
    }),
    certAuthorityRemovedEvent: CertAuthorityRemovedEventSchema.exactOptional().openapi({
      description:
        "A root certificate was removed from the system's trusted credential storage. Part of SECURITY_LOGS.",
    }),
    certValidationFailureEvent: CertValidationFailureEventSchema.exactOptional().openapi({
      description:
        'An X.509v3 certificate failed to validate, currently this validation is performed on the Wi-FI access point and failure may be due to a mismatch upon server certificate validation. However it may in the future include other validation events of an X.509v3 certificate. Part of SECURITY_LOGS.',
    }),
    connectEvent: ConnectEventSchema.exactOptional().openapi({
      description:
        'A TCP connect event was initiated through the standard network stack. Part of NETWORK_ACTIVITY_LOGS.',
    }),
    cryptoSelfTestCompletedEvent: CryptoSelfTestCompletedEventSchema.exactOptional().openapi({
      description:
        'Validates whether Android’s built-in cryptographic library (BoringSSL) is valid. Should always succeed on device boot, if it fails, the device should be considered untrusted. Part of SECURITY_LOGS.',
    }),
    dnsEvent: DnsEventSchema.exactOptional().openapi({
      description:
        'A DNS lookup event was initiated through the standard network stack. Part of NETWORK_ACTIVITY_LOGS.',
    }),
    eventId: z.string().exactOptional().openapi({ description: 'Unique id of the event.' }),
    eventTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Device timestamp when the event was logged.' }),
    eventType: z
      .enum([
        'EVENT_TYPE_UNSPECIFIED',
        'ADB_SHELL_COMMAND',
        'ADB_SHELL_INTERACTIVE',
        'APP_PROCESS_START',
        'KEYGUARD_DISMISSED',
        'KEYGUARD_DISMISS_AUTH_ATTEMPT',
        'KEYGUARD_SECURED',
        'FILE_PULLED',
        'FILE_PUSHED',
        'CERT_AUTHORITY_INSTALLED',
        'CERT_AUTHORITY_REMOVED',
        'CERT_VALIDATION_FAILURE',
        'CRYPTO_SELF_TEST_COMPLETED',
        'KEY_DESTRUCTION',
        'KEY_GENERATED',
        'KEY_IMPORT',
        'KEY_INTEGRITY_VIOLATION',
        'LOGGING_STARTED',
        'LOGGING_STOPPED',
        'LOG_BUFFER_SIZE_CRITICAL',
        'MEDIA_MOUNT',
        'MEDIA_UNMOUNT',
        'OS_SHUTDOWN',
        'OS_STARTUP',
        'REMOTE_LOCK',
        'WIPE_FAILURE',
        'CONNECT',
        'DNS',
      ])
      .exactOptional()
      .openapi({
        description:
          'The particular usage log event type that was reported on the device. Use this to determine which event field to access.',
      }),
    filePulledEvent: FilePulledEventSchema.exactOptional().openapi({
      description: 'A file was downloaded from the device. Part of SECURITY_LOGS.',
    }),
    filePushedEvent: FilePushedEventSchema.exactOptional().openapi({
      description: 'A file was uploaded onto the device. Part of SECURITY_LOGS.',
    }),
    keyDestructionEvent: KeyDestructionEventSchema.exactOptional().openapi({
      description:
        'A cryptographic key including user installed, admin installed and system maintained private key is removed from the device either by the user or management. Part of SECURITY_LOGS.',
    }),
    keyGeneratedEvent: KeyGeneratedEventSchema.exactOptional().openapi({
      description:
        'A cryptographic key including user installed, admin installed and system maintained private key is installed on the device either by the user or management. Part of SECURITY_LOGS.',
    }),
    keyImportEvent: KeyImportEventSchema.exactOptional().openapi({
      description:
        'A cryptographic key including user installed, admin installed and system maintained private key is imported on the device either by the user or management. Part of SECURITY_LOGS.',
    }),
    keyIntegrityViolationEvent: KeyIntegrityViolationEventSchema.exactOptional().openapi({
      description:
        'A cryptographic key including user installed, admin installed and system maintained private key is determined to be corrupted due to storage corruption, hardware failure or some OS issue. Part of SECURITY_LOGS.',
    }),
    keyguardDismissAuthAttemptEvent: KeyguardDismissAuthAttemptEventSchema.exactOptional().openapi({
      description: 'An attempt was made to unlock the device. Part of SECURITY_LOGS.',
    }),
    keyguardDismissedEvent: KeyguardDismissedEventSchema.exactOptional().openapi({
      description: 'The keyguard was dismissed. Part of SECURITY_LOGS.',
    }),
    keyguardSecuredEvent: KeyguardSecuredEventSchema.exactOptional().openapi({
      description: 'The device was locked either by user or timeout. Part of SECURITY_LOGS.',
    }),
    logBufferSizeCriticalEvent: LogBufferSizeCriticalEventSchema.exactOptional().openapi({
      description:
        'The audit log buffer has reached 90% of its capacity, therefore older events may be dropped. Part of SECURITY_LOGS.',
    }),
    loggingStartedEvent: LoggingStartedEventSchema.exactOptional().openapi({
      description: 'usageLog policy has been enabled. Part of SECURITY_LOGS.',
    }),
    loggingStoppedEvent: LoggingStoppedEventSchema.exactOptional().openapi({
      description: 'usageLog policy has been disabled. Part of SECURITY_LOGS.',
    }),
    mediaMountEvent: MediaMountEventSchema.exactOptional().openapi({
      description: 'Removable media was mounted. Part of SECURITY_LOGS.',
    }),
    mediaUnmountEvent: MediaUnmountEventSchema.exactOptional().openapi({
      description: 'Removable media was unmounted. Part of SECURITY_LOGS.',
    }),
    osShutdownEvent: OsShutdownEventSchema.exactOptional().openapi({
      description: 'Device was shutdown. Part of SECURITY_LOGS.',
    }),
    osStartupEvent: OsStartupEventSchema.exactOptional().openapi({
      description: 'Device was started. Part of SECURITY_LOGS.',
    }),
    remoteLockEvent: RemoteLockEventSchema.exactOptional().openapi({
      description:
        'The device or profile has been remotely locked via the LOCK command. Part of SECURITY_LOGS.',
    }),
    wipeFailureEvent: WipeFailureEventSchema.exactOptional().openapi({
      description:
        'The work profile or company-owned device failed to wipe when requested. This could be user initiated or admin initiated e.g. delete was received. Part of SECURITY_LOGS.',
    }),
  })
  .openapi({ description: 'An event logged on the device.', required: [] })
  .openapi('UsageLogEvent')

const BatchUsageLogEventsSchema = z
  .object({
    device: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the device in the form ‘enterprises/{enterpriseId}/devices/{deviceId}’',
      }),
    retrievalTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The device timestamp when the batch of events were collected from the device.',
      }),
    usageLogEvents: z
      .array(UsageLogEventSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of UsageLogEvent that were reported by the device, sorted chronologically by the event time.',
      }),
    user: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the user that owns this device in the form ‘enterprises/{enterpriseId}/users/{userId}’.',
      }),
  })
  .openapi({ description: 'Batched event logs of events from the device.', required: [] })
  .openapi('BatchUsageLogEvents')

const ClearAppsDataParamsSchema = z
  .object({
    packageNames: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The package names of the apps whose data will be cleared when the command is executed.',
      }),
  })
  .openapi({
    description:
      'Parameters associated with the CLEAR_APP_DATA command to clear the data of specified apps from the device.',
    required: [],
  })
  .openapi('ClearAppsDataParams')

const PerAppResultSchema = z
  .object({
    clearingResult: z
      .enum([
        'CLEARING_RESULT_UNSPECIFIED',
        'SUCCESS',
        'APP_NOT_FOUND',
        'APP_PROTECTED',
        'API_LEVEL',
      ])
      .exactOptional()
      .openapi({ description: 'The result of an attempt to clear the data of a single app.' }),
  })
  .openapi({
    description: 'The result of an attempt to clear the data of a single app.',
    required: [],
  })
  .openapi('PerAppResult')

const ClearAppsDataStatusSchema = z
  .object({
    results: z
      .record(z.string(), PerAppResultSchema)
      .exactOptional()
      .openapi({
        description:
          'The per-app results, a mapping from package names to the respective clearing result.',
      }),
  })
  .openapi({
    description:
      'Status of the CLEAR_APP_DATA command to clear the data of specified apps from the device.',
    required: [],
  })
  .openapi('ClearAppsDataStatus')

const CommandSchema = z
  .object({
    clearAppsDataParams: ClearAppsDataParamsSchema.exactOptional().openapi({
      description:
        'Parameters for the CLEAR_APP_DATA command to clear the data of specified apps from the device. See ClearAppsDataParams. If this is set, then it is suggested that type should not be set. In this case, the server automatically sets it to CLEAR_APP_DATA. It is also acceptable to explicitly set type to CLEAR_APP_DATA.',
    }),
    clearAppsDataStatus: ClearAppsDataStatusSchema.exactOptional().openapi({
      description:
        'Output only. Status of the CLEAR_APP_DATA command to clear the data of specified apps from the device. See ClearAppsDataStatus.',
      readOnly: true,
    }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The timestamp at which the command was created. The timestamp is automatically generated by the server.',
      }),
    duration: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The duration for which the command is valid. The command will expire if not executed by the device during this time. The default duration if unspecified is ten minutes. There is no maximum duration.',
      }),
    errorCode: z
      .enum([
        'COMMAND_ERROR_CODE_UNSPECIFIED',
        'UNKNOWN',
        'API_LEVEL',
        'MANAGEMENT_MODE',
        'INVALID_VALUE',
        'UNSUPPORTED',
      ])
      .exactOptional()
      .openapi({
        description:
          'If the command failed, an error code explaining the failure. This is not set when the command is cancelled by the caller.',
      }),
    newPassword: z
      .string()
      .exactOptional()
      .openapi({
        description: 'For commands of type RESET_PASSWORD, optionally specifies the new password.',
      }),
    resetPasswordFlags: z
      .array(
        z.enum([
          'RESET_PASSWORD_FLAG_UNSPECIFIED',
          'REQUIRE_ENTRY',
          'DO_NOT_ASK_CREDENTIALS_ON_BOOT',
          'LOCK_NOW',
        ]),
      )
      .exactOptional()
      .openapi({ description: 'For commands of type RESET_PASSWORD, optionally specifies flags.' }),
    type: z
      .enum([
        'COMMAND_TYPE_UNSPECIFIED',
        'LOCK',
        'RESET_PASSWORD',
        'REBOOT',
        'RELINQUISH_OWNERSHIP',
        'CLEAR_APP_DATA',
      ])
      .exactOptional()
      .openapi({ description: 'The type of the command.' }),
    userName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the user that owns the device in the form enterprises/{enterpriseId}/users/{userId}. This is automatically generated by the server based on the device the command is sent to.',
      }),
  })
  .openapi({ description: 'A command.', required: [] })
  .openapi('Command')

const CommonCriteriaModeInfoSchema = z
  .object({
    commonCriteriaModeStatus: z
      .enum([
        'COMMON_CRITERIA_MODE_STATUS_UNKNOWN',
        'COMMON_CRITERIA_MODE_DISABLED',
        'COMMON_CRITERIA_MODE_ENABLED',
      ])
      .exactOptional()
      .openapi({ description: 'Whether Common Criteria Mode is enabled.' }),
  })
  .openapi({
    description:
      "Information about Common Criteria Mode—security standards defined in the Common Criteria for Information Technology Security Evaluation (https://www.commoncriteriaportal.org/) (CC).This information is only available if statusReportingSettings.commonCriteriaModeEnabled is true in the device's policy.",
    required: [],
  })
  .openapi('CommonCriteriaModeInfo')

const ContactInfoSchema = z
  .object({
    contactEmail: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Email address for a point of contact, which will be used to send important announcements related to managed Google Play.',
      }),
    dataProtectionOfficerEmail: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The email of the data protection officer. The email is validated but not verified.',
      }),
    dataProtectionOfficerName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the data protection officer.' }),
    dataProtectionOfficerPhone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The phone number of the data protection officer The phone number is validated but not verified.',
      }),
    euRepresentativeEmail: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The email of the EU representative. The email is validated but not verified.',
      }),
    euRepresentativeName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the EU representative.' }),
    euRepresentativePhone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The phone number of the EU representative. The phone number is validated but not verified.',
      }),
  })
  .openapi({ description: 'Contact details for managed Google Play enterprises.', required: [] })
  .openapi('ContactInfo')

const DeviceSettingsSchema = z
  .object({
    adbEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether ADB (https://developer.android.com/studio/command-line/adb.html) is enabled on the device.',
      }),
    developmentSettingsEnabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether developer mode is enabled on the device.' }),
    encryptionStatus: z
      .enum([
        'ENCRYPTION_STATUS_UNSPECIFIED',
        'UNSUPPORTED',
        'INACTIVE',
        'ACTIVATING',
        'ACTIVE',
        'ACTIVE_DEFAULT_KEY',
        'ACTIVE_PER_USER',
      ])
      .exactOptional()
      .openapi({ description: 'Encryption status from DevicePolicyManager.' }),
    isDeviceSecure: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the device is secured with PIN/password.' }),
    isEncrypted: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the storage encryption is enabled.' }),
    unknownSourcesEnabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether installing apps from unknown sources is enabled.' }),
    verifyAppsEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether Google Play Protect verification (https://support.google.com/accounts/answer/2812853) is enforced on the device.',
      }),
  })
  .openapi({
    description: 'Information about security related device settings on device.',
    required: [],
  })
  .openapi('DeviceSettings')

const DisplaySchema = z
  .object({
    density: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Display density expressed as dots-per-inch.' }),
    displayId: z.int32().exactOptional().openapi({ description: 'Unique display id.' }),
    height: z.int32().exactOptional().openapi({ description: 'Display height in pixels.' }),
    name: z.string().exactOptional().openapi({ description: 'Name of the display.' }),
    refreshRate: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Refresh rate of the display in frames per second.' }),
    state: z
      .enum(['DISPLAY_STATE_UNSPECIFIED', 'OFF', 'ON', 'DOZE', 'SUSPENDED'])
      .exactOptional()
      .openapi({ description: 'State of the display.' }),
    width: z.int32().exactOptional().openapi({ description: 'Display width in pixels.' }),
  })
  .openapi({ description: 'Device display information.', required: [] })
  .openapi('Display')

const HardwareInfoSchema = z
  .object({
    batteryShutdownTemperatures: z
      .array(z.float32())
      .exactOptional()
      .openapi({
        description:
          'Battery shutdown temperature thresholds in Celsius for each battery on the device.',
      }),
    batteryThrottlingTemperatures: z
      .array(z.float32())
      .exactOptional()
      .openapi({
        description:
          'Battery throttling temperature thresholds in Celsius for each battery on the device.',
      }),
    brand: z
      .string()
      .exactOptional()
      .openapi({ description: 'Brand of the device. For example, Google.' }),
    cpuShutdownTemperatures: z
      .array(z.float32())
      .exactOptional()
      .openapi({
        description: 'CPU shutdown temperature thresholds in Celsius for each CPU on the device.',
      }),
    cpuThrottlingTemperatures: z
      .array(z.float32())
      .exactOptional()
      .openapi({
        description: 'CPU throttling temperature thresholds in Celsius for each CPU on the device.',
      }),
    deviceBasebandVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'Baseband version. For example, MDM9625_104662.22.05.34p.' }),
    enterpriseSpecificId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. ID that uniquely identifies a personally-owned device in a particular organization. On the same physical device when enrolled with the same organization, this ID persists across setups and even factory resets. This ID is available on personally-owned devices with a work profile on devices running Android 12 and above.',
        readOnly: true,
      }),
    gpuShutdownTemperatures: z
      .array(z.float32())
      .exactOptional()
      .openapi({
        description: 'GPU shutdown temperature thresholds in Celsius for each GPU on the device.',
      }),
    gpuThrottlingTemperatures: z
      .array(z.float32())
      .exactOptional()
      .openapi({
        description: 'GPU throttling temperature thresholds in Celsius for each GPU on the device.',
      }),
    hardware: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the hardware. For example, Angler.' }),
    manufacturer: z
      .string()
      .exactOptional()
      .openapi({ description: 'Manufacturer. For example, Motorola.' }),
    model: z
      .string()
      .exactOptional()
      .openapi({ description: 'The model of the device. For example, Asus Nexus 7.' }),
    serialNumber: z.string().exactOptional().openapi({ description: 'The device serial number.' }),
    skinShutdownTemperatures: z
      .array(z.float32())
      .exactOptional()
      .openapi({ description: 'Device skin shutdown temperature thresholds in Celsius.' }),
    skinThrottlingTemperatures: z
      .array(z.float32())
      .exactOptional()
      .openapi({ description: 'Device skin throttling temperature thresholds in Celsius.' }),
  })
  .openapi({
    description:
      "Information about device hardware. The fields related to temperature thresholds are only available if hardwareStatusEnabled is true in the device's policy.",
    required: [],
  })
  .openapi('HardwareInfo')

const HardwareStatusSchema = z
  .object({
    batteryTemperatures: z
      .array(z.float32())
      .exactOptional()
      .openapi({
        description: 'Current battery temperatures in Celsius for each battery on the device.',
      }),
    cpuTemperatures: z
      .array(z.float32())
      .exactOptional()
      .openapi({ description: 'Current CPU temperatures in Celsius for each CPU on the device.' }),
    cpuUsages: z
      .array(z.float32())
      .exactOptional()
      .openapi({
        description:
          'CPU usages in percentage for each core available on the device. Usage is 0 for each unplugged core. Empty array implies that CPU usage is not supported in the system.',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time the measurements were taken.' }),
    fanSpeeds: z
      .array(z.float32())
      .exactOptional()
      .openapi({
        description:
          'Fan speeds in RPM for each fan on the device. Empty array means that there are no fans or fan speed is not supported on the system.',
      }),
    gpuTemperatures: z
      .array(z.float32())
      .exactOptional()
      .openapi({ description: 'Current GPU temperatures in Celsius for each GPU on the device.' }),
    skinTemperatures: z
      .array(z.float32())
      .exactOptional()
      .openapi({ description: 'Current device skin temperatures in Celsius.' }),
  })
  .openapi({
    description:
      'Hardware status. Temperatures may be compared to the temperature thresholds available in hardwareInfo to determine hardware health.',
    required: [],
  })
  .openapi('HardwareStatus')

const MemoryEventSchema = z
  .object({
    byteCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The number of free bytes in the medium, or for EXTERNAL_STORAGE_DETECTED, the total capacity in bytes of the storage medium.',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The creation time of the event.' }),
    eventType: z
      .enum([
        'MEMORY_EVENT_TYPE_UNSPECIFIED',
        'RAM_MEASURED',
        'INTERNAL_STORAGE_MEASURED',
        'EXTERNAL_STORAGE_DETECTED',
        'EXTERNAL_STORAGE_REMOVED',
        'EXTERNAL_STORAGE_MEASURED',
      ])
      .exactOptional()
      .openapi({ description: 'Event type.' }),
  })
  .openapi({ description: 'An event related to memory and storage measurements.', required: [] })
  .openapi('MemoryEvent')

const MemoryInfoSchema = z
  .object({
    totalInternalStorage: z
      .string()
      .exactOptional()
      .openapi({ description: 'Total internal storage on device in bytes.' }),
    totalRam: z.string().exactOptional().openapi({ description: 'Total RAM on device in bytes.' }),
  })
  .openapi({ description: 'Information about device memory and storage.', required: [] })
  .openapi('MemoryInfo')

const TelephonyInfoSchema = z
  .object({
    carrierName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The carrier name associated with this SIM card.' }),
    phoneNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The phone number associated with this SIM card.' }),
  })
  .openapi({
    description:
      'Telephony information associated with a given SIM card on the device. Only supported on fully managed devices starting from Android API level 23.',
    required: [],
  })
  .openapi('TelephonyInfo')

const NetworkInfoSchema = z
  .object({
    imei: z
      .string()
      .exactOptional()
      .openapi({ description: 'IMEI number of the GSM device. For example, A1000031212.' }),
    meid: z
      .string()
      .exactOptional()
      .openapi({ description: 'MEID number of the CDMA device. For example, A00000292788E1.' }),
    networkOperatorName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Alphabetic name of current registered operator. For example, Vodafone.',
      }),
    telephonyInfos: z
      .array(TelephonyInfoSchema)
      .exactOptional()
      .openapi({
        description:
          'Provides telephony information associated with each SIM card on the device. Only supported on fully managed devices starting from Android API level 23.',
      }),
    wifiMacAddress: z
      .string()
      .exactOptional()
      .openapi({ description: 'Wi-Fi MAC address of the device. For example, 7c:11:11:11:11:11.' }),
  })
  .openapi({ description: 'Device network info.', required: [] })
  .openapi('NetworkInfo')

const OncWifiContextSchema = z
  .object({
    wifiGuid: z
      .string()
      .exactOptional()
      .openapi({ description: 'The GUID of non-compliant Wi-Fi configuration.' }),
  })
  .openapi({
    description: 'Additional context for non-compliance related to Wi-Fi configuration.',
    required: [],
  })
  .openapi('OncWifiContext')

const PasswordPoliciesContextSchema = z
  .object({
    passwordPolicyScope: z
      .enum(['SCOPE_UNSPECIFIED', 'SCOPE_DEVICE', 'SCOPE_PROFILE'])
      .exactOptional()
      .openapi({ description: 'The scope of non-compliant password.' }),
  })
  .openapi({
    description: 'Additional context for non-compliance related to password policies.',
    required: [],
  })
  .openapi('PasswordPoliciesContext')

const SpecificNonComplianceContextSchema = z
  .object({
    oncWifiContext: OncWifiContextSchema.exactOptional().openapi({
      description:
        'Additional context for non-compliance related to Wi-Fi configuration. See ONC_WIFI_INVALID_VALUE and ONC_WIFI_API_LEVEL',
    }),
    passwordPoliciesContext: PasswordPoliciesContextSchema.exactOptional().openapi({
      description:
        'Additional context for non-compliance related to password policies. See PASSWORD_POLICIES_PASSWORD_EXPIRED and PASSWORD_POLICIES_PASSWORD_NOT_SUFFICIENT.',
    }),
  })
  .openapi({ description: 'Additional context for SpecificNonComplianceReason.', required: [] })
  .openapi('SpecificNonComplianceContext')

const NonComplianceDetailSchema = z
  .object({
    currentValue: z
      .any()
      .exactOptional()
      .openapi({
        description:
          'If the policy setting could not be applied, the current value of the setting on the device.',
      }),
    fieldPath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For settings with nested fields, if a particular nested field is out of compliance, this specifies the full path to the offending field. The path is formatted in the same way the policy JSON field would be referenced in JavaScript, that is: 1) For object-typed fields, the field name is followed by a dot then by a subfield name. 2) For array-typed fields, the field name is followed by the array index enclosed in brackets. For example, to indicate a problem with the url field in the externalData field in the 3rd application, the path would be applications[2].externalData.url',
      }),
    installationFailureReason: z
      .enum([
        'INSTALLATION_FAILURE_REASON_UNSPECIFIED',
        'INSTALLATION_FAILURE_REASON_UNKNOWN',
        'IN_PROGRESS',
        'NOT_FOUND',
        'NOT_COMPATIBLE_WITH_DEVICE',
        'NOT_APPROVED',
        'PERMISSIONS_NOT_ACCEPTED',
        'NOT_AVAILABLE_IN_COUNTRY',
        'NO_LICENSES_REMAINING',
        'NOT_ENROLLED',
        'USER_INVALID',
      ])
      .exactOptional()
      .openapi({
        description:
          "If package_name is set and the non-compliance reason is APP_NOT_INSTALLED or APP_NOT_UPDATED, the detailed reason the app can't be installed or updated.",
      }),
    nonComplianceReason: z
      .enum([
        'NON_COMPLIANCE_REASON_UNSPECIFIED',
        'API_LEVEL',
        'MANAGEMENT_MODE',
        'USER_ACTION',
        'INVALID_VALUE',
        'APP_NOT_INSTALLED',
        'UNSUPPORTED',
        'APP_INSTALLED',
        'PENDING',
        'APP_INCOMPATIBLE',
        'APP_NOT_UPDATED',
      ])
      .exactOptional()
      .openapi({ description: 'The reason the device is not in compliance with the setting.' }),
    packageName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The package name indicating which app is out of compliance, if applicable.',
      }),
    settingName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the policy setting. This is the JSON field name of a top-level Policy field.',
      }),
    specificNonComplianceContext: SpecificNonComplianceContextSchema.exactOptional().openapi({
      description: 'Additional context for specific_non_compliance_reason.',
    }),
    specificNonComplianceReason: z
      .enum([
        'SPECIFIC_NON_COMPLIANCE_REASON_UNSPECIFIED',
        'PASSWORD_POLICIES_USER_CREDENTIALS_CONFIRMATION_REQUIRED',
        'PASSWORD_POLICIES_PASSWORD_EXPIRED',
        'PASSWORD_POLICIES_PASSWORD_NOT_SUFFICIENT',
        'ONC_WIFI_INVALID_VALUE',
        'ONC_WIFI_API_LEVEL',
      ])
      .exactOptional()
      .openapi({
        description: 'The policy-specific reason the device is not in compliance with the setting.',
      }),
  })
  .openapi({
    description: 'Provides detail about non-compliance with a policy setting.',
    required: [],
  })
  .openapi('NonComplianceDetail')

const PowerManagementEventSchema = z
  .object({
    batteryLevel: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'For BATTERY_LEVEL_COLLECTED events, the battery level as a percentage.',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The creation time of the event.' }),
    eventType: z
      .enum([
        'POWER_MANAGEMENT_EVENT_TYPE_UNSPECIFIED',
        'BATTERY_LEVEL_COLLECTED',
        'POWER_CONNECTED',
        'POWER_DISCONNECTED',
        'BATTERY_LOW',
        'BATTERY_OKAY',
        'BOOT_COMPLETED',
        'SHUTDOWN',
      ])
      .exactOptional()
      .openapi({ description: 'Event type.' }),
  })
  .openapi({ description: 'A power management event.', required: [] })
  .openapi('PowerManagementEvent')

const PostureDetailSchema = z
  .object({
    advice: z
      .array(UserFacingMessageSchema)
      .exactOptional()
      .openapi({
        description:
          'Corresponding admin-facing advice to mitigate this security risk and improve the security posture of the device.',
      }),
    securityRisk: z
      .enum([
        'SECURITY_RISK_UNSPECIFIED',
        'UNKNOWN_OS',
        'COMPROMISED_OS',
        'HARDWARE_BACKED_EVALUATION_FAILED',
      ])
      .exactOptional()
      .openapi({
        description:
          'A specific security risk that negatively affects the security posture of the device.',
      }),
  })
  .openapi({
    description: 'Additional details regarding the security posture of the device.',
    required: [],
  })
  .openapi('PostureDetail')

const SecurityPostureSchema = z
  .object({
    devicePosture: z
      .enum(['POSTURE_UNSPECIFIED', 'SECURE', 'AT_RISK', 'POTENTIALLY_COMPROMISED'])
      .exactOptional()
      .openapi({ description: "Device's security posture value." }),
    postureDetails: z
      .array(PostureDetailSchema)
      .exactOptional()
      .openapi({ description: 'Additional details regarding the security posture of the device.' }),
  })
  .openapi({
    description:
      'The security posture of the device, as determined by the current device state and the policies applied.',
    required: [],
  })
  .openapi('SecurityPosture')

const SystemUpdateInfoSchema = z
  .object({
    updateReceivedTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time when the update was first available. A zero value indicates that this field is not set. This field is set only if an update is available (that is, updateStatus is neither UPDATE_STATUS_UNKNOWN nor UP_TO_DATE).',
      }),
    updateStatus: z
      .enum([
        'UPDATE_STATUS_UNKNOWN',
        'UP_TO_DATE',
        'UNKNOWN_UPDATE_AVAILABLE',
        'SECURITY_UPDATE_AVAILABLE',
        'OS_UPDATE_AVAILABLE',
      ])
      .exactOptional()
      .openapi({
        description: 'The status of an update: whether an update exists and what type it is.',
      }),
  })
  .openapi({ description: 'Information about a potential pending system update.', required: [] })
  .openapi('SystemUpdateInfo')

const SoftwareInfoSchema = z
  .object({
    androidBuildNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Android build ID string meant for displaying to the user. For example, shamu-userdebug 6.0.1 MOB30I 2756745 dev-keys.',
      }),
    androidBuildTime: z.string().exactOptional().openapi({ description: 'Build time.' }),
    androidDevicePolicyVersionCode: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The Android Device Policy app version code.' }),
    androidDevicePolicyVersionName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Android Device Policy app version as displayed to the user.' }),
    androidVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'The user-visible Android version string. For example, 6.0.1.' }),
    bootloaderVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'The system bootloader version number, e.g. 0.6.7.' }),
    deviceBuildSignature: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "SHA-256 hash of android.content.pm.Signature (https://developer.android.com/reference/android/content/pm/Signature.html) associated with the system package, which can be used to verify that the system build hasn't been modified.",
      }),
    deviceKernelVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'Kernel version, for example, 2.6.32.9-g103d848.' }),
    primaryLanguageCode: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An IETF BCP 47 language code for the primary locale on the device.',
      }),
    securityPatchLevel: z
      .string()
      .exactOptional()
      .openapi({ description: 'Security patch level, e.g. 2016-05-01.' }),
    systemUpdateInfo: SystemUpdateInfoSchema.exactOptional().openapi({
      description: 'Information about a potential pending system update.',
    }),
  })
  .openapi({ description: 'Information about device software.', required: [] })
  .openapi('SoftwareInfo')

const UserSchema = z
  .object({
    accountIdentifier: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A unique identifier you create for this user, such as user342 or asset#44418. This field must be set when the user is created and can't be updated. This field must not contain personally identifiable information (PII). This identifier must be 1024 characters or less; otherwise, the update policy request will fail.",
      }),
  })
  .openapi({ description: 'A user belonging to an enterprise.', required: [] })
  .openapi('User')

const DeviceSchema = z
  .object({
    apiLevel: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The API level of the Android platform version running on the device.',
      }),
    applicationReports: z
      .array(ApplicationReportSchema)
      .exactOptional()
      .openapi({
        description:
          "Reports for apps installed on the device. This information is only available when application_reports_enabled is true in the device's policy.",
      }),
    appliedPasswordPolicies: z
      .array(PasswordRequirementsSchema)
      .exactOptional()
      .openapi({
        description:
          'The password requirements currently applied to the device. The applied requirements may be slightly different from those specified in passwordPolicies in some cases. fieldPath is set based on passwordPolicies.',
      }),
    appliedPolicyName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the policy currently applied to the device.' }),
    appliedPolicyVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'The version of the policy currently applied to the device.' }),
    appliedState: z
      .enum(['DEVICE_STATE_UNSPECIFIED', 'ACTIVE', 'DISABLED', 'DELETED', 'PROVISIONING'])
      .exactOptional()
      .openapi({ description: 'The state currently applied to the device.' }),
    commonCriteriaModeInfo: CommonCriteriaModeInfoSchema.exactOptional().openapi({
      description:
        "Information about Common Criteria Mode—security standards defined in the Common Criteria for Information Technology Security Evaluation (https://www.commoncriteriaportal.org/) (CC).This information is only available if statusReportingSettings.commonCriteriaModeEnabled is true in the device's policy.",
    }),
    deviceSettings: DeviceSettingsSchema.exactOptional().openapi({
      description:
        "Device settings information. This information is only available if deviceSettingsEnabled is true in the device's policy.",
    }),
    disabledReason: UserFacingMessageSchema.exactOptional().openapi({
      description:
        'If the device state is DISABLED, an optional message that is displayed on the device indicating the reason the device is disabled. This field can be modified by a patch request.',
    }),
    displays: z
      .array(DisplaySchema)
      .exactOptional()
      .openapi({
        description:
          "Detailed information about displays on the device. This information is only available if displayInfoEnabled is true in the device's policy.",
      }),
    enrollmentTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time of device enrollment.' }),
    enrollmentTokenData: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the device was enrolled with an enrollment token with additional data provided, this field contains that data.',
      }),
    enrollmentTokenName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the device was enrolled with an enrollment token, this field contains the name of the token.',
      }),
    hardwareInfo: HardwareInfoSchema.exactOptional().openapi({
      description: 'Detailed information about the device hardware.',
    }),
    hardwareStatusSamples: z
      .array(HardwareStatusSchema)
      .exactOptional()
      .openapi({
        description:
          "Hardware status samples in chronological order. This information is only available if hardwareStatusEnabled is true in the device's policy.",
      }),
    lastPolicyComplianceReportTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Deprecated.' }),
    lastPolicySyncTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last time the device fetched its policy.' }),
    lastStatusReportTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last time the device sent a status report.' }),
    managementMode: z
      .enum(['MANAGEMENT_MODE_UNSPECIFIED', 'DEVICE_OWNER', 'PROFILE_OWNER'])
      .exactOptional()
      .openapi({
        description:
          'The type of management mode Android Device Policy takes on the device. This influences which policy settings are supported.',
      }),
    memoryEvents: z
      .array(MemoryEventSchema)
      .exactOptional()
      .openapi({
        description:
          "Events related to memory and storage measurements in chronological order. This information is only available if memoryInfoEnabled is true in the device's policy.",
      }),
    memoryInfo: MemoryInfoSchema.exactOptional().openapi({
      description: 'Memory information: contains information about device memory and storage.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the device in the form enterprises/{enterpriseId}/devices/{deviceId}.',
      }),
    networkInfo: NetworkInfoSchema.exactOptional().openapi({
      description:
        "Device network information. This information is only available if networkInfoEnabled is true in the device's policy.",
    }),
    nonComplianceDetails: z
      .array(NonComplianceDetailSchema)
      .exactOptional()
      .openapi({
        description: 'Details about policy settings that the device is not compliant with.',
      }),
    ownership: z
      .enum(['OWNERSHIP_UNSPECIFIED', 'COMPANY_OWNED', 'PERSONALLY_OWNED'])
      .exactOptional()
      .openapi({ description: 'Ownership of the managed device.' }),
    policyCompliant: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the device is compliant with its policy.' }),
    policyName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The name of the policy applied to the device, in the form enterprises/{enterpriseId}/policies/{policyId}. If not specified, the policy_name for the device's user is applied. This field can be modified by a patch request. You can specify only the policyId when calling enterprises.devices.patch, as long as the policyId doesn’t contain any slashes. The rest of the policy name is inferred.",
      }),
    powerManagementEvents: z
      .array(PowerManagementEventSchema)
      .exactOptional()
      .openapi({
        description:
          "Power management events on the device in chronological order. This information is only available if powerManagementEventsEnabled is true in the device's policy.",
      }),
    previousDeviceNames: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'If the same physical device has been enrolled multiple times, this field contains its previous device names. The serial number is used as the unique identifier to determine if the same physical device has enrolled previously. The names are in chronological order.',
      }),
    securityPosture: SecurityPostureSchema.exactOptional().openapi({
      description: "Device's security posture value that reflects how secure the device is.",
    }),
    softwareInfo: SoftwareInfoSchema.exactOptional().openapi({
      description:
        "Detailed information about the device software. This information is only available if softwareInfoEnabled is true in the device's policy.",
    }),
    state: z
      .enum(['DEVICE_STATE_UNSPECIFIED', 'ACTIVE', 'DISABLED', 'DELETED', 'PROVISIONING'])
      .exactOptional()
      .openapi({
        description:
          'The state to be applied to the device. This field can be modified by a patch request. Note that when calling enterprises.devices.patch, ACTIVE and DISABLED are the only allowable values. To enter the device into a DELETED state, call enterprises.devices.delete.',
      }),
    systemProperties: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          "Map of selected system properties name and value related to the device. This information is only available if systemPropertiesEnabled is true in the device's policy.",
      }),
    user: UserSchema.exactOptional().openapi({ description: 'The user who owns the device.' }),
    userName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the user that owns this device in the form enterprises/{enterpriseId}/users/{userId}.',
      }),
  })
  .openapi({
    description:
      "A device owned by an enterprise. Unless otherwise noted, all fields are read-only and can't be modified by enterprises.devices.patch.",
    required: [],
  })
  .openapi('Device')

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } ',
  })
  .openapi('Empty')

const EnrollmentTokenSchema = z
  .object({
    additionalData: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional, arbitrary data associated with the enrollment token. This could contain, for example, the ID of an org unit the device is assigned to after enrollment. After a device enrolls with the token, this data will be exposed in the enrollment_token_data field of the Device resource. The data must be 1024 characters or less; otherwise, the creation request will fail.',
      }),
    allowPersonalUsage: z
      .enum([
        'ALLOW_PERSONAL_USAGE_UNSPECIFIED',
        'PERSONAL_USAGE_ALLOWED',
        'PERSONAL_USAGE_DISALLOWED',
      ])
      .exactOptional()
      .openapi({
        description:
          'Controls whether personal usage is allowed on a device provisioned with this enrollment token.For company-owned devices: Enabling personal usage allows the user to set up a work profile on the device. Disabling personal usage requires the user provision the device as a fully managed device.For personally-owned devices: Enabling personal usage allows the user to set up a work profile on the device. Disabling personal usage will prevent the device from provisioning. Personal usage cannot be disabled on personally-owned device.',
      }),
    duration: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The length of time the enrollment token is valid, ranging from 1 minute to Durations.MAX_VALUE (https://developers.google.com/protocol-buffers/docs/reference/java/com/google/protobuf/util/Durations.html#MAX_VALUE), approximately 10,000 years. If not specified, the default duration is 1 hour. Please note that if requested duration causes the resulting expiration_timestamp to exceed Timestamps.MAX_VALUE (https://developers.google.com/protocol-buffers/docs/reference/java/com/google/protobuf/util/Timestamps.html#MAX_VALUE), then expiration_timestamp is coerced to Timestamps.MAX_VALUE.',
      }),
    expirationTimestamp: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The expiration time of the token. This is a read-only field generated by the server.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the enrollment token, which is generated by the server during creation, in the form enterprises/{enterpriseId}/enrollmentTokens/{enrollmentTokenId}.',
      }),
    oneTimeOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the enrollment token is for one time use only. If the flag is set to true, only one device can use it for registration.',
      }),
    policyName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the policy initially applied to the enrolled device, in the form enterprises/{enterpriseId}/policies/{policyId}. If not specified, the policy_name for the device’s user is applied. If user_name is also not specified, enterprises/{enterpriseId}/policies/default is applied by default. When updating this field, you can specify only the policyId as long as the policyId doesn’t contain any slashes. The rest of the policy name will be inferred.',
      }),
    qrCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A JSON string whose UTF-8 representation can be used to generate a QR code to enroll a device with this enrollment token. To enroll a device using NFC, the NFC record must contain a serialized java.util.Properties representation of the properties in the JSON.',
      }),
    user: UserSchema.exactOptional().openapi({
      description:
        "The user associated with this enrollment token. If it's specified when the enrollment token is created and the user does not exist, the user will be created. This field must not contain personally identifiable information. Only the account_identifier field needs to be set.",
    }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The token value that's passed to the device and authorizes the device to enroll. This is a read-only field generated by the server.",
      }),
  })
  .openapi({ description: 'An enrollment token.', required: [] })
  .openapi('EnrollmentToken')

const ExternalDataSchema = z
  .object({
    sha256Hash: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The base-64 encoded SHA-256 hash of the content hosted at url. If the content doesn't match this hash, Android Device Policy won't use the data.",
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The absolute URL to the data, which must use either the http or https scheme. Android Device Policy doesn't provide any credentials in the GET request, so the URL must be publicly accessible. Including a long, random component in the URL may be used to prevent attackers from discovering the URL.",
      }),
  })
  .openapi({
    description:
      'Data hosted at an external location. The data is to be downloaded by Android Device Policy and verified against the hash.',
    required: [],
  })
  .openapi('ExternalData')

const SigninDetailSchema = z
  .object({
    allowPersonalUsage: z
      .enum([
        'ALLOW_PERSONAL_USAGE_UNSPECIFIED',
        'PERSONAL_USAGE_ALLOWED',
        'PERSONAL_USAGE_DISALLOWED',
      ])
      .exactOptional()
      .openapi({
        description:
          'Controls whether personal usage is allowed on a device provisioned with this enrollment token.For company-owned devices: Enabling personal usage allows the user to set up a work profile on the device. Disabling personal usage requires the user provision the device as a fully managed device.For personally-owned devices: Enabling personal usage allows the user to set up a work profile on the device. Disabling personal usage will prevent the device from provisioning. Personal usage cannot be disabled on personally-owned device.',
      }),
    qrCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A JSON string whose UTF-8 representation can be used to generate a QR code to enroll a device with this enrollment token. To enroll a device using NFC, the NFC record must contain a serialized java.util.Properties representation of the properties in the JSON. This is a read-only field generated by the server.',
      }),
    signinEnrollmentToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An enterprise wide enrollment token used to trigger custom sign-in flow. This is a read-only field generated by the server.',
      }),
    signinUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Sign-in URL for authentication when device is provisioned with a sign-in enrollment token. The sign-in endpoint should finish authentication flow with a URL in the form of https://enterprise.google.com/android/enroll?et= for a successful login, or https://enterprise.google.com/android/enroll/invalid for a failed login.',
      }),
  })
  .openapi({
    description: 'A resource containing sign in details for an enterprise.',
    required: [],
  })
  .openapi('SigninDetail')

const TermsAndConditionsSchema = z
  .object({
    content: UserFacingMessageSchema.exactOptional().openapi({
      description:
        'A well-formatted HTML string. It will be parsed on the client with android.text.Html#fromHtml.',
    }),
    header: UserFacingMessageSchema.exactOptional().openapi({
      description: 'A short header which appears above the HTML content.',
    }),
  })
  .openapi({
    description: 'A terms and conditions page to be accepted during provisioning.',
    required: [],
  })
  .openapi('TermsAndConditions')

const EnterpriseSchema = z
  .object({
    appAutoApprovalEnabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Deprecated and unused.' }),
    contactInfo: ContactInfoSchema.exactOptional().openapi({
      description: 'The enterprise contact info of an EMM-managed enterprise.',
    }),
    enabledNotificationTypes: z
      .array(
        z.enum([
          'NOTIFICATION_TYPE_UNSPECIFIED',
          'ENROLLMENT',
          'COMPLIANCE_REPORT',
          'STATUS_REPORT',
          'COMMAND',
          'USAGE_LOGS',
        ]),
      )
      .exactOptional()
      .openapi({
        description: 'The types of Google Pub/Sub notifications enabled for the enterprise.',
      }),
    enterpriseDisplayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the enterprise displayed to users. This field has a maximum length of 100 characters.',
      }),
    logo: ExternalDataSchema.exactOptional().openapi({
      description:
        'An image displayed as a logo during device provisioning. Supported types are: image/bmp, image/gif, image/x-ico, image/jpeg, image/png, image/webp, image/vnd.wap.wbmp, image/x-adobe-dng.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the enterprise which is generated by the server during creation, in the form enterprises/{enterpriseId}.',
      }),
    primaryColor: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'A color in RGB format that indicates the predominant color to display in the device management app UI. The color components are stored as follows: (red << 16) | (green << 8) | blue, where the value of each component is between 0 and 255, inclusive.',
      }),
    pubsubTopic: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The topic which Pub/Sub notifications are published to, in the form projects/{project}/topics/{topic}. This field is only required if Pub/Sub notifications are enabled.',
      }),
    signinDetails: z
      .array(SigninDetailSchema)
      .exactOptional()
      .openapi({ description: 'Sign-in details of the enterprise.' }),
    termsAndConditions: z
      .array(TermsAndConditionsSchema)
      .exactOptional()
      .openapi({
        description:
          'Terms and conditions that must be accepted when provisioning a device for this enterprise. A page of terms is generated for each value in this list.',
      }),
  })
  .openapi({ description: 'The configuration applied to an enterprise.', required: [] })
  .openapi('Enterprise')

const IssueCommandResponseSchema = z
  .object({})
  .openapi({
    description: 'Response on issuing a command. This is currently empty as a placeholder.',
  })
  .openapi('IssueCommandResponse')

const ListDevicesResponseSchema = z
  .object({
    devices: z.array(DeviceSchema).exactOptional().openapi({ description: 'The list of devices.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description: 'If there are more results, a token to retrieve next page of results.',
      }),
  })
  .openapi({
    description: 'Response to a request to list devices for a given enterprise.',
    required: [],
  })
  .openapi('ListDevicesResponse')

const ListEnrollmentTokensResponseSchema = z
  .object({
    enrollmentTokens: z
      .array(EnrollmentTokenSchema)
      .exactOptional()
      .openapi({ description: 'The list of enrollment tokens.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description: 'If there are more results, a token to retrieve next page of results.',
      }),
  })
  .openapi({
    description: 'Response to a request to list enrollment tokens for a given enterprise.',
    required: [],
  })
  .openapi('ListEnrollmentTokensResponse')

const ListEnterprisesResponseSchema = z
  .object({
    enterprises: z
      .array(EnterpriseSchema)
      .exactOptional()
      .openapi({ description: 'The list of enterprises.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description: 'If there are more results, a token to retrieve next page of results.',
      }),
  })
  .openapi({ description: 'Response to a request to list enterprises.', required: [] })
  .openapi('ListEnterprisesResponse')

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
      'The Status type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC (https://github.com/grpc). Each Status message contains three pieces of data: error code, error message, and error details.You can find out more about this error model and how to work with it in the API Design Guide (https://cloud.google.com/apis/design/errors).',
    required: [],
  })
  .openapi('Status')

const OperationSchema = z
  .object({
    done: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If the value is false, it means the operation is still in progress. If true, the operation is completed, and either error or response is available.',
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
          'The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the name should be a resource name ending with operations/{unique_id}.',
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
          'The normal response of the operation in case of success. If the original method returns no data on success, such as Delete, the response is google.protobuf.Empty. If the original method is standard Get/Create/Update, the response should be the resource. For other methods, the response should have the type XxxResponse, where Xxx is the original method name. For example, if the original method name is TakeSnapshot(), the inferred response type is TakeSnapshotResponse.',
      }),
  })
  .openapi({
    description:
      'This resource represents a long-running operation that is the result of a network API call.',
    required: [],
  })
  .openapi('Operation')

const ListOperationsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The standard List next-page token.' }),
    operations: z
      .array(OperationSchema)
      .exactOptional()
      .openapi({
        description: 'A list of operations that matches the specified filter in the request.',
      }),
  })
  .openapi({ description: 'The response message for Operations.ListOperations.', required: [] })
  .openapi('ListOperationsResponse')

const PolicySchema: z.ZodType<PolicyType> = z
  .lazy(() =>
    z
      .object({
        accountTypesWithManagementDisabled: z
          .array(z.string())
          .exactOptional()
          .openapi({ description: "Account types that can't be managed by the user." }),
        addUserDisabled: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether adding new users and profiles is disabled.' }),
        adjustVolumeDisabled: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Whether adjusting the master volume is disabled. Also mutes the device.',
          }),
        advancedSecurityOverrides: AdvancedSecurityOverridesSchema.exactOptional().openapi({
          description:
            "Security policies set to secure values by default. To maintain the security posture of a device, we don't recommend overriding any of the default values.",
        }),
        alwaysOnVpnPackage: AlwaysOnVpnPackageSchema.exactOptional().openapi({
          description:
            'Configuration for an always-on VPN connection. Use with vpn_config_disabled to prevent modification of this setting.',
        }),
        androidDevicePolicyTracks: z
          .array(z.enum(['APP_TRACK_UNSPECIFIED', 'PRODUCTION', 'BETA']))
          .exactOptional()
          .openapi({
            description:
              'The app tracks for Android Device Policy the device can access. The device receives the latest version among all accessible tracks. If no tracks are specified, then the device only uses the production track.',
          }),
        appAutoUpdatePolicy: z
          .enum([
            'APP_AUTO_UPDATE_POLICY_UNSPECIFIED',
            'CHOICE_TO_THE_USER',
            'NEVER',
            'WIFI_ONLY',
            'ALWAYS',
          ])
          .exactOptional()
          .openapi({
            description:
              'Recommended alternative: autoUpdateMode which is set per app, provides greater flexibility around update frequency.When autoUpdateMode is set to AUTO_UPDATE_POSTPONED or AUTO_UPDATE_HIGH_PRIORITY, this field has no effect.The app auto update policy, which controls when automatic app updates can be applied.',
          }),
        applications: z
          .array(ApplicationPolicySchema)
          .exactOptional()
          .openapi({ description: 'Policy applied to apps.' }),
        autoDateAndTimeZone: z
          .enum([
            'AUTO_DATE_AND_TIME_ZONE_UNSPECIFIED',
            'AUTO_DATE_AND_TIME_ZONE_USER_CHOICE',
            'AUTO_DATE_AND_TIME_ZONE_ENFORCED',
          ])
          .exactOptional()
          .openapi({
            description:
              'Whether auto date, time, and time zone are enabled on a company-owned device. If this is set, then autoTimeRequired is ignored.',
          }),
        autoTimeRequired: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether auto time is required, which prevents the user from manually setting the date and time. If autoDateAndTimeZone is set, this field is ignored.',
          }),
        blockApplicationsEnabled: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether applications other than the ones configured in applications are blocked from being installed. When set, applications that were installed under a previous policy but no longer appear in the policy are automatically uninstalled.',
          }),
        bluetoothConfigDisabled: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether configuring bluetooth is disabled.' }),
        bluetoothContactSharingDisabled: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether bluetooth contact sharing is disabled.' }),
        bluetoothDisabled: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether bluetooth is disabled. Prefer this setting over bluetooth_config_disabled because bluetooth_config_disabled can be bypassed by the user.',
          }),
        cameraAccess: z
          .enum([
            'CAMERA_ACCESS_UNSPECIFIED',
            'CAMERA_ACCESS_USER_CHOICE',
            'CAMERA_ACCESS_DISABLED',
            'CAMERA_ACCESS_ENFORCED',
          ])
          .exactOptional()
          .openapi({
            description:
              'Controls the use of the camera and whether the user has access to the camera access toggle.',
          }),
        cameraDisabled: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'If camera_access is set to any value other than CAMERA_ACCESS_UNSPECIFIED, this has no effect. Otherwise this field controls whether cameras are disabled: If true, all cameras are disabled, otherwise they are available. For fully managed devices this field applies for all apps on the device. For work profiles, this field applies only to apps in the work profile, and the camera access of apps outside the work profile is unaffected.',
          }),
        cellBroadcastsConfigDisabled: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether configuring cell broadcast is disabled.' }),
        choosePrivateKeyRules: z
          .array(ChoosePrivateKeyRuleSchema)
          .exactOptional()
          .openapi({
            description:
              "Rules for determining apps' access to private keys. See ChoosePrivateKeyRule for details.",
          }),
        complianceRules: z
          .array(ComplianceRuleSchema)
          .exactOptional()
          .openapi({
            description:
              'Rules declaring which mitigating actions to take when a device is not compliant with its policy. When the conditions for multiple rules are satisfied, all of the mitigating actions for the rules are taken. There is a maximum limit of 100 rules. Use policy enforcement rules instead.',
          }),
        createWindowsDisabled: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether creating windows besides app windows is disabled.' }),
        credentialsConfigDisabled: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether configuring user credentials is disabled.' }),
        crossProfilePolicies: CrossProfilePoliciesSchema.exactOptional().openapi({
          description: 'Cross-profile policies applied on the device.',
        }),
        dataRoamingDisabled: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether roaming data services are disabled.' }),
        debuggingFeaturesAllowed: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether the user is allowed to enable debugging features.' }),
        defaultPermissionPolicy: z
          .enum(['PERMISSION_POLICY_UNSPECIFIED', 'PROMPT', 'GRANT', 'DENY'])
          .exactOptional()
          .openapi({
            description: 'The default permission policy for runtime permission requests.',
          }),
        deviceOwnerLockScreenInfo: UserFacingMessageSchema.exactOptional().openapi({
          description: 'The device owner information to be shown on the lock screen.',
        }),
        encryptionPolicy: z
          .enum([
            'ENCRYPTION_POLICY_UNSPECIFIED',
            'ENABLED_WITHOUT_PASSWORD',
            'ENABLED_WITH_PASSWORD',
          ])
          .exactOptional()
          .openapi({ description: 'Whether encryption is enabled' }),
        ensureVerifyAppsEnabled: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether app verification is force-enabled.' }),
        factoryResetDisabled: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether factory resetting from settings is disabled.' }),
        frpAdminEmails: z
          .array(z.string())
          .exactOptional()
          .openapi({
            description:
              "Email addresses of device administrators for factory reset protection. When the device is factory reset, it will require one of these admins to log in with the Google account email and password to unlock the device. If no admins are specified, the device won't provide factory reset protection.",
          }),
        funDisabled: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether the user is allowed to have fun. Controls whether the Easter egg game in Settings is disabled.',
          }),
        installAppsDisabled: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether user installation of apps is disabled.' }),
        installUnknownSourcesAllowed: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'This field has no effect.' }),
        keyguardDisabled: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'If true, this disables the Lock Screen (https://source.android.com/docs/core/display/multi_display/lock-screen) for primary and/or secondary displays.',
          }),
        keyguardDisabledFeatures: z
          .array(
            z.enum([
              'KEYGUARD_DISABLED_FEATURE_UNSPECIFIED',
              'CAMERA',
              'NOTIFICATIONS',
              'UNREDACTED_NOTIFICATIONS',
              'TRUST_AGENTS',
              'DISABLE_FINGERPRINT',
              'DISABLE_REMOTE_INPUT',
              'FACE',
              'IRIS',
              'BIOMETRICS',
              'ALL_FEATURES',
            ]),
          )
          .exactOptional()
          .openapi({ description: 'Disabled keyguard customizations, such as widgets.' }),
        kioskCustomLauncherEnabled: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether the kiosk custom launcher is enabled. This replaces the home screen with a launcher that locks down the device to the apps installed via the applications setting. Apps appear on a single page in alphabetical order. Use kioskCustomization to further configure the kiosk device behavior.',
          }),
        kioskCustomization: KioskCustomizationSchema.exactOptional().openapi({
          description:
            'Settings controlling the behavior of a device in kiosk mode. To enable kiosk mode, set kioskCustomLauncherEnabled to true or specify an app in the policy with installType KIOSK.',
        }),
        locationMode: z
          .enum([
            'LOCATION_MODE_UNSPECIFIED',
            'HIGH_ACCURACY',
            'SENSORS_ONLY',
            'BATTERY_SAVING',
            'OFF',
            'LOCATION_USER_CHOICE',
            'LOCATION_ENFORCED',
            'LOCATION_DISABLED',
          ])
          .exactOptional()
          .openapi({ description: 'The degree of location detection enabled.' }),
        longSupportMessage: UserFacingMessageSchema.exactOptional().openapi({
          description:
            'A message displayed to the user in the device administators settings screen.',
        }),
        maximumTimeToLock: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Maximum time in milliseconds for user activity until the device locks. A value of 0 means there is no restriction.',
          }),
        microphoneAccess: z
          .enum([
            'MICROPHONE_ACCESS_UNSPECIFIED',
            'MICROPHONE_ACCESS_USER_CHOICE',
            'MICROPHONE_ACCESS_DISABLED',
            'MICROPHONE_ACCESS_ENFORCED',
          ])
          .exactOptional()
          .openapi({
            description:
              'Controls the use of the microphone and whether the user has access to the microphone access toggle. This applies only on fully managed devices.',
          }),
        minimumApiLevel: z
          .int32()
          .exactOptional()
          .openapi({ description: 'The minimum allowed Android API level.' }),
        mobileNetworksConfigDisabled: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether configuring mobile networks is disabled.' }),
        modifyAccountsDisabled: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether adding or removing accounts is disabled.' }),
        mountPhysicalMediaDisabled: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Whether the user mounting physical external media is disabled.',
          }),
        name: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The name of the policy in the form enterprises/{enterpriseId}/policies/{policyId}.',
          }),
        networkEscapeHatchEnabled: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              "Whether the network escape hatch is enabled. If a network connection can't be made at boot time, the escape hatch prompts the user to temporarily connect to a network in order to refresh the device policy. After applying policy, the temporary network will be forgotten and the device will continue booting. This prevents being unable to connect to a network if there is no suitable network in the last policy and the device boots into an app in lock task mode, or the user is otherwise unable to reach device settings.Note: Setting wifiConfigDisabled to true will override this setting under specific circumstances. Please see wifiConfigDisabled for further details.",
          }),
        networkResetDisabled: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether resetting network settings is disabled.' }),
        oncCertificateProviders: z
          .array(OncCertificateProviderSchema)
          .exactOptional()
          .openapi({ description: 'This feature is not generally available.' }),
        openNetworkConfiguration: z
          .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
          .exactOptional()
          .openapi({
            description:
              'Network configuration for the device. See configure networks for more information.',
          }),
        outgoingBeamDisabled: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether using NFC to beam data from apps is disabled.' }),
        outgoingCallsDisabled: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether outgoing calls are disabled.' }),
        passwordPolicies: z
          .array(PasswordRequirementsSchema)
          .exactOptional()
          .openapi({
            description:
              'Password requirement policies. Different policies can be set for work profile or fully managed devices by setting the password_scope field in the policy.',
          }),
        passwordRequirements: PasswordRequirementsSchema.exactOptional().openapi({
          description:
            'Password requirements. The field password_requirements.require_password_unlock must not be set. DEPRECATED - Use passwordPolicies.Note:Complexity-based values of PasswordQuality, that is, COMPLEXITY_LOW, COMPLEXITY_MEDIUM, and COMPLEXITY_HIGH, cannot be used here. unified_lock_settings cannot be used here.',
        }),
        permissionGrants: z
          .array(PermissionGrantSchema)
          .exactOptional()
          .openapi({
            description:
              'Explicit permission or group grants or denials for all apps. These values override the default_permission_policy.',
          }),
        permittedAccessibilityServices: PackageNameListSchema.exactOptional().openapi({
          description:
            "Specifies permitted accessibility services. If the field is not set, any accessibility service can be used. If the field is set, only the accessibility services in this list and the system's built-in accessibility service can be used. In particular, if the field is set to empty, only the system's built-in accessibility servicess can be used. This can be set on fully managed devices and on work profiles. When applied to a work profile, this affects both the personal profile and the work profile.",
        }),
        permittedInputMethods: PackageNameListSchema.exactOptional().openapi({
          description:
            'If present, only the input methods provided by packages in this list are permitted. If this field is present, but the list is empty, then only system input methods are permitted.',
        }),
        persistentPreferredActivities: z
          .array(PersistentPreferredActivitySchema)
          .exactOptional()
          .openapi({ description: 'Default intent handler activities.' }),
        personalUsagePolicies: PersonalUsagePoliciesSchema.exactOptional().openapi({
          description: 'Policies managing personal usage on a company-owned device.',
        }),
        playStoreMode: z
          .enum(['PLAY_STORE_MODE_UNSPECIFIED', 'WHITELIST', 'BLACKLIST'])
          .exactOptional()
          .openapi({
            description:
              'This mode controls which apps are available to the user in the Play Store and the behavior on the device when apps are removed from the policy.',
          }),
        policyEnforcementRules: z
          .array(PolicyEnforcementRuleSchema)
          .exactOptional()
          .openapi({
            description:
              'Rules that define the behavior when a particular policy can not be applied on device',
          }),
        preferentialNetworkService: z
          .enum([
            'PREFERENTIAL_NETWORK_SERVICE_UNSPECIFIED',
            'PREFERENTIAL_NETWORK_SERVICE_DISABLED',
            'PREFERENTIAL_NETWORK_SERVICE_ENABLED',
          ])
          .exactOptional()
          .openapi({
            description:
              "Controls whether preferential network service is enabled on the work profile. For example, an organization may have an agreement with a carrier that all of the work data from its employees' devices will be sent via a network service dedicated for enterprise use. An example of a supported preferential network service is the enterprise slice on 5G networks. This has no effect on fully managed devices.",
          }),
        privateKeySelectionEnabled: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Allows showing UI on a device for a user to choose a private key alias if there are no matching rules in ChoosePrivateKeyRules. For devices below Android P, setting this may leave enterprise keys vulnerable.',
          }),
        recommendedGlobalProxy: ProxyInfoSchema.exactOptional().openapi({
          description:
            'The network-independent global HTTP proxy. Typically proxies should be configured per-network in open_network_configuration. However for unusual configurations like general internal filtering a global HTTP proxy may be useful. If the proxy is not accessible, network access may break. The global proxy is only a recommendation and some apps may ignore it.',
        }),
        removeUserDisabled: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether removing other users is disabled.' }),
        safeBootDisabled: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether rebooting the device into safe boot is disabled.' }),
        screenCaptureDisabled: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether screen capture is disabled.' }),
        setUserIconDisabled: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether changing the user icon is disabled.' }),
        setWallpaperDisabled: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether changing the wallpaper is disabled.' }),
        setupActions: z
          .array(SetupActionSchema)
          .exactOptional()
          .openapi({
            description:
              'Action to take during the setup process. At most one action may be specified.',
          }),
        shareLocationDisabled: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether location sharing is disabled. share_location_disabled is supported for both fully managed devices and personally owned work profiles.',
          }),
        shortSupportMessage: UserFacingMessageSchema.exactOptional().openapi({
          description:
            'A message displayed to the user in the settings screen wherever functionality has been disabled by the admin. If the message is longer than 200 characters it may be truncated.',
        }),
        skipFirstUseHintsEnabled: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Flag to skip hints on the first use. Enterprise admin can enable the system recommendation for apps to skip their user tutorial and other introductory hints on first start-up.',
          }),
        smsDisabled: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether sending and receiving SMS messages is disabled.' }),
        statusBarDisabled: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether the status bar is disabled. This disables notifications, quick settings, and other screen overlays that allow escape from full-screen mode. DEPRECATED. To disable the status bar on a kiosk device, use InstallType KIOSK or kioskCustomLauncherEnabled.',
          }),
        statusReportingSettings: StatusReportingSettingsSchema.exactOptional().openapi({
          description: 'Status reporting settings',
        }),
        stayOnPluggedModes: z
          .array(z.enum(['BATTERY_PLUGGED_MODE_UNSPECIFIED', 'AC', 'USB', 'WIRELESS']))
          .exactOptional()
          .openapi({
            description:
              "The battery plugged in modes for which the device stays on. When using this setting, it is recommended to clear maximum_time_to_lock so that the device doesn't lock itself while it stays on.",
          }),
        systemUpdate: SystemUpdateSchema.exactOptional().openapi({
          description:
            'The system update policy, which controls how OS updates are applied. If the update type is WINDOWED, the update window will automatically apply to Play app updates as well.',
        }),
        tetheringConfigDisabled: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Whether configuring tethering and portable hotspots is disabled.',
          }),
        uninstallAppsDisabled: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether user uninstallation of applications is disabled. This prevents apps from being uninstalled, even those removed using applications',
          }),
        unmuteMicrophoneDisabled: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'If microphone_access is set to any value other than MICROPHONE_ACCESS_UNSPECIFIED, this has no effect. Otherwise this field controls whether microphones are disabled: If true, all microphones are disabled, otherwise they are available. This is available only on fully managed devices.',
          }),
        usageLog: UsageLogSchema.exactOptional().openapi({
          description: 'Configuration of device activity logging.',
        }),
        usbFileTransferDisabled: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether transferring files over USB is disabled. This is supported only on company-owned devices.',
          }),
        usbMassStorageEnabled: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether USB storage is enabled. Deprecated.' }),
        version: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The version of the policy. This is a read-only field. The version is incremented each time the policy is updated.',
          }),
        vpnConfigDisabled: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether configuring VPN is disabled.' }),
        wifiConfigDisabled: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              "Whether configuring Wi-Fi access points is disabled. Note: If a network connection can't be made at boot time and configuring Wi-Fi is disabled then network escape hatch will be shown in order to refresh the device policy (see networkEscapeHatchEnabled).",
          }),
        wifiConfigsLockdownEnabled: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'DEPRECATED - Use wifi_config_disabled.' }),
      })
      .openapi({
        description:
          'A policy resource represents a group of settings that govern the behavior of a managed device and the apps installed on it.',
        required: [],
      }),
  )
  .openapi('Policy')

const ListPoliciesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description: 'If there are more results, a token to retrieve next page of results.',
      }),
    policies: z
      .array(PolicySchema)
      .exactOptional()
      .openapi({ description: 'The list of policies.' }),
  })
  .openapi({
    description: 'Response to a request to list policies for a given enterprise.',
    required: [],
  })
  .openapi('ListPoliciesResponse')

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
  .openapi({
    description: 'An icon for a web app. Supported formats are: png, jpg and webp.',
    required: [],
  })
  .openapi('WebAppIcon')

const WebAppSchema = z
  .object({
    displayMode: z
      .enum(['DISPLAY_MODE_UNSPECIFIED', 'MINIMAL_UI', 'STANDALONE', 'FULL_SCREEN'])
      .exactOptional()
      .openapi({ description: 'The display mode of the web app.' }),
    icons: z
      .array(WebAppIconSchema)
      .exactOptional()
      .openapi({ description: 'A list of icons for the web app. Must have at least one element.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the web app, which is generated by the server during creation in the form enterprises/{enterpriseId}/webApps/{packageName}.',
      }),
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
          'The current version of the app.Note that the version can automatically increase during the lifetime of the web app, while Google does internal housekeeping to keep the web app up-to-date.',
      }),
  })
  .openapi({ description: 'A web app.', required: [] })
  .openapi('WebApp')

const ListWebAppsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description: 'If there are more results, a token to retrieve next page of results.',
      }),
    webApps: z
      .array(WebAppSchema)
      .exactOptional()
      .openapi({ description: 'The list of web apps.' }),
  })
  .openapi({
    description: 'Response to a request to list web apps for a given enterprise.',
    required: [],
  })
  .openapi('ListWebAppsResponse')

const SignupUrlSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the resource. Use this value in the signupUrl field when calling enterprises.create to complete the enterprise signup flow.',
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A URL where an enterprise admin can register their enterprise. The page can't be rendered in an iframe.",
      }),
  })
  .openapi({ description: 'An enterprise signup URL.', required: [] })
  .openapi('SignupUrl')

const WebTokenSchema = z
  .object({
    enabledFeatures: z
      .array(
        z.enum([
          'FEATURE_UNSPECIFIED',
          'PLAY_SEARCH',
          'PRIVATE_APPS',
          'WEB_APPS',
          'STORE_BUILDER',
          'MANAGED_CONFIGURATIONS',
          'ZERO_TOUCH_CUSTOMER_MANAGEMENT',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'The features to enable. Use this if you want to control exactly which feature(s) will be activated; leave empty to allow all features.Restrictions / things to note: - If no features are listed here, all features are enabled — this is the default behavior where you give access to all features to your admins. - This must not contain any FEATURE_UNSPECIFIED values. - Repeated values are ignored ',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the web token, which is generated by the server during creation in the form enterprises/{enterpriseId}/webTokens/{webTokenId}.',
      }),
    parentFrameUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URL of the parent frame hosting the iframe with the embedded UI. To prevent XSS, the iframe may not be hosted at other URLs. The URL must use the https scheme.',
      }),
    permissions: z
      .array(z.enum(['WEB_TOKEN_PERMISSION_UNSPECIFIED', 'APPROVE_APPS']))
      .exactOptional()
      .openapi({
        description:
          'Permissions available to an admin in the embedded UI. An admin must have all of these permissions in order to view the UI. This field is deprecated.',
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The token value which is used in the hosting page to generate the iframe with the embedded UI. This is a read-only field generated by the server.',
      }),
  })
  .openapi({
    description: 'A web token used to access the managed Google Play iframe.',
    required: [],
  })
  .openapi('WebToken')

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
        'https://www.googleapis.com/auth/androidmanagement':
          'Manage Android devices and apps for your customers',
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
        'https://www.googleapis.com/auth/androidmanagement':
          'Manage Android devices and apps for your customers',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getV1EnterprisesRoute = createRoute({
  method: 'get',
  path: '/v1/enterprises',
  tags: ['enterprises'],
  description: 'Lists EMM-managed enterprises. Only BASIC fields are returned.',
  operationId: 'androidmanagement.enterprises.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
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
              'The requested page size. The actual page size may be fixed to a min or max value.',
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
            description: 'A token identifying a page of results returned by the server.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      projectId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. The Cloud project ID of the EMM managing the enterprises.',
            in: 'query',
            name: 'projectId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      view: z
        .enum(['ENTERPRISE_VIEW_UNSPECIFIED', 'BASIC'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies which Enterprise fields to return. This method only supports BASIC.',
            in: 'query',
            name: 'view',
            schema: { enum: ['ENTERPRISE_VIEW_UNSPECIFIED', 'BASIC'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListEnterprisesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidmanagement'],
      Oauth2c: ['https://www.googleapis.com/auth/androidmanagement'],
    },
  ],
})

export const postV1EnterprisesRoute = createRoute({
  method: 'post',
  path: '/v1/enterprises',
  tags: ['enterprises'],
  description:
    'Creates an enterprise. This is the last step in the enterprise signup flow. See also: SigninDetail',
  operationId: 'androidmanagement.enterprises.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      agreementAccepted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether the enterprise admin has seen and agreed to the managed Google Play Agreement (https://www.android.com/enterprise/terms/). Do not set this field for any customer-managed enterprise (https://developers.google.com/android/management/create-enterprise#customer-managed_enterprises). Set this to field to true for all EMM-managed enterprises (https://developers.google.com/android/management/create-enterprise#emm-managed_enterprises).',
            in: 'query',
            name: 'agreementAccepted',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      enterpriseToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The enterprise token appended to the callback URL. Set this when creating a customer-managed enterprise (https://developers.google.com/android/management/create-enterprise#customer-managed_enterprises) and not when creating a deprecated EMM-managed enterprise (https://developers.google.com/android/management/create-enterprise#emm-managed_enterprises).',
            in: 'query',
            name: 'enterpriseToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      projectId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The ID of the Google Cloud Platform project which will own the enterprise.',
            in: 'query',
            name: 'projectId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      signupUrlName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The name of the SignupUrl used to sign up for the enterprise. Set this when creating a customer-managed enterprise (https://developers.google.com/android/management/create-enterprise#customer-managed_enterprises) and not when creating a deprecated EMM-managed enterprise (https://developers.google.com/android/management/create-enterprise#emm-managed_enterprises).',
            in: 'query',
            name: 'signupUrlName',
            schema: { type: 'string' },
            required: false,
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
      Oauth2: ['https://www.googleapis.com/auth/androidmanagement'],
      Oauth2c: ['https://www.googleapis.com/auth/androidmanagement'],
    },
  ],
})

export const postV1SignupUrlsRoute = createRoute({
  method: 'post',
  path: '/v1/signupUrls',
  tags: ['signupUrls'],
  description: 'Creates an enterprise signup URL.',
  operationId: 'androidmanagement.signupUrls.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
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
              'The callback URL that the admin will be redirected to after successfully creating an enterprise. Before redirecting there the system will add a query parameter to this URL named enterpriseToken which will contain an opaque token to be used for the create enterprise request. The URL will be parsed then reformatted in order to add the enterpriseToken parameter, so there may be some minor formatting changes.',
            in: 'query',
            name: 'callbackUrl',
            schema: { type: 'string' },
            required: false,
          },
        }),
      projectId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The ID of the Google Cloud Platform project which will own the enterprise.',
            in: 'query',
            name: 'projectId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SignupUrlSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidmanagement'],
      Oauth2c: ['https://www.googleapis.com/auth/androidmanagement'],
    },
  ],
})

export const getV1NameRoute = createRoute({
  method: 'get',
  path: '/v1/{name}',
  tags: ['enterprises'],
  description: 'Gets a web app.',
  operationId: 'androidmanagement.enterprises.webApps.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
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
            description: 'The standard list filter.',
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
            description: 'The standard list page size.',
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
            description: 'The standard list page token.',
            in: 'query',
            name: 'pageToken',
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
              'The name of the web app in the form enterprises/{enterpriseId}/webApp/{packageName}.',
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
      content: { 'application/json': { schema: WebAppSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidmanagement'],
      Oauth2c: ['https://www.googleapis.com/auth/androidmanagement'],
    },
  ],
})

export const deleteV1NameRoute = createRoute({
  method: 'delete',
  path: '/v1/{name}',
  tags: ['enterprises'],
  description: 'Deletes a web app.',
  operationId: 'androidmanagement.enterprises.webApps.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      wipeDataFlags: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.enum([
              'WIPE_DATA_FLAG_UNSPECIFIED',
              'PRESERVE_RESET_PROTECTION_DATA',
              'WIPE_EXTERNAL_STORAGE',
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional flags that control the device wiping behavior.',
            explode: true,
            in: 'query',
            name: 'wipeDataFlags',
            schema: {
              items: {
                enum: [
                  'WIPE_DATA_FLAG_UNSPECIFIED',
                  'PRESERVE_RESET_PROTECTION_DATA',
                  'WIPE_EXTERNAL_STORAGE',
                ],
                type: 'string',
              },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
        }),
      wipeReasonMessage: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. A short message displayed to the user before wiping the work profile on personal devices. This has no effect on company owned devices. The maximum message length is 200 characters.',
            in: 'query',
            name: 'wipeReasonMessage',
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
              'The name of the web app in the form enterprises/{enterpriseId}/webApps/{packageName}.',
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
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidmanagement'],
      Oauth2c: ['https://www.googleapis.com/auth/androidmanagement'],
    },
  ],
})

export const patchV1NameRoute = createRoute({
  method: 'patch',
  path: '/v1/{name}',
  tags: ['enterprises'],
  description: 'Updates a web app.',
  operationId: 'androidmanagement.enterprises.webApps.patch',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
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
              'The field mask indicating the fields to update. If not set, all modifiable fields will be modified.',
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
              'The name of the web app in the form enterprises/{enterpriseId}/webApps/{packageName}.',
            in: 'path',
            name: 'name',
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
      Oauth2: ['https://www.googleapis.com/auth/androidmanagement'],
      Oauth2c: ['https://www.googleapis.com/auth/androidmanagement'],
    },
  ],
})

export const postV1NameCancelRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:cancel',
  tags: ['enterprises'],
  description:
    "Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.",
  operationId: 'androidmanagement.enterprises.devices.operations.cancel',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
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
            description: 'The name of the operation resource to be cancelled.',
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
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidmanagement'],
      Oauth2c: ['https://www.googleapis.com/auth/androidmanagement'],
    },
  ],
})

export const postV1NameIssueCommandRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:issueCommand',
  tags: ['enterprises'],
  description:
    'Issues a command to a device. The Operation resource returned contains a Command in its metadata field. Use the get operation method to get the status of the command.',
  operationId: 'androidmanagement.enterprises.devices.issueCommand',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
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
              'The name of the device in the form enterprises/{enterpriseId}/devices/{deviceId}.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CommandSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidmanagement'],
      Oauth2c: ['https://www.googleapis.com/auth/androidmanagement'],
    },
  ],
})

export const getV1ParentDevicesRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/devices',
  tags: ['enterprises'],
  description:
    'Lists devices for a given enterprise. Deleted devices are not returned in the response.',
  operationId: 'androidmanagement.enterprises.devices.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
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
              'The requested page size. The actual page size may be fixed to a min or max value.',
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
            description: 'A token identifying a page of results returned by the server.',
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
            description: 'The name of the enterprise in the form enterprises/{enterpriseId}.',
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
      content: { 'application/json': { schema: ListDevicesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidmanagement'],
      Oauth2c: ['https://www.googleapis.com/auth/androidmanagement'],
    },
  ],
})

export const getV1ParentEnrollmentTokensRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/enrollmentTokens',
  tags: ['enterprises'],
  description:
    "Lists active, unexpired enrollment tokens for a given enterprise. The list items contain only a partial view of EnrollmentToken: all the fields but name and expiration_timestamp are empty. This method is meant to help manage active enrollment tokens lifecycle. For security reasons, it's recommended to delete active enrollment tokens as soon as they're not intended to be used anymore.",
  operationId: 'androidmanagement.enterprises.enrollmentTokens.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
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
              'The requested page size. The service may return fewer than this value. If unspecified, at most 10 items will be returned. The maximum value is 100; values above 100 will be coerced to 100.',
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
            description: 'A token identifying a page of results returned by the server.',
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
              'Required. The name of the enterprise in the form enterprises/{enterpriseId}.',
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
      content: { 'application/json': { schema: ListEnrollmentTokensResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidmanagement'],
      Oauth2c: ['https://www.googleapis.com/auth/androidmanagement'],
    },
  ],
})

export const postV1ParentEnrollmentTokensRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/enrollmentTokens',
  tags: ['enterprises'],
  description:
    "Creates an enrollment token for a given enterprise. It's up to the caller's responsibility to manage the lifecycle of newly created tokens and deleting them when they're not intended to be used anymore. Once an enrollment token has been created, it's not possible to retrieve the token's content anymore using AM API. It is recommended for EMMs to securely store the token if it's intended to be reused.",
  operationId: 'androidmanagement.enterprises.enrollmentTokens.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
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
            description: 'The name of the enterprise in the form enterprises/{enterpriseId}.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EnrollmentTokenSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EnrollmentTokenSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidmanagement'],
      Oauth2c: ['https://www.googleapis.com/auth/androidmanagement'],
    },
  ],
})

export const getV1ParentPoliciesRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/policies',
  tags: ['enterprises'],
  description: 'Lists policies for a given enterprise.',
  operationId: 'androidmanagement.enterprises.policies.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
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
              'The requested page size. The actual page size may be fixed to a min or max value.',
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
            description: 'A token identifying a page of results returned by the server.',
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
            description: 'The name of the enterprise in the form enterprises/{enterpriseId}.',
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
      content: { 'application/json': { schema: ListPoliciesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidmanagement'],
      Oauth2c: ['https://www.googleapis.com/auth/androidmanagement'],
    },
  ],
})

export const getV1ParentWebAppsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/webApps',
  tags: ['enterprises'],
  description: 'Lists web apps for a given enterprise.',
  operationId: 'androidmanagement.enterprises.webApps.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
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
              'The requested page size. This is a hint and the actual page size in the response may be different.',
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
            description: 'A token identifying a page of results returned by the server.',
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
            description: 'The name of the enterprise in the form enterprises/{enterpriseId}.',
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
      content: { 'application/json': { schema: ListWebAppsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidmanagement'],
      Oauth2c: ['https://www.googleapis.com/auth/androidmanagement'],
    },
  ],
})

export const postV1ParentWebAppsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/webApps',
  tags: ['enterprises'],
  description: 'Creates a web app.',
  operationId: 'androidmanagement.enterprises.webApps.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
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
            description: 'The name of the enterprise in the form enterprises/{enterpriseId}.',
            in: 'path',
            name: 'parent',
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
      Oauth2: ['https://www.googleapis.com/auth/androidmanagement'],
      Oauth2c: ['https://www.googleapis.com/auth/androidmanagement'],
    },
  ],
})

export const postV1ParentWebTokensRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/webTokens',
  tags: ['enterprises'],
  description:
    'Creates a web token to access an embeddable managed Google Play web UI for a given enterprise.',
  operationId: 'androidmanagement.enterprises.webTokens.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
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
            description: 'The name of the enterprise in the form enterprises/{enterpriseId}.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: WebTokenSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: WebTokenSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidmanagement'],
      Oauth2c: ['https://www.googleapis.com/auth/androidmanagement'],
    },
  ],
})
