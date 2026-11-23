type Administrator = { email?: string | undefined }
type GoogleAuthenticationSettings = {
  dedicatedDevicesAllowed?:
    | 'dedicatedDevicesAllowedUnspecified'
    | 'disallowed'
    | 'allowed'
    | undefined
  googleAuthenticationRequired?:
    | 'googleAuthenticationRequiredUnspecified'
    | 'notRequired'
    | 'required'
    | undefined
}
type Enterprise = {
  administrator?: Administrator[] | undefined
  googleAuthenticationSettings?: GoogleAuthenticationSettings | undefined
  id?: string | undefined
  name?: string | undefined
  primaryDomain?: string | undefined
}
type EnterprisesListResponse = { enterprise?: Enterprise[] | undefined }
type AppRestrictionsSchemaChangeEvent = { productId?: string | undefined }
type AppUpdateEvent = { productId?: string | undefined }
type KeyedAppState = {
  data?: string | undefined
  key?: string | undefined
  message?: string | undefined
  severity?: 'severityUnknown' | 'severityInfo' | 'severityError' | undefined
  stateTimestampMillis?: string | undefined
}
type AppState = { keyedAppState?: KeyedAppState[] | undefined; packageName?: string | undefined }
type DeviceReport = {
  appState?: AppState[] | undefined
  lastUpdatedTimestampMillis?: string | undefined
}
type DeviceReportUpdateEvent = {
  deviceId?: string | undefined
  report?: DeviceReport | undefined
  userId?: string | undefined
}
type InstallFailureEvent = {
  deviceId?: string | undefined
  failureDetails?: string | undefined
  failureReason?: 'unknown' | 'timeout' | undefined
  productId?: string | undefined
  userId?: string | undefined
}
type NewDeviceEvent = {
  deviceId?: string | undefined
  dpcPackageName?: string | undefined
  managementType?: 'managedDevice' | 'managedProfile' | undefined
  userId?: string | undefined
}
type NewPermissionsEvent = {
  approvedPermissions?: string[] | undefined
  productId?: string | undefined
  requestedPermissions?: string[] | undefined
}
type ProductApprovalEvent = {
  approved?: 'unknown' | 'approved' | 'unapproved' | undefined
  productId?: string | undefined
}
type ProductAvailabilityChangeEvent = {
  availabilityStatus?: 'unknown' | 'available' | 'removed' | 'unpublished' | undefined
  productId?: string | undefined
}
type Notification = {
  appRestrictionsSchemaChangeEvent?: AppRestrictionsSchemaChangeEvent | undefined
  appUpdateEvent?: AppUpdateEvent | undefined
  deviceReportUpdateEvent?: DeviceReportUpdateEvent | undefined
  enterpriseId?: string | undefined
  installFailureEvent?: InstallFailureEvent | undefined
  newDeviceEvent?: NewDeviceEvent | undefined
  newPermissionsEvent?: NewPermissionsEvent | undefined
  notificationType?:
    | 'unknown'
    | 'testNotification'
    | 'productApproval'
    | 'installFailure'
    | 'appUpdate'
    | 'newPermissions'
    | 'appRestricionsSchemaChange'
    | 'productAvailabilityChange'
    | 'newDevice'
    | 'deviceReportUpdate'
    | undefined
  productApprovalEvent?: ProductApprovalEvent | undefined
  productAvailabilityChangeEvent?: ProductAvailabilityChangeEvent | undefined
  timestampMillis?: string | undefined
}
type NotificationSet = {
  notification?: Notification[] | undefined
  notificationSetId?: string | undefined
}
type SignupInfo = {
  completionToken?: string | undefined
  kind?: string | undefined
  url?: string | undefined
}
type EnterpriseAccount = { accountEmail?: string | undefined }
type CreateEnrollmentTokenResponse = { enrollmentToken?: string | undefined }
type AdministratorWebTokenSpecManagedConfigurations = { enabled?: boolean | undefined }
type AdministratorWebTokenSpecPlaySearch = {
  approveApps?: boolean | undefined
  enabled?: boolean | undefined
}
type AdministratorWebTokenSpecPrivateApps = { enabled?: boolean | undefined }
type AdministratorWebTokenSpecStoreBuilder = { enabled?: boolean | undefined }
type AdministratorWebTokenSpecWebApps = { enabled?: boolean | undefined }
type AdministratorWebTokenSpecZeroTouch = { enabled?: boolean | undefined }
type AdministratorWebTokenSpec = {
  managedConfigurations?: AdministratorWebTokenSpecManagedConfigurations | undefined
  parent?: string | undefined
  permission?: ('unknown' | 'approveApps' | 'manageMcm')[] | undefined
  playSearch?: AdministratorWebTokenSpecPlaySearch | undefined
  privateApps?: AdministratorWebTokenSpecPrivateApps | undefined
  storeBuilder?: AdministratorWebTokenSpecStoreBuilder | undefined
  webApps?: AdministratorWebTokenSpecWebApps | undefined
  zeroTouch?: AdministratorWebTokenSpecZeroTouch | undefined
}
type AdministratorWebToken = { token?: string | undefined }
type GroupLicense = {
  acquisitionKind?: 'free' | 'bulkPurchase' | undefined
  approval?: 'approved' | 'unapproved' | undefined
  numProvisioned?: number | undefined
  numPurchased?: number | undefined
  permissions?: 'currentApproved' | 'needsReapproval' | 'allCurrentAndFutureApproved' | undefined
  productId?: string | undefined
}
type GroupLicensesListResponse = { groupLicense?: GroupLicense[] | undefined }
type User = {
  accountIdentifier?: string | undefined
  accountType?: 'deviceAccount' | 'userAccount' | undefined
  displayName?: string | undefined
  id?: string | undefined
  managementType?: 'googleManaged' | 'emmManaged' | undefined
  primaryEmail?: string | undefined
}
type GroupLicenseUsersListResponse = { user?: User[] | undefined }
type PageInfo = {
  resultPerPage?: number | undefined
  startIndex?: number | undefined
  totalResults?: number | undefined
}
type AppRestrictionsSchemaRestrictionRestrictionValue = {
  type?:
    | 'bool'
    | 'string'
    | 'integer'
    | 'choice'
    | 'multiselect'
    | 'hidden'
    | 'bundle'
    | 'bundleArray'
    | undefined
  valueBool?: boolean | undefined
  valueInteger?: number | undefined
  valueMultiselect?: string[] | undefined
  valueString?: string | undefined
}
type AppRestrictionsSchemaRestriction = {
  defaultValue?: AppRestrictionsSchemaRestrictionRestrictionValue | undefined
  description?: string | undefined
  entry?: string[] | undefined
  entryValue?: string[] | undefined
  key?: string | undefined
  nestedRestriction?: AppRestrictionsSchemaRestriction[] | undefined
  restrictionType?:
    | 'bool'
    | 'string'
    | 'integer'
    | 'choice'
    | 'multiselect'
    | 'hidden'
    | 'bundle'
    | 'bundleArray'
    | undefined
  title?: string | undefined
}
type AppRestrictionsSchema = {
  kind?: string | undefined
  restrictions?: AppRestrictionsSchemaRestriction[] | undefined
}
type TrackInfo = { trackAlias?: string | undefined; trackId?: string | undefined }
type AppVersion = {
  isProduction?: boolean | undefined
  track?: 'appTrackUnspecified' | 'production' | 'beta' | 'alpha' | undefined
  trackId?: string[] | undefined
  versionCode?: number | undefined
  versionString?: string | undefined
}
type ProductPermission = {
  permissionId?: string | undefined
  state?: 'required' | 'accepted' | undefined
}
type ProductSigningCertificate = {
  certificateHashSha1?: string | undefined
  certificateHashSha256?: string | undefined
}
type Product = {
  appRestrictionsSchema?: AppRestrictionsSchema | undefined
  appTracks?: TrackInfo[] | undefined
  appVersion?: AppVersion[] | undefined
  authorName?: string | undefined
  availableCountries?: string[] | undefined
  availableTracks?: ('appTrackUnspecified' | 'production' | 'beta' | 'alpha')[] | undefined
  category?: string | undefined
  contentRating?: 'ratingUnknown' | 'all' | 'preTeen' | 'teen' | 'mature' | undefined
  description?: string | undefined
  detailsUrl?: string | undefined
  distributionChannel?:
    | 'publicGoogleHosted'
    | 'privateGoogleHosted'
    | 'privateSelfHosted'
    | undefined
  features?: ('featureUnknown' | 'vpnApp')[] | undefined
  iconUrl?: string | undefined
  lastUpdatedTimestampMillis?: string | undefined
  minAndroidSdkVersion?: number | undefined
  permissions?: ProductPermission[] | undefined
  productId?: string | undefined
  productPricing?: 'unknown' | 'free' | 'freeWithInAppPurchase' | 'paid' | undefined
  recentChanges?: string | undefined
  requiresContainerApp?: boolean | undefined
  screenshotUrls?: string[] | undefined
  signingCertificate?: ProductSigningCertificate | undefined
  smallIconUrl?: string | undefined
  title?: string | undefined
  workDetailsUrl?: string | undefined
}
type TokenPagination = {
  nextPageToken?: string | undefined
  previousPageToken?: string | undefined
}
type ProductsListResponse = {
  pageInfo?: PageInfo | undefined
  product?: Product[] | undefined
  tokenPagination?: TokenPagination | undefined
}
type ApprovalUrlInfo = { approvalUrl?: string | undefined }
type ProductsApproveRequest = {
  approvalUrlInfo?: ApprovalUrlInfo | undefined
  approvedPermissions?: 'currentPermissionsOnly' | 'allPermissions' | undefined
}
type ProductsGenerateApprovalUrlResponse = { url?: string | undefined }
type ManagedConfigurationsSettings = {
  lastUpdatedTimestampMillis?: string | undefined
  mcmId?: string | undefined
  name?: string | undefined
}
type ManagedConfigurationsSettingsListResponse = {
  managedConfigurationsSettings?: ManagedConfigurationsSettings[] | undefined
}
type ProductPermissions = {
  permission?: ProductPermission[] | undefined
  productId?: string | undefined
}
type EnterprisesSendTestPushNotificationResponse = {
  messageId?: string | undefined
  topicName?: string | undefined
}
type ServiceAccountKey = {
  data?: string | undefined
  id?: string | undefined
  publicData?: string | undefined
  type?: 'googleCredentials' | 'pkcs12' | undefined
}
type ServiceAccount = { key?: ServiceAccountKey | undefined; name?: string | undefined }
type ServiceAccountKeysListResponse = { serviceAccountKey?: ServiceAccountKey[] | undefined }
type StoreLayout = {
  homepageId?: string | undefined
  storeLayoutType?: 'unknown' | 'basic' | 'custom' | undefined
}
type LocalizedText = { locale?: string | undefined; text?: string | undefined }
type StorePage = {
  id?: string | undefined
  link?: string[] | undefined
  name?: LocalizedText[] | undefined
}
type StoreLayoutPagesListResponse = { page?: StorePage[] | undefined }
type StoreCluster = {
  id?: string | undefined
  name?: LocalizedText[] | undefined
  orderInPage?: string | undefined
  productId?: string[] | undefined
}
type StoreLayoutClustersListResponse = { cluster?: StoreCluster[] | undefined }
type UsersListResponse = { user?: User[] | undefined }
type AuthenticationToken = { token?: string | undefined }
type ProductVisibility = {
  productId?: string | undefined
  trackIds?: string[] | undefined
  tracks?: ('appTrackUnspecified' | 'production' | 'beta' | 'alpha')[] | undefined
}
type ProductSet = {
  productId?: string[] | undefined
  productSetBehavior?: 'unknown' | 'whitelist' | 'includeAll' | 'allApproved' | undefined
  productVisibility?: ProductVisibility[] | undefined
}
type MaintenanceWindow = {
  durationMs?: string | undefined
  startTimeAfterMidnightMs?: string | undefined
}
type AutoInstallConstraint = {
  chargingStateConstraint?:
    | 'chargingStateConstraintUnspecified'
    | 'chargingNotRequired'
    | 'chargingRequired'
    | undefined
  deviceIdleStateConstraint?:
    | 'deviceIdleStateConstraintUnspecified'
    | 'deviceIdleNotRequired'
    | 'deviceIdleRequired'
    | undefined
  networkTypeConstraint?:
    | 'networkTypeConstraintUnspecified'
    | 'anyNetwork'
    | 'unmeteredNetwork'
    | undefined
}
type AutoInstallPolicy = {
  autoInstallConstraint?: AutoInstallConstraint[] | undefined
  autoInstallMode?:
    | 'autoInstallModeUnspecified'
    | 'doNotAutoInstall'
    | 'autoInstallOnce'
    | 'forceAutoInstall'
    | undefined
  autoInstallPriority?: number | undefined
  minimumVersionCode?: number | undefined
}
type EnterpriseAuthenticationAppLinkConfig = { uri?: string | undefined }
type VariableSet = { placeholder?: string | undefined; userValue?: string | undefined }
type ConfigurationVariables = {
  mcmId?: string | undefined
  variableSet?: VariableSet[] | undefined
}
type ManagedPropertyBundle = { managedProperty?: ManagedProperty[] | undefined }
type ManagedProperty = {
  key?: string | undefined
  valueBool?: boolean | undefined
  valueBundle?: ManagedPropertyBundle | undefined
  valueBundleArray?: ManagedPropertyBundle[] | undefined
  valueInteger?: number | undefined
  valueString?: string | undefined
  valueStringArray?: string[] | undefined
}
type ManagedConfiguration = {
  configurationVariables?: ConfigurationVariables | undefined
  kind?: string | undefined
  managedProperty?: ManagedProperty[] | undefined
  productId?: string | undefined
}
type ProductPolicy = {
  autoInstallPolicy?: AutoInstallPolicy | undefined
  autoUpdateMode?:
    | 'autoUpdateModeUnspecified'
    | 'autoUpdateDefault'
    | 'autoUpdatePostponed'
    | 'autoUpdateHighPriority'
    | undefined
  enterpriseAuthenticationAppLinkConfigs?: EnterpriseAuthenticationAppLinkConfig[] | undefined
  managedConfiguration?: ManagedConfiguration | undefined
  productId?: string | undefined
  trackIds?: string[] | undefined
  tracks?: ('appTrackUnspecified' | 'production' | 'beta' | 'alpha')[] | undefined
}
type Policy = {
  autoUpdatePolicy?:
    | 'autoUpdatePolicyUnspecified'
    | 'choiceToTheUser'
    | 'never'
    | 'wifiOnly'
    | 'always'
    | undefined
  deviceReportPolicy?:
    | 'deviceReportPolicyUnspecified'
    | 'deviceReportDisabled'
    | 'deviceReportEnabled'
    | undefined
  maintenanceWindow?: MaintenanceWindow | undefined
  productAvailabilityPolicy?:
    | 'productAvailabilityPolicyUnspecified'
    | 'whitelist'
    | 'all'
    | undefined
  productPolicy?: ProductPolicy[] | undefined
}
type Device = {
  androidId?: string | undefined
  device?: string | undefined
  latestBuildFingerprint?: string | undefined
  maker?: string | undefined
  managementType?:
    | 'managedDevice'
    | 'managedProfile'
    | 'containerApp'
    | 'unmanagedProfile'
    | undefined
  model?: string | undefined
  policy?: Policy | undefined
  product?: string | undefined
  report?: DeviceReport | undefined
  retailBrand?: string | undefined
  sdkVersion?: number | undefined
}
type DevicesListResponse = { device?: Device[] | undefined }
type Install = {
  installState?: 'installed' | 'installPending' | undefined
  productId?: string | undefined
  versionCode?: number | undefined
}
type InstallsListResponse = { install?: Install[] | undefined }
type ManagedConfigurationsForDeviceListResponse = {
  managedConfigurationForDevice?: ManagedConfiguration[] | undefined
}
type DeviceState = { accountState?: 'enabled' | 'disabled' | undefined }
type Entitlement = {
  productId?: string | undefined
  reason?: 'free' | 'groupLicense' | 'userPurchase' | undefined
}
type EntitlementsListResponse = { entitlement?: Entitlement[] | undefined }
type ManagedConfigurationsForUserListResponse = {
  managedConfigurationForUser?: ManagedConfiguration[] | undefined
}
type WebAppIcon = { imageData?: string | undefined }
type WebApp = {
  displayMode?: 'displayModeUnspecified' | 'minimalUi' | 'standalone' | 'fullScreen' | undefined
  icons?: WebAppIcon[] | undefined
  isPublished?: boolean | undefined
  startUrl?: string | undefined
  title?: string | undefined
  versionCode?: string | undefined
  webAppId?: string | undefined
}
type WebAppsListResponse = { webApp?: WebApp[] | undefined }
type Permission = {
  description?: string | undefined
  name?: string | undefined
  permissionId?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/androidenterprise/v1/enterprises': {
      $get: {
        input: {
          query: {
            domain: string
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
        output: EnterprisesListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidenterprise/v1/enterprises/acknowledgeNotificationSet': {
      $post: {
        input: {
          query: {
            notificationSetId?: string | undefined
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
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/androidenterprise/v1/enterprises/completeSignup': {
      $post: {
        input: {
          query: {
            completionToken?: string | undefined
            enterpriseToken?: string | undefined
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
        output: Enterprise
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidenterprise/v1/enterprises/enroll': {
      $post: {
        input: {
          query: {
            token: string
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
    '/androidenterprise/v1/enterprises/pullNotificationSet': {
      $post: {
        input: {
          query: {
            requestMode?: 'waitForNotifications' | 'returnImmediately' | undefined
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
        output: NotificationSet
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidenterprise/v1/enterprises/signupUrl': {
      $post: {
        input: {
          query: {
            callbackUrl?: string | undefined
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
        output: SignupInfo
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidenterprise/v1/enterprises/:enterpriseId': {
      $get: {
        input: { param: { enterpriseId: string } } & {
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
        output: Enterprise
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidenterprise/v1/enterprises/:enterpriseId/account': {
      $put: {
        input: { param: { enterpriseId: string } } & {
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
        } & { json: EnterpriseAccount }
        output: EnterpriseAccount
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidenterprise/v1/enterprises/:enterpriseId/createEnrollmentToken': {
      $post: {
        input: { param: { enterpriseId: string } } & {
          query: {
            deviceType?: 'unknown' | 'dedicatedDevice' | 'knowledgeWorker' | undefined
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
        output: CreateEnrollmentTokenResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidenterprise/v1/enterprises/:enterpriseId/createWebToken': {
      $post: {
        input: { param: { enterpriseId: string } } & {
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
        } & { json: AdministratorWebTokenSpec }
        output: AdministratorWebToken
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidenterprise/v1/enterprises/:enterpriseId/groupLicenses': {
      $get: {
        input: { param: { enterpriseId: string } } & {
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
        output: GroupLicensesListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidenterprise/v1/enterprises/:enterpriseId/groupLicenses/:groupLicenseId': {
      $get: {
        input: { param: { enterpriseId: string; groupLicenseId: string } } & {
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
        output: GroupLicense
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidenterprise/v1/enterprises/:enterpriseId/groupLicenses/:groupLicenseId/users': {
      $get: {
        input: { param: { enterpriseId: string; groupLicenseId: string } } & {
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
        output: GroupLicenseUsersListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidenterprise/v1/enterprises/:enterpriseId/products': {
      $get: {
        input: { param: { enterpriseId: string } } & {
          query: {
            approved?: boolean | undefined
            language?: string | undefined
            maxResults?: number | undefined
            query?: string | undefined
            token?: string | undefined
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
        output: ProductsListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidenterprise/v1/enterprises/:enterpriseId/products/:productId': {
      $get: {
        input: { param: { enterpriseId: string; productId: string } } & {
          query: {
            language?: string | undefined
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
        output: Product
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidenterprise/v1/enterprises/:enterpriseId/products/:productId/appRestrictionsSchema': {
      $get: {
        input: { param: { enterpriseId: string; productId: string } } & {
          query: {
            language?: string | undefined
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
        output: AppRestrictionsSchema
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidenterprise/v1/enterprises/:enterpriseId/products/:productId/approve': {
      $post: {
        input: { param: { enterpriseId: string; productId: string } } & {
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
        } & { json: ProductsApproveRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/androidenterprise/v1/enterprises/:enterpriseId/products/:productId/generateApprovalUrl': {
      $post: {
        input: { param: { enterpriseId: string; productId: string } } & {
          query: {
            languageCode?: string | undefined
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
        output: ProductsGenerateApprovalUrlResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidenterprise/v1/enterprises/:enterpriseId/products/:productId/managedConfigurationsSettings': {
      $get: {
        input: { param: { enterpriseId: string; productId: string } } & {
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
        output: ManagedConfigurationsSettingsListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidenterprise/v1/enterprises/:enterpriseId/products/:productId/permissions': {
      $get: {
        input: { param: { enterpriseId: string; productId: string } } & {
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
        output: ProductPermissions
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidenterprise/v1/enterprises/:enterpriseId/products/:productId/unapprove': {
      $post: {
        input: { param: { enterpriseId: string; productId: string } } & {
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
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/androidenterprise/v1/enterprises/:enterpriseId/sendTestPushNotification': {
      $post: {
        input: { param: { enterpriseId: string } } & {
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
        output: EnterprisesSendTestPushNotificationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidenterprise/v1/enterprises/:enterpriseId/serviceAccount': {
      $get: {
        input: { param: { enterpriseId: string } } & {
          query: {
            keyType?: 'googleCredentials' | 'pkcs12' | undefined
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
        output: ServiceAccount
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidenterprise/v1/enterprises/:enterpriseId/serviceAccountKeys': {
      $get: {
        input: { param: { enterpriseId: string } } & {
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
        output: ServiceAccountKeysListResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { enterpriseId: string } } & {
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
        } & { json: ServiceAccountKey }
        output: ServiceAccountKey
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidenterprise/v1/enterprises/:enterpriseId/serviceAccountKeys/:keyId': {
      $delete: {
        input: { param: { enterpriseId: string; keyId: string } } & {
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
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/androidenterprise/v1/enterprises/:enterpriseId/storeLayout': {
      $get: {
        input: { param: { enterpriseId: string } } & {
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
        output: StoreLayout
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { enterpriseId: string } } & {
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
        } & { json: StoreLayout }
        output: StoreLayout
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidenterprise/v1/enterprises/:enterpriseId/storeLayout/pages': {
      $get: {
        input: { param: { enterpriseId: string } } & {
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
        output: StoreLayoutPagesListResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { enterpriseId: string } } & {
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
        } & { json: StorePage }
        output: StorePage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidenterprise/v1/enterprises/:enterpriseId/storeLayout/pages/:pageId': {
      $delete: {
        input: { param: { enterpriseId: string; pageId: string } } & {
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
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { enterpriseId: string; pageId: string } } & {
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
        output: StorePage
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { enterpriseId: string; pageId: string } } & {
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
        } & { json: StorePage }
        output: StorePage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidenterprise/v1/enterprises/:enterpriseId/storeLayout/pages/:pageId/clusters': {
      $get: {
        input: { param: { enterpriseId: string; pageId: string } } & {
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
        output: StoreLayoutClustersListResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { enterpriseId: string; pageId: string } } & {
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
        } & { json: StoreCluster }
        output: StoreCluster
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidenterprise/v1/enterprises/:enterpriseId/storeLayout/pages/:pageId/clusters/:clusterId': {
      $delete: {
        input: { param: { enterpriseId: string; pageId: string; clusterId: string } } & {
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
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { enterpriseId: string; pageId: string; clusterId: string } } & {
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
        output: StoreCluster
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { enterpriseId: string; pageId: string; clusterId: string } } & {
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
        } & { json: StoreCluster }
        output: StoreCluster
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidenterprise/v1/enterprises/:enterpriseId/unenroll': {
      $post: {
        input: { param: { enterpriseId: string } } & {
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
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/androidenterprise/v1/enterprises/:enterpriseId/users': {
      $get: {
        input: { param: { enterpriseId: string } } & {
          query: {
            email: string
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
        output: UsersListResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { enterpriseId: string } } & {
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
        } & { json: User }
        output: User
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId': {
      $delete: {
        input: { param: { enterpriseId: string; userId: string } } & {
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
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { enterpriseId: string; userId: string } } & {
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
        output: User
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { enterpriseId: string; userId: string } } & {
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
        } & { json: User }
        output: User
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/authenticationToken': {
      $post: {
        input: { param: { enterpriseId: string; userId: string } } & {
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
        output: AuthenticationToken
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/availableProductSet': {
      $get: {
        input: { param: { enterpriseId: string; userId: string } } & {
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
        output: ProductSet
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { enterpriseId: string; userId: string } } & {
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
        } & { json: ProductSet }
        output: ProductSet
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/deviceAccess': {
      $delete: {
        input: { param: { enterpriseId: string; userId: string } } & {
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
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/devices': {
      $get: {
        input: { param: { enterpriseId: string; userId: string } } & {
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
        output: DevicesListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/devices/:deviceId': {
      $get: {
        input: { param: { enterpriseId: string; userId: string; deviceId: string } } & {
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
        output: Device
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { enterpriseId: string; userId: string; deviceId: string } } & {
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
        } & { json: Device }
        output: Device
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/devices/:deviceId/forceReportUpload': {
      $post: {
        input: { param: { enterpriseId: string; userId: string; deviceId: string } } & {
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
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/devices/:deviceId/installs': {
      $get: {
        input: { param: { enterpriseId: string; userId: string; deviceId: string } } & {
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
        output: InstallsListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/devices/:deviceId/installs/:installId': {
      $delete: {
        input: {
          param: { enterpriseId: string; userId: string; deviceId: string; installId: string }
        } & {
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
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: {
          param: { enterpriseId: string; userId: string; deviceId: string; installId: string }
        } & {
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
        output: Install
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: {
          param: { enterpriseId: string; userId: string; deviceId: string; installId: string }
        } & {
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
        } & { json: Install }
        output: Install
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/devices/:deviceId/managedConfigurationsForDevice': {
      $get: {
        input: { param: { enterpriseId: string; userId: string; deviceId: string } } & {
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
        output: ManagedConfigurationsForDeviceListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/devices/:deviceId/managedConfigurationsForDevice/:managedConfigurationForDeviceId': {
      $delete: {
        input: {
          param: {
            enterpriseId: string
            userId: string
            deviceId: string
            managedConfigurationForDeviceId: string
          }
        } & {
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
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: {
          param: {
            enterpriseId: string
            userId: string
            deviceId: string
            managedConfigurationForDeviceId: string
          }
        } & {
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
        output: ManagedConfiguration
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: {
          param: {
            enterpriseId: string
            userId: string
            deviceId: string
            managedConfigurationForDeviceId: string
          }
        } & {
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
        } & { json: ManagedConfiguration }
        output: ManagedConfiguration
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/devices/:deviceId/state': {
      $get: {
        input: { param: { enterpriseId: string; userId: string; deviceId: string } } & {
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
        output: DeviceState
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { enterpriseId: string; userId: string; deviceId: string } } & {
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
        } & { json: DeviceState }
        output: DeviceState
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/entitlements': {
      $get: {
        input: { param: { enterpriseId: string; userId: string } } & {
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
        output: EntitlementsListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/entitlements/:entitlementId': {
      $delete: {
        input: { param: { enterpriseId: string; userId: string; entitlementId: string } } & {
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
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { enterpriseId: string; userId: string; entitlementId: string } } & {
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
        output: Entitlement
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { enterpriseId: string; userId: string; entitlementId: string } } & {
          query: {
            install?: boolean | undefined
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
        } & { json: Entitlement }
        output: Entitlement
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/managedConfigurationsForUser': {
      $get: {
        input: { param: { enterpriseId: string; userId: string } } & {
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
        output: ManagedConfigurationsForUserListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidenterprise/v1/enterprises/:enterpriseId/users/:userId/managedConfigurationsForUser/:managedConfigurationForUserId': {
      $delete: {
        input: {
          param: { enterpriseId: string; userId: string; managedConfigurationForUserId: string }
        } & {
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
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: {
          param: { enterpriseId: string; userId: string; managedConfigurationForUserId: string }
        } & {
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
        output: ManagedConfiguration
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: {
          param: { enterpriseId: string; userId: string; managedConfigurationForUserId: string }
        } & {
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
        } & { json: ManagedConfiguration }
        output: ManagedConfiguration
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidenterprise/v1/enterprises/:enterpriseId/webApps': {
      $get: {
        input: { param: { enterpriseId: string } } & {
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
        output: WebAppsListResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { enterpriseId: string } } & {
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
    '/androidenterprise/v1/enterprises/:enterpriseId/webApps/:webAppId': {
      $delete: {
        input: { param: { enterpriseId: string; webAppId: string } } & {
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
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { enterpriseId: string; webAppId: string } } & {
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
        output: WebApp
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { enterpriseId: string; webAppId: string } } & {
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
    '/androidenterprise/v1/permissions/:permissionId': {
      $get: {
        input: { param: { permissionId: string } } & {
          query: {
            language?: string | undefined
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
        output: Permission
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
