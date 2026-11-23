type ContactInfo = {
  contactEmail?: string | undefined
  dataProtectionOfficerEmail?: string | undefined
  dataProtectionOfficerName?: string | undefined
  dataProtectionOfficerPhone?: string | undefined
  euRepresentativeEmail?: string | undefined
  euRepresentativeName?: string | undefined
  euRepresentativePhone?: string | undefined
}
type ExternalData = { sha256Hash?: string | undefined; url?: string | undefined }
type SigninDetail = {
  allowPersonalUsage?:
    | 'ALLOW_PERSONAL_USAGE_UNSPECIFIED'
    | 'PERSONAL_USAGE_ALLOWED'
    | 'PERSONAL_USAGE_DISALLOWED'
    | undefined
  qrCode?: string | undefined
  signinEnrollmentToken?: string | undefined
  signinUrl?: string | undefined
}
type UserFacingMessage = {
  defaultMessage?: string | undefined
  localizedMessages?: { [x: string]: string } | undefined
}
type TermsAndConditions = {
  content?: UserFacingMessage | undefined
  header?: UserFacingMessage | undefined
}
type Enterprise = {
  appAutoApprovalEnabled?: boolean | undefined
  contactInfo?: ContactInfo | undefined
  enabledNotificationTypes?:
    | (
        | 'NOTIFICATION_TYPE_UNSPECIFIED'
        | 'ENROLLMENT'
        | 'COMPLIANCE_REPORT'
        | 'STATUS_REPORT'
        | 'COMMAND'
        | 'USAGE_LOGS'
      )[]
    | undefined
  enterpriseDisplayName?: string | undefined
  logo?: ExternalData | undefined
  name?: string | undefined
  primaryColor?: number | undefined
  pubsubTopic?: string | undefined
  signinDetails?: SigninDetail[] | undefined
  termsAndConditions?: TermsAndConditions[] | undefined
}
type ListEnterprisesResponse = {
  enterprises?: Enterprise[] | undefined
  nextPageToken?: string | undefined
}
type SignupUrl = { name?: string | undefined; url?: string | undefined }
type Empty = { [x: string]: unknown }
type WebAppIcon = { imageData?: string | undefined }
type WebApp = {
  displayMode?: 'DISPLAY_MODE_UNSPECIFIED' | 'MINIMAL_UI' | 'STANDALONE' | 'FULL_SCREEN' | undefined
  icons?: WebAppIcon[] | undefined
  name?: string | undefined
  startUrl?: string | undefined
  title?: string | undefined
  versionCode?: string | undefined
}
type ClearAppsDataParams = { packageNames?: string[] | undefined }
type PerAppResult = {
  clearingResult?:
    | 'CLEARING_RESULT_UNSPECIFIED'
    | 'SUCCESS'
    | 'APP_NOT_FOUND'
    | 'APP_PROTECTED'
    | 'API_LEVEL'
    | undefined
}
type ClearAppsDataStatus = { results?: { [x: string]: PerAppResult } | undefined }
type Command = {
  clearAppsDataParams?: ClearAppsDataParams | undefined
  clearAppsDataStatus?: ClearAppsDataStatus | undefined
  createTime?: string | undefined
  duration?: string | undefined
  errorCode?:
    | 'COMMAND_ERROR_CODE_UNSPECIFIED'
    | 'UNKNOWN'
    | 'API_LEVEL'
    | 'MANAGEMENT_MODE'
    | 'INVALID_VALUE'
    | 'UNSUPPORTED'
    | undefined
  newPassword?: string | undefined
  resetPasswordFlags?:
    | (
        | 'RESET_PASSWORD_FLAG_UNSPECIFIED'
        | 'REQUIRE_ENTRY'
        | 'DO_NOT_ASK_CREDENTIALS_ON_BOOT'
        | 'LOCK_NOW'
      )[]
    | undefined
  type?:
    | 'COMMAND_TYPE_UNSPECIFIED'
    | 'LOCK'
    | 'RESET_PASSWORD'
    | 'REBOOT'
    | 'RELINQUISH_OWNERSHIP'
    | 'CLEAR_APP_DATA'
    | undefined
  userName?: string | undefined
}
type Status = {
  code?: number | undefined
  details?: { [x: string]: { [x: string]: unknown } }[] | undefined
  message?: string | undefined
}
type Operation = {
  done?: boolean | undefined
  error?: Status | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name?: string | undefined
  response?: { [x: string]: { [x: string]: unknown } } | undefined
}
type ApplicationEvent = {
  createTime?: string | undefined
  eventType?:
    | 'APPLICATION_EVENT_TYPE_UNSPECIFIED'
    | 'INSTALLED'
    | 'CHANGED'
    | 'DATA_CLEARED'
    | 'REMOVED'
    | 'REPLACED'
    | 'RESTARTED'
    | 'PINNED'
    | 'UNPINNED'
    | undefined
}
type KeyedAppState = {
  createTime?: string | undefined
  data?: string | undefined
  key?: string | undefined
  lastUpdateTime?: string | undefined
  message?: string | undefined
  severity?: 'SEVERITY_UNSPECIFIED' | 'INFO' | 'ERROR' | undefined
}
type ApplicationReport = {
  applicationSource?:
    | 'APPLICATION_SOURCE_UNSPECIFIED'
    | 'SYSTEM_APP_FACTORY_VERSION'
    | 'SYSTEM_APP_UPDATED_VERSION'
    | 'INSTALLED_FROM_PLAY_STORE'
    | undefined
  displayName?: string | undefined
  events?: ApplicationEvent[] | undefined
  installerPackageName?: string | undefined
  keyedAppStates?: KeyedAppState[] | undefined
  packageName?: string | undefined
  packageSha256Hash?: string | undefined
  signingKeyCertFingerprints?: string[] | undefined
  state?: 'APPLICATION_STATE_UNSPECIFIED' | 'REMOVED' | 'INSTALLED' | undefined
  versionCode?: number | undefined
  versionName?: string | undefined
}
type PasswordRequirements = {
  maximumFailedPasswordsForWipe?: number | undefined
  passwordExpirationTimeout?: string | undefined
  passwordHistoryLength?: number | undefined
  passwordMinimumLength?: number | undefined
  passwordMinimumLetters?: number | undefined
  passwordMinimumLowerCase?: number | undefined
  passwordMinimumNonLetter?: number | undefined
  passwordMinimumNumeric?: number | undefined
  passwordMinimumSymbols?: number | undefined
  passwordMinimumUpperCase?: number | undefined
  passwordQuality?:
    | 'PASSWORD_QUALITY_UNSPECIFIED'
    | 'BIOMETRIC_WEAK'
    | 'SOMETHING'
    | 'NUMERIC'
    | 'NUMERIC_COMPLEX'
    | 'ALPHABETIC'
    | 'ALPHANUMERIC'
    | 'COMPLEX'
    | 'COMPLEXITY_LOW'
    | 'COMPLEXITY_MEDIUM'
    | 'COMPLEXITY_HIGH'
    | undefined
  passwordScope?: 'SCOPE_UNSPECIFIED' | 'SCOPE_DEVICE' | 'SCOPE_PROFILE' | undefined
  requirePasswordUnlock?:
    | 'REQUIRE_PASSWORD_UNLOCK_UNSPECIFIED'
    | 'USE_DEFAULT_DEVICE_TIMEOUT'
    | 'REQUIRE_EVERY_DAY'
    | undefined
  unifiedLockSettings?:
    | 'UNIFIED_LOCK_SETTINGS_UNSPECIFIED'
    | 'ALLOW_UNIFIED_WORK_AND_PERSONAL_LOCK'
    | 'REQUIRE_SEPARATE_WORK_LOCK'
    | undefined
}
type CommonCriteriaModeInfo = {
  commonCriteriaModeStatus?:
    | 'COMMON_CRITERIA_MODE_STATUS_UNKNOWN'
    | 'COMMON_CRITERIA_MODE_DISABLED'
    | 'COMMON_CRITERIA_MODE_ENABLED'
    | undefined
}
type DeviceSettings = {
  adbEnabled?: boolean | undefined
  developmentSettingsEnabled?: boolean | undefined
  encryptionStatus?:
    | 'ENCRYPTION_STATUS_UNSPECIFIED'
    | 'UNSUPPORTED'
    | 'INACTIVE'
    | 'ACTIVATING'
    | 'ACTIVE'
    | 'ACTIVE_DEFAULT_KEY'
    | 'ACTIVE_PER_USER'
    | undefined
  isDeviceSecure?: boolean | undefined
  isEncrypted?: boolean | undefined
  unknownSourcesEnabled?: boolean | undefined
  verifyAppsEnabled?: boolean | undefined
}
type Display = {
  density?: number | undefined
  displayId?: number | undefined
  height?: number | undefined
  name?: string | undefined
  refreshRate?: number | undefined
  state?: 'DISPLAY_STATE_UNSPECIFIED' | 'OFF' | 'ON' | 'DOZE' | 'SUSPENDED' | undefined
  width?: number | undefined
}
type HardwareInfo = {
  batteryShutdownTemperatures?: number[] | undefined
  batteryThrottlingTemperatures?: number[] | undefined
  brand?: string | undefined
  cpuShutdownTemperatures?: number[] | undefined
  cpuThrottlingTemperatures?: number[] | undefined
  deviceBasebandVersion?: string | undefined
  enterpriseSpecificId?: string | undefined
  gpuShutdownTemperatures?: number[] | undefined
  gpuThrottlingTemperatures?: number[] | undefined
  hardware?: string | undefined
  manufacturer?: string | undefined
  model?: string | undefined
  serialNumber?: string | undefined
  skinShutdownTemperatures?: number[] | undefined
  skinThrottlingTemperatures?: number[] | undefined
}
type HardwareStatus = {
  batteryTemperatures?: number[] | undefined
  cpuTemperatures?: number[] | undefined
  cpuUsages?: number[] | undefined
  createTime?: string | undefined
  fanSpeeds?: number[] | undefined
  gpuTemperatures?: number[] | undefined
  skinTemperatures?: number[] | undefined
}
type MemoryEvent = {
  byteCount?: string | undefined
  createTime?: string | undefined
  eventType?:
    | 'MEMORY_EVENT_TYPE_UNSPECIFIED'
    | 'RAM_MEASURED'
    | 'INTERNAL_STORAGE_MEASURED'
    | 'EXTERNAL_STORAGE_DETECTED'
    | 'EXTERNAL_STORAGE_REMOVED'
    | 'EXTERNAL_STORAGE_MEASURED'
    | undefined
}
type MemoryInfo = { totalInternalStorage?: string | undefined; totalRam?: string | undefined }
type TelephonyInfo = { carrierName?: string | undefined; phoneNumber?: string | undefined }
type NetworkInfo = {
  imei?: string | undefined
  meid?: string | undefined
  networkOperatorName?: string | undefined
  telephonyInfos?: TelephonyInfo[] | undefined
  wifiMacAddress?: string | undefined
}
type OncWifiContext = { wifiGuid?: string | undefined }
type PasswordPoliciesContext = {
  passwordPolicyScope?: 'SCOPE_UNSPECIFIED' | 'SCOPE_DEVICE' | 'SCOPE_PROFILE' | undefined
}
type SpecificNonComplianceContext = {
  oncWifiContext?: OncWifiContext | undefined
  passwordPoliciesContext?: PasswordPoliciesContext | undefined
}
type NonComplianceDetail = {
  currentValue?: { [x: string]: unknown } | undefined
  fieldPath?: string | undefined
  installationFailureReason?:
    | 'INSTALLATION_FAILURE_REASON_UNSPECIFIED'
    | 'INSTALLATION_FAILURE_REASON_UNKNOWN'
    | 'IN_PROGRESS'
    | 'NOT_FOUND'
    | 'NOT_COMPATIBLE_WITH_DEVICE'
    | 'NOT_APPROVED'
    | 'PERMISSIONS_NOT_ACCEPTED'
    | 'NOT_AVAILABLE_IN_COUNTRY'
    | 'NO_LICENSES_REMAINING'
    | 'NOT_ENROLLED'
    | 'USER_INVALID'
    | undefined
  nonComplianceReason?:
    | 'NON_COMPLIANCE_REASON_UNSPECIFIED'
    | 'API_LEVEL'
    | 'MANAGEMENT_MODE'
    | 'USER_ACTION'
    | 'INVALID_VALUE'
    | 'APP_NOT_INSTALLED'
    | 'UNSUPPORTED'
    | 'APP_INSTALLED'
    | 'PENDING'
    | 'APP_INCOMPATIBLE'
    | 'APP_NOT_UPDATED'
    | undefined
  packageName?: string | undefined
  settingName?: string | undefined
  specificNonComplianceContext?: SpecificNonComplianceContext | undefined
  specificNonComplianceReason?:
    | 'SPECIFIC_NON_COMPLIANCE_REASON_UNSPECIFIED'
    | 'PASSWORD_POLICIES_USER_CREDENTIALS_CONFIRMATION_REQUIRED'
    | 'PASSWORD_POLICIES_PASSWORD_EXPIRED'
    | 'PASSWORD_POLICIES_PASSWORD_NOT_SUFFICIENT'
    | 'ONC_WIFI_INVALID_VALUE'
    | 'ONC_WIFI_API_LEVEL'
    | undefined
}
type PowerManagementEvent = {
  batteryLevel?: number | undefined
  createTime?: string | undefined
  eventType?:
    | 'POWER_MANAGEMENT_EVENT_TYPE_UNSPECIFIED'
    | 'BATTERY_LEVEL_COLLECTED'
    | 'POWER_CONNECTED'
    | 'POWER_DISCONNECTED'
    | 'BATTERY_LOW'
    | 'BATTERY_OKAY'
    | 'BOOT_COMPLETED'
    | 'SHUTDOWN'
    | undefined
}
type PostureDetail = {
  advice?: UserFacingMessage[] | undefined
  securityRisk?:
    | 'SECURITY_RISK_UNSPECIFIED'
    | 'UNKNOWN_OS'
    | 'COMPROMISED_OS'
    | 'HARDWARE_BACKED_EVALUATION_FAILED'
    | undefined
}
type SecurityPosture = {
  devicePosture?:
    | 'POSTURE_UNSPECIFIED'
    | 'SECURE'
    | 'AT_RISK'
    | 'POTENTIALLY_COMPROMISED'
    | undefined
  postureDetails?: PostureDetail[] | undefined
}
type SystemUpdateInfo = {
  updateReceivedTime?: string | undefined
  updateStatus?:
    | 'UPDATE_STATUS_UNKNOWN'
    | 'UP_TO_DATE'
    | 'UNKNOWN_UPDATE_AVAILABLE'
    | 'SECURITY_UPDATE_AVAILABLE'
    | 'OS_UPDATE_AVAILABLE'
    | undefined
}
type SoftwareInfo = {
  androidBuildNumber?: string | undefined
  androidBuildTime?: string | undefined
  androidDevicePolicyVersionCode?: number | undefined
  androidDevicePolicyVersionName?: string | undefined
  androidVersion?: string | undefined
  bootloaderVersion?: string | undefined
  deviceBuildSignature?: string | undefined
  deviceKernelVersion?: string | undefined
  primaryLanguageCode?: string | undefined
  securityPatchLevel?: string | undefined
  systemUpdateInfo?: SystemUpdateInfo | undefined
}
type User = { accountIdentifier?: string | undefined }
type Device = {
  apiLevel?: number | undefined
  applicationReports?: ApplicationReport[] | undefined
  appliedPasswordPolicies?: PasswordRequirements[] | undefined
  appliedPolicyName?: string | undefined
  appliedPolicyVersion?: string | undefined
  appliedState?:
    | 'DEVICE_STATE_UNSPECIFIED'
    | 'ACTIVE'
    | 'DISABLED'
    | 'DELETED'
    | 'PROVISIONING'
    | undefined
  commonCriteriaModeInfo?: CommonCriteriaModeInfo | undefined
  deviceSettings?: DeviceSettings | undefined
  disabledReason?: UserFacingMessage | undefined
  displays?: Display[] | undefined
  enrollmentTime?: string | undefined
  enrollmentTokenData?: string | undefined
  enrollmentTokenName?: string | undefined
  hardwareInfo?: HardwareInfo | undefined
  hardwareStatusSamples?: HardwareStatus[] | undefined
  lastPolicyComplianceReportTime?: string | undefined
  lastPolicySyncTime?: string | undefined
  lastStatusReportTime?: string | undefined
  managementMode?: 'MANAGEMENT_MODE_UNSPECIFIED' | 'DEVICE_OWNER' | 'PROFILE_OWNER' | undefined
  memoryEvents?: MemoryEvent[] | undefined
  memoryInfo?: MemoryInfo | undefined
  name?: string | undefined
  networkInfo?: NetworkInfo | undefined
  nonComplianceDetails?: NonComplianceDetail[] | undefined
  ownership?: 'OWNERSHIP_UNSPECIFIED' | 'COMPANY_OWNED' | 'PERSONALLY_OWNED' | undefined
  policyCompliant?: boolean | undefined
  policyName?: string | undefined
  powerManagementEvents?: PowerManagementEvent[] | undefined
  previousDeviceNames?: string[] | undefined
  securityPosture?: SecurityPosture | undefined
  softwareInfo?: SoftwareInfo | undefined
  state?:
    | 'DEVICE_STATE_UNSPECIFIED'
    | 'ACTIVE'
    | 'DISABLED'
    | 'DELETED'
    | 'PROVISIONING'
    | undefined
  systemProperties?: { [x: string]: string } | undefined
  user?: User | undefined
  userName?: string | undefined
}
type ListDevicesResponse = { devices?: Device[] | undefined; nextPageToken?: string | undefined }
type EnrollmentToken = {
  additionalData?: string | undefined
  allowPersonalUsage?:
    | 'ALLOW_PERSONAL_USAGE_UNSPECIFIED'
    | 'PERSONAL_USAGE_ALLOWED'
    | 'PERSONAL_USAGE_DISALLOWED'
    | undefined
  duration?: string | undefined
  expirationTimestamp?: string | undefined
  name?: string | undefined
  oneTimeOnly?: boolean | undefined
  policyName?: string | undefined
  qrCode?: string | undefined
  user?: User | undefined
  value?: string | undefined
}
type ListEnrollmentTokensResponse = {
  enrollmentTokens?: EnrollmentToken[] | undefined
  nextPageToken?: string | undefined
}
type AdvancedSecurityOverrides = {
  commonCriteriaMode?:
    | 'COMMON_CRITERIA_MODE_UNSPECIFIED'
    | 'COMMON_CRITERIA_MODE_DISABLED'
    | 'COMMON_CRITERIA_MODE_ENABLED'
    | undefined
  developerSettings?:
    | 'DEVELOPER_SETTINGS_UNSPECIFIED'
    | 'DEVELOPER_SETTINGS_DISABLED'
    | 'DEVELOPER_SETTINGS_ALLOWED'
    | undefined
  googlePlayProtectVerifyApps?:
    | 'GOOGLE_PLAY_PROTECT_VERIFY_APPS_UNSPECIFIED'
    | 'VERIFY_APPS_ENFORCED'
    | 'VERIFY_APPS_USER_CHOICE'
    | undefined
  personalAppsThatCanReadWorkNotifications?: string[] | undefined
  untrustedAppsPolicy?:
    | 'UNTRUSTED_APPS_POLICY_UNSPECIFIED'
    | 'DISALLOW_INSTALL'
    | 'ALLOW_INSTALL_IN_PERSONAL_PROFILE_ONLY'
    | 'ALLOW_INSTALL_DEVICE_WIDE'
    | undefined
}
type AlwaysOnVpnPackage = {
  lockdownEnabled?: boolean | undefined
  packageName?: string | undefined
}
type ExtensionConfig = {
  notificationReceiver?: string | undefined
  signingKeyFingerprintsSha256?: string[] | undefined
}
type ManagedConfigurationTemplate = {
  configurationVariables?: { [x: string]: string } | undefined
  templateId?: string | undefined
}
type PermissionGrant = {
  permission?: string | undefined
  policy?: 'PERMISSION_POLICY_UNSPECIFIED' | 'PROMPT' | 'GRANT' | 'DENY' | undefined
}
type ApplicationPolicy = {
  accessibleTrackIds?: string[] | undefined
  alwaysOnVpnLockdownExemption?:
    | 'ALWAYS_ON_VPN_LOCKDOWN_EXEMPTION_UNSPECIFIED'
    | 'VPN_LOCKDOWN_ENFORCED'
    | 'VPN_LOCKDOWN_EXEMPTION'
    | undefined
  autoUpdateMode?:
    | 'AUTO_UPDATE_MODE_UNSPECIFIED'
    | 'AUTO_UPDATE_DEFAULT'
    | 'AUTO_UPDATE_POSTPONED'
    | 'AUTO_UPDATE_HIGH_PRIORITY'
    | undefined
  connectedWorkAndPersonalApp?:
    | 'CONNECTED_WORK_AND_PERSONAL_APP_UNSPECIFIED'
    | 'CONNECTED_WORK_AND_PERSONAL_APP_DISALLOWED'
    | 'CONNECTED_WORK_AND_PERSONAL_APP_ALLOWED'
    | undefined
  defaultPermissionPolicy?:
    | 'PERMISSION_POLICY_UNSPECIFIED'
    | 'PROMPT'
    | 'GRANT'
    | 'DENY'
    | undefined
  delegatedScopes?:
    | (
        | 'DELEGATED_SCOPE_UNSPECIFIED'
        | 'CERT_INSTALL'
        | 'MANAGED_CONFIGURATIONS'
        | 'BLOCK_UNINSTALL'
        | 'PERMISSION_GRANT'
        | 'PACKAGE_ACCESS'
        | 'ENABLE_SYSTEM_APP'
        | 'NETWORK_ACTIVITY_LOGS'
        | 'SECURITY_LOGS'
      )[]
    | undefined
  disabled?: boolean | undefined
  extensionConfig?: ExtensionConfig | undefined
  installType?:
    | 'INSTALL_TYPE_UNSPECIFIED'
    | 'PREINSTALLED'
    | 'FORCE_INSTALLED'
    | 'BLOCKED'
    | 'AVAILABLE'
    | 'REQUIRED_FOR_SETUP'
    | 'KIOSK'
    | undefined
  lockTaskAllowed?: boolean | undefined
  managedConfiguration?: { [x: string]: { [x: string]: unknown } } | undefined
  managedConfigurationTemplate?: ManagedConfigurationTemplate | undefined
  minimumVersionCode?: number | undefined
  packageName?: string | undefined
  permissionGrants?: PermissionGrant[] | undefined
  workProfileWidgets?:
    | 'WORK_PROFILE_WIDGETS_UNSPECIFIED'
    | 'WORK_PROFILE_WIDGETS_ALLOWED'
    | 'WORK_PROFILE_WIDGETS_DISALLOWED'
    | undefined
}
type ChoosePrivateKeyRule = {
  packageNames?: string[] | undefined
  privateKeyAlias?: string | undefined
  urlPattern?: string | undefined
}
type ApiLevelCondition = { minApiLevel?: number | undefined }
type NonComplianceDetailCondition = {
  nonComplianceReason?:
    | 'NON_COMPLIANCE_REASON_UNSPECIFIED'
    | 'API_LEVEL'
    | 'MANAGEMENT_MODE'
    | 'USER_ACTION'
    | 'INVALID_VALUE'
    | 'APP_NOT_INSTALLED'
    | 'UNSUPPORTED'
    | 'APP_INSTALLED'
    | 'PENDING'
    | 'APP_INCOMPATIBLE'
    | 'APP_NOT_UPDATED'
    | undefined
  packageName?: string | undefined
  settingName?: string | undefined
}
type ComplianceRule = {
  apiLevelCondition?: ApiLevelCondition | undefined
  disableApps?: boolean | undefined
  nonComplianceDetailCondition?: NonComplianceDetailCondition | undefined
  packageNamesToDisable?: string[] | undefined
}
type CrossProfilePolicies = {
  crossProfileCopyPaste?:
    | 'CROSS_PROFILE_COPY_PASTE_UNSPECIFIED'
    | 'COPY_FROM_WORK_TO_PERSONAL_DISALLOWED'
    | 'CROSS_PROFILE_COPY_PASTE_ALLOWED'
    | undefined
  crossProfileDataSharing?:
    | 'CROSS_PROFILE_DATA_SHARING_UNSPECIFIED'
    | 'CROSS_PROFILE_DATA_SHARING_DISALLOWED'
    | 'DATA_SHARING_FROM_WORK_TO_PERSONAL_DISALLOWED'
    | 'CROSS_PROFILE_DATA_SHARING_ALLOWED'
    | undefined
  showWorkContactsInPersonalProfile?:
    | 'SHOW_WORK_CONTACTS_IN_PERSONAL_PROFILE_UNSPECIFIED'
    | 'SHOW_WORK_CONTACTS_IN_PERSONAL_PROFILE_DISALLOWED'
    | 'SHOW_WORK_CONTACTS_IN_PERSONAL_PROFILE_ALLOWED'
    | undefined
  workProfileWidgetsDefault?:
    | 'WORK_PROFILE_WIDGETS_DEFAULT_UNSPECIFIED'
    | 'WORK_PROFILE_WIDGETS_DEFAULT_ALLOWED'
    | 'WORK_PROFILE_WIDGETS_DEFAULT_DISALLOWED'
    | undefined
}
type KioskCustomization = {
  deviceSettings?:
    | 'DEVICE_SETTINGS_UNSPECIFIED'
    | 'SETTINGS_ACCESS_ALLOWED'
    | 'SETTINGS_ACCESS_BLOCKED'
    | undefined
  powerButtonActions?:
    | 'POWER_BUTTON_ACTIONS_UNSPECIFIED'
    | 'POWER_BUTTON_AVAILABLE'
    | 'POWER_BUTTON_BLOCKED'
    | undefined
  statusBar?:
    | 'STATUS_BAR_UNSPECIFIED'
    | 'NOTIFICATIONS_AND_SYSTEM_INFO_ENABLED'
    | 'NOTIFICATIONS_AND_SYSTEM_INFO_DISABLED'
    | 'SYSTEM_INFO_ONLY'
    | undefined
  systemErrorWarnings?:
    | 'SYSTEM_ERROR_WARNINGS_UNSPECIFIED'
    | 'ERROR_AND_WARNINGS_ENABLED'
    | 'ERROR_AND_WARNINGS_MUTED'
    | undefined
  systemNavigation?:
    | 'SYSTEM_NAVIGATION_UNSPECIFIED'
    | 'NAVIGATION_ENABLED'
    | 'NAVIGATION_DISABLED'
    | 'HOME_BUTTON_ONLY'
    | undefined
}
type ContentProviderEndpoint = {
  packageName?: string | undefined
  signingCertsSha256?: string[] | undefined
  uri?: string | undefined
}
type OncCertificateProvider = {
  certificateReferences?: string[] | undefined
  contentProviderEndpoint?: ContentProviderEndpoint | undefined
}
type PackageNameList = { packageNames?: string[] | undefined }
type PersistentPreferredActivity = {
  actions?: string[] | undefined
  categories?: string[] | undefined
  receiverActivity?: string | undefined
}
type PersonalApplicationPolicy = {
  installType?: 'INSTALL_TYPE_UNSPECIFIED' | 'BLOCKED' | 'AVAILABLE' | undefined
  packageName?: string | undefined
}
type PersonalUsagePolicies = {
  accountTypesWithManagementDisabled?: string[] | undefined
  cameraDisabled?: boolean | undefined
  maxDaysWithWorkOff?: number | undefined
  personalApplications?: PersonalApplicationPolicy[] | undefined
  personalPlayStoreMode?:
    | 'PLAY_STORE_MODE_UNSPECIFIED'
    | 'BLACKLIST'
    | 'BLOCKLIST'
    | 'ALLOWLIST'
    | undefined
  screenCaptureDisabled?: boolean | undefined
}
type BlockAction = {
  blockAfterDays?: number | undefined
  blockScope?:
    | 'BLOCK_SCOPE_UNSPECIFIED'
    | 'BLOCK_SCOPE_WORK_PROFILE'
    | 'BLOCK_SCOPE_DEVICE'
    | undefined
}
type WipeAction = { preserveFrp?: boolean | undefined; wipeAfterDays?: number | undefined }
type PolicyEnforcementRule = {
  blockAction?: BlockAction | undefined
  settingName?: string | undefined
  wipeAction?: WipeAction | undefined
}
type ProxyInfo = {
  excludedHosts?: string[] | undefined
  host?: string | undefined
  pacUri?: string | undefined
  port?: number | undefined
}
type LaunchAppAction = { packageName?: string | undefined }
type SetupAction = {
  description?: UserFacingMessage | undefined
  launchApp?: LaunchAppAction | undefined
  title?: UserFacingMessage | undefined
}
type ApplicationReportingSettings = { includeRemovedApps?: boolean | undefined }
type StatusReportingSettings = {
  applicationReportingSettings?: ApplicationReportingSettings | undefined
  applicationReportsEnabled?: boolean | undefined
  commonCriteriaModeEnabled?: boolean | undefined
  deviceSettingsEnabled?: boolean | undefined
  displayInfoEnabled?: boolean | undefined
  hardwareStatusEnabled?: boolean | undefined
  memoryInfoEnabled?: boolean | undefined
  networkInfoEnabled?: boolean | undefined
  powerManagementEventsEnabled?: boolean | undefined
  softwareInfoEnabled?: boolean | undefined
  systemPropertiesEnabled?: boolean | undefined
}
type Date = { day?: number | undefined; month?: number | undefined; year?: number | undefined }
type FreezePeriod = { endDate?: Date | undefined; startDate?: Date | undefined }
type SystemUpdate = {
  endMinutes?: number | undefined
  freezePeriods?: FreezePeriod[] | undefined
  startMinutes?: number | undefined
  type?: 'SYSTEM_UPDATE_TYPE_UNSPECIFIED' | 'AUTOMATIC' | 'WINDOWED' | 'POSTPONE' | undefined
}
type UsageLog = {
  enabledLogTypes?:
    | ('LOG_TYPE_UNSPECIFIED' | 'SECURITY_LOGS' | 'NETWORK_ACTIVITY_LOGS')[]
    | undefined
  uploadOnCellularAllowed?:
    | ('LOG_TYPE_UNSPECIFIED' | 'SECURITY_LOGS' | 'NETWORK_ACTIVITY_LOGS')[]
    | undefined
}
type Policy = {
  accountTypesWithManagementDisabled?: string[] | undefined
  addUserDisabled?: boolean | undefined
  adjustVolumeDisabled?: boolean | undefined
  advancedSecurityOverrides?: AdvancedSecurityOverrides | undefined
  alwaysOnVpnPackage?: AlwaysOnVpnPackage | undefined
  androidDevicePolicyTracks?: ('APP_TRACK_UNSPECIFIED' | 'PRODUCTION' | 'BETA')[] | undefined
  appAutoUpdatePolicy?:
    | 'APP_AUTO_UPDATE_POLICY_UNSPECIFIED'
    | 'CHOICE_TO_THE_USER'
    | 'NEVER'
    | 'WIFI_ONLY'
    | 'ALWAYS'
    | undefined
  applications?: ApplicationPolicy[] | undefined
  autoDateAndTimeZone?:
    | 'AUTO_DATE_AND_TIME_ZONE_UNSPECIFIED'
    | 'AUTO_DATE_AND_TIME_ZONE_USER_CHOICE'
    | 'AUTO_DATE_AND_TIME_ZONE_ENFORCED'
    | undefined
  autoTimeRequired?: boolean | undefined
  blockApplicationsEnabled?: boolean | undefined
  bluetoothConfigDisabled?: boolean | undefined
  bluetoothContactSharingDisabled?: boolean | undefined
  bluetoothDisabled?: boolean | undefined
  cameraAccess?:
    | 'CAMERA_ACCESS_UNSPECIFIED'
    | 'CAMERA_ACCESS_USER_CHOICE'
    | 'CAMERA_ACCESS_DISABLED'
    | 'CAMERA_ACCESS_ENFORCED'
    | undefined
  cameraDisabled?: boolean | undefined
  cellBroadcastsConfigDisabled?: boolean | undefined
  choosePrivateKeyRules?: ChoosePrivateKeyRule[] | undefined
  complianceRules?: ComplianceRule[] | undefined
  createWindowsDisabled?: boolean | undefined
  credentialsConfigDisabled?: boolean | undefined
  crossProfilePolicies?: CrossProfilePolicies | undefined
  dataRoamingDisabled?: boolean | undefined
  debuggingFeaturesAllowed?: boolean | undefined
  defaultPermissionPolicy?:
    | 'PERMISSION_POLICY_UNSPECIFIED'
    | 'PROMPT'
    | 'GRANT'
    | 'DENY'
    | undefined
  deviceOwnerLockScreenInfo?: UserFacingMessage | undefined
  encryptionPolicy?:
    | 'ENCRYPTION_POLICY_UNSPECIFIED'
    | 'ENABLED_WITHOUT_PASSWORD'
    | 'ENABLED_WITH_PASSWORD'
    | undefined
  ensureVerifyAppsEnabled?: boolean | undefined
  factoryResetDisabled?: boolean | undefined
  frpAdminEmails?: string[] | undefined
  funDisabled?: boolean | undefined
  installAppsDisabled?: boolean | undefined
  installUnknownSourcesAllowed?: boolean | undefined
  keyguardDisabled?: boolean | undefined
  keyguardDisabledFeatures?:
    | (
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
    | undefined
  kioskCustomLauncherEnabled?: boolean | undefined
  kioskCustomization?: KioskCustomization | undefined
  locationMode?:
    | 'LOCATION_MODE_UNSPECIFIED'
    | 'HIGH_ACCURACY'
    | 'SENSORS_ONLY'
    | 'BATTERY_SAVING'
    | 'OFF'
    | 'LOCATION_USER_CHOICE'
    | 'LOCATION_ENFORCED'
    | 'LOCATION_DISABLED'
    | undefined
  longSupportMessage?: UserFacingMessage | undefined
  maximumTimeToLock?: string | undefined
  microphoneAccess?:
    | 'MICROPHONE_ACCESS_UNSPECIFIED'
    | 'MICROPHONE_ACCESS_USER_CHOICE'
    | 'MICROPHONE_ACCESS_DISABLED'
    | 'MICROPHONE_ACCESS_ENFORCED'
    | undefined
  minimumApiLevel?: number | undefined
  mobileNetworksConfigDisabled?: boolean | undefined
  modifyAccountsDisabled?: boolean | undefined
  mountPhysicalMediaDisabled?: boolean | undefined
  name?: string | undefined
  networkEscapeHatchEnabled?: boolean | undefined
  networkResetDisabled?: boolean | undefined
  oncCertificateProviders?: OncCertificateProvider[] | undefined
  openNetworkConfiguration?: { [x: string]: { [x: string]: unknown } } | undefined
  outgoingBeamDisabled?: boolean | undefined
  outgoingCallsDisabled?: boolean | undefined
  passwordPolicies?: PasswordRequirements[] | undefined
  passwordRequirements?: PasswordRequirements | undefined
  permissionGrants?: PermissionGrant[] | undefined
  permittedAccessibilityServices?: PackageNameList | undefined
  permittedInputMethods?: PackageNameList | undefined
  persistentPreferredActivities?: PersistentPreferredActivity[] | undefined
  personalUsagePolicies?: PersonalUsagePolicies | undefined
  playStoreMode?: 'PLAY_STORE_MODE_UNSPECIFIED' | 'WHITELIST' | 'BLACKLIST' | undefined
  policyEnforcementRules?: PolicyEnforcementRule[] | undefined
  preferentialNetworkService?:
    | 'PREFERENTIAL_NETWORK_SERVICE_UNSPECIFIED'
    | 'PREFERENTIAL_NETWORK_SERVICE_DISABLED'
    | 'PREFERENTIAL_NETWORK_SERVICE_ENABLED'
    | undefined
  privateKeySelectionEnabled?: boolean | undefined
  recommendedGlobalProxy?: ProxyInfo | undefined
  removeUserDisabled?: boolean | undefined
  safeBootDisabled?: boolean | undefined
  screenCaptureDisabled?: boolean | undefined
  setUserIconDisabled?: boolean | undefined
  setWallpaperDisabled?: boolean | undefined
  setupActions?: SetupAction[] | undefined
  shareLocationDisabled?: boolean | undefined
  shortSupportMessage?: UserFacingMessage | undefined
  skipFirstUseHintsEnabled?: boolean | undefined
  smsDisabled?: boolean | undefined
  statusBarDisabled?: boolean | undefined
  statusReportingSettings?: StatusReportingSettings | undefined
  stayOnPluggedModes?:
    | ('BATTERY_PLUGGED_MODE_UNSPECIFIED' | 'AC' | 'USB' | 'WIRELESS')[]
    | undefined
  systemUpdate?: SystemUpdate | undefined
  tetheringConfigDisabled?: boolean | undefined
  uninstallAppsDisabled?: boolean | undefined
  unmuteMicrophoneDisabled?: boolean | undefined
  usageLog?: UsageLog | undefined
  usbFileTransferDisabled?: boolean | undefined
  usbMassStorageEnabled?: boolean | undefined
  version?: string | undefined
  vpnConfigDisabled?: boolean | undefined
  wifiConfigDisabled?: boolean | undefined
  wifiConfigsLockdownEnabled?: boolean | undefined
}
type ListPoliciesResponse = { nextPageToken?: string | undefined; policies?: Policy[] | undefined }
type ListWebAppsResponse = { nextPageToken?: string | undefined; webApps?: WebApp[] | undefined }
type WebToken = {
  enabledFeatures?:
    | (
        | 'FEATURE_UNSPECIFIED'
        | 'PLAY_SEARCH'
        | 'PRIVATE_APPS'
        | 'WEB_APPS'
        | 'STORE_BUILDER'
        | 'MANAGED_CONFIGURATIONS'
        | 'ZERO_TOUCH_CUSTOMER_MANAGEMENT'
      )[]
    | undefined
  name?: string | undefined
  parentFrameUrl?: string | undefined
  permissions?: ('WEB_TOKEN_PERMISSION_UNSPECIFIED' | 'APPROVE_APPS')[] | undefined
  value?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/enterprises': {
      $get: {
        input: {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            projectId?: string | undefined
            view?: 'ENTERPRISE_VIEW_UNSPECIFIED' | 'BASIC' | undefined
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
        output: ListEnterprisesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          query: {
            agreementAccepted?: boolean | undefined
            enterpriseToken?: string | undefined
            projectId?: string | undefined
            signupUrlName?: string | undefined
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
        } & { json: Enterprise }
        output: Enterprise
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/signupUrls': {
      $post: {
        input: {
          query: {
            callbackUrl?: string | undefined
            projectId?: string | undefined
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
        output: SignupUrl
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name': {
      $delete: {
        input: { param: { name: string } } & {
          query: {
            wipeDataFlags?:
              | (
                  | 'WIPE_DATA_FLAG_UNSPECIFIED'
                  | 'PRESERVE_RESET_PROTECTION_DATA'
                  | 'WIPE_EXTERNAL_STORAGE'
                )[]
              | undefined
            wipeReasonMessage?: string | undefined
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
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { name: string } } & {
          query: {
            filter?: string | undefined
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
        output: WebApp
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
          query: {
            updateMask?: string | undefined
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
        } & { json: WebApp }
        output: WebApp
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:cancel': {
      $post: {
        input: { param: { name: string } } & {
          query: {
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
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:issueCommand': {
      $post: {
        input: { param: { name: string } } & {
          query: {
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
        } & { json: Command }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/devices': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
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
        output: ListDevicesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/enrollmentTokens': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
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
        output: ListEnrollmentTokensResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
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
        } & { json: EnrollmentToken }
        output: EnrollmentToken
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/policies': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
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
        output: ListPoliciesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/webApps': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
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
        output: ListWebAppsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
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
        } & { json: WebApp }
        output: WebApp
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/webTokens': {
      $post: {
        input: { param: { parent: string } } & {
          query: {
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
        } & { json: WebToken }
        output: WebToken
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
